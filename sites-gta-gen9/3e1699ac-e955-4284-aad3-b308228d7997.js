! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3e1699ac-e955-4284-aad3-b308228d7997", e._sentryDebugIdIdentifier = "sentry-dbid-3e1699ac-e955-4284-aad3-b308228d7997")
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
  [9540], {
    34695: e => {
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
          l = l || 1, Object.keys(n).forEach((function(d) {
            const u = n[d],
              f = r.safe && Array.isArray(u),
              p = Object.prototype.toString.call(u),
              m = t(u),
              y = "[object Object]" === p || "[object Array]" === p,
              g = c ? c + o + s(d) : s(d);
            if (!f && !m && y && Object.keys(u).length && (!r.maxDepth || l < a)) return e(u, g, l + 1);
            i[g] = u
          }))
        }(e), i
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(o, a) {
        const s = (a = a || {}).delimiter || ".",
          i = a.overwrite || !1,
          c = a.transformKey || n,
          l = {};
        if (t(o) || "[object Object]" !== Object.prototype.toString.call(o)) return o;

        function d(e) {
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
          let r = d(n.shift()),
            u = d(n[0]),
            f = l;
          for (; void 0 !== u;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(f[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!i && !t && void 0 !== f[r]) return;
            (i && !t || !i && null == f[r]) && (f[r] = "number" != typeof u || a.object ? {} : []), f = f[r], n.length > 0 && (r = d(n.shift()), u = d(n[0]))
          }
          f[r] = e(o[t], a)
        })), l
      }
    },
    69540: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => j,
        TinaParser: () => v,
        TinaPayloadProvider: () => f.o,
        recursiveNestedTemplates: () => N,
        useGenerateCdnSource: () => w.jS,
        useGetCdnSource: () => w.C1,
        useImageParser: () => w.S1,
        useTinaComponents: () => u,
        useTinaPayload: () => f.i,
        useTranslations: () => g
      });
      var r = n(62229),
        o = n(16188),
        a = n.n(o);
      var s = n(95966),
        i = n(73855);
      const c = (0, s.setContextItem)({
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
      var f = n(29960),
        p = n(34695),
        m = n.n(p),
        y = n(35338);
      const g = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const r = ((e, t) => {
            const n = {};
            return a().cloneDeepWith(e, ((e, r, o) => {
              r === t && e && (n[o.key] = e)
            })), n
          })(t, y.Qw),
          o = JSON.parse(JSON.stringify(a().merge(JSON.parse(JSON.stringify(r)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          s = JSON.parse(JSON.stringify(t));
        return a().cloneDeepWith(s, ((e, t, n) => {
          (e => {
            if (!e || !a().has(e, "key") || e.translated) return;
            const t = o[e.key] ?? null;
            if (!t) return;
            const n = m()(t);
            Object.keys(n).map((t => {
              a().set(e, t, n[t])
            })), a().set(e, "translated", !0), Object.freeze(e)
          })(n)
        })), s
      };
      var b = n(42868),
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
        k = e => {
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
              if (c = Array.isArray(e?.[y.ZH]) ? e[y.ZH].map((e => s(e))) : e?.[y.ZH] ?? "", !e?._template) return c;
              let l = e._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), l = "gen9.Hero");
              const d = a().get(t, l) ?? null;
              if (!d) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, i.jsx)(O, {
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
                f = [...e?.translations ?? []].reverse(),
                p = `componentProps_${(0,b.A)()}`;
              return (0, r.createElement)(u, {
                ...n?.meta,
                ...e,
                ...o,
                t: e => f.find((t => t?._key === e))?.value ?? e,
                key: p
              }, c)
            };
            return n?.[y.ZH]?.length ? s(n) : null
          })({
            components: t,
            payload: n,
            componentProps: o
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return s
        },
        v = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: o = {}
          } = e;
          const s = (0, f.i)(),
            [c, l] = (0, r.useState)(null),
            [p, m] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            t?.payload && l(t.payload), t?.variables && m(t.variables)
          }), [t]);
          const [y] = (0, r.useState)({
            ...n,
            ...u() ?? {}
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
              children: (0, i.jsx)(d, {
                components: y,
                children: (0, i.jsx)(k, {
                  payload: e,
                  components: y,
                  componentProps: {
                    ...o,
                    tina: t
                  }
                })
              })
            })
          }), [s, c, JSON.stringify(b), JSON.stringify(h)])
        };
      var w = n(19544);
      const S = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...n
            };
          if (t > 0) {
            const a = S(e, t - 1, n, r);
            o = {
              ...o,
              ...r(e, {
                templates: a
              })
            }
          }
          return o
        },
        N = S
    }
  }
]);