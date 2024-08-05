! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0bd67694-1274-47c0-9681-0cc4d0c95dfa", e._sentryDebugIdIdentifier = "sentry-dbid-0bd67694-1274-47c0-9681-0cc4d0c95dfa")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [961], {
    961: (e, t, d) => {
      d.r(t), d.d(t, {
        sha1: () => n,
        sha256: () => o,
        sha384: () => s,
        sha512: () => l
      });
      const a = e => async function(t) {
        let {
          outputFormat: d = "hex"
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "string" == typeof t && (t = (new globalThis.TextEncoder).encode(t));
        const a = await globalThis.crypto.subtle.digest(e, t);
        return "hex" === d ? (e => {
          const t = new DataView(e);
          let d = "";
          for (let e = 0; e < t.byteLength; e += 4) d += t.getUint32(e).toString(16).padStart(8, "0");
          return d
        })(a) : a
      }, n = a("SHA-1"), o = a("SHA-256"), s = a("SHA-384"), l = a("SHA-512")
    }
  }
]);