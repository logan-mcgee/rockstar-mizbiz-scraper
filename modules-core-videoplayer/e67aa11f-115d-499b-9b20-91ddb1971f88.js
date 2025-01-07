! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e67aa11f-115d-499b-9b20-91ddb1971f88", e._sentryDebugIdIdentifier = "sentry-dbid-e67aa11f-115d-499b-9b20-91ddb1971f88")
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
  [725, 106], {
    6516: (e, t, a) => {
      "use strict";
      var r = a(1403),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, a) {
        var r, n = {},
          c = null,
          i = null;
        for (r in void 0 !== a && (c = "" + a), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (i = t.ref), t) l.call(t, r) && !d.hasOwnProperty(r) && (n[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === n[r] && (n[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: i,
          props: n,
          _owner: o.current
        }
      }
      t.Fragment = n, t.jsx = c, t.jsxs = c
    },
    6632: (e, t, a) => {
      "use strict";
      e.exports = a(6516)
    },
    33: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        fbar: () => f,
        useAgegated: () => u
      });
      var r = a(207),
        s = a(2756),
        n = a(1403),
        l = a(2946),
        o = a.n(l);
      const d = {
        agegate: "rockstargames-modules-core-videoplayerb564767f67a0f63737d816dcca714d49",
        inputs: "rockstargames-modules-core-videoplayerf33bd58bdfa63206fe9444fde46261d1",
        bg: "rockstargames-modules-core-videoplayerdb2f50238f9208ec72ef210e47b60e3b"
      };
      var c = a(6632);
      const i = (0, s.withTranslations)((e => {
          let {
            agegateValue: t,
            options: a = {},
            ga: l = {},
            t: i
          } = e;
          const {
            track: u
          } = (0, r.useGtmTrack)(), {
            mutateLSSettings: f
          } = (0, s.useRockstarWebLSSettings)(), [g, p] = (0, n.useState)(null), m = (0, n.createRef)(), _ = (0, n.createRef)(), b = (0, n.createRef)(), {
            style: y
          } = a;
          (0, n.useEffect)((() => {
            u({
              event: "age_gate_popup",
              element_placement: l.element_placement ?? ""
            })
          }), []);
          return !1 === t ? (0, c.jsxs)("div", {
            className: d.agegate,
            style: y,
            children: [a?.header, (0, c.jsx)("h2", {
              children: i("agegate_fail")
            })]
          }) : null === t ? (0, c.jsxs)("div", {
            className: d.agegate,
            style: y,
            children: [a?.header, (0, c.jsx)("div", {
              className: d.bg,
              style: a?.bgImg ? {
                backgroundImage: `url(${a.bgImg})`
              } : {}
            }), !1 === g ? (0, c.jsx)("h5", {
              className: d.error,
              children: i("Please enter a valid age")
            }) : "", (0, c.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const t = `${b.current.value}-${m.current.value.padStart(2,0)}-${_.current.value.padStart(2,0)}`,
                  a = o()(t, "YYYY-MM-DD", !0).isValid();
                if (p(a), a) {
                  const e = o()().diff(t, "years") >= 17;
                  u(e ? {
                    event: "age_gate_passed",
                    element_placement: l.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: l.element_placement ?? "",
                    text: "you may not view this content at this time"
                  }), f({
                    key: "agegatePass",
                    value: e
                  })
                }
              },
              children: [(0, c.jsx)("h5", {
                children: i("agegate_header")
              }), (0, c.jsxs)("div", {
                className: d.inputs,
                children: [(0, c.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [i("Month"), (0, c.jsx)("input", {
                    id: "monthInput",
                    ref: m,
                    placeholder: i("MM"),
                    maxLength: 2
                  })]
                }), (0, c.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [i("Day"), (0, c.jsx)("input", {
                    id: "dayInput",
                    ref: _,
                    placeholder: i("DD"),
                    maxLength: 2
                  })]
                }), (0, c.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [i("Year"), (0, c.jsx)("input", {
                    id: "yearInput",
                    ref: b,
                    className: d.year,
                    placeholder: i("YYYY"),
                    maxLength: 4
                  })]
                }), (0, c.jsx)("button", {
                  type: "submit",
                  className: d.submit,
                  children: i("SUBMIT")
                })]
              })]
            }), a?.footer]
          }) : null
        })),
        u = () => {
          const {
            lsSettings: e
          } = (0, s.useRockstarWebLSSettings)(), {
            data: t,
            loading: a
          } = (0, r.useRockstarUser)();
          return function(r) {
            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const l = e?.agegatePass ?? null,
              o = t?.agegate_pass ?? l ?? null;
            return !o && a ? null : o ? r : (0, c.jsx)(i, {
              agegateValue: o,
              options: s,
              ga: n
            })
          }
        },
        f = 12
    },
    3941: e => {
      function t(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      }
      t.keys = () => [], t.resolve = t, t.id = 3941, e.exports = t
    }
  }
]);