! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "28ec1f09-531e-44a5-9e6d-ddfcd0080831", e._sentryDebugIdIdentifier = "sentry-dbid-28ec1f09-531e-44a5-9e6d-ddfcd0080831")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3516], {
    24784: e => {
      function t(e) {
        return e && e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
      }

      function n(e) {
        return e
      }

      function a(e, a) {
        const r = (a = a || {}).delimiter || ".",
          o = a.maxDepth,
          s = a.transformKey || n,
          l = {};
        return function e(n, c, i) {
          i = i || 1, Object.keys(n).forEach((function(d) {
            const u = n[d],
              f = a.safe && Array.isArray(u),
              p = Object.prototype.toString.call(u),
              m = t(u),
              y = "[object Object]" === p || "[object Array]" === p,
              b = c ? c + r + s(d) : s(d);
            if (!f && !m && y && Object.keys(u).length && (!a.maxDepth || i < o)) return e(u, b, i + 1);
            l[b] = u
          }))
        }(e), l
      }
      e.exports = a, a.flatten = a, a.unflatten = function e(r, o) {
        const s = (o = o || {}).delimiter || ".",
          l = o.overwrite || !1,
          c = o.transformKey || n,
          i = {};
        if (t(r) || "[object Object]" !== Object.prototype.toString.call(r)) return r;

        function d(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || o.object ? e : t
        }
        return r = Object.keys(r).reduce((function(e, t) {
          const n = Object.prototype.toString.call(r[t]);
          return "[object Object]" !== n && "[object Array]" !== n || function(e) {
            const t = Object.prototype.toString.call(e),
              n = "[object Object]" === t;
            return !e || ("[object Array]" === t ? !e.length : n ? !Object.keys(e).length : void 0)
          }(r[t]) ? (e[t] = r[t], e) : function(e, t, n) {
            return Object.keys(n).reduce((function(t, a) {
              return t[e + s + a] = n[a], t
            }), t)
          }(t, e, a(r[t], o))
        }), {}), Object.keys(r).forEach((function(t) {
          const n = t.split(s).map(c);
          let a = d(n.shift()),
            u = d(n[0]),
            f = i;
          for (; void 0 !== u;) {
            if ("__proto__" === a) return;
            const e = Object.prototype.toString.call(f[a]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!l && !t && void 0 !== f[a]) return;
            (l && !t || !l && null == f[a]) && (f[a] = "number" != typeof u || o.object ? {} : []), f = f[a], n.length > 0 && (a = d(n.shift()), u = d(n[0]))
          }
          f[a] = e(r[t], o)
        })), i
      }
    },
    57895: (e, t, n) => {
      "use strict";
      n.d(t, {
        h: () => l,
        Wx: () => d
      });
      var a = n(62229),
        r = n(95966);
      n(98397), n(25854);
      const o = (0, r.setContextItem)({
          context: (0, a.createContext)(void 0),
          key: "gtmContext22"
        }),
        s = {
          track: () => null
        },
        l = () => (0, a.useContext)(o) ?? s;
      (0, r.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, r.makeVar)(null)
      }), (0, r.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "hasNotificationsReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
      }), (0, r.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, r.makeVar)(null)
      }), (0, r.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, r.makeVar)(null)
      }), (0, r.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "crewsNeededReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, r.makeVar)(null)
      }), n(93830), n(4895);
      const c = {},
        i = (0, r.setContextItem)({
          context: (0, a.createContext)(c),
          key: "userContext"
        }),
        d = () => (0, a.useContext)(i)
    },
    63516: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => v,
        TinaParser: () => w,
        TinaPayloadProvider: () => f.o,
        recursiveNestedTemplates: () => S,
        useGenerateCdnSource: () => O.jS,
        useGetCdnSource: () => O.C1,
        useImageParser: () => O.S1,
        useTinaComponents: () => u,
        useTinaPayload: () => f.i,
        useTranslations: () => b
      });
      var a = n(62229),
        r = n(16188),
        o = n.n(r);
      var s = n(95966),
        l = n(25854);
      const c = (0, s.setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: i
        } = c,
        d = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, l.jsx)(i, {
            value: n,
            children: t
          })
        },
        u = () => (0, a.useContext)(c);
      var f = n(27538),
        p = n(24784),
        m = n.n(p),
        y = n(58906);
      const b = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const a = ((e, t) => {
            const n = {};
            return o().cloneDeepWith(e, ((e, a, r) => {
              a === t && e && (n[r.key] = e)
            })), n
          })(t, y.Qw),
          r = JSON.parse(JSON.stringify(o().merge(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          s = JSON.parse(JSON.stringify(t));
        return o().cloneDeepWith(s, ((e, t, n) => {
          (e => {
            if (!e || !o().has(e, "key") || e.translated) return;
            const t = r[e.key] ?? null;
            if (!t) return;
            const n = m()(t);
            Object.keys(n).map((t => {
              o().set(e, t, n[t])
            })), o().set(e, "translated", !0), Object.freeze(e)
          })(n)
        })), s
      };
      var g = n(39311),
        k = n(57895);
      const h = {
          event: "page_section_impression",
          element_placement: null
        },
        v = e => {
          let {
            threshold: t = .6,
            children: n,
            gtm: r = {}
          } = e;
          const {
            track: o
          } = (0, k.h)(), {
            ref: c,
            scrollTracked: i
          } = (0, s.useScrollTracking)(t);
          return (0, a.useEffect)((() => {
            i && o({
              ...h,
              ...r
            })
          }), [i]), (0, l.jsx)("section", {
            ref: c,
            children: n
          })
        },
        _ = e => {
          let {
            impressionTracking: t,
            gtm: n = {},
            children: a
          } = e;
          return t?.shouldTrack ? (0, l.jsx)(v, {
            threshold: t?.threshold,
            gtm: n,
            children: a
          }) : a
        },
        j = e => {
          let {
            components: t,
            payload: n,
            componentProps: r = {}
          } = e;
          const s = (0, a.useMemo)((() => (o().cloneDeepWith(n, ((e, a) => {
            "_template" !== a || Number.isInteger(Number(e)) || o().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: n,
              componentProps: r
            } = e;
            const s = e => {
              let c = "";
              if (c = Array.isArray(e?.[y.ZH]) ? e[y.ZH].map((e => s(e))) : e?.[y.ZH] ?? "", !e?._template) return c;
              let i = e._template;
              "0" === i && (console.warn(`The _template "${i}" wasn't found in the available components. The _template "${i}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), i = "gen9.Hero");
              const d = o().get(t, i) ?? null;
              if (!d) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, l.jsx)(_, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, l.jsx)(e, {
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
                p = `componentProps_${(0,g.A)()}`;
              return (0, a.createElement)(u, {
                ...n?.meta,
                ...e,
                ...r,
                t: e => f.find((t => t?._key === e))?.value ?? e,
                key: p
              }, c)
            };
            return n?.[y.ZH]?.length ? s(n) : null
          })({
            components: t,
            payload: n,
            componentProps: r
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return s
        },
        w = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: r = {}
          } = e;
          const s = (0, f.i)(),
            [c, i] = (0, a.useState)(null),
            [p, m] = (0, a.useState)(null);
          (0, a.useEffect)((() => {
            t?.payload && i(t.payload), t?.variables && m(t.variables)
          }), [t]);
          const [y] = (0, a.useState)({
            ...n,
            ...u() ?? {}
          }), g = (e => {
            let {
              payload: t
            } = e;
            const [n, r] = (0, a.useState)(t);
            return (0, a.useEffect)((() => {
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
                })), r(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [t]), n
          })({
            payload: c
          }), k = b({
            payload: c,
            variables: p
          });
          return (0, a.useMemo)((() => {
            if (!c) return null;
            const e = k,
              n = c?.meta?.prod ?? c?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              a = {
                ...c,
                meta: {
                  ...c?.meta ?? {},
                  prod: n
                }
              };
            return (0, l.jsx)(f.o, {
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
          }), [s, c, JSON.stringify(g), JSON.stringify(k)])
        };
      var O = n(38558);
      const M = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            r = {
              ...n
            };
          if (t > 0) {
            const o = M(e, t - 1, n, a);
            r = {
              ...r,
              ...a(e, {
                templates: o
              })
            }
          }
          return r
        },
        S = M
    }
  }
]);