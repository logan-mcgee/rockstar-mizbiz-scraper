! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7e179907-7c9a-4579-a6dc-de7b64ff016a", e._sentryDebugIdIdentifier = "sentry-dbid-7e179907-7c9a-4579-a6dc-de7b64ff016a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [272, 496, 524], {
    35724: (e, t, n) => {
      n.d(t, {
        c: () => a
      });
      const a = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      }
    },
    91496: (e, t, n) => {
      n.r(t), n.d(t, {
        patch: () => o,
        pick: () => s
      });
      var a = n(73660),
        r = n.n(a);
      const o = (e, t) => {
          const n = r().cloneDeepWith(n, ((e, n, a) => {
            r().keys(t).map((o => {
              "key" === n && e === o && r().keys(t[o]).map((e => {
                a[e] = t[o][e]
              }))
            }))
          }));
          return n
        },
        s = (e, t) => {
          const n = {};
          return r().cloneDeepWith(e, ((e, a, r) => {
            a === t && e && (n[r.key] = e)
          })), n
        }
    },
    73936: (e, t, n) => {
      n.d(t, {
        c: () => r
      });
      const a = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...n
            };
          if (t > 0) {
            const s = a(e, t - 1, n, r);
            o = {
              ...o,
              ...r(e, {
                templates: s
              })
            }
          }
          return o
        },
        r = a
    },
    59880: (e, t, n) => {
      n.r(t), n.d(t, {
        TinaParser: () => N,
        TinaPayloadProvider: () => y.m,
        classList: () => a.c,
        recursiveNestedTemplates: () => r.c,
        useGenerateCdnSource: () => o.useGenerateCdnSource,
        useGetCdnSource: () => o.useGetCdnSource,
        useImageParser: () => o.useImageParser,
        useTinaComponents: () => f,
        useTinaPayload: () => y.Q,
        useTranslations: () => S
      });
      var a = n(35724),
        r = n(73936),
        o = n(83924),
        s = n(51664),
        i = n(73660),
        l = n.n(i);
      var c = n(95240);
      const d = (0, s.createContext)(),
        {
          Provider: u
        } = d,
        p = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, c.jsx)(u, {
            value: n,
            children: t
          })
        },
        f = () => (0, s.useContext)(d);
      var y = n(70508),
        m = n(87020),
        g = n.n(m),
        b = n(91496),
        _ = n(27400);
      const S = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const [a, r] = (0, s.useState)(t), [o, i] = (0, s.useState)(n);
        return (0, s.useEffect)((() => {
          const e = (0, b.pick)(t, _.TINA_MEMOQ_PREFIX),
            a = JSON.parse(JSON.stringify(l().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(n?.keys ?? {})))));
          i(a)
        }), [JSON.stringify(t), n]), (0, s.useEffect)((() => {
          const e = JSON.parse(JSON.stringify(t)),
            n = JSON.parse(JSON.stringify(o));
          l().cloneDeepWith(e, ((e, t, a) => {
            (e => {
              let {
                item: t,
                variableKey: a
              } = e;
              if (!t || !l().has(t, "key") || t.translated) return;
              const r = n[t.key] ?? null;
              if (!r) return;
              const o = g()(r);
              Object.keys(o).map((e => {
                l().set(t, e, o[e])
              })), l().set(t, "translated", !0), Object.freeze(t)
            })({
              item: a,
              variableKey: e
            })
          })), r(e)
        }), [JSON.stringify(t), JSON.stringify(o)]), a
      };
      var v = n(68e3),
        w = n(9860);
      const h = e => {
          let {
            components: t,
            payload: n,
            componentProps: a = {}
          } = e;
          const r = (0, s.useMemo)((() => (l().cloneDeepWith(n, ((e, a) => {
            "_template" !== a || Number.isInteger(Number(e)) || l().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: n,
              componentProps: a
            } = e;
            const r = e => {
              let o = "";
              if (o = Array.isArray(e?.[_.TINA_PARSER_KEY]) ? e[_.TINA_PARSER_KEY].map((e => r(e))) : e?.[_.TINA_PARSER_KEY] ?? "", !e?._template) return o;
              let i = e._template;
              "0" === i && (console.warn(`The _template "${i}" wasn't found in the available components. The _template "${i}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), i = "gen9.Hero");
              const c = l().get(t, i) ?? null;
              if (!c) return null;
              let d;
              d = (0, w.withInViewTracker)(c, {
                impressionTracking: e?.impressionTracking,
                gtm: e?.gtm
              });
              const u = [...e?.translations ?? []].reverse(),
                p = `componentProps_${(0,v.v4)()}`;
              return (0, s.createElement)(d, {
                ...n?.meta,
                ...e,
                ...a,
                t: e => u.find((t => t?._key === e))?.value ?? e,
                key: p
              }, o)
            };
            return n?.[_.TINA_PARSER_KEY]?.length ? r(n) : null
          })({
            components: t,
            payload: n,
            componentProps: a
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return r
        },
        N = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: a = {}
          } = e;
          const r = (0, y.Q)(),
            [o, i] = (0, s.useState)(null),
            [d, u] = (0, s.useState)(null);
          (0, s.useEffect)((() => {
            t?.payload && i(t.payload), t?.variables && u(t.variables)
          }), [t]);
          const [m] = (0, s.useState)({
            ...n,
            ...f() ?? {}
          }), g = (e => {
            let {
              payload: t
            } = e;
            const [n, a] = (0, s.useState)(t);
            return (0, s.useEffect)((() => {
              const e = l().debounce((() => {
                const e = JSON.parse(JSON.stringify(t));
                l().cloneDeepWith(e, ((e, t, n) => {
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
            payload: o
          }), b = S({
            payload: o,
            variables: d
          });
          return (0, s.useMemo)((() => {
            if (!o) return null;
            const e = b,
              n = o?.meta?.prod ?? o?.meta?.cdn ?? r?.meta?.prod ?? r?.meta?.cdn ?? !1,
              s = {
                ...o,
                meta: {
                  ...o?.meta ?? {},
                  prod: n
                }
              };
            return (0, c.jsx)(y.m, {
              payload: s,
              children: (0, c.jsx)(p, {
                components: m,
                children: (0, c.jsx)(h, {
                  payload: e,
                  components: m,
                  componentProps: {
                    ...a,
                    tina: t
                  }
                })
              })
            })
          }), [r, o, JSON.stringify(g), JSON.stringify(b)])
        }
    }
  }
]);