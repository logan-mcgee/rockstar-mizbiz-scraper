! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f834f86d-e9fd-4ce6-9b8b-ec12cee601ba", e._sentryDebugIdIdentifier = "sentry-dbid-f834f86d-e9fd-4ce6-9b8b-ec12cee601ba")
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
  [890, 891, 546], {
    8853: (e, t, n) => {
      n.d(t, {
        A: () => r
      });
      const r = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      }
    },
    4891: (e, t, n) => {
      n.r(t), n.d(t, {
        patch: () => s,
        pick: () => o
      });
      var r = n(4252),
        a = n.n(r);
      const s = (e, t) => {
          const n = a().cloneDeepWith(n, ((e, n, r) => {
            a().keys(t).map((s => {
              "key" === n && e === s && a().keys(t[s]).map((e => {
                r[e] = t[s][e]
              }))
            }))
          }));
          return n
        },
        o = (e, t) => {
          const n = {};
          return a().cloneDeepWith(e, ((e, r, a) => {
            r === t && e && (n[a.key] = e)
          })), n
        }
    },
    6151: (e, t, n) => {
      n.d(t, {
        A: () => a
      });
      const r = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            s = {
              ...n
            };
          if (t > 0) {
            const o = r(e, t - 1, n, a);
            s = {
              ...s,
              ...a(e, {
                templates: o
              })
            }
          }
          return s
        },
        a = r
    },
    5369: (e, t, n) => {
      n.r(t), n.d(t, {
        TinaParser: () => T,
        TinaPayloadProvider: () => m.o,
        classList: () => r.A,
        recursiveNestedTemplates: () => a.A,
        useGenerateCdnSource: () => s.useGenerateCdnSource,
        useGetCdnSource: () => s.useGetCdnSource,
        useImageParser: () => s.useImageParser,
        useTinaComponents: () => f,
        useTinaPayload: () => m.i,
        useTranslations: () => h
      });
      var r = n(8853),
        a = n(6151),
        s = n(8235),
        o = n(1403),
        i = n(4252),
        l = n.n(i);
      var c = n(6632);
      const d = (0, o.createContext)(),
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
        f = () => (0, o.useContext)(d);
      var m = n(881),
        y = n(3112),
        g = n.n(y),
        _ = n(4891),
        b = n(2994);
      const h = e => {
        let {
          payload: t,
          variables: n
        } = e;
        const [r, a] = (0, o.useState)(t), [s, i] = (0, o.useState)(n);
        return (0, o.useEffect)((() => {
          const e = (0, _.pick)(t, b.TINA_MEMOQ_PREFIX),
            r = JSON.parse(JSON.stringify(l().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(n?.keys ?? {})))));
          i(r)
        }), [JSON.stringify(t), n]), (0, o.useEffect)((() => {
          const e = JSON.parse(JSON.stringify(t)),
            n = JSON.parse(JSON.stringify(s));
          l().cloneDeepWith(e, ((e, t, r) => {
            (e => {
              let {
                item: t,
                variableKey: r
              } = e;
              if (!t || !l().has(t, "key") || t.translated) return;
              const a = n[t.key] ?? null;
              if (!a) return;
              const s = g()(a);
              Object.keys(s).map((e => {
                l().set(t, e, s[e])
              })), l().set(t, "translated", !0), Object.freeze(t)
            })({
              item: r,
              variableKey: e
            })
          })), a(e)
        }), [JSON.stringify(t), JSON.stringify(s)]), r
      };
      var S = n(3004),
        k = n(9948),
        v = n(207);
      const w = e => {
          let {
            impressionTracking: t,
            gtm: n = {},
            children: r
          } = e;
          return t?.shouldTrack ? (0, c.jsx)(O, {
            threshold: t?.threshold,
            gtm: n,
            children: r
          }) : r
        },
        N = {
          event: "page_section_impression",
          element_placement: null
        },
        O = e => {
          let {
            threshold: t = .6,
            children: n,
            gtm: r = {}
          } = e;
          const {
            track: a
          } = (0, v.useGtmTrack)(), {
            ref: s,
            inView: i
          } = (0, k.useInView)({
            threshold: t,
            trackVisibility: !0,
            delay: 100
          }), [l, d] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            i && !l && (a({
              ...N,
              ...r
            }), d(!0))
          }), [i, s]), (0, c.jsx)("section", {
            ref: s,
            children: n
          })
        },
        E = e => {
          let {
            components: t,
            payload: n,
            componentProps: r = {}
          } = e;
          const a = (0, o.useMemo)((() => (l().cloneDeepWith(n, ((e, r) => {
            "_template" !== r || Number.isInteger(Number(e)) || l().get(t, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", t))
          })), (e => {
            let {
              components: t,
              payload: n,
              componentProps: r
            } = e;
            const a = e => {
              let s = "";
              if (s = Array.isArray(e?.[b.TINA_PARSER_KEY]) ? e[b.TINA_PARSER_KEY].map((e => a(e))) : e?.[b.TINA_PARSER_KEY] ?? "", !e?._template) return s;
              let i = e._template;
              "0" === i && (console.warn(`The _template "${i}" wasn't found in the available components. The _template "${i}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(t),
                payload: e
              }), i = "gen9.Hero");
              const d = l().get(t, i) ?? null;
              if (!d) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, c.jsx)(w, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, c.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(d, {
                  impressionTracking: e?.impressionTracking,
                  gtm: e?.gtm
                }),
                p = [...e?.translations ?? []].reverse(),
                f = `componentProps_${(0,S.v4)()}`;
              return (0, o.createElement)(u, {
                ...n?.meta,
                ...e,
                ...r,
                t: e => p.find((t => t?._key === e))?.value ?? e,
                key: f
              }, s)
            };
            return n?.[b.TINA_PARSER_KEY]?.length ? a(n) : null
          })({
            components: t,
            payload: n,
            componentProps: r
          }))), [JSON.stringify(n), JSON.stringify(t)]);
          return a
        },
        T = e => {
          let {
            tina: t,
            components: n = {},
            componentProps: r = {}
          } = e;
          const a = (0, m.i)(),
            [s, i] = (0, o.useState)(null),
            [d, u] = (0, o.useState)(null);
          (0, o.useEffect)((() => {
            t?.payload && i(t.payload), t?.variables && u(t.variables)
          }), [t]);
          const [y] = (0, o.useState)({
            ...n,
            ...f() ?? {}
          }), g = (e => {
            let {
              payload: t
            } = e;
            const [n, r] = (0, o.useState)(t);
            return (0, o.useEffect)((() => {
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
                })), r(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [t]), n
          })({
            payload: s
          }), _ = h({
            payload: s,
            variables: d
          });
          return (0, o.useMemo)((() => {
            if (!s) return null;
            const e = _,
              n = s?.meta?.prod ?? s?.meta?.cdn ?? a?.meta?.prod ?? a?.meta?.cdn ?? !1,
              o = {
                ...s,
                meta: {
                  ...s?.meta ?? {},
                  prod: n
                }
              };
            return (0, c.jsx)(m.o, {
              payload: o,
              children: (0, c.jsx)(p, {
                components: y,
                children: (0, c.jsx)(E, {
                  payload: e,
                  components: y,
                  componentProps: {
                    ...r,
                    tina: t
                  }
                })
              })
            })
          }), [a, s, JSON.stringify(g), JSON.stringify(_)])
        }
    }
  }
]);