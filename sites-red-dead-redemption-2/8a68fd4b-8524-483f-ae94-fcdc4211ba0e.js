! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8a68fd4b-8524-483f-ae94-fcdc4211ba0e", e._sentryDebugIdIdentifier = "sentry-dbid-8a68fd4b-8524-483f-ae94-fcdc4211ba0e")
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
  [964, 8583], {
    50964: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => f
      });
      var n = t(62229),
        s = t(6926),
        r = t(96672),
        d = t(20148),
        l = t(9085),
        o = t(95966),
        i = t(57895);
      const c = {
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
        f = (0, o.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: f = {},
            ga: g = {},
            t: b
          } = e;
          const {
            data: y
          } = (0, i.Wx)(), {
            track: p
          } = (0, i.h)(), h = (0, o.getCookieValueByName)("UAGC"), [k, _] = (0, n.useState)("1" === (v = h) ? m.PASSED : "0" === v ? m.FAILED : m.NOT_SUBMITTED);
          var v;
          const [M, I] = (0, n.useState)(), x = (0, n.createRef)(), w = (0, n.createRef)(), V = (0, n.createRef)(), {
            style: D
          } = f;
          return (0, n.useEffect)((() => {
            p({
              event: "age_gate_popup",
              element_placement: g.element_placement ?? ""
            })
          }), []), k === m.PASSED || !1 === y?.isAMinor ? t : k === m.FAILED ? (0, u.jsxs)("div", {
            className: c.agegate,
            style: D,
            children: [f?.header, (0, u.jsx)("h2", {
              children: b("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: c.agegate,
            style: D,
            children: [f?.header, (0, u.jsx)("div", {
              className: c.bg,
              style: f?.bgImg ? {
                backgroundImage: `url(${f.bgImg})`
              } : {}
            }), !1 === M && (0, u.jsx)("h5", {
              className: c.error,
              children: b("Please enter a valid age")
            }), (0, u.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(V?.current?.value, x?.current?.value, w?.current?.value),
                  n = (0, s.j)(new Date, {
                    years: 150
                  }),
                  i = (0, r.f)(t) && (0, d.d)(t, n);
                if (I(i), i) {
                  const e = (0, l.V)(new Date, t) >= a;
                  p(e ? {
                    event: "age_gate_passed",
                    element_placement: g.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: g.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const n = e ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", n), _(n)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, u.jsx)("h5", {
                children: b("agegate_header")
              }), (0, u.jsxs)("div", {
                className: c.inputs,
                children: [(0, u.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [b("Month"), (0, u.jsx)("input", {
                    id: "monthInput",
                    ref: x,
                    placeholder: b("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [b("Day"), (0, u.jsx)("input", {
                    id: "dayInput",
                    ref: w,
                    placeholder: b("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [b("Year"), (0, u.jsx)("input", {
                    id: "yearInput",
                    ref: V,
                    className: c.year,
                    placeholder: b("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsx)("button", {
                  type: "submit",
                  className: c.submit,
                  children: b("SUBMIT")
                })]
              })]
            }), f?.footer]
          })
        }))
    },
    57895: (e, a, t) => {
      t.d(a, {
        h: () => l,
        Wx: () => c
      });
      var n = t(62229),
        s = t(95966);
      t(98397), t(25854);
      const r = (0, s.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = {
          track: () => null
        },
        l = () => (0, n.useContext)(r) ?? d;
      (0, s.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, s.makeVar)(null)
      }), (0, s.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, s.makeVar)(!1)
      }), (0, s.setMakeVarItem)({
        key: "hasNotificationsReactive",
        value: (0, s.makeVar)(!1)
      }), (0, s.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, s.makeVar)((0, s.webSettingsReactive)()?.currentCharId)
      }), (0, s.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, s.makeVar)(null)
      }), (0, s.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, s.makeVar)(null)
      }), (0, s.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, s.makeVar)(!1)
      }), (0, s.setMakeVarItem)({
        key: "crewsNeededReactive",
        value: (0, s.makeVar)(!1)
      }), (0, s.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, s.makeVar)(null)
      }), t(93830), t(4895);
      const o = {},
        i = (0, s.setContextItem)({
          context: (0, n.createContext)(o),
          key: "userContext"
        }),
        c = () => (0, n.useContext)(i)
    }
  }
]);