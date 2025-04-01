! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      i = (new Error).stack;
    i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "dc4f64fb-d114-4a9f-8545-51048e34a853", e._sentryDebugIdIdentifier = "sentry-dbid-dc4f64fb-d114-4a9f-8545-51048e34a853")
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
  [7547], {
    17547: (e, i, n) => {
      "use strict";
      n.r(i), n.d(i, {
        default: () => f
      });
      var a = n(95966),
        t = n(2973),
        d = n.n(t),
        s = n(45768),
        l = n(2681),
        r = n(73855);
      const o = e => {
          let {
            detail: i
          } = e;
          const {
            sanitize: n
          } = d();
          return (0, r.jsxs)("div", {
            className: l.A.detail,
            children: [(0, r.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: n(i.content)
              }
            }), i.album_cover ? (0, r.jsx)("div", {
              className: [l.A.album, l.A[i.album_cover]].join(" ")
            }) : "", (0, r.jsx)(s.A, {
              to: "/",
              children: (0, r.jsx)("div", {
                className: l.A.rockstar
              })
            })]
          })
        },
        c = (0, a.withTranslations)((e => {
          let {
            stations: i,
            gameId: n,
            t: a
          } = e;
          const {
            sanitize: t
          } = d();
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("h1", {
              children: a("Music Credits")
            }), i && 55 === i[0].game_id ? (0, r.jsxs)("div", {
              className: l.A.warriorsCredit,
              children: [(0, r.jsx)("p", {
                children: "Score by Steve Donohoe and Neveroddoreven"
              }), (0, r.jsx)("p", {
                children: "Russell Simpson - Guitar"
              }), (0, r.jsx)("p", {
                children: "Jeff Scale - Bass"
              }), (0, r.jsx)("p", {
                children: "Brian Vella - Drums"
              }), (0, r.jsx)("p", {
                children: "Recorded at Metalworks Studios, Toronto"
              }), (0, r.jsx)("p", {
                children: "Engineered by Ian Bodzasi"
              })]
            }) : "", (0, r.jsx)("div", {
              className: [l.A.list, i && 55 === i[0].game_id ? l.A.warriors : ""].join(" "),
              children: i && i.map(((e, d) => (0, r.jsxs)("div", {
                className: l.A.station,
                children: [55 !== e.game_id ? (0, r.jsx)("div", {
                  className: [l.A.logo, l.A[e.slug]].join(" ")
                }) : (0, r.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, r.jsxs)("div", {
                  className: l.A.credit,
                  children: [(0, r.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: t(e.title)
                    }
                  }), (0, r.jsx)("p", {
                    children: e.written_by
                  }), (0, r.jsx)("p", {
                    children: e.published_by
                  }), (0, r.jsx)("p", {
                    children: e.courtesy_of
                  }), e?.music_detail ? (0, r.jsx)("p", {
                    className: l.A.additional,
                    children: (0, r.jsx)(s.A, {
                      to: `music?gameId=${n}&stationId=${i[d].id}&songId=${e.id}`,
                      children: a("Lyrics/Info")
                    })
                  }) : ""]
                }, e.title)))]
              }, e.id)))
            })]
          })
        }));
      var u = n(13204),
        m = n.n(u);
      const f = () => {
        const e = (0, a.useQueryParams)(),
          i = Number(e.get("gameId")),
          n = Number(e.get("songId")),
          t = Number(e.get("stationId"));
        let d = !1;
        const {
          data: s
        } = (0, a.useQuery)(m(), {
          variables: {
            gameId: i
          },
          autoSetLoading: !0
        });
        if (!s) return null;
        const {
          musicStations: u
        } = s;
        return Object.keys(u).length, u.map((e => {
          e.id === t && e.music_credits.map((e => {
            e.id === n && (d = e.music_detail)
          }))
        })), (0, r.jsxs)("div", {
          className: [l.A.music, 25 === i ? l.A.gtaiv : 26 === i ? l.A.tlad : 32 === i ? l.A.bogt : 28 === i ? l.A.eflc : 34 === i ? l.A.vcs : ""].join(" "),
          children: [(0, r.jsx)("div", {
            className: [l.A.gameLogo, 26 === i ? l.A.tlad : 32 === i ? l.A.bogt : 28 === i ? l.A.eflc : 25 === i ? l.A.gtaiv : 34 === i ? l.A.vcs : 55 === i ? l.A.warriors : ""].join(" ")
          }), i && u ? t && n && d ? (0, r.jsx)(o, {
            detail: d
          }) : (0, r.jsx)(c, {
            stations: u,
            gameId: i
          }) : null]
        })
      }
    },
    13204: e => {
      var i = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MusicStations"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
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
              value: !0
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "gameId"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "musicStations"
              },
              arguments: [{
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
              }],
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
                    value: "slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "music_credits"
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
                        value: "written_by"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "published_by"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "courtesy_of"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "music_detail"
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
                            value: "content"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "album_cover"
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
          end: 395
        }
      };

      function n(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && i.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, i)
        }))
      }
      i.loc.source = {
        body: "query MusicStations($cache: Boolean = true, $gameId: Int!) {\n    musicStations(gameId: $gameId) {\n        id\n        title\n        slug\n        music_credits {\n            id\n            title\n            written_by\n            published_by\n            courtesy_of\n            music_detail {\n                id\n                content\n                album_cover\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function t(e, i) {
        for (var n = 0; n < e.definitions.length; n++) {
          var a = e.definitions[n];
          if (a.name && a.name.value == i) return a
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          n(e, i), a[e.name.value] = i
        }
      })), e.exports = i, e.exports.MusicStations = function(e, i) {
        var n = {
          kind: e.kind,
          definitions: [t(e, i)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var d = a[i] || new Set,
          s = new Set,
          l = new Set;
        for (d.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var r = l;
          l = new Set, r.forEach((function(e) {
            s.has(e) || (s.add(e), (a[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return s.forEach((function(i) {
          var a = t(e, i);
          a && n.definitions.push(a)
        })), n
      }(i, "MusicStations")
    }
  }
]);