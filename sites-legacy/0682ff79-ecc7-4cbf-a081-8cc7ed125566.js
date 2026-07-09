try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0682ff79-ecc7-4cbf-a081-8cc7ed125566", e._sentryDebugIdIdentifier = "sentry-dbid-0682ff79-ecc7-4cbf-a081-8cc7ed125566")
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
        AriaLabelField: () => F.SF,
        AttributesFields: () => F.F2,
        BorderField: () => F.Ju,
        BorderImageField: () => F.cn,
        CTAsField: () => F.ml,
        ClassNamesField: () => F.bY,
        ComprehensiveImageFieldGroup: () => F.ln,
        ContentField: () => F.Y4,
        DisplayClassField: () => F.BK,
        Divider: () => x.cG,
        FieldWrapper: () => x.cm,
        FileInput: () => x.zp,
        FormEntryField: () => F.Jn,
        GridContextField: () => F.ig,
        Group: () => j.Group,
        GroupField: () => j.GroupField,
        GtmField: () => F.f6,
        HiddenInput: () => x.t$,
        IdField: () => F.KO,
        ImageField: () => F.CT,
        ImpressionTrackingField: () => F.pr,
        InViewTracker: () => v,
        ItemsField: () => F.Xt,
        LeadAssetToggle: () => F.ho,
        LocalizedImageGroup: () => F.SX,
        LocalizedResponsiveImageGroup: () => F.a2,
        MediaQueryField: () => F.Zn,
        MetaField: () => F.i2,
        NameField: () => F.om,
        PageThemeField: () => F.pg,
        PlatformsAndLinksField: () => F.Vz,
        PostEntryFields: () => F.mA,
        PostMetaField: () => F.Mw,
        PreviewImagesField: () => F.Vf,
        ResponsiveImageGroup: () => F.bK,
        ScrollmationField: () => F.sV,
        SimpleImageField: () => F.Oy,
        SingleImageSource: () => F.JP,
        StyleField: () => F.sE,
        TINA_MEMOQ_PREFIX: () => F.Qw,
        TINA_PARSER_KEY: () => F.ZH,
        TagsField: () => F.UP,
        TextField: () => F.A_,
        ThemeField: () => F.gY,
        TinaLabel: () => x.ri,
        TinaParser: () => O,
        TinaPayloadProvider: () => u.o,
        TinaRichText: () => M,
        TranslationKey: () => F.Br,
        UploadsField: () => F.nG,
        XMLField: () => F.I2,
        _defaultImageValues: () => F.m9,
        defaultItemUnique: () => F.Q,
        defaultPricingOptionsUnique: () => F.Ji,
        itemPropsWithKey: () => F.Rv,
        localizedImageField: () => F.xc,
        recursiveNestedTemplates: () => E,
        translatedField: () => F.z9,
        useGenerateCdnSource: () => N.jS,
        useGetCdnSource: () => N.C1,
        useImageParser: () => N.S1,
        usePrunedTinaKeys: () => f,
        useTinaComponents: () => p,
        useTinaPayload: () => u.i,
        useTranslations: () => T
      });
      var a = t(39793),
        r = t(93082),
        s = t(79098),
        o = t(11302);
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
        f = e => (0, r.useMemo)(() => m(e, "key"), [e]);
      var g = t(97773),
        y = t.n(g),
        b = t(40415),
        _ = t(97529),
        h = t(58969),
        F = t(76589);
      const T = ({
        payload: e,
        variables: n
      }) => {
        const t = ((e, n) => {
            const t = {};
            return (0, o.A)(e, (e, a, r) => {
              a === n && e && (t[r.key] = e)
            }), t
          })(e, F.Qw),
          a = JSON.parse(JSON.stringify((0, b.A)(JSON.parse(JSON.stringify(t)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          r = JSON.parse(JSON.stringify(e));
        return (0, o.A)(r, (e, n, t) => {
          (e => {
            if (!e || !(0, _.A)(e, "key") || e.translated) return;
            const n = a[e.key] ?? null;
            if (!n) return;
            const t = y()(n);
            Object.keys(t).map(n => {
              (0, h.A)(e, n, t[n])
            }), (0, h.A)(e, "translated", !0), Object.freeze(e)
          })(t)
        }), r
      };
      var k = t(26065),
        w = t(39279),
        S = t(82199);
      const I = {
          event: "page_section_impression",
          element_placement: null
        },
        v = ({
          threshold: e = .6,
          children: n,
          gtm: t = {}
        }) => {
          const {
            track: s
          } = (0, S.useGtmTrack)(), {
            ref: o,
            scrollTracked: l
          } = (0, i.useScrollTracking)(e);
          return (0, r.useEffect)(() => {
            l && s({
              ...I,
              ...t
            })
          }, [l]), (0, a.jsx)("section", {
            ref: o,
            children: n
          })
        },
        A = ({
          impressionTracking: e,
          gtm: n = {},
          children: t
        }) => e?.shouldTrack ? (0, a.jsx)(v, {
          threshold: e?.threshold,
          gtm: n,
          children: t
        }) : t,
        P = ({
          components: e,
          payload: n,
          componentProps: t = {}
        }) => {
          const s = (0, r.useMemo)(() => ((0, o.A)(n, (t, a) => {
            "_template" !== a || Number.isInteger(Number(t)) || (0, k.A)(e, t) || (console.error(`TinaParser:useComponentRenderer: Component ${t} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", e))
          }), (({
            components: e,
            payload: n,
            componentProps: t
          }) => {
            const s = o => {
              let i = "";
              if (i = Array.isArray(o?.[F.ZH]) ? o[F.ZH].map(e => s(e)) : o?.[F.ZH] ?? "", !o?._template) return i;
              let l = o._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: o
              }), l = "gen9.Hero");
              const d = (0, k.A)(e, l) ?? null;
              if (!d) return null;
              const c = ((e, n) => t => ((e, n, t) => (0, a.jsx)(A, {
                  impressionTracking: t?.impressionTracking,
                  gtm: t?.gtm,
                  children: (0, a.jsx)(e, {
                    ...n
                  })
                }))(e, t, n))(d, {
                  impressionTracking: o?.impressionTracking,
                  gtm: {
                    ...o?.gtm,
                    whatever: 1
                  }
                }),
                p = [...o?.translations ?? []].reverse(),
                u = `componentProps_${(0,w.A)()}`;
              return (0, r.createElement)(c, {
                ...n?.meta,
                ...o,
                ...t,
                t: e => p.find(n => n?._key === e)?.value ?? e,
                key: u
              }, i)
            };
            return n?.[F.ZH]?.length ? s(n) : null
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
          const i = (0, u.i)(),
            [l, d] = (0, r.useState)(null),
            [m, f] = (0, r.useState)(null);
          (0, r.useEffect)(() => {
            e?.payload && d(e.payload), e?.variables && f(e.variables)
          }, [e]);
          const [g] = (0, r.useState)({
            ...n,
            ...p() ?? {}
          }), y = (({
            payload: e
          }) => {
            const [n, t] = (0, r.useState)(e);
            return (0, r.useEffect)(() => {
              const n = (0, s.A)(() => {
                const n = JSON.parse(JSON.stringify(e));
                (0, o.A)(n, (e, n, t) => {
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
            payload: l
          }), b = T({
            payload: l,
            variables: m
          });
          return (0, r.useMemo)(() => {
            if (!l) return null;
            const n = b,
              r = l?.meta?.prod ?? l?.meta?.cdn ?? i?.meta?.prod ?? i?.meta?.cdn ?? !1,
              s = {
                ...l,
                meta: {
                  ...l?.meta ?? {},
                  prod: r
                }
              };
            return (0, a.jsx)(u.o, {
              payload: s,
              children: (0, a.jsx)(c, {
                components: g,
                children: (0, a.jsx)(P, {
                  payload: n,
                  components: g,
                  componentProps: {
                    ...t,
                    tina: e
                  }
                })
              })
            })
          }, [i, l, JSON.stringify(y), JSON.stringify(b)])
        };
      var N = t(25993);
      const C = (e = "", n = 0, t = {}, a = () => {}) => {
          let r = {
            ...t
          };
          if (n > 0) {
            const s = C(e, n - 1, t, a);
            r = {
              ...r,
              ...a(e, {
                templates: s
              })
            }
          }
          return r
        },
        E = C,
        M = ({
          html: e,
          as: n = "span",
          ...t
        }) => (0, a.jsx)(n, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...t
        });
      var j = t(77281),
        x = t(30635)
    }
  }
]);