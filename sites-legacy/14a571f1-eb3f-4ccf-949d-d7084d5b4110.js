! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "14a571f1-eb3f-4ccf-949d-d7084d5b4110", e._sentryDebugIdIdentifier = "sentry-dbid-14a571f1-eb3f-4ccf-949d-d7084d5b4110")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [8830], {
    72273: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => E
      });
      var t = a(62229),
        i = a(9623),
        d = a(23066),
        r = a(89241),
        s = a(98662),
        l = a(92440),
        o = a(95966),
        c = a(31879),
        u = a(98260),
        f = a(22349),
        m = a(53178),
        v = a.n(m),
        g = a(27835),
        k = a.n(g),
        A = a(17529),
        p = a.n(A),
        b = a(72162),
        y = a.n(b),
        h = a(82510),
        w = a.n(h),
        N = a(90675),
        S = a.n(N),
        C = a(5764),
        _ = {};
      _.styleTagTransform = S(), _.setAttributes = y(), _.insert = p().bind(null, "head"), _.domAPI = k(), _.insertStyleElement = w(), v()(C.A, _);
      const x = C.A && C.A.locals ? C.A.locals : void 0;
      var I = a(73855);
      const E = (0, o.withTranslations)((e => {
        let {
          t: n
        } = e;
        const [, a] = (0, s.h)(), [m, v] = (0, i.useSearchParams)(), {
          pathname: g
        } = (0, i.useLocation)(), {
          data: k,
          loading: A
        } = (0, o.useQuery)(u.MetaUrlInfo, {
          variables: {
            url: g.replace(/\/$/, "")
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), p = (0, o.useLocale)(), b = k?.metaUrlInfo?.tina;
        return (0, t.useEffect)((() => {
          const e = m.get("video");
          if (!e || !b) return void a(null);
          const t = Number(b?.payload?.content[0].content[0]?.tag ?? 0);
          let i;
          i = 40 === t && "ru_ru" === p ? "en_us" : p;
          const d = (0, I.jsx)(c.VideoWithPlaylist, {
              tagIds: [t],
              locale: i,
              playlistTitle: n("Up Next"),
              groupTypes: ["trailer", "feature"],
              currentVideoId: e,
              isModal: !0
            }),
            r = {
              left: window.innerWidth / 2,
              top: window.innerHeight / 2
            };
          a({
            content: d,
            rect: r,
            onClose: () => {
              v({})
            },
            title: "Video Modal",
            contentClassName: x.noContentPadding
          })
        }), [m.get("video"), p, b]), (0, t.useEffect)((() => () => a(null)), []), A || b ? A ? (0, I.jsx)("div", {
          className: x.loading,
          children: (0, I.jsx)(d.A, {})
        }) : (0, I.jsx)(l.TinaParser, {
          components: f.componentsForTinaParser,
          tina: b
        }) : (0, I.jsx)(r.A, {})
      }))
    },
    93977: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => S
      });
      var t = a(62229);
      (0, a(81788).createDevLocaleHook)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var i = a(95966);
      const d = (0, i.makeVar)({
          brand: null,
          headerHidden: !1
        }),
        r = (e, n) => d({
          ...d(),
          [e]: n
        }),
        s = () => {
          const e = (0, i.useReactiveVar)(d);
          return {
            setState: r,
            state: e
          }
        };
      a(68548);
      var l = a(53178),
        o = a.n(l),
        c = a(27835),
        u = a.n(c),
        f = a(17529),
        m = a.n(f),
        v = a(72162),
        g = a.n(v),
        k = a(82510),
        A = a.n(k),
        p = a(90675),
        b = a.n(p),
        y = a(57003),
        h = {};
      h.styleTagTransform = b(), h.setAttributes = g(), h.insert = m().bind(null, "head"), h.domAPI = u(), h.insertStyleElement = A(), o()(y.A, h);
      const w = y.A && y.A.locals ? y.A.locals : void 0;
      var N = a(73855);
      const S = e => {
        let {
          children: n,
          brandStyles: a,
          setHeaderHidden: i
        } = e;
        const {
          setState: d
        } = s();
        return (0, t.useLayoutEffect)((() => {
          d("brand", a)
        }), []), (0, N.jsx)("div", {
          className: w.routesWrapper,
          "data-brand": a,
          children: n
        })
      }
    },
    58830: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        default: () => o
      });
      var t = a(9623),
        i = a(89241),
        d = a(28223),
        r = a(72273),
        s = a(93977),
        l = a(73855);
      const o = (0, d.A)((() => {
        const e = [{
          path: "/",
          element: (0, l.jsx)(r.A, {})
        }, {
          path: "*",
          element: (0, l.jsx)(i.A, {
            error: {
              code: window?.env?.responseStatusCode ?? 398
            }
          })
        }];
        return (0, l.jsx)(s.A, {
          brandStyles: "reddeadredemption",
          children: (0, t.useRoutes)(e)
        })
      }))
    },
    5764: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => s
      });
      var t = a(42587),
        i = a.n(t),
        d = a(15081),
        r = a.n(d)()(i());
      r.push([e.id, ".rockstargames-sites-legacyf28d8b23b6a74f9954e121d94441fa56{align-items:center;display:flex;height:calc(100vh - var(--header-height));justify-content:center}.rockstargames-sites-legacyc5573c7aa0bd0a87733a56baa8e82d49{--modal-content-padding:0}", "", {
        version: 3,
        sources: ["webpack://./src/components/FetchByUrl/index.less"],
        names: [],
        mappings: "AAAA,4DAGI,kBAAA,CAFA,YAAA,CAGA,yCAAA,CAFA,sBAGJ,CAEA,4DACI,yBAAJ",
        sourcesContent: [".loading {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh - var(--header-height));\n}\n\n.noContentPadding {\n    --modal-content-padding: 0;\n}\n"],
        sourceRoot: ""
      }]), r.locals = {
        loading: "rockstargames-sites-legacyf28d8b23b6a74f9954e121d94441fa56",
        noContentPadding: "rockstargames-sites-legacyc5573c7aa0bd0a87733a56baa8e82d49"
      };
      const s = r
    },
    57003: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => s
      });
      var t = a(42587),
        i = a.n(t),
        d = a(15081),
        r = a.n(d)()(i());
      r.push([e.id, ".rockstargames-sites-legacybdf41fef2e2c09dce092e29717248436{--game-header-height:80px;display:flex;flex:1;flex-flow:column;justify-content:center}.rockstargames-sites-legacybdf41fef2e2c09dce092e29717248436[data-brand=reddeadredemption]{--btn-active-color:#c00}", "", {
        version: 3,
        sources: ["webpack://./src/components/RoutesWrapper/index.less"],
        names: [],
        mappings: "AAAA,4DACI,yBAAA,CACA,YAAA,CACA,MAAA,CACA,gBAAA,CACA,sBACJ,CACI,0FACI,uBACR",
        sourcesContent: [".routesWrapper {\n    --game-header-height: 80px;\n    display: flex;\n    flex: 1;\n    flex-flow: column;\n    justify-content: center;\n\n    &[data-brand='reddeadredemption'] {\n        --btn-active-color: #c00;\n    }\n}\n"],
        sourceRoot: ""
      }]), r.locals = {
        routesWrapper: "rockstargames-sites-legacybdf41fef2e2c09dce092e29717248436"
      };
      const s = r
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
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
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
      var t = {};

      function i(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == n) return t
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), t[e.name.value] = n
        }
      })), e.exports = n, e.exports.MetaUrlInfo = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var d = t[n] || new Set,
          r = new Set,
          s = new Set;
        for (d.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return r.forEach((function(n) {
          var t = i(e, n);
          t && a.definitions.push(t)
        })), a
      }(n, "MetaUrlInfo")
    }
  }
]);