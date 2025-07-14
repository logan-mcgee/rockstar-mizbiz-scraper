try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7e570e09-e1fa-4428-ba16-3d0c352efdb9", e._sentryDebugIdIdentifier = "sentry-dbid-7e570e09-e1fa-4428-ba16-3d0c352efdb9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [7708], {
    7708: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        default: () => o
      });
      var i = n(9623),
        t = n(45575),
        d = n(43981),
        l = n(18830),
        r = n(87623),
        s = n(25854);
      const o = (0, d.A)((() => {
        const e = [{
          path: "/",
          element: (0, s.jsx)(l.A, {})
        }, {
          path: "*",
          element: (0, s.jsx)(t.A, {
            error: {
              code: window?.env?.responseStatusCode ?? 398
            }
          })
        }, {
          path: "/bully/*",
          element: (0, s.jsx)(l.A, {})
        }];
        return (0, s.jsx)(r.A, {
          brandStyles: "bully",
          children: (0, i.useRoutes)(e)
        })
      }))
    },
    18830: (e, a, n) => {
      "use strict";
      n.d(a, {
        A: () => k
      });
      var i = n(62229),
        t = n(9623),
        d = n(1225),
        l = n(45575),
        r = n(91644),
        s = n(92440),
        o = n(95966),
        c = n(31879),
        u = n(98260),
        f = n(70885);
      var m = n(25854);
      const k = (0, o.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [, n] = (0, r.h)(), [k, v] = (0, t.useSearchParams)(), {
          pathname: b
        } = (0, t.useLocation)(), {
          data: y,
          loading: g
        } = (0, o.useQuery)(u.MetaUrlInfo, {
          variables: {
            url: b.replace(/\/$/, "")
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), p = (0, o.useLocale)(), h = y?.metaUrlInfo?.tina;
        return (0, i.useEffect)((() => {
          const e = k.get("video");
          if (!e || !h) return void n(null);
          const i = Number(h?.payload?.content[0].content[0]?.tag ?? 0);
          let t;
          t = 40 === i && "ru_ru" === p ? "en_us" : p;
          const d = (0, m.jsx)(c.VideoWithPlaylist, {
              tagIds: [i],
              locale: t,
              playlistTitle: a("Up Next"),
              groupTypes: ["trailer", "feature"],
              currentVideoId: e,
              isModal: !0
            }),
            l = {
              left: window.innerWidth / 2,
              top: window.innerHeight / 2
            };
          n({
            content: d,
            rect: l,
            onClose: () => {
              v({})
            },
            title: "Video Modal",
            contentClassName: "rockstargames-sites-legacyc5573c7aa0bd0a87733a56baa8e82d49"
          })
        }), [k.get("video"), p, h]), (0, i.useEffect)((() => () => n(null)), []), g || h ? g ? (0, m.jsx)("div", {
          className: "rockstargames-sites-legacyf28d8b23b6a74f9954e121d94441fa56",
          children: (0, m.jsx)(d.A, {})
        }) : (0, m.jsx)(s.TinaParser, {
          components: f.componentsForTinaParser,
          tina: h
        }) : (0, m.jsx)(l.A, {})
      }))
    },
    87623: (e, a, n) => {
      "use strict";
      n.d(a, {
        A: () => o
      });
      var i = n(62229);
      (0, n(81788).createDevLocaleHook)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var t = n(95966);
      const d = (0, t.makeVar)({
          brand: null,
          headerHidden: !1
        }),
        l = (e, a) => d({
          ...d(),
          [e]: a
        }),
        r = () => {
          const e = (0, t.useReactiveVar)(d);
          return {
            setState: l,
            state: e
          }
        };
      n(54930);
      var s = n(25854);
      const o = e => {
        let {
          children: a,
          brandStyles: n,
          setHeaderHidden: t
        } = e;
        const {
          setState: d
        } = r();
        return (0, i.useLayoutEffect)((() => {
          d("brand", n)
        }), []), (0, s.jsx)("div", {
          className: "rockstargames-sites-legacybdf41fef2e2c09dce092e29717248436",
          "data-brand": n,
          children: a
        })
      }
    },
    98260: e => {
      var a = {
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

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        keywords\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.MetaUrlInfo = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var d = i[a] || new Set,
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
        return l.forEach((function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "MetaUrlInfo")
    }
  }
]);