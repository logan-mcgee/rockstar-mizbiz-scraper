(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [501], {
    2501: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        PlayerWithInfo: () => c,
        VideoWithPlaylist: () => T,
        default: () => j,
        useVideoData: () => s.CP
      });
      var t = i(8976),
        n = i(251),
        d = i(9612),
        o = i(9110),
        s = i(906);
      const r = {
        embed: "rockstargames-modules-core-videoplayercc6cce8aaa55393d90412a425f8183ed",
        details: "rockstargames-modules-core-videoplayera0de13c4a6680ecf14321b54ef6dde76",
        top: "rockstargames-modules-core-videoplayercb6ba448ec12fddfbdc534680f20cdad"
      };
      var l = i(3705);
      const c = e => {
        let {
          autoplay: a = !0,
          videoId: i,
          videoChangeCallback: c
        } = e;
        const {
          loading: m,
          video: u
        } = (0, s.CP)({
          id: i
        });
        return !u || m ? (0, l.jsx)(d.Z, {
          hero: !0,
          children: (0, l.jsx)(n.Z, {})
        }) : (0, l.jsxs)("section", {
          className: r.marquee,
          children: [(0, l.jsx)("div", {
            className: r.embed,
            children: (0, l.jsx)(o.Z, {
              id: u.id,
              context: "site",
              autoplay: a,
              wrapper: !1,
              videoChangeCallback: c
            })
          }), (0, l.jsxs)("div", {
            className: r.details,
            children: [(0, l.jsxs)("div", {
              className: r.top,
              children: [(0, l.jsx)("h5", {
                children: (0, l.jsx)(t.A, {
                  to: `/videos?type=game&gameId=${u?.game?.sku_id??u.game.id}`,
                  children: u.game.title
                })
              }), (0, l.jsx)("time", {
                dateTime: u.created,
                children: u.created_formatted
              })]
            }), (0, l.jsx)("h2", {
              children: u.title
            }), (0, l.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: u.description
              }
            })]
          })]
        })
      };
      var m = i(927),
        u = i(4175),
        v = i(5370),
        f = i.n(v),
        p = i(4859),
        k = i(6711),
        g = i(9525),
        y = i(8601);
      const b = {
          itemContainer: "rockstargames-modules-core-videoplayerd3d20ae5ecbd6bfb215015196c0a3469",
          playIcon: "rockstargames-modules-core-videoplayerf7757d0c8d7da59d6b29e673ebc97b63",
          thumbnail: "rockstargames-modules-core-videoplayerf5d395dc80031622e071c201ee9af865",
          active: "rockstargames-modules-core-videoplayera62577273149f9144afaaf77e78ceb31",
          iconAndThumbnail: "rockstargames-modules-core-videoplayerbd41e01adb312aa1c88492f7bdedc937",
          playIconContainer: "rockstargames-modules-core-videoplayerea21fc201ac622b563ae972e67b7719d",
          activeVideoTextIndicator: "rockstargames-modules-core-videoplayera2d4e1c19b399131c32143a6c5f67d7a",
          textContainer: "rockstargames-modules-core-videoplayere21f20e3ce1f96dcdcf97693d3f511de"
        },
        h = (0, m.forwardRef)(((e, a) => {
          let {
            title: t,
            thumbnail: n,
            active: d = !1,
            onClick: o = (() => {})
          } = e;
          const {
            formatMessage: r
          } = (0, y.useIntl)();
          return (0, l.jsxs)("button", {
            ref: a,
            className: [b.itemContainer, d ? b.active : ""].filter((e => e)).join(" "),
            onClick: o,
            type: "button",
            children: [(0, l.jsxs)("div", {
              className: b.iconAndThumbnail,
              children: [(0, l.jsx)("div", {
                className: b.playIconContainer,
                children: (0, l.jsx)("img", {
                  className: b.playIcon,
                  src: i(2938),
                  alt: `Play ${t}`,
                  "aria-label": `Play ${t}`
                })
              }), (0, l.jsx)("div", {
                className: b.thumbnail,
                style: {
                  "--background-image": `url(${n})`
                },
                children: d && (0, l.jsx)("span", {
                  className: b.activeVideoTextIndicator,
                  children: r(s.sY.videoplayer_playlist_active_badge)
                })
              })]
            }), (0, l.jsx)("div", {
              className: b.textContainer,
              children: (0, l.jsx)("h3", {
                children: t
              })
            })]
          })
        })),
        N = {
          playlist: "rockstargames-modules-core-videoplayerbfb9798f7f8d4e09395eb71841c82bfc",
          videos: "rockstargames-modules-core-videoplayerd2e014522947ad4277a0b94eef63017e",
          userNotScrolledToTopOfList: "rockstargames-modules-core-videoplayerc4872315742f40e98b14fbfd00818aef",
          userNotScrolledToBottomOfList: "rockstargames-modules-core-videoplayerb184e20450fd93dd2868e7142c48f17c"
        },
        x = e => {
          let {
            title: a,
            activeVideoId: i,
            videos: t = [],
            onVideoItemClick: n = (() => {})
          } = e;
          const {
            track: d
          } = (0, k.useGtmTrack)(), o = (0, m.useRef)(null), s = (0, m.createRef)(), [r, c] = (0, m.useState)(null), [u, v] = (0, m.useState)(i), [f, p] = (0, m.useState)(!0), [g, y] = (0, m.useState)(!1);
          return (0, m.useEffect)((() => {
            if (!r) return;
            const e = r.offsetTop - o.current.offsetTop;
            o.current.scroll({
              top: e,
              behavior: "smooth"
            })
          }), [r, o]), (0, m.useEffect)((() => {
            c(s?.current)
          }), [s]), (0, m.useEffect)((() => {
            v(i)
          }), [i]), (0, l.jsxs)("section", {
            className: N.playlist,
            children: [(0, l.jsx)("h2", {
              children: a
            }), (0, l.jsx)("div", {
              ref: o,
              className: [N.videos, f ? "" : N.userNotScrolledToTopOfList, g ? "" : N.userNotScrolledToBottomOfList].filter((e => e)).join(" "),
              onScroll: e => {
                let {
                  target: {
                    scrollTop: a,
                    scrollHeight: i,
                    clientHeight: t
                  }
                } = e;
                0 === a ? p(!0) : a + t === i ? y(!0) : (p(!1), y(!1))
              },
              children: t.map(((e, a) => (0, l.jsx)(h, {
                ref: e.id === u ? s : null,
                title: e.title,
                thumbnail: `${e.screencap}?im=Resize=400`,
                active: e.id === u,
                onClick: () => ((e, a) => {
                  n && n(e, a), v(e), d({
                    event: "video_thumbnail_click",
                    link_url: `?video=${e}`
                  })
                })(e.id, a)
              }, e.id)))
            })]
          })
        },
        S = {
          videoWithPlaylistContainer: "rockstargames-modules-core-videoplayera8daea665324642dd7c00ca06e1f2a04"
        },
        T = e => {
          let {
            className: a,
            locale: i,
            id: t,
            tagIds: d = [],
            playlistTitle: s,
            groupTypes: r = ["trailer", "feature"],
            autoplay: c = !0,
            currentVideoId: v,
            isModal: y = !1
          } = e;
          const {
            track: b
          } = (0, k.useGtmTrack)(), h = {
            groupTypes: r,
            tagIds: d,
            locale: i
          }, [N, T] = (0, u.useSearchParams)(), j = Number(N.get("start") ?? 0), [_, I] = (0, m.useState)(0), {
            loading: C,
            data: V
          } = (0, p.useQuery)(g.videos, {
            variables: h
          }), E = V?.videos?.results;
          return (0, m.useEffect)((() => {
            const e = Number(N.get("video"));
            if (!E || !e) return;
            const a = f().findIndex(E, (a => {
              let {
                id: i
              } = a;
              return i === e
            }));
            I(a), y && b({
              event: "trackPageview"
            })
          }), [N.get("video"), E]), (0, m.useEffect)((() => {
            const e = Number(N.get("video"));
            if (E && (v || e)) {
              const a = E.find((a => {
                  let {
                    id: i
                  } = a;
                  return e ? i === e : i === v
                })),
                i = E.indexOf(a);
              a && i && _ !== i && I(i)
            }
          }), [E]), !C && V && E ? (0, l.jsxs)("section", {
            className: [S.videoWithPlaylistContainer, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            children: [(0, l.jsx)(o.Z, {
              id: E[_]?.id,
              context: "site",
              autoplay: c,
              wrapper: !1,
              start: j,
              onVideoComplete: () => {
                const e = _ + 1 < E.length ? _ + 1 : 0;
                T({
                  video: E[e].id
                }), b({
                  event: "trackEvent",
                  event_category: "User Event",
                  event_action: `Video played to end and next video queued (id: ${E[e].id})`,
                  event_label: "video_played_to_end"
                })
              },
              locale: i
            }), (0, l.jsx)(x, {
              activeVideoId: E[_]?.id,
              title: s,
              videos: E,
              onVideoItemClick: e => {
                T({
                  video: e
                }), b({
                  event: "trackEvent",
                  event_category: "User Event",
                  event_action: `Playlist item with (video: ${e}) was clicked.`,
                  event_label: "click"
                })
              }
            })]
          }) : (0, l.jsx)(n.Z, {})
        },
        j = o.Z
    },
    9525: e => {
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
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
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
      var t = {};

      function n(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var t = e.definitions[i];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.videos = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var d = t[a] || new Set,
          o = new Set,
          s = new Set;
        for (d.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var t = n(e, a);
          t && i.definitions.push(t)
        })), i
      }(a, "videos")
    },
    2938: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg"
    }
  }
]);