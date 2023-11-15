(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [705, 344, 383], {
    3383: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        Jsx0: () => s,
        Jsx1: () => g,
        Jsx2: () => h
      });
      var a = i(8976);
      var t = i(3705);
      const s = e => {
        let {
          article: n,
          children: i
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
              children: [n.primary_tags.length ? (0, t.jsx)(a.NewswireTag, {
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
          }), i]
        })
      };
      var r = i(927),
        l = i(9394),
        d = i.n(l),
        o = i(9929),
        c = i(420),
        m = i.n(c),
        u = i(8356),
        k = i.n(u),
        v = i(4715);
      const g = (0, o.withTranslations)((0, o.withLocale)((e => {
        let {
          article: n,
          children: i,
          locale: s,
          t: l
        } = e;
        const o = {
            A: e => (0, t.jsx)(a.A, {
              ...e
            }),
            AnchorLink: e => (0, t.jsx)(v.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, t.jsx)(a.NewswireTag, {
              ...e
            }),
            AudioPlayer: e => (0, t.jsx)(a.AudioPlayer, {
              ...e
            }),
            Button: e => (0, t.jsx)(a.Button, {
              ...e
            }),
            Carousel: e => (0, t.jsx)(a.Carousel, {
              ...e
            }),
            Cta: e => (0, t.jsx)(a.Cta, {
              ...e
            }),
            Discounts: e => (0, t.jsx)(v.Discounts, {
              ...e
            }),
            Donate: e => (0, t.jsx)(v.Donate, {
              ...e
            }),
            FadeInContent: e => (0, t.jsx)(a.FadeInContent, {
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
            Grid: e => (0, t.jsx)(a.Grid, {
              ...e
            }),
            GroupOfItems: e => (0, t.jsx)(m(), {
              ...e
            }),
            HeroImage: e => (0, t.jsx)(v.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, t.jsx)(a.HTMLElement, {
              ...e
            }),
            ImageWithBadge: e => (0, t.jsx)(a.ImageWithBadge, {
              ...e
            }),
            MultiSourceImage: e => (0, t.jsx)(a.MultiSourceImage, {
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
            ResponsiveGridBox: e => (0, t.jsx)(a.ResponsiveGridBox, {
              ...e
            }),
            ResponsiveGridItem: e => (0, t.jsx)(a.ResponsiveGridItem, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, t.jsx)(a.ResponsiveFlexBox, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, t.jsx)(a.ResponsiveFlexItem, {
              ...e
            }),
            ResponsiveSection: e => (0, t.jsx)(a.ResponsiveSection, {
              ...e
            }),
            ResponsiveImg: e => (0, t.jsx)(a.ResponsiveImg, {
              ...e
            }),
            Separator: e => (0, t.jsx)(a.Separator, {
              ...e
            }),
            Tag: e => (0, t.jsx)(Tag, {
              ...e
            }),
            UnorderedList: e => (0, t.jsx)(a.UnorderedList, {
              ...e
            })
          },
          c = n.posts_jsx.variables_us_defaulted,
          [u] = (0, r.useState)((0, t.jsx)(d(), {
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
              t: l,
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
          children: [u, i]
        })
      })));
      var p = i(9542),
        f = i(2344);
      const h = e => {
        let {
          children: n,
          payload: i,
          variablesKeys: a
        } = e;
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articled024f9dc1e6bc46f9b3576bcf12e1eb9",
          children: [(0, t.jsx)(p.TinaParser, {
            tina: {
              payload: i,
              variables: {
                keys: a
              }
            },
            components: f.componentsForTinaParser
          }), n]
        })
      }
    },
    2344: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        componentsForTinaParser: () => g
      });
      var a = i(8976),
        t = i(8356),
        s = i.n(t),
        r = i(420),
        l = i.n(r),
        d = i(3750),
        o = i.n(d),
        c = i(4224),
        m = i.n(c),
        u = i(5551),
        k = i.n(u),
        v = i(6947);
      const g = {
        ...a,
        ...i(4715),
        ...{
          ClrCard: v.ClrCard,
          ClrCollapsedcard: v.ClrCollapsedcard,
          Gif: s(),
          GroupOfItems: l(),
          SwiperCarousel: o(),
          RockstarVideoPlayer: m(),
          UGCJobSpotlight: k()
        }
      }
    },
    705: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        default: () => m
      });
      var a = i(927),
        t = i(4859),
        s = i(8976),
        r = i(1968),
        l = i(3383),
        d = i(256),
        o = i(3705);
      const c = e => {
          let {
            article: n,
            relatedBlock: i
          } = e;
          switch (n.jsx) {
            case 0:
              return (0, o.jsx)(l.Jsx0, {
                article: n,
                children: i
              });
            case 1:
              return (0, o.jsx)(l.Jsx1, {
                article: n,
                children: i
              });
            default:
              return (0, o.jsx)(l.Jsx2, {
                payload: n.tina.payload,
                variablesKeys: n.tina.variables.keys,
                children: i
              })
          }
        },
        m = e => {
          let {
            idHash: n
          } = e;
          const {
            data: i,
            loading: l
          } = (0, t.useQuery)(d.NewswirePost, {
            variables: {
              id_hash: n
            },
            setTitleDataPath: "post.title",
            autoSetLoading: !0
          }), m = i?.post ?? null, u = i?.related?.results ?? null;
          if ((0, a.useEffect)((() => {
              m && (window?.instgrm?.Embeds?.process?.(), window?.twttr?.widgets?.load?.())
            }), [m]), !m || l) return null;
          const k = u && m.show_related ? (0, o.jsx)(s.NewswireRelated, {
            posts: u
          }) : "";
          return (0, o.jsx)(r.newswirePost.Provider, {
            article: m,
            children: (0, o.jsx)(c, {
              article: m,
              relatedBlock: k
            })
          })
        }
    },
    256: (e, n, i) => {
      var a = {
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
      a.loc.source = {
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
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, n)
        }))
      }
      a.definitions = a.definitions.concat(i(6077).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var n = e.name.value;
        return !t[n] && (t[n] = !0, !0)
      })));
      var r = {};

      function l(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          s(e, n), r[e.name.value] = n
        }
      })), e.exports = a, e.exports.NewswirePost = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [l(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var a = r[n] || new Set,
          t = new Set,
          s = new Set;
        for (a.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(e) {
            t.has(e) || (t.add(e), (r[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(n) {
          var a = l(e, n);
          a && i.definitions.push(a)
        })), i
      }(a, "NewswirePost")
    }
  }
]);