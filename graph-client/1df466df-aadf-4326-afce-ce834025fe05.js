! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1df466df-aadf-4326-afce-ce834025fe05", e._sentryDebugIdIdentifier = "sentry-dbid-1df466df-aadf-4326-afce-ce834025fe05")
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
    9961: (e, t, a) => {
      a.r(t), a.d(t, {
        sha1: () => n,
        sha256: () => o,
        sha384: () => l,
        sha512: () => s
      });
      const d = e => async function(t) {
        let {
          outputFormat: a = "hex"
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "string" == typeof t && (t = (new globalThis.TextEncoder).encode(t));
        const d = await globalThis.crypto.subtle.digest(e, t);
        return "hex" === a ? (e => {
          const t = new DataView(e);
          let a = "";
          for (let e = 0; e < t.byteLength; e += 4) a += t.getUint32(e).toString(16).padStart(8, "0");
          return a
        })(d) : d
      }, n = d("SHA-1"), o = d("SHA-256"), l = d("SHA-384"), s = d("SHA-512")
    }
  }
]);