try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7c454b95-30bb-4223-8234-39436893ab9e", e._sentryDebugIdIdentifier = "sentry-dbid-7c454b95-30bb-4223-8234-39436893ab9e")
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
  [680], {
    299(e, a, t) {
      t.r(a), t.d(a, {
        AgeGate: () => f
      });
      var s = t(9793),
        n = t(3082),
        l = t(8504),
        r = t(6388),
        d = t(7824),
        o = t(8004),
        i = t(3331),
        c = t(2199);
      const u = {
          agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
          bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39",
          inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a"
        },
        g = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        f = (0, i.withTranslations)(({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: f = {},
          t: m,
          ...b
        }) => {
          const {
            data: p
          } = (0, c.useRockstarUser)(), {
            track: y
          } = (0, c.useGtmTrack)(), h = (0, i.getCookieValueByName)("UAGC"), [_, v] = (0, n.useState)("1" === (w = h) ? g.PASSED : "0" === w ? g.FAILED : g.NOT_SUBMITTED);
          var w;
          const [k, x] = (0, n.useState)(), I = (0, n.createRef)(), j = (0, n.createRef)(), D = (0, n.createRef)(), {
            style: E
          } = t;
          return (0, n.useEffect)(() => {
            y({
              event: "age_gate_popup",
              element_placement: f.element_placement ?? ""
            })
          }, []), _ === g.PASSED || !1 === p?.isAMinor ? a : _ === g.FAILED ? (0, s.jsxs)("div", {
            className: u.agegate,
            style: E,
            children: [t?.header, (0, s.jsx)("h2", {
              children: m("agegate_fail")
            })]
          }) : (0, s.jsxs)("div", {
            className: u.agegate,
            style: E,
            ...b,
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
                  s = (0, l.j)(new Date, {
                    years: 150
                  }),
                  n = (0, r.f)(t) && (0, d.d)(t, s);
                if (x(n), n) {
                  const a = (0, o.V)(new Date, t) >= e;
                  y(a ? {
                    event: "age_gate_passed",
                    element_placement: f.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: f.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const s = a ? "1" : "0";
                  (0, i.setCookieValue)("UAGC", s), v(s)
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