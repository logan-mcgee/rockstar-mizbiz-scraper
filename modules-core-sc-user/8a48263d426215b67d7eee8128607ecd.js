! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c430856a-30f7-421b-aa9f-0f27279325b3", e._sentryDebugIdIdentifier = "sentry-dbid-c430856a-30f7-421b-aa9f-0f27279325b3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-sc-user",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || []).push([
  [416], {
    416: (e, a, n) => {
      n.r(a), n.d(a, {
        InViewTracker: () => r
      });
      var t = n(200),
        s = n(396),
        o = n(320),
        l = n(480);
      const d = {
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
            track: f
          } = (0, o.c)(), {
            ref: i,
            inView: c
          } = (0, s.useInView)({
            threshold: a,
            trackVisibility: !0,
            delay: 100
          }), [u, _] = (0, t.useState)(!1);
          return (0, t.useEffect)((() => {
            c && !u && (f({
              ...d,
              ...r
            }), _(!0))
          }), [c, i]), (0, l.jsx)("section", {
            ref: i,
            children: n
          })
        }
    }
  }
]);
//# sourceMappingURL=8a48263d426215b67d7eee8128607ecd.js.map