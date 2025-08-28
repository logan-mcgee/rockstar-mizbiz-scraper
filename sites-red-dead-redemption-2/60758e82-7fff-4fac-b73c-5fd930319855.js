try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "60758e82-7fff-4fac-b73c-5fd930319855", e._sentryDebugIdIdentifier = "sentry-dbid-60758e82-7fff-4fac-b73c-5fd930319855")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "61ad12580c14ee5147480faf673e214137f57fe1",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "61ad12580c14ee5147480faf673e214137f57fe1"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [1325, 7354], {
    27354: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => f
      });
      var s = t(62229),
        n = t(27554),
        r = t(33085),
        d = t(16534),
        l = t(85914),
        i = t(95966),
        o = t(66871);
      const c = {
        agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39"
      };
      var u = t(70954);
      const m = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        f = (0, i.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: f = {},
            ga: g = {},
            t: p
          } = e;
          const {
            data: y
          } = (0, o.Wx)(), {
            track: h
          } = (0, o.h)(), k = (0, i.getCookieValueByName)("UAGC"), [b, v] = (0, s.useState)("1" === (_ = k) ? m.PASSED : "0" === _ ? m.FAILED : m.NOT_SUBMITTED);
          var _;
          const [I, x] = (0, s.useState)(), M = (0, s.createRef)(), w = (0, s.createRef)(), V = (0, s.createRef)(), {
            style: D
          } = f;
          return (0, s.useEffect)((() => {
            h({
              event: "age_gate_popup",
              element_placement: g.element_placement ?? ""
            })
          }), []), b === m.PASSED || !1 === y?.isAMinor ? t : b === m.FAILED ? (0, u.jsxs)("div", {
            className: c.agegate,
            style: D,
            children: [f?.header, (0, u.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: c.agegate,
            style: D,
            children: [f?.header, (0, u.jsx)("div", {
              className: c.bg,
              style: f?.bgImg ? {
                backgroundImage: `url(${f.bgImg})`
              } : {}
            }), !1 === I && (0, u.jsx)("h5", {
              className: c.error,
              children: p("Please enter a valid age")
            }), (0, u.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(V?.current?.value, M?.current?.value, w?.current?.value),
                  s = (0, n.j)(new Date, {
                    years: 150
                  }),
                  o = (0, r.f)(t) && (0, d.d)(t, s);
                if (x(o), o) {
                  const e = (0, l.V)(new Date, t) >= a;
                  h(e ? {
                    event: "age_gate_passed",
                    element_placement: g.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: g.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const s = e ? "1" : "0";
                  (0, i.setCookieValue)("UAGC", s), v(s)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, u.jsx)("h5", {
                children: p("agegate_header")
              }), (0, u.jsxs)("div", {
                className: c.inputs,
                children: [(0, u.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [p("Month"), (0, u.jsx)("input", {
                    id: "monthInput",
                    ref: M,
                    placeholder: p("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [p("Day"), (0, u.jsx)("input", {
                    id: "dayInput",
                    ref: w,
                    placeholder: p("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [p("Year"), (0, u.jsx)("input", {
                    id: "yearInput",
                    ref: V,
                    className: c.year,
                    placeholder: p("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsx)("button", {
                  type: "submit",
                  className: c.submit,
                  children: p("SUBMIT")
                })]
              })]
            }), f?.footer]
          })
        }))
    },
    66871: (e, a, t) => {
      t.d(a, {
        h: () => l,
        Wx: () => c
      });
      var s = t(62229),
        n = t(95966);
      t(48539), t(70954);
      const r = (0, n.setContextItem)({
          context: (0, s.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = {
          track: () => null
        },
        l = () => (0, s.useContext)(r) ?? d;
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
      }), t(17330), t(39445);
      const i = {},
        o = (0, n.setContextItem)({
          context: (0, s.createContext)(i),
          key: "userContext"
        }),
        c = () => (0, s.useContext)(o)
    }
  }
]);