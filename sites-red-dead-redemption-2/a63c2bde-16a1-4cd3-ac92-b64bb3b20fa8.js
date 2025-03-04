! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a63c2bde-16a1-4cd3-ac92-b64bb3b20fa8", e._sentryDebugIdIdentifier = "sentry-dbid-a63c2bde-16a1-4cd3-ac92-b64bb3b20fa8")
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
  [6265, 8646], {
    6265: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var r = t(62229),
        n = t(7313),
        s = t(65685),
        d = t(94061),
        l = t(51516),
        c = t(95966),
        o = t(41041);
      const i = {
        agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39"
      };
      var u = t(91029);
      const m = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        g = (0, c.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: g = {},
            ga: b = {},
            t: f
          } = e;
          const {
            data: p
          } = (0, o.Wx)(), {
            track: y
          } = (0, o.h)(), k = (0, c.getCookieValueByName)("UAGC"), [h, v] = (0, r.useState)("1" === (_ = k) ? m.PASSED : "0" === _ ? m.FAILED : m.NOT_SUBMITTED);
          var _;
          const [I, x] = (0, r.useState)(), w = (0, r.createRef)(), M = (0, r.createRef)(), V = (0, r.createRef)(), {
            style: D
          } = g;
          return (0, r.useEffect)((() => {
            y({
              event: "age_gate_popup",
              element_placement: b.element_placement ?? ""
            })
          }), []), h === m.PASSED || !1 === p?.isAMinor ? t : h === m.FAILED ? (0, u.jsxs)("div", {
            className: i.agegate,
            style: D,
            children: [g?.header, (0, u.jsx)("h2", {
              children: f("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: i.agegate,
            style: D,
            children: [g?.header, (0, u.jsx)("div", {
              className: i.bg,
              style: g?.bgImg ? {
                backgroundImage: `url(${g.bgImg})`
              } : {}
            }), !1 === I && (0, u.jsx)("h5", {
              className: i.error,
              children: f("Please enter a valid age")
            }), (0, u.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(V?.current?.value, w?.current?.value, M?.current?.value),
                  r = (0, n.j)(new Date, {
                    years: 150
                  }),
                  o = (0, s.f)(t) && (0, d.d)(t, r);
                if (x(o), o) {
                  const e = (0, l.V)(new Date, t) >= a;
                  y(e ? {
                    event: "age_gate_passed",
                    element_placement: b.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: b.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const r = e ? "1" : "0";
                  (0, c.setCookieValue)("UAGC", r), v(r)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, u.jsx)("h5", {
                children: f("agegate_header")
              }), (0, u.jsxs)("div", {
                className: i.inputs,
                children: [(0, u.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [f("Month"), (0, u.jsx)("input", {
                    id: "monthInput",
                    ref: w,
                    placeholder: f("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [f("Day"), (0, u.jsx)("input", {
                    id: "dayInput",
                    ref: M,
                    placeholder: f("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [f("Year"), (0, u.jsx)("input", {
                    id: "yearInput",
                    ref: V,
                    className: i.year,
                    placeholder: f("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsx)("button", {
                  type: "submit",
                  className: i.submit,
                  children: f("SUBMIT")
                })]
              })]
            }), g?.footer]
          })
        }))
    },
    41041: (e, a, t) => {
      t.d(a, {
        h: () => l,
        Wx: () => i
      });
      var r = t(62229),
        n = t(95966);
      t(2894), t(91029);
      const s = (0, n.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = {
          track: () => null
        },
        l = () => (0, r.useContext)(s) ?? d;
      (0, n.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, n.makeVar)(null)
      }), (0, n.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, n.makeVar)(!1)
      }), (0, n.setMakeVarItem)({
        key: "hasNotificationsReactive",
        value: (0, n.makeVar)(!1)
      }), (0, n.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, n.makeVar)((0, n.webSettingsReactive)()?.currentCharId)
      }), (0, n.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, n.makeVar)(null)
      }), (0, n.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, n.makeVar)(null)
      }), (0, n.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, n.makeVar)(!1)
      }), (0, n.setMakeVarItem)({
        key: "crewsNeededReactive",
        value: (0, n.makeVar)(!1)
      }), (0, n.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, n.makeVar)(null)
      }), t(43425), t(29830);
      const c = {},
        o = (0, n.setContextItem)({
          context: (0, r.createContext)(c),
          key: "userContext"
        }),
        i = () => (0, r.useContext)(o)
    }
  }
]);