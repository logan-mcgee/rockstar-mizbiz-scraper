! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2b1e871e-8d34-47ba-9e5f-440c187d1d3f", e._sentryDebugIdIdentifier = "sentry-dbid-2b1e871e-8d34-47ba-9e5f-440c187d1d3f")
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
  [825, 4216, 9435], {
    69435: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        Jsx0: () => s,
        Jsx1: () => V,
        Jsx2: () => L
      });
      var i = n(31716);
      var t = n(46632);
      const s = e => {
        let {
          article: a,
          children: n
        } = e;
        const s = a.primary_tags[a.primary_tags.length > 1 && 722 === a.primary_tags[0].id ? 1 : 0];
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlefde6afcfe220cf25157dc91bf1b2d18e",
          children: [(0, t.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlebca2269fc10a1f1bd0a9e45876f0c9cf",
            children: [(0, t.jsxs)("h1", {
              children: [a.title, a.subtitle ? (0, t.jsx)("span", {
                children: a.subtitle
              }) : ""]
            }), (0, t.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec37d0dc8985df7232f651846152c95e2",
              children: [a.primary_tags.length ? (0, t.jsx)(i.A, {
                title: s.name,
                href: `/newswire?tag_id=${s.id}`
              }) : "", (0, t.jsx)("time", {
                dateTime: a.created,
                children: a.created_formatted
              })]
            }), a.posts_hero && "iframe" === a.posts_hero.type ? (0, t.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlea802e7b8d32570889cd1dfceaae9f128",
              children: (0, t.jsx)("iframe", {
                src: a.posts_hero.hero
              })
            }) : "", (0, t.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlefec56da42544417b3e8932627cfb9ab8",
              dangerouslySetInnerHTML: {
                __html: a.content
              }
            })]
          }), n]
        })
      };
      var d = n(71403),
        l = n(85865),
        r = n.n(l),
        o = n(42756),
        c = n(34983),
        m = n(21450),
        u = n(8999),
        k = n(60285),
        v = n(22778),
        f = n(39613),
        g = n(41074),
        p = n(28606),
        h = n(87839),
        b = n(2024),
        w = n(95625),
        N = n(61841),
        _ = n(43108),
        x = n(75930),
        y = n(17375),
        S = n(37297),
        j = n(63303),
        F = n(63672),
        A = n(5217),
        T = n.n(A),
        I = n(64064),
        D = n.n(I),
        P = n(26750);
      const V = (0, o.withTranslations)((0, o.withLocale)((e => {
        let {
          article: a,
          children: n,
          locale: s,
          t: l
        } = e;
        const o = {
            A: e => (0, t.jsx)(k.A, {
              ...e
            }),
            AnchorLink: e => (0, t.jsx)(P.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, t.jsx)(i.A, {
              ...e
            }),
            AudioPlayer: e => (0, t.jsx)(c.A, {
              ...e
            }),
            Button: e => (0, t.jsx)(v.A, {
              ...e
            }),
            Carousel: e => (0, t.jsx)(m.A, {
              ...e
            }),
            Cta: e => (0, t.jsx)(f.A, {
              ...e
            }),
            Discounts: e => (0, t.jsx)(P.Discounts, {
              ...e
            }),
            Donate: e => (0, t.jsx)(P.Donate, {
              ...e
            }),
            FadeInContent: e => (0, t.jsx)(g.A, {
              ...e
            }),
            FontClip: e => (0, t.jsx)(P.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, t.jsx)(P.GamingRewards, {
              ...e
            }),
            Gif: e => (0, t.jsx)(D(), {
              ...e
            }),
            Grid: e => (0, t.jsx)(p.A, {
              ...e
            }),
            GroupOfItems: e => (0, t.jsx)(T(), {
              ...e
            }),
            HeroImage: e => (0, t.jsx)(P.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, t.jsx)(h.A, {
              ...e
            }),
            ImageWithBadge: e => (0, t.jsx)(u.A, {
              ...e
            }),
            MultiSourceImage: e => (0, t.jsx)(b.A, {
              ...e
            }),
            NewswireFull: e => (0, t.jsx)(P.NewswireFull, {
              ...e
            }),
            Title: e => (0, t.jsx)(P.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, t.jsx)(P.PctBar, {
              ...e
            }),
            Podium: e => (0, t.jsx)(P.Podium, {
              ...e
            }),
            ResponsiveGridBox: e => (0, t.jsx)(w.A, {
              ...e
            }),
            ResponsiveGridItem: e => (0, t.jsx)(N.A, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, t.jsx)(_.A, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, t.jsx)(x.A, {
              ...e
            }),
            ResponsiveSection: e => (0, t.jsx)(y.A, {
              ...e
            }),
            ResponsiveImg: e => (0, t.jsx)(S.A, {
              ...e
            }),
            Separator: e => (0, t.jsx)(j.A, {
              ...e
            }),
            Tag: e => (0, t.jsx)(i.A, {
              ...e
            }),
            UnorderedList: e => (0, t.jsx)(F.A, {
              ...e
            })
          },
          A = a.posts_jsx.variables_us_defaulted,
          [I] = (0, d.useState)((0, t.jsx)(r(), {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, a) => e[a],
              renderHtml: e => (0, t.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, I),
              article: a,
              locale: s,
              t: l,
              variables: A
            },
            components: o,
            jsx: a.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec24348b14cbdcfa0c1461aa99aa4c1f6",
          children: [I, n]
        })
      })));
      var E = n(74401),
        C = n(74216),
        B = n(97187),
        G = n(96717);
      const L = e => {
        let {
          children: a,
          payload: n,
          variablesKeys: i
        } = e, s = !1;
        s = !0;
        const [d] = (0, G.getLocale)(), l = e => {
          let {
            children: a
          } = e;
          return (0, t.jsx)(B.NP, {
            locale: d?.iso,
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            children: a
          })
        };
        return (0, t.jsx)(l, {
          children: (0, t.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled024f9dc1e6bc46f9b3576bcf12e1eb9",
            children: [(0, t.jsx)(E.TinaParser, {
              tina: {
                payload: n,
                variables: {
                  keys: i
                }
              },
              components: C.componentsForTinaParser
            }), a]
          })
        })
      }
    },
    74216: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        componentsForTinaParser: () => f
      });
      var i = n(76612),
        t = n(64064),
        s = n.n(t),
        d = n(5217),
        l = n.n(d),
        r = n(26527),
        o = n.n(r),
        c = n(31879),
        m = n.n(c),
        u = n(66713),
        k = n.n(u),
        v = n(42012);
      const f = {
        ...i,
        ...n(26750),
        ClrCard: v.y3,
        ClrCollapsedCard: v.h7,
        Gif: s(),
        GroupOfItems: l(),
        RockstarVideoPlayer: m(),
        SwiperCarousel: o(),
        UGCJobSpotlight: k()
      }
    },
    80825: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        default: () => m
      });
      var i = n(71403),
        t = n(58407),
        s = n(95073),
        d = n(42158),
        l = n(69435),
        r = n(27523),
        o = n(46632);
      const c = e => {
          let {
            article: a,
            relatedBlock: n
          } = e;
          switch (a.jsx) {
            case 0:
              return (0, o.jsx)(l.Jsx0, {
                article: a,
                children: n
              });
            case 1:
              return (0, o.jsx)(l.Jsx1, {
                article: a,
                children: n
              });
            default:
              return (0, o.jsx)(l.Jsx2, {
                payload: a.tina.payload,
                variablesKeys: a.tina.variables.keys,
                children: n
              })
          }
        },
        m = e => {
          let {
            idHash: a
          } = e;
          const {
            data: n,
            loading: l
          } = (0, t.useQuery)(r.NewswirePost, {
            variables: {
              id_hash: a
            },
            setTitleDataPath: "post.title",
            autoSetLoading: !0
          }), m = n?.post ?? null, u = n?.related?.results ?? null;
          if ((0, i.useEffect)((() => {
              m && (window?.instgrm?.Embeds?.process?.(), window?.twttr?.widgets?.load?.())
            }), [m]), !m || l) return null;
          const k = u && m.show_related ? (0, o.jsx)(s.A, {
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
    27523: (e, a, n) => {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      i.definitions = i.definitions.concat(n(90588).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var a = e.name.value;
        return !t[a] && (t[a] = !0, !0)
      })));
      var d = {};

      function l(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), d[e.name.value] = a
        }
      })), e.exports = i, e.exports.NewswirePost = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [l(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = d[a] || new Set,
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = l(e, a);
          i && n.definitions.push(i)
        })), n
      }(i, "NewswirePost")
    }
  }
]);