try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "84f76595-2711-4db9-aba6-9f267f77b4d7", e._sentryDebugIdIdentifier = "sentry-dbid-84f76595-2711-4db9-aba6-9f267f77b4d7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [9129], {
    42195(e, n, t) {
      t.r(n), t.d(n, {
        InViewTracker: () => w,
        TextField: () => C.TextField,
        TinaParser: () => O,
        TinaPayloadProvider: () => u.o,
        TinaRichText: () => P,
        recursiveNestedTemplates: () => x,
        useGenerateCdnSource: () => j.jS,
        useGetCdnSource: () => j.C1,
        useImageParser: () => j.S1,
        usePrunedTinaKeys: () => f,
        useTinaComponents: () => p,
        useTinaPayload: () => u.i,
        useTranslations: () => h
      });
      var a = t(42295),
        s = t(71127),
        r = t(10336),
        o = t.n(r);
      var i = t(13331);
      const l = (0, i.setContextItem)({
          context: (0, s.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: d
        } = l,
        c = ({
          children: e,
          components: n
        }) => (0, a.jsx)(d, {
          value: n,
          children: e
        }),
        p = () => (0, s.useContext)(l);
      var u = t(74767);
      const m = (e, n) => Array.isArray(e) ? e.map(e => m(e, n)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((t, a) => (a !== n && (t[a] = m(e[a], n)), t), {}) : e,
        f = e => (0, s.useMemo)(() => m(e, "key"), [e]);
      var y = t(90287),
        g = t.n(y),
        b = t(42783);
      const h = ({
        payload: e,
        variables: n
      }) => {
        const t = ((e, n) => {
            const t = {};
            return o().cloneDeepWith(e, (e, a, s) => {
              a === n && e && (t[s.key] = e)
            }), t
          })(e, b.Qw),
          a = JSON.parse(JSON.stringify(o().merge(JSON.parse(JSON.stringify(t)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          s = JSON.parse(JSON.stringify(e));
        return o().cloneDeepWith(s, (e, n, t) => {
          (e => {
            if (!e || !o().has(e, "key") || e.translated) return;
            const n = a[e.key] ?? null;
            if (!n) return;
            const t = g()(n);
            Object.keys(t).map(n => {
              o().set(e, n, t[n])
            }), o().set(e, "translated", !0), Object.freeze(e)
          })(t)
        }), s
      };
      var _ = t(11206),
        k = t(82199);
      const T = {
          event: "page_section_impression",
          element_placement: null
        },
        w = ({
          threshold: e = .6,
          children: n,
          gtm: t = {}
        }) => {
          const {
            track: r
          } = (0, k.useGtmTrack)(), {
            ref: o,
            scrollTracked: l
          } = (0, i.useScrollTracking)(e);
          return (0, s.useEffect)(() => {
            l && r({
              ...T,
              ...t
            })
          }, [l]), (0, a.jsx)("section", {
            ref: o,
            children: n
          })
        },
        S = ({
          impressionTracking: e,
          gtm: n = {},
          children: t
        }) => e?.shouldTrack ? (0, a.jsx)(w, {
          threshold: e?.threshold,
          gtm: n,
          children: t
        }) : t,
        v = ({
          components: e,
          payload: n,
          componentProps: t = {}
        }) => {
          const r = (0, s.useMemo)(() => (o().cloneDeepWith(n, (t, a) => {
            "_template" !== a || Number.isInteger(Number(t)) || o().get(e, t) || (console.error(`TinaParser:useComponentRenderer: Component ${t} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", e))
          }), (({
            components: e,
            payload: n,
            componentProps: t
          }) => {
            const r = i => {
              let l = "";
              if (l = Array.isArray(i?.[b.ZH]) ? i[b.ZH].map(e => r(e)) : i?.[b.ZH] ?? "", !i?._template) return l;
              let d = i._template;
              "0" === d && (console.warn(`The _template "${d}" wasn't found in the available components. The _template "${d}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: i
              }), d = "gen9.Hero");
              const c = o().get(e, d) ?? null;
              if (!c) return null;
              const p = ((e, n) => t => ((e, n, t) => (0, a.jsx)(S, {
                  impressionTracking: t?.impressionTracking,
                  gtm: t?.gtm,
                  children: (0, a.jsx)(e, {
                    ...n
                  })
                }))(e, t, n))(c, {
                  impressionTracking: i?.impressionTracking,
                  gtm: {
                    ...i?.gtm,
                    whatever: 1
                  }
                }),
                u = [...i?.translations ?? []].reverse(),
                m = `componentProps_${(0,_.A)()}`;
              return (0, s.createElement)(p, {
                ...n?.meta,
                ...i,
                ...t,
                t: e => u.find(n => n?._key === e)?.value ?? e,
                key: m
              }, l)
            };
            return n?.[b.ZH]?.length ? r(n) : null
          })({
            components: e,
            payload: n,
            componentProps: t
          })), [JSON.stringify(n)]);
          return r
        },
        O = ({
          tina: e,
          components: n = {},
          componentProps: t = {}
        }) => {
          const r = (0, u.i)(),
            [i, l] = (0, s.useState)(null),
            [d, m] = (0, s.useState)(null);
          (0, s.useEffect)(() => {
            e?.payload && l(e.payload), e?.variables && m(e.variables)
          }, [e]);
          const [f] = (0, s.useState)({
            ...n,
            ...p() ?? {}
          }), y = (({
            payload: e
          }) => {
            const [n, t] = (0, s.useState)(e);
            return (0, s.useEffect)(() => {
              const n = o().debounce(() => {
                const n = JSON.parse(JSON.stringify(e));
                o().cloneDeepWith(n, (e, n, t) => {
                  t?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const n = e.mediaQueryList.filter(({
                        mediaQueryString: e
                      }) => window.matchMedia(e).matches) ?? null,
                      t = Object.assign({}, ...n);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...t,
                      _template: e?._template
                    })
                  })(t)
                }), t(n)
              }, 250);
              return n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n)
            }, [e]), n
          })({
            payload: i
          }), g = h({
            payload: i,
            variables: d
          });
          return (0, s.useMemo)(() => {
            if (!i) return null;
            const n = g,
              s = i?.meta?.prod ?? i?.meta?.cdn ?? r?.meta?.prod ?? r?.meta?.cdn ?? !1,
              o = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: s
                }
              };
            return (0, a.jsx)(u.o, {
              payload: o,
              children: (0, a.jsx)(c, {
                components: f,
                children: (0, a.jsx)(v, {
                  payload: n,
                  components: f,
                  componentProps: {
                    ...t,
                    tina: e
                  }
                })
              })
            })
          }, [r, i, JSON.stringify(y), JSON.stringify(g)])
        };
      var j = t(34725);
      const N = (e = "", n = 0, t = {}, a = () => {}) => {
          let s = {
            ...t
          };
          if (n > 0) {
            const r = N(e, n - 1, t, a);
            s = {
              ...s,
              ...a(e, {
                templates: r
              })
            }
          }
          return s
        },
        x = N,
        P = ({
          html: e,
          as: n = "span",
          ...t
        }) => (0, a.jsx)(n, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...t
        });
      var C = t(98718)
    }
  }
]);