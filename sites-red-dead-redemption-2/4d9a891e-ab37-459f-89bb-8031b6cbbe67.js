! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4d9a891e-ab37-459f-89bb-8031b6cbbe67", e._sentryDebugIdIdentifier = "sentry-dbid-4d9a891e-ab37-459f-89bb-8031b6cbbe67")
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
      var n = t(62229),
        s = t(7313),
        d = t(65685),
        r = t(94061),
        l = t(51516),
        o = t(95966),
        i = t(97652);
      const c = {
        agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39"
      };
      var g = t(91029);
      const b = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        u = (0, o.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: u = {},
            ga: f = {},
            t: m
          } = e;
          const {
            data: p
          } = (0, i.Wx)(), {
            track: _
          } = (0, i.h)(), h = (0, o.getCookieValueByName)("UAGC"), [y, w] = (0, n.useState)("1" === (v = h) ? b.PASSED : "0" === v ? b.FAILED : b.NOT_SUBMITTED);
          var v;
          const [x, I] = (0, n.useState)(), D = (0, n.createRef)(), j = (0, n.createRef)(), k = (0, n.createRef)(), {
            style: E
          } = u;
          return (0, n.useEffect)((() => {
            _({
              event: "age_gate_popup",
              element_placement: f.element_placement ?? ""
            })
          }), []), y === b.PASSED || !1 === p?.isAMinor ? t : y === b.FAILED ? (0, g.jsxs)("div", {
            className: c.agegate,
            style: E,
            children: [u?.header, (0, g.jsx)("h2", {
              children: m("agegate_fail")
            })]
          }) : (0, g.jsxs)("div", {
            className: c.agegate,
            style: E,
            children: [u?.header, (0, g.jsx)("div", {
              className: c.bg,
              style: u?.bgImg ? {
                backgroundImage: `url(${u.bgImg})`
              } : {}
            }), !1 === x && (0, g.jsx)("h5", {
              className: c.error,
              children: m("Please enter a valid age")
            }), (0, g.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(k?.current?.value, D?.current?.value, j?.current?.value),
                  n = (0, s.j)(new Date, {
                    years: 150
                  }),
                  i = (0, d.f)(t) && (0, r.d)(t, n);
                if (I(i), i) {
                  const e = (0, l.V)(new Date, t) >= a;
                  _(e ? {
                    event: "age_gate_passed",
                    element_placement: f.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: f.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const n = e ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", n), w(n)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, g.jsx)("h5", {
                children: m("agegate_header")
              }), (0, g.jsxs)("div", {
                className: c.inputs,
                children: [(0, g.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [m("Month"), (0, g.jsx)("input", {
                    id: "monthInput",
                    ref: D,
                    placeholder: m("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, g.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [m("Day"), (0, g.jsx)("input", {
                    id: "dayInput",
                    ref: j,
                    placeholder: m("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, g.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [m("Year"), (0, g.jsx)("input", {
                    id: "yearInput",
                    ref: k,
                    className: c.year,
                    placeholder: m("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, g.jsx)("button", {
                  type: "submit",
                  className: c.submit,
                  children: m("SUBMIT")
                })]
              })]
            }), u?.footer]
          })
        }))
    }
  }
]);