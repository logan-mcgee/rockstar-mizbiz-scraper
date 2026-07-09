try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1d0eae84-b13c-458e-9aa4-e29cf8caeac6", e._sentryDebugIdIdentifier = "sentry-dbid-1d0eae84-b13c-458e-9aa4-e29cf8caeac6")
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
  [2174, 3769, 6150, 9793], {
    94931(e, t, n) {
      var a = n(93082),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, n) {
        var a, s = {},
          d = null,
          c = null;
        for (a in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) o.call(t, a) && !l.hasOwnProperty(a) && (s[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === s[a] && (s[a] = t[a]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: c,
          props: s,
          _owner: i.current
        }
      }
      t.Fragment = s, t.jsx = d, t.jsxs = d
    },
    39793(e, t, n) {
      e.exports = n(94931)
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
        Divider: () => N.cG,
        FieldWrapper: () => N.cm,
        FileInput: () => N.zp,
        FormEntryField: () => y.Jn,
        GridContextField: () => y.ig,
        Group: () => E.Group,
        GroupField: () => E.GroupField,
        GtmField: () => y.f6,
        HiddenInput: () => N.t$,
        IdField: () => y.KO,
        ImageField: () => y.CT,
        ImpressionTrackingField: () => y.pr,
        InViewTracker: () => F,
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
        TinaLabel: () => N.ri,
        TinaParser: () => w,
        TinaPayloadProvider: () => p.o,
        TinaRichText: () => P,
        TranslationKey: () => y.Br,
        UploadsField: () => y.nG,
        XMLField: () => y.I2,
        _defaultImageValues: () => y.m9,
        defaultItemUnique: () => y.Q,
        defaultPricingOptionsUnique: () => y.Ji,
        itemPropsWithKey: () => y.Rv,
        localizedImageField: () => y.xc,
        recursiveNestedTemplates: () => O,
        translatedField: () => y.z9,
        useGenerateCdnSource: () => v.jS,
        useGetCdnSource: () => v.C1,
        useImageParser: () => v.S1,
        usePrunedTinaKeys: () => m,
        useTinaComponents: () => c,
        useTinaPayload: () => p.i,
        useTranslations: () => _
      });
      var a = n(39793),
        r = n(93082),
        s = n(40283);
      var o = n(13331);
      const i = (0, o.setContextItem)({
          context: (0, r.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: l
        } = i,
        d = ({
          children: e,
          components: t
        }) => (0, a.jsx)(l, {
          value: t,
          children: e
        }),
        c = () => (0, r.useContext)(i);
      var p = n(54563);
      const u = (e, t) => Array.isArray(e) ? e.map(e => u(e, t)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((n, a) => (a !== t && (n[a] = u(e[a], t)), n), {}) : e,
        m = e => (0, r.useMemo)(() => u(e, "key"), [e]);
      var f = n(97773),
        g = n.n(f),
        y = n(76589);
      const _ = ({
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
            const n = g()(t);
            Object.keys(n).map(t => {
              (0, s.set)(e, t, n[t])
            }), (0, s.set)(e, "translated", !0), Object.freeze(e)
          })(n)
        }), r
      };
      var b = n(39279),
        h = n(82199);
      const T = {
          event: "page_section_impression",
          element_placement: null
        },
        F = ({
          threshold: e = .6,
          children: t,
          gtm: n = {}
        }) => {
          const {
            track: s
          } = (0, h.useGtmTrack)(), {
            ref: i,
            scrollTracked: l
          } = (0, o.useScrollTracking)(e);
          return (0, r.useEffect)(() => {
            l && s({
              ...T,
              ...n
            })
          }, [l]), (0, a.jsx)("section", {
            ref: i,
            children: t
          })
        },
        k = ({
          impressionTracking: e,
          gtm: t = {},
          children: n
        }) => e?.shouldTrack ? (0, a.jsx)(F, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        S = ({
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
            const o = i => {
              let l = "";
              if (l = Array.isArray(i?.[y.ZH]) ? i[y.ZH].map(e => o(e)) : i?.[y.ZH] ?? "", !i?._template) return l;
              let d = i._template;
              "0" === d && (console.warn(`The _template "${d}" wasn't found in the available components. The _template "${d}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: i
              }), d = "gen9.Hero");
              const c = (0, s.get)(e, d) ?? null;
              if (!c) return null;
              const p = ((e, t) => n => ((e, t, n) => (0, a.jsx)(k, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, a.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(c, {
                  impressionTracking: i?.impressionTracking,
                  gtm: {
                    ...i?.gtm,
                    whatever: 1
                  }
                }),
                u = [...i?.translations ?? []].reverse(),
                m = `componentProps_${(0,b.A)()}`;
              return (0, r.createElement)(p, {
                ...t?.meta,
                ...i,
                ...n,
                t: e => u.find(t => t?._key === e)?.value ?? e,
                key: m
              }, l)
            };
            return t?.[y.ZH]?.length ? o(t) : null
          })({
            components: e,
            payload: t,
            componentProps: n
          })), [JSON.stringify(t)]);
          return o
        },
        w = ({
          tina: e,
          components: t = {},
          componentProps: n = {}
        }) => {
          const o = (0, p.i)(),
            [i, l] = (0, r.useState)(null),
            [u, m] = (0, r.useState)(null);
          (0, r.useEffect)(() => {
            e?.payload && l(e.payload), e?.variables && m(e.variables)
          }, [e]);
          const [f] = (0, r.useState)({
            ...t,
            ...c() ?? {}
          }), g = (({
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
            payload: i
          }), y = _({
            payload: i,
            variables: u
          });
          return (0, r.useMemo)(() => {
            if (!i) return null;
            const t = y,
              r = i?.meta?.prod ?? i?.meta?.cdn ?? o?.meta?.prod ?? o?.meta?.cdn ?? !1,
              s = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: r
                }
              };
            return (0, a.jsx)(p.o, {
              payload: s,
              children: (0, a.jsx)(d, {
                components: f,
                children: (0, a.jsx)(S, {
                  payload: t,
                  components: f,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }, [o, i, JSON.stringify(g), JSON.stringify(y)])
        };
      var v = n(25993);
      const I = (e = "", t = 0, n = {}, a = () => {}) => {
          let r = {
            ...n
          };
          if (t > 0) {
            const s = I(e, t - 1, n, a);
            r = {
              ...r,
              ...a(e, {
                templates: s
              })
            }
          }
          return r
        },
        O = I,
        P = ({
          html: e,
          as: t = "span",
          ...n
        }) => (0, a.jsx)(t, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...n
        });
      var E = n(77281),
        N = n(30635)
    }
  }
]);