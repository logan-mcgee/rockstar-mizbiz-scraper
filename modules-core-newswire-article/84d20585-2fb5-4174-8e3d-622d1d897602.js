try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "84d20585-2fb5-4174-8e3d-622d1d897602", e._sentryDebugIdIdentifier = "sentry-dbid-84d20585-2fb5-4174-8e3d-622d1d897602")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3769], {
    54563(e, t, n) {
      n.d(t, {
        i: () => i,
        o: () => l
      });
      var a = n(39793),
        r = n(93082);
      const s = (0, n(13331).setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: o
        } = s,
        l = ({
          children: e,
          payload: t
        }) => (0, a.jsx)(o, {
          value: t,
          children: e
        }),
        i = () => (0, r.useContext)(s)
    },
    25993(e, t, n) {
      n.d(t, {
        C1: () => i,
        S1: () => l,
        XC: () => p,
        jS: () => d,
        qg: () => c,
        z0: () => u
      });
      var a = n(93082),
        r = n(13331),
        s = n(54563);
      const o = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: n
          } = new URL(e, (0, r.getCdnPrefix)(!0));
          return "/" === n ? null : (t.endsWith(".akamaized.net"), e)
        },
        l = ({
          alt: e = null,
          mobile: t = null,
          imageMobileStyle: n = {},
          desktop: l = null,
          imageDesktopStyle: i = {},
          ariaLabel: d = null,
          sources: c = null,
          prod: u = null
        }) => {
          const p = (0, r.useLocale)(),
            {
              meta: m = {}
            } = (0, s.i)() ?? {},
            [g, f] = (0, a.useState)(u ?? m?.cdn ?? m?.prod ?? !0);
          (0, a.useEffect)(() => {
            f(u ?? m?.cdn ?? m?.prod ?? !0)
          }, [u, m]);
          const y = (0, a.useCallback)(e => {
            const t = null !== c,
              n = e?.previewSrc ?? e ?? null;
            if (null === n || "string" != typeof n) return null;
            if (n.startsWith("http")) return o(n);
            const a = `${t?(0,r.getCdnPrefix)(g):""}${n}`;
            return o(a)
          }, [g, c]);
          return {
            alt: e,
            ariaLabel: d,
            src: {
              mobile: y(c?.[p]?.mobile ?? c?.en_us?.mobile ?? t),
              imageMobileStyle: c?.[p]?.imageMobileStyle ?? c?.en_us?.imageMobileStyle ?? n,
              imageDesktopStyle: c?.[p]?.imageDesktopStyle ?? c?.en_us?.imageDesktopStyle ?? i,
              desktop: y(c?.[p]?.desktop ?? c?.en_us?.desktop ?? l)
            }
          }
        },
        i = e => {
          const t = (0, s.i)() ?? {},
            {
              meta: n = {}
            } = t,
            [l, i] = (0, a.useState)(n?.cdn ?? n?.prod ?? !1);
          return (0, a.useEffect)(() => {
            i(n?.cdn ?? n?.prod ?? !1)
          }, [n]), e ? e?.startsWith("http") ? o(e) : o(`${(0,r.getCdnPrefix)(l)}${e}`) : null
        },
        d = () => {
          const e = (0, s.i)() ?? {},
            {
              meta: t = {}
            } = e,
            n = (0, a.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, a.useCallback)((e, t = {}) => {
            const a = t?.prod ?? n;
            return e ? e?.startsWith("http") ? o(e) : o(`${(0,r.getCdnPrefix)(a)}${e}`) : null
          }, [n])
        },
        c = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,r.getCdnPrefix)(!1)}${t}`
        },
        p = e => e.meta.uploads_directory
    },
    60620(e, t, n) {
      n.r(t), n.d(t, {
        AriaLabelField: () => y.SF,
        AttributesFields: () => y.F2,
        BorderField: () => y.Ju,
        BorderImageField: () => y.cn,
        CTAsField: () => y.ml,
        ClassNamesField: () => y.bY,
        ComprehensiveImageFieldGroup: () => y.ln,
        ContentField: () => y.Y4,
        DisplayClassField: () => y.BK,
        Divider: () => M.cG,
        FieldWrapper: () => M.cm,
        FileInput: () => M.zp,
        FormEntryField: () => y.Jn,
        GridContextField: () => y.ig,
        Group: () => x.Group,
        GroupField: () => x.GroupField,
        GtmField: () => y.f6,
        HiddenInput: () => M.t$,
        IdField: () => y.KO,
        ImageField: () => y.CT,
        ImpressionTrackingField: () => y.pr,
        InViewTracker: () => k,
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
        TinaLabel: () => M.ri,
        TinaParser: () => T,
        TinaPayloadProvider: () => u.o,
        TinaRichText: () => I,
        TranslationKey: () => y.Br,
        UploadsField: () => y.nG,
        XMLField: () => y.I2,
        _defaultImageValues: () => y.m9,
        defaultItemUnique: () => y.Q,
        defaultPricingOptionsUnique: () => y.Ji,
        itemPropsWithKey: () => y.Rv,
        localizedImageField: () => y.xc,
        recursiveNestedTemplates: () => C,
        translatedField: () => y.z9,
        useGenerateCdnSource: () => v.jS,
        useGetCdnSource: () => v.C1,
        useImageParser: () => v.S1,
        usePrunedTinaKeys: () => m,
        useTinaComponents: () => c,
        useTinaPayload: () => u.i,
        useTranslations: () => b
      });
      var a = n(39793),
        r = n(93082),
        s = n(40283);
      var o = n(13331);
      const l = (0, o.setContextItem)({
          context: (0, r.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: i
        } = l,
        d = ({
          children: e,
          components: t
        }) => (0, a.jsx)(i, {
          value: t,
          children: e
        }),
        c = () => (0, r.useContext)(l);
      var u = n(54563);
      const p = (e, t) => Array.isArray(e) ? e.map(e => p(e, t)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((n, a) => (a !== t && (n[a] = p(e[a], t)), n), {}) : e,
        m = e => (0, r.useMemo)(() => p(e, "key"), [e]);
      var g = n(97773),
        f = n.n(g),
        y = n(76589);
      const b = ({
        payload: e,
        variables: t
      }) => {
        const n = ((e, t) => {
            const n = {};
            return (0, s.cloneDeepWith)(e, (e, a, r) => {
              a === t && e && (n[r.key] = e)
            }), n
          })(e, y.Qw),
          a = JSON.parse(JSON.stringify((0, s.merge)(JSON.parse(JSON.stringify(n)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
          r = JSON.parse(JSON.stringify(e));
        return (0, s.cloneDeepWith)(r, (e, t, n) => {
          (e => {
            if (!e || !(0, s.has)(e, "key") || e.translated) return;
            const t = a[e.key] ?? null;
            if (!t) return;
            const n = f()(t);
            Object.keys(n).map(t => {
              (0, s.set)(e, t, n[t])
            }), (0, s.set)(e, "translated", !0), Object.freeze(e)
          })(n)
        }), r
      };
      var h = n(39279),
        _ = n(82199);
      const S = {
          event: "page_section_impression",
          element_placement: null
        },
        k = ({
          threshold: e = .6,
          children: t,
          gtm: n = {}
        }) => {
          const {
            track: s
          } = (0, _.useGtmTrack)(), {
            ref: l,
            scrollTracked: i
          } = (0, o.useScrollTracking)(e);
          return (0, r.useEffect)(() => {
            i && s({
              ...S,
              ...n
            })
          }, [i]), (0, a.jsx)("section", {
            ref: l,
            children: t
          })
        },
        w = ({
          impressionTracking: e,
          gtm: t = {},
          children: n
        }) => e?.shouldTrack ? (0, a.jsx)(k, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        F = ({
          components: e,
          payload: t,
          componentProps: n = {}
        }) => {
          const o = (0, r.useMemo)(() => ((0, s.cloneDeepWith)(t, (n, a) => {
            "_template" !== a || Number.isInteger(Number(n)) || (0, s.get)(e, n) || (console.error(`TinaParser:useComponentRenderer: Component ${n} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", e))
          }), (({
            components: e,
            payload: t,
            componentProps: n
          }) => {
            const o = l => {
              let i = "";
              if (i = Array.isArray(l?.[y.ZH]) ? l[y.ZH].map(e => o(e)) : l?.[y.ZH] ?? "", !l?._template) return i;
              let d = l._template;
              "0" === d && (console.warn(`The _template "${d}" wasn't found in the available components. The _template "${d}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: l
              }), d = "gen9.Hero");
              const c = (0, s.get)(e, d) ?? null;
              if (!c) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, a.jsx)(w, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, a.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(c, {
                  impressionTracking: l?.impressionTracking,
                  gtm: {
                    ...l?.gtm,
                    whatever: 1
                  }
                }),
                p = [...l?.translations ?? []].reverse(),
                m = `componentProps_${(0,h.A)()}`;
              return (0, r.createElement)(u, {
                ...t?.meta,
                ...l,
                ...n,
                t: e => p.find(t => t?._key === e)?.value ?? e,
                key: m
              }, i)
            };
            return t?.[y.ZH]?.length ? o(t) : null
          })({
            components: e,
            payload: t,
            componentProps: n
          })), [JSON.stringify(t)]);
          return o
        },
        T = ({
          tina: e,
          components: t = {},
          componentProps: n = {}
        }) => {
          const o = (0, u.i)(),
            [l, i] = (0, r.useState)(null),
            [p, m] = (0, r.useState)(null);
          (0, r.useEffect)(() => {
            e?.payload && i(e.payload), e?.variables && m(e.variables)
          }, [e]);
          const [g] = (0, r.useState)({
            ...t,
            ...c() ?? {}
          }), f = (({
            payload: e
          }) => {
            const [t, n] = (0, r.useState)(e);
            return (0, r.useEffect)(() => {
              const t = (0, s.debounce)(() => {
                const t = JSON.parse(JSON.stringify(e));
                (0, s.cloneDeepWith)(t, (e, t, n) => {
                  n?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const t = e.mediaQueryList.filter(({
                        mediaQueryString: e
                      }) => window.matchMedia(e).matches) ?? null,
                      n = Object.assign({}, ...t);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...n,
                      _template: e?._template
                    })
                  })(n)
                }), n(t)
              }, 250);
              return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
            }, [e]), t
          })({
            payload: l
          }), y = b({
            payload: l,
            variables: p
          });
          return (0, r.useMemo)(() => {
            if (!l) return null;
            const t = y,
              r = l?.meta?.prod ?? l?.meta?.cdn ?? o?.meta?.prod ?? o?.meta?.cdn ?? !1,
              s = {
                ...l,
                meta: {
                  ...l?.meta ?? {},
                  prod: r
                }
              };
            return (0, a.jsx)(u.o, {
              payload: s,
              children: (0, a.jsx)(d, {
                components: g,
                children: (0, a.jsx)(F, {
                  payload: t,
                  components: g,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }, [o, l, JSON.stringify(f), JSON.stringify(y)])
        };
      var v = n(25993);
      const P = (e = "", t = 0, n = {}, a = () => {}) => {
          let r = {
            ...n
          };
          if (t > 0) {
            const s = P(e, t - 1, n, a);
            r = {
              ...r,
              ...a(e, {
                templates: s
              })
            }
          }
          return r
        },
        C = P,
        I = ({
          html: e,
          as: t = "span",
          ...n
        }) => (0, a.jsx)(t, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...n
        });
      var x = n(77281),
        M = n(30635)
    }
  }
]);