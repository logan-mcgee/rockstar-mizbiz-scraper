try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4a603950-d62c-4379-8604-060a0b4c4105", e._sentryDebugIdIdentifier = "sentry-dbid-4a603950-d62c-4379-8604-060a0b4c4105")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [3823], {
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach(function(e) {
            c.add(e)
          }); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              c.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach(function(e) {
            c.add(e)
          }); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              c.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach(function(e) {
            c.add(e)
          }); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              c.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach(function(e) {
            c.add(e)
          }); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              c.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.TinaModulesList = r(a, "TinaModulesList"), e.exports.TinaModulesInfo = r(a, "TinaModulesInfo")
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach(function(e) {
            c.add(e)
          }); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              c.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
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
                value: "tagIdHash"
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
                  value: "tagIdHash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagIdHash"
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
          end: 1014
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $tagIdHash: String\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(\n        page: $page\n        tagId: $tagId\n        tagIdHash: $tagIdHash\n        locale: $locale\n        limit: $limit\n    ) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach(function(e) {
            c.add(e)
          }); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              c.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.postFields = r(a, "postFields"), e.exports.paging = r(a, "paging"), e.exports.NewswireList = r(a, "NewswireList")
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "hideInvisible"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
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
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "hideInvisible"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "hideInvisible"
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
          end: 561
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n    $hideInvisible: Boolean\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n        hideInvisible: $hideInvisible\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach(function(e) {
            c.add(e)
          }); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              c.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        }), t
      }(a, "TinaModulesList")
    },
    26161(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(39793),
        i = t(57821),
        r = t.n(i);
      const n = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        c = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        o = ({
          type: e = "spinning"
        }) => {
          let a;
          return a = "threeDots" === e ? c : n, (0, s.jsx)(r(), {
            loop: !0,
            autoplay: !0,
            animationData: a,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        }
    },
    33174(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(39793),
        i = t(93082),
        r = t(99225),
        n = t(13331);
      const c = (0, n.withTranslations)(({
        t: e
      }) => {
        const [a] = (0, i.useState)(""), t = (0, r.useNavigate)(), c = (0, n.useMutateState)();
        return (0, s.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-legacyc9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), c({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            t(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, s.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, s.jsx)("input", {
            autoComplete: "off",
            defaultValue: a,
            enterKeyHint: "search",
            name: "q",
            placeholder: e("Search Rockstar Games")
          })]
        })
      })
    },
    21017(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(39793),
        i = t(93082),
        r = t(20696),
        n = t(16805),
        c = function(e) {
          return e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e
        }({}),
        o = t(55409);
      class d extends i.Component {
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
          (0, r.Z)({
            category: "ErrorBoundary",
            message: e.message || "E399 triggered",
            data: {
              error: e,
              errorInfo: a
            }
          }), (0, n.wd)(`ErrorBoundary - ${e.name} ${e.message}`, {
            level: c.Error,
            fingerprint: "ChunkLoadError" === e.name ? ["chunkloaderror"] : []
          })
        }
        render() {
          return null !== this.state.error.code ? (0, s.jsx)(o.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const l = (e, a = null) => {
        const t = t => (0, s.jsx)(d, {
          header: a,
          children: (0, s.jsx)(e, {
            ...t
          })
        });
        return t.displayName = `withSearchbarErrorBoundary(${e.displayName||e.name||"Component"})`, t
      }
    },
    55409(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(39793),
        i = t(93082),
        r = t(42909),
        n = t(33337),
        c = t(33174);
      const o = (0, r.defineMessages)({
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
        d = ({
          error: e,
          domain: a = ""
        }) => {
          console.error({
            error: e
          });
          const {
            formatMessage: t
          } = (0, r.useIntl)();
          let d = e?.message ?? t(o.wasted_error_404_new);
          d = t(o.wasted_error_404_new);
          const l = e?.code ?? 398,
            m = (0, i.useRef)(null);
          return (0, i.useEffect)(() => {
            m && m?.current && m.current.focus()
          }, [m]), (0, s.jsxs)("div", {
            className: "rockstargames-sites-legacyd0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, s.jsx)("h3", {
              tabIndex: -1,
              ref: m,
              children: `${d} (${l})`
            }), (0, s.jsx)(n.A, {
              to: "/",
              reloadDocument: !1,
              children: t(o.wasted_home)
            }), "clr" !== a && (0, s.jsx)(c.A, {})]
          })
        }
    },
    37660(e, a, t) {
      "use strict";
      t.d(a, {
        h: () => c
      }), t(39793);
      var s = t(93082),
        i = t(13331);
      t(99225), t(79955), t(20155), t(82199), (0, t(42909).defineMessages)({
        modal_pagination_group_sr_only_label: {
          id: "modal_pagination_group_sr_only_label",
          description: "Aria label describing modal pagination in list",
          defaultMessage: "Now showing {index} of {total}"
        }
      }), t(81270);
      const r = [{}, () => {}],
        n = (0, i.setContextItem)({
          context: (0, s.createContext)(r),
          key: "modalContext"
        }),
        c = () => (0, s.useContext)(n)
    },
    43091(e, a, t) {
      "use strict";
      t.d(a, ["F", 0, () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }])
    },
    41511(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        componentsForTinaParser: () => Cn
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => X,
        transitions: () => U,
        variants: () => Y
      });
      var i = {};
      t.r(i), t.d(i, {
        Animations: () => s,
        LiteMotion: () => A,
        withFadeIn: () => G,
        withFadeUp: () => q
      });
      var r = {};
      t.r(r), t.d(r, {
        Root: () => ha,
        Text: () => ya
      });
      var n = {};
      t.r(n), t.d(n, {
        RpCategory: () => Xs,
        rpCategoryTestIds: () => Ys
      });
      var c = {};
      t.r(c), t.d(c, {
        Avatar: () => ei,
        Content: () => ai,
        PlatformTag: () => si,
        PlatformTagSizes: () => Hs,
        Platforms: () => Ws,
        RankContent: () => ri,
        Root: () => Js,
        RpCategory: () => ni,
        TextContent: () => ci,
        TopRow: () => ti,
        UserName: () => ii
      });
      var o = {};
      t.r(o), t.d(o, {
        Art: () => en,
        Link: () => an
      });
      var d = {};
      t.r(d), t.d(d, {
        A: () => h.A,
        Lt: () => sr,
        Y$: () => Vs,
        Ex: () => at,
        xz: () => Bs.A,
        $n: () => es,
        e2: () => Rs,
        IO: () => ns,
        FN: () => Ra,
        yJ: () => c,
        aU: () => mi,
        uo: () => ki,
        HV: () => pi,
        RO: () => Qt,
        g$: () => Fa,
        Wd: () => ja,
        dT: () => Ci,
        ms: () => Ii,
        C9: () => Li,
        Qd: () => Bi,
        fF: () => Ai,
        uR: () => yi,
        n0: () => _i,
        KY: () => Gs,
        JS: () => Gi,
        xA: () => Zt,
        wt: () => We,
        lq: () => Qi,
        X4: () => oi,
        wB: () => ji,
        LQ: () => wi,
        DN: () => wa,
        _q: () => Ji,
        Yf: () => er,
        bQ: () => $e.A,
        c$: () => V,
        z1: () => ur,
        x0: () => cr,
        LY: () => lr,
        cC: () => gr,
        Db: () => rr,
        _J: () => kr,
        lK: () => yr,
        Xp: () => xr,
        Zx: () => wr,
        GL: () => Cr,
        X9: () => Nr,
        AU: () => qs,
        uE: () => zr,
        GW: () => S,
        nR: () => Pr,
        t5: () => Mr,
        Oe: () => Br,
        IP: () => Ar,
        oC: () => Fr,
        wE: () => Gr,
        p3: () => Rr,
        LU: () => n,
        Vu: () => Wr,
        ZL: () => qr,
        eq: () => Ur,
        gp: () => et,
        Gd: () => Yr.A,
        wv: () => Da,
        U1: () => _e,
        Qy: () => Xr,
        r9: () => r,
        mL: () => vs,
        rb: () => Re,
        QQ: () => f,
        S4: () => ls,
        Xy: () => Va,
        mj: () => Kr,
        O1: () => o,
        i3: () => rn,
        _0: () => gn,
        s6: () => fn,
        z4: () => un.A,
        CS: () => i,
        XM: () => Ge,
        oS: () => pn.A,
        Bg: () => _
      });
      var l = {};
      t.r(l), t.d(l, {
        A: () => h.A,
        AlertDialog: () => sr,
        AudioPlayer: () => Vs,
        Badge: () => at,
        Brands: () => Bs.A,
        Button: () => es,
        ButtonGroup: () => Rs,
        CalloutSection: () => ns,
        Carousel: () => Ra,
        CharacterCard: () => c,
        ConditionalBlock: () => mi,
        CookieAB: () => ki,
        CountryInputField: () => pi,
        Cta: () => Qt,
        DescriptionArea: () => Fa,
        DiscountsBadge: () => ja,
        DotLoader: () => Ci,
        Dropdown: () => Ii,
        Embed: () => Li,
        ExpandingPlatformButton: () => Bi,
        FadeInContent: () => Ai,
        FoundryButton: () => yi,
        FoundryIconButton: () => _i,
        Gen9Button: () => Gs,
        Gen9CoreCarousel: () => Gi,
        Grid: () => Zt,
        HTMLElement: () => We,
        Hero: () => Qi,
        HookStore: () => oi,
        ImageTextGroup: () => ji,
        ImageTextGroupGroup: () => wi,
        ImageWithBadge: () => wa,
        LayeredImage: () => Ji,
        Lightbox: () => er,
        LoadingAnimation: () => $e.A,
        MultiSourceImage: () => V,
        NewswireBlocks: () => ur,
        NewswireCard: () => cr,
        NewswireList: () => lr,
        NewswireRelated: () => gr,
        NewswireTag: () => rr,
        OrderedList: () => kr,
        Paging: () => yr,
        ParallaxCacheBuster: () => xr,
        ParallaxInnerLayer: () => wr,
        ParallaxOuterLayer: () => Cr,
        ParallaxWrapper: () => Nr,
        PlatformTag: () => qs,
        PromoModule: () => zr,
        Rating: () => S,
        ResponsiveFlexBox: () => Pr,
        ResponsiveFlexItem: () => Mr,
        ResponsiveGridBox: () => Br,
        ResponsiveGridItem: () => Ar,
        ResponsiveImg: () => Fr,
        ResponsiveSection: () => Gr,
        RockstarLogo: () => Rr,
        RpCategory: () => n,
        SafeHtml: () => Wr,
        ScrollSection: () => qr,
        ScrollToTop: () => Ur,
        ScrollTracker: () => et,
        SearchBox: () => Yr.A,
        Separator: () => Da,
        SrcsetImage: () => _e,
        StorybookWrapper: () => Xr,
        TextFit: () => r,
        ThumbsGallery: () => vs,
        TinaModuleFetchNRender: () => Re,
        TinaWrapper: () => f,
        TrackList: () => ls,
        UnorderedList: () => Va,
        UserVote: () => Kr,
        VideoCard: () => o,
        VideoCarousel: () => rn,
        VideoList: () => gn,
        VisuallyHidden: () => fn,
        Wasted: () => un.A,
        framer: () => i,
        useTinaModuleFetchByIds: () => Ge,
        withSearchbarErrorBoundary: () => pn.A,
        withSimpleErrorBoundary: () => _
      });
      var m = t(39793),
        g = t(93082);
      const f = ({
        children: e,
        style: a,
        theme: t
      }) => {
        const [s, i] = (0, g.useState)(t);
        return (0, g.useEffect)(() => {
          t && i(t)
        }, [t]), (0, m.jsx)("div", {
          className: "rockstargames-sites-legacye5e0faf6ab9871fd60b958c6f7dcf519",
          style: a,
          "data-theme": s,
          children: e
        })
      };
      var u = t(10475),
        p = t(42909),
        b = t(13331),
        k = t(42285),
        v = t(82199),
        h = t(33337);
      class y extends g.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, m.jsxs)("div", {
            className: "rockstargames-sites-legacyd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, m.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, m.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const _ = (e, a = null, t = !1) => {
          const s = s => {
            const i = "function" == typeof a ? a() : a;
            return (0, m.jsx)(y, {
              header: i,
              hidden: t,
              children: (0, m.jsx)(e, {
                ...s
              })
            })
          };
          return s.displayName = `withSimpleErrorBoundary(${e.displayName||e.name||"Component"})`, s
        },
        x = {
          rating: "rockstargames-sites-legacyc3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-sites-legacybabdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-sites-legacyb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-legacyb6339480b5fd086fb0c025930bfb7dcd"
        },
        j = (0, p.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var N = t(88256),
        w = t(69364);
      (0, b.importAll)(t(36672));
      const S = _((0, w.g)(({
        descriptors: e = null,
        footer: a = null,
        href: s,
        img: i = null,
        titleSlug: r = null,
        style: n = {},
        className: c
      }) => {
        const [o, d] = (0, g.useState)(!1), {
          inView: l
        } = (0, k.useInView)({
          threshold: .6
        }), [f, u] = (0, g.useState)({
          ratingDescriptors: e,
          ratingFooter: a,
          ratingImg: i,
          ratingUrl: s
        }), {
          track: y
        } = (0, v.useGtmTrack)(), _ = (0, p.useIntl)(), {
          data: w
        } = (0, b.useQuery)(N.GameData, {
          variables: {
            titleSlug: r
          },
          skip: !r
        });
        if ((0, g.useEffect)(() => {
            w && u(w?.game)
          }, [w]), (0, g.useEffect)(() => {
            l && !o && f.ratingImg && (y({
              event: "page_section_impression",
              element_placement: "rating"
            }), d(!0))
          }, [l]), !f.ratingImg) return null;
        const S = !!f.ratingDescriptors;
        return (0, m.jsxs)("div", {
          className: [x.rating, S ? x.withDescriptors : x.withOutDescriptors, c || ""].join(" "),
          style: (0, b.safeStyles)(n),
          "data-testid": "rating",
          children: [(0, m.jsx)(h.A, {
            to: f.ratingUrl,
            target: "_blank",
            children: (0, m.jsx)("img", {
              alt: _.formatMessage(j.components_ratings_link_alt, {
                rating: (C = f.ratingImg, C.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${f.ratingImg}`)
            })
          }), S && (0, m.jsxs)("div", {
            className: x.text,
            children: [(0, m.jsx)("p", {
              className: x.descriptors,
              dangerouslySetInnerHTML: {
                __html: f?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), f.ratingFooter && (0, m.jsx)("hr", {}), f.ratingFooter && (0, m.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: f.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var C
      }));
      var C = t(97819);
      const T = (0, b.setContextItem)({
          context: (0, g.createContext)(void 0),
          key: "imageGallery"
        }),
        I = ({
          children: e
        }) => {
          const [a, t] = (0, g.useState)([]), s = e => {
            t(e)
          }, i = (0, g.useMemo)(() => ({
            collections: a,
            updateGalleryCollections: s
          }), [a]);
          return (0, m.jsx)(T.Provider, {
            value: i,
            children: e
          })
        };
      var z = t(17301),
        L = t(31879),
        P = t.n(L);
      const E = ({
          alt: e,
          className: a,
          src: s,
          role: i,
          style: r
        }) => {
          const [n, c] = (0, b.usePreloadImg)(s);
          let o = s;
          !1 === n && (o = t(9333));
          const {
            width: d,
            height: l
          } = c, g = {
            "--aspect-ratio": Number.isNaN(d / l) ? "" : d / l,
            ...r
          };
          return (0, m.jsx)("img", {
            src: o,
            className: a ?? "",
            alt: e,
            style: g,
            role: i
          })
        },
        M = "rockstargames-sites-legacyc8dc03880ce2e12f3fdea5b5b587f27f",
        V = ({
          className: e,
          style: a = {},
          image: s = {},
          imageStyle: i = {},
          role: r = "img"
        }) => {
          let {
            alt: n,
            src: c
          } = (0, z.useImageParser)(s);
          const {
            isMobile: o
          } = (0, b.useWindowResize)(), d = o ? c.imageMobileStyle : c.imageDesktopStyle;
          c.desktop || c.mobile || (n = "", c = {
            mobile: t(28839),
            desktop: t(9333)
          });
          let l = s.frame ? `${s.frame} ${M}` : M;
          return (0, m.jsx)("div", {
            className: l,
            style: a,
            children: (0, m.jsx)(E, {
              style: {
                ...i,
                ...s?.style,
                ...d
              },
              src: o ? c.mobile || c.desktop : c?.desktop || c?.mobile,
              alt: n,
              role: r,
              className: e
            })
          })
        };
      var B = t(20155);
      const D = (0, g.forwardRef)((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, i = B.m[s];
        return (0, m.jsx)(B.LazyMotion, {
          features: B.domAnimation,
          children: (0, m.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      });
      D.displayName = "LiteMotion";
      const A = D,
        $ = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        F = {
          ease: "easeIn",
          duration: .4
        },
        O = ({
          children: e
        }) => (0, m.jsx)(B.motion.div, Object.assign({
          className: "rockstargames-sites-legacyf38982805188b64825a72d2c5fac938c",
          variants: $,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: F
        }, {
          children: e
        })),
        G = e => a => (0, m.jsx)(O, {
          children: (0, m.jsx)(e, Object.assign({}, a))
        }),
        R = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        H = {
          ease: "easeIn",
          duration: .75
        },
        W = ({
          children: e
        }) => (0, m.jsx)(B.motion.div, {
          className: "rockstargames-sites-legacyc1ad787ad6429786650325edac0ffe42",
          variants: R,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: H,
          children: e
        }),
        q = e => a => (0, m.jsx)(W, {
          children: (0, m.jsx)(e, {
            ...a
          })
        }),
        U = {
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
        Y = {
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
        X = (e = "imageMask", a = "collapsed") => Y[e][a];
      var Q = t(81270);
      const Z = {
          blurb: "rockstargames-sites-legacyab450ba2efac19aec7dc231239e316b1",
          container: "rockstargames-sites-legacyc2560c6b045ae73dbeeeef12570be8ba",
          content: "rockstargames-sites-legacyd4940f1b1576161b5eb78d28d88a5e1f",
          flipped: "rockstargames-sites-legacyc5be20966c373ac52583632312d5a32e",
          footnote: "rockstargames-sites-legacyc4186c5734b0a77bd017894a762275de",
          headerLogo: "rockstargames-sites-legacycfde78e6f54601e7fbd20572c7dbcfb8",
          imgVideo: "rockstargames-sites-legacycf1510a0614ebf32fdf98ca33ae6214f",
          large: "rockstargames-sites-legacya9e947863ed858f3047127a45c80a8d3",
          pillBtn: "rockstargames-sites-legacyc2b2a000c57ab19cace8cb18ef25ed90",
          rdrUltra: "rockstargames-sites-legacydacbe935b88136482bbc2da111638540",
          selected: "rockstargames-sites-legacya0bae35fdcc72e1af72b07cc494f20bf",
          singleColumn: "rockstargames-sites-legacyc5ba7a9fc78332b803f78e404685dea8",
          text: "rockstargames-sites-legacyefc80457bc220013f1f5e28c4d68271c",
          title: "rockstargames-sites-legacycf71441c9c65230a6a161085b73b97cb",
          universalCyrillic: "rockstargames-sites-legacye7fcab0d0e3c2654185559b59883e8e8"
        },
        K = G(({
          title: e = "",
          headerLogo: a,
          body: t,
          footnote: s,
          image: i,
          videoId: r,
          customHeaderFont: n,
          setVideoAsDefault: c,
          large: o = !1,
          image_on_right: d = !1,
          style: l = {},
          className: f = "",
          ...u
        }) => {
          const {
            track: p
          } = (0, v.useGtmTrack)(), {
            ref: b,
            inView: h
          } = (0, k.useInView)({
            threshold: .6
          }), [y, _] = (0, g.useState)(!1), [x, j] = (0, g.useState)(!1), N = n ? Z[n] : "", w = a?._memoq?.maxHeight || "auto", S = a?._memoq?.maxWidth || "auto";
          return (0, g.useEffect)(() => {
            j(a?.setLogoAsDefault || !1)
          }, []), (0, g.useEffect)(() => {
            h && !y && (p({
              event: "page_section_impression",
              element_placement: u?._memoq?.title?.toLowerCase()
            }), _(!0))
          }, [h]), (0, m.jsxs)("div", {
            className: (0, Q.default)(Z.container, o ? Z.large : "", d ? Z.flipped : "", i ? "" : Z.singleColumn, f),
            style: l,
            ref: b,
            "data-testid": "imageVideoGroupContainer",
            children: [c && r ? (0, m.jsx)(P(), {
              className: Z.imgVideo,
              autoplay: !1,
              id: r
            }) : i ? (i.alt = i?.alt ?? i?._memoq?.alt ?? "", (0, m.jsx)(V, {
              className: Z.imgVideo,
              image: i
            })) : null, (0, m.jsx)("div", {
              className: Z.content,
              children: (0, m.jsxs)("div", {
                className: Z.text,
                children: [(() => {
                  const t = a?.image,
                    s = a?.image?.alt ?? a?.image?._memoq?.alt,
                    i = e.replace(/\s+/g, "-").toLowerCase();
                  return a && (a.image.alt = s), x && t ? (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsx)(V, {
                      className: Z.headerLogo,
                      image: t,
                      imageStyle: {
                        maxHeight: w,
                        maxWidth: S,
                        margin: 0
                      }
                    }), (0, m.jsx)("h2", {
                      id: `${i}-section`,
                      style: {
                        display: "none"
                      },
                      children: e
                    })]
                  }) : e && (0, m.jsx)("h2", {
                    className: [Z.title, N].join(" "),
                    children: e
                  })
                })(), t ? (0, m.jsxs)(m.Fragment, {
                  children: [(0, m.jsx)("div", {
                    className: Z.blurb,
                    dangerouslySetInnerHTML: {
                      __html: (C = t, C ? C.split(/\r?\n/).filter(e => e.trim()).map(e => `<p>${e}</p>`).join("") : "")
                    }
                  }), s && (0, m.jsx)("small", {
                    className: Z.footnote,
                    dangerouslySetInnerHTML: {
                      __html: s
                    }
                  })]
                }) : ""]
              })
            })]
          });
          var C
        }),
        J = {
          featureBlock: "rockstargames-sites-legacyf89ddcf04ab19186bc3f7f66bf91fda5",
          featuresContainer: "rockstargames-sites-legacyf7529c017b3481439bcc4b72b758d930",
          pillBtn: "rockstargames-sites-legacya81e3ad6cfbe33efbd18b786a09e71fd",
          selected: "rockstargames-sites-legacya3aefd91e661c1e6dc8bbff4fd17248f"
        },
        ee = ({
          className: e,
          id: a,
          features: t,
          backgroundImageGroup: s
        }) => {
          const i = (0, z.useGetCdnSource)(s?.desktop?.image),
            r = (0, z.useGetCdnSource)(s?.topMask?.mask),
            n = (0, z.useGetCdnSource)(s?.bottomMask?.mask),
            c = !!n,
            o = {
              ...i && {
                "--fb-bg-image": `url(${i})`
              },
              ...r && {
                "--fb-top-mask": `url(${r})`
              },
              ...n && {
                "--fb-bottom-mask": `url(${n})`
              }
            };
          return t.length ? (0, m.jsx)("section", {
            style: o,
            className: [J.featureBlock, e ?? ""].filter(e => e).join(" "),
            id: a ?? "",
            "data-has-mask": c,
            children: (0, m.jsx)("div", {
              className: J.featuresContainer,
              children: t.map(({
                key: e,
                ...a
              }) => (0, m.jsx)(K, {
                ...a
              }, e))
            })
          }) : null
        };
      var ae = t(99225);

      function te(e) {
        return e ? {
          "--gradient-start-color": ie(se(e?.startColor), e?.startOpacity),
          "--gradient-end-color": ie(se(e?.endColor), e?.endOpacity)
        } : {}
      }

      function se(e) {
        return e && /rgb\(\d\d?\d?,\s?\d\d?\d?,\s?\d\d?\d?\)/.test(e) ? e.replace(/r|g|b|a|\(|\)|/g, "").split(/,\s?/) : []
      }

      function ie(e, a) {
        return e?.length ? `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a?.length?a:1})` : ""
      }

      function re(e) {
        return e && e.replace(/\D/g, "") || "0"
      }
      const ne = {
          button: "rockstargames-sites-legacyf39fa3b1b065c2d54b2567b48a1bd6e2",
          cardArtworkIcon: "rockstargames-sites-legacyd6a600e1e3076a3eb04defd26746e0de",
          cardDownloadIcon: "rockstargames-sites-legacyd684744e5cd28e0fec26d728ba122ca8",
          cardIcon: "rockstargames-sites-legacya4df7cd077698e962c24736e36a45ddf",
          cardPlayIcon: "rockstargames-sites-legacyfd96249683f88970f0ca7231a1174193",
          cardShopIcon: "rockstargames-sites-legacyfcc1990039d0a53b7820dca2077a5d3e",
          heading: "rockstargames-sites-legacyfa2e0d743022e096961c5300754105b1",
          imageBackground: "rockstargames-sites-legacyc148e1365d5c651547931ef13f8628df",
          pillBtn: "rockstargames-sites-legacyddc407185e425f0139d10689a4a7f2a4",
          selected: "rockstargames-sites-legacybd967bb2d2679a7fb51e1044fba5bb4e",
          textContainer: "rockstargames-sites-legacyb4c8ad1b23c07afac25f31d46e2b3d24"
        },
        ce = ({
          title: e,
          subtitle: a,
          cardType: t,
          textColor: s,
          link: i,
          images: r,
          justifyContentHorizontally: n,
          justifyContentVertically: c,
          gradient: o
        }) => {
          const {
            track: d
          } = (0, v.useGtmTrack)(), l = (0, z.useGetCdnSource)(r?.mobile?.image?.full_src ?? r?.mobile?.image), g = (0, z.useGetCdnSource)(r?.desktop?.image?.full_src ?? l), f = {
            "--aspect-ratio-mobile": r?.mobile?.aspectRatio ?? "",
            "--aspect-ratio-desktop": r?.desktop?.aspectRatio ?? "",
            justifyContent: n ?? ""
          }, u = {
            justifyContent: c ?? ""
          }, p = {
            color: s ?? "",
            fontWeight: 700
          }, b = {
            ...te(o),
            "--gradient-end-percentage": `${re(o?.endPercentage)}%`,
            "--gradient-angle": `${re(o?.angle)}deg`
          }, k = {
            mobile: l,
            desktop: g,
            alt: e
          };
          return (0, m.jsxs)(ae.NavLink, {
            to: i ?? "",
            className: ne.button,
            style: {
              ...f,
              ...b
            },
            onClick: () => {
              d({
                event: "card_click",
                element_placement: e?.toLowerCase()
              })
            },
            children: [("audio" === t || "video" === t) && (0, m.jsx)("div", {
              className: ne.cardIcon
            }), (e => {
              switch (e) {
                case "audio":
                  return (0, m.jsx)("div", {
                    role: "button",
                    className: ne.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Audio"
                  });
                case "video":
                  return (0, m.jsx)("div", {
                    role: "button",
                    className: ne.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Video"
                  });
                case "artwork":
                  return (0, m.jsx)("div", {
                    role: "button",
                    className: ne.cardArtworkIcon,
                    tabIndex: 0,
                    "aria-label": "View Artwork"
                  });
                case "download":
                  return (0, m.jsx)("div", {
                    role: "button",
                    className: ne.cardDownloadIcon,
                    tabIndex: 0,
                    "aria-label": "Download Content"
                  });
                case "shopping-cart":
                  return (0, m.jsx)("div", {
                    role: "button",
                    className: ne.cardShopIcon,
                    tabIndex: 0,
                    "aria-label": "Shop"
                  });
                default:
                  return null
              }
            })(t), (0, m.jsx)(V, {
              className: ne.imageBackground,
              image: k
            }), (0, m.jsxs)("div", {
              className: ne.textContainer,
              style: u,
              children: [(0, m.jsx)("p", {
                className: ne.text,
                style: p,
                children: (0, m.jsx)("span", {
                  children: a
                })
              }), (0, m.jsx)("h3", {
                className: ne.heading,
                style: p,
                children: (0, m.jsx)("span", {
                  children: e
                })
              })]
            })]
          })
        },
        oe = {
          buttonContainer: "rockstargames-sites-legacyed6e24a327462775002b2ef7f4bd4118",
          pillBtn: "rockstargames-sites-legacycda40abc6388540c6d56ec9033e94b61",
          relatedLinksContainer: "rockstargames-sites-legacyaea1edd882fdb86e7e58bb7cb1fee3b9",
          selected: "rockstargames-sites-legacycded5ac956b3489cbb0ad417df09e1e0"
        },
        de = ({
          title: e,
          id: a,
          buttons: t = [],
          className: s,
          ...i
        }) => {
          const {
            track: r
          } = (0, v.useGtmTrack)(), {
            ref: n,
            inView: c
          } = (0, k.useInView)({
            threshold: .6
          }), [o, d] = (0, g.useState)(!1);
          return (0, g.useEffect)(() => {
            c && !o && (r({
              event: "page_section_impression",
              element_placement: `related links group - ${i?._memoq?.title}`.toLowerCase()
            }), d(!0))
          }, [c]), t?.length ? (0, m.jsxs)("section", {
            className: [oe.relatedLinksContainer, s ?? ""].filter(e => e).join(" "),
            id: a ?? "",
            ref: n,
            children: [(0, m.jsx)("h2", {
              children: e
            }), (0, m.jsx)("div", {
              className: oe.buttonContainer,
              children: t.map(e => (0, m.jsx)(ce, {
                title: e?.title,
                subtitle: e?.subtitle,
                cardType: e?.cardType,
                textColor: e?.textColor,
                link: e?.link,
                images: e?.images,
                justifyContentHorizontally: e?.justifyContentHorizontally,
                justifyContentVertically: e?.justifyContentVertically,
                gradient: e?.gradient
              }, e.key))
            })]
          }) : null
        };
      var le, me = t(14653);

      function ge() {
        return ge = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t)({}).hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, ge.apply(null, arguments)
      }
      const fe = function(e) {
        return g.createElement("svg", ge({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), le || (le = g.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m15 18-6-6 6-6"
        })))
      };
      var ue;

      function pe() {
        return pe = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t)({}).hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, pe.apply(null, arguments)
      }
      const be = function(e) {
          return g.createElement("svg", pe({
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none"
          }, e), ue || (ue = g.createElement("path", {
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "m9 18 6-6-6-6"
          })))
        },
        ke = {
          nextPillButton: "rockstargames-sites-legacyfecde23bcee84bcc1471dd17cb489f26",
          nextPillIcon: "rockstargames-sites-legacyc17181cca295443a8eb5c7a6a779138d",
          pillBtn: "rockstargames-sites-legacye3cda31f111d353a778c88ed66f1c544",
          pillButton: "rockstargames-sites-legacycf1b66cb6098d0c193d07128ad96918d",
          pills: "rockstargames-sites-legacya2f784e987ffe758b0f578d5ec371a36",
          previousPillButton: "rockstargames-sites-legacya0f3ef7b5df6c3bec46feadcb1222379",
          previousPillIcon: "rockstargames-sites-legacye44f1ced35c7806fa8592b93edf3cd14",
          selected: "rockstargames-sites-legacyc4f1c72a3d7b674638e6de1586cbb3d0",
          tabBackground: "rockstargames-sites-legacya090bf0d15f90245f6718deb2aa6dd16",
          tabButton: "rockstargames-sites-legacyf94782e892ce25e196e32e7b99a9266d",
          tabControl: "rockstargames-sites-legacyee2f948c8cdbaa179e237743a7fed85b",
          tabControlContainer: "rockstargames-sites-legacyd29afdb37670407698a75f676bd09ac8",
          tabIcon: "rockstargames-sites-legacyc7a9346aef47e925c8207d4c29dd62cf",
          tabIconActive: "rockstargames-sites-legacyc1e80852d004d7874de4d4d292a8ac35",
          tabIconWrapper: "rockstargames-sites-legacyc6b99457503c7d9222883634bcebc6b8",
          tabLabel: "rockstargames-sites-legacycb2ce3c45e864cc9dd006ade09d1c177",
          tabLabelActive: "rockstargames-sites-legacya0585b1b5b2432645dbe7206096ea963",
          withScroll: "rockstargames-sites-legacye1e4eea5783d71759acd15ccabe9f479"
        },
        ve = ({
          data: e,
          onClick: a,
          activeTab: t
        }) => {
          const {
            track: s
          } = (0, v.useGtmTrack)(), i = (0, g.useRef)(null), [r, n] = (0, g.useState)(!1), [c, o] = (0, g.useState)(!1), [d, l] = (0, g.useState)(!1), f = t => () => {
            s({
              event: "component_tab_click",
              text: e[t]?._memoq?.name?.toLowerCase() ?? void 0,
              element_placement: "image gallery"
            }), i.current && i.current.slideTo(t), a && a(t)
          }, u = e => {
            n(e.isEnd), o(e.isBeginning)
          };
          return (0, g.useEffect)(() => {
            const e = () => {
              i.current && ((i.current.wrapperEl.clientWidth || 0) > (i.current.el.clientWidth || 0) ? (l(!0), i.current.params.centeredSlides = !0, i.current.params.centeredSlidesBounds = !0) : (l(!1), i.current.params.centeredSlides = !1, i.current.params.centeredSlidesBounds = !1), u(i.current))
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }, []), (0, m.jsxs)("div", {
            className: ke.tabControlContainer,
            children: [!c && d && (0, m.jsx)("div", {
              className: ke.previousPillButton,
              children: (0, m.jsx)("button", {
                type: "button",
                className: [ke.previousPillIcon, ke.pillButton].join(" "),
                onClick: () => {
                  i.current && (i.current?.slidePrev(), o(i.current.isBeginning), s({
                    event: "carousel_previous",
                    element_placement: "image gallery"
                  }))
                },
                children: (0, m.jsx)(fe, {})
              })
            }), (0, m.jsx)("div", {
              className: [ke.tabControl, d ? ke.withScroll : ""].join(" "),
              children: (0, m.jsx)(me.RC, {
                onBeforeInit: e => i.current = e,
                onInit: u,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                onSlideChange: u,
                onResize: u,
                className: ke.pills,
                children: e?.filter(({
                  isHidden: e
                }) => 1 !== e)?.map((e, a) => (0, m.jsx)(me.qr, {
                  children: (0, m.jsxs)(B.motion.button, {
                    type: "button",
                    className: [ke.tabButton, d ? ke.withScroll : ""].join(" "),
                    onClick: f(a),
                    "aria-label": e?.name,
                    "data-testid": "pill-button",
                    children: [(0, m.jsx)("span", {
                      className: [ke.tabLabel, a === t ? ke.tabLabelActive : ""].join(" "),
                      children: e?.name?.toUpperCase()
                    }), a === t ? (0, m.jsx)(B.motion.div, {
                      className: ke.tabBackground,
                      layoutId: "tabBackground"
                    }) : null]
                  }, `pill-tab-${e?.name}-${e?.key}`)
                }, `pill-tab-${e?.name}-${e?.key}`))
              })
            }), !r && d && (0, m.jsx)("div", {
              className: ke.nextPillButton,
              children: (0, m.jsx)("button", {
                type: "button",
                className: [ke.nextPillIcon, ke.pillButton].join(" "),
                onClick: () => {
                  i.current && (i.current?.slideNext(), n(i.current.isEnd), s({
                    event: "carousel_next",
                    element_placement: "image gallery"
                  }))
                },
                children: (0, m.jsx)(be, {})
              })
            })]
          })
        };
      var he = t(84017);
      const ye = {
          animatePlaceholder: "rockstargames-sites-legacyf6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-sites-legacyc3684b80c99c860036d9337843a7be58",
          multiSourceContainer: "rockstargames-sites-legacya99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-sites-legacybc42c525ec0bd93df46e1999e278e9fb",
          pillBtn: "rockstargames-sites-legacyc79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-sites-legacyc53675ad15e2ef662362850daab33791"
        },
        _e = ({
          imageUrl: e,
          className: a,
          alt: t,
          style: s,
          lazy: i = !1,
          decoding: r = "auto",
          sizes: n = [320, 480, 768, 1024, 1440, 1920, 2560]
        }) => {
          const [c, o] = (0, g.useState)(!1);
          return (0, m.jsxs)("div", {
            className: ye.multiSourceContainer,
            children: [!c && (0, m.jsx)("img", {
              className: [a, ye.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: s
            }), (0, m.jsx)("img", {
              className: [ye.multiSourceImage, a].join(" "),
              src: `${e}?im=Resize=1920`,
              srcSet: (d = e, n.map(e => `${d}?im=Resize=${e} ${e}w`).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: s,
              onLoad: () => {
                o(!0)
              },
              loading: i ? "lazy" : "eager",
              decoding: r
            })]
          });
          var d
        };
      var xe = t(79955),
        je = t.n(xe);
      const Ne = {
          closeBtn: "rockstargames-sites-legacyafe327a6bfea9e55c59f7f40787276bb",
          controlsWrapper: "rockstargames-sites-legacyee763bff685c3b26102c7657cfd1bfaf",
          galleryImage: "rockstargames-sites-legacye60d2674013c95e6bc812e00e7258e24",
          masonryDialog: "rockstargames-sites-legacya1ae3e7de41be7198c2ad68c8d4222f0",
          masonryDialogWrapper: "rockstargames-sites-legacya3094271b8486273139e380499406927",
          modal: "rockstargames-sites-legacya8fbf62ce23c1a65032bce5184d63baf",
          modalContainer: "rockstargames-sites-legacyc41f4294c7fde242d7cf078564d2e69a",
          modalControls: "rockstargames-sites-legacydd94cbb5e29c5998406db96640b0ab76",
          modalItem: "rockstargames-sites-legacya240109bff7b1baa2d388d154ed1934c",
          modalMultisourceImage: "rockstargames-sites-legacyf3e623b328218262f00707bcf285804a",
          modalNext: "rockstargames-sites-legacye3a70831b760b5fcb0b9343c62f210d3",
          modalPrevious: "rockstargames-sites-legacyf52bccecbb1a53b1c956a6e8f254dee0",
          modalSection: "rockstargames-sites-legacyf478d357c8b6b75ca8b5b48286d1e12a",
          overlay: "rockstargames-sites-legacyfd8515db7e49499bd602844e7b726ccf",
          pillBtn: "rockstargames-sites-legacye25ca7cdd8392458e825f214ab689988",
          selected: "rockstargames-sites-legacyf18da5c3982ac6dd52f034c76b4c18fc"
        },
        we = ({
          navigatePrevious: e,
          navigateNext: a,
          prevDisabled: t,
          nextDisabled: s
        }) => (0, m.jsxs)("div", {
          className: Ne.modalControls,
          children: [(0, m.jsx)("button", {
            type: "button",
            "aria-label": "Previous",
            className: Ne.modalPrevious,
            onClick: e,
            disabled: t
          }), (0, m.jsx)("button", {
            type: "button",
            "aria-label": "Next",
            className: Ne.modalNext,
            onClick: a,
            disabled: s
          })]
        }),
        Se = ({
          images: e,
          selectedImage: a,
          onClose: t
        }) => {
          const [s, i] = (0, g.useState)(e.findIndex(e => e?.image?.sources === a?.image?.sources)), [r, n] = (0, g.useState)(0 === s), [c, o] = (0, g.useState)(s + 1 >= e?.length), {
            track: d
          } = (0, v.useGtmTrack)(), l = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, f = (0, g.useCallback)(() => {
            const a = (s + 1) % e.length;
            a !== s && s !== e.length - 1 && (i(a), n(!1)), o(a === e.length - 1), d({
              event: "modal_next",
              element_placement: "image gallery modal",
              card_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: e[s]?.key,
              position: s,
              view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }, [d, s, e]), u = (0, g.useCallback)(() => {
            const a = (s - 1 + e.length) % e.length;
            a !== s && 0 !== s && (i(a), o(!1)), n(0 === a), d({
              event: "modal_previous",
              element_placement: "image gallery modal",
              card_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: e[s]?.key,
              position: s,
              view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }, [d, s, e]), p = e[s];
          return (0, g.useEffect)(() => {
            d({
              event: "trackPageview",
              view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }, [s]), (0, g.useEffect)(() => {
            const a = a => {
              "ArrowLeft" === a.key ? u() : "ArrowRight" === a.key ? f() : "Escape" === a.key && (d({
                event: "modal_close",
                element_placement: "image gallery modal",
                card_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase(),
                card_id: e[s]?.key,
                position: s,
                view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
              }), t())
            };
            return window.addEventListener("keydown", a), () => {
              window.removeEventListener("keydown", a)
            }
          }, [s, u, f, t]), (0, m.jsx)(B.AnimatePresence, {
            children: (0, m.jsx)(B.motion.div, {
              role: "presentation",
              className: Ne.overlay,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: l,
              children: (0, m.jsx)("dialog", {
                role: "presentation",
                id: "masonryDialog",
                className: Ne.masonryDialog,
                onClick: a => (a => {
                  if (!a.currentTarget) return;
                  const i = a.currentTarget.getBoundingClientRect();
                  (i.left > a.clientX || i.right < a.clientX || i.top > a.clientY || i.bottom < a.clientY) && (d({
                    event: "modal_close",
                    element_placement: "image gallery modal",
                    card_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase(),
                    card_id: e[s]?.key,
                    position: s,
                    view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
                  }), t()), a.preventDefault(), a.stopPropagation(), a.nativeEvent.stopImmediatePropagation()
                })(a),
                children: (0, m.jsx)(je(), {
                  active: !0,
                  focusTrapOptions: {
                    allowOutsideClick: !0,
                    clickOutsideDeactivates: !0,
                    onDeactivate: t
                  },
                  children: (0, m.jsxs)("div", {
                    className: Ne.masonryDialogWrapper,
                    children: [(0, m.jsxs)(B.motion.div, {
                      className: Ne.controlsWrapper,
                      initial: {
                        opacity: 0
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: {
                        ease: "easeIn",
                        duration: .3,
                        delay: .5
                      },
                      "aria-controls": "legacyImageGallery-liveRegion",
                      children: [(0, m.jsx)(we, {
                        navigatePrevious: u,
                        navigateNext: f,
                        prevDisabled: r,
                        nextDisabled: c
                      }), (0, m.jsx)("button", {
                        type: "button",
                        id: "close",
                        "aria-label": "close",
                        className: Ne.closeBtn,
                        onClick: () => {
                          d({
                            event: "modal_close",
                            element_placement: "image gallery modal",
                            card_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase(),
                            card_id: e[s]?.key,
                            position: s,
                            view_name: `${e[s]?.image?.name??"unnamed image"}`.toLowerCase()
                          }), t()
                        }
                      })]
                    }), (0, m.jsx)(B.motion.div, {
                      className: Ne.modal,
                      initial: {
                        opacity: 0,
                        scale: .5
                      },
                      animate: {
                        opacity: 1,
                        scale: 1
                      },
                      transition: l,
                      id: "legacyImageGallery-liveRegion",
                      "aria-live": "polite",
                      role: "region",
                      children: (0, m.jsx)(V, {
                        className: [Ne.modalMultisourceImage, Ne.galleryImage].join(" "),
                        style: {
                          width: "100%",
                          height: "100%",
                          margin: 0
                        },
                        image: {
                          alt: p?.image?._memoq?.alt || "",
                          ...p?.image
                        }
                      })
                    })]
                  })
                })
              })
            })
          })
        },
        Ce = ({
          image: e,
          item: a,
          handleImageClick: t
        }) => {
          const s = (0, z.useImageParser)(e?.image),
            i = e?.image.alt ?? e?.image._memoq?.alt;
          return (0, m.jsx)(B.motion.button, {
            className: "rockstargames-sites-legacyb7d22978314d8fd37226d991a0323771",
            onClick: () => t(e),
            variants: a,
            children: (0, m.jsx)(_e, {
              imageUrl: s?.src?.desktop,
              className: "rockstargames-sites-legacyee0f0e1390a1b77a0f1b3629dc9d700a",
              alt: i,
              sizes: [320, 480, 768, 1024, 1440],
              style: {
                width: "100%",
                height: "auto"
              }
            })
          }, `grid-item-${e?.key}`)
        },
        Te = ({
          images: e = [],
          gallery: a = []
        }) => {
          const [t, s] = (0, g.useState)(null), {
            track: i
          } = (0, v.useGtmTrack)(), r = a.flat(2), {
            setBodyIsLocked: n
          } = (0, b.useBodyScrollable)("LegacyScreensModule"), c = e => {
            i({
              event: "card_click",
              element_placement: e?.image?.name ? e?.image?.name.toLowerCase() : void 0
            }), s(e), n(!0)
          }, o = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1
            }
          };
          return (0, m.jsx)("div", {
            className: "rockstargames-sites-legacye44f82d5b88e4f740c7ce9abff68ce32",
            children: (0, m.jsxs)(B.motion.div, {
              id: "rockstargames-sites-legacya0e51de80aa05abedb46d92d84d5aee3",
              className: "rockstargames-sites-legacye33a756146e1a476184e83e6cd65d218",
              variants: {
                hidden: {
                  opacity: 0
                },
                show: {
                  opacity: 1,
                  transition: {
                    duration: .75
                  }
                }
              },
              initial: "hidden",
              animate: "show",
              children: [e?.map(e => (0, m.jsx)(Ce, {
                image: e,
                item: o,
                handleImageClick: c
              }, e?.key)), t && (0, he.createPortal)((0, m.jsx)(Se, {
                images: r,
                selectedImage: t,
                onClose: () => {
                  s(null), n(!1)
                }
              }), document.body)]
            }, `gridItemContainer_${e?.key}`)
          })
        },
        Ie = ({
          image: e,
          item: a,
          handleImageClick: t
        }) => {
          const s = (0, z.useImageParser)(e?.image),
            i = e?.image.alt ?? e?.image._memoq?.alt;
          return (0, m.jsx)(B.motion.button, {
            className: "rockstargames-sites-legacye3831406d3ed43e91ffdc761abd48baf",
            onClick: () => t(e),
            variants: a,
            initial: "hidden",
            animate: "show",
            children: (0, m.jsx)(_e, {
              imageUrl: s?.src?.desktop,
              className: "rockstargames-sites-legacyb63c76769804a6445d5c61da08906d1d",
              alt: i,
              sizes: [320, 480, 768, 1024, 1440]
            })
          }, `single-item-${e.key}`)
        },
        ze = ({
          images: e = [],
          gallery: a = []
        }) => {
          const [t, s] = (0, g.useState)(null), {
            track: i
          } = (0, v.useGtmTrack)(), r = a.flat(2), {
            setBodyIsLocked: n
          } = (0, b.useBodyScrollable)("LegacyScreensModule"), c = e => {
            i({
              event: "card_click",
              card_name: t?.image?.name.toLowerCase() ? t?.image?.name.toLowerCase() : void 0,
              card_id: e.key,
              link_url: void 0,
              element_placement: "image gallery"
            }), s(e), n(!0)
          }, o = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1,
              transition: {
                duration: .75
              }
            }
          };
          return (0, m.jsxs)("div", {
            className: "rockstargames-sites-legacyfd374db27ae0eab70581821b83cbfaee",
            children: [e?.map(e => (0, m.jsx)(Ie, {
              image: e,
              item: o,
              handleImageClick: c
            }, e?.key)), t && (0, he.createPortal)((0, m.jsx)(Se, {
              images: r,
              selectedImage: t,
              onClose: () => {
                s(null), n(!1)
              }
            }), document.body)]
          })
        },
        Le = "rockstargames-sites-legacyd0b8474d6f8f230f681db9fd3b2c723e",
        Pe = ({
          sectionsPerPage: e,
          totalSections: a,
          currentPage: t,
          previousPage: s,
          nextPage: i,
          paginationPosition: r
        }) => {
          const n = [],
            c = Math.ceil(a / e),
            o = {
              "--pagination-position": `${r}`
            };
          for (let t = 1; t <= Math.ceil(a / e); t++) n.push(t);
          const d = (e, a) => {
              "Enter" !== e.key && " " !== e.key || (e.preventDefault(), a())
            },
            l = Math.ceil(a / e);
          return c > 1 && (0, m.jsx)("div", {
            className: "rockstargames-sites-legacyc82112cdf0749d6ddbca1e8af8933ba5",
            style: o,
            children: (0, m.jsxs)("div", {
              className: "rockstargames-sites-legacycc27e700cde982e01f186d64a5b69ce0",
              style: {
                padding: 0
              },
              children: [(0, m.jsx)("div", {
                className: Le,
                children: (0, m.jsx)("button", {
                  role: "button",
                  onKeyDown: e => d(e, s),
                  onClick: s,
                  className: "rockstargames-sites-legacyfe520f32a0a3fb0a4a7199f7353a3dc7",
                  "aria-label": "Previous Page",
                  disabled: 1 === t
                })
              }), (0, m.jsxs)("div", {
                className: "rockstargames-sites-legacydac90e667536b6e75d83f19985d38c02",
                children: [(0, m.jsx)("span", {
                  children: t
                }), (0, m.jsx)("span", {
                  className: "rockstargames-sites-legacyeedf8db50f0cec80ea4adc7215579bbc"
                }), (0, m.jsx)("span", {
                  children: c
                })]
              }), (0, m.jsx)("div", {
                className: Le,
                children: (0, m.jsx)("button", {
                  role: "button",
                  onKeyDown: e => d(e, i),
                  onClick: i,
                  className: "rockstargames-sites-legacyf855de663e5b3990846c34b41b6314b5",
                  "aria-label": "Next Page",
                  disabled: t >= l
                })
              })]
            })
          })
        },
        Ee = {
          galleryWrapper: "rockstargames-sites-legacyb3a45082739d104c5a97b65997334b5d",
          gridItemWrapper: "rockstargames-sites-legacyd5d1166080466c13c398548f61a1dfac",
          heading: "rockstargames-sites-legacyb5491476c815e5726e194b60dc8c95eb",
          noImages: "rockstargames-sites-legacyc770869dc00e35d56a8e50efe3abd4aa",
          noImagesContainer: "rockstargames-sites-legacyc8f32e7cc9d0f30be6ecff9b076cca9a",
          pillBtn: "rockstargames-sites-legacye2bf9ba86281f6148e2f9af8ea2b88a5",
          selected: "rockstargames-sites-legacybccc0cb9fc037e7151fd6ebd3f490f4e",
          tabControl: "rockstargames-sites-legacyc8b979b8dc1ff190926fc1450d4f7812",
          unsupportedSection: "rockstargames-sites-legacyf425b5f74300c8aa17539840bfe17b0f"
        },
        Me = () => (0, m.jsx)("div", {
          className: Ee.noImagesContainer,
          children: (0, m.jsx)("div", {
            className: Ee.noImages,
            children: (0, m.jsx)("div", {
              className: Ee.heading,
              children: (0, m.jsxs)("span", {
                className: Ee.text,
                children: [(0, m.jsx)("h3", {
                  children: "Unsupported Section Type"
                }), (0, m.jsx)("p", {
                  children: "This section type is not supported."
                })]
              })
            })
          })
        }),
        Ve = ({
          sections: e = [],
          paginationSettings: a
        }) => {
          const t = [],
            [s] = (0, g.useState)(a?.sectionsPerPage || 4),
            [i, r] = (0, g.useState)(1),
            n = i * s,
            c = n - s,
            o = e.slice(c, n);
          return 0 === e?.length ? (0, m.jsx)("div", {
            className: Ee.gallerWrapper,
            children: (0, m.jsx)("div", {
              className: Ee.noImages,
              children: (0, m.jsx)("div", {
                className: Ee.heading,
                children: (0, m.jsx)("span", {
                  className: Ee.text,
                  children: "No images available"
                })
              })
            })
          }) : (e?.map(e => t.push(e?.images)), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)(B.motion.div, {
              className: Ee.galleryWrapper,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                ease: "easeIn",
                duration: .5
              },
              style: {
                "--sections-per-page": s
              },
              children: o?.map((e, a) => {
                let s;
                if ("1x1" === e?.type) s = Te;
                else {
                  if ("2x2" !== e?.type) return (0, m.jsx)(Me, {}, `unsupported-section-${a}`);
                  s = ze
                }
                return (0, m.jsx)(s, {
                  images: e?.images,
                  gallery: t
                }, `grid-section-${e?.type}-${a})}`)
              })
            }), a?.paginationEnabled && (0, m.jsx)(Pe, {
              sectionsPerPage: s,
              totalSections: e.length,
              currentPage: i,
              previousPage: () => {
                r(1 !== i ? i - 1 : Math.ceil(e.length / s))
              },
              nextPage: () => {
                i !== Math.ceil(e.length / s) ? r(i + 1) : r(1)
              },
              paginationPosition: a?.paginationPosition || "center"
            })]
          }))
        },
        Be = {
          actionBar: "rockstargames-sites-legacyc683d51d8e7b2e1fea91f6ac62e44f18",
          activeTabButton: "rockstargames-sites-legacydef94dba3dac9a256bbbff14fc6dcaba",
          heading: "rockstargames-sites-legacyc66aef69aceb354b7b240000f5791d16",
          helveticaNow: "rockstargames-sites-legacyeeac47e8240894c3a79ec83059a78d75",
          pillBtn: "rockstargames-sites-legacyfa4067f7c212b9182e66f2bc93c65cfd",
          rdrUltra: "rockstargames-sites-legacydc3d525a4168030c7699333ec998ac0b",
          sectionContent: "rockstargames-sites-legacyf4bfa37ad49decc3c7198d5a7e2572e9",
          sectionWrapper: "rockstargames-sites-legacyd12e654d94bea17fc29f0b0bd5c8fe71",
          selected: "rockstargames-sites-legacycba40dadb6c47b405d64798809682d81",
          tabBackground: "rockstargames-sites-legacydca40305530289c575e9c4749fde11e0",
          tabButton: "rockstargames-sites-legacye4eeeda9b426784c1091e4caa7a5f3e2",
          tabControl: "rockstargames-sites-legacyab100837ebbe0709a8d81fc9b0d61ff9",
          tabLabel: "rockstargames-sites-legacya5ba429588b87c0b99c160c6c7fcc3a0",
          universalCyrillic: "rockstargames-sites-legacyfedf88ffb43e3f74d211214ca8fa4f80"
        },
        De = G(({
          imageGallery: e
        }) => {
          const {
            track: a
          } = (0, v.useGtmTrack)(), {
            ref: t,
            inView: s
          } = (0, k.useInView)({
            threshold: .6
          }), [i, r] = (0, g.useState)(!1), [n, c] = (0, g.useState)(0), o = e?.customHeaderFont ? Be[e?.customHeaderFont] : "", {
            collections: d,
            updateGalleryCollections: l
          } = (() => {
            const e = (0, g.useContext)(T);
            if (!e) throw new Error("useImageGalleryContext must be used within an ImageGalleryProvider");
            return e
          })();
          (0, g.useEffect)(() => {
            l(e?.collections)
          }, [e]), (0, g.useEffect)(() => {
            s && !i && (a({
              event: "page_section_impression",
              element_placement: `image gallery - ${d[n]?._memoq?.name}`.toLowerCase()
            }), r(!0))
          }, [s]);
          const f = d?.length > 0 && d.some(e => e?.name || e?.platform);
          return (0, m.jsx)("section", {
            className: Be.sectionWrapper,
            ref: t,
            children: (0, m.jsxs)("div", {
              className: Be.sectionContent,
              children: [(0, m.jsxs)("div", {
                className: Be.actionBar,
                children: [(0, m.jsx)("h2", {
                  className: [Be.heading, o].join(" "),
                  children: e?.title
                }), f && (0, m.jsx)(ve, {
                  data: d,
                  onClick: e => {
                    c(e)
                  },
                  activeTab: n
                })]
              }), d[n]?.sections && (0, m.jsx)(Ve, {
                sections: d[n]?.sections,
                paginationSettings: e?.paginationSettings
              }, d[n]?.name)]
            })
          })
        });
      var Ae = t(64727),
        $e = t(26161);
      const Fe = {
          gen9Hero: () => (0, m.jsx)("div", {
            className: "rockstargames-sites-legacyee796fcf55787f1dd1af025b1ec9d6b8",
            children: (0, m.jsx)("div", {
              className: "rockstargames-sites-legacyd2e785bbf2071e806cee23e58d1a3b53",
              children: (0, m.jsx)($e.A, {
                type: "SPINNING"
              })
            })
          })
        },
        Oe = ({
          name: e
        }) => {
          const a = (e => e ? e.trim() : "")(e),
            t = Fe[a];
          return t ? (0, m.jsx)(t, {}) : null
        },
        Ge = ({
          id: e = null,
          ids: a = null,
          setTitleDataPath: t = null,
          sync: s = !1
        }) => {
          const i = a ?? [e],
            {
              data: r
            } = (0, b.useQuery)(Ae.TinaModulesInfo, {
              variables: {
                ids: i,
                sync: s
              },
              setTitleDataPath: t,
              skip: !i.length
            });
          return r?.tinaModulesInfo ?? null
        },
        Re = _(({
          components: e = {},
          id: a = null,
          ids: t = null,
          skeleton: s = null
        }) => {
          const i = Ge({
              id: a,
              ids: t
            }),
            r = i?.[0]?.tina;
          return r ? (0, m.jsx)(m.Fragment, {
            children: i.map(({
              tina: a
            }, t) => (0, m.jsx)(z.TinaParser, {
              components: e,
              tina: a,
              componentProps: {
                tinaModulesInfo: i
              }
            }, t))
          }) : s ? (0, m.jsx)(Oe, {
            name: s
          }) : null
        }, {
          header: null
        });
      var He = t(43212);
      const We = ({
        attributes: e = {},
        children: a,
        className: t = "",
        id: s = "",
        style: i = {}
      }) => {
        const {
          hash: r
        } = (0, ae.useLocation)();
        return (0, g.useLayoutEffect)(() => {
          const e = document.getElementById(s);
          e && r.includes(s) && e.scrollIntoView({
            behavior: "instant",
            block: "start"
          })
        }, []), (0, m.jsx)("span", {
          className: (0, Q.default)(t, e?.className, "rockstargames-sites-legacyc650a7a1e761d6a9f2d6ce1cd8d6f330"),
          id: s,
          style: (0, b.safeStyles)(i ?? e?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: (0, He.A)(a)
          }
        })
      };
      var qe = t(21297),
        Ue = t(36421);
      let Ye = [],
        Xe = null;
      const Qe = "requestAnimationFrame" in window ? (e = {
          sync: !1
        }) => {
          null !== Xe && window.cancelAnimationFrame(Xe);
          const a = () => Ke(Ye.filter(e => e.dirty && e.active));
          if (e.sync) return a();
          Xe = window.requestAnimationFrame(a)
        } : () => {},
        Ze = e => a => {
          Ye.forEach(a => a.dirty = e), Qe(a)
        },
        Ke = e => {
          e.filter(e => !e.styleComputed).forEach(e => {
            e.styleComputed = ta(e)
          }), e.filter(sa).forEach(ia);
          const a = e.filter(aa);
          for (let e = 0; e < 2; e++) a.forEach(ea), a.forEach(e => {
            ia(e), Je(e)
          }), a.forEach(ra)
        },
        Je = e => e.dirty = 0,
        ea = e => {
          e.availableWidth = e.element.parentElement?.clientWidth, e.availableHeight = e.element.parentElement?.clientHeight, e.currentWidth = e.element.scrollWidth, e.currentHeight = e.element.scrollHeight, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), Math.min(Math.max(e.minSize, e.availableHeight / e.currentHeight * e.previousFontSize), e.maxSize)), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap"
        },
        aa = e => 2 !== e.dirty || 2 === e.dirty && (e.element.parentElement?.clientWidth !== e.availableWidth || e.element.parentElement?.clientHeight !== e.availableHeight),
        ta = e => {
          const a = window.getComputedStyle(e.element, null);
          return e.currentFontSize = parseFloat(a.getPropertyValue("font-size")), e.display = a.getPropertyValue("display"), e.whiteSpace = a.getPropertyValue("white-space"), !0
        },
        sa = e => {
          let a = !1;
          return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (a = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (a = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, a)
        },
        ia = e => {
          e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px"
        },
        ra = e => {
          e.element.dispatchEvent(new CustomEvent("fit", {
            detail: {
              oldValue: e.previousFontSize,
              newValue: e.currentFontSize,
              scaleFactor: e.currentFontSize / e.previousFontSize
            }
          }))
        },
        na = (e, a) => t => {
          e.dirty = a, e.active && Qe(t)
        },
        ca = e => () => {
          Ye = Ye.filter(a => a.element !== e.element), e.observeMutations && e.observer && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize
        },
        oa = e => () => {
          e.active || (e.active = !0, Qe())
        },
        da = e => () => e.active = !1,
        la = {
          minSize: 16,
          maxSize: 512,
          multiLine: !0,
          observeMutations: {
            subtree: !0,
            childList: !0,
            characterData: !0
          }
        };

      function ma(e, a) {
        const t = {
          ...la,
          ...a
        };
        t.minSize = Number.isFinite(t.minSize) && t.minSize > 0 ? t.minSize : la.minSize, t.maxSize = Number.isFinite(t.maxSize) && t.maxSize > 0 ? t.maxSize : la.maxSize;
        const s = e.map(e => {
          const a = {
            ...t,
            element: e,
            active: !0,
            styleComputed: !1,
            preStyleTestCompleted: !1,
            dirty: 3,
            originalStyle: {
              whiteSpace: e.style.whiteSpace,
              display: e.style.display,
              fontSize: e.style.fontSize
            }
          };
          return (e => {
            e.observeMutations && (e.observer = new MutationObserver(() => na(e, 1)()), e.observer.observe(e.element, e.observeMutations))
          })(a), Ye.push(a), {
            element: e,
            fit: na(a, 3),
            unfreeze: oa(a),
            freeze: da(a),
            unsubscribe: ca(a)
          }
        });
        return Qe(), s
      }

      function ga(e, a = {}) {
        return "string" == typeof e ? ma((t = document.querySelectorAll(e), [].slice.call(t)), a) : ma([e], a)[0];
        var t
      }
      let fa;
      const ua = () => {
          window.clearTimeout(fa), fa = window.setTimeout(Ze(2), ga.observeWindowDelay)
        },
        pa = ["resize", "orientationchange"];
      Object.defineProperty(ga, "observeWindow", {
        set: e => {
          pa.forEach(a => {
            e ? window.addEventListener(a, ua) : window.removeEventListener(a, ua)
          })
        }
      }), ga.observeWindow = !0, ga.observeWindowDelay = 100, ga.fitAll = Ze(3);
      const ba = ga;
      var ka = t(22808);
      const va = (0, g.createContext)({
          rootRef: (0, g.createRef)(),
          min: 0,
          max: 0,
          mode: "single"
        }),
        ha = (0, g.forwardRef)(function({
          min: e = 1,
          max: a = 100,
          mode: t = "multi",
          asChild: s,
          testId: i,
          ...r
        }, n) {
          const c = (0, g.useRef)(null),
            o = (0, ka.UP)(c, n),
            d = (0, Ue.v6)({
              "data-testid": i
            }, r),
            l = s ? qe.DX : "div";
          return (0, m.jsx)(va.Provider, {
            value: {
              rootRef: c,
              min: e,
              max: a,
              mode: t
            },
            children: (0, m.jsx)(l, {
              ref: o,
              ...d
            })
          })
        }),
        ya = (0, g.forwardRef)(function({
          asChild: e,
          testId: a,
          ...t
        }, s) {
          const {
            rootRef: i,
            min: r,
            max: n,
            mode: c
          } = (0, g.useContext)(va), o = (0, g.useRef)(null), d = (0, g.useRef)(null);
          (0, g.useEffect)(() => (d.current = ba(o.current, {
            minSize: r,
            maxSize: n,
            multiLine: "multi" === c
          }), () => d.current.unsubscribe()), [r, n, c]), (0, g.useEffect)(() => {
            if (null === i.current || null === d.current) return;
            const e = new ResizeObserver(() => {
              d.current.fit()
            });
            return e.observe(i.current), () => e.disconnect()
          }, [i, d]), (0, g.useEffect)(() => {
            document.fonts.ready.then(() => d.current && d.current.fit())
          }, []);
          const l = (0, ka.UP)(o, s),
            f = (0, Ue.v6)({
              className: "_1wp04ps0",
              "data-testid": a
            }, t),
            u = e ? qe.DX : "div";
          return (0, m.jsx)(u, {
            ref: l,
            ...f
          })
        }),
        _a = {
          badge: "rockstargames-sites-legacyb7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-sites-legacyd08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-sites-legacyc7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-sites-legacyce8632d7464b556158a1d549f653498c"
        },
        xa = ({
          wrapper: e,
          children: a,
          role: t,
          splitter: s
        }) => s || t ? e(a) : a,
        ja = ({
          badge: e,
          badgeType: a,
          role: s,
          splitter: i
        }) => {
          const r = [];
          return i ? e.split(i).map(e => r.push(e)) : r.push(e), (0, m.jsxs)(xa, {
            splitter: i,
            role: s,
            wrapper: e => (0, m.jsx)("div", {
              className: `${_a.badge} ${a?_a[a]:""} `,
              children: e
            }),
            children: [(0, m.jsx)(m.Fragment, {
              children: s && (0, m.jsx)(V, {
                image: {
                  alt: s,
                  desktop: t(65287)(`./${s}.png`)
                }
              })
            }), (0, m.jsx)(ha, {
              className: `${i||s?"":_a.badge} ${a?_a[a]:""}`,
              min: 8,
              max: 1e3,
              mode: i || s ? "single" : "multi",
              children: (0, m.jsx)(ya, {
                children: r[0]
              })
            }), (0, m.jsx)(m.Fragment, {
              children: r.shift() && i && r.length >= 1 && (0, m.jsx)(ha, {
                min: 8,
                max: 1e3,
                mode: "single",
                children: (0, m.jsx)(ya, {
                  children: r.join(" ")
                })
              })
            })]
          }, "badge-wrapper")
        },
        Na = ({
          hero: e,
          children: a
        }) => e ? (0, m.jsx)("div", {
          className: "rockstargames-sites-legacya429886d721550d02521f7f5c9de7f5b",
          children: a
        }) : a,
        wa = ({
          badge: e = null,
          badgeType: a,
          discountTxt: t,
          splitter: s,
          image: i,
          style: r,
          className: n = "",
          attributes: c = {},
          role: o,
          hero: d = !1
        }) => {
          const l = (0, g.useMemo)(() => {
              if (i?.badge || i?.discountTxt || e || t) return (0, m.jsx)(ja, {
                badge: i?.discountTxt ?? i?.badge ?? e ?? t,
                badgeType: a,
                splitter: i?.splitter ?? s,
                role: i?.role ?? o
              })
            }, [e, a, t, i, o, s]),
            f = (0, b.isEmptyMarkup)(i?.caption ?? "");
          return (0, m.jsx)(Na, {
            hero: d,
            children: (0, m.jsx)("figure", {
              children: (0, m.jsxs)("div", {
                className: (0, Q.default)("rockstargames-sites-legacyd9ac792281efe15bcd4589b028d1c27b", d ? "rockstargames-sites-legacye430c4662cd185f58259d4a8d8b322de" : "", c?.hiddenMobile ? "hiddenMobile" : "", c?.hiddenLarge ? "hiddenLarge" : "", c?.className, n),
                style: (0, b.safeStyles)({
                  ...r,
                  ...c?.style
                }),
                ...c,
                children: [(0, m.jsx)(V, {
                  role: i?.accessibleRole,
                  image: i,
                  className: n
                }), l, !f && (0, m.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: i.caption
                  }
                })]
              })
            })
          })
        };
      var Sa = t(44128),
        Ca = t(73059),
        Ta = t(31147),
        Ia = t(39279);
      const za = {
        active: "rockstargames-sites-legacyfdc2ec652cbb7469f602e73cd10ef997",
        deprecatedCarousel: "rockstargames-sites-legacya531264d5417d2198d4e14aa72335af1",
        dotsSlide: "rockstargames-sites-legacyb8fd11776fba32f9663bbb6292a5c901",
        hideLarge: "rockstargames-sites-legacya6c9173aa5a8fe31a062251352a9d711",
        hideMobile: "rockstargames-sites-legacyf3445a74a067bd92ff94b521cb0bdc07",
        imageAreaBg: "rockstargames-sites-legacydcb2b41007683141579697bb4a8658ba",
        img: "rockstargames-sites-legacyd8e66128b4fef1ea164350cd535e2d68",
        infinite_false: "rockstargames-sites-legacyb85758ee99a52896b94130d002e821c7",
        panorama: "rockstargames-sites-legacyff63f8addff8d036ca0b65fa495e1653",
        perico: "rockstargames-sites-legacyaa50a9164fd0296b1196d441233cc348",
        renderedWithChildren: "rockstargames-sites-legacyad7696edafa3086969e7aaece4f09b4f",
        siblings: "rockstargames-sites-legacyf4c50c0daadf81cd292587fcfea1339d",
        "swiper-horizontal": "rockstargames-sites-legacyb823bbff86d38da8cb611a7c3367d8fe",
        "swiper-preloader-spin": "rockstargames-sites-legacyc39b97f81c73d75dc4e013fde14aff18",
        "swiper-scrollbar-disabled": "rockstargames-sites-legacyee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-vertical": "rockstargames-sites-legacyd29252354bbbfe413678daff5223169d",
        track: "rockstargames-sites-legacyc7c21df4f7f83a73f79dd7913aa87832"
      };
      var La = t(50062),
        Pa = t.n(La);
      const Ea = {
          blue: "rockstargames-sites-legacydf5c0d39e32be4e6977bb1d638ed2340",
          custom: "rockstargames-sites-legacyef5369875ddc5d9d7ad36eadc8afab2e",
          darkBlue: "rockstargames-sites-legacyaa460ec14f75c93c2ba386a115ea407c",
          darkRed: "rockstargames-sites-legacya6a078bd68ef39e719c21e5db6329642",
          goldenrod: "rockstargames-sites-legacya55d762df7035a2394c9ffbfcbf1a0db",
          green: "rockstargames-sites-legacyea2d0d0e1e32d8e48d79a0ad80a4c8ac",
          grid: "rockstargames-sites-legacyc157d94760f0476ea06aa04da4e86727",
          gtao: "rockstargames-sites-legacyf4bc90102d24f73cb2d45d3821bfd32e",
          gtaplus: "rockstargames-sites-legacyc5d92b0365dc60e6b93d321e9139e9f3",
          hotPink: "rockstargames-sites-legacyfa9be84c85fca4e66b2489e1e52a2e6a",
          itemList: "rockstargames-sites-legacya1ccd04246730848111c4868ccba6294",
          noImg: "rockstargames-sites-legacyb239e263450a84fffba43a94c194d606",
          pillBtn: "rockstargames-sites-legacyd45dcc8e4008f8620987ea3033e4373d",
          purple: "rockstargames-sites-legacyf14d63f28dd73c05cf950a08d8b8f501",
          rdo: "rockstargames-sites-legacycc490e805fe55ab86a3ec5df2a5131e3",
          red: "rockstargames-sites-legacyc446b758dbe82ad97444174f4d0b4abe",
          selected: "rockstargames-sites-legacyde1852cf9b8b4b71bcc67f8e66552c46",
          skull: "rockstargames-sites-legacya034e7482e8f28c66ec657f72bb93749",
          teal: "rockstargames-sites-legacya0aaa124176430b6ad4f959cf136e7a3",
          turquoise: "rockstargames-sites-legacyb03c0798d8655dd98518b2f0dc002f06",
          yellow: "rockstargames-sites-legacybdb57ca410954012dfd4711c67fc2a18"
        },
        {
          sanitize: Ma
        } = Pa(),
        Va = ({
          list: e,
          string: a,
          starColor: t,
          style: s,
          className: i,
          game: r,
          noImg: n,
          columns: c,
          mobileColumns: o
        }) => {
          const [d, l] = (0, g.useState)(null), f = a ? a.split("_#_") : e;
          if ((0, g.useEffect)(() => {
              l(e)
            }, [e]), !a && !e) return null;
          const u = {
            color: s?.color
          };
          return delete s?.color, c && d ? (0, m.jsx)("div", {
            className: Ea.grid,
            style: {
              "--unordered-list-grid-column": c,
              "--unordered-list-grid-column-mobile": o ?? c
            },
            children: (0, m.jsx)("ul", {
              className: (0, Q.default)(Ea.itemList, Ea.noImg, Ea[t], Ea[r]),
              style: (0, b.safeStyles)(s),
              children: d.map((e, a) => (0, m.jsx)("li", {
                style: u,
                dangerouslySetInnerHTML: {
                  __html: Ma(e.content)
                }
              }, a))
            })
          }) : (0, m.jsx)("ul", {
            style: (0, b.safeStyles)(s),
            className: (0, Q.default)(Ea.itemList, Ea.custom, n ? Ea.noImg : "", t ? Ea[t] : "", r ? Ea[r] : "", i ?? ""),
            children: f.map((e, a) => (0, m.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Ma(e?.content ?? e)
              }
            }, a))
          })
        },
        Ba = {
          gtao: "rockstargames-sites-legacyf66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-sites-legacydc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-legacyd4d968b41ef87926b0b6318e8647738b"
        },
        Da = ({
          style: e,
          className: a = "",
          type: t = ""
        }) => (0, m.jsx)("div", {
          style: e,
          className: [Ba.hr, Ba[t], a].join(" ")
        }),
        Aa = "rockstargames-sites-legacyacd27eff2209196752622710f7b27558",
        $a = ({
          to: e,
          children: a
        }) => e ? (0, m.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        Fa = ({
          item: e,
          className: a = ""
        }) => (0, m.jsxs)("div", {
          className: (0, Q.default)("rockstargames-sites-legacyf8bc9589974046cdac4a2264be12d2df", a),
          children: [e.title && (0, m.jsx)($a, {
            to: e?.href ?? e?.to,
            children: (0, m.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, a) => e?.unorderedList ? (0, m.jsx)(Va, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, a) : e?.image ? (0, m.jsx)(V, {
            image: e.image,
            className: e?.className
          }, a) : e?.separator ? (0, m.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, m.jsx)(Da, {})
          }, a) : (0, m.jsx)("p", {
            children: (0, m.jsx)("span", {
              className: Aa,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, a)) : (0, m.jsx)("span", {
            className: Aa,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        }),
        Oa = ({
          item: e
        }) => (0, m.jsxs)("div", {
          children: [(0, m.jsx)(wa, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, Q.default)(za.img, e?.className)
          }), (e?.title || e?.description) && (0, m.jsx)(Fa, {
            item: e
          })]
        }),
        Ga = ({
          current: e,
          total: a
        }) => (0, m.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": a
          },
          children: (0, m.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        Ra = ({
          children: e,
          items: a = [],
          style: t = {},
          noInfiniteScroll: s = !1,
          className: i = "",
          renderTemplate: r = "standard",
          text: n,
          customSpaceBetween: c = null,
          centerSlides: o = !0,
          centeredSlidesBounds: d = !1
        }) => {
          const l = (0, ka.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [f, u] = (0, g.useState)(0),
            [p, b] = (0, g.useState)(null),
            k = (0, g.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, Ia.A)()) : null, [e, l]),
            v = e => {
              if (!e) return;
              let a = 0;
              e.pagination.bullets.forEach((e, t) => {
                e.classList.contains("swiper-pagination-bullet-active") && (a = t)
              }), u(a)
            };
          if (!(a && 0 !== a?.length || e)) return null;
          const h = {
            0: {
              spaceBetween: c ?? 16
            },
            1024: {
              spaceBetween: c ?? 18
            },
            1920: {
              spaceBetween: c ?? 20
            },
            2560: {
              spaceBetween: c ?? 22
            }
          };
          return (0, m.jsxs)("div", {
            className: (0, Q.default)(za.deprecatedCarousel, za[r], za.infinite_true, e ? za.renderedWithChildren : "", i),
            style: t,
            "data-testid": "carousel",
            children: [(0, m.jsxs)(me.RC, {
              modules: [Sa.A, Ca.A, Ta.A],
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
              centeredSlides: o,
              centerInsufficientSlides: o,
              centeredSlidesBounds: d,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: h,
              onSlideChange: e => {
                v(e)
              },
              onResize: e => {
                null != p && clearTimeout(p);
                const a = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), v(e)
                }, 250);
                b(a)
              },
              children: [(0, m.jsx)("div", {
                className: za.trackWrapper,
                children: (0, m.jsxs)("div", {
                  className: za.track,
                  children: [a?.map(e => (0, m.jsx)(me.qr, {
                    children: (0, m.jsx)(Oa, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, a) => e && (0, m.jsx)(me.qr, {
                    children: e
                  }, k && k[a]))]
                })
              }), (0, m.jsx)(Ga, {
                current: f,
                total: e ? e.length : a.length
              })]
            }), (n?.title || n?.description) && (0, m.jsx)(Fa, {
              item: n
            })]
          })
        },
        Ha = {
          carouselTitle: "rockstargames-sites-legacye9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-sites-legacyfabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-sites-legacyac767e959939b4d56b2358cb263d07ad"
        },
        Wa = ({
          to: e,
          children: a
        }) => e ? (0, m.jsx)("a", {
          href: e,
          target: "_blank",
          children: a
        }) : a,
        qa = ({
          items: e = [],
          text: a = {},
          style: t,
          className: s = "",
          id: i = null
        }) => e?.length ? (0, m.jsxs)("div", {
          id: i,
          "data-testid": `carousel${s&&`-${s}`}-group-of-items`,
          children: [(0, m.jsx)(Ra, {
            style: t,
            className: [s, Ha.carouselWrapper].join(" "),
            children: e.map(e => (0, m.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, m.jsx)("div", {
                className: Ha.imageWrapper,
                tabIndex: 0,
                children: (0, m.jsx)(wa, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [Ha.img, e?.className].join(" ")
                })
              }), e.title && (0, m.jsx)(Wa, {
                to: e?.to,
                children: (0, m.jsx)("h4", {
                  className: Ha.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, m.jsx)("span", {
                className: Ha.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title))
          }), a?.title || a?.description ? (0, m.jsx)("div", {
            className: Ha.padding,
            style: a?.style ?? {},
            children: (0, m.jsx)(Fa, {
              item: a
            })
          }) : ""]
        }) : null,
        Ua = ({
          impressionTracking: e,
          gtm: a = {},
          children: t
        }) => e?.shouldTrack ? (0, m.jsx)(z.InViewTracker, {
          threshold: e?.threshold,
          gtm: a,
          children: t
        }) : t,
        Ya = ({
          to: e,
          children: a
        }) => e ? (0, m.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        Xa = ({
          item: e
        }) => e?.videoId ? (0, m.jsx)(P(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, m.jsx)(wa, {
          image: e?.image,
          badge: e?.badge ?? e?.image?.badge,
          badgeType: "badge3",
          role: e?.role ?? e?.image?.role,
          splitter: e?.splitter ?? e?.image?.splitter,
          ariaLabel: e?.image?.ariaLabel,
          style: e?.style,
          className: e?.className
        }),
        Qa = ({
          items: e,
          style: a = {},
          className: t = "",
          id: s = null
        }) => (0, m.jsx)("div", {
          style: a,
          className: (0, Q.default)("rockstargames-sites-legacyd38af92e8657708abd3dc5295e62476c", t),
          id: s,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, m.jsx)(Ua, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, m.jsx)(Ya, {
              to: e?.to,
              children: (0, m.jsxs)("div", {
                className: (0, Q.default)("rockstargames-sites-legacya9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, m.jsx)(Xa, {
                  item: e
                }) : "", e.title || e.description ? (0, m.jsx)(Fa, {
                  item: e,
                  className: "rockstargames-sites-legacybc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
        }),
        Za = ({
          children: e = null,
          text: a = {},
          items: t = [],
          renderTemplate: s = "",
          style: i = {},
          id: r = null,
          ...n
        }) => {
          if (!t.length) return null;
          switch (s) {
            case "carousel":
              return (0, m.jsx)(qa, {
                text: a,
                items: t,
                style: i,
                id: r,
                children: e
              });
            case "carousel-panorama":
              return (0, m.jsx)(qa, {
                text: a,
                items: t,
                style: i,
                className: "panorama",
                id: r,
                children: e
              });
            default:
              return (0, m.jsx)(Qa, {
                items: t,
                style: i,
                id: r,
                ...n,
                children: e
              })
          }
        };
      var Ka = t(58969);
      const Ja = (e = [], a, t) => {
          const s = (0, g.useRef)(null),
            i = (0, g.useRef)(new Set),
            r = (0, g.useRef)([]),
            n = (0, g.useRef)(0),
            c = (0, g.useRef)(0),
            o = (0, g.useRef)(!1),
            d = (0, g.useMemo)(() => Array.from(new Set(e.filter(e => e >= 0 && e <= 100))).sort((e, a) => e - a), [e]);
          return (0, g.useEffect)(() => {
            i.current = new Set, r.current = d.slice()
          }, [d]), (0, g.useEffect)(() => {
            s.current = t ?? window
          }, [t]), (0, g.useEffect)(() => {
            const e = s.current;
            if (!e) return;
            const d = () => {
              o.current || (o.current = !0, requestAnimationFrame(() => {
                (() => {
                  const {
                    scrollTop: s,
                    scrollHeight: o,
                    percent: l
                  } = (() => {
                    const e = t,
                      a = document.documentElement,
                      s = document.body,
                      i = e ? e.scrollTop : a.scrollTop || s.scrollTop || window.scrollY || 0,
                      r = e ? e.scrollHeight : a.scrollHeight || s.scrollHeight || 0,
                      n = e ? e.clientHeight : a.clientHeight || window.innerHeight || 0,
                      c = Math.max(1, r - n);
                    return {
                      scrollTop: i,
                      scrollHeight: r,
                      percent: Math.max(0, Math.min(100, i / c * 100))
                    }
                  })();
                  n.current = l, c.current = s;
                  const m = r.current.find(e => l >= e);
                  if (!m) return;
                  if (i.current.has(m)) return;
                  i.current.add(m), r.current = r.current.filter(e => e !== m);
                  const g = o * (m / 100);
                  a?.({
                    scrollY: m,
                    scrollLength: g
                  }), 0 === r.current.length && e.removeEventListener("scroll", d, {
                    capture: !1
                  })
                })(), o.current = !1
              }))
            };
            return d(), e.addEventListener("scroll", d, {
              passive: !0
            }), () => {
              e.removeEventListener("scroll", d, {
                capture: !1
              })
            }
          }, [a, t, d.join(",")]), {
            scrollY: n.current,
            scrollLength: c.current
          }
        },
        et = ({
          threshold: e,
          trackRef: a,
          children: t
        }) => {
          const {
            track: s
          } = (0, v.useGtmTrack)();
          return Ja(e, ({
            scrollY: e,
            scrollLength: a
          }) => {
            s({
              event: "page_scroll",
              scroll_depth: e,
              page_length: `${Math.round(a)}px`
            })
          }, a?.current ?? null), t
        },
        at = ({
          text: e,
          style: a
        }) => (0, m.jsx)("div", {
          className: "rockstargames-sites-legacyc08a001134624b9ceb275eae413bfd3d",
          style: a,
          children: e
        }),
        tt = ({
          hasTag: e = !1,
          tag: a = null,
          tagStyle: t = null,
          badges: s = []
        }) => e && a ? (0, m.jsx)("div", {
          className: "rockstargames-sites-legacyceb75d3391774f84e920e955d7a6853f",
          "data-tag-style": t,
          children: a
        }) : e && s && s?.length > 0 ? (0, m.jsx)("div", {
          className: "rockstargames-sites-legacyf83b84453472e937d57011680a564ec6",
          children: s.map(e => (0, m.jsx)(at, {
            ...e
          }, e?.text))
        }) : null,
        st = {
          content: "rockstargames-sites-legacyf418ed13cf5cbe3f701ce0d872b50704",
          textOverlay: "rockstargames-sites-legacyca83475001f5d512b9ffcd89f1117561"
        },
        {
          LiteMotion: it,
          Animations: rt
        } = i,
        {
          variants: nt,
          transitions: ct
        } = rt,
        ot = ({
          title: e,
          hasTag: a,
          tag: t,
          hasDescription: s,
          description: i,
          fadesOut: r = !1,
          badges: n
        }) => (0, m.jsx)(it, {
          initial: nt.fade.out.initial,
          animate: {
            opacity: r ? 0 : 1
          },
          transition: ct.fade,
          className: st.textOverlay,
          children: (0, m.jsxs)("div", {
            className: st.content,
            children: [(0, m.jsx)(tt, {
              hasTag: a,
              tag: t,
              badges: n?.filter(e => e?.isPrimary)
            }), (0, m.jsx)("h3", {
              children: e
            }), s && i && (0, m.jsx)("div", {
              className: st.description,
              children: i
            })]
          })
        }),
        dt = (0, p.defineMessages)({
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
        lt = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          tag: s,
          tagStyle: i,
          discountPrice: r,
          originalPrice: n,
          setPricingContainerHeight: c = null
        }) => {
          const o = (0, g.createRef)(),
            {
              formatMessage: d
            } = (0, p.useIntl)();
          return (0, g.useEffect)(() => {
            const e = () => {
              o.current && null !== c && c(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [o]), (0, m.jsxs)("div", {
            className: "rockstargames-sites-legacye419c6cd31abd635e742e635dcfd8316",
            ref: o,
            "data-show-background": t,
            children: [a && (0, m.jsx)("span", {
              className: "rockstargames-sites-legacybf415d56280a8768ee0c26e116865d5b",
              children: e
            }), (0, m.jsxs)("div", {
              className: "rockstargames-sites-legacyd98da8fc9dce6d600db165351d3a3fed",
              children: [(0, m.jsx)("span", {
                className: "rockstargames-sites-legacya5717338db21efc7eb765011d68ea73d",
                "data-tag-style": i || "free",
                children: s
              }), (0, m.jsx)("span", {
                className: "rockstargames-sites-legacycdaaa9655747e4d129d6c22080bdd33d",
                children: r
              }), n && (0, m.jsx)("span", {
                className: "rockstargames-sites-legacyd2cd2139f671e2976f60b0002f59fd77",
                children: d(dt.card_sr_only_discount_label)
              }), (0, m.jsx)("span", {
                className: "rockstargames-sites-legacyaf3db4eb6d14c1f4ee5689b4e6386715",
                children: n
              })]
            })]
          })
        };
      var mt = t(80391),
        gt = t(28985),
        ft = t(47240),
        ut = t(81715),
        pt = t(49429),
        bt = t(32903),
        kt = t(85719),
        vt = t(55815),
        ht = t(66787),
        yt = t(11008);
      const _t = {
          ps5: ft,
          ps4: gt,
          ps: mt,
          xboxone: pt,
          xbox: bt,
          xboxseriesxs: ut,
          nintendoswitch: yt,
          pc: kt,
          googleplay: ht,
          applestore: vt
        },
        xt = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          platformOptions: s,
          setPricingContainerHeight: i = () => {},
          expandedView: r
        }) => {
          const n = (0, g.createRef)();
          return (0, g.useEffect)(() => {
            const e = () => {
              n.current && null !== i && i(n.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [n]), (0, m.jsxs)("div", {
            className: "rockstargames-sites-legacyee81f54f31ab2cd10a67313b9689bf96",
            ref: n,
            "data-show-background": t,
            "data-show-platforms": !r,
            children: [a && (0, m.jsx)("span", {
              className: "rockstargames-sites-legacyd4ab460f0a204a588d4d4dd0a110ca36",
              children: e
            }), s?.platformsAndLinks && (0, m.jsxs)("div", {
              className: "rockstargames-sites-legacyafdc85bfd80cae52d4c1b422f1294962",
              children: [(0, m.jsx)(tt, {
                hasTag: s?._memoq?.platformTag,
                tag: s?._memoq?.platformTag,
                tagStyle: s?._memoq?.platformTagStyle
              }), (0, m.jsx)("div", {
                className: "rockstargames-sites-legacyc252412353007d9f02f19a754430b14b",
                children: s.platformsAndLinks.map(({
                  platform: e,
                  buttonText: a
                }) => (0, m.jsx)("img", {
                  className: "rockstargames-sites-legacyff5cde8853312ffb892472d100c684cd",
                  alt: a,
                  src: _t[e]
                }, e))
              })]
            })]
          })
        },
        jt = ({
          textOverlayProps: e,
          title: a,
          size: t,
          expandedView: s = !1,
          children: i,
          pricingOptions: r,
          setPricingContainerHeight: n,
          isCoverCard: c = !1,
          platformOptions: o
        }) => {
          const [d] = (({
            hasTextOverlay: e,
            tag: a,
            collapsedHasTag: t,
            description: s,
            collapsedHasDescription: i,
            size: r,
            title: n,
            expandedView: c,
            badges: o
          }) => {
            const [d, l] = (0, g.useState)(null), f = (0, g.useMemo)(() => {
              if (!e) return null;
              const d = "sm" !== r && i;
              return (0, m.jsx)(ot, {
                title: n,
                hasTag: t,
                tag: a,
                hasDescription: d,
                description: s,
                fadesOut: c,
                badges: o
              })
            }, [e, a, t, s, i, r, n, c, o]);
            return (0, g.useEffect)(() => {
              l(f)
            }, [f]), [d, l]
          })({
            ...e,
            size: t,
            title: a,
            expandedView: s
          }), l = void 0 !== r?.hasPricingOptions || null !== o;
          return (0, m.jsxs)("header", {
            className: "rockstargames-sites-legacycab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": c,
            "data-expanded-view": s,
            children: [i, !s && d, l && (0, m.jsxs)(m.Fragment, {
              children: [!0 === o?.hasPlatformOptions && (0, m.jsx)(xt, {
                title: a,
                platformOptions: o,
                pricingOptions: r,
                setPricingContainerHeight: n,
                expandedView: s
              }), !0 === r?.hasPricingOptions && (0, m.jsx)(lt, {
                title: a,
                tag: r?._memoq?.tag,
                tagStyle: r?._memoq?.tagStyle || "free",
                discountPrice: r?._memoq?.discountPrice,
                originalPrice: r?._memoq?.originalPrice,
                setPricingContainerHeight: n
              })]
            })]
          })
        },
        {
          LiteMotion: Nt,
          Animations: wt
        } = i,
        {
          transitions: St
        } = wt,
        Ct = ({
          components: e,
          images: a,
          payload: t,
          prod: s,
          size: i,
          title: r,
          initial: n = "initial",
          animate: c = "animate",
          variants: o,
          type: d = null,
          context: l = null,
          textOverlayProps: f,
          className: u,
          children: p,
          theme: k = "none",
          id: v,
          pricingOptions: h,
          pricingContainerHeight: y,
          isCoverCard: _,
          platformOptions: x,
          isProductCard: j = !1
        }) => {
          const N = (0, g.useRef)(null),
            w = (0, g.useRef)(null),
            {
              tag: S,
              expandedHasTag: C,
              badges: T
            } = f;
          (0, Ka.A)(t, "meta.prod", s);
          const I = a?.length > 0;
          let L = (0, m.jsx)("h1", {
            children: r
          });
          return _ && (L = null), (0, g.useEffect)(() => {
            const e = () => {
              N.current && N.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (N.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }, []), (0, g.useEffect)(() => {
            const e = window.innerWidth >= window.innerHeight;
            e && w?.current?.scrollTop && (w.current.scrollTop = 0), !e && N?.current?.scrollTop && (N.current.scrollTop = 0)
          }, [t, w, N]), (0, m.jsx)(b.DataLayerProvider, {
            card_id: v,
            card_name: r?.toLowerCase(),
            children: (0, m.jsx)(et, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === d ? N : w,
              children: (0, m.jsxs)(Nt, {
                ref: N,
                initial: n,
                animate: c,
                variants: o.expanded,
                transition: St.cardOpen,
                className: (0, Q.default)("rockstargames-sites-legacyc2289ce1bf0de6ad8a4a8ce7e90a4b66", u),
                "data-type": d,
                "data-size": i,
                "data-product": j,
                "data-covercard": _ || !1,
                "data-context": l,
                style: {
                  "--product-card-pricing-info-height": `${y||0}px`
                },
                children: [I && (0, m.jsx)(jt, {
                  size: i,
                  title: r,
                  textOverlayProps: f,
                  expandedView: !0,
                  pricingOptions: h,
                  platformOptions: x,
                  isCoverCard: _,
                  children: p
                }), (0, m.jsxs)(Nt, {
                  ref: w,
                  className: "rockstargames-sites-legacye461568802b56e8c21b8b82d9c3a1fb4",
                  variants: o.expandedContents,
                  transition: St.afterCardOpen,
                  "data-theme": k,
                  tabindex: -1,
                  children: [(0, m.jsxs)("div", {
                    className: "rockstargames-sites-legacyc4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, m.jsx)(tt, {
                      hasTag: C,
                      tag: S,
                      badges: T
                    }), L, j && (0, m.jsxs)(m.Fragment, {
                      children: [!0 === x?.hasPlatformOptions && (0, m.jsx)("div", {
                        className: "rockstargames-sites-legacycd635452588eda421bdea19f00660efc",
                        children: (0, m.jsx)(tt, {
                          hasTag: x?.hasPlatformOptions,
                          tag: x?._memoq?.platformTag,
                          tagStyle: x?._memoq?.platformTagStyle
                        })
                      }), !0 === h?.hasPricingOptions && (0, m.jsx)(lt, {
                        title: r,
                        showTitle: !1,
                        showBackground: !1,
                        tag: h?._memoq?.tag,
                        tagStyle: h?.tagStyle || "free",
                        discountPrice: h?._memoq?.discountPrice,
                        originalPrice: h?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, m.jsx)(z.TinaParser, {
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
      var Tt = t(37660);
      const It = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","card_sr_only_discount_label":"Ermäßigter Preis, vorher","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","card_sr_only_discount_label":"Discount price, previously","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","card_sr_only_discount_label":"Precio rebajado, anteriormente","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","card_sr_only_discount_label":"Precio con descuento, anteriormente","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","card_sr_only_discount_label":"Prix réduit, précédemment","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","card_sr_only_discount_label":"Prezzo scontato: prima","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","card_sr_only_discount_label":"割引価格(以前の価格)","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","card_sr_only_discount_label":"할인 가격, 정가","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","card_sr_only_discount_label":"Cena promocyjna, poprzednio","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","card_sr_only_discount_label":"Preço com desconto, antes","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","card_sr_only_discount_label":"Цена по скидке, ранее","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList}上的{title}","card_label_platforms_tag":"{tag} {platformList}上的{title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","card_sr_only_discount_label":"折扣价格，此前","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第{currentPage}页（共{totalPages}页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","card_sr_only_discount_label":"優惠價格，原為","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        zt = (0, p.withIntl)(({
          id: e,
          position: a,
          title: t,
          size: s = "md",
          sectionTitle: i = "",
          expandedType: r = null,
          modalProps: n = {
            content: null,
            className: "",
            contentClassName: ""
          },
          className: c,
          children: o,
          isProductCard: d,
          cardIds: l = null,
          theme: f = "none",
          isCoverCard: u,
          platformOptions: b,
          pricingOptions: k
        }) => {
          const {
            formatMessage: h,
            formatList: y
          } = (0, p.useIntl)(), [_, x] = (0, ae.useSearchParams)(), j = (0, g.useRef)(null), [, N] = (0, Tt.h)(), {
            track: w
          } = (0, v.useGtmTrack)(), S = window.location.href.includes("cms5"), C = "info", T = _.get(C), I = (0, g.useCallback)(() => {
            N(null), S || x(e => (e.delete(C), e), {
              replace: !0
            }), w({
              event: "trackPageview"
            })
          }, [S, N, x, w]), z = (0, g.useCallback)(() => {
            if (!n?.content || !j.current || !r || "linkout" === r) return;
            const i = j.current,
              c = window.getComputedStyle(i),
              o = parseInt(c.getPropertyValue("width"), 10),
              d = parseInt(c.getPropertyValue("height"), 10),
              m = i.getBoundingClientRect(),
              {
                content: g,
                className: u,
                contentClassName: p
              } = n,
              b = "fob" === s ? "fob" : "default";
            N({
              content: g,
              onClose: I,
              rect: m,
              width: o,
              height: d,
              className: u,
              contentClassName: p,
              fadeIn: !1,
              cardIds: l,
              theme: f,
              activeId: e,
              gtm: {
                card_id: e,
                card_name: t?.toLowerCase(),
                position: a
              },
              aspectRatio: b,
              cardDimensions: {
                size: s,
                type: r
              }
            }), w({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: e,
              card_name: t?.toLowerCase(),
              position: a
            })
          }, [l, r, e, n, I, a, N, s, f, t, w]), L = (0, g.useCallback)(async s => {
            s.preventDefault(), s.stopPropagation(), e ? x({
              info: e
            }) : z(), w({
              event: "card_click",
              element_placement: i?.toLowerCase(),
              position: a,
              card_id: e,
              card_name: t?.toLowerCase(),
              link_url: window.location.href
            })
          }, [e, z, a, i, x, t, w]), P = (0, g.useMemo)(() => {
            const e = b?._memoq?.platformTag || "";
            if (b?.platformsAndLinks?.length > 0) {
              const a = b?.platformsAndLinks?.map(({
                  buttonText: e
                }) => e).filter(Boolean),
                s = y(a, {
                  type: "conjunction"
                });
              return e ? h(dt.card_label_platforms_tag, {
                tag: e,
                title: t,
                platformList: s
              }) : h(dt.card_label_platforms, {
                title: t,
                platformList: s
              })
            }
            return e ? h(dt.card_label_tag, {
              tag: e,
              title: t
            }) : !0 === k?.hasPricingOptions ? null : t
          }, [y, h, b?._memoq?.platformTag, b?.platformsAndLinks, k?.hasPricingOptions, t]);
          return (0, g.useEffect)(() => {
            T === e && z()
          }, [T, e]), u || "linkout" === r ? (0, m.jsx)("div", {
            ref: j,
            className: c,
            "data-size": s,
            "data-type": r,
            "data-product": d,
            role: "button",
            "aria-label": P,
            children: o
          }) : (0, m.jsx)("button", {
            ref: j,
            onClick: L,
            className: c,
            "data-size": s,
            "data-type": r,
            "data-product": d,
            tabIndex: "linkout" !== r ? 0 : -1,
            "aria-label": P,
            type: "button",
            children: o
          })
        }, It),
        Lt = {
          card: "rockstargames-sites-legacyc49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-sites-legacyb41eac21ba69f02fe26f8dafa8433207",
          coverCardWrapper: "rockstargames-sites-legacydd482c08ed9fdc5cef20f63dd6720e13",
          expandedContent: "rockstargames-sites-legacyfea5414b5f55420cfcd6c6ee12a393b3",
          imageHolder: "rockstargames-sites-legacyd893e3eab0a5754bb28882ceb8de6b59",
          pillBtn: "rockstargames-sites-legacyf3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-sites-legacya03c60979e8d6882b5b8ce0f0301b7e9",
          text: "rockstargames-sites-legacye961062768d06292ff6cb598ae1c5e69"
        },
        Pt = ({
          payload: e,
          prod: a,
          images: t,
          size: s,
          title: i,
          initial: r,
          animate: n,
          variants: c,
          id: o,
          position: d,
          sectionTitle: l,
          expandedType: f,
          context: u,
          children: p,
          expandedCardContents: b,
          textOverlayProps: k = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          deckProps: v = {},
          modalProps: h = [],
          theme: y,
          cardIds: _,
          pricingOptions: x,
          platformOptions: j = null,
          pricingContainerHeight: N,
          isCoverCard: w = !1,
          isProductCard: S = !1
        }) => {
          const C = (0, z.useTinaComponents)(),
            T = (0, g.useMemo)(() => ({
              ...C,
              HTMLElement: We,
              ImageWithBadge: wa,
              Carousel: Ra,
              GroupOfItems: Za
            }), [C]),
            I = (0, g.useMemo)(() => (0, m.jsx)(Ct, {
              type: f,
              components: T,
              payload: e,
              prod: a,
              images: t,
              size: s,
              title: i,
              context: u,
              textOverlayProps: k,
              initial: r,
              animate: n,
              variants: c,
              theme: y,
              cardIds: _,
              pricingOptions: x,
              id: o,
              pricingContainerHeight: N,
              isCoverCard: w,
              platformOptions: j,
              isProductCard: S,
              children: b
            }), [f, T, e, a, t, s, i, u, k, r, n, c, y, _, x, o, N, w, j, S, b]),
            L = [Lt.card, w ? Lt.coverCardWrapper : ""].join(" ");
          return (0, m.jsx)(zt, {
            id: o,
            position: d,
            sectionTitle: l,
            title: i,
            size: s,
            expandedType: f,
            images: t,
            deckProps: v,
            modalProps: {
              content: I,
              ...h
            },
            className: L,
            isProductCard: S,
            cardIds: _,
            theme: y,
            isCoverCard: w,
            platformOptions: j,
            pricingOptions: x,
            children: p
          })
        },
        Et = {
          foreground: "rockstargames-sites-legacyd858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-sites-legacyd656190323ba10afc580adbf82303a8b",
          layered: "rockstargames-sites-legacya7a1d10cda2bf3de7960b4fadf2f7a4e",
          layeredImageFrame: "rockstargames-sites-legacycfc6074d8b476125230142c79438a249",
          logo: "rockstargames-sites-legacyca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-sites-legacyf5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: Mt,
          Animations: Vt
        } = i,
        {
          getVariant: Bt,
          variants: Dt,
          transitions: At
        } = Vt,
        $t = ({
          image: e,
          zIndex: a,
          prod: t
        }) => {
          const {
            alt: s,
            src: i
          } = (0, z.useImageParser)({
            ...e,
            prod: t
          });
          return (0, m.jsx)("img", {
            src: i.mobile,
            alt: s ?? "",
            style: {
              zIndex: a
            }
          })
        },
        Ft = ({
          images: e = [],
          className: a = "",
          prod: t = !1,
          expandedView: s = !1,
          style: i = {}
        }) => {
          const r = (0, g.useMemo)(() => e?.length && 0 !== e.length ? e.map((e, a) => (0, m.jsx)(Mt, {
            className: (0, Q.default)(Et[e?.specialClass] ?? Et.imageMask, Et[e?.sizeClass], e?.className),
            variants: Bt(e?.specialClass ?? "imageMask", s ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: At.cardOpen,
            children: (0, m.jsx)($t, {
              image: e,
              prod: t,
              zIndex: 100 + a
            })
          }, e.key)) : null, [e, s, t]);
          return (0, m.jsx)(Mt, {
            className: (0, Q.default)(Et.layeredImageFrame, e.length > 1 ? Et.layered : Et.flat, a),
            style: i,
            initial: Dt.fade.in.initial,
            animate: Dt.fade.in.animate,
            transition: At.instantFade,
            "data-expanded-view": s,
            children: r
          })
        },
        Ot = ({
          expandedType: e,
          to: a,
          children: t,
          style: s,
          sectionTitle: i = "",
          id: r,
          cardTitle: n,
          position: c
        }) => {
          const {
            track: o
          } = (0, v.useGtmTrack)(), d = (0, g.useCallback)(() => {
            o({
              event: "card_click",
              link_url: a,
              card_id: r,
              card_name: n,
              element_placement: i.toLowerCase(),
              position: c
            })
          }, [i, a, r, n, i, c]);
          return "linkout" === e && a ? (0, m.jsx)(h.A, {
            to: a,
            style: s,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: d,
            children: t
          }) : t
        },
        Gt = {
          content: "rockstargames-sites-legacyc65ddebc8ee2173143d87e1079f2455a",
          customModalContent: "rockstargames-sites-legacyfc96cdfdaeb2ad81b1b409fcb233657e",
          pillBtn: "rockstargames-sites-legacyddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-sites-legacyb4fbb4006fc27b899dac5e522ef574e3"
        },
        {
          variants: Rt
        } = s,
        Ht = ({
          id: e,
          title: a,
          content: t,
          size: s = "md",
          expandedType: i = "short",
          textOverlayProps: r = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: n = [],
          deckProps: c = {},
          to: o = null,
          tina: d = {},
          position: l = 0,
          sectionTitle: f = "",
          theme: u,
          pricingOptions: p,
          cardIds: b,
          platformOptions: k = null
        }) => {
          const v = (0, z.useTinaPayload)(),
            h = d?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [y, _] = (0, g.useState)(c?.size ?? s),
            [x, j] = (0, g.useState)(0),
            N = void 0 !== p?.hasPricingOptions || void 0 !== k?.hasPlatformOptions;
          return (0, g.useEffect)(() => {
            _(c?.size ?? s)
          }, [c?.size, s]), (0, m.jsx)(Pt, {
            id: e,
            title: a,
            size: y,
            expandedType: i,
            images: n,
            deckProps: c,
            prod: h,
            payload: {
              content: t,
              meta: {}
            },
            variants: Rt.plainCard,
            textOverlayProps: r,
            modalProps: {
              className: Gt.customModal,
              contentClassName: Gt.customModalContent
            },
            expandedCardContents: (0, m.jsx)(Ft, {
              images: n,
              prod: h,
              expandedView: !0
            }, `expanded-${e}`),
            position: l,
            sectionTitle: f,
            theme: u,
            cardIds: b,
            pricingOptions: p,
            platformOptions: k,
            pricingContainerHeight: x,
            isProductCard: N,
            children: (0, m.jsx)(Ot, {
              expandedType: i,
              to: o,
              sectionTitle: f,
              id: e,
              cardTitle: a,
              position: l,
              children: (0, m.jsx)("div", {
                className: Gt.content,
                "data-product": N,
                children: (0, m.jsx)(jt, {
                  title: a,
                  size: y,
                  textOverlayProps: r,
                  pricingOptions: p,
                  platformOptions: k,
                  setPricingContainerHeight: j,
                  children: (0, m.jsx)(Ft, {
                    images: n,
                    prod: h
                  })
                })
              })
            })
          })
        },
        Wt = {
          ps: mt,
          ps3: t(45302),
          ps4: gt,
          ps5: ft,
          switch: yt,
          nintendoswitch: yt,
          nintendoswitch2: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7696cbc8ff9dc5f2ed3f618ea7252e3b.svg",
          xbox: bt,
          xboxone: pt,
          xboxseriesxs: ut,
          xbox360: t(49564),
          pc: kt,
          pcalt: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: t(93221),
          netflix: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc13a3a816ffa3f7e379ea32a79f99a3.svg",
          default: ""
        },
        qt = e => Wt[e] || null,
        Ut = (0, p.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        Yt = {
          applestore: "rockstargames-sites-legacye97115f479fca9697b140bfbfa6534f2",
          border: "rockstargames-sites-legacyaab360f8b5cf6965c56e5f86813b8620",
          borderless: "rockstargames-sites-legacycad0684072c4a89cb09b9f79ddda6f38",
          btnContent: "rockstargames-sites-legacyd4df564f6143ae5909e2bbc95b4a7ebc",
          btnIcon: "rockstargames-sites-legacyf7afeacf3abab7856caca9ea1fad81ad",
          "clr-button": "rockstargames-sites-legacyd4ec60c769b079ac712ea0264480d480",
          cta: "rockstargames-sites-legacya8f295907e9b244767bb48cfc469b480",
          disabled: "rockstargames-sites-legacyd7a212b6e993966a3773c335359586d5",
          googleplay: "rockstargames-sites-legacyad074b742a5ce23c053880b289c2bbe6",
          icon: "rockstargames-sites-legacyc394fea7e071f1213a5d44f5b569bd1a",
          "icon-left": "rockstargames-sites-legacyc73b838b4f69aff2241b814ad1547c48",
          "icon-right": "rockstargames-sites-legacyf0de4560b8a1190f63a65ad1e9fd4e03",
          label: "rockstargames-sites-legacyd75a0e2af2bf8502f8647015e04e10e1",
          lgMax: "rockstargames-sites-legacydf956d5fc70d2129beb1406170402148",
          lgMin: "rockstargames-sites-legacye974b6c740bfac2959d5170bd2d9f3ca",
          netflix: "rockstargames-sites-legacyd82eca980780ce1b5e831106013dba81",
          nintendoswitch: "rockstargames-sites-legacye646f30d1a0c9990c5178e67be93f75e",
          nintendoswitch2: "rockstargames-sites-legacydcdb37a92eeedc0ae18336dd9fb9e39e",
          pc: "rockstargames-sites-legacya1b9c83f518722f01ecb3ece3681c117",
          pillBtn: "rockstargames-sites-legacyf39c827be0d560f2cc376d83e3988fbc",
          platformIcon: "rockstargames-sites-legacyf25581474e97714bc974f3ab51136511",
          primary: "rockstargames-sites-legacya857266233e524e3bb96d327a2095642",
          ps: "rockstargames-sites-legacyd439373e74d36689bc159e9a585db184",
          ps4: "rockstargames-sites-legacye49e2b4d44ce7bab7966fbd9fdfb0760",
          ps5: "rockstargames-sites-legacybaa2b83edce86fda2d9dffb2682092f7",
          selected: "rockstargames-sites-legacya63fd127fc0aab231f6740340658d647",
          smMax: "rockstargames-sites-legacyfce12fc6343fbf09a5bb418bb8107f0b",
          xbox: "rockstargames-sites-legacycf162a09fdf0c180f3f5091077493d98",
          xboxone: "rockstargames-sites-legacye34e2c7fd3dd88f7e7d46f495c15a98d",
          xboxseriesxs: "rockstargames-sites-legacyf5b0bc5e5a291a3ecab7447d33a76e55"
        },
        Xt = ({
          platform: e = "",
          altText: a
        }) => {
          const t = e ? qt(e) : null,
            s = t ? (0, m.jsx)("img", {
              className: Yt.platformIcon,
              src: t,
              alt: a
            }) : null;
          return (0, m.jsx)("span", {
            className: [Yt.btnContent, Yt.platformButton].join(" "),
            children: s
          })
        },
        Qt = (0, w.g)(({
          children: e,
          href: a,
          style: t,
          content: s,
          variant: i = null,
          size: r = "medium",
          icon: n,
          iconPosition: c = "none",
          iconStyle: o,
          badge: d,
          badgeStyle: l,
          platformItem: f,
          platformStyle: u = "border",
          gtm: k = {},
          disabled: h,
          reloadDocument: y = !1,
          className: _,
          role: x = "button"
        }) => {
          const {
            track: j
          } = (0, v.useGtmTrack)(), {
            formatMessage: N
          } = (0, p.useIntl)(), w = (0, b.useDataLayer)(), S = s ?? e, C = (0, g.useRef)(null), T = (0, b.findPlatform)(f)?.friendlyName, I = "platform" === i, z = (0, g.useMemo)(() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch {
              t = e
            }
            return e === t
          }, [a]), L = z ? T : `${T} ${N(Ut.aria_label_open_new_window)}`, P = (0, g.useCallback)(() => {
            h || j({
              event: "cta_other",
              text: s?.toLowerCase() ?? e ?? void 0,
              ...w,
              ...k,
              link_url: a ?? void 0
            })
          }, [k, a, w]), E = () => n ? (0, m.jsx)("span", {
            className: [Yt.icon, `icon-${c}`].join(" "),
            style: o,
            children: (0, m.jsx)("img", {
              className: Yt.btnIcon,
              src: qt(n) || "",
              alt: `${n} icon`
            })
          }) : null, M = () => {
            I && C?.current?.blur()
          };
          return (0, m.jsx)(ae.Link, {
            ref: C,
            to: a,
            target: z ? "_self" : "_blank",
            className: (0, Q.default)(Yt.cta, I && f ? Yt[f] : "", u && Yt[u], h ? Yt.disabled : "", _),
            style: t,
            "data-variant": i,
            "data-size": r,
            onClick: P,
            "aria-label": L,
            reloadDocument: y,
            onPointerUp: M,
            onPointerLeave: M,
            role: x,
            children: I && f ? (0, m.jsx)(Xt, {
              platform: f,
              altText: T || S
            }) : (0, m.jsxs)("div", {
              className: Yt.btnContent,
              children: ["left" === c && E(), (0, m.jsx)("span", {
                className: Yt.label,
                children: S
              }), "right" === c && E(), d ? (0, m.jsx)("span", {
                className: Yt.badge,
                style: l,
                children: d
              }) : null]
            })
          })
        }),
        Zt = ({
          children: e,
          context: a = null,
          game: t,
          image: s = {},
          style: i = {},
          template: r = null,
          theme: n = null,
          reversedOnMobile: c = !1,
          className: o = "",
          id: d = null
        }) => {
          const l = (0, z.useImageParser)(s ?? {}),
            g = {
              ...i
            };
          if (l?.src?.desktop) {
            const e = (s?.style && s?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              a = (s?.style && s?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              t = `var(--grid-background-position, center)/${e??"cover"}`;
            if (g.background = `url(${l?.src?.desktop}) ${a} ${t}`, s?.style && s?.style["--linear-gradient"]) g.background = `linear-gradient(${s?.style["--linear-gradient"]}), url(${l?.src?.desktop}) ${a} ${t}`;
            else if (s?.style && s?.style["--gradient-height"]) {
              const e = s?.style["--gradient-height"] || "3",
                i = s?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                r = s?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              g.background = `linear-gradient(180deg, ${i}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${l?.src?.desktop}) ${a} ${t}`
            }
          }
          return (0, m.jsx)("div", {
            id: d,
            className: (0, Q.default)("rockstargames-sites-legacyda87ead760b989fbe90a0b89c60b0653", c ? "rockstargames-sites-legacydfbda195073626bc6a7690dc73fba873" : "", o),
            "data-game": "community" === r ? null : t,
            style: (0, b.safeStyles)(g),
            "data-context": a,
            "data-template": r,
            "data-theme": n,
            children: e
          })
        };
      var Kt = t(38828);
      const Jt = {
          button: "rockstargames-sites-legacybc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-legacya3e6439dcaa4870840298d683db4831c"
        },
        es = ({
          className: e = "",
          children: a,
          context: t = "",
          to: s,
          onClick: i,
          target: r = "_self",
          ...n
        }) => {
          const c = (0, Q.default)(Jt.button, Jt[t], e);
          return s ? (0, m.jsx)(h.A, {
            ...n,
            to: s,
            className: c,
            onClick: i,
            target: r,
            children: a
          }) : (0, m.jsx)("button", {
            ...n,
            type: "button",
            className: c,
            onClick: i,
            children: a
          })
        },
        as = ({
          className: e
        }) => (0, m.jsxs)("svg", {
          className: e,
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, m.jsx)("path", {
            d: "M3.33203 8.5H12.6654",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, m.jsx)("path", {
            d: "M8 3.83331L12.6667 8.49998L8 13.1666",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }),
        ts = {
          actionBlock: "rockstargames-sites-legacyb1516576d0566f12c906be9e81407ce4",
          actionFooter: "rockstargames-sites-legacyf713e165e153987c3855d93dc1614f4d",
          active: "rockstargames-sites-legacyec9f200e6987aebf6375c999eecd5dc3",
          calloutButton: "rockstargames-sites-legacyb8ed029eb7d9b09c70caa4576bbb4c5a",
          calloutContainer: "rockstargames-sites-legacye8b19ed9af6aedef68997370cd508539",
          calloutHeader: "rockstargames-sites-legacyfb0bbc5bcc4fb2c7d0b8152001df0497",
          calloutHeaderMargins: "rockstargames-sites-legacyd7d4d815f9e36b62ef54befcc89ca296",
          calloutHeaders: "rockstargames-sites-legacye86d59dd2e0ab3c594c33eccde3e8fea",
          calloutLink: "rockstargames-sites-legacybc07ececd6531f5df1c8cba48c846797",
          calloutLinkIcon: "rockstargames-sites-legacydb31e98c20de15e8d5983285bd6ec92e",
          calloutSection: "rockstargames-sites-legacyab742f2f5b6947ec0b2facff923a076f",
          calloutSubheader: "rockstargames-sites-legacyf5fe27da672cf05e64359ada500a6b7a",
          calloutVoteForm: "rockstargames-sites-legacyb5e2fa8800d39c78682d9ce8ce5e53f8",
          downvote: "rockstargames-sites-legacyb1953057e462cdf6c79a4b8e6f2fe91b",
          pillBtn: "rockstargames-sites-legacyc881ff12d1d9fb612b4ddd89178684e4",
          selected: "rockstargames-sites-legacydece7a2abb867cf09add3f7429e7383b",
          upvote: "rockstargames-sites-legacyf8d6a685395153161827b5cf8c6ddb93",
          voteButton: "rockstargames-sites-legacyecdf609ed8d6c4039be969205b7e3ac0"
        },
        ss = ({
          foreign_id: e,
          foreign_type: a
        }) => {
          const {
            track: t
          } = (0, v.useGtmTrack)(), {
            refetch: s
          } = (0, b.useQuery)(Kt.UserGetVote, {
            skip: !0
          }), [i] = (0, b.useMutation)(Kt.UserCastVote), [r, n] = (0, g.useState)(null), c = (0, g.useCallback)(s => {
            (async () => {
              if (s === r && null !== r) n(null);
              else {
                n(s), t({
                  event: "cta_" + (s ? "like" : "dislike"),
                  text: `${a} ${e}`
                });
                const r = {
                  foreignId: e,
                  foreignType: a,
                  vote: s
                };
                await i({
                  variables: r
                })
              }
            })()
          }, [e, a, r]);
          return (0, g.useEffect)(() => {
            e && a && (async () => {
              const t = await s({
                foreignId: e,
                foreignType: a
              });
              n(t?.data?.userGetVote?.vote ?? null)
            })()
          }, [e, a]), (0, m.jsxs)("div", {
            className: ts.calloutVoteForm,
            children: [(0, m.jsx)("button", {
              "aria-label": "upvote",
              className: [ts.upvote, ts.voteButton, r ? ts.active : ""].join(" "),
              name: "upvote",
              onClick: () => c(!0),
              type: "button"
            }), (0, m.jsx)("button", {
              "aria-label": "downvote",
              className: [ts.downvote, ts.voteButton, !1 === r ? ts.active : ""].join(" "),
              name: "downvote",
              onClick: () => c(!1),
              type: "button"
            })]
          })
        },
        is = ({
          action_text: e,
          link: a,
          trackingData: t
        }) => {
          const {
            track: s
          } = (0, v.useGtmTrack)();
          return (0, m.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, m.jsxs)("button", {
              className: ts.calloutLink,
              type: "button",
              onClick: t ? () => s({
                ...t
              }) : () => {},
              children: [e, (0, m.jsx)(as, {
                className: ts.calloutLinkIcon
              })]
            })
          })
        },
        rs = ({
          helperText: e,
          linkText: a,
          link: t,
          trackingData: s
        }) => {
          const {
            track: i
          } = (0, v.useGtmTrack)();
          return (0, m.jsxs)("div", {
            className: ts.actionFooter,
            children: [e, a && " ", a && (0, m.jsx)("a", {
              href: t ?? "",
              onClick: () => i({
                ...s
              }),
              children: a
            })]
          })
        },
        ns = (0, b.withTranslations)(({
          header: e,
          subheader: a,
          type: t,
          action_text: s,
          link: i,
          foreign_id: r = document.location.pathname,
          foreign_type: n = "url",
          className: c = "",
          actionFooterHelperText: o,
          actionFooterLinkText: d,
          actionFooterLink: l,
          trackingData: f = {},
          actionFooterLinkTrackingData: u = {},
          t: p,
          ...h
        }) => {
          const {
            loggedIn: y
          } = (0, v.useRockstarUser)(), {
            track: _
          } = (0, v.useGtmTrack)(), x = document.location.pathname, {
            signInUrl: j
          } = (0, b.useScAuthLinks)(x), {
            ref: N,
            inView: w
          } = (0, k.useInView)({
            threshold: .6
          }), [S, C] = (0, g.useState)(!1);
          let T;
          if ((0, g.useEffect)(() => {
              w && !S && (_({
                event: "page_section_impression",
                element_placement: `callout section - ${h?.sectionName??h?._memoq?.header}`
              }), C(!0))
            }, [w]), !e && !a) return null;
          switch (t) {
            case "vote":
              if (!y) {
                T = (0, m.jsx)(es, {
                  to: j,
                  className: ts.calloutButton,
                  onClick: f ? () => _({
                    ...f
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              T = (0, m.jsx)(ss, {
                foreign_id: r,
                foreign_type: n
              });
              break;
            case "button":
              s && i && (T = (0, m.jsx)(es, {
                to: i,
                className: ts.calloutButton,
                onClick: f ? () => _({
                  ...f
                }) : () => {},
                children: s
              }));
              break;
            case "link":
              s && i && (T = (0, m.jsx)(is, {
                action_text: s,
                link: i,
                trackingData: f
              }));
              break;
            default:
              T = null
          }
          return (0, m.jsx)("div", {
            className: `${ts.calloutContainer} ${c||""}`,
            ref: N,
            children: (0, m.jsxs)("div", {
              className: ts.calloutSection,
              children: [(0, m.jsxs)("div", {
                className: [ts.calloutHeaders, T ? ts.calloutHeaderMargins : ""].join(" "),
                children: [e && (0, m.jsx)("h2", {
                  className: ts.calloutHeader,
                  children: p(e)
                }), a && (0, m.jsx)("h3", {
                  className: ts.calloutSubheader,
                  children: p(a)
                })]
              }), (0, m.jsxs)("div", {
                className: ts.actionBlock,
                children: [T, o && (0, m.jsx)(rs, {
                  helperText: o,
                  linkText: d,
                  link: l,
                  trackingData: u
                })]
              })]
            })
          })
        }),
        cs = (0, p.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            description: "Tracklist",
            defaultMessage: "Tracklist"
          }
        }),
        os = {
          bodySmall: "rockstargames-sites-legacydeed018133fca0148d0bf72fbe95bcd6"
        },
        ds = ({
          track: e,
          artist: a
        }) => (0, m.jsxs)("div", {
          className: os.track,
          children: [(0, m.jsx)("p", {
            children: e
          }), (0, m.jsx)("p", {
            className: os.bodySmall,
            children: a
          })]
        }),
        ls = (0, w.g)(({
          content: e = []
        }) => (0, m.jsxs)("div", {
          className: "rockstargames-sites-legacye2587587f57e43c9ca90d1e16e4a6ca6",
          children: [(0, m.jsx)("h4", {
            className: "rockstargames-sites-legacyef167f82b058360b2b6a3466ca73d7de",
            children: (0, m.jsx)(p.FormattedMessage, {
              ...cs.components_track_list_title
            })
          }), (0, m.jsx)("div", {
            className: "rockstargames-sites-legacybeaa4a0a8d9f3a6ef20ee517f222a3c2",
            children: (0, m.jsx)("div", {
              className: "rockstargames-sites-legacyc06a65e90847e8b44df20f2aceb57038",
              children: e?.map(e => (0, m.jsx)(ds, {
                track: e.track,
                artist: e.artist
              }, e.key))
            })
          })]
        })),
        {
          variants: ms
        } = s;
      t(30631);
      var gs = t(75027),
        fs = t(84220),
        us = t(281);
      const ps = "rockstargames-sites-legacyb7d3d1587271986440f5870d8d02eb3b",
        bs = "rockstargames-sites-legacyfcffcc6e594fbf9a4a6e9ab5a8d034c7",
        ks = {
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
        vs = ({
          title: e = "thumbnail gallery",
          thumbsPerView: a = 3,
          loop: t = !1,
          navigation: s = !1,
          slideChildren: i = [],
          variants: r = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          },
          transition: n = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          }
        }) => {
          const {
            track: c
          } = (0, v.useGtmTrack)(), [o, d] = (0, g.useState)([gs.A, fs.A, Ta.A]), [l, f] = (0, g.useState)(null), [u, p] = (0, g.useState)(null);
          return (0, g.useEffect)(() => {
            const e = [gs.A, fs.A, Ta.A];
            s && e.push(us.A), d(e)
          }, [s]), (0, g.useEffect)(() => {
            if (!i) return;
            const e = i.map((e, a) => (0, m.jsx)(me.qr, {
              children: e
            }, Symbol(a).toString()));
            p(e)
          }, [i]), u ? (0, m.jsxs)(B.motion.div, {
            className: "rockstargames-sites-legacyf2d55de974817e455a162843125a8771",
            variants: r.parent,
            transition: n.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, m.jsx)(B.motion.div, {
              className: ps,
              variants: r.main,
              transition: n.main,
              initial: "initial",
              animate: "animate",
              children: (0, m.jsx)(me.RC, {
                loop: t,
                navigation: s,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: l
                },
                modules: o,
                breakpoints: ks,
                className: ps,
                onSlideNextTransitionEnd: () => {
                  c({
                    event: "carousel_next",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  c({
                    event: "carousel_previous",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  c({
                    event: "carousel_swipe",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                children: u
              })
            }), (0, m.jsx)(B.motion.div, {
              className: bs,
              variants: r.thumbs,
              transition: n.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, m.jsx)(me.RC, {
                threshold: 50,
                onSwiper: f,
                loop: t,
                breakpoints: ks,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: o,
                className: bs,
                children: u
              })
            })]
          }) : null
        },
        hs = ({
          images: e,
          title: a,
          expandedView: t,
          variants: s,
          transition: i
        }) => {
          const r = (0, g.useMemo)(() => e && 0 !== e?.length ? e.map((e, a) => e?.image?.sources ? (0, g.createElement)(wa, {
            ...e,
            key: a,
            style: {
              ...e?.style,
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null) : null, [e]);
          return !r?.length || r?.length < 1 ? null : 1 === r.length ? r : (0, m.jsx)(vs, {
            slideChildren: r,
            title: a,
            navigation: t,
            thumbsVisible: t,
            spaceBetween: 0,
            variants: s,
            transition: i
          })
        },
        ys = {
          customModalContent: "rockstargames-sites-legacyecdc3da21cda9331cebe845898b7fa7b",
          pillBtn: "rockstargames-sites-legacycf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-sites-legacycbdd37e11b752cff831c5a96aeb7dbeb"
        },
        {
          transitions: _s,
          variants: xs
        } = s,
        js = {
          content: "rockstargames-sites-legacydb8d475894c24c580268644776443fa6",
          customModalContent: "rockstargames-sites-legacyc758020ea3f5943e5f8a7d89ade3da69",
          logo: "rockstargames-sites-legacyf5649436402db0dddc6a55b41c5556cc",
          pillBtn: "rockstargames-sites-legacye810afee3cb66fbbb03c473e5aa2f5be",
          secondary: "rockstargames-sites-legacyd761507b70662391f68f5018510655ea",
          selected: "rockstargames-sites-legacye4ad62c1f330692bdb75370f5bbe66eb"
        },
        {
          variants: Ns
        } = s,
        ws = ({
          id: e,
          logoImage: a = null,
          logoImageHeight: t = "auto",
          name: s = null,
          title: i,
          titleSizeClass: r = null,
          content: n,
          ctaText: c,
          ctaURL: o,
          size: d = "md",
          expandedType: l = "short",
          textOverlayProps: f = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: u = [],
          deckProps: b = {},
          to: k = null,
          tina: v = {},
          cardIds: h,
          theme: y
        }) => {
          const _ = (0, p.useIntl)(),
            x = (0, z.useTranslations)({
              payload: v?.payload,
              variables: v?.variables ?? {}
            }),
            [j, N] = (0, g.useState)(b?.size ?? d),
            w = (0, z.useGetCdnSource)(a ?? null),
            S = x?.content?.[0],
            C = S?.body ?? S?._memoq?.body;
          return (0, g.useEffect)(() => {
            N(b?.size ?? d)
          }, [b?.size, d]), (0, m.jsx)(Pt, {
            id: e,
            title: i,
            sectionTitle: s || i,
            size: j,
            expandedType: l,
            images: u,
            deckProps: b,
            payload: {
              content: n,
              meta: {}
            },
            variants: Ns.plainCard,
            textOverlayProps: f,
            modalProps: {
              className: js.customModal,
              contentClassName: js.customModalContent
            },
            expandedCardContents: (0, m.jsx)(Ft, {
              images: u,
              expandedView: !0
            }, `expanded-${e}`),
            theme: y,
            cardIds: h,
            isCoverCard: !0,
            children: (0, m.jsx)(Ot, {
              expandedType: l,
              to: k,
              sectionTitle: s || i,
              children: (0, m.jsxs)("div", {
                className: js.content,
                children: [a && (0, m.jsx)("img", {
                  className: js.logo,
                  alt: "logo",
                  src: w,
                  style: {
                    height: `${t}`
                  }
                }), (0, m.jsx)("h2", {
                  className: r,
                  children: i
                }), C && (0, m.jsx)("p", {
                  children: C
                }), (0, m.jsx)(es, {
                  target: "newtab" === l ? "_blank" : "_self",
                  to: o || void 0,
                  children: c || _.formatMessage(dt.card_learn_more)
                })]
              })
            })
          })
        };
      var Ss = t(84270),
        Cs = t(50628),
        Ts = t(36038),
        Is = t.n(Ts),
        zs = t(60603);
      const Ls = {
          controls: "rockstargames-sites-legacyadd02ff2cfa9b26941d96126a31bc21f",
          controlsButtons: "rockstargames-sites-legacye77442300b4509fe7a0104b3fb4cecf5",
          controlsCurrentBg: "rockstargames-sites-legacycca0f086505f02983f345dfb64c2ca45",
          controlsCurrentBgVisible: "rockstargames-sites-legacyb91004149be94449c7fbfee3d24bde58",
          controlsNextTrack: "rockstargames-sites-legacycd583d32f7692538f7f5d1181943c899",
          controlsPlayPause: "rockstargames-sites-legacyc58746be839199f6102319efb7659a54",
          controlsPlayPausePlaying: "rockstargames-sites-legacycecadc2b92a0597a55ba5870b46706c9",
          controlsPrevTrack: "rockstargames-sites-legacyd84e8c03d27a3038eb54cb7d12c8ac52",
          controlsScrub: "rockstargames-sites-legacyf90cfd862377d31cb5ee1faf9249fd3c",
          controlsScrubTrack: "rockstargames-sites-legacyf4bb886e9545730ccc323f43a1dfb45c",
          controlsTrack: "rockstargames-sites-legacyff717d7c9ac30041034f2c95fd3e3017",
          controlsTrackAnimating: "rockstargames-sites-legacyf09973ae8e0457805bc0a1090d05e444",
          controlsTrackArtist: "rockstargames-sites-legacye0b6ffdc4c40a6992d70395cd98cb6c5",
          controlsTrackBurger: "rockstargames-sites-legacyf3106c22742d7b08e577964a56789504",
          controlsTrackTitle: "rockstargames-sites-legacyf47edf112978c82a9bbfb2476170007f",
          fixedToBottom: "rockstargames-sites-legacyea802f7f67d39cfdd9625cc8de62828f",
          iconBurger: "rockstargames-sites-legacya18e526e94dfd87e9b5696a21c1c7754",
          player: "rockstargames-sites-legacyc7765dd7dbdff24d38ef3326bb8a938b",
          scrollText: "rockstargames-sites-legacyb42c9e9ba3716121d34600c92fdf4398",
          trackActive: "rockstargames-sites-legacya74e95cb6296abf8ca92168db76fecb9",
          trackIndex: "rockstargames-sites-legacyd0322571401b3a4dac22628533213ede",
          trackList: "rockstargames-sites-legacyc7dfe95abfbec1cdef9dfb87d9fd1a1f",
          trackTitle: "rockstargames-sites-legacyeceb3183ee9dc74e33d4184b307ba923",
          tracks: "rockstargames-sites-legacyb4036f5fe1d1ab9674cc7c6e40f9a53c",
          tracksOpen: "rockstargames-sites-legacya9a553961300b8ee030d0c90ac613c4c"
        },
        Ps = ({
          src: e
        }) => (0, m.jsx)("div", {
          className: Ls.cover,
          style: {
            background: `url(${e}) center/cover`
          }
        }),
        Es = ({
          timing: e = {
            current: 0,
            duration: 0
          },
          playing: a,
          audioRef: t,
          setPlaying: s,
          tracksOpen: i,
          setTracksOpen: r,
          trackData: n,
          setTrackId: c,
          trackBounds: o,
          setAutoNext: d
        }) => {
          const l = (0, g.useRef)(null),
            f = (0, g.useRef)(null),
            u = (0, g.useRef)(null),
            [p, b] = (0, g.useState)(null),
            [k, v] = (0, g.useState)(!1),
            h = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, g.useEffect)(() => {
            if (!f.current || !u.current) return;
            const e = () => {
              u.current && f.current && b(u.current.clientWidth > f.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }, [u, f, e]), (0, g.useEffect)(() => {
            if (!l.current || !e?.duration) return;
            let a = null;
            const s = new(Is())(l.current),
              i = a => {
                if (l.current) {
                  const s = l.current.clientWidth;
                  if (!l.current.contains(a.srcEvent.target)) return;
                  const i = Math.max(0, a.srcEvent.offsetX),
                    r = Number(i / s * e.duration);
                  t.currentTime = r
                }
              },
              r = () => {
                a ? t.pause() : t.play()
              },
              n = () => {
                a = t.paused, t.pause()
              };
            return s.on("panstart", n), s.on("panleft", i), s.on("panright", i), s.on("panend", r), s.on("tap", i), () => {
              s.off("panstart", n), s.off("panleft", i), s.off("panright", i), s.off("panend", r), s.off("tap", i)
            }
          }, [l.current, e.duration]), (0, g.useEffect)(() => {
            const e = Number(t?.currentTime);
            (a || !isNaN(e) && 0 !== e) && v(!0)
          }, [a, t?.currentTime]), (0, m.jsxs)("div", {
            className: Ls.controls,
            style: {
              "--track-color": n.color,
              "--track-mix-blend-mode": n.mix_blend_mode,
              "--current-pct": e.current / e.duration
            },
            children: [(0, m.jsx)("div", {
              className: [Ls.controlsCurrentBg, k ? Ls.controlsCurrentBgVisible : ""].join(" ")
            }), (0, m.jsx)("div", {
              className: Ls.controlsTrack,
              ref: f,
              children: (0, m.jsx)("span", {
                className: [Ls.controlsTrackTitle, p ? Ls.controlsTrackAnimating : ""].join(" "),
                ref: u,
                children: n.title
              })
            }), (0, m.jsxs)("div", {
              className: Ls.controlsButtons,
              children: [(0, m.jsx)("div", {
                className: Ls.controlsPrevTrack,
                onClick: () => {
                  o && (c(o[0]), d(!0), s(!0))
                }
              }), (0, m.jsx)("div", {
                className: [Ls.controlsPlayPause, a ? Ls.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  s(!a)
                }
              }), (0, m.jsx)("div", {
                className: Ls.controlsNextTrack,
                onClick: () => {
                  o && (c(o[1]), d(!0), s(!0))
                }
              })]
            }), (0, m.jsx)("div", {
              "data-active": i ? "" : null,
              className: Ls.controlsTrackBurger,
              children: (0, m.jsx)("div", {
                className: Ls.iconBurger,
                onClick: () => {
                  r(!i)
                }
              })
            }), (0, m.jsxs)("div", {
              className: Ls.controlsScrub,
              children: [(0, m.jsx)("span", {
                children: h(e.current)
              }), (0, m.jsx)("div", {
                className: Ls.controlsScrubTrack,
                ref: l
              }), (0, m.jsx)("span", {
                children: h(e.duration)
              })]
            })]
          })
        },
        Ms = ({
          tracks: e,
          trackId: a,
          setTrackId: t,
          tracksOpen: s,
          setTracksOpen: i,
          setPlaying: r,
          setAutoNext: n
        }) => (0, m.jsxs)("div", {
          className: Ls.tracks,
          children: [(0, m.jsx)("h4", {
            children: "Tracks"
          }), (0, m.jsx)("div", {
            className: Ls.trackBurger,
            onClick: () => {
              i(!s)
            }
          }), (0, m.jsx)("div", {
            className: Ls.trackList,
            children: e.map((e, s) => (0, m.jsxs)("a", {
              style: {
                "--highlight-color": e.color
              },
              className: a === e.id ? Ls.trackActive : "",
              onClick: () => {
                t(e.id), r(!0), n(!0)
              },
              children: [(0, m.jsx)("span", {
                className: Ls.trackIndex,
                children: String(s + 1).padStart(2, "0")
              }), (0, m.jsx)("span", {
                className: Ls.trackTitle,
                children: e.title
              }), (0, m.jsx)("span", {
                className: Ls.trackTime,
                children: e.duration
              })]
            }, e.id))
          })]
        }),
        Vs = ({
          id: e,
          className: a = ""
        }) => {
          const {
            data: t
          } = (0, b.useQuery)(zs.GetAudioAlbum, {
            variables: {
              id: e
            }
          }), [s, i] = (0, g.useState)(), [r, n] = (0, g.useState)(), [c, o] = (0, g.useState)(), [d, l] = (0, g.useState)(!1), [f, u] = (0, g.useState)(!1), [p, k] = (0, g.useState)(), [v, h] = (0, g.useState)({
            current: 0,
            duration: 0
          }), [y, _] = (0, g.useState)(!0);
          return (0, g.useEffect)(() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (n(a.data.rockstarAudioPlayerPlayTrackId), _(!1), u(!0)), f && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && u(!1)
              };
            return f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }, [f]), (0, g.useEffect)(() => {
            if (!p) return;
            const e = () => {
                isNaN(p.duration) || h({
                  duration: p?.duration ?? 0,
                  current: p?.currentTime ?? 0
                })
              },
              a = () => {
                y && s && n(s[1])
              };
            return p.addEventListener("loadedmetadata", e), p.addEventListener("timeupdate", e), p.addEventListener("ended", a), () => {
              p.removeEventListener("loadedmetadata", e), p.removeEventListener("timeupdate", e), p.removeEventListener("ended", a)
            }
          }, [p, s, y]), (0, g.useEffect)(() => {
            f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }, [f]), (0, g.useEffect)(() => {
            p && (f ? p.play() : p.pause(), l(!1))
          }, [f, p, c?.id]), (0, g.useEffect)(() => {
            if (!r) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex(e => e.id === r);
            i([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), o(e[a])
          }, [r]), (0, g.useEffect)(() => {
            t && n(t.audioAlbum.tracks[0].id)
          }, [t]), c ? (0, m.jsxs)("div", {
            className: [Ls.player, Ls[a], d ? Ls.tracksOpen : ""].join(" "),
            children: [(0, m.jsx)("audio", {
              ref: e => {
                k(e)
              },
              src: c.mp3_src
            }), (0, m.jsx)(Ms, {
              tracks: t.audioAlbum.tracks,
              setTrackId: n,
              trackId: r,
              tracksOpen: d,
              setTracksOpen: l,
              setPlaying: u,
              setAutoNext: _
            }), (0, m.jsx)(Ps, {
              src: c.cover_src
            }), (0, m.jsx)(Es, {
              setTrackId: n,
              trackBounds: s,
              tracksOpen: d,
              setTracksOpen: l,
              playing: f,
              setPlaying: u,
              timing: v,
              trackData: c,
              audioRef: p,
              setAutoNext: _
            })]
          }) : null
        };
      var Bs = t(7503),
        Ds = t(77278);
      const As = (0, p.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        $s = {
          blackBtn: "rockstargames-sites-legacyd3207a3907ff5e6cc1498c67d5562087",
          btnText: "rockstargames-sites-legacye146813e6b911567a15379239351bb9f",
          btnTexticon: "rockstargames-sites-legacyadd785fa73d6a7f8cdf490add2819974",
          iconBtn: "rockstargames-sites-legacya305be36306fd7f0977b052ccab54910",
          link: "rockstargames-sites-legacya73b743df91203999c432aceb1093e62",
          pc: "rockstargames-sites-legacyc4a7b17bb99afb02a9f9b9b133be7844",
          pillBtn: "rockstargames-sites-legacya76545929bba4f1522661c9f297ea3c5",
          plusButton: "rockstargames-sites-legacyb35e9ba36ecaabe08c02c44808110761",
          ps4: "rockstargames-sites-legacyaf1b302b53e77d0da20f92de2973fd29",
          ps5: "rockstargames-sites-legacyb5164622a2b180ed2b04eab4d489763b",
          selected: "rockstargames-sites-legacye5b12527bec7eae7fce9642c9827cc3b",
          small: "rockstargames-sites-legacyb3ba679464048120f8440e7ae0d14086",
          transparentBtn: "rockstargames-sites-legacyd4515b6bf9a4c714239cac9e27932235",
          whiteBtn: "rockstargames-sites-legacyd94aba4fb4bae812e14f8715816752c2",
          xboxone: "rockstargames-sites-legacycadebea37980f01b56560143374013b3",
          xboxseriesxs: "rockstargames-sites-legacyc28e2bcbd4ed4fc95b67860cb7033999"
        },
        Fs = ({
          children: e,
          className: a,
          onClick: t,
          style: s,
          ariaLabel: i
        }) => (0, m.jsx)("button", {
          className: a,
          onClick: t,
          style: s,
          type: "button",
          "aria-label": i,
          children: e
        }),
        Os = ({
          children: e,
          className: a,
          onClick: t,
          style: s,
          to: i,
          ariaLabel: r
        }) => (0, m.jsx)(ae.NavLink, {
          className: a,
          onClick: t,
          style: s,
          to: i,
          "aria-label": r,
          children: e
        }),
        Gs = ({
          btnColor: e = "#fff",
          className: a = "",
          consoleBtn: t,
          icon: s = "",
          img: i,
          labelColor: r = "#000",
          onClick: n,
          secondText: c,
          size: o,
          text: d,
          to: l,
          type: g = "",
          ariaLabel: f
        }) => {
          const {
            formatMessage: u
          } = (0, p.useIntl)(), b = [$s.plusButton, $s[g] ?? "", $s[o] ?? "", $s[t] ?? "", a].join(" "), k = {
            "--hvr-color": e ?? r,
            "--hvr-bg-color": r ?? e,
            "--hvr-border-color": e ?? r
          }, v = (0, m.jsxs)(m.Fragment, {
            children: [i ? (0, m.jsx)("img", {
              src: i,
              alt: ""
            }) : "", (0, m.jsxs)("div", {
              className: $s.btnText,
              icon: s,
              children: [d, c ? (0, m.jsx)("span", {
                children: c
              }) : ""]
            })]
          });
          if (l) {
            if (l.startsWith("http")) {
              const e = l.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, m.jsxs)("a", {
                href: l,
                target: e,
                onClick: n,
                onKeyDown: n,
                className: b,
                "aria-label": f,
                tabIndex: 0,
                children: [v, "_blank" === e && (0, m.jsx)(Ds.Gr, {
                  label: u(As.aria_label_open_new_window)
                })]
              })
            }
            return (0, m.jsx)(Os, {
              className: b,
              onClick: n,
              style: {
                ...k
              },
              to: l,
              ariaLabel: f,
              children: v
            })
          }
          return (0, m.jsx)(Fs, {
            className: b,
            onClick: n,
            style: {
              ...k
            },
            ariaLabel: f,
            children: v
          })
        },
        Rs = ({
          buttons: e = [],
          className: a
        }) => e.length ? (0, m.jsx)("div", {
          className: (0, Q.default)("rockstargames-sites-legacybbd74dec556da7f5c06710c72c662f8a", a),
          children: e.map(({
            icon: e,
            title: a,
            to: t
          }, s) => a ? (0, m.jsx)(Gs, {
            icon: e,
            text: a,
            to: t
          }, s) : "")
        }) : null;
      var Hs = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        Ws = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const qs = ({
          tagSize: e,
          platform: a,
          className: t = ""
        }) => {
          const {
            src: s,
            alt: i
          } = ((e, a) => {
            const t = "small" === a;
            switch (e) {
              case "pc":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
                };
              case "pcalt":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
                };
              case "ps4":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
                };
              case "ps5":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
                };
              case "xboxone":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
                };
              case "xboxsx":
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
                };
              case "ps":
              case "np":
                return {
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
                };
              case "xbl":
                return {
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
                };
              default:
                return {
                  src: "", alt: ""
                }
            }
          })(a, e);
          return (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("img", {
              className: (0, Q.default)("rockstargames-sites-legacyb0ff0045ed0326a46ca1e0867d2050c1", t),
              "data-testid": "platform-tag",
              "data-platform": a,
              "data-tag-size": e,
              src: s,
              alt: "",
              "aria-hidden": !0
            }), (0, m.jsx)(qe.s6, {
              children: i
            })]
          })
        },
        Us = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        Ys = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        Xs = (0, g.forwardRef)(function({
          rank: e,
          size: a = "large",
          className: t,
          alt: s,
          testId: i,
          ...r
        }, n) {
          const c = Us(e),
            o = (0, Ue.v6)(r, {
              className: (0, Q.default)("rockstargames-sites-legacyf54750ef62f8600000c94f0caba85986", t),
              "data-testid": i
            });
          return (0, m.jsxs)("div", {
            "data-size": a,
            ref: n,
            ...o,
            children: [(0, m.jsx)("svg", {
              role: "svg",
              "aria-label": s,
              className: "rockstargames-sites-legacya3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": Us(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, m.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: c
              })
            }), (0, m.jsx)("span", {
              className: "rockstargames-sites-legacyd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": Ys.RANK_VALUE,
              children: e
            })]
          })
        }),
        Qs = (0, p.defineMessages)({
          character_card_a11y_intro: {
            id: "character_card_a11y_intro",
            description: "The a11y intro for the charcter card.",
            defaultMessage: "Character Card:"
          },
          character_card_a11y_player: {
            id: "character_card_a11y_player",
            description: "The a11y player name for the charcter card.",
            defaultMessage: "Player {player}."
          },
          character_card_a11y_rank: {
            id: "character_card_a11y_rank",
            description: "The a11y rank for the charcter card.",
            defaultMessage: "Rank {rank}."
          }
        }),
        Zs = "rockstargames-sites-legacyb2d75ee6d468c7fde9ad28ba90ca2804",
        Ks = (0, g.forwardRef)(function({
          children: e,
          className: a,
          testId: t,
          ...s
        }, i) {
          const {
            formatMessage: r
          } = (0, p.useIntl)(), n = (0, Ue.v6)(s, {
            "data-testid": t,
            className: (0, Q.default)("rockstargames-sites-legacyd738b88fa09e0960678501900af6dae1", a)
          });
          return (0, m.jsxs)("div", {
            ref: i,
            ...n,
            children: [(0, m.jsx)(qe.s6, {
              children: r(Qs.character_card_a11y_intro)
            }), e]
          })
        }),
        Js = (0, w.g)(Ks),
        ei = (0, g.forwardRef)(function({
          src: e,
          alt: a,
          testId: s,
          ...i
        }, r) {
          const [n, c] = (0, g.useState)(e), o = (0, Ue.v6)(i, {
            className: "rockstargames-sites-legacya0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": s
          });
          return e ? (0, m.jsx)("div", {
            ref: r,
            ...o,
            children: (0, m.jsx)("img", {
              className: Zs,
              src: n,
              alt: a ?? "",
              onError: () => c(t(14804)),
              "aria-hidden": !a
            })
          }) : (0, m.jsx)("div", {
            ref: r,
            ...o,
            children: (0, m.jsx)("img", {
              className: Zs,
              src: t(14804),
              alt: a ?? "",
              "aria-hidden": !a
            })
          })
        }),
        ai = (0, g.forwardRef)(function({
          asChild: e,
          testId: a,
          className: t,
          ...s
        }, i) {
          const r = e ? qe.DX : "div",
            n = (0, Ue.v6)(s, {
              className: (0, Q.default)("rockstargames-sites-legacyfbe57172570573357e040787d9307835", t),
              "data-testid": a
            });
          return (0, m.jsx)(r, {
            ref: i,
            ...n
          })
        }),
        ti = (0, g.forwardRef)(function({
          children: e,
          testId: a,
          ...t
        }, s) {
          const i = (0, Ue.v6)(t, {
            className: "rockstargames-sites-legacyd9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": a
          });
          return (0, m.jsx)("div", {
            ref: s,
            ...i,
            children: e
          })
        }),
        si = ({
          testId: e,
          ...a
        }) => {
          const t = (0, Ue.v6)(a, {
            "data-testid": e
          });
          return (0, m.jsx)(qs, {
            ...t
          })
        },
        ii = (0, g.forwardRef)(function({
          children: e,
          testId: a,
          userName: t,
          ...s
        }, i) {
          const {
            formatMessage: r
          } = (0, p.useIntl)(), n = (0, Ue.v6)(s, {
            "data-testid": a
          });
          return (0, m.jsxs)("div", {
            className: "rockstargames-sites-legacycd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...n,
            ref: i,
            children: [(0, m.jsx)(qe.s6, {
              children: r(Qs.character_card_a11y_player, {
                player: t
              })
            }), (0, m.jsx)("div", {
              "aria-hidden": !0,
              children: e
            })]
          })
        }),
        ri = (0, g.forwardRef)(function({
          testId: e,
          children: a,
          ...t
        }, s) {
          const i = (0, Ue.v6)(t, {
            "data-testid": e
          });
          return (0, m.jsx)("div", {
            ...i,
            ref: s,
            children: a
          })
        }),
        ni = ({
          testId: e,
          ...a
        }) => {
          const {
            formatMessage: t
          } = (0, p.useIntl)(), s = (0, Ue.v6)(a, {
            "data-testid": e
          });
          return (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)(qe.s6, {
              children: t(Qs.character_card_a11y_rank, {
                rank: a.rank
              })
            }), (0, m.jsx)(Xs, {
              ...s,
              "aria-hidden": !0
            })]
          })
        },
        ci = (0, g.forwardRef)(function({
          asChild: e,
          children: a,
          testId: t,
          ...s
        }, i) {
          const r = e ? qe.DX : "div",
            n = (0, Ue.v6)(s, {
              className: "rockstargames-sites-legacye8daa457f5b09f3a79915a1355aa3332",
              "data-testid": t
            });
          return (0, m.jsx)(r, {
            ref: i,
            ...n,
            children: a
          })
        }),
        oi = (0, t(54472).FF)(),
        di = e => e.some(e => !e),
        li = ({
          condition: e = null,
          children: a
        }) => {
          const [t, s] = (0, g.useState)(!1), i = (e => {
            const [a] = (0, ae.useSearchParams)(), [t, s] = (0, g.useState)(null), i = (0, v.useRockstarUser)(), {
              loggedIn: r,
              data: n
            } = i, {
              hasGtaPlus: c
            } = n ?? {};
            return (0, g.useEffect)(() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              oi.applyFilters("preview_conditions", e);
              const i = [];
              return e.forEach(e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (i.push(!0), !0) : (i.push(!1), !1);
                if (di(i)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    i.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    i.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    i.push(!0 === c);
                    break;
                  case "user:not:gtaPlus":
                    i.push(!1 === c || void 0 === c);
                    break;
                  default:
                    i.push(!1)
                }
                return null
              }), s(!di(i)), () => {}
            }, [a, e, c, i, r]), t
          })(e);
          return (0, g.useEffect)(() => {
            s(i)
          }, [i]), (0, g.useMemo)(() => t ? a : null, [t])
        },
        mi = (0, b.withTranslations)(({
          children: e
        }) => g.Children.map(g.Children.toArray(e), e => (0, m.jsx)(li, {
          ...e?.props
        })));
      var gi = t(15087),
        fi = t(56386),
        ui = t.n(fi);
      const pi = ({
        isMulti: e,
        allowSelectAll: a,
        label: t,
        miscProps: s
      }) => {
        const [i, r] = (0, g.useState)(""), n = (0, g.useMemo)(() => ui()().getData(), []);
        return (0, m.jsx)(gi.A, {
          unstyled: !0,
          value: i,
          isMulti: e,
          allowSelectAll: a,
          options: n,
          placeholder: t,
          onChange: e => {
            return a = e?.target?.value, void r(a);
            var a
          },
          classNamePrefix: "country-select",
          ...s
        })
      };
      var bi = t(43091);
      const ki = ({
        cookieName: e,
        cookieValue: a,
        trueComponent: t,
        falseComponent: s
      }) => {
        const i = (e => {
            const a = document.cookie.split("; "),
              t = `${e}=`,
              s = a.find(e => e.startsWith(t));
            return s?.substring(t.length, s.length)
          })(e),
          r = new URLSearchParams(window.location.search).get(e);
        return r && ((e, a) => {
          e && a && (document.cookie = `${e}=${a}; domain=${(0,bi.F)()}; path=/;`)
        })(e, r), i === a || r === a ? t : s
      };
      var vi = t(13596),
        hi = t(17679);
      const yi = (0, g.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          label: t,
          href: s,
          target: i,
          justifySelf: r = "center",
          ...n
        }, c) {
          const o = (0, hi.m)(a, "normal"),
            d = (0, Ue.v6)({
              "data-testid": e,
              className: o
            }, n);
          return (0, m.jsx)(vi.$n, {
            ref: c,
            ...d,
            asChild: !0,
            children: (0, m.jsx)(ae.Link, {
              to: s,
              target: i,
              style: {
                justifySelf: r
              },
              children: t
            })
          })
        }),
        _i = (0, g.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          href: t,
          target: s,
          justifySelf: i = "center",
          ...r
        }, n) {
          const c = (0, hi.m)(a, "normal"),
            o = (0, Ue.v6)({
              "data-testid": e,
              className: c
            }, r);
          return (0, m.jsx)(vi.K0, {
            ref: n,
            ...o,
            asChild: !0,
            children: (0, m.jsx)(ae.Link, {
              to: t,
              target: s,
              style: {
                justifySelf: i
              }
            })
          })
        }),
        xi = ({
          disclaimer: e,
          text: a = null,
          title: t,
          className: s = "",
          style: i = {}
        }) => {
          const r = a ?? e?.text ?? null,
            n = t ? `<h5>${t}</h5>${r}` : r;
          return r ? (0, m.jsx)("div", {
            className: (0, Q.default)("rockstargames-sites-legacydabdd1de832b01e0bfed17e54d2c48f3", s),
            dangerouslySetInnerHTML: {
              __html: n
            },
            style: i
          }) : null
        },
        ji = G(({
          brands: e = [],
          content: a,
          ctas: t = [],
          disclaimer: s,
          image: i,
          large: r = !1,
          title: n,
          image_on_right: c = !1,
          style: o = {},
          className: d = "",
          ...l
        }) => {
          const {
            track: f
          } = (0, v.useGtmTrack)(), {
            ref: u,
            inView: p
          } = (0, k.useInView)({
            threshold: .6
          }), [b, h] = (0, g.useState)(!1), y = (0, z.useGetCdnSource)(i?.full_src ?? null) ?? null;
          return (0, g.useEffect)(() => {
            p && !b && (f({
              event: "page_section_impression",
              element_placement: l?._memoq?.title?.toLowerCase()
            }), h(!0))
          }, [p]), (0, m.jsxs)("div", {
            className: (0, Q.default)("rockstargames-sites-legacye74584d7bd5e5fb4f95b021aea5552e9", r ? "rockstargames-sites-legacyecfb600d2677601c52a9b2ba82ea92a0" : "", c ? "rockstargames-sites-legacyc1c30f86159b786afa96b64de61d4581" : "", y ? "" : "rockstargames-sites-legacya66c759349419a25e6ac54202d7fc085", d),
            style: o,
            ref: u,
            children: [y ? (0, m.jsx)("div", {
              className: "rockstargames-sites-legacyc6a4abbe875f9c0cadd82e5b2b2ad16c",
              style: {
                background: `url(${y}) no-repeat center/cover`
              }
            }) : "", (0, m.jsxs)("div", {
              className: "rockstargames-sites-legacyd14a6281007b78ed0259affd98faeada",
              children: [(0, m.jsx)(Bs.A, {
                brands: e
              }), (0, m.jsxs)("div", {
                className: "rockstargames-sites-legacybfdc6a008924ac08afb945e8c501d855",
                children: [(0, m.jsx)("h2", {
                  className: "rockstargames-sites-legacybe9969843594b0b04199cf75f098d91c",
                  children: n
                }), a ? (0, m.jsx)("div", {
                  className: "rockstargames-sites-legacyea4015cd0c04b61c6b1f8a4a4a92e337",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                }) : ""]
              }), (0, m.jsx)(Rs, {
                ctas: t
              }), (0, m.jsx)(xi, {
                disclaimer: s
              })]
            })]
          })
        }),
        Ni = {
          bg: "rockstargames-sites-legacyd1579fc7a24c295dbe890d8aae408666",
          bgDesktop: "rockstargames-sites-legacya2a6f7c576116735efd4216aeff67734",
          bgMobile: "rockstargames-sites-legacyea7956f9173046a1ed7292458dfb5b9e",
          imageTextGroupGroup: "rockstargames-sites-legacybde0bad35b79e73435595e8f30e4adfc",
          pillBtn: "rockstargames-sites-legacyfa50d8c1862c94f2cd3200103d1d0e69",
          selected: "rockstargames-sites-legacyde81b5eeed31c861fe39ee5062dee5a7"
        },
        wi = ({
          bg: e,
          image_text_groups: a = [],
          style: t = {},
          className: s = ""
        }) => {
          const i = (0, z.useGetCdnSource)(e?.image?.mobile?.full_src ?? null),
            r = (0, z.useGetCdnSource)(e?.image?.desktop?.full_src ?? null) ?? i;
          return a.length ? (0, m.jsxs)("div", {
            className: (0, Q.default)(Ni.imageTextGroupGroup, s),
            style: t,
            children: [i ? (0, m.jsx)("div", {
              className: [Ni.bgMobile, Ni.bg].join(" "),
              style: {
                background: `url(${i}) no-repeat center/cover`
              }
            }) : "", r ? (0, m.jsx)("div", {
              className: [Ni.bgDesktop, Ni.bg].join(" "),
              style: {
                background: `url(${r}) no-repeat center/cover`
              }
            }) : "", a.map((e, a) => (0, g.createElement)(ji, {
              ...e,
              key: a
            }))]
          }) : null
        },
        Si = "rockstargames-sites-legacya19bcd2b98d91e60c43b9de146e20f4e",
        Ci = ({
          color: e
        }) => (0, m.jsxs)("div", {
          className: "rockstargames-sites-legacye83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, m.jsx)("div", {
            className: Si
          }), (0, m.jsx)("div", {
            className: Si
          }), (0, m.jsx)("div", {
            className: Si
          })]
        }),
        Ti = {
          dropdownWrapper: "rockstargames-sites-legacybbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-sites-legacya9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-sites-legacydf17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-sites-legacycb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-sites-legacyfe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        Ii = ({
          children: e,
          className: a,
          title: t
        }) => {
          const [s, i] = (0, g.useState)(!1);
          return (0, m.jsx)(je(), {
            active: s,
            focusTrapOptions: {
              onDeactivate: () => i(!1),
              clickOutsideDeactivates: !0
            },
            children: (0, m.jsxs)("div", {
              className: [Ti.dropdownWrapper, s ? Ti.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, m.jsx)("button", {
                className: Ti.opener,
                "aria-expanded": s,
                onClick: () => i(!s),
                children: t
              }), s && (0, m.jsx)("div", {
                className: Ti.items,
                onClick: () => i(!1),
                children: e
              })]
            })
          })
        },
        zi = ({
          caption: e,
          children: a,
          ...t
        }) => e ? (0, m.jsxs)("figure", {
          ...t,
          children: [a, (0, m.jsx)("figcaption", {
            dangerouslySetInnerHTML: {
              __html: e
            }
          })]
        }) : a,
        Li = ({
          componentTitle: e,
          type: a,
          items: t
        }) => t?.length ? (0, m.jsx)("div", {
          className: "rockstargames-sites-legacyaee2a98f97e777758e2d9bec034314ee",
          type: a,
          children: (0, m.jsxs)(Zt, {
            children: [e && (0, m.jsx)("h3", {
              children: e
            }), (0, m.jsx)(Zt, {
              className: "rockstargames-sites-legacydba17b5c55f8d40e2600765f1a60d6af",
              children: t.map((e, a) => {
                return e?.embed ? (0, m.jsx)(zi, {
                  caption: e?.caption,
                  children: (0, m.jsx)("div", {
                    className: "rockstargames-sites-legacyf0cd8278232673606f9c1715bd4950f6",
                    dangerouslySetInnerHTML: {
                      __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                    }
                  }, `${e?.key??a}_div`)
                }, e?.key ?? a) : e?.text ? (0, m.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: e.text
                  }
                }, e?.key ?? a) : void 0;
                var t
              })
            })]
          })
        }) : null,
        Pi = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: .9,
              delay: .3
            }
          }
        },
        Ei = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            gridGap: "var(--grid-gap-sm)",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            gridGap: 0,
            transition: {
              type: "spring",
              stiffness: 650,
              damping: 45
            },
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        Mi = {
          applestore: "rockstargames-sites-legacye68d88a0e9f24a2f0bcf7da8a0e1b388",
          buttonText: "rockstargames-sites-legacyc240c5768c5acdd2bc6022568ef877f0",
          closeButton: "rockstargames-sites-legacyee432a5defea7b8181973d3a9ad3190b",
          container: "rockstargames-sites-legacyfc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-sites-legacyb12c469ae4536819db4253c10b2cd11d",
          expandedArea: "rockstargames-sites-legacye752e3ffffce454f84c993a62a279f87",
          expandedButton: "rockstargames-sites-legacybb945d977a4db6fdd9206dbfe8581304",
          googleplay: "rockstargames-sites-legacyd0d623dce429f6ae2fd898e1d551257e",
          pc: "rockstargames-sites-legacyffc20241c500599d4ee134fcffd66961",
          pcalt: "rockstargames-sites-legacya2ef6590cf9e642c1a2a8c589a792928",
          pillBtn: "rockstargames-sites-legacyed7115facef4ace39e8c7486e9066fe1",
          platformButton: "rockstargames-sites-legacyfa40c93ee13fdec88bb8dc08ce36353a",
          platformButtons: "rockstargames-sites-legacye950c05307f67ce36d561a09027fd844",
          ps: "rockstargames-sites-legacydd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-sites-legacyed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-sites-legacyf046700558956d566323b32d87c4a54f",
          selected: "rockstargames-sites-legacye7705468e2dbcfc45d23ef5047671698",
          switch: "rockstargames-sites-legacye8e3ea0f1d334667f3928f696308060e",
          unexpandedButton: "rockstargames-sites-legacyeaa10e0601812da4ea334974165d92ec",
          xbox: "rockstargames-sites-legacye6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-sites-legacyc03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-sites-legacydde1b553776bdd59373d22a43479de29"
        },
        Vi = ({
          buttonText: e = "",
          link: a = "",
          platform: s = "",
          target: i = null,
          onClick: r,
          tabIndex: n,
          className: c,
          ...o
        }) => {
          const d = i ?? (a.startsWith(document.location.origin) ? "_self" : "_blank"),
            l = [Mi.platformButton, Mi[s], c].join(" "),
            g = s ? t(5328)(`./${s}.svg`) : null,
            f = (0, m.jsxs)(m.Fragment, {
              children: [g ? (0, m.jsx)("img", {
                src: g,
                alt: e
              }) : "", !g && (0, m.jsx)("div", {
                className: Mi.buttonText,
                children: e
              })]
            });
          return a ? a.startsWith("http") ? (0, m.jsx)("a", {
            href: a,
            className: l,
            target: d,
            onClick: r,
            "aria-label": e,
            tabIndex: n,
            ...o,
            children: f
          }) : (0, m.jsx)(ae.NavLink, {
            className: l,
            onClick: r,
            to: a,
            "aria-label": e,
            ...o,
            children: f
          }) : (0, m.jsx)("button", {
            className: l,
            onClick: r,
            "aria-label": e,
            tabIndex: n,
            ...o,
            children: f
          })
        },
        Bi = ({
          variant: e,
          buttonText: a = "Subscribe",
          buttonClassName: s,
          className: i,
          children: r,
          platformsAndLinks: n = [],
          trackingType: c = "buy",
          trackingParent: o,
          target: d = null,
          trackingOId: l = null,
          returnUrl: f = null
        }) => {
          const u = (0, b.useRockstarTokenPing)(),
            [p, k] = (0, g.useState)(!1),
            [h, y] = (0, g.useState)(!1),
            [_, x] = (0, g.useState)(200),
            {
              track: j
            } = (0, v.useGtmTrack)(),
            N = (0, g.useRef)(null),
            w = (0, g.useRef)(null),
            S = (0, g.useRef)(null),
            C = (0, g.useRef)(null),
            [T, I] = (0, g.useState)(0),
            z = (0, g.useRef)(null),
            L = () => {
              S.current?.blur(), y(!0), k(!1), z.current = window.setTimeout(() => {
                w.current?.focus()
              }, 30)
            },
            P = (0, g.useCallback)(() => {
              j({
                element_placement: o?.toLowerCase(),
                event: "cta_other",
                text: "close expanding platform button"
              }), L()
            }, [j, o]);
          (0, g.useEffect)(() => () => {
            null !== z.current && window.clearTimeout(z.current)
          }, []), (0, g.useLayoutEffect)(() => {
            p && C.current ? I(C.current.scrollHeight) : I(0)
          }, [p]), (0, g.useEffect)(() => {
            if (!p) return;
            const e = e => {
              const a = e.target;
              N.current && !N.current.contains(a) && document.contains(a) && (L(), z?.current && (z.current = window.setTimeout(() => {
                w.current?.blur()
              }, 40)))
            };
            return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
              document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
            }
          }, [p]), (0, g.useEffect)(() => {
            const e = () => {
              p && (y(!0), k(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [p]), (0, g.useLayoutEffect)(() => {
            if (N?.current) {
              const e = getComputedStyle(N.current).getPropertyValue("--expandingPlatformButton-expandDuration"),
                a = parseFloat(e) * (e.includes("ms") ? 1 : 1e3);
              requestAnimationFrame(() => {
                x(isNaN(a) ? 200 : a)
              })
            }
          }, []), (0, g.useEffect)(() => {
            let e;
            return h && (e = window.setTimeout(() => {
              y(!1)
            }, _)), () => {
              e && window.clearTimeout(e)
            }
          }, [h, _]);
          const E = ({
            href: e,
            platform: a
          }) => async () => {
            if (e) j({
              element_placement: o?.toLowerCase(),
              event: "cta_store_link",
              link_url: e,
              text: a
            });
            else {
              const e = (0, b.findPlatform)(a)?.onlineService;
              if (e && "sc" !== e) {
                j({
                  element_placement: o?.toLowerCase(),
                  event: "cta_link_account",
                  text: `link ${e}`
                });
                const a = await (0, b.generateTpaLink)({
                  pingBearer: u,
                  returnUrl: f || window.location.pathname,
                  service: e
                });
                window.location.assign(a.href)
              }
            }
          };
          return "string" != typeof a ? null : (0, m.jsxs)("div", {
            className: (0, Q.default)(Mi.container, i),
            children: [(0, m.jsx)(B.motion.div, {
              className: Mi.content,
              animate: p ? "open" : "close",
              variants: Pi,
              "aria-hidden": !!p,
              children: r
            }), (0, m.jsxs)(B.motion.div, {
              "data-variant": e,
              "data-animating": h,
              className: (0, Q.default)(p ? Mi.expandedButton : Mi.unexpandedButton),
              animate: p ? "open" : "closed",
              variants: Ei,
              initial: !1,
              ref: N,
              children: [(0, m.jsx)(B.motion.button, {
                className: (0, Q.default)(Mi.buttonText, s),
                "aria-expanded": p,
                onClick: () => {
                  if (y(!0), k(!p), !p) switch (c) {
                    case "select_platform":
                      j({
                        element_placement: o?.toLowerCase(),
                        event: "select_platform",
                        text: a?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      j({
                        element_placement: o?.toLowerCase(),
                        event: "cta_link_account",
                        o_id: l,
                        text: a?.toLowerCase()
                      });
                      break;
                    case "buy":
                      j({
                        element_placement: o?.toLowerCase(),
                        event: "cta_buy",
                        text: a?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      j({
                        element_placement: o?.toLowerCase(),
                        event: "cta_store_link",
                        text: a?.toLowerCase()
                      });
                      break;
                    case "other":
                      j({
                        element_placement: o?.toLowerCase(),
                        event: "cta_other",
                        text: a?.toLowerCase()
                      })
                  }
                },
                ref: w,
                children: a
              }), (0, m.jsx)("div", {
                className: Mi.expandedArea,
                ref: C,
                "data-animate": p ? "open" : "closed",
                "aria-hidden": !p,
                style: {
                  height: T
                },
                children: (0, m.jsx)(je(), {
                  active: p,
                  focusTrapOptions: {
                    preventScroll: !0,
                    returnFocusOnDeactivate: !1,
                    escapeDeactivates: !0,
                    clickOutsideDeactivates: !0,
                    onDeactivate: L,
                    checkCanFocusTrap: e => new Promise(a => {
                      const t = setInterval(() => {
                        "hidden" !== getComputedStyle(e[0]).visibility && (a(), clearInterval(t))
                      }, 5)
                    })
                  },
                  children: (0, m.jsxs)("div", {
                    children: [(0, m.jsx)("button", {
                      className: Mi.closeButton,
                      onClick: P,
                      "aria-label": "Close",
                      tabIndex: p ? 0 : -1,
                      ref: S,
                      children: (0, m.jsx)("img", {
                        src: t(66426),
                        alt: "Close"
                      })
                    }), (0, m.jsx)("div", {
                      className: Mi.platformButtons,
                      children: n.length ? n.map(e => (0, m.jsx)(Vi, {
                        buttonText: e.buttonText ?? (0, b.findPlatform)(e.platform)?.friendlyName ?? "",
                        link: e.href,
                        platform: e.platform,
                        onClick: E(e),
                        target: d,
                        tabIndex: p ? 0 : -1
                      }, `${e.key}-${e.href}-${e.platform}`)) : ""
                    })]
                  })
                })
              })]
            })]
          })
        },
        Di = {
          animateBox: "rockstargames-sites-legacyb07a3be6338e0ba4b346b072762582e3",
          animateMe: "rockstargames-sites-legacyf7adfd0186421cac9ad0b300911cc9af",
          bar: "rockstargames-sites-legacybbb7e636ac00581aed0b7e148916cc11",
          barGrow: "rockstargames-sites-legacye0262d00df9ad8a47b08ae84160bfa51",
          fadeArea: "rockstargames-sites-legacyf47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-sites-legacyc121e11e40215dc778fe8665eb38845d"
        },
        Ai = ({
          children: e,
          style: a
        }) => {
          const t = (0, g.useRef)(null);
          return (0, g.useEffect)(() => {
            new IntersectionObserver(e => {
              e.forEach(e => {
                e.isIntersecting && e.target.classList.add([Di.visible])
              })
            }).observe(t?.current)
          }, []), (0, m.jsx)("div", {
            style: a,
            className: [Di.fadeArea].join(" "),
            ref: t,
            children: e
          })
        };
      var $i = t(82088);
      const Fi = (0, p.defineMessages)({
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
        Oi = ({
          prevRef: e,
          nextRef: a,
          onNextClicked: t,
          onPrevClicked: s,
          onNextKeyDown: i,
          testId: r
        }) => {
          const {
            formatMessage: n
          } = (0, p.useIntl)();
          return (0, m.jsxs)("div", {
            className: "rockstargames-sites-legacyb8d5ef10008331a9f6d3a6bdf1690d01",
            "data-testid": `${r}-controls`,
            children: [(0, m.jsx)("button", {
              className: "rockstargames-sites-legacyc38cd500d52d07bd012e288dc0b4f635",
              ref: e,
              onClick: s,
              "aria-label": n(Fi.carousel_previous_slide_label)
            }), (0, m.jsx)("button", {
              className: "rockstargames-sites-legacyb24ada0f7959966c6d950567eaaafce2",
              ref: a,
              onClick: t,
              onKeyDown: i,
              "aria-label": n(Fi.carousel_next_slide_label)
            })]
          })
        },
        Gi = _((0, w.g)(({
          description: e,
          slideChildren: a,
          size: t,
          title: s,
          name: i,
          customSlidesPerView: r = null,
          customSpaceBetween: n = null,
          slideClass: c,
          style: o,
          className: d,
          cardSizeBreakpoints: l,
          customAspectRatio: f,
          titleBadge: u,
          theme: p
        }) => {
          const {
            track: b
          } = (0, v.useGtmTrack)(), h = (0, g.useRef)(null), y = (0, g.useRef)(null), _ = (0, g.useRef)(null), [x, j] = (0, g.useState)(null), [N, w] = (0, g.useState)(!1), [S, C] = (0, g.useState)(null), [T, I] = (0, g.useState)(), [z, L] = (0, g.useState)(), {
            ref: P,
            inView: E
          } = (0, k.useInView)({
            threshold: .6
          }), [M, V] = (0, g.useState)(!1), [B, D] = (0, g.useState)(null), [A, $] = (0, g.useState)(!1), [F, O] = (0, g.useState)(0), [G, R] = (0, g.useState)(0);
          (0, g.useEffect)(() => {
            const e = () => {
              $(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, g.useEffect)(() => {
            const e = () => {
              T && !(0, $i.A)(T) && T?.height > 0 && T?.height !== F && O(T?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [T]);
          const H = {
            0: {
              spaceBetween: n ?? 16
            },
            1024: {
              spaceBetween: n ?? 18
            },
            1920: {
              spaceBetween: n ?? 20
            },
            2560: {
              spaceBetween: n ?? 22
            }
          };
          (0, g.useEffect)(() => {
            if (!h.current) return;
            const e = () => {
              if (h.current) {
                const e = r || Number(window.getComputedStyle(h.current).getPropertyValue("--slides-per-view")),
                  a = r ? 1 : Number(window.getComputedStyle(h.current).getPropertyValue("--slides-per-view-multiplier"));
                C(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [h, r]), (0, g.useEffect)(() => {
            if (!a) return;
            let e = !1;
            a.forEach(a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, D(a))
            }), V(e);
            const t = a.map((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && A ? null : (0, m.jsx)(me.qr, {
              className: "rockstargames-sites-legacyad67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => U(a),
              children: e
            }, e.key));
            j(t)
          }, [a, A]), (0, g.useEffect)(() => {
            L({
              nextEl: _.current,
              prevEl: y.current
            })
          }, [_, y]), (0, g.useEffect)(() => {
            E && !N && a && (b({
              event: "page_section_impression",
              element_placement: (i || s).toLowerCase()
            }), w(!0))
          }, [E, a]);
          let W = "custom" === t ? {
            "--custom-aspect-ratio": f,
            ...o
          } : {
            ...o
          };
          const q = 0 !== F ? `${F}px` : "100%";
          W = {
            ...W,
            "--carousel-cards-height": q,
            "--carousel-nav-opacity": G
          };
          const U = e => {
              T?.slideTo(e)
            },
            Y = `${s.trim().toLowerCase().replace(/\s+/g,"-")}-deck`;
          return (0, m.jsxs)("section", {
            "aria-label": s,
            className: (0, Q.default)("rockstargames-sites-legacyf20b52f7c3f9003cd00811a47a04bf10", d),
            "data-size": t,
            "data-testid": Y,
            "data-sm": l?.sm ? l?.sm : t,
            "data-md": l?.md ? l?.md : t,
            "data-lg": l?.lg ? l?.lg : t,
            "data-xl": l?.xl ? l?.xl : t,
            "data-xxl": l?.xxl ? l?.xxl : t,
            "data-has-covercard": M,
            "data-new-carousel-nav": !0,
            id: `${s}-carousel`,
            "data-theme": p,
            ref: h,
            style: W,
            children: [(0, m.jsx)("div", {
              className: "rockstargames-sites-legacyaeafe767d91d07fab61f307b5bbffeef",
              ref: P
            }), M && A && (0, m.jsx)("div", {
              className: "rockstargames-sites-legacydef6705cfe82c4e562f3c71c78bc5248",
              children: B
            }), (0, m.jsx)("div", {
              className: "rockstargames-sites-legacyb093fac5b0d056a4a00f34d0418c6577",
              children: (0, m.jsxs)("div", {
                className: "rockstargames-sites-legacydcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, m.jsxs)("div", {
                  className: "rockstargames-sites-legacyb83b41754b7e9ac95c806264014db990",
                  children: [!M && s && (0, m.jsxs)("div", {
                    className: "rockstargames-sites-legacyc8e04a547988dacbae8960776862f15f",
                    children: [(0, m.jsx)("h2", {
                      children: s
                    }), u && (0, m.jsx)("span", {
                      className: "rockstargames-sites-legacyc3de2db74771fdba023cc2b11b216955",
                      children: u
                    })]
                  }), (0, m.jsx)(Oi, {
                    prevRef: y,
                    nextRef: _,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = T?.slides[T?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    title: s,
                    theme: p
                  })]
                }), e && (0, m.jsx)("div", {
                  className: "rockstargames-sites-legacya1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: e
                  }
                })]
              })
            }), S ? (0, m.jsx)(me.RC, {
              slidesPerView: S,
              onInit: e => {
                I(e);
                const a = setInterval(() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (O(t), R(1), clearInterval(a))
                }, 500)
              },
              grabCursor: !0,
              navigation: z,
              modules: [us.A],
              breakpoints: H,
              slideClass: (0, Q.default)("swiper-slide", c),
              onSlideNextTransitionEnd: () => {
                b({
                  event: "carousel_next",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                b({
                  event: "carousel_previous",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                b({
                  event: "carousel_swipe",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              children: x
            }) : ""]
          })
        }), null),
        Ri = {
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
        Hi = {
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
        Wi = {
          background: "rockstargames-sites-legacyc8c90210c344650ad11d2d97258dcaab",
          btnText: "rockstargames-sites-legacye8ca7c699fe44c30cf4e542ee8b22119",
          buttonGroup: "rockstargames-sites-legacyb8a0dc337c7ea835340f88b0f6d14822",
          content: "rockstargames-sites-legacye4bb4024fb4b167423f58e02e471bf5e",
          ctaBlock: "rockstargames-sites-legacyc3f1f785f5adb5cfcbf93195e21521e6",
          descriptions: "rockstargames-sites-legacya54e628f4898aed20e45ad8a5e39af7f",
          gradient: "rockstargames-sites-legacyd074051a93eac66cd56c616c8ccd4c91",
          hero: "rockstargames-sites-legacydccb6453f49a8e81c4ec407c39df4c79",
          images: "rockstargames-sites-legacyd5fdc650fc4f2f7441ce7c563ae9653e",
          layered: "rockstargames-sites-legacyc58f0111e3765dc6116481764d0431d0",
          legalText: "rockstargames-sites-legacybdbadc8b5ef295a4122905fffdde18f6",
          pillBtn: "rockstargames-sites-legacyb89f190ffa4d32a33304ffa4b5ff73df",
          primaryBtn: "rockstargames-sites-legacyd273ee25efe0a98d789db801a1a18e97",
          secondaryBtn: "rockstargames-sites-legacyaf112e1264860cebe9be5f542d47ec27",
          selected: "rockstargames-sites-legacyb5c12cc9810c7b3774102378f71714a1",
          shardsCarousel: "rockstargames-sites-legacycd8c6fbe5139a661c2e52e9df726ca78",
          verticalCtaBlock: "rockstargames-sites-legacyde8ee9092175484396cd56d19aec7cbd"
        },
        qi = ({
          title: e = "",
          mobileImg: a,
          desktopImg: t
        }) => {
          const s = (0, z.useGetCdnSource)(a ?? null),
            i = (0, z.useGetCdnSource)(t ?? s);
          return (0, m.jsx)("div", {
            className: Wi.shard,
            style: {
              "--background-image-mobile": `url(${s})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, m.jsx)("h5", {
              children: e
            })
          })
        },
        Ui = ({
          title: e = "Membership Rewards",
          name: a = "Membership Rewards",
          shards: t
        }) => {
          const [s, i] = (0, g.useState)(null);
          return (0, g.useEffect)(() => {
            t && i(t.reduce((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: i,
                desktop: r
              } = s;
              return e.push((0, m.jsx)(qi, {
                title: t,
                mobileImg: i?.full_src,
                desktopImg: r?.full_src
              })), e
            }, []))
          }, [t]), s ? (0, m.jsx)("div", {
            className: Wi.shardsCarousel,
            children: (0, m.jsx)(Gi, {
              title: e,
              name: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        Yi = ({
          animated: e = !1,
          ctas: a = [],
          expandingButtonLabel: t = "Subscribe"
        }) => {
          const [s, i] = (0, g.useState)([]), [r, n] = (0, g.useState)([]);
          return (0, g.useEffect)(() => {
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
            i(e), n(t)
          }, [a]), s.length ? (0, m.jsx)(B.motion.div, {
            variants: e ? Hi : void 0,
            children: (0, m.jsx)(Bi, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: s,
              children: !!r.length && (0, m.jsx)(B.motion.div, {
                variants: Hi,
                children: (0, m.jsx)(Rs, {
                  buttons: r,
                  className: Wi.buttonGroup
                })
              })
            })
          }) : (0, m.jsx)(m.Fragment, {
            children: !!r.length && (0, m.jsx)(B.motion.div, {
              variants: Hi,
              children: (0, m.jsx)(Rs, {
                buttons: r,
                className: Wi.buttonGroup
              })
            })
          })
        },
        Xi = ({
          animated: e = !1,
          brands: a = [],
          cta: t = [],
          ctas: s = [],
          description: i = "",
          expandingButtonLabel: r = "Subscribe",
          legalText: n,
          stackButtons: c,
          title: o = ""
        }) => (0, m.jsxs)(B.motion.div, {
          className: Wi.content,
          initial: "hidden",
          animate: "visible",
          variants: e ? Ri : void 0,
          children: [(0, m.jsx)(B.motion.div, {
            variants: e ? Hi : void 0,
            children: (0, m.jsx)(Bs.A, {
              brands: a
            })
          }), (o || i) && (0, m.jsxs)(B.motion.div, {
            className: Wi.descriptions,
            variants: e ? Hi : void 0,
            children: [o && (0, m.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: o
              }
            }), i && (0, m.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: i
              }
            })]
          }), !!t.length && (0, m.jsx)("div", {
            className: c ? Wi.verticalCtaBlock : Wi.ctaBlock,
            children: (0, m.jsx)(z.TinaParser, {
              components: {
                Cta: Qt,
                ExpandingPlatformButton: Bi
              },
              tina: {
                payload: {
                  content: t
                }
              }
            })
          }), !!s.length && (0, m.jsx)("div", {
            className: Wi.ctaBlock,
            children: (0, m.jsx)(Yi, {
              animated: e,
              ctas: s,
              expandingButtonLabel: r
            })
          }), n && (0, m.jsx)(B.motion.div, {
            className: Wi.legalText,
            variants: e ? Hi : void 0,
            children: (0, m.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: n
              }
            })
          })]
        }),
        Qi = ({
          animated: e = !1,
          backgroundImage: a,
          brands: t = [],
          className: s,
          ctas: i = [],
          cta: r,
          description: n = "",
          expandingButtonLabel: c = "Subscribe",
          layeredImage: o,
          layeredImageSettings: d,
          legalText: l,
          shardsSection: f,
          stackButtons: u = !1,
          theme: p = "gen9",
          title: k = ""
        }) => {
          const {
            breakpoints: v,
            windowWidth: h
          } = (0, b.useWindowResize)(), y = v.xxl.min, _ = (e => {
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
              const [s, i] = e;
              if (t.has(s)) {
                const e = t.get(s);
                Object.entries(i).forEach(i => {
                  const [r, n] = i;
                  if (t.has(s) && t.has(r)) {
                    const s = `${t.get(r)}${e}`;
                    a[s] = "imageWidth" !== r ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                  }
                })
              }
            }), a
          })(d), x = (0, z.useGetCdnSource)(a?.mobile?.full_src ?? null), j = (0, z.useGetCdnSource)(a?.desktop?.full_src ?? x), N = (0, z.useGetCdnSource)(o?.mobile?.full_src ?? null), w = (0, z.useGetCdnSource)(o?.desktop?.full_src ?? N), S = (0, g.useMemo)(() => {
            const {
              mobileStyle: e,
              desktopStyle: t,
              style: s
            } = a ?? {};
            return {
              ...s,
              ...h >= y ? (0, b.safeStyles)(t) : (0, b.safeStyles)(e)
            }
          }, [h, a?.style, a?.mobileStyle, a?.desktopStyle]);
          return (0, m.jsxs)(B.motion.div, {
            className: (0, Q.default)(Wi.hero, s),
            style: {
              "--background-image-desktop": `url(${j})`,
              "--background-image-mobile": `url(${x})`,
              "--layered-image-desktop": `url(${w})`,
              "--layered-image-mobile": `url(${N})`
            },
            initial: "hidden",
            animate: "visible",
            variants: e ? Ri : void 0,
            "data-type": "hero",
            theme: p,
            children: [(0, m.jsxs)("div", {
              className: Wi.images,
              children: [j && x ? (0, m.jsx)("div", {
                className: Wi.background,
                style: S ?? {}
              }) : "", N && w ? (0, m.jsx)("div", {
                className: Wi.layered,
                style: d ? _ : {}
              }) : "", (0, m.jsx)("div", {
                className: Wi.gradient
              })]
            }), (0, m.jsx)(Xi, {
              animated: e,
              brands: t,
              cta: r,
              ctas: i,
              description: n,
              expandingButtonLabel: c,
              legalText: l,
              stackButtons: u,
              title: k
            }), f?.shards && (0, m.jsx)(Ui, {
              shards: f.shards
            })]
          })
        },
        Zi = {
          "bg-img": "rockstargames-sites-legacyae25e5bf6793a5522c791028f396dedd",
          border: "rockstargames-sites-legacyaf6154339558ed7e6e46014575250492",
          "bottom-y": "rockstargames-sites-legacyd66e5203a7bd3c85b99e6caef49b2e9b",
          "center-x": "rockstargames-sites-legacycc06519a4a0d2db824b70a425c8cefd6",
          "center-y": "rockstargames-sites-legacyd6ce82f1bd5cbf6b4abe650a2738c723",
          contain: "rockstargames-sites-legacyc409c9fefffbfffd091f81bdd75ab8a6",
          cover: "rockstargames-sites-legacya72cf62465acbddecc3a2cb256640fac",
          dual: "rockstargames-sites-legacyb9c969b033c5016f95d5a70ceea22071",
          fill: "rockstargames-sites-legacyc12eb7986b09f10158c48ad4a902f2ef",
          "hero-lg": "rockstargames-sites-legacyb722bba74c792beb73ccdfec4506b591",
          "hero-md": "rockstargames-sites-legacyc6b26605a3817704bbf427741edb98f8",
          "hero-sm": "rockstargames-sites-legacye7b70cd5245ee850b5a2bfd048fa02c4",
          imageLayer: "rockstargames-sites-legacya63d213c123e7da5863c6256e847eb0f",
          "layer-lg-height": "rockstargames-sites-legacya206e14a6e055900c30ee67826330173",
          "layer-lg-width": "rockstargames-sites-legacyfb58e41629b31453b12d8bbcc525608f",
          "layer-md-height": "rockstargames-sites-legacye2a2cf239dc64e006fdc9c2c3d280b8e",
          "layer-md-width": "rockstargames-sites-legacyf1d2c109e21746d5fa00c85e56e61b10",
          "layer-sm-height": "rockstargames-sites-legacyc947fc08bb64674c4bf0429e7914507e",
          "layer-sm-width": "rockstargames-sites-legacya1289245dc6b1854c3aec5b1a8a11593",
          "layer-xl-height": "rockstargames-sites-legacya4d21457b55a0626d1cf5170845ba8d6",
          "layer-xl-width": "rockstargames-sites-legacye5ecbec181677eea6c9c72e02580c501",
          "layer-xs-height": "rockstargames-sites-legacyd0f6abd48b388b8e3b18eee4bc19039d",
          "layer-xs-width": "rockstargames-sites-legacyc60b1a515049d3f670d8c5a76c8a1bf6",
          "layer-xxl-height": "rockstargames-sites-legacyd74cf249eb57fb6682f07fe13fdfdb4a",
          "layer-xxl-width": "rockstargames-sites-legacyac03c56e2475aecafc08e873eed26566",
          layeredImage: "rockstargames-sites-legacyfb27e7361e78dacdcf500e0b9a2b4fce",
          layersWrapper: "rockstargames-sites-legacyaf169afca6f741daca0331a1b13fa5f1",
          "left-x": "rockstargames-sites-legacybb4dd9e1570a80cc01f752a2230abdac",
          "right-x": "rockstargames-sites-legacyd50c0c4bee9b09502dd611543223ed37",
          shards: "rockstargames-sites-legacya0d1e1b5705f11b3b9301717bc5f6245",
          shards_three: "rockstargames-sites-legacycf01ef76b0d5cc2a7bc4f005be4eb31f",
          shards_two: "rockstargames-sites-legacyf317b17c9b0f0a27ed95ec2844857f25",
          "top-y": "rockstargames-sites-legacya9cd0a03e7193a5b47c6e767e045a1ec"
        },
        Ki = ({
          style: e,
          className: a
        }) => {
          const t = {
              ...e
            },
            s = e["--border-image-source"],
            i = (0, z.useGetCdnSource)(s || null);
          return s && (t["--border-image-source"] = `url(${i})`), (0, m.jsx)("div", {
            className: (0, Q.default)(Zi.border, a),
            style: {
              ...t
            }
          })
        },
        Ji = e => e?.images ? (0, m.jsx)("div", {
          className: (0, Q.default)(Zi.layeredImage, Zi[e?.variantClass], Zi[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, m.jsxs)("div", {
            className: Zi.layersWrapper,
            children: [e?.images?.map((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: i,
                objectFitClass: r,
                positionClassX: n,
                positionClassY: c,
                zIndex: o,
                className: d,
                style: l,
                alt: g,
                displayClass: f
              } = e;
              return (0, m.jsx)(V, {
                image: t,
                style: {
                  zIndex: o ?? a + 1
                },
                imageStyle: l,
                className: (0, Q.default)(d, f, Zi.imageLayer, Zi[s], Zi[i], Zi[r], Zi[n], Zi[c]),
                alt: g
              }, o ?? a + 1)
            }), e?.borderImage && (0, m.jsx)(Ki, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        er = e => {
          const {
            image: a,
            alt: t,
            thumbnail: s,
            caption: i,
            style: r,
            showOpenButtonMobile: n,
            showOpenButton: c,
            showDownloadButtonMobile: o,
            showDownloadButton: d,
            showZoomControls: l
          } = e, g = (0, b.useLocale)(), {
            isMobile: f
          } = (0, b.useWindowResize)(), u = a?.sources ?? {}, p = s?.image?.sources ?? {}, k = (0, z.useGetCdnSource)(u?.[g] ?? u?.en_us) ?? "", v = (0, z.useGetCdnSource)(p?.[g] ?? p?.en_us) ?? k, h = f ? n : c, y = f ? o : d;
          return (0, m.jsx)("div", {
            style: r,
            className: "rockstargames-sites-legacyadbaa0167219cd891249a29faec00e8f",
            children: (0, m.jsxs)(vi.Yf.bL, {
              altText: t || "",
              children: [(0, m.jsxs)(vi.Yf.l9, {
                className: "rockstargames-sites-legacyd769ad0525fc8e1ea83ce616ce6959bb",
                style: {
                  aspectRatio: s?.thumbnailAspectRatio
                },
                children: [(0, m.jsx)(vi.Yf.Vz, {
                  src: v,
                  style: {
                    objectPosition: s?.thumbnailPosition
                  }
                }), h && (0, m.jsx)(vi.Yf.gb, {
                  style: {
                    boxSizing: "content-box"
                  }
                })]
              }), (0, m.jsxs)(vi.Yf.ZL, {
                children: [(0, m.jsx)(vi.Yf.hJ, {}), (0, m.jsxs)(vi.Yf.UC, {
                  children: [(0, m.jsx)(vi.Yf.DH, {
                    children: (0, m.jsx)(vi.Yf._V, {
                      src: k
                    })
                  }), (0, m.jsxs)(vi.Yf.H2, {
                    children: [i && (0, m.jsx)(vi.Yf.HL, {
                      children: i
                    }), (0, m.jsx)(vi.Yf.bm, {
                      showTooltip: !1
                    }), l && (0, m.jsx)(vi.Yf.GP, {}), y && (0, m.jsx)(vi.Yf.f5, {})]
                  })]
                })]
              })]
            })
          })
        },
        ar = ({
          button: e,
          closeDialog: a,
          style: t = "primary"
        }) => {
          const {
            buttonIcon: s,
            buttonText: i,
            extraClasses: r,
            isDisabled: n,
            isLink: c,
            link: o,
            onClick: d,
            testId: l
          } = e;
          return c ? i && (0, m.jsx)(vi.$n, {
            asChild: !0,
            appearance: t,
            size: "LG",
            children: (0, m.jsx)("a", {
              href: o,
              ...l && {
                "data-testid": l
              },
              children: i
            })
          }) : (0, m.jsx)(vi.$n, {
            autoFocus: !0,
            iconRight: s,
            className: (0, Q.default)(r),
            isDisabled: n,
            onPress: e => (e => {
              d && d(), a && a(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: t,
            size: "LG",
            "aria-label": i,
            ...l && {
              "data-testid": l
            },
            children: i
          })
        },
        tr = {
          actions: "rockstargames-sites-legacyd35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-sites-legacyb63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-sites-legacyefe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-sites-legacyd2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-sites-legacyf654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-sites-legacye30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-legacydab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-sites-legacybc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-sites-legacyb120386c4c2485c587f87173721d63be",
          message: "rockstargames-sites-legacyf7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-sites-legacyb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-legacya6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-sites-legacyb2b3117a07a11b3ec5897e4718e24373"
        },
        sr = ({
          icon: e,
          title: a,
          secondaryText: t,
          buttons: s,
          showDialog: i,
          onClose: r = () => {},
          closeOnOutsideClick: n = !0,
          extraClasses: c
        }) => {
          const o = (0, g.useRef)(null),
            {
              setBodyIsLocked: d
            } = (0, b.useBodyScrollable)("AlertDialog");
          (0, g.useEffect)(() => {
            i && o?.current && (o.current?.showModal?.(), d(!0))
          }, [i]);
          const l = () => {
            d(!1), r(), o.current?.close?.()
          };
          if (i) return (0, m.jsxs)("dialog", {
            ref: o,
            className: tr.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && n && (d(!1), r(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, m.jsx)("i", {
              className: [tr.icon, tr[e]].join(" ")
            }), (0, m.jsxs)("div", {
              className: [tr.content, c?.content].join(" "),
              children: [(0, m.jsx)("h3", {
                className: [tr.heading, c?.heading].join(" "),
                children: a
              }), t && (0, m.jsx)("div", {
                className: [tr.message, c?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), s && (0, m.jsx)("div", {
              className: tr.actions,
              children: s.slice(0, 2).map((e, a) => (0, m.jsx)(ar, {
                style: e?.style ?? (0 === a ? "primary" : "secondary"),
                button: e,
                closeDialog: l
              }, e.buttonText))
            })]
          })
        },
        ir = {
          tag: "rockstargames-sites-legacyb660bb706132d84852c02df01cc6ed5a"
        },
        rr = ({
          className: e,
          href: a,
          title: t,
          style: s
        }) => {
          const i = (0, m.jsxs)("div", {
            style: s,
            className: [ir.tag, e].join(" "),
            children: [(0, m.jsx)("i", {}), t]
          });
          return void 0 !== a ? (0, m.jsx)(h.A, {
            to: a,
            children: i
          }) : i
        },
        nr = {
          info: "rockstargames-sites-legacyea1c51ae745531c2aeabbe3fcf603842",
          newswireBlock: "rockstargames-sites-legacyb394b56c31488c36155ca82090c66e6f",
          newswireBlockNoSpecialOrder: "rockstargames-sites-legacyc06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-sites-legacyca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-sites-legacyb3d4a8cfcc371ae39ce6220d009c5954",
          startAnimation: "rockstargames-sites-legacya56af3c95449fe8452485dfb6c89fc29",
          title: "rockstargames-sites-legacyf1dfe59c3d981dbe132559620885ecea",
          top: "rockstargames-sites-legacyeee9c5d3b714a61ac265369800a6d4e0"
        },
        cr = ({
          section: e = "",
          index: a,
          post: t,
          noSpecialOrder: s = !1,
          focused: i
        }) => {
          const {
            track: r
          } = (0, v.useGtmTrack)(), n = t.preview_images_parsed.newswire_block, c = (0, ka.Ub)(Ue.fi.mobile), o = {
            default: 0 !== a || s ? n.square || n.d16x9 || n._fallback : n.d16x9 || n.square || n._fallback,
            mobile: n.square || n._fallback
          }, [d] = (0, b.usePreloadImg)(o.default), l = {
            default: {
              backgroundImage: `url(${o.default})`
            },
            mobile: {
              backgroundImage: `url(${o.mobile})`
            }
          }, f = (0, g.useCallback)(() => {
            r({
              event: "card_click",
              card_id: t.id,
              card_name: t.name_slug.replace(/-/g, " "),
              link_url: t.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }, [t]);
          return (0, m.jsx)(h.A, {
            to: t.url,
            className: [nr.newswireBlock, s ? nr.newswireBlockNoSpecialOrder : "", null !== d ? nr.startAnimation : ""].join(" "),
            focused: i,
            onClick: f,
            children: (0, m.jsxs)(m.Fragment, {
              children: [0 === a ? (0, m.jsx)("div", {
                className: c ? nr.previewMobile : nr.preview,
                style: c ? l.mobile : l.default
              }) : (0, m.jsx)("div", {
                className: nr.preview,
                style: l.default
              }), (0, m.jsxs)("div", {
                className: nr.info,
                children: [(0, m.jsxs)("div", {
                  className: nr.top,
                  children: [t.primary_tags.length ? (0, m.jsx)(rr, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, m.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, m.jsx)("h5", {
                  className: nr.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var or = t(97984),
        dr = t.n(or);
      const lr = (0, b.withTranslations)(({
          section: e = "",
          relativeTo: a = "",
          tagId: t = null,
          metaUrl: s = "/newswire",
          t: i
        }) => {
          const r = (0, b.useLocale)(),
            {
              track: n
            } = (0, v.useGtmTrack)(),
            [c, o] = (0, ae.useSearchParams)(),
            [d, l] = (0, g.useState)(c.get("tag")),
            [f, u] = (0, g.useState)(1),
            [p, k] = (0, g.useState)(20),
            [h, y] = (0, g.useState)([]),
            [_, x] = (0, g.useState)(null),
            [j, {
              loading: N,
              data: w
            }] = (0, b.useLazyQuery)(dr(), {
              variables: {
                tagIdHash: d,
                page: f,
                metaUrl: s,
                limit: p,
                locale: r
              }
            });
          return (0, g.useEffect)(() => {
            u(1), y([]), k(20), l(c.get("tag")), j()
          }, [c.get("tag"), t]), (0, g.useEffect)(() => {
            const e = h;
            w?.posts?.paging && x(w?.posts?.paging), w?.posts?.results && y(e.concat(w?.posts?.results))
          }, [w]), (0, g.useEffect)(() => {
            (() => {
              const e = c.get("page"),
                a = Number(e ?? 1);
              k(20 * a), j()
            })()
          }, []), h.length ? (0, m.jsxs)("div", {
            className: "rockstargames-sites-legacye81cdae3d47ce0490795e6588b3c8464",
            "data-testid": "newswire-list",
            children: [(0, m.jsx)(ur, {
              section: e,
              posts: h,
              relativeTo: a,
              noSpecialOrder: null !== d
            }), null !== _ && _.nextPage ? (0, m.jsx)(es, {
              className: "rockstargames-sites-legacye125d510192feb4ce2844cb97084b838",
              "data-testid": "more-stories",
              onClick: () => {
                const e = c.get("page"),
                  a = Number(e ?? f) + 1;
                u(a), 20 !== p && k(20), j(), o({
                  page: String(a),
                  ...d && {
                    tag: d
                  }
                }, {
                  replace: !0
                }), n({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: N,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        }),
        mr = {
          just1post: "rockstargames-sites-legacyd46374473ed68a4121f88b44eba06359",
          pillBtn: "rockstargames-sites-legacyf2d003dd0e6a129a56ea07208548787c",
          posts: "rockstargames-sites-legacycfe09d4dc8447b1e606404300d040e7a",
          related: "rockstargames-sites-legacyb8a63bb419c1f2a8f94e099e1e650e48",
          selected: "rockstargames-sites-legacyf94728c4a438800b9abab11a8b3e3c0a"
        },
        gr = (0, b.withTranslations)(({
          posts: e,
          t: a
        }) => (0, m.jsxs)("section", {
          className: mr.related,
          children: [(0, m.jsx)("h2", {
            children: a("Related Stories")
          }), (0, m.jsx)("div", {
            className: [mr.posts, 1 === e.length ? mr.just1post : ""].join(" "),
            children: e.map(e => (0, m.jsx)(cr, {
              noSpecialOrder: !0,
              post: e
            }, e.id))
          })]
        })),
        fr = {
          newswireBlocks: "rockstargames-sites-legacyea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-legacyd301334a72b626f8cc2f5b9733299e76"
        },
        ur = (0, b.withGtmTracking)(({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: t,
          gtmTrack: s
        }) => {
          const [i, r] = (0, g.useState)(null);
          return (0, g.useEffect)(() => {
            if (!t.length) return;
            const a = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            t.map((t, s) => {
              a.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: e
              })
            }), s(a), r(t.length)
          }, [t.length]), (0, m.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [fr.newswireBlocks, a ? fr.noSpecialOrder : "", fr.contextHome].join(" "),
            children: t.map((t, s) => (0, m.jsx)(cr, {
              section: e,
              index: s,
              noSpecialOrder: a,
              post: t,
              focused: s === i
            }, t.id))
          })
        }),
        pr = {
          blue: "rockstargames-sites-legacybffe0939bda9e26ad14f6b01669338a8",
          custom: "rockstargames-sites-legacycc2c26a3dd80cf9db62c4c7f389b7859",
          darkBlue: "rockstargames-sites-legacye2b6f722952b5d61d2a3b725166bfc9b",
          darkRed: "rockstargames-sites-legacyd44e2fc53f269ccf2b8fbe032ef6cec9",
          goldenrod: "rockstargames-sites-legacya365c5895cfd6c9f94fc994d71ba402c",
          green: "rockstargames-sites-legacyf9c1eebf59650cd8ee84191d8fc62874",
          grid: "rockstargames-sites-legacybe627ae18a7bd3cff72d3f11aeed67df",
          gtao: "rockstargames-sites-legacyffaf58c543b36fd7fb4efec24b3564bc",
          gtaplus: "rockstargames-sites-legacyfbf343ed03c1bd513ea4cadc9726af76",
          hotPink: "rockstargames-sites-legacyedb9998d6516a5aa1aece9c07c1768be",
          itemList: "rockstargames-sites-legacyd9620ae764026da5584e0f0a5886c992",
          noImg: "rockstargames-sites-legacybbb7247d5d7a836d755491e85639f1a3",
          pillBtn: "rockstargames-sites-legacyc1ed14af6fceaba7c99728a81676dd92",
          purple: "rockstargames-sites-legacye61db4af0805bb4c9bf820c26ac8a85f",
          rdo: "rockstargames-sites-legacyb2194fe129aa210950dcb07b88a28c13",
          red: "rockstargames-sites-legacyf674d6037f10af1a1fe41a83c1e5da17",
          selected: "rockstargames-sites-legacye49b5a5fd4ab934ece172fffe9f6577e",
          skull: "rockstargames-sites-legacyb2a1c0b367b250fe0606dffece9e1c02",
          teal: "rockstargames-sites-legacya379d41268f4f002d5ac257f67461f1d",
          turquoise: "rockstargames-sites-legacye211b0b8ae00897d696af259b3ddd837",
          yellow: "rockstargames-sites-legacyce372826eac3cc73094d69c0c5d9a530"
        },
        {
          sanitize: br
        } = Pa(),
        kr = ({
          list: e,
          string: a,
          starColor: t,
          style: s,
          className: i,
          game: r,
          noImg: n,
          columns: c,
          mobileColumns: o
        }) => {
          const [d, l] = (0, g.useState)(null);
          if ((0, g.useEffect)(() => {
              l(e)
            }, [e]), !a && !e) return null;
          const f = {
            color: s?.color
          };
          return delete s?.color, c && d ? (0, m.jsx)("div", {
            className: pr.grid,
            style: {
              "--ordered-list-grid-column": c,
              "--ordered-list-grid-column-mobile": o ?? c
            },
            children: (0, m.jsx)("ol", {
              className: (0, Q.default)(pr.itemList, pr.noImg, pr[t], pr[r]),
              style: (0, b.safeStyles)(s),
              children: d.map(e => (0, m.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: br(e.content)
                },
                style: f
              }, e.content))
            })
          }) : (0, m.jsx)("ol", {
            style: (0, b.safeStyles)(s),
            className: (0, Q.default)(pr.itemList, pr.custom, n ? pr.noImg : "", t ? pr[t] : "", r ? pr[r] : "", i ?? ""),
            children: e.map(e => (0, m.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: br(e?.content ?? e)
              }
            }, e?.content))
          })
        },
        vr = "rockstargames-sites-legacyb013d77f453d7053bbcf06f173ff326c",
        hr = ({
          children: e,
          data: a,
          onPageUpdate: t,
          page: s,
          className: i
        }) => (0, m.jsx)("a", {
          href: "#",
          className: s === a.page ? `rockstargames-sites-legacyb577d5726806ec872ecdb8a46905734f ${i??""}` : "",
          onClick: e => {
            e.preventDefault(), t(s)
          },
          children: e
        }),
        yr = ({
          data: e,
          onPageUpdate: a,
          className: t
        }) => {
          if (1 === e.pageCount) return null;
          const s = new Array(Math.min(e.pageCount, 8)),
            i = Math.max(e.pageCount - 8, 1),
            r = Math.max(2, e.page - 4),
            n = Array.from(s, (e, a) => a + Math.min(i, r));
          return (0, m.jsxs)("div", {
            className: `rockstargames-sites-legacye480f25872ae2a8b3fcd1e492d838301 ${t??""}`,
            children: [e.pageCount > 8 ? (0, m.jsxs)(m.Fragment, {
              children: [(0, m.jsx)(hr, {
                data: e,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== n[0] ? (0, m.jsx)("div", {
                className: vr,
                children: "..."
              }) : ""]
            }) : "", n.map(s => (0, m.jsx)(hr, {
              data: e,
              onPageUpdate: a,
              page: s,
              className: t,
              children: s
            }, s)), e.pageCount > 8 ? (0, m.jsxs)(m.Fragment, {
              children: [n.slice(-1)[0] + 1 < e.pageCount ? (0, m.jsx)("div", {
                className: vr,
                children: "..."
              }) : "", (0, m.jsx)(hr, {
                data: e,
                onPageUpdate: a,
                page: e.pageCount,
                children: e.pageCount
              })]
            }) : ""]
          })
        };
      var _r = t(14143);
      const xr = ({
          children: e
        }) => {
          const {
            parallaxController: a
          } = (0, _r.as)();
          return (0, g.useLayoutEffect)(() => {
            if (!a) return;
            const e = setInterval(() => {
              a.update()
            }, 500);
            return () => clearInterval(e)
          }, [a]), e
        },
        jr = {
          large: "rockstargames-sites-legacye15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-sites-legacydfdaa6f63f8e8bd10576fa2debcbc1fc",
          parallaxWrapper: "rockstargames-sites-legacye30c08cf0e042f7fc7bed0c23c0bfb31",
          small: "rockstargames-sites-legacyc32a973dbc862a43cc5d4a2aac19ed9b"
        },
        Nr = ({
          scrollAxis: e = "vertical",
          size: a = "",
          style: t = {},
          children: s
        }) => (0, m.jsx)(_r.zE, {
          scrollAxis: e,
          children: (0, m.jsx)(xr, {
            children: (0, m.jsx)("div", {
              className: (0, Q.default)(jr.parallaxWrapper, jr[a]),
              style: t,
              "data-context": "parallax-wrapper",
              children: s ? s.map((a, t) => (0, g.cloneElement)(a, {
                scrollAxis: e,
                style: {
                  ...a?.props?.style,
                  zIndex: t
                }
              })) : (0, m.jsx)("div", {})
            })
          })
        }),
        wr = ({
          layers: e = [],
          displayClass: a = "",
          style: t = {}
        }) => {
          const s = (0, z.useGenerateCdnSource)();
          if (!e || !e[0]?.image) return null;
          const i = e.map(e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: s(e?.image ?? null)
          }));
          return (0, m.jsx)(_r.y, {
            className: (0, Q.default)("rockstargames-sites-legacyc1c689cf47230fa80bccc9b20515d4fa", a),
            layers: i,
            style: t
          })
        },
        Sr = "rockstargames-sites-legacyae8bfc3f9a519606a95144e64ee454b5",
        Cr = ({
          minOffset: e = 0,
          maxOffset: a = 0,
          scrollAxis: t = "vertical",
          displayClass: s = "",
          style: i = {},
          children: r
        }) => "horizontal" === t ? (0, m.jsx)(_r.kQ, {
          x: [e, a],
          className: (0, Q.default)(Sr, s),
          styleOuter: i,
          children: r
        }) : (0, m.jsx)(_r.kQ, {
          y: [e, a],
          className: (0, Q.default)(Sr, s),
          styleOuter: i,
          children: r
        }),
        Tr = {
          gradient: "rockstargames-sites-legacyb78d3c0bdc9668bb3d318825467177ab",
          left: "rockstargames-sites-legacyf4448b69feb648b8b910230c6f873dbd",
          pillBtn: "rockstargames-sites-legacyb12cdd53cc59cb42903d11d9fdceca7f",
          promoModule: "rockstargames-sites-legacyeabbb5f24c40ef994b612515a0d0f356",
          promoModuleContentContainer: "rockstargames-sites-legacyef7d758b0d1515fcebe6cb22271a4688",
          promoModuleImage: "rockstargames-sites-legacyb8584eedfbe5a91aaf72c40ec1d619a5",
          promoModuleTextContent: "rockstargames-sites-legacyb590150a7ac01a01a493b85b7ea5cf90",
          promoModuleWrapper: "rockstargames-sites-legacyde25220583bb9220882329a113f7a5e2",
          right: "rockstargames-sites-legacyb69bb02f1c00007e9b4eab8217e2f08e",
          selected: "rockstargames-sites-legacye03b475da5ca3ded74e8c6dfd54fb476"
        },
        Ir = {
          alt: "",
          sources: {}
        },
        zr = ({
          backgroundColor: e,
          brands: a = [],
          description: t = "",
          ctaLabel: s,
          ctaLink: i = "https://rockstargames.com",
          gradient: r = !0,
          image: n,
          promoImg: c = Ir,
          imageOrientation: o = "right",
          title: d = "",
          name: l = "",
          style: f,
          imageStyle: u,
          _memoq: p
        }) => {
          const [h, y] = (0, g.useState)(!1), {
            ref: _,
            inView: x
          } = (0, k.useInView)({
            threshold: .6
          }), {
            isMobile: j
          } = (0, b.useWindowResize)(), {
            track: N
          } = (0, v.useGtmTrack)(), w = (0, z.useImageParser)(c), S = (0, z.useGetCdnSource)(n), C = j ? w?.src?.mobile : w?.src?.desktop, T = w?.alt ?? "", I = {
            ...f,
            "--promo-background": e ?? "var(--black-200)",
            "--promo-image": `url(${C??S??"var(--promo-background)"})`,
            "--promo-order": "left" === o ? "row" : "row-reverse"
          }, L = {
            ...u
          };
          return (0, g.useEffect)(() => {
            x && !h && (N({
              event: "page_section_impression",
              element_placement: l?.toLowerCase()
            }), y(!0))
          }, [x]), (0, m.jsx)(m.Fragment, {
            children: (0, m.jsx)("div", {
              className: Tr.promoModuleWrapper,
              children: (0, m.jsxs)(B.motion.div, {
                className: Tr.promoModule,
                style: {
                  ...I
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
                ref: _,
                children: [(0, m.jsx)("div", {
                  role: "img",
                  "aria-label": T,
                  className: [Tr.promoModuleImage, r ? Tr.gradient : "", "left" === o ? Tr.left : Tr.right].join(" "),
                  style: {
                    ...L
                  }
                }), (0, m.jsxs)("div", {
                  className: Tr.promoModuleContentContainer,
                  children: [(0, m.jsx)(Bs.A, {
                    brands: a
                  }), (0, m.jsxs)("div", {
                    className: Tr.promoModuleTextContent,
                    children: [d && (0, m.jsx)("h3", {
                      children: d
                    }), t && (0, m.jsx)("p", {
                      children: t
                    })]
                  }), s && (0, m.jsx)(Gs, {
                    to: i,
                    text: s,
                    onClick: () => {
                      N({
                        event: "cta_learn",
                        element_placement: "promo module",
                        link_url: i,
                        text: p?.ctaLabel?.toLowerCase()
                      })
                    }
                  })]
                })]
              })
            })
          })
        },
        Lr = {
          responsiveFlexBox: "rockstargames-sites-legacyfad65f02dd0ee292c36ec9d50b9c249a",
          responsiveFlexItem: "rockstargames-sites-legacyf5215494f66727858110c9c73e2d882a",
          responsiveImage: "rockstargames-sites-legacyd437a700a9b768227a114e70db78af03"
        },
        Pr = ({
          children: e,
          className: a,
          style: t
        }) => (0, m.jsx)("div", {
          className: [Lr.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Er = {
          responsiveFlexItem: "rockstargames-sites-legacye7371144db2e94a049204d4b178416ec"
        },
        Mr = ({
          children: e,
          className: a,
          style: t
        }) => (0, m.jsx)("div", {
          className: [Er.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Vr = {
          responsiveGridBox: "rockstargames-sites-legacye9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-sites-legacyb0d14e4a5e63a903117e93a392cbfb53"
        },
        Br = ({
          children: e,
          cols: a,
          className: t,
          rows: s,
          style: i
        }) => {
          const r = i ? {
            ...i
          } : {};
          return void 0 !== a && (r.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== s && (r.gridTemplateRows = `repeat(${s}, 1fr)`), (0, m.jsx)("div", {
            className: [Vr.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: r,
            children: e
          })
        },
        Dr = {
          responsiveGridBox: "rockstargames-sites-legacye721a07d53edbb90b165a7720bb32c08",
          responsiveGridItem: "rockstargames-sites-legacya32d93b6ae982b5ad473f75cf86ff085"
        },
        Ar = ({
          children: e,
          className: a,
          style: t
        }) => (0, m.jsx)("div", {
          className: [Dr.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        $r = {
          responsiveImage: "rockstargames-sites-legacyf642b754e0efd503262ab7ca0c7b9f5b"
        },
        Fr = ({
          src: e,
          className: a = "",
          animate: t,
          ariaLabel: s,
          style: i = {}
        }) => {
          const [r, n] = (0, b.usePreloadImg)(e);
          if (!r) return null;
          i.backgroundImage = `url(${e})`;
          const c = {
            ...i
          };
          return n && (c["--aspect-ratio"] = n.width / n.height), (0, m.jsx)("div", {
            role: "img",
            "aria-label": s ?? "R* Games",
            className: [$r.responsiveImage, t ? $r.animateBox : "", a].join(" "),
            style: c
          })
        },
        Or = {
          maxWidth: "rockstargames-sites-legacyb2c8f49e280c2e7c204b30a4af8c13b9",
          responsiveSection: "rockstargames-sites-legacybd7167fb3a3edaf4df4d9a576efb1170"
        },
        Gr = ({
          children: e,
          className: a,
          style: t,
          maxWidth: s
        }) => (0, m.jsx)("section", {
          className: [Or.responsiveSection, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: s ? (0, m.jsx)("div", {
            className: Or.maxWidth,
            children: e
          }) : e
        }),
        Rr = ({
          disableLink: e,
          className: a,
          "data-testid": t
        }) => {
          const s = e ? "span" : h.A;
          return (0, m.jsx)(s, {
            className: [e ? "rockstargames-sites-legacyb28a6ee32abeb20049b97677a86a4314" : "rockstargames-sites-legacya3d920a1139575706b914bc3a0100970", a || ""].join(" "),
            "data-testid": t,
            alt: "Rockstar Games Home",
            ...!e && {
              to: "/"
            }
          })
        };
      var Hr = t(50182);
      const Wr = ({
          html: e
        }) => (0, m.jsx)("div", {
          children: (0, Hr.Ay)(e)
        }),
        qr = ({
          thresholds: e,
          onThresholdReached: a,
          children: t
        }) => {
          const [s, i] = (0, g.useState)([]), [r, n] = (0, g.useState)(new Set);
          return (0, g.useEffect)(() => {
            const a = Array.from(new Set(e));
            a.sort((e, a) => e - a), i(a)
          }, [e]), (0, m.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [s.map(e => (0, m.jsx)(k.InView, {
              threshold: e,
              onChange: t => ((e, t) => {
                e && !r.has(t) && n(e => {
                  const i = new Set(e);
                  return s.forEach(e => {
                    e <= t && !i.has(e) && (i.add(e), a(e))
                  }), i
                })
              })(t, e),
              triggerOnce: !0,
              children: ({
                ref: a
              }) => (0, m.jsx)("div", {
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
        Ur = () => {
          const {
            pathname: e
          } = (0, ae.useLocation)();
          return (0, g.useEffect)(() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout(() => {
              e.scrollTop = 0
            }, 0)
          }, [e]), null
        };
      var Yr = t(33174);
      const Xr = ({
        children: e
      }) => (0, m.jsx)("div", {
        className: "rockstargames-sites-legacyaae4d33d1eecebdc9b489f8d7a1ad708",
        children: (0, m.jsx)("div", {
          className: "rockstargames-sites-legacyc573fe5c7bdcc46c4d57ec4a2c275e3b",
          children: e
        })
      });
      var Qr = t(99948);
      const Zr = {
          downVote: "rockstargames-sites-legacye23b13b0d0be49814d3770c10365c096",
          info: "rockstargames-sites-legacycee10f330f3ac6fba73fc06ac99bc951",
          loggedOutButtons: "rockstargames-sites-legacyc393b8f2d3b5b3e9204881ae6ff0fdc5",
          pillBtn: "rockstargames-sites-legacya0626acfa0dbdfdfd4f40b93134ac915",
          selected: "rockstargames-sites-legacyde6015fb35bdee07192c1656ba4893e3",
          upVote: "rockstargames-sites-legacyb3be682e82659d45f93c2fe63ccd73ba",
          userVote: "rockstargames-sites-legacyb32a59a8a63c53cc278266d726c9c5da",
          voteButtonActive: "rockstargames-sites-legacyf9e46f58f97d2b391aaf715861654cd7",
          voteButtons: "rockstargames-sites-legacydda673f7473820d8884c017373c780f6",
          voteContent: "rockstargames-sites-legacyaad01ad44bcc6161ad363910e931515f"
        },
        Kr = ({
          description: e,
          foreign_id: a = document.location.pathname,
          foreign_type: t = "url",
          title: s
        }) => {
          const {
            track: i
          } = (0, v.useGtmTrack)(), {
            loggedIn: r
          } = (0, v.useRockstarUser)(), {
            refetch: n
          } = (0, b.useQuery)(Qr.UserGetVote, {
            skip: !0
          }), [c] = (0, b.useMutation)(Qr.UserCastVote), [o, d] = (0, g.useState)(null), l = (0, g.useCallback)(async e => {
            i({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${t} ${a}`
            });
            const s = {
                foreign_id: a,
                foreign_type: t,
                vote: e
              },
              r = await c({
                variables: s
              });
            d(r?.data?.userCastVote?.vote ?? null)
          }, [a, t]);
          return (0, g.useEffect)(() => {
            (async () => {
              if (!r || !a || !t) return;
              const e = await n({
                foreign_id: a,
                foreign_type: t
              });
              d(e?.data?.userGetVote?.vote ?? null)
            })()
          }, [a, t, r]), (0, m.jsx)("div", {
            className: Zr.userVote,
            children: (0, m.jsxs)("div", {
              className: Zr.voteContent,
              children: [(0, m.jsxs)("div", {
                className: Zr.info,
                children: [(0, m.jsx)("h3", {
                  children: s
                }), (0, m.jsx)("p", {
                  children: e
                })]
              }), (0, m.jsxs)("div", {
                className: [Zr.voteButtons, r ? "" : Zr.loggedOutButtons].join(" "),
                children: [(0, m.jsx)("button", {
                  onClick: () => l(!0),
                  className: [Zr.upVote, o ? Zr.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, m.jsx)("button", {
                  className: [Zr.downVote, !1 === o ? Zr.voteButtonActive : ""].join(" "),
                  onClick: () => l(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Jr = {
          card: "rockstargames-sites-legacyf93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-sites-legacya1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-sites-legacydabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-sites-legacyfd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-sites-legacyb8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-sites-legacyfd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-sites-legacya626ad482ff0be0336e75929516654d5"
        },
        en = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [s] = (0, b.usePreloadImg)(t());
          return (0, m.jsx)("div", {
            className: [Jr.screencap, s ? Jr.screencapLoaded : ""].join(" "),
            "aria-hidden": "true",
            role: "img",
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        an = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: s,
          toExplicit: i
        }) => {
          const r = i ?? `/videos/${t.id}`,
            n = {
              className: Jr.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": r
            },
            c = (0, m.jsxs)("div", {
              className: Jr.card,
              children: [(0, m.jsx)(en, {
                video: t,
                size: s
              }), (0, m.jsxs)("div", {
                className: Jr.info,
                children: [e ? (0, m.jsx)("div", {
                  className: Jr.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, m.jsx)("h5", {
                  className: Jr.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, m.jsx)("a", {
            href: r,
            target: "_blank",
            ...n,
            children: c
          }) : (0, m.jsx)(h.A, {
            to: r,
            ...n,
            children: c
          })
        },
        tn = {
          active: "rockstargames-sites-legacye35688e0d87409e3aef95ffb624d94f4",
          carousel: "rockstargames-sites-legacybc3f1abaac4c17c0e9aaac5fccfc6f7e",
          cta: "rockstargames-sites-legacyf40c40ed1bc4242a32bc0628eea34048",
          disableClick: "rockstargames-sites-legacyfcd11cd5895147a9e08f8f4026d68d94",
          dots: "rockstargames-sites-legacye0ca3ed410818f0961345606a96f03ee",
          dragging: "rockstargames-sites-legacyb335b03fce6834b86318f3d7cbf3fab6",
          gameTitle: "rockstargames-sites-legacyb5d3df350466b14e4b419bdb479b4064",
          info: "rockstargames-sites-legacya4057ef942e10ebeedb1370b08c3c32b",
          items: "rockstargames-sites-legacyd30be9a5f31ff7fabf20969eec3200f1",
          slidesContent: "rockstargames-sites-legacyc4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-sites-legacycdb5c063bfc35cfbaaaefc68a77c1b07",
          title: "rockstargames-sites-legacye66c271fbbc8b6e431fc5d466c57479c",
          track: "rockstargames-sites-legacyefe7112432da76c65f293853b4c942d1",
          videoTitle: "rockstargames-sites-legacyed4138b1e7fecd4b6d29f0e1bef1fdfd"
        },
        sn = (0, p.defineMessages)({
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
        rn = (0, w.g)(({
          videos: e
        }) => {
          const a = (0, b.useLocale)(),
            {
              formatMessage: t
            } = (0, p.useIntl)(),
            {
              track: s
            } = (0, v.useGtmTrack)(),
            {
              setBodyIsLocked: i
            } = (0, b.useBodyScrollable)("VideoCarousel"),
            [r, n] = (0, g.useState)(0),
            [c, o] = (0, g.useState)(0),
            d = (0, g.useRef)(null),
            l = (0, g.useRef)(null);
          (0, g.useEffect)(() => {
            if (!d.current || !l.current) return;
            const a = new(Is())(d.current);
            a.get("press").set({
              time: 0
            }), a.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                n(r - 1 < 0 ? 0 : r - 1), o(0)
              },
              c = () => {
                const a = r + 1 >= e.length - 1 ? e.length - 1 : r + 1;
                n(a), o(0)
              },
              m = e => {
                o(e.isFinal ? 0 : e.deltaX), "panleft" !== e.type && "panright" !== e.type || !l.current?.classList.contains(tn.dragging) || t() && i(!0)
              },
              g = () => {
                t() && i(!1), o(0)
              },
              f = e => {
                "press" === e.type && d.current?.classList.add(`${tn.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${tn.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                t() && i(!1), d.current && d.current.classList.remove(`${tn.disableClick}`)
              },
              p = () => {
                t() && i(!1)
              };
            return l.current.addEventListener("transitionend", p), a.on("swiperight", s), a.on("swipeleft", c), a.on("pan", m), a.on("panend", g), a.on("press tap", f), a.on("pressup", u), () => {
              a.off("swiperight", s), a.off("swipeleft", c), a.off("pan", m), a.off("panend", g), a.off("press tap", f), a.off("pressup", u), l.current && l.current.removeEventListener("transitionend", p), o(0)
            }
          }, [d.current, r]);
          const f = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", t(a ? sn.learn_more : sn.watch_more)]
          };
          return (0, m.jsxs)("section", {
            className: tn.carousel,
            children: [(0, m.jsx)("div", {
              className: tn.track,
              ref: d,
              children: (0, m.jsx)("div", {
                className: `${tn.items} ${0!==c?tn.dragging:""}`,
                ref: l,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${c}px))`
                },
                children: e.map((e, a) => {
                  const [s, i, n] = f(e), c = "_blank" === n ? `${s} ${t(sn.aria_label_open_new_window)}` : `${s}`;
                  return (0, m.jsx)(ae.NavLink, {
                    className: r === a ? tn.active : "",
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": i,
                    to: i,
                    target: n,
                    rel: "noreferrer",
                    "aria-label": c,
                    onDragStart: e => {
                      e.preventDefault()
                    },
                    children: (0, m.jsx)(en, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                })
              })
            }), (0, m.jsxs)("div", {
              className: tn.slidesContent,
              children: [(0, m.jsx)("div", {
                className: tn.text,
                children: e.map((e, t) => {
                  const [i, n, c, o] = f(e);
                  return (0, m.jsxs)("div", {
                    className: [tn.info, t === r ? tn.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": n,
                    children: [(0, m.jsxs)("div", {
                      className: tn.title,
                      children: [(0, m.jsxs)("div", {
                        className: tn.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, m.jsx)("h2", {
                        className: tn.videoTitle,
                        children: i
                      })]
                    }), (0, m.jsx)(es, {
                      to: n,
                      target: c,
                      role: "presentation",
                      className: tn.cta,
                      "aria-label": `${o}, ${e.game.title} ${i}`,
                      onClick: (d = n, () => {
                        s({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: d,
                          element_placement: "video carousel"
                        })
                      }),
                      children: o
                    })]
                  }, e.id);
                  var d
                })
              }), (0, m.jsx)("section", {
                className: tn.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map((e, a) => (0, m.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => n(a),
                  className: r === a ? tn.active : "",
                  type: "button"
                }, e.id))
              })]
            })]
          })
        }),
        nn = (0, p.defineMessages)({
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
        cn = {
          img: "rockstargames-sites-legacyd87037fda2ea106061c7a614036a89df",
          imgContentful: "rockstargames-sites-legacyb9f3c994ce8a97ac6530cf0a85e5abe0",
          wide: "rockstargames-sites-legacydc444c089b89129c0a39bc61845d531f"
        };
      (0, b.importAll)(t(86751));
      const on = ({
          isWideCard: e = !1,
          size: a = 640,
          title: s,
          titleSlug: i,
          inGlobalNav: r = !1
        }) => {
          const {
            isMobile: n
          } = (0, b.useWindowResize)(), c = (0, g.useMemo)(() => {
            let s = "";
            return e && (s = n ? t(25087)(`./${i}/mobile/global.jpg`) : t(58963)(`./${i}/desktop/global.jpg`)), s || (s = t(39294)(`./${i}.jpg`), s += `?im=Resize=${a}`), s
          }, [n, i]), [o] = (0, b.usePreloadImg)(c);
          let d = c;
          return (0, m.jsx)("div", {
            role: "img",
            "aria-label": s,
            style: {
              backgroundImage: `url(${d})`,
              borderRadius: r ? "unset" : ""
            },
            className: [cn.img, o ? cn.startAnimation : "", e ? cn.wide : ""].join(" ")
          })
        },
        dn = {
          fobLink: "rockstargames-sites-legacyd30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-sites-legacyc9686ec502f78b05e47568667e90bd17"
        },
        ln = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: s = ""
          } = e, i = ["VI"].includes(t.toUpperCase());
          return (0, m.jsx)(h.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? s,
            target: "_self",
            className: [dn.fobLink, i ? dn.wide : ""].join(" "),
            reloadDocument: i,
            children: (0, m.jsx)(on, {
              title: e.title,
              titleSlug: t,
              isWideCard: i,
              size: i ? 1740 : 480
            })
          })
        },
        mn = {
          arrow: "rockstargames-sites-legacycabb1073f7b7f75b799c87d74cfaf0ad",
          arrowNav: "rockstargames-sites-legacyc9b73b78d75dd740e918208a9d615796",
          disabled: "rockstargames-sites-legacydbe1b06efadb349825f7b9b1b2778c68",
          items: "rockstargames-sites-legacyef63b0224f0cc9fa73a9c4549ad6c7e9",
          next: "rockstargames-sites-legacybfdf85a5867d26b52a0962be91170e36",
          partial: "rockstargames-sites-legacyab95829b388545f21071fd5bb97c25bb",
          previous: "rockstargames-sites-legacyd7404262ef1f79bde0883b02110a4a5d",
          sectionHeader: "rockstargames-sites-legacyad695c18d6276297e78924feea3e6201",
          track: "rockstargames-sites-legacya4d3877b3cf6bff0abccdc561c0fe149",
          trackWrapper: "rockstargames-sites-legacybd79ab04bc93e3bcf79be808e0a06e9b",
          videoList: "rockstargames-sites-legacybacddb57787eca7b621a046e6f23aaf5"
        },
        gn = (0, w.g)(({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: s
        }) => {
          const i = (0, p.useIntl)(),
            {
              track: r
            } = (0, v.useGtmTrack)(),
            n = void 0 !== a ? "games" : "videos",
            [c, o] = (0, g.useState)(),
            [d, l] = (0, g.useState)(),
            [f, u] = (0, g.useState)(0),
            b = (0, g.useRef)(null),
            k = (0, g.useRef)(null),
            h = (0, g.useRef)(null);
          (0, g.useEffect)(() => {
            l({
              nextEl: h.current,
              prevEl: k.current
            })
          }, [h, k]), (0, g.useEffect)(() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), u(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [f]);
          const y = e => {
            b.current && (b.current.scrollLeft = 0), c?.slideTo(e)
          };
          let _;
          return _ = "games" === n ? (0, m.jsx)(m.Fragment, {
            children: a.results.filter(e => "775700as" !== e.id).map((e, a) => (0, m.jsx)(me.qr, {
              className: mn.slide,
              onFocus: () => y(a),
              children: (0, m.jsx)(ln, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id))
          }) : (0, m.jsx)(m.Fragment, {
            children: e.map((e, a) => (0, m.jsx)(me.qr, {
              className: mn.slide,
              onFocus: () => y(a),
              children: (0, m.jsx)(an, {
                video: e,
                gameTitleNecessary: s
              })
            }, e.id))
          }), (0, m.jsxs)("section", {
            className: mn.videoList,
            children: [(0, m.jsxs)("h3", {
              className: mn.sectionHeader,
              children: [t, (0, m.jsxs)("div", {
                className: mn.arrowNav,
                children: [(0, m.jsx)("button", {
                  className: (0, Q.default)(mn.arrow, mn.previous),
                  type: "button",
                  ref: k,
                  "aria-label": i.formatMessage(nn.previous_button_label),
                  onKeyDown: e => {
                    "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), c?.slidePrev(), c?.isBeginning && c?.navigation?.nextEl?.focus())
                  }
                }), (0, m.jsx)("button", {
                  className: (0, Q.default)(mn.arrow, mn.next),
                  type: "button",
                  ref: h,
                  "aria-label": i.formatMessage(nn.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" !== e.key || e.shiftKey) "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), c?.slideNext(), c?.isEnd && c?.navigation?.prevEl?.focus());
                    else {
                      const a = c?.slides[c?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, m.jsx)("div", {
              className: (0, Q.default)(mn.items, f % 1 != 0 ? mn.partial : ""),
              children: (0, m.jsx)("div", {
                className: mn.trackWrapper,
                ref: b,
                children: f && (0, m.jsx)(me.RC, {
                  className: mn.track,
                  slidesPerView: f,
                  spaceBetween: 24,
                  onInit: e => {
                    o(e)
                  },
                  grabCursor: !0,
                  navigation: d,
                  modules: [us.A],
                  slideClass: (0, Q.default)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    r({
                      event: "carousel_next",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    r({
                      event: "carousel_previous",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    r({
                      event: "carousel_swipe",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  children: _
                })
              })
            })]
          })
        }),
        fn = ({
          children: e,
          ...a
        }) => (0, m.jsx)("span", {
          ...a,
          className: "rockstargames-sites-legacyacd86b7f5778381df8fac4a3f7489f60",
          children: e
        });
      var un = t(55409),
        pn = t(21017);
      const {
        JS: bn,
        CS: kn,
        XM: vn,
        Bg: hn
      } = d, yn = {
        Card: Ht,
        CardWithImageGallery: ({
          id: e,
          title: a,
          content: t,
          size: s = "md",
          expandedType: i = "gallery",
          textOverlayProps: r = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: n = [],
          deckProps: c = {},
          tina: o = {},
          payload: d,
          position: l = 0,
          sectionTitle: f = "",
          cardIds: u
        }) => {
          const p = (0, z.useTinaPayload)(),
            b = d ?? p,
            k = o?.payload?.meta?.cdn ?? b?.meta?.prod ?? !1,
            v = ((e, a) => e?.map(e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e))(n, k),
            [h, y] = (0, g.useState)(c?.size ?? s),
            {
              parent: _,
              main: x,
              thumbs: j
            } = xs?.cardWithImageGallery?.gallery ?? {};
          return (0, g.useEffect)(() => {
            y(c?.size ?? s)
          }, [c?.size, s]), (0, m.jsx)(Pt, {
            id: e,
            position: l,
            sectionTitle: f,
            payload: {
              content: t,
              meta: {},
              payload: b
            },
            title: a,
            size: h,
            expandedType: i,
            images: v,
            deckProps: c,
            prod: k,
            variants: xs.cardWithImageGallery,
            textOverlayProps: r,
            modalProps: {
              className: ys.customModal,
              contentClassName: ys.customModalContent
            },
            expandedCardContents: (0, m.jsx)(hs, {
              images: v,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: _,
                main: x,
                thumbs: j
              },
              transition: {
                parent: _s.cardOpen,
                main: _s.cardOpen,
                thumbs: _s.cardOpen
              }
            }, `expanded-${e}`),
            cardIds: u,
            children: (0, m.jsx)("div", {
              className: ys.content,
              children: (0, m.jsx)(jt, {
                title: a,
                size: h,
                textOverlayProps: r,
                children: (0, m.jsx)(hs, {
                  images: v,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        },
        TextCard: ({
          title: e,
          content: a,
          size: t = "md",
          badgeText: s
        }) => {
          const i = {
            ...(0, z.useTinaComponents)(),
            HTMLElement: We,
            UnorderedList: Va
          };
          return (0, m.jsx)("div", {
            className: "rockstargames-sites-legacycfa8d259e6ae05cd5f97d50306be5ffe",
            "data-size": t,
            children: (0, m.jsxs)("div", {
              className: "rockstargames-sites-legacya4a39548fac12526e8721ffa8813e66a",
              children: [s && (0, m.jsx)("div", {
                className: "rockstargames-sites-legacycf77e65e2af63ee114825607dde3d11e",
                children: s
              }), (0, m.jsxs)("div", {
                className: "rockstargames-sites-legacyf903ce7e605696e1bc18c4bc22274a6e",
                children: [e && (0, m.jsx)("h3", {
                  children: e
                }), (0, m.jsx)(z.TinaParser, {
                  components: i,
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
        ...l
      }, _n = kn.withFadeIn(hn(({
        cards: e = [],
        size: a,
        name: t,
        title: s,
        description: i,
        disclaimer: r,
        customSlidesPerView: n = null,
        theme: c = "none",
        cardSizeBreakpoints: o = {},
        customAspectRatio: d = "3/1",
        titleBadge: l = null,
        id: f = ""
      }) => {
        const u = (0, g.useRef)(null),
          p = (0, Ss.A)(e, "id"),
          b = vn({
            ids: p
          }),
          [k, v] = (0, g.useState)(n),
          [h] = (0, ae.useSearchParams)(),
          [y, _] = (0, g.useState)(!1);
        (0, g.useEffect)(() => {
          if ("fob" === a) {
            const e = h.get("section");
            if (e && "games" === e && !y && (_(!0), u.current)) {
              const e = 100;
              window.scrollTo(0, u.current.offsetTop - e)
            }
          }
        }, []), (0, g.useEffect)(() => {
          if (!u.current) return;
          const e = () => {
            if (!u.current) return;
            const e = n || window.getComputedStyle(u.current).getPropertyValue("--slides-per-view");
            v(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        });
        const x = (0, g.useMemo)(() => {
          let e = 0;
          if (!b) return null;
          let t = "blank",
            i = !1;
          return b.forEach(e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (i = e.tina.payload.content[0].excludeFromModal))
          }), b.reduce((r, n) => {
            if (n) {
              const {
                id: o,
                tina: d
              } = n, l = (0, Cs.A)(d);
              (0, Ka.A)(l, "payload.meta.id", o);
              const g = p.filter(e => e !== t || e === t && !i);
              r.push((0, m.jsx)(z.TinaParser, {
                components: yn,
                tina: l,
                componentProps: {
                  deckProps: {
                    size: a
                  },
                  tina: l,
                  id: o,
                  position: e,
                  sectionTitle: s,
                  theme: c,
                  cardIds: g
                }
              }, o)), e += 1
            }
            return r
          }, [])
        }, [b, a]);
        return (0, m.jsxs)("div", {
          className: "rockstargames-sites-legacycf8eaaa96e41e0c9b5a5a1745ded9986",
          "data-theme": c,
          ref: u,
          id: f,
          children: [(0, m.jsx)(bn, {
            description: i,
            size: a,
            cardSizeBreakpoints: o,
            slideChildren: x,
            title: s,
            name: t,
            customSlidesPerView: k,
            customAspectRatio: d,
            titleBadge: l,
            theme: c
          }), r && (0, m.jsx)("div", {
            className: "rockstargames-sites-legacyd6d0f9d842469dec608825829148dff6",
            children: (0, m.jsx)("span", {
              className: "rockstargames-sites-legacye22c0580e1e1d2471b4ca2e60e6b900f",
              children: (0, m.jsx)(Wr, {
                html: r
              })
            })
          })]
        })
      })), xn = "rockstargames-sites-legacye81ac885e47451ab08344f0c1fa13b7c", jn = ({
        title: e,
        children: a,
        onClose: t
      }) => {
        const s = {
          ease: [.77, 0, .175, 1],
          duration: .5
        };
        return (0, g.useEffect)(() => {
          const e = e => {
            "Escape" === e.key && t()
          };
          return window.addEventListener("keydown", e), () => {
            window.removeEventListener("keydown", e)
          }
        }, [t]), (0, m.jsx)(B.AnimatePresence, {
          children: (0, m.jsx)(B.motion.div, {
            role: "presentation",
            className: "rockstargames-sites-legacyc9f8e43995a8ce2ff568b617259a3a66",
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            transition: s,
            children: (0, m.jsx)("dialog", {
              role: "presentation",
              id: "masonryDialog",
              className: "rockstargames-sites-legacycc3a19d84abadf78a497b5469ad8cf93",
              onClick: e => (e => {
                if (!e.currentTarget) return;
                const a = e.currentTarget.getBoundingClientRect();
                (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && t(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
              })(e),
              children: (0, m.jsx)(je(), {
                active: !0,
                focusTrapOptions: {
                  allowOutsideClick: !0
                },
                children: (0, m.jsxs)("div", {
                  className: "rockstargames-sites-legacyde3996af9f4417fb338f186108c5776c",
                  children: [(0, m.jsxs)("div", {
                    className: "rockstargames-sites-legacya606f3ed70ea0351f0f2827b23dfad16",
                    children: [e && (0, m.jsx)("h3", {
                      className: "rockstargames-sites-legacyc1e85a5f2a356c58a7a60d79d5e5aa68",
                      children: e
                    }), (0, m.jsx)("button", {
                      type: "button",
                      id: "close",
                      "aria-label": "close",
                      className: "rockstargames-sites-legacyfae0929e69b3cd2f8bb4927a7ea55038",
                      onClick: t
                    })]
                  }), (0, m.jsx)(B.motion.div, {
                    className: "rockstargames-sites-legacyac8a03037217b26eaff55634e5e9c45b",
                    initial: {
                      opacity: 0,
                      scale: .5
                    },
                    animate: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: s,
                    children: a
                  })]
                })
              })
            })
          })
        })
      }, Nn = ({
        buttonStyle: e = "borderless",
        platformsAndLinks: a = [],
        label: t = "",
        useModal: s = !1
      }) => {
        const [i, r] = (0, g.useState)(!1);
        return s ? (0, m.jsxs)(m.Fragment, {
          children: [(0, m.jsx)("button", {
            className: "rockstargames-sites-legacyca96f78291381a7d1dfc00a3de5d07bb",
            onClick: () => r(!i),
            children: t
          }), i && (0, he.createPortal)((0, m.jsx)(jn, {
            title: t,
            onClose: () => r(!1),
            children: (0, m.jsx)("div", {
              className: xn,
              children: a?.length ? a.map(a => (0, m.jsx)(Qt, {
                platformItem: a.platform,
                href: a.href,
                variant: "platform",
                platformStyle: e,
                gtm: a.gtm
              }, `${a.key}-${a.href}-${a.platform}`)) : ""
            })
          }), document.body)]
        }) : (0, m.jsxs)("div", {
          className: "rockstargames-sites-legacyd68369e5750fd5a6745b7f55ecdfb95a",
          children: [t && (0, m.jsx)("div", {
            className: "rockstargames-sites-legacyb38a559f97761aa5d5f14f3048c79409",
            children: t
          }), (0, m.jsx)("div", {
            className: xn,
            children: a?.length ? a.map(a => (0, m.jsx)(Qt, {
              platformItem: a.platform,
              href: a.href,
              variant: "platform",
              platformStyle: e,
              gtm: a.gtm
            }, `${a.key}-${a.href}-${a.platform}`)) : ""
          })]
        })
      }, wn = ({
        id: e,
        title: a,
        body: t,
        backgroundImageAndMask: s,
        image: i,
        buttonCollections: r,
        ...n
      }) => {
        const [c] = (0, ae.useSearchParams)(), {
          key: o
        } = (0, ae.useLocation)(), d = (0, b.useLocale)(), l = i?.sources?.[d] ?? i?.sources?.en_us, f = l?.mobile ?? l?.desktop, {
          track: u
        } = (0, v.useGtmTrack)(), {
          ref: p,
          inView: h,
          entry: y
        } = (0, k.useInView)({
          threshold: .6
        }), [_, x] = (0, g.useState)(!1), j = (0, z.useGetCdnSource)(f ?? null), N = (0, z.useGetCdnSource)(s?.backgroundImage?.mobile), w = (0, z.useGetCdnSource)(s?.backgroundImage?.desktop ?? N), S = (0, z.useGetCdnSource)(s?.backgroundImageMask?.mobile), C = (0, z.useGetCdnSource)(s?.backgroundImageMask?.desktop ?? S), T = !(!C && !S), I = {
          ...w && {
            "--background-image-desktop": `url(${w})`
          },
          ...N && {
            "--background-image-mobile": `url(${N})`
          },
          ...C && {
            "--image-mask-desktop": `url(${C})`
          },
          ...S && {
            "--image-mask-mobile": `url(${S})`
          },
          "--background-attachment": s?.backgroundImage?._memoq?.backgroundAttachment || "",
          "--background-clip": s?.backgroundImage?._memoq?.backgroundClip || "",
          "--background-color": s?.backgroundImage?._memoq?.backgroundColor || "",
          "--background-origin": s?.backgroundImage?._memoq?.backgroundOrigin || "",
          "--background-position": s?.backgroundImage?._memoq?.backgroundPosition || "",
          "--background-repeat": s?.backgroundImage?._memoq?.backgroundRepeat || "",
          "--background-size": s?.backgroundImage?._memoq?.backgroundSize || ""
        };
        (0, g.useEffect)(() => {
          y?.target && c.get("section") && (0, b.detectIfWeShouldAnchorSomewhere)()
        }, [o, y?.target]), (0, g.useEffect)(() => {
          h && !_ && (u({
            event: "page_section_impression",
            element_placement: n?._memoq?.title?.toLowerCase()
          }), x(!0))
        }, [h]), !T && w && (I.background = `url(${w}) center / cover no-repeat`);
        const L = (0, m.jsxs)("div", {
          ref: p,
          className: "rockstargames-sites-legacyadcd8d241981100755a742c74e7bd94f",
          id: e ?? "",
          children: [(0, m.jsxs)("div", {
            className: "rockstargames-sites-legacybda7a52557d65b5b77591cb72cd816cd",
            children: [(0, m.jsxs)("div", {
              className: "rockstargames-sites-legacyac76b38d897113817fe23bc213c15e78",
              children: [(0, m.jsx)("h2", {
                className: "rockstargames-sites-legacyf3a2443fd11c6b4985040c0c8b8626dd",
                children: a
              }), t && (0, m.jsx)("div", {
                className: "rockstargames-sites-legacydbc11e7a1290bf63806e68015190226e",
                dangerouslySetInnerHTML: {
                  __html: (P = t, P ? P.split(/\r?\n/).filter(e => e.trim()).map(e => `<p>${e}</p>`).join("") : "")
                }
              })]
            }), r?.map(({
              key: e,
              ...a
            }) => (0, m.jsx)(Nn, {
              ...a
            }, e))]
          }), (0, m.jsx)("div", {
            className: "rockstargames-sites-legacydeba9959998ba6d23ac352b4e9ecc4f6",
            children: j && (0, m.jsx)("img", {
              src: j,
              alt: "Red Dead Redemption"
            })
          })]
        });
        var P;
        return (0, m.jsx)(B.motion.div, {
          className: "rockstargames-sites-legacycac3b31dae278727a39f512006bda9e5",
          initial: "hidden",
          animate: "visible",
          variants: {
            visible: {
              opacity: 1,
              width: "100%",
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
          style: I,
          "data-has-mask": T,
          children: L
        })
      }, Sn = {
        contentWrapper: "rockstargames-sites-legacyef5fd586a3a3d71a6b742534583a024c",
        legacyPageTemplate: "rockstargames-sites-legacyee87a30aaa5f73108a19c7f2e825c468",
        maxWidthContainer: "rockstargames-sites-legacyfefeb2c2da5d3a02fe39fd2219a4b3b7",
        pillBtn: "rockstargames-sites-legacyddd61c57b98274deba1ff3133021c385",
        rdrUltra: "rockstargames-sites-legacye92ae324b26f8bcac90fd4e5fd37615c",
        selected: "rockstargames-sites-legacyfaeeb24b4865af92a9d379b83295e3f7",
        universalCyrillic: "rockstargames-sites-legacya759b2acd24574b2ee2c6bfd7eec2630",
        videoPlayerContainer: "rockstargames-sites-legacyff18d36d928ea542eeef6bb5d05262d5",
        videosContainer: "rockstargames-sites-legacyf8000eec4a4f435f367d27b1d20a53de"
      }, Cn = {
        HighlightsItem: u.HighlightsItem,
        legacy: {
          LegacyPageTemplate: ({
            headerFont: e,
            hero: a,
            featureBlockBackgroundImageGroup: t,
            features: s,
            fob: i = {},
            highlightCollection: r,
            imageGallery: n,
            relatedLinks: c,
            titleSlug: o,
            backgroundFields: d,
            tinaModuleId: l,
            videoProps: g
          }) => {
            const f = e ? Sn[e] : "",
              p = {},
              k = {
                Deck: _n,
                CoverCard: ws,
                Card: Ht
              },
              v = g?.id || "",
              h = (0, b.useLocale)(),
              y = d?.style["--legacy-custom-background"] || d?.style["--legacy-background-color"] || "#161616",
              {
                key: _,
                ...x
              } = i;
            return p["--playlist-background-color"] = g?.["--playlist-background-color"], p["--template-bg-color"] = y, (0, m.jsx)(I, {
              children: (0, m.jsxs)("div", {
                className: [Sn.legacyPageTemplate, f].join(" "),
                "data-brand": o,
                style: p,
                children: [a && (0, m.jsx)(C.default, {
                  animated: a.animated,
                  content: a.content,
                  id: "hero",
                  images: a.images,
                  shardsSection: a.shardsSection,
                  subHero: a.subHero,
                  type: a.type
                }), s?.length && (0, m.jsx)(ee, {
                  id: "features",
                  features: s,
                  backgroundImageGroup: t
                }), (0, m.jsxs)("div", {
                  className: Sn.maxWidthContainer,
                  children: [n?.collections?.length && (0, m.jsx)(De, {
                    id: "imageGallery",
                    imageGallery: n
                  }), r?.highlights && (0, m.jsx)("div", {
                    className: Sn.contentWrapper,
                    children: (0, m.jsx)(u.Highlights, {
                      highlights: r?.highlights,
                      subtitle: r?.subtitle ?? r?._memoq?.subtitle
                    })
                  }), (0, m.jsx)(m.Fragment, {
                    children: g && v && (0, m.jsxs)("div", {
                      className: Sn.videosContainer,
                      children: [(0, m.jsx)("h2", {
                        children: g.sectionLabel
                      }), (0, m.jsx)("div", {
                        className: Sn.videoPlayerContainer,
                        children: (0, m.jsx)(L.VideoWithPlaylist, {
                          tagIds: [Number(g.videoTag ?? 0)],
                          className: Sn.legacyVideoStyles,
                          autoplay: !1,
                          locale: h,
                          playlistTitle: g.playlistTitle,
                          currentVideoId: v
                        })
                      })]
                    })
                  }), x && (0, m.jsx)(wn, {
                    id: "order",
                    ...x
                  }), c && (0, m.jsx)(de, {
                    id: "relatedLinks",
                    title: c?.title,
                    buttons: c?.buttons
                  })]
                }), (0, m.jsx)("div", {
                  className: Sn.tinaModuleContainer,
                  children: (0, m.jsx)(Re, {
                    components: k,
                    id: l
                  })
                }), (0, m.jsx)("div", {
                  className: Sn.maxWidthContainer,
                  children: o && (0, m.jsx)(S, {
                    id: "rating",
                    titleSlug: o
                  })
                })]
              })
            })
          }
        },
        gen9: {
          TinaWrapper: f
        }
      }
    },
    5328(e, a, t) {
      const s = {
        "./applestore.svg": 49733,
        "./googleplay.svg": 62749,
        "./left.svg": 84941,
        "./pc.svg": 39821,
        "./pcalt.svg": 29886,
        "./ps.svg": 65437,
        "./ps3.svg": 33492,
        "./ps4.svg": 65115,
        "./ps5.svg": 23146,
        "./right.svg": 80304,
        "./switch.svg": 22454,
        "./x.svg": 66426,
        "./xbox.svg": 59129,
        "./xboxone.svg": 42659,
        "./xboxseriesxs.svg": 36773
      };

      function i(e) {
        const a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 5328
    },
    36672(e, a, t) {
      const s = {
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
        "./vaci_rp.png": 32323,
        "./vi-src/cero.png": 30179,
        "./vi-src/csrr_TW.png": 88430,
        "./vi-src/esrb.svg": 50229,
        "./vi-src/ola.png": 45058,
        "./vi-src/pegi_DE.png": 19981,
        "./vi-src/pegi_EN.png": 38309,
        "./vi-src/pegi_ES.png": 4032,
        "./vi-src/pegi_FR.png": 23832,
        "./vi-src/pegi_IT.png": 24731,
        "./vi-src/pegi_PL.png": 35040,
        "./vi-src/usk.svg": 71172
      };

      function i(e) {
        const a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 36672
    },
    8194(e, a, t) {
      const s = {
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
        "./vaci_rp.png": 32323,
        "./vi-src/cero.png": 30179,
        "./vi-src/csrr_TW.png": 88430,
        "./vi-src/esrb.svg": 50229,
        "./vi-src/ola.png": 45058,
        "./vi-src/pegi_DE.png": 19981,
        "./vi-src/pegi_EN.png": 38309,
        "./vi-src/pegi_ES.png": 4032,
        "./vi-src/pegi_FR.png": 23832,
        "./vi-src/pegi_IT.png": 24731,
        "./vi-src/pegi_PL.png": 35040,
        "./vi-src/usk.svg": 71172
      };

      function i(e) {
        const a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 8194
    },
    65287(e, a, t) {
      const s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function i(e) {
        const a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 65287
    },
    86751(e, a, t) {
      const s = {
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

      function i(e) {
        const a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 86751
    },
    39294(e, a, t) {
      const s = {
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

      function i(e) {
        const a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 39294
    },
    58963(e, a, t) {
      const s = {
        "./VI/desktop/global.jpg": 57156
      };

      function i(e) {
        const a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 58963
    },
    25087(e, a, t) {
      const s = {
        "./VI/mobile/global.jpg": 52640
      };

      function i(e) {
        const a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 25087
    },
    49733(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    62749(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    84941(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    39821(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    29886(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg"
    },
    65437(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    33492(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    65115(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    23146(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    80304(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    22454(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    66426(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    59129(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    42659(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    36773(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
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
    30179(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    88430(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c5d802cb41e7fdb37c89694e187dda09.png"
    },
    50229(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/92038ab9ddee3a9650603bfffd804826.svg"
    },
    45058(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    19981(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/00ecf4cdf8a2d9212fcacc7ca09fa8b6.png"
    },
    38309(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6d497fe2cadcb769498a1af0b800be76.png"
    },
    4032(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6d497fe2cadcb769498a1af0b800be76.png"
    },
    23832(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/41a88b303ad1ad4c625de8c48e08c8fa.png"
    },
    24731(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2665f718e4f31036b2801fb15aaf9bc2.png"
    },
    35040(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/60a3f079187e0ef5c65e1618d3974625.png"
    },
    71172(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7e12b2a1eb41606694120df41021fdea.svg"
    },
    7502(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    24970(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    2661(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    16386(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    38635(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    14804(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
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
    9333(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    28839(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    55815(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    66787(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    85719(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    80391(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    47240(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    81715(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    }
  }
]);