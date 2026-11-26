const p = process.env.NODE_ENV === "production";
const sec = [
  ["X-Content-Type-Options", "nosniff"], ["X-Frame-Options", "DENY"],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
  ["Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload"],
  ["Permissions-Policy", "camera=(), microphone=(), geolocation=()"],
  ["Content-Security-Policy", `default-src 'self'; script-src 'self' 'unsafe-inline'${p ? "" : " 'unsafe-eval'"}; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'`]
].map(([key, value]) => ({ key, value }));
export default {
  poweredByHeader: false, productionBrowserSourceMaps: false,
  async headers() { return [{ source: "/(.*)", headers: sec }, { source: "/ruang-jamur", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }]; }
};
