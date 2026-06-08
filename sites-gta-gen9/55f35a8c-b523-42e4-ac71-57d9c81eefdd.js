try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "55f35a8c-b523-42e4-ac71-57d9c81eefdd", e._sentryDebugIdIdentifier = "sentry-dbid-55f35a8c-b523-42e4-ac71-57d9c81eefdd")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [4052, 4605, 8190], {
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

      function r(e, a) {
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
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return i.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
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

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return i.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.UserGetVote = n(a, "UserGetVote"), e.exports.UserCastVote = n(a, "UserCastVote")
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

      function r(e, a) {
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
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return i.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
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

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return i.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.UserGetVote = n(a, "UserGetVote"), e.exports.UserCastVote = n(a, "UserCastVote")
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

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return i.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.postFields = n(a, "postFields"), e.exports.paging = n(a, "paging"), e.exports.NewswireList = n(a, "NewswireList")
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
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
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
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return i.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }(a, "TinaModulesList")
    },
    30489(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var s = t(39793),
        r = t(93082),
        n = t(42285),
        i = t(13331),
        o = t(82199),
        c = t(30026),
        d = t(1e4);
      const l = ({
          className: e
        }) => (0, s.jsxs)("svg", {
          className: e,
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, s.jsx)("path", {
            d: "M3.33203 8.5H12.6654",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, s.jsx)("path", {
            d: "M8 3.83331L12.6667 8.49998L8 13.1666",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }),
        m = {
          actionBlock: "rockstargames-sites-gta-gen9b1516576d0566f12c906be9e81407ce4",
          actionFooter: "rockstargames-sites-gta-gen9f713e165e153987c3855d93dc1614f4d",
          active: "rockstargames-sites-gta-gen9ec9f200e6987aebf6375c999eecd5dc3",
          calloutButton: "rockstargames-sites-gta-gen9b8ed029eb7d9b09c70caa4576bbb4c5a",
          calloutContainer: "rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539",
          calloutHeader: "rockstargames-sites-gta-gen9fb0bbc5bcc4fb2c7d0b8152001df0497",
          calloutHeaderMargins: "rockstargames-sites-gta-gen9d7d4d815f9e36b62ef54befcc89ca296",
          calloutHeaders: "rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea",
          calloutLink: "rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797",
          calloutLinkIcon: "rockstargames-sites-gta-gen9db31e98c20de15e8d5983285bd6ec92e",
          calloutSection: "rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f",
          calloutSubheader: "rockstargames-sites-gta-gen9f5fe27da672cf05e64359ada500a6b7a",
          calloutVoteForm: "rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8",
          downvote: "rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b",
          pillBtn: "rockstargames-sites-gta-gen9c881ff12d1d9fb612b4ddd89178684e4",
          selected: "rockstargames-sites-gta-gen9dece7a2abb867cf09add3f7429e7383b",
          upvote: "rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93",
          voteButton: "rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0"
        },
        g = ({
          foreign_id: e,
          foreign_type: a
        }) => {
          const {
            track: t
          } = (0, o.useGtmTrack)(), {
            refetch: n
          } = (0, i.useQuery)(c.UserGetVote, {
            skip: !0
          }), [d] = (0, i.useMutation)(c.UserCastVote), [l, g] = (0, r.useState)(null), _ = (0, r.useCallback)(s => {
            (async () => {
              if (s === l && null !== l) g(null);
              else {
                g(s), t({
                  event: "cta_" + (s ? "like" : "dislike"),
                  text: `${a} ${e}`
                });
                const r = {
                  foreignId: e,
                  foreignType: a,
                  vote: s
                };
                await d({
                  variables: r
                })
              }
            })()
          }, [e, a, l]);
          return (0, r.useEffect)(() => {
            e && a && (async () => {
              const t = await n({
                foreignId: e,
                foreignType: a
              });
              g(t?.data?.userGetVote?.vote ?? null)
            })()
          }, [e, a]), (0, s.jsxs)("div", {
            className: m.calloutVoteForm,
            children: [(0, s.jsx)("button", {
              "aria-label": "upvote",
              className: [m.upvote, m.voteButton, l ? m.active : ""].join(" "),
              name: "upvote",
              onClick: () => _(!0),
              type: "button"
            }), (0, s.jsx)("button", {
              "aria-label": "downvote",
              className: [m.downvote, m.voteButton, !1 === l ? m.active : ""].join(" "),
              name: "downvote",
              onClick: () => _(!1),
              type: "button"
            })]
          })
        },
        _ = ({
          action_text: e,
          link: a,
          trackingData: t
        }) => {
          const {
            track: r
          } = (0, o.useGtmTrack)();
          return (0, s.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, s.jsxs)("button", {
              className: m.calloutLink,
              type: "button",
              onClick: t ? () => r({
                ...t
              }) : () => {},
              children: [e, (0, s.jsx)(l, {
                className: m.calloutLinkIcon
              })]
            })
          })
        },
        u = ({
          helperText: e,
          linkText: a,
          link: t,
          trackingData: r
        }) => {
          const {
            track: n
          } = (0, o.useGtmTrack)();
          return (0, s.jsxs)("div", {
            className: m.actionFooter,
            children: [e, a && " ", a && (0, s.jsx)("a", {
              href: t ?? "",
              onClick: () => n({
                ...r
              }),
              children: a
            })]
          })
        },
        b = (0, i.withTranslations)(({
          header: e,
          subheader: a,
          type: t,
          action_text: c,
          link: l,
          foreign_id: b = document.location.pathname,
          foreign_type: p = "url",
          className: f = "",
          actionFooterHelperText: k,
          actionFooterLinkText: h,
          actionFooterLink: v,
          trackingData: x = {},
          actionFooterLinkTrackingData: y = {},
          t: j,
          ...w
        }) => {
          const {
            loggedIn: N
          } = (0, o.useRockstarUser)(), {
            track: S
          } = (0, o.useGtmTrack)(), C = document.location.pathname, {
            signInUrl: I
          } = (0, i.useScAuthLinks)(C), {
            ref: T,
            inView: E
          } = (0, n.useInView)({
            threshold: .6
          }), [z, A] = (0, r.useState)(!1);
          let P;
          if ((0, r.useEffect)(() => {
              E && !z && (S({
                event: "page_section_impression",
                element_placement: `callout section - ${w?.sectionName??w?._memoq?.header}`
              }), A(!0))
            }, [E]), !e && !a) return null;
          switch (t) {
            case "vote":
              if (!N) {
                P = (0, s.jsx)(d.A, {
                  to: I,
                  className: m.calloutButton,
                  onClick: x ? () => S({
                    ...x
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              P = (0, s.jsx)(g, {
                foreign_id: b,
                foreign_type: p
              });
              break;
            case "button":
              c && l && (P = (0, s.jsx)(d.A, {
                to: l,
                className: m.calloutButton,
                onClick: x ? () => S({
                  ...x
                }) : () => {},
                children: c
              }));
              break;
            case "link":
              c && l && (P = (0, s.jsx)(_, {
                action_text: c,
                link: l,
                trackingData: x
              }));
              break;
            default:
              P = null
          }
          return (0, s.jsx)("div", {
            className: `${m.calloutContainer} ${f||""}`,
            ref: T,
            children: (0, s.jsxs)("div", {
              className: m.calloutSection,
              children: [(0, s.jsxs)("div", {
                className: [m.calloutHeaders, P ? m.calloutHeaderMargins : ""].join(" "),
                children: [e && (0, s.jsx)("h2", {
                  className: m.calloutHeader,
                  children: j(e)
                }), a && (0, s.jsx)("h3", {
                  className: m.calloutSubheader,
                  children: j(a)
                })]
              }), (0, s.jsxs)("div", {
                className: m.actionBlock,
                children: [P, k && (0, s.jsx)(u, {
                  helperText: k,
                  linkText: h,
                  link: v,
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
        A: () => b
      });
      var s = t(39793),
        r = t(93082),
        n = t(14653),
        i = t(50662),
        o = t(39279),
        c = t(81270),
        d = t(31821);
      const l = {
        active: "rockstargames-sites-gta-gen9fdc2ec652cbb7469f602e73cd10ef997",
        deprecatedCarousel: "rockstargames-sites-gta-gen9a531264d5417d2198d4e14aa72335af1",
        dotsSlide: "rockstargames-sites-gta-gen9b8fd11776fba32f9663bbb6292a5c901",
        hideLarge: "rockstargames-sites-gta-gen9a6c9173aa5a8fe31a062251352a9d711",
        hideMobile: "rockstargames-sites-gta-gen9f3445a74a067bd92ff94b521cb0bdc07",
        imageAreaBg: "rockstargames-sites-gta-gen9dcb2b41007683141579697bb4a8658ba",
        img: "rockstargames-sites-gta-gen9d8e66128b4fef1ea164350cd535e2d68",
        infinite_false: "rockstargames-sites-gta-gen9b85758ee99a52896b94130d002e821c7",
        panorama: "rockstargames-sites-gta-gen9ff63f8addff8d036ca0b65fa495e1653",
        perico: "rockstargames-sites-gta-gen9aa50a9164fd0296b1196d441233cc348",
        renderedWithChildren: "rockstargames-sites-gta-gen9ad7696edafa3086969e7aaece4f09b4f",
        siblings: "rockstargames-sites-gta-gen9f4c50c0daadf81cd292587fcfea1339d",
        "swiper-horizontal": "rockstargames-sites-gta-gen9b823bbff86d38da8cb611a7c3367d8fe",
        "swiper-preloader-spin": "rockstargames-sites-gta-gen9c39b97f81c73d75dc4e013fde14aff18",
        "swiper-scrollbar-disabled": "rockstargames-sites-gta-gen9ee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-vertical": "rockstargames-sites-gta-gen9d29252354bbbfe413678daff5223169d",
        track: "rockstargames-sites-gta-gen9c7c21df4f7f83a73f79dd7913aa87832"
      };
      var m = t(68291),
        g = t(44453);
      const _ = ({
          item: e
        }) => (0, s.jsxs)("div", {
          children: [(0, s.jsx)(g.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, c.default)(l.img, e?.className)
          }), (e?.title || e?.description) && (0, s.jsx)(m.A, {
            item: e
          })]
        }),
        u = ({
          current: e,
          total: a
        }) => (0, s.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": a
          },
          children: (0, s.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        b = ({
          children: e,
          items: a = [],
          style: t = {},
          noInfiniteScroll: g = !1,
          className: b = "",
          renderTemplate: p = "standard",
          text: f,
          customSpaceBetween: k = null,
          centerSlides: h = !0,
          centeredSlidesBounds: v = !1
        }) => {
          const x = (0, d.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [y, j] = (0, r.useState)(0),
            [w, N] = (0, r.useState)(null),
            S = (0, r.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, o.A)()) : null, [e, x]),
            C = e => {
              if (!e) return;
              let a = 0;
              e.pagination.bullets.forEach((e, t) => {
                e.classList.contains("swiper-pagination-bullet-active") && (a = t)
              }), j(a)
            };
          if (!(a && 0 !== a?.length || e)) return null;
          const I = {
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
          return (0, s.jsxs)("div", {
            className: (0, c.default)(l.deprecatedCarousel, l[p], l.infinite_true, e ? l.renderedWithChildren : "", b),
            style: t,
            "data-testid": "carousel",
            children: [(0, s.jsxs)(n.RC, {
              modules: [i.dK, i.Jq],
              pagination: !0,
              a11y: {
                enabled: !0,
                scrollOnFocus: !0
              },
              updateOnWindowResize: !1,
              loop: !1,
              grabCursor: !0,
              centeredSlides: h,
              centerInsufficientSlides: h,
              centeredSlidesBounds: v,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: I,
              onSlideChange: e => {
                C(e)
              },
              onResize: e => {
                null != w && clearTimeout(w);
                const a = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), C(e)
                }, 250);
                N(a)
              },
              children: [(0, s.jsx)("div", {
                className: l.trackWrapper,
                children: (0, s.jsxs)("div", {
                  className: l.track,
                  children: [a?.map(e => (0, s.jsx)(n.qr, {
                    tabIndex: 0,
                    children: (0, s.jsx)(_, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, a) => e && (0, s.jsx)(n.qr, {
                    children: e
                  }, S && S[a]))]
                })
              }), (0, s.jsx)(u, {
                current: y,
                total: e ? e.length : a.length
              })]
            }), (f?.title || f?.description) && (0, s.jsx)(m.A, {
              item: f
            })]
          })
        }
    },
    68291(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(39793),
        r = t(81270),
        n = t(95967),
        i = t(12334),
        o = t(5413);
      const c = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558",
        d = ({
          to: e,
          children: a
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        l = ({
          item: e,
          className: a = ""
        }) => (0, s.jsxs)("div", {
          className: (0, r.default)("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", a),
          children: [e.title && (0, s.jsx)(d, {
            to: e?.href ?? e?.to,
            children: (0, s.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, a) => e?.unorderedList ? (0, s.jsx)(i.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, a) : e?.image ? (0, s.jsx)(n.A, {
            image: e.image,
            className: e?.className
          }, a) : e?.separator ? (0, s.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, s.jsx)(o.A, {})
          }, a) : (0, s.jsx)("p", {
            children: (0, s.jsx)("span", {
              className: c,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, a)) : (0, s.jsx)("span", {
            className: c,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    63218(e, a, t) {
      "use strict";
      t.d(a, {
        YT: () => i,
        lv: () => o,
        Ay: () => c
      });
      var s = t(39793),
        r = t(84173);
      var n = t(81270);
      var i = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        o = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const c = ({
        tagSize: e,
        platform: a,
        className: t = ""
      }) => {
        const {
          src: i,
          alt: o
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
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("img", {
            className: (0, n.default)("rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1", t),
            "data-testid": "platform-tag",
            "data-platform": a,
            "data-tag-size": e,
            src: i,
            alt: "",
            "aria-hidden": !0
          }), (0, s.jsx)(r.s6, {
            children: o
          })]
        })
      }
    },
    44293(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var s = t(39793),
        r = t(93082),
        n = t(42909),
        i = t(13331),
        o = t(42285),
        c = t(82199),
        d = t(38044),
        l = t(59426);
      const m = {
          rating: "rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-sites-gta-gen9babdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-sites-gta-gen9b98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-gta-gen9b6339480b5fd086fb0c025930bfb7dcd"
        },
        g = (0, n.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var _ = t(70386),
        u = t(30433);
      (0, i.importAll)(t(36672));
      const b = (0, l.A)((0, u.g)(({
        descriptors: e = null,
        footer: a = null,
        href: l,
        img: u = null,
        titleSlug: b = null,
        style: p = {},
        className: f,
        ...k
      }) => {
        const [h, v] = (0, r.useState)(!1), {
          inView: x
        } = (0, o.useInView)({
          threshold: .6
        }), [y, j] = (0, r.useState)({
          ratingDescriptors: e,
          ratingFooter: a,
          ratingImg: u,
          ratingUrl: l
        }), {
          track: w
        } = (0, c.useGtmTrack)(), N = (0, n.useIntl)(), {
          data: S
        } = (0, i.useQuery)(_.GameData, {
          variables: {
            titleSlug: b
          },
          skip: !b
        });
        if ((0, r.useEffect)(() => {
            S && j(S?.game)
          }, [S]), (0, r.useEffect)(() => {
            x && !h && y.ratingImg && (w({
              event: "page_section_impression",
              element_placement: "rating"
            }), v(!0))
          }, [x]), !y.ratingImg) return null;
        const C = !!y.ratingDescriptors;
        return (0, s.jsxs)("div", {
          className: [m.rating, C ? m.withDescriptors : m.withOutDescriptors, f || ""].join(" "),
          style: (0, i.safeStyles)(p),
          "data-testid": "rating",
          ...k,
          children: [(0, s.jsx)(d.A, {
            to: y.ratingUrl,
            target: "_blank",
            children: (0, s.jsx)("img", {
              alt: N.formatMessage(g.components_ratings_link_alt, {
                rating: (I = y.ratingImg, I.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${y.ratingImg}`)
            })
          }), C && (0, s.jsxs)("div", {
            className: m.text,
            children: [(0, s.jsx)("p", {
              className: m.descriptors,
              dangerouslySetInnerHTML: {
                __html: y?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), y.ratingFooter && (0, s.jsx)("hr", {}), y.ratingFooter && (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: y.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var I
      }))
    },
    26806(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(39793),
        r = t(38044);
      const n = ({
        disableLink: e,
        className: a,
        "data-testid": t
      }) => {
        const n = e ? "span" : r.A;
        return (0, s.jsx)(n, {
          className: [e ? "rockstargames-sites-gta-gen9b28a6ee32abeb20049b97677a86a4314" : "rockstargames-sites-gta-gen9a3d920a1139575706b914bc3a0100970", a || ""].join(" "),
          "data-testid": t,
          alt: "Rockstar Games Home",
          ...!e && {
            to: "/"
          }
        })
      }
    },
    51550(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        RpCategory: () => d,
        rpCategoryTestIds: () => c
      });
      var s = t(39793),
        r = t(93082),
        n = t(59236);
      var i = t(81270);
      const o = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        c = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        d = (0, r.forwardRef)(function({
          rank: e,
          size: a = "large",
          className: t,
          alt: r,
          testId: d,
          ...l
        }, m) {
          const g = o(e),
            _ = (0, n.mergeProps)(l, {
              className: (0, i.default)("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", t),
              "data-testid": d
            });
          return (0, s.jsxs)("div", {
            "data-size": a,
            ref: m,
            ..._,
            children: [(0, s.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": o(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: g
              })
            }), (0, s.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d9ea5cdf174033003a8670f31ae66a59",
              "data-testid": c.RANK_VALUE,
              children: e
            })]
          })
        })
    },
    68993(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(39793),
        r = t(93082),
        n = t(36416),
        i = t(13331);
      const o = (0, i.withTranslations)(({
        t: e
      }) => {
        const [a] = (0, r.useState)(""), t = (0, n.useNavigate)(), o = (0, i.useMutateState)();
        return (0, s.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-gta-gen9c9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), o({
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
    76862(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(39793),
        r = t(95967),
        n = t(57927);
      const i = {
          badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c"
        },
        o = ({
          wrapper: e,
          children: a,
          role: t,
          splitter: s
        }) => s || t ? e(a) : a,
        c = ({
          badge: e,
          badgeType: a,
          role: c,
          splitter: d
        }) => {
          const l = [];
          return d ? e.split(d).map(e => l.push(e)) : l.push(e), (0, s.jsxs)(o, {
            splitter: d,
            role: c,
            wrapper: e => (0, s.jsx)("div", {
              className: `${i.badge} ${a?i[a]:""} `,
              children: e
            }),
            children: [(0, s.jsx)(s.Fragment, {
              children: c && (0, s.jsx)(r.A, {
                image: {
                  alt: c,
                  desktop: t(65287)(`./${c}.png`)
                }
              })
            }), (0, s.jsx)(n.Root, {
              className: `${d||c?"":i.badge} ${a?i[a]:""}`,
              min: 8,
              max: 1e3,
              mode: d || c ? "single" : "multi",
              children: (0, s.jsx)(n.Text, {
                children: l[0]
              })
            }), (0, s.jsx)(s.Fragment, {
              children: l.shift() && d && l.length >= 1 && (0, s.jsx)(n.Root, {
                min: 8,
                max: 1e3,
                mode: "single",
                children: (0, s.jsx)(n.Text, {
                  children: l.join(" ")
                })
              })
            })]
          }, "badge-wrapper")
        }
    },
    44453(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(39793),
        r = t(93082),
        n = t(13331),
        i = t(81270),
        o = t(76862),
        c = t(95967);
      const d = ({
          hero: e,
          children: a
        }) => e ? (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
          children: a
        }) : a,
        l = ({
          badge: e = null,
          badgeType: a,
          discountTxt: t,
          splitter: l,
          image: m,
          style: g,
          className: _ = "",
          attributes: u = {},
          role: b,
          hero: p = !1
        }) => {
          const f = (0, r.useMemo)(() => {
            if (m?.badge || m?.discountTxt || e || t) return (0, s.jsx)(o.A, {
              badge: m?.discountTxt ?? m?.badge ?? e ?? t,
              badgeType: a,
              splitter: m?.splitter ?? l,
              role: m?.role ?? b
            })
          }, [e, a, t, m, b, l]);
          return (0, s.jsx)(d, {
            hero: p,
            children: (0, s.jsx)("figure", {
              children: (0, s.jsxs)("div", {
                className: (0, i.default)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", p ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", u?.hiddenMobile ? "hiddenMobile" : "", u?.hiddenLarge ? "hiddenLarge" : "", u?.className, _),
                style: (0, n.safeStyles)({
                  ...g,
                  ...u?.style
                }),
                ...u,
                children: [(0, s.jsx)(c.A, {
                  role: m?.accessibleRole,
                  image: m,
                  className: _
                }), f, m?.caption && (0, s.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
                  }
                })]
              })
            })
          })
        }
    },
    2122(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        Avatar: () => p,
        Content: () => f,
        PlatformTag: () => h,
        PlatformTagSizes: () => c.YT,
        Platforms: () => c.lv,
        RankContent: () => x,
        Root: () => b,
        RpCategory: () => y,
        TextContent: () => j,
        TopRow: () => k,
        UserName: () => v
      });
      var s = t(39793),
        r = t(93082),
        n = t(84173),
        i = t(59236),
        o = t(81270),
        c = t(63218),
        d = t(51550),
        l = t(30433),
        m = t(42909);
      const g = (0, m.defineMessages)({
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
        _ = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804",
        u = (0, r.forwardRef)(function({
          children: e,
          className: a,
          testId: t,
          ...r
        }, c) {
          const {
            formatMessage: d
          } = (0, m.useIntl)(), l = (0, i.mergeProps)(r, {
            "data-testid": t,
            className: (0, o.default)("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", a)
          });
          return (0, s.jsxs)("div", {
            ref: c,
            ...l,
            children: [(0, s.jsx)(n.s6, {
              children: d(g.character_card_a11y_intro)
            }), e]
          })
        }),
        b = (0, l.g)(u),
        p = (0, r.forwardRef)(function({
          src: e,
          alt: a,
          testId: n,
          ...o
        }, c) {
          const [d, l] = (0, r.useState)(e), m = (0, i.mergeProps)(o, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": n
          });
          return e ? (0, s.jsx)("div", {
            ref: c,
            ...m,
            children: (0, s.jsx)("img", {
              className: _,
              src: d,
              alt: a ?? "",
              onError: () => l(t(14804)),
              "aria-hidden": !a
            })
          }) : (0, s.jsx)("div", {
            ref: c,
            ...m,
            children: (0, s.jsx)("img", {
              className: _,
              src: t(14804),
              alt: a ?? "",
              "aria-hidden": !a
            })
          })
        }),
        f = (0, r.forwardRef)(function({
          asChild: e,
          testId: a,
          className: t,
          ...r
        }, c) {
          const d = e ? n.DX : "div",
            l = (0, i.mergeProps)(r, {
              className: (0, o.default)("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", t),
              "data-testid": a
            });
          return (0, s.jsx)(d, {
            ref: c,
            ...l
          })
        }),
        k = (0, r.forwardRef)(function({
          children: e,
          testId: a,
          ...t
        }, r) {
          const n = (0, i.mergeProps)(t, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": a
          });
          return (0, s.jsx)("div", {
            ref: r,
            ...n,
            children: e
          })
        }),
        h = ({
          testId: e,
          ...a
        }) => {
          const t = (0, i.mergeProps)(a, {
            "data-testid": e
          });
          return (0, s.jsx)(c.Ay, {
            ...t
          })
        },
        v = (0, r.forwardRef)(function({
          children: e,
          testId: a,
          userName: t,
          ...r
        }, o) {
          const {
            formatMessage: c
          } = (0, m.useIntl)(), d = (0, i.mergeProps)(r, {
            "data-testid": a
          });
          return (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...d,
            ref: o,
            children: [(0, s.jsx)(n.s6, {
              children: c(g.character_card_a11y_player, {
                player: t
              })
            }), (0, s.jsx)("div", {
              "aria-hidden": !0,
              children: e
            })]
          })
        }),
        x = (0, r.forwardRef)(function({
          testId: e,
          children: a,
          ...t
        }, r) {
          const n = (0, i.mergeProps)(t, {
            "data-testid": e
          });
          return (0, s.jsx)("div", {
            ...n,
            ref: r,
            children: a
          })
        }),
        y = ({
          testId: e,
          ...a
        }) => {
          const {
            formatMessage: t
          } = (0, m.useIntl)(), r = (0, i.mergeProps)(a, {
            "data-testid": e
          });
          return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(n.s6, {
              children: t(g.character_card_a11y_rank, {
                rank: a.rank
              })
            }), (0, s.jsx)(d.RpCategory, {
              ...r,
              "aria-hidden": !0
            })]
          })
        },
        j = (0, r.forwardRef)(function({
          asChild: e,
          children: a,
          testId: t,
          ...r
        }, o) {
          const c = e ? n.DX : "div",
            d = (0, i.mergeProps)(r, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": t
            });
          return (0, s.jsx)(c, {
            ref: o,
            ...d,
            children: a
          })
        })
    },
    1e4(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(39793),
        r = t(81270),
        n = t(38044);
      const i = {
          button: "rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c"
        },
        o = ({
          className: e = "",
          children: a,
          context: t = "",
          to: o,
          onClick: c,
          target: d = "_self",
          ...l
        }) => {
          const m = (0, r.default)(i.button, i[t], e);
          return o ? (0, s.jsx)(n.A, {
            ...l,
            to: o,
            className: m,
            onClick: c,
            target: d,
            children: a
          }) : (0, s.jsx)("button", {
            ...l,
            type: "button",
            className: m,
            onClick: c,
            children: a
          })
        }
    },
    41926(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(45966),
        r = t(99800);
      const n = (e = {
        parent: "",
        post: null
      }) => ({
        name: "listItem",
        label: "List Item",
        component: "group",
        fields: [(0, s.om)(e), (0, s.z9)({
          name: "content",
          label: "Content",
          component: "text",
          initialValues: ""
        }), (0, s.sE)(e)],
        defaultItem: () => (0, s.Q)({
          content: ""
        }),
        itemProps: e => (0, s.Rv)(e, {
          label: (0, r._e)(`${e?.name??e?.[s.Qw]?.content??"New"} [List Item]`)
        })
      })
    },
    28851(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(39793),
        r = t(93082),
        n = t(50062),
        i = t.n(n),
        o = t(13331),
        c = t(81270);
      const d = {
          blue: "rockstargames-sites-gta-gen9bffe0939bda9e26ad14f6b01669338a8",
          custom: "rockstargames-sites-gta-gen9cc2c26a3dd80cf9db62c4c7f389b7859",
          darkBlue: "rockstargames-sites-gta-gen9e2b6f722952b5d61d2a3b725166bfc9b",
          darkRed: "rockstargames-sites-gta-gen9d44e2fc53f269ccf2b8fbe032ef6cec9",
          goldenrod: "rockstargames-sites-gta-gen9a365c5895cfd6c9f94fc994d71ba402c",
          green: "rockstargames-sites-gta-gen9f9c1eebf59650cd8ee84191d8fc62874",
          grid: "rockstargames-sites-gta-gen9be627ae18a7bd3cff72d3f11aeed67df",
          gtao: "rockstargames-sites-gta-gen9ffaf58c543b36fd7fb4efec24b3564bc",
          gtaplus: "rockstargames-sites-gta-gen9fbf343ed03c1bd513ea4cadc9726af76",
          hotPink: "rockstargames-sites-gta-gen9edb9998d6516a5aa1aece9c07c1768be",
          itemList: "rockstargames-sites-gta-gen9d9620ae764026da5584e0f0a5886c992",
          noImg: "rockstargames-sites-gta-gen9bbb7247d5d7a836d755491e85639f1a3",
          pillBtn: "rockstargames-sites-gta-gen9c1ed14af6fceaba7c99728a81676dd92",
          purple: "rockstargames-sites-gta-gen9e61db4af0805bb4c9bf820c26ac8a85f",
          rdo: "rockstargames-sites-gta-gen9b2194fe129aa210950dcb07b88a28c13",
          red: "rockstargames-sites-gta-gen9f674d6037f10af1a1fe41a83c1e5da17",
          selected: "rockstargames-sites-gta-gen9e49b5a5fd4ab934ece172fffe9f6577e",
          skull: "rockstargames-sites-gta-gen9b2a1c0b367b250fe0606dffece9e1c02",
          teal: "rockstargames-sites-gta-gen9a379d41268f4f002d5ac257f67461f1d",
          turquoise: "rockstargames-sites-gta-gen9e211b0b8ae00897d696af259b3ddd837",
          yellow: "rockstargames-sites-gta-gen9ce372826eac3cc73094d69c0c5d9a530"
        },
        {
          sanitize: l
        } = i(),
        m = ({
          list: e,
          string: a,
          starColor: t,
          style: n,
          className: i,
          game: m,
          noImg: g,
          columns: _,
          mobileColumns: u
        }) => {
          const [b, p] = (0, r.useState)(null);
          if ((0, r.useEffect)(() => {
              p(e)
            }, [e]), !a && !e) return null;
          const f = {
            color: n?.color
          };
          return delete n?.color, _ && b ? (0, s.jsx)("div", {
            className: d.grid,
            style: {
              "--ordered-list-grid-column": _,
              "--ordered-list-grid-column-mobile": u ?? _
            },
            children: (0, s.jsx)("ol", {
              className: (0, c.default)(d.itemList, d.noImg, d[t], d[m]),
              style: (0, o.safeStyles)(n),
              children: b.map(e => (0, s.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: l(e.content)
                },
                style: f
              }, e.content))
            })
          }) : (0, s.jsx)("ol", {
            style: (0, o.safeStyles)(n),
            className: (0, c.default)(d.itemList, d.custom, g ? d.noImg : "", t ? d[t] : "", m ? d[m] : "", i ?? ""),
            children: e.map(e => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e?.content ?? e)
              }
            }, e?.content))
          })
        }
    },
    5413(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(39793);
      const r = {
          gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b"
        },
        n = ({
          style: e,
          className: a = "",
          type: t = ""
        }) => (0, s.jsx)("div", {
          style: e,
          className: [r.hr, r[t], a].join(" ")
        })
    },
    14159(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(39793),
        r = t(93082),
        n = function(e) {
          return e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e
        }({}),
        i = t(57208),
        o = t(60982);
      class c extends r.Component {
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
          (0, i.ZQ)({
            category: "ErrorBoundary",
            message: e.message || "E399 triggered",
            data: {
              error: e,
              errorInfo: a
            }
          }), (0, i.wd)("ErrorBoundary", n.Error)
        }
        render() {
          return null !== this.state.error.code ? (0, s.jsx)(o.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const d = (e, a = null) => {
        const t = t => (0, s.jsx)(c, {
          header: a,
          children: (0, s.jsx)(e, {
            ...t
          })
        });
        return t.displayName = `withSearchbarErrorBoundary(${e.displayName||e.name||"Component"})`, t
      }
    },
    60982(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(39793),
        r = t(93082),
        n = t(42909),
        i = t(38044),
        o = t(68993);
      const c = (0, n.defineMessages)({
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
          } = (0, n.useIntl)();
          let d = e?.message ?? t(c.wasted_error_404_new);
          d = t(c.wasted_error_404_new);
          const l = e?.code ?? 398,
            m = (0, r.useRef)(null);
          return (0, r.useEffect)(() => {
            m && m?.current && m.current.focus()
          }, [m]), (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9d0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, s.jsx)("h3", {
              tabIndex: -1,
              ref: m,
              children: `${d} (${l})`
            }), (0, s.jsx)(i.A, {
              to: "/",
              reloadDocument: !1,
              children: t(c.wasted_home)
            }), "clr" !== a && (0, s.jsx)(o.A, {})]
          })
        }
    },
    95967(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(39793),
        r = t(25993),
        n = t(13331);
      const i = ({
          alt: e,
          className: a,
          src: r,
          role: i,
          style: o
        }) => {
          const [c, d] = (0, n.usePreloadImg)(r);
          let l = r;
          !1 === c && (l = t(9333));
          const {
            width: m,
            height: g
          } = d, _ = {
            "--aspect-ratio": Number.isNaN(m / g) ? "" : m / g,
            ...o
          };
          return (0, s.jsx)("img", {
            src: l,
            className: a ?? "",
            alt: e,
            style: _,
            role: i
          })
        },
        o = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f",
        c = ({
          className: e,
          style: a = {},
          image: c = {},
          imageStyle: d = {},
          role: l = "img"
        }) => {
          let {
            alt: m,
            src: g
          } = (0, r.S1)(c);
          const {
            isMobile: _
          } = (0, n.useWindowResize)(), u = _ ? g.imageMobileStyle : g.imageDesktopStyle;
          g.desktop || g.mobile || (m = "", g = {
            mobile: t(28839),
            desktop: t(9333)
          });
          let b = c.frame ? `${c.frame} ${o}` : o;
          return (0, s.jsx)("div", {
            className: b,
            style: a,
            children: (0, s.jsx)(i, {
              style: {
                ...d,
                ...c?.style,
                ...u
              },
              src: _ ? g.mobile || g.desktop : g?.desktop || g?.mobile,
              alt: m,
              role: l,
              className: e
            })
          })
        }
    },
    46775(e, a, t) {
      "use strict";
      t.d(a, {
        Z: () => p,
        h: () => b
      });
      var s = t(39793),
        r = t(93082),
        n = t(13331),
        i = t(36416),
        o = t(79955),
        c = t.n(o),
        d = t(13517),
        l = t(82199),
        m = t(81270);
      const g = ({
          modal: e
        }) => {
          const {
            content: a,
            className: t,
            height: n,
            onClose: o,
            rect: g = {
              left: 0,
              top: 0
            },
            contentStyle: _ = {},
            contentClassName: u = "",
            width: b,
            fadeIn: p = !0,
            cardIds: f,
            activeId: k,
            theme: h,
            title: v,
            gtm: x = {},
            aspectRatio: y = "default",
            cardDimensions: j
          } = e, {
            left: w,
            top: N
          } = g, S = f?.indexOf(k), [C, I] = (0, r.useState)(f?.length || 0), {
            track: T
          } = (0, l.useGtmTrack)(), E = null !== f && (f?.length || 0) > 1 && ("flag_bg" === h || "fob" === j?.size), z = window.location.href.includes("cms5"), [A, P] = (0, i.useSearchParams)(), [L, M] = (0, r.useState)(!1), [R, D] = (0, r.useState)(!1), [V, O] = (0, r.useState)(), B = e => {
            "number" == typeof e && f && e < f.length && e > -1 && P({
              info: f[e].toString()
            })
          }, $ = () => {
            const e = "number" == typeof S && S > -1 ? S - 1 : 0;
            B(e), T({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: v?.toLowerCase(),
              position: S
            })
          }, G = () => {
            const e = "number" == typeof S && S > -1 ? S + 1 : 0;
            B(e), T({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: v?.toLowerCase(),
              position: S
            })
          };
          (0, r.useEffect)(() => {
            I(f?.length || 0)
          }, [f?.length]), (0, r.useEffect)(() => {
            null !== S && null !== f && B(S)
          }, [S, f]), (0, r.useEffect)(() => {
            const e = f?.findIndex(e => e === k);
            "number" == typeof e && (D(e <= 0), M(e >= C - 1))
          }, [f, k, C, A]);
          const [F] = (0, r.useState)({
            y: N,
            x: w,
            top: 0,
            left: 0,
            width: b,
            height: n,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: E ? "0" : ""
          }), H = {
            opacity: 1
          }, U = (0, r.useRef)(null), q = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, W = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [K] = (0, r.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: E ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: q,
              y: q,
              top: q,
              left: q,
              width: q,
              height: q,
              border: q,
              background: {
                delay: .3
              }
            }
          }), [Y, X] = (0, r.useState)({
            initial: F,
            shown: K
          });
          (0, r.useEffect)(() => {
            X({
              initial: F,
              shown: K
            })
          }, [F, K]), (0, r.useEffect)(() => {
            const e = e => {
              "function" == typeof o && "Escape" === e.key && (o(), T({
                event: "modal_close",
                element_placement: v?.toLowerCase(),
                ...x
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }, []);
          const Z = () => {
              "function" == typeof o && (o(), T({
                event: "modal_close",
                element_placement: v?.toLowerCase(),
                ...x
              }))
            },
            J = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const s = e.children[t];
                if (s.scrollHeight > s.clientHeight) return s;
                const r = J(s, a - 1);
                if (r) return r
              }
              return null
            },
            Q = e => {
              if (ae?.current?.children) {
                let a;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a;
                      return V?.queried ? a = V.element : (a = J(e, 2), O({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = p ? 0 : 1,
            ae = (0, r.useRef)(null),
            te = (0, s.jsx)(d.motion.button, {
              className: "rockstargames-sites-gta-gen9f462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: W,
              onClick: () => {
                Z()
              },
              onKeyDown: Q,
              onKeyUp: Q
            }),
            se = Boolean(v),
            re = z ? r.Fragment : c();
          return (0, r.useMemo)(() => (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9a1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": E,
            "data-aspect-ratio": y,
            children: (0, s.jsx)(re, {
              children: (0, s.jsxs)("div", {
                id: "modal",
                "data-testid": "modal",
                "aria-modal": "true",
                "aria-label": se ? v : void 0,
                role: "dialog",
                children: [(0, s.jsx)(d.motion.div, {
                  className: "rockstargames-sites-gta-gen9cf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: H,
                  transition: q,
                  onClick: () => Z()
                }), E && (0, s.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9d5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, s.jsxs)(d.motion.div, {
                    className: "rockstargames-sites-gta-gen9dbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: W,
                    children: [(0, s.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: $,
                      disabled: R,
                      onKeyDown: Q,
                      onKeyUp: Q
                    }), (0, s.jsxs)("div", {
                      className: "rockstargames-sites-gta-gen9e316695281c4c56337307741bda1371f",
                      "data-theme": h,
                      children: [" ", (S ?? 0) + 1, (0, s.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9c1ee424eae15f7b789c86e634df9e28d"
                      }), f?.length, " "]
                    }), (0, s.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: G,
                      disabled: L,
                      onKeyDown: Q,
                      onKeyUp: Q,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, s.jsx)(d.motion.div, {
                  className: "rockstargames-sites-gta-gen9e708da42918d8bbff9a8e1a36a2c4366",
                  ref: U,
                  initial: "initial",
                  animate: "shown",
                  variants: Y,
                  transition: q,
                  style: _,
                  children: (0, s.jsxs)(d.motion.div, {
                    className: (0, m.default)("rockstargames-sites-gta-gen9a7d77f83f629e9ae93f6934c8ba007b0", t),
                    children: [!E && te, (0, s.jsx)(d.motion.div, {
                      className: (0, m.default)("rockstargames-sites-gta-gen9f26fc1babb8dd1284d4c03b3dabff714", u),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: W,
                      ref: ae,
                      children: a
                    })]
                  })
                })]
              })
            })
          }), [a, S, _])
        },
        _ = [{}, () => {}],
        u = (0, n.setContextItem)({
          context: (0, r.createContext)(_),
          key: "modalContext"
        }),
        b = () => (0, r.useContext)(u),
        p = ({
          children: e
        }) => {
          const [a, t] = (0, r.useState)(), {
            setBodyIsLocked: i
          } = (0, n.useBodyScrollable)("ModalProvider"), o = (0, r.useMemo)(() => a?.content ? (0, s.jsx)(g, {
            modal: a
          }) : null, [a]), c = () => i(!1);
          return (0, r.useEffect)(() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          }), []), (0, r.useEffect)(() => {
            i(!!o)
          }, [o]), (0, s.jsx)(u.Provider, {
            value: [o, t],
            children: e
          })
        }
    },
    47279(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d,
        C: () => o
      });
      var s = t(54028),
        r = t.n(s),
        n = t(15963),
        i = t.n(n);
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        c = [{
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
        d = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = c.findIndex(a => Object.entries(a.sites).findIndex(([a, s]) => s === t && (e = {
            site: a,
            subDomain: s
          }, !0)) >= 0), n = c[s >= 0 ? s : 0], o = c.find(e => e.id === n.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), i()(r()({}, o, {
            currentSite: e
          }, n), "fallbackEnvironment")
        }
    },
    77678(e, a, t) {
      "use strict";
      t.d(a, {
        F: () => s
      });
      const s = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    32118(e, a, t) {
      "use strict";
      t.d(a, {
        t: () => n
      });
      var s = t(42909),
        r = t(39991);
      const n = async ({
        service: e,
        returnUrl: a,
        pingBearer: t
      }) => {
        const [{
          iso: n
        }] = (0, s.getLocale)(), {
          authHost: i,
          clientId: o
        } = (0, r.A)(), c = await t(), d = new URL(`tpa/${e}/link`, `https://${i}.rockstargames.com`);
        return d.searchParams.append("cid", o), d.searchParams.append("lang", n), d.searchParams.append("returnUrl", a ?? window.location.pathname), c && "boolean" != typeof c && "string" == typeof c.bearerToken && d.searchParams.append("accessToken", c.bearerToken), d
      }
    },
    39991(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      const s = window?.env?.sc,
        r = window?.env?.marketing,
        n = ({
          apiHost: e,
          authHost: a,
          clientId: t,
          cms: n,
          graphEnv: i,
          queryManifest: o,
          scHost: c,
          hostname: d,
          cdnBase: l,
          key: m,
          marketingAuthTLD: g
        }) => {
          const _ = s?.apiHost ?? e,
            u = s?.authHost ?? a,
            b = s?.cdnBase ?? l,
            p = s?.clientId ?? t,
            f = r?.marketingAuthTLD ?? g,
            k = s?.scHost ?? c,
            h = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${_}.rockstargames.com`,
            graphEnv: s?.graphEnv ?? i,
            host: k,
            hostname: d,
            cdnBase: b,
            key: m,
            clientId: p,
            cms: `https://${n}.rockstargames.com/graphql`,
            authHost: u,
            queryManifest: o,
            scBase: `https://${k}.rockstargames.com/`,
            login: `https://${u}.rockstargames.com/connect/authorize/${p}`,
            silentCheck: `https://${u}.rockstargames.com/connect/cors/check/${p}`,
            signup: `https://${u}.rockstargames.com/create/?cid=${p}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${h}`,
            authCookieName: "BearerToken"
          }
        },
        i = [n({
          key: "prod",
          clientId: "rsg",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), n({
          key: "sc-prod",
          clientId: "socialclub",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        o = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const a = i.find(({
              key: a
            }) => a === e) ?? null;
            if (a) return a
          }
          return i.find(({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname)) || i[0]
        }
    },
    99800(e, a, t) {
      "use strict";
      t.d(a, {
        OD: () => i,
        lv: () => o,
        wC: () => r,
        PE: () => h,
        rB: () => d,
        tC: () => u.t,
        yh: () => k,
        Ap: () => g,
        Xs: () => v,
        kx: () => x,
        rJ: () => j,
        pT: () => b,
        lV: () => y,
        PA: () => s,
        My: () => _,
        _e: () => p
      }), t(39793), t(69646);
      const s = ({
          element: e
        }) => {
          const a = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            t = e => {
              e.target === document && (clearInterval(a), document.removeEventListener("scroll", t))
            };
          document.addEventListener("scroll", t)
        },
        r = ({
          paramName: e = "section"
        } = {}) => {
          const a = new URLSearchParams(document.location.search),
            t = document.getElementById(a.get(e) || e);
          t && (s({
            element: t
          }), n(t))
        },
        n = e => {
          const a = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (a.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const t = e?.querySelectorAll(a.join(", "));
            if (t?.length) {
              const e = [...t].find(e => !e?.hasAttribute("disabled"));
              e?.focus()
            }
          }
        };
      class i {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, a, t, s, r = null, n = null) {
          this.name = e, this.friendlyName = a, this.id = t, this.onlineService = s, this.aliasOnlineService = r, this.alias = n
        }
      }
      const o = Object.freeze({
          pc: new i("pc", "PC Legacy", 8, "sc"),
          ps: new i("ps", "PlayStation", 3, "np", "ps"),
          ps3: new i("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new i("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new i("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new i("xbox", "Xbox", 4, "xbl"),
          xbox360: new i("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new i("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new i("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new i("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new i("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new i("applestore", "App Store", 102, "applestore"),
          googleplay: new i("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new i("app_store", "App Store", 102, "applestore"),
          googlePlay: new i("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new i("pcalt", "PC Enhanced", 22, "sc")
        }),
        c = Object.freeze(Object.values(o));

      function d(e) {
        if (!e) return;
        if (e instanceof i) return e;
        const a = e.toString().toLowerCase();
        return c.find(e => a === e.name || a === e.id.toString() || a === e.friendlyName.toLowerCase() || a === e.onlineService?.toLowerCase() || a === e.aliasOnlineService?.toLowerCase() || a === e.alias?.toLowerCase())
      }
      var l = t(23058),
        m = t(77678);
      const g = e => {
          const a = document.cookie.split("; "),
            t = `${e}=`,
            s = a.find(e => e.startsWith(t)),
            r = s?.substring(t.length, s.length);
          return r
        },
        _ = (e, a) => {
          e && void 0 !== a && (0, l.canStoreCookie)(e) && g(e) !== a && (document.cookie = `${e}=${a}; domain=${(0,m.F)()}; path=/;`)
        };
      var u = t(32118);
      const b = e => e.keys().forEach(e),
        p = e => e.replace(/(<([^>]+)>)/gi, ""),
        f = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        k = (e = !0) => f.filter(a => a.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        h = e => {
          e.preventDefault();
          const a = e.currentTarget.href,
            t = (e => {
              const a = new URL(e).pathname.split("/"),
                t = a[a.length - 1];
              return decodeURIComponent(t)
            })(a);
          fetch(a, {
            method: "GET",
            headers: {}
          }).then(e => e.arrayBuffer()).then(e => {
            const a = window.URL.createObjectURL(new Blob([e])),
              s = document.createElement("a");
            s.href = a, s.setAttribute("download", t), document.body.appendChild(s), s.click(), document.body.removeChild(s)
          }).catch(e => {
            console.log(e)
          })
        },
        v = () => [o.xbox360.name, o.xboxone.name, o.ps3.name, o.ps4.name, o.pc.name],
        x = () => [o.xboxsx.name, o.ps5.name, o.pcalt.name],
        y = e => x().includes(e),
        j = e => {
          const a = new Map([
            ["en-us", "English (United States)"],
            ["de-de", "Deutsch (Deutschland)"],
            ["fr-fr", "Français (France)"],
            ["fr-ca", "Français (Canada)"],
            ["it-it", "Italiano (Italia)"],
            ["ja-jp", "日本語"],
            ["ru-ru", "Pусский"],
            ["es-es", "Español (España)"],
            ["es-mx", "Español (México)"],
            ["pt-br", "Português (Brasil)"],
            ["ko-kr", "한국어"],
            ["zh-hans", "中文（简体）"],
            ["zh-hant", "中文（繁體）"],
            ["pl-pl", "Polski"]
          ]);
          return a.has(e) ? a.get(e) : e
        }
    },
    12098(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        componentsForTinaParser: () => wn,
        componentsForTinaParserGuide: () => Nn
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => cs,
        Link: () => ds
      });
      var r = {};
      t.r(r), t.d(r, {
        A: () => fa.A,
        AlertDialog: () => Q,
        AudioPlayer: () => Za,
        Badge: () => Pe,
        Brands: () => V.A,
        Button: () => Ba.A,
        ButtonGroup: () => O.A,
        CalloutSection: () => d.A,
        Carousel: () => l.A,
        CharacterCard: () => Ja,
        ConditionalBlock: () => h,
        CookieAB: () => rt,
        CountryInputField: () => tt,
        Cta: () => v.A,
        DescriptionArea: () => ot.A,
        DiscountsBadge: () => ct.A,
        DotLoader: () => lt,
        Dropdown: () => ut,
        Embed: () => pt,
        ExpandingPlatformButton: () => S.A,
        FadeInContent: () => kt,
        FoundryButton: () => w,
        FoundryIconButton: () => N,
        Gen9Button: () => ve.A,
        Gen9CoreCarousel: () => L.A,
        Grid: () => T,
        HTMLElement: () => U,
        Hero: () => G,
        HookStore: () => p,
        ImageTextGroup: () => nt.A,
        ImageTextGroupGroup: () => it.A,
        ImageWithBadge: () => he.A,
        LayeredImage: () => xt,
        Lightbox: () => yt,
        LoadingAnimation: () => X.A,
        MultiSourceImage: () => Sa.A,
        NewswireBlocks: () => Rt,
        NewswireCard: () => Tt,
        NewswireList: () => At,
        NewswireRelated: () => Lt,
        NewswireTag: () => Ct,
        OrderedList: () => le.A,
        Paging: () => Ot,
        ParallaxCacheBuster: () => be,
        ParallaxInnerLayer: () => ge,
        ParallaxOuterLayer: () => ue,
        ParallaxWrapper: () => fe,
        PlatformTag: () => Ns.Ay,
        PromoModule: () => je,
        Rating: () => we.A,
        ResponsiveFlexBox: () => $t,
        ResponsiveFlexItem: () => Ft,
        ResponsiveGridBox: () => Ut,
        ResponsiveGridItem: () => Wt,
        ResponsiveImg: () => Yt,
        ResponsiveSection: () => Zt,
        RockstarLogo: () => Y.A,
        RpCategory: () => ws,
        SafeHtml: () => Qt,
        ScrollSection: () => es.A,
        ScrollToTop: () => as,
        ScrollTracker: () => Ae,
        SearchBox: () => ts.A,
        Separator: () => ss.A,
        SrcsetImage: () => wt,
        StorybookWrapper: () => rs,
        TextFit: () => ns,
        ThumbsGallery: () => La,
        TinaModuleFetchNRender: () => Ie.A,
        TinaWrapper: () => is,
        TrackList: () => Na,
        UnorderedList: () => ke.A,
        UserVote: () => Ce,
        VideoCard: () => s,
        VideoCarousel: () => gs,
        VideoList: () => hs,
        VisuallyHidden: () => vs,
        Wasted: () => xs.A,
        framer: () => Te,
        useTinaModuleFetchByIds: () => Ie.X,
        withSearchbarErrorBoundary: () => ys.A,
        withSimpleErrorBoundary: () => js.A
      });
      var n = {};
      t.r(n), t.d(n, {
        applestore: () => hr,
        googleplay: () => vr,
        left: () => xr,
        pc: () => yr,
        pcalt: () => jr,
        ps: () => wr,
        ps3: () => Nr,
        ps4: () => Sr,
        ps5: () => Cr,
        right: () => Ir,
        switch: () => Tr,
        x: () => Er,
        xbox: () => zr,
        xboxone: () => Ar,
        xboxseriesxs: () => Pr
      });
      var i = {};
      t.r(i), t.d(i, {
        Actions: () => Gr,
        Badge: () => $r,
        Button: () => qr,
        Container: () => Rr,
        Content: () => Or,
        Description: () => Hr,
        Disclaimer: () => Ur,
        Footer: () => Vr,
        Header: () => Dr,
        Heading: () => Fr,
        Image: () => Br,
        LinkPSButton: () => Yr,
        LinkXBoxButton: () => Kr,
        Loading: () => Xr,
        PlatformButton: () => Wr,
        Root: () => Mr,
        RootContext: () => Lr
      });
      var o = t(31879),
        c = t.n(o),
        d = t(30489),
        l = t(75138),
        m = t(39793),
        g = t(93082),
        _ = t(36416),
        u = t(13331),
        b = t(82199);
      const p = (0, t(54472).FF)(),
        f = e => e.some(e => !e),
        k = ({
          condition: e = null,
          children: a
        }) => {
          const [t, s] = (0, g.useState)(!1), r = (e => {
            const [a] = (0, _.useSearchParams)(), [t, s] = (0, g.useState)(null), r = (0, b.useRockstarUser)(), {
              loggedIn: n,
              data: i
            } = r, {
              hasGtaPlus: o
            } = i ?? {};
            return (0, g.useEffect)(() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              p.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach(e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (f(r)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    r.push(!0 === n);
                    break;
                  case "user:not:loggedIn":
                    r.push(!1 === n);
                    break;
                  case "user:is:gtaPlus":
                    r.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    r.push(!1 === o || void 0 === o);
                    break;
                  default:
                    r.push(!1)
                }
                return null
              }), s(!f(r)), () => {}
            }, [a, e, o, r, n]), t
          })(e);
          return (0, g.useEffect)(() => {
            s(r)
          }, [r]), (0, g.useMemo)(() => t ? a : null, [t])
        },
        h = (0, u.withTranslations)(({
          children: e
        }) => g.Children.map(g.Children.toArray(e), e => (0, m.jsx)(k, {
          ...e?.props
        })));
      var v = t(72538),
        x = t(59236),
        y = t(31655),
        j = t(85624);
      const w = (0, g.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          label: t,
          href: s,
          target: r,
          justifySelf: n = "center",
          ...i
        }, o) {
          const c = (0, j.m)(a, "normal"),
            d = (0, x.mergeProps)({
              "data-testid": e,
              className: c
            }, i);
          return (0, m.jsx)(y.Button, {
            ref: o,
            ...d,
            asChild: !0,
            children: (0, m.jsx)(_.Link, {
              to: s,
              target: r,
              style: {
                justifySelf: n
              },
              children: t
            })
          })
        }),
        N = (0, g.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          href: t,
          target: s,
          justifySelf: r = "center",
          ...n
        }, i) {
          const o = (0, j.m)(a, "normal"),
            c = (0, x.mergeProps)({
              "data-testid": e,
              className: o
            }, n);
          return (0, m.jsx)(y.IconButton, {
            ref: i,
            ...c,
            asChild: !0,
            children: (0, m.jsx)(_.Link, {
              to: t,
              target: s,
              style: {
                justifySelf: r
              }
            })
          })
        });
      var S = t(11251),
        C = t(25993),
        I = t(81270);
      const T = ({
        children: e,
        context: a = null,
        game: t,
        image: s = {},
        style: r = {},
        template: n = null,
        theme: i = null,
        reversedOnMobile: o = !1,
        className: c = "",
        id: d = null
      }) => {
        const l = (0, C.S1)(s ?? {}),
          g = {
            ...r
          };
        if (l?.src?.desktop) {
          const e = (s?.style && s?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (s?.style && s?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (g.background = `url(${l?.src?.desktop}) ${a} ${t}`, s?.style && s?.style["--linear-gradient"]) g.background = `linear-gradient(${s?.style["--linear-gradient"]}), url(${l?.src?.desktop}) ${a} ${t}`;
          else if (s?.style && s?.style["--gradient-height"]) {
            const e = s?.style["--gradient-height"] || "3",
              r = s?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              n = s?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            g.background = `linear-gradient(180deg, ${r}, transparent ${e}%, transparent ${100-e}%, ${n}), url(${l?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, m.jsx)("div", {
          id: d,
          className: (0, I.default)("rockstargames-sites-gta-gen9da87ead760b989fbe90a0b89c60b0653", o ? "rockstargames-sites-gta-gen9dfbda195073626bc6a7690dc73fba873" : "", c),
          "data-game": "community" === n ? null : t,
          style: (0, u.safeStyles)(g),
          "data-context": a,
          "data-template": n,
          "data-theme": i,
          children: e
        })
      };
      var E = t(13517),
        z = t(17301);
      const A = {
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
        P = {
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
        };
      var L = t(35236);
      const M = {
          background: "rockstargames-sites-gta-gen9c8c90210c344650ad11d2d97258dcaab",
          btnText: "rockstargames-sites-gta-gen9e8ca7c699fe44c30cf4e542ee8b22119",
          buttonGroup: "rockstargames-sites-gta-gen9b8a0dc337c7ea835340f88b0f6d14822",
          content: "rockstargames-sites-gta-gen9e4bb4024fb4b167423f58e02e471bf5e",
          ctaBlock: "rockstargames-sites-gta-gen9c3f1f785f5adb5cfcbf93195e21521e6",
          descriptions: "rockstargames-sites-gta-gen9a54e628f4898aed20e45ad8a5e39af7f",
          gradient: "rockstargames-sites-gta-gen9d074051a93eac66cd56c616c8ccd4c91",
          hero: "rockstargames-sites-gta-gen9dccb6453f49a8e81c4ec407c39df4c79",
          images: "rockstargames-sites-gta-gen9d5fdc650fc4f2f7441ce7c563ae9653e",
          layered: "rockstargames-sites-gta-gen9c58f0111e3765dc6116481764d0431d0",
          legalText: "rockstargames-sites-gta-gen9bdbadc8b5ef295a4122905fffdde18f6",
          pillBtn: "rockstargames-sites-gta-gen9b89f190ffa4d32a33304ffa4b5ff73df",
          primaryBtn: "rockstargames-sites-gta-gen9d273ee25efe0a98d789db801a1a18e97",
          secondaryBtn: "rockstargames-sites-gta-gen9af112e1264860cebe9be5f542d47ec27",
          selected: "rockstargames-sites-gta-gen9b5c12cc9810c7b3774102378f71714a1",
          shardsCarousel: "rockstargames-sites-gta-gen9cd8c6fbe5139a661c2e52e9df726ca78",
          verticalCtaBlock: "rockstargames-sites-gta-gen9de8ee9092175484396cd56d19aec7cbd"
        },
        R = ({
          title: e = "",
          mobileImg: a,
          desktopImg: t
        }) => {
          const s = (0, z.useGetCdnSource)(a ?? null),
            r = (0, z.useGetCdnSource)(t ?? s);
          return (0, m.jsx)("div", {
            className: M.shard,
            style: {
              "--background-image-mobile": `url(${s})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, m.jsx)("h5", {
              children: e
            })
          })
        },
        D = ({
          title: e = "Membership Rewards",
          name: a = "Membership Rewards",
          shards: t
        }) => {
          const [s, r] = (0, g.useState)(null);
          return (0, g.useEffect)(() => {
            t && r(t.reduce((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: r,
                desktop: n
              } = s;
              return e.push((0, m.jsx)(R, {
                title: t,
                mobileImg: r?.full_src,
                desktopImg: n?.full_src
              })), e
            }, []))
          }, [t]), s ? (0, m.jsx)("div", {
            className: M.shardsCarousel,
            children: (0, m.jsx)(L.A, {
              title: e,
              name: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        };
      var V = t(34242),
        O = t(39707);
      const B = ({
          animated: e = !1,
          ctas: a = [],
          expandingButtonLabel: t = "Subscribe"
        }) => {
          const [s, r] = (0, g.useState)([]), [n, i] = (0, g.useState)([]);
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
            r(e), i(t)
          }, [a]), s.length ? (0, m.jsx)(E.motion.div, {
            variants: e ? P : void 0,
            children: (0, m.jsx)(S.A, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: s,
              children: !!n.length && (0, m.jsx)(E.motion.div, {
                variants: P,
                children: (0, m.jsx)(O.A, {
                  buttons: n,
                  className: M.buttonGroup
                })
              })
            })
          }) : (0, m.jsx)(m.Fragment, {
            children: !!n.length && (0, m.jsx)(E.motion.div, {
              variants: P,
              children: (0, m.jsx)(O.A, {
                buttons: n,
                className: M.buttonGroup
              })
            })
          })
        },
        $ = ({
          animated: e = !1,
          brands: a = [],
          cta: t = [],
          ctas: s = [],
          description: r = "",
          expandingButtonLabel: n = "Subscribe",
          legalText: i,
          stackButtons: o,
          title: c = ""
        }) => (0, m.jsxs)(E.motion.div, {
          className: M.content,
          initial: "hidden",
          animate: "visible",
          variants: e ? A : void 0,
          children: [(0, m.jsx)(E.motion.div, {
            variants: e ? P : void 0,
            children: (0, m.jsx)(V.A, {
              brands: a
            })
          }), (c || r) && (0, m.jsxs)(E.motion.div, {
            className: M.descriptions,
            variants: e ? P : void 0,
            children: [c && (0, m.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: c
              }
            }), r && (0, m.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: r
              }
            })]
          }), !!t.length && (0, m.jsx)("div", {
            className: o ? M.verticalCtaBlock : M.ctaBlock,
            children: (0, m.jsx)(z.TinaParser, {
              components: {
                Cta: v.A,
                ExpandingPlatformButton: S.A
              },
              tina: {
                payload: {
                  content: t
                }
              }
            })
          }), !!s.length && (0, m.jsx)("div", {
            className: M.ctaBlock,
            children: (0, m.jsx)(B, {
              animated: e,
              ctas: s,
              expandingButtonLabel: n
            })
          }), i && (0, m.jsx)(E.motion.div, {
            className: M.legalText,
            variants: e ? P : void 0,
            children: (0, m.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: i
              }
            })
          })]
        }),
        G = ({
          animated: e = !1,
          backgroundImage: a,
          brands: t = [],
          className: s,
          ctas: r = [],
          cta: n,
          description: i = "",
          expandingButtonLabel: o = "Subscribe",
          layeredImage: c,
          layeredImageSettings: d,
          legalText: l,
          shardsSection: _,
          stackButtons: b = !1,
          theme: p = "gen9",
          title: f = ""
        }) => {
          const {
            breakpoints: k,
            windowWidth: h
          } = (0, u.useWindowResize)(), v = k.xxl.min, x = (e => {
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
              const [s, r] = e;
              if (t.has(s)) {
                const e = t.get(s);
                Object.entries(r).forEach(r => {
                  const [n, i] = r;
                  if (t.has(s) && t.has(n)) {
                    const s = `${t.get(n)}${e}`;
                    a[s] = "imageWidth" !== n ? i ? `${i}px` : "0px" : i ? `${i}vw` : "100vw"
                  }
                })
              }
            }), a
          })(d), y = (0, z.useGetCdnSource)(a?.mobile?.full_src ?? null), j = (0, z.useGetCdnSource)(a?.desktop?.full_src ?? y), w = (0, z.useGetCdnSource)(c?.mobile?.full_src ?? null), N = (0, z.useGetCdnSource)(c?.desktop?.full_src ?? w), S = (0, g.useMemo)(() => {
            const {
              mobileStyle: e,
              desktopStyle: t,
              style: s
            } = a ?? {};
            return {
              ...s,
              ...h >= v ? (0, u.safeStyles)(t) : (0, u.safeStyles)(e)
            }
          }, [h, a?.style, a?.mobileStyle, a?.desktopStyle]);
          return (0, m.jsxs)(E.motion.div, {
            className: (0, I.default)(M.hero, s),
            style: {
              "--background-image-desktop": `url(${j})`,
              "--background-image-mobile": `url(${y})`,
              "--layered-image-desktop": `url(${N})`,
              "--layered-image-mobile": `url(${w})`
            },
            initial: "hidden",
            animate: "visible",
            variants: e ? A : void 0,
            "data-type": "hero",
            theme: p,
            children: [(0, m.jsxs)("div", {
              className: M.images,
              children: [j && y ? (0, m.jsx)("div", {
                className: M.background,
                style: S ?? {}
              }) : "", w && N ? (0, m.jsx)("div", {
                className: M.layered,
                style: d ? x : {}
              }) : "", (0, m.jsx)("div", {
                className: M.gradient
              })]
            }), (0, m.jsx)($, {
              animated: e,
              brands: t,
              cta: n,
              ctas: r,
              description: i,
              expandingButtonLabel: o,
              legalText: l,
              stackButtons: b,
              title: f
            }), _?.shards && (0, m.jsx)(D, {
              shards: _.shards
            })]
          })
        };
      var F = t(69646),
        H = t.n(F);
      const U = ({
        attributes: e = {},
        children: a,
        className: t = "",
        id: s = "",
        style: r = {}
      }) => {
        const {
          hash: n
        } = (0, _.useLocation)();
        return (0, g.useLayoutEffect)(() => {
          const e = document.getElementById(s);
          e && n.includes(s) && e.scrollIntoView({
            behavior: "instant",
            block: "start"
          })
        }, []), (0, m.jsx)("span", {
          className: (0, I.default)(t, e?.className, "rockstargames-sites-gta-gen9c650a7a1e761d6a9f2d6ce1cd8d6f330"),
          id: s,
          style: (0, u.safeStyles)(r ?? e?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: H().unescape(a)
          }
        })
      };
      var q = t(42909),
        W = t(47279),
        K = t(42285),
        Y = t(26806),
        X = t(72132);
      const Z = ({
          button: e,
          closeDialog: a,
          style: t = "primary"
        }) => {
          const {
            buttonIcon: s,
            buttonText: r,
            extraClasses: n,
            isDisabled: i,
            isLink: o,
            link: c,
            onClick: d,
            testId: l
          } = e;
          return o ? r && (0, m.jsx)(y.Button, {
            asChild: !0,
            appearance: t,
            size: "LG",
            children: (0, m.jsx)("a", {
              href: c,
              ...l && {
                "data-testid": l
              },
              children: r
            })
          }) : (0, m.jsx)(y.Button, {
            autoFocus: !0,
            iconRight: s,
            className: (0, I.default)(n),
            isDisabled: i,
            onPress: e => (e => {
              d && d(), a && a(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: t,
            size: "LG",
            "aria-label": r,
            ...l && {
              "data-testid": l
            },
            children: r
          })
        },
        J = {
          actions: "rockstargames-sites-gta-gen9d35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-sites-gta-gen9b63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-sites-gta-gen9efe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-sites-gta-gen9d2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-sites-gta-gen9f654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-sites-gta-gen9e30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-gta-gen9dab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-sites-gta-gen9bc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-sites-gta-gen9b120386c4c2485c587f87173721d63be",
          message: "rockstargames-sites-gta-gen9f7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-sites-gta-gen9b403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-gta-gen9a6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-sites-gta-gen9b2b3117a07a11b3ec5897e4718e24373"
        },
        Q = ({
          icon: e,
          title: a,
          secondaryText: t,
          buttons: s,
          showDialog: r,
          onClose: n = () => {},
          closeOnOutsideClick: i = !0,
          extraClasses: o
        }) => {
          const c = (0, g.useRef)(null),
            {
              setBodyIsLocked: d
            } = (0, u.useBodyScrollable)("AlertDialog");
          (0, g.useEffect)(() => {
            r && c?.current && (c.current?.showModal?.(), d(!0))
          }, [r]);
          const l = () => {
            d(!1), n(), c.current?.close?.()
          };
          if (r) return (0, m.jsxs)("dialog", {
            ref: c,
            className: J.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && i && (d(!1), n(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, m.jsx)("i", {
              className: [J.icon, J[e]].join(" ")
            }), (0, m.jsxs)("div", {
              className: [J.content, o?.content].join(" "),
              children: [(0, m.jsx)("h3", {
                className: [J.heading, o?.heading].join(" "),
                children: a
              }), t && (0, m.jsx)("div", {
                className: [J.message, o?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), s && (0, m.jsx)("div", {
              className: J.actions,
              children: s.slice(0, 2).map((e, a) => (0, m.jsx)(Z, {
                style: e?.style ?? (0 === a ? "primary" : "secondary"),
                button: e,
                closeDialog: l
              }, e.buttonText))
            })]
          })
        },
        ee = (0, q.defineMessages)({
          ns_cta_title: {
            id: "ns_cta_title",
            description: "Newsletter Subscription - CTA title",
            defaultMessage: "Subscribe to the Rockstar Games Email List"
          },
          ns_cta_title_twitchdrops: {
            id: "ns_cta_title_twitchdrops",
            description: "Newsletter Subscription - CTA title",
            defaultMessage: "Don't miss the next free GTA Online gift"
          },
          ns_cta_text: {
            id: "ns_cta_text",
            description: "Newsletter Subscription - CTA text",
            defaultMessage: "Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates."
          },
          ns_cta_button_text: {
            id: "ns_cta_button_text",
            description: "Newsletter Subscription - CTA Button text",
            defaultMessage: "Subscribe Now"
          },
          ns_successfully_subscribed_title: {
            id: "ns_successfully_subscribed_title",
            description: "Newsletter Subscription Alert - Successfully Subscribed title",
            defaultMessage: "Successfully Subscribed"
          },
          ns_successfully_subscribed_details_amp: {
            id: "ns_successfully_subscribed_details_amp",
            description: "Newsletter Subscription Alert - Successfully Subscribed details post AMP launch",
            defaultMessage: "You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings."
          },
          ns_error_preferences_title: {
            id: "ns_error_preferences_title",
            description: "Newsletter Subscription Alert - Error (Check Preferences) title",
            defaultMessage: "Error"
          },
          ns_error_preferences_details: {
            id: "ns_error_preferences_details",
            description: "Newsletter Subscription Alert - Error (Check Preferences) details",
            defaultMessage: "We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later."
          },
          ns_error_generic_title: {
            id: "ns_error_generic_title",
            description: "Newsletter Subscription Alert - Error (Generic) title",
            defaultMessage: "Error"
          },
          ns_error_generic_details: {
            id: "ns_error_generic_details",
            description: "Newsletter Subscription Alert - Error (Generic) details",
            defaultMessage: "We cannot sign up this email address to our newsletter at this time."
          },
          ns_already_subbed_title: {
            id: "ns_already_subbed_title",
            description: "Newsletter Subscription Alert - Already Subscribed title",
            defaultMessage: "Already Subscribed"
          },
          ns_already_subbed_details_amp: {
            id: "ns_already_subbed_details_amp",
            description: "Newsletter Subscription Alert - Already Subscribed details post AMP launch",
            defaultMessage: "You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings."
          },
          ns_check_email_title: {
            id: "ns_check_email_title",
            description: "Newsletter Subscription Alert - Check Email title",
            defaultMessage: "Check Your Email"
          },
          ns_check_email_details: {
            id: "ns_check_email_details",
            description: "Newsletter Subscription Alert - Check Email details",
            defaultMessage: "To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with."
          },
          ns_confirm_title: {
            id: "ns_confirm_title",
            description: "Newsletter Subscription Alert - Confirm your subsciption title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_details: {
            id: "ns_confirm_details",
            description: "Newsletter Subscription Alert - Confirm your subsciption details",
            defaultMessage: "Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below."
          },
          ns_confirm_after_register_title: {
            id: "ns_confirm_after_register_title",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_after_register_details: {
            id: "ns_confirm_after_register_details",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation details",
            defaultMessage: "You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?"
          },
          ns_ok_button_text: {
            id: "ns_ok_button_text",
            description: "Newsletter Subscription Alert - OK button text",
            defaultMessage: "OK"
          },
          ns_manage_prefs_button_text: {
            id: "ns_manage_prefs_button_text",
            description: "Newsletter Subscription Alert - Manage Preferences button text",
            defaultMessage: "Manage Preferences"
          },
          ns_yes_subscribe_text: {
            id: "ns_yes_subscribe_text",
            description: "Newsletter Subscription Alert - Yes, Subscribe button text",
            defaultMessage: "Yes, Subscribe"
          },
          ns_go_back_text: {
            id: "ns_go_back_text",
            description: "Newsletter Subscription Alert - No, go back button text",
            defaultMessage: "No, Go Back"
          }
        }),
        ae = {
          banner: "rockstargames-sites-gta-gen9a031b97fa036ddae4bbadc6680558a2f",
          body: "rockstargames-sites-gta-gen9b47d60d510ae51d65a0f6fb1eb459c89",
          buttonLoader: "rockstargames-sites-gta-gen9f302edb669d15d02ca82b40e4abacebb",
          copy: "rockstargames-sites-gta-gen9fd7cac31d4bc18c4c27f90dfbb6f7f49",
          "fade-in": "rockstargames-sites-gta-gen9f96d40bc7df11b0cd20585fb7b275d60",
          fadeIn: "rockstargames-sites-gta-gen9d4657bdad910613ab1c913eac69cc03a",
          heading: "rockstargames-sites-gta-gen9ce3bcff18b4587d306e54fc607d1c872",
          inner: "rockstargames-sites-gta-gen9d5512a5e255d98ac193b89292a6f908e",
          isLoading: "rockstargames-sites-gta-gen9a365a6b8f3c57e3ff39bdfe300b076f4",
          newsletterSubscription: "rockstargames-sites-gta-gen9c06351d3974c9778756737586bbe2117",
          pillBtn: "rockstargames-sites-gta-gen9bcc802c8f4e672f115f1074115c966e4",
          selected: "rockstargames-sites-gta-gen9fccc728f8062fedd21dda9ff20af4447"
        },
        te = ({
          loading: e,
          loggedIn: a,
          urls: t,
          handleSubscribeButton: s,
          isButtonLoading: r,
          showDialog: n,
          setShowDialog: i,
          dialog: o,
          isSubscribed: c,
          variant: d
        }) => {
          const [l, u] = (0, g.useState)(!1), p = (0, q.useIntl)(), {
            track: f
          } = (0, b.useGtmTrack)(), {
            ref: k,
            inView: h
          } = (0, K.useInView)({
            threshold: .6
          }), v = o?.buttons || [{
            buttonText: p.formatMessage(ee.ns_ok_button_text),
            onClick: () => {
              i(!1)
            },
            testId: "ok-btn",
            style: "secondary"
          }, {
            buttonText: o?.showManagePreferences ? p.formatMessage(ee.ns_manage_prefs_button_text) : "",
            isLink: !0,
            link: t.preferences,
            testId: "preferences-btn",
            style: "ghost"
          }];
          return (0, g.useEffect)(() => {
            h && !l && (f({
              event: "page_section_impression",
              section_layout: a ? "signed in" : "signed out",
              element_placement: "newsletter subscribe"
            }), u(!0))
          }, [h]), (0, m.jsxs)(m.Fragment, {
            children: [!c && (0, m.jsx)("div", {
              className: (0, I.default)(ae.newsletterSubscription),
              "data-testid": "news-sub-banner",
              ref: k,
              children: (0, m.jsx)("section", {
                className: ae.banner,
                children: (0, m.jsx)("div", {
                  className: ae.inner,
                  children: e ? (0, m.jsx)(X.A, {}) : (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsx)(Y.A, {
                      disableLink: !0,
                      className: ae.fadeIn
                    }), (0, m.jsxs)("div", {
                      className: ae.body,
                      children: [(0, m.jsx)(y.Heading, {
                        level: 5,
                        className: [ae.heading, ae.fadeIn].join(" "),
                        children: "twitchdrops" === d ? (0, m.jsx)(q.FormattedMessage, {
                          ...ee.ns_cta_title_twitchdrops
                        }) : (0, m.jsx)(q.FormattedMessage, {
                          ...ee.ns_cta_title
                        })
                      }), (0, m.jsx)(y.Body, {
                        className: [ae.copy, ae.fadeIn].join(" "),
                        children: (0, m.jsx)(q.FormattedMessage, {
                          ...ee.ns_cta_text
                        })
                      })]
                    }), a ? (0, m.jsxs)(y.Button, {
                      size: "LG",
                      appearance: "secondary",
                      onPress: s,
                      isDisabled: r,
                      "data-testid": "sub-btn",
                      children: [(0, m.jsx)(q.FormattedMessage, {
                        ...ee.ns_cta_button_text
                      }), r && (0, m.jsx)("div", {
                        className: ae.buttonLoader,
                        children: (0, m.jsx)(X.A, {})
                      })]
                    }) : t?.auth && (0, m.jsx)(y.Button, {
                      size: "LG",
                      appearance: "secondary",
                      onPress: s,
                      isDisabled: r,
                      "data-testid": "sub-btn",
                      asChild: !0,
                      children: (0, m.jsx)(_.Link, {
                        to: t.auth,
                        "data-testid": "sub-link",
                        onClick: () => {
                          f({
                            event: "cta_subscribe_news",
                            section_layout: "signed out",
                            element_placement: "newsletter subscribe",
                            text: "subscribe now",
                            link_url: t.auth
                          })
                        },
                        children: (0, m.jsx)(q.FormattedMessage, {
                          ...ee.ns_cta_button_text
                        })
                      })
                    })]
                  })
                })
              })
            }), o && (0, m.jsx)(Q, {
              icon: o.icon,
              title: p.formatMessage(o.heading),
              secondaryText: p.formatMessage(o.bodyText),
              closeOnOutsideClick: o.closeOnOutsideClick,
              buttons: [{
                ...v[0]
              }, {
                ...v[1]
              }],
              showDialog: n,
              onClose: () => i(!1)
            })]
          })
        },
        se = {
          SUCCESS: {
            icon: "check",
            heading: ee.ns_successfully_subscribed_title,
            bodyText: ee.ns_successfully_subscribed_details_amp,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: ee.ns_check_email_title,
            bodyText: ee.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: ee.ns_error_preferences_title,
            bodyText: ee.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: ee.ns_error_generic_title,
            bodyText: ee.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: ee.ns_already_subbed_title,
            bodyText: ee.ns_already_subbed_details_amp,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: ee.ns_confirm_after_register_title,
            bodyText: ee.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: ee.ns_confirm_title,
            bodyText: ee.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        re = {
          0: se.ERROR_PREFERENCES,
          1: se.SUCCESS,
          2: se.ERROR_PREFERENCES,
          3: se.ERROR_PREFERENCES,
          4: se.ERROR_GENERIC
        },
        ne = (0, u.setMakeVarItem)({
          key: "subscriptionStatusReactive",
          value: (0, u.makeVar)(void 0)
        }),
        ie = e => ne(e),
        oe = (e, a) => {
          const [t, s] = (0, g.useState)(), [r, n] = (0, g.useState)(!1), [i, o] = (0, g.useState)(!1), [c, d] = (0, g.useState)(!1), [l, m] = (0, g.useState)(!1), _ = (0, u.useReactiveVar)(ne), p = (0, q.useIntl)(), {
            track: f
          } = (0, b.useGtmTrack)(), k = {
            preferences: `https://${e.www}.rockstargames.com/account/communications`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          }, h = e => {
            s(e), o(!0), d(!1)
          }, v = {
            ...se.NEW_ACCOUNT,
            closeOnOutsideClick: !1,
            buttons: [{
              buttonText: p.formatMessage(ee.ns_yes_subscribe_text),
              style: "monochrome",
              onClick: () => {
                x()
              }
            }, {
              buttonText: p.formatMessage(ee.ns_go_back_text),
              onClick: () => {
                s(null), o(!1)
              }
            }]
          }, x = async () => (f({
            event: "cta_subscribe_news",
            section_layout: a.loggedIn ? "signed in" : "signed out",
            element_placement: "newsletter subscribe",
            text: "subscribe now"
          }), a.loggedIn || window.location.assign(k.auth), a.loggedIn && a.isAMinor ? (h(se.ERROR_GENERIC), m(!1), void f({
            event: "alert_error",
            text: "error message with no preferences link",
            element_placement: "newsletter subscribe"
          })) : a.loggedIn && !_ || a.loggedIn && 3 == _ ? void await y() : a.loggedIn && _ ? (f({
            event: "alert_update",
            text: "alert - user already subscribed",
            element_placement: "newsletter subscribe"
          }), h(se.ALREADY_SUBSCRIBED), void m(!1)) : void 0), y = async () => {
            const {
              error: e = null,
              result: t
            } = await (0, u.coreScApiFetch)("marketing/update", {
              fetchOptions: {
                method: "POST"
              },
              pingBearer: a.pingBearer,
              query: {
                subscribe: !0
              }
            });
            if (e) ie(0), h(se.ERROR_GENERIC), f({
              event: "alert_error",
              text: "error message with preferences link",
              element_placement: "newsletter subscribe"
            });
            else {
              const e = t.status;
              ie(e), h(re[e]), 1 === e ? (f({
                event: "subscribe_news_success",
                element_placement: "newsletter subscribe"
              }), f({
                event: "alert_update",
                text: "user subscribed successfully",
                element_placement: "newsletter subscribe"
              })) : f({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              })
            }
          };
          return (0, g.useEffect)(() => {
            n(1 === _)
          }, [_]), (0, g.useEffect)(() => {
            (async () => {
              await (async () => {
                a.loggedIn ? await (async () => {
                  if (-1 === _) return;
                  ie(-1), d(!0);
                  const {
                    error: t = null,
                    result: s
                  } = await (0, u.coreScApiFetch)("marketing/status", {
                    pingBearer: a.pingBearer
                  });
                  if (t) ie(0), d(!1);
                  else {
                    const t = s.status;
                    ie(t), a.isFromAuth && (t => {
                      if (e.navigate(".", {
                          replace: !0
                        }), a.loggedIn) switch (t) {
                        case 1:
                          a.isNewAccount ? (f({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), f({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), h(se.SUCCESS)) : (f({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), h(se.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          f({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), h(se.ERROR_GENERIC);
                          break;
                        default:
                          a.isNewAccount ? (h(v), f({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : y()
                      }
                    })(t), d(!1)
                  }
                })() : !1 === a.loggedIn && d(!1)
              })()
            })()
          }, [a.loggedIn]), {
            dialog: t,
            handleSubscribeButton: x,
            isButtonLoading: l,
            isLoading: c,
            isSubscribed: r,
            setShowDialog: o,
            showDialog: i,
            subscriptionStatus: _,
            urls: k,
            setDialog: s
          }
        };
      var ce = t(30433);
      const de = (0, ce.g)(() => {
        const e = (0, u.useRockstarTokenPing)(),
          a = (0, W.A)(),
          [{
            iso: t
          }] = (0, q.getLocale)(),
          s = (0, u.toScLocaleString)(t),
          {
            login: r
          } = (0, u.getConfigForDomain)(),
          [n] = (0, _.useSearchParams)(),
          i = (0, _.useNavigate)(),
          o = (0, _.useLocation)(),
          {
            loggedIn: c,
            data: d,
            loading: l
          } = (0, b.useRockstarUser)(),
          g = "true" === n.get("marketing"),
          p = {
            lang: s,
            location: o.pathname,
            login: r,
            navigate: i,
            www: a.sites.www
          },
          f = {
            ...d,
            isFromAuth: g || !1,
            loggedIn: c,
            pingBearer: e,
            userLoading: l
          },
          k = oe(p, f),
          {
            dialog: h,
            setDialog: v,
            handleSubscribeButton: x,
            isButtonLoading: y,
            isLoading: j,
            isSubscribed: w,
            setShowDialog: N,
            showDialog: S,
            urls: C
          } = k;
        return (0, m.jsx)(m.Fragment, {
          children: (0, m.jsx)(te, {
            handleSubscribeButton: x,
            loggedIn: c || !1,
            loading: l || j,
            urls: C,
            isButtonLoading: y,
            setShowDialog: N,
            isSubscribed: w,
            showDialog: S,
            ...S && h && {
              dialog: h
            }
          })
        })
      });
      var le = t(28851),
        me = t(14143);
      const ge = ({
          layers: e = [],
          displayClass: a = "",
          style: t = {}
        }) => {
          const s = (0, z.useGenerateCdnSource)();
          if (!e || !e[0]?.image) return null;
          const r = e.map(e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: s(e?.image ?? null)
          }));
          return (0, m.jsx)(me.y, {
            className: (0, I.default)("rockstargames-sites-gta-gen9c1c689cf47230fa80bccc9b20515d4fa", a),
            layers: r,
            style: t
          })
        },
        _e = "rockstargames-sites-gta-gen9ae8bfc3f9a519606a95144e64ee454b5",
        ue = ({
          minOffset: e = 0,
          maxOffset: a = 0,
          scrollAxis: t = "vertical",
          displayClass: s = "",
          style: r = {},
          children: n
        }) => "horizontal" === t ? (0, m.jsx)(me.kQ, {
          x: [e, a],
          className: (0, I.default)(_e, s),
          styleOuter: r,
          children: n
        }) : (0, m.jsx)(me.kQ, {
          y: [e, a],
          className: (0, I.default)(_e, s),
          styleOuter: r,
          children: n
        }),
        be = ({
          children: e
        }) => {
          const {
            parallaxController: a
          } = (0, me.as)();
          return (0, g.useLayoutEffect)(() => {
            if (!a) return;
            const e = setInterval(() => {
              a.update()
            }, 500);
            return () => clearInterval(e)
          }, [a]), e
        },
        pe = {
          large: "rockstargames-sites-gta-gen9e15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-sites-gta-gen9dfdaa6f63f8e8bd10576fa2debcbc1fc",
          parallaxWrapper: "rockstargames-sites-gta-gen9e30c08cf0e042f7fc7bed0c23c0bfb31",
          small: "rockstargames-sites-gta-gen9c32a973dbc862a43cc5d4a2aac19ed9b"
        },
        fe = ({
          scrollAxis: e = "vertical",
          size: a = "",
          style: t = {},
          children: s
        }) => (0, m.jsx)(me.zE, {
          scrollAxis: e,
          children: (0, m.jsx)(be, {
            children: (0, m.jsx)("div", {
              className: (0, I.default)(pe.parallaxWrapper, pe[a]),
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
        });
      var ke = t(12334),
        he = t(44453),
        ve = t(89809);
      const xe = {
          gradient: "rockstargames-sites-gta-gen9b78d3c0bdc9668bb3d318825467177ab",
          left: "rockstargames-sites-gta-gen9f4448b69feb648b8b910230c6f873dbd",
          pillBtn: "rockstargames-sites-gta-gen9b12cdd53cc59cb42903d11d9fdceca7f",
          promoModule: "rockstargames-sites-gta-gen9eabbb5f24c40ef994b612515a0d0f356",
          promoModuleContentContainer: "rockstargames-sites-gta-gen9ef7d758b0d1515fcebe6cb22271a4688",
          promoModuleImage: "rockstargames-sites-gta-gen9b8584eedfbe5a91aaf72c40ec1d619a5",
          promoModuleTextContent: "rockstargames-sites-gta-gen9b590150a7ac01a01a493b85b7ea5cf90",
          promoModuleWrapper: "rockstargames-sites-gta-gen9de25220583bb9220882329a113f7a5e2",
          right: "rockstargames-sites-gta-gen9b69bb02f1c00007e9b4eab8217e2f08e",
          selected: "rockstargames-sites-gta-gen9e03b475da5ca3ded74e8c6dfd54fb476"
        },
        ye = {
          alt: "",
          sources: {}
        },
        je = ({
          backgroundColor: e,
          brands: a = [],
          description: t = "",
          ctaLabel: s,
          ctaLink: r = "https://rockstargames.com",
          gradient: n = !0,
          image: i,
          promoImg: o = ye,
          imageOrientation: c = "right",
          title: d = "",
          name: l = "",
          style: _,
          imageStyle: p,
          _memoq: f
        }) => {
          const [k, h] = (0, g.useState)(!1), {
            ref: v,
            inView: x
          } = (0, K.useInView)({
            threshold: .6
          }), {
            isMobile: y
          } = (0, u.useWindowResize)(), {
            track: j
          } = (0, b.useGtmTrack)(), w = (0, z.useImageParser)(o), N = (0, z.useGetCdnSource)(i), S = {
            ..._,
            "--promo-background": e ?? "var(--black-200)",
            "--promo-image": `url(${(y?w?.src?.mobile:w?.src?.desktop)??N??"var(--promo-background)"})`,
            "--promo-order": "left" === c ? "row" : "row-reverse"
          }, C = {
            ...p
          };
          return (0, g.useEffect)(() => {
            x && !k && (j({
              event: "page_section_impression",
              element_placement: l?.toLowerCase()
            }), h(!0))
          }, [x]), (0, m.jsx)(m.Fragment, {
            children: (0, m.jsx)("div", {
              className: xe.promoModuleWrapper,
              children: (0, m.jsxs)(E.motion.div, {
                className: xe.promoModule,
                style: {
                  ...S
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
                children: [(0, m.jsx)("div", {
                  className: [xe.promoModuleImage, n ? xe.gradient : "", "left" === c ? xe.left : xe.right].join(" "),
                  style: {
                    ...C
                  }
                }), (0, m.jsxs)("div", {
                  className: xe.promoModuleContentContainer,
                  children: [(0, m.jsx)(V.A, {
                    brands: a
                  }), (0, m.jsxs)("div", {
                    className: xe.promoModuleTextContent,
                    children: [d && (0, m.jsx)("h3", {
                      children: d
                    }), t && (0, m.jsx)("p", {
                      children: t
                    })]
                  }), s && (0, m.jsx)(ve.A, {
                    to: r,
                    text: s,
                    onClick: () => {
                      j({
                        event: "cta_learn",
                        element_placement: "promo module",
                        link_url: r,
                        text: f?.ctaLabel?.toLowerCase()
                      })
                    }
                  })]
                })]
              })
            })
          })
        };
      var we = t(44293),
        Ne = t(69138);
      const Se = {
          downVote: "rockstargames-sites-gta-gen9e23b13b0d0be49814d3770c10365c096",
          info: "rockstargames-sites-gta-gen9cee10f330f3ac6fba73fc06ac99bc951",
          loggedOutButtons: "rockstargames-sites-gta-gen9c393b8f2d3b5b3e9204881ae6ff0fdc5",
          pillBtn: "rockstargames-sites-gta-gen9a0626acfa0dbdfdfd4f40b93134ac915",
          selected: "rockstargames-sites-gta-gen9de6015fb35bdee07192c1656ba4893e3",
          upVote: "rockstargames-sites-gta-gen9b3be682e82659d45f93c2fe63ccd73ba",
          userVote: "rockstargames-sites-gta-gen9b32a59a8a63c53cc278266d726c9c5da",
          voteButtonActive: "rockstargames-sites-gta-gen9f9e46f58f97d2b391aaf715861654cd7",
          voteButtons: "rockstargames-sites-gta-gen9dda673f7473820d8884c017373c780f6",
          voteContent: "rockstargames-sites-gta-gen9aad01ad44bcc6161ad363910e931515f"
        },
        Ce = ({
          description: e,
          foreign_id: a = document.location.pathname,
          foreign_type: t = "url",
          title: s
        }) => {
          const {
            track: r
          } = (0, b.useGtmTrack)(), {
            loggedIn: n
          } = (0, b.useRockstarUser)(), {
            refetch: i
          } = (0, u.useQuery)(Ne.UserGetVote, {
            skip: !0
          }), [o] = (0, u.useMutation)(Ne.UserCastVote), [c, d] = (0, g.useState)(null), l = (0, g.useCallback)(async e => {
            r({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${t} ${a}`
            });
            const s = {
                foreign_id: a,
                foreign_type: t,
                vote: e
              },
              n = await o({
                variables: s
              });
            d(n?.data?.userCastVote?.vote ?? null)
          }, [a, t]);
          return (0, g.useEffect)(() => {
            (async () => {
              if (!n || !a || !t) return;
              const e = await i({
                foreign_id: a,
                foreign_type: t
              });
              d(e?.data?.userGetVote?.vote ?? null)
            })()
          }, [a, t, n]), (0, m.jsx)("div", {
            className: Se.userVote,
            children: (0, m.jsxs)("div", {
              className: Se.voteContent,
              children: [(0, m.jsxs)("div", {
                className: Se.info,
                children: [(0, m.jsx)("h3", {
                  children: s
                }), (0, m.jsx)("p", {
                  children: e
                })]
              }), (0, m.jsxs)("div", {
                className: [Se.voteButtons, n ? "" : Se.loggedOutButtons].join(" "),
                children: [(0, m.jsx)("button", {
                  onClick: () => l(!0),
                  className: [Se.upVote, c ? Se.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, m.jsx)("button", {
                  className: [Se.downVote, !1 === c ? Se.voteButtonActive : ""].join(" "),
                  onClick: () => l(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var Ie = t(32255),
        Te = t(28097),
        Ee = t(72527);
      const ze = (e = [], a, t) => {
          const s = (0, g.useRef)(null),
            r = (0, g.useRef)(new Set),
            n = (0, g.useRef)([]),
            i = (0, g.useRef)(0),
            o = (0, g.useRef)(0),
            c = (0, g.useRef)(!1),
            d = (0, g.useMemo)(() => Array.from(new Set(e.filter(e => e >= 0 && e <= 100))).sort((e, a) => e - a), [e]);
          return (0, g.useEffect)(() => {
            r.current = new Set, n.current = d.slice()
          }, [d]), (0, g.useEffect)(() => {
            s.current = t ?? window
          }, [t]), (0, g.useEffect)(() => {
            const e = s.current;
            if (!e) return;
            const d = () => {
              c.current || (c.current = !0, requestAnimationFrame(() => {
                (() => {
                  const {
                    scrollTop: s,
                    scrollHeight: c,
                    percent: l
                  } = (() => {
                    const e = t,
                      a = document.documentElement,
                      s = document.body,
                      r = e ? e.scrollTop : a.scrollTop || s.scrollTop || window.scrollY || 0,
                      n = e ? e.scrollHeight : a.scrollHeight || s.scrollHeight || 0,
                      i = e ? e.clientHeight : a.clientHeight || window.innerHeight || 0,
                      o = Math.max(1, n - i);
                    return {
                      scrollTop: r,
                      scrollHeight: n,
                      percent: Math.max(0, Math.min(100, r / o * 100))
                    }
                  })();
                  i.current = l, o.current = s;
                  const m = n.current.find(e => l >= e);
                  if (!m) return;
                  if (r.current.has(m)) return;
                  r.current.add(m), n.current = n.current.filter(e => e !== m);
                  const g = c * (m / 100);
                  a?.({
                    scrollY: m,
                    scrollLength: g
                  }), 0 === n.current.length && e.removeEventListener("scroll", d, {
                    capture: !1
                  })
                })(), c.current = !1
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
            scrollY: i.current,
            scrollLength: o.current
          }
        },
        Ae = ({
          threshold: e,
          trackRef: a,
          children: t
        }) => {
          const {
            track: s
          } = (0, b.useGtmTrack)();
          return ze(e, ({
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
        Pe = ({
          text: e,
          style: a
        }) => (0, m.jsx)("div", {
          className: "rockstargames-sites-gta-gen9c08a001134624b9ceb275eae413bfd3d",
          style: a,
          children: e
        }),
        Le = ({
          hasTag: e = !1,
          tag: a = null,
          tagStyle: t = null,
          badges: s = []
        }) => e && a ? (0, m.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ceb75d3391774f84e920e955d7a6853f",
          "data-tag-style": t,
          children: a
        }) : e && s && s?.length > 0 ? (0, m.jsx)("div", {
          className: "rockstargames-sites-gta-gen9f83b84453472e937d57011680a564ec6",
          children: s.map(e => (0, m.jsx)(Pe, {
            ...e
          }, e?.text))
        }) : null,
        Me = {
          content: "rockstargames-sites-gta-gen9f418ed13cf5cbe3f701ce0d872b50704",
          textOverlay: "rockstargames-sites-gta-gen9ca83475001f5d512b9ffcd89f1117561"
        },
        {
          LiteMotion: Re,
          Animations: De
        } = Te,
        {
          variants: Ve,
          transitions: Oe
        } = De,
        Be = ({
          title: e,
          hasTag: a,
          tag: t,
          hasDescription: s,
          description: r,
          fadesOut: n = !1,
          badges: i
        }) => (0, m.jsx)(Re, {
          initial: Ve.fade.out.initial,
          animate: {
            opacity: n ? 0 : 1
          },
          transition: Oe.fade,
          className: Me.textOverlay,
          children: (0, m.jsxs)("div", {
            className: Me.content,
            children: [(0, m.jsx)(Le, {
              hasTag: a,
              tag: t,
              badges: i?.filter(e => e?.isPrimary)
            }), (0, m.jsx)("h3", {
              children: e
            }), s && r && (0, m.jsx)("div", {
              className: Me.description,
              children: r
            })]
          })
        }),
        $e = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          tag: s,
          tagStyle: r,
          discountPrice: n,
          originalPrice: i,
          setPricingContainerHeight: o = null
        }) => {
          const c = (0, g.createRef)();
          return (0, g.useEffect)(() => {
            const e = () => {
              c.current && null !== o && o(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [c]), (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e419c6cd31abd635e742e635dcfd8316",
            ref: c,
            "data-show-background": t,
            children: [a && (0, m.jsx)("span", {
              className: "rockstargames-sites-gta-gen9bf415d56280a8768ee0c26e116865d5b",
              children: e
            }), (0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d98da8fc9dce6d600db165351d3a3fed",
              children: [(0, m.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a5717338db21efc7eb765011d68ea73d",
                "data-tag-style": r || "free",
                children: s
              }), (0, m.jsx)("span", {
                className: "rockstargames-sites-gta-gen9cdaaa9655747e4d129d6c22080bdd33d",
                children: n
              }), (0, m.jsx)("span", {
                className: "rockstargames-sites-gta-gen9af3db4eb6d14c1f4ee5689b4e6386715",
                children: i
              })]
            })]
          })
        };
      var Ge = t(80391),
        Fe = t(28985),
        He = t(47240),
        Ue = t(81715),
        qe = t(49429),
        We = t(32903),
        Ke = t(85719),
        Ye = t(11008);
      const Xe = {
          ps5: He,
          ps4: Fe,
          ps: Ge,
          xboxone: qe,
          xbox: We,
          xboxseriesxs: Ue,
          nintendoswitch: Ye,
          pc: Ke,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        Ze = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          platformOptions: s,
          setPricingContainerHeight: r = () => {},
          expandedView: n
        }) => {
          const i = (0, g.createRef)();
          return (0, g.useEffect)(() => {
            const e = () => {
              i.current && null !== r && r(i.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [i]), (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ee81f54f31ab2cd10a67313b9689bf96",
            ref: i,
            "data-show-background": t,
            "data-show-platforms": !n,
            children: [a && (0, m.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d4ab460f0a204a588d4d4dd0a110ca36",
              children: e
            }), s?.platformsAndLinks && (0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9afdc85bfd80cae52d4c1b422f1294962",
              children: [(0, m.jsx)(Le, {
                hasTag: s?._memoq?.platformTag,
                tag: s?._memoq?.platformTag,
                tagStyle: s?._memoq?.platformTagStyle
              }), (0, m.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c252412353007d9f02f19a754430b14b",
                children: s.platformsAndLinks.map(({
                  platform: e,
                  buttonText: a
                }) => (0, m.jsx)("img", {
                  className: "rockstargames-sites-gta-gen9ff5cde8853312ffb892472d100c684cd",
                  alt: a,
                  src: Xe[e]
                }, e))
              })]
            })]
          })
        },
        Je = ({
          textOverlayProps: e,
          title: a,
          size: t,
          expandedView: s = !1,
          children: r,
          pricingOptions: n,
          setPricingContainerHeight: i,
          isCoverCard: o = !1,
          platformOptions: c
        }) => {
          const [d] = (({
            hasTextOverlay: e,
            tag: a,
            collapsedHasTag: t,
            description: s,
            collapsedHasDescription: r,
            size: n,
            title: i,
            expandedView: o,
            badges: c
          }) => {
            const [d, l] = (0, g.useState)(null), _ = (0, g.useMemo)(() => {
              if (!e) return null;
              const d = "sm" !== n && r;
              return (0, m.jsx)(Be, {
                title: i,
                hasTag: t,
                tag: a,
                hasDescription: d,
                description: s,
                fadesOut: o,
                badges: c
              })
            }, [e, a, t, s, r, n, i, o, c]);
            return (0, g.useEffect)(() => {
              l(_)
            }, [_]), [d, l]
          })({
            ...e,
            size: t,
            title: a,
            expandedView: s
          }), l = void 0 !== n?.hasPricingOptions || null !== c;
          return (0, m.jsxs)("header", {
            className: "rockstargames-sites-gta-gen9cab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": o,
            "data-expanded-view": s,
            children: [g.Children.map(r, e => (0, g.cloneElement)(e, {
              title: a,
              size: t,
              expandedView: s
            })), d, l && (0, m.jsxs)(m.Fragment, {
              children: [!0 === c?.hasPlatformOptions && (0, m.jsx)(Ze, {
                title: a,
                platformOptions: c,
                pricingOptions: n,
                setPricingContainerHeight: i,
                expandedView: s
              }), !0 === n?.hasPricingOptions && (0, m.jsx)($e, {
                title: a,
                tag: n?._memoq?.tag,
                tagStyle: n?._memoq?.tagStyle || "free",
                discountPrice: n?._memoq?.discountPrice,
                originalPrice: n?._memoq?.originalPrice,
                setPricingContainerHeight: i
              })]
            })]
          })
        },
        {
          LiteMotion: Qe,
          Animations: ea
        } = Te,
        {
          transitions: aa
        } = ea,
        ta = ({
          components: e,
          payload: a,
          prod: t,
          size: s,
          title: r,
          initial: n = "initial",
          animate: i = "animate",
          variants: o,
          type: c = null,
          context: d = null,
          textOverlayProps: l,
          className: _,
          children: b,
          theme: p = "none",
          id: f,
          pricingOptions: k,
          pricingContainerHeight: h,
          isCoverCard: v,
          platformOptions: x,
          isProductCard: y = !1
        }) => {
          const j = (0, g.useRef)(null),
            w = (0, g.useRef)(null),
            {
              tag: N,
              expandedHasTag: S,
              badges: C
            } = l;
          H().set(a, "meta.prod", t);
          const T = b?.props?.images.length > 0;
          let E = (0, m.jsx)("h1", {
            children: r
          });
          return v && (E = null), (0, g.useEffect)(() => {
            const e = () => {
              j.current && j.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (j.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }, []), (0, m.jsx)(u.DataLayerProvider, {
            card_id: f,
            card_name: r?.toLowerCase(),
            children: (0, m.jsx)(Ae, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === c ? j : w,
              children: (0, m.jsxs)(Qe, {
                ref: j,
                initial: n,
                animate: i,
                variants: o.expanded,
                transition: aa.cardOpen,
                className: (0, I.default)("rockstargames-sites-gta-gen9c2289ce1bf0de6ad8a4a8ce7e90a4b66", _),
                "data-type": c,
                "data-size": s,
                "data-product": y,
                "data-covercard": v || !1,
                "data-context": d,
                style: {
                  "--product-card-pricing-info-height": `${h||0}px`
                },
                children: [T && (0, m.jsx)(Je, {
                  size: s,
                  title: r,
                  textOverlayProps: l,
                  expandedView: !0,
                  pricingOptions: k,
                  platformOptions: x,
                  isCoverCard: v,
                  children: b
                }), (0, m.jsxs)(Qe, {
                  ref: w,
                  className: "rockstargames-sites-gta-gen9e461568802b56e8c21b8b82d9c3a1fb4",
                  variants: o.expandedContents,
                  transition: aa.afterCardOpen,
                  "data-theme": p,
                  children: [(0, m.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9c4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, m.jsx)(Le, {
                      hasTag: S,
                      tag: N,
                      badges: C
                    }), E, y && (0, m.jsxs)(m.Fragment, {
                      children: [!0 === x?.hasPlatformOptions && (0, m.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9cd635452588eda421bdea19f00660efc",
                        children: (0, m.jsx)(Le, {
                          hasTag: x?.hasPlatformOptions,
                          tag: x?._memoq?.platformTag,
                          tagStyle: x?._memoq?.platformTagStyle
                        })
                      }), !0 === k?.hasPricingOptions && (0, m.jsx)($e, {
                        title: r,
                        showTitle: !1,
                        showBackground: !1,
                        tag: k?._memoq?.tag,
                        tagStyle: k?.tagStyle || "free",
                        discountPrice: k?._memoq?.discountPrice,
                        originalPrice: k?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, m.jsx)(z.TinaParser, {
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
      var sa = t(46775);
      const ra = (0, q.defineMessages)({
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
        na = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第 {currentPage} 页（共 {totalPages} 页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        ia = (0, q.withIntl)(({
          id: e,
          position: a,
          title: t,
          size: s = "md",
          sectionTitle: r = "",
          expandedType: n = null,
          modalProps: i = {
            content: null,
            className: "",
            contentClassName: ""
          },
          className: o,
          children: c,
          isProductCard: d,
          cardIds: l = null,
          theme: u = "none",
          isCoverCard: p,
          platformOptions: f
        }) => {
          const {
            formatMessage: k,
            formatList: h
          } = (0, q.useIntl)(), [v, x] = (0, _.useSearchParams)(), y = (0, g.useRef)(null), [, j] = (0, sa.h)(), {
            track: w
          } = (0, b.useGtmTrack)(), [N, S] = (0, g.useState)(!1), C = window.location.href.includes("cms5"), I = () => {
            S(!1), j(null), C || x(e => (e.delete("info"), e), {
              replace: !0
            }), w({
              event: "trackPageview"
            })
          }, T = () => {
            if (!i?.content || !y.current || !n || "linkout" === n) return;
            const r = y.current,
              o = window.getComputedStyle(r),
              c = parseInt(o.getPropertyValue("width"), 10),
              d = parseInt(o.getPropertyValue("height"), 10),
              m = r.getBoundingClientRect(),
              {
                content: g,
                className: _,
                contentClassName: b
              } = i,
              p = "fob" === s ? "fob" : "default";
            j({
              content: g,
              onClose: I,
              rect: m,
              width: c,
              height: d,
              className: _,
              contentClassName: b,
              fadeIn: !1,
              cardIds: l,
              theme: u,
              activeId: e,
              gtm: {
                card_id: e,
                card_name: t?.toLowerCase(),
                position: a
              },
              aspectRatio: p,
              cardDimensions: {
                size: s,
                type: n
              }
            }), w({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: e,
              card_name: t?.toLowerCase(),
              position: a
            })
          };
          (0, g.useEffect)(() => {
            N && T()
          }, [N]), (0, g.useEffect)(() => {
            S(v.get("info") === e)
          }, [v.get("info"), e]);
          const E = (0, g.useMemo)(() => {
            const e = f?._memoq?.platformTag || "";
            if (f?.platformsAndLinks?.length > 0) {
              const a = f?.platformsAndLinks?.map(({
                  buttonText: e
                }) => e),
                s = h(a, {
                  type: "conjunction"
                });
              return e ? k(ra.card_label_platforms_tag, {
                tag: e,
                title: t,
                platformList: s
              }) : k(ra.card_label_platforms, {
                title: t,
                platformList: s
              })
            }
            return e ? k(ra.card_label_tag, {
              tag: e,
              title: t
            }) : t
          }, [f, t]);
          return p || "linkout" === n ? (0, m.jsx)("div", {
            ref: y,
            className: o,
            "data-size": s,
            "data-type": n,
            "data-product": d,
            role: "button",
            "aria-label": E,
            children: c
          }) : (0, m.jsx)("button", {
            ref: y,
            onClick: s => {
              s.preventDefault(), s.stopPropagation(), e ? x({
                info: e
              }) : T(), w({
                event: "card_click",
                element_placement: r?.toLowerCase(),
                position: a,
                card_id: e,
                card_name: t?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: o,
            "data-size": s,
            "data-type": n,
            "data-product": d,
            tabIndex: "linkout" !== n ? 0 : -1,
            "aria-label": E,
            type: "button",
            children: c
          })
        }, na),
        oa = {
          card: "rockstargames-sites-gta-gen9c49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-sites-gta-gen9b41eac21ba69f02fe26f8dafa8433207",
          coverCardWrapper: "rockstargames-sites-gta-gen9dd482c08ed9fdc5cef20f63dd6720e13",
          expandedContent: "rockstargames-sites-gta-gen9fea5414b5f55420cfcd6c6ee12a393b3",
          imageHolder: "rockstargames-sites-gta-gen9d893e3eab0a5754bb28882ceb8de6b59",
          pillBtn: "rockstargames-sites-gta-gen9f3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-sites-gta-gen9a03c60979e8d6882b5b8ce0f0301b7e9",
          text: "rockstargames-sites-gta-gen9e961062768d06292ff6cb598ae1c5e69"
        },
        ca = ({
          payload: e,
          prod: a,
          images: t,
          size: s,
          title: r,
          initial: n,
          animate: i,
          variants: o,
          id: c,
          position: d,
          sectionTitle: _,
          expandedType: u,
          context: b,
          children: p,
          expandedCardContents: f,
          textOverlayProps: k = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          deckProps: h = {},
          modalProps: v = [],
          theme: x,
          cardIds: y,
          pricingOptions: j,
          platformOptions: w = null,
          pricingContainerHeight: N,
          isCoverCard: S = !1,
          isProductCard: C = !1
        }) => {
          const I = (0, z.useTinaComponents)(),
            T = (0, g.useMemo)(() => ({
              ...I,
              HTMLElement: U,
              ImageWithBadge: he.A,
              Carousel: l.A,
              GroupOfItems: Ee.default
            }), [I]),
            E = (0, g.useMemo)(() => (0, m.jsx)(ta, {
              type: u,
              components: T,
              payload: e,
              prod: a,
              images: t,
              size: s,
              title: r,
              context: b,
              textOverlayProps: k,
              initial: n,
              animate: i,
              variants: o,
              theme: x,
              cardIds: y,
              pricingOptions: j,
              id: c,
              pricingContainerHeight: N,
              isCoverCard: S,
              platformOptions: w,
              isProductCard: C,
              children: f
            }), [u, t, a, s, r, k, f, n, i, o, T, e, C]),
            A = [oa.card, S ? oa.coverCardWrapper : ""].join(" ");
          return (0, m.jsx)(ia, {
            id: c,
            position: d,
            sectionTitle: _,
            title: r,
            size: s,
            expandedType: u,
            images: t,
            deckProps: h,
            modalProps: {
              content: E,
              ...v
            },
            className: A,
            isProductCard: C,
            cardIds: y,
            theme: x,
            isCoverCard: S,
            platformOptions: w,
            children: p
          })
        },
        da = {
          foreground: "rockstargames-sites-gta-gen9d858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-sites-gta-gen9d656190323ba10afc580adbf82303a8b",
          layered: "rockstargames-sites-gta-gen9a7a1d10cda2bf3de7960b4fadf2f7a4e",
          layeredImageFrame: "rockstargames-sites-gta-gen9cfc6074d8b476125230142c79438a249",
          logo: "rockstargames-sites-gta-gen9ca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-sites-gta-gen9f5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: la,
          Animations: ma
        } = Te,
        {
          getVariant: ga,
          variants: _a,
          transitions: ua
        } = ma,
        ba = ({
          image: e,
          i: a,
          prod: t
        }) => {
          const {
            alt: s,
            src: r
          } = (0, C.S1)({
            ...e,
            prod: t
          });
          return (0, m.jsx)("img", {
            src: r.mobile,
            alt: s ?? "",
            style: {
              "--z-index": a
            }
          })
        },
        pa = ({
          images: e = [],
          className: a = "",
          prod: t = !1,
          expandedView: s = !1,
          style: r = {}
        }) => {
          const [n, i] = (0, g.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, g.useEffect)(() => {
            function e() {
              i({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [n]);
          const o = (0, g.useMemo)(() => e?.length && 0 !== e.length ? e.map(e => (0, m.jsx)(la, {
            className: (0, I.default)(da[e?.specialClass] ?? da.imageMask, da[e?.sizeClass], e?.className),
            variants: ga(e?.specialClass ?? "imageMask", s ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: ua.cardOpen,
            children: (0, m.jsx)(ba, {
              image: e,
              prod: t
            })
          }, e.key)) : null, [e, n, s, t]);
          return (0, m.jsx)(la, {
            className: (0, I.default)(da.layeredImageFrame, e.length > 1 ? da.layered : da.flat, a),
            style: r,
            initial: _a.fade.in.initial,
            animate: _a.fade.in.animate,
            transition: ua.instantFade,
            "data-expanded-view": s,
            children: o
          })
        };
      var fa = t(38044);
      const ka = ({
          expandedType: e,
          to: a,
          children: t,
          style: s,
          sectionTitle: r = "",
          id: n,
          cardTitle: i,
          position: o
        }) => {
          const {
            track: c
          } = (0, b.useGtmTrack)(), d = (0, g.useCallback)(() => {
            c({
              event: "card_click",
              link_url: a,
              card_id: n,
              card_name: i,
              element_placement: r.toLowerCase(),
              position: o
            })
          }, [r, a, n, i, r, o]);
          return "linkout" === e && a ? (0, m.jsx)(fa.A, {
            to: a,
            style: s,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: d,
            children: t
          }) : t
        },
        ha = {
          content: "rockstargames-sites-gta-gen9c65ddebc8ee2173143d87e1079f2455a",
          customModalContent: "rockstargames-sites-gta-gen9fc96cdfdaeb2ad81b1b409fcb233657e",
          pillBtn: "rockstargames-sites-gta-gen9ddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-sites-gta-gen9b4fbb4006fc27b899dac5e522ef574e3"
        },
        {
          variants: va
        } = Te.Animations,
        xa = ({
          id: e,
          title: a,
          content: t,
          size: s = "md",
          expandedType: r = "short",
          textOverlayProps: n = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: i = [],
          deckProps: o = {},
          to: c = null,
          tina: d = {},
          position: l = 0,
          sectionTitle: _ = "",
          theme: u,
          pricingOptions: b,
          cardIds: p,
          platformOptions: f = null
        }) => {
          const k = (0, z.useTinaPayload)(),
            h = d?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
            [v, x] = (0, g.useState)(o?.size ?? s),
            [y, j] = (0, g.useState)(0),
            w = void 0 !== b?.hasPricingOptions || void 0 !== f?.hasPlatformOptions;
          return (0, g.useEffect)(() => {
            x(o?.size ?? s)
          }, [o?.size, s]), (0, m.jsx)(ca, {
            id: e,
            title: a,
            size: v,
            expandedType: r,
            images: i,
            deckProps: o,
            prod: h,
            payload: {
              content: t,
              meta: {}
            },
            variants: va.plainCard,
            textOverlayProps: n,
            modalProps: {
              className: ha.customModal,
              contentClassName: ha.customModalContent
            },
            expandedCardContents: (0, m.jsx)(pa, {
              images: i,
              prod: h,
              expandedView: !0
            }),
            position: l,
            sectionTitle: _,
            theme: u,
            cardIds: p,
            pricingOptions: b,
            platformOptions: f,
            pricingContainerHeight: y,
            isProductCard: w,
            children: (0, m.jsx)(ka, {
              expandedType: r,
              to: c,
              sectionTitle: _,
              id: e,
              cardTitle: a,
              position: l,
              children: (0, m.jsx)("div", {
                className: ha.content,
                "data-product": w,
                children: (0, m.jsx)(Je, {
                  title: a,
                  size: v,
                  textOverlayProps: n,
                  pricingOptions: b,
                  platformOptions: f,
                  setPricingContainerHeight: j,
                  children: (0, m.jsx)(pa, {
                    images: i,
                    prod: h
                  })
                })
              })
            })
          })
        },
        ya = (0, q.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            description: "Tracklist",
            defaultMessage: "Tracklist"
          }
        }),
        ja = {
          bodySmall: "rockstargames-sites-gta-gen9deed018133fca0148d0bf72fbe95bcd6"
        },
        wa = ({
          track: e,
          artist: a
        }) => (0, m.jsxs)("div", {
          className: ja.track,
          children: [(0, m.jsx)("p", {
            children: e
          }), (0, m.jsx)("p", {
            className: ja.bodySmall,
            children: a
          })]
        }),
        Na = (0, ce.g)(({
          content: e = []
        }) => (0, m.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9e2587587f57e43c9ca90d1e16e4a6ca6",
          children: [(0, m.jsx)("h4", {
            className: "rockstargames-sites-gta-gen9ef167f82b058360b2b6a3466ca73d7de",
            children: (0, m.jsx)(q.FormattedMessage, {
              ...ya.components_track_list_title
            })
          }), (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9beaa4a0a8d9f3a6ef20ee517f222a3c2",
            children: (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c06a65e90847e8b44df20f2aceb57038",
              children: e?.map(e => (0, m.jsx)(wa, {
                track: e.track,
                artist: e.artist
              }, e.key))
            })
          })]
        }));
      var Sa = t(95967);
      const {
        variants: Ca
      } = Te.Animations;
      var Ia = t(42249),
        Ta = t(14653),
        Ea = t(50662);
      const za = "rockstargames-sites-gta-gen9b7d3d1587271986440f5870d8d02eb3b",
        Aa = "rockstargames-sites-gta-gen9fcffcc6e594fbf9a4a6e9ab5a8d034c7",
        Pa = {
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
        La = ({
          title: e = "thumbnail gallery",
          thumbsPerView: a = 3,
          loop: t = !1,
          navigation: s = !1,
          slideChildren: r = [],
          variants: n = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          },
          transition: i = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          }
        }) => {
          const {
            track: o
          } = (0, b.useGtmTrack)(), [c, d] = (0, g.useState)([Ea.U1, Ea.WO, Ea.dK]), [l, _] = (0, g.useState)(null), [u, p] = (0, g.useState)(null);
          return (0, g.useEffect)(() => {
            const e = [Ea.U1, Ea.WO, Ea.dK];
            s && e.push(Ea.Vx), d(e)
          }, [s]), (0, g.useEffect)(() => {
            if (!r) return;
            const e = r.map((e, a) => (0, m.jsx)(Ta.qr, {
              children: e
            }, Symbol(a).toString()));
            p(e)
          }, [r]), u ? (0, m.jsxs)(E.motion.div, {
            className: "rockstargames-sites-gta-gen9f2d55de974817e455a162843125a8771",
            variants: n.parent,
            transition: i.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, m.jsx)(E.motion.div, {
              className: za,
              variants: n.main,
              transition: i.main,
              initial: "initial",
              animate: "animate",
              children: (0, m.jsx)(Ta.RC, {
                loop: t,
                navigation: s,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: l
                },
                modules: c,
                breakpoints: Pa,
                className: za,
                onSlideNextTransitionEnd: () => {
                  o({
                    event: "carousel_next",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  o({
                    event: "carousel_previous",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  o({
                    event: "carousel_swipe",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                children: u
              })
            }), (0, m.jsx)(E.motion.div, {
              className: Aa,
              variants: n.thumbs,
              transition: i.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, m.jsx)(Ta.RC, {
                threshold: 50,
                onSwiper: _,
                loop: t,
                breakpoints: Pa,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: c,
                className: Aa,
                children: u
              })
            })]
          }) : null
        },
        Ma = ({
          images: e,
          title: a,
          expandedView: t,
          variants: s,
          transition: r
        }) => {
          const n = (0, g.useMemo)(() => e && 0 !== e?.length ? e.map((e, a) => e?.image?.sources ? (0, g.createElement)(he.A, {
            ...e,
            key: a,
            style: {
              ...e?.style,
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null) : null, [e]);
          return !n?.length || n?.length < 1 ? null : 1 === n.length ? n : (0, m.jsx)(La, {
            slideChildren: n,
            title: a,
            navigation: t,
            thumbsVisible: t,
            spaceBetween: 0,
            variants: s,
            transition: r
          })
        },
        Ra = {
          customModalContent: "rockstargames-sites-gta-gen9ecdc3da21cda9331cebe845898b7fa7b",
          pillBtn: "rockstargames-sites-gta-gen9cf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-sites-gta-gen9cbdd37e11b752cff831c5a96aeb7dbeb"
        },
        {
          transitions: Da,
          variants: Va
        } = Te.Animations,
        Oa = ({
          id: e,
          title: a,
          content: t,
          size: s = "md",
          expandedType: r = "gallery",
          textOverlayProps: n = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: i = [],
          deckProps: o = {},
          tina: c = {},
          payload: d,
          position: l = 0,
          sectionTitle: _ = "",
          cardIds: u
        }) => {
          const b = (0, z.useTinaPayload)(),
            p = d ?? b,
            f = c?.payload?.meta?.cdn ?? p?.meta?.prod ?? !1,
            k = ((e, a) => e?.map(e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e))(i, f),
            [h, v] = (0, g.useState)(o?.size ?? s),
            {
              parent: x,
              main: y,
              thumbs: j
            } = Va?.cardWithImageGallery?.gallery ?? {};
          return (0, g.useEffect)(() => {
            v(o?.size ?? s)
          }, [o?.size, s]), (0, m.jsx)(ca, {
            id: e,
            position: l,
            sectionTitle: _,
            payload: {
              content: t,
              meta: {},
              payload: p
            },
            title: a,
            size: h,
            expandedType: r,
            images: k,
            deckProps: o,
            prod: f,
            variants: Va.cardWithImageGallery,
            textOverlayProps: n,
            modalProps: {
              className: Ra.customModal,
              contentClassName: Ra.customModalContent
            },
            expandedCardContents: (0, m.jsx)(Ma, {
              images: k,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: x,
                main: y,
                thumbs: j
              },
              transition: {
                parent: Da.cardOpen,
                main: Da.cardOpen,
                thumbs: Da.cardOpen
              }
            }),
            cardIds: u,
            children: (0, m.jsx)("div", {
              className: Ra.content,
              children: (0, m.jsx)(Je, {
                title: a,
                size: h,
                textOverlayProps: n,
                children: (0, m.jsx)(Ma, {
                  images: k,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        };
      var Ba = t(1e4);
      const $a = {
          content: "rockstargames-sites-gta-gen9db8d475894c24c580268644776443fa6",
          customModalContent: "rockstargames-sites-gta-gen9c758020ea3f5943e5f8a7d89ade3da69",
          logo: "rockstargames-sites-gta-gen9f5649436402db0dddc6a55b41c5556cc",
          pillBtn: "rockstargames-sites-gta-gen9e810afee3cb66fbbb03c473e5aa2f5be",
          secondary: "rockstargames-sites-gta-gen9d761507b70662391f68f5018510655ea",
          selected: "rockstargames-sites-gta-gen9e4ad62c1f330692bdb75370f5bbe66eb"
        },
        {
          variants: Ga
        } = Te.Animations,
        Fa = ({
          id: e,
          logoImage: a = null,
          logoImageHeight: t = "auto",
          name: s = null,
          title: r,
          titleSizeClass: n = null,
          content: i,
          ctaText: o,
          ctaURL: c,
          size: d = "md",
          expandedType: l = "short",
          textOverlayProps: _ = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: u = [],
          deckProps: b = {},
          to: p = null,
          tina: f = {},
          cardIds: k,
          theme: h
        }) => {
          const v = (0, q.useIntl)(),
            x = (0, z.useTranslations)({
              payload: f?.payload,
              variables: f?.variables ?? {}
            }),
            [y, j] = (0, g.useState)(b?.size ?? d),
            w = (0, z.useGetCdnSource)(a ?? null),
            N = x?.content?.[0],
            S = N?.body ?? N?._memoq?.body;
          return (0, g.useEffect)(() => {
            j(b?.size ?? d)
          }, [b?.size, d]), (0, m.jsx)(ca, {
            id: e,
            title: r,
            sectionTitle: s || r,
            size: y,
            expandedType: l,
            images: u,
            deckProps: b,
            payload: {
              content: i,
              meta: {}
            },
            variants: Ga.plainCard,
            textOverlayProps: _,
            modalProps: {
              className: $a.customModal,
              contentClassName: $a.customModalContent
            },
            expandedCardContents: (0, m.jsx)(pa, {
              images: u,
              expandedView: !0
            }),
            theme: h,
            cardIds: k,
            isCoverCard: !0,
            children: (0, m.jsx)(ka, {
              expandedType: l,
              to: p,
              sectionTitle: s || r,
              children: (0, m.jsxs)("div", {
                className: $a.content,
                children: [a && (0, m.jsx)("img", {
                  className: $a.logo,
                  alt: "logo",
                  src: w,
                  style: {
                    height: `${t}`
                  }
                }), (0, m.jsx)("h2", {
                  className: n,
                  children: r
                }), S && (0, m.jsx)("p", {
                  children: S
                }), (0, m.jsx)(Ba.A, {
                  target: "newtab" === l ? "_blank" : "_self",
                  to: c || void 0,
                  children: o || v.formatMessage(ra.card_learn_more)
                })]
              })
            })
          })
        };
      var Ha = t(36038),
        Ua = t.n(Ha),
        qa = t(80957);
      const Wa = {
          controls: "rockstargames-sites-gta-gen9add02ff2cfa9b26941d96126a31bc21f",
          controlsButtons: "rockstargames-sites-gta-gen9e77442300b4509fe7a0104b3fb4cecf5",
          controlsCurrentBg: "rockstargames-sites-gta-gen9cca0f086505f02983f345dfb64c2ca45",
          controlsCurrentBgVisible: "rockstargames-sites-gta-gen9b91004149be94449c7fbfee3d24bde58",
          controlsNextTrack: "rockstargames-sites-gta-gen9cd583d32f7692538f7f5d1181943c899",
          controlsPlayPause: "rockstargames-sites-gta-gen9c58746be839199f6102319efb7659a54",
          controlsPlayPausePlaying: "rockstargames-sites-gta-gen9cecadc2b92a0597a55ba5870b46706c9",
          controlsPrevTrack: "rockstargames-sites-gta-gen9d84e8c03d27a3038eb54cb7d12c8ac52",
          controlsScrub: "rockstargames-sites-gta-gen9f90cfd862377d31cb5ee1faf9249fd3c",
          controlsScrubTrack: "rockstargames-sites-gta-gen9f4bb886e9545730ccc323f43a1dfb45c",
          controlsTrack: "rockstargames-sites-gta-gen9ff717d7c9ac30041034f2c95fd3e3017",
          controlsTrackAnimating: "rockstargames-sites-gta-gen9f09973ae8e0457805bc0a1090d05e444",
          controlsTrackArtist: "rockstargames-sites-gta-gen9e0b6ffdc4c40a6992d70395cd98cb6c5",
          controlsTrackBurger: "rockstargames-sites-gta-gen9f3106c22742d7b08e577964a56789504",
          controlsTrackTitle: "rockstargames-sites-gta-gen9f47edf112978c82a9bbfb2476170007f",
          fixedToBottom: "rockstargames-sites-gta-gen9ea802f7f67d39cfdd9625cc8de62828f",
          iconBurger: "rockstargames-sites-gta-gen9a18e526e94dfd87e9b5696a21c1c7754",
          player: "rockstargames-sites-gta-gen9c7765dd7dbdff24d38ef3326bb8a938b",
          scrollText: "rockstargames-sites-gta-gen9b42c9e9ba3716121d34600c92fdf4398",
          trackActive: "rockstargames-sites-gta-gen9a74e95cb6296abf8ca92168db76fecb9",
          trackIndex: "rockstargames-sites-gta-gen9d0322571401b3a4dac22628533213ede",
          trackList: "rockstargames-sites-gta-gen9c7dfe95abfbec1cdef9dfb87d9fd1a1f",
          trackTitle: "rockstargames-sites-gta-gen9eceb3183ee9dc74e33d4184b307ba923",
          tracks: "rockstargames-sites-gta-gen9b4036f5fe1d1ab9674cc7c6e40f9a53c",
          tracksOpen: "rockstargames-sites-gta-gen9a9a553961300b8ee030d0c90ac613c4c"
        },
        Ka = ({
          src: e
        }) => (0, m.jsx)("div", {
          className: Wa.cover,
          style: {
            background: `url(${e}) center/cover`
          }
        }),
        Ya = ({
          timing: e = {
            current: 0,
            duration: 0
          },
          playing: a,
          audioRef: t,
          setPlaying: s,
          tracksOpen: r,
          setTracksOpen: n,
          trackData: i,
          setTrackId: o,
          trackBounds: c,
          setAutoNext: d
        }) => {
          const l = (0, g.useRef)(null),
            _ = (0, g.useRef)(null),
            u = (0, g.useRef)(null),
            [b, p] = (0, g.useState)(null),
            [f, k] = (0, g.useState)(!1),
            h = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, g.useEffect)(() => {
            if (!_.current || !u.current) return;
            const e = () => {
              u.current && _.current && p(u.current.clientWidth > _.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }, [u, _, e]), (0, g.useEffect)(() => {
            if (!l.current || !e?.duration) return;
            let a = null;
            const s = new(Ua())(l.current),
              r = a => {
                if (l.current) {
                  const s = l.current.clientWidth;
                  if (!l.current.contains(a.srcEvent.target)) return;
                  const r = Math.max(0, a.srcEvent.offsetX),
                    n = Number(r / s * e.duration);
                  t.currentTime = n
                }
              },
              n = () => {
                a ? t.pause() : t.play()
              },
              i = () => {
                a = t.paused, t.pause()
              };
            return s.on("panstart", i), s.on("panleft", r), s.on("panright", r), s.on("panend", n), s.on("tap", r), () => {
              s.off("panstart", i), s.off("panleft", r), s.off("panright", r), s.off("panend", n), s.off("tap", r)
            }
          }, [l.current, e.duration]), (0, g.useEffect)(() => {
            const e = Number(t?.currentTime);
            (a || !isNaN(e) && 0 !== e) && k(!0)
          }, [a, t?.currentTime]), (0, m.jsxs)("div", {
            className: Wa.controls,
            style: {
              "--track-color": i.color,
              "--track-mix-blend-mode": i.mix_blend_mode,
              "--current-pct": e.current / e.duration
            },
            children: [(0, m.jsx)("div", {
              className: [Wa.controlsCurrentBg, f ? Wa.controlsCurrentBgVisible : ""].join(" ")
            }), (0, m.jsx)("div", {
              className: Wa.controlsTrack,
              ref: _,
              children: (0, m.jsx)("span", {
                className: [Wa.controlsTrackTitle, b ? Wa.controlsTrackAnimating : ""].join(" "),
                ref: u,
                children: i.title
              })
            }), (0, m.jsxs)("div", {
              className: Wa.controlsButtons,
              children: [(0, m.jsx)("div", {
                className: Wa.controlsPrevTrack,
                onClick: () => {
                  c && (o(c[0]), d(!0), s(!0))
                }
              }), (0, m.jsx)("div", {
                className: [Wa.controlsPlayPause, a ? Wa.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  s(!a)
                }
              }), (0, m.jsx)("div", {
                className: Wa.controlsNextTrack,
                onClick: () => {
                  c && (o(c[1]), d(!0), s(!0))
                }
              })]
            }), (0, m.jsx)("div", {
              "data-active": r ? "" : null,
              className: Wa.controlsTrackBurger,
              children: (0, m.jsx)("div", {
                className: Wa.iconBurger,
                onClick: () => {
                  n(!r)
                }
              })
            }), (0, m.jsxs)("div", {
              className: Wa.controlsScrub,
              children: [(0, m.jsx)("span", {
                children: h(e.current)
              }), (0, m.jsx)("div", {
                className: Wa.controlsScrubTrack,
                ref: l
              }), (0, m.jsx)("span", {
                children: h(e.duration)
              })]
            })]
          })
        },
        Xa = ({
          tracks: e,
          trackId: a,
          setTrackId: t,
          tracksOpen: s,
          setTracksOpen: r,
          setPlaying: n,
          setAutoNext: i
        }) => (0, m.jsxs)("div", {
          className: Wa.tracks,
          children: [(0, m.jsx)("h4", {
            children: "Tracks"
          }), (0, m.jsx)("div", {
            className: Wa.trackBurger,
            onClick: () => {
              r(!s)
            }
          }), (0, m.jsx)("div", {
            className: Wa.trackList,
            children: e.map((e, s) => (0, m.jsxs)("a", {
              style: {
                "--highlight-color": e.color
              },
              className: a === e.id ? Wa.trackActive : "",
              onClick: () => {
                t(e.id), n(!0), i(!0)
              },
              children: [(0, m.jsx)("span", {
                className: Wa.trackIndex,
                children: String(s + 1).padStart(2, "0")
              }), (0, m.jsx)("span", {
                className: Wa.trackTitle,
                children: e.title
              }), (0, m.jsx)("span", {
                className: Wa.trackTime,
                children: e.duration
              })]
            }, e.id))
          })]
        }),
        Za = ({
          id: e,
          className: a = ""
        }) => {
          const {
            data: t
          } = (0, u.useQuery)(qa.GetAudioAlbum, {
            variables: {
              id: e
            }
          }), [s, r] = (0, g.useState)(), [n, i] = (0, g.useState)(), [o, c] = (0, g.useState)(), [d, l] = (0, g.useState)(!1), [_, b] = (0, g.useState)(!1), [p, f] = (0, g.useState)(), [k, h] = (0, g.useState)({
            current: 0,
            duration: 0
          }), [v, x] = (0, g.useState)(!0);
          return (0, g.useEffect)(() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (i(a.data.rockstarAudioPlayerPlayTrackId), x(!1), b(!0)), _ && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && b(!1)
              };
            return _ && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }, [_]), (0, g.useEffect)(() => {
            if (!p) return;
            const e = () => {
                isNaN(p.duration) || h({
                  duration: p?.duration ?? 0,
                  current: p?.currentTime ?? 0
                })
              },
              a = () => {
                v && s && i(s[1])
              };
            return p.addEventListener("loadedmetadata", e), p.addEventListener("timeupdate", e), p.addEventListener("ended", a), () => {
              p.removeEventListener("loadedmetadata", e), p.removeEventListener("timeupdate", e), p.removeEventListener("ended", a)
            }
          }, [p, s, v]), (0, g.useEffect)(() => {
            _ && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }, [_]), (0, g.useEffect)(() => {
            p && (_ ? p.play() : p.pause(), l(!1))
          }, [_, p, o?.id]), (0, g.useEffect)(() => {
            if (!n) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex(e => e.id === n);
            r([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), c(e[a])
          }, [n]), (0, g.useEffect)(() => {
            t && i(t.audioAlbum.tracks[0].id)
          }, [t]), o ? (0, m.jsxs)("div", {
            className: [Wa.player, Wa[a], d ? Wa.tracksOpen : ""].join(" "),
            children: [(0, m.jsx)("audio", {
              ref: e => {
                f(e)
              },
              src: o.mp3_src
            }), (0, m.jsx)(Xa, {
              tracks: t.audioAlbum.tracks,
              setTrackId: i,
              trackId: n,
              tracksOpen: d,
              setTracksOpen: l,
              setPlaying: b,
              setAutoNext: x
            }), (0, m.jsx)(Ka, {
              src: o.cover_src
            }), (0, m.jsx)(Ya, {
              setTrackId: i,
              trackBounds: s,
              tracksOpen: d,
              setTracksOpen: l,
              playing: _,
              setPlaying: b,
              timing: k,
              trackData: o,
              audioRef: p,
              setAutoNext: x
            })]
          }) : null
        };
      var Ja = t(2122),
        Qa = t(67127),
        et = t(56386),
        at = t.n(et);
      const tt = ({
        isMulti: e,
        allowSelectAll: a,
        label: t,
        miscProps: s
      }) => {
        const [r, n] = (0, g.useState)(""), i = (0, g.useMemo)(() => at()().getData(), []);
        return (0, m.jsx)(Qa.Ay, {
          unstyled: !0,
          value: r,
          isMulti: e,
          allowSelectAll: a,
          options: i,
          placeholder: t,
          onChange: e => {
            return a = e?.target?.value, void n(a);
            var a
          },
          classNamePrefix: "country-select",
          ...s
        })
      };
      var st = t(77678);
      const rt = ({
        cookieName: e,
        cookieValue: a,
        trueComponent: t,
        falseComponent: s
      }) => {
        const r = (e => {
            const a = document.cookie.split("; "),
              t = `${e}=`,
              s = a.find(e => e.startsWith(t));
            return s?.substring(t.length, s.length)
          })(e),
          n = new URLSearchParams(window.location.search).get(e);
        return n && ((e, a) => {
          e && a && (document.cookie = `${e}=${a}; domain=${(0,st.F)()}; path=/;`)
        })(e, n), r === a || n === a ? t : s
      };
      var nt = t(64581),
        it = t(81140),
        ot = t(68291),
        ct = t(76862);
      const dt = "rockstargames-sites-gta-gen9a19bcd2b98d91e60c43b9de146e20f4e",
        lt = ({
          color: e
        }) => (0, m.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9e83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, m.jsx)("div", {
            className: dt
          }), (0, m.jsx)("div", {
            className: dt
          }), (0, m.jsx)("div", {
            className: dt
          })]
        });
      var mt = t(79955),
        gt = t.n(mt);
      const _t = {
          dropdownWrapper: "rockstargames-sites-gta-gen9bbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-sites-gta-gen9a9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-sites-gta-gen9df17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-sites-gta-gen9cb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-sites-gta-gen9fe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        ut = ({
          children: e,
          className: a,
          title: t
        }) => {
          const [s, r] = (0, g.useState)(!1);
          return (0, m.jsx)(gt(), {
            active: s,
            focusTrapOptions: {
              onDeactivate: () => r(!1),
              clickOutsideDeactivates: !0
            },
            children: (0, m.jsxs)("div", {
              className: [_t.dropdownWrapper, s ? _t.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, m.jsx)("button", {
                className: _t.opener,
                "aria-expanded": s,
                onClick: () => r(!s),
                children: t
              }), s && (0, m.jsx)("div", {
                className: _t.items,
                onClick: () => r(!1),
                children: e
              })]
            })
          })
        },
        bt = ({
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
        pt = ({
          componentTitle: e,
          type: a,
          items: t
        }) => t?.length ? (0, m.jsx)("div", {
          className: "rockstargames-sites-gta-gen9aee2a98f97e777758e2d9bec034314ee",
          type: a,
          children: (0, m.jsxs)(T, {
            children: [e && (0, m.jsx)("h3", {
              children: e
            }), (0, m.jsx)(T, {
              className: "rockstargames-sites-gta-gen9dba17b5c55f8d40e2600765f1a60d6af",
              children: t.map((e, a) => {
                return e?.embed ? (0, m.jsx)(bt, {
                  caption: e?.caption,
                  children: (0, m.jsx)("div", {
                    className: "rockstargames-sites-gta-gen9f0cd8278232673606f9c1715bd4950f6",
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
        ft = {
          animateBox: "rockstargames-sites-gta-gen9b07a3be6338e0ba4b346b072762582e3",
          animateMe: "rockstargames-sites-gta-gen9f7adfd0186421cac9ad0b300911cc9af",
          bar: "rockstargames-sites-gta-gen9bbb7e636ac00581aed0b7e148916cc11",
          barGrow: "rockstargames-sites-gta-gen9e0262d00df9ad8a47b08ae84160bfa51",
          fadeArea: "rockstargames-sites-gta-gen9f47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-sites-gta-gen9c121e11e40215dc778fe8665eb38845d"
        },
        kt = ({
          children: e,
          style: a
        }) => {
          const t = (0, g.useRef)(null);
          return (0, g.useEffect)(() => {
            new IntersectionObserver(e => {
              e.forEach(e => {
                e.isIntersecting && e.target.classList.add([ft.visible])
              })
            }).observe(t?.current)
          }, []), (0, m.jsx)("div", {
            style: a,
            className: [ft.fadeArea].join(" "),
            ref: t,
            children: e
          })
        },
        ht = {
          "bg-img": "rockstargames-sites-gta-gen9ae25e5bf6793a5522c791028f396dedd",
          border: "rockstargames-sites-gta-gen9af6154339558ed7e6e46014575250492",
          "bottom-y": "rockstargames-sites-gta-gen9d66e5203a7bd3c85b99e6caef49b2e9b",
          "center-x": "rockstargames-sites-gta-gen9cc06519a4a0d2db824b70a425c8cefd6",
          "center-y": "rockstargames-sites-gta-gen9d6ce82f1bd5cbf6b4abe650a2738c723",
          contain: "rockstargames-sites-gta-gen9c409c9fefffbfffd091f81bdd75ab8a6",
          cover: "rockstargames-sites-gta-gen9a72cf62465acbddecc3a2cb256640fac",
          dual: "rockstargames-sites-gta-gen9b9c969b033c5016f95d5a70ceea22071",
          fill: "rockstargames-sites-gta-gen9c12eb7986b09f10158c48ad4a902f2ef",
          "hero-lg": "rockstargames-sites-gta-gen9b722bba74c792beb73ccdfec4506b591",
          "hero-md": "rockstargames-sites-gta-gen9c6b26605a3817704bbf427741edb98f8",
          "hero-sm": "rockstargames-sites-gta-gen9e7b70cd5245ee850b5a2bfd048fa02c4",
          imageLayer: "rockstargames-sites-gta-gen9a63d213c123e7da5863c6256e847eb0f",
          "layer-lg-height": "rockstargames-sites-gta-gen9a206e14a6e055900c30ee67826330173",
          "layer-lg-width": "rockstargames-sites-gta-gen9fb58e41629b31453b12d8bbcc525608f",
          "layer-md-height": "rockstargames-sites-gta-gen9e2a2cf239dc64e006fdc9c2c3d280b8e",
          "layer-md-width": "rockstargames-sites-gta-gen9f1d2c109e21746d5fa00c85e56e61b10",
          "layer-sm-height": "rockstargames-sites-gta-gen9c947fc08bb64674c4bf0429e7914507e",
          "layer-sm-width": "rockstargames-sites-gta-gen9a1289245dc6b1854c3aec5b1a8a11593",
          "layer-xl-height": "rockstargames-sites-gta-gen9a4d21457b55a0626d1cf5170845ba8d6",
          "layer-xl-width": "rockstargames-sites-gta-gen9e5ecbec181677eea6c9c72e02580c501",
          "layer-xs-height": "rockstargames-sites-gta-gen9d0f6abd48b388b8e3b18eee4bc19039d",
          "layer-xs-width": "rockstargames-sites-gta-gen9c60b1a515049d3f670d8c5a76c8a1bf6",
          "layer-xxl-height": "rockstargames-sites-gta-gen9d74cf249eb57fb6682f07fe13fdfdb4a",
          "layer-xxl-width": "rockstargames-sites-gta-gen9ac03c56e2475aecafc08e873eed26566",
          layeredImage: "rockstargames-sites-gta-gen9fb27e7361e78dacdcf500e0b9a2b4fce",
          layersWrapper: "rockstargames-sites-gta-gen9af169afca6f741daca0331a1b13fa5f1",
          "left-x": "rockstargames-sites-gta-gen9bb4dd9e1570a80cc01f752a2230abdac",
          "right-x": "rockstargames-sites-gta-gen9d50c0c4bee9b09502dd611543223ed37",
          shards: "rockstargames-sites-gta-gen9a0d1e1b5705f11b3b9301717bc5f6245",
          shards_three: "rockstargames-sites-gta-gen9cf01ef76b0d5cc2a7bc4f005be4eb31f",
          shards_two: "rockstargames-sites-gta-gen9f317b17c9b0f0a27ed95ec2844857f25",
          "top-y": "rockstargames-sites-gta-gen9a9cd0a03e7193a5b47c6e767e045a1ec"
        },
        vt = ({
          style: e,
          className: a
        }) => {
          const t = {
              ...e
            },
            s = e["--border-image-source"],
            r = (0, z.useGetCdnSource)(s || null);
          return s && (t["--border-image-source"] = `url(${r})`), (0, m.jsx)("div", {
            className: (0, I.default)(ht.border, a),
            style: {
              ...t
            }
          })
        },
        xt = e => e?.images ? (0, m.jsx)("div", {
          className: (0, I.default)(ht.layeredImage, ht[e?.variantClass], ht[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, m.jsxs)("div", {
            className: ht.layersWrapper,
            children: [e?.images?.map((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: n,
                positionClassX: i,
                positionClassY: o,
                zIndex: c,
                className: d,
                style: l,
                alt: g,
                displayClass: _
              } = e;
              return (0, m.jsx)(Sa.A, {
                image: t,
                style: {
                  zIndex: c ?? a + 1
                },
                imageStyle: l,
                className: (0, I.default)(d, _, ht.imageLayer, ht[s], ht[r], ht[n], ht[i], ht[o]),
                alt: g
              }, c ?? a + 1)
            }), e?.borderImage && (0, m.jsx)(vt, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        yt = e => {
          const {
            image: a,
            alt: t,
            thumbnail: s,
            caption: r,
            style: n,
            showOpenButtonMobile: i,
            showOpenButton: o,
            showDownloadButtonMobile: c,
            showDownloadButton: d,
            showZoomControls: l
          } = e, g = (0, u.useLocale)(), {
            isMobile: _
          } = (0, u.useWindowResize)(), b = a?.sources ?? {}, p = s?.image?.sources ?? {}, f = (0, C.C1)(b?.[g] ?? b?.en_us) ?? "", k = (0, C.C1)(p?.[g] ?? p?.en_us) ?? f, h = _ ? i : o, v = _ ? c : d;
          return (0, m.jsx)("div", {
            style: n,
            className: "rockstargames-sites-gta-gen9adbaa0167219cd891249a29faec00e8f",
            children: (0, m.jsxs)(y.Lightbox.Root, {
              altText: t || "",
              children: [(0, m.jsxs)(y.Lightbox.Trigger, {
                style: {
                  aspectRatio: s?.thumbnailAspectRatio
                },
                children: [(0, m.jsx)(y.Lightbox.Thumbnail, {
                  src: k,
                  style: {
                    objectPosition: s?.thumbnailPosition
                  }
                }), h && (0, m.jsx)(y.Lightbox.OpenIcon, {
                  style: {
                    boxSizing: "content-box"
                  }
                })]
              }), (0, m.jsxs)(y.Lightbox.Portal, {
                children: [(0, m.jsx)(y.Lightbox.Overlay, {}), (0, m.jsxs)(y.Lightbox.Content, {
                  children: [(0, m.jsx)(y.Lightbox.ZoomPan, {
                    children: (0, m.jsx)(y.Lightbox.Image, {
                      src: f
                    })
                  }), (0, m.jsxs)(y.Lightbox.Controls, {
                    children: [r && (0, m.jsx)(y.Lightbox.Caption, {
                      children: r
                    }), (0, m.jsx)(y.Lightbox.Close, {
                      showTooltip: !1
                    }), l && (0, m.jsx)(y.Lightbox.Zoom, {}), v && (0, m.jsx)(y.Lightbox.Download, {})]
                  })]
                })]
              })]
            })
          })
        },
        jt = {
          animatePlaceholder: "rockstargames-sites-gta-gen9f6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-sites-gta-gen9c3684b80c99c860036d9337843a7be58",
          multiSourceContainer: "rockstargames-sites-gta-gen9a99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-sites-gta-gen9bc42c525ec0bd93df46e1999e278e9fb",
          pillBtn: "rockstargames-sites-gta-gen9c79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-sites-gta-gen9c53675ad15e2ef662362850daab33791"
        },
        wt = ({
          imageUrl: e,
          className: a,
          alt: t,
          style: s,
          lazy: r = !1,
          decoding: n = "auto",
          sizes: i = [320, 480, 768, 1024, 1440, 1920, 2560]
        }) => {
          const [o, c] = (0, g.useState)(!1);
          return (0, m.jsxs)("div", {
            className: jt.multiSourceContainer,
            children: [!o && (0, m.jsx)("img", {
              className: [a, jt.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: s
            }), (0, m.jsx)("img", {
              className: [jt.multiSourceImage, a].join(" "),
              src: `${e}?im=Resize=1920`,
              srcSet: (d = e, i.map(e => `${d}?im=Resize=${e} ${e}w`).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: s,
              onLoad: () => {
                c(!0)
              },
              loading: r ? "lazy" : "eager",
              decoding: n
            })]
          });
          var d
        };
      var Nt = t(31821);
      const St = {
          tag: "rockstargames-sites-gta-gen9b660bb706132d84852c02df01cc6ed5a"
        },
        Ct = ({
          className: e,
          href: a,
          title: t,
          style: s
        }) => {
          const r = (0, m.jsxs)("div", {
            style: s,
            className: [St.tag, e].join(" "),
            children: [(0, m.jsx)("i", {}), t]
          });
          return void 0 !== a ? (0, m.jsx)(fa.A, {
            to: a,
            children: r
          }) : r
        },
        It = {
          info: "rockstargames-sites-gta-gen9ea1c51ae745531c2aeabbe3fcf603842",
          newswireBlock: "rockstargames-sites-gta-gen9b394b56c31488c36155ca82090c66e6f",
          newswireBlockNoSpecialOrder: "rockstargames-sites-gta-gen9c06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-sites-gta-gen9ca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-sites-gta-gen9b3d4a8cfcc371ae39ce6220d009c5954",
          startAnimation: "rockstargames-sites-gta-gen9a56af3c95449fe8452485dfb6c89fc29",
          title: "rockstargames-sites-gta-gen9f1dfe59c3d981dbe132559620885ecea",
          top: "rockstargames-sites-gta-gen9eee9c5d3b714a61ac265369800a6d4e0"
        },
        Tt = ({
          section: e = "",
          index: a,
          post: t,
          noSpecialOrder: s = !1,
          focused: r
        }) => {
          const {
            track: n
          } = (0, b.useGtmTrack)(), [i] = (0, _.useSearchParams)(), o = t.preview_images_parsed.newswire_block, c = (0, Nt.Ub)(x.breakpoints.mobile), d = {
            default: 0 !== a || s ? o.square || o.d16x9 || o._fallback : o.d16x9 || o.square || o._fallback,
            mobile: o.square || o._fallback
          }, [l] = (0, u.usePreloadImg)(d.default), p = {
            default: {
              backgroundImage: `url(${d.default})`
            },
            mobile: {
              backgroundImage: `url(${d.mobile})`
            }
          }, f = (0, g.useCallback)(() => {
            n({
              event: "card_click",
              card_id: t.id,
              card_name: t.name_slug.replace(/-/g, " "),
              link_url: t.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }, [t]);
          return (0, m.jsx)(fa.A, {
            to: t.url,
            className: [It.newswireBlock, s ? It.newswireBlockNoSpecialOrder : "", null !== l ? It.startAnimation : ""].join(" "),
            focused: r,
            onClick: f,
            children: (0, m.jsxs)(m.Fragment, {
              children: [0 !== a || i.get("tag_id") ? (0, m.jsx)("div", {
                className: It.preview,
                style: p.default
              }) : (0, m.jsx)("div", {
                className: c ? It.previewMobile : It.preview,
                style: c ? p.mobile : p.default
              }), (0, m.jsxs)("div", {
                className: It.info,
                children: [(0, m.jsxs)("div", {
                  className: It.top,
                  children: [t.primary_tags.length ? (0, m.jsx)(Ct, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, m.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, m.jsx)("h5", {
                  className: It.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Et = t(27750),
        zt = t.n(Et);
      const At = (0, u.withTranslations)(({
          section: e = "",
          relativeTo: a = "",
          tagId: t = null,
          metaUrl: s = "/newswire",
          t: r
        }) => {
          const n = (0, u.useLocale)(),
            {
              track: i
            } = (0, b.useGtmTrack)(),
            [o, c] = (0, _.useSearchParams)(),
            {
              tagId: d = null
            } = (0, _.useParams)(),
            [l, p] = (0, g.useState)(d ?? t ?? o.get("tag_id")),
            [f, k] = (0, g.useState)(1),
            [h, v] = (0, g.useState)(20),
            [x, y] = (0, g.useState)([]),
            [j, w] = (0, g.useState)(null),
            [N, {
              loading: S,
              data: C
            }] = (0, u.useLazyQuery)(zt(), {
              variables: {
                tagId: Number(l),
                page: f,
                metaUrl: s,
                limit: h,
                locale: n
              }
            });
          return (0, g.useEffect)(() => {
            k(1), y([]), v(20), p(d ?? t ?? o.get("tag_id")), N()
          }, [o.get("tag_id"), d, t]), (0, g.useEffect)(() => {
            const e = x;
            C?.posts?.paging && w(C?.posts?.paging), C?.posts?.results && y(e.concat(C?.posts?.results))
          }, [C]), (0, g.useEffect)(() => {
            (() => {
              const e = o.get("page"),
                a = Number(e ?? 1);
              v(20 * a), N()
            })()
          }, []), x.length ? (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e81cdae3d47ce0490795e6588b3c8464",
            "data-testid": "newswire-list",
            children: [(0, m.jsx)(Rt, {
              section: e,
              posts: x,
              relativeTo: a,
              noSpecialOrder: null !== l
            }), null !== j && j.nextPage ? (0, m.jsx)(Ba.A, {
              className: "rockstargames-sites-gta-gen9e125d510192feb4ce2844cb97084b838",
              "data-testid": "more-stories",
              onClick: () => {
                const e = o.get("page"),
                  a = Number(e ?? f) + 1;
                k(a), 20 !== h && v(20), N(), c({
                  page: String(a),
                  ...l && {
                    tag_id: String(l)
                  }
                }, {
                  replace: !0
                }), i({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: S,
              context: "secondary",
              children: r("More Stories")
            }) : ""]
          }) : null
        }),
        Pt = {
          just1post: "rockstargames-sites-gta-gen9d46374473ed68a4121f88b44eba06359",
          pillBtn: "rockstargames-sites-gta-gen9f2d003dd0e6a129a56ea07208548787c",
          posts: "rockstargames-sites-gta-gen9cfe09d4dc8447b1e606404300d040e7a",
          related: "rockstargames-sites-gta-gen9b8a63bb419c1f2a8f94e099e1e650e48",
          selected: "rockstargames-sites-gta-gen9f94728c4a438800b9abab11a8b3e3c0a"
        },
        Lt = (0, u.withTranslations)(({
          posts: e,
          t: a
        }) => (0, m.jsxs)("section", {
          className: Pt.related,
          children: [(0, m.jsx)("h2", {
            children: a("Related Stories")
          }), (0, m.jsx)("div", {
            className: [Pt.posts, 1 === e.length ? Pt.just1post : ""].join(" "),
            children: e.map(e => (0, m.jsx)(Tt, {
              noSpecialOrder: !0,
              post: e
            }, e.id))
          })]
        })),
        Mt = {
          newswireBlocks: "rockstargames-sites-gta-gen9ea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-gta-gen9d301334a72b626f8cc2f5b9733299e76"
        },
        Rt = (0, u.withGtmTracking)(({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: t,
          gtmTrack: s
        }) => {
          const [r, n] = (0, g.useState)(null);
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
            }), s(a), n(t.length)
          }, [t.length]), (0, m.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Mt.newswireBlocks, a ? Mt.noSpecialOrder : "", Mt.contextHome].join(" "),
            children: t.map((t, s) => (0, m.jsx)(Tt, {
              section: e,
              index: s,
              noSpecialOrder: a,
              post: t,
              focused: s === r
            }, t.id))
          })
        }),
        Dt = "rockstargames-sites-gta-gen9b013d77f453d7053bbcf06f173ff326c",
        Vt = ({
          children: e,
          data: a,
          onPageUpdate: t,
          page: s,
          className: r
        }) => (0, m.jsx)("a", {
          href: "#",
          className: s === a.page ? `rockstargames-sites-gta-gen9b577d5726806ec872ecdb8a46905734f ${r??""}` : "",
          onClick: e => {
            e.preventDefault(), t(s)
          },
          children: e
        }),
        Ot = ({
          data: e,
          onPageUpdate: a,
          className: t
        }) => {
          if (1 === e.pageCount) return null;
          const s = new Array(Math.min(e.pageCount, 8)),
            r = Math.max(e.pageCount - 8, 1),
            n = Math.max(2, e.page - 4),
            i = Array.from(s, (e, a) => a + Math.min(r, n));
          return (0, m.jsxs)("div", {
            className: `rockstargames-sites-gta-gen9e480f25872ae2a8b3fcd1e492d838301 ${t??""}`,
            children: [e.pageCount > 8 ? (0, m.jsxs)(m.Fragment, {
              children: [(0, m.jsx)(Vt, {
                data: e,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, m.jsx)("div", {
                className: Dt,
                children: "..."
              }) : ""]
            }) : "", i.map(s => (0, m.jsx)(Vt, {
              data: e,
              onPageUpdate: a,
              page: s,
              className: t,
              children: s
            }, s)), e.pageCount > 8 ? (0, m.jsxs)(m.Fragment, {
              children: [i.slice(-1)[0] + 1 < e.pageCount ? (0, m.jsx)("div", {
                className: Dt,
                children: "..."
              }) : "", (0, m.jsx)(Vt, {
                data: e,
                onPageUpdate: a,
                page: e.pageCount,
                children: e.pageCount
              })]
            }) : ""]
          })
        },
        Bt = {
          responsiveFlexBox: "rockstargames-sites-gta-gen9fad65f02dd0ee292c36ec9d50b9c249a",
          responsiveFlexItem: "rockstargames-sites-gta-gen9f5215494f66727858110c9c73e2d882a",
          responsiveImage: "rockstargames-sites-gta-gen9d437a700a9b768227a114e70db78af03"
        },
        $t = ({
          children: e,
          className: a,
          style: t
        }) => (0, m.jsx)("div", {
          className: [Bt.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Gt = {
          responsiveFlexItem: "rockstargames-sites-gta-gen9e7371144db2e94a049204d4b178416ec"
        },
        Ft = ({
          children: e,
          className: a,
          style: t
        }) => (0, m.jsx)("div", {
          className: [Gt.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Ht = {
          responsiveGridBox: "rockstargames-sites-gta-gen9e9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-sites-gta-gen9b0d14e4a5e63a903117e93a392cbfb53"
        },
        Ut = ({
          children: e,
          cols: a,
          className: t,
          rows: s,
          style: r
        }) => {
          const n = r ? {
            ...r
          } : {};
          return void 0 !== a && (n.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== s && (n.gridTemplateRows = `repeat(${s}, 1fr)`), (0, m.jsx)("div", {
            className: [Ht.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: n,
            children: e
          })
        },
        qt = {
          responsiveGridBox: "rockstargames-sites-gta-gen9e721a07d53edbb90b165a7720bb32c08",
          responsiveGridItem: "rockstargames-sites-gta-gen9a32d93b6ae982b5ad473f75cf86ff085"
        },
        Wt = ({
          children: e,
          className: a,
          style: t
        }) => (0, m.jsx)("div", {
          className: [qt.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Kt = {
          responsiveImage: "rockstargames-sites-gta-gen9f642b754e0efd503262ab7ca0c7b9f5b"
        },
        Yt = ({
          src: e,
          className: a = "",
          animate: t,
          ariaLabel: s,
          style: r = {}
        }) => {
          const [n, i] = (0, u.usePreloadImg)(e);
          if (!n) return null;
          r.backgroundImage = `url(${e})`;
          const o = {
            ...r
          };
          return i && (o["--aspect-ratio"] = i.width / i.height), (0, m.jsx)("div", {
            role: "img",
            "aria-label": s ?? "R* Games",
            className: [Kt.responsiveImage, t ? Kt.animateBox : "", a].join(" "),
            style: o
          })
        },
        Xt = {
          maxWidth: "rockstargames-sites-gta-gen9b2c8f49e280c2e7c204b30a4af8c13b9",
          responsiveSection: "rockstargames-sites-gta-gen9bd7167fb3a3edaf4df4d9a576efb1170"
        },
        Zt = ({
          children: e,
          className: a,
          style: t,
          maxWidth: s
        }) => (0, m.jsx)("section", {
          className: [Xt.responsiveSection, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: s ? (0, m.jsx)("div", {
            className: Xt.maxWidth,
            children: e
          }) : e
        });
      var Jt = t(45124);
      const Qt = ({
        html: e
      }) => (0, m.jsx)("div", {
        children: (0, Jt.Ay)(e)
      });
      var es = t(18368);
      const as = () => {
        const {
          pathname: e
        } = (0, _.useLocation)();
        return (0, g.useEffect)(() => {
          const e = document.scrollingElement || document.documentElement;
          setTimeout(() => {
            e.scrollTop = 0
          }, 0)
        }, [e]), null
      };
      var ts = t(68993),
        ss = t(5413);
      const rs = ({
        children: e
      }) => (0, m.jsx)("div", {
        className: "rockstargames-sites-gta-gen9aae4d33d1eecebdc9b489f8d7a1ad708",
        children: (0, m.jsx)("div", {
          className: "rockstargames-sites-gta-gen9c573fe5c7bdcc46c4d57ec4a2c275e3b",
          children: e
        })
      });
      var ns = t(57927);
      const is = ({
          children: e,
          style: a,
          theme: t
        }) => {
          const [s, r] = (0, g.useState)(t);
          return (0, g.useEffect)(() => {
            t && r(t)
          }, [t]), (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e5e0faf6ab9871fd60b958c6f7dcf519",
            style: a,
            "data-theme": s,
            children: e
          })
        },
        os = {
          card: "rockstargames-sites-gta-gen9f93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-sites-gta-gen9a1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-sites-gta-gen9dabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-sites-gta-gen9fd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-sites-gta-gen9b8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-sites-gta-gen9fd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-sites-gta-gen9a626ad482ff0be0336e75929516654d5"
        },
        cs = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [s] = (0, u.usePreloadImg)(t());
          return (0, m.jsx)("div", {
            className: [os.screencap, s ? os.screencapLoaded : ""].join(" "),
            "aria-hidden": "true",
            role: "img",
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        ds = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: s,
          toExplicit: r
        }) => {
          const n = r ?? `/videos/${t.id}`,
            i = {
              className: os.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            o = (0, m.jsxs)("div", {
              className: os.card,
              children: [(0, m.jsx)(cs, {
                video: t,
                size: s
              }), (0, m.jsxs)("div", {
                className: os.info,
                children: [e ? (0, m.jsx)("div", {
                  className: os.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, m.jsx)("h5", {
                  className: os.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, m.jsx)("a", {
            href: n,
            target: "_blank",
            ...i,
            children: o
          }) : (0, m.jsx)(fa.A, {
            to: n,
            ...i,
            children: o
          })
        },
        ls = {
          active: "rockstargames-sites-gta-gen9e35688e0d87409e3aef95ffb624d94f4",
          carousel: "rockstargames-sites-gta-gen9bc3f1abaac4c17c0e9aaac5fccfc6f7e",
          cta: "rockstargames-sites-gta-gen9f40c40ed1bc4242a32bc0628eea34048",
          disableClick: "rockstargames-sites-gta-gen9fcd11cd5895147a9e08f8f4026d68d94",
          dots: "rockstargames-sites-gta-gen9e0ca3ed410818f0961345606a96f03ee",
          dragging: "rockstargames-sites-gta-gen9b335b03fce6834b86318f3d7cbf3fab6",
          gameTitle: "rockstargames-sites-gta-gen9b5d3df350466b14e4b419bdb479b4064",
          info: "rockstargames-sites-gta-gen9a4057ef942e10ebeedb1370b08c3c32b",
          items: "rockstargames-sites-gta-gen9d30be9a5f31ff7fabf20969eec3200f1",
          slidesContent: "rockstargames-sites-gta-gen9c4e301fb08e073f689a8dabd2bef9eb2",
          text: "rockstargames-sites-gta-gen9cdb5c063bfc35cfbaaaefc68a77c1b07",
          title: "rockstargames-sites-gta-gen9e66c271fbbc8b6e431fc5d466c57479c",
          track: "rockstargames-sites-gta-gen9efe7112432da76c65f293853b4c942d1",
          videoTitle: "rockstargames-sites-gta-gen9ed4138b1e7fecd4b6d29f0e1bef1fdfd"
        },
        ms = (0, q.defineMessages)({
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
        gs = (0, ce.g)(({
          videos: e
        }) => {
          const a = (0, u.useLocale)(),
            {
              formatMessage: t
            } = (0, q.useIntl)(),
            {
              track: s
            } = (0, b.useGtmTrack)(),
            {
              setBodyIsLocked: r
            } = (0, u.useBodyScrollable)("VideoCarousel"),
            [n, i] = (0, g.useState)(0),
            [o, c] = (0, g.useState)(0),
            d = (0, g.useRef)(null),
            l = (0, g.useRef)(null);
          (0, g.useEffect)(() => {
            if (!d.current || !l.current) return;
            const a = new(Ua())(d.current);
            a.get("press").set({
              time: 0
            }), a.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                i(n - 1 < 0 ? 0 : n - 1), c(0)
              },
              o = () => {
                const a = n + 1 >= e.length - 1 ? e.length - 1 : n + 1;
                i(a), c(0)
              },
              m = e => {
                c(e.isFinal ? 0 : e.deltaX), "panleft" !== e.type && "panright" !== e.type || !l.current?.classList.contains(ls.dragging) || t() && r(!0)
              },
              g = () => {
                t() && r(!1), c(0)
              },
              _ = e => {
                "press" === e.type && d.current?.classList.add(`${ls.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${ls.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              u = () => {
                t() && r(!1), d.current && d.current.classList.remove(`${ls.disableClick}`)
              },
              b = () => {
                t() && r(!1)
              };
            return l.current.addEventListener("transitionend", b), a.on("swiperight", s), a.on("swipeleft", o), a.on("pan", m), a.on("panend", g), a.on("press tap", _), a.on("pressup", u), () => {
              a.off("swiperight", s), a.off("swipeleft", o), a.off("pan", m), a.off("panend", g), a.off("press tap", _), a.off("pressup", u), l.current && l.current.removeEventListener("transitionend", b), c(0)
            }
          }, [d.current, n]);
          const _ = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", t(a ? ms.learn_more : ms.watch_more)]
          };
          return (0, m.jsxs)("section", {
            className: ls.carousel,
            children: [(0, m.jsx)("div", {
              className: ls.track,
              ref: d,
              children: (0, m.jsx)("div", {
                className: `${ls.items} ${0!==o?ls.dragging:""}`,
                ref: l,
                style: {
                  transform: `translateX(calc(-${100*n}% + ${o}px))`
                },
                children: e.map((e, a) => {
                  const [t, s, r] = _(e);
                  return (0, m.jsx)(fa.A, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": s,
                    to: s,
                    className: n === a ? ls.active : "",
                    role: "link",
                    title: t,
                    tabIndex: n === a ? 0 : -1,
                    target: r,
                    children: (0, m.jsx)(cs, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                })
              })
            }), (0, m.jsxs)("div", {
              className: ls.slidesContent,
              children: [(0, m.jsx)("div", {
                className: ls.text,
                children: e.map((e, t) => {
                  const [r, i, o, c] = _(e);
                  return (0, m.jsxs)(fa.A, {
                    className: [ls.info, t === n ? ls.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": i,
                    to: i,
                    role: "link",
                    tabIndex: n === t ? 0 : -1,
                    target: o,
                    "aria-label": `${e.game.title} ${r}`,
                    onClick: (d = i, () => {
                      s({
                        event: "cta_watch_video",
                        text: "watch now",
                        link_url: d,
                        element_placement: "video carousel"
                      })
                    }),
                    children: [(0, m.jsxs)("div", {
                      className: ls.title,
                      children: [(0, m.jsxs)("div", {
                        className: ls.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, m.jsx)("h2", {
                        className: ls.videoTitle,
                        children: r
                      })]
                    }), (0, m.jsx)(Ba.A, {
                      tabIndex: -1,
                      role: "presentation",
                      "aria-hidden": !0,
                      className: ls.cta,
                      children: c
                    })]
                  }, e.id);
                  var d
                })
              }), (0, m.jsx)("section", {
                className: ls.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map((e, a) => (0, m.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => i(a),
                  className: n === a ? ls.active : "",
                  type: "button"
                }, e.id))
              })]
            })]
          })
        }),
        _s = (0, q.defineMessages)({
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
        us = {
          img: "rockstargames-sites-gta-gen9d87037fda2ea106061c7a614036a89df",
          imgContentful: "rockstargames-sites-gta-gen9b9f3c994ce8a97ac6530cf0a85e5abe0",
          wide: "rockstargames-sites-gta-gen9dc444c089b89129c0a39bc61845d531f"
        };
      (0, u.importAll)(t(86751));
      const bs = ({
          isWideCard: e = !1,
          size: a = 640,
          title: s,
          titleSlug: r,
          inGlobalNav: n = !1
        }) => {
          const {
            isMobile: i
          } = (0, u.useWindowResize)(), o = (0, u.useLocale)(), c = (0, g.useMemo)(() => {
            let s = "";
            return e && (s = i ? t(16044)(`./${r}/mobile/${o}.jpg`) : t(51048)(`./${r}/desktop/${o}.jpg`)), s || (s = t(39294)(`./${r}.jpg`), s += `?im=Resize=${a}`), s
          }, [i, r]), [d] = (0, u.usePreloadImg)(c);
          let l = c;
          return (0, m.jsx)("div", {
            role: "img",
            "aria-label": s,
            style: {
              backgroundImage: `url(${l})`,
              borderRadius: n ? "unset" : ""
            },
            className: [us.img, d ? us.startAnimation : "", e ? us.wide : ""].join(" ")
          })
        },
        ps = {
          fobLink: "rockstargames-sites-gta-gen9d30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-sites-gta-gen9c9686ec502f78b05e47568667e90bd17"
        },
        fs = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: s = ""
          } = e, r = ["VI"].includes(t.toUpperCase());
          return (0, m.jsx)(fa.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? s,
            target: "_self",
            className: [ps.fobLink, r ? ps.wide : ""].join(" "),
            reloadDocument: r,
            children: (0, m.jsx)(bs, {
              title: e.title,
              titleSlug: t,
              isWideCard: r,
              size: r ? 1740 : 480
            })
          })
        },
        ks = {
          arrow: "rockstargames-sites-gta-gen9cabb1073f7b7f75b799c87d74cfaf0ad",
          arrowNav: "rockstargames-sites-gta-gen9c9b73b78d75dd740e918208a9d615796",
          disabled: "rockstargames-sites-gta-gen9dbe1b06efadb349825f7b9b1b2778c68",
          items: "rockstargames-sites-gta-gen9ef63b0224f0cc9fa73a9c4549ad6c7e9",
          next: "rockstargames-sites-gta-gen9bfdf85a5867d26b52a0962be91170e36",
          partial: "rockstargames-sites-gta-gen9ab95829b388545f21071fd5bb97c25bb",
          previous: "rockstargames-sites-gta-gen9d7404262ef1f79bde0883b02110a4a5d",
          sectionHeader: "rockstargames-sites-gta-gen9ad695c18d6276297e78924feea3e6201",
          track: "rockstargames-sites-gta-gen9a4d3877b3cf6bff0abccdc561c0fe149",
          trackWrapper: "rockstargames-sites-gta-gen9bd79ab04bc93e3bcf79be808e0a06e9b",
          videoList: "rockstargames-sites-gta-gen9bacddb57787eca7b621a046e6f23aaf5"
        },
        hs = (0, ce.g)(({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: s
        }) => {
          const r = (0, q.useIntl)(),
            {
              track: n
            } = (0, b.useGtmTrack)(),
            i = void 0 !== a ? "games" : "videos",
            [o, c] = (0, g.useState)(),
            [d, l] = (0, g.useState)(),
            [_, u] = (0, g.useState)(0),
            p = (0, g.useRef)(null),
            f = (0, g.useRef)(null),
            k = (0, g.useRef)(null);
          (0, g.useEffect)(() => {
            l({
              nextEl: k.current,
              prevEl: f.current
            })
          }, [k, f]), (0, g.useEffect)(() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), u(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [_]);
          const h = e => {
            p.current && (p.current.scrollLeft = 0), o?.slideTo(e)
          };
          let v;
          return v = "games" === i ? (0, m.jsx)(m.Fragment, {
            children: a.results.filter(e => "775700as" !== e.id).map((e, a) => (0, m.jsx)(Ta.qr, {
              className: ks.slide,
              onFocus: () => h(a),
              children: (0, m.jsx)(fs, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id))
          }) : (0, m.jsx)(m.Fragment, {
            children: e.map((e, a) => (0, m.jsx)(Ta.qr, {
              className: ks.slide,
              onFocus: () => h(a),
              children: (0, m.jsx)(ds, {
                video: e,
                gameTitleNecessary: s
              })
            }, e.id))
          }), (0, m.jsxs)("section", {
            className: ks.videoList,
            children: [(0, m.jsxs)("h3", {
              className: ks.sectionHeader,
              children: [t, (0, m.jsxs)("div", {
                className: ks.arrowNav,
                children: [(0, m.jsx)("button", {
                  className: (0, I.default)(ks.arrow, ks.previous),
                  type: "button",
                  ref: f,
                  "aria-label": r.formatMessage(_s.previous_button_label),
                  onKeyDown: e => {
                    "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), o?.slidePrev())
                  }
                }), (0, m.jsx)("button", {
                  className: (0, I.default)(ks.arrow, ks.next),
                  type: "button",
                  ref: k,
                  "aria-label": r.formatMessage(_s.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" !== e.key || e.shiftKey) "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), o?.slideNext());
                    else {
                      const a = o?.slides[o?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, m.jsx)("div", {
              className: (0, I.default)(ks.items, _ % 1 != 0 ? ks.partial : ""),
              children: (0, m.jsx)("div", {
                className: ks.trackWrapper,
                ref: p,
                children: _ && (0, m.jsx)(Ta.RC, {
                  className: ks.track,
                  slidesPerView: _,
                  spaceBetween: 24,
                  onInit: e => {
                    c(e)
                  },
                  grabCursor: !0,
                  navigation: d,
                  modules: [Ea.Vx],
                  slideClass: (0, I.default)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    n({
                      event: "carousel_next",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    n({
                      event: "carousel_previous",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    n({
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
        vs = ({
          children: e,
          ...a
        }) => (0, m.jsx)("span", {
          ...a,
          className: "rockstargames-sites-gta-gen9acd86b7f5778381df8fac4a3f7489f60",
          children: e
        });
      var xs = t(60982),
        ys = t(14159),
        js = t(59426),
        ws = t(51550),
        Ns = t(63218),
        Ss = t(41926);
      const Cs = ({
          title: e,
          content: a,
          size: t = "md",
          badgeText: s
        }) => {
          const r = {
            ...(0, z.useTinaComponents)(),
            HTMLElement: U,
            UnorderedList: ke.A,
            ListItem: Ss.A
          };
          return (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cfa8d259e6ae05cd5f97d50306be5ffe",
            "data-size": t,
            children: (0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a4a39548fac12526e8721ffa8813e66a",
              children: [s && (0, m.jsx)("div", {
                className: "rockstargames-sites-gta-gen9cf77e65e2af63ee114825607dde3d11e",
                children: s
              }), (0, m.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9f903ce7e605696e1bc18c4bc22274a6e",
                children: [e && (0, m.jsx)("h3", {
                  children: e
                }), (0, m.jsx)(z.TinaParser, {
                  components: r,
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
        {
          Gen9CoreCarousel: Is,
          framer: Ts,
          useTinaModuleFetchByIds: Es,
          withSimpleErrorBoundary: zs
        } = r,
        As = {
          Card: xa,
          CardWithImageGallery: Oa,
          TextCard: Cs,
          ...r
        },
        Ps = Ts.withFadeIn(zs(({
          cards: e = [],
          size: a,
          name: t,
          title: s,
          description: r,
          disclaimer: n,
          customSlidesPerView: i = null,
          theme: o = "none",
          cardSizeBreakpoints: c = {},
          customAspectRatio: d = "3/1",
          titleBadge: l = null,
          id: u = ""
        }) => {
          const b = (0, g.useRef)(null),
            p = H().map(e, "id"),
            f = Es({
              ids: p
            }),
            [k, h] = (0, g.useState)(i),
            [v] = (0, _.useSearchParams)(),
            [x, y] = (0, g.useState)(!1);
          (0, g.useEffect)(() => {
            if ("fob" === a) {
              const e = v.get("section");
              if (e && "games" === e && !x && (y(!0), b.current)) {
                const e = 100;
                window.scrollTo(0, b.current.offsetTop - e)
              }
            }
          }, []), (0, g.useEffect)(() => {
            if (!b.current) return;
            const e = () => {
              const e = i || window.getComputedStyle(b.current).getPropertyValue("--slides-per-view");
              h(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          });
          const j = (0, g.useMemo)(() => {
            let e = 0;
            if (!f) return null;
            let t = "blank",
              r = !1;
            return f.forEach(e => {
              "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (r = e.tina.payload.content[0].excludeFromModal))
            }), f.reduce((n, i) => {
              if (i) {
                const {
                  id: c,
                  tina: d
                } = i, l = H().clone(d);
                H().set(l, "payload.meta.id", c);
                const g = p.filter(e => e !== t || e === t && !r);
                n.push((0, m.jsx)(z.TinaParser, {
                  components: As,
                  tina: l,
                  componentProps: {
                    deckProps: {
                      size: a
                    },
                    tina: l,
                    id: c,
                    position: e,
                    sectionTitle: s,
                    theme: o,
                    cardIds: g
                  }
                }, c)), e += 1
              }
              return n
            }, [])
          }, [f, a]);
          return (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9cf8eaaa96e41e0c9b5a5a1745ded9986",
            "data-theme": o,
            ref: b,
            id: u,
            children: [(0, m.jsx)(Is, {
              description: r,
              size: a,
              cardSizeBreakpoints: c,
              slideChildren: j,
              title: s,
              name: t,
              customSlidesPerView: k,
              customAspectRatio: d,
              titleBadge: l,
              theme: o
            }), n && (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d6d0f9d842469dec608825829148dff6",
              children: (0, m.jsx)("span", {
                className: "rockstargames-sites-gta-gen9e22c0580e1e1d2471b4ca2e60e6b900f",
                children: (0, m.jsx)(Qt, {
                  html: n
                })
              })
            })]
          })
        }));
      var Ls = t(10475),
        Ms = t(54389),
        Rs = t.n(Ms);
      const Ds = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        Vs = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Os = e => e.scrollHeight > e.clientHeight;

      function Bs(e, a) {
        const t = {
          ...e
        };
        return H().forOwn(e, (e, s) => {
          if ("image" === s) {
            const e = t[s];
            t[s] = {
              ...e,
              prod: a
            }
          } else H().isObject(e) && !H().isArray(e) ? Bs(e, a) : H().isArray(e) && (t[s] = e.map(e => H().isObject(e) ? Bs(e, a) : e))
        }), t
      }
      const $s = (0, u.withTranslations)(({
          active: e,
          styles: a,
          title: t,
          itemNumber: s,
          inModalMode: r,
          openModalMode: n,
          element: i,
          upNext: o,
          mobileMode: c,
          refDeck: d,
          components: l,
          tina: _,
          prevPage: u,
          nextPage: p,
          onFocus: f,
          transitionStyle: k,
          selectedItemNumber: h,
          carouselTitle: v,
          sharedDraggingDelta: x,
          setSharedDraggingDelta: y,
          trapFocus: j
        }) => {
          const w = (0, q.useIntl)(),
            {
              track: N
            } = (0, b.useGtmTrack)(),
            S = (0, g.createRef)(),
            I = (0, g.createRef)(),
            T = (0, g.createRef)(),
            E = (0, g.createRef)(),
            [A, P] = (0, g.useState)(!1),
            [L, M] = (0, g.useState)(0),
            [R, D] = (0, g.useState)(0),
            [V, O] = (0, g.useState)(0),
            [B, $] = (0, g.useState)(0),
            [G, F] = (0, g.useState)(0),
            [H, U] = (0, g.useState)(!1),
            [W, K] = (0, g.useState)(0),
            [Y, X] = (0, g.useState)(0),
            [Z, J] = (0, g.useState)(0),
            [Q, ee] = (0, g.useState)("700"),
            [ae, te] = (0, g.useState)(-1),
            [se, re] = (0, g.useState)(0),
            [ne, ie] = (0, g.useState)(0),
            [oe, ce] = (0, g.useState)(0),
            [de, le] = (0, g.useState)(!1),
            [me, ge] = (0, g.useState)(""),
            [_e, ue] = (0, g.useState)(null),
            [be, pe] = (0, g.useState)(!1),
            [fe, ke] = (0, g.useState)(null),
            [he, ve] = (0, g.useState)(!1),
            [xe, ye] = (0, g.useState)(!1),
            je = (0, z.useTinaPayload)(),
            we = _?.payload?.meta?.cdn ?? !1 ?? je?.meta?.prod ?? !1,
            Ne = (0, z.useTranslations)({
              payload: _?.payload,
              variables: _?.variables
            }),
            Se = Ne?.meta ?? {},
            Ce = Bs(Ne?.content?.[0], we),
            Ie = (0, g.useMemo)(() => Ce?.images?.[0]?.image?.badge, [Ce]),
            Te = (0, g.useMemo)(() => Ce.title ?? t ?? Se?.title, [t, Se?.title, Ce.title]),
            Ee = (0, C.S1)({
              alt: Ce?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Ce?.images?.[0]?.image?.alt ?? "",
              sources: Ce?.images?.[0]?.image?.sources ?? [],
              prod: we
            }),
            ze = Ee?.src?.mobile ?? Ee?.src?.desktop ?? !1,
            Ae = (0, g.useMemo)(() => Se?.foreignId, [Se]),
            Le = (0, g.useMemo)(() => Se?.foreignTitle, [Se]),
            [Me, Re] = (0, g.useState)(0),
            [De, Ve] = (0, g.useState)(0),
            [Oe, Be] = (0, g.useState)(0),
            [$e, Ge] = (0, g.useState)(0),
            [Fe, He] = (0, g.useState)(!1),
            [Ue, qe] = (0, g.useState)(0),
            [We, Ke] = (0, g.useState)(20),
            [Ye, Xe] = (0, g.useState)(null),
            [Ze, Je] = (0, g.useState)(!1),
            Qe = (0, g.useCallback)(e => {
              if (!0 === H || !r && !c || be) return;
              const a = Vs(e);
              Re(a.x), Ve(a.y)
            }, [H, r]),
            ea = e => {
              Qe(e)
            },
            aa = e => {
              if (!0 === H || 0 === Me || !r && !c || be) return;
              const a = Vs(e),
                t = a.x > Me ? 1 : -1,
                s = Math.abs(Me - a.x);
              r && !c && s > We ? (Je(!0), ge(t > 0 ? "prev" : "next"), sa()) : (He(!0), qe(s * t), y(s * t))
            },
            ta = e => {
              if (!0 === H || !r && !c || be) return;
              const a = Vs(e),
                t = a.x > Me ? 1 : -1,
                s = Math.abs(Me - a.x),
                n = Math.abs(De - a.y);
              r && !c ? (sa(), ge("")) : s > We && n < 25 ? (Je(!0), ge(t > 0 ? "prev" : "next"), sa()) : sa()
            },
            sa = () => {
              U(!0), Re(0), Ve(0), He(!1), qe(0), y(0)
            },
            na = e => {
              e ? (r || P(!0), r || c || (clearTimeout(ae), te(setTimeout(() => {
                N({
                  event: "card_title_hover",
                  card_name: Te,
                  card_id: s,
                  position: s,
                  view_name: `${Ae}/${Le}`,
                  source_content_id: Ae,
                  source_content_name: Le
                })
              }, 1e3)))) : (r || P(!1), r || c || clearTimeout(ae))
            };
          return (0, g.useEffect)(() => {
            let e = W;
            A ? e = 0 : r && !c && (e = W), M(e)
          }, [A, c, r, R, B, Y, Z, V, W]), (0, g.useEffect)(() => {
            P(!(!r || !c))
          }, [r, c]), (0, g.useEffect)(() => {
            r && e && N({
              event: "virtualPageview",
              display_type: c ? "mobile" : "desktop",
              view_name: `${Ae}/${Te}`,
              source_content_id: Ae,
              source_content_name: Le
            })
          }, [r, e]), (0, g.useEffect)(() => {
            const e = Rs()((e, a) => {
              let t = 18;
              if (e?.documentElement && (t = Ds(e?.documentElement, "--root-font-size")), ne !== a.innerHeight && ie(a.innerHeight), d?.current) {
                J(Ds(d.current, "--eventDeck-marginSm") * t);
                const e = t * Ds(d?.current, "--eventDeck-modalGutters"),
                  s = a?.innerWidth,
                  r = s - 2 * e;
                D(r), T.current && c && O(r), $(Ds(d.current, "--eventDeck-itemSize") * t), ce(Ds(d.current, "--eventDeck-phaseOneTransitionDuration"));
                const n = Ds(d?.current, "--eventDeck-itemImageTitleMargins") * t,
                  i = I?.current?.clientHeight,
                  o = i + n;
                Number.isNaN(o) || K(o), re(Ds(d?.current, "--eventDeck-headerHeight") * t)
              }
              let s = Math.min(700, a.innerWidth);
              c || (s = 900), ee(`${s}`)
            }, 300);
            return window.addEventListener("resize", () => {
              e(document, window)
            }), e(document, window), () => {
              window.removeEventListener("resize", () => {
                e(document, window)
              })
            }
          }, [d, c]), (0, g.useEffect)(() => {
            if (S.current) {
              const e = S.current.clientHeight;
              Number.isNaN(e) || X(e)
            }
          }, [S]), (0, g.useEffect)(() => {
            if (r && c && T.current && (T.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !r && c && T.current) {
              const e = 228 / R;
              T.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!c && T.current && (T.current.style.transform = null)
          }, [r, c, R, V]), (0, g.useEffect)(() => {
            const e = .5 * R,
              a = ne - se - 3 * Z;
            F(R - (e < a ? e : a))
          }, [R, Z, ne]), (0, g.useEffect)(() => {
            "next" === me ? (p(null, !0), ge("")) : "prev" === me && (u(null, !0), ge(""))
          }, [me]), (0, g.useEffect)(() => {
            Be(0), Ge(0)
          }, [c]), (0, g.useEffect)(() => {
            c ? Ke(r ? 35 : 20) : r && Ke(50)
          }, [r, c]), (0, g.useEffect)(() => {
            if (null !== a?.transform) {
              const e = a?.transform?.split(",") ?? [],
                t = e[0].split("("),
                s = Number(t[1].replace("px", "")),
                r = Number(e[1].replace("px", ""));
              Be(s), Ge(r)
            }
          }, [a]), (0, g.useEffect)(() => {
            if (!H) return;
            clearTimeout(_e);
            const e = setTimeout(() => {
              U(!1), Re(0)
            }, 200);
            ue(e)
          }, [H, 200]), (0, g.useEffect)(() => {
            if (!Ze) return;
            clearTimeout(Ye);
            const e = setTimeout(() => {
              Je(!1)
            }, 1e3);
            Xe(e)
          }, [Ze]), (0, g.useEffect)(() => {
            r && clearTimeout(ae), setTimeout(() => {
              le(!de)
            }, oe)
          }, [r]), (0, g.useEffect)(() => (document.body.addEventListener("mouseleave", sa), () => {
            document.body.removeEventListener("mouseleave", sa)
          }), []), (0, g.useEffect)(() => {
            E.current ? ve(Os(E.current)) : ve(!1), void 0 !== i && i.current ? ye(Os(i.current)) : ye(!1)
          }, [i, E, e, r, de]), Ce ? (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c02ee363d47108460ab7916fc955cd9b",
            ref: i,
            "data-item-position": s,
            "data-modal-mode": r,
            "data-active-item": e,
            "data-up-next": o,
            "data-transition": Fe || 0 !== x ? "none" : k,
            "data-scrollable": xe,
            style: {
              ...a,
              transform: r && e && !c ? `translate3d(${Oe+Ue}px, ${$e}px, 0)` : c && !r ? `translate3d(${Oe+x}px, ${$e}px, 0)` : a?.transform
            },
            onClick: e => {
              Ze || (r ? r && !c && (s < h ? u(e, !0) : s > h && p(e, !0)) : n(e))
            },
            onMouseEnter: () => na(!0),
            onMouseLeave: () => na(!1),
            onFocus: e => (e => {
              f?.(e), na(!0)
            })(e),
            onBlur: () => na(!1),
            onTouchStart: ea,
            onTouchMove: aa,
            onTouchEnd: ta,
            onMouseDown: ea,
            onMouseMove: aa,
            onMouseUp: ta,
            onKeyUp: e => {
              "Enter" !== e.code && "Space" !== e.code || r || n(e)
            },
            onKeyDown: e => {
              "Tab" === e.key && e.shiftKey && r && (e.preventDefault(), j("backwards")), "Space" === e.code && e.preventDefault()
            },
            "aria-label": r ? w.formatMessage(ra.events_deck_modal_group_label) : Te,
            role: r ? "dialog" : "button",
            tabIndex: r ? -1 : 0,
            children: [(0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dee75b8e3614051c8f0fc97e373e78e5",
              "data-full-header": A,
              style: {
                height: r && c ? `${R}px` : null,
                width: r && c ? `${R}px` : null
              },
              role: "figure",
              children: [ze && (0, m.jsx)("img", {
                ref: T,
                src: `${Ee?.src?.mobile??Ee?.src?.desktop}?im=Resize,width=${Q}`,
                alt: Ee?.alt ?? "",
                style: {
                  width: 0 !== V && c ? `${V}px` : null,
                  height: 0 !== V && c ? `${V}px` : null
                }
              }), (0, m.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9dc279f97c134d6e7d30602288b8b10ae",
                "aria-hidden": "true",
                style: {
                  transform: !c || c && r ? `translate3d(0, ${L}px, 0)` : null
                },
                children: [Ie && (0, m.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9cfe252d5613a21c1d308c98566cabd21",
                  ref: S,
                  children: (0, m.jsx)(Pe, {
                    text: Ie
                  })
                }), (0, m.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9b311a78aea53383ab6bd5cbccb52ceeb",
                  tabIndex: -1,
                  ref: I,
                  "aria-hidden": "true",
                  children: Te
                })]
              })]
            }), (0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d212586e74ea4b4fe934beed9e339f78",
              ref: E,
              "aria-hidden": !r,
              tabIndex: r ? 0 : -1,
              onScroll: () => {
                pe(!0), sa(), clearTimeout(fe);
                const e = setTimeout(() => {
                  pe(!1)
                }, 100);
                ke(e)
              },
              style: {
                top: r && c ? `${R}px` : null,
                width: r && !c && e ? `${G}px` : null,
                touchAction: he || c ? "unset" : "none"
              },
              children: [Te && (0, m.jsx)("span", {
                className: "rockstargames-sites-gta-gen9da9ef865674c108ffd53cfab2ed2971a",
                role: "heading",
                children: Te
              }), (0, m.jsx)("div", {
                className: "rockstargames-sites-gta-gen9abad8b0c98a7216d91b672492397e6a6",
                role: "text",
                children: (0, m.jsx)(z.TinaParser, {
                  components: l,
                  tina: {
                    meta: Se,
                    payload: {
                      content: Ce?.content
                    }
                  }
                })
              }), (0, m.jsx)("button", {
                className: "rockstargames-sites-gta-gen9a0b399d3bf191afcf00e7196639527d5",
                type: "button",
                onFocus: j,
                style: {
                  display: r ? "block" : "none"
                }
              })]
            })]
          }) : null
        }),
        Gs = "rockstargames-sites-gta-gen9eff7810cc71a3b63bfc3e58cbe4a0279",
        Fs = ({
          prevPage: e,
          prevBtnDisabled: a,
          nextPage: t,
          nextBtnDisabled: s,
          selectedItemNumber: r,
          itemsData: n,
          closeModalMode: i,
          inModalMode: o,
          controlsHidden: c,
          focusTrapControl: d,
          focusTrapDirection: l,
          setTriggerFocusCard: _
        }) => {
          const u = (0, q.useIntl)(),
            b = (0, g.createRef)(),
            p = (0, g.createRef)(),
            f = (0, g.createRef)();
          return (0, g.useEffect)(() => {
            d && ("backwards" === l ? f?.current?.focus() : a ? p?.current?.focus() : b?.current?.focus())
          }, [d, a]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a13ee8af1dd8f09d28c65e56abd782ef",
              "aria-hidden": c || "false",
              children: [(0, m.jsx)("button", {
                className: Gs,
                ref: b,
                type: "button",
                onClick: e,
                disabled: a,
                "aria-label": o ? u.formatMessage(ra.events_deck_modal_previous_aria_label) : u.formatMessage(ra.events_deck_previous_aria_label),
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && o && (e.preventDefault(), _(!0))
                }
              }), (0, m.jsxs)("span", {
                className: "rockstargames-sites-gta-gen9a6b11adaa46a0c2acc5893d2f5da04f1",
                "aria-hidden": !o,
                children: [(0, m.jsx)(vs, {
                  "aria-live": "polite",
                  children: u.formatMessage(ra.events_deck_paging_label, {
                    currentPage: r + 1,
                    totalPages: n.length
                  })
                }), (0, m.jsxs)("span", {
                  "aria-hidden": "true",
                  className: "rockstargames-sites-gta-gen9eb9f07e9a2e17e70e61b73dec95da6c0",
                  children: [r + 1, (0, m.jsx)("span", {
                    className: "rockstargames-sites-gta-gen9aad28b229162f1d7494a2de3a3b6b547"
                  }), n.length]
                })]
              }), (0, m.jsx)("button", {
                className: Gs,
                ref: p,
                type: "button",
                onClick: t,
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && a && o && (e.preventDefault(), _(!0))
                },
                disabled: s,
                "aria-label": o ? u.formatMessage(ra.events_deck_modal_next_aria_label) : u.formatMessage(ra.events_deck_next_aria_label)
              })]
            }), (0, m.jsx)("button", {
              className: "rockstargames-sites-gta-gen9fb0b7933375b44858b7e92cdea86ee81",
              type: "button",
              onClick: i,
              ref: f,
              onKeyDown: e => {
                "Tab" === e.key && !e.shiftKey && o && (e.preventDefault(), _(!0))
              },
              "aria-label": u.formatMessage(ra.events_deck_modal_close_label),
              "aria-hidden": !o,
              tabIndex: o ? 0 : -1
            })]
          })
        },
        Hs = (0, q.withIntl)(e => {
          const {
            setBodyIsLocked: a
          } = (0, u.useBodyScrollable)("EventsDeck"), {
            title: t
          } = e, {
            track: s
          } = (0, b.useGtmTrack)(), [r, n] = (0, g.useState)(!1), i = (() => {
            const {
              data: e
            } = (0, u.useQuery)(Ia.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), a = e?.tinaModulesList?.results, t = H().map(a, "id");
            return (0, Ie.X)({
              ids: t
            })
          })(), [o, c] = (0, g.useState)([]), [d, _] = (0, g.useState)(null), [p, f] = (0, g.useState)(0), [k, h] = (0, g.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [v, x] = (0, g.useState)(!1), y = (0, g.createRef)(), [j, w] = (0, g.useState)(null), N = (0, g.createRef)(), S = (0, g.createRef)(), [C, I] = (0, g.useState)([]), [T, E] = (0, g.useState)(!0), [A, P] = (0, g.useState)(!1), [L, M] = (0, g.useState)(!1), [R, D] = (0, g.useState)([]), [V, O] = (0, g.useState)(404), [B, $] = (0, g.useState)(808), [G, F] = (0, g.useState)(672), [q, W] = (0, g.useState)(336), [K, Y] = (0, g.useState)(0), [X, Z] = (0, g.useState)(0), [J, Q] = (0, g.useState)(0), [ee, ae] = (0, g.useState)(0), [te, se] = (0, g.useState)(0), [re, ne] = (0, g.useState)(!1), ie = !!(0, u.usePrevious)(re), [oe, ce] = (0, g.useState)(window.innerWidth), [de, le] = (0, g.useState)(0), [me, ge] = (0, g.useState)(0), [_e, ue] = (0, g.useState)(0), [be, pe] = (0, g.useState)(0), [fe, ve] = (0, g.useState)(0), [xe, ye] = (0, g.useState)(0), [je, we] = (0, g.useState)(0), [Ne, Se] = (0, g.useState)(0), [Ce, Te] = (0, g.useState)(-1e3), [ze, Ae] = (0, g.useState)(0), [Pe, Le] = (0, g.useState)(50), [Me, Re] = (0, g.useState)(0), [De, Ve] = (0, g.useState)(!1), [Oe, Be] = (0, g.useState)(768), [$e, Ge] = (0, g.useState)(!1), [Fe, He] = (0, g.useState)(!1), [Ue, qe] = (0, g.useState)(!1), [We, Ke] = (0, g.useState)(!1), [Ye, Xe] = (0, g.useState)(!1), [Ze, Je] = (0, g.useState)(1e3), [Qe, ea] = (0, g.useState)(1.2), [aa, ta] = (0, g.useState)(0), [sa, ra] = (0, g.useState)(!1), [na, ia] = (0, g.useState)(!1), [oa, ca] = (0, g.useState)(!0), [da, la] = (0, g.useState)(!1), [ma, ga] = (0, g.useState)(!1), [_a, ua] = (0, g.useState)(null), [ba, pa] = (0, g.useState)(100), [fa, ka] = (0, g.useState)(!1), [ha, va] = (0, g.useState)({}), [xa, ya] = (0, g.useState)(""), [ja, wa] = (0, g.useState)(0), [Na, Sa] = (0, g.useState)(!1), [Ca, Ta] = (0, g.useState)(!1), [Ea, za] = (0, g.useState)(0), [Aa, Pa] = (0, g.useState)(0), [La, Ma] = (0, g.useState)(100), [Ra, Da] = (0, g.useState)(!1), [Va, Ba] = (0, g.useState)(!1), [$a, Ga] = (0, g.useState)(!1), [Fa, Ha] = (0, g.useState)(!1), [Ua, qa] = (0, g.useState)("forward"), Wa = () => oe * de + Pe, Ka = () => !1 === De ? Qe : 1, Ya = e => e === je - 1 || e === je + 1, Xa = () => -1 * xe - be, Za = (e, a = !0) => {
            if (!0 === De) return 0;
            const t = e.itemNumber % 2 == 0,
              s = V * Qe;
            if (!0 === t && 0 !== e.itemNumber) {
              const t = Ds(e?.element?.current, "top");
              let r = t - J;
              return !1 === a && (r -= t), -1 * (.5 * s + r) + aa
            }
            return J - .5 * s + aa
          }, Ja = (e, a, t = !0) => {
            let s = Xa();
            !1 === t && (s = 0);
            const r = oe * de,
              n = !1 === De ? V * Ka() : r;
            return e.inModalMode && De ? -1 === a ? Wa() * (je - e.itemNumber) * -1 - e.styles.left : Wa() * (e.itemNumber - je) - e.styles.left : -1 === a ? -1 * e.styles.left - n - Pe + s : r - e.styles.left + Pe + s
          }, Qa = (e, a, t) => {
            -1 === a && (P(!1), E(!0)), P(!1 === t && e >= a || !0 === t && e + 1 === a), E(e <= 0)
          }, et = (e, a = !1) => {
            if (ma || da) return;
            if (ga(!0), re) return void((e = !1) => {
              if (je + 1 >= o.length) return;
              const a = C[je + 1]?.tina?.payload?.meta?.title ?? `card-${je+1}`;
              s({
                event: e ? "modal_swipe" : "modal_next",
                card_name: a,
                card_id: je + 1,
                position: je + 1,
                view_name: `${C[je+1].source_content_id}/${a}`,
                source_content_id: C[je + 1].source_content_id,
                source_content_name: C[je + 1].source_content_name
              }), Qa(je + 1, o.length, !0), De ? De && I(C.map(e => {
                e.itemNumber === je - 1 ? e.upNext = !1 : e.itemNumber === je + 2 ? e.upNext = !0 : e.itemNumber === je + 1 ? e.active = !0 : e.itemNumber === je && (e.upNext = !0, e.active = !1);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t -= Wa();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              })) : I(C.map(e => (e.itemNumber === je - 1 ? e.upNext = !1 : e.itemNumber === je + 2 ? e.upNext = !0 : e.itemNumber === je + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Xa()}px, ${aa}px, 0) scale(1)`
              }) : e.itemNumber === je && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ja(e,-1)}px, ${Za(e)}px, 0) scale(${Ka()})`
              }), e))), we(je + 1)
            })(a);
            const r = fe + 1;
            if (!(r > te))
              if (s({
                  event: a ? "carousel_swipe" : "carousel_next",
                  element_placement: t?.toLowerCase() ?? ""
                }), Qa(r, te, !1), De) {
                let e = r * q * -1;
                e < Ce && (e = Ce, P(!0), E(!1), ve(te)), ve(r), I(C.map(a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a)))
              } else {
                let e = xe - X;
                ve(r), e < Ce && (e = Ce, P(!0), E(!1), ve(te)), ye(e)
              }
          }, at = (e, a = !1) => {
            if (ma || da) return;
            if (ga(!0), !0 === re) return void((e = !1) => {
              if (ma) return;
              if (je - 1 < 0) return;
              const a = C[je - 1]?.tina?.payload?.meta?.title ?? "card-" + (je - 1);
              s({
                event: e ? "modal_swipe" : "modal_previous",
                element_placement: t?.toLowerCase(),
                card_name: a,
                card_id: je - 1,
                position: je - 1,
                view_name: `${C[je-1].source_content_id}/${a}`,
                source_content_id: C[je - 1].source_content_id,
                source_content_name: C[je - 1].source_content_name
              }), Qa(je - 1, o.length, !0), De || I(C.map(e => (e.itemNumber === je + 1 ? e.upNext = !1 : e.itemNumber === je - 2 ? e.upNext = !0 : e.itemNumber === je ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ja(e,1)}px, ${Za(e)}px, 0) scale(${Ka()})`
              }) : e.itemNumber === je - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Xa()}px, ${aa}px, 0) scale(1)`
              }), e))), De && I(C.map(e => {
                e.itemNumber === je + 1 ? e.upNext = !1 : e.itemNumber === je - 2 ? e.upNext = !0 : e.itemNumber === je ? (e.upNext = !0, e.active = !1) : e.itemNumber === je - 1 && (e.active = !0);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t += Wa();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              })), we(je - 1)
            })(a);
            const r = fe - 1;
            if (!(r < 0))
              if (s({
                  event: a ? "carousel_swipe" : "carousel_previous",
                  element_placement: t?.toLowerCase()
                }), Qa(r, te, !1), De) {
                let e = r * q * -1;
                e > 0 && (e = 0, E(!0), P(!1), ve(0)), ve(r), I(C.map(a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a)))
              } else {
                let e = xe + X;
                ve(r), (e > 0 || 0 === e || -1 * e < B) && (e = 0, E(!0), P(!1), ve(0)), ye(e)
              }
          }, tt = e => {
            if (Na || re || De) return;
            const a = Vs(e);
            wa(a.x)
          }, st = e => {
            if (Na || 0 === ja || re || De) return;
            const a = Vs(e),
              t = a.x > ja ? 1 : -1;
            let s = Math.abs(ja - a.x) * t;
            (0 === fe && 1 === t || fe === te && -1 === t) && (s *= .35), Ta(!0), za(s)
          }, rt = e => {
            if (Na || re || De) return;
            const a = Vs(e),
              t = a.x > ja ? 1 : -1,
              s = Math.abs(ja - a.x);
            ya(s > La ? t > 0 ? "prev" : "next" : ""), nt()
          }, nt = () => {
            Sa(!0), wa(0), za(0), Ta(!1)
          }, it = e => {
            Ca && (rt(e), Ta(!1))
          }, ot = (e, a, t = "") => e.map((e, s) => {
            let r = s * q,
              n = s;
            !1 === De && (n = Math.ceil(.5 * s) + 1, s > 0 && (r = 2 === n ? G : G + q * (n - 2)));
            const i = R[s];
            return i?.current && (i.current.scrollTop = 0), {
              ...e,
              mobileMode: De,
              itemNumber: s,
              columnNumber: n,
              inModalMode: !1,
              upNext: !0,
              active: !1,
              openModalMode: lt,
              element: i,
              transitionStyle: a,
              styles: {
                left: r,
                transform: "" === t ? null : t,
                height: null,
                top: null
              },
              trapFocus: mt
            }
          }), ct = e => {
            if (De) return;
            I(ot(o, "cardClose"));
            const a = Math.ceil((C[e].columnNumber + 1) / K) - 1;
            ve(a);
            let t = a * X * -1;
            Me < me ? (t = 0, E(!0), P(!0), ve(0)) : t < Ce ? (t = Ce, E(!1), P(!0), ve(te)) : Qa(a, te, !1), ye(t), we(0)
          }, dt = () => {
            const e = C[je]?.tina?.payload?.meta?.title ?? `card-${je}`;
            s({
              event: "modal_close",
              element_placement: t?.toLowerCase(),
              card_name: e,
              card_id: je,
              position: je,
              view_name: `${C[je].source_content_id}/${e}`,
              source_content_id: C[je].source_content_id,
              source_content_name: C[je].source_content_name
            });
            const a = C[je]?.element?.current;
            if (De) {
              let e = je * q * -1;
              e < Ce && (e = Ce, P(!0), E(!1), ve(te)), ve(je), Qa(je, te, !1), I(ot(o, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else ct(je);
            N.current.style.transform = "translate(0px, 0px)", N.current.style.transition = "all var(--eventDeck-transitionCardClose)", ra(!1), Ke(!1), ne(!1), He(!1), Ge(!1), Xe(!1), setTimeout(() => {
              qe(!0), a.focus()
            }, Ze)
          };
          (0, g.useEffect)(() => {
            !1 !== Ue && (qe(!1), ra(!1), j.style.zIndex = null, I(C.map(e => (e.transitionStyle = "", e))))
          }, [Ue]);
          const lt = e => {
              setTimeout(() => {
                va(e), ka(!0)
              }, 1)
            },
            mt = e => {
              Ha(!0), qa(e), setTimeout(() => {
                Ha(!1)
              }, 1e3)
            };
          (0, g.useEffect)(() => {
            $a && (Ga(!1), C[je]?.element?.current?.focus())
          }, [$a]), (0, g.useEffect)(() => {
            if (!fa) return;
            if (ka(!1), ma) return;
            we(Number(ha?.target?.dataset?.itemPosition)), He(!0), la(!0), oa && ca(!1);
            const e = C[ha?.target?.dataset?.itemPosition].source_content_id,
              a = C[ha?.target?.dataset?.itemPosition].source_content_name,
              r = C[ha?.target?.dataset?.itemPosition]?.tina?.payload?.meta?.title;
            s({
              event: "card_click",
              element_placement: t?.toLowerCase(),
              card_name: r ?? `card-${je}`,
              card_id: ha?.target?.dataset?.itemPosition,
              position: ha?.target?.dataset?.itemPosition,
              view_name: `${e}/${r}`,
              source_content_id: e,
              source_content_name: a
            })
          }, [fa]), (0, g.useEffect)(() => {
            if (!Fe || re) return;
            He(!1);
            const e = (() => {
              const e = j?.getBoundingClientRect().top;
              return ta(-1 * (e - p)), -1 * (e - 140)
            })();
            De && I(C.map(e => {
              const a = e.itemNumber > je + 3 || e.itemNumber < je - 3;
              return e.styles = {
                ...e.styles,
                display: a ? "none" : null,
                transition: a ? "none" : null
              }, e
            })), j.style.zIndex = "var(--eventDeck-zIndexOverlay)", ra(!0), N.current && (N.current.style.transition = "all var(--eventDeck-transitionCardOpen)", N.current.style.transform = `translate(${-1*be}px, ${e}px)`), Ke(!0), setTimeout(() => {
              Ge(!0)
            }, 1)
          }, [Fe]);
          const gt = () => {
            I(C.map((e, a) => {
              e.active = a === je, e.inModalMode = !0, e.transitionStyle = "cardOpen", De && (e.upNext = Ya(e.itemNumber));
              const t = !De;
              let s = 0;
              if (De) {
                const e = Ne + 5 * p;
                s = window.innerHeight - e
              }
              return e.itemNumber < je ? e.styles = {
                ...e.styles,
                height: De ? `${s}px` : null,
                transform: `translate3d(${Ja(e,-1,t)}px, ${aa}px, 0) scale(${Ka()})`
              } : e.itemNumber > je ? e.styles = {
                ...e.styles,
                height: De ? `${s}px` : null,
                transform: `translate3d(${Ja(e,1,t)}px, ${aa}px, 0) scale(1)`
              } : e.itemNumber === je && (e.styles = De ? {
                ...e.styles,
                height: `${s}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${aa}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${Xa()}px, ${aa}px, 0) scale(1)`
              }), e
            }))
          };
          (0, g.useEffect)(() => {
            !1 !== $e && !0 !== re && (ne(!0), Ge(!1), Qa(je, C.length, !0), N.current && (N.current.style.transition = "all var(--eventDeck-transitionCardOpen)", N.current.style.transform = `translate(${-1*be}px, ${aa}px)`), gt(), De ? (ye(0), la(!1), ia(!0)) : Xe(!0))
          }, [$e]), (0, g.useEffect)(() => {
            na && (ia(!1), I(C.map(e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e))))
          }, [na]);
          const _t = (e = !1) => {
            I(C.map(a => {
              if (a.upNext = Ya(a.itemNumber), a.itemNumber !== je) {
                let e = Ja(a, 1);
                a.itemNumber < je && (e = Ja(a, -1)), a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, ${Za(a)}px, 0) scale(${Ka()})`
                }
              } else a.itemNumber === je && !De && e && (a.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Xa()}px, ${aa}px, 0) scale(1)`
              });
              return a
            }))
          };
          (0, g.useEffect)(() => {
            !1 !== Ye && !0 !== De && (Xe(!1), setTimeout(() => {
              _t(), la(!1)
            }, 1))
          }, [Ye]), (0, g.useEffect)(() => {
            I(ot(o, ""))
          }, [G, q, o]), (0, g.useEffect)(() => {
            const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
            Da(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
          }, []), (0, g.useEffect)(() => {
            const e = ie !== re,
              t = window.document.body.style.overflowY;
            return re ? (e && (window.document.body.style.overflowY = "hidden", a(!0)), Ra && Ba(!0)) : Ca || re || (e && (window.document.body.style.overflowY = t, a(!1)), Ra && Va && Ba(!1)), () => {
              window.document.body.style.overflowY = t
            }
          }, [re, Ca]), (0, g.useEffect)(() => {
            if (!ma) return;
            clearTimeout(_a);
            const e = setTimeout(() => {
              ga(!1)
            }, ba);
            ua(e)
          }, [ma]), (0, g.useEffect)(() => {
            v && setTimeout(() => {
              x(!1)
            }, 3e3)
          }, [v]), (0, g.useEffect)(() => {
            x(!0), ye(0), ve(0);
            let e = Math.ceil(Math.ceil(Me / q) / K);
            De && (e = C.length - 1), e < 0 && (e = 1), Qa(0, e, !1), re && dt()
          }, [De]), (0, g.useEffect)(() => {
            N.current && !re && (N.current.style.transform = "")
          }, [N, De, re]), (0, g.useEffect)(() => {
            const e = (i ?? []).map(e => {
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
          }, [i]), (0, g.useEffect)(() => {
            D(o.map(() => (0, g.createRef)()))
          }, [o]), (0, g.useEffect)(() => {
            const e = e => {
              const {
                key: a
              } = e;
              "ArrowLeft" === a ? at(0, !1) : "ArrowRight" === a ? et(0, !1) : "Escape" === a && re && dt()
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }, [ma, da, re, N]), (0, g.useEffect)(() => {
            if (N.current) {
              let e = N?.current?.clientHeight;
              e += Ds(N?.current, "margin-top"), e += Ds(N?.current, "margin-bottom"), Se(e)
            }
          }, [N, S]), (0, g.useEffect)(() => {
            re && (() => {
              const e = j?.getBoundingClientRect().top,
                a = -1 * (e - p);
              if (I(C.map(e => {
                  if (e.styles.transform) {
                    const t = e.styles.transform.split(","),
                      s = `${t[0]}, ${a}px,${t[2]}`;
                    e.styles = {
                      ...e.styles,
                      transform: s
                    }
                  }
                  return e
                })), N.current) {
                const a = -1 * (e - p);
                N.current.style.transform = `translate(${-1*be}px, ${a}px)`
              }
            })()
          }, [De, re, aa]), (0, g.useEffect)(() => {
            re || (Me < de * oe && 0 === fe ? (ye(0), P(!0), E(!0)) : xe < Ce ? (P(!0), E(!1), ve(te), ye(Ce)) : xe < 0 && (P(!1), ve(te - 1)), Me > de * oe && A && P(!1))
          }, [Ce]), (0, g.useEffect)(() => {
            if (y.current) {
              w(y.current);
              const e = Ds(document.documentElement, "--root-font-size"),
                a = Ds(y.current, "--eventDeck-modalGutters") * e,
                t = Ds(y.current, "--eventDeck-collapsedMaxWidth");
              ue(t);
              let s = oe - 2 * a;
              s > t && (s = t), ge(s), le(s / oe);
              const r = 2 * a + s;
              let n = 0;
              r < oe && (n = .5 * (oe - r)), pe(n);
              let i = Ds(y.current, "--eventDeck-modalBottomGutter");
              i *= e;
              const c = window.innerHeight - (Ne + i);
              Q(.5 * s < c ? s / 4 : .5 * c);
              const l = Ds(y.current, "--eventDeck-mobileBreakpoint");
              Be(l);
              let m = Ds(y.current, "--eventDeck-itemSize");
              m *= e, O(m);
              let g = Ds(y.current, "--eventDeck-modalGutterGap");
              g *= e, Le(g);
              let u = Ds(y.current, "--eventDeck-insideMargin");
              u *= e;
              const b = !1 === De ? 2 * m + u : m + u;
              $(b), F(b + u);
              const p = m + u;
              W(p);
              let k = Math.ceil(.5 * (o.length - 1)) * p + b;
              De && (k = o.length * p), Re(k), 0 !== Me && Te(-1 * Me + s);
              let h = Math.ceil(Math.ceil(k / p) / K);
              (De || re) && (h = C.length - 1), se(h);
              const v = Ds(y.current, "--eventDeck-itemScaleUpAmount");
              ea(v), Je(Ds(y.current, "--eventDeck-cardCloseTransitionDuration")), f(Ds(y.current, "--eventDeck-itemImageTitleMargins") * e), null !== d && e !== d && (_(e), re && _t()), null === d && _(e)
            }
          }, [y, o]), (0, g.useEffect)(() => {
            if (re && !De) {
              _t();
              const e = j?.getBoundingClientRect().top,
                a = -1 * (e - p);
              a !== aa && ta(a)
            }
          }, [k]), (0, g.useEffect)(() => {
            M(!(!T || !A || re))
          }, [T, A]), (0, g.useEffect)(() => {
            const e = Rs()(e => {
              ce(e), Ve(e < Oe);
              const a = (1 - de) / 2;
              Ae(e * a);
              const t = Math.floor(me / q);
              Y(t);
              let s = t * q;
              s > _e && (s = _e), Z(s), ae(e - e * a);
              const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (r !== k && h(r), re && r === k && !v) {
                const e = j?.getBoundingClientRect().top,
                  a = -1 * (e - p);
                a !== aa && ta(a)
              }
            }, 300);
            return window.addEventListener("resize", () => {
              e(window.innerWidth)
            }), window.addEventListener("scroll", () => {
              re && De && e(window.innerWidth)
            }), e(window.innerWidth), () => {
              window.removeEventListener("resize", () => {
                e(window.innerWidth)
              })
            }
          }, [q, de, re, De]), (0, g.useEffect)(() => {
            !1 !== re && !0 !== v && (De ? gt() : _t(!0))
          }, [ee, X, Pe, V, oe, ze, J, aa]), (0, g.useEffect)(() => {
            const e = () => {
              if (y.current && oa) {
                const e = y.current.getBoundingClientRect(),
                  a = .2 * window.innerHeight;
                window.innerHeight - e.top >= a && ca(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }, [y]);
          const ut = (0, g.useCallback)(() => {
            if (null !== y.current && !r) {
              const {
                top: a
              } = y?.current?.getBoundingClientRect() || 0;
              a <= .6 * window.innerHeight && (s({
                event: "page_section_impression",
                element_placement: e?._memoq?.title?.toLowerCase()
              }), n(!0))
            }
          }, [y]);
          (0, g.useEffect)(() => (window.addEventListener("scroll", ut), () => {
            window.removeEventListener("scroll", ut)
          }), [ut, y]), (0, g.useEffect)(() => {
            "next" === xa ? (et(0, !0), ya("")) : "prev" === xa && (at(0, !0), ya(""))
          }, [xa]), (0, g.useEffect)(() => {
            y.current && y.current.addEventListener("mouseleave", () => {
              Ca && nt()
            })
          }, [y, Ca]), (0, g.useEffect)(() => (document.body.addEventListener("mouseleave", it), () => {
            document.body.removeEventListener("mouseleave", it)
          }), [Ca]), (0, g.useEffect)(() => {
            Na && setTimeout(() => {
              Sa(!1), wa(0)
            }, ba)
          }, [Na]), (0, g.useEffect)(() => {
            Ma(De ? 20 : 100)
          }, [De]), (0, g.useEffect)(() => {
            pa(re ? 500 : 100)
          }, [re]);
          const bt = e => {
              e.currentTarget !== e.target || re || ct(e.target.dataset.itemPosition)
            },
            pt = (0, z.useTinaComponents)(),
            ft = (0, g.useMemo)(() => ({
              ...pt,
              CardWithImageGallery: Oa,
              HTMLElement: U,
              ImageWithBadge: he.A,
              Carousel: l.A,
              GroupOfItems: Ee.default,
              UnorderedList: ke.A
            }), [pt]),
            kt = (0, g.useMemo)(() => C.map(e => (0, g.createElement)($s, {
              ...e,
              refDeck: y,
              key: e?.id ?? e?.sync_hash,
              components: ft,
              prevPage: at,
              nextPage: et,
              onFocus: bt,
              loadCssRawValue: Ds,
              selectedItemNumber: je,
              carouselTitle: t,
              sharedDraggingDelta: Aa,
              setSharedDraggingDelta: Pa
            })), [C, y, ft, at, et, je]);
          return !kt?.length || kt.length <= 0 ? null : (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b3206f796ddd61f3b6d1974ea73a4f22",
              "data-modal-mode": We,
              "aria-hidden": "true"
            }), (0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e623ea950c02afbb9d28949ca4701ca4",
              "data-modal-mode": re,
              "data-faded": oa,
              ref: y,
              onTouchStart: tt,
              onTouchMove: st,
              onTouchEnd: rt,
              onMouseDown: tt,
              onMouseMove: st,
              onMouseUp: rt,
              tabIndex: -1,
              role: "presentation",
              children: [(0, m.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b8d0a147dd4f1835ba5495bac02f4c11",
                "aria-hidden": "true"
              }), (0, m.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9a758545d118b90def20e860fe541c26e",
                "data-modal-mode": re,
                ref: N,
                "data-animating": sa,
                children: [(0, m.jsx)("h2", {
                  className: "rockstargames-sites-gta-gen9be12152c36226103d53925a82ba66452",
                  children: t
                }), (0, m.jsx)(Fs, {
                  prevPage: at,
                  prevBtnDisabled: T,
                  nextPage: et,
                  nextBtnDisabled: A,
                  selectedItemNumber: je,
                  itemsData: o,
                  closeModalMode: dt,
                  inModalMode: re,
                  controlsHidden: L,
                  focusTrapControl: Fa,
                  setTriggerFocusCard: Ga,
                  focusTrapDirection: Ua
                }), (0, m.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c4f4d692febb9861a621596f22e32d93",
                  id: "eventsDeck-content",
                  role: "region",
                  "aria-live": "polite",
                  children: `${je+1}/${o.length} ${C[je]?.tina?.payload?.meta?.title}`
                })]
              }), (0, m.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f369e1390b3aa251df43bea9c55634f2",
                "data-modal-mode": re,
                "data-is-dragging": Ca,
                style: {
                  transform: `translate3d(${xe+Ea}px, 0, 0)`,
                  width: `${Me}px`
                },
                ref: S,
                children: kt
              })]
            })]
          })
        }, na);
      var Us = t(34649),
        qs = t(59139),
        Ws = t(539),
        Ks = t(88023),
        Ys = t(4522),
        Xs = t(36644),
        Zs = t(80395),
        Js = t(23331),
        Qs = t(1088),
        er = t(2841),
        ar = t(43945),
        tr = t(86981),
        sr = t(43917),
        rr = t(62777),
        nr = t(45327);
      const ir = JSON.parse('{"de-DE":{"bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","decorative_video_replay_button_label":"Wiederholen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Abspielen","hp_hero_stop_button_label":"Anhalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","job_card_bookmark_action":"Markieren","job_card_created_by":"Erstellt von","job_card_image_alt_text":"Screenshot vom Job {name}","job_card_report_action":"Melden","job_card_share_action":"Teilen","job_card_updated_date":"Aktualisiert: {date}","job_card_verified_by":"Verifiziert von","job_dialog_bookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen markierten Job sehen zu können – Jobs können nur im Spiel bewertet werden, nachdem sie gespielt wurden.","job_dialog_bookmarked_heading":"Job markiert: <b>{name}</b>","job_dialog_bookmarked_title":"Job markiert","job_dialog_confirmation_button":"OKAY","job_dialog_error_body":"Es gab einen Fehler bei dem Versuch, einen Job zu markieren/eine Markierung zu entfernen. Bitte versuche es erneut.","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Fehler","job_dialog_unbookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen Job nicht länger in deinen Markierungen sehen zu können.","job_dialog_unbookmarked_heading":"Job nicht mehr markiert: <b>{name}</b>","job_dialog_unbookmarked_title":"Job nicht mehr markiert","lightbox_close_button":"Schließen","login_dialog_body":"Du musst dich erst anmelden, um diese Inhalte zu sehen.","login_dialog_signin_button":"Anmelden","login_dialog_signup_button":"Registrieren","login_dialog_title":"Anmelden erforderlich","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details_amp":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details_amp":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","web_offer_claim_dialog_close":"schließen","web_offer_claim_error_state_button":"Erneut versuchen","web_offer_claim_error_state_icon_label":"Fehler-Symbol","web_offer_claim_exists_state_icon_label":"Erfolgssymbol","web_offer_claim_link_account_state_icon_label":"Fehler-Symbol","web_offer_claim_loading_state":"lädt","web_offer_claim_success_state_icon_label":"Erfolgssymbol"},"en-US":{"bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Play","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","job_card_bookmark_action":"Bookmark","job_card_created_by":"Created by","job_card_image_alt_text":"Screenshot of {name} job","job_card_report_action":"Report","job_card_share_action":"Share","job_card_updated_date":"Updated {date}","job_card_verified_by":"Verified by","job_dialog_bookmarked_body":"You will need to restart Grand Theft Auto Online to see this bookmarked job - jobs can only be rated in-game, after they have been played.","job_dialog_bookmarked_heading":"Job Bookmarked: <b>{name}</b>","job_dialog_bookmarked_title":"Job Bookmarked","job_dialog_confirmation_button":"OK","job_dialog_error_body":"There was an error when attempting to bookmark/unbookmark the job. Please try again","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"You will need to restart Grand Theft Auto Online to no longer see this job in your bookmarks.","job_dialog_unbookmarked_heading":"Job Unbookmarked: <b>{name}</b>","job_dialog_unbookmarked_title":"Job Unbookmarked","job_type_adversary_mode":"Adversary Mode","job_type_air_race":"Air Race","job_type_arena_deathmatch":"Arena Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Bike Race","job_type_capture":"Capture","job_type_contact_mission":"Contact Mission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Drag Race","job_type_drift_race":"Drift Race","job_type_foot_race":"Foot Race","job_type_hao_special_works_race":"Hao\'s Special Works Race","job_type_heist":"Heist","job_type_heist_prep":"Heist Prep","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Land Race","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission Creator","job_type_open_wheel_race":"Open Wheel Race","job_type_parachuting":"Parachuting","job_type_pursuit_race":"Pursuit Race","job_type_race":"Race","job_type_random_mission":"Random Mission","job_type_special_race":"Special Vehicle Race","job_type_street_race":"Street Race","job_type_stunt_race":"Stunt Race","job_type_survival":"Survival","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Team Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Transform Race","job_type_unknown":"Unknown","job_type_vehicle_deathmatch":"Vehicle Deathmatch","job_type_water_race":"Sea Race","lightbox_close_button":"Close","login_dialog_body":"You need to sign in first to interact with this content","login_dialog_signin_button":"Sign In","login_dialog_signup_button":"Sign Up","login_dialog_title":"Sign In Required","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","web_offer_claim_dialog_close":"close","web_offer_claim_error_state_button":"Try Again","web_offer_claim_error_state_icon_label":"Error Icon","web_offer_claim_exists_state_icon_label":"Success Icon","web_offer_claim_link_account_state_icon_label":"Error Icon","web_offer_claim_loading_state":"loading","web_offer_claim_success_state_icon_label":"Success Icon"},"es-ES":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Volver a ver","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creada por","job_card_image_alt_text":"Captura de pantalla de la actividad {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizada el {date}","job_card_verified_by":"Verificada por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Ha habido un error al intentar marcar o eliminar la marca de esta actividad. Vuelve a intentarlo","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tu lista de actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad no marcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad no marcada","lightbox_close_button":"Cerrar","login_dialog_body":"Para interactuar con este contenido debes iniciar sesión.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Debes iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","web_offer_claim_dialog_close":"Cerrar","web_offer_claim_error_state_button":"Vuelve a intentarlo","web_offer_claim_error_state_icon_label":"Icono de error","web_offer_claim_exists_state_icon_label":"Icono de aprobación","web_offer_claim_link_account_state_icon_label":"Icono de error","web_offer_claim_loading_state":"Cargando","web_offer_claim_success_state_icon_label":"Icono de aprobación"},"es-MX":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Repetir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creado por","job_card_image_alt_text":"Captura de pantalla del trabajo {name}","job_card_report_action":"Reportar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizado {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Las actividades solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Se produjo un error al intentar marcar o desmarcar la actividad. Inténtalo de nuevo.","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tus actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad desmarcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad desmarcada","lightbox_close_button":"Cerrar","login_dialog_body":"Necesitas iniciar sesión para poder interactuar con este contenido.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Necesitas iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","web_offer_claim_dialog_close":"cerrar","web_offer_claim_error_state_button":"Volver a intentar","web_offer_claim_error_state_icon_label":"Ícono de error","web_offer_claim_exists_state_icon_label":"Ícono de aprobado","web_offer_claim_link_account_state_icon_label":"Ícono de error","web_offer_claim_loading_state":"cargando","web_offer_claim_success_state_icon_label":"Ícono de aprobado"},"fr-FR":{"bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","decorative_video_replay_button_label":"Relire","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Lecture","hp_hero_stop_button_label":"Arrêter","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","job_card_bookmark_action":"Ajouter aux favoris","job_card_created_by":"Créé par","job_card_image_alt_text":"Capture d\'écran de la mission {name}","job_card_report_action":"Effectuer un signalement","job_card_share_action":"Partager","job_card_updated_date":"Dernière modification : {date}","job_card_verified_by":"Vérifié par","job_dialog_bookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour voir cette mission ajoutée aux favoris. Les missions ne peuvent être notées qu\'en jeu, après avoir été jouées.","job_dialog_bookmarked_heading":"Mission ajoutée aux favoris : <b>{name}</b>","job_dialog_bookmarked_title":"Mission ajoutée aux favoris","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Une erreur est survenue lors de l\'ajout/du retrait de la mission de la liste des favoris. Veuillez réessayer.","job_dialog_error_heading":"Mission : <b>{name}</b>","job_dialog_error_title":"Erreur","job_dialog_unbookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour ne plus voir cette mission dans vos favoris.","job_dialog_unbookmarked_heading":"Mission retirée des favoris : <b>{name}</b>","job_dialog_unbookmarked_title":"Mission retirée des favoris","lightbox_close_button":"Fermer","login_dialog_body":"Vous devez vous connecter pour interagir avec ce contenu.","login_dialog_signin_button":"Se connecter","login_dialog_signup_button":"Créer un compte","login_dialog_title":"Connexion requise","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details_amp":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","web_offer_claim_dialog_close":"Fermer","web_offer_claim_error_state_button":"Réessayer","web_offer_claim_error_state_icon_label":"Icône d\'erreur","web_offer_claim_exists_state_icon_label":"Icône de réussite","web_offer_claim_link_account_state_icon_label":"Icône d\'erreur","web_offer_claim_loading_state":"Chargement","web_offer_claim_success_state_icon_label":"Icône de réussite"},"it-IT":{"bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","decorative_video_replay_button_label":"Riproduci di nuovo","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Riproduci","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","job_card_bookmark_action":"Aggiungi ai preferiti","job_card_created_by":"Creato da","job_card_image_alt_text":"Screenshot dell\'attività {name}","job_card_report_action":"Segnala","job_card_share_action":"Condividi","job_card_updated_date":"Aggiornato il {date}","job_card_verified_by":"Verificato da","job_dialog_bookmarked_body":"Per visualizzare questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online. Le attività possono essere valutate solo all\'interno del gioco, dopo averle giocate.","job_dialog_bookmarked_heading":"Attività aggiunta ai preferiti: <b>{name}</b>","job_dialog_bookmarked_title":"Attività aggiunta ai preferiti","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Si è verificato un errore durante l’aggiunta ai/la rimozione dai preferiti dell’attività. Riprova più tardi","job_dialog_error_heading":"Attività: <b>{name}</b>","job_dialog_error_title":"Errore","job_dialog_unbookmarked_body":"Per non visualizzare più questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online.","job_dialog_unbookmarked_heading":"Attività rimossa dai preferiti: <b>{name}</b>","job_dialog_unbookmarked_title":"Attività rimossa dai preferiti","lightbox_close_button":"Chiudi","login_dialog_body":"È necessario eseguire l’accesso prima di poter interagire con questo contenuto","login_dialog_signin_button":"Accedi","login_dialog_signup_button":"Registrati","login_dialog_title":"È necessario eseguire l’accesso","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details_amp":"Stai già usando questo indirizzo email per ricevere la newsletter. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","web_offer_claim_dialog_close":"chiudi","web_offer_claim_error_state_button":"Riprova","web_offer_claim_error_state_icon_label":"Icona Errore","web_offer_claim_exists_state_icon_label":"Icona di successo","web_offer_claim_link_account_state_icon_label":"Icona Errore","web_offer_claim_loading_state":"caricamento","web_offer_claim_success_state_icon_label":"Icona di successo"},"ja-JP":{"bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","decorative_video_replay_button_label":"もう一回見る","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"再生","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","job_card_bookmark_action":"ブックマーク","job_card_created_by":"により作成","job_card_image_alt_text":"ジョブ{name}のスクリーンショット","job_card_report_action":"報告","job_card_share_action":"共有","job_card_updated_date":"{date}に更新","job_card_verified_by":"により認証","job_dialog_bookmarked_body":"ブックマークされたジョブを閲覧するには「GTAオンライン」を再起動する必要があります - ジョブは実際にプレイした後でなければ、ゲーム内で評価することはできません。","job_dialog_bookmarked_heading":"ブックマークされたジョブ: <b>{name}</b>","job_dialog_bookmarked_title":"ブックマークされたジョブ","job_dialog_confirmation_button":"OK","job_dialog_error_body":"ジョブをブックマーク/ブックマーク解除を試みた際にエラーが起こりました。もう一度お試しください","job_dialog_error_heading":"ジョブ: <b>{name}</b>","job_dialog_error_title":"エラー","job_dialog_unbookmarked_body":"ブックマークから解除たジョブを削除するには「GTAオンライン」を再起動する必要があります。","job_dialog_unbookmarked_heading":"ブックマークから解除されたジョブ: <b>{name}</b>","job_dialog_unbookmarked_title":"ブックマークから解除されたジョブ","lightbox_close_button":"閉じる","login_dialog_body":"このコンテンツを利用するには、サインインする必要があります","login_dialog_signin_button":"サインイン","login_dialog_signup_button":"サインアップ","login_dialog_title":"サインインが必要","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details_amp":"このメールアドレスで既にニュースレターアップデートを受け取っています。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します","web_offer_claim_dialog_close":"閉じる","web_offer_claim_error_state_button":"もう一度試す","web_offer_claim_error_state_icon_label":"エラーアイコン","web_offer_claim_exists_state_icon_label":"成功のアイコン","web_offer_claim_link_account_state_icon_label":"エラーアイコン","web_offer_claim_loading_state":"ロード中","web_offer_claim_success_state_icon_label":"成功のアイコン"},"ko-KR":{"bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","decorative_video_replay_button_label":"다시 재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"재생","hp_hero_stop_button_label":"정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","job_card_bookmark_action":"즐겨찾기","job_card_created_by":"생성됨","job_card_image_alt_text":"{name} 작업 스크린샷","job_card_report_action":"신고","job_card_share_action":"공유","job_card_updated_date":"{date} 업데이트됨","job_card_verified_by":"인증됨","job_dialog_bookmarked_body":"즐겨찾기에 등록한 작업을 보려면 Grand Theft Auto 온라인을 다시 시작해야 합니다 - 작업은 플레이한 후에만 게임 내에서 평가할 수 있습니다.","job_dialog_bookmarked_heading":"즐겨찾기에 등록한 작업: <b>{name}</b>","job_dialog_bookmarked_title":"즐겨찾기에 등록한 작업","job_dialog_confirmation_button":"확인","job_dialog_error_body":"작업 즐겨찾기 등록/해제 중 오류가 발생했습니다. 다시 시도하십시오","job_dialog_error_heading":"작업: <b>{name}</b>","job_dialog_error_title":"오류","job_dialog_unbookmarked_body":"즐겨찾기에서 이 작업을 표시하지 않으려면 Grand Theft Auto 온라인을 다시 시작해야 합니다.","job_dialog_unbookmarked_heading":"즐겨찾기 해제한 작업: <b>{name}</b>","job_dialog_unbookmarked_title":"즐겨찾기 해제한 작업","lightbox_close_button":"닫기","login_dialog_body":"이 콘텐츠에 댓글을 남기거나 좋아요를 누르려면 먼저 로그인하십시오","login_dialog_signin_button":"로그인","login_dialog_signup_button":"가입","login_dialog_title":"로그인 필요","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details_amp":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details_amp":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","web_offer_claim_dialog_close":"닫기","web_offer_claim_error_state_button":"다시 시도하기","web_offer_claim_error_state_icon_label":"오류 아이콘","web_offer_claim_exists_state_icon_label":"성공 아이콘","web_offer_claim_link_account_state_icon_label":"오류 아이콘","web_offer_claim_loading_state":"불러오는 중","web_offer_claim_success_state_icon_label":"성공 아이콘"},"pl-PL":{"bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","decorative_video_replay_button_label":"Odtwórz ponownie","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Odtwórz","hp_hero_stop_button_label":"Przerwij","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","job_card_bookmark_action":"Dodaj do zakładek","job_card_created_by":"Stworzone przez","job_card_image_alt_text":"Zrzut ekranu akcji {name}","job_card_report_action":"Zgłoś","job_card_share_action":"Udostępnij","job_card_updated_date":"Zaktualizowano {date}","job_card_verified_by":"Zweryfikowane przez","job_dialog_bookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby zobaczyć tę dodaną do ulubionych akcję. Akcje mogą być ocenione tylko i wyłącznie w grze po ich rozegraniu.","job_dialog_bookmarked_heading":"Akcja dodana do ulubionych: <b>{name}</b>","job_dialog_bookmarked_title":"Akcja dodana do ulubionych","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Wystąpił błąd podczas dodawania/usuwania tej akcji z sekcji ulubionych. Spróbuj ponownie.","job_dialog_error_heading":"Akcja: <b>{name}</b>","job_dialog_error_title":"Błąd","job_dialog_unbookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby akcja nie pojawiała się dłużej w sekcji ulubionych akcji.","job_dialog_unbookmarked_heading":"Akcja usunięta z ulubionych: <b>{name}</b>","job_dialog_unbookmarked_title":"Akcja usunięta z ulubionych","lightbox_close_button":"Zamknij","login_dialog_body":"Zaloguj się, aby zapoznać się z zawartością.","login_dialog_signin_button":"Zaloguj się","login_dialog_signup_button":"Zarejestruj się","login_dialog_title":"Wymagane zalogowanie się","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details_amp":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","web_offer_claim_dialog_close":"Zamknij","web_offer_claim_error_state_button":"Spróbuj ponownie","web_offer_claim_error_state_icon_label":"Ikona błędu","web_offer_claim_exists_state_icon_label":"Ikona sukcesu","web_offer_claim_link_account_state_icon_label":"Ikona błędu","web_offer_claim_loading_state":"Ładowanie","web_offer_claim_success_state_icon_label":"Ikona sukcesu"},"pt-BR":{"bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Iniciar","hp_hero_stop_button_label":"Parar","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Adicionar aos Favoritos","job_card_created_by":"Criado por","job_card_image_alt_text":"Captura de tela do Serviço {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartilhar","job_card_updated_date":"Atualização {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para ver este serviço como um de seus Favoritos. Serviços só podem ser avaliados no jogo, após terem sido jogados.","job_dialog_bookmarked_heading":"Serviço adicionado aos Favoritos: <b>{name}</b>","job_dialog_bookmarked_title":"Serviço adicionado aos Favoritos","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Houve um erro ao tentar adicionar/remover esse serviço aos Favoritos. Tente novamente.","job_dialog_error_heading":"Serviço: <b>{name}</b>","job_dialog_error_title":"Erro","job_dialog_unbookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para não ver mais este serviço como um de seus Favoritos.","job_dialog_unbookmarked_heading":"Serviço removido dos Favoritos: <b>{name}</b>","job_dialog_unbookmarked_title":"Serviço removido dos Favoritos","lightbox_close_button":"Fechar","login_dialog_body":"É necessário iniciar sessão para interagir com esse conteúdo","login_dialog_signin_button":"Iniciar sessão","login_dialog_signup_button":"Criar conta","login_dialog_title":"É necessário iniciar sessão","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details_amp":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição","web_offer_claim_dialog_close":"fechar","web_offer_claim_error_state_button":"Tentar novamente","web_offer_claim_error_state_icon_label":"Ícone de erro","web_offer_claim_exists_state_icon_label":"Ícone de êxito","web_offer_claim_link_account_state_icon_label":"Ícone de erro","web_offer_claim_loading_state":"carregando","web_offer_claim_success_state_icon_label":"Ícone de êxito"},"ru-RU":{"bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","decorative_video_replay_button_label":"Повтор","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизвести","hp_hero_stop_button_label":"Стоп","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total}","job_card_bookmark_action":"Отметить","job_card_created_by":"Создан","job_card_image_alt_text":"Снимок экрана дела {name}","job_card_report_action":"Пожаловаться","job_card_share_action":"Поделиться","job_card_updated_date":"Обновлен {date}","job_card_verified_by":"Проверен","job_dialog_bookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы увидеть добавленное в закладки дело. Оценивать дела можно только в игре после прохождения.","job_dialog_bookmarked_heading":"Дело добавлено в закладки: <b>{name}</b>","job_dialog_bookmarked_title":"Дело добавлено в закладки","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Произошла ошибка при попытке добавить дело в закладки или удалить его из закладок. Пожалуйста, повторите попытку","job_dialog_error_heading":"Дело: <b>{name}</b>","job_dialog_error_title":"Ошибка","job_dialog_unbookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы удалить это дело из закладок.","job_dialog_unbookmarked_heading":"Дело удалено из закладок: <b>{name}</b>","job_dialog_unbookmarked_title":"Дело удалено из закладок","lightbox_close_button":"Закрыть","login_dialog_body":"Выполните вход, чтобы взаимодействовать с этим контентом.","login_dialog_signin_button":"Войти","login_dialog_signup_button":"Регистрация","login_dialog_title":"Необходимо выполнить вход","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details_amp":"Вы уже получаете письма по рассылке на этот адрес электронной почты. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","web_offer_claim_dialog_close":"закрыть","web_offer_claim_error_state_button":"Попробовать снова","web_offer_claim_error_state_icon_label":"Значок ошибки","web_offer_claim_exists_state_icon_label":"Значок «Успех»","web_offer_claim_link_account_state_icon_label":"Значок ошибки","web_offer_claim_loading_state":"загрузка","web_offer_claim_success_state_icon_label":"Значок «Успех»"},"zh-CN":{"bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"回放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","job_card_bookmark_action":"收藏","job_card_created_by":"制作者","job_card_image_alt_text":"{name}差事的截图","job_card_report_action":"举报","job_card_share_action":"分享","job_card_updated_date":"更新于{date}","job_card_verified_by":"认证者","job_dialog_bookmarked_body":"您需要重新启动Grand Theft Auto在线模式来查看这项已收藏的差事。只有在游玩了差事后才能在游戏内对它们进行评价。","job_dialog_bookmarked_heading":"已收藏差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏差事","job_dialog_confirmation_button":"确定","job_dialog_error_body":"收藏/取消收藏此差事时出现了一个错误。请稍候再试","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"错误","job_dialog_unbookmarked_body":"需要您重新启动Grand Theft Auto在线模式后，这项差事才会从您的收藏中消失。","job_dialog_unbookmarked_heading":"已取消收藏差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏差事","lightbox_close_button":"关闭","login_dialog_body":"您需要先登录才能与该内容进行互动","login_dialog_signin_button":"登录","login_dialog_signup_button":"注册","login_dialog_title":"需要登录","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details_amp":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置中随时管理您的通信偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"确定","ns_successfully_subscribed_details_amp":"您现已订阅Rockstar Games邮件通知，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置中随时管理您的通信偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","web_offer_claim_dialog_close":"关闭","web_offer_claim_error_state_button":"再次尝试","web_offer_claim_error_state_icon_label":"错误图标","web_offer_claim_exists_state_icon_label":"成功图标","web_offer_claim_link_account_state_icon_label":"错误图标","web_offer_claim_loading_state":"正在加载","web_offer_claim_success_state_icon_label":"成功图标"},"zh-TW":{"bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"重播","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","job_card_bookmark_action":"收藏","job_card_created_by":"創作者：","job_card_image_alt_text":"差事 {name} 的擷圖","job_card_report_action":"檢舉","job_card_share_action":"分享","job_card_updated_date":"更新於 {date}","job_card_verified_by":"驗證者：","job_dialog_bookmarked_body":"您需要重啟 GTA 線上模式才能看見此已收藏的差事。您需要完成該差事，才能在遊戲內對其評價。","job_dialog_bookmarked_heading":"已收藏的差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏的差事","job_dialog_confirmation_button":"確定","job_dialog_error_body":"解決這個請求時出現錯誤。請再試一次。","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"錯誤","job_dialog_unbookmarked_body":"您需要重啟 GTA 線上模式才不會再在收藏中看見此差事。","job_dialog_unbookmarked_heading":"已取消收藏的差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏的差事","lightbox_close_button":"關閉","login_dialog_body":"您需要先登入才能進行操作","login_dialog_signin_button":"登入","login_dialog_signup_button":"註冊","login_dialog_title":"必須登入","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details_amp":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details_amp":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱","web_offer_claim_dialog_close":"關閉","web_offer_claim_error_state_button":"再試一次","web_offer_claim_error_state_icon_label":"錯誤圖示","web_offer_claim_exists_state_icon_label":"成功圖示","web_offer_claim_link_account_state_icon_label":"錯誤圖示","web_offer_claim_loading_state":"正在載入","web_offer_claim_success_state_icon_label":"成功圖示"}}'),
        or = e => (0, q.withIntl)(e, ir);
      var cr = t(84173);
      const dr = (0, g.createContext)(null),
        lr = (0, g.forwardRef)(function({
          jumpLinkId: e,
          currentStep: a = "unclaimed",
          testId: t = "web-offer-claim-root",
          asChild: s,
          ...r
        }, n) {
          const i = s ? cr.DX : "div",
            o = (0, x.mergeProps)({
              "data-testid": t,
              className: "bfo5lc0"
            }, r);
          return (0, m.jsx)(dr.Provider, {
            value: {
              currentStep: a
            },
            children: (0, m.jsx)(i, {
              id: e,
              ref: n,
              ...o
            })
          })
        }),
        mr = (0, g.forwardRef)(function({
          stepIndex: e,
          asChild: a,
          ...t
        }, s) {
          const r = (() => {
              const {
                currentStep: e
              } = (() => {
                const e = (0, g.useContext)(dr);
                if (!e) throw new Error("Warning, must use inside a WebOfferClaim.Root provider");
                return e
              })();
              return e
            })(),
            n = a ? cr.DX : "div",
            i = (0, x.mergeProps)({
              className: "bfo5lc1"
            }, t);
          return r === e ? (0, m.jsx)(n, {
            ref: s,
            ...i
          }) : null
        }),
        gr = (0, g.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, x.mergeProps)({
            className: "bfo5lc2"
          }, e);
          return (0, m.jsx)(y.Button, {
            ref: a,
            ...t
          })
        });
      const _r = () => {
          const {
            view: e
          } = ur();
          return e
        },
        ur = () => {
          const e = (0, g.useContext)(Lr);
          if (!e) throw new Error("Warning, must use inside a WebOfferClaim.Root provider");
          return e
        };
      var br = t(16630),
        pr = (0, br.c)({
          defaultClassName: "_1vpanoc5",
          variantClassNames: {
            view: {
              default: "_1vpanoc6",
              dialog: "_1vpanoc7"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        fr = (0, br.c)({
          defaultClassName: "_1vpanoce",
          variantClassNames: {
            platform: {
              applestore: "_1vpanocf",
              googleplay: "_1vpanocg",
              left: "_1vpanoch",
              pc: "_1vpanoci",
              pcalt: "_1vpanocj",
              ps: "_1vpanock",
              ps3: "_1vpanocl",
              ps4: "_1vpanocm",
              ps5: "_1vpanocn",
              right: "_1vpanoco",
              switch: "_1vpanocp",
              x: "_1vpanocq",
              xbox: "_1vpanocr",
              xboxone: "_1vpanocs",
              xboxseriesxs: "_1vpanoct"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kr = (0, br.c)({
          defaultClassName: "_1vpanoc0",
          variantClassNames: {
            view: {
              default: "_1vpanoc1",
              dialog: "_1vpanoc2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const hr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg",
        vr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
        xr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg",
        yr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
        jr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
        wr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg",
        Nr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
        Sr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
        Cr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg",
        Ir = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg",
        Tr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
        Er = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg",
        zr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg",
        Ar = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
        Pr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg",
        Lr = (0, g.createContext)({
          view: "default"
        }),
        Mr = (0, g.forwardRef)(function({
          asChild: e,
          testId: a = "web-offer-claim-root",
          view: t = "default",
          ...s
        }, r) {
          const n = e ? cr.DX : "div",
            i = (0, x.mergeProps)({
              "data-testid": a,
              className: kr({
                view: t
              })
            }, s);
          return (0, m.jsx)(Lr.Provider, {
            value: {
              view: t
            },
            children: (0, m.jsx)(n, {
              ref: r,
              ...i
            })
          })
        }),
        Rr = (0, g.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = _r(),
            r = e ? cr.DX : "div",
            n = (0, x.mergeProps)({
              className: pr({
                view: s
              })
            }, a);
          return (0, m.jsx)(r, {
            ref: t,
            ...n
          })
        }),
        Dr = (0, g.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = e ? cr.DX : "header",
            r = (0, x.mergeProps)({
              className: "_1vpanoc9"
            }, a);
          return (0, m.jsx)(s, {
            ref: t,
            ...r
          })
        }),
        Vr = (0, g.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = e ? cr.DX : "footer";
          return (0, m.jsx)(s, {
            ref: t,
            ...a
          })
        }),
        Or = (0, g.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = _r(),
            r = e ? cr.DX : "div",
            n = (0, x.mergeProps)({
              className: "_1vpanoc8"
            }, a);
          return "dialog" === s ? (0, m.jsx)(y.Dialog.Description, {
            ref: t,
            asChild: !0,
            children: (0, m.jsx)(r, {
              ...n
            })
          }) : (0, m.jsx)(r, {
            ref: t,
            ...n
          })
        }),
        Br = (0, g.forwardRef)(function({
          alt: e,
          src: {
            mobile: a,
            desktop: t
          },
          ...s
        }, r) {
          const n = _r(),
            i = (0, x.mergeProps)({
              className: "_1vpanoc3"
            }, s);
          return "dialog" !== n && (0, m.jsxs)("picture", {
            ref: r,
            ...i,
            children: [(0, m.jsx)("source", {
              media: "(max-width: 1279.98px)",
              srcSet: a
            }), (0, m.jsx)("source", {
              media: "(min-width: 1280px)",
              srcSet: t
            }), (0, m.jsx)("img", {
              src: t,
              className: "_1vpanoc4",
              alt: e
            })]
          })
        }),
        $r = (0, g.forwardRef)(function({
          children: e,
          appearance: a = "secondary",
          ...t
        }, s) {
          const r = (0, x.mergeProps)({
            appearance: a,
            testId: "woc.step.badge",
            className: "_1vpanocb"
          }, t);
          return (0, m.jsx)(y.Badge.Root, {
            ref: s,
            ...r,
            asChild: !0,
            children: (0, m.jsx)(y.Badge.Label, {
              children: e
            })
          })
        }),
        Gr = (0, g.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = e ? cr.DX : "div",
            r = (0, x.mergeProps)({
              className: "_1vpanoca"
            }, a);
          return (0, m.jsx)(s, {
            ref: t,
            ...r
          })
        }),
        Fr = (0, g.forwardRef)(function({
          ...e
        }, a) {
          return "dialog" === _r() ? (0, m.jsx)(y.Dialog.Title, {
            asChild: !0,
            children: (0, m.jsx)(y.Heading, {
              ref: a,
              ...e
            })
          }) : (0, m.jsx)(y.Heading, {
            ref: a,
            ...e
          })
        }),
        Hr = (0, g.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, x.mergeProps)({
            testId: "woc.step.description",
            className: "_1vpanocc"
          }, e);
          return (0, m.jsx)(y.Body, {
            ref: a,
            ...t
          })
        }),
        Ur = (0, g.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, x.mergeProps)({
            testId: "woc.step.disclaimer",
            className: "_1vpanocd"
          }, e);
          return (0, m.jsx)(y.Body, {
            ref: a,
            ...t,
            size: "XS",
            color: "subdued"
          })
        }),
        qr = (0, g.forwardRef)(function({
          size: e = "LG",
          ...a
        }, t) {
          return (0, m.jsx)(y.Button, {
            ref: t,
            ...a,
            size: e
          })
        }),
        Wr = ({
          label: e,
          platform: a,
          ...t
        }) => {
          const s = (0, x.mergeProps)({
            className: fr({
              platform: a
            })
          }, t);
          return (0, m.jsx)(y.Button, {
            ...s,
            appearance: "secondary",
            size: "MD",
            children: (0, m.jsx)("img", {
              src: n[a],
              alt: e
            })
          })
        },
        Kr = ({
          ...e
        }) => (0, m.jsx)(Wr, {
          ...e,
          label: (0, u.findPlatform)("xbox")?.friendlyName ?? "Xbox",
          platform: "xbox"
        }),
        Yr = ({
          ...e
        }) => (0, m.jsx)(Wr, {
          ...e,
          label: (0, u.findPlatform)("ps")?.friendlyName ?? "PlayStation",
          platform: "ps"
        }),
        Xr = ({
          label: e
        }) => (0, m.jsx)("div", {
          className: "_1vpanocu",
          children: (0, m.jsx)(y.Spinner, {
            size: "pageXL",
            label: e
          })
        }),
        Zr = Object.assign(mr, i),
        Jr = "claimOffer",
        Qr = (0, g.createContext)(null),
        en = () => {
          const e = (0, g.useContext)(Qr);
          if (!e) throw new Error("useClaimContext must be used within a ClaimContext.Provider");
          return e
        },
        an = ({
          giftId: e,
          location: a,
          jumpLinkId: t,
          returnUrl: s,
          steps: r,
          variant: n,
          RichTextComponent: i
        }) => ({
          giftId: e,
          location: a,
          returnUrl: s,
          jumpLinkId: t,
          variant: n,
          steps: r,
          RichTextComponent: i,
          loading: !1,
          status: "IDLE",
          currentStep: "unclaimed",
          dialogOpen: !1
        }),
        tn = (e, a) => {
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
                ...e, ...an({
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
        sn = () => {
          const {
            state: e,
            dispatch: a
          } = en(), {
            charactersNeeded: t,
            setCharactersNeeded: s
          } = (0, b.useRockstarUserState)(), {
            track: r
          } = (0, b.useGtmTrack)(), {
            loggedIn: n,
            data: i
          } = (0, b.useRockstarUser)(), {
            signInUrl: o
          } = (0, u.useScAuthLinks)(e.returnUrl), {
            redirect: c
          } = (() => {
            const e = (0, _.useNavigate)();
            return {
              redirect: (0, g.useCallback)((a, t = {}) => {
                try {
                  const s = new URL(a);
                  if (s.origin === window.location.origin) {
                    const a = s.pathname + s.search + s.hash;
                    e(a, t)
                  } else t.replace ? window.location.replace(s.href) : window.location.href = s.href
                } catch {
                  window.location.href = a
                }
              }, [e])
            }
          })(), {
            ref: d,
            inView: l,
            trackSectionImpression: m
          } = (() => {
            const e = (0, g.useRef)(!1),
              a = (0, g.useRef)(!1),
              {
                track: t
              } = (0, b.useGtmTrack)(),
              {
                ref: s
              } = (0, K.useInView)({
                threshold: .6,
                triggerOnce: !0,
                onChange: a => {
                  e.current = a
                }
              }),
              r = (0, g.useCallback)(s => {
                e.current && !a.current && (t({
                  event: "page_section_impression",
                  ...s
                }), a.current = !0)
              }, []);
            return {
              ref: s,
              inView: e.current,
              trackSectionImpression: r
            }
          })(), [p] = (0, _.useSearchParams)(), f = p.has(Jr, e.giftId), k = (() => {
            const {
              state: e,
              dispatch: a
            } = en(), {
              fetch: t
            } = (s = e.giftId, (0, u.useScApi)("marketing/engagement/claim/exists", {
              autoFetch: !1,
              requireBearerToken: !0,
              useCache: !1,
              query: {
                giftUId: s
              }
            }));
            var s;
            return (0, g.useCallback)(async () => {
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
          })(), h = (() => {
            const {
              state: e,
              dispatch: a
            } = en(), [t] = (0, _.useSearchParams)(), s = {
              giftUId: e.giftId,
              location: e.location,
              utmCampaign: t.get("utm_campaign") ?? "",
              utmContent: t.get("utm_content") ?? "",
              utmMedium: t.get("utm_medium") ?? "",
              utmSource: t.get("utm_source") ?? ""
            }, {
              createClaim: r
            } = (e => {
              const {
                loading: a,
                fetch: t
              } = (0, u.useScApi)("marketing/engagement/claim/create", {
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
            })(s);
            return (0, g.useCallback)(async () => {
              try {
                const e = await r();
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
            }, [r, a])
          })();
          return (0, g.useEffect)(() => {
            "IDLE" !== e.status || !n || "stateful" !== e.variant && "stateful-trigger" !== e.variant || k(), f && "IDLE" === e.status && a({
              type: "TRIGGER_CLAIM"
            }), "TRIGGERED" !== e.status || n || (r({
              element_placement: "WOC",
              event: "cta_claim",
              link_url: o,
              text: e.steps.unclaimed["button-label"] ?? "claim now",
              section_state: e.variant
            }), a({
              type: "LOGIN"
            }), c(o)), n && ("UNCLAIMED" === e.status || "stateful" !== e.variant && "TRIGGERED" === e.status) && (t && i.accountSynced || i.characters ? a({
              type: "USER_SYNCED"
            }) : (s("gtao"), a({
              type: "FETCH_CHARACTERS"
            }))), "FETCHING_CHARACTERS" === e.status && i.accountSynced && a({
              type: "USER_SYNCED"
            }), "USER_SYNCED" === e.status && (i && i.characters && i.characters.gtao.length > 0 ? a({
              type: "START_CLAIM"
            }) : a({
              type: "LINK_ACCOUNT"
            })), "CLAIMABLE" === e.status && h(), "ERROR" === e.status && (r({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e.giftId,
              section_state: `${e.variant}|${e.status}`,
              text: "something went wrong on our end. please try again in a few minutes."
            }), "stateful" === e.variant && m({
              element_placement: "WOC",
              section_state: `${e.variant}|${e.status}`
            }), a({
              type: "FINISHED"
            })), "UNLINKED" === e.status && (r({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e.giftId,
              text: "no qualifying character found"
            }), "stateful" === e.variant && m({
              element_placement: "WOC",
              section_state: `${e.variant}|${e.status}`
            }), r({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e.giftId,
              text: "no qualifying character found",
              section_state: `${e.variant}|${e.status}`
            }), a({
              type: "FINISHED"
            })), "SUCCESS" !== e.status && "ALREADY_CLAIMED" !== e.status || ("stateful" === e.variant && m({
              element_placement: "WOC",
              section_state: `${e.variant}|${e.status}`
            }), r({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e.giftId,
              text: "success",
              section_state: `${e.variant}|${e.status}`
            }), a({
              type: "FINISHED"
            }))
          }, [n, f, i, e.status]), (0, g.useEffect)(() => {
            m({
              element_placement: "WOC",
              section_state: `${e.variant}|${e.status}`
            })
          }, [l, e.variant, e.status, m]), {
            ref: d
          }
        };
      var rn = t(66760);
      const nn = (0, q.defineMessages)({
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
        on = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, q.useIntl)(), {
            state: t,
            dispatch: s
          } = en(), r = (0, g.useCallback)(() => {
            s({
              type: "TRIGGER_CLAIM",
              payload: {
                status: "CLAIMABLE"
              }
            })
          }, [s]), {
            RichTextComponent: n
          } = t, {
            image: i,
            heading: o,
            description: c,
            disclaimer: d
          } = t.steps.error, l = t.steps.unclaimed.image, {
            alt: _,
            src: u
          } = (0, z.useImageParser)(i ?? l ?? {});
          return (0, m.jsxs)(Zr.Root, {
            view: e,
            children: [(0, m.jsx)(Zr.Image, {
              alt: _ ?? "",
              src: u ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, m.jsxs)(Zr.Container, {
              children: [(0, m.jsx)(Zr.Header, {
                children: (0, m.jsx)(rn.TriangleAlert, {
                  size: "XL",
                  color: "red",
                  label: a(nn.web_offer_claim_error_state_icon_label)
                })
              }), (0, m.jsxs)(Zr.Content, {
                children: [(0, m.jsx)(Zr.Heading, {
                  level: 4,
                  children: o
                }), c && (0, m.jsx)(Zr.Description, {
                  children: n({
                    children: c
                  })
                }), (0, m.jsx)(Zr.Actions, {
                  children: (0, m.jsx)(Zr.Button, {
                    appearance: "primary",
                    onClick: r,
                    children: a(nn.web_offer_claim_error_state_button)
                  })
                })]
              }), "stateful" === t.variant && d && (0, m.jsx)(Zr.Footer, {
                children: (0, m.jsx)(Zr.Disclaimer, {
                  children: n({
                    children: d
                  })
                })
              })]
            })]
          })
        },
        cn = ({
          trackingHandler: e,
          href: a,
          label: t,
          target: s,
          ...r
        }) => (0, m.jsx)(Zr.Button, {
          ...r,
          onClick: () => {
            e && e({
              label: t,
              href: a
            })
          },
          asChild: !0,
          "data-testid": "success-link",
          children: (0, m.jsx)("a", {
            href: a,
            target: s,
            children: t
          })
        }),
        dn = ({
          platformConfigs: e,
          ...a
        }) => {
          const {
            data: t
          } = (0, b.useRockstarUser)(), {
            charactersNeeded: s,
            setCharactersNeeded: r
          } = (0, b.useRockstarUserState)();
          s || r("gtao");
          const n = t.gamesPlayed?.gtav,
            i = void 0 === n || !t.accountSynced,
            {
              label: o,
              href: c,
              target: d
            } = (0, g.useMemo)(() => {
              const a = e.default ?? {
                label: "",
                href: "",
                target: "_blank"
              };
              if (n) {
                const {
                  hasGtaPlus: s
                } = t, r = n.includes("pc") ? "pc" : n, i = s ? `gtaPlus-${r}` : r;
                return Object.hasOwn(e, i) ? e[i] : a
              }
              return a
            }, [n, t, e]);
          return (0, m.jsx)(cn, {
            label: o,
            href: c,
            target: d,
            isLoading: i,
            ...a
          })
        },
        ln = ["ps5", "xboxsx", "pcalt"],
        mn = e => {
          const {
            data: a
          } = (0, b.useRockstarUser)(), {
            charactersNeeded: t,
            setCharactersNeeded: s
          } = (0, b.useRockstarUserState)();
          t || s("gtao");
          const r = a.gamesPlayed?.gtav,
            n = (0, g.useMemo)(() => !!r && ln.includes(r), [r]),
            {
              hasGtaPlus: i
            } = a;
          return !i && n && (0, m.jsx)(cn, {
            href: "https://www.rockstargames.com/gta-plus/join",
            target: "_self",
            ...e
          })
        },
        gn = e => {
          const {
            track: a
          } = (0, b.useGtmTrack)(), {
            state: t
          } = en();
          switch (e.type) {
            case "shark": {
              const {
                type: s,
                ...r
              } = e, n = ({
                label: e,
                href: s
              }) => {
                a({
                  element_placement: "WOC",
                  event: "cta_store_link",
                  o_id: t.giftId,
                  text: e,
                  link_url: s
                })
              }, i = (0, x.mergeProps)({
                trackingHandler: n
              }, r);
              return (0, m.jsx)(dn, {
                ...i
              })
            }
            case "gta-plus-subscribe": {
              const {
                type: s,
                ...r
              } = e, n = ({
                label: e,
                href: s
              }) => {
                a({
                  element_placement: "WOC",
                  event: "cta_other",
                  o_id: t.giftId,
                  text: e,
                  link_url: s
                })
              }, i = (0, x.mergeProps)({
                trackingHandler: n
              }, r);
              return (0, m.jsx)(mn, {
                ...i
              })
            }
            default: {
              const {
                type: s,
                ...r
              } = e, n = ({
                label: e
              }) => {
                a({
                  element_placement: "WOC",
                  event: "alert_update",
                  o_id: t.giftId,
                  text: e
                })
              }, i = (0, x.mergeProps)({
                trackingHandler: n
              }, r);
              return (0, m.jsx)(cn, {
                ...i
              })
            }
          }
        },
        _n = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, q.useIntl)(), {
            state: t
          } = en(), {
            RichTextComponent: s
          } = t, {
            image: r,
            heading: n,
            description: i,
            ctas: o,
            disclaimer: c
          } = t.steps[t.currentStep], d = t.steps.unclaimed.image, {
            alt: l,
            src: g
          } = (0, z.useImageParser)(r ?? d ?? {});
          return (0, m.jsxs)(Zr.Root, {
            view: e,
            children: [(0, m.jsx)(Zr.Image, {
              alt: l ?? "",
              src: g ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, m.jsxs)(Zr.Container, {
              children: [(0, m.jsx)(Zr.Header, {
                children: (0, m.jsx)(rn.Check, {
                  size: "XL",
                  color: "green",
                  label: a(nn.web_offer_claim_success_state_icon_label)
                })
              }), (0, m.jsxs)(Zr.Content, {
                children: [(0, m.jsx)(Zr.Heading, {
                  level: 4,
                  children: n
                }), i && (0, m.jsx)(Zr.Description, {
                  children: s({
                    children: i
                  })
                }), (0, m.jsx)(Zr.Actions, {
                  children: o && o.length > 0 && o.map((e, a) => (0, m.jsx)(gn, {
                    ...e
                  }, a))
                })]
              }), "stateful" === t.variant && c && (0, m.jsx)(Zr.Footer, {
                children: (0, m.jsx)(Zr.Disclaimer, {
                  children: s({
                    children: c
                  })
                })
              })]
            })]
          })
        },
        un = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, q.useIntl)(), t = (0, u.useGetTpaLinkGenerator)(), {
            state: s
          } = en(), {
            track: r
          } = (0, b.useGtmTrack)(), {
            RichTextComponent: n
          } = s, {
            image: i,
            heading: o,
            description: c,
            disclaimer: d
          } = s.steps["link-account"], l = (0, g.useCallback)(async e => {
            const a = (0, u.findPlatform)(e)?.onlineService;
            if (a && "sc" !== a) {
              r({
                element_placement: "WOC",
                event: "cta_link_account",
                o_id: s.giftId,
                text: `link ${a}`
              });
              const e = await t({
                returnUrl: s.returnUrl || window.location.pathname,
                service: a
              });
              window.location.assign(e.href)
            }
          }, [t, r, s.returnUrl, s.giftId]), _ = (0, g.useCallback)(() => {
            l("xbox")
          }, [l]), p = (0, g.useCallback)(() => {
            l("ps")
          }, [l]), f = s.steps.unclaimed.image, {
            alt: k,
            src: h
          } = (0, z.useImageParser)(i ?? f ?? {});
          return (0, m.jsxs)(Zr.Root, {
            view: e,
            children: [(0, m.jsx)(Zr.Image, {
              alt: k ?? "",
              src: h ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, m.jsxs)(Zr.Container, {
              children: [(0, m.jsx)(Zr.Header, {
                children: (0, m.jsx)(rn.TriangleAlert, {
                  size: "XL",
                  color: "red",
                  label: a(nn.web_offer_claim_link_account_state_icon_label)
                })
              }), (0, m.jsxs)(Zr.Content, {
                children: [(0, m.jsx)(Zr.Heading, {
                  level: 4,
                  children: o
                }), c && (0, m.jsx)(Zr.Description, {
                  children: n({
                    children: c
                  })
                }), (0, m.jsxs)(Zr.Actions, {
                  children: [(0, m.jsx)(Zr.LinkXBoxButton, {
                    target: "_self",
                    onClick: _
                  }), (0, m.jsx)(Zr.LinkPSButton, {
                    target: "_self",
                    onClick: p
                  })]
                })]
              }), "stateful" === s.variant && d && (0, m.jsx)(Zr.Footer, {
                children: (0, m.jsx)(Zr.Disclaimer, {
                  children: n({
                    children: d
                  })
                })
              })]
            })]
          })
        },
        bn = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, q.useIntl)(), {
            state: t
          } = en(), {
            image: s
          } = t.steps.unclaimed, {
            alt: r,
            src: n
          } = (0, z.useImageParser)(s ?? {});
          return (0, m.jsxs)(Zr.Root, {
            view: e,
            children: [(0, m.jsx)(Zr.Image, {
              alt: r ?? "",
              src: n ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, m.jsxs)(Zr.Container, {
              children: [(0, m.jsx)(Zr.Header, {
                children: (0, m.jsx)(cr.s6, {
                  children: (0, m.jsx)(Zr.Heading, {
                    level: 5,
                    children: a(nn.web_offer_claim_loading_state)
                  })
                })
              }), (0, m.jsx)(Zr.Content, {
                children: (0, m.jsx)(Zr.Description, {
                  asChild: !0,
                  children: (0, m.jsx)(Zr.Loading, {
                    label: a(nn.web_offer_claim_loading_state)
                  })
                })
              })]
            })]
          })
        },
        pn = ({
          label: e,
          ...a
        }) => {
          const {
            loggedIn: t
          } = (0, b.useRockstarUser)(), {
            state: s,
            dispatch: r
          } = en(), [, n] = (0, _.useSearchParams)(), i = (0, g.useCallback)(() => {
            t && n(e => (e.set("claimOffer", s.giftId), e), {
              replace: !0
            });
            try {
              const e = new URLSearchParams(window.location.search);
              e.set("claimOffer", s.giftId);
              const a = `${window.location.pathname}?${e.toString()}#${s.jumpLinkId}`;
              r({
                type: "TRIGGER_CLAIM",
                payload: {
                  returnUrl: a
                }
              })
            } catch {
              console.warn("invalid params")
            }
          }, [r, t, n, s.giftId, s.jumpLinkId]), o = (0, x.mergeProps)({
            appearance: a.appearance ?? "primary"
          }, a);
          return (0, m.jsx)(gr, {
            onPress: i,
            ...o,
            children: e
          })
        },
        fn = ({
          view: e = "default"
        }) => {
          const {
            state: a
          } = en(), {
            RichTextComponent: t
          } = a, {
            image: s,
            badge: r,
            heading: n,
            description: i,
            disclaimer: o
          } = a.steps.unclaimed, {
            alt: c,
            src: d
          } = (0, z.useImageParser)(s ?? {}), l = a.steps.unclaimed["button-label"];
          return (0, m.jsxs)(Zr.Root, {
            view: e,
            children: [(0, m.jsx)(Zr.Image, {
              alt: c ?? "",
              src: d ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, m.jsxs)(Zr.Container, {
              children: [(0, m.jsxs)(Zr.Content, {
                children: [r && (0, m.jsx)(Zr.Badge, {
                  children: r
                }), (0, m.jsx)(Zr.Heading, {
                  level: 4,
                  children: n
                }), i && (0, m.jsx)(Zr.Description, {
                  children: t({
                    children: i
                  })
                }), l && (0, m.jsx)(Zr.Actions, {
                  children: (0, m.jsx)(pn, {
                    appearance: "primary",
                    size: "LG",
                    label: l
                  })
                })]
              }), o && (0, m.jsx)(Zr.Footer, {
                children: (0, m.jsx)(Zr.Disclaimer, {
                  children: t({
                    children: o
                  })
                })
              })]
            })]
          })
        },
        kn = () => {
          const {
            state: e
          } = en(), {
            ref: a
          } = sn();
          return (0, m.jsx)(lr, {
            jumpLinkId: e.jumpLinkId,
            currentStep: e.currentStep,
            "data-exclude-legacy-typography-css": !0,
            ref: a,
            children: "stateful" === e.variant ? (0, m.jsx)(hn, {}) : (0, m.jsx)(vn, {})
          })
        },
        hn = or(() => (0, m.jsxs)(m.Fragment, {
          children: [(0, m.jsx)(Zr, {
            stepIndex: "loading",
            children: (0, m.jsx)(bn, {})
          }), (0, m.jsx)(Zr, {
            stepIndex: "unclaimed",
            children: (0, m.jsx)(fn, {})
          }), (0, m.jsx)(Zr, {
            stepIndex: "success",
            children: (0, m.jsx)(_n, {})
          }), (0, m.jsx)(Zr, {
            stepIndex: "error",
            children: (0, m.jsx)(on, {})
          }), (0, m.jsx)(Zr, {
            stepIndex: "link-account",
            children: (0, m.jsx)(un, {})
          })]
        })),
        vn = or(() => {
          const {
            formatMessage: e
          } = (0, q.useIntl)(), {
            state: a
          } = en(), {
            isOpen: t,
            setIsOpen: s
          } = (() => {
            const {
              state: e
            } = en(), a = (() => {
              const [, e] = (0, _.useSearchParams)(), {
                dispatch: a
              } = en();
              return (0, g.useCallback)(() => {
                e(e => (e.delete(Jr), e), {
                  replace: !0
                }), a({
                  type: "RESET"
                })
              }, [a, e])
            })(), t = (0, g.useCallback)(e => {
              e || a()
            }, [a]);
            return {
              isOpen: e.dialogOpen,
              setIsOpen: t
            }
          })(), r = "dialog";
          return (0, m.jsxs)(m.Fragment, {
            children: ["static" === a.variant && (0, m.jsx)(fn, {
              view: "default"
            }), (0, m.jsx)(y.Dialog.Root, {
              isOpen: t,
              onOpenChange: s,
              children: (0, m.jsx)(y.Dialog.Portal, {
                children: (0, m.jsx)(y.Dialog.Overlay, {
                  children: (0, m.jsxs)(y.Dialog.Content, {
                    children: [(0, m.jsx)(y.Dialog.CloseButton, {
                      label: e(nn.web_offer_claim_dialog_close),
                      onPress: () => s(!1)
                    }), (0, m.jsx)(y.Dialog.ScrollArea, {
                      style: {
                        overflowY: "auto"
                      },
                      children: (0, m.jsxs)(y.Dialog.Layout, {
                        children: [(0, m.jsx)(Zr, {
                          stepIndex: "loading",
                          children: (0, m.jsx)(bn, {
                            view: r
                          })
                        }), (0, m.jsx)(Zr, {
                          stepIndex: "success",
                          children: (0, m.jsx)(_n, {
                            view: r
                          })
                        }), (0, m.jsx)(Zr, {
                          stepIndex: "error",
                          children: (0, m.jsx)(on, {
                            view: r
                          })
                        }), (0, m.jsx)(Zr, {
                          stepIndex: "link-account",
                          children: (0, m.jsx)(un, {
                            view: r
                          })
                        }), (0, m.jsx)(Zr, {
                          stepIndex: "exists",
                          children: (0, m.jsx)(_n, {
                            view: r
                          })
                        })]
                      })
                    })]
                  })
                })
              })
            })]
          })
        }),
        xn = (or(kn), ({
          children: e
        }) => e ? "string" != typeof e ? (console.error("RichText expects to be a string"), null) : (0, m.jsx)(z.TinaRichText, {
          html: e
        }) : null),
        yn = ({
          children: e,
          initialState: a
        }) => {
          const [t, s] = (0, g.useReducer)(tn, a);
          return (0, m.jsx)(Qr.Provider, {
            value: {
              state: t,
              dispatch: s
            },
            children: e
          })
        },
        jn = or(({
          giftId: e,
          location: a,
          jumpLinkId: t,
          variant: s = "stateful",
          steps: r
        }) => {
          const n = `${document.location.pathname}${document.location.search}#${t}`,
            i = (0, z.usePrunedTinaKeys)(r),
            o = an({
              giftId: e,
              location: a,
              returnUrl: n,
              jumpLinkId: t,
              steps: i,
              variant: s,
              RichTextComponent: xn
            }),
            {
              hash: c
            } = (0, _.useLocation)();
          return (0, g.useLayoutEffect)(() => {
            const e = document.getElementById(t);
            e && c.includes(t) && e.scrollIntoView({
              behavior: "instant",
              block: "center"
            })
          }, []), (0, m.jsx)(yn, {
            initialState: o,
            children: r && (0, m.jsx)(kn, {})
          })
        }),
        wn = {
          CalloutSection: d.A,
          Card: xa,
          CardWithImageGallery: Oa,
          ConditionalBlock: h,
          CommunityChallenges: Ws.default,
          CoverCard: Fa,
          Cta: v.A,
          FoundryButton: w,
          FoundryIconButton: N,
          DiscoveryCallout: Xs.A,
          EventsDeck: Hs,
          PageTemplate: Us.default,
          ExpandingPlatformButton: S.A,
          TextCard: Cs,
          Deck: Ps,
          Grid: T,
          Hero: G,
          Highlights: Ls.Highlights,
          HighlightsItem: Ls.HighlightsItem,
          HTMLElement: U,
          NewsletterSubscription: de,
          OrderedList: le.A,
          ParallaxInnerLayer: ge,
          ParallaxOuterLayer: ue,
          ParallaxWrapper: fe,
          UnorderedList: ke.A,
          ImageWithBadge: he.A,
          ImageTextGroupGroup: it.A,
          Carousel: l.A,
          GroupOfItems: Ee.default,
          Rating: we.A,
          gen9: nr,
          TinaModuleFetchNRender: Ie.A,
          TwitchDrops: Ks.default,
          PromoModule: je,
          RockstarVideoPlayer: c(),
          Engagement: qs.default,
          WebOfferClaim: jn
        },
        Nn = {
          CalloutSection: d.A,
          Card: xa,
          CardWithImageGallery: Oa,
          ConditionalBlock: h,
          CoverCard: Fa,
          Carousel: l.A,
          ExpandingPlatformButton: S.A,
          Hero: G,
          Grid: T,
          TextCard: Cs,
          Deck: Ps,
          GroupOfItems: Ee.default,
          ParallaxInnerLayer: ge,
          ParallaxOuterLayer: ue,
          ParallaxWrapper: fe,
          PromoModule: je,
          Engagement: qs.default,
          WebOfferClaim: jn,
          NewsletterSubscription: de,
          gen9: {
            BuyNow: Ys.A,
            Disclaimer: Zs.A,
            FAQ: Js.Ay,
            Guide: Qs.A,
            GuideGroup: er.A,
            GuideIntro: ar.A,
            GuideSection: tr.A,
            Hero: G,
            ImageTextGroupGroup: it.A,
            LinkoutSection: sr.A,
            TinaWrapper: rr.A,
            UserVote: () => null
          },
          HTMLElement: U,
          OrderedList: le.A,
          UnorderedList: ke.A,
          ImageWithBadge: he.A,
          Rating: we.A,
          TinaModuleFetchNRender: Ie.A,
          UserVote: Ce
        }
    },
    36672(e, a, t) {
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

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 36672
    },
    8194(e, a, t) {
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

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 8194
    },
    65287(e, a, t) {
      var s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 65287
    },
    86751(e, a, t) {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 91509,
        "./VI/desktop/ru_ru.jpg": 11016,
        "./VI/desktop/zh_hans.jpg": 95732,
        "./VI/desktop/zh_tw.jpg": 65667,
        "./VI/mobile/de_de.jpg": 35996,
        "./VI/mobile/en_us.jpg": 27109,
        "./VI/mobile/es_es.jpg": 79258,
        "./VI/mobile/es_mx.jpg": 36725,
        "./VI/mobile/fr_fr.jpg": 83118,
        "./VI/mobile/it_it.jpg": 34416,
        "./VI/mobile/ja_jp.jpg": 84705,
        "./VI/mobile/ko_kr.jpg": 33055,
        "./VI/mobile/pl_pl.jpg": 37098,
        "./VI/mobile/pt_br.jpg": 84598,
        "./VI/mobile/ru_ru.jpg": 20340,
        "./VI/mobile/zh_hans.jpg": 16264,
        "./VI/mobile/zh_tw.jpg": 6927,
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

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 86751
    },
    39294(e, a, t) {
      var s = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 91509,
        "./VI/desktop/ru_ru.jpg": 11016,
        "./VI/desktop/zh_hans.jpg": 95732,
        "./VI/desktop/zh_tw.jpg": 65667,
        "./VI/mobile/de_de.jpg": 35996,
        "./VI/mobile/en_us.jpg": 27109,
        "./VI/mobile/es_es.jpg": 79258,
        "./VI/mobile/es_mx.jpg": 36725,
        "./VI/mobile/fr_fr.jpg": 83118,
        "./VI/mobile/it_it.jpg": 34416,
        "./VI/mobile/ja_jp.jpg": 84705,
        "./VI/mobile/ko_kr.jpg": 33055,
        "./VI/mobile/pl_pl.jpg": 37098,
        "./VI/mobile/pt_br.jpg": 84598,
        "./VI/mobile/ru_ru.jpg": 20340,
        "./VI/mobile/zh_hans.jpg": 16264,
        "./VI/mobile/zh_tw.jpg": 6927,
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

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 39294
    },
    51048(e, a, t) {
      var s = {
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 91509,
        "./VI/desktop/ru_ru.jpg": 11016,
        "./VI/desktop/zh_hans.jpg": 95732,
        "./VI/desktop/zh_tw.jpg": 65667
      };

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 51048
    },
    16044(e, a, t) {
      var s = {
        "./VI/mobile/de_de.jpg": 35996,
        "./VI/mobile/en_us.jpg": 27109,
        "./VI/mobile/es_es.jpg": 79258,
        "./VI/mobile/es_mx.jpg": 36725,
        "./VI/mobile/fr_fr.jpg": 83118,
        "./VI/mobile/it_it.jpg": 34416,
        "./VI/mobile/ja_jp.jpg": 84705,
        "./VI/mobile/ko_kr.jpg": 33055,
        "./VI/mobile/pl_pl.jpg": 37098,
        "./VI/mobile/pt_br.jpg": 84598,
        "./VI/mobile/ru_ru.jpg": 20340,
        "./VI/mobile/zh_hans.jpg": 16264,
        "./VI/mobile/zh_tw.jpg": 6927
      };

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 16044
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
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    20144(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5050d09bf65a09d316c5c4344c2c38fb.jpg"
    },
    40401(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5486652b229530cf4b752c25531e251f.jpg"
    },
    47534(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e66ce9502ddace9f8b0a8496f0cdcda.jpg"
    },
    38537(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e66ce9502ddace9f8b0a8496f0cdcda.jpg"
    },
    72994(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04fad38dffabad52092b45f9a3cee88b.jpg"
    },
    93668(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04fad38dffabad52092b45f9a3cee88b.jpg"
    },
    63365(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6205f3bd39adb33d23221501f6506dc5.jpg"
    },
    39003(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1293618750cb6ba3f62e73c5633032f8.jpg"
    },
    37758(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/42eaeed54ffe28ca0cf5ca0babdc19a4.jpg"
    },
    91509(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4eaaed791df32e91f97107b262830371.jpg"
    },
    11016(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/74576fdc36948700777d06f9b8db2eec.jpg"
    },
    95732(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6205f3bd39adb33d23221501f6506dc5.jpg"
    },
    65667(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3ce78f679abdee82651d753a47e38532.jpg"
    },
    35996(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44a3bdc0a87eb98dc369735737deaf33.jpg"
    },
    27109(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9184d16412d42140f30a1d0c16db22b1.jpg"
    },
    79258(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48f3ad2d0327e0b1b30934487535181.jpg"
    },
    36725(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48f3ad2d0327e0b1b30934487535181.jpg"
    },
    83118(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d748d12cf8cc854121e8be9860ed409.jpg"
    },
    34416(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d748d12cf8cc854121e8be9860ed409.jpg"
    },
    84705(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a9ff3cac0e6f01352186a60a37f17a8f.jpg"
    },
    33055(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4fb18f10480c1ce10ca7faaad9a2aea7.jpg"
    },
    37098(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/79aabd673e6726aec41e898bb1b4dca5.jpg"
    },
    84598(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d33532ed9c8c08388d6ab4a0613520aa.jpg"
    },
    20340(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/524705aa18bd4ecfe65a7604fe553bea.jpg"
    },
    16264(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a9ff3cac0e6f01352186a60a37f17a8f.jpg"
    },
    6927(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81f92d6438abb2b88c813d8eaeab8d3f.jpg"
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
    }
  }
]);