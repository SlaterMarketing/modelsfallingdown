/** Single-page markup served by the worker (no static asset bucket required). */
export const pageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Home</title>
  <style>
    :root {
      color-scheme: light dark;
      --bg: #0f1115;
      --fg: #e8eaed;
      --muted: #9aa0a6;
      --accent: #6ee7b7;
    }
    @media (prefers-color-scheme: light) {
      :root {
        --bg: #f6f7f9;
        --fg: #1a1d23;
        --muted: #5f6368;
        --accent: #047857;
      }
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      background: var(--bg);
      color: var(--fg);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      line-height: 1.5;
    }
    main {
      max-width: 36rem;
      width: 100%;
    }
    h1 {
      font-size: clamp(1.75rem, 4vw, 2.25rem);
      font-weight: 650;
      letter-spacing: -0.02em;
      margin: 0 0 0.75rem;
    }
    p {
      margin: 0 0 1rem;
      color: var(--muted);
    }
    a {
      color: var(--accent);
      text-decoration-thickness: 1px;
      text-underline-offset: 0.15em;
    }
    a:hover { text-decoration-thickness: 2px; }
  </style>
</head>
<body>
  <main>
    <h1>Welcome</h1>
    <p>This page is served from a Cloudflare Worker. Replace this markup in <code>src/html.js</code> or split routes in <code>src/index.js</code> as you grow.</p>
    <p><a href="https://developers.cloudflare.com/workers/">Workers docs</a></p>
  </main>
</body>
</html>`;
