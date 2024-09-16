! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8406d46f-83d1-445d-92d8-e75c6be3b642", e._sentryDebugIdIdentifier = "sentry-dbid-8406d46f-83d1-445d-92d8-e75c6be3b642")
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
  [5275], {
    22778: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var n = t(60285);
      const i = {
        button: "rockstargames-sites-rockstargamese056494c33cff1fe89431f279fdb6b9a",
        secondary: "rockstargames-sites-rockstargamesd340cf27f380a4347994e59544432eb3"
      };
      var s = t(46632);
      const r = e => {
        let {
          className: a = "",
          children: t,
          context: r = "",
          to: l,
          onClick: d,
          target: o = "_self",
          ...c
        } = e;
        const m = [i.button, i[r], a].join(" ");
        return l ? (0, s.jsx)(n.A, {
          ...c,
          to: l,
          className: m,
          onClick: d,
          target: o,
          children: t
        }) : (0, s.jsx)("button", {
          ...c,
          type: "button",
          className: m,
          onClick: d,
          children: t
        })
      }
    },
    72558: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var n = t(71403),
        i = t(89779),
        s = t(42756),
        r = t(40207),
        l = t(60285),
        d = t(31716);
      const o = {
        newswireBlock: "rockstargames-sites-rockstargamesa793f470884d207243d6c3caac8ad811",
        info: "rockstargames-sites-rockstargamesd50f6d2bc5f983c05311292acb4c78a5",
        title: "rockstargames-sites-rockstargamescc389449dc1495fc9c323fc2c547857d",
        newswireBlockNoSpecialOrder: "rockstargames-sites-rockstargamesffd167124f27c8e26a147f49c88796e5",
        preview: "rockstargames-sites-rockstargamesbbfbcf32c8c892ea29f4178949643475",
        previewMobile: "rockstargames-sites-rockstargamesf88852766488b21a28c42d230ea529a1",
        top: "rockstargames-sites-rockstargamesfa1a6f4c7d94b94f5af2dc1ac9af79f1",
        startAnimation: "rockstargames-sites-rockstargamese380e8c67066df6f33fc018341ea96e5"
      };
      var c = t(46632);
      const m = e => {
        let {
          section: a = "",
          index: t,
          post: m,
          noSpecialOrder: u = !1,
          focused: f
        } = e;
        const {
          track: k
        } = (0, r.useGtmTrack)(), [g] = (0, i.useSearchParams)(), p = m.preview_images_parsed.newswire_block, v = {
          default: 0 !== t || u ? p.square || p.d16x9 || p._fallback : p.d16x9 || p.square || p._fallback,
          mobile: p.square || p._fallback
        }, [b, w] = (0, s.usePreloadImg)(v.default), N = {
          default: {
            backgroundImage: `url(${v.default})`
          },
          mobile: {
            backgroundImage: `url(${v.mobile})`
          }
        }, h = (0, n.useCallback)((() => {
          k({
            event: "card_click",
            card_id: m.id,
            card_name: m.name_slug.replace(/-/g, " "),
            link_url: m.url,
            position: t,
            element_placement: a
          })
        }), [m]);
        return (0, c.jsx)(l.A, {
          to: m.url,
          className: [o.newswireBlock, u ? o.newswireBlockNoSpecialOrder : "", null !== b ? o.startAnimation : ""].join(" "),
          focused: f,
          onClick: h,
          children: (0, c.jsxs)(c.Fragment, {
            children: [0 !== t || g.get("tag_id") ? (0, c.jsx)("div", {
              className: o.preview,
              style: N.default
            }) : (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)("div", {
                className: o.previewMobile,
                style: N.mobile
              }), (0, c.jsx)("div", {
                className: o.preview,
                style: N.default
              })]
            }), (0, c.jsxs)("div", {
              className: o.info,
              children: [(0, c.jsxs)("div", {
                className: o.top,
                children: [m.primary_tags.length ? (0, c.jsx)(d.A, {
                  title: m.primary_tags[m.primary_tags.length > 1 && 722 === m.primary_tags[0].id ? 1 : 0].name
                }) : "", (0, c.jsx)("time", {
                  dateTime: m.created,
                  children: m.created_formatted
                })]
              }), (0, c.jsx)("h5", {
                className: o.title,
                dangerouslySetInnerHTML: {
                  __html: m.title
                }
              })]
            })]
          })
        })
      }
    },
    31716: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var n = t(60285);
      const i = {
        tag: "rockstargames-sites-rockstargamesed77774d2704bc0ebc0ac156542ae053"
      };
      var s = t(46632);
      const r = e => {
        let {
          className: a,
          href: t,
          title: r,
          style: l
        } = e;
        const d = (0, s.jsxs)("div", {
          style: l,
          className: [i.tag, a].join(" "),
          children: [(0, s.jsx)("i", {}), r]
        });
        return void 0 !== t ? (0, s.jsx)(n.A, {
          to: t,
          children: d
        }) : d
      }
    },
    1937: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var n = t(71403),
        i = t(42756),
        s = t(72558);
      t(49853), t(95073), t(31716);
      const r = {
        newswireBlocks: "rockstargames-sites-rockstargamesc2c8eedd25de7e186655f98b2a8d8960",
        noSpecialOrder: "rockstargames-sites-rockstargamesc0d0db9dfc71c9f4f959b9c017b1ae4b"
      };
      var l = t(46632);
      const d = (0, i.withGtmTracking)((e => {
        let {
          section: a = "",
          noSpecialOrder: t = !1,
          posts: i,
          gtmTrack: d,
          relativeTo: o
        } = e;
        const [c, m] = (0, n.useState)(null);
        return (0, n.useEffect)((() => {
          if (!i.length) return;
          const e = {
            event: "view_item_list",
            ecommerce: {
              impressions: []
            }
          };
          i.map(((t, n) => {
            e.ecommerce.impressions.push({
              name: t.title,
              id: t.id,
              position: n + 1,
              list: a
            })
          })), d(e), m(i.length)
        }), [i.length]), (0, l.jsx)("div", {
          className: [r.newswireBlocks, t ? r.noSpecialOrder : "", r.contextHome].join(" "),
          children: i.map(((e, n) => (0, l.jsx)(s.A, {
            section: a,
            index: n,
            noSpecialOrder: t,
            post: e,
            focused: n === c
          }, e.id)))
        })
      }))
    },
    49853: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var n = t(71403),
        i = t(89779),
        s = t(58407),
        r = t(42756),
        l = t(40207),
        d = t(22778),
        o = t(1937),
        c = t(31955),
        m = t.n(c),
        u = t(46632);
      const f = (0, r.withTranslations)((e => {
        let {
          section: a = "",
          relativeTo: t = "",
          tagId: r = null,
          metaUrl: c = "/newswire",
          t: f
        } = e;
        const {
          track: k
        } = (0, l.useGtmTrack)(), [g] = (0, i.useSearchParams)(), {
          tagId: p = null
        } = (0, i.useParams)(), [v, b] = (0, n.useState)(p ?? r ?? g.get("tag_id")), [w, N] = (0, n.useState)(1), [h, y] = (0, n.useState)([]), [S, _] = (0, n.useState)(null), {
          data: x
        } = (0, s.useQuery)(m(), {
          variables: {
            tagId: Number(v),
            page: w,
            metaUrl: c
          },
          autoSetLoading: !0
        });
        return (0, n.useEffect)((() => {
          N(1), y([]), b(p ?? r ?? g.get("tag_id"))
        }), [g.get("tag_id")]), (0, n.useEffect)((() => {
          x && x.posts && x.posts.paging && _(x.posts.paging), x && x.posts && x.posts.results && y(h.concat(x.posts.results))
        }), [x]), h.length ? (0, u.jsxs)(u.Fragment, {
          children: [(0, u.jsx)(o.A, {
            section: a,
            posts: h,
            relativeTo: t,
            noSpecialOrder: null !== v
          }), null !== S && S.nextPage ? (0, u.jsx)(d.A, {
            onClick: e => {
              N(w + 1), k({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: !1,
            context: "secondary",
            children: f("More Stories")
          }) : ""]
        }) : null
      }))
    },
    95073: (e, a, t) => {
      "use strict";
      var n = t(42756),
        i = t(72558);
      const s = {
        pillBtn: "rockstargames-sites-rockstargamesafd0af959edb4a463c41ad4e9cc5dadc",
        selected: "rockstargames-sites-rockstargamesbcd59aa4a9e88d86a2cbe8d4972f8f51",
        related: "rockstargames-sites-rockstargamesa748ad776070dab831edc1f67f66af08",
        posts: "rockstargames-sites-rockstargamesc0aa38678decd13ca38886b4547efedd",
        just1post: "rockstargames-sites-rockstargamesb1a31ddf7fd4458ee860d354a6a0ac92"
      };
      var r = t(46632);
      (0, n.withTranslations)((e => {
        let {
          posts: a,
          t
        } = e;
        return (0, r.jsxs)("section", {
          className: s.related,
          children: [(0, r.jsx)("h2", {
            children: t("Related Stories")
          }), (0, r.jsx)("div", {
            className: [s.posts, 1 === a.length ? s.just1post : ""].join(" "),
            children: a.map((e => (0, r.jsx)(i.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        })
      }))
    },
    35275: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => d
      });
      var n = t(71403),
        i = t(49853),
        s = t(70396),
        r = t(42756);
      var l = t(46632);
      const d = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: t,
          setNormalLogo: r
        } = (0, s.useRockstarLocalState)();
        return (0, n.useEffect)((() => (t([{
          href: "/newswire",
          title: a("Newswire")
        }], ""), () => {
          r(!0), t()
        })), []), (0, l.jsx)("div", {
          className: "rockstargames-sites-rockstargamesb7f93a0d98bb3eaac82ba7d6aef63890",
          "data-testid": "newswire-list",
          children: (0, l.jsx)(i.A, {
            section: "Newswire",
            t: a
          })
        })
      }))
    },
    31955: (e, a, t) => {
      var n = {
        kind: "Document",
        definitions: [{
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
          end: 537
        }
      };
      n.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function s(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !i[a] && (i[a] = !0, !0)
        }))
      }

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      n.definitions = n.definitions.concat(s(t(90588).definitions)), n.definitions = n.definitions.concat(s(t(78417).definitions));
      var l = {};

      function d(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), l[e.name.value] = a
        }
      })), e.exports = n, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = l[a] || new Set,
          i = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            i.has(e) || (i.add(e), (l[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var n = d(e, a);
          n && t.definitions.push(n)
        })), t
      }(n, "NewswireList")
    }
  }
]);