try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b663a980-1991-4051-8b3f-b8330e7e02be", e._sentryDebugIdIdentifier = "sentry-dbid-b663a980-1991-4051-8b3f-b8330e7e02be")
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
  [4681], {
    13204: e => {
      var a = {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query MusicStations($cache: Boolean = true, $gameId: Int!) {\n    musicStations(gameId: $gameId) {\n        id\n        title\n        slug\n        music_credits {\n            id\n            title\n            written_by\n            published_by\n            courtesy_of\n            music_detail {\n                id\n                content\n                album_cover\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.MusicStations = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = t[a] || new Set,
          c = new Set,
          d = new Set;
        for (i.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var n = d;
          d = new Set, n.forEach((function(e) {
            c.has(e) || (c.add(e), (t[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }(a, "MusicStations")
    },
    20204: (e, a, s) => {
      "use strict";
      s.d(a, {
        Ay: () => t
      });
      const t = {
        acid: "rockstargames-sites-rockstargamesddc70451c56baf6a6dcc54d23631464f",
        additional: "rockstargames-sites-rockstargamesec071156b431faaebe2fa671fa0745e3",
        album: "rockstargames-sites-rockstargamesf0a3b5fc3d655654a5e8a189001e34f3",
        beat: "rockstargames-sites-rockstargamesc83d503176cba893f03f973fd6abb32f",
        begood: "rockstargames-sites-rockstargamesb8d439851993382de64fb7fa9ca8083e",
        bogt: "rockstargames-sites-rockstargamesb44bf362f202f3aff1622ccd1c26dcbc",
        cantgetenough: "rockstargames-sites-rockstargamesf1104fb45bce7a09d835ad3ff2631b05",
        classics: "rockstargames-sites-rockstargamesc6a5b0f3d5f907e2d770145545a25e48",
        credit: "rockstargames-sites-rockstargamesbcb432ecf11dc3757bf57463c7d1dbe2",
        criticize: "rockstargames-sites-rockstargameseb5aa6000a5ebc7de3e1dcfd1461842a",
        detail: "rockstargames-sites-rockstargamesdccf29c3566a4cf45afa0fd9f1833eae",
        driver: "rockstargames-sites-rockstargamesf11809befc065d2968d37dd9c2bcd619",
        dropdown: "rockstargames-sites-rockstargamescc04efaf0194d7749e725e0ee5a9ff6c",
        eflc: "rockstargames-sites-rockstargamesd80d316b682f81296b5c76aef7fa5210",
        "electro-choc": "rockstargames-sites-rockstargamesb2f37f9c1ffd6d52d1f086a26d7de487",
        elmalo: "rockstargames-sites-rockstargamesdb703f59970cac7f831b7a6cf4900604",
        emotion: "rockstargames-sites-rockstargamesea39a7a740373893b4aab613320ecd92",
        espantoso: "rockstargames-sites-rockstargamesb292350b5f41c0ddd7d93dbe488684c7",
        flash: "rockstargames-sites-rockstargamesf0438272be3e66f2f14acbd0fb19febb",
        footsteps: "rockstargames-sites-rockstargamesb00d78c98da081b18425b2a0c38ec5d0",
        fresh: "rockstargames-sites-rockstargamesf6c672f656ca9a49457f5335fe0c1751",
        fusion: "rockstargames-sites-rockstargamesff1aa11def30f1e621145a3b9aa17a58",
        gameLogo: "rockstargames-sites-rockstargamesc3453cd7ab3e5c70e9d9f2e48cddee19",
        gtaiv: "rockstargames-sites-rockstargamesb3624908876e0642bec50d232449931d",
        ilikeit: "rockstargames-sites-rockstargamesfb3604e015780032a1a9d94bb5129aa2",
        img: "rockstargames-sites-rockstargamesd0eb028fd1aba073ab3b118631b3d219",
        interiors: "rockstargames-sites-rockstargamesdd7e97b9f67d735001388a59b775194f",
        "international-funk": "rockstargames-sites-rockstargamese1773642e6e3c88316237696680906b6",
        item: "rockstargames-sites-rockstargamesb6e902db02023703f5f0a3d5890d8e69",
        items: "rockstargames-sites-rockstargamesdea536a464dd73c7b322d82f556d9e53",
        jnr: "rockstargames-sites-rockstargamesa43b29d444954f31e48c02cd887819c8",
        journey: "rockstargames-sites-rockstargamese2502b8a6ef35214a48518459af5bd1a",
        k109: "rockstargames-sites-rockstargamesd94692becda7df1364947dbcc6119643",
        lchc: "rockstargames-sites-rockstargamesc27fd92f041c854a65381e3a386b35fe",
        "liberty-rock": "rockstargames-sites-rockstargamesbcc105e646ab0b532c4268bb8c1e7d0c",
        list: "rockstargames-sites-rockstargamesaa098acaf310cf278c4de2431fbaeeea",
        logo: "rockstargames-sites-rockstargamesd657cf66291cb2f9c82d661f19845f42",
        manuals: "rockstargames-sites-rockstargameseb55004289f272ff0c2edb4cee94da14",
        "massive-b": "rockstargames-sites-rockstargamesa8b09593c3e5f7665f085f0fe2cf9e2f",
        migente: "rockstargames-sites-rockstargamesa87340af663a2c9d23eced5e4b44cf8b",
        music: "rockstargames-sites-rockstargamesb03166d5d89341d95e219fd0ddb47d30",
        paradise: "rockstargames-sites-rockstargamese19d6dc9258d381dd1ab1e90cfc6ee74",
        quimbara: "rockstargames-sites-rockstargamesfcde0a6718cf03063c1ce36986412168",
        "radio-broker": "rockstargames-sites-rockstargamesc1582dd73250b2581649b882a68be223",
        ramjam: "rockstargames-sites-rockstargamesf3ef9cf03204ecdcec26b73e23726583",
        revolt: "rockstargames-sites-rockstargamesd6b89d6b730770319d977206ccf9720a",
        rockstar: "rockstargames-sites-rockstargamese59da3763f03f77e07bf96494cd36d86",
        "san-juan": "rockstargames-sites-rockstargamesd2dfd7ee9c6675c7f64b71faa15e3b6c",
        "self-actualization": "rockstargames-sites-rockstargamesb4f7b99ab1934846c34069c3d1cb44e6",
        theweekend: "rockstargames-sites-rockstargamesca139a293de17389aa44cfb73955d2fd",
        tlad: "rockstargames-sites-rockstargamescda134151dbf874998c55c636f948944",
        "tuff-gong": "rockstargames-sites-rockstargamesce9e115d723465f4b0206e0ee7eccfe2",
        vcfl: "rockstargames-sites-rockstargamesed076c180f450406f97f06a3152b8660",
        vcs: "rockstargames-sites-rockstargamesc0915bf610028f29854e1551f4388381",
        vibe: "rockstargames-sites-rockstargamesa6b5983c6e15f6906e6632ed9ab22355",
        "vice-city": "rockstargames-sites-rockstargamesda23b2224d30e9998402202680f93b48",
        vladivostok: "rockstargames-sites-rockstargamesa19bb5ed06aa9032c3583aed6f56ec33",
        vrock: "rockstargames-sites-rockstargamese096ed49c29f4d59d6d5341e2f8f7ed4",
        warriors: "rockstargames-sites-rockstargamesd97b382fbe3ab791e8cbde9628e37887",
        warriorsCredit: "rockstargames-sites-rockstargamesd268e95141fc29a0747685df9753985a",
        wave: "rockstargames-sites-rockstargamesf06ba8cfa42e4c8753ab903e5ee6f3a5",
        wheelsofsteel: "rockstargames-sites-rockstargamesee7be3dc6bbee42d9e4fca673620139d"
      }
    },
    84681: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => g
      });
      var t = s(42295),
        r = s(95966),
        i = s(2973),
        c = s.n(i),
        d = s(14200),
        n = s(20204);
      const o = ({
          detail: e
        }) => {
          const {
            sanitize: a
          } = c();
          return (0, t.jsxs)("div", {
            className: n.Ay.detail,
            children: [(0, t.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: a(e.content)
              }
            }), e.album_cover ? (0, t.jsx)("div", {
              className: [n.Ay.album, n.Ay[e.album_cover]].join(" ")
            }) : "", (0, t.jsx)(d.A, {
              to: "/",
              children: (0, t.jsx)("div", {
                className: n.Ay.rockstar
              })
            })]
          })
        },
        m = (0, r.withTranslations)((({
          stations: e,
          gameId: a,
          t: s
        }) => {
          const {
            sanitize: r
          } = c();
          return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("h1", {
              children: s("Music Credits")
            }), e && 55 === e[0].gameId ? (0, t.jsxs)("div", {
              className: n.Ay.warriorsCredit,
              children: [(0, t.jsx)("p", {
                children: "Score by Steve Donohoe and Neveroddoreven"
              }), (0, t.jsx)("p", {
                children: "Russell Simpson - Guitar"
              }), (0, t.jsx)("p", {
                children: "Jeff Scale - Bass"
              }), (0, t.jsx)("p", {
                children: "Brian Vella - Drums"
              }), (0, t.jsx)("p", {
                children: "Recorded at Metalworks Studios, Toronto"
              }), (0, t.jsx)("p", {
                children: "Engineered by Ian Bodzasi"
              })]
            }) : "", (0, t.jsx)("div", {
              className: [n.Ay.list, e && 55 === e[0].gameId ? n.Ay.warriors : ""].join(" "),
              children: e && e.map(((i, c) => (0, t.jsxs)("div", {
                className: n.Ay.station,
                children: [55 !== i.gameId ? (0, t.jsx)("div", {
                  className: [n.Ay.logo, n.Ay[i.slug]].join(" ")
                }) : (0, t.jsx)("h3", {
                  children: i.title
                }), i.music_credits && i.music_credits.map((i => (0, t.jsxs)("div", {
                  className: n.Ay.credit,
                  children: [(0, t.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: r(i.title)
                    }
                  }), (0, t.jsx)("p", {
                    children: i.written_by
                  }), (0, t.jsx)("p", {
                    children: i.published_by
                  }), (0, t.jsx)("p", {
                    children: i.courtesy_of
                  }), i?.music_detail ? (0, t.jsx)("p", {
                    className: n.Ay.additional,
                    children: (0, t.jsx)(d.A, {
                      to: `music?gameId=${a}&stationId=${e[c].id}&songId=${i.id}`,
                      children: s("Lyrics/Info")
                    })
                  }) : ""]
                }, i.title)))]
              }, i.id)))
            })]
          })
        }));
      var f = s(13204),
        l = s.n(f);
      const g = () => {
        const e = (0, r.useQueryParams)(),
          a = Number(e.get("gameId")),
          s = Number(e.get("songId")),
          i = Number(e.get("stationId"));
        let c = !1;
        const {
          data: d
        } = (0, r.useQuery)(l(), {
          variables: {
            gameId: a
          },
          autoSetLoading: !0
        });
        if (!d) return null;
        const {
          musicStations: f
        } = d;
        return Object.keys(f).length, f.map((e => {
          e.id === i && e.music_credits.map((e => {
            e.id === s && (c = e.music_detail)
          }))
        })), (0, t.jsxs)("div", {
          className: [n.Ay.music, 25 === a ? n.Ay.gtaiv : 26 === a ? n.Ay.tlad : 32 === a ? n.Ay.bogt : 28 === a ? n.Ay.eflc : 34 === a ? n.Ay.vcs : ""].join(" "),
          children: [(0, t.jsx)("div", {
            className: [n.Ay.gameLogo, 26 === a ? n.Ay.tlad : 32 === a ? n.Ay.bogt : 28 === a ? n.Ay.eflc : 25 === a ? n.Ay.gtaiv : 34 === a ? n.Ay.vcs : 55 === a ? n.Ay.warriors : ""].join(" ")
          }), a && f ? i && s && c ? (0, t.jsx)(o, {
            detail: c
          }) : (0, t.jsx)(m, {
            stations: f,
            gameId: a
          }) : null]
        })
      }
    }
  }
]);