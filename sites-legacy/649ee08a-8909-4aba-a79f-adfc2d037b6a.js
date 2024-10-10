! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "649ee08a-8909-4aba-a79f-adfc2d037b6a", e._sentryDebugIdIdentifier = "sentry-dbid-649ee08a-8909-4aba-a79f-adfc2d037b6a")
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
  [861], {
    87240: (e, a, n) => {
      "use strict";
      n.d(a, {
        A: () => v
      });
      var i = n(71403),
        t = n(25076),
        d = n(26177),
        l = n(88038),
        r = n(58407),
        o = n(93665),
        s = n(74401),
        c = n(31879),
        u = n(42756),
        f = n(97655),
        m = n(85770);
      var k = n(46632);
      const v = (0, u.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [, n] = (0, o.h)(), [v, b] = (0, t.useSearchParams)(), {
          pathname: g
        } = (0, t.useLocation)(), {
          data: p,
          loading: y
        } = (0, r.useQuery)(f.MetaUrlInfo, {
          variables: {
            url: g.replace(/\/$/, "")
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), h = (0, u.useLocale)(), N = p?.metaUrlInfo?.tina;
        return (0, i.useEffect)((() => {
          const e = v.get("video");
          if (!e || !N) return void n(null);
          const i = Number(N?.payload?.content[0].content[0]?.tag ?? 0);
          let t;
          t = 40 === i && ["pt_br", "zh_tw", "zh_hans", "ko_kr", "ru_ru", "ja_jp", "pl_pl"].includes(h) ? "en_us" : h;
          const d = (0, k.jsx)(c.VideoWithPlaylist, {
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
              b({})
            },
            title: "Video Modal",
            contentClassName: "rockstargames-sites-legacya1b74831bac97f1749e525bcc2aeccb2"
          })
        }), [v.get("video"), h, N]), (0, i.useEffect)((() => () => n(null)), []), y || N ? y ? (0, k.jsx)("div", {
          className: "rockstargames-sites-legacye7319efabeddf6cdc8c95f038912d0c1",
          children: (0, k.jsx)(d.A, {})
        }) : (0, k.jsx)(s.TinaParser, {
          components: m.componentsForTinaParser,
          tina: N
        }) : (0, k.jsx)(l.A, {})
      }))
    },
    54506: (e, a, n) => {
      "use strict";
      n.d(a, {
        A: () => s
      });
      var i = n(71403);
      n(94566), (0, n(96717).createDevLocaleHook)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var t = n(58407);
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
      n(7471);
      var o = n(46632);
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
          className: "rockstargames-sites-legacyfa85682f753d59e768dbb3eedf01a62a",
          "data-brand": n,
          children: a
        })
      }
    },
    92861: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        default: () => s
      });
      var i = n(25076),
        t = n(88038),
        d = n(99718),
        l = n(87240),
        r = n(54506),
        o = n(46632);
      const s = (0, d.A)((e => {
        let {
          setHeaderHidden: a
        } = e;
        const n = [{
          path: "/",
          element: (0, o.jsx)(l.A, {})
        }, {
          path: "*",
          element: (0, o.jsx)(t.A, {
            error: {
              code: window?.env?.responseStatusCode ?? 398
            }
          })
        }];
        return (0, o.jsx)(r.A, {
          brandStyles: "reddeadredemption",
          setHeaderHidden: a,
          children: (0, i.useRoutes)(n)
        })
      }))
    },
    97655: e => {
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