! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "32a58665-2684-442e-af05-1395c7351045", e._sentryDebugIdIdentifier = "sentry-dbid-32a58665-2684-442e-af05-1395c7351045")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [664], {
    7664: (e, a, t) => {
      t.r(a), t.d(a, {
        sha1: () => d,
        sha256: () => o,
        sha384: () => l,
        sha512: () => s
      });
      const n = e => async function(a) {
        let {
          outputFormat: t = "hex"
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "string" == typeof a && (a = (new globalThis.TextEncoder).encode(a));
        const n = await globalThis.crypto.subtle.digest(e, a);
        return "hex" === t ? (e => {
          const a = new DataView(e);
          let t = "";
          for (let e = 0; e < a.byteLength; e += 4) t += a.getUint32(e).toString(16).padStart(8, "0");
          return t
        })(n) : n
      }, d = n("SHA-1"), o = n("SHA-256"), l = n("SHA-384"), s = n("SHA-512")
    }
  }
]);
//# sourceMappingURL=b84b706013876ace1da35a5c279f7e01.js.map