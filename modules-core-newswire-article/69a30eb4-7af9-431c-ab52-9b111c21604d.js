try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "69a30eb4-7af9-431c-ab52-9b111c21604d", e._sentryDebugIdIdentifier = "sentry-dbid-69a30eb4-7af9-431c-ab52-9b111c21604d")
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
        Group: () => x.Group,
        GroupField: () => x.GroupField,
        GtmField: () => b.f6,
        HiddenInput: () => E.t$,
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
        TextField: () => x.TextField,
        ThemeField: () => b.gY,
        TinaLabel: () => E.ri,
        TinaParser: () => v,
        TinaPayloadProvider: () => p.o,
        TinaRichText: () => O,
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
        useGenerateCdnSource: () => P.jS,
        useGetCdnSource: () => P.C1,
        useImageParser: () => P.S1,
        usePrunedTinaKeys: () => f,
        useTinaComponents: () => u,
        useTinaPayload: () => p.i,
        useTranslations: () => _
      });
      var r = n(39793),
        a = n(93082),
        s = n(69646),
        o = n.n(s);
      var l = n(13331);
      const i = (0, l.setContextItem)({
          context: (0, a.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: d
        } = i,
        c = ({
          children: e,
          components: t
        }) => (0, r.jsx)(d, {
          value: t,
          children: e
        }),
        u = () => (0, a.useContext)(i);
      var p = n(54563);
      const m = (e, t) => Array.isArray(e) ? e.map(e => m(e, t)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((n, r) => (r !== t && (n[r] = m(e[r], t)), n), {}) : e,
        f = e => (0, a.useMemo)(() => m(e, "key"), [e]);
      var y = n(97773),
        g = n.n(y),
        b = n(45966);
      const _ = ({
        payload: e,
        variables: t
      }) => {
        const n = ((e, t) => {
            const n = {};
            return o().cloneDeepWith(e, (e, r, a) => {
              r === t && e && (n[a.key] = e)
            }), n
          })(e, b.Qw),
          r = JSON.parse(JSON.stringify(o().merge(JSON.parse(JSON.stringify(n)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
          a = JSON.parse(JSON.stringify(e));
        return o().cloneDeepWith(a, (e, t, n) => {
          (e => {
            if (!e || !o().has(e, "key") || e.translated) return;
            const t = r[e.key] ?? null;
            if (!t) return;
            const n = g()(t);
            Object.keys(n).map(t => {
              o().set(e, t, n[t])
            }), o().set(e, "translated", !0), Object.freeze(e)
          })(n)
        }), a
      };
      var h = n(39279),
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
          return (0, a.useEffect)(() => {
            i && s({
              ...k,
              ...n
            })
          }, [i]), (0, r.jsx)("section", {
            ref: o,
            children: t
          })
        },
        T = ({
          impressionTracking: e,
          gtm: t = {},
          children: n
        }) => e?.shouldTrack ? (0, r.jsx)(w, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        F = ({
          components: e,
          payload: t,
          componentProps: n = {}
        }) => {
          const s = (0, a.useMemo)(() => (o().cloneDeepWith(t, (n, r) => {
            "_template" !== r || Number.isInteger(Number(n)) || o().get(e, n) || (console.error(`TinaParser:useComponentRenderer: Component ${n} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", e))
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
              const u = ((e, t) => n => ((e, t, n) => (0, r.jsx)(T, {
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
            [l, i] = (0, a.useState)(null),
            [d, m] = (0, a.useState)(null);
          (0, a.useEffect)(() => {
            e?.payload && i(e.payload), e?.variables && m(e.variables)
          }, [e]);
          const [f] = (0, a.useState)({
            ...t,
            ...u() ?? {}
          }), y = (({
            payload: e
          }) => {
            const [t, n] = (0, a.useState)(e);
            return (0, a.useEffect)(() => {
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
          }), g = _({
            payload: l,
            variables: d
          });
          return (0, a.useMemo)(() => {
            if (!l) return null;
            const t = g,
              a = l?.meta?.prod ?? l?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              o = {
                ...l,
                meta: {
                  ...l?.meta ?? {},
                  prod: a
                }
              };
            return (0, r.jsx)(p.o, {
              payload: o,
              children: (0, r.jsx)(c, {
                components: f,
                children: (0, r.jsx)(F, {
                  payload: t,
                  components: f,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }, [s, l, JSON.stringify(y), JSON.stringify(g)])
        };
      var P = n(25993);
      const C = (e = "", t = 0, n = {}, r = () => {}) => {
          let a = {
            ...n
          };
          if (t > 0) {
            const s = C(e, t - 1, n, r);
            a = {
              ...a,
              ...r(e, {
                templates: s
              })
            }
          }
          return a
        },
        I = C,
        O = ({
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
        E = n(30635)
    }
  }
]);