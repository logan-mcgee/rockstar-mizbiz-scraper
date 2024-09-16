! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c99b86f3-af34-43f3-a851-d2f4a1499a3e", e._sentryDebugIdIdentifier = "sentry-dbid-c99b86f3-af34-43f3-a851-d2f4a1499a3e")
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
    2150: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => d
      });
      const d = e => {
        let {
          id: a,
          init: t
        } = e;
        if (a) {
          const e = document.createElement("script");
          e.onload = () => t(), e.onerror = () => t(), e.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", e.setAttribute("data-domain-script", a), e.setAttribute("data-document-language", "true"), document.head.appendChild(e)
        } else t()
      }
    }
  }
]);