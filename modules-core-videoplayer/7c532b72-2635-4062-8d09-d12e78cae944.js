try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7c532b72-2635-4062-8d09-d12e78cae944", e._sentryDebugIdIdentifier = "sentry-dbid-7c532b72-2635-4062-8d09-d12e78cae944")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [1325], {
    27354: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => f
      });
      var s = t(62229),
        n = t(27554),
        d = t(33085),
        r = t(16534),
        l = t(47200),
        o = t(95966),
        c = t(2918);
      const i = {
        agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39"
      };
      var u = t(70954);
      const g = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        f = (0, o.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: f = {},
            ga: m = {},
            t: p
          } = e;
          const {
            data: y
          } = (0, c.useRockstarUser)(), {
            track: h
          } = (0, c.useGtmTrack)(), b = (0, o.getCookieValueByName)("UAGC"), [_, v] = (0, s.useState)("1" === (w = b) ? g.PASSED : "0" === w ? g.FAILED : g.NOT_SUBMITTED);
          var w;
          const [k, I] = (0, s.useState)(), x = (0, s.createRef)(), D = (0, s.createRef)(), j = (0, s.createRef)(), {
            style: E
          } = f;
          return (0, s.useEffect)((() => {
            h({
              event: "age_gate_popup",
              element_placement: m.element_placement ?? ""
            })
          }), []), _ === g.PASSED || !1 === y?.isAMinor ? t : _ === g.FAILED ? (0, u.jsxs)("div", {
            className: i.agegate,
            style: E,
            children: [f?.header, (0, u.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: i.agegate,
            style: E,
            children: [f?.header, (0, u.jsx)("div", {
              className: i.bg,
              style: f?.bgImg ? {
                backgroundImage: `url(${f.bgImg})`
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
                  h(e ? {
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
            }), f?.footer]
          })
        }))
    }
  }
]);