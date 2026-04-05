:root {
    --bg: #0a0a0f;
    --surface: #12121a;
    --surface2: #1a1a28;
    --border: rgba(255,255,255,0.07);
    --text: #f0eee8;
    --muted: rgba(240,238,232,0.45);
    --accent: #c8a97e;
    --accent2: #e8c99e;
    --glow: rgba(200,169,126,0.15);
    --error: #e07070;
    --success: #6ecfb0;
    --radius: 16px;
    --radius-sm: 10px;
    --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  [data-theme="light"] {
    --bg: #f5f2ec; --surface: #ffffff; --surface2: #f0ece3;
    --border: rgba(0,0,0,0.08); --text: #1a1814; --muted: rgba(26,24,20,0.45);
    --accent: #9a6f3a; --accent2: #c89050; --glow: rgba(154,111,58,0.12);
    --error: #c04040; --success: #2a9e7e;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; transition: background var(--transition), color var(--transition); overflow-x: hidden; }
  .noise { position: fixed; inset: 0; pointer-events: none; z-index: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E"); opacity: 0.6; }
  .orb { position: fixed; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
  .orb-1 { width: 600px; height: 600px; background: radial-gradient(circle, rgba(200,169,126,0.12) 0%, transparent 70%); top: -200px; right: -100px; }
  .orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(120,100,180,0.08) 0%, transparent 70%); bottom: 0; left: -100px; }
  .app { position: relative; z-index: 1; min-height: 100vh; display: flex; flex-direction: column; }
  nav { display: flex; align-items: center; justify-content: space-between; padding: 20px 40px; border-bottom: 1px solid var(--border); backdrop-filter: blur(20px); position: sticky; top: 0; z-index: 100; background: rgba(10,10,15,0.8); gap: 24px; }
  [data-theme="light"] nav { background: rgba(245,242,236,0.88); }
  .logo { font-family: 'Playfair Display', serif; font-size: 1.5rem; letter-spacing: -0.02em; color: var(--text); text-decoration: none; display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
  .logo-icon { width: 34px; height: 34px; background: linear-gradient(135deg, var(--accent), var(--accent2)); border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: 17px; }
  .nav-center { display: flex; align-items: center; gap: 4px; }
  .nav-link { padding: 8px 18px; border-radius: 100px; font-size: 0.88rem; font-weight: 500; color: var(--muted); cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; transition: all var(--transition); }
  .nav-link:hover { color: var(--text); background: var(--surface2); }
  .nav-link.active { color: var(--accent); background: var(--surface); }
  .nav-actions { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
  .theme-toggle { width: 38px; height: 38px; border-radius: 50%; border: 1px solid var(--border); background: var(--surface); color: var(--text); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 15px; transition: all var(--transition); }
  .theme-toggle:hover { border-color: var(--accent); transform: rotate(20deg); }
  .hamburger { display: none; background: none; border: 1px solid var(--border); color: var(--text); width: 38px; height: 38px; border-radius: 8px; cursor: pointer; align-items: center; justify-content: center; font-size: 18px; }
  .mobile-menu { display: none; flex-direction: column; gap: 4px; padding: 12px 20px; border-bottom: 1px solid var(--border); background: var(--surface); }
  .mobile-menu.open { display: flex; }
  .mobile-nav-link { padding: 10px 16px; border-radius: var(--radius-sm); font-size: 0.9rem; font-weight: 500; color: var(--muted); cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; transition: all var(--transition); text-align: left; }
  .mobile-nav-link:hover, .mobile-nav-link.active { color: var(--accent); background: var(--surface2); }
  .btn { padding: 10px 22px; border-radius: 100px; border: none; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: all var(--transition); display: inline-flex; align-items: center; gap: 8px; }
  .btn-primary { background: linear-gradient(135deg, var(--accent), var(--accent2)); color: #0a0a0f; }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px var(--glow); }
  .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
  .btn-ghost { background: transparent; color: var(--text); border: 1px solid var(--border); }
  .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
  .btn-sm { padding: 7px 14px; font-size: 0.82rem; }
  .page { display: none; flex: 1; }
  .page.active { display: block; }
  .hero { text-align: center; padding: 90px 24px 56px; max-width: 700px; margin: 0 auto; }
  .hero-tag { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; border: 1px solid var(--border); border-radius: 100px; font-size: 0.78rem; color: var(--muted); margin-bottom: 28px; letter-spacing: 0.05em; text-transform: uppercase; }
  .hero-tag span { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
  h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.4rem, 6vw, 4rem); line-height: 1.15; letter-spacing: -0.03em; margin-bottom: 18px; }
  h1 em { font-style: italic; color: var(--accent); }
  .hero-sub { color: var(--muted); font-size: 1.05rem; font-weight: 300; line-height: 1.7; margin-bottom: 40px; max-width: 480px; margin-left: auto; margin-right: auto; }
  .form-wrapper { max-width: 560px; margin: 0 auto 80px; padding: 0 24px; }
  .card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 36px; position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); opacity: 0.4; }
  .form-grid { display: grid; gap: 20px; }
  .field { display: flex; flex-direction: column; gap: 8px; }
  .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  label { font-size: 0.78rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); }
  label .opt { font-weight: 300; text-transform: none; letter-spacing: 0; margin-left: 4px; }
  input, textarea { background: var(--surface2); border: 1px solid var(--border); border-radius: var(--radius-sm); color: var(--text); font-family: 'DM Sans', sans-serif; font-size: 0.95rem; padding: 12px 16px; transition: all var(--transition); width: 100%; outline: none; -webkit-appearance: none; }
  input:focus, textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--glow); }
  input::placeholder, textarea::placeholder { color: var(--muted); }
  textarea { resize: vertical; min-height: 110px; line-height: 1.6; }
  .error-msg { color: var(--error); font-size: 0.82rem; display: none; }
  .field.has-error input, .field.has-error textarea { border-color: var(--error); }
  .field.has-error .error-msg { display: block; }
  .send-row { display: flex; gap: 12px; align-items: center; margin-top: 4px; }
  .send-row .btn-primary { flex: 1; padding: 14px 24px; font-size: 1rem; border-radius: var(--radius-sm); justify-content: center; }
  .preview-btn { padding: 14px 20px; border-radius: var(--radius-sm); white-space: nowrap; }
  .loader { display: none; width: 18px; height: 18px; border: 2px solid rgba(10,10,15,0.3); border-top-color: #0a0a0f; border-radius: 50%; animation: spin 0.7s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .btn-primary.loading .loader { display: block; }
  .btn-primary.loading .btn-label { display: none; }
  .success-screen { display: none; text-align: center; padding: 16px 0; animation: fadeIn 0.5s ease; }
  .success-screen.visible { display: block; }
  .form-content.hidden { display: none; }
  .success-icon { width: 68px; height: 68px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent2)); display: flex; align-items: center; justify-content: center; font-size: 26px; margin: 0 auto 20px; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  @keyframes popIn { 0% { transform: scale(0); } 100% { transform: scale(1); } }
  .success-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; margin-bottom: 8px; }
  .success-sub { color: var(--muted); margin-bottom: 24px; font-size: 0.92rem; }
  .link-box { display: flex; gap: 8px; background: var(--surface2); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 10px 14px; margin-bottom: 18px; align-items: center; }
  .link-box input { flex: 1; background: transparent; border: none; padding: 0; font-size: 0.85rem; color: var(--accent); box-shadow: none !important; }
  .copy-btn { padding: 7px 14px; font-size: 0.8rem; border-radius: 6px; white-space: nowrap; }
  .send-another { color: var(--muted); font-size: 0.88rem; cursor: pointer; text-decoration: underline; text-underline-offset: 3px; background: none; border: none; font-family: 'DM Sans', sans-serif; transition: color var(--transition); margin-top: 8px; display: inline-block; }
  .send-another:hover { color: var(--text); }

  /* ── Intro Modal ── */
  .intro-overlay { position: fixed; inset: 0; z-index: 500; display: flex; align-items: center; justify-content: center; padding: 24px; background: var(--bg); opacity: 0; animation: introFadeIn 0.6s ease forwards; }
  @keyframes introFadeIn { to { opacity: 1; } }
  .intro-overlay.closing { animation: introFadeOut 0.6s ease forwards; pointer-events: none; }
  @keyframes introFadeOut { to { opacity: 0; } }
  .intro-modal { text-align: center; max-width: 380px; width: 100%; position: relative; animation: introSlideUp 0.7s cubic-bezier(0.4,0,0.2,1) forwards; }
  @keyframes introSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

  .intro-particles { position: absolute; inset: 0; pointer-events: none; }
  .intro-particles span { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); opacity: 0; animation: floatParticle 3s ease-in-out infinite; }
  .intro-particles span:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
  .intro-particles span:nth-child(2) { left: 80%; top: 15%; animation-delay: 0.4s; width: 4px; height: 4px; }
  .intro-particles span:nth-child(3) { left: 60%; top: 70%; animation-delay: 0.8s; width: 8px; height: 8px; }
  .intro-particles span:nth-child(4) { left: 20%; top: 75%; animation-delay: 1.2s; width: 5px; height: 5px; }
  .intro-particles span:nth-child(5) { left: 90%; top: 50%; animation-delay: 1.6s; width: 4px; height: 4px; }
  .intro-particles span:nth-child(6) { left: 5%; top: 50%; animation-delay: 2s; width: 7px; height: 7px; }
  @keyframes floatParticle { 0%,100% { opacity: 0; transform: translateY(0); } 50% { opacity: 0.6; transform: translateY(-20px); } }

  .intro-icon-wrap { position: relative; width: 100px; height: 100px; margin: 0 auto 28px; display: flex; align-items: center; justify-content: center; }
  .intro-ring { position: absolute; inset: 0; border-radius: 50%; border: 2px solid var(--accent); opacity: 0.3; animation: introPulseRing 2s ease-in-out infinite; }
  @keyframes introPulseRing { 0%,100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.15); opacity: 0.1; } }
  .intro-icon { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent2)); display: flex; align-items: center; justify-content: center; font-size: 32px; animation: introBounce 2s ease-in-out infinite; box-shadow: 0 0 40px var(--glow); }
  @keyframes introBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

  .intro-from { font-family: 'Playfair Display', serif; font-size: 2rem; letter-spacing: -0.02em; margin-bottom: 6px; color: var(--text); }
  .intro-label { font-size: 1rem; color: var(--muted); font-weight: 300; margin-bottom: 20px; }
  .intro-song-info { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: var(--surface); border: 1px solid var(--border); border-radius: 100px; font-size: 0.82rem; color: var(--muted); margin-bottom: 36px; max-width: 100%; }
  .intro-song-info span { color: var(--text); font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; }

  .intro-btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 32px; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: #0a0a0f; border: none; border-radius: 100px; font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all var(--transition); margin-bottom: 24px; box-shadow: 0 8px 32px var(--glow); }
  .intro-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 40px var(--glow); }
  .intro-btn:active { transform: translateY(0); }

  .intro-haiba { font-size: 0.78rem; color: var(--muted); letter-spacing: 0.05em; }


  .email-via-btn { width: 100%; justify-content: center; margin: 10px 0 6px; border-radius: var(--radius-sm); padding: 12px; font-size: 0.92rem; }

  /* ── Info modal & Email modal shared ── */
  .modal-sm { max-width: 380px; text-align: left; }
  .info-modal-icon, .email-modal-icon { font-size: 2rem; text-align: center; margin-bottom: 12px; }


  .spotify-creds-notice { padding: 12px 16px; background: rgba(200,169,126,0.08); border: 1px solid rgba(200,169,126,0.2); border-radius: var(--radius-sm); font-size: 0.82rem; color: var(--muted); line-height: 1.6; }
  .spotify-creds-notice a { color: var(--accent); }
  .spotify-creds-notice code { background: var(--surface2); padding: 1px 6px; border-radius: 4px; font-size: 0.78rem; }
  .spotify-search-input-row { display: flex; gap: 8px; }
  .spotify-search-input-row input { flex: 1; }
  .search-trigger { padding: 12px 16px; border-radius: var(--radius-sm); white-space: nowrap; flex-shrink: 0; }
  .spotify-results { margin-top: 8px; background: var(--surface2); border: 1px solid var(--border); border-radius: var(--radius-sm); overflow: hidden; display: none; max-height: 290px; overflow-y: auto; }
  .spotify-results.visible { display: block; animation: fadeIn 0.2s ease; }
  .spotify-results::-webkit-scrollbar { width: 4px; }
  .spotify-results::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
  .track-item { display: flex; align-items: center; gap: 12px; padding: 10px 14px; cursor: pointer; transition: background var(--transition); border-bottom: 1px solid var(--border); }
  .track-item:last-child { border-bottom: none; }
  .track-item:hover { background: var(--surface); }
  .track-art { width: 40px; height: 40px; border-radius: 6px; object-fit: cover; flex-shrink: 0; }
  .track-art-placeholder { width: 40px; height: 40px; border-radius: 6px; background: var(--surface); display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
  .track-info { flex: 1; min-width: 0; }
  .track-name { font-size: 0.88rem; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .track-artist { font-size: 0.78rem; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .track-select-btn { font-size: 0.75rem; padding: 5px 12px; border-radius: 6px; flex-shrink: 0; }
  .selected-song-preview { display: none; padding: 10px 14px; background: var(--surface2); border: 1px solid var(--border); border-radius: var(--radius-sm); align-items: center; gap: 12px; border-left: 3px solid var(--accent); margin-bottom: 10px; }
  .selected-song-preview.visible { display: flex; }
  .selected-song-preview img { width: 44px; height: 44px; border-radius: 6px; object-fit: cover; }
  .selected-song-preview .s-info { flex: 1; min-width: 0; }
  .selected-song-preview .s-name { font-size: 0.9rem; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .selected-song-preview .s-artist { font-size: 0.78rem; color: var(--muted); }
  .clear-song { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 18px; padding: 4px; transition: color var(--transition); flex-shrink: 0; }
  .clear-song:hover { color: var(--error); }
  .search-msg { padding: 18px; text-align: center; color: var(--muted); font-size: 0.88rem; }
  .embed-preview-block { margin-top: 10px; display: none; border-radius: var(--radius-sm); overflow: hidden; }
  .embed-preview-block.visible { display: block; }
  .embed-preview-block iframe { width: 100%; border: none; display: block; }

  .view-screen { display: none; min-height: 80vh; align-items: center; justify-content: center; padding: 40px 24px; }
  .view-screen.visible { display: flex; }
  .message-card { max-width: 560px; width: 100%; background: var(--surface); border: 1px solid var(--border); border-radius: 24px; padding: 48px 40px; text-align: center; position: relative; overflow: hidden; animation: slideUp 0.6s cubic-bezier(0.4,0,0.2,1); }
  @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  .message-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--accent), transparent); }
  .for-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 6px; }
  .receiver-name { font-family: 'Playfair Display', serif; font-size: 2.2rem; margin-bottom: 28px; letter-spacing: -0.02em; }
  .message-text { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.15rem; line-height: 1.7; color: var(--text); padding: 20px 24px; background: var(--surface2); border-radius: var(--radius-sm); margin-bottom: 24px; border-left: 3px solid var(--accent); text-align: left; }
  .song-embed { margin-bottom: 24px; }
  .song-embed iframe { width: 100%; border: none; border-radius: var(--radius-sm); display: block; }
  .from-label { font-size: 0.85rem; color: var(--muted); margin-top: 20px; }
  .from-name { font-weight: 500; color: var(--text); }
  .view-footer { margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--border); }
  .view-footer a { color: var(--accent); text-decoration: none; font-size: 0.9rem; font-family: 'Playfair Display', serif; }
  .music-bars { display: flex; gap: 3px; align-items: flex-end; height: 20px; }
  .bar { width: 3px; border-radius: 2px; background: var(--accent); opacity: 0.6; animation: barBeat 1s ease-in-out infinite; }
  .bar:nth-child(1){height:8px;} .bar:nth-child(2){height:16px;animation-delay:.1s;} .bar:nth-child(3){height:12px;animation-delay:.2s;} .bar:nth-child(4){height:20px;animation-delay:.3s;}
  @keyframes barBeat { 0%,100%{transform:scaleY(1);} 50%{transform:scaleY(0.5);} }
  .not-found { text-align: center; padding: 60px 24px; }
  .not-found h2 { font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 14px; }
  .not-found p { color: var(--muted); margin-bottom: 24px; }

  .loading-screen { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; gap: 20px; }
  .loading-notes { display: flex; gap: 6px; align-items: center; }
  .loading-note { width: 4px; background: var(--accent); border-radius: 2px; animation: wave 1.2s ease-in-out infinite; }
  .loading-note:nth-child(1){height:16px;} .loading-note:nth-child(2){height:28px;animation-delay:.15s;} .loading-note:nth-child(3){height:20px;animation-delay:.3s;} .loading-note:nth-child(4){height:32px;animation-delay:.45s;} .loading-note:nth-child(5){height:18px;animation-delay:.6s;}
  @keyframes wave { 0%,100%{transform:scaleY(1);} 50%{transform:scaleY(0.4);} }

  .browse-page { max-width: 720px; margin: 0 auto; padding: 60px 24px 80px; }
  .page-title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 4vw, 2.6rem); margin-bottom: 8px; letter-spacing: -0.02em; }
  .page-subtitle { color: var(--muted); margin-bottom: 36px; font-size: 0.95rem; }
  .browse-search-bar { display: flex; gap: 10px; margin-bottom: 32px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 8px 8px 8px 20px; align-items: center; }
  .browse-search-bar input { flex: 1; background: transparent; border: none; font-size: 1rem; padding: 6px 0; }
  .browse-search-bar input:focus { box-shadow: none; border: none; }
  .browse-search-btn { padding: 11px 22px; border-radius: var(--radius-sm); flex-shrink: 0; }
  .browse-results { display: grid; gap: 14px; }
  .browse-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px 22px; display: flex; gap: 16px; align-items: flex-start; cursor: pointer; transition: all var(--transition); }
  .browse-card:hover { border-color: var(--accent); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.18); }
  .browse-card-icon { width: 48px; height: 48px; border-radius: 12px; flex-shrink: 0; background: linear-gradient(135deg, var(--accent), var(--accent2)); display: flex; align-items: center; justify-content: center; font-size: 20px; overflow: hidden; }
  .browse-card-icon img { width: 48px; height: 48px; object-fit: cover; border-radius: 12px; }
  .browse-card-body { flex: 1; min-width: 0; }
  .browse-card-to { font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 4px; }
  .browse-card-preview { font-size: 0.85rem; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 8px; font-style: italic; }
  .browse-card-meta { font-size: 0.75rem; color: var(--muted); display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
  .browse-tag { padding: 2px 8px; border-radius: 100px; background: var(--surface2); border: 1px solid var(--border); font-size: 0.72rem; }
  .browse-empty { text-align: center; padding: 60px 24px; color: var(--muted); }
  .browse-empty div { font-size: 2.5rem; margin-bottom: 12px; }
  .browse-loading { text-align: center; padding: 40px; display: flex; justify-content: center; }

  .about-page { max-width: 640px; margin: 0 auto; padding: 60px 24px 80px; }
  .about-logo { font-family: 'Playfair Display', serif; font-size: 3rem; color: var(--accent); margin-bottom: 14px; letter-spacing: -0.03em; }
  .about-tagline { font-size: 1.1rem; color: var(--muted); font-weight: 300; line-height: 1.75; margin-bottom: 52px; }
  .about-section { margin-bottom: 48px; }
  .about-section h2 { font-family: 'Playfair Display', serif; font-size: 1.4rem; margin-bottom: 14px; letter-spacing: -0.01em; }
  .about-section p { color: var(--muted); line-height: 1.8; font-size: 0.97rem; margin-bottom: 12px; }
  .about-steps { display: grid; gap: 14px; margin-top: 20px; }
  .about-step { display: flex; gap: 16px; align-items: flex-start; padding: 18px 20px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); }
  .step-num { width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: #0a0a0f; font-weight: 700; font-size: 0.82rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .step-body h3 { font-size: 0.92rem; font-weight: 500; margin-bottom: 3px; }
  .step-body p { font-size: 0.84rem; color: var(--muted); line-height: 1.6; margin: 0; }
  .about-cta { text-align: center; padding: 40px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); }
  .about-cta h2 { font-family: 'Playfair Display', serif; font-size: 1.6rem; margin-bottom: 10px; }
  .about-cta p { color: var(--muted); margin-bottom: 24px; font-size: 0.95rem; }

  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.72); backdrop-filter: blur(8px); z-index: 200; display: none; align-items: center; justify-content: center; padding: 24px; }
  .modal-overlay.visible { display: flex; }
  .modal { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 36px; max-width: 500px; width: 100%; animation: slideUp 0.3s ease; position: relative; max-height: 90vh; overflow-y: auto; }
  .modal-close { position: absolute; top: 16px; right: 16px; background: none; border: none; color: var(--muted); cursor: pointer; font-size: 20px; transition: color var(--transition); }
  .modal-close:hover { color: var(--text); }
  .modal-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; margin-bottom: 6px; }
  .modal-sub { color: var(--muted); font-size: 0.88rem; margin-bottom: 22px; }
  .copy-toast { position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%); background: var(--success); color: #0a0a0f; padding: 10px 20px; border-radius: 100px; font-size: 0.88rem; font-weight: 500; z-index: 300; opacity: 0; transition: opacity 0.3s ease; pointer-events: none; white-space: nowrap; }
  .copy-toast.show { opacity: 1; }
  footer { text-align: center; padding: 28px 24px; color: var(--muted); font-size: 0.8rem; border-top: 1px solid var(--border); margin-top: auto; }
  footer a { color: var(--accent); text-decoration: none; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  @media (max-width: 680px) {
    nav { padding: 16px 20px; }
    .nav-center { display: none; }
    .hamburger { display: flex; }
    .hero { padding: 56px 20px 36px; }
    .card { padding: 22px 18px; }
    .field-row { grid-template-columns: 1fr; }
    .message-card { padding: 32px 20px; }
    .send-row { flex-direction: column; }
    .send-row .btn-primary, .preview-btn { width: 100%; justify-content: center; }
    h1 { font-size: 2rem; }
    .receiver-name { font-size: 1.8rem; }
    .browse-search-bar { flex-direction: column; padding: 12px; }
    .browse-search-btn { width: 100%; justify-content: center; }
    .about-logo { font-size: 2.2rem; }
    .email-input-row { flex-direction: column; }
    .email-send-btn { width: 100%; justify-content: center; }
  }




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

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';
  document.querySelector('.theme-toggle').textContent = isDark ? '☀' : '☽';
}

