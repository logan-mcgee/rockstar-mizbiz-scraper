! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f92cdce7-158e-4f3c-9096-3e6d6166905e", e._sentryDebugIdIdentifier = "sentry-dbid-f92cdce7-158e-4f3c-9096-3e6d6166905e")
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
    3108: (e, a, d) => {
      d.r(a), d.d(a, {
        base: () => u,
        cdn: () => c,
        locale: () => t,
        useBase: () => g,
        useCdn: () => l,
        useLocale: () => o
      });
      var n = d(7264);
      const t = (0, n.makeVar)(document.documentElement.lang),
        o = () => (0, n.useReactiveVar)(t),
        s = window?.env,
        c = (0, n.makeVar)({
          media: s?.cdn?.media,
          videos: s?.cdn?.videos
        }),
        l = () => (0, n.useReactiveVar)(c),
        r = document.currentScript,
        f = r?.src ? new URL(r.src).origin : "";
      let i = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${f}/`;
      i.endsWith("/") || (i = `${i}/`);
      const u = (0, n.makeVar)(i),
        g = () => (0, n.useReactiveVar)(u)
    }
  }
]);