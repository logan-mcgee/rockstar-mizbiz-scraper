! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1df466df-aadf-4326-afce-ce834025fe05", e._sentryDebugIdIdentifier = "sentry-dbid-1df466df-aadf-4326-afce-ce834025fe05")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [961], {
    9961: (e, d, t) => {
      t.r(d), t.d(d, {
        sha1: () => n,
        sha256: () => o,
        sha384: () => l,
        sha512: () => s
      });
      const a = e => async function(d) {
        let {
          outputFormat: t = "hex"
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "string" == typeof d && (d = (new globalThis.TextEncoder).encode(d));
        const a = await globalThis.crypto.subtle.digest(e, d);
        return "hex" === t ? (e => {
          const d = new DataView(e);
          let t = "";
          for (let e = 0; e < d.byteLength; e += 4) t += d.getUint32(e).toString(16).padStart(8, "0");
          return t
        })(a) : a
      }, n = a("SHA-1"), o = a("SHA-256"), l = a("SHA-384"), s = a("SHA-512")
    }
  }
]);