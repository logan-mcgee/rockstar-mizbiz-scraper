! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e3e65ac0-65d2-414d-99e0-1fc82183ce28", e._sentryDebugIdIdentifier = "sentry-dbid-e3e65ac0-65d2-414d-99e0-1fc82183ce28")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [328, 96, 947], {
    5356: (e, a, t) => {
      var r = t(2229),
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
    8096: (e, a, t) => {
      e.exports = t(5356)
    },
    9328: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var r = t(2229),
        n = t(5966),
        s = t(2918),
        l = t(3129),
        o = t(9373),
        d = t(8290),
        c = t(5163);
      const i = {
        agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39"
      };
      var f = t(8096);
      const u = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        g = (0, n.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: g = {},
            ga: m = {},
            t: p
          } = e;
          const {
            track: y
          } = (0, s.useGtmTrack)(), _ = (0, n.getCookieValueByName)("UAGC"), [b, h] = (0, r.useState)("1" === (v = _) ? u.PASSED : "0" === v ? u.FAILED : u.NOT_SUBMITTED);
          var v;
          const [w, I] = (0, r.useState)(), k = (0, r.createRef)(), x = (0, r.createRef)(), D = (0, r.createRef)(), {
            style: E
          } = g;
          return (0, r.useEffect)((() => {
            y({
              event: "age_gate_popup",
              element_placement: m.element_placement ?? ""
            })
          }), []), b === u.PASSED ? t : b === u.FAILED ? (0, f.jsxs)("div", {
            className: i.agegate,
            style: E,
            children: [g?.header, (0, f.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, f.jsxs)("div", {
            className: i.agegate,
            style: E,
            children: [g?.header, (0, f.jsx)("div", {
              className: i.bg,
              style: g?.bgImg ? {
                backgroundImage: `url(${g.bgImg})`
              } : {}
            }), !1 === w && (0, f.jsx)("h5", {
              className: i.error,
              children: p("Please enter a valid age")
            }), (0, f.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(D?.current?.value, k?.current?.value, x?.current?.value),
                  r = (0, l.j)(new Date, {
                    years: 150
                  }),
                  s = (0, o.f)(t) && (0, d.d)(t, r);
                if (I(s), s) {
                  const e = (0, c.V)(new Date, t) >= a;
                  y(e ? {
                    event: "age_gate_passed",
                    element_placement: m.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: m.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const r = e ? "1" : "0";
                  (0, n.setCookieValue)("UAGC", r), h(r)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, f.jsx)("h5", {
                children: p("agegate_header")
              }), (0, f.jsxs)("div", {
                className: i.inputs,
                children: [(0, f.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [p("Month"), (0, f.jsx)("input", {
                    id: "monthInput",
                    ref: k,
                    placeholder: p("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [p("Day"), (0, f.jsx)("input", {
                    id: "dayInput",
                    ref: x,
                    placeholder: p("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [p("Year"), (0, f.jsx)("input", {
                    id: "yearInput",
                    ref: D,
                    className: i.year,
                    placeholder: p("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, f.jsx)("button", {
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