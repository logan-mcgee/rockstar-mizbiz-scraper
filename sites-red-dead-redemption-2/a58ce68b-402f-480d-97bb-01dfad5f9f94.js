! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a58ce68b-402f-480d-97bb-01dfad5f9f94", e._sentryDebugIdIdentifier = "sentry-dbid-a58ce68b-402f-480d-97bb-01dfad5f9f94")
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
  [8646], {
    6265: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => u
      });
      var d = t(62229),
        n = t(7313),
        s = t(65685),
        r = t(94061),
        l = t(51516),
        o = t(95966),
        i = t(41041);
      const c = {
        agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39"
      };
      var f = t(91029);
      const g = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        u = (0, o.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: u = {},
            ga: m = {},
            t: b
          } = e;
          const {
            data: p
          } = (0, i.Wx)(), {
            track: _
          } = (0, i.h)(), h = (0, o.getCookieValueByName)("UAGC"), [y, w] = (0, d.useState)("1" === (v = h) ? g.PASSED : "0" === v ? g.FAILED : g.NOT_SUBMITTED);
          var v;
          const [x, I] = (0, d.useState)(), D = (0, d.createRef)(), j = (0, d.createRef)(), k = (0, d.createRef)(), {
            style: E
          } = u;
          return (0, d.useEffect)((() => {
            _({
              event: "age_gate_popup",
              element_placement: m.element_placement ?? ""
            })
          }), []), y === g.PASSED || !1 === p?.isAMinor ? t : y === g.FAILED ? (0, f.jsxs)("div", {
            className: c.agegate,
            style: E,
            children: [u?.header, (0, f.jsx)("h2", {
              children: b("agegate_fail")
            })]
          }) : (0, f.jsxs)("div", {
            className: c.agegate,
            style: E,
            children: [u?.header, (0, f.jsx)("div", {
              className: c.bg,
              style: u?.bgImg ? {
                backgroundImage: `url(${u.bgImg})`
              } : {}
            }), !1 === x && (0, f.jsx)("h5", {
              className: c.error,
              children: b("Please enter a valid age")
            }), (0, f.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(k?.current?.value, D?.current?.value, j?.current?.value),
                  d = (0, n.j)(new Date, {
                    years: 150
                  }),
                  i = (0, s.f)(t) && (0, r.d)(t, d);
                if (I(i), i) {
                  const e = (0, l.V)(new Date, t) >= a;
                  _(e ? {
                    event: "age_gate_passed",
                    element_placement: m.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: m.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const d = e ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", d), w(d)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, f.jsx)("h5", {
                children: b("agegate_header")
              }), (0, f.jsxs)("div", {
                className: c.inputs,
                children: [(0, f.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [b("Month"), (0, f.jsx)("input", {
                    id: "monthInput",
                    ref: D,
                    placeholder: b("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [b("Day"), (0, f.jsx)("input", {
                    id: "dayInput",
                    ref: j,
                    placeholder: b("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [b("Year"), (0, f.jsx)("input", {
                    id: "yearInput",
                    ref: k,
                    className: c.year,
                    placeholder: b("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsx)("button", {
                  type: "submit",
                  className: c.submit,
                  children: b("SUBMIT")
                })]
              })]
            }), u?.footer]
          })
        }))
    }
  }
]);