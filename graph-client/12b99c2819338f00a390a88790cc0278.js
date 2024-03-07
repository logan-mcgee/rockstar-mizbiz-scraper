! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "11957078-c9c1-42b5-8168-48d21944c5e3", e._sentryDebugIdIdentifier = "sentry-dbid-11957078-c9c1-42b5-8168-48d21944c5e3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [384], {
    7384: (e, a, d) => {
      d.r(a), d.d(a, {
        base: () => u,
        cdn: () => l,
        locale: () => t,
        useBase: () => g,
        useCdn: () => r,
        useLocale: () => o
      });
      var n = d(3336);
      const t = (0, n.makeVar)(document.documentElement.lang),
        o = () => (0, n.useReactiveVar)(t),
        s = window?.env,
        l = (0, n.makeVar)({
          media: s?.cdn?.media,
          videos: s?.cdn?.videos
        }),
        r = () => (0, n.useReactiveVar)(l),
        c = document.currentScript,
        f = c?.src ? new URL(c.src).origin : "";
      let i = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${f}/`;
      i.endsWith("/") || (i = `${i}/`);
      const u = (0, n.makeVar)(i),
        g = () => (0, n.useReactiveVar)(u)
    }
  }
]);
//# sourceMappingURL=12b99c2819338f00a390a88790cc0278.js.map