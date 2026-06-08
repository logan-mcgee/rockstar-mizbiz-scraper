try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f5ac61aa-820c-43fb-952d-7aec9399a3c6", e._sentryDebugIdIdentifier = "sentry-dbid-f5ac61aa-820c-43fb-952d-7aec9399a3c6")
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
        AriaLabelField: () => b.SF,
        AttributesFields: () => b.F2,
        BorderField: () => b.Ju,
        BorderImageField: () => b.cn,
        CTAsField: () => b.ml,
        ClassNamesField: () => b.bY,
        ComprehensiveImageFieldGroup: () => b.ln,
        ContentField: () => b.Y4,
        DisplayClassField: () => b.BK,
        Divider: () => O.cG,
        FieldWrapper: () => O.cm,
        FileInput: () => O.zp,
        FormEntryField: () => b.Jn,
        GridContextField: () => b.ig,
        Group: () => M.Group,
        GroupField: () => M.GroupField,
        GtmField: () => b.f6,
        HiddenInput: () => O.t$,
        IdField: () => b.KO,
        ImageField: () => b.CT,
        ImpressionTrackingField: () => b.pr,
        InViewTracker: () => w,
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
        TextField: () => M.TextField,
        ThemeField: () => b.gY,
        TinaLabel: () => O.ri,
        TinaParser: () => v,
        TinaPayloadProvider: () => p.o,
        TinaRichText: () => x,
        TranslationKey: () => b.Br,
        UploadsField: () => b.nG,
        XMLField: () => b.I2,
        _defaultImageValues: () => b.m9,
        defaultItemUnique: () => b.Q,
        defaultPricingOptionsUnique: () => b.Ji,
        itemPropsWithKey: () => b.Rv,
        localizedImageField: () => b.xc,
        recursiveNestedTemplates: () => I,
        translatedField: () => b.z9,
        useGenerateCdnSource: () => C.jS,
        useGetCdnSource: () => C.C1,
        useImageParser: () => C.S1,
        usePrunedTinaKeys: () => g,
        useTinaComponents: () => u,
        useTinaPayload: () => p.i,
        useTranslations: () => h
      });
      var a = n(39793),
        r = n(93082),
        s = n(69646),
        o = n.n(s);
      var l = n(13331);
      const i = (0, l.setContextItem)({
          context: (0, r.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: d
        } = i,
        c = ({
          children: e,
          components: t
        }) => (0, a.jsx)(d, {
          value: t,
          children: e
        }),
        u = () => (0, r.useContext)(i);
      var p = n(54563);
      const m = (e, t) => Array.isArray(e) ? e.map(e => m(e, t)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((n, a) => (a !== t && (n[a] = m(e[a], t)), n), {}) : e,
        g = e => (0, r.useMemo)(() => m(e, "key"), [e]);
      var f = n(97773),
        y = n.n(f),
        b = n(45966);
      const h = ({
        payload: e,
        variables: t
      }) => {
        const n = ((e, t) => {
            const n = {};
            return o().cloneDeepWith(e, (e, a, r) => {
              a === t && e && (n[r.key] = e)
            }), n
          })(e, b.Qw),
          a = JSON.parse(JSON.stringify(o().merge(JSON.parse(JSON.stringify(n)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
          r = JSON.parse(JSON.stringify(e));
        return o().cloneDeepWith(r, (e, t, n) => {
          (e => {
            if (!e || !o().has(e, "key") || e.translated) return;
            const t = a[e.key] ?? null;
            if (!t) return;
            const n = y()(t);
            Object.keys(n).map(t => {
              o().set(e, t, n[t])
            }), o().set(e, "translated", !0), Object.freeze(e)
          })(n)
        }), r
      };
      var _ = n(39279),
        S = n(82199);
      const k = {
          event: "page_section_impression",
          element_placement: null
        },
        w = ({
          threshold: e = .6,
          children: t,
          gtm: n = {}
        }) => {
          const {
            track: s
          } = (0, S.useGtmTrack)(), {
            ref: o,
            scrollTracked: i
          } = (0, l.useScrollTracking)(e);
          return (0, r.useEffect)(() => {
            i && s({
              ...k,
              ...n
            })
          }, [i]), (0, a.jsx)("section", {
            ref: o,
            children: t
          })
        },
        F = ({
          impressionTracking: e,
          gtm: t = {},
          children: n
        }) => e?.shouldTrack ? (0, a.jsx)(w, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        T = ({
          components: e,
          payload: t,
          componentProps: n = {}
        }) => {
          const s = (0, r.useMemo)(() => (o().cloneDeepWith(t, (n, a) => {
            "_template" !== a || Number.isInteger(Number(n)) || o().get(e, n) || (console.error(`TinaParser:useComponentRenderer: Component ${n} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", e))
          }), (({
            components: e,
            payload: t,
            componentProps: n
          }) => {
            const s = l => {
              let i = "";
              if (i = Array.isArray(l?.[b.ZH]) ? l[b.ZH].map(e => s(e)) : l?.[b.ZH] ?? "", !l?._template) return i;
              let d = l._template;
              "0" === d && (console.warn(`The _template "${d}" wasn't found in the available components. The _template "${d}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: l
              }), d = "gen9.Hero");
              const c = o().get(e, d) ?? null;
              if (!c) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, a.jsx)(F, {
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
                m = `componentProps_${(0,_.A)()}`;
              return (0, r.createElement)(u, {
                ...t?.meta,
                ...l,
                ...n,
                t: e => p.find(t => t?._key === e)?.value ?? e,
                key: m
              }, i)
            };
            return t?.[b.ZH]?.length ? s(t) : null
          })({
            components: e,
            payload: t,
            componentProps: n
          })), [JSON.stringify(t)]);
          return s
        },
        v = ({
          tina: e,
          components: t = {},
          componentProps: n = {}
        }) => {
          const s = (0, p.i)(),
            [l, i] = (0, r.useState)(null),
            [d, m] = (0, r.useState)(null);
          (0, r.useEffect)(() => {
            e?.payload && i(e.payload), e?.variables && m(e.variables)
          }, [e]);
          const [g] = (0, r.useState)({
            ...t,
            ...u() ?? {}
          }), f = (({
            payload: e
          }) => {
            const [t, n] = (0, r.useState)(e);
            return (0, r.useEffect)(() => {
              const t = o().debounce(() => {
                const t = JSON.parse(JSON.stringify(e));
                o().cloneDeepWith(t, (e, t, n) => {
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
          }), y = h({
            payload: l,
            variables: d
          });
          return (0, r.useMemo)(() => {
            if (!l) return null;
            const t = y,
              r = l?.meta?.prod ?? l?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              o = {
                ...l,
                meta: {
                  ...l?.meta ?? {},
                  prod: r
                }
              };
            return (0, a.jsx)(p.o, {
              payload: o,
              children: (0, a.jsx)(c, {
                components: g,
                children: (0, a.jsx)(T, {
                  payload: t,
                  components: g,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }, [s, l, JSON.stringify(f), JSON.stringify(y)])
        };
      var C = n(25993);
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
        I = P,
        x = ({
          html: e,
          as: t = "span",
          ...n
        }) => (0, a.jsx)(t, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...n
        });
      var M = n(77281),
        O = n(30635)
    }
  }
]);