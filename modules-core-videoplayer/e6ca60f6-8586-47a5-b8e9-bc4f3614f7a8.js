try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e6ca60f6-8586-47a5-b8e9-bc4f3614f7a8", e._sentryDebugIdIdentifier = "sentry-dbid-e6ca60f6-8586-47a5-b8e9-bc4f3614f7a8")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [4598], {
    2217: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var s = t(2295),
        n = t(2229),
        r = t(5413),
        l = t(2649),
        d = t(1915),
        o = t(3497),
        c = t(5966),
        i = t(2918);
      const f = {
          agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
          bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39",
          inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a"
        },
        u = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        g = (0, c.withTranslations)((({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: g = {},
          t: m
        }) => {
          const {
            data: p
          } = (0, i.useRockstarUser)(), {
            track: y
          } = (0, i.useGtmTrack)(), b = (0, c.getCookieValueByName)("UAGC"), [h, _] = (0, n.useState)("1" === (v = b) ? u.PASSED : "0" === v ? u.FAILED : u.NOT_SUBMITTED);
          var v;
          const [w, k] = (0, n.useState)(), I = (0, n.createRef)(), x = (0, n.createRef)(), D = (0, n.createRef)(), {
            style: j
          } = t;
          return (0, n.useEffect)((() => {
            y({
              event: "age_gate_popup",
              element_placement: g.element_placement ?? ""
            })
          }), []), h === u.PASSED || !1 === p?.isAMinor ? a : h === u.FAILED ? (0, s.jsxs)("div", {
            className: f.agegate,
            style: j,
            children: [t?.header, (0, s.jsx)("h2", {
              children: m("agegate_fail")
            })]
          }) : (0, s.jsxs)("div", {
            className: f.agegate,
            style: j,
            children: [t?.header, (0, s.jsx)("div", {
              className: f.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === w && (0, s.jsx)("h5", {
              className: f.error,
              children: m("Please enter a valid age")
            }), (0, s.jsxs)("form", {
              name: "agegate",
              onSubmit: async a => {
                a.preventDefault();
                const t = new Date(D?.current?.value, I?.current?.value, x?.current?.value),
                  s = (0, r.j)(new Date, {
                    years: 150
                  }),
                  n = (0, l.f)(t) && (0, d.d)(t, s);
                if (k(n), n) {
                  const a = (0, o.V)(new Date, t) >= e;
                  y(a ? {
                    event: "age_gate_passed",
                    element_placement: g.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: g.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const s = a ? "1" : "0";
                  (0, c.setCookieValue)("UAGC", s), _(s)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, s.jsx)("h5", {
                children: m("agegate_header")
              }), (0, s.jsxs)("div", {
                className: f.inputs,
                children: [(0, s.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [m("Month"), (0, s.jsx)("input", {
                    id: "monthInput",
                    ref: I,
                    placeholder: m("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, s.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [m("Day"), (0, s.jsx)("input", {
                    id: "dayInput",
                    ref: x,
                    placeholder: m("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, s.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [m("Year"), (0, s.jsx)("input", {
                    id: "yearInput",
                    ref: D,
                    className: f.year,
                    placeholder: m("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, s.jsx)("button", {
                  type: "submit",
                  className: f.submit,
                  children: m("SUBMIT")
                })]
              })]
            }), t?.footer]
          })
        }))
    }
  }
]);