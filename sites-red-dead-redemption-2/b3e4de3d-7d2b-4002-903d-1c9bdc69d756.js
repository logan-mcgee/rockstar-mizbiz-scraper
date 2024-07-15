! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b3e4de3d-7d2b-4002-903d-1c9bdc69d756", e._sentryDebugIdIdentifier = "sentry-dbid-b3e4de3d-7d2b-4002-903d-1c9bdc69d756")
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
  [452, 240, 832], {
    99576: (e, t, a) => {
      "use strict";
      var s = a(51664),
        r = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, a) {
        var s, d = {},
          i = null,
          c = null;
        for (s in void 0 !== a && (i = "" + a), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (c = t.ref), t) n.call(t, s) && !o.hasOwnProperty(s) && (d[s] = t[s]);
        if (e && e.defaultProps)
          for (s in t = e.defaultProps) void 0 === d[s] && (d[s] = t[s]);
        return {
          $$typeof: r,
          type: e,
          key: i,
          ref: c,
          props: d,
          _owner: l.current
        }
      }
      t.Fragment = d, t.jsx = i, t.jsxs = i
    },
    95240: (e, t, a) => {
      "use strict";
      e.exports = a(99576)
    },
    24: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        fbar: () => f,
        useAgegated: () => u
      });
      var s = a(42836),
        r = a(45792),
        d = a(51664),
        n = a(5516),
        l = a.n(n);
      const o = {
        agegate: "rockstargames-sites-red-dead-redemption-2b564767f67a0f63737d816dcca714d49",
        inputs: "rockstargames-sites-red-dead-redemption-2f33bd58bdfa63206fe9444fde46261d1",
        bg: "rockstargames-sites-red-dead-redemption-2db2f50238f9208ec72ef210e47b60e3b"
      };
      var i = a(95240);
      const c = (0, r.withTranslations)((e => {
          let {
            agegateValue: t,
            options: a = {},
            t: s
          } = e;
          const {
            mutateLSSettings: n
          } = (0, r.useRockstarWebLSSettings)(), [c, u] = (0, d.useState)(null), f = (0, d.createRef)(), g = (0, d.createRef)(), b = (0, d.createRef)(), {
            style: p
          } = a;
          return !1 === t ? (0, i.jsxs)("div", {
            className: o.agegate,
            style: p,
            children: [a?.header, (0, i.jsx)("h2", {
              children: s("agegate_fail")
            })]
          }) : null === t ? (0, i.jsxs)("div", {
            className: o.agegate,
            style: p,
            children: [a?.header, (0, i.jsx)("div", {
              className: o.bg,
              style: a?.bgImg ? {
                backgroundImage: `url(${a.bgImg})`
              } : {}
            }), !1 === c ? (0, i.jsx)("h5", {
              className: o.error,
              children: s("Please enter a valid age")
            }) : "", (0, i.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const t = `${b.current.value}-${f.current.value.padStart(2,0)}-${g.current.value.padStart(2,0)}`,
                  a = l()(t, "YYYY-MM-DD", !0).isValid();
                if (u(a), a) {
                  const e = l()().diff(t, "years");
                  n({
                    key: "agegatePass",
                    value: e >= 17
                  })
                }
              },
              children: [(0, i.jsx)("h5", {
                children: s("agegate_header")
              }), (0, i.jsxs)("div", {
                className: o.inputs,
                children: [(0, i.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [s("Month"), (0, i.jsx)("input", {
                    id: "monthInput",
                    ref: f,
                    placeholder: s("MM"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [s("Day"), (0, i.jsx)("input", {
                    id: "dayInput",
                    ref: g,
                    placeholder: s("DD"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [s("Year"), (0, i.jsx)("input", {
                    id: "yearInput",
                    ref: b,
                    className: o.year,
                    placeholder: s("YYYY"),
                    maxLength: 4
                  })]
                }), (0, i.jsx)("button", {
                  type: "submit",
                  className: o.submit,
                  children: s("SUBMIT")
                })]
              })]
            }), a?.footer]
          }) : null
        })),
        u = () => {
          const {
            lsSettings: e
          } = (0, r.useRockstarWebLSSettings)(), {
            data: t,
            loading: a
          } = (0, s.useRockstarUser)();
          return function(s) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const d = e?.agegatePass ?? null,
              n = t?.agegate_pass ?? d ?? null;
            return !n && a ? null : n ? s : (0, i.jsx)(c, {
              agegateValue: n,
              options: r
            })
          }
        },
        f = 12
    },
    37740: e => {
      function t(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      }
      t.keys = () => [], t.resolve = t, t.id = 37740, e.exports = t
    }
  }
]);