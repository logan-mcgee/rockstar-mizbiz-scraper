! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "08bfd827-ad29-4dda-8a78-abfd5cb5ed0c", e._sentryDebugIdIdentifier = "sentry-dbid-08bfd827-ad29-4dda-8a78-abfd5cb5ed0c")
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
  [4, 240], {
    99576: (e, a, i) => {
      "use strict";
      var t = i(51664),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        r = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, i) {
        var t, o = {},
          l = null,
          c = null;
        for (t in void 0 !== i && (l = "" + i), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (c = a.ref), a) d.call(a, t) && !r.hasOwnProperty(t) && (o[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === o[t] && (o[t] = a[t]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: c,
          props: o,
          _owner: s.current
        }
      }
      a.Fragment = o, a.jsx = l, a.jsxs = l
    },
    95240: (e, a, i) => {
      "use strict";
      e.exports = i(99576)
    },
    78004: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        PlayerWithInfo: () => f,
        VideoWithPlaylist: () => w,
        default: () => E,
        useVideoData: () => l._6
      });
      var t = i(9860),
        n = i(41272),
        o = i(75016),
        d = i(27992),
        s = i(89216),
        r = i(5512),
        l = i(43264);
      const c = {
        embed: "rockstargames-modules-core-videoplayerb7696fe4bc425dfd901e2fd42d959929",
        details: "rockstargames-modules-core-videoplayera7782c0e7788cedaa96f498b60db5695",
        top: "rockstargames-modules-core-videoplayerdab03112635854da68f0bff971acb0e1"
      };
      var u = i(95240);
      const f = (0, n.withIntl)((e => {
        let {
          autoplay: a = !0,
          resolution: i = "_auto",
          videoId: n,
          videoChangeCallback: o,
          titleCrop: f
        } = e;
        const {
          loading: m,
          video: v
        } = (0, l._6)({
          id: n
        });
        return !v || m ? (0, u.jsx)(s.c, {
          hero: !0,
          titleCrop: f,
          children: (0, u.jsx)(d.c, {})
        }) : (0, u.jsxs)("section", {
          className: c.marquee,
          children: [(0, u.jsx)("div", {
            className: c.embed,
            children: (0, u.jsx)(r.c, {
              id: v.id,
              context: "site",
              autoplay: a,
              resolution: i,
              wrapper: !1,
              videoChangeCallback: o
            })
          }), (0, u.jsxs)("div", {
            className: c.details,
            children: [(0, u.jsxs)("div", {
              className: c.top,
              children: [(0, u.jsx)("h5", {
                children: (0, u.jsx)(t.A, {
                  to: `/videos?type=game&gameId=${v?.game?.sku_id??v.game.id}`,
                  style: {
                    pointerEvents: v?.youtubeOnly ? "none" : "auto"
                  },
                  children: v.game.title
                })
              }), (0, u.jsx)("time", {
                dateTime: v.created,
                children: v.createdFormatted
              })]
            }), (0, u.jsx)("h2", {
              children: v.title
            }), (0, u.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: v.description
              }
            })]
          })]
        })
      }), o.intlMessages);
      var m = i(51664),
        v = i(57013),
        p = i(73660),
        b = i.n(p),
        y = i(33052),
        k = i(42836),
        g = i(85044),
        h = i(45792),
        _ = i(84424);
      const N = {
          pillBtn: "rockstargames-modules-core-videoplayerf2a453d224393eff64143a2f6c549f8d",
          selected: "rockstargames-modules-core-videoplayeref9f11e69d81520d23af744fee58a1bf",
          itemContainer: "rockstargames-modules-core-videoplayerfbd1499c6225bbe04f3a6efc710124f4",
          playIcon: "rockstargames-modules-core-videoplayerd549fde5ec781c18a6066b7f4258f2cc",
          thumbnail: "rockstargames-modules-core-videoplayerf8e820c90548c2466c73c21a46cfafd7",
          active: "rockstargames-modules-core-videoplayerc609535ec0c949fc631b8d5bf62689f9",
          iconAndThumbnail: "rockstargames-modules-core-videoplayera18bf34a29260f3744ed9db5b0b62fa6",
          playIconContainer: "rockstargames-modules-core-videoplayere89f03b8ec58ddc87c17605b3176b6a1",
          activeVideoTextIndicator: "rockstargames-modules-core-videoplayerb43a390d461ee524297a88a92d487d61",
          textContainer: "rockstargames-modules-core-videoplayereb90e7323f5e1eeeec6ccfc9d0d83e06"
        },
        x = (0, m.forwardRef)(((e, a) => {
          let {
            title: i,
            thumbnail: t,
            active: o = !1,
            onClick: d = (() => {})
          } = e;
          const {
            formatMessage: s
          } = (0, n.useIntl)();
          return (0, u.jsxs)("button", {
            ref: a,
            className: [N.itemContainer, o ? N.active : ""].filter((e => e)).join(" "),
            onClick: d,
            type: "button",
            children: [(0, u.jsxs)("div", {
              className: N.iconAndThumbnail,
              children: [(0, u.jsx)("div", {
                className: N.playIconContainer,
                children: (0, u.jsx)(_.c, {
                  className: N.playIcon
                })
              }), (0, u.jsx)("div", {
                className: N.thumbnail,
                style: {
                  "--background-image": `url(${t})`
                },
                children: o && (0, u.jsx)("span", {
                  className: N.activeVideoTextIndicator,
                  children: s(l.cJ.videoplayer_playlist_active_badge)
                })
              })]
            }), (0, u.jsx)("div", {
              className: N.textContainer,
              children: (0, u.jsx)("h3", {
                children: i
              })
            })]
          })
        }));
      x.displayName = "VideoPlaylistItem";
      const S = x,
        T = {
          pillBtn: "rockstargames-modules-core-videoplayerc80e29c909e0c6200eb7fc6b2b81f9be",
          selected: "rockstargames-modules-core-videoplayerd5ccc264da21ea239af29cad41774242",
          playlist: "rockstargames-modules-core-videoplayerecd786c5d10735ecd6747d52ee0bf5fd",
          videos: "rockstargames-modules-core-videoplayerc711e423f5b3481c7183eb5b277ef06a",
          userNotScrolledToTopOfList: "rockstargames-modules-core-videoplayerf1bc55e95c5eb5b51f6e987e538a3efa",
          userNotScrolledToBottomOfList: "rockstargames-modules-core-videoplayerb1b0ceaedb428f958c7eb082016ad144"
        },
        I = e => {
          let {
            title: a,
            activeVideoId: i,
            videos: t = [],
            onVideoItemClick: n = (() => {})
          } = e;
          const o = (0, v.useLocation)(),
            {
              track: d
            } = (0, k.useGtmTrack)(),
            s = (0, h.useLocale)(),
            r = (0, m.useRef)(null),
            l = (0, m.createRef)(),
            [c, f] = (0, m.useState)(null),
            [p, b] = (0, m.useState)(i),
            [y, g] = (0, m.useState)(!0),
            [_, N] = (0, m.useState)(!1),
            x = (0, m.useCallback)(((e, a) => () => {
              n && n(e, a), b(e), d({
                event: "video_thumbnail_click",
                link_url: `${o.pathname}?video=${e}`,
                video_id: e,
                video_title: t[a].title,
                video_type: t[a].groupType,
                video_language: s,
                element_placement: "video playlist"
              })
            }), [n, b]);
          return (0, m.useEffect)((() => {
            if (!c) return;
            const e = c.offsetTop - r.current.offsetTop;
            r.current.scroll({
              top: e,
              behavior: "smooth"
            })
          }), [c, r]), (0, m.useEffect)((() => {
            f(l?.current)
          }), [l]), (0, m.useEffect)((() => {
            b(i)
          }), [i]), (0, u.jsxs)("section", {
            className: T.playlist,
            children: [(0, u.jsx)("h2", {
              children: a
            }), (0, u.jsx)("div", {
              ref: r,
              className: [T.videos, y ? "" : T.userNotScrolledToTopOfList, _ ? "" : T.userNotScrolledToBottomOfList].filter((e => e)).join(" "),
              onScroll: e => {
                let {
                  target: {
                    scrollTop: a,
                    scrollHeight: i,
                    clientHeight: t
                  }
                } = e;
                0 === a ? g(!0) : a + t === i ? N(!0) : (g(!1), N(!1))
              },
              children: t.map(((e, a) => (0, u.jsx)(S, {
                ref: e.id === p ? l : null,
                title: e.title,
                thumbnail: `${e.screencap}?im=Resize=400`,
                active: e.id === p,
                onClick: x(e.id, a)
              }, e.id)))
            })]
          })
        },
        j = {
          videoWithPlaylistContainer: "rockstargames-modules-core-videoplayerac04eb44d3988982a1d3be9f94414cbc"
        },
        w = (0, n.withIntl)((e => {
          let {
            className: a,
            locale: i,
            id: t,
            tagIds: n = [],
            playlistTitle: o,
            groupTypes: s = ["trailer", "feature"],
            autoplay: l = !0,
            currentVideoId: c,
            isModal: f = !1
          } = e;
          const {
            track: p
          } = (0, k.useGtmTrack)(), h = {
            groupTypes: s,
            tagIds: n,
            locale: i
          }, [_, N] = (0, v.useSearchParams)(), x = Number(_.get("start") ?? 0), [S, T] = (0, m.useState)(0), {
            loading: w,
            data: E
          } = (0, y.useQuery)(g.videos, {
            variables: h
          }), C = E?.videos?.results;
          return (0, m.useEffect)((() => {
            const e = _.get("video");
            if (!C || !e) return;
            const a = b().findIndex(C, (a => {
              let {
                id: i
              } = a;
              return i === e
            })); - 1 !== a ? (T(a), f && p({
              event: "trackPageview"
            })) : N({
              video: C[0].id
            })
          }), [_.get("video"), C]), (0, m.useEffect)((() => {
            const e = _.get("video");
            if (C && (c || e)) {
              const a = C.find((a => {
                  let {
                    id: i
                  } = a;
                  return e ? i === e : i === c
                })),
                i = C.indexOf(a);
              a && i && S !== i && T(i)
            }
          }), [C]), !w && E && C ? (0, u.jsxs)("section", {
            className: [j.videoWithPlaylistContainer, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            children: [(0, u.jsx)(r.c, {
              id: C[S]?.id,
              context: "site",
              autoplay: l,
              wrapper: !1,
              start: x,
              onVideoComplete: () => {
                const e = S + 1 < C.length ? S + 1 : 0;
                N({
                  video: C[e].id
                })
              },
              locale: i,
              isModal: f
            }), (0, u.jsx)(I, {
              activeVideoId: C[S]?.id,
              title: o,
              videos: C,
              onVideoItemClick: e => {
                N({
                  video: e
                })
              }
            })]
          }) : (0, u.jsx)(d.c, {})
        }), o.intlMessages),
        E = r.c
    },
    85044: e => {
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
              alias: {
                kind: "Name",
                value: "videos"
              },
              name: {
                kind: "Name",
                value: "videos2"
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
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "groupType"
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
          end: 313
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
        body: "query videos($locale: String!, $tagIds: [Int], $groupTypes: [String]) {\n    videos: videos2(\n        locale: $locale\n        tagIds: $tagIds\n        limit: 100\n        groupTypes: $groupTypes\n    ) {\n        results {\n            title\n            id\n            screencap\n            groupType\n        }\n    }\n}\n",
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
          s = new Set;
        for (o.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            d.has(e) || (d.add(e), (t[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
          var t = n(e, a);
          t && i.definitions.push(t)
        })), i
      }(a, "videos")
    }
  }
]);