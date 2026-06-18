try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9c264a7f-6094-4c92-b020-bef20cb01aff", e._sentryDebugIdIdentifier = "sentry-dbid-9c264a7f-6094-4c92-b020-bef20cb01aff")
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
  [3769], {
    60620(e, n, t) {
      t.r(n), t.d(n, {
        AriaLabelField: () => y.SF,
        AttributesFields: () => y.F2,
        BorderField: () => y.Ju,
        BorderImageField: () => y.cn,
        CTAsField: () => y.ml,
        ClassNamesField: () => y.bY,
        ComprehensiveImageFieldGroup: () => y.ln,
        ContentField: () => y.Y4,
        DisplayClassField: () => y.BK,
        Divider: () => C.cG,
        FieldWrapper: () => C.cm,
        FileInput: () => C.zp,
        FormEntryField: () => y.Jn,
        GridContextField: () => y.ig,
        Group: () => N.Group,
        GroupField: () => N.GroupField,
        GtmField: () => y.f6,
        HiddenInput: () => C.t$,
        IdField: () => y.KO,
        ImageField: () => y.CT,
        ImpressionTrackingField: () => y.pr,
        InViewTracker: () => T,
        ItemsField: () => y.Xt,
        LeadAssetToggle: () => y.ho,
        LocalizedImageGroup: () => y.SX,
        LocalizedResponsiveImageGroup: () => y.a2,
        MediaQueryField: () => y.Zn,
        MetaField: () => y.i2,
        NameField: () => y.om,
        PageThemeField: () => y.pg,
        PlatformsAndLinksField: () => y.Vz,
        PostEntryFields: () => y.mA,
        PostMetaField: () => y.Mw,
        PreviewImagesField: () => y.Vf,
        ResponsiveImageGroup: () => y.bK,
        ScrollmationField: () => y.sV,
        SimpleImageField: () => y.Oy,
        SingleImageSource: () => y.JP,
        StyleField: () => y.sE,
        TINA_MEMOQ_PREFIX: () => y.Qw,
        TINA_PARSER_KEY: () => y.ZH,
        TagsField: () => y.UP,
        TextField: () => y.A_,
        ThemeField: () => y.gY,
        TinaLabel: () => C.ri,
        TinaParser: () => S,
        TinaPayloadProvider: () => p.o,
        TinaRichText: () => O,
        TranslationKey: () => y.Br,
        UploadsField: () => y.nG,
        XMLField: () => y.I2,
        _defaultImageValues: () => y.m9,
        defaultItemUnique: () => y.Q,
        defaultPricingOptionsUnique: () => y.Ji,
        itemPropsWithKey: () => y.Rv,
        localizedImageField: () => y.xc,
        recursiveNestedTemplates: () => P,
        translatedField: () => y.z9,
        useGenerateCdnSource: () => I.jS,
        useGetCdnSource: () => I.C1,
        useImageParser: () => I.S1,
        usePrunedTinaKeys: () => m,
        useTinaComponents: () => c,
        useTinaPayload: () => p.i,
        useTranslations: () => b
      });
      var a = t(39793),
        s = t(93082),
        r = t(40283);
      var o = t(13331);
      const i = (0, o.setContextItem)({
          context: (0, s.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: l
        } = i,
        d = ({
          children: e,
          components: n
        }) => (0, a.jsx)(l, {
          value: n,
          children: e
        }),
        c = () => (0, s.useContext)(i);
      var p = t(54563);
      const u = (e, n) => Array.isArray(e) ? e.map(e => u(e, n)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((t, a) => (a !== n && (t[a] = u(e[a], n)), t), {}) : e,
        m = e => (0, s.useMemo)(() => u(e, "key"), [e]);
      var g = t(97773),
        f = t.n(g),
        y = t(76589);
      const b = ({
        payload: e,
        variables: n
      }) => {
        const t = ((e, n) => {
            const t = {};
            return (0, r.cloneDeepWith)(e, (e, a, s) => {
              a === n && e && (t[s.key] = e)
            }), t
          })(e, y.Qw),
          a = JSON.parse(JSON.stringify((0, r.merge)(JSON.parse(JSON.stringify(t)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          s = JSON.parse(JSON.stringify(e));
        return (0, r.cloneDeepWith)(s, (e, n, t) => {
          (e => {
            if (!e || !(0, r.has)(e, "key") || e.translated) return;
            const n = a[e.key] ?? null;
            if (!n) return;
            const t = f()(n);
            Object.keys(t).map(n => {
              (0, r.set)(e, n, t[n])
            }), (0, r.set)(e, "translated", !0), Object.freeze(e)
          })(t)
        }), s
      };
      var h = t(39279),
        _ = t(82199);
      const F = {
          event: "page_section_impression",
          element_placement: null
        },
        T = ({
          threshold: e = .6,
          children: n,
          gtm: t = {}
        }) => {
          const {
            track: r
          } = (0, _.useGtmTrack)(), {
            ref: i,
            scrollTracked: l
          } = (0, o.useScrollTracking)(e);
          return (0, s.useEffect)(() => {
            l && r({
              ...F,
              ...t
            })
          }, [l]), (0, a.jsx)("section", {
            ref: i,
            children: n
          })
        },
        k = ({
          impressionTracking: e,
          gtm: n = {},
          children: t
        }) => e?.shouldTrack ? (0, a.jsx)(T, {
          threshold: e?.threshold,
          gtm: n,
          children: t
        }) : t,
        w = ({
          components: e,
          payload: n,
          componentProps: t = {}
        }) => {
          const o = (0, s.useMemo)(() => ((0, r.cloneDeepWith)(n, (t, a) => {
            "_template" !== a || Number.isInteger(Number(t)) || (0, r.get)(e, t) || (console.error(`TinaParser:useComponentRenderer: Component ${t} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", e))
          }), (({
            components: e,
            payload: n,
            componentProps: t
          }) => {
            const o = i => {
              let l = "";
              if (l = Array.isArray(i?.[y.ZH]) ? i[y.ZH].map(e => o(e)) : i?.[y.ZH] ?? "", !i?._template) return l;
              let d = i._template;
              "0" === d && (console.warn(`The _template "${d}" wasn't found in the available components. The _template "${d}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: i
              }), d = "gen9.Hero");
              const c = (0, r.get)(e, d) ?? null;
              if (!c) return null;
              const p = ((e, n) => t => ((e, n, t) => (0, a.jsx)(k, {
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
                m = `componentProps_${(0,h.A)()}`;
              return (0, s.createElement)(p, {
                ...n?.meta,
                ...i,
                ...t,
                t: e => u.find(n => n?._key === e)?.value ?? e,
                key: m
              }, l)
            };
            return n?.[y.ZH]?.length ? o(n) : null
          })({
            components: e,
            payload: n,
            componentProps: t
          })), [JSON.stringify(n)]);
          return o
        },
        S = ({
          tina: e,
          components: n = {},
          componentProps: t = {}
        }) => {
          const o = (0, p.i)(),
            [i, l] = (0, s.useState)(null),
            [u, m] = (0, s.useState)(null);
          (0, s.useEffect)(() => {
            e?.payload && l(e.payload), e?.variables && m(e.variables)
          }, [e]);
          const [g] = (0, s.useState)({
            ...n,
            ...c() ?? {}
          }), f = (({
            payload: e
          }) => {
            const [n, t] = (0, s.useState)(e);
            return (0, s.useEffect)(() => {
              const n = (0, r.debounce)(() => {
                const n = JSON.parse(JSON.stringify(e));
                (0, r.cloneDeepWith)(n, (e, n, t) => {
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
          }), y = b({
            payload: i,
            variables: u
          });
          return (0, s.useMemo)(() => {
            if (!i) return null;
            const n = y,
              s = i?.meta?.prod ?? i?.meta?.cdn ?? o?.meta?.prod ?? o?.meta?.cdn ?? !1,
              r = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: s
                }
              };
            return (0, a.jsx)(p.o, {
              payload: r,
              children: (0, a.jsx)(d, {
                components: g,
                children: (0, a.jsx)(w, {
                  payload: n,
                  components: g,
                  componentProps: {
                    ...t,
                    tina: e
                  }
                })
              })
            })
          }, [o, i, JSON.stringify(f), JSON.stringify(y)])
        };
      var I = t(25993);
      const v = (e = "", n = 0, t = {}, a = () => {}) => {
          let s = {
            ...t
          };
          if (n > 0) {
            const r = v(e, n - 1, t, a);
            s = {
              ...s,
              ...a(e, {
                templates: r
              })
            }
          }
          return s
        },
        P = v,
        O = ({
          html: e,
          as: n = "span",
          ...t
        }) => (0, a.jsx)(n, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...t
        });
      var N = t(77281),
        C = t(30635)
    }
  }
]);