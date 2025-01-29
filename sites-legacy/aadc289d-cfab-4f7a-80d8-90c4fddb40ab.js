! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "aadc289d-cfab-4f7a-80d8-90c4fddb40ab", e._sentryDebugIdIdentifier = "sentry-dbid-aadc289d-cfab-4f7a-80d8-90c4fddb40ab")
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
  [4238], {
    27567: (e, a, n) => {
      "use strict";
      n.d(a, {
        A: () => v
      });
      var i = n(62229),
        t = n(9623),
        d = n(36671),
        l = n(23375),
        r = n(97933),
        o = n(92440),
        s = n(95966),
        c = n(31879),
        u = n(98260),
        f = n(26258);
      var m = n(98096);
      const v = (0, s.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [, n] = (0, r.h)(), [v, k] = (0, t.useSearchParams)(), {
          pathname: b
        } = (0, t.useLocation)(), {
          data: g,
          loading: y
        } = (0, s.useQuery)(u.MetaUrlInfo, {
          variables: {
            url: b.replace(/\/$/, "")
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), p = (0, s.useLocale)(), h = g?.metaUrlInfo?.tina;
        return (0, i.useEffect)((() => {
          const e = v.get("video");
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
              k({})
            },
            title: "Video Modal",
            contentClassName: "rockstargames-sites-legacyc5573c7aa0bd0a87733a56baa8e82d49"
          })
        }), [v.get("video"), p, h]), (0, i.useEffect)((() => () => n(null)), []), y || h ? y ? (0, m.jsx)("div", {
          className: "rockstargames-sites-legacyf28d8b23b6a74f9954e121d94441fa56",
          children: (0, m.jsx)(d.A, {})
        }) : (0, m.jsx)(o.TinaParser, {
          components: f.componentsForTinaParser,
          tina: h
        }) : (0, m.jsx)(l.A, {})
      }))
    },
    2727: (e, a, n) => {
      "use strict";
      n.d(a, {
        A: () => s
      });
      var i = n(62229);
      n(539), (0, n(81788).createDevLocaleHook)({
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
      n(68600);
      var o = n(98096);
      const s = e => {
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
        }), []), (0, o.jsx)("div", {
          className: "rockstargames-sites-legacybdf41fef2e2c09dce092e29717248436",
          "data-brand": n,
          children: a
        })
      }
    },
    24238: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        default: () => s
      });
      var i = n(9623),
        t = n(23375),
        d = n(93179),
        l = n(27567),
        r = n(2727),
        o = n(98096);
      const s = (0, d.A)((() => {
        const e = [{
          path: "/",
          element: (0, o.jsx)(l.A, {})
        }, {
          path: "*",
          element: (0, o.jsx)(t.A, {
            error: {
              code: window?.env?.responseStatusCode ?? 398
            }
          })
        }, {
          path: "/bully/*",
          element: (0, o.jsx)(l.A, {})
        }];
        return (0, o.jsx)(r.A, {
          brandStyles: "bully",
          children: (0, i.useRoutes)(e)
        })
      }))
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
          var o = r;
          r = new Set, o.forEach((function(e) {
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