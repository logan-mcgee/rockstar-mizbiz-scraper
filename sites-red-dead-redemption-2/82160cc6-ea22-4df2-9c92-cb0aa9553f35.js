try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "82160cc6-ea22-4df2-9c92-cb0aa9553f35", e._sentryDebugIdIdentifier = "sentry-dbid-82160cc6-ea22-4df2-9c92-cb0aa9553f35")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [964, 8583], {
    50964: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var s = t(62229),
        n = t(6926),
        r = t(96672),
        d = t(20148),
        l = t(9085),
        c = t(95966),
        i = t(57895);
      const o = {
        agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39"
      };
      var u = t(25854);
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
            ga: f = {},
            t: p
          } = e;
          const {
            data: y
          } = (0, i.Wx)(), {
            track: h
          } = (0, i.h)(), b = (0, c.getCookieValueByName)("UAGC"), [k, v] = (0, s.useState)("1" === (_ = b) ? m.PASSED : "0" === _ ? m.FAILED : m.NOT_SUBMITTED);
          var _;
          const [I, x] = (0, s.useState)(), M = (0, s.createRef)(), w = (0, s.createRef)(), V = (0, s.createRef)(), {
            style: D
          } = g;
          return (0, s.useEffect)((() => {
            h({
              event: "age_gate_popup",
              element_placement: f.element_placement ?? ""
            })
          }), []), k === m.PASSED || !1 === y?.isAMinor ? t : k === m.FAILED ? (0, u.jsxs)("div", {
            className: o.agegate,
            style: D,
            children: [g?.header, (0, u.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: o.agegate,
            style: D,
            children: [g?.header, (0, u.jsx)("div", {
              className: o.bg,
              style: g?.bgImg ? {
                backgroundImage: `url(${g.bgImg})`
              } : {}
            }), !1 === I && (0, u.jsx)("h5", {
              className: o.error,
              children: p("Please enter a valid age")
            }), (0, u.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(V?.current?.value, M?.current?.value, w?.current?.value),
                  s = (0, n.j)(new Date, {
                    years: 150
                  }),
                  i = (0, r.f)(t) && (0, d.d)(t, s);
                if (x(i), i) {
                  const e = (0, l.V)(new Date, t) >= a;
                  h(e ? {
                    event: "age_gate_passed",
                    element_placement: f.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: f.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const s = e ? "1" : "0";
                  (0, c.setCookieValue)("UAGC", s), v(s)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, u.jsx)("h5", {
                children: p("agegate_header")
              }), (0, u.jsxs)("div", {
                className: o.inputs,
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
                    className: o.year,
                    placeholder: p("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsx)("button", {
                  type: "submit",
                  className: o.submit,
                  children: p("SUBMIT")
                })]
              })]
            }), g?.footer]
          })
        }))
    },
    57895: (e, a, t) => {
      t.d(a, {
        h: () => l,
        Wx: () => o
      });
      var s = t(62229),
        n = t(95966);
      t(98397), t(25854);
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
      }), t(93830), t(4895);
      const c = {},
        i = (0, n.setContextItem)({
          context: (0, s.createContext)(c),
          key: "userContext"
        }),
        o = () => (0, s.useContext)(i)
    }
  }
]);