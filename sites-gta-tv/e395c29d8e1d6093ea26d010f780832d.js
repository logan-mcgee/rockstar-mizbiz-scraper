! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3c9590dd-1f52-4fc1-b974-1ce36ff2369d", e._sentryDebugIdIdentifier = "sentry-dbid-3c9590dd-1f52-4fc1-b974-1ce36ff2369d")
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
  [240, 860], {
    9576: (e, a, i) => {
      "use strict";
      var n = i(1664),
        t = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        r = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function o(e, a, i) {
        var n, l = {},
          o = null,
          c = null;
        for (n in void 0 !== i && (o = "" + i), void 0 !== a.key && (o = "" + a.key), void 0 !== a.ref && (c = a.ref), a) s.call(a, n) && !r.hasOwnProperty(n) && (l[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === l[n] && (l[n] = a[n]);
        return {
          $$typeof: t,
          type: e,
          key: o,
          ref: c,
          props: l,
          _owner: d.current
        }
      }
      a.Fragment = l, a.jsx = o, a.jsxs = o
    },
    5240: (e, a, i) => {
      "use strict";
      e.exports = i(9576)
    },
    3240: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => y
      });
      var n = i(9860);
      var t = i(5240);
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
      var s = i(8584),
        d = i(3052);
      const r = {
          items: "rockstargames-sites-gta-tva7c9a7d77f9c6c0f4f903491e817c50a",
          list: "rockstargames-sites-gta-tvd1c3671d748a7bfaa6fe1d5896fbd28a",
          item: "rockstargames-sites-gta-tvd305555ee8eebb479324499004e759d1"
        },
        o = e => {
          let {
            current: a,
            title: i,
            vids: l
          } = e;
          return (0, t.jsxs)("div", {
            className: r.list,
            children: [(0, t.jsx)("h2", {
              children: i
            }), (0, t.jsx)("div", {
              className: r.items,
              children: l.map((e => (0, t.jsxs)(n.A, {
                className: [r.item, e.id === a ? r.playing : ""].join(" "),
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
      var c = i(60);
      const u = e => {
          let {
            v: a
          } = e;
          return (0, t.jsxs)("div", {
            className: "rockstargames-sites-gta-tvc7e8e6119cff55d2d4bed806f96b27a7",
            children: [(0, t.jsx)("div", {
              style: {
                background: `url(${a.fob_640}) no-repeat center/contain`,
                "--aspect-ratio": 64 / 79
              }
            }), (0, t.jsxs)("div", {
              className: "rockstargames-sites-gta-tvaa04587a2a8655cb4d51d68c656edc02",
              children: [(0, t.jsx)(n.A, {
                to: a.url_official,
                target: "_blank",
                children: "Visit Official Site"
              }), a.purchases.length ? (0, t.jsx)(n.A, {
                to: a.purchases[0].href,
                target: "_blank",
                children: "Buy Now"
              }) : "", (0, t.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: a.description
                }
              })]
            })]
          })
        },
        m = e => {
          let {
            games: a
          } = e;
          return (0, t.jsx)("div", {
            className: "rockstargames-sites-gta-tvbe98ffe3a55422e301616a867415d286",
            children: a.map((e => (0, t.jsx)(n.A, {
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
            games: a,
            v: i
          } = e;
          return (0, t.jsxs)("div", {
            className: "rockstargames-sites-gta-tva8e34f6c8e113528a539bdc9a364521a",
            children: [(0, t.jsx)("h2", {
              children: "The Grand Theft Auto Series"
            }), (0, t.jsx)(u, {
              v: i
            }), (0, t.jsx)(m, {
              games: a.filter((e => "V" !== e.title_slug))
            })]
          })
        },
        f = () => {
          const {
            data: e
          } = (0, d.useQuery)(c.HomeData);
          if (!e) return null;
          const {
            games: a,
            rich: i,
            television: l,
            v: s
          } = e;
          return (0, t.jsxs)("div", {
            className: "rockstargames-sites-gta-tvdcf817f11d19ae0ef32bf4b753d292a2",
            children: [(0, t.jsx)(n.A, {
              className: "rockstargames-sites-gta-tvfd61339363816e4b0f9a193a081ff163",
              to: `/play?id=${l.results[0].id}`
            }), (0, t.jsx)(o, {
              title: "Television",
              vids: l.results
            }), (0, t.jsx)(o, {
              title: "Coming Soon",
              vids: i.results
            }), (0, t.jsx)(v, {
              games: a.results,
              v: s
            })]
          })
        };
      var k = i(1664),
        g = i(5792),
        b = i(4644),
        p = i.n(b),
        N = i(9200);
      const h = () => {
          const e = (0, g.useQueryParams)(),
            [a, i] = (0, k.useState)(null),
            {
              data: n,
              loading: l
            } = (0, d.useQuery)(N.VideoData, {
              variables: {
                id: a
              }
            });
          if ((0, k.useEffect)((() => {
              i(Number(e.get("id")))
            }), [e.get("id")]), l) return null;
          const {
            rich: s,
            television: r,
            video: c
          } = n;
          return (0, t.jsxs)("div", {
            className: "rockstargames-sites-gta-tvfa6015ba4b01119a15f6a483b23de950",
            children: [(0, t.jsx)(p(), {
              id: a,
              autoplay: !0
            }), (0, t.jsx)("h3", {
              children: c.title
            }), (0, t.jsx)(o, {
              title: "Television",
              vids: r.results,
              current: a
            }), (0, t.jsx)(o, {
              title: "Coming Soon",
              vids: s.results,
              current: a
            })]
          })
        },
        S = () => {
          const e = [{
            path: "/",
            element: (0, t.jsx)(f, {}),
            exact: !0
          }, {
            path: "/play",
            element: (0, t.jsx)(h, {})
          }];
          return (0, s.useRoutes)(e)
        },
        y = () => (0, t.jsx)("div", {
          className: "rockstargames-sites-gta-tvb6a0583ad82491ab6f460456bdcd71b2",
          children: (0, t.jsxs)("div", {
            className: "rockstargames-sites-gta-tvf5df5c42f1b4ecb3eea339f0101d7bc9",
            children: [(0, t.jsx)(l, {}), (0, t.jsx)("div", {
              className: "rockstargames-sites-gta-tva089b814cf413051c57d2f057374d046",
              children: (0, t.jsx)(S, {})
            })]
          })
        })
    },
    60: (e, a, i) => {
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
      n.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery HomeData($locale: String!, $cache: Boolean = true) {\n    v: game(locale: $locale, titleSlug: "V") {\n        description\n        fob_640\n        url_official\n        purchases {\n            href\n        }\n    }\n    games(locale: $locale, family: "grand-theft-auto") {\n        results {\n            fob_640\n            title_slug\n            url_official\n        }\n    }\n    television: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-tv"]) {\n        results {\n            ...videoFields\n        }\n    }\n    rich: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-rich"]) {\n        results {\n            ...videoFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function l(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, a)
        }))
      }
      n.definitions = n.definitions.concat(i(7308).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var a = e.name.value;
        return !t[a] && (t[a] = !0, !0)
      })));
      var s = {};

      function d(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), s[e.name.value] = a
        }
      })), e.exports = n, e.exports.HomeData = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = s[a] || new Set,
          t = new Set,
          l = new Set;
        for (n.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var r = l;
          l = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (s[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = d(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "HomeData")
    },
    9200: (e, a, i) => {
      var n = {
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
      n.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery VideoData($locale: String!, $id: Int!, $cache: Boolean = true) {\n    video(locale: $locale, id: $id) {\n        title\n    }\n    television: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-tv"]) {\n        results {\n            ...videoFields\n        }\n    }\n    rich: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-rich"]) {\n        results {\n            ...videoFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function l(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, a)
        }))
      }
      n.definitions = n.definitions.concat(i(7308).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var a = e.name.value;
        return !t[a] && (t[a] = !0, !0)
      })));
      var s = {};

      function d(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), s[e.name.value] = a
        }
      })), e.exports = n, e.exports.VideoData = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = s[a] || new Set,
          t = new Set,
          l = new Set;
        for (n.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var r = l;
          l = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (s[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = d(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "VideoData")
    }
  }
]);