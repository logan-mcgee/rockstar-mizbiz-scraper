! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "75fefeff-3dbe-40da-a7a7-100cafade71a", e._sentryDebugIdIdentifier = "sentry-dbid-75fefeff-3dbe-40da-a7a7-100cafade71a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-agegate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_agegate = self.webpackChunk_rockstargames_modules_core_agegate || []).push([
  [864], {
    576: (e, a, t) => {
      var s = t(664),
        r = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        l = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, a, t) {
        var s, d = {},
          c = null,
          f = null;
        for (s in void 0 !== t && (c = "" + t), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (f = a.ref), a) n.call(a, s) && !o.hasOwnProperty(s) && (d[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === d[s] && (d[s] = a[s]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: f,
          props: d,
          _owner: l.current
        }
      }
      a.jsx = d, a.jsxs = d
    },
    240: (e, a, t) => {
      e.exports = t(576)
    },
    864: (e, a, t) => {
      t.r(a), t.d(a, {
        fbar: () => g,
        useAgegated: () => u
      });
      var s = t(836),
        r = t(792),
        n = t(664),
        l = t(708),
        o = t.n(l);
      const d = {
        agegate: "rockstargames-modules-core-agegatec39defb542dc4e5ef231dbb5cde104dc",
        inputs: "rockstargames-modules-core-agegatef8405e61173c4c88818c181a18449963",
        bg: "rockstargames-modules-core-agegated241eb8a1bb208791acde5d536c7e295"
      };
      var c = t(240);
      const f = (0, r.withTranslations)((e => {
          let {
            agegateValue: a,
            options: t = {},
            t: s
          } = e;
          const {
            mutateLSSettings: l
          } = (0, r.useRockstarWebLSSettings)(), [f, u] = (0, n.useState)(null), g = (0, n.createRef)(), i = (0, n.createRef)(), b = (0, n.createRef)(), {
            style: p
          } = t;
          return !1 === a ? (0, c.jsxs)("div", {
            className: d.agegate,
            style: p,
            children: [t?.header, (0, c.jsx)("h2", {
              children: s("agegate_fail")
            })]
          }) : null === a ? (0, c.jsxs)("div", {
            className: d.agegate,
            style: p,
            children: [t?.header, (0, c.jsx)("div", {
              className: d.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === f ? (0, c.jsx)("h5", {
              className: d.error,
              children: s("Please enter a valid age")
            }) : "", (0, c.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const a = `${b.current.value}-${g.current.value.padStart(2,0)}-${i.current.value.padStart(2,0)}`,
                  t = o()(a, "YYYY-MM-DD", !0).isValid();
                if (u(t), t) {
                  const e = o()().diff(a, "years");
                  l({
                    key: "agegatePass",
                    value: e >= 17
                  })
                }
              },
              children: [(0, c.jsx)("h5", {
                children: s("agegate_header")
              }), (0, c.jsxs)("div", {
                className: d.inputs,
                children: [(0, c.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [s("Month"), (0, c.jsx)("input", {
                    id: "monthInput",
                    ref: g,
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
                    className: d.year,
                    placeholder: s("YYYY"),
                    maxLength: 4
                  })]
                }), (0, c.jsx)("button", {
                  type: "submit",
                  className: d.submit,
                  children: s("SUBMIT")
                })]
              })]
            }), t?.footer]
          }) : null
        })),
        u = () => {
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
            return !l && t ? null : l ? s : (0, c.jsx)(f, {
              agegateValue: l,
              options: r
            })
          }
        },
        g = 12
    }
  }
]);