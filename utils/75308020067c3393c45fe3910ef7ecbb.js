! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "06fc5349-7395-4228-af3c-20542504d3df", e._sentryDebugIdIdentifier = "sentry-dbid-06fc5349-7395-4228-af3c-20542504d3df")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [664], {
    664: (e, t, a) => {
      a.r(t), a.d(t, {
        sha1: () => o,
        sha256: () => d,
        sha384: () => s,
        sha512: () => l
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
      }, o = n("SHA-1"), d = n("SHA-256"), s = n("SHA-384"), l = n("SHA-512")
    }
  }
]);
//# sourceMappingURL=75308020067c3393c45fe3910ef7ecbb.js.map