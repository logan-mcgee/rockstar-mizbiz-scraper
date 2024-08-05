! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "59f16d4f-fa3c-4be8-9737-9aca4214c0a5", e._sentryDebugIdIdentifier = "sentry-dbid-59f16d4f-fa3c-4be8-9737-9aca4214c0a5")
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

      function c(e, a, t) {
        var r, n = {},
          c = null,
          i = null;
        for (r in void 0 !== t && (c = "" + t), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (i = a.ref), a) l.call(a, r) && !d.hasOwnProperty(r) && (n[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === n[r] && (n[r] = a[r]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: i,
          props: n,
          _owner: o.current
        }
      }
      a.Fragment = n, a.jsx = c, a.jsxs = c
    },
    6632: (e, a, t) => {
      "use strict";
      e.exports = t(6516)
    },
    33: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        fbar: () => u,
        useAgegated: () => f
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
      var c = t(6632);
      const i = (0, s.withTranslations)((e => {
          let {
            agegateValue: a,
            options: t = {},
            t: r
          } = e;
          const {
            mutateLSSettings: l
          } = (0, s.useRockstarWebLSSettings)(), [i, f] = (0, n.useState)(null), u = (0, n.createRef)(), g = (0, n.createRef)(), p = (0, n.createRef)(), {
            style: y
          } = t;
          return !1 === a ? (0, c.jsxs)("div", {
            className: d.agegate,
            style: y,
            children: [t?.header, (0, c.jsx)("h2", {
              children: r("agegate_fail")
            })]
          }) : null === a ? (0, c.jsxs)("div", {
            className: d.agegate,
            style: y,
            children: [t?.header, (0, c.jsx)("div", {
              className: d.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === i ? (0, c.jsx)("h5", {
              className: d.error,
              children: r("Please enter a valid age")
            }) : "", (0, c.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const a = `${p.current.value}-${u.current.value.padStart(2,0)}-${g.current.value.padStart(2,0)}`,
                  t = o()(a, "YYYY-MM-DD", !0).isValid();
                if (f(t), t) {
                  const e = o()().diff(a, "years");
                  l({
                    key: "agegatePass",
                    value: e >= 17
                  })
                }
              },
              children: [(0, c.jsx)("h5", {
                children: r("agegate_header")
              }), (0, c.jsxs)("div", {
                className: d.inputs,
                children: [(0, c.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [r("Month"), (0, c.jsx)("input", {
                    id: "monthInput",
                    ref: u,
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
                    ref: p,
                    className: d.year,
                    placeholder: r("YYYY"),
                    maxLength: 4
                  })]
                }), (0, c.jsx)("button", {
                  type: "submit",
                  className: d.submit,
                  children: r("SUBMIT")
                })]
              })]
            }), t?.footer]
          }) : null
        })),
        f = () => {
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
        u = 12
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