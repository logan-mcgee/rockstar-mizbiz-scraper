! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4806d480-fc44-41f8-9fca-05412d15456d", e._sentryDebugIdIdentifier = "sentry-dbid-4806d480-fc44-41f8-9fca-05412d15456d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [560], {
    2560: (e, t, a) => {
      a.r(t), a.d(t, {
        sha1: () => d,
        sha256: () => o,
        sha384: () => l,
        sha512: () => s
      });
      const n = e => async function(t) {
        let {
          outputFormat: a = "hex"
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "string" == typeof t && (t = (new globalThis.TextEncoder).encode(t));
        const n = await globalThis.crypto.subtle.digest(e, t);
        return "hex" === a ? (e => {
          const t = new DataView(e);
          let a = "";
          for (let e = 0; e < t.byteLength; e += 4) a += t.getUint32(e).toString(16).padStart(8, "0");
          return a
        })(n) : n
      }, d = n("SHA-1"), o = n("SHA-256"), l = n("SHA-384"), s = n("SHA-512")
    }
  }
]);
//# sourceMappingURL=ed72753e5d0b9f6eac5aef37b7871c39.js.map