try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6bb2591c-7471-484d-b49d-74c7f3a7b7b5", e._sentryDebugIdIdentifier = "sentry-dbid-6bb2591c-7471-484d-b49d-74c7f3a7b7b5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [1057, 3438], {
    42295: (e, t, n) => {
      "use strict";
      e.exports = n(69245)
    },
    69245: (e, t, n) => {
      "use strict";
      var r = n(62229),
        o = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var r, s = {},
          l = null,
          d = null;
        for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) a.call(t, r) && !c.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: d,
          props: s,
          _owner: i.current
        }
      }
      t.Fragment = s, t.jsx = l, t.jsxs = l
    },
    90287: e => {
      function t(e) {
        return e && e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
      }

      function n(e) {
        return e
      }

      function r(e, r) {
        const o = (r = r || {}).delimiter || ".",
          s = r.maxDepth,
          a = r.transformKey || n,
          i = {};
        return function e(n, c, l) {
          l = l || 1, Object.keys(n).forEach((function(d) {
            const u = n[d],
              f = r.safe && Array.isArray(u),
              p = Object.prototype.toString.call(u),
              y = t(u),
              m = "[object Object]" === p || "[object Array]" === p,
              b = c ? c + o + a(d) : a(d);
            if (!f && !y && m && Object.keys(u).length && (!r.maxDepth || l < s)) return e(u, b, l + 1);
            i[b] = u
          }))
        }(e), i
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(o, s) {
        const a = (s = s || {}).delimiter || ".",
          i = s.overwrite || !1,
          c = s.transformKey || n,
          l = {};
        if (t(o) || "[object Object]" !== Object.prototype.toString.call(o)) return o;

        function d(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || s.object ? e : t
        }
        return o = Object.keys(o).reduce((function(e, t) {
          const n = Object.prototype.toString.call(o[t]);
          return "[object Object]" !== n && "[object Array]" !== n || function(e) {
            const t = Object.prototype.toString.call(e),
              n = "[object Object]" === t;
            return !e || ("[object Array]" === t ? !e.length : n ? !Object.keys(e).length : void 0)
          }(o[t]) ? (e[t] = o[t], e) : function(e, t, n) {
            return Object.keys(n).reduce((function(t, r) {
              return t[e + a + r] = n[r], t
            }), t)
          }(t, e, r(o[t], s))
        }), {}), Object.keys(o).forEach((function(t) {
          const n = t.split(a).map(c);
          let r = d(n.shift()),
            u = d(n[0]),
            f = l;
          for (; void 0 !== u;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(f[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!i && !t && void 0 !== f[r]) return;
            (i && !t || !i && null == f[r]) && (f[r] = "number" != typeof u || s.object ? {} : []), f = f[r], n.length > 0 && (r = d(n.shift()), u = d(n[0]))
          }
          f[r] = e(o[t], s)
        })), l
      }
    },
    99747: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => j,
        TinaParser: () => w,
        TinaPayloadProvider: () => f.o,
        recursiveNestedTemplates: () => T,
        useGenerateCdnSource: () => S.jS,
        useGetCdnSource: () => S.C1,
        useImageParser: () => S.S1,
        useTinaComponents: () => u,
        useTinaPayload: () => f.i,
        useTranslations: () => b
      });
      var r = n(42295),
        o = n(62229),
        s = n(15076),
        a = n.n(s);
      var i = n(95966);
      const c = (0, i.setContextItem)({
          context: (0, o.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: l
        } = c,
        d = ({
          children: e,
          components: t
        }) => (0, r.jsx)(l, {
          value: t,
          children: e
        }),
        u = () => (0, o.useContext)(c);
      var f = n(74767),
        p = n(90287),
        y = n.n(p),
        m = n(12323);
      const b = ({
        payload: e,
        variables: t
      }) => {
        const n = ((e, t) => {
            const n = {};
            return a().cloneDeepWith(e, ((e, r, o) => {
              r === t && e && (n[o.key] = e)
            })), n
          })(e, m.Qw),
          r = JSON.parse(JSON.stringify(a().merge(JSON.parse(JSON.stringify(n)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
          o = JSON.parse(JSON.stringify(e));
        return a().cloneDeepWith(o, ((e, t, n) => {
          (e => {
            if (!e || !a().has(e, "key") || e.translated) return;
            const t = r[e.key] ?? null;
            if (!t) return;
            const n = y()(t);
            Object.keys(n).map((t => {
              a().set(e, t, n[t])
            })), a().set(e, "translated", !0), Object.freeze(e)
          })(n)
        })), o
      };
      var g = n(11206),
        _ = n(2918);
      const h = {
          event: "page_section_impression",
          element_placement: null
        },
        j = ({
          threshold: e = .6,
          children: t,
          gtm: n = {}
        }) => {
          const {
            track: s
          } = (0, _.useGtmTrack)(), {
            ref: a,
            scrollTracked: c
          } = (0, i.useScrollTracking)(e);
          return (0, o.useEffect)((() => {
            c && s({
              ...h,
              ...n
            })
          }), [c]), (0, r.jsx)("section", {
            ref: a,
            children: t
          })
        },
        O = ({
          impressionTracking: e,
          gtm: t = {},
          children: n
        }) => e?.shouldTrack ? (0, r.jsx)(j, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        k = ({
          components: e,
          payload: t,
          componentProps: n = {}
        }) => {
          const s = (0, o.useMemo)((() => (a().cloneDeepWith(t, ((n, r) => {
            "_template" !== r || Number.isInteger(Number(n)) || a().get(e, n) || (console.error(`TinaParser:useComponentRenderer: Component ${n} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", e))
          })), (({
            components: e,
            payload: t,
            componentProps: n
          }) => {
            const s = i => {
              let c = "";
              if (c = Array.isArray(i?.[m.ZH]) ? i[m.ZH].map((e => s(e))) : i?.[m.ZH] ?? "", !i?._template) return c;
              let l = i._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: i
              }), l = "gen9.Hero");
              const d = a().get(e, l) ?? null;
              if (!d) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, r.jsx)(O, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, r.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(d, {
                  impressionTracking: i?.impressionTracking,
                  gtm: {
                    ...i?.gtm,
                    whatever: 1
                  }
                }),
                f = [...i?.translations ?? []].reverse(),
                p = `componentProps_${(0,g.A)()}`;
              return (0, o.createElement)(u, {
                ...t?.meta,
                ...i,
                ...n,
                t: e => f.find((t => t?._key === e))?.value ?? e,
                key: p
              }, c)
            };
            return t?.[m.ZH]?.length ? s(t) : null
          })({
            components: e,
            payload: t,
            componentProps: n
          }))), [JSON.stringify(t)]);
          return s
        },
        w = ({
          tina: e,
          components: t = {},
          componentProps: n = {}
        }) => {
          const s = (0, f.i)(),
            [i, c] = (0, o.useState)(null),
            [l, p] = (0, o.useState)(null);
          (0, o.useEffect)((() => {
            e?.payload && c(e.payload), e?.variables && p(e.variables)
          }), [e]);
          const [y] = (0, o.useState)({
            ...t,
            ...u() ?? {}
          }), m = (({
            payload: e
          }) => {
            const [t, n] = (0, o.useState)(e);
            return (0, o.useEffect)((() => {
              const t = a().debounce((() => {
                const t = JSON.parse(JSON.stringify(e));
                a().cloneDeepWith(t, ((e, t, n) => {
                  n?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const t = e.mediaQueryList.filter((({
                        mediaQueryString: e
                      }) => window.matchMedia(e).matches)) ?? null,
                      n = Object.assign({}, ...t);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...n,
                      _template: e?._template
                    })
                  })(n)
                })), n(t)
              }), 250);
              return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
            }), [e]), t
          })({
            payload: i
          }), g = b({
            payload: i,
            variables: l
          });
          return (0, o.useMemo)((() => {
            if (!i) return null;
            const t = g,
              o = i?.meta?.prod ?? i?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              a = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: o
                }
              };
            return (0, r.jsx)(f.o, {
              payload: a,
              children: (0, r.jsx)(d, {
                components: y,
                children: (0, r.jsx)(k, {
                  payload: t,
                  components: y,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }), [s, i, JSON.stringify(m), JSON.stringify(g)])
        };
      var S = n(34725);
      const v = (e = "", t = 0, n = {}, r = () => {}) => {
          let o = {
            ...n
          };
          if (t > 0) {
            const s = v(e, t - 1, n, r);
            o = {
              ...o,
              ...r(e, {
                templates: s
              })
            }
          }
          return o
        },
        T = v
    }
  }
]);