try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "69d8d2b0-d3de-4e30-9e9b-1caff074e1ba", e._sentryDebugIdIdentifier = "sentry-dbid-69d8d2b0-d3de-4e30-9e9b-1caff074e1ba")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [3769], {
    60620(e, n, t) {
      t.r(n), t.d(n, {
        Group: () => C.Group,
        GroupField: () => C.GroupField,
        InViewTracker: () => w,
        TextField: () => C.TextField,
        TinaParser: () => O,
        TinaPayloadProvider: () => u.o,
        TinaRichText: () => P,
        recursiveNestedTemplates: () => x,
        useGenerateCdnSource: () => j.jS,
        useGetCdnSource: () => j.C1,
        useImageParser: () => j.S1,
        usePrunedTinaKeys: () => y,
        useTinaComponents: () => p,
        useTinaPayload: () => u.i,
        useTranslations: () => h
      });
      var a = t(39793),
        r = t(93082),
        s = t(2631),
        o = t.n(s);
      var i = t(13331);
      const l = (0, i.setContextItem)({
          context: (0, r.createContext)({}),
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
        p = () => (0, r.useContext)(l);
      var u = t(54563);
      const m = (e, n) => Array.isArray(e) ? e.map(e => m(e, n)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((t, a) => (a !== n && (t[a] = m(e[a], n)), t), {}) : e,
        y = e => (0, r.useMemo)(() => m(e, "key"), [e]);
      var f = t(97773),
        g = t.n(f),
        b = t(36351);
      const h = ({
        payload: e,
        variables: n
      }) => {
        const t = ((e, n) => {
            const t = {};
            return o().cloneDeepWith(e, (e, a, r) => {
              a === n && e && (t[r.key] = e)
            }), t
          })(e, b.Qw),
          a = JSON.parse(JSON.stringify(o().merge(JSON.parse(JSON.stringify(t)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          r = JSON.parse(JSON.stringify(e));
        return o().cloneDeepWith(r, (e, n, t) => {
          (e => {
            if (!e || !o().has(e, "key") || e.translated) return;
            const n = a[e.key] ?? null;
            if (!n) return;
            const t = g()(n);
            Object.keys(t).map(n => {
              o().set(e, n, t[n])
            }), o().set(e, "translated", !0), Object.freeze(e)
          })(t)
        }), r
      };
      var _ = t(39279),
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
            track: s
          } = (0, k.useGtmTrack)(), {
            ref: o,
            scrollTracked: l
          } = (0, i.useScrollTracking)(e);
          return (0, r.useEffect)(() => {
            l && s({
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
          const s = (0, r.useMemo)(() => (o().cloneDeepWith(n, (t, a) => {
            "_template" !== a || Number.isInteger(Number(t)) || o().get(e, t) || (console.error(`TinaParser:useComponentRenderer: Component ${t} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", e))
          }), (({
            components: e,
            payload: n,
            componentProps: t
          }) => {
            const s = i => {
              let l = "";
              if (l = Array.isArray(i?.[b.ZH]) ? i[b.ZH].map(e => s(e)) : i?.[b.ZH] ?? "", !i?._template) return l;
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
              return (0, r.createElement)(p, {
                ...n?.meta,
                ...i,
                ...t,
                t: e => u.find(n => n?._key === e)?.value ?? e,
                key: m
              }, l)
            };
            return n?.[b.ZH]?.length ? s(n) : null
          })({
            components: e,
            payload: n,
            componentProps: t
          })), [JSON.stringify(n)]);
          return s
        },
        O = ({
          tina: e,
          components: n = {},
          componentProps: t = {}
        }) => {
          const s = (0, u.i)(),
            [i, l] = (0, r.useState)(null),
            [d, m] = (0, r.useState)(null);
          (0, r.useEffect)(() => {
            e?.payload && l(e.payload), e?.variables && m(e.variables)
          }, [e]);
          const [y] = (0, r.useState)({
            ...n,
            ...p() ?? {}
          }), f = (({
            payload: e
          }) => {
            const [n, t] = (0, r.useState)(e);
            return (0, r.useEffect)(() => {
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
          return (0, r.useMemo)(() => {
            if (!i) return null;
            const n = g,
              r = i?.meta?.prod ?? i?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              o = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: r
                }
              };
            return (0, a.jsx)(u.o, {
              payload: o,
              children: (0, a.jsx)(c, {
                components: y,
                children: (0, a.jsx)(v, {
                  payload: n,
                  components: y,
                  componentProps: {
                    ...t,
                    tina: e
                  }
                })
              })
            })
          }, [s, i, JSON.stringify(f), JSON.stringify(g)])
        };
      var j = t(25993);
      const N = (e = "", n = 0, t = {}, a = () => {}) => {
          let r = {
            ...t
          };
          if (n > 0) {
            const s = N(e, n - 1, t, a);
            r = {
              ...r,
              ...a(e, {
                templates: s
              })
            }
          }
          return r
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
      var C = t(77281)
    }
  }
]);