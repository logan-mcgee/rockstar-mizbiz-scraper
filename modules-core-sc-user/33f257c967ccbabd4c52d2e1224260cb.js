! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ba1aae3b-cba3-4333-819a-c1ae891d7f60", e._sentryDebugIdIdentifier = "sentry-dbid-ba1aae3b-cba3-4333-819a-c1ae891d7f60")
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
  [352, 416], {
    416: (e, a, n) => {
      n.r(a), n.d(a, {
        InViewTracker: () => l
      });
      var s = n(200),
        r = n(396),
        t = n(320),
        d = n(480);
      const o = {
          event: "page_section_impression",
          event_action: "impression",
          event_category: "page_section",
          event_label: null,
          event_placement: null
        },
        l = e => {
          let {
            threshold: a = .6,
            children: n,
            gtm: l = {}
          } = e;
          const {
            track: i
          } = (0, t.c)(), {
            ref: c,
            inView: f
          } = (0, r.useInView)({
            threshold: a,
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
            children: n
          })
        }
    },
    352: (e, a, n) => {
      n.r(a), n.d(a, {
        withInViewTracker: () => d
      });
      var s = n(416),
        r = n(480);
      const t = e => {
          let {
            impressionTracking: a,
            gtm: n = {},
            children: t
          } = e;
          return a?.shouldTrack ? (0, r.jsx)(s.InViewTracker, {
            threshold: a?.threshold,
            gtm: n,
            children: t
          }) : t
        },
        d = (e, a) => n => ((e, a, n) => (0, r.jsx)(t, {
          impressionTracking: n?.impressionTracking,
          gtm: n?.gtm,
          children: (0, r.jsx)(e, {
            ...a
          })
        }))(e, n, a)
    }
  }
]);
//# sourceMappingURL=33f257c967ccbabd4c52d2e1224260cb.js.map