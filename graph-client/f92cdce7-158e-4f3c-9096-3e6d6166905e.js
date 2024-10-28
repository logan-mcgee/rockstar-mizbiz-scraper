! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f92cdce7-158e-4f3c-9096-3e6d6166905e", e._sentryDebugIdIdentifier = "sentry-dbid-f92cdce7-158e-4f3c-9096-3e6d6166905e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [108], {
    3108: (e, d, a) => {
      a.r(d), a.d(d, {
        base: () => u,
        cdn: () => l,
        locale: () => t,
        useBase: () => g,
        useCdn: () => r,
        useLocale: () => o
      });
      var n = a(7264);
      const t = (0, n.makeVar)(document.documentElement.lang),
        o = () => (0, n.useReactiveVar)(t),
        s = window?.env,
        l = (0, n.makeVar)({
          media: s?.cdn?.media,
          videos: s?.cdn?.videos
        }),
        r = () => (0, n.useReactiveVar)(l),
        c = document.currentScript,
        i = c?.src ? new URL(c.src).origin : "";
      let f = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${i}/`;
      f.endsWith("/") || (f = `${f}/`);
      const u = (0, n.makeVar)(f),
        g = () => (0, n.useReactiveVar)(u)
    }
  }
]);