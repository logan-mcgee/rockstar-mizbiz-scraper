try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "937f1f9f-179d-42d6-964e-c13e6ed196c0", e._sentryDebugIdIdentifier = "sentry-dbid-937f1f9f-179d-42d6-964e-c13e6ed196c0")
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
  [1510, 2295, 9129], {
    69245(e, t, n) {
      var r = n(71127),
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
    42295(e, t, n) {
      e.exports = n(69245)
    },
    42195(e, t, n) {
      n.r(t), n.d(t, {
        InViewTracker: () => T,
        TextField: () => E.TextField,
        TinaParser: () => O,
        TinaPayloadProvider: () => u.o,
        TinaRichText: () => x,
        recursiveNestedTemplates: () => P,
        useGenerateCdnSource: () => j.jS,
        useGetCdnSource: () => j.C1,
        useImageParser: () => j.S1,
        usePrunedTinaKeys: () => y,
        useTinaComponents: () => p,
        useTinaPayload: () => u.i,
        useTranslations: () => _
      });
      var r = n(42295),
        a = n(71127),
        s = n(15076),
        o = n.n(s);
      var i = n(13331);
      const l = (0, i.setContextItem)({
          context: (0, a.createContext)(),
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
      var u = n(74767);
      const f = (e, t) => Array.isArray(e) ? e.map(e => f(e, t)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((n, r) => (r !== t && (n[r] = f(e[r], t)), n), {}) : e,
        y = e => (0, a.useMemo)(() => f(e, "key"), [e]);
      var m = n(90287),
        g = n.n(m),
        b = n(12323);
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
      var h = n(11206),
        k = n(82199);
      const w = {
          event: "page_section_impression",
          element_placement: null
        },
        T = ({
          threshold: e = .6,
          children: t,
          gtm: n = {}
        }) => {
          const {
            track: s
          } = (0, k.useGtmTrack)(), {
            ref: o,
            scrollTracked: l
          } = (0, i.useScrollTracking)(e);
          return (0, a.useEffect)(() => {
            l && s({
              ...w,
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
        }) => e?.shouldTrack ? (0, r.jsx)(T, {
          threshold: e?.threshold,
          gtm: t,
          children: n
        }) : n,
        v = ({
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
              if (l = Array.isArray(i?.[b.ZH]) ? i[b.ZH].map(e => s(e)) : i?.[b.ZH] ?? "", !i?._template) return l;
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
                f = `componentProps_${(0,h.A)()}`;
              return (0, a.createElement)(p, {
                ...t?.meta,
                ...i,
                ...n,
                t: e => u.find(t => t?._key === e)?.value ?? e,
                key: f
              }, l)
            };
            return t?.[b.ZH]?.length ? s(t) : null
          })({
            components: e,
            payload: t,
            componentProps: n
          })), [JSON.stringify(t)]);
          return s
        },
        O = ({
          tina: e,
          components: t = {},
          componentProps: n = {}
        }) => {
          const s = (0, u.i)(),
            [i, l] = (0, a.useState)(null),
            [d, f] = (0, a.useState)(null);
          (0, a.useEffect)(() => {
            e?.payload && l(e.payload), e?.variables && f(e.variables)
          }, [e]);
          const [y] = (0, a.useState)({
            ...t,
            ...p() ?? {}
          }), m = (({
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
          }), g = _({
            payload: i,
            variables: d
          });
          return (0, a.useMemo)(() => {
            if (!i) return null;
            const t = g,
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
                components: y,
                children: (0, r.jsx)(v, {
                  payload: t,
                  components: y,
                  componentProps: {
                    ...n,
                    tina: e
                  }
                })
              })
            })
          }, [s, i, JSON.stringify(m), JSON.stringify(g)])
        };
      var j = n(34725);
      const N = (e = "", t = 0, n = {}, r = () => {}) => {
          let a = {
            ...n
          };
          if (t > 0) {
            const s = N(e, t - 1, n, r);
            a = {
              ...a,
              ...r(e, {
                templates: s
              })
            }
          }
          return a
        },
        P = N,
        x = ({
          html: e,
          as: t = "span",
          ...n
        }) => (0, r.jsx)(t, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...n
        });
      var E = n(98718)
    }
  }
]);