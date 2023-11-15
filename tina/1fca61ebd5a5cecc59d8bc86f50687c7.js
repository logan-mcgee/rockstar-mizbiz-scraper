(self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [60, 853, 627], {
    947: e => {
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
          l = l || 1, Object.keys(n).forEach((function(u) {
            const p = n[u],
              d = r.safe && Array.isArray(p),
              f = Object.prototype.toString.call(p),
              m = t(p),
              y = "[object Object]" === f || "[object Array]" === f,
              b = i ? i + o + a(u) : a(u);
            if (!d && !m && y && Object.keys(p).length && (!r.maxDepth || l < s)) return e(p, b, l + 1);
            c[b] = p
          }))
        }(e), c
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(o, s) {
        const a = (s = s || {}).delimiter || ".",
          c = s.overwrite || !1,
          i = s.transformKey || n,
          l = {};
        if (t(o) || "[object Object]" !== Object.prototype.toString.call(o)) return o;

        function u(e) {
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
          let r = u(n.shift()),
            p = u(n[0]),
            d = l;
          for (; void 0 !== p;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(d[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!c && !t && void 0 !== d[r]) return;
            (c && !t || !c && null == d[r]) && (d[r] = "number" != typeof p || s.object ? {} : []), d = d[r], n.length > 0 && (r = u(n.shift()), p = u(n[0]))
          }
          d[r] = e(o[t], s)
        })), l
      }
    },
    42: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => r
      });
      const r = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      }
    },
    853: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        patch: () => s,
        pick: () => a
      });
      var r = n(370),
        o = n.n(r);
      const s = (e, t) => {
          const n = o().cloneDeepWith(n, ((e, n, r) => {
            o().keys(t).map((s => {
              "key" === n && e === s && o().keys(t[s]).map((e => {
                r[e] = t[s][e]
              }))
            }))
          }));
          return n
        },
        a = (e, t) => {
          const n = {};
          return o().cloneDeepWith(e, ((e, r, o) => {
            r === t && e && (n[o.key] = e)
          })), n
        }
    },
    568: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => o
      });
      const r = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            s = {
              ...n
            };
          if (t > 0) {
            const a = r(e, t - 1, n, o);
            s = {
              ...s,
              ...o(e, {
                templates: a
              })
            }
          }
          return s
        },
        o = r
    },
    362: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        TinaParser: () => h,
        TinaPayloadProvider: () => m.d,
        classList: () => r.Z,
        recursiveNestedTemplates: () => o.Z,
        useGenerateCdnSource: () => s.useGenerateCdnSource,
        useGetCdnSource: () => s.useGetCdnSource,
        useImageParser: () => s.useImageParser,
        useTinaComponents: () => f,
        useTinaPayload: () => m.I,
        useTranslations: () => S
      });
      var r = n(42),
        o = n(568),
        s = n(872),
        a = n(927),
        c = n(370),
        i = n.n(c);
      var l = n(705);
      const u = (0, a.createContext)(),
        {
          Provider: p
        } = u,
        d = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, l.jsx)(p, {
            value: n,
            children: t
          })
        },
        f = () => (0, a.useContext)(u);
      var m = n(879),
        y = n(947),
        b = n.n(y),
        g = n(853),
        O = n(676);
      const S = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const [r, o] = (0, a.useState)(t), [s, c] = (0, a.useState)(n);
        return (0, a.useEffect)((() => {
          const e = (0, g.pick)(t, O.TINA_MEMOQ_PREFIX),
            r = JSON.parse(JSON.stringify(i().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(n?.keys ?? {})))));
          c(r)
        }), [JSON.stringify(t), n]), (0, a.useEffect)((() => {
          const e = JSON.parse(JSON.stringify(t)),
            n = JSON.parse(JSON.stringify(s));
          i().cloneDeepWith(e, ((e, t, r) => {
            (e => {
              let {
                item: t,
                variableKey: r
              } = e;
              if (!t || !i().has(t, "key") || t.translated) return;
              const o = n[t.key] ?? null;
              if (!o) return;
              const s = b()(o);
              Object.keys(s).map((e => {
                i().set(t, e, s[e])
              })), i().set(t, "translated", !0), Object.freeze(t)
            })({
              item: r,
              variableKey: e
            })
          })), o(e)
        }), [JSON.stringify(t), JSON.stringify(s)]), r
      };
      var _ = n(61);
      const j = e => {
          let {
            components: t,
            payload: n,
            componentProps: r = {}
          } = e;
          const o = (0, a.useMemo)((() => (i().cloneDeepWith(n, ((e, r) => {
            "_template" !== r || Number.isInteger(Number(e)) || i().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: n,
              componentProps: r
            } = e;
            const o = e => {
              let s = "";
              if (s = Array.isArray(e?.[O.TINA_PARSER_KEY]) ? e[O.TINA_PARSER_KEY].map((e => o(e))) : e?.[O.TINA_PARSER_KEY] ?? "", !e?._template) return s;
              let c = i().get(t, e?._template) ?? null;
              "0" === e?._template && (console.warn(`The _template "${e?._template}" wasn't found in the available components. The _template "${e?._template}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), c = i().get(t, "gen9.Hero") ?? null);
              const l = [...e?.translations ?? []].reverse(),
                u = `componentProps_${(0,_.Z)()}`;
              return (0, a.createElement)(c, {
                ...n?.meta,
                ...e,
                ...r,
                t: e => l.find((t => t?._key === e))?.value ?? e,
                key: u
              }, s)
            };
            return n?.[O.TINA_PARSER_KEY]?.length ? o(n) : null
          })({
            components: t,
            payload: n,
            componentProps: r
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return o
        },
        h = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: r = {}
          } = e;
          const o = (0, m.I)(),
            [s, c] = (0, a.useState)(null),
            [u, p] = (0, a.useState)(null);
          (0, a.useEffect)((() => {
            t?.payload && c(t.payload), t?.variables && p(t.variables)
          }), [t]);
          const [y] = (0, a.useState)({
            ...n,
            ...f() ?? {}
          }), b = (e => {
            let {
              payload: t
            } = e;
            const [n, r] = (0, a.useState)(t);
            return (0, a.useEffect)((() => {
              const e = i().debounce((() => {
                const e = JSON.parse(JSON.stringify(t));
                i().cloneDeepWith(e, ((e, t, n) => {
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
                })), r(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [t]), n
          })({
            payload: s
          }), g = S({
            payload: s,
            variables: u
          });
          return (0, a.useMemo)((() => {
            if (!s) return null;
            const e = g,
              n = s?.meta?.prod ?? s?.meta?.cdn ?? o?.meta?.prod ?? o?.meta?.cdn ?? !1,
              a = {
                ...s,
                meta: {
                  ...s?.meta ?? {},
                  prod: n
                }
              };
            return (0, l.jsx)(m.d, {
              payload: a,
              children: (0, l.jsx)(d, {
                components: y,
                children: (0, l.jsx)(j, {
                  payload: e,
                  components: y,
                  componentProps: {
                    ...r,
                    tina: t
                  }
                })
              })
            })
          }), [o, s, JSON.stringify(b), JSON.stringify(g)])
        }
    }
  }
]);