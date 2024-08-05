! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7dbf53ea-5323-4762-a018-edb4878d52e2", e._sentryDebugIdIdentifier = "sentry-dbid-7dbf53ea-5323-4762-a018-edb4878d52e2")
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
  [150], {
    150: (e, d, t) => {
      t.r(d), t.d(d, {
        default: () => a
      });
      const a = e => {
        let {
          id: d,
          init: t
        } = e;
        if (d) {
          const e = document.createElement("script");
          e.onload = () => t(), e.onerror = () => t(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", d), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
        } else t()
      }
    }
  }
]);