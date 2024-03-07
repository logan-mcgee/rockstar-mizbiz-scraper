! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5e8abd4d-542f-451d-8dff-61a1892bc6bb", e._sentryDebugIdIdentifier = "sentry-dbid-5e8abd4d-542f-451d-8dff-61a1892bc6bb")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "43971e0f99ea7c6c89ef0007f1e57d35945eb542",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "43971e0f99ea7c6c89ef0007f1e57d35945eb542"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [532], {
    2912: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => s
      });
      var n = t(8200),
        o = t(1320),
        d = t(3480);
      const s = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [l, f] = (0, n.useState)({
          action: s.action,
          location: s.location
        });
        return (0, n.useLayoutEffect)((() => s.listen(((e, a) => {
          f({
            location: e,
            action: a
          })
        }))), [s]), (0, d.jsx)(o.Router, {
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
//# sourceMappingURL=2efab6da18f3fb8223a3c796125ba856.js.map