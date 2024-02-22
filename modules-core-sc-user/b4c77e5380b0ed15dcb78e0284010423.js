! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6ad83820-79c4-4b2f-b82d-b38889b7a039", e._sentryDebugIdIdentifier = "sentry-dbid-6ad83820-79c4-4b2f-b82d-b38889b7a039")
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
  [352, 416], {
    416: (e, n, a) => {
      a.r(n), a.d(n, {
        InViewTracker: () => l
      });
      var s = a(200),
        r = a(396),
        t = a(320),
        d = a(480);
      const o = {
          event: "page_section_impression",
          event_action: "impression",
          event_category: "page_section",
          event_label: null,
          event_placement: null
        },
        l = e => {
          let {
            threshold: n = .6,
            children: a,
            gtm: l = {}
          } = e;
          const {
            track: i
          } = (0, t.c)(), {
            ref: c,
            inView: f
          } = (0, r.useInView)({
            threshold: n,
            trackVisibility: !0,
            delay: 100
          }), [u, g] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            f && !u && (i({
              ...o,
              ...l
            }), g(!0))
          }), [f, c]), (0, d.jsx)("section", {
            ref: c,
            children: a
          })
        }
    },
    352: (e, n, a) => {
      a.r(n), a.d(n, {
        withInViewTracker: () => d
      });
      var s = a(416),
        r = a(480);
      const t = e => {
          let {
            impressionTracking: n,
            gtm: a = {},
            children: t
          } = e;
          return n?.shouldTrack ? (0, r.jsx)(s.InViewTracker, {
            threshold: n?.threshold,
            gtm: a,
            children: t
          }) : t
        },
        d = (e, n) => a => ((e, n, a) => (0, r.jsx)(t, {
          impressionTracking: a?.impressionTracking,
          gtm: a?.gtm,
          children: (0, r.jsx)(e, {
            ...n
          })
        }))(e, a, n)
    }
  }
]);
//# sourceMappingURL=b4c77e5380b0ed15dcb78e0284010423.js.map