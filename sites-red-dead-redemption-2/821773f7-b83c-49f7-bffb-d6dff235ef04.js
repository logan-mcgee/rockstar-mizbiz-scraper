try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "821773f7-b83c-49f7-bffb-d6dff235ef04", e._sentryDebugIdIdentifier = "sentry-dbid-821773f7-b83c-49f7-bffb-d6dff235ef04")
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
  [299, 680], {
    94931(e, t, a) {
      var n = a(93082),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, a) {
        var n, s = {},
          i = null,
          f = null;
        for (n in void 0 !== a && (i = "" + a), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (f = t.ref), t) d.call(t, n) && !o.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: r,
          type: e,
          key: i,
          ref: f,
          props: s,
          _owner: l.current
        }
      }
      t.Fragment = s, t.jsx = i, t.jsxs = i
    },
    39793(e, t, a) {
      e.exports = a(94931)
    },
    299(e, t, a) {
      a.r(t), a.d(t, {
        AgeGate: () => g
      });
      var n = a(39793),
        r = a(93082),
        s = a(28504),
        d = a(26388),
        l = a(97824),
        o = a(19727),
        i = a(13331),
        f = a(90799);
      const c = {
          agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
          bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39",
          inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a"
        },
        u = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        g = (0, i.withTranslations)(({
          ageGatePassAge: e = 17,
          children: t,
          options: a = {},
          ga: g = {},
          t: p,
          ...m
        }) => {
          const {
            data: y
          } = (0, f.Wx)(), {
            track: _
          } = (0, f.h)(), b = (0, i.getCookieValueByName)("UAGC"), [h, w] = (0, r.useState)("1" === (x = b) ? u.PASSED : "0" === x ? u.FAILED : u.NOT_SUBMITTED);
          var x;
          const [I, j] = (0, r.useState)(), k = (0, r.createRef)(), v = (0, r.createRef)(), E = (0, r.createRef)(), {
            style: D
          } = a;
          return (0, r.useEffect)(() => {
            _({
              event: "age_gate_popup",
              element_placement: g.element_placement ?? ""
            })
          }, []), h === u.PASSED || !1 === y?.isAMinor ? t : h === u.FAILED ? (0, n.jsxs)("div", {
            className: c.agegate,
            style: D,
            children: [a?.header, (0, n.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, n.jsxs)("div", {
            className: c.agegate,
            style: D,
            ...m,
            children: [a?.header, (0, n.jsx)("div", {
              className: c.bg,
              style: a?.bgImg ? {
                backgroundImage: `url(${a.bgImg})`
              } : {}
            }), !1 === I && (0, n.jsx)("h5", {
              className: c.error,
              children: p("Please enter a valid age")
            }), (0, n.jsx)("form", {
              name: "agegate",
              onSubmit: async t => {
                t.preventDefault();
                const a = new Date(E?.current?.value, k?.current?.value, v?.current?.value),
                  n = (0, s.j)(new Date, {
                    years: 150
                  }),
                  r = (0, d.f)(a) && (0, l.d)(a, n);
                if (j(r), r) {
                  const t = (0, o.V)(new Date, a) >= e;
                  _(t ? {
                    event: "age_gate_passed",
                    element_placement: g.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: g.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const n = t ? "1" : "0";
                  (0, i.setCookieValue)("UAGC", n), w(n)
                }
              },
              "data-testid": "agegate-form",
              children: (0, n.jsxs)("fieldset", {
                children: [(0, n.jsx)("legend", {
                  children: p("agegate_header")
                }), (0, n.jsxs)("div", {
                  className: c.inputs,
                  children: [(0, n.jsxs)("label", {
                    htmlFor: "monthInput",
                    children: [p("Month"), (0, n.jsx)("input", {
                      id: "monthInput",
                      ref: k,
                      placeholder: p("MM"),
                      maxLength: 2,
                      type: "number",
                      required: !0
                    })]
                  }), (0, n.jsxs)("label", {
                    htmlFor: "dayInput",
                    children: [p("Day"), (0, n.jsx)("input", {
                      id: "dayInput",
                      ref: v,
                      placeholder: p("DD"),
                      maxLength: 2,
                      type: "number",
                      required: !0
                    })]
                  }), (0, n.jsxs)("label", {
                    htmlFor: "yearInput",
                    children: [p("Year"), (0, n.jsx)("input", {
                      id: "yearInput",
                      ref: E,
                      className: c.year,
                      placeholder: p("YYYY"),
                      maxLength: 4,
                      type: "number",
                      required: !0
                    })]
                  }), (0, n.jsx)("button", {
                    type: "submit",
                    className: c.submit,
                    children: p("SUBMIT")
                  })]
                })]
              })
            }), a?.footer]
          })
        })
    }
  }
]);