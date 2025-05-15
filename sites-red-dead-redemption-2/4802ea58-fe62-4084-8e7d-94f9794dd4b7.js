! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4802ea58-fe62-4084-8e7d-94f9794dd4b7", e._sentryDebugIdIdentifier = "sentry-dbid-4802ea58-fe62-4084-8e7d-94f9794dd4b7")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [8583], {
    50964: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var d = t(62229),
        n = t(6926),
        s = t(96672),
        l = t(20148),
        r = t(9085),
        o = t(95966),
        i = t(57895);
      const c = {
        agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39"
      };
      var u = t(25854);
      const f = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        g = (0, o.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: g = {},
            ga: b = {},
            t: m
          } = e;
          const {
            data: p
          } = (0, i.Wx)(), {
            track: y
          } = (0, i.h)(), _ = (0, o.getCookieValueByName)("UAGC"), [h, M] = (0, d.useState)("1" === (w = _) ? f.PASSED : "0" === w ? f.FAILED : f.NOT_SUBMITTED);
          var w;
          const [v, x] = (0, d.useState)(), I = (0, d.createRef)(), D = (0, d.createRef)(), j = (0, d.createRef)(), {
            style: k
          } = g;
          return (0, d.useEffect)((() => {
            y({
              event: "age_gate_popup",
              element_placement: b.element_placement ?? ""
            })
          }), []), h === f.PASSED || !1 === p?.isAMinor ? t : h === f.FAILED ? (0, u.jsxs)("div", {
            className: c.agegate,
            style: k,
            children: [g?.header, (0, u.jsx)("h2", {
              children: m("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: c.agegate,
            style: k,
            children: [g?.header, (0, u.jsx)("div", {
              className: c.bg,
              style: g?.bgImg ? {
                backgroundImage: `url(${g.bgImg})`
              } : {}
            }), !1 === v && (0, u.jsx)("h5", {
              className: c.error,
              children: m("Please enter a valid age")
            }), (0, u.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(j?.current?.value, I?.current?.value, D?.current?.value),
                  d = (0, n.j)(new Date, {
                    years: 150
                  }),
                  i = (0, s.f)(t) && (0, l.d)(t, d);
                if (x(i), i) {
                  const e = (0, r.V)(new Date, t) >= a;
                  y(e ? {
                    event: "age_gate_passed",
                    element_placement: b.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: b.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const d = e ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", d), M(d)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, u.jsx)("h5", {
                children: m("agegate_header")
              }), (0, u.jsxs)("div", {
                className: c.inputs,
                children: [(0, u.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [m("Month"), (0, u.jsx)("input", {
                    id: "monthInput",
                    ref: I,
                    placeholder: m("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [m("Day"), (0, u.jsx)("input", {
                    id: "dayInput",
                    ref: D,
                    placeholder: m("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [m("Year"), (0, u.jsx)("input", {
                    id: "yearInput",
                    ref: j,
                    className: c.year,
                    placeholder: m("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsx)("button", {
                  type: "submit",
                  className: c.submit,
                  children: m("SUBMIT")
                })]
              })]
            }), g?.footer]
          })
        }))
    }
  }
]);