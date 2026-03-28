/**
 * Cloudflare Worker — serves a basic HTML site.
 *
 * - npm run dev  → http://localhost:8787/
 * - npm run deploy
 */

import { pageHtml } from "./html.js";

const HTML_HEADERS = {
  "content-type": "text/html; charset=utf-8",
  "cache-control": "public, max-age=300",
};

/** @param {Request} request */
function route(request) {
  const url = new URL(request.url);
  if (url.pathname === "/" || url.pathname === "/index.html") {
    return new Response(pageHtml, { headers: HTML_HEADERS });
  }
  return new Response("Not found", {
    status: 404,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

export default {
  async fetch(request, env, ctx) {
    console.info({ message: "request", path: new URL(request.url).pathname });
    return route(request);
  },
};
