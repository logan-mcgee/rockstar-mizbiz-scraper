! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3281b1c6-c6cf-46c6-aadc-517d4ca6169c", e._sentryDebugIdIdentifier = "sentry-dbid-3281b1c6-c6cf-46c6-aadc-517d4ca6169c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [76], {
    76: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => d
      });
      const d = e => {
        let {
          id: t,
          init: a
        } = e;
        if (t) {
          const e = document.createElement("script");
          e.onload = () => a(), e.onerror = () => a(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", t), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
        } else a()
      }
    }
  }
]);
//# sourceMappingURL=9802061a37c92b98fdb45c69d5360aa6.js.map