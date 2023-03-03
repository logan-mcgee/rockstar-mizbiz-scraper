(self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [32, 823, 142], {
    460: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => r
      });
      const r = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      }
    },
    823: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        patch: () => s,
        pick: () => a
      });
      var r = n(735),
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
    129: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        TinaParser: () => _,
        classList: () => r.Z,
        useGetCdnSource: () => o.useGetCdnSource,
        useImageParser: () => o.useImageParser,
        useTinaComponents: () => f,
        useTinaPayload: () => y.I,
        useTranslations: () => g
      });
      var r = n(460),
        o = n(907),
        s = n(822),
        a = n(735),
        c = n.n(a);
      var i = n(668);
      const l = (0, s.createContext)(),
        {
          Provider: u
        } = l,
        p = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, i.jsx)(u, {
            value: n,
            children: t
          })
        },
        f = () => (0, s.useContext)(l);
      var y = n(858),
        m = n(391),
        d = n.n(m),
        b = n(823),
        O = n(73);
      const g = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const [r, o] = (0, s.useState)(t), [a, i] = (0, s.useState)(n);
        return (0, s.useEffect)((() => {
          const e = (0, b.pick)(t, O.TINA_MEMOQ_PREFIX),
            r = JSON.parse(JSON.stringify(c().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(n?.keys ?? {})))));
          i(r)
        }), [JSON.stringify(t), n]), (0, s.useEffect)((() => {
          const e = JSON.parse(JSON.stringify(t)),
            n = JSON.parse(JSON.stringify(a));
          c().cloneDeepWith(e, ((e, t, r) => {
            (e => {
              let {
                item: t,
                variableKey: r
              } = e;
              if (!t || !c().has(t, "key") || t.translated) return;
              const o = n[t.key] ?? null;
              if (!o) return;
              const s = d()(o);
              Object.keys(s).map((e => {
                c().set(t, e, s[e])
              })), c().set(t, "translated", !0), Object.freeze(t)
            })({
              item: r,
              variableKey: e
            })
          })), o(e)
        }), [JSON.stringify(t), JSON.stringify(a)]), r
      };
      var j = n(874);
      const S = e => {
          let {
            components: t,
            payload: n,
            componentProps: r = {}
          } = e;
          const o = (0, s.useMemo)((() => (c().cloneDeepWith(n, ((e, r) => {
            "_template" !== r || Number.isInteger(Number(e)) || c().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: n,
              componentProps: r
            } = e;
            const o = e => {
              let a = "";
              if (a = Array.isArray(e?.[O.TINA_PARSER_KEY]) ? e[O.TINA_PARSER_KEY].map((e => o(e))) : e?.[O.TINA_PARSER_KEY] ?? "", !e?._template) return a;
              const i = c().get(t, e?._template) ?? null,
                l = [...e?.translations ?? []].reverse(),
                u = `componentProps_${(0,j.Z)()}`,
                p = (0, s.createElement)(i, {
                  ...n?.meta,
                  ...e,
                  ...r,
                  t: e => l.find((t => t?._key === e))?.value ?? e,
                  key: u
                }, a);
              return n?.meta?.animateIn, p
            };
            return n?.[O.TINA_PARSER_KEY]?.length ? o(n) : null
          })({
            components: t,
            payload: n,
            componentProps: r
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return o
        },
        _ = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: r = {}
          } = e;
          const o = (0, y.I)(),
            [a, l] = (0, s.useState)(null),
            [u, m] = (0, s.useState)(null);
          (0, s.useEffect)((() => {
            t?.payload && l(t.payload), t?.variables && m(t.variables)
          }), [t]);
          const [d] = (0, s.useState)({
            ...n,
            ...f() ?? {}
          }), b = (e => {
            let {
              payload: t
            } = e;
            const [n, r] = (0, s.useState)(t);
            return (0, s.useEffect)((() => {
              const e = c().debounce((() => {
                const e = JSON.parse(JSON.stringify(t));
                c().cloneDeepWith(e, ((e, t, n) => {
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
            payload: a
          }), O = g({
            payload: a,
            variables: u
          });
          return (0, s.useMemo)((() => {
            if (!a) return null;
            const e = O,
              n = a?.meta?.prod ?? a?.meta?.cdn ?? o?.meta?.prod ?? o?.meta?.cdn ?? !1,
              s = {
                ...a,
                meta: {
                  ...a?.meta ?? {},
                  prod: n
                }
              };
            return (0, i.jsx)(y.d, {
              payload: s,
              children: (0, i.jsx)(p, {
                components: d,
                children: (0, i.jsx)(S, {
                  payload: e,
                  components: d,
                  componentProps: {
                    ...r,
                    tina: t
                  }
                })
              })
            })
          }), [o, a, JSON.stringify(b), JSON.stringify(O)])
        }
    },
    391: e => {
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
              f = r.safe && Array.isArray(p),
              y = Object.prototype.toString.call(p),
              m = t(p),
              d = "[object Object]" === y || "[object Array]" === y,
              b = i ? i + o + a(u) : a(u);
            if (!f && !m && d && Object.keys(p).length && (!r.maxDepth || l < s)) return e(p, b, l + 1);
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
            f = l;
          for (; void 0 !== p;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(f[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!c && !t && void 0 !== f[r]) return;
            (c && !t || !c && null == f[r]) && (f[r] = "number" != typeof p || s.object ? {} : []), f = f[r], n.length > 0 && (r = u(n.shift()), p = u(n[0]))
          }
          f[r] = e(o[t], s)
        })), l
      }
    }
  }
]);