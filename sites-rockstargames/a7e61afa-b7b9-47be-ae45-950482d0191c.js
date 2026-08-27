try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a7e61afa-b7b9-47be-ae45-950482d0191c", e._sentryDebugIdIdentifier = "sentry-dbid-a7e61afa-b7b9-47be-ae45-950482d0191c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5954], {
    97984(e) {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
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
                value: "url"
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
                value: "name_slug"
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
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "paging"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Cake_Graph_Type_Paging_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "pageCount"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "page"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "count"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "nextPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "prevPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "perPage"
              },
              arguments: [],
              directives: []
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswireList"
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
                value: "page"
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
                value: "limit"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "tagId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "tagIdHash"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
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
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }, {
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "tagId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "tagIdHash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagIdHash"
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
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
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
          end: 1014
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          i(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          i(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          i(e, a)
        })
      }
      a.loc.source = {
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $tagIdHash: String\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(\n        page: $page\n        tagId: $tagId\n        tagIdHash: $tagIdHash\n        locale: $locale\n        limit: $limit\n    ) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }

      function s(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[a] || new Set,
          d = new Set,
          r = new Set;
        for (s.forEach(function(e) {
            r.add(e)
          }); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach(function(e) {
            d.has(e) || (d.add(e), (n[e] || new Set).forEach(function(e) {
              r.add(e)
            }))
          })
        }
        return d.forEach(function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        }), i
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      }), e.exports = a, e.exports.postFields = s(a, "postFields"), e.exports.paging = s(a, "paging"), e.exports.NewswireList = s(a, "NewswireList")
    },
    76261(e, a, i) {
      "use strict";
      i.d(a, {
        A: () => r
      });
      var n = i(39793),
        t = i(81270),
        s = i(33337);
      const d = {
          button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
        },
        r = ({
          className: e = "",
          children: a,
          context: i = "",
          to: r,
          onClick: l,
          target: c = "_self",
          ...o
        }) => {
          const m = (0, t.default)(d.button, d[i], e);
          return r ? (0, n.jsx)(s.A, {
            ...o,
            to: r,
            className: m,
            onClick: l,
            target: c,
            children: a
          }) : (0, n.jsx)("button", {
            ...o,
            type: "button",
            className: m,
            onClick: l,
            children: a
          })
        }
    },
    24747(e, a, i) {
      "use strict";
      i.d(a, {
        A: () => k
      });
      var n = i(39793),
        t = i(93082),
        s = i(13331),
        d = i(82199),
        r = i(22808),
        l = i(36421),
        c = i(33337),
        o = i(60755);
      const m = {
          info: "rockstargames-sites-rockstargamesea1c51ae745531c2aeabbe3fcf603842",
          newswireBlock: "rockstargames-sites-rockstargamesb394b56c31488c36155ca82090c66e6f",
          newswireBlockNoSpecialOrder: "rockstargames-sites-rockstargamesc06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-sites-rockstargamesca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-sites-rockstargamesb3d4a8cfcc371ae39ce6220d009c5954",
          startAnimation: "rockstargames-sites-rockstargamesa56af3c95449fe8452485dfb6c89fc29",
          title: "rockstargames-sites-rockstargamesf1dfe59c3d981dbe132559620885ecea",
          top: "rockstargames-sites-rockstargameseee9c5d3b714a61ac265369800a6d4e0"
        },
        k = ({
          section: e = "",
          index: a,
          post: i,
          noSpecialOrder: k = !1,
          focused: u
        }) => {
          const {
            track: g
          } = (0, d.useGtmTrack)(), v = i.preview_images_parsed.newswire_block, f = (0, r.Ub)(l.fi.mobile), p = {
            default: 0 !== a || k ? v.square || v.d16x9 || v._fallback : v.d16x9 || v.square || v._fallback,
            mobile: v.square || v._fallback
          }, [b] = (0, s.usePreloadImg)(p.default), N = {
            default: {
              backgroundImage: `url(${p.default})`
            },
            mobile: {
              backgroundImage: `url(${p.mobile})`
            }
          }, w = (0, t.useCallback)(() => {
            g({
              event: "card_click",
              card_id: i.id,
              card_name: i.name_slug.replace(/-/g, " "),
              link_url: i.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }, [i]);
          return (0, n.jsx)(c.A, {
            to: i.url,
            className: [m.newswireBlock, k ? m.newswireBlockNoSpecialOrder : "", null !== b ? m.startAnimation : ""].join(" "),
            focused: u,
            onClick: w,
            children: (0, n.jsxs)(n.Fragment, {
              children: [0 === a ? (0, n.jsx)("div", {
                className: f ? m.previewMobile : m.preview,
                style: f ? N.mobile : N.default
              }) : (0, n.jsx)("div", {
                className: m.preview,
                style: N.default
              }), (0, n.jsxs)("div", {
                className: m.info,
                children: [(0, n.jsxs)("div", {
                  className: m.top,
                  children: [i.primary_tags.length ? (0, n.jsx)(o.A, {
                    title: i.primary_tags[i.primary_tags.length > 1 && 722 === i.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, n.jsx)("time", {
                    dateTime: i.created,
                    children: i.created_formatted
                  })]
                }), (0, n.jsx)("h5", {
                  className: m.title,
                  dangerouslySetInnerHTML: {
                    __html: i.title
                  }
                })]
              })]
            })
          })
        }
    },
    60755(e, a, i) {
      "use strict";
      i.d(a, {
        A: () => d
      });
      var n = i(39793),
        t = i(33337);
      const s = {
          tag: "rockstargames-sites-rockstargamesb660bb706132d84852c02df01cc6ed5a"
        },
        d = ({
          className: e,
          href: a,
          title: i,
          style: d
        }) => {
          const r = (0, n.jsxs)("div", {
            style: d,
            className: [s.tag, e].join(" "),
            children: [(0, n.jsx)("i", {}), i]
          });
          return void 0 !== a ? (0, n.jsx)(t.A, {
            to: a,
            children: r
          }) : r
        }
    },
    69485(e, a, i) {
      "use strict";
      i.r(a), i.d(a, {
        default: () => b
      });
      var n = i(39793),
        t = i(93082),
        s = i(99225),
        d = i(13331),
        r = i(82199),
        l = i(76261),
        c = i(24747);
      const o = {
        just1post: "rockstargames-sites-rockstargamesd46374473ed68a4121f88b44eba06359",
        pillBtn: "rockstargames-sites-rockstargamesf2d003dd0e6a129a56ea07208548787c",
        posts: "rockstargames-sites-rockstargamescfe09d4dc8447b1e606404300d040e7a",
        related: "rockstargames-sites-rockstargamesb8a63bb419c1f2a8f94e099e1e650e48",
        selected: "rockstargames-sites-rockstargamesf94728c4a438800b9abab11a8b3e3c0a"
      };
      (0, d.withTranslations)(({
        posts: e,
        t: a
      }) => (0, n.jsxs)("section", {
        className: o.related,
        children: [(0, n.jsx)("h2", {
          children: a("Related Stories")
        }), (0, n.jsx)("div", {
          className: [o.posts, 1 === e.length ? o.just1post : ""].join(" "),
          children: e.map(e => (0, n.jsx)(c.A, {
            noSpecialOrder: !0,
            post: e
          }, e.id))
        })]
      })), i(60755);
      const m = {
          newswireBlocks: "rockstargames-sites-rockstargamesea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-rockstargamesd301334a72b626f8cc2f5b9733299e76"
        },
        k = (0, d.withGtmTracking)(({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: i,
          gtmTrack: s
        }) => {
          const [d, r] = (0, t.useState)(null);
          return (0, t.useEffect)(() => {
            if (!i.length) return;
            const a = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            i.map((i, n) => {
              a.ecommerce.impressions.push({
                name: i.title,
                id: i.id,
                position: n + 1,
                list: e
              })
            }), s(a), r(i.length)
          }, [i.length]), (0, n.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [m.newswireBlocks, a ? m.noSpecialOrder : "", m.contextHome].join(" "),
            children: i.map((i, t) => (0, n.jsx)(c.A, {
              section: e,
              index: t,
              noSpecialOrder: a,
              post: i,
              focused: t === d
            }, i.id))
          })
        });
      var u = i(97984),
        g = i.n(u);
      const v = (0, d.withTranslations)(({
        section: e = "",
        relativeTo: a = "",
        tagId: i = null,
        metaUrl: c = "/newswire",
        t: o
      }) => {
        const m = (0, d.useLocale)(),
          {
            track: u
          } = (0, r.useGtmTrack)(),
          [v, f] = (0, s.useSearchParams)(),
          [p, b] = (0, t.useState)(v.get("tag")),
          [N, w] = (0, t.useState)(1),
          [_, h] = (0, t.useState)(20),
          [y, S] = (0, t.useState)([]),
          [x, F] = (0, t.useState)(null),
          [j, {
            loading: T,
            data: I
          }] = (0, d.useLazyQuery)(g(), {
            variables: {
              tagIdHash: p,
              page: N,
              metaUrl: c,
              limit: _,
              locale: m
            }
          });
        return (0, t.useEffect)(() => {
          w(1), S([]), h(20), b(v.get("tag")), j()
        }, [v.get("tag"), i]), (0, t.useEffect)(() => {
          const e = y;
          I?.posts?.paging && F(I?.posts?.paging), I?.posts?.results && S(e.concat(I?.posts?.results))
        }, [I]), (0, t.useEffect)(() => {
          (() => {
            const e = v.get("page"),
              a = Number(e ?? 1);
            h(20 * a), j()
          })()
        }, []), y.length ? (0, n.jsxs)("div", {
          className: "rockstargames-sites-rockstargamese81cdae3d47ce0490795e6588b3c8464",
          "data-testid": "newswire-list",
          children: [(0, n.jsx)(k, {
            section: e,
            posts: y,
            relativeTo: a,
            noSpecialOrder: null !== p
          }), null !== x && x.nextPage ? (0, n.jsx)(l.A, {
            className: "rockstargames-sites-rockstargamese125d510192feb4ce2844cb97084b838",
            "data-testid": "more-stories",
            onClick: () => {
              const e = v.get("page"),
                a = Number(e ?? N) + 1;
              w(a), 20 !== _ && h(20), j(), f({
                page: String(a),
                ...p && {
                  tag: p
                }
              }, {
                replace: !0
              }), u({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: T,
            context: "secondary",
            children: o("More Stories")
          }) : ""]
        }) : null
      });
      var f = i(73255),
        p = i(69810);
      const b = (0, d.withTranslations)(({
        t: e
      }) => {
        const {
          setBreadcrumb: a,
          setNormalLogo: i
        } = (0, f.b)();
        return (0, t.useEffect)(() => (a([{
          href: "/newswire",
          title: e("Newswire")
        }], ""), () => {
          i(!0), a()
        }), []), (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("div", {
            className: "rockstargames-sites-rockstargamesfd4f6875c71d228cd0e8c766e33bca79",
            "data-testid": "newswire-list",
            children: (0, n.jsx)(v, {
              section: "Newswire",
              t: e
            })
          }), (0, n.jsx)(p.A, {})]
        })
      })
    }
  }
]);