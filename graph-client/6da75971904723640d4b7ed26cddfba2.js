! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "11957078-c9c1-42b5-8168-48d21944c5e3", e._sentryDebugIdIdentifier = "sentry-dbid-11957078-c9c1-42b5-8168-48d21944c5e3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [384], {
    7384: (e, a, n) => {
      n.r(a), n.d(a, {
        base: () => f,
        cdn: () => l,
        locale: () => t,
        useBase: () => g,
        useCdn: () => r,
        useLocale: () => o
      });
      var d = n(3336);
      const t = (0, d.makeVar)(document.documentElement.lang),
        o = () => (0, d.useReactiveVar)(t),
        s = window?.env,
        l = (0, d.makeVar)({
          media: s?.cdn?.media,
          videos: s?.cdn?.videos
        }),
        r = () => (0, d.useReactiveVar)(l),
        c = document.currentScript,
        i = c?.src ? new URL(c.src).origin : "";
      let u = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${i}/`;
      u.endsWith("/") || (u = `${u}/`);
      const f = (0, d.makeVar)(u),
        g = () => (0, d.useReactiveVar)(f)
    }
  }
]);
//# sourceMappingURL=6da75971904723640d4b7ed26cddfba2.js.map