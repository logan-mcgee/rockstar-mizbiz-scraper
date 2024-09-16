! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "65d715d6-1718-464f-adfb-27c27082c43f", e._sentryDebugIdIdentifier = "sentry-dbid-65d715d6-1718-464f-adfb-27c27082c43f")
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
  [3798], {
    93798: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => k
      });
      var t = s(58407),
        r = s(42756),
        i = s(61631),
        c = s.n(i),
        d = s(60285),
        n = s(55770),
        o = s(46632);
      const m = e => {
          let {
            detail: a
          } = e;
          const {
            sanitize: s
          } = c();
          return (0, o.jsxs)("div", {
            className: n.A.detail,
            children: [(0, o.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: s(a.content)
              }
            }), a.album_cover ? (0, o.jsx)("div", {
              className: [n.A.album, n.A[a.album_cover]].join(" ")
            }) : "", (0, o.jsx)(d.A, {
              to: "/",
              children: (0, o.jsx)("div", {
                className: n.A.rockstar
              })
            })]
          })
        },
        f = (0, r.withTranslations)((e => {
          let {
            stations: a,
            gameId: s,
            t
          } = e;
          const {
            sanitize: r
          } = c();
          return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("h1", {
              children: t("Music Credits")
            }), a && 55 === a[0].game_id ? (0, o.jsxs)("div", {
              className: n.A.warriorsCredit,
              children: [(0, o.jsx)("p", {
                children: "Score by Steve Donohoe and Neveroddoreven"
              }), (0, o.jsx)("p", {
                children: "Russell Simpson - Guitar"
              }), (0, o.jsx)("p", {
                children: "Jeff Scale - Bass"
              }), (0, o.jsx)("p", {
                children: "Brian Vella - Drums"
              }), (0, o.jsx)("p", {
                children: "Recorded at Metalworks Studios, Toronto"
              }), (0, o.jsx)("p", {
                children: "Engineered by Ian Bodzasi"
              })]
            }) : "", (0, o.jsx)("div", {
              className: [n.A.list, a && 55 === a[0].game_id ? n.A.warriors : ""].join(" "),
              children: a && a.map(((e, i) => (0, o.jsxs)("div", {
                className: n.A.station,
                children: [55 !== e.game_id ? (0, o.jsx)("div", {
                  className: [n.A.logo, n.A[e.slug]].join(" ")
                }) : (0, o.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, o.jsxs)("div", {
                  className: n.A.credit,
                  children: [(0, o.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: r(e.title)
                    }
                  }), (0, o.jsx)("p", {
                    children: e.written_by
                  }), (0, o.jsx)("p", {
                    children: e.published_by
                  }), (0, o.jsx)("p", {
                    children: e.courtesy_of
                  }), e?.music_detail ? (0, o.jsx)("p", {
                    className: n.A.additional,
                    children: (0, o.jsx)(d.A, {
                      to: `music?gameId=${s}&stationId=${a[i].id}&songId=${e.id}`,
                      children: t("Lyrics/Info")
                    })
                  }) : ""]
                }, e.title)))]
              }, e.id)))
            })]
          })
        }));
      var l = s(82089),
        g = s.n(l);
      const k = () => {
        const e = (0, r.useQueryParams)(),
          a = Number(e.get("gameId")),
          s = Number(e.get("songId")),
          i = Number(e.get("stationId"));
        let c = !1;
        const {
          data: d
        } = (0, t.useQuery)(g(), {
          variables: {
            gameId: a
          },
          autoSetLoading: !0
        });
        if (!d) return null;
        const {
          musicStations: l
        } = d;
        return Object.keys(l).length, l.map((e => {
          e.id === i && e.music_credits.map((e => {
            e.id === s && (c = e.music_detail)
          }))
        })), (0, o.jsxs)("div", {
          className: [n.A.music, 25 === a ? n.A.gtaiv : 26 === a ? n.A.tlad : 32 === a ? n.A.bogt : 28 === a ? n.A.eflc : 34 === a ? n.A.vcs : ""].join(" "),
          children: [(0, o.jsx)("div", {
            className: [n.A.gameLogo, 26 === a ? n.A.tlad : 32 === a ? n.A.bogt : 28 === a ? n.A.eflc : 25 === a ? n.A.gtaiv : 34 === a ? n.A.vcs : 55 === a ? n.A.warriors : ""].join(" ")
          }), a && l ? i && s && c ? (0, o.jsx)(m, {
            detail: c
          }) : (0, o.jsx)(f, {
            stations: l,
            gameId: a
          }) : null]
        })
      }
    },
    82089: e => {
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
    55770: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => t
      });
      const t = {
        manuals: "rockstargames-sites-rockstargamesd366f1535618977c9069ab44ed0bd2d4",
        list: "rockstargames-sites-rockstargamesebdbff5c268a40fcdd09c5738f9cb3f6",
        item: "rockstargames-sites-rockstargameseddd4442eabbeb01f7a33e84439fec06",
        img: "rockstargames-sites-rockstargamesaaaf6f13ef1c4248e48b772ff13a3ec2",
        dropdown: "rockstargames-sites-rockstargamesa097e5237ea4f58077c4b173a060af63",
        items: "rockstargames-sites-rockstargamesd216c8f3cea7aa52a0425773ed8ce3de",
        detail: "rockstargames-sites-rockstargamesf96273be7a357953000cb08c1929187e",
        rockstar: "rockstargames-sites-rockstargamese6757323962a726a229c781add11aff9",
        music: "rockstargames-sites-rockstargamesb377d8c5ecc4faa508b0edd8a13cf1c7",
        gtaiv: "rockstargames-sites-rockstargamesf54af395872837e54fa5cdcc017a8b78",
        vcs: "rockstargames-sites-rockstargamesdd3c7060d7078b88a44ff7bf1522302d",
        tlad: "rockstargames-sites-rockstargamesb900b403d8ff1af48f946bbb905ddea6",
        bogt: "rockstargames-sites-rockstargamesa45583258c6a317fd0e4b1a510d4dfe5",
        eflc: "rockstargames-sites-rockstargamesdbeaa00ed7de5ffbb3bda1d5e0d2df37",
        gameLogo: "rockstargames-sites-rockstargamesf1528d3bd79039eb1c1c195fdc660bc9",
        warriors: "rockstargames-sites-rockstargamesb2ca55a944280f00f04243db15b10a5a",
        album: "rockstargames-sites-rockstargamesd54ea769accf6abc53a9fe6892d00ec3",
        driver: "rockstargames-sites-rockstargamese3ee70504a874203ed575eb6c2d53c6b",
        criticize: "rockstargames-sites-rockstargamesc7caf0bf3d0e016dd01146455020791e",
        footsteps: "rockstargames-sites-rockstargamesefd34659a5d9540e68f3a26db67a238c",
        begood: "rockstargames-sites-rockstargamesbe5d894aff9566cc3e48ec35d30098f7",
        wheelsofsteel: "rockstargames-sites-rockstargamesf4f27b9bddb1c6a74ac5d8f8002d2fdf",
        cantgetenough: "rockstargames-sites-rockstargamesb44b874e865dacac2d70385e5ed2dbe9",
        theweekend: "rockstargames-sites-rockstargamesadd852d190a421797c945110b3f6414e",
        acid: "rockstargames-sites-rockstargamesb64adb1a8a6305dd5056f3bc3ce8ca2c",
        elmalo: "rockstargames-sites-rockstargamescfacba437372d8cea5d5115625208fd4",
        ilikeit: "rockstargames-sites-rockstargamesc5178e4cadd35df860589ad3693b9847",
        migente: "rockstargames-sites-rockstargamesa690039a2d4653771385fdfb9acfb2ab",
        quimbara: "rockstargames-sites-rockstargamesfc6b7f85919fb39485ceb01da6835012",
        revolt: "rockstargames-sites-rockstargamese159095009958ab9e2bac01249607d94",
        credit: "rockstargames-sites-rockstargamesdb1580d7a4cecbbf72211cf8ffce89ca",
        additional: "rockstargames-sites-rockstargamesa0d4de92597ec0fb66cfc08a37ce554f",
        logo: "rockstargames-sites-rockstargamesc13987459881ff93489031b6438e8b3e",
        beat: "rockstargames-sites-rockstargamesf866be94c61633fbb070b541215ab178",
        "liberty-rock": "rockstargames-sites-rockstargamesdcec78bdf2af899b3c3a9e33e406d245",
        lchc: "rockstargames-sites-rockstargamesac82c4099ad92d7aa5e21a81d12a9825",
        "electro-choc": "rockstargames-sites-rockstargamese36c3a393b666cc783b6da0193941b51",
        "international-funk": "rockstargames-sites-rockstargamesf8816edff983c4c355d145eb5168dab9",
        vladivostok: "rockstargames-sites-rockstargamesee6cea3c69872da53ccc1bb8452f547c",
        vibe: "rockstargames-sites-rockstargamesd140a7bb5d71adce49ebba088ef90b1c",
        "tuff-gong": "rockstargames-sites-rockstargamesda7100a433c32b29a764548c0438ff8e",
        "san-juan": "rockstargames-sites-rockstargamesa03f6abaf495dad626d1c6203d59d3d4",
        "radio-broker": "rockstargames-sites-rockstargamesb2aa17a643b615fe152b5cf95dcd933d",
        "massive-b": "rockstargames-sites-rockstargamesa546560279ccd7024f6d0139de2e930b",
        k109: "rockstargames-sites-rockstargamese428b797ee6d106e6f5cafd5808c3a1e",
        journey: "rockstargames-sites-rockstargamesaa890f195c58ae8473b92d046379d68a",
        jnr: "rockstargames-sites-rockstargamescc35cdfae6e608e745ead0c657a71c17",
        interiors: "rockstargames-sites-rockstargamese973dd509394ab7f75be0e1333896c23",
        fusion: "rockstargames-sites-rockstargamesa0bb8d4b8f9379e6aaa963b955068656",
        classics: "rockstargames-sites-rockstargamesbb0bd1f794a6629ef7f263616ae448d3",
        "vice-city": "rockstargames-sites-rockstargamese36e9bc8f64a27c46ebaffba48737016",
        "self-actualization": "rockstargames-sites-rockstargamesf79a76b4508e55968345add724a9c53c",
        ramjam: "rockstargames-sites-rockstargamesac75e7c529e6822e3c321c2db0a93941",
        emotion: "rockstargames-sites-rockstargamesaafb2148f4cc12c97fee7c75352fc905",
        flash: "rockstargames-sites-rockstargamesd2adf88d548f3d85f426f5fce338f6ca",
        fresh: "rockstargames-sites-rockstargamesf692d050da8daca639b2bd00a2a5ad58",
        paradise: "rockstargames-sites-rockstargamese2ff9f40025bd5a3baa71f0f6aeb9ee1",
        espantoso: "rockstargames-sites-rockstargamesf5cde0476926d5717dbe5775d9d2f3c8",
        vcfl: "rockstargames-sites-rockstargamesd52d83e3218646aa702df200cda382c0",
        vrock: "rockstargames-sites-rockstargamesadb55f57e5d3fc124160809ab41ee130",
        wave: "rockstargames-sites-rockstargamesd4ab4de6125afb16136d7c34b8829cf2",
        warriorsCredit: "rockstargames-sites-rockstargamesc73dbe223b5a37cc86f32feeb506ca61"
      }
    }
  }
]);