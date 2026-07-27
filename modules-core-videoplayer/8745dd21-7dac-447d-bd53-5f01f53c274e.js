try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8745dd21-7dac-447d-bd53-5f01f53c274e", e._sentryDebugIdIdentifier = "sentry-dbid-8745dd21-7dac-447d-bd53-5f01f53c274e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [524], {
    1143(e, a, t) {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var s = t(9793),
        d = t(3082),
        n = t(9177),
        l = t(6573),
        r = t(8735),
        o = t(8005),
        c = t(3331),
        i = t(2199);
      const u = {
          agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
          bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39",
          inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a"
        },
        f = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        g = (0, c.withTranslations)(({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: g = {},
          t: m,
          ...p
        }) => {
          const {
            data: y
          } = (0, i.useRockstarUser)(), {
            track: b
          } = (0, i.useGtmTrack)(), h = (0, c.getCookieValueByName)("UAGC"), [_, v] = (0, d.useState)("1" === (w = h) ? f.PASSED : "0" === w ? f.FAILED : f.NOT_SUBMITTED);
          var w;
          const [k, x] = (0, d.useState)(), I = (0, d.createRef)(), j = (0, d.createRef)(), D = (0, d.createRef)(), {
            style: E
          } = t;
          return (0, d.useEffect)(() => {
            b({
              event: "age_gate_popup",
              element_placement: g.element_placement ?? ""
            })
          }, []), _ === f.PASSED || !1 === y?.isAMinor ? a : _ === f.FAILED ? (0, s.jsxs)("div", {
            className: u.agegate,
            style: E,
            children: [t?.header, (0, s.jsx)("h2", {
              children: m("agegate_fail")
            })]
          }) : (0, s.jsxs)("div", {
            className: u.agegate,
            style: E,
            ...p,
            children: [t?.header, (0, s.jsx)("div", {
              className: u.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === k && (0, s.jsx)("h5", {
              className: u.error,
              children: m("Please enter a valid age")
            }), (0, s.jsx)("form", {
              name: "agegate",
              onSubmit: async a => {
                a.preventDefault();
                const t = new Date(D?.current?.value, I?.current?.value, j?.current?.value),
                  s = (0, n.j)(new Date, {
                    years: 150
                  }),
                  d = (0, l.f)(t) && (0, r.d)(t, s);
                if (x(d), d) {
                  const a = (0, o.V)(new Date, t) >= e;
                  b(a ? {
                    event: "age_gate_passed",
                    element_placement: g.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: g.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const s = a ? "1" : "0";
                  (0, c.setCookieValue)("UAGC", s), v(s)
                }
              },
              "data-testid": "agegate-form",
              children: (0, s.jsxs)("fieldset", {
                children: [(0, s.jsx)("legend", {
                  children: m("agegate_header")
                }), (0, s.jsxs)("div", {
                  className: u.inputs,
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
                      ref: j,
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
                      className: u.year,
                      placeholder: m("YYYY"),
                      maxLength: 4,
                      type: "number",
                      required: !0
                    })]
                  }), (0, s.jsx)("button", {
                    type: "submit",
                    className: u.submit,
                    children: m("SUBMIT")
                  })]
                })]
              })
            }), t?.footer]
          })
        })
    }
  }
]);