try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "89e83034-ff5b-4ef8-adae-70358b14db58", e._sentryDebugIdIdentifier = "sentry-dbid-89e83034-ff5b-4ef8-adae-70358b14db58")
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
  [964, 5854, 8583], {
    25854: (e, a, t) => {
      e.exports = t(41454)
    },
    41454: (e, a, t) => {
      var r = t(62229),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, a, t) {
        var r, s = {},
          c = null,
          i = null;
        for (r in void 0 !== t && (c = "" + t), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (i = a.ref), a) l.call(a, r) && !d.hasOwnProperty(r) && (s[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === s[r] && (s[r] = a[r]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: i,
          props: s,
          _owner: o.current
        }
      }
      a.Fragment = s, a.jsx = c, a.jsxs = c
    },
    50964: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var r = t(62229),
        n = t(6926),
        s = t(96672),
        l = t(20148),
        o = t(42451),
        d = t(95966),
        c = t(2918);
      const i = {
        agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39"
      };
      var f = t(25854);
      const u = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        g = (0, d.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: g = {},
            ga: p = {},
            t: m
          } = e;
          const {
            data: y
          } = (0, c.useRockstarUser)(), {
            track: b
          } = (0, c.useGtmTrack)(), _ = (0, d.getCookieValueByName)("UAGC"), [h, v] = (0, r.useState)("1" === (w = _) ? u.PASSED : "0" === w ? u.FAILED : u.NOT_SUBMITTED);
          var w;
          const [k, I] = (0, r.useState)(), x = (0, r.createRef)(), E = (0, r.createRef)(), j = (0, r.createRef)(), {
            style: D
          } = g;
          return (0, r.useEffect)((() => {
            b({
              event: "age_gate_popup",
              element_placement: p.element_placement ?? ""
            })
          }), []), h === u.PASSED || !1 === y?.isAMinor ? t : h === u.FAILED ? (0, f.jsxs)("div", {
            className: i.agegate,
            style: D,
            children: [g?.header, (0, f.jsx)("h2", {
              children: m("agegate_fail")
            })]
          }) : (0, f.jsxs)("div", {
            className: i.agegate,
            style: D,
            children: [g?.header, (0, f.jsx)("div", {
              className: i.bg,
              style: g?.bgImg ? {
                backgroundImage: `url(${g.bgImg})`
              } : {}
            }), !1 === k && (0, f.jsx)("h5", {
              className: i.error,
              children: m("Please enter a valid age")
            }), (0, f.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(j?.current?.value, x?.current?.value, E?.current?.value),
                  r = (0, n.j)(new Date, {
                    years: 150
                  }),
                  c = (0, s.f)(t) && (0, l.d)(t, r);
                if (I(c), c) {
                  const e = (0, o.V)(new Date, t) >= a;
                  b(e ? {
                    event: "age_gate_passed",
                    element_placement: p.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: p.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const r = e ? "1" : "0";
                  (0, d.setCookieValue)("UAGC", r), v(r)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, f.jsx)("h5", {
                children: m("agegate_header")
              }), (0, f.jsxs)("div", {
                className: i.inputs,
                children: [(0, f.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [m("Month"), (0, f.jsx)("input", {
                    id: "monthInput",
                    ref: x,
                    placeholder: m("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [m("Day"), (0, f.jsx)("input", {
                    id: "dayInput",
                    ref: E,
                    placeholder: m("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [m("Year"), (0, f.jsx)("input", {
                    id: "yearInput",
                    ref: j,
                    className: i.year,
                    placeholder: m("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsx)("button", {
                  type: "submit",
                  className: i.submit,
                  children: m("SUBMIT")
                })]
              })]
            }), g?.footer]
          })
        }))
    }
  }
]);