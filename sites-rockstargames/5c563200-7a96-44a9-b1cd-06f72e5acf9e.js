! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5c563200-7a96-44a9-b1cd-06f72e5acf9e", e._sentryDebugIdIdentifier = "sentry-dbid-5c563200-7a96-44a9-b1cd-06f72e5acf9e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5976], {
    47313: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => r
      });
      var n = i(12363);
      const t = {
        button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
        secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
      };
      var s = i(91029);
      const r = e => {
        let {
          className: a = "",
          children: i,
          context: r = "",
          to: d,
          onClick: l,
          target: c = "_self",
          ...o
        } = e;
        const m = [t.button, t[r], a].join(" ");
        return d ? (0, s.jsx)(n.A, {
          ...o,
          to: d,
          className: m,
          onClick: l,
          target: c,
          children: i
        }) : (0, s.jsx)("button", {
          ...o,
          type: "button",
          className: m,
          onClick: l,
          children: i
        })
      }
    },
    53459: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => m
      });
      var n = i(62229),
        t = i(9623),
        s = i(95966),
        r = i(2918),
        d = i(12363),
        l = i(4403);
      const c = {
        newswireBlock: "rockstargames-sites-rockstargamesb394b56c31488c36155ca82090c66e6f",
        info: "rockstargames-sites-rockstargamesea1c51ae745531c2aeabbe3fcf603842",
        title: "rockstargames-sites-rockstargamesf1dfe59c3d981dbe132559620885ecea",
        newswireBlockNoSpecialOrder: "rockstargames-sites-rockstargamesc06d09374e8b5cc41f1732c691ee8e25",
        preview: "rockstargames-sites-rockstargamesca2b587572d3c9a74cfc2fedf400ce8c",
        previewMobile: "rockstargames-sites-rockstargamesb3d4a8cfcc371ae39ce6220d009c5954",
        top: "rockstargames-sites-rockstargameseee9c5d3b714a61ac265369800a6d4e0",
        startAnimation: "rockstargames-sites-rockstargamesa56af3c95449fe8452485dfb6c89fc29"
      };
      var o = i(91029);
      const m = e => {
        let {
          section: a = "",
          index: i,
          post: m,
          noSpecialOrder: u = !1,
          focused: k
        } = e;
        const {
          track: g
        } = (0, r.useGtmTrack)(), [v] = (0, t.useSearchParams)(), f = m.preview_images_parsed.newswire_block, p = {
          default: 0 !== i || u ? f.square || f.d16x9 || f._fallback : f.d16x9 || f.square || f._fallback,
          mobile: f.square || f._fallback
        }, [b, N] = (0, s.usePreloadImg)(p.default), w = {
          default: {
            backgroundImage: `url(${p.default})`
          },
          mobile: {
            backgroundImage: `url(${p.mobile})`
          }
        }, _ = (0, n.useCallback)((() => {
          g({
            event: "card_click",
            card_id: m.id,
            card_name: m.name_slug.replace(/-/g, " "),
            link_url: m.url,
            position: i,
            element_placement: a
          })
        }), [m]);
        return (0, o.jsx)(d.A, {
          to: m.url,
          className: [c.newswireBlock, u ? c.newswireBlockNoSpecialOrder : "", null !== b ? c.startAnimation : ""].join(" "),
          focused: k,
          onClick: _,
          children: (0, o.jsxs)(o.Fragment, {
            children: [0 !== i || v.get("tag_id") ? (0, o.jsx)("div", {
              className: c.preview,
              style: w.default
            }) : (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)("div", {
                className: c.previewMobile,
                style: w.mobile
              }), (0, o.jsx)("div", {
                className: c.preview,
                style: w.default
              })]
            }), (0, o.jsxs)("div", {
              className: c.info,
              children: [(0, o.jsxs)("div", {
                className: c.top,
                children: [m.primary_tags.length ? (0, o.jsx)(l.A, {
                  title: m.primary_tags[m.primary_tags.length > 1 && 722 === m.primary_tags[0].id ? 1 : 0].name
                }) : "", (0, o.jsx)("time", {
                  dateTime: m.created,
                  children: m.created_formatted
                })]
              }), (0, o.jsx)("h5", {
                className: c.title,
                dangerouslySetInnerHTML: {
                  __html: m.title
                }
              })]
            })]
          })
        })
      }
    },
    4403: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => r
      });
      var n = i(12363);
      const t = {
        tag: "rockstargames-sites-rockstargamesb660bb706132d84852c02df01cc6ed5a"
      };
      var s = i(91029);
      const r = e => {
        let {
          className: a,
          href: i,
          title: r,
          style: d
        } = e;
        const l = (0, s.jsxs)("div", {
          style: d,
          className: [t.tag, a].join(" "),
          children: [(0, s.jsx)("i", {}), r]
        });
        return void 0 !== i ? (0, s.jsx)(n.A, {
          to: i,
          children: l
        }) : l
      }
    },
    35419: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => c
      });
      var n = i(62229),
        t = i(95966),
        s = i(53459);
      i(77681);
      const r = {
        pillBtn: "rockstargames-sites-rockstargamesf2d003dd0e6a129a56ea07208548787c",
        selected: "rockstargames-sites-rockstargamesf94728c4a438800b9abab11a8b3e3c0a",
        related: "rockstargames-sites-rockstargamesb8a63bb419c1f2a8f94e099e1e650e48",
        posts: "rockstargames-sites-rockstargamescfe09d4dc8447b1e606404300d040e7a",
        just1post: "rockstargames-sites-rockstargamesd46374473ed68a4121f88b44eba06359"
      };
      var d = i(91029);
      (0, t.withTranslations)((e => {
        let {
          posts: a,
          t: i
        } = e;
        return (0, d.jsxs)("section", {
          className: r.related,
          children: [(0, d.jsx)("h2", {
            children: i("Related Stories")
          }), (0, d.jsx)("div", {
            className: [r.posts, 1 === a.length ? r.just1post : ""].join(" "),
            children: a.map((e => (0, d.jsx)(s.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        })
      })), i(4403);
      const l = {
          newswireBlocks: "rockstargames-sites-rockstargamesea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-rockstargamesd301334a72b626f8cc2f5b9733299e76"
        },
        c = (0, t.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: i = !1,
            posts: t,
            gtmTrack: r,
            relativeTo: c
          } = e;
          const [o, m] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            if (!t.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            t.map(((i, n) => {
              e.ecommerce.impressions.push({
                name: i.title,
                id: i.id,
                position: n + 1,
                list: a
              })
            })), r(e), m(t.length)
          }), [t.length]), (0, d.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [l.newswireBlocks, i ? l.noSpecialOrder : "", l.contextHome].join(" "),
            children: t.map(((e, n) => (0, d.jsx)(s.A, {
              section: a,
              index: n,
              noSpecialOrder: i,
              post: e,
              focused: n === o
            }, e.id)))
          })
        }))
    },
    77681: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => k
      });
      var n = i(62229),
        t = i(9623),
        s = i(19800),
        r = i(95966),
        d = i(2918),
        l = i(47313),
        c = i(35419),
        o = i(46368),
        m = i.n(o);
      var u = i(91029);
      const k = (0, r.withTranslations)((e => {
        let {
          section: a = "",
          relativeTo: i = "",
          tagId: o = null,
          metaUrl: k = "/newswire",
          t: g
        } = e;
        const v = (0, r.useLocale)(),
          {
            track: f
          } = (0, d.useGtmTrack)(),
          [p, b] = (0, t.useSearchParams)(),
          {
            tagId: N = null
          } = (0, t.useParams)(),
          [w, _] = (0, n.useState)(N ?? o ?? p.get("tag_id")),
          [S, y] = (0, n.useState)(1),
          [h, x] = (0, n.useState)(20),
          [F, j] = (0, n.useState)([]),
          [T, A] = (0, n.useState)(null),
          [I, {
            loading: V,
            data: E
          }] = (0, s._l)(m(), {
            variables: {
              tagId: Number(w),
              page: S,
              metaUrl: k,
              limit: h,
              locale: v
            }
          });
        return (0, n.useEffect)((() => {
          y(1), j([]), x(20), _(N ?? o ?? p.get("tag_id")), I()
        }), [p.get("tag_id"), N, o]), (0, n.useEffect)((() => {
          const e = F;
          E?.posts?.paging && A(E?.posts?.paging), E?.posts?.results && j(e.concat(E?.posts?.results))
        }), [E]), (0, n.useEffect)((() => {
          (() => {
            const e = p.get("page"),
              a = Number(e ?? 1);
            x(20 * a), I()
          })()
        }), []), F.length ? (0, u.jsxs)("div", {
          "data-testid": "newswire-list",
          children: [(0, u.jsx)(c.A, {
            section: a,
            posts: F,
            relativeTo: i,
            noSpecialOrder: null !== w
          }), null !== T && T.nextPage ? (0, u.jsx)(l.A, {
            className: "rockstargames-sites-rockstargamese125d510192feb4ce2844cb97084b838",
            "data-testid": "more-stories",
            onClick: e => {
              const a = p.get("page"),
                i = Number(a ?? S) + 1;
              y(i), 20 !== h && x(20), I(), b({
                page: String(i)
              }, {
                replace: !0
              }), f({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: V,
            context: "secondary",
            children: g("More Stories")
          }) : ""]
        }) : null
      }))
    },
    95976: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => c
      });
      var n = i(62229),
        t = i(77681),
        s = i(95966),
        r = i(49323),
        d = i(1885);
      var l = i(91029);
      const c = (0, s.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i,
          setNormalLogo: s
        } = (0, r.b)();
        return (0, n.useEffect)((() => (i([{
          href: "/newswire",
          title: a("Newswire")
        }], ""), () => {
          s(!0), i()
        })), []), (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("div", {
            className: "rockstargames-sites-rockstargamesfd4f6875c71d228cd0e8c766e33bca79",
            "data-testid": "newswire-list",
            children: (0, l.jsx)(t.A, {
              section: "Newswire",
              t: a
            })
          }), (0, l.jsx)(d.A, {})]
        })
      }))
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
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
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
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = s(a, "postFields"), e.exports.paging = s(a, "paging"), e.exports.NewswireList = s(a, "NewswireList")
    }
  }
]);