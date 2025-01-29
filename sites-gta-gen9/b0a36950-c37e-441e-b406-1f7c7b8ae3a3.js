! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b0a36950-c37e-441e-b406-1f7c7b8ae3a3", e._sentryDebugIdIdentifier = "sentry-dbid-b0a36950-c37e-441e-b406-1f7c7b8ae3a3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [819], {
    39494: e => {
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
          i = {};
        return function e(n, c, l) {
          l = l || 1, Object.keys(n).forEach((function(u) {
            const d = n[u],
              f = r.safe && Array.isArray(d),
              p = Object.prototype.toString.call(d),
              y = t(d),
              m = "[object Object]" === p || "[object Array]" === p,
              g = c ? c + o + s(u) : s(u);
            if (!f && !y && m && Object.keys(d).length && (!r.maxDepth || l < a)) return e(d, g, l + 1);
            i[g] = d
          }))
        }(e), i
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(o, a) {
        const s = (a = a || {}).delimiter || ".",
          i = a.overwrite || !1,
          c = a.transformKey || n,
          l = {};
        if (t(o) || "[object Object]" !== Object.prototype.toString.call(o)) return o;

        function u(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || a.object ? e : t
        }
        return o = Object.keys(o).reduce((function(e, t) {
          const n = Object.prototype.toString.call(o[t]);
          return "[object Object]" !== n && "[object Array]" !== n || function(e) {
            const t = Object.prototype.toString.call(e),
              n = "[object Object]" === t;
            return !e || ("[object Array]" === t ? !e.length : n ? !Object.keys(e).length : void 0)
          }(o[t]) ? (e[t] = o[t], e) : function(e, t, n) {
            return Object.keys(n).reduce((function(t, r) {
              return t[e + s + r] = n[r], t
            }), t)
          }(t, e, r(o[t], a))
        }), {}), Object.keys(o).forEach((function(t) {
          const n = t.split(s).map(c);
          let r = u(n.shift()),
            d = u(n[0]),
            f = l;
          for (; void 0 !== d;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(f[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!i && !t && void 0 !== f[r]) return;
            (i && !t || !i && null == f[r]) && (f[r] = "number" != typeof d || a.object ? {} : []), f = f[r], n.length > 0 && (r = u(n.shift()), d = u(n[0]))
          }
          f[r] = e(o[t], a)
        })), l
      }
    },
    52437: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => j,
        TinaParser: () => k,
        TinaPayloadProvider: () => f.o,
        recursiveNestedTemplates: () => N,
        useGenerateCdnSource: () => v.jS,
        useGetCdnSource: () => v.C1,
        useImageParser: () => v.S1,
        useTinaComponents: () => d,
        useTinaPayload: () => f.i,
        useTranslations: () => g
      });
      var r = n(62229),
        o = n(16188),
        a = n.n(o);
      var s = n(95966),
        i = n(98096);
      const c = (0, s.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: l
        } = c,
        u = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, i.jsx)(l, {
            value: n,
            children: t
          })
        },
        d = () => (0, r.useContext)(c);
      var f = n(50412),
        p = n(39494),
        y = n.n(p),
        m = n(10394);
      const g = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const [o, s] = (0, r.useState)(t), [i, c] = (0, r.useState)(n);
        return (0, r.useEffect)((() => {
          const e = ((e, t) => {
              const n = {};
              return a().cloneDeepWith(e, ((e, r, o) => {
                r === t && e && (n[o.key] = e)
              })), n
            })(t, m.Qw),
            r = JSON.parse(JSON.stringify(a().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(n?.keys ?? {})))));
          c(r)
        }), [JSON.stringify(t), n]), (0, r.useEffect)((() => {
          const e = JSON.parse(JSON.stringify(t)),
            n = JSON.parse(JSON.stringify(i));
          a().cloneDeepWith(e, ((e, t, r) => {
            (e => {
              let {
                item: t,
                variableKey: r
              } = e;
              if (!t || !a().has(t, "key") || t.translated) return;
              const o = n[t.key] ?? null;
              if (!o) return;
              const s = y()(o);
              Object.keys(s).map((e => {
                a().set(t, e, s[e])
              })), a().set(t, "translated", !0), Object.freeze(t)
            })({
              item: r,
              variableKey: e
            })
          })), s(e)
        }), [JSON.stringify(t), JSON.stringify(i)]), o
      };
      var b = n(48648),
        h = n(2918);
      const _ = {
          event: "page_section_impression",
          element_placement: null
        },
        j = e => {
          let {
            threshold: t = .6,
            children: n,
            gtm: o = {}
          } = e;
          const {
            track: a
          } = (0, h.useGtmTrack)(), {
            ref: c,
            scrollTracked: l
          } = (0, s.useScrollTracking)(t);
          return (0, r.useEffect)((() => {
            l && a({
              ..._,
              ...o
            })
          }), [l]), (0, i.jsx)("section", {
            ref: c,
            children: n
          })
        },
        O = e => {
          let {
            impressionTracking: t,
            gtm: n = {},
            children: r
          } = e;
          return t?.shouldTrack ? (0, i.jsx)(j, {
            threshold: t?.threshold,
            gtm: n,
            children: r
          }) : r
        },
        S = e => {
          let {
            components: t,
            payload: n,
            componentProps: o = {}
          } = e;
          const s = (0, r.useMemo)((() => (a().cloneDeepWith(n, ((e, r) => {
            "_template" !== r || Number.isInteger(Number(e)) || a().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: n,
              componentProps: o
            } = e;
            const s = e => {
              let c = "";
              if (c = Array.isArray(e?.[m.ZH]) ? e[m.ZH].map((e => s(e))) : e?.[m.ZH] ?? "", !e?._template) return c;
              let l = e._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), l = "gen9.Hero");
              const u = a().get(t, l) ?? null;
              if (!u) return null;
              const d = ((e, t) => n => ((e, t, n) => (0, i.jsx)(O, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, i.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(u, {
                  impressionTracking: e?.impressionTracking,
                  gtm: {
                    ...e?.gtm,
                    whatever: 1
                  }
                }),
                f = [...e?.translations ?? []].reverse(),
                p = `componentProps_${(0,b.A)()}`;
              return (0, r.createElement)(d, {
                ...n?.meta,
                ...e,
                ...o,
                t: e => f.find((t => t?._key === e))?.value ?? e,
                key: p
              }, c)
            };
            return n?.[m.ZH]?.length ? s(n) : null
          })({
            components: t,
            payload: n,
            componentProps: o
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return s
        },
        k = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: o = {}
          } = e;
          const s = (0, f.i)(),
            [c, l] = (0, r.useState)(null),
            [p, y] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            t?.payload && l(t.payload), t?.variables && y(t.variables)
          }), [t]);
          const [m] = (0, r.useState)({
            ...n,
            ...d() ?? {}
          }), b = (e => {
            let {
              payload: t
            } = e;
            const [n, o] = (0, r.useState)(t);
            return (0, r.useEffect)((() => {
              const e = a().debounce((() => {
                const e = JSON.parse(JSON.stringify(t));
                a().cloneDeepWith(e, ((e, t, n) => {
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
          }), h = g({
            payload: c,
            variables: p
          });
          return (0, r.useMemo)((() => {
            if (!c) return null;
            const e = h,
              n = c?.meta?.prod ?? c?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              r = {
                ...c,
                meta: {
                  ...c?.meta ?? {},
                  prod: n
                }
              };
            return (0, i.jsx)(f.o, {
              payload: r,
              children: (0, i.jsx)(u, {
                components: m,
                children: (0, i.jsx)(S, {
                  payload: e,
                  components: m,
                  componentProps: {
                    ...o,
                    tina: t
                  }
                })
              })
            })
          }), [s, c, JSON.stringify(b), JSON.stringify(h)])
        };
      var v = n(13916);
      const w = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...n
            };
          if (t > 0) {
            const a = w(e, t - 1, n, r);
            o = {
              ...o,
              ...r(e, {
                templates: a
              })
            }
          }
          return o
        },
        N = w
    }
  }
]);