try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "da9129e1-d8ce-4077-9325-6599d08b933f", e._sentryDebugIdIdentifier = "sentry-dbid-da9129e1-d8ce-4077-9325-6599d08b933f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [9171], {
    7959: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => o
      });
      var i = a(42295),
        t = a(62229);
      (0, a(81788).createDevLocaleHook)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var d = a(95966);
      const l = (0, d.makeVar)({
          brand: null,
          headerHidden: !1
        }),
        r = (e, n) => l({
          ...l(),
          [e]: n
        }),
        s = () => {
          const e = (0, d.useReactiveVar)(l);
          return {
            setState: r,
            state: e
          }
        };
      a(31445);
      const o = ({
        children: e,
        brandStyles: n,
        setHeaderHidden: a
      }) => {
        const {
          setState: d
        } = s();
        return (0, t.useLayoutEffect)((() => {
          d("brand", n)
        }), []), (0, i.jsx)("div", {
          className: "rockstargames-sites-legacybdf41fef2e2c09dce092e29717248436",
          "data-brand": n,
          children: e
        })
      }
    },
    33373: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => k
      });
      var i = a(42295),
        t = a(62229),
        d = a(9623),
        l = a(72408),
        r = a(34100),
        s = a(12294),
        o = a(92440),
        c = a(95966),
        u = a(31879),
        f = a(98260),
        m = a(392);
      const k = (0, c.withTranslations)((({
        t: e
      }) => {
        const [, n] = (0, s.h)(), [a, k] = (0, d.useSearchParams)(), {
          pathname: v
        } = (0, d.useLocation)(), {
          data: g,
          loading: y
        } = (0, c.useQuery)(f.MetaUrlInfo, {
          variables: {
            url: v.replace(/\/$/, "")
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), b = (0, c.useLocale)(), p = g?.metaUrlInfo?.tina;
        return (0, t.useEffect)((() => {
          const t = a.get("video");
          if (!t || !p) return void n(null);
          const d = Number(p?.payload?.content[0].content[0]?.tag ?? 0);
          let l;
          l = 40 === d && "ru_ru" === b ? "en_us" : b;
          const r = (0, i.jsx)(u.VideoWithPlaylist, {
              tagIds: [d],
              locale: l,
              playlistTitle: e("Up Next"),
              groupTypes: ["trailer", "feature"],
              currentVideoId: t,
              isModal: !0
            }),
            s = {
              left: window.innerWidth / 2,
              top: window.innerHeight / 2
            };
          n({
            content: r,
            rect: s,
            onClose: () => {
              k({})
            },
            title: "Video Modal",
            contentClassName: "rockstargames-sites-legacyc5573c7aa0bd0a87733a56baa8e82d49"
          })
        }), [a.get("video"), b, p]), (0, t.useEffect)((() => () => n(null)), []), y || p ? y ? (0, i.jsx)("div", {
          className: "rockstargames-sites-legacyf28d8b23b6a74f9954e121d94441fa56",
          children: (0, i.jsx)(l.A, {})
        }) : (0, i.jsx)(o.TinaParser, {
          components: m.componentsForTinaParser,
          tina: p
        }) : (0, i.jsx)(r.A, {})
      }))
    },
    98260: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MetaUrlInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "url"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
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
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
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
                value: "metaUrlInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "url"
                  }
                }
              }, {
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
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
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
                    value: "url"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
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
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "keywords"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 323
        }
      };

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        keywords\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.MetaUrlInfo = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var d = i[n] || new Set,
          l = new Set,
          r = new Set;
        for (d.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return l.forEach((function(n) {
          var i = t(e, n);
          i && a.definitions.push(i)
        })), a
      }(n, "MetaUrlInfo")
    },
    99171: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        default: () => o
      });
      var i = a(42295),
        t = a(9623),
        d = a(34100),
        l = a(57386),
        r = a(33373),
        s = a(7959);
      const o = (0, l.A)((() => {
        const e = [{
          path: "/",
          element: (0, i.jsx)(r.A, {})
        }, {
          path: "*",
          element: (0, i.jsx)(d.A, {
            error: {
              code: window?.env?.responseStatusCode ?? 398
            }
          })
        }];
        return (0, i.jsx)(s.A, {
          brandStyles: "reddeadredemption",
          children: (0, t.useRoutes)(e)
        })
      }))
    }
  }
]);