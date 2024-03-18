! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c5fc356f-28f9-4892-872e-3be83e84f470", e._sentryDebugIdIdentifier = "sentry-dbid-c5fc356f-28f9-4892-872e-3be83e84f470")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [432], {
    7432: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        PlayerWithInfo: () => c,
        VideoWithPlaylist: () => S,
        default: () => T,
        useVideoData: () => s._6
      });
      var t = i(1668),
        n = i(6872),
        d = i(948),
        o = i(216),
        s = i(3824);
      const l = {
        embed: "rockstargames-modules-core-videoplayerdce0f305e1f074066eb90200511489e5",
        details: "rockstargames-modules-core-videoplayerccf0f84f8a2f2d76d722722aee899053",
        top: "rockstargames-modules-core-videoplayerabfccc14af0a380e0e643f9be7ede470"
      };
      var r = i(3480);
      const c = e => {
        let {
          autoplay: a = !0,
          videoId: i,
          videoChangeCallback: c
        } = e;
        const {
          loading: u,
          video: m
        } = (0, s._6)({
          id: i
        });
        return !m || u ? (0, r.jsx)(d.c, {
          hero: !0,
          children: (0, r.jsx)(n.c, {})
        }) : (0, r.jsxs)("section", {
          className: l.marquee,
          children: [(0, r.jsx)("div", {
            className: l.embed,
            children: (0, r.jsx)(o.c, {
              id: m.id,
              context: "site",
              autoplay: a,
              wrapper: !1,
              videoChangeCallback: c
            })
          }), (0, r.jsxs)("div", {
            className: l.details,
            children: [(0, r.jsxs)("div", {
              className: l.top,
              children: [(0, r.jsx)("h5", {
                children: (0, r.jsx)(t.A, {
                  to: `/videos?type=game&gameId=${m?.game?.sku_id??m.game.id}`,
                  style: {
                    pointerEvents: m?.youtubeOnly ? "none" : "auto"
                  },
                  children: m.game.title
                })
              }), (0, r.jsx)("time", {
                dateTime: m.created,
                children: m.created_formatted
              })]
            }), (0, r.jsx)("h2", {
              children: m.title
            }), (0, r.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: m.description
              }
            })]
          })]
        })
      };
      var u = i(8200),
        m = i(3557),
        f = i(3660),
        v = i.n(f),
        p = i(3052),
        k = i(2836),
        b = i(2096),
        g = i(696);
      const y = {
          pillBtn: "rockstargames-modules-core-videoplayerb1b2f82876977180383bac728f18cf83",
          selected: "rockstargames-modules-core-videoplayerff0a2208dddecf538123b49977b20277",
          itemContainer: "rockstargames-modules-core-videoplayerd3d20ae5ecbd6bfb215015196c0a3469",
          playIcon: "rockstargames-modules-core-videoplayerf7757d0c8d7da59d6b29e673ebc97b63",
          thumbnail: "rockstargames-modules-core-videoplayerf5d395dc80031622e071c201ee9af865",
          active: "rockstargames-modules-core-videoplayera62577273149f9144afaaf77e78ceb31",
          iconAndThumbnail: "rockstargames-modules-core-videoplayerbd41e01adb312aa1c88492f7bdedc937",
          playIconContainer: "rockstargames-modules-core-videoplayerea21fc201ac622b563ae972e67b7719d",
          activeVideoTextIndicator: "rockstargames-modules-core-videoplayera2d4e1c19b399131c32143a6c5f67d7a",
          textContainer: "rockstargames-modules-core-videoplayere21f20e3ce1f96dcdcf97693d3f511de"
        },
        h = (0, u.forwardRef)(((e, a) => {
          let {
            title: t,
            thumbnail: n,
            active: d = !1,
            onClick: o = (() => {})
          } = e;
          const {
            formatMessage: l
          } = (0, g.useIntl)();
          return (0, r.jsxs)("button", {
            ref: a,
            className: [y.itemContainer, d ? y.active : ""].filter((e => e)).join(" "),
            onClick: o,
            type: "button",
            children: [(0, r.jsxs)("div", {
              className: y.iconAndThumbnail,
              children: [(0, r.jsx)("div", {
                className: y.playIconContainer,
                children: (0, r.jsx)("img", {
                  className: y.playIcon,
                  src: i(7444),
                  alt: `Play ${t}`,
                  "aria-label": `Play ${t}`
                })
              }), (0, r.jsx)("div", {
                className: y.thumbnail,
                style: {
                  "--background-image": `url(${n})`
                },
                children: d && (0, r.jsx)("span", {
                  className: y.activeVideoTextIndicator,
                  children: l(s.cJ.videoplayer_playlist_active_badge)
                })
              })]
            }), (0, r.jsx)("div", {
              className: y.textContainer,
              children: (0, r.jsx)("h3", {
                children: t
              })
            })]
          })
        })),
        N = {
          pillBtn: "rockstargames-modules-core-videoplayerbe2eef3b092997cd37702a8627ba9ed2",
          selected: "rockstargames-modules-core-videoplayerb4ec3432405270a98faf535e767892aa",
          playlist: "rockstargames-modules-core-videoplayerbfb9798f7f8d4e09395eb71841c82bfc",
          videos: "rockstargames-modules-core-videoplayerd2e014522947ad4277a0b94eef63017e",
          userNotScrolledToTopOfList: "rockstargames-modules-core-videoplayerc4872315742f40e98b14fbfd00818aef",
          userNotScrolledToBottomOfList: "rockstargames-modules-core-videoplayerb184e20450fd93dd2868e7142c48f17c"
        },
        _ = e => {
          let {
            title: a,
            activeVideoId: i,
            videos: t = [],
            onVideoItemClick: n = (() => {})
          } = e;
          const {
            track: d
          } = (0, k.useGtmTrack)(), o = (0, u.useRef)(null), s = (0, u.createRef)(), [l, c] = (0, u.useState)(null), [m, f] = (0, u.useState)(i), [v, p] = (0, u.useState)(!0), [b, g] = (0, u.useState)(!1);
          return (0, u.useEffect)((() => {
            if (!l) return;
            const e = l.offsetTop - o.current.offsetTop;
            o.current.scroll({
              top: e,
              behavior: "smooth"
            })
          }), [l, o]), (0, u.useEffect)((() => {
            c(s?.current)
          }), [s]), (0, u.useEffect)((() => {
            f(i)
          }), [i]), (0, r.jsxs)("section", {
            className: N.playlist,
            children: [(0, r.jsx)("h2", {
              children: a
            }), (0, r.jsx)("div", {
              ref: o,
              className: [N.videos, v ? "" : N.userNotScrolledToTopOfList, b ? "" : N.userNotScrolledToBottomOfList].filter((e => e)).join(" "),
              onScroll: e => {
                let {
                  target: {
                    scrollTop: a,
                    scrollHeight: i,
                    clientHeight: t
                  }
                } = e;
                0 === a ? p(!0) : a + t === i ? g(!0) : (p(!1), g(!1))
              },
              children: t.map(((e, a) => (0, r.jsx)(h, {
                ref: e.id === m ? s : null,
                title: e.title,
                thumbnail: `${e.screencap}?im=Resize=400`,
                active: e.id === m,
                onClick: () => ((e, a) => {
                  n && n(e, a), f(e), d({
                    event: "video_thumbnail_click",
                    link_url: `?video=${e}`
                  })
                })(e.id, a)
              }, e.id)))
            })]
          })
        },
        x = {
          videoWithPlaylistContainer: "rockstargames-modules-core-videoplayera8daea665324642dd7c00ca06e1f2a04"
        },
        S = e => {
          let {
            className: a,
            locale: i,
            id: t,
            tagIds: d = [],
            playlistTitle: s,
            groupTypes: l = ["trailer", "feature"],
            autoplay: c = !0,
            currentVideoId: f,
            isModal: g = !1
          } = e;
          const {
            track: y
          } = (0, k.useGtmTrack)(), h = {
            groupTypes: l,
            tagIds: d,
            locale: i
          }, [N, S] = (0, m.useSearchParams)(), T = Number(N.get("start") ?? 0), [I, j] = (0, u.useState)(0), {
            loading: w,
            data: E
          } = (0, p.useQuery)(b.videos, {
            variables: h
          }), V = E?.videos?.results;
          return (0, u.useEffect)((() => {
            const e = Number(N.get("video"));
            if (!V || !e) return;
            const a = v().findIndex(V, (a => {
              let {
                id: i
              } = a;
              return i === e
            }));
            j(a), g && y({
              event: "trackPageview"
            })
          }), [N.get("video"), V]), (0, u.useEffect)((() => {
            const e = Number(N.get("video"));
            if (V && (f || e)) {
              const a = V.find((a => {
                  let {
                    id: i
                  } = a;
                  return e ? i === e : i === f
                })),
                i = V.indexOf(a);
              a && i && I !== i && j(i)
            }
          }), [V]), !w && E && V ? (0, r.jsxs)("section", {
            className: [x.videoWithPlaylistContainer, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            children: [(0, r.jsx)(o.c, {
              id: V[I]?.id,
              context: "site",
              autoplay: c,
              wrapper: !1,
              start: T,
              onVideoComplete: () => {
                const e = I + 1 < V.length ? I + 1 : 0;
                S({
                  video: V[e].id
                }), y({
                  event: "trackEvent",
                  event_category: "User Event",
                  event_action: `Video played to end and next video queued (id: ${V[e].id})`,
                  event_label: "video_played_to_end"
                })
              },
              locale: i,
              isModal: g
            }), (0, r.jsx)(_, {
              activeVideoId: V[I]?.id,
              title: s,
              videos: V,
              onVideoItemClick: e => {
                S({
                  video: e
                }), y({
                  event: "trackEvent",
                  event_category: "User Event",
                  event_action: `Playlist item with (video: ${e}) was clicked.`,
                  event_label: "click"
                })
              }
            })]
          }) : (0, r.jsx)(n.c, {})
        },
        T = o.c
    },
    2096: e => {
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
          var l = s;
          s = new Set, l.forEach((function(e) {
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
    7444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg"
    }
  }
]);
//# sourceMappingURL=49785ce93f35f246b107fe7742bd9590.js.map