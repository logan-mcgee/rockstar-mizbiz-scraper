! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "69ab8be1-eef2-4d6a-a0ea-9bb61c72f287", e._sentryDebugIdIdentifier = "sentry-dbid-69ab8be1-eef2-4d6a-a0ea-9bb61c72f287")
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
  [5102], {
    24079: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var i = t(71403),
        s = t(42756);
      const n = {
        img: "rockstargames-sites-rockstargamese3f505a2281df28eb1acdf2d586e7fbd",
        wide: "rockstargames-sites-rockstargamesc3a6d60e0087f92bbf7062fe2f36e200"
      };
      var r = t(46632);
      (0, s.importAll)(t(43202));
      const d = e => {
        let {
          isWideCard: a = !1,
          size: d = 640,
          title: m,
          titleSlug: o
        } = e;
        const {
          isMobile: c
        } = (0, s.useWindowResize)(), l = (0, i.useMemo)((() => {
          let e = "";
          return a && (e = c ? t(17426)(`./${o}/mobile.png`) : t(65392)(`./${o}/desktop.png`)), e || (e = t(32781)(`./${o}.jpg`), e += `?im=Resize=${d}`), e
        }), [c, o]), [g] = (0, s.usePreloadImg)(l);
        return (0, r.jsx)("div", {
          role: "img",
          "aria-label": m,
          className: [n.img, g ? n.startAnimation : "", a ? n.wide : ""].join(" "),
          style: {
            backgroundImage: `url(${l})`
          }
        })
      }
    },
    63852: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => i.A,
        N: () => d
      });
      var i = t(24079),
        s = t(60285);
      const n = {
        fobLink: "rockstargames-sites-rockstargamesfded54fb94f7325c5a0b57590585b175",
        wide: "rockstargames-sites-rockstargamesa9b41f96042bda8a8c77b7b7b10f84d5"
      };
      var r = t(46632);
      const d = e => {
        let {
          game: a,
          to: t
        } = e;
        const {
          titleSlug: d,
          urlOfficial: m = ""
        } = a, o = ["VI"].includes(d);
        return (0, r.jsx)(s.A, {
          "data-gtm-category": "Games",
          "data-gtm-action": "Game Click-through",
          "data-gtm-label": d,
          "data-testid": `${d}-gamecard`,
          to: t ?? m,
          target: "_self",
          className: [n.fobLink, o ? n.wide : ""].join(" "),
          reloadDocument: o,
          children: (0, r.jsx)(i.A, {
            title: a.title,
            titleSlug: d,
            isWideCard: o
          })
        })
      }
    },
    72558: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var i = t(71403),
        s = t(89779),
        n = t(42756),
        r = t(40207),
        d = t(60285),
        m = t(31716);
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
      const l = e => {
        let {
          section: a = "",
          index: t,
          post: l,
          noSpecialOrder: g = !1,
          focused: p
        } = e;
        const {
          track: u
        } = (0, r.useGtmTrack)(), [f] = (0, s.useSearchParams)(), k = l.preview_images_parsed.newswire_block, b = {
          default: 0 !== t || g ? k.square || k.d16x9 || k._fallback : k.d16x9 || k.square || k._fallback,
          mobile: k.square || k._fallback
        }, [v, j] = (0, n.usePreloadImg)(b.default), h = {
          default: {
            backgroundImage: `url(${b.default})`
          },
          mobile: {
            backgroundImage: `url(${b.mobile})`
          }
        }, _ = (0, i.useCallback)((() => {
          u({
            event: "card_click",
            card_id: l.id,
            card_name: l.name_slug.replace(/-/g, " "),
            link_url: l.url,
            position: t,
            element_placement: a
          })
        }), [l]);
        return (0, c.jsx)(d.A, {
          to: l.url,
          className: [o.newswireBlock, g ? o.newswireBlockNoSpecialOrder : "", null !== v ? o.startAnimation : ""].join(" "),
          focused: p,
          onClick: _,
          children: (0, c.jsxs)(c.Fragment, {
            children: [0 !== t || f.get("tag_id") ? (0, c.jsx)("div", {
              className: o.preview,
              style: h.default
            }) : (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)("div", {
                className: o.previewMobile,
                style: h.mobile
              }), (0, c.jsx)("div", {
                className: o.preview,
                style: h.default
              })]
            }), (0, c.jsxs)("div", {
              className: o.info,
              children: [(0, c.jsxs)("div", {
                className: o.top,
                children: [l.primary_tags.length ? (0, c.jsx)(m.A, {
                  title: l.primary_tags[l.primary_tags.length > 1 && 722 === l.primary_tags[0].id ? 1 : 0].name
                }) : "", (0, c.jsx)("time", {
                  dateTime: l.created,
                  children: l.created_formatted
                })]
              }), (0, c.jsx)("h5", {
                className: o.title,
                dangerouslySetInnerHTML: {
                  __html: l.title
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
      const s = {
        tag: "rockstargames-sites-rockstargamesed77774d2704bc0ebc0ac156542ae053"
      };
      var n = t(46632);
      const r = e => {
        let {
          className: a,
          href: t,
          title: r,
          style: d
        } = e;
        const m = (0, n.jsxs)("div", {
          style: d,
          className: [s.tag, a].join(" "),
          children: [(0, n.jsx)("i", {}), r]
        });
        return void 0 !== t ? (0, n.jsx)(i.A, {
          to: t,
          children: m
        }) : m
      }
    },
    67356: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => d,
        N: () => m
      });
      var i = t(42756),
        s = t(60285);
      const n = {
        videoPreview: "rockstargames-sites-rockstargamesc6739cc628fda235abe2bafeb30ad7cf",
        card: "rockstargames-sites-rockstargamesec6e68ffa1188155be202dfef3f92829",
        info: "rockstargames-sites-rockstargamesab8da127fbcdb98f874bc3f1377669a2",
        title: "rockstargames-sites-rockstargamese84fa4b2b140994c96a13607410d30a3",
        screencap: "rockstargames-sites-rockstargamesa322c3d2275cedd594a3b17800154066",
        screencapLoaded: "rockstargames-sites-rockstargamesf68c57f5459778024e5a98918ae61ab2",
        gameTitle: "rockstargames-sites-rockstargamesdebff452a4923aded7de826c081bab5d"
      };
      var r = t(46632);
      const d = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [d] = (0, i.usePreloadImg)(s());
          return (0, r.jsx)("div", {
            className: [n.screencap, d ? n.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        m = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: i,
            size: m,
            toExplicit: o
          } = e;
          const c = o ?? `/videos/${i.id}`,
            l = {
              className: n.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": c
            },
            g = (0, r.jsxs)("div", {
              className: n.card,
              children: [(0, r.jsx)(d, {
                video: i,
                size: m
              }), (0, r.jsxs)("div", {
                className: n.info,
                children: [a ? (0, r.jsx)("div", {
                  className: n.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: i.game.title
                  }
                }) : "", (0, r.jsx)("h5", {
                  className: n.title,
                  dangerouslySetInnerHTML: {
                    __html: i.title
                  }
                })]
              })]
            });
          return t ? (0, r.jsx)("a", {
            href: c,
            target: "_blank",
            ...l,
            children: g
          }) : (0, r.jsx)(s.A, {
            to: c,
            ...l,
            children: g
          })
        }
    },
    85102: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => _
      });
      var i = t(71403),
        s = t(72558);
      const n = "rockstargames-sites-rockstargamesc54c374409e11d1429ce99457cbf7441";
      var r = t(46632);
      const d = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: i,
            page: s,
            className: n
          } = e;
          return (0, r.jsx)("a", {
            href: "#",
            className: s === t.page ? `rockstargames-sites-rockstargamesc0eebf4f915ff9f5cc362e22d6d7d976 ${n??""}` : "",
            onClick: e => {
              e.preventDefault(), i(s)
            },
            children: a
          })
        },
        m = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: i
          } = e;
          if (1 === a.pageCount) return null;
          const s = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, r.jsxs)("div", {
            className: `rockstargames-sites-rockstargamesa626faab2a5a03e3466dda5c79960575 ${i??""}`,
            children: [a.pageCount > 8 ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(d, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== s[0] ? (0, r.jsx)("div", {
                className: n,
                children: "..."
              }) : ""]
            }) : "", s.map((e => (0, r.jsx)(d, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: i,
              children: e
            }, e))), a.pageCount > 8 ? (0, r.jsxs)(r.Fragment, {
              children: [s.slice(-1)[0] + 1 < a.pageCount ? (0, r.jsx)("div", {
                className: n,
                children: "..."
              }) : "", (0, r.jsx)(d, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var o = t(37017),
        c = t(67356),
        l = t(63852),
        g = t(58407),
        p = t(70396),
        u = t(42756),
        f = t(25076),
        k = t(90648);
      const b = "rockstargames-sites-rockstargamesa6b96f1aa331851eea3b9fad5cb04a8f",
        v = "rockstargames-sites-rockstargamescdc8dd93ce6946707dab221c0a16845e",
        j = k.SearchData ?? SearchDataDefault,
        h = e => {
          let {
            loading: a,
            searchResponse: t,
            activeTab: i
          } = e;
          const [n, d] = (0, f.useSearchParams)();
          let o;
          switch (i) {
            case "posts":
              o = t.posts.results.map((e => (0, r.jsx)(s.A, {
                post: e,
                noSpecialOrder: !0
              }, e.id)));
              break;
            case "games":
              o = t.games.results.map((e => (0, r.jsx)(l.N, {
                game: e
              }, e.id)));
              break;
            case "videos":
              o = t.videos.results.map((e => (0, r.jsx)(c.N, {
                video: e
              }, e.id)));
              break;
            default:
              o = null
          }
          return (0, r.jsxs)(r.Fragment, {
            children: [a ? "" : (0, r.jsx)("section", {
              className: "rockstargames-sites-rockstargamesb6a41ef752e979cced54d95e69679ae9",
              children: (0, r.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc0e4a01d8eeef3f28aaaeea0249d53e8",
                children: o
              })
            }), t[i]?.paging ? (0, r.jsx)("section", {
              className: "rockstargames-sites-rockstargamesc024862ad35278cedeff9669a4045d22",
              children: (0, r.jsx)(m, {
                data: t[i].paging,
                onPageUpdate: e => {
                  d({
                    ...Object.fromEntries([...n]),
                    page: e
                  }), window.scrollTo(0, 0)
                }
              })
            }) : ""]
          })
        },
        _ = (0, u.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            state: {
              search: t
            },
            setSearch: s,
            setTitle: n
          } = (0, p.useRockstarLocalState)(), d = (0, u.useQueryParams)(), [m, c] = (0, i.useState)(null), [l, f] = (0, i.useState)({}), [k, _] = (0, i.useState)(d.get("tab") ?? "games"), {
            data: N = {},
            loading: x
          } = (0, g.useQuery)(j, {
            variables: l,
            skip: !Object.entries(l).length || !l.q,
            autoSetLoading: !0
          });
          return (0, i.useEffect)((() => {
            const e = {
              q: d.get("q"),
              page: Number(d.get("page") ?? 1),
              withGames: !0,
              withPosts: !0,
              withVideos: !0
            };
            f(e), s(d.get("q"))
          }), [d.get("q"), d.get("page"), d.get("tab"), k]), (0, i.useEffect)((() => {
            const e = Object.entries(N).find((e => {
              let [, a] = e;
              return a?.paging?.count > 0
            }))?.[0];
            _(d.get("tab") ?? e ?? "games")
          }), [N, d.get("tab")]), (0, i.useEffect)((() => {
            void 0 !== N?.games?.paging?.count && (c((N?.games?.paging?.count ?? 0) + (N?.videos?.paging?.count ?? 0) + (N?.posts?.paging?.count ?? 0)), n(N?.meta?.title.replace("%s", t)))
          }), [N, k]), Object.entries(l).length ? l.q ? null === m || x ? null : (0, r.jsxs)("div", {
            className: b,
            children: [(0, r.jsx)("section", {
              className: v,
              children: (0, r.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesdb7089be3c829293f97a953a4211ae13",
                children: [(0, r.jsxs)("h4", {
                  children: [x ? a("search-active") : "", x || m ? x ? "" : a("Search results for:") : a("search-over-empty")]
                }), (0, r.jsx)("h1", {
                  children: a("%s").replace("%s", d.get("q"))
                })]
              })
            }), !x && m ? (0, r.jsx)(h, {
              searchResponse: N,
              searchTerm: t,
              activeTab: k,
              t: a
            }) : ""]
          }) : (0, r.jsx)("div", {
            className: b,
            children: (0, r.jsxs)("section", {
              className: v,
              children: [(0, r.jsx)("h3", {
                children: a("Search")
              }), (0, r.jsx)(o.A, {})]
            })
          }) : null
        }))
    },
    90648: (e, a, t) => {
      var i = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "SearchData"
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
                value: "q"
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
                value: "withPosts"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "withGames"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "withVideos"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
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
                  value: "/search/query",
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
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
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
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withGames"
                        }
                      }
                    }]
                  }],
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
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "titleSlug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "urlOfficial"
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
                value: "posts"
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
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "hideExpired"
                },
                value: {
                  kind: "BooleanValue",
                  value: !1
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
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withPosts"
                        }
                      }
                    }]
                  }],
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
            }, {
              kind: "Field",
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
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
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
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "include"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "Variable",
                        name: {
                          kind: "Name",
                          value: "withVideos"
                        }
                      }
                    }]
                  }],
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
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "screencap"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
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
                            value: "title"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "titleSlug"
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
        }],
        loc: {
          start: 0,
          end: 1156
        }
      };
      i.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery SearchData(\n    $locale: String!\n    $q: String!\n    $page: Int!\n    $withPosts: Boolean!\n    $withGames: Boolean!\n    $withVideos: Boolean!\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/search/query") {\n        title\n    }\n    games(locale: $locale, page: $page, q: $q) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withGames) {\n            id\n            title\n            titleSlug\n            urlOfficial\n        }\n    }\n    posts(locale: $locale, page: $page, q: $q, hideExpired: false) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withPosts) {\n            ...postFields\n        }\n    }\n    videos(locale: $locale, page: $page, q: $q) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withVideos) {\n            id\n            title\n            screencap\n            game {\n                id\n                title\n                titleSlug\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !s[a] && (s[a] = !0, !0)
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
      i.definitions = i.definitions.concat(n(t(90588).definitions)), i.definitions = i.definitions.concat(n(t(78417).definitions));
      var d = {};

      function m(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), d[e.name.value] = a
        }
      })), e.exports = i, e.exports.SearchData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [m(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = d[a] || new Set,
          s = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var r = n;
          n = new Set, r.forEach((function(e) {
            s.has(e) || (s.add(e), (d[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var i = m(e, a);
          i && t.definitions.push(i)
        })), t
      }(i, "SearchData")
    },
    43202: (e, a, t) => {
      var i = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./VI/desktop.png": 94699,
        "./VI/mobile.png": 17821,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 43202
    },
    32781: (e, a, t) => {
      var i = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 32781
    },
    65392: (e, a, t) => {
      var i = {
        "./VI/desktop.png": 94699
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 65392
    },
    17426: (e, a, t) => {
      var i = {
        "./VI/mobile.png": 17821
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 17426
    },
    10046: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    58679: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    60104: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    15007: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    94699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    17821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    65682: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    45024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    38910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    58205: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    48057: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    97955: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    99826: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    23686: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    34747: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    44342: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    4019: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    32217: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    63970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    63201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    27976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    57743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    61451: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    67680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    76766: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    61490: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    85010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    85006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    77126: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    15651: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    57741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    85171: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    22006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    89550: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    56204: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    94417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    56647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    31271: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    51789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    7891: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    73195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    93564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    9655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    61748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    40499: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    7737: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    39528: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    55582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    20724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    14786: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    74540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    80173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    81919: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    31527: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    43048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    51652: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    }
  }
]);