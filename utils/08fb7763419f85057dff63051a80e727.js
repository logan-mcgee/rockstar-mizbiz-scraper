! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3281b1c6-c6cf-46c6-aadc-517d4ca6169c", e._sentryDebugIdIdentifier = "sentry-dbid-3281b1c6-c6cf-46c6-aadc-517d4ca6169c")
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
  [76], {
    76: (e, a, d) => {
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
//# sourceMappingURL=08fb7763419f85057dff63051a80e727.js.map