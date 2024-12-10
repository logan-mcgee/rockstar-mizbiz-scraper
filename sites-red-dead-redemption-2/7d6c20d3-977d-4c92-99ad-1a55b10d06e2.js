! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7d6c20d3-977d-4c92-99ad-1a55b10d06e2", e._sentryDebugIdIdentifier = "sentry-dbid-7d6c20d3-977d-4c92-99ad-1a55b10d06e2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [725, 106], {
    26516: (e, t, a) => {
      "use strict";
      var s = a(71403),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, a) {
        var s, r = {},
          i = null,
          c = null;
        for (s in void 0 !== a && (i = "" + a), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (c = t.ref), t) d.call(t, s) && !o.hasOwnProperty(s) && (r[s] = t[s]);
        if (e && e.defaultProps)
          for (s in t = e.defaultProps) void 0 === r[s] && (r[s] = t[s]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: c,
          props: r,
          _owner: l.current
        }
      }
      t.Fragment = r, t.jsx = i, t.jsxs = i
    },
    46632: (e, t, a) => {
      "use strict";
      e.exports = a(26516)
    },
    30033: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        fbar: () => f,
        useAgegated: () => u
      });
      var s = a(40207),
        n = a(42756),
        r = a(71403),
        d = a(22946),
        l = a.n(d);
      const o = {
        agegate: "rockstargames-sites-red-dead-redemption-2b564767f67a0f63737d816dcca714d49",
        inputs: "rockstargames-sites-red-dead-redemption-2f33bd58bdfa63206fe9444fde46261d1",
        bg: "rockstargames-sites-red-dead-redemption-2db2f50238f9208ec72ef210e47b60e3b"
      };
      var i = a(46632);
      const c = (0, n.withTranslations)((e => {
          let {
            agegateValue: t,
            options: a = {},
            ga: d = {},
            t: c
          } = e;
          const {
            track: u
          } = (0, s.useGtmTrack)(), {
            mutateLSSettings: f
          } = (0, n.useRockstarWebLSSettings)(), [g, p] = (0, r.useState)(null), _ = (0, r.createRef)(), b = (0, r.createRef)(), m = (0, r.createRef)(), {
            style: y
          } = a;
          (0, r.useEffect)((() => {
            u({
              event: "age_gate_popup",
              element_placement: d.element_placement ?? ""
            })
          }), []);
          return !1 === t ? (0, i.jsxs)("div", {
            className: o.agegate,
            style: y,
            children: [a?.header, (0, i.jsx)("h2", {
              children: c("agegate_fail")
            })]
          }) : null === t ? (0, i.jsxs)("div", {
            className: o.agegate,
            style: y,
            children: [a?.header, (0, i.jsx)("div", {
              className: o.bg,
              style: a?.bgImg ? {
                backgroundImage: `url(${a.bgImg})`
              } : {}
            }), !1 === g ? (0, i.jsx)("h5", {
              className: o.error,
              children: c("Please enter a valid age")
            }) : "", (0, i.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const t = `${m.current.value}-${_.current.value.padStart(2,0)}-${b.current.value.padStart(2,0)}`,
                  a = l()(t, "YYYY-MM-DD", !0).isValid();
                if (p(a), a) {
                  const e = l()().diff(t, "years") >= 17;
                  u(e ? {
                    event: "age_gate_passed",
                    element_placement: d.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: d.element_placement ?? "",
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
                className: o.inputs,
                children: [(0, i.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [c("Month"), (0, i.jsx)("input", {
                    id: "monthInput",
                    ref: _,
                    placeholder: c("MM"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [c("Day"), (0, i.jsx)("input", {
                    id: "dayInput",
                    ref: b,
                    placeholder: c("DD"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [c("Year"), (0, i.jsx)("input", {
                    id: "yearInput",
                    ref: m,
                    className: o.year,
                    placeholder: c("YYYY"),
                    maxLength: 4
                  })]
                }), (0, i.jsx)("button", {
                  type: "submit",
                  className: o.submit,
                  children: c("SUBMIT")
                })]
              })]
            }), a?.footer]
          }) : null
        })),
        u = () => {
          const {
            lsSettings: e
          } = (0, n.useRockstarWebLSSettings)(), {
            data: t,
            loading: a
          } = (0, s.useRockstarUser)();
          return function(s) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const d = e?.agegatePass ?? null,
              l = t?.agegate_pass ?? d ?? null;
            return !l && a ? null : l ? s : (0, i.jsx)(c, {
              agegateValue: l,
              options: n,
              ga: r
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