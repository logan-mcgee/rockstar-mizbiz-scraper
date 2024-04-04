! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7b3fa70a-9a43-44ff-999c-6c32895cea44", e._sentryDebugIdIdentifier = "sentry-dbid-7b3fa70a-9a43-44ff-999c-6c32895cea44")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [560], {
    560: (e, a, t) => {
      t.r(a), t.d(a, {
        sha1: () => d,
        sha256: () => o,
        sha384: () => s,
        sha512: () => l
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
      }, d = n("SHA-1"), o = n("SHA-256"), s = n("SHA-384"), l = n("SHA-512")
    }
  }
]);
//# sourceMappingURL=5f377e70bc61e6431be2dc4f5efbc88b.js.map