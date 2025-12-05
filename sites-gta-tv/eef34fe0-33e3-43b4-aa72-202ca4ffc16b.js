try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eef34fe0-33e3-43b4-aa72-202ca4ffc16b", e._sentryDebugIdIdentifier = "sentry-dbid-eef34fe0-33e3-43b4-aa72-202ca4ffc16b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [804, 4776], {
    111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    144: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5050d09bf65a09d316c5c4344c2c38fb.jpg"
    },
    235: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "HomeData"
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
                value: "featured"
              },
              name: {
                kind: "Name",
                value: "game"
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
                  value: "titleSlug"
                },
                value: {
                  kind: "StringValue",
                  value: "VI",
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
                    value: "description"
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
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "urlOfficial"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "games"
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
                  value: "family"
                },
                value: {
                  kind: "StringValue",
                  value: "grand-theft-auto",
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
                        value: "titleSlug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "urlOfficial"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "television"
              },
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "10"
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
                    value: "gtatv-tv",
                    block: !1
                  }]
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
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "rich"
              },
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "10"
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
                    value: "gtatv-rich",
                    block: !1
                  }]
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
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 826
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          a(e, t)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          a(e, t)
        }), e.definitions && e.definitions.forEach(function(e) {
          a(e, t)
        })
      }
      t.loc.source = {
        body: 'query HomeData($locale: String!, $cache: Boolean = true) {\n    featured: game(locale: $locale, titleSlug: "VI") {\n        description\n        titleSlug\n        urlOfficial\n    }\n    games(locale: $locale, family: "grand-theft-auto") {\n        results {\n            id\n            titleSlug\n            urlOfficial\n        }\n    }\n    television: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-tv"]) {\n        results {\n            id\n            title\n            screencap\n            game {\n                title\n                titleSlug\n            }\n        }\n    }\n    rich: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-rich"]) {\n        results {\n            id\n            title\n            screencap\n            game {\n                title\n                titleSlug\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      t.definitions.forEach(function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      }), e.exports = t, e.exports.HomeData = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [i(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var r = s[t] || new Set,
          n = new Set,
          o = new Set;
        for (r.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(t) {
          var s = i(e, t);
          s && a.definitions.push(s)
        }), a
      }(t, "HomeData")
    },
    340: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/524705aa18bd4ecfe65a7604fe553bea.jpg"
    },
    377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    401: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5486652b229530cf4b752c25531e251f.jpg"
    },
    686: e => {
      var t = {
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
                    value: "titleSlug"
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
            value: "VideoData"
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
                value: "video"
              },
              name: {
                kind: "Name",
                value: "video"
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
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
              alias: {
                kind: "Name",
                value: "television"
              },
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "10"
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
                    value: "gtatv-tv",
                    block: !1
                  }]
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "rich"
              },
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "10"
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
                    value: "gtatv-rich",
                    block: !1
                  }]
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
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
          end: 578
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          a(e, t)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          a(e, t)
        }), e.definitions && e.definitions.forEach(function(e) {
          a(e, t)
        })
      }
      t.loc.source = {
        body: 'fragment videoFields on RockstarGames_Videos_Model_Entity_Video_o {\n    id\n    title\n    screencap\n    game {\n        id\n        title\n        titleSlug\n    }\n}\nquery VideoData($locale: String!, $id: String!, $cache: Boolean = true) {\n    video: video(locale: $locale, id: $id) {\n        title\n    }\n    television: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-tv"]) {\n        results {\n            ...videoFields\n        }\n    }\n    rich: videos(locale: $locale, limit: 10, groupTypes: ["gtatv-rich"]) {\n        results {\n            ...videoFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }

      function r(e, t) {
        var a = {
          kind: e.kind,
          definitions: [i(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var r = s[t] || new Set,
          n = new Set,
          o = new Set;
        for (r.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(t) {
          var s = i(e, t);
          s && a.definitions.push(s)
        }), a
      }
      t.definitions.forEach(function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      }), e.exports = t, e.exports.videoFields = r(t, "videoFields"), e.exports.VideoData = r(t, "VideoData")
    },
    869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    1016: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/74576fdc36948700777d06f9b8db2eec.jpg"
    },
    1048: (e, t, a) => {
      var s = {
        "./VI/desktop/de_de.jpg": 144,
        "./VI/desktop/en_us.jpg": 401,
        "./VI/desktop/es_es.jpg": 7534,
        "./VI/desktop/es_mx.jpg": 8537,
        "./VI/desktop/fr_fr.jpg": 2994,
        "./VI/desktop/it_it.jpg": 3668,
        "./VI/desktop/ja_jp.jpg": 3365,
        "./VI/desktop/ko_kr.jpg": 9003,
        "./VI/desktop/pl_pl.jpg": 7758,
        "./VI/desktop/pt_br.jpg": 3890,
        "./VI/desktop/ru_ru.jpg": 1016,
        "./VI/desktop/zh_hans.jpg": 5732,
        "./VI/desktop/zh_tw.jpg": 5667
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 1048
    },
    1157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    1248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    1480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    2014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    2043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    2461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    2591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    2602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    2787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    2830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    2844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    2994: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04fad38dffabad52092b45f9a3cee88b.jpg"
    },
    3019: (e, t, a) => {
      var s = {
        "./de": [2666, 6879],
        "./en": [9390, 2243],
        "./es": [8697, 278],
        "./fr": [7185, 9022],
        "./it": [1872, 2365],
        "./ja": [3476, 9377],
        "./ko": [1239, 9028],
        "./pl": [1645, 1242],
        "./pt": [3669, 7970],
        "./ru": [1520, 7453],
        "./zh": [3907, 8880]
      };

      function i(e) {
        if (!a.o(s, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = s[e],
          i = t[0];
        return a.e(t[1]).then(() => a.t(i, 23))
      }
      i.keys = () => Object.keys(s), i.id = 3019, e.exports = i
    },
    3055: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4fb18f10480c1ce10ca7faaad9a2aea7.jpg"
    },
    3095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    3118: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d748d12cf8cc854121e8be9860ed409.jpg"
    },
    3143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    3365: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6205f3bd39adb33d23221501f6506dc5.jpg"
    },
    3483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    3514: (e, t, a) => {
      var s = {
        "./de": [1367, 4710],
        "./en": [579, 3486],
        "./es": [7304, 4011],
        "./fr": [2436, 4851],
        "./it": [665, 9936],
        "./ja": [9729, 2156],
        "./ko": [5414, 3885],
        "./pl": [4156, 6891],
        "./pt": [772, 3475],
        "./ru": [8501, 4528],
        "./zh": [8282, 4861]
      };

      function i(e) {
        if (!a.o(s, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = s[e],
          i = t[0];
        return a.e(t[1]).then(() => a.t(i, 23))
      }
      i.keys = () => Object.keys(s), i.id = 3514, e.exports = i
    },
    3534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    3564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    3573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    3587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    3668: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04fad38dffabad52092b45f9a3cee88b.jpg"
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    3839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    3890: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4eaaed791df32e91f97107b262830371.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    4141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    4375: (e, t, a) => {
      var s = {
        "./de": [1464, 5639],
        "./en": [3872, 6267],
        "./es": [6507, 5742],
        "./fr": [31, 2678],
        "./it": [6625, 6997],
        "./ja": [3142, 6361],
        "./ko": [2189, 7452],
        "./pl": [6283, 2642],
        "./pt": [6515, 3034],
        "./ru": [7746, 3941],
        "./zh": [4333, 5832]
      };

      function i(e) {
        if (!a.o(s, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = s[e],
          i = t[0];
        return a.e(t[1]).then(() => a.t(i, 23))
      }
      i.keys = () => Object.keys(s), i.id = 4375, e.exports = i
    },
    4416: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d748d12cf8cc854121e8be9860ed409.jpg"
    },
    4596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    4598: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d33532ed9c8c08388d6ab4a0613520aa.jpg"
    },
    4705: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a9ff3cac0e6f01352186a60a37f17a8f.jpg"
    },
    4715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    4724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    4752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    4808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    4819: (e, t, a) => {
      var s = {
        "./de": [7894, 5259],
        "./en": [1658, 4799],
        "./es": [8637, 3370],
        "./fr": [3157, 7010],
        "./it": [9060, 4913],
        "./ja": [6688, 6285],
        "./ko": [4907, 6664],
        "./pl": [8097, 1054],
        "./pt": [8953, 662],
        "./ru": [7924, 5233],
        "./zh": [6975, 4700]
      };

      function i(e) {
        if (!a.o(s, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = s[e],
          i = t[0];
        return a.e(t[1]).then(() => a.t(i, 23))
      }
      i.keys = () => Object.keys(s), i.id = 4819, e.exports = i
    },
    4825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    4923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    5256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    5332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    5613: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    5667: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3ce78f679abdee82651d753a47e38532.jpg"
    },
    5732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6205f3bd39adb33d23221501f6506dc5.jpg"
    },
    5903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    5996: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44a3bdc0a87eb98dc369735737deaf33.jpg"
    },
    6044: (e, t, a) => {
      var s = {
        "./VI/mobile/de_de.jpg": 5996,
        "./VI/mobile/en_us.jpg": 7109,
        "./VI/mobile/es_es.jpg": 9258,
        "./VI/mobile/es_mx.jpg": 6725,
        "./VI/mobile/fr_fr.jpg": 3118,
        "./VI/mobile/it_it.jpg": 4416,
        "./VI/mobile/ja_jp.jpg": 4705,
        "./VI/mobile/ko_kr.jpg": 3055,
        "./VI/mobile/pl_pl.jpg": 7098,
        "./VI/mobile/pt_br.jpg": 4598,
        "./VI/mobile/ru_ru.jpg": 340,
        "./VI/mobile/zh_hans.jpg": 6264,
        "./VI/mobile/zh_tw.jpg": 6927
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 6044
    },
    6148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    6264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a9ff3cac0e6f01352186a60a37f17a8f.jpg"
    },
    6725: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48f3ad2d0327e0b1b30934487535181.jpg"
    },
    6751: (e, t, a) => {
      var s = {
        "./GTAOnline.jpg": 111,
        "./GTATrilogy.jpg": 4752,
        "./IV.jpg": 3483,
        "./V.jpg": 8754,
        "./VI.jpg": 1157,
        "./VI/desktop/de_de.jpg": 144,
        "./VI/desktop/en_us.jpg": 401,
        "./VI/desktop/es_es.jpg": 7534,
        "./VI/desktop/es_mx.jpg": 8537,
        "./VI/desktop/fr_fr.jpg": 2994,
        "./VI/desktop/it_it.jpg": 3668,
        "./VI/desktop/ja_jp.jpg": 3365,
        "./VI/desktop/ko_kr.jpg": 9003,
        "./VI/desktop/pl_pl.jpg": 7758,
        "./VI/desktop/pt_br.jpg": 3890,
        "./VI/desktop/ru_ru.jpg": 1016,
        "./VI/desktop/zh_hans.jpg": 5732,
        "./VI/desktop/zh_tw.jpg": 5667,
        "./VI/mobile/de_de.jpg": 5996,
        "./VI/mobile/en_us.jpg": 7109,
        "./VI/mobile/es_es.jpg": 9258,
        "./VI/mobile/es_mx.jpg": 6725,
        "./VI/mobile/fr_fr.jpg": 3118,
        "./VI/mobile/it_it.jpg": 4416,
        "./VI/mobile/ja_jp.jpg": 4705,
        "./VI/mobile/ko_kr.jpg": 3055,
        "./VI/mobile/pl_pl.jpg": 7098,
        "./VI/mobile/pt_br.jpg": 4598,
        "./VI/mobile/ru_ru.jpg": 340,
        "./VI/mobile/zh_hans.jpg": 6264,
        "./VI/mobile/zh_tw.jpg": 6927,
        "./agent.jpg": 8323,
        "./beaterator.jpg": 3587,
        "./bully-scholarshipedition.jpg": 7181,
        "./bully.jpg": 5332,
        "./chinatownwars.jpg": 4596,
        "./episodesfromlibertycity.jpg": 8518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 2787,
        "./gta-online.jpg": 6788,
        "./gta-v.jpg": 3143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 9942,
        "./gtacomplete.jpg": 4923,
        "./gtalondon.jpg": 5256,
        "./italianjob.jpg": 2043,
        "./lanoire-vr-case-files.jpg": 2014,
        "./lanoire.jpg": 9414,
        "./lanoire_2.jpg": 2461,
        "./libertycitystories.jpg": 9273,
        "./manhunt.jpg": 5903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 7321,
        "./maxpayne2.jpg": 3095,
        "./maxpayne3.jpg": 7258,
        "./midnightclub.jpg": 2602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 9655,
        "./midnightclubLA-complete.jpg": 3839,
        "./midnightclubLA.jpg": 9795,
        "./oni.jpg": 4808,
        "./rdr-goty.jpg": 9552,
        "./reddeadonline.jpg": 3534,
        "./reddeadredemption.jpg": 7064,
        "./reddeadredemption2.jpg": 1248,
        "./reddeadrevolver.jpg": 9114,
        "./rockstar-games-collection-edition-1.jpg": 3573,
        "./sanandreas.jpg": 4724,
        "./skateanddestroy.jpg": 377,
        "./smugglersrun.jpg": 3564,
        "./smugglersrun2.jpg": 2844,
        "./smugglersrunwarzones.jpg": 4715,
        "./stateofemergency.jpg": 8005,
        "./tabletennis.jpg": 4141,
        "./theballadofgaytony.jpg": 4825,
        "./thelostanddamned.jpg": 2591,
        "./thewarriors.jpg": 6148,
        "./undeadnightmare.jpg": 2830,
        "./vicecity.jpg": 1480,
        "./vicecitystories.jpg": 869,
        "./wildmetal.jpg": 5613
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 6751
    },
    6788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    6927: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81f92d6438abb2b88c813d8eaeab8d3f.jpg"
    },
    7064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    7098: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/79aabd673e6726aec41e898bb1b4dca5.jpg"
    },
    7109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9184d16412d42140f30a1d0c16db22b1.jpg"
    },
    7181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    7258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    7321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    7534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e66ce9502ddace9f8b0a8496f0cdcda.jpg"
    },
    7648: (e, t, a) => {
      var s = {
        "./de": [406, 299],
        "./en": [874, 5663],
        "./es": [4013, 5530],
        "./fr": [4965, 2466],
        "./it": [8596, 7073],
        "./ja": [4656, 4621],
        "./ko": [5451, 824],
        "./pl": [6273, 2398],
        "./pt": [6585, 9126],
        "./ru": [7284, 3697],
        "./zh": [1615, 1868]
      };

      function i(e) {
        if (!a.o(s, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = s[e],
          i = t[0];
        return a.e(t[1]).then(() => a.t(i, 23))
      }
      i.keys = () => Object.keys(s), i.id = 7648, e.exports = i
    },
    7758: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/42eaeed54ffe28ca0cf5ca0babdc19a4.jpg"
    },
    8005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    8323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    8518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    8525: (e, t, a) => {
      var s = {
        "./de": [5149, 9990],
        "./en": [8517, 1822],
        "./es": [3877, 2347],
        "./fr": [6170, 131],
        "./it": [5583, 8272],
        "./ja": [5571, 7436],
        "./ko": [8284, 2221],
        "./pl": [9682, 2171],
        "./pt": [2762, 8755],
        "./ru": [1007, 2864],
        "./zh": [8548, 3197]
      };

      function i(e) {
        if (!a.o(s, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = s[e],
          i = t[0];
        return a.e(t[1]).then(() => a.t(i, 23))
      }
      i.keys = () => Object.keys(s), i.id = 8525, e.exports = i
    },
    8537: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e66ce9502ddace9f8b0a8496f0cdcda.jpg"
    },
    8613: (e, t, a) => {
      "use strict";
      a.d(t, {
        YK: () => s.YK,
        JK: () => p,
        tz: () => i.A,
        QY: () => v
      });
      var s = a(4944),
        i = a(597),
        r = a(2295),
        n = a(2229),
        o = a(1514),
        c = a(9867);
      const l = (e, t) => {
          if (!e || !t) return void console.log(`Couldn't set cookie (${e}) to value (${t})`);
          const a = window.location.hostname.split("."),
            s = a.slice(a.length - 2).join(".");
          document.cookie = `${e}=${t}; domain=${s}; path=/;`
        },
        d = e => {
          const t = document.cookie.split("; "),
            a = `${e}=`,
            s = t.find(e => e.startsWith(a)),
            i = s?.substring(a.length, s.length);
          return i
        },
        m = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US",
          store: "en"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE",
          store: "de"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES",
          store: "es"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX",
          store: "es-419"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR",
          store: "fr"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT",
          store: "it"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP",
          store: "ja"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR",
          store: "ko"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL",
          store: "pl"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR",
          store: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU",
          store: "ru"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW",
          store: "zh-Hant"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN",
          store: "zh-CN"
        }],
        _ = m[0],
        u = m,
        p = () => {
          const {
            location: e
          } = window, t = (0, c.A)(), a = (e => {
            const t = u.map(e => e.subdomaincom),
              a = e.pathname.substring(1).split("/"),
              s = "detect-locals" === a[0] ? 1 : 0;
            return -1 !== t.indexOf(a[s]) ? a[s] : null
          })(e), s = (e => {
            const t = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return t?.split("=")[1]
          })(e), i = _;
          let r = i;
          const n = `rockstarweb_lang.${t.cookieIdentifier}`,
            o = d(n);
          r = t.currentSite?.site === c.C.www ? u.find(e => e.subdomaincom === s) || u.find(e => e.subdomaincom === a) || i : u.find(e => e.iso === o) || i;
          const [, m] = ((e, t, a = !1) => {
            const s = d(e);
            return s && !a || l(e, t), [s, (i = e, e => {
              l(i, e)
            })];
            var i
          })(n, r.iso);
          return [r, m]
        };
      var g = a(5422);
      const f = () => "en-US";

      function b(e) {
        const t = e.split("-");
        return (0, g.A)(t[1] ? t[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function k(e, t) {
        return e[t] ?? {}
      }

      function v(e, t, a, s) {
        return i => {
          const c = (0, n.useMemo)(() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const a = t ?? p()[0].iso ?? f(),
                  [, s] = [b(a), k(e, a)];
                var i;
                return {
                  rsLocale: a,
                  locale: a,
                  messages: (i = s, {
                    ...i
                  })
                }
              }(e, t)
            }(t, a)
          }, [a]);
          return (0, r.jsx)(o.A, {
            locale: c?.locale || f(),
            messages: {
              ...c?.messages
            },
            onError: s,
            children: c && (0, r.jsx)(e, {
              ...i
            })
          }, "intl-provider")
        }
      }
    },
    8754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    9003: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1293618750cb6ba3f62e73c5633032f8.jpg"
    },
    9114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    9115: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => E
      });
      var s = a(2295),
        i = a(2229),
        r = a(8613);
      const n = (0, r.YK)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          description: "Aria label to indicate when a link opens in new window/tab",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var o = a(9623);
      const c = "rockstargames-sites-gta-tvea8cf4797c830e5b5dad68b2ec814e67",
        l = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","carousel_learn_more":"Mehr erfahren","carousel_watch_more":"Jetzt anschauen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_cta_title_twitchdrops":"Verpass nicht dein nächstes Gratisgeschenk in GTA Online.","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","rp_icon":"RP-Kategorie","wasted_error_404_new":"Die Seite, die du suchst, existiert nicht, oder es ist ein anderer Fehler aufgetreten.","wasted_home":"Startseite"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","carousel_learn_more":"Learn More","carousel_watch_more":"Watch Now","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_cta_title_twitchdrops":"Don\'t miss the next free GTA Online gift","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page","profile_silhouette_mugshot":"Silhouette mugshot","rp_icon":"RP Category","wasted_error_404_new":"The page you\'re looking for doesn\'t exist or another error occurred.","wasted_home":"Home"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior","profile_silhouette_mugshot":"Foto de silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"La página que buscas no existe o ha habido otro error.","wasted_home":"Inicio"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior","profile_silhouette_mugshot":"Foto de una silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"Ocurrió un problema o la página que estás buscando no existe.","wasted_home":"Inicio"},"fr-FR":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","carousel_learn_more":"En savoir plus","carousel_watch_more":"Visionner maintenant","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmer votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_cta_title_twitchdrops":"Ne manquez pas le prochain cadeau gratuit dans GTA Online.","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente","profile_silhouette_mugshot":"Photo d\'identité : silhouette","rp_icon":"Catégorie : RP","wasted_error_404_new":"La page que vous recherchez n\'existe pas ou une autre erreur est survenue.","wasted_home":"Accueil"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","carousel_learn_more":"Altre informazioni","carousel_watch_more":"Guarda ora","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_cta_title_twitchdrops":"Non perdere il prossimo omaggio di GTA Online","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente","profile_silhouette_mugshot":"Foto segnaletica silhouette","rp_icon":"Categoria RP","wasted_error_404_new":"La pagina che stai cercando non esiste o si è verificato un altro errore.","wasted_home":"Home"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","carousel_learn_more":"詳細を見る","carousel_watch_more":"今すぐ視聴","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認する","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_cta_title_twitchdrops":"次回の「GTAオンライン」の無料ギフトをお見逃しなく","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ","profile_silhouette_mugshot":"シルエット顔写真","rp_icon":"RPカテゴリー","wasted_error_404_new":"お探しのページが存在しない、もしくはエラーが起こりました。","wasted_home":"ホーム"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","carousel_learn_more":"더 알아보기","carousel_watch_more":"지금 감상하기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_cta_title_twitchdrops":"다음 무료 GTA 온라인 선물을 놓치지 마십시오","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지","profile_silhouette_mugshot":"실루엣 머그샷","rp_icon":"RP 카테고리","wasted_error_404_new":"찾고 계신 페이지가 존재하지 않거나 오류가 발생했습니다.","wasted_home":"홈"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","carousel_learn_more":"Dowiedz się więcej","carousel_watch_more":"Obejrzyj","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_cta_title_twitchdrops":"Nie przegap kolejnych darmowych korzyści w GTA Online","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami","profile_silhouette_mugshot":"Zdjęcie sylwetki","rp_icon":"Poziom RP","wasted_error_404_new":"Strona, której szukasz, nie istnieje lub wystąpił inny błąd.","wasted_home":"Strona główna"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","carousel_learn_more":"Saiba mais","carousel_watch_more":"Assistir agora","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_cta_title_twitchdrops":"Não perca o próximo presente gratuito do GTA Online","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos","profile_silhouette_mugshot":"Foto da silhueta","rp_icon":"Categoria de RP","wasted_error_404_new":"A página que você procura não existe ou ocorreu um erro.","wasted_home":"Início"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","carousel_learn_more":"Подробности","carousel_watch_more":"Смотреть сейчас","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_cta_title_twitchdrops":"Не пропустите следующий подарок в GTA Online","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео","profile_silhouette_mugshot":"Силуэт игрока","rp_icon":"Категория опыта","wasted_error_404_new":"Запрашиваемой вами страницы не существует, или возникла ошибка.","wasted_home":"Главная страница"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","carousel_learn_more":"了解更多","carousel_watch_more":"马上观看","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_cta_title_twitchdrops":"不要错过下一份 GTA 在线模式免费礼物","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频","profile_silhouette_mugshot":"剪影面部照片","rp_icon":"声望值类别","wasted_error_404_new":"您想找的页面不存在，或者出现了其他错误。","wasted_home":"主页"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","carousel_learn_more":"了解更多","carousel_watch_more":"馬上觀看","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_cta_title_twitchdrops":"別錯過下一個免費的 GTA 線上模式好禮","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面","profile_silhouette_mugshot":"罪犯檔案照剪影","rp_icon":"聲望值類別","wasted_error_404_new":"您所找的頁面不存在，或者發生了其他錯誤。","wasted_home":"首頁"}}'),
        d = (m = ({
          children: e,
          to: t = "#",
          reloadDocument: a = !1,
          alt: l = "",
          autoBlank: d = !1,
          role: m = "link",
          onClick: _ = () => {},
          focused: u = !1,
          ...p
        }) => {
          const g = (0, i.useRef)(null),
            f = (0, r.tz)(),
            b = !/^(https?|mailto):/i.test(t),
            k = /^#/.test(t),
            v = p?.target ?? (d ? "_blank" : "_self"),
            {
              ...h
            } = p;
          let j = "";
          if ("aria-label" in h && h["aria-label"] && (j = "_blank" === v ? `${h["aria-label"]} ${f.formatMessage(n.aria_label_open_new_window)}` : h["aria-label"]), (0, i.useEffect)(() => {
              u && g?.current && g.current.focus()
            }, [g?.current, u]), k) {
            const a = e => {
              e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), _ && _(e)
            };
            return (0, s.jsxs)("a", {
              title: l,
              href: t,
              onClick: a,
              ...h,
              "aria-label": j,
              ref: g,
              role: m,
              children: [e, "_blank" === v && !j && (0, s.jsx)("span", {
                className: c,
                children: f.formatMessage(n.aria_label_open_new_window)
              })]
            })
          }
          if (b) return (0, s.jsxs)(o.NavLink, {
            title: l,
            to: t,
            onClick: _,
            ...h,
            "aria-label": j,
            ref: g,
            reloadDocument: a,
            children: [e, "_blank" === v && !j && (0, s.jsx)("span", {
              className: c,
              children: f.formatMessage(n.aria_label_open_new_window)
            })]
          });
          const w = Object.keys(h).filter(e => !["activeClassName", "key", "end"].includes(e)).reduce((e, t) => ({
            ...e,
            [t]: p[t]
          }), {});
          return "function" == typeof w?.className && delete w.className, (0, s.jsxs)("a", {
            href: t,
            title: l,
            onClick: _,
            target: v,
            ...w,
            "aria-label": j,
            ref: g,
            role: m,
            children: [e, "_blank" === v && !j && (0, s.jsx)("span", {
              className: c,
              children: f.formatMessage(n.aria_label_open_new_window)
            })]
          })
        }, (0, r.QY)(m, l));
      var m;
      const _ = () => (0, s.jsx)("header", {
        className: "rockstargames-sites-gta-tvd2818fbf57acfdab6702a79f77b5f709",
        children: (0, s.jsxs)("div", {
          className: "rockstargames-sites-gta-tvdcf6464262c0f8c1aab18d7ba5f104f3",
          children: [(0, s.jsx)(d, {
            className: "rockstargames-sites-gta-tvea94f5ebe20a3abe32611486a45fa571",
            to: "/"
          }), (0, s.jsxs)("h1", {
            children: ["The future of", " ", (0, s.jsx)("strong", {
              children: "American TV"
            }), " ", (0, s.jsx)("em", {
              children: "is Here"
            })]
          }), (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-tve8f8381ecf459ca3cb3238c3b6a6e0ce"
          })]
        })
      });
      var u = a(5966);
      const p = {
        img: "rockstargames-sites-gta-tvd87037fda2ea106061c7a614036a89df",
        imgContentful: "rockstargames-sites-gta-tvb9f3c994ce8a97ac6530cf0a85e5abe0",
        wide: "rockstargames-sites-gta-tvdc444c089b89129c0a39bc61845d531f"
      };
      (0, u.importAll)(a(6751));
      const g = ({
          isWideCard: e = !1,
          size: t = 640,
          title: r,
          titleSlug: n,
          inGlobalNav: o = !1
        }) => {
          const {
            isMobile: c
          } = (0, u.useWindowResize)(), l = (0, u.useLocale)(), d = (0, i.useMemo)(() => {
            let s = "";
            return e && (s = c ? a(6044)(`./${n}/mobile/${l}.jpg`) : a(1048)(`./${n}/desktop/${l}.jpg`)), s || (s = a(9294)(`./${n}.jpg`), s += `?im=Resize=${t}`), s
          }, [c, n]), [m] = (0, u.usePreloadImg)(d);
          let _ = d;
          return (0, s.jsx)("div", {
            role: "img",
            "aria-label": r,
            style: {
              backgroundImage: `url(${_})`,
              borderRadius: o ? "unset" : ""
            },
            className: [p.img, m ? p.startAnimation : "", e ? p.wide : ""].join(" ")
          })
        },
        f = {
          fobLink: "rockstargames-sites-gta-tvd30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-sites-gta-tvc9686ec502f78b05e47568667e90bd17"
        },
        b = ({
          game: e,
          to: t
        }) => {
          const {
            titleSlug: a,
            urlOfficial: i = ""
          } = e, r = ["VI"].includes(a.toUpperCase());
          return (0, s.jsx)(d, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": a,
            "data-testid": `${a}-gamecard`,
            to: t ?? i,
            target: "_self",
            className: [f.fobLink, r ? f.wide : ""].join(" "),
            reloadDocument: r,
            children: (0, s.jsx)(g, {
              title: e.title,
              titleSlug: a,
              isWideCard: r,
              size: r ? 1740 : 480
            })
          })
        },
        k = {
          item: "rockstargames-sites-gta-tvbfe97336b9e7afbd2a2eb917959214c3",
          items: "rockstargames-sites-gta-tvc2ed33350ede82ac3fc0ec91356614ac",
          list: "rockstargames-sites-gta-tva23f05777693bdde1bf2a72b3b2b82f4"
        },
        v = ({
          current: e,
          title: t,
          vids: a
        }) => (0, s.jsxs)("div", {
          className: k.list,
          children: [(0, s.jsx)("h2", {
            children: t
          }), (0, s.jsx)("div", {
            className: k.items,
            children: a.map(t => (0, s.jsxs)(d, {
              className: [k.item, t.id === e ? k.playing : ""].join(" "),
              to: `?id=${t.id}`,
              children: [(0, s.jsx)("div", {
                style: {
                  background: `url(${t.screencap}) no-repeat center/contain`,
                  "--aspect-ratio": 16 / 9
                }
              }), t.title]
            }, t.id))
          })]
        });
      var h = a(235);
      const j = ({
          game: e
        }) => (0, s.jsxs)("div", {
          className: "rockstargames-sites-gta-tve2374125e6413d62369dffa21cd5ba30",
          children: [(0, s.jsx)(b, {
            to: e.urlOfficial,
            game: e
          }), (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-tvc08be868c5b03d1f049aebfae9735533",
            children: [(0, s.jsx)(d, {
              to: e.urlOfficial,
              target: "_blank",
              children: "Visit Official Site"
            }), e?.purchases?.length ? (0, s.jsx)(d, {
              to: e.purchases[0].href,
              target: "_blank",
              children: "Buy Now"
            }) : "", (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: e.description
              }
            })]
          })]
        }),
        w = ({
          games: e
        }) => (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-tveedfe57501eac60f2e67de0de93f900f",
          children: e.map(e => (0, s.jsx)(b, {
            to: e.urlOfficial,
            game: e
          }, e.urlOfficial))
        }),
        y = ({
          games: e,
          featured: t
        }) => (0, s.jsxs)("div", {
          className: "rockstargames-sites-gta-tvf3a814925248cc27ed31e6c8a8a3fc4f",
          children: [(0, s.jsx)("h2", {
            children: "The Grand Theft Auto Series"
          }), (0, s.jsx)(j, {
            game: t
          }), (0, s.jsx)(w, {
            games: e.filter(e => "VI" !== e.titleSlug)
          })]
        }),
        x = () => {
          const {
            data: e
          } = (0, u.useQuery)(h.HomeData);
          if (!e) return null;
          const {
            games: t,
            rich: a,
            television: i,
            featured: r
          } = e;
          return (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-tva9f290c70f40a29f685537afe8addab4",
            children: [(0, s.jsx)(d, {
              className: "rockstargames-sites-gta-tvdf3e1bd6d77b39d3067d5d098d03cff2",
              to: `/play?id=${i.results[0].id}`
            }), (0, s.jsx)(v, {
              title: "Television",
              vids: i.results
            }), (0, s.jsx)(v, {
              title: "Coming Soon",
              vids: a.results
            }), (0, s.jsx)(y, {
              games: t.results,
              featured: r
            })]
          })
        };
      var z = a(1879),
        N = a.n(z),
        V = a(686);
      const S = () => {
          const e = (0, u.useQueryParams)(),
            [t, a] = (0, i.useState)(null),
            {
              data: r,
              loading: n
            } = (0, u.useQuery)(V.VideoData, {
              variables: {
                id: t
              }
            });
          if ((0, i.useEffect)(() => {
              a(e.get("id"))
            }, [e.get("id")]), n) return null;
          const {
            rich: o,
            television: c,
            video: l
          } = r;
          return (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-tvc708473f77ebcba15ee9062ac5921b9c",
            children: [(0, s.jsx)(N(), {
              id: t,
              autoplay: !0
            }), (0, s.jsx)("h3", {
              children: l.title
            }), (0, s.jsx)(v, {
              title: "Television",
              vids: c.results,
              current: t
            }), (0, s.jsx)(v, {
              title: "Coming Soon",
              vids: o.results,
              current: t
            })]
          })
        },
        I = () => {
          const e = [{
            path: "/",
            element: (0, s.jsx)(x, {}),
            exact: !0
          }, {
            path: "/play",
            element: (0, s.jsx)(S, {})
          }];
          return (0, o.useRoutes)(e)
        },
        E = () => (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-tvb3ec92f0af66eac421eeebc10316d734",
          children: (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-tva1abc388b89589494df434c53aaf3198",
            children: [(0, s.jsx)(_, {}), (0, s.jsx)("div", {
              className: "rockstargames-sites-gta-tvd4698361acb311054e478e1413357320",
              children: (0, s.jsx)(I, {})
            })]
          })
        })
    },
    9258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48f3ad2d0327e0b1b30934487535181.jpg"
    },
    9273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    9294: (e, t, a) => {
      var s = {
        "./GTAOnline.jpg": 111,
        "./GTATrilogy.jpg": 4752,
        "./IV.jpg": 3483,
        "./V.jpg": 8754,
        "./VI.jpg": 1157,
        "./VI/desktop/de_de.jpg": 144,
        "./VI/desktop/en_us.jpg": 401,
        "./VI/desktop/es_es.jpg": 7534,
        "./VI/desktop/es_mx.jpg": 8537,
        "./VI/desktop/fr_fr.jpg": 2994,
        "./VI/desktop/it_it.jpg": 3668,
        "./VI/desktop/ja_jp.jpg": 3365,
        "./VI/desktop/ko_kr.jpg": 9003,
        "./VI/desktop/pl_pl.jpg": 7758,
        "./VI/desktop/pt_br.jpg": 3890,
        "./VI/desktop/ru_ru.jpg": 1016,
        "./VI/desktop/zh_hans.jpg": 5732,
        "./VI/desktop/zh_tw.jpg": 5667,
        "./VI/mobile/de_de.jpg": 5996,
        "./VI/mobile/en_us.jpg": 7109,
        "./VI/mobile/es_es.jpg": 9258,
        "./VI/mobile/es_mx.jpg": 6725,
        "./VI/mobile/fr_fr.jpg": 3118,
        "./VI/mobile/it_it.jpg": 4416,
        "./VI/mobile/ja_jp.jpg": 4705,
        "./VI/mobile/ko_kr.jpg": 3055,
        "./VI/mobile/pl_pl.jpg": 7098,
        "./VI/mobile/pt_br.jpg": 4598,
        "./VI/mobile/ru_ru.jpg": 340,
        "./VI/mobile/zh_hans.jpg": 6264,
        "./VI/mobile/zh_tw.jpg": 6927,
        "./agent.jpg": 8323,
        "./beaterator.jpg": 3587,
        "./bully-scholarshipedition.jpg": 7181,
        "./bully.jpg": 5332,
        "./chinatownwars.jpg": 4596,
        "./episodesfromlibertycity.jpg": 8518,
        "./grandtheftauto-gba.jpg": 7509,
        "./grandtheftauto3.jpg": 2787,
        "./gta-online.jpg": 6788,
        "./gta-v.jpg": 3143,
        "./gta.jpg": 8494,
        "./gta2.jpg": 9942,
        "./gtacomplete.jpg": 4923,
        "./gtalondon.jpg": 5256,
        "./italianjob.jpg": 2043,
        "./lanoire-vr-case-files.jpg": 2014,
        "./lanoire.jpg": 9414,
        "./lanoire_2.jpg": 2461,
        "./libertycitystories.jpg": 9273,
        "./manhunt.jpg": 5903,
        "./manhunt2.jpg": 3933,
        "./maxpayne.jpg": 7321,
        "./maxpayne2.jpg": 3095,
        "./maxpayne3.jpg": 7258,
        "./midnightclub.jpg": 2602,
        "./midnightclub2.jpg": 3818,
        "./midnightclub3.jpg": 9655,
        "./midnightclubLA-complete.jpg": 3839,
        "./midnightclubLA.jpg": 9795,
        "./oni.jpg": 4808,
        "./rdr-goty.jpg": 9552,
        "./reddeadonline.jpg": 3534,
        "./reddeadredemption.jpg": 7064,
        "./reddeadredemption2.jpg": 1248,
        "./reddeadrevolver.jpg": 9114,
        "./rockstar-games-collection-edition-1.jpg": 3573,
        "./sanandreas.jpg": 4724,
        "./skateanddestroy.jpg": 377,
        "./smugglersrun.jpg": 3564,
        "./smugglersrun2.jpg": 2844,
        "./smugglersrunwarzones.jpg": 4715,
        "./stateofemergency.jpg": 8005,
        "./tabletennis.jpg": 4141,
        "./theballadofgaytony.jpg": 4825,
        "./thelostanddamned.jpg": 2591,
        "./thewarriors.jpg": 6148,
        "./undeadnightmare.jpg": 2830,
        "./vicecity.jpg": 1480,
        "./vicecitystories.jpg": 869,
        "./wildmetal.jpg": 5613
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 9294
    },
    9414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    9552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    9655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    9795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    9867: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => r,
        C: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        i = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = i.findIndex(t => Object.entries(t.sites).findIndex(([t, s]) => s === a && (e = {
            site: t,
            subDomain: s
          }, !0)) >= 0), r = i[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    9942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    }
  }
]);