try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b4fca25b-0f27-43fd-bdcd-e5cb96067594", e._sentryDebugIdIdentifier = "sentry-dbid-b4fca25b-0f27-43fd-bdcd-e5cb96067594")
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
        AriaLabelField: () => b.SF,
        AttributesFields: () => b.F2,
        BorderField: () => b.Ju,
        BorderImageField: () => b.cn,
        CTAsField: () => b.ml,
        ClassNamesField: () => b.bY,
        ComprehensiveImageFieldGroup: () => b.ln,
        ContentField: () => b.Y4,
        DisplayClassField: () => b.BK,
        Divider: () => E.cG,
        FieldWrapper: () => E.cm,
        FileInput: () => E.zp,
        FormEntryField: () => b.Jn,
        GridContextField: () => b.ig,
        Group: () => C.Group,
        GroupField: () => C.GroupField,
        GtmField: () => b.f6,
        HiddenInput: () => E.t$,
        IdField: () => b.KO,
        ImageField: () => b.CT,
        ImpressionTrackingField: () => b.pr,
        InViewTracker: () => k,
        ItemsField: () => b.Xt,
        LeadAssetToggle: () => b.ho,
        LocalizedImageGroup: () => b.SX,
        LocalizedResponsiveImageGroup: () => b.a2,
        MediaQueryField: () => b.Zn,
        MetaField: () => b.i2,
        NameField: () => b.om,
        PlatformsAndLinksField: () => b.Vz,
        PostEntryFields: () => b.mA,
        PostMetaField: () => b.Mw,
        PreviewImagesField: () => b.Vf,
        ResponsiveImageGroup: () => b.bK,
        ScrollmationField: () => b.sV,
        SimpleImageField: () => b.Oy,
        SingleImageSource: () => b.JP,
        StyleField: () => b.sE,
        TINA_MEMOQ_PREFIX: () => b.Qw,
        TINA_PARSER_KEY: () => b.ZH,
        TagsField: () => b.UP,
        TextField: () => C.TextField,
        ThemeField: () => b.gY,
        TinaLabel: () => E.ri,
        TinaParser: () => I,
        TinaPayloadProvider: () => u.o,
        TinaRichText: () => N,
        TranslationKey: () => b.Br,
        UploadsField: () => b.nG,
        XMLField: () => b.I2,
        _defaultImageValues: () => b.m9,
        defaultItemUnique: () => b.Q,
        defaultPricingOptionsUnique: () => b.Ji,
        itemPropsWithKey: () => b.Rv,
        localizedImageField: () => b.xc,
        recursiveNestedTemplates: () => O,
        translatedField: () => b.z9,
        useGenerateCdnSource: () => v.jS,
        useGetCdnSource: () => v.C1,
        useImageParser: () => v.S1,
        usePrunedTinaKeys: () => g,
        useTinaComponents: () => p,
        useTinaPayload: () => u.i,
        useTranslations: () => h
      });
      var a = t(39793),
        s = t(93082),
        r = t(2631),
        o = t.n(r);
      var i = t(13331);
      const l = (0, i.setContextItem)({
          context: (0, s.createContext)({}),
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
      var u = t(54563);
      const m = (e, n) => Array.isArray(e) ? e.map(e => m(e, n)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((t, a) => (a !== n && (t[a] = m(e[a], n)), t), {}) : e,
        g = e => (0, s.useMemo)(() => m(e, "key"), [e]);
      var y = t(97773),
        f = t.n(y),
        b = t(45966);
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
            const t = f()(n);
            Object.keys(t).map(n => {
              o().set(e, n, t[n])
            }), o().set(e, "translated", !0), Object.freeze(e)
          })(t)
        }), s
      };
      var _ = t(39279),
        F = t(82199);
      const T = {
          event: "page_section_impression",
          element_placement: null
        },
        k = ({
          threshold: e = .6,
          children: n,
          gtm: t = {}
        }) => {
          const {
            track: r
          } = (0, F.useGtmTrack)(), {
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
        w = ({
          impressionTracking: e,
          gtm: n = {},
          children: t
        }) => e?.shouldTrack ? (0, a.jsx)(k, {
          threshold: e?.threshold,
          gtm: n,
          children: t
        }) : t,
        S = ({
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
              const p = ((e, n) => t => ((e, n, t) => (0, a.jsx)(w, {
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
        I = ({
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
          const [g] = (0, s.useState)({
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
          }), f = h({
            payload: i,
            variables: d
          });
          return (0, s.useMemo)(() => {
            if (!i) return null;
            const n = f,
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
                components: g,
                children: (0, a.jsx)(S, {
                  payload: n,
                  components: g,
                  componentProps: {
                    ...t,
                    tina: e
                  }
                })
              })
            })
          }, [r, i, JSON.stringify(y), JSON.stringify(f)])
        };
      var v = t(25993);
      const P = (e = "", n = 0, t = {}, a = () => {}) => {
          let s = {
            ...t
          };
          if (n > 0) {
            const r = P(e, n - 1, t, a);
            s = {
              ...s,
              ...a(e, {
                templates: r
              })
            }
          }
          return s
        },
        O = P,
        N = ({
          html: e,
          as: n = "span",
          ...t
        }) => (0, a.jsx)(n, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...t
        });
      var C = t(77281),
        E = t(30635)
    }
  }
]);