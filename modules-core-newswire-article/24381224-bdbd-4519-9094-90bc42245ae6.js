! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "24381224-bdbd-4519-9094-90bc42245ae6", e._sentryDebugIdIdentifier = "sentry-dbid-24381224-bdbd-4519-9094-90bc42245ae6")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5834], {
    91689: e => {
      function t(e) {
        return e && e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
      }

      function n(e) {
        return e
      }

      function r(e, r) {
        const a = (r = r || {}).delimiter || ".",
          o = r.maxDepth,
          s = r.transformKey || n,
          c = {};
        return function e(n, i, l) {
          l = l || 1, Object.keys(n).forEach((function(u) {
            const d = n[u],
              p = r.safe && Array.isArray(d),
              m = Object.prototype.toString.call(d),
              f = t(d),
              y = "[object Object]" === m || "[object Array]" === m,
              b = i ? i + a + s(u) : s(u);
            if (!p && !f && y && Object.keys(d).length && (!r.maxDepth || l < o)) return e(d, b, l + 1);
            c[b] = d
          }))
        }(e), c
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(a, o) {
        const s = (o = o || {}).delimiter || ".",
          c = o.overwrite || !1,
          i = o.transformKey || n,
          l = {};
        if (t(a) || "[object Object]" !== Object.prototype.toString.call(a)) return a;

        function u(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || o.object ? e : t
        }
        return a = Object.keys(a).reduce((function(e, t) {
          const n = Object.prototype.toString.call(a[t]);
          return "[object Object]" !== n && "[object Array]" !== n || function(e) {
            const t = Object.prototype.toString.call(e),
              n = "[object Object]" === t;
            return !e || ("[object Array]" === t ? !e.length : n ? !Object.keys(e).length : void 0)
          }(a[t]) ? (e[t] = a[t], e) : function(e, t, n) {
            return Object.keys(n).reduce((function(t, r) {
              return t[e + s + r] = n[r], t
            }), t)
          }(t, e, r(a[t], o))
        }), {}), Object.keys(a).forEach((function(t) {
          const n = t.split(s).map(i);
          let r = u(n.shift()),
            d = u(n[0]),
            p = l;
          for (; void 0 !== d;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(p[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!c && !t && void 0 !== p[r]) return;
            (c && !t || !c && null == p[r]) && (p[r] = "number" != typeof d || o.object ? {} : []), p = p[r], n.length > 0 && (r = u(n.shift()), d = u(n[0]))
          }
          p[r] = e(a[t], o)
        })), l
      }
    },
    41041: (e, t, n) => {
      "use strict";
      n.d(t, {
        h: () => c,
        Wx: () => u
      });
      var r = n(62229),
        a = n(95966);
      n(2894), n(91029);
      const o = (0, a.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        s = {
          track: () => null
        },
        c = () => (0, r.useContext)(o) ?? s;
      (0, a.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, a.makeVar)(null)
      }), (0, a.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, a.makeVar)(!1)
      }), (0, a.setMakeVarItem)({
        key: "hasNotificationsReactive",
        value: (0, a.makeVar)(!1)
      }), (0, a.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, a.makeVar)((0, a.webSettingsReactive)()?.currentCharId)
      }), (0, a.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, a.makeVar)(null)
      }), (0, a.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, a.makeVar)(null)
      }), (0, a.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, a.makeVar)(!1)
      }), (0, a.setMakeVarItem)({
        key: "crewsNeededReactive",
        value: (0, a.makeVar)(!1)
      }), (0, a.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, a.makeVar)(null)
      }), n(43425), n(29830);
      const i = {},
        l = (0, a.setContextItem)({
          context: (0, r.createContext)(i),
          key: "userContext"
        }),
        u = () => (0, r.useContext)(l)
    },
    55834: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => v,
        TinaParser: () => w,
        TinaPayloadProvider: () => p.o,
        recursiveNestedTemplates: () => x,
        useGenerateCdnSource: () => O.jS,
        useGetCdnSource: () => O.C1,
        useImageParser: () => O.S1,
        useTinaComponents: () => d,
        useTinaPayload: () => p.i,
        useTranslations: () => b
      });
      var r = n(62229),
        a = n(16188),
        o = n.n(a);
      var s = n(95966),
        c = n(91029);
      const i = (0, s.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: l
        } = i,
        u = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, c.jsx)(l, {
            value: n,
            children: t
          })
        },
        d = () => (0, r.useContext)(i);
      var p = n(68430),
        m = n(91689),
        f = n.n(m),
        y = n(87024);
      const b = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const r = ((e, t) => {
            const n = {};
            return o().cloneDeepWith(e, ((e, r, a) => {
              r === t && e && (n[a.key] = e)
            })), n
          })(t, y.Qw),
          a = JSON.parse(JSON.stringify(o().merge(JSON.parse(JSON.stringify(r)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          s = JSON.parse(JSON.stringify(t));
        return o().cloneDeepWith(s, ((e, t, n) => {
          (e => {
            if (!e || !o().has(e, "key") || e.translated) return;
            const t = a[e.key] ?? null;
            if (!t) return;
            const n = f()(t);
            Object.keys(n).map((t => {
              o().set(e, t, n[t])
            })), o().set(e, "translated", !0), Object.freeze(e)
          })(n)
        })), s
      };
      var g = n(20310),
        k = n(41041);
      const h = {
          event: "page_section_impression",
          element_placement: null
        },
        v = e => {
          let {
            threshold: t = .6,
            children: n,
            gtm: a = {}
          } = e;
          const {
            track: o
          } = (0, k.h)(), {
            ref: i,
            scrollTracked: l
          } = (0, s.useScrollTracking)(t);
          return (0, r.useEffect)((() => {
            l && o({
              ...h,
              ...a
            })
          }), [l]), (0, c.jsx)("section", {
            ref: i,
            children: n
          })
        },
        _ = e => {
          let {
            impressionTracking: t,
            gtm: n = {},
            children: r
          } = e;
          return t?.shouldTrack ? (0, c.jsx)(v, {
            threshold: t?.threshold,
            gtm: n,
            children: r
          }) : r
        },
        j = e => {
          let {
            components: t,
            payload: n,
            componentProps: a = {}
          } = e;
          const s = (0, r.useMemo)((() => (o().cloneDeepWith(n, ((e, r) => {
            "_template" !== r || Number.isInteger(Number(e)) || o().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: n,
              componentProps: a
            } = e;
            const s = e => {
              let i = "";
              if (i = Array.isArray(e?.[y.ZH]) ? e[y.ZH].map((e => s(e))) : e?.[y.ZH] ?? "", !e?._template) return i;
              let l = e._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), l = "gen9.Hero");
              const u = o().get(t, l) ?? null;
              if (!u) return null;
              const d = ((e, t) => n => ((e, t, n) => (0, c.jsx)(_, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, c.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(u, {
                  impressionTracking: e?.impressionTracking,
                  gtm: {
                    ...e?.gtm,
                    whatever: 1
                  }
                }),
                p = [...e?.translations ?? []].reverse(),
                m = `componentProps_${(0,g.A)()}`;
              return (0, r.createElement)(d, {
                ...n?.meta,
                ...e,
                ...a,
                t: e => p.find((t => t?._key === e))?.value ?? e,
                key: m
              }, i)
            };
            return n?.[y.ZH]?.length ? s(n) : null
          })({
            components: t,
            payload: n,
            componentProps: a
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return s
        },
        w = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: a = {}
          } = e;
          const s = (0, p.i)(),
            [i, l] = (0, r.useState)(null),
            [m, f] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            t?.payload && l(t.payload), t?.variables && f(t.variables)
          }), [t]);
          const [y] = (0, r.useState)({
            ...n,
            ...d() ?? {}
          }), g = (e => {
            let {
              payload: t
            } = e;
            const [n, a] = (0, r.useState)(t);
            return (0, r.useEffect)((() => {
              const e = o().debounce((() => {
                const e = JSON.parse(JSON.stringify(t));
                o().cloneDeepWith(e, ((e, t, n) => {
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
                })), a(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [t]), n
          })({
            payload: i
          }), k = b({
            payload: i,
            variables: m
          });
          return (0, r.useMemo)((() => {
            if (!i) return null;
            const e = k,
              n = i?.meta?.prod ?? i?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              r = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: n
                }
              };
            return (0, c.jsx)(p.o, {
              payload: r,
              children: (0, c.jsx)(u, {
                components: y,
                children: (0, c.jsx)(j, {
                  payload: e,
                  components: y,
                  componentProps: {
                    ...a,
                    tina: t
                  }
                })
              })
            })
          }), [s, i, JSON.stringify(g), JSON.stringify(k)])
        };
      var O = n(8458);
      const S = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            a = {
              ...n
            };
          if (t > 0) {
            const o = S(e, t - 1, n, r);
            a = {
              ...a,
              ...r(e, {
                templates: o
              })
            }
          }
          return a
        },
        x = S
    }
  }
]);