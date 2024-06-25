! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9d5c63ae-415e-4011-80ad-97e27f3e5371", e._sentryDebugIdIdentifier = "sentry-dbid-9d5c63ae-415e-4011-80ad-97e27f3e5371")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [312, 240], {
    99576: (e, n, i) => {
      "use strict";
      var a = i(51664),
        t = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function o(e, n, i) {
        var a, d = {},
          o = null,
          c = null;
        for (a in void 0 !== i && (o = "" + i), void 0 !== n.key && (o = "" + n.key), void 0 !== n.ref && (c = n.ref), n) r.call(n, a) && !l.hasOwnProperty(a) && (d[a] = n[a]);
        if (e && e.defaultProps)
          for (a in n = e.defaultProps) void 0 === d[a] && (d[a] = n[a]);
        return {
          $$typeof: t,
          type: e,
          key: o,
          ref: c,
          props: d,
          _owner: s.current
        }
      }
      n.Fragment = d, n.jsx = o, n.jsxs = o
    },
    95240: (e, n, i) => {
      "use strict";
      e.exports = i(99576)
    },
    68312: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        default: () => y
      });
      var a = i(9860);
      const t = {
        content: "rockstargames-sites-rockstar-tvce661df9d9541ff15c96e75ad5dc0eba",
        tvLogo: "rockstargames-sites-rockstar-tvc86bed427f2c003a04fcb8f197654d47"
      };
      var d = i(95240);
      const r = () => (0, d.jsx)("header", {
        className: t.tvHeader,
        children: (0, d.jsxs)("div", {
          className: t.content,
          children: [(0, d.jsx)(a.A, {
            className: t.tvLogo,
            to: "./"
          }), (0, d.jsxs)("h1", {
            children: ["The future of", " ", (0, d.jsx)("strong", {
              children: "American TV"
            }), " ", (0, d.jsx)("em", {
              children: "is Here"
            })]
          })]
        })
      });
      var s = i(98584),
        l = i(33052);
      const o = {
          list: "rockstargames-sites-rockstar-tvd1c3671d748a7bfaa6fe1d5896fbd28a",
          item: "rockstargames-sites-rockstar-tvd305555ee8eebb479324499004e759d1",
          active: "rockstargames-sites-rockstar-tva158f2198678191164619ce2e34522f3"
        },
        c = e => {
          let {
            current: n,
            relativeTo: i = "./",
            videos: t
          } = e;
          return (0, d.jsx)("div", {
            className: o.list,
            children: t.map((e => (0, d.jsxs)(a.A, {
              className: [o.item, n === e.id ? o.active : ""].join(" "),
              to: `${i}play?id=${e.id}`,
              children: [(0, d.jsx)("div", {
                style: {
                  background: `url(${e.screencap}) no-repeat center/contain`,
                  "--aspect-ratio": 16 / 9
                }
              }), (0, d.jsx)("h5", {
                children: e.title
              }), (0, d.jsx)("h6", {
                children: e.game.title
              })]
            }, e.id)))
          })
        };
      var u = i(50060);
      const m = () => {
        const {
          data: e
        } = (0, l.useQuery)(u.HomeData);
        if (!e) return null;
        const {
          videos: n
        } = e;
        return (0, d.jsx)("div", {
          className: "rockstargames-sites-rockstar-tvdcf817f11d19ae0ef32bf4b753d292a2",
          children: (0, d.jsx)(c, {
            videos: n.results
          })
        })
      };
      var f = i(51664),
        v = i(45792),
        k = i(84644),
        g = i.n(k),
        p = i(5164);
      const b = p.VideoData,
        N = () => {
          const e = (0, v.useQueryParams)(),
            [n, i] = (0, f.useState)(null),
            {
              data: a,
              loading: t
            } = (0, l.useQuery)(b, {
              variables: {
                id: n
              }
            });
          if ((0, f.useEffect)((() => {
              i(e.get("id"))
            }), [e.get("id")]), t) return null;
          const {
            video: r,
            videos: s
          } = a;
          return (0, d.jsxs)("div", {
            className: "rockstargames-sites-rockstar-tvfa6015ba4b01119a15f6a483b23de950",
            children: [(0, d.jsx)(g(), {
              id: n,
              autoplay: !0
            }), (0, d.jsx)("h3", {
              children: r.title
            }), (0, d.jsx)("h4", {
              children: r.game.title
            }), (0, d.jsx)(c, {
              relativeTo: "../",
              videos: s.results,
              current: n
            })]
          })
        },
        h = () => {
          const e = [{
            path: "/",
            element: (0, d.jsx)(m, {}),
            exact: !0
          }, {
            path: "/play",
            element: (0, d.jsx)(N, {})
          }];
          return (0, s.useRoutes)(e)
        },
        y = () => (0, d.jsx)("div", {
          children: (0, d.jsx)("div", {
            className: "rockstargames-sites-rockstar-tvdc15b4096af2de8aec5325a921a7987f",
            children: (0, d.jsxs)("div", {
              className: "rockstargames-sites-rockstar-tvf5df5c42f1b4ecb3eea339f0101d7bc9",
              children: [(0, d.jsx)(r, {}), (0, d.jsx)("div", {
                className: "rockstargames-sites-rockstar-tva089b814cf413051c57d2f057374d046",
                children: (0, d.jsx)(h, {})
              })]
            })
          })
        })
    },
    50060: (e, n, i) => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "HomeData"
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
              alias: {
                kind: "Name",
                value: "videos"
              },
              name: {
                kind: "Name",
                value: "videos2"
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
                  value: "tagId"
                },
                value: {
                  kind: "IntValue",
                  value: "1000"
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "screencap"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "title"
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
          end: 339
        }
      };
      a.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video2-fields.graphql"\n\nquery HomeData($locale: String!, $cache: Boolean = true) {\n    videos: videos2(locale: $locale, tagId: 1000) {\n        results {\n            id\n            title\n            screencap\n            game {\n                title\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function d(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          d(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          d(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          d(e, n)
        }))
      }
      a.definitions = a.definitions.concat(i(53264).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var n = e.name.value;
        return !t[n] && (t[n] = !0, !0)
      })));
      var r = {};

      function s(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          d(e, n), r[e.name.value] = n
        }
      })), e.exports = a, e.exports.HomeData = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [s(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var a = r[n] || new Set,
          t = new Set,
          d = new Set;
        for (a.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (r[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return t.forEach((function(n) {
          var a = s(e, n);
          a && i.definitions.push(a)
        })), i
      }(a, "HomeData")
    },
    5164: (e, n, i) => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "VideoData"
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
              alias: {
                kind: "Name",
                value: "video"
              },
              name: {
                kind: "Name",
                value: "video2"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "game"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "videos"
              },
              name: {
                kind: "Name",
                value: "videos2"
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
                  value: "tagId"
                },
                value: {
                  kind: "IntValue",
                  value: "1000"
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "screencap"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "title"
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
          end: 463
        }
      };
      a.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video2-fields.graphql"\n\nquery VideoData($locale: String!, $id: String!, $cache: Boolean = true) {\n    video: video2(locale: $locale, id: $id) {\n        title\n        game {\n            title\n        }\n    }\n    videos: videos2(locale: $locale, tagId: 1000) {\n        results {\n            id\n            title\n            screencap\n            game {\n                title\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function d(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          d(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          d(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          d(e, n)
        }))
      }
      a.definitions = a.definitions.concat(i(53264).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var n = e.name.value;
        return !t[n] && (t[n] = !0, !0)
      })));
      var r = {};

      function s(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          d(e, n), r[e.name.value] = n
        }
      })), e.exports = a, e.exports.VideoData = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [s(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var a = r[n] || new Set,
          t = new Set,
          d = new Set;
        for (a.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (r[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return t.forEach((function(n) {
          var a = s(e, n);
          a && i.definitions.push(a)
        })), i
      }(a, "VideoData")
    }
  }
]);