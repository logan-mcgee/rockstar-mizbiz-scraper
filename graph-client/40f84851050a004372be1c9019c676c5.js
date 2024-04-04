! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "053fff8a-c52c-4fae-a596-d05528d17e34", e._sentryDebugIdIdentifier = "sentry-dbid-053fff8a-c52c-4fae-a596-d05528d17e34")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [920], {
    1920: (e, a, n) => {
      n.r(a), n.d(a, {
        base: () => u,
        cdn: () => l,
        locale: () => t,
        useBase: () => b,
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
        f = document.currentScript,
        c = f?.src ? new URL(f.src).origin : "";
      let i = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${c}/`;
      i.endsWith("/") || (i = `${i}/`);
      const u = (0, d.makeVar)(i),
        b = () => (0, d.useReactiveVar)(u)
    }
  }
]);
//# sourceMappingURL=40f84851050a004372be1c9019c676c5.js.map