! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b5616e03-8980-4040-b082-0446f5341934", e._sentryDebugIdIdentifier = "sentry-dbid-b5616e03-8980-4040-b082-0446f5341934")
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
  [816, 240], {
    99576: (e, a, i) => {
      "use strict";
      var t = i(51664),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, i) {
        var t, o = {},
          l = null,
          c = null;
        for (t in void 0 !== i && (l = "" + i), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (c = a.ref), a) d.call(a, t) && !s.hasOwnProperty(t) && (o[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === o[t] && (o[t] = a[t]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: c,
          props: o,
          _owner: r.current
        }
      }
      a.Fragment = o, a.jsx = l, a.jsxs = l
    },
    95240: (e, a, i) => {
      "use strict";
      e.exports = i(99576)
    },
    816: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        PlayerWithInfo: () => c,
        VideoWithPlaylist: () => I,
        default: () => T,
        useVideoData: () => r._6
      });
      var t = i(9860),
        n = i(84360),
        o = i(18140),
        d = i(87432),
        r = i(5960);
      const s = {
        embed: "rockstargames-modules-core-videoplayerc4ce9d4236143b4ff058398ef09477ac",
        details: "rockstargames-modules-core-videoplayerff28beadc2a5985dbda23b5dd14974a4",
        top: "rockstargames-modules-core-videoplayerb7ce74df2183953c21d700b548126071"
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
        return !f || u ? (0, l.jsx)(o.c, {
          hero: !0,
          children: (0, l.jsx)(n.c, {})
        }) : (0, l.jsxs)("section", {
          className: s.marquee,
          children: [(0, l.jsx)("div", {
            className: s.embed,
            children: (0, l.jsx)(d.c, {
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
        b = i(42836),
        y = i(76664),
        k = i(41272);
      const g = {
          pillBtn: "rockstargames-modules-core-videoplayerc8707a079e7373cfd7a7f77479b9fe9b",
          selected: "rockstargames-modules-core-videoplayerdf1f79269045b4753faf81a308771d67",
          itemContainer: "rockstargames-modules-core-videoplayerba9370971792cbbc06310974342ebb1a",
          playIcon: "rockstargames-modules-core-videoplayerdd5def1f3dba51bbad8b3f4a8bcfb2bc",
          thumbnail: "rockstargames-modules-core-videoplayerb326a396f30341afee720ea501e71328",
          active: "rockstargames-modules-core-videoplayera12de6e14f3df5b0562dd68d32186f89",
          iconAndThumbnail: "rockstargames-modules-core-videoplayerabf0714059417ae79695bc3faea057c9",
          playIconContainer: "rockstargames-modules-core-videoplayercaddbdbe7c48667d41ade95c58cf406e",
          activeVideoTextIndicator: "rockstargames-modules-core-videoplayera0c5a0cc358fe449dfd96fcd06956f67",
          textContainer: "rockstargames-modules-core-videoplayerb239038297c037c2b3e7358ae6fe159a"
        },
        h = (0, u.forwardRef)(((e, a) => {
          let {
            title: t,
            thumbnail: n,
            active: o = !1,
            onClick: d = (() => {})
          } = e;
          const {
            formatMessage: s
          } = (0, k.useIntl)();
          return (0, l.jsxs)("button", {
            ref: a,
            className: [g.itemContainer, o ? g.active : ""].filter((e => e)).join(" "),
            onClick: d,
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
                children: o && (0, l.jsx)("span", {
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
        }));
      h.displayName = "VideoPlaylistItem";
      const _ = h,
        N = {
          pillBtn: "rockstargames-modules-core-videoplayerb4b38ae15f6cb01e082eeb6279f59a99",
          selected: "rockstargames-modules-core-videoplayerb0eb1d52ac6f45537d6b1037cd500b97",
          playlist: "rockstargames-modules-core-videoplayera34fe6a55423f248167ff18052d68104",
          videos: "rockstargames-modules-core-videoplayerb4deecbb844461dd25fa7068ff6fc25d",
          userNotScrolledToTopOfList: "rockstargames-modules-core-videoplayerd47ac617f0b291d7de81a9a26460c4e0",
          userNotScrolledToBottomOfList: "rockstargames-modules-core-videoplayerdf3aac6821625752a839a08930915003"
        },
        x = e => {
          let {
            title: a,
            activeVideoId: i,
            videos: t = [],
            onVideoItemClick: n = (() => {})
          } = e;
          const {
            track: o
          } = (0, b.useGtmTrack)(), d = (0, u.useRef)(null), r = (0, u.createRef)(), [s, c] = (0, u.useState)(null), [f, m] = (0, u.useState)(i), [v, p] = (0, u.useState)(!0), [y, k] = (0, u.useState)(!1);
          return (0, u.useEffect)((() => {
            if (!s) return;
            const e = s.offsetTop - d.current.offsetTop;
            d.current.scroll({
              top: e,
              behavior: "smooth"
            })
          }), [s, d]), (0, u.useEffect)((() => {
            c(r?.current)
          }), [r]), (0, u.useEffect)((() => {
            m(i)
          }), [i]), (0, l.jsxs)("section", {
            className: N.playlist,
            children: [(0, l.jsx)("h2", {
              children: a
            }), (0, l.jsx)("div", {
              ref: d,
              className: [N.videos, v ? "" : N.userNotScrolledToTopOfList, y ? "" : N.userNotScrolledToBottomOfList].filter((e => e)).join(" "),
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
              tabIndex: -1,
              children: t.map(((e, a) => (0, l.jsx)(_, {
                ref: e.id === f ? r : null,
                title: e.title,
                thumbnail: `${e.screencap}?im=Resize=400`,
                active: e.id === f,
                onClick: () => ((e, a) => {
                  n && n(e, a), m(e), o({
                    event: "video_thumbnail_click",
                    link_url: `?video=${e}`
                  })
                })(e.id, a)
              }, e.id)))
            })]
          })
        },
        S = {
          videoWithPlaylistContainer: "rockstargames-modules-core-videoplayerd5575ea79a0fce90d5d5bfe6bcfc4ed0"
        },
        I = e => {
          let {
            className: a,
            locale: i,
            id: t,
            tagIds: o = [],
            playlistTitle: r,
            groupTypes: s = ["trailer", "feature"],
            autoplay: c = !0,
            currentVideoId: m,
            isModal: k = !1
          } = e;
          const {
            track: g
          } = (0, b.useGtmTrack)(), h = {
            groupTypes: s,
            tagIds: o,
            locale: i
          }, [_, N] = (0, f.useSearchParams)(), I = Number(_.get("start") ?? 0), [T, j] = (0, u.useState)(0), {
            loading: w,
            data: E
          } = (0, p.useQuery)(y.videos, {
            variables: h
          }), V = E?.videos?.results;
          return (0, u.useEffect)((() => {
            const e = Number(_.get("video"));
            if (!V || !e) return;
            const a = v().findIndex(V, (a => {
              let {
                id: i
              } = a;
              return i === e
            }));
            j(a), k && g({
              event: "trackPageview"
            })
          }), [_.get("video"), V]), (0, u.useEffect)((() => {
            const e = Number(_.get("video"));
            if (V && (m || e)) {
              const a = V.find((a => {
                  let {
                    id: i
                  } = a;
                  return e ? i === e : i === m
                })),
                i = V.indexOf(a);
              a && i && T !== i && j(i)
            }
          }), [V]), !w && E && V ? (0, l.jsxs)("section", {
            className: [S.videoWithPlaylistContainer, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            children: [(0, l.jsx)(d.c, {
              id: V[T]?.id,
              context: "site",
              autoplay: c,
              wrapper: !1,
              start: I,
              onVideoComplete: () => {
                const e = T + 1 < V.length ? T + 1 : 0;
                N({
                  video: V[e].id
                }), g({
                  event: "trackEvent",
                  event_category: "User Event",
                  event_action: `Video played to end and next video queued (id: ${V[e].id})`,
                  event_label: "video_played_to_end"
                })
              },
              locale: i,
              isModal: k
            }), (0, l.jsx)(x, {
              activeVideoId: V[T]?.id,
              title: r,
              videos: V,
              onVideoItemClick: e => {
                N({
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
        T = d.c
    },
    76664: e => {
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
        var o = t[a] || new Set,
          d = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            d.has(e) || (d.add(e), (t[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
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