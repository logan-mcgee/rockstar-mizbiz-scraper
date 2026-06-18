try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "58f85b50-4cd3-4bd2-9557-cbd5d05443aa", e._sentryDebugIdIdentifier = "sentry-dbid-58f85b50-4cd3-4bd2-9557-cbd5d05443aa")
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
  [3769, 6150], {
    94931(e, t, n) {
      var r = n(93082),
        a = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, n) {
        var r, s = {},
          d = null,
          c = null;
        for (r in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) o.call(t, r) && !i.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: d,
          ref: c,
          props: s,
          _owner: l.current
        }
      }
      t.Fragment = s, t.jsx = d, t.jsxs = d
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
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
            [f, y] = (0, r.useState)(u ?? m?.cdn ?? m?.prod ?? !0);
          (0, r.useEffect)(() => {
            y(u ?? m?.cdn ?? m?.prod ?? !0)
          }, [u, m]);
          const g = (0, r.useCallback)(e => {
            const t = null !== c,
              n = e?.previewSrc ?? e ?? null;
            if (null === n || "string" != typeof n) return null;
            if (n.startsWith("http")) return o(n);
            const r = `${t?(0,a.getCdnPrefix)(f):""}${n}`;
            return o(r)
          }, [f, c]);
          return {
            alt: e,
            ariaLabel: d,
            src: {
              mobile: g(c?.[p]?.mobile ?? c?.en_us?.mobile ?? t),
              imageMobileStyle: c?.[p]?.imageMobileStyle ?? c?.en_us?.imageMobileStyle ?? n,
              imageDesktopStyle: c?.[p]?.imageDesktopStyle ?? c?.en_us?.imageDesktopStyle ?? i,
              desktop: g(c?.[p]?.desktop ?? c?.en_us?.desktop ?? l)
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
        AriaLabelField: () => g.SF,
        AttributesFields: () => g.F2,
        BorderField: () => g.Ju,
        BorderImageField: () => g.cn,
        CTAsField: () => g.ml,
        ClassNamesField: () => g.bY,
        ComprehensiveImageFieldGroup: () => g.ln,
        ContentField: () => g.Y4,
        DisplayClassField: () => g.BK,
        Divider: () => x.cG,
        FieldWrapper: () => x.cm,
        FileInput: () => x.zp,
        FormEntryField: () => g.Jn,
        GridContextField: () => g.ig,
        Group: () => O.Group,
        GroupField: () => O.GroupField,
        GtmField: () => g.f6,
        HiddenInput: () => x.t$,
        IdField: () => g.KO,
        ImageField: () => g.CT,
        ImpressionTrackingField: () => g.pr,
        InViewTracker: () => k,
        ItemsField: () => g.Xt,
        LeadAssetToggle: () => g.ho,
        LocalizedImageGroup: () => g.SX,
        LocalizedResponsiveImageGroup: () => g.a2,
        MediaQueryField: () => g.Zn,
        MetaField: () => g.i2,
        NameField: () => g.om,
        PageThemeField: () => g.pg,
        PlatformsAndLinksField: () => g.Vz,
        PostEntryFields: () => g.mA,
        PostMetaField: () => g.Mw,
        PreviewImagesField: () => g.Vf,
        ResponsiveImageGroup: () => g.bK,
        ScrollmationField: () => g.sV,
        SimpleImageField: () => g.Oy,
        SingleImageSource: () => g.JP,
        StyleField: () => g.sE,
        TINA_MEMOQ_PREFIX: () => g.Qw,
        TINA_PARSER_KEY: () => g.ZH,
        TagsField: () => g.UP,
        TextField: () => g.A_,
        ThemeField: () => g.gY,
        TinaLabel: () => x.ri,
        TinaParser: () => F,
        TinaPayloadProvider: () => u.o,
        TinaRichText: () => I,
        TranslationKey: () => g.Br,
        UploadsField: () => g.nG,
        XMLField: () => g.I2,
        _defaultImageValues: () => g.m9,
        defaultItemUnique: () => g.Q,
        defaultPricingOptionsUnique: () => g.Ji,
        itemPropsWithKey: () => g.Rv,
        localizedImageField: () => g.xc,
        recursiveNestedTemplates: () => C,
        translatedField: () => g.z9,
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
      var f = n(97773),
        y = n.n(f),
        g = n(76589);
      const b = ({
        payload: e,
        variables: t
      }) => {
        const n = ((e, t) => {
            const n = {};
            return (0, s.cloneDeepWith)(e, (e, r, a) => {
              r === t && e && (n[a.key] = e)
            }), n
          })(e, g.Qw),
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
      var _ = n(39279),
        h = n(82199);
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
          } = (0, h.useGtmTrack)(), {
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
        T = ({
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
              if (i = Array.isArray(l?.[g.ZH]) ? l[g.ZH].map(e => o(e)) : l?.[g.ZH] ?? "", !l?._template) return i;
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
                m = `componentProps_${(0,_.A)()}`;
              return (0, a.createElement)(u, {
                ...t?.meta,
                ...l,
                ...n,
                t: e => p.find(t => t?._key === e)?.value ?? e,
                key: m
              }, i)
            };
            return t?.[g.ZH]?.length ? o(t) : null
          })({
            components: e,
            payload: t,
            componentProps: n
          })), [JSON.stringify(t)]);
          return o
        },
        F = ({
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
          const [f] = (0, a.useState)({
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
          }), g = b({
            payload: l,
            variables: p
          });
          return (0, a.useMemo)(() => {
            if (!l) return null;
            const t = g,
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
                components: f,
                children: (0, r.jsx)(T, {
                  payload: t,
                  components: f,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }, [o, l, JSON.stringify(y), JSON.stringify(g)])
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
      var O = n(77281),
        x = n(30635)
    }
  }
]);