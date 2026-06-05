import { useState } from "react";

// ─────────────────────────────────────────────────────────────────
// BACKEND TODO: Replace all // TODO: BACKEND comments
// with real API calls once the backend is ready.
// Key endpoints you'll need:
//   POST /api/auth/login        → { token, user }
//   GET  /api/auth/google       → OAuth redirect
//   GET  /api/auth/github       → OAuth redirect
//   POST /api/auth/forgot-password → send reset email
// ─────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────
// SECTION: GLOBAL STYLES
// All CSS lives here as a template string so the component is
// self-contained (no external .css file needed).
// Uses CSS variables for easy theming — matches Signup.js exactly.
// ─────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── DESIGN TOKENS ── change these to retheme the whole page */
  :root {
    --bg:        #0a0a0f;   /* page background */
    --surface:   #13131a;   /* card / left panel background */
    --border:    #2a2a3a;   /* subtle borders */
    --accent:    #c8f04d;   /* lime-green brand accent */
    --accent-dim:#9ab83a;
    --text:      #f0f0f5;   /* primary text */
    --muted:     #7a7a90;   /* secondary / label text */
    --error:     #ff5f6d;   /* validation error red */
    --radius:    14px;      /* border radius for inputs & buttons */
  }

  /* ── PAGE LAYOUT: two-column grid (left panel + right form) ── */
  .login-page {
    min-height: 100vh;
    background: var(--bg);
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    overflow: hidden;
  }

  /* ── LEFT DECORATIVE PANEL ── */
  .login-left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px;
    background: var(--surface);
    border-right: 1px solid var(--border);
    overflow: hidden;
  }
  /* Radial glow overlays on the left panel */
  .login-left::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 80% 20%, rgba(200,240,77,.12) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 10% 80%, rgba(200,240,77,.07) 0%, transparent 60%);
    pointer-events: none;
  }
  /* Subtle dot-grid background texture on left panel */
  .login-grid-deco {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle, rgba(200,240,77,.08) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
  }

  /* ── BRAND / LOGO AREA (top of left panel) ── */
  .login-brand {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    letter-spacing: -0.03em;
    // color: var(--accent);
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 1;
  }
  .login-brand-logo {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ── LARGE TAGLINE TEXT on left panel ── */
  .login-tagline {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: clamp(2rem, 3.2vw, 2.8rem);
    line-height: 1.1;
    letter-spacing: -0.04em;
    color: var(--text);
    margin-bottom: 18px;
    z-index: 1;
  }
  .login-tagline span { color: var(--accent); }
  .login-tagline-sub {
    font-size: 1rem;
    color: var(--muted);
    line-height: 1.65;
    max-width: 360px;
    z-index: 1;
  }

  /* ── STAT CARDS on left panel ── */
  .stat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-top: 40px;
    z-index: 1;
  }
  .stat-card {
    background: rgba(255,255,255,.04);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 18px;
  }
  .stat-number {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.6rem;
    color: var(--accent);
    letter-spacing: -0.04em;
  }
  .stat-label { font-size: 0.78rem; color: var(--muted); margin-top: 4px; }

  /* ── FOOTER TEXT on left panel ── */
  .login-left-foot { font-size: 0.78rem; color: var(--muted); z-index: 1; }
  .login-left-foot a { color: var(--accent); text-decoration: none; }

  /* ── RIGHT FORM PANEL ── */
  .login-right {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px 40px;
    background: var(--bg);
  }

  /* ── FORM CARD: contains all form elements ── */
  .login-form-card {
    width: 100%;
    max-width: 400px;
    animation: fadeUp .5s ease both;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── FORM HEADER (title + subtitle) ── */
  .login-form-title {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.9rem;
    letter-spacing: -0.04em;
    margin-bottom: 6px;
  }
  .login-form-subtitle { font-size: 0.9rem; color: var(--muted); margin-bottom: 32px; }
  .login-form-subtitle a { color: var(--accent); text-decoration: none; font-weight: 500; }

  /* ── SOCIAL LOGIN BUTTONS ── */
  .btn-social {
    width: 100%;
    padding: 11px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    transition: border-color .2s, background .2s;
  }
  .btn-social:hover { border-color: var(--accent); background: rgba(200,240,77,.04); }

  /* ── DIVIDER between social and email login ── */
  .divider { display: flex; align-items: center; gap: 12px; margin: 22px 0; }
  .divider-line { flex: 1; height: 1px; background: var(--border); }
  .divider-text { font-size: 0.75rem; color: var(--muted); white-space: nowrap; }

  /* ── INPUT FIELDS ── */
  .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
  .field label { font-size: 0.78rem; font-weight: 500; color: var(--muted); letter-spacing: .04em; text-transform: uppercase; }
  .field input {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 12px 14px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    color: var(--text);
    outline: none;
    transition: border-color .2s, box-shadow .2s;
  }
  .field input::placeholder { color: var(--muted); }
  .field input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(200,240,77,.12);
  }
  .field input.error-input { border-color: var(--error); }
  .field-error { font-size: 0.75rem; color: var(--error); margin-top: 2px; }

  /* ── PASSWORD FIELD with show/hide toggle ── */
  .password-wrap { position: relative; }
  .password-wrap input { width: 100%; padding-right: 42px; }
  .toggle-pw {
    position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
    background: none; border: none; cursor: pointer; color: var(--muted); padding: 0;
    display: flex; align-items: center;
  }
  .toggle-pw:hover { color: var(--accent); }

  /* ── REMEMBER ME + FORGOT PASSWORD row ── */
  .login-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 22px;
    margin-top: -4px;
  }
  .remember-me {
    display: flex; align-items: center; gap: 8px;
    font-size: 0.82rem; color: var(--muted); cursor: pointer;
  }
  .remember-me input[type=checkbox] { accent-color: var(--accent); }
  .forgot-link {
    font-size: 0.82rem; color: var(--accent);
    text-decoration: none; font-weight: 500;
  }
  .forgot-link:hover { text-decoration: underline; }

  /* ── PRIMARY SUBMIT BUTTON ── */
  .btn-primary {
    width: 100%;
    padding: 14px;
    background: var(--accent);
    color: #0a0a0f;
    border: none;
    border-radius: var(--radius);
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: .02em;
    cursor: pointer;
    transition: background .2s, transform .1s, box-shadow .2s;
  }
  .btn-primary:hover:not(:disabled) {
    background: #d8ff55;
    box-shadow: 0 6px 24px rgba(200,240,77,.35);
    transform: translateY(-1px);
  }
  .btn-primary:active:not(:disabled) { transform: translateY(0); }
  .btn-primary:disabled { opacity: .55; cursor: not-allowed; }

  /* ── TOAST NOTIFICATION (bottom center) ── */
  .toast {
    position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
    background: #1e1e2e; border: 1px solid var(--border);
    border-radius: 100px; padding: 10px 22px;
    font-size: 0.85rem; color: var(--text);
    box-shadow: 0 8px 32px rgba(0,0,0,.4);
    animation: toastIn .3s ease;
    z-index: 999;
    white-space: nowrap;
  }
  @keyframes toastIn {
    from { opacity: 0; transform: translateX(-50%) translateY(10px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  /* ── RESPONSIVE: stack to single column on mobile ── */
  @media (max-width: 768px) {
    .login-page { grid-template-columns: 1fr; }
    .login-left { display: none; }
    .login-right { padding: 32px 20px; align-items: flex-start; padding-top: 60px; }
  }
`;


// ─────────────────────────────────────────────────────────────────
// SECTION: SVG ICON COMPONENTS
// Inline SVG icons — no external icon library needed.
// ─────────────────────────────────────────────────────────────────

// Eye icon — shown when password is hidden (click to reveal)
const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

// Eye-off icon — shown when password is visible (click to hide)
const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

// Google "G" logo for OAuth button
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

// GitHub logo for OAuth button
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);


// ─────────────────────────────────────────────────────────────────
// SECTION: FORM VALIDATION
// Pure function — takes form fields, returns an errors object.
// Empty object = no errors = form is valid.
// ─────────────────────────────────────────────────────────────────
function validate(fields) {
  const errs = {};

  // Email: required + basic format check
  if (!fields.email.trim()) errs.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = "Invalid email";

  // Password: required only (no length check on login)
  if (!fields.password) errs.password = "Required";

  return errs;
}


// ─────────────────────────────────────────────────────────────────
// SECTION: MAIN LOGIN COMPONENT
// ─────────────────────────────────────────────────────────────────
export default function Login() {

  // ── STATE ──────────────────────────────────────────────────────
  // fields       → controlled form values
  // errors       → validation error messages per field
  // showPw       → toggles password visibility
  // loading      → disables submit button during API call
  // toast        → temporary bottom notification message
  const [fields, setFields]   = useState({ email: "", password: "", remember: false });
  const [errors, setErrors]   = useState({});
  const [showPw, setShowPw]   = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast]     = useState(null);

  // Generic field updater — works for text inputs AND checkboxes
  const set = (k) => (e) =>
    setFields((prev) => ({
      ...prev,
      [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  // ── TOAST HELPER ───────────────────────────────────────────────
  // Shows a bottom notification for 3 seconds then auto-dismisses
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };


  // ── HANDLER: Email/Password Login ──────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields; stop if any errors
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setLoading(true);
    try {
      // ───────────────────────────────────────────────────────────
      // TODO: BACKEND – Replace mock below with real login API call:
      //
      //   const res = await fetch('/api/auth/login', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({
      //       email:    fields.email,
      //       password: fields.password,
      //       remember: fields.remember,  // backend can set longer-lived token
      //     }),
      //   });
      //
      //   if (!res.ok) {
      //     const data = await res.json();
      //     throw new Error(data.message || 'Login failed');
      //   }
      //
      //   const { token, user } = await res.json();
      //
      //   // Store auth token:
      //   localStorage.setItem('token', token);  // or use an auth context / Redux
      //
      //   // Redirect to dashboard:
      //   navigate('/dashboard');
      // ───────────────────────────────────────────────────────────
      await new Promise((r) => setTimeout(r, 1200)); // ← remove when real API is hooked
      showToast("✅ Logged in! (mock)");
    } catch (err) {
      showToast("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };


  // ── HANDLER: Google OAuth ───────────────────────────────────────
  const handleGoogle = () => {
    // TODO: BACKEND – Start Google OAuth flow, e.g.:
    //   window.location.href = '/api/auth/google';
    //   or: use @react-oauth/google → googleLogin()
    showToast("Google OAuth — connect backend");
  };


  // ── HANDLER: GitHub OAuth ───────────────────────────────────────
  const handleGithub = () => {
    // TODO: BACKEND – Start GitHub OAuth flow, e.g.:
    //   window.location.href = '/api/auth/github';
    showToast("GitHub OAuth — connect backend");
  };


  // ── HANDLER: Forgot Password ────────────────────────────────────
  const handleForgotPassword = (e) => {
    e.preventDefault();
    // TODO: BACKEND – Navigate to forgot-password page or trigger modal, e.g.:
    //   navigate('/forgot-password');
    //   or open a modal that calls:
    //   POST /api/auth/forgot-password  { email: fields.email }
    showToast("Forgot password — connect backend");
  };


  // ── RENDER ──────────────────────────────────────────────────────
  return (
    <>
      {/* Inject scoped styles */}
      <style>{styles}</style>

      <div className="login-page">

        {/* ════════════════════════════════════════════════════════
            BLOCK: LEFT DECORATIVE PANEL
            Branding, tagline, social proof stats.
            Hidden on mobile (CSS media query).
        ════════════════════════════════════════════════════════ */}
        <div className="login-left">

          {/* Background dot-grid texture */}
          <div className="login-grid-deco" />

          <div className="login-brand">
            <div className="login-brand-logo">
              <img src="./media/images/tradezen_icon.png" alt="logo" style={{ height: 23  }} />
            </div>
            TradeZen.
          </div>

          {/* ── TAGLINE + SUBTEXT ── */}
          <div style={{ zIndex: 1 }}>
            <h2 className="login-tagline">
              Welcome<br />back to<br /><span>Real World.</span>
            </h2>
            <p className="login-tagline-sub">
              Pick up right where you left off. Your work, your team, your momentum — all waiting.
            </p>

            {/* ── SOCIAL PROOF STAT CARDS ── */}
            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-number">50k+</div>
                <div className="stat-label">Active users</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">180+</div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Avg. rating</div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM FOOTER LINK ── */}
          <p className="login-left-foot">
            Don't have an account? <a href="/signup">Create one free →</a>
          </p>
        </div>


        {/* ════════════════════════════════════════════════════════
            BLOCK: RIGHT FORM PANEL
            Contains the full login form with all interactions.
        ════════════════════════════════════════════════════════ */}
        <div className="login-right">
          <div className="login-form-card">

            {/* ── FORM HEADER ── */}
            <h1 className="login-form-title">Sign in</h1>
            <p className="login-form-subtitle">
              New here? <a href="/signup">Create a free account</a>
            </p>

            {/* ════════════════════════════════════════════════════
                BLOCK: SOCIAL LOGIN BUTTONS
                OAuth shortcuts — Google and GitHub.
                Connect handlers above when backend is ready.
            ════════════════════════════════════════════════════ */}
            <button className="btn-social" onClick={handleGoogle} type="button">
              <GoogleIcon /> Continue with Google
            </button>
            <div style={{ height: 10 }} />
            <button className="btn-social" onClick={handleGithub} type="button">
              <GithubIcon /> Continue with GitHub
            </button>

            {/* ── DIVIDER between social and email login ── */}
            <div className="divider">
              <span className="divider-line" />
              <span className="divider-text">or sign in with email</span>
              <span className="divider-line" />
            </div>

            {/* ════════════════════════════════════════════════════
                BLOCK: EMAIL / PASSWORD FORM
                Controlled inputs with inline validation errors.
            ════════════════════════════════════════════════════ */}
            <form onSubmit={handleSubmit} noValidate>

              {/* ── EMAIL FIELD ── */}
              <div className="field">
                <label htmlFor="login-email">Email address</label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="sazid@company.com"
                  value={fields.email}
                  onChange={set("email")}
                  className={errors.email ? "error-input" : ""}
                  autoComplete="email"
                />
                {/* Validation error shown below the input */}
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              {/* ── PASSWORD FIELD with show/hide toggle ── */}
              <div className="field">
                <label htmlFor="login-password">Password</label>
                <div className="password-wrap">
                  <input
                    id="login-password"
                    type={showPw ? "text" : "password"}
                    placeholder="Your password"
                    value={fields.password}
                    onChange={set("password")}
                    className={errors.password ? "error-input" : ""}
                    autoComplete="current-password"
                  />
                  {/* Toggle password visibility */}
                  <button
                    type="button"
                    className="toggle-pw"
                    onClick={() => setShowPw((v) => !v)}
                    aria-label={showPw ? "Hide password" : "Show password"}
                  >
                    {showPw ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.password && <span className="field-error">{errors.password}</span>}
              </div>

              {/* ════════════════════════════════════════════════════
                  BLOCK: REMEMBER ME + FORGOT PASSWORD
                  Remember-me checkbox (pass to backend for session length).
                  Forgot password triggers the reset flow.
              ════════════════════════════════════════════════════ */}
              <div className="login-meta">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    checked={fields.remember}
                    onChange={set("remember")}
                  />
                  Remember me
                </label>
                {/* TODO: BACKEND – hook to /forgot-password page or modal */}
                <a href="/forgot-password" className="forgot-link" onClick={handleForgotPassword}>
                  Forgot password?
                </a>
              </div>

              {/* ── SUBMIT BUTTON ── disabled while loading ── */}
              <button className="btn-primary" type="submit" disabled={loading}>
                {loading ? "Signing in…" : "Sign in →"}
              </button>

            </form>
            {/* END: Email / Password Form */}

          </div>
        </div>
        {/* END: Right Form Panel */}

      </div>
      {/* END: Page Layout */}

      {/* ════════════════════════════════════════════════════════════
          BLOCK: TOAST NOTIFICATION
          Floating pill at bottom-center for success/error feedback.
          Auto-dismisses after 3 seconds.
      ════════════════════════════════════════════════════════════ */}
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}