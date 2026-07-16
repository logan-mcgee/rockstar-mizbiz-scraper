try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2e3417cf-acb4-4a78-93f2-2532b75ee6ab", e._sentryDebugIdIdentifier = "sentry-dbid-2e3417cf-acb4-4a78-93f2-2532b75ee6ab")
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
          s = new Set,
          o = new Set;
        for (r.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach(function(e) {
            s.has(e) || (s.add(e), (t[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return s.forEach(function(n) {
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
          s = new Set,
          o = new Set;
        for (r.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach(function(e) {
            s.has(e) || (s.add(e), (t[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return s.forEach(function(n) {
          var t = i(e, n);
          t && a.definitions.push(t)
        }), a
      }(n, "TagList")
    },
    11215(e, n, a) {
      "use strict";
      a.r(n), a.d(n, {
        Divider: () => A,
        FieldWrapper: () => O,
        FileInput: () => V,
        Group: () => t.Group,
        GroupField: () => t.GroupField,
        HiddenInput: () => q,
        InViewTracker: () => z,
        TinaLabel: () => I,
        TinaParser: () => R,
        TinaPayloadProvider: () => k,
        TinaRichText: () => K,
        TinaThemeProvider: () => ee,
        parse: () => L,
        pick: () => x,
        previewSrc: () => D,
        recursiveNestedTemplates: () => Q,
        uploadDir: () => M,
        useGenerateCdnSource: () => j,
        useGetCdnSource: () => $,
        useImageParser: () => E,
        usePrunedTinaKeys: () => v,
        useTinaComponents: () => u,
        useTinaPayload: () => g,
        useTranslations: () => H
      });
      var t = a(46317),
        i = a(39793),
        r = a(93082),
        s = a(79098),
        o = a(11302);
      var l = a(13331);
      const d = (0, l.setContextItem)({
          context: (0, r.createContext)({}),
          key: "tinaParser"
        }),
        {
          Provider: c
        } = d,
        m = ({
          children: e,
          components: n
        }) => (0, i.jsx)(c, {
          value: n,
          children: e
        }),
        u = () => (0, r.useContext)(d),
        p = (0, l.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: f
        } = p,
        k = ({
          children: e,
          payload: n
        }) => (0, i.jsx)(f, {
          value: n,
          children: e
        }),
        g = () => (0, r.useContext)(p),
        h = (e, n) => Array.isArray(e) ? e.map(e => h(e, n)) : null !== e && "object" == typeof e ? Object.keys(e).reduce((a, t) => (t !== n && (a[t] = h(e[t], n)), a), {}) : e,
        v = e => (0, r.useMemo)(() => h(e, "key"), [e]);
      var y = a(97773),
        b = a.n(y),
        N = a(40415),
        S = a(97529),
        w = a(58969);
      const x = (e, n) => {
          const a = {};
          return (0, o.A)(e, (e, t, i) => {
            t === n && e && (a[i.key] = e)
          }), a
        },
        T = "content",
        _ = e => {
          if (!e) return null;
          const {
            hostname: n,
            pathname: a
          } = new URL(e, (0, l.getCdnPrefix)(!0));
          return "/" === a ? null : (n.endsWith(".akamaized.net"), e)
        },
        E = ({
          alt: e = null,
          mobile: n = null,
          imageMobileStyle: a = {},
          desktop: t = null,
          imageDesktopStyle: i = {},
          ariaLabel: s = null,
          sources: o = null,
          prod: d = null
        }) => {
          const c = (0, l.useLocale)(),
            {
              meta: m = {}
            } = g() ?? {},
            [u, p] = (0, r.useState)(d ?? m?.cdn ?? m?.prod ?? !0);
          (0, r.useEffect)(() => {
            p(d ?? m?.cdn ?? m?.prod ?? !0)
          }, [d, m]);
          const f = (0, r.useCallback)(e => {
            const n = null !== o,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return _(a);
            const t = `${n?(0,l.getCdnPrefix)(u):""}${a}`;
            return _(t)
          }, [u, o]);
          return {
            alt: e,
            ariaLabel: s,
            src: {
              mobile: f(o?.[c]?.mobile ?? o?.en_us?.mobile ?? n),
              imageMobileStyle: o?.[c]?.imageMobileStyle ?? o?.en_us?.imageMobileStyle ?? a,
              imageDesktopStyle: o?.[c]?.imageDesktopStyle ?? o?.en_us?.imageDesktopStyle ?? i,
              desktop: f(o?.[c]?.desktop ?? o?.en_us?.desktop ?? t)
            }
          }
        },
        $ = e => {
          const n = g() ?? {},
            {
              meta: a = {}
            } = n,
            [t, i] = (0, r.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, r.useEffect)(() => {
            i(a?.cdn ?? a?.prod ?? !1)
          }, [a]), e ? e?.startsWith("http") ? _(e) : _(`${(0,l.getCdnPrefix)(t)}${e}`) : null
        },
        j = () => {
          const e = g() ?? {},
            {
              meta: n = {}
            } = e,
            a = (0, r.useMemo)(() => n?.cdn ?? n?.prod ?? !1, [n]);
          return (0, r.useCallback)((e, n = {}) => {
            const t = n?.prod ?? a;
            return e ? e?.startsWith("http") ? _(e) : _(`${(0,l.getCdnPrefix)(t)}${e}`) : null
          }, [a])
        },
        L = e => e.full_src,
        D = e => {
          const n = e?.previewSrc ?? e?.preview_src ?? e;
          return n?.startsWith("http") ? n : `${(0,l.getCdnPrefix)(!1)}${n}`
        },
        M = e => e.meta.uploads_directory,
        P = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, i.jsx)("hr", {})
        });
      P("Background Image Gradient"), ((e = "Label") => {
        e.toLowerCase().split(" ").join("_")
      })("Background Image Gradient"), P("Background Image Gradient"), a(42909);
      const A = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, i.jsx)("hr", {})
      });
      var C = a(79484);
      const O = ({
          style: e,
          width: n,
          height: a,
          resizable: t,
          field: s,
          input: o,
          meta: l,
          name: d,
          label: c,
          description: m,
          error: u,
          children: p
        }) => {
          const f = () => t ? (0, i.jsx)(C.c, {
            defaultSize: {
              width: n || "100%",
              height: a || "500px"
            },
            style: {
              paddingBottom: "10px"
            },
            children: (0, r.cloneElement)(p, ...o)
          }) : p;
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-legacye8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
            style: e,
            children: [(0, i.jsxs)("label", {
              className: "rockstargames-sites-legacyceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
              htmlFor: d ?? s?.name,
              children: [c ?? s?.label, (0, i.jsx)("span", {
                className: "rockstargames-sites-legacya0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
                children: m ?? s?.description
              })]
            }), (0, i.jsx)(f, {}), (u || l?.error) && (0, i.jsx)("div", {
              className: "FieldError_sc_custom",
              children: u ?? l?.error
            })]
          })
        },
        V = ({
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
        q = ({
          defaultValue: e,
          name: n
        }) => (0, i.jsx)("input", {
          type: "hidden",
          value: e,
          name: n
        }),
        I = (e = "Label") => ({
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
      A("Background Image Gradient"), I("Background Image Gradient"), A("Background Image Gradient"), a(30895), a(69334), l.PAGE_THEMES.BL, l.PAGE_THEMES.BL;
      const H = ({
        payload: e,
        variables: n
      }) => {
        const a = x(e, "_memoq"),
          t = JSON.parse(JSON.stringify((0, N.A)(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(n?.keys ?? {}))))),
          i = JSON.parse(JSON.stringify(e));
        return (0, o.A)(i, (e, n, a) => {
          (e => {
            if (!e || !(0, S.A)(e, "key") || e.translated) return;
            const n = t[e.key] ?? null;
            if (!n) return;
            const a = b()(n);
            Object.keys(a).map(n => {
              (0, w.A)(e, n, a[n])
            }), (0, w.A)(e, "translated", !0), Object.freeze(e)
          })(a)
        }), i
      };
      var B = a(26065),
        F = a(39279),
        G = a(82199);
      const X = {
          event: "page_section_impression",
          element_placement: null
        },
        z = ({
          threshold: e = .6,
          children: n,
          gtm: a = {}
        }) => {
          const {
            track: t
          } = (0, G.useGtmTrack)(), {
            ref: s,
            scrollTracked: o
          } = (0, l.useScrollTracking)(e);
          return (0, r.useEffect)(() => {
            o && t({
              ...X,
              ...a
            })
          }, [o]), (0, i.jsx)("section", {
            ref: s,
            children: n
          })
        },
        J = ({
          impressionTracking: e,
          gtm: n = {},
          children: a
        }) => e?.shouldTrack ? (0, i.jsx)(z, {
          threshold: e?.threshold,
          gtm: n,
          children: a
        }) : a,
        U = ({
          components: e,
          payload: n,
          componentProps: a = {}
        }) => {
          const t = (0, r.useMemo)(() => ((0, o.A)(n, (a, t) => {
            "_template" !== t || Number.isInteger(Number(a)) || (0, B.A)(e, a) || (console.error(`TinaParser:useComponentRenderer: Component ${a} was found in payload, but not in renderable components.`), console.error("Payload:", n), console.error("Components:", e))
          }), (({
            components: e,
            payload: n,
            componentProps: a
          }) => {
            const t = s => {
              let o = "";
              if (o = Array.isArray(s?.[T]) ? s[T].map(e => t(e)) : s?.[T] ?? "", !s?._template) return o;
              let l = s._template;
              "0" === l && (console.warn(`The _template "${l}" wasn't found in the available components. The _template "${l}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(e),
                payload: s
              }), l = "gen9.Hero");
              const d = (0, B.A)(e, l) ?? null;
              if (!d) return null;
              const c = ((e, n) => a => ((e, n, a) => (0, i.jsx)(J, {
                  impressionTracking: a?.impressionTracking,
                  gtm: a?.gtm,
                  children: (0, i.jsx)(e, {
                    ...n
                  })
                }))(e, a, n))(d, {
                  impressionTracking: s?.impressionTracking,
                  gtm: {
                    ...s?.gtm,
                    whatever: 1
                  }
                }),
                m = [...s?.translations ?? []].reverse(),
                u = `componentProps_${(0,F.A)()}`;
              return (0, r.createElement)(c, {
                ...n?.meta,
                ...s,
                ...a,
                t: e => m.find(n => n?._key === e)?.value ?? e,
                key: u
              }, o)
            };
            return n?.[T]?.length ? t(n) : null
          })({
            components: e,
            payload: n,
            componentProps: a
          })), [JSON.stringify(n)]);
          return t
        },
        R = ({
          tina: e,
          components: n = {},
          componentProps: a = {}
        }) => {
          const t = g(),
            [l, d] = (0, r.useState)(null),
            [c, p] = (0, r.useState)(null);
          (0, r.useEffect)(() => {
            e?.payload && d(e.payload), e?.variables && p(e.variables)
          }, [e]);
          const [f] = (0, r.useState)({
            ...n,
            ...u() ?? {}
          }), h = (({
            payload: e
          }) => {
            const [n, a] = (0, r.useState)(e);
            return (0, r.useEffect)(() => {
              const n = (0, s.A)(() => {
                const n = JSON.parse(JSON.stringify(e));
                (0, o.A)(n, (e, n, a) => {
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
            payload: l
          }), v = H({
            payload: l,
            variables: c
          });
          return (0, r.useMemo)(() => {
            if (!l) return null;
            const n = v,
              r = l?.meta?.prod ?? l?.meta?.cdn ?? t?.meta?.prod ?? t?.meta?.cdn ?? !1,
              s = {
                ...l,
                meta: {
                  ...l?.meta ?? {},
                  prod: r
                }
              };
            return (0, i.jsx)(k, {
              payload: s,
              children: (0, i.jsx)(m, {
                components: f,
                children: (0, i.jsx)(U, {
                  payload: n,
                  components: f,
                  componentProps: {
                    ...a,
                    tina: e
                  }
                })
              })
            })
          }, [t, l, JSON.stringify(h), JSON.stringify(v)])
        },
        W = (e = "", n = 0, a = {}, t = () => {}) => {
          let i = {
            ...a
          };
          if (n > 0) {
            const r = W(e, n - 1, a, t);
            i = {
              ...i,
              ...t(e, {
                templates: r
              })
            }
          }
          return i
        },
        Q = W,
        K = ({
          html: e,
          as: n = "span",
          ...a
        }) => (0, i.jsx)(n, {
          dangerouslySetInnerHTML: {
            __html: e
          },
          ...a
        });
      var Y = a(32454);
      const Z = (0, r.createContext)({
          themeOptions: {
            themeName: void 0,
            themeLevel: void 0,
            cssVars: {}
          }
        }),
        ee = ({
          children: e,
          meta: n
        }) => {
          const a = (0, Y.p0)({
              themeName: n?.themeName,
              themeLevel: n?.themeLevel
            }),
            t = (0, Y.nR)({
              themeName: n?.themeName,
              themeLevel: n?.themeLevel
            }),
            r = {
              themeName: a?.themeName,
              themeLevel: a?.themeLevel,
              cssVars: t
            };
          return (0, i.jsx)(Z.Provider, {
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
          authHost: s,
          clientId: o
        } = (0, i.A)(), l = await a(), d = new URL(`tpa/${e}/link`, `https://${s}.rockstargames.com`);
        return d.searchParams.append("cid", o), d.searchParams.append("lang", r), d.searchParams.append("returnUrl", n ?? window.location.pathname), l && "boolean" != typeof l && "string" == typeof l.bearerToken && d.searchParams.append("accessToken", l.bearerToken), d
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
          graphEnv: s,
          queryManifest: o,
          scHost: l,
          hostname: d,
          cdnBase: c,
          key: m,
          marketingAuthTLD: u
        }) => {
          const p = t?.apiHost ?? e,
            f = t?.authHost ?? n,
            k = t?.cdnBase ?? c,
            g = t?.clientId ?? a,
            h = i?.marketingAuthTLD ?? u,
            v = t?.scHost ?? l,
            y = i?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${p}.rockstargames.com`,
            graphEnv: t?.graphEnv ?? s,
            host: v,
            hostname: d,
            cdnBase: k,
            key: m,
            clientId: g,
            cms: `https://${r}.rockstargames.com/graphql`,
            authHost: f,
            queryManifest: o,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${f}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${f}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${f}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${h}/auth/gateway.json`,
            logout: `https://${h}/auth/sc-auth-logout`,
            pingBearer: `https://${h}/${y}`,
            authCookieName: "BearerToken"
          }
        },
        s = [r({
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
          const n = s.find(({
            key: n
          }) => n === e) ?? null;
          if (n) return n
        }
        return s.find(({
          hostname: e
        }) => new RegExp(e).test(document.location.hostname)) || s[0]
      }])
    }
  }
]);