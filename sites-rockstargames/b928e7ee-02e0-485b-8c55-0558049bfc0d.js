try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b928e7ee-02e0-485b-8c55-0558049bfc0d", e._sentryDebugIdIdentifier = "sentry-dbid-b928e7ee-02e0-485b-8c55-0558049bfc0d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8841], {
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
    33919: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => t
      });
      const t = {
        manuals: "rockstargames-sites-rockstargameseb55004289f272ff0c2edb4cee94da14",
        list: "rockstargames-sites-rockstargamesaa098acaf310cf278c4de2431fbaeeea",
        item: "rockstargames-sites-rockstargamesb6e902db02023703f5f0a3d5890d8e69",
        img: "rockstargames-sites-rockstargamesd0eb028fd1aba073ab3b118631b3d219",
        dropdown: "rockstargames-sites-rockstargamescc04efaf0194d7749e725e0ee5a9ff6c",
        items: "rockstargames-sites-rockstargamesdea536a464dd73c7b322d82f556d9e53",
        detail: "rockstargames-sites-rockstargamesdccf29c3566a4cf45afa0fd9f1833eae",
        rockstar: "rockstargames-sites-rockstargamese59da3763f03f77e07bf96494cd36d86",
        music: "rockstargames-sites-rockstargamesb03166d5d89341d95e219fd0ddb47d30",
        gtaiv: "rockstargames-sites-rockstargamesb3624908876e0642bec50d232449931d",
        vcs: "rockstargames-sites-rockstargamesc0915bf610028f29854e1551f4388381",
        tlad: "rockstargames-sites-rockstargamescda134151dbf874998c55c636f948944",
        bogt: "rockstargames-sites-rockstargamesb44bf362f202f3aff1622ccd1c26dcbc",
        eflc: "rockstargames-sites-rockstargamesd80d316b682f81296b5c76aef7fa5210",
        gameLogo: "rockstargames-sites-rockstargamesc3453cd7ab3e5c70e9d9f2e48cddee19",
        warriors: "rockstargames-sites-rockstargamesd97b382fbe3ab791e8cbde9628e37887",
        album: "rockstargames-sites-rockstargamesf0a3b5fc3d655654a5e8a189001e34f3",
        driver: "rockstargames-sites-rockstargamesf11809befc065d2968d37dd9c2bcd619",
        criticize: "rockstargames-sites-rockstargameseb5aa6000a5ebc7de3e1dcfd1461842a",
        footsteps: "rockstargames-sites-rockstargamesb00d78c98da081b18425b2a0c38ec5d0",
        begood: "rockstargames-sites-rockstargamesb8d439851993382de64fb7fa9ca8083e",
        wheelsofsteel: "rockstargames-sites-rockstargamesee7be3dc6bbee42d9e4fca673620139d",
        cantgetenough: "rockstargames-sites-rockstargamesf1104fb45bce7a09d835ad3ff2631b05",
        theweekend: "rockstargames-sites-rockstargamesca139a293de17389aa44cfb73955d2fd",
        acid: "rockstargames-sites-rockstargamesddc70451c56baf6a6dcc54d23631464f",
        elmalo: "rockstargames-sites-rockstargamesdb703f59970cac7f831b7a6cf4900604",
        ilikeit: "rockstargames-sites-rockstargamesfb3604e015780032a1a9d94bb5129aa2",
        migente: "rockstargames-sites-rockstargamesa87340af663a2c9d23eced5e4b44cf8b",
        quimbara: "rockstargames-sites-rockstargamesfcde0a6718cf03063c1ce36986412168",
        revolt: "rockstargames-sites-rockstargamesd6b89d6b730770319d977206ccf9720a",
        credit: "rockstargames-sites-rockstargamesbcb432ecf11dc3757bf57463c7d1dbe2",
        additional: "rockstargames-sites-rockstargamesec071156b431faaebe2fa671fa0745e3",
        logo: "rockstargames-sites-rockstargamesd657cf66291cb2f9c82d661f19845f42",
        beat: "rockstargames-sites-rockstargamesc83d503176cba893f03f973fd6abb32f",
        "liberty-rock": "rockstargames-sites-rockstargamesbcc105e646ab0b532c4268bb8c1e7d0c",
        lchc: "rockstargames-sites-rockstargamesc27fd92f041c854a65381e3a386b35fe",
        "electro-choc": "rockstargames-sites-rockstargamesb2f37f9c1ffd6d52d1f086a26d7de487",
        "international-funk": "rockstargames-sites-rockstargamese1773642e6e3c88316237696680906b6",
        vladivostok: "rockstargames-sites-rockstargamesa19bb5ed06aa9032c3583aed6f56ec33",
        vibe: "rockstargames-sites-rockstargamesa6b5983c6e15f6906e6632ed9ab22355",
        "tuff-gong": "rockstargames-sites-rockstargamesce9e115d723465f4b0206e0ee7eccfe2",
        "san-juan": "rockstargames-sites-rockstargamesd2dfd7ee9c6675c7f64b71faa15e3b6c",
        "radio-broker": "rockstargames-sites-rockstargamesc1582dd73250b2581649b882a68be223",
        "massive-b": "rockstargames-sites-rockstargamesa8b09593c3e5f7665f085f0fe2cf9e2f",
        k109: "rockstargames-sites-rockstargamesd94692becda7df1364947dbcc6119643",
        journey: "rockstargames-sites-rockstargamese2502b8a6ef35214a48518459af5bd1a",
        jnr: "rockstargames-sites-rockstargamesa43b29d444954f31e48c02cd887819c8",
        interiors: "rockstargames-sites-rockstargamesdd7e97b9f67d735001388a59b775194f",
        fusion: "rockstargames-sites-rockstargamesff1aa11def30f1e621145a3b9aa17a58",
        classics: "rockstargames-sites-rockstargamesc6a5b0f3d5f907e2d770145545a25e48",
        "vice-city": "rockstargames-sites-rockstargamesda23b2224d30e9998402202680f93b48",
        "self-actualization": "rockstargames-sites-rockstargamesb4f7b99ab1934846c34069c3d1cb44e6",
        ramjam: "rockstargames-sites-rockstargamesf3ef9cf03204ecdcec26b73e23726583",
        emotion: "rockstargames-sites-rockstargamesea39a7a740373893b4aab613320ecd92",
        flash: "rockstargames-sites-rockstargamesf0438272be3e66f2f14acbd0fb19febb",
        fresh: "rockstargames-sites-rockstargamesf6c672f656ca9a49457f5335fe0c1751",
        paradise: "rockstargames-sites-rockstargamese19d6dc9258d381dd1ab1e90cfc6ee74",
        espantoso: "rockstargames-sites-rockstargamesb292350b5f41c0ddd7d93dbe488684c7",
        vcfl: "rockstargames-sites-rockstargamesed076c180f450406f97f06a3152b8660",
        vrock: "rockstargames-sites-rockstargamese096ed49c29f4d59d6d5341e2f8f7ed4",
        wave: "rockstargames-sites-rockstargamesf06ba8cfa42e4c8753ab903e5ee6f3a5",
        warriorsCredit: "rockstargames-sites-rockstargamesd268e95141fc29a0747685df9753985a"
      }
    },
    38841: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => g
      });
      var t = s(95966),
        r = s(2973),
        i = s.n(r),
        c = s(18444),
        d = s(33919),
        n = s(70954);
      const o = e => {
          let {
            detail: a
          } = e;
          const {
            sanitize: s
          } = i();
          return (0, n.jsxs)("div", {
            className: d.A.detail,
            children: [(0, n.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: s(a.content)
              }
            }), a.album_cover ? (0, n.jsx)("div", {
              className: [d.A.album, d.A[a.album_cover]].join(" ")
            }) : "", (0, n.jsx)(c.A, {
              to: "/",
              children: (0, n.jsx)("div", {
                className: d.A.rockstar
              })
            })]
          })
        },
        m = (0, t.withTranslations)((e => {
          let {
            stations: a,
            gameId: s,
            t
          } = e;
          const {
            sanitize: r
          } = i();
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("h1", {
              children: t("Music Credits")
            }), a && 55 === a[0].gameId ? (0, n.jsxs)("div", {
              className: d.A.warriorsCredit,
              children: [(0, n.jsx)("p", {
                children: "Score by Steve Donohoe and Neveroddoreven"
              }), (0, n.jsx)("p", {
                children: "Russell Simpson - Guitar"
              }), (0, n.jsx)("p", {
                children: "Jeff Scale - Bass"
              }), (0, n.jsx)("p", {
                children: "Brian Vella - Drums"
              }), (0, n.jsx)("p", {
                children: "Recorded at Metalworks Studios, Toronto"
              }), (0, n.jsx)("p", {
                children: "Engineered by Ian Bodzasi"
              })]
            }) : "", (0, n.jsx)("div", {
              className: [d.A.list, a && 55 === a[0].gameId ? d.A.warriors : ""].join(" "),
              children: a && a.map(((e, i) => (0, n.jsxs)("div", {
                className: d.A.station,
                children: [55 !== e.gameId ? (0, n.jsx)("div", {
                  className: [d.A.logo, d.A[e.slug]].join(" ")
                }) : (0, n.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, n.jsxs)("div", {
                  className: d.A.credit,
                  children: [(0, n.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: r(e.title)
                    }
                  }), (0, n.jsx)("p", {
                    children: e.written_by
                  }), (0, n.jsx)("p", {
                    children: e.published_by
                  }), (0, n.jsx)("p", {
                    children: e.courtesy_of
                  }), e?.music_detail ? (0, n.jsx)("p", {
                    className: d.A.additional,
                    children: (0, n.jsx)(c.A, {
                      to: `music?gameId=${s}&stationId=${a[i].id}&songId=${e.id}`,
                      children: t("Lyrics/Info")
                    })
                  }) : ""]
                }, e.title)))]
              }, e.id)))
            })]
          })
        }));
      var f = s(13204),
        l = s.n(f);
      const g = () => {
        const e = (0, t.useQueryParams)(),
          a = Number(e.get("gameId")),
          s = Number(e.get("songId")),
          r = Number(e.get("stationId"));
        let i = !1;
        const {
          data: c
        } = (0, t.useQuery)(l(), {
          variables: {
            gameId: a
          },
          autoSetLoading: !0
        });
        if (!c) return null;
        const {
          musicStations: f
        } = c;
        return Object.keys(f).length, f.map((e => {
          e.id === r && e.music_credits.map((e => {
            e.id === s && (i = e.music_detail)
          }))
        })), (0, n.jsxs)("div", {
          className: [d.A.music, 25 === a ? d.A.gtaiv : 26 === a ? d.A.tlad : 32 === a ? d.A.bogt : 28 === a ? d.A.eflc : 34 === a ? d.A.vcs : ""].join(" "),
          children: [(0, n.jsx)("div", {
            className: [d.A.gameLogo, 26 === a ? d.A.tlad : 32 === a ? d.A.bogt : 28 === a ? d.A.eflc : 25 === a ? d.A.gtaiv : 34 === a ? d.A.vcs : 55 === a ? d.A.warriors : ""].join(" ")
          }), a && f ? r && s && i ? (0, n.jsx)(o, {
            detail: i
          }) : (0, n.jsx)(m, {
            stations: f,
            gameId: a
          }) : null]
        })
      }
    }
  }
]);