! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "053fff8a-c52c-4fae-a596-d05528d17e34", e._sentryDebugIdIdentifier = "sentry-dbid-053fff8a-c52c-4fae-a596-d05528d17e34")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [920], {
    1920: (e, a, d) => {
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
//# sourceMappingURL=507a1ef73e3ef964d97751069f14b843.js.map