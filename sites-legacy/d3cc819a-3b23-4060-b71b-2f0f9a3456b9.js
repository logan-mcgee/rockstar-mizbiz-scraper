try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d3cc819a-3b23-4060-b71b-2f0f9a3456b9", e._sentryDebugIdIdentifier = "sentry-dbid-d3cc819a-3b23-4060-b71b-2f0f9a3456b9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [2722], {
    24784: e => {
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
              p = r.safe && Array.isArray(u),
              f = Object.prototype.toString.call(u),
              y = t(u),
              m = "[object Object]" === f || "[object Array]" === f,
              b = c ? c + o + a(d) : a(d);
            if (!p && !y && m && Object.keys(u).length && (!r.maxDepth || l < s)) return e(u, b, l + 1);
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
            p = l;
          for (; void 0 !== u;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(p[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!i && !t && void 0 !== p[r]) return;
            (i && !t || !i && null == p[r]) && (p[r] = "number" != typeof u || s.object ? {} : []), p = p[r], n.length > 0 && (r = d(n.shift()), u = d(n[0]))
          }
          p[r] = e(o[t], s)
        })), l
      }
    },
    63516: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => _,
        TinaParser: () => w,
        TinaPayloadProvider: () => p.o,
        recursiveNestedTemplates: () => T,
        useGenerateCdnSource: () => v.jS,
        useGetCdnSource: () => v.C1,
        useImageParser: () => v.S1,
        useTinaComponents: () => u,
        useTinaPayload: () => p.i,
        useTranslations: () => b
      });
      var r = n(62229),
        o = n(4981),
        s = n.n(o);
      var a = n(95966),
        i = n(25854);
      const c = (0, a.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: l
        } = c,
        d = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, i.jsx)(l, {
            value: n,
            children: t
          })
        },
        u = () => (0, r.useContext)(c);
      var p = n(27538),
        f = n(24784),
        y = n.n(f),
        m = n(72041);
      const b = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const r = ((e, t) => {
            const n = {};
            return s().cloneDeepWith(e, ((e, r, o) => {
              r === t && e && (n[o.key] = e)
            })), n
          })(t, m.Qw),
          o = JSON.parse(JSON.stringify(s().merge(JSON.parse(JSON.stringify(r)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          a = JSON.parse(JSON.stringify(t));
        return s().cloneDeepWith(a, ((e, t, n) => {
          (e => {
            if (!e || !s().has(e, "key") || e.translated) return;
            const t = o[e.key] ?? null;
            if (!t) return;
            const n = y()(t);
            Object.keys(n).map((t => {
              s().set(e, t, n[t])
            })), s().set(e, "translated", !0), Object.freeze(e)
          })(n)
        })), a
      };
      var g = n(39311),
        h = n(2918);
      const j = {
          event: "page_section_impression",
          element_placement: null
        },
        _ = e => {
          let {
            threshold: t = .6,
            children: n,
            gtm: o = {}
          } = e;
          const {
            track: s
          } = (0, h.useGtmTrack)(), {
            ref: c,
            scrollTracked: l
          } = (0, a.useScrollTracking)(t);
          return (0, r.useEffect)((() => {
            l && s({
              ...j,
              ...o
            })
          }), [l]), (0, i.jsx)("section", {
            ref: c,
            children: n
          })
        },
        k = e => {
          let {
            impressionTracking: t,
            gtm: n = {},
            children: r
          } = e;
          return t?.shouldTrack ? (0, i.jsx)(_, {
            threshold: t?.threshold,
            gtm: n,
            children: r
          }) : r
        },
        O = e => {
          let {
            components: t,
            payload: n,
            componentProps: o = {}
          } = e;
          const a = (0, r.useMemo)((() => (s().cloneDeepWith(n, ((e, r) => {
            "_template" !== r || Number.isInteger(Number(e)) || s().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: n,
              componentProps: o
            } = e;
            const a = e => {
              let c = "";
              if (c = Array.isArray(e?.[m.ZH]) ? e[m.ZH].map((e => a(e))) : e?.[m.ZH] ?? "", !e?._template) return c;
              let l = e._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), l = "gen9.Hero");
              const d = s().get(t, l) ?? null;
              if (!d) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, i.jsx)(k, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, i.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(d, {
                  impressionTracking: e?.impressionTracking,
                  gtm: {
                    ...e?.gtm,
                    whatever: 1
                  }
                }),
                p = [...e?.translations ?? []].reverse(),
                f = `componentProps_${(0,g.A)()}`;
              return (0, r.createElement)(u, {
                ...n?.meta,
                ...e,
                ...o,
                t: e => p.find((t => t?._key === e))?.value ?? e,
                key: f
              }, c)
            };
            return n?.[m.ZH]?.length ? a(n) : null
          })({
            components: t,
            payload: n,
            componentProps: o
          }))), [JSON.stringify(n)]);
          return a
        },
        w = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: o = {}
          } = e;
          const a = (0, p.i)(),
            [c, l] = (0, r.useState)(null),
            [f, y] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            t?.payload && l(t.payload), t?.variables && y(t.variables)
          }), [t]);
          const [m] = (0, r.useState)({
            ...n,
            ...u() ?? {}
          }), g = (e => {
            let {
              payload: t
            } = e;
            const [n, o] = (0, r.useState)(t);
            return (0, r.useEffect)((() => {
              const e = s().debounce((() => {
                const e = JSON.parse(JSON.stringify(t));
                s().cloneDeepWith(e, ((e, t, n) => {
                  n?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const t = e.mediaQueryList.filter((e => {
                        let {
                          mediaQueryString: t
                        } = e;
                        return window.matchMedia(t).matches
                      })) ?? null,
                      n = Object.assign({}, ...t);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...n,
                      _template: e?._template
                    })
                  })(n)
                })), o(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [t]), n
          })({
            payload: c
          }), h = b({
            payload: c,
            variables: f
          });
          return (0, r.useMemo)((() => {
            if (!c) return null;
            const e = h,
              n = c?.meta?.prod ?? c?.meta?.cdn ?? a?.meta?.prod ?? a?.meta?.cdn ?? !1,
              r = {
                ...c,
                meta: {
                  ...c?.meta ?? {},
                  prod: n
                }
              };
            return (0, i.jsx)(p.o, {
              payload: r,
              children: (0, i.jsx)(d, {
                components: m,
                children: (0, i.jsx)(O, {
                  payload: e,
                  components: m,
                  componentProps: {
                    ...o,
                    tina: t
                  }
                })
              })
            })
          }), [a, c, JSON.stringify(g), JSON.stringify(h)])
        };
      var v = n(38558);
      const S = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...n
            };
          if (t > 0) {
            const s = S(e, t - 1, n, r);
            o = {
              ...o,
              ...r(e, {
                templates: s
              })
            }
          }
          return o
        },
        T = S
    }
  }
]);