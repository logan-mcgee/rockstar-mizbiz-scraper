try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "234358cc-e150-4778-9ad8-ff496fc07037", e._sentryDebugIdIdentifier = "sentry-dbid-234358cc-e150-4778-9ad8-ff496fc07037")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3438], {
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
          c = {};
        return function e(n, i, l) {
          l = l || 1, Object.keys(n).forEach((function(d) {
            const u = n[d],
              f = r.safe && Array.isArray(u),
              p = Object.prototype.toString.call(u),
              m = t(u),
              y = "[object Object]" === p || "[object Array]" === p,
              b = i ? i + o + a(d) : a(d);
            if (!f && !m && y && Object.keys(u).length && (!r.maxDepth || l < s)) return e(u, b, l + 1);
            c[b] = u
          }))
        }(e), c
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(o, s) {
        const a = (s = s || {}).delimiter || ".",
          c = s.overwrite || !1,
          i = s.transformKey || n,
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
          const n = t.split(a).map(i);
          let r = d(n.shift()),
            u = d(n[0]),
            f = l;
          for (; void 0 !== u;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(f[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!c && !t && void 0 !== f[r]) return;
            (c && !t || !c && null == f[r]) && (f[r] = "number" != typeof u || s.object ? {} : []), f = f[r], n.length > 0 && (r = d(n.shift()), u = d(n[0]))
          }
          f[r] = e(o[t], s)
        })), l
      }
    },
    99747: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => j,
        TinaParser: () => k,
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
        s = n(16188),
        a = n.n(s);
      var c = n(95966);
      const i = (0, c.setContextItem)({
          context: (0, o.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: l
        } = i,
        d = ({
          children: e,
          components: t
        }) => (0, r.jsx)(l, {
          value: t,
          children: e
        }),
        u = () => (0, o.useContext)(i);
      var f = n(74767),
        p = n(90287),
        m = n.n(p),
        y = n(96130);
      const b = ({
        payload: e,
        variables: t
      }) => {
        const n = ((e, t) => {
            const n = {};
            return a().cloneDeepWith(e, ((e, r, o) => {
              r === t && e && (n[o.key] = e)
            })), n
          })(e, y.Qw),
          r = JSON.parse(JSON.stringify(a().merge(JSON.parse(JSON.stringify(n)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
          o = JSON.parse(JSON.stringify(e));
        return a().cloneDeepWith(o, ((e, t, n) => {
          (e => {
            if (!e || !a().has(e, "key") || e.translated) return;
            const t = r[e.key] ?? null;
            if (!t) return;
            const n = m()(t);
            Object.keys(n).map((t => {
              a().set(e, t, n[t])
            })), a().set(e, "translated", !0), Object.freeze(e)
          })(n)
        })), o
      };
      var g = n(11206),
        h = n(76070);
      const _ = {
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
          } = (0, h.h)(), {
            ref: a,
            scrollTracked: i
          } = (0, c.useScrollTracking)(e);
          return (0, o.useEffect)((() => {
            i && s({
              ..._,
              ...n
            })
          }), [i]), (0, r.jsx)("section", {
            ref: a,
            children: t
          })
        },
        w = ({
          impressionTracking: e,
          gtm: t = {},
          children: n
        }) => e?.shouldTrack ? (0, r.jsx)(j, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        O = ({
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
            const s = c => {
              let i = "";
              if (i = Array.isArray(c?.[y.ZH]) ? c[y.ZH].map((e => s(e))) : c?.[y.ZH] ?? "", !c?._template) return i;
              let l = c._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: c
              }), l = "gen9.Hero");
              const d = a().get(e, l) ?? null;
              if (!d) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, r.jsx)(w, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, r.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(d, {
                  impressionTracking: c?.impressionTracking,
                  gtm: {
                    ...c?.gtm,
                    whatever: 1
                  }
                }),
                f = [...c?.translations ?? []].reverse(),
                p = `componentProps_${(0,g.A)()}`;
              return (0, o.createElement)(u, {
                ...t?.meta,
                ...c,
                ...n,
                t: e => f.find((t => t?._key === e))?.value ?? e,
                key: p
              }, i)
            };
            return t?.[y.ZH]?.length ? s(t) : null
          })({
            components: e,
            payload: t,
            componentProps: n
          }))), [JSON.stringify(t)]);
          return s
        },
        k = ({
          tina: e,
          components: t = {},
          componentProps: n = {}
        }) => {
          const s = (0, f.i)(),
            [c, i] = (0, o.useState)(null),
            [l, p] = (0, o.useState)(null);
          (0, o.useEffect)((() => {
            e?.payload && i(e.payload), e?.variables && p(e.variables)
          }), [e]);
          const [m] = (0, o.useState)({
            ...t,
            ...u() ?? {}
          }), y = (({
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
            payload: c
          }), g = b({
            payload: c,
            variables: l
          });
          return (0, o.useMemo)((() => {
            if (!c) return null;
            const t = g,
              o = c?.meta?.prod ?? c?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              a = {
                ...c,
                meta: {
                  ...c?.meta ?? {},
                  prod: o
                }
              };
            return (0, r.jsx)(f.o, {
              payload: a,
              children: (0, r.jsx)(d, {
                components: m,
                children: (0, r.jsx)(O, {
                  payload: t,
                  components: m,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }), [s, c, JSON.stringify(y), JSON.stringify(g)])
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