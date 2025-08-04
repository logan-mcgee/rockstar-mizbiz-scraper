try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "424e8004-3e25-4f9f-9e95-4b640994a54e", e._sentryDebugIdIdentifier = "sentry-dbid-424e8004-3e25-4f9f-9e95-4b640994a54e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [8995], {
    26382: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => k
      });
      var i = a(62229),
        t = a(9623),
        d = a(68378),
        l = a(58720),
        r = a(12530),
        s = a(92440),
        o = a(95966),
        c = a(31879),
        u = a(98260),
        f = a(2700);
      var m = a(70954);
      const k = (0, o.withTranslations)((e => {
        let {
          t: n
        } = e;
        const [, a] = (0, r.h)(), [k, v] = (0, t.useSearchParams)(), {
          pathname: g
        } = (0, t.useLocation)(), {
          data: y,
          loading: p
        } = (0, o.useQuery)(u.MetaUrlInfo, {
          variables: {
            url: g.replace(/\/$/, "")
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), b = (0, o.useLocale)(), h = y?.metaUrlInfo?.tina;
        return (0, i.useEffect)((() => {
          const e = k.get("video");
          if (!e || !h) return void a(null);
          const i = Number(h?.payload?.content[0].content[0]?.tag ?? 0);
          let t;
          t = 40 === i && "ru_ru" === b ? "en_us" : b;
          const d = (0, m.jsx)(c.VideoWithPlaylist, {
              tagIds: [i],
              locale: t,
              playlistTitle: n("Up Next"),
              groupTypes: ["trailer", "feature"],
              currentVideoId: e,
              isModal: !0
            }),
            l = {
              left: window.innerWidth / 2,
              top: window.innerHeight / 2
            };
          a({
            content: d,
            rect: l,
            onClose: () => {
              v({})
            },
            title: "Video Modal",
            contentClassName: "rockstargames-sites-legacyc5573c7aa0bd0a87733a56baa8e82d49"
          })
        }), [k.get("video"), b, h]), (0, i.useEffect)((() => () => a(null)), []), p || h ? p ? (0, m.jsx)("div", {
          className: "rockstargames-sites-legacyf28d8b23b6a74f9954e121d94441fa56",
          children: (0, m.jsx)(d.A, {})
        }) : (0, m.jsx)(s.TinaParser, {
          components: f.componentsForTinaParser,
          tina: h
        }) : (0, m.jsx)(l.A, {})
      }))
    },
    76693: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => o
      });
      var i = a(62229);
      (0, a(81788).createDevLocaleHook)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var t = a(95966);
      const d = (0, t.makeVar)({
          brand: null,
          headerHidden: !1
        }),
        l = (e, n) => d({
          ...d(),
          [e]: n
        }),
        r = () => {
          const e = (0, t.useReactiveVar)(d);
          return {
            setState: l,
            state: e
          }
        };
      a(6821);
      var s = a(70954);
      const o = e => {
        let {
          children: n,
          brandStyles: a,
          setHeaderHidden: t
        } = e;
        const {
          setState: d
        } = r();
        return (0, i.useLayoutEffect)((() => {
          d("brand", a)
        }), []), (0, s.jsx)("div", {
          className: "rockstargames-sites-legacybdf41fef2e2c09dce092e29717248436",
          "data-brand": a,
          children: n
        })
      }
    },
    78995: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        default: () => o
      });
      var i = a(9623),
        t = a(58720),
        d = a(69466),
        l = a(26382),
        r = a(76693),
        s = a(70954);
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
        }];
        return (0, s.jsx)(r.A, {
          brandStyles: "reddeadredemption",
          children: (0, i.useRoutes)(e)
        })
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
    }
  }
]);