! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9ec5863f-d893-4eb7-9597-ce2e824a4e38", e._sentryDebugIdIdentifier = "sentry-dbid-9ec5863f-d893-4eb7-9597-ce2e824a4e38")
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
  [947], {
    9328: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => f
      });
      var n = t(2229),
        s = t(5966),
        r = t(2918),
        l = t(3129),
        d = t(9373),
        o = t(8290),
        c = t(5163);
      const i = {
        agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39"
      };
      var u = t(8096);
      const g = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        f = (0, s.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: f = {},
            ga: m = {},
            t: p
          } = e;
          const {
            track: b
          } = (0, r.useGtmTrack)(), y = (0, s.getCookieValueByName)("UAGC"), [h, _] = (0, n.useState)("1" === (v = y) ? g.PASSED : "0" === v ? g.FAILED : g.NOT_SUBMITTED);
          var v;
          const [w, I] = (0, n.useState)(), x = (0, n.createRef)(), D = (0, n.createRef)(), k = (0, n.createRef)(), {
            style: j
          } = f;
          return (0, n.useEffect)((() => {
            b({
              event: "age_gate_popup",
              element_placement: m.element_placement ?? ""
            })
          }), []), h === g.PASSED ? t : h === g.FAILED ? (0, u.jsxs)("div", {
            className: i.agegate,
            style: j,
            children: [f?.header, (0, u.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: i.agegate,
            style: j,
            children: [f?.header, (0, u.jsx)("div", {
              className: i.bg,
              style: f?.bgImg ? {
                backgroundImage: `url(${f.bgImg})`
              } : {}
            }), !1 === w && (0, u.jsx)("h5", {
              className: i.error,
              children: p("Please enter a valid age")
            }), (0, u.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(k?.current?.value, x?.current?.value, D?.current?.value),
                  n = (0, l.j)(new Date, {
                    years: 150
                  }),
                  r = (0, d.f)(t) && (0, o.d)(t, n);
                if (I(r), r) {
                  const e = (0, c.V)(new Date, t) >= a;
                  b(e ? {
                    event: "age_gate_passed",
                    element_placement: m.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: m.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const n = e ? "1" : "0";
                  (0, s.setCookieValue)("UAGC", n), _(n)
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
                    ref: k,
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
            }), f?.footer]
          })
        }))
    }
  }
]);