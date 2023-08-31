/*! For license information please see 5561988a67ce6cb6d08e.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [463], {
    463: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        default: () => S
      });
      var a = i(976);
      const t = {
        content: "cdcf4dc512f21ea2ea23ee47c231cf87cc38",
        tvLogo: "cdcf4dc512f21ea2ed6b20663ab3d651fa61"
      };
      var d = i(160);
      const l = () => (0, d.jsx)("header", {
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
      var r = i(455),
        c = i(859);
      const o = {
          list: "cdcf4dc512f21ea2b6c299fcfb63d886c48b",
          item: "cdcf4dc512f21ea2e21139138fb118469df8",
          active: "cdcf4dc512f21ea2fe244655aff4257932ff"
        },
        s = e => {
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
      var u = i(469);
      const m = () => {
        const {
          data: e
        } = (0, c.useQuery)(u.HomeData);
        if (!e) return null;
        const {
          videos: n
        } = e;
        return (0, d.jsx)("div", {
          className: "cdcf4dc512f21ea2c4b20405ad56a3b4dd00",
          children: (0, d.jsx)(s, {
            videos: n.results
          })
        })
      };
      var f = i(932),
        v = i(929),
        k = i(224),
        p = i.n(k),
        N = i(922);
      const h = () => {
          const e = (0, v.useQueryParams)(),
            [n, i] = (0, f.useState)(null),
            {
              data: a,
              loading: t
            } = (0, c.useQuery)(N.VideoData, {
              variables: {
                id: n
              }
            });
          if ((0, f.useEffect)((() => {
              i(Number(e.get("id")))
            }), [e.get("id")]), t) return null;
          const {
            video: l,
            videos: r
          } = a;
          return (0, d.jsxs)("div", {
            className: "cdcf4dc512f21ea2c9052727a8c85a5dee2f",
            children: [(0, d.jsx)(p(), {
              id: n,
              autoplay: !0
            }), (0, d.jsx)("h3", {
              children: l.title
            }), (0, d.jsx)("h4", {
              children: l.game.title
            }), (0, d.jsx)(s, {
              relativeTo: "../",
              videos: r.results,
              current: n
            })]
          })
        },
        g = () => {
          const e = [{
            path: "/",
            element: (0, d.jsx)(m, {}),
            exact: !0
          }, {
            path: "/play",
            element: (0, d.jsx)(h, {})
          }];
          return (0, r.useRoutes)(e)
        },
        S = () => (0, d.jsx)("div", {
          children: (0, d.jsx)("div", {
            className: "cdcf4dc512f21ea2f8298d14a5a120ca5c92",
            children: (0, d.jsxs)("div", {
              className: "cdcf4dc512f21ea2e0c63f1c13c0922fcf66",
              children: [(0, d.jsx)(l, {}), (0, d.jsx)("div", {
                className: "cdcf4dc512f21ea2e3e3144f8074bf13ff68",
                children: (0, d.jsx)(g, {})
              })]
            })
          })
        })
    },
    970: (e, n, i) => {
      "use strict";
      var a = i(932),
        t = Symbol.for("react.element"),
        d = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        r = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, n, i) {
        var a, c = {},
          o = null,
          s = null;
        for (a in void 0 !== i && (o = "" + i), void 0 !== n.key && (o = "" + n.key), void 0 !== n.ref && (s = n.ref), n) d.call(n, a) && !r.hasOwnProperty(a) && (c[a] = n[a]);
        if (e && e.defaultProps)
          for (a in n = e.defaultProps) void 0 === c[a] && (c[a] = n[a]);
        return {
          $$typeof: t,
          type: e,
          key: o,
          ref: s,
          props: c,
          _owner: l.current
        }
      }
      n.jsx = c, n.jsxs = c
    },
    160: (e, n, i) => {
      "use strict";
      e.exports = i(970)
    },
    469: (e, n, i) => {
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
              name: {
                kind: "Name",
                value: "videos"
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
          end: 329
        }
      };
      a.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery HomeData($locale: String!, $cache: Boolean = true) {\n    videos(locale: $locale, tagId: 1000) {\n        results {\n            id\n            title\n            screencap\n            game {\n                title\n            }\n        }\n    }\n}\n',
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
      a.definitions = a.definitions.concat(i(921).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var n = e.name.value;
        return !t[n] && (t[n] = !0, !0)
      })));
      var l = {};

      function r(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          d(e, n), l[e.name.value] = n
        }
      })), e.exports = a, e.exports.HomeData = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [r(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var a = l[n] || new Set,
          t = new Set,
          d = new Set;
        for (a.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var c = d;
          d = new Set, c.forEach((function(e) {
            t.has(e) || (t.add(e), (l[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return t.forEach((function(n) {
          var a = r(e, n);
          a && i.definitions.push(a)
        })), i
      }(a, "HomeData")
    },
    922: (e, n, i) => {
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
                  value: "Int"
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
                value: "video"
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
              name: {
                kind: "Name",
                value: "videos"
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
          end: 442
        }
      };
      a.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery VideoData($locale: String!, $id: Int!, $cache: Boolean = true) {\n    video(locale: $locale, id: $id) {\n        title\n        game {\n            title\n        }\n    }\n    videos(locale: $locale, tagId: 1000) {\n        results {\n            id\n            title\n            screencap\n            game {\n                title\n            }\n        }\n    }\n}\n',
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
      a.definitions = a.definitions.concat(i(921).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var n = e.name.value;
        return !t[n] && (t[n] = !0, !0)
      })));
      var l = {};

      function r(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          d(e, n), l[e.name.value] = n
        }
      })), e.exports = a, e.exports.VideoData = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [r(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var a = l[n] || new Set,
          t = new Set,
          d = new Set;
        for (a.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var c = d;
          d = new Set, c.forEach((function(e) {
            t.has(e) || (t.add(e), (l[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return t.forEach((function(n) {
          var a = r(e, n);
          a && i.definitions.push(a)
        })), i
      }(a, "VideoData")
    }
  }
]);