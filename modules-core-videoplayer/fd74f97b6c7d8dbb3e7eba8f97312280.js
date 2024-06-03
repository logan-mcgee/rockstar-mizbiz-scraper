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
        o = t.n(l);
      const d = {
        agegate: "rockstargames-modules-core-videoplayerb564767f67a0f63737d816dcca714d49",
        inputs: "rockstargames-modules-core-videoplayerf33bd58bdfa63206fe9444fde46261d1",
        bg: "rockstargames-modules-core-videoplayerdb2f50238f9208ec72ef210e47b60e3b"
      };
      var i = t(95240);
      const c = (0, s.withTranslations)((e => {
          let {
            agegateValue: a,
            options: t = {},
            t: r
          } = e;
          const {
            mutateLSSettings: l
          } = (0, s.useRockstarWebLSSettings)(), [c, u] = (0, n.useState)(null), f = (0, n.createRef)(), g = (0, n.createRef)(), b = (0, n.createRef)(), {
            style: p
          } = t;
          return !1 === a ? (0, i.jsxs)("div", {
            className: d.agegate,
            style: p,
            children: [t?.header, (0, i.jsx)("h2", {
              children: r("agegate_fail")
            })]
          }) : null === a ? (0, i.jsxs)("div", {
            className: d.agegate,
            style: p,
            children: [t?.header, (0, i.jsx)("div", {
              className: d.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === c ? (0, i.jsx)("h5", {
              className: d.error,
              children: r("Please enter a valid age")
            }) : "", (0, i.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const a = `${b.current.value}-${f.current.value.padStart(2,0)}-${g.current.value.padStart(2,0)}`,
                  t = o()(a, "YYYY-MM-DD", !0).isValid();
                if (u(t), t) {
                  const e = o()().diff(a, "years");
                  l({
                    key: "agegatePass",
                    value: e >= 17
                  })
                }
              },
              children: [(0, i.jsx)("h5", {
                children: r("agegate_header")
              }), (0, i.jsxs)("div", {
                className: d.inputs,
                children: [(0, i.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [r("Month"), (0, i.jsx)("input", {
                    id: "monthInput",
                    ref: f,
                    placeholder: r("MM"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [r("Day"), (0, i.jsx)("input", {
                    id: "dayInput",
                    ref: g,
                    placeholder: r("DD"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [r("Year"), (0, i.jsx)("input", {
                    id: "yearInput",
                    ref: b,
                    className: d.year,
                    placeholder: r("YYYY"),
                    maxLength: 4
                  })]
                }), (0, i.jsx)("button", {
                  type: "submit",
                  className: d.submit,
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
            return !l && t ? null : l ? r : (0, i.jsx)(c, {
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