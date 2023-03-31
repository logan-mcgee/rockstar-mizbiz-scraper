/*! For license information please see 5c361638c0884e67114d.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [22], {
    22: (e, i, n) => {
      "use strict";
      n.r(i), n.d(i, {
        default: () => y
      });
      var a = n(976);
      var t = n(322);
      const l = () => (0, t.jsx)("header", {
        className: "d4f1cec5dd8b2b22bd52",
        children: (0, t.jsxs)("div", {
          className: "ea23ee47c231cf87cc38",
          children: [(0, t.jsx)(a.A, {
            className: "ed6b20663ab3d651fa61",
            to: "/"
          }), (0, t.jsxs)("h1", {
            children: ["The future of ", (0, t.jsx)("strong", {
              children: "American TV"
            }), " ", (0, t.jsx)("em", {
              children: "is Here"
            })]
          }), (0, t.jsx)("div", {
            className: "b9f6f6b36342c2b2b0b6"
          })]
        })
      });
      var d = n(814),
        s = n(859);
      const r = {
          items: "dacd11b40562c3ef802d",
          list: "b6c299fcfb63d886c48b",
          item: "e21139138fb118469df8"
        },
        o = e => {
          let {
            current: i,
            title: n,
            vids: l
          } = e;
          return (0, t.jsxs)("div", {
            className: r.list,
            children: [(0, t.jsx)("h2", {
              children: n
            }), (0, t.jsx)("div", {
              className: r.items,
              children: l.map((e => (0, t.jsxs)(a.A, {
                className: [r.item, e.id === i ? r.playing : ""].join(" "),
                to: `./play?id=${e.id}`,
                children: [(0, t.jsx)("div", {
                  style: {
                    background: `url(${e.screencap}) no-repeat center/contain`,
                    "--aspect-ratio": 16 / 9
                  }
                }), e.title]
              }, e.id)))
            })]
          })
        };
      var c = n(492);
      const u = e => {
          let {
            v: i
          } = e;
          return (0, t.jsxs)("div", {
            className: "cbf009aea5e45e56cd7a",
            children: [(0, t.jsx)("div", {
              style: {
                background: `url(${i.fob_640}) no-repeat center/contain`,
                "--aspect-ratio": 64 / 79
              }
            }), (0, t.jsxs)("div", {
              className: "bd7ec57e9a60f8c39718",
              children: [(0, t.jsx)(a.A, {
                to: i.url_official,
                target: "_blank",
                children: "Visit Official Site"
              }), i.purchases.length ? (0, t.jsx)(a.A, {
                to: i.purchases[0].href,
                target: "_blank",
                children: "Buy Now"
              }) : "", (0, t.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: i.description
                }
              })]
            })]
          })
        },
        m = e => {
          let {
            games: i
          } = e;
          return (0, t.jsx)("div", {
            className: "d2e4b47b5533363f8326",
            children: i.map((e => (0, t.jsx)(a.A, {
              to: e.url_official,
              target: "_blank",
              style: {
                background: `url(${e.fob_640}) no-repeat center/contain`,
                "--aspect-ratio": 64 / 79
              }
            }, e.title_slug)))
          })
        },
        v = e => {
          let {
            games: i,
            v: n
          } = e;
          return (0, t.jsxs)("div", {
            className: "e10a123dba3026bddcfe",
            children: [(0, t.jsx)("h2", {
              children: "The Grand Theft Auto Series"
            }), (0, t.jsx)(u, {
              v: n
            }), (0, t.jsx)(m, {
              games: i.filter((e => "V" !== e.title_slug))
            })]
          })
        },
        k = () => {
          const {
            data: e
          } = (0, s.useQuery)(c.HomeData);
          if (!e) return null;
          const {
            games: i,
            rich: n,
            television: l,
            v: d
          } = e;
          return (0, t.jsxs)("div", {
            className: "c4b20405ad56a3b4dd00",
            children: [(0, t.jsx)(a.A, {
              className: "e45d0c70a84c0cb2bd4e",
              to: `/play?id=${l.results[0].id}`
            }), (0, t.jsx)(o, {
              title: "Television",
              vids: l.results
            }), (0, t.jsx)(o, {
              title: "Coming Soon",
              vids: n.results
            }), (0, t.jsx)(v, {
              games: i.results,
              v: d
            })]
          })
        };
      var f = n(822),
        g = n(929),
        N = n(224),
        p = n.n(N),
        h = n(602);
      const S = () => {
          const e = (0, g.useQueryParams)(),
            [i, n] = (0, f.useState)(null),
            {
              data: a,
              loading: l
            } = (0, s.useQuery)(h.VideoData, {
              variables: {
                id: i
              }
            });
          if ((0, f.useEffect)((() => {
              n(Number(e.get("id")))
            }), [e.get("id")]), l) return null;
          const {
            rich: d,
            television: r,
            video: c
          } = a;
          return (0, t.jsxs)("div", {
            className: "c9052727a8c85a5dee2f",
            children: [(0, t.jsx)(p(), {
              id: i,
              autoplay: !0
            }), (0, t.jsx)("h3", {
              children: c.title
            }), (0, t.jsx)(o, {
              title: "Television",
              vids: r.results,
              current: i
            }), (0, t.jsx)(o, {
              title: "Coming Soon",
              vids: d.results,
              current: i
            })]
          })
        },
        b = () => {
          const e = [{
            path: "/",
            element: (0, t.jsx)(k, {}),
            exact: !0
          }, {
            path: "/play",
            element: (0, t.jsx)(S, {})
          }];
          return (0, d.useRoutes)(e)
        },
        y = () => (0, t.jsx)("div", {
          className: "a6a9b44e661a80e61306",
          children: (0, t.jsxs)("div", {
            className: "e0c63f1c13c0922fcf66",
            children: [(0, t.jsx)(l, {}), (0, t.jsx)("div", {
              className: "e3e3144f8074bf13ff68",
              children: (0, t.jsx)(b, {})
            })]
          })
        })
    },
    652: (e, i, n) => {
      "use strict";
      var a = n(822),
        t = Symbol.for("react.element"),
        l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function r(e, i, n) {
        var a, r = {},
          o = null,
          c = null;
        for (a in void 0 !== n && (o = "" + n), void 0 !== i.key && (o = "" + i.key), void 0 !== i.ref && (c = i.ref), i) l.call(i, a) && !s.hasOwnProperty(a) && (r[a] = i[a]);
        if (e && e.defaultProps)
          for (a in i = e.defaultProps) void 0 === r[a] && (r[a] = i[a]);
        return {
          $$typeof: t,
          type: e,
          key: o,
          ref: c,
          props: r,
          _owner: d.current
        }
      }
      i.jsx = r, i.jsxs = r
    },
    322: (e, i, n) => {
      "use strict";
      e.exports = n(652)
    },
    492: (e, i, n) => {
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
                value: "v"
              },
              name: {
                kind: "Name",
                value: "game"
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
                  value: "titleSlug"
                },
                value: {
                  kind: "StringValue",
                  value: "V",
                  block: !1
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
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
                    value: "fob_640"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "url_official"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "purchases"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "href"
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
                value: "games"
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
                  value: "family"
                },
                value: {
                  kind: "StringValue",
                  value: "grand-theft-auto",
                  block: !1
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
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "url_official"
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
                value: "television"
              },
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "10"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "groupTypes"
                },
                value: {
                  kind: "ListValue",
                  values: [{
                    kind: "StringValue",
                    value: "gtatv-tv",
                    block: !1
                  }]
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "rich"
              },
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "10"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "groupTypes"
                },
                value: {
                  kind: "ListValue",
                  values: [{
                    kind: "StringValue",
                    value: "gtatv-rich",
                    block: !1
                  }]
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 734
        }
      };
      a.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery HomeData($locale: String!, $cache: Boolean = true) {\n    v: game(locale: $locale, titleSlug: "V") {\n        description\n        fob_640\n        url_official\n        purchases {\n            href\n        }\n    }\n    games(locale: $locale, family: "grand-theft-auto") {\n        results {\n            fob_640\n            title_slug\n            url_official\n        }\n    }\n    television: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-tv"]) {\n        results {\n            ...videoFields\n        }\n    }\n    rich: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-rich"]) {\n        results {\n            ...videoFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function l(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && i.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, i)
        }))
      }
      a.definitions = a.definitions.concat(n(921).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var i = e.name.value;
        return !t[i] && (t[i] = !0, !0)
      })));
      var d = {};

      function s(e, i) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == i) return a
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          l(e, i), d[e.name.value] = i
        }
      })), e.exports = a, e.exports.HomeData = function(e, i) {
        var n = {
          kind: e.kind,
          definitions: [s(e, i)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var a = d[i] || new Set,
          t = new Set,
          l = new Set;
        for (a.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var r = l;
          l = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return t.forEach((function(i) {
          var a = s(e, i);
          a && n.definitions.push(a)
        })), n
      }(a, "HomeData")
    },
    602: (e, i, n) => {
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
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "television"
              },
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "10"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "groupTypes"
                },
                value: {
                  kind: "ListValue",
                  values: [{
                    kind: "StringValue",
                    value: "gtatv-tv",
                    block: !1
                  }]
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "rich"
              },
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "10"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "groupTypes"
                },
                value: {
                  kind: "ListValue",
                  values: [{
                    kind: "StringValue",
                    value: "gtatv-rich",
                    block: !1
                  }]
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 488
        }
      };
      a.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery VideoData($locale: String!, $id: Int!, $cache: Boolean = true) {\n    video(locale: $locale, id: $id) {\n        title\n    }\n    television: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-tv"]) {\n        results {\n            ...videoFields\n        }\n    }\n    rich: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-rich"]) {\n        results {\n            ...videoFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function l(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && i.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, i)
        }))
      }
      a.definitions = a.definitions.concat(n(921).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var i = e.name.value;
        return !t[i] && (t[i] = !0, !0)
      })));
      var d = {};

      function s(e, i) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == i) return a
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          l(e, i), d[e.name.value] = i
        }
      })), e.exports = a, e.exports.VideoData = function(e, i) {
        var n = {
          kind: e.kind,
          definitions: [s(e, i)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var a = d[i] || new Set,
          t = new Set,
          l = new Set;
        for (a.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var r = l;
          l = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return t.forEach((function(i) {
          var a = s(e, i);
          a && n.definitions.push(a)
        })), n
      }(a, "VideoData")
    }
  }
]);