try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5faf30ea-6b1b-400e-afa6-1a532bac0016", e._sentryDebugIdIdentifier = "sentry-dbid-5faf30ea-6b1b-400e-afa6-1a532bac0016")
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
  [7975], {
    13989: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => k
      });
      var n = i(42295),
        t = i(71127),
        s = i(10181),
        r = i(58136),
        d = i(61874),
        l = i(12919),
        c = i(17328),
        o = i(14200),
        m = i(23395);
      const u = {
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
          focused: g
        }) => {
          const {
            track: v
          } = (0, d.useGtmTrack)(), [f] = (0, s.useSearchParams)(), p = i.preview_images_parsed.newswire_block, b = (0, l.Ub)(c.fi.mobile), N = {
            default: 0 !== a || k ? p.square || p.d16x9 || p._fallback : p.d16x9 || p.square || p._fallback,
            mobile: p.square || p._fallback
          }, [w] = (0, r.usePreloadImg)(N.default), _ = {
            default: {
              backgroundImage: `url(${N.default})`
            },
            mobile: {
              backgroundImage: `url(${N.mobile})`
            }
          }, y = (0, t.useCallback)(() => {
            v({
              event: "card_click",
              card_id: i.id,
              card_name: i.name_slug.replace(/-/g, " "),
              link_url: i.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }, [i]);
          return (0, n.jsx)(o.A, {
            to: i.url,
            className: [u.newswireBlock, k ? u.newswireBlockNoSpecialOrder : "", null !== w ? u.startAnimation : ""].join(" "),
            focused: g,
            onClick: y,
            children: (0, n.jsxs)(n.Fragment, {
              children: [0 !== a || f.get("tag_id") ? (0, n.jsx)("div", {
                className: u.preview,
                style: _.default
              }) : (0, n.jsx)("div", {
                className: b ? u.previewMobile : u.preview,
                style: b ? _.mobile : _.default
              }), (0, n.jsxs)("div", {
                className: u.info,
                children: [(0, n.jsxs)("div", {
                  className: u.top,
                  children: [i.primary_tags.length ? (0, n.jsx)(m.A, {
                    title: i.primary_tags[i.primary_tags.length > 1 && 722 === i.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, n.jsx)("time", {
                    dateTime: i.created,
                    children: i.created_formatted
                  })]
                }), (0, n.jsx)("h5", {
                  className: u.title,
                  dangerouslySetInnerHTML: {
                    __html: i.title
                  }
                })]
              })]
            })
          })
        }
    },
    23395: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => r
      });
      var n = i(42295),
        t = i(14200);
      const s = {
          tag: "rockstargames-sites-rockstargamesb660bb706132d84852c02df01cc6ed5a"
        },
        r = ({
          className: e,
          href: a,
          title: i,
          style: r
        }) => {
          const d = (0, n.jsxs)("div", {
            style: r,
            className: [s.tag, e].join(" "),
            children: [(0, n.jsx)("i", {}), i]
          });
          return void 0 !== a ? (0, n.jsx)(t.A, {
            to: a,
            children: d
          }) : d
        }
    },
    29625: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => l
      });
      var n = i(42295),
        t = i(1556),
        s = i.n(t),
        r = i(14200);
      const d = {
          button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
        },
        l = ({
          className: e = "",
          children: a,
          context: i = "",
          to: t,
          onClick: l,
          target: c = "_self",
          ...o
        }) => {
          const m = s()(d.button, d[i], e);
          return t ? (0, n.jsx)(r.A, {
            ...o,
            to: t,
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
    46368: e => {
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
          end: 926
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
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
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
          r = new Set,
          d = new Set;
        for (s.forEach(function(e) {
            d.add(e)
          }); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach(function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach(function(e) {
              d.add(e)
            }))
          })
        }
        return r.forEach(function(a) {
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
    86546: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => b
      });
      var n = i(42295),
        t = i(71127),
        s = i(10181),
        r = i(58136),
        d = i(61874),
        l = i(29625),
        c = i(13989);
      const o = {
        just1post: "rockstargames-sites-rockstargamesd46374473ed68a4121f88b44eba06359",
        pillBtn: "rockstargames-sites-rockstargamesf2d003dd0e6a129a56ea07208548787c",
        posts: "rockstargames-sites-rockstargamescfe09d4dc8447b1e606404300d040e7a",
        related: "rockstargames-sites-rockstargamesb8a63bb419c1f2a8f94e099e1e650e48",
        selected: "rockstargames-sites-rockstargamesf94728c4a438800b9abab11a8b3e3c0a"
      };
      (0, r.withTranslations)(({
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
      })), i(23395);
      const m = {
          newswireBlocks: "rockstargames-sites-rockstargamesea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-rockstargamesd301334a72b626f8cc2f5b9733299e76"
        },
        u = (0, r.withGtmTracking)(({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: i,
          gtmTrack: s
        }) => {
          const [r, d] = (0, t.useState)(null);
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
            }), s(a), d(i.length)
          }, [i.length]), (0, n.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [m.newswireBlocks, a ? m.noSpecialOrder : "", m.contextHome].join(" "),
            children: i.map((i, t) => (0, n.jsx)(c.A, {
              section: e,
              index: t,
              noSpecialOrder: a,
              post: i,
              focused: t === r
            }, i.id))
          })
        });
      var k = i(46368),
        g = i.n(k);
      const v = (0, r.withTranslations)(({
        section: e = "",
        relativeTo: a = "",
        tagId: i = null,
        metaUrl: c = "/newswire",
        t: o
      }) => {
        const m = (0, r.useLocale)(),
          {
            track: k
          } = (0, d.useGtmTrack)(),
          [v, f] = (0, s.useSearchParams)(),
          {
            tagId: p = null
          } = (0, s.useParams)(),
          [b, N] = (0, t.useState)(p ?? i ?? v.get("tag_id")),
          [w, _] = (0, t.useState)(1),
          [y, S] = (0, t.useState)(20),
          [h, x] = (0, t.useState)([]),
          [F, j] = (0, t.useState)(null),
          [T, {
            loading: I,
            data: E
          }] = (0, r.useLazyQuery)(g(), {
            variables: {
              tagId: Number(b),
              page: w,
              metaUrl: c,
              limit: y,
              locale: m
            }
          });
        return (0, t.useEffect)(() => {
          _(1), x([]), S(20), N(p ?? i ?? v.get("tag_id")), T()
        }, [v.get("tag_id"), p, i]), (0, t.useEffect)(() => {
          const e = h;
          E?.posts?.paging && j(E?.posts?.paging), E?.posts?.results && x(e.concat(E?.posts?.results))
        }, [E]), (0, t.useEffect)(() => {
          (() => {
            const e = v.get("page"),
              a = Number(e ?? 1);
            S(20 * a), T()
          })()
        }, []), h.length ? (0, n.jsxs)("div", {
          className: "rockstargames-sites-rockstargamese81cdae3d47ce0490795e6588b3c8464",
          "data-testid": "newswire-list",
          children: [(0, n.jsx)(u, {
            section: e,
            posts: h,
            relativeTo: a,
            noSpecialOrder: null !== b
          }), null !== F && F.nextPage ? (0, n.jsx)(l.A, {
            className: "rockstargames-sites-rockstargamese125d510192feb4ce2844cb97084b838",
            "data-testid": "more-stories",
            onClick: () => {
              const e = v.get("page"),
                a = Number(e ?? w) + 1;
              _(a), 20 !== y && S(20), T(), f({
                page: String(a),
                tag_id: String(b)
              }, {
                replace: !0
              }), k({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: I,
            context: "secondary",
            children: o("More Stories")
          }) : ""]
        }) : null
      });
      var f = i(87790),
        p = i(64424);
      const b = (0, r.withTranslations)(({
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