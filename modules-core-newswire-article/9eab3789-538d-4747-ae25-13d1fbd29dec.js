try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9eab3789-538d-4747-ae25-13d1fbd29dec", e._sentryDebugIdIdentifier = "sentry-dbid-9eab3789-538d-4747-ae25-13d1fbd29dec")
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
  [739], {
    30895(e) {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MemoqXmlDownload"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "table"
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
                value: "id"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "memoqXmlDownload"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "table"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "table"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
                    value: "xml"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "translation_status"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "MemoqXmlUpload"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "table"
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
                value: "id"
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
                value: "xml"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "memoqXmlUpload"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "table"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "table"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "xml"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "xml"
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
                    value: "translation_status"
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
          end: 314
        }
      };

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          a(e, n)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          a(e, n)
        }), e.definitions && e.definitions.forEach(function(e) {
          a(e, n)
        })
      }
      n.loc.source = {
        body: "query MemoqXmlDownload($table: String!, $id: String!) {\n    memoqXmlDownload(table: $table, id: $id) {\n        xml\n        translation_status\n    }\n}\n\nmutation MemoqXmlUpload($table: String!, $id: String!, $xml: String!) {\n    memoqXmlUpload(table: $table, id: $id, xml: $xml) {\n        translation_status\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function i(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == n) return t
        }
      }

      function r(e, n) {
        var a = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var r = t[n] || new Set,
          o = new Set,
          s = new Set;
        for (r.forEach(function(e) {
            s.add(e)
          }); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach(function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach(function(e) {
              s.add(e)
            }))
          })
        }
        return o.forEach(function(n) {
          var t = i(e, n);
          t && a.definitions.push(t)
        }), a
      }
      n.definitions.forEach(function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), t[e.name.value] = n
        }
      }), e.exports = n, e.exports.MemoqXmlDownload = r(n, "MemoqXmlDownload"), e.exports.MemoqXmlUpload = r(n, "MemoqXmlUpload")
    },
    69334(e) {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          a(e, n)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          a(e, n)
        }), e.definitions && e.definitions.forEach(function(e) {
          a(e, n)
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
      var t = {};

      function i(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == n) return t
        }
      }
      n.definitions.forEach(function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), t[e.name.value] = n
        }
      }), e.exports = n, e.exports.TagList = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var r = t[n] || new Set,
          o = new Set,
          s = new Set;
        for (r.forEach(function(e) {
            s.add(e)
          }); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach(function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach(function(e) {
              s.add(e)
            }))
          })
        }
        return o.forEach(function(n) {
          var t = i(e, n);
          t && a.definitions.push(t)
        }), a
      }(n, "TagList")
    },
    11215(e, n, a) {
      "use strict";
      a.r(n), a.d(n, {
        Divider: () => j,
        FieldWrapper: () => M,
        FileInput: () => P,
        Group: () => t.Group,
        GroupField: () => t.GroupField,
        HiddenInput: () => C,
        InViewTracker: () => H,
        TinaLabel: () => O,
        TinaParser: () => G,
        TinaPayloadProvider: () => f,
        TinaRichText: () => J,
        TinaThemeProvider: () => R,
        parse: () => _,
        pick: () => b,
        previewSrc: () => E,
        recursiveNestedTemplates: () => z,
        uploadDir: () => D,
        useGenerateCdnSource: () => T,
        useGetCdnSource: () => x,
        useImageParser: () => S,
        usePrunedTinaKeys: () => g,
        useTinaComponents: () => m,
        useTinaPayload: () => k,
        useTranslations: () => V
      });
      var t = a(46317),
        i = a(39793),
        r = a(93082),
        o = a(40283);
      var s = a(13331);
      const l = (0, s.setContextItem)({
          context: (0, r.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: d
        } = l,
        c = ({
          children: e,
          components: n
        }) => (0, i.jsx)(d, {
          value: n,
          children: e
        }),
        m = () => (0, r.useContext)(l),
        u = (0, s.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: p
        } = u,
        f = ({
          children: e,
          payload: n
        }) => (0, i.jsx)(p, {
          value: n,
          children: e
        }),
        k = () => (0, r.useContext)(u),
        h = (e, n) => Array.isArray(e) ? e.map(e => h(e, n)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((a, t) => (t !== n && (a[t] = h(e[t], n)), a), {}) : e,
        g = e => (0, r.useMemo)(() => h(e, "key"), [e]);
      var v = a(97773),
        y = a.n(v);
      const b = (e, n) => {
          const a = {};
          return (0, o.cloneDeepWith)(e, (e, t, i) => {
            t === n && e && (a[i.key] = e)
          }), a
        },
        w = "content",
        N = e => {
          if (!e) return null;
          const {
            hostname: n,
            pathname: a
          } = new URL(e, (0, s.getCdnPrefix)(!0));
          return "/" === a ? null : (n.endsWith(".akamaized.net"), e)
        },
        S = ({
          alt: e = null,
          mobile: n = null,
          imageMobileStyle: a = {},
          desktop: t = null,
          imageDesktopStyle: i = {},
          ariaLabel: o = null,
          sources: l = null,
          prod: d = null
        }) => {
          const c = (0, s.useLocale)(),
            {
              meta: m = {}
            } = k() ?? {},
            [u, p] = (0, r.useState)(d ?? m?.cdn ?? m?.prod ?? !0);
          (0, r.useEffect)(() => {
            p(d ?? m?.cdn ?? m?.prod ?? !0)
          }, [d, m]);
          const f = (0, r.useCallback)(e => {
            const n = null !== l,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return N(a);
            const t = `${n?(0,s.getCdnPrefix)(u):""}${a}`;
            return N(t)
          }, [u, l]);
          return {
            alt: e,
            ariaLabel: o,
            src: {
              mobile: f(l?.[c]?.mobile ?? l?.en_us?.mobile ?? n),
              imageMobileStyle: l?.[c]?.imageMobileStyle ?? l?.en_us?.imageMobileStyle ?? a,
              imageDesktopStyle: l?.[c]?.imageDesktopStyle ?? l?.en_us?.imageDesktopStyle ?? i,
              desktop: f(l?.[c]?.desktop ?? l?.en_us?.desktop ?? t)
            }
          }
        },
        x = e => {
          const n = k() ?? {},
            {
              meta: a = {}
            } = n,
            [t, i] = (0, r.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, r.useEffect)(() => {
            i(a?.cdn ?? a?.prod ?? !1)
          }, [a]), e ? e?.startsWith("http") ? N(e) : N(`${(0,s.getCdnPrefix)(t)}${e}`) : null
        },
        T = () => {
          const e = k() ?? {},
            {
              meta: n = {}
            } = e,
            a = (0, r.useMemo)(() => n?.cdn ?? n?.prod ?? !1, [n]);
          return (0, r.useCallback)((e, n = {}) => {
            const t = n?.prod ?? a;
            return e ? e?.startsWith("http") ? N(e) : N(`${(0,s.getCdnPrefix)(t)}${e}`) : null
          }, [a])
        },
        _ = e => e.full_src,
        E = e => {
          const n = e?.previewSrc ?? e?.preview_src ?? e;
          return n?.startsWith("http") ? n : `${(0,s.getCdnPrefix)(!1)}${n}`
        },
        D = e => e.meta.uploads_directory,
        $ = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, i.jsx)("hr", {})
        });
      $("Background Image Gradient"), ((e = "Label") => {
        e.toLowerCase().split(" ").join("_")
      })("Background Image Gradient"), $("Background Image Gradient"), a(42909);
      const j = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, i.jsx)("hr", {})
      });
      var L = a(79484);
      const M = ({
          style: e,
          width: n,
          height: a,
          resizable: t,
          field: o,
          input: s,
          meta: l,
          name: d,
          label: c,
          description: m,
          error: u,
          children: p
        }) => {
          const f = () => t ? (0, i.jsx)(L.c, {
            defaultSize: {
              width: n || "100%",
              height: a || "500px"
            },
            style: {
              paddingBottom: "10px"
            },
            children: (0, r.cloneElement)(p, ...s)
          }) : p;
          return (0, i.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
            style: e,
            children: [(0, i.jsxs)("label", {
              className: "rockstargames-modules-core-newswire-articleceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
              htmlFor: d ?? o?.name,
              children: [c ?? o?.label, (0, i.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlea0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
                children: m ?? o?.description
              })]
            }), (0, i.jsx)(f, {}), (u || l?.error) && (0, i.jsx)("div", {
              className: "FieldError_sc_custom",
              children: u ?? l?.error
            })]
          })
        },
        P = ({
          value: e,
          onChange: n = () => {},
          multi: a = !1,
          ...t
        }) => {
          const r = ({
            value: e,
            multi: n
          }) => n ? (0, i.jsxs)("div", {
            children: ["Selected files:", e.map(e => e.name).join(", ")]
          }) : (0, i.jsxs)("div", {
            children: ["Selected file:", e.name]
          });
          return (0, i.jsx)("label", {
            children: e && "" !== e ? (0, i.jsx)(r, {
              value: e,
              multi: a
            }) : (0, i.jsx)("input", {
              ...t,
              type: "file",
              onChange: e => {
                n(a ? [...e.target.files] : e.target.files[0])
              }
            })
          })
        },
        C = ({
          defaultValue: e,
          name: n
        }) => (0, i.jsx)("input", {
          type: "hidden",
          value: e,
          name: n
        }),
        O = (e = "Label") => ({
          label: e,
          name: e.toLowerCase().split(" ").join("_"),
          component: () => (0, i.jsx)("h3", {
            style: {
              marginBottom: "var(--tina-padding-small)",
              "--color-h3": "var(--tina-color-grey-8)"
            },
            children: e
          })
        });
      j("Background Image Gradient"), O("Background Image Gradient"), j("Background Image Gradient"), a(30895), a(69334), s.PAGE_THEMES.BL, s.PAGE_THEMES.BL;
      const V = ({
        payload: e,
        variables: n
      }) => {
        const a = b(e, "_memoq"),
          t = JSON.parse(JSON.stringify((0, o.merge)(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          i = JSON.parse(JSON.stringify(e));
        return (0, o.cloneDeepWith)(i, (e, n, a) => {
          (e => {
            if (!e || !(0, o.has)(e, "key") || e.translated) return;
            const n = t[e.key] ?? null;
            if (!n) return;
            const a = y()(n);
            Object.keys(a).map(n => {
              (0, o.set)(e, n, a[n])
            }), (0, o.set)(e, "translated", !0), Object.freeze(e)
          })(a)
        }), i
      };
      var q = a(39279),
        I = a(82199);
      const A = {
          event: "page_section_impression",
          element_placement: null
        },
        H = ({
          threshold: e = .6,
          children: n,
          gtm: a = {}
        }) => {
          const {
            track: t
          } = (0, I.useGtmTrack)(), {
            ref: o,
            scrollTracked: l
          } = (0, s.useScrollTracking)(e);
          return (0, r.useEffect)(() => {
            l && t({
              ...A,
              ...a
            })
          }, [l]), (0, i.jsx)("section", {
            ref: o,
            children: n
          })
        },
        B = ({
          impressionTracking: e,
          gtm: n = {},
          children: a
        }) => e?.shouldTrack ? (0, i.jsx)(H, {
          threshold: e?.threshold,
          gtm: n,
          children: a
        }) : a,
        F = ({
          components: e,
          payload: n,
          componentProps: a = {}
        }) => {
          const t = (0, r.useMemo)(() => ((0, o.cloneDeepWith)(n, (a, t) => {
            "_template" !== t || Number.isInteger(Number(a)) || (0, o.get)(e, a) || (console.error(`TinaParser:useComponentRenderer: Component ${a} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", e))
          }), (({
            components: e,
            payload: n,
            componentProps: a
          }) => {
            const t = s => {
              let l = "";
              if (l = Array.isArray(s?.[w]) ? s[w].map(e => t(e)) : s?.[w] ?? "", !s?._template) return l;
              let d = s._template;
              "0" === d && (console.warn(`The _template "${d}" wasn't found in the available components. The _template "${d}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: s
              }), d = "gen9.Hero");
              const c = (0, o.get)(e, d) ?? null;
              if (!c) return null;
              const m = ((e, n) => a => ((e, n, a) => (0, i.jsx)(B, {
                  impressionTracking: a?.impressionTracking,
                  gtm: a?.gtm,
                  children: (0, i.jsx)(e, {
                    ...n
                  })
                }))(e, a, n))(c, {
                  impressionTracking: s?.impressionTracking,
                  gtm: {
                    ...s?.gtm,
                    whatever: 1
                  }
                }),
                u = [...s?.translations ?? []].reverse(),
                p = `componentProps_${(0,q.A)()}`;
              return (0, r.createElement)(m, {
                ...n?.meta,
                ...s,
                ...a,
                t: e => u.find(n => n?._key === e)?.value ?? e,
                key: p
              }, l)
            };
            return n?.[w]?.length ? t(n) : null
          })({
            components: e,
            payload: n,
            componentProps: a
          })), [JSON.stringify(n)]);
          return t
        },
        G = ({
          tina: e,
          components: n = {},
          componentProps: a = {}
        }) => {
          const t = k(),
            [s, l] = (0, r.useState)(null),
            [d, u] = (0, r.useState)(null);
          (0, r.useEffect)(() => {
            e?.payload && l(e.payload), e?.variables && u(e.variables)
          }, [e]);
          const [p] = (0, r.useState)({
            ...n,
            ...m() ?? {}
          }), h = (({
            payload: e
          }) => {
            const [n, a] = (0, r.useState)(e);
            return (0, r.useEffect)(() => {
              const n = (0, o.debounce)(() => {
                const n = JSON.parse(JSON.stringify(e));
                (0, o.cloneDeepWith)(n, (e, n, a) => {
                  a?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const n = e.mediaQueryList.filter(({
                        mediaQueryString: e
                      }) => window.matchMedia(e).matches) ?? null,
                      a = Object.assign({}, ...n);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...a,
                      _template: e?._template
                    })
                  })(a)
                }), a(n)
              }, 250);
              return n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n)
            }, [e]), n
          })({
            payload: s
          }), g = V({
            payload: s,
            variables: d
          });
          return (0, r.useMemo)(() => {
            if (!s) return null;
            const n = g,
              r = s?.meta?.prod ?? s?.meta?.cdn ?? t?.meta?.prod ?? t?.meta?.cdn ?? !1,
              o = {
                ...s,
                meta: {
                  ...s?.meta ?? {},
                  prod: r
                }
              };
            return (0, i.jsx)(f, {
              payload: o,
              children: (0, i.jsx)(c, {
                components: p,
                children: (0, i.jsx)(F, {
                  payload: n,
                  components: p,
                  componentProps: {
                    ...a,
                    tina: e
                  }
                })
              })
            })
          }, [t, s, JSON.stringify(h), JSON.stringify(g)])
        },
        X = (e = "", n = 0, a = {}, t = () => {}) => {
          let i = {
            ...a
          };
          if (n > 0) {
            const r = X(e, n - 1, a, t);
            i = {
              ...i,
              ...t(e, {
                templates: r
              })
            }
          }
          return i
        },
        z = X,
        J = ({
          html: e,
          as: n = "span",
          ...a
        }) => (0, i.jsx)(n, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...a
        });
      var W = a(32454);
      const U = (0, r.createContext)({
          themeOptions: {
            themeName: void 0,
            themeLevel: void 0,
            cssVars: {}
          }
        }),
        R = ({
          children: e,
          meta: n
        }) => {
          const a = (0, W.p0)({
              themeName: n?.themeName,
              themeLevel: n?.themeLevel
            }),
            t = (0, W.nR)({
              themeName: n?.themeName,
              themeLevel: n?.themeLevel
            }),
            r = {
              themeName: a?.themeName,
              themeLevel: a?.themeLevel,
              cssVars: t
            };
          return (0, i.jsx)(U.Provider, {
            value: {
              themeOptions: r
            },
            children: (0, i.jsx)("div", {
              "data-theme": r?.themeName,
              "data-level": r?.themeLevel,
              style: r?.cssVars,
              children: e
            })
          })
        }
    },
    49345(e, n, a) {
      "use strict";
      var t = a(42909),
        i = a(91146);
      a.d(n, ["t", 0, async ({
        service: e,
        returnUrl: n,
        pingBearer: a
      }) => {
        const [{
          iso: r
        }] = (0, t.getLocale)(), {
          authHost: o,
          clientId: s
        } = (0, i.A)(), l = await a(), d = new URL(`tpa/${e}/link`, `https://${o}.rockstargames.com`);
        return d.searchParams.append("cid", s), d.searchParams.append("lang", r), d.searchParams.append("returnUrl", n ?? window.location.pathname), l && "boolean" != typeof l && "string" == typeof l.bearerToken && d.searchParams.append("accessToken", l.bearerToken), d
      }])
    },
    91146(e, n, a) {
      "use strict";
      const t = window?.env?.sc,
        i = window?.env?.marketing,
        r = ({
          apiHost: e,
          authHost: n,
          clientId: a,
          cms: r,
          graphEnv: o,
          queryManifest: s,
          scHost: l,
          hostname: d,
          cdnBase: c,
          key: m,
          marketingAuthTLD: u
        }) => {
          const p = t?.apiHost ?? e,
            f = t?.authHost ?? n,
            k = t?.cdnBase ?? c,
            h = t?.clientId ?? a,
            g = i?.marketingAuthTLD ?? u,
            v = t?.scHost ?? l,
            y = i?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${p}.rockstargames.com`,
            graphEnv: t?.graphEnv ?? o,
            host: v,
            hostname: d,
            cdnBase: k,
            key: m,
            clientId: h,
            cms: `https://${r}.rockstargames.com/graphql`,
            authHost: f,
            queryManifest: s,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${f}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${h}`,
            gateway: `https://${g}/auth/gateway.json`,
            logout: `https://${g}/auth/sc-auth-logout`,
            pingBearer: `https://${g}/${y}`,
            authCookieName: "BearerToken"
          }
        },
        o = [r({
          key: "prod",
          clientId: "rsg",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), r({
          key: "sc-prod",
          clientId: "socialclub",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })];
      a.d(n, ["A", 0, () => {
        const e = window?.env?.scEnv ?? null;
        if (e) {
          const n = o.find(({
            key: n
          }) => n === e) ?? null;
          if (n) return n
        }
        return o.find(({
          hostname: e
        }) => new RegExp(e).test(document.location.hostname)) || o[0]
      }])
    }
  }
]);