const SUPABASE_URL = 'https://iesywolfxwsrmypxqosa.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imllc3l3b2xmeHdzcm15cHhxb3NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNzg5MjQsImV4cCI6MjA5MDk1NDkyNH0.OUmTamTqOZbpTrT-5keF_LmpYc25IGpw77ptgiNBvPw';
const SPOTIFY_CLIENT_ID = 'a48aa2491118412dbbe582a3690444a0';
const SPOTIFY_CLIENT_SECRET = '74386c83a8ab4a0795049001b7606345';
const EMAILJS_SERVICE_ID = 'service_mob8y6i';
const EMAILJS_TEMPLATE_ID = 'template_eyvych6';
const EMAILJS_PUBLIC_KEY = 'equrdAMBAhHGf-ZXz';

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

emailjs.init(EMAILJS_PUBLIC_KEY);

let spotifyToken = null;
let spotifyTokenExpiry = 0;
let selectedTrack = null;
let currentPage = 'home';
let lastGeneratedLink = '';
let lastMessageData = {};
let selectedImageFile = null;

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';
  document.querySelector('.theme-toggle').textContent = isDark ? '☀' : '☽';
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

function navigate(page, e) {
  if (e) e.preventDefault();
  currentPage = page;
  const url = window.location.pathname + (page !== 'home' ? '?p=' + page : '');
  history.pushState({ page }, '', url);
  showPage(page);
}

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => l.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  const mEl = document.getElementById('mnav-' + page);
  if (mEl) mEl.classList.add('active');
  document.getElementById('view-screen').classList.remove('visible');
  document.getElementById('loading-screen').style.display = 'none';
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function getSpotifyToken() {
  if (SPOTIFY_CLIENT_ID === 'YOUR_SPOTIFY_CLIENT_ID') return null;
  if (spotifyToken && Date.now() < spotifyTokenExpiry) return spotifyToken;
  try {
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`
    });
    const data = await res.json();
    if (data.access_token) {
      spotifyToken = data.access_token;
      spotifyTokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
      return spotifyToken;
    }
  } catch {}
  return null;
}

async function searchSpotify() {
  const query = document.getElementById('spotify-query').value.trim();
  if (!query) return;
  const resultsEl = document.getElementById('spotify-results');
  resultsEl.innerHTML = '<div class="search-msg">Searching…</div>';
  resultsEl.classList.add('visible');
  const token = await getSpotifyToken();
  if (!token) {
    resultsEl.innerHTML = '<div class="search-msg">Could not reach Spotify. Check your credentials.</div>';
    return;
  }
  try {
    const res = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=8`, {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const data = await res.json();
    const tracks = data.tracks?.items || [];
    if (!tracks.length) {
      resultsEl.innerHTML = '<div class="search-msg">No songs found. Try a different search.</div>';
      return;
    }
    resultsEl.innerHTML = tracks.map(t => {
      const art = t.album?.images?.[2]?.url || '';
      const artist = t.artists?.map(a => a.name).join(', ') || '';
      const spotifyUrl = t.external_urls?.spotify || '';
      return `<div class="track-item" onclick="selectTrack('${t.id}','${escAttr(t.name)}','${escAttr(artist)}','${escAttr(art)}','${escAttr(spotifyUrl)}')">
        ${art ? `<img class="track-art" src="${art}" alt="" loading="lazy" />` : '<div class="track-art-placeholder">🎵</div>'}
        <div class="track-info">
          <div class="track-name">${escHtml(t.name)}</div>
          <div class="track-artist">${escHtml(artist)}</div>
        </div>
        <button class="btn btn-ghost btn-sm track-select-btn">Select</button>
      </div>`;
    }).join('');
  } catch {
    resultsEl.innerHTML = '<div class="search-msg">Search failed. Please try again.</div>';
  }
}

function selectTrack(id, name, artist, art, spotifyUrl) {
  selectedTrack = {
    id, name, artist, art, spotifyUrl,
    embedUrl: `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`
  };
  document.getElementById('selected-name').textContent = name;
  document.getElementById('selected-artist').textContent = artist;
  const artEl = document.getElementById('selected-art');
  if (art) { artEl.src = art; artEl.style.display = 'block'; } else { artEl.style.display = 'none'; }
  document.getElementById('selected-song-preview').classList.add('visible');
  document.getElementById('spotify-search-area').style.display = 'none';
  document.getElementById('spotify-results').classList.remove('visible');
  document.getElementById('embed-preview').src = selectedTrack.embedUrl;
  document.getElementById('embed-preview-block').classList.add('visible');
  document.getElementById('field-song').classList.remove('has-error');
}

function clearSong() {
  selectedTrack = null;
  document.getElementById('selected-song-preview').classList.remove('visible');
  document.getElementById('spotify-search-area').style.display = 'block';
  document.getElementById('spotify-results').classList.remove('visible');
  document.getElementById('spotify-query').value = '';
  document.getElementById('embed-preview').src = '';
  document.getElementById('embed-preview-block').classList.remove('visible');
}

function checkSpotifyConfig() {
  if (SPOTIFY_CLIENT_ID === 'YOUR_SPOTIFY_CLIENT_ID') {
    document.getElementById('spotify-not-configured').style.display = 'block';
    document.getElementById('spotify-ui').style.display = 'none';
  }
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const maxSize = 30 * 1024 * 1024;
  if (file.size > maxSize) {
    const errEl = document.getElementById('image-error-msg');
    errEl.textContent = 'Image is too large. Max size is 30MB.';
    errEl.style.display = 'block';
    event.target.value = '';
    return;
  }
  document.getElementById('image-error-msg').style.display = 'none';
  selectedImageFile = file;
  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById('image-preview-img').src = e.target.result;
    document.getElementById('image-upload-placeholder').style.display = 'none';
    document.getElementById('image-preview-wrap').style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function clearImage(e) {
  e.stopPropagation();
  selectedImageFile = null;
  document.getElementById('image-file-input').value = '';
  document.getElementById('image-preview-img').src = '';
  document.getElementById('image-upload-placeholder').style.display = 'flex';
  document.getElementById('image-preview-wrap').style.display = 'none';
  document.getElementById('image-error-msg').style.display = 'none';
}

async function uploadImageToSupabase(file) {
  const ext = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { data, error } = await sb.storage
    .from('message-images')
    .upload(fileName, file, { contentType: file.type, upsert: false });
  if (error) throw error;
  const { data: urlData } = sb.storage.from('message-images').getPublicUrl(fileName);
  return urlData.publicUrl;
}

function validateForm() {
  const toName = document.getElementById('to-name').value.trim();
  const message = document.getElementById('message').value.trim();
  document.getElementById('field-to').classList.toggle('has-error', !toName);
  document.getElementById('field-msg').classList.toggle('has-error', !message);
  document.getElementById('field-song').classList.toggle('has-error', !selectedTrack);
  return !!(toName && message && selectedTrack);
}

async function submitForm() {
  if (!validateForm()) return;
  const btn = document.getElementById('send-btn');
  btn.classList.add('loading');
  btn.disabled = true;

  const fromName = document.getElementById('from-name').value.trim();
  const toName = document.getElementById('to-name').value.trim();
  const message = document.getElementById('message').value.trim();

  let imageUrl = null;
  if (selectedImageFile) {
    try {
      imageUrl = await uploadImageToSupabase(selectedImageFile);
    } catch (err) {
      console.error(err);
      showInfoModal('Image upload failed. Please try again or remove the photo.');
      btn.classList.remove('loading');
      btn.disabled = false;
      return;
    }
  }

  const payload = {
    from_name: fromName || null,
    to_name: toName,
    message: message,
    song_url: selectedTrack.spotifyUrl,
    song_type: 'spotify',
    embed_url: selectedTrack.embedUrl,
    embed_height: 80,
    song_name: selectedTrack.name,
    song_artist: selectedTrack.artist,
    song_art: selectedTrack.art,
    image_url: imageUrl,
    created_at: new Date().toISOString()
  };

  try {
    const { data, error } = await sb.from('song_messages').insert([payload]).select('id').single();
    if (error) throw error;
    const link = `${window.location.origin}${window.location.pathname}?id=${data.id}`;
    lastGeneratedLink = link;
    lastMessageData = {
      from_name: fromName || 'Someone',
      to_name: toName,
      message: message,
      song_name: selectedTrack.name,
      song_artist: selectedTrack.artist,
    };
    document.getElementById('share-link').value = link;
    document.getElementById('form-content').classList.add('hidden');
    document.getElementById('success-screen').classList.add('visible');
  } catch (err) {
    console.error(err);
    showInfoModal('Something went wrong. Please try again.');
  } finally {
    btn.classList.remove('loading');
    btn.disabled = false;
  }
}

function copyLink() {
  navigator.clipboard.writeText(document.getElementById('share-link').value)
    .then(() => showToast('Link copied! ✓'));
}

function showToast(msg) {
  const t = document.getElementById('copy-toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function resetForm() {
  document.getElementById('from-name').value = '';
  document.getElementById('to-name').value = '';
  document.getElementById('message').value = '';
  clearSong();
  clearImage({ stopPropagation: () => {} });
  document.getElementById('form-content').classList.remove('hidden');
  document.getElementById('success-screen').classList.remove('visible');
  ['field-to', 'field-msg', 'field-song'].forEach(id =>
    document.getElementById(id).classList.remove('has-error')
  );
}

function showPreviewModal() {
  const from = document.getElementById('from-name').value.trim();
  const to = document.getElementById('to-name').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!to && !message && !selectedTrack) {
    showInfoModal('Fill in the form first before previewing.');
    return;
  }
  document.getElementById('preview-modal-sub').textContent = to
    ? `This is what ${to} will see.`
    : "Here's how your message will look.";
  const songHtml = selectedTrack
    ? `<div style="margin-bottom:18px;border-radius:10px;overflow:hidden"><iframe src="${selectedTrack.embedUrl}" height="80" width="100%" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border:none;display:block"></iframe></div>`
    : '';
  const imgPreviewSrc = document.getElementById('image-preview-img').src;
  const imgHtml = imgPreviewSrc && selectedImageFile
    ? `<div style="margin-bottom:18px;border-radius:10px;overflow:hidden;max-height:200px"><img src="${imgPreviewSrc}" style="width:100%;height:200px;object-fit:cover;border-radius:10px" alt=""/></div>`
    : '';
  document.getElementById('preview-modal-content').innerHTML = `
    ${to ? `<div style="text-align:center;margin-bottom:18px"><div class="for-label">A song for</div><div style="font-family:'Playfair Display',serif;font-size:1.8rem;letter-spacing:-0.02em">${escHtml(to)}</div></div>` : ''}
    ${imgHtml}
    ${songHtml}
    ${message ? `<div class="message-text">"${escHtml(message)}"</div>` : ''}
    ${from ? `<p class="from-label" style="text-align:center;margin-top:16px">— with love from <span class="from-name">${escHtml(from)}</span></p>` : ''}`;
  document.getElementById('preview-modal').classList.add('visible');
}

function showInfoModal(msg) {
  document.getElementById('info-modal-msg').textContent = msg;
  document.getElementById('info-modal').classList.add('visible');
}

function closeInfoModal(e) {
  if (!e || e.target === document.getElementById('info-modal') || !e.target.closest('.modal')) {
    document.getElementById('info-modal').classList.remove('visible');
  }
}

function showEmailModal() {
  document.getElementById('email-modal-form').style.display = 'block';
  document.getElementById('email-modal-success').style.display = 'none';
  document.getElementById('email-modal-input').value = '';
  document.getElementById('email-modal-error').style.display = 'none';
  document.getElementById('email-modal').classList.add('visible');
}

function closeEmailModal(e) {
  if (!e || e.target === document.getElementById('email-modal') || !e.target.closest('.modal')) {
    document.getElementById('email-modal').classList.remove('visible');
  }
}

async function sendEmailModal() {
  const emailInput = document.getElementById('email-modal-input');
  const email = emailInput.value.trim();
  const emailError = document.getElementById('email-modal-error');
  const btn = document.getElementById('email-modal-send-btn');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    emailError.style.display = 'block';
    emailInput.style.borderColor = 'var(--error)';
    return;
  }
  emailError.style.display = 'none';
  emailInput.style.borderColor = '';
  btn.classList.add('loading');
  btn.disabled = true;
  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: email,
      to_name: lastMessageData.to_name,
      from_name: lastMessageData.from_name,
      song_name: lastMessageData.song_name,
      song_artist: lastMessageData.song_artist,
      message: lastMessageData.message,
      link: lastGeneratedLink,
    });
    document.getElementById('email-modal-sent-to').textContent = email;
    document.getElementById('email-modal-form').style.display = 'none';
    document.getElementById('email-modal-success').style.display = 'flex';
    showToast('Email sent! ✓');
  } catch (err) {
    console.error(err);
    emailError.textContent = 'Failed to send. Please try again.';
    emailError.style.display = 'block';
  } finally {
    btn.classList.remove('loading');
    btn.disabled = false;
  }
}

