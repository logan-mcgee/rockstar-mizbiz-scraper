try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6c529e76-4bbc-4965-b3eb-d2d09e23f7bf", e._sentryDebugIdIdentifier = "sentry-dbid-6c529e76-4bbc-4965-b3eb-d2d09e23f7bf")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7182], {
    15221: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => g
      });
      var n = i(42295),
        d = i(62229),
        t = i(24162),
        s = i(34353),
        l = i(91179),
        r = i(2918),
        o = i(4572),
        m = i.n(o),
        u = i(81788);
      const c = (0, u.defineMessages)({
        next_button_label: {
          id: "next_button_label",
          description: "Aria label to indicate going to the next page of videos",
          defaultMessage: "Next video page"
        },
        previous_button_label: {
          id: "previous_button_label",
          description: "Aria label to indicate going to the previous page of videos",
          defaultMessage: "Previous video page"
        }
      });
      var k = i(56275);
      const v = {
          arrow: "rockstargames-sites-rockstargamescabb1073f7b7f75b799c87d74cfaf0ad",
          arrowNav: "rockstargames-sites-rockstargamesc9b73b78d75dd740e918208a9d615796",
          disabled: "rockstargames-sites-rockstargamesdbe1b06efadb349825f7b9b1b2778c68",
          items: "rockstargames-sites-rockstargamesef63b0224f0cc9fa73a9c4549ad6c7e9",
          next: "rockstargames-sites-rockstargamesbfdf85a5867d26b52a0962be91170e36",
          partial: "rockstargames-sites-rockstargamesab95829b388545f21071fd5bb97c25bb",
          previous: "rockstargames-sites-rockstargamesd7404262ef1f79bde0883b02110a4a5d",
          sectionHeader: "rockstargames-sites-rockstargamesad695c18d6276297e78924feea3e6201",
          track: "rockstargames-sites-rockstargamesa4d3877b3cf6bff0abccdc561c0fe149",
          trackWrapper: "rockstargames-sites-rockstargamesbd79ab04bc93e3bcf79be808e0a06e9b",
          videoList: "rockstargames-sites-rockstargamesbacddb57787eca7b621a046e6f23aaf5"
        },
        g = (0, i(19732).g)((({
          vids: e,
          games: a,
          title: i,
          gameTitleNecessary: o
        }) => {
          const g = (0, u.useIntl)(),
            {
              track: f
            } = (0, r.useGtmTrack)(),
            b = void 0 !== a ? "games" : "videos",
            [N, S] = (0, d.useState)(),
            [p, V] = (0, d.useState)(),
            [y, x] = (0, d.useState)(0),
            F = (0, d.useRef)(null),
            h = (0, d.useRef)(null);
          (0, d.useEffect)((() => {
            V({
              nextEl: h.current,
              prevEl: F.current
            })
          }), [h, F]), (0, d.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), x(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [y]);
          const w = e => {
            N?.slideTo(e)
          };
          let A;
          return A = "games" === b ? (0, n.jsx)(n.Fragment, {
            children: a.results.map(((e, a) => "775700as" !== e.id && (0, n.jsx)(t.qr, {
              className: v.slide,
              onFocus: () => w(a),
              children: (0, n.jsx)(k.N, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, n.jsx)(n.Fragment, {
            children: e.map(((e, a) => (0, n.jsx)(t.qr, {
              className: v.slide,
              onFocus: () => w(a),
              children: (0, n.jsx)(l.N, {
                video: e,
                gameTitleNecessary: o
              })
            }, e.id)))
          }), (0, n.jsxs)("section", {
            className: v.videoList,
            children: [(0, n.jsxs)("h3", {
              className: v.sectionHeader,
              children: [i, (0, n.jsxs)("div", {
                className: v.arrowNav,
                children: [(0, n.jsx)("button", {
                  className: [v.arrow, v.previous].join(" "),
                  type: "button",
                  ref: F,
                  "aria-label": g.formatMessage(c.previous_button_label)
                }), (0, n.jsx)("button", {
                  className: [v.arrow, v.next].join(" "),
                  type: "button",
                  ref: h,
                  "aria-label": g.formatMessage(c.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = N?.slides[N?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, n.jsx)("div", {
              className: [v.items, y % 1 != 0 ? v.partial : ""].join(" "),
              children: (0, n.jsx)("div", {
                className: v.trackWrapper,
                children: y && (0, n.jsx)(t.RC, {
                  className: v.track,
                  slidesPerView: y,
                  spaceBetween: 24,
                  onInit: e => {
                    S(e)
                  },
                  grabCursor: !0,
                  navigation: p,
                  modules: [s.Vx],
                  slideClass: m()("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    f({
                      event: "carousel_next",
                      element_placement: i?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    f({
                      event: "carousel_previous",
                      element_placement: i?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    f({
                      event: "carousel_swipe",
                      element_placement: i?.toLowerCase() ?? ""
                    })
                  },
                  children: A
                })
              })
            })]
          })
        }))
    },
    28330: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => c
      });
      var n = i(42295),
        d = i(62229),
        t = i(9623),
        s = i(2600),
        l = i(15221),
        r = i(95966),
        o = i(87790);
      const m = "rockstargames-sites-rockstargamese4c9440250394cde6e2c3bc2220470d4";
      var u = i(81187);
      const c = (0, r.withTranslations)((({
        t: e
      }) => {
        const {
          setBreadcrumb: a,
          setNormalLogo: i
        } = (0, o.b)(), c = (0, r.useQueryParams)(), [k, v] = (0, d.useState)({}), {
          data: g
        } = (0, r.useQuery)(u.VideosList, {
          variables: k,
          skip: !Object.entries(k).length,
          autoSetLoading: !0
        }), {
          search: f
        } = (0, t.useLocation)();
        if ((0, d.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [f]), (0, d.useEffect)((() => (a([{
            href: "/videos",
            title: e("Videos")
          }]), () => {
            a()
          })), []), (0, d.useEffect)((() => {
            v({
              ...k,
              type: c.get("type"),
              gameId: c.get("gameId"),
              index: null === c.get("type"),
              gtaoSessionsEpisodes: "78cs3289" === c.get("gameId")
            })
          }), [c.get("type"), c.get("gameId")]), (0, d.useEffect)((() => (i(!1), () => i(!0))), []), !g) return null;
        if (g?.game && g?.gameVideos) return (0, n.jsxs)("div", {
          className: m,
          children: [(0, n.jsx)(l.A, {
            vids: g.gameVideos.results,
            title: e("Videos from %s").replace("%s", g.game.title)
          }), g?.gtaosessions?.results && (0, n.jsx)(l.A, {
            vids: g.gtaosessions.results,
            title: e("GTA Online Sessions Episodes")
          })]
        });
        const {
          games: b,
          gtao: N,
          gtaVI: S,
          latest: p,
          rdo: V
        } = g;
        return (0, n.jsx)("div", {
          className: m,
          children: k.type ? "" : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(s.A, {
              videos: p.results,
              t: e
            }), (0, n.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesbeb129d516377f758cb0e943deffe1bc",
              children: [(0, n.jsx)(l.A, {
                vids: S.results,
                title: e("Videos from %s").replace("%s", "Grand Theft Auto VI")
              }), (0, n.jsx)(l.A, {
                vids: N.results,
                title: e("Videos from %s").replace("%s", "Grand Theft Auto Online")
              }), (0, n.jsx)(l.A, {
                vids: V.results,
                title: e("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, n.jsx)(l.A, {
                games: b,
                title: e("By Game")
              })]
            })]
          })
        })
      }))
    },
    81187: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "videoFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Videos_Model_Entity_Video_o"
            }
          },
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
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "VideosList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "gameId"
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
                value: "index"
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
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "gtaoSessionsEpisodes"
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
              value: !1
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
                  value: "/videos",
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
              alias: {
                kind: "Name",
                value: "latest"
              },
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
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "featured",
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gtaVI"
              },
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
                  value: "gameId"
                },
                value: {
                  kind: "StringValue",
                  value: "775700as",
                  block: !1
                }
              }],
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "youtubeOnly"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "youtubeId"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "rdo"
              },
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
                  value: "gameId"
                },
                value: {
                  kind: "StringValue",
                  value: "rra9a70r",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "1000"
                }
              }],
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gtao"
              },
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
                  value: "gameId"
                },
                value: {
                  kind: "StringValue",
                  value: "78cs3289",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "1000"
                }
              }],
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
                      value: "index"
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
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gtaosessions"
              },
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
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "grandTheftAutoOnlineSesssionsEpisodesVideos",
                  block: !1
                }
              }],
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
                      value: "gtaoSessionsEpisodes"
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
                        value: "videoFields"
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
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "hasVideos",
                  block: !1
                }
              }],
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
                      value: "index"
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
                    value: "results"
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
                        value: "titleSlug"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gameVideos"
              },
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
                  value: "gameId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "gameId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "1000"
                }
              }],
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
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "index"
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
                        value: "videoFields"
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
                value: "game"
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
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "gameId"
                  }
                }
              }],
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
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "index"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1614
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
        body: 'fragment videoFields on RockstarGames_Videos_Model_Entity_Video_o {\n    id\n    title\n    screencap\n    game {\n        id\n        title\n        titleSlug\n    }\n}\n\nquery VideosList(\n    $gameId: String\n    $locale: String!\n    $index: Boolean = false\n    $gtaoSessionsEpisodes: Boolean = false\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/videos") {\n        title\n    }\n    latest: videos(locale: $locale, limit: 4, finder: "featured") {\n        results {\n            ...videoFields\n        }\n    }\n    gtaVI: videos(locale: $locale, gameId: "775700as") @include(if: $index) {\n        results {\n            ...videoFields\n            youtubeOnly\n            youtubeId\n        }\n    }\n    rdo: videos(locale: $locale, gameId: "rra9a70r", limit: 1000)\n        @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    gtao: videos(locale: $locale, gameId: "78cs3289", limit: 1000)\n        @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    gtaosessions: videos(\n        locale: $locale\n        finder: "grandTheftAutoOnlineSesssionsEpisodesVideos"\n    ) @include(if: $gtaoSessionsEpisodes) {\n        results {\n            ...videoFields\n        }\n    }\n    games(locale: $locale, finder: "hasVideos") @include(if: $index) {\n        results {\n            id\n            titleSlug\n        }\n    }\n    gameVideos: videos(locale: $locale, gameId: $gameId, limit: 1000)\n        @skip(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    game(locale: $locale, id: $gameId) @skip(if: $index) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function d(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }

      function t(e, a) {
        var i = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[a] || new Set,
          s = new Set,
          l = new Set;
        for (t.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var r = l;
          l = new Set, r.forEach((function(e) {
            s.has(e) || (s.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = d(e, a);
          n && i.definitions.push(n)
        })), i
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.videoFields = t(a, "videoFields"), e.exports.VideosList = t(a, "VideosList")
    }
  }
]);