! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f232f693-eaf4-452e-9620-548d477dfa6d", e._sentryDebugIdIdentifier = "sentry-dbid-f232f693-eaf4-452e-9620-548d477dfa6d")
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
  [832], {
    24: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        fbar: () => f,
        useAgegated: () => u
      });
      var s = t(42836),
        d = t(45792),
        n = t(51664),
        r = t(5516),
        l = t.n(r);
      const o = {
        agegate: "rockstargames-sites-red-dead-redemption-2b564767f67a0f63737d816dcca714d49",
        inputs: "rockstargames-sites-red-dead-redemption-2f33bd58bdfa63206fe9444fde46261d1",
        bg: "rockstargames-sites-red-dead-redemption-2db2f50238f9208ec72ef210e47b60e3b"
      };
      var i = t(95240);
      const c = (0, d.withTranslations)((e => {
          let {
            agegateValue: a,
            options: t = {},
            t: s
          } = e;
          const {
            mutateLSSettings: r
          } = (0, d.useRockstarWebLSSettings)(), [c, u] = (0, n.useState)(null), f = (0, n.createRef)(), g = (0, n.createRef)(), b = (0, n.createRef)(), {
            style: p
          } = t;
          return !1 === a ? (0, i.jsxs)("div", {
            className: o.agegate,
            style: p,
            children: [t?.header, (0, i.jsx)("h2", {
              children: s("agegate_fail")
            })]
          }) : null === a ? (0, i.jsxs)("div", {
            className: o.agegate,
            style: p,
            children: [t?.header, (0, i.jsx)("div", {
              className: o.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === c ? (0, i.jsx)("h5", {
              className: o.error,
              children: s("Please enter a valid age")
            }) : "", (0, i.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const a = `${b.current.value}-${f.current.value.padStart(2,0)}-${g.current.value.padStart(2,0)}`,
                  t = l()(a, "YYYY-MM-DD", !0).isValid();
                if (u(t), t) {
                  const e = l()().diff(a, "years");
                  r({
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
            }), t?.footer]
          }) : null
        })),
        u = () => {
          const {
            lsSettings: e
          } = (0, d.useRockstarWebLSSettings)(), {
            data: a,
            loading: t
          } = (0, s.useRockstarUser)();
          return function(s) {
            let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = e?.agegatePass ?? null,
              r = a?.agegate_pass ?? n ?? null;
            return !r && t ? null : r ? s : (0, i.jsx)(c, {
              agegateValue: r,
              options: d
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