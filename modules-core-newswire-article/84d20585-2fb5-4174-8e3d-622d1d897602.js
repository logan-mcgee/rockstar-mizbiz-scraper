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
      var r = n(39793),
        a = n(93082);
      const s = (0, n(13331).setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: o
        } = s,
        l = ({
          children: e,
          payload: t
        }) => (0, r.jsx)(o, {
          value: t,
          children: e
        }),
        i = () => (0, a.useContext)(s)
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
      var r = n(93082),
        a = n(13331),
        s = n(54563);
      const o = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: n
          } = new URL(e, (0, a.getCdnPrefix)(!0));
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
          const p = (0, a.useLocale)(),
            {
              meta: m = {}
            } = (0, s.i)() ?? {},
            [g, y] = (0, r.useState)(u ?? m?.cdn ?? m?.prod ?? !0);
          (0, r.useEffect)(() => {
            y(u ?? m?.cdn ?? m?.prod ?? !0)
          }, [u, m]);
          const f = (0, r.useCallback)(e => {
            const t = null !== c,
              n = e?.previewSrc ?? e ?? null;
            if (null === n || "string" != typeof n) return null;
            if (n.startsWith("http")) return o(n);
            const r = `${t?(0,a.getCdnPrefix)(g):""}${n}`;
            return o(r)
          }, [g, c]);
          return {
            alt: e,
            ariaLabel: d,
            src: {
              mobile: f(c?.[p]?.mobile ?? c?.en_us?.mobile ?? t),
              imageMobileStyle: c?.[p]?.imageMobileStyle ?? c?.en_us?.imageMobileStyle ?? n,
              imageDesktopStyle: c?.[p]?.imageDesktopStyle ?? c?.en_us?.imageDesktopStyle ?? i,
              desktop: f(c?.[p]?.desktop ?? c?.en_us?.desktop ?? l)
            }
          }
        },
        i = e => {
          const t = (0, s.i)() ?? {},
            {
              meta: n = {}
            } = t,
            [l, i] = (0, r.useState)(n?.cdn ?? n?.prod ?? !1);
          return (0, r.useEffect)(() => {
            i(n?.cdn ?? n?.prod ?? !1)
          }, [n]), e ? e?.startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(l)}${e}`) : null
        },
        d = () => {
          const e = (0, s.i)() ?? {},
            {
              meta: t = {}
            } = e,
            n = (0, r.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, r.useCallback)((e, t = {}) => {
            const r = t?.prod ?? n;
            return e ? e?.startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(r)}${e}`) : null
          }, [n])
        },
        c = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,a.getCdnPrefix)(!1)}${t}`
        },
        p = e => e.meta.uploads_directory
    },
    60620(e, t, n) {
      n.r(t), n.d(t, {
        AriaLabelField: () => f.SF,
        AttributesFields: () => f.F2,
        BorderField: () => f.Ju,
        BorderImageField: () => f.cn,
        CTAsField: () => f.ml,
        ClassNamesField: () => f.bY,
        ComprehensiveImageFieldGroup: () => f.ln,
        ContentField: () => f.Y4,
        DisplayClassField: () => f.BK,
        Divider: () => M.cG,
        FieldWrapper: () => M.cm,
        FileInput: () => M.zp,
        FormEntryField: () => f.Jn,
        GridContextField: () => f.ig,
        Group: () => x.Group,
        GroupField: () => x.GroupField,
        GtmField: () => f.f6,
        HiddenInput: () => M.t$,
        IdField: () => f.KO,
        ImageField: () => f.CT,
        ImpressionTrackingField: () => f.pr,
        InViewTracker: () => k,
        ItemsField: () => f.Xt,
        LeadAssetToggle: () => f.ho,
        LocalizedImageGroup: () => f.SX,
        LocalizedResponsiveImageGroup: () => f.a2,
        MediaQueryField: () => f.Zn,
        MetaField: () => f.i2,
        NameField: () => f.om,
        PageThemeField: () => f.pg,
        PlatformsAndLinksField: () => f.Vz,
        PostEntryFields: () => f.mA,
        PostMetaField: () => f.Mw,
        PreviewImagesField: () => f.Vf,
        ResponsiveImageGroup: () => f.bK,
        ScrollmationField: () => f.sV,
        SimpleImageField: () => f.Oy,
        SingleImageSource: () => f.JP,
        StyleField: () => f.sE,
        TINA_MEMOQ_PREFIX: () => f.Qw,
        TINA_PARSER_KEY: () => f.ZH,
        TagsField: () => f.UP,
        TextField: () => f.A_,
        ThemeField: () => f.gY,
        TinaLabel: () => M.ri,
        TinaParser: () => T,
        TinaPayloadProvider: () => u.o,
        TinaRichText: () => I,
        TranslationKey: () => f.Br,
        UploadsField: () => f.nG,
        XMLField: () => f.I2,
        _defaultImageValues: () => f.m9,
        defaultItemUnique: () => f.Q,
        defaultPricingOptionsUnique: () => f.Ji,
        itemPropsWithKey: () => f.Rv,
        localizedImageField: () => f.xc,
        recursiveNestedTemplates: () => C,
        translatedField: () => f.z9,
        useGenerateCdnSource: () => v.jS,
        useGetCdnSource: () => v.C1,
        useImageParser: () => v.S1,
        usePrunedTinaKeys: () => m,
        useTinaComponents: () => c,
        useTinaPayload: () => u.i,
        useTranslations: () => b
      });
      var r = n(39793),
        a = n(93082),
        s = n(40283);
      var o = n(13331);
      const l = (0, o.setContextItem)({
          context: (0, a.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: i
        } = l,
        d = ({
          children: e,
          components: t
        }) => (0, r.jsx)(i, {
          value: t,
          children: e
        }),
        c = () => (0, a.useContext)(l);
      var u = n(54563);
      const p = (e, t) => Array.isArray(e) ? e.map(e => p(e, t)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((n, r) => (r !== t && (n[r] = p(e[r], t)), n), {}) : e,
        m = e => (0, a.useMemo)(() => p(e, "key"), [e]);
      var g = n(97773),
        y = n.n(g),
        f = n(76589);
      const b = ({
        payload: e,
        variables: t
      }) => {
        const n = ((e, t) => {
            const n = {};
            return (0, s.cloneDeepWith)(e, (e, r, a) => {
              r === t && e && (n[a.key] = e)
            }), n
          })(e, f.Qw),
          r = JSON.parse(JSON.stringify((0, s.merge)(JSON.parse(JSON.stringify(n)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
          a = JSON.parse(JSON.stringify(e));
        return (0, s.cloneDeepWith)(a, (e, t, n) => {
          (e => {
            if (!e || !(0, s.has)(e, "key") || e.translated) return;
            const t = r[e.key] ?? null;
            if (!t) return;
            const n = y()(t);
            Object.keys(n).map(t => {
              (0, s.set)(e, t, n[t])
            }), (0, s.set)(e, "translated", !0), Object.freeze(e)
          })(n)
        }), a
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
          return (0, a.useEffect)(() => {
            i && s({
              ...S,
              ...n
            })
          }, [i]), (0, r.jsx)("section", {
            ref: l,
            children: t
          })
        },
        w = ({
          impressionTracking: e,
          gtm: t = {},
          children: n
        }) => e?.shouldTrack ? (0, r.jsx)(k, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        F = ({
          components: e,
          payload: t,
          componentProps: n = {}
        }) => {
          const o = (0, a.useMemo)(() => ((0, s.cloneDeepWith)(t, (n, r) => {
            "_template" !== r || Number.isInteger(Number(n)) || (0, s.get)(e, n) || (console.error(`TinaParser:useComponentRenderer: Component ${n} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", e))
          }), (({
            components: e,
            payload: t,
            componentProps: n
          }) => {
            const o = l => {
              let i = "";
              if (i = Array.isArray(l?.[f.ZH]) ? l[f.ZH].map(e => o(e)) : l?.[f.ZH] ?? "", !l?._template) return i;
              let d = l._template;
              "0" === d && (console.warn(`The _template "${d}" wasn't found in the available components. The _template "${d}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: l
              }), d = "gen9.Hero");
              const c = (0, s.get)(e, d) ?? null;
              if (!c) return null;
              const u = ((e, t) => n => ((e, t, n) => (0, r.jsx)(w, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, r.jsx)(e, {
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
              return (0, a.createElement)(u, {
                ...t?.meta,
                ...l,
                ...n,
                t: e => p.find(t => t?._key === e)?.value ?? e,
                key: m
              }, i)
            };
            return t?.[f.ZH]?.length ? o(t) : null
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
            [l, i] = (0, a.useState)(null),
            [p, m] = (0, a.useState)(null);
          (0, a.useEffect)(() => {
            e?.payload && i(e.payload), e?.variables && m(e.variables)
          }, [e]);
          const [g] = (0, a.useState)({
            ...t,
            ...c() ?? {}
          }), y = (({
            payload: e
          }) => {
            const [t, n] = (0, a.useState)(e);
            return (0, a.useEffect)(() => {
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
          }), f = b({
            payload: l,
            variables: p
          });
          return (0, a.useMemo)(() => {
            if (!l) return null;
            const t = f,
              a = l?.meta?.prod ?? l?.meta?.cdn ?? o?.meta?.prod ?? o?.meta?.cdn ?? !1,
              s = {
                ...l,
                meta: {
                  ...l?.meta ?? {},
                  prod: a
                }
              };
            return (0, r.jsx)(u.o, {
              payload: s,
              children: (0, r.jsx)(d, {
                components: g,
                children: (0, r.jsx)(F, {
                  payload: t,
                  components: g,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }, [o, l, JSON.stringify(y), JSON.stringify(f)])
        };
      var v = n(25993);
      const P = (e = "", t = 0, n = {}, r = () => {}) => {
          let a = {
            ...n
          };
          if (t > 0) {
            const s = P(e, t - 1, n, r);
            a = {
              ...a,
              ...r(e, {
                templates: s
              })
            }
          }
          return a
        },
        C = P,
        I = ({
          html: e,
          as: t = "span",
          ...n
        }) => (0, r.jsx)(t, {
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