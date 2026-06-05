import React from 'react';
import { useState } from "react";

// ─────────────────────────────────────────────
        // BACKEND TODO: Replace all // TODO: BACKEND comments
        // with real API calls once the backend is ready.
        // ─────────────────────────────────────────────
        
        const styles = `
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        
          :root {
            --bg:        #0a0a0f;
            --surface:   #13131a;
            --border:    #2a2a3a;
            --accent:    #c8f04d;
            --accent-dim:#9ab83a;
            --text:      #f0f0f5;
            --muted:     #7a7a90;
            --error:     #ff5f6d;
            --radius:    14px;
          }
        
          .page {
            min-height: 100vh;
            background: var(--bg);
            display: grid;
            grid-template-columns: 1fr 1fr;
            font-family: 'DM Sans', sans-serif;
            color: var(--text);
            overflow: hidden;
          }
        
          /* ── LEFT PANEL ── */
          .panel-left {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 48px;
            background: var(--surface);
            border-right: 1px solid var(--border);
            overflow: hidden;
          }
          .panel-left::before {
            content: '';
            position: absolute;
            inset: 0;
            background:
              radial-gradient(ellipse 60% 50% at 20% 80%, rgba(200,240,77,.12) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 80% 10%, rgba(200,240,77,.07) 0%, transparent 60%);
            pointer-events: none;
          }
        
          .brand { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; letter-spacing: -0.03em; color: var(--accent); }
        
          .panel-left-body { z-index: 1; }
          .panel-tagline {
            font-family: 'Syne', sans-serif;
            font-weight: 700;
            font-size: clamp(2rem, 3.5vw, 3rem);
            line-height: 1.1;
            letter-spacing: -0.04em;
            color: var(--text);
            margin-bottom: 20px;
          }
          .panel-tagline span { color: var(--accent); }
          .panel-sub { font-size: 1rem; color: var(--muted); line-height: 1.65; max-width: 380px; }
        
          .feature-list { list-style: none; margin-top: 40px; display: flex; flex-direction: column; gap: 14px; }
          .feature-item { display: flex; align-items: center; gap: 12px; font-size: 0.9rem; color: var(--muted); }
          .feature-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
        
          .panel-foot { font-size: 0.78rem; color: var(--muted); z-index: 1; }
          .panel-foot a { color: var(--accent); text-decoration: none; }
        
          /* grid deco */
          .grid-deco {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(200,240,77,.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,240,77,.04) 1px, transparent 1px);
            background-size: 48px 48px;
            pointer-events: none;
          }
        
          /* ── RIGHT PANEL ── */
          .panel-right {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 48px 40px;
            background: var(--bg);
          }
        
          .form-card {
            width: 100%;
            max-width: 420px;
            animation: fadeUp .5s ease both;
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        
          .form-title {
            font-family: 'Syne', sans-serif;
            font-weight: 800;
            font-size: 1.9rem;
            letter-spacing: -0.04em;
            margin-bottom: 6px;
          }
          .form-subtitle { font-size: 0.9rem; color: var(--muted); margin-bottom: 32px; }
          .form-subtitle a { color: var(--accent); text-decoration: none; font-weight: 500; }
        
          .row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        
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
        
          .password-wrap { position: relative; }
          .password-wrap input { width: 100%; padding-right: 42px; }
          .toggle-pw {
            position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
            background: none; border: none; cursor: pointer; color: var(--muted); padding: 0;
            display: flex; align-items: center;
          }
          .toggle-pw:hover { color: var(--accent); }
        
          .terms {
            display: flex; align-items: flex-start; gap: 10px;
            font-size: 0.82rem; color: var(--muted); margin-bottom: 24px; margin-top: 4px;
          }
          .terms input[type=checkbox] { accent-color: var(--accent); margin-top: 2px; flex-shrink: 0; }
          .terms a { color: var(--accent); text-decoration: none; }
        
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
            position: relative;
            overflow: hidden;
          }
          .btn-primary:hover:not(:disabled) {
            background: #d8ff55;
            box-shadow: 0 6px 24px rgba(200,240,77,.35);
            transform: translateY(-1px);
          }
          .btn-primary:active:not(:disabled) { transform: translateY(0); }
          .btn-primary:disabled { opacity: .55; cursor: not-allowed; }
        
          .divider { display: flex; align-items: center; gap: 12px; margin: 22px 0; }
          .divider-line { flex: 1; height: 1px; background: var(--border); }
          .divider-text { font-size: 0.75rem; color: var(--muted); white-space: nowrap; }
        
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
        
          .toast {
            position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
            background: #1e1e2e; border: 1px solid var(--border);
            border-radius: 100px; padding: 10px 22px;
            font-size: 0.85rem; color: var(--text);
            box-shadow: 0 8px 32px rgba(0,0,0,.4);
            animation: toastIn .3s ease;
            z-index: 999;
          }
          @keyframes toastIn {
            from { opacity: 0; transform: translateX(-50%) translateY(10px); }
            to   { opacity: 1; transform: translateX(-50%) translateY(0); }
          }
        
          @media (max-width: 768px) {
            .page { grid-template-columns: 1fr; }
            .panel-left { display: none; }
            .panel-right { padding: 32px 20px; align-items: flex-start; padding-top: 60px; }
          }
        `;
        
        // ── SVG Icons ──────────────────────────────────
        const EyeIcon = () => (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
          </svg>
        );
        const EyeOffIcon = () => (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
          </svg>
        );
        const GoogleIcon = () => (
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        );
        const GithubIcon = () => (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        );
        
        // ── Validation ─────────────────────────────────
        function validate(fields) {
          const errs = {};
          if (!fields.firstName.trim()) errs.firstName = "Required";
          if (!fields.lastName.trim()) errs.lastName = "Required";
          // TODO: BACKEND – optionally check if email already exists via API
          if (!fields.email.trim()) errs.email = "Required";
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = "Invalid email";
          if (!fields.password) errs.password = "Required";
          else if (fields.password.length < 8) errs.password = "Min 8 characters";
          if (!fields.confirm) errs.confirm = "Required";
          else if (fields.confirm !== fields.password) errs.confirm = "Passwords don't match";
          if (!fields.terms) errs.terms = "You must agree to continue";
          return errs;
        }
        
        export default function Signup() {
          const [fields, setFields] = useState({
            firstName: "", lastName: "", email: "", password: "", confirm: "", terms: false,
          });
          const [errors, setErrors] = useState({});
          const [showPw, setShowPw] = useState(false);
          const [showConfirm, setShowConfirm] = useState(false);
          const [loading, setLoading] = useState(false);
          const [toast, setToast] = useState(null);
        
          const set = (k) => (e) =>
            setFields((prev) => ({ ...prev, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
        
          const showToast = (msg) => {
            setToast(msg);
            setTimeout(() => setToast(null), 3000);
          };
        
          const handleSubmit = async (e) => {
            e.preventDefault();
            const errs = validate(fields);
            setErrors(errs);
            if (Object.keys(errs).length) return;
        
            setLoading(true);
            try {
              // ─────────────────────────────────────────
              // TODO: BACKEND – Replace the mock below with a real API call, e.g.:
              //
              //   const res = await fetch('/api/auth/signup', {
              //     method: 'POST',
              //     headers: { 'Content-Type': 'application/json' },
              //     body: JSON.stringify({
              //       firstName: fields.firstName,
              //       lastName:  fields.lastName,
              //       email:     fields.email,
              //       password:  fields.password,
              //     }),
              //   });
              //   if (!res.ok) {
              //     const data = await res.json();
              //     throw new Error(data.message || 'Signup failed');
              //   }
              //   const { token, user } = await res.json();
              //   // Store token: localStorage.setItem('token', token);
              //   // Redirect: navigate('/dashboard');
              // ─────────────────────────────────────────
              await new Promise((r) => setTimeout(r, 1400)); // remove when real API is hooked
              showToast("🎉 Account created! (mock)");
            } catch (err) {
              showToast("❌ " + err.message);
            } finally {
              setLoading(false);
            }
          };
        
          const handleGoogle = () => {
            // TODO: BACKEND – Trigger OAuth flow, e.g.:
            //   window.location.href = '/api/auth/google';
            //   or use a library like @react-oauth/google
            showToast("Google OAuth — connect backend");
          };
        
          const handleGithub = () => {
            // TODO: BACKEND – Trigger GitHub OAuth flow, e.g.:
            //   window.location.href = '/api/auth/github';
            showToast("GitHub OAuth — connect backend");
          };

return ( 
            <>
              <style>{styles}</style>
              <div className="page">
        
                {/* ── Left decorative panel ── */}
                <div className="panel-left">
                  <div className="grid-deco" />
                  <div className="brand">TradeZen</div>
        
                  <div className="panel-left-body">
                    <h2 className="panel-tagline">
                      Build something<br /><span>remarkable</span><br />today.
                    </h2>
                    <p className="panel-sub">
                      Join thousands of makers, developers, and teams who ship faster with our platform.
                    </p>
                    <ul className="feature-list">
                      {["No credit card required", "Up and running in 2 minutes", "Scales with your team"].map((f) => (
                        <li className="feature-item" key={f}>
                          <span className="feature-dot" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
        
                  <p className="panel-foot">
                    Already have an account? <a href="/login">Sign in →</a>
                  </p>
                </div>
        
                {/* ── Right form panel ── */}
                <div className="panel-right">
                  <div className="form-card">
                    <h1 className="form-title">Create account</h1>
                    <p className="form-subtitle">
                      Already registered? <a href="/login">Sign in</a>
                    </p>
        
                    {/* Social buttons */}
                    <button className="btn-social" onClick={handleGoogle} type="button">
                      <GoogleIcon /> Continue with Google
                    </button>
                    <div style={{ height: 10 }} />
                    <button className="btn-social" onClick={handleGithub} type="button">
                      <GithubIcon /> Continue with GitHub
                    </button>
        
                    <div className="divider">
                      <span className="divider-line" />
                      <span className="divider-text">or sign up with email</span>
                      <span className="divider-line" />
                    </div>
        
                    <form onSubmit={handleSubmit} noValidate>
                      {/* Name row */}
                      <div className="row">
                        <div className="field">
                          <label>First name</label>
                          <input
                            type="text" placeholder="Jane"
                            value={fields.firstName} onChange={set("firstName")}
                            className={errors.firstName ? "error-input" : ""}
                            autoComplete="given-name"
                          />
                          {errors.firstName && <span className="field-error">{errors.firstName}</span>}
                        </div>
                        <div className="field">
                          <label>Last name</label>
                          <input
                            type="text" placeholder="Doe"
                            value={fields.lastName} onChange={set("lastName")}
                            className={errors.lastName ? "error-input" : ""}
                            autoComplete="family-name"
                          />
                          {errors.lastName && <span className="field-error">{errors.lastName}</span>}
                        </div>
                      </div>
        
                      {/* Email */}
                      <div className="field">
                        <label>Email address</label>
                        <input
                          type="email" placeholder="jane@company.com"
                          value={fields.email} onChange={set("email")}
                          className={errors.email ? "error-input" : ""}
                          autoComplete="email"
                        />
                        {errors.email && <span className="field-error">{errors.email}</span>}
                      </div>
        
                      {/* Password */}
                      <div className="field">
                        <label>Password</label>
                        <div className="password-wrap">
                          <input
                            type={showPw ? "text" : "password"} placeholder="Min 8 characters"
                            value={fields.password} onChange={set("password")}
                            className={errors.password ? "error-input" : ""}
                            autoComplete="new-password"
                          />
                          <button type="button" className="toggle-pw" onClick={() => setShowPw((v) => !v)}>
                            {showPw ? <EyeOffIcon /> : <EyeIcon />}
                          </button>
                        </div>
                        {errors.password && <span className="field-error">{errors.password}</span>}
                      </div>
        
                      {/* Confirm password */}
                      <div className="field">
                        <label>Confirm password</label>
                        <div className="password-wrap">
                          <input
                            type={showConfirm ? "text" : "password"} placeholder="Repeat password"
                            value={fields.confirm} onChange={set("confirm")}
                            className={errors.confirm ? "error-input" : ""}
                            autoComplete="new-password"
                          />
                          <button type="button" className="toggle-pw" onClick={() => setShowConfirm((v) => !v)}>
                            {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
                          </button>
                        </div>
                        {errors.confirm && <span className="field-error">{errors.confirm}</span>}
                      </div>
        
                      {/* Terms */}
                      <label className="terms">
                        <input type="checkbox" checked={fields.terms} onChange={set("terms")} />
                        <span>
                          I agree to the <a href="/terms">Terms of Service</a> and{" "}
                          <a href="/privacy">Privacy Policy</a>
                          {errors.terms && <span className="field-error" style={{ display: "block" }}>{errors.terms}</span>}
                        </span>
                      </label>
        
                      <button className="btn-primary" type="submit" disabled={loading}>
                        {loading ? "Creating account…" : "Create account →"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
        
              {toast && <div className="toast">{toast}</div>}
            </>
          );
        }
