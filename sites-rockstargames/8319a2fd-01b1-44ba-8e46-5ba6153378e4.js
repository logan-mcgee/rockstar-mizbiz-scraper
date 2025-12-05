try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8319a2fd-01b1-44ba-8e46-5ba6153378e4", e._sentryDebugIdIdentifier = "sentry-dbid-8319a2fd-01b1-44ba-8e46-5ba6153378e4")
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
  [6058], {
    18163: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => h
      });
      var n = i(42295),
        t = i(62229),
        s = i(9623),
        d = i(2918),
        l = i(95966),
        r = i(81788),
        o = i(87731),
        m = i.n(o),
        c = i(14200),
        u = i(29625),
        k = i(91179);
      const v = {
          active: "rockstargames-sites-rockstargamese35688e0d87409e3aef95ffb624d94f4",
          carousel: "rockstargames-sites-rockstargamesbc3f1abaac4c17c0e9aaac5fccfc6f7e",
          cta: "rockstargames-sites-rockstargamesf40c40ed1bc4242a32bc0628eea34048",
          disableClick: "rockstargames-sites-rockstargamesfcd11cd5895147a9e08f8f4026d68d94",
          dots: "rockstargames-sites-rockstargamese0ca3ed410818f0961345606a96f03ee",
          dragging: "rockstargames-sites-rockstargamesb335b03fce6834b86318f3d7cbf3fab6",
          gameTitle: "rockstargames-sites-rockstargamesb5d3df350466b14e4b419bdb479b4064",
          info: "rockstargames-sites-rockstargamesa4057ef942e10ebeedb1370b08c3c32b",
          items: "rockstargames-sites-rockstargamesd30be9a5f31ff7fabf20969eec3200f1",
          slidesContent: "rockstargames-sites-rockstargamesc4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-sites-rockstargamescdb5c063bfc35cfbaaaefc68a77c1b07",
          title: "rockstargames-sites-rockstargamese66c271fbbc8b6e431fc5d466c57479c",
          track: "rockstargames-sites-rockstargamesefe7112432da76c65f293853b4c942d1",
          videoTitle: "rockstargames-sites-rockstargamesed4138b1e7fecd4b6d29f0e1bef1fdfd"
        },
        g = (0, r.defineMessages)({
          learn_more: {
            id: "carousel_learn_more",
            description: "Carousel learn more button text",
            defaultMessage: "Learn More"
          },
          watch_more: {
            id: "carousel_watch_more",
            description: "Carousel watch more button text",
            defaultMessage: "Watch Now"
          }
        }),
        f = (0, i(19732).g)(({
          videos: e
        }) => {
          const a = (0, l.useLocale)(),
            {
              formatMessage: i
            } = (0, r.useIntl)(),
            {
              track: s
            } = (0, d.useGtmTrack)(),
            {
              setBodyIsLocked: o
            } = (0, l.useBodyScrollable)("VideoCarousel"),
            [f, b] = (0, t.useState)(0),
            [N, p] = (0, t.useState)(0),
            S = (0, t.useRef)(null),
            h = (0, t.useRef)(null);
          (0, t.useEffect)(() => {
            if (!S.current || !h.current) return;
            const a = new(m())(S.current);
            a.get("press").set({
              time: 0
            }), a.get("tap").set({
              time: 150
            });
            const i = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              n = () => {
                b(f - 1 < 0 ? 0 : f - 1), p(0)
              },
              t = () => {
                const a = f + 1 >= e.length - 1 ? e.length - 1 : f + 1;
                b(a), p(0)
              },
              s = e => {
                p(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !h.current?.classList.contains(v.dragging) || i() && o(!0)
              },
              d = () => {
                i() && o(!1), p(0)
              },
              l = e => {
                "press" === e.type && S.current?.classList.add(`${v.disableClick}`), "tap" === e.type && (S.current?.classList.remove(`${v.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              r = () => {
                i() && o(!1), S.current && S.current.classList.remove(`${v.disableClick}`)
              },
              c = () => {
                i() && o(!1)
              };
            return h.current.addEventListener("transitionend", c), a.on("swiperight", n), a.on("swipeleft", t), a.on("pan", s), a.on("panend", d), a.on("press tap", l), a.on("pressup", r), () => {
              a.off("swiperight", n), a.off("swipeleft", t), a.off("pan", s), a.off("panend", d), a.off("press tap", l), a.off("pressup", r), h.current && h.current.removeEventListener("transitionend", c), p(0)
            }
          }, [S.current, f]);
          const V = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", i(a ? g.learn_more : g.watch_more)]
          };
          return (0, n.jsxs)("section", {
            className: v.carousel,
            children: [(0, n.jsx)("div", {
              className: v.track,
              ref: S,
              children: (0, n.jsx)("div", {
                className: `${v.items} ${0!==N?v.dragging:""}`,
                ref: h,
                style: {
                  transform: `translateX(calc(-${100*f}% + ${N}px))`
                },
                children: e.map((e, a) => {
                  const [i, t, s] = V(e);
                  return (0, n.jsx)(c.A, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": t,
                    to: t,
                    className: f === a ? v.active : "",
                    role: "link",
                    title: i,
                    tabIndex: f === a ? 0 : -1,
                    target: s,
                    children: (0, n.jsx)(k.s, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                })
              })
            }), (0, n.jsxs)("div", {
              className: v.slidesContent,
              children: [(0, n.jsx)("div", {
                className: v.text,
                children: e.map((e, i) => {
                  const [t, d, l, r] = V(e);
                  return (0, n.jsxs)(c.A, {
                    className: [v.info, i === f ? v.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": d,
                    to: d,
                    role: "link",
                    title: t,
                    tabIndex: f === i ? 0 : -1,
                    target: l,
                    children: [(0, n.jsxs)("div", {
                      className: v.title,
                      children: [(0, n.jsxs)("div", {
                        className: v.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, n.jsx)("h2", {
                        className: v.videoTitle,
                        children: t
                      })]
                    }), (0, n.jsx)(u.A, {
                      className: v.cta,
                      onClick: (o = d, () => {
                        s({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: o,
                          element_placement: "video carousel"
                        })
                      }),
                      children: r
                    })]
                  }, e.id);
                  var o
                })
              }), (0, n.jsx)("section", {
                className: v.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map((e, a) => (0, n.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => b(a),
                  className: f === a ? v.active : "",
                  type: "button"
                }, e.id))
              })]
            })]
          })
        });
      var b = i(15221),
        N = i(87790);
      const p = "rockstargames-sites-rockstargamese4c9440250394cde6e2c3bc2220470d4";
      var S = i(81187);
      const h = (0, l.withTranslations)(({
        t: e
      }) => {
        const {
          setBreadcrumb: a,
          setNormalLogo: i
        } = (0, N.b)(), d = (0, l.useQueryParams)(), [r, o] = (0, t.useState)({}), {
          data: m
        } = (0, l.useQuery)(S.VideosList, {
          variables: r,
          skip: !Object.entries(r).length,
          autoSetLoading: !0
        }), {
          search: c
        } = (0, s.useLocation)();
        if ((0, t.useEffect)(() => {
            window.scrollTo(0, 0)
          }, [c]), (0, t.useEffect)(() => (a([{
            href: "/videos",
            title: e("Videos")
          }]), () => {
            a()
          }), []), (0, t.useEffect)(() => {
            o({
              ...r,
              type: d.get("type"),
              gameId: d.get("gameId"),
              index: null === d.get("type"),
              gtaoSessionsEpisodes: "78cs3289" === d.get("gameId")
            })
          }, [d.get("type"), d.get("gameId")]), (0, t.useEffect)(() => (i(!1), () => i(!0)), []), !m) return null;
        if (m?.game && m?.gameVideos) return (0, n.jsxs)("div", {
          className: p,
          children: [(0, n.jsx)(b.A, {
            vids: m.gameVideos.results,
            title: e("Videos from %s").replace("%s", m.game.title)
          }), m?.gtaosessions?.results && (0, n.jsx)(b.A, {
            vids: m.gtaosessions.results,
            title: e("GTA Online Sessions Episodes")
          })]
        });
        const {
          games: u,
          gtao: k,
          gtaVI: v,
          latest: g,
          rdo: h
        } = m;
        return (0, n.jsx)("div", {
          className: p,
          children: r.type ? "" : (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(f, {
              videos: g.results,
              t: e
            }), (0, n.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesbeb129d516377f758cb0e943deffe1bc",
              children: [(0, n.jsx)(b.A, {
                vids: v.results,
                title: e("Videos from %s").replace("%s", "Grand Theft Auto VI")
              }), (0, n.jsx)(b.A, {
                vids: k.results,
                title: e("Videos from %s").replace("%s", "Grand Theft Auto Online")
              }), (0, n.jsx)(b.A, {
                vids: h.results,
                title: e("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, n.jsx)(b.A, {
                games: u,
                title: e("By Game")
              })]
            })]
          })
        })
      })
    },
    29625: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => d
      });
      var n = i(42295),
        t = i(14200);
      const s = {
          button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
        },
        d = ({
          className: e = "",
          children: a,
          context: i = "",
          to: d,
          onClick: l,
          target: r = "_self",
          ...o
        }) => {
          const m = [s.button, s[i], e].join(" ");
          return d ? (0, n.jsx)(t.A, {
            ...o,
            to: d,
            className: m,
            onClick: l,
            target: r,
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
                    }, {
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
          end: 1632
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
        body: 'fragment videoFields on RockstarGames_Videos_Model_Entity_Video_o {\n    id\n    title\n    screencap\n    game {\n        id\n        title\n        titleSlug\n    }\n}\n\nquery VideosList(\n    $gameId: String\n    $locale: String!\n    $index: Boolean = false\n    $gtaoSessionsEpisodes: Boolean = false\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/videos") {\n        title\n    }\n    latest: videos(locale: $locale, limit: 4, finder: "featured") {\n        results {\n            ...videoFields\n        }\n    }\n    gtaVI: videos(locale: $locale, gameId: "775700as") @include(if: $index) {\n        results {\n            ...videoFields\n            youtubeOnly\n            youtubeId\n        }\n    }\n    rdo: videos(locale: $locale, gameId: "rra9a70r", limit: 1000)\n        @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    gtao: videos(locale: $locale, gameId: "78cs3289", limit: 1000)\n        @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    gtaosessions: videos(\n        locale: $locale\n        finder: "grandTheftAutoOnlineSesssionsEpisodesVideos"\n    ) @include(if: $gtaoSessionsEpisodes) {\n        results {\n            ...videoFields\n        }\n    }\n    games(locale: $locale, finder: "hasVideos") @include(if: $index) {\n        results {\n            id\n            titleSlug\n            title\n        }\n    }\n    gameVideos: videos(locale: $locale, gameId: $gameId, limit: 1000)\n        @skip(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    game(locale: $locale, id: $gameId) @skip(if: $index) {\n        title\n    }\n}\n',
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
          l = new Set;
        for (s.forEach(function(e) {
            l.add(e)
          }); l.size > 0;) {
          var r = l;
          l = new Set, r.forEach(function(e) {
            d.has(e) || (d.add(e), (n[e] || new Set).forEach(function(e) {
              l.add(e)
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
      }), e.exports = a, e.exports.videoFields = s(a, "videoFields"), e.exports.VideosList = s(a, "VideosList")
    }
  }
]);