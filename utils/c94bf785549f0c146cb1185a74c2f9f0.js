! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c5594a4d-6041-49a7-aa63-92cc5d61dc6c", e._sentryDebugIdIdentifier = "sentry-dbid-c5594a4d-6041-49a7-aa63-92cc5d61dc6c")
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
  [64], {
    64: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => t
      });
      const t = e => {
        let {
          id: a,
          init: d
        } = e;
        if (a) {
          const e = document.createElement("script");
          e.onload = () => d(), e.onerror = () => d(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", a), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
        } else d()
      }
    }
  }
]);
//# sourceMappingURL=c94bf785549f0c146cb1185a74c2f9f0.js.map