function closePreviewModal(e) {
  if (!e || e.target === document.getElementById('preview-modal') || !e.target.closest('.modal')) {
    document.getElementById('preview-modal').classList.remove('visible');
  }
}

async function browseSearch() {
  const query = document.getElementById('browse-input').value.trim();
  const container = document.getElementById('browse-results');
  if (!query) {
    container.innerHTML = '<div class="browse-empty"><div>♪</div><p>Enter a name to search for messages.</p></div>';
    return;
  }
  container.innerHTML = '<div class="browse-loading"><div class="loading-notes"><div class="loading-note"></div><div class="loading-note"></div><div class="loading-note"></div><div class="loading-note"></div></div></div>';
  try {
    const { data, error } = await sb.from('song_messages')
      .select('id,to_name,from_name,message,song_name,song_artist,song_art,created_at')
      .ilike('to_name', `%${query}%`)
      .order('created_at', { ascending: false });
    if (error) throw error;
    if (!data || !data.length) {
      container.innerHTML = `<div class="browse-empty"><div>🔍</div><p>No messages found for "<strong>${escHtml(query)}</strong>".</p></div>`;
      return;
    }
    container.innerHTML = data.map(row => {
      const preview = row.message
        ? (row.message.length > 90 ? row.message.slice(0, 90) + '…' : row.message)
        : '';
      const songLabel = row.song_name
        ? `${row.song_name}${row.song_artist ? ' · ' + row.song_artist : ''}`
        : '';
      const fromLabel = row.from_name ? `from ${row.from_name}` : 'anonymous';
      const date = new Date(row.created_at).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
      });
      const artHtml = row.song_art
        ? `<img src="${escAttr(row.song_art)}" style="width:48px;height:48px;border-radius:12px;object-fit:cover" alt="" />`
        : '♪';
      return `<div class="browse-card" onclick="openMessage('${row.id}')">
        <div class="browse-card-icon">${artHtml}</div>
        <div class="browse-card-body">
          <div class="browse-card-to">For ${escHtml(row.to_name)}</div>
          ${preview ? `<div class="browse-card-preview">"${escHtml(preview)}"</div>` : ''}
          <div class="browse-card-meta">
            <span>${fromLabel}</span>
            ${songLabel ? `<span class="browse-tag">🎵 ${escHtml(songLabel)}</span>` : ''}
            <span>${date}</span>
          </div>
        </div>
      </div>`;
    }).join('');
  } catch (err) {
    console.error(err);
    container.innerHTML = '<div class="browse-empty"><div>⚠</div><p>Search failed. Please try again.</p></div>';
  }
}

