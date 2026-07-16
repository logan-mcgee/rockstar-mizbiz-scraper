try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3a0bea4f-ec6a-4557-88e2-2c95ac0523d2", e._sentryDebugIdIdentifier = "sentry-dbid-3a0bea4f-ec6a-4557-88e2-2c95ac0523d2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [681, 977], {
    93977(e, t, a) {
      a.r(t), a.d(t, {
        Divider: () => J.cG,
        FieldWrapper: () => J.cm,
        FileInput: () => J.zp,
        Group: () => n.Group,
        GroupField: () => n.GroupField,
        HiddenInput: () => J.t$,
        InViewTracker: () => j,
        TinaLabel: () => J.ri,
        TinaParser: () => P,
        TinaPayloadProvider: () => p.o,
        TinaRichText: () => E,
        TinaThemeProvider: () => G,
        parse: () => A.qg,
        pick: () => _,
        previewSrc: () => A.z0,
        recursiveNestedTemplates: () => R,
        uploadDir: () => A.XC,
        useGenerateCdnSource: () => A.jS,
        useGetCdnSource: () => A.C1,
        useImageParser: () => A.S1,
        usePrunedTinaKeys: () => f,
        useTinaComponents: () => u,
        useTinaPayload: () => p.i,
        useTranslations: () => T
      });
      var n = a(46317),
        r = a(39793),
        s = a(93082),
        o = a(79098),
        i = a(11302);
      var l = a(13331);
      const c = (0, l.setContextItem)({
          context: (0, s.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: d
        } = c,
        m = ({
          children: e,
          components: t
        }) => (0, r.jsx)(d, {
          value: t,
          children: e
        }),
        u = () => (0, s.useContext)(c);
      var p = a(58924);
      const y = (e, t) => Array.isArray(e) ? e.map(e => y(e, t)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((a, n) => (n !== t && (a[n] = y(e[n], t)), a), {}) : e,
        f = e => (0, s.useMemo)(() => y(e, "key"), [e]);
      var h = a(97773),
        v = a.n(h),
        g = a(40415),
        k = a(97529),
        b = a(58969);
      const _ = (e, t) => {
        const a = {};
        return (0, i.A)(e, (e, n, r) => {
          n === t && e && (a[r.key] = e)
        }), a
      };
      var w = a(70193);
      const T = ({
        payload: e,
        variables: t
      }) => {
        const a = _(e, w.Qw),
          n = JSON.parse(JSON.stringify((0, g.A)(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
          r = JSON.parse(JSON.stringify(e));
        return (0, i.A)(r, (e, t, a) => {
          (e => {
            if (!e || !(0, k.A)(e, "key") || e.translated) return;
            const t = n[e.key] ?? null;
            if (!t) return;
            const a = v()(t);
            Object.keys(a).map(t => {
              (0, b.A)(e, t, a[t])
            }), (0, b.A)(e, "translated", !0), Object.freeze(e)
          })(a)
        }), r
      };
      var S = a(26065),
        N = a(39279);
      a(56596);
      const x = (0, l.setContextItem)({
          context: (0, s.createContext)(void 0),
          key: "gtmContext22"
        }),
        C = {
          track: () => null
        };
      (0, l.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, l.makeVar)(null)
      }), (0, l.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, l.makeVar)(!1)
      }), (0, l.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, l.makeVar)((0, l.webSettingsReactive)()?.currentCharId)
      }), (0, l.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, l.makeVar)(null)
      }), (0, l.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, l.makeVar)(null)
      }), (0, l.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, l.makeVar)(!1)
      }), (0, l.setMakeVarItem)({
        key: "crewsNeededReactive",
        value: (0, l.makeVar)(!1)
      }), (0, l.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, l.makeVar)(null)
      }), a(4242), a(77033);
      const I = {},
        O = ((0, l.setContextItem)({
          context: (0, s.createContext)(I),
          key: "userContext"
        }), {
          event: "page_section_impression",
          element_placement: null
        }),
        j = ({
          threshold: e = .6,
          children: t,
          gtm: a = {}
        }) => {
          const {
            track: n
          } = (0, s.useContext)(x) ?? C, {
            ref: o,
            scrollTracked: i
          } = (0, l.useScrollTracking)(e);
          return (0, s.useEffect)(() => {
            i && n({
              ...O,
              ...a
            })
          }, [i]), (0, r.jsx)("section", {
            ref: o,
            children: t
          })
        },
        M = ({
          impressionTracking: e,
          gtm: t = {},
          children: a
        }) => e?.shouldTrack ? (0, r.jsx)(j, {
          threshold: e?.threshold,
          gtm: t,
          children: a
        }) : a,
        V = ({
          components: e,
          payload: t,
          componentProps: a = {}
        }) => {
          const n = (0, s.useMemo)(() => ((0, i.A)(t, (a, n) => {
            "_template" !== n || Number.isInteger(Number(a)) || (0, S.A)(e, a) || (console.error(`TinaParser:useComponentRenderer: Component ${a} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", e))
          }), (({
            components: e,
            payload: t,
            componentProps: a
          }) => {
            const n = o => {
              let i = "";
              if (i = Array.isArray(o?.[w.ZH]) ? o[w.ZH].map(e => n(e)) : o?.[w.ZH] ?? "", !o?._template) return i;
              let l = o._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: o
              }), l = "gen9.Hero");
              const c = (0, S.A)(e, l) ?? null;
              if (!c) return null;
              const d = ((e, t) => a => ((e, t, a) => (0, r.jsx)(M, {
                  impressionTracking: a?.impressionTracking,
                  gtm: a?.gtm,
                  children: (0, r.jsx)(e, {
                    ...t
                  })
                }))(e, a, t))(c, {
                  impressionTracking: o?.impressionTracking,
                  gtm: {
                    ...o?.gtm,
                    whatever: 1
                  }
                }),
                m = [...o?.translations ?? []].reverse(),
                u = `componentProps_${(0,N.A)()}`;
              return (0, s.createElement)(d, {
                ...t?.meta,
                ...o,
                ...a,
                t: e => m.find(t => t?._key === e)?.value ?? e,
                key: u
              }, i)
            };
            return t?.[w.ZH]?.length ? n(t) : null
          })({
            components: e,
            payload: t,
            componentProps: a
          })), [JSON.stringify(t)]);
          return n
        },
        P = ({
          tina: e,
          components: t = {},
          componentProps: a = {}
        }) => {
          const n = (0, p.i)(),
            [l, c] = (0, s.useState)(null),
            [d, y] = (0, s.useState)(null);
          (0, s.useEffect)(() => {
            e?.payload && c(e.payload), e?.variables && y(e.variables)
          }, [e]);
          const [f] = (0, s.useState)({
            ...t,
            ...u() ?? {}
          }), h = (({
            payload: e
          }) => {
            const [t, a] = (0, s.useState)(e);
            return (0, s.useEffect)(() => {
              const t = (0, o.A)(() => {
                const t = JSON.parse(JSON.stringify(e));
                (0, i.A)(t, (e, t, a) => {
                  a?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const t = e.mediaQueryList.filter(({
                        mediaQueryString: e
                      }) => window.matchMedia(e).matches) ?? null,
                      a = Object.assign({}, ...t);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...a,
                      _template: e?._template
                    })
                  })(a)
                }), a(t)
              }, 250);
              return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
            }, [e]), t
          })({
            payload: l
          }), v = T({
            payload: l,
            variables: d
          });
          return (0, s.useMemo)(() => {
            if (!l) return null;
            const t = v,
              s = l?.meta?.prod ?? l?.meta?.cdn ?? n?.meta?.prod ?? n?.meta?.cdn ?? !1,
              o = {
                ...l,
                meta: {
                  ...l?.meta ?? {},
                  prod: s
                }
              };
            return (0, r.jsx)(p.o, {
              payload: o,
              children: (0, r.jsx)(m, {
                components: f,
                children: (0, r.jsx)(V, {
                  payload: t,
                  components: f,
                  componentProps: {
                    ...a,
                    tina: e
                  }
                })
              })
            })
          }, [n, l, JSON.stringify(h), JSON.stringify(v)])
        };
      var A = a(97244);
      const L = (e = "", t = 0, a = {}, n = () => {}) => {
          let r = {
            ...a
          };
          if (t > 0) {
            const s = L(e, t - 1, a, n);
            r = {
              ...r,
              ...n(e, {
                templates: s
              })
            }
          }
          return r
        },
        R = L,
        E = ({
          html: e,
          as: t = "span",
          ...a
        }) => (0, r.jsx)(t, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...a
        });
      var J = a(48395),
        H = a(32454);
      const D = (0, s.createContext)({
          themeOptions: {
            themeName: void 0,
            themeLevel: void 0,
            cssVars: {}
          }
        }),
        G = ({
          children: e,
          meta: t
        }) => {
          const a = (0, H.p0)({
              themeName: t?.themeName,
              themeLevel: t?.themeLevel
            }),
            n = (0, H.nR)({
              themeName: t?.themeName,
              themeLevel: t?.themeLevel
            }),
            s = {
              themeName: a?.themeName,
              themeLevel: a?.themeLevel,
              cssVars: n
            };
          return (0, r.jsx)(D.Provider, {
            value: {
              themeOptions: s
            },
            children: (0, r.jsx)("div", {
              "data-theme": s?.themeName,
              "data-level": s?.themeLevel,
              style: s?.cssVars,
              children: e
            })
          })
        }
    }
  }
]);