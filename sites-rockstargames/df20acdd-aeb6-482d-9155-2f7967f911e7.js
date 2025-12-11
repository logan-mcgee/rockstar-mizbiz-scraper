try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "df20acdd-aeb6-482d-9155-2f7967f911e7", e._sentryDebugIdIdentifier = "sentry-dbid-df20acdd-aeb6-482d-9155-2f7967f911e7")
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
        A: () => m
      });
      var n = i(42295),
        t = i(62229),
        s = i(9623),
        r = i(95966),
        d = i(2918),
        l = i(14200),
        o = i(23395);
      const c = {
          info: "rockstargames-sites-rockstargamesea1c51ae745531c2aeabbe3fcf603842",
          newswireBlock: "rockstargames-sites-rockstargamesb394b56c31488c36155ca82090c66e6f",
          newswireBlockNoSpecialOrder: "rockstargames-sites-rockstargamesc06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-sites-rockstargamesca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-sites-rockstargamesb3d4a8cfcc371ae39ce6220d009c5954",
          startAnimation: "rockstargames-sites-rockstargamesa56af3c95449fe8452485dfb6c89fc29",
          title: "rockstargames-sites-rockstargamesf1dfe59c3d981dbe132559620885ecea",
          top: "rockstargames-sites-rockstargameseee9c5d3b714a61ac265369800a6d4e0"
        },
        m = ({
          section: e = "",
          index: a,
          post: i,
          noSpecialOrder: m = !1,
          focused: u
        }) => {
          const {
            track: k
          } = (0, d.useGtmTrack)(), [g] = (0, s.useSearchParams)(), v = i.preview_images_parsed.newswire_block, p = {
            default: 0 !== a || m ? v.square || v.d16x9 || v._fallback : v.d16x9 || v.square || v._fallback,
            mobile: v.square || v._fallback
          }, [f, w] = (0, r.usePreloadImg)(p.default), b = {
            default: {
              backgroundImage: `url(${p.default})`
            },
            mobile: {
              backgroundImage: `url(${p.mobile})`
            }
          }, N = (0, t.useCallback)(() => {
            k({
              event: "card_click",
              card_id: i.id,
              card_name: i.name_slug.replace(/-/g, " "),
              link_url: i.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }, [i]);
          return (0, n.jsx)(l.A, {
            to: i.url,
            className: [c.newswireBlock, m ? c.newswireBlockNoSpecialOrder : "", null !== f ? c.startAnimation : ""].join(" "),
            focused: u,
            onClick: N,
            children: (0, n.jsxs)(n.Fragment, {
              children: [0 !== a || g.get("tag_id") ? (0, n.jsx)("div", {
                className: c.preview,
                style: b.default
              }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("div", {
                  className: c.previewMobile,
                  style: b.mobile
                }), (0, n.jsx)("div", {
                  className: c.preview,
                  style: b.default
                })]
              }), (0, n.jsxs)("div", {
                className: c.info,
                children: [(0, n.jsxs)("div", {
                  className: c.top,
                  children: [i.primary_tags.length ? (0, n.jsx)(o.A, {
                    title: i.primary_tags[i.primary_tags.length > 1 && 722 === i.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, n.jsx)("time", {
                    dateTime: i.created,
                    children: i.created_formatted
                  })]
                }), (0, n.jsx)("h5", {
                  className: c.title,
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
        A: () => r
      });
      var n = i(42295),
        t = i(14200);
      const s = {
          button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
        },
        r = ({
          className: e = "",
          children: a,
          context: i = "",
          to: r,
          onClick: d,
          target: l = "_self",
          ...o
        }) => {
          const c = [s.button, s[i], e].join(" ");
          return r ? (0, n.jsx)(t.A, {
            ...o,
            to: r,
            className: c,
            onClick: d,
            target: l,
            children: a
          }) : (0, n.jsx)("button", {
            ...o,
            type: "button",
            className: c,
            onClick: d,
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
        t = i(62229),
        s = i(9623),
        r = i(96566),
        d = i(95966),
        l = i(2918),
        o = i(29625),
        c = i(13989);
      const m = {
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
        className: m.related,
        children: [(0, n.jsx)("h2", {
          children: a("Related Stories")
        }), (0, n.jsx)("div", {
          className: [m.posts, 1 === e.length ? m.just1post : ""].join(" "),
          children: e.map(e => (0, n.jsx)(c.A, {
            noSpecialOrder: !0,
            post: e
          }, e.id))
        })]
      })), i(23395);
      const u = {
          newswireBlocks: "rockstargames-sites-rockstargamesea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-rockstargamesd301334a72b626f8cc2f5b9733299e76"
        },
        k = (0, d.withGtmTracking)(({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: i,
          gtmTrack: s,
          relativeTo: r
        }) => {
          const [d, l] = (0, t.useState)(null);
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
            }), s(a), l(i.length)
          }, [i.length]), (0, n.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [u.newswireBlocks, a ? u.noSpecialOrder : "", u.contextHome].join(" "),
            children: i.map((i, t) => (0, n.jsx)(c.A, {
              section: e,
              index: t,
              noSpecialOrder: a,
              post: i,
              focused: t === d
            }, i.id))
          })
        });
      var g = i(46368),
        v = i.n(g);
      const p = (0, d.withTranslations)(({
        section: e = "",
        relativeTo: a = "",
        tagId: i = null,
        metaUrl: c = "/newswire",
        t: m
      }) => {
        const u = (0, d.useLocale)(),
          {
            track: g
          } = (0, l.useGtmTrack)(),
          [p, f] = (0, s.useSearchParams)(),
          {
            tagId: w = null
          } = (0, s.useParams)(),
          [b, N] = (0, t.useState)(w ?? i ?? p.get("tag_id")),
          [h, _] = (0, t.useState)(1),
          [y, S] = (0, t.useState)(20),
          [x, F] = (0, t.useState)([]),
          [j, T] = (0, t.useState)(null),
          [E, {
            loading: I,
            data: A
          }] = (0, r._l)(v(), {
            variables: {
              tagId: Number(b),
              page: h,
              metaUrl: c,
              limit: y,
              locale: u
            }
          });
        return (0, t.useEffect)(() => {
          _(1), F([]), S(20), N(w ?? i ?? p.get("tag_id")), E()
        }, [p.get("tag_id"), w, i]), (0, t.useEffect)(() => {
          const e = x;
          A?.posts?.paging && T(A?.posts?.paging), A?.posts?.results && F(e.concat(A?.posts?.results))
        }, [A]), (0, t.useEffect)(() => {
          (() => {
            const e = p.get("page"),
              a = Number(e ?? 1);
            S(20 * a), E()
          })()
        }, []), x.length ? (0, n.jsxs)("div", {
          "data-testid": "newswire-list",
          children: [(0, n.jsx)(k, {
            section: e,
            posts: x,
            relativeTo: a,
            noSpecialOrder: null !== b
          }), null !== j && j.nextPage ? (0, n.jsx)(o.A, {
            className: "rockstargames-sites-rockstargamese125d510192feb4ce2844cb97084b838",
            "data-testid": "more-stories",
            onClick: e => {
              const a = p.get("page"),
                i = Number(a ?? h) + 1;
              _(i), 20 !== y && S(20), E(), f({
                page: String(i)
              }, {
                replace: !0
              }), g({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: I,
            context: "secondary",
            children: m("More Stories")
          }) : ""]
        }) : null
      });
      var f = i(87790),
        w = i(64424);
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
            children: (0, n.jsx)(p, {
              section: "Newswire",
              t: e
            })
          }), (0, n.jsx)(w.A, {})]
        })
      })
    },
    96566: (e, a, i) => {
      "use strict";
      i.d(a, {
        _y: () => v,
        _l: () => s.useLazyQuery,
        n_: () => f,
        IT: () => p
      });
      var n = i(42295),
        t = i(62229),
        s = i(89311),
        r = i(15076),
        d = i.n(r),
        l = i(56088);
      const o = (e, a) => {
          const i = (0, l.Ym)(),
            n = {
              autoSetError: !0,
              autoSetLoading: !1,
              setTitleDataPath: "meta.title",
              ...a,
              variables: {
                locale: i,
                ...a?.variables
              }
            },
            {
              data: r,
              loading: o,
              error: c,
              ...m
            } = (0, s.useQuery)(e, n);
          return (0, t.useEffect)(() => {
            if (r && n.setTitleDataPath) {
              const e = d().get(r, n.setTitleDataPath) ?? null;
              e && window.postMessage({
                type: "graph.titleUpdate",
                title: e
              })
            }
          }, [r]), (0, t.useEffect)(() => (n.autoSetLoading && window.postMessage({
            type: "graph.loadingUpdate",
            loading: o
          }), () => {
            n.autoSetLoading && window.postMessage({
              type: "graph.loadingUpdate",
              loading: !1
            })
          }), [o]), (0, t.useEffect)(() => {
            if (n.autoSetError && c) throw new Error(String(c))
          }, [c]), {
            loading: o,
            error: c,
            data: r,
            ...m
          }
        },
        c = (0, t.createContext)(() => ({
          data: null
        })),
        m = new Promise(e => {
          e()
        }),
        u = {
          cache: window?.["apollo-cache"] ?? (window["apollo-cache"] = new s.InMemoryCache)
        },
        k = [() => m, {
          data: null,
          loading: !1,
          called: !1,
          reset: () => null,
          client: window?.["apollo-client"] ?? (window["apollo-client"] = new s.ApolloClient(u))
        }],
        g = (0, t.createContext)(() => k),
        v = window?.["apollo-graph-provider"] ?? (window["apollo-graph-provider"] = ({
          children: e
        }) => (0, n.jsx)(g.Provider, {
          value: s.useMutation,
          children: (0, n.jsx)(c.Provider, {
            value: o,
            children: e
          })
        })),
        p = window?.["apollo-use-query"] ?? (window["apollo-use-query"] = (e, a) => (0, t.useContext)(c)(e, a)),
        f = window?.["apollo-use-mutation"] ?? (window["apollo-use-mutation"] = e => (0, t.useContext)(g)(e))
    }
  }
]);