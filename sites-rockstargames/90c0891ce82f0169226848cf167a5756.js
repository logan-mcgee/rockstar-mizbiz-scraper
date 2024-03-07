! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8cd3a319-0755-46d1-be24-e6f6748602d7", e._sentryDebugIdIdentifier = "sentry-dbid-8cd3a319-0755-46d1-be24-e6f6748602d7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [532], {
    2912: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => s
      });
      var d = t(8200),
        n = t(1320),
        o = t(3480);
      const s = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [l, f] = (0, d.useState)({
          action: s.action,
          location: s.location
        });
        return (0, d.useLayoutEffect)((() => s.listen(((e, a) => {
          f({
            location: e,
            action: a
          })
        }))), [s]), (0, o.jsx)(n.Router, {
          basename: a,
          location: l.location,
          navigationType: l.action,
          navigator: s,
          children: t
        })
      }
    }
  }
]);
//# sourceMappingURL=90c0891ce82f0169226848cf167a5756.js.map