! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b35e9644-06fe-4117-878d-5b2bb7a5d425", e._sentryDebugIdIdentifier = "sentry-dbid-b35e9644-06fe-4117-878d-5b2bb7a5d425")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [680, 216], {
    19216: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        Jsx0: () => s,
        Jsx1: () => g,
        Jsx2: () => w
      });
      var i = a(9860);
      var t = a(95240);
      const s = e => {
        let {
          article: n,
          children: a
        } = e;
        const s = n.primary_tags[n.primary_tags.length > 1 && 722 === n.primary_tags[0].id ? 1 : 0];
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlefde6afcfe220cf25157dc91bf1b2d18e",
          children: [(0, t.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlebca2269fc10a1f1bd0a9e45876f0c9cf",
            children: [(0, t.jsxs)("h1", {
              children: [n.title, n.subtitle ? (0, t.jsx)("span", {
                children: n.subtitle
              }) : ""]
            }), (0, t.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec37d0dc8985df7232f651846152c95e2",
              children: [n.primary_tags.length ? (0, t.jsx)(i.NewswireTag, {
                title: s.name,
                href: `/newswire?tag_id=${s.id}`
              }) : "", (0, t.jsx)("time", {
                dateTime: n.created,
                children: n.created_formatted
              })]
            }), n.posts_hero && "iframe" === n.posts_hero.type ? (0, t.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlea802e7b8d32570889cd1dfceaae9f128",
              children: (0, t.jsx)("iframe", {
                src: n.posts_hero.hero
              })
            }) : "", (0, t.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlefec56da42544417b3e8932627cfb9ab8",
              dangerouslySetInnerHTML: {
                __html: n.content
              }
            })]
          }), a]
        })
      };
      var d = a(51664),
        r = a(69460),
        l = a.n(r),
        o = a(45792),
        c = a(45364),
        m = a.n(c),
        u = a(88460),
        k = a.n(u),
        v = a(22052);
      const g = (0, o.withTranslations)((0, o.withLocale)((e => {
        let {
          article: n,
          children: a,
          locale: s,
          t: r
        } = e;
        const o = {
            A: e => (0, t.jsx)(i.A, {
              ...e
            }),
            AnchorLink: e => (0, t.jsx)(v.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, t.jsx)(i.NewswireTag, {
              ...e
            }),
            AudioPlayer: e => (0, t.jsx)(i.AudioPlayer, {
              ...e
            }),
            Button: e => (0, t.jsx)(i.Button, {
              ...e
            }),
            Carousel: e => (0, t.jsx)(i.Carousel, {
              ...e
            }),
            Cta: e => (0, t.jsx)(i.Cta, {
              ...e
            }),
            Discounts: e => (0, t.jsx)(v.Discounts, {
              ...e
            }),
            Donate: e => (0, t.jsx)(v.Donate, {
              ...e
            }),
            FadeInContent: e => (0, t.jsx)(i.FadeInContent, {
              ...e
            }),
            FontClip: e => (0, t.jsx)(v.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, t.jsx)(v.GamingRewards, {
              ...e
            }),
            Gif: e => (0, t.jsx)(k(), {
              ...e
            }),
            Grid: e => (0, t.jsx)(i.Grid, {
              ...e
            }),
            GroupOfItems: e => (0, t.jsx)(m(), {
              ...e
            }),
            HeroImage: e => (0, t.jsx)(v.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, t.jsx)(i.HTMLElement, {
              ...e
            }),
            ImageWithBadge: e => (0, t.jsx)(i.ImageWithBadge, {
              ...e
            }),
            MultiSourceImage: e => (0, t.jsx)(i.MultiSourceImage, {
              ...e
            }),
            NewswireFull: e => (0, t.jsx)(v.NewswireFull, {
              ...e
            }),
            Title: e => (0, t.jsx)(v.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, t.jsx)(v.PctBar, {
              ...e
            }),
            Podium: e => (0, t.jsx)(v.Podium, {
              ...e
            }),
            ResponsiveGridBox: e => (0, t.jsx)(i.ResponsiveGridBox, {
              ...e
            }),
            ResponsiveGridItem: e => (0, t.jsx)(i.ResponsiveGridItem, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, t.jsx)(i.ResponsiveFlexBox, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, t.jsx)(i.ResponsiveFlexItem, {
              ...e
            }),
            ResponsiveSection: e => (0, t.jsx)(i.ResponsiveSection, {
              ...e
            }),
            ResponsiveImg: e => (0, t.jsx)(i.ResponsiveImg, {
              ...e
            }),
            Separator: e => (0, t.jsx)(i.Separator, {
              ...e
            }),
            Tag: e => (0, t.jsx)(i.NewswireTag, {
              ...e
            }),
            UnorderedList: e => (0, t.jsx)(i.UnorderedList, {
              ...e
            })
          },
          c = n.posts_jsx.variables_us_defaulted,
          [u] = (0, d.useState)((0, t.jsx)(l(), {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, n) => e[n],
              renderHtml: e => (0, t.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, u),
              article: n,
              locale: s,
              t: r,
              variables: c
            },
            components: o,
            jsx: n.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec24348b14cbdcfa0c1461aa99aa4c1f6",
          children: [u, a]
        })
      })));
      var f = a(1740),
        p = a(80100);
      const w = e => {
        let {
          children: n,
          payload: a,
          variablesKeys: i
        } = e;
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articled024f9dc1e6bc46f9b3576bcf12e1eb9",
          children: [(0, t.jsx)(f.TinaParser, {
            tina: {
              payload: a,
              variables: {
                keys: i
              }
            },
            components: p.componentsForTinaParser
          }), n]
        })
      }
    },
    90680: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        default: () => m
      });
      var i = a(51664),
        t = a(33052),
        s = a(9860),
        d = a(77715),
        r = a(19216),
        l = a(46832),
        o = a(95240);
      const c = e => {
          let {
            article: n,
            relatedBlock: a
          } = e;
          switch (n.jsx) {
            case 0:
              return (0, o.jsx)(r.Jsx0, {
                article: n,
                children: a
              });
            case 1:
              return (0, o.jsx)(r.Jsx1, {
                article: n,
                children: a
              });
            default:
              return (0, o.jsx)(r.Jsx2, {
                payload: n.tina.payload,
                variablesKeys: n.tina.variables.keys,
                children: a
              })
          }
        },
        m = e => {
          let {
            idHash: n
          } = e;
          const {
            data: a,
            loading: r
          } = (0, t.useQuery)(l.NewswirePost, {
            variables: {
              id_hash: n
            },
            setTitleDataPath: "post.title",
            autoSetLoading: !0
          }), m = a?.post ?? null, u = a?.related?.results ?? null;
          if ((0, i.useEffect)((() => {
              m && (window?.instgrm?.Embeds?.process?.(), window?.twttr?.widgets?.load?.())
            }), [m]), !m || r) return null;
          const k = u && m.show_related ? (0, o.jsx)(s.NewswireRelated, {
            posts: u
          }) : "";
          return (0, o.jsx)(d.newswirePost.Provider, {
            article: m,
            children: (0, o.jsx)(c, {
              article: m,
              relatedBlock: k
            })
          })
        }
    },
    46832: (e, n, a) => {
      var i = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswirePost"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id_hash"
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
                value: "post"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id_hash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id_hash"
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
                  name: {
                    kind: "Name",
                    value: "id_hash"
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
                    value: "subtitle"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "content"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "show_related"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "created"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "created_formatted"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "posts_hero"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "hero"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "primary_tags"
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
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "secondary_tags"
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
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "jsx"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "posts_jsx"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "markup"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables_us_defaulted"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
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
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
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
                            value: "translation_status"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "status"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "__typename"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "skip"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "BooleanValue",
                        value: !0
                      }
                    }]
                  }]
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "root_url_translations"
              },
              name: {
                kind: "Name",
                value: "metaUrlTree"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "StringValue",
                  value: "/",
                  block: !1
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina_tree"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "related"
              },
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "4"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "relatedToId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id_hash"
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
                        value: "postFields"
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
          end: 1524
        }
      };
      i.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n\nquery NewswirePost(\n    $id_hash: String!\n    $locale: String!\n    $cache: Boolean = true\n) {\n    post(id_hash: $id_hash, locale: $locale) {\n        id: id_hash\n        title\n        subtitle\n        content\n        show_related\n        created\n        created_formatted\n        posts_hero {\n            type\n            hero\n        }\n        primary_tags {\n            id\n            name\n        }\n        secondary_tags {\n            id\n            name\n        }\n        jsx\n        posts_jsx {\n            markup\n            variables_us_defaulted\n        }\n        tina {\n            id\n            payload\n            variables {\n                translation_status\n                keys\n            }\n            status\n        }\n        ### This makes Apollo skip caching so you can go back/forth between series and collections\n        ### without worrying about the wrong thing showing up.\n        ###\n        ### https://kamranicus.com/posts/2018-03-06-graphql-apollo-object-caching\n        __typename @skip(if: true)\n    }\n    root_url_translations: metaUrlTree(\n        domain: "www"\n        url: "/"\n        locale: $locale\n    ) {\n        tina_tree {\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n    related: posts(limit: 4, relatedToId: $id_hash, locale: $locale) {\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function s(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && n.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, n)
        }))
      }
      i.definitions = i.definitions.concat(a(73784).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var n = e.name.value;
        return !t[n] && (t[n] = !0, !0)
      })));
      var d = {};

      function r(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          s(e, n), d[e.name.value] = n
        }
      })), e.exports = i, e.exports.NewswirePost = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [r(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = d[n] || new Set,
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(n) {
          var i = r(e, n);
          i && a.definitions.push(i)
        })), a
      }(i, "NewswirePost")
    }
  }
]);