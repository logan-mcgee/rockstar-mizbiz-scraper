! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "220a0b29-8dd4-47ef-a7fd-0fe14cf23be5", e._sentryDebugIdIdentifier = "sentry-dbid-220a0b29-8dd4-47ef-a7fd-0fe14cf23be5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [276], {
    85276: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => s
      });
      var d = t(51664),
        n = t(98584),
        o = t(95240);
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
//# sourceMappingURL=11866425c5874384bfb9b9ce7a3f7566.js.map