function toggleMobileMenu() { document.getElementById('mobile-menu').classList.toggle('open'); }
function closeMobileMenu() { document.getElementById('mobile-menu').classList.remove('open'); }

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
  selectedTrack = { id, name, artist, art, spotifyUrl, embedUrl: `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0` };
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
  btn.classList.add('loading'); btn.disabled = true;

  const fromName = document.getElementById('from-name').value.trim();
  const toName = document.getElementById('to-name').value.trim();
  const message = document.getElementById('message').value.trim();

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
    btn.classList.remove('loading'); btn.disabled = false;
  }
}

async function sendEmail() {
  const emailInput = document.getElementById('receiver-email');
  const email = emailInput.value.trim();
  const emailError = document.getElementById('email-error');
  const btn = document.getElementById('email-send-btn');

  // Basic validation
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

    // Show success state
    document.getElementById('email-form').style.display = 'none';
    document.getElementById('sent-to-email').textContent = email;
    document.getElementById('email-success').style.display = 'flex';
    showToast('Email sent! ✓');
  } catch (err) {
    console.error(err);
    alert('Failed to send email. Please try again.');
  } finally {
    btn.classList.remove('loading');
    btn.disabled = false;
  }
}

function copyLink() {
  navigator.clipboard.writeText(document.getElementById('share-link').value).then(() => showToast('Link copied! ✓'));
}

