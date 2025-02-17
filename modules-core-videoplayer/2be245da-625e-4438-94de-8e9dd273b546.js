! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2be245da-625e-4438-94de-8e9dd273b546", e._sentryDebugIdIdentifier = "sentry-dbid-2be245da-625e-4438-94de-8e9dd273b546")
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
  [6265, 1029, 8646], {
    65039: (e, a, t) => {
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
    91029: (e, a, t) => {
      e.exports = t(65039)
    },
    6265: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => g
      });
      var r = t(62229),
        n = t(7313),
        s = t(65685),
        l = t(94061),
        o = t(56135),
        d = t(95966),
        c = t(2918);
      const i = {
        agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39"
      };
      var u = t(91029);
      const f = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        g = (0, d.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: g = {},
            ga: m = {},
            t: p
          } = e;
          const {
            data: y
          } = (0, c.useRockstarUser)(), {
            track: _
          } = (0, c.useGtmTrack)(), b = (0, d.getCookieValueByName)("UAGC"), [h, v] = (0, r.useState)("1" === (w = b) ? f.PASSED : "0" === w ? f.FAILED : f.NOT_SUBMITTED);
          var w;
          const [k, I] = (0, r.useState)(), x = (0, r.createRef)(), D = (0, r.createRef)(), E = (0, r.createRef)(), {
            style: j
          } = g;
          return (0, r.useEffect)((() => {
            _({
              event: "age_gate_popup",
              element_placement: m.element_placement ?? ""
            })
          }), []), h === f.PASSED || !1 === y?.isAMinor ? t : h === f.FAILED ? (0, u.jsxs)("div", {
            className: i.agegate,
            style: j,
            children: [g?.header, (0, u.jsx)("h2", {
              children: p("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: i.agegate,
            style: j,
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
                const t = new Date(E?.current?.value, x?.current?.value, D?.current?.value),
                  r = (0, n.j)(new Date, {
                    years: 150
                  }),
                  c = (0, s.f)(t) && (0, l.d)(t, r);
                if (I(c), c) {
                  const e = (0, o.V)(new Date, t) >= a;
                  _(e ? {
                    event: "age_gate_passed",
                    element_placement: m.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: m.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const r = e ? "1" : "0";
                  (0, d.setCookieValue)("UAGC", r), v(r)
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
                    ref: E,
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