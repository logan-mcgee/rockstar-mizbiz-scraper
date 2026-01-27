try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d22ab17e-6e6c-49d8-8cab-acc2355c8823", e._sentryDebugIdIdentifier = "sentry-dbid-d22ab17e-6e6c-49d8-8cab-acc2355c8823")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
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
          a = r.maxDepth,
          s = r.transformKey || n,
          c = {};
        return function e(n, i, l) {
          l = l || 1, Object.keys(n).forEach(function(d) {
            const u = n[d],
              p = r.safe && Array.isArray(u),
              f = Object.prototype.toString.call(u),
              y = t(u),
              m = "[object Object]" === f || "[object Array]" === f,
              g = i ? i + o + s(d) : s(d);
            if (!p && !y && m && Object.keys(u).length && (!r.maxDepth || l < a)) return e(u, g, l + 1);
            c[g] = u
          })
        }(e), c
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(o, a) {
        const s = (a = a || {}).delimiter || ".",
          c = a.overwrite || !1,
          i = a.transformKey || n,
          l = {};
        if (t(o) || "[object Object]" !== Object.prototype.toString.call(o)) return o;

        function d(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || a.object ? e : t
        }
        return o = Object.keys(o).reduce(function(e, t) {
          const n = Object.prototype.toString.call(o[t]);
          return "[object Object]" !== n && "[object Array]" !== n || function(e) {
            const t = Object.prototype.toString.call(e),
              n = "[object Object]" === t;
            return !e || ("[object Array]" === t ? !e.length : n ? !Object.keys(e).length : void 0)
          }(o[t]) ? (e[t] = o[t], e) : function(e, t, n) {
            return Object.keys(n).reduce(function(t, r) {
              return t[e + s + r] = n[r], t
            }, t)
          }(t, e, r(o[t], a))
        }, {}), Object.keys(o).forEach(function(t) {
          const n = t.split(s).map(i);
          let r = d(n.shift()),
            u = d(n[0]),
            p = l;
          for (; void 0 !== u;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(p[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!c && !t && void 0 !== p[r]) return;
            (c && !t || !c && null == p[r]) && (p[r] = "number" != typeof u || a.object ? {} : []), p = p[r], n.length > 0 && (r = d(n.shift()), u = d(n[0]))
          }
          p[r] = e(o[t], a)
        }), l
      }
    },
    99747: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => _,
        TinaParser: () => w,
        TinaPayloadProvider: () => p.o,
        recursiveNestedTemplates: () => T,
        useGenerateCdnSource: () => S.jS,
        useGetCdnSource: () => S.C1,
        useImageParser: () => S.S1,
        useTinaComponents: () => u,
        useTinaPayload: () => p.i,
        useTranslations: () => g
      });
      var r = n(42295),
        o = n(62229),
        a = n(15076),
        s = n.n(a);
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
      var p = n(74767),
        f = n(90287),
        y = n.n(f),
        m = n(12323);
      const g = ({
        payload: e,
        variables: t
      }) => {
        const n = ((e, t) => {
            const n = {};
            return s().cloneDeepWith(e, (e, r, o) => {
              r === t && e && (n[o.key] = e)
            }), n
          })(e, m.Qw),
          r = JSON.parse(JSON.stringify(s().merge(JSON.parse(JSON.stringify(n)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
          o = JSON.parse(JSON.stringify(e));
        return s().cloneDeepWith(o, (e, t, n) => {
          (e => {
            if (!e || !s().has(e, "key") || e.translated) return;
            const t = r[e.key] ?? null;
            if (!t) return;
            const n = y()(t);
            Object.keys(n).map(t => {
              s().set(e, t, n[t])
            }), s().set(e, "translated", !0), Object.freeze(e)
          })(n)
        }), o
      };
      var b = n(11206),
        h = n(2918);
      const j = {
          event: "page_section_impression",
          element_placement: null
        },
        _ = ({
          threshold: e = .6,
          children: t,
          gtm: n = {}
        }) => {
          const {
            track: a
          } = (0, h.useGtmTrack)(), {
            ref: s,
            scrollTracked: i
          } = (0, c.useScrollTracking)(e);
          return (0, o.useEffect)(() => {
            i && a({
              ...j,
              ...n
            })
          }, [i]), (0, r.jsx)("section", {
            ref: s,
            children: t
          })
        },
        k = ({
          impressionTracking: e,
          gtm: t = {},
          children: n
        }) => e?.shouldTrack ? (0, r.jsx)(_, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        O = ({
          components: e,
          payload: t,
          componentProps: n = {}
        }) => {
          const a = (0, o.useMemo)(() => (s().cloneDeepWith(t, (n, r) => {
            "_template" !== r || Number.isInteger(Number(n)) || s().get(e, n) || (console.error(`TinaParser:useComponentRenderer: Component ${n} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", e))
          }), (({
            components: e,
            payload: t,
            componentProps: n
          }) => {
            const a = c => {
              let i = "";
              if (i = Array.isArray(c?.[m.ZH]) ? c[m.ZH].map(e => a(e)) : c?.[m.ZH] ?? "", !c?._template) return i;
              let l = c._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: c
              }), l = "gen9.Hero");
              const d = s().get(e, l) ?? null;
              if (!d) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, r.jsx)(k, {
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
                p = [...c?.translations ?? []].reverse(),
                f = `componentProps_${(0,b.A)()}`;
              return (0, o.createElement)(u, {
                ...t?.meta,
                ...c,
                ...n,
                t: e => p.find(t => t?._key === e)?.value ?? e,
                key: f
              }, i)
            };
            return t?.[m.ZH]?.length ? a(t) : null
          })({
            components: e,
            payload: t,
            componentProps: n
          })), [JSON.stringify(t)]);
          return a
        },
        w = ({
          tina: e,
          components: t = {},
          componentProps: n = {}
        }) => {
          const a = (0, p.i)(),
            [c, i] = (0, o.useState)(null),
            [l, f] = (0, o.useState)(null);
          (0, o.useEffect)(() => {
            e?.payload && i(e.payload), e?.variables && f(e.variables)
          }, [e]);
          const [y] = (0, o.useState)({
            ...t,
            ...u() ?? {}
          }), m = (({
            payload: e
          }) => {
            const [t, n] = (0, o.useState)(e);
            return (0, o.useEffect)(() => {
              const t = s().debounce(() => {
                const t = JSON.parse(JSON.stringify(e));
                s().cloneDeepWith(t, (e, t, n) => {
                  n?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const t = e.mediaQueryList.filter(({
                        mediaQueryString: e
                      }) => window.matchMedia(e).matches) ?? null,
                      n = Object.assign({}, ...t);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...n,
                      _template: e?._template
                    })
                  })(n)
                }), n(t)
              }, 250);
              return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
            }, [e]), t
          })({
            payload: c
          }), b = g({
            payload: c,
            variables: l
          });
          return (0, o.useMemo)(() => {
            if (!c) return null;
            const t = b,
              o = c?.meta?.prod ?? c?.meta?.cdn ?? a?.meta?.prod ?? a?.meta?.cdn ?? !1,
              s = {
                ...c,
                meta: {
                  ...c?.meta ?? {},
                  prod: o
                }
              };
            return (0, r.jsx)(p.o, {
              payload: s,
              children: (0, r.jsx)(d, {
                components: y,
                children: (0, r.jsx)(O, {
                  payload: t,
                  components: y,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }, [a, c, JSON.stringify(m), JSON.stringify(b)])
        };
      var S = n(34725);
      const v = (e = "", t = 0, n = {}, r = () => {}) => {
          let o = {
            ...n
          };
          if (t > 0) {
            const a = v(e, t - 1, n, r);
            o = {
              ...o,
              ...r(e, {
                templates: a
              })
            }
          }
          return o
        },
        T = v
    }
  }
]);