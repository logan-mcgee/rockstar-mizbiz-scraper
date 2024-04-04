! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4806d480-fc44-41f8-9fca-05412d15456d", e._sentryDebugIdIdentifier = "sentry-dbid-4806d480-fc44-41f8-9fca-05412d15456d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [560], {
    2560: (e, a, t) => {
      t.r(a), t.d(a, {
        sha1: () => n,
        sha256: () => o,
        sha384: () => l,
        sha512: () => s
      });
      const d = e => async function(a) {
        let {
          outputFormat: t = "hex"
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "string" == typeof a && (a = (new globalThis.TextEncoder).encode(a));
        const d = await globalThis.crypto.subtle.digest(e, a);
        return "hex" === t ? (e => {
          const a = new DataView(e);
          let t = "";
          for (let e = 0; e < a.byteLength; e += 4) t += a.getUint32(e).toString(16).padStart(8, "0");
          return t
        })(d) : d
      }, n = d("SHA-1"), o = d("SHA-256"), l = d("SHA-384"), s = d("SHA-512")
    }
  }
]);
//# sourceMappingURL=218e9c4f0f11492afeaa0915c70c081d.js.map