(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [872], {
    4872: (e, i, a) => {
      "use strict";
      a.r(i), a.d(i, {
        PlayerWithInfo: () => c,
        VideoWithPlaylist: () => T,
        default: () => j,
        useVideoData: () => s.CP
      });
      var n = a(8976),
        t = a(5812),
        d = a(6493),
        l = a(610),
        s = a(8590);
      const o = {
        embed: "bbd695bb0414167bedc5d4b57a6ce58d98e1",
        details: "bbd695bb0414167bed0e45925b31e0dd9b3d",
        top: "bbd695bb0414167bca606836a2761a2226d8"
      };
      var r = a(6160);
      const c = e => {
        let {
          autoplay: i = !0,
          videoId: a,
          videoChangeCallback: c
        } = e;
        const {
          loading: u,
          video: b
        } = (0, s.CP)({
          id: a
        });
        return !b || u ? (0, r.jsx)(d.Z, {
          hero: !0,
          children: (0, r.jsx)(t.Z, {})
        }) : (0, r.jsxs)("section", {
          className: o.marquee,
          children: [(0, r.jsx)("div", {
            className: o.embed,
            children: (0, r.jsx)(l.Z, {
              id: b.id,
              context: "site",
              autoplay: i,
              wrapper: !1,
              videoChangeCallback: c
            })
          }), (0, r.jsxs)("div", {
            className: o.details,
            children: [(0, r.jsxs)("div", {
              className: o.top,
              children: [(0, r.jsx)("h5", {
                children: (0, r.jsx)(n.A, {
                  to: `/videos?type=game&gameId=${b?.game?.sku_id??b.game.id}`,
                  children: b.game.title
                })
              }), (0, r.jsx)("time", {
                dateTime: b.created,
                children: b.created_formatted
              })]
            }), (0, r.jsx)("h2", {
              children: b.title
            }), (0, r.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: b.description
              }
            })]
          })]
        })
      };
      var u = a(4932),
        b = a(1424),
        m = a(3653),
        v = a.n(m),
        f = a(4859),
        p = a(6711),
        k = a(9206),
        h = a(1570);
      const g = {
          itemContainer: "bbd695bb0414167badda1107f986a15ecce7",
          playIcon: "bbd695bb0414167bc2a894470a1d23302653",
          thumbnail: "bbd695bb0414167baef1b1e2e36a2e39fac5",
          active: "bbd695bb0414167baa393140e74a0796f7f0",
          iconAndThumbnail: "bbd695bb0414167bfc1f13bd15d3b23199e0",
          playIconContainer: "bbd695bb0414167bb51d94ce719addd90aa4",
          activeVideoTextIndicator: "bbd695bb0414167be87fb17a44134b7cf737",
          textContainer: "bbd695bb0414167bff056f85c210ec656b05"
        },
        y = (0, u.forwardRef)(((e, i) => {
          let {
            title: n,
            thumbnail: t,
            active: d = !1,
            onClick: l = (() => {})
          } = e;
          const {
            formatMessage: o
          } = (0, h.useIntl)();
          return (0, r.jsxs)("button", {
            ref: i,
            className: [g.itemContainer, d ? g.active : ""].filter((e => e)).join(" "),
            onClick: l,
            type: "button",
            children: [(0, r.jsxs)("div", {
              className: g.iconAndThumbnail,
              children: [(0, r.jsx)("div", {
                className: g.playIconContainer,
                children: (0, r.jsx)("img", {
                  className: g.playIcon,
                  src: a(2938),
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
          playlist: "bbd695bb0414167bb02682c91020feb255da",
          videos: "bbd695bb0414167bda75923177ac9a87dd44",
          userNotScrolledToTopOfList: "bbd695bb0414167be05356dcbb6935f79ed7",
          userNotScrolledToBottomOfList: "bbd695bb0414167bdaa065c7238b99988833"
        },
        x = e => {
          let {
            title: i,
            activeVideoId: a,
            videos: n = [],
            onVideoItemClick: t = (() => {})
          } = e;
          const {
            track: d
          } = (0, p.useGtmTrack)(), l = (0, u.useRef)(null), s = (0, u.createRef)(), [o, c] = (0, u.useState)(null), [b, m] = (0, u.useState)(a), [v, f] = (0, u.useState)(!0), [k, h] = (0, u.useState)(!1);
          return (0, u.useEffect)((() => {
            if (!o) return;
            const e = o.offsetTop - l.current.offsetTop;
            l.current.scroll({
              top: e,
              behavior: "smooth"
            })
          }), [o, l]), (0, u.useEffect)((() => {
            c(s?.current)
          }), [s]), (0, u.useEffect)((() => {
            m(a)
          }), [a]), (0, r.jsxs)("section", {
            className: N.playlist,
            children: [(0, r.jsx)("h2", {
              children: i
            }), (0, r.jsx)("div", {
              ref: l,
              className: [N.videos, v ? "" : N.userNotScrolledToTopOfList, k ? "" : N.userNotScrolledToBottomOfList].filter((e => e)).join(" "),
              onScroll: e => {
                let {
                  target: {
                    scrollTop: i,
                    scrollHeight: a,
                    clientHeight: n
                  }
                } = e;
                0 === i ? f(!0) : i + n === a ? h(!0) : (f(!1), h(!1))
              },
              children: n.map(((e, i) => (0, r.jsx)(y, {
                ref: e.id === b ? s : null,
                title: e.title,
                thumbnail: `${e.screencap}?im=Resize=400`,
                active: e.id === b,
                onClick: () => ((e, i) => {
                  t && t(e, i), m(e), d({
                    event: "video_thumbnail_click",
                    link_url: `?video=${e}`
                  })
                })(e.id, i)
              }, e.id)))
            })]
          })
        },
        S = {
          videoWithPlaylistContainer: "bbd695bb0414167bf6aa5059eaedbf70ac0d"
        },
        T = e => {
          let {
            className: i,
            locale: a,
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
            locale: a
          }, N = (0, f.uriForGraphEnv)(window.env.graphEnv), [T, j] = (0, b.useSearchParams)(), [I, C] = (0, u.useState)(0), {
            loading: V,
            data: _
          } = (0, f.useQuery)(k.videos, {
            variables: y,
            context: {
              uri: N
            }
          }), E = _?.videos?.results;
          return (0, u.useEffect)((() => {
            const e = Number(T.get("video"));
            if (!E || !e) return;
            const i = v().findIndex(E, (i => {
              let {
                id: a
              } = i;
              return a === e
            }));
            C(i), h && g({
              event: "trackPageview"
            })
          }), [T.get("video"), E]), (0, u.useEffect)((() => {
            const e = Number(T.get("video"));
            if (E && (m || e)) {
              const i = E.find((i => {
                  let {
                    id: a
                  } = i;
                  return e ? a === e : a === m
                })),
                a = E.indexOf(i);
              i && a && I !== a && C(a)
            }
          }), [E]), !V && _ && E ? (0, r.jsxs)("section", {
            className: [S.videoWithPlaylistContainer, i ?? ""].filter((e => e)).join(" "),
            id: n ?? "",
            children: [(0, r.jsx)(l.Z, {
              id: E[I]?.id,
              context: "site",
              autoplay: c,
              wrapper: !1,
              explicitGraphEnv: undefined,
              onVideoComplete: () => {
                const e = I + 1 < E.length ? I + 1 : 0;
                j({
                  video: E[e].id
                })
              },
              locale: a
            }), (0, r.jsx)(x, {
              activeVideoId: E[I]?.id,
              title: s,
              videos: E,
              onVideoItemClick: e => {
                j({
                  video: e
                })
              }
            })]
          }) : (0, r.jsx)(t.Z, {})
        },
        j = l.Z
    },
    9206: e => {
      var i = {
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

      function a(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && i.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, i)
        }))
      }
      i.loc.source = {
        body: "query videos($locale: String!, $tagIds: [Int], $groupTypes: [String]) {\n    videos(\n        locale: $locale\n        tagIds: $tagIds\n        limit: 100\n        groupTypes: $groupTypes\n    ) {\n        results {\n            title\n            id\n            screencap\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function t(e, i) {
        for (var a = 0; a < e.definitions.length; a++) {
          var n = e.definitions[a];
          if (n.name && n.name.value == i) return n
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          a(e, i), n[e.name.value] = i
        }
      })), e.exports = i, e.exports.videos = function(e, i) {
        var a = {
          kind: e.kind,
          definitions: [t(e, i)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var d = n[i] || new Set,
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
        return l.forEach((function(i) {
          var n = t(e, i);
          n && a.definitions.push(n)
        })), a
      }(i, "videos")
    },
    2938: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3ffdb1e004aa0d8bde9d.svg"
    }
  }
]);