function openMessage(id) {
  history.pushState({ id }, '', window.location.pathname + '?id=' + id);
  loadMessage(id);
}

async function loadMessage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('view-screen').classList.remove('visible');
  document.getElementById('loading-screen').style.display = 'flex';
  try {
    const { data, error } = await sb.from('song_messages').select('*').eq('id', id).single();
    document.getElementById('loading-screen').style.display = 'none';
    if (error || !data) { renderNotFound(); return; }
    renderMessage(data);
  } catch {
    document.getElementById('loading-screen').style.display = 'none';
    renderNotFound();
  }
}

function showIntro(data) {
  const fromText = data.from_name ? data.from_name : 'Someone';
  const songText = data.song_name
    ? `🎵 ${data.song_name}${data.song_artist ? ' · ' + data.song_artist : ''}`
    : '';
  const overlay = document.getElementById('intro-overlay');
  overlay.style.display = 'flex';

  if (data.image_url) {
    document.getElementById('intro-modal-inner').style.display = 'none';
    document.getElementById('curtain-container').style.display = 'block';
    document.getElementById('curtain-img').src = data.image_url;
    document.getElementById('curtain-from').textContent = fromText;
    const curtainSongInfo = document.getElementById('curtain-song-info');
    if (songText) {
      curtainSongInfo.innerHTML = `<span>${escHtml(songText)}</span>`;
      curtainSongInfo.style.display = 'inline-flex';
    } else {
      curtainSongInfo.style.display = 'none';
    }
    setTimeout(() => {
      document.getElementById('curtain-left').classList.add('open');
      document.getElementById('curtain-right').classList.add('open');
      setTimeout(() => {
        document.getElementById('curtain-overlay-text').classList.add('fade-out');
        document.getElementById('curtain-cta').style.display = 'flex';
        document.getElementById('curtain-cta').classList.add('visible');
      }, 1400);
    }, 600);
  } else {
    document.getElementById('intro-modal-inner').style.display = 'block';
    document.getElementById('curtain-container').style.display = 'none';
    document.getElementById('curtain-cta').style.display = 'none';
    document.getElementById('intro-from').textContent = fromText;
    const songInfo = document.getElementById('intro-song-info');
    if (songText) {
      songInfo.innerHTML = `<span>${escHtml(songText)}</span>`;
      songInfo.style.display = 'inline-flex';
    } else {
      songInfo.style.display = 'none';
    }
  }
}

