! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "12a029be-1215-4aa6-a5aa-a1ec10998af1", e._sentryDebugIdIdentifier = "sentry-dbid-12a029be-1215-4aa6-a5aa-a1ec10998af1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [8646], {
    6265: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => m
      });
      var s = t(62229),
        n = t(7313),
        r = t(65685),
        l = t(94061),
        d = t(56135),
        o = t(95966),
        c = t(2918);
      const i = {
        agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39"
      };
      var u = t(91029);
      const g = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        m = (0, o.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: m = {},
            ga: f = {},
            t: p
          } = e;
          const {
            data: b
          } = (0, c.useRockstarUser)(), {
            track: y
          } = (0, c.useGtmTrack)(), h = (0, o.getCookieValueByName)("UAGC"), [_, v] = (0, s.useState)("1" === (w = h) ? g.PASSED : "0" === w ? g.FAILED : g.NOT_SUBMITTED);
          var w;
          const [I, k] = (0, s.useState)(), x = (0, s.createRef)(), D = (0, s.createRef)(), j = (0, s.createRef)(), {
            style: E
          } = m;
          return (0, s.useEffect)((() => {
            y({
              event: "age_gate_popup",
              element_placement: f.element_placement ?? ""
            })
          }), []), _ === g.PASSED || !1 === b?.isAMinor ? t : _ === g.FAILED ? (0, u.jsxs)("div", {
            className: i.agegate,
            style: E,
            children: [m?.header, (0, u.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: i.agegate,
            style: E,
            children: [m?.header, (0, u.jsx)("div", {
              className: i.bg,
              style: m?.bgImg ? {
                backgroundImage: `url(${m.bgImg})`
              } : {}
            }), !1 === I && (0, u.jsx)("h5", {
              className: i.error,
              children: p("Please enter a valid age")
            }), (0, u.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(j?.current?.value, x?.current?.value, D?.current?.value),
                  s = (0, n.j)(new Date, {
                    years: 150
                  }),
                  c = (0, r.f)(t) && (0, l.d)(t, s);
                if (k(c), c) {
                  const e = (0, d.V)(new Date, t) >= a;
                  y(e ? {
                    event: "age_gate_passed",
                    element_placement: f.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: f.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const s = e ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", s), v(s)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, u.jsx)("h5", {
                children: p("agegate_header")
              }), (0, u.jsxs)("div", {
                className: i.inputs,
                children: [(0, u.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [p("Month"), (0, u.jsx)("input", {
                    id: "monthInput",
                    ref: x,
                    placeholder: p("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [p("Day"), (0, u.jsx)("input", {
                    id: "dayInput",
                    ref: D,
                    placeholder: p("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [p("Year"), (0, u.jsx)("input", {
                    id: "yearInput",
                    ref: j,
                    className: i.year,
                    placeholder: p("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsx)("button", {
                  type: "submit",
                  className: i.submit,
                  children: p("SUBMIT")
                })]
              })]
            }), m?.footer]
          })
        }))
    }
  }
]);