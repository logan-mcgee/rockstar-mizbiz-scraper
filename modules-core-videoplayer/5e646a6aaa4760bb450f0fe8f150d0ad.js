! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8dc86cb8-b48a-45d8-beb8-35c8b903b423", e._sentryDebugIdIdentifier = "sentry-dbid-8dc86cb8-b48a-45d8-beb8-35c8b903b423")
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
  [832], {
    24: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        fbar: () => f,
        useAgegated: () => u
      });
      var s = t(42836),
        l = t(45792),
        r = t(51664),
        n = t(5516),
        d = t.n(n);
      const o = {
        agegate: "rockstargames-modules-core-videoplayerb564767f67a0f63737d816dcca714d49",
        inputs: "rockstargames-modules-core-videoplayerf33bd58bdfa63206fe9444fde46261d1",
        bg: "rockstargames-modules-core-videoplayerdb2f50238f9208ec72ef210e47b60e3b"
      };
      var c = t(95240);
      const i = (0, l.withTranslations)((e => {
          let {
            agegateValue: a,
            options: t = {},
            t: s
          } = e;
          const {
            mutateLSSettings: n
          } = (0, l.useRockstarWebLSSettings)(), [i, u] = (0, r.useState)(null), f = (0, r.createRef)(), g = (0, r.createRef)(), b = (0, r.createRef)(), {
            style: p
          } = t;
          return !1 === a ? (0, c.jsxs)("div", {
            className: o.agegate,
            style: p,
            children: [t?.header, (0, c.jsx)("h2", {
              children: s("agegate_fail")
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
              children: s("Please enter a valid age")
            }) : "", (0, c.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const a = `${b.current.value}-${f.current.value.padStart(2,0)}-${g.current.value.padStart(2,0)}`,
                  t = d()(a, "YYYY-MM-DD", !0).isValid();
                if (u(t), t) {
                  const e = d()().diff(a, "years");
                  n({
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
                    ref: f,
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
                    ref: b,
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
            }), t?.footer]
          }) : null
        })),
        u = () => {
          const {
            lsSettings: e
          } = (0, l.useRockstarWebLSSettings)(), {
            data: a,
            loading: t
          } = (0, s.useRockstarUser)();
          return function(s) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const r = e?.agegatePass ?? null,
              n = a?.agegate_pass ?? r ?? null;
            return !n && t ? null : n ? s : (0, c.jsx)(i, {
              agegateValue: n,
              options: l
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