try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ecd60b94-6167-4fe6-a52d-21c83c41f8d4", e._sentryDebugIdIdentifier = "sentry-dbid-ecd60b94-6167-4fe6-a52d-21c83c41f8d4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "61ad12580c14ee5147480faf673e214137f57fe1",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "61ad12580c14ee5147480faf673e214137f57fe1"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [5524], {
    407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d42d687c511d6b0365f57b7c477e10ac.jpg"
    },
    509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6b74f47724ec7f416f9be8682a483165.jpg"
    },
    782: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "credits"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "additional"
              },
              name: {
                kind: "Name",
                value: "rdr2LegacyCredits"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "StringValue",
                  value: "additional",
                  block: !1
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
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
                    value: "section"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "outlaws"
              },
              name: {
                kind: "Name",
                value: "rdr2LegacyCredits"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "StringValue",
                  value: "outlaws",
                  block: !1
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gang"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "cast"
              },
              name: {
                kind: "Name",
                value: "rdr2LegacyCredits"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "StringValue",
                  value: "cast",
                  block: !1
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "section"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "character"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "outsource"
              },
              name: {
                kind: "Name",
                value: "rdr2LegacyCredits"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "StringValue",
                  value: "outsource",
                  block: !1
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "role"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "legacy"
              },
              name: {
                kind: "Name",
                value: "rdr2LegacyCredits"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "StringValue",
                  value: "legacy",
                  block: !1
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "disipline"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "department"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "department"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "team_titles"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "team_title"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "role_titles"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "role_title"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "credit_names"
                              },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                  kind: "Field",
                                  name: {
                                    kind: "Name",
                                    value: "font_size"
                                  },
                                  arguments: [],
                                  directives: []
                                }, {
                                  kind: "Field",
                                  name: {
                                    kind: "Name",
                                    value: "class"
                                  },
                                  arguments: [],
                                  directives: []
                                }, {
                                  kind: "Field",
                                  name: {
                                    kind: "Name",
                                    value: "credit"
                                  },
                                  arguments: [],
                                  directives: [],
                                  selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                      kind: "Field",
                                      name: {
                                        kind: "Name",
                                        value: "name"
                                      },
                                      arguments: [],
                                      directives: []
                                    }, {
                                      kind: "Field",
                                      name: {
                                        kind: "Name",
                                        value: "position"
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
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 930
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query credits {\n    additional: rdr2LegacyCredits(type: "additional") {\n        name\n        title\n        section\n    }\n    outlaws: rdr2LegacyCredits(type: "outlaws") {\n        name\n        gang\n    }\n    cast: rdr2LegacyCredits(type: "cast") {\n        name\n        section\n        character\n        description\n    }\n    outsource: rdr2LegacyCredits(type: "outsource") {\n        role\n        name\n    }\n    legacy: rdr2LegacyCredits(type: "legacy") {\n        disipline\n        department {\n            department\n            team_titles {\n                team_title\n                role_titles {\n                    role_title\n                    credit_names {\n                        font_size\n                        class\n                        credit {\n                            name\n                            position\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.credits = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var d = n;
          n = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "credits")
    },
    854: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7dc688860b2715599f048527dada1ddf.jpg"
    },
    897: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb07b19f03edbb7ef2926f1fdfed8574.jpg"
    },
    929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0045415c826ba23ea6e02b895dc9da90.jpg"
    },
    993: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b5acd4eff4651f10a10eb4ccbcaa1dc1.jpg"
    },
    1175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/67282063818024fb87ed0f224bb3bf1f.jpg"
    },
    1252: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0eee04f36fff1741e893f0b7046baa08.jpg"
    },
    1419: (e, a, t) => {
      var s = {
        "./deadeye-fire-full.jpg": 53232,
        "./deadeye-fire.jpg": 67640,
        "./deadeye-mark-full.jpg": 24137,
        "./deadeye-mark.jpg": 9591,
        "./deadeye-shot-full.jpg": 6116,
        "./deadeye-shot.jpg": 50780,
        "./deadeye-vital-full.jpg": 70360,
        "./deadeye-vital.jpg": 8992,
        "./features-items/1.jpg": 73860,
        "./features-items/10.jpg": 63366,
        "./features-items/11.jpg": 53475,
        "./features-items/12.jpg": 7412,
        "./features-items/2.jpg": 51667,
        "./features-items/3.jpg": 65206,
        "./features-items/4.jpg": 19965,
        "./features-items/5.jpg": 85184,
        "./features-items/6.jpg": 82447,
        "./features-items/7.jpg": 26418,
        "./features-items/8.jpg": 88777,
        "./features-items/9.jpg": 50732,
        "./horses-snow-full.jpg": 48594,
        "./horses-snow.jpg": 15826,
        "./horses-stable-full.jpg": 35850,
        "./horses-stable.jpg": 97610,
        "./horses-swamp-full.jpg": 23117,
        "./horses-swamp.jpg": 8699,
        "./horses-walking-full.jpg": 67550,
        "./horses-walking.jpg": 9246,
        "./hunting-bow-full.jpg": 20226,
        "./hunting-bow.jpg": 30210,
        "./hunting-butcher-full.jpg": 30165,
        "./hunting-butcher.jpg": 77347,
        "./hunting-fishing-full.jpg": 41204,
        "./hunting-fishing.jpg": 81708,
        "./hunting-snow-full.jpg": 70915,
        "./hunting-snow.jpg": 62377,
        "./weapon-double-full.jpg": 54262,
        "./weapon-double.jpg": 75510,
        "./weapon-face-full.jpg": 87994,
        "./weapon-face.jpg": 11738,
        "./weapon-revolver-full.jpg": 55068,
        "./weapon-revolver.jpg": 56148,
        "./weapon-snow-full.jpg": 93524,
        "./weapon-snow.jpg": 87404,
        "./zoo-alligator.jpg": 90046,
        "./zoo-bear.jpg": 30569,
        "./zoo-buck.jpg": 2826,
        "./zoo-coyote.jpg": 42776,
        "./zoo-eagle.jpg": 30791,
        "./zoo-horse.jpg": 39736,
        "./zoo-monster.jpg": 24793,
        "./zoo-sturgeon.jpg": 95632,
        "./zoo-vulture.jpg": 77228,
        "./zoo-walker.jpg": 21341
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 1419
    },
    1692: (e, a, t) => {
      var s = {
        "./1.jpg": 95371,
        "./10.jpg": 53619,
        "./11.jpg": 25206,
        "./12.jpg": 993,
        "./13.jpg": 27396,
        "./14.jpg": 53775,
        "./15.jpg": 77394,
        "./16.jpg": 31549,
        "./17.jpg": 63456,
        "./18.jpg": 88763,
        "./2.jpg": 27676,
        "./3.jpg": 41401,
        "./4.jpg": 28810,
        "./5.jpg": 51463,
        "./6.jpg": 88888,
        "./7.jpg": 79797,
        "./8.jpg": 90566,
        "./9.jpg": 71619
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 1692
    },
    1695: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc7151352661ef36fce6db29becd8f32.jpg"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    2501: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c771884ff1230bea61e86ba8992d8422.jpg"
    },
    2696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    2826: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d0b9dfcab6daaa3d6ff0a532ed9aa9.jpg"
    },
    3316: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9df6d148a6b10a1e0a0cb4bad7c421d0.jpg"
    },
    3429: (e, a, t) => {
      var s = {
        "./locations/annesburg-logo.png": 43621,
        "./locations/annesburg-map.jpg": 1252,
        "./locations/annesburg-postcard.jpg": 6636,
        "./locations/annesburg-showcase-1-full.jpg": 44775,
        "./locations/annesburg-showcase-1.jpg": 86989,
        "./locations/annesburg-showcase-2-full.jpg": 61378,
        "./locations/annesburg-showcase-2.jpg": 17762,
        "./locations/lagras-logo.png": 55420,
        "./locations/lagras-map.jpg": 26359,
        "./locations/lagras-postcard.jpg": 63253,
        "./locations/lagras-showcase-1-full.jpg": 73228,
        "./locations/lagras-showcase-1.jpg": 3492,
        "./locations/lagras-showcase-2-full.jpg": 87717,
        "./locations/lagras-showcase-2.jpg": 3539,
        "./locations/mounthagen-logo.png": 97378,
        "./locations/mounthagen-map.jpg": 40901,
        "./locations/mounthagen-postcard.jpg": 74647,
        "./locations/mounthagen-showcase-1-full.jpg": 21434,
        "./locations/mounthagen-showcase-1.jpg": 8250,
        "./locations/mounthagen-showcase-2-full.jpg": 18175,
        "./locations/mounthagen-showcase-2.jpg": 12453,
        "./locations/rhodes-logo.png": 72727,
        "./locations/rhodes-map.jpg": 18238,
        "./locations/rhodes-postcard.jpg": 31946,
        "./locations/rhodes-showcase-1-full.jpg": 78929,
        "./locations/rhodes-showcase-1.jpg": 1695,
        "./locations/rhodes-showcase-2-full.jpg": 11784,
        "./locations/rhodes-showcase-2.jpg": 34320,
        "./locations/saintdenis-logo.png": 41798,
        "./locations/saintdenis-map.jpg": 50001,
        "./locations/saintdenis-postcard.jpg": 97851,
        "./locations/saintdenis-showcase-1-full.jpg": 89382,
        "./locations/saintdenis-showcase-1.jpg": 66310,
        "./locations/saintdenis-showcase-2-full.jpg": 6795,
        "./locations/saintdenis-showcase-2.jpg": 24081,
        "./locations/strawberry-logo.png": 85331,
        "./locations/strawberry-map.jpg": 23842,
        "./locations/strawberry-postcard.jpg": 99334,
        "./locations/strawberry-showcase-1-full.jpg": 92693,
        "./locations/strawberry-showcase-1.jpg": 26083,
        "./locations/strawberry-showcase-2-full.jpg": 88764,
        "./locations/strawberry-showcase-2.jpg": 96372,
        "./locations/valentine-logo.png": 68482,
        "./locations/valentine-map.jpg": 65925,
        "./locations/valentine-postcard.jpg": 41687,
        "./locations/valentine-showcase-1-full.jpg": 42074,
        "./locations/valentine-showcase-1.jpg": 72794,
        "./locations/valentine-showcase-2-full.jpg": 94815,
        "./locations/valentine-showcase-2.jpg": 30021
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 3429
    },
    3492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c985899af0a70b363e04e9fff1fb5969.jpg"
    },
    3539: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afad9ee2813a1cfdd721210dfb28b0af.jpg"
    },
    3693: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2da85d6491dc5479be29be1fb07281a8.jpg"
    },
    3756: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4b38f36d0d6efd8988d72477c6f88668.jpg"
    },
    3797: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/690e43b6cdf0ed2f2ccec301c67954ae.jpg"
    },
    3950: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    3960: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4c38e4ff6873831e26d46fc99a415db4.png"
    },
    3966: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/94be4c766906a96e85eeb3e3f2990681.jpg"
    },
    4112: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1d9b3987caa7323a249c5f1436422f2.png"
    },
    4223: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5a9b8be3933bf75a0ac9a0ca8169e80a.jpg"
    },
    4544: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8640a8a18aaf3090ab67b9d4008269f.jpg"
    },
    4718: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f03e1935993cf821330413a455aea5fa.jpg"
    },
    5282: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38008368b7dacf9134bdf30e8e676a40.jpg"
    },
    5592: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d4c0b8e0c2726a524b4c1a1556a6353c.jpg"
    },
    6107: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d60804e41380acb404386f151aad6d9e.jpg"
    },
    6116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c573704f80d01655fd777eac895a7f3c.jpg"
    },
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    6636: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/458f1caaa1133085371c512ef2182b8c.jpg"
    },
    6680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/820b42cfc213e804bbbe217be2591724.jpg"
    },
    6795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/67b28b568ea0818fea5b7bbfe5a99df5.jpg"
    },
    7084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/311e6630aa263fd07f04f134d5eeb19f.jpg"
    },
    7372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd7f4af53c764284ebc72491f7f25e44.jpg"
    },
    7379: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/68d90aba9df8be17a58a3e7bc89238a9.png"
    },
    7412: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cca797a134754057bea9a9ed742eefe9.jpg"
    },
    7592: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ec0f164b4f46ff9fd1b57dd4c16c7de8.jpg"
    },
    8054: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    8194: (e, a, t) => {
      var s = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 8194
    },
    8250: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c353eef4dae68b500f6f1a8ecb3f052d.jpg"
    },
    8303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4b36099a1006e30507efd52ca02bdeea.png"
    },
    8607: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f091a207014bc5e49a6c962c474641d9.jpg"
    },
    8674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    8699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/420f8da76663db5caab7dab1015ae810.jpg"
    },
    8711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    8992: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/668d3b7ee644233ff02252fd80b6c1a0.jpg"
    },
    9020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    9188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    9246: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7f9919399d71d5c9c3640fa6bbd8d05f.jpg"
    },
    9310: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b7bccb168704d92049d4212788cc98ef.jpg"
    },
    9591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1dd7582697149c31bce496941611a7a2.jpg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    10241: (e, a, t) => {
      var s = {
        "./bolt.mp4": 64352,
        "./carbine.mp4": 19787,
        "./cattleman.mp4": 40742,
        "./shotgun.mp4": 65395
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 10241
    },
    10299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/30c0a1f5cc9d1dc0aaf2680c667a4aff.jpg"
    },
    10419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    10464: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/873a3836a0564631331ff48dcc466220.jpg"
    },
    10875: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/17b5c1d6567e239cb4bbbb056794bb58.jpg"
    },
    11373: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/69b0d116d8e06fa7a6ba4b58da38fb01.jpg"
    },
    11399: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90de3821f45756f1a01a350924250946.jpg"
    },
    11547: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/350a1e83100d08b0315ea8abcf56171e.jpg"
    },
    11623: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6cce2e19d573263e2d76262263a7702f.png"
    },
    11738: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5a59c3600909f44cfe1b449a211a69aa.jpg"
    },
    11784: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e986d323a2fae7a0ec2a1009b6b80621.jpg"
    },
    12055: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/deddbe5e4c85ccca79984465c6ca8df2.jpg"
    },
    12065: (e, a, t) => {
      var s = {
        "./annesburg-showcase-2.jpg": 17762,
        "./lagras-showcase-2.jpg": 3539,
        "./mounthagen-showcase-2.jpg": 12453,
        "./rhodes-showcase-2.jpg": 34320,
        "./saintdenis-showcase-2.jpg": 24081,
        "./strawberry-showcase-2.jpg": 96372,
        "./valentine-showcase-2.jpg": 30021
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 12065
    },
    12237: (e, a, t) => {
      var s = {
        "./weapons/1.jpg": 47230,
        "./weapons/2.jpg": 38729,
        "./weapons/3.jpg": 40940,
        "./weapons/4.jpg": 1175,
        "./weapons/5.jpg": 32890,
        "./weapons/6.jpg": 90117,
        "./weapons/7.jpg": 62504,
        "./weapons/weapons-bg.jpg": 22014
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 12237
    },
    12259: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0ee4f55fb04a46b99443fa9fc126b42a.jpg"
    },
    12453: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3936939bcb7a14d2cf66f32c1dec0bf.jpg"
    },
    12595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd5335c50818f700559f825556f36cef.jpg"
    },
    12707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e83396762fe1fbc6084e16d203dbb80e.jpg"
    },
    13281: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9e450039ca1bbb2483e3f0958ab5bc3d.jpg"
    },
    13524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4fa75e0ceed48f825ceceab44f0891ac.jpg"
    },
    13551: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2cc29df86f649e2b786d033f802e6646.jpg"
    },
    14153: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a5a2e3aadd26a3dea22e1e84f67d876.jpg"
    },
    14604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ae3e0afaad30f3b56ca029a63038d5b4.jpg"
    },
    14769: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c65385c35b15eab22e4a49f3e7434a8b.jpg"
    },
    15718: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a1218f636b563c689ce41887fe034511.jpg"
    },
    15810: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cff63ee764c2ccb54bc94f34bb361ea4.jpg"
    },
    15821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    15826: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/501ac97866c5103882127785b8ba4611.jpg"
    },
    16504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5a9c95a57030a3ec8b0fdaac32743a5e.jpg"
    },
    16658: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/179041dd1cc9016fcba223d8e952c427.jpg"
    },
    16993: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/743f7bc829416f8a1a21bd5df0f40f64.jpg"
    },
    17065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    17396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/21d58d5487879378a4bb5f86ebd55ff2.jpg"
    },
    17762: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d951579d8ead218457736a3edb54dd86.jpg"
    },
    17815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9660802f18fcbf656b6fa631ee3fae63.png"
    },
    18175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/82b2c021f7fa895dfb1db5acc6ec221a.jpg"
    },
    18177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    18238: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/172da40d35155bd07c84ede008278b69.jpg"
    },
    18618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aa21a7476ff092b649d33457b206bb75.jpg"
    },
    18712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    18854: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4213adff357f3466fa16409bc3ab555e.jpg"
    },
    19025: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9768d6a135c2f5ffb44bbcd21f3dd0cc.jpg"
    },
    19491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ee0d2addff3b255c5b6a746468f6f410.jpg"
    },
    19612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    19787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/78b2e75a4331fa933d7a2c311124e250.mp4"
    },
    19868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/88ad0495f3880d4561633355e2fa911b.png"
    },
    19965: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9dcf7ef5a17f225a30950b307eb82e86.jpg"
    },
    20226: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/45d21d9faa203fad48b3b44a604f62f7.jpg"
    },
    20838: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8296e1473b893fd249fe430317c3f69a.jpg"
    },
    21022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    21228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    21341: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/17908e24c220c9f6c70f1eff03f51cf8.jpg"
    },
    21434: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f47ae9a4d8620f4bbfb82295e7787aaf.jpg"
    },
    21655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/804fefe3050078c4152a7a27b460440f.jpg"
    },
    21863: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/43e88ae46dfd79dabbf719290af6ad5d.jpg"
    },
    21999: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b757ac8a4b7413fb9c560a8f9895f077.png"
    },
    22014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e85433a0a8cd187e1c4d28a31430bd67.jpg"
    },
    22016: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b00f86aab6a21c5e388a410b35f79c1.jpg"
    },
    22191: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f518553e1ab5bd065ea46934d425293e.png"
    },
    22263: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64729ccd0b351e2c91e14c549b1967a4.jpg"
    },
    22686: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1f6722a83002339af112b971f721541e.jpg"
    },
    22741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/867b6339302c15930f0c7106962e3588.jpg"
    },
    22772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    22820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f2e22cd503abffa304796f40246a203a.png"
    },
    22981: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f94889eaed4b38667bd293fd6d85ae49.jpg"
    },
    23089: (e, a, t) => {
      var s = {
        "./1-full.jpg": 76310,
        "./10-full.jpg": 46388,
        "./100-full.jpg": 3966,
        "./101-full.jpg": 61325,
        "./102-full.jpg": 28596,
        "./103-full.jpg": 47139,
        "./104-full.jpg": 74650,
        "./105-full.jpg": 81417,
        "./106-full.jpg": 22016,
        "./107-full.jpg": 71391,
        "./108-full.jpg": 854,
        "./109-full.jpg": 2501,
        "./11-full.jpg": 45123,
        "./110-full.jpg": 49071,
        "./111-full.jpg": 47824,
        "./112-full.jpg": 43097,
        "./113-full.jpg": 98762,
        "./114-full.jpg": 28595,
        "./115-full.jpg": 79300,
        "./116-full.jpg": 509,
        "./117-full.jpg": 86958,
        "./118-full.jpg": 85287,
        "./119-full.jpg": 86856,
        "./12-full.jpg": 22686,
        "./120-full.jpg": 7372,
        "./121-full.jpg": 73243,
        "./122-full.jpg": 81174,
        "./123-full.jpg": 96261,
        "./124-full.jpg": 41080,
        "./125-full.jpg": 407,
        "./126-full.jpg": 16658,
        "./127-full.jpg": 929,
        "./128-full.jpg": 13524,
        "./129-full.jpg": 12259,
        "./13-full.jpg": 3693,
        "./130-full.jpg": 61141,
        "./133-full.jpg": 73340,
        "./135-full.jpg": 68514,
        "./137-full.jpg": 27688,
        "./138-full.jpg": 52189,
        "./14-full.jpg": 85120,
        "./140-full.jpg": 38514,
        "./141-full.jpg": 897,
        "./142-full.jpg": 31160,
        "./143-full.jpg": 22263,
        "./144-full.jpg": 46710,
        "./145-full.jpg": 76517,
        "./146-full.jpg": 3756,
        "./147-full.jpg": 10299,
        "./148-full.jpg": 18618,
        "./149-full.jpg": 23337,
        "./15-full.jpg": 51007,
        "./150-full.jpg": 95715,
        "./151-full.jpg": 89812,
        "./152-full.jpg": 32845,
        "./153-full.jpg": 9310,
        "./154-full.jpg": 8607,
        "./155-full.jpg": 37888,
        "./156-full.jpg": 23465,
        "./157-full.jpg": 63258,
        "./158-full.jpg": 71035,
        "./159-full.jpg": 85516,
        "./16-full.jpg": 85946,
        "./160-full.jpg": 88272,
        "./161-full.jpg": 94351,
        "./162-full.jpg": 89738,
        "./163-full.jpg": 34169,
        "./164-full.jpg": 45668,
        "./165-full.jpg": 50515,
        "./166-full.jpg": 4718,
        "./167-full.jpg": 86045,
        "./168-full.jpg": 49544,
        "./169-full.jpg": 70887,
        "./17-full.jpg": 39145,
        "./170-full.jpg": 37417,
        "./171-full.jpg": 30650,
        "./172-full.jpg": 43743,
        "./173-full.jpg": 94368,
        "./174-full.jpg": 33677,
        "./175-full.jpg": 59966,
        "./176-full.jpg": 19491,
        "./177-full.jpg": 84596,
        "./178-full.jpg": 32481,
        "./179-full.jpg": 79826,
        "./18-full.jpg": 40236,
        "./180-full.jpg": 33510,
        "./181-full.jpg": 60053,
        "./182-full.jpg": 93276,
        "./183-full.jpg": 25707,
        "./184-full.jpg": 95714,
        "./185-full.jpg": 41361,
        "./186-full.jpg": 59208,
        "./187-full.jpg": 41287,
        "./188-full.jpg": 42958,
        "./189-full.jpg": 56509,
        "./19-full.jpg": 6107,
        "./190-full.jpg": 72759,
        "./191-full.jpg": 97080,
        "./192-full.jpg": 56929,
        "./193-full.jpg": 89010,
        "./194-full.jpg": 45595,
        "./195-full.jpg": 79724,
        "./196-full.jpg": 68613,
        "./2-full.jpg": 85563,
        "./20-full.jpg": 93111,
        "./203-full.jpg": 18854,
        "./204-full.jpg": 99207,
        "./205-full.jpg": 80584,
        "./206-full.jpg": 47729,
        "./207-full.jpg": 15810,
        "./208-full.jpg": 31539,
        "./209-full.jpg": 78116,
        "./21-full.jpg": 16504,
        "./210-full.jpg": 70426,
        "./211-full.jpg": 75145,
        "./212-full.jpg": 10464,
        "./213-full.jpg": 23167,
        "./214-full.jpg": 97182,
        "./215-full.jpg": 56845,
        "./216-full.jpg": 79284,
        "./217-full.jpg": 47683,
        "./218-full.jpg": 73970,
        "./219-full.jpg": 36353,
        "./22-full.jpg": 98049,
        "./220-full.jpg": 37969,
        "./221-full.jpg": 66146,
        "./222-full.jpg": 11399,
        "./223-full.jpg": 90056,
        "./224-full.jpg": 22741,
        "./225-full.jpg": 34662,
        "./226-full.jpg": 52075,
        "./227-full.jpg": 68316,
        "./228-full.jpg": 91033,
        "./229-full.jpg": 30250,
        "./23-full.jpg": 45394,
        "./230-full.jpg": 89880,
        "./231-full.jpg": 40599,
        "./232-full.jpg": 91026,
        "./233-full.jpg": 13281,
        "./234-full.jpg": 26028,
        "./235-full.jpg": 11547,
        "./236-full.jpg": 46326,
        "./237-full.jpg": 63269,
        "./238-full.jpg": 78400,
        "./239-full.jpg": 49119,
        "./24-full.jpg": 48027,
        "./240-full.jpg": 12055,
        "./241-full.jpg": 35448,
        "./242-full.jpg": 16993,
        "./25-full.jpg": 25932,
        "./26-full.jpg": 24069,
        "./3-full.jpg": 63468,
        "./4-full.jpg": 51937,
        "./40-full.jpg": 19025,
        "./41-full.jpg": 47202,
        "./42-full.jpg": 92455,
        "./43-full.jpg": 87464,
        "./44-full.jpg": 3797,
        "./45-full.jpg": 15718,
        "./46-full.jpg": 33131,
        "./47-full.jpg": 65724,
        "./48-full.jpg": 72089,
        "./49-full.jpg": 27658,
        "./5-full.jpg": 99282,
        "./50-full.jpg": 87288,
        "./51-full.jpg": 21655,
        "./52-full.jpg": 72082,
        "./53-full.jpg": 94337,
        "./54-full.jpg": 7084,
        "./55-full.jpg": 92603,
        "./56-full.jpg": 27382,
        "./57-full.jpg": 44325,
        "./58-full.jpg": 59456,
        "./59-full.jpg": 30175,
        "./6-full.jpg": 30647,
        "./60-full.jpg": 98539,
        "./61-full.jpg": 63804,
        "./62-full.jpg": 51381,
        "./63-full.jpg": 99910,
        "./64-full.jpg": 96615,
        "./65-full.jpg": 77992,
        "./66-full.jpg": 28785,
        "./67-full.jpg": 96866,
        "./68-full.jpg": 12595,
        "./69-full.jpg": 53143,
        "./7-full.jpg": 70392,
        "./70-full.jpg": 51482,
        "./71-full.jpg": 56201,
        "./72-full.jpg": 91520,
        "./73-full.jpg": 4223,
        "./74-full.jpg": 78238,
        "./75-full.jpg": 37901,
        "./76-full.jpg": 60340,
        "./77-full.jpg": 45091,
        "./78-full.jpg": 71378,
        "./79-full.jpg": 33761,
        "./8-full.jpg": 36781,
        "./80-full.jpg": 53269,
        "./81-full.jpg": 26726,
        "./82-full.jpg": 35275,
        "./83-full.jpg": 86492,
        "./84-full.jpg": 50929,
        "./85-full.jpg": 5282,
        "./86-full.jpg": 50855,
        "./87-full.jpg": 52424,
        "./88-full.jpg": 66077,
        "./89-full.jpg": 52526,
        "./9-full.jpg": 79422,
        "./90-full.jpg": 53580,
        "./91-full.jpg": 75675,
        "./92-full.jpg": 66422,
        "./93-full.jpg": 68069,
        "./94-full.jpg": 60504,
        "./95-full.jpg": 37111,
        "./96-full.jpg": 89394,
        "./97-full.jpg": 42049,
        "./98-full.jpg": 94164,
        "./99-full.jpg": 12707
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 23089
    },
    23117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f481313380f0c63a21d3168301ba893b.jpg"
    },
    23167: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f6823c87006fe1e8162eb29758b71fee.jpg"
    },
    23337: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9a60724641807f47ffeda3fc137f4524.jpg"
    },
    23465: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd6c2c7d4dd9a258d183ddbb6f37b8a2.jpg"
    },
    23781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    23820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c71fa1c6452d7a8736d8651d077562f.jpg"
    },
    23842: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4c53df79802ba0e6b20cdca75c797791.jpg"
    },
    24008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6dda2516e8412b09bffe200f1d0137e7.jpg"
    },
    24069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2878a8718549aaf45cd25b6834660f4e.jpg"
    },
    24081: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/21e7fa0b11d9439311e64f77327fcc85.jpg"
    },
    24137: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0bc54ac772d712f31cbfa5e6af63c04f.jpg"
    },
    24256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    24339: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd45e97f9848c886ffb2bee85ce718bf.jpg"
    },
    24611: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    24793: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad30a715f373158092b7429fedf5000a.jpg"
    },
    25206: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/388f6f5092c75e987d3a928cd31c4e4d.jpg"
    },
    25421: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48334b7e3b0cfef88d68cbd2c6a77630.jpg"
    },
    25538: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c7183f93924e4730e4e5b0f90cd7b25f.jpg"
    },
    25707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/419d753190e36d448f4f1f5a36e67796.jpg"
    },
    25752: (e, a, t) => {
      var s = {
        "./blurb-bg.jpg": 56815,
        "./features/1.jpg": 95371,
        "./features/10.jpg": 53619,
        "./features/11.jpg": 25206,
        "./features/12.jpg": 993,
        "./features/13.jpg": 27396,
        "./features/14.jpg": 53775,
        "./features/15.jpg": 77394,
        "./features/16.jpg": 31549,
        "./features/17.jpg": 63456,
        "./features/18.jpg": 88763,
        "./features/2.jpg": 27676,
        "./features/3.jpg": 41401,
        "./features/4.jpg": 28810,
        "./features/5.jpg": 51463,
        "./features/6.jpg": 88888,
        "./features/7.jpg": 79797,
        "./features/8.jpg": 90566,
        "./features/9.jpg": 71619,
        "./marquee-hero/de_de.jpg": 83555,
        "./marquee-hero/en_us.jpg": 97526,
        "./marquee-hero/es_es.jpg": 14153,
        "./marquee-hero/es_mx.jpg": 50286,
        "./marquee-hero/fr_fr.jpg": 55273,
        "./marquee-hero/it_it.jpg": 77935,
        "./marquee-hero/ja_jp.jpg": 73402,
        "./marquee-hero/ko_kr.jpg": 7592,
        "./marquee-hero/pl_pl.jpg": 51069,
        "./marquee-hero/pt_br.jpg": 25421,
        "./marquee-hero/ru_ru.jpg": 67263,
        "./marquee-hero/zh_hans.jpg": 61891,
        "./marquee-hero/zh_tw.jpg": 72704,
        "./ofl-bg.jpg": 59037
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 25752
    },
    25932: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8101021cefe85d0218f924a2f1d72389.jpg"
    },
    26028: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6c1efacc1e538f23e2641f0a1bd99a3b.jpg"
    },
    26083: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4ce21b0d09d6be2553e6f9688e4c94d1.jpg"
    },
    26111: (e, a, t) => {
      var s = {
        "./bolt.mp4": 64352,
        "./carbine.mp4": 19787,
        "./cattleman.mp4": 40742,
        "./shotgun.mp4": 65395
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 26111
    },
    26151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    26359: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07a965f5da9c1c223fdfb4588e214df5.jpg"
    },
    26418: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a12e8ec38134916f867e17152e64ebf.jpg"
    },
    26726: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9814a19efa3e8c0e7a46789210f21189.jpg"
    },
    27351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    27382: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8804bc7b4d2e5421e104122db9bbb58c.jpg"
    },
    27396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6d3d522d38e7da0bf1ab098c44232f46.jpg"
    },
    27585: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/df87171dee3eabd1cc3f299ac92831d8.png"
    },
    27658: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753b95cbb410057db5ce7596d3700f14.jpg"
    },
    27676: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9b8ceabc8a50973ff124c0fa2a57dc96.jpg"
    },
    27688: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aa89f8af67363f0d83e7ca4869ca98d8.jpg"
    },
    27903: (e, a, t) => {
      var s = {
        "./score.jpg": 37501,
        "./soundtrack.jpg": 42001
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 27903
    },
    27962: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd49acbd09bf9cca44465e287e7d28a9.jpg"
    },
    28414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    28595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7be12ecab9933374bc4ca3048c1d2223.jpg"
    },
    28596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca3c28cf3ae88292f91a31773079a9fb.jpg"
    },
    28785: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0a06b996e1a44f4d8bf29d958fc0bfad.jpg"
    },
    28810: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2612604136c8eb498890f56c65fa8e93.jpg"
    },
    29362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    29801: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/726b2557efdc607b1d78662c6a3d564b.jpg"
    },
    29922: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/41c4fe98e4a4d3d82d4de4ccc929f74c.jpg"
    },
    30021: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c86d3bffa7c200cb0f9fd1711eb68686.jpg"
    },
    30042: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "rdr2Screenshots"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "rdr2Screenshots"
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 65
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query rdr2Screenshots {\n    rdr2Screenshots {\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.rdr2Screenshots = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var d = n;
          n = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "rdr2Screenshots")
    },
    30165: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ef8f86cecbc08f07e916329fdc693987.jpg"
    },
    30175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9bf57166ef4bd07c0b2fa941586ea0b2.jpg"
    },
    30210: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/62e7adf0ed2a4e6f5f2ff0a583aba58f.jpg"
    },
    30250: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fcc6078eb89aa90e3290715ca3d5872a.jpg"
    },
    30569: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f30ff61ab035f09ebcc2ef5fb9cd9544.jpg"
    },
    30647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f000ffb76f33f79820c159abb73d8717.jpg"
    },
    30650: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d37369cecf591b3fbf31ff5e2d0fba24.jpg"
    },
    30791: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9ca8f8e7b00808b7a43d32b84ecbd2ce.jpg"
    },
    30989: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6dda2516e8412b09bffe200f1d0137e7.jpg"
    },
    31160: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14309fbd48b19d0bb360d332689668c7.jpg"
    },
    31307: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e53f986c515a01078cbedd33bf698b5.png"
    },
    31539: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a02e52a6a71034c1de3c97b3c4c104ec.jpg"
    },
    31549: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81836e80c4fdea3564eddf825befd543.jpg"
    },
    31674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b73228971f376e8732047adca5445b21.jpg"
    },
    31946: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eb476a6e72241f012e4fe843f6cafb84.jpg"
    },
    32323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    32481: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/53f46f9b3cdc34cbb5628d6144cbeb9e.jpg"
    },
    32845: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b5db9a07a12943f7c31775f2bac8b727.jpg"
    },
    32890: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac4af9317137629aa2649487dad2e58e.jpg"
    },
    33131: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/11edb3c5051cd3edc51005abe00d68c2.jpg"
    },
    33289: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/92b1d1b583af127824f406b9d7bd452c.png"
    },
    33510: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/42557ac31545b4b499a5780d314601c5.jpg"
    },
    33677: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7d5973532790b422a27c3b55a4627161.jpg"
    },
    33761: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/137a6c809cd715dfac2aeffd35138a8e.jpg"
    },
    33816: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7711b79abeb2bddd146bc2d3cbd9f08b.jpg"
    },
    33879: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/25edf22373dcc8522cd5aa9591822a3a.png"
    },
    34082: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/49e4f86894c146d7f772c2e53e79096b.jpg"
    },
    34169: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bc99e972339bade32df8e10cc75199da.jpg"
    },
    34320: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38ac4a304e046f5a623422a6fff5409e.jpg"
    },
    34662: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3ee9139a4c4947e93284317a53d2a13e.jpg"
    },
    35275: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e162d27c8c142a69c2787d1af643faec.jpg"
    },
    35448: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f7b9b5cd5f51aacfa0e80af491ffd22.jpg"
    },
    35850: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1e356a4f7f25d1ab8b186be1c0e4cd3.jpg"
    },
    35924: (e, a, t) => {
      var s = {
        "./1.jpg": 50565,
        "./2.jpg": 27962,
        "./3.jpg": 38775,
        "./4.jpg": 84428,
        "./5.jpg": 29801,
        "./6.jpg": 56094,
        "./7.jpg": 10875
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 35924
    },
    36314: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38cf6d10d69560ba676ed4e3ce198253.png"
    },
    36353: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/96e6e5068004eafc8a9db5945715863a.jpg"
    },
    36576: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07c45c7840f32054d43cde15ce3c5fc5.jpg"
    },
    36672: (e, a, t) => {
      var s = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 36672
    },
    36781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/437b5371efd520f2701eafd27048fac7.jpg"
    },
    36855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    37111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/25b8af725ce051ed568986021fbb8715.jpg"
    },
    37417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/22ff20997cab85aca86e2c9ad905e84c.jpg"
    },
    37501: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65248efb4eddce4742b70f1d79b2a2c0.jpg"
    },
    37888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/20a83baa868e88b2cd0a4da251eb2511.jpg"
    },
    37901: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85e40b06a32f5ae49513c83ae8a54b47.jpg"
    },
    37969: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bebe354c2e991f8e5b6b5d9fe920da03.jpg"
    },
    38514: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/68c5c19c0fcfe9ff9533dff4c488060b.jpg"
    },
    38729: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0cd8325958711ee5ba6bb7ff6e31861a.jpg"
    },
    38775: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0acf4d3df4ee50566b62cf775f24db5c.jpg"
    },
    39145: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5881c77ef271a26e97aac45c103eb0f8.jpg"
    },
    39736: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dcf0b34f4cb56d73917964f027523cd.jpg"
    },
    40236: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e582150931022550e08097f5153c917.jpg"
    },
    40491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    40599: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/58ae0bf8a3224030e71fb55c8f3c7975.jpg"
    },
    40742: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/e0bfd9ff0855c642c029a393cb9cd108.mp4"
    },
    40901: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2dd67c37461ae1d0c2b848261e0ad.jpg"
    },
    40940: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f23ec149ca3e7acd23c6c1ae7be0d47a.jpg"
    },
    41080: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/665fabd7a330a3a0165a5e4f766e659d.jpg"
    },
    41204: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7e7511d6691f505356cc69672f6d392f.jpg"
    },
    41287: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/770dadfd1359d2d36b6a650acb77ea38.jpg"
    },
    41353: (e, a, t) => {
      var s = {
        "./bg/1.jpg": 25538,
        "./bg/2.jpg": 54797,
        "./bg/3.jpg": 53872,
        "./bg/4.jpg": 95523,
        "./bg/5.jpg": 56998,
        "./bg/6.jpg": 14769,
        "./bg/7.jpg": 17396,
        "./bg/8.jpg": 64871,
        "./characters/abigail-roberts-mobile.jpg": 4544,
        "./characters/abigail-roberts.png": 21999,
        "./characters/arthur-morgan-mobile.jpg": 80540,
        "./characters/arthur-morgan.png": 97619,
        "./characters/bill-williamson-mobile.jpg": 48888,
        "./characters/bill-williamson.png": 54119,
        "./characters/charles-smith-mobile.jpg": 46273,
        "./characters/charles-smith.png": 60224,
        "./characters/dutch-van-der-linde-mobile.jpg": 34082,
        "./characters/dutch-van-der-linde.png": 53293,
        "./characters/ground.png": 45781,
        "./characters/hosea-matthews-mobile.jpg": 44461,
        "./characters/hosea-matthews.png": 60196,
        "./characters/jack-marston-mobile.jpg": 97689,
        "./characters/jack-marston.png": 57048,
        "./characters/javier-escuella-mobile.jpg": 43211,
        "./characters/javier-escuella.png": 45518,
        "./characters/john-marston-mobile.jpg": 13551,
        "./characters/john-marston.png": 79002,
        "./characters/josiah-trelawny-mobile.jpg": 5592,
        "./characters/josiah-trelawny.png": 11623,
        "./characters/karen-jones-mobile.jpg": 92e3,
        "./characters/karen-jones.png": 8303,
        "./characters/lenny-summers-mobile.jpg": 47574,
        "./characters/lenny-summers.png": 44521,
        "./characters/leopold-strauss-mobile.jpg": 55988,
        "./characters/leopold-strauss.png": 89835,
        "./characters/mary-beth-gaskill-mobile.jpg": 6680,
        "./characters/mary-beth-gaskill.png": 56743,
        "./characters/micah-bell-mobile.jpg": 77841,
        "./characters/micah-bell.png": 4112,
        "./characters/molly-o-shea-mobile.jpg": 92438,
        "./characters/molly-o-shea.png": 33289,
        "./characters/pearson-mobile.jpg": 24339,
        "./characters/pearson.png": 83446,
        "./characters/reverend-swanson-mobile.jpg": 33816,
        "./characters/reverend-swanson.png": 62631,
        "./characters/sadie-adler-mobile.jpg": 83752,
        "./characters/sadie-adler.png": 33879,
        "./characters/sean-macguire-mobile.jpg": 31674,
        "./characters/sean-macguire.png": 64517,
        "./characters/susan-grimshaw-mobile.jpg": 23820,
        "./characters/susan-grimshaw.png": 58691,
        "./characters/tilly-jackson-mobile.jpg": 22981,
        "./characters/tilly-jackson.png": 19868,
        "./characters/uncle-mobile.jpg": 36576,
        "./characters/uncle.png": 22191,
        "./ground.png": 36314,
        "./top.jpg": 55758
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 41353
    },
    41361: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e4d35d712a3dd688a755be356e53b01.jpg"
    },
    41401: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/75b6b5a790308ef617742f26acb4372e.jpg"
    },
    41687: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365074f4ca3136029e5b75eeb7cadd66.jpg"
    },
    41798: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b984f18f7d36c10723113250bab57941.png"
    },
    42001: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b7cfd9989f99c3e0d81c307f4f8ec288.jpg"
    },
    42049: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/308fd1badeb457d60440b983217929f5.jpg"
    },
    42074: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/420e408831277464662098f064d61a4c.jpg"
    },
    42192: (e, a, t) => {
      var s = {
        "./de_de.jpg": 83555,
        "./en_us.jpg": 97526,
        "./es_es.jpg": 14153,
        "./es_mx.jpg": 50286,
        "./fr_fr.jpg": 55273,
        "./it_it.jpg": 77935,
        "./ja_jp.jpg": 73402,
        "./ko_kr.jpg": 7592,
        "./pl_pl.jpg": 51069,
        "./pt_br.jpg": 25421,
        "./ru_ru.jpg": 67263,
        "./zh_hans.jpg": 61891,
        "./zh_tw.jpg": 72704
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 42192
    },
    42723: (e, a, t) => {
      var s = {
        "./annesburg-map.jpg": 1252,
        "./annesburg-postcard.jpg": 6636,
        "./annesburg-showcase-1-full.jpg": 44775,
        "./annesburg-showcase-1.jpg": 86989,
        "./annesburg-showcase-2-full.jpg": 61378,
        "./annesburg-showcase-2.jpg": 17762,
        "./lagras-map.jpg": 26359,
        "./lagras-postcard.jpg": 63253,
        "./lagras-showcase-1-full.jpg": 73228,
        "./lagras-showcase-1.jpg": 3492,
        "./lagras-showcase-2-full.jpg": 87717,
        "./lagras-showcase-2.jpg": 3539,
        "./mounthagen-map.jpg": 40901,
        "./mounthagen-postcard.jpg": 74647,
        "./mounthagen-showcase-1-full.jpg": 21434,
        "./mounthagen-showcase-1.jpg": 8250,
        "./mounthagen-showcase-2-full.jpg": 18175,
        "./mounthagen-showcase-2.jpg": 12453,
        "./rhodes-map.jpg": 18238,
        "./rhodes-postcard.jpg": 31946,
        "./rhodes-showcase-1-full.jpg": 78929,
        "./rhodes-showcase-1.jpg": 1695,
        "./rhodes-showcase-2-full.jpg": 11784,
        "./rhodes-showcase-2.jpg": 34320,
        "./saintdenis-map.jpg": 50001,
        "./saintdenis-postcard.jpg": 97851,
        "./saintdenis-showcase-1-full.jpg": 89382,
        "./saintdenis-showcase-1.jpg": 66310,
        "./saintdenis-showcase-2-full.jpg": 6795,
        "./saintdenis-showcase-2.jpg": 24081,
        "./strawberry-map.jpg": 23842,
        "./strawberry-postcard.jpg": 99334,
        "./strawberry-showcase-1-full.jpg": 92693,
        "./strawberry-showcase-1.jpg": 26083,
        "./strawberry-showcase-2-full.jpg": 88764,
        "./strawberry-showcase-2.jpg": 96372,
        "./valentine-map.jpg": 65925,
        "./valentine-postcard.jpg": 41687,
        "./valentine-showcase-1-full.jpg": 42074,
        "./valentine-showcase-1.jpg": 72794,
        "./valentine-showcase-2-full.jpg": 94815,
        "./valentine-showcase-2.jpg": 30021
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 42723
    },
    42776: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d750cc5122e50a2627ca16b9d999b6b9.jpg"
    },
    42958: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/75556227ca9378a9d1f7463ab5ad427f.jpg"
    },
    43097: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a69310e4dcd7b5efb7eeae8044b11d1.jpg"
    },
    43211: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f419526f54048638bf99e9c1d876e0a3.jpg"
    },
    43621: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/114c546091cad4564950cf9a2126b218.png"
    },
    43743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0479da35832c3f5c63648a1622c85590.jpg"
    },
    44325: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7fa83d159c76b23cf914856458a6e278.jpg"
    },
    44461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5cd75adbcaf9c65121ec352cb5b50e39.jpg"
    },
    44521: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b769c90fbd36c0a88d3755d51781b173.png"
    },
    44775: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/33516234b2d61dcc23b2ce3287c6ae05.jpg"
    },
    45091: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/df2aa3c0571784d380eede5279c921b3.jpg"
    },
    45123: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e899c3ddb1be8babc4902c4fb4ea02cb.jpg"
    },
    45170: (e, a, t) => {
      var s = {
        "./de_de.png": 82229,
        "./en_us.png": 22820,
        "./es_es.png": 7379,
        "./es_mx.png": 3960,
        "./fr_fr.png": 31307,
        "./it_it.png": 89305,
        "./ja_jp.png": 82464,
        "./ko_kr.png": 87094,
        "./pl_pl.png": 17815,
        "./pt_br.png": 66975,
        "./ru_ru.png": 65657,
        "./zh_hans.png": 27585,
        "./zh_tw.png": 83894
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 45170
    },
    45394: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/788ce7673010abcc5d749e105e6fe72d.jpg"
    },
    45518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f73c180b77ec6950694ede6d01b94491.png"
    },
    45595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad3fff184085403a6697ab9a20f6b860.jpg"
    },
    45668: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/45ad854bc9a110abf4b0a165e782ceac.jpg"
    },
    45781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/333aac9e3beb2394957776aadfa90bc3.png"
    },
    46273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a9f4a0d836ff85052653a5e83fc36068.jpg"
    },
    46326: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dcab77472e16d5ac77dd101ec5c30575.jpg"
    },
    46368: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "id"
              },
              name: {
                kind: "Name",
                value: "id_hash"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "url"
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
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "paging"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Cake_Graph_Type_Paging_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "pageCount"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "page"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "count"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "nextPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "prevPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "perPage"
              },
              arguments: [],
              directives: []
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswireList"
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
                value: "page"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "limit"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "tagId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
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
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
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
              }],
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
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "tagId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagId"
                  }
                }
              }, {
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
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
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
          end: 926
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var d = n;
          n = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = i(a, "postFields"), e.exports.paging = i(a, "paging"), e.exports.NewswireList = i(a, "NewswireList")
    },
    46388: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e3164897560ddbf608ffa1fc2719114b.jpg"
    },
    46554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    46618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    46710: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d96a532fc288dc961353f08cc790bc83.jpg"
    },
    47139: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/22d5eb03beb6c11b403050ac006039aa.jpg"
    },
    47202: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a16d63df8e8c632fe93f600886bce57d.jpg"
    },
    47230: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d0f4232aa145492811dab4feed8e8da7.jpg"
    },
    47574: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8855e8365b9398ca426e1c62d554265f.jpg"
    },
    47580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    47683: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/43cc053db00c062d31817a2f980031a7.jpg"
    },
    47729: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4d40549286757e8f8dadf2a420d5859.jpg"
    },
    47761: (e, a, t) => {
      var s = {
        "./poster-de_de.jpg": 3316,
        "./poster-en_us.jpg": 11373,
        "./poster-es_es.jpg": 87154,
        "./poster-es_mx.jpg": 30989,
        "./poster-fr_fr.jpg": 20838,
        "./poster-it_it.jpg": 24008,
        "./poster-ja_jp.jpg": 66201,
        "./poster-ko_kr.jpg": 21863,
        "./poster-pl_pl.jpg": 29922,
        "./poster-pt_br.jpg": 65102,
        "./poster-ru_ru.jpg": 14604,
        "./poster-zh_hans.jpg": 86272,
        "./poster-zh_tw.jpg": 57927
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 47761
    },
    47824: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b8e25182288a6b11b609b2dde5357072.jpg"
    },
    48027: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/284b394ce17815ea394a69d8cece0f00.jpg"
    },
    48157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    48594: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/db6bf709440477fafebc32ddde2c4cf2.jpg"
    },
    48888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6609da357d4589d7bf16323956630f29.jpg"
    },
    49071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e3e02dd084b2c255892d28c0788f812b.jpg"
    },
    49119: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4672307ffa159c42cc571609fb67617.jpg"
    },
    49544: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9b45fc4446d3e02eb85925caf7f09f3c.jpg"
    },
    49980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    50001: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c07905d9209e940082866506b0f860e.jpg"
    },
    50286: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a5a2e3aadd26a3dea22e1e84f67d876.jpg"
    },
    50324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    50515: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13be5f4a85ba77892ff4f8f975fc6fac.jpg"
    },
    50565: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dddba1283626a4a2b4b72caab74b7b52.jpg"
    },
    50732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9f5af702153c58148197d13e5efa6c80.jpg"
    },
    50780: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/34b762d6b95e83fcb11854b9f730dcbf.jpg"
    },
    50855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4dfdae0cfd1491ced85ee6853caaa293.jpg"
    },
    50929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7fd0c59962fca8aceb897b7bfbe9f5cf.jpg"
    },
    51007: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/75ae22d7b845166638eba9deb7aa220f.jpg"
    },
    51069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e4ec33f23e4fb294e04a734486c7b63.jpg"
    },
    51381: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0bdd40f5859584f8f8e7389ff56c2f64.jpg"
    },
    51392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    51439: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "rdr2Screenshots"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "rdr2Screenshots"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "page"
                },
                value: {
                  kind: "StringValue",
                  value: "wildlife",
                  block: !1
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 83
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query rdr2Screenshots {\n    rdr2Screenshots(page: "wildlife") {\n        id\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.rdr2Screenshots = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var d = n;
          n = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "rdr2Screenshots")
    },
    51463: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7dcb00ec092b03cd4abcb42523d1e839.jpg"
    },
    51482: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/51d1e3e4f513ed29a574c5c123b53ee6.jpg"
    },
    51575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    51667: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7dd74181f591b9455287502826942a1c.jpg"
    },
    51913: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    51937: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4385592d41e071b95f956a3e5d57c35e.jpg"
    },
    52075: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0d243e4726e27ac8a3bdcd393a94070d.jpg"
    },
    52189: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/263c7163b5d31f79c7cbfd7fbf7d1c43.jpg"
    },
    52424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/487d0c9638c03c3567404ebf202c4a2d.jpg"
    },
    52466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    52526: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77776e33ef89349ed37e4eaea67d5a7a.jpg"
    },
    53143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bd2d04bdbe3f23276f03a42cf331f060.jpg"
    },
    53232: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e1a2ff1a98d7134f2ff7ff468759c1a3.jpg"
    },
    53269: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bd0506874e86ea545d9d057316a8f24.jpg"
    },
    53293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a093a7e34ed2d8b5d4ecaa9afc224892.png"
    },
    53475: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bb72603425873c364b4a15016d12b1d4.jpg"
    },
    53580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eabe5181efbd94d1dcac7f54a48715ca.jpg"
    },
    53619: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dff702b050b3adc4c53f7e03ad39856e.jpg"
    },
    53775: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6c8d4587f4854c6fce4cf234fe9ff5c5.jpg"
    },
    53872: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05cbae7ac42e6fd144c03da63a600c90.jpg"
    },
    54119: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d7a469fe6c614be64c09ac0f6c1ae35b.png"
    },
    54222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    54262: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35d62270e362a0073400daa33d24193b.jpg"
    },
    54379: (e, a, t) => {
      var s = {
        "./abigail-roberts-mobile.jpg": 4544,
        "./arthur-morgan-mobile.jpg": 80540,
        "./bill-williamson-mobile.jpg": 48888,
        "./charles-smith-mobile.jpg": 46273,
        "./dutch-van-der-linde-mobile.jpg": 34082,
        "./hosea-matthews-mobile.jpg": 44461,
        "./jack-marston-mobile.jpg": 97689,
        "./javier-escuella-mobile.jpg": 43211,
        "./john-marston-mobile.jpg": 13551,
        "./josiah-trelawny-mobile.jpg": 5592,
        "./karen-jones-mobile.jpg": 92e3,
        "./lenny-summers-mobile.jpg": 47574,
        "./leopold-strauss-mobile.jpg": 55988,
        "./mary-beth-gaskill-mobile.jpg": 6680,
        "./micah-bell-mobile.jpg": 77841,
        "./molly-o-shea-mobile.jpg": 92438,
        "./pearson-mobile.jpg": 24339,
        "./reverend-swanson-mobile.jpg": 33816,
        "./sadie-adler-mobile.jpg": 83752,
        "./sean-macguire-mobile.jpg": 31674,
        "./susan-grimshaw-mobile.jpg": 23820,
        "./tilly-jackson-mobile.jpg": 22981,
        "./uncle-mobile.jpg": 36576
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 54379
    },
    54797: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b4f6868da15c53e1d9736b8d7c73d0fb.jpg"
    },
    55068: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/132ef1af2ccefb8233ed0a24213a9d31.jpg"
    },
    55273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/792dc745ac13b45bf011eb249938a3fb.jpg"
    },
    55420: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edef9a4ec754ab2be49bd01a2bfe33de.png"
    },
    55758: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1f82a1a83d174608c2660c6457901c21.jpg"
    },
    55988: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4374312a3d47d9b35d23fa1e0ce27260.jpg"
    },
    56094: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2e4111d26be59687a44fa47b6ba6539f.jpg"
    },
    56148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2734e14074ee65935d38eedd5d753494.jpg"
    },
    56201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81593bdc93f4cc08918bf1d82c1ed44f.jpg"
    },
    56509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13d9a394b35625e065cf8bbf8e35c45b.jpg"
    },
    56743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5fae427365495fc33006c7e2157b5f41.png"
    },
    56815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/62fd25d16605e42ee0b4d78313a91dac.jpg"
    },
    56845: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4ee3084f0a83938bba1b124813974b70.jpg"
    },
    56929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/816e8a2a71aa5fdcadc442f4d5ef51a4.jpg"
    },
    56998: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6ddc53bc50a130eb53a326c973b7366c.jpg"
    },
    57048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c24c2c5f60b8ff6da4c34758b25cb0e.png"
    },
    57220: (e, a, t) => {
      var s = {
        "./annesburg-logo.png": 43621,
        "./lagras-logo.png": 55420,
        "./mounthagen-logo.png": 97378,
        "./rhodes-logo.png": 72727,
        "./saintdenis-logo.png": 41798,
        "./strawberry-logo.png": 85331,
        "./valentine-logo.png": 68482
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 57220
    },
    57498: (e, a, t) => {
      var s = {
        "./abigail-roberts.png": 21999,
        "./arthur-morgan.png": 97619,
        "./bill-williamson.png": 54119,
        "./charles-smith.png": 60224,
        "./dutch-van-der-linde.png": 53293,
        "./ground.png": 45781,
        "./hosea-matthews.png": 60196,
        "./jack-marston.png": 57048,
        "./javier-escuella.png": 45518,
        "./john-marston.png": 79002,
        "./josiah-trelawny.png": 11623,
        "./karen-jones.png": 8303,
        "./lenny-summers.png": 44521,
        "./leopold-strauss.png": 89835,
        "./mary-beth-gaskill.png": 56743,
        "./micah-bell.png": 4112,
        "./molly-o-shea.png": 33289,
        "./pearson.png": 83446,
        "./reverend-swanson.png": 62631,
        "./sadie-adler.png": 33879,
        "./sean-macguire.png": 64517,
        "./susan-grimshaw.png": 58691,
        "./tilly-jackson.png": 19868,
        "./uncle.png": 22191
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 57498
    },
    57860: (e, a, t) => {
      var s = {
        "./annesburg-showcase-1.jpg": 86989,
        "./lagras-showcase-1.jpg": 3492,
        "./mounthagen-showcase-1.jpg": 8250,
        "./rhodes-showcase-1.jpg": 1695,
        "./saintdenis-showcase-1.jpg": 66310,
        "./strawberry-showcase-1.jpg": 26083,
        "./valentine-showcase-1.jpg": 72794
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 57860
    },
    57927: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/42c3b7734e77f21e7a1f0f797258f5c4.jpg"
    },
    58648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    58691: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608639f618af0967ae89915557ee6c7e.png"
    },
    59037: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6d6a3fd6982f03567080c68330307882.jpg"
    },
    59208: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/63adf0c4865f12ca56f6e0029a520bf7.jpg"
    },
    59456: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d53335ae750d19c6d67093e8a342f05d.jpg"
    },
    59966: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7d3f8a22dca6d49f2e8f119855cddf86.jpg"
    },
    60053: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1022ca712146c6c618301b1fbc6530cc.jpg"
    },
    60196: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beef9f287a6d913c43aac9de8438d9ac.png"
    },
    60224: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8b0527a3c4acb96629c87e46376e61a.png"
    },
    60340: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/da5232f613810da0116afa8a90e302b9.jpg"
    },
    60504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac1366f33d60eb9f8cffd8667d7b3224.jpg"
    },
    61127: (e, a, t) => {
      var s = {
        "./annesburg-map.jpg": 1252,
        "./lagras-map.jpg": 26359,
        "./mounthagen-map.jpg": 40901,
        "./rhodes-map.jpg": 18238,
        "./saintdenis-map.jpg": 50001,
        "./strawberry-map.jpg": 23842,
        "./valentine-map.jpg": 65925
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 61127
    },
    61141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2bfec0fc539a9e3742c26f48b55829cf.jpg"
    },
    61213: (e, a, t) => {
      var s = {
        "./poster-de_de.jpg": 3316,
        "./poster-en_us.jpg": 11373,
        "./poster-es_es.jpg": 87154,
        "./poster-es_mx.jpg": 30989,
        "./poster-fr_fr.jpg": 20838,
        "./poster-it_it.jpg": 24008,
        "./poster-ja_jp.jpg": 66201,
        "./poster-ko_kr.jpg": 21863,
        "./poster-pl_pl.jpg": 29922,
        "./poster-pt_br.jpg": 65102,
        "./poster-ru_ru.jpg": 14604,
        "./poster-zh_hans.jpg": 86272,
        "./poster-zh_tw.jpg": 57927
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 61213
    },
    61325: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9fafa4b3aee5572c800daf83a60e570b.jpg"
    },
    61378: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01bd53c052ceab686cfa8984e481d549.jpg"
    },
    61891: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3aeb4d9895a808739dd3645b8f840040.jpg"
    },
    62377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ea23496c085c8c6f4a3280a5172a7337.jpg"
    },
    62504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/574fe1c528421bdf108049ae04923596.jpg"
    },
    62631: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0c4a47a6488f11bd008e9582e5e8f2a2.png"
    },
    63117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    63253: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3eaeabc6ee6f55320307d60147ca41ab.jpg"
    },
    63258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/296d89fa1a81236e028155d54ccaaf8d.jpg"
    },
    63269: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/09f625004db4eec8edc8d6e89eaa6e2e.jpg"
    },
    63366: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d72e9bdd97556ce5eb7ab49f97b1f473.jpg"
    },
    63456: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f3d06aae2b25d9b78aa0e3558fdcf12c.jpg"
    },
    63468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56e651a1710808085241205faed87147.jpg"
    },
    63804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3ad4710bf5cec871aee7e3724e5b6c50.jpg"
    },
    64352: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/49bb1f4c45a50bb050cebcafdbf20e25.mp4"
    },
    64517: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bda4c0910f38265132a43b893dce3fbc.png"
    },
    64871: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c85af7bbcc9a8772b055c46f7035e5c2.jpg"
    },
    65044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    65102: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76d165803b76737da814b26a4888bed5.jpg"
    },
    65206: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b67e1413dc2972a5c9ff96a18f103aef.jpg"
    },
    65315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    65395: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/399fd560f763ca0dfec07593098a71ba.mp4"
    },
    65657: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8ac8a152c2d4d9a9a023944b7c52087e.png"
    },
    65724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ec4fce5a3fd859718346eddf9cb079e1.jpg"
    },
    65925: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77ebff709abfe52185fa5d57994017c6.jpg"
    },
    66077: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/483186ef4df82aca20794c661d1a5bdb.jpg"
    },
    66146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0a142d70cd922fcf1ad8bbebd4ca0e29.jpg"
    },
    66201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d2151e9aab2e4c1d12f660d9e6bc1c08.jpg"
    },
    66310: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/650fc4c62659526998ccbc9fa0d4b1b1.jpg"
    },
    66422: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/51f4fe951843a60de35a96d2e5b3e5d3.jpg"
    },
    66802: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "videoFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Videos_Model_Entity_Video_o"
            }
          },
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
                value: "screencap"
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
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
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
                  value: "tagId"
                },
                value: {
                  kind: "IntValue",
                  value: "716"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "groupTypes"
                },
                value: {
                  kind: "ListValue",
                  values: [{
                    kind: "StringValue",
                    value: "trailer",
                    block: !1
                  }]
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
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "video"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "video"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
                  }
                }
              }, {
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
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 504
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'fragment videoFields on RockstarGames_Videos_Model_Entity_Video_o {\n    id\n    title\n    screencap\n    game {\n        id\n        title\n        title_slug\n    }\n}\n\nquery videos($locale: String!) {\n    videos(locale: $locale, tagId: 716, groupTypes: ["trailer"], limit: 100) {\n        results {\n            id\n            title\n            screencap\n        }\n    }\n}\n\nquery video($id: String!, $locale: String!) {\n    video(id: $id, locale: $locale) {\n        id\n        title\n        description\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var d = n;
          n = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.videoFields = i(a, "videoFields"), e.exports.videos = i(a, "videos"), e.exports.video = i(a, "video")
    },
    66871: (e, a, t) => {
      "use strict";
      t.d(a, {
        h: () => n,
        Wx: () => m
      });
      var s = t(62229),
        r = t(95966);
      t(48539), t(70954);
      const i = (0, r.setContextItem)({
          context: (0, s.createContext)(void 0),
          key: "gtmContext22"
        }),
        o = {
          track: () => null
        },
        n = () => (0, s.useContext)(i) ?? o;
      (0, r.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, r.makeVar)(null)
      }), (0, r.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "hasNotificationsReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
      }), (0, r.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, r.makeVar)(null)
      }), (0, r.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, r.makeVar)(null)
      }), (0, r.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "crewsNeededReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, r.makeVar)(null)
      }), t(17330), t(39445);
      const d = {},
        c = (0, r.setContextItem)({
          context: (0, s.createContext)(d),
          key: "userContext"
        }),
        m = () => (0, s.useContext)(c)
    },
    66975: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b5bbde62b2286f7f35f8c5f691fe1bb5.png"
    },
    67263: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f678795e40b94025886e79d632bb80b.jpg"
    },
    67299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    67443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    67550: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/031aa23b04b9fa78eb6b6b70df353701.jpg"
    },
    67640: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab26bd14e1aceacdc81998d0652e2f6d.jpg"
    },
    68069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ef1e767fe0b8d6674ba0cad3ff856367.jpg"
    },
    68300: (e, a, t) => {
      var s = {
        "./deadeye-fire-full.jpg": 53232,
        "./deadeye-fire.jpg": 67640,
        "./deadeye-mark-full.jpg": 24137,
        "./deadeye-mark.jpg": 9591,
        "./deadeye-shot-full.jpg": 6116,
        "./deadeye-shot.jpg": 50780,
        "./deadeye-vital-full.jpg": 70360,
        "./deadeye-vital.jpg": 8992,
        "./features-items/1.jpg": 73860,
        "./features-items/10.jpg": 63366,
        "./features-items/11.jpg": 53475,
        "./features-items/12.jpg": 7412,
        "./features-items/2.jpg": 51667,
        "./features-items/3.jpg": 65206,
        "./features-items/4.jpg": 19965,
        "./features-items/5.jpg": 85184,
        "./features-items/6.jpg": 82447,
        "./features-items/7.jpg": 26418,
        "./features-items/8.jpg": 88777,
        "./features-items/9.jpg": 50732,
        "./horses-snow-full.jpg": 48594,
        "./horses-snow.jpg": 15826,
        "./horses-stable-full.jpg": 35850,
        "./horses-stable.jpg": 97610,
        "./horses-swamp-full.jpg": 23117,
        "./horses-swamp.jpg": 8699,
        "./horses-walking-full.jpg": 67550,
        "./horses-walking.jpg": 9246,
        "./hunting-bow-full.jpg": 20226,
        "./hunting-bow.jpg": 30210,
        "./hunting-butcher-full.jpg": 30165,
        "./hunting-butcher.jpg": 77347,
        "./hunting-fishing-full.jpg": 41204,
        "./hunting-fishing.jpg": 81708,
        "./hunting-snow-full.jpg": 70915,
        "./hunting-snow.jpg": 62377,
        "./weapon-double-full.jpg": 54262,
        "./weapon-double.jpg": 75510,
        "./weapon-face-full.jpg": 87994,
        "./weapon-face.jpg": 11738,
        "./weapon-revolver-full.jpg": 55068,
        "./weapon-revolver.jpg": 56148,
        "./weapon-snow-full.jpg": 93524,
        "./weapon-snow.jpg": 87404,
        "./zoo-alligator.jpg": 90046,
        "./zoo-bear.jpg": 30569,
        "./zoo-buck.jpg": 2826,
        "./zoo-coyote.jpg": 42776,
        "./zoo-eagle.jpg": 30791,
        "./zoo-horse.jpg": 39736,
        "./zoo-monster.jpg": 24793,
        "./zoo-sturgeon.jpg": 95632,
        "./zoo-vulture.jpg": 77228,
        "./zoo-walker.jpg": 21341
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 68300
    },
    68316: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8b71b841adc4b85a4ec790e1a72375f.jpg"
    },
    68482: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0dd1936e9bdc64d50bf9796576bae7a3.png"
    },
    68514: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b132cb0a41b56cf40953afa23022dc4d.jpg"
    },
    68613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3ecf9c9a5f21e8ca0184a1565c45ee3f.jpg"
    },
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    70360: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f6e2793aac3a1ae37a4be05606249355.jpg"
    },
    70392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2650669dfe3b5b952bf06c8b684a863f.jpg"
    },
    70426: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/484941c495a1b7118ae10bb7eafba420.jpg"
    },
    70887: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afbbd7be07b9a7442115a2c456755d7e.jpg"
    },
    70915: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07034b8cb6c5ca376386a44b42cdf8fe.jpg"
    },
    71035: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f18c38f2c70fb799f798ecd7997649d.jpg"
    },
    71378: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8b7af38d0cc7721b2dd4e20a37775c87.jpg"
    },
    71391: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8a1ad7722dc4bf2d59049fd33afc0582.jpg"
    },
    71619: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b67993d0f95c06308e5f42233626d59f.jpg"
    },
    71742: (e, a, t) => {
      var s = {
        "./bk.jpg": 79449,
        "./screens/1.jpg": 50565,
        "./screens/2.jpg": 27962,
        "./screens/3.jpg": 38775,
        "./screens/4.jpg": 84428,
        "./screens/5.jpg": 29801,
        "./screens/6.jpg": 56094,
        "./screens/7.jpg": 10875
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 71742
    },
    71856: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "rdr2Home"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "rdr2HomeFeatures"
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
                    value: "router_link"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "target"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 108
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query rdr2Home {\n    rdr2HomeFeatures {\n        title\n        id\n        router_link\n        target\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.rdr2Home = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var d = n;
          n = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "rdr2Home")
    },
    72082: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9cbc443e82cae514f812f13942dd0d83.jpg"
    },
    72089: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/49e42c3b649f5d660a340d7e19936c1d.jpg"
    },
    72690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    72704: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0c8eadb7b1e921a8ba4f4efc562be4ca.jpg"
    },
    72727: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2308b41213f0e3bf3a3c6f8a987e6b8e.png"
    },
    72759: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2f7e53fec8fdadf1b1a0499da8eb5f1e.jpg"
    },
    72794: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd7fa0f28adfd1e3ef3778e18c87266c.jpg"
    },
    73228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c24ca0cd5328a50603ff2e2c029c4e2a.jpg"
    },
    73243: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c711835a9d0154018ab80a168b33e87c.jpg"
    },
    73340: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46cdfa004890e3bb13096633ac864a32.jpg"
    },
    73402: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b79b7b976644be2e529d40269b8a50eb.jpg"
    },
    73860: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c73634c4d8ceb758ed14b7ce54601dc6.jpg"
    },
    73970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c073551c0dccd71ec5c40063dbae1ecc.jpg"
    },
    74432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    74647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e354fac88fd83d3645839fbcc6e7873b.jpg"
    },
    74650: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48a4a4c636e211a59a27384e70ca73b2.jpg"
    },
    75145: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f962b36aa5bf79305b2711acf63b5e69.jpg"
    },
    75510: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9564280978c1026bf7a53e98be1baf73.jpg"
    },
    75524: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => pa
      });
      var s = t(62229),
        r = t(81788),
        i = t(95966),
        o = t(40844),
        n = t(66871);
      const d = (0, r.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var c = t(9623);
      const m = "rockstargames-sites-red-dead-redemption-2ea8cf4797c830e5b5dad68b2ec814e67",
        l = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","carousel_learn_more":"Mehr erfahren","carousel_watch_more":"Jetzt anschauen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_cta_title_twitchdrops":"Verpass nicht dein nächstes Gratisgeschenk in GTA Online.","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","rp_icon":"RP-Kategorie","wasted_error_404_new":"Die Seite, die du suchst, existiert nicht, oder es ist ein anderer Fehler aufgetreten.","wasted_home":"Startseite"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","carousel_learn_more":"Learn More","carousel_watch_more":"Watch Now","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_cta_title_twitchdrops":"Don\'t miss the next free GTA Online gift","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page","profile_silhouette_mugshot":"Silhouette mugshot","rp_icon":"RP Category","wasted_error_404_new":"The page you\'re looking for doesn\'t exist or another error occurred.","wasted_home":"Home"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior","profile_silhouette_mugshot":"Foto de silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"La página que buscas no existe o ha habido otro error.","wasted_home":"Inicio"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior","profile_silhouette_mugshot":"Foto de una silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"Ocurrió un problema o la página que estás buscando no existe.","wasted_home":"Inicio"},"fr-FR":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","carousel_learn_more":"En savoir plus","carousel_watch_more":"Visionner maintenant","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmer votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_cta_title_twitchdrops":"Ne manquez pas le prochain cadeau gratuit dans GTA Online.","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente","profile_silhouette_mugshot":"Photo d\'identité : silhouette","rp_icon":"Catégorie : RP","wasted_error_404_new":"La page que vous recherchez n\'existe pas ou une autre erreur est survenue.","wasted_home":"Accueil"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","carousel_learn_more":"Altre informazioni","carousel_watch_more":"Guarda ora","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_cta_title_twitchdrops":"Non perdere il prossimo omaggio di GTA Online","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente","profile_silhouette_mugshot":"Foto segnaletica silhouette","rp_icon":"Categoria RP","wasted_error_404_new":"La pagina che stai cercando non esiste o si è verificato un altro errore.","wasted_home":"Home"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","carousel_learn_more":"詳細を見る","carousel_watch_more":"今すぐ視聴","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認する","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_cta_title_twitchdrops":"次回の「GTAオンライン」の無料ギフトをお見逃しなく","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ","profile_silhouette_mugshot":"シルエット顔写真","rp_icon":"RPカテゴリー","wasted_error_404_new":"お探しのページが存在しない、もしくはエラーが起こりました。","wasted_home":"ホーム"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","carousel_learn_more":"더 알아보기","carousel_watch_more":"지금 감상하기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_cta_title_twitchdrops":"다음 무료 GTA 온라인 선물을 놓치지 마십시오","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지","profile_silhouette_mugshot":"실루엣 머그샷","rp_icon":"RP 카테고리","wasted_error_404_new":"찾고 계신 페이지가 존재하지 않거나 오류가 발생했습니다.","wasted_home":"홈"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","carousel_learn_more":"Dowiedz się więcej","carousel_watch_more":"Obejrzyj","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_cta_title_twitchdrops":"Nie przegap kolejnych darmowych korzyści w GTA Online","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami","profile_silhouette_mugshot":"Zdjęcie sylwetki","rp_icon":"Poziom RP","wasted_error_404_new":"Strona, której szukasz, nie istnieje lub wystąpił inny błąd.","wasted_home":"Strona główna"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","carousel_learn_more":"Saiba mais","carousel_watch_more":"Assistir agora","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_cta_title_twitchdrops":"Não perca o próximo presente gratuito do GTA Online","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos","profile_silhouette_mugshot":"Foto da silhueta","rp_icon":"Categoria de RP","wasted_error_404_new":"A página que você procura não existe ou ocorreu um erro.","wasted_home":"Início"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","carousel_learn_more":"Подробности","carousel_watch_more":"Смотреть сейчас","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_cta_title_twitchdrops":"Не пропустите следующий подарок в GTA Online","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео","profile_silhouette_mugshot":"Силуэт игрока","rp_icon":"Категория опыта","wasted_error_404_new":"Запрашиваемой вами страницы не существует, или возникла ошибка.","wasted_home":"Главная страница"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","carousel_learn_more":"了解更多","carousel_watch_more":"马上观看","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_cta_title_twitchdrops":"不要错过下一份 GTA 在线模式免费礼物","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频","profile_silhouette_mugshot":"剪影面部照片","rp_icon":"声望值类别","wasted_error_404_new":"您想找的页面不存在，或者出现了其他错误。","wasted_home":"主页"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","carousel_learn_more":"了解更多","carousel_watch_more":"馬上觀看","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_cta_title_twitchdrops":"別錯過下一個免費的 GTA 線上模式好禮","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面","profile_silhouette_mugshot":"罪犯檔案照剪影","rp_icon":"聲望值類別","wasted_error_404_new":"您所找的頁面不存在，或者發生了其他錯誤。","wasted_home":"首頁"}}'),
        p = e => (0, r.withIntl)(e, l);
      var g = t(70954);
      const u = p((e => {
        let {
          children: a,
          to: t = "#",
          reloadDocument: i = !1,
          alt: o = "",
          autoBlank: n = !1,
          role: l = "link",
          onClick: p = () => {},
          focused: u = !1,
          ..._
        } = e;
        const f = (0, s.useRef)(null),
          b = (0, r.useIntl)(),
          k = !/^(https?|mailto):/i.test(t),
          h = /^#/.test(t),
          j = _?.target ?? (n ? "_blank" : "_self"),
          {
            ...v
          } = _;
        let x = "";
        if ("aria-label" in v && v["aria-label"] && (x = "_blank" === j ? `${v["aria-label"]} ${b.formatMessage(d.aria_label_open_new_window)}` : v["aria-label"]), (0, s.useEffect)((() => {
            u && f?.current && f.current.focus()
          }), [f?.current, u]), h) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), p && p(e)
          };
          return (0, g.jsxs)("a", {
            title: o,
            href: t,
            onClick: e,
            ...v,
            "aria-label": x,
            ref: f,
            role: l,
            children: [a, "_blank" === j && !x && (0, g.jsx)("span", {
              className: m,
              children: b.formatMessage(d.aria_label_open_new_window)
            })]
          })
        }
        if (k) return (0, g.jsxs)(c.NavLink, {
          title: o,
          to: t,
          onClick: p,
          ...v,
          "aria-label": x,
          ref: f,
          reloadDocument: i,
          children: [a, "_blank" === j && !x && (0, g.jsx)("span", {
            className: m,
            children: b.formatMessage(d.aria_label_open_new_window)
          })]
        });
        const w = Object.keys(v).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: _[a]
        })), {});
        return "function" == typeof w?.className && delete w.className, (0, g.jsxs)("a", {
          href: t,
          title: o,
          onClick: p,
          target: j,
          ...w,
          "aria-label": x,
          ref: f,
          role: l,
          children: [a, "_blank" === j && !x && (0, g.jsx)("span", {
            className: m,
            children: b.formatMessage(d.aria_label_open_new_window)
          })]
        })
      }));
      class _ extends s.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, g.jsxs)("div", {
            className: "rockstargames-sites-red-dead-redemption-2d5c408a8b618087ef4bb452f96526b2b",
            children: [(0, g.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, g.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const f = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(s) {
            return (0, g.jsx)(_, {
              header: a,
              hidden: t,
              children: (0, g.jsx)(e, {
                ...s
              })
            })
          }
        },
        b = {
          rating: "rockstargames-sites-red-dead-redemption-2c3e95c84902dd75b827d3c95532e22dc",
          withDescriptors: "rockstargames-sites-red-dead-redemption-2b98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-red-dead-redemption-2b6339480b5fd086fb0c025930bfb7dcd",
          text: "rockstargames-sites-red-dead-redemption-2babdd6ae2ff83f380dadc6982effa011"
        },
        k = (0, r.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var h = t(95520);
      (0, i.importAll)(t(36672));
      const j = f(p((e => {
        let {
          descriptors: a = null,
          footer: d = null,
          href: c,
          img: m = null,
          titleSlug: l = null,
          style: p = {},
          className: _
        } = e;
        const [f, j] = (0, s.useState)(!1), {
          inView: v
        } = (0, o.Wx)({
          threshold: .6
        }), [x, w] = (0, s.useState)({
          ratingDescriptors: a,
          ratingFooter: d,
          ratingImg: m,
          ratingUrl: c
        }), {
          track: z
        } = (0, n.h)(), y = (0, r.useIntl)(), {
          data: N
        } = (0, i.useQuery)(h.GameData, {
          variables: {
            titleSlug: l
          },
          skip: !l
        });
        if ((0, s.useEffect)((() => {
            N && w(N?.game)
          }), [N]), (0, s.useEffect)((() => {
            v && !f && x.img_rating && (z({
              event: "page_section_impression",
              element_placement: "rating"
            }), j(!0))
          }), [v]), !x.ratingImg) return null;
        const S = !!x.ratingDescriptors;
        return (0, g.jsxs)("div", {
          className: [b.rating, S ? b.withDescriptors : b.withOutDescriptors, _ || ""].join(" "),
          style: (0, i.safeStyles)(p),
          "data-testid": "rating",
          children: [(0, g.jsx)(u, {
            to: x.ratingUrl,
            target: "_blank",
            children: (0, g.jsx)("img", {
              alt: y.formatMessage(k.components_ratings_link_alt, {
                rating: (D = x.ratingImg, D.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${x.ratingImg}`)
            })
          }), S && (0, g.jsxs)("div", {
            className: b.text,
            children: [(0, g.jsx)("p", {
              className: b.descriptors,
              dangerouslySetInnerHTML: {
                __html: x?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), x.ratingFooter && (0, g.jsx)("hr", {}), x.ratingFooter && (0, g.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: x.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var D
      })));
      var v = t(47224);
      const x = JSON.parse('{"de-DE":{"rdr2_companion_app_paragraph_2":"Die Begleit-App beinhaltet die vollständige Karte. Du kannst die Karte schwenken und zoomen, Wegpunkte setzen oder mit einer Berührung des Bildschirms interessante Orte markieren, um dir bei der Erkundung der riesigen weiten Welt von Red Dead Redemption 2 zu helfen. Außerdem zeigt die App Arthur Morgans Kerne und Werte in Echtzeit auf deinem Mobilgerät an und ermöglicht es dir so, das HUD des Spiels auf Wunsch komplett von deinem Fernsehbildschirm zu entfernen. Zudem kannst du über die App Arthurs Tagebuch im Spiel lesen und deine Statistiken verfolgen. Die App enthält das vollständige digitale Spielehandbuch sowie eine optionale digitale Version des offiziellen Guides zu Red Dead Redemption 2 von Piggyback und mehr.","rdr2_credits_additional_cast_title":"Weitere Besetzung","rdr2_credits_main_cast_title":"Die Besetzung","rdr2_credits_outlaws_title":"Outlaw-Banden des Südens und Westens","rdr2_credits_outsource_title":"Dienstleistungen für Kunst und Animation (outsourced)","rdr2_download_android":"Hol dir die offizielle Begleit-App für Red Dead Redemption 2 bei Google Play.","rdr2_download_ios":"Lade die offizielle Begleit-App für Red Dead Redemption 2 im App Store herunter.","rdr2_download_label":"Herunterladen: Bild {name}, Größe: {size}","rdr2_download_pixels_label":"Herunterladen: Bild {name}, Größe: {size1} Pixel mal {size2} Pixel","rdr2_legacy_credits_title":"Legacy Credits","rdr2_pc_missions4_bonus_first_half":"Außerdem enthält Red Dead Redemption 2 für PC einen neuen Fotomodus, mit einer Fülle an Optionen, um die Schönheit des Grenzlandes im Story-Modus einzufangen. Nehmt mit der freibeweglichen Kamera Bilder auf und verseht sie mit Filtern, Stickern oder Text und","rdr2_pc_missions4_bonus_second_half":", um sie mit der Community zu teilen.","rdr2_pc_missions4_bonus_upload_message":"ladet sie hoch","rdr2_pc_missions4_list_item1":"<span>Habichtkralle</span> – Verringert die Geschwindigkeit, mit der sich beim Bogenspannen die Ausdauer leert, dauerhaft um 30 %","rdr2_pc_missions4_list_item2":"<span>Katzenauge</span> – Erhöht die Wirkungsdauer von verstärkenden Tonika dauerhaft um 20 %","rdr2_pc_missions4_list_item3":"<span>Haizahn</span> – Erhöht die Geschwindigkeit, mit der Pferdeverbundenheit zunimmt, dauerhaft um 10 %","rdr2_pc_missions4_list_item4":"<span>Schildkrötenpanzer</span> – Erhöht die Geschwindigkeit, mit der sich Gesundheit wieder auffüllt, dauerhaft um 10 %","rdr2_pc_missions4_list_item5":"<span>Krähenschnabel</span> – Erhöht die Menge geplünderter Munition dauerhaft um 10 %<","rdr2_pc_missions4_list_title":"Fünf neue <span>Amulette</span> mit neuen Effekten zum Sammeln:","rdr2_pc_missions4_new_mission":"<p>Die neue Mission <span>„In den entlegensten Winkeln der Welt“</span> – Sammelt angefragte Kräuter, um eine Reihe an Belohnungen zu erhalten</p>"},"en-US":{"rdr2_companion_app_paragraph_2":"The Companion app includes the full map. You can pan and zoom, set waypoints or mark areas of interest with a tap on your screen, aiding your exploration and discovery throughout the expansive world of Red Dead Redemption 2. Additionally, you can track Arthur Morgan\'s core info and stats in real-time on your device, allowing you to completely remove the in-game HUD from your television should you choose. The app also lets you examine Arthur\'s in-game Journal, provides stat tracking, contains the full digital game manual, plus an optional digital version of the Red Dead Redemption 2 Complete Official Guide from Piggyback and more.","rdr2_credits_additional_cast_title":"Additional Cast","rdr2_credits_main_cast_title":"The Cast","rdr2_credits_outlaws_title":"Outlaw Gangs of the South and West","rdr2_credits_outsource_title":"Outsource Art and Animation Services","rdr2_download_android":"Get Red Dead Redemption 2 Official Companion App on Google Play.","rdr2_download_ios":"Download Red Dead Redemption 2 Official Companion App on the App Store.","rdr2_download_label":"Download {name} image in {size} size.","rdr2_download_pixels_label":"Download {name} image of {size1} pixels by {size2} pixels.","rdr2_legacy_credits_title":"Legacy Credits","rdr2_pc_missions4_bonus_first_half":"Plus, Red Dead Redemption 2 for PC includes a new Photo Mode, with an assortment of tools to unlock the beauty of the frontier in Story Mode. Capture images with free form camera movement and add Filters, Stickers or Text then","rdr2_pc_missions4_bonus_second_half":"to share with the community.","rdr2_pc_missions4_bonus_upload_message":"upload them","rdr2_pc_missions4_list_item1":"<span>Hawk Talon</span> – permanently decreases Stamina bar drain speed by 30% when drawing a bow","rdr2_pc_missions4_list_item2":"<span>Cat Eye</span> – permanently increases the length of Fortifying tonic effects by 20%","rdr2_pc_missions4_list_item3":"<span>Shark Tooth</span> – permanently increases horse bonding experience bonus by 10%","rdr2_pc_missions4_list_item4":"<span>Turtle Shell</span> – permanently increases health bar refill speed by 10%","rdr2_pc_missions4_list_item5":"<span>Crow Beak</span> – permanently increases looted ammo by 10%","rdr2_pc_missions4_list_title":"5 New <span>Trinkets</span> to collect with new effects:","rdr2_pc_missions4_new_mission":"<span>New mission \\"To The Ends of The Earth\\"</span> – collect requested herbs for a range of rewards"},"es-ES":{"rdr2_companion_app_paragraph_2":"La aplicación complementaria incluye el mapa completo. Solo tienes que tocar la pantalla para girarlo, usar el zoom, fijar destinos o marcar zonas de interés, lo que te ayudará a explorar el gran mundo abierto de Red Dead Redemption 2. Además, puedes hacer un seguimiento de las estadísticas y la información básica de Arthur Morgan en tiempo real en tu dispositivo, por lo que podrás ocultar totalmente la interfaz del juego en tu televisor, si así lo deseas. La aplicación también te permite consultar el diario de Arthur y seguir las estadísticas. Además, contiene el manual completo del juego en versión digital e incluye una versión digital y opcional de la guía completa oficial de Red Dead Redemption 2, publicada por Piggyback, y mucho más.","rdr2_credits_additional_cast_title":"Reparto adicional","rdr2_credits_main_cast_title":"Reparto","rdr2_credits_outlaws_title":"Cuadrillas de forajidos del sur y el oeste","rdr2_credits_outsource_title":"Servicios externalizados de arte y animación","rdr2_download_android":"Obtén la aplicación complementaria de Red Dead Redemption 2 en Google Play.","rdr2_download_ios":"Obtén la aplicación complementaria de Red Dead Redemption 2 en la App Store.","rdr2_download_label":"Descargar la imagen «{name}» en tamaño {size}.","rdr2_download_pixels_label":"Descargar la imagen «{name}» en {size1} por {size2} píxeles.","rdr2_legacy_credits_title":"Créditos originales","rdr2_pc_missions4_bonus_first_half":"Además, Red Dead Redemption 2 para PC incluye un nuevo modo Foto con varias herramientas que revelarán la belleza de la frontera en el Modo Historia. Captura imágenes gracias a la cámara libre, añádeles filtros, pegatinas o texto y","rdr2_pc_missions4_bonus_second_half":"súbelas","rdr2_pc_missions4_bonus_upload_message":"para compartirlas con la comunidad.","rdr2_pc_missions4_list_item1":"<span>Garra de halcón</span> – reduce permanentemente en un 30 % la velocidad a la que se agota la barra de resistencia al apuntar con el arco.","rdr2_pc_missions4_list_item2":"<span>Ojo de gato</span> – aumenta permanentemente en un 20 % la duración de los efectos de los tónicos fortalecedores.","rdr2_pc_missions4_list_item3":"<span>Diente de tiburón</span> – aumenta permanentemente en un 10 % el vínculo con el caballo.","rdr2_pc_missions4_list_item4":"<span>Caparazón de tortuga</span> – aumenta permanentemente en un 10 % la velocidad a la que se restablece la barra de salud.","rdr2_pc_missions4_list_item5":"<span>Pico de cuervo</span> – aumenta permanentemente en un 10 % la cantidad de munición que se obtiene al saquear.","rdr2_pc_missions4_list_title":"5 nuevos <span>abalorios</span> con los que podrás obtener con nuevos efectos:","rdr2_pc_missions4_new_mission":"<span>Nueva misión \\"Hasta los confines de la Tierra\\":</span> – recoge las hierbas requeridas y obtén diversas recompensas"},"es-MX":{"rdr2_companion_app_paragraph_2":"La Aplicación Complementaria incluye el mapa completo. Solo tienes que tocar la pantalla para girarlo, usar el zoom, fijar destinos o marcar zonas de interés, lo que te ayudará a explorar el gran mundo abierto de Red Dead Redemption 2. Además, puedes hacer un seguimiento de las estadísticas y la información básica de Arthur Morgan en tiempo real en tu dispositivo, por lo que podrás eliminar totalmente el HUD del juego de tu televisión, si así lo deseas. La aplicación también te permite consultar el diario de Arthur y seguir las estadísticas. Además, contiene el manual completo del juego en versión digital e incluye una versión digital y opcional de la guía completa oficial de Red Dead Redemption 2, publicada por Piggyback®, y más.","rdr2_credits_additional_cast_title":"Reparto adicional","rdr2_credits_main_cast_title":"Reparto","rdr2_credits_outlaws_title":"Bandas de forajidos del sur y el oeste","rdr2_credits_outsource_title":"Servicios de arte y animación subcontratados","rdr2_download_android":"Descarga la Aplicación Complementaria oficial de Red Dead Redemption 2 desde Google Play.","rdr2_download_ios":"Descarga la Aplicación Complementaria oficial de Red Dead Redemption 2 desde la App Store.","rdr2_download_label":"Descarga la imagen {name} con la siguiente resolución: {size}.","rdr2_download_pixels_label":"Descarga la imagen {name} de {size1} píxeles por {size2} píxeles.","rdr2_legacy_credits_title":"Créditos anteriores","rdr2_pc_missions4_bonus_first_half":"Además, Red Dead Redemption 2 para PC incluye un nuevo Modo Foto con varias herramientas que revelarán la belleza de la frontera en el Modo Historia. Captura imágenes utilizando la cámara libre, añádeles filtros, etiquetas o texto, y ","rdr2_pc_missions4_bonus_second_half":"para compartirlas con la comunidad.","rdr2_pc_missions4_bonus_upload_message":"súbelas ","rdr2_pc_missions4_list_item1":"<span>Garra de halcón</span>: reduce permanentemente en un 30% la velocidad a la que se agota la barra de resistencia al apuntar con el arco.","rdr2_pc_missions4_list_item2":"<span>Ojo de gato</span>: aumenta permanentemente en un 20% la duración de los efectos del tónico fortalecedor.","rdr2_pc_missions4_list_item3":"<span>Diente de tiburón</span>: aumenta permanentemente en un 10% la experiencia que se obtiene al crear un vínculo con el caballo.","rdr2_pc_missions4_list_item4":"<span>Caparazón de tortuga</span>: aumenta permanentemente en un 10% la velocidad a la que se restablece la barra de salud.","rdr2_pc_missions4_list_item5":"<span>Pico de cuervo</span>: aumenta permanentemente en un 10% la cantidad de munición que se obtiene al saquear.","rdr2_pc_missions4_list_title":"5 nuevos <span>dijes</span> con nuevas funciones:","rdr2_pc_missions4_new_mission":"<span>Nueva misión “Hasta los confines de la Tierra”</span>: consigue ciertas hierbas para obtener una serie de recompensas."},"fr-FR":{"rdr2_companion_app_paragraph_2":"L\'application compagnon inclut la carte complète. Vous pouvez zoomer sur la carte, placer des repères ou marquer des zones d\'intérêt en tapotant simplement l\'écran, afin de vous aider à explorer et découvrir le monde gigantesque de Red Dead Redemption 2. L\'application affiche également en temps réel les informations et statistiques les plus importantes pour Arthur Morgan sur votre appareil, ce qui vous permet de masquer complètement l\'interface du jeu sur votre téléviseur, si vous le souhaitez. En plus de vous permettre de feuilleter le carnet en jeu d\'Arthur, l\'application compagnon vous permet de suivre des statistiques, contient le manuel complet du jeu au format numérique ainsi qu\'une version numérique du Guide officiel complet de Red Dead Redemption 2 par Piggyback (en supplément), et plus.","rdr2_credits_additional_cast_title":"Distribution supplémentaire","rdr2_credits_main_cast_title":"Distribution","rdr2_credits_outlaws_title":"Bandes de hors-la-loi du Sud et de l’Ouest","rdr2_credits_outsource_title":"Services externes d’art et d’animation","rdr2_download_android":"Obtenez l\'application compagnon officielle de Red Dead Redemption 2 sur Google Play.","rdr2_download_ios":"Téléchargez l\'application compagnon officielle de Red Dead Redemption 2 sur l\'App Store.","rdr2_download_label":"Téléchargez l\'image {name} en taille {size}.","rdr2_download_pixels_label":"Téléchargez l\'image {name} en {size1}x{size2}.","rdr2_legacy_credits_title":"Crédits originels","rdr2_pc_missions4_bonus_first_half":"Red Dead Redemption 2 sur PC inclut également un mode Photo, disposant d\'un large éventail d\'outils qui vous permettront de capturer la beauté de l\'Ouest sauvage du mode Histoire. Prenez des clichés avec une caméra libre, ajoutez des filtres, des autocollants ou du texte, puis","rdr2_pc_missions4_bonus_second_half":"pour les partager avec la communauté.","rdr2_pc_missions4_bonus_upload_message":"publiez-les","rdr2_pc_missions4_list_item1":"<span>Serre de faucon</span> : réduit de manière permanente la vitesse à laquelle la jauge d\'énergie se vide lorsque vous bandez un arc de 30 %.","rdr2_pc_missions4_list_item2":"<span>Œil de chat</span> : augmente de manière permanente la durée des effets du fortifiant de 20 %.","rdr2_pc_missions4_list_item3":"<span>Dent de requin</span> : augmente de manière permanente l\'expérience du lien d\'affection avec le cheval de 10 %.","rdr2_pc_missions4_list_item4":"<span>Carapace de tortue</span> : augmente de manière permanente la vitesse à laquelle la jauge de santé se remplit de 10 %.","rdr2_pc_missions4_list_item5":"<span>Bec de corneille</span> : augmente de manière permanente la quantité de munitions trouvées en fouillant de 10 %.","rdr2_pc_missions4_list_title":"Cinq nouvelles <span>amulettes</span> à collectionner avec de nouveaux effets :","rdr2_pc_missions4_new_mission":"Une nouvelle mission : <span>\\"Aux quatre coins de la terre\\"</span>. Cueillez les plantes demandées pour obtenir des récompenses."},"it-IT":{"rdr2_companion_app_paragraph_2":"La Companion app include tutta la mappa. Ti permette di scorrerla e di ingrandirla, impostare mete o contrassegnare aree d\'interesse con un semplice tocco dello schermo, assistendoti nell\'esplorazione e nella scoperta del vastissimo mondo di Red Dead Redemption 2. Inoltre, mostra in tempo reale sul tuo dispositivo anche le informazioni vitali di Arthur Morgan, permettendoti anche di rimuovere l\'interfaccia di gioco dallo schermo. In più, consente di leggere il diario di Arthur, monitorare le statistiche, consultare il manuale completo in formato digitale e una versione opzionale della Guida ufficiale completa di Red Dead Redemption 2 di Piggyback, e altro.","rdr2_credits_additional_cast_title":"Altri personaggi","rdr2_credits_main_cast_title":"I protagonisti","rdr2_credits_outlaws_title":"Bande fuorilegge del sud e dell’ovest","rdr2_credits_outsource_title":"Arte e animazioni di terze parti","rdr2_download_android":"Ottieni la Companion app ufficiale di Red Dead Redemption 2 su Google Play.","rdr2_download_ios":"Scarica la Companion app ufficiale di Red Dead Redemption 2 sull’App Store.","rdr2_download_label":"Scarica l’immagine “{name}” in formato {size}.","rdr2_download_pixels_label":"Scarica l’immagine “{name}” in formato {size1} pixel x {size2} pixel.","rdr2_legacy_credits_title":"Legacy Credits","rdr2_pc_missions4_bonus_first_half":"Inoltre, Red Dead Redemption 2 per PC include una nuova modalità Foto arricchita con una serie di strumenti per immortalare al meglio la bellezza della frontiera nella modalità Storia. Scatta foto senza limitazioni al movimento della macchina fotografica e aggiungi filtri, adesivi e testi","rdr2_pc_missions4_bonus_second_half":"e condividile con la community.","rdr2_pc_missions4_bonus_upload_message":"e caricale","rdr2_pc_missions4_list_item1":"<span>Artiglio di falco</span> – Riduce permanentemente del 30% la velocità con cui si consuma la barra della Resistenza quando usi un arco","rdr2_pc_missions4_list_item2":"<span>Occhio di gatto</span> – Incrementa permanentemente del 20% la durata degli effetti dei tonici che potenziano le statistiche","rdr2_pc_missions4_list_item3":"<span>Dente di squalo</span> – Incrementa permanentemente del 10% l\'acquisizione di esperienza per rafforzare il legame con il cavallo","rdr2_pc_missions4_list_item4":"<span>Guscio di tartaruga</span> – Incrementa permanentemente del 10% la velocità con cui si ripristina la barra della Salute","rdr2_pc_missions4_list_item5":"<span>Becco di cornacchia</span> – Incrementa permanentemente del 10% le munizioni raccolte","rdr2_pc_missions4_list_title":"5 nuovi <span>amuleti</span> da collezionare, con nuovi effetti:","rdr2_pc_missions4_new_mission":"<span>La nuova missione \\"Fino in capo al mondo\\"</span> – Raccogli le piante richieste per ricevere delle ricompense"},"ja-JP":{"rdr2_companion_app_paragraph_2":"コンパニオンアプリにはフルマップが含まれます。画面をタップしてパンやズーム機能、行き先マーカーの設置、また重要な場所のマークができます。『レッド・デッド・リデンプション2』の広大なオープンワールドで探索や発見がしやすくなります。本アプリでは、アーサー・モーガンの基本ステータスがリアルタイムで確認できるため、ご使用のTVから全てのゲーム内HUDを消した状態で楽しめます。さらに、アーサーのゲーム内日誌を確認したり、データ記録を利用したり、完全版のゲームマニュアルを確認することもコンパニオンアプリから行えます。さらに、オプションでPiggybackによる『レッド・デッド・リデンプション2』公式コンプリートガイドのデジタル版も利用できるなど、他にも様々な機能があります。","rdr2_credits_additional_cast_title":"Additional Cast","rdr2_credits_main_cast_title":"The Cast","rdr2_credits_outlaws_title":"Outlaw Gangs of the South and West","rdr2_credits_outsource_title":"Outsource Art and Animation Services","rdr2_download_android":"Google Play で『レッド・デッド・リデンプション2』の公式コンパニオンアプリを入手しましょう。","rdr2_download_ios":"App Storeで『レッド・デッド・リデンプション2』の公式コンパニオンアプリをダウンロードしましょう。","rdr2_download_label":"{size}サイズでイメージ「{name}」をダウンロード","rdr2_download_pixels_label":"{size1}ピクセルｘ{size2}ピクセルのイメージ{name}をダウンロード","rdr2_legacy_credits_title":"Legacy Credits","rdr2_pc_missions4_bonus_first_half":"さらに、PC版『レッド・デッド・リデンプション2』には新しいフォトモードも含まれています。充実した様々なツールを使うことで、ストーリーモードの美麗な景色を切り取ることができます。自由にカメラを移動させて画像を撮り、フィルターやステッカーまたはテキストで飾ったら、","rdr2_pc_missions4_bonus_second_half":"してコミュニティで公開しましょう。","rdr2_pc_missions4_bonus_upload_message":"アップロード","rdr2_pc_missions4_list_item1":"<span>鷹のかぎ爪</span>：弓を引いた際のスタミナゲージの消耗スピードが30％遅くなる。効果は永久に持続する。","rdr2_pc_missions4_list_item2":"<span>猫の目</span>：強壮剤による効果の持続時間が20％長くなる。効果は永久に持続する。","rdr2_pc_missions4_list_item3":"<span>サメの歯</span>：馬との親密度の経験値に10％のボーナスが付く。効果は永久に持続する。","rdr2_pc_missions4_list_item4":"<span>亀の甲羅</span>：ライフゲージの回復スピードが10％速くなる。効果は永久に持続する。","rdr2_pc_missions4_list_item5":"<span>カラスのくちばし</span>：略奪で手に入る弾薬の数が10％増える。効果は永久に持続する。","rdr2_pc_missions4_list_title":"新たな5つの<span>アクセサリー</span>(集めると新たな効果を解除)：","rdr2_pc_missions4_new_mission":"<span>新しいミッション「大地の果てまで」</span>：荒野でハーバリストのキャンプを訪れ、頼まれた薬草を集めて様々な報酬を手に入れましょう。"},"ko-KR":{"rdr2_companion_app_paragraph_2":"컴패니언 앱에는 전체 지도가 포함됩니다. 사용자는 지도를 회전하거나 확대, 축소하고 경유지를 설정하거나, 화면을 탭해서 관심 지역을 표시할 수 있어 드넓은 Red Dead Redemption 2의 세계를 둘러보고 탐험하는 데 도움을 드립니다.  또한, 이 앱으로 아서 모건의 기본 정보를 확인할 수 있고 통계도 실시간으로 여러분의 기기에 표시되기 때문에 사용 중인 TV나 모니터에서 게임 내 HUD를 완전히 제거해도 될 정도입니다. 컴패니언 앱에서는 아서의 게임 내 일지를 볼 수 있고, 각종 통계 및 디지털 게임 설명서 전체를 확인할 수 있습니다. 또한 선택 사항으로 Piggyback에서 만든 Red Dead Redemption 2 컴플리트 공식 가이드의 디지털 버전도 이용할 수 있는 등 다양한 기능이 있습니다.","rdr2_credits_additional_cast_title":"Additional Cast","rdr2_credits_main_cast_title":"The Cast","rdr2_credits_outlaws_title":"Outlaw Gangs of the South and West","rdr2_credits_outsource_title":"Outsource Art and Animation Services","rdr2_download_android":"Google Play에서 Red Dead Redemption 2 공식 컴패니언 앱 다운로드.","rdr2_download_ios":"App Store에서 Red Dead Redemption 2 공식 컴패니언 앱 다운로드.","rdr2_download_label":"{size} 크기의 {name} 이미지 다운로드.","rdr2_download_pixels_label":"{size1} x {size2} 픽셀의 {name} 이미지 다운로드.","rdr2_legacy_credits_title":"Legacy Credits","rdr2_pc_missions4_bonus_first_half":"또한, PC용 Red Dead Redemption 2에는 신규 사진 모드가 포함되어 있습니다. 다양한 도구를 잠금 해제하고 스토리 모드에서 개척지의 아름다움을 사진 속에 담아 보십시오. 자유 카메라로 사진을 찍고 필터, 스티커, 텍스트를 추가하세요. 찍고 편집한 사진은","rdr2_pc_missions4_bonus_second_half":"커뮤니티와 공유할 수 있습니다.","rdr2_pc_missions4_bonus_upload_message":"업로드하여","rdr2_pc_missions4_list_item1":"<span>매 발톱</span> - 활을 당길 때 기력 게이지가 감소되는 속도를 영구적으로 30% 늦춥니다","rdr2_pc_missions4_list_item2":"<span>고양이 눈</span> - 강장제 효과의 지속 시간이 영구적으로 20% 증가합니다","rdr2_pc_missions4_list_item3":"<span>상어 이빨</span> - 말 친밀도 경험치 보너스가 영구적으로 10% 증가합니다","rdr2_pc_missions4_list_item4":"<span>거북 껍질</span> - 체력 게이지 회복 속도가 영구적으로 10% 증가합니다","rdr2_pc_missions4_list_item5":"span>까마귀 부리</span> - 노획한 탄약의 양이 영구적으로 10% 증가합니다","rdr2_pc_missions4_list_title":"새로운 효과를 얻을 수 있는 5개의 신규 <span>장신구</span>:","rdr2_pc_missions4_new_mission":"<span>새로운 임무 \\"세상이 끝나는 날까지\\"</span> – 요청받은 약초를 획득하여 다양한 보상을 얻으십시오."},"pl-PL":{"rdr2_companion_app_paragraph_2":"Aplikacja towarzysząca zawiera pełną mapę. Mapę można przesuwać i przybliżać/oddalać, a także wykorzystywać do zaznaczania jednym gestem punktów nawigacyjnych, co ułatwia eksplorację olbrzymiego świata Red Dead Redemption 2. Aplikacja pokazuje również na urządzeniu mobilnym główne informacje o Arthurze Morganie i jego statystyki, podając je w czasie rzeczywistym. Dzięki temu można zupełnie wyłączyć interfejs na telewizorze. Oprócz tego aplikacja pozwala przeglądać dziennik Arthura z gry, śledzić statystyki, a także zawiera pełną instrukcję w wersji cyfrowej i daje możliwość posiadania cyfrowej wersji kompletnego oficjalnego poradnika do Red Dead Redemption 2 od Piggyback. A to jeszcze nie wszystko.","rdr2_credits_additional_cast_title":"Dodatkowa obsada","rdr2_credits_main_cast_title":"Obsada","rdr2_credits_outlaws_title":"Południowe i zachodnie gangi bandytów","rdr2_credits_outsource_title":"Zewnętrzne usługi artystyczne i animacyjne","rdr2_download_android":"Pobierz oficjalną aplikację towarzyszącą Red Dead Redemption 2 z Google Play.","rdr2_download_ios":"Pobierz oficjalną aplikację towarzyszącą Red Dead Redemption 2 z App Store.","rdr2_download_label":"Pobierz obraz: {name} w rozdzielczości: {size}.","rdr2_download_pixels_label":"Pobierz obraz: {name} w rozdzielczości {size1} pikseli na {size2} pikseli.","rdr2_legacy_credits_title":"Pierwotne napisy końcowe","rdr2_pc_missions4_bonus_first_half":"Oprócz tego Red Dead Redemption 2 na PC wprowadza nowy tryb fotograficzny z mnóstwem narzędzi do upiększania pogranicza w trybie fabularnym. Róbcie zdjęcia ze swobodnego ujęcia kamery, dodawajcie filtry, naklejki lub tekst, a następnie","rdr2_pc_missions4_bonus_second_half":", aby podziwiać je mogła cała społeczność.","rdr2_pc_missions4_bonus_upload_message":"przesyłajcie","rdr2_pc_missions4_list_item1":"<span>Ozdoba ze szpona jastrzębia</span> – trwale zmniejsza tempo wyczerpywania się paska wytrzymałości podczas naciągania łuku o 30%","rdr2_pc_missions4_list_item2":"<span>Ozdoba z oka kota</span> – trwale zwiększa długość trwania efektów remediów wzmacniających o 20%","rdr2_pc_missions4_list_item3":"<span>Ozdoba z zęba rekina</span> – trwale zwiększa wzmacnianie poziomu więzi z koniem o 10%","rdr2_pc_missions4_list_item4":"<span>Ozdoba ze skorupy żółwia</span> – trwale zwiększa szybkość odnawiania się paska zdrowia o 10%","rdr2_pc_missions4_list_item5":"<span>Ozdoba z dzioba wrony</span> – trwale zwiększa ilość znajdowanej przez gracza amunicji o 10%","rdr2_pc_missions4_list_title":"5 nowych <span>ozdób</span> z nowymi efektami do zebrania:","rdr2_pc_missions4_new_mission":"<span>Nowa misja „W każdym zakątku Ziemi”</span> – zbierzcie zioła dla zielarza, aby otrzymać szereg nagród."},"pt-BR":{"rdr2_companion_app_paragraph_2":"O Aplicativo Complementar inclui o mapa completo. Você pode ver o mapa todo e aproximar o zoom, marcar destinos ou áreas de interesse com um toque na sua tela enquanto você explora e desvenda o expansivo mundo de Red Dead Redemption 2. Além disso, você pode acompanhar as informações sobre bases e estatísticas do Arthur Morgan em tempo real no seu dispositivo, possibilitando a remoção completa do HUD da tela do jogo, se desejar. O aplicativo também permite que você leia o Diário do Arthur no jogo, além de oferecer acompanhamento de estatísticas, conter o manual digital completo e uma versão digital opcional do Guia Oficial Completo de Red Dead Redemption 2 da Piggyback e mais.","rdr2_credits_additional_cast_title":"Elenco adicional","rdr2_credits_main_cast_title":"Elenco","rdr2_credits_outlaws_title":"Fora da lei do sul e oeste","rdr2_credits_outsource_title":"Serviços de arte e animação","rdr2_download_android":"Obtenha o Aplicativo Complementar Oficial de Red Dead Redemption 2 no Google Play.","rdr2_download_ios":"Baixe o Aplicativo Complementar Oficial de Red Dead Redemption 2 na App Store.","rdr2_download_label":"Baixe a imagem {name} no tamanho {size}.","rdr2_download_pixels_label":"Baixe a imagem {name} com {size1} x {size2} pixels.","rdr2_legacy_credits_title":"Créditos anteriores","rdr2_pc_missions4_bonus_first_half":"Além disso, Red Dead Redemption 2 para PC inclui o Modo Foto com diversas ferramentas para desvendar a beleza da fronteira no Modo História. Capture imagens com movimentos de câmera livre e adicione filtros, adesivos ou texto e","rdr2_pc_missions4_bonus_second_half":"para compartilhar com a comunidade.","rdr2_pc_missions4_bonus_upload_message":"carregue as fotos","rdr2_pc_missions4_list_item1":"<span>Amuleto Garra de Gavião</span> – diminui permanentemente em 30% a velocidade com que a barra de Fôlego se esgota ao usar um arco.","rdr2_pc_missions4_list_item2":"<span>Amuleto Olho de Gato</span> – aumenta permanentemente em 20% a duração dos efeitos dos tônicos fortificantes.","rdr2_pc_missions4_list_item3":"<span>Amuleto Dente de Tubarão</span> – aumenta permanentemente em 10% a experiência de vínculo com o seu cavalo.","rdr2_pc_missions4_list_item4":"<span>Amuleto Casco de Tartaruga</span> – aumenta permanentemente em 10% a velocidade com que a barra de Vida é recarregada.","rdr2_pc_missions4_list_item5":"<span>Amuleto Bico de Corvo</span> – aumenta permanentemente em 10% a quantidade de munição saqueada pelo jogador.","rdr2_pc_missions4_list_title":"5 novos <span>Amuletos</span> para coletar com novos efeitos especiais:","rdr2_pc_missions4_new_mission":"<span>Nova missão \\"Cada Palmo de Terra\\"</span> – colete as ervas solicitadas para receber recompensas."},"ru-RU":{"rdr2_companion_app_paragraph_2":"В приложении-компаньоне представлена полная карта игры. Вы можете ее просматривать и масштабировать, выставлять точки маршрута и отмечать важные объекты, что поможет вам в исследовании огромного мира Red Dead Redemption 2. В этом приложении также отображаются статусы и другие параметры Артура Моргана, поэтому вы можете отключить интерфейс в самой игре, ничего не потеряв. Кроме того, приложение содержит в себе дневник Артура, инструменты для отслеживания статистики, полную цифровую версию руководства по игре, цифровую версию официального стратегического руководства по Red Dead Redemption 2 от Piggyback и многое другое.","rdr2_credits_additional_cast_title":"Во второстепенных ролях","rdr2_credits_main_cast_title":"В главных ролях","rdr2_credits_outlaws_title":"Банды юга и запада","rdr2_credits_outsource_title":"Графика и анимация (аутсорсинг)","rdr2_download_android":"Скачать официальное приложение-компаньон Red Dead Redemption 2 из Google Play.","rdr2_download_ios":"Загрузить официальное приложение-компаньон Red Dead Redemption 2 в App Store.","rdr2_download_label":"Загрузить изображение \\"{name}\\" в размере \\"{size}\\".","rdr2_download_pixels_label":"Загрузить изображение \\"{name}\\" в размере {size1} на {size2} пикселей.","rdr2_legacy_credits_title":"Классические титры","rdr2_pc_missions4_bonus_first_half":"Также в Red Dead Redemption 2 для PC есть новый фоторежим, позволяющий запечатлеть красоты фронтира в сюжетном режиме. Фотографируйте, используя свободную камеру, добавляйте фильтры, наклейки и надписи и","rdr2_pc_missions4_bonus_second_half":", чтобы показать их другим игрокам.","rdr2_pc_missions4_bonus_upload_message":"загружайте фото","rdr2_pc_missions4_list_item1":"<span>Амулет из когтя ястреба</span> на 30% замедляет расход шкалы выносливости при натягивании тетивы.","rdr2_pc_missions4_list_item2":"<span>Амулет из глаза кошки</span> на 20% увеличивает время действия укрепляющего тоника.","rdr2_pc_missions4_list_item3":"<span>Амулет из зуба акулы</span> на 10% повышает скорость завоевания доверия лошади.","rdr2_pc_missions4_list_item4":"<span>Амулет из панциря черепахи</span> на 10% повышает скорость заполнения шкалы здоровья.","rdr2_pc_missions4_list_item5":"<span>Амулет из клюва вороны</span> на 10% увеличивает количество находимых боеприпасов.","rdr2_pc_missions4_list_title":"5 новых <span>амулетов</span>:","rdr2_pc_missions4_new_mission":"<span>Новая миссия «Дары природы»</span>: задание по сбору трав, за выполнение которого вы получите награды"},"zh-CN":{"rdr2_companion_app_paragraph_2":"配套应用包括了完整的地图。您可以通过轻触设备屏幕平移和缩放地图、设置路径点或标记区域，帮助您在广阔的 Red Dead Redemption 2 开放世界中探索、揭秘。这个应用同样会在您的设备上显示亚瑟·摩根的实时核心状态和信息，使您在电视上进行游戏时，可以选择关闭游戏内 HUD。另外，配套应用还可以让您翻看亚瑟的游戏内日记、提供数据追踪、查看数字版的完整游戏手册和 Piggyback 出品的 Red Dead Redemption 2 可选数字完整官方指南。","rdr2_credits_additional_cast_title":"额外演职员表","rdr2_credits_main_cast_title":"演职员表","rdr2_credits_outlaws_title":"南部和西部的亡命之徒","rdr2_credits_outsource_title":"外包美术及动画服务","rdr2_download_android":"在 Google Play 上获取 Red Dead Redemption 2 官方配套应用。","rdr2_download_ios":"在 App Store 中下载 Red Dead Redemption 2 官方配套应用。","rdr2_download_label":"下载图片 {name}，大小 {size}。","rdr2_download_pixels_label":"下载图片 {name}，大小为 {size1} 个像素点 x {size2} 个像素点。","rdr2_legacy_credits_title":"往期致谢","rdr2_pc_missions4_bonus_first_half":"另外，Red Dead Redemption 2 PC 版包括了全新照片模式，带有各种各样的工具，供您在故事模式中解锁边疆美景。使用自由视角来捕捉图像，添加滤镜、贴纸或文字后","rdr2_pc_missions4_bonus_second_half":"即可与社区分享。","rdr2_pc_missions4_bonus_upload_message":"上传这些图像","rdr2_pc_missions4_list_item1":"<span>鹰爪</span>：使拉弓时的体力值条消耗速度永久性减慢 30%","rdr2_pc_missions4_list_item2":"<span>猫眼</span>：使强化补剂效果的持续时间永久性增加 20%","rdr2_pc_missions4_list_item3":"<span>鲨鱼牙</span>：使马匹默契经验值永久性增加 10%","rdr2_pc_missions4_list_item4":"<span>龟壳</span>：使生命值条恢复速度永久性加快 10%","rdr2_pc_missions4_list_item5":"<span>乌鸦喙</span>：使搜刮的弹药数量永久性增加 10%","rdr2_pc_missions4_list_title":"5 个全新<span>小饰物</span>，具备新的效果：","rdr2_pc_missions4_new_mission":"<span>全新任务“找遍天涯海角”</span>：收集所需的草药以获得各种奖励"},"zh-TW":{"rdr2_companion_app_paragraph_2":"同伴應用程式包含完整地圖。您可以平移及縮放地圖，只需輕輕點按螢幕，就能設置導航點或標記特殊地點，協助您一路探索和發掘 Red Dead Redemption 2 的廣闊世界。此外，您可以在您的智慧型裝置上，即時追蹤亞瑟．摩根的核心資訊和數據。讓您甚至可以在遊玩過程中，隨心所欲關閉電視螢幕上所有的遊戲抬頭顯示（HUD）。不只如此，您還可以使用此應用程式，查看亞瑟遊戲內的日誌、進行數據追蹤；且附有完整的數位遊戲手冊，還有由 Piggyback 製作，可以隨需要選購的數位版《Red Dead Redemption 2 官方完全攻略》，以及更多。","rdr2_credits_additional_cast_title":"額外演出名單","rdr2_credits_main_cast_title":"演出名單","rdr2_credits_outlaws_title":"南方與西方的黑幫","rdr2_credits_outsource_title":"發包美術與動畫服務","rdr2_download_android":"在 Google Play 取得 Red Dead Redemption 2 官方同伴應用程式。","rdr2_download_ios":"在 App Store 下載 Red Dead Redemption 2 官方同伴應用程式。","rdr2_download_label":"下載 {size} 大小的「{name}」圖片。","rdr2_download_pixels_label":"下載 {size1}x{size2} 像素的「{name}」圖片。","rdr2_legacy_credits_title":"經典片尾名單","rdr2_pc_missions4_bonus_first_half":"此外，Red Dead Redemption 2 PC 版還有全新拍照模式，可讓您在故事模式中利用各種工具解開邊境之美。自由移動相機來拍照，然後套上濾鏡、加上貼圖或文字，再","rdr2_pc_missions4_bonus_second_half":"與社群分享。","rdr2_pc_missions4_bonus_upload_message":"上傳","rdr2_pc_missions4_list_item1":"<span>隼鷹爪</span>：永久降低拉弓時體力值條的消耗速度 30%","rdr2_pc_missions4_list_item2":"<span>貓眼</span>：永久提升增強補藥的效果長度 20%","rdr2_pc_missions4_list_item3":"<span>鯊魚牙齒</span>：永久提升玩家的馬匹親密度經驗值 10%","rdr2_pc_missions4_list_item4":"<span>龜殼</span>：永久提升生命值條的恢復速度 10%","rdr2_pc_missions4_list_item5":"<span>鴉喙</span>：永久提升玩家搜刮的彈藥量 10%","rdr2_pc_missions4_list_title":"五款具有新效果的全新<span>飾品</span>：","rdr2_pc_missions4_new_mission":"<span>「直到大地的盡頭」</span>全新任務：採集所需的藥草以獲得各種獎勵"}}'),
        w = () => {
          const e = (0, i.useLocale)();
          return (0, g.jsx)("img", {
            alt: "Red Dead Redemption 2 Logo",
            src: t(45170)(`./${e}.png`)
          })
        },
        z = () => (0, g.jsx)("div", {
          className: "rockstargames-sites-red-dead-redemption-2d471258073cde8ed809858a6001f6e75",
          children: (0, g.jsx)(w, {})
        }),
        y = (0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, s.useState)(""), r = (0, c.useNavigate)(), o = (0, i.useMutateState)();
          return (0, g.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-red-dead-redemption-2c9f16d9c2f4a943ae8f1f900f31b5f4b",
            onSubmit: e => {
              e.preventDefault(), o({
                navOpen: !1
              }), document.activeElement?.blur?.();
              const a = e.currentTarget.elements.namedItem("q").value;
              r(`/search?q=${a}`)
            },
            role: "search",
            children: [(0, g.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, g.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        N = (0, r.defineMessages)({
          wasted_error_404_new: {
            id: "wasted_error_404_new",
            defaultMessage: "The page you're looking for doesn't exist or another error occurred."
          },
          wasted_home: {
            id: "wasted_home",
            defaultMessage: "Home"
          }
        }),
        S = e => {
          let {
            error: a,
            domain: t = ""
          } = e;
          console.error({
            error: a
          });
          const {
            formatMessage: i
          } = (0, r.useIntl)();
          let o = a?.message ?? i(N.wasted_error_404_new);
          o = i(N.wasted_error_404_new);
          const n = a?.code ?? 398,
            d = (0, s.useRef)(null);
          return (0, s.useEffect)((() => {
            d && d?.current && d.current.focus()
          }), [d]), (0, g.jsxs)("div", {
            className: "rockstargames-sites-red-dead-redemption-2d0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, g.jsx)("h3", {
              tabIndex: -1,
              ref: d,
              children: `${o} (${n})`
            }), (0, g.jsx)(u, {
              to: "/",
              reloadDocument: !1,
              children: i(N.wasted_home)
            }), "clr" !== t && (0, g.jsx)(y, {})]
          })
        };
      var D = t(7880),
        R = t.n(D);
      const O = (0, r.defineMessages)({
          rdr2_credits_outsource_title: {
            id: "rdr2_credits_outsource_title",
            defaultMessage: "Outsource Art and Animation Services"
          },
          rdr2_credits_outlaws_title: {
            id: "rdr2_credits_outlaws_title",
            defaultMessage: "Outlaw Gangs of the South and West"
          },
          rdr2_credits_additional_cast_title: {
            id: "rdr2_credits_additional_cast_title",
            defaultMessage: "Additional Cast"
          },
          rdr2_credits_main_cast_title: {
            id: "rdr2_credits_main_cast_title",
            defaultMessage: "The Cast"
          },
          rdr2_legacy_credits_title: {
            id: "rdr2_legacy_credits_title",
            defaultMessage: "Legacy Credits"
          }
        }),
        F = {
          pillBtn: "rockstargames-sites-red-dead-redemption-2ddcf01978552641193d1f1cea24a8ff2",
          selected: "rockstargames-sites-red-dead-redemption-2b7e4538a7398234dfd125cdc21b9bf22",
          creditsWrapper: "rockstargames-sites-red-dead-redemption-2dfd41a1a8c89f06465c06a6dfa9e9f90",
          logo: "rockstargames-sites-red-dead-redemption-2cec0b5926683cb3da35407a12634ca49",
          "page-title": "rockstargames-sites-red-dead-redemption-2b91265926dd573bb91f6f224bbd4dab8",
          header: "rockstargames-sites-red-dead-redemption-2f9d5865f4fe4249cd287582f795266ee",
          mini: "rockstargames-sites-red-dead-redemption-2b2bd55cb257b91ee619393b505146d49",
          main: "rockstargames-sites-red-dead-redemption-2f8cd0b09671179d211115fb5f6b918af",
          roleTitle: "rockstargames-sites-red-dead-redemption-2f603c52e91e5070d269b73d623f8b8b3",
          "credit-name-area": "rockstargames-sites-red-dead-redemption-2b6818997e26d453623a91a3aa39cb3e6",
          section: "rockstargames-sites-red-dead-redemption-2b6dc7546dd9479e194296bd34576652a",
          "common-column-row": "rockstargames-sites-red-dead-redemption-2f0979823f97527ed1c0b92049dd7350a",
          "rolling-credits": "rockstargames-sites-red-dead-redemption-2d66a697e0b67cc5ae179659e5b5c6e17",
          "comma-span": "rockstargames-sites-red-dead-redemption-2fd22955e755421f94638bc9e7f777d60",
          group: "rockstargames-sites-red-dead-redemption-2d7509c7508404b06c295ad4db5c3fb2e",
          stacked: "rockstargames-sites-red-dead-redemption-2c1b7775e9be1f2a765e4bc5feb7874c8",
          outsource: "rockstargames-sites-red-dead-redemption-2e53df96334423343f2ae6486d50fd23d",
          company: "rockstargames-sites-red-dead-redemption-2d60e96ce7e8a4d212729c46f5bad5acd",
          cast: "rockstargames-sites-red-dead-redemption-2c18946cacd415e1ebeda9a307b6d2214",
          gangs: "rockstargames-sites-red-dead-redemption-2b691ed8529cd4b2bc258ec357e3d4009",
          flex: "rockstargames-sites-red-dead-redemption-2c46292e264d4badc282181792a78956e",
          additional: "rockstargames-sites-red-dead-redemption-2d2b249acf921bbe171a796b6a96e786c",
          music: "rockstargames-sites-red-dead-redemption-2f117ccdce52a63a83d790ff7835f3f14",
          "soundtrack-credit": "rockstargames-sites-red-dead-redemption-2f11338e9982d77a3995ac294a160c633",
          legal: "rockstargames-sites-red-dead-redemption-2a6dbf6ddfec2a5cc078fa1a448a0e51e",
          thanks: "rockstargames-sites-red-dead-redemption-2e8641c4c949c4816d3863fbc65d00627",
          "rolling-three-per-row": "rockstargames-sites-red-dead-redemption-2cac789887cab6be2860a88c9dcf502e3",
          "no-basis": "rockstargames-sites-red-dead-redemption-2f12c5971751f89cf33e8875e7b95582e",
          ornament: "rockstargames-sites-red-dead-redemption-2b89d2fb07dfc56f63e5690c4daadff69",
          "rolling-two-per-row": "rockstargames-sites-red-dead-redemption-2c81eabb301ce71fac565ecc9835ba1a7",
          "center-space-between": "rockstargames-sites-red-dead-redemption-2b495adb5262f3a84392dd7db3150a9c4"
        },
        C = e => {
          let {
            credits: a = []
          } = e;
          const t = (0, r.useIntl)(),
            s = L(a, "section"),
            o = e => {
              let {
                name: a = "",
                group: t = {}
              } = e;
              return (0, g.jsxs)("div", {
                className: F.group,
                children: [(0, g.jsx)("h3", {
                  children: a
                }), t?.map((e => (0, g.jsxs)("div", {
                  className: (0, i.classList)(F.flex, F["rolling-three-per-row"]),
                  children: [(0, g.jsx)("p", {
                    children: e.character
                  }), (0, g.jsxs)("p", {
                    children: [(0, g.jsx)("span", {
                      className: F.ornament,
                      children: "-"
                    }), e.description, (0, g.jsx)("span", {
                      className: F.ornament,
                      children: "-"
                    })]
                  }), (0, g.jsx)("p", {
                    children: e.name
                  })]
                }, `${e?.name}_${e?.character}`)))]
              })
            };
          return s && (0, g.jsxs)("section", {
            role: "region",
            "aria-label": t.formatMessage(O.rdr2_credits_main_cast_title),
            className: (0, i.classList)(F.section, F.flex, F.cast),
            "data-testid": "rdr2-cast-credits",
            children: [(0, g.jsx)("h2", {
              className: F.header,
              children: t.formatMessage(O.rdr2_credits_main_cast_title)
            }), Object.keys(s)?.map((e => (0, g.jsx)(o, {
              name: e,
              group: s[e]
            }, e)))]
          })
        },
        E = e => {
          let {
            orderedCredits: a,
            groupName: t
          } = e;
          return (0, g.jsxs)("div", {
            className: F.group,
            children: [(0, g.jsx)("h3", {
              children: t
            }), (0, g.jsx)("p", {
              children: a[t].map((e => (0, g.jsx)("span", {
                className: F["comma-span"],
                children: e.name
              }, e.name)))
            })]
          }, t)
        },
        T = e => {
          let {
            credits: a = [],
            title: t = "",
            groupBy: s = "",
            className: r
          } = e;
          const i = L(a, s);
          return i && (0, g.jsxs)("section", {
            "aria-label": t,
            role: "region",
            className: r,
            children: [(0, g.jsx)("h2", {
              children: t
            }), Object.keys(i)?.map((e => (0, g.jsx)(E, {
              groupName: e,
              orderedCredits: i
            }, e)))]
          })
        },
        A = e => {
          let {
            legacyCredits: a = [],
            title: t = ""
          } = e;
          return (0, g.jsx)("section", {
            "aria-label": t,
            role: "region",
            children: a?.map((e => (0, g.jsx)(M, {
              discipline: e?.disipline,
              department: e?.department
            }, e?.disipline)))
          })
        },
        M = e => {
          let {
            discipline: a = "",
            department: t = []
          } = e;
          const s = -1 !== ["Producing/Management", "Writing dept", "Producing/Management2 dept"].indexOf(a);
          return (0, g.jsxs)("div", {
            children: [!s && (0, g.jsx)("h1", {
              className: F.header,
              children: a
            }), (0, g.jsx)("div", {
              children: t.map((e => (0, g.jsx)(P, {
                department: e?.department,
                teamTitles: e?.team_titles
              }, e?.department)))
            })]
          })
        },
        G = e => {
          let {
            roleTitle: a = "",
            creditNames: t = []
          } = e;
          return (0, g.jsxs)("div", {
            className: (0, i.classList)(F["role-title-area"], F.flex),
            children: [(0, g.jsx)("h3", {
              className: (0, i.classList)(F.header, F.roleTitle),
              children: a
            }), (0, g.jsx)("div", {
              className: (0, i.classList)(F["credit-name-area"], F.flex),
              children: t.map(((e, a) => (0, g.jsx)("div", {
                className: (0, i.classList)(e?.class, F.flex, F.section),
                children: e?.credit?.map((a => (0, g.jsx)("p", {
                  className: (0, i.classList)(e?.font_size),
                  children: a.name
                }, a.name)))
              }, `credit_names_${a}`)))
            })]
          })
        },
        q = e => {
          let {
            teamTitle: a = "",
            roleTitles: t = []
          } = e;
          return (0, g.jsxs)("div", {
            className: (0, i.classList)(F["team-title-area"], F.flex),
            children: [(0, g.jsx)("h2", {
              className: F.header,
              children: a
            }), (0, g.jsx)("div", {
              children: t.map((e => (0, g.jsx)(G, {
                roleTitle: e?.role_title,
                creditNames: e?.credit_names
              }, e?.role_title)))
            })]
          })
        },
        P = e => {
          let {
            department: a = "",
            teamTitles: t = []
          } = e;
          return (0, g.jsxs)("div", {
            children: [(0, g.jsx)("h2", {
              className: F.header,
              children: a
            }), (0, g.jsx)("div", {
              children: t.map((e => (0, g.jsx)(q, {
                teamTitle: e?.team_title,
                roleTitles: e?.role_titles
              }, e?.team_title)))
            })]
          })
        };
      var I = t(782);
      const L = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const [t, r] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            if (e && e?.length > 0) {
              const t = R()(e, (e => e[a]));
              r(t)
            }
          }), [e]), t
        },
        V = () => {
          const e = (0, r.useIntl)(),
            {
              data: a,
              loading: t
            } = (0, i.useQuery)(I.credits);
          if (!a || t) return null;
          const {
            additional: s,
            cast: o,
            legacy: n,
            outlaws: d,
            outsource: c
          } = a;
          return (0, g.jsxs)("div", {
            className: F.creditsWrapper,
            "data-game": "rdr2",
            "data-testid": "rdr2-credits",
            children: [(0, g.jsx)("h1", {
              className: (0, i.classList)(F.header, F.main),
              children: "Credits"
            }), n && (0, g.jsx)(A, {
              legacyCredits: n,
              title: e.formatMessage(O.rdr2_legacy_credits_title)
            }), (0, g.jsxs)("div", {
              className: F["rolling-credits"],
              children: [c && (0, g.jsx)(T, {
                title: e.formatMessage(O.rdr2_credits_outsource_title),
                credits: c,
                groupBy: "role",
                className: (0, i.classList)(F.section, F.flex, F.outsource)
              }), o && (0, g.jsx)(C, {
                credits: o
              }), d && (0, g.jsx)(T, {
                title: e.formatMessage(O.rdr2_credits_outlaws_title),
                credits: d,
                groupBy: "gang",
                className: (0, i.classList)(F.section, F.flex, F.gangs)
              }), s && (0, g.jsx)(T, {
                title: e.formatMessage(O.rdr2_credits_additional_cast_title),
                credits: s,
                groupBy: "title",
                className: (0, i.classList)(F.section, F.flex, F.additional)
              })]
            })]
          })
        },
        $ = (0, r.defineMessages)({
          rdr2_download_label: {
            id: "rdr2_download_label",
            defaultMessage: "Download {name} image in {size} size."
          },
          rdr2_download_pixels_label: {
            id: "rdr2_download_pixels_label",
            defaultMessage: "Download {name} image of {size1} pixels by {size2} pixels."
          },
          rdr2_download_ios: {
            id: "rdr2_download_ios",
            defaultMessage: "Download Red Dead Redemption 2 Official Companion App on the App Store."
          },
          rdr2_download_android: {
            id: "rdr2_download_android",
            defaultMessage: "Get Red Dead Redemption 2 Official Companion App on Google Play."
          },
          rdr2_companion_app_paragraph_2: {
            id: "rdr2_companion_app_paragraph_2",
            defaultMessage: "The Companion app includes the full map. You can pan and zoom, set waypoints or mark areas of interest with a tap on your screen, aiding your exploration and discovery throughout the expansive world of Red Dead Redemption 2. Additionally, you can track Arthur Morgan's core info and stats in real-time on your device, allowing you to completely remove the in-game HUD from your television should you choose. The app also lets you examine Arthur's in-game Journal, provides stat tracking, contains the full digital game manual, plus an optional digital version of the Red Dead Redemption 2 Complete Official Guide from Piggyback and more."
          }
        });
      var U = t(94678);
      const H = {
          downloads: "rockstargames-sites-red-dead-redemption-2c3f7cb4c4ea2baab490fd945f6ec7227",
          grid: "rockstargames-sites-red-dead-redemption-2bfb7620d665adcc04194f3d8b33930b6",
          avatarGrid: "rockstargames-sites-red-dead-redemption-2e7a8720eaa3e46e272672e70017b086c",
          item: "rockstargames-sites-red-dead-redemption-2e5b4f30409a976db03106d4310c3ab78",
          itemOptions: "rockstargames-sites-red-dead-redemption-2ecf45ff00967a15d9620f28c32652e2e",
          descImg: "rockstargames-sites-red-dead-redemption-2a702d69c2562e1995de6a9095a1e5ed1"
        },
        W = e => {
          let {
            t: a,
            group: t
          } = e;
          const s = (0, r.useIntl)();
          return (0, g.jsxs)("div", {
            className: H.item,
            children: [(0, g.jsx)("div", {
              style: {
                aspectRatio: 16 / 9,
                background: `url(${t.preview}) no-repeat center/contain`
              },
              "aria-label": t.label
            }), (0, g.jsx)("div", {
              className: H.itemOptions,
              children: t.items.filter((e => {
                let {
                  label: a
                } = e;
                return !["thumb"].includes(a)
              })).map((e => {
                let {
                  label: r,
                  src: o
                } = e;
                return (0, g.jsx)(u, {
                  to: o,
                  onClick: i.downloadFile,
                  download: !0,
                  "aria-label": s.formatMessage($.rdr2_download_label, {
                    name: t.label,
                    size: a(r)
                  }),
                  children: a(r)
                }, `wallpaper_${t.label}_${r}`)
              }))
            })]
          })
        },
        B = e => {
          let {
            t: a,
            group: t
          } = e;
          const s = (0, r.useIntl)();
          return (0, g.jsxs)("div", {
            className: H.item,
            children: [(0, g.jsx)("div", {
              style: {
                aspectRatio: 1,
                background: `url(${t.preview}) no-repeat center/contain`
              },
              "aria-label": t.label
            }), (0, g.jsx)("div", {
              className: H.itemOptions,
              children: t.items.filter((e => {
                let {
                  label: a
                } = e;
                return !["thumb"].includes(a)
              })).map((e => {
                let {
                  label: r,
                  src: o
                } = e;
                const n = a(r).toLowerCase().split("x");
                return (0, g.jsx)(u, {
                  to: o,
                  onClick: i.downloadFile,
                  download: !0,
                  "aria-label": s.formatMessage($.rdr2_download_pixels_label, {
                    name: t.label,
                    size1: n[0],
                    size2: n[1]
                  }),
                  children: a(r)
                }, `avatar_${t.label}_${r}`)
              }))
            })]
          })
        },
        J = (0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            formatMessage: t
          } = (0, r.useIntl)(), {
            data: s
          } = (0, i.useQuery)(U.downloads);
          if (!s) return null;
          const o = s?.art?.series?.[0]?.groups ?? [],
            n = s?.avatars?.series?.[0]?.groups;
          return (0, g.jsxs)("div", {
            className: H.downloads,
            children: [(0, g.jsxs)("section", {
              children: [(0, g.jsx)("h2", {
                children: a("Artwork")
              }), (0, g.jsx)("div", {
                className: H.grid,
                children: o.map((e => (0, g.jsx)(W, {
                  t: a,
                  group: e
                }, e.label)))
              })]
            }), (0, g.jsxs)("section", {
              children: [(0, g.jsx)("h2", {
                children: a("Avatars")
              }), (0, g.jsx)("div", {
                className: [H.grid, H.avatarGrid].join(" "),
                children: n.map((e => (0, g.jsx)(B, {
                  t: a,
                  group: e
                }, e.label)))
              })]
            })]
          })
        }), "rdr2"),
        K = [{
          to: "",
          label: "Home",
          end: !0
        }, {
          to: "info",
          label: "Info"
        }, {
          to: "pc",
          label: "PC Release"
        }, {
          to: "videos",
          label: "Videos"
        }, {
          to: "screens",
          label: "Screens"
        }, {
          sub: !0,
          headerLabel: "Features",
          linkPrefix: "features/",
          links: [{
            to: "vanderlindegang",
            label: "The Van Der Linde Gang"
          }, {
            to: "frontiercitiesandtowns",
            label: "The Frontier, Cities & towns"
          }, {
            to: "wildlife",
            label: "Wildlife"
          }, {
            to: "weaponry",
            label: "Weaponry"
          }, {
            to: "music",
            label: "Music"
          }, {
            to: "socialclub",
            label: "Social Club"
          }]
        }, {
          to: "news",
          label: "News"
        }, {
          to: "../reddeadonline",
          label: "Red Dead Online",
          outbound: !0
        }, {
          to: "downloads",
          label: "Downloads"
        }, {
          to: "order",
          label: "Buy Now"
        }].find((e => {
          let {
            headerLabel: a
          } = e;
          return "Features" === a
        }))?.links?.map((e => {
          let {
            to: a
          } = e;
          return a
        })) ?? [],
        Q = () => {
          const {
            feature: e = ""
          } = (0, c.useParams)();
          return K.includes(e) ? e : (0, g.jsx)(S, {})
        },
        Y = (0, i.withTranslations)((e => {
          let {
            children: a,
            p: t,
            t: s,
            h1: r,
            h2: i
          } = e;
          const o = ["rockstargames-sites-red-dead-redemption-2cf8b7f4f3125e47e506ee1990189ba19"];
          return a || o.push("rockstargames-sites-red-dead-redemption-2d0c19136f1e50edf7950b684fc000432"), (0, g.jsxs)("div", {
            className: o.join(" "),
            children: [a, (0, g.jsxs)("div", {
              className: "rockstargames-sites-red-dead-redemption-2d35e52b4474996747ecdb0c309d74ef5",
              children: [(0, g.jsx)("h1", {
                children: s(r)
              }), (0, g.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s(t)
                }
              }), (0, g.jsx)("h2", {
                children: s(i)
              })]
            }), (0, g.jsx)("div", {
              className: "rockstargames-sites-red-dead-redemption-2d3da8a08722dba83ff131e587ea52471"
            })]
          })
        }), "rdr2"),
        Z = e => {
          let {
            children: a
          } = e;
          return (0, g.jsx)("div", {
            className: "rockstargames-sites-red-dead-redemption-2ca50e0753615639d58299fdc918cf681",
            children: a
          })
        },
        X = ["valentine", "annesburg", "saintdenis", "mounthagen", "rhodes", "strawberry", "lagras"];
      (0, i.importAll)(t(3429));
      const ee = (e, a) => t(42723)(`./${e}-${a}.jpg`),
        ae = e => {
          let {
            location: a,
            t: s
          } = e;
          return (0, g.jsxs)("div", {
            className: "rockstargames-sites-red-dead-redemption-2e723737d2cc8bfce3f280611e3929422",
            style: {
              "--img-postcard": `url(${t(80091)(`./${a}-postcard.jpg`)})`,
              "--img-logo": `url(${t(57220)(`./${a}-logo.png`)})`,
              "--img-map": `url(${t(61127)(`./${a}-map.jpg`)})`,
              "--sc-1-thumb": `url(${t(57860)(`./${a}-showcase-1.jpg`)})`,
              "--sc-2-thumb": `url(${t(12065)(`./${a}-showcase-2.jpg`)})`
            },
            children: [(0, g.jsx)("div", {
              className: "rockstargames-sites-red-dead-redemption-2c9cf3f819a41f1f47c33df86f4fc40b7"
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-red-dead-redemption-2f3aed8e51b6a8022442042b6c3a92231",
              children: [(0, g.jsx)("div", {
                className: "rockstargames-sites-red-dead-redemption-2ec2e7d873ed89660b97b433a5e7168d1"
              }), (0, g.jsx)("p", {
                children: s(`features-locations-${a}-desc`)
              })]
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-red-dead-redemption-2de3d85ed3993e6b0987402a98a401858",
              children: [(0, g.jsx)(u, {
                to: ee(a, "showcase-1-full"),
                onClick: i.downloadFile,
                "aria-label": `${a} 1`
              }), (0, g.jsx)(u, {
                to: ee(a, "showcase-2-full"),
                onClick: i.downloadFile,
                "aria-label": `${a} 2`
              })]
            })]
          })
        },
        te = (0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, g.jsxs)(Z, {
            children: [(0, g.jsx)(Y, {
              h1: "The Frontier, Cities & towns",
              p: "features-locations-frontier-blurb"
            }), (0, g.jsx)("div", {
              className: "rockstargames-sites-red-dead-redemption-2cda92db8d24673ab5ea9d66dfe7a0876",
              children: X.map((e => (0, g.jsx)(ae, {
                location: e,
                t: a
              }, e)))
            })]
          })
        }), "rdr2"),
        se = {
          albumSection: "rockstargames-sites-red-dead-redemption-2ab7ed3ff0fb21d911f16f8854c054977",
          albumArt: "rockstargames-sites-red-dead-redemption-2d63f31efe588557c0b0aafeb61653100",
          album: "rockstargames-sites-red-dead-redemption-2da1e7ec7946fbe31bec44486dca1a507",
          tracks: "rockstargames-sites-red-dead-redemption-2b90dd03a09ef0319be31c437915093e7",
          readable: "rockstargames-sites-red-dead-redemption-2c0f2fb917284ee7fa6b992c601d5eef4"
        };
      (0, i.importAll)(t(75689));
      const re = [{
          song: "Unshaken",
          artist: "D'Angelo"
        }, {
          song: "Moonlight",
          artist: "Daniel Lanois, Daryl Johnson, Joseph Maize, Darryl Hatcher and Rhiannon Giddens"
        }, {
          song: "That's The Way It Is",
          artist: "Daniel Lanois"
        }, {
          song: "Mountain Finale",
          artist: "Daniel Lanois"
        }, {
          song: "Crash of Worlds",
          artist: "Rocco DeLuca"
        }, {
          song: "Cruel World",
          artist: "xWillie Nelsonx"
        }, {
          song: "Red",
          artist: "Daniel Lanois"
        }, {
          song: "Mountain Hymn",
          artist: "Rhiannon Giddens"
        }, {
          song: "Mountain Banjo",
          artist: "Rhiannon Giddens"
        }, {
          song: "Table Top",
          artist: "Daniel Lanois"
        }, {
          song: "Love Come Back",
          artist: "Daniel Lanois"
        }, {
          song: "Oh My Lovely",
          artist: "Daniel Lanois"
        }, {
          song: "Cruel World",
          artist: "Josh Homme"
        }],
        ie = [{
          song: "By 1899, The Age Of Outlaws And Gunslingers Was At An End",
          artist: "xxx"
        }, {
          song: "Outlaws From The West",
          artist: "Woody Jackson"
        }, {
          song: "Blessed Are The Peacemakers",
          artist: "Woody Jackson"
        }, {
          song: "Mrs. Sadie Adler, Widow",
          artist: "Woody Jackson"
        }, {
          song: "Revenge Is A Dish Best Eaten",
          artist: "Mario Batkovic and Woody Jackson"
        }, {
          song: "It All Makes Sense Now",
          artist: "Woody Jackson"
        }, {
          song: "The Fine Art Of Conversation",
          artist: "Woody Jackson"
        }, {
          song: "Banking, The Old American Art",
          artist: "Michael Leonhart and Woody Jackson"
        }, {
          song: "There She Is… A Real City, The Future",
          artist: "Mario Batkovic"
        }, {
          song: "Everybody Wake Up",
          artist: "Woody Jackson"
        }, {
          song: "Welcome To The New World",
          artist: "Senyawa and Colin Stetson"
        }, {
          song: "Paradise Mercifully Departed",
          artist: "Senyawa, Colin Stetson and Woody Jackson"
        }, {
          song: "Doctor’s Opinion",
          artist: "Colin Stetson"
        }, {
          song: "Fleeting Joy",
          artist: "Colin Stetson and Woody Jackson"
        }, {
          song: "Icarus And Friends",
          artist: "Colin Stetson, David Ralicke and Jeff Silverman"
        }, {
          song: "Country Pursuits",
          artist: "Arca and Woody Jackson"
        }, {
          song: "An American Pastoral Scene",
          artist: "Woody Jackson"
        }, {
          song: "Blood Feuds, Ancient And Modern",
          artist: "Woody Jackson"
        }, {
          song: "Red Dead Redemption",
          artist: "Woody Jackson"
        }, {
          song: "The Wheel",
          artist: "Woody Jackson"
        }, {
          song: "American Venom",
          artist: "Woody Jackson"
        }, {
          song: "American Reprise",
          artist: "Woody Jackson"
        }],
        oe = e => {
          let {
            appleSrc: a,
            h2: s,
            p: r,
            slug: i,
            spotifySrc: o,
            t: n,
            tracks: d
          } = e;
          return (0, g.jsxs)("section", {
            className: se.albumSection,
            children: [(0, g.jsx)("h2", {
              children: n(s)
            }), (0, g.jsx)("span", {
              className: [se.albumDesc, se.readable].join(" "),
              dangerouslySetInnerHTML: {
                __html: n(r)
              }
            }), (0, g.jsxs)("div", {
              className: se.album,
              children: [(0, g.jsx)("div", {
                className: se.albumArt,
                style: {
                  background: `url(${t(27903)(`./${i}.jpg`)}) no-repeat center/contain`
                }
              }), (0, g.jsx)("div", {
                className: se.tracks,
                children: d.map(((e, a) => {
                  let {
                    artist: t,
                    song: s
                  } = e;
                  return (0, g.jsxs)("dl", {
                    children: [(0, g.jsx)("dt", {
                      children: s
                    }), (0, g.jsx)("dd", {
                      children: t
                    })]
                  }, a)
                }))
              })]
            }), (0, g.jsx)("iframe", {
              title: `${n(s)} Apple Music`,
              src: a,
              allowFullScreen: !0,
              allow: "autoplay *; encrypted-media *;",
              sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            }), (0, g.jsx)("iframe", {
              title: `${n(s)} Spotify`,
              src: o,
              allowFullScreen: !0,
              allow: "autoplay *; encrypted-media *;",
              sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            })]
          })
        },
        ne = (0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, g.jsxs)(Z, {
            children: [(0, g.jsx)(w, {}), (0, g.jsx)(oe, {
              h2: "soundtrack",
              p: "feature-soundtrack-desc",
              slug: "soundtrack",
              t: a,
              tracks: re,
              appleSrc: "https://embed.music.apple.com/us/album/the-music-of-red-dead-redemption-2-original-soundtrack/1466175399&app=itunes",
              spotifySrc: "https://open.spotify.com/embed/user/rockstargames/playlist/5I1D07dEhKG5nOPGoPj29g"
            }), (0, g.jsx)(oe, {
              h2: "original score album",
              p: "feature-soundtrack-original-desc",
              slug: "score",
              t: a,
              tracks: ie,
              appleSrc: "https://embed.music.apple.com/us/album/the-music-of-red-dead-redemption-2-original-score/1472300669&app=itunes",
              spotifySrc: "https://open.spotify.com/embed/playlist/2Xw3X8lSr3QEeCssa98TVI"
            }), (0, g.jsxs)("div", {
              className: se.readable,
              children: [(0, g.jsx)("h2", {
                children: a("feature-music-h1")
              }), (0, g.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: a("feature-music-desc")
                }
              })]
            })]
          })
        }), "rdr2");
      var de = t(16188),
        ce = t.n(de);
      const me = {
        featureItem: "rockstargames-sites-red-dead-redemption-2a62eddac038efad38d60f590427849b2"
      };
      (0, i.importAll)(t(68300));
      const le = e => {
          let {
            h3: a,
            imgAspect: s = "16/9",
            imgPath: r,
            p: i,
            t: o,
            toImgPath: n
          } = e;
          return (0, g.jsxs)("div", {
            className: me.featureItem,
            "data-toImgPath": n,
            children: [(0, g.jsx)("div", {
              className: me.img,
              style: {
                background: `url(${t(1419)(`./${r}`)}) no-repeat center/contain`,
                aspectRatio: s
              }
            }), a && (0, g.jsx)("h3", {
              children: o(a)
            }), i && (0, g.jsx)("p", {
              children: o(i)
            })]
          })
        },
        pe = (0, i.withTranslations)((e => {
          let {
            imgAspect: a = "16/9",
            imgPath: s,
            p: r,
            h3: o,
            t: n,
            toImgPath: d = null
          } = e;
          const c = (0, g.jsx)(le, {
            imgAspect: a,
            imgPath: s,
            p: r,
            t: n,
            h3: o
          });
          return d ? (0, g.jsx)(u, {
            to: t(1419)(`./${d}`),
            onClick: i.downloadFile,
            "aria-label": n(o) || n(r),
            children: c
          }) : c
        }), "rdr2"),
        ge = (0, i.withTranslations)((e => {
          let {
            children: a,
            t,
            title: s
          } = e;
          return (0, g.jsxs)("section", {
            className: "rockstargames-sites-red-dead-redemption-2d3fdc02ffc505b3ffc5534e2f2d18cac",
            children: [s && (0, g.jsx)("h2", {
              children: t(s)
            }), a]
          })
        }), "rdr2");
      var ue = t(88790);
      const _e = (0, i.withTranslations)((() => {
        const {
          data: e
        } = (0, i.useQuery)(ue.rdr2FeaturesItems);
        if (!e) return null;
        const a = ce().groupBy(e.rdr2FeaturesItems, "section");
        return (0, g.jsxs)(Z, {
          children: [(0, g.jsx)(Y, {
            p: "feature-sc-desc",
            children: (0, g.jsx)("div", {
              className: "rockstargames-sites-red-dead-redemption-2fadc9b747df102da765e105eef030aa5"
            })
          }), (0, g.jsx)(ge, {
            title: "feature-sc-h1_unlocks",
            children: a.unlocks?.map((e => (0, g.jsx)(pe, {
              h3: e.title,
              imgPath: `features-items/${e.id}.jpg`,
              p: e.description
            }, e.id)))
          }), (0, g.jsx)(Y, {
            p: "feature-sc-p_catalogue",
            h1: "feature-sc-h1_catalogue"
          }), (0, g.jsx)(ge, {
            children: a.catalogue?.map((e => (0, g.jsx)(pe, {
              h3: e.title,
              imgPath: `features-items/${e.id}.jpg`,
              p: e.description
            }, e.id)))
          }), (0, g.jsx)(Y, {
            p: "feature-sc-p_progress",
            h1: "feature-sc-h1_progress"
          }), (0, g.jsx)(ge, {
            children: a.progress?.map((e => (0, g.jsx)(pe, {
              h3: e.title,
              imgPath: `features-items/${e.id}.jpg`,
              p: e.description
            }, e.id)))
          }), (0, g.jsx)(Y, {
            p: "feature-sc-p_camera",
            h1: "feature-sc-h1_camera"
          }), (0, g.jsx)(ge, {
            children: a.cam?.map((e => (0, g.jsx)(pe, {
              h3: e.title,
              imgPath: `features-items/${e.id}.jpg`,
              p: e.description
            }, e.id)))
          })]
        })
      }), "rdr2");
      var fe = t(84063);
      (0, i.importAll)(t(41353));
      const be = e => {
        let {
          member: {
            description: a,
            name: s,
            name_slug: r,
            quotes: i
          }
        } = e;
        return (0, g.jsxs)("div", {
          className: "rockstargames-sites-red-dead-redemption-2a01c72210226d1b28e3b87916904fc61",
          style: {
            "--mobile": `url(${t(54379)(`./${r}-mobile.jpg`)})`,
            "--desktop": `url(${t(57498)(`./${r}.png`)})`
          },
          children: [(0, g.jsx)("h2", {
            children: s
          }), (0, g.jsx)("h3", {
            className: "rockstargames-sites-red-dead-redemption-2fb391750ee98e13562b920ca89cd622d",
            children: `"${i}"`
          }), (0, g.jsx)("footer", {
            className: "rockstargames-sites-red-dead-redemption-2d9a93066ee20652f5ef5268aa4ce2aa5",
            children: (0, g.jsx)("p", {
              children: a
            })
          })]
        })
      };
      (0, i.importAll)(t(12237)), (0, i.importAll)(t(10241));
      const ke = ["revolver", "face", "snow", "double"],
        he = ["shot", "mark", "vital", "fire"],
        je = ["bolt", "carbine", "cattleman", "shotgun"],
        ve = [1, 2, 3, 4, 5, 6, 7],
        xe = e => {
          let {
            slug: a,
            t: s
          } = e;
          return (0, g.jsxs)("div", {
            className: "rockstargames-sites-red-dead-redemption-2e9d94d8e504599d8bed6d535b4d1adf5",
            children: [(0, g.jsx)("video", {
              muted: !0,
              autoPlay: !0,
              loop: !0,
              src: t(26111)(`./${a}.mp4`)
            }), (0, g.jsx)("p", {
              children: s(`feature-videos-${a}-desc`)
            })]
          })
        },
        we = (0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, g.jsxs)(Z, {
            children: [(0, g.jsx)(Y, {
              h1: "Weaponry",
              p: "features-weaponry-desc"
            }), (0, g.jsx)("div", {
              className: "rockstargames-sites-red-dead-redemption-2d2bab84211fa51eba9bd8f41717cb81e",
              children: ve.map((e => (0, g.jsx)("img", {
                alt: `Weapon ${e}`,
                src: t(94037)(`./${e}.jpg`)
              }, e)))
            }), (0, g.jsx)(Y, {
              h1: "Weapon Choice & Customization",
              p: "features-weapon-choice-desc"
            }), (0, g.jsx)(ge, {
              children: ke.map((e => (0, g.jsx)(pe, {
                imgPath: `weapon-${e}.jpg`,
                p: `feature-weapon-${e}-desc`,
                t: a,
                toImgPath: `weapon-${e}-full.jpg`
              }, e)))
            }), (0, g.jsx)(Y, {
              h1: "Dead Eye",
              p: "features-dead-eye-desc"
            }), (0, g.jsx)(ge, {
              children: he.map((e => (0, g.jsx)(pe, {
                imgPath: `deadeye-${e}.jpg`,
                p: `feature-deadeye-${e}-desc`,
                t: a,
                toImgPath: `deadeye-${e}-full.jpg`
              }, e)))
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-red-dead-redemption-2f4f541905bc306fb6bfdca7a31f44d5a",
              children: [(0, g.jsx)("h3", {
                children: a("In Action")
              }), (0, g.jsx)("div", {
                className: "rockstargames-sites-red-dead-redemption-2d728d2a0a605bfd49d0669392b9aa3dc",
                children: je.map((e => (0, g.jsx)(xe, {
                  slug: e,
                  t: a
                }, e)))
              })]
            })]
          })
        }), "rdr2");
      var ze = t(51439);
      (0, i.importAll)(t(94914));
      const ye = (e, a) => `${t(23089)(`./${e}-full.jpg`)}?im=Resize=${a}`,
        Ne = e => {
          let {
            id: a
          } = e;
          return (0, g.jsx)(u, {
            className: "rockstargames-sites-red-dead-redemption-2fc189a70654df67f903d34c1fcdb3423",
            to: ye(a, "1920"),
            target: "_blank",
            style: {
              "--bg-img": `url(${ye(a,"350")})`
            }
          })
        },
        Se = e => {
          let {
            screens: a = []
          } = e;
          return (0, g.jsx)("div", {
            className: "rockstargames-sites-red-dead-redemption-2ce0bd9ce1fa6647a6b92c23b43560e7f",
            children: a.map((e => (0, g.jsx)(Ne, {
              id: e.id
            }, e.id)))
          })
        },
        De = ["coyote", "buck", "vulture", "eagle", "alligator", "walker", "bear", "sturgeon", "monster", "horse"],
        Re = ["butcher", "snow", "bow", "fishing"],
        Oe = ["walking", "stable", "swamp", "snow"],
        Fe = {
          FrontiersCitiesAndTowns: te,
          Music: ne,
          SocialClub: _e,
          VanderlindeGang: () => {
            const {
              data: e
            } = (0, i.useQuery)(fe.rdr2GangMembers);
            return e ? (0, g.jsxs)(Z, {
              children: [(0, g.jsx)(Y, {
                h1: "The Van Der Linde Gang",
                h2: "Outlaws For Life",
                p: "gang-blurb"
              }), (0, g.jsx)("div", {
                className: "rockstargames-sites-red-dead-redemption-2c16b17d7d830b2c49f95ba36ed832a04",
                children: e?.rdr2GangMembers?.map((e => (0, g.jsx)(be, {
                  member: e
                }, e.name_slug)))
              })]
            }) : null
          },
          Weaponry: we,
          Wildlife: (0, i.withTranslations)((e => {
            let {
              t: a
            } = e;
            const {
              data: t
            } = (0, i.useQuery)(ze.rdr2Screenshots);
            return t ? (0, g.jsxs)(Z, {
              children: [(0, g.jsx)(Y, {
                h1: "Wildlife",
                p: "features-wildlife-desc"
              }), (0, g.jsx)(ge, {
                children: De.map((e => (0, g.jsx)(pe, {
                  imgPath: `zoo-${e}.jpg`,
                  imgAspect: "1",
                  t: a
                }, e)))
              }), (0, g.jsx)(Y, {
                h1: "Hunting & Fishing",
                p: "features-hunting-desc"
              }), (0, g.jsx)(ge, {
                children: Re.map((e => (0, g.jsx)(pe, {
                  imgPath: `hunting-${e}.jpg`,
                  p: `feature-hunt-${e}-desc`,
                  t: a,
                  toImgPath: `hunting-${e}-full.jpg`
                }, e)))
              }), (0, g.jsx)(Y, {
                h1: "Horses",
                p: "features-horses-desc"
              }), (0, g.jsx)(ge, {
                children: Oe.map((e => (0, g.jsx)(pe, {
                  imgPath: `horses-${e}.jpg`,
                  p: `feature-horses-${e}-desc`,
                  t: a,
                  toImgPath: `horses-${e}-full.jpg`
                }, e)))
              }), (0, g.jsx)(Se, {
                screens: t?.rdr2Screenshots
              })]
            }) : null
          }), "rdr2")
        };
      var Ce = t(71856);
      (0, i.importAll)(t(25752));
      const Ee = e => {
          let {
            feature: {
              id: a,
              router_link: s,
              title: r,
              target: i
            }
          } = e;
          return (0, g.jsxs)(u, {
            className: "rockstargames-sites-red-dead-redemption-2ddfe088c7a0c684b60d08f4ec532c4ff",
            to: s,
            target: i,
            children: [(0, g.jsx)("div", {
              className: "rockstargames-sites-red-dead-redemption-2a08f7ac7eca4463288a478e9b345ebb1",
              children: (0, g.jsx)("img", {
                alt: r,
                src: t(1692)(`./${a}.jpg`)
              })
            }), (0, g.jsx)("h3", {
              children: r
            })]
          })
        },
        Te = (0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: s
          } = (0, i.useQuery)(Ce.rdr2Home), r = (0, i.useLocale)();
          return s ? (0, g.jsxs)("div", {
            children: [(0, g.jsx)("section", {
              className: "rockstargames-sites-red-dead-redemption-2df3e1bd6d77b39d3067d5d098d03cff2",
              children: (0, g.jsx)("img", {
                alt: "Red Dead Redemption 2 Hero",
                src: t(42192)(`./${r}.jpg`)
              })
            }), (0, g.jsx)("section", {
              className: "rockstargames-sites-red-dead-redemption-2bf96699adbb2d8f39242c31a50a6b3fb",
              children: (0, g.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: a("home-blurb")
                }
              })
            }), (0, g.jsx)("section", {
              className: "rockstargames-sites-red-dead-redemption-2c9555761665559db0a721882e42c4c08",
              children: s?.rdr2HomeFeatures?.map((e => (0, g.jsx)(Ee, {
                feature: e
              }, e.id)))
            }), (0, g.jsx)("section", {
              className: "rockstargames-sites-red-dead-redemption-2ba52be9d6be88f2792eb7551d6e241fb",
              children: (0, g.jsx)("h1", {
                children: a("Outlaws For Life")
              })
            })]
          }) : null
        }), "rdr2");
      (0, i.importAll)(t(47761));
      const Ae = (0, i.withTranslations)((e => {
        let {
          t: a
        } = e;
        const s = (0, i.useLocale)();
        return (0, g.jsxs)("div", {
          className: "rockstargames-sites-red-dead-redemption-2a8c7dabd9e9a889a6cfafa962dab998e",
          children: [(0, g.jsx)("img", {
            alt: "Red Dead Redemption 2 Box Art",
            src: t(61213)(`./poster-${s}.jpg`)
          }), (0, g.jsx)("div", {
            "data-testid": "rdr2Info",
            className: "rockstargames-sites-red-dead-redemption-2ffc8120825207491787e97b42c27e9de",
            dangerouslySetInnerHTML: {
              __html: a("info-text")
            }
          })]
        })
      }), "rdr2");
      var Me = t(33820);
      const Ge = {
          button: "rockstargames-sites-red-dead-redemption-2bc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-red-dead-redemption-2a3e6439dcaa4870840298d683db4831c"
        },
        qe = e => {
          let {
            className: a = "",
            children: t,
            context: s = "",
            to: r,
            onClick: i,
            target: o = "_self",
            ...n
          } = e;
          const d = [Ge.button, Ge[s], a].join(" ");
          return r ? (0, g.jsx)(u, {
            ...n,
            to: r,
            className: d,
            onClick: i,
            target: o,
            children: t
          }) : (0, g.jsx)("button", {
            ...n,
            type: "button",
            className: d,
            onClick: i,
            children: t
          })
        },
        Pe = {
          tag: "rockstargames-sites-red-dead-redemption-2b660bb706132d84852c02df01cc6ed5a"
        },
        Ie = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: r
          } = e;
          const i = (0, g.jsxs)("div", {
            style: r,
            className: [Pe.tag, a].join(" "),
            children: [(0, g.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, g.jsx)(u, {
            to: t,
            children: i
          }) : i
        },
        Le = {
          newswireBlock: "rockstargames-sites-red-dead-redemption-2b394b56c31488c36155ca82090c66e6f",
          info: "rockstargames-sites-red-dead-redemption-2ea1c51ae745531c2aeabbe3fcf603842",
          title: "rockstargames-sites-red-dead-redemption-2f1dfe59c3d981dbe132559620885ecea",
          newswireBlockNoSpecialOrder: "rockstargames-sites-red-dead-redemption-2c06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-sites-red-dead-redemption-2ca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-sites-red-dead-redemption-2b3d4a8cfcc371ae39ce6220d009c5954",
          top: "rockstargames-sites-red-dead-redemption-2eee9c5d3b714a61ac265369800a6d4e0",
          startAnimation: "rockstargames-sites-red-dead-redemption-2a56af3c95449fe8452485dfb6c89fc29"
        },
        Ve = e => {
          let {
            section: a = "",
            index: t,
            post: r,
            noSpecialOrder: o = !1,
            focused: d
          } = e;
          const {
            track: m
          } = (0, n.h)(), [l] = (0, c.useSearchParams)(), p = r.preview_images_parsed.newswire_block, _ = {
            default: 0 !== t || o ? p.square || p.d16x9 || p._fallback : p.d16x9 || p.square || p._fallback,
            mobile: p.square || p._fallback
          }, [f, b] = (0, i.usePreloadImg)(_.default), k = {
            default: {
              backgroundImage: `url(${_.default})`
            },
            mobile: {
              backgroundImage: `url(${_.mobile})`
            }
          }, h = (0, s.useCallback)((() => {
            m({
              event: "card_click",
              card_id: r.id,
              card_name: r.name_slug.replace(/-/g, " "),
              link_url: r.url,
              position: t,
              element_placement: a?.toLowerCase()
            })
          }), [r]);
          return (0, g.jsx)(u, {
            to: r.url,
            className: [Le.newswireBlock, o ? Le.newswireBlockNoSpecialOrder : "", null !== f ? Le.startAnimation : ""].join(" "),
            focused: d,
            onClick: h,
            children: (0, g.jsxs)(g.Fragment, {
              children: [0 !== t || l.get("tag_id") ? (0, g.jsx)("div", {
                className: Le.preview,
                style: k.default
              }) : (0, g.jsxs)(g.Fragment, {
                children: [(0, g.jsx)("div", {
                  className: Le.previewMobile,
                  style: k.mobile
                }), (0, g.jsx)("div", {
                  className: Le.preview,
                  style: k.default
                })]
              }), (0, g.jsxs)("div", {
                className: Le.info,
                children: [(0, g.jsxs)("div", {
                  className: Le.top,
                  children: [r.primary_tags.length ? (0, g.jsx)(Ie, {
                    title: r.primary_tags[r.primary_tags.length > 1 && 722 === r.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, g.jsx)("time", {
                    dateTime: r.created,
                    children: r.created_formatted
                  })]
                }), (0, g.jsx)("h5", {
                  className: Le.title,
                  dangerouslySetInnerHTML: {
                    __html: r.title
                  }
                })]
              })]
            })
          })
        },
        $e = {
          pillBtn: "rockstargames-sites-red-dead-redemption-2f2d003dd0e6a129a56ea07208548787c",
          selected: "rockstargames-sites-red-dead-redemption-2f94728c4a438800b9abab11a8b3e3c0a",
          related: "rockstargames-sites-red-dead-redemption-2b8a63bb419c1f2a8f94e099e1e650e48",
          posts: "rockstargames-sites-red-dead-redemption-2cfe09d4dc8447b1e606404300d040e7a",
          just1post: "rockstargames-sites-red-dead-redemption-2d46374473ed68a4121f88b44eba06359"
        },
        Ue = ((0, i.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, g.jsxs)("section", {
            className: $e.related,
            children: [(0, g.jsx)("h2", {
              children: t("Related Stories")
            }), (0, g.jsx)("div", {
              className: [$e.posts, 1 === a.length ? $e.just1post : ""].join(" "),
              children: a.map((e => (0, g.jsx)(Ve, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })), {
          newswireBlocks: "rockstargames-sites-red-dead-redemption-2ea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-red-dead-redemption-2d301334a72b626f8cc2f5b9733299e76"
        }),
        He = (0, i.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: r,
            gtmTrack: i,
            relativeTo: o
          } = e;
          const [n, d] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            if (!r.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            r.map(((t, s) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: a
              })
            })), i(e), d(r.length)
          }), [r.length]), (0, g.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Ue.newswireBlocks, t ? Ue.noSpecialOrder : "", Ue.contextHome].join(" "),
            children: r.map(((e, s) => (0, g.jsx)(Ve, {
              section: a,
              index: s,
              noSpecialOrder: t,
              post: e,
              focused: s === n
            }, e.id)))
          })
        }));
      var We = t(46368),
        Be = t.n(We);
      const Je = (0, i.withTranslations)((e => {
          let {
            section: a = "",
            relativeTo: t = "",
            tagId: r = null,
            metaUrl: o = "/newswire",
            t: d
          } = e;
          const m = (0, i.useLocale)(),
            {
              track: l
            } = (0, n.h)(),
            [p, u] = (0, c.useSearchParams)(),
            {
              tagId: _ = null
            } = (0, c.useParams)(),
            [f, b] = (0, s.useState)(_ ?? r ?? p.get("tag_id")),
            [k, h] = (0, s.useState)(1),
            [j, v] = (0, s.useState)(20),
            [x, w] = (0, s.useState)([]),
            [z, y] = (0, s.useState)(null),
            [N, {
              loading: S,
              data: D
            }] = (0, Me._l)(Be(), {
              variables: {
                tagId: Number(f),
                page: k,
                metaUrl: o,
                limit: j,
                locale: m
              }
            });
          return (0, s.useEffect)((() => {
            h(1), w([]), v(20), b(_ ?? r ?? p.get("tag_id")), N()
          }), [p.get("tag_id"), _, r]), (0, s.useEffect)((() => {
            const e = x;
            D?.posts?.paging && y(D?.posts?.paging), D?.posts?.results && w(e.concat(D?.posts?.results))
          }), [D]), (0, s.useEffect)((() => {
            (() => {
              const e = p.get("page"),
                a = Number(e ?? 1);
              v(20 * a), N()
            })()
          }), []), x.length ? (0, g.jsxs)("div", {
            "data-testid": "newswire-list",
            children: [(0, g.jsx)(He, {
              section: a,
              posts: x,
              relativeTo: t,
              noSpecialOrder: null !== f
            }), null !== z && z.nextPage ? (0, g.jsx)(qe, {
              className: "rockstargames-sites-red-dead-redemption-2e125d510192feb4ce2844cb97084b838",
              "data-testid": "more-stories",
              onClick: e => {
                const a = p.get("page"),
                  t = Number(a ?? k) + 1;
                h(t), 20 !== j && v(20), N(), u({
                  page: String(t)
                }, {
                  replace: !0
                }), l({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: S,
              context: "secondary",
              children: d("More Stories")
            }) : ""]
          }) : null
        })),
        Ke = () => (0, g.jsx)("div", {
          className: "rockstargames-sites-red-dead-redemption-2e5e35f1e5bad05ce4a6664a62a5bef9b",
          children: (0, g.jsx)(Je, {
            tagId: 716,
            metaUrl: "/reddeadredemption2/newswire"
          })
        }),
        Qe = (0, r.defineMessages)({
          rdr2_pc_missions4_list_title: {
            id: "rdr2_pc_missions4_list_title",
            defaultMessage: "5 New <span>Trinkets</span> to collect with new effects:"
          },
          rdr2_pc_missions4_list_item1: {
            id: "rdr2_pc_missions4_list_item1",
            defaultMessage: "<span>Hawk Talon</span> – permanently decreases Stamina bar drain speed by 30% when drawing a bow"
          },
          rdr2_pc_missions4_list_item2: {
            id: "rdr2_pc_missions4_list_item2",
            defaultMessage: "<span>Cat Eye</span> – permanently increases the length of Fortifying tonic effects by 20%"
          },
          rdr2_pc_missions4_list_item3: {
            id: "rdr2_pc_missions4_list_item3",
            defaultMessage: "<span>Shark Tooth</span> – permanently increases horse bonding experience bonus by 10%"
          },
          rdr2_pc_missions4_list_item4: {
            id: "rdr2_pc_missions4_list_item4",
            defaultMessage: "<span>Turtle Shell</span> – permanently increases health bar refill speed by 10%"
          },
          rdr2_pc_missions4_list_item5: {
            id: "rdr2_pc_missions4_list_item5",
            defaultMessage: "<span>Crow Beak</span> – permanently increases looted ammo by 10%"
          },
          rdr2_pc_missions4_new_mission: {
            id: "rdr2_pc_missions4_new_mission",
            defaultMessage: '<span>New mission "To The Ends of The Earth"</span> – collect requested herbs for a range of rewards'
          },
          rdr2_pc_missions4_bonus_first_half: {
            id: "rdr2_pc_missions4_bonus_first_half",
            defaultMessage: "Plus, Red Dead Redemption 2 for PC includes a new Photo Mode, with an assortment of tools to unlock the beauty of the frontier in Story Mode. Capture images with free form camera movement and add Filters, Stickers or Text then"
          },
          rdr2_pc_missions4_bonus_upload_message: {
            id: "rdr2_pc_missions4_bonus_upload_message",
            defaultMessage: "upload them"
          },
          rdr2_pc_missions4_bonus_second_half: {
            id: "rdr2_pc_missions4_bonus_second_half",
            defaultMessage: "to share with the community."
          }
        });
      var Ye = t(31879),
        Ze = t.n(Ye);
      const Xe = {
        pc: "rockstargames-sites-red-dead-redemption-2dbf0670580dfb688ab859611ba720791",
        trailer: "rockstargames-sites-red-dead-redemption-2ec975ef1a4b545a408fd08c76243438b",
        desc: "rockstargames-sites-red-dead-redemption-2f55ebf69e0eda488e532b860c4531ab7",
        screen: "rockstargames-sites-red-dead-redemption-2c13265b1e31cafb853b997fd43480113",
        screenFull: "rockstargames-sites-red-dead-redemption-2f601cd27e88069ef81cda7180abaafab",
        screenCaption: "rockstargames-sites-red-dead-redemption-2dda87127480d7a45778d42ff8cdc6907",
        screenImg: "rockstargames-sites-red-dead-redemption-2b5bd483ebf811e8c9bb0eb94f95a3c7e",
        content: "rockstargames-sites-red-dead-redemption-2a63e4732dd54c8274eaa0a824e4f45cd",
        allCols: "rockstargames-sites-red-dead-redemption-2f43589576536ca5a4427e64d7f7690ab",
        leftAlign: "rockstargames-sites-red-dead-redemption-2a1b0d40e9660ccdf9625886576773883",
        specsCols: "rockstargames-sites-red-dead-redemption-2d5c335c3e90a72562e0a1c2efa8d2447"
      };
      (0, i.importAll)(t(71742));
      const ea = e => {
          let {
            caption: a = null,
            className: s,
            id: r
          } = e;
          return (0, g.jsxs)("div", {
            className: [Xe.screen, s].join(" "),
            children: [(0, g.jsx)("div", {
              className: Xe.screenImg,
              style: {
                "--bg-img": `url(${t(35924)(`./${r}.jpg`)})`
              }
            }), (0, g.jsx)("p", {
              className: Xe.screenCaption,
              children: a
            })]
          })
        },
        aa = (0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            formatMessage: t
          } = (0, r.useIntl)(), {
            host: s
          } = (0, i.getConfigForDomain)();
          return (0, g.jsxs)("div", {
            className: Xe.pc,
            children: [(0, g.jsx)("section", {
              className: Xe.trailer,
              children: (0, g.jsx)(Ze(), {
                id: "12133"
              })
            }), (0, g.jsxs)("section", {
              className: Xe.desc,
              children: [(0, g.jsx)("h1", {
                children: a("pc-release-date")
              }), (0, g.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: a("pc-purchase-desc")
                }
              })]
            }), (0, g.jsxs)("section", {
              className: Xe.content,
              children: [(0, g.jsx)(ea, {
                id: 1
              }), (0, g.jsx)(ea, {
                id: 2
              }), (0, g.jsxs)("div", {
                className: Xe.allCols,
                children: [(0, g.jsx)("h2", {
                  children: a("pc-new-features")
                }), (0, g.jsx)("p", {
                  children: a("pc-new-feature-desc")
                })]
              }), (0, g.jsx)(ea, {
                id: 3,
                caption: a("pc-screen-desc-1")
              }), (0, g.jsx)(ea, {
                id: 4,
                caption: a("pc-screen-desc-2")
              }), (0, g.jsx)(ea, {
                id: 5,
                className: Xe.screenFull
              }), (0, g.jsx)("div", {
                className: Xe.allCols,
                children: (0, g.jsx)("p", {
                  children: a("pc-tech-desc")
                })
              }), (0, g.jsxs)("div", {
                className: Xe.allCols,
                children: [(0, g.jsx)("div", {
                  className: Xe.leftAlign,
                  dangerouslySetInnerHTML: {
                    __html: a("pc-missions-1")
                  }
                }), (0, g.jsx)("div", {
                  className: Xe.leftAlign,
                  dangerouslySetInnerHTML: {
                    __html: a("pc-missions-2")
                  }
                }), (0, g.jsx)(ea, {
                  id: 6,
                  className: Xe.screenFull
                }), (0, g.jsx)("div", {
                  className: Xe.leftAlign,
                  dangerouslySetInnerHTML: {
                    __html: a("pc-treasure-map")
                  }
                }), (0, g.jsx)("div", {
                  className: Xe.leftAlign,
                  dangerouslySetInnerHTML: {
                    __html: a("pc-missions-3")
                  }
                }), (0, g.jsx)(ea, {
                  id: 7,
                  className: Xe.screenFull
                }), (0, g.jsxs)("div", {
                  className: Xe.leftAlign,
                  children: [(0, g.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: t(Qe.rdr2_pc_missions4_list_title)
                    }
                  }), (0, g.jsxs)("ul", {
                    children: [(0, g.jsx)("li", {
                      dangerouslySetInnerHTML: {
                        __html: t(Qe.rdr2_pc_missions4_list_item1)
                      }
                    }), (0, g.jsx)("li", {
                      dangerouslySetInnerHTML: {
                        __html: t(Qe.rdr2_pc_missions4_list_item2)
                      }
                    }), (0, g.jsx)("li", {
                      dangerouslySetInnerHTML: {
                        __html: t(Qe.rdr2_pc_missions4_list_item3)
                      }
                    }), (0, g.jsx)("li", {
                      dangerouslySetInnerHTML: {
                        __html: t(Qe.rdr2_pc_missions4_list_item4)
                      }
                    }), (0, g.jsx)("li", {
                      dangerouslySetInnerHTML: {
                        __html: t(Qe.rdr2_pc_missions4_list_item5)
                      }
                    })]
                  }), (0, g.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: t(Qe.rdr2_pc_missions4_new_mission)
                    }
                  }), (0, g.jsxs)("p", {
                    children: [t(Qe.rdr2_pc_missions4_bonus_first_half), " ", (0, g.jsx)("a", {
                      href: `https://${s}.rockstargames.com/photos/?dateRange=any&platform=pc&sort=likes&title=rdr2`,
                      target: "_blank",
                      rel: "noopener",
                      children: t(Qe.rdr2_pc_missions4_bonus_upload_message)
                    }), " ", t(Qe.rdr2_pc_missions4_bonus_second_half)]
                  })]
                })]
              }), (0, g.jsxs)("div", {
                className: Xe.allCols,
                children: [(0, g.jsx)("h2", {
                  children: a("Red Dead Online")
                }), (0, g.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: a("pc-red-dead-online-desc")
                  }
                })]
              }), (0, g.jsxs)("div", {
                className: Xe.allCols,
                children: [(0, g.jsx)("h2", {
                  children: a("pc-additional-info")
                }), (0, g.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: a("pc-additional-info-desc")
                  }
                })]
              }), (0, g.jsxs)("div", {
                className: [Xe.allCols, Xe.specs].join(" "),
                children: [(0, g.jsx)("h2", {
                  children: a("pc-specs")
                }), (0, g.jsx)("p", {
                  className: Xe.allCols,
                  dangerouslySetInnerHTML: {
                    __html: a("pc-specs-desc-1")
                  }
                }), (0, g.jsxs)("div", {
                  className: Xe.specsCols,
                  children: [(0, g.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: a("pc-min-specs")
                    }
                  }), (0, g.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: a("pc-rec-specs")
                    }
                  }), (0, g.jsx)("ul", {
                    dangerouslySetInnerHTML: {
                      __html: a("pc-min-specs-list")
                    }
                  }), (0, g.jsx)("ul", {
                    dangerouslySetInnerHTML: {
                      __html: a("pc-rec-specs-list")
                    }
                  })]
                })]
              })]
            })]
          })
        }), "rdr2");
      var ta = t(30042);
      const sa = () => {
        const {
          data: e
        } = (0, i.useQuery)(ta.rdr2Screenshots);
        return e ? (0, g.jsx)(Se, {
          screens: e?.rdr2Screenshots
        }) : null
      };
      var ra = t(66802);
      const ia = {
          videos: "rockstargames-sites-red-dead-redemption-2b90fe8665328ccab730b1fbd965279ae",
          currentVideo: "rockstargames-sites-red-dead-redemption-2f500a7943cd5368d1594ca76b844e785",
          currentVideoInfo: "rockstargames-sites-red-dead-redemption-2a2968fcc68d483f21b29cde750a1bc9c",
          video: "rockstargames-sites-red-dead-redemption-2dd44b1f9a2d33dd7b1f3fbfacd3947d9",
          activeVideo: "rockstargames-sites-red-dead-redemption-2c02e68b9da56ffcbf3774b5cc397b453",
          screencap: "rockstargames-sites-red-dead-redemption-2a9b8aafd3239827934a1ce6329d536ab",
          screencaps: "rockstargames-sites-red-dead-redemption-2f98bad72286eb975f9f15759487a7aa0"
        },
        oa = (e, a) => `${e}?im=Resize=${a}`,
        na = e => {
          let {
            currentVideoId: a,
            video: {
              id: t,
              screencap: s,
              title: r
            }
          } = e;
          return (0, g.jsxs)(u, {
            className: [ia.video, a === t ? ia.activeVideo : ""].join(" "),
            to: `?id=${t}`,
            children: [(0, g.jsx)("div", {
              className: ia.screencap,
              style: {
                "--bg-img": `url(${oa(s,640)})`
              }
            }), (0, g.jsx)("h3", {
              children: r
            })]
          })
        },
        da = () => {
          const [e, a] = (0, c.useSearchParams)(), {
            data: t
          } = (0, i.useQuery)(ra.videos), {
            refetch: r
          } = (0, i.useQuery)(ra.video, {
            skip: !0
          }), [o, n] = (0, s.useState)(null), [d, m] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const a = e.get("id") ?? t?.videos?.results?.[0]?.id ?? null;
            a && n(a)
          }), [t, e.get("id")]), (0, s.useEffect)((() => {
            o && (window.scrollTo(0, 0), (async () => {
              m(null);
              const e = await r({
                id: o
              });
              m(e?.data?.video)
            })())
          }), [o]), t && d ? (0, g.jsxs)("div", {
            className: ia.videos,
            children: [(0, g.jsxs)("section", {
              className: ia.currentVideo,
              children: [(0, g.jsx)(Ze(), {
                autoplay: !0,
                videoChangeCallback: e => {
                  a({
                    id: e
                  })
                },
                id: e.get("id") ?? t?.videos?.results?.[0]?.id,
                resolution: "1080p"
              }), (0, g.jsxs)("div", {
                className: ia.currentVideoInfo,
                children: [(0, g.jsx)("h3", {
                  children: d.title
                }), (0, g.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: d.description
                  }
                })]
              })]
            }), (0, g.jsx)("section", {
              className: ia.screencaps,
              children: t?.videos?.results?.map((e => (0, g.jsx)("div", {
                children: (0, g.jsx)(na, {
                  currentVideoId: d.id,
                  video: e
                })
              }, e.id)))
            })]
          }) : null
        },
        ca = [{
          path: "",
          element: (0, g.jsx)(Te, {})
        }, {
          path: "credits",
          element: (0, g.jsx)(V, {})
        }, {
          path: "downloads",
          element: (0, g.jsx)(J, {})
        }, {
          path: "info",
          element: (0, g.jsx)(Ae, {})
        }, {
          path: "features/vanderlindegang",
          element: (0, g.jsx)(Fe.VanderlindeGang, {})
        }, {
          path: "features/frontiercitiesandtowns",
          element: (0, g.jsx)(Fe.FrontiersCitiesAndTowns, {})
        }, {
          path: "features/music",
          element: (0, g.jsx)(Fe.Music, {})
        }, {
          path: "features/socialclub",
          element: (0, g.jsx)(Fe.SocialClub, {})
        }, {
          path: "features/weaponry",
          element: (0, g.jsx)(Fe.Weaponry, {})
        }, {
          path: "features/wildlife",
          element: (0, g.jsx)(Fe.Wildlife, {})
        }, {
          path: "features/:feature",
          element: (0, g.jsx)(Q, {})
        }, {
          path: "news",
          element: (0, g.jsx)(Ke, {})
        }, {
          path: "pc",
          element: (0, g.jsx)(aa, {})
        }, {
          path: "screens",
          element: (0, g.jsx)(sa, {})
        }, {
          path: "videos",
          element: (0, g.jsx)(da, {})
        }, {
          path: "*",
          element: (0, g.jsx)(S, {
            error: {
              code: window?.env?.responseStatusCode ?? 398
            }
          })
        }],
        ma = f((() => (0, c.useRoutes)(ca))),
        la = {
          gameSite: "rockstargames-sites-red-dead-redemption-2bb2305035c94d96f3ca9d1ae0a2a879b",
          large: "rockstargames-sites-red-dead-redemption-2dac8786070c0eab72c8c85be2e428e37",
          gameSiteContent: "rockstargames-sites-red-dead-redemption-2d5c29f4bcf686e03d896bfd0fda057ff",
          navOpen: "rockstargames-sites-red-dead-redemption-2d3591d704902be0ca8ebb27b73f95d6c",
          footer: "rockstargames-sites-red-dead-redemption-2dda97e7202baf3e0c8e6afd2f9c65cf3",
          rating: "rockstargames-sites-red-dead-redemption-2bbe816dd407872cd0a6efd1c12b5fec3",
          date: "rockstargames-sites-red-dead-redemption-2e0b767d9e075303f96b30691d298ee69"
        },
        pa = (0, r.withIntl)((0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            gameSiteNavOpen: t
          } = (0, i.useState)();
          return (0, g.jsx)(v.AgeGate, {
            options: {
              header: (0, g.jsx)(z, {}),
              style: {
                gridGap: "1rem"
              }
            },
            children: (0, g.jsxs)("div", {
              className: la.gameSite,
              children: [(0, g.jsx)("div", {
                className: [la.gameSiteContent, t ? la.navOpen : ""].join(" "),
                children: (0, g.jsx)(ma, {})
              }), (0, g.jsxs)("footer", {
                className: [la.footer, t ? la.navOpen : ""].join(" "),
                children: [(0, g.jsx)("div", {
                  className: la.date,
                  children: a("date")
                }), (0, g.jsx)("div", {
                  className: la.rating,
                  children: (0, g.jsx)(j, {
                    titleSlug: "reddeadredemption2"
                  })
                })]
              })]
            })
          })
        }), "rdr2"), x)
    },
    75675: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85af892a566b5f57be15f33336858aeb.jpg"
    },
    75689: (e, a, t) => {
      var s = {
        "./score.jpg": 37501,
        "./soundtrack.jpg": 42001
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 75689
    },
    76310: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6791920cd2edde5d5c94a27fdecdb53.jpg"
    },
    76517: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9b8125531b890d308252b2c29fc95933.jpg"
    },
    77228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/233dce29d7d01cf3c271be4c4ca8c918.jpg"
    },
    77347: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a037d8d1a65cf114118443c083aef8e4.jpg"
    },
    77394: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2cced39fd0a358607ed093c2a735d53b.jpg"
    },
    77404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    77841: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c519f3e77a870b95e5dfeb1d3aee559f.jpg"
    },
    77935: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a5a2e3aadd26a3dea22e1e84f67d876.jpg"
    },
    77992: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27d5f32c7b78baf4c9cf72de82164ca5.jpg"
    },
    78116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e43b7d1c92cf7a56c5c3eb574e34b32.jpg"
    },
    78238: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/43c36051e6efa43d5c45c19c83c5b17f.jpg"
    },
    78400: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/17cd4973f658ffc47ae6578b4a49dc07.jpg"
    },
    78929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b7e0e486ffb9f8b7c37794440ed0fcc2.jpg"
    },
    79002: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81f6ccef54ebee314a43d766cac3612e.png"
    },
    79284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d18c432a00cf2fd3c81951e04c4b53a.jpg"
    },
    79300: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f934646731dfa191ded67f33400e659a.jpg"
    },
    79422: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b3c97e06be83e73ae0db2e549749746.jpg"
    },
    79449: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4d55662ec489b9607723bd778e384e2b.jpg"
    },
    79724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/412c4e81bfb9766775423d6ef4d344c9.jpg"
    },
    79797: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aec0bd88f18c8968bc6446f0cddb46c5.jpg"
    },
    79826: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61452e793e40c6845921a45f62bdf8e0.jpg"
    },
    80091: (e, a, t) => {
      var s = {
        "./annesburg-postcard.jpg": 6636,
        "./lagras-postcard.jpg": 63253,
        "./mounthagen-postcard.jpg": 74647,
        "./rhodes-postcard.jpg": 31946,
        "./saintdenis-postcard.jpg": 97851,
        "./strawberry-postcard.jpg": 99334,
        "./valentine-postcard.jpg": 41687
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 80091
    },
    80540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e3b2653196da999eebfd500edb5bdc0f.jpg"
    },
    80584: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/12e34df490a309cc6456ae0548e2fb8e.jpg"
    },
    81174: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6f788c55c1f81b5bd71f4ec72c24477b.jpg"
    },
    81417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e3683f0c92953fec2d895285c6a86ae.jpg"
    },
    81708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76a2d2d07805fbbf9b561322ad0c150e.jpg"
    },
    81864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    82229: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f6da5d161e552d23544b2189504e6492.png"
    },
    82424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    82447: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80fd28e4d8f2ecf3baeba2eecd78429b.jpg"
    },
    82464: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9811fda0316824e726045557e880bc13.png"
    },
    83446: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c5d8b1ca97be9418fd6bb266a8e8c7dd.png"
    },
    83555: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a7fcb67c66ab87653cde469bd08c53b2.jpg"
    },
    83752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c842c476da09cdf45dd181cdf23f0f6.jpg"
    },
    83894: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5605d7f50243b6c8ed113cf9e1e866ea.png"
    },
    84063: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "rdr2GangMembers"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "rdr2GangMembers"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "quotes"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 120
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query rdr2GangMembers {\n    rdr2GangMembers {\n        name\n        name_slug\n        quotes\n        description\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.rdr2GangMembers = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var d = n;
          n = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "rdr2GangMembers")
    },
    84406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    84428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/377f48b68a7264f2960cfc3ca7119991.jpg"
    },
    84596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/08a32c60b25a93e8a2f96672737eeeda.jpg"
    },
    85120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a5f10e6551f8214688a9600f50e5ad65.jpg"
    },
    85184: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5307a5a90675ec22af0fac2a0ada2502.jpg"
    },
    85287: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/be9b71fecb05d2be5e9a3fbbddded6b7.jpg"
    },
    85331: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/728bca75617f9e5fa8a8e9814dd92187.png"
    },
    85516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/563251c9dd76c9fd797cc90132ede9b8.jpg"
    },
    85563: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3aabf75ecfe779a47f65d0e10279295e.jpg"
    },
    85946: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/da7f259c48d85a0bf708ec19754296e1.jpg"
    },
    86045: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/457cd4aa2a6da684a505cad36b33fad4.jpg"
    },
    86272: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1f08849227250c8360bb5605cf5bce8f.jpg"
    },
    86492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a0aa42665237ea2abf80c43c40dd5e52.jpg"
    },
    86595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    86856: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f80f8d8207c947917ee93cf070ebdbe.jpg"
    },
    86929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    86958: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/54261e11a8ee5099b6c9254897d2f9c6.jpg"
    },
    86989: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1285162d614a7112fd397e3ee91aad10.jpg"
    },
    87094: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd7c1974434fb9f60bddc40815151e8c.png"
    },
    87154: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6dda2516e8412b09bffe200f1d0137e7.jpg"
    },
    87256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    87288: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/28f201549bc864c78b564eff3ab8d38f.jpg"
    },
    87404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd83bfee0ce54e08ca834f275289f11d.jpg"
    },
    87464: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5373e26cc47f24df9fe6c948833bafbf.jpg"
    },
    87707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    87717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4dd255f29bcafbd79ee7a844a53f5866.jpg"
    },
    87994: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ea841961d0ea1d15e72ea6f7579a5638.jpg"
    },
    88272: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6ad6fb002781b1cfc9faae73dde35213.jpg"
    },
    88763: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7abc917d6fa69155c1ddafde695ce93f.jpg"
    },
    88764: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/60ce8b5e10a4c8f17052caf4661bde1c.jpg"
    },
    88777: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2aba591a4b54acce02c43c07deaeb739.jpg"
    },
    88790: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "rdr2FeaturesItems"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "rdr2FeaturesItems"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "scope"
                },
                value: {
                  kind: "StringValue",
                  value: "socialclub",
                  block: !1
                }
              }],
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
                    value: "section"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 140
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query rdr2FeaturesItems {\n    rdr2FeaturesItems(scope: "socialclub") {\n        title\n        id\n        section\n        description\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.rdr2FeaturesItems = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var d = n;
          n = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "rdr2FeaturesItems")
    },
    88888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9e7b467ae9a8428dddd38300d1eac25a.jpg"
    },
    89010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d368516c7bcaea976bacbf25c51b4f.jpg"
    },
    89069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    89235: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    89303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    89305: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eb513bc9d085225f8795a1bbb6e49a17.png"
    },
    89382: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e1ced91d1f83c5f16c3de0951fe4706c.jpg"
    },
    89394: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05733b4621e4d2512e3bd63d7d385567.jpg"
    },
    89738: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8cd7066eae661dc5fe910bfa38953b3d.jpg"
    },
    89812: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bd44d40a04d3318b1c6775313df12745.jpg"
    },
    89835: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/09fe6ddcc9cfd2593ad5c8c5f9e55ba4.png"
    },
    89836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    89880: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/719597d0bd5298b0278feee9145b22f7.jpg"
    },
    90046: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/99f98c7d86c690e9525a25129a803801.jpg"
    },
    90056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e4384de1534195ce6cdcf807e548bdb0.jpg"
    },
    90117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e438826cc901558ba0fb8a2eb3d936b.jpg"
    },
    90566: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9b90920aa777d801c3139bfc686d2c48.jpg"
    },
    90717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    91026: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/adddc75db9691bc82a2bc0f4c8e2b4fd.jpg"
    },
    91033: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eaa82ee5327576ce057480672443029b.jpg"
    },
    91520: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ea964dfb82bd8efdadaea08491879a89.jpg"
    },
    92e3: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/82c88dee128a9d44cdf7189287ae5463.jpg"
    },
    92438: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/12a8f0e040061cb9951c98385bceebdd.jpg"
    },
    92455: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6c34650fcbbf47f6170e4f4f958b0462.jpg"
    },
    92603: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2c6c6032861751e40f2c7849521c32fb.jpg"
    },
    92693: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/20550d8e06b334cf1f2d444bb66ace2f.jpg"
    },
    93111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6adffdef3a1b7b97262e6a4b56c939a4.jpg"
    },
    93276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1d0540831719ded06b6826bfed76d35b.jpg"
    },
    93524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4aed55ae520eb7ed011a88f001c75ccd.jpg"
    },
    94037: (e, a, t) => {
      var s = {
        "./1.jpg": 47230,
        "./2.jpg": 38729,
        "./3.jpg": 40940,
        "./4.jpg": 1175,
        "./5.jpg": 32890,
        "./6.jpg": 90117,
        "./7.jpg": 62504,
        "./weapons-bg.jpg": 22014
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 94037
    },
    94164: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af573a2d623f3899c6b47b6f132a8ef9.jpg"
    },
    94293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    94337: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cfda1d785917761b372b694e0c50ccda.jpg"
    },
    94351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aad1950f7d40dfbdef5a69e9820b13c.jpg"
    },
    94368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/17c56caa4f667fb4ec09267b821c29d5.jpg"
    },
    94678: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "downloads"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "avatars"
              },
              name: {
                kind: "Name",
                value: "downloadsCollection"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "StringValue",
                  value: "en_us",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "seriesId"
                },
                value: {
                  kind: "IntValue",
                  value: "5635"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "collectionId"
                },
                value: {
                  kind: "IntValue",
                  value: "6"
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
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
                        value: "groups"
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
                            value: "preview"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          alias: {
                            kind: "Name",
                            value: "items"
                          },
                          name: {
                            kind: "Name",
                            value: "avatars"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
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
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "art"
              },
              name: {
                kind: "Name",
                value: "downloadsCollection"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "StringValue",
                  value: "en_us",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "seriesId"
                },
                value: {
                  kind: "IntValue",
                  value: "5636"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "collectionId"
                },
                value: {
                  kind: "IntValue",
                  value: "3"
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
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
                        value: "groups"
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
                            value: "preview"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          alias: {
                            kind: "Name",
                            value: "items"
                          },
                          name: {
                            kind: "Name",
                            value: "wallpapers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 683
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query downloads {\n    avatars: downloadsCollection(\n        locale: "en_us"\n        seriesId: 5635\n        collectionId: 6\n    ) {\n        series {\n            title\n            groups {\n                label\n                preview\n                items: avatars {\n                    src\n                    label\n                }\n            }\n        }\n    }\n    art: downloadsCollection(locale: "en_us", seriesId: 5636, collectionId: 3) {\n        series {\n            title\n            groups {\n                label\n                preview\n                items: wallpapers {\n                    src\n                    label\n                }\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.downloads = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var d = n;
          n = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "downloads")
    },
    94815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/24e2aa90db653cad0addeaf1645da49c.jpg"
    },
    94914: (e, a, t) => {
      var s = {
        "./1-full.jpg": 76310,
        "./10-full.jpg": 46388,
        "./100-full.jpg": 3966,
        "./101-full.jpg": 61325,
        "./102-full.jpg": 28596,
        "./103-full.jpg": 47139,
        "./104-full.jpg": 74650,
        "./105-full.jpg": 81417,
        "./106-full.jpg": 22016,
        "./107-full.jpg": 71391,
        "./108-full.jpg": 854,
        "./109-full.jpg": 2501,
        "./11-full.jpg": 45123,
        "./110-full.jpg": 49071,
        "./111-full.jpg": 47824,
        "./112-full.jpg": 43097,
        "./113-full.jpg": 98762,
        "./114-full.jpg": 28595,
        "./115-full.jpg": 79300,
        "./116-full.jpg": 509,
        "./117-full.jpg": 86958,
        "./118-full.jpg": 85287,
        "./119-full.jpg": 86856,
        "./12-full.jpg": 22686,
        "./120-full.jpg": 7372,
        "./121-full.jpg": 73243,
        "./122-full.jpg": 81174,
        "./123-full.jpg": 96261,
        "./124-full.jpg": 41080,
        "./125-full.jpg": 407,
        "./126-full.jpg": 16658,
        "./127-full.jpg": 929,
        "./128-full.jpg": 13524,
        "./129-full.jpg": 12259,
        "./13-full.jpg": 3693,
        "./130-full.jpg": 61141,
        "./133-full.jpg": 73340,
        "./135-full.jpg": 68514,
        "./137-full.jpg": 27688,
        "./138-full.jpg": 52189,
        "./14-full.jpg": 85120,
        "./140-full.jpg": 38514,
        "./141-full.jpg": 897,
        "./142-full.jpg": 31160,
        "./143-full.jpg": 22263,
        "./144-full.jpg": 46710,
        "./145-full.jpg": 76517,
        "./146-full.jpg": 3756,
        "./147-full.jpg": 10299,
        "./148-full.jpg": 18618,
        "./149-full.jpg": 23337,
        "./15-full.jpg": 51007,
        "./150-full.jpg": 95715,
        "./151-full.jpg": 89812,
        "./152-full.jpg": 32845,
        "./153-full.jpg": 9310,
        "./154-full.jpg": 8607,
        "./155-full.jpg": 37888,
        "./156-full.jpg": 23465,
        "./157-full.jpg": 63258,
        "./158-full.jpg": 71035,
        "./159-full.jpg": 85516,
        "./16-full.jpg": 85946,
        "./160-full.jpg": 88272,
        "./161-full.jpg": 94351,
        "./162-full.jpg": 89738,
        "./163-full.jpg": 34169,
        "./164-full.jpg": 45668,
        "./165-full.jpg": 50515,
        "./166-full.jpg": 4718,
        "./167-full.jpg": 86045,
        "./168-full.jpg": 49544,
        "./169-full.jpg": 70887,
        "./17-full.jpg": 39145,
        "./170-full.jpg": 37417,
        "./171-full.jpg": 30650,
        "./172-full.jpg": 43743,
        "./173-full.jpg": 94368,
        "./174-full.jpg": 33677,
        "./175-full.jpg": 59966,
        "./176-full.jpg": 19491,
        "./177-full.jpg": 84596,
        "./178-full.jpg": 32481,
        "./179-full.jpg": 79826,
        "./18-full.jpg": 40236,
        "./180-full.jpg": 33510,
        "./181-full.jpg": 60053,
        "./182-full.jpg": 93276,
        "./183-full.jpg": 25707,
        "./184-full.jpg": 95714,
        "./185-full.jpg": 41361,
        "./186-full.jpg": 59208,
        "./187-full.jpg": 41287,
        "./188-full.jpg": 42958,
        "./189-full.jpg": 56509,
        "./19-full.jpg": 6107,
        "./190-full.jpg": 72759,
        "./191-full.jpg": 97080,
        "./192-full.jpg": 56929,
        "./193-full.jpg": 89010,
        "./194-full.jpg": 45595,
        "./195-full.jpg": 79724,
        "./196-full.jpg": 68613,
        "./2-full.jpg": 85563,
        "./20-full.jpg": 93111,
        "./203-full.jpg": 18854,
        "./204-full.jpg": 99207,
        "./205-full.jpg": 80584,
        "./206-full.jpg": 47729,
        "./207-full.jpg": 15810,
        "./208-full.jpg": 31539,
        "./209-full.jpg": 78116,
        "./21-full.jpg": 16504,
        "./210-full.jpg": 70426,
        "./211-full.jpg": 75145,
        "./212-full.jpg": 10464,
        "./213-full.jpg": 23167,
        "./214-full.jpg": 97182,
        "./215-full.jpg": 56845,
        "./216-full.jpg": 79284,
        "./217-full.jpg": 47683,
        "./218-full.jpg": 73970,
        "./219-full.jpg": 36353,
        "./22-full.jpg": 98049,
        "./220-full.jpg": 37969,
        "./221-full.jpg": 66146,
        "./222-full.jpg": 11399,
        "./223-full.jpg": 90056,
        "./224-full.jpg": 22741,
        "./225-full.jpg": 34662,
        "./226-full.jpg": 52075,
        "./227-full.jpg": 68316,
        "./228-full.jpg": 91033,
        "./229-full.jpg": 30250,
        "./23-full.jpg": 45394,
        "./230-full.jpg": 89880,
        "./231-full.jpg": 40599,
        "./232-full.jpg": 91026,
        "./233-full.jpg": 13281,
        "./234-full.jpg": 26028,
        "./235-full.jpg": 11547,
        "./236-full.jpg": 46326,
        "./237-full.jpg": 63269,
        "./238-full.jpg": 78400,
        "./239-full.jpg": 49119,
        "./24-full.jpg": 48027,
        "./240-full.jpg": 12055,
        "./241-full.jpg": 35448,
        "./242-full.jpg": 16993,
        "./25-full.jpg": 25932,
        "./26-full.jpg": 24069,
        "./3-full.jpg": 63468,
        "./4-full.jpg": 51937,
        "./40-full.jpg": 19025,
        "./41-full.jpg": 47202,
        "./42-full.jpg": 92455,
        "./43-full.jpg": 87464,
        "./44-full.jpg": 3797,
        "./45-full.jpg": 15718,
        "./46-full.jpg": 33131,
        "./47-full.jpg": 65724,
        "./48-full.jpg": 72089,
        "./49-full.jpg": 27658,
        "./5-full.jpg": 99282,
        "./50-full.jpg": 87288,
        "./51-full.jpg": 21655,
        "./52-full.jpg": 72082,
        "./53-full.jpg": 94337,
        "./54-full.jpg": 7084,
        "./55-full.jpg": 92603,
        "./56-full.jpg": 27382,
        "./57-full.jpg": 44325,
        "./58-full.jpg": 59456,
        "./59-full.jpg": 30175,
        "./6-full.jpg": 30647,
        "./60-full.jpg": 98539,
        "./61-full.jpg": 63804,
        "./62-full.jpg": 51381,
        "./63-full.jpg": 99910,
        "./64-full.jpg": 96615,
        "./65-full.jpg": 77992,
        "./66-full.jpg": 28785,
        "./67-full.jpg": 96866,
        "./68-full.jpg": 12595,
        "./69-full.jpg": 53143,
        "./7-full.jpg": 70392,
        "./70-full.jpg": 51482,
        "./71-full.jpg": 56201,
        "./72-full.jpg": 91520,
        "./73-full.jpg": 4223,
        "./74-full.jpg": 78238,
        "./75-full.jpg": 37901,
        "./76-full.jpg": 60340,
        "./77-full.jpg": 45091,
        "./78-full.jpg": 71378,
        "./79-full.jpg": 33761,
        "./8-full.jpg": 36781,
        "./80-full.jpg": 53269,
        "./81-full.jpg": 26726,
        "./82-full.jpg": 35275,
        "./83-full.jpg": 86492,
        "./84-full.jpg": 50929,
        "./85-full.jpg": 5282,
        "./86-full.jpg": 50855,
        "./87-full.jpg": 52424,
        "./88-full.jpg": 66077,
        "./89-full.jpg": 52526,
        "./9-full.jpg": 79422,
        "./90-full.jpg": 53580,
        "./91-full.jpg": 75675,
        "./92-full.jpg": 66422,
        "./93-full.jpg": 68069,
        "./94-full.jpg": 60504,
        "./95-full.jpg": 37111,
        "./96-full.jpg": 89394,
        "./97-full.jpg": 42049,
        "./98-full.jpg": 94164,
        "./99-full.jpg": 12707
      };

      function r(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 94914
    },
    95088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    95371: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e2458db9f21860297e4093dbafd69d83.jpg"
    },
    95520: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
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
                value: "withMetaTitle"
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
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
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
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
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
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withMetaTitle"
                    }
                  }
                }]
              }],
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
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
                  }
                }
              }, {
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var d = n;
          n = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
    },
    95523: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65328e95b0c1fc77f72b6be94d76f2e5.jpg"
    },
    95632: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/447470fb82d82355227e7a3872b8e467.jpg"
    },
    95714: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e27fd5ab9b2be7130a4e66b1bbdff802.jpg"
    },
    95715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/868bbfdbdd15165e61691d3dd8db7ba4.jpg"
    },
    96261: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0aa2905b54ae8d5498a484e1405f5fec.jpg"
    },
    96372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/63132e83d8ff0535c2b0789303ecafa1.jpg"
    },
    96615: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/51baaa595479daece9ece0789f5cca5f.jpg"
    },
    96866: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd68786c20bd2a43f70f64cbbd6feb5b.jpg"
    },
    97080: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7733e0fe1dd750cf54878734fed1567b.jpg"
    },
    97182: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/db515b2e17b6119c2f85a3a207c6bf15.jpg"
    },
    97378: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/328063b5a190965a14176151d2098818.png"
    },
    97526: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/949e0a50124a889b098f73cedc29fb3b.jpg"
    },
    97558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    97610: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/97a5a9a5f18fa335373439c14e232966.jpg"
    },
    97619: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6f01f139a3900c36955b385bfa04ba4c.png"
    },
    97689: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/561c3ecd9ee0102c5d6e888010ff96a3.jpg"
    },
    97851: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce37ee051006786fcb6bc2f9782ccb1.jpg"
    },
    98049: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/28c3bd2c4d202dc1c01f92cf8bb264eb.jpg"
    },
    98539: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2477d264c7f9dbf7bd37a90326145b6.jpg"
    },
    98762: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f4da671e3099ba7f983b54a3d998b76.jpg"
    },
    98952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    99207: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a7e16641ccfb7cf1e633c3ef2e245ffe.jpg"
    },
    99282: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/425ff5ec7b249d604d4251eb9f9ebd0a.jpg"
    },
    99334: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e08c208a523e47580871c21af6c0a3a.jpg"
    },
    99910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2395fca4bf5493f41eb1f111a333b4e.jpg"
    }
  }
]);