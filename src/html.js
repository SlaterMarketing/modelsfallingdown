/** Single-page markup served by the worker. Image is static: /max.avif (repo root). */
export const pageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title></title>
  <style>
    :root {
      color-scheme: dark;
      --fg: #e0e0e0;
      --bg: #0a0a0a;
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
      max-width: 32rem;
      width: 100%;
      text-align: center;
    }
    p {
      margin: 0 0 1.25rem;
      font-size: clamp(1rem, 3vw, 1.2rem);
      letter-spacing: 0.02em;
    }
    img {
      max-width: min(100%, 480px);
      height: auto;
      display: block;
      margin: 0 auto;
      border-radius: 2px;
    }
  </style>
</head>
<body>
  <main>
    <p>i know how you got here, and im watching you</p>
    <img src="/max.avif" alt="" />
  </main>
</body>
</html>`;
