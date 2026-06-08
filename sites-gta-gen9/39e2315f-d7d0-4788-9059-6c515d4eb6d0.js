try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "39e2315f-d7d0-4788-9059-6c515d4eb6d0", e._sentryDebugIdIdentifier = "sentry-dbid-39e2315f-d7d0-4788-9059-6c515d4eb6d0")
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
  [3769, 6150, 9793], {
    94931(e, t, n) {
      var r = n(93082),
        a = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, n) {
        var r, s = {},
          d = null,
          c = null;
        for (r in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) o.call(t, r) && !l.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: a,
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
        AriaLabelField: () => _.SF,
        AttributesFields: () => _.F2,
        BorderField: () => _.Ju,
        BorderImageField: () => _.cn,
        CTAsField: () => _.ml,
        ClassNamesField: () => _.bY,
        ComprehensiveImageFieldGroup: () => _.ln,
        ContentField: () => _.Y4,
        DisplayClassField: () => _.BK,
        Divider: () => j.cG,
        FieldWrapper: () => j.cm,
        FileInput: () => j.zp,
        FormEntryField: () => _.Jn,
        GridContextField: () => _.ig,
        Group: () => N.Group,
        GroupField: () => N.GroupField,
        GtmField: () => _.f6,
        HiddenInput: () => j.t$,
        IdField: () => _.KO,
        ImageField: () => _.CT,
        ImpressionTrackingField: () => _.pr,
        InViewTracker: () => k,
        ItemsField: () => _.Xt,
        LeadAssetToggle: () => _.ho,
        LocalizedImageGroup: () => _.SX,
        LocalizedResponsiveImageGroup: () => _.a2,
        MediaQueryField: () => _.Zn,
        MetaField: () => _.i2,
        NameField: () => _.om,
        PlatformsAndLinksField: () => _.Vz,
        PostEntryFields: () => _.mA,
        PostMetaField: () => _.Mw,
        PreviewImagesField: () => _.Vf,
        ResponsiveImageGroup: () => _.bK,
        ScrollmationField: () => _.sV,
        SimpleImageField: () => _.Oy,
        SingleImageSource: () => _.JP,
        StyleField: () => _.sE,
        TINA_MEMOQ_PREFIX: () => _.Qw,
        TINA_PARSER_KEY: () => _.ZH,
        TagsField: () => _.UP,
        TextField: () => N.TextField,
        ThemeField: () => _.gY,
        TinaLabel: () => j.ri,
        TinaParser: () => v,
        TinaPayloadProvider: () => u.o,
        TinaRichText: () => E,
        TranslationKey: () => _.Br,
        UploadsField: () => _.nG,
        XMLField: () => _.I2,
        _defaultImageValues: () => _.m9,
        defaultItemUnique: () => _.Q,
        defaultPricingOptionsUnique: () => _.Ji,
        itemPropsWithKey: () => _.Rv,
        localizedImageField: () => _.xc,
        recursiveNestedTemplates: () => P,
        translatedField: () => _.z9,
        useGenerateCdnSource: () => I.jS,
        useGetCdnSource: () => I.C1,
        useImageParser: () => I.S1,
        usePrunedTinaKeys: () => f,
        useTinaComponents: () => p,
        useTinaPayload: () => u.i,
        useTranslations: () => b
      });
      var r = n(39793),
        a = n(93082),
        s = n(69646),
        o = n.n(s);
      var i = n(13331);
      const l = (0, i.setContextItem)({
          context: (0, a.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: d
        } = l,
        c = ({
          children: e,
          components: t
        }) => (0, r.jsx)(d, {
          value: t,
          children: e
        }),
        p = () => (0, a.useContext)(l);
      var u = n(54563);
      const m = (e, t) => Array.isArray(e) ? e.map(e => m(e, t)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((n, r) => (r !== t && (n[r] = m(e[r], t)), n), {}) : e,
        f = e => (0, a.useMemo)(() => m(e, "key"), [e]);
      var g = n(97773),
        y = n.n(g),
        _ = n(45966);
      const b = ({
        payload: e,
        variables: t
      }) => {
        const n = ((e, t) => {
            const n = {};
            return o().cloneDeepWith(e, (e, r, a) => {
              r === t && e && (n[a.key] = e)
            }), n
          })(e, _.Qw),
          r = JSON.parse(JSON.stringify(o().merge(JSON.parse(JSON.stringify(n)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
          a = JSON.parse(JSON.stringify(e));
        return o().cloneDeepWith(a, (e, t, n) => {
          (e => {
            if (!e || !o().has(e, "key") || e.translated) return;
            const t = r[e.key] ?? null;
            if (!t) return;
            const n = y()(t);
            Object.keys(n).map(t => {
              o().set(e, t, n[t])
            }), o().set(e, "translated", !0), Object.freeze(e)
          })(n)
        }), a
      };
      var h = n(39279),
        T = n(82199);
      const F = {
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
          } = (0, T.useGtmTrack)(), {
            ref: o,
            scrollTracked: l
          } = (0, i.useScrollTracking)(e);
          return (0, a.useEffect)(() => {
            l && s({
              ...F,
              ...n
            })
          }, [l]), (0, r.jsx)("section", {
            ref: o,
            children: t
          })
        },
        S = ({
          impressionTracking: e,
          gtm: t = {},
          children: n
        }) => e?.shouldTrack ? (0, r.jsx)(k, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        w = ({
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
            const s = i => {
              let l = "";
              if (l = Array.isArray(i?.[_.ZH]) ? i[_.ZH].map(e => s(e)) : i?.[_.ZH] ?? "", !i?._template) return l;
              let d = i._template;
              "0" === d && (console.warn(`The _template "${d}" wasn't found in the available components. The _template "${d}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: i
              }), d = "gen9.Hero");
              const c = o().get(e, d) ?? null;
              if (!c) return null;
              const p = ((e, t) => n => ((e, t, n) => (0, r.jsx)(S, {
                  impressionTracking: n?.impressionTracking,
                  gtm: n?.gtm,
                  children: (0, r.jsx)(e, {
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
                m = `componentProps_${(0,h.A)()}`;
              return (0, a.createElement)(p, {
                ...t?.meta,
                ...i,
                ...n,
                t: e => u.find(t => t?._key === e)?.value ?? e,
                key: m
              }, l)
            };
            return t?.[_.ZH]?.length ? s(t) : null
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
          const s = (0, u.i)(),
            [i, l] = (0, a.useState)(null),
            [d, m] = (0, a.useState)(null);
          (0, a.useEffect)(() => {
            e?.payload && l(e.payload), e?.variables && m(e.variables)
          }, [e]);
          const [f] = (0, a.useState)({
            ...t,
            ...p() ?? {}
          }), g = (({
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
            payload: i
          }), y = b({
            payload: i,
            variables: d
          });
          return (0, a.useMemo)(() => {
            if (!i) return null;
            const t = y,
              a = i?.meta?.prod ?? i?.meta?.cdn ?? s?.meta?.prod ?? s?.meta?.cdn ?? !1,
              o = {
                ...i,
                meta: {
                  ...i?.meta ?? {},
                  prod: a
                }
              };
            return (0, r.jsx)(u.o, {
              payload: o,
              children: (0, r.jsx)(c, {
                components: f,
                children: (0, r.jsx)(w, {
                  payload: t,
                  components: f,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }, [s, i, JSON.stringify(g), JSON.stringify(y)])
        };
      var I = n(25993);
      const O = (e = "", t = 0, n = {}, r = () => {}) => {
          let a = {
            ...n
          };
          if (t > 0) {
            const s = O(e, t - 1, n, r);
            a = {
              ...a,
              ...r(e, {
                templates: s
              })
            }
          }
          return a
        },
        P = O,
        E = ({
          html: e,
          as: t = "span",
          ...n
        }) => (0, r.jsx)(t, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...n
        });
      var N = n(77281),
        j = n(30635)
    }
  }
]);