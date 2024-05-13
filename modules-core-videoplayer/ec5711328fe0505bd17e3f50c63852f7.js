! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0d46d86e-5db6-4c89-a6cb-0bdd73ab730e", e._sentryDebugIdIdentifier = "sentry-dbid-0d46d86e-5db6-4c89-a6cb-0bdd73ab730e")
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
  [452, 240, 832], {
    99576: (e, a, t) => {
      "use strict";
      var r = t(51664),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, a, t) {
        var r, n = {},
          c = null,
          i = null;
        for (r in void 0 !== t && (c = "" + t), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (i = a.ref), a) l.call(a, r) && !o.hasOwnProperty(r) && (n[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === n[r] && (n[r] = a[r]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: i,
          props: n,
          _owner: d.current
        }
      }
      a.Fragment = n, a.jsx = c, a.jsxs = c
    },
    95240: (e, a, t) => {
      "use strict";
      e.exports = t(99576)
    },
    24: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        fbar: () => f,
        useAgegated: () => u
      });
      var r = t(42836),
        s = t(45792),
        n = t(51664),
        l = t(5516),
        d = t.n(l);
      const o = {
        agegate: "rockstargames-modules-core-videoplayerb564767f67a0f63737d816dcca714d49",
        inputs: "rockstargames-modules-core-videoplayerf33bd58bdfa63206fe9444fde46261d1",
        bg: "rockstargames-modules-core-videoplayerdb2f50238f9208ec72ef210e47b60e3b"
      };
      var c = t(95240);
      const i = (0, s.withTranslations)((e => {
          let {
            agegateValue: a,
            options: t = {},
            t: r
          } = e;
          const {
            mutateLSSettings: l
          } = (0, s.useRockstarWebLSSettings)(), [i, u] = (0, n.useState)(null), f = (0, n.createRef)(), g = (0, n.createRef)(), b = (0, n.createRef)(), {
            style: p
          } = t;
          return !1 === a ? (0, c.jsxs)("div", {
            className: o.agegate,
            style: p,
            children: [t?.header, (0, c.jsx)("h2", {
              children: r("agegate_fail")
            })]
          }) : null === a ? (0, c.jsxs)("div", {
            className: o.agegate,
            style: p,
            children: [t?.header, (0, c.jsx)("div", {
              className: o.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === i ? (0, c.jsx)("h5", {
              className: o.error,
              children: r("Please enter a valid age")
            }) : "", (0, c.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const a = `${b.current.value}-${f.current.value.padStart(2,0)}-${g.current.value.padStart(2,0)}`,
                  t = d()(a, "YYYY-MM-DD", !0).isValid();
                if (u(t), t) {
                  const e = d()().diff(a, "years");
                  l({
                    key: "agegatePass",
                    value: e >= 17
                  })
                }
              },
              children: [(0, c.jsx)("h5", {
                children: r("agegate_header")
              }), (0, c.jsxs)("div", {
                className: o.inputs,
                children: [(0, c.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [r("Month"), (0, c.jsx)("input", {
                    id: "monthInput",
                    ref: f,
                    placeholder: r("MM"),
                    maxLength: 2
                  })]
                }), (0, c.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [r("Day"), (0, c.jsx)("input", {
                    id: "dayInput",
                    ref: g,
                    placeholder: r("DD"),
                    maxLength: 2
                  })]
                }), (0, c.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [r("Year"), (0, c.jsx)("input", {
                    id: "yearInput",
                    ref: b,
                    className: o.year,
                    placeholder: r("YYYY"),
                    maxLength: 4
                  })]
                }), (0, c.jsx)("button", {
                  type: "submit",
                  className: o.submit,
                  children: r("SUBMIT")
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
            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = e?.agegatePass ?? null,
              l = a?.agegate_pass ?? n ?? null;
            return !l && t ? null : l ? r : (0, c.jsx)(i, {
              agegateValue: l,
              options: s
            })
          }
        },
        f = 12
    },
    37740: e => {
      function a(e) {
        var a = new Error("Cannot find module '" + e + "'");
        throw a.code = "MODULE_NOT_FOUND", a
      }
      a.keys = () => [], a.resolve = a, a.id = 37740, e.exports = a
    }
  }
]);