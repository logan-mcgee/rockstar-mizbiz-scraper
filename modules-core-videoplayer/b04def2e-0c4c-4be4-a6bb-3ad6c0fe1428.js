! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b04def2e-0c4c-4be4-a6bb-3ad6c0fe1428", e._sentryDebugIdIdentifier = "sentry-dbid-b04def2e-0c4c-4be4-a6bb-3ad6c0fe1428")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [964, 5854, 8583], {
    25854: (e, a, t) => {
      e.exports = t(41454)
    },
    41454: (e, a, t) => {
      var r = t(62229),
        l = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, a, t) {
        var r, n = {},
          c = null,
          i = null;
        for (r in void 0 !== t && (c = "" + t), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (i = a.ref), a) s.call(a, r) && !d.hasOwnProperty(r) && (n[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === n[r] && (n[r] = a[r]);
        return {
          $$typeof: l,
          type: e,
          key: c,
          ref: i,
          props: n,
          _owner: o.current
        }
      }
      a.Fragment = n, a.jsx = c, a.jsxs = c
    },
    50964: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => b
      });
      var r = t(62229),
        l = t(6926),
        n = t(96672),
        s = t(20148),
        o = t(42451),
        d = t(95966),
        c = t(2918);
      const i = {
        agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39"
      };
      var u = t(25854);
      const f = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        b = (0, d.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: b = {},
            ga: g = {},
            t: y
          } = e;
          const {
            data: p
          } = (0, c.useRockstarUser)(), {
            track: m
          } = (0, c.useGtmTrack)(), _ = (0, d.getCookieValueByName)("UAGC"), [h, v] = (0, r.useState)("1" === (M = _) ? f.PASSED : "0" === M ? f.FAILED : f.NOT_SUBMITTED);
          var M;
          const [w, k] = (0, r.useState)(), I = (0, r.createRef)(), x = (0, r.createRef)(), E = (0, r.createRef)(), {
            style: j
          } = b;
          return (0, r.useEffect)((() => {
            m({
              event: "age_gate_popup",
              element_placement: g.element_placement ?? ""
            })
          }), []), h === f.PASSED || !1 === p?.isAMinor ? t : h === f.FAILED ? (0, u.jsxs)("div", {
            className: i.agegate,
            style: j,
            children: [b?.header, (0, u.jsx)("h2", {
              children: y("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: i.agegate,
            style: j,
            children: [b?.header, (0, u.jsx)("div", {
              className: i.bg,
              style: b?.bgImg ? {
                backgroundImage: `url(${b.bgImg})`
              } : {}
            }), !1 === w && (0, u.jsx)("h5", {
              className: i.error,
              children: y("Please enter a valid age")
            }), (0, u.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(E?.current?.value, I?.current?.value, x?.current?.value),
                  r = (0, l.j)(new Date, {
                    years: 150
                  }),
                  c = (0, n.f)(t) && (0, s.d)(t, r);
                if (k(c), c) {
                  const e = (0, o.V)(new Date, t) >= a;
                  m(e ? {
                    event: "age_gate_passed",
                    element_placement: g.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: g.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const r = e ? "1" : "0";
                  (0, d.setCookieValue)("UAGC", r), v(r)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, u.jsx)("h5", {
                children: y("agegate_header")
              }), (0, u.jsxs)("div", {
                className: i.inputs,
                children: [(0, u.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [y("Month"), (0, u.jsx)("input", {
                    id: "monthInput",
                    ref: I,
                    placeholder: y("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [y("Day"), (0, u.jsx)("input", {
                    id: "dayInput",
                    ref: x,
                    placeholder: y("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [y("Year"), (0, u.jsx)("input", {
                    id: "yearInput",
                    ref: E,
                    className: i.year,
                    placeholder: y("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsx)("button", {
                  type: "submit",
                  className: i.submit,
                  children: y("SUBMIT")
                })]
              })]
            }), b?.footer]
          })
        }))
    }
  }
]);