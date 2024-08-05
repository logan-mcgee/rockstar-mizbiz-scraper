! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ccf0b842-08dd-4f20-b055-c8e4fa6332e0", e._sentryDebugIdIdentifier = "sentry-dbid-ccf0b842-08dd-4f20-b055-c8e4fa6332e0")
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
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, a) {
        var s, n = {},
          c = null,
          i = null;
        for (s in void 0 !== a && (c = "" + a), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (i = t.ref), t) d.call(t, s) && !o.hasOwnProperty(s) && (n[s] = t[s]);
        if (e && e.defaultProps)
          for (s in t = e.defaultProps) void 0 === n[s] && (n[s] = t[s]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: i,
          props: n,
          _owner: l.current
        }
      }
      t.Fragment = n, t.jsx = c, t.jsxs = c
    },
    46632: (e, t, a) => {
      "use strict";
      e.exports = a(26516)
    },
    30033: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        fbar: () => u,
        useAgegated: () => f
      });
      var s = a(40207),
        r = a(42756),
        n = a(71403),
        d = a(22946),
        l = a.n(d);
      const o = {
        agegate: "rockstargames-sites-red-dead-redemption-2b564767f67a0f63737d816dcca714d49",
        inputs: "rockstargames-sites-red-dead-redemption-2f33bd58bdfa63206fe9444fde46261d1",
        bg: "rockstargames-sites-red-dead-redemption-2db2f50238f9208ec72ef210e47b60e3b"
      };
      var c = a(46632);
      const i = (0, r.withTranslations)((e => {
          let {
            agegateValue: t,
            options: a = {},
            t: s
          } = e;
          const {
            mutateLSSettings: d
          } = (0, r.useRockstarWebLSSettings)(), [i, f] = (0, n.useState)(null), u = (0, n.createRef)(), g = (0, n.createRef)(), p = (0, n.createRef)(), {
            style: b
          } = a;
          return !1 === t ? (0, c.jsxs)("div", {
            className: o.agegate,
            style: b,
            children: [a?.header, (0, c.jsx)("h2", {
              children: s("agegate_fail")
            })]
          }) : null === t ? (0, c.jsxs)("div", {
            className: o.agegate,
            style: b,
            children: [a?.header, (0, c.jsx)("div", {
              className: o.bg,
              style: a?.bgImg ? {
                backgroundImage: `url(${a.bgImg})`
              } : {}
            }), !1 === i ? (0, c.jsx)("h5", {
              className: o.error,
              children: s("Please enter a valid age")
            }) : "", (0, c.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const t = `${p.current.value}-${u.current.value.padStart(2,0)}-${g.current.value.padStart(2,0)}`,
                  a = l()(t, "YYYY-MM-DD", !0).isValid();
                if (f(a), a) {
                  const e = l()().diff(t, "years");
                  d({
                    key: "agegatePass",
                    value: e >= 17
                  })
                }
              },
              children: [(0, c.jsx)("h5", {
                children: s("agegate_header")
              }), (0, c.jsxs)("div", {
                className: o.inputs,
                children: [(0, c.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [s("Month"), (0, c.jsx)("input", {
                    id: "monthInput",
                    ref: u,
                    placeholder: s("MM"),
                    maxLength: 2
                  })]
                }), (0, c.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [s("Day"), (0, c.jsx)("input", {
                    id: "dayInput",
                    ref: g,
                    placeholder: s("DD"),
                    maxLength: 2
                  })]
                }), (0, c.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [s("Year"), (0, c.jsx)("input", {
                    id: "yearInput",
                    ref: p,
                    className: o.year,
                    placeholder: s("YYYY"),
                    maxLength: 4
                  })]
                }), (0, c.jsx)("button", {
                  type: "submit",
                  className: o.submit,
                  children: s("SUBMIT")
                })]
              })]
            }), a?.footer]
          }) : null
        })),
        f = () => {
          const {
            lsSettings: e
          } = (0, r.useRockstarWebLSSettings)(), {
            data: t,
            loading: a
          } = (0, s.useRockstarUser)();
          return function(s) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = e?.agegatePass ?? null,
              d = t?.agegate_pass ?? n ?? null;
            return !d && a ? null : d ? s : (0, c.jsx)(i, {
              agegateValue: d,
              options: r
            })
          }
        },
        u = 12
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