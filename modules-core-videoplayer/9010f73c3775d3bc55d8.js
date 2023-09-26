(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [872], {
    4872: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        PlayerWithInfo: () => c,
        VideoWithPlaylist: () => T,
        default: () => j,
        useVideoData: () => s.CP
      });
      var n = i(8976),
        t = i(5812),
        d = i(6493),
        l = i(610),
        s = i(8590);
      const o = {
        embed: "adf6a2318b1780ffedc5d4b57a6ce58d98e1",
        details: "adf6a2318b1780ffed0e45925b31e0dd9b3d",
        top: "adf6a2318b1780ffca606836a2761a2226d8"
      };
      var r = i(6160);
      const c = e => {
        let {
          autoplay: a = !0,
          videoId: i,
          videoChangeCallback: c
        } = e;
        const {
          loading: f,
          video: u
        } = (0, s.CP)({
          id: i
        });
        return !u || f ? (0, r.jsx)(d.Z, {
          hero: !0,
          children: (0, r.jsx)(t.Z, {})
        }) : (0, r.jsxs)("section", {
          className: o.marquee,
          children: [(0, r.jsx)("div", {
            className: o.embed,
            children: (0, r.jsx)(l.Z, {
              id: u.id,
              context: "site",
              autoplay: a,
              wrapper: !1,
              videoChangeCallback: c
            })
          }), (0, r.jsxs)("div", {
            className: o.details,
            children: [(0, r.jsxs)("div", {
              className: o.top,
              children: [(0, r.jsx)("h5", {
                children: (0, r.jsx)(n.A, {
                  to: `/videos?type=game&gameId=${u?.game?.sku_id??u.game.id}`,
                  children: u.game.title
                })
              }), (0, r.jsx)("time", {
                dateTime: u.created,
                children: u.created_formatted
              })]
            }), (0, r.jsx)("h2", {
              children: u.title
            }), (0, r.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: u.description
              }
            })]
          })]
        })
      };
      var f = i(4932),
        u = i(1424),
        m = i(3653),
        v = i.n(m),
        k = i(4859),
        p = i(6711),
        b = i(9206),
        h = i(9878);
      const g = {
          itemContainer: "adf6a2318b1780ffadda1107f986a15ecce7",
          playIcon: "adf6a2318b1780ffc2a894470a1d23302653",
          thumbnail: "adf6a2318b1780ffaef1b1e2e36a2e39fac5",
          active: "adf6a2318b1780ffaa393140e74a0796f7f0",
          iconAndThumbnail: "adf6a2318b1780fffc1f13bd15d3b23199e0",
          playIconContainer: "adf6a2318b1780ffb51d94ce719addd90aa4",
          activeVideoTextIndicator: "adf6a2318b1780ffe87fb17a44134b7cf737",
          textContainer: "adf6a2318b1780ffff056f85c210ec656b05"
        },
        y = (0, f.forwardRef)(((e, a) => {
          let {
            title: n,
            thumbnail: t,
            active: d = !1,
            onClick: l = (() => {})
          } = e;
          const {
            formatMessage: o
          } = (0, h.YB)();
          return (0, r.jsxs)("button", {
            ref: a,
            className: [g.itemContainer, d ? g.active : ""].filter((e => e)).join(" "),
            onClick: l,
            type: "button",
            children: [(0, r.jsxs)("div", {
              className: g.iconAndThumbnail,
              children: [(0, r.jsx)("div", {
                className: g.playIconContainer,
                children: (0, r.jsx)("img", {
                  className: g.playIcon,
                  src: i(2938),
                  alt: `Play ${n}`,
                  "aria-label": `Play ${n}`
                })
              }), (0, r.jsx)("div", {
                className: g.thumbnail,
                style: {
                  "--background-image": `url(${t})`
                },
                children: d && (0, r.jsx)("span", {
                  className: g.activeVideoTextIndicator,
                  children: o(s.sY.videoplayer_playlist_active_badge)
                })
              })]
            }), (0, r.jsx)("div", {
              className: g.textContainer,
              children: (0, r.jsx)("h3", {
                children: n
              })
            })]
          })
        })),
        N = {
          playlist: "adf6a2318b1780ffb02682c91020feb255da",
          videos: "adf6a2318b1780ffda75923177ac9a87dd44",
          userNotScrolledToTopOfList: "adf6a2318b1780ffe05356dcbb6935f79ed7",
          userNotScrolledToBottomOfList: "adf6a2318b1780ffdaa065c7238b99988833"
        },
        x = e => {
          let {
            title: a,
            activeVideoId: i,
            videos: n = [],
            onVideoItemClick: t = (() => {})
          } = e;
          const {
            track: d
          } = (0, p.useGtmTrack)(), l = (0, f.useRef)(null), s = (0, f.createRef)(), [o, c] = (0, f.useState)(null), [u, m] = (0, f.useState)(i), [v, k] = (0, f.useState)(!0), [b, h] = (0, f.useState)(!1);
          return (0, f.useEffect)((() => {
            if (!o) return;
            const e = o.offsetTop - l.current.offsetTop;
            l.current.scroll({
              top: e,
              behavior: "smooth"
            })
          }), [o, l]), (0, f.useEffect)((() => {
            c(s?.current)
          }), [s]), (0, f.useEffect)((() => {
            m(i)
          }), [i]), (0, r.jsxs)("section", {
            className: N.playlist,
            children: [(0, r.jsx)("h2", {
              children: a
            }), (0, r.jsx)("div", {
              ref: l,
              className: [N.videos, v ? "" : N.userNotScrolledToTopOfList, b ? "" : N.userNotScrolledToBottomOfList].filter((e => e)).join(" "),
              onScroll: e => {
                let {
                  target: {
                    scrollTop: a,
                    scrollHeight: i,
                    clientHeight: n
                  }
                } = e;
                0 === a ? k(!0) : a + n === i ? h(!0) : (k(!1), h(!1))
              },
              children: n.map(((e, a) => (0, r.jsx)(y, {
                ref: e.id === u ? s : null,
                title: e.title,
                thumbnail: `${e.screencap}?im=Resize=400`,
                active: e.id === u,
                onClick: () => ((e, a) => {
                  t && t(e, a), m(e), d({
                    event: "video_thumbnail_click",
                    link_url: `?video=${e}`
                  })
                })(e.id, a)
              }, e.id)))
            })]
          })
        },
        S = {
          videoWithPlaylistContainer: "adf6a2318b1780fff6aa5059eaedbf70ac0d"
        },
        T = e => {
          let {
            className: a,
            locale: i,
            id: n,
            tagIds: d = [],
            playlistTitle: s,
            groupTypes: o = ["trailer", "feature"],
            autoplay: c = !0,
            currentVideoId: m,
            isModal: h = !1
          } = e;
          const {
            track: g
          } = (0, p.useGtmTrack)(), y = {
            groupTypes: o,
            tagIds: d,
            locale: i
          }, [N, T] = (0, u.useSearchParams)(), [j, _] = (0, f.useState)(0), {
            loading: I,
            data: C
          } = (0, k.useQuery)(b.videos, {
            variables: y
          }), V = C?.videos?.results;
          return (0, f.useEffect)((() => {
            const e = Number(N.get("video"));
            if (!V || !e) return;
            const a = v().findIndex(V, (a => {
              let {
                id: i
              } = a;
              return i === e
            }));
            _(a), h && g({
              event: "trackPageview"
            })
          }), [N.get("video"), V]), (0, f.useEffect)((() => {
            const e = Number(N.get("video"));
            if (V && (m || e)) {
              const a = V.find((a => {
                  let {
                    id: i
                  } = a;
                  return e ? i === e : i === m
                })),
                i = V.indexOf(a);
              a && i && j !== i && _(i)
            }
          }), [V]), !I && C && V ? (0, r.jsxs)("section", {
            className: [S.videoWithPlaylistContainer, a ?? ""].filter((e => e)).join(" "),
            id: n ?? "",
            children: [(0, r.jsx)(l.Z, {
              id: V[j]?.id,
              context: "site",
              autoplay: c,
              wrapper: !1,
              onVideoComplete: () => {
                const e = j + 1 < V.length ? j + 1 : 0;
                T({
                  video: V[e].id
                }), g({
                  event: "trackEvent",
                  event_category: "Player Event",
                  event_action: `Video played to end and next video queued (id: ${V[e].id})`,
                  event_label: "video_played_to_end"
                })
              },
              locale: i
            }), (0, r.jsx)(x, {
              activeVideoId: V[j]?.id,
              title: s,
              videos: V,
              onVideoItemClick: e => {
                T({
                  video: e
                }), g({
                  event: "trackEvent",
                  event_category: "Player Event",
                  event_action: `Playlist item with (video: ${e}) was clicked.`,
                  event_label: "click"
                })
              }
            })]
          }) : (0, r.jsx)(t.Z, {})
        },
        j = l.Z
    },
    9206: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "videos"
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
                value: "tagIds"
              }
            },
            type: {
              kind: "ListType",
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
                value: "groupTypes"
              }
            },
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
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
                  value: "tagIds"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagIds"
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
                  value: "100"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "groupTypes"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "groupTypes"
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
                        value: "id"
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
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 282
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
        body: "query videos($locale: String!, $tagIds: [Int], $groupTypes: [String]) {\n    videos(\n        locale: $locale\n        tagIds: $tagIds\n        limit: 100\n        groupTypes: $groupTypes\n    ) {\n        results {\n            title\n            id\n            screencap\n        }\n    }\n}\n",
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
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.videos = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var d = n[a] || new Set,
          l = new Set,
          s = new Set;
        for (d.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var o = s;
          s = new Set, o.forEach((function(e) {
            l.has(e) || (l.add(e), (n[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "videos")
    },
    2938: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3ffdb1e004aa0d8bde9d.svg"
    }
  }
]);
//# sourceMappingURL=9010f73c3775d3bc55d8.js.map