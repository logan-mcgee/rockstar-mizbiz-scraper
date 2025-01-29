! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4f4ca58e-57d7-448a-958e-374e85f55cbd", e._sentryDebugIdIdentifier = "sentry-dbid-4f4ca58e-57d7-448a-958e-374e85f55cbd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [947], {
    49328: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => u
      });
      var n = t(62229),
        d = t(95966),
        s = t(93075),
        r = t(33129),
        l = t(19373),
        o = t(8290),
        i = t(55163);
      const c = {
        agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39"
      };
      var f = t(98096);
      const g = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        u = (0, d.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: u = {},
            ga: m = {},
            t: p
          } = e;
          const {
            track: b
          } = (0, s.h)(), _ = (0, d.getCookieValueByName)("UAGC"), [h, y] = (0, n.useState)("1" === (w = _) ? g.PASSED : "0" === w ? g.FAILED : g.NOT_SUBMITTED);
          var w;
          const [v, I] = (0, n.useState)(), x = (0, n.createRef)(), D = (0, n.createRef)(), j = (0, n.createRef)(), {
            style: k
          } = u;
          return (0, n.useEffect)((() => {
            b({
              event: "age_gate_popup",
              element_placement: m.element_placement ?? ""
            })
          }), []), h === g.PASSED ? t : h === g.FAILED ? (0, f.jsxs)("div", {
            className: c.agegate,
            style: k,
            children: [u?.header, (0, f.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, f.jsxs)("div", {
            className: c.agegate,
            style: k,
            children: [u?.header, (0, f.jsx)("div", {
              className: c.bg,
              style: u?.bgImg ? {
                backgroundImage: `url(${u.bgImg})`
              } : {}
            }), !1 === v && (0, f.jsx)("h5", {
              className: c.error,
              children: p("Please enter a valid age")
            }), (0, f.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(j?.current?.value, x?.current?.value, D?.current?.value),
                  n = (0, r.j)(new Date, {
                    years: 150
                  }),
                  s = (0, l.f)(t) && (0, o.d)(t, n);
                if (I(s), s) {
                  const e = (0, i.V)(new Date, t) >= a;
                  b(e ? {
                    event: "age_gate_passed",
                    element_placement: m.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: m.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const n = e ? "1" : "0";
                  (0, d.setCookieValue)("UAGC", n), y(n)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, f.jsx)("h5", {
                children: p("agegate_header")
              }), (0, f.jsxs)("div", {
                className: c.inputs,
                children: [(0, f.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [p("Month"), (0, f.jsx)("input", {
                    id: "monthInput",
                    ref: x,
                    placeholder: p("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [p("Day"), (0, f.jsx)("input", {
                    id: "dayInput",
                    ref: D,
                    placeholder: p("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [p("Year"), (0, f.jsx)("input", {
                    id: "yearInput",
                    ref: j,
                    className: c.year,
                    placeholder: p("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsx)("button", {
                  type: "submit",
                  className: c.submit,
                  children: p("SUBMIT")
                })]
              })]
            }), u?.footer]
          })
        }))
    }
  }
]);