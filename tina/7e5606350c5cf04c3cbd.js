(self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [36, 164, 312], {
    826: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => r
      });
      const r = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      }
    },
    164: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        patch: () => s,
        pick: () => a
      });
      var r = n(591),
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
    8: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        TinaParser: () => S,
        classList: () => r.Z,
        useGetCdnSource: () => o.useGetCdnSource,
        useImageParser: () => o.useImageParser,
        useTinaComponents: () => d,
        useTinaPayload: () => f.I,
        useTranslations: () => O
      });
      var r = n(826),
        o = n(236),
        s = n(822),
        a = n(591),
        l = n.n(a);
      var i = n(563);
      const c = (0, s.createContext)(),
        {
          Provider: u
        } = c,
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
        d = () => (0, s.useContext)(c);
      var f = n(501),
        y = n(34),
        m = n.n(y),
        v = n(164),
        b = n(821);
      const O = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const [r, o] = (0, s.useState)(t), [a, i] = (0, s.useState)(n);
        return (0, s.useEffect)((() => {
          const e = (0, v.pick)(t, b.TINA_MEMOQ_PREFIX),
            r = JSON.parse(JSON.stringify(l().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify((null == n ? void 0 : n.keys) ?? {})))));
          i(r)
        }), [JSON.stringify(t), n]), (0, s.useEffect)((() => {
          const e = JSON.parse(JSON.stringify(t)),
            n = JSON.parse(JSON.stringify(a));
          l().cloneDeepWith(e, ((e, t, r) => {
            (e => {
              let {
                item: t,
                variableKey: r
              } = e;
              if (!t || !l().has(t, "key") || t.translated) return;
              const o = n[t.key] ?? null;
              if (!o) return;
              const s = m()(o);
              Object.keys(s).map((e => {
                l().set(t, e, s[e])
              })), l().set(t, "translated", !0), Object.freeze(t)
            })({
              item: r,
              variableKey: e
            })
          })), o(e)
        }), [JSON.stringify(t), JSON.stringify(a)]), r
      };
      var g = n(637);
      const j = e => {
          let {
            components: t,
            payload: n,
            componentProps: r = {}
          } = e;
          const o = (0, s.useMemo)((() => (l().cloneDeepWith(n, ((e, r) => {
            "_template" !== r || Number.isInteger(Number(e)) || l().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            var t;
            let {
              components: n,
              payload: r,
              componentProps: o
            } = e;
            const a = e => {
              var t;
              let i = "";
              if (i = Array.isArray(null == e ? void 0 : e[b.TINA_PARSER_KEY]) ? e[b.TINA_PARSER_KEY].map((e => a(e))) : (null == e ? void 0 : e[b.TINA_PARSER_KEY]) ?? "", null == e || !e._template) return i;
              const c = l().get(n, null == e ? void 0 : e._template) ?? null,
                u = [...(null == e ? void 0 : e.translations) ?? []].reverse(),
                p = `componentProps_${(0,g.Z)()}`,
                d = (0, s.createElement)(c, {
                  ...null == r ? void 0 : r.meta,
                  ...e,
                  ...o,
                  t: e => {
                    var t;
                    return (null === (t = u.find((t => (null == t ? void 0 : t._key) === e))) || void 0 === t ? void 0 : t.value) ?? e
                  },
                  key: p
                }, i);
              return null == r || null === (t = r.meta) || void 0 === t || t.animateIn, d
            };
            return null != r && null !== (t = r[b.TINA_PARSER_KEY]) && void 0 !== t && t.length ? a(r) : null
          })({
            components: t,
            payload: n,
            componentProps: r
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return o
        },
        S = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: r = {}
          } = e;
          const o = (0, f.I)(),
            [a, c] = (0, s.useState)(null),
            [u, y] = (0, s.useState)(null);
          (0, s.useEffect)((() => {
            null != t && t.payload && c(t.payload), null != t && t.variables && y(t.variables)
          }), [t]);
          const [m] = (0, s.useState)({
            ...n,
            ...d() ?? {}
          }), v = (e => {
            let {
              payload: t
            } = e;
            const [n, r] = (0, s.useState)(t);
            return (0, s.useEffect)((() => {
              const e = l().debounce((() => {
                const e = JSON.parse(JSON.stringify(t));
                l().cloneDeepWith(e, ((e, t, n) => {
                  null != n && n.mediaQueryList && (e => {
                    null != e && e.__original_data || Object.assign(e, {
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
                      ...null == e ? void 0 : e.__original_data,
                      ...n,
                      _template: null == e ? void 0 : e._template
                    })
                  })(n)
                })), r(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [t]), n
          })({
            payload: a
          }), b = O({
            payload: a,
            variables: u
          });
          return (0, s.useMemo)((() => {
            var e, t, n, s;
            if (!a) return null;
            const l = b,
              c = (null == a || null === (e = a.meta) || void 0 === e ? void 0 : e.prod) ?? (null == a || null === (t = a.meta) || void 0 === t ? void 0 : t.cdn) ?? (null == o || null === (n = o.meta) || void 0 === n ? void 0 : n.prod) ?? (null == o || null === (s = o.meta) || void 0 === s ? void 0 : s.cdn) ?? !1,
              u = {
                ...a,
                meta: {
                  ...(null == a ? void 0 : a.meta) ?? {},
                  prod: c
                }
              };
            return (0, i.jsx)(f.d, {
              payload: u,
              children: (0, i.jsx)(p, {
                components: m,
                children: (0, i.jsx)(j, {
                  payload: l,
                  components: m,
                  componentProps: r
                })
              })
            })
          }), [o, a, JSON.stringify(v), JSON.stringify(b)])
        }
    },
    34: e => {
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
          l = {};
        return function e(n, i, c) {
          c = c || 1, Object.keys(n).forEach((function(u) {
            const p = n[u],
              d = r.safe && Array.isArray(p),
              f = Object.prototype.toString.call(p),
              y = t(p),
              m = "[object Object]" === f || "[object Array]" === f,
              v = i ? i + o + a(u) : a(u);
            if (!d && !y && m && Object.keys(p).length && (!r.maxDepth || c < s)) return e(p, v, c + 1);
            l[v] = p
          }))
        }(e), l
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(o, s) {
        const a = (s = s || {}).delimiter || ".",
          l = s.overwrite || !1,
          i = s.transformKey || n,
          c = {};
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
            d = c;
          for (; void 0 !== p;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(d[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!l && !t && void 0 !== d[r]) return;
            (l && !t || !l && null == d[r]) && (d[r] = "number" != typeof p || s.object ? {} : []), d = d[r], n.length > 0 && (r = u(n.shift()), p = u(n[0]))
          }
          d[r] = e(o[t], s)
        })), c
      }
    }
  }
]);