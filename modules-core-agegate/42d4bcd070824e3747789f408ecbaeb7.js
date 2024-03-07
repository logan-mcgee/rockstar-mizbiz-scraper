/*! For license information please see 42d4bcd070824e3747789f408ecbaeb7.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3868933f-d6be-4916-b34f-8d14e3d64ebc", e._sentryDebugIdIdentifier = "sentry-dbid-3868933f-d6be-4916-b34f-8d14e3d64ebc")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/modules-core-agegate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_modules_core_agegate = self.webpackChunk_rockstargames_modules_core_agegate || []).push([
  [520], {
    996: (e, a, t) => {
      var s = t(200),
        r = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        l = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function o(e, a, t) {
        var s, o = {},
          c = null,
          u = null;
        for (s in void 0 !== t && (c = "" + t), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (u = a.ref), a) n.call(a, s) && !d.hasOwnProperty(s) && (o[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === o[s] && (o[s] = a[s]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: u,
          props: o,
          _owner: l.current
        }
      }
      a.jsx = o, a.jsxs = o
    },
    480: (e, a, t) => {
      e.exports = t(996)
    },
    520: (e, a, t) => {
      t.r(a), t.d(a, {
        fbar: () => f,
        useAgegated: () => g
      });
      var s = t(836),
        r = t(792),
        n = t(200),
        l = t(708),
        d = t.n(l);
      const o = {
        agegate: "rockstargames-modules-core-agegatec39defb542dc4e5ef231dbb5cde104dc",
        inputs: "rockstargames-modules-core-agegatef8405e61173c4c88818c181a18449963",
        bg: "rockstargames-modules-core-agegated241eb8a1bb208791acde5d536c7e295"
      };
      var c = t(480);
      const u = (0, r.withTranslations)((e => {
          let {
            agegateValue: a,
            options: t = {},
            t: s
          } = e;
          const {
            mutateLSSettings: l
          } = (0, r.useRockstarWebLSSettings)(), [u, g] = (0, n.useState)(null), f = (0, n.createRef)(), i = (0, n.createRef)(), b = (0, n.createRef)(), {
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
            }), !1 === u ? (0, c.jsx)("h5", {
              className: o.error,
              children: s("Please enter a valid age")
            }) : "", (0, c.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const a = `${b.current.value}-${f.current.value.padStart(2,0)}-${i.current.value.padStart(2,0)}`,
                  t = d()(a, "YYYY-MM-DD", !0).isValid();
                if (g(t), t) {
                  const e = d()().diff(a, "years");
                  l({
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
                    ref: i,
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
        g = () => {
          const {
            lsSettings: e
          } = (0, r.useRockstarWebLSSettings)(), {
            data: a,
            loading: t
          } = (0, s.useRockstarUser)();
          return function(s) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = e?.agegatePass ?? null,
              l = a?.agegate_pass ?? n ?? null;
            return !l && t ? null : l ? s : (0, c.jsx)(u, {
              agegateValue: l,
              options: r
            })
          }
        },
        f = 12
    }
  }
]);
//# sourceMappingURL=42d4bcd070824e3747789f408ecbaeb7.js.map