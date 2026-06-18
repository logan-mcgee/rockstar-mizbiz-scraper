try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a205c2b7-7fd0-4104-9c84-8f5995973371", e._sentryDebugIdIdentifier = "sentry-dbid-a205c2b7-7fd0-4104-9c84-8f5995973371")
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
  [6685], {
    80957(e) {
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
    30026(e) {
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
    70386(e) {
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
    69138(e) {
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
    27750(e) {
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
    42249(e) {
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
    70265(e) {
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
    4588(e) {
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
    81207(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var r = t(39793),
        s = t(93082),
        i = t(36038),
        o = t.n(i),
        n = t(13331),
        c = t(80957);
      const l = {
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
        d = ({
          src: e
        }) => (0, r.jsx)("div", {
          className: l.cover,
          style: {
            background: `url(${e}) center/cover`
          }
        }),
        m = ({
          timing: e = {
            current: 0,
            duration: 0
          },
          playing: a,
          audioRef: t,
          setPlaying: i,
          tracksOpen: n,
          setTracksOpen: c,
          trackData: d,
          setTrackId: m,
          trackBounds: _,
          setAutoNext: u
        }) => {
          const b = (0, s.useRef)(null),
            p = (0, s.useRef)(null),
            g = (0, s.useRef)(null),
            [f, k] = (0, s.useState)(null),
            [v, h] = (0, s.useState)(!1),
            w = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                r = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`
            };
          return (0, s.useEffect)(() => {
            if (!p.current || !g.current) return;
            const e = () => {
              g.current && p.current && k(g.current.clientWidth > p.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }, [g, p, e]), (0, s.useEffect)(() => {
            if (!b.current || !e?.duration) return;
            let a = null;
            const r = new(o())(b.current),
              s = a => {
                if (b.current) {
                  const r = b.current.clientWidth;
                  if (!b.current.contains(a.srcEvent.target)) return;
                  const s = Math.max(0, a.srcEvent.offsetX),
                    i = Number(s / r * e.duration);
                  t.currentTime = i
                }
              },
              i = () => {
                a ? t.pause() : t.play()
              },
              n = () => {
                a = t.paused, t.pause()
              };
            return r.on("panstart", n), r.on("panleft", s), r.on("panright", s), r.on("panend", i), r.on("tap", s), () => {
              r.off("panstart", n), r.off("panleft", s), r.off("panright", s), r.off("panend", i), r.off("tap", s)
            }
          }, [b.current, e.duration]), (0, s.useEffect)(() => {
            const e = Number(t?.currentTime);
            (a || !isNaN(e) && 0 !== e) && h(!0)
          }, [a, t?.currentTime]), (0, r.jsxs)("div", {
            className: l.controls,
            style: {
              "--track-color": d.color,
              "--track-mix-blend-mode": d.mix_blend_mode,
              "--current-pct": e.current / e.duration
            },
            children: [(0, r.jsx)("div", {
              className: [l.controlsCurrentBg, v ? l.controlsCurrentBgVisible : ""].join(" ")
            }), (0, r.jsx)("div", {
              className: l.controlsTrack,
              ref: p,
              children: (0, r.jsx)("span", {
                className: [l.controlsTrackTitle, f ? l.controlsTrackAnimating : ""].join(" "),
                ref: g,
                children: d.title
              })
            }), (0, r.jsxs)("div", {
              className: l.controlsButtons,
              children: [(0, r.jsx)("div", {
                className: l.controlsPrevTrack,
                onClick: () => {
                  _ && (m(_[0]), u(!0), i(!0))
                }
              }), (0, r.jsx)("div", {
                className: [l.controlsPlayPause, a ? l.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!a)
                }
              }), (0, r.jsx)("div", {
                className: l.controlsNextTrack,
                onClick: () => {
                  _ && (m(_[1]), u(!0), i(!0))
                }
              })]
            }), (0, r.jsx)("div", {
              "data-active": n ? "" : null,
              className: l.controlsTrackBurger,
              children: (0, r.jsx)("div", {
                className: l.iconBurger,
                onClick: () => {
                  c(!n)
                }
              })
            }), (0, r.jsxs)("div", {
              className: l.controlsScrub,
              children: [(0, r.jsx)("span", {
                children: w(e.current)
              }), (0, r.jsx)("div", {
                className: l.controlsScrubTrack,
                ref: b
              }), (0, r.jsx)("span", {
                children: w(e.duration)
              })]
            })]
          })
        },
        _ = ({
          tracks: e,
          trackId: a,
          setTrackId: t,
          tracksOpen: s,
          setTracksOpen: i,
          setPlaying: o,
          setAutoNext: n
        }) => (0, r.jsxs)("div", {
          className: l.tracks,
          children: [(0, r.jsx)("h4", {
            children: "Tracks"
          }), (0, r.jsx)("div", {
            className: l.trackBurger,
            onClick: () => {
              i(!s)
            }
          }), (0, r.jsx)("div", {
            className: l.trackList,
            children: e.map((e, s) => (0, r.jsxs)("a", {
              style: {
                "--highlight-color": e.color
              },
              className: a === e.id ? l.trackActive : "",
              onClick: () => {
                t(e.id), o(!0), n(!0)
              },
              children: [(0, r.jsx)("span", {
                className: l.trackIndex,
                children: String(s + 1).padStart(2, "0")
              }), (0, r.jsx)("span", {
                className: l.trackTitle,
                children: e.title
              }), (0, r.jsx)("span", {
                className: l.trackTime,
                children: e.duration
              })]
            }, e.id))
          })]
        }),
        u = ({
          id: e,
          className: a = ""
        }) => {
          const {
            data: t
          } = (0, n.useQuery)(c.GetAudioAlbum, {
            variables: {
              id: e
            }
          }), [i, o] = (0, s.useState)(), [u, b] = (0, s.useState)(), [p, g] = (0, s.useState)(), [f, k] = (0, s.useState)(!1), [v, h] = (0, s.useState)(!1), [w, y] = (0, s.useState)(), [j, x] = (0, s.useState)({
            current: 0,
            duration: 0
          }), [N, S] = (0, s.useState)(!0);
          return (0, s.useEffect)(() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (b(a.data.rockstarAudioPlayerPlayTrackId), S(!1), h(!0)), v && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && h(!1)
              };
            return v && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }, [v]), (0, s.useEffect)(() => {
            if (!w) return;
            const e = () => {
                isNaN(w.duration) || x({
                  duration: w?.duration ?? 0,
                  current: w?.currentTime ?? 0
                })
              },
              a = () => {
                N && i && b(i[1])
              };
            return w.addEventListener("loadedmetadata", e), w.addEventListener("timeupdate", e), w.addEventListener("ended", a), () => {
              w.removeEventListener("loadedmetadata", e), w.removeEventListener("timeupdate", e), w.removeEventListener("ended", a)
            }
          }, [w, i, N]), (0, s.useEffect)(() => {
            v && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }, [v]), (0, s.useEffect)(() => {
            w && (v ? w.play() : w.pause(), k(!1))
          }, [v, w, p?.id]), (0, s.useEffect)(() => {
            if (!u) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex(e => e.id === u);
            o([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), g(e[a])
          }, [u]), (0, s.useEffect)(() => {
            t && b(t.audioAlbum.tracks[0].id)
          }, [t]), p ? (0, r.jsxs)("div", {
            className: [l.player, l[a], f ? l.tracksOpen : ""].join(" "),
            children: [(0, r.jsx)("audio", {
              ref: e => {
                y(e)
              },
              src: p.mp3_src
            }), (0, r.jsx)(_, {
              tracks: t.audioAlbum.tracks,
              setTrackId: b,
              trackId: u,
              tracksOpen: f,
              setTracksOpen: k,
              setPlaying: h,
              setAutoNext: S
            }), (0, r.jsx)(d, {
              src: p.cover_src
            }), (0, r.jsx)(m, {
              setTrackId: b,
              trackBounds: i,
              tracksOpen: f,
              setTracksOpen: k,
              playing: v,
              setPlaying: h,
              timing: j,
              trackData: p,
              audioRef: w,
              setAutoNext: S
            })]
          }) : null
        }
    },
    30489(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var r = t(39793),
        s = t(93082),
        i = t(42285),
        o = t(13331),
        n = t(82199),
        c = t(30026),
        l = t(1e4);
      const d = ({
          className: e
        }) => (0, r.jsxs)("svg", {
          className: e,
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, r.jsx)("path", {
            d: "M3.33203 8.5H12.6654",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, r.jsx)("path", {
            d: "M8 3.83331L12.6667 8.49998L8 13.1666",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }),
        m = {
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
        _ = ({
          foreign_id: e,
          foreign_type: a
        }) => {
          const {
            track: t
          } = (0, n.useGtmTrack)(), {
            refetch: i
          } = (0, o.useQuery)(c.UserGetVote, {
            skip: !0
          }), [l] = (0, o.useMutation)(c.UserCastVote), [d, _] = (0, s.useState)(null), u = (0, s.useCallback)(r => {
            (async () => {
              if (r === d && null !== d) _(null);
              else {
                _(r), t({
                  event: "cta_" + (r ? "like" : "dislike"),
                  text: `${a} ${e}`
                });
                const s = {
                  foreignId: e,
                  foreignType: a,
                  vote: r
                };
                await l({
                  variables: s
                })
              }
            })()
          }, [e, a, d]);
          return (0, s.useEffect)(() => {
            e && a && (async () => {
              const t = await i({
                foreignId: e,
                foreignType: a
              });
              _(t?.data?.userGetVote?.vote ?? null)
            })()
          }, [e, a]), (0, r.jsxs)("div", {
            className: m.calloutVoteForm,
            children: [(0, r.jsx)("button", {
              "aria-label": "upvote",
              className: [m.upvote, m.voteButton, d ? m.active : ""].join(" "),
              name: "upvote",
              onClick: () => u(!0),
              type: "button"
            }), (0, r.jsx)("button", {
              "aria-label": "downvote",
              className: [m.downvote, m.voteButton, !1 === d ? m.active : ""].join(" "),
              name: "downvote",
              onClick: () => u(!1),
              type: "button"
            })]
          })
        },
        u = ({
          action_text: e,
          link: a,
          trackingData: t
        }) => {
          const {
            track: s
          } = (0, n.useGtmTrack)();
          return (0, r.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, r.jsxs)("button", {
              className: m.calloutLink,
              type: "button",
              onClick: t ? () => s({
                ...t
              }) : () => {},
              children: [e, (0, r.jsx)(d, {
                className: m.calloutLinkIcon
              })]
            })
          })
        },
        b = ({
          helperText: e,
          linkText: a,
          link: t,
          trackingData: s
        }) => {
          const {
            track: i
          } = (0, n.useGtmTrack)();
          return (0, r.jsxs)("div", {
            className: m.actionFooter,
            children: [e, a && " ", a && (0, r.jsx)("a", {
              href: t ?? "",
              onClick: () => i({
                ...s
              }),
              children: a
            })]
          })
        },
        p = (0, o.withTranslations)(({
          header: e,
          subheader: a,
          type: t,
          action_text: c,
          link: d,
          foreign_id: p = document.location.pathname,
          foreign_type: g = "url",
          className: f = "",
          actionFooterHelperText: k,
          actionFooterLinkText: v,
          actionFooterLink: h,
          trackingData: w = {},
          actionFooterLinkTrackingData: y = {},
          t: j,
          ...x
        }) => {
          const {
            loggedIn: N
          } = (0, n.useRockstarUser)(), {
            track: S
          } = (0, n.useGtmTrack)(), C = document.location.pathname, {
            signInUrl: T
          } = (0, o.useScAuthLinks)(C), {
            ref: A,
            inView: I
          } = (0, i.useInView)({
            threshold: .6
          }), [E, z] = (0, s.useState)(!1);
          let P;
          if ((0, s.useEffect)(() => {
              I && !E && (S({
                event: "page_section_impression",
                element_placement: `callout section - ${x?.sectionName??x?._memoq?.header}`
              }), z(!0))
            }, [I]), !e && !a) return null;
          switch (t) {
            case "vote":
              if (!N) {
                P = (0, r.jsx)(l.A, {
                  to: T,
                  className: m.calloutButton,
                  onClick: w ? () => S({
                    ...w
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              P = (0, r.jsx)(_, {
                foreign_id: p,
                foreign_type: g
              });
              break;
            case "button":
              c && d && (P = (0, r.jsx)(l.A, {
                to: d,
                className: m.calloutButton,
                onClick: w ? () => S({
                  ...w
                }) : () => {},
                children: c
              }));
              break;
            case "link":
              c && d && (P = (0, r.jsx)(u, {
                action_text: c,
                link: d,
                trackingData: w
              }));
              break;
            default:
              P = null
          }
          return (0, r.jsx)("div", {
            className: `${m.calloutContainer} ${f||""}`,
            ref: A,
            children: (0, r.jsxs)("div", {
              className: m.calloutSection,
              children: [(0, r.jsxs)("div", {
                className: [m.calloutHeaders, P ? m.calloutHeaderMargins : ""].join(" "),
                children: [e && (0, r.jsx)("h2", {
                  className: m.calloutHeader,
                  children: j(e)
                }), a && (0, r.jsx)("h3", {
                  className: m.calloutSubheader,
                  children: j(a)
                })]
              }), (0, r.jsxs)("div", {
                className: m.actionBlock,
                children: [P, k && (0, r.jsx)(b, {
                  helperText: k,
                  linkText: v,
                  link: h,
                  trackingData: y
                })]
              })]
            })
          })
        })
    },
    75138(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var r = t(39793),
        s = t(93082),
        i = t(14653),
        o = t(50662),
        n = t(39279),
        c = t(81270),
        l = t(45970);
      const d = {
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
      var m = t(68291),
        _ = t(44453);
      const u = ({
          item: e
        }) => (0, r.jsxs)("div", {
          children: [(0, r.jsx)(_.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, c.default)(d.img, e?.className)
          }), (e?.title || e?.description) && (0, r.jsx)(m.A, {
            item: e
          })]
        }),
        b = ({
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
        p = ({
          children: e,
          items: a = [],
          style: t = {},
          noInfiniteScroll: _ = !1,
          className: p = "",
          renderTemplate: g = "standard",
          text: f,
          customSpaceBetween: k = null,
          centerSlides: v = !0,
          centeredSlidesBounds: h = !1
        }) => {
          const w = (0, l.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [y, j] = (0, s.useState)(0),
            [x, N] = (0, s.useState)(null),
            S = (0, s.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, n.A)()) : null, [e, w]),
            C = e => {
              if (!e) return;
              let a = 0;
              e.pagination.bullets.forEach((e, t) => {
                e.classList.contains("swiper-pagination-bullet-active") && (a = t)
              }), j(a)
            };
          if (!(a && 0 !== a?.length || e)) return null;
          const T = {
            0: {
              spaceBetween: k ?? 16
            },
            1024: {
              spaceBetween: k ?? 18
            },
            1920: {
              spaceBetween: k ?? 20
            },
            2560: {
              spaceBetween: k ?? 22
            }
          };
          return (0, r.jsxs)("div", {
            className: (0, c.default)(d.deprecatedCarousel, d[g], d.infinite_true, e ? d.renderedWithChildren : "", p),
            style: t,
            "data-testid": "carousel",
            children: [(0, r.jsxs)(i.RC, {
              modules: [o.dK, o.Jq],
              pagination: !0,
              a11y: {
                enabled: !0,
                scrollOnFocus: !0
              },
              updateOnWindowResize: !1,
              loop: !1,
              grabCursor: !0,
              centeredSlides: v,
              centerInsufficientSlides: v,
              centeredSlidesBounds: h,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: T,
              onSlideChange: e => {
                C(e)
              },
              onResize: e => {
                null != x && clearTimeout(x);
                const a = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), C(e)
                }, 250);
                N(a)
              },
              children: [(0, r.jsx)("div", {
                className: d.trackWrapper,
                children: (0, r.jsxs)("div", {
                  className: d.track,
                  children: [a?.map(e => (0, r.jsx)(i.qr, {
                    tabIndex: 0,
                    children: (0, r.jsx)(u, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, a) => e && (0, r.jsx)(i.qr, {
                    children: e
                  }, S && S[a]))]
                })
              }), (0, r.jsx)(b, {
                current: y,
                total: e ? e.length : a.length
              })]
            }), (f?.title || f?.description) && (0, r.jsx)(m.A, {
              item: f
            })]
          })
        }
    },
    98906(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => h
      });
      var r = t(39793),
        s = t(93082),
        i = t(36416),
        o = t(82199),
        n = t(13331),
        c = t(80391),
        l = t(28985),
        d = t(47240),
        m = t(32903),
        _ = t(81715),
        u = t(49429),
        b = t(11008);
      const p = {
          ps: c,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: l,
          ps5: d,
          switch: b,
          nintendoswitch: b,
          nintendoswitch2: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7696cbc8ff9dc5f2ed3f618ea7252e3b.svg",
          xbox: m,
          xboxone: u,
          xboxseriesxs: _,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: t(85719),
          pcalt: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          netflix: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc13a3a816ffa3f7e379ea32a79f99a3.svg",
          default: ""
        },
        g = e => p[e] || null,
        f = {
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
        };
      var k = t(81270);
      const v = ({
          platform: e = "",
          altText: a
        }) => {
          const t = e ? g(e) : null,
            s = t ? (0, r.jsx)("img", {
              className: f.platformIcon,
              src: t,
              alt: a
            }) : null;
          return (0, r.jsx)("span", {
            className: [f.btnContent, f.platformButton].join(" "),
            children: s
          })
        },
        h = ({
          children: e,
          href: a,
          style: t,
          content: c,
          variant: l = null,
          size: d = "medium",
          icon: m,
          iconPosition: _ = "none",
          iconStyle: u,
          badge: b,
          badgeStyle: p,
          platformItem: h,
          platformStyle: w = "border",
          gtm: y = {},
          disabled: j,
          reloadDocument: x = !1,
          className: N,
          role: S = "button"
        }) => {
          const {
            track: C
          } = (0, o.useGtmTrack)(), T = (0, n.useDataLayer)(), A = c ?? e, I = (0, n.findPlatform)(h)?.friendlyName, E = (0, s.useMemo)(() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch {
              t = e
            }
            return e === t
          }, [a]), z = (0, s.useCallback)(() => {
            j || C({
              event: "cta_other",
              text: c?.toLowerCase() ?? e ?? void 0,
              ...T,
              ...y,
              link_url: a ?? void 0
            })
          }, [y, a, T]), P = () => m ? (0, r.jsx)("span", {
            className: [f.icon, `icon-${_}`].join(" "),
            style: u,
            children: (0, r.jsx)("img", {
              className: f.btnIcon,
              src: g(m) || "",
              alt: `${m} icon`
            })
          }) : null;
          return (0, r.jsx)(i.Link, {
            to: a,
            target: E ? "_self" : "_blank",
            className: (0, k.default)(f.cta, "platform" === l && h ? f[h] : "", w && f[w], j ? f.disabled : "", N),
            style: t,
            "data-variant": l,
            "data-size": d,
            onClick: z,
            "aria-label": A,
            reloadDocument: x,
            role: S,
            children: "platform" === l && h ? (0, r.jsx)(v, {
              platform: h,
              altText: I || A
            }) : (0, r.jsxs)("div", {
              className: f.btnContent,
              children: ["left" === _ && P(), (0, r.jsx)("span", {
                className: f.label,
                children: A
              }), "right" === _ && P(), b ? (0, r.jsx)("span", {
                className: f.badge,
                style: p,
                children: b
              }) : null]
            })
          })
        }
    },
    68291(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var r = t(39793),
        s = t(81270),
        i = t(95967),
        o = t(12334),
        n = t(5413);
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
    32858(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var r = t(39793),
        s = t(93082);
      const i = {
          animateBox: "rockstargames-modules-core-newswire-articleb07a3be6338e0ba4b346b072762582e3",
          animateMe: "rockstargames-modules-core-newswire-articlef7adfd0186421cac9ad0b300911cc9af",
          bar: "rockstargames-modules-core-newswire-articlebbb7e636ac00581aed0b7e148916cc11",
          barGrow: "rockstargames-modules-core-newswire-articlee0262d00df9ad8a47b08ae84160bfa51",
          fadeArea: "rockstargames-modules-core-newswire-articlef47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-modules-core-newswire-articlec121e11e40215dc778fe8665eb38845d"
        },
        o = ({
          children: e,
          style: a
        }) => {
          const t = (0, s.useRef)(null);
          return (0, s.useEffect)(() => {
            new IntersectionObserver(e => {
              e.forEach(e => {
                e.isIntersecting && e.target.classList.add([i.visible])
              })
            }).observe(t?.current)
          }, []), (0, r.jsx)("div", {
            style: a,
            className: [i.fadeArea].join(" "),
            ref: t,
            children: e
          })
        }
    },
    12540(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(39793),
        s = t(45124);
      const i = ({
        html: e
      }) => (0, r.jsx)("div", {
        children: (0, s.Ay)(e)
      })
    },
    35246(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var r = t(82199),
        s = t(93082);
      const i = (e = [], a, t) => {
          const r = (0, s.useRef)(null),
            i = (0, s.useRef)(new Set),
            o = (0, s.useRef)([]),
            n = (0, s.useRef)(0),
            c = (0, s.useRef)(0),
            l = (0, s.useRef)(!1),
            d = (0, s.useMemo)(() => Array.from(new Set(e.filter(e => e >= 0 && e <= 100))).sort((e, a) => e - a), [e]);
          return (0, s.useEffect)(() => {
            i.current = new Set, o.current = d.slice()
          }, [d]), (0, s.useEffect)(() => {
            r.current = t ?? window
          }, [t]), (0, s.useEffect)(() => {
            const e = r.current;
            if (!e) return;
            const s = () => {
              l.current || (l.current = !0, requestAnimationFrame(() => {
                (() => {
                  const {
                    scrollTop: r,
                    scrollHeight: l,
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
                  n.current = d, c.current = r;
                  const m = o.current.find(e => d >= e);
                  if (!m) return;
                  if (i.current.has(m)) return;
                  i.current.add(m), o.current = o.current.filter(e => e !== m);
                  const _ = l * (m / 100);
                  a?.({
                    scrollY: m,
                    scrollLength: _
                  }), 0 === o.current.length && e.removeEventListener("scroll", s, {
                    capture: !1
                  })
                })(), l.current = !1
              }))
            };
            return s(), e.addEventListener("scroll", s, {
              passive: !0
            }), () => {
              e.removeEventListener("scroll", s, {
                capture: !1
              })
            }
          }, [a, t, d.join(",")]), {
            scrollY: n.current,
            scrollLength: c.current
          }
        },
        o = ({
          threshold: e,
          trackRef: a,
          children: t
        }) => {
          const {
            track: s
          } = (0, r.useGtmTrack)();
          return i(e, ({
            scrollY: e,
            scrollLength: a
          }) => {
            s({
              event: "page_scroll",
              scroll_depth: e,
              page_length: `${Math.round(a)}px`
            })
          }, a?.current ?? null), t
        }
    },
    68993(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var r = t(39793),
        s = t(93082),
        i = t(36416),
        o = t(13331);
      const n = (0, o.withTranslations)(({
        t: e
      }) => {
        const [a] = (0, s.useState)(""), t = (0, i.useNavigate)(), n = (0, o.useMutateState)();
        return (0, r.jsxs)("form", {
          action: "#",
          className: "rockstargames-modules-core-newswire-articlec9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), n({
              navOpen: !1
            }), document.activeElement?.blur?.();
            const a = e.currentTarget.elements.namedItem("q").value;
            t(`/search?q=${a}`)
          },
          role: "search",
          children: [(0, r.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, r.jsx)("input", {
            autoComplete: "off",
            defaultValue: a,
            enterKeyHint: "search",
            name: "q",
            placeholder: e("Search Rockstar Games")
          })]
        })
      })
    },
    79113(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => _
      });
      var r = t(39793),
        s = t(93082),
        i = t(24815),
        o = t(82199),
        n = t(14653),
        c = t(50662);
      const l = "rockstargames-modules-core-newswire-articleb7d3d1587271986440f5870d8d02eb3b",
        d = "rockstargames-modules-core-newswire-articlefcffcc6e594fbf9a4a6e9ab5a8d034c7",
        m = {
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
        _ = ({
          title: e = "thumbnail gallery",
          thumbsPerView: a = 3,
          loop: t = !1,
          navigation: _ = !1,
          slideChildren: u = [],
          variants: b = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          },
          transition: p = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          }
        }) => {
          const {
            track: g
          } = (0, o.useGtmTrack)(), [f, k] = (0, s.useState)([c.U1, c.WO, c.dK]), [v, h] = (0, s.useState)(null), [w, y] = (0, s.useState)(null);
          return (0, s.useEffect)(() => {
            const e = [c.U1, c.WO, c.dK];
            _ && e.push(c.Vx), k(e)
          }, [_]), (0, s.useEffect)(() => {
            if (!u) return;
            const e = u.map((e, a) => (0, r.jsx)(n.qr, {
              children: e
            }, Symbol(a).toString()));
            y(e)
          }, [u]), w ? (0, r.jsxs)(i.P.div, {
            className: "rockstargames-modules-core-newswire-articlef2d55de974817e455a162843125a8771",
            variants: b.parent,
            transition: p.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, r.jsx)(i.P.div, {
              className: l,
              variants: b.main,
              transition: p.main,
              initial: "initial",
              animate: "animate",
              children: (0, r.jsx)(n.RC, {
                loop: t,
                navigation: _,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: v
                },
                modules: f,
                breakpoints: m,
                className: l,
                onSlideNextTransitionEnd: () => {
                  g({
                    event: "carousel_next",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  g({
                    event: "carousel_previous",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  g({
                    event: "carousel_swipe",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                children: w
              })
            }), (0, r.jsx)(i.P.div, {
              className: d,
              variants: b.thumbs,
              transition: p.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, r.jsx)(n.RC, {
                threshold: 50,
                onSwiper: h,
                loop: t,
                breakpoints: m,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: f,
                className: d,
                children: w
              })
            })]
          }) : null
        }
    },
    32255(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => _,
        X: () => m
      });
      var r = t(39793),
        s = t(17301),
        i = t(13331),
        o = t(59426),
        n = t(85705),
        c = t(72132);
      const l = {
          gen9Hero: () => (0, r.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleee796fcf55787f1dd1af025b1ec9d6b8",
            children: (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articled2e785bbf2071e806cee23e58d1a3b53",
              children: (0, r.jsx)(c.A, {
                type: "SPINNING"
              })
            })
          })
        },
        d = ({
          name: e
        }) => {
          const a = (e => e ? e.trim() : "")(e),
            t = l[a];
          return t ? (0, r.jsx)(t, {}) : null
        },
        m = ({
          id: e = null,
          ids: a = null,
          setTitleDataPath: t = null,
          sync: r = !1
        }) => {
          const s = a ?? [e],
            {
              data: o
            } = (0, i.useQuery)(n.TinaModulesInfo, {
              variables: {
                ids: s,
                sync: r
              },
              setTitleDataPath: t,
              skip: !s.length
            });
          return o?.tinaModulesInfo ?? null
        },
        _ = (0, o.A)(({
          components: e = {},
          id: a = null,
          ids: t = null,
          skeleton: i = null
        }) => {
          const o = m({
              id: a,
              ids: t
            }),
            n = o?.[0]?.tina;
          return n ? (0, r.jsx)(r.Fragment, {
            children: o.map(({
              tina: a
            }, t) => (0, r.jsx)(s.TinaParser, {
              components: e,
              tina: a,
              componentProps: {
                tinaModulesInfo: o
              }
            }, t))
          }) : i ? (0, r.jsx)(d, {
            name: i
          }) : null
        }, {
          header: null
        })
    },
    58585(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var r = t(39793),
        s = t(42909);
      const i = (0, s.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            description: "Tracklist",
            defaultMessage: "Tracklist"
          }
        }),
        o = {
          bodySmall: "rockstargames-modules-core-newswire-articledeed018133fca0148d0bf72fbe95bcd6"
        },
        n = ({
          track: e,
          artist: a
        }) => (0, r.jsxs)("div", {
          className: o.track,
          children: [(0, r.jsx)("p", {
            children: e
          }), (0, r.jsx)("p", {
            className: o.bodySmall,
            children: a
          })]
        }),
        c = (0, t(30433).g)(({
          content: e = []
        }) => (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlee2587587f57e43c9ca90d1e16e4a6ca6",
          children: [(0, r.jsx)("h4", {
            className: "rockstargames-modules-core-newswire-articleef167f82b058360b2b6a3466ca73d7de",
            children: (0, r.jsx)(s.FormattedMessage, {
              ...i.components_track_list_title
            })
          }), (0, r.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlebeaa4a0a8d9f3a6ef20ee517f222a3c2",
            children: (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlec06a65e90847e8b44df20f2aceb57038",
              children: e?.map(e => (0, r.jsx)(n, {
                track: e.track,
                artist: e.artist
              }, e.key))
            })
          })]
        }))
    },
    2183(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var r = t(39793);
      const s = ({
        children: e,
        ...a
      }) => (0, r.jsx)("span", {
        ...a,
        className: "rockstargames-modules-core-newswire-articleacd86b7f5778381df8fac4a3f7489f60",
        children: e
      })
    },
    59070(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var r = t(39793);
      const s = ({
        text: e,
        style: a
      }) => (0, r.jsx)("div", {
        className: "rockstargames-modules-core-newswire-articlec08a001134624b9ceb275eae413bfd3d",
        style: a,
        children: e
      })
    },
    65977(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        A: () => s.A,
        AlertDialog: () => Re,
        AudioPlayer: () => i.A,
        Badge: () => o.A,
        Brands: () => c,
        Button: () => l.A,
        ButtonGroup: () => v,
        CalloutSection: () => A.A,
        Carousel: () => h.A,
        CharacterCard: () => w,
        ConditionalBlock: () => T,
        CookieAB: () => M,
        CountryInputField: () => P,
        Cta: () => D.A,
        DescriptionArea: () => Y.A,
        DiscountsBadge: () => X.A,
        DotLoader: () => Z,
        Dropdown: () => te,
        Embed: () => ie,
        ExpandingPlatformButton: () => oe.A,
        FadeInContent: () => ne.A,
        FoundryButton: () => $,
        FoundryIconButton: () => G,
        Gen9Button: () => k,
        Gen9CoreCarousel: () => pe,
        Grid: () => re.A,
        HTMLElement: () => Ne.A,
        Hero: () => xe,
        HookStore: () => N,
        ImageTextGroup: () => U,
        ImageTextGroupGroup: () => K,
        ImageWithBadge: () => ze.A,
        LayeredImage: () => Ae,
        Lightbox: () => Ee,
        LoadingAnimation: () => et.A,
        MultiSourceImage: () => Se.A,
        NewswireBlocks: () => qe,
        NewswireCard: () => Ve.A,
        NewswireList: () => Ge,
        NewswireRelated: () => Oe.A,
        NewswireTag: () => Be.A,
        OrderedList: () => Ue.A,
        Paging: () => Ye,
        ParallaxCacheBuster: () => Je,
        ParallaxInnerLayer: () => ea,
        ParallaxOuterLayer: () => ta,
        ParallaxWrapper: () => Qe,
        PlatformTag: () => tt.Ay,
        PromoModule: () => ia,
        Rating: () => la,
        ResponsiveFlexBox: () => da.A,
        ResponsiveFlexItem: () => ma.A,
        ResponsiveGridBox: () => _a.A,
        ResponsiveGridItem: () => ua.A,
        ResponsiveImg: () => ba.A,
        ResponsiveSection: () => pa.A,
        RockstarLogo: () => ga,
        RpCategory: () => at,
        SafeHtml: () => fa.A,
        ScrollSection: () => ka,
        ScrollToTop: () => va,
        ScrollTracker: () => ha.A,
        SearchBox: () => wa.A,
        Separator: () => ya.A,
        SrcsetImage: () => Le,
        StorybookWrapper: () => ja,
        TextFit: () => xa,
        ThumbsGallery: () => Sa.A,
        TinaModuleFetchNRender: () => Ca.A,
        TinaWrapper: () => Ta,
        TrackList: () => Na.A,
        UnorderedList: () => Aa.A,
        UserVote: () => za,
        VideoCard: () => r,
        VideoCarousel: () => $a,
        VideoList: () => Wa,
        VisuallyHidden: () => Ka.A,
        Wasted: () => Ya.A,
        framer: () => O,
        useTinaModuleFetchByIds: () => Ca.X,
        withSearchbarErrorBoundary: () => Qa,
        withSimpleErrorBoundary: () => me.A
      });
      var r = {};
      t.r(r), t.d(r, {
        Art: () => Da,
        Link: () => Ra
      });
      var s = t(38044),
        i = t(81207),
        o = t(59070),
        n = t(39793);
      const c = ({
        brands: e = []
      }) => e.length ? (0, n.jsx)("div", {
        className: "rockstargames-modules-core-newswire-articleb53b6eca487387fc5c2057daf151691a",
        children: e.map((e, a) => (0, n.jsx)("div", {
          role: "img",
          "aria-label": e?.brandLabel,
          className: "rockstargames-modules-core-newswire-articlee8c3be7a76fd7e532e74a9fcf87bee09",
          "data-brand": e.brand
        }, a))
      }) : null;
      var l = t(1e4),
        d = t(81270),
        m = t(36416),
        _ = t(9441),
        u = t(42909);
      const b = (0, u.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        p = {
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
        g = ({
          children: e,
          className: a,
          onClick: t,
          style: r,
          ariaLabel: s
        }) => (0, n.jsx)("button", {
          className: a,
          onClick: t,
          style: r,
          type: "button",
          "aria-label": s,
          children: e
        }),
        f = ({
          children: e,
          className: a,
          onClick: t,
          style: r,
          to: s,
          ariaLabel: i
        }) => (0, n.jsx)(m.NavLink, {
          className: a,
          onClick: t,
          style: r,
          to: s,
          "aria-label": i,
          children: e
        }),
        k = ({
          btnColor: e = "#fff",
          className: a = "",
          consoleBtn: t,
          icon: r = "",
          img: s,
          labelColor: i = "#000",
          onClick: o,
          secondText: c,
          size: l,
          text: d,
          to: m,
          type: k = "",
          ariaLabel: v
        }) => {
          const {
            formatMessage: h
          } = (0, u.useIntl)(), w = [p.plusButton, p[k] ?? "", p[l] ?? "", p[t] ?? "", a].join(" "), y = {
            "--hvr-color": e ?? i,
            "--hvr-bg-color": i ?? e,
            "--hvr-border-color": e ?? i
          }, j = (0, n.jsxs)(n.Fragment, {
            children: [s ? (0, n.jsx)("img", {
              src: s,
              alt: ""
            }) : "", (0, n.jsxs)("div", {
              className: p.btnText,
              icon: r,
              children: [d, c ? (0, n.jsx)("span", {
                children: c
              }) : ""]
            })]
          });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, n.jsxs)("a", {
                href: m,
                target: e,
                onClick: o,
                onKeyDown: o,
                className: w,
                "aria-label": v,
                tabIndex: 0,
                children: [j, "_blank" === e && (0, n.jsx)(_.ExternalLink, {
                  label: h(b.aria_label_open_new_window)
                })]
              })
            }
            return (0, n.jsx)(f, {
              className: w,
              onClick: o,
              style: {
                ...y
              },
              to: m,
              ariaLabel: v,
              children: j
            })
          }
          return (0, n.jsx)(g, {
            className: w,
            onClick: o,
            style: {
              ...y
            },
            ariaLabel: v,
            children: j
          })
        },
        v = ({
          buttons: e = [],
          className: a
        }) => e.length ? (0, n.jsx)("div", {
          className: (0, d.default)("rockstargames-modules-core-newswire-articlebbd74dec556da7f5c06710c72c662f8a", a),
          children: e.map(({
            icon: e,
            title: a,
            to: t
          }, r) => a ? (0, n.jsx)(k, {
            icon: e,
            text: a,
            to: t
          }, r) : "")
        }) : null;
      var h = t(75138),
        w = t(2122),
        y = t(93082),
        j = t(13331),
        x = t(82199);
      const N = (0, t(54472).FF)(),
        S = e => e.some(e => !e),
        C = ({
          condition: e = null,
          children: a
        }) => {
          const [t, r] = (0, y.useState)(!1), s = (e => {
            const [a] = (0, m.useSearchParams)(), [t, r] = (0, y.useState)(null), s = (0, x.useRockstarUser)(), {
              loggedIn: i,
              data: o
            } = s, {
              hasGtaPlus: n
            } = o ?? {};
            return (0, y.useEffect)(() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              N.applyFilters("preview_conditions", e);
              const s = [];
              return e.forEach(e => {
                const {
                  value: r
                } = e;
                if (t) return "true" === a.get(r) ? (s.push(!0), !0) : (s.push(!1), !1);
                if (S(s)) return !1;
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
              }), r(!S(s)), () => {}
            }, [a, e, n, s, i]), t
          })(e);
          return (0, y.useEffect)(() => {
            r(s)
          }, [s]), (0, y.useMemo)(() => t ? a : null, [t])
        },
        T = (0, j.withTranslations)(({
          children: e
        }) => y.Children.map(y.Children.toArray(e), e => (0, n.jsx)(C, {
          ...e?.props
        })));
      var A = t(30489),
        I = t(67127),
        E = t(56386),
        z = t.n(E);
      const P = ({
        isMulti: e,
        allowSelectAll: a,
        label: t,
        miscProps: r
      }) => {
        const [s, i] = (0, y.useState)(""), o = (0, y.useMemo)(() => z()().getData(), []);
        return (0, n.jsx)(I.Ay, {
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
      var L = t(77678);
      const M = ({
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
          e && a && (document.cookie = `${e}=${a}; domain=${(0,L.F)()}; path=/;`)
        })(e, i), s === a || i === a ? t : r
      };
      var D = t(98906),
        R = t(27859),
        V = t(74645),
        F = t(91318);
      const $ = (0, y.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          label: t,
          href: r,
          target: s,
          justifySelf: i = "center",
          ...o
        }, c) {
          const l = (0, F.m)(a, "normal"),
            d = (0, R.v6)({
              "data-testid": e,
              className: l
            }, o);
          return (0, n.jsx)(V.Button, {
            ref: c,
            ...d,
            asChild: !0,
            children: (0, n.jsx)(m.Link, {
              to: r,
              target: s,
              style: {
                justifySelf: i
              },
              children: t
            })
          })
        }),
        G = (0, y.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          href: t,
          target: r,
          justifySelf: s = "center",
          ...i
        }, o) {
          const c = (0, F.m)(a, "normal"),
            l = (0, R.v6)({
              "data-testid": e,
              className: c
            }, i);
          return (0, n.jsx)(V.IconButton, {
            ref: o,
            ...l,
            asChild: !0,
            children: (0, n.jsx)(m.Link, {
              to: t,
              target: r,
              style: {
                justifySelf: s
              }
            })
          })
        });
      var O = t(28097),
        B = t(17301),
        H = t(42285);
      const q = ({
          disclaimer: e,
          text: a = null,
          title: t,
          className: r = "",
          style: s = {}
        }) => {
          const i = a ?? e?.text ?? null,
            o = t ? `<h5>${t}</h5>${i}` : i;
          return i ? (0, n.jsx)("div", {
            className: (0, d.default)("rockstargames-modules-core-newswire-articledabdd1de832b01e0bfed17e54d2c48f3", r),
            dangerouslySetInnerHTML: {
              __html: o
            },
            style: s
          }) : null
        },
        U = O.withFadeIn(({
          brands: e = [],
          content: a,
          ctas: t = [],
          disclaimer: r,
          image: s,
          large: i = !1,
          title: o,
          image_on_right: l = !1,
          style: m = {},
          className: _ = "",
          ...u
        }) => {
          const {
            track: b
          } = (0, x.useGtmTrack)(), {
            ref: p,
            inView: g
          } = (0, H.useInView)({
            threshold: .6
          }), [f, k] = (0, y.useState)(!1), h = (0, B.useGetCdnSource)(s?.full_src ?? null) ?? null;
          return (0, y.useEffect)(() => {
            g && !f && (b({
              event: "page_section_impression",
              element_placement: u?._memoq?.title?.toLowerCase()
            }), k(!0))
          }, [g]), (0, n.jsxs)("div", {
            className: (0, d.default)("rockstargames-modules-core-newswire-articlee74584d7bd5e5fb4f95b021aea5552e9", i ? "rockstargames-modules-core-newswire-articleecfb600d2677601c52a9b2ba82ea92a0" : "", l ? "rockstargames-modules-core-newswire-articlec1c30f86159b786afa96b64de61d4581" : "", h ? "" : "rockstargames-modules-core-newswire-articlea66c759349419a25e6ac54202d7fc085", _),
            style: m,
            ref: p,
            children: [h ? (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlec6a4abbe875f9c0cadd82e5b2b2ad16c",
              style: {
                background: `url(${h}) no-repeat center/cover`
              }
            }) : "", (0, n.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled14a6281007b78ed0259affd98faeada",
              children: [(0, n.jsx)(c, {
                brands: e
              }), (0, n.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlebfdc6a008924ac08afb945e8c501d855",
                children: [(0, n.jsx)("h2", {
                  className: "rockstargames-modules-core-newswire-articlebe9969843594b0b04199cf75f098d91c",
                  children: o
                }), a ? (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleea4015cd0c04b61c6b1f8a4a4a92e337",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                }) : ""]
              }), (0, n.jsx)(v, {
                ctas: t
              }), (0, n.jsx)(q, {
                disclaimer: r
              })]
            })]
          })
        }),
        W = {
          bg: "rockstargames-modules-core-newswire-articled1579fc7a24c295dbe890d8aae408666",
          bgDesktop: "rockstargames-modules-core-newswire-articlea2a6f7c576116735efd4216aeff67734",
          bgMobile: "rockstargames-modules-core-newswire-articleea7956f9173046a1ed7292458dfb5b9e",
          imageTextGroupGroup: "rockstargames-modules-core-newswire-articlebde0bad35b79e73435595e8f30e4adfc",
          pillBtn: "rockstargames-modules-core-newswire-articlefa50d8c1862c94f2cd3200103d1d0e69",
          selected: "rockstargames-modules-core-newswire-articlede81b5eeed31c861fe39ee5062dee5a7"
        },
        K = ({
          bg: e,
          image_text_groups: a = [],
          style: t = {},
          className: r = ""
        }) => {
          const s = (0, B.useGetCdnSource)(e?.image?.mobile?.full_src ?? null),
            i = (0, B.useGetCdnSource)(e?.image?.desktop?.full_src ?? null) ?? s;
          return a.length ? (0, n.jsxs)("div", {
            className: (0, d.default)(W.imageTextGroupGroup, r),
            style: t,
            children: [s ? (0, n.jsx)("div", {
              className: [W.bgMobile, W.bg].join(" "),
              style: {
                background: `url(${s}) no-repeat center/cover`
              }
            }) : "", i ? (0, n.jsx)("div", {
              className: [W.bgDesktop, W.bg].join(" "),
              style: {
                background: `url(${i}) no-repeat center/cover`
              }
            }) : "", a.map((e, a) => (0, y.createElement)(U, {
              ...e,
              key: a
            }))]
          }) : null
        };
      var Y = t(68291),
        X = t(76862);
      const J = "rockstargames-modules-core-newswire-articlea19bcd2b98d91e60c43b9de146e20f4e",
        Z = ({
          color: e
        }) => (0, n.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlee83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, n.jsx)("div", {
            className: J
          }), (0, n.jsx)("div", {
            className: J
          }), (0, n.jsx)("div", {
            className: J
          })]
        });
      var Q = t(44514),
        ee = t.n(Q);
      const ae = {
          dropdownWrapper: "rockstargames-modules-core-newswire-articlebbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-modules-core-newswire-articlea9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-modules-core-newswire-articledf17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-modules-core-newswire-articlecb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-modules-core-newswire-articlefe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        te = ({
          children: e,
          className: a,
          title: t
        }) => {
          const [r, s] = (0, y.useState)(!1);
          return (0, n.jsx)(ee(), {
            active: r,
            focusTrapOptions: {
              onDeactivate: () => s(!1),
              clickOutsideDeactivates: !0
            },
            children: (0, n.jsxs)("div", {
              className: [ae.dropdownWrapper, r ? ae.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, n.jsx)("button", {
                className: ae.opener,
                "aria-expanded": r,
                onClick: () => s(!r),
                children: t
              }), r && (0, n.jsx)("div", {
                className: ae.items,
                onClick: () => s(!1),
                children: e
              })]
            })
          })
        };
      var re = t(5004);
      const se = ({
          caption: e,
          children: a,
          ...t
        }) => e ? (0, n.jsxs)("figure", {
          ...t,
          children: [a, (0, n.jsx)("figcaption", {
            dangerouslySetInnerHTML: {
              __html: e
            }
          })]
        }) : a,
        ie = ({
          componentTitle: e,
          type: a,
          items: t
        }) => t?.length ? (0, n.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleaee2a98f97e777758e2d9bec034314ee",
          type: a,
          children: (0, n.jsxs)(re.A, {
            children: [e && (0, n.jsx)("h3", {
              children: e
            }), (0, n.jsx)(re.A, {
              className: "rockstargames-modules-core-newswire-articledba17b5c55f8d40e2600765f1a60d6af",
              children: t.map((e, a) => {
                return e?.embed ? (0, n.jsx)(se, {
                  caption: e?.caption,
                  children: (0, n.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlef0cd8278232673606f9c1715bd4950f6",
                    dangerouslySetInnerHTML: {
                      __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                    }
                  }, `${e?.key??a}_div`)
                }, e?.key ?? a) : e?.text ? (0, n.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: e.text
                  }
                }, e?.key ?? a) : void 0;
                var t
              })
            })]
          })
        }) : null;
      var oe = t(11251),
        ne = t(32858),
        ce = t(40283),
        le = t(50662),
        de = t(14653),
        me = t(59426),
        _e = t(30433);
      const ue = (0, u.defineMessages)({
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
        be = ({
          prevRef: e,
          nextRef: a,
          onNextClicked: t,
          onPrevClicked: r,
          onNextKeyDown: s,
          testId: i
        }) => {
          const {
            formatMessage: o
          } = (0, u.useIntl)();
          return (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleb8d5ef10008331a9f6d3a6bdf1690d01",
            "data-testid": `${i}-controls`,
            children: [(0, n.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlec38cd500d52d07bd012e288dc0b4f635",
              ref: e,
              onClick: r,
              "aria-label": o(ue.carousel_previous_slide_label)
            }), (0, n.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articleb24ada0f7959966c6d950567eaaafce2",
              ref: a,
              onClick: t,
              onKeyDown: s,
              "aria-label": o(ue.carousel_next_slide_label)
            })]
          })
        },
        pe = (0, me.A)((0, _e.g)(({
          description: e,
          slideChildren: a,
          size: t,
          title: r,
          name: s,
          customSlidesPerView: i = null,
          customSpaceBetween: o = null,
          slideClass: c,
          style: l,
          className: m,
          cardSizeBreakpoints: _,
          customAspectRatio: u,
          titleBadge: b,
          theme: p
        }) => {
          const {
            track: g
          } = (0, x.useGtmTrack)(), f = (0, y.useRef)(null), k = (0, y.useRef)(null), v = (0, y.useRef)(null), [h, w] = (0, y.useState)(null), [j, N] = (0, y.useState)(!1), [S, C] = (0, y.useState)(null), [T, A] = (0, y.useState)(), [I, E] = (0, y.useState)(), {
            ref: z,
            inView: P
          } = (0, H.useInView)({
            threshold: .6
          }), [L, M] = (0, y.useState)(!1), [D, R] = (0, y.useState)(null), [V, F] = (0, y.useState)(!1), [$, G] = (0, y.useState)(0), [O, B] = (0, y.useState)(0);
          (0, y.useEffect)(() => {
            const e = () => {
              F(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, y.useEffect)(() => {
            const e = () => {
              T && !(0, ce.isEmpty)(T) && T?.height > 0 && T?.height !== $ && G(T?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [T]);
          const q = {
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
          (0, y.useEffect)(() => {
            if (!f.current) return;
            const e = () => {
              if (f.current) {
                const e = i || Number(window.getComputedStyle(f.current).getPropertyValue("--slides-per-view")),
                  a = i ? 1 : Number(window.getComputedStyle(f.current).getPropertyValue("--slides-per-view-multiplier"));
                C(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [f, i]), (0, y.useEffect)(() => {
            if (!a) return;
            let e = !1;
            a.forEach(a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, R(a))
            }), M(e);
            const t = a.map((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && V ? null : (0, n.jsx)(de.qr, {
              className: "rockstargames-modules-core-newswire-articlead67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => K(a),
              role: "button",
              children: e
            }, e.key));
            w(t)
          }, [a, V]), (0, y.useEffect)(() => {
            E({
              nextEl: v.current,
              prevEl: k.current
            })
          }, [v, k]), (0, y.useEffect)(() => {
            P && !j && a && (g({
              event: "page_section_impression",
              element_placement: (s || r).toLowerCase()
            }), N(!0))
          }, [P, a]);
          let U = "custom" === t ? {
            "--custom-aspect-ratio": u,
            ...l
          } : {
            ...l
          };
          const W = 0 !== $ ? `${$}px` : "100%";
          U = {
            ...U,
            "--carousel-cards-height": W,
            "--carousel-nav-opacity": O
          };
          const K = e => {
              T?.slideTo(e)
            },
            Y = `${r.trim().toLowerCase().replace(/\s+/g,"-")}-deck`;
          return (0, n.jsxs)("section", {
            "aria-label": r,
            className: (0, d.default)("rockstargames-modules-core-newswire-articlef20b52f7c3f9003cd00811a47a04bf10", m),
            "data-size": t,
            "data-testid": Y,
            "data-sm": _?.sm ? _?.sm : t,
            "data-md": _?.md ? _?.md : t,
            "data-lg": _?.lg ? _?.lg : t,
            "data-xl": _?.xl ? _?.xl : t,
            "data-xxl": _?.xxl ? _?.xxl : t,
            "data-has-covercard": L,
            "data-new-carousel-nav": !0,
            id: `${r}-carousel`,
            "data-theme": p,
            ref: f,
            style: U,
            children: [(0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleaeafe767d91d07fab61f307b5bbffeef",
              ref: z
            }), L && V && (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articledef6705cfe82c4e562f3c71c78bc5248",
              children: D
            }), (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb093fac5b0d056a4a00f34d0418c6577",
              children: (0, n.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articledcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, n.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articleb83b41754b7e9ac95c806264014db990",
                  children: [!L && r && (0, n.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec8e04a547988dacbae8960776862f15f",
                    children: [(0, n.jsx)("h2", {
                      children: r
                    }), b && (0, n.jsx)("span", {
                      className: "rockstargames-modules-core-newswire-articlec3de2db74771fdba023cc2b11b216955",
                      children: b
                    })]
                  }), (0, n.jsx)(be, {
                    prevRef: k,
                    nextRef: v,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = T?.slides[T?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    title: r,
                    theme: p
                  })]
                }), e && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: e
                  }
                })]
              })
            }), S ? (0, n.jsx)(de.RC, {
              slidesPerView: S,
              onInit: e => {
                A(e);
                const a = setInterval(() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (G(t), B(1), clearInterval(a))
                }, 500)
              },
              grabCursor: !0,
              navigation: I,
              modules: [le.Vx],
              breakpoints: q,
              slideClass: (0, d.default)("swiper-slide", c),
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
        }), null);
      var ge = t(24815);
      const fe = {
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
        ke = {
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
        ve = {
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
        he = ({
          title: e = "",
          mobileImg: a,
          desktopImg: t
        }) => {
          const r = (0, B.useGetCdnSource)(a ?? null),
            s = (0, B.useGetCdnSource)(t ?? r);
          return (0, n.jsx)("div", {
            className: ve.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${s})`
            },
            children: (0, n.jsx)("h5", {
              children: e
            })
          })
        },
        we = ({
          title: e = "Membership Rewards",
          name: a = "Membership Rewards",
          shards: t
        }) => {
          const [r, s] = (0, y.useState)(null);
          return (0, y.useEffect)(() => {
            t && s(t.reduce((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: r
              } = a, {
                mobile: s,
                desktop: i
              } = r;
              return e.push((0, n.jsx)(he, {
                title: t,
                mobileImg: s?.full_src,
                desktopImg: i?.full_src
              })), e
            }, []))
          }, [t]), r ? (0, n.jsx)("div", {
            className: ve.shardsCarousel,
            children: (0, n.jsx)(pe, {
              title: e,
              name: a,
              slideChildren: r,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ye = ({
          animated: e = !1,
          ctas: a = [],
          expandingButtonLabel: t = "Subscribe"
        }) => {
          const [r, s] = (0, y.useState)([]), [i, o] = (0, y.useState)([]);
          return (0, y.useEffect)(() => {
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
          }, [a]), r.length ? (0, n.jsx)(ge.P.div, {
            variants: e ? ke : void 0,
            children: (0, n.jsx)(oe.A, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: r,
              children: !!i.length && (0, n.jsx)(ge.P.div, {
                variants: ke,
                children: (0, n.jsx)(v, {
                  buttons: i,
                  className: ve.buttonGroup
                })
              })
            })
          }) : (0, n.jsx)(n.Fragment, {
            children: !!i.length && (0, n.jsx)(ge.P.div, {
              variants: ke,
              children: (0, n.jsx)(v, {
                buttons: i,
                className: ve.buttonGroup
              })
            })
          })
        },
        je = ({
          animated: e = !1,
          brands: a = [],
          cta: t = [],
          ctas: r = [],
          description: s = "",
          expandingButtonLabel: i = "Subscribe",
          legalText: o,
          stackButtons: l,
          title: d = ""
        }) => (0, n.jsxs)(ge.P.div, {
          className: ve.content,
          initial: "hidden",
          animate: "visible",
          variants: e ? fe : void 0,
          children: [(0, n.jsx)(ge.P.div, {
            variants: e ? ke : void 0,
            children: (0, n.jsx)(c, {
              brands: a
            })
          }), (d || s) && (0, n.jsxs)(ge.P.div, {
            className: ve.descriptions,
            variants: e ? ke : void 0,
            children: [d && (0, n.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: d
              }
            }), s && (0, n.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          }), !!t.length && (0, n.jsx)("div", {
            className: l ? ve.verticalCtaBlock : ve.ctaBlock,
            children: (0, n.jsx)(B.TinaParser, {
              components: {
                Cta: D.A,
                ExpandingPlatformButton: oe.A
              },
              tina: {
                payload: {
                  content: t
                }
              }
            })
          }), !!r.length && (0, n.jsx)("div", {
            className: ve.ctaBlock,
            children: (0, n.jsx)(ye, {
              animated: e,
              ctas: r,
              expandingButtonLabel: i
            })
          }), o && (0, n.jsx)(ge.P.div, {
            className: ve.legalText,
            variants: e ? ke : void 0,
            children: (0, n.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: o
              }
            })
          })]
        }),
        xe = ({
          animated: e = !1,
          backgroundImage: a,
          brands: t = [],
          className: r,
          ctas: s = [],
          cta: i,
          description: o = "",
          expandingButtonLabel: c = "Subscribe",
          layeredImage: l,
          layeredImageSettings: m,
          legalText: _,
          shardsSection: u,
          stackButtons: b = !1,
          theme: p = "gen9",
          title: g = ""
        }) => {
          const {
            breakpoints: f,
            windowWidth: k
          } = (0, j.useWindowResize)(), v = f.xxl.min, h = (e => {
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
          })(m), w = (0, B.useGetCdnSource)(a?.mobile?.full_src ?? null), x = (0, B.useGetCdnSource)(a?.desktop?.full_src ?? w), N = (0, B.useGetCdnSource)(l?.mobile?.full_src ?? null), S = (0, B.useGetCdnSource)(l?.desktop?.full_src ?? N), C = (0, y.useMemo)(() => {
            const {
              mobileStyle: e,
              desktopStyle: t,
              style: r
            } = a ?? {};
            return {
              ...r,
              ...k >= v ? (0, j.safeStyles)(t) : (0, j.safeStyles)(e)
            }
          }, [k, a?.style, a?.mobileStyle, a?.desktopStyle]);
          return (0, n.jsxs)(ge.P.div, {
            className: (0, d.default)(ve.hero, r),
            style: {
              "--background-image-desktop": `url(${x})`,
              "--background-image-mobile": `url(${w})`,
              "--layered-image-desktop": `url(${S})`,
              "--layered-image-mobile": `url(${N})`
            },
            initial: "hidden",
            animate: "visible",
            variants: e ? fe : void 0,
            "data-type": "hero",
            theme: p,
            children: [(0, n.jsxs)("div", {
              className: ve.images,
              children: [x && w ? (0, n.jsx)("div", {
                className: ve.background,
                style: C ?? {}
              }) : "", N && S ? (0, n.jsx)("div", {
                className: ve.layered,
                style: m ? h : {}
              }) : "", (0, n.jsx)("div", {
                className: ve.gradient
              })]
            }), (0, n.jsx)(je, {
              animated: e,
              brands: t,
              cta: i,
              ctas: s,
              description: o,
              expandingButtonLabel: c,
              legalText: _,
              stackButtons: b,
              title: g
            }), u?.shards && (0, n.jsx)(we, {
              shards: u.shards
            })]
          })
        };
      var Ne = t(16157),
        Se = t(95967);
      const Ce = {
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
        Te = ({
          style: e,
          className: a
        }) => {
          const t = {
              ...e
            },
            r = e["--border-image-source"],
            s = (0, B.useGetCdnSource)(r || null);
          return r && (t["--border-image-source"] = `url(${s})`), (0, n.jsx)("div", {
            className: (0, d.default)(Ce.border, a),
            style: {
              ...t
            }
          })
        },
        Ae = e => e?.images ? (0, n.jsx)("div", {
          className: (0, d.default)(Ce.layeredImage, Ce[e?.variantClass], Ce[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, n.jsxs)("div", {
            className: Ce.layersWrapper,
            children: [e?.images?.map((e, a) => {
              const {
                image: t,
                paddingClass: r,
                imageSizeClass: s,
                objectFitClass: i,
                positionClassX: o,
                positionClassY: c,
                zIndex: l,
                className: m,
                style: _,
                alt: u,
                displayClass: b
              } = e;
              return (0, n.jsx)(Se.A, {
                image: t,
                style: {
                  zIndex: l ?? a + 1
                },
                imageStyle: _,
                className: (0, d.default)(m, b, Ce.imageLayer, Ce[r], Ce[s], Ce[i], Ce[o], Ce[c]),
                alt: u
              }, l ?? a + 1)
            }), e?.borderImage && (0, n.jsx)(Te, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null;
      var Ie = t(25993);
      const Ee = e => {
        const {
          image: a,
          alt: t,
          thumbnail: r,
          caption: s,
          style: i,
          showOpenButtonMobile: o,
          showOpenButton: c,
          showDownloadButtonMobile: l,
          showDownloadButton: d,
          showZoomControls: m
        } = e, _ = (0, j.useLocale)(), {
          isMobile: u
        } = (0, j.useWindowResize)(), b = a?.sources ?? {}, p = r?.image?.sources ?? {}, g = (0, Ie.C1)(b?.[_] ?? b?.en_us) ?? "", f = (0, Ie.C1)(p?.[_] ?? p?.en_us) ?? g, k = u ? o : c, v = u ? l : d;
        return (0, n.jsx)("div", {
          style: i,
          className: "rockstargames-modules-core-newswire-articleadbaa0167219cd891249a29faec00e8f",
          children: (0, n.jsxs)(V.Lightbox.Root, {
            altText: t || "",
            children: [(0, n.jsxs)(V.Lightbox.Trigger, {
              className: "rockstargames-modules-core-newswire-articled769ad0525fc8e1ea83ce616ce6959bb",
              style: {
                aspectRatio: r?.thumbnailAspectRatio
              },
              children: [(0, n.jsx)(V.Lightbox.Thumbnail, {
                src: f,
                style: {
                  objectPosition: r?.thumbnailPosition
                }
              }), k && (0, n.jsx)(V.Lightbox.OpenIcon, {
                style: {
                  boxSizing: "content-box"
                }
              })]
            }), (0, n.jsxs)(V.Lightbox.Portal, {
              children: [(0, n.jsx)(V.Lightbox.Overlay, {}), (0, n.jsxs)(V.Lightbox.Content, {
                children: [(0, n.jsx)(V.Lightbox.ZoomPan, {
                  children: (0, n.jsx)(V.Lightbox.Image, {
                    src: g
                  })
                }), (0, n.jsxs)(V.Lightbox.Controls, {
                  children: [s && (0, n.jsx)(V.Lightbox.Caption, {
                    children: s
                  }), (0, n.jsx)(V.Lightbox.Close, {
                    showTooltip: !1
                  }), m && (0, n.jsx)(V.Lightbox.Zoom, {}), v && (0, n.jsx)(V.Lightbox.Download, {})]
                })]
              })]
            })]
          })
        })
      };
      var ze = t(44453);
      const Pe = {
          animatePlaceholder: "rockstargames-modules-core-newswire-articlef6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-modules-core-newswire-articlec3684b80c99c860036d9337843a7be58",
          multiSourceContainer: "rockstargames-modules-core-newswire-articlea99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-modules-core-newswire-articlebc42c525ec0bd93df46e1999e278e9fb",
          pillBtn: "rockstargames-modules-core-newswire-articlec79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-modules-core-newswire-articlec53675ad15e2ef662362850daab33791"
        },
        Le = ({
          imageUrl: e,
          className: a,
          alt: t,
          style: r,
          lazy: s = !1,
          decoding: i = "auto",
          sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
        }) => {
          const [c, l] = (0, y.useState)(!1);
          return (0, n.jsxs)("div", {
            className: Pe.multiSourceContainer,
            children: [!c && (0, n.jsx)("img", {
              className: [a, Pe.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, n.jsx)("img", {
              className: [Pe.multiSourceImage, a].join(" "),
              src: `${e}?im=Resize=1920`,
              srcSet: (d = e, o.map(e => `${d}?im=Resize=${e} ${e}w`).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                l(!0)
              },
              loading: s ? "lazy" : "eager",
              decoding: i
            })]
          });
          var d
        },
        Me = ({
          button: e,
          closeDialog: a,
          style: t = "primary"
        }) => {
          const {
            buttonIcon: r,
            buttonText: s,
            extraClasses: i,
            isDisabled: o,
            isLink: c,
            link: l,
            onClick: m,
            testId: _
          } = e;
          return c ? s && (0, n.jsx)(V.Button, {
            asChild: !0,
            appearance: t,
            size: "LG",
            children: (0, n.jsx)("a", {
              href: l,
              ..._ && {
                "data-testid": _
              },
              children: s
            })
          }) : (0, n.jsx)(V.Button, {
            autoFocus: !0,
            iconRight: r,
            className: (0, d.default)(i),
            isDisabled: o,
            onPress: e => (e => {
              m && m(), a && a(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: t,
            size: "LG",
            "aria-label": s,
            ..._ && {
              "data-testid": _
            },
            children: s
          })
        },
        De = {
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
        Re = ({
          icon: e,
          title: a,
          secondaryText: t,
          buttons: r,
          showDialog: s,
          onClose: i = () => {},
          closeOnOutsideClick: o = !0,
          extraClasses: c
        }) => {
          const l = (0, y.useRef)(null),
            {
              setBodyIsLocked: d
            } = (0, j.useBodyScrollable)("AlertDialog");
          (0, y.useEffect)(() => {
            s && l?.current && (l.current?.showModal?.(), d(!0))
          }, [s]);
          const m = () => {
            d(!1), i(), l.current?.close?.()
          };
          if (s) return (0, n.jsxs)("dialog", {
            ref: l,
            className: De.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && o && (d(!1), i(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, n.jsx)("i", {
              className: [De.icon, De[e]].join(" ")
            }), (0, n.jsxs)("div", {
              className: [De.content, c?.content].join(" "),
              children: [(0, n.jsx)("h3", {
                className: [De.heading, c?.heading].join(" "),
                children: a
              }), t && (0, n.jsx)("div", {
                className: [De.message, c?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), r && (0, n.jsx)("div", {
              className: De.actions,
              children: r.slice(0, 2).map((e, a) => (0, n.jsx)(Me, {
                style: e?.style ?? (0 === a ? "primary" : "secondary"),
                button: e,
                closeDialog: m
              }, e.buttonText))
            })]
          })
        };
      var Ve = t(5180),
        Fe = t(27750),
        $e = t.n(Fe);
      const Ge = (0, j.withTranslations)(({
        section: e = "",
        relativeTo: a = "",
        tagId: t = null,
        metaUrl: r = "/newswire",
        t: s
      }) => {
        const i = (0, j.useLocale)(),
          {
            track: o
          } = (0, x.useGtmTrack)(),
          [c, d] = (0, m.useSearchParams)(),
          {
            tagId: _ = null
          } = (0, m.useParams)(),
          [u, b] = (0, y.useState)(_ ?? t ?? c.get("tag_id")),
          [p, g] = (0, y.useState)(1),
          [f, k] = (0, y.useState)(20),
          [v, h] = (0, y.useState)([]),
          [w, N] = (0, y.useState)(null),
          [S, {
            loading: C,
            data: T
          }] = (0, j.useLazyQuery)($e(), {
            variables: {
              tagId: Number(u),
              page: p,
              metaUrl: r,
              limit: f,
              locale: i
            }
          });
        return (0, y.useEffect)(() => {
          g(1), h([]), k(20), b(_ ?? t ?? c.get("tag_id")), S()
        }, [c.get("tag_id"), _, t]), (0, y.useEffect)(() => {
          const e = v;
          T?.posts?.paging && N(T?.posts?.paging), T?.posts?.results && h(e.concat(T?.posts?.results))
        }, [T]), (0, y.useEffect)(() => {
          (() => {
            const e = c.get("page"),
              a = Number(e ?? 1);
            k(20 * a), S()
          })()
        }, []), v.length ? (0, n.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlee81cdae3d47ce0490795e6588b3c8464",
          "data-testid": "newswire-list",
          children: [(0, n.jsx)(qe, {
            section: e,
            posts: v,
            relativeTo: a,
            noSpecialOrder: null !== u
          }), null !== w && w.nextPage ? (0, n.jsx)(l.A, {
            className: "rockstargames-modules-core-newswire-articlee125d510192feb4ce2844cb97084b838",
            "data-testid": "more-stories",
            onClick: () => {
              const e = c.get("page"),
                a = Number(e ?? p) + 1;
              g(a), 20 !== f && k(20), S(), d({
                page: String(a),
                ...u && {
                  tag_id: String(u)
                }
              }, {
                replace: !0
              }), o({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: C,
            context: "secondary",
            children: s("More Stories")
          }) : ""]
        }) : null
      });
      var Oe = t(10639),
        Be = t(45074);
      const He = {
          newswireBlocks: "rockstargames-modules-core-newswire-articleea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-modules-core-newswire-articled301334a72b626f8cc2f5b9733299e76"
        },
        qe = (0, j.withGtmTracking)(({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: t,
          gtmTrack: r
        }) => {
          const [s, i] = (0, y.useState)(null);
          return (0, y.useEffect)(() => {
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
          }, [t.length]), (0, n.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [He.newswireBlocks, a ? He.noSpecialOrder : "", He.contextHome].join(" "),
            children: t.map((t, r) => (0, n.jsx)(Ve.A, {
              section: e,
              index: r,
              noSpecialOrder: a,
              post: t,
              focused: r === s
            }, t.id))
          })
        });
      var Ue = t(28851);
      const We = "rockstargames-modules-core-newswire-articleb013d77f453d7053bbcf06f173ff326c",
        Ke = ({
          children: e,
          data: a,
          onPageUpdate: t,
          page: r,
          className: s
        }) => (0, n.jsx)("a", {
          href: "#",
          className: r === a.page ? `rockstargames-modules-core-newswire-articleb577d5726806ec872ecdb8a46905734f ${s??""}` : "",
          onClick: e => {
            e.preventDefault(), t(r)
          },
          children: e
        }),
        Ye = ({
          data: e,
          onPageUpdate: a,
          className: t
        }) => {
          if (1 === e.pageCount) return null;
          const r = new Array(Math.min(e.pageCount, 8)),
            s = Math.max(e.pageCount - 8, 1),
            i = Math.max(2, e.page - 4),
            o = Array.from(r, (e, a) => a + Math.min(s, i));
          return (0, n.jsxs)("div", {
            className: `rockstargames-modules-core-newswire-articlee480f25872ae2a8b3fcd1e492d838301 ${t??""}`,
            children: [e.pageCount > 8 ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(Ke, {
                data: e,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== o[0] ? (0, n.jsx)("div", {
                className: We,
                children: "..."
              }) : ""]
            }) : "", o.map(r => (0, n.jsx)(Ke, {
              data: e,
              onPageUpdate: a,
              page: r,
              className: t,
              children: r
            }, r)), e.pageCount > 8 ? (0, n.jsxs)(n.Fragment, {
              children: [o.slice(-1)[0] + 1 < e.pageCount ? (0, n.jsx)("div", {
                className: We,
                children: "..."
              }) : "", (0, n.jsx)(Ke, {
                data: e,
                onPageUpdate: a,
                page: e.pageCount,
                children: e.pageCount
              })]
            }) : ""]
          })
        };
      var Xe = t(14143);
      const Je = ({
          children: e
        }) => {
          const {
            parallaxController: a
          } = (0, Xe.as)();
          return (0, y.useLayoutEffect)(() => {
            if (!a) return;
            const e = setInterval(() => {
              a.update()
            }, 500);
            return () => clearInterval(e)
          }, [a]), e
        },
        Ze = {
          large: "rockstargames-modules-core-newswire-articlee15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-modules-core-newswire-articledfdaa6f63f8e8bd10576fa2debcbc1fc",
          parallaxWrapper: "rockstargames-modules-core-newswire-articlee30c08cf0e042f7fc7bed0c23c0bfb31",
          small: "rockstargames-modules-core-newswire-articlec32a973dbc862a43cc5d4a2aac19ed9b"
        },
        Qe = ({
          scrollAxis: e = "vertical",
          size: a = "",
          style: t = {},
          children: r
        }) => (0, n.jsx)(Xe.zE, {
          scrollAxis: e,
          children: (0, n.jsx)(Je, {
            children: (0, n.jsx)("div", {
              className: (0, d.default)(Ze.parallaxWrapper, Ze[a]),
              style: t,
              "data-context": "parallax-wrapper",
              children: r ? r.map((a, t) => (0, y.cloneElement)(a, {
                scrollAxis: e,
                style: {
                  ...a?.props?.style,
                  zIndex: t
                }
              })) : (0, n.jsx)("div", {})
            })
          })
        }),
        ea = ({
          layers: e = [],
          displayClass: a = "",
          style: t = {}
        }) => {
          const r = (0, B.useGenerateCdnSource)();
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
          return (0, n.jsx)(Xe.y, {
            className: (0, d.default)("rockstargames-modules-core-newswire-articlec1c689cf47230fa80bccc9b20515d4fa", a),
            layers: s,
            style: t
          })
        },
        aa = "rockstargames-modules-core-newswire-articleae8bfc3f9a519606a95144e64ee454b5",
        ta = ({
          minOffset: e = 0,
          maxOffset: a = 0,
          scrollAxis: t = "vertical",
          displayClass: r = "",
          style: s = {},
          children: i
        }) => "horizontal" === t ? (0, n.jsx)(Xe.kQ, {
          x: [e, a],
          className: (0, d.default)(aa, r),
          styleOuter: s,
          children: i
        }) : (0, n.jsx)(Xe.kQ, {
          y: [e, a],
          className: (0, d.default)(aa, r),
          styleOuter: s,
          children: i
        }),
        ra = {
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
        sa = {
          alt: "",
          sources: {}
        },
        ia = ({
          backgroundColor: e,
          brands: a = [],
          description: t = "",
          ctaLabel: r,
          ctaLink: s = "https://rockstargames.com",
          gradient: i = !0,
          image: o,
          promoImg: l = sa,
          imageOrientation: d = "right",
          title: m = "",
          name: _ = "",
          style: u,
          imageStyle: b,
          _memoq: p
        }) => {
          const [g, f] = (0, y.useState)(!1), {
            ref: v,
            inView: h
          } = (0, H.useInView)({
            threshold: .6
          }), {
            isMobile: w
          } = (0, j.useWindowResize)(), {
            track: N
          } = (0, x.useGtmTrack)(), S = (0, B.useImageParser)(l), C = (0, B.useGetCdnSource)(o), T = w ? S?.src?.mobile : S?.src?.desktop, A = S?.alt ?? "", I = {
            ...u,
            "--promo-background": e ?? "var(--black-200)",
            "--promo-image": `url(${T??C??"var(--promo-background)"})`,
            "--promo-order": "left" === d ? "row" : "row-reverse"
          }, E = {
            ...b
          };
          return (0, y.useEffect)(() => {
            h && !g && (N({
              event: "page_section_impression",
              element_placement: _?.toLowerCase()
            }), f(!0))
          }, [h]), (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)("div", {
              className: ra.promoModuleWrapper,
              children: (0, n.jsxs)(ge.P.div, {
                className: ra.promoModule,
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
                ref: v,
                children: [(0, n.jsx)("div", {
                  role: "img",
                  "aria-label": A,
                  className: [ra.promoModuleImage, i ? ra.gradient : "", "left" === d ? ra.left : ra.right].join(" "),
                  style: {
                    ...E
                  }
                }), (0, n.jsxs)("div", {
                  className: ra.promoModuleContentContainer,
                  children: [(0, n.jsx)(c, {
                    brands: a
                  }), (0, n.jsxs)("div", {
                    className: ra.promoModuleTextContent,
                    children: [m && (0, n.jsx)("h3", {
                      children: m
                    }), t && (0, n.jsx)("p", {
                      children: t
                    })]
                  }), r && (0, n.jsx)(k, {
                    to: s,
                    text: r,
                    onClick: () => {
                      N({
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
        oa = {
          rating: "rockstargames-modules-core-newswire-articlec3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-modules-core-newswire-articlebabdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-modules-core-newswire-articleb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-modules-core-newswire-articleb6339480b5fd086fb0c025930bfb7dcd"
        },
        na = (0, u.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var ca = t(70386);
      (0, j.importAll)(t(36672));
      const la = (0, me.A)((0, _e.g)(({
        descriptors: e = null,
        footer: a = null,
        href: r,
        img: i = null,
        titleSlug: o = null,
        style: c = {},
        className: l,
        ...d
      }) => {
        const [m, _] = (0, y.useState)(!1), {
          inView: b
        } = (0, H.useInView)({
          threshold: .6
        }), [p, g] = (0, y.useState)({
          ratingDescriptors: e,
          ratingFooter: a,
          ratingImg: i,
          ratingUrl: r
        }), {
          track: f
        } = (0, x.useGtmTrack)(), k = (0, u.useIntl)(), {
          data: v
        } = (0, j.useQuery)(ca.GameData, {
          variables: {
            titleSlug: o
          },
          skip: !o
        });
        if ((0, y.useEffect)(() => {
            v && g(v?.game)
          }, [v]), (0, y.useEffect)(() => {
            b && !m && p.ratingImg && (f({
              event: "page_section_impression",
              element_placement: "rating"
            }), _(!0))
          }, [b]), !p.ratingImg) return null;
        const h = !!p.ratingDescriptors;
        return (0, n.jsxs)("div", {
          className: [oa.rating, h ? oa.withDescriptors : oa.withOutDescriptors, l || ""].join(" "),
          style: (0, j.safeStyles)(c),
          "data-testid": "rating",
          ...d,
          children: [(0, n.jsx)(s.A, {
            to: p.ratingUrl,
            target: "_blank",
            children: (0, n.jsx)("img", {
              alt: k.formatMessage(na.components_ratings_link_alt, {
                rating: (w = p.ratingImg, w.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${p.ratingImg}`)
            })
          }), h && (0, n.jsxs)("div", {
            className: oa.text,
            children: [(0, n.jsx)("p", {
              className: oa.descriptors,
              dangerouslySetInnerHTML: {
                __html: p?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), p.ratingFooter && (0, n.jsx)("hr", {}), p.ratingFooter && (0, n.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: p.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var w
      }));
      var da = t(38482),
        ma = t(43312),
        _a = t(63831),
        ua = t(47519),
        ba = t(67359),
        pa = t(76893);
      const ga = ({
        disableLink: e,
        className: a,
        "data-testid": t
      }) => {
        const r = e ? "span" : s.A;
        return (0, n.jsx)(r, {
          className: [e ? "rockstargames-modules-core-newswire-articleb28a6ee32abeb20049b97677a86a4314" : "rockstargames-modules-core-newswire-articlea3d920a1139575706b914bc3a0100970", a || ""].join(" "),
          "data-testid": t,
          alt: "Rockstar Games Home",
          ...!e && {
            to: "/"
          }
        })
      };
      var fa = t(12540);
      const ka = ({
          thresholds: e,
          onThresholdReached: a,
          children: t
        }) => {
          const [r, s] = (0, y.useState)([]), [i, o] = (0, y.useState)(new Set);
          return (0, y.useEffect)(() => {
            const a = Array.from(new Set(e));
            a.sort((e, a) => e - a), s(a)
          }, [e]), (0, n.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [r.map(e => (0, n.jsx)(H.InView, {
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
              }) => (0, n.jsx)("div", {
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
        va = () => {
          const {
            pathname: e
          } = (0, m.useLocation)();
          return (0, y.useEffect)(() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout(() => {
              e.scrollTop = 0
            }, 0)
          }, [e]), null
        };
      var ha = t(35246),
        wa = t(68993),
        ya = t(5413);
      const ja = ({
        children: e
      }) => (0, n.jsx)("div", {
        className: "rockstargames-modules-core-newswire-articleaae4d33d1eecebdc9b489f8d7a1ad708",
        children: (0, n.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlec573fe5c7bdcc46c4d57ec4a2c275e3b",
          children: e
        })
      });
      var xa = t(73951),
        Na = t(58585),
        Sa = t(79113),
        Ca = t(32255);
      const Ta = ({
        children: e,
        style: a,
        theme: t
      }) => {
        const [r, s] = (0, y.useState)(t);
        return (0, y.useEffect)(() => {
          t && s(t)
        }, [t]), (0, n.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlee5e0faf6ab9871fd60b958c6f7dcf519",
          style: a,
          "data-theme": r,
          children: e
        })
      };
      var Aa = t(12334),
        Ia = t(69138);
      const Ea = {
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
        za = ({
          description: e,
          foreign_id: a = document.location.pathname,
          foreign_type: t = "url",
          title: r
        }) => {
          const {
            track: s
          } = (0, x.useGtmTrack)(), {
            loggedIn: i
          } = (0, x.useRockstarUser)(), {
            refetch: o
          } = (0, j.useQuery)(Ia.UserGetVote, {
            skip: !0
          }), [c] = (0, j.useMutation)(Ia.UserCastVote), [l, d] = (0, y.useState)(null), m = (0, y.useCallback)(async e => {
            s({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${t} ${a}`
            });
            const r = {
                foreign_id: a,
                foreign_type: t,
                vote: e
              },
              i = await c({
                variables: r
              });
            d(i?.data?.userCastVote?.vote ?? null)
          }, [a, t]);
          return (0, y.useEffect)(() => {
            (async () => {
              if (!i || !a || !t) return;
              const e = await o({
                foreign_id: a,
                foreign_type: t
              });
              d(e?.data?.userGetVote?.vote ?? null)
            })()
          }, [a, t, i]), (0, n.jsx)("div", {
            className: Ea.userVote,
            children: (0, n.jsxs)("div", {
              className: Ea.voteContent,
              children: [(0, n.jsxs)("div", {
                className: Ea.info,
                children: [(0, n.jsx)("h3", {
                  children: r
                }), (0, n.jsx)("p", {
                  children: e
                })]
              }), (0, n.jsxs)("div", {
                className: [Ea.voteButtons, i ? "" : Ea.loggedOutButtons].join(" "),
                children: [(0, n.jsx)("button", {
                  onClick: () => m(!0),
                  className: [Ea.upVote, l ? Ea.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, n.jsx)("button", {
                  className: [Ea.downVote, !1 === l ? Ea.voteButtonActive : ""].join(" "),
                  onClick: () => m(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var Pa = t(36038),
        La = t.n(Pa);
      const Ma = {
          card: "rockstargames-modules-core-newswire-articlef93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-modules-core-newswire-articlea1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-modules-core-newswire-articledabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-modules-core-newswire-articlefd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-modules-core-newswire-articleb8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-modules-core-newswire-articlefd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-modules-core-newswire-articlea626ad482ff0be0336e75929516654d5"
        },
        Da = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [r] = (0, j.usePreloadImg)(t());
          return (0, n.jsx)("div", {
            className: [Ma.screencap, r ? Ma.screencapLoaded : ""].join(" "),
            "aria-hidden": "true",
            role: "img",
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        Ra = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: r,
          toExplicit: i
        }) => {
          const o = i ?? `/videos/${t.id}`,
            c = {
              className: Ma.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": o
            },
            l = (0, n.jsxs)("div", {
              className: Ma.card,
              children: [(0, n.jsx)(Da, {
                video: t,
                size: r
              }), (0, n.jsxs)("div", {
                className: Ma.info,
                children: [e ? (0, n.jsx)("div", {
                  className: Ma.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, n.jsx)("h5", {
                  className: Ma.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, n.jsx)("a", {
            href: o,
            target: "_blank",
            ...c,
            children: l
          }) : (0, n.jsx)(s.A, {
            to: o,
            ...c,
            children: l
          })
        },
        Va = {
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
        Fa = (0, u.defineMessages)({
          learn_more: {
            id: "carousel_learn_more",
            description: "Carousel learn more button text",
            defaultMessage: "Learn More"
          },
          watch_more: {
            id: "carousel_watch_more",
            description: "Carousel watch more button text",
            defaultMessage: "Watch Now"
          }
        }),
        $a = (0, _e.g)(({
          videos: e
        }) => {
          const a = (0, j.useLocale)(),
            {
              formatMessage: t
            } = (0, u.useIntl)(),
            {
              track: r
            } = (0, x.useGtmTrack)(),
            {
              setBodyIsLocked: i
            } = (0, j.useBodyScrollable)("VideoCarousel"),
            [o, c] = (0, y.useState)(0),
            [d, m] = (0, y.useState)(0),
            _ = (0, y.useRef)(null),
            b = (0, y.useRef)(null);
          (0, y.useEffect)(() => {
            if (!_.current || !b.current) return;
            const a = new(La())(_.current);
            a.get("press").set({
              time: 0
            }), a.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              r = () => {
                c(o - 1 < 0 ? 0 : o - 1), m(0)
              },
              s = () => {
                const a = o + 1 >= e.length - 1 ? e.length - 1 : o + 1;
                c(a), m(0)
              },
              n = e => {
                m(e.isFinal ? 0 : e.deltaX), "panleft" !== e.type && "panright" !== e.type || !b.current?.classList.contains(Va.dragging) || t() && i(!0)
              },
              l = () => {
                t() && i(!1), m(0)
              },
              d = e => {
                "press" === e.type && _.current?.classList.add(`${Va.disableClick}`), "tap" === e.type && (_.current?.classList.remove(`${Va.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                t() && i(!1), _.current && _.current.classList.remove(`${Va.disableClick}`)
              },
              p = () => {
                t() && i(!1)
              };
            return b.current.addEventListener("transitionend", p), a.on("swiperight", r), a.on("swipeleft", s), a.on("pan", n), a.on("panend", l), a.on("press tap", d), a.on("pressup", u), () => {
              a.off("swiperight", r), a.off("swipeleft", s), a.off("pan", n), a.off("panend", l), a.off("press tap", d), a.off("pressup", u), b.current && b.current.removeEventListener("transitionend", p), m(0)
            }
          }, [_.current, o]);
          const p = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", t(a ? Fa.learn_more : Fa.watch_more)]
          };
          return (0, n.jsxs)("section", {
            className: Va.carousel,
            children: [(0, n.jsx)("div", {
              className: Va.track,
              ref: _,
              children: (0, n.jsx)("div", {
                className: `${Va.items} ${0!==d?Va.dragging:""}`,
                ref: b,
                style: {
                  transform: `translateX(calc(-${100*o}% + ${d}px))`
                },
                children: e.map((e, a) => {
                  const [t, r, i] = p(e);
                  return (0, n.jsx)(s.A, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": r,
                    to: r,
                    className: o === a ? Va.active : "",
                    role: "link",
                    title: t,
                    tabIndex: o === a ? 0 : -1,
                    target: i,
                    children: (0, n.jsx)(Da, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                })
              })
            }), (0, n.jsxs)("div", {
              className: Va.slidesContent,
              children: [(0, n.jsx)("div", {
                className: Va.text,
                children: e.map((e, t) => {
                  const [i, c, d, m] = p(e);
                  return (0, n.jsxs)(s.A, {
                    className: [Va.info, t === o ? Va.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": c,
                    to: c,
                    role: "link",
                    tabIndex: o === t ? 0 : -1,
                    target: d,
                    "aria-label": `${e.game.title} ${i}`,
                    onClick: (_ = c, () => {
                      r({
                        event: "cta_watch_video",
                        text: "watch now",
                        link_url: _,
                        element_placement: "video carousel"
                      })
                    }),
                    children: [(0, n.jsxs)("div", {
                      className: Va.title,
                      children: [(0, n.jsxs)("div", {
                        className: Va.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, n.jsx)("h2", {
                        className: Va.videoTitle,
                        children: i
                      })]
                    }), (0, n.jsx)(l.A, {
                      tabIndex: -1,
                      role: "presentation",
                      "aria-hidden": !0,
                      className: Va.cta,
                      children: m
                    })]
                  }, e.id);
                  var _
                })
              }), (0, n.jsx)("section", {
                className: Va.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map((e, a) => (0, n.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => c(a),
                  className: o === a ? Va.active : "",
                  type: "button"
                }, e.id))
              })]
            })]
          })
        }),
        Ga = (0, u.defineMessages)({
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
        Oa = {
          img: "rockstargames-modules-core-newswire-articled87037fda2ea106061c7a614036a89df",
          imgContentful: "rockstargames-modules-core-newswire-articleb9f3c994ce8a97ac6530cf0a85e5abe0",
          wide: "rockstargames-modules-core-newswire-articledc444c089b89129c0a39bc61845d531f"
        };
      (0, j.importAll)(t(86751));
      const Ba = ({
          isWideCard: e = !1,
          size: a = 640,
          title: r,
          titleSlug: s,
          inGlobalNav: i = !1
        }) => {
          const {
            isMobile: o
          } = (0, j.useWindowResize)(), c = (0, y.useMemo)(() => {
            let r = "";
            return e && (r = o ? t(25087)(`./${s}/mobile/global.jpg`) : t(58963)(`./${s}/desktop/global.jpg`)), r || (r = t(39294)(`./${s}.jpg`), r += `?im=Resize=${a}`), r
          }, [o, s]), [l] = (0, j.usePreloadImg)(c);
          let d = c;
          return (0, n.jsx)("div", {
            role: "img",
            "aria-label": r,
            style: {
              backgroundImage: `url(${d})`,
              borderRadius: i ? "unset" : ""
            },
            className: [Oa.img, l ? Oa.startAnimation : "", e ? Oa.wide : ""].join(" ")
          })
        },
        Ha = {
          fobLink: "rockstargames-modules-core-newswire-articled30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-modules-core-newswire-articlec9686ec502f78b05e47568667e90bd17"
        },
        qa = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: r = ""
          } = e, i = ["VI"].includes(t.toUpperCase());
          return (0, n.jsx)(s.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? r,
            target: "_self",
            className: [Ha.fobLink, i ? Ha.wide : ""].join(" "),
            reloadDocument: i,
            children: (0, n.jsx)(Ba, {
              title: e.title,
              titleSlug: t,
              isWideCard: i,
              size: i ? 1740 : 480
            })
          })
        },
        Ua = {
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
        Wa = (0, _e.g)(({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: r
        }) => {
          const s = (0, u.useIntl)(),
            {
              track: i
            } = (0, x.useGtmTrack)(),
            o = void 0 !== a ? "games" : "videos",
            [c, l] = (0, y.useState)(),
            [m, _] = (0, y.useState)(),
            [b, p] = (0, y.useState)(0),
            g = (0, y.useRef)(null),
            f = (0, y.useRef)(null),
            k = (0, y.useRef)(null);
          (0, y.useEffect)(() => {
            _({
              nextEl: k.current,
              prevEl: f.current
            })
          }, [k, f]), (0, y.useEffect)(() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), p(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [b]);
          const v = e => {
            g.current && (g.current.scrollLeft = 0), c?.slideTo(e)
          };
          let h;
          return h = "games" === o ? (0, n.jsx)(n.Fragment, {
            children: a.results.filter(e => "775700as" !== e.id).map((e, a) => (0, n.jsx)(de.qr, {
              className: Ua.slide,
              onFocus: () => v(a),
              children: (0, n.jsx)(qa, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id))
          }) : (0, n.jsx)(n.Fragment, {
            children: e.map((e, a) => (0, n.jsx)(de.qr, {
              className: Ua.slide,
              onFocus: () => v(a),
              children: (0, n.jsx)(Ra, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id))
          }), (0, n.jsxs)("section", {
            className: Ua.videoList,
            children: [(0, n.jsxs)("h3", {
              className: Ua.sectionHeader,
              children: [t, (0, n.jsxs)("div", {
                className: Ua.arrowNav,
                children: [(0, n.jsx)("button", {
                  className: (0, d.default)(Ua.arrow, Ua.previous),
                  type: "button",
                  ref: f,
                  "aria-label": s.formatMessage(Ga.previous_button_label),
                  onKeyDown: e => {
                    "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), c?.slidePrev())
                  }
                }), (0, n.jsx)("button", {
                  className: (0, d.default)(Ua.arrow, Ua.next),
                  type: "button",
                  ref: k,
                  "aria-label": s.formatMessage(Ga.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" !== e.key || e.shiftKey) "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), c?.slideNext());
                    else {
                      const a = c?.slides[c?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, n.jsx)("div", {
              className: (0, d.default)(Ua.items, b % 1 != 0 ? Ua.partial : ""),
              children: (0, n.jsx)("div", {
                className: Ua.trackWrapper,
                ref: g,
                children: b && (0, n.jsx)(de.RC, {
                  className: Ua.track,
                  slidesPerView: b,
                  spaceBetween: 24,
                  onInit: e => {
                    l(e)
                  },
                  grabCursor: !0,
                  navigation: m,
                  modules: [le.Vx],
                  slideClass: (0, d.default)("swiper-slide"),
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
                  children: h
                })
              })
            })]
          })
        });
      var Ka = t(2183),
        Ya = t(60982),
        Xa = function(e) {
          return e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e
        }({}),
        Ja = t(57208);
      class Za extends y.Component {
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
          (0, Ja.ZQ)({
            category: "ErrorBoundary",
            message: e.message || "E399 triggered",
            data: {
              error: e,
              errorInfo: a
            }
          }), (0, Ja.wd)("ErrorBoundary", Xa.Error)
        }
        render() {
          return null !== this.state.error.code ? (0, n.jsx)(Ya.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const Qa = (e, a = null) => {
        const t = t => (0, n.jsx)(Za, {
          header: a,
          children: (0, n.jsx)(e, {
            ...t
          })
        });
        return t.displayName = `withSearchbarErrorBoundary(${e.displayName||e.name||"Component"})`, t
      };
      var et = t(72132),
        at = t(51550),
        tt = t(63218)
    },
    1e4(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var r = t(39793),
        s = t(81270),
        i = t(38044);
      const o = {
          button: "rockstargames-modules-core-newswire-articlebc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-modules-core-newswire-articlea3e6439dcaa4870840298d683db4831c"
        },
        n = ({
          className: e = "",
          children: a,
          context: t = "",
          to: n,
          onClick: c,
          target: l = "_self",
          ...d
        }) => {
          const m = (0, s.default)(o.button, o[t], e);
          return n ? (0, r.jsx)(i.A, {
            ...d,
            to: n,
            className: m,
            onClick: c,
            target: l,
            children: a
          }) : (0, r.jsx)("button", {
            ...d,
            type: "button",
            className: m,
            onClick: c,
            children: a
          })
        }
    },
    38482(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(39793);
      const s = {
          responsiveFlexBox: "rockstargames-modules-core-newswire-articlefad65f02dd0ee292c36ec9d50b9c249a",
          responsiveFlexItem: "rockstargames-modules-core-newswire-articlef5215494f66727858110c9c73e2d882a",
          responsiveImage: "rockstargames-modules-core-newswire-articled437a700a9b768227a114e70db78af03"
        },
        i = ({
          children: e,
          className: a,
          style: t
        }) => (0, r.jsx)("div", {
          className: [s.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        })
    },
    43312(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(39793);
      const s = {
          responsiveFlexItem: "rockstargames-modules-core-newswire-articlee7371144db2e94a049204d4b178416ec"
        },
        i = ({
          children: e,
          className: a,
          style: t
        }) => (0, r.jsx)("div", {
          className: [s.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        })
    },
    5004(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var r = t(39793),
        s = t(25993),
        i = t(13331),
        o = t(81270);
      const n = ({
        children: e,
        context: a = null,
        game: t,
        image: n = {},
        style: c = {},
        template: l = null,
        theme: d = null,
        reversedOnMobile: m = !1,
        className: _ = "",
        id: u = null
      }) => {
        const b = (0, s.S1)(n ?? {}),
          p = {
            ...c
          };
        if (b?.src?.desktop) {
          const e = (n?.style && n?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (n?.style && n?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (p.background = `url(${b?.src?.desktop}) ${a} ${t}`, n?.style && n?.style["--linear-gradient"]) p.background = `linear-gradient(${n?.style["--linear-gradient"]}), url(${b?.src?.desktop}) ${a} ${t}`;
          else if (n?.style && n?.style["--gradient-height"]) {
            const e = n?.style["--gradient-height"] || "3",
              r = n?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              s = n?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            p.background = `linear-gradient(180deg, ${r}, transparent ${e}%, transparent ${100-e}%, ${s}), url(${b?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, r.jsx)("div", {
          id: u,
          className: (0, o.default)("rockstargames-modules-core-newswire-articleda87ead760b989fbe90a0b89c60b0653", m ? "rockstargames-modules-core-newswire-articledfbda195073626bc6a7690dc73fba873" : "", _),
          "data-game": "community" === l ? null : t,
          style: (0, i.safeStyles)(p),
          "data-context": a,
          "data-template": l,
          "data-theme": d,
          children: e
        })
      }
    },
    63831(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(39793);
      const s = {
          responsiveGridBox: "rockstargames-modules-core-newswire-articlee9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-modules-core-newswire-articleb0d14e4a5e63a903117e93a392cbfb53"
        },
        i = ({
          children: e,
          cols: a,
          className: t,
          rows: i,
          style: o
        }) => {
          const n = o ? {
            ...o
          } : {};
          return void 0 !== a && (n.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== i && (n.gridTemplateRows = `repeat(${i}, 1fr)`), (0, r.jsx)("div", {
            className: [s.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: n,
            children: e
          })
        }
    },
    47519(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(39793);
      const s = {
          responsiveGridBox: "rockstargames-modules-core-newswire-articlee721a07d53edbb90b165a7720bb32c08",
          responsiveGridItem: "rockstargames-modules-core-newswire-articlea32d93b6ae982b5ad473f75cf86ff085"
        },
        i = ({
          children: e,
          className: a,
          style: t
        }) => (0, r.jsx)("div", {
          className: [s.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        })
    },
    16157(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var r = t(39793),
        s = t(93082),
        i = t(40283),
        o = t(13331),
        n = t(81270);
      var c = t(36416);
      const l = ({
        attributes: e = {},
        children: a,
        className: t = "",
        id: l = "",
        style: d = {}
      }) => {
        const {
          hash: m
        } = (0, c.useLocation)();
        return (0, s.useLayoutEffect)(() => {
          const e = document.getElementById(l);
          e && m.includes(l) && e.scrollIntoView({
            behavior: "instant",
            block: "start"
          })
        }, []), (0, r.jsx)("span", {
          className: (0, n.default)(t, e?.className, "rockstargames-modules-core-newswire-articlec650a7a1e761d6a9f2d6ce1cd8d6f330"),
          id: l,
          style: (0, o.safeStyles)(d ?? e?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: (0, i.unescape)(a)
          }
        })
      }
    },
    76893(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(39793);
      const s = {
          maxWidth: "rockstargames-modules-core-newswire-articleb2c8f49e280c2e7c204b30a4af8c13b9",
          responsiveSection: "rockstargames-modules-core-newswire-articlebd7167fb3a3edaf4df4d9a576efb1170"
        },
        i = ({
          children: e,
          className: a,
          style: t,
          maxWidth: i
        }) => (0, r.jsx)("section", {
          className: [s.responsiveSection, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: i ? (0, r.jsx)("div", {
            className: s.maxWidth,
            children: e
          }) : e
        })
    },
    5413(e, a, t) {
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
    59426(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var r = t(39793),
        s = t(93082);
      class i extends s.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled5c408a8b618087ef4bb452f96526b2b",
            children: [(0, r.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, r.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const o = (e, a = null, t = !1) => {
        const s = s => (0, r.jsx)(i, {
          header: a,
          hidden: t,
          children: (0, r.jsx)(e, {
            ...s
          })
        });
        return s.displayName = `withSimpleErrorBoundary(${e.displayName||e.name||"Component"})`, s
      }
    },
    60982(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var r = t(39793),
        s = t(93082),
        i = t(42909),
        o = t(38044),
        n = t(68993);
      const c = (0, i.defineMessages)({
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
        l = ({
          error: e,
          domain: a = ""
        }) => {
          console.error({
            error: e
          });
          const {
            formatMessage: t
          } = (0, i.useIntl)();
          let l = e?.message ?? t(c.wasted_error_404_new);
          l = t(c.wasted_error_404_new);
          const d = e?.code ?? 398,
            m = (0, s.useRef)(null);
          return (0, s.useEffect)(() => {
            m && m?.current && m.current.focus()
          }, [m]), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, r.jsx)("h3", {
              tabIndex: -1,
              ref: m,
              children: `${l} (${d})`
            }), (0, r.jsx)(o.A, {
              to: "/",
              reloadDocument: !1,
              children: t(c.wasted_home)
            }), "clr" !== a && (0, r.jsx)(n.A, {})]
          })
        }
    },
    28097(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        Animations: () => r,
        LiteMotion: () => d,
        withFadeIn: () => p,
        withFadeUp: () => v
      });
      var r = {};
      t.r(r), t.d(r, {
        getVariant: () => y,
        transitions: () => h,
        variants: () => w
      });
      var s = t(39793),
        i = t(93082),
        o = t(43458),
        n = t(27074),
        c = t(38720);
      const l = (0, i.forwardRef)((e, a) => {
        const {
          children: t,
          tag: r = "div"
        } = e, i = o.m[r];
        return (0, s.jsx)(n.F, {
          features: c.l,
          children: (0, s.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      });
      l.displayName = "LiteMotion";
      const d = l;
      var m = t(24815);
      const _ = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        u = {
          ease: "easeIn",
          duration: .4
        },
        b = ({
          children: e
        }) => (0, s.jsx)(m.P.div, Object.assign({
          className: "rockstargames-modules-core-newswire-articlef38982805188b64825a72d2c5fac938c",
          variants: _,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: u
        }, {
          children: e
        })),
        p = e => a => (0, s.jsx)(b, {
          children: (0, s.jsx)(e, Object.assign({}, a))
        }),
        g = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        f = {
          ease: "easeIn",
          duration: .75
        },
        k = ({
          children: e
        }) => (0, s.jsx)(m.P.div, {
          className: "rockstargames-modules-core-newswire-articlec1ad787ad6429786650325edac0ffe42",
          variants: g,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: f,
          children: e
        }),
        v = e => a => (0, s.jsx)(k, {
          children: (0, s.jsx)(e, {
            ...a
          })
        }),
        h = {
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
        w = {
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
        y = (e = "imageMask", a = "collapsed") => w[e][a]
    },
    5180(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var r = t(39793),
        s = t(93082),
        i = t(36416),
        o = t(13331),
        n = t(82199),
        c = t(45970),
        l = t(27859),
        d = t(38044),
        m = t(45074);
      const _ = {
          info: "rockstargames-modules-core-newswire-articleea1c51ae745531c2aeabbe3fcf603842",
          newswireBlock: "rockstargames-modules-core-newswire-articleb394b56c31488c36155ca82090c66e6f",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-newswire-articlec06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-modules-core-newswire-articleca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-modules-core-newswire-articleb3d4a8cfcc371ae39ce6220d009c5954",
          startAnimation: "rockstargames-modules-core-newswire-articlea56af3c95449fe8452485dfb6c89fc29",
          title: "rockstargames-modules-core-newswire-articlef1dfe59c3d981dbe132559620885ecea",
          top: "rockstargames-modules-core-newswire-articleeee9c5d3b714a61ac265369800a6d4e0"
        },
        u = ({
          section: e = "",
          index: a,
          post: t,
          noSpecialOrder: u = !1,
          focused: b
        }) => {
          const {
            track: p
          } = (0, n.useGtmTrack)(), [g] = (0, i.useSearchParams)(), f = t.preview_images_parsed.newswire_block, k = (0, c.Ub)(l.fi.mobile), v = {
            default: 0 !== a || u ? f.square || f.d16x9 || f._fallback : f.d16x9 || f.square || f._fallback,
            mobile: f.square || f._fallback
          }, [h] = (0, o.usePreloadImg)(v.default), w = {
            default: {
              backgroundImage: `url(${v.default})`
            },
            mobile: {
              backgroundImage: `url(${v.mobile})`
            }
          }, y = (0, s.useCallback)(() => {
            p({
              event: "card_click",
              card_id: t.id,
              card_name: t.name_slug.replace(/-/g, " "),
              link_url: t.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }, [t]);
          return (0, r.jsx)(d.A, {
            to: t.url,
            className: [_.newswireBlock, u ? _.newswireBlockNoSpecialOrder : "", null !== h ? _.startAnimation : ""].join(" "),
            focused: b,
            onClick: y,
            children: (0, r.jsxs)(r.Fragment, {
              children: [0 !== a || g.get("tag_id") ? (0, r.jsx)("div", {
                className: _.preview,
                style: w.default
              }) : (0, r.jsx)("div", {
                className: k ? _.previewMobile : _.preview,
                style: k ? w.mobile : w.default
              }), (0, r.jsxs)("div", {
                className: _.info,
                children: [(0, r.jsxs)("div", {
                  className: _.top,
                  children: [t.primary_tags.length ? (0, r.jsx)(m.A, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, r.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, r.jsx)("h5", {
                  className: _.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        }
    },
    45074(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var r = t(39793),
        s = t(38044);
      const i = {
          tag: "rockstargames-modules-core-newswire-articleb660bb706132d84852c02df01cc6ed5a"
        },
        o = ({
          className: e,
          href: a,
          title: t,
          style: o
        }) => {
          const n = (0, r.jsxs)("div", {
            style: o,
            className: [i.tag, e].join(" "),
            children: [(0, r.jsx)("i", {}), t]
          });
          return void 0 !== a ? (0, r.jsx)(s.A, {
            to: a,
            children: n
          }) : n
        }
    },
    10639(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var r = t(39793),
        s = t(13331),
        i = t(5180);
      const o = {
          just1post: "rockstargames-modules-core-newswire-articled46374473ed68a4121f88b44eba06359",
          pillBtn: "rockstargames-modules-core-newswire-articlef2d003dd0e6a129a56ea07208548787c",
          posts: "rockstargames-modules-core-newswire-articlecfe09d4dc8447b1e606404300d040e7a",
          related: "rockstargames-modules-core-newswire-articleb8a63bb419c1f2a8f94e099e1e650e48",
          selected: "rockstargames-modules-core-newswire-articlef94728c4a438800b9abab11a8b3e3c0a"
        },
        n = (0, s.withTranslations)(({
          posts: e,
          t: a
        }) => (0, r.jsxs)("section", {
          className: o.related,
          children: [(0, r.jsx)("h2", {
            children: a("Related Stories")
          }), (0, r.jsx)("div", {
            className: [o.posts, 1 === e.length ? o.just1post : ""].join(" "),
            children: e.map(e => (0, r.jsx)(i.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id))
          })]
        }))
    },
    30544(e, a, t) {
      "use strict";
      t.d(a, {
        y3: () => _e,
        h7: () => Q,
        E$: () => Ge
      });
      var r = t(39793),
        s = t(93082),
        i = t(40283),
        o = t(17301),
        n = t(28097),
        c = t(35246),
        l = t(13331),
        d = t(81270),
        m = t(59070);
      const _ = ({
          hasTag: e = !1,
          tag: a = null,
          tagStyle: t = null,
          badges: s = []
        }) => e && a ? (0, r.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleceb75d3391774f84e920e955d7a6853f",
          "data-tag-style": t,
          children: a
        }) : e && s && s?.length > 0 ? (0, r.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlef83b84453472e937d57011680a564ec6",
          children: s.map(e => (0, r.jsx)(m.A, {
            ...e
          }, e?.text))
        }) : null,
        u = {
          content: "rockstargames-modules-core-newswire-articlef418ed13cf5cbe3f701ce0d872b50704",
          textOverlay: "rockstargames-modules-core-newswire-articleca83475001f5d512b9ffcd89f1117561"
        },
        {
          LiteMotion: b,
          Animations: p
        } = n,
        {
          variants: g,
          transitions: f
        } = p,
        k = ({
          title: e,
          hasTag: a,
          tag: t,
          hasDescription: s,
          description: i,
          fadesOut: o = !1,
          badges: n
        }) => (0, r.jsx)(b, {
          initial: g.fade.out.initial,
          animate: {
            opacity: o ? 0 : 1
          },
          transition: f.fade,
          className: u.textOverlay,
          children: (0, r.jsxs)("div", {
            className: u.content,
            children: [(0, r.jsx)(_, {
              hasTag: a,
              tag: t,
              badges: n?.filter(e => e?.isPrimary)
            }), (0, r.jsx)("h3", {
              children: e
            }), s && i && (0, r.jsx)("div", {
              className: u.description,
              children: i
            })]
          })
        });
      var v = t(42909);
      const h = (0, v.defineMessages)({
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
        w = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          tag: i,
          tagStyle: o,
          discountPrice: n,
          originalPrice: c,
          setPricingContainerHeight: l = null
        }) => {
          const d = (0, s.createRef)(),
            {
              formatMessage: m
            } = (0, v.useIntl)();
          return (0, s.useEffect)(() => {
            const e = () => {
              d.current && null !== l && l(d.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [d]), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee419c6cd31abd635e742e635dcfd8316",
            ref: d,
            "data-show-background": t,
            children: [a && (0, r.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlebf415d56280a8768ee0c26e116865d5b",
              children: e
            }), (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled98da8fc9dce6d600db165351d3a3fed",
              children: [(0, r.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlea5717338db21efc7eb765011d68ea73d",
                "data-tag-style": o || "free",
                children: i
              }), (0, r.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlecdaaa9655747e4d129d6c22080bdd33d",
                children: n
              }), c && (0, r.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articled2cd2139f671e2976f60b0002f59fd77",
                children: m(h.card_sr_only_discount_label)
              }), (0, r.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleaf3db4eb6d14c1f4ee5689b4e6386715",
                children: c
              })]
            })]
          })
        };
      var y = t(80391),
        j = t(28985),
        x = t(47240),
        N = t(81715),
        S = t(49429),
        C = t(32903),
        T = t(85719),
        A = t(11008);
      const I = {
          ps5: x,
          ps4: j,
          ps: y,
          xboxone: S,
          xbox: C,
          xboxseriesxs: N,
          nintendoswitch: A,
          pc: T,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        E = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          platformOptions: i,
          setPricingContainerHeight: o = () => {},
          expandedView: n
        }) => {
          const c = (0, s.createRef)();
          return (0, s.useEffect)(() => {
            const e = () => {
              c.current && null !== o && o(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [c]), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleee81f54f31ab2cd10a67313b9689bf96",
            ref: c,
            "data-show-background": t,
            "data-show-platforms": !n,
            children: [a && (0, r.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articled4ab460f0a204a588d4d4dd0a110ca36",
              children: e
            }), i?.platformsAndLinks && (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleafdc85bfd80cae52d4c1b422f1294962",
              children: [(0, r.jsx)(_, {
                hasTag: i?._memoq?.platformTag,
                tag: i?._memoq?.platformTag,
                tagStyle: i?._memoq?.platformTagStyle
              }), (0, r.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec252412353007d9f02f19a754430b14b",
                children: i.platformsAndLinks.map(({
                  platform: e,
                  buttonText: a
                }) => (0, r.jsx)("img", {
                  className: "rockstargames-modules-core-newswire-articleff5cde8853312ffb892472d100c684cd",
                  alt: a,
                  src: I[e]
                }, e))
              })]
            })]
          })
        },
        z = ({
          textOverlayProps: e,
          title: a,
          size: t,
          expandedView: i = !1,
          children: o,
          pricingOptions: n,
          setPricingContainerHeight: c,
          isCoverCard: l = !1,
          platformOptions: d
        }) => {
          const [m] = (({
            hasTextOverlay: e,
            tag: a,
            collapsedHasTag: t,
            description: i,
            collapsedHasDescription: o,
            size: n,
            title: c,
            expandedView: l,
            badges: d
          }) => {
            const [m, _] = (0, s.useState)(null), u = (0, s.useMemo)(() => {
              if (!e) return null;
              const s = "sm" !== n && o;
              return (0, r.jsx)(k, {
                title: c,
                hasTag: t,
                tag: a,
                hasDescription: s,
                description: i,
                fadesOut: l,
                badges: d
              })
            }, [e, a, t, i, o, n, c, l, d]);
            return (0, s.useEffect)(() => {
              _(u)
            }, [u]), [m, _]
          })({
            ...e,
            size: t,
            title: a,
            expandedView: i
          }), _ = void 0 !== n?.hasPricingOptions || null !== d;
          return (0, r.jsxs)("header", {
            className: "rockstargames-modules-core-newswire-articlecab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": l,
            "data-expanded-view": i,
            children: [s.Children.map(o, e => (0, s.cloneElement)(e, {
              title: a,
              size: t,
              expandedView: i
            })), m, _ && (0, r.jsxs)(r.Fragment, {
              children: [!0 === d?.hasPlatformOptions && (0, r.jsx)(E, {
                title: a,
                platformOptions: d,
                pricingOptions: n,
                setPricingContainerHeight: c,
                expandedView: i
              }), !0 === n?.hasPricingOptions && (0, r.jsx)(w, {
                title: a,
                tag: n?._memoq?.tag,
                tagStyle: n?._memoq?.tagStyle || "free",
                discountPrice: n?._memoq?.discountPrice,
                originalPrice: n?._memoq?.originalPrice,
                setPricingContainerHeight: c
              })]
            })]
          })
        },
        {
          LiteMotion: P,
          Animations: L
        } = n,
        {
          transitions: M
        } = L,
        D = ({
          components: e,
          payload: a,
          prod: t,
          size: n,
          title: m,
          initial: u = "initial",
          animate: b = "animate",
          variants: p,
          type: g = null,
          context: f = null,
          textOverlayProps: k,
          className: v,
          children: h,
          theme: y = "none",
          id: j,
          pricingOptions: x,
          pricingContainerHeight: N,
          isCoverCard: S,
          platformOptions: C,
          isProductCard: T = !1
        }) => {
          const A = (0, s.useRef)(null),
            I = (0, s.useRef)(null),
            {
              tag: E,
              expandedHasTag: L,
              badges: D
            } = k;
          (0, i.set)(a, "meta.prod", t);
          const R = h?.props?.images.length > 0;
          let V = (0, r.jsx)("h1", {
            children: m
          });
          return S && (V = null), (0, s.useEffect)(() => {
            const e = () => {
              A.current && A.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (A.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }, []), (0, r.jsx)(l.DataLayerProvider, {
            card_id: j,
            card_name: m?.toLowerCase(),
            children: (0, r.jsx)(c.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === g ? A : I,
              children: (0, r.jsxs)(P, {
                ref: A,
                initial: u,
                animate: b,
                variants: p.expanded,
                transition: M.cardOpen,
                className: (0, d.default)("rockstargames-modules-core-newswire-articlec2289ce1bf0de6ad8a4a8ce7e90a4b66", v),
                "data-type": g,
                "data-size": n,
                "data-product": T,
                "data-covercard": S || !1,
                "data-context": f,
                style: {
                  "--product-card-pricing-info-height": `${N||0}px`
                },
                children: [R && (0, r.jsx)(z, {
                  size: n,
                  title: m,
                  textOverlayProps: k,
                  expandedView: !0,
                  pricingOptions: x,
                  platformOptions: C,
                  isCoverCard: S,
                  children: h
                }), (0, r.jsxs)(P, {
                  ref: I,
                  className: "rockstargames-modules-core-newswire-articlee461568802b56e8c21b8b82d9c3a1fb4",
                  variants: p.expandedContents,
                  transition: M.afterCardOpen,
                  "data-theme": y,
                  tabindex: -1,
                  children: [(0, r.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, r.jsx)(_, {
                      hasTag: L,
                      tag: E,
                      badges: D
                    }), V, T && (0, r.jsxs)(r.Fragment, {
                      children: [!0 === C?.hasPlatformOptions && (0, r.jsx)("div", {
                        className: "rockstargames-modules-core-newswire-articlecd635452588eda421bdea19f00660efc",
                        children: (0, r.jsx)(_, {
                          hasTag: C?.hasPlatformOptions,
                          tag: C?._memoq?.platformTag,
                          tagStyle: C?._memoq?.platformTagStyle
                        })
                      }), !0 === x?.hasPricingOptions && (0, r.jsx)(w, {
                        title: m,
                        showTitle: !1,
                        showBackground: !1,
                        tag: x?._memoq?.tag,
                        tagStyle: x?.tagStyle || "free",
                        discountPrice: x?._memoq?.discountPrice,
                        originalPrice: x?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, r.jsx)(o.TinaParser, {
                    components: e,
                    tina: {
                      payload: a
                    }
                  })]
                })]
              })
            })
          })
        };
      var R = t(16157),
        V = t(44453),
        F = t(75138),
        $ = t(72527),
        G = t(36416),
        O = (t(44514), t(82199));
      const B = [{}, () => {}],
        H = (0, l.setContextItem)({
          context: (0, s.createContext)(B),
          key: "modalContext"
        }),
        q = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","card_sr_only_discount_label":"Ermäßigter Preis, vorher","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","card_sr_only_discount_label":"Discount price, previously","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","card_sr_only_discount_label":"Precio rebajado, anteriormente","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","card_sr_only_discount_label":"Precio con descuento, anteriormente","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","card_sr_only_discount_label":"Prix réduit, précédemment","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","card_sr_only_discount_label":"Prezzo scontato: prima","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","card_sr_only_discount_label":"割引価格(以前の価格)","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","card_sr_only_discount_label":"할인 가격, 정가","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","card_sr_only_discount_label":"Cena promocyjna, poprzednio","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","card_sr_only_discount_label":"Preço com desconto, antes","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","card_sr_only_discount_label":"Цена по скидке, ранее","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList}上的{title}","card_label_platforms_tag":"{tag} {platformList}上的{title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","card_sr_only_discount_label":"折扣价格，此前","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第{currentPage}页（共{totalPages}页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","card_sr_only_discount_label":"優惠價格，原為","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        U = (0, v.withIntl)(({
          id: e,
          position: a,
          title: t,
          size: i = "md",
          sectionTitle: o = "",
          expandedType: n = null,
          modalProps: c = {
            content: null,
            className: "",
            contentClassName: ""
          },
          className: l,
          children: d,
          isProductCard: m,
          cardIds: _ = null,
          theme: u = "none",
          isCoverCard: b,
          platformOptions: p,
          pricingOptions: g
        }) => {
          const {
            formatMessage: f,
            formatList: k
          } = (0, v.useIntl)(), [w, y] = (0, G.useSearchParams)(), j = (0, s.useRef)(null), [, x] = (0, s.useContext)(H), {
            track: N
          } = (0, O.useGtmTrack)(), [S, C] = (0, s.useState)(!1), T = window.location.href.includes("cms5"), A = () => {
            C(!1), x(null), T || y(e => (e.delete("info"), e), {
              replace: !0
            }), N({
              event: "trackPageview"
            })
          }, I = () => {
            if (!c?.content || !j.current || !n || "linkout" === n) return;
            const r = j.current,
              s = window.getComputedStyle(r),
              o = parseInt(s.getPropertyValue("width"), 10),
              l = parseInt(s.getPropertyValue("height"), 10),
              d = r.getBoundingClientRect(),
              {
                content: m,
                className: b,
                contentClassName: p
              } = c,
              g = "fob" === i ? "fob" : "default";
            x({
              content: m,
              onClose: A,
              rect: d,
              width: o,
              height: l,
              className: b,
              contentClassName: p,
              fadeIn: !1,
              cardIds: _,
              theme: u,
              activeId: e,
              gtm: {
                card_id: e,
                card_name: t?.toLowerCase(),
                position: a
              },
              aspectRatio: g,
              cardDimensions: {
                size: i,
                type: n
              }
            }), N({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: e,
              card_name: t?.toLowerCase(),
              position: a
            })
          };
          (0, s.useEffect)(() => {
            S && I()
          }, [S]), (0, s.useEffect)(() => {
            C(w.get("info") === e)
          }, [w.get("info"), e]);
          const E = (0, s.useMemo)(() => {
            const e = p?._memoq?.platformTag || "";
            if (p?.platformsAndLinks?.length > 0) {
              const a = p?.platformsAndLinks?.map(({
                  buttonText: e
                }) => e).filter(Boolean),
                r = k(a, {
                  type: "conjunction"
                });
              return e ? f(h.card_label_platforms_tag, {
                tag: e,
                title: t,
                platformList: r
              }) : f(h.card_label_platforms, {
                title: t,
                platformList: r
              })
            }
            return e ? f(h.card_label_tag, {
              tag: e,
              title: t
            }) : !0 === g?.hasPricingOptions ? null : t
          }, [p, t]);
          return b || "linkout" === n ? (0, r.jsx)("div", {
            ref: j,
            className: l,
            "data-size": i,
            "data-type": n,
            "data-product": m,
            role: "button",
            "aria-label": E,
            children: d
          }) : (0, r.jsx)("button", {
            ref: j,
            onClick: r => {
              r.preventDefault(), r.stopPropagation(), e ? y({
                info: e
              }) : I(), N({
                event: "card_click",
                element_placement: o?.toLowerCase(),
                position: a,
                card_id: e,
                card_name: t?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: l,
            "data-size": i,
            "data-type": n,
            "data-product": m,
            tabIndex: "linkout" !== n ? 0 : -1,
            "aria-label": E,
            type: "button",
            children: d
          })
        }, q),
        W = {
          card: "rockstargames-modules-core-newswire-articlec49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-modules-core-newswire-articleb41eac21ba69f02fe26f8dafa8433207",
          coverCardWrapper: "rockstargames-modules-core-newswire-articledd482c08ed9fdc5cef20f63dd6720e13",
          expandedContent: "rockstargames-modules-core-newswire-articlefea5414b5f55420cfcd6c6ee12a393b3",
          imageHolder: "rockstargames-modules-core-newswire-articled893e3eab0a5754bb28882ceb8de6b59",
          pillBtn: "rockstargames-modules-core-newswire-articlef3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-modules-core-newswire-articlea03c60979e8d6882b5b8ce0f0301b7e9",
          text: "rockstargames-modules-core-newswire-articlee961062768d06292ff6cb598ae1c5e69"
        },
        K = ({
          payload: e,
          prod: a,
          images: t,
          size: i,
          title: n,
          initial: c,
          animate: l,
          variants: d,
          id: m,
          position: _,
          sectionTitle: u,
          expandedType: b,
          context: p,
          children: g,
          expandedCardContents: f,
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
          theme: w,
          cardIds: y,
          pricingOptions: j,
          platformOptions: x = null,
          pricingContainerHeight: N,
          isCoverCard: S = !1,
          isProductCard: C = !1
        }) => {
          const T = (0, o.useTinaComponents)(),
            A = (0, s.useMemo)(() => ({
              ...T,
              HTMLElement: R.A,
              ImageWithBadge: V.A,
              Carousel: F.A,
              GroupOfItems: $.default
            }), [T]),
            I = (0, s.useMemo)(() => (0, r.jsx)(D, {
              type: b,
              components: A,
              payload: e,
              prod: a,
              images: t,
              size: i,
              title: n,
              context: p,
              textOverlayProps: k,
              initial: c,
              animate: l,
              variants: d,
              theme: w,
              cardIds: y,
              pricingOptions: j,
              id: m,
              pricingContainerHeight: N,
              isCoverCard: S,
              platformOptions: x,
              isProductCard: C,
              children: f
            }), [b, t, a, i, n, k, f, c, l, d, A, e, C]),
            E = [W.card, S ? W.coverCardWrapper : ""].join(" ");
          return (0, r.jsx)(U, {
            id: m,
            position: _,
            sectionTitle: u,
            title: n,
            size: i,
            expandedType: b,
            images: t,
            deckProps: v,
            modalProps: {
              content: I,
              ...h
            },
            className: E,
            isProductCard: C,
            cardIds: y,
            theme: w,
            isCoverCard: S,
            platformOptions: x,
            pricingOptions: j,
            children: g
          })
        };
      var Y = t(38044),
        X = t(95967);
      const J = {
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
        Z = ({
          videoUrl: e,
          expandedType: a,
          children: t
        }) => e && "linkout" === a ? (0, r.jsx)(Y.A, {
          to: e,
          children: t
        }) : t,
        Q = ({
          className: e,
          cardType: a,
          title: t,
          image: s,
          subheader: i,
          subtitle: o,
          price: n,
          slashedPrice: c,
          badge: l = null,
          expandedType: d,
          videoUrl: m
        }) => (0, r.jsx)("div", {
          className: [J.clrCollapsedCard, e].join(" "),
          role: "button",
          tabIndex: 0,
          children: (0, r.jsx)(Z, {
            videoUrl: m,
            expandedType: d,
            children: (0, r.jsxs)("div", {
              className: J.cardContainer,
              "data-type": a,
              children: [(0, r.jsx)("div", {
                className: J.cardMedia,
                children: (0, r.jsx)(X.A, {
                  ...s
                })
              }), (0, r.jsxs)("div", {
                className: J.cardInfo,
                children: [i && (0, r.jsx)("h6", {
                  children: i
                }), (0, r.jsx)("h5", {
                  children: t
                }), o && (0, r.jsx)("h6", {
                  className: J.subtitle,
                  children: o
                }), "store" === a && (0, r.jsxs)("div", {
                  className: J.storeInfo,
                  children: [(0, r.jsx)("p", {
                    className: (() => {
                      switch (l) {
                        case "New":
                          return J.newBadge;
                        case "Sale":
                          return J.saleBadge;
                        case "Out of Stock":
                          return J.outOfStockBadge;
                        default:
                          return ""
                      }
                    })(),
                    children: l
                  }), (0, r.jsxs)("span", {
                    className: J.priceInfo,
                    children: [(0, r.jsx)("p", {
                      className: J.price,
                      children: n
                    }), (0, r.jsx)("p", {
                      className: J.slashedPrice,
                      children: c
                    })]
                  })]
                })]
              })]
            })
          })
        }),
        ee = ({
          expandedType: e,
          to: a,
          children: t,
          style: i,
          sectionTitle: o = "",
          id: n,
          cardTitle: c,
          position: l
        }) => {
          const {
            track: d
          } = (0, O.useGtmTrack)(), m = (0, s.useCallback)(() => {
            d({
              event: "card_click",
              link_url: a,
              card_id: n,
              card_name: c,
              element_placement: o.toLowerCase(),
              position: l
            })
          }, [o, a, n, c, o, l]);
          return "linkout" === e && a ? (0, r.jsx)(Y.A, {
            to: a,
            style: i,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: m,
            children: t
          }) : t
        };
      var ae = t(25993);
      const te = {
          foreground: "rockstargames-modules-core-newswire-articled858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-modules-core-newswire-articled656190323ba10afc580adbf82303a8b",
          layered: "rockstargames-modules-core-newswire-articlea7a1d10cda2bf3de7960b4fadf2f7a4e",
          layeredImageFrame: "rockstargames-modules-core-newswire-articlecfc6074d8b476125230142c79438a249",
          logo: "rockstargames-modules-core-newswire-articleca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-modules-core-newswire-articlef5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: re,
          Animations: se
        } = n,
        {
          getVariant: ie,
          variants: oe,
          transitions: ne
        } = se,
        ce = ({
          image: e,
          i: a,
          prod: t
        }) => {
          const {
            alt: s,
            src: i
          } = (0, ae.S1)({
            ...e,
            prod: t
          });
          return (0, r.jsx)("img", {
            src: i.mobile,
            alt: s ?? "",
            style: {
              "--z-index": a
            }
          })
        },
        le = ({
          images: e = [],
          className: a = "",
          prod: t = !1,
          expandedView: i = !1,
          style: o = {}
        }) => {
          const [n, c] = (0, s.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, s.useEffect)(() => {
            function e() {
              c({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [n]);
          const l = (0, s.useMemo)(() => e?.length && 0 !== e.length ? e.map(e => (0, r.jsx)(re, {
            className: (0, d.default)(te[e?.specialClass] ?? te.imageMask, te[e?.sizeClass], e?.className),
            variants: ie(e?.specialClass ?? "imageMask", i ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: ne.cardOpen,
            children: (0, r.jsx)(ce, {
              image: e,
              prod: t
            })
          }, e.key)) : null, [e, n, i, t]);
          return (0, r.jsx)(re, {
            className: (0, d.default)(te.layeredImageFrame, e.length > 1 ? te.layered : te.flat, a),
            style: o,
            initial: oe.fade.in.initial,
            animate: oe.fade.in.animate,
            transition: ne.instantFade,
            "data-expanded-view": i,
            children: l
          })
        },
        de = {
          calloutHeaders: "rockstargames-modules-core-newswire-articleebd11baf4f38deb4ff8d0662eb5a6862",
          clrCardModalContent: "rockstargames-modules-core-newswire-articlef32476f7063f9c4104b440088ce4c4b0",
          content: "rockstargames-modules-core-newswire-articlea0b99bca02f0c4de4ad0bf4e4bd02337",
          details: "rockstargames-modules-core-newswire-articlee642b377145369df07970f4d4feb3f25",
          expandedCard: "rockstargames-modules-core-newswire-articlef6cbada424337b1e6ccd75c5029db4c3"
        },
        {
          variants: me
        } = n.Animations,
        _e = ({
          id: e,
          content: a,
          size: t = "clr",
          cardType: s = "release",
          title: i,
          subheader: n,
          subtitle: c,
          storeInfo: l = {},
          expandedType: d,
          to: m,
          image: _,
          deckProps: u,
          tina: b = {},
          position: p
        }) => {
          const g = (0, o.useTinaPayload)(),
            f = b?.payload?.meta?.cdn ?? g?.meta?.prod ?? !1,
            k = {
              image: {
                ..._,
                prod: f
              }
            },
            v = [_];
          return (0, r.jsx)(K, {
            id: e,
            title: i,
            context: "clr-card",
            size: t,
            expandedType: d,
            images: k,
            deckProps: u,
            prod: f,
            position: p,
            modalProps: {
              className: de.clrCardModal,
              contentClassName: de.clrCardModalContent
            },
            variants: me.plainCard,
            payload: {
              content: a
            },
            expandedCardContents: (0, r.jsx)(le, {
              images: v,
              prod: f
            }),
            children: (0, r.jsx)(ee, {
              expandedType: d,
              to: m,
              style: {
                display: "flex"
              },
              children: (0, r.jsx)(Q, {
                cardType: s,
                title: i,
                subheader: n,
                subtitle: c,
                image: k,
                expandedType: d,
                price: l?.price,
                slashedPrice: l?.slashedPrice,
                badge: l?.badge
              })
            })
          })
        };
      var ue = t(12334),
        be = t(79113);
      const pe = ({
          images: e,
          title: a,
          expandedView: t,
          variants: i,
          transition: o
        }) => {
          const n = (0, s.useMemo)(() => e && 0 !== e?.length ? e.map((e, a) => e?.image?.sources ? (0, s.createElement)(V.A, {
            ...e,
            key: a,
            style: {
              ...e?.style,
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null) : null, [e]);
          return !n?.length || n?.length < 1 ? null : 1 === n.length ? n : (0, r.jsx)(be.A, {
            slideChildren: n,
            title: a,
            navigation: t,
            thumbsVisible: t,
            spaceBetween: 0,
            variants: i,
            transition: o
          })
        },
        ge = {
          customModalContent: "rockstargames-modules-core-newswire-articleecdc3da21cda9331cebe845898b7fa7b",
          pillBtn: "rockstargames-modules-core-newswire-articlecf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-modules-core-newswire-articlecbdd37e11b752cff831c5a96aeb7dbeb"
        },
        {
          transitions: fe,
          variants: ke
        } = n.Animations,
        ve = ({
          id: e,
          title: a,
          content: t,
          size: i = "md",
          expandedType: n = "gallery",
          textOverlayProps: c = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: l = [],
          deckProps: d = {},
          tina: m = {},
          payload: _,
          position: u = 0,
          sectionTitle: b = "",
          cardIds: p
        }) => {
          const g = (0, o.useTinaPayload)(),
            f = _ ?? g,
            k = m?.payload?.meta?.cdn ?? f?.meta?.prod ?? !1,
            v = ((e, a) => e?.map(e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e))(l, k),
            [h, w] = (0, s.useState)(d?.size ?? i),
            {
              parent: y,
              main: j,
              thumbs: x
            } = ke?.cardWithImageGallery?.gallery ?? {};
          return (0, s.useEffect)(() => {
            w(d?.size ?? i)
          }, [d?.size, i]), (0, r.jsx)(K, {
            id: e,
            position: u,
            sectionTitle: b,
            payload: {
              content: t,
              meta: {},
              payload: f
            },
            title: a,
            size: h,
            expandedType: n,
            images: v,
            deckProps: d,
            prod: k,
            variants: ke.cardWithImageGallery,
            textOverlayProps: c,
            modalProps: {
              className: ge.customModal,
              contentClassName: ge.customModalContent
            },
            expandedCardContents: (0, r.jsx)(pe, {
              images: v,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: y,
                main: j,
                thumbs: x
              },
              transition: {
                parent: fe.cardOpen,
                main: fe.cardOpen,
                thumbs: fe.cardOpen
              }
            }),
            cardIds: p,
            children: (0, r.jsx)("div", {
              className: ge.content,
              children: (0, r.jsx)(z, {
                title: a,
                size: h,
                textOverlayProps: c,
                children: (0, r.jsx)(pe, {
                  images: v,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        };
      var he = t(32255),
        we = t(42249);
      const ye = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        je = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        xe = e => e.scrollHeight > e.clientHeight;

      function Ne(e, a) {
        const t = {
          ...e
        };
        return (0, i.forOwn)(e, (e, r) => {
          if ("image" === r) {
            const e = t[r];
            t[r] = {
              ...e,
              prod: a
            }
          } else(0, i.isObject)(e) && !(0, i.isArray)(e) ? Ne(e, a) : (0, i.isArray)(e) && (t[r] = e.map(e => (0, i.isObject)(e) ? Ne(e, a) : e))
        }), t
      }
      const Se = (0, l.withTranslations)(({
        active: e,
        styles: a,
        title: t,
        itemNumber: n,
        inModalMode: c,
        openModalMode: l,
        element: d,
        upNext: _,
        mobileMode: u,
        refDeck: b,
        components: p,
        tina: g,
        prevPage: f,
        nextPage: k,
        onFocus: w,
        transitionStyle: y,
        selectedItemNumber: j,
        carouselTitle: x,
        sharedDraggingDelta: N,
        setSharedDraggingDelta: S,
        trapFocus: C
      }) => {
        const T = (0, v.useIntl)(),
          {
            track: A
          } = (0, O.useGtmTrack)(),
          I = (0, s.createRef)(),
          E = (0, s.createRef)(),
          z = (0, s.createRef)(),
          P = (0, s.createRef)(),
          [L, M] = (0, s.useState)(!1),
          [D, R] = (0, s.useState)(0),
          [V, F] = (0, s.useState)(0),
          [$, G] = (0, s.useState)(0),
          [B, H] = (0, s.useState)(0),
          [q, U] = (0, s.useState)(0),
          [W, K] = (0, s.useState)(!1),
          [Y, X] = (0, s.useState)(0),
          [J, Z] = (0, s.useState)(0),
          [Q, ee] = (0, s.useState)(0),
          [te, re] = (0, s.useState)("700"),
          [se, ie] = (0, s.useState)(-1),
          [oe, ne] = (0, s.useState)(0),
          [ce, le] = (0, s.useState)(0),
          [de, me] = (0, s.useState)(0),
          [_e, ue] = (0, s.useState)(!1),
          [be, pe] = (0, s.useState)(""),
          [ge, fe] = (0, s.useState)(null),
          [ke, ve] = (0, s.useState)(!1),
          [he, we] = (0, s.useState)(null),
          [Se, Ce] = (0, s.useState)(!1),
          [Te, Ae] = (0, s.useState)(!1),
          Ie = (0, o.useTinaPayload)(),
          Ee = g?.payload?.meta?.cdn ?? !1 ?? Ie?.meta?.prod ?? !1,
          ze = (0, o.useTranslations)({
            payload: g?.payload,
            variables: g?.variables
          }),
          Pe = ze?.meta ?? {},
          Le = Ne(ze?.content?.[0], Ee),
          Me = (0, s.useMemo)(() => Le?.images?.[0]?.image?.badge, [Le]),
          De = (0, s.useMemo)(() => Le.title ?? t ?? Pe?.title, [t, Pe?.title, Le.title]),
          Re = (0, ae.S1)({
            alt: Le?.images?.[0]?.image?.alt ?? "",
            ariaLabel: Le?.images?.[0]?.image?.alt ?? "",
            sources: Le?.images?.[0]?.image?.sources ?? [],
            prod: Ee
          }),
          Ve = Re?.src?.mobile ?? Re?.src?.desktop ?? !1,
          Fe = (0, s.useMemo)(() => Pe?.foreignId, [Pe]),
          $e = (0, s.useMemo)(() => Pe?.foreignTitle, [Pe]),
          [Ge, Oe] = (0, s.useState)(0),
          [Be, He] = (0, s.useState)(0),
          [qe, Ue] = (0, s.useState)(0),
          [We, Ke] = (0, s.useState)(0),
          [Ye, Xe] = (0, s.useState)(!1),
          [Je, Ze] = (0, s.useState)(0),
          [Qe, ea] = (0, s.useState)(20),
          [aa, ta] = (0, s.useState)(null),
          [ra, sa] = (0, s.useState)(!1),
          ia = (0, s.useCallback)(e => {
            if (!0 === W || !c && !u || ke) return;
            const a = je(e);
            Oe(a.x), He(a.y)
          }, [W, c]),
          oa = e => {
            ia(e)
          },
          na = e => {
            if (!0 === W || 0 === Ge || !c && !u || ke) return;
            const a = je(e),
              t = a.x > Ge ? 1 : -1,
              r = Math.abs(Ge - a.x);
            c && !u && r > Qe ? (sa(!0), pe(t > 0 ? "prev" : "next"), la()) : (Xe(!0), Ze(r * t), S(r * t))
          },
          ca = e => {
            if (!0 === W || !c && !u || ke) return;
            const a = je(e),
              t = a.x > Ge ? 1 : -1,
              r = Math.abs(Ge - a.x),
              s = Math.abs(Be - a.y);
            c && !u ? (la(), pe("")) : r > Qe && s < 25 ? (sa(!0), pe(t > 0 ? "prev" : "next"), la()) : la()
          },
          la = () => {
            K(!0), Oe(0), He(0), Xe(!1), Ze(0), S(0)
          },
          da = e => {
            e ? (c || M(!0), c || u || (clearTimeout(se), ie(setTimeout(() => {
              A({
                event: "card_title_hover",
                card_name: De,
                card_id: n,
                position: n,
                view_name: `${Fe}/${$e}`,
                source_content_id: Fe,
                source_content_name: $e
              })
            }, 1e3)))) : (c || M(!1), c || u || clearTimeout(se))
          };
        return (0, s.useEffect)(() => {
          let e = Y;
          L ? e = 0 : c && !u && (e = Y), R(e)
        }, [L, u, c, V, B, J, Q, $, Y]), (0, s.useEffect)(() => {
          M(!(!c || !u))
        }, [c, u]), (0, s.useEffect)(() => {
          c && e && A({
            event: "virtualPageview",
            display_type: u ? "mobile" : "desktop",
            view_name: `${Fe}/${De}`,
            source_content_id: Fe,
            source_content_name: $e
          })
        }, [c, e]), (0, s.useEffect)(() => {
          const e = (0, i.debounce)((e, a) => {
            let t = 18;
            if (e?.documentElement && (t = ye(e?.documentElement, "--root-font-size")), ce !== a.innerHeight && le(a.innerHeight), b?.current) {
              ee(ye(b.current, "--eventDeck-marginSm") * t);
              const e = t * ye(b?.current, "--eventDeck-modalGutters"),
                r = a?.innerWidth,
                s = r - 2 * e;
              F(s), z.current && u && G(s), H(ye(b.current, "--eventDeck-itemSize") * t), me(ye(b.current, "--eventDeck-phaseOneTransitionDuration"));
              const i = ye(b?.current, "--eventDeck-itemImageTitleMargins") * t,
                o = E?.current?.clientHeight,
                n = o + i;
              Number.isNaN(n) || X(n), ne(ye(b?.current, "--eventDeck-headerHeight") * t)
            }
            let r = Math.min(700, a.innerWidth);
            u || (r = 900), re(`${r}`)
          }, 300);
          return window.addEventListener("resize", () => {
            e(document, window)
          }), e(document, window), () => {
            window.removeEventListener("resize", () => {
              e(document, window)
            })
          }
        }, [b, u]), (0, s.useEffect)(() => {
          if (I.current) {
            const e = I.current.clientHeight;
            Number.isNaN(e) || Z(e)
          }
        }, [I]), (0, s.useEffect)(() => {
          if (c && u && z.current && (z.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !c && u && z.current) {
            const e = 228 / V;
            z.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
          }!u && z.current && (z.current.style.transform = null)
        }, [c, u, V, $]), (0, s.useEffect)(() => {
          const e = .5 * V,
            a = ce - oe - 3 * Q;
          U(V - (e < a ? e : a))
        }, [V, Q, ce]), (0, s.useEffect)(() => {
          "next" === be ? (k(null, !0), pe("")) : "prev" === be && (f(null, !0), pe(""))
        }, [be]), (0, s.useEffect)(() => {
          Ue(0), Ke(0)
        }, [u]), (0, s.useEffect)(() => {
          u ? ea(c ? 35 : 20) : c && ea(50)
        }, [c, u]), (0, s.useEffect)(() => {
          if (null !== a?.transform) {
            const e = a?.transform?.split(",") ?? [],
              t = e[0].split("("),
              r = Number(t[1].replace("px", "")),
              s = Number(e[1].replace("px", ""));
            Ue(r), Ke(s)
          }
        }, [a]), (0, s.useEffect)(() => {
          if (!W) return;
          clearTimeout(ge);
          const e = setTimeout(() => {
            K(!1), Oe(0)
          }, 200);
          fe(e)
        }, [W, 200]), (0, s.useEffect)(() => {
          if (!ra) return;
          clearTimeout(aa);
          const e = setTimeout(() => {
            sa(!1)
          }, 1e3);
          ta(e)
        }, [ra]), (0, s.useEffect)(() => {
          c && clearTimeout(se), setTimeout(() => {
            ue(!_e)
          }, de)
        }, [c]), (0, s.useEffect)(() => (document.body.addEventListener("mouseleave", la), () => {
          document.body.removeEventListener("mouseleave", la)
        }), []), (0, s.useEffect)(() => {
          P.current ? Ce(xe(P.current)) : Ce(!1), void 0 !== d && d.current ? Ae(xe(d.current)) : Ae(!1)
        }, [d, P, e, c, _e]), Le ? (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec02ee363d47108460ab7916fc955cd9b",
          ref: d,
          "data-item-position": n,
          "data-modal-mode": c,
          "data-active-item": e,
          "data-up-next": _,
          "data-transition": Ye || 0 !== N ? "none" : y,
          "data-scrollable": Te,
          style: {
            ...a,
            transform: c && e && !u ? `translate3d(${qe+Je}px, ${We}px, 0)` : u && !c ? `translate3d(${qe+N}px, ${We}px, 0)` : a?.transform
          },
          onClick: e => {
            ra || (c ? c && !u && (n < j ? f(e, !0) : n > j && k(e, !0)) : l(e))
          },
          onMouseEnter: () => da(!0),
          onMouseLeave: () => da(!1),
          onFocus: e => (e => {
            w?.(e), da(!0)
          })(e),
          onBlur: () => da(!1),
          onTouchStart: oa,
          onTouchMove: na,
          onTouchEnd: ca,
          onMouseDown: oa,
          onMouseMove: na,
          onMouseUp: ca,
          onKeyUp: e => {
            "Enter" !== e.code && "Space" !== e.code || c || l(e)
          },
          onKeyDown: e => {
            "Tab" === e.key && e.shiftKey && c && (e.preventDefault(), C("backwards")), "Space" === e.code && e.preventDefault()
          },
          "aria-label": c ? T.formatMessage(h.events_deck_modal_group_label) : De,
          role: c ? "dialog" : "button",
          tabIndex: c ? -1 : 0,
          children: [(0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articledee75b8e3614051c8f0fc97e373e78e5",
            "data-full-header": L,
            style: {
              height: c && u ? `${V}px` : null,
              width: c && u ? `${V}px` : null
            },
            role: "figure",
            children: [Ve && (0, r.jsx)("img", {
              ref: z,
              src: `${Re?.src?.mobile??Re?.src?.desktop}?im=Resize,width=${te}`,
              alt: Re?.alt ?? "",
              style: {
                width: 0 !== $ && u ? `${$}px` : null,
                height: 0 !== $ && u ? `${$}px` : null
              }
            }), (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articledc279f97c134d6e7d30602288b8b10ae",
              "aria-hidden": "true",
              style: {
                transform: !u || u && c ? `translate3d(0, ${D}px, 0)` : null
              },
              children: [Me && (0, r.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlecfe252d5613a21c1d308c98566cabd21",
                ref: I,
                children: (0, r.jsx)(m.A, {
                  text: Me
                })
              }), (0, r.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleb311a78aea53383ab6bd5cbccb52ceeb",
                tabIndex: -1,
                ref: E,
                "aria-hidden": "true",
                children: De
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled212586e74ea4b4fe934beed9e339f78",
            ref: P,
            "aria-hidden": !c,
            tabIndex: c ? 0 : -1,
            onScroll: () => {
              ve(!0), la(), clearTimeout(he);
              const e = setTimeout(() => {
                ve(!1)
              }, 100);
              we(e)
            },
            style: {
              top: c && u ? `${V}px` : null,
              width: c && !u && e ? `${q}px` : null,
              touchAction: Se || u ? "unset" : "none"
            },
            children: [De && (0, r.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articleda9ef865674c108ffd53cfab2ed2971a",
              role: "heading",
              children: De
            }), (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleabad8b0c98a7216d91b672492397e6a6",
              role: "text",
              children: (0, r.jsx)(o.TinaParser, {
                components: p,
                tina: {
                  meta: Pe,
                  payload: {
                    content: Le?.content
                  }
                }
              })
            }), (0, r.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlea0b399d3bf191afcf00e7196639527d5",
              type: "button",
              onFocus: C,
              style: {
                display: c ? "block" : "none"
              }
            })]
          })]
        }) : null
      });
      var Ce = t(2183);
      const Te = "rockstargames-modules-core-newswire-articleeff7810cc71a3b63bfc3e58cbe4a0279",
        Ae = ({
          prevPage: e,
          prevBtnDisabled: a,
          nextPage: t,
          nextBtnDisabled: i,
          selectedItemNumber: o,
          itemsData: n,
          closeModalMode: c,
          inModalMode: l,
          controlsHidden: d,
          focusTrapControl: m,
          focusTrapDirection: _,
          setTriggerFocusCard: u
        }) => {
          const b = (0, v.useIntl)(),
            p = (0, s.createRef)(),
            g = (0, s.createRef)(),
            f = (0, s.createRef)();
          return (0, s.useEffect)(() => {
            m && ("backwards" === _ ? f?.current?.focus() : a ? g?.current?.focus() : p?.current?.focus())
          }, [m, a]), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea13ee8af1dd8f09d28c65e56abd782ef",
              "aria-hidden": d || "false",
              children: [(0, r.jsx)("button", {
                className: Te,
                ref: p,
                type: "button",
                onClick: e,
                disabled: a,
                "aria-label": l ? b.formatMessage(h.events_deck_modal_previous_aria_label) : b.formatMessage(h.events_deck_previous_aria_label),
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && l && (e.preventDefault(), u(!0))
                }
              }), (0, r.jsxs)("span", {
                className: "rockstargames-modules-core-newswire-articlea6b11adaa46a0c2acc5893d2f5da04f1",
                "aria-hidden": !l,
                children: [(0, r.jsx)(Ce.A, {
                  "aria-live": "polite",
                  children: b.formatMessage(h.events_deck_paging_label, {
                    currentPage: o + 1,
                    totalPages: n.length
                  })
                }), (0, r.jsxs)("span", {
                  "aria-hidden": "true",
                  className: "rockstargames-modules-core-newswire-articleeb9f07e9a2e17e70e61b73dec95da6c0",
                  children: [o + 1, (0, r.jsx)("span", {
                    className: "rockstargames-modules-core-newswire-articleaad28b229162f1d7494a2de3a3b6b547"
                  }), n.length]
                })]
              }), (0, r.jsx)("button", {
                className: Te,
                ref: g,
                type: "button",
                onClick: t,
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && a && l && (e.preventDefault(), u(!0))
                },
                disabled: i,
                "aria-label": l ? b.formatMessage(h.events_deck_modal_next_aria_label) : b.formatMessage(h.events_deck_next_aria_label)
              })]
            }), (0, r.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlefb0b7933375b44858b7e92cdea86ee81",
              type: "button",
              onClick: c,
              ref: f,
              onKeyDown: e => {
                "Tab" === e.key && !e.shiftKey && l && (e.preventDefault(), u(!0))
              },
              "aria-label": b.formatMessage(h.events_deck_modal_close_label),
              "aria-hidden": !l,
              tabIndex: l ? 0 : -1
            })]
          })
        };
      (0, v.withIntl)(e => {
        const {
          setBodyIsLocked: a
        } = (0, l.useBodyScrollable)("EventsDeck"), {
          title: t
        } = e, {
          track: n
        } = (0, O.useGtmTrack)(), [c, d] = (0, s.useState)(!1), m = (() => {
          const {
            data: e
          } = (0, l.useQuery)(we.TinaModulesList, {
            variables: {
              type: "gtao-event-card",
              orderBy: "priority",
              orderDirection: "desc"
            }
          }), a = e?.tinaModulesList?.results, t = (0, i.map)(a, "id");
          return (0, he.X)({
            ids: t
          })
        })(), [_, u] = (0, s.useState)([]), [b, p] = (0, s.useState)(null), [g, f] = (0, s.useState)(0), [k, v] = (0, s.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [h, w] = (0, s.useState)(!1), y = (0, s.createRef)(), [j, x] = (0, s.useState)(null), N = (0, s.createRef)(), S = (0, s.createRef)(), [C, T] = (0, s.useState)([]), [A, I] = (0, s.useState)(!0), [E, z] = (0, s.useState)(!1), [P, L] = (0, s.useState)(!1), [M, D] = (0, s.useState)([]), [G, B] = (0, s.useState)(404), [H, q] = (0, s.useState)(808), [U, W] = (0, s.useState)(672), [K, Y] = (0, s.useState)(336), [X, J] = (0, s.useState)(0), [Z, Q] = (0, s.useState)(0), [ee, ae] = (0, s.useState)(0), [te, re] = (0, s.useState)(0), [se, ie] = (0, s.useState)(0), [oe, ne] = (0, s.useState)(!1), ce = !!(0, l.usePrevious)(oe), [le, de] = (0, s.useState)(window.innerWidth), [me, _e] = (0, s.useState)(0), [be, pe] = (0, s.useState)(0), [ge, fe] = (0, s.useState)(0), [ke, xe] = (0, s.useState)(0), [Ne, Ce] = (0, s.useState)(0), [Te, Ie] = (0, s.useState)(0), [Ee, ze] = (0, s.useState)(0), [Pe, Le] = (0, s.useState)(0), [Me, De] = (0, s.useState)(-1e3), [Re, Ve] = (0, s.useState)(0), [Fe, $e] = (0, s.useState)(50), [Ge, Oe] = (0, s.useState)(0), [Be, He] = (0, s.useState)(!1), [qe, Ue] = (0, s.useState)(768), [We, Ke] = (0, s.useState)(!1), [Ye, Xe] = (0, s.useState)(!1), [Je, Ze] = (0, s.useState)(!1), [Qe, ea] = (0, s.useState)(!1), [aa, ta] = (0, s.useState)(!1), [ra, sa] = (0, s.useState)(1e3), [ia, oa] = (0, s.useState)(1.2), [na, ca] = (0, s.useState)(0), [la, da] = (0, s.useState)(!1), [ma, _a] = (0, s.useState)(!1), [ua, ba] = (0, s.useState)(!0), [pa, ga] = (0, s.useState)(!1), [fa, ka] = (0, s.useState)(!1), [va, ha] = (0, s.useState)(null), [wa, ya] = (0, s.useState)(100), [ja, xa] = (0, s.useState)(!1), [Na, Sa] = (0, s.useState)({}), [Ca, Ta] = (0, s.useState)(""), [Aa, Ia] = (0, s.useState)(0), [Ea, za] = (0, s.useState)(!1), [Pa, La] = (0, s.useState)(!1), [Ma, Da] = (0, s.useState)(0), [Ra, Va] = (0, s.useState)(0), [Fa, $a] = (0, s.useState)(100), [Ga, Oa] = (0, s.useState)(!1), [Ba, Ha] = (0, s.useState)(!1), [qa, Ua] = (0, s.useState)(!1), [Wa, Ka] = (0, s.useState)(!1), [Ya, Xa] = (0, s.useState)("forward"), Ja = () => le * me + Fe, Za = () => !1 === Be ? ia : 1, Qa = e => e === Ee - 1 || e === Ee + 1, et = () => -1 * Te - ke, at = (e, a = !0) => {
          if (!0 === Be) return 0;
          const t = e.itemNumber % 2 == 0,
            r = G * ia;
          if (!0 === t && 0 !== e.itemNumber) {
            const t = ye(e?.element?.current, "top");
            let s = t - ee;
            return !1 === a && (s -= t), -1 * (.5 * r + s) + na
          }
          return ee - .5 * r + na
        }, tt = (e, a, t = !0) => {
          let r = et();
          !1 === t && (r = 0);
          const s = le * me,
            i = !1 === Be ? G * Za() : s;
          return e.inModalMode && Be ? -1 === a ? Ja() * (Ee - e.itemNumber) * -1 - e.styles.left : Ja() * (e.itemNumber - Ee) - e.styles.left : -1 === a ? -1 * e.styles.left - i - Fe + r : s - e.styles.left + Fe + r
        }, rt = (e, a, t) => {
          -1 === a && (z(!1), I(!0)), z(!1 === t && e >= a || !0 === t && e + 1 === a), I(e <= 0)
        }, st = (e, a = !1) => {
          if (fa || pa) return;
          if (ka(!0), oe) return void((e = !1) => {
            if (Ee + 1 >= _.length) return;
            const a = C[Ee + 1]?.tina?.payload?.meta?.title ?? `card-${Ee+1}`;
            n({
              event: e ? "modal_swipe" : "modal_next",
              card_name: a,
              card_id: Ee + 1,
              position: Ee + 1,
              view_name: `${C[Ee+1].source_content_id}/${a}`,
              source_content_id: C[Ee + 1].source_content_id,
              source_content_name: C[Ee + 1].source_content_name
            }), rt(Ee + 1, _.length, !0), Be ? Be && T(C.map(e => {
              e.itemNumber === Ee - 1 ? e.upNext = !1 : e.itemNumber === Ee + 2 ? e.upNext = !0 : e.itemNumber === Ee + 1 ? e.active = !0 : e.itemNumber === Ee && (e.upNext = !0, e.active = !1);
              const a = e.styles.transform.replace("translate3d(", "").split(",");
              let t = Number(a[0].replace("px", ""));
              t -= Ja();
              const r = `translate3d(${t}px,${a[1]},${a[2]}`;
              return e.styles = {
                ...e.styles,
                transform: r
              }, e
            })) : T(C.map(e => (e.itemNumber === Ee - 1 ? e.upNext = !1 : e.itemNumber === Ee + 2 ? e.upNext = !0 : e.itemNumber === Ee + 1 ? (e.active = !0, e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${et()}px, ${na}px, 0) scale(1)`
            }) : e.itemNumber === Ee && (e.upNext = !0, e.active = !1, e.styles = {
              ...e.styles,
              transform: `translate3d(${tt(e,-1)}px, ${at(e)}px, 0) scale(${Za()})`
            }), e))), ze(Ee + 1)
          })(a);
          const r = Ne + 1;
          if (!(r > se))
            if (n({
                event: a ? "carousel_swipe" : "carousel_next",
                element_placement: t?.toLowerCase() ?? ""
              }), rt(r, se, !1), Be) {
              let e = r * K * -1;
              e < Me && (e = Me, z(!0), I(!1), Ce(se)), Ce(r), T(C.map(a => (a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, 0, 0)`
              }, a)))
            } else {
              let e = Te - Z;
              Ce(r), e < Me && (e = Me, z(!0), I(!1), Ce(se)), Ie(e)
            }
        }, it = (e, a = !1) => {
          if (fa || pa) return;
          if (ka(!0), !0 === oe) return void((e = !1) => {
            if (fa) return;
            if (Ee - 1 < 0) return;
            const a = C[Ee - 1]?.tina?.payload?.meta?.title ?? "card-" + (Ee - 1);
            n({
              event: e ? "modal_swipe" : "modal_previous",
              element_placement: t?.toLowerCase(),
              card_name: a,
              card_id: Ee - 1,
              position: Ee - 1,
              view_name: `${C[Ee-1].source_content_id}/${a}`,
              source_content_id: C[Ee - 1].source_content_id,
              source_content_name: C[Ee - 1].source_content_name
            }), rt(Ee - 1, _.length, !0), Be || T(C.map(e => (e.itemNumber === Ee + 1 ? e.upNext = !1 : e.itemNumber === Ee - 2 ? e.upNext = !0 : e.itemNumber === Ee ? (e.upNext = !0, e.active = !1, e.styles = {
              ...e.styles,
              transform: `translate3d(${tt(e,1)}px, ${at(e)}px, 0) scale(${Za()})`
            }) : e.itemNumber === Ee - 1 && (e.active = !0, e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${et()}px, ${na}px, 0) scale(1)`
            }), e))), Be && T(C.map(e => {
              e.itemNumber === Ee + 1 ? e.upNext = !1 : e.itemNumber === Ee - 2 ? e.upNext = !0 : e.itemNumber === Ee ? (e.upNext = !0, e.active = !1) : e.itemNumber === Ee - 1 && (e.active = !0);
              const a = e.styles.transform.replace("translate3d(", "").split(",");
              let t = Number(a[0].replace("px", ""));
              t += Ja();
              const r = `translate3d(${t}px,${a[1]},${a[2]}`;
              return e.styles = {
                ...e.styles,
                transform: r
              }, e
            })), ze(Ee - 1)
          })(a);
          const r = Ne - 1;
          if (!(r < 0))
            if (n({
                event: a ? "carousel_swipe" : "carousel_previous",
                element_placement: t?.toLowerCase()
              }), rt(r, se, !1), Be) {
              let e = r * K * -1;
              e > 0 && (e = 0, I(!0), z(!1), Ce(0)), Ce(r), T(C.map(a => (a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, 0, 0)`
              }, a)))
            } else {
              let e = Te + Z;
              Ce(r), (e > 0 || 0 === e || -1 * e < H) && (e = 0, I(!0), z(!1), Ce(0)), Ie(e)
            }
        }, ot = e => {
          if (Ea || oe || Be) return;
          const a = je(e);
          Ia(a.x)
        }, nt = e => {
          if (Ea || 0 === Aa || oe || Be) return;
          const a = je(e),
            t = a.x > Aa ? 1 : -1;
          let r = Math.abs(Aa - a.x) * t;
          (0 === Ne && 1 === t || Ne === se && -1 === t) && (r *= .35), La(!0), Da(r)
        }, ct = e => {
          if (Ea || oe || Be) return;
          const a = je(e),
            t = a.x > Aa ? 1 : -1,
            r = Math.abs(Aa - a.x);
          Ta(r > Fa ? t > 0 ? "prev" : "next" : ""), lt()
        }, lt = () => {
          za(!0), Ia(0), Da(0), La(!1)
        }, dt = e => {
          Pa && (ct(e), La(!1))
        }, mt = (e, a, t = "") => e.map((e, r) => {
          let s = r * K,
            i = r;
          !1 === Be && (i = Math.ceil(.5 * r) + 1, r > 0 && (s = 2 === i ? U : U + K * (i - 2)));
          const o = M[r];
          return o?.current && (o.current.scrollTop = 0), {
            ...e,
            mobileMode: Be,
            itemNumber: r,
            columnNumber: i,
            inModalMode: !1,
            upNext: !0,
            active: !1,
            openModalMode: bt,
            element: o,
            transitionStyle: a,
            styles: {
              left: s,
              transform: "" === t ? null : t,
              height: null,
              top: null
            },
            trapFocus: pt
          }
        }), _t = e => {
          if (Be) return;
          T(mt(_, "cardClose"));
          const a = Math.ceil((C[e].columnNumber + 1) / X) - 1;
          Ce(a);
          let t = a * Z * -1;
          Ge < be ? (t = 0, I(!0), z(!0), Ce(0)) : t < Me ? (t = Me, I(!1), z(!0), Ce(se)) : rt(a, se, !1), Ie(t), ze(0)
        }, ut = () => {
          const e = C[Ee]?.tina?.payload?.meta?.title ?? `card-${Ee}`;
          n({
            event: "modal_close",
            element_placement: t?.toLowerCase(),
            card_name: e,
            card_id: Ee,
            position: Ee,
            view_name: `${C[Ee].source_content_id}/${e}`,
            source_content_id: C[Ee].source_content_id,
            source_content_name: C[Ee].source_content_name
          });
          const a = C[Ee]?.element?.current;
          if (Be) {
            let e = Ee * K * -1;
            e < Me && (e = Me, z(!0), I(!1), Ce(se)), Ce(Ee), rt(Ee, se, !1), T(mt(_, "cardClose", `translate3d(${e}px, 0, 0)`))
          } else _t(Ee);
          N.current.style.transform = "translate(0px, 0px)", N.current.style.transition = "all var(--eventDeck-transitionCardClose)", da(!1), ea(!1), ne(!1), Xe(!1), Ke(!1), ta(!1), setTimeout(() => {
            Ze(!0), a.focus()
          }, ra)
        };
        (0, s.useEffect)(() => {
          !1 !== Je && (Ze(!1), da(!1), j.style.zIndex = null, T(C.map(e => (e.transitionStyle = "", e))))
        }, [Je]);
        const bt = e => {
            setTimeout(() => {
              Sa(e), xa(!0)
            }, 1)
          },
          pt = e => {
            Ka(!0), Xa(e), setTimeout(() => {
              Ka(!1)
            }, 1e3)
          };
        (0, s.useEffect)(() => {
          qa && (Ua(!1), C[Ee]?.element?.current?.focus())
        }, [qa]), (0, s.useEffect)(() => {
          if (!ja) return;
          if (xa(!1), fa) return;
          ze(Number(Na?.target?.dataset?.itemPosition)), Xe(!0), ga(!0), ua && ba(!1);
          const e = C[Na?.target?.dataset?.itemPosition].source_content_id,
            a = C[Na?.target?.dataset?.itemPosition].source_content_name,
            r = C[Na?.target?.dataset?.itemPosition]?.tina?.payload?.meta?.title;
          n({
            event: "card_click",
            element_placement: t?.toLowerCase(),
            card_name: r ?? `card-${Ee}`,
            card_id: Na?.target?.dataset?.itemPosition,
            position: Na?.target?.dataset?.itemPosition,
            view_name: `${e}/${r}`,
            source_content_id: e,
            source_content_name: a
          })
        }, [ja]), (0, s.useEffect)(() => {
          if (!Ye || oe) return;
          Xe(!1);
          const e = (() => {
            const e = j?.getBoundingClientRect().top;
            return ca(-1 * (e - g)), -1 * (e - 140)
          })();
          Be && T(C.map(e => {
            const a = e.itemNumber > Ee + 3 || e.itemNumber < Ee - 3;
            return e.styles = {
              ...e.styles,
              display: a ? "none" : null,
              transition: a ? "none" : null
            }, e
          })), j.style.zIndex = "var(--eventDeck-zIndexOverlay)", da(!0), N.current && (N.current.style.transition = "all var(--eventDeck-transitionCardOpen)", N.current.style.transform = `translate(${-1*ke}px, ${e}px)`), ea(!0), setTimeout(() => {
            Ke(!0)
          }, 1)
        }, [Ye]);
        const gt = () => {
          T(C.map((e, a) => {
            e.active = a === Ee, e.inModalMode = !0, e.transitionStyle = "cardOpen", Be && (e.upNext = Qa(e.itemNumber));
            const t = !Be;
            let r = 0;
            if (Be) {
              const e = Pe + 5 * g;
              r = window.innerHeight - e
            }
            return e.itemNumber < Ee ? e.styles = {
              ...e.styles,
              height: Be ? `${r}px` : null,
              transform: `translate3d(${tt(e,-1,t)}px, ${na}px, 0) scale(${Za()})`
            } : e.itemNumber > Ee ? e.styles = {
              ...e.styles,
              height: Be ? `${r}px` : null,
              transform: `translate3d(${tt(e,1,t)}px, ${na}px, 0) scale(1)`
            } : e.itemNumber === Ee && (e.styles = Be ? {
              ...e.styles,
              height: `${r}px`,
              transform: `translate3d(${-1*e.styles.left}px, ${na}px, 0) scale(1)`
            } : {
              left: 0,
              top: 0,
              transform: `translate3d(${et()}px, ${na}px, 0) scale(1)`
            }), e
          }))
        };
        (0, s.useEffect)(() => {
          !1 !== We && !0 !== oe && (ne(!0), Ke(!1), rt(Ee, C.length, !0), N.current && (N.current.style.transition = "all var(--eventDeck-transitionCardOpen)", N.current.style.transform = `translate(${-1*ke}px, ${na}px)`), gt(), Be ? (Ie(0), ga(!1), _a(!0)) : ta(!0))
        }, [We]), (0, s.useEffect)(() => {
          ma && (_a(!1), T(C.map(e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e))))
        }, [ma]);
        const ft = (e = !1) => {
          T(C.map(a => {
            if (a.upNext = Qa(a.itemNumber), a.itemNumber !== Ee) {
              let e = tt(a, 1);
              a.itemNumber < Ee && (e = tt(a, -1)), a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, ${at(a)}px, 0) scale(${Za()})`
              }
            } else a.itemNumber === Ee && !Be && e && (a.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${et()}px, ${na}px, 0) scale(1)`
            });
            return a
          }))
        };
        (0, s.useEffect)(() => {
          !1 !== aa && !0 !== Be && (ta(!1), setTimeout(() => {
            ft(), ga(!1)
          }, 1))
        }, [aa]), (0, s.useEffect)(() => {
          T(mt(_, ""))
        }, [U, K, _]), (0, s.useEffect)(() => {
          const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
          Oa(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
        }, []), (0, s.useEffect)(() => {
          const e = ce !== oe,
            t = window.document.body.style.overflowY;
          return oe ? (e && (window.document.body.style.overflowY = "hidden", a(!0)), Ga && Ha(!0)) : Pa || oe || (e && (window.document.body.style.overflowY = t, a(!1)), Ga && Ba && Ha(!1)), () => {
            window.document.body.style.overflowY = t
          }
        }, [oe, Pa]), (0, s.useEffect)(() => {
          if (!fa) return;
          clearTimeout(va);
          const e = setTimeout(() => {
            ka(!1)
          }, wa);
          ha(e)
        }, [fa]), (0, s.useEffect)(() => {
          h && setTimeout(() => {
            w(!1)
          }, 3e3)
        }, [h]), (0, s.useEffect)(() => {
          w(!0), Ie(0), Ce(0);
          let e = Math.ceil(Math.ceil(Ge / K) / X);
          Be && (e = C.length - 1), e < 0 && (e = 1), rt(0, e, !1), oe && ut()
        }, [Be]), (0, s.useEffect)(() => {
          N.current && !oe && (N.current.style.transform = "")
        }, [N, Be, oe]), (0, s.useEffect)(() => {
          const e = (m ?? []).map(e => {
            let a = null;
            return "FeaturedEventInfo" === e?.tina?.payload?.content[0]?._template && e?.tina?.variables?.keys?.meta && (a = e?.tina?.variables?.keys?.meta?.title), {
              ...e,
              title: a,
              source_content_id: e?.tina?.payload?.meta?.foreignId,
              source_content_name: e?.tina?.payload?.meta?.foreignTitle,
              view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
            }
          });
          e.length > 10 && (e.length = 10), u(e)
        }, [m]), (0, s.useEffect)(() => {
          D(_.map(() => (0, s.createRef)()))
        }, [_]), (0, s.useEffect)(() => {
          const e = e => {
            const {
              key: a
            } = e;
            "ArrowLeft" === a ? it(0, !1) : "ArrowRight" === a ? st(0, !1) : "Escape" === a && oe && ut()
          };
          return document.addEventListener("keydown", e), () => {
            document.removeEventListener("keydown", e)
          }
        }, [fa, pa, oe, N]), (0, s.useEffect)(() => {
          if (N.current) {
            let e = N?.current?.clientHeight;
            e += ye(N?.current, "margin-top"), e += ye(N?.current, "margin-bottom"), Le(e)
          }
        }, [N, S]), (0, s.useEffect)(() => {
          oe && (() => {
            const e = j?.getBoundingClientRect().top,
              a = -1 * (e - g);
            if (T(C.map(e => {
                if (e.styles.transform) {
                  const t = e.styles.transform.split(","),
                    r = `${t[0]}, ${a}px,${t[2]}`;
                  e.styles = {
                    ...e.styles,
                    transform: r
                  }
                }
                return e
              })), N.current) {
              const a = -1 * (e - g);
              N.current.style.transform = `translate(${-1*ke}px, ${a}px)`
            }
          })()
        }, [Be, oe, na]), (0, s.useEffect)(() => {
          oe || (Ge < me * le && 0 === Ne ? (Ie(0), z(!0), I(!0)) : Te < Me ? (z(!0), I(!1), Ce(se), Ie(Me)) : Te < 0 && (z(!1), Ce(se - 1)), Ge > me * le && E && z(!1))
        }, [Me]), (0, s.useEffect)(() => {
          if (y.current) {
            x(y.current);
            const e = ye(document.documentElement, "--root-font-size"),
              a = ye(y.current, "--eventDeck-modalGutters") * e,
              t = ye(y.current, "--eventDeck-collapsedMaxWidth");
            fe(t);
            let r = le - 2 * a;
            r > t && (r = t), pe(r), _e(r / le);
            const s = 2 * a + r;
            let i = 0;
            s < le && (i = .5 * (le - s)), xe(i);
            let o = ye(y.current, "--eventDeck-modalBottomGutter");
            o *= e;
            const n = window.innerHeight - (Pe + o);
            ae(.5 * r < n ? r / 4 : .5 * n);
            const c = ye(y.current, "--eventDeck-mobileBreakpoint");
            Ue(c);
            let l = ye(y.current, "--eventDeck-itemSize");
            l *= e, B(l);
            let d = ye(y.current, "--eventDeck-modalGutterGap");
            d *= e, $e(d);
            let m = ye(y.current, "--eventDeck-insideMargin");
            m *= e;
            const u = !1 === Be ? 2 * l + m : l + m;
            q(u), W(u + m);
            const g = l + m;
            Y(g);
            let k = Math.ceil(.5 * (_.length - 1)) * g + u;
            Be && (k = _.length * g), Oe(k), 0 !== Ge && De(-1 * Ge + r);
            let v = Math.ceil(Math.ceil(k / g) / X);
            (Be || oe) && (v = C.length - 1), ie(v);
            const h = ye(y.current, "--eventDeck-itemScaleUpAmount");
            oa(h), sa(ye(y.current, "--eventDeck-cardCloseTransitionDuration")), f(ye(y.current, "--eventDeck-itemImageTitleMargins") * e), null !== b && e !== b && (p(e), oe && ft()), null === b && p(e)
          }
        }, [y, _]), (0, s.useEffect)(() => {
          if (oe && !Be) {
            ft();
            const e = j?.getBoundingClientRect().top,
              a = -1 * (e - g);
            a !== na && ca(a)
          }
        }, [k]), (0, s.useEffect)(() => {
          L(!(!A || !E || oe))
        }, [A, E]), (0, s.useEffect)(() => {
          const e = (0, i.debounce)(e => {
            de(e), He(e < qe);
            const a = (1 - me) / 2;
            Ve(e * a);
            const t = Math.floor(be / K);
            J(t);
            let r = t * K;
            r > ge && (r = ge), Q(r), re(e - e * a);
            const s = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
            if (s !== k && v(s), oe && s === k && !h) {
              const e = j?.getBoundingClientRect().top,
                a = -1 * (e - g);
              a !== na && ca(a)
            }
          }, 300);
          return window.addEventListener("resize", () => {
            e(window.innerWidth)
          }), window.addEventListener("scroll", () => {
            oe && Be && e(window.innerWidth)
          }), e(window.innerWidth), () => {
            window.removeEventListener("resize", () => {
              e(window.innerWidth)
            })
          }
        }, [K, me, oe, Be]), (0, s.useEffect)(() => {
          !1 !== oe && !0 !== h && (Be ? gt() : ft(!0))
        }, [te, Z, Fe, G, le, Re, ee, na]), (0, s.useEffect)(() => {
          const e = () => {
            if (y.current && ua) {
              const e = y.current.getBoundingClientRect(),
                a = .2 * window.innerHeight;
              window.innerHeight - e.top >= a && ba(!1)
            }
          };
          return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
        }, [y]);
        const kt = (0, s.useCallback)(() => {
          if (null !== y.current && !c) {
            const {
              top: a
            } = y?.current?.getBoundingClientRect() || 0;
            a <= .6 * window.innerHeight && (n({
              event: "page_section_impression",
              element_placement: e?._memoq?.title?.toLowerCase()
            }), d(!0))
          }
        }, [y]);
        (0, s.useEffect)(() => (window.addEventListener("scroll", kt), () => {
          window.removeEventListener("scroll", kt)
        }), [kt, y]), (0, s.useEffect)(() => {
          "next" === Ca ? (st(0, !0), Ta("")) : "prev" === Ca && (it(0, !0), Ta(""))
        }, [Ca]), (0, s.useEffect)(() => {
          y.current && y.current.addEventListener("mouseleave", () => {
            Pa && lt()
          })
        }, [y, Pa]), (0, s.useEffect)(() => (document.body.addEventListener("mouseleave", dt), () => {
          document.body.removeEventListener("mouseleave", dt)
        }), [Pa]), (0, s.useEffect)(() => {
          Ea && setTimeout(() => {
            za(!1), Ia(0)
          }, wa)
        }, [Ea]), (0, s.useEffect)(() => {
          $a(Be ? 20 : 100)
        }, [Be]), (0, s.useEffect)(() => {
          ya(oe ? 500 : 100)
        }, [oe]);
        const vt = e => {
            e.currentTarget !== e.target || oe || _t(e.target.dataset.itemPosition)
          },
          ht = (0, o.useTinaComponents)(),
          wt = (0, s.useMemo)(() => ({
            ...ht,
            CardWithImageGallery: ve,
            HTMLElement: R.A,
            ImageWithBadge: V.A,
            Carousel: F.A,
            GroupOfItems: $.default,
            UnorderedList: ue.A
          }), [ht]),
          yt = (0, s.useMemo)(() => C.map(e => (0, s.createElement)(Se, {
            ...e,
            refDeck: y,
            key: e?.id ?? e?.sync_hash,
            components: wt,
            prevPage: it,
            nextPage: st,
            onFocus: vt,
            loadCssRawValue: ye,
            selectedItemNumber: Ee,
            carouselTitle: t,
            sharedDraggingDelta: Ra,
            setSharedDraggingDelta: Va
          })), [C, y, wt, it, st, Ee]);
        return !yt?.length || yt.length <= 0 ? null : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleb3206f796ddd61f3b6d1974ea73a4f22",
            "data-modal-mode": Qe,
            "aria-hidden": "true"
          }), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee623ea950c02afbb9d28949ca4701ca4",
            "data-modal-mode": oe,
            "data-faded": ua,
            ref: y,
            onTouchStart: ot,
            onTouchMove: nt,
            onTouchEnd: ct,
            onMouseDown: ot,
            onMouseMove: nt,
            onMouseUp: ct,
            tabIndex: -1,
            role: "presentation",
            children: [(0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb8d0a147dd4f1835ba5495bac02f4c11",
              "aria-hidden": "true"
            }), (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea758545d118b90def20e860fe541c26e",
              "data-modal-mode": oe,
              ref: N,
              "data-animating": la,
              children: [(0, r.jsx)("h2", {
                className: "rockstargames-modules-core-newswire-articlebe12152c36226103d53925a82ba66452",
                children: t
              }), (0, r.jsx)(Ae, {
                prevPage: it,
                prevBtnDisabled: A,
                nextPage: st,
                nextBtnDisabled: E,
                selectedItemNumber: Ee,
                itemsData: _,
                closeModalMode: ut,
                inModalMode: oe,
                controlsHidden: P,
                focusTrapControl: Wa,
                setTriggerFocusCard: Ua,
                focusTrapDirection: Ya
              }), (0, r.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec4f4d692febb9861a621596f22e32d93",
                id: "eventsDeck-content",
                role: "region",
                "aria-live": "polite",
                children: `${Ee+1}/${_.length} ${C[Ee]?.tina?.payload?.meta?.title}`
              })]
            }), (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlef369e1390b3aa251df43bea9c55634f2",
              "data-modal-mode": oe,
              "data-is-dragging": Pa,
              style: {
                transform: `translate3d(${Te+Ma}px, 0, 0)`,
                width: `${Ge}px`
              },
              ref: S,
              children: yt
            })]
          })]
        })
      }, q);
      const Ie = {
          content: "rockstargames-modules-core-newswire-articlec65ddebc8ee2173143d87e1079f2455a",
          customModalContent: "rockstargames-modules-core-newswire-articlefc96cdfdaeb2ad81b1b409fcb233657e",
          pillBtn: "rockstargames-modules-core-newswire-articleddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-modules-core-newswire-articleb4fbb4006fc27b899dac5e522ef574e3"
        },
        {
          variants: Ee
        } = n.Animations;
      t(98906), t(5004), t(30489), t(58585), t(1e4);
      const {
        variants: ze
      } = n.Animations;
      var Pe = t(65977),
        Le = t(41926);
      var Me = t(12540);
      const {
        Gen9CoreCarousel: De,
        framer: Re,
        useTinaModuleFetchByIds: Ve,
        withSimpleErrorBoundary: Fe
      } = Pe, $e = {
        Card: ({
          id: e,
          title: a,
          content: t,
          size: i = "md",
          expandedType: n = "short",
          textOverlayProps: c = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: l = [],
          deckProps: d = {},
          to: m = null,
          tina: _ = {},
          position: u = 0,
          sectionTitle: b = "",
          theme: p,
          pricingOptions: g,
          cardIds: f,
          platformOptions: k = null
        }) => {
          const v = (0, o.useTinaPayload)(),
            h = _?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [w, y] = (0, s.useState)(d?.size ?? i),
            [j, x] = (0, s.useState)(0),
            N = void 0 !== g?.hasPricingOptions || void 0 !== k?.hasPlatformOptions;
          return (0, s.useEffect)(() => {
            y(d?.size ?? i)
          }, [d?.size, i]), (0, r.jsx)(K, {
            id: e,
            title: a,
            size: w,
            expandedType: n,
            images: l,
            deckProps: d,
            prod: h,
            payload: {
              content: t,
              meta: {}
            },
            variants: Ee.plainCard,
            textOverlayProps: c,
            modalProps: {
              className: Ie.customModal,
              contentClassName: Ie.customModalContent
            },
            expandedCardContents: (0, r.jsx)(le, {
              images: l,
              prod: h,
              expandedView: !0
            }),
            position: u,
            sectionTitle: b,
            theme: p,
            cardIds: f,
            pricingOptions: g,
            platformOptions: k,
            pricingContainerHeight: j,
            isProductCard: N,
            children: (0, r.jsx)(ee, {
              expandedType: n,
              to: m,
              sectionTitle: b,
              id: e,
              cardTitle: a,
              position: u,
              children: (0, r.jsx)("div", {
                className: Ie.content,
                "data-product": N,
                children: (0, r.jsx)(z, {
                  title: a,
                  size: w,
                  textOverlayProps: c,
                  pricingOptions: g,
                  platformOptions: k,
                  setPricingContainerHeight: x,
                  children: (0, r.jsx)(le, {
                    images: l,
                    prod: h
                  })
                })
              })
            })
          })
        },
        CardWithImageGallery: ve,
        TextCard: ({
          title: e,
          content: a,
          size: t = "md",
          badgeText: s
        }) => {
          const i = {
            ...(0, o.useTinaComponents)(),
            HTMLElement: R.A,
            UnorderedList: ue.A,
            ListItem: Le.A
          };
          return (0, r.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlecfa8d259e6ae05cd5f97d50306be5ffe",
            "data-size": t,
            children: (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea4a39548fac12526e8721ffa8813e66a",
              children: [s && (0, r.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlecf77e65e2af63ee114825607dde3d11e",
                children: s
              }), (0, r.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlef903ce7e605696e1bc18c4bc22274a6e",
                children: [e && (0, r.jsx)("h3", {
                  children: e
                }), (0, r.jsx)(o.TinaParser, {
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
        ...Pe
      }, Ge = Re.withFadeIn(Fe(({
        cards: e = [],
        size: a,
        name: t,
        title: n,
        description: c,
        disclaimer: l,
        customSlidesPerView: d = null,
        theme: m = "none",
        cardSizeBreakpoints: _ = {},
        customAspectRatio: u = "3/1",
        titleBadge: b = null,
        id: p = ""
      }) => {
        const g = (0, s.useRef)(null),
          f = (0, i.map)(e, "id"),
          k = Ve({
            ids: f
          }),
          [v, h] = (0, s.useState)(d),
          [w] = (0, G.useSearchParams)(),
          [y, j] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          if ("fob" === a) {
            const e = w.get("section");
            if (e && "games" === e && !y && (j(!0), g.current)) {
              const e = 100;
              window.scrollTo(0, g.current.offsetTop - e)
            }
          }
        }, []), (0, s.useEffect)(() => {
          if (!g.current) return;
          const e = () => {
            if (!g.current) return;
            const e = d || window.getComputedStyle(g.current).getPropertyValue("--slides-per-view");
            h(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        });
        const x = (0, s.useMemo)(() => {
          let e = 0;
          if (!k) return null;
          let t = "blank",
            s = !1;
          return k.forEach(e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (s = e.tina.payload.content[0].excludeFromModal))
          }), k.reduce((c, l) => {
            if (l) {
              const {
                id: d,
                tina: _
              } = l, u = (0, i.clone)(_);
              (0, i.set)(u, "payload.meta.id", d);
              const b = f.filter(e => e !== t || e === t && !s);
              c.push((0, r.jsx)(o.TinaParser, {
                components: $e,
                tina: u,
                componentProps: {
                  deckProps: {
                    size: a
                  },
                  tina: u,
                  id: d,
                  position: e,
                  sectionTitle: n,
                  theme: m,
                  cardIds: b
                }
              }, d)), e += 1
            }
            return c
          }, [])
        }, [k, a]);
        return (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlecf8eaaa96e41e0c9b5a5a1745ded9986",
          "data-theme": m,
          ref: g,
          id: p,
          children: [(0, r.jsx)(De, {
            description: c,
            size: a,
            cardSizeBreakpoints: _,
            slideChildren: x,
            title: n,
            name: t,
            customSlidesPerView: v,
            customAspectRatio: u,
            titleBadge: b,
            theme: m
          }), l && (0, r.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled6d0f9d842469dec608825829148dff6",
            children: (0, r.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlee22c0580e1e1d2471b4ca2e60e6b900f",
              children: (0, r.jsx)(Me.A, {
                html: l
              })
            })
          })]
        })
      }))
    },
    21667(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        Jsx0: () => i,
        Jsx1: () => E,
        Jsx2: () => L
      });
      var r = t(39793),
        s = t(45074);
      const i = ({
        article: e,
        children: a
      }) => {
        const t = e.primary_tags[e.primary_tags.length > 1 && 722 === e.primary_tags[0].id ? 1 : 0];
        return (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec853d8a152fed83cf33e0fc661cf8214",
          children: [(0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef7db33be003c658d5566777dc41b3d8d",
            children: [(0, r.jsxs)("h1", {
              children: [e.title, e.subtitle ? (0, r.jsx)("span", {
                children: e.subtitle
              }) : ""]
            }), (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec1fbf3067a1ce8e71e38d92093f62f88",
              children: [e.primary_tags.length ? (0, r.jsx)(s.A, {
                title: t.name,
                href: `/newswire?tag_id=${t.id}`
              }) : "", (0, r.jsx)("time", {
                dateTime: e.created,
                children: e.created_formatted
              })]
            }), e.posts_hero && "iframe" === e.posts_hero.type ? (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebb59ee9d50a65d6978fff34966f65bf8",
              children: (0, r.jsx)("iframe", {
                src: e.posts_hero.hero
              })
            }) : "", (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlefd4ea03865b0f756d342c3eee228e9f8",
              dangerouslySetInnerHTML: {
                __html: e.content
              }
            })]
          }), a]
        })
      };
      var o = t(93082),
        n = t(92910),
        c = t(13331),
        l = t(81207),
        d = t(75138),
        m = t(44453),
        _ = t(38044),
        u = t(1e4),
        b = t(98906),
        p = t(32858),
        g = t(5004),
        f = t(16157),
        k = t(95967),
        v = t(63831),
        h = t(47519),
        w = t(38482),
        y = t(43312),
        j = t(76893),
        x = t(67359),
        N = t(5413),
        S = t(12334),
        C = t(72527),
        T = t(64064),
        A = t.n(T),
        I = t(83721);
      const E = (0, c.withTranslations)(({
        article: e,
        children: a,
        t
      }) => {
        const i = (0, c.useLocale)(),
          T = {
            A: e => (0, r.jsx)(_.A, {
              ...e
            }),
            AnchorLink: e => (0, r.jsx)(I.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, r.jsx)(s.A, {
              ...e
            }),
            AudioPlayer: e => (0, r.jsx)(l.A, {
              ...e
            }),
            Button: e => (0, r.jsx)(u.A, {
              ...e
            }),
            Carousel: e => (0, r.jsx)(d.A, {
              ...e
            }),
            Cta: e => (0, r.jsx)(b.A, {
              ...e
            }),
            Discounts: e => (0, r.jsx)(I.Discounts, {
              ...e
            }),
            Donate: e => (0, r.jsx)(I.Donate, {
              ...e
            }),
            FadeInContent: e => (0, r.jsx)(p.A, {
              ...e
            }),
            FontClip: e => (0, r.jsx)(I.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, r.jsx)(I.GamingRewards, {
              ...e
            }),
            Gif: e => (0, r.jsx)(A(), {
              ...e
            }),
            Grid: e => (0, r.jsx)(g.A, {
              ...e
            }),
            GroupOfItems: e => (0, r.jsx)(C.default, {
              ...e
            }),
            HeroImage: e => (0, r.jsx)(I.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, r.jsx)(f.A, {
              ...e
            }),
            ImageWithBadge: e => (0, r.jsx)(m.A, {
              ...e
            }),
            MultiSourceImage: e => (0, r.jsx)(k.A, {
              ...e
            }),
            NewswireFull: e => (0, r.jsx)(I.NewswireFull, {
              ...e
            }),
            Title: e => (0, r.jsx)(I.NewswireTitle, {
              ...e
            }),
            PctBar: e => (0, r.jsx)(I.PctBar, {
              ...e
            }),
            Podium: e => (0, r.jsx)(I.Podium, {
              ...e
            }),
            ResponsiveGridBox: e => (0, r.jsx)(v.A, {
              ...e
            }),
            ResponsiveGridItem: e => (0, r.jsx)(h.A, {
              ...e
            }),
            ResponsiveFlexBox: e => (0, r.jsx)(w.A, {
              ...e
            }),
            ResponsiveFlexItem: e => (0, r.jsx)(y.A, {
              ...e
            }),
            ResponsiveSection: e => (0, r.jsx)(j.A, {
              ...e
            }),
            ResponsiveImg: e => (0, r.jsx)(x.A, {
              ...e
            }),
            Separator: e => (0, r.jsx)(N.A, {
              ...e
            }),
            Tag: e => (0, r.jsx)(s.A, {
              ...e
            }),
            UnorderedList: e => (0, r.jsx)(S.A, {
              ...e
            })
          },
          E = e.posts_jsx.variables_us_defaulted,
          [z] = (0, o.useState)((0, r.jsx)(n.default, {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, a) => e[a],
              renderHtml: e => (0, r.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, z),
              article: e,
              locale: i,
              t,
              variables: E
            },
            components: T,
            jsx: e.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlece2d8080309005e155e5422fd38faa5d",
          children: [z, a]
        })
      });
      var z = t(17301),
        P = t(38951);
      const L = ({
        children: e,
        payload: a,
        variablesKeys: t
      }) => (0, r.jsxs)("div", {
        className: "rockstargames-modules-core-newswire-articledad06d3570a3cd17332c2bfb19d8f611",
        children: [(0, r.jsx)(z.TinaParser, {
          tina: {
            payload: a,
            variables: {
              keys: t
            }
          },
          components: P.componentsForTinaParser
        }), e]
      })
    },
    83721(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        AnchorLink: () => o,
        Discounts: () => S,
        Donate: () => I,
        Engagement: () => r.default,
        EventInfo: () => H,
        FeaturedEventInfo: () => q,
        FontClip: () => W,
        GamingRewards: () => ee,
        Gen9List: () => se,
        HeroImage: () => ie.A,
        NewswireFull: () => ne,
        NewswireTitle: () => G,
        PctBar: () => ce,
        Podium: () => me
      });
      var r = t(59139),
        s = t(39793),
        i = t(93082);
      const o = ({
        children: e,
        hash: a
      }) => {
        const t = (0, i.useRef)(null),
          r = window.location.hash?.replace("#", "") === a ? a : null;
        return (0, i.useEffect)(() => {
          r && setTimeout(() => {
            const e = document.getElementById(r);
            e && e.scrollIntoView()
          }, 1e3)
        }, []), (0, s.jsx)("div", {
          ref: t,
          id: a,
          children: e
        })
      };
      var n = t(75138),
        c = t(68291),
        l = t(44453);
      const d = {
          discountsCarousel: "rockstargames-modules-core-newswire-articlee323ee7ef1389c61bd0f7f5edf7ae87f",
          discountsCarouselItem: "rockstargames-modules-core-newswire-articledbe871f29ce887fdb3633adfa3a508e3",
          fontUpdate: "rockstargames-modules-core-newswire-articleb9e436db9c819a6291277c1c3b14a102",
          singleImage: "rockstargames-modules-core-newswire-articleef61c1eb2ac13f1f00f9fbcf97b591d9",
          wrapper: "rockstargames-modules-core-newswire-articlecf1f4a81a7b06d2f1741f014efccd835"
        },
        m = ({
          wrapper: e,
          children: a,
          length: t
        }) => t > 1 ? e(a) : a,
        _ = ({
          items: e,
          noInfiniteScroll: a = !1,
          size: t = null,
          perPage: r = null,
          customSlidesPerView: o = null,
          style: _ = {}
        }) => {
          const u = (0, i.useRef)(null),
            [b, p] = (0, i.useState)(null),
            [g, f] = (0, i.useState)(t);
          return (0, i.useEffect)(() => {
            !t && r && f(1 === r ? "lg" : "sm"), t || r || (f("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }, [t, r]), (0, i.useEffect)(() => {
            if (!u.current) return;
            const e = () => {
              const e = o || window.getComputedStyle(u.current).getPropertyValue("--slides-per-view");
              p(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [u, o]), e.length ? (0, s.jsx)(m, {
            length: e.length,
            wrapper: e => (0, s.jsx)("div", {
              "data-size": g,
              ref: u,
              className: d.wrapper,
              children: (0, s.jsx)(n.A, {
                className: d.discountsCarousel,
                noInfiniteScroll: a,
                style: {
                  ..._,
                  "--per-page": b,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: e.map((a, t) => (0, s.jsxs)("div", {
              className: [d.discountsCarouselItem, 1 === e.length ? d.singleImage : ""].join(" "),
              children: [(0, s.jsx)(l.A, {
                ariaLabel: a?.ariaLabel,
                image: a?.image ?? {
                  alt: a?.alt ?? "",
                  desktop: a?.img ?? null,
                  mobile: a?.imgMobile ?? null
                },
                badge: a?.badge ?? a?.image?.badge ?? a.discountTxt,
                splitter: a?.splitter ?? a?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, s.jsx)(c.A, {
                className: d.fontUpdate,
                item: a
              })]
            }, a?.key ?? t))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        };
      var u = t(12334),
        b = t(73951);
      const p = {
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
        g = ({
          to: e,
          children: a
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        f = ({
          items: e,
          noTextFit: a,
          type: t,
          carouselOnMobile: r,
          columns: o = {
            desktop: 3,
            mobile: 2
          }
        }) => {
          const [c, d] = (0, i.useState)(null), [m, _] = (0, i.useState)(3), u = (0, i.useRef)(null);
          return (0, i.useEffect)(() => {
            const a = window.getComputedStyle(u.current).getPropertyValue("--divisible-desktop"),
              t = () => {
                const e = window.innerWidth;
                _(e <= 767 ? 2 : a)
              };
            if (e?.content.length && e?.content.length >= m) {
              let {
                length: a
              } = e.content;
              const t = [];
              if (a % m !== 0) {
                let e = 0;
                do {
                  t.push((0, s.jsx)("div", {
                    className: `${p.gridItem} ${p.extraDiv}`
                  }, "limited-grid-" + e++)), a++
                } while (a % m !== 0)
              }
              d(t)
            }
            return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
          }, [m, u]), (0, s.jsxs)("div", {
            className: `${p.limitedGrid} ${r?p.carouselOnMobile:""}`,
            children: [(0, s.jsxs)("div", {
              ref: u,
              style: {
                "--divisible-desktop": o.desktop,
                "--divisible-mobile": o.mobile
              },
              className: `\n                    ${p.limitedGridContent}\n                    ${2===o.desktop?p.columnsDesktop2:""}\n                    ${3===o.desktop?p.columnsDesktop3:""}\n                    ${o.desktop>=4?p.columnsDesktop4:""}\n                    ${a?p.noTextFit:""}\n                    ${t?p[t]:""}\n                `,
              children: [(0, s.jsx)("div", {
                className: p.thirdLine
              }), e.content.map((e, t) => (0, s.jsx)("div", {
                className: p.gridItem,
                children: (0, s.jsxs)(g, {
                  to: e?.href ?? e?.to,
                  children: [!a && (0, s.jsx)(b.Root, {
                    className: p.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: (0, s.jsx)(b.Text, {
                      children: e.title
                    })
                  }), (0, s.jsx)("div", {
                    className: p.imageArea,
                    children: (0, s.jsx)(l.A, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), a && (0, s.jsx)("p", {
                    children: e.title
                  })]
                })
              }, t)), c]
            }), r && (0, s.jsx)("div", {
              className: p.gridCarousel,
              children: (0, s.jsx)(n.A, {
                children: e.content.map((e, a) => (0, s.jsxs)("div", {
                  children: [(0, s.jsx)("div", {
                    className: `${p.imageArea} ${p.imageAreaBg}`,
                    children: (0, s.jsx)(l.A, {
                      className: t ? p[t] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, s.jsx)("p", {
                    className: p.carouselDesc,
                    children: (0, s.jsx)(g, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, a))
              })
            })]
          })
        },
        k = ({
          items: e = []
        }) => {
          if (!e.length) return null;
          let a = 0,
            t = 0;
          return e.map((e, r) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const a = [];
              return e.limitedList?.content && a.push((0, s.jsx)(_, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? r)), e.limitedGridList?.content && a.push((0, s.jsx)(f, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? r)), t++, (0, s.jsxs)("div", {
                children: [1 === t && (0, s.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlee14aea44e0cd05cab3f737d9241c40cf",
                  children: (0, s.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlecf8636d2845d410d7b3fdb9c5fd9f451"
                  })
                }), a]
              }, r)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const t = [];
              return e.discountsList?.content && t.push((0, s.jsx)(_, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? r)), e.discountsGridList?.content && t.push((0, s.jsx)(f, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? r)), e?.list && t.push((0, s.jsx)(u.A, {
                ...e
              })), a++, (0, s.jsxs)("div", {
                children: [1 === a && (0, s.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleab089b387a91263ebf4e3e5f9457113c"
                }), t]
              }, r)
            }
            return null
          })
        };
      var v = t(72527);
      const h = ({
        items: e,
        columns: a = {},
        noCarousel: t = !1,
        noInfiniteScroll: r = !1,
        ...i
      }) => {
        const o = i?.style ?? {};
        return t && (a?.mobile && (o["--mobile-cols"] = a.mobile), a?.desktop && (o["--desktop-cols"] = a.desktop)), (0, s.jsxs)(s.Fragment, {
          children: [i.title && (0, s.jsx)("p", {
            className: "rockstargames-modules-core-newswire-articlebbdcc06cced1ed19baee825aacefee0b",
            children: i.title
          }), (0, s.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleba7b5228b2134bc8563fe2a8f65ca885",
            children: [t && (0, s.jsx)(v.default, {
              style: {
                ...o,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "rockstargames-modules-core-newswire-articlea225b2127250d1b0285289115c698451",
              renderTemplate: "standard",
              items: e,
              ...i
            }), !t && (0, s.jsx)(_, {
              items: e,
              noInfiniteScroll: r,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var w = t(5004),
        y = t(16157);
      const j = ({
          items: e = [],
          style: a = {}
        }) => e.length ? (0, s.jsx)(w.A, {
          style: {
            "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
            "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
            "--image-rounding-dynamic": "0",
            ...a
          },
          children: e.map((e, a) => e?.title_and_description ? (0, s.jsxs)(w.A, {
            context: "readable-text",
            style: {
              textAlign: "left",
              "--grid-gap-dynamic": "var(--grid-gap-static-xs)",
              background: "transparent"
            },
            children: [e?.title_and_description.title && (0, s.jsx)("h1", {
              className: "large",
              children: e.title_and_description.title
            }), e?.title_and_description.description && (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: e.title_and_description.description
              }
            })]
          }, e?.key ?? a) : e?.limitedList?.content ? (0, s.jsx)(_, {
            items: e.limitedList.content,
            noInfiniteScroll: e?.noInfiniteScroll,
            perPage: e?.perPage,
            size: e?.size
          }, e?.key ?? a) : e?.discountsGridList?.content ? (0, s.jsx)(h, {
            noCarousel: !0,
            columns: e.discountsGridList?.columns,
            items: e.discountsGridList.content
          }, e?.key ?? a) : e?.content ? (0, s.jsx)(y.A, {
            ...e,
            children: e.content
          }, e?.key ?? a) : e?.list ? (0, s.jsx)(u.A, {
            ...e
          }, e?.key ?? a) : void 0)
        }) : null,
        x = {
          area: "rockstargames-modules-core-newswire-articlec0f0f1d12bd9d73702d5518ddfeb248a",
          btmImg: "rockstargames-modules-core-newswire-articlef7d259739c10010bebbf5a4566021799",
          limitedTopImg: "rockstargames-modules-core-newswire-articlefc4ab7fde14e1466eb3397a40c26a8f0",
          topImg: "rockstargames-modules-core-newswire-articlee034ccf8bbda4129691cf7da53b87170"
        },
        N = ({
          items: e,
          renderTemplate: a,
          ...t
        }) => {
          switch (a) {
            case "gtav":
            case "gtao":
              return (0, s.jsx)(j, {
                items: e,
                ...t
              });
            case "grid":
              return (0, s.jsx)(h, {
                items: e,
                ...t
              });
            default:
              return (0, s.jsx)(k, {
                items: e
              })
          }
        },
        S = ({
          items: e,
          renderTemplate: a,
          style: t,
          ...r
        }) => (0, s.jsx)("div", {
          className: x.area,
          "data-context": "discounts",
          children: (0, s.jsxs)("div", {
            className: x.discountsContent,
            children: [(0, s.jsx)(N, {
              renderTemplate: a,
              items: e,
              props: r,
              style: t
            }), (0, s.jsx)("div", {
              className: x.btmImg
            })]
          })
        });
      var C = t(91681),
        T = t.n(C);
      const A = {
          donate: "rockstargames-modules-core-newswire-articleca3a67499205086cce3ec4006dde027a",
          largePaddingSides: "rockstargames-modules-core-newswire-articlee9aa6553439a489ffff3140708eb84c9"
        },
        I = ({
          text: e
        }) => {
          const {
            sanitize: a
          } = T();
          return (0, s.jsx)("div", {
            className: [A.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: a(e)
              }
            })
          })
        };
      var E = t(40283),
        z = t(17301),
        P = t(81270),
        L = t(64064),
        M = t.n(L),
        D = t(31879),
        R = t.n(D),
        V = t(38044),
        F = t(13331);
      const $ = {
          breadcrumbs: "rockstargames-modules-core-newswire-articlea300b88d467c420e15084fc2eeeb1e09",
          main: "rockstargames-modules-core-newswire-articleaf5256fb296a82d00fb900a2380a5d7f",
          title: "rockstargames-modules-core-newswire-articlea82cdf4d56d4fbadd86d56caf6b7da04"
        },
        G = (0, F.withTranslations)(({
          children: e,
          intro: a,
          image: t = {},
          style: r = {},
          t: i,
          className: o = "",
          variant: n = null
        }) => {
          let l = {};
          l = {
            "--breadcrumb-separator-filter-invert": r?.toggleInvertSeparator && "#000"
          };
          const d = (0, F.useNewswirePost)(),
            m = {},
            _ = m?.meta?.title ?? d?.title,
            u = m?.meta?.subtitle ?? d?.subtitle,
            b = u ? (0, s.jsx)("h3", {
              "data-context": "newswire-subtitle",
              children: u
            }) : "",
            p = [{
              text: i("Newswire"),
              to: "/newswire"
            }],
            {
              src: g
            } = (0, z.useImageParser)(t),
            f = (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("time", {
                dateTime: d.created,
                children: d.created_formatted
              }), a ? (0, s.jsx)(c.A, {
                item: a
              }) : "", e]
            });
          d?.primary_tags?.length && p.push({
            text: d.primary_tags[0].name,
            to: `/newswire?tag_id=${d.primary_tags[0].id}`
          }), d?.secondary_tags?.length && p.push({
            text: d.secondary_tags[0].name,
            to: `/newswire?tag_id=${d.secondary_tags[0].id}`
          });
          const k = (0, s.jsx)("div", {
            className: $.breadcrumbs,
            "data-cms-breadcrumbs": !0,
            children: p.map(e => (0, s.jsx)(V.A, {
              to: e.to,
              children: e.text
            }, e.to))
          });
          return g?.desktop && (r.background = `url(${g.desktop}) center/cover no-repeat`), (0, s.jsx)("div", {
            className: [o, $.title].join(" "),
            style: {
              ...r,
              ...l
            },
            children: "separated" === n ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("header", {
                "data-context": "title",
                children: [k, (0, s.jsx)("h1", {
                  children: _
                })]
              }), (0, s.jsxs)("footer", {
                "data-context": "title",
                children: [b, f]
              })]
            }) : (0, s.jsxs)(s.Fragment, {
              children: [k, (0, s.jsxs)("div", {
                className: $.main,
                children: [(0, s.jsx)("h1", {
                  "data-context": "newswire-title",
                  children: _
                }), b]
              }), f]
            })
          })
        }),
        O = {
          event: "rockstargames-modules-core-newswire-articled2fab08f92d966e9f62ad805f1e15542",
          eventInfo: "rockstargames-modules-core-newswire-articlee4a137d11e066c1ea5b0c733d364311f",
          featured: "rockstargames-modules-core-newswire-articlebb5a0823d43098a1cc049f2296fcf49e",
          large: "rockstargames-modules-core-newswire-articlee94ea7e671124487acc1e1a38fe28560",
          pillBtn: "rockstargames-modules-core-newswire-articlef5d4e8bec1c576430dea6b22ec107759",
          selected: "rockstargames-modules-core-newswire-articledb6bc6b6bcb510524004bd740d0e8ba9",
          videoWrapper: "rockstargames-modules-core-newswire-articledad6ecb3c2a7a4f228052b0e1bd38ed5"
        },
        B = ({
          images: e
        }) => {
          if (!e?.length) return null;
          if (1 === e.length) {
            const {
              key: a,
              ...t
            } = e[0];
            return (0, s.jsx)(l.A, {
              ...t
            })
          }
          return (0, s.jsx)(n.A, {
            items: e
          })
        },
        H = ({
          images: e,
          title: a = "",
          content: t,
          isFeatured: r = !1,
          className: o = null,
          videoInHeroProps: n,
          hideNewswireTitle: c = !1
        }) => {
          const d = (0, z.useTinaPayload)(),
            m = d?.meta?.prod ?? !1,
            _ = (0, z.useTinaComponents)();
          (0, E.set)(d, "meta.prod", m);
          let u = n?.gifVideoProps?.hasVideoInHero || !1;
          const b = n?.htmlVideoProps?.id || !1,
            p = !!n?.htmlVideoProps?.hasHtmlVideoInHero && b;
          p && u && (u = !1);
          const g = void 0 === n || !u && !p,
            f = (0, i.useMemo)(() => ({
              ..._,
              HTMLElement: y.A,
              ImageWithBadge: l.A,
              GroupOfItems: v.default
            }), [_]);
          return (0, s.jsxs)("div", {
            className: (0, P.default)(O.event, o),
            children: [u && (0, s.jsx)("div", {
              className: O.videoWrapper,
              children: (0, s.jsx)(M(), {
                hash: {
                  desktop: n?.gifVideoProps?.hash?.desktop,
                  mobile: n?.gifVideoProps?.hash?.mobile
                },
                loop: n?.gifVideoProps?.isLooping
              })
            }), p && b && (0, s.jsx)("div", {
              className: O.videoWrapper,
              children: (0, s.jsx)(R(), {
                autoplay: n?.htmlVideoProps?.autoPlay || !1,
                id: b
              })
            }), g && (0, s.jsx)(B, {
              images: e
            }), r && (0, s.jsx)(G, {}), (0, s.jsxs)("div", {
              className: O.eventInfo,
              children: [!r && !c && (0, s.jsx)("h3", {
                className: O.eventTitle,
                children: a
              }), (0, s.jsx)(z.TinaParser, {
                components: f,
                tina: {
                  payload: {
                    content: t,
                    meta: {
                      prod: m
                    }
                  }
                }
              })]
            })]
          })
        },
        q = e => (0, s.jsx)(H, {
          ...e,
          className: O.featured,
          isFeatured: !0
        }),
        U = {
          clip: "rockstargames-modules-core-newswire-articleaf597db4ae39661b43752ca8aef0ea95",
          greyTexture: "rockstargames-modules-core-newswire-articlefb39d1c9eee482e2db4e0b343e1cb979",
          redTexture: "rockstargames-modules-core-newswire-articlea1e6c3732fbb497aa657efa3ba5f7aca"
        },
        W = ({
          fontFamily: e = "inherit",
          fontBg: a,
          string: t
        }) => (0, s.jsx)("span", {
          style: {
            "--font-family-clip": e
          },
          className: [U.clip, U[a]].join(" "),
          children: t
        });
      var K = t(95967),
        Y = t(63831),
        X = t(47519),
        J = t(82199),
        Z = t(42285);
      const Q = {
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
        ee = ({
          headline: e,
          plainImage: a,
          top: r,
          unorderedList: o,
          bottom: n,
          rewards: c = "primeGaming",
          style: l = {}
        }) => {
          const d = (0, F.useLocale)(),
            {
              track: m
            } = (0, J.useGtmTrack)(),
            {
              ref: _,
              inView: b
            } = (0, Z.useInView)({
              threshold: .6
            }),
            [p, g] = (0, i.useState)(!1);
          return (0, i.useEffect)(() => {
            b && !p && (m({
              element_placement: "newswire-article-gaming-rewards",
              event: "page_section_impression"
            }), g(!0))
          }, [b]), "primeGaming" === c && ["ru", "kr", "ko_kr", "ru_ru"].includes(d) ? null : (0, s.jsx)("div", {
            className: Q.gamingWrapper,
            ref: _,
            children: (0, s.jsx)("div", {
              className: `${Q.gamingRewards} ${Q[c]}`,
              style: l,
              children: (0, s.jsxs)(Y.A, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, s.jsxs)(X.A, {
                  children: [e && (0, s.jsx)("h3", {
                    children: e
                  }), "psPlus" === c && (0, s.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: Q.primeGamingSocialLogo,
                    src: t(1983)
                  }), "primeGaming" === c && (0, s.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: Q.primeGamingSocialLogo,
                    src: t(29654)
                  }), "gtaPlus" === c && (0, s.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: Q.primeGamingSocialLogo,
                    src: t(68547)
                  }), r?.text && (0, s.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: r.text
                    },
                    onClick: e => {
                      e.target.closest("a") && m({
                        element_placement: "newswire-article-gaming-rewards",
                        event: "cta_other",
                        text: c
                      })
                    }
                  }), o?.list && (0, s.jsx)("div", {
                    className: Q.listArea,
                    children: (0, s.jsx)(u.A, {
                      className: "gtaPlus" === c ? Q.plus : "",
                      ...o,
                      list: o.list,
                      ...o?.attributes
                    })
                  }), n?.text && (0, s.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: n.text
                    },
                    onClick: e => {
                      e.target.closest("a") && m({
                        element_placement: "newswire-article-gaming-rewards",
                        event: "cta_other",
                        text: c
                      })
                    }
                  })]
                }), (0, s.jsx)(X.A, {
                  className: Q.rightSide,
                  children: a?.image ? (0, s.jsx)(K.A, {
                    image: a.image
                  }) : (0, s.jsx)("div", {
                    className: Q.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var ae = t(30544),
        te = t(60982),
        re = t(70265);
      const se = ({
        backgroundImages: e,
        deckHash: a = "",
        perPage: t = null
      }) => {
        const [r, o] = (0, i.useState)(null), n = (0, z.useGetCdnSource)(e?.backgroundImg?.full_src ?? null), c = (0, z.useGetCdnSource)(e?.layeredImg?.full_src ?? null), l = (0, i.useRef)(null), {
          data: d,
          error: m
        } = (0, F.useQuery)(re.TinaModulesInfo, {
          variables: {
            ids: a
          },
          skip: !a
        });
        return (0, i.useEffect)(() => {
          if (d?.tinaModulesInfo) {
            const e = d.tinaModulesInfo[0],
              {
                id: a,
                tina: t
              } = e,
              r = (0, E.clone)(t);
            (0, E.set)(r, "payload.meta.id", a), o(r)
          }
        }, [d]), d && r ? m ? (0, s.jsx)(te.A, {
          error: m
        }) : (0, s.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea2287392a6363add6fc77a246fc467ce",
          ref: l,
          style: {
            "--background-image": `url(${n})`,
            "--layered-image": `url(${c})`,
            "--slides-per-view-desktop": t
          },
          children: (0, s.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleef8574282ec987f2460a951505ca5ef7",
            children: [c ? (0, s.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleaa9b5909de87ec85fc53e12a7f9ca2d5"
            }) : "", (0, s.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee3ff669c62cc2088728385fb58ef2969",
              children: (0, s.jsx)(z.TinaParser, {
                components: {
                  Deck: ae.E$
                },
                tina: r
              })
            })]
          })
        }) : null
      };
      var ie = t(26581),
        oe = t(87486);
      const ne = ({
          children: e,
          className: a = "",
          style: t,
          game: r
        }) => ((0, i.useEffect)(() => {
          document.fonts.ready.then(() => {
            oe.balanceText()
          })
        }, [e]), (0, s.jsx)("div", {
          className: ["newswireFull", r, a].join(" "),
          style: t,
          "data-game": r,
          children: e
        })),
        ce = ({
          pct: e,
          bgColor: a,
          primaryColor: t
        }) => (0, s.jsx)("div", {
          style: {
            position: "relative",
            width: "100%",
            height: "20px",
            backgroundColor: a
          },
          children: (0, s.jsx)("div", {
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
        });
      var le = t(67359),
        de = t(76893);
      const me = ({
        title: e,
        desc: a,
        img: t,
        imgMobile: r,
        bgColor: i,
        descPositionBottom: o,
        fontColor: n = "#fff"
      }) => (0, s.jsxs)(s.Fragment, {
        children: [o ?? (0, s.jsx)(de.A, {
          style: {
            backgroundColor: `${i}`,
            "--padding-top-bottom": "1.75rem"
          },
          className: "normalPaddingTopBottom largePaddingSides",
          children: (0, s.jsxs)(de.A, {
            className: "maxDescArea",
            style: {
              "--desc-h3-margin-bottom": "var(--h-rem-size)"
            },
            children: [(0, s.jsx)("h3", {
              style: {
                "--color-span": `${n}`
              },
              children: e
            }), (0, s.jsx)("p", {
              children: a
            })]
          })
        }), (0, s.jsxs)(de.A, {
          className: [o ?? "spacing"].join(" "),
          children: [(0, s.jsx)(le.A, {
            className: "hiddenMobile",
            src: t
          }), (0, s.jsx)(le.A, {
            className: "hiddenLarge",
            src: r
          })]
        }), o ? (0, s.jsx)(de.A, {
          style: {
            backgroundColor: `${i}`,
            "--padding-top-bottom": "1.75rem"
          },
          className: "normalPaddingTopBottom largePaddingSides spacing",
          children: (0, s.jsxs)(de.A, {
            className: "maxDescArea",
            style: {
              "--desc-h3-margin-bottom": "var(--h-rem-size)"
            },
            children: [(0, s.jsx)("h3", {
              style: {
                "--color-span": `${n}`
              },
              children: e
            }), (0, s.jsx)("p", {
              children: a
            })]
          })
        }) : null]
      })
    },
    38951(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        NewswireArticle: () => x,
        componentsForTinaParser: () => sa
      });
      var r = {};
      t.r(r), t.d(r, {
        applestore: () => H,
        googleplay: () => q,
        left: () => U,
        pc: () => W,
        pcalt: () => K,
        ps: () => Y,
        ps3: () => X,
        ps4: () => J,
        ps5: () => Z,
        right: () => Q,
        switch: () => ee,
        x: () => ae,
        xbox: () => te,
        xboxone: () => re,
        xboxseriesxs: () => se
      });
      var s = {};
      t.r(s), t.d(s, {
        Actions: () => ve,
        Badge: () => ke,
        Button: () => je,
        Container: () => ue,
        Content: () => ge,
        Description: () => we,
        Disclaimer: () => ye,
        Footer: () => pe,
        Header: () => be,
        Heading: () => he,
        Image: () => fe,
        LinkPSButton: () => Se,
        LinkXBoxButton: () => Ne,
        Loading: () => Ce,
        PlatformButton: () => xe,
        Root: () => _e,
        RootContext: () => me
      });
      var i = t(65977),
        o = t(64064),
        n = t.n(o),
        c = t(72527),
        l = t(35643),
        d = t(31879),
        m = t.n(d),
        _ = t(30544),
        u = t(83721),
        b = t(39793),
        p = t(93082),
        g = t(10639),
        f = t(25847);
      const k = (0, p.createContext)({
          themeOptions: {
            themeName: void 0,
            themeLevel: void 0,
            cssVars: {}
          }
        }),
        v = ({
          children: e,
          meta: a
        }) => {
          const t = (0, f.p0)({
              themeName: a?.themeName,
              themeLevel: a?.themeLevel
            }),
            r = (0, f.nR)({
              themeName: a?.themeName,
              themeLevel: a?.themeLevel
            }),
            s = {
              themeName: t?.themeName,
              themeLevel: t?.themeLevel,
              cssVars: r
            };
          return (0, b.jsx)(k.Provider, {
            value: {
              themeOptions: s
            },
            children: (0, b.jsx)("div", {
              "data-theme": s?.themeName,
              "data-level": s?.themeLevel,
              style: s?.cssVars,
              children: e
            })
          })
        };
      var h = t(13331),
        w = t(21667),
        y = t(4588);
      const j = ({
          article: e,
          relatedBlock: a
        }) => {
          switch (e.jsx) {
            case 0:
              return (0, b.jsx)(w.Jsx0, {
                article: e,
                children: a
              });
            case 1:
              return (0, b.jsx)(w.Jsx1, {
                article: e,
                children: a
              });
            default:
              return (0, b.jsx)(w.Jsx2, {
                payload: e.tina.payload,
                variablesKeys: e.tina.variables.keys,
                children: a
              })
          }
        },
        x = ({
          idHash: e
        }) => {
          const {
            data: a,
            loading: t
          } = (0, h.useQuery)(y.NewswirePost, {
            variables: {
              id_hash: e
            },
            setTitleDataPath: "post.title",
            autoSetLoading: !0
          }), r = a?.post ?? null, s = a?.related?.results ?? null;
          if ((0, p.useEffect)(() => {
              r && (window?.instgrm?.Embeds?.process?.(), window?.twttr?.widgets?.load?.())
            }, [r]), !r || t) return null;
          const i = r?.tina?.payload?.meta,
            o = s && r.show_related ? (0, b.jsx)(g.A, {
              posts: s
            }) : "";
          return (0, b.jsx)(h.newswirePost.Provider, {
            article: r,
            children: (0, b.jsx)(v, {
              meta: i,
              children: (0, b.jsx)(j, {
                article: r,
                relatedBlock: o
              })
            })
          })
        };
      var N = t(10475),
        S = t(36416),
        C = t(17301),
        T = t(31655),
        A = t(42909);
      const I = JSON.parse('{"de-DE":{"bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","decorative_video_replay_button_label":"Wiederholen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Video wird wiedergegeben","hp_hero_stop_button_label":"Video angehalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","job_card_bookmark_action":"Markieren","job_card_created_by":"Erstellt von","job_card_image_alt_text":"Screenshot vom Job {name}","job_card_report_action":"Melden","job_card_share_action":"Teilen","job_card_updated_date":"Aktualisiert: {date}","job_card_verified_by":"Verifiziert von","job_dialog_bookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen markierten Job sehen zu können – Jobs können nur im Spiel bewertet werden, nachdem sie gespielt wurden.","job_dialog_bookmarked_heading":"Job markiert: <b>{name}</b>","job_dialog_bookmarked_title":"Job markiert","job_dialog_confirmation_button":"OKAY","job_dialog_error_body":"Es gab einen Fehler bei dem Versuch, einen Job zu markieren/eine Markierung zu entfernen. Bitte versuche es erneut.","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Fehler","job_dialog_unbookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen Job nicht länger in deinen Markierungen sehen zu können.","job_dialog_unbookmarked_heading":"Job nicht mehr markiert: <b>{name}</b>","job_dialog_unbookmarked_title":"Job nicht mehr markiert","job_type_adversary_mode":"Gegner-Modus","job_type_air_race":"Luftrennen","job_type_arena_deathmatch":"Arena-Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Radrennen","job_type_capture":"Capture","job_type_contact_mission":"Kontaktmission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Dragsterrennen","job_type_drift_race":"Driftrennen","job_type_foot_race":"Rennen zu Fuß","job_type_hao_special_works_race":"HSW-Rennen","job_type_heist":"Raubüberfall","job_type_heist_prep":"Raubüberfall-Austrüstungsmission","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Landrennen","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission-Creator","job_type_open_wheel_race":"Open-Wheel-Rennen","job_type_parachuting":"Fallschirmsprung","job_type_pursuit_race":"Verfolgungsrennen","job_type_race":"Rennen","job_type_random_mission":"Zufällige Mission","job_type_special_race":"Spezialrennen","job_type_street_race":"Straßenrennen","job_type_stunt_race":"Stuntrennen","job_type_survival":"Überlebenskampf","job_type_target":"Zielscheibenrennen","job_type_team_deathmatch":"Team-Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Verwandlungsrennen","job_type_unknown":"Unbekannt","job_type_vehicle_deathmatch":"Fahrzeug-Deathmatch","job_type_water_race":"Seerennen","lightbox_close_button":"Schließen","login_dialog_body":"Du musst dich erst anmelden, um diese Inhalte zu sehen.","login_dialog_signin_button":"Anmelden","login_dialog_signup_button":"Registrieren","login_dialog_title":"Anmelden erforderlich","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details_amp":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details_amp":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","web_offer_claim_dialog_close":"schließen","web_offer_claim_error_state_button":"Erneut versuchen","web_offer_claim_error_state_icon_label":"Fehler-Symbol","web_offer_claim_exists_state_icon_label":"Erfolgssymbol","web_offer_claim_link_account_state_icon_label":"Fehler-Symbol","web_offer_claim_loading_state":"lädt","web_offer_claim_success_state_icon_label":"Erfolgssymbol"},"en-US":{"bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Video Playing","hp_hero_stop_button_label":"Video Stopped","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","job_card_bookmark_action":"Bookmark","job_card_created_by":"Created by","job_card_image_alt_text":"Screenshot of {name} job","job_card_report_action":"Report","job_card_share_action":"Share","job_card_updated_date":"Updated {date}","job_card_verified_by":"Verified by","job_dialog_bookmarked_body":"You will need to restart Grand Theft Auto Online to see this bookmarked job - jobs can only be rated in-game, after they have been played.","job_dialog_bookmarked_heading":"Job Bookmarked: <b>{name}</b>","job_dialog_bookmarked_title":"Job Bookmarked","job_dialog_confirmation_button":"OK","job_dialog_error_body":"There was an error when attempting to bookmark/unbookmark the job. Please try again","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"You will need to restart Grand Theft Auto Online to no longer see this job in your bookmarks.","job_dialog_unbookmarked_heading":"Job Unbookmarked: <b>{name}</b>","job_dialog_unbookmarked_title":"Job Unbookmarked","job_type_adversary_mode":"Adversary Mode","job_type_air_race":"Air Race","job_type_arena_deathmatch":"Arena Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Bike Race","job_type_capture":"Capture","job_type_contact_mission":"Contact Mission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Drag Race","job_type_drift_race":"Drift Race","job_type_foot_race":"Foot Race","job_type_hao_special_works_race":"Hao\'s Special Works Race","job_type_heist":"Heist","job_type_heist_prep":"Heist Prep","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Land Race","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission Creator","job_type_open_wheel_race":"Open Wheel Race","job_type_parachuting":"Parachuting","job_type_pursuit_race":"Pursuit Race","job_type_race":"Race","job_type_random_mission":"Random Mission","job_type_special_race":"Special Vehicle Race","job_type_street_race":"Street Race","job_type_stunt_race":"Stunt Race","job_type_survival":"Survival","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Team Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Transform Race","job_type_unknown":"Unknown","job_type_vehicle_deathmatch":"Vehicle Deathmatch","job_type_water_race":"Sea Race","lightbox_close_button":"Close","login_dialog_body":"You need to sign in first to interact with this content","login_dialog_signin_button":"Sign In","login_dialog_signup_button":"Sign Up","login_dialog_title":"Sign In Required","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","web_offer_claim_dialog_close":"close","web_offer_claim_error_state_button":"Try Again","web_offer_claim_error_state_icon_label":"Error Icon","web_offer_claim_exists_state_icon_label":"Success Icon","web_offer_claim_link_account_state_icon_label":"Error Icon","web_offer_claim_loading_state":"loading","web_offer_claim_success_state_icon_label":"Success Icon"},"es-ES":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Volver a ver","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproduciendo vídeo","hp_hero_stop_button_label":"Vídeo en pausa","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creada por","job_card_image_alt_text":"Captura de pantalla de la actividad {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizada el {date}","job_card_verified_by":"Verificada por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Ha habido un error al intentar marcar o eliminar la marca de esta actividad. Vuelve a intentarlo","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tu lista de actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad no marcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad no marcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena War","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misiones de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de drift","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar del golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de coches de competición","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Partida de supervivencia","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Para interactuar con este contenido debes iniciar sesión.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Debes iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","web_offer_claim_dialog_close":"Cerrar","web_offer_claim_error_state_button":"Vuelve a intentarlo","web_offer_claim_error_state_icon_label":"Icono de error","web_offer_claim_exists_state_icon_label":"Icono de aprobación","web_offer_claim_link_account_state_icon_label":"Icono de error","web_offer_claim_loading_state":"Cargando","web_offer_claim_success_state_icon_label":"Icono de aprobación"},"es-MX":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Repetir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproduciendo video","hp_hero_stop_button_label":"Video detenido","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creado por","job_card_image_alt_text":"Captura de pantalla del trabajo {name}","job_card_report_action":"Reportar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizado {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Las actividades solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Se produjo un error al intentar marcar o desmarcar la actividad. Inténtalo de nuevo.","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tus actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad desmarcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad desmarcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena de Motores","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misión de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de derrapes","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar de golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de ruedas descubiertas","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Supervivencia","job_type_target":"Carrera de ataque al objetivo","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Necesitas iniciar sesión para poder interactuar con este contenido.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Necesitas iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","web_offer_claim_dialog_close":"cerrar","web_offer_claim_error_state_button":"Volver a intentar","web_offer_claim_error_state_icon_label":"Ícono de error","web_offer_claim_exists_state_icon_label":"Ícono de aprobado","web_offer_claim_link_account_state_icon_label":"Ícono de error","web_offer_claim_loading_state":"cargando","web_offer_claim_success_state_icon_label":"Ícono de aprobado"},"fr-FR":{"bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","decorative_video_replay_button_label":"Relire","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Vidéo en cours de lecture","hp_hero_stop_button_label":"Vidéo arrêtée","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","job_card_bookmark_action":"Ajouter aux favoris","job_card_created_by":"Créé par","job_card_image_alt_text":"Capture d\'écran de la mission {name}","job_card_report_action":"Effectuer un signalement","job_card_share_action":"Partager","job_card_updated_date":"Dernière modification : {date}","job_card_verified_by":"Vérifié par","job_dialog_bookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour voir cette mission ajoutée aux favoris. Les missions ne peuvent être notées qu\'en jeu, après avoir été jouées.","job_dialog_bookmarked_heading":"Mission ajoutée aux favoris : <b>{name}</b>","job_dialog_bookmarked_title":"Mission ajoutée aux favoris","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Une erreur est survenue lors de l\'ajout/du retrait de la mission de la liste des favoris. Veuillez réessayer.","job_dialog_error_heading":"Mission : <b>{name}</b>","job_dialog_error_title":"Erreur","job_dialog_unbookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour ne plus voir cette mission dans vos favoris.","job_dialog_unbookmarked_heading":"Mission retirée des favoris : <b>{name}</b>","job_dialog_unbookmarked_title":"Mission retirée des favoris","job_type_adversary_mode":"Mode rivalité","job_type_air_race":"Course aérienne","job_type_arena_deathmatch":"Affrontement en arène","job_type_arena_war":"Guerre d\'arène","job_type_bike_race":"Course à moto","job_type_capture":"Capture","job_type_contact_mission":"Mission de contact","job_type_deathmatch":"Affrontement","job_type_drag_race":"Course de dragster","job_type_drift_race":"Course de drift","job_type_foot_race":"Course à pied","job_type_hao_special_works_race":"Course d\'Hao\'s Special Works","job_type_heist":"Braquage","job_type_heist_prep":"Préparation de braquage","job_type_king_of_the_hill":"Conquête","job_type_land_race":"Course terrestre","job_type_last_team_standing":"Extermination","job_type_mission":"Mission","job_type_mission_creator":"Éditeur de missions","job_type_open_wheel_race":"Course d\'ultralégères","job_type_parachuting":"Saut en parachute","job_type_pursuit_race":"Course de poursuite","job_type_race":"Course","job_type_random_mission":"Mission aléatoire","job_type_special_race":"Course de véhicules spéciaux","job_type_street_race":"Course de rue","job_type_stunt_race":"Course nautique","job_type_survival":"Survie","job_type_target":"Course aux points","job_type_team_deathmatch":"Affrontement en équipe","job_type_team_king_of_the_hill":"Conquête en équipe","job_type_transform_race":"Course polymorphes","job_type_unknown":"Inconnu","job_type_vehicle_deathmatch":"Affrontement motorisé","job_type_water_race":"Course nautique","lightbox_close_button":"Fermer","login_dialog_body":"Vous devez vous connecter pour interagir avec ce contenu.","login_dialog_signin_button":"Se connecter","login_dialog_signup_button":"Créer un compte","login_dialog_title":"Connexion requise","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details_amp":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","web_offer_claim_dialog_close":"Fermer","web_offer_claim_error_state_button":"Réessayer","web_offer_claim_error_state_icon_label":"Icône d\'erreur","web_offer_claim_exists_state_icon_label":"Icône de réussite","web_offer_claim_link_account_state_icon_label":"Icône d\'erreur","web_offer_claim_loading_state":"Chargement","web_offer_claim_success_state_icon_label":"Icône de réussite"},"it-IT":{"bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","decorative_video_replay_button_label":"Riproduci di nuovo","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Video in riproduzione","hp_hero_stop_button_label":"Riproduzione video interrotta","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","job_card_bookmark_action":"Aggiungi ai preferiti","job_card_created_by":"Creato da","job_card_image_alt_text":"Screenshot dell\'attività {name}","job_card_report_action":"Segnala","job_card_share_action":"Condividi","job_card_updated_date":"Aggiornato il {date}","job_card_verified_by":"Verificato da","job_dialog_bookmarked_body":"Per visualizzare questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online. Le attività possono essere valutate solo all\'interno del gioco, dopo averle giocate.","job_dialog_bookmarked_heading":"Attività aggiunta ai preferiti: <b>{name}</b>","job_dialog_bookmarked_title":"Attività aggiunta ai preferiti","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Si è verificato un errore durante l’aggiunta ai/la rimozione dai preferiti dell’attività. Riprova più tardi","job_dialog_error_heading":"Attività: <b>{name}</b>","job_dialog_error_title":"Errore","job_dialog_unbookmarked_body":"Per non visualizzare più questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online.","job_dialog_unbookmarked_heading":"Attività rimossa dai preferiti: <b>{name}</b>","job_dialog_unbookmarked_title":"Attività rimossa dai preferiti","job_type_adversary_mode":"Modalità Competizione","job_type_air_race":"Gara aerea","job_type_arena_deathmatch":"Deathmatch nell\'Arena","job_type_arena_war":"Arena War","job_type_bike_race":"Gara su due ruote","job_type_capture":"Cattura","job_type_contact_mission":"Missione dei contatti","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Gara drag","job_type_drift_race":"Gara drift","job_type_foot_race":"Gara a piedi","job_type_hao_special_works_race":"Gara di Hao\'s Special Works","job_type_heist":"Colpi","job_type_heist_prep":"Missione preliminare del colpo","job_type_king_of_the_hill":"Re della collina","job_type_land_race":"Gara terrestre","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Missione","job_type_mission_creator":"Creatore di missioni","job_type_open_wheel_race":"Gara per ruote scoperte","job_type_parachuting":"Paracadutismo","job_type_pursuit_race":"Inseguimenti","job_type_race":"Gara","job_type_random_mission":"Missione casuale","job_type_special_race":"Gara con veicoli speciali","job_type_street_race":"Gara clandestina","job_type_stunt_race":"Gara stunt","job_type_survival":"Sopravvivenza","job_type_target":"Gara al bersaglio","job_type_team_deathmatch":"Deathmatch a squadre","job_type_team_king_of_the_hill":"Re della collina a squadre","job_type_transform_race":"Gara multiveicolo","job_type_unknown":"Sconosciuto","job_type_vehicle_deathmatch":"Deathmatch con veicoli","job_type_water_race":"Gara acquatica","lightbox_close_button":"Chiudi","login_dialog_body":"È necessario eseguire l’accesso prima di poter interagire con questo contenuto","login_dialog_signin_button":"Accedi","login_dialog_signup_button":"Registrati","login_dialog_title":"È necessario eseguire l’accesso","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details_amp":"Stai già usando questo indirizzo email per ricevere la newsletter. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","web_offer_claim_dialog_close":"chiudi","web_offer_claim_error_state_button":"Riprova","web_offer_claim_error_state_icon_label":"Icona Errore","web_offer_claim_exists_state_icon_label":"Icona di successo","web_offer_claim_link_account_state_icon_label":"Icona Errore","web_offer_claim_loading_state":"caricamento","web_offer_claim_success_state_icon_label":"Icona di successo"},"ja-JP":{"bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","decorative_video_replay_button_label":"もう一回見る","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"ビデオ再生中","hp_hero_stop_button_label":"ビデオ停止中","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","job_card_bookmark_action":"ブックマーク","job_card_created_by":"により作成","job_card_image_alt_text":"ジョブ{name}のスクリーンショット","job_card_report_action":"報告","job_card_share_action":"共有","job_card_updated_date":"{date}に更新","job_card_verified_by":"により認証","job_dialog_bookmarked_body":"ブックマークされたジョブを閲覧するには「GTAオンライン」を再起動する必要があります - ジョブは実際にプレイした後でなければ、ゲーム内で評価することはできません。","job_dialog_bookmarked_heading":"ブックマークされたジョブ: <b>{name}</b>","job_dialog_bookmarked_title":"ブックマークされたジョブ","job_dialog_confirmation_button":"OK","job_dialog_error_body":"ジョブをブックマーク/ブックマーク解除を試みた際にエラーが起こりました。もう一度お試しください","job_dialog_error_heading":"ジョブ: <b>{name}</b>","job_dialog_error_title":"エラー","job_dialog_unbookmarked_body":"ブックマークから解除たジョブを削除するには「GTAオンライン」を再起動する必要があります。","job_dialog_unbookmarked_heading":"ブックマークから解除されたジョブ: <b>{name}</b>","job_dialog_unbookmarked_title":"ブックマークから解除されたジョブ","job_type_adversary_mode":"敵対モード","job_type_air_race":"エアレース","job_type_arena_deathmatch":"アリーナデスマッチ","job_type_arena_war":"アリーナウォーズ","job_type_bike_race":"バイクレース","job_type_capture":"キャプチャー","job_type_contact_mission":"コンタクトのミッション","job_type_deathmatch":"デスマッチ","job_type_drag_race":"ドラッグレース","job_type_drift_race":"ドリフトレース","job_type_foot_race":"徒競走","job_type_hao_special_works_race":"ハオ・スペシャルワークスレース","job_type_heist":"強盗","job_type_heist_prep":"強盗調達","job_type_king_of_the_hill":"キングオブザヒル","job_type_land_race":"ランドレース","job_type_last_team_standing":"ラスト・チーム・アライブ","job_type_mission":"ミッション","job_type_mission_creator":"ミッションクリエイター","job_type_open_wheel_race":"オープンホイールレース","job_type_parachuting":"パラシューティング","job_type_pursuit_race":"追跡レース","job_type_race":"レース","job_type_random_mission":"ランダムなミッション","job_type_special_race":"特殊車両レース","job_type_street_race":"ストリートレース","job_type_stunt_race":"スタントレース","job_type_survival":"サバイバル","job_type_target":"ターゲットアサルトレース","job_type_team_deathmatch":"チームデスマッチ","job_type_team_king_of_the_hill":"チーム・キングオブザヒル","job_type_transform_race":"トランスフォームレース","job_type_unknown":"不明","job_type_vehicle_deathmatch":"マシンデスマッチ","job_type_water_race":"シーレース","lightbox_close_button":"閉じる","login_dialog_body":"このコンテンツを利用するには、サインインする必要があります","login_dialog_signin_button":"サインイン","login_dialog_signup_button":"サインアップ","login_dialog_title":"サインインが必要","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details_amp":"このメールアドレスで既にニュースレターアップデートを受け取っています。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します","web_offer_claim_dialog_close":"閉じる","web_offer_claim_error_state_button":"もう一度試す","web_offer_claim_error_state_icon_label":"エラーアイコン","web_offer_claim_exists_state_icon_label":"成功のアイコン","web_offer_claim_link_account_state_icon_label":"エラーアイコン","web_offer_claim_loading_state":"ロード中","web_offer_claim_success_state_icon_label":"成功のアイコン"},"ko-KR":{"bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","decorative_video_replay_button_label":"다시 재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"비디오 재생 중","hp_hero_stop_button_label":"비디오 정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","job_card_bookmark_action":"즐겨찾기","job_card_created_by":"생성됨","job_card_image_alt_text":"{name} 작업 스크린샷","job_card_report_action":"신고","job_card_share_action":"공유","job_card_updated_date":"{date} 업데이트됨","job_card_verified_by":"인증됨","job_dialog_bookmarked_body":"즐겨찾기에 등록한 작업을 보려면 Grand Theft Auto 온라인을 다시 시작해야 합니다 - 작업은 플레이한 후에만 게임 내에서 평가할 수 있습니다.","job_dialog_bookmarked_heading":"즐겨찾기에 등록한 작업: <b>{name}</b>","job_dialog_bookmarked_title":"즐겨찾기에 등록한 작업","job_dialog_confirmation_button":"확인","job_dialog_error_body":"작업 즐겨찾기 등록/해제 중 오류가 발생했습니다. 다시 시도하십시오","job_dialog_error_heading":"작업: <b>{name}</b>","job_dialog_error_title":"오류","job_dialog_unbookmarked_body":"즐겨찾기에서 이 작업을 표시하지 않으려면 Grand Theft Auto 온라인을 다시 시작해야 합니다.","job_dialog_unbookmarked_heading":"즐겨찾기 해제한 작업: <b>{name}</b>","job_dialog_unbookmarked_title":"즐겨찾기 해제한 작업","job_type_adversary_mode":"대적 모드","job_type_air_race":"항공 레이스","job_type_arena_deathmatch":"아레나 데스매치","job_type_arena_war":"아레나 워","job_type_bike_race":"바이크 레이스","job_type_capture":"점령","job_type_contact_mission":"연락책 임무","job_type_deathmatch":"데스매치","job_type_drag_race":"드래그 레이스","job_type_drift_race":"드리프트 레이스","job_type_foot_race":"도보 레이스","job_type_hao_special_works_race":"하오의 스페셜 웍스 레이스 ","job_type_heist":"습격","job_type_heist_prep":"습격 준비","job_type_king_of_the_hill":"킹 오브 더 힐","job_type_land_race":"지상 레이스","job_type_last_team_standing":"라스트 팀 스탠딩","job_type_mission":"임무","job_type_mission_creator":"임무 생성기","job_type_open_wheel_race":"오픈 휠 레이스","job_type_parachuting":"낙하산 강하","job_type_pursuit_race":"추격전 레이스","job_type_race":"레이스","job_type_random_mission":"무작위 임무","job_type_special_race":"특수 차량 레이스","job_type_street_race":"길거리 레이스","job_type_stunt_race":"스턴트 레이스","job_type_survival":"서바이벌","job_type_target":"타겟 어썰트 레이스","job_type_team_deathmatch":"팀 데스매치","job_type_team_king_of_the_hill":"팀 킹 오브 더 힐","job_type_transform_race":"변신 레이스","job_type_unknown":"알 수 없음","job_type_vehicle_deathmatch":"이동 수단 데스매치","job_type_water_race":"해상 레이스","lightbox_close_button":"닫기","login_dialog_body":"이 콘텐츠에 댓글을 남기거나 좋아요를 누르려면 먼저 로그인하십시오","login_dialog_signin_button":"로그인","login_dialog_signup_button":"가입","login_dialog_title":"로그인 필요","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details_amp":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details_amp":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","web_offer_claim_dialog_close":"닫기","web_offer_claim_error_state_button":"다시 시도하기","web_offer_claim_error_state_icon_label":"오류 아이콘","web_offer_claim_exists_state_icon_label":"성공 아이콘","web_offer_claim_link_account_state_icon_label":"오류 아이콘","web_offer_claim_loading_state":"불러오는 중","web_offer_claim_success_state_icon_label":"성공 아이콘"},"pl-PL":{"bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","decorative_video_replay_button_label":"Odtwórz ponownie","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Teraz odtwarzane","hp_hero_stop_button_label":"Wideo zatrzymane","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","job_card_bookmark_action":"Dodaj do zakładek","job_card_created_by":"Stworzone przez","job_card_image_alt_text":"Zrzut ekranu akcji {name}","job_card_report_action":"Zgłoś","job_card_share_action":"Udostępnij","job_card_updated_date":"Zaktualizowano {date}","job_card_verified_by":"Zweryfikowane przez","job_dialog_bookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby zobaczyć tę dodaną do ulubionych akcję. Akcje mogą być ocenione tylko i wyłącznie w grze po ich rozegraniu.","job_dialog_bookmarked_heading":"Akcja dodana do ulubionych: <b>{name}</b>","job_dialog_bookmarked_title":"Akcja dodana do ulubionych","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Wystąpił błąd podczas dodawania/usuwania tej akcji z sekcji ulubionych. Spróbuj ponownie.","job_dialog_error_heading":"Akcja: <b>{name}</b>","job_dialog_error_title":"Błąd","job_dialog_unbookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby akcja nie pojawiała się dłużej w sekcji ulubionych akcji.","job_dialog_unbookmarked_heading":"Akcja usunięta z ulubionych: <b>{name}</b>","job_dialog_unbookmarked_title":"Akcja usunięta z ulubionych","job_type_adversary_mode":"Tryb adwerszarza","job_type_air_race":"Wyścig powietrzny","job_type_arena_deathmatch":"Deathmatch na arenie","job_type_arena_war":"Arena wojny","job_type_bike_race":"Wyścig jednośladów","job_type_capture":"Zdobywanie","job_type_contact_mission":"Misja od kontaktów","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Wyścig równoległy","job_type_drift_race":"Wyścig driftowe","job_type_foot_race":"Wyścig pieszy","job_type_hao_special_works_race":"Wyścigi Hao’s Special Works","job_type_heist":"Napad","job_type_heist_prep":"Misja w terenie","job_type_king_of_the_hill":"Król wzgórza","job_type_land_race":"Wyścig lądowy","job_type_last_team_standing":"Ostatnia drużyna wygrywa","job_type_mission":"Misja","job_type_mission_creator":"Kreator misji","job_type_open_wheel_race":"Wyścig bolidów","job_type_parachuting":"Skoki spadochronowe","job_type_pursuit_race":"Pościg","job_type_race":"Wyścig","job_type_random_mission":"Losowa misja","job_type_special_race":"Wyścig pojazdów specjalnych","job_type_street_race":"Wyścig uliczny","job_type_stunt_race":"Wyścig kaskaderski","job_type_survival":"Walka o przetrwanie","job_type_target":"Wyścig strzelecki","job_type_team_deathmatch":"Deathmatch drużynowy","job_type_team_king_of_the_hill":"Drużynowy Król wzgórza","job_type_transform_race":"Wyścig z transformacją","job_type_unknown":"Nieznane","job_type_vehicle_deathmatch":"Deathmatch w pojazdach","job_type_water_race":"Wyścig morski","lightbox_close_button":"Zamknij","login_dialog_body":"Zaloguj się, aby zapoznać się z zawartością.","login_dialog_signin_button":"Zaloguj się","login_dialog_signup_button":"Zarejestruj się","login_dialog_title":"Wymagane zalogowanie się","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details_amp":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","web_offer_claim_dialog_close":"Zamknij","web_offer_claim_error_state_button":"Spróbuj ponownie","web_offer_claim_error_state_icon_label":"Ikona błędu","web_offer_claim_exists_state_icon_label":"Ikona sukcesu","web_offer_claim_link_account_state_icon_label":"Ikona błędu","web_offer_claim_loading_state":"Ładowanie","web_offer_claim_success_state_icon_label":"Ikona sukcesu"},"pt-BR":{"bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Vídeo em reprodução","hp_hero_stop_button_label":"Vídeo parado","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Adicionar aos Favoritos","job_card_created_by":"Criado por","job_card_image_alt_text":"Captura de tela do Serviço {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartilhar","job_card_updated_date":"Atualização {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para ver este serviço como um de seus Favoritos. Serviços só podem ser avaliados no jogo, após terem sido jogados.","job_dialog_bookmarked_heading":"Serviço adicionado aos Favoritos: <b>{name}</b>","job_dialog_bookmarked_title":"Serviço adicionado aos Favoritos","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Houve um erro ao tentar adicionar/remover esse serviço aos Favoritos. Tente novamente.","job_dialog_error_heading":"Serviço: <b>{name}</b>","job_dialog_error_title":"Erro","job_dialog_unbookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para não ver mais este serviço como um de seus Favoritos.","job_dialog_unbookmarked_heading":"Serviço removido dos Favoritos: <b>{name}</b>","job_dialog_unbookmarked_title":"Serviço removido dos Favoritos","job_type_adversary_mode":"Modo Adversário","job_type_air_race":"Corrida Aérea","job_type_arena_deathmatch":"Mata-mata da Arena","job_type_arena_war":"Arena de Guerra","job_type_bike_race":"Corrida sobre duas rodas","job_type_capture":"Captura","job_type_contact_mission":"Missão de Contato","job_type_deathmatch":"Mata-mata","job_type_drag_race":"Corrida de Arrancada","job_type_drift_race":"Corrida de Drift","job_type_foot_race":"Corrida a pé","job_type_hao_special_works_race":"Corrida da Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Preliminar do Golpe","job_type_king_of_the_hill":"Marcando Território","job_type_land_race":"Corrida Terrestre","job_type_last_team_standing":"Última Equipe Sobrevivente","job_type_mission":"Missão","job_type_mission_creator":"Criador de Missões","job_type_open_wheel_race":"Corrida de Roda Exposta","job_type_parachuting":"Paraquedismo","job_type_pursuit_race":"Corrida de Perseguição","job_type_race":"Corrida","job_type_random_mission":"Missão aleatória","job_type_special_race":"Corrida de Veículo Especial","job_type_street_race":"Corrida de Rua","job_type_stunt_race":"Corrida Acrobática","job_type_survival":"Sobrevivência","job_type_target":"Corrida de Assalto com Alvos","job_type_team_deathmatch":"Mata-mata em Equipe","job_type_team_king_of_the_hill":"Marcando Território em Equipe","job_type_transform_race":"Corrida Metamorfose","job_type_unknown":"Desconhecido","job_type_vehicle_deathmatch":"Mata-mata em Veículos","job_type_water_race":"Corrida Marítima","lightbox_close_button":"Fechar","login_dialog_body":"É necessário iniciar sessão para interagir com esse conteúdo","login_dialog_signin_button":"Iniciar sessão","login_dialog_signup_button":"Criar conta","login_dialog_title":"É necessário iniciar sessão","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details_amp":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição","web_offer_claim_dialog_close":"fechar","web_offer_claim_error_state_button":"Tentar novamente","web_offer_claim_error_state_icon_label":"Ícone de erro","web_offer_claim_exists_state_icon_label":"Ícone de êxito","web_offer_claim_link_account_state_icon_label":"Ícone de erro","web_offer_claim_loading_state":"carregando","web_offer_claim_success_state_icon_label":"Ícone de êxito"},"ru-RU":{"bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","decorative_video_replay_button_label":"Повтор","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизведение видео","hp_hero_stop_button_label":"Видео остановлено","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total}","job_card_bookmark_action":"Отметить","job_card_created_by":"Создан","job_card_image_alt_text":"Снимок экрана дела {name}","job_card_report_action":"Пожаловаться","job_card_share_action":"Поделиться","job_card_updated_date":"Обновлен {date}","job_card_verified_by":"Проверен","job_dialog_bookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы увидеть добавленное в закладки дело. Оценивать дела можно только в игре после прохождения.","job_dialog_bookmarked_heading":"Дело добавлено в закладки: <b>{name}</b>","job_dialog_bookmarked_title":"Дело добавлено в закладки","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Произошла ошибка при попытке добавить дело в закладки или удалить его из закладок. Пожалуйста, повторите попытку","job_dialog_error_heading":"Дело: <b>{name}</b>","job_dialog_error_title":"Ошибка","job_dialog_unbookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы удалить это дело из закладок.","job_dialog_unbookmarked_heading":"Дело удалено из закладок: <b>{name}</b>","job_dialog_unbookmarked_title":"Дело удалено из закладок","job_type_adversary_mode":"Режим противоборства","job_type_air_race":"Гонка по воздуху","job_type_arena_deathmatch":"Перестрелка на арене","job_type_arena_war":"Битва на арене","job_type_bike_race":"Велогонка","job_type_capture":"Захват","job_type_contact_mission":"Задание знакомого","job_type_deathmatch":"Перестрелка","job_type_drag_race":"Драг-гонка","job_type_drift_race":"Дрифтовая гонка","job_type_foot_race":"Пешая гонка","job_type_hao_special_works_race":"Гонка Hao’s Special Works","job_type_heist":"Ограбление","job_type_heist_prep":"Подготовка к ограблению","job_type_king_of_the_hill":"Король горы","job_type_land_race":"Гонка по суше","job_type_last_team_standing":"«Команда уцелевших»","job_type_mission":"Задание","job_type_mission_creator":"Редактор заданий","job_type_open_wheel_race":"Гонки на болидах","job_type_parachuting":"Парашютизм","job_type_pursuit_race":"Гонка «Погоня»","job_type_race":"Гонка","job_type_random_mission":"Случайная миссия","job_type_special_race":"Гонка для особого транспорта","job_type_street_race":"Уличная гонка","job_type_stunt_race":"Каскадерская гонка","job_type_survival":"Выживание","job_type_target":"Гонка с мишенями","job_type_team_deathmatch":"Командная перестрелка","job_type_team_king_of_the_hill":"Команда «Король горы»","job_type_transform_race":"Гонка «Трансформации»","job_type_unknown":"Неизвестно","job_type_vehicle_deathmatch":"Перестрелка на транспорте","job_type_water_race":"Морская гонка","lightbox_close_button":"Закрыть","login_dialog_body":"Выполните вход, чтобы взаимодействовать с этим контентом.","login_dialog_signin_button":"Войти","login_dialog_signup_button":"Регистрация","login_dialog_title":"Необходимо выполнить вход","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details_amp":"Вы уже получаете письма по рассылке на этот адрес электронной почты. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","web_offer_claim_dialog_close":"закрыть","web_offer_claim_error_state_button":"Попробовать снова","web_offer_claim_error_state_icon_label":"Значок ошибки","web_offer_claim_exists_state_icon_label":"Значок «Успех»","web_offer_claim_link_account_state_icon_label":"Значок ошибки","web_offer_claim_loading_state":"загрузка","web_offer_claim_success_state_icon_label":"Значок «Успех»"},"zh-CN":{"bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"回放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"视频播放中","hp_hero_stop_button_label":"视频已停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","job_card_bookmark_action":"收藏","job_card_created_by":"制作者","job_card_image_alt_text":"{name}差事的截图","job_card_report_action":"举报","job_card_share_action":"分享","job_card_updated_date":"更新于{date}","job_card_verified_by":"认证者","job_dialog_bookmarked_body":"您需要重新启动Grand Theft Auto在线模式来查看这项已收藏的差事。只有在游玩了差事后才能在游戏内对它们进行评价。","job_dialog_bookmarked_heading":"已收藏差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏差事","job_dialog_confirmation_button":"确定","job_dialog_error_body":"收藏/取消收藏此差事时出现了一个错误。请稍候再试","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"错误","job_dialog_unbookmarked_body":"需要您重新启动Grand Theft Auto在线模式后，这项差事才会从您的收藏中消失。","job_dialog_unbookmarked_heading":"已取消收藏差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏差事","job_type_adversary_mode":"对抗模式","job_type_air_race":"空中竞速","job_type_arena_deathmatch":"竞技场死斗","job_type_arena_war":"竞技场之战","job_type_bike_race":"两轮车竞速","job_type_capture":"夺取","job_type_contact_mission":"联系人任务","job_type_deathmatch":"死斗游戏","job_type_drag_race":"直线竞速","job_type_drift_race":"漂移竞速","job_type_foot_race":"徒步竞速","job_type_hao_special_works_race":"阿浩特别工坊竞速","job_type_heist":"抢劫任务","job_type_heist_prep":"抢劫前置任务","job_type_king_of_the_hill":"占山为王","job_type_land_race":"陆地竞速","job_type_last_team_standing":"团队生存游戏","job_type_mission":"任务","job_type_mission_creator":"任务制作器","job_type_open_wheel_race":"开轮式竞速","job_type_parachuting":"跳伞","job_type_pursuit_race":"追逐竞速","job_type_race":"竞速","job_type_random_mission":"随机任务","job_type_special_race":"特殊载具竞速","job_type_street_race":"街头竞速","job_type_stunt_race":"特技竞速","job_type_survival":"生存战","job_type_target":"标靶射击竞速","job_type_team_deathmatch":"团队死斗游戏","job_type_team_king_of_the_hill":"团队占山为王","job_type_transform_race":"幻变竞速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"载具死斗游戏","job_type_water_race":"水上竞速","lightbox_close_button":"关闭","login_dialog_body":"您需要先登录才能与该内容进行互动","login_dialog_signin_button":"登录","login_dialog_signup_button":"注册","login_dialog_title":"需要登录","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details_amp":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置中随时管理您的通信偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"确定","ns_successfully_subscribed_details_amp":"您现已订阅Rockstar Games邮件通知，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置中随时管理您的通信偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","web_offer_claim_dialog_close":"关闭","web_offer_claim_error_state_button":"再次尝试","web_offer_claim_error_state_icon_label":"错误图标","web_offer_claim_exists_state_icon_label":"成功图标","web_offer_claim_link_account_state_icon_label":"错误图标","web_offer_claim_loading_state":"正在加载","web_offer_claim_success_state_icon_label":"成功图标"},"zh-TW":{"bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"重播","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"正播放影片","hp_hero_stop_button_label":"影片已停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","job_card_bookmark_action":"收藏","job_card_created_by":"創作者：","job_card_image_alt_text":"差事 {name} 的擷圖","job_card_report_action":"檢舉","job_card_share_action":"分享","job_card_updated_date":"更新於 {date}","job_card_verified_by":"驗證者：","job_dialog_bookmarked_body":"您需要重啟 GTA 線上模式才能看見此已收藏的差事。您需要完成該差事，才能在遊戲內對其評價。","job_dialog_bookmarked_heading":"已收藏的差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏的差事","job_dialog_confirmation_button":"確定","job_dialog_error_body":"解決這個請求時出現錯誤。請再試一次。","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"錯誤","job_dialog_unbookmarked_body":"您需要重啟 GTA 線上模式才不會再在收藏中看見此差事。","job_dialog_unbookmarked_heading":"已取消收藏的差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏的差事","job_type_adversary_mode":"競爭模式","job_type_air_race":"空中競速","job_type_arena_deathmatch":"鬥技場死鬥遊戲","job_type_arena_war":"決戰鬥技場","job_type_bike_race":"雙輪車競速","job_type_capture":"奪取","job_type_contact_mission":"聯絡人任務","job_type_deathmatch":"死鬥遊戲","job_type_drag_race":"直線競速","job_type_drift_race":"甩尾競速","job_type_foot_race":"賽跑","job_type_hao_special_works_race":"阿浩特製改裝競速","job_type_heist":"搶劫任務","job_type_heist_prep":"搶劫前置任務","job_type_king_of_the_hill":"山頭之王","job_type_land_race":"陸上競速","job_type_last_team_standing":"團隊生存遊戲","job_type_mission":"任務","job_type_mission_creator":"任務製作器","job_type_open_wheel_race":"開輪式競速","job_type_parachuting":"跳傘活動","job_type_pursuit_race":"追緝競速","job_type_race":"競速","job_type_random_mission":"隨機任務","job_type_special_race":"特殊載具競速","job_type_street_race":"街頭競速","job_type_stunt_race":"特技競速","job_type_survival":"生存戰","job_type_target":"射靶競速","job_type_team_deathmatch":"團隊死鬥遊戲","job_type_team_king_of_the_hill":"團隊山頭之王","job_type_transform_race":"變形狂飆競速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"載具死鬥遊戲","job_type_water_race":"水上競速","lightbox_close_button":"關閉","login_dialog_body":"您需要先登入才能進行操作","login_dialog_signin_button":"登入","login_dialog_signup_button":"註冊","login_dialog_title":"必須登入","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details_amp":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details_amp":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱","web_offer_claim_dialog_close":"關閉","web_offer_claim_error_state_button":"再試一次","web_offer_claim_error_state_icon_label":"錯誤圖示","web_offer_claim_exists_state_icon_label":"成功圖示","web_offer_claim_link_account_state_icon_label":"錯誤圖示","web_offer_claim_loading_state":"正在載入","web_offer_claim_success_state_icon_label":"成功圖示"}}'),
        E = e => (0, A.withIntl)(e, I);
      var z = t(84173),
        P = t(69353);
      const L = (0, p.createContext)(null),
        M = (0, p.forwardRef)(function({
          jumpLinkId: e,
          currentStep: a = "unclaimed",
          testId: t = "web-offer-claim-root",
          asChild: r,
          ...s
        }, i) {
          const o = r ? z.DX : "div",
            n = (0, P.v6)({
              "data-testid": t,
              className: "ryxcfo0"
            }, s);
          return (0, b.jsx)(L.Provider, {
            value: {
              currentStep: a
            },
            children: (0, b.jsx)(o, {
              id: e,
              ref: i,
              ...n
            })
          })
        }),
        D = (0, p.forwardRef)(function({
          stepIndex: e,
          asChild: a,
          ...t
        }, r) {
          const s = (() => {
              const {
                currentStep: e
              } = (() => {
                const e = (0, p.useContext)(L);
                if (!e) throw new Error("Warning, must use inside a WebOfferClaim.Root provider");
                return e
              })();
              return e
            })(),
            i = a ? z.DX : "div",
            o = (0, P.v6)({
              className: "ryxcfo1"
            }, t);
          return s === e ? (0, b.jsx)(i, {
            ref: r,
            ...o
          }) : null
        }),
        R = (0, p.forwardRef)(function({
          view: e = "default",
          ...a
        }, t) {
          const r = (0, P.v6)({
            className: "ryxcfo2"
          }, a);
          return "dialog" === e ? (0, b.jsx)(T.Dialog.Trigger, {
            asChild: !0,
            children: (0, b.jsx)(T.Button, {
              ref: t,
              ...r
            })
          }) : (0, b.jsx)(T.Button, {
            ref: t,
            ...r
          })
        });
      const V = () => {
          const {
            view: e
          } = F();
          return e
        },
        F = () => {
          const e = (0, p.useContext)(me);
          if (!e) throw new Error("Warning, must use inside a WebOfferClaim.Root provider");
          return e
        };
      var $ = t(16630),
        G = (0, $.c)({
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
        O = (0, $.c)({
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
        B = (0, $.c)({
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
      const H = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg",
        q = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
        U = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg",
        W = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
        K = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
        Y = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg",
        X = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
        J = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
        Z = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg",
        Q = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg",
        ee = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
        ae = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg",
        te = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg",
        re = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
        se = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg";
      var ie = "var(--_171mcfn5)",
        oe = "var(--_171mcfn4)",
        ne = (0, $.c)({
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
        ce = "var(--_171mcfn3)",
        le = t(819);
      const de = (0, p.forwardRef)(function({
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
            _ = (0, le.DI)({
              [ce]: a ? `linear-gradient(${d}, ${c})` : "linear-gradient(black 0%)",
              [oe]: t ? `linear-gradient(${m}, ${l})` : "linear-gradient(black 0%)",
              [ie]: "vertical" === e ? "y" : "x"
            }),
            u = (0, P.v6)({
              className: ne({
                orientation: e
              })
            }, o),
            p = {
              ...s,
              ..._
            };
          return (0, b.jsxs)(T.ScrollArea.Root, {
            ...u,
            ref: n,
            style: p,
            children: [(0, b.jsx)(T.ScrollArea.Viewport, {
              className: "_171mcfn9",
              children: i
            }), (0, b.jsx)(T.ScrollArea.Scrollbar, {
              orientation: e,
              children: (0, b.jsx)(T.ScrollArea.Thumb, {})
            }), (0, b.jsx)(T.ScrollArea.Corner, {})]
          })
        }),
        me = (0, p.createContext)({
          view: "default"
        }),
        _e = (0, p.forwardRef)(function({
          asChild: e,
          testId: a = "web-offer-claim-root",
          view: t = "default",
          ...r
        }, s) {
          const i = e ? z.DX : "div",
            o = (0, P.v6)({
              "data-testid": a,
              className: B({
                view: t
              })
            }, r);
          return (0, b.jsx)(me.Provider, {
            value: {
              view: t
            },
            children: (0, b.jsx)(i, {
              ref: s,
              ...o
            })
          })
        }),
        ue = (0, p.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = V(),
            s = e ? z.DX : "div",
            i = (0, P.v6)({
              className: G({
                view: r
              })
            }, a);
          return (0, b.jsx)(s, {
            ref: t,
            ...i
          })
        }),
        be = (0, p.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = e ? z.DX : "header",
            s = (0, P.v6)({}, a);
          return (0, b.jsx)(r, {
            ref: t,
            ...s
          })
        }),
        pe = (0, p.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = e ? z.DX : "footer",
            s = (0, P.v6)({
              className: "_1fcycesd"
            }, a);
          return (0, b.jsx)(r, {
            ref: t,
            ...s
          })
        }),
        ge = (0, p.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = V(),
            s = e ? z.DX : "div",
            i = (0, P.v6)({
              className: "_1fcyces8"
            }, a);
          return "dialog" === r ? (0, b.jsx)(T.Dialog.Description, {
            ref: t,
            asChild: !0,
            children: (0, b.jsx)(s, {
              ...i
            })
          }) : (0, b.jsx)(de, {
            stops: [{
              color: "transparent",
              position: "0%"
            }, {
              color: "black",
              position: "15%"
            }],
            children: (0, b.jsx)(s, {
              ref: t,
              ...i
            })
          })
        }),
        fe = (0, p.forwardRef)(function({
          alt: e,
          src: {
            mobile: a,
            desktop: t
          },
          ...r
        }, s) {
          const i = V(),
            o = (0, P.v6)({
              className: "_1fcyces3"
            }, r);
          return "dialog" !== i && (0, b.jsxs)("picture", {
            ref: s,
            ...o,
            children: [(0, b.jsx)("source", {
              media: "(max-width: 1279.98px)",
              srcSet: a
            }), (0, b.jsx)("source", {
              media: "(min-width: 1280px)",
              srcSet: t
            }), (0, b.jsx)("img", {
              src: t,
              className: "_1fcyces4",
              alt: e
            })]
          })
        }),
        ke = (0, p.forwardRef)(function({
          children: e,
          appearance: a = "secondary",
          ...t
        }, r) {
          const s = (0, P.v6)({
            appearance: a,
            testId: "woc.step.badge",
            className: "_1fcycesb"
          }, t);
          return (0, b.jsx)(T.Badge.Root, {
            ref: r,
            ...s,
            asChild: !0,
            children: (0, b.jsx)(T.Badge.Label, {
              children: e
            })
          })
        }),
        ve = (0, p.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = e ? z.DX : "div",
            s = (0, P.v6)({
              className: "_1fcycesa"
            }, a);
          return (0, b.jsx)(r, {
            ref: t,
            ...s
          })
        }),
        he = (0, p.forwardRef)(function({
          ...e
        }, a) {
          const t = V(),
            r = (0, P.v6)({
              className: "_1fcyces9"
            }, e);
          return "dialog" === t ? (0, b.jsx)(T.Dialog.Title, {
            asChild: !0,
            children: (0, b.jsx)(T.Heading, {
              ref: a,
              ...r
            })
          }) : (0, b.jsx)(T.Heading, {
            ref: a,
            ...r
          })
        }),
        we = (0, p.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, P.v6)({
            testId: "woc.step.description",
            className: "_1fcycesc"
          }, e);
          return (0, b.jsx)(T.Body, {
            ref: a,
            ...t
          })
        }),
        ye = (0, p.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, P.v6)({
            testId: "woc.step.disclaimer",
            className: "_1fcycese"
          }, e);
          return (0, b.jsx)(T.Body, {
            ref: a,
            ...t,
            size: "XS",
            color: "subdued"
          })
        }),
        je = (0, p.forwardRef)(function({
          size: e = "LG",
          ...a
        }, t) {
          return (0, b.jsx)(T.Button, {
            ref: t,
            ...a,
            size: e
          })
        }),
        xe = ({
          label: e,
          platform: a,
          ...t
        }) => {
          const s = (0, P.v6)({
            className: O({
              platform: a
            })
          }, t);
          return (0, b.jsx)(T.Button, {
            ...s,
            appearance: "secondary",
            size: "MD",
            children: (0, b.jsx)("img", {
              src: r[a],
              alt: e
            })
          })
        },
        Ne = ({
          ...e
        }) => (0, b.jsx)(xe, {
          ...e,
          label: (0, h.findPlatform)("xbox")?.friendlyName ?? "Xbox",
          platform: "xbox"
        }),
        Se = ({
          ...e
        }) => (0, b.jsx)(xe, {
          ...e,
          label: (0, h.findPlatform)("ps")?.friendlyName ?? "PlayStation",
          platform: "ps"
        }),
        Ce = ({
          label: e
        }) => (0, b.jsx)("div", {
          className: "_1fcycesv",
          children: (0, b.jsx)(T.Spinner, {
            size: "pageXL",
            label: e
          })
        }),
        Te = Object.assign(D, s);
      var Ae = t(82199),
        Ie = t(42285);
      const Ee = "claimOffer",
        ze = (0, p.createContext)(null),
        Pe = () => {
          const e = (0, p.useContext)(ze);
          if (!e) throw new Error("useClaimContext must be used within a ClaimContext.Provider");
          return e
        },
        Le = ({
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
        Me = (e, a) => {
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
                ...e, ...Le({
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
        De = () => {
          const {
            state: e,
            dispatch: a
          } = Pe(), {
            charactersNeeded: t,
            setCharactersNeeded: r
          } = (0, Ae.useRockstarUserState)(), {
            track: s
          } = (0, Ae.useGtmTrack)(), {
            loggedIn: i,
            data: o
          } = (0, Ae.useRockstarUser)(), {
            signInUrl: n
          } = (0, h.useScAuthLinks)(e.returnUrl), {
            redirect: c
          } = (() => {
            const e = (0, S.useNavigate)();
            return {
              redirect: (0, p.useCallback)((a, t = {}) => {
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
            const e = (0, p.useRef)(!1),
              a = (0, p.useRef)(!1),
              {
                track: t
              } = (0, Ae.useGtmTrack)(),
              {
                ref: r
              } = (0, Ie.useInView)({
                threshold: .6,
                triggerOnce: !0,
                onChange: a => {
                  e.current = a
                }
              }),
              s = (0, p.useCallback)(r => {
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
          })(), [_] = (0, S.useSearchParams)(), u = _.has(Ee, e.giftId), b = "stateful" === e.variant || "stateful-trigger" === e.variant, g = (() => {
            const {
              state: e,
              dispatch: a
            } = Pe(), {
              fetch: t
            } = (r = e.giftId, (0, h.useScApi)("marketing/engagement/claim/exists", {
              autoFetch: !1,
              requireBearerToken: !0,
              useCache: !1,
              query: {
                giftUId: r
              }
            }));
            var r;
            return (0, p.useCallback)(async () => {
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
          })(), f = (() => {
            const {
              state: e,
              dispatch: a
            } = Pe(), [t] = (0, S.useSearchParams)(), r = {
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
              } = (0, h.useScApi)("marketing/engagement/claim/create", {
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
            return (0, p.useCallback)(async () => {
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
          return (0, p.useEffect)(() => {
            if ("IDLE" === e.status && i && b) g();
            else if (u && "IDLE" === e.status) a({
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
              }), c(n)), i && (u && ("TRIGGERED" === e.status || "UNCLAIMED" === e.status) || !b && "TRIGGERED" === e.status)) t && o.accountSynced || o.characters ? a({
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
              f()
            } else o && o.characters && o.characters.gtao.length > 0 ? a({
              type: "START_CLAIM"
            }) : a({
              type: "LINK_ACCOUNT"
            })
          }, [i, u, o, e.status]), (0, p.useEffect)(() => {
            m({
              element_placement: "WOC",
              section_state: `${e.variant}|${e.status}`
            })
          }, [d, e.variant, e.status, m]), {
            ref: l
          }
        };
      var Re = t(32760);
      const Ve = e => 0 === (new DOMParser).parseFromString(e, "text/html").body.textContent.trim().length,
        Fe = (0, A.defineMessages)({
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
        $e = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, A.useIntl)(), {
            state: t,
            dispatch: r
          } = Pe(), s = (0, p.useCallback)(() => {
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
          } = t.steps.error, d = Ve(l ?? ""), m = t.steps.unclaimed.disclaimer, _ = t.steps.unclaimed.image, {
            alt: u,
            src: g
          } = (0, C.useImageParser)(o ?? _ ?? {});
          return (0, b.jsxs)(Te.Root, {
            view: e,
            children: [(0, b.jsx)(Te.Image, {
              alt: u ?? "",
              src: g ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, b.jsxs)(Te.Container, {
              children: [(0, b.jsxs)(Te.Content, {
                children: [(0, b.jsx)(Re.TriangleAlert, {
                  size: "XL",
                  color: le.LU.alias.color.icon.danger,
                  label: a(Fe.web_offer_claim_error_state_icon_label)
                }), (0, b.jsx)(Te.Heading, {
                  level: 4,
                  children: n
                }), c && (0, b.jsx)(Te.Description, {
                  children: i({
                    children: c
                  })
                })]
              }), (0, b.jsxs)(Te.Footer, {
                children: [(0, b.jsx)(Te.Actions, {
                  children: (0, b.jsx)(Te.Button, {
                    appearance: "primary",
                    onClick: s,
                    children: a(Fe.web_offer_claim_error_state_button)
                  })
                }), "stateful" === t.variant && (l || m) && (0, b.jsx)(Te.Disclaimer, {
                  children: i({
                    children: d ? m : l
                  })
                })]
              })]
            })]
          })
        };
      var Ge = t(46966);
      const Oe = ({
          trackingHandler: e,
          href: a,
          label: t,
          target: r,
          ...s
        }) => (0, b.jsx)(Te.Button, {
          ...s,
          onClick: () => {
            e && e({
              label: t,
              href: a
            })
          },
          asChild: !0,
          "data-testid": "success-link",
          children: (0, b.jsx)("a", {
            href: a,
            target: r,
            children: t
          })
        }),
        Be = ({
          platformConfigs: e,
          ...a
        }) => {
          const {
            data: t
          } = (0, Ae.useRockstarUser)(), {
            charactersNeeded: r,
            setCharactersNeeded: s
          } = (0, Ae.useRockstarUserState)();
          r || s("gtao");
          const i = t.gamesPlayed?.gtav,
            o = !t.accountSynced,
            {
              label: n,
              href: c,
              target: l
            } = (0, p.useMemo)(() => {
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
          return (0, b.jsx)(Oe, {
            label: n,
            href: c,
            target: l,
            isLoading: o,
            ...a
          })
        },
        He = ["ps5", "xboxsx", "pcalt"],
        qe = e => {
          const {
            data: a
          } = (0, Ae.useRockstarUser)(), {
            charactersNeeded: t,
            setCharactersNeeded: r
          } = (0, Ae.useRockstarUserState)();
          t || r("gtao");
          const s = a.gamesPlayed?.gtav,
            i = (0, p.useMemo)(() => !!s && He.includes(s), [s]),
            {
              hasGtaPlus: o
            } = a;
          return !o && i && (0, b.jsx)(Oe, {
            href: "https://www.rockstargames.com/gta-plus/join",
            target: "_self",
            ...e
          })
        },
        Ue = e => {
          const {
            track: a
          } = (0, Ae.useGtmTrack)(), {
            state: t
          } = Pe();
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
              }, o = (0, P.v6)({
                trackingHandler: i
              }, s);
              return (0, b.jsx)(Be, {
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
              }, o = (0, P.v6)({
                trackingHandler: i
              }, s);
              return (0, b.jsx)(qe, {
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
              }, o = (0, P.v6)({
                trackingHandler: i
              }, s);
              return (0, b.jsx)(Oe, {
                ...o
              })
            }
          }
        },
        We = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, A.useIntl)(), {
            state: t
          } = Pe(), {
            RichTextComponent: r
          } = t, {
            image: s,
            heading: i,
            description: o,
            ctas: n,
            disclaimer: c
          } = t.steps[t.currentStep], l = t.steps.unclaimed.image, d = Ve(c ?? ""), m = t.steps.unclaimed.disclaimer, {
            alt: _,
            src: u
          } = (0, C.useImageParser)(s ?? l ?? {});
          return (0, b.jsxs)(Te.Root, {
            view: e,
            children: [(0, b.jsx)(Te.Image, {
              alt: _ ?? "",
              src: u ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, b.jsxs)(Te.Container, {
              children: [(0, b.jsxs)(Te.Content, {
                children: [(0, b.jsx)(Te.Header, {
                  children: (0, b.jsx)(Re.Check, {
                    size: "XL",
                    color: Ge.LU.alias.color.icon.success,
                    label: a(Fe.web_offer_claim_success_state_icon_label)
                  })
                }), (0, b.jsx)(Te.Heading, {
                  level: 4,
                  children: i
                }), o && (0, b.jsx)(Te.Description, {
                  children: r({
                    children: o
                  })
                })]
              }), (0, b.jsxs)(Te.Footer, {
                children: [n && n.length > 0 && (0, b.jsx)(Te.Actions, {
                  children: n.map((e, a) => (0, b.jsx)(Ue, {
                    ...e
                  }, a))
                }), "stateful" === t.variant && (c || m) && (0, b.jsx)(Te.Disclaimer, {
                  children: r({
                    children: d ? m : c
                  })
                })]
              })]
            })]
          })
        },
        Ke = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, A.useIntl)(), t = (0, h.useGetTpaLinkGenerator)(), {
            state: r
          } = Pe(), {
            track: s
          } = (0, Ae.useGtmTrack)(), {
            RichTextComponent: i
          } = r, {
            image: o,
            heading: n,
            description: c,
            disclaimer: l
          } = r.steps["link-account"], d = (0, p.useCallback)(async e => {
            const a = (0, h.findPlatform)(e)?.onlineService;
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
          }, [t, s, r.returnUrl, r.giftId]), m = (0, p.useCallback)(() => {
            d("xbox")
          }, [d]), _ = (0, p.useCallback)(() => {
            d("ps")
          }, [d]), u = Ve(l ?? ""), g = r.steps.unclaimed.disclaimer, f = r.steps.unclaimed.image, {
            alt: k,
            src: v
          } = (0, C.useImageParser)(o ?? f ?? {});
          return (0, b.jsxs)(Te.Root, {
            view: e,
            children: [(0, b.jsx)(Te.Image, {
              alt: k ?? "",
              src: v ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, b.jsxs)(Te.Container, {
              children: [(0, b.jsxs)(Te.Content, {
                children: [(0, b.jsx)(Re.TriangleAlert, {
                  size: "XL",
                  color: le.LU.alias.color.icon.danger,
                  label: a(Fe.web_offer_claim_link_account_state_icon_label)
                }), (0, b.jsx)(Te.Heading, {
                  level: 4,
                  children: n
                }), c && (0, b.jsx)(Te.Description, {
                  children: i({
                    children: c
                  })
                })]
              }), (0, b.jsxs)(Te.Footer, {
                children: [(0, b.jsxs)(Te.Actions, {
                  children: [(0, b.jsx)(Te.LinkXBoxButton, {
                    target: "_self",
                    onClick: m
                  }), (0, b.jsx)(Te.LinkPSButton, {
                    target: "_self",
                    onClick: _
                  })]
                }), "stateful" === r.variant && (l || g) && (0, b.jsx)(Te.Disclaimer, {
                  children: i({
                    children: u ? g : l
                  })
                })]
              })]
            })]
          })
        },
        Ye = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, A.useIntl)(), {
            state: t
          } = Pe(), {
            image: r
          } = t.steps.unclaimed, {
            alt: s,
            src: i
          } = (0, C.useImageParser)(r ?? {});
          return (0, b.jsxs)(Te.Root, {
            view: e,
            children: [(0, b.jsx)(Te.Image, {
              alt: s ?? "",
              src: i ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, b.jsxs)(Te.Container, {
              children: [(0, b.jsx)(Te.Header, {
                children: (0, b.jsx)(z.s6, {
                  children: (0, b.jsx)(Te.Heading, {
                    level: 5,
                    children: a(Fe.web_offer_claim_loading_state)
                  })
                })
              }), (0, b.jsx)(Te.Content, {
                children: (0, b.jsx)(Te.Description, {
                  asChild: !0,
                  children: (0, b.jsx)(Te.Loading, {
                    label: a(Fe.web_offer_claim_loading_state)
                  })
                })
              })]
            })]
          })
        },
        Xe = ({
          label: e,
          ...a
        }) => {
          const {
            loggedIn: t
          } = (0, Ae.useRockstarUser)(), {
            state: r,
            dispatch: s
          } = Pe(), [, i] = (0, S.useSearchParams)(), o = (0, p.useCallback)(() => {
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
          }, [s, t, i, r.giftId, r.jumpLinkId]), n = (0, P.v6)({
            appearance: a.appearance ?? "primary"
          }, a);
          return (0, b.jsx)(R, {
            onPress: o,
            ...n,
            view: "stateful" !== r.variant ? "dialog" : "default",
            children: e
          })
        },
        Je = ({
          view: e = "default"
        }) => {
          const {
            state: a
          } = Pe(), {
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
          } = (0, C.useImageParser)(r ?? {}), d = a.steps.unclaimed["button-label"];
          return (0, b.jsxs)(Te.Root, {
            view: e,
            children: [(0, b.jsx)(Te.Image, {
              alt: c ?? "",
              src: l ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, b.jsxs)(Te.Container, {
              children: [(0, b.jsxs)(Te.Content, {
                children: [s && (0, b.jsx)(Te.Badge, {
                  children: s
                }), (0, b.jsx)(Te.Heading, {
                  level: 4,
                  children: i
                }), o && (0, b.jsx)(Te.Description, {
                  children: t({
                    children: o
                  })
                })]
              }), (0, b.jsxs)(Te.Footer, {
                children: [d && (0, b.jsx)(Te.Actions, {
                  children: (0, b.jsx)(Xe, {
                    appearance: "primary",
                    size: "LG",
                    label: d,
                    view: "stateful" !== a.variant ? "dialog" : "default"
                  })
                }), n && (0, b.jsx)(Te.Disclaimer, {
                  children: t({
                    children: n
                  })
                })]
              })]
            })]
          })
        },
        Ze = () => {
          const {
            state: e
          } = Pe(), {
            ref: a
          } = De();
          return (0, b.jsx)(M, {
            jumpLinkId: e.jumpLinkId,
            currentStep: e.currentStep,
            "data-exclude-legacy-typography-css": !0,
            ref: a,
            children: "stateful" === e.variant ? (0, b.jsx)(Qe, {}) : (0, b.jsx)(ea, {})
          })
        },
        Qe = E(() => (0, b.jsxs)(b.Fragment, {
          children: [(0, b.jsx)(Te, {
            stepIndex: "loading",
            children: (0, b.jsx)(Ye, {})
          }), (0, b.jsx)(Te, {
            stepIndex: "unclaimed",
            children: (0, b.jsx)(Je, {})
          }), (0, b.jsx)(Te, {
            stepIndex: "success",
            children: (0, b.jsx)(We, {})
          }), (0, b.jsx)(Te, {
            stepIndex: "error",
            children: (0, b.jsx)($e, {})
          }), (0, b.jsx)(Te, {
            stepIndex: "link-account",
            children: (0, b.jsx)(Ke, {})
          })]
        })),
        ea = E(() => {
          const {
            formatMessage: e
          } = (0, A.useIntl)(), {
            state: a
          } = Pe(), {
            isOpen: t,
            setIsOpen: r
          } = (() => {
            const {
              state: e
            } = Pe(), a = (() => {
              const [, e] = (0, S.useSearchParams)(), {
                dispatch: a
              } = Pe();
              return (0, p.useCallback)(() => {
                e(e => (e.delete(Ee), e), {
                  replace: !0
                }), a({
                  type: "RESET"
                })
              }, [a, e])
            })(), t = (0, p.useCallback)(e => {
              e || a()
            }, [a]);
            return {
              isOpen: e.dialogOpen,
              setIsOpen: t
            }
          })(), s = "dialog";
          return (0, b.jsxs)(T.Dialog.Root, {
            isOpen: t,
            onOpenChange: r,
            children: ["static" === a.variant && (0, b.jsx)(Je, {
              view: "default"
            }), (0, b.jsx)(T.Dialog.Portal, {
              children: (0, b.jsx)(T.Dialog.Overlay, {
                children: (0, b.jsxs)(T.Dialog.Content, {
                  children: [(0, b.jsx)(T.Dialog.CloseButton, {
                    label: e(Fe.web_offer_claim_dialog_close),
                    onPress: () => r(!1)
                  }), (0, b.jsx)(T.Dialog.ScrollArea, {
                    style: {
                      overflowY: "auto"
                    },
                    children: (0, b.jsxs)(T.Dialog.Layout, {
                      children: [(0, b.jsx)(Te, {
                        stepIndex: "loading",
                        children: (0, b.jsx)(Ye, {
                          view: s
                        })
                      }), (0, b.jsx)(Te, {
                        stepIndex: "success",
                        children: (0, b.jsx)(We, {
                          view: s
                        })
                      }), (0, b.jsx)(Te, {
                        stepIndex: "error",
                        children: (0, b.jsx)($e, {
                          view: s
                        })
                      }), (0, b.jsx)(Te, {
                        stepIndex: "link-account",
                        children: (0, b.jsx)(Ke, {
                          view: s
                        })
                      }), (0, b.jsx)(Te, {
                        stepIndex: "exists",
                        children: (0, b.jsx)(We, {
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
        aa = (E(Ze), ({
          children: e
        }) => e ? "string" != typeof e ? (console.error("RichText expects to be a string"), null) : (0, b.jsx)(C.TinaRichText, {
          html: e
        }) : null),
        ta = ({
          children: e,
          initialState: a
        }) => {
          const [t, r] = (0, p.useReducer)(Me, a);
          return (0, b.jsx)(ze.Provider, {
            value: {
              state: t,
              dispatch: r
            },
            children: e
          })
        },
        ra = E(({
          giftId: e,
          location: a,
          jumpLinkId: t,
          variant: r = "stateful",
          steps: s
        }) => {
          const i = `${document.location.pathname}${document.location.search}#${t}`,
            o = (0, C.usePrunedTinaKeys)(s),
            n = Le({
              giftId: e,
              location: a,
              returnUrl: i,
              jumpLinkId: t,
              steps: o,
              variant: r,
              RichTextComponent: aa
            }),
            {
              hash: c
            } = (0, S.useLocation)();
          return (0, p.useLayoutEffect)(() => {
            const e = document.getElementById(t);
            e && c.includes(t) && e.scrollIntoView({
              behavior: "instant",
              block: "center"
            })
          }, []), (0, b.jsx)(ta, {
            initialState: n,
            children: s && (0, b.jsx)(Ze, {})
          })
        }),
        sa = {
          ...i,
          ...u,
          ClrCard: _.y3,
          ClrCollapsedCard: _.h7,
          Gif: n(),
          GroupOfItems: c.default,
          RockstarVideoPlayer: m(),
          SwiperCarousel: l.default,
          Highlights: N.Highlights,
          WebOfferClaim: ra
        }
    },
    36672(e, a, t) {
      var r = {
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
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = i, e.exports = s, s.id = 36672
    },
    8194(e, a, t) {
      var r = {
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
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = i, e.exports = s, s.id = 8194
    },
    86751(e, a, t) {
      var r = {
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
        "./midnightclub.jpg": 90221,
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
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = i, e.exports = s, s.id = 86751
    },
    39294(e, a, t) {
      var r = {
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
        "./midnightclub.jpg": 90221,
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
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = i, e.exports = s, s.id = 39294
    },
    58963(e, a, t) {
      var r = {
        "./VI/desktop/global.jpg": 57156
      };

      function s(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = i, e.exports = s, s.id = 58963
    },
    25087(e, a, t) {
      var r = {
        "./VI/mobile/global.jpg": 52640
      };

      function s(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
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
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b34d21a2564258ce247662c7edeb6f00.jpg"
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
    90221(e) {
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
    85719(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    80391(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    28985(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    47240(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    11008(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    32903(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    49429(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    81715(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
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