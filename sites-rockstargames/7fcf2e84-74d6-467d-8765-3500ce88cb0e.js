try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7fcf2e84-74d6-467d-8765-3500ce88cb0e", e._sentryDebugIdIdentifier = "sentry-dbid-7fcf2e84-74d6-467d-8765-3500ce88cb0e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1366], {
    34725: (e, n, t) => {
      "use strict";
      t.d(n, {
        C1: () => l,
        S1: () => s,
        jS: () => d
      });
      var a = t(71127),
        i = t(58136),
        o = t(74767);
      const r = e => {
          if (!e) return null;
          const {
            hostname: n,
            pathname: t
          } = new URL(e, (0, i.getCdnPrefix)(!0));
          return "/" === t ? null : (n.endsWith(".akamaized.net"), e)
        },
        s = ({
          alt: e = null,
          mobile: n = null,
          imageMobileStyle: t = {},
          desktop: s = null,
          imageDesktopStyle: l = {},
          ariaLabel: d = null,
          sources: c = null,
          prod: u = null
        }) => {
          const m = (0, i.useLocale)(),
            {
              meta: p = {}
            } = (0, o.i)() ?? {},
            [f, g] = (0, a.useState)(u ?? p?.cdn ?? p?.prod ?? !0);
          (0, a.useEffect)(() => {
            g(u ?? p?.cdn ?? p?.prod ?? !0)
          }, [u, p]);
          const k = (0, a.useCallback)(e => {
            const n = null !== c,
              t = e?.previewSrc ?? e ?? null;
            if (null === t || "string" != typeof t) return null;
            if (t.startsWith("http")) return r(t);
            const a = `${n?(0,i.getCdnPrefix)(f):""}${t}`;
            return r(a)
          }, [f, c]);
          return {
            alt: e,
            ariaLabel: d,
            src: {
              mobile: k(c?.[m]?.mobile ?? c?.en_us?.mobile ?? n),
              imageMobileStyle: c?.[m]?.imageMobileStyle ?? c?.en_us?.imageMobileStyle ?? t,
              imageDesktopStyle: c?.[m]?.imageDesktopStyle ?? c?.en_us?.imageDesktopStyle ?? l,
              desktop: k(c?.[m]?.desktop ?? c?.en_us?.desktop ?? s)
            }
          }
        },
        l = e => {
          const n = (0, o.i)() ?? {},
            {
              meta: t = {}
            } = n,
            [s, l] = (0, a.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, a.useEffect)(() => {
            l(t?.cdn ?? t?.prod ?? !1)
          }, [t]), e ? e?.startsWith("http") ? r(e) : r(`${(0,i.getCdnPrefix)(s)}${e}`) : null
        },
        d = () => {
          const e = (0, o.i)() ?? {},
            {
              meta: n = {}
            } = e,
            t = (0, a.useMemo)(() => n?.cdn ?? n?.prod ?? !1, [n]);
          return (0, a.useCallback)((e, n = {}) => {
            const a = n?.prod ?? t;
            return e ? e?.startsWith("http") ? r(e) : r(`${(0,i.getCdnPrefix)(a)}${e}`) : null
          }, [t])
        }
    },
    61366: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, {
        InViewTracker: () => w,
        TinaParser: () => x,
        TinaPayloadProvider: () => m.o,
        recursiveNestedTemplates: () => E,
        useGenerateCdnSource: () => g.jS,
        useGetCdnSource: () => g.C1,
        useImageParser: () => g.S1,
        useTinaComponents: () => u,
        useTinaPayload: () => m.i,
        useTranslations: () => h
      });
      var a = t(42295),
        i = t(71127),
        o = t(15076),
        r = t.n(o);
      var s = t(58136);
      const l = (0, s.setContextItem)({
          context: (0, i.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: d
        } = l,
        c = ({
          children: e,
          components: n
        }) => (0, a.jsx)(d, {
          value: n,
          children: e
        }),
        u = () => (0, i.useContext)(l);
      var m = t(74767),
        p = t(90287),
        f = t.n(p);
      var g = t(34725);
      const k = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, a.jsx)("hr", {})
      });
      k("Background Image Gradient"), ((e = "Label") => {
        e.toLowerCase().split(" ").join("_")
      })("Background Image Gradient"), k("Background Image Gradient"), t(56990);
      const y = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, a.jsx)("hr", {})
      });
      t(21442);
      y("Background Image Gradient"), ((e = "Label") => {
        e.toLowerCase().split(" ").join("_")
      })("Background Image Gradient"), y("Background Image Gradient"), t(61398);
      const b = "content",
        h = ({
          payload: e,
          variables: n
        }) => {
          const t = ((e, n) => {
              const t = {};
              return r().cloneDeepWith(e, (e, a, i) => {
                a === n && e && (t[i.key] = e)
              }), t
            })(e, "_memoq"),
            a = JSON.parse(JSON.stringify(r().merge(JSON.parse(JSON.stringify(t)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
            i = JSON.parse(JSON.stringify(e));
          return r().cloneDeepWith(i, (e, n, t) => {
            (e => {
              if (!e || !r().has(e, "key") || e.translated) return;
              const n = a[e.key] ?? null;
              if (!n) return;
              const t = f()(n);
              Object.keys(t).map(n => {
                r().set(e, n, t[n])
              }), r().set(e, "translated", !0), Object.freeze(e)
            })(t)
          }), i
        };
      var v = t(11206),
        S = t(61874);
      const _ = {
          event: "page_section_impression",
          element_placement: null
        },
        w = ({
          threshold: e = .6,
          children: n,
          gtm: t = {}
        }) => {
          const {
            track: o
          } = (0, S.useGtmTrack)(), {
            ref: r,
            scrollTracked: l
          } = (0, s.useScrollTracking)(e);
          return (0, i.useEffect)(() => {
            l && o({
              ..._,
              ...t
            })
          }, [l]), (0, a.jsx)("section", {
            ref: r,
            children: n
          })
        },
        N = ({
          impressionTracking: e,
          gtm: n = {},
          children: t
        }) => e?.shouldTrack ? (0, a.jsx)(w, {
          threshold: e?.threshold,
          gtm: n,
          children: t
        }) : t,
        T = ({
          components: e,
          payload: n,
          componentProps: t = {}
        }) => {
          const o = (0, i.useMemo)(() => (r().cloneDeepWith(n, (t, a) => {
            "_template" !== a || Number.isInteger(Number(t)) || r().get(e, t) || (console.error(`TinaParser:useComponentRenderer: Component ${t} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", e))
          }), (({
            components: e,
            payload: n,
            componentProps: t
          }) => {
            const o = s => {
              let l = "";
              if (l = Array.isArray(s?.[b]) ? s[b].map(e => o(e)) : s?.[b] ?? "", !s?._template) return l;
              let d = s._template;
              "0" === d && (console.warn(`The _template "${d}" wasn't found in the available components. The _template "${d}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: s
              }), d = "gen9.Hero");
              const c = r().get(e, d) ?? null;
              if (!c) return null;
              const u = ((e, n) => t => ((e, n, t) => (0, a.jsx)(N, {
                  impressionTracking: t?.impressionTracking,
                  gtm: t?.gtm,
                  children: (0, a.jsx)(e, {
                    ...n
                  })
                }))(e, t, n))(c, {
                  impressionTracking: s?.impressionTracking,
                  gtm: {
                    ...s?.gtm,
                    whatever: 1
                  }
                }),
                m = [...s?.translations ?? []].reverse(),
                p = `componentProps_${(0,v.A)()}`;
              return (0, i.createElement)(u, {
                ...n?.meta,
                ...s,
                ...t,
                t: e => m.find(n => n?._key === e)?.value ?? e,
                key: p
              }, l)
            };
            return n?.[b]?.length ? o(n) : null
          })({
            components: e,
            payload: n,
            componentProps: t
          })), [JSON.stringify(n)]);
          return o
        },
        x = ({
          tina: e,
          components: n = {},
          componentProps: t = {}
        }) => {
          const o = (0, m.i)(),
            [s, l] = (0, i.useState)(null),
            [d, p] = (0, i.useState)(null);
          (0, i.useEffect)(() => {
            e?.payload && l(e.payload), e?.variables && p(e.variables)
          }, [e]);
          const [f] = (0, i.useState)({
            ...n,
            ...u() ?? {}
          }), g = (({
            payload: e
          }) => {
            const [n, t] = (0, i.useState)(e);
            return (0, i.useEffect)(() => {
              const n = r().debounce(() => {
                const n = JSON.parse(JSON.stringify(e));
                r().cloneDeepWith(n, (e, n, t) => {
                  t?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const n = e.mediaQueryList.filter(({
                        mediaQueryString: e
                      }) => window.matchMedia(e).matches) ?? null,
                      t = Object.assign({}, ...n);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...t,
                      _template: e?._template
                    })
                  })(t)
                }), t(n)
              }, 250);
              return n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n)
            }, [e]), n
          })({
            payload: s
          }), k = h({
            payload: s,
            variables: d
          });
          return (0, i.useMemo)(() => {
            if (!s) return null;
            const n = k,
              i = s?.meta?.prod ?? s?.meta?.cdn ?? o?.meta?.prod ?? o?.meta?.cdn ?? !1,
              r = {
                ...s,
                meta: {
                  ...s?.meta ?? {},
                  prod: i
                }
              };
            return (0, a.jsx)(m.o, {
              payload: r,
              children: (0, a.jsx)(c, {
                components: f,
                children: (0, a.jsx)(T, {
                  payload: n,
                  components: f,
                  componentProps: {
                    ...t,
                    tina: e
                  }
                })
              })
            })
          }, [o, s, JSON.stringify(g), JSON.stringify(k)])
        },
        C = (e = "", n = 0, t = {}, a = () => {}) => {
          let i = {
            ...t
          };
          if (n > 0) {
            const o = C(e, n - 1, t, a);
            i = {
              ...i,
              ...a(e, {
                templates: o
              })
            }
          }
          return i
        },
        E = C
    },
    61398: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TagList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "context"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tagList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "context"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "context"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 131
        }
      };

      function t(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && n.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, n)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, n)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, n)
        })
      }
      n.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function i(e, n) {
        for (var t = 0; t < e.definitions.length; t++) {
          var a = e.definitions[t];
          if (a.name && a.name.value == n) return a
        }
      }
      n.definitions.forEach(function(e) {
        if (e.name) {
          var n = new Set;
          t(e, n), a[e.name.value] = n
        }
      }), e.exports = n, e.exports.TagList = function(e, n) {
        var t = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var o = a[n] || new Set,
          r = new Set,
          s = new Set;
        for (o.forEach(function(e) {
            s.add(e)
          }); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach(function(e) {
            r.has(e) || (r.add(e), (a[e] || new Set).forEach(function(e) {
              s.add(e)
            }))
          })
        }
        return r.forEach(function(n) {
          var a = i(e, n);
          a && t.definitions.push(a)
        }), t
      }(n, "TagList")
    },
    74767: (e, n, t) => {
      "use strict";
      t.d(n, {
        i: () => l,
        o: () => s
      });
      var a = t(42295),
        i = t(71127);
      const o = (0, t(58136).setContextItem)({
          context: (0, i.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: r
        } = o,
        s = ({
          children: e,
          payload: n
        }) => (0, a.jsx)(r, {
          value: n,
          children: e
        }),
        l = () => (0, i.useContext)(o)
    }
  }
]);