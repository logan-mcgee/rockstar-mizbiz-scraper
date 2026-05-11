try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fb82aba5-c7bb-47b2-ab37-a868f3d4eb82", e._sentryDebugIdIdentifier = "sentry-dbid-fb82aba5-c7bb-47b2-ab37-a868f3d4eb82")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [2217, 4598], {
    42217(e, a, t) {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var n = t(42295),
        s = t(71127),
        d = t(75413),
        r = t(92649),
        l = t(11915),
        i = t(44550),
        o = t(13331),
        c = t(32169);
      const b = {
          agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
          bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39",
          inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a"
        },
        f = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        g = (0, o.withTranslations)(({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: g = {},
          t: u,
          ...m
        }) => {
          const {
            data: p
          } = (0, c.Wx)(), {
            track: h
          } = (0, c.h)(), y = (0, o.getCookieValueByName)("UAGC"), [_, w] = (0, s.useState)("1" === (x = y) ? f.PASSED : "0" === x ? f.FAILED : f.NOT_SUBMITTED);
          var x;
          const [I, j] = (0, s.useState)(), D = (0, s.createRef)(), k = (0, s.createRef)(), v = (0, s.createRef)(), {
            style: E
          } = t;
          return (0, s.useEffect)(() => {
            h({
              event: "age_gate_popup",
              element_placement: g.element_placement ?? ""
            })
          }, []), _ === f.PASSED || !1 === p?.isAMinor ? a : _ === f.FAILED ? (0, n.jsxs)("div", {
            className: b.agegate,
            style: E,
            children: [t?.header, (0, n.jsx)("h2", {
              children: u("agegate_fail")
            })]
          }) : (0, n.jsxs)("div", {
            className: b.agegate,
            style: E,
            ...m,
            children: [t?.header, (0, n.jsx)("div", {
              className: b.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === I && (0, n.jsx)("h5", {
              className: b.error,
              children: u("Please enter a valid age")
            }), (0, n.jsx)("form", {
              name: "agegate",
              onSubmit: async a => {
                a.preventDefault();
                const t = new Date(v?.current?.value, D?.current?.value, k?.current?.value),
                  n = (0, d.j)(new Date, {
                    years: 150
                  }),
                  s = (0, r.f)(t) && (0, l.d)(t, n);
                if (j(s), s) {
                  const a = (0, i.V)(new Date, t) >= e;
                  h(a ? {
                    event: "age_gate_passed",
                    element_placement: g.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: g.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const n = a ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", n), w(n)
                }
              },
              "data-testid": "agegate-form",
              children: (0, n.jsxs)("fieldset", {
                children: [(0, n.jsx)("legend", {
                  children: u("agegate_header")
                }), (0, n.jsxs)("div", {
                  className: b.inputs,
                  children: [(0, n.jsxs)("label", {
                    htmlFor: "monthInput",
                    children: [u("Month"), (0, n.jsx)("input", {
                      id: "monthInput",
                      ref: D,
                      placeholder: u("MM"),
                      maxLength: 2,
                      type: "number",
                      required: !0
                    })]
                  }), (0, n.jsxs)("label", {
                    htmlFor: "dayInput",
                    children: [u("Day"), (0, n.jsx)("input", {
                      id: "dayInput",
                      ref: k,
                      placeholder: u("DD"),
                      maxLength: 2,
                      type: "number",
                      required: !0
                    })]
                  }), (0, n.jsxs)("label", {
                    htmlFor: "yearInput",
                    children: [u("Year"), (0, n.jsx)("input", {
                      id: "yearInput",
                      ref: v,
                      className: b.year,
                      placeholder: u("YYYY"),
                      maxLength: 4,
                      type: "number",
                      required: !0
                    })]
                  }), (0, n.jsx)("button", {
                    type: "submit",
                    className: b.submit,
                    children: u("SUBMIT")
                  })]
                })]
              })
            }), t?.footer]
          })
        })
    }
  }
]);