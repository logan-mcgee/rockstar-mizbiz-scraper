! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d137ba04-26b0-418e-b3c9-1eb2f102ab5b", e._sentryDebugIdIdentifier = "sentry-dbid-d137ba04-26b0-418e-b3c9-1eb2f102ab5b")
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

      function r(e) {
        return e
      }

      function n(e, n) {
        const a = (n = n || {}).delimiter || ".",
          o = n.maxDepth,
          s = n.transformKey || r,
          c = {};
        return function e(r, i, l) {
          l = l || 1, Object.keys(r).forEach((function(u) {
            const d = r[u],
              p = n.safe && Array.isArray(d),
              m = Object.prototype.toString.call(d),
              f = t(d),
              y = "[object Object]" === m || "[object Array]" === m,
              b = i ? i + a + s(u) : s(u);
            if (!p && !f && y && Object.keys(d).length && (!n.maxDepth || l < o)) return e(d, b, l + 1);
            c[b] = d
          }))
        }(e), c
      }
      e.exports = n, n.flatten = n, n.unflatten = function e(a, o) {
        const s = (o = o || {}).delimiter || ".",
          c = o.overwrite || !1,
          i = o.transformKey || r,
          l = {};
        if (t(a) || "[object Object]" !== Object.prototype.toString.call(a)) return a;

        function u(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || o.object ? e : t
        }
        return a = Object.keys(a).reduce((function(e, t) {
          const r = Object.prototype.toString.call(a[t]);
          return "[object Object]" !== r && "[object Array]" !== r || function(e) {
            const t = Object.prototype.toString.call(e),
              r = "[object Object]" === t;
            return !e || ("[object Array]" === t ? !e.length : r ? !Object.keys(e).length : void 0)
          }(a[t]) ? (e[t] = a[t], e) : function(e, t, r) {
            return Object.keys(r).reduce((function(t, n) {
              return t[e + s + n] = r[n], t
            }), t)
          }(t, e, n(a[t], o))
        }), {}), Object.keys(a).forEach((function(t) {
          const r = t.split(s).map(i);
          let n = u(r.shift()),
            d = u(r[0]),
            p = l;
          for (; void 0 !== d;) {
            if ("__proto__" === n) return;
            const e = Object.prototype.toString.call(p[n]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!c && !t && void 0 !== p[n]) return;
            (c && !t || !c && null == p[n]) && (p[n] = "number" != typeof d || o.object ? {} : []), p = p[n], r.length > 0 && (n = u(r.shift()), d = u(r[0]))
          }
          p[n] = e(a[t], o)
        })), l
      }
    },
    97652: (e, t, r) => {
      "use strict";
      r.d(t, {
        h: () => c,
        Wx: () => C,
        F$: () => O
      });
      var n = r(62229),
        a = r(95966);
      r(5315), r(91029);
      const o = (0, a.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        s = {
          track: () => null
        },
        c = () => (0, n.useContext)(o) ?? s,
        i = (0, a.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, a.makeVar)(null)
        }),
        l = e => i(e),
        u = (0, a.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, a.makeVar)(!1)
        }),
        d = e => u(e),
        p = (0, a.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, a.makeVar)(!1)
        }),
        m = e => p(e),
        f = (0, a.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, a.makeVar)((0, a.webSettingsReactive)()?.currentCharId)
        }),
        y = e => f(e),
        b = (0, a.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, a.makeVar)(null)
        }),
        g = e => b(e),
        k = ((0, a.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, a.makeVar)(null)
        }), (0, a.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, a.makeVar)(!1)
        })),
        v = e => k(e),
        h = (0, a.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, a.makeVar)(!1)
        }),
        _ = e => h(e),
        j = (0, a.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, a.makeVar)(null)
        }),
        w = e => j(e),
        O = () => {
          const e = (0, a.useReactiveVar)(k),
            t = (0, a.useReactiveVar)(h),
            r = (0, a.useReactiveVar)(f),
            n = (0, a.useReactiveVar)(i),
            o = (0, a.useReactiveVar)(p),
            s = (0, a.useReactiveVar)(b);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: r,
            hasNotifications: o,
            navOpen: n,
            userData: (0, a.useReactiveVar)(j),
            selectedCharacterTuple: s,
            jumpScMenuFocus: (0, a.useReactiveVar)(u),
            setCharactersNeeded: v,
            setCrewsNeeded: _,
            setCurrentCharId: y,
            setHasNotifications: m,
            setNavOpen: l,
            setSelectedCharacterTuple: g,
            setUserData: w,
            setJumpScMenuFocus: d
          }
        };
      r(43425), r(29830);
      const S = {},
        N = (0, a.setContextItem)({
          context: (0, n.createContext)(S),
          key: "userContext"
        }),
        C = () => (0, n.useContext)(N)
    },
    55834: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        InViewTracker: () => h,
        TinaParser: () => w,
        TinaPayloadProvider: () => p.o,
        recursiveNestedTemplates: () => N,
        useGenerateCdnSource: () => O.jS,
        useGetCdnSource: () => O.C1,
        useImageParser: () => O.S1,
        useTinaComponents: () => d,
        useTinaPayload: () => p.i,
        useTranslations: () => b
      });
      var n = r(62229),
        a = r(16188),
        o = r.n(a);
      var s = r(95966),
        c = r(91029);
      const i = (0, s.setContextItem)({
          context: (0, n.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: l
        } = i,
        u = e => {
          let {
            children: t,
            components: r
          } = e;
          return (0, c.jsx)(l, {
            value: r,
            children: t
          })
        },
        d = () => (0, n.useContext)(i);
      var p = r(68430),
        m = r(91689),
        f = r.n(m),
        y = r(87024);
      const b = e => {
        let {
          payload: t,
          variables: r
        } = e;
        const n = ((e, t) => {
            const r = {};
            return o().cloneDeepWith(e, ((e, n, a) => {
              n === t && e && (r[a.key] = e)
            })), r
          })(t, y.Qw),
          a = JSON.parse(JSON.stringify(o().merge(JSON.parse(JSON.stringify(n)), JSON.parse(JSON.stringify(r?.keys ?? {}))))),
          s = JSON.parse(JSON.stringify(t));
        return o().cloneDeepWith(s, ((e, t, r) => {
          (e => {
            if (!e || !o().has(e, "key") || e.translated) return;
            const t = a[e.key] ?? null;
            if (!t) return;
            const r = f()(t);
            Object.keys(r).map((t => {
              o().set(e, t, r[t])
            })), o().set(e, "translated", !0), Object.freeze(e)
          })(r)
        })), s
      };
      var g = r(20310),
        k = r(97652);
      const v = {
          event: "page_section_impression",
          element_placement: null
        },
        h = e => {
          let {
            threshold: t = .6,
            children: r,
            gtm: a = {}
          } = e;
          const {
            track: o
          } = (0, k.h)(), {
            ref: i,
            scrollTracked: l
          } = (0, s.useScrollTracking)(t);
          return (0, n.useEffect)((() => {
            l && o({
              ...v,
              ...a
            })
          }), [l]), (0, c.jsx)("section", {
            ref: i,
            children: r
          })
        },
        _ = e => {
          let {
            impressionTracking: t,
            gtm: r = {},
            children: n
          } = e;
          return t?.shouldTrack ? (0, c.jsx)(h, {
            threshold: t?.threshold,
            gtm: r,
            children: n
          }) : n
        },
        j = e => {
          let {
            components: t,
            payload: r,
            componentProps: a = {}
          } = e;
          const s = (0, n.useMemo)((() => (o().cloneDeepWith(r, ((e, n) => {
            "_template" !== n || Number.isInteger(Number(e)) || o().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", r), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: r,
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
              const d = ((e, t) => r => ((e, t, r) => (0, c.jsx)(_, {
                  impressionTracking: r?.impressionTracking,
                  gtm: r?.gtm,
                  children: (0, c.jsx)(e, {
                    ...t
                  })
                }))(e, r, t))(u, {
                  impressionTracking: e?.impressionTracking,
                  gtm: {
                    ...e?.gtm,
                    whatever: 1
                  }
                }),
                p = [...e?.translations ?? []].reverse(),
                m = `componentProps_${(0,g.A)()}`;
              return (0, n.createElement)(d, {
                ...r?.meta,
                ...e,
                ...a,
                t: e => p.find((t => t?._key === e))?.value ?? e,
                key: m
              }, i)
            };
            return r?.[y.ZH]?.length ? s(r) : null
          })({
            components: t,
            payload: r,
            componentProps: a
          }))), [JSON.stringify(r), JSON.stringify(t)]);
          return s
        },
        w = e => {
          let {
            tina: t,
            components: r = {},
            componentProps: a = {}
          } = e;
          const s = (0, p.i)(),
            [i, l] = (0, n.useState)(null),
            [m, f] = (0, n.useState)(null);
          (0, n.useEffect)((() => {
            t?.payload && l(t.payload), t?.variables && f(t.variables)
          }), [t]);
          const [y] = (0, n.useState)({
            ...r,
            ...d() ?? {}
          }), g = (e => {
            let {
              payload: t
            } = e;
            const [r, a] = (0, n.useState)(t);
            return (0, n.useEffect)((() => {
              const e = o().debounce((() => {
                const e = JSON.parse(JSON.stringify(t));
                o().cloneDeepWith(e, ((e, t, r) => {
                  r?.mediaQueryList && (e => {
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
                      r = Object.assign({}, ...t);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...r,
                      _template: e?._template
                    })
                  })(r)
                })), a(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [t]), r
          })({
            payload: i
          }), k = b({
            payload: i,
            variables: m
          });
          return (0, n.useMemo)((() => {
            if (!i) return null;
            const e = k,
              r = i?.meta?.prod ?? i?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              n = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: r
                }
              };
            return (0, c.jsx)(p.o, {
              payload: n,
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
      var O = r(8458);
      const S = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            a = {
              ...r
            };
          if (t > 0) {
            const o = S(e, t - 1, r, n);
            a = {
              ...a,
              ...n(e, {
                templates: o
              })
            }
          }
          return a
        },
        N = S
    }
  }
]);