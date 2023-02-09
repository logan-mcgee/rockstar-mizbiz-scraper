/*! For license information please see 78252a0a697ca2756c82.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [734], {
    734: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        default: () => S
      });
      var a = i(976);
      const t = {
        content: "ea23ee47c231cf87cc38",
        tvLogo: "ed6b20663ab3d651fa61"
      };
      var d = i(563);
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
      var r = i(364),
        o = i(859);
      const s = {
          list: "b6c299fcfb63d886c48b",
          item: "e21139138fb118469df8",
          active: "fe244655aff4257932ff"
        },
        c = e => {
          let {
            current: n,
            relativeTo: i = "./",
            videos: t
          } = e;
          return (0, d.jsx)("div", {
            className: s.list,
            children: t.map((e => (0, d.jsxs)(a.A, {
              className: [s.item, n === e.id ? s.active : ""].join(" "),
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
      var u = i(492);
      const m = () => {
        const {
          data: e
        } = (0, o.useQuery)(u.HomeData);
        if (!e) return null;
        const {
          videos: n
        } = e;
        return (0, d.jsx)("div", {
          className: "c4b20405ad56a3b4dd00",
          children: (0, d.jsx)(c, {
            videos: n.results
          })
        })
      };
      var v = i(822),
        f = i(929),
        k = i(224),
        p = i.n(k),
        N = i(602);
      const h = () => {
          const e = (0, f.useQueryParams)(),
            [n, i] = (0, v.useState)(null),
            {
              data: a,
              loading: t
            } = (0, o.useQuery)(N.VideoData, {
              variables: {
                id: n
              }
            });
          if ((0, v.useEffect)((() => {
              i(Number(e.get("id")))
            }), [e.get("id")]), t) return null;
          const {
            video: l,
            videos: r
          } = a;
          return (0, d.jsxs)("div", {
            className: "c9052727a8c85a5dee2f",
            children: [(0, d.jsx)(p(), {
              id: n,
              autoplay: !0
            }), (0, d.jsx)("h3", {
              children: l.title
            }), (0, d.jsx)("h4", {
              children: l.game.title
            }), (0, d.jsx)(c, {
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
            className: "f8298d14a5a120ca5c92",
            children: (0, d.jsxs)("div", {
              className: "e0c63f1c13c0922fcf66",
              children: [(0, d.jsx)(l, {}), (0, d.jsx)("div", {
                className: "e3e3144f8074bf13ff68",
                children: (0, d.jsx)(g, {})
              })]
            })
          })
        })
    },
    98: (e, n, i) => {
      "use strict";
      var a = i(822),
        t = Symbol.for("react.element"),
        d = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        r = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function o(e, n, i) {
        var a, o = {},
          s = null,
          c = null;
        for (a in void 0 !== i && (s = "" + i), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (c = n.ref), n) d.call(n, a) && !r.hasOwnProperty(a) && (o[a] = n[a]);
        if (e && e.defaultProps)
          for (a in n = e.defaultProps) void 0 === o[a] && (o[a] = n[a]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: c,
          props: o,
          _owner: l.current
        }
      }
      n.jsx = o, n.jsxs = o
    },
    563: (e, n, i) => {
      "use strict";
      e.exports = i(98)
    },
    492: (e, n, i) => {
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
        var a = l.HomeData || new Set,
          t = new Set,
          d = new Set;
        for (a.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
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
    602: (e, n, i) => {
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
        var a = l.VideoData || new Set,
          t = new Set,
          d = new Set;
        for (a.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
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