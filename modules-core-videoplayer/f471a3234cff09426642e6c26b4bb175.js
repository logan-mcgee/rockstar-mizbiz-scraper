! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "dd8a476b-364d-4275-8d9f-267d11cd115f", e._sentryDebugIdIdentifier = "sentry-dbid-dd8a476b-364d-4275-8d9f-267d11cd115f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [800, 240], {
    99576: (e, a, i) => {
      "use strict";
      var t = i(51664),
        n = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, i) {
        var t, d = {},
          l = null,
          c = null;
        for (t in void 0 !== i && (l = "" + i), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (c = a.ref), a) o.call(a, t) && !s.hasOwnProperty(t) && (d[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === d[t] && (d[t] = a[t]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: c,
          props: d,
          _owner: r.current
        }
      }
      a.Fragment = d, a.jsx = l, a.jsxs = l
    },
    95240: (e, a, i) => {
      "use strict";
      e.exports = i(99576)
    },
    6800: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        PlayerWithInfo: () => c,
        VideoWithPlaylist: () => S,
        default: () => T,
        useVideoData: () => r._6
      });
      var t = i(9860),
        n = i(77804),
        d = i(65296),
        o = i(16724),
        r = i(11436);
      const s = {
        embed: "rockstargames-modules-core-videoplayerdce0f305e1f074066eb90200511489e5",
        details: "rockstargames-modules-core-videoplayerccf0f84f8a2f2d76d722722aee899053",
        top: "rockstargames-modules-core-videoplayerabfccc14af0a380e0e643f9be7ede470"
      };
      var l = i(95240);
      const c = e => {
        let {
          autoplay: a = !0,
          videoId: i,
          videoChangeCallback: c
        } = e;
        const {
          loading: u,
          video: f
        } = (0, r._6)({
          id: i
        });
        return !f || u ? (0, l.jsx)(d.c, {
          hero: !0,
          children: (0, l.jsx)(n.c, {})
        }) : (0, l.jsxs)("section", {
          className: s.marquee,
          children: [(0, l.jsx)("div", {
            className: s.embed,
            children: (0, l.jsx)(o.c, {
              id: f.id,
              context: "site",
              autoplay: a,
              wrapper: !1,
              videoChangeCallback: c
            })
          }), (0, l.jsxs)("div", {
            className: s.details,
            children: [(0, l.jsxs)("div", {
              className: s.top,
              children: [(0, l.jsx)("h5", {
                children: (0, l.jsx)(t.A, {
                  to: `/videos?type=game&gameId=${f?.game?.sku_id??f.game.id}`,
                  style: {
                    pointerEvents: f?.youtubeOnly ? "none" : "auto"
                  },
                  children: f.game.title
                })
              }), (0, l.jsx)("time", {
                dateTime: f.created,
                children: f.created_formatted
              })]
            }), (0, l.jsx)("h2", {
              children: f.title
            }), (0, l.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: f.description
              }
            })]
          })]
        })
      };
      var u = i(51664),
        f = i(57013),
        m = i(73660),
        v = i.n(m),
        p = i(33052),
        y = i(42836),
        b = i(17788),
        k = i(41272);
      const g = {
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
            formatMessage: s
          } = (0, k.useIntl)();
          return (0, l.jsxs)("button", {
            ref: a,
            className: [g.itemContainer, d ? g.active : ""].filter((e => e)).join(" "),
            onClick: o,
            type: "button",
            children: [(0, l.jsxs)("div", {
              className: g.iconAndThumbnail,
              children: [(0, l.jsx)("div", {
                className: g.playIconContainer,
                children: (0, l.jsx)("img", {
                  className: g.playIcon,
                  src: i(43352),
                  alt: `Play ${t}`,
                  "aria-label": `Play ${t}`
                })
              }), (0, l.jsx)("div", {
                className: g.thumbnail,
                style: {
                  "--background-image": `url(${n})`
                },
                children: d && (0, l.jsx)("span", {
                  className: g.activeVideoTextIndicator,
                  children: s(r.cJ.videoplayer_playlist_active_badge)
                })
              })]
            }), (0, l.jsx)("div", {
              className: g.textContainer,
              children: (0, l.jsx)("h3", {
                children: t
              })
            })]
          })
        })),
        _ = {
          pillBtn: "rockstargames-modules-core-videoplayerbe2eef3b092997cd37702a8627ba9ed2",
          selected: "rockstargames-modules-core-videoplayerb4ec3432405270a98faf535e767892aa",
          playlist: "rockstargames-modules-core-videoplayerbfb9798f7f8d4e09395eb71841c82bfc",
          videos: "rockstargames-modules-core-videoplayerd2e014522947ad4277a0b94eef63017e",
          userNotScrolledToTopOfList: "rockstargames-modules-core-videoplayerc4872315742f40e98b14fbfd00818aef",
          userNotScrolledToBottomOfList: "rockstargames-modules-core-videoplayerb184e20450fd93dd2868e7142c48f17c"
        },
        N = e => {
          let {
            title: a,
            activeVideoId: i,
            videos: t = [],
            onVideoItemClick: n = (() => {})
          } = e;
          const {
            track: d
          } = (0, y.useGtmTrack)(), o = (0, u.useRef)(null), r = (0, u.createRef)(), [s, c] = (0, u.useState)(null), [f, m] = (0, u.useState)(i), [v, p] = (0, u.useState)(!0), [b, k] = (0, u.useState)(!1);
          return (0, u.useEffect)((() => {
            if (!s) return;
            const e = s.offsetTop - o.current.offsetTop;
            o.current.scroll({
              top: e,
              behavior: "smooth"
            })
          }), [s, o]), (0, u.useEffect)((() => {
            c(r?.current)
          }), [r]), (0, u.useEffect)((() => {
            m(i)
          }), [i]), (0, l.jsxs)("section", {
            className: _.playlist,
            children: [(0, l.jsx)("h2", {
              children: a
            }), (0, l.jsx)("div", {
              ref: o,
              className: [_.videos, v ? "" : _.userNotScrolledToTopOfList, b ? "" : _.userNotScrolledToBottomOfList].filter((e => e)).join(" "),
              onScroll: e => {
                let {
                  target: {
                    scrollTop: a,
                    scrollHeight: i,
                    clientHeight: t
                  }
                } = e;
                0 === a ? p(!0) : a + t === i ? k(!0) : (p(!1), k(!1))
              },
              children: t.map(((e, a) => (0, l.jsx)(h, {
                ref: e.id === f ? r : null,
                title: e.title,
                thumbnail: `${e.screencap}?im=Resize=400`,
                active: e.id === f,
                onClick: () => ((e, a) => {
                  n && n(e, a), m(e), d({
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
            playlistTitle: r,
            groupTypes: s = ["trailer", "feature"],
            autoplay: c = !0,
            currentVideoId: m,
            isModal: k = !1
          } = e;
          const {
            track: g
          } = (0, y.useGtmTrack)(), h = {
            groupTypes: s,
            tagIds: d,
            locale: i
          }, [_, S] = (0, f.useSearchParams)(), T = Number(_.get("start") ?? 0), [I, j] = (0, u.useState)(0), {
            loading: w,
            data: E
          } = (0, p.useQuery)(b.videos, {
            variables: h
          }), C = E?.videos?.results;
          return (0, u.useEffect)((() => {
            const e = Number(_.get("video"));
            if (!C || !e) return;
            const a = v().findIndex(C, (a => {
              let {
                id: i
              } = a;
              return i === e
            }));
            j(a), k && g({
              event: "trackPageview"
            })
          }), [_.get("video"), C]), (0, u.useEffect)((() => {
            const e = Number(_.get("video"));
            if (C && (m || e)) {
              const a = C.find((a => {
                  let {
                    id: i
                  } = a;
                  return e ? i === e : i === m
                })),
                i = C.indexOf(a);
              a && i && I !== i && j(i)
            }
          }), [C]), !w && E && C ? (0, l.jsxs)("section", {
            className: [x.videoWithPlaylistContainer, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            children: [(0, l.jsx)(o.c, {
              id: C[I]?.id,
              context: "site",
              autoplay: c,
              wrapper: !1,
              start: T,
              onVideoComplete: () => {
                const e = I + 1 < C.length ? I + 1 : 0;
                S({
                  video: C[e].id
                }), g({
                  event: "trackEvent",
                  event_category: "User Event",
                  event_action: `Video played to end and next video queued (id: ${C[e].id})`,
                  event_label: "video_played_to_end"
                })
              },
              locale: i,
              isModal: k
            }), (0, l.jsx)(N, {
              activeVideoId: C[I]?.id,
              title: r,
              videos: C,
              onVideoItemClick: e => {
                S({
                  video: e
                }), g({
                  event: "trackEvent",
                  event_category: "User Event",
                  event_action: `Playlist item with (video: ${e}) was clicked.`,
                  event_label: "click"
                })
              }
            })]
          }) : (0, l.jsx)(n.c, {})
        },
        T = o.c
    },
    17788: e => {
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
          r = new Set;
        for (d.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var t = n(e, a);
          t && i.definitions.push(t)
        })), i
      }(a, "videos")
    },
    43352: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg"
    }
  }
]);