function showToast(msg) {
  const t = document.getElementById('copy-toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function resetForm() {
  document.getElementById('from-name').value = '';
  document.getElementById('to-name').value = '';
  document.getElementById('message').value = '';
  clearSong();
  document.getElementById('form-content').classList.remove('hidden');
  document.getElementById('success-screen').classList.remove('visible');
  ['field-to','field-msg','field-song'].forEach(id => document.getElementById(id).classList.remove('has-error'));
}

function showPreviewModal() {
  const from = document.getElementById('from-name').value.trim();
  const to = document.getElementById('to-name').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!to && !message && !selectedTrack) { showInfoModal('Fill in the form first before previewing.'); return; }
  document.getElementById('preview-modal-sub').textContent = to ? `This is what ${to} will see.` : "Here's how your message will look.";
  const songHtml = selectedTrack ? `<div style="margin-bottom:18px;border-radius:10px;overflow:hidden"><iframe src="${selectedTrack.embedUrl}" height="80" width="100%" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border:none;display:block"></iframe></div>` : '';
  document.getElementById('preview-modal-content').innerHTML = `
    ${to ? `<div style="text-align:center;margin-bottom:18px"><div class="for-label">A song for</div><div style="font-family:'Playfair Display',serif;font-size:1.8rem;letter-spacing:-0.02em">${escHtml(to)}</div></div>` : ''}
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
      .order('created_at', { ascending: false })
      .limit(30);
    if (error) throw error;
    if (!data || !data.length) {
      container.innerHTML = `<div class="browse-empty"><div>🔍</div><p>No messages found for "<strong>${escHtml(query)}</strong>".</p></div>`;
      return;
    }
    container.innerHTML = data.map(row => {
      const preview = row.message ? (row.message.length > 90 ? row.message.slice(0,90) + '…' : row.message) : '';
      const songLabel = row.song_name ? `${row.song_name}${row.song_artist ? ' · ' + row.song_artist : ''}` : '';
      const fromLabel = row.from_name ? `from ${row.from_name}` : 'anonymous';
      const date = new Date(row.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const artHtml = row.song_art ? `<img src="${escAttr(row.song_art)}" style="width:48px;height:48px;border-radius:12px;object-fit:cover" alt="" />` : '♪';
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
  } catch(err) {
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
  const songText = data.song_name ? `🎵 ${data.song_name}${data.song_artist ? ' · ' + data.song_artist : ''}` : '';
  document.getElementById('intro-from').textContent = fromText;
  const songInfo = document.getElementById('intro-song-info');
  if (songText) {
    songInfo.innerHTML = `<span>${escHtml(songText)}</span>`;
    songInfo.style.display = 'inline-flex';
  } else {
    songInfo.style.display = 'none';
  }
  document.getElementById('intro-overlay').style.display = 'flex';
  document.getElementById('view-screen').classList.add('visible');
}

function closeIntro() {
  const overlay = document.getElementById('intro-overlay');
  overlay.classList.add('closing');
  setTimeout(() => { overlay.style.display = 'none'; overlay.classList.remove('closing'); }, 600);
}


function renderMessage(data) {
  const songHtml = data.embed_url
    ? `<div class="song-embed"><iframe src="${escAttr(data.embed_url)}" height="${data.embed_height||80}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>`
    : data.song_url ? `<div style="padding:14px;background:var(--surface2);border-radius:var(--radius-sm);margin-bottom:24px;font-size:0.9rem">🎵 <a href="${escAttr(data.song_url)}" target="_blank" rel="noopener" style="color:var(--accent)">${escHtml(data.song_url)}</a></div>` : '';
  document.getElementById('view-content').innerHTML = `
    <div class="message-card">
      <div class="for-label">A song for</div>
      <div class="receiver-name">${escHtml(data.to_name)}</div>
      <div style="display:flex;justify-content:center;margin-bottom:24px"><div class="music-bars"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></div>
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
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(str) {
  if (!str) return '';
  return String(str).replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

async function init() {
  checkSpotifyConfig();
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = params.get('p');
  if (id) { await loadMessage(id); }
  else if (p && ['browse','about'].includes(p)) { showPage(p); }
  else { showPage('home'); }
}

window.addEventListener('popstate', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = params.get('p');
  if (id) { loadMessage(id); }
  else if (p && ['browse','about'].includes(p)) { showPage(p); }
  else { showPage('home'); }
});

init();








<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Haiba — Share Music, Share Feeling</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<link rel="stylesheet" href="style.css">
<link rel="icon" href="HAIBA.png" type="image/png">
</head>
<body>
<div class="noise"></div>
<div class="orb orb-1"></div>
<div class="orb orb-2"></div>

<div class="app" id="app">
  <nav>
    <a class="logo" href="#" onclick="navigate('home',event)">
      <img class="logo-icon" src="HAIBA.png" alt="Haiba logo" />
      Haiba
    </a>
    <div class="nav-center">
      <button class="nav-link active" id="nav-home" onclick="navigate('home')">Home</button>
      <button class="nav-link" id="nav-browse" onclick="navigate('browse')">Browse</button>
      <button class="nav-link" id="nav-about" onclick="navigate('about')">About</button>
    </div>
    <div class="nav-actions">
      <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">☽</button>
      <button class="hamburger" onclick="toggleMobileMenu()" aria-label="Menu">☰</button>
    </div>
  </nav>

  <div class="mobile-menu" id="mobile-menu">
    <button class="mobile-nav-link active" id="mnav-home" onclick="navigate('home');closeMobileMenu()">Home</button>
    <button class="mobile-nav-link" id="mnav-browse" onclick="navigate('browse');closeMobileMenu()">Browse</button>
    <button class="mobile-nav-link" id="mnav-about" onclick="navigate('about');closeMobileMenu()">About</button>
  </div>

  <div id="loading-screen" class="loading-screen" style="display:none">
    <div class="loading-notes">
      <div class="loading-note"></div><div class="loading-note"></div><div class="loading-note"></div><div class="loading-note"></div><div class="loading-note"></div>
    </div>
    <p style="color:var(--muted);font-size:0.9rem">Loading your message…</p>
  </div>

  <div id="page-home" class="page active">
    <section class="hero">
      <div class="hero-tag"><span></span>Share music. Share feeling.</div>
      <h1>Send a song with<br /><em>something to say</em></h1>
      <p class="hero-sub">Pair a song with a heartfelt message. Generate a unique link and share it with someone who matters.</p>
    </section>
    <div class="form-wrapper">
      <div class="card">
        <div class="form-content" id="form-content">
          <div class="form-grid">
            <div class="field-row">
              <div class="field">
                <label>From <span class="opt">(optional)</span></label>
                <input type="text" id="from-name" placeholder="Your name…" maxlength="60" />
              </div>
              <div class="field" id="field-to">
                <label>To</label>
                <input type="text" id="to-name" placeholder="Their name…" maxlength="60" />
                <span class="error-msg">Please enter the receiver's name</span>
              </div>
            </div>
            <div class="field" id="field-msg">
              <label>Your message</label>
              <textarea id="message" placeholder="Write something from the heart…" maxlength="800"></textarea>
              <span class="error-msg">Please write a message</span>
            </div>
            <div class="field" id="field-song">
              <label>Song <span class="opt">— search Spotify</span></label>
              <div id="spotify-not-configured" class="spotify-creds-notice" style="display:none">
                ⚠ Add your Spotify credentials at the top of the script (<code>SPOTIFY_CLIENT_ID</code> &amp; <code>SPOTIFY_CLIENT_SECRET</code>). Get them free at <a href="https://developer.spotify.com/dashboard" target="_blank" rel="noopener">developer.spotify.com</a>.
              </div>
              <div id="spotify-ui">
                <div id="selected-song-preview" class="selected-song-preview">
                  <img id="selected-art" src="" alt="" style="display:none" />
                  <div class="s-info">
                    <div class="s-name" id="selected-name"></div>
                    <div class="s-artist" id="selected-artist"></div>
                  </div>
                  <button class="clear-song" onclick="clearSong()" title="Remove">✕</button>
                </div>
                <div id="spotify-search-area">
                  <div class="spotify-search-input-row">
                    <input type="text" id="spotify-query" placeholder="Search for a song or artist…" onkeydown="if(event.key==='Enter')searchSpotify()" />
                    <button class="btn btn-ghost search-trigger" onclick="searchSpotify()">Search</button>
                  </div>
                  <div class="spotify-results" id="spotify-results"></div>
                </div>
              </div>
              <span class="error-msg">Please select a song</span>
              <div class="embed-preview-block" id="embed-preview-block">
                <iframe id="embed-preview" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
            </div>
            <div class="send-row">
              <button class="btn btn-ghost preview-btn" onclick="showPreviewModal()">Preview</button>
              <button class="btn btn-primary" id="send-btn" onclick="submitForm()">
                <span class="btn-label">Send the Song ♪</span>
                <div class="loader"></div>
              </button>
            </div>
          </div>
        </div>
        <div class="success-screen" id="success-screen">
          <div class="success-icon">♫</div>
          <div class="success-title">It's sent!</div>
          <p class="success-sub">Share this link — whenever they open it, your song will play.</p>
          <div class="link-box">
            <input type="text" id="share-link" readonly />
            <button class="btn btn-ghost copy-btn" onclick="copyLink()">Copy</button>
          </div>

          <!-- Email Button -->
          <button class="btn btn-ghost email-via-btn" onclick="showEmailModal()">✉ Send via Email</button>

          <button class="send-another" onclick="resetForm()">Send another →</button>
        </div>
      </div>
    </div>
  </div>

  <div id="page-browse" class="page">
    <div class="browse-page">
      <div class="page-title">Browse</div>
      <p class="page-subtitle">Search for messages sent to someone by name.</p>
      <div class="browse-search-bar">
        <input type="text" id="browse-input" placeholder="Type a receiver's name…" onkeydown="if(event.key==='Enter')browseSearch()" />
        <button class="btn btn-primary browse-search-btn" onclick="browseSearch()">Search</button>
      </div>
      <div class="browse-results" id="browse-results">
        <div class="browse-empty"><div>♪</div><p>Search a name to find messages sent to them.</p></div>
      </div>
    </div>
  </div>

  <div id="page-about" class="page">
    <div class="about-page">
      <div class="about-logo">Haiba</div>
      <p class="about-tagline">A simple way to send someone a song that says what words can't. Pair music with a message, share a link, and let them feel it.</p>
      <div class="about-section">
        <h2>How it works</h2>
        <div class="about-steps">
          <div class="about-step"><div class="step-num">1</div><div class="step-body"><h3>Pick a song</h3><p>Search Spotify directly inside Haiba — no copy-pasting links, no leaving the page.</p></div></div>
          <div class="about-step"><div class="step-num">2</div><div class="step-body"><h3>Write your message</h3><p>Tell them why this song reminded you of them. It can be long, short, poetic, or just honest.</p></div></div>
          <div class="about-step"><div class="step-num">3</div><div class="step-body"><h3>Share the link</h3><p>Every message gets its own unique link. Send it over text, DM, or email — wherever feels right.</p></div></div>
          <div class="about-step"><div class="step-num">4</div><div class="step-body"><h3>They open it</h3><p>They see your message and the song plays right there. No app needed, no account required.</p></div></div>
        </div>
      </div>
      <div class="about-section">
        <h2>Why Haiba?</h2>
        <p>Music carries weight that words alone sometimes can't. A song can say "I miss you", "I'm proud of you", or "you're not alone" better than any sentence. Haiba is built around that idea — helping people share something real.</p>
        <p>Every message sent through Haiba is browsable. It's a living archive of small moments between people.</p>
      </div>
      <div class="about-cta">
        <h2>Ready to send one?</h2>
        <p>It takes less than a minute. Find the song, write what you feel, share the link.</p>
        <button class="btn btn-primary" onclick="navigate('home')">Send a Song ♪</button>
      </div>
    </div>
  </div>

  <div class="view-screen" id="view-screen">
    <div id="view-content"></div>
  </div>

  <footer>Made with ♪ by <a href="#">Haiba</a> · Share music, share feeling.</footer>
</div>

<div class="modal-overlay" id="preview-modal" onclick="closePreviewModal(event)">
  <div class="modal">
    <button class="modal-close" onclick="closePreviewModal()">✕</button>
    <div class="modal-title">Preview</div>
    <p class="modal-sub" id="preview-modal-sub">Here's how your message will look to them.</p>
    <div id="preview-modal-content"></div>
  </div>
</div>

<!-- Info Modal -->
<div class="modal-overlay" id="info-modal" onclick="closeInfoModal(event)">
  <div class="modal modal-sm">
    <button class="modal-close" onclick="closeInfoModal()">✕</button>
    <div class="info-modal-icon">♪</div>
    <div class="modal-title" style="text-align:center">Heads up</div>
    <p class="modal-sub" id="info-modal-msg" style="text-align:center;margin-bottom:24px"></p>
    <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="closeInfoModal()">Got it</button>
  </div>
</div>

<!-- Email Modal -->
<div class="modal-overlay" id="email-modal" onclick="closeEmailModal(event)">
  <div class="modal modal-sm">
    <button class="modal-close" onclick="closeEmailModal()">✕</button>
    <div class="email-modal-icon">✉</div>
    <div class="modal-title" style="text-align:center">Send via Email</div>
    <p class="modal-sub" style="text-align:center;margin-bottom:22px">Enter the receiver's email and we'll send them the link with your song.</p>
    <div id="email-modal-form">
      <div class="field" style="margin-bottom:14px">
        <label>Receiver's Email</label>
        <input type="email" id="email-modal-input" placeholder="their@email.com" onkeydown="if(event.key==='Enter')sendEmailModal()" />
        <span style="color:var(--error);font-size:0.82rem;display:none" id="email-modal-error">Please enter a valid email address</span>
      </div>
      <button class="btn btn-primary" id="email-modal-send-btn" style="width:100%;justify-content:center;padding:14px" onclick="sendEmailModal()">
        <span class="btn-label">Send Email ✉</span>
        <div class="loader"></div>
      </button>
    </div>
    <div id="email-modal-success" style="display:none;flex-direction:column;align-items:center;gap:12px;padding:16px 0">
      <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;font-size:22px">✉</div>
      <div style="font-family:'Playfair Display',serif;font-size:1.2rem">Email sent!</div>
      <div style="font-size:0.85rem;color:var(--muted)">Delivered to <strong id="email-modal-sent-to" style="color:var(--text)"></strong></div>
      <button class="btn btn-ghost" style="margin-top:8px" onclick="closeEmailModal()">Close</button>
    </div>
  </div>
</div>

<!-- Intro Modal -->
<div class="intro-overlay" id="intro-overlay" style="display:none">
  <div class="intro-modal">
    <div class="intro-particles">
      <span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="intro-icon-wrap">
      <div class="intro-ring"></div>
      <div class="intro-icon">♫</div>
    </div>
    <div class="intro-from" id="intro-from">Someone</div>
    <div class="intro-label">sent you a song</div>
    <div class="intro-song-info" id="intro-song-info"></div>
    <button class="intro-btn" onclick="closeIntro()">
      <span>Open your song</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <div class="intro-haiba">via Haiba ♪</div>
  </div>
</div>

<div class="copy-toast" id="copy-toast">Link copied! ✓</div>

<script src="app.js"></script>
</body>
</html>