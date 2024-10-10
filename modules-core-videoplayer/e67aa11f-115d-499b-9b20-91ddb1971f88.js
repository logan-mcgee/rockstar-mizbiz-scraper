! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e67aa11f-115d-499b-9b20-91ddb1971f88", e._sentryDebugIdIdentifier = "sentry-dbid-e67aa11f-115d-499b-9b20-91ddb1971f88")
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
    6516: (e, a, t) => {
      "use strict";
      var r = t(1403),
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

      function i(e, a, t) {
        var r, n = {},
          i = null,
          c = null;
        for (r in void 0 !== t && (i = "" + t), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (c = a.ref), a) l.call(a, r) && !d.hasOwnProperty(r) && (n[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === n[r] && (n[r] = a[r]);
        return {
          $$typeof: s,
          type: e,
          key: i,
          ref: c,
          props: n,
          _owner: o.current
        }
      }
      a.Fragment = n, a.jsx = i, a.jsxs = i
    },
    6632: (e, a, t) => {
      "use strict";
      e.exports = t(6516)
    },
    33: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        fbar: () => f,
        useAgegated: () => u
      });
      var r = t(207),
        s = t(2756),
        n = t(1403),
        l = t(2946),
        o = t.n(l);
      const d = {
        agegate: "rockstargames-modules-core-videoplayerb564767f67a0f63737d816dcca714d49",
        inputs: "rockstargames-modules-core-videoplayerf33bd58bdfa63206fe9444fde46261d1",
        bg: "rockstargames-modules-core-videoplayerdb2f50238f9208ec72ef210e47b60e3b"
      };
      var i = t(6632);
      const c = (0, s.withTranslations)((e => {
          let {
            agegateValue: a,
            options: t = {},
            ga: l = {},
            t: c
          } = e;
          const {
            track: u
          } = (0, r.useGtmTrack)(), {
            mutateLSSettings: f
          } = (0, s.useRockstarWebLSSettings)(), [g, p] = (0, n.useState)(null), b = (0, n.createRef)(), m = (0, n.createRef)(), _ = (0, n.createRef)(), {
            style: y
          } = t;
          (0, n.useEffect)((() => {
            u({
              event: "age_gate_popup",
              element_placement: l.element_placement ?? ""
            })
          }), []);
          return !1 === a ? (0, i.jsxs)("div", {
            className: d.agegate,
            style: y,
            children: [t?.header, (0, i.jsx)("h2", {
              children: c("agegate_fail")
            })]
          }) : null === a ? (0, i.jsxs)("div", {
            className: d.agegate,
            style: y,
            children: [t?.header, (0, i.jsx)("div", {
              className: d.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === g ? (0, i.jsx)("h5", {
              className: d.error,
              children: c("Please enter a valid age")
            }) : "", (0, i.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const a = `${_.current.value}-${b.current.value.padStart(2,0)}-${m.current.value.padStart(2,0)}`,
                  t = o()(a, "YYYY-MM-DD", !0).isValid();
                if (p(t), t) {
                  const e = o()().diff(a, "years") >= 17;
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
              children: [(0, i.jsx)("h5", {
                children: c("agegate_header")
              }), (0, i.jsxs)("div", {
                className: d.inputs,
                children: [(0, i.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [c("Month"), (0, i.jsx)("input", {
                    id: "monthInput",
                    ref: b,
                    placeholder: c("MM"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [c("Day"), (0, i.jsx)("input", {
                    id: "dayInput",
                    ref: m,
                    placeholder: c("DD"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [c("Year"), (0, i.jsx)("input", {
                    id: "yearInput",
                    ref: _,
                    className: d.year,
                    placeholder: c("YYYY"),
                    maxLength: 4
                  })]
                }), (0, i.jsx)("button", {
                  type: "submit",
                  className: d.submit,
                  children: c("SUBMIT")
                })]
              })]
            }), t?.footer]
          }) : null
        })),
        u = () => {
          const {
            lsSettings: e
          } = (0, s.useRockstarWebLSSettings)(), {
            data: a,
            loading: t
          } = (0, r.useRockstarUser)();
          return function(r) {
            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const l = e?.agegatePass ?? null,
              o = a?.agegate_pass ?? l ?? null;
            return !o && t ? null : o ? r : (0, i.jsx)(c, {
              agegateValue: o,
              options: s,
              ga: n
            })
          }
        },
        f = 12
    },
    3941: e => {
      function a(e) {
        var a = new Error("Cannot find module '" + e + "'");
        throw a.code = "MODULE_NOT_FOUND", a
      }
      a.keys = () => [], a.resolve = a, a.id = 3941, e.exports = a
    }
  }
]);