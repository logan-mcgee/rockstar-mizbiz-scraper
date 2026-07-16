try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "46652953-f8ec-49b1-8724-034ba8ebad52", e._sentryDebugIdIdentifier = "sentry-dbid-46652953-f8ec-49b1-8724-034ba8ebad52")
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
  [512, 750], {
    94931(e, a, t) {
      var n = t(93082),
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

      function i(e, a, t) {
        var n, s = {},
          i = null,
          c = null;
        for (n in void 0 !== t && (i = "" + t), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (c = a.ref), a) d.call(a, n) && !o.hasOwnProperty(n) && (s[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === s[n] && (s[n] = a[n]);
        return {
          $$typeof: r,
          type: e,
          key: i,
          ref: c,
          props: s,
          _owner: l.current
        }
      }
      a.Fragment = s, a.jsx = i, a.jsxs = i
    },
    39793(e, a, t) {
      e.exports = t(94931)
    },
    72750(e, a, t) {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var n = t(39793),
        r = t(93082),
        s = t(19177),
        d = t(46573),
        l = t(98735),
        o = t(7354),
        i = t(13331),
        c = t(58095);
      const f = {
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
          children: a,
          options: t = {},
          ga: g = {},
          t: p,
          ...m
        }) => {
          const {
            data: y
          } = (0, c.Wx)(), {
            track: _
          } = (0, c.h)(), b = (0, i.getCookieValueByName)("UAGC"), [h, w] = (0, r.useState)("1" === (x = b) ? u.PASSED : "0" === x ? u.FAILED : u.NOT_SUBMITTED);
          var x;
          const [I, j] = (0, r.useState)(), k = (0, r.createRef)(), v = (0, r.createRef)(), E = (0, r.createRef)(), {
            style: D
          } = t;
          return (0, r.useEffect)(() => {
            _({
              event: "age_gate_popup",
              element_placement: g.element_placement ?? ""
            })
          }, []), h === u.PASSED || !1 === y?.isAMinor ? a : h === u.FAILED ? (0, n.jsxs)("div", {
            className: f.agegate,
            style: D,
            children: [t?.header, (0, n.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, n.jsxs)("div", {
            className: f.agegate,
            style: D,
            ...m,
            children: [t?.header, (0, n.jsx)("div", {
              className: f.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === I && (0, n.jsx)("h5", {
              className: f.error,
              children: p("Please enter a valid age")
            }), (0, n.jsx)("form", {
              name: "agegate",
              onSubmit: async a => {
                a.preventDefault();
                const t = new Date(E?.current?.value, k?.current?.value, v?.current?.value),
                  n = (0, s.j)(new Date, {
                    years: 150
                  }),
                  r = (0, d.f)(t) && (0, l.d)(t, n);
                if (j(r), r) {
                  const a = (0, o.V)(new Date, t) >= e;
                  _(a ? {
                    event: "age_gate_passed",
                    element_placement: g.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: g.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const n = a ? "1" : "0";
                  (0, i.setCookieValue)("UAGC", n), w(n)
                }
              },
              "data-testid": "agegate-form",
              children: (0, n.jsxs)("fieldset", {
                children: [(0, n.jsx)("legend", {
                  children: p("agegate_header")
                }), (0, n.jsxs)("div", {
                  className: f.inputs,
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
                      className: f.year,
                      placeholder: p("YYYY"),
                      maxLength: 4,
                      type: "number",
                      required: !0
                    })]
                  }), (0, n.jsx)("button", {
                    type: "submit",
                    className: f.submit,
                    children: p("SUBMIT")
                  })]
                })]
              })
            }), t?.footer]
          })
        })
    }
  }
]);