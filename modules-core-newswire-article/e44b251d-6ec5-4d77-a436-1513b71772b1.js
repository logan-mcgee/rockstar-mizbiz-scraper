! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e44b251d-6ec5-4d77-a436-1513b71772b1", e._sentryDebugIdIdentifier = "sentry-dbid-e44b251d-6ec5-4d77-a436-1513b71772b1")
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
  [9540], {
    34695: e => {
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
          l = {};
        return function e(n, c, i) {
          i = i || 1, Object.keys(n).forEach((function(u) {
            const d = n[u],
              p = r.safe && Array.isArray(d),
              m = Object.prototype.toString.call(d),
              f = t(d),
              y = "[object Object]" === m || "[object Array]" === m,
              b = c ? c + a + s(u) : s(u);
            if (!p && !f && y && Object.keys(d).length && (!r.maxDepth || i < o)) return e(d, b, i + 1);
            l[b] = d
          }))
        }(e), l
      }
      e.exports = r, r.flatten = r, r.unflatten = function e(a, o) {
        const s = (o = o || {}).delimiter || ".",
          l = o.overwrite || !1,
          c = o.transformKey || n,
          i = {};
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
          const n = t.split(s).map(c);
          let r = u(n.shift()),
            d = u(n[0]),
            p = i;
          for (; void 0 !== d;) {
            if ("__proto__" === r) return;
            const e = Object.prototype.toString.call(p[r]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!l && !t && void 0 !== p[r]) return;
            (l && !t || !l && null == p[r]) && (p[r] = "number" != typeof d || o.object ? {} : []), p = p[r], n.length > 0 && (r = u(n.shift()), d = u(n[0]))
          }
          p[r] = e(a[t], o)
        })), i
      }
    },
    2772: (e, t, n) => {
      "use strict";
      n.d(t, {
        h: () => l,
        Wx: () => u
      });
      var r = n(62229),
        a = n(95966);
      n(40296), n(73855);
      const o = (0, a.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        s = {
          track: () => null
        },
        l = () => (0, r.useContext)(o) ?? s;
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
      }), n(17531), n(37240);
      const c = {},
        i = (0, a.setContextItem)({
          context: (0, r.createContext)(c),
          key: "userContext"
        }),
        u = () => (0, r.useContext)(i)
    },
    29960: (e, t, n) => {
      "use strict";
      n.d(t, {
        i: () => i,
        o: () => c
      });
      var r = n(62229),
        a = n(95966),
        o = n(73855);
      const s = (0, a.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: l
        } = s,
        c = e => {
          let {
            children: t,
            payload: n
          } = e;
          return (0, o.jsx)(l, {
            value: n,
            children: t
          })
        },
        i = () => (0, r.useContext)(s)
    },
    19544: (e, t, n) => {
      "use strict";
      n.d(t, {
        C1: () => c,
        S1: () => l,
        XC: () => p,
        jS: () => i,
        qg: () => u,
        z0: () => d
      });
      var r = n(62229),
        a = n(95966),
        o = n(29960);
      const s = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: n
          } = new URL(e, (0, a.getCdnPrefix)(!0));
          return "/" === n ? null : (t.endsWith(".akamaized.net"), e)
        },
        l = e => {
          let {
            alt: t = null,
            mobile: n = null,
            desktop: l = null,
            ariaLabel: c = null,
            sources: i = null,
            prod: u = null
          } = e;
          const d = (0, a.useLocale)(),
            {
              meta: p = {}
            } = (0, o.i)() ?? {},
            [m, f] = (0, r.useState)(u ?? p?.cdn ?? p?.prod ?? !0);
          (0, r.useEffect)((() => {
            f(u ?? p?.cdn ?? p?.prod ?? !0)
          }), [u, p]);
          const y = (0, r.useCallback)((e => {
            const t = null !== i,
              n = e?.previewSrc ?? e ?? null;
            if (null === n || "string" != typeof n) return null;
            if (n.startsWith("http")) return s(n);
            const r = `${t?(0,a.getCdnPrefix)(m):""}${n}`;
            return s(r)
          }), [m, i]);
          return {
            alt: t,
            ariaLabel: c,
            src: {
              mobile: y(i?.[d]?.mobile ?? i?.en_us?.mobile ?? n),
              desktop: y(i?.[d]?.desktop ?? i?.en_us?.desktop ?? l)
            }
          }
        },
        c = e => {
          const t = (0, o.i)() ?? {},
            {
              meta: n = {}
            } = t,
            [l, c] = (0, r.useState)(n?.cdn ?? n?.prod ?? !1);
          return (0, r.useEffect)((() => {
            c(n?.cdn ?? n?.prod ?? !1)
          }), [n]), e ? e?.startsWith("http") ? s(e) : s(`${(0,a.getCdnPrefix)(l)}${e}`) : null
        },
        i = () => {
          const e = (0, o.i)() ?? {},
            {
              meta: t = {}
            } = e,
            n = (0, r.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, r.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const r = t?.prod ?? n;
            return e ? e?.startsWith("http") ? s(e) : s(`${(0,a.getCdnPrefix)(r)}${e}`) : null
          }), [n])
        },
        u = e => e.full_src,
        d = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,a.getCdnPrefix)(!1)}${t}`
        },
        p = e => e.meta.uploads_directory
    },
    69540: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        InViewTracker: () => v,
        TinaParser: () => w,
        TinaPayloadProvider: () => p.o,
        recursiveNestedTemplates: () => O,
        useGenerateCdnSource: () => S.jS,
        useGetCdnSource: () => S.C1,
        useImageParser: () => S.S1,
        useTinaComponents: () => d,
        useTinaPayload: () => p.i,
        useTranslations: () => b
      });
      var r = n(62229),
        a = n(16188),
        o = n.n(a);
      var s = n(95966),
        l = n(73855);
      const c = (0, s.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: i
        } = c,
        u = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, l.jsx)(i, {
            value: n,
            children: t
          })
        },
        d = () => (0, r.useContext)(c);
      var p = n(29960),
        m = n(34695),
        f = n.n(m),
        y = n(17539);
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
      var g = n(42868),
        k = n(2772);
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
            ref: c,
            scrollTracked: i
          } = (0, s.useScrollTracking)(t);
          return (0, r.useEffect)((() => {
            i && o({
              ...h,
              ...a
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
            children: r
          } = e;
          return t?.shouldTrack ? (0, l.jsx)(v, {
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
              let c = "";
              if (c = Array.isArray(e?.[y.ZH]) ? e[y.ZH].map((e => s(e))) : e?.[y.ZH] ?? "", !e?._template) return c;
              let i = e._template;
              "0" === i && (console.warn(`The _template "${i}" wasn't found in the available components. The _template "${i}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), i = "gen9.Hero");
              const u = o().get(t, i) ?? null;
              if (!u) return null;
              const d = ((e, t) => n => ((e, t, n) => (0, l.jsx)(_, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, l.jsx)(e, {
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
              }, c)
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
            [c, i] = (0, r.useState)(null),
            [m, f] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            t?.payload && i(t.payload), t?.variables && f(t.variables)
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
            payload: c
          }), k = b({
            payload: c,
            variables: m
          });
          return (0, r.useMemo)((() => {
            if (!c) return null;
            const e = k,
              n = c?.meta?.prod ?? c?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              r = {
                ...c,
                meta: {
                  ...c?.meta ?? {},
                  prod: n
                }
              };
            return (0, l.jsx)(p.o, {
              payload: r,
              children: (0, l.jsx)(u, {
                components: y,
                children: (0, l.jsx)(j, {
                  payload: e,
                  components: y,
                  componentProps: {
                    ...a,
                    tina: t
                  }
                })
              })
            })
          }), [s, c, JSON.stringify(g), JSON.stringify(k)])
        };
      var S = n(19544);
      const x = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            a = {
              ...n
            };
          if (t > 0) {
            const o = x(e, t - 1, n, r);
            a = {
              ...a,
              ...r(e, {
                templates: o
              })
            }
          }
          return a
        },
        O = x
    }
  }
]);