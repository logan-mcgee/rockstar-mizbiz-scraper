try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ef9cdf77-80e6-40dc-b75d-3b0330666056", e._sentryDebugIdIdentifier = "sentry-dbid-ef9cdf77-80e6-40dc-b75d-3b0330666056")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7131], {
    1157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    6522: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    10869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    12978: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Manuals"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "manuals"
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
                    value: "game"
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
                        value: "titleSlug"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "manuals_platforms"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "manuals_links"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "label"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "href"
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
          end: 282
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
        body: "query Manuals($cache: Boolean = true) {\n    manuals {\n        id\n        game {\n            title\n            titleSlug\n        }\n        manuals_platforms {\n            platform\n            manuals_links {\n                label\n                href\n            }\n        }\n    }\n}\n",
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
      })), e.exports = a, e.exports.Manuals = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var c = t[a] || new Set,
          o = new Set,
          m = new Set;
        for (c.forEach((function(e) {
            m.add(e)
          })); m.size > 0;) {
          var d = m;
          m = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach((function(e) {
              m.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }(a, "Manuals")
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    14724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    18670: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => m
      });
      var t = s(42295),
        r = s(62229),
        c = s(95966);
      const o = {
        img: "rockstargames-sites-rockstargamesd87037fda2ea106061c7a614036a89df",
        imgContentful: "rockstargames-sites-rockstargamesb9f3c994ce8a97ac6530cf0a85e5abe0",
        wide: "rockstargames-sites-rockstargamesdc444c089b89129c0a39bc61845d531f"
      };
      (0, c.importAll)(s(86751));
      const m = ({
        isWideCard: e = !1,
        size: a = 640,
        title: m,
        titleSlug: d,
        inGlobalNav: i = !1
      }) => {
        const {
          isMobile: n
        } = (0, c.useWindowResize)(), g = (0, r.useMemo)((() => {
          let t = "";
          return e && (t = n ? s(24865)(`./${d}/mobile.jpg`) : s(53781)(`./${d}/desktop.jpg`)), t || (t = s(39294)(`./${d}.jpg`), t += `?im=Resize=${a}`), t
        }), [n, d]), [f] = (0, c.usePreloadImg)(g);
        let p = g;
        return (0, t.jsx)("div", {
          role: "img",
          "aria-label": m,
          style: {
            backgroundImage: `url(${p})`,
            borderRadius: i ? "unset" : ""
          },
          className: [o.img, f ? o.startAnimation : "", e ? o.wide : ""].join(" ")
        })
      }
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
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
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    23587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    24865: (e, a, s) => {
      var t = {
        "./VI/mobile.jpg": 92244
      };

      function r(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = c, e.exports = r, r.id = 24865
    },
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    28005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    32830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    39294: (e, a, s) => {
      var t = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 6522,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function r(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = c, e.exports = r, r.id = 39294
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    42787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    47524: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => d
      });
      var t = s(42295),
        r = s(62229),
        c = s(2765),
        o = s.n(c);
      const m = {
          dropdownWrapper: "rockstargames-sites-rockstargamesbbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-sites-rockstargamesa9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-sites-rockstargamesdf17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-sites-rockstargamescb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-sites-rockstargamesfe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        d = ({
          children: e,
          className: a,
          title: s
        }) => {
          const [c, d] = (0, r.useState)(!1);
          let i = null;
          return i = o(), (0, t.jsx)(i, {
            active: c,
            focusTrapOptions: {
              onDeactivate: () => d(!1),
              clickOutsideDeactivates: !0
            },
            children: (0, t.jsxs)("div", {
              className: [m.dropdownWrapper, c ? m.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, t.jsx)("button", {
                className: m.opener,
                onClick: () => d(!c),
                children: s
              }), c && (0, t.jsx)("div", {
                className: m.items,
                onClick: () => d(!1),
                children: e
              })]
            })
          })
        }
    },
    52014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    52461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    53781: (e, a, s) => {
      var t = {
        "./VI/desktop.jpg": 67496
      };

      function r(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = c, e.exports = r, r.id = 53781
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    59414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    59655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    59942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    67496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/372e91ece1e13eda3ec63d6dfc06f7ce.jpg"
    },
    73483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    73534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    73564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    77321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    78323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    79114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    84715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    84752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    85256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    85332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    85613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    86751: (e, a, s) => {
      var t = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
        "./agent.jpg": 78323,
        "./beaterator.jpg": 23587,
        "./bully-scholarshipedition.jpg": 67181,
        "./bully.jpg": 85332,
        "./chinatownwars.jpg": 44596,
        "./episodesfromlibertycity.jpg": 18518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 42787,
        "./gta-online.jpg": 26788,
        "./gta-v.jpg": 33143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 59942,
        "./gtacomplete.jpg": 64923,
        "./gtalondon.jpg": 85256,
        "./italianjob.jpg": 42043,
        "./lanoire-vr-case-files.jpg": 52014,
        "./lanoire.jpg": 59414,
        "./lanoire_2.jpg": 52461,
        "./libertycitystories.jpg": 89273,
        "./manhunt.jpg": 95903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 77321,
        "./maxpayne2.jpg": 13095,
        "./maxpayne3.jpg": 57258,
        "./midnightclub.jpg": 12602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 59655,
        "./midnightclubLA-complete.jpg": 63839,
        "./midnightclubLA.jpg": 79795,
        "./oni.jpg": 24808,
        "./rdr-goty.jpg": 19552,
        "./reddeadonline.jpg": 73534,
        "./reddeadredemption.jpg": 27064,
        "./reddeadredemption2.jpg": 31248,
        "./reddeadrevolver.jpg": 79114,
        "./rockstar-games-collection-edition-1.jpg": 93573,
        "./sanandreas.jpg": 14724,
        "./skateanddestroy.jpg": 90377,
        "./smugglersrun.jpg": 73564,
        "./smugglersrun2.jpg": 22844,
        "./smugglersrunwarzones.jpg": 84715,
        "./stateofemergency.jpg": 28005,
        "./tabletennis.jpg": 6522,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function r(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = c, e.exports = r, r.id = 86751
    },
    87131: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => n
      });
      var t = s(42295),
        r = s(47524),
        c = s(95966),
        o = s(20204),
        m = s(12978),
        d = s.n(m),
        i = s(18670);
      const n = (0, c.withTranslations)((({
        t: e
      }) => {
        const {
          data: a
        } = (0, c.useQuery)(d(), {
          autoSetLoading: !0
        });
        if (!a) return null;
        const {
          manuals: s
        } = a;
        return (0, t.jsxs)("div", {
          className: o.Ay.manuals,
          children: [(0, t.jsx)("h2", {
            children: e("Manuals")
          }), (0, t.jsx)("div", {
            className: o.Ay.list,
            children: s.map((e => (0, t.jsxs)("div", {
              className: o.Ay.item,
              children: [(0, t.jsx)(i.A, {
                title: e.game.title,
                titleSlug: e.game.titleSlug
              }), (0, t.jsx)(r.A, {
                title: e.game.title,
                className: o.Ay.dropdown,
                children: e.manuals_platforms.map((e => (0, t.jsxs)("p", {
                  children: [(0, t.jsx)("span", {
                    children: e.platform
                  }), e.manuals_links.map((e => (0, t.jsx)("a", {
                    href: e.href,
                    target: "_blank",
                    rel: "noreferrer",
                    children: e.label
                  }, e.label)))]
                }, e.platform)))
              })]
            }, e.id)))
          })]
        })
      }))
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    92244: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f086bb17e0de94d33c4031f30fff704.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    98754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    }
  }
]);