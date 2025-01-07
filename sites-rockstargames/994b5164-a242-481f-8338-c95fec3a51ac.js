! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "994b5164-a242-481f-8338-c95fec3a51ac", e._sentryDebugIdIdentifier = "sentry-dbid-994b5164-a242-481f-8338-c95fec3a51ac")
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
      var i = t(60285);
      const n = {
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
          target: c = "_self",
          ...o
        } = e;
        const m = [n.button, n[r], a].join(" ");
        return l ? (0, s.jsx)(i.A, {
          ...o,
          to: l,
          className: m,
          onClick: d,
          target: c,
          children: t
        }) : (0, s.jsx)("button", {
          ...o,
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
      var i = t(71403),
        n = t(89779),
        s = t(42756),
        r = t(40207),
        l = t(60285),
        d = t(31716);
      const c = {
        newswireBlock: "rockstargames-sites-rockstargamesa793f470884d207243d6c3caac8ad811",
        info: "rockstargames-sites-rockstargamesd50f6d2bc5f983c05311292acb4c78a5",
        title: "rockstargames-sites-rockstargamescc389449dc1495fc9c323fc2c547857d",
        newswireBlockNoSpecialOrder: "rockstargames-sites-rockstargamesffd167124f27c8e26a147f49c88796e5",
        preview: "rockstargames-sites-rockstargamesbbfbcf32c8c892ea29f4178949643475",
        previewMobile: "rockstargames-sites-rockstargamesf88852766488b21a28c42d230ea529a1",
        top: "rockstargames-sites-rockstargamesfa1a6f4c7d94b94f5af2dc1ac9af79f1",
        startAnimation: "rockstargames-sites-rockstargamese380e8c67066df6f33fc018341ea96e5"
      };
      var o = t(46632);
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
        } = (0, r.useGtmTrack)(), [g] = (0, n.useSearchParams)(), p = m.preview_images_parsed.newswire_block, v = {
          default: 0 !== t || u ? p.square || p.d16x9 || p._fallback : p.d16x9 || p.square || p._fallback,
          mobile: p.square || p._fallback
        }, [b, w] = (0, s.usePreloadImg)(v.default), N = {
          default: {
            backgroundImage: `url(${v.default})`
          },
          mobile: {
            backgroundImage: `url(${v.mobile})`
          }
        }, h = (0, i.useCallback)((() => {
          k({
            event: "card_click",
            card_id: m.id,
            card_name: m.name_slug.replace(/-/g, " "),
            link_url: m.url,
            position: t,
            element_placement: a
          })
        }), [m]);
        return (0, o.jsx)(l.A, {
          to: m.url,
          className: [c.newswireBlock, u ? c.newswireBlockNoSpecialOrder : "", null !== b ? c.startAnimation : ""].join(" "),
          focused: f,
          onClick: h,
          children: (0, o.jsxs)(o.Fragment, {
            children: [0 !== t || g.get("tag_id") ? (0, o.jsx)("div", {
              className: c.preview,
              style: N.default
            }) : (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)("div", {
                className: c.previewMobile,
                style: N.mobile
              }), (0, o.jsx)("div", {
                className: c.preview,
                style: N.default
              })]
            }), (0, o.jsxs)("div", {
              className: c.info,
              children: [(0, o.jsxs)("div", {
                className: c.top,
                children: [m.primary_tags.length ? (0, o.jsx)(d.A, {
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
    31716: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var i = t(60285);
      const n = {
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
          className: [n.tag, a].join(" "),
          children: [(0, s.jsx)("i", {}), r]
        });
        return void 0 !== t ? (0, s.jsx)(i.A, {
          to: t,
          children: d
        }) : d
      }
    },
    24486: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var i = t(71403),
        n = t(42756),
        s = t(72558);
      t(49853);
      const r = {
        pillBtn: "rockstargames-sites-rockstargamesafd0af959edb4a463c41ad4e9cc5dadc",
        selected: "rockstargames-sites-rockstargamesbcd59aa4a9e88d86a2cbe8d4972f8f51",
        related: "rockstargames-sites-rockstargamesa748ad776070dab831edc1f67f66af08",
        posts: "rockstargames-sites-rockstargamesc0aa38678decd13ca38886b4547efedd",
        just1post: "rockstargames-sites-rockstargamesb1a31ddf7fd4458ee860d354a6a0ac92"
      };
      var l = t(46632);
      (0, n.withTranslations)((e => {
        let {
          posts: a,
          t
        } = e;
        return (0, l.jsxs)("section", {
          className: r.related,
          children: [(0, l.jsx)("h2", {
            children: t("Related Stories")
          }), (0, l.jsx)("div", {
            className: [r.posts, 1 === a.length ? r.just1post : ""].join(" "),
            children: a.map((e => (0, l.jsx)(s.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        })
      })), t(31716);
      const d = {
          newswireBlocks: "rockstargames-sites-rockstargamesc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-rockstargamesc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        c = (0, n.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: n,
            gtmTrack: r,
            relativeTo: c
          } = e;
          const [o, m] = (0, i.useState)(null);
          return (0, i.useEffect)((() => {
            if (!n.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            n.map(((t, i) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: i + 1,
                list: a
              })
            })), r(e), m(n.length)
          }), [n.length]), (0, l.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [d.newswireBlocks, t ? d.noSpecialOrder : "", d.contextHome].join(" "),
            children: n.map(((e, i) => (0, l.jsx)(s.A, {
              section: a,
              index: i,
              noSpecialOrder: t,
              post: e,
              focused: i === o
            }, e.id)))
          })
        }))
    },
    49853: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var i = t(71403),
        n = t(89779),
        s = t(58407),
        r = t(42756),
        l = t(40207),
        d = t(22778),
        c = t(24486),
        o = t(31955),
        m = t.n(o),
        u = t(46632);
      const f = (0, r.withTranslations)((e => {
        let {
          section: a = "",
          relativeTo: t = "",
          tagId: o = null,
          metaUrl: f = "/newswire",
          t: k
        } = e;
        const {
          track: g
        } = (0, l.useGtmTrack)(), p = (0, r.useLocale)(), [v, b] = (0, n.useSearchParams)(), {
          tagId: w = null
        } = (0, n.useParams)(), [N, h] = (0, i.useState)(w ?? o ?? v.get("tag_id")), [y, S] = (0, i.useState)(1), [_, x] = (0, i.useState)(20), [j, A] = (0, i.useState)([]), [I, T] = (0, i.useState)(null), [V, {
          loading: E,
          data: D
        }] = (0, s.useLazyQuery)(m(), {
          variables: {
            tagId: Number(N),
            page: y,
            metaUrl: f,
            limit: _,
            locale: p
          }
        });
        return (0, i.useEffect)((() => {
          S(1), A([]), x(20), h(w ?? o ?? v.get("tag_id")), V()
        }), [v.get("tag_id"), w, o]), (0, i.useEffect)((() => {
          const e = j;
          D?.posts?.paging && T(D?.posts?.paging), D?.posts?.results && A(e.concat(D?.posts?.results))
        }), [D]), (0, i.useEffect)((() => {
          (() => {
            const e = v.get("page"),
              a = Number(e ?? 1);
            x(20 * a), V()
          })()
        }), []), j.length ? (0, u.jsxs)("div", {
          "data-testid": "newswire-list",
          children: [(0, u.jsx)(c.A, {
            section: a,
            posts: j,
            relativeTo: t,
            noSpecialOrder: null !== N
          }), null !== I && I.nextPage ? (0, u.jsx)(d.A, {
            "data-testid": "more-stories",
            onClick: e => {
              const a = v.get("page"),
                t = Number(a ?? y) + 1;
              S(t), 20 !== _ && x(20), V(), b({
                page: String(t)
              }, {
                replace: !0
              }), g({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: E,
            context: "secondary",
            children: k("More Stories")
          }) : ""]
        }) : null
      }))
    },
    35275: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => c
      });
      var i = t(71403),
        n = t(49853),
        s = t(70396),
        r = t(42756),
        l = t(79286);
      var d = t(46632);
      const c = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: t,
          setNormalLogo: r
        } = (0, s.useRockstarLocalState)();
        return (0, i.useEffect)((() => (t([{
          href: "/newswire",
          title: a("Newswire")
        }], ""), () => {
          r(!0), t()
        })), []), (0, d.jsxs)(d.Fragment, {
          children: [(0, d.jsx)("div", {
            className: "rockstargames-sites-rockstargamesb7f93a0d98bb3eaac82ba7d6aef63890",
            "data-testid": "newswire-list",
            children: (0, d.jsx)(n.A, {
              section: "Newswire",
              t: a
            })
          }), (0, d.jsx)(l.A, {})]
        })
      }))
    },
    31955: (e, a, t) => {
      var i = {
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
          end: 568
        }
      };
      i.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !n[a] && (n[a] = !0, !0)
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
      i.definitions = i.definitions.concat(s(t(90588).definitions)), i.definitions = i.definitions.concat(s(t(78417).definitions));
      var l = {};

      function d(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), l[e.name.value] = a
        }
      })), e.exports = i, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = l[a] || new Set,
          n = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            n.has(e) || (n.add(e), (l[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var i = d(e, a);
          i && t.definitions.push(i)
        })), t
      }(i, "NewswireList")
    }
  }
]);