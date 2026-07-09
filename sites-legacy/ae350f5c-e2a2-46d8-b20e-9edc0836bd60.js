try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ae350f5c-e2a2-46d8-b20e-9edc0836bd60", e._sentryDebugIdIdentifier = "sentry-dbid-ae350f5c-e2a2-46d8-b20e-9edc0836bd60")
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
  [3769, 6150, 9793], {
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
        AriaLabelField: () => T.SF,
        AttributesFields: () => T.F2,
        BorderField: () => T.Ju,
        BorderImageField: () => T.cn,
        CTAsField: () => T.ml,
        ClassNamesField: () => T.bY,
        ComprehensiveImageFieldGroup: () => T.ln,
        ContentField: () => T.Y4,
        DisplayClassField: () => T.BK,
        Divider: () => M.cG,
        FieldWrapper: () => M.cm,
        FileInput: () => M.zp,
        FormEntryField: () => T.Jn,
        GridContextField: () => T.ig,
        Group: () => x.Group,
        GroupField: () => x.GroupField,
        GtmField: () => T.f6,
        HiddenInput: () => M.t$,
        IdField: () => T.KO,
        ImageField: () => T.CT,
        ImpressionTrackingField: () => T.pr,
        InViewTracker: () => I,
        ItemsField: () => T.Xt,
        LeadAssetToggle: () => T.ho,
        LocalizedImageGroup: () => T.SX,
        LocalizedResponsiveImageGroup: () => T.a2,
        MediaQueryField: () => T.Zn,
        MetaField: () => T.i2,
        NameField: () => T.om,
        PageThemeField: () => T.pg,
        PlatformsAndLinksField: () => T.Vz,
        PostEntryFields: () => T.mA,
        PostMetaField: () => T.Mw,
        PreviewImagesField: () => T.Vf,
        ResponsiveImageGroup: () => T.bK,
        ScrollmationField: () => T.sV,
        SimpleImageField: () => T.Oy,
        SingleImageSource: () => T.JP,
        StyleField: () => T.sE,
        TINA_MEMOQ_PREFIX: () => T.Qw,
        TINA_PARSER_KEY: () => T.ZH,
        TagsField: () => T.UP,
        TextField: () => T.A_,
        ThemeField: () => T.gY,
        TinaLabel: () => M.ri,
        TinaParser: () => A,
        TinaPayloadProvider: () => u.o,
        TinaRichText: () => C,
        TranslationKey: () => T.Br,
        UploadsField: () => T.nG,
        XMLField: () => T.I2,
        _defaultImageValues: () => T.m9,
        defaultItemUnique: () => T.Q,
        defaultPricingOptionsUnique: () => T.Ji,
        itemPropsWithKey: () => T.Rv,
        localizedImageField: () => T.xc,
        recursiveNestedTemplates: () => j,
        translatedField: () => T.z9,
        useGenerateCdnSource: () => E.jS,
        useGetCdnSource: () => E.C1,
        useImageParser: () => E.S1,
        usePrunedTinaKeys: () => f,
        useTinaComponents: () => p,
        useTinaPayload: () => u.i,
        useTranslations: () => F
      });
      var a = n(39793),
        r = n(93082),
        s = n(79098),
        o = n(11302);
      var i = n(13331);
      const l = (0, i.setContextItem)({
          context: (0, r.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: d
        } = l,
        c = ({
          children: e,
          components: t
        }) => (0, a.jsx)(d, {
          value: t,
          children: e
        }),
        p = () => (0, r.useContext)(l);
      var u = n(54563);
      const m = (e, t) => Array.isArray(e) ? e.map(e => m(e, t)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((n, a) => (a !== t && (n[a] = m(e[a], t)), n), {}) : e,
        f = e => (0, r.useMemo)(() => m(e, "key"), [e]);
      var y = n(97773),
        g = n.n(y),
        b = n(40415),
        _ = n(97529),
        h = n(58969),
        T = n(76589);
      const F = ({
        payload: e,
        variables: t
      }) => {
        const n = ((e, t) => {
            const n = {};
            return (0, o.A)(e, (e, a, r) => {
              a === t && e && (n[r.key] = e)
            }), n
          })(e, T.Qw),
          a = JSON.parse(JSON.stringify((0, b.A)(JSON.parse(JSON.stringify(n)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
          r = JSON.parse(JSON.stringify(e));
        return (0, o.A)(r, (e, t, n) => {
          (e => {
            if (!e || !(0, _.A)(e, "key") || e.translated) return;
            const t = a[e.key] ?? null;
            if (!t) return;
            const n = g()(t);
            Object.keys(n).map(t => {
              (0, h.A)(e, t, n[t])
            }), (0, h.A)(e, "translated", !0), Object.freeze(e)
          })(n)
        }), r
      };
      var k = n(26065),
        S = n(39279),
        w = n(82199);
      const v = {
          event: "page_section_impression",
          element_placement: null
        },
        I = ({
          threshold: e = .6,
          children: t,
          gtm: n = {}
        }) => {
          const {
            track: s
          } = (0, w.useGtmTrack)(), {
            ref: o,
            scrollTracked: l
          } = (0, i.useScrollTracking)(e);
          return (0, r.useEffect)(() => {
            l && s({
              ...v,
              ...n
            })
          }, [l]), (0, a.jsx)("section", {
            ref: o,
            children: t
          })
        },
        O = ({
          impressionTracking: e,
          gtm: t = {},
          children: n
        }) => e?.shouldTrack ? (0, a.jsx)(I, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        P = ({
          components: e,
          payload: t,
          componentProps: n = {}
        }) => {
          const s = (0, r.useMemo)(() => ((0, o.A)(t, (n, a) => {
            "_template" !== a || Number.isInteger(Number(n)) || (0, k.A)(e, n) || (console.error(`TinaParser:useComponentRenderer: Component ${n} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", e))
          }), (({
            components: e,
            payload: t,
            componentProps: n
          }) => {
            const s = o => {
              let i = "";
              if (i = Array.isArray(o?.[T.ZH]) ? o[T.ZH].map(e => s(e)) : o?.[T.ZH] ?? "", !o?._template) return i;
              let l = o._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: o
              }), l = "gen9.Hero");
              const d = (0, k.A)(e, l) ?? null;
              if (!d) return null;
              const c = ((e, t) => n => ((e, t, n) => (0, a.jsx)(O, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, a.jsx)(e, {
                    ...t
                  })
                }))(e, n, t))(d, {
                  impressionTracking: o?.impressionTracking,
                  gtm: {
                    ...o?.gtm,
                    whatever: 1
                  }
                }),
                p = [...o?.translations ?? []].reverse(),
                u = `componentProps_${(0,S.A)()}`;
              return (0, r.createElement)(c, {
                ...t?.meta,
                ...o,
                ...n,
                t: e => p.find(t => t?._key === e)?.value ?? e,
                key: u
              }, i)
            };
            return t?.[T.ZH]?.length ? s(t) : null
          })({
            components: e,
            payload: t,
            componentProps: n
          })), [JSON.stringify(t)]);
          return s
        },
        A = ({
          tina: e,
          components: t = {},
          componentProps: n = {}
        }) => {
          const i = (0, u.i)(),
            [l, d] = (0, r.useState)(null),
            [m, f] = (0, r.useState)(null);
          (0, r.useEffect)(() => {
            e?.payload && d(e.payload), e?.variables && f(e.variables)
          }, [e]);
          const [y] = (0, r.useState)({
            ...t,
            ...p() ?? {}
          }), g = (({
            payload: e
          }) => {
            const [t, n] = (0, r.useState)(e);
            return (0, r.useEffect)(() => {
              const t = (0, s.A)(() => {
                const t = JSON.parse(JSON.stringify(e));
                (0, o.A)(t, (e, t, n) => {
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
          }), b = F({
            payload: l,
            variables: m
          });
          return (0, r.useMemo)(() => {
            if (!l) return null;
            const t = b,
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
                components: y,
                children: (0, a.jsx)(P, {
                  payload: t,
                  components: y,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }, [i, l, JSON.stringify(g), JSON.stringify(b)])
        };
      var E = n(25993);
      const N = (e = "", t = 0, n = {}, a = () => {}) => {
          let r = {
            ...n
          };
          if (t > 0) {
            const s = N(e, t - 1, n, a);
            r = {
              ...r,
              ...a(e, {
                templates: s
              })
            }
          }
          return r
        },
        j = N,
        C = ({
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