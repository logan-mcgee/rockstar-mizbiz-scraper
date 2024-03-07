! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "06fc5349-7395-4228-af3c-20542504d3df", e._sentryDebugIdIdentifier = "sentry-dbid-06fc5349-7395-4228-af3c-20542504d3df")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [664], {
    664: (e, a, t) => {
      t.r(a), t.d(a, {
        sha1: () => n,
        sha256: () => o,
        sha384: () => s,
        sha512: () => l
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
      }, n = d("SHA-1"), o = d("SHA-256"), s = d("SHA-384"), l = d("SHA-512")
    }
  }
]);
//# sourceMappingURL=e61fe5d5f6c775f7f41e3a2ba58b170c.js.map