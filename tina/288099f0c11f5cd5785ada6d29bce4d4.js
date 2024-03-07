! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2a8707ae-cf3b-4c98-8e81-11623ed97bf5", e._sentryDebugIdIdentifier = "sentry-dbid-2a8707ae-cf3b-4c98-8e81-11623ed97bf5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [632, 812, 900], {
    8744: (e, t, n) => {
      n.d(t, {
        c: () => a
      });
      const a = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      }
    },
    3812: (e, t, n) => {
      n.r(t), n.d(t, {
        patch: () => o,
        pick: () => s
      });
      var a = n(3660),
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
    5572: (e, t, n) => {
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
    9093: (e, t, n) => {
      n.r(t), n.d(t, {
        TinaParser: () => h,
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
      var a = n(8744),
        r = n(5572),
        o = n(3472),
        s = n(8200),
        l = n(3660),
        i = n.n(l);
      var d = n(3480);
      const c = (0, s.createContext)(),
        {
          Provider: u
        } = c,
        p = e => {
          let {
            children: t,
            components: n
          } = e;
          return (0, d.jsx)(u, {
            value: n,
            children: t
          })
        },
        f = () => (0, s.useContext)(c);
      var y = n(2792),
        m = n(7020),
        g = n.n(m),
        _ = n(3812),
        b = n(9212);
      const S = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const [a, r] = (0, s.useState)(t), [o, l] = (0, s.useState)(n);
        return (0, s.useEffect)((() => {
          const e = (0, _.pick)(t, b.TINA_MEMOQ_PREFIX),
            a = JSON.parse(JSON.stringify(i().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(n?.keys ?? {})))));
          l(a)
        }), [JSON.stringify(t), n]), (0, s.useEffect)((() => {
          const e = JSON.parse(JSON.stringify(t)),
            n = JSON.parse(JSON.stringify(o));
          i().cloneDeepWith(e, ((e, t, a) => {
            (e => {
              let {
                item: t,
                variableKey: a
              } = e;
              if (!t || !i().has(t, "key") || t.translated) return;
              const r = n[t.key] ?? null;
              if (!r) return;
              const o = g()(r);
              Object.keys(o).map((e => {
                i().set(t, e, o[e])
              })), i().set(t, "translated", !0), Object.freeze(t)
            })({
              item: a,
              variableKey: e
            })
          })), r(e)
        }), [JSON.stringify(t), JSON.stringify(o)]), a
      };
      var v = n(8e3);
      const N = e => {
          let {
            components: t,
            payload: n,
            componentProps: a = {}
          } = e;
          const r = (0, s.useMemo)((() => (i().cloneDeepWith(n, ((e, a) => {
            "_template" !== a || Number.isInteger(Number(e)) || i().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: n,
              componentProps: a
            } = e;
            const r = e => {
              let o = "";
              if (o = Array.isArray(e?.[b.TINA_PARSER_KEY]) ? e[b.TINA_PARSER_KEY].map((e => r(e))) : e?.[b.TINA_PARSER_KEY] ?? "", !e?._template) return o;
              let l, d = e._template;
              "0" === d && (console.warn(`The _template "${d}" wasn't found in the available components. The _template "${d}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), d = "gen9.Hero"), l = i().get(t, d) ?? null;
              const c = [...e?.translations ?? []].reverse(),
                u = `componentProps_${(0,v.v4)()}`;
              return (0, s.createElement)(l, {
                ...n?.meta,
                ...e,
                ...a,
                t: e => c.find((t => t?._key === e))?.value ?? e,
                key: u
              }, o)
            };
            return n?.[b.TINA_PARSER_KEY]?.length ? r(n) : null
          })({
            components: t,
            payload: n,
            componentProps: a
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return r
        },
        h = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: a = {}
          } = e;
          const r = (0, y.Q)(),
            [o, l] = (0, s.useState)(null),
            [c, u] = (0, s.useState)(null);
          (0, s.useEffect)((() => {
            t?.payload && l(t.payload), t?.variables && u(t.variables)
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
                })), a(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [t]), n
          })({
            payload: o
          }), _ = S({
            payload: o,
            variables: c
          });
          return (0, s.useMemo)((() => {
            if (!o) return null;
            const e = _,
              n = o?.meta?.prod ?? o?.meta?.cdn ?? r?.meta?.prod ?? r?.meta?.cdn ?? !1,
              s = {
                ...o,
                meta: {
                  ...o?.meta ?? {},
                  prod: n
                }
              };
            return (0, d.jsx)(y.m, {
              payload: s,
              children: (0, d.jsx)(p, {
                components: m,
                children: (0, d.jsx)(N, {
                  payload: e,
                  components: m,
                  componentProps: {
                    ...a,
                    tina: t
                  }
                })
              })
            })
          }), [r, o, JSON.stringify(g), JSON.stringify(_)])
        }
    }
  }
]);
//# sourceMappingURL=288099f0c11f5cd5785ada6d29bce4d4.js.map