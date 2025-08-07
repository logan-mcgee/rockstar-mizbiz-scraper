try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "767d554d-c5c7-448b-9c74-3569da5196ca", e._sentryDebugIdIdentifier = "sentry-dbid-767d554d-c5c7-448b-9c74-3569da5196ca")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7845], {
    47845: (e, n, t) => {
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
        useTranslations: () => v
      });
      var a = t(62229),
        i = t(99489),
        r = t.n(i);
      var o = t(95966),
        s = t(70954);
      const l = (0, o.setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaParser"
        }),
        {
          Provider: d
        } = l,
        c = e => {
          let {
            children: n,
            components: t
          } = e;
          return (0, s.jsx)(d, {
            value: t,
            children: n
          })
        },
        u = () => (0, a.useContext)(l);
      var m = t(50911),
        f = t(11028),
        p = t.n(f);
      var g = t(72405);
      const k = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, s.jsx)("hr", {})
        }
      };
      k("Background Image Gradient"),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), k("Background Image Gradient"), t(81788);
      const y = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, s.jsx)("hr", {})
        }
      };
      t(98282);
      y("Background Image Gradient"),
        function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          e.toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), y("Background Image Gradient"), t(61398);
      const h = "content",
        v = e => {
          let {
            payload: n,
            variables: t
          } = e;
          const a = ((e, n) => {
              const t = {};
              return r().cloneDeepWith(e, ((e, a, i) => {
                a === n && e && (t[i.key] = e)
              })), t
            })(n, "_memoq"),
            i = JSON.parse(JSON.stringify(r().merge(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(t?.keys ?? {}))))),
            o = JSON.parse(JSON.stringify(n));
          return r().cloneDeepWith(o, ((e, n, t) => {
            (e => {
              if (!e || !r().has(e, "key") || e.translated) return;
              const n = i[e.key] ?? null;
              if (!n) return;
              const t = p()(n);
              Object.keys(t).map((n => {
                r().set(e, n, t[n])
              })), r().set(e, "translated", !0), Object.freeze(e)
            })(t)
          })), o
        };
      var b = t(59740),
        S = t(2918);
      const _ = {
          event: "page_section_impression",
          element_placement: null
        },
        w = e => {
          let {
            threshold: n = .6,
            children: t,
            gtm: i = {}
          } = e;
          const {
            track: r
          } = (0, S.useGtmTrack)(), {
            ref: l,
            scrollTracked: d
          } = (0, o.useScrollTracking)(n);
          return (0, a.useEffect)((() => {
            d && r({
              ..._,
              ...i
            })
          }), [d]), (0, s.jsx)("section", {
            ref: l,
            children: t
          })
        },
        N = e => {
          let {
            impressionTracking: n,
            gtm: t = {},
            children: a
          } = e;
          return n?.shouldTrack ? (0, s.jsx)(w, {
            threshold: n?.threshold,
            gtm: t,
            children: a
          }) : a
        },
        T = e => {
          let {
            components: n,
            payload: t,
            componentProps: i = {}
          } = e;
          const o = (0, a.useMemo)((() => (r().cloneDeepWith(t, ((e, a) => {
            "_template" !== a || Number.isInteger(Number(e)) || r().get(n, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", n))
          })), (e => {
            let {
              components: n,
              payload: t,
              componentProps: i
            } = e;
            const o = e => {
              let l = "";
              if (l = Array.isArray(e?.[h]) ? e[h].map((e => o(e))) : e?.[h] ?? "", !e?._template) return l;
              let d = e._template;
              "0" === d && (console.warn(`The _template "${d}" wasn't found in the available components. The _template "${d}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(n),
                payload: e
              }), d = "gen9.Hero");
              const c = r().get(n, d) ?? null;
              if (!c) return null;
              const u = ((e, n) => t => ((e, n, t) => (0, s.jsx)(N, {
                  impressionTracking: t?.impressionTracking,
                  gtm: t?.gtm,
                  children: (0, s.jsx)(e, {
                    ...n
                  })
                }))(e, t, n))(c, {
                  impressionTracking: e?.impressionTracking,
                  gtm: {
                    ...e?.gtm,
                    whatever: 1
                  }
                }),
                m = [...e?.translations ?? []].reverse(),
                f = `componentProps_${(0,b.A)()}`;
              return (0, a.createElement)(u, {
                ...t?.meta,
                ...e,
                ...i,
                t: e => m.find((n => n?._key === e))?.value ?? e,
                key: f
              }, l)
            };
            return t?.[h]?.length ? o(t) : null
          })({
            components: n,
            payload: t,
            componentProps: i
          }))), [JSON.stringify(t)]);
          return o
        },
        x = e => {
          let {
            tina: n,
            components: t = {},
            componentProps: i = {}
          } = e;
          const o = (0, m.i)(),
            [l, d] = (0, a.useState)(null),
            [f, p] = (0, a.useState)(null);
          (0, a.useEffect)((() => {
            n?.payload && d(n.payload), n?.variables && p(n.variables)
          }), [n]);
          const [g] = (0, a.useState)({
            ...t,
            ...u() ?? {}
          }), k = (e => {
            let {
              payload: n
            } = e;
            const [t, i] = (0, a.useState)(n);
            return (0, a.useEffect)((() => {
              const e = r().debounce((() => {
                const e = JSON.parse(JSON.stringify(n));
                r().cloneDeepWith(e, ((e, n, t) => {
                  t?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const n = e.mediaQueryList.filter((e => {
                        let {
                          mediaQueryString: n
                        } = e;
                        return window.matchMedia(n).matches
                      })) ?? null,
                      t = Object.assign({}, ...n);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...t,
                      _template: e?._template
                    })
                  })(t)
                })), i(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [n]), t
          })({
            payload: l
          }), y = v({
            payload: l,
            variables: f
          });
          return (0, a.useMemo)((() => {
            if (!l) return null;
            const e = y,
              t = l?.meta?.prod ?? l?.meta?.cdn ?? o?.meta?.prod ?? o?.meta?.cdn ?? !1,
              a = {
                ...l,
                meta: {
                  ...l?.meta ?? {},
                  prod: t
                }
              };
            return (0, s.jsx)(m.o, {
              payload: a,
              children: (0, s.jsx)(c, {
                components: g,
                children: (0, s.jsx)(T, {
                  payload: e,
                  components: g,
                  componentProps: {
                    ...i,
                    tina: n
                  }
                })
              })
            })
          }), [o, l, JSON.stringify(k), JSON.stringify(y)])
        },
        C = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            i = {
              ...t
            };
          if (n > 0) {
            const r = C(e, n - 1, t, a);
            i = {
              ...i,
              ...a(e, {
                templates: r
              })
            }
          }
          return i
        },
        E = C
    },
    50911: (e, n, t) => {
      "use strict";
      t.d(n, {
        i: () => d,
        o: () => l
      });
      var a = t(62229),
        i = t(95966),
        r = t(70954);
      const o = (0, i.setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: s
        } = o,
        l = e => {
          let {
            children: n,
            payload: t
          } = e;
          return (0, r.jsx)(s, {
            value: t,
            children: n
          })
        },
        d = () => (0, a.useContext)(o)
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
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, n)
        }))
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
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          t(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.TagList = function(e, n) {
        var t = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = a[n] || new Set,
          o = new Set,
          s = new Set;
        for (r.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            o.has(e) || (o.add(e), (a[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var a = i(e, n);
          a && t.definitions.push(a)
        })), t
      }(n, "TagList")
    },
    72405: (e, n, t) => {
      "use strict";
      t.d(n, {
        C1: () => l,
        S1: () => s,
        jS: () => d
      });
      var a = t(62229),
        i = t(95966),
        r = t(50911);
      const o = e => {
          if (!e) return null;
          const {
            hostname: n,
            pathname: t
          } = new URL(e, (0, i.getCdnPrefix)(!0));
          return "/" === t ? null : (n.endsWith(".akamaized.net"), e)
        },
        s = e => {
          let {
            alt: n = null,
            mobile: t = null,
            desktop: s = null,
            ariaLabel: l = null,
            sources: d = null,
            prod: c = null
          } = e;
          const u = (0, i.useLocale)(),
            {
              meta: m = {}
            } = (0, r.i)() ?? {},
            [f, p] = (0, a.useState)(c ?? m?.cdn ?? m?.prod ?? !0);
          (0, a.useEffect)((() => {
            p(c ?? m?.cdn ?? m?.prod ?? !0)
          }), [c, m]);
          const g = (0, a.useCallback)((e => {
            const n = null !== d,
              t = e?.previewSrc ?? e ?? null;
            if (null === t || "string" != typeof t) return null;
            if (t.startsWith("http")) return o(t);
            const a = `${n?(0,i.getCdnPrefix)(f):""}${t}`;
            return o(a)
          }), [f, d]);
          return {
            alt: n,
            ariaLabel: l,
            src: {
              mobile: g(d?.[u]?.mobile ?? d?.en_us?.mobile ?? t),
              desktop: g(d?.[u]?.desktop ?? d?.en_us?.desktop ?? s)
            }
          }
        },
        l = e => {
          const n = (0, r.i)() ?? {},
            {
              meta: t = {}
            } = n,
            [s, l] = (0, a.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, a.useEffect)((() => {
            l(t?.cdn ?? t?.prod ?? !1)
          }), [t]), e ? e?.startsWith("http") ? o(e) : o(`${(0,i.getCdnPrefix)(s)}${e}`) : null
        },
        d = () => {
          const e = (0, r.i)() ?? {},
            {
              meta: n = {}
            } = e,
            t = (0, a.useMemo)((() => n?.cdn ?? n?.prod ?? !1), [n]);
          return (0, a.useCallback)((function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const a = n?.prod ?? t;
            return e ? e?.startsWith("http") ? o(e) : o(`${(0,i.getCdnPrefix)(a)}${e}`) : null
          }), [t])
        }
    }
  }
]);