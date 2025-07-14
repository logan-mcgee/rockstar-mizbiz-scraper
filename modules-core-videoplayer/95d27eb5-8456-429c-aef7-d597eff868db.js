try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "95d27eb5-8456-429c-aef7-d597eff868db", e._sentryDebugIdIdentifier = "sentry-dbid-95d27eb5-8456-429c-aef7-d597eff868db")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [8583], {
    50964: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var s = t(62229),
        n = t(6926),
        d = t(96672),
        r = t(20148),
        l = t(42451),
        o = t(95966),
        c = t(2918);
      const i = {
        agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39"
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
            ga: m = {},
            t: p
          } = e;
          const {
            data: b
          } = (0, c.useRockstarUser)(), {
            track: y
          } = (0, c.useGtmTrack)(), h = (0, o.getCookieValueByName)("UAGC"), [_, v] = (0, s.useState)("1" === (w = h) ? f.PASSED : "0" === w ? f.FAILED : f.NOT_SUBMITTED);
          var w;
          const [k, I] = (0, s.useState)(), x = (0, s.createRef)(), D = (0, s.createRef)(), j = (0, s.createRef)(), {
            style: E
          } = g;
          return (0, s.useEffect)((() => {
            y({
              event: "age_gate_popup",
              element_placement: m.element_placement ?? ""
            })
          }), []), _ === f.PASSED || !1 === b?.isAMinor ? t : _ === f.FAILED ? (0, u.jsxs)("div", {
            className: i.agegate,
            style: E,
            children: [g?.header, (0, u.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: i.agegate,
            style: E,
            children: [g?.header, (0, u.jsx)("div", {
              className: i.bg,
              style: g?.bgImg ? {
                backgroundImage: `url(${g.bgImg})`
              } : {}
            }), !1 === k && (0, u.jsx)("h5", {
              className: i.error,
              children: p("Please enter a valid age")
            }), (0, u.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(j?.current?.value, x?.current?.value, D?.current?.value),
                  s = (0, n.j)(new Date, {
                    years: 150
                  }),
                  c = (0, d.f)(t) && (0, r.d)(t, s);
                if (I(c), c) {
                  const e = (0, l.V)(new Date, t) >= a;
                  y(e ? {
                    event: "age_gate_passed",
                    element_placement: m.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: m.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const s = e ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", s), v(s)
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
                    ref: j,
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
            }), g?.footer]
          })
        }))
    }
  }
]);