! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      i = (new Error).stack;
    i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "6407e5c7-ed68-4209-9f9c-7b4060bea617", e._sentryDebugIdIdentifier = "sentry-dbid-6407e5c7-ed68-4209-9f9c-7b4060bea617")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [240], {
    3240: (e, i, a) => {
      "use strict";
      a.r(i), a.d(i, {
        default: () => x
      });
      var n = a(9860);
      var t = a(95240);
      const l = () => (0, t.jsx)("header", {
        className: "rockstargames-sites-gta-tve4ffae5513cdc54b869d612536512d93",
        children: (0, t.jsxs)("div", {
          className: "rockstargames-sites-gta-tvce661df9d9541ff15c96e75ad5dc0eba",
          children: [(0, t.jsx)(n.A, {
            className: "rockstargames-sites-gta-tvc86bed427f2c003a04fcb8f197654d47",
            to: "/"
          }), (0, t.jsxs)("h1", {
            children: ["The future of", " ", (0, t.jsx)("strong", {
              children: "American TV"
            }), " ", (0, t.jsx)("em", {
              children: "is Here"
            })]
          }), (0, t.jsx)("div", {
            className: "rockstargames-sites-gta-tvc57011fd214f597e263973baff01b68c"
          })]
        })
      });
      var d = a(98584),
        s = a(24668),
        r = a(33052);
      const o = {
          items: "rockstargames-sites-gta-tva7c9a7d77f9c6c0f4f903491e817c50a",
          list: "rockstargames-sites-gta-tvd1c3671d748a7bfaa6fe1d5896fbd28a",
          item: "rockstargames-sites-gta-tvd305555ee8eebb479324499004e759d1"
        },
        c = e => {
          let {
            current: i,
            title: a,
            vids: l
          } = e;
          return (0, t.jsxs)("div", {
            className: o.list,
            children: [(0, t.jsx)("h2", {
              children: a
            }), (0, t.jsx)("div", {
              className: o.items,
              children: l.map((e => (0, t.jsxs)(n.A, {
                className: [o.item, e.id === i ? o.playing : ""].join(" "),
                to: `?id=${e.id}`,
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
      var u = a(50060);
      const m = HomeDataWithADifferentDatabaseConnection ?? u.HomeData,
        v = e => {
          let {
            game: i
          } = e;
          return (0, t.jsxs)("div", {
            className: "rockstargames-sites-gta-tvc7e8e6119cff55d2d4bed806f96b27a7",
            children: [(0, t.jsx)(s.M, {
              to: i.urlOfficial,
              game: i
            }), (0, t.jsxs)("div", {
              className: "rockstargames-sites-gta-tvaa04587a2a8655cb4d51d68c656edc02",
              children: [(0, t.jsx)(n.A, {
                to: i.urlOfficial,
                target: "_blank",
                children: "Visit Official Site"
              }), i?.purchases?.length ? (0, t.jsx)(n.A, {
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
        k = e => {
          let {
            games: i
          } = e;
          return (0, t.jsx)("div", {
            className: "rockstargames-sites-gta-tvbe98ffe3a55422e301616a867415d286",
            children: i.map((e => (0, t.jsx)(s.M, {
              to: e.urlOfficial,
              game: e
            }, e.urlOfficial)))
          })
        },
        f = e => {
          let {
            games: i,
            featured: a
          } = e;
          return (0, t.jsxs)("div", {
            className: "rockstargames-sites-gta-tva8e34f6c8e113528a539bdc9a364521a",
            children: [(0, t.jsx)("h2", {
              children: "The Grand Theft Auto Series"
            }), (0, t.jsx)(v, {
              game: a
            }), (0, t.jsx)(k, {
              games: i.filter((e => "VI" !== e.titleSlug))
            })]
          })
        },
        g = () => {
          const {
            data: e
          } = (0, r.useQuery)(m);
          if (!e) return null;
          const {
            games: i,
            rich: a,
            television: l,
            featured: d
          } = e;
          return (0, t.jsxs)("div", {
            className: "rockstargames-sites-gta-tvdcf817f11d19ae0ef32bf4b753d292a2",
            children: [(0, t.jsx)(n.A, {
              className: "rockstargames-sites-gta-tvfd61339363816e4b0f9a193a081ff163",
              to: `/play?id=${l.results[0].id}`
            }), (0, t.jsx)(c, {
              title: "Television",
              vids: l.results
            }), (0, t.jsx)(c, {
              title: "Coming Soon",
              vids: a.results
            }), (0, t.jsx)(f, {
              games: i.results,
              featured: d
            })]
          })
        };
      var N = a(51664),
        b = a(45792),
        p = a(84644),
        S = a.n(p),
        h = a(5164);
      const y = () => {
          const e = (0, b.useQueryParams)(),
            [i, a] = (0, N.useState)(null),
            {
              data: n,
              loading: l
            } = (0, r.useQuery)(h.VideoData, {
              variables: {
                id: i
              }
            });
          if ((0, N.useEffect)((() => {
              a(e.get("id"))
            }), [e.get("id")]), l) return null;
          const {
            rich: d,
            television: s,
            video: o
          } = n;
          return (0, t.jsxs)("div", {
            className: "rockstargames-sites-gta-tvfa6015ba4b01119a15f6a483b23de950",
            children: [(0, t.jsx)(S(), {
              id: i,
              autoplay: !0
            }), (0, t.jsx)("h3", {
              children: o.title
            }), (0, t.jsx)(c, {
              title: "Television",
              vids: s.results,
              current: i
            }), (0, t.jsx)(c, {
              title: "Coming Soon",
              vids: d.results,
              current: i
            })]
          })
        },
        V = () => {
          const e = [{
            path: "/",
            element: (0, t.jsx)(g, {}),
            exact: !0
          }, {
            path: "/play",
            element: (0, t.jsx)(y, {})
          }];
          return (0, d.useRoutes)(e)
        },
        x = () => (0, t.jsx)("div", {
          className: "rockstargames-sites-gta-tvb6a0583ad82491ab6f460456bdcd71b2",
          children: (0, t.jsxs)("div", {
            className: "rockstargames-sites-gta-tvf5df5c42f1b4ecb3eea339f0101d7bc9",
            children: [(0, t.jsx)(l, {}), (0, t.jsx)("div", {
              className: "rockstargames-sites-gta-tva089b814cf413051c57d2f057374d046",
              children: (0, t.jsx)(V, {})
            })]
          })
        })
    },
    50060: (e, i, a) => {
      var n = {
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
          end: 699
        }
      };
      n.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video2-fields.graphql"\n\nquery HomeData($locale: String!, $cache: Boolean = true) {\n    v: game(locale: $locale, titleSlug: "V") {\n        description\n        url_official\n        purchases {\n            href\n        }\n    }\n    games(locale: $locale, family: "grand-theft-auto") {\n        results {\n            title_slug\n            url_official\n        }\n    }\n    television: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-tv"]) {\n        results {\n            ...videoFields\n        }\n    }\n    rich: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-rich"]) {\n        results {\n            ...videoFields\n        }\n    }\n}\n',
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
          var a = e.type;
          "NamedType" === a.kind && i.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, i)
        }))
      }
      n.definitions = n.definitions.concat(a(53264).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var i = e.name.value;
        return !t[i] && (t[i] = !0, !0)
      })));
      var d = {};

      function s(e, i) {
        for (var a = 0; a < e.definitions.length; a++) {
          var n = e.definitions[a];
          if (n.name && n.name.value == i) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          l(e, i), d[e.name.value] = i
        }
      })), e.exports = n, e.exports.HomeData = function(e, i) {
        var a = {
          kind: e.kind,
          definitions: [s(e, i)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var n = d[i] || new Set,
          t = new Set,
          l = new Set;
        for (n.forEach((function(e) {
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
          var n = s(e, i);
          n && a.definitions.push(n)
        })), a
      }(n, "HomeData")
    },
    5164: e => {
      var i = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "videoFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Videos_Model_Entity_Video_o"
            }
          },
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
                    value: "titleSlug"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
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
          end: 578
        }
      };

      function a(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && i.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, i)
        }))
      }
      i.loc.source = {
        body: 'fragment videoFields on RockstarGames_Videos_Model_Entity_Video_o {\n    id\n    title\n    screencap\n    game {\n        id\n        title\n        titleSlug\n    }\n}\nquery VideoData($locale: String!, $id: String!, $cache: Boolean = true) {\n    video: video(locale: $locale, id: $id) {\n        title\n    }\n    television: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-tv"]) {\n        results {\n            ...videoFields\n        }\n    }\n    rich: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-rich"]) {\n        results {\n            ...videoFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function t(e, i) {
        for (var a = 0; a < e.definitions.length; a++) {
          var n = e.definitions[a];
          if (n.name && n.name.value == i) return n
        }
      }

      function l(e, i) {
        var a = {
          kind: e.kind,
          definitions: [t(e, i)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var l = n[i] || new Set,
          d = new Set,
          s = new Set;
        for (l.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            d.has(e) || (d.add(e), (n[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return d.forEach((function(i) {
          var n = t(e, i);
          n && a.definitions.push(n)
        })), a
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          a(e, i), n[e.name.value] = i
        }
      })), e.exports = i, e.exports.videoFields = l(i, "videoFields"), e.exports.VideoData = l(i, "VideoData")
    }
  }
]);