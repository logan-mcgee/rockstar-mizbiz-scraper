/*! For license information please see 06356296a76bffa4241f86450469f411.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [909], {
    32: (e, i, n) => {
      "use strict";
      var a = n(927),
        t = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, i, n) {
        var a, l = {},
          o = null,
          c = null;
        for (a in void 0 !== n && (o = "" + n), void 0 !== i.key && (o = "" + i.key), void 0 !== i.ref && (c = i.ref), i) r.call(i, a) && !d.hasOwnProperty(a) && (l[a] = i[a]);
        if (e && e.defaultProps)
          for (a in i = e.defaultProps) void 0 === l[a] && (l[a] = i[a]);
        return {
          $$typeof: t,
          type: e,
          key: o,
          ref: c,
          props: l,
          _owner: s.current
        }
      }
      i.jsx = l, i.jsxs = l
    },
    705: (e, i, n) => {
      "use strict";
      e.exports = n(32)
    },
    909: (e, i, n) => {
      "use strict";
      n.r(i), n.d(i, {
        default: () => S
      });
      var a = n(976);
      const t = {
        content: "rockstargames-sites-rockstar-tvce661df9d9541ff15c96e75ad5dc0eba",
        tvLogo: "rockstargames-sites-rockstar-tvc86bed427f2c003a04fcb8f197654d47"
      };
      var r = n(705);
      const s = () => (0, r.jsx)("header", {
        className: t.tvHeader,
        children: (0, r.jsxs)("div", {
          className: t.content,
          children: [(0, r.jsx)(a.A, {
            className: t.tvLogo,
            to: "./"
          }), (0, r.jsxs)("h1", {
            children: ["The future of", " ", (0, r.jsx)("strong", {
              children: "American TV"
            }), " ", (0, r.jsx)("em", {
              children: "is Here"
            })]
          })]
        })
      });
      var d = n(583),
        l = n(859);
      const o = {
          list: "rockstargames-sites-rockstar-tvd1c3671d748a7bfaa6fe1d5896fbd28a",
          item: "rockstargames-sites-rockstar-tvd305555ee8eebb479324499004e759d1",
          active: "rockstargames-sites-rockstar-tva158f2198678191164619ce2e34522f3"
        },
        c = e => {
          let {
            current: i,
            relativeTo: n = "./",
            videos: t
          } = e;
          return (0, r.jsx)("div", {
            className: o.list,
            children: t.map((e => (0, r.jsxs)(a.A, {
              className: [o.item, i === e.id ? o.active : ""].join(" "),
              to: `${n}play?id=${e.id}`,
              children: [(0, r.jsx)("div", {
                style: {
                  background: `url(${e.screencap}) no-repeat center/contain`,
                  "--aspect-ratio": 16 / 9
                }
              }), (0, r.jsx)("h5", {
                children: e.title
              }), (0, r.jsx)("h6", {
                children: e.game.title
              })]
            }, e.id)))
          })
        };
      var u = n(176);
      const m = () => {
        const {
          data: e
        } = (0, l.useQuery)(u.HomeData);
        if (!e) return null;
        const {
          videos: i
        } = e;
        return (0, r.jsx)("div", {
          className: "rockstargames-sites-rockstar-tvdcf817f11d19ae0ef32bf4b753d292a2",
          children: (0, r.jsx)(c, {
            videos: i.results
          })
        })
      };
      var v = n(927),
        f = n(929),
        k = n(224),
        g = n.n(k),
        p = n(379);
      const N = () => {
          const e = (0, f.useQueryParams)(),
            [i, n] = (0, v.useState)(null),
            {
              data: a,
              loading: t
            } = (0, l.useQuery)(p.VideoData, {
              variables: {
                id: i
              }
            });
          if ((0, v.useEffect)((() => {
              n(Number(e.get("id")))
            }), [e.get("id")]), t) return null;
          const {
            video: s,
            videos: d
          } = a;
          return (0, r.jsxs)("div", {
            className: "rockstargames-sites-rockstar-tvfa6015ba4b01119a15f6a483b23de950",
            children: [(0, r.jsx)(g(), {
              id: i,
              autoplay: !0
            }), (0, r.jsx)("h3", {
              children: s.title
            }), (0, r.jsx)("h4", {
              children: s.game.title
            }), (0, r.jsx)(c, {
              relativeTo: "../",
              videos: d.results,
              current: i
            })]
          })
        },
        h = () => {
          const e = [{
            path: "/",
            element: (0, r.jsx)(m, {}),
            exact: !0
          }, {
            path: "/play",
            element: (0, r.jsx)(N, {})
          }];
          return (0, d.useRoutes)(e)
        },
        S = () => (0, r.jsx)("div", {
          children: (0, r.jsx)("div", {
            className: "rockstargames-sites-rockstar-tvdc15b4096af2de8aec5325a921a7987f",
            children: (0, r.jsxs)("div", {
              className: "rockstargames-sites-rockstar-tvf5df5c42f1b4ecb3eea339f0101d7bc9",
              children: [(0, r.jsx)(s, {}), (0, r.jsx)("div", {
                className: "rockstargames-sites-rockstar-tva089b814cf413051c57d2f057374d046",
                children: (0, r.jsx)(h, {})
              })]
            })
          })
        })
    },
    176: (e, i, n) => {
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

      function r(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && i.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, i)
        }))
      }
      a.definitions = a.definitions.concat(n(921).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var i = e.name.value;
        return !t[i] && (t[i] = !0, !0)
      })));
      var s = {};

      function d(e, i) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == i) return a
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          r(e, i), s[e.name.value] = i
        }
      })), e.exports = a, e.exports.HomeData = function(e, i) {
        var n = {
          kind: e.kind,
          definitions: [d(e, i)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var a = s[i] || new Set,
          t = new Set,
          r = new Set;
        for (a.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (s[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return t.forEach((function(i) {
          var a = d(e, i);
          a && n.definitions.push(a)
        })), n
      }(a, "HomeData")
    },
    379: (e, i, n) => {
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

      function r(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && i.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, i)
        }))
      }
      a.definitions = a.definitions.concat(n(921).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var i = e.name.value;
        return !t[i] && (t[i] = !0, !0)
      })));
      var s = {};

      function d(e, i) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == i) return a
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          r(e, i), s[e.name.value] = i
        }
      })), e.exports = a, e.exports.VideoData = function(e, i) {
        var n = {
          kind: e.kind,
          definitions: [d(e, i)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var a = s[i] || new Set,
          t = new Set,
          r = new Set;
        for (a.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (s[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return t.forEach((function(i) {
          var a = d(e, i);
          a && n.definitions.push(a)
        })), n
      }(a, "VideoData")
    }
  }
]);