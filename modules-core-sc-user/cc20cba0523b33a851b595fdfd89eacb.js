! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "94d9baf6-47a2-4952-b96a-05ec9e2bf844", e._sentryDebugIdIdentifier = "sentry-dbid-94d9baf6-47a2-4952-b96a-05ec9e2bf844")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-sc-user",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [416], {
    416: (e, a, n) => {
      n.r(a), n.d(a, {
        InViewTracker: () => r
      });
      var t = n(200),
        s = n(396),
        d = n(320),
        o = n(480);
      const l = {
          event: "page_section_impression",
          event_action: "impression",
          event_category: "page_section",
          event_label: null,
          event_placement: null
        },
        r = e => {
          let {
            threshold: a = .6,
            children: n,
            gtm: r = {}
          } = e;
          const {
            track: i
          } = (0, d.c)(), {
            ref: f,
            inView: c
          } = (0, s.useInView)({
            threshold: a,
            trackVisibility: !0,
            delay: 100
          }), [u, b] = (0, t.useState)(!1);
          return (0, t.useEffect)((() => {
            c && !u && (i({
              ...l,
              ...r
            }), b(!0))
          }), [c, f]), (0, o.jsx)("section", {
            ref: f,
            children: n
          })
        }
    }
  }
]);
//# sourceMappingURL=cc20cba0523b33a851b595fdfd89eacb.js.map