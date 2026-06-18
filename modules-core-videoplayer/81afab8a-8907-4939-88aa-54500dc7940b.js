try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "81afab8a-8907-4939-88aa-54500dc7940b", e._sentryDebugIdIdentifier = "sentry-dbid-81afab8a-8907-4939-88aa-54500dc7940b")
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
  [299, 680, 793], {
    4931(e, a, t) {
      var r = t(3082),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, a, t) {
        var r, s = {},
          i = null,
          c = null;
        for (r in void 0 !== t && (i = "" + t), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (c = a.ref), a) l.call(a, r) && !o.hasOwnProperty(r) && (s[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === s[r] && (s[r] = a[r]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: c,
          props: s,
          _owner: d.current
        }
      }
      a.Fragment = s, a.jsx = i, a.jsxs = i
    },
    9793(e, a, t) {
      e.exports = t(4931)
    },
    299(e, a, t) {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var r = t(9793),
        n = t(3082),
        s = t(8504),
        l = t(6388),
        d = t(7824),
        o = t(8004),
        i = t(3331),
        c = t(2199);
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
        g = (0, i.withTranslations)(({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: g = {},
          t: p,
          ...m
        }) => {
          const {
            data: b
          } = (0, c.useRockstarUser)(), {
            track: y
          } = (0, c.useGtmTrack)(), _ = (0, i.getCookieValueByName)("UAGC"), [h, v] = (0, n.useState)("1" === (w = _) ? f.PASSED : "0" === w ? f.FAILED : f.NOT_SUBMITTED);
          var w;
          const [k, x] = (0, n.useState)(), I = (0, n.createRef)(), j = (0, n.createRef)(), E = (0, n.createRef)(), {
            style: D
          } = t;
          return (0, n.useEffect)(() => {
            y({
              event: "age_gate_popup",
              element_placement: g.element_placement ?? ""
            })
          }, []), h === f.PASSED || !1 === b?.isAMinor ? a : h === f.FAILED ? (0, r.jsxs)("div", {
            className: u.agegate,
            style: D,
            children: [t?.header, (0, r.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, r.jsxs)("div", {
            className: u.agegate,
            style: D,
            ...m,
            children: [t?.header, (0, r.jsx)("div", {
              className: u.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === k && (0, r.jsx)("h5", {
              className: u.error,
              children: p("Please enter a valid age")
            }), (0, r.jsx)("form", {
              name: "agegate",
              onSubmit: async a => {
                a.preventDefault();
                const t = new Date(E?.current?.value, I?.current?.value, j?.current?.value),
                  r = (0, s.j)(new Date, {
                    years: 150
                  }),
                  n = (0, l.f)(t) && (0, d.d)(t, r);
                if (x(n), n) {
                  const a = (0, o.V)(new Date, t) >= e;
                  y(a ? {
                    event: "age_gate_passed",
                    element_placement: g.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: g.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const r = a ? "1" : "0";
                  (0, i.setCookieValue)("UAGC", r), v(r)
                }
              },
              "data-testid": "agegate-form",
              children: (0, r.jsxs)("fieldset", {
                children: [(0, r.jsx)("legend", {
                  children: p("agegate_header")
                }), (0, r.jsxs)("div", {
                  className: u.inputs,
                  children: [(0, r.jsxs)("label", {
                    htmlFor: "monthInput",
                    children: [p("Month"), (0, r.jsx)("input", {
                      id: "monthInput",
                      ref: I,
                      placeholder: p("MM"),
                      maxLength: 2,
                      type: "number",
                      required: !0
                    })]
                  }), (0, r.jsxs)("label", {
                    htmlFor: "dayInput",
                    children: [p("Day"), (0, r.jsx)("input", {
                      id: "dayInput",
                      ref: j,
                      placeholder: p("DD"),
                      maxLength: 2,
                      type: "number",
                      required: !0
                    })]
                  }), (0, r.jsxs)("label", {
                    htmlFor: "yearInput",
                    children: [p("Year"), (0, r.jsx)("input", {
                      id: "yearInput",
                      ref: E,
                      className: u.year,
                      placeholder: p("YYYY"),
                      maxLength: 4,
                      type: "number",
                      required: !0
                    })]
                  }), (0, r.jsx)("button", {
                    type: "submit",
                    className: u.submit,
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