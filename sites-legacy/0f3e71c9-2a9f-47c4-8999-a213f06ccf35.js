try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0f3e71c9-2a9f-47c4-8999-a213f06ccf35", e._sentryDebugIdIdentifier = "sentry-dbid-0f3e71c9-2a9f-47c4-8999-a213f06ccf35")
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
  [7150], {
    90516(e) {
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
          end: 306
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          n(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          n(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          n(e, a)
        })
      }
      a.loc.source = {
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
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
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      }), e.exports = a, e.exports.MetaUrlInfo = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var l = i[a] || new Set,
          d = new Set,
          r = new Set;
        for (l.forEach(function(e) {
            r.add(e)
          }); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach(function(e) {
            d.has(e) || (d.add(e), (i[e] || new Set).forEach(function(e) {
              r.add(e)
            }))
          })
        }
        return d.forEach(function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        }), n
      }(a, "MetaUrlInfo")
    },
    26976(e, a, n) {
      "use strict";
      n.d(a, {
        A: () => k
      });
      var i = n(39793),
        t = n(93082),
        l = n(99225),
        d = n(70067),
        r = n(64317),
        s = n(31962),
        o = n(17301),
        c = n(13331),
        u = n(31879),
        f = n(90516),
        m = n(64915);
      const k = (0, c.withTranslations)(({
        t: e
      }) => {
        const [, a] = (0, s.h)(), [n, k] = (0, l.useSearchParams)(), {
          pathname: v
        } = (0, l.useLocation)(), {
          data: y,
          loading: b
        } = (0, c.useQuery)(f.MetaUrlInfo, {
          variables: {
            url: v.replace(/\/$/, "")
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), g = (0, c.useLocale)(), p = y?.metaUrlInfo?.tina;
        return (0, t.useEffect)(() => {
          const t = n.get("video");
          if (!t || !p) return void a(null);
          const l = Number(p?.payload?.content[0].content[0]?.tag ?? 0);
          let d;
          d = 40 === l && "ru_ru" === g ? "en_us" : g;
          const r = (0, i.jsx)(u.VideoWithPlaylist, {
              tagIds: [l],
              locale: d,
              playlistTitle: e("Up Next"),
              groupTypes: ["trailer", "feature"],
              currentVideoId: t,
              isModal: !0
            }),
            s = {
              left: window.innerWidth / 2,
              top: window.innerHeight / 2
            };
          a({
            content: r,
            rect: s,
            onClose: () => {
              k({})
            },
            title: "Video Modal",
            contentClassName: "rockstargames-sites-legacyc5573c7aa0bd0a87733a56baa8e82d49"
          })
        }, [n.get("video"), g, p]), (0, t.useEffect)(() => () => a(null), []), b || p ? b ? (0, i.jsx)("div", {
          className: "rockstargames-sites-legacyf28d8b23b6a74f9954e121d94441fa56",
          children: (0, i.jsx)(d.A, {})
        }) : (0, i.jsx)(o.TinaParser, {
          components: m.componentsForTinaParser,
          tina: p
        }) : (0, i.jsx)(r.A, {})
      })
    },
    73487(e, a, n) {
      "use strict";
      n.d(a, {
        A: () => o
      });
      var i = n(39793),
        t = n(93082);
      n(85719), n(80391), n(45302), n(28985), n(32903), n(49429), n(11008), n(49564), n(66787), n(55815), n(93221), n(47240), n(81715), (0, n(42909).createDevLocaleHook)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var l = n(13331);
      const d = (0, l.makeVar)({
          brand: null,
          headerHidden: !1
        }),
        r = (e, a) => d({
          ...d(),
          [e]: a
        }),
        s = () => {
          const e = (0, l.useReactiveVar)(d);
          return {
            setState: r,
            state: e
          }
        },
        o = ({
          children: e,
          brandStyles: a
        }) => {
          const {
            setState: n
          } = s();
          return (0, t.useLayoutEffect)(() => {
            n("brand", a)
          }, []), (0, i.jsx)("div", {
            className: "rockstargames-sites-legacybdf41fef2e2c09dce092e29717248436",
            "data-brand": a,
            children: e
          })
        }
    },
    67150(e, a, n) {
      "use strict";
      n.r(a);
      var i = n(39793),
        t = n(99225),
        l = n(64317),
        d = n(72905),
        r = n(26976),
        s = n(73487);
      const o = (0, d.A)(() => {
        const e = [{
          path: "/",
          element: (0, i.jsx)(r.A, {})
        }, {
          path: "*",
          element: (0, i.jsx)(l.A, {
            error: {
              code: window?.env?.responseStatusCode ?? 398
            }
          })
        }, {
          path: "/bully/*",
          element: (0, i.jsx)(r.A, {})
        }];
        return (0, i.jsx)(s.A, {
          brandStyles: "bully",
          children: (0, t.useRoutes)(e)
        })
      });
      n.d(a, ["default", 0, o])
    }
  }
]);