function closeIntro() {
  const overlay = document.getElementById('intro-overlay');
  overlay.classList.add('closing');
  setTimeout(() => {
    overlay.style.display = 'none';
    overlay.classList.remove('closing');
    document.getElementById('curtain-left').classList.remove('open');
    document.getElementById('curtain-right').classList.remove('open');
    document.getElementById('curtain-overlay-text').classList.remove('fade-out');
    document.getElementById('curtain-cta').classList.remove('visible');
    document.getElementById('curtain-cta').style.display = 'none';
  }, 600);
}

function renderMessage(data) {
  const songHtml = data.embed_url
    ? `<div class="song-embed"><iframe src="${escAttr(data.embed_url)}" height="${data.embed_height || 80}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>`
    : data.song_url
      ? `<div style="padding:14px;background:var(--surface2);border-radius:var(--radius-sm);margin-bottom:24px;font-size:0.9rem">🎵 <a href="${escAttr(data.song_url)}" target="_blank" rel="noopener" style="color:var(--accent)">${escHtml(data.song_url)}</a></div>`
      : '';
  document.getElementById('view-content').innerHTML = `
    <div class="message-card">
      <div class="for-label">A song for</div>
      <div class="receiver-name">${escHtml(data.to_name)}</div>
      <div style="display:flex;justify-content:center;margin-bottom:24px">
        <div class="music-bars">
          <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
        </div>
      </div>
      ${songHtml}
      ${data.message ? `<div class="message-text">"${escHtml(data.message)}"</div>` : ''}
      ${data.from_name ? `<p class="from-label">— with love from <span class="from-name">${escHtml(data.from_name)}</span></p>` : ''}
      <div class="view-footer"><a href="#" onclick="navigate('home',event)">Send your own song on Haiba ♪</a></div>
    </div>`;
  document.getElementById('view-screen').classList.add('visible');
  showIntro(data);
}

function renderNotFound() {
  document.getElementById('view-content').innerHTML = `
    <div class="not-found">
      <div style="font-size:3rem;margin-bottom:14px">🎵</div>
      <h2>Message not found</h2>
      <p>This link may have expired or never existed.</p>
      <button class="btn btn-primary" onclick="navigate('home')">Back to Haiba →</button>
    </div>`;
  document.getElementById('view-screen').classList.add('visible');
}

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escAttr(str) {
  if (!str) return '';
  return String(str)
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function init() {
  checkSpotifyConfig();
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = params.get('p');
  if (id) { await loadMessage(id); }
  else if (p && ['browse', 'about'].includes(p)) { showPage(p); }
  else { showPage('home'); }
}

window.addEventListener('popstate', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = params.get('p');
  if (id) { loadMessage(id); }
  else if (p && ['browse', 'about'].includes(p)) { showPage(p); }
  else { showPage('home'); }
});

init();