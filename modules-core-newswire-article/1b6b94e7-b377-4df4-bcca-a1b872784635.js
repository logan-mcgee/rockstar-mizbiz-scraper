try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1b6b94e7-b377-4df4-bcca-a1b872784635", e._sentryDebugIdIdentifier = "sentry-dbid-1b6b94e7-b377-4df4-bcca-a1b872784635")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6044], {
    60603(e) {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GetAudioAlbum"
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
                value: "audioAlbum"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tracks"
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
                        value: "cover_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mp3_src"
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
                        value: "color"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mix_blend_mode"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "duration"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "artist"
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
          end: 340
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: "query GetAudioAlbum($id: Int!, $locale: String!) {\n    audioAlbum(id: $id, locale: $locale) {\n        title\n        tracks {\n            id\n            cover_src\n            mp3_src\n            title\n            color\n            mix_blend_mode\n            duration\n            artist {\n                name\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == a) return r
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      }), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = r[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach(function(e) {
            n.add(e)
          }); n.size > 0;) {
          var c = n;
          n = new Set, c.forEach(function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach(function(e) {
              n.add(e)
            }))
          })
        }
        return o.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }(a, "GetAudioAlbum")
    },
    38828(e) {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
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
          end: 386
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == a) return r
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = r[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach(function(e) {
            n.add(e)
          }); n.size > 0;) {
          var c = n;
          n = new Set, c.forEach(function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach(function(e) {
              n.add(e)
            }))
          })
        }
        return o.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      }), e.exports = a, e.exports.UserGetVote = i(a, "UserGetVote"), e.exports.UserCastVote = i(a, "UserCastVote")
    },
    88256(e) {
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
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == a) return r
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      }), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = r[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach(function(e) {
            n.add(e)
          }); n.size > 0;) {
          var c = n;
          n = new Set, c.forEach(function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach(function(e) {
              n.add(e)
            }))
          })
        }
        return o.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }(a, "GameData")
    },
    64727(e) {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "types"
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
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
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
                        value: "id_hash"
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
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
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
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
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
                value: "sync"
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
              value: !1
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
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
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
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
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
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
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
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
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
                                  value: "sync"
                                }
                              }
                            }]
                          }]
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
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
                                  value: "sync"
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
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
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
          end: 1002
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == a) return r
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = r[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach(function(e) {
            n.add(e)
          }); n.size > 0;) {
          var c = n;
          n = new Set, c.forEach(function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach(function(e) {
              n.add(e)
            }))
          })
        }
        return o.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      }), e.exports = a, e.exports.TinaModulesList = i(a, "TinaModulesList"), e.exports.TinaModulesInfo = i(a, "TinaModulesInfo")
    },
    99948(e) {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
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
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == a) return r
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = r[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach(function(e) {
            n.add(e)
          }); n.size > 0;) {
          var c = n;
          n = new Set, c.forEach(function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach(function(e) {
              n.add(e)
            }))
          })
        }
        return o.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      }), e.exports = a, e.exports.UserGetVote = i(a, "UserGetVote"), e.exports.UserCastVote = i(a, "UserCastVote")
    },
    97984(e) {
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
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == a) return r
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = r[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach(function(e) {
            n.add(e)
          }); n.size > 0;) {
          var c = n;
          n = new Set, c.forEach(function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach(function(e) {
              n.add(e)
            }))
          })
        }
        return o.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      }), e.exports = a, e.exports.postFields = i(a, "postFields"), e.exports.paging = i(a, "paging"), e.exports.NewswireList = i(a, "NewswireList")
    },
    30631(e) {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderBy"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderDirection"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
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
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
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
                    value: "results"
                  },
                  arguments: [],
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
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
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
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
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
          end: 495
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == a) return r
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      }), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = r[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach(function(e) {
            n.add(e)
          }); n.size > 0;) {
          var c = n;
          n = new Set, c.forEach(function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach(function(e) {
              n.add(e)
            }))
          })
        }
        return o.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }(a, "TinaModulesList")
    },
    77735(e) {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
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
                value: "sync"
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
              value: !1
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
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
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
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
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
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
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
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
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
                                  value: "sync"
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
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
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
          end: 742
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: "query TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == a) return r
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      }), e.exports = a, e.exports.TinaModulesInfo = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = r[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach(function(e) {
            n.add(e)
          }); n.size > 0;) {
          var c = n;
          n = new Set, c.forEach(function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach(function(e) {
              n.add(e)
            }))
          })
        }
        return o.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }(a, "TinaModulesInfo")
    },
    55830(e) {
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
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswirePost"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id_hash"
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
                value: "post"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id_hash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id_hash"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "subtitle"
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
                    value: "show_related"
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
                    value: "posts_hero"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "hero"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
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
                    value: "jsx"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "posts_jsx"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "markup"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables_us_defaulted"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
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
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "translation_status"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "status"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "__typename"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "skip"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "BooleanValue",
                        value: !0
                      }
                    }]
                  }]
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "root_url_translations"
              },
              name: {
                kind: "Name",
                value: "metaUrlTree"
              },
              arguments: [{
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
                  kind: "StringValue",
                  value: "/",
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
                    value: "tina_tree"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
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
                value: "related"
              },
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "4"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "relatedToId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id_hash"
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
          end: 1823
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\n\nquery NewswirePost(\n    $id_hash: String!\n    $locale: String!\n    $cache: Boolean = true\n) {\n    post(id_hash: $id_hash, locale: $locale) {\n        id: id_hash\n        title\n        subtitle\n        content\n        show_related\n        created\n        created_formatted\n        posts_hero {\n            type\n            hero\n        }\n        primary_tags {\n            id\n            name\n        }\n        secondary_tags {\n            id\n            name\n        }\n        jsx\n        posts_jsx {\n            markup\n            variables_us_defaulted\n        }\n        tina {\n            id\n            payload\n            variables {\n                translation_status\n                keys\n            }\n            status\n        }\n        ### This makes Apollo skip caching so you can go back/forth between series and collections\n        ### without worrying about the wrong thing showing up.\n        ###\n        ### https://kamranicus.com/posts/2018-03-06-graphql-apollo-object-caching\n        __typename @skip(if: true)\n    }\n    root_url_translations: metaUrlTree(\n        domain: "www"\n        url: "/"\n        locale: $locale\n    ) {\n        tina_tree {\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n    related: posts(limit: 4, relatedToId: $id_hash, locale: $locale) {\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == a) return r
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = r[a] || new Set,
          o = new Set,
          n = new Set;
        for (i.forEach(function(e) {
            n.add(e)
          }); n.size > 0;) {
          var c = n;
          n = new Set, c.forEach(function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach(function(e) {
              n.add(e)
            }))
          })
        }
        return o.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      }), e.exports = a, e.exports.postFields = i(a, "postFields"), e.exports.NewswirePost = i(a, "NewswirePost")
    },
    43623(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var r = t(39793),
        s = t(93082),
        i = t(14653),
        o = t(44128),
        n = t(73059),
        c = t(31147),
        l = t(39279),
        d = t(81270),
        m = t(56433);
      const _ = {
        active: "rockstargames-modules-core-newswire-articlefdc2ec652cbb7469f602e73cd10ef997",
        deprecatedCarousel: "rockstargames-modules-core-newswire-articlea531264d5417d2198d4e14aa72335af1",
        dotsSlide: "rockstargames-modules-core-newswire-articleb8fd11776fba32f9663bbb6292a5c901",
        hideLarge: "rockstargames-modules-core-newswire-articlea6c9173aa5a8fe31a062251352a9d711",
        hideMobile: "rockstargames-modules-core-newswire-articlef3445a74a067bd92ff94b521cb0bdc07",
        imageAreaBg: "rockstargames-modules-core-newswire-articledcb2b41007683141579697bb4a8658ba",
        img: "rockstargames-modules-core-newswire-articled8e66128b4fef1ea164350cd535e2d68",
        infinite_false: "rockstargames-modules-core-newswire-articleb85758ee99a52896b94130d002e821c7",
        panorama: "rockstargames-modules-core-newswire-articleff63f8addff8d036ca0b65fa495e1653",
        perico: "rockstargames-modules-core-newswire-articleaa50a9164fd0296b1196d441233cc348",
        renderedWithChildren: "rockstargames-modules-core-newswire-articlead7696edafa3086969e7aaece4f09b4f",
        siblings: "rockstargames-modules-core-newswire-articlef4c50c0daadf81cd292587fcfea1339d",
        "swiper-horizontal": "rockstargames-modules-core-newswire-articleb823bbff86d38da8cb611a7c3367d8fe",
        "swiper-preloader-spin": "rockstargames-modules-core-newswire-articlec39b97f81c73d75dc4e013fde14aff18",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-newswire-articleee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-vertical": "rockstargames-modules-core-newswire-articled29252354bbbfe413678daff5223169d",
        track: "rockstargames-modules-core-newswire-articlec7c21df4f7f83a73f79dd7913aa87832"
      };
      var u = t(49516),
        b = t(98769);
      const p = ({
          item: e
        }) => (0, r.jsxs)("div", {
          children: [(0, r.jsx)(b.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, d.default)(_.img, e?.className)
          }), (e?.title || e?.description) && (0, r.jsx)(u.A, {
            item: e
          })]
        }),
        g = ({
          current: e,
          total: a
        }) => (0, r.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": a
          },
          children: (0, r.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        f = ({
          children: e,
          items: a = [],
          style: t = {},
          noInfiniteScroll: b = !1,
          className: f = "",
          renderTemplate: k = "standard",
          text: v,
          customSpaceBetween: h = null,
          centerSlides: w = !0,
          centeredSlidesBounds: y = !1
        }) => {
          const j = (0, m.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [x, N] = (0, s.useState)(0),
            [S, C] = (0, s.useState)(null),
            T = (0, s.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, l.A)()) : null, [e, j]),
            I = e => {
              if (!e) return;
              let a = 0;
              e.pagination.bullets.forEach((e, t) => {
                e.classList.contains("swiper-pagination-bullet-active") && (a = t)
              }), N(a)
            };
          if (!(a && 0 !== a?.length || e)) return null;
          const E = {
            0: {
              spaceBetween: h ?? 16
            },
            1024: {
              spaceBetween: h ?? 18
            },
            1920: {
              spaceBetween: h ?? 20
            },
            2560: {
              spaceBetween: h ?? 22
            }
          };
          return (0, r.jsxs)("div", {
            className: (0, d.default)(_.deprecatedCarousel, _[k], _.infinite_true, e ? _.renderedWithChildren : "", f),
            style: t,
            "data-testid": "carousel",
            children: [(0, r.jsxs)(i.RC, {
              modules: [o.A, n.A, c.A],
              keyboard: {
                enabled: !0,
                onlyInViewport: !0
              },
              a11y: {
                enabled: !0,
                scrollOnFocus: !0
              },
              pagination: {
                enabled: !0
              },
              updateOnWindowResize: !1,
              loop: !1,
              grabCursor: !0,
              centeredSlides: w,
              centerInsufficientSlides: w,
              centeredSlidesBounds: y,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: E,
              onSlideChange: e => {
                I(e)
              },
              onResize: e => {
                null != S && clearTimeout(S);
                const a = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), I(e)
                }, 250);
                C(a)
              },
              children: [(0, r.jsx)("div", {
                className: _.trackWrapper,
                children: (0, r.jsxs)("div", {
                  className: _.track,
                  children: [a?.map(e => (0, r.jsx)(i.qr, {
                    children: (0, r.jsx)(p, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, a) => e && (0, r.jsx)(i.qr, {
                    children: e
                  }, T && T[a]))]
                })
              }), (0, r.jsx)(g, {
                current: x,
                total: e ? e.length : a.length
              })]
            }), (v?.title || v?.description) && (0, r.jsx)(u.A, {
              item: v
            })]
          })
        }
    },
    49516(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var r = t(39793),
        s = t(81270),
        i = t(62012),
        o = t(49852),
        n = t(51299);
      const c = "rockstargames-modules-core-newswire-articleacd27eff2209196752622710f7b27558",
        l = ({
          to: e,
          children: a
        }) => e ? (0, r.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        d = ({
          item: e,
          className: a = ""
        }) => (0, r.jsxs)("div", {
          className: (0, s.default)("rockstargames-modules-core-newswire-articlef8bc9589974046cdac4a2264be12d2df", a),
          children: [e.title && (0, r.jsx)(l, {
            to: e?.href ?? e?.to,
            children: (0, r.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, a) => e?.unorderedList ? (0, r.jsx)(o.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, a) : e?.image ? (0, r.jsx)(i.A, {
            image: e.image,
            className: e?.className
          }, a) : e?.separator ? (0, r.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, r.jsx)(n.A, {})
          }, a) : (0, r.jsx)("p", {
            children: (0, r.jsx)("span", {
              className: c,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, a)) : (0, r.jsx)("span", {
            className: c,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    51299(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(39793);
      const s = {
          gtao: "rockstargames-modules-core-newswire-articlef66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-modules-core-newswire-articledc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-modules-core-newswire-articled4d968b41ef87926b0b6318e8647738b"
        },
        i = ({
          style: e,
          className: a = "",
          type: t = ""
        }) => (0, r.jsx)("div", {
          style: e,
          className: [s.hr, s[t], a].join(" ")
        })
    },
    49852(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var r = t(39793),
        s = t(93082),
        i = t(91681),
        o = t.n(i),
        n = t(13331),
        c = t(81270);
      const l = {
          blue: "rockstargames-modules-core-newswire-articledf5c0d39e32be4e6977bb1d638ed2340",
          custom: "rockstargames-modules-core-newswire-articleef5369875ddc5d9d7ad36eadc8afab2e",
          darkBlue: "rockstargames-modules-core-newswire-articleaa460ec14f75c93c2ba386a115ea407c",
          darkRed: "rockstargames-modules-core-newswire-articlea6a078bd68ef39e719c21e5db6329642",
          goldenrod: "rockstargames-modules-core-newswire-articlea55d762df7035a2394c9ffbfcbf1a0db",
          green: "rockstargames-modules-core-newswire-articleea2d0d0e1e32d8e48d79a0ad80a4c8ac",
          grid: "rockstargames-modules-core-newswire-articlec157d94760f0476ea06aa04da4e86727",
          gtao: "rockstargames-modules-core-newswire-articlef4bc90102d24f73cb2d45d3821bfd32e",
          gtaplus: "rockstargames-modules-core-newswire-articlec5d92b0365dc60e6b93d321e9139e9f3",
          hotPink: "rockstargames-modules-core-newswire-articlefa9be84c85fca4e66b2489e1e52a2e6a",
          itemList: "rockstargames-modules-core-newswire-articlea1ccd04246730848111c4868ccba6294",
          noImg: "rockstargames-modules-core-newswire-articleb239e263450a84fffba43a94c194d606",
          pillBtn: "rockstargames-modules-core-newswire-articled45dcc8e4008f8620987ea3033e4373d",
          purple: "rockstargames-modules-core-newswire-articlef14d63f28dd73c05cf950a08d8b8f501",
          rdo: "rockstargames-modules-core-newswire-articlecc490e805fe55ab86a3ec5df2a5131e3",
          red: "rockstargames-modules-core-newswire-articlec446b758dbe82ad97444174f4d0b4abe",
          selected: "rockstargames-modules-core-newswire-articlede1852cf9b8b4b71bcc67f8e66552c46",
          skull: "rockstargames-modules-core-newswire-articlea034e7482e8f28c66ec657f72bb93749",
          teal: "rockstargames-modules-core-newswire-articlea0aaa124176430b6ad4f959cf136e7a3",
          turquoise: "rockstargames-modules-core-newswire-articleb03c0798d8655dd98518b2f0dc002f06",
          yellow: "rockstargames-modules-core-newswire-articlebdb57ca410954012dfd4711c67fc2a18"
        },
        {
          sanitize: d
        } = o(),
        m = ({
          list: e,
          string: a,
          starColor: t,
          style: i,
          className: o,
          game: m,
          noImg: _,
          columns: u,
          mobileColumns: b
        }) => {
          const [p, g] = (0, s.useState)(null), f = a ? a.split("_#_") : e;
          if ((0, s.useEffect)(() => {
              g(e)
            }, [e]), !a && !e) return null;
          const k = {
            color: i?.color
          };
          return delete i?.color, u && p ? (0, r.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": u,
              "--unordered-list-grid-column-mobile": b ?? u
            },
            children: (0, r.jsx)("ul", {
              className: (0, c.default)(l.itemList, l.noImg, l[t], l[m]),
              style: (0, n.safeStyles)(i),
              children: p.map((e, a) => (0, r.jsx)("li", {
                style: k,
                dangerouslySetInnerHTML: {
                  __html: d(e.content)
                }
              }, a))
            })
          }) : (0, r.jsx)("ul", {
            style: (0, n.safeStyles)(i),
            className: (0, c.default)(l.itemList, l.custom, _ ? l.noImg : "", t ? l[t] : "", m ? l[m] : "", o ?? ""),
            children: f.map((e, a) => (0, r.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e?.content ?? e)
              }
            }, a))
          })
        }
    },
    31613(e, a, t) {
      "use strict";
      t.d(a, ["F", 0, () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }])
    },
    52860(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        Jsx0: () => qo,
        Jsx1: () => Uo,
        Jsx2: () => Wo,
        NewswireArticle: () => Yo,
        componentsForTinaParser: () => Zo
      });
      var r = {};
      t.r(r), t.d(r, {
        getVariant: () => Fe,
        transitions: () => De,
        variants: () => Re
      });
      var s = {};
      t.r(s), t.d(s, {
        Animations: () => r,
        LiteMotion: () => Se,
        withFadeIn: () => ze,
        withFadeUp: () => Ae
      });
      var i = {};
      t.r(i), t.d(i, {
        Art: () => ir,
        Link: () => or
      });
      var o = {};
      t.r(o), t.d(o, {
        A: () => m.A,
        Lt: () => Pa,
        Y$: () => y,
        Ex: () => j,
        xz: () => x,
        $n: () => C,
        e2: () => D,
        IO: () => J,
        FN: () => R.A,
        yJ: () => F,
        aU: () => B,
        uo: () => re,
        HV: () => ae,
        RO: () => ge,
        g$: () => qe.A,
        Wd: () => He.A,
        dT: () => We,
        ms: () => Je,
        C9: () => ea,
        Qd: () => aa.A,
        fF: () => ra,
        uR: () => he,
        n0: () => we,
        KY: () => A,
        JS: () => _a,
        xA: () => Ze,
        wt: () => wa,
        lq: () => ha,
        X4: () => $,
        wB: () => Ge,
        LQ: () => Be,
        DN: () => Ca.A,
        _q: () => Na,
        Yf: () => Sa,
        bQ: () => Kt.A,
        c$: () => ya.A,
        z1: () => qa,
        x0: () => Ra,
        LY: () => $a,
        cC: () => Oa,
        Db: () => Aa,
        _J: () => Xa,
        lK: () => Za,
        Xp: () => et,
        Zx: () => rt,
        GL: () => it,
        X9: () => tt,
        AU: () => Nr.Ay,
        uE: () => ct,
        GW: () => _t,
        nR: () => bt,
        t5: () => gt,
        Oe: () => kt,
        IP: () => ht,
        oC: () => yt,
        wE: () => xt,
        p3: () => Nt,
        LU: () => xr,
        Vu: () => Ct,
        ZL: () => Tt,
        eq: () => It,
        gp: () => zt,
        Gd: () => Pt,
        wv: () => Lt.A,
        U1: () => Ia,
        Qy: () => Mt,
        r9: () => At,
        mL: () => Ut,
        rb: () => Zt,
        QQ: () => Qt,
        S4: () => Vt,
        Xy: () => er.A,
        mj: () => rr,
        O1: () => i,
        i3: () => lr,
        _0: () => gr,
        s6: () => fr,
        z4: () => vr,
        CS: () => s,
        XM: () => Jt,
        oS: () => jr,
        Bg: () => ca
      });
      var n = {};
      t.r(n), t.d(n, {
        A: () => m.A,
        AlertDialog: () => Pa,
        AudioPlayer: () => y,
        Badge: () => j,
        Brands: () => x,
        Button: () => C,
        ButtonGroup: () => D,
        CalloutSection: () => J,
        Carousel: () => R.A,
        CharacterCard: () => F,
        ConditionalBlock: () => B,
        CookieAB: () => re,
        CountryInputField: () => ae,
        Cta: () => ge,
        DescriptionArea: () => qe.A,
        DiscountsBadge: () => He.A,
        DotLoader: () => We,
        Dropdown: () => Je,
        Embed: () => ea,
        ExpandingPlatformButton: () => aa.A,
        FadeInContent: () => ra,
        FoundryButton: () => he,
        FoundryIconButton: () => we,
        Gen9Button: () => A,
        Gen9CoreCarousel: () => _a,
        Grid: () => Ze,
        HTMLElement: () => wa,
        Hero: () => ha,
        HookStore: () => $,
        ImageTextGroup: () => Ge,
        ImageTextGroupGroup: () => Be,
        ImageWithBadge: () => Ca.A,
        LayeredImage: () => Na,
        Lightbox: () => Sa,
        LoadingAnimation: () => Kt.A,
        MultiSourceImage: () => ya.A,
        NewswireBlocks: () => qa,
        NewswireCard: () => Ra,
        NewswireList: () => $a,
        NewswireRelated: () => Oa,
        NewswireTag: () => Aa,
        OrderedList: () => Xa,
        Paging: () => Za,
        ParallaxCacheBuster: () => et,
        ParallaxInnerLayer: () => rt,
        ParallaxOuterLayer: () => it,
        ParallaxWrapper: () => tt,
        PlatformTag: () => Nr.Ay,
        PromoModule: () => ct,
        Rating: () => _t,
        ResponsiveFlexBox: () => bt,
        ResponsiveFlexItem: () => gt,
        ResponsiveGridBox: () => kt,
        ResponsiveGridItem: () => ht,
        ResponsiveImg: () => yt,
        ResponsiveSection: () => xt,
        RockstarLogo: () => Nt,
        RpCategory: () => xr,
        SafeHtml: () => Ct,
        ScrollSection: () => Tt,
        ScrollToTop: () => It,
        ScrollTracker: () => zt,
        SearchBox: () => Pt,
        Separator: () => Lt.A,
        SrcsetImage: () => Ia,
        StorybookWrapper: () => Mt,
        TextFit: () => At,
        ThumbsGallery: () => Ut,
        TinaModuleFetchNRender: () => Zt,
        TinaWrapper: () => Qt,
        TrackList: () => Vt,
        UnorderedList: () => er.A,
        UserVote: () => rr,
        VideoCard: () => i,
        VideoCarousel: () => lr,
        VideoList: () => gr,
        VisuallyHidden: () => fr,
        Wasted: () => vr,
        framer: () => s,
        useTinaModuleFetchByIds: () => Jt,
        withSearchbarErrorBoundary: () => jr,
        withSimpleErrorBoundary: () => ca
      });
      var c = {};
      t.r(c), t.d(c, {
        AnchorLink: () => Rs,
        Discounts: () => Xs,
        Donate: () => Js,
        Engagement: () => Ds.default,
        EventInfo: () => ti,
        FeaturedEventInfo: () => ri,
        FontClip: () => ii,
        GamingRewards: () => ni,
        Gen9List: () => li,
        HeroImage: () => mi,
        NewswireFull: () => ui,
        NewswireTitle: () => Qs,
        PctBar: () => bi,
        Podium: () => pi
      });
      var l = {};
      t.r(l), t.d(l, {
        applestore: () => Pi,
        googleplay: () => Li,
        left: () => Mi,
        pc: () => Ai,
        pcalt: () => Di,
        ps: () => Ri,
        ps3: () => Fi,
        ps4: () => Vi,
        ps5: () => $i,
        right: () => Gi,
        switch: () => Oi,
        x: () => Bi,
        xbox: () => qi,
        xboxone: () => Hi,
        xboxseriesxs: () => Ui
      });
      var d = {};
      t.r(d), t.d(d, {
        Actions: () => no,
        Badge: () => oo,
        Button: () => _o,
        Container: () => ao,
        Content: () => so,
        Description: () => lo,
        Disclaimer: () => mo,
        Footer: () => ro,
        Header: () => to,
        Heading: () => co,
        Image: () => io,
        LinkPSButton: () => po,
        LinkXBoxButton: () => bo,
        Loading: () => go,
        PlatformButton: () => uo,
        Root: () => eo,
        RootContext: () => Qi
      });
      var m = t(48478),
        _ = t(39793),
        u = t(93082),
        b = t(36038),
        p = t.n(b),
        g = t(13331),
        f = t(60603);
      const k = {
          controls: "rockstargames-modules-core-newswire-articleadd02ff2cfa9b26941d96126a31bc21f",
          controlsButtons: "rockstargames-modules-core-newswire-articlee77442300b4509fe7a0104b3fb4cecf5",
          controlsCurrentBg: "rockstargames-modules-core-newswire-articlecca0f086505f02983f345dfb64c2ca45",
          controlsCurrentBgVisible: "rockstargames-modules-core-newswire-articleb91004149be94449c7fbfee3d24bde58",
          controlsNextTrack: "rockstargames-modules-core-newswire-articlecd583d32f7692538f7f5d1181943c899",
          controlsPlayPause: "rockstargames-modules-core-newswire-articlec58746be839199f6102319efb7659a54",
          controlsPlayPausePlaying: "rockstargames-modules-core-newswire-articlececadc2b92a0597a55ba5870b46706c9",
          controlsPrevTrack: "rockstargames-modules-core-newswire-articled84e8c03d27a3038eb54cb7d12c8ac52",
          controlsScrub: "rockstargames-modules-core-newswire-articlef90cfd862377d31cb5ee1faf9249fd3c",
          controlsScrubTrack: "rockstargames-modules-core-newswire-articlef4bb886e9545730ccc323f43a1dfb45c",
          controlsTrack: "rockstargames-modules-core-newswire-articleff717d7c9ac30041034f2c95fd3e3017",
          controlsTrackAnimating: "rockstargames-modules-core-newswire-articlef09973ae8e0457805bc0a1090d05e444",
          controlsTrackArtist: "rockstargames-modules-core-newswire-articlee0b6ffdc4c40a6992d70395cd98cb6c5",
          controlsTrackBurger: "rockstargames-modules-core-newswire-articlef3106c22742d7b08e577964a56789504",
          controlsTrackTitle: "rockstargames-modules-core-newswire-articlef47edf112978c82a9bbfb2476170007f",
          fixedToBottom: "rockstargames-modules-core-newswire-articleea802f7f67d39cfdd9625cc8de62828f",
          iconBurger: "rockstargames-modules-core-newswire-articlea18e526e94dfd87e9b5696a21c1c7754",
          player: "rockstargames-modules-core-newswire-articlec7765dd7dbdff24d38ef3326bb8a938b",
          scrollText: "rockstargames-modules-core-newswire-articleb42c9e9ba3716121d34600c92fdf4398",
          trackActive: "rockstargames-modules-core-newswire-articlea74e95cb6296abf8ca92168db76fecb9",
          trackIndex: "rockstargames-modules-core-newswire-articled0322571401b3a4dac22628533213ede",
          trackList: "rockstargames-modules-core-newswire-articlec7dfe95abfbec1cdef9dfb87d9fd1a1f",
          trackTitle: "rockstargames-modules-core-newswire-articleeceb3183ee9dc74e33d4184b307ba923",
          tracks: "rockstargames-modules-core-newswire-articleb4036f5fe1d1ab9674cc7c6e40f9a53c",
          tracksOpen: "rockstargames-modules-core-newswire-articlea9a553961300b8ee030d0c90ac613c4c"
        },
        v = ({
          src: e
        }) => (0, _.jsx)("div", {
          className: k.cover,
          style: {
            background: `url(${e}) center/cover`
          }
        }),
        h = ({
          timing: e = {
            current: 0,
            duration: 0
          },
          playing: a,
          audioRef: t,
          setPlaying: r,
          tracksOpen: s,
          setTracksOpen: i,
          trackData: o,
          setTrackId: n,
          trackBounds: c,
          setAutoNext: l
        }) => {
          const d = (0, u.useRef)(null),
            m = (0, u.useRef)(null),
            b = (0, u.useRef)(null),
            [g, f] = (0, u.useState)(null),
            [v, h] = (0, u.useState)(!1),
            w = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                r = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`
            };
          return (0, u.useEffect)(() => {
            if (!m.current || !b.current) return;
            const e = () => {
              b.current && m.current && f(b.current.clientWidth > m.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }, [b, m, e]), (0, u.useEffect)(() => {
            if (!d.current || !e?.duration) return;
            let a = null;
            const r = new(p())(d.current),
              s = a => {
                if (d.current) {
                  const r = d.current.clientWidth;
                  if (!d.current.contains(a.srcEvent.target)) return;
                  const s = Math.max(0, a.srcEvent.offsetX),
                    i = Number(s / r * e.duration);
                  t.currentTime = i
                }
              },
              i = () => {
                a ? t.pause() : t.play()
              },
              o = () => {
                a = t.paused, t.pause()
              };
            return r.on("panstart", o), r.on("panleft", s), r.on("panright", s), r.on("panend", i), r.on("tap", s), () => {
              r.off("panstart", o), r.off("panleft", s), r.off("panright", s), r.off("panend", i), r.off("tap", s)
            }
          }, [d.current, e.duration]), (0, u.useEffect)(() => {
            const e = Number(t?.currentTime);
            (a || !isNaN(e) && 0 !== e) && h(!0)
          }, [a, t?.currentTime]), (0, _.jsxs)("div", {
            className: k.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": e.current / e.duration
            },
            children: [(0, _.jsx)("div", {
              className: [k.controlsCurrentBg, v ? k.controlsCurrentBgVisible : ""].join(" ")
            }), (0, _.jsx)("div", {
              className: k.controlsTrack,
              ref: m,
              children: (0, _.jsx)("span", {
                className: [k.controlsTrackTitle, g ? k.controlsTrackAnimating : ""].join(" "),
                ref: b,
                children: o.title
              })
            }), (0, _.jsxs)("div", {
              className: k.controlsButtons,
              children: [(0, _.jsx)("div", {
                className: k.controlsPrevTrack,
                onClick: () => {
                  c && (n(c[0]), l(!0), r(!0))
                }
              }), (0, _.jsx)("div", {
                className: [k.controlsPlayPause, a ? k.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  r(!a)
                }
              }), (0, _.jsx)("div", {
                className: k.controlsNextTrack,
                onClick: () => {
                  c && (n(c[1]), l(!0), r(!0))
                }
              })]
            }), (0, _.jsx)("div", {
              "data-active": s ? "" : null,
              className: k.controlsTrackBurger,
              children: (0, _.jsx)("div", {
                className: k.iconBurger,
                onClick: () => {
                  i(!s)
                }
              })
            }), (0, _.jsxs)("div", {
              className: k.controlsScrub,
              children: [(0, _.jsx)("span", {
                children: w(e.current)
              }), (0, _.jsx)("div", {
                className: k.controlsScrubTrack,
                ref: d
              }), (0, _.jsx)("span", {
                children: w(e.duration)
              })]
            })]
          })
        },
        w = ({
          tracks: e,
          trackId: a,
          setTrackId: t,
          tracksOpen: r,
          setTracksOpen: s,
          setPlaying: i,
          setAutoNext: o
        }) => (0, _.jsxs)("div", {
          className: k.tracks,
          children: [(0, _.jsx)("h4", {
            children: "Tracks"
          }), (0, _.jsx)("div", {
            className: k.trackBurger,
            onClick: () => {
              s(!r)
            }
          }), (0, _.jsx)("div", {
            className: k.trackList,
            children: e.map((e, r) => (0, _.jsxs)("a", {
              style: {
                "--highlight-color": e.color
              },
              className: a === e.id ? k.trackActive : "",
              onClick: () => {
                t(e.id), i(!0), o(!0)
              },
              children: [(0, _.jsx)("span", {
                className: k.trackIndex,
                children: String(r + 1).padStart(2, "0")
              }), (0, _.jsx)("span", {
                className: k.trackTitle,
                children: e.title
              }), (0, _.jsx)("span", {
                className: k.trackTime,
                children: e.duration
              })]
            }, e.id))
          })]
        }),
        y = ({
          id: e,
          className: a = ""
        }) => {
          const {
            data: t
          } = (0, g.useQuery)(f.GetAudioAlbum, {
            variables: {
              id: e
            }
          }), [r, s] = (0, u.useState)(), [i, o] = (0, u.useState)(), [n, c] = (0, u.useState)(), [l, d] = (0, u.useState)(!1), [m, b] = (0, u.useState)(!1), [p, y] = (0, u.useState)(), [j, x] = (0, u.useState)({
            current: 0,
            duration: 0
          }), [N, S] = (0, u.useState)(!0);
          return (0, u.useEffect)(() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (o(a.data.rockstarAudioPlayerPlayTrackId), S(!1), b(!0)), m && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && b(!1)
              };
            return m && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }, [m]), (0, u.useEffect)(() => {
            if (!p) return;
            const e = () => {
                isNaN(p.duration) || x({
                  duration: p?.duration ?? 0,
                  current: p?.currentTime ?? 0
                })
              },
              a = () => {
                N && r && o(r[1])
              };
            return p.addEventListener("loadedmetadata", e), p.addEventListener("timeupdate", e), p.addEventListener("ended", a), () => {
              p.removeEventListener("loadedmetadata", e), p.removeEventListener("timeupdate", e), p.removeEventListener("ended", a)
            }
          }, [p, r, N]), (0, u.useEffect)(() => {
            m && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }, [m]), (0, u.useEffect)(() => {
            p && (m ? p.play() : p.pause(), d(!1))
          }, [m, p, n?.id]), (0, u.useEffect)(() => {
            if (!i) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex(e => e.id === i);
            s([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), c(e[a])
          }, [i]), (0, u.useEffect)(() => {
            t && o(t.audioAlbum.tracks[0].id)
          }, [t]), n ? (0, _.jsxs)("div", {
            className: [k.player, k[a], l ? k.tracksOpen : ""].join(" "),
            children: [(0, _.jsx)("audio", {
              ref: e => {
                y(e)
              },
              src: n.mp3_src
            }), (0, _.jsx)(w, {
              tracks: t.audioAlbum.tracks,
              setTrackId: o,
              trackId: i,
              tracksOpen: l,
              setTracksOpen: d,
              setPlaying: b,
              setAutoNext: S
            }), (0, _.jsx)(v, {
              src: n.cover_src
            }), (0, _.jsx)(h, {
              setTrackId: o,
              trackBounds: r,
              tracksOpen: l,
              setTracksOpen: d,
              playing: m,
              setPlaying: b,
              timing: j,
              trackData: n,
              audioRef: p,
              setAutoNext: S
            })]
          }) : null
        },
        j = ({
          text: e,
          style: a
        }) => (0, _.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlec08a001134624b9ceb275eae413bfd3d",
          style: a,
          children: e
        }),
        x = ({
          brands: e = []
        }) => e.length ? (0, _.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleb53b6eca487387fc5c2057daf151691a",
          children: e.map((e, a) => (0, _.jsx)("div", {
            role: "img",
            "aria-label": e?.brandLabel,
            className: "rockstargames-modules-core-newswire-articlee8c3be7a76fd7e532e74a9fcf87bee09",
            "data-brand": e.brand
          }, a))
        }) : null;
      var N = t(81270);
      const S = {
          button: "rockstargames-modules-core-newswire-articlebc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-modules-core-newswire-articlea3e6439dcaa4870840298d683db4831c"
        },
        C = ({
          className: e = "",
          children: a,
          context: t = "",
          to: r,
          onClick: s,
          target: i = "_self",
          ...o
        }) => {
          const n = (0, N.default)(S.button, S[t], e);
          return r ? (0, _.jsx)(m.A, {
            ...o,
            to: r,
            className: n,
            onClick: s,
            target: i,
            children: a
          }) : (0, _.jsx)("button", {
            ...o,
            type: "button",
            className: n,
            onClick: s,
            children: a
          })
        };
      var T = t(99225),
        I = t(53368),
        E = t(42909);
      const z = (0, E.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        P = {
          blackBtn: "rockstargames-modules-core-newswire-articled3207a3907ff5e6cc1498c67d5562087",
          btnText: "rockstargames-modules-core-newswire-articlee146813e6b911567a15379239351bb9f",
          btnTexticon: "rockstargames-modules-core-newswire-articleadd785fa73d6a7f8cdf490add2819974",
          iconBtn: "rockstargames-modules-core-newswire-articlea305be36306fd7f0977b052ccab54910",
          link: "rockstargames-modules-core-newswire-articlea73b743df91203999c432aceb1093e62",
          pc: "rockstargames-modules-core-newswire-articlec4a7b17bb99afb02a9f9b9b133be7844",
          pillBtn: "rockstargames-modules-core-newswire-articlea76545929bba4f1522661c9f297ea3c5",
          plusButton: "rockstargames-modules-core-newswire-articleb35e9ba36ecaabe08c02c44808110761",
          ps4: "rockstargames-modules-core-newswire-articleaf1b302b53e77d0da20f92de2973fd29",
          ps5: "rockstargames-modules-core-newswire-articleb5164622a2b180ed2b04eab4d489763b",
          selected: "rockstargames-modules-core-newswire-articlee5b12527bec7eae7fce9642c9827cc3b",
          small: "rockstargames-modules-core-newswire-articleb3ba679464048120f8440e7ae0d14086",
          transparentBtn: "rockstargames-modules-core-newswire-articled4515b6bf9a4c714239cac9e27932235",
          whiteBtn: "rockstargames-modules-core-newswire-articled94aba4fb4bae812e14f8715816752c2",
          xboxone: "rockstargames-modules-core-newswire-articlecadebea37980f01b56560143374013b3",
          xboxseriesxs: "rockstargames-modules-core-newswire-articlec28e2bcbd4ed4fc95b67860cb7033999"
        },
        L = ({
          children: e,
          className: a,
          onClick: t,
          style: r,
          ariaLabel: s
        }) => (0, _.jsx)("button", {
          className: a,
          onClick: t,
          style: r,
          type: "button",
          "aria-label": s,
          children: e
        }),
        M = ({
          children: e,
          className: a,
          onClick: t,
          style: r,
          to: s,
          ariaLabel: i
        }) => (0, _.jsx)(T.NavLink, {
          className: a,
          onClick: t,
          style: r,
          to: s,
          "aria-label": i,
          children: e
        }),
        A = ({
          btnColor: e = "#fff",
          className: a = "",
          consoleBtn: t,
          icon: r = "",
          img: s,
          labelColor: i = "#000",
          onClick: o,
          secondText: n,
          size: c,
          text: l,
          to: d,
          type: m = "",
          ariaLabel: u
        }) => {
          const {
            formatMessage: b
          } = (0, E.useIntl)(), p = [P.plusButton, P[m] ?? "", P[c] ?? "", P[t] ?? "", a].join(" "), g = {
            "--hvr-color": e ?? i,
            "--hvr-bg-color": i ?? e,
            "--hvr-border-color": e ?? i
          }, f = (0, _.jsxs)(_.Fragment, {
            children: [s ? (0, _.jsx)("img", {
              src: s,
              alt: ""
            }) : "", (0, _.jsxs)("div", {
              className: P.btnText,
              icon: r,
              children: [l, n ? (0, _.jsx)("span", {
                children: n
              }) : ""]
            })]
          });
          if (d) {
            if (d.startsWith("http")) {
              const e = d.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, _.jsxs)("a", {
                href: d,
                target: e,
                onClick: o,
                onKeyDown: o,
                className: p,
                "aria-label": u,
                tabIndex: 0,
                children: [f, "_blank" === e && (0, _.jsx)(I.Gr, {
                  label: b(z.aria_label_open_new_window)
                })]
              })
            }
            return (0, _.jsx)(M, {
              className: p,
              onClick: o,
              style: {
                ...g
              },
              to: d,
              ariaLabel: u,
              children: f
            })
          }
          return (0, _.jsx)(L, {
            className: p,
            onClick: o,
            style: {
              ...g
            },
            ariaLabel: u,
            children: f
          })
        },
        D = ({
          buttons: e = [],
          className: a
        }) => e.length ? (0, _.jsx)("div", {
          className: (0, N.default)("rockstargames-modules-core-newswire-articlebbd74dec556da7f5c06710c72c662f8a", a),
          children: e.map(({
            icon: e,
            title: a,
            to: t
          }, r) => a ? (0, _.jsx)(A, {
            icon: e,
            text: a,
            to: t
          }, r) : "")
        }) : null;
      var R = t(43623),
        F = t(76475),
        V = t(82199);
      const $ = (0, t(54472).FF)(),
        G = e => e.some(e => !e),
        O = ({
          condition: e = null,
          children: a
        }) => {
          const [t, r] = (0, u.useState)(!1), s = (e => {
            const [a] = (0, T.useSearchParams)(), [t, r] = (0, u.useState)(null), s = (0, V.useRockstarUser)(), {
              loggedIn: i,
              data: o
            } = s, {
              hasGtaPlus: n
            } = o ?? {};
            return (0, u.useEffect)(() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              $.applyFilters("preview_conditions", e);
              const s = [];
              return e.forEach(e => {
                const {
                  value: r
                } = e;
                if (t) return "true" === a.get(r) ? (s.push(!0), !0) : (s.push(!1), !1);
                if (G(s)) return !1;
                switch (r) {
                  case "user:is:loggedIn":
                    s.push(!0 === i);
                    break;
                  case "user:not:loggedIn":
                    s.push(!1 === i);
                    break;
                  case "user:is:gtaPlus":
                    s.push(!0 === n);
                    break;
                  case "user:not:gtaPlus":
                    s.push(!1 === n || void 0 === n);
                    break;
                  default:
                    s.push(!1)
                }
                return null
              }), r(!G(s)), () => {}
            }, [a, e, n, s, i]), t
          })(e);
          return (0, u.useEffect)(() => {
            r(s)
          }, [s]), (0, u.useMemo)(() => t ? a : null, [t])
        },
        B = (0, g.withTranslations)(({
          children: e
        }) => u.Children.map(u.Children.toArray(e), e => (0, _.jsx)(O, {
          ...e?.props
        })));
      var q = t(42285),
        H = t(38828);
      const U = ({
          className: e
        }) => (0, _.jsxs)("svg", {
          className: e,
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, _.jsx)("path", {
            d: "M3.33203 8.5H12.6654",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, _.jsx)("path", {
            d: "M8 3.83331L12.6667 8.49998L8 13.1666",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }),
        W = {
          actionBlock: "rockstargames-modules-core-newswire-articleb1516576d0566f12c906be9e81407ce4",
          actionFooter: "rockstargames-modules-core-newswire-articlef713e165e153987c3855d93dc1614f4d",
          active: "rockstargames-modules-core-newswire-articleec9f200e6987aebf6375c999eecd5dc3",
          calloutButton: "rockstargames-modules-core-newswire-articleb8ed029eb7d9b09c70caa4576bbb4c5a",
          calloutContainer: "rockstargames-modules-core-newswire-articlee8b19ed9af6aedef68997370cd508539",
          calloutHeader: "rockstargames-modules-core-newswire-articlefb0bbc5bcc4fb2c7d0b8152001df0497",
          calloutHeaderMargins: "rockstargames-modules-core-newswire-articled7d4d815f9e36b62ef54befcc89ca296",
          calloutHeaders: "rockstargames-modules-core-newswire-articlee86d59dd2e0ab3c594c33eccde3e8fea",
          calloutLink: "rockstargames-modules-core-newswire-articlebc07ececd6531f5df1c8cba48c846797",
          calloutLinkIcon: "rockstargames-modules-core-newswire-articledb31e98c20de15e8d5983285bd6ec92e",
          calloutSection: "rockstargames-modules-core-newswire-articleab742f2f5b6947ec0b2facff923a076f",
          calloutSubheader: "rockstargames-modules-core-newswire-articlef5fe27da672cf05e64359ada500a6b7a",
          calloutVoteForm: "rockstargames-modules-core-newswire-articleb5e2fa8800d39c78682d9ce8ce5e53f8",
          downvote: "rockstargames-modules-core-newswire-articleb1953057e462cdf6c79a4b8e6f2fe91b",
          pillBtn: "rockstargames-modules-core-newswire-articlec881ff12d1d9fb612b4ddd89178684e4",
          selected: "rockstargames-modules-core-newswire-articledece7a2abb867cf09add3f7429e7383b",
          upvote: "rockstargames-modules-core-newswire-articlef8d6a685395153161827b5cf8c6ddb93",
          voteButton: "rockstargames-modules-core-newswire-articleecdf609ed8d6c4039be969205b7e3ac0"
        },
        K = ({
          foreign_id: e,
          foreign_type: a
        }) => {
          const {
            track: t
          } = (0, V.useGtmTrack)(), {
            refetch: r
          } = (0, g.useQuery)(H.UserGetVote, {
            skip: !0
          }), [s] = (0, g.useMutation)(H.UserCastVote), [i, o] = (0, u.useState)(null), n = (0, u.useCallback)(r => {
            (async () => {
              if (r === i && null !== i) o(null);
              else {
                o(r), t({
                  event: "cta_" + (r ? "like" : "dislike"),
                  text: `${a} ${e}`
                });
                const i = {
                  foreignId: e,
                  foreignType: a,
                  vote: r
                };
                await s({
                  variables: i
                })
              }
            })()
          }, [e, a, i]);
          return (0, u.useEffect)(() => {
            e && a && (async () => {
              const t = await r({
                foreignId: e,
                foreignType: a
              });
              o(t?.data?.userGetVote?.vote ?? null)
            })()
          }, [e, a]), (0, _.jsxs)("div", {
            className: W.calloutVoteForm,
            children: [(0, _.jsx)("button", {
              "aria-label": "upvote",
              className: [W.upvote, W.voteButton, i ? W.active : ""].join(" "),
              name: "upvote",
              onClick: () => n(!0),
              type: "button"
            }), (0, _.jsx)("button", {
              "aria-label": "downvote",
              className: [W.downvote, W.voteButton, !1 === i ? W.active : ""].join(" "),
              name: "downvote",
              onClick: () => n(!1),
              type: "button"
            })]
          })
        },
        X = ({
          action_text: e,
          link: a,
          trackingData: t
        }) => {
          const {
            track: r
          } = (0, V.useGtmTrack)();
          return (0, _.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, _.jsxs)("button", {
              className: W.calloutLink,
              type: "button",
              onClick: t ? () => r({
                ...t
              }) : () => {},
              children: [e, (0, _.jsx)(U, {
                className: W.calloutLinkIcon
              })]
            })
          })
        },
        Y = ({
          helperText: e,
          linkText: a,
          link: t,
          trackingData: r
        }) => {
          const {
            track: s
          } = (0, V.useGtmTrack)();
          return (0, _.jsxs)("div", {
            className: W.actionFooter,
            children: [e, a && " ", a && (0, _.jsx)("a", {
              href: t ?? "",
              onClick: () => s({
                ...r
              }),
              children: a
            })]
          })
        },
        J = (0, g.withTranslations)(({
          header: e,
          subheader: a,
          type: t,
          action_text: r,
          link: s,
          foreign_id: i = document.location.pathname,
          foreign_type: o = "url",
          className: n = "",
          actionFooterHelperText: c,
          actionFooterLinkText: l,
          actionFooterLink: d,
          trackingData: m = {},
          actionFooterLinkTrackingData: b = {},
          t: p,
          ...f
        }) => {
          const {
            loggedIn: k
          } = (0, V.useRockstarUser)(), {
            track: v
          } = (0, V.useGtmTrack)(), h = document.location.pathname, {
            signInUrl: w
          } = (0, g.useScAuthLinks)(h), {
            ref: y,
            inView: j
          } = (0, q.useInView)({
            threshold: .6
          }), [x, N] = (0, u.useState)(!1);
          let S;
          if ((0, u.useEffect)(() => {
              j && !x && (v({
                event: "page_section_impression",
                element_placement: `callout section - ${f?.sectionName??f?._memoq?.header}`
              }), N(!0))
            }, [j]), !e && !a) return null;
          switch (t) {
            case "vote":
              if (!k) {
                S = (0, _.jsx)(C, {
                  to: w,
                  className: W.calloutButton,
                  onClick: m ? () => v({
                    ...m
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              S = (0, _.jsx)(K, {
                foreign_id: i,
                foreign_type: o
              });
              break;
            case "button":
              r && s && (S = (0, _.jsx)(C, {
                to: s,
                className: W.calloutButton,
                onClick: m ? () => v({
                  ...m
                }) : () => {},
                children: r
              }));
              break;
            case "link":
              r && s && (S = (0, _.jsx)(X, {
                action_text: r,
                link: s,
                trackingData: m
              }));
              break;
            default:
              S = null
          }
          return (0, _.jsx)("div", {
            className: `${W.calloutContainer} ${n||""}`,
            ref: y,
            children: (0, _.jsxs)("div", {
              className: W.calloutSection,
              children: [(0, _.jsxs)("div", {
                className: [W.calloutHeaders, S ? W.calloutHeaderMargins : ""].join(" "),
                children: [e && (0, _.jsx)("h2", {
                  className: W.calloutHeader,
                  children: p(e)
                }), a && (0, _.jsx)("h3", {
                  className: W.calloutSubheader,
                  children: p(a)
                })]
              }), (0, _.jsxs)("div", {
                className: W.actionBlock,
                children: [S, c && (0, _.jsx)(Y, {
                  helperText: c,
                  linkText: l,
                  link: d,
                  trackingData: b
                })]
              })]
            })
          })
        });
      var Z = t(62429),
        Q = t(56386),
        ee = t.n(Q);
      const ae = ({
        isMulti: e,
        allowSelectAll: a,
        label: t,
        miscProps: r
      }) => {
        const [s, i] = (0, u.useState)(""), o = (0, u.useMemo)(() => ee()().getData(), []);
        return (0, _.jsx)(Z.A, {
          unstyled: !0,
          value: s,
          isMulti: e,
          allowSelectAll: a,
          options: o,
          placeholder: t,
          onChange: e => {
            return a = e?.target?.value, void i(a);
            var a
          },
          classNamePrefix: "country-select",
          ...r
        })
      };
      var te = t(31613);
      const re = ({
          cookieName: e,
          cookieValue: a,
          trueComponent: t,
          falseComponent: r
        }) => {
          const s = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                r = a.find(e => e.startsWith(t));
              return r?.substring(t.length, r.length)
            })(e),
            i = new URLSearchParams(window.location.search).get(e);
          return i && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(0,te.F)()}; path=/;`)
          })(e, i), s === a || i === a ? t : r
        },
        se = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg",
        ie = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
        oe = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg",
        ne = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg",
        ce = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg",
        le = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
        de = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
        me = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
        _e = {
          ps: se,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: ie,
          ps5: oe,
          switch: de,
          nintendoswitch: de,
          nintendoswitch2: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7696cbc8ff9dc5f2ed3f618ea7252e3b.svg",
          xbox: ne,
          xboxone: le,
          xboxseriesxs: ce,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: me,
          pcalt: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          netflix: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc13a3a816ffa3f7e379ea32a79f99a3.svg",
          default: ""
        },
        ue = e => _e[e] || null,
        be = {
          applestore: "rockstargames-modules-core-newswire-articlee97115f479fca9697b140bfbfa6534f2",
          border: "rockstargames-modules-core-newswire-articleaab360f8b5cf6965c56e5f86813b8620",
          borderless: "rockstargames-modules-core-newswire-articlecad0684072c4a89cb09b9f79ddda6f38",
          btnContent: "rockstargames-modules-core-newswire-articled4df564f6143ae5909e2bbc95b4a7ebc",
          btnIcon: "rockstargames-modules-core-newswire-articlef7afeacf3abab7856caca9ea1fad81ad",
          "clr-button": "rockstargames-modules-core-newswire-articled4ec60c769b079ac712ea0264480d480",
          cta: "rockstargames-modules-core-newswire-articlea8f295907e9b244767bb48cfc469b480",
          disabled: "rockstargames-modules-core-newswire-articled7a212b6e993966a3773c335359586d5",
          googleplay: "rockstargames-modules-core-newswire-articlead074b742a5ce23c053880b289c2bbe6",
          icon: "rockstargames-modules-core-newswire-articlec394fea7e071f1213a5d44f5b569bd1a",
          "icon-left": "rockstargames-modules-core-newswire-articlec73b838b4f69aff2241b814ad1547c48",
          "icon-right": "rockstargames-modules-core-newswire-articlef0de4560b8a1190f63a65ad1e9fd4e03",
          label: "rockstargames-modules-core-newswire-articled75a0e2af2bf8502f8647015e04e10e1",
          lgMax: "rockstargames-modules-core-newswire-articledf956d5fc70d2129beb1406170402148",
          lgMin: "rockstargames-modules-core-newswire-articlee974b6c740bfac2959d5170bd2d9f3ca",
          netflix: "rockstargames-modules-core-newswire-articled82eca980780ce1b5e831106013dba81",
          nintendoswitch: "rockstargames-modules-core-newswire-articlee646f30d1a0c9990c5178e67be93f75e",
          nintendoswitch2: "rockstargames-modules-core-newswire-articledcdb37a92eeedc0ae18336dd9fb9e39e",
          pc: "rockstargames-modules-core-newswire-articlea1b9c83f518722f01ecb3ece3681c117",
          pillBtn: "rockstargames-modules-core-newswire-articlef39c827be0d560f2cc376d83e3988fbc",
          platformIcon: "rockstargames-modules-core-newswire-articlef25581474e97714bc974f3ab51136511",
          primary: "rockstargames-modules-core-newswire-articlea857266233e524e3bb96d327a2095642",
          ps: "rockstargames-modules-core-newswire-articled439373e74d36689bc159e9a585db184",
          ps4: "rockstargames-modules-core-newswire-articlee49e2b4d44ce7bab7966fbd9fdfb0760",
          ps5: "rockstargames-modules-core-newswire-articlebaa2b83edce86fda2d9dffb2682092f7",
          selected: "rockstargames-modules-core-newswire-articlea63fd127fc0aab231f6740340658d647",
          smMax: "rockstargames-modules-core-newswire-articlefce12fc6343fbf09a5bb418bb8107f0b",
          xbox: "rockstargames-modules-core-newswire-articlecf162a09fdf0c180f3f5091077493d98",
          xboxone: "rockstargames-modules-core-newswire-articlee34e2c7fd3dd88f7e7d46f495c15a98d",
          xboxseriesxs: "rockstargames-modules-core-newswire-articlef5b0bc5e5a291a3ecab7447d33a76e55"
        },
        pe = ({
          platform: e = "",
          altText: a
        }) => {
          const t = e ? ue(e) : null,
            r = t ? (0, _.jsx)("img", {
              className: be.platformIcon,
              src: t,
              alt: a
            }) : null;
          return (0, _.jsx)("span", {
            className: [be.btnContent, be.platformButton].join(" "),
            children: r
          })
        },
        ge = ({
          children: e,
          href: a,
          style: t,
          content: r,
          variant: s = null,
          size: i = "medium",
          icon: o,
          iconPosition: n = "none",
          iconStyle: c,
          badge: l,
          badgeStyle: d,
          platformItem: m,
          platformStyle: b = "border",
          gtm: p = {},
          disabled: f,
          reloadDocument: k = !1,
          className: v,
          role: h = "button"
        }) => {
          const {
            track: w
          } = (0, V.useGtmTrack)(), y = (0, g.useDataLayer)(), j = r ?? e, x = (0, u.useRef)(null), S = (0, g.findPlatform)(m)?.friendlyName, C = "platform" === s, I = (0, u.useMemo)(() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch {
              t = e
            }
            return e === t
          }, [a]), E = (0, u.useCallback)(() => {
            f || w({
              event: "cta_other",
              text: r?.toLowerCase() ?? e ?? void 0,
              ...y,
              ...p,
              link_url: a ?? void 0
            })
          }, [p, a, y]), z = () => o ? (0, _.jsx)("span", {
            className: [be.icon, `icon-${n}`].join(" "),
            style: c,
            children: (0, _.jsx)("img", {
              className: be.btnIcon,
              src: ue(o) || "",
              alt: `${o} icon`
            })
          }) : null, P = () => {
            C && x?.current?.blur()
          };
          return (0, _.jsx)(T.Link, {
            ref: x,
            to: a,
            target: I ? "_self" : "_blank",
            className: (0, N.default)(be.cta, C && m ? be[m] : "", b && be[b], f ? be.disabled : "", v),
            style: t,
            "data-variant": s,
            "data-size": i,
            onClick: E,
            "aria-label": j,
            reloadDocument: k,
            onPointerUp: P,
            onPointerLeave: P,
            role: h,
            children: C && m ? (0, _.jsx)(pe, {
              platform: m,
              altText: S || j
            }) : (0, _.jsxs)("div", {
              className: be.btnContent,
              children: ["left" === n && z(), (0, _.jsx)("span", {
                className: be.label,
                children: j
              }), "right" === n && z(), l ? (0, _.jsx)("span", {
                className: be.badge,
                style: d,
                children: l
              }) : null]
            })
          })
        };
      var fe = t(7912),
        ke = t(9360),
        ve = t(42347);
      const he = (0, u.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          label: t,
          href: r,
          target: s,
          justifySelf: i = "center",
          ...o
        }, n) {
          const c = (0, ve.m)(a, "normal"),
            l = (0, fe.v6)({
              "data-testid": e,
              className: c
            }, o);
          return (0, _.jsx)(ke.Button, {
            ref: n,
            ...l,
            asChild: !0,
            children: (0, _.jsx)(T.Link, {
              to: r,
              target: s,
              style: {
                justifySelf: i
              },
              children: t
            })
          })
        }),
        we = (0, u.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          href: t,
          target: r,
          justifySelf: s = "center",
          ...i
        }, o) {
          const n = (0, ve.m)(a, "normal"),
            c = (0, fe.v6)({
              "data-testid": e,
              className: n
            }, i);
          return (0, _.jsx)(ke.IconButton, {
            ref: o,
            ...c,
            asChild: !0,
            children: (0, _.jsx)(T.Link, {
              to: t,
              target: r,
              style: {
                justifySelf: s
              }
            })
          })
        });
      var ye = t(99872),
        je = t(74508),
        xe = t(66158);
      const Ne = (0, u.forwardRef)((e, a) => {
        const {
          children: t,
          tag: r = "div"
        } = e, s = ye.m[r];
        return (0, _.jsx)(je.F, {
          features: xe.l,
          children: (0, _.jsx)(s, {
            ref: a,
            ...e,
            children: t
          })
        })
      });
      Ne.displayName = "LiteMotion";
      const Se = Ne;
      var Ce = t(56422);
      const Te = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        Ie = {
          ease: "easeIn",
          duration: .4
        },
        Ee = ({
          children: e
        }) => (0, _.jsx)(Ce.P.div, Object.assign({
          className: "rockstargames-modules-core-newswire-articlef38982805188b64825a72d2c5fac938c",
          variants: Te,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: Ie
        }, {
          children: e
        })),
        ze = e => a => (0, _.jsx)(Ee, {
          children: (0, _.jsx)(e, Object.assign({}, a))
        }),
        Pe = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        Le = {
          ease: "easeIn",
          duration: .75
        },
        Me = ({
          children: e
        }) => (0, _.jsx)(Ce.P.div, {
          className: "rockstargames-modules-core-newswire-articlec1ad787ad6429786650325edac0ffe42",
          variants: Pe,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: Le,
          children: e
        }),
        Ae = e => a => (0, _.jsx)(Me, {
          children: (0, _.jsx)(e, {
            ...a
          })
        }),
        De = {
          cardOpen: {
            ease: [.77, 0, .175, 1],
            duration: .5
          },
          afterCardOpen: {
            ease: "easeIn",
            duration: .3,
            delay: .5
          },
          fade: {
            ease: "easeIn",
            duration: .3
          },
          instantFade: {
            duration: .05
          }
        },
        Re = {
          plainCard: {
            expanded: {
              initial: {
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                overflow: "visible auto",
                "overscroll-behavior": "contain",
                "--product-card-pricing-info-opacity": 1,
                "--product-card-pricing-info-padding": "var(--padding-sm)"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                "--product-card-pricing-info-height": 0,
                "--product-card-pricing-info-opacity": 0,
                "--product-card-pricing-info-padding": 0,
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "var(--card-expanded-contents-display-initial)"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            }
          },
          cardWithImageGallery: {
            expanded: {
              initial: {
                overflow: "visible auto",
                "overscroll-behavior": "contain",
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                "--gallery-border": "0 solid transparent"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "none"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            },
            gallery: {
              parent: {
                initial: {
                  gridGap: 0,
                  background: "var(--black-100)"
                },
                animate: {
                  gridGap: "var(--gallery-grid-gap)",
                  background: "var(--black-200)",
                  transitionEnd: {
                    pointerEvents: "all"
                  }
                }
              },
              main: {
                initial: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-initial)",
                  "--swiper-pagination-opacity": 0
                },
                animate: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-animate)",
                  "--swiper-pagination-opacity": 1
                }
              },
              thumbs: {
                initial: {
                  "--thumb-aspect-ratio": "1/0"
                },
                animate: {
                  "--thumb-aspect-ratio": "1/1"
                }
              }
            }
          },
          imageMask: {
            expanded: {
              initial: {
                borderRadius: "var(--border-radius-md)"
              },
              animate: {
                borderRadius: "var(--card-expanded-border-radius)"
              }
            }
          },
          foreground: {
            expanded: {
              initial: {
                width: "100%"
              },
              animate: {
                width: "var(--card-foreground-layer-width-animate)"
              }
            }
          },
          logo: {
            expanded: {
              initial: {
                "--card-logo-top-initial": "2rem",
                "--card-logo-top-animate": "0%"
              },
              animate: {
                "--card-logo-top-initial": "0rem",
                "--card-logo-top-animate": "50%",
                "--card-logo-marginTop-animate": "calc(var(--card-logo-height) * -1)",
                "--card-logo-y-animate-mobile": "-20%",
                height: "calc(var(--card-logo-height) * 2)",
                x: "var(--card-logo-animate-x)"
              },
              hovered: {}
            }
          },
          fade: {
            in: {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              }
            },
            out: {
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              }
            }
          }
        },
        Fe = (e = "imageMask", a = "collapsed") => Re[e][a];
      var Ve = t(17301);
      const $e = ({
          disclaimer: e,
          text: a = null,
          title: t,
          className: r = "",
          style: s = {}
        }) => {
          const i = a ?? e?.text ?? null,
            o = t ? `<h5>${t}</h5>${i}` : i;
          return i ? (0, _.jsx)("div", {
            className: (0, N.default)("rockstargames-modules-core-newswire-articledabdd1de832b01e0bfed17e54d2c48f3", r),
            dangerouslySetInnerHTML: {
              __html: o
            },
            style: s
          }) : null
        },
        Ge = ze(({
          brands: e = [],
          content: a,
          ctas: t = [],
          disclaimer: r,
          image: s,
          large: i = !1,
          title: o,
          image_on_right: n = !1,
          style: c = {},
          className: l = "",
          ...d
        }) => {
          const {
            track: m
          } = (0, V.useGtmTrack)(), {
            ref: b,
            inView: p
          } = (0, q.useInView)({
            threshold: .6
          }), [g, f] = (0, u.useState)(!1), k = (0, Ve.useGetCdnSource)(s?.full_src ?? null) ?? null;
          return (0, u.useEffect)(() => {
            p && !g && (m({
              event: "page_section_impression",
              element_placement: d?._memoq?.title?.toLowerCase()
            }), f(!0))
          }, [p]), (0, _.jsxs)("div", {
            className: (0, N.default)("rockstargames-modules-core-newswire-articlee74584d7bd5e5fb4f95b021aea5552e9", i ? "rockstargames-modules-core-newswire-articleecfb600d2677601c52a9b2ba82ea92a0" : "", n ? "rockstargames-modules-core-newswire-articlec1c30f86159b786afa96b64de61d4581" : "", k ? "" : "rockstargames-modules-core-newswire-articlea66c759349419a25e6ac54202d7fc085", l),
            style: c,
            ref: b,
            children: [k ? (0, _.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlec6a4abbe875f9c0cadd82e5b2b2ad16c",
              style: {
                background: `url(${k}) no-repeat center/cover`
              }
            }) : "", (0, _.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled14a6281007b78ed0259affd98faeada",
              children: [(0, _.jsx)(x, {
                brands: e
              }), (0, _.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlebfdc6a008924ac08afb945e8c501d855",
                children: [(0, _.jsx)("h2", {
                  className: "rockstargames-modules-core-newswire-articlebe9969843594b0b04199cf75f098d91c",
                  children: o
                }), a ? (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleea4015cd0c04b61c6b1f8a4a4a92e337",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                }) : ""]
              }), (0, _.jsx)(D, {
                ctas: t
              }), (0, _.jsx)($e, {
                disclaimer: r
              })]
            })]
          })
        }),
        Oe = {
          bg: "rockstargames-modules-core-newswire-articled1579fc7a24c295dbe890d8aae408666",
          bgDesktop: "rockstargames-modules-core-newswire-articlea2a6f7c576116735efd4216aeff67734",
          bgMobile: "rockstargames-modules-core-newswire-articleea7956f9173046a1ed7292458dfb5b9e",
          imageTextGroupGroup: "rockstargames-modules-core-newswire-articlebde0bad35b79e73435595e8f30e4adfc",
          pillBtn: "rockstargames-modules-core-newswire-articlefa50d8c1862c94f2cd3200103d1d0e69",
          selected: "rockstargames-modules-core-newswire-articlede81b5eeed31c861fe39ee5062dee5a7"
        },
        Be = ({
          bg: e,
          image_text_groups: a = [],
          style: t = {},
          className: r = ""
        }) => {
          const s = (0, Ve.useGetCdnSource)(e?.image?.mobile?.full_src ?? null),
            i = (0, Ve.useGetCdnSource)(e?.image?.desktop?.full_src ?? null) ?? s;
          return a.length ? (0, _.jsxs)("div", {
            className: (0, N.default)(Oe.imageTextGroupGroup, r),
            style: t,
            children: [s ? (0, _.jsx)("div", {
              className: [Oe.bgMobile, Oe.bg].join(" "),
              style: {
                background: `url(${s}) no-repeat center/cover`
              }
            }) : "", i ? (0, _.jsx)("div", {
              className: [Oe.bgDesktop, Oe.bg].join(" "),
              style: {
                background: `url(${i}) no-repeat center/cover`
              }
            }) : "", a.map((e, a) => (0, u.createElement)(Ge, {
              ...e,
              key: a
            }))]
          }) : null
        };
      var qe = t(49516),
        He = t(97990);
      const Ue = "rockstargames-modules-core-newswire-articlea19bcd2b98d91e60c43b9de146e20f4e",
        We = ({
          color: e
        }) => (0, _.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlee83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, _.jsx)("div", {
            className: Ue
          }), (0, _.jsx)("div", {
            className: Ue
          }), (0, _.jsx)("div", {
            className: Ue
          })]
        });
      var Ke = t(44514),
        Xe = t.n(Ke);
      const Ye = {
          dropdownWrapper: "rockstargames-modules-core-newswire-articlebbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-modules-core-newswire-articlea9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-modules-core-newswire-articledf17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-modules-core-newswire-articlecb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-modules-core-newswire-articlefe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        Je = ({
          children: e,
          className: a,
          title: t
        }) => {
          const [r, s] = (0, u.useState)(!1);
          return (0, _.jsx)(Xe(), {
            active: r,
            focusTrapOptions: {
              onDeactivate: () => s(!1),
              clickOutsideDeactivates: !0
            },
            children: (0, _.jsxs)("div", {
              className: [Ye.dropdownWrapper, r ? Ye.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, _.jsx)("button", {
                className: Ye.opener,
                "aria-expanded": r,
                onClick: () => s(!r),
                children: t
              }), r && (0, _.jsx)("div", {
                className: Ye.items,
                onClick: () => s(!1),
                children: e
              })]
            })
          })
        },
        Ze = ({
          children: e,
          context: a = null,
          game: t,
          image: r = {},
          style: s = {},
          template: i = null,
          theme: o = null,
          reversedOnMobile: n = !1,
          className: c = "",
          id: l = null
        }) => {
          const d = (0, Ve.useImageParser)(r ?? {}),
            m = {
              ...s
            };
          if (d?.src?.desktop) {
            const e = (r?.style && r?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              a = (r?.style && r?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              t = `var(--grid-background-position, center)/${e??"cover"}`;
            if (m.background = `url(${d?.src?.desktop}) ${a} ${t}`, r?.style && r?.style["--linear-gradient"]) m.background = `linear-gradient(${r?.style["--linear-gradient"]}), url(${d?.src?.desktop}) ${a} ${t}`;
            else if (r?.style && r?.style["--gradient-height"]) {
              const e = r?.style["--gradient-height"] || "3",
                s = r?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                i = r?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              m.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${i}), url(${d?.src?.desktop}) ${a} ${t}`
            }
          }
          return (0, _.jsx)("div", {
            id: l,
            className: (0, N.default)("rockstargames-modules-core-newswire-articleda87ead760b989fbe90a0b89c60b0653", n ? "rockstargames-modules-core-newswire-articledfbda195073626bc6a7690dc73fba873" : "", c),
            "data-game": "community" === i ? null : t,
            style: (0, g.safeStyles)(m),
            "data-context": a,
            "data-template": i,
            "data-theme": o,
            children: e
          })
        },
        Qe = ({
          caption: e,
          children: a,
          ...t
        }) => e ? (0, _.jsxs)("figure", {
          ...t,
          children: [a, (0, _.jsx)("figcaption", {
            dangerouslySetInnerHTML: {
              __html: e
            }
          })]
        }) : a,
        ea = ({
          componentTitle: e,
          type: a,
          items: t
        }) => t?.length ? (0, _.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleaee2a98f97e777758e2d9bec034314ee",
          type: a,
          children: (0, _.jsxs)(Ze, {
            children: [e && (0, _.jsx)("h3", {
              children: e
            }), (0, _.jsx)(Ze, {
              className: "rockstargames-modules-core-newswire-articledba17b5c55f8d40e2600765f1a60d6af",
              children: t.map((e, a) => {
                return e?.embed ? (0, _.jsx)(Qe, {
                  caption: e?.caption,
                  children: (0, _.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlef0cd8278232673606f9c1715bd4950f6",
                    dangerouslySetInnerHTML: {
                      __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                    }
                  }, `${e?.key??a}_div`)
                }, e?.key ?? a) : e?.text ? (0, _.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: e.text
                  }
                }, e?.key ?? a) : void 0;
                var t
              })
            })]
          })
        }) : null;
      var aa = t(48863);
      const ta = {
          animateBox: "rockstargames-modules-core-newswire-articleb07a3be6338e0ba4b346b072762582e3",
          animateMe: "rockstargames-modules-core-newswire-articlef7adfd0186421cac9ad0b300911cc9af",
          bar: "rockstargames-modules-core-newswire-articlebbb7e636ac00581aed0b7e148916cc11",
          barGrow: "rockstargames-modules-core-newswire-articlee0262d00df9ad8a47b08ae84160bfa51",
          fadeArea: "rockstargames-modules-core-newswire-articlef47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-modules-core-newswire-articlec121e11e40215dc778fe8665eb38845d"
        },
        ra = ({
          children: e,
          style: a
        }) => {
          const t = (0, u.useRef)(null);
          return (0, u.useEffect)(() => {
            new IntersectionObserver(e => {
              e.forEach(e => {
                e.isIntersecting && e.target.classList.add([ta.visible])
              })
            }).observe(t?.current)
          }, []), (0, _.jsx)("div", {
            style: a,
            className: [ta.fadeArea].join(" "),
            ref: t,
            children: e
          })
        };
      var sa = t(40283),
        ia = t(281),
        oa = t(14653);
      class na extends u.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled5c408a8b618087ef4bb452f96526b2b",
            children: [(0, _.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, _.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const ca = (e, a = null, t = !1) => {
        const r = r => (0, _.jsx)(na, {
          header: a,
          hidden: t,
          children: (0, _.jsx)(e, {
            ...r
          })
        });
        return r.displayName = `withSimpleErrorBoundary(${e.displayName||e.name||"Component"})`, r
      };
      var la = t(3018);
      const da = (0, E.defineMessages)({
          carousel_previous_slide_label: {
            id: "carousel_previous_slide_label",
            description: "Aria label for button which select the previous slide",
            defaultMessage: "Previous Slide"
          },
          carousel_next_slide_label: {
            id: "carousel_next_slide_label",
            description: "Aria label for button which select the next slide",
            defaultMessage: "Next Slide"
          }
        }),
        ma = ({
          prevRef: e,
          nextRef: a,
          onNextClicked: t,
          onPrevClicked: r,
          onNextKeyDown: s,
          testId: i
        }) => {
          const {
            formatMessage: o
          } = (0, E.useIntl)();
          return (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleb8d5ef10008331a9f6d3a6bdf1690d01",
            "data-testid": `${i}-controls`,
            children: [(0, _.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlec38cd500d52d07bd012e288dc0b4f635",
              ref: e,
              onClick: r,
              "aria-label": o(da.carousel_previous_slide_label)
            }), (0, _.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articleb24ada0f7959966c6d950567eaaafce2",
              ref: a,
              onClick: t,
              onKeyDown: s,
              "aria-label": o(da.carousel_next_slide_label)
            })]
          })
        },
        _a = ca((0, la.g)(({
          description: e,
          slideChildren: a,
          size: t,
          title: r,
          name: s,
          customSlidesPerView: i = null,
          customSpaceBetween: o = null,
          slideClass: n,
          style: c,
          className: l,
          cardSizeBreakpoints: d,
          customAspectRatio: m,
          titleBadge: b,
          theme: p
        }) => {
          const {
            track: g
          } = (0, V.useGtmTrack)(), f = (0, u.useRef)(null), k = (0, u.useRef)(null), v = (0, u.useRef)(null), [h, w] = (0, u.useState)(null), [y, j] = (0, u.useState)(!1), [x, S] = (0, u.useState)(null), [C, T] = (0, u.useState)(), [I, E] = (0, u.useState)(), {
            ref: z,
            inView: P
          } = (0, q.useInView)({
            threshold: .6
          }), [L, M] = (0, u.useState)(!1), [A, D] = (0, u.useState)(null), [R, F] = (0, u.useState)(!1), [$, G] = (0, u.useState)(0), [O, B] = (0, u.useState)(0);
          (0, u.useEffect)(() => {
            const e = () => {
              F(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, u.useEffect)(() => {
            const e = () => {
              C && !(0, sa.isEmpty)(C) && C?.height > 0 && C?.height !== $ && G(C?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [C]);
          const H = {
            0: {
              spaceBetween: o ?? 16
            },
            1024: {
              spaceBetween: o ?? 18
            },
            1920: {
              spaceBetween: o ?? 20
            },
            2560: {
              spaceBetween: o ?? 22
            }
          };
          (0, u.useEffect)(() => {
            if (!f.current) return;
            const e = () => {
              if (f.current) {
                const e = i || Number(window.getComputedStyle(f.current).getPropertyValue("--slides-per-view")),
                  a = i ? 1 : Number(window.getComputedStyle(f.current).getPropertyValue("--slides-per-view-multiplier"));
                S(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [f, i]), (0, u.useEffect)(() => {
            if (!a) return;
            let e = !1;
            a.forEach(a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, D(a))
            }), M(e);
            const t = a.map((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && R ? null : (0, _.jsx)(oa.qr, {
              className: "rockstargames-modules-core-newswire-articlead67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => K(a),
              children: e
            }, e.key));
            w(t)
          }, [a, R]), (0, u.useEffect)(() => {
            E({
              nextEl: v.current,
              prevEl: k.current
            })
          }, [v, k]), (0, u.useEffect)(() => {
            P && !y && a && (g({
              event: "page_section_impression",
              element_placement: (s || r).toLowerCase()
            }), j(!0))
          }, [P, a]);
          let U = "custom" === t ? {
            "--custom-aspect-ratio": m,
            ...c
          } : {
            ...c
          };
          const W = 0 !== $ ? `${$}px` : "100%";
          U = {
            ...U,
            "--carousel-cards-height": W,
            "--carousel-nav-opacity": O
          };
          const K = e => {
              C?.slideTo(e)
            },
            X = `${r.trim().toLowerCase().replace(/\s+/g,"-")}-deck`;
          return (0, _.jsxs)("section", {
            "aria-label": r,
            className: (0, N.default)("rockstargames-modules-core-newswire-articlef20b52f7c3f9003cd00811a47a04bf10", l),
            "data-size": t,
            "data-testid": X,
            "data-sm": d?.sm ? d?.sm : t,
            "data-md": d?.md ? d?.md : t,
            "data-lg": d?.lg ? d?.lg : t,
            "data-xl": d?.xl ? d?.xl : t,
            "data-xxl": d?.xxl ? d?.xxl : t,
            "data-has-covercard": L,
            "data-new-carousel-nav": !0,
            id: `${r}-carousel`,
            "data-theme": p,
            ref: f,
            style: U,
            children: [(0, _.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleaeafe767d91d07fab61f307b5bbffeef",
              ref: z
            }), L && R && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articledef6705cfe82c4e562f3c71c78bc5248",
              children: A
            }), (0, _.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb093fac5b0d056a4a00f34d0418c6577",
              children: (0, _.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articledcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, _.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articleb83b41754b7e9ac95c806264014db990",
                  children: [!L && r && (0, _.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec8e04a547988dacbae8960776862f15f",
                    children: [(0, _.jsx)("h2", {
                      children: r
                    }), b && (0, _.jsx)("span", {
                      className: "rockstargames-modules-core-newswire-articlec3de2db74771fdba023cc2b11b216955",
                      children: b
                    })]
                  }), (0, _.jsx)(ma, {
                    prevRef: k,
                    nextRef: v,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = C?.slides[C?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    title: r,
                    theme: p
                  })]
                }), e && (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: e
                  }
                })]
              })
            }), x ? (0, _.jsx)(oa.RC, {
              slidesPerView: x,
              onInit: e => {
                T(e);
                const a = setInterval(() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (G(t), B(1), clearInterval(a))
                }, 500)
              },
              grabCursor: !0,
              navigation: I,
              modules: [ia.A],
              breakpoints: H,
              slideClass: (0, N.default)("swiper-slide", n),
              onSlideNextTransitionEnd: () => {
                g({
                  event: "carousel_next",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                g({
                  event: "carousel_previous",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                g({
                  event: "carousel_swipe",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              children: h
            }) : ""]
          })
        }), null),
        ua = {
          visible: {
            opacity: 1,
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75,
              when: "beforeChildren",
              delayChildren: .25,
              staggerChildren: .1
            }
          },
          hidden: {
            opacity: 0
          }
        },
        ba = {
          visible: {
            opacity: 1,
            y: 0,
            height: "100%",
            overflow: "hidden",
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75
            }
          },
          hidden: {
            opacity: 0,
            y: 100,
            height: "0%",
            overflow: "hidden"
          }
        },
        pa = {
          background: "rockstargames-modules-core-newswire-articlec8c90210c344650ad11d2d97258dcaab",
          btnText: "rockstargames-modules-core-newswire-articlee8ca7c699fe44c30cf4e542ee8b22119",
          buttonGroup: "rockstargames-modules-core-newswire-articleb8a0dc337c7ea835340f88b0f6d14822",
          content: "rockstargames-modules-core-newswire-articlee4bb4024fb4b167423f58e02e471bf5e",
          ctaBlock: "rockstargames-modules-core-newswire-articlec3f1f785f5adb5cfcbf93195e21521e6",
          descriptions: "rockstargames-modules-core-newswire-articlea54e628f4898aed20e45ad8a5e39af7f",
          gradient: "rockstargames-modules-core-newswire-articled074051a93eac66cd56c616c8ccd4c91",
          hero: "rockstargames-modules-core-newswire-articledccb6453f49a8e81c4ec407c39df4c79",
          images: "rockstargames-modules-core-newswire-articled5fdc650fc4f2f7441ce7c563ae9653e",
          layered: "rockstargames-modules-core-newswire-articlec58f0111e3765dc6116481764d0431d0",
          legalText: "rockstargames-modules-core-newswire-articlebdbadc8b5ef295a4122905fffdde18f6",
          pillBtn: "rockstargames-modules-core-newswire-articleb89f190ffa4d32a33304ffa4b5ff73df",
          primaryBtn: "rockstargames-modules-core-newswire-articled273ee25efe0a98d789db801a1a18e97",
          secondaryBtn: "rockstargames-modules-core-newswire-articleaf112e1264860cebe9be5f542d47ec27",
          selected: "rockstargames-modules-core-newswire-articleb5c12cc9810c7b3774102378f71714a1",
          shardsCarousel: "rockstargames-modules-core-newswire-articlecd8c6fbe5139a661c2e52e9df726ca78",
          verticalCtaBlock: "rockstargames-modules-core-newswire-articlede8ee9092175484396cd56d19aec7cbd"
        },
        ga = ({
          title: e = "",
          mobileImg: a,
          desktopImg: t
        }) => {
          const r = (0, Ve.useGetCdnSource)(a ?? null),
            s = (0, Ve.useGetCdnSource)(t ?? r);
          return (0, _.jsx)("div", {
            className: pa.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${s})`
            },
            children: (0, _.jsx)("h5", {
              children: e
            })
          })
        },
        fa = ({
          title: e = "Membership Rewards",
          name: a = "Membership Rewards",
          shards: t
        }) => {
          const [r, s] = (0, u.useState)(null);
          return (0, u.useEffect)(() => {
            t && s(t.reduce((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: r
              } = a, {
                mobile: s,
                desktop: i
              } = r;
              return e.push((0, _.jsx)(ga, {
                title: t,
                mobileImg: s?.full_src,
                desktopImg: i?.full_src
              })), e
            }, []))
          }, [t]), r ? (0, _.jsx)("div", {
            className: pa.shardsCarousel,
            children: (0, _.jsx)(_a, {
              title: e,
              name: a,
              slideChildren: r,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ka = ({
          animated: e = !1,
          ctas: a = [],
          expandingButtonLabel: t = "Subscribe"
        }) => {
          const [r, s] = (0, u.useState)([]), [i, o] = (0, u.useState)([]);
          return (0, u.useEffect)(() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: t
            } = a.reduce((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }) : e.plainButtonsArray.push({
              icon: a.platform ?? "",
              title: a.buttonText,
              to: a.href
            }), e), {
              expandingButtonsArray: [],
              plainButtonsArray: []
            });
            s(e), o(t)
          }, [a]), r.length ? (0, _.jsx)(Ce.P.div, {
            variants: e ? ba : void 0,
            children: (0, _.jsx)(aa.A, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: r,
              children: !!i.length && (0, _.jsx)(Ce.P.div, {
                variants: ba,
                children: (0, _.jsx)(D, {
                  buttons: i,
                  className: pa.buttonGroup
                })
              })
            })
          }) : (0, _.jsx)(_.Fragment, {
            children: !!i.length && (0, _.jsx)(Ce.P.div, {
              variants: ba,
              children: (0, _.jsx)(D, {
                buttons: i,
                className: pa.buttonGroup
              })
            })
          })
        },
        va = ({
          animated: e = !1,
          brands: a = [],
          cta: t = [],
          ctas: r = [],
          description: s = "",
          expandingButtonLabel: i = "Subscribe",
          legalText: o,
          stackButtons: n,
          title: c = ""
        }) => (0, _.jsxs)(Ce.P.div, {
          className: pa.content,
          initial: "hidden",
          animate: "visible",
          variants: e ? ua : void 0,
          children: [(0, _.jsx)(Ce.P.div, {
            variants: e ? ba : void 0,
            children: (0, _.jsx)(x, {
              brands: a
            })
          }), (c || s) && (0, _.jsxs)(Ce.P.div, {
            className: pa.descriptions,
            variants: e ? ba : void 0,
            children: [c && (0, _.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: c
              }
            }), s && (0, _.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          }), !!t.length && (0, _.jsx)("div", {
            className: n ? pa.verticalCtaBlock : pa.ctaBlock,
            children: (0, _.jsx)(Ve.TinaParser, {
              components: {
                Cta: ge,
                ExpandingPlatformButton: aa.A
              },
              tina: {
                payload: {
                  content: t
                }
              }
            })
          }), !!r.length && (0, _.jsx)("div", {
            className: pa.ctaBlock,
            children: (0, _.jsx)(ka, {
              animated: e,
              ctas: r,
              expandingButtonLabel: i
            })
          }), o && (0, _.jsx)(Ce.P.div, {
            className: pa.legalText,
            variants: e ? ba : void 0,
            children: (0, _.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: o
              }
            })
          })]
        }),
        ha = ({
          animated: e = !1,
          backgroundImage: a,
          brands: t = [],
          className: r,
          ctas: s = [],
          cta: i,
          description: o = "",
          expandingButtonLabel: n = "Subscribe",
          layeredImage: c,
          layeredImageSettings: l,
          legalText: d,
          shardsSection: m,
          stackButtons: b = !1,
          theme: p = "gen9",
          title: f = ""
        }) => {
          const {
            breakpoints: k,
            windowWidth: v
          } = (0, g.useWindowResize)(), h = k.xxl.min, w = (e => {
            if (!e) return null;
            const a = {},
              t = new Map([
                ["xsmall", "xs"],
                ["small", "sm"],
                ["medium", "md"],
                ["large", "lg"],
                ["xlarge", "xl"],
                ["horizontal", "--layered-horizontal-offset-"],
                ["vertical", "--layered-vertical-offset-"],
                ["imageWidth", "--layered-image-width-"]
              ]);
            return Object.entries(e).forEach(e => {
              const [r, s] = e;
              if (t.has(r)) {
                const e = t.get(r);
                Object.entries(s).forEach(s => {
                  const [i, o] = s;
                  if (t.has(r) && t.has(i)) {
                    const r = `${t.get(i)}${e}`;
                    a[r] = "imageWidth" !== i ? o ? `${o}px` : "0px" : o ? `${o}vw` : "100vw"
                  }
                })
              }
            }), a
          })(l), y = (0, Ve.useGetCdnSource)(a?.mobile?.full_src ?? null), j = (0, Ve.useGetCdnSource)(a?.desktop?.full_src ?? y), x = (0, Ve.useGetCdnSource)(c?.mobile?.full_src ?? null), S = (0, Ve.useGetCdnSource)(c?.desktop?.full_src ?? x), C = (0, u.useMemo)(() => {
            const {
              mobileStyle: e,
              desktopStyle: t,
              style: r
            } = a ?? {};
            return {
              ...r,
              ...v >= h ? (0, g.safeStyles)(t) : (0, g.safeStyles)(e)
            }
          }, [v, a?.style, a?.mobileStyle, a?.desktopStyle]);
          return (0, _.jsxs)(Ce.P.div, {
            className: (0, N.default)(pa.hero, r),
            style: {
              "--background-image-desktop": `url(${j})`,
              "--background-image-mobile": `url(${y})`,
              "--layered-image-desktop": `url(${S})`,
              "--layered-image-mobile": `url(${x})`
            },
            initial: "hidden",
            animate: "visible",
            variants: e ? ua : void 0,
            "data-type": "hero",
            theme: p,
            children: [(0, _.jsxs)("div", {
              className: pa.images,
              children: [j && y ? (0, _.jsx)("div", {
                className: pa.background,
                style: C ?? {}
              }) : "", x && S ? (0, _.jsx)("div", {
                className: pa.layered,
                style: l ? w : {}
              }) : "", (0, _.jsx)("div", {
                className: pa.gradient
              })]
            }), (0, _.jsx)(va, {
              animated: e,
              brands: t,
              cta: i,
              ctas: s,
              description: o,
              expandingButtonLabel: n,
              legalText: d,
              stackButtons: b,
              title: f
            }), m?.shards && (0, _.jsx)(fa, {
              shards: m.shards
            })]
          })
        },
        wa = ({
          attributes: e = {},
          children: a,
          className: t = "",
          id: r = "",
          style: s = {}
        }) => {
          const {
            hash: i
          } = (0, T.useLocation)();
          return (0, u.useLayoutEffect)(() => {
            const e = document.getElementById(r);
            e && i.includes(r) && e.scrollIntoView({
              behavior: "instant",
              block: "start"
            })
          }, []), (0, _.jsx)("span", {
            className: (0, N.default)(t, e?.className, "rockstargames-modules-core-newswire-articlec650a7a1e761d6a9f2d6ce1cd8d6f330"),
            id: r,
            style: (0, g.safeStyles)(s ?? e?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: (0, sa.unescape)(a)
            }
          })
        };
      var ya = t(62012);
      const ja = {
          "bg-img": "rockstargames-modules-core-newswire-articleae25e5bf6793a5522c791028f396dedd",
          border: "rockstargames-modules-core-newswire-articleaf6154339558ed7e6e46014575250492",
          "bottom-y": "rockstargames-modules-core-newswire-articled66e5203a7bd3c85b99e6caef49b2e9b",
          "center-x": "rockstargames-modules-core-newswire-articlecc06519a4a0d2db824b70a425c8cefd6",
          "center-y": "rockstargames-modules-core-newswire-articled6ce82f1bd5cbf6b4abe650a2738c723",
          contain: "rockstargames-modules-core-newswire-articlec409c9fefffbfffd091f81bdd75ab8a6",
          cover: "rockstargames-modules-core-newswire-articlea72cf62465acbddecc3a2cb256640fac",
          dual: "rockstargames-modules-core-newswire-articleb9c969b033c5016f95d5a70ceea22071",
          fill: "rockstargames-modules-core-newswire-articlec12eb7986b09f10158c48ad4a902f2ef",
          "hero-lg": "rockstargames-modules-core-newswire-articleb722bba74c792beb73ccdfec4506b591",
          "hero-md": "rockstargames-modules-core-newswire-articlec6b26605a3817704bbf427741edb98f8",
          "hero-sm": "rockstargames-modules-core-newswire-articlee7b70cd5245ee850b5a2bfd048fa02c4",
          imageLayer: "rockstargames-modules-core-newswire-articlea63d213c123e7da5863c6256e847eb0f",
          "layer-lg-height": "rockstargames-modules-core-newswire-articlea206e14a6e055900c30ee67826330173",
          "layer-lg-width": "rockstargames-modules-core-newswire-articlefb58e41629b31453b12d8bbcc525608f",
          "layer-md-height": "rockstargames-modules-core-newswire-articlee2a2cf239dc64e006fdc9c2c3d280b8e",
          "layer-md-width": "rockstargames-modules-core-newswire-articlef1d2c109e21746d5fa00c85e56e61b10",
          "layer-sm-height": "rockstargames-modules-core-newswire-articlec947fc08bb64674c4bf0429e7914507e",
          "layer-sm-width": "rockstargames-modules-core-newswire-articlea1289245dc6b1854c3aec5b1a8a11593",
          "layer-xl-height": "rockstargames-modules-core-newswire-articlea4d21457b55a0626d1cf5170845ba8d6",
          "layer-xl-width": "rockstargames-modules-core-newswire-articlee5ecbec181677eea6c9c72e02580c501",
          "layer-xs-height": "rockstargames-modules-core-newswire-articled0f6abd48b388b8e3b18eee4bc19039d",
          "layer-xs-width": "rockstargames-modules-core-newswire-articlec60b1a515049d3f670d8c5a76c8a1bf6",
          "layer-xxl-height": "rockstargames-modules-core-newswire-articled74cf249eb57fb6682f07fe13fdfdb4a",
          "layer-xxl-width": "rockstargames-modules-core-newswire-articleac03c56e2475aecafc08e873eed26566",
          layeredImage: "rockstargames-modules-core-newswire-articlefb27e7361e78dacdcf500e0b9a2b4fce",
          layersWrapper: "rockstargames-modules-core-newswire-articleaf169afca6f741daca0331a1b13fa5f1",
          "left-x": "rockstargames-modules-core-newswire-articlebb4dd9e1570a80cc01f752a2230abdac",
          "right-x": "rockstargames-modules-core-newswire-articled50c0c4bee9b09502dd611543223ed37",
          shards: "rockstargames-modules-core-newswire-articlea0d1e1b5705f11b3b9301717bc5f6245",
          shards_three: "rockstargames-modules-core-newswire-articlecf01ef76b0d5cc2a7bc4f005be4eb31f",
          shards_two: "rockstargames-modules-core-newswire-articlef317b17c9b0f0a27ed95ec2844857f25",
          "top-y": "rockstargames-modules-core-newswire-articlea9cd0a03e7193a5b47c6e767e045a1ec"
        },
        xa = ({
          style: e,
          className: a
        }) => {
          const t = {
              ...e
            },
            r = e["--border-image-source"],
            s = (0, Ve.useGetCdnSource)(r || null);
          return r && (t["--border-image-source"] = `url(${s})`), (0, _.jsx)("div", {
            className: (0, N.default)(ja.border, a),
            style: {
              ...t
            }
          })
        },
        Na = e => e?.images ? (0, _.jsx)("div", {
          className: (0, N.default)(ja.layeredImage, ja[e?.variantClass], ja[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, _.jsxs)("div", {
            className: ja.layersWrapper,
            children: [e?.images?.map((e, a) => {
              const {
                image: t,
                paddingClass: r,
                imageSizeClass: s,
                objectFitClass: i,
                positionClassX: o,
                positionClassY: n,
                zIndex: c,
                className: l,
                style: d,
                alt: m,
                displayClass: u
              } = e;
              return (0, _.jsx)(ya.A, {
                image: t,
                style: {
                  zIndex: c ?? a + 1
                },
                imageStyle: d,
                className: (0, N.default)(l, u, ja.imageLayer, ja[r], ja[s], ja[i], ja[o], ja[n]),
                alt: m
              }, c ?? a + 1)
            }), e?.borderImage && (0, _.jsx)(xa, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        Sa = e => {
          const {
            image: a,
            alt: t,
            thumbnail: r,
            caption: s,
            style: i,
            showOpenButtonMobile: o,
            showOpenButton: n,
            showDownloadButtonMobile: c,
            showDownloadButton: l,
            showZoomControls: d
          } = e, m = (0, g.useLocale)(), {
            isMobile: u
          } = (0, g.useWindowResize)(), b = a?.sources ?? {}, p = r?.image?.sources ?? {}, f = (0, Ve.useGetCdnSource)(b?.[m] ?? b?.en_us) ?? "", k = (0, Ve.useGetCdnSource)(p?.[m] ?? p?.en_us) ?? f, v = u ? o : n, h = u ? c : l;
          return (0, _.jsx)("div", {
            style: i,
            className: "rockstargames-modules-core-newswire-articleadbaa0167219cd891249a29faec00e8f",
            children: (0, _.jsxs)(ke.Lightbox.Root, {
              altText: t || "",
              children: [(0, _.jsxs)(ke.Lightbox.Trigger, {
                className: "rockstargames-modules-core-newswire-articled769ad0525fc8e1ea83ce616ce6959bb",
                style: {
                  aspectRatio: r?.thumbnailAspectRatio
                },
                children: [(0, _.jsx)(ke.Lightbox.Thumbnail, {
                  src: k,
                  style: {
                    objectPosition: r?.thumbnailPosition
                  }
                }), v && (0, _.jsx)(ke.Lightbox.OpenIcon, {
                  style: {
                    boxSizing: "content-box"
                  }
                })]
              }), (0, _.jsxs)(ke.Lightbox.Portal, {
                children: [(0, _.jsx)(ke.Lightbox.Overlay, {}), (0, _.jsxs)(ke.Lightbox.Content, {
                  children: [(0, _.jsx)(ke.Lightbox.ZoomPan, {
                    children: (0, _.jsx)(ke.Lightbox.Image, {
                      src: f
                    })
                  }), (0, _.jsxs)(ke.Lightbox.Controls, {
                    children: [s && (0, _.jsx)(ke.Lightbox.Caption, {
                      children: s
                    }), (0, _.jsx)(ke.Lightbox.Close, {
                      showTooltip: !1
                    }), d && (0, _.jsx)(ke.Lightbox.Zoom, {}), h && (0, _.jsx)(ke.Lightbox.Download, {})]
                  })]
                })]
              })]
            })
          })
        };
      var Ca = t(98769);
      const Ta = {
          animatePlaceholder: "rockstargames-modules-core-newswire-articlef6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-modules-core-newswire-articlec3684b80c99c860036d9337843a7be58",
          multiSourceContainer: "rockstargames-modules-core-newswire-articlea99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-modules-core-newswire-articlebc42c525ec0bd93df46e1999e278e9fb",
          pillBtn: "rockstargames-modules-core-newswire-articlec79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-modules-core-newswire-articlec53675ad15e2ef662362850daab33791"
        },
        Ia = ({
          imageUrl: e,
          className: a,
          alt: t,
          style: r,
          lazy: s = !1,
          decoding: i = "auto",
          sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
        }) => {
          const [n, c] = (0, u.useState)(!1);
          return (0, _.jsxs)("div", {
            className: Ta.multiSourceContainer,
            children: [!n && (0, _.jsx)("img", {
              className: [a, Ta.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, _.jsx)("img", {
              className: [Ta.multiSourceImage, a].join(" "),
              src: `${e}?im=Resize=1920`,
              srcSet: (l = e, o.map(e => `${l}?im=Resize=${e} ${e}w`).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                c(!0)
              },
              loading: s ? "lazy" : "eager",
              decoding: i
            })]
          });
          var l
        },
        Ea = ({
          button: e,
          closeDialog: a,
          style: t = "primary"
        }) => {
          const {
            buttonIcon: r,
            buttonText: s,
            extraClasses: i,
            isDisabled: o,
            isLink: n,
            link: c,
            onClick: l,
            testId: d
          } = e;
          return n ? s && (0, _.jsx)(ke.Button, {
            asChild: !0,
            appearance: t,
            size: "LG",
            children: (0, _.jsx)("a", {
              href: c,
              ...d && {
                "data-testid": d
              },
              children: s
            })
          }) : (0, _.jsx)(ke.Button, {
            autoFocus: !0,
            iconRight: r,
            className: (0, N.default)(i),
            isDisabled: o,
            onPress: e => (e => {
              l && l(), a && a(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: t,
            size: "LG",
            "aria-label": s,
            ...d && {
              "data-testid": d
            },
            children: s
          })
        },
        za = {
          actions: "rockstargames-modules-core-newswire-articled35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-modules-core-newswire-articleb63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-modules-core-newswire-articleefe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-modules-core-newswire-articled2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-modules-core-newswire-articlef654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-modules-core-newswire-articlee30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-modules-core-newswire-articledab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-modules-core-newswire-articlebc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-modules-core-newswire-articleb120386c4c2485c587f87173721d63be",
          message: "rockstargames-modules-core-newswire-articlef7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-modules-core-newswire-articleb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-modules-core-newswire-articlea6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-modules-core-newswire-articleb2b3117a07a11b3ec5897e4718e24373"
        },
        Pa = ({
          icon: e,
          title: a,
          secondaryText: t,
          buttons: r,
          showDialog: s,
          onClose: i = () => {},
          closeOnOutsideClick: o = !0,
          extraClasses: n
        }) => {
          const c = (0, u.useRef)(null),
            {
              setBodyIsLocked: l
            } = (0, g.useBodyScrollable)("AlertDialog");
          (0, u.useEffect)(() => {
            s && c?.current && (c.current?.showModal?.(), l(!0))
          }, [s]);
          const d = () => {
            l(!1), i(), c.current?.close?.()
          };
          if (s) return (0, _.jsxs)("dialog", {
            ref: c,
            className: za.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && o && (l(!1), i(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, _.jsx)("i", {
              className: [za.icon, za[e]].join(" ")
            }), (0, _.jsxs)("div", {
              className: [za.content, n?.content].join(" "),
              children: [(0, _.jsx)("h3", {
                className: [za.heading, n?.heading].join(" "),
                children: a
              }), t && (0, _.jsx)("div", {
                className: [za.message, n?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), r && (0, _.jsx)("div", {
              className: za.actions,
              children: r.slice(0, 2).map((e, a) => (0, _.jsx)(Ea, {
                style: e?.style ?? (0 === a ? "primary" : "secondary"),
                button: e,
                closeDialog: d
              }, e.buttonText))
            })]
          })
        };
      var La = t(56433);
      const Ma = {
          tag: "rockstargames-modules-core-newswire-articleb660bb706132d84852c02df01cc6ed5a"
        },
        Aa = ({
          className: e,
          href: a,
          title: t,
          style: r
        }) => {
          const s = (0, _.jsxs)("div", {
            style: r,
            className: [Ma.tag, e].join(" "),
            children: [(0, _.jsx)("i", {}), t]
          });
          return void 0 !== a ? (0, _.jsx)(m.A, {
            to: a,
            children: s
          }) : s
        },
        Da = {
          info: "rockstargames-modules-core-newswire-articleea1c51ae745531c2aeabbe3fcf603842",
          newswireBlock: "rockstargames-modules-core-newswire-articleb394b56c31488c36155ca82090c66e6f",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-newswire-articlec06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-modules-core-newswire-articleca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-modules-core-newswire-articleb3d4a8cfcc371ae39ce6220d009c5954",
          startAnimation: "rockstargames-modules-core-newswire-articlea56af3c95449fe8452485dfb6c89fc29",
          title: "rockstargames-modules-core-newswire-articlef1dfe59c3d981dbe132559620885ecea",
          top: "rockstargames-modules-core-newswire-articleeee9c5d3b714a61ac265369800a6d4e0"
        },
        Ra = ({
          section: e = "",
          index: a,
          post: t,
          noSpecialOrder: r = !1,
          focused: s
        }) => {
          const {
            track: i
          } = (0, V.useGtmTrack)(), [o] = (0, T.useSearchParams)(), n = t.preview_images_parsed.newswire_block, c = (0, La.Ub)(fe.fi.mobile), l = {
            default: 0 !== a || r ? n.square || n.d16x9 || n._fallback : n.d16x9 || n.square || n._fallback,
            mobile: n.square || n._fallback
          }, [d] = (0, g.usePreloadImg)(l.default), b = {
            default: {
              backgroundImage: `url(${l.default})`
            },
            mobile: {
              backgroundImage: `url(${l.mobile})`
            }
          }, p = (0, u.useCallback)(() => {
            i({
              event: "card_click",
              card_id: t.id,
              card_name: t.name_slug.replace(/-/g, " "),
              link_url: t.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }, [t]);
          return (0, _.jsx)(m.A, {
            to: t.url,
            className: [Da.newswireBlock, r ? Da.newswireBlockNoSpecialOrder : "", null !== d ? Da.startAnimation : ""].join(" "),
            focused: s,
            onClick: p,
            children: (0, _.jsxs)(_.Fragment, {
              children: [0 !== a || o.get("tag_id") ? (0, _.jsx)("div", {
                className: Da.preview,
                style: b.default
              }) : (0, _.jsx)("div", {
                className: c ? Da.previewMobile : Da.preview,
                style: c ? b.mobile : b.default
              }), (0, _.jsxs)("div", {
                className: Da.info,
                children: [(0, _.jsxs)("div", {
                  className: Da.top,
                  children: [t.primary_tags.length ? (0, _.jsx)(Aa, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, _.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, _.jsx)("h5", {
                  className: Da.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Fa = t(97984),
        Va = t.n(Fa);
      const $a = (0, g.withTranslations)(({
          section: e = "",
          relativeTo: a = "",
          tagId: t = null,
          metaUrl: r = "/newswire",
          t: s
        }) => {
          const i = (0, g.useLocale)(),
            {
              track: o
            } = (0, V.useGtmTrack)(),
            [n, c] = (0, T.useSearchParams)(),
            {
              tagId: l = null
            } = (0, T.useParams)(),
            [d, m] = (0, u.useState)(l ?? t ?? n.get("tag_id")),
            [b, p] = (0, u.useState)(1),
            [f, k] = (0, u.useState)(20),
            [v, h] = (0, u.useState)([]),
            [w, y] = (0, u.useState)(null),
            [j, {
              loading: x,
              data: N
            }] = (0, g.useLazyQuery)(Va(), {
              variables: {
                tagId: Number(d),
                page: b,
                metaUrl: r,
                limit: f,
                locale: i
              }
            });
          return (0, u.useEffect)(() => {
            p(1), h([]), k(20), m(l ?? t ?? n.get("tag_id")), j()
          }, [n.get("tag_id"), l, t]), (0, u.useEffect)(() => {
            const e = v;
            N?.posts?.paging && y(N?.posts?.paging), N?.posts?.results && h(e.concat(N?.posts?.results))
          }, [N]), (0, u.useEffect)(() => {
            (() => {
              const e = n.get("page"),
                a = Number(e ?? 1);
              k(20 * a), j()
            })()
          }, []), v.length ? (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee81cdae3d47ce0490795e6588b3c8464",
            "data-testid": "newswire-list",
            children: [(0, _.jsx)(qa, {
              section: e,
              posts: v,
              relativeTo: a,
              noSpecialOrder: null !== d
            }), null !== w && w.nextPage ? (0, _.jsx)(C, {
              className: "rockstargames-modules-core-newswire-articlee125d510192feb4ce2844cb97084b838",
              "data-testid": "more-stories",
              onClick: () => {
                const e = n.get("page"),
                  a = Number(e ?? b) + 1;
                p(a), 20 !== f && k(20), j(), c({
                  page: String(a),
                  ...d && {
                    tag_id: String(d)
                  }
                }, {
                  replace: !0
                }), o({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: x,
              context: "secondary",
              children: s("More Stories")
            }) : ""]
          }) : null
        }),
        Ga = {
          just1post: "rockstargames-modules-core-newswire-articled46374473ed68a4121f88b44eba06359",
          pillBtn: "rockstargames-modules-core-newswire-articlef2d003dd0e6a129a56ea07208548787c",
          posts: "rockstargames-modules-core-newswire-articlecfe09d4dc8447b1e606404300d040e7a",
          related: "rockstargames-modules-core-newswire-articleb8a63bb419c1f2a8f94e099e1e650e48",
          selected: "rockstargames-modules-core-newswire-articlef94728c4a438800b9abab11a8b3e3c0a"
        },
        Oa = (0, g.withTranslations)(({
          posts: e,
          t: a
        }) => (0, _.jsxs)("section", {
          className: Ga.related,
          children: [(0, _.jsx)("h2", {
            children: a("Related Stories")
          }), (0, _.jsx)("div", {
            className: [Ga.posts, 1 === e.length ? Ga.just1post : ""].join(" "),
            children: e.map(e => (0, _.jsx)(Ra, {
              noSpecialOrder: !0,
              post: e
            }, e.id))
          })]
        })),
        Ba = {
          newswireBlocks: "rockstargames-modules-core-newswire-articleea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-modules-core-newswire-articled301334a72b626f8cc2f5b9733299e76"
        },
        qa = (0, g.withGtmTracking)(({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: t,
          gtmTrack: r
        }) => {
          const [s, i] = (0, u.useState)(null);
          return (0, u.useEffect)(() => {
            if (!t.length) return;
            const a = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            t.map((t, r) => {
              a.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: r + 1,
                list: e
              })
            }), r(a), i(t.length)
          }, [t.length]), (0, _.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Ba.newswireBlocks, a ? Ba.noSpecialOrder : "", Ba.contextHome].join(" "),
            children: t.map((t, r) => (0, _.jsx)(Ra, {
              section: e,
              index: r,
              noSpecialOrder: a,
              post: t,
              focused: r === s
            }, t.id))
          })
        });
      var Ha = t(91681),
        Ua = t.n(Ha);
      const Wa = {
          blue: "rockstargames-modules-core-newswire-articlebffe0939bda9e26ad14f6b01669338a8",
          custom: "rockstargames-modules-core-newswire-articlecc2c26a3dd80cf9db62c4c7f389b7859",
          darkBlue: "rockstargames-modules-core-newswire-articlee2b6f722952b5d61d2a3b725166bfc9b",
          darkRed: "rockstargames-modules-core-newswire-articled44e2fc53f269ccf2b8fbe032ef6cec9",
          goldenrod: "rockstargames-modules-core-newswire-articlea365c5895cfd6c9f94fc994d71ba402c",
          green: "rockstargames-modules-core-newswire-articlef9c1eebf59650cd8ee84191d8fc62874",
          grid: "rockstargames-modules-core-newswire-articlebe627ae18a7bd3cff72d3f11aeed67df",
          gtao: "rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc",
          gtaplus: "rockstargames-modules-core-newswire-articlefbf343ed03c1bd513ea4cadc9726af76",
          hotPink: "rockstargames-modules-core-newswire-articleedb9998d6516a5aa1aece9c07c1768be",
          itemList: "rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992",
          noImg: "rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3",
          pillBtn: "rockstargames-modules-core-newswire-articlec1ed14af6fceaba7c99728a81676dd92",
          purple: "rockstargames-modules-core-newswire-articlee61db4af0805bb4c9bf820c26ac8a85f",
          rdo: "rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13",
          red: "rockstargames-modules-core-newswire-articlef674d6037f10af1a1fe41a83c1e5da17",
          selected: "rockstargames-modules-core-newswire-articlee49b5a5fd4ab934ece172fffe9f6577e",
          skull: "rockstargames-modules-core-newswire-articleb2a1c0b367b250fe0606dffece9e1c02",
          teal: "rockstargames-modules-core-newswire-articlea379d41268f4f002d5ac257f67461f1d",
          turquoise: "rockstargames-modules-core-newswire-articlee211b0b8ae00897d696af259b3ddd837",
          yellow: "rockstargames-modules-core-newswire-articlece372826eac3cc73094d69c0c5d9a530"
        },
        {
          sanitize: Ka
        } = Ua(),
        Xa = ({
          list: e,
          string: a,
          starColor: t,
          style: r,
          className: s,
          game: i,
          noImg: o,
          columns: n,
          mobileColumns: c
        }) => {
          const [l, d] = (0, u.useState)(null);
          if ((0, u.useEffect)(() => {
              d(e)
            }, [e]), !a && !e) return null;
          const m = {
            color: r?.color
          };
          return delete r?.color, n && l ? (0, _.jsx)("div", {
            className: Wa.grid,
            style: {
              "--ordered-list-grid-column": n,
              "--ordered-list-grid-column-mobile": c ?? n
            },
            children: (0, _.jsx)("ol", {
              className: (0, N.default)(Wa.itemList, Wa.noImg, Wa[t], Wa[i]),
              style: (0, g.safeStyles)(r),
              children: l.map(e => (0, _.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Ka(e.content)
                },
                style: m
              }, e.content))
            })
          }) : (0, _.jsx)("ol", {
            style: (0, g.safeStyles)(r),
            className: (0, N.default)(Wa.itemList, Wa.custom, o ? Wa.noImg : "", t ? Wa[t] : "", i ? Wa[i] : "", s ?? ""),
            children: e.map(e => (0, _.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Ka(e?.content ?? e)
              }
            }, e?.content))
          })
        },
        Ya = "rockstargames-modules-core-newswire-articleb013d77f453d7053bbcf06f173ff326c",
        Ja = ({
          children: e,
          data: a,
          onPageUpdate: t,
          page: r,
          className: s
        }) => (0, _.jsx)("a", {
          href: "#",
          className: r === a.page ? `rockstargames-modules-core-newswire-articleb577d5726806ec872ecdb8a46905734f ${s??""}` : "",
          onClick: e => {
            e.preventDefault(), t(r)
          },
          children: e
        }),
        Za = ({
          data: e,
          onPageUpdate: a,
          className: t
        }) => {
          if (1 === e.pageCount) return null;
          const r = new Array(Math.min(e.pageCount, 8)),
            s = Math.max(e.pageCount - 8, 1),
            i = Math.max(2, e.page - 4),
            o = Array.from(r, (e, a) => a + Math.min(s, i));
          return (0, _.jsxs)("div", {
            className: `rockstargames-modules-core-newswire-articlee480f25872ae2a8b3fcd1e492d838301 ${t??""}`,
            children: [e.pageCount > 8 ? (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(Ja, {
                data: e,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== o[0] ? (0, _.jsx)("div", {
                className: Ya,
                children: "..."
              }) : ""]
            }) : "", o.map(r => (0, _.jsx)(Ja, {
              data: e,
              onPageUpdate: a,
              page: r,
              className: t,
              children: r
            }, r)), e.pageCount > 8 ? (0, _.jsxs)(_.Fragment, {
              children: [o.slice(-1)[0] + 1 < e.pageCount ? (0, _.jsx)("div", {
                className: Ya,
                children: "..."
              }) : "", (0, _.jsx)(Ja, {
                data: e,
                onPageUpdate: a,
                page: e.pageCount,
                children: e.pageCount
              })]
            }) : ""]
          })
        };
      var Qa = t(14143);
      const et = ({
          children: e
        }) => {
          const {
            parallaxController: a
          } = (0, Qa.as)();
          return (0, u.useLayoutEffect)(() => {
            if (!a) return;
            const e = setInterval(() => {
              a.update()
            }, 500);
            return () => clearInterval(e)
          }, [a]), e
        },
        at = {
          large: "rockstargames-modules-core-newswire-articlee15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-modules-core-newswire-articledfdaa6f63f8e8bd10576fa2debcbc1fc",
          parallaxWrapper: "rockstargames-modules-core-newswire-articlee30c08cf0e042f7fc7bed0c23c0bfb31",
          small: "rockstargames-modules-core-newswire-articlec32a973dbc862a43cc5d4a2aac19ed9b"
        },
        tt = ({
          scrollAxis: e = "vertical",
          size: a = "",
          style: t = {},
          children: r
        }) => (0, _.jsx)(Qa.zE, {
          scrollAxis: e,
          children: (0, _.jsx)(et, {
            children: (0, _.jsx)("div", {
              className: (0, N.default)(at.parallaxWrapper, at[a]),
              style: t,
              "data-context": "parallax-wrapper",
              children: r ? r.map((a, t) => (0, u.cloneElement)(a, {
                scrollAxis: e,
                style: {
                  ...a?.props?.style,
                  zIndex: t
                }
              })) : (0, _.jsx)("div", {})
            })
          })
        }),
        rt = ({
          layers: e = [],
          displayClass: a = "",
          style: t = {}
        }) => {
          const r = (0, Ve.useGenerateCdnSource)();
          if (!e || !e[0]?.image) return null;
          const s = e.map(e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: r(e?.image ?? null)
          }));
          return (0, _.jsx)(Qa.y, {
            className: (0, N.default)("rockstargames-modules-core-newswire-articlec1c689cf47230fa80bccc9b20515d4fa", a),
            layers: s,
            style: t
          })
        },
        st = "rockstargames-modules-core-newswire-articleae8bfc3f9a519606a95144e64ee454b5",
        it = ({
          minOffset: e = 0,
          maxOffset: a = 0,
          scrollAxis: t = "vertical",
          displayClass: r = "",
          style: s = {},
          children: i
        }) => "horizontal" === t ? (0, _.jsx)(Qa.kQ, {
          x: [e, a],
          className: (0, N.default)(st, r),
          styleOuter: s,
          children: i
        }) : (0, _.jsx)(Qa.kQ, {
          y: [e, a],
          className: (0, N.default)(st, r),
          styleOuter: s,
          children: i
        }),
        ot = {
          gradient: "rockstargames-modules-core-newswire-articleb78d3c0bdc9668bb3d318825467177ab",
          left: "rockstargames-modules-core-newswire-articlef4448b69feb648b8b910230c6f873dbd",
          pillBtn: "rockstargames-modules-core-newswire-articleb12cdd53cc59cb42903d11d9fdceca7f",
          promoModule: "rockstargames-modules-core-newswire-articleeabbb5f24c40ef994b612515a0d0f356",
          promoModuleContentContainer: "rockstargames-modules-core-newswire-articleef7d758b0d1515fcebe6cb22271a4688",
          promoModuleImage: "rockstargames-modules-core-newswire-articleb8584eedfbe5a91aaf72c40ec1d619a5",
          promoModuleTextContent: "rockstargames-modules-core-newswire-articleb590150a7ac01a01a493b85b7ea5cf90",
          promoModuleWrapper: "rockstargames-modules-core-newswire-articlede25220583bb9220882329a113f7a5e2",
          right: "rockstargames-modules-core-newswire-articleb69bb02f1c00007e9b4eab8217e2f08e",
          selected: "rockstargames-modules-core-newswire-articlee03b475da5ca3ded74e8c6dfd54fb476"
        },
        nt = {
          alt: "",
          sources: {}
        },
        ct = ({
          backgroundColor: e,
          brands: a = [],
          description: t = "",
          ctaLabel: r,
          ctaLink: s = "https://rockstargames.com",
          gradient: i = !0,
          image: o,
          promoImg: n = nt,
          imageOrientation: c = "right",
          title: l = "",
          name: d = "",
          style: m,
          imageStyle: b,
          _memoq: p
        }) => {
          const [f, k] = (0, u.useState)(!1), {
            ref: v,
            inView: h
          } = (0, q.useInView)({
            threshold: .6
          }), {
            isMobile: w
          } = (0, g.useWindowResize)(), {
            track: y
          } = (0, V.useGtmTrack)(), j = (0, Ve.useImageParser)(n), N = (0, Ve.useGetCdnSource)(o), S = w ? j?.src?.mobile : j?.src?.desktop, C = j?.alt ?? "", T = {
            ...m,
            "--promo-background": e ?? "var(--black-200)",
            "--promo-image": `url(${S??N??"var(--promo-background)"})`,
            "--promo-order": "left" === c ? "row" : "row-reverse"
          }, I = {
            ...b
          };
          return (0, u.useEffect)(() => {
            h && !f && (y({
              event: "page_section_impression",
              element_placement: d?.toLowerCase()
            }), k(!0))
          }, [h]), (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)("div", {
              className: ot.promoModuleWrapper,
              children: (0, _.jsxs)(Ce.P.div, {
                className: ot.promoModule,
                style: {
                  ...T
                },
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  ease: "easeIn",
                  duration: .4
                },
                ref: v,
                children: [(0, _.jsx)("div", {
                  role: "img",
                  "aria-label": C,
                  className: [ot.promoModuleImage, i ? ot.gradient : "", "left" === c ? ot.left : ot.right].join(" "),
                  style: {
                    ...I
                  }
                }), (0, _.jsxs)("div", {
                  className: ot.promoModuleContentContainer,
                  children: [(0, _.jsx)(x, {
                    brands: a
                  }), (0, _.jsxs)("div", {
                    className: ot.promoModuleTextContent,
                    children: [l && (0, _.jsx)("h3", {
                      children: l
                    }), t && (0, _.jsx)("p", {
                      children: t
                    })]
                  }), r && (0, _.jsx)(A, {
                    to: s,
                    text: r,
                    onClick: () => {
                      y({
                        event: "cta_learn",
                        element_placement: "promo module",
                        link_url: s,
                        text: p?.ctaLabel?.toLowerCase()
                      })
                    }
                  })]
                })]
              })
            })
          })
        },
        lt = {
          rating: "rockstargames-modules-core-newswire-articlec3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-modules-core-newswire-articlebabdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-modules-core-newswire-articleb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-modules-core-newswire-articleb6339480b5fd086fb0c025930bfb7dcd"
        },
        dt = (0, E.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var mt = t(88256);
      (0, g.importAll)(t(36672));
      const _t = ca((0, la.g)(({
          descriptors: e = null,
          footer: a = null,
          href: r,
          img: s = null,
          titleSlug: i = null,
          style: o = {},
          className: n
        }) => {
          const [c, l] = (0, u.useState)(!1), {
            inView: d
          } = (0, q.useInView)({
            threshold: .6
          }), [b, p] = (0, u.useState)({
            ratingDescriptors: e,
            ratingFooter: a,
            ratingImg: s,
            ratingUrl: r
          }), {
            track: f
          } = (0, V.useGtmTrack)(), k = (0, E.useIntl)(), {
            data: v
          } = (0, g.useQuery)(mt.GameData, {
            variables: {
              titleSlug: i
            },
            skip: !i
          });
          if ((0, u.useEffect)(() => {
              v && p(v?.game)
            }, [v]), (0, u.useEffect)(() => {
              d && !c && b.ratingImg && (f({
                event: "page_section_impression",
                element_placement: "rating"
              }), l(!0))
            }, [d]), !b.ratingImg) return null;
          const h = !!b.ratingDescriptors;
          return (0, _.jsxs)("div", {
            className: [lt.rating, h ? lt.withDescriptors : lt.withOutDescriptors, n || ""].join(" "),
            style: (0, g.safeStyles)(o),
            "data-testid": "rating",
            children: [(0, _.jsx)(m.A, {
              to: b.ratingUrl,
              target: "_blank",
              children: (0, _.jsx)("img", {
                alt: k.formatMessage(dt.components_ratings_link_alt, {
                  rating: (w = b.ratingImg, w.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: t(8194)(`./${b.ratingImg}`)
              })
            }), h && (0, _.jsxs)("div", {
              className: lt.text,
              children: [(0, _.jsx)("p", {
                className: lt.descriptors,
                dangerouslySetInnerHTML: {
                  __html: b?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), b.ratingFooter && (0, _.jsx)("hr", {}), b.ratingFooter && (0, _.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: b.ratingFooter.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var w
        })),
        ut = {
          responsiveFlexBox: "rockstargames-modules-core-newswire-articlefad65f02dd0ee292c36ec9d50b9c249a",
          responsiveFlexItem: "rockstargames-modules-core-newswire-articlef5215494f66727858110c9c73e2d882a",
          responsiveImage: "rockstargames-modules-core-newswire-articled437a700a9b768227a114e70db78af03"
        },
        bt = ({
          children: e,
          className: a,
          style: t
        }) => (0, _.jsx)("div", {
          className: [ut.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        pt = {
          responsiveFlexItem: "rockstargames-modules-core-newswire-articlee7371144db2e94a049204d4b178416ec"
        },
        gt = ({
          children: e,
          className: a,
          style: t
        }) => (0, _.jsx)("div", {
          className: [pt.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        ft = {
          responsiveGridBox: "rockstargames-modules-core-newswire-articlee9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-modules-core-newswire-articleb0d14e4a5e63a903117e93a392cbfb53"
        },
        kt = ({
          children: e,
          cols: a,
          className: t,
          rows: r,
          style: s
        }) => {
          const i = s ? {
            ...s
          } : {};
          return void 0 !== a && (i.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== r && (i.gridTemplateRows = `repeat(${r}, 1fr)`), (0, _.jsx)("div", {
            className: [ft.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: i,
            children: e
          })
        },
        vt = {
          responsiveGridBox: "rockstargames-modules-core-newswire-articlee721a07d53edbb90b165a7720bb32c08",
          responsiveGridItem: "rockstargames-modules-core-newswire-articlea32d93b6ae982b5ad473f75cf86ff085"
        },
        ht = ({
          children: e,
          className: a,
          style: t
        }) => (0, _.jsx)("div", {
          className: [vt.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        wt = {
          responsiveImage: "rockstargames-modules-core-newswire-articlef642b754e0efd503262ab7ca0c7b9f5b"
        },
        yt = ({
          src: e,
          className: a = "",
          animate: t,
          ariaLabel: r,
          style: s = {}
        }) => {
          const [i, o] = (0, g.usePreloadImg)(e);
          if (!i) return null;
          s.backgroundImage = `url(${e})`;
          const n = {
            ...s
          };
          return o && (n["--aspect-ratio"] = o.width / o.height), (0, _.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [wt.responsiveImage, t ? wt.animateBox : "", a].join(" "),
            style: n
          })
        },
        jt = {
          maxWidth: "rockstargames-modules-core-newswire-articleb2c8f49e280c2e7c204b30a4af8c13b9",
          responsiveSection: "rockstargames-modules-core-newswire-articlebd7167fb3a3edaf4df4d9a576efb1170"
        },
        xt = ({
          children: e,
          className: a,
          style: t,
          maxWidth: r
        }) => (0, _.jsx)("section", {
          className: [jt.responsiveSection, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: r ? (0, _.jsx)("div", {
            className: jt.maxWidth,
            children: e
          }) : e
        }),
        Nt = ({
          disableLink: e,
          className: a,
          "data-testid": t
        }) => {
          const r = e ? "span" : m.A;
          return (0, _.jsx)(r, {
            className: [e ? "rockstargames-modules-core-newswire-articleb28a6ee32abeb20049b97677a86a4314" : "rockstargames-modules-core-newswire-articlea3d920a1139575706b914bc3a0100970", a || ""].join(" "),
            "data-testid": t,
            alt: "Rockstar Games Home",
            ...!e && {
              to: "/"
            }
          })
        };
      var St = t(50182);
      const Ct = ({
          html: e
        }) => (0, _.jsx)("div", {
          children: (0, St.Ay)(e)
        }),
        Tt = ({
          thresholds: e,
          onThresholdReached: a,
          children: t
        }) => {
          const [r, s] = (0, u.useState)([]), [i, o] = (0, u.useState)(new Set);
          return (0, u.useEffect)(() => {
            const a = Array.from(new Set(e));
            a.sort((e, a) => e - a), s(a)
          }, [e]), (0, _.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [r.map(e => (0, _.jsx)(q.InView, {
              threshold: e,
              onChange: t => ((e, t) => {
                e && !i.has(t) && o(e => {
                  const s = new Set(e);
                  return r.forEach(e => {
                    e <= t && !s.has(e) && (s.add(e), a(e))
                  }), s
                })
              })(t, e),
              triggerOnce: !0,
              children: ({
                ref: a
              }) => (0, _.jsx)("div", {
                ref: a,
                style: {
                  height: "1px",
                  position: "absolute",
                  top: 100 * e + "%"
                }
              })
            }, e)), t]
          })
        },
        It = () => {
          const {
            pathname: e
          } = (0, T.useLocation)();
          return (0, u.useEffect)(() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout(() => {
              e.scrollTop = 0
            }, 0)
          }, [e]), null
        },
        Et = (e = [], a, t) => {
          const r = (0, u.useRef)(null),
            s = (0, u.useRef)(new Set),
            i = (0, u.useRef)([]),
            o = (0, u.useRef)(0),
            n = (0, u.useRef)(0),
            c = (0, u.useRef)(!1),
            l = (0, u.useMemo)(() => Array.from(new Set(e.filter(e => e >= 0 && e <= 100))).sort((e, a) => e - a), [e]);
          return (0, u.useEffect)(() => {
            s.current = new Set, i.current = l.slice()
          }, [l]), (0, u.useEffect)(() => {
            r.current = t ?? window
          }, [t]), (0, u.useEffect)(() => {
            const e = r.current;
            if (!e) return;
            const l = () => {
              c.current || (c.current = !0, requestAnimationFrame(() => {
                (() => {
                  const {
                    scrollTop: r,
                    scrollHeight: c,
                    percent: d
                  } = (() => {
                    const e = t,
                      a = document.documentElement,
                      r = document.body,
                      s = e ? e.scrollTop : a.scrollTop || r.scrollTop || window.scrollY || 0,
                      i = e ? e.scrollHeight : a.scrollHeight || r.scrollHeight || 0,
                      o = e ? e.clientHeight : a.clientHeight || window.innerHeight || 0,
                      n = Math.max(1, i - o);
                    return {
                      scrollTop: s,
                      scrollHeight: i,
                      percent: Math.max(0, Math.min(100, s / n * 100))
                    }
                  })();
                  o.current = d, n.current = r;
                  const m = i.current.find(e => d >= e);
                  if (!m) return;
                  if (s.current.has(m)) return;
                  s.current.add(m), i.current = i.current.filter(e => e !== m);
                  const _ = c * (m / 100);
                  a?.({
                    scrollY: m,
                    scrollLength: _
                  }), 0 === i.current.length && e.removeEventListener("scroll", l, {
                    capture: !1
                  })
                })(), c.current = !1
              }))
            };
            return l(), e.addEventListener("scroll", l, {
              passive: !0
            }), () => {
              e.removeEventListener("scroll", l, {
                capture: !1
              })
            }
          }, [a, t, l.join(",")]), {
            scrollY: o.current,
            scrollLength: n.current
          }
        },
        zt = ({
          threshold: e,
          trackRef: a,
          children: t
        }) => {
          const {
            track: r
          } = (0, V.useGtmTrack)();
          return Et(e, ({
            scrollY: e,
            scrollLength: a
          }) => {
            r({
              event: "page_scroll",
              scroll_depth: e,
              page_length: `${Math.round(a)}px`
            })
          }, a?.current ?? null), t
        },
        Pt = (0, g.withTranslations)(({
          t: e
        }) => {
          const [a] = (0, u.useState)(""), t = (0, T.useNavigate)(), r = (0, g.useMutateState)();
          return (0, _.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-core-newswire-articlec9f16d9c2f4a943ae8f1f900f31b5f4b",
            onSubmit: e => {
              e.preventDefault(), r({
                navOpen: !1
              }), document.activeElement?.blur?.();
              const a = e.currentTarget.elements.namedItem("q").value;
              t(`/search?q=${a}`)
            },
            role: "search",
            children: [(0, _.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, _.jsx)("input", {
              autoComplete: "off",
              defaultValue: a,
              enterKeyHint: "search",
              name: "q",
              placeholder: e("Search Rockstar Games")
            })]
          })
        });
      var Lt = t(51299);
      const Mt = ({
        children: e
      }) => (0, _.jsx)("div", {
        className: "rockstargames-modules-core-newswire-articleaae4d33d1eecebdc9b489f8d7a1ad708",
        children: (0, _.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlec573fe5c7bdcc46c4d57ec4a2c275e3b",
          children: e
        })
      });
      var At = t(45742);
      const Dt = (0, E.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            description: "Tracklist",
            defaultMessage: "Tracklist"
          }
        }),
        Rt = {
          bodySmall: "rockstargames-modules-core-newswire-articledeed018133fca0148d0bf72fbe95bcd6"
        },
        Ft = ({
          track: e,
          artist: a
        }) => (0, _.jsxs)("div", {
          className: Rt.track,
          children: [(0, _.jsx)("p", {
            children: e
          }), (0, _.jsx)("p", {
            className: Rt.bodySmall,
            children: a
          })]
        }),
        Vt = (0, la.g)(({
          content: e = []
        }) => (0, _.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlee2587587f57e43c9ca90d1e16e4a6ca6",
          children: [(0, _.jsx)("h4", {
            className: "rockstargames-modules-core-newswire-articleef167f82b058360b2b6a3466ca73d7de",
            children: (0, _.jsx)(E.FormattedMessage, {
              ...Dt.components_track_list_title
            })
          }), (0, _.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlebeaa4a0a8d9f3a6ef20ee517f222a3c2",
            children: (0, _.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlec06a65e90847e8b44df20f2aceb57038",
              children: e?.map(e => (0, _.jsx)(Ft, {
                track: e.track,
                artist: e.artist
              }, e.key))
            })
          })]
        }));
      var $t = t(75027),
        Gt = t(84220),
        Ot = t(31147);
      const Bt = "rockstargames-modules-core-newswire-articleb7d3d1587271986440f5870d8d02eb3b",
        qt = "rockstargames-modules-core-newswire-articlefcffcc6e594fbf9a4a6e9ab5a8d034c7",
        Ht = {
          0: {
            spaceBetween: 8
          },
          768: {
            spaceBetween: 16
          },
          1024: {
            spaceBetween: 18
          },
          1920: {
            spaceBetween: 20
          },
          2560: {
            spaceBetween: 22
          }
        },
        Ut = ({
          title: e = "thumbnail gallery",
          thumbsPerView: a = 3,
          loop: t = !1,
          navigation: r = !1,
          slideChildren: s = [],
          variants: i = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          },
          transition: o = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          }
        }) => {
          const {
            track: n
          } = (0, V.useGtmTrack)(), [c, l] = (0, u.useState)([$t.A, Gt.A, Ot.A]), [d, m] = (0, u.useState)(null), [b, p] = (0, u.useState)(null);
          return (0, u.useEffect)(() => {
            const e = [$t.A, Gt.A, Ot.A];
            r && e.push(ia.A), l(e)
          }, [r]), (0, u.useEffect)(() => {
            if (!s) return;
            const e = s.map((e, a) => (0, _.jsx)(oa.qr, {
              children: e
            }, Symbol(a).toString()));
            p(e)
          }, [s]), b ? (0, _.jsxs)(Ce.P.div, {
            className: "rockstargames-modules-core-newswire-articlef2d55de974817e455a162843125a8771",
            variants: i.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, _.jsx)(Ce.P.div, {
              className: Bt,
              variants: i.main,
              transition: o.main,
              initial: "initial",
              animate: "animate",
              children: (0, _.jsx)(oa.RC, {
                loop: t,
                navigation: r,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: d
                },
                modules: c,
                breakpoints: Ht,
                className: Bt,
                onSlideNextTransitionEnd: () => {
                  n({
                    event: "carousel_next",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  n({
                    event: "carousel_previous",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  n({
                    event: "carousel_swipe",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                children: b
              })
            }), (0, _.jsx)(Ce.P.div, {
              className: qt,
              variants: i.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, _.jsx)(oa.RC, {
                threshold: 50,
                onSwiper: m,
                loop: t,
                breakpoints: Ht,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: c,
                className: qt,
                children: b
              })
            })]
          }) : null
        };
      var Wt = t(64727),
        Kt = t(70067);
      const Xt = {
          gen9Hero: () => (0, _.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleee796fcf55787f1dd1af025b1ec9d6b8",
            children: (0, _.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articled2e785bbf2071e806cee23e58d1a3b53",
              children: (0, _.jsx)(Kt.A, {
                type: "SPINNING"
              })
            })
          })
        },
        Yt = ({
          name: e
        }) => {
          const a = (e => e ? e.trim() : "")(e),
            t = Xt[a];
          return t ? (0, _.jsx)(t, {}) : null
        },
        Jt = ({
          id: e = null,
          ids: a = null,
          setTitleDataPath: t = null,
          sync: r = !1
        }) => {
          const s = a ?? [e],
            {
              data: i
            } = (0, g.useQuery)(Wt.TinaModulesInfo, {
              variables: {
                ids: s,
                sync: r
              },
              setTitleDataPath: t,
              skip: !s.length
            });
          return i?.tinaModulesInfo ?? null
        },
        Zt = ca(({
          components: e = {},
          id: a = null,
          ids: t = null,
          skeleton: r = null
        }) => {
          const s = Jt({
              id: a,
              ids: t
            }),
            i = s?.[0]?.tina;
          return i ? (0, _.jsx)(_.Fragment, {
            children: s.map(({
              tina: a
            }, t) => (0, _.jsx)(Ve.TinaParser, {
              components: e,
              tina: a,
              componentProps: {
                tinaModulesInfo: s
              }
            }, t))
          }) : r ? (0, _.jsx)(Yt, {
            name: r
          }) : null
        }, {
          header: null
        }),
        Qt = ({
          children: e,
          style: a,
          theme: t
        }) => {
          const [r, s] = (0, u.useState)(t);
          return (0, u.useEffect)(() => {
            t && s(t)
          }, [t]), (0, _.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlee5e0faf6ab9871fd60b958c6f7dcf519",
            style: a,
            "data-theme": r,
            children: e
          })
        };
      var er = t(49852),
        ar = t(99948);
      const tr = {
          downVote: "rockstargames-modules-core-newswire-articlee23b13b0d0be49814d3770c10365c096",
          info: "rockstargames-modules-core-newswire-articlecee10f330f3ac6fba73fc06ac99bc951",
          loggedOutButtons: "rockstargames-modules-core-newswire-articlec393b8f2d3b5b3e9204881ae6ff0fdc5",
          pillBtn: "rockstargames-modules-core-newswire-articlea0626acfa0dbdfdfd4f40b93134ac915",
          selected: "rockstargames-modules-core-newswire-articlede6015fb35bdee07192c1656ba4893e3",
          upVote: "rockstargames-modules-core-newswire-articleb3be682e82659d45f93c2fe63ccd73ba",
          userVote: "rockstargames-modules-core-newswire-articleb32a59a8a63c53cc278266d726c9c5da",
          voteButtonActive: "rockstargames-modules-core-newswire-articlef9e46f58f97d2b391aaf715861654cd7",
          voteButtons: "rockstargames-modules-core-newswire-articledda673f7473820d8884c017373c780f6",
          voteContent: "rockstargames-modules-core-newswire-articleaad01ad44bcc6161ad363910e931515f"
        },
        rr = ({
          description: e,
          foreign_id: a = document.location.pathname,
          foreign_type: t = "url",
          title: r
        }) => {
          const {
            track: s
          } = (0, V.useGtmTrack)(), {
            loggedIn: i
          } = (0, V.useRockstarUser)(), {
            refetch: o
          } = (0, g.useQuery)(ar.UserGetVote, {
            skip: !0
          }), [n] = (0, g.useMutation)(ar.UserCastVote), [c, l] = (0, u.useState)(null), d = (0, u.useCallback)(async e => {
            s({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${t} ${a}`
            });
            const r = {
                foreign_id: a,
                foreign_type: t,
                vote: e
              },
              i = await n({
                variables: r
              });
            l(i?.data?.userCastVote?.vote ?? null)
          }, [a, t]);
          return (0, u.useEffect)(() => {
            (async () => {
              if (!i || !a || !t) return;
              const e = await o({
                foreign_id: a,
                foreign_type: t
              });
              l(e?.data?.userGetVote?.vote ?? null)
            })()
          }, [a, t, i]), (0, _.jsx)("div", {
            className: tr.userVote,
            children: (0, _.jsxs)("div", {
              className: tr.voteContent,
              children: [(0, _.jsxs)("div", {
                className: tr.info,
                children: [(0, _.jsx)("h3", {
                  children: r
                }), (0, _.jsx)("p", {
                  children: e
                })]
              }), (0, _.jsxs)("div", {
                className: [tr.voteButtons, i ? "" : tr.loggedOutButtons].join(" "),
                children: [(0, _.jsx)("button", {
                  onClick: () => d(!0),
                  className: [tr.upVote, c ? tr.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, _.jsx)("button", {
                  className: [tr.downVote, !1 === c ? tr.voteButtonActive : ""].join(" "),
                  onClick: () => d(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        sr = {
          card: "rockstargames-modules-core-newswire-articlef93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-modules-core-newswire-articlea1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-modules-core-newswire-articledabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-modules-core-newswire-articlefd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-modules-core-newswire-articleb8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-modules-core-newswire-articlefd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-modules-core-newswire-articlea626ad482ff0be0336e75929516654d5"
        },
        ir = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [r] = (0, g.usePreloadImg)(t());
          return (0, _.jsx)("div", {
            className: [sr.screencap, r ? sr.screencapLoaded : ""].join(" "),
            "aria-hidden": "true",
            role: "img",
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        or = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: r,
          toExplicit: s
        }) => {
          const i = s ?? `/videos/${t.id}`,
            o = {
              className: sr.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            n = (0, _.jsxs)("div", {
              className: sr.card,
              children: [(0, _.jsx)(ir, {
                video: t,
                size: r
              }), (0, _.jsxs)("div", {
                className: sr.info,
                children: [e ? (0, _.jsx)("div", {
                  className: sr.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, _.jsx)("h5", {
                  className: sr.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, _.jsx)("a", {
            href: i,
            target: "_blank",
            ...o,
            children: n
          }) : (0, _.jsx)(m.A, {
            to: i,
            ...o,
            children: n
          })
        },
        nr = {
          active: "rockstargames-modules-core-newswire-articlee35688e0d87409e3aef95ffb624d94f4",
          carousel: "rockstargames-modules-core-newswire-articlebc3f1abaac4c17c0e9aaac5fccfc6f7e",
          cta: "rockstargames-modules-core-newswire-articlef40c40ed1bc4242a32bc0628eea34048",
          disableClick: "rockstargames-modules-core-newswire-articlefcd11cd5895147a9e08f8f4026d68d94",
          dots: "rockstargames-modules-core-newswire-articlee0ca3ed410818f0961345606a96f03ee",
          dragging: "rockstargames-modules-core-newswire-articleb335b03fce6834b86318f3d7cbf3fab6",
          gameTitle: "rockstargames-modules-core-newswire-articleb5d3df350466b14e4b419bdb479b4064",
          info: "rockstargames-modules-core-newswire-articlea4057ef942e10ebeedb1370b08c3c32b",
          items: "rockstargames-modules-core-newswire-articled30be9a5f31ff7fabf20969eec3200f1",
          slidesContent: "rockstargames-modules-core-newswire-articlec4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-modules-core-newswire-articlecdb5c063bfc35cfbaaaefc68a77c1b07",
          title: "rockstargames-modules-core-newswire-articlee66c271fbbc8b6e431fc5d466c57479c",
          track: "rockstargames-modules-core-newswire-articleefe7112432da76c65f293853b4c942d1",
          videoTitle: "rockstargames-modules-core-newswire-articleed4138b1e7fecd4b6d29f0e1bef1fdfd"
        },
        cr = (0, E.defineMessages)({
          learn_more: {
            id: "carousel_learn_more",
            description: "Carousel learn more button text",
            defaultMessage: "Learn More"
          },
          watch_more: {
            id: "carousel_watch_more",
            description: "Carousel watch more button text",
            defaultMessage: "Watch Now"
          },
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        lr = (0, la.g)(({
          videos: e
        }) => {
          const a = (0, g.useLocale)(),
            {
              formatMessage: t
            } = (0, E.useIntl)(),
            {
              track: r
            } = (0, V.useGtmTrack)(),
            {
              setBodyIsLocked: s
            } = (0, g.useBodyScrollable)("VideoCarousel"),
            [i, o] = (0, u.useState)(0),
            [n, c] = (0, u.useState)(0),
            l = (0, u.useRef)(null),
            d = (0, u.useRef)(null);
          (0, u.useEffect)(() => {
            if (!l.current || !d.current) return;
            const a = new(p())(l.current);
            a.get("press").set({
              time: 0
            }), a.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              r = () => {
                o(i - 1 < 0 ? 0 : i - 1), c(0)
              },
              n = () => {
                const a = i + 1 >= e.length - 1 ? e.length - 1 : i + 1;
                o(a), c(0)
              },
              m = e => {
                c(e.isFinal ? 0 : e.deltaX), "panleft" !== e.type && "panright" !== e.type || !d.current?.classList.contains(nr.dragging) || t() && s(!0)
              },
              _ = () => {
                t() && s(!1), c(0)
              },
              u = e => {
                "press" === e.type && l.current?.classList.add(`${nr.disableClick}`), "tap" === e.type && (l.current?.classList.remove(`${nr.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              b = () => {
                t() && s(!1), l.current && l.current.classList.remove(`${nr.disableClick}`)
              },
              g = () => {
                t() && s(!1)
              };
            return d.current.addEventListener("transitionend", g), a.on("swiperight", r), a.on("swipeleft", n), a.on("pan", m), a.on("panend", _), a.on("press tap", u), a.on("pressup", b), () => {
              a.off("swiperight", r), a.off("swipeleft", n), a.off("pan", m), a.off("panend", _), a.off("press tap", u), a.off("pressup", b), d.current && d.current.removeEventListener("transitionend", g), c(0)
            }
          }, [l.current, i]);
          const m = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", t(a ? cr.learn_more : cr.watch_more)]
          };
          return (0, _.jsxs)("section", {
            className: nr.carousel,
            children: [(0, _.jsx)("div", {
              className: nr.track,
              ref: l,
              children: (0, _.jsx)("div", {
                className: `${nr.items} ${0!==n?nr.dragging:""}`,
                ref: d,
                style: {
                  transform: `translateX(calc(-${100*i}% + ${n}px))`
                },
                children: e.map((e, a) => {
                  const [r, s, o] = m(e), n = "_blank" === o ? `${r} ${t(cr.aria_label_open_new_window)}` : `${r}`;
                  return (0, _.jsx)(T.NavLink, {
                    className: i === a ? nr.active : "",
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": s,
                    to: s,
                    target: o,
                    rel: "noreferrer",
                    "aria-label": n,
                    onDragStart: e => {
                      e.preventDefault()
                    },
                    children: (0, _.jsx)(ir, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                })
              })
            }), (0, _.jsxs)("div", {
              className: nr.slidesContent,
              children: [(0, _.jsx)("div", {
                className: nr.text,
                children: e.map((e, t) => {
                  const [s, o, n, c] = m(e);
                  return (0, _.jsxs)("div", {
                    className: [nr.info, t === i ? nr.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": o,
                    children: [(0, _.jsxs)("div", {
                      className: nr.title,
                      children: [(0, _.jsxs)("div", {
                        className: nr.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, _.jsx)("h2", {
                        className: nr.videoTitle,
                        children: s
                      })]
                    }), (0, _.jsx)(C, {
                      to: o,
                      target: n,
                      role: "presentation",
                      className: nr.cta,
                      "aria-label": `${c}, ${e.game.title} ${s}`,
                      onClick: (l = o, () => {
                        r({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: l,
                          element_placement: "video carousel"
                        })
                      }),
                      children: c
                    })]
                  }, e.id);
                  var l
                })
              }), (0, _.jsx)("section", {
                className: nr.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map((e, a) => (0, _.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => o(a),
                  className: i === a ? nr.active : "",
                  type: "button"
                }, e.id))
              })]
            })]
          })
        }),
        dr = (0, E.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            description: "Aria label to indicate going to the next page of videos",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            description: "Aria label to indicate going to the previous page of videos",
            defaultMessage: "Previous video page"
          }
        }),
        mr = {
          img: "rockstargames-modules-core-newswire-articled87037fda2ea106061c7a614036a89df",
          imgContentful: "rockstargames-modules-core-newswire-articleb9f3c994ce8a97ac6530cf0a85e5abe0",
          wide: "rockstargames-modules-core-newswire-articledc444c089b89129c0a39bc61845d531f"
        };
      (0, g.importAll)(t(86751));
      const _r = ({
          isWideCard: e = !1,
          size: a = 640,
          title: r,
          titleSlug: s,
          inGlobalNav: i = !1
        }) => {
          const {
            isMobile: o
          } = (0, g.useWindowResize)(), n = (0, u.useMemo)(() => {
            let r = "";
            return e && (r = o ? t(25087)(`./${s}/mobile/global.jpg`) : t(58963)(`./${s}/desktop/global.jpg`)), r || (r = t(39294)(`./${s}.jpg`), r += `?im=Resize=${a}`), r
          }, [o, s]), [c] = (0, g.usePreloadImg)(n);
          let l = n;
          return (0, _.jsx)("div", {
            role: "img",
            "aria-label": r,
            style: {
              backgroundImage: `url(${l})`,
              borderRadius: i ? "unset" : ""
            },
            className: [mr.img, c ? mr.startAnimation : "", e ? mr.wide : ""].join(" ")
          })
        },
        ur = {
          fobLink: "rockstargames-modules-core-newswire-articled30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-modules-core-newswire-articlec9686ec502f78b05e47568667e90bd17"
        },
        br = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: r = ""
          } = e, s = ["VI"].includes(t.toUpperCase());
          return (0, _.jsx)(m.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? r,
            target: "_self",
            className: [ur.fobLink, s ? ur.wide : ""].join(" "),
            reloadDocument: s,
            children: (0, _.jsx)(_r, {
              title: e.title,
              titleSlug: t,
              isWideCard: s,
              size: s ? 1740 : 480
            })
          })
        },
        pr = {
          arrow: "rockstargames-modules-core-newswire-articlecabb1073f7b7f75b799c87d74cfaf0ad",
          arrowNav: "rockstargames-modules-core-newswire-articlec9b73b78d75dd740e918208a9d615796",
          disabled: "rockstargames-modules-core-newswire-articledbe1b06efadb349825f7b9b1b2778c68",
          items: "rockstargames-modules-core-newswire-articleef63b0224f0cc9fa73a9c4549ad6c7e9",
          next: "rockstargames-modules-core-newswire-articlebfdf85a5867d26b52a0962be91170e36",
          partial: "rockstargames-modules-core-newswire-articleab95829b388545f21071fd5bb97c25bb",
          previous: "rockstargames-modules-core-newswire-articled7404262ef1f79bde0883b02110a4a5d",
          sectionHeader: "rockstargames-modules-core-newswire-articlead695c18d6276297e78924feea3e6201",
          track: "rockstargames-modules-core-newswire-articlea4d3877b3cf6bff0abccdc561c0fe149",
          trackWrapper: "rockstargames-modules-core-newswire-articlebd79ab04bc93e3bcf79be808e0a06e9b",
          videoList: "rockstargames-modules-core-newswire-articlebacddb57787eca7b621a046e6f23aaf5"
        },
        gr = (0, la.g)(({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: r
        }) => {
          const s = (0, E.useIntl)(),
            {
              track: i
            } = (0, V.useGtmTrack)(),
            o = void 0 !== a ? "games" : "videos",
            [n, c] = (0, u.useState)(),
            [l, d] = (0, u.useState)(),
            [m, b] = (0, u.useState)(0),
            p = (0, u.useRef)(null),
            g = (0, u.useRef)(null),
            f = (0, u.useRef)(null);
          (0, u.useEffect)(() => {
            d({
              nextEl: f.current,
              prevEl: g.current
            })
          }, [f, g]), (0, u.useEffect)(() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), b(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [m]);
          const k = e => {
            p.current && (p.current.scrollLeft = 0), n?.slideTo(e)
          };
          let v;
          return v = "games" === o ? (0, _.jsx)(_.Fragment, {
            children: a.results.filter(e => "775700as" !== e.id).map((e, a) => (0, _.jsx)(oa.qr, {
              className: pr.slide,
              onFocus: () => k(a),
              children: (0, _.jsx)(br, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id))
          }) : (0, _.jsx)(_.Fragment, {
            children: e.map((e, a) => (0, _.jsx)(oa.qr, {
              className: pr.slide,
              onFocus: () => k(a),
              children: (0, _.jsx)(or, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id))
          }), (0, _.jsxs)("section", {
            className: pr.videoList,
            children: [(0, _.jsxs)("h3", {
              className: pr.sectionHeader,
              children: [t, (0, _.jsxs)("div", {
                className: pr.arrowNav,
                children: [(0, _.jsx)("button", {
                  className: (0, N.default)(pr.arrow, pr.previous),
                  type: "button",
                  ref: g,
                  "aria-label": s.formatMessage(dr.previous_button_label),
                  onKeyDown: e => {
                    "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), n?.slidePrev())
                  }
                }), (0, _.jsx)("button", {
                  className: (0, N.default)(pr.arrow, pr.next),
                  type: "button",
                  ref: f,
                  "aria-label": s.formatMessage(dr.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" !== e.key || e.shiftKey) "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), n?.slideNext());
                    else {
                      const a = n?.slides[n?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, _.jsx)("div", {
              className: (0, N.default)(pr.items, m % 1 != 0 ? pr.partial : ""),
              children: (0, _.jsx)("div", {
                className: pr.trackWrapper,
                ref: p,
                children: m && (0, _.jsx)(oa.RC, {
                  className: pr.track,
                  slidesPerView: m,
                  spaceBetween: 24,
                  onInit: e => {
                    c(e)
                  },
                  grabCursor: !0,
                  navigation: l,
                  modules: [ia.A],
                  slideClass: (0, N.default)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    i({
                      event: "carousel_next",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    i({
                      event: "carousel_previous",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    i({
                      event: "carousel_swipe",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  children: v
                })
              })
            })]
          })
        }),
        fr = ({
          children: e,
          ...a
        }) => (0, _.jsx)("span", {
          ...a,
          className: "rockstargames-modules-core-newswire-articleacd86b7f5778381df8fac4a3f7489f60",
          children: e
        }),
        kr = (0, E.defineMessages)({
          wasted_error_404_new: {
            id: "wasted_error_404_new",
            description: "Message prompting user that page doesn't exist or another error occurred",
            defaultMessage: "The page you're looking for doesn't exist or another error occurred."
          },
          wasted_home: {
            id: "wasted_home",
            description: "Message prompting user that the home page doesn't exist or another error occurred",
            defaultMessage: "Home"
          }
        }),
        vr = ({
          error: e,
          domain: a = ""
        }) => {
          console.error({
            error: e
          });
          const {
            formatMessage: t
          } = (0, E.useIntl)();
          let r = e?.message ?? t(kr.wasted_error_404_new);
          r = t(kr.wasted_error_404_new);
          const s = e?.code ?? 398,
            i = (0, u.useRef)(null);
          return (0, u.useEffect)(() => {
            i && i?.current && i.current.focus()
          }, [i]), (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, _.jsx)("h3", {
              tabIndex: -1,
              ref: i,
              children: `${r} (${s})`
            }), (0, _.jsx)(m.A, {
              to: "/",
              reloadDocument: !1,
              children: t(kr.wasted_home)
            }), "clr" !== a && (0, _.jsx)(Pt, {})]
          })
        };
      var hr = t(57208),
        wr = function(e) {
          return e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e
        }({});
      class yr extends u.Component {
        constructor(e) {
          super(e), this.state = {
            error: {
              code: null,
              message: null
            }
          }
        }
        componentDidUpdate(e) {
          this.props.error && e.error !== this.props.error && this.setState({
            ...this.state,
            error: this.props.error
          })
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e?.message ?? "Something has gone horribly awry.",
              code: e?.code ?? 399
            }
          }
        }
        componentDidCatch(e, a) {
          (0, hr.ZQ)({
            category: "ErrorBoundary",
            message: e.message || "E399 triggered",
            data: {
              error: e,
              errorInfo: a
            }
          }), (0, hr.wd)(`ErrorBoundary - ${e.name} ${e.message}`, {
            level: wr.Error,
            fingerprint: "ChunkLoadError" === e.name ? ["chunkloaderror"] : []
          })
        }
        render() {
          return null !== this.state.error.code ? (0, _.jsx)(vr, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const jr = (e, a = null) => {
        const t = t => (0, _.jsx)(yr, {
          header: a,
          children: (0, _.jsx)(e, {
            ...t
          })
        });
        return t.displayName = `withSearchbarErrorBoundary(${e.displayName||e.name||"Component"})`, t
      };
      var xr = t(9716),
        Nr = t(73904),
        Sr = t(64064),
        Cr = t.n(Sr),
        Tr = t(72527),
        Ir = t(35643),
        Er = t(31879),
        zr = t.n(Er);
      const Pr = ({
          hasTag: e = !1,
          tag: a = null,
          tagStyle: t = null,
          badges: r = []
        }) => e && a ? (0, _.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleceb75d3391774f84e920e955d7a6853f",
          "data-tag-style": t,
          children: a
        }) : e && r && r?.length > 0 ? (0, _.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlef83b84453472e937d57011680a564ec6",
          children: r.map(e => (0, _.jsx)(j, {
            ...e
          }, e?.text))
        }) : null,
        Lr = {
          content: "rockstargames-modules-core-newswire-articlef418ed13cf5cbe3f701ce0d872b50704",
          textOverlay: "rockstargames-modules-core-newswire-articleca83475001f5d512b9ffcd89f1117561"
        },
        {
          LiteMotion: Mr,
          Animations: Ar
        } = s,
        {
          variants: Dr,
          transitions: Rr
        } = Ar,
        Fr = ({
          title: e,
          hasTag: a,
          tag: t,
          hasDescription: r,
          description: s,
          fadesOut: i = !1,
          badges: o
        }) => (0, _.jsx)(Mr, {
          initial: Dr.fade.out.initial,
          animate: {
            opacity: i ? 0 : 1
          },
          transition: Rr.fade,
          className: Lr.textOverlay,
          children: (0, _.jsxs)("div", {
            className: Lr.content,
            children: [(0, _.jsx)(Pr, {
              hasTag: a,
              tag: t,
              badges: o?.filter(e => e?.isPrimary)
            }), (0, _.jsx)("h3", {
              children: e
            }), r && s && (0, _.jsx)("div", {
              className: Lr.description,
              children: s
            })]
          })
        }),
        Vr = (0, E.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            description: "The aria label used for cards when they have platforms.",
            defaultMessage: "{title} on {platformList}"
          },
          card_label_tag: {
            id: "card_label_tag",
            description: "The aria label used for cards when they have a tag.",
            defaultMessage: "{tag} {title}"
          },
          card_label_platforms_tag: {
            id: "card_label_platforms_tag",
            description: "The aria label used for cards when they have platforms and a tag.",
            defaultMessage: "{tag} {title} on {platformList}"
          },
          card_learn_more: {
            id: "card_learn_more",
            description: "Label for learn more buttons.",
            defaultMessage: "Learn More"
          },
          card_sr_only_discount_label: {
            id: "card_sr_only_discount_label",
            description: "Aria label for screen readers only whichcontain discounted price text",
            defaultMessage: "Discount price, previously"
          },
          events_deck_next_aria_label: {
            id: "events_deck_next_aria_label",
            description: "Aria label for the next button on the events deck (modal closed - multiple slides visible at a time)",
            defaultMessage: "Next Page of Events"
          },
          events_deck_previous_aria_label: {
            id: "events_deck_previous_aria_label",
            description: "Aria label for the previous button on the events deck (modal closed - multiple slides visible at a time)",
            defaultMessage: "Previous Page of Events"
          },
          events_deck_modal_next_aria_label: {
            id: "events_deck_modal_next_aria_label",
            description: "Aria label for the next button on the events deck (modal open - one event slide visible at a time)",
            defaultMessage: "Next event"
          },
          events_deck_modal_previous_aria_label: {
            id: "events_deck_modal_previous_aria_label",
            description: "Aria label for the previous button on the events deck (modal open - one event slide visible at a time)",
            defaultMessage: "Previous event"
          },
          events_deck_modal_close_label: {
            id: "events_deck_modal_close_label",
            description: "Aria label for the close button on the modal",
            defaultMessage: "Close"
          },
          events_deck_paging_label: {
            id: "events_deck_paging_label",
            description: "Aria label for which page the user is on in the deck",
            defaultMessage: "On page {currentPage} of {totalPages}"
          },
          events_deck_modal_group_label: {
            id: "events_deck_modal_group_label",
            description: "Aria label for the group/modal which contains the event details",
            defaultMessage: "Event Details"
          }
        }),
        $r = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          tag: r,
          tagStyle: s,
          discountPrice: i,
          originalPrice: o,
          setPricingContainerHeight: n = null
        }) => {
          const c = (0, u.createRef)(),
            {
              formatMessage: l
            } = (0, E.useIntl)();
          return (0, u.useEffect)(() => {
            const e = () => {
              c.current && null !== n && n(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [c]), (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee419c6cd31abd635e742e635dcfd8316",
            ref: c,
            "data-show-background": t,
            children: [a && (0, _.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlebf415d56280a8768ee0c26e116865d5b",
              children: e
            }), (0, _.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled98da8fc9dce6d600db165351d3a3fed",
              children: [(0, _.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlea5717338db21efc7eb765011d68ea73d",
                "data-tag-style": s || "free",
                children: r
              }), (0, _.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlecdaaa9655747e4d129d6c22080bdd33d",
                children: i
              }), o && (0, _.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articled2cd2139f671e2976f60b0002f59fd77",
                children: l(Vr.card_sr_only_discount_label)
              }), (0, _.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleaf3db4eb6d14c1f4ee5689b4e6386715",
                children: o
              })]
            })]
          })
        },
        Gr = {
          ps5: oe,
          ps4: ie,
          ps: se,
          xboxone: le,
          xbox: ne,
          xboxseriesxs: ce,
          nintendoswitch: de,
          pc: me,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        Or = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          platformOptions: r,
          setPricingContainerHeight: s = () => {},
          expandedView: i
        }) => {
          const o = (0, u.createRef)();
          return (0, u.useEffect)(() => {
            const e = () => {
              o.current && null !== s && s(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [o]), (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleee81f54f31ab2cd10a67313b9689bf96",
            ref: o,
            "data-show-background": t,
            "data-show-platforms": !i,
            children: [a && (0, _.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articled4ab460f0a204a588d4d4dd0a110ca36",
              children: e
            }), r?.platformsAndLinks && (0, _.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleafdc85bfd80cae52d4c1b422f1294962",
              children: [(0, _.jsx)(Pr, {
                hasTag: r?._memoq?.platformTag,
                tag: r?._memoq?.platformTag,
                tagStyle: r?._memoq?.platformTagStyle
              }), (0, _.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec252412353007d9f02f19a754430b14b",
                children: r.platformsAndLinks.map(({
                  platform: e,
                  buttonText: a
                }) => (0, _.jsx)("img", {
                  className: "rockstargames-modules-core-newswire-articleff5cde8853312ffb892472d100c684cd",
                  alt: a,
                  src: Gr[e]
                }, e))
              })]
            })]
          })
        },
        Br = ({
          textOverlayProps: e,
          title: a,
          size: t,
          expandedView: r = !1,
          children: s,
          pricingOptions: i,
          setPricingContainerHeight: o,
          isCoverCard: n = !1,
          platformOptions: c
        }) => {
          const [l] = (({
            hasTextOverlay: e,
            tag: a,
            collapsedHasTag: t,
            description: r,
            collapsedHasDescription: s,
            size: i,
            title: o,
            expandedView: n,
            badges: c
          }) => {
            const [l, d] = (0, u.useState)(null), m = (0, u.useMemo)(() => {
              if (!e) return null;
              const l = "sm" !== i && s;
              return (0, _.jsx)(Fr, {
                title: o,
                hasTag: t,
                tag: a,
                hasDescription: l,
                description: r,
                fadesOut: n,
                badges: c
              })
            }, [e, a, t, r, s, i, o, n, c]);
            return (0, u.useEffect)(() => {
              d(m)
            }, [m]), [l, d]
          })({
            ...e,
            size: t,
            title: a,
            expandedView: r
          }), d = void 0 !== i?.hasPricingOptions || null !== c;
          return (0, _.jsxs)("header", {
            className: "rockstargames-modules-core-newswire-articlecab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": n,
            "data-expanded-view": r,
            children: [s, !r && l, d && (0, _.jsxs)(_.Fragment, {
              children: [!0 === c?.hasPlatformOptions && (0, _.jsx)(Or, {
                title: a,
                platformOptions: c,
                pricingOptions: i,
                setPricingContainerHeight: o,
                expandedView: r
              }), !0 === i?.hasPricingOptions && (0, _.jsx)($r, {
                title: a,
                tag: i?._memoq?.tag,
                tagStyle: i?._memoq?.tagStyle || "free",
                discountPrice: i?._memoq?.discountPrice,
                originalPrice: i?._memoq?.originalPrice,
                setPricingContainerHeight: o
              })]
            })]
          })
        },
        {
          LiteMotion: qr,
          Animations: Hr
        } = s,
        {
          transitions: Ur
        } = Hr,
        Wr = ({
          components: e,
          images: a,
          payload: t,
          prod: r,
          size: s,
          title: i,
          initial: o = "initial",
          animate: n = "animate",
          variants: c,
          type: l = null,
          context: d = null,
          textOverlayProps: m,
          className: b,
          children: p,
          theme: f = "none",
          id: k,
          pricingOptions: v,
          pricingContainerHeight: h,
          isCoverCard: w,
          platformOptions: y,
          isProductCard: j = !1
        }) => {
          const x = (0, u.useRef)(null),
            S = (0, u.useRef)(null),
            {
              tag: C,
              expandedHasTag: T,
              badges: I
            } = m;
          (0, sa.set)(t, "meta.prod", r);
          const E = a?.length > 0;
          let z = (0, _.jsx)("h1", {
            children: i
          });
          return w && (z = null), (0, u.useEffect)(() => {
            const e = () => {
              x.current && x.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (x.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }, []), (0, u.useEffect)(() => {
            const e = window.innerWidth >= window.innerHeight;
            e && S?.current?.scrollTop && (S.current.scrollTop = 0), !e && x?.current?.scrollTop && (x.current.scrollTop = 0)
          }, [t, S, x]), (0, _.jsx)(g.DataLayerProvider, {
            card_id: k,
            card_name: i?.toLowerCase(),
            children: (0, _.jsx)(zt, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === l ? x : S,
              children: (0, _.jsxs)(qr, {
                ref: x,
                initial: o,
                animate: n,
                variants: c.expanded,
                transition: Ur.cardOpen,
                className: (0, N.default)("rockstargames-modules-core-newswire-articlec2289ce1bf0de6ad8a4a8ce7e90a4b66", b),
                "data-type": l,
                "data-size": s,
                "data-product": j,
                "data-covercard": w || !1,
                "data-context": d,
                style: {
                  "--product-card-pricing-info-height": `${h||0}px`
                },
                children: [E && (0, _.jsx)(Br, {
                  size: s,
                  title: i,
                  textOverlayProps: m,
                  expandedView: !0,
                  pricingOptions: v,
                  platformOptions: y,
                  isCoverCard: w,
                  children: p
                }), (0, _.jsxs)(qr, {
                  ref: S,
                  className: "rockstargames-modules-core-newswire-articlee461568802b56e8c21b8b82d9c3a1fb4",
                  variants: c.expandedContents,
                  transition: Ur.afterCardOpen,
                  "data-theme": f,
                  tabindex: -1,
                  children: [(0, _.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, _.jsx)(Pr, {
                      hasTag: T,
                      tag: C,
                      badges: I
                    }), z, j && (0, _.jsxs)(_.Fragment, {
                      children: [!0 === y?.hasPlatformOptions && (0, _.jsx)("div", {
                        className: "rockstargames-modules-core-newswire-articlecd635452588eda421bdea19f00660efc",
                        children: (0, _.jsx)(Pr, {
                          hasTag: y?.hasPlatformOptions,
                          tag: y?._memoq?.platformTag,
                          tagStyle: y?._memoq?.platformTagStyle
                        })
                      }), !0 === v?.hasPricingOptions && (0, _.jsx)($r, {
                        title: i,
                        showTitle: !1,
                        showBackground: !1,
                        tag: v?._memoq?.tag,
                        tagStyle: v?.tagStyle || "free",
                        discountPrice: v?._memoq?.discountPrice,
                        originalPrice: v?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, _.jsx)(Ve.TinaParser, {
                    components: e,
                    tina: {
                      payload: t
                    }
                  })]
                })]
              })
            })
          })
        };
      (0, E.defineMessages)({
        modal_pagination_group_sr_only_label: {
          id: "modal_pagination_group_sr_only_label",
          description: "Aria label describing modal pagination in list",
          defaultMessage: "Now showing {index} of {total}"
        }
      });
      const Kr = [{}, () => {}],
        Xr = (0, g.setContextItem)({
          context: (0, u.createContext)(Kr),
          key: "modalContext"
        }),
        Yr = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","card_sr_only_discount_label":"Ermäßigter Preis, vorher","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","card_sr_only_discount_label":"Discount price, previously","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","card_sr_only_discount_label":"Precio rebajado, anteriormente","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","card_sr_only_discount_label":"Precio con descuento, anteriormente","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","card_sr_only_discount_label":"Prix réduit, précédemment","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","card_sr_only_discount_label":"Prezzo scontato: prima","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","card_sr_only_discount_label":"割引価格(以前の価格)","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","card_sr_only_discount_label":"할인 가격, 정가","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","card_sr_only_discount_label":"Cena promocyjna, poprzednio","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","card_sr_only_discount_label":"Preço com desconto, antes","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","card_sr_only_discount_label":"Цена по скидке, ранее","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList}上的{title}","card_label_platforms_tag":"{tag} {platformList}上的{title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","card_sr_only_discount_label":"折扣价格，此前","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第{currentPage}页（共{totalPages}页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","card_sr_only_discount_label":"優惠價格，原為","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        Jr = (0, E.withIntl)(({
          id: e,
          position: a,
          title: t,
          size: r = "md",
          sectionTitle: s = "",
          expandedType: i = null,
          modalProps: o = {
            content: null,
            className: "",
            contentClassName: ""
          },
          className: n,
          children: c,
          isProductCard: l,
          cardIds: d = null,
          theme: m = "none",
          isCoverCard: b,
          platformOptions: p,
          pricingOptions: g
        }) => {
          const {
            formatMessage: f,
            formatList: k
          } = (0, E.useIntl)(), [v, h] = (0, T.useSearchParams)(), w = (0, u.useRef)(null), [, y] = (0, u.useContext)(Xr), {
            track: j
          } = (0, V.useGtmTrack)(), x = window.location.href.includes("cms5"), N = "info", S = v.get(N), C = (0, u.useCallback)(() => {
            y(null), x || h(e => (e.delete(N), e), {
              replace: !0
            }), j({
              event: "trackPageview"
            })
          }, [x, y, h, j]), I = (0, u.useCallback)(() => {
            if (!o?.content || !w.current || !i || "linkout" === i) return;
            const s = w.current,
              n = window.getComputedStyle(s),
              c = parseInt(n.getPropertyValue("width"), 10),
              l = parseInt(n.getPropertyValue("height"), 10),
              _ = s.getBoundingClientRect(),
              {
                content: u,
                className: b,
                contentClassName: p
              } = o,
              g = "fob" === r ? "fob" : "default";
            y({
              content: u,
              onClose: C,
              rect: _,
              width: c,
              height: l,
              className: b,
              contentClassName: p,
              fadeIn: !1,
              cardIds: d,
              theme: m,
              activeId: e,
              gtm: {
                card_id: e,
                card_name: t?.toLowerCase(),
                position: a
              },
              aspectRatio: g,
              cardDimensions: {
                size: r,
                type: i
              }
            }), j({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: e,
              card_name: t?.toLowerCase(),
              position: a
            })
          }, [d, i, e, o, C, a, y, r, m, t, j]), z = (0, u.useCallback)(async r => {
            r.preventDefault(), r.stopPropagation(), e ? h({
              info: e
            }) : I(), j({
              event: "card_click",
              element_placement: s?.toLowerCase(),
              position: a,
              card_id: e,
              card_name: t?.toLowerCase(),
              link_url: window.location.href
            })
          }, [e, I, a, s, h, t, j]), P = (0, u.useMemo)(() => {
            const e = p?._memoq?.platformTag || "";
            if (p?.platformsAndLinks?.length > 0) {
              const a = p?.platformsAndLinks?.map(({
                  buttonText: e
                }) => e).filter(Boolean),
                r = k(a, {
                  type: "conjunction"
                });
              return e ? f(Vr.card_label_platforms_tag, {
                tag: e,
                title: t,
                platformList: r
              }) : f(Vr.card_label_platforms, {
                title: t,
                platformList: r
              })
            }
            return e ? f(Vr.card_label_tag, {
              tag: e,
              title: t
            }) : !0 === g?.hasPricingOptions ? null : t
          }, [k, f, p?._memoq?.platformTag, p?.platformsAndLinks, g?.hasPricingOptions, t]);
          return (0, u.useEffect)(() => {
            S === e && I()
          }, [S, e]), b || "linkout" === i ? (0, _.jsx)("div", {
            ref: w,
            className: n,
            "data-size": r,
            "data-type": i,
            "data-product": l,
            role: "button",
            "aria-label": P,
            children: c
          }) : (0, _.jsx)("button", {
            ref: w,
            onClick: z,
            className: n,
            "data-size": r,
            "data-type": i,
            "data-product": l,
            tabIndex: "linkout" !== i ? 0 : -1,
            "aria-label": P,
            type: "button",
            children: c
          })
        }, Yr),
        Zr = {
          card: "rockstargames-modules-core-newswire-articlec49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-modules-core-newswire-articleb41eac21ba69f02fe26f8dafa8433207",
          coverCardWrapper: "rockstargames-modules-core-newswire-articledd482c08ed9fdc5cef20f63dd6720e13",
          expandedContent: "rockstargames-modules-core-newswire-articlefea5414b5f55420cfcd6c6ee12a393b3",
          imageHolder: "rockstargames-modules-core-newswire-articled893e3eab0a5754bb28882ceb8de6b59",
          pillBtn: "rockstargames-modules-core-newswire-articlef3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-modules-core-newswire-articlea03c60979e8d6882b5b8ce0f0301b7e9",
          text: "rockstargames-modules-core-newswire-articlee961062768d06292ff6cb598ae1c5e69"
        },
        Qr = ({
          payload: e,
          prod: a,
          images: t,
          size: r,
          title: s,
          initial: i,
          animate: o,
          variants: n,
          id: c,
          position: l,
          sectionTitle: d,
          expandedType: m,
          context: b,
          children: p,
          expandedCardContents: g,
          textOverlayProps: f = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          deckProps: k = {},
          modalProps: v = [],
          theme: h,
          cardIds: w,
          pricingOptions: y,
          platformOptions: j = null,
          pricingContainerHeight: x,
          isCoverCard: N = !1,
          isProductCard: S = !1
        }) => {
          const C = (0, Ve.useTinaComponents)(),
            T = (0, u.useMemo)(() => ({
              ...C,
              HTMLElement: wa,
              ImageWithBadge: Ca.A,
              Carousel: R.A,
              GroupOfItems: Tr.default
            }), [C]),
            I = (0, u.useMemo)(() => (0, _.jsx)(Wr, {
              type: m,
              components: T,
              payload: e,
              prod: a,
              images: t,
              size: r,
              title: s,
              context: b,
              textOverlayProps: f,
              initial: i,
              animate: o,
              variants: n,
              theme: h,
              cardIds: w,
              pricingOptions: y,
              id: c,
              pricingContainerHeight: x,
              isCoverCard: N,
              platformOptions: j,
              isProductCard: S,
              children: g
            }), [m, T, e, a, t, r, s, b, f, i, o, n, h, w, y, c, x, N, j, S, g]),
            E = [Zr.card, N ? Zr.coverCardWrapper : ""].join(" ");
          return (0, _.jsx)(Jr, {
            id: c,
            position: l,
            sectionTitle: d,
            title: s,
            size: r,
            expandedType: m,
            images: t,
            deckProps: k,
            modalProps: {
              content: I,
              ...v
            },
            className: E,
            isProductCard: S,
            cardIds: w,
            theme: h,
            isCoverCard: N,
            platformOptions: j,
            pricingOptions: y,
            children: p
          })
        },
        es = {
          cardContainer: "rockstargames-modules-core-newswire-articlea65bd0d9d5dcff98d39d50398a055863",
          cardDesc: "rockstargames-modules-core-newswire-articled175015429f8daa4f434fd9b81b1a2cb",
          cardInfo: "rockstargames-modules-core-newswire-articlece8cc9fec51fad1ccdcc9dbc3c0e7986",
          clrCollapsedCard: "rockstargames-modules-core-newswire-articleeba324832dbf8f56f76fddb1d358c572",
          newBadge: "rockstargames-modules-core-newswire-articlebfb0205000666e00e4263cf557c3382d",
          outOfStockBadge: "rockstargames-modules-core-newswire-articlef56e1440ab1dbcff414939617853e921",
          price: "rockstargames-modules-core-newswire-articleeededa1d68a7f78ab4c0ba86fcafcb01",
          priceInfo: "rockstargames-modules-core-newswire-articleb678df03ded67dcee3c87ae543d6a5e5",
          saleBadge: "rockstargames-modules-core-newswire-articleca0d7f9e641eae51d7819491f87acc5d",
          slashedPrice: "rockstargames-modules-core-newswire-articleef47a1b9aa928979141bb75952f93adb",
          storeInfo: "rockstargames-modules-core-newswire-articlead85da337b24dbf2f1aba7e75352217a",
          subtitle: "rockstargames-modules-core-newswire-articlec0d737e6798c3e0994f78b427cbe9a59"
        },
        as = ({
          videoUrl: e,
          expandedType: a,
          children: t
        }) => e && "linkout" === a ? (0, _.jsx)(m.A, {
          to: e,
          children: t
        }) : t,
        ts = ({
          className: e,
          cardType: a,
          title: t,
          image: r,
          subheader: s,
          subtitle: i,
          price: o,
          slashedPrice: n,
          badge: c = null,
          expandedType: l,
          videoUrl: d
        }) => (0, _.jsx)("div", {
          className: [es.clrCollapsedCard, e].join(" "),
          role: "button",
          tabIndex: 0,
          children: (0, _.jsx)(as, {
            videoUrl: d,
            expandedType: l,
            children: (0, _.jsxs)("div", {
              className: es.cardContainer,
              "data-type": a,
              children: [(0, _.jsx)("div", {
                className: es.cardMedia,
                children: (0, _.jsx)(ya.A, {
                  ...r
                })
              }), (0, _.jsxs)("div", {
                className: es.cardInfo,
                children: [s && (0, _.jsx)("h6", {
                  children: s
                }), (0, _.jsx)("h5", {
                  children: t
                }), i && (0, _.jsx)("h6", {
                  className: es.subtitle,
                  children: i
                }), "store" === a && (0, _.jsxs)("div", {
                  className: es.storeInfo,
                  children: [(0, _.jsx)("p", {
                    className: (() => {
                      switch (c) {
                        case "New":
                          return es.newBadge;
                        case "Sale":
                          return es.saleBadge;
                        case "Out of Stock":
                          return es.outOfStockBadge;
                        default:
                          return ""
                      }
                    })(),
                    children: c
                  }), (0, _.jsxs)("span", {
                    className: es.priceInfo,
                    children: [(0, _.jsx)("p", {
                      className: es.price,
                      children: o
                    }), (0, _.jsx)("p", {
                      className: es.slashedPrice,
                      children: n
                    })]
                  })]
                })]
              })]
            })
          })
        }),
        rs = ({
          expandedType: e,
          to: a,
          children: t,
          style: r,
          sectionTitle: s = "",
          id: i,
          cardTitle: o,
          position: n
        }) => {
          const {
            track: c
          } = (0, V.useGtmTrack)(), l = (0, u.useCallback)(() => {
            c({
              event: "card_click",
              link_url: a,
              card_id: i,
              card_name: o,
              element_placement: s.toLowerCase(),
              position: n
            })
          }, [s, a, i, o, s, n]);
          return "linkout" === e && a ? (0, _.jsx)(m.A, {
            to: a,
            style: r,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: l,
            children: t
          }) : t
        },
        ss = {
          foreground: "rockstargames-modules-core-newswire-articled858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-modules-core-newswire-articled656190323ba10afc580adbf82303a8b",
          layered: "rockstargames-modules-core-newswire-articlea7a1d10cda2bf3de7960b4fadf2f7a4e",
          layeredImageFrame: "rockstargames-modules-core-newswire-articlecfc6074d8b476125230142c79438a249",
          logo: "rockstargames-modules-core-newswire-articleca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-modules-core-newswire-articlef5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: is,
          Animations: os
        } = s,
        {
          getVariant: ns,
          variants: cs,
          transitions: ls
        } = os,
        ds = ({
          image: e,
          zIndex: a,
          prod: t
        }) => {
          const {
            alt: r,
            src: s
          } = (0, Ve.useImageParser)({
            ...e,
            prod: t
          });
          return (0, _.jsx)("img", {
            src: s.mobile,
            alt: r ?? "",
            style: {
              zIndex: a
            }
          })
        },
        ms = ({
          images: e = [],
          className: a = "",
          prod: t = !1,
          expandedView: r = !1,
          style: s = {}
        }) => {
          const i = (0, u.useMemo)(() => e?.length && 0 !== e.length ? e.map((e, a) => (0, _.jsx)(is, {
            className: (0, N.default)(ss[e?.specialClass] ?? ss.imageMask, ss[e?.sizeClass], e?.className),
            variants: ns(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: ls.cardOpen,
            children: (0, _.jsx)(ds, {
              image: e,
              prod: t,
              zIndex: 100 + a
            })
          }, e.key)) : null, [e, r, t]);
          return (0, _.jsx)(is, {
            className: (0, N.default)(ss.layeredImageFrame, e.length > 1 ? ss.layered : ss.flat, a),
            style: s,
            initial: cs.fade.in.initial,
            animate: cs.fade.in.animate,
            transition: ls.instantFade,
            "data-expanded-view": r,
            children: i
          })
        },
        _s = {
          calloutHeaders: "rockstargames-modules-core-newswire-articleebd11baf4f38deb4ff8d0662eb5a6862",
          clrCardModalContent: "rockstargames-modules-core-newswire-articlef32476f7063f9c4104b440088ce4c4b0",
          content: "rockstargames-modules-core-newswire-articlea0b99bca02f0c4de4ad0bf4e4bd02337",
          details: "rockstargames-modules-core-newswire-articlee642b377145369df07970f4d4feb3f25",
          expandedCard: "rockstargames-modules-core-newswire-articlef6cbada424337b1e6ccd75c5029db4c3"
        },
        {
          variants: us
        } = r,
        bs = ({
          images: e,
          title: a,
          expandedView: t,
          variants: r,
          transition: s
        }) => {
          const i = (0, u.useMemo)(() => e && 0 !== e?.length ? e.map((e, a) => e?.image?.sources ? (0, u.createElement)(Ca.A, {
            ...e,
            key: a,
            style: {
              ...e?.style,
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null) : null, [e]);
          return !i?.length || i?.length < 1 ? null : 1 === i.length ? i : (0, _.jsx)(Ut, {
            slideChildren: i,
            title: a,
            navigation: t,
            thumbsVisible: t,
            spaceBetween: 0,
            variants: r,
            transition: s
          })
        },
        ps = {
          customModalContent: "rockstargames-modules-core-newswire-articleecdc3da21cda9331cebe845898b7fa7b",
          pillBtn: "rockstargames-modules-core-newswire-articlecf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-modules-core-newswire-articlecbdd37e11b752cff831c5a96aeb7dbeb"
        },
        {
          transitions: gs,
          variants: fs
        } = r,
        ks = ({
          id: e,
          title: a,
          content: t,
          size: r = "md",
          expandedType: s = "gallery",
          textOverlayProps: i = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: o = [],
          deckProps: n = {},
          tina: c = {},
          payload: l,
          position: d = 0,
          sectionTitle: m = "",
          cardIds: b
        }) => {
          const p = (0, Ve.useTinaPayload)(),
            g = l ?? p,
            f = c?.payload?.meta?.cdn ?? g?.meta?.prod ?? !1,
            k = ((e, a) => e?.map(e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e))(o, f),
            [v, h] = (0, u.useState)(n?.size ?? r),
            {
              parent: w,
              main: y,
              thumbs: j
            } = fs?.cardWithImageGallery?.gallery ?? {};
          return (0, u.useEffect)(() => {
            h(n?.size ?? r)
          }, [n?.size, r]), (0, _.jsx)(Qr, {
            id: e,
            position: d,
            sectionTitle: m,
            payload: {
              content: t,
              meta: {},
              payload: g
            },
            title: a,
            size: v,
            expandedType: s,
            images: k,
            deckProps: n,
            prod: f,
            variants: fs.cardWithImageGallery,
            textOverlayProps: i,
            modalProps: {
              className: ps.customModal,
              contentClassName: ps.customModalContent
            },
            expandedCardContents: (0, _.jsx)(bs, {
              images: k,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: w,
                main: y,
                thumbs: j
              },
              transition: {
                parent: gs.cardOpen,
                main: gs.cardOpen,
                thumbs: gs.cardOpen
              }
            }, `expanded-${e}`),
            cardIds: b,
            children: (0, _.jsx)("div", {
              className: ps.content,
              children: (0, _.jsx)(Br, {
                title: a,
                size: v,
                textOverlayProps: i,
                children: (0, _.jsx)(bs, {
                  images: k,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        };
      var vs = t(30631);
      const hs = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        ws = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        ys = e => e.scrollHeight > e.clientHeight;

      function js(e, a) {
        const t = {
          ...e
        };
        return (0, sa.forOwn)(e, (e, r) => {
          if ("image" === r) {
            const e = t[r];
            t[r] = {
              ...e,
              prod: a
            }
          } else(0, sa.isObject)(e) && !(0, sa.isArray)(e) ? js(e, a) : (0, sa.isArray)(e) && (t[r] = e.map(e => (0, sa.isObject)(e) ? js(e, a) : e))
        }), t
      }
      const xs = (0, g.withTranslations)(({
          active: e,
          styles: a,
          title: t,
          itemNumber: r,
          inModalMode: s,
          openModalMode: i,
          element: o,
          upNext: n,
          mobileMode: c,
          refDeck: l,
          components: d,
          tina: m,
          prevPage: b,
          nextPage: p,
          onFocus: g,
          transitionStyle: f,
          selectedItemNumber: k,
          sharedDraggingDelta: v,
          setSharedDraggingDelta: h,
          trapFocus: w
        }) => {
          const y = (0, E.useIntl)(),
            {
              track: x
            } = (0, V.useGtmTrack)(),
            N = (0, u.createRef)(),
            S = (0, u.createRef)(),
            C = (0, u.createRef)(),
            T = (0, u.createRef)(),
            [I, z] = (0, u.useState)(!1),
            [P, L] = (0, u.useState)(0),
            [M, A] = (0, u.useState)(0),
            [D, R] = (0, u.useState)(0),
            [F, $] = (0, u.useState)(0),
            [G, O] = (0, u.useState)(0),
            [B, q] = (0, u.useState)(!1),
            [H, U] = (0, u.useState)(0),
            [W, K] = (0, u.useState)(0),
            [X, Y] = (0, u.useState)(0),
            [J, Z] = (0, u.useState)("700"),
            [Q, ee] = (0, u.useState)(-1),
            [ae, te] = (0, u.useState)(0),
            [re, se] = (0, u.useState)(0),
            [ie, oe] = (0, u.useState)(0),
            [ne, ce] = (0, u.useState)(!1),
            [le, de] = (0, u.useState)(""),
            [me, _e] = (0, u.useState)(null),
            [ue, be] = (0, u.useState)(!1),
            [pe, ge] = (0, u.useState)(null),
            [fe, ke] = (0, u.useState)(!1),
            [ve, he] = (0, u.useState)(!1),
            we = (0, Ve.useTinaPayload)(),
            ye = m?.payload?.meta?.cdn ?? !1 ?? we?.meta?.prod ?? !1,
            je = (0, Ve.useTranslations)({
              payload: m?.payload,
              variables: m?.variables
            }),
            xe = je?.meta ?? {},
            Ne = js(je?.content?.[0], ye),
            Se = (0, u.useMemo)(() => Ne?.images?.[0]?.image?.badge, [Ne]),
            Ce = (0, u.useMemo)(() => Ne.title ?? t ?? xe?.title, [t, xe?.title, Ne.title]),
            Te = (0, Ve.useImageParser)({
              alt: Ne?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Ne?.images?.[0]?.image?.alt ?? "",
              sources: Ne?.images?.[0]?.image?.sources ?? [],
              prod: ye
            }),
            Ie = Te?.src?.mobile ?? Te?.src?.desktop ?? !1,
            Ee = (0, u.useMemo)(() => xe?.foreignId, [xe]),
            ze = (0, u.useMemo)(() => xe?.foreignTitle, [xe]),
            [Pe, Le] = (0, u.useState)(0),
            [Me, Ae] = (0, u.useState)(0),
            [De, Re] = (0, u.useState)(0),
            [Fe, $e] = (0, u.useState)(0),
            [Ge, Oe] = (0, u.useState)(!1),
            [Be, qe] = (0, u.useState)(0),
            [He, Ue] = (0, u.useState)(20),
            [We, Ke] = (0, u.useState)(null),
            [Xe, Ye] = (0, u.useState)(!1),
            Je = (0, u.useCallback)(e => {
              if (!0 === B || !s && !c || ue) return;
              const a = ws(e);
              Le(a.x), Ae(a.y)
            }, [B, s]),
            Ze = e => {
              Je(e)
            },
            Qe = e => {
              if (!0 === B || 0 === Pe || !s && !c || ue) return;
              const a = ws(e),
                t = a.x > Pe ? 1 : -1,
                r = Math.abs(Pe - a.x);
              s && !c && r > He ? (Ye(!0), de(t > 0 ? "prev" : "next"), aa()) : (Oe(!0), qe(r * t), h(r * t))
            },
            ea = e => {
              if (!0 === B || !s && !c || ue) return;
              const a = ws(e),
                t = a.x > Pe ? 1 : -1,
                r = Math.abs(Pe - a.x),
                i = Math.abs(Me - a.y);
              s && !c ? (aa(), de("")) : r > He && i < 25 ? (Ye(!0), de(t > 0 ? "prev" : "next"), aa()) : aa()
            },
            aa = () => {
              q(!0), Le(0), Ae(0), Oe(!1), qe(0), h(0)
            },
            ta = e => {
              e ? (s || z(!0), s || c || (clearTimeout(Q), ee(setTimeout(() => {
                x({
                  event: "card_title_hover",
                  card_name: Ce,
                  card_id: r,
                  position: r,
                  view_name: `${Ee}/${ze}`,
                  source_content_id: Ee,
                  source_content_name: ze
                })
              }, 1e3)))) : (s || z(!1), s || c || clearTimeout(Q))
            };
          return (0, u.useEffect)(() => {
            let e = H;
            I ? e = 0 : s && !c && (e = H), L(e)
          }, [I, c, s, M, F, W, X, D, H]), (0, u.useEffect)(() => {
            z(!(!s || !c))
          }, [s, c]), (0, u.useEffect)(() => {
            s && e && x({
              event: "virtualPageview",
              display_type: c ? "mobile" : "desktop",
              view_name: `${Ee}/${Ce}`,
              source_content_id: Ee,
              source_content_name: ze
            })
          }, [s, e]), (0, u.useEffect)(() => {
            const e = (0, sa.debounce)((e, a) => {
              let t = 18;
              if (e?.documentElement && (t = hs(e?.documentElement, "--root-font-size")), re !== a.innerHeight && se(a.innerHeight), l?.current) {
                Y(hs(l.current, "--eventDeck-marginSm") * t);
                const e = t * hs(l?.current, "--eventDeck-modalGutters"),
                  r = a?.innerWidth,
                  s = r - 2 * e;
                A(s), C.current && c && R(s), $(hs(l.current, "--eventDeck-itemSize") * t), oe(hs(l.current, "--eventDeck-phaseOneTransitionDuration"));
                const i = hs(l?.current, "--eventDeck-itemImageTitleMargins") * t,
                  o = S?.current?.clientHeight,
                  n = o + i;
                Number.isNaN(n) || U(n), te(hs(l?.current, "--eventDeck-headerHeight") * t)
              }
              let r = Math.min(700, a.innerWidth);
              c || (r = 900), Z(`${r}`)
            }, 300);
            return window.addEventListener("resize", () => {
              e(document, window)
            }), e(document, window), () => {
              window.removeEventListener("resize", () => {
                e(document, window)
              })
            }
          }, [l, c]), (0, u.useEffect)(() => {
            if (N.current) {
              const e = N.current.clientHeight;
              Number.isNaN(e) || K(e)
            }
          }, [N]), (0, u.useEffect)(() => {
            const e = .5 * M,
              a = re - ae - 3 * X;
            O(M - (e < a ? e : a))
          }, [M, X, re]), (0, u.useEffect)(() => {
            "next" === le ? (p(null, !0), de("")) : "prev" === le && (b(null, !0), de(""))
          }, [le]), (0, u.useEffect)(() => {
            Re(0), $e(0)
          }, [c]), (0, u.useEffect)(() => {
            c ? Ue(s ? 35 : 20) : s && Ue(50)
          }, [s, c]), (0, u.useEffect)(() => {
            if (null !== a?.transform) {
              const e = a?.transform?.split(",") ?? [],
                t = e[0].split("("),
                r = Number(t[1].replace("px", "")),
                s = Number(e[1].replace("px", ""));
              Re(r), $e(s)
            }
          }, [a]), (0, u.useEffect)(() => {
            if (!B) return;
            clearTimeout(me);
            const e = setTimeout(() => {
              q(!1), Le(0)
            }, 200);
            _e(e)
          }, [B, 200]), (0, u.useEffect)(() => {
            if (!Xe) return;
            clearTimeout(We);
            const e = setTimeout(() => {
              Ye(!1)
            }, 1e3);
            Ke(e)
          }, [Xe]), (0, u.useEffect)(() => {
            s && clearTimeout(Q), setTimeout(() => {
              ce(!ne)
            }, ie)
          }, [s]), (0, u.useEffect)(() => (document.body.addEventListener("mouseleave", aa), () => {
            document.body.removeEventListener("mouseleave", aa)
          }), []), (0, u.useEffect)(() => {
            T.current ? ke(ys(T.current)) : ke(!1), void 0 !== o && o.current ? he(ys(o.current)) : he(!1)
          }, [o, T, e, s, ne]), Ne ? (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlec02ee363d47108460ab7916fc955cd9b",
            ref: o,
            "data-item-position": r,
            "data-modal-mode": s,
            "data-active-item": e,
            "data-up-next": n,
            "data-transition": Ge || 0 !== v ? "none" : f,
            "data-scrollable": ve,
            style: {
              ...a,
              transform: s && e && !c ? `translate3d(${De+Be}px, ${Fe}px, 0)` : c && !s ? `translate3d(${De+v}px, ${Fe}px, 0)` : a?.transform
            },
            onClick: e => {
              Xe || (s ? s && !c && (r < k ? b(e, !0) : r > k && p(e, !0)) : i(e))
            },
            onMouseEnter: () => ta(!0),
            onMouseLeave: () => ta(!1),
            onFocus: e => (e => {
              g?.(e), ta(!0)
            })(e),
            onBlur: () => ta(!1),
            onTouchStart: Ze,
            onTouchMove: Qe,
            onTouchEnd: ea,
            onMouseDown: Ze,
            onMouseMove: Qe,
            onMouseUp: ea,
            onKeyUp: e => {
              "Enter" !== e.code && "Space" !== e.code || s || i(e)
            },
            onKeyDown: e => {
              "Tab" === e.key && e.shiftKey && s && (e.preventDefault(), w("backwards")), "Space" === e.code && e.preventDefault()
            },
            "aria-label": s ? y.formatMessage(Vr.events_deck_modal_group_label) : Ce,
            role: s ? "dialog" : "button",
            tabIndex: s ? -1 : 0,
            children: [(0, _.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articledee75b8e3614051c8f0fc97e373e78e5",
              "data-full-header": I,
              style: {
                height: s && c ? `${M}px` : null,
                width: s && c ? `${M}px` : null
              },
              role: "figure",
              children: [Ie && (0, _.jsx)("img", {
                ref: C,
                src: `${Te?.src?.mobile??Te?.src?.desktop}?im=Resize,width=${J}`,
                alt: Te?.alt ?? ""
              }), (0, _.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articledc279f97c134d6e7d30602288b8b10ae",
                "aria-hidden": "true",
                style: {
                  transform: !c || c && s ? `translate3d(0, ${P}px, 0)` : null
                },
                children: [Se && (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlecfe252d5613a21c1d308c98566cabd21",
                  ref: N,
                  children: (0, _.jsx)(j, {
                    text: Se
                  })
                }), (0, _.jsx)("span", {
                  className: "rockstargames-modules-core-newswire-articleb311a78aea53383ab6bd5cbccb52ceeb",
                  tabIndex: -1,
                  ref: S,
                  "aria-hidden": "true",
                  children: Ce
                })]
              })]
            }), (0, _.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled212586e74ea4b4fe934beed9e339f78",
              ref: T,
              "aria-hidden": !s,
              tabIndex: s ? 0 : -1,
              onScroll: () => {
                be(!0), aa(), clearTimeout(pe);
                const e = setTimeout(() => {
                  be(!1)
                }, 100);
                ge(e)
              },
              style: {
                top: s && c ? `${M}px` : null,
                width: s && !c && e ? `${G}px` : null,
                touchAction: fe || c ? "unset" : "none"
              },
              children: [Ce && (0, _.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleda9ef865674c108ffd53cfab2ed2971a",
                role: "heading",
                children: Ce
              }), (0, _.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articleabad8b0c98a7216d91b672492397e6a6",
                role: "text",
                children: (0, _.jsx)(Ve.TinaParser, {
                  components: d,
                  tina: {
                    meta: xe,
                    payload: {
                      content: Ne?.content
                    }
                  }
                })
              }), (0, _.jsx)("button", {
                className: "rockstargames-modules-core-newswire-articlea0b399d3bf191afcf00e7196639527d5",
                type: "button",
                onFocus: w,
                style: {
                  display: s ? "block" : "none"
                }
              })]
            })]
          }) : null
        }),
        Ns = "rockstargames-modules-core-newswire-articleeff7810cc71a3b63bfc3e58cbe4a0279",
        Ss = ({
          prevPage: e,
          prevBtnDisabled: a,
          nextPage: t,
          nextBtnDisabled: r,
          selectedItemNumber: s,
          itemsData: i,
          closeModalMode: o,
          inModalMode: n,
          controlsHidden: c,
          focusTrapControl: l,
          focusTrapDirection: d,
          setTriggerFocusCard: m
        }) => {
          const b = (0, E.useIntl)(),
            p = (0, u.createRef)(),
            g = (0, u.createRef)(),
            f = (0, u.createRef)();
          return (0, u.useEffect)(() => {
            l && ("backwards" === d ? f?.current?.focus() : a ? g?.current?.focus() : p?.current?.focus())
          }, [l, a]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea13ee8af1dd8f09d28c65e56abd782ef",
              "aria-hidden": c || "false",
              children: [(0, _.jsx)("button", {
                className: Ns,
                ref: p,
                type: "button",
                onClick: e,
                disabled: a,
                "aria-label": n ? b.formatMessage(Vr.events_deck_modal_previous_aria_label) : b.formatMessage(Vr.events_deck_previous_aria_label),
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && n && (e.preventDefault(), m(!0))
                }
              }), (0, _.jsxs)("span", {
                className: "rockstargames-modules-core-newswire-articlea6b11adaa46a0c2acc5893d2f5da04f1",
                "aria-hidden": !n,
                children: [(0, _.jsx)(fr, {
                  "aria-live": "polite",
                  children: b.formatMessage(Vr.events_deck_paging_label, {
                    currentPage: s + 1,
                    totalPages: i.length
                  })
                }), (0, _.jsxs)("span", {
                  "aria-hidden": "true",
                  className: "rockstargames-modules-core-newswire-articleeb9f07e9a2e17e70e61b73dec95da6c0",
                  children: [s + 1, (0, _.jsx)("span", {
                    className: "rockstargames-modules-core-newswire-articleaad28b229162f1d7494a2de3a3b6b547"
                  }), i.length]
                })]
              }), (0, _.jsx)("button", {
                className: Ns,
                ref: g,
                type: "button",
                onClick: t,
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && a && n && (e.preventDefault(), m(!0))
                },
                disabled: r,
                "aria-label": n ? b.formatMessage(Vr.events_deck_modal_next_aria_label) : b.formatMessage(Vr.events_deck_next_aria_label)
              })]
            }), (0, _.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlefb0b7933375b44858b7e92cdea86ee81",
              type: "button",
              onClick: o,
              ref: f,
              onKeyDown: e => {
                "Tab" === e.key && !e.shiftKey && n && (e.preventDefault(), m(!0))
              },
              "aria-label": b.formatMessage(Vr.events_deck_modal_close_label),
              "aria-hidden": !n,
              tabIndex: n ? 0 : -1
            })]
          })
        };
      (0, E.withIntl)(e => {
        const {
          setBodyIsLocked: a
        } = (0, g.useBodyScrollable)("EventsDeck"), {
          title: t
        } = e, {
          track: r
        } = (0, V.useGtmTrack)(), [s, i] = (0, u.useState)(!1), o = (() => {
          const {
            data: e
          } = (0, g.useQuery)(vs.TinaModulesList, {
            variables: {
              type: "gtao-event-card",
              orderBy: "priority",
              orderDirection: "desc"
            }
          }), a = e?.tinaModulesList?.results, t = (0, sa.map)(a, "id");
          return Jt({
            ids: t
          })
        })(), [n, c] = (0, u.useState)([]), [l, d] = (0, u.useState)(null), [m, b] = (0, u.useState)(0), [p, f] = (0, u.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [k, v] = (0, u.useState)(!1), h = (0, u.createRef)(), [w, y] = (0, u.useState)(null), j = (0, u.createRef)(), x = (0, u.createRef)(), [N, S] = (0, u.useState)([]), [C, T] = (0, u.useState)(!0), [I, E] = (0, u.useState)(!1), [z, P] = (0, u.useState)(!1), [L, M] = (0, u.useState)([]), [A, D] = (0, u.useState)(404), [F, $] = (0, u.useState)(808), [G, O] = (0, u.useState)(672), [B, q] = (0, u.useState)(336), [H, U] = (0, u.useState)(0), [W, K] = (0, u.useState)(0), [X, Y] = (0, u.useState)(0), [J, Z] = (0, u.useState)(0), [Q, ee] = (0, u.useState)(0), [ae, te] = (0, u.useState)(!1), re = !!(0, g.usePrevious)(ae), [se, ie] = (0, u.useState)(window.innerWidth), [oe, ne] = (0, u.useState)(0), [ce, le] = (0, u.useState)(0), [de, me] = (0, u.useState)(0), [_e, ue] = (0, u.useState)(0), [be, pe] = (0, u.useState)(0), [ge, fe] = (0, u.useState)(0), [ke, ve] = (0, u.useState)(0), [he, we] = (0, u.useState)(0), [ye, je] = (0, u.useState)(-1e3), [xe, Ne] = (0, u.useState)(0), [Se, Ce] = (0, u.useState)(50), [Te, Ie] = (0, u.useState)(0), [Ee, ze] = (0, u.useState)(!1), [Pe, Le] = (0, u.useState)(768), [Me, Ae] = (0, u.useState)(!1), [De, Re] = (0, u.useState)(!1), [Fe, $e] = (0, u.useState)(!1), [Ge, Oe] = (0, u.useState)(!1), [Be, qe] = (0, u.useState)(!1), [He, Ue] = (0, u.useState)(1e3), [We, Ke] = (0, u.useState)(1.2), [Xe, Ye] = (0, u.useState)(0), [Je, Ze] = (0, u.useState)(!1), [Qe, ea] = (0, u.useState)(!1), [aa, ta] = (0, u.useState)(!0), [ra, ia] = (0, u.useState)(!1), [oa, na] = (0, u.useState)(!1), [ca, la] = (0, u.useState)(null), [da, ma] = (0, u.useState)(100), [_a, ua] = (0, u.useState)(!1), [ba, pa] = (0, u.useState)({}), [ga, fa] = (0, u.useState)(""), [ka, va] = (0, u.useState)(0), [ha, ya] = (0, u.useState)(!1), [ja, xa] = (0, u.useState)(!1), [Na, Sa] = (0, u.useState)(0), [Ta, Ia] = (0, u.useState)(0), [Ea, za] = (0, u.useState)(100), [Pa, La] = (0, u.useState)(!1), [Ma, Aa] = (0, u.useState)(!1), [Da, Ra] = (0, u.useState)(!1), [Fa, Va] = (0, u.useState)(!1), [$a, Ga] = (0, u.useState)(!1), [Oa, Ba] = (0, u.useState)(!1), [qa, Ha] = (0, u.useState)("forward"), Ua = () => se * oe + Se, Wa = () => !1 === Ee ? We : 1, Ka = e => e === ke - 1 || e === ke + 1, Xa = () => -1 * ge - _e, Ya = (e, a = !0) => {
          if (!0 === Ee) return 0;
          const t = e.itemNumber % 2 == 0,
            r = A * We;
          if (!0 === t && 0 !== e.itemNumber) {
            const t = hs(e?.element?.current, "top");
            let s = t - X;
            return !1 === a && (s -= t), -1 * (.5 * r + s) + Xe
          }
          return X - .5 * r + Xe
        }, Ja = (e, a, t = !0) => {
          let r = Xa();
          !1 === t && (r = 0);
          const s = se * oe,
            i = !1 === Ee ? A * Wa() : s;
          return e.inModalMode && Ee ? -1 === a ? Ua() * (ke - e.itemNumber) * -1 - e.styles.left : Ua() * (e.itemNumber - ke) - e.styles.left : -1 === a ? -1 * e.styles.left - i - Se + r : s - e.styles.left + Se + r
        }, Za = (e, a, t) => {
          -1 === a && (E(!1), T(!0)), E(!1 === t && e >= a || !0 === t && e + 1 === a), T(e <= 0)
        }, Qa = (e, a = !1) => {
          if (oa || ra) return;
          if (na(!0), ae) return void((e = !1) => {
            if (ke + 1 >= n.length) return;
            const a = N[ke + 1]?.tina?.payload?.meta?.title ?? `card-${ke+1}`;
            r({
              event: e ? "modal_swipe" : "modal_next",
              card_name: a,
              card_id: ke + 1,
              position: ke + 1,
              view_name: `${N[ke+1].source_content_id}/${a}`,
              source_content_id: N[ke + 1].source_content_id,
              source_content_name: N[ke + 1].source_content_name
            }), Za(ke + 1, n.length, !0), Ee ? Ee && S(N.map(e => {
              e.itemNumber === ke - 1 ? e.upNext = !1 : e.itemNumber === ke + 2 ? e.upNext = !0 : e.itemNumber === ke + 1 ? e.active = !0 : e.itemNumber === ke && (e.upNext = !0, e.active = !1);
              const a = e.styles.transform.replace("translate3d(", "").split(",");
              let t = Number(a[0].replace("px", ""));
              t -= Ua();
              const r = `translate3d(${t}px,${a[1]},${a[2]}`;
              return e.styles = {
                ...e.styles,
                transform: r
              }, e
            })) : S(N.map(e => (e.itemNumber === ke - 1 ? e.upNext = !1 : e.itemNumber === ke + 2 ? e.upNext = !0 : e.itemNumber === ke + 1 ? (e.active = !0, e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${Xa()}px, ${Xe}px, 0) scale(1)`
            }) : e.itemNumber === ke && (e.upNext = !0, e.active = !1, e.styles = {
              ...e.styles,
              transform: `translate3d(${Ja(e,-1)}px, ${Ya(e)}px, 0) scale(${Wa()})`
            }), e))), ve(ke + 1)
          })(a);
          const s = be + 1;
          if (!(s > Q))
            if (r({
                event: a ? "carousel_swipe" : "carousel_next",
                element_placement: t?.toLowerCase() ?? ""
              }), Za(s, Q, !1), Ee) {
              let e = s * B * -1;
              e < ye && (e = ye, E(!0), T(!1), pe(Q)), pe(s), S(N.map(a => (a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, 0, 0)`
              }, a)))
            } else {
              let e = ge - W;
              pe(s), e < ye && (e = ye, E(!0), T(!1), pe(Q)), fe(e)
            }
        }, et = (e, a = !1) => {
          if (oa || ra) return;
          if (na(!0), !0 === ae) return void((e = !1) => {
            if (oa) return;
            if (ke - 1 < 0) return;
            const a = N[ke - 1]?.tina?.payload?.meta?.title ?? "card-" + (ke - 1);
            r({
              event: e ? "modal_swipe" : "modal_previous",
              element_placement: t?.toLowerCase(),
              card_name: a,
              card_id: ke - 1,
              position: ke - 1,
              view_name: `${N[ke-1].source_content_id}/${a}`,
              source_content_id: N[ke - 1].source_content_id,
              source_content_name: N[ke - 1].source_content_name
            }), Za(ke - 1, n.length, !0), Ee || S(N.map(e => (e.itemNumber === ke + 1 ? e.upNext = !1 : e.itemNumber === ke - 2 ? e.upNext = !0 : e.itemNumber === ke ? (e.upNext = !0, e.active = !1, e.styles = {
              ...e.styles,
              transform: `translate3d(${Ja(e,1)}px, ${Ya(e)}px, 0) scale(${Wa()})`
            }) : e.itemNumber === ke - 1 && (e.active = !0, e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${Xa()}px, ${Xe}px, 0) scale(1)`
            }), e))), Ee && S(N.map(e => {
              e.itemNumber === ke + 1 ? e.upNext = !1 : e.itemNumber === ke - 2 ? e.upNext = !0 : e.itemNumber === ke ? (e.upNext = !0, e.active = !1) : e.itemNumber === ke - 1 && (e.active = !0);
              const a = e.styles.transform.replace("translate3d(", "").split(",");
              let t = Number(a[0].replace("px", ""));
              t += Ua();
              const r = `translate3d(${t}px,${a[1]},${a[2]}`;
              return e.styles = {
                ...e.styles,
                transform: r
              }, e
            })), ve(ke - 1)
          })(a);
          const s = be - 1;
          if (!(s < 0))
            if (r({
                event: a ? "carousel_swipe" : "carousel_previous",
                element_placement: t?.toLowerCase()
              }), Za(s, Q, !1), Ee) {
              let e = s * B * -1;
              e > 0 && (e = 0, T(!0), E(!1), pe(0)), pe(s), S(N.map(a => (a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, 0, 0)`
              }, a)))
            } else {
              let e = ge + W;
              pe(s), (e > 0 || 0 === e || -1 * e < F) && (e = 0, T(!0), E(!1), pe(0)), fe(e)
            }
        }, at = e => {
          if (!ae && Pa) return;
          if (ha || ae || Ee) return;
          const a = ws(e);
          va(a.x)
        }, tt = e => {
          if (!ae && Pa) return;
          if (ha || 0 === ka || ae || Ee) return;
          const a = ws(e),
            t = a.x > ka ? 1 : -1;
          let r = Math.abs(ka - a.x) * t;
          (0 === be && 1 === t || be === Q && -1 === t) && (r *= .35), xa(!0), Sa(r)
        }, rt = e => {
          if (!ae && Pa) return;
          if (ha || ae || Ee) return;
          const a = ws(e),
            t = a.x > ka ? 1 : -1,
            r = Math.abs(ka - a.x);
          fa(r > Ea ? t > 0 ? "prev" : "next" : ""), st()
        }, st = () => {
          ya(!0), va(0), Sa(0), xa(!1)
        }, it = e => {
          ja && (rt(e), xa(!1))
        }, ot = (e, a, t = "") => e.map((e, r) => {
          let s = r * B,
            i = r;
          !1 === Ee && (i = Math.ceil(.5 * r) + 1, r > 0 && (s = 2 === i ? G : G + B * (i - 2)));
          const o = L[r];
          return o?.current && (o.current.scrollTop = 0), {
            ...e,
            mobileMode: Ee,
            itemNumber: r,
            columnNumber: i,
            inModalMode: !1,
            upNext: !0,
            active: !1,
            openModalMode: dt,
            element: o,
            transitionStyle: a,
            styles: {
              left: s,
              transform: "" === t ? null : t,
              height: null,
              top: null
            },
            trapFocus: mt
          }
        }), nt = e => {
          if (Ee) return;
          S(ot(n, "cardClose"));
          let a = Math.ceil((N[e].columnNumber + 1) / H) - 1;
          Ma && (a = 0), pe(a);
          let t = a * W * -1;
          Te < ce ? (t = 0, T(!0), E(!0), pe(0)) : t < ye ? (t = ye, T(!1), E(!0), pe(Q)) : Za(a, Q, !1), fe(t), ve(0)
        }, ct = () => {
          const e = N[ke]?.tina?.payload?.meta?.title ?? `card-${ke}`;
          r({
            event: "modal_close",
            element_placement: t?.toLowerCase(),
            card_name: e,
            card_id: ke,
            position: ke,
            view_name: `${N[ke].source_content_id}/${e}`,
            source_content_id: N[ke].source_content_id,
            source_content_name: N[ke].source_content_name
          });
          const a = N[ke]?.element?.current;
          if (Ee) {
            let e = ke * B * -1;
            e < ye && (e = ye, E(!0), T(!1), pe(Q)), pe(ke), Za(ke, Q, !1), S(ot(n, "cardClose", `translate3d(${e}px, 0, 0)`))
          } else nt(ke);
          j.current.style.transform = "translate(0px, 0px)", j.current.style.transition = "all var(--eventDeck-transitionCardClose)", Ze(!1), Oe(!1), te(!1), Re(!1), Ae(!1), qe(!1), setTimeout(() => {
            $e(!0), a.focus()
          }, He)
        }, lt = (e, a) => {
          2 == e && Aa(Te - a <= .25 * A)
        };
        (0, u.useEffect)(() => {
          !1 !== Fe && ($e(!1), Ze(!1), w.style.zIndex = null, S(N.map(e => (e.transitionStyle = "", e))))
        }, [Fe]);
        const dt = e => {
            setTimeout(() => {
              pa(e), ua(!0)
            }, 1)
          },
          mt = e => {
            Ba(!0), Ha(e), setTimeout(() => {
              Ba(!1)
            }, 1e3)
          };
        (0, u.useEffect)(() => {
          $a && (Ga(!1), N[ke]?.element?.current?.focus())
        }, [$a]), (0, u.useEffect)(() => {
          if (!_a) return;
          if (ua(!1), oa) return;
          ve(Number(ba?.target?.dataset?.itemPosition)), Re(!0), ia(!0), aa && ta(!1);
          const e = N[ba?.target?.dataset?.itemPosition].source_content_id,
            a = N[ba?.target?.dataset?.itemPosition].source_content_name,
            s = N[ba?.target?.dataset?.itemPosition]?.tina?.payload?.meta?.title;
          r({
            event: "card_click",
            element_placement: t?.toLowerCase(),
            card_name: s ?? `card-${ke}`,
            card_id: ba?.target?.dataset?.itemPosition,
            position: ba?.target?.dataset?.itemPosition,
            view_name: `${e}/${s}`,
            source_content_id: e,
            source_content_name: a
          })
        }, [_a]), (0, u.useEffect)(() => {
          if (!De || ae) return;
          Re(!1);
          const e = (() => {
            const e = w?.getBoundingClientRect().top;
            return Ye(-1 * (e - m)), -1 * (e - 140)
          })();
          Ee && S(N.map(e => {
            const a = e.itemNumber > ke + 3 || e.itemNumber < ke - 3;
            return e.styles = {
              ...e.styles,
              display: a ? "none" : null,
              transition: a ? "none" : null
            }, e
          })), w.style.zIndex = "var(--eventDeck-zIndexOverlay)", Ze(!0), j.current && (j.current.style.transition = "all var(--eventDeck-transitionCardOpen)", j.current.style.transform = `translate(${-1*_e}px, ${e}px)`), Oe(!0), setTimeout(() => {
            Ae(!0)
          }, 1)
        }, [De]);
        const _t = () => {
          S(N.map((e, a) => {
            e.active = a === ke, e.inModalMode = !0, e.transitionStyle = "cardOpen", Ee && (e.upNext = Ka(e.itemNumber));
            const t = !Ee;
            let r = 0;
            if (Ee) {
              const e = he + 5 * m;
              r = window.innerHeight - e
            }
            return e.itemNumber < ke ? e.styles = {
              ...e.styles,
              height: Ee ? `${r}px` : null,
              transform: `translate3d(${Ja(e,-1,t)}px, ${Xe}px, 0) scale(${Wa()})`
            } : e.itemNumber > ke ? e.styles = {
              ...e.styles,
              height: Ee ? `${r}px` : null,
              transform: `translate3d(${Ja(e,1,t)}px, ${Xe}px, 0) scale(1)`
            } : e.itemNumber === ke && (e.styles = Ee ? {
              ...e.styles,
              height: `${r}px`,
              transform: `translate3d(${-1*e.styles.left}px, ${Xe}px, 0) scale(1)`
            } : {
              left: 0,
              top: 0,
              transform: `translate3d(${Xa()}px, ${Xe}px, 0) scale(1)`
            }), e
          }))
        };
        (0, u.useEffect)(() => {
          !1 !== Me && !0 !== ae && (te(!0), Ae(!1), Za(ke, N.length, !0), j.current && (j.current.style.transition = "all var(--eventDeck-transitionCardOpen)", j.current.style.transform = `translate(${-1*_e}px, ${Xe}px)`), _t(), Ee ? (fe(0), ia(!1), ea(!0)) : qe(!0))
        }, [Me]), (0, u.useEffect)(() => {
          Qe && (ea(!1), S(N.map(e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e))))
        }, [Qe]);
        const ut = (e = !1) => {
          S(N.map(a => {
            if (a.upNext = Ka(a.itemNumber), a.itemNumber !== ke) {
              let e = Ja(a, 1);
              a.itemNumber < ke && (e = Ja(a, -1)), a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, ${Ya(a)}px, 0) scale(${Wa()})`
              }
            } else a.itemNumber === ke && !Ee && e && (a.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${Xa()}px, ${Xe}px, 0) scale(1)`
            });
            return a
          }))
        };
        (0, u.useEffect)(() => {
          !1 !== Be && !0 !== Ee && (qe(!1), setTimeout(() => {
            ut(), ia(!1)
          }, 1))
        }, [Be]), (0, u.useEffect)(() => {
          S(ot(n, ""))
        }, [G, B, n]), (0, u.useEffect)(() => {
          const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
          Ra(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
        }, []), (0, u.useEffect)(() => {
          const e = re !== ae,
            t = window.document.body.style.overflowY;
          return ae ? (e && (window.document.body.style.overflowY = "hidden", a(!0)), Da && Va(!0)) : ja || ae || (e && (window.document.body.style.overflowY = t, a(!1)), Da && Fa && Va(!1)), () => {
            window.document.body.style.overflowY = t
          }
        }, [ae, ja]), (0, u.useEffect)(() => {
          if (!oa) return;
          clearTimeout(ca);
          const e = setTimeout(() => {
            na(!1)
          }, da);
          la(e)
        }, [oa]), (0, u.useEffect)(() => {
          k && setTimeout(() => {
            v(!1)
          }, 3e3)
        }, [k]), (0, u.useEffect)(() => {
          v(!0), fe(0), pe(0);
          let e = Math.ceil(Math.ceil(Te / B) / H);
          Ee && (e = N.length - 1), e < 0 && (e = 1), Za(0, e, !1), ae && ct()
        }, [Ee]), (0, u.useEffect)(() => {
          j.current && !ae && (j.current.style.transform = "")
        }, [j, Ee, ae]), (0, u.useEffect)(() => {
          const e = (o ?? []).map(e => {
            let a = null;
            return "FeaturedEventInfo" === e?.tina?.payload?.content[0]?._template && e?.tina?.variables?.keys?.meta && (a = e?.tina?.variables?.keys?.meta?.title), {
              ...e,
              title: a,
              source_content_id: e?.tina?.payload?.meta?.foreignId,
              source_content_name: e?.tina?.payload?.meta?.foreignTitle,
              view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
            }
          });
          e.length > 10 && (e.length = 10), c(e)
        }, [o]), (0, u.useEffect)(() => {
          M(n.map(() => (0, u.createRef)()))
        }, [n]), (0, u.useEffect)(() => {
          const e = e => {
            const {
              key: a
            } = e;
            "ArrowLeft" === a ? et(0, !1) : "ArrowRight" === a ? Qa(0, !1) : "Escape" === a && ae && ct()
          };
          return document.addEventListener("keydown", e), () => {
            document.removeEventListener("keydown", e)
          }
        }, [oa, ra, ae, j]), (0, u.useEffect)(() => {
          if (j.current) {
            let e = j?.current?.clientHeight;
            e += hs(j?.current, "margin-top"), e += hs(j?.current, "margin-bottom"), we(e)
          }
        }, [j, x]), (0, u.useEffect)(() => {
          ae && (() => {
            const e = w?.getBoundingClientRect().top,
              a = -1 * (e - m);
            if (S(N.map(e => {
                if (e.styles.transform) {
                  const t = e.styles.transform.split(","),
                    r = `${t[0]}, ${a}px,${t[2]}`;
                  e.styles = {
                    ...e.styles,
                    transform: r
                  }
                }
                return e
              })), j.current) {
              const a = -1 * (e - m);
              j.current.style.transform = `translate(${-1*_e}px, ${a}px)`
            }
          })()
        }, [Ee, ae, Xe]), (0, u.useEffect)(() => {
          ae || (Te <= oe * se ? (fe(0), E(!0), T(!0)) : ge < ye ? (E(!1), T(!0), pe(0), fe(0)) : ge < 0 && (E(!1), pe(Q - 1)), Te > oe * se && I && E(!1))
        }, [ye, Te]), (0, u.useEffect)(() => {
          if (h.current) {
            y(h.current);
            const e = hs(document.documentElement, "--root-font-size"),
              a = hs(h.current, "--eventDeck-modalGutters") * e,
              t = hs(h.current, "--eventDeck-collapsedMaxWidth");
            me(t);
            let r = se - 2 * a;
            r > t && (r = t), le(r), ne(r / se);
            const s = 2 * a + r;
            let i = 0;
            s < se && (i = .5 * (se - s)), ue(i);
            let o = hs(h.current, "--eventDeck-modalBottomGutter");
            o *= e;
            const c = window.innerHeight - (he + o);
            Y(.5 * r < c ? r / 4 : .5 * c);
            const m = hs(h.current, "--eventDeck-mobileBreakpoint");
            Le(m);
            let _ = hs(h.current, "--eventDeck-itemSize");
            _ *= e, D(_);
            let u = hs(h.current, "--eventDeck-modalGutterGap");
            u *= e, Ce(u);
            let p = hs(h.current, "--eventDeck-insideMargin");
            p *= e;
            const g = !1 === Ee ? 2 * _ + p : _ + p;
            $(g), O(g + p);
            const f = _ + p;
            q(f);
            let k = Math.ceil(.5 * (n.length - 1)) * f + g;
            Ee && (k = n.length * f), Ie(k), 0 !== Te && je(-1 * Te + r);
            let v = Math.ceil(Math.ceil(k / f) / H);
            (Ee || ae) && (v = N.length - 1), ee(v), lt(v, r);
            const w = hs(h.current, "--eventDeck-itemScaleUpAmount");
            Ke(w), Ue(hs(h.current, "--eventDeck-cardCloseTransitionDuration")), b(hs(h.current, "--eventDeck-itemImageTitleMargins") * e), null !== l && e !== l && (d(e), ae && ut()), null === l && d(e)
          }
        }, [h, n]), (0, u.useEffect)(() => {
          if (ae && !Ee) {
            ut();
            const e = w?.getBoundingClientRect().top,
              a = -1 * (e - m);
            a !== Xe && Ye(a)
          } else ae || Ee || lt(Q, oe)
        }, [p]), (0, u.useEffect)(() => {
          Ma && !Ee ? (P(!ae), La(!0)) : C && I && !ae ? (P(!0), La(!0)) : (P(!1), La(!1))
        }, [C, I, Ma, ae, Ee]), (0, u.useEffect)(() => {
          const e = (0, sa.debounce)(e => {
            ie(e), ze(e < Pe);
            const a = (1 - oe) / 2;
            Ne(e * a);
            const t = Math.floor(ce / B);
            U(t);
            let r = t * B;
            r > de && (r = de), K(r), Z(e - e * a);
            const s = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
            if (s !== p && f(s), ae && s === p && !k) {
              const e = w?.getBoundingClientRect().top,
                a = -1 * (e - m);
              a !== Xe && Ye(a)
            }
          }, 300);
          return window.addEventListener("resize", () => {
            e(window.innerWidth)
          }), window.addEventListener("scroll", () => {
            ae && Ee && e(window.innerWidth)
          }), e(window.innerWidth), () => {
            window.removeEventListener("resize", () => {
              e(window.innerWidth)
            })
          }
        }, [B, oe, ae, Ee]), (0, u.useEffect)(() => {
          !1 !== ae && !0 !== k && (Ee ? _t() : ut(!0))
        }, [J, W, Se, A, se, xe, X, Xe]), (0, u.useEffect)(() => {
          const e = () => {
            if (h.current && aa) {
              const e = h.current.getBoundingClientRect(),
                a = .2 * window.innerHeight;
              window.innerHeight - e.top >= a && ta(!1)
            }
          };
          return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
        }, [h]);
        const bt = (0, u.useCallback)(() => {
          if (null !== h.current && !s) {
            const {
              top: a
            } = h?.current?.getBoundingClientRect() || 0;
            a <= .6 * window.innerHeight && (r({
              event: "page_section_impression",
              element_placement: e?._memoq?.title?.toLowerCase()
            }), i(!0))
          }
        }, [h]);
        (0, u.useEffect)(() => (window.addEventListener("scroll", bt), () => {
          window.removeEventListener("scroll", bt)
        }), [bt, h]), (0, u.useEffect)(() => {
          "next" === ga ? (Qa(0, !0), fa("")) : "prev" === ga && (et(0, !0), fa(""))
        }, [ga]), (0, u.useEffect)(() => {
          h.current && h.current.addEventListener("mouseleave", () => {
            ja && st()
          })
        }, [h, ja]), (0, u.useEffect)(() => (document.body.addEventListener("mouseleave", it), () => {
          document.body.removeEventListener("mouseleave", it)
        }), [ja]), (0, u.useEffect)(() => {
          ha && setTimeout(() => {
            ya(!1), va(0)
          }, da)
        }, [ha]), (0, u.useEffect)(() => {
          za(Ee ? 20 : 100)
        }, [Ee]), (0, u.useEffect)(() => {
          ma(ae ? 500 : 100)
        }, [ae]);
        const pt = e => {
            e.currentTarget !== e.target || ae || Ma || nt(e.target.dataset.itemPosition)
          },
          gt = (0, Ve.useTinaComponents)(),
          ft = (0, u.useMemo)(() => ({
            ...gt,
            CardWithImageGallery: ks,
            HTMLElement: wa,
            ImageWithBadge: Ca.A,
            Carousel: R.A,
            GroupOfItems: Tr.default,
            UnorderedList: er.A
          }), [gt]),
          kt = (0, u.useMemo)(() => N.map(e => (0, u.createElement)(xs, {
            ...e,
            refDeck: h,
            key: e?.id ?? e?.sync_hash,
            components: ft,
            prevPage: et,
            nextPage: Qa,
            onFocus: pt,
            loadCssRawValue: hs,
            selectedItemNumber: ke,
            carouselTitle: t,
            sharedDraggingDelta: Ta,
            setSharedDraggingDelta: Ia
          })), [N, h, ft, et, Qa, ke]);
        return !kt?.length || kt.length <= 0 ? null : (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleb3206f796ddd61f3b6d1974ea73a4f22",
            "data-modal-mode": Ge,
            "aria-hidden": "true"
          }), (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee623ea950c02afbb9d28949ca4701ca4",
            "data-modal-mode": ae,
            "data-faded": aa,
            ref: h,
            onTouchStart: at,
            onTouchMove: tt,
            onTouchEnd: rt,
            onMouseDown: at,
            onMouseMove: tt,
            onMouseUp: rt,
            tabIndex: -1,
            role: "presentation",
            children: [(0, _.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb8d0a147dd4f1835ba5495bac02f4c11",
              "aria-hidden": "true"
            }), (0, _.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea758545d118b90def20e860fe541c26e",
              "data-modal-mode": ae,
              ref: j,
              "data-animating": Je,
              children: [(0, _.jsx)("h2", {
                className: "rockstargames-modules-core-newswire-articlebe12152c36226103d53925a82ba66452",
                children: t
              }), (0, _.jsx)(Ss, {
                prevPage: et,
                prevBtnDisabled: C,
                nextPage: Qa,
                nextBtnDisabled: I,
                selectedItemNumber: ke,
                itemsData: n,
                closeModalMode: ct,
                inModalMode: ae,
                controlsHidden: z,
                focusTrapControl: Oa,
                setTriggerFocusCard: Ga,
                focusTrapDirection: qa
              }), (0, _.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec4f4d692febb9861a621596f22e32d93",
                id: "eventsDeck-content",
                role: "region",
                "aria-live": "polite",
                children: `${ke+1}/${n.length} ${N[ke]?.tina?.payload?.meta?.title}`
              })]
            }), (0, _.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlef369e1390b3aa251df43bea9c55634f2",
              "data-modal-mode": ae,
              "data-is-dragging": ja,
              style: {
                transform: `translate3d(${ge+Na}px, 0, 0)`,
                width: `${Te}px`
              },
              ref: x,
              children: kt
            })]
          })]
        })
      }, Yr);
      const Cs = {
          content: "rockstargames-modules-core-newswire-articlec65ddebc8ee2173143d87e1079f2455a",
          customModalContent: "rockstargames-modules-core-newswire-articlefc96cdfdaeb2ad81b1b409fcb233657e",
          pillBtn: "rockstargames-modules-core-newswire-articleddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-modules-core-newswire-articleb4fbb4006fc27b899dac5e522ef574e3"
        },
        {
          variants: Ts
        } = r,
        {
          variants: Is
        } = r,
        {
          JS: Es,
          CS: zs,
          XM: Ps,
          Bg: Ls
        } = o,
        Ms = {
          Card: ({
            id: e,
            title: a,
            content: t,
            size: r = "md",
            expandedType: s = "short",
            textOverlayProps: i = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: o = [],
            deckProps: n = {},
            to: c = null,
            tina: l = {},
            position: d = 0,
            sectionTitle: m = "",
            theme: b,
            pricingOptions: p,
            cardIds: g,
            platformOptions: f = null
          }) => {
            const k = (0, Ve.useTinaPayload)(),
              v = l?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
              [h, w] = (0, u.useState)(n?.size ?? r),
              [y, j] = (0, u.useState)(0),
              x = void 0 !== p?.hasPricingOptions || void 0 !== f?.hasPlatformOptions;
            return (0, u.useEffect)(() => {
              w(n?.size ?? r)
            }, [n?.size, r]), (0, _.jsx)(Qr, {
              id: e,
              title: a,
              size: h,
              expandedType: s,
              images: o,
              deckProps: n,
              prod: v,
              payload: {
                content: t,
                meta: {}
              },
              variants: Ts.plainCard,
              textOverlayProps: i,
              modalProps: {
                className: Cs.customModal,
                contentClassName: Cs.customModalContent
              },
              expandedCardContents: (0, _.jsx)(ms, {
                images: o,
                prod: v,
                expandedView: !0
              }, `expanded-${e}`),
              position: d,
              sectionTitle: m,
              theme: b,
              cardIds: g,
              pricingOptions: p,
              platformOptions: f,
              pricingContainerHeight: y,
              isProductCard: x,
              children: (0, _.jsx)(rs, {
                expandedType: s,
                to: c,
                sectionTitle: m,
                id: e,
                cardTitle: a,
                position: d,
                children: (0, _.jsx)("div", {
                  className: Cs.content,
                  "data-product": x,
                  children: (0, _.jsx)(Br, {
                    title: a,
                    size: h,
                    textOverlayProps: i,
                    pricingOptions: p,
                    platformOptions: f,
                    setPricingContainerHeight: j,
                    children: (0, _.jsx)(ms, {
                      images: o,
                      prod: v
                    })
                  })
                })
              })
            })
          },
          CardWithImageGallery: ks,
          TextCard: ({
            title: e,
            content: a,
            size: t = "md",
            badgeText: r
          }) => {
            const s = {
              ...(0, Ve.useTinaComponents)(),
              HTMLElement: wa,
              UnorderedList: er.A
            };
            return (0, _.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlecfa8d259e6ae05cd5f97d50306be5ffe",
              "data-size": t,
              children: (0, _.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlea4a39548fac12526e8721ffa8813e66a",
                children: [r && (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlecf77e65e2af63ee114825607dde3d11e",
                  children: r
                }), (0, _.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articlef903ce7e605696e1bc18c4bc22274a6e",
                  children: [e && (0, _.jsx)("h3", {
                    children: e
                  }), (0, _.jsx)(Ve.TinaParser, {
                    components: s,
                    tina: {
                      payload: {
                        content: a
                      }
                    }
                  })]
                })]
              })
            })
          },
          ...n
        },
        As = zs.withFadeIn(Ls(({
          cards: e = [],
          size: a,
          name: t,
          title: r,
          description: s,
          disclaimer: i,
          customSlidesPerView: o = null,
          theme: n = "none",
          cardSizeBreakpoints: c = {},
          customAspectRatio: l = "3/1",
          titleBadge: d = null,
          id: m = ""
        }) => {
          const b = (0, u.useRef)(null),
            p = (0, sa.map)(e, "id"),
            g = Ps({
              ids: p
            }),
            [f, k] = (0, u.useState)(o),
            [v] = (0, T.useSearchParams)(),
            [h, w] = (0, u.useState)(!1);
          (0, u.useEffect)(() => {
            if ("fob" === a) {
              const e = v.get("section");
              if (e && "games" === e && !h && (w(!0), b.current)) {
                const e = 100;
                window.scrollTo(0, b.current.offsetTop - e)
              }
            }
          }, []), (0, u.useEffect)(() => {
            if (!b.current) return;
            const e = () => {
              if (!b.current) return;
              const e = o || window.getComputedStyle(b.current).getPropertyValue("--slides-per-view");
              k(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          });
          const y = (0, u.useMemo)(() => {
            let e = 0;
            if (!g) return null;
            let t = "blank",
              s = !1;
            return g.forEach(e => {
              "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (s = e.tina.payload.content[0].excludeFromModal))
            }), g.reduce((i, o) => {
              if (o) {
                const {
                  id: c,
                  tina: l
                } = o, d = (0, sa.clone)(l);
                (0, sa.set)(d, "payload.meta.id", c);
                const m = p.filter(e => e !== t || e === t && !s);
                i.push((0, _.jsx)(Ve.TinaParser, {
                  components: Ms,
                  tina: d,
                  componentProps: {
                    deckProps: {
                      size: a
                    },
                    tina: d,
                    id: c,
                    position: e,
                    sectionTitle: r,
                    theme: n,
                    cardIds: m
                  }
                }, c)), e += 1
              }
              return i
            }, [])
          }, [g, a]);
          return (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlecf8eaaa96e41e0c9b5a5a1745ded9986",
            "data-theme": n,
            ref: b,
            id: m,
            children: [(0, _.jsx)(Es, {
              description: s,
              size: a,
              cardSizeBreakpoints: c,
              slideChildren: y,
              title: r,
              name: t,
              customSlidesPerView: f,
              customAspectRatio: l,
              titleBadge: d,
              theme: n
            }), i && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articled6d0f9d842469dec608825829148dff6",
              children: (0, _.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlee22c0580e1e1d2471b4ca2e60e6b900f",
                children: (0, _.jsx)(Ct, {
                  html: i
                })
              })
            })]
          })
        }));
      var Ds = t(59139);
      const Rs = ({
          children: e,
          hash: a
        }) => {
          const t = (0, u.useRef)(null),
            r = window.location.hash?.replace("#", "") === a ? a : null;
          return (0, u.useEffect)(() => {
            r && setTimeout(() => {
              const e = document.getElementById(r);
              e && e.scrollIntoView()
            }, 1e3)
          }, []), (0, _.jsx)("div", {
            ref: t,
            id: a,
            children: e
          })
        },
        Fs = {
          discountsCarousel: "rockstargames-modules-core-newswire-articlee323ee7ef1389c61bd0f7f5edf7ae87f",
          discountsCarouselItem: "rockstargames-modules-core-newswire-articledbe871f29ce887fdb3633adfa3a508e3",
          fontUpdate: "rockstargames-modules-core-newswire-articleb9e436db9c819a6291277c1c3b14a102",
          singleImage: "rockstargames-modules-core-newswire-articleef61c1eb2ac13f1f00f9fbcf97b591d9",
          wrapper: "rockstargames-modules-core-newswire-articlecf1f4a81a7b06d2f1741f014efccd835"
        },
        Vs = ({
          wrapper: e,
          children: a,
          length: t
        }) => t > 1 ? e(a) : a,
        $s = ({
          items: e,
          noInfiniteScroll: a = !1,
          size: t = null,
          perPage: r = null,
          customSlidesPerView: s = null,
          style: i = {}
        }) => {
          const o = (0, u.useRef)(null),
            [n, c] = (0, u.useState)(null),
            [l, d] = (0, u.useState)(t);
          return (0, u.useEffect)(() => {
            !t && r && d(1 === r ? "lg" : "sm"), t || r || (d("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }, [t, r]), (0, u.useEffect)(() => {
            if (!o.current) return;
            const e = () => {
              const e = s || window.getComputedStyle(o.current).getPropertyValue("--slides-per-view");
              c(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [o, s]), e.length ? (0, _.jsx)(Vs, {
            length: e.length,
            wrapper: e => (0, _.jsx)("div", {
              "data-size": l,
              ref: o,
              className: Fs.wrapper,
              children: (0, _.jsx)(R.A, {
                className: Fs.discountsCarousel,
                noInfiniteScroll: a,
                style: {
                  ...i,
                  "--per-page": n,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: e.map((a, t) => (0, _.jsxs)("div", {
              className: [Fs.discountsCarouselItem, 1 === e.length ? Fs.singleImage : ""].join(" "),
              children: [(0, _.jsx)(Ca.A, {
                ariaLabel: a?.ariaLabel,
                image: a?.image ?? {
                  alt: a?.alt ?? "",
                  desktop: a?.img ?? null,
                  mobile: a?.imgMobile ?? null
                },
                badge: a?.badge ?? a?.image?.badge ?? a.discountTxt,
                splitter: a?.splitter ?? a?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, _.jsx)(qe.A, {
                className: Fs.fontUpdate,
                item: a
              })]
            }, a?.key ?? t))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        },
        Gs = {
          carouselDesc: "rockstargames-modules-core-newswire-articlee9bfd17e6e24970ba255a08b588a037d",
          carouselOnMobile: "rockstargames-modules-core-newswire-articlea560549799c4dc8483f97da50f1981b6",
          columnsDesktop2: "rockstargames-modules-core-newswire-articlef23776fba4cb02462ec7d4f659513b29",
          columnsDesktop3: "rockstargames-modules-core-newswire-articled913dbb31f95159240657470a2d5f843",
          columnsDesktop4: "rockstargames-modules-core-newswire-articlef86c12578b1b364cfcf74e21ec26b8cf",
          coupons: "rockstargames-modules-core-newswire-articlef5e7daa5da737825dfb76d422e3fcc40",
          extraDiv: "rockstargames-modules-core-newswire-articled4111fecce89d56df4c14b2046b9f96e",
          gridCarousel: "rockstargames-modules-core-newswire-articled2a5e95f5d1614aef34b0ec5c2b7447d",
          gridItem: "rockstargames-modules-core-newswire-articled7d79c7b10177f979b26b7a23f8ce275",
          gridText: "rockstargames-modules-core-newswire-articlea0473db56227eedff7fa7b8caef70981",
          imageArea: "rockstargames-modules-core-newswire-articlefe28c5ef2a9b0db8497edb03e6abfd26",
          imageAreaBg: "rockstargames-modules-core-newswire-articleeb7557efb1c2a51b525bb0eddad25f5e",
          limitedGrid: "rockstargames-modules-core-newswire-articled07881e40e8304c6a71f439189eaf726",
          limitedGridContent: "rockstargames-modules-core-newswire-articleef7041902f2c885a1e72e11068b88472",
          noTextFit: "rockstargames-modules-core-newswire-articlee4c624766c99d0bc6602652f0926cf66",
          thirdLine: "rockstargames-modules-core-newswire-articleba521de069b7af801a2ce695f33cbcce"
        },
        Os = ({
          to: e,
          children: a
        }) => e ? (0, _.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        Bs = ({
          items: e,
          noTextFit: a,
          type: t,
          carouselOnMobile: r,
          columns: s = {
            desktop: 3,
            mobile: 2
          }
        }) => {
          const [i, o] = (0, u.useState)(null), [n, c] = (0, u.useState)(3), l = (0, u.useRef)(null);
          return (0, u.useEffect)(() => {
            const a = window.getComputedStyle(l.current).getPropertyValue("--divisible-desktop"),
              t = () => {
                const e = window.innerWidth;
                c(e <= 767 ? 2 : a)
              };
            if (e?.content.length && e?.content.length >= n) {
              let {
                length: a
              } = e.content;
              const t = [];
              if (a % n !== 0) {
                let e = 0;
                do {
                  t.push((0, _.jsx)("div", {
                    className: `${Gs.gridItem} ${Gs.extraDiv}`
                  }, "limited-grid-" + e++)), a++
                } while (a % n !== 0)
              }
              o(t)
            }
            return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
          }, [n, l]), (0, _.jsxs)("div", {
            className: `${Gs.limitedGrid} ${r?Gs.carouselOnMobile:""}`,
            children: [(0, _.jsxs)("div", {
              ref: l,
              style: {
                "--divisible-desktop": s.desktop,
                "--divisible-mobile": s.mobile
              },
              className: `\n                    ${Gs.limitedGridContent}\n                    ${2===s.desktop?Gs.columnsDesktop2:""}\n                    ${3===s.desktop?Gs.columnsDesktop3:""}\n                    ${s.desktop>=4?Gs.columnsDesktop4:""}\n                    ${a?Gs.noTextFit:""}\n                    ${t?Gs[t]:""}\n                `,
              children: [(0, _.jsx)("div", {
                className: Gs.thirdLine
              }), e.content.map((e, t) => (0, _.jsx)("div", {
                className: Gs.gridItem,
                children: (0, _.jsxs)(Os, {
                  to: e?.href ?? e?.to,
                  children: [!a && (0, _.jsx)(At.Root, {
                    className: Gs.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: (0, _.jsx)(At.Text, {
                      children: e.title
                    })
                  }), (0, _.jsx)("div", {
                    className: Gs.imageArea,
                    children: (0, _.jsx)(Ca.A, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), a && (0, _.jsx)("p", {
                    children: e.title
                  })]
                })
              }, t)), i]
            }), r && (0, _.jsx)("div", {
              className: Gs.gridCarousel,
              children: (0, _.jsx)(R.A, {
                children: e.content.map((e, a) => (0, _.jsxs)("div", {
                  children: [(0, _.jsx)("div", {
                    className: `${Gs.imageArea} ${Gs.imageAreaBg}`,
                    children: (0, _.jsx)(Ca.A, {
                      className: t ? Gs[t] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, _.jsx)("p", {
                    className: Gs.carouselDesc,
                    children: (0, _.jsx)(Os, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, a))
              })
            })]
          })
        },
        qs = ({
          items: e = []
        }) => {
          if (!e.length) return null;
          let a = 0,
            t = 0;
          return e.map((e, r) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const a = [];
              return e.limitedList?.content && a.push((0, _.jsx)($s, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? r)), e.limitedGridList?.content && a.push((0, _.jsx)(Bs, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? r)), t++, (0, _.jsxs)("div", {
                children: [1 === t && (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlee14aea44e0cd05cab3f737d9241c40cf",
                  children: (0, _.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlecf8636d2845d410d7b3fdb9c5fd9f451"
                  })
                }), a]
              }, r)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const t = [];
              return e.discountsList?.content && t.push((0, _.jsx)($s, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? r)), e.discountsGridList?.content && t.push((0, _.jsx)(Bs, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? r)), e?.list && t.push((0, _.jsx)(er.A, {
                ...e
              })), a++, (0, _.jsxs)("div", {
                children: [1 === a && (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleab089b387a91263ebf4e3e5f9457113c"
                }), t]
              }, r)
            }
            return null
          })
        },
        Hs = ({
          items: e,
          columns: a = {},
          noCarousel: t = !1,
          noInfiniteScroll: r = !1,
          ...s
        }) => {
          const i = s?.style ?? {};
          return t && (a?.mobile && (i["--mobile-cols"] = a.mobile), a?.desktop && (i["--desktop-cols"] = a.desktop)), (0, _.jsxs)(_.Fragment, {
            children: [s.title && (0, _.jsx)("p", {
              className: "rockstargames-modules-core-newswire-articlebbdcc06cced1ed19baee825aacefee0b",
              children: s.title
            }), (0, _.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleba7b5228b2134bc8563fe2a8f65ca885",
              children: [t && (0, _.jsx)(Tr.default, {
                style: {
                  ...i,
                  "--grid-gap-dynamic": "2rem 0"
                },
                className: "rockstargames-modules-core-newswire-articlea225b2127250d1b0285289115c698451",
                renderTemplate: "standard",
                items: e,
                ...s
              }), !t && (0, _.jsx)($s, {
                items: e,
                noInfiniteScroll: r,
                perPage: 2,
                perPageMobile: 1
              })]
            })]
          })
        },
        Us = ({
          items: e = [],
          style: a = {}
        }) => e.length ? (0, _.jsx)(Ze, {
          style: {
            "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
            "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
            "--image-rounding-dynamic": "0",
            ...a
          },
          children: e.map((e, a) => e?.title_and_description ? (0, _.jsxs)(Ze, {
            context: "readable-text",
            style: {
              textAlign: "left",
              "--grid-gap-dynamic": "var(--grid-gap-static-xs)",
              background: "transparent"
            },
            children: [e?.title_and_description.title && (0, _.jsx)("h1", {
              className: "large",
              children: e.title_and_description.title
            }), e?.title_and_description.description && (0, _.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: e.title_and_description.description
              }
            })]
          }, e?.key ?? a) : e?.limitedList?.content ? (0, _.jsx)($s, {
            items: e.limitedList.content,
            noInfiniteScroll: e?.noInfiniteScroll,
            perPage: e?.perPage,
            size: e?.size
          }, e?.key ?? a) : e?.discountsGridList?.content ? (0, _.jsx)(Hs, {
            noCarousel: !0,
            columns: e.discountsGridList?.columns,
            items: e.discountsGridList.content
          }, e?.key ?? a) : e?.content ? (0, _.jsx)(wa, {
            ...e,
            children: e.content
          }, e?.key ?? a) : e?.list ? (0, _.jsx)(er.A, {
            ...e
          }, e?.key ?? a) : void 0)
        }) : null,
        Ws = {
          area: "rockstargames-modules-core-newswire-articlec0f0f1d12bd9d73702d5518ddfeb248a",
          btmImg: "rockstargames-modules-core-newswire-articlef7d259739c10010bebbf5a4566021799",
          limitedTopImg: "rockstargames-modules-core-newswire-articlefc4ab7fde14e1466eb3397a40c26a8f0",
          topImg: "rockstargames-modules-core-newswire-articlee034ccf8bbda4129691cf7da53b87170"
        },
        Ks = ({
          items: e,
          renderTemplate: a,
          ...t
        }) => {
          switch (a) {
            case "gtav":
            case "gtao":
              return (0, _.jsx)(Us, {
                items: e,
                ...t
              });
            case "grid":
              return (0, _.jsx)(Hs, {
                items: e,
                ...t
              });
            default:
              return (0, _.jsx)(qs, {
                items: e
              })
          }
        },
        Xs = ({
          items: e,
          renderTemplate: a,
          style: t,
          ...r
        }) => (0, _.jsx)("div", {
          className: Ws.area,
          "data-context": "discounts",
          children: (0, _.jsxs)("div", {
            className: Ws.discountsContent,
            children: [(0, _.jsx)(Ks, {
              renderTemplate: a,
              items: e,
              props: r,
              style: t
            }), (0, _.jsx)("div", {
              className: Ws.btmImg
            })]
          })
        }),
        Ys = {
          donate: "rockstargames-modules-core-newswire-articleca3a67499205086cce3ec4006dde027a",
          largePaddingSides: "rockstargames-modules-core-newswire-articlee9aa6553439a489ffff3140708eb84c9"
        },
        Js = ({
          text: e
        }) => {
          const {
            sanitize: a
          } = Ua();
          return (0, _.jsx)("div", {
            className: [Ys.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, _.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: a(e)
              }
            })
          })
        },
        Zs = {
          breadcrumbs: "rockstargames-modules-core-newswire-articlea300b88d467c420e15084fc2eeeb1e09",
          main: "rockstargames-modules-core-newswire-articleaf5256fb296a82d00fb900a2380a5d7f",
          title: "rockstargames-modules-core-newswire-articlea82cdf4d56d4fbadd86d56caf6b7da04"
        },
        Qs = (0, g.withTranslations)(({
          children: e,
          intro: a,
          image: t = {},
          style: r = {},
          t: s,
          className: i = "",
          variant: o = null
        }) => {
          let n = {};
          n = {
            "--breadcrumb-separator-filter-invert": r?.toggleInvertSeparator && "#000"
          };
          const c = (0, g.useNewswirePost)(),
            l = {},
            d = l?.meta?.title ?? c?.title,
            u = l?.meta?.subtitle ?? c?.subtitle,
            b = u ? (0, _.jsx)("h3", {
              "data-context": "newswire-subtitle",
              children: u
            }) : "",
            p = [{
              text: s("Newswire"),
              to: "/newswire"
            }],
            {
              src: f
            } = (0, Ve.useImageParser)(t),
            k = (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)("time", {
                dateTime: c.created,
                children: c.created_formatted
              }), a ? (0, _.jsx)(qe.A, {
                item: a
              }) : "", e]
            });
          c?.primary_tags?.length && p.push({
            text: c.primary_tags[0].name,
            to: `/newswire?tag_id=${c.primary_tags[0].id}`
          }), c?.secondary_tags?.length && p.push({
            text: c.secondary_tags[0].name,
            to: `/newswire?tag_id=${c.secondary_tags[0].id}`
          });
          const v = (0, _.jsx)("div", {
            className: Zs.breadcrumbs,
            "data-cms-breadcrumbs": !0,
            children: p.map(e => (0, _.jsx)(m.A, {
              to: e.to,
              children: e.text
            }, e.to))
          });
          return f?.desktop && (r.background = `url(${f.desktop}) center/cover no-repeat`), (0, _.jsx)("div", {
            className: [i, Zs.title].join(" "),
            style: {
              ...r,
              ...n
            },
            children: "separated" === o ? (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsxs)("header", {
                "data-context": "title",
                children: [v, (0, _.jsx)("h1", {
                  children: d
                })]
              }), (0, _.jsxs)("footer", {
                "data-context": "title",
                children: [b, k]
              })]
            }) : (0, _.jsxs)(_.Fragment, {
              children: [v, (0, _.jsxs)("div", {
                className: Zs.main,
                children: [(0, _.jsx)("h1", {
                  "data-context": "newswire-title",
                  children: d
                }), b]
              }), k]
            })
          })
        }),
        ei = {
          event: "rockstargames-modules-core-newswire-articled2fab08f92d966e9f62ad805f1e15542",
          eventInfo: "rockstargames-modules-core-newswire-articlee4a137d11e066c1ea5b0c733d364311f",
          featured: "rockstargames-modules-core-newswire-articlebb5a0823d43098a1cc049f2296fcf49e",
          large: "rockstargames-modules-core-newswire-articlee94ea7e671124487acc1e1a38fe28560",
          pillBtn: "rockstargames-modules-core-newswire-articlef5d4e8bec1c576430dea6b22ec107759",
          selected: "rockstargames-modules-core-newswire-articledb6bc6b6bcb510524004bd740d0e8ba9",
          videoWrapper: "rockstargames-modules-core-newswire-articledad6ecb3c2a7a4f228052b0e1bd38ed5"
        },
        ai = ({
          images: e
        }) => {
          if (!e?.length) return null;
          if (1 === e.length) {
            const {
              key: a,
              ...t
            } = e[0];
            return (0, _.jsx)(Ca.A, {
              ...t
            })
          }
          return (0, _.jsx)(R.A, {
            items: e
          })
        },
        ti = ({
          images: e,
          title: a = "",
          content: t,
          isFeatured: r = !1,
          className: s = null,
          videoInHeroProps: i,
          hideNewswireTitle: o = !1
        }) => {
          const n = (0, Ve.useTinaPayload)(),
            c = n?.meta?.prod ?? !1,
            l = (0, Ve.useTinaComponents)();
          (0, sa.set)(n, "meta.prod", c);
          let d = i?.gifVideoProps?.hasVideoInHero || !1;
          const m = i?.htmlVideoProps?.id || !1,
            b = !!i?.htmlVideoProps?.hasHtmlVideoInHero && m;
          b && d && (d = !1);
          const p = void 0 === i || !d && !b,
            g = (0, u.useMemo)(() => ({
              ...l,
              HTMLElement: wa,
              ImageWithBadge: Ca.A,
              GroupOfItems: Tr.default
            }), [l]);
          return (0, _.jsxs)("div", {
            className: (0, N.default)(ei.event, s),
            children: [d && (0, _.jsx)("div", {
              className: ei.videoWrapper,
              children: (0, _.jsx)(Cr(), {
                hash: {
                  desktop: i?.gifVideoProps?.hash?.desktop,
                  mobile: i?.gifVideoProps?.hash?.mobile
                },
                loop: i?.gifVideoProps?.isLooping
              })
            }), b && m && (0, _.jsx)("div", {
              className: ei.videoWrapper,
              children: (0, _.jsx)(zr(), {
                autoplay: i?.htmlVideoProps?.autoPlay || !1,
                id: m
              })
            }), p && (0, _.jsx)(ai, {
              images: e
            }), r && (0, _.jsx)(Qs, {}), (0, _.jsxs)("div", {
              className: ei.eventInfo,
              children: [!r && !o && (0, _.jsx)("h3", {
                className: ei.eventTitle,
                children: a
              }), (0, _.jsx)(Ve.TinaParser, {
                components: g,
                tina: {
                  payload: {
                    content: t,
                    meta: {
                      prod: c
                    }
                  }
                }
              })]
            })]
          })
        },
        ri = e => (0, _.jsx)(ti, {
          ...e,
          className: ei.featured,
          isFeatured: !0
        }),
        si = {
          clip: "rockstargames-modules-core-newswire-articleaf597db4ae39661b43752ca8aef0ea95",
          greyTexture: "rockstargames-modules-core-newswire-articlefb39d1c9eee482e2db4e0b343e1cb979",
          redTexture: "rockstargames-modules-core-newswire-articlea1e6c3732fbb497aa657efa3ba5f7aca"
        },
        ii = ({
          fontFamily: e = "inherit",
          fontBg: a,
          string: t
        }) => (0, _.jsx)("span", {
          style: {
            "--font-family-clip": e
          },
          className: [si.clip, si[a]].join(" "),
          children: t
        }),
        oi = {
          gamingRewards: "rockstargames-modules-core-newswire-articlea9a31094bd3e441b534cc78d739c61ee",
          gamingWrapper: "rockstargames-modules-core-newswire-articledd734e4acaf9151080ed7586e4e639b7",
          gtaPlus: "rockstargames-modules-core-newswire-articled890310a8a24e8315e93aad1c1f514eb",
          listArea: "rockstargames-modules-core-newswire-articlea7bde69bf0b082d54fc3174a8cd8b920",
          plus: "rockstargames-modules-core-newswire-articled692340ad550eab50b73f70580899379",
          primeGamingSocialLogo: "rockstargames-modules-core-newswire-articled476570605bebe4274221d86cd4777b1",
          psPlus: "rockstargames-modules-core-newswire-articlea9ed6881a254587b0f62accd0a42f49b",
          psPlusDefaultImg: "rockstargames-modules-core-newswire-articleaaac34c5e0f54812ed6d3141047b44d5",
          rightSide: "rockstargames-modules-core-newswire-articleeb6155b649b94d394e88f6bd53a994c7"
        },
        ni = ({
          headline: e,
          plainImage: a,
          top: r,
          unorderedList: s,
          bottom: i,
          rewards: o = "primeGaming",
          style: n = {}
        }) => {
          const c = (0, g.useLocale)(),
            {
              track: l
            } = (0, V.useGtmTrack)(),
            {
              ref: d,
              inView: m
            } = (0, q.useInView)({
              threshold: .6
            }),
            [b, p] = (0, u.useState)(!1);
          return (0, u.useEffect)(() => {
            m && !b && (l({
              element_placement: "newswire-article-gaming-rewards",
              event: "page_section_impression"
            }), p(!0))
          }, [m]), "primeGaming" === o && ["ru", "kr", "ko_kr", "ru_ru"].includes(c) ? null : (0, _.jsx)("div", {
            className: oi.gamingWrapper,
            ref: d,
            children: (0, _.jsx)("div", {
              className: `${oi.gamingRewards} ${oi[o]}`,
              style: n,
              children: (0, _.jsxs)(kt, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, _.jsxs)(ht, {
                  children: [e && (0, _.jsx)("h3", {
                    children: e
                  }), "psPlus" === o && (0, _.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: oi.primeGamingSocialLogo,
                    src: t(1983)
                  }), "primeGaming" === o && (0, _.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: oi.primeGamingSocialLogo,
                    src: t(29654)
                  }), "gtaPlus" === o && (0, _.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: oi.primeGamingSocialLogo,
                    src: t(68547)
                  }), r?.text && (0, _.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: r.text
                    },
                    onClick: e => {
                      e.target.closest("a") && l({
                        element_placement: "newswire-article-gaming-rewards",
                        event: "cta_other",
                        text: o
                      })
                    }
                  }), s?.list && (0, _.jsx)("div", {
                    className: oi.listArea,
                    children: (0, _.jsx)(er.A, {
                      className: "gtaPlus" === o ? oi.plus : "",
                      ...s,
                      list: s.list,
                      ...s?.attributes
                    })
                  }), i?.text && (0, _.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: i.text
                    },
                    onClick: e => {
                      e.target.closest("a") && l({
                        element_placement: "newswire-article-gaming-rewards",
                        event: "cta_other",
                        text: o
                      })
                    }
                  })]
                }), (0, _.jsx)(ht, {
                  className: oi.rightSide,
                  children: a?.image ? (0, _.jsx)(ya.A, {
                    image: a.image
                  }) : (0, _.jsx)("div", {
                    className: oi.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var ci = t(77735);
      const li = ({
          backgroundImages: e,
          deckHash: a = "",
          perPage: t = null
        }) => {
          const [r, s] = (0, u.useState)(null), i = (0, Ve.useGetCdnSource)(e?.backgroundImg?.full_src ?? null), o = (0, Ve.useGetCdnSource)(e?.layeredImg?.full_src ?? null), n = (0, u.useRef)(null), {
            data: c,
            error: l
          } = (0, g.useQuery)(ci.TinaModulesInfo, {
            variables: {
              ids: a
            },
            skip: !a
          });
          return (0, u.useEffect)(() => {
            if (c?.tinaModulesInfo) {
              const e = c.tinaModulesInfo[0],
                {
                  id: a,
                  tina: t
                } = e,
                r = (0, sa.clone)(t);
              (0, sa.set)(r, "payload.meta.id", a), s(r)
            }
          }, [c]), c && r ? l ? (0, _.jsx)(vr, {
            error: l
          }) : (0, _.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlea2287392a6363add6fc77a246fc467ce",
            ref: n,
            style: {
              "--background-image": `url(${i})`,
              "--layered-image": `url(${o})`,
              "--slides-per-view-desktop": t
            },
            children: (0, _.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleef8574282ec987f2460a951505ca5ef7",
              children: [o ? (0, _.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articleaa9b5909de87ec85fc53e12a7f9ca2d5"
              }) : "", (0, _.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlee3ff669c62cc2088728385fb58ef2969",
                children: (0, _.jsx)(Ve.TinaParser, {
                  components: {
                    Deck: As
                  },
                  tina: r
                })
              })]
            })
          }) : null
        },
        di = {
          "center-children": "rockstargames-modules-core-newswire-articlef2fa26d0f173f3d967cd339102390c4a",
          "full-width": "rockstargames-modules-core-newswire-articled506082984d54d056e358cfbc0dde795",
          gold: "rockstargames-modules-core-newswire-articleadff1577bb3952ea5b448144560148e1",
          heroImage: "rockstargames-modules-core-newswire-articled17c20c4aa402388a4d4b23d6ff41a3b",
          "hidden-lg": "rockstargames-modules-core-newswire-articlee53c219095a6cea2942bb53c4bf66259",
          "hidden-md": "rockstargames-modules-core-newswire-articlef1c15a75853dbb6189625b636a6d1baf",
          "hidden-sm": "rockstargames-modules-core-newswire-articlede4a014046acaad99dc53bb2c03f8719",
          "hidden-xl": "rockstargames-modules-core-newswire-articleb104796d98a3d67dde4b44e2c676b08e",
          "hidden-xxl": "rockstargames-modules-core-newswire-articled1034e839209be1d4f103fc2c29bf531",
          hiddenLarge: "rockstargames-modules-core-newswire-articled38319419aba2f42e721ab08a26208fb",
          hiddenMobile: "rockstargames-modules-core-newswire-articlec3a08254db141676fff1ac7bf9484218",
          "horizontal-line": "rockstargames-modules-core-newswire-articleba39f5e2ce30b99a045454ac97a6f707",
          responsiveImage: "rockstargames-modules-core-newswire-articleaa419a38f6bffb372db81c2df3ec23ae",
          responsiveVideo: "rockstargames-modules-core-newswire-articlee70c0545b9c94794421dac5b59959c39",
          "reverse-mobile": "rockstargames-modules-core-newswire-articlefc45ea13bab881368ae51d327eb77243",
          "show-lg": "rockstargames-modules-core-newswire-articlea0529cc3561a81f9b96939b579caa623",
          "show-md": "rockstargames-modules-core-newswire-articled6cabd1c7dce349d9e7e1598ead4503e",
          "show-sm": "rockstargames-modules-core-newswire-articleb540a7274484859d8ab14a6c04f62b4f",
          "show-xl": "rockstargames-modules-core-newswire-articlee13f7a8d45b3fec8db6dedc3321f89f2",
          "show-xxl": "rockstargames-modules-core-newswire-articled350dc14eb32714ed0230fe9f53591cd",
          "std-padding-desktop-mobile-none": "rockstargames-modules-core-newswire-articledeff228b0e0b37e77569d72317854418",
          "std-padding-mobile-desktop-none": "rockstargames-modules-core-newswire-articledef459f80eeef54bcb18d93a9ed91ef7"
        },
        mi = ({
          alt: e = "",
          className: a = "",
          src: t = {},
          image: r = null,
          video: s = null
        }) => (0, _.jsxs)("div", {
          className: ((t?.videoPlayerId || t?.gifHash) && di.heroImage, a),
          children: [t?.mobile && (0, _.jsx)(yt, {
            src: t.mobile,
            ariaLabel: e,
            className: [t?.desktop && di.hiddenLarge, di.responsiveImage].join(" "),
            noRatioPlease: !0
          }), t?.desktop && (0, _.jsx)(yt, {
            src: t.desktop,
            ariaLabel: e,
            className: [t?.mobile && di.hiddenMobile, di.responsiveImage].join(" ")
          }), t?.videoPlayerId && (0, _.jsx)("div", {
            className: [di.responsiveVideo, di.trailer].join(" "),
            children: (0, _.jsx)(zr(), {
              context: "site",
              autoplay: !1,
              id: t.videoPlayerId,
              hero: !0
            })
          }), t?.gifHash && (0, _.jsx)("div", {
            className: di.responsiveVideo,
            children: (0, _.jsx)(Cr(), {
              hash: [{
                desktop: t?.gifHash?.desktop
              }, {
                mobile: t?.gifHash?.mobile
              }]
            })
          }), r && (0, _.jsx)(Ca.A, {
            image: r
          }), s && (0, _.jsx)("div", {
            className: [di.responsiveVideo, di.trailer].join(" "),
            children: (0, _.jsx)(zr(), {
              context: "site",
              autoplay: s?.autoplay ?? !1,
              id: s.id,
              hero: !0
            })
          })]
        });
      var _i = t(87486);
      const ui = ({
          children: e,
          className: a = "",
          style: t,
          game: r
        }) => ((0, u.useEffect)(() => {
          document.fonts.ready.then(() => {
            _i.balanceText()
          })
        }, [e]), (0, _.jsx)("div", {
          className: ["newswireFull", r, a].join(" "),
          style: t,
          "data-game": r,
          children: e
        })),
        bi = ({
          pct: e,
          bgColor: a,
          primaryColor: t
        }) => (0, _.jsx)("div", {
          style: {
            position: "relative",
            width: "100%",
            height: "20px",
            backgroundColor: a
          },
          children: (0, _.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleb271a7a9b503a732ecc3de9eb27d11c8",
            style: {
              backgroundColor: t,
              position: "absolute",
              top: "0",
              left: "0",
              width: `${e}%`,
              height: "100%"
            }
          })
        }),
        pi = ({
          title: e,
          desc: a,
          img: t,
          imgMobile: r,
          bgColor: s,
          descPositionBottom: i,
          fontColor: o = "#fff"
        }) => (0, _.jsxs)(_.Fragment, {
          children: [i ?? (0, _.jsx)(xt, {
            style: {
              backgroundColor: `${s}`,
              "--padding-top-bottom": "1.75rem"
            },
            className: "normalPaddingTopBottom largePaddingSides",
            children: (0, _.jsxs)(xt, {
              className: "maxDescArea",
              style: {
                "--desc-h3-margin-bottom": "var(--h-rem-size)"
              },
              children: [(0, _.jsx)("h3", {
                style: {
                  "--color-span": `${o}`
                },
                children: e
              }), (0, _.jsx)("p", {
                children: a
              })]
            })
          }), (0, _.jsxs)(xt, {
            className: [i ?? "spacing"].join(" "),
            children: [(0, _.jsx)(yt, {
              className: "hiddenMobile",
              src: t
            }), (0, _.jsx)(yt, {
              className: "hiddenLarge",
              src: r
            })]
          }), i ? (0, _.jsx)(xt, {
            style: {
              backgroundColor: `${s}`,
              "--padding-top-bottom": "1.75rem"
            },
            className: "normalPaddingTopBottom largePaddingSides spacing",
            children: (0, _.jsxs)(xt, {
              className: "maxDescArea",
              style: {
                "--desc-h3-margin-bottom": "var(--h-rem-size)"
              },
              children: [(0, _.jsx)("h3", {
                style: {
                  "--color-span": `${o}`
                },
                children: e
              }), (0, _.jsx)("p", {
                children: a
              })]
            })
          }) : null]
        });
      var gi = t(10475),
        fi = t(83841);
      const ki = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","decorative_video_replay_button_label":"Wiederholen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Video wird wiedergegeben","hp_hero_stop_button_label":"Video angehalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","image_marquee_cta_pause_label":"Laufband pausieren","image_marquee_cta_play_label":"Laufband abspielen","job_card_bookmark_action":"Markieren","job_card_created_by":"Erstellt von","job_card_image_alt_text":"Screenshot vom Job {name}","job_card_report_action":"Melden","job_card_share_action":"Teilen","job_card_updated_date":"Aktualisiert: {date}","job_card_verified_by":"Verifiziert von","job_dialog_bookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen markierten Job sehen zu können – Jobs können nur im Spiel bewertet werden, nachdem sie gespielt wurden.","job_dialog_bookmarked_heading":"Job markiert: <b>{name}</b>","job_dialog_bookmarked_title":"Job markiert","job_dialog_confirmation_button":"OKAY","job_dialog_error_body":"Es gab einen Fehler bei dem Versuch, einen Job zu markieren/eine Markierung zu entfernen. Bitte versuche es erneut.","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Fehler","job_dialog_unbookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen Job nicht länger in deinen Markierungen sehen zu können.","job_dialog_unbookmarked_heading":"Job nicht mehr markiert: <b>{name}</b>","job_dialog_unbookmarked_title":"Job nicht mehr markiert","job_type_adversary_mode":"Gegner-Modus","job_type_air_race":"Luftrennen","job_type_arena_deathmatch":"Arena-Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Radrennen","job_type_capture":"Capture","job_type_contact_mission":"Kontaktmission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Dragsterrennen","job_type_drift_race":"Driftrennen","job_type_foot_race":"Rennen zu Fuß","job_type_hao_special_works_race":"HSW-Rennen","job_type_heist":"Raubüberfall","job_type_heist_prep":"Raubüberfall-Austrüstungsmission","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Landrennen","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission-Creator","job_type_open_wheel_race":"Open-Wheel-Rennen","job_type_parachuting":"Fallschirmsprung","job_type_pursuit_race":"Verfolgungsrennen","job_type_race":"Rennen","job_type_random_mission":"Zufällige Mission","job_type_special_race":"Spezialrennen","job_type_street_race":"Straßenrennen","job_type_stunt_race":"Stuntrennen","job_type_survival":"Überlebenskampf","job_type_target":"Zielscheibenrennen","job_type_team_deathmatch":"Team-Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Verwandlungsrennen","job_type_unknown":"Unbekannt","job_type_vehicle_deathmatch":"Fahrzeug-Deathmatch","job_type_water_race":"Seerennen","lightbox_close_button":"Schließen","login_dialog_body":"Du musst dich erst anmelden, um diese Inhalte zu sehen.","login_dialog_signin_button":"Anmelden","login_dialog_signup_button":"Registrieren","login_dialog_title":"Anmelden erforderlich","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details_amp":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details_amp":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","share_copied_to_clipboard":"Link erfolgreich kopiert!","share_copy_to_clipboard":"In die Zwischenablage kopieren","share_heading":"Teilen","share_share_to_facebook":"Auf Facebook teilen","share_share_to_reddit":"Auf Reddit teilen","share_share_to_twitter":"Auf X teilen","web_offer_claim_dialog_close":"schließen","web_offer_claim_error_state_button":"Erneut versuchen","web_offer_claim_error_state_icon_label":"Fehler-Symbol","web_offer_claim_exists_state_icon_label":"Erfolgssymbol","web_offer_claim_link_account_state_icon_label":"Fehler-Symbol","web_offer_claim_loading_state":"lädt","web_offer_claim_success_state_icon_label":"Erfolgssymbol"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Video Playing","hp_hero_stop_button_label":"Video Stopped","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","image_marquee_cta_pause_label":"Marquee Pause","image_marquee_cta_play_label":"Marquee Play","job_card_bookmark_action":"Bookmark","job_card_created_by":"Created by","job_card_image_alt_text":"Screenshot of {name} job","job_card_report_action":"Report","job_card_share_action":"Share","job_card_updated_date":"Updated {date}","job_card_verified_by":"Verified by","job_dialog_bookmarked_body":"You will need to restart Grand Theft Auto Online to see this bookmarked job - jobs can only be rated in-game, after they have been played.","job_dialog_bookmarked_heading":"Job Bookmarked: <b>{name}</b>","job_dialog_bookmarked_title":"Job Bookmarked","job_dialog_confirmation_button":"OK","job_dialog_error_body":"There was an error when attempting to bookmark/unbookmark the job. Please try again","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"You will need to restart Grand Theft Auto Online to no longer see this job in your bookmarks.","job_dialog_unbookmarked_heading":"Job Unbookmarked: <b>{name}</b>","job_dialog_unbookmarked_title":"Job Unbookmarked","job_type_adversary_mode":"Adversary Mode","job_type_air_race":"Air Race","job_type_arena_deathmatch":"Arena Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Bike Race","job_type_capture":"Capture","job_type_contact_mission":"Contact Mission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Drag Race","job_type_drift_race":"Drift Race","job_type_foot_race":"Foot Race","job_type_hao_special_works_race":"Hao\'s Special Works Race","job_type_heist":"Heist","job_type_heist_prep":"Heist Prep","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Land Race","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission Creator","job_type_open_wheel_race":"Open Wheel Race","job_type_parachuting":"Parachuting","job_type_pursuit_race":"Pursuit Race","job_type_race":"Race","job_type_random_mission":"Random Mission","job_type_special_race":"Special Vehicle Race","job_type_street_race":"Street Race","job_type_stunt_race":"Stunt Race","job_type_survival":"Survival","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Team Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Transform Race","job_type_unknown":"Unknown","job_type_vehicle_deathmatch":"Vehicle Deathmatch","job_type_water_race":"Sea Race","lightbox_close_button":"Close","login_dialog_body":"You need to sign in first to interact with this content","login_dialog_signin_button":"Sign In","login_dialog_signup_button":"Sign Up","login_dialog_title":"Sign In Required","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","share_copied_to_clipboard":"Link Copied Successfully!","share_copy_to_clipboard":"Copy to clipboard","share_heading":"Share","share_share_to_facebook":"Share to Facebook","share_share_to_reddit":"Share to Reddit","share_share_to_twitter":"Share to X","web_offer_claim_dialog_close":"close","web_offer_claim_error_state_button":"Try Again","web_offer_claim_error_state_icon_label":"Error Icon","web_offer_claim_exists_state_icon_label":"Success Icon","web_offer_claim_link_account_state_icon_label":"Error Icon","web_offer_claim_loading_state":"loading","web_offer_claim_success_state_icon_label":"Success Icon"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Volver a ver","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproduciendo vídeo","hp_hero_stop_button_label":"Vídeo en pausa","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","image_marquee_cta_pause_label":"Pausar marquesina","image_marquee_cta_play_label":"Reproducir marquesina","job_card_bookmark_action":"Marcar","job_card_created_by":"Creada por","job_card_image_alt_text":"Captura de pantalla de la actividad {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizada el {date}","job_card_verified_by":"Verificada por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Ha habido un error al intentar marcar o eliminar la marca de esta actividad. Vuelve a intentarlo","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tu lista de actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad no marcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad no marcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena War","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misiones de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de drift","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar del golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de coches de competición","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Partida de supervivencia","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Para interactuar con este contenido debes iniciar sesión.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Debes iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","share_copied_to_clipboard":"¡El enlace se ha copiado con éxito!","share_copy_to_clipboard":"Copiar al portapapeles","share_heading":"Compartir","share_share_to_facebook":"Compartir en Facebook","share_share_to_reddit":"Compartir en Reddit","share_share_to_twitter":"Compartir en X","web_offer_claim_dialog_close":"Cerrar","web_offer_claim_error_state_button":"Vuelve a intentarlo","web_offer_claim_error_state_icon_label":"Icono de error","web_offer_claim_exists_state_icon_label":"Icono de aprobación","web_offer_claim_link_account_state_icon_label":"Icono de error","web_offer_claim_loading_state":"Cargando","web_offer_claim_success_state_icon_label":"Icono de aprobación"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Repetir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproduciendo video","hp_hero_stop_button_label":"Video detenido","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","image_marquee_cta_pause_label":"Pausar marco","image_marquee_cta_play_label":"Reproducir marco","job_card_bookmark_action":"Marcar","job_card_created_by":"Creado por","job_card_image_alt_text":"Captura de pantalla del trabajo {name}","job_card_report_action":"Reportar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizado {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Las actividades solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Se produjo un error al intentar marcar o desmarcar la actividad. Inténtalo de nuevo.","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tus actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad desmarcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad desmarcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena de Motores","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misión de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de derrapes","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar de golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de ruedas descubiertas","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Supervivencia","job_type_target":"Carrera de ataque al objetivo","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Necesitas iniciar sesión para poder interactuar con este contenido.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Necesitas iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","share_copied_to_clipboard":"¡Enlace copiado con éxito!","share_copy_to_clipboard":"Copiar al portapapeles","share_heading":"Compartir","share_share_to_facebook":"Compartir en Facebook","share_share_to_reddit":"Compartir en Reddit","share_share_to_twitter":"Compartir en X","web_offer_claim_dialog_close":"cerrar","web_offer_claim_error_state_button":"Volver a intentar","web_offer_claim_error_state_icon_label":"Ícono de error","web_offer_claim_exists_state_icon_label":"Ícono de aprobado","web_offer_claim_link_account_state_icon_label":"Ícono de error","web_offer_claim_loading_state":"cargando","web_offer_claim_success_state_icon_label":"Ícono de aprobado"},"fr-FR":{"aria_label_open_new_window":"(S\'ouvre dans une nouvelle fenêtre)","bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","decorative_video_replay_button_label":"Relire","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Vidéo en cours de lecture","hp_hero_stop_button_label":"Vidéo arrêtée","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","image_marquee_cta_pause_label":"Marquee Pause","image_marquee_cta_play_label":"Marquee Lecture","job_card_bookmark_action":"Ajouter aux favoris","job_card_created_by":"Créé par","job_card_image_alt_text":"Capture d\'écran de la mission {name}","job_card_report_action":"Effectuer un signalement","job_card_share_action":"Partager","job_card_updated_date":"Dernière modification : {date}","job_card_verified_by":"Vérifié par","job_dialog_bookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour voir cette mission ajoutée aux favoris. Les missions ne peuvent être notées qu\'en jeu, après avoir été jouées.","job_dialog_bookmarked_heading":"Mission ajoutée aux favoris : <b>{name}</b>","job_dialog_bookmarked_title":"Mission ajoutée aux favoris","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Une erreur est survenue lors de l\'ajout/du retrait de la mission de la liste des favoris. Veuillez réessayer.","job_dialog_error_heading":"Mission : <b>{name}</b>","job_dialog_error_title":"Erreur","job_dialog_unbookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour ne plus voir cette mission dans vos favoris.","job_dialog_unbookmarked_heading":"Mission retirée des favoris : <b>{name}</b>","job_dialog_unbookmarked_title":"Mission retirée des favoris","job_type_adversary_mode":"Mode rivalité","job_type_air_race":"Course aérienne","job_type_arena_deathmatch":"Affrontement en arène","job_type_arena_war":"Guerre d\'arène","job_type_bike_race":"Course à moto","job_type_capture":"Capture","job_type_contact_mission":"Mission de contact","job_type_deathmatch":"Affrontement","job_type_drag_race":"Course de dragster","job_type_drift_race":"Course de drift","job_type_foot_race":"Course à pied","job_type_hao_special_works_race":"Course d\'Hao\'s Special Works","job_type_heist":"Braquage","job_type_heist_prep":"Préparation de braquage","job_type_king_of_the_hill":"Conquête","job_type_land_race":"Course terrestre","job_type_last_team_standing":"Extermination","job_type_mission":"Mission","job_type_mission_creator":"Éditeur de missions","job_type_open_wheel_race":"Course d\'ultralégères","job_type_parachuting":"Saut en parachute","job_type_pursuit_race":"Course de poursuite","job_type_race":"Course","job_type_random_mission":"Mission aléatoire","job_type_special_race":"Course de véhicules spéciaux","job_type_street_race":"Course de rue","job_type_stunt_race":"Course nautique","job_type_survival":"Survie","job_type_target":"Course aux points","job_type_team_deathmatch":"Affrontement en équipe","job_type_team_king_of_the_hill":"Conquête en équipe","job_type_transform_race":"Course polymorphes","job_type_unknown":"Inconnu","job_type_vehicle_deathmatch":"Affrontement motorisé","job_type_water_race":"Course nautique","lightbox_close_button":"Fermer","login_dialog_body":"Vous devez vous connecter pour interagir avec ce contenu.","login_dialog_signin_button":"Se connecter","login_dialog_signup_button":"Créer un compte","login_dialog_title":"Connexion requise","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details_amp":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","share_copied_to_clipboard":"Lien copié !","share_copy_to_clipboard":"Copier dans le presse-papiers","share_heading":"Partager","share_share_to_facebook":"Partager sur Facebook","share_share_to_reddit":"Partager sur Reddit","share_share_to_twitter":"Partager sur X","web_offer_claim_dialog_close":"Fermer","web_offer_claim_error_state_button":"Réessayer","web_offer_claim_error_state_icon_label":"Icône d\'erreur","web_offer_claim_exists_state_icon_label":"Icône de réussite","web_offer_claim_link_account_state_icon_label":"Icône d\'erreur","web_offer_claim_loading_state":"Chargement","web_offer_claim_success_state_icon_label":"Icône de réussite"},"it-IT":{"aria_label_open_new_window":"(Si apre in una nuova finestra)","bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","decorative_video_replay_button_label":"Riproduci di nuovo","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Video in riproduzione","hp_hero_stop_button_label":"Riproduzione video interrotta","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","image_marquee_cta_pause_label":"Metti in pausa marquee","image_marquee_cta_play_label":"Riproduci marquee","job_card_bookmark_action":"Aggiungi ai preferiti","job_card_created_by":"Creato da","job_card_image_alt_text":"Screenshot dell\'attività {name}","job_card_report_action":"Segnala","job_card_share_action":"Condividi","job_card_updated_date":"Aggiornato il {date}","job_card_verified_by":"Verificato da","job_dialog_bookmarked_body":"Per visualizzare questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online. Le attività possono essere valutate solo all\'interno del gioco, dopo averle giocate.","job_dialog_bookmarked_heading":"Attività aggiunta ai preferiti: <b>{name}</b>","job_dialog_bookmarked_title":"Attività aggiunta ai preferiti","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Si è verificato un errore durante l’aggiunta ai/la rimozione dai preferiti dell’attività. Riprova più tardi","job_dialog_error_heading":"Attività: <b>{name}</b>","job_dialog_error_title":"Errore","job_dialog_unbookmarked_body":"Per non visualizzare più questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online.","job_dialog_unbookmarked_heading":"Attività rimossa dai preferiti: <b>{name}</b>","job_dialog_unbookmarked_title":"Attività rimossa dai preferiti","job_type_adversary_mode":"Modalità Competizione","job_type_air_race":"Gara aerea","job_type_arena_deathmatch":"Deathmatch nell\'Arena","job_type_arena_war":"Arena War","job_type_bike_race":"Gara su due ruote","job_type_capture":"Cattura","job_type_contact_mission":"Missione dei contatti","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Gara drag","job_type_drift_race":"Gara drift","job_type_foot_race":"Gara a piedi","job_type_hao_special_works_race":"Gara di Hao\'s Special Works","job_type_heist":"Colpi","job_type_heist_prep":"Missione preliminare del colpo","job_type_king_of_the_hill":"Re della collina","job_type_land_race":"Gara terrestre","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Missione","job_type_mission_creator":"Creatore di missioni","job_type_open_wheel_race":"Gara per ruote scoperte","job_type_parachuting":"Paracadutismo","job_type_pursuit_race":"Inseguimenti","job_type_race":"Gara","job_type_random_mission":"Missione casuale","job_type_special_race":"Gara con veicoli speciali","job_type_street_race":"Gara clandestina","job_type_stunt_race":"Gara stunt","job_type_survival":"Sopravvivenza","job_type_target":"Gara al bersaglio","job_type_team_deathmatch":"Deathmatch a squadre","job_type_team_king_of_the_hill":"Re della collina a squadre","job_type_transform_race":"Gara multiveicolo","job_type_unknown":"Sconosciuto","job_type_vehicle_deathmatch":"Deathmatch con veicoli","job_type_water_race":"Gara acquatica","lightbox_close_button":"Chiudi","login_dialog_body":"È necessario eseguire l’accesso prima di poter interagire con questo contenuto","login_dialog_signin_button":"Accedi","login_dialog_signup_button":"Registrati","login_dialog_title":"È necessario eseguire l’accesso","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details_amp":"Stai già usando questo indirizzo email per ricevere la newsletter. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","share_copied_to_clipboard":"Link copiato con successo!","share_copy_to_clipboard":"Copia","share_heading":"Condividi","share_share_to_facebook":"Condividi su Facebook","share_share_to_reddit":"Condividi su Reddit","share_share_to_twitter":"Condividi su X","web_offer_claim_dialog_close":"chiudi","web_offer_claim_error_state_button":"Riprova","web_offer_claim_error_state_icon_label":"Icona Errore","web_offer_claim_exists_state_icon_label":"Icona di successo","web_offer_claim_link_account_state_icon_label":"Icona Errore","web_offer_claim_loading_state":"caricamento","web_offer_claim_success_state_icon_label":"Icona di successo"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","decorative_video_replay_button_label":"もう一回見る","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"ビデオ再生中","hp_hero_stop_button_label":"ビデオ停止中","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","image_marquee_cta_pause_label":"自動スクロール一時停止","image_marquee_cta_play_label":"自動スクロール再生","job_card_bookmark_action":"ブックマーク","job_card_created_by":"により作成","job_card_image_alt_text":"ジョブ{name}のスクリーンショット","job_card_report_action":"報告","job_card_share_action":"共有","job_card_updated_date":"{date}に更新","job_card_verified_by":"により認証","job_dialog_bookmarked_body":"ブックマークされたジョブを閲覧するには「GTAオンライン」を再起動する必要があります - ジョブは実際にプレイした後でなければ、ゲーム内で評価することはできません。","job_dialog_bookmarked_heading":"ブックマークされたジョブ: <b>{name}</b>","job_dialog_bookmarked_title":"ブックマークされたジョブ","job_dialog_confirmation_button":"OK","job_dialog_error_body":"ジョブをブックマーク/ブックマーク解除を試みた際にエラーが起こりました。もう一度お試しください","job_dialog_error_heading":"ジョブ: <b>{name}</b>","job_dialog_error_title":"エラー","job_dialog_unbookmarked_body":"ブックマークから解除たジョブを削除するには「GTAオンライン」を再起動する必要があります。","job_dialog_unbookmarked_heading":"ブックマークから解除されたジョブ: <b>{name}</b>","job_dialog_unbookmarked_title":"ブックマークから解除されたジョブ","job_type_adversary_mode":"敵対モード","job_type_air_race":"エアレース","job_type_arena_deathmatch":"アリーナデスマッチ","job_type_arena_war":"アリーナウォーズ","job_type_bike_race":"バイクレース","job_type_capture":"キャプチャー","job_type_contact_mission":"コンタクトのミッション","job_type_deathmatch":"デスマッチ","job_type_drag_race":"ドラッグレース","job_type_drift_race":"ドリフトレース","job_type_foot_race":"徒競走","job_type_hao_special_works_race":"ハオ・スペシャルワークスレース","job_type_heist":"強盗","job_type_heist_prep":"強盗調達","job_type_king_of_the_hill":"キングオブザヒル","job_type_land_race":"ランドレース","job_type_last_team_standing":"ラスト・チーム・アライブ","job_type_mission":"ミッション","job_type_mission_creator":"ミッションクリエイター","job_type_open_wheel_race":"オープンホイールレース","job_type_parachuting":"パラシューティング","job_type_pursuit_race":"追跡レース","job_type_race":"レース","job_type_random_mission":"ランダムなミッション","job_type_special_race":"特殊車両レース","job_type_street_race":"ストリートレース","job_type_stunt_race":"スタントレース","job_type_survival":"サバイバル","job_type_target":"ターゲットアサルトレース","job_type_team_deathmatch":"チームデスマッチ","job_type_team_king_of_the_hill":"チーム・キングオブザヒル","job_type_transform_race":"トランスフォームレース","job_type_unknown":"不明","job_type_vehicle_deathmatch":"マシンデスマッチ","job_type_water_race":"シーレース","lightbox_close_button":"閉じる","login_dialog_body":"このコンテンツを利用するには、サインインする必要があります","login_dialog_signin_button":"サインイン","login_dialog_signup_button":"サインアップ","login_dialog_title":"サインインが必要","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details_amp":"このメールアドレスで既にニュースレターアップデートを受け取っています。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します","share_copied_to_clipboard":"リンクのコピー完了！","share_copy_to_clipboard":"クリップボードにコピー","share_heading":"共有","share_share_to_facebook":"Facebookで共有","share_share_to_reddit":"Redditで共有","share_share_to_twitter":"Xで共有","web_offer_claim_dialog_close":"閉じる","web_offer_claim_error_state_button":"もう一度試す","web_offer_claim_error_state_icon_label":"エラーアイコン","web_offer_claim_exists_state_icon_label":"成功のアイコン","web_offer_claim_link_account_state_icon_label":"エラーアイコン","web_offer_claim_loading_state":"ロード中","web_offer_claim_success_state_icon_label":"成功のアイコン"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","decorative_video_replay_button_label":"다시 재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"비디오 재생 중","hp_hero_stop_button_label":"비디오 정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","image_marquee_cta_pause_label":"마키 일시정지","image_marquee_cta_play_label":"마키 재생","job_card_bookmark_action":"즐겨찾기","job_card_created_by":"생성됨","job_card_image_alt_text":"{name} 작업 스크린샷","job_card_report_action":"신고","job_card_share_action":"공유","job_card_updated_date":"{date} 업데이트됨","job_card_verified_by":"인증됨","job_dialog_bookmarked_body":"즐겨찾기에 등록한 작업을 보려면 Grand Theft Auto 온라인을 다시 시작해야 합니다 - 작업은 플레이한 후에만 게임 내에서 평가할 수 있습니다.","job_dialog_bookmarked_heading":"즐겨찾기에 등록한 작업: <b>{name}</b>","job_dialog_bookmarked_title":"즐겨찾기에 등록한 작업","job_dialog_confirmation_button":"확인","job_dialog_error_body":"작업 즐겨찾기 등록/해제 중 오류가 발생했습니다. 다시 시도하십시오","job_dialog_error_heading":"작업: <b>{name}</b>","job_dialog_error_title":"오류","job_dialog_unbookmarked_body":"즐겨찾기에서 이 작업을 표시하지 않으려면 Grand Theft Auto 온라인을 다시 시작해야 합니다.","job_dialog_unbookmarked_heading":"즐겨찾기 해제한 작업: <b>{name}</b>","job_dialog_unbookmarked_title":"즐겨찾기 해제한 작업","job_type_adversary_mode":"대적 모드","job_type_air_race":"항공 레이스","job_type_arena_deathmatch":"아레나 데스매치","job_type_arena_war":"아레나 워","job_type_bike_race":"바이크 레이스","job_type_capture":"점령","job_type_contact_mission":"연락책 임무","job_type_deathmatch":"데스매치","job_type_drag_race":"드래그 레이스","job_type_drift_race":"드리프트 레이스","job_type_foot_race":"도보 레이스","job_type_hao_special_works_race":"하오의 스페셜 웍스 레이스 ","job_type_heist":"습격","job_type_heist_prep":"습격 준비","job_type_king_of_the_hill":"킹 오브 더 힐","job_type_land_race":"지상 레이스","job_type_last_team_standing":"라스트 팀 스탠딩","job_type_mission":"임무","job_type_mission_creator":"임무 생성기","job_type_open_wheel_race":"오픈 휠 레이스","job_type_parachuting":"낙하산 강하","job_type_pursuit_race":"추격전 레이스","job_type_race":"레이스","job_type_random_mission":"무작위 임무","job_type_special_race":"특수 차량 레이스","job_type_street_race":"길거리 레이스","job_type_stunt_race":"스턴트 레이스","job_type_survival":"서바이벌","job_type_target":"타겟 어썰트 레이스","job_type_team_deathmatch":"팀 데스매치","job_type_team_king_of_the_hill":"팀 킹 오브 더 힐","job_type_transform_race":"변신 레이스","job_type_unknown":"알 수 없음","job_type_vehicle_deathmatch":"이동 수단 데스매치","job_type_water_race":"해상 레이스","lightbox_close_button":"닫기","login_dialog_body":"이 콘텐츠에 댓글을 남기거나 좋아요를 누르려면 먼저 로그인하십시오","login_dialog_signin_button":"로그인","login_dialog_signup_button":"가입","login_dialog_title":"로그인 필요","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details_amp":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details_amp":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","share_copied_to_clipboard":"링크 복사 완료!","share_copy_to_clipboard":"클립보드로 복사","share_heading":"공유","share_share_to_facebook":"Facebook으로 공유","share_share_to_reddit":"Reddit으로 공유","share_share_to_twitter":"X로 공유","web_offer_claim_dialog_close":"닫기","web_offer_claim_error_state_button":"다시 시도하기","web_offer_claim_error_state_icon_label":"오류 아이콘","web_offer_claim_exists_state_icon_label":"성공 아이콘","web_offer_claim_link_account_state_icon_label":"오류 아이콘","web_offer_claim_loading_state":"불러오는 중","web_offer_claim_success_state_icon_label":"성공 아이콘"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","decorative_video_replay_button_label":"Odtwórz ponownie","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Teraz odtwarzane","hp_hero_stop_button_label":"Wideo zatrzymane","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","image_marquee_cta_pause_label":"Pasek przewijania Zatrzymaj","image_marquee_cta_play_label":"Pasek przewijania Odtwórz","job_card_bookmark_action":"Dodaj do zakładek","job_card_created_by":"Stworzone przez","job_card_image_alt_text":"Zrzut ekranu akcji {name}","job_card_report_action":"Zgłoś","job_card_share_action":"Udostępnij","job_card_updated_date":"Zaktualizowano {date}","job_card_verified_by":"Zweryfikowane przez","job_dialog_bookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby zobaczyć tę dodaną do ulubionych akcję. Akcje mogą być ocenione tylko i wyłącznie w grze po ich rozegraniu.","job_dialog_bookmarked_heading":"Akcja dodana do ulubionych: <b>{name}</b>","job_dialog_bookmarked_title":"Akcja dodana do ulubionych","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Wystąpił błąd podczas dodawania/usuwania tej akcji z sekcji ulubionych. Spróbuj ponownie.","job_dialog_error_heading":"Akcja: <b>{name}</b>","job_dialog_error_title":"Błąd","job_dialog_unbookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby akcja nie pojawiała się dłużej w sekcji ulubionych akcji.","job_dialog_unbookmarked_heading":"Akcja usunięta z ulubionych: <b>{name}</b>","job_dialog_unbookmarked_title":"Akcja usunięta z ulubionych","job_type_adversary_mode":"Tryb adwerszarza","job_type_air_race":"Wyścig powietrzny","job_type_arena_deathmatch":"Deathmatch na arenie","job_type_arena_war":"Arena wojny","job_type_bike_race":"Wyścig jednośladów","job_type_capture":"Zdobywanie","job_type_contact_mission":"Misja od kontaktów","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Wyścig równoległy","job_type_drift_race":"Wyścig driftowe","job_type_foot_race":"Wyścig pieszy","job_type_hao_special_works_race":"Wyścigi Hao’s Special Works","job_type_heist":"Napad","job_type_heist_prep":"Misja w terenie","job_type_king_of_the_hill":"Król wzgórza","job_type_land_race":"Wyścig lądowy","job_type_last_team_standing":"Ostatnia drużyna wygrywa","job_type_mission":"Misja","job_type_mission_creator":"Kreator misji","job_type_open_wheel_race":"Wyścig bolidów","job_type_parachuting":"Skoki spadochronowe","job_type_pursuit_race":"Pościg","job_type_race":"Wyścig","job_type_random_mission":"Losowa misja","job_type_special_race":"Wyścig pojazdów specjalnych","job_type_street_race":"Wyścig uliczny","job_type_stunt_race":"Wyścig kaskaderski","job_type_survival":"Walka o przetrwanie","job_type_target":"Wyścig strzelecki","job_type_team_deathmatch":"Deathmatch drużynowy","job_type_team_king_of_the_hill":"Drużynowy Król wzgórza","job_type_transform_race":"Wyścig z transformacją","job_type_unknown":"Nieznane","job_type_vehicle_deathmatch":"Deathmatch w pojazdach","job_type_water_race":"Wyścig morski","lightbox_close_button":"Zamknij","login_dialog_body":"Zaloguj się, aby zapoznać się z zawartością.","login_dialog_signin_button":"Zaloguj się","login_dialog_signup_button":"Zarejestruj się","login_dialog_title":"Wymagane zalogowanie się","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details_amp":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","share_copied_to_clipboard":"Link został skopiowany!","share_copy_to_clipboard":"Skopiuj do schowka","share_heading":"Udostępnij","share_share_to_facebook":"Udostępnij na Facebooku","share_share_to_reddit":"Udostępnij na Reddit","share_share_to_twitter":"Udostępnij na X","web_offer_claim_dialog_close":"Zamknij","web_offer_claim_error_state_button":"Spróbuj ponownie","web_offer_claim_error_state_icon_label":"Ikona błędu","web_offer_claim_exists_state_icon_label":"Ikona sukcesu","web_offer_claim_link_account_state_icon_label":"Ikona błędu","web_offer_claim_loading_state":"Ładowanie","web_offer_claim_success_state_icon_label":"Ikona sukcesu"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Vídeo em reprodução","hp_hero_stop_button_label":"Vídeo parado","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","image_marquee_cta_pause_label":"Pausar marquee","image_marquee_cta_play_label":"Iniciar marquee","job_card_bookmark_action":"Adicionar aos Favoritos","job_card_created_by":"Criado por","job_card_image_alt_text":"Captura de tela do Serviço {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartilhar","job_card_updated_date":"Atualização {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para ver este serviço como um de seus Favoritos. Serviços só podem ser avaliados no jogo, após terem sido jogados.","job_dialog_bookmarked_heading":"Serviço adicionado aos Favoritos: <b>{name}</b>","job_dialog_bookmarked_title":"Serviço adicionado aos Favoritos","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Houve um erro ao tentar adicionar/remover esse serviço aos Favoritos. Tente novamente.","job_dialog_error_heading":"Serviço: <b>{name}</b>","job_dialog_error_title":"Erro","job_dialog_unbookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para não ver mais este serviço como um de seus Favoritos.","job_dialog_unbookmarked_heading":"Serviço removido dos Favoritos: <b>{name}</b>","job_dialog_unbookmarked_title":"Serviço removido dos Favoritos","job_type_adversary_mode":"Modo Adversário","job_type_air_race":"Corrida Aérea","job_type_arena_deathmatch":"Mata-mata da Arena","job_type_arena_war":"Arena de Guerra","job_type_bike_race":"Corrida sobre duas rodas","job_type_capture":"Captura","job_type_contact_mission":"Missão de Contato","job_type_deathmatch":"Mata-mata","job_type_drag_race":"Corrida de Arrancada","job_type_drift_race":"Corrida de Drift","job_type_foot_race":"Corrida a pé","job_type_hao_special_works_race":"Corrida da Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Preliminar do Golpe","job_type_king_of_the_hill":"Marcando Território","job_type_land_race":"Corrida Terrestre","job_type_last_team_standing":"Última Equipe Sobrevivente","job_type_mission":"Missão","job_type_mission_creator":"Criador de Missões","job_type_open_wheel_race":"Corrida de Roda Exposta","job_type_parachuting":"Paraquedismo","job_type_pursuit_race":"Corrida de Perseguição","job_type_race":"Corrida","job_type_random_mission":"Missão aleatória","job_type_special_race":"Corrida de Veículo Especial","job_type_street_race":"Corrida de Rua","job_type_stunt_race":"Corrida Acrobática","job_type_survival":"Sobrevivência","job_type_target":"Corrida de Assalto com Alvos","job_type_team_deathmatch":"Mata-mata em Equipe","job_type_team_king_of_the_hill":"Marcando Território em Equipe","job_type_transform_race":"Corrida Metamorfose","job_type_unknown":"Desconhecido","job_type_vehicle_deathmatch":"Mata-mata em Veículos","job_type_water_race":"Corrida Marítima","lightbox_close_button":"Fechar","login_dialog_body":"É necessário iniciar sessão para interagir com esse conteúdo","login_dialog_signin_button":"Iniciar sessão","login_dialog_signup_button":"Criar conta","login_dialog_title":"É necessário iniciar sessão","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details_amp":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição","share_copied_to_clipboard":"Link copiado!","share_copy_to_clipboard":"Copiar para a área de transferência","share_heading":"Compartilhar","share_share_to_facebook":"Compartilhar com Facebook","share_share_to_reddit":"Compartilhar com Reddit","share_share_to_twitter":"Compartilhar com X","web_offer_claim_dialog_close":"fechar","web_offer_claim_error_state_button":"Tentar novamente","web_offer_claim_error_state_icon_label":"Ícone de erro","web_offer_claim_exists_state_icon_label":"Ícone de êxito","web_offer_claim_link_account_state_icon_label":"Ícone de erro","web_offer_claim_loading_state":"carregando","web_offer_claim_success_state_icon_label":"Ícone de êxito"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","decorative_video_replay_button_label":"Повтор","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизведение видео","hp_hero_stop_button_label":"Видео остановлено","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total}","image_marquee_cta_pause_label":"Бегущая строка: пауза","image_marquee_cta_play_label":"Бегущая строка: воспроизвести","job_card_bookmark_action":"Отметить","job_card_created_by":"Создан","job_card_image_alt_text":"Снимок экрана дела {name}","job_card_report_action":"Пожаловаться","job_card_share_action":"Поделиться","job_card_updated_date":"Обновлен {date}","job_card_verified_by":"Проверен","job_dialog_bookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы увидеть добавленное в закладки дело. Оценивать дела можно только в игре после прохождения.","job_dialog_bookmarked_heading":"Дело добавлено в закладки: <b>{name}</b>","job_dialog_bookmarked_title":"Дело добавлено в закладки","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Произошла ошибка при попытке добавить дело в закладки или удалить его из закладок. Пожалуйста, повторите попытку","job_dialog_error_heading":"Дело: <b>{name}</b>","job_dialog_error_title":"Ошибка","job_dialog_unbookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы удалить это дело из закладок.","job_dialog_unbookmarked_heading":"Дело удалено из закладок: <b>{name}</b>","job_dialog_unbookmarked_title":"Дело удалено из закладок","job_type_adversary_mode":"Режим противоборства","job_type_air_race":"Гонка по воздуху","job_type_arena_deathmatch":"Перестрелка на арене","job_type_arena_war":"Битва на арене","job_type_bike_race":"Велогонка","job_type_capture":"Захват","job_type_contact_mission":"Задание знакомого","job_type_deathmatch":"Перестрелка","job_type_drag_race":"Драг-гонка","job_type_drift_race":"Дрифтовая гонка","job_type_foot_race":"Пешая гонка","job_type_hao_special_works_race":"Гонка Hao’s Special Works","job_type_heist":"Ограбление","job_type_heist_prep":"Подготовка к ограблению","job_type_king_of_the_hill":"Король горы","job_type_land_race":"Гонка по суше","job_type_last_team_standing":"«Команда уцелевших»","job_type_mission":"Задание","job_type_mission_creator":"Редактор заданий","job_type_open_wheel_race":"Гонки на болидах","job_type_parachuting":"Парашютизм","job_type_pursuit_race":"Гонка «Погоня»","job_type_race":"Гонка","job_type_random_mission":"Случайная миссия","job_type_special_race":"Гонка для особого транспорта","job_type_street_race":"Уличная гонка","job_type_stunt_race":"Каскадерская гонка","job_type_survival":"Выживание","job_type_target":"Гонка с мишенями","job_type_team_deathmatch":"Командная перестрелка","job_type_team_king_of_the_hill":"Команда «Король горы»","job_type_transform_race":"Гонка «Трансформации»","job_type_unknown":"Неизвестно","job_type_vehicle_deathmatch":"Перестрелка на транспорте","job_type_water_race":"Морская гонка","lightbox_close_button":"Закрыть","login_dialog_body":"Выполните вход, чтобы взаимодействовать с этим контентом.","login_dialog_signin_button":"Войти","login_dialog_signup_button":"Регистрация","login_dialog_title":"Необходимо выполнить вход","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details_amp":"Вы уже получаете письма по рассылке на этот адрес электронной почты. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","share_copied_to_clipboard":"Ссылка скопирована успешно!","share_copy_to_clipboard":"Скопировать","share_heading":"Поделиться","share_share_to_facebook":"Поделиться на Facebook","share_share_to_reddit":"Поделиться на Reddit","share_share_to_twitter":"Поделиться на X","web_offer_claim_dialog_close":"закрыть","web_offer_claim_error_state_button":"Попробовать снова","web_offer_claim_error_state_icon_label":"Значок ошибки","web_offer_claim_exists_state_icon_label":"Значок «Успех»","web_offer_claim_link_account_state_icon_label":"Значок ошибки","web_offer_claim_loading_state":"загрузка","web_offer_claim_success_state_icon_label":"Значок «Успех»"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"回放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"视频播放中","hp_hero_stop_button_label":"视频已停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","image_marquee_cta_pause_label":"滚动暂停","image_marquee_cta_play_label":"滚动开启","job_card_bookmark_action":"收藏","job_card_created_by":"制作者","job_card_image_alt_text":"{name}差事的截图","job_card_report_action":"举报","job_card_share_action":"分享","job_card_updated_date":"更新于{date}","job_card_verified_by":"认证者","job_dialog_bookmarked_body":"您需要重新启动Grand Theft Auto在线模式来查看这项已收藏的差事。只有在游玩了差事后才能在游戏内对它们进行评价。","job_dialog_bookmarked_heading":"已收藏差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏差事","job_dialog_confirmation_button":"确定","job_dialog_error_body":"收藏/取消收藏此差事时出现了一个错误。请稍候再试","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"错误","job_dialog_unbookmarked_body":"需要您重新启动Grand Theft Auto在线模式后，这项差事才会从您的收藏中消失。","job_dialog_unbookmarked_heading":"已取消收藏差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏差事","job_type_adversary_mode":"对抗模式","job_type_air_race":"空中竞速","job_type_arena_deathmatch":"竞技场死斗","job_type_arena_war":"竞技场之战","job_type_bike_race":"两轮车竞速","job_type_capture":"夺取","job_type_contact_mission":"联系人任务","job_type_deathmatch":"死斗游戏","job_type_drag_race":"直线竞速","job_type_drift_race":"漂移竞速","job_type_foot_race":"徒步竞速","job_type_hao_special_works_race":"阿浩特别工坊竞速","job_type_heist":"抢劫任务","job_type_heist_prep":"抢劫前置任务","job_type_king_of_the_hill":"占山为王","job_type_land_race":"陆地竞速","job_type_last_team_standing":"团队生存游戏","job_type_mission":"任务","job_type_mission_creator":"任务制作器","job_type_open_wheel_race":"开轮式竞速","job_type_parachuting":"跳伞","job_type_pursuit_race":"追逐竞速","job_type_race":"竞速","job_type_random_mission":"随机任务","job_type_special_race":"特殊载具竞速","job_type_street_race":"街头竞速","job_type_stunt_race":"特技竞速","job_type_survival":"生存战","job_type_target":"标靶射击竞速","job_type_team_deathmatch":"团队死斗游戏","job_type_team_king_of_the_hill":"团队占山为王","job_type_transform_race":"幻变竞速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"载具死斗游戏","job_type_water_race":"水上竞速","lightbox_close_button":"关闭","login_dialog_body":"您需要先登录才能与该内容进行互动","login_dialog_signin_button":"登录","login_dialog_signup_button":"注册","login_dialog_title":"需要登录","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details_amp":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置中随时管理您的通信偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"确定","ns_successfully_subscribed_details_amp":"您现已订阅Rockstar Games邮件通知，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置中随时管理您的通信偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","share_copied_to_clipboard":"链接复制成功！","share_copy_to_clipboard":"复制到剪贴板","share_heading":"分享","share_share_to_facebook":"分享至Facebook","share_share_to_reddit":"分享至Reddit","share_share_to_twitter":"分享至X","web_offer_claim_dialog_close":"关闭","web_offer_claim_error_state_button":"再次尝试","web_offer_claim_error_state_icon_label":"错误图标","web_offer_claim_exists_state_icon_label":"成功图标","web_offer_claim_link_account_state_icon_label":"错误图标","web_offer_claim_loading_state":"正在加载","web_offer_claim_success_state_icon_label":"成功图标"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"重播","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"正播放影片","hp_hero_stop_button_label":"影片已停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","image_marquee_cta_pause_label":"跑馬燈暫停","image_marquee_cta_play_label":"跑馬燈播放","job_card_bookmark_action":"收藏","job_card_created_by":"創作者：","job_card_image_alt_text":"「{name}」差事的擷圖","job_card_report_action":"檢舉","job_card_share_action":"分享","job_card_updated_date":"更新於 {date}","job_card_verified_by":"驗證者：","job_dialog_bookmarked_body":"您需要重啟 GTA 線上模式才能看見此已收藏的差事。您需要完成該差事，才能在遊戲內對其評價。","job_dialog_bookmarked_heading":"已收藏的差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏的差事","job_dialog_confirmation_button":"確定","job_dialog_error_body":"解決這個請求時出現錯誤。請再試一次。","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"錯誤","job_dialog_unbookmarked_body":"您需要重啟 GTA 線上模式才不會再在收藏中看見此差事。","job_dialog_unbookmarked_heading":"已取消收藏的差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏的差事","job_type_adversary_mode":"競爭模式","job_type_air_race":"空中競速","job_type_arena_deathmatch":"鬥技場死鬥遊戲","job_type_arena_war":"決戰鬥技場","job_type_bike_race":"雙輪車競速","job_type_capture":"奪取","job_type_contact_mission":"聯絡人任務","job_type_deathmatch":"死鬥遊戲","job_type_drag_race":"直線競速","job_type_drift_race":"甩尾競速","job_type_foot_race":"賽跑","job_type_hao_special_works_race":"阿浩特製改裝競速","job_type_heist":"搶劫任務","job_type_heist_prep":"搶劫前置任務","job_type_king_of_the_hill":"山頭之王","job_type_land_race":"陸上競速","job_type_last_team_standing":"團隊生存遊戲","job_type_mission":"任務","job_type_mission_creator":"任務製作器","job_type_open_wheel_race":"開輪式競速","job_type_parachuting":"跳傘活動","job_type_pursuit_race":"追緝競速","job_type_race":"競速","job_type_random_mission":"隨機任務","job_type_special_race":"特殊載具競速","job_type_street_race":"街頭競速","job_type_stunt_race":"特技競速","job_type_survival":"生存戰","job_type_target":"射靶競速","job_type_team_deathmatch":"團隊死鬥遊戲","job_type_team_king_of_the_hill":"團隊山頭之王","job_type_transform_race":"變形狂飆競速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"載具死鬥遊戲","job_type_water_race":"水上競速","lightbox_close_button":"關閉","login_dialog_body":"您需要先登入才能進行操作","login_dialog_signin_button":"登入","login_dialog_signup_button":"註冊","login_dialog_title":"必須登入","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details_amp":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details_amp":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱","share_copied_to_clipboard":"連結已成功複製！","share_copy_to_clipboard":"複製至剪貼簿","share_heading":"分享","share_share_to_facebook":"分享至 Facebook","share_share_to_reddit":"分享至 Reddit","share_share_to_twitter":"分享至 X","web_offer_claim_dialog_close":"關閉","web_offer_claim_error_state_button":"再試一次","web_offer_claim_error_state_icon_label":"錯誤圖示","web_offer_claim_exists_state_icon_label":"成功圖示","web_offer_claim_link_account_state_icon_label":"錯誤圖示","web_offer_claim_loading_state":"正在載入","web_offer_claim_success_state_icon_label":"成功圖示"}}'),
        vi = e => (0, E.withIntl)(e, ki);
      var hi = t(86361),
        wi = t(36205);
      const yi = (0, u.createContext)(null),
        ji = (0, u.forwardRef)(function({
          jumpLinkId: e,
          currentStep: a = "unclaimed",
          testId: t = "web-offer-claim-root",
          asChild: r,
          ...s
        }, i) {
          const o = r ? hi.DX : "div",
            n = (0, wi.v6)({
              "data-testid": t,
              className: "ryxcfo0"
            }, s);
          return (0, _.jsx)(yi.Provider, {
            value: {
              currentStep: a
            },
            children: (0, _.jsx)(o, {
              id: e,
              ref: i,
              ...n
            })
          })
        }),
        xi = (0, u.forwardRef)(function({
          stepIndex: e,
          asChild: a,
          ...t
        }, r) {
          const s = (() => {
              const {
                currentStep: e
              } = (() => {
                const e = (0, u.useContext)(yi);
                if (!e) throw new Error("Warning, must use inside a WebOfferClaim.Root provider");
                return e
              })();
              return e
            })(),
            i = a ? hi.DX : "div",
            o = (0, wi.v6)({
              className: "ryxcfo1"
            }, t);
          return s === e ? (0, _.jsx)(i, {
            ref: r,
            ...o
          }) : null
        }),
        Ni = (0, u.forwardRef)(function({
          view: e = "default",
          ...a
        }, t) {
          const r = (0, wi.v6)({
            className: "ryxcfo2"
          }, a);
          return "dialog" === e ? (0, _.jsx)(fi.Dialog.Trigger, {
            asChild: !0,
            children: (0, _.jsx)(fi.Button, {
              ref: t,
              ...r
            })
          }) : (0, _.jsx)(fi.Button, {
            ref: t,
            ...r
          })
        });
      const Si = () => {
          const {
            view: e
          } = Ci();
          return e
        },
        Ci = () => {
          const e = (0, u.useContext)(Qi);
          if (!e) throw new Error("Warning, must use inside a WebOfferClaim.Root provider");
          return e
        };
      var Ti = t(71554),
        Ii = (0, Ti.c)({
          defaultClassName: "_1fcyces5",
          variantClassNames: {
            view: {
              default: "_1fcyces6",
              dialog: "_1fcyces7"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ei = (0, Ti.c)({
          defaultClassName: "_1fcycesf",
          variantClassNames: {
            platform: {
              applestore: "_1fcycesg",
              googleplay: "_1fcycesh",
              left: "_1fcycesi",
              pc: "_1fcycesj",
              pcalt: "_1fcycesk",
              ps: "_1fcycesl",
              ps3: "_1fcycesm",
              ps4: "_1fcycesn",
              ps5: "_1fcyceso",
              right: "_1fcycesp",
              switch: "_1fcycesq",
              x: "_1fcycesr",
              xbox: "_1fcycess",
              xboxone: "_1fcycest",
              xboxseriesxs: "_1fcycesu"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zi = (0, Ti.c)({
          defaultClassName: "_1fcyces0",
          variantClassNames: {
            view: {
              default: "_1fcyces1",
              dialog: "_1fcyces2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Pi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg",
        Li = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
        Mi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg",
        Ai = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
        Di = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
        Ri = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg",
        Fi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
        Vi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
        $i = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg",
        Gi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg",
        Oi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
        Bi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg",
        qi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg",
        Hi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
        Ui = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg";
      var Wi = "var(--_171mcfn5)",
        Ki = "var(--_171mcfn4)",
        Xi = (0, Ti.c)({
          defaultClassName: "_171mcfn6",
          variantClassNames: {
            orientation: {
              horizontal: "_171mcfn7",
              vertical: "_171mcfn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Yi = "var(--_171mcfn3)",
        Ji = t(57030);
      const Zi = (0, u.forwardRef)(function({
          orientation: e = "vertical",
          fadeStart: a = !0,
          fadeEnd: t = !0,
          stops: r = [{
            color: "transparent",
            position: "-5%"
          }, {
            color: "black",
            position: "15%"
          }],
          style: s,
          children: i,
          ...o
        }, n) {
          const c = r.map(e => `${e.color}${e.position?` calc(${e.position} * var(--_171mcfn0))`:""}`).join(", "),
            l = r.map(e => `${e.color}${e.position?` calc(${e.position} * var(--_171mcfn1))`:""}`).join(", "),
            d = "vertical" === e ? "to bottom" : "to right",
            m = "vertical" === e ? "to top" : "to left",
            u = (0, Ji.DI)({
              [Yi]: a ? `linear-gradient(${d}, ${c})` : "linear-gradient(black 0%)",
              [Ki]: t ? `linear-gradient(${m}, ${l})` : "linear-gradient(black 0%)",
              [Wi]: "vertical" === e ? "y" : "x"
            }),
            b = (0, wi.v6)({
              className: Xi({
                orientation: e
              })
            }, o),
            p = {
              ...s,
              ...u
            };
          return (0, _.jsxs)(fi.ScrollArea.Root, {
            ...b,
            ref: n,
            style: p,
            children: [(0, _.jsx)(fi.ScrollArea.Viewport, {
              className: "_171mcfn9",
              children: i
            }), (0, _.jsx)(fi.ScrollArea.Scrollbar, {
              orientation: e,
              children: (0, _.jsx)(fi.ScrollArea.Thumb, {})
            }), (0, _.jsx)(fi.ScrollArea.Corner, {})]
          })
        }),
        Qi = (0, u.createContext)({
          view: "default"
        }),
        eo = (0, u.forwardRef)(function({
          asChild: e,
          testId: a = "web-offer-claim-root",
          view: t = "default",
          ...r
        }, s) {
          const i = e ? hi.DX : "div",
            o = (0, wi.v6)({
              "data-testid": a,
              className: zi({
                view: t
              })
            }, r);
          return (0, _.jsx)(Qi.Provider, {
            value: {
              view: t
            },
            children: (0, _.jsx)(i, {
              ref: s,
              ...o
            })
          })
        }),
        ao = (0, u.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = Si(),
            s = e ? hi.DX : "div",
            i = (0, wi.v6)({
              className: Ii({
                view: r
              })
            }, a);
          return (0, _.jsx)(s, {
            ref: t,
            ...i
          })
        }),
        to = (0, u.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = e ? hi.DX : "header",
            s = (0, wi.v6)({}, a);
          return (0, _.jsx)(r, {
            ref: t,
            ...s
          })
        }),
        ro = (0, u.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = e ? hi.DX : "footer",
            s = (0, wi.v6)({
              className: "_1fcycesd"
            }, a);
          return (0, _.jsx)(r, {
            ref: t,
            ...s
          })
        }),
        so = (0, u.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = Si(),
            s = e ? hi.DX : "div",
            i = (0, wi.v6)({
              className: "_1fcyces8"
            }, a);
          return "dialog" === r ? (0, _.jsx)(fi.Dialog.Description, {
            ref: t,
            asChild: !0,
            children: (0, _.jsx)(s, {
              ...i
            })
          }) : (0, _.jsx)(Zi, {
            style: {
              height: "auto"
            },
            stops: [{
              color: "transparent",
              position: "0%"
            }, {
              color: "black",
              position: "15%"
            }],
            children: (0, _.jsx)(s, {
              ref: t,
              ...i
            })
          })
        }),
        io = (0, u.forwardRef)(function({
          alt: e,
          src: {
            mobile: a,
            desktop: t
          },
          ...r
        }, s) {
          const i = Si(),
            o = (0, wi.v6)({
              className: "_1fcyces3"
            }, r);
          return "dialog" !== i && (0, _.jsxs)("picture", {
            ref: s,
            ...o,
            children: [(0, _.jsx)("source", {
              media: "(max-width: 1279.98px)",
              srcSet: a
            }), (0, _.jsx)("source", {
              media: "(min-width: 1280px)",
              srcSet: t
            }), (0, _.jsx)("img", {
              src: t,
              className: "_1fcyces4",
              alt: e
            })]
          })
        }),
        oo = (0, u.forwardRef)(function({
          children: e,
          appearance: a = "secondary",
          ...t
        }, r) {
          const s = (0, wi.v6)({
            appearance: a,
            testId: "woc.step.badge",
            className: "_1fcycesb"
          }, t);
          return (0, _.jsx)(fi.Badge.Root, {
            ref: r,
            ...s,
            asChild: !0,
            children: (0, _.jsx)(fi.Badge.Label, {
              children: e
            })
          })
        }),
        no = (0, u.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = e ? hi.DX : "div",
            s = (0, wi.v6)({
              className: "_1fcycesa"
            }, a);
          return (0, _.jsx)(r, {
            ref: t,
            ...s
          })
        }),
        co = (0, u.forwardRef)(function({
          ...e
        }, a) {
          const t = Si(),
            r = (0, wi.v6)({
              className: "_1fcyces9"
            }, e);
          return "dialog" === t ? (0, _.jsx)(fi.Dialog.Title, {
            asChild: !0,
            children: (0, _.jsx)(fi.Heading, {
              ref: a,
              ...r
            })
          }) : (0, _.jsx)(fi.Heading, {
            ref: a,
            ...r
          })
        }),
        lo = (0, u.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, wi.v6)({
            testId: "woc.step.description",
            className: "_1fcycesc"
          }, e);
          return (0, _.jsx)(fi.Body, {
            ref: a,
            ...t
          })
        }),
        mo = (0, u.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, wi.v6)({
            testId: "woc.step.disclaimer",
            className: "_1fcycese"
          }, e);
          return (0, _.jsx)(fi.Body, {
            ref: a,
            ...t,
            size: "XS",
            color: "subdued"
          })
        }),
        _o = (0, u.forwardRef)(function({
          size: e = "LG",
          ...a
        }, t) {
          return (0, _.jsx)(fi.Button, {
            ref: t,
            ...a,
            size: e
          })
        }),
        uo = ({
          label: e,
          platform: a,
          ...t
        }) => {
          const r = (0, wi.v6)({
            className: Ei({
              platform: a
            })
          }, t);
          return (0, _.jsx)(fi.Button, {
            ...r,
            appearance: "secondary",
            size: "LG",
            children: (0, _.jsx)("img", {
              src: l[a],
              alt: e
            })
          })
        },
        bo = ({
          ...e
        }) => (0, _.jsx)(uo, {
          ...e,
          label: (0, g.findPlatform)("xbox")?.friendlyName ?? "Xbox",
          platform: "xbox"
        }),
        po = ({
          ...e
        }) => (0, _.jsx)(uo, {
          ...e,
          label: (0, g.findPlatform)("ps")?.friendlyName ?? "PlayStation",
          platform: "ps"
        }),
        go = ({
          label: e
        }) => (0, _.jsx)("div", {
          className: "_1fcycesv",
          children: (0, _.jsx)(fi.Spinner, {
            size: "pageXL",
            label: e
          })
        }),
        fo = Object.assign(xi, d),
        ko = "claimOffer",
        vo = (0, u.createContext)(null),
        ho = () => {
          const e = (0, u.useContext)(vo);
          if (!e) throw new Error("useClaimContext must be used within a ClaimContext.Provider");
          return e
        },
        wo = ({
          giftId: e,
          location: a,
          jumpLinkId: t,
          returnUrl: r,
          steps: s,
          variant: i,
          RichTextComponent: o
        }) => ({
          giftId: e,
          location: a,
          returnUrl: r,
          jumpLinkId: t,
          variant: i,
          steps: s,
          RichTextComponent: o,
          loading: !1,
          status: "IDLE",
          currentStep: "unclaimed",
          dialogOpen: !1
        }),
        yo = (e, a) => {
          switch (a.type) {
            case "LOGIN":
              return {
                ...e, status: "LOGGING_IN"
              };
            case "FETCH_EXISTS":
              return {
                ...e, status: "FETCHING_EXISTS", loading: !0, currentStep: "loading", dialogOpen: "stateful" !== e.variant
              };
            case "CLAIMED":
              return {
                ...e, status: "ALREADY_CLAIMED", currentStep: "stateful" === e.variant ? "success" : "exists", loading: !1, exists: !0, dialogOpen: "stateful" !== e.variant
              };
            case "UNCLAIMED":
              return {
                ...e, status: "UNCLAIMED", currentStep: "unclaimed", exists: !1, dialogOpen: !1
              };
            case "EXISTS_ERROR":
              return {
                ...e, status: "ERROR", loading: !1, currentStep: "error", dialogOpen: "stateful" !== e.variant
              };
            case "FETCH_CHARACTERS":
              return {
                ...e, status: "FETCHING_CHARACTERS", currentStep: "loading", dialogOpen: "stateful" !== e.variant
              };
            case "USER_SYNCED":
              return {
                ...e, status: "USER_SYNCED"
              };
            case "START_CLAIM":
              return {
                ...e, status: "CLAIMABLE"
              };
            case "CLAIM_SUCCESS":
              return {
                ...e, status: "SUCCESS", currentStep: "success", loading: !1, exists: !0, dialogOpen: "stateful" !== e.variant
              };
            case "CLAIM_ERROR":
              return {
                ...e, status: "ERROR", currentStep: "error", loading: !1, dialogOpen: "stateful" !== e.variant
              };
            case "LINK_ACCOUNT":
              return {
                ...e, status: "UNLINKED", currentStep: "link-account", loading: !1, dialogOpen: "stateful" !== e.variant
              };
            case "TRIGGER_CLAIM":
              return {
                ...e, ...a.payload, status: a.payload?.status ?? "TRIGGERED", returnUrl: a.payload?.returnUrl ?? e.returnUrl
              };
            case "FINISHED":
              return {
                ...e, status: "COMPLETE", loading: !1
              };
            case "RESET":
              return {
                ...e, ...wo({
                  steps: e.steps,
                  giftId: e.giftId,
                  location: e.location,
                  jumpLinkId: e.jumpLinkId,
                  returnUrl: a.payload?.returnUrl ?? e.returnUrl,
                  RichTextComponent: e.RichTextComponent,
                  variant: e.variant
                })
              };
            default:
              return e
          }
        },
        jo = () => {
          const {
            state: e,
            dispatch: a
          } = ho(), {
            charactersNeeded: t,
            setCharactersNeeded: r
          } = (0, V.useRockstarUserState)(), {
            track: s
          } = (0, V.useGtmTrack)(), {
            loggedIn: i,
            data: o
          } = (0, V.useRockstarUser)(), {
            signInUrl: n
          } = (0, g.useScAuthLinks)(e.returnUrl), {
            redirect: c
          } = (() => {
            const e = (0, T.useNavigate)();
            return {
              redirect: (0, u.useCallback)((a, t = {}) => {
                try {
                  const r = new URL(a);
                  if (r.origin === window.location.origin) {
                    const a = r.pathname + r.search + r.hash;
                    e(a, t)
                  } else t.replace ? window.location.replace(r.href) : window.location.href = r.href
                } catch {
                  window.location.href = a
                }
              }, [e])
            }
          })(), {
            ref: l,
            inView: d,
            trackSectionImpression: m
          } = (() => {
            const e = (0, u.useRef)(!1),
              a = (0, u.useRef)(!1),
              {
                track: t
              } = (0, V.useGtmTrack)(),
              {
                ref: r
              } = (0, q.useInView)({
                threshold: .6,
                triggerOnce: !0,
                onChange: a => {
                  e.current = a
                }
              }),
              s = (0, u.useCallback)(r => {
                e.current && !a.current && (t({
                  event: "page_section_impression",
                  ...r
                }), a.current = !0)
              }, []);
            return {
              ref: r,
              inView: e.current,
              trackSectionImpression: s
            }
          })(), [_] = (0, T.useSearchParams)(), b = _.has(ko, e.giftId), p = "stateful" === e.variant || "stateful-trigger" === e.variant, f = (() => {
            const {
              state: e,
              dispatch: a
            } = ho(), {
              fetch: t
            } = (r = e.giftId, (0, g.useScApi)("marketing/engagement/claim/exists", {
              autoFetch: !1,
              requireBearerToken: !0,
              useCache: !1,
              query: {
                giftUId: r
              }
            }));
            var r;
            return (0, u.useCallback)(async () => {
              a({
                type: "FETCH_EXISTS"
              });
              try {
                const e = await t();
                if (e?.result) return void a({
                  type: "CLAIMED"
                });
                if (!1 === e?.result && !e.error) return void a({
                  type: "UNCLAIMED"
                });
                if (e && e.error && "null" !== e.error) return void a({
                  type: "EXISTS_ERROR"
                })
              } catch (e) {
                return a({
                  type: "EXISTS_ERROR"
                }), void console.error("Error fetching claim/exists", e)
              }
            }, [a, t])
          })(), k = (() => {
            const {
              state: e,
              dispatch: a
            } = ho(), [t] = (0, T.useSearchParams)(), r = {
              giftUId: e.giftId,
              location: e.location,
              utmCampaign: t.get("utm_campaign") ?? "",
              utmContent: t.get("utm_content") ?? "",
              utmMedium: t.get("utm_medium") ?? "",
              utmSource: t.get("utm_source") ?? ""
            }, {
              createClaim: s
            } = (e => {
              const {
                loading: a,
                fetch: t
              } = (0, g.useScApi)("marketing/engagement/claim/create", {
                autoFetch: !1,
                requireBearerToken: !0,
                useCache: !1,
                query: e
              });
              return {
                loading: a,
                createClaim: async () => await t({
                  fetchOptions: {
                    method: "POST"
                  }
                })
              }
            })(r);
            return (0, u.useCallback)(async () => {
              try {
                const e = await s();
                if (null === e) return void a({
                  type: "CLAIM_ERROR"
                });
                if (!e.status && e.error && "object" == typeof e.error && "131.100.2" === e.error.code) return void a({
                  type: "CLAIMED"
                });
                if (!e.status) return void a({
                  type: "CLAIM_ERROR"
                });
                if (e.status) return void a({
                  type: "CLAIM_SUCCESS"
                })
              } catch (e) {
                a({
                  type: "CLAIM_ERROR"
                }), console.error("Error fetching", e)
              }
            }, [s, a])
          })();
          return (0, u.useEffect)(() => {
            if ("IDLE" === e.status && i && p) f();
            else if (b && "IDLE" === e.status) a({
              type: "TRIGGER_CLAIM"
            });
            else if ("TRIGGERED" !== e.status || i || (s({
                element_placement: "WOC",
                event: "cta_claim",
                link_url: n,
                text: e.steps.unclaimed["button-label"] ?? "claim now",
                section_state: e.variant
              }), a({
                type: "LOGIN"
              }), c(n)), i && (b && ("TRIGGERED" === e.status || "UNCLAIMED" === e.status) || !p && "TRIGGERED" === e.status)) t && o.accountSynced || o.characters ? a({
              type: "USER_SYNCED"
            }) : (r("gtao"), a({
              type: "FETCH_CHARACTERS"
            }));
            else if ("FETCHING_CHARACTERS" === e.status && o.accountSynced) a({
              type: "USER_SYNCED"
            });
            else if ("USER_SYNCED" !== e.status) {
              if ("CLAIMABLE" !== e.status) return "ERROR" === e.status ? (s({
                element_placement: "WOC",
                event: "alert_error",
                o_id: e.giftId,
                section_state: `${e.variant}|${e.status}`,
                text: "something went wrong on our end. please try again in a few minutes."
              }), "stateful" === e.variant && m({
                element_placement: "WOC",
                section_state: `${e.variant}|${e.status}`
              }), void a({
                type: "FINISHED"
              })) : "UNLINKED" === e.status ? ("stateful" === e.variant && m({
                element_placement: "WOC",
                section_state: `${e.variant}|${e.status}`
              }), s({
                element_placement: "WOC",
                event: "alert_error",
                o_id: e.giftId,
                text: "no qualifying character found",
                section_state: `${e.variant}|${e.status}`
              }), void a({
                type: "FINISHED"
              })) : "SUCCESS" === e.status || "ALREADY_CLAIMED" === e.status ? ("stateful" === e.variant && m({
                element_placement: "WOC",
                section_state: `${e.variant}|${e.status}`
              }), s({
                element_placement: "WOC",
                event: "alert_update",
                o_id: e.giftId,
                text: "success",
                section_state: `${e.variant}|${e.status}`
              }), void a({
                type: "FINISHED"
              })) : void 0;
              k()
            } else o && o.characters && o.characters.gtao.length > 0 ? a({
              type: "START_CLAIM"
            }) : a({
              type: "LINK_ACCOUNT"
            })
          }, [i, b, o, e.status]), (0, u.useEffect)(() => {
            m({
              element_placement: "WOC",
              section_state: `${e.variant}|${e.status}`
            })
          }, [d, e.variant, e.status, m]), {
            ref: l
          }
        };
      var xo = t(52321);
      const No = (0, E.defineMessages)({
          web_offer_claim_error_state_button: {
            id: "web_offer_claim_error_state_button",
            description: "Button label for when web offer claims enter an error state",
            defaultMessage: "Try Again"
          },
          web_offer_claim_error_state_icon_label: {
            id: "web_offer_claim_error_state_icon_label",
            description: "Icon label for when web offer claims enter an error state",
            defaultMessage: "Error Icon"
          },
          web_offer_claim_success_state_icon_label: {
            id: "web_offer_claim_success_state_icon_label",
            description: "Icon label for when web offer claims enter an success state",
            defaultMessage: "Success Icon"
          },
          web_offer_claim_exists_state_icon_label: {
            id: "web_offer_claim_exists_state_icon_label",
            description: "Icon label for when web offer claims enter an exists state",
            defaultMessage: "Success Icon"
          },
          web_offer_claim_link_account_state_icon_label: {
            id: "web_offer_claim_link_account_state_icon_label",
            description: "Button label for when web offer claims enter an link-account state",
            defaultMessage: "Error Icon"
          },
          web_offer_claim_loading_state: {
            id: "web_offer_claim_loading_state",
            description: "label for loading state of web offer claim",
            defaultMessage: "loading"
          },
          web_offer_claim_dialog_close: {
            id: "web_offer_claim_dialog_close",
            description: "label for close button of the web offer claim dialog",
            defaultMessage: "close"
          }
        }),
        So = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, E.useIntl)(), {
            state: t,
            dispatch: r
          } = ho(), s = (0, u.useCallback)(() => {
            r({
              type: "TRIGGER_CLAIM",
              payload: {
                status: "CLAIMABLE"
              }
            })
          }, [r]), {
            RichTextComponent: i
          } = t, {
            image: o,
            heading: n,
            description: c,
            disclaimer: l
          } = t.steps.error, d = (0, g.isEmptyMarkup)(l ?? ""), m = t.steps.unclaimed.disclaimer, b = t.steps.unclaimed.image, {
            alt: p,
            src: f
          } = (0, Ve.useImageParser)(o ?? b ?? {});
          return (0, _.jsxs)(fo.Root, {
            view: e,
            children: [(0, _.jsx)(fo.Image, {
              alt: p ?? "",
              src: f ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, _.jsxs)(fo.Container, {
              children: [(0, _.jsxs)(fo.Content, {
                children: [(0, _.jsx)(xo.lW, {
                  size: "XL",
                  color: Ji.LU.alias.color.icon.danger,
                  label: a(No.web_offer_claim_error_state_icon_label)
                }), (0, _.jsx)(fo.Heading, {
                  level: 4,
                  children: n
                }), c && (0, _.jsx)(fo.Description, {
                  children: i({
                    children: c
                  })
                })]
              }), (0, _.jsxs)(fo.Footer, {
                children: [(0, _.jsx)(fo.Actions, {
                  children: (0, _.jsx)(fo.Button, {
                    appearance: "primary",
                    onClick: s,
                    children: a(No.web_offer_claim_error_state_button)
                  })
                }), "stateful" === t.variant && (l || m) && (0, _.jsx)(fo.Disclaimer, {
                  children: i({
                    children: d ? m : l
                  })
                })]
              })]
            })]
          })
        };
      var Co = t(21152);
      const To = ({
          trackingHandler: e,
          href: a,
          label: t,
          target: r,
          ...s
        }) => (0, _.jsx)(fo.Button, {
          ...s,
          onClick: () => {
            e && e({
              label: t,
              href: a
            })
          },
          asChild: !0,
          "data-testid": "success-link",
          children: (0, _.jsx)("a", {
            href: a,
            target: r,
            children: t
          })
        }),
        Io = ({
          platformConfigs: e,
          ...a
        }) => {
          const {
            data: t
          } = (0, V.useRockstarUser)(), {
            charactersNeeded: r,
            setCharactersNeeded: s
          } = (0, V.useRockstarUserState)();
          r || s("gtao");
          const i = t.gamesPlayed?.gtav,
            o = !t.accountSynced,
            {
              label: n,
              href: c,
              target: l
            } = (0, u.useMemo)(() => {
              const a = e.default ?? {
                label: "",
                href: "",
                target: "_blank"
              };
              if (i) {
                const {
                  hasGtaPlus: r
                } = t, s = i.includes("pc") ? "pc" : i, o = r ? `gtaPlus-${s}` : s;
                return Object.hasOwn(e, o) ? e[o] : a
              }
              return a
            }, [i, t, e]);
          return (0, _.jsx)(To, {
            label: n,
            href: c,
            target: l,
            isLoading: o,
            ...a
          })
        },
        Eo = ["ps5", "xboxsx", "pcalt"],
        zo = e => {
          const {
            data: a
          } = (0, V.useRockstarUser)(), {
            charactersNeeded: t,
            setCharactersNeeded: r
          } = (0, V.useRockstarUserState)();
          t || r("gtao");
          const s = a.gamesPlayed?.gtav,
            i = (0, u.useMemo)(() => !!s && Eo.includes(s), [s]),
            {
              hasGtaPlus: o
            } = a;
          return !o && i && (0, _.jsx)(To, {
            href: "https://www.rockstargames.com/gta-plus/join",
            target: "_self",
            ...e
          })
        },
        Po = e => {
          const {
            track: a
          } = (0, V.useGtmTrack)(), {
            state: t
          } = ho();
          switch (e.type) {
            case "shark": {
              const {
                type: r,
                ...s
              } = e, i = ({
                label: e,
                href: r
              }) => {
                a({
                  element_placement: "WOC",
                  event: "cta_store_link",
                  o_id: t.giftId,
                  text: e,
                  link_url: r
                })
              }, o = (0, wi.v6)({
                trackingHandler: i
              }, s);
              return (0, _.jsx)(Io, {
                ...o
              })
            }
            case "gta-plus-subscribe": {
              const {
                type: r,
                ...s
              } = e, i = ({
                label: e,
                href: r
              }) => {
                a({
                  element_placement: "WOC",
                  event: "cta_other",
                  o_id: t.giftId,
                  text: e,
                  link_url: r
                })
              }, o = (0, wi.v6)({
                trackingHandler: i
              }, s);
              return (0, _.jsx)(zo, {
                ...o
              })
            }
            default: {
              const {
                type: r,
                ...s
              } = e, i = ({
                label: e
              }) => {
                a({
                  element_placement: "WOC",
                  event: "alert_update",
                  o_id: t.giftId,
                  text: e
                })
              }, o = (0, wi.v6)({
                trackingHandler: i
              }, s);
              return (0, _.jsx)(To, {
                ...o
              })
            }
          }
        },
        Lo = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, E.useIntl)(), {
            state: t
          } = ho(), {
            RichTextComponent: r
          } = t, {
            image: s,
            heading: i,
            description: o,
            ctas: n,
            disclaimer: c
          } = t.steps[t.currentStep], l = t.steps.unclaimed.image, d = (0, g.isEmptyMarkup)(c ?? ""), m = t.steps.unclaimed.disclaimer, {
            alt: u,
            src: b
          } = (0, Ve.useImageParser)(s ?? l ?? {});
          return (0, _.jsxs)(fo.Root, {
            view: e,
            children: [(0, _.jsx)(fo.Image, {
              alt: u ?? "",
              src: b ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, _.jsxs)(fo.Container, {
              children: [(0, _.jsxs)(fo.Content, {
                children: [(0, _.jsx)(xo.Jl, {
                  size: "XL",
                  color: Co.LU.alias.color.icon.success,
                  label: a(No.web_offer_claim_success_state_icon_label)
                }), (0, _.jsx)(fo.Heading, {
                  level: 4,
                  children: i
                }), o && (0, _.jsx)(fo.Description, {
                  children: r({
                    children: o
                  })
                })]
              }), (0, _.jsxs)(fo.Footer, {
                children: [n && n.length > 0 && (0, _.jsx)(fo.Actions, {
                  children: n.map((e, a) => (0, _.jsx)(Po, {
                    ...e
                  }, a))
                }), "stateful" === t.variant && (c || m) && (0, _.jsx)(fo.Disclaimer, {
                  children: r({
                    children: d ? m : c
                  })
                })]
              })]
            })]
          })
        },
        Mo = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, E.useIntl)(), t = (0, g.useGetTpaLinkGenerator)(), {
            state: r
          } = ho(), {
            track: s
          } = (0, V.useGtmTrack)(), {
            RichTextComponent: i
          } = r, {
            image: o,
            heading: n,
            description: c,
            disclaimer: l
          } = r.steps["link-account"], d = (0, u.useCallback)(async e => {
            const a = (0, g.findPlatform)(e)?.onlineService;
            if (a && "sc" !== a) {
              s({
                element_placement: "WOC",
                event: "cta_link_account",
                o_id: r.giftId,
                text: `link ${a}`
              });
              const e = await t({
                returnUrl: r.returnUrl || window.location.pathname,
                service: a
              });
              window.location.assign(e.href)
            }
          }, [t, s, r.returnUrl, r.giftId]), m = (0, u.useCallback)(() => {
            d("xbox")
          }, [d]), b = (0, u.useCallback)(() => {
            d("ps")
          }, [d]), p = (0, g.isEmptyMarkup)(l ?? ""), f = r.steps.unclaimed.disclaimer, k = r.steps.unclaimed.image, {
            alt: v,
            src: h
          } = (0, Ve.useImageParser)(o ?? k ?? {});
          return (0, _.jsxs)(fo.Root, {
            view: e,
            children: [(0, _.jsx)(fo.Image, {
              alt: v ?? "",
              src: h ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, _.jsxs)(fo.Container, {
              children: [(0, _.jsxs)(fo.Content, {
                children: [(0, _.jsx)(xo.lW, {
                  size: "XL",
                  color: Ji.LU.alias.color.icon.danger,
                  label: a(No.web_offer_claim_link_account_state_icon_label)
                }), (0, _.jsx)(fo.Heading, {
                  level: 4,
                  children: n
                }), c && (0, _.jsx)(fo.Description, {
                  children: i({
                    children: c
                  })
                })]
              }), (0, _.jsxs)(fo.Footer, {
                children: [(0, _.jsxs)(fo.Actions, {
                  children: [(0, _.jsx)(fo.LinkXBoxButton, {
                    target: "_self",
                    onClick: m
                  }), (0, _.jsx)(fo.LinkPSButton, {
                    target: "_self",
                    onClick: b
                  })]
                }), "stateful" === r.variant && (l || f) && (0, _.jsx)(fo.Disclaimer, {
                  children: i({
                    children: p ? f : l
                  })
                })]
              })]
            })]
          })
        },
        Ao = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, E.useIntl)(), {
            state: t
          } = ho(), {
            image: r
          } = t.steps.unclaimed, {
            alt: s,
            src: i
          } = (0, Ve.useImageParser)(r ?? {});
          return (0, _.jsxs)(fo.Root, {
            view: e,
            children: [(0, _.jsx)(fo.Image, {
              alt: s ?? "",
              src: i ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, _.jsxs)(fo.Container, {
              children: [(0, _.jsx)(fo.Header, {
                children: (0, _.jsx)(hi.s6, {
                  children: (0, _.jsx)(fo.Heading, {
                    level: 5,
                    children: a(No.web_offer_claim_loading_state)
                  })
                })
              }), (0, _.jsx)(fo.Content, {
                children: (0, _.jsx)(fo.Description, {
                  asChild: !0,
                  children: (0, _.jsx)(fo.Loading, {
                    label: a(No.web_offer_claim_loading_state)
                  })
                })
              })]
            })]
          })
        },
        Do = ({
          label: e,
          ...a
        }) => {
          const {
            loggedIn: t
          } = (0, V.useRockstarUser)(), {
            state: r,
            dispatch: s
          } = ho(), [, i] = (0, T.useSearchParams)(), o = (0, u.useCallback)(() => {
            t && i(e => (e.set("claimOffer", r.giftId), e), {
              replace: !0
            });
            try {
              const e = new URLSearchParams(window.location.search);
              e.set("claimOffer", r.giftId);
              const a = `${window.location.pathname}?${e.toString()}#${r.jumpLinkId}`;
              s({
                type: "TRIGGER_CLAIM",
                payload: {
                  returnUrl: a
                }
              })
            } catch {
              console.warn("invalid params")
            }
          }, [s, t, i, r.giftId, r.jumpLinkId]), n = (0, wi.v6)({
            appearance: a.appearance ?? "primary"
          }, a);
          return (0, _.jsx)(Ni, {
            onPress: o,
            ...n,
            view: "stateful" !== r.variant ? "dialog" : "default",
            children: e
          })
        },
        Ro = ({
          view: e = "default"
        }) => {
          const {
            state: a
          } = ho(), {
            RichTextComponent: t
          } = a, {
            image: r,
            badge: s,
            heading: i,
            description: o,
            disclaimer: n
          } = a.steps.unclaimed, {
            alt: c,
            src: l
          } = (0, Ve.useImageParser)(r ?? {}), d = a.steps.unclaimed["button-label"];
          return (0, _.jsxs)(fo.Root, {
            view: e,
            children: [(0, _.jsx)(fo.Image, {
              alt: c ?? "",
              src: l ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, _.jsxs)(fo.Container, {
              children: [(0, _.jsxs)(fo.Content, {
                children: [s && (0, _.jsx)(fo.Badge, {
                  children: s
                }), (0, _.jsx)(fo.Heading, {
                  level: 4,
                  children: i
                }), o && (0, _.jsx)(fo.Description, {
                  children: t({
                    children: o
                  })
                })]
              }), (0, _.jsxs)(fo.Footer, {
                children: [d && (0, _.jsx)(fo.Actions, {
                  children: (0, _.jsx)(Do, {
                    appearance: "primary",
                    size: "LG",
                    label: d,
                    view: "stateful" !== a.variant ? "dialog" : "default"
                  })
                }), n && (0, _.jsx)(fo.Disclaimer, {
                  children: t({
                    children: n
                  })
                })]
              })]
            })]
          })
        },
        Fo = () => {
          const {
            state: e
          } = ho(), {
            ref: a
          } = jo();
          return (0, _.jsx)(ji, {
            jumpLinkId: e.jumpLinkId,
            currentStep: e.currentStep,
            "data-exclude-legacy-typography-css": !0,
            ref: a,
            children: "stateful" === e.variant ? (0, _.jsx)(Vo, {}) : (0, _.jsx)($o, {})
          })
        },
        Vo = vi(() => (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)(fo, {
            stepIndex: "loading",
            children: (0, _.jsx)(Ao, {})
          }), (0, _.jsx)(fo, {
            stepIndex: "unclaimed",
            children: (0, _.jsx)(Ro, {})
          }), (0, _.jsx)(fo, {
            stepIndex: "success",
            children: (0, _.jsx)(Lo, {})
          }), (0, _.jsx)(fo, {
            stepIndex: "error",
            children: (0, _.jsx)(So, {})
          }), (0, _.jsx)(fo, {
            stepIndex: "link-account",
            children: (0, _.jsx)(Mo, {})
          })]
        })),
        $o = vi(() => {
          const {
            formatMessage: e
          } = (0, E.useIntl)(), {
            state: a
          } = ho(), {
            isOpen: t,
            setIsOpen: r
          } = (() => {
            const {
              state: e
            } = ho(), a = (() => {
              const [, e] = (0, T.useSearchParams)(), {
                dispatch: a
              } = ho();
              return (0, u.useCallback)(() => {
                e(e => (e.delete(ko), e), {
                  replace: !0
                }), a({
                  type: "RESET"
                })
              }, [a, e])
            })(), t = (0, u.useCallback)(e => {
              e || a()
            }, [a]);
            return {
              isOpen: e.dialogOpen,
              setIsOpen: t
            }
          })(), s = "dialog";
          return (0, _.jsxs)(fi.Dialog.Root, {
            isOpen: t,
            onOpenChange: r,
            children: ["static" === a.variant && (0, _.jsx)(Ro, {
              view: "default"
            }), (0, _.jsx)(fi.Dialog.Portal, {
              children: (0, _.jsx)(fi.Dialog.Overlay, {
                children: (0, _.jsxs)(fi.Dialog.Content, {
                  children: [(0, _.jsx)(fi.Dialog.CloseButton, {
                    label: e(No.web_offer_claim_dialog_close),
                    onPress: () => r(!1)
                  }), (0, _.jsx)(fi.Dialog.ScrollArea, {
                    style: {
                      overflowY: "auto"
                    },
                    children: (0, _.jsxs)(fi.Dialog.Layout, {
                      children: [(0, _.jsx)(fo, {
                        stepIndex: "loading",
                        children: (0, _.jsx)(Ao, {
                          view: s
                        })
                      }), (0, _.jsx)(fo, {
                        stepIndex: "success",
                        children: (0, _.jsx)(Lo, {
                          view: s
                        })
                      }), (0, _.jsx)(fo, {
                        stepIndex: "error",
                        children: (0, _.jsx)(So, {
                          view: s
                        })
                      }), (0, _.jsx)(fo, {
                        stepIndex: "link-account",
                        children: (0, _.jsx)(Mo, {
                          view: s
                        })
                      }), (0, _.jsx)(fo, {
                        stepIndex: "exists",
                        children: (0, _.jsx)(Lo, {
                          view: s
                        })
                      })]
                    })
                  })]
                })
              })
            })]
          })
        }),
        Go = (vi(Fo), ({
          children: e
        }) => e ? "string" != typeof e ? (console.error("RichText expects to be a string"), null) : (0, _.jsx)(Ve.TinaRichText, {
          html: e
        }) : null),
        Oo = ({
          children: e,
          initialState: a
        }) => {
          const [t, r] = (0, u.useReducer)(yo, a);
          return (0, _.jsx)(vo.Provider, {
            value: {
              state: t,
              dispatch: r
            },
            children: e
          })
        },
        Bo = vi(({
          giftId: e,
          location: a,
          jumpLinkId: t,
          variant: r = "stateful",
          steps: s
        }) => {
          const i = `${document.location.pathname}${document.location.search}#${t}`,
            o = (0, Ve.usePrunedTinaKeys)(s),
            n = wo({
              giftId: e,
              location: a,
              returnUrl: i,
              jumpLinkId: t,
              steps: o,
              variant: r,
              RichTextComponent: Go
            }),
            {
              hash: c
            } = (0, T.useLocation)();
          return (0, u.useLayoutEffect)(() => {
            const e = document.getElementById(t);
            e && c.includes(t) && e.scrollIntoView({
              behavior: "instant",
              block: "center"
            })
          }, []), (0, _.jsx)(Oo, {
            initialState: n,
            children: s && (0, _.jsx)(Fo, {})
          })
        }),
        qo = ({
          article: e,
          children: a
        }) => {
          const t = e.primary_tags[e.primary_tags.length > 1 && 722 === e.primary_tags[0].id ? 1 : 0];
          return (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlec853d8a152fed83cf33e0fc661cf8214",
            children: [(0, _.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlef7db33be003c658d5566777dc41b3d8d",
              children: [(0, _.jsxs)("h1", {
                children: [e.title, e.subtitle ? (0, _.jsx)("span", {
                  children: e.subtitle
                }) : ""]
              }), (0, _.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlec1fbf3067a1ce8e71e38d92093f62f88",
                children: [e.primary_tags.length ? (0, _.jsx)(Aa, {
                  title: t.name,
                  href: `/newswire?tag_id=${t.id}`
                }) : "", (0, _.jsx)("time", {
                  dateTime: e.created,
                  children: e.created_formatted
                })]
              }), e.posts_hero && "iframe" === e.posts_hero.type ? (0, _.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlebb59ee9d50a65d6978fff34966f65bf8",
                children: (0, _.jsx)("iframe", {
                  src: e.posts_hero.hero
                })
              }) : "", (0, _.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlefd4ea03865b0f756d342c3eee228e9f8",
                dangerouslySetInnerHTML: {
                  __html: e.content
                }
              })]
            }), a]
          })
        };
      var Ho = t(92910);
      const Uo = (0, g.withTranslations)(({
          article: e,
          children: a,
          t
        }) => {
          const r = (0, g.useLocale)(),
            s = {
              A: e => (0, _.jsx)(m.A, {
                ...e
              }),
              AnchorLink: e => (0, _.jsx)(Rs, {
                ...e
              }),
              ArticleTag: e => (0, _.jsx)(Aa, {
                ...e
              }),
              AudioPlayer: e => (0, _.jsx)(y, {
                ...e
              }),
              Button: e => (0, _.jsx)(C, {
                ...e
              }),
              Carousel: e => (0, _.jsx)(R.A, {
                ...e
              }),
              Cta: e => (0, _.jsx)(ge, {
                ...e
              }),
              Discounts: e => (0, _.jsx)(Xs, {
                ...e
              }),
              Donate: e => (0, _.jsx)(Js, {
                ...e
              }),
              FadeInContent: e => (0, _.jsx)(ra, {
                ...e
              }),
              FontClip: e => (0, _.jsx)(ii, {
                ...e
              }),
              GamingRewards: e => (0, _.jsx)(ni, {
                ...e
              }),
              Gif: e => (0, _.jsx)(Cr(), {
                ...e
              }),
              Grid: e => (0, _.jsx)(Ze, {
                ...e
              }),
              GroupOfItems: e => (0, _.jsx)(Tr.default, {
                ...e
              }),
              HeroImage: e => (0, _.jsx)(mi, {
                ...e
              }),
              HTMLElement: e => (0, _.jsx)(wa, {
                ...e
              }),
              ImageWithBadge: e => (0, _.jsx)(Ca.A, {
                ...e
              }),
              MultiSourceImage: e => (0, _.jsx)(ya.A, {
                ...e
              }),
              NewswireFull: e => (0, _.jsx)(ui, {
                ...e
              }),
              Title: e => (0, _.jsx)(Qs, {
                ...e
              }),
              PctBar: e => (0, _.jsx)(bi, {
                ...e
              }),
              Podium: e => (0, _.jsx)(pi, {
                ...e
              }),
              ResponsiveGridBox: e => (0, _.jsx)(kt, {
                ...e
              }),
              ResponsiveGridItem: e => (0, _.jsx)(ht, {
                ...e
              }),
              ResponsiveFlexBox: e => (0, _.jsx)(bt, {
                ...e
              }),
              ResponsiveFlexItem: e => (0, _.jsx)(gt, {
                ...e
              }),
              ResponsiveSection: e => (0, _.jsx)(xt, {
                ...e
              }),
              ResponsiveImg: e => (0, _.jsx)(yt, {
                ...e
              }),
              Separator: e => (0, _.jsx)(Lt.A, {
                ...e
              }),
              Tag: e => (0, _.jsx)(Aa, {
                ...e
              }),
              UnorderedList: e => (0, _.jsx)(er.A, {
                ...e
              })
            },
            i = e.posts_jsx.variables_us_defaulted,
            [o] = (0, u.useState)((0, _.jsx)(Ho.default, {
              renderInWrapper: !1,
              bindings: {
                getArray: (e, a) => e[a],
                renderHtml: e => (0, _.jsx)("span", {
                  dangerouslySetInnerHTML: {
                    __html: e
                  }
                }, o),
                article: e,
                locale: r,
                t,
                variables: i
              },
              components: s,
              jsx: e.posts_jsx.markup,
              onError: e => {
                console.error(e)
              }
            }));
          return (0, _.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlece2d8080309005e155e5422fd38faa5d",
            children: [o, a]
          })
        }),
        Wo = ({
          children: e,
          payload: a,
          variablesKeys: t
        }) => (0, _.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articledad06d3570a3cd17332c2bfb19d8f611",
          children: [(0, _.jsx)(Ve.TinaParser, {
            tina: {
              payload: a,
              variables: {
                keys: t
              }
            },
            components: Zo
          }), e]
        });
      var Ko = t(55830);
      const Xo = ({
          article: e,
          relatedBlock: a
        }) => {
          switch (e.jsx) {
            case 0:
              return (0, _.jsx)(qo, {
                article: e,
                children: a
              });
            case 1:
              return (0, _.jsx)(Uo, {
                article: e,
                children: a
              });
            default:
              return (0, _.jsx)(Wo, {
                payload: e.tina.payload,
                variablesKeys: e.tina.variables.keys,
                children: a
              })
          }
        },
        Yo = ({
          idHash: e
        }) => {
          const {
            data: a,
            loading: t
          } = (0, g.useQuery)(Ko.NewswirePost, {
            variables: {
              id_hash: e
            },
            setTitleDataPath: "post.title",
            autoSetLoading: !0
          }), r = a?.post ?? null, s = a?.related?.results ?? null;
          if ((0, u.useEffect)(() => {
              r && (window?.instgrm?.Embeds?.process?.(), window?.twttr?.widgets?.load?.())
            }, [r]), !r || t) return null;
          const i = r?.tina?.payload?.meta,
            o = s && r.show_related ? (0, _.jsx)(Oa, {
              posts: s
            }) : "";
          return (0, _.jsx)(g.newswirePost.Provider, {
            article: r,
            children: (0, _.jsx)(Ve.TinaThemeProvider, {
              meta: i,
              children: (0, _.jsx)(Xo, {
                article: r,
                relatedBlock: o
              })
            })
          })
        },
        Jo = {
          ClrCard: ({
            id: e,
            content: a,
            size: t = "clr",
            cardType: r = "release",
            title: s,
            subheader: i,
            subtitle: o,
            storeInfo: n = {},
            expandedType: c,
            to: l,
            image: d,
            deckProps: m,
            tina: u = {},
            position: b
          }) => {
            const p = (0, Ve.useTinaPayload)(),
              g = u?.payload?.meta?.cdn ?? p?.meta?.prod ?? !1,
              f = {
                image: {
                  ...d,
                  prod: g
                }
              },
              k = [d];
            return (0, _.jsx)(Qr, {
              id: e,
              title: s,
              context: "clr-card",
              size: t,
              expandedType: c,
              images: f,
              deckProps: m,
              prod: g,
              position: b,
              modalProps: {
                className: _s.clrCardModal,
                contentClassName: _s.clrCardModalContent
              },
              variants: us.plainCard,
              payload: {
                content: a
              },
              expandedCardContents: (0, _.jsx)(ms, {
                images: k,
                prod: g
              }, `expanded-${e}`),
              children: (0, _.jsx)(rs, {
                expandedType: c,
                to: l,
                style: {
                  display: "flex"
                },
                children: (0, _.jsx)(ts, {
                  cardType: r,
                  title: s,
                  subheader: i,
                  subtitle: o,
                  image: f,
                  expandedType: c,
                  price: n?.price,
                  slashedPrice: n?.slashedPrice,
                  badge: n?.badge
                })
              })
            })
          },
          ClrCollapsedCard: ts,
          Gif: Cr(),
          GroupOfItems: Tr.default,
          RockstarVideoPlayer: zr(),
          SwiperCarousel: Ir.default,
          Highlights: gi.Highlights,
          WebOfferClaim: Bo
        },
        Zo = {
          ...n,
          ...c,
          ...Jo
        }
    },
    36672(e, a, t) {
      const r = {
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
        "./esrb_latam_rp.svg": 6325,
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
        "./tw_rp.png": 68271,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function s(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = i, e.exports = s, s.id = 36672
    },
    8194(e, a, t) {
      const r = {
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
        "./esrb_latam_rp.svg": 6325,
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
        "./tw_rp.png": 68271,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function s(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = i, e.exports = s, s.id = 8194
    },
    86751(e, a, t) {
      const r = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop/global.jpg": 57156,
        "./VI/mobile/global.jpg": 52640,
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
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function s(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = i, e.exports = s, s.id = 86751
    },
    39294(e, a, t) {
      const r = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop/global.jpg": 57156,
        "./VI/mobile/global.jpg": 52640,
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
        "./tabletennis.jpg": 84141,
        "./theballadofgaytony.jpg": 14825,
        "./thelostanddamned.jpg": 52591,
        "./thewarriors.jpg": 96148,
        "./undeadnightmare.jpg": 32830,
        "./vicecity.jpg": 91480,
        "./vicecitystories.jpg": 10869,
        "./wildmetal.jpg": 85613
      };

      function s(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = i, e.exports = s, s.id = 39294
    },
    58963(e, a, t) {
      const r = {
        "./VI/desktop/global.jpg": 57156
      };

      function s(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = i, e.exports = s, s.id = 58963
    },
    25087(e, a, t) {
      const r = {
        "./VI/mobile/global.jpg": 52640
      };

      function s(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = i, e.exports = s, s.id = 25087
    },
    97558(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    29362(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    67299(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    9020(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    17065(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    46554(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    51392(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    8674(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    89836(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    54222(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    58648(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    8054(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    23781(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    89235(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    24256(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    65315(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    6325(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7394670f18d3cf36ebc76e11b860fc03.svg"
    },
    87256(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    10419(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    89069(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    95088(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    18177(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    86595(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    28414(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    81864(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    77404(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    8711(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    6312(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    48157(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    19612(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    89303(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    67443(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    49980(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    24611(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    68918(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    63117(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    2024(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    50324(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    52466(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    3950(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    9188(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    18712(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    21022(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    22772(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    9815(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    47580(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    74432(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    15821(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    86929(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    51575(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    27351(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    82424(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    46618(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    40491(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    94293(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    36855(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    98952(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    65044(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    72690(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    51913(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    68271(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/12bd0a3a5b71cd7d797c7e213829d218.png"
    },
    84406(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    26151(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    87707(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    90717(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    2696(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    21228(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    32323(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    10111(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    84752(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    73483(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    98754(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    1157(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9a0081479cf535d73d39a1742b4b7c4c.jpg"
    },
    57156(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6934dc5e822bb457e127873c6114b38b.jpg"
    },
    52640(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f8798f0d7d5f37162b70cbf70894f34.jpg"
    },
    78323(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    23587(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    67181(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    85332(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    44596(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    18518(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    7509(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    42787(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    26788(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    33143(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    8494(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    59942(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    64923(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    85256(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    42043(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    52014(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    59414(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52461(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    89273(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    95903(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    3933(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    77321(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    13095(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    57258(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    12602(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    3818(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    59655(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    63839(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    79795(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    24808(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    19552(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    73534(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    27064(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    31248(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    79114(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    93573(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    14724(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    90377(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    73564(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    22844(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    84715(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    28005(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    84141(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    14825(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    52591(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    96148(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    32830(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    91480(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    10869(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    85613(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    68547(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    1983(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd3b8222b81c51f8a6ae266c805c98a6.png"
    },
    29654(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f002a20c79ea2264ca52456194ef5b48.svg"
    }
  }
]);