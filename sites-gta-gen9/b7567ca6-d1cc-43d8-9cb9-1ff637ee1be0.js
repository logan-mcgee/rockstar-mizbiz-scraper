try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b7567ca6-d1cc-43d8-9cb9-1ff637ee1be0", e._sentryDebugIdIdentifier = "sentry-dbid-b7567ca6-d1cc-43d8-9cb9-1ff637ee1be0")
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
  [4605, 5847, 6393, 9238], {
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
        l = t(1e4);
      const d = ({
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
        _ = {
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
        m = ({
          foreign_id: e,
          foreign_type: a
        }) => {
          const {
            track: t
          } = (0, o.useGtmTrack)(), {
            refetch: n
          } = (0, i.useQuery)(c.UserGetVote, {
            skip: !0
          }), [l] = (0, i.useMutation)(c.UserCastVote), [d, m] = (0, r.useState)(null), u = (0, r.useCallback)(s => {
            (async () => {
              if (s === d && null !== d) m(null);
              else {
                m(s), t({
                  event: "cta_" + (s ? "like" : "dislike"),
                  text: `${a} ${e}`
                });
                const r = {
                  foreignId: e,
                  foreignType: a,
                  vote: s
                };
                await l({
                  variables: r
                })
              }
            })()
          }, [e, a, d]);
          return (0, r.useEffect)(() => {
            e && a && (async () => {
              const t = await n({
                foreignId: e,
                foreignType: a
              });
              m(t?.data?.userGetVote?.vote ?? null)
            })()
          }, [e, a]), (0, s.jsxs)("div", {
            className: _.calloutVoteForm,
            children: [(0, s.jsx)("button", {
              "aria-label": "upvote",
              className: [_.upvote, _.voteButton, d ? _.active : ""].join(" "),
              name: "upvote",
              onClick: () => u(!0),
              type: "button"
            }), (0, s.jsx)("button", {
              "aria-label": "downvote",
              className: [_.downvote, _.voteButton, !1 === d ? _.active : ""].join(" "),
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
            track: r
          } = (0, o.useGtmTrack)();
          return (0, s.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, s.jsxs)("button", {
              className: _.calloutLink,
              type: "button",
              onClick: t ? () => r({
                ...t
              }) : () => {},
              children: [e, (0, s.jsx)(d, {
                className: _.calloutLinkIcon
              })]
            })
          })
        },
        g = ({
          helperText: e,
          linkText: a,
          link: t,
          trackingData: r
        }) => {
          const {
            track: n
          } = (0, o.useGtmTrack)();
          return (0, s.jsxs)("div", {
            className: _.actionFooter,
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
          link: d,
          foreign_id: b = document.location.pathname,
          foreign_type: p = "url",
          className: f = "",
          actionFooterHelperText: k,
          actionFooterLinkText: h,
          actionFooterLink: v,
          trackingData: y = {},
          actionFooterLinkTrackingData: j = {},
          t: x,
          ...w
        }) => {
          const {
            loggedIn: N
          } = (0, o.useRockstarUser)(), {
            track: S
          } = (0, o.useGtmTrack)(), C = document.location.pathname, {
            signInUrl: T
          } = (0, i.useScAuthLinks)(C), {
            ref: E,
            inView: I
          } = (0, n.useInView)({
            threshold: .6
          }), [z, A] = (0, r.useState)(!1);
          let M;
          if ((0, r.useEffect)(() => {
              I && !z && (S({
                event: "page_section_impression",
                element_placement: `callout section - ${w?.sectionName??w?._memoq?.header}`
              }), A(!0))
            }, [I]), !e && !a) return null;
          switch (t) {
            case "vote":
              if (!N) {
                M = (0, s.jsx)(l.A, {
                  to: T,
                  className: _.calloutButton,
                  onClick: y ? () => S({
                    ...y
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              M = (0, s.jsx)(m, {
                foreign_id: b,
                foreign_type: p
              });
              break;
            case "button":
              c && d && (M = (0, s.jsx)(l.A, {
                to: d,
                className: _.calloutButton,
                onClick: y ? () => S({
                  ...y
                }) : () => {},
                children: c
              }));
              break;
            case "link":
              c && d && (M = (0, s.jsx)(u, {
                action_text: c,
                link: d,
                trackingData: y
              }));
              break;
            default:
              M = null
          }
          return (0, s.jsx)("div", {
            className: `${_.calloutContainer} ${f||""}`,
            ref: E,
            children: (0, s.jsxs)("div", {
              className: _.calloutSection,
              children: [(0, s.jsxs)("div", {
                className: [_.calloutHeaders, M ? _.calloutHeaderMargins : ""].join(" "),
                children: [e && (0, s.jsx)("h2", {
                  className: _.calloutHeader,
                  children: x(e)
                }), a && (0, s.jsx)("h3", {
                  className: _.calloutSubheader,
                  children: x(a)
                })]
              }), (0, s.jsxs)("div", {
                className: _.actionBlock,
                children: [M, k && (0, s.jsx)(g, {
                  helperText: k,
                  linkText: h,
                  link: v,
                  trackingData: j
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
        l = t(74631);
      const d = {
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
      var _ = t(68291),
        m = t(44453);
      const u = ({
          item: e
        }) => (0, s.jsxs)("div", {
          children: [(0, s.jsx)(m.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, c.default)(d.img, e?.className)
          }), (e?.title || e?.description) && (0, s.jsx)(_.A, {
            item: e
          })]
        }),
        g = ({
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
          noInfiniteScroll: m = !1,
          className: b = "",
          renderTemplate: p = "standard",
          text: f,
          customSpaceBetween: k = null,
          centerSlides: h = !0,
          centeredSlidesBounds: v = !1
        }) => {
          const y = (0, l.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [j, x] = (0, r.useState)(0),
            [w, N] = (0, r.useState)(null),
            S = (0, r.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, o.A)()) : null, [e, y]),
            C = e => {
              if (!e) return;
              let a = 0;
              e.pagination.bullets.forEach((e, t) => {
                e.classList.contains("swiper-pagination-bullet-active") && (a = t)
              }), x(a)
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
          return (0, s.jsxs)("div", {
            className: (0, c.default)(d.deprecatedCarousel, d[p], d.infinite_true, e ? d.renderedWithChildren : "", b),
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
              breakpoints: T,
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
                className: d.trackWrapper,
                children: (0, s.jsxs)("div", {
                  className: d.track,
                  children: [a?.map(e => (0, s.jsx)(n.qr, {
                    tabIndex: 0,
                    children: (0, s.jsx)(u, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, a) => e && (0, s.jsx)(n.qr, {
                    children: e
                  }, S && S[a]))]
                })
              }), (0, s.jsx)(g, {
                current: j,
                total: e ? e.length : a.length
              })]
            }), (f?.title || f?.description) && (0, s.jsx)(_.A, {
              item: f
            })]
          })
        }
    },
    68291(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(39793),
        r = t(81270),
        n = t(95967),
        i = t(12334),
        o = t(5413);
      const c = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558",
        l = ({
          to: e,
          children: a
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        d = ({
          item: e,
          className: a = ""
        }) => (0, s.jsxs)("div", {
          className: (0, r.default)("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", a),
          children: [e.title && (0, s.jsx)(l, {
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
        r = t(90067);
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
        l = t(38044),
        d = t(59426);
      const _ = {
          rating: "rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-sites-gta-gen9babdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-sites-gta-gen9b98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-gta-gen9b6339480b5fd086fb0c025930bfb7dcd"
        },
        m = (0, n.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var u = t(70386),
        g = t(30433);
      (0, i.importAll)(t(36672));
      const b = (0, d.A)((0, g.g)(({
        descriptors: e = null,
        footer: a = null,
        href: d,
        img: g = null,
        titleSlug: b = null,
        style: p = {},
        className: f,
        ...k
      }) => {
        const [h, v] = (0, r.useState)(!1), {
          inView: y
        } = (0, o.useInView)({
          threshold: .6
        }), [j, x] = (0, r.useState)({
          ratingDescriptors: e,
          ratingFooter: a,
          ratingImg: g,
          ratingUrl: d
        }), {
          track: w
        } = (0, c.useGtmTrack)(), N = (0, n.useIntl)(), {
          data: S
        } = (0, i.useQuery)(u.GameData, {
          variables: {
            titleSlug: b
          },
          skip: !b
        });
        if ((0, r.useEffect)(() => {
            S && x(S?.game)
          }, [S]), (0, r.useEffect)(() => {
            y && !h && j.ratingImg && (w({
              event: "page_section_impression",
              element_placement: "rating"
            }), v(!0))
          }, [y]), !j.ratingImg) return null;
        const C = !!j.ratingDescriptors;
        return (0, s.jsxs)("div", {
          className: [_.rating, C ? _.withDescriptors : _.withOutDescriptors, f || ""].join(" "),
          style: (0, i.safeStyles)(p),
          "data-testid": "rating",
          ...k,
          children: [(0, s.jsx)(l.A, {
            to: j.ratingUrl,
            target: "_blank",
            children: (0, s.jsx)("img", {
              alt: N.formatMessage(m.components_ratings_link_alt, {
                rating: (T = j.ratingImg, T.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${j.ratingImg}`)
            })
          }), C && (0, s.jsxs)("div", {
            className: _.text,
            children: [(0, s.jsx)("p", {
              className: _.descriptors,
              dangerouslySetInnerHTML: {
                __html: j?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), j.ratingFooter && (0, s.jsx)("hr", {}), j.ratingFooter && (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: j.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var T
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
        RpCategory: () => l,
        rpCategoryTestIds: () => c
      });
      var s = t(39793),
        r = t(93082),
        n = t(52710);
      var i = t(81270);
      const o = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        c = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        l = (0, r.forwardRef)(function({
          rank: e,
          size: a = "large",
          className: t,
          alt: r,
          testId: l,
          ...d
        }, _) {
          const m = o(e),
            u = (0, n.mergeProps)(d, {
              className: (0, i.default)("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", t),
              "data-testid": l
            });
          return (0, s.jsxs)("div", {
            "data-size": a,
            ref: _,
            ...u,
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
                fill: m
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
          splitter: l
        }) => {
          const d = [];
          return l ? e.split(l).map(e => d.push(e)) : d.push(e), (0, s.jsxs)(o, {
            splitter: l,
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
              className: `${l||c?"":i.badge} ${a?i[a]:""}`,
              min: 8,
              max: 1e3,
              mode: l || c ? "single" : "multi",
              children: (0, s.jsx)(n.Text, {
                children: d[0]
              })
            }), (0, s.jsx)(s.Fragment, {
              children: d.shift() && l && d.length >= 1 && (0, s.jsx)(n.Root, {
                min: 8,
                max: 1e3,
                mode: "single",
                children: (0, s.jsx)(n.Text, {
                  children: d.join(" ")
                })
              })
            })]
          }, "badge-wrapper")
        }
    },
    44453(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(39793),
        r = t(93082),
        n = t(13331),
        i = t(81270),
        o = t(76862),
        c = t(95967);
      const l = ({
          hero: e,
          children: a
        }) => e ? (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
          children: a
        }) : a,
        d = ({
          badge: e = null,
          badgeType: a,
          discountTxt: t,
          splitter: d,
          image: _,
          style: m,
          className: u = "",
          attributes: g = {},
          role: b,
          hero: p = !1
        }) => {
          const f = (0, r.useMemo)(() => {
            if (_?.badge || _?.discountTxt || e || t) return (0, s.jsx)(o.A, {
              badge: _?.discountTxt ?? _?.badge ?? e ?? t,
              badgeType: a,
              splitter: _?.splitter ?? d,
              role: _?.role ?? b
            })
          }, [e, a, t, _, b, d]);
          return (0, s.jsx)(l, {
            hero: p,
            children: (0, s.jsx)("figure", {
              children: (0, s.jsxs)("div", {
                className: (0, i.default)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", p ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", g?.hiddenMobile ? "hiddenMobile" : "", g?.hiddenLarge ? "hiddenLarge" : "", g?.className, u),
                style: (0, n.safeStyles)({
                  ...m,
                  ...g?.style
                }),
                ...g,
                children: [(0, s.jsx)(c.A, {
                  role: _?.accessibleRole,
                  image: _,
                  className: u
                }), f, _?.caption && (0, s.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: _.caption
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
        RankContent: () => y,
        Root: () => b,
        RpCategory: () => j,
        TextContent: () => x,
        TopRow: () => k,
        UserName: () => v
      });
      var s = t(39793),
        r = t(93082),
        n = t(90067),
        i = t(52710),
        o = t(81270),
        c = t(63218),
        l = t(51550),
        d = t(30433),
        _ = t(42909);
      const m = (0, _.defineMessages)({
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
        u = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804",
        g = (0, r.forwardRef)(function({
          children: e,
          className: a,
          testId: t,
          ...r
        }, c) {
          const {
            formatMessage: l
          } = (0, _.useIntl)(), d = (0, i.mergeProps)(r, {
            "data-testid": t,
            className: (0, o.default)("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", a)
          });
          return (0, s.jsxs)("div", {
            ref: c,
            ...d,
            children: [(0, s.jsx)(n.s6, {
              children: l(m.character_card_a11y_intro)
            }), e]
          })
        }),
        b = (0, d.g)(g),
        p = (0, r.forwardRef)(function({
          src: e,
          alt: a,
          testId: n,
          ...o
        }, c) {
          const [l, d] = (0, r.useState)(e), _ = (0, i.mergeProps)(o, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": n
          });
          return e ? (0, s.jsx)("div", {
            ref: c,
            ..._,
            children: (0, s.jsx)("img", {
              className: u,
              src: l,
              alt: a ?? "",
              onError: () => d(t(14804)),
              "aria-hidden": !a
            })
          }) : (0, s.jsx)("div", {
            ref: c,
            ..._,
            children: (0, s.jsx)("img", {
              className: u,
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
          const l = e ? n.DX : "div",
            d = (0, i.mergeProps)(r, {
              className: (0, o.default)("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", t),
              "data-testid": a
            });
          return (0, s.jsx)(l, {
            ref: c,
            ...d
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
          } = (0, _.useIntl)(), l = (0, i.mergeProps)(r, {
            "data-testid": a
          });
          return (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...l,
            ref: o,
            children: [(0, s.jsx)(n.s6, {
              children: c(m.character_card_a11y_player, {
                player: t
              })
            }), (0, s.jsx)("div", {
              "aria-hidden": !0,
              children: e
            })]
          })
        }),
        y = (0, r.forwardRef)(function({
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
        j = ({
          testId: e,
          ...a
        }) => {
          const {
            formatMessage: t
          } = (0, _.useIntl)(), r = (0, i.mergeProps)(a, {
            "data-testid": e
          });
          return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(n.s6, {
              children: t(m.character_card_a11y_rank, {
                rank: a.rank
              })
            }), (0, s.jsx)(l.RpCategory, {
              ...r,
              "aria-hidden": !0
            })]
          })
        },
        x = (0, r.forwardRef)(function({
          asChild: e,
          children: a,
          testId: t,
          ...r
        }, o) {
          const c = e ? n.DX : "div",
            l = (0, i.mergeProps)(r, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": t
            });
          return (0, s.jsx)(c, {
            ref: o,
            ...l,
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
          target: l = "_self",
          ...d
        }) => {
          const _ = (0, r.default)(i.button, i[t], e);
          return o ? (0, s.jsx)(n.A, {
            ...d,
            to: o,
            className: _,
            onClick: c,
            target: l,
            children: a
          }) : (0, s.jsx)("button", {
            ...d,
            type: "button",
            className: _,
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
      var s = t(76589),
        r = t(25847);
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
        A: () => _
      });
      var s = t(39793),
        r = t(93082),
        n = t(50062),
        i = t.n(n),
        o = t(13331),
        c = t(81270);
      const l = {
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
          sanitize: d
        } = i(),
        _ = ({
          list: e,
          string: a,
          starColor: t,
          style: n,
          className: i,
          game: _,
          noImg: m,
          columns: u,
          mobileColumns: g
        }) => {
          const [b, p] = (0, r.useState)(null);
          if ((0, r.useEffect)(() => {
              p(e)
            }, [e]), !a && !e) return null;
          const f = {
            color: n?.color
          };
          return delete n?.color, u && b ? (0, s.jsx)("div", {
            className: l.grid,
            style: {
              "--ordered-list-grid-column": u,
              "--ordered-list-grid-column-mobile": g ?? u
            },
            children: (0, s.jsx)("ol", {
              className: (0, c.default)(l.itemList, l.noImg, l[t], l[_]),
              style: (0, o.safeStyles)(n),
              children: b.map(e => (0, s.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: d(e.content)
                },
                style: f
              }, e.content))
            })
          }) : (0, s.jsx)("ol", {
            style: (0, o.safeStyles)(n),
            className: (0, c.default)(l.itemList, l.custom, m ? l.noImg : "", t ? l[t] : "", _ ? l[_] : "", i ?? ""),
            children: e.map(e => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e?.content ?? e)
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
        A: () => l
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
      const l = (e, a = null) => {
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
        A: () => l
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
        l = ({
          error: e,
          domain: a = ""
        }) => {
          console.error({
            error: e
          });
          const {
            formatMessage: t
          } = (0, n.useIntl)();
          let l = e?.message ?? t(c.wasted_error_404_new);
          l = t(c.wasted_error_404_new);
          const d = e?.code ?? 398,
            _ = (0, r.useRef)(null);
          return (0, r.useEffect)(() => {
            _ && _?.current && _.current.focus()
          }, [_]), (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9d0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, s.jsx)("h3", {
              tabIndex: -1,
              ref: _,
              children: `${l} (${d})`
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
          const [c, l] = (0, n.usePreloadImg)(r);
          let d = r;
          !1 === c && (d = t(9333));
          const {
            width: _,
            height: m
          } = l, u = {
            "--aspect-ratio": Number.isNaN(_ / m) ? "" : _ / m,
            ...o
          };
          return (0, s.jsx)("img", {
            src: d,
            className: a ?? "",
            alt: e,
            style: u,
            role: i
          })
        },
        o = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f",
        c = ({
          className: e,
          style: a = {},
          image: c = {},
          imageStyle: l = {},
          role: d = "img"
        }) => {
          let {
            alt: _,
            src: m
          } = (0, r.S1)(c);
          const {
            isMobile: u
          } = (0, n.useWindowResize)(), g = u ? m.imageMobileStyle : m.imageDesktopStyle;
          m.desktop || m.mobile || (_ = "", m = {
            mobile: t(28839),
            desktop: t(9333)
          });
          let b = c.frame ? `${c.frame} ${o}` : o;
          return (0, s.jsx)("div", {
            className: b,
            style: a,
            children: (0, s.jsx)(i, {
              style: {
                ...l,
                ...c?.style,
                ...g
              },
              src: u ? m.mobile || m.desktop : m?.desktop || m?.mobile,
              alt: _,
              role: d,
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
        l = t(13517),
        d = t(82199),
        _ = t(81270);
      const m = ({
          modal: e
        }) => {
          const {
            content: a,
            className: t,
            height: n,
            onClose: o,
            rect: m = {
              left: 0,
              top: 0
            },
            contentStyle: u = {},
            contentClassName: g = "",
            width: b,
            fadeIn: p = !0,
            cardIds: f,
            activeId: k,
            theme: h,
            title: v,
            gtm: y = {},
            aspectRatio: j = "default",
            cardDimensions: x
          } = e, {
            left: w,
            top: N
          } = m, S = f?.indexOf(k), [C, T] = (0, r.useState)(f?.length || 0), {
            track: E
          } = (0, d.useGtmTrack)(), I = null !== f && (f?.length || 0) > 1 && ("flag_bg" === h || "fob" === x?.size), z = window.location.href.includes("cms5"), [A, M] = (0, i.useSearchParams)(), [P, L] = (0, r.useState)(!1), [R, D] = (0, r.useState)(!1), [O, B] = (0, r.useState)(), G = e => {
            "number" == typeof e && f && e < f.length && e > -1 && M({
              info: f[e].toString()
            })
          }, $ = () => {
            const e = "number" == typeof S && S > -1 ? S - 1 : 0;
            G(e), E({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: v?.toLowerCase(),
              position: S
            })
          }, V = () => {
            const e = "number" == typeof S && S > -1 ? S + 1 : 0;
            G(e), E({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: v?.toLowerCase(),
              position: S
            })
          };
          (0, r.useEffect)(() => {
            T(f?.length || 0)
          }, [f?.length]), (0, r.useEffect)(() => {
            null !== S && null !== f && G(S)
          }, [S, f]), (0, r.useEffect)(() => {
            const e = f?.findIndex(e => e === k);
            "number" == typeof e && (D(e <= 0), L(e >= C - 1))
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
            marginTop: I ? "0" : ""
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
            marginTop: I ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
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
              "function" == typeof o && "Escape" === e.key && (o(), E({
                event: "modal_close",
                element_placement: v?.toLowerCase(),
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }, []);
          const Z = () => {
              "function" == typeof o && (o(), E({
                event: "modal_close",
                element_placement: v?.toLowerCase(),
                ...y
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
                      return O?.queried ? a = O.element : (a = J(e, 2), B({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = p ? 0 : 1,
            ae = (0, r.useRef)(null),
            te = (0, s.jsx)(l.motion.button, {
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
            "data-show-nav": I,
            "data-aspect-ratio": j,
            children: (0, s.jsx)(re, {
              children: (0, s.jsxs)("div", {
                id: "modal",
                "data-testid": "modal",
                "aria-modal": "true",
                "aria-label": se ? v : void 0,
                role: "dialog",
                children: [(0, s.jsx)(l.motion.div, {
                  className: "rockstargames-sites-gta-gen9cf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: H,
                  transition: q,
                  onClick: () => Z()
                }), I && (0, s.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9d5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, s.jsxs)(l.motion.div, {
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
                      onClick: V,
                      disabled: P,
                      onKeyDown: Q,
                      onKeyUp: Q,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, s.jsx)(l.motion.div, {
                  className: "rockstargames-sites-gta-gen9e708da42918d8bbff9a8e1a36a2c4366",
                  ref: U,
                  initial: "initial",
                  animate: "shown",
                  variants: Y,
                  transition: q,
                  style: u,
                  children: (0, s.jsxs)(l.motion.div, {
                    className: (0, _.default)("rockstargames-sites-gta-gen9a7d77f83f629e9ae93f6934c8ba007b0", t),
                    children: [!I && te, (0, s.jsx)(l.motion.div, {
                      className: (0, _.default)("rockstargames-sites-gta-gen9f26fc1babb8dd1284d4c03b3dabff714", g),
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
          }), [a, S, u])
        },
        u = [{}, () => {}],
        g = (0, n.setContextItem)({
          context: (0, r.createContext)(u),
          key: "modalContext"
        }),
        b = () => (0, r.useContext)(g),
        p = ({
          children: e
        }) => {
          const [a, t] = (0, r.useState)(), {
            setBodyIsLocked: i
          } = (0, n.useBodyScrollable)("ModalProvider"), o = (0, r.useMemo)(() => a?.content ? (0, s.jsx)(m, {
            modal: a
          }) : null, [a]), c = () => i(!1);
          return (0, r.useEffect)(() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          }), []), (0, r.useEffect)(() => {
            i(!!o)
          }, [o]), (0, s.jsx)(g.Provider, {
            value: [o, t],
            children: e
          })
        }
    },
    47279(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i,
        C: () => r
      });
      var s = t(40283);
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        n = [{
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
        i = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), r = n.findIndex(a => Object.entries(a.sites).findIndex(([a, s]) => s === t && (e = {
            site: a,
            subDomain: s
          }, !0)) >= 0), i = n[r >= 0 ? r : 0], o = n.find(e => e.id === i.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, s.omit)((0, s.merge)({}, o, {
            currentSite: e
          }, i), "fallbackEnvironment")
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
        } = (0, r.A)(), c = await t(), l = new URL(`tpa/${e}/link`, `https://${i}.rockstargames.com`);
        return l.searchParams.append("cid", o), l.searchParams.append("lang", n), l.searchParams.append("returnUrl", a ?? window.location.pathname), c && "boolean" != typeof c && "string" == typeof c.bearerToken && l.searchParams.append("accessToken", c.bearerToken), l
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
          hostname: l,
          cdnBase: d,
          key: _,
          marketingAuthTLD: m
        }) => {
          const u = s?.apiHost ?? e,
            g = s?.authHost ?? a,
            b = s?.cdnBase ?? d,
            p = s?.clientId ?? t,
            f = r?.marketingAuthTLD ?? m,
            k = s?.scHost ?? c,
            h = r?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${u}.rockstargames.com`,
            graphEnv: s?.graphEnv ?? i,
            host: k,
            hostname: l,
            cdnBase: b,
            key: _,
            clientId: p,
            cms: `https://${n}.rockstargames.com/graphql`,
            authHost: g,
            queryManifest: o,
            scBase: `https://${k}.rockstargames.com/`,
            login: `https://${g}.rockstargames.com/connect/authorize/${p}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${p}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${p}`,
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
    25847(e, a, t) {
      "use strict";
      t.d(a, {
        OD: () => i,
        lv: () => o,
        wC: () => r,
        PE: () => v,
        rB: () => l,
        tC: () => b.t,
        yh: () => h,
        Ap: () => m,
        Xs: () => y,
        kx: () => j,
        rJ: () => w,
        pT: () => p,
        lV: () => x,
        PA: () => s,
        My: () => u,
        _e: () => f
      }), t(39793), t(40283);
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

      function l(e) {
        if (!e) return;
        if (e instanceof i) return e;
        const a = e.toString().toLowerCase();
        return c.find(e => a === e.name || a === e.id.toString() || a === e.friendlyName.toLowerCase() || a === e.onlineService?.toLowerCase() || a === e.aliasOnlineService?.toLowerCase() || a === e.alias?.toLowerCase())
      }
      var d = t(23058),
        _ = t(77678);
      const m = e => {
          const a = document.cookie.split("; "),
            t = `${e}=`,
            s = a.find(e => e.startsWith(t)),
            r = s?.substring(t.length, s.length);
          return r
        },
        u = (e, a) => {
          e && void 0 !== a && (0, d.canStoreCookie)(e) && m(e) !== a && (document.cookie = `${e}=${a}; domain=${(0,_.F)()}; path=/;`)
        };
      var g = t(87605);
      Object.values(g.d), g.d.BL;
      var b = t(32118);
      const p = e => e.keys().forEach(e),
        f = e => e.replace(/(<([^>]+)>)/gi, ""),
        k = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        h = (e = !0) => k.filter(a => a.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        v = e => {
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
        y = () => [o.xbox360.name, o.xboxone.name, o.ps3.name, o.ps4.name, o.pc.name],
        j = () => [o.xboxsx.name, o.ps5.name, o.pcalt.name],
        x = e => j().includes(e),
        w = e => {
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
    87605(e, a, t) {
      "use strict";
      t.d(a, {
        d: () => s
      });
      const s = {
        BL: "bl"
      }
    },
    83559(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        componentsForTinaParser: () => zn,
        componentsForTinaParserGuide: () => An
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => os,
        Link: () => cs
      });
      var r = {};
      t.r(r), t.d(r, {
        A: () => pa.A,
        AlertDialog: () => J,
        AudioPlayer: () => Xa,
        Badge: () => Ae,
        Brands: () => O.A,
        Button: () => Ba.A,
        ButtonGroup: () => B.A,
        CalloutSection: () => l.A,
        Carousel: () => d.A,
        CharacterCard: () => Za,
        ConditionalBlock: () => h,
        CookieAB: () => st,
        CountryInputField: () => at,
        Cta: () => v.A,
        DescriptionArea: () => it.A,
        DiscountsBadge: () => ot.A,
        DotLoader: () => lt,
        Dropdown: () => ut,
        Embed: () => bt,
        ExpandingPlatformButton: () => S.A,
        FadeInContent: () => ft,
        FoundryButton: () => w,
        FoundryIconButton: () => N,
        Gen9Button: () => he.A,
        Gen9CoreCarousel: () => P.A,
        Grid: () => E,
        HTMLElement: () => H,
        Hero: () => V,
        HookStore: () => p,
        ImageTextGroup: () => rt.A,
        ImageTextGroupGroup: () => nt.A,
        ImageWithBadge: () => ke.A,
        LayeredImage: () => vt,
        Lightbox: () => yt,
        LoadingAnimation: () => Y.A,
        MultiSourceImage: () => Na.A,
        NewswireBlocks: () => Lt,
        NewswireCard: () => Tt,
        NewswireList: () => zt,
        NewswireRelated: () => Mt,
        NewswireTag: () => St,
        OrderedList: () => le.A,
        Paging: () => Ot,
        ParallaxCacheBuster: () => ge,
        ParallaxInnerLayer: () => _e,
        ParallaxOuterLayer: () => ue,
        ParallaxWrapper: () => pe,
        PlatformTag: () => ws.Ay,
        PromoModule: () => je,
        Rating: () => xe.A,
        ResponsiveFlexBox: () => Gt,
        ResponsiveFlexItem: () => Vt,
        ResponsiveGridBox: () => Ht,
        ResponsiveGridItem: () => qt,
        ResponsiveImg: () => Kt,
        ResponsiveSection: () => Xt,
        RockstarLogo: () => K.A,
        RpCategory: () => xs,
        SafeHtml: () => Jt,
        ScrollSection: () => Qt.A,
        ScrollToTop: () => es,
        ScrollTracker: () => ze,
        SearchBox: () => as.A,
        Separator: () => ts.A,
        SrcsetImage: () => xt,
        StorybookWrapper: () => ss,
        TextFit: () => rs,
        ThumbsGallery: () => Ma,
        TinaModuleFetchNRender: () => Ce.A,
        TinaWrapper: () => ns,
        TrackList: () => wa,
        UnorderedList: () => fe.A,
        UserVote: () => Se,
        VideoCard: () => s,
        VideoCarousel: () => _s,
        VideoList: () => ks,
        VisuallyHidden: () => hs,
        Wasted: () => vs.A,
        framer: () => Te,
        useTinaModuleFetchByIds: () => Ce.X,
        withSearchbarErrorBoundary: () => ys.A,
        withSimpleErrorBoundary: () => js.A
      });
      var n = {};
      t.r(n), t.d(n, {
        applestore: () => kr,
        googleplay: () => hr,
        left: () => vr,
        pc: () => yr,
        pcalt: () => jr,
        ps: () => xr,
        ps3: () => wr,
        ps4: () => Nr,
        ps5: () => Sr,
        right: () => Cr,
        switch: () => Tr,
        x: () => Er,
        xbox: () => Ir,
        xboxone: () => zr,
        xboxseriesxs: () => Ar
      });
      var i = {};
      t.r(i), t.d(i, {
        Actions: () => Wr,
        Badge: () => qr,
        Button: () => Zr,
        Container: () => $r,
        Content: () => Hr,
        Description: () => Yr,
        Disclaimer: () => Xr,
        Footer: () => Fr,
        Header: () => Vr,
        Heading: () => Kr,
        Image: () => Ur,
        LinkPSButton: () => en,
        LinkXBoxButton: () => Qr,
        Loading: () => an,
        PlatformButton: () => Jr,
        Root: () => Gr,
        RootContext: () => Br
      });
      var o = t(31879),
        c = t.n(o),
        l = t(30489),
        d = t(75138),
        _ = t(39793),
        m = t(93082),
        u = t(36416),
        g = t(13331),
        b = t(82199);
      const p = (0, t(54472).FF)(),
        f = e => e.some(e => !e),
        k = ({
          condition: e = null,
          children: a
        }) => {
          const [t, s] = (0, m.useState)(!1), r = (e => {
            const [a] = (0, u.useSearchParams)(), [t, s] = (0, m.useState)(null), r = (0, b.useRockstarUser)(), {
              loggedIn: n,
              data: i
            } = r, {
              hasGtaPlus: o
            } = i ?? {};
            return (0, m.useEffect)(() => {
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
          return (0, m.useEffect)(() => {
            s(r)
          }, [r]), (0, m.useMemo)(() => t ? a : null, [t])
        },
        h = (0, g.withTranslations)(({
          children: e
        }) => m.Children.map(m.Children.toArray(e), e => (0, _.jsx)(k, {
          ...e?.props
        })));
      var v = t(72538),
        y = t(52710),
        j = t(74645),
        x = t(91318);
      const w = (0, m.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          label: t,
          href: s,
          target: r,
          justifySelf: n = "center",
          ...i
        }, o) {
          const c = (0, x.m)(a, "normal"),
            l = (0, y.mergeProps)({
              "data-testid": e,
              className: c
            }, i);
          return (0, _.jsx)(j.Button, {
            ref: o,
            ...l,
            asChild: !0,
            children: (0, _.jsx)(u.Link, {
              to: s,
              target: r,
              style: {
                justifySelf: n
              },
              children: t
            })
          })
        }),
        N = (0, m.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          href: t,
          target: s,
          justifySelf: r = "center",
          ...n
        }, i) {
          const o = (0, x.m)(a, "normal"),
            c = (0, y.mergeProps)({
              "data-testid": e,
              className: o
            }, n);
          return (0, _.jsx)(j.IconButton, {
            ref: i,
            ...c,
            asChild: !0,
            children: (0, _.jsx)(u.Link, {
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
        T = t(81270);
      const E = ({
        children: e,
        context: a = null,
        game: t,
        image: s = {},
        style: r = {},
        template: n = null,
        theme: i = null,
        reversedOnMobile: o = !1,
        className: c = "",
        id: l = null
      }) => {
        const d = (0, C.S1)(s ?? {}),
          m = {
            ...r
          };
        if (d?.src?.desktop) {
          const e = (s?.style && s?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (s?.style && s?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (m.background = `url(${d?.src?.desktop}) ${a} ${t}`, s?.style && s?.style["--linear-gradient"]) m.background = `linear-gradient(${s?.style["--linear-gradient"]}), url(${d?.src?.desktop}) ${a} ${t}`;
          else if (s?.style && s?.style["--gradient-height"]) {
            const e = s?.style["--gradient-height"] || "3",
              r = s?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              n = s?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            m.background = `linear-gradient(180deg, ${r}, transparent ${e}%, transparent ${100-e}%, ${n}), url(${d?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, _.jsx)("div", {
          id: l,
          className: (0, T.default)("rockstargames-sites-gta-gen9da87ead760b989fbe90a0b89c60b0653", o ? "rockstargames-sites-gta-gen9dfbda195073626bc6a7690dc73fba873" : "", c),
          "data-game": "community" === n ? null : t,
          style: (0, g.safeStyles)(m),
          "data-context": a,
          "data-template": n,
          "data-theme": i,
          children: e
        })
      };
      var I = t(13517),
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
        M = {
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
      var P = t(29663);
      const L = {
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
          return (0, _.jsx)("div", {
            className: L.shard,
            style: {
              "--background-image-mobile": `url(${s})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, _.jsx)("h5", {
              children: e
            })
          })
        },
        D = ({
          title: e = "Membership Rewards",
          name: a = "Membership Rewards",
          shards: t
        }) => {
          const [s, r] = (0, m.useState)(null);
          return (0, m.useEffect)(() => {
            t && r(t.reduce((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: r,
                desktop: n
              } = s;
              return e.push((0, _.jsx)(R, {
                title: t,
                mobileImg: r?.full_src,
                desktopImg: n?.full_src
              })), e
            }, []))
          }, [t]), s ? (0, _.jsx)("div", {
            className: L.shardsCarousel,
            children: (0, _.jsx)(P.A, {
              title: e,
              name: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        };
      var O = t(34242),
        B = t(39707);
      const G = ({
          animated: e = !1,
          ctas: a = [],
          expandingButtonLabel: t = "Subscribe"
        }) => {
          const [s, r] = (0, m.useState)([]), [n, i] = (0, m.useState)([]);
          return (0, m.useEffect)(() => {
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
          }, [a]), s.length ? (0, _.jsx)(I.motion.div, {
            variants: e ? M : void 0,
            children: (0, _.jsx)(S.A, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: s,
              children: !!n.length && (0, _.jsx)(I.motion.div, {
                variants: M,
                children: (0, _.jsx)(B.A, {
                  buttons: n,
                  className: L.buttonGroup
                })
              })
            })
          }) : (0, _.jsx)(_.Fragment, {
            children: !!n.length && (0, _.jsx)(I.motion.div, {
              variants: M,
              children: (0, _.jsx)(B.A, {
                buttons: n,
                className: L.buttonGroup
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
        }) => (0, _.jsxs)(I.motion.div, {
          className: L.content,
          initial: "hidden",
          animate: "visible",
          variants: e ? A : void 0,
          children: [(0, _.jsx)(I.motion.div, {
            variants: e ? M : void 0,
            children: (0, _.jsx)(O.A, {
              brands: a
            })
          }), (c || r) && (0, _.jsxs)(I.motion.div, {
            className: L.descriptions,
            variants: e ? M : void 0,
            children: [c && (0, _.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: c
              }
            }), r && (0, _.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: r
              }
            })]
          }), !!t.length && (0, _.jsx)("div", {
            className: o ? L.verticalCtaBlock : L.ctaBlock,
            children: (0, _.jsx)(z.TinaParser, {
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
          }), !!s.length && (0, _.jsx)("div", {
            className: L.ctaBlock,
            children: (0, _.jsx)(G, {
              animated: e,
              ctas: s,
              expandingButtonLabel: n
            })
          }), i && (0, _.jsx)(I.motion.div, {
            className: L.legalText,
            variants: e ? M : void 0,
            children: (0, _.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: i
              }
            })
          })]
        }),
        V = ({
          animated: e = !1,
          backgroundImage: a,
          brands: t = [],
          className: s,
          ctas: r = [],
          cta: n,
          description: i = "",
          expandingButtonLabel: o = "Subscribe",
          layeredImage: c,
          layeredImageSettings: l,
          legalText: d,
          shardsSection: u,
          stackButtons: b = !1,
          theme: p = "gen9",
          title: f = ""
        }) => {
          const {
            breakpoints: k,
            windowWidth: h
          } = (0, g.useWindowResize)(), v = k.xxl.min, y = (e => {
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
          })(l), j = (0, z.useGetCdnSource)(a?.mobile?.full_src ?? null), x = (0, z.useGetCdnSource)(a?.desktop?.full_src ?? j), w = (0, z.useGetCdnSource)(c?.mobile?.full_src ?? null), N = (0, z.useGetCdnSource)(c?.desktop?.full_src ?? w), S = (0, m.useMemo)(() => {
            const {
              mobileStyle: e,
              desktopStyle: t,
              style: s
            } = a ?? {};
            return {
              ...s,
              ...h >= v ? (0, g.safeStyles)(t) : (0, g.safeStyles)(e)
            }
          }, [h, a?.style, a?.mobileStyle, a?.desktopStyle]);
          return (0, _.jsxs)(I.motion.div, {
            className: (0, T.default)(L.hero, s),
            style: {
              "--background-image-desktop": `url(${x})`,
              "--background-image-mobile": `url(${j})`,
              "--layered-image-desktop": `url(${N})`,
              "--layered-image-mobile": `url(${w})`
            },
            initial: "hidden",
            animate: "visible",
            variants: e ? A : void 0,
            "data-type": "hero",
            theme: p,
            children: [(0, _.jsxs)("div", {
              className: L.images,
              children: [x && j ? (0, _.jsx)("div", {
                className: L.background,
                style: S ?? {}
              }) : "", w && N ? (0, _.jsx)("div", {
                className: L.layered,
                style: l ? y : {}
              }) : "", (0, _.jsx)("div", {
                className: L.gradient
              })]
            }), (0, _.jsx)($, {
              animated: e,
              brands: t,
              cta: n,
              ctas: r,
              description: i,
              expandingButtonLabel: o,
              legalText: d,
              stackButtons: b,
              title: f
            }), u?.shards && (0, _.jsx)(D, {
              shards: u.shards
            })]
          })
        };
      var F = t(40283);
      const H = ({
        attributes: e = {},
        children: a,
        className: t = "",
        id: s = "",
        style: r = {}
      }) => {
        const {
          hash: n
        } = (0, u.useLocation)();
        return (0, m.useLayoutEffect)(() => {
          const e = document.getElementById(s);
          e && n.includes(s) && e.scrollIntoView({
            behavior: "instant",
            block: "start"
          })
        }, []), (0, _.jsx)("span", {
          className: (0, T.default)(t, e?.className, "rockstargames-sites-gta-gen9c650a7a1e761d6a9f2d6ce1cd8d6f330"),
          id: s,
          style: (0, g.safeStyles)(r ?? e?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: (0, F.unescape)(a)
          }
        })
      };
      var U = t(42909),
        q = t(47279),
        W = t(42285),
        K = t(26806),
        Y = t(72132);
      const X = ({
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
            onClick: l,
            testId: d
          } = e;
          return o ? r && (0, _.jsx)(j.Button, {
            asChild: !0,
            appearance: t,
            size: "LG",
            children: (0, _.jsx)("a", {
              href: c,
              ...d && {
                "data-testid": d
              },
              children: r
            })
          }) : (0, _.jsx)(j.Button, {
            autoFocus: !0,
            iconRight: s,
            className: (0, T.default)(n),
            isDisabled: i,
            onPress: e => (e => {
              l && l(), a && a(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: t,
            size: "LG",
            "aria-label": r,
            ...d && {
              "data-testid": d
            },
            children: r
          })
        },
        Z = {
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
        J = ({
          icon: e,
          title: a,
          secondaryText: t,
          buttons: s,
          showDialog: r,
          onClose: n = () => {},
          closeOnOutsideClick: i = !0,
          extraClasses: o
        }) => {
          const c = (0, m.useRef)(null),
            {
              setBodyIsLocked: l
            } = (0, g.useBodyScrollable)("AlertDialog");
          (0, m.useEffect)(() => {
            r && c?.current && (c.current?.showModal?.(), l(!0))
          }, [r]);
          const d = () => {
            l(!1), n(), c.current?.close?.()
          };
          if (r) return (0, _.jsxs)("dialog", {
            ref: c,
            className: Z.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && i && (l(!1), n(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, _.jsx)("i", {
              className: [Z.icon, Z[e]].join(" ")
            }), (0, _.jsxs)("div", {
              className: [Z.content, o?.content].join(" "),
              children: [(0, _.jsx)("h3", {
                className: [Z.heading, o?.heading].join(" "),
                children: a
              }), t && (0, _.jsx)("div", {
                className: [Z.message, o?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), s && (0, _.jsx)("div", {
              className: Z.actions,
              children: s.slice(0, 2).map((e, a) => (0, _.jsx)(X, {
                style: e?.style ?? (0 === a ? "primary" : "secondary"),
                button: e,
                closeDialog: d
              }, e.buttonText))
            })]
          })
        },
        Q = (0, U.defineMessages)({
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
        ee = {
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
        ae = ({
          loading: e,
          loggedIn: a,
          urls: t,
          handleSubscribeButton: s,
          isButtonLoading: r,
          showDialog: n,
          setShowDialog: i,
          dialog: o,
          isSubscribed: c,
          variant: l
        }) => {
          const [d, g] = (0, m.useState)(!1), p = (0, U.useIntl)(), {
            track: f
          } = (0, b.useGtmTrack)(), {
            ref: k,
            inView: h
          } = (0, W.useInView)({
            threshold: .6
          }), v = o?.buttons || [{
            buttonText: p.formatMessage(Q.ns_ok_button_text),
            onClick: () => {
              i(!1)
            },
            testId: "ok-btn",
            style: "secondary"
          }, {
            buttonText: o?.showManagePreferences ? p.formatMessage(Q.ns_manage_prefs_button_text) : "",
            isLink: !0,
            link: t.preferences,
            testId: "preferences-btn",
            style: "ghost"
          }];
          return (0, m.useEffect)(() => {
            h && !d && (f({
              event: "page_section_impression",
              section_layout: a ? "signed in" : "signed out",
              element_placement: "newsletter subscribe"
            }), g(!0))
          }, [h]), (0, _.jsxs)(_.Fragment, {
            children: [!c && (0, _.jsx)("div", {
              className: (0, T.default)(ee.newsletterSubscription),
              "data-testid": "news-sub-banner",
              ref: k,
              children: (0, _.jsx)("section", {
                className: ee.banner,
                children: (0, _.jsx)("div", {
                  className: ee.inner,
                  children: e ? (0, _.jsx)(Y.A, {}) : (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(K.A, {
                      disableLink: !0,
                      className: ee.fadeIn
                    }), (0, _.jsxs)("div", {
                      className: ee.body,
                      children: [(0, _.jsx)(j.Heading, {
                        level: 5,
                        className: [ee.heading, ee.fadeIn].join(" "),
                        children: "twitchdrops" === l ? (0, _.jsx)(U.FormattedMessage, {
                          ...Q.ns_cta_title_twitchdrops
                        }) : (0, _.jsx)(U.FormattedMessage, {
                          ...Q.ns_cta_title
                        })
                      }), (0, _.jsx)(j.Body, {
                        className: [ee.copy, ee.fadeIn].join(" "),
                        children: (0, _.jsx)(U.FormattedMessage, {
                          ...Q.ns_cta_text
                        })
                      })]
                    }), a ? (0, _.jsxs)(j.Button, {
                      size: "LG",
                      appearance: "secondary",
                      onPress: s,
                      isDisabled: r,
                      "data-testid": "sub-btn",
                      children: [(0, _.jsx)(U.FormattedMessage, {
                        ...Q.ns_cta_button_text
                      }), r && (0, _.jsx)("div", {
                        className: ee.buttonLoader,
                        children: (0, _.jsx)(Y.A, {})
                      })]
                    }) : t?.auth && (0, _.jsx)(j.Button, {
                      size: "LG",
                      appearance: "secondary",
                      onPress: s,
                      isDisabled: r,
                      "data-testid": "sub-btn",
                      asChild: !0,
                      children: (0, _.jsx)(u.Link, {
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
                        children: (0, _.jsx)(U.FormattedMessage, {
                          ...Q.ns_cta_button_text
                        })
                      })
                    })]
                  })
                })
              })
            }), o && (0, _.jsx)(J, {
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
        te = {
          SUCCESS: {
            icon: "check",
            heading: Q.ns_successfully_subscribed_title,
            bodyText: Q.ns_successfully_subscribed_details_amp,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: Q.ns_check_email_title,
            bodyText: Q.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: Q.ns_error_preferences_title,
            bodyText: Q.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: Q.ns_error_generic_title,
            bodyText: Q.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: Q.ns_already_subbed_title,
            bodyText: Q.ns_already_subbed_details_amp,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: Q.ns_confirm_after_register_title,
            bodyText: Q.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: Q.ns_confirm_title,
            bodyText: Q.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        se = {
          0: te.ERROR_PREFERENCES,
          1: te.SUCCESS,
          2: te.ERROR_PREFERENCES,
          3: te.ERROR_PREFERENCES,
          4: te.ERROR_GENERIC
        },
        re = (0, g.setMakeVarItem)({
          key: "subscriptionStatusReactive",
          value: (0, g.makeVar)(void 0)
        }),
        ne = e => re(e),
        ie = (e, a) => {
          const [t, s] = (0, m.useState)(), [r, n] = (0, m.useState)(!1), [i, o] = (0, m.useState)(!1), [c, l] = (0, m.useState)(!1), [d, _] = (0, m.useState)(!1), u = (0, g.useReactiveVar)(re), p = (0, U.useIntl)(), {
            track: f
          } = (0, b.useGtmTrack)(), k = {
            preferences: `https://${e.www}.rockstargames.com/account/communications`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          }, h = e => {
            s(e), o(!0), l(!1)
          }, v = {
            ...te.NEW_ACCOUNT,
            closeOnOutsideClick: !1,
            buttons: [{
              buttonText: p.formatMessage(Q.ns_yes_subscribe_text),
              style: "monochrome",
              onClick: () => {
                y()
              }
            }, {
              buttonText: p.formatMessage(Q.ns_go_back_text),
              onClick: () => {
                s(null), o(!1)
              }
            }]
          }, y = async () => (f({
            event: "cta_subscribe_news",
            section_layout: a.loggedIn ? "signed in" : "signed out",
            element_placement: "newsletter subscribe",
            text: "subscribe now"
          }), a.loggedIn || window.location.assign(k.auth), a.loggedIn && a.isAMinor ? (h(te.ERROR_GENERIC), _(!1), void f({
            event: "alert_error",
            text: "error message with no preferences link",
            element_placement: "newsletter subscribe"
          })) : a.loggedIn && !u || a.loggedIn && 3 == u ? void await j() : a.loggedIn && u ? (f({
            event: "alert_update",
            text: "alert - user already subscribed",
            element_placement: "newsletter subscribe"
          }), h(te.ALREADY_SUBSCRIBED), void _(!1)) : void 0), j = async () => {
            const {
              error: e = null,
              result: t
            } = await (0, g.coreScApiFetch)("marketing/update", {
              fetchOptions: {
                method: "POST"
              },
              pingBearer: a.pingBearer,
              query: {
                subscribe: !0
              }
            });
            if (e) ne(0), h(te.ERROR_GENERIC), f({
              event: "alert_error",
              text: "error message with preferences link",
              element_placement: "newsletter subscribe"
            });
            else {
              const e = t.status;
              ne(e), h(se[e]), 1 === e ? (f({
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
          return (0, m.useEffect)(() => {
            n(1 === u)
          }, [u]), (0, m.useEffect)(() => {
            (async () => {
              await (async () => {
                a.loggedIn ? await (async () => {
                  if (-1 === u) return;
                  ne(-1), l(!0);
                  const t = await (0, g.coreScApiFetch)("marketing/status", {
                    pingBearer: a.pingBearer
                  });
                  if (!t || t.error) ne(0), l(!1);
                  else {
                    const s = t.result.status;
                    ne(s), a.isFromAuth && (t => {
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
                          }), h(te.SUCCESS)) : (f({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), h(te.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          f({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), h(te.ERROR_GENERIC);
                          break;
                        default:
                          a.isNewAccount ? (h(v), f({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : j()
                      }
                    })(s), l(!1)
                  }
                })() : !1 === a.loggedIn && l(!1)
              })()
            })()
          }, [a.loggedIn]), {
            dialog: t,
            handleSubscribeButton: y,
            isButtonLoading: d,
            isLoading: c,
            isSubscribed: r,
            setShowDialog: o,
            showDialog: i,
            subscriptionStatus: u,
            urls: k,
            setDialog: s
          }
        };
      var oe = t(30433);
      const ce = (0, oe.g)(() => {
        const e = (0, g.useRockstarTokenPing)(),
          a = (0, q.A)(),
          [{
            iso: t
          }] = (0, U.getLocale)(),
          s = (0, g.toScLocaleString)(t),
          {
            login: r
          } = (0, g.getConfigForDomain)(),
          [n] = (0, u.useSearchParams)(),
          i = (0, u.useNavigate)(),
          o = (0, u.useLocation)(),
          {
            loggedIn: c,
            data: l,
            loading: d
          } = (0, b.useRockstarUser)(),
          m = "true" === n.get("marketing"),
          p = {
            lang: s,
            location: o.pathname,
            login: r,
            navigate: i,
            www: a.sites.www
          },
          f = {
            ...l,
            isFromAuth: m || !1,
            loggedIn: c,
            pingBearer: e,
            userLoading: d
          },
          k = ie(p, f),
          {
            dialog: h,
            setDialog: v,
            handleSubscribeButton: y,
            isButtonLoading: j,
            isLoading: x,
            isSubscribed: w,
            setShowDialog: N,
            showDialog: S,
            urls: C
          } = k;
        return (0, _.jsx)(_.Fragment, {
          children: (0, _.jsx)(ae, {
            handleSubscribeButton: y,
            loggedIn: c || !1,
            loading: d || x,
            urls: C,
            isButtonLoading: j,
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
        de = t(14143);
      const _e = ({
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
          return (0, _.jsx)(de.y, {
            className: (0, T.default)("rockstargames-sites-gta-gen9c1c689cf47230fa80bccc9b20515d4fa", a),
            layers: r,
            style: t
          })
        },
        me = "rockstargames-sites-gta-gen9ae8bfc3f9a519606a95144e64ee454b5",
        ue = ({
          minOffset: e = 0,
          maxOffset: a = 0,
          scrollAxis: t = "vertical",
          displayClass: s = "",
          style: r = {},
          children: n
        }) => "horizontal" === t ? (0, _.jsx)(de.kQ, {
          x: [e, a],
          className: (0, T.default)(me, s),
          styleOuter: r,
          children: n
        }) : (0, _.jsx)(de.kQ, {
          y: [e, a],
          className: (0, T.default)(me, s),
          styleOuter: r,
          children: n
        }),
        ge = ({
          children: e
        }) => {
          const {
            parallaxController: a
          } = (0, de.as)();
          return (0, m.useLayoutEffect)(() => {
            if (!a) return;
            const e = setInterval(() => {
              a.update()
            }, 500);
            return () => clearInterval(e)
          }, [a]), e
        },
        be = {
          large: "rockstargames-sites-gta-gen9e15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-sites-gta-gen9dfdaa6f63f8e8bd10576fa2debcbc1fc",
          parallaxWrapper: "rockstargames-sites-gta-gen9e30c08cf0e042f7fc7bed0c23c0bfb31",
          small: "rockstargames-sites-gta-gen9c32a973dbc862a43cc5d4a2aac19ed9b"
        },
        pe = ({
          scrollAxis: e = "vertical",
          size: a = "",
          style: t = {},
          children: s
        }) => (0, _.jsx)(de.zE, {
          scrollAxis: e,
          children: (0, _.jsx)(ge, {
            children: (0, _.jsx)("div", {
              className: (0, T.default)(be.parallaxWrapper, be[a]),
              style: t,
              "data-context": "parallax-wrapper",
              children: s ? s.map((a, t) => (0, m.cloneElement)(a, {
                scrollAxis: e,
                style: {
                  ...a?.props?.style,
                  zIndex: t
                }
              })) : (0, _.jsx)("div", {})
            })
          })
        });
      var fe = t(12334),
        ke = t(44453),
        he = t(22682);
      const ve = {
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
          title: l = "",
          name: d = "",
          style: u,
          imageStyle: p,
          _memoq: f
        }) => {
          const [k, h] = (0, m.useState)(!1), {
            ref: v,
            inView: y
          } = (0, W.useInView)({
            threshold: .6
          }), {
            isMobile: j
          } = (0, g.useWindowResize)(), {
            track: x
          } = (0, b.useGtmTrack)(), w = (0, z.useImageParser)(o), N = (0, z.useGetCdnSource)(i), S = j ? w?.src?.mobile : w?.src?.desktop, C = w?.alt ?? "", T = {
            ...u,
            "--promo-background": e ?? "var(--black-200)",
            "--promo-image": `url(${S??N??"var(--promo-background)"})`,
            "--promo-order": "left" === c ? "row" : "row-reverse"
          }, E = {
            ...p
          };
          return (0, m.useEffect)(() => {
            y && !k && (x({
              event: "page_section_impression",
              element_placement: d?.toLowerCase()
            }), h(!0))
          }, [y]), (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)("div", {
              className: ve.promoModuleWrapper,
              children: (0, _.jsxs)(I.motion.div, {
                className: ve.promoModule,
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
                  className: [ve.promoModuleImage, n ? ve.gradient : "", "left" === c ? ve.left : ve.right].join(" "),
                  style: {
                    ...E
                  }
                }), (0, _.jsxs)("div", {
                  className: ve.promoModuleContentContainer,
                  children: [(0, _.jsx)(O.A, {
                    brands: a
                  }), (0, _.jsxs)("div", {
                    className: ve.promoModuleTextContent,
                    children: [l && (0, _.jsx)("h3", {
                      children: l
                    }), t && (0, _.jsx)("p", {
                      children: t
                    })]
                  }), s && (0, _.jsx)(he.A, {
                    to: r,
                    text: s,
                    onClick: () => {
                      x({
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
      var xe = t(44293),
        we = t(69138);
      const Ne = {
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
        Se = ({
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
          } = (0, g.useQuery)(we.UserGetVote, {
            skip: !0
          }), [o] = (0, g.useMutation)(we.UserCastVote), [c, l] = (0, m.useState)(null), d = (0, m.useCallback)(async e => {
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
            l(n?.data?.userCastVote?.vote ?? null)
          }, [a, t]);
          return (0, m.useEffect)(() => {
            (async () => {
              if (!n || !a || !t) return;
              const e = await i({
                foreign_id: a,
                foreign_type: t
              });
              l(e?.data?.userGetVote?.vote ?? null)
            })()
          }, [a, t, n]), (0, _.jsx)("div", {
            className: Ne.userVote,
            children: (0, _.jsxs)("div", {
              className: Ne.voteContent,
              children: [(0, _.jsxs)("div", {
                className: Ne.info,
                children: [(0, _.jsx)("h3", {
                  children: s
                }), (0, _.jsx)("p", {
                  children: e
                })]
              }), (0, _.jsxs)("div", {
                className: [Ne.voteButtons, n ? "" : Ne.loggedOutButtons].join(" "),
                children: [(0, _.jsx)("button", {
                  onClick: () => d(!0),
                  className: [Ne.upVote, c ? Ne.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, _.jsx)("button", {
                  className: [Ne.downVote, !1 === c ? Ne.voteButtonActive : ""].join(" "),
                  onClick: () => d(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var Ce = t(32255),
        Te = t(28097),
        Ee = t(72527);
      const Ie = (e = [], a, t) => {
          const s = (0, m.useRef)(null),
            r = (0, m.useRef)(new Set),
            n = (0, m.useRef)([]),
            i = (0, m.useRef)(0),
            o = (0, m.useRef)(0),
            c = (0, m.useRef)(!1),
            l = (0, m.useMemo)(() => Array.from(new Set(e.filter(e => e >= 0 && e <= 100))).sort((e, a) => e - a), [e]);
          return (0, m.useEffect)(() => {
            r.current = new Set, n.current = l.slice()
          }, [l]), (0, m.useEffect)(() => {
            s.current = t ?? window
          }, [t]), (0, m.useEffect)(() => {
            const e = s.current;
            if (!e) return;
            const l = () => {
              c.current || (c.current = !0, requestAnimationFrame(() => {
                (() => {
                  const {
                    scrollTop: s,
                    scrollHeight: c,
                    percent: d
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
                  i.current = d, o.current = s;
                  const _ = n.current.find(e => d >= e);
                  if (!_) return;
                  if (r.current.has(_)) return;
                  r.current.add(_), n.current = n.current.filter(e => e !== _);
                  const m = c * (_ / 100);
                  a?.({
                    scrollY: _,
                    scrollLength: m
                  }), 0 === n.current.length && e.removeEventListener("scroll", l, {
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
            scrollY: i.current,
            scrollLength: o.current
          }
        },
        ze = ({
          threshold: e,
          trackRef: a,
          children: t
        }) => {
          const {
            track: s
          } = (0, b.useGtmTrack)();
          return Ie(e, ({
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
        Ae = ({
          text: e,
          style: a
        }) => (0, _.jsx)("div", {
          className: "rockstargames-sites-gta-gen9c08a001134624b9ceb275eae413bfd3d",
          style: a,
          children: e
        }),
        Me = ({
          hasTag: e = !1,
          tag: a = null,
          tagStyle: t = null,
          badges: s = []
        }) => e && a ? (0, _.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ceb75d3391774f84e920e955d7a6853f",
          "data-tag-style": t,
          children: a
        }) : e && s && s?.length > 0 ? (0, _.jsx)("div", {
          className: "rockstargames-sites-gta-gen9f83b84453472e937d57011680a564ec6",
          children: s.map(e => (0, _.jsx)(Ae, {
            ...e
          }, e?.text))
        }) : null,
        Pe = {
          content: "rockstargames-sites-gta-gen9f418ed13cf5cbe3f701ce0d872b50704",
          textOverlay: "rockstargames-sites-gta-gen9ca83475001f5d512b9ffcd89f1117561"
        },
        {
          LiteMotion: Le,
          Animations: Re
        } = Te,
        {
          variants: De,
          transitions: Oe
        } = Re,
        Be = ({
          title: e,
          hasTag: a,
          tag: t,
          hasDescription: s,
          description: r,
          fadesOut: n = !1,
          badges: i
        }) => (0, _.jsx)(Le, {
          initial: De.fade.out.initial,
          animate: {
            opacity: n ? 0 : 1
          },
          transition: Oe.fade,
          className: Pe.textOverlay,
          children: (0, _.jsxs)("div", {
            className: Pe.content,
            children: [(0, _.jsx)(Me, {
              hasTag: a,
              tag: t,
              badges: i?.filter(e => e?.isPrimary)
            }), (0, _.jsx)("h3", {
              children: e
            }), s && r && (0, _.jsx)("div", {
              className: Pe.description,
              children: r
            })]
          })
        }),
        Ge = (0, U.defineMessages)({
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
          const c = (0, m.createRef)(),
            {
              formatMessage: l
            } = (0, U.useIntl)();
          return (0, m.useEffect)(() => {
            const e = () => {
              c.current && null !== o && o(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [c]), (0, _.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e419c6cd31abd635e742e635dcfd8316",
            ref: c,
            "data-show-background": t,
            children: [a && (0, _.jsx)("span", {
              className: "rockstargames-sites-gta-gen9bf415d56280a8768ee0c26e116865d5b",
              children: e
            }), (0, _.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d98da8fc9dce6d600db165351d3a3fed",
              children: [(0, _.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a5717338db21efc7eb765011d68ea73d",
                "data-tag-style": r || "free",
                children: s
              }), (0, _.jsx)("span", {
                className: "rockstargames-sites-gta-gen9cdaaa9655747e4d129d6c22080bdd33d",
                children: n
              }), i && (0, _.jsx)("span", {
                className: "rockstargames-sites-gta-gen9d2cd2139f671e2976f60b0002f59fd77",
                children: l(Ge.card_sr_only_discount_label)
              }), (0, _.jsx)("span", {
                className: "rockstargames-sites-gta-gen9af3db4eb6d14c1f4ee5689b4e6386715",
                children: i
              })]
            })]
          })
        };
      var Ve = t(80391),
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
          ps: Ve,
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
          const i = (0, m.createRef)();
          return (0, m.useEffect)(() => {
            const e = () => {
              i.current && null !== r && r(i.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [i]), (0, _.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ee81f54f31ab2cd10a67313b9689bf96",
            ref: i,
            "data-show-background": t,
            "data-show-platforms": !n,
            children: [a && (0, _.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d4ab460f0a204a588d4d4dd0a110ca36",
              children: e
            }), s?.platformsAndLinks && (0, _.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9afdc85bfd80cae52d4c1b422f1294962",
              children: [(0, _.jsx)(Me, {
                hasTag: s?._memoq?.platformTag,
                tag: s?._memoq?.platformTag,
                tagStyle: s?._memoq?.platformTagStyle
              }), (0, _.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c252412353007d9f02f19a754430b14b",
                children: s.platformsAndLinks.map(({
                  platform: e,
                  buttonText: a
                }) => (0, _.jsx)("img", {
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
          const [l] = (({
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
            const [l, d] = (0, m.useState)(null), u = (0, m.useMemo)(() => {
              if (!e) return null;
              const l = "sm" !== n && r;
              return (0, _.jsx)(Be, {
                title: i,
                hasTag: t,
                tag: a,
                hasDescription: l,
                description: s,
                fadesOut: o,
                badges: c
              })
            }, [e, a, t, s, r, n, i, o, c]);
            return (0, m.useEffect)(() => {
              d(u)
            }, [u]), [l, d]
          })({
            ...e,
            size: t,
            title: a,
            expandedView: s
          }), d = void 0 !== n?.hasPricingOptions || null !== c;
          return (0, _.jsxs)("header", {
            className: "rockstargames-sites-gta-gen9cab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": o,
            "data-expanded-view": s,
            children: [m.Children.map(r, e => (0, m.cloneElement)(e, {
              title: a,
              size: t,
              expandedView: s
            })), l, d && (0, _.jsxs)(_.Fragment, {
              children: [!0 === c?.hasPlatformOptions && (0, _.jsx)(Ze, {
                title: a,
                platformOptions: c,
                pricingOptions: n,
                setPricingContainerHeight: i,
                expandedView: s
              }), !0 === n?.hasPricingOptions && (0, _.jsx)($e, {
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
          context: l = null,
          textOverlayProps: d,
          className: u,
          children: b,
          theme: p = "none",
          id: f,
          pricingOptions: k,
          pricingContainerHeight: h,
          isCoverCard: v,
          platformOptions: y,
          isProductCard: j = !1
        }) => {
          const x = (0, m.useRef)(null),
            w = (0, m.useRef)(null),
            {
              tag: N,
              expandedHasTag: S,
              badges: C
            } = d;
          (0, F.set)(a, "meta.prod", t);
          const E = b?.props?.images.length > 0;
          let I = (0, _.jsx)("h1", {
            children: r
          });
          return v && (I = null), (0, m.useEffect)(() => {
            const e = () => {
              x.current && x.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (x.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }, []), (0, _.jsx)(g.DataLayerProvider, {
            card_id: f,
            card_name: r?.toLowerCase(),
            children: (0, _.jsx)(ze, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === c ? x : w,
              children: (0, _.jsxs)(Qe, {
                ref: x,
                initial: n,
                animate: i,
                variants: o.expanded,
                transition: aa.cardOpen,
                className: (0, T.default)("rockstargames-sites-gta-gen9c2289ce1bf0de6ad8a4a8ce7e90a4b66", u),
                "data-type": c,
                "data-size": s,
                "data-product": j,
                "data-covercard": v || !1,
                "data-context": l,
                style: {
                  "--product-card-pricing-info-height": `${h||0}px`
                },
                children: [E && (0, _.jsx)(Je, {
                  size: s,
                  title: r,
                  textOverlayProps: d,
                  expandedView: !0,
                  pricingOptions: k,
                  platformOptions: y,
                  isCoverCard: v,
                  children: b
                }), (0, _.jsxs)(Qe, {
                  ref: w,
                  className: "rockstargames-sites-gta-gen9e461568802b56e8c21b8b82d9c3a1fb4",
                  variants: o.expandedContents,
                  transition: aa.afterCardOpen,
                  "data-theme": p,
                  tabindex: -1,
                  children: [(0, _.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9c4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, _.jsx)(Me, {
                      hasTag: S,
                      tag: N,
                      badges: C
                    }), I, j && (0, _.jsxs)(_.Fragment, {
                      children: [!0 === y?.hasPlatformOptions && (0, _.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9cd635452588eda421bdea19f00660efc",
                        children: (0, _.jsx)(Me, {
                          hasTag: y?.hasPlatformOptions,
                          tag: y?._memoq?.platformTag,
                          tagStyle: y?._memoq?.platformTagStyle
                        })
                      }), !0 === k?.hasPricingOptions && (0, _.jsx)($e, {
                        title: r,
                        showTitle: !1,
                        showBackground: !1,
                        tag: k?._memoq?.tag,
                        tagStyle: k?.tagStyle || "free",
                        discountPrice: k?._memoq?.discountPrice,
                        originalPrice: k?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, _.jsx)(z.TinaParser, {
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
      const ra = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","card_sr_only_discount_label":"Ermäßigter Preis, vorher","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","card_sr_only_discount_label":"Discount price, previously","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","card_sr_only_discount_label":"Precio rebajado, anteriormente","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","card_sr_only_discount_label":"Precio con descuento, anteriormente","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","card_sr_only_discount_label":"Prix réduit, précédemment","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","card_sr_only_discount_label":"Prezzo scontato: prima","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","card_sr_only_discount_label":"割引価格(以前の価格)","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","card_sr_only_discount_label":"할인 가격, 정가","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","card_sr_only_discount_label":"Cena promocyjna, poprzednio","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","card_sr_only_discount_label":"Preço com desconto, antes","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","card_sr_only_discount_label":"Цена по скидке, ранее","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList}上的{title}","card_label_platforms_tag":"{tag} {platformList}上的{title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","card_sr_only_discount_label":"折扣价格，此前","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第{currentPage}页（共{totalPages}页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","card_sr_only_discount_label":"優惠價格，原為","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        na = (0, U.withIntl)(({
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
          isProductCard: l,
          cardIds: d = null,
          theme: g = "none",
          isCoverCard: p,
          platformOptions: f,
          pricingOptions: k
        }) => {
          const {
            formatMessage: h,
            formatList: v
          } = (0, U.useIntl)(), [y, j] = (0, u.useSearchParams)(), x = (0, m.useRef)(null), [, w] = (0, sa.h)(), {
            track: N
          } = (0, b.useGtmTrack)(), [S, C] = (0, m.useState)(!1), T = window.location.href.includes("cms5"), E = () => {
            C(!1), w(null), T || j(e => (e.delete("info"), e), {
              replace: !0
            }), N({
              event: "trackPageview"
            })
          }, I = () => {
            if (!i?.content || !x.current || !n || "linkout" === n) return;
            const r = x.current,
              o = window.getComputedStyle(r),
              c = parseInt(o.getPropertyValue("width"), 10),
              l = parseInt(o.getPropertyValue("height"), 10),
              _ = r.getBoundingClientRect(),
              {
                content: m,
                className: u,
                contentClassName: b
              } = i,
              p = "fob" === s ? "fob" : "default";
            w({
              content: m,
              onClose: E,
              rect: _,
              width: c,
              height: l,
              className: u,
              contentClassName: b,
              fadeIn: !1,
              cardIds: d,
              theme: g,
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
            }), N({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: e,
              card_name: t?.toLowerCase(),
              position: a
            })
          };
          (0, m.useEffect)(() => {
            S && I()
          }, [S]), (0, m.useEffect)(() => {
            C(y.get("info") === e)
          }, [y.get("info"), e]);
          const z = (0, m.useMemo)(() => {
            const e = f?._memoq?.platformTag || "";
            if (f?.platformsAndLinks?.length > 0) {
              const a = f?.platformsAndLinks?.map(({
                  buttonText: e
                }) => e).filter(Boolean),
                s = v(a, {
                  type: "conjunction"
                });
              return e ? h(Ge.card_label_platforms_tag, {
                tag: e,
                title: t,
                platformList: s
              }) : h(Ge.card_label_platforms, {
                title: t,
                platformList: s
              })
            }
            return e ? h(Ge.card_label_tag, {
              tag: e,
              title: t
            }) : !0 === k?.hasPricingOptions ? null : t
          }, [f, t]);
          return p || "linkout" === n ? (0, _.jsx)("div", {
            ref: x,
            className: o,
            "data-size": s,
            "data-type": n,
            "data-product": l,
            role: "button",
            "aria-label": z,
            children: c
          }) : (0, _.jsx)("button", {
            ref: x,
            onClick: s => {
              s.preventDefault(), s.stopPropagation(), e ? j({
                info: e
              }) : I(), N({
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
            "data-product": l,
            tabIndex: "linkout" !== n ? 0 : -1,
            "aria-label": z,
            type: "button",
            children: c
          })
        }, ra),
        ia = {
          card: "rockstargames-sites-gta-gen9c49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-sites-gta-gen9b41eac21ba69f02fe26f8dafa8433207",
          coverCardWrapper: "rockstargames-sites-gta-gen9dd482c08ed9fdc5cef20f63dd6720e13",
          expandedContent: "rockstargames-sites-gta-gen9fea5414b5f55420cfcd6c6ee12a393b3",
          imageHolder: "rockstargames-sites-gta-gen9d893e3eab0a5754bb28882ceb8de6b59",
          pillBtn: "rockstargames-sites-gta-gen9f3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-sites-gta-gen9a03c60979e8d6882b5b8ce0f0301b7e9",
          text: "rockstargames-sites-gta-gen9e961062768d06292ff6cb598ae1c5e69"
        },
        oa = ({
          payload: e,
          prod: a,
          images: t,
          size: s,
          title: r,
          initial: n,
          animate: i,
          variants: o,
          id: c,
          position: l,
          sectionTitle: u,
          expandedType: g,
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
          theme: y,
          cardIds: j,
          pricingOptions: x,
          platformOptions: w = null,
          pricingContainerHeight: N,
          isCoverCard: S = !1,
          isProductCard: C = !1
        }) => {
          const T = (0, z.useTinaComponents)(),
            E = (0, m.useMemo)(() => ({
              ...T,
              HTMLElement: H,
              ImageWithBadge: ke.A,
              Carousel: d.A,
              GroupOfItems: Ee.default
            }), [T]),
            I = (0, m.useMemo)(() => (0, _.jsx)(ta, {
              type: g,
              components: E,
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
              theme: y,
              cardIds: j,
              pricingOptions: x,
              id: c,
              pricingContainerHeight: N,
              isCoverCard: S,
              platformOptions: w,
              isProductCard: C,
              children: f
            }), [g, t, a, s, r, k, f, n, i, o, E, e, C]),
            A = [ia.card, S ? ia.coverCardWrapper : ""].join(" ");
          return (0, _.jsx)(na, {
            id: c,
            position: l,
            sectionTitle: u,
            title: r,
            size: s,
            expandedType: g,
            images: t,
            deckProps: h,
            modalProps: {
              content: I,
              ...v
            },
            className: A,
            isProductCard: C,
            cardIds: j,
            theme: y,
            isCoverCard: S,
            platformOptions: w,
            pricingOptions: x,
            children: p
          })
        },
        ca = {
          foreground: "rockstargames-sites-gta-gen9d858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-sites-gta-gen9d656190323ba10afc580adbf82303a8b",
          layered: "rockstargames-sites-gta-gen9a7a1d10cda2bf3de7960b4fadf2f7a4e",
          layeredImageFrame: "rockstargames-sites-gta-gen9cfc6074d8b476125230142c79438a249",
          logo: "rockstargames-sites-gta-gen9ca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-sites-gta-gen9f5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: la,
          Animations: da
        } = Te,
        {
          getVariant: _a,
          variants: ma,
          transitions: ua
        } = da,
        ga = ({
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
          return (0, _.jsx)("img", {
            src: r.mobile,
            alt: s ?? "",
            style: {
              "--z-index": a
            }
          })
        },
        ba = ({
          images: e = [],
          className: a = "",
          prod: t = !1,
          expandedView: s = !1,
          style: r = {}
        }) => {
          const [n, i] = (0, m.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, m.useEffect)(() => {
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
          const o = (0, m.useMemo)(() => e?.length && 0 !== e.length ? e.map(e => (0, _.jsx)(la, {
            className: (0, T.default)(ca[e?.specialClass] ?? ca.imageMask, ca[e?.sizeClass], e?.className),
            variants: _a(e?.specialClass ?? "imageMask", s ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: ua.cardOpen,
            children: (0, _.jsx)(ga, {
              image: e,
              prod: t
            })
          }, e.key)) : null, [e, n, s, t]);
          return (0, _.jsx)(la, {
            className: (0, T.default)(ca.layeredImageFrame, e.length > 1 ? ca.layered : ca.flat, a),
            style: r,
            initial: ma.fade.in.initial,
            animate: ma.fade.in.animate,
            transition: ua.instantFade,
            "data-expanded-view": s,
            children: o
          })
        };
      var pa = t(38044);
      const fa = ({
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
          } = (0, b.useGtmTrack)(), l = (0, m.useCallback)(() => {
            c({
              event: "card_click",
              link_url: a,
              card_id: n,
              card_name: i,
              element_placement: r.toLowerCase(),
              position: o
            })
          }, [r, a, n, i, r, o]);
          return "linkout" === e && a ? (0, _.jsx)(pa.A, {
            to: a,
            style: s,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: l,
            children: t
          }) : t
        },
        ka = {
          content: "rockstargames-sites-gta-gen9c65ddebc8ee2173143d87e1079f2455a",
          customModalContent: "rockstargames-sites-gta-gen9fc96cdfdaeb2ad81b1b409fcb233657e",
          pillBtn: "rockstargames-sites-gta-gen9ddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-sites-gta-gen9b4fbb4006fc27b899dac5e522ef574e3"
        },
        {
          variants: ha
        } = Te.Animations,
        va = ({
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
          tina: l = {},
          position: d = 0,
          sectionTitle: u = "",
          theme: g,
          pricingOptions: b,
          cardIds: p,
          platformOptions: f = null
        }) => {
          const k = (0, z.useTinaPayload)(),
            h = l?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
            [v, y] = (0, m.useState)(o?.size ?? s),
            [j, x] = (0, m.useState)(0),
            w = void 0 !== b?.hasPricingOptions || void 0 !== f?.hasPlatformOptions;
          return (0, m.useEffect)(() => {
            y(o?.size ?? s)
          }, [o?.size, s]), (0, _.jsx)(oa, {
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
            variants: ha.plainCard,
            textOverlayProps: n,
            modalProps: {
              className: ka.customModal,
              contentClassName: ka.customModalContent
            },
            expandedCardContents: (0, _.jsx)(ba, {
              images: i,
              prod: h,
              expandedView: !0
            }),
            position: d,
            sectionTitle: u,
            theme: g,
            cardIds: p,
            pricingOptions: b,
            platformOptions: f,
            pricingContainerHeight: j,
            isProductCard: w,
            children: (0, _.jsx)(fa, {
              expandedType: r,
              to: c,
              sectionTitle: u,
              id: e,
              cardTitle: a,
              position: d,
              children: (0, _.jsx)("div", {
                className: ka.content,
                "data-product": w,
                children: (0, _.jsx)(Je, {
                  title: a,
                  size: v,
                  textOverlayProps: n,
                  pricingOptions: b,
                  platformOptions: f,
                  setPricingContainerHeight: x,
                  children: (0, _.jsx)(ba, {
                    images: i,
                    prod: h
                  })
                })
              })
            })
          })
        },
        ya = (0, U.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            description: "Tracklist",
            defaultMessage: "Tracklist"
          }
        }),
        ja = {
          bodySmall: "rockstargames-sites-gta-gen9deed018133fca0148d0bf72fbe95bcd6"
        },
        xa = ({
          track: e,
          artist: a
        }) => (0, _.jsxs)("div", {
          className: ja.track,
          children: [(0, _.jsx)("p", {
            children: e
          }), (0, _.jsx)("p", {
            className: ja.bodySmall,
            children: a
          })]
        }),
        wa = (0, oe.g)(({
          content: e = []
        }) => (0, _.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9e2587587f57e43c9ca90d1e16e4a6ca6",
          children: [(0, _.jsx)("h4", {
            className: "rockstargames-sites-gta-gen9ef167f82b058360b2b6a3466ca73d7de",
            children: (0, _.jsx)(U.FormattedMessage, {
              ...ya.components_track_list_title
            })
          }), (0, _.jsx)("div", {
            className: "rockstargames-sites-gta-gen9beaa4a0a8d9f3a6ef20ee517f222a3c2",
            children: (0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c06a65e90847e8b44df20f2aceb57038",
              children: e?.map(e => (0, _.jsx)(xa, {
                track: e.track,
                artist: e.artist
              }, e.key))
            })
          })]
        }));
      var Na = t(95967);
      const {
        variants: Sa
      } = Te.Animations;
      var Ca = t(42249),
        Ta = t(14653),
        Ea = t(50662);
      const Ia = "rockstargames-sites-gta-gen9b7d3d1587271986440f5870d8d02eb3b",
        za = "rockstargames-sites-gta-gen9fcffcc6e594fbf9a4a6e9ab5a8d034c7",
        Aa = {
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
        Ma = ({
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
          } = (0, b.useGtmTrack)(), [c, l] = (0, m.useState)([Ea.U1, Ea.WO, Ea.dK]), [d, u] = (0, m.useState)(null), [g, p] = (0, m.useState)(null);
          return (0, m.useEffect)(() => {
            const e = [Ea.U1, Ea.WO, Ea.dK];
            s && e.push(Ea.Vx), l(e)
          }, [s]), (0, m.useEffect)(() => {
            if (!r) return;
            const e = r.map((e, a) => (0, _.jsx)(Ta.qr, {
              children: e
            }, Symbol(a).toString()));
            p(e)
          }, [r]), g ? (0, _.jsxs)(I.motion.div, {
            className: "rockstargames-sites-gta-gen9f2d55de974817e455a162843125a8771",
            variants: n.parent,
            transition: i.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, _.jsx)(I.motion.div, {
              className: Ia,
              variants: n.main,
              transition: i.main,
              initial: "initial",
              animate: "animate",
              children: (0, _.jsx)(Ta.RC, {
                loop: t,
                navigation: s,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: d
                },
                modules: c,
                breakpoints: Aa,
                className: Ia,
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
                children: g
              })
            }), (0, _.jsx)(I.motion.div, {
              className: za,
              variants: n.thumbs,
              transition: i.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, _.jsx)(Ta.RC, {
                threshold: 50,
                onSwiper: u,
                loop: t,
                breakpoints: Aa,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: c,
                className: za,
                children: g
              })
            })]
          }) : null
        },
        Pa = ({
          images: e,
          title: a,
          expandedView: t,
          variants: s,
          transition: r
        }) => {
          const n = (0, m.useMemo)(() => e && 0 !== e?.length ? e.map((e, a) => e?.image?.sources ? (0, m.createElement)(ke.A, {
            ...e,
            key: a,
            style: {
              ...e?.style,
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null) : null, [e]);
          return !n?.length || n?.length < 1 ? null : 1 === n.length ? n : (0, _.jsx)(Ma, {
            slideChildren: n,
            title: a,
            navigation: t,
            thumbsVisible: t,
            spaceBetween: 0,
            variants: s,
            transition: r
          })
        },
        La = {
          customModalContent: "rockstargames-sites-gta-gen9ecdc3da21cda9331cebe845898b7fa7b",
          pillBtn: "rockstargames-sites-gta-gen9cf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-sites-gta-gen9cbdd37e11b752cff831c5a96aeb7dbeb"
        },
        {
          transitions: Ra,
          variants: Da
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
          payload: l,
          position: d = 0,
          sectionTitle: u = "",
          cardIds: g
        }) => {
          const b = (0, z.useTinaPayload)(),
            p = l ?? b,
            f = c?.payload?.meta?.cdn ?? p?.meta?.prod ?? !1,
            k = ((e, a) => e?.map(e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e))(i, f),
            [h, v] = (0, m.useState)(o?.size ?? s),
            {
              parent: y,
              main: j,
              thumbs: x
            } = Da?.cardWithImageGallery?.gallery ?? {};
          return (0, m.useEffect)(() => {
            v(o?.size ?? s)
          }, [o?.size, s]), (0, _.jsx)(oa, {
            id: e,
            position: d,
            sectionTitle: u,
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
            variants: Da.cardWithImageGallery,
            textOverlayProps: n,
            modalProps: {
              className: La.customModal,
              contentClassName: La.customModalContent
            },
            expandedCardContents: (0, _.jsx)(Pa, {
              images: k,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: y,
                main: j,
                thumbs: x
              },
              transition: {
                parent: Ra.cardOpen,
                main: Ra.cardOpen,
                thumbs: Ra.cardOpen
              }
            }),
            cardIds: g,
            children: (0, _.jsx)("div", {
              className: La.content,
              children: (0, _.jsx)(Je, {
                title: a,
                size: h,
                textOverlayProps: n,
                children: (0, _.jsx)(Pa, {
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
      const Ga = {
          content: "rockstargames-sites-gta-gen9db8d475894c24c580268644776443fa6",
          customModalContent: "rockstargames-sites-gta-gen9c758020ea3f5943e5f8a7d89ade3da69",
          logo: "rockstargames-sites-gta-gen9f5649436402db0dddc6a55b41c5556cc",
          pillBtn: "rockstargames-sites-gta-gen9e810afee3cb66fbbb03c473e5aa2f5be",
          secondary: "rockstargames-sites-gta-gen9d761507b70662391f68f5018510655ea",
          selected: "rockstargames-sites-gta-gen9e4ad62c1f330692bdb75370f5bbe66eb"
        },
        {
          variants: $a
        } = Te.Animations,
        Va = ({
          id: e,
          logoImage: a = null,
          logoImageHeight: t = "auto",
          name: s = null,
          title: r,
          titleSizeClass: n = null,
          content: i,
          ctaText: o,
          ctaURL: c,
          size: l = "md",
          expandedType: d = "short",
          textOverlayProps: u = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: g = [],
          deckProps: b = {},
          to: p = null,
          tina: f = {},
          cardIds: k,
          theme: h
        }) => {
          const v = (0, U.useIntl)(),
            y = (0, z.useTranslations)({
              payload: f?.payload,
              variables: f?.variables ?? {}
            }),
            [j, x] = (0, m.useState)(b?.size ?? l),
            w = (0, z.useGetCdnSource)(a ?? null),
            N = y?.content?.[0],
            S = N?.body ?? N?._memoq?.body;
          return (0, m.useEffect)(() => {
            x(b?.size ?? l)
          }, [b?.size, l]), (0, _.jsx)(oa, {
            id: e,
            title: r,
            sectionTitle: s || r,
            size: j,
            expandedType: d,
            images: g,
            deckProps: b,
            payload: {
              content: i,
              meta: {}
            },
            variants: $a.plainCard,
            textOverlayProps: u,
            modalProps: {
              className: Ga.customModal,
              contentClassName: Ga.customModalContent
            },
            expandedCardContents: (0, _.jsx)(ba, {
              images: g,
              expandedView: !0
            }),
            theme: h,
            cardIds: k,
            isCoverCard: !0,
            children: (0, _.jsx)(fa, {
              expandedType: d,
              to: p,
              sectionTitle: s || r,
              children: (0, _.jsxs)("div", {
                className: Ga.content,
                children: [a && (0, _.jsx)("img", {
                  className: Ga.logo,
                  alt: "logo",
                  src: w,
                  style: {
                    height: `${t}`
                  }
                }), (0, _.jsx)("h2", {
                  className: n,
                  children: r
                }), S && (0, _.jsx)("p", {
                  children: S
                }), (0, _.jsx)(Ba.A, {
                  target: "newtab" === d ? "_blank" : "_self",
                  to: c || void 0,
                  children: o || v.formatMessage(Ge.card_learn_more)
                })]
              })
            })
          })
        };
      var Fa = t(36038),
        Ha = t.n(Fa),
        Ua = t(80957);
      const qa = {
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
        Wa = ({
          src: e
        }) => (0, _.jsx)("div", {
          className: qa.cover,
          style: {
            background: `url(${e}) center/cover`
          }
        }),
        Ka = ({
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
          setAutoNext: l
        }) => {
          const d = (0, m.useRef)(null),
            u = (0, m.useRef)(null),
            g = (0, m.useRef)(null),
            [b, p] = (0, m.useState)(null),
            [f, k] = (0, m.useState)(!1),
            h = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, m.useEffect)(() => {
            if (!u.current || !g.current) return;
            const e = () => {
              g.current && u.current && p(g.current.clientWidth > u.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }, [g, u, e]), (0, m.useEffect)(() => {
            if (!d.current || !e?.duration) return;
            let a = null;
            const s = new(Ha())(d.current),
              r = a => {
                if (d.current) {
                  const s = d.current.clientWidth;
                  if (!d.current.contains(a.srcEvent.target)) return;
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
          }, [d.current, e.duration]), (0, m.useEffect)(() => {
            const e = Number(t?.currentTime);
            (a || !isNaN(e) && 0 !== e) && k(!0)
          }, [a, t?.currentTime]), (0, _.jsxs)("div", {
            className: qa.controls,
            style: {
              "--track-color": i.color,
              "--track-mix-blend-mode": i.mix_blend_mode,
              "--current-pct": e.current / e.duration
            },
            children: [(0, _.jsx)("div", {
              className: [qa.controlsCurrentBg, f ? qa.controlsCurrentBgVisible : ""].join(" ")
            }), (0, _.jsx)("div", {
              className: qa.controlsTrack,
              ref: u,
              children: (0, _.jsx)("span", {
                className: [qa.controlsTrackTitle, b ? qa.controlsTrackAnimating : ""].join(" "),
                ref: g,
                children: i.title
              })
            }), (0, _.jsxs)("div", {
              className: qa.controlsButtons,
              children: [(0, _.jsx)("div", {
                className: qa.controlsPrevTrack,
                onClick: () => {
                  c && (o(c[0]), l(!0), s(!0))
                }
              }), (0, _.jsx)("div", {
                className: [qa.controlsPlayPause, a ? qa.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  s(!a)
                }
              }), (0, _.jsx)("div", {
                className: qa.controlsNextTrack,
                onClick: () => {
                  c && (o(c[1]), l(!0), s(!0))
                }
              })]
            }), (0, _.jsx)("div", {
              "data-active": r ? "" : null,
              className: qa.controlsTrackBurger,
              children: (0, _.jsx)("div", {
                className: qa.iconBurger,
                onClick: () => {
                  n(!r)
                }
              })
            }), (0, _.jsxs)("div", {
              className: qa.controlsScrub,
              children: [(0, _.jsx)("span", {
                children: h(e.current)
              }), (0, _.jsx)("div", {
                className: qa.controlsScrubTrack,
                ref: d
              }), (0, _.jsx)("span", {
                children: h(e.duration)
              })]
            })]
          })
        },
        Ya = ({
          tracks: e,
          trackId: a,
          setTrackId: t,
          tracksOpen: s,
          setTracksOpen: r,
          setPlaying: n,
          setAutoNext: i
        }) => (0, _.jsxs)("div", {
          className: qa.tracks,
          children: [(0, _.jsx)("h4", {
            children: "Tracks"
          }), (0, _.jsx)("div", {
            className: qa.trackBurger,
            onClick: () => {
              r(!s)
            }
          }), (0, _.jsx)("div", {
            className: qa.trackList,
            children: e.map((e, s) => (0, _.jsxs)("a", {
              style: {
                "--highlight-color": e.color
              },
              className: a === e.id ? qa.trackActive : "",
              onClick: () => {
                t(e.id), n(!0), i(!0)
              },
              children: [(0, _.jsx)("span", {
                className: qa.trackIndex,
                children: String(s + 1).padStart(2, "0")
              }), (0, _.jsx)("span", {
                className: qa.trackTitle,
                children: e.title
              }), (0, _.jsx)("span", {
                className: qa.trackTime,
                children: e.duration
              })]
            }, e.id))
          })]
        }),
        Xa = ({
          id: e,
          className: a = ""
        }) => {
          const {
            data: t
          } = (0, g.useQuery)(Ua.GetAudioAlbum, {
            variables: {
              id: e
            }
          }), [s, r] = (0, m.useState)(), [n, i] = (0, m.useState)(), [o, c] = (0, m.useState)(), [l, d] = (0, m.useState)(!1), [u, b] = (0, m.useState)(!1), [p, f] = (0, m.useState)(), [k, h] = (0, m.useState)({
            current: 0,
            duration: 0
          }), [v, y] = (0, m.useState)(!0);
          return (0, m.useEffect)(() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (i(a.data.rockstarAudioPlayerPlayTrackId), y(!1), b(!0)), u && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && b(!1)
              };
            return u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }, [u]), (0, m.useEffect)(() => {
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
          }, [p, s, v]), (0, m.useEffect)(() => {
            u && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }, [u]), (0, m.useEffect)(() => {
            p && (u ? p.play() : p.pause(), d(!1))
          }, [u, p, o?.id]), (0, m.useEffect)(() => {
            if (!n) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex(e => e.id === n);
            r([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), c(e[a])
          }, [n]), (0, m.useEffect)(() => {
            t && i(t.audioAlbum.tracks[0].id)
          }, [t]), o ? (0, _.jsxs)("div", {
            className: [qa.player, qa[a], l ? qa.tracksOpen : ""].join(" "),
            children: [(0, _.jsx)("audio", {
              ref: e => {
                f(e)
              },
              src: o.mp3_src
            }), (0, _.jsx)(Ya, {
              tracks: t.audioAlbum.tracks,
              setTrackId: i,
              trackId: n,
              tracksOpen: l,
              setTracksOpen: d,
              setPlaying: b,
              setAutoNext: y
            }), (0, _.jsx)(Wa, {
              src: o.cover_src
            }), (0, _.jsx)(Ka, {
              setTrackId: i,
              trackBounds: s,
              tracksOpen: l,
              setTracksOpen: d,
              playing: u,
              setPlaying: b,
              timing: k,
              trackData: o,
              audioRef: p,
              setAutoNext: y
            })]
          }) : null
        };
      var Za = t(2122),
        Ja = t(67127),
        Qa = t(56386),
        et = t.n(Qa);
      const at = ({
        isMulti: e,
        allowSelectAll: a,
        label: t,
        miscProps: s
      }) => {
        const [r, n] = (0, m.useState)(""), i = (0, m.useMemo)(() => et()().getData(), []);
        return (0, _.jsx)(Ja.Ay, {
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
      var tt = t(77678);
      const st = ({
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
          e && a && (document.cookie = `${e}=${a}; domain=${(0,tt.F)()}; path=/;`)
        })(e, n), r === a || n === a ? t : s
      };
      var rt = t(64581),
        nt = t(81140),
        it = t(68291),
        ot = t(76862);
      const ct = "rockstargames-sites-gta-gen9a19bcd2b98d91e60c43b9de146e20f4e",
        lt = ({
          color: e
        }) => (0, _.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9e83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, _.jsx)("div", {
            className: ct
          }), (0, _.jsx)("div", {
            className: ct
          }), (0, _.jsx)("div", {
            className: ct
          })]
        });
      var dt = t(79955),
        _t = t.n(dt);
      const mt = {
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
          const [s, r] = (0, m.useState)(!1);
          return (0, _.jsx)(_t(), {
            active: s,
            focusTrapOptions: {
              onDeactivate: () => r(!1),
              clickOutsideDeactivates: !0
            },
            children: (0, _.jsxs)("div", {
              className: [mt.dropdownWrapper, s ? mt.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, _.jsx)("button", {
                className: mt.opener,
                "aria-expanded": s,
                onClick: () => r(!s),
                children: t
              }), s && (0, _.jsx)("div", {
                className: mt.items,
                onClick: () => r(!1),
                children: e
              })]
            })
          })
        },
        gt = ({
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
        bt = ({
          componentTitle: e,
          type: a,
          items: t
        }) => t?.length ? (0, _.jsx)("div", {
          className: "rockstargames-sites-gta-gen9aee2a98f97e777758e2d9bec034314ee",
          type: a,
          children: (0, _.jsxs)(E, {
            children: [e && (0, _.jsx)("h3", {
              children: e
            }), (0, _.jsx)(E, {
              className: "rockstargames-sites-gta-gen9dba17b5c55f8d40e2600765f1a60d6af",
              children: t.map((e, a) => {
                return e?.embed ? (0, _.jsx)(gt, {
                  caption: e?.caption,
                  children: (0, _.jsx)("div", {
                    className: "rockstargames-sites-gta-gen9f0cd8278232673606f9c1715bd4950f6",
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
        }) : null,
        pt = {
          animateBox: "rockstargames-sites-gta-gen9b07a3be6338e0ba4b346b072762582e3",
          animateMe: "rockstargames-sites-gta-gen9f7adfd0186421cac9ad0b300911cc9af",
          bar: "rockstargames-sites-gta-gen9bbb7e636ac00581aed0b7e148916cc11",
          barGrow: "rockstargames-sites-gta-gen9e0262d00df9ad8a47b08ae84160bfa51",
          fadeArea: "rockstargames-sites-gta-gen9f47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-sites-gta-gen9c121e11e40215dc778fe8665eb38845d"
        },
        ft = ({
          children: e,
          style: a
        }) => {
          const t = (0, m.useRef)(null);
          return (0, m.useEffect)(() => {
            new IntersectionObserver(e => {
              e.forEach(e => {
                e.isIntersecting && e.target.classList.add([pt.visible])
              })
            }).observe(t?.current)
          }, []), (0, _.jsx)("div", {
            style: a,
            className: [pt.fadeArea].join(" "),
            ref: t,
            children: e
          })
        },
        kt = {
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
        ht = ({
          style: e,
          className: a
        }) => {
          const t = {
              ...e
            },
            s = e["--border-image-source"],
            r = (0, z.useGetCdnSource)(s || null);
          return s && (t["--border-image-source"] = `url(${r})`), (0, _.jsx)("div", {
            className: (0, T.default)(kt.border, a),
            style: {
              ...t
            }
          })
        },
        vt = e => e?.images ? (0, _.jsx)("div", {
          className: (0, T.default)(kt.layeredImage, kt[e?.variantClass], kt[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, _.jsxs)("div", {
            className: kt.layersWrapper,
            children: [e?.images?.map((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: n,
                positionClassX: i,
                positionClassY: o,
                zIndex: c,
                className: l,
                style: d,
                alt: m,
                displayClass: u
              } = e;
              return (0, _.jsx)(Na.A, {
                image: t,
                style: {
                  zIndex: c ?? a + 1
                },
                imageStyle: d,
                className: (0, T.default)(l, u, kt.imageLayer, kt[s], kt[r], kt[n], kt[i], kt[o]),
                alt: m
              }, c ?? a + 1)
            }), e?.borderImage && (0, _.jsx)(ht, {
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
            showDownloadButton: l,
            showZoomControls: d
          } = e, m = (0, g.useLocale)(), {
            isMobile: u
          } = (0, g.useWindowResize)(), b = a?.sources ?? {}, p = s?.image?.sources ?? {}, f = (0, C.C1)(b?.[m] ?? b?.en_us) ?? "", k = (0, C.C1)(p?.[m] ?? p?.en_us) ?? f, h = u ? i : o, v = u ? c : l;
          return (0, _.jsx)("div", {
            style: n,
            className: "rockstargames-sites-gta-gen9adbaa0167219cd891249a29faec00e8f",
            children: (0, _.jsxs)(j.Lightbox.Root, {
              altText: t || "",
              children: [(0, _.jsxs)(j.Lightbox.Trigger, {
                className: "rockstargames-sites-gta-gen9d769ad0525fc8e1ea83ce616ce6959bb",
                style: {
                  aspectRatio: s?.thumbnailAspectRatio
                },
                children: [(0, _.jsx)(j.Lightbox.Thumbnail, {
                  src: k,
                  style: {
                    objectPosition: s?.thumbnailPosition
                  }
                }), h && (0, _.jsx)(j.Lightbox.OpenIcon, {
                  style: {
                    boxSizing: "content-box"
                  }
                })]
              }), (0, _.jsxs)(j.Lightbox.Portal, {
                children: [(0, _.jsx)(j.Lightbox.Overlay, {}), (0, _.jsxs)(j.Lightbox.Content, {
                  children: [(0, _.jsx)(j.Lightbox.ZoomPan, {
                    children: (0, _.jsx)(j.Lightbox.Image, {
                      src: f
                    })
                  }), (0, _.jsxs)(j.Lightbox.Controls, {
                    children: [r && (0, _.jsx)(j.Lightbox.Caption, {
                      children: r
                    }), (0, _.jsx)(j.Lightbox.Close, {
                      showTooltip: !1
                    }), d && (0, _.jsx)(j.Lightbox.Zoom, {}), v && (0, _.jsx)(j.Lightbox.Download, {})]
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
        xt = ({
          imageUrl: e,
          className: a,
          alt: t,
          style: s,
          lazy: r = !1,
          decoding: n = "auto",
          sizes: i = [320, 480, 768, 1024, 1440, 1920, 2560]
        }) => {
          const [o, c] = (0, m.useState)(!1);
          return (0, _.jsxs)("div", {
            className: jt.multiSourceContainer,
            children: [!o && (0, _.jsx)("img", {
              className: [a, jt.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: s
            }), (0, _.jsx)("img", {
              className: [jt.multiSourceImage, a].join(" "),
              src: `${e}?im=Resize=1920`,
              srcSet: (l = e, i.map(e => `${l}?im=Resize=${e} ${e}w`).join(", ")),
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
          var l
        };
      var wt = t(74631);
      const Nt = {
          tag: "rockstargames-sites-gta-gen9b660bb706132d84852c02df01cc6ed5a"
        },
        St = ({
          className: e,
          href: a,
          title: t,
          style: s
        }) => {
          const r = (0, _.jsxs)("div", {
            style: s,
            className: [Nt.tag, e].join(" "),
            children: [(0, _.jsx)("i", {}), t]
          });
          return void 0 !== a ? (0, _.jsx)(pa.A, {
            to: a,
            children: r
          }) : r
        },
        Ct = {
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
          } = (0, b.useGtmTrack)(), [i] = (0, u.useSearchParams)(), o = t.preview_images_parsed.newswire_block, c = (0, wt.Ub)(y.breakpoints.mobile), l = {
            default: 0 !== a || s ? o.square || o.d16x9 || o._fallback : o.d16x9 || o.square || o._fallback,
            mobile: o.square || o._fallback
          }, [d] = (0, g.usePreloadImg)(l.default), p = {
            default: {
              backgroundImage: `url(${l.default})`
            },
            mobile: {
              backgroundImage: `url(${l.mobile})`
            }
          }, f = (0, m.useCallback)(() => {
            n({
              event: "card_click",
              card_id: t.id,
              card_name: t.name_slug.replace(/-/g, " "),
              link_url: t.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }, [t]);
          return (0, _.jsx)(pa.A, {
            to: t.url,
            className: [Ct.newswireBlock, s ? Ct.newswireBlockNoSpecialOrder : "", null !== d ? Ct.startAnimation : ""].join(" "),
            focused: r,
            onClick: f,
            children: (0, _.jsxs)(_.Fragment, {
              children: [0 !== a || i.get("tag_id") ? (0, _.jsx)("div", {
                className: Ct.preview,
                style: p.default
              }) : (0, _.jsx)("div", {
                className: c ? Ct.previewMobile : Ct.preview,
                style: c ? p.mobile : p.default
              }), (0, _.jsxs)("div", {
                className: Ct.info,
                children: [(0, _.jsxs)("div", {
                  className: Ct.top,
                  children: [t.primary_tags.length ? (0, _.jsx)(St, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, _.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, _.jsx)("h5", {
                  className: Ct.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Et = t(27750),
        It = t.n(Et);
      const zt = (0, g.withTranslations)(({
          section: e = "",
          relativeTo: a = "",
          tagId: t = null,
          metaUrl: s = "/newswire",
          t: r
        }) => {
          const n = (0, g.useLocale)(),
            {
              track: i
            } = (0, b.useGtmTrack)(),
            [o, c] = (0, u.useSearchParams)(),
            {
              tagId: l = null
            } = (0, u.useParams)(),
            [d, p] = (0, m.useState)(l ?? t ?? o.get("tag_id")),
            [f, k] = (0, m.useState)(1),
            [h, v] = (0, m.useState)(20),
            [y, j] = (0, m.useState)([]),
            [x, w] = (0, m.useState)(null),
            [N, {
              loading: S,
              data: C
            }] = (0, g.useLazyQuery)(It(), {
              variables: {
                tagId: Number(d),
                page: f,
                metaUrl: s,
                limit: h,
                locale: n
              }
            });
          return (0, m.useEffect)(() => {
            k(1), j([]), v(20), p(l ?? t ?? o.get("tag_id")), N()
          }, [o.get("tag_id"), l, t]), (0, m.useEffect)(() => {
            const e = y;
            C?.posts?.paging && w(C?.posts?.paging), C?.posts?.results && j(e.concat(C?.posts?.results))
          }, [C]), (0, m.useEffect)(() => {
            (() => {
              const e = o.get("page"),
                a = Number(e ?? 1);
              v(20 * a), N()
            })()
          }, []), y.length ? (0, _.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e81cdae3d47ce0490795e6588b3c8464",
            "data-testid": "newswire-list",
            children: [(0, _.jsx)(Lt, {
              section: e,
              posts: y,
              relativeTo: a,
              noSpecialOrder: null !== d
            }), null !== x && x.nextPage ? (0, _.jsx)(Ba.A, {
              className: "rockstargames-sites-gta-gen9e125d510192feb4ce2844cb97084b838",
              "data-testid": "more-stories",
              onClick: () => {
                const e = o.get("page"),
                  a = Number(e ?? f) + 1;
                k(a), 20 !== h && v(20), N(), c({
                  page: String(a),
                  ...d && {
                    tag_id: String(d)
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
        At = {
          just1post: "rockstargames-sites-gta-gen9d46374473ed68a4121f88b44eba06359",
          pillBtn: "rockstargames-sites-gta-gen9f2d003dd0e6a129a56ea07208548787c",
          posts: "rockstargames-sites-gta-gen9cfe09d4dc8447b1e606404300d040e7a",
          related: "rockstargames-sites-gta-gen9b8a63bb419c1f2a8f94e099e1e650e48",
          selected: "rockstargames-sites-gta-gen9f94728c4a438800b9abab11a8b3e3c0a"
        },
        Mt = (0, g.withTranslations)(({
          posts: e,
          t: a
        }) => (0, _.jsxs)("section", {
          className: At.related,
          children: [(0, _.jsx)("h2", {
            children: a("Related Stories")
          }), (0, _.jsx)("div", {
            className: [At.posts, 1 === e.length ? At.just1post : ""].join(" "),
            children: e.map(e => (0, _.jsx)(Tt, {
              noSpecialOrder: !0,
              post: e
            }, e.id))
          })]
        })),
        Pt = {
          newswireBlocks: "rockstargames-sites-gta-gen9ea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-gta-gen9d301334a72b626f8cc2f5b9733299e76"
        },
        Lt = (0, g.withGtmTracking)(({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: t,
          gtmTrack: s
        }) => {
          const [r, n] = (0, m.useState)(null);
          return (0, m.useEffect)(() => {
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
          }, [t.length]), (0, _.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Pt.newswireBlocks, a ? Pt.noSpecialOrder : "", Pt.contextHome].join(" "),
            children: t.map((t, s) => (0, _.jsx)(Tt, {
              section: e,
              index: s,
              noSpecialOrder: a,
              post: t,
              focused: s === r
            }, t.id))
          })
        }),
        Rt = "rockstargames-sites-gta-gen9b013d77f453d7053bbcf06f173ff326c",
        Dt = ({
          children: e,
          data: a,
          onPageUpdate: t,
          page: s,
          className: r
        }) => (0, _.jsx)("a", {
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
          return (0, _.jsxs)("div", {
            className: `rockstargames-sites-gta-gen9e480f25872ae2a8b3fcd1e492d838301 ${t??""}`,
            children: [e.pageCount > 8 ? (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(Dt, {
                data: e,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, _.jsx)("div", {
                className: Rt,
                children: "..."
              }) : ""]
            }) : "", i.map(s => (0, _.jsx)(Dt, {
              data: e,
              onPageUpdate: a,
              page: s,
              className: t,
              children: s
            }, s)), e.pageCount > 8 ? (0, _.jsxs)(_.Fragment, {
              children: [i.slice(-1)[0] + 1 < e.pageCount ? (0, _.jsx)("div", {
                className: Rt,
                children: "..."
              }) : "", (0, _.jsx)(Dt, {
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
        Gt = ({
          children: e,
          className: a,
          style: t
        }) => (0, _.jsx)("div", {
          className: [Bt.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        $t = {
          responsiveFlexItem: "rockstargames-sites-gta-gen9e7371144db2e94a049204d4b178416ec"
        },
        Vt = ({
          children: e,
          className: a,
          style: t
        }) => (0, _.jsx)("div", {
          className: [$t.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Ft = {
          responsiveGridBox: "rockstargames-sites-gta-gen9e9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-sites-gta-gen9b0d14e4a5e63a903117e93a392cbfb53"
        },
        Ht = ({
          children: e,
          cols: a,
          className: t,
          rows: s,
          style: r
        }) => {
          const n = r ? {
            ...r
          } : {};
          return void 0 !== a && (n.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== s && (n.gridTemplateRows = `repeat(${s}, 1fr)`), (0, _.jsx)("div", {
            className: [Ft.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: n,
            children: e
          })
        },
        Ut = {
          responsiveGridBox: "rockstargames-sites-gta-gen9e721a07d53edbb90b165a7720bb32c08",
          responsiveGridItem: "rockstargames-sites-gta-gen9a32d93b6ae982b5ad473f75cf86ff085"
        },
        qt = ({
          children: e,
          className: a,
          style: t
        }) => (0, _.jsx)("div", {
          className: [Ut.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        Wt = {
          responsiveImage: "rockstargames-sites-gta-gen9f642b754e0efd503262ab7ca0c7b9f5b"
        },
        Kt = ({
          src: e,
          className: a = "",
          animate: t,
          ariaLabel: s,
          style: r = {}
        }) => {
          const [n, i] = (0, g.usePreloadImg)(e);
          if (!n) return null;
          r.backgroundImage = `url(${e})`;
          const o = {
            ...r
          };
          return i && (o["--aspect-ratio"] = i.width / i.height), (0, _.jsx)("div", {
            role: "img",
            "aria-label": s ?? "R* Games",
            className: [Wt.responsiveImage, t ? Wt.animateBox : "", a].join(" "),
            style: o
          })
        },
        Yt = {
          maxWidth: "rockstargames-sites-gta-gen9b2c8f49e280c2e7c204b30a4af8c13b9",
          responsiveSection: "rockstargames-sites-gta-gen9bd7167fb3a3edaf4df4d9a576efb1170"
        },
        Xt = ({
          children: e,
          className: a,
          style: t,
          maxWidth: s
        }) => (0, _.jsx)("section", {
          className: [Yt.responsiveSection, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: s ? (0, _.jsx)("div", {
            className: Yt.maxWidth,
            children: e
          }) : e
        });
      var Zt = t(45124);
      const Jt = ({
        html: e
      }) => (0, _.jsx)("div", {
        children: (0, Zt.Ay)(e)
      });
      var Qt = t(18368);
      const es = () => {
        const {
          pathname: e
        } = (0, u.useLocation)();
        return (0, m.useEffect)(() => {
          const e = document.scrollingElement || document.documentElement;
          setTimeout(() => {
            e.scrollTop = 0
          }, 0)
        }, [e]), null
      };
      var as = t(68993),
        ts = t(5413);
      const ss = ({
        children: e
      }) => (0, _.jsx)("div", {
        className: "rockstargames-sites-gta-gen9aae4d33d1eecebdc9b489f8d7a1ad708",
        children: (0, _.jsx)("div", {
          className: "rockstargames-sites-gta-gen9c573fe5c7bdcc46c4d57ec4a2c275e3b",
          children: e
        })
      });
      var rs = t(57927);
      const ns = ({
          children: e,
          style: a,
          theme: t
        }) => {
          const [s, r] = (0, m.useState)(t);
          return (0, m.useEffect)(() => {
            t && r(t)
          }, [t]), (0, _.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e5e0faf6ab9871fd60b958c6f7dcf519",
            style: a,
            "data-theme": s,
            children: e
          })
        },
        is = {
          card: "rockstargames-sites-gta-gen9f93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-sites-gta-gen9a1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-sites-gta-gen9dabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-sites-gta-gen9fd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-sites-gta-gen9b8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-sites-gta-gen9fd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-sites-gta-gen9a626ad482ff0be0336e75929516654d5"
        },
        os = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [s] = (0, g.usePreloadImg)(t());
          return (0, _.jsx)("div", {
            className: [is.screencap, s ? is.screencapLoaded : ""].join(" "),
            "aria-hidden": "true",
            role: "img",
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        cs = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: s,
          toExplicit: r
        }) => {
          const n = r ?? `/videos/${t.id}`,
            i = {
              className: is.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            o = (0, _.jsxs)("div", {
              className: is.card,
              children: [(0, _.jsx)(os, {
                video: t,
                size: s
              }), (0, _.jsxs)("div", {
                className: is.info,
                children: [e ? (0, _.jsx)("div", {
                  className: is.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, _.jsx)("h5", {
                  className: is.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, _.jsx)("a", {
            href: n,
            target: "_blank",
            ...i,
            children: o
          }) : (0, _.jsx)(pa.A, {
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
        ds = (0, U.defineMessages)({
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
        _s = (0, oe.g)(({
          videos: e
        }) => {
          const a = (0, g.useLocale)(),
            {
              formatMessage: t
            } = (0, U.useIntl)(),
            {
              track: s
            } = (0, b.useGtmTrack)(),
            {
              setBodyIsLocked: r
            } = (0, g.useBodyScrollable)("VideoCarousel"),
            [n, i] = (0, m.useState)(0),
            [o, c] = (0, m.useState)(0),
            l = (0, m.useRef)(null),
            d = (0, m.useRef)(null);
          (0, m.useEffect)(() => {
            if (!l.current || !d.current) return;
            const a = new(Ha())(l.current);
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
              _ = e => {
                c(e.isFinal ? 0 : e.deltaX), "panleft" !== e.type && "panright" !== e.type || !d.current?.classList.contains(ls.dragging) || t() && r(!0)
              },
              m = () => {
                t() && r(!1), c(0)
              },
              u = e => {
                "press" === e.type && l.current?.classList.add(`${ls.disableClick}`), "tap" === e.type && (l.current?.classList.remove(`${ls.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                t() && r(!1), l.current && l.current.classList.remove(`${ls.disableClick}`)
              },
              b = () => {
                t() && r(!1)
              };
            return d.current.addEventListener("transitionend", b), a.on("swiperight", s), a.on("swipeleft", o), a.on("pan", _), a.on("panend", m), a.on("press tap", u), a.on("pressup", g), () => {
              a.off("swiperight", s), a.off("swipeleft", o), a.off("pan", _), a.off("panend", m), a.off("press tap", u), a.off("pressup", g), d.current && d.current.removeEventListener("transitionend", b), c(0)
            }
          }, [l.current, n]);
          const u = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", t(a ? ds.learn_more : ds.watch_more)]
          };
          return (0, _.jsxs)("section", {
            className: ls.carousel,
            children: [(0, _.jsx)("div", {
              className: ls.track,
              ref: l,
              children: (0, _.jsx)("div", {
                className: `${ls.items} ${0!==o?ls.dragging:""}`,
                ref: d,
                style: {
                  transform: `translateX(calc(-${100*n}% + ${o}px))`
                },
                children: e.map((e, a) => {
                  const [t, s, r] = u(e);
                  return (0, _.jsx)(pa.A, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": s,
                    to: s,
                    className: n === a ? ls.active : "",
                    role: "link",
                    title: t,
                    tabIndex: n === a ? 0 : -1,
                    target: r,
                    children: (0, _.jsx)(os, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                })
              })
            }), (0, _.jsxs)("div", {
              className: ls.slidesContent,
              children: [(0, _.jsx)("div", {
                className: ls.text,
                children: e.map((e, t) => {
                  const [r, i, o, c] = u(e);
                  return (0, _.jsxs)(pa.A, {
                    className: [ls.info, t === n ? ls.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": i,
                    to: i,
                    role: "link",
                    tabIndex: n === t ? 0 : -1,
                    target: o,
                    "aria-label": `${e.game.title} ${r}`,
                    onClick: (l = i, () => {
                      s({
                        event: "cta_watch_video",
                        text: "watch now",
                        link_url: l,
                        element_placement: "video carousel"
                      })
                    }),
                    children: [(0, _.jsxs)("div", {
                      className: ls.title,
                      children: [(0, _.jsxs)("div", {
                        className: ls.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, _.jsx)("h2", {
                        className: ls.videoTitle,
                        children: r
                      })]
                    }), (0, _.jsx)(Ba.A, {
                      tabIndex: -1,
                      role: "presentation",
                      "aria-hidden": !0,
                      className: ls.cta,
                      children: c
                    })]
                  }, e.id);
                  var l
                })
              }), (0, _.jsx)("section", {
                className: ls.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map((e, a) => (0, _.jsx)("button", {
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
        ms = (0, U.defineMessages)({
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
      (0, g.importAll)(t(86751));
      const gs = ({
          isWideCard: e = !1,
          size: a = 640,
          title: s,
          titleSlug: r,
          inGlobalNav: n = !1
        }) => {
          const {
            isMobile: i
          } = (0, g.useWindowResize)(), o = (0, m.useMemo)(() => {
            let s = "";
            return e && (s = i ? t(25087)(`./${r}/mobile/global.jpg`) : t(58963)(`./${r}/desktop/global.jpg`)), s || (s = t(39294)(`./${r}.jpg`), s += `?im=Resize=${a}`), s
          }, [i, r]), [c] = (0, g.usePreloadImg)(o);
          let l = o;
          return (0, _.jsx)("div", {
            role: "img",
            "aria-label": s,
            style: {
              backgroundImage: `url(${l})`,
              borderRadius: n ? "unset" : ""
            },
            className: [us.img, c ? us.startAnimation : "", e ? us.wide : ""].join(" ")
          })
        },
        bs = {
          fobLink: "rockstargames-sites-gta-gen9d30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-sites-gta-gen9c9686ec502f78b05e47568667e90bd17"
        },
        ps = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: s = ""
          } = e, r = ["VI"].includes(t.toUpperCase());
          return (0, _.jsx)(pa.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? s,
            target: "_self",
            className: [bs.fobLink, r ? bs.wide : ""].join(" "),
            reloadDocument: r,
            children: (0, _.jsx)(gs, {
              title: e.title,
              titleSlug: t,
              isWideCard: r,
              size: r ? 1740 : 480
            })
          })
        },
        fs = {
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
        ks = (0, oe.g)(({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: s
        }) => {
          const r = (0, U.useIntl)(),
            {
              track: n
            } = (0, b.useGtmTrack)(),
            i = void 0 !== a ? "games" : "videos",
            [o, c] = (0, m.useState)(),
            [l, d] = (0, m.useState)(),
            [u, g] = (0, m.useState)(0),
            p = (0, m.useRef)(null),
            f = (0, m.useRef)(null),
            k = (0, m.useRef)(null);
          (0, m.useEffect)(() => {
            d({
              nextEl: k.current,
              prevEl: f.current
            })
          }, [k, f]), (0, m.useEffect)(() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), g(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [u]);
          const h = e => {
            p.current && (p.current.scrollLeft = 0), o?.slideTo(e)
          };
          let v;
          return v = "games" === i ? (0, _.jsx)(_.Fragment, {
            children: a.results.filter(e => "775700as" !== e.id).map((e, a) => (0, _.jsx)(Ta.qr, {
              className: fs.slide,
              onFocus: () => h(a),
              children: (0, _.jsx)(ps, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id))
          }) : (0, _.jsx)(_.Fragment, {
            children: e.map((e, a) => (0, _.jsx)(Ta.qr, {
              className: fs.slide,
              onFocus: () => h(a),
              children: (0, _.jsx)(cs, {
                video: e,
                gameTitleNecessary: s
              })
            }, e.id))
          }), (0, _.jsxs)("section", {
            className: fs.videoList,
            children: [(0, _.jsxs)("h3", {
              className: fs.sectionHeader,
              children: [t, (0, _.jsxs)("div", {
                className: fs.arrowNav,
                children: [(0, _.jsx)("button", {
                  className: (0, T.default)(fs.arrow, fs.previous),
                  type: "button",
                  ref: f,
                  "aria-label": r.formatMessage(ms.previous_button_label),
                  onKeyDown: e => {
                    "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), o?.slidePrev())
                  }
                }), (0, _.jsx)("button", {
                  className: (0, T.default)(fs.arrow, fs.next),
                  type: "button",
                  ref: k,
                  "aria-label": r.formatMessage(ms.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" !== e.key || e.shiftKey) "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), o?.slideNext());
                    else {
                      const a = o?.slides[o?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, _.jsx)("div", {
              className: (0, T.default)(fs.items, u % 1 != 0 ? fs.partial : ""),
              children: (0, _.jsx)("div", {
                className: fs.trackWrapper,
                ref: p,
                children: u && (0, _.jsx)(Ta.RC, {
                  className: fs.track,
                  slidesPerView: u,
                  spaceBetween: 24,
                  onInit: e => {
                    c(e)
                  },
                  grabCursor: !0,
                  navigation: l,
                  modules: [Ea.Vx],
                  slideClass: (0, T.default)("swiper-slide"),
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
        hs = ({
          children: e,
          ...a
        }) => (0, _.jsx)("span", {
          ...a,
          className: "rockstargames-sites-gta-gen9acd86b7f5778381df8fac4a3f7489f60",
          children: e
        });
      var vs = t(60982),
        ys = t(14159),
        js = t(59426),
        xs = t(51550),
        ws = t(63218),
        Ns = t(41926);
      const Ss = ({
          title: e,
          content: a,
          size: t = "md",
          badgeText: s
        }) => {
          const r = {
            ...(0, z.useTinaComponents)(),
            HTMLElement: H,
            UnorderedList: fe.A,
            ListItem: Ns.A
          };
          return (0, _.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cfa8d259e6ae05cd5f97d50306be5ffe",
            "data-size": t,
            children: (0, _.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a4a39548fac12526e8721ffa8813e66a",
              children: [s && (0, _.jsx)("div", {
                className: "rockstargames-sites-gta-gen9cf77e65e2af63ee114825607dde3d11e",
                children: s
              }), (0, _.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9f903ce7e605696e1bc18c4bc22274a6e",
                children: [e && (0, _.jsx)("h3", {
                  children: e
                }), (0, _.jsx)(z.TinaParser, {
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
          Gen9CoreCarousel: Cs,
          framer: Ts,
          useTinaModuleFetchByIds: Es,
          withSimpleErrorBoundary: Is
        } = r,
        zs = {
          Card: va,
          CardWithImageGallery: Oa,
          TextCard: Ss,
          ...r
        },
        As = Ts.withFadeIn(Is(({
          cards: e = [],
          size: a,
          name: t,
          title: s,
          description: r,
          disclaimer: n,
          customSlidesPerView: i = null,
          theme: o = "none",
          cardSizeBreakpoints: c = {},
          customAspectRatio: l = "3/1",
          titleBadge: d = null,
          id: g = ""
        }) => {
          const b = (0, m.useRef)(null),
            p = (0, F.map)(e, "id"),
            f = Es({
              ids: p
            }),
            [k, h] = (0, m.useState)(i),
            [v] = (0, u.useSearchParams)(),
            [y, j] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if ("fob" === a) {
              const e = v.get("section");
              if (e && "games" === e && !y && (j(!0), b.current)) {
                const e = 100;
                window.scrollTo(0, b.current.offsetTop - e)
              }
            }
          }, []), (0, m.useEffect)(() => {
            if (!b.current) return;
            const e = () => {
              if (!b.current) return;
              const e = i || window.getComputedStyle(b.current).getPropertyValue("--slides-per-view");
              h(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          });
          const x = (0, m.useMemo)(() => {
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
                  tina: l
                } = i, d = (0, F.clone)(l);
                (0, F.set)(d, "payload.meta.id", c);
                const m = p.filter(e => e !== t || e === t && !r);
                n.push((0, _.jsx)(z.TinaParser, {
                  components: zs,
                  tina: d,
                  componentProps: {
                    deckProps: {
                      size: a
                    },
                    tina: d,
                    id: c,
                    position: e,
                    sectionTitle: s,
                    theme: o,
                    cardIds: m
                  }
                }, c)), e += 1
              }
              return n
            }, [])
          }, [f, a]);
          return (0, _.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9cf8eaaa96e41e0c9b5a5a1745ded9986",
            "data-theme": o,
            ref: b,
            id: g,
            children: [(0, _.jsx)(Cs, {
              description: r,
              size: a,
              cardSizeBreakpoints: c,
              slideChildren: x,
              title: s,
              name: t,
              customSlidesPerView: k,
              customAspectRatio: l,
              titleBadge: d,
              theme: o
            }), n && (0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d6d0f9d842469dec608825829148dff6",
              children: (0, _.jsx)("span", {
                className: "rockstargames-sites-gta-gen9e22c0580e1e1d2471b4ca2e60e6b900f",
                children: (0, _.jsx)(Jt, {
                  html: n
                })
              })
            })]
          })
        }));
      var Ms = t(10475);
      const Ps = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        Ls = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Rs = e => e.scrollHeight > e.clientHeight;

      function Ds(e, a) {
        const t = {
          ...e
        };
        return (0, F.forOwn)(e, (e, s) => {
          if ("image" === s) {
            const e = t[s];
            t[s] = {
              ...e,
              prod: a
            }
          } else(0, F.isObject)(e) && !(0, F.isArray)(e) ? Ds(e, a) : (0, F.isArray)(e) && (t[s] = e.map(e => (0, F.isObject)(e) ? Ds(e, a) : e))
        }), t
      }
      const Os = (0, g.withTranslations)(({
          active: e,
          styles: a,
          title: t,
          itemNumber: s,
          inModalMode: r,
          openModalMode: n,
          element: i,
          upNext: o,
          mobileMode: c,
          refDeck: l,
          components: d,
          tina: u,
          prevPage: g,
          nextPage: p,
          onFocus: f,
          transitionStyle: k,
          selectedItemNumber: h,
          carouselTitle: v,
          sharedDraggingDelta: y,
          setSharedDraggingDelta: j,
          trapFocus: x
        }) => {
          const w = (0, U.useIntl)(),
            {
              track: N
            } = (0, b.useGtmTrack)(),
            S = (0, m.createRef)(),
            T = (0, m.createRef)(),
            E = (0, m.createRef)(),
            I = (0, m.createRef)(),
            [A, M] = (0, m.useState)(!1),
            [P, L] = (0, m.useState)(0),
            [R, D] = (0, m.useState)(0),
            [O, B] = (0, m.useState)(0),
            [G, $] = (0, m.useState)(0),
            [V, H] = (0, m.useState)(0),
            [q, W] = (0, m.useState)(!1),
            [K, Y] = (0, m.useState)(0),
            [X, Z] = (0, m.useState)(0),
            [J, Q] = (0, m.useState)(0),
            [ee, ae] = (0, m.useState)("700"),
            [te, se] = (0, m.useState)(-1),
            [re, ne] = (0, m.useState)(0),
            [ie, oe] = (0, m.useState)(0),
            [ce, le] = (0, m.useState)(0),
            [de, _e] = (0, m.useState)(!1),
            [me, ue] = (0, m.useState)(""),
            [ge, be] = (0, m.useState)(null),
            [pe, fe] = (0, m.useState)(!1),
            [ke, he] = (0, m.useState)(null),
            [ve, ye] = (0, m.useState)(!1),
            [je, xe] = (0, m.useState)(!1),
            we = (0, z.useTinaPayload)(),
            Ne = u?.payload?.meta?.cdn ?? !1 ?? we?.meta?.prod ?? !1,
            Se = (0, z.useTranslations)({
              payload: u?.payload,
              variables: u?.variables
            }),
            Ce = Se?.meta ?? {},
            Te = Ds(Se?.content?.[0], Ne),
            Ee = (0, m.useMemo)(() => Te?.images?.[0]?.image?.badge, [Te]),
            Ie = (0, m.useMemo)(() => Te.title ?? t ?? Ce?.title, [t, Ce?.title, Te.title]),
            ze = (0, C.S1)({
              alt: Te?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Te?.images?.[0]?.image?.alt ?? "",
              sources: Te?.images?.[0]?.image?.sources ?? [],
              prod: Ne
            }),
            Me = ze?.src?.mobile ?? ze?.src?.desktop ?? !1,
            Pe = (0, m.useMemo)(() => Ce?.foreignId, [Ce]),
            Le = (0, m.useMemo)(() => Ce?.foreignTitle, [Ce]),
            [Re, De] = (0, m.useState)(0),
            [Oe, Be] = (0, m.useState)(0),
            [$e, Ve] = (0, m.useState)(0),
            [Fe, He] = (0, m.useState)(0),
            [Ue, qe] = (0, m.useState)(!1),
            [We, Ke] = (0, m.useState)(0),
            [Ye, Xe] = (0, m.useState)(20),
            [Ze, Je] = (0, m.useState)(null),
            [Qe, ea] = (0, m.useState)(!1),
            aa = (0, m.useCallback)(e => {
              if (!0 === q || !r && !c || pe) return;
              const a = Ls(e);
              De(a.x), Be(a.y)
            }, [q, r]),
            ta = e => {
              aa(e)
            },
            sa = e => {
              if (!0 === q || 0 === Re || !r && !c || pe) return;
              const a = Ls(e),
                t = a.x > Re ? 1 : -1,
                s = Math.abs(Re - a.x);
              r && !c && s > Ye ? (ea(!0), ue(t > 0 ? "prev" : "next"), na()) : (qe(!0), Ke(s * t), j(s * t))
            },
            ra = e => {
              if (!0 === q || !r && !c || pe) return;
              const a = Ls(e),
                t = a.x > Re ? 1 : -1,
                s = Math.abs(Re - a.x),
                n = Math.abs(Oe - a.y);
              r && !c ? (na(), ue("")) : s > Ye && n < 25 ? (ea(!0), ue(t > 0 ? "prev" : "next"), na()) : na()
            },
            na = () => {
              W(!0), De(0), Be(0), qe(!1), Ke(0), j(0)
            },
            ia = e => {
              e ? (r || M(!0), r || c || (clearTimeout(te), se(setTimeout(() => {
                N({
                  event: "card_title_hover",
                  card_name: Ie,
                  card_id: s,
                  position: s,
                  view_name: `${Pe}/${Le}`,
                  source_content_id: Pe,
                  source_content_name: Le
                })
              }, 1e3)))) : (r || M(!1), r || c || clearTimeout(te))
            };
          return (0, m.useEffect)(() => {
            let e = K;
            A ? e = 0 : r && !c && (e = K), L(e)
          }, [A, c, r, R, G, X, J, O, K]), (0, m.useEffect)(() => {
            M(!(!r || !c))
          }, [r, c]), (0, m.useEffect)(() => {
            r && e && N({
              event: "virtualPageview",
              display_type: c ? "mobile" : "desktop",
              view_name: `${Pe}/${Ie}`,
              source_content_id: Pe,
              source_content_name: Le
            })
          }, [r, e]), (0, m.useEffect)(() => {
            const e = (0, F.debounce)((e, a) => {
              let t = 18;
              if (e?.documentElement && (t = Ps(e?.documentElement, "--root-font-size")), ie !== a.innerHeight && oe(a.innerHeight), l?.current) {
                Q(Ps(l.current, "--eventDeck-marginSm") * t);
                const e = t * Ps(l?.current, "--eventDeck-modalGutters"),
                  s = a?.innerWidth,
                  r = s - 2 * e;
                D(r), E.current && c && B(r), $(Ps(l.current, "--eventDeck-itemSize") * t), le(Ps(l.current, "--eventDeck-phaseOneTransitionDuration"));
                const n = Ps(l?.current, "--eventDeck-itemImageTitleMargins") * t,
                  i = T?.current?.clientHeight,
                  o = i + n;
                Number.isNaN(o) || Y(o), ne(Ps(l?.current, "--eventDeck-headerHeight") * t)
              }
              let s = Math.min(700, a.innerWidth);
              c || (s = 900), ae(`${s}`)
            }, 300);
            return window.addEventListener("resize", () => {
              e(document, window)
            }), e(document, window), () => {
              window.removeEventListener("resize", () => {
                e(document, window)
              })
            }
          }, [l, c]), (0, m.useEffect)(() => {
            if (S.current) {
              const e = S.current.clientHeight;
              Number.isNaN(e) || Z(e)
            }
          }, [S]), (0, m.useEffect)(() => {
            if (r && c && E.current && (E.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !r && c && E.current) {
              const e = 228 / R;
              E.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!c && E.current && (E.current.style.transform = null)
          }, [r, c, R, O]), (0, m.useEffect)(() => {
            const e = .5 * R,
              a = ie - re - 3 * J;
            H(R - (e < a ? e : a))
          }, [R, J, ie]), (0, m.useEffect)(() => {
            "next" === me ? (p(null, !0), ue("")) : "prev" === me && (g(null, !0), ue(""))
          }, [me]), (0, m.useEffect)(() => {
            Ve(0), He(0)
          }, [c]), (0, m.useEffect)(() => {
            c ? Xe(r ? 35 : 20) : r && Xe(50)
          }, [r, c]), (0, m.useEffect)(() => {
            if (null !== a?.transform) {
              const e = a?.transform?.split(",") ?? [],
                t = e[0].split("("),
                s = Number(t[1].replace("px", "")),
                r = Number(e[1].replace("px", ""));
              Ve(s), He(r)
            }
          }, [a]), (0, m.useEffect)(() => {
            if (!q) return;
            clearTimeout(ge);
            const e = setTimeout(() => {
              W(!1), De(0)
            }, 200);
            be(e)
          }, [q, 200]), (0, m.useEffect)(() => {
            if (!Qe) return;
            clearTimeout(Ze);
            const e = setTimeout(() => {
              ea(!1)
            }, 1e3);
            Je(e)
          }, [Qe]), (0, m.useEffect)(() => {
            r && clearTimeout(te), setTimeout(() => {
              _e(!de)
            }, ce)
          }, [r]), (0, m.useEffect)(() => (document.body.addEventListener("mouseleave", na), () => {
            document.body.removeEventListener("mouseleave", na)
          }), []), (0, m.useEffect)(() => {
            I.current ? ye(Rs(I.current)) : ye(!1), void 0 !== i && i.current ? xe(Rs(i.current)) : xe(!1)
          }, [i, I, e, r, de]), Te ? (0, _.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c02ee363d47108460ab7916fc955cd9b",
            ref: i,
            "data-item-position": s,
            "data-modal-mode": r,
            "data-active-item": e,
            "data-up-next": o,
            "data-transition": Ue || 0 !== y ? "none" : k,
            "data-scrollable": je,
            style: {
              ...a,
              transform: r && e && !c ? `translate3d(${$e+We}px, ${Fe}px, 0)` : c && !r ? `translate3d(${$e+y}px, ${Fe}px, 0)` : a?.transform
            },
            onClick: e => {
              Qe || (r ? r && !c && (s < h ? g(e, !0) : s > h && p(e, !0)) : n(e))
            },
            onMouseEnter: () => ia(!0),
            onMouseLeave: () => ia(!1),
            onFocus: e => (e => {
              f?.(e), ia(!0)
            })(e),
            onBlur: () => ia(!1),
            onTouchStart: ta,
            onTouchMove: sa,
            onTouchEnd: ra,
            onMouseDown: ta,
            onMouseMove: sa,
            onMouseUp: ra,
            onKeyUp: e => {
              "Enter" !== e.code && "Space" !== e.code || r || n(e)
            },
            onKeyDown: e => {
              "Tab" === e.key && e.shiftKey && r && (e.preventDefault(), x("backwards")), "Space" === e.code && e.preventDefault()
            },
            "aria-label": r ? w.formatMessage(Ge.events_deck_modal_group_label) : Ie,
            role: r ? "dialog" : "button",
            tabIndex: r ? -1 : 0,
            children: [(0, _.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dee75b8e3614051c8f0fc97e373e78e5",
              "data-full-header": A,
              style: {
                height: r && c ? `${R}px` : null,
                width: r && c ? `${R}px` : null
              },
              role: "figure",
              children: [Me && (0, _.jsx)("img", {
                ref: E,
                src: `${ze?.src?.mobile??ze?.src?.desktop}?im=Resize,width=${ee}`,
                alt: ze?.alt ?? "",
                style: {
                  width: 0 !== O && c ? `${O}px` : null,
                  height: 0 !== O && c ? `${O}px` : null
                }
              }), (0, _.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9dc279f97c134d6e7d30602288b8b10ae",
                "aria-hidden": "true",
                style: {
                  transform: !c || c && r ? `translate3d(0, ${P}px, 0)` : null
                },
                children: [Ee && (0, _.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9cfe252d5613a21c1d308c98566cabd21",
                  ref: S,
                  children: (0, _.jsx)(Ae, {
                    text: Ee
                  })
                }), (0, _.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9b311a78aea53383ab6bd5cbccb52ceeb",
                  tabIndex: -1,
                  ref: T,
                  "aria-hidden": "true",
                  children: Ie
                })]
              })]
            }), (0, _.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d212586e74ea4b4fe934beed9e339f78",
              ref: I,
              "aria-hidden": !r,
              tabIndex: r ? 0 : -1,
              onScroll: () => {
                fe(!0), na(), clearTimeout(ke);
                const e = setTimeout(() => {
                  fe(!1)
                }, 100);
                he(e)
              },
              style: {
                top: r && c ? `${R}px` : null,
                width: r && !c && e ? `${V}px` : null,
                touchAction: ve || c ? "unset" : "none"
              },
              children: [Ie && (0, _.jsx)("span", {
                className: "rockstargames-sites-gta-gen9da9ef865674c108ffd53cfab2ed2971a",
                role: "heading",
                children: Ie
              }), (0, _.jsx)("div", {
                className: "rockstargames-sites-gta-gen9abad8b0c98a7216d91b672492397e6a6",
                role: "text",
                children: (0, _.jsx)(z.TinaParser, {
                  components: d,
                  tina: {
                    meta: Ce,
                    payload: {
                      content: Te?.content
                    }
                  }
                })
              }), (0, _.jsx)("button", {
                className: "rockstargames-sites-gta-gen9a0b399d3bf191afcf00e7196639527d5",
                type: "button",
                onFocus: x,
                style: {
                  display: r ? "block" : "none"
                }
              })]
            })]
          }) : null
        }),
        Bs = "rockstargames-sites-gta-gen9eff7810cc71a3b63bfc3e58cbe4a0279",
        Gs = ({
          prevPage: e,
          prevBtnDisabled: a,
          nextPage: t,
          nextBtnDisabled: s,
          selectedItemNumber: r,
          itemsData: n,
          closeModalMode: i,
          inModalMode: o,
          controlsHidden: c,
          focusTrapControl: l,
          focusTrapDirection: d,
          setTriggerFocusCard: u
        }) => {
          const g = (0, U.useIntl)(),
            b = (0, m.createRef)(),
            p = (0, m.createRef)(),
            f = (0, m.createRef)();
          return (0, m.useEffect)(() => {
            l && ("backwards" === d ? f?.current?.focus() : a ? p?.current?.focus() : b?.current?.focus())
          }, [l, a]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a13ee8af1dd8f09d28c65e56abd782ef",
              "aria-hidden": c || "false",
              children: [(0, _.jsx)("button", {
                className: Bs,
                ref: b,
                type: "button",
                onClick: e,
                disabled: a,
                "aria-label": o ? g.formatMessage(Ge.events_deck_modal_previous_aria_label) : g.formatMessage(Ge.events_deck_previous_aria_label),
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && o && (e.preventDefault(), u(!0))
                }
              }), (0, _.jsxs)("span", {
                className: "rockstargames-sites-gta-gen9a6b11adaa46a0c2acc5893d2f5da04f1",
                "aria-hidden": !o,
                children: [(0, _.jsx)(hs, {
                  "aria-live": "polite",
                  children: g.formatMessage(Ge.events_deck_paging_label, {
                    currentPage: r + 1,
                    totalPages: n.length
                  })
                }), (0, _.jsxs)("span", {
                  "aria-hidden": "true",
                  className: "rockstargames-sites-gta-gen9eb9f07e9a2e17e70e61b73dec95da6c0",
                  children: [r + 1, (0, _.jsx)("span", {
                    className: "rockstargames-sites-gta-gen9aad28b229162f1d7494a2de3a3b6b547"
                  }), n.length]
                })]
              }), (0, _.jsx)("button", {
                className: Bs,
                ref: p,
                type: "button",
                onClick: t,
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && a && o && (e.preventDefault(), u(!0))
                },
                disabled: s,
                "aria-label": o ? g.formatMessage(Ge.events_deck_modal_next_aria_label) : g.formatMessage(Ge.events_deck_next_aria_label)
              })]
            }), (0, _.jsx)("button", {
              className: "rockstargames-sites-gta-gen9fb0b7933375b44858b7e92cdea86ee81",
              type: "button",
              onClick: i,
              ref: f,
              onKeyDown: e => {
                "Tab" === e.key && !e.shiftKey && o && (e.preventDefault(), u(!0))
              },
              "aria-label": g.formatMessage(Ge.events_deck_modal_close_label),
              "aria-hidden": !o,
              tabIndex: o ? 0 : -1
            })]
          })
        },
        $s = (0, U.withIntl)(e => {
          const {
            setBodyIsLocked: a
          } = (0, g.useBodyScrollable)("EventsDeck"), {
            title: t
          } = e, {
            track: s
          } = (0, b.useGtmTrack)(), [r, n] = (0, m.useState)(!1), i = (() => {
            const {
              data: e
            } = (0, g.useQuery)(Ca.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), a = e?.tinaModulesList?.results, t = (0, F.map)(a, "id");
            return (0, Ce.X)({
              ids: t
            })
          })(), [o, c] = (0, m.useState)([]), [l, u] = (0, m.useState)(null), [p, f] = (0, m.useState)(0), [k, h] = (0, m.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [v, y] = (0, m.useState)(!1), j = (0, m.createRef)(), [x, w] = (0, m.useState)(null), N = (0, m.createRef)(), S = (0, m.createRef)(), [C, T] = (0, m.useState)([]), [E, I] = (0, m.useState)(!0), [A, M] = (0, m.useState)(!1), [P, L] = (0, m.useState)(!1), [R, D] = (0, m.useState)([]), [O, B] = (0, m.useState)(404), [G, $] = (0, m.useState)(808), [V, U] = (0, m.useState)(672), [q, W] = (0, m.useState)(336), [K, Y] = (0, m.useState)(0), [X, Z] = (0, m.useState)(0), [J, Q] = (0, m.useState)(0), [ee, ae] = (0, m.useState)(0), [te, se] = (0, m.useState)(0), [re, ne] = (0, m.useState)(!1), ie = !!(0, g.usePrevious)(re), [oe, ce] = (0, m.useState)(window.innerWidth), [le, de] = (0, m.useState)(0), [_e, me] = (0, m.useState)(0), [ue, ge] = (0, m.useState)(0), [be, pe] = (0, m.useState)(0), [he, ve] = (0, m.useState)(0), [ye, je] = (0, m.useState)(0), [xe, we] = (0, m.useState)(0), [Ne, Se] = (0, m.useState)(0), [Te, Ie] = (0, m.useState)(-1e3), [ze, Ae] = (0, m.useState)(0), [Me, Pe] = (0, m.useState)(50), [Le, Re] = (0, m.useState)(0), [De, Oe] = (0, m.useState)(!1), [Be, Ge] = (0, m.useState)(768), [$e, Ve] = (0, m.useState)(!1), [Fe, He] = (0, m.useState)(!1), [Ue, qe] = (0, m.useState)(!1), [We, Ke] = (0, m.useState)(!1), [Ye, Xe] = (0, m.useState)(!1), [Ze, Je] = (0, m.useState)(1e3), [Qe, ea] = (0, m.useState)(1.2), [aa, ta] = (0, m.useState)(0), [sa, ra] = (0, m.useState)(!1), [na, ia] = (0, m.useState)(!1), [oa, ca] = (0, m.useState)(!0), [la, da] = (0, m.useState)(!1), [_a, ma] = (0, m.useState)(!1), [ua, ga] = (0, m.useState)(null), [ba, pa] = (0, m.useState)(100), [fa, ka] = (0, m.useState)(!1), [ha, va] = (0, m.useState)({}), [ya, ja] = (0, m.useState)(""), [xa, wa] = (0, m.useState)(0), [Na, Sa] = (0, m.useState)(!1), [Ta, Ea] = (0, m.useState)(!1), [Ia, za] = (0, m.useState)(0), [Aa, Ma] = (0, m.useState)(0), [Pa, La] = (0, m.useState)(100), [Ra, Da] = (0, m.useState)(!1), [Ba, Ga] = (0, m.useState)(!1), [$a, Va] = (0, m.useState)(!1), [Fa, Ha] = (0, m.useState)(!1), [Ua, qa] = (0, m.useState)("forward"), Wa = () => oe * le + Me, Ka = () => !1 === De ? Qe : 1, Ya = e => e === xe - 1 || e === xe + 1, Xa = () => -1 * ye - be, Za = (e, a = !0) => {
            if (!0 === De) return 0;
            const t = e.itemNumber % 2 == 0,
              s = O * Qe;
            if (!0 === t && 0 !== e.itemNumber) {
              const t = Ps(e?.element?.current, "top");
              let r = t - J;
              return !1 === a && (r -= t), -1 * (.5 * s + r) + aa
            }
            return J - .5 * s + aa
          }, Ja = (e, a, t = !0) => {
            let s = Xa();
            !1 === t && (s = 0);
            const r = oe * le,
              n = !1 === De ? O * Ka() : r;
            return e.inModalMode && De ? -1 === a ? Wa() * (xe - e.itemNumber) * -1 - e.styles.left : Wa() * (e.itemNumber - xe) - e.styles.left : -1 === a ? -1 * e.styles.left - n - Me + s : r - e.styles.left + Me + s
          }, Qa = (e, a, t) => {
            -1 === a && (M(!1), I(!0)), M(!1 === t && e >= a || !0 === t && e + 1 === a), I(e <= 0)
          }, et = (e, a = !1) => {
            if (_a || la) return;
            if (ma(!0), re) return void((e = !1) => {
              if (xe + 1 >= o.length) return;
              const a = C[xe + 1]?.tina?.payload?.meta?.title ?? `card-${xe+1}`;
              s({
                event: e ? "modal_swipe" : "modal_next",
                card_name: a,
                card_id: xe + 1,
                position: xe + 1,
                view_name: `${C[xe+1].source_content_id}/${a}`,
                source_content_id: C[xe + 1].source_content_id,
                source_content_name: C[xe + 1].source_content_name
              }), Qa(xe + 1, o.length, !0), De ? De && T(C.map(e => {
                e.itemNumber === xe - 1 ? e.upNext = !1 : e.itemNumber === xe + 2 ? e.upNext = !0 : e.itemNumber === xe + 1 ? e.active = !0 : e.itemNumber === xe && (e.upNext = !0, e.active = !1);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t -= Wa();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              })) : T(C.map(e => (e.itemNumber === xe - 1 ? e.upNext = !1 : e.itemNumber === xe + 2 ? e.upNext = !0 : e.itemNumber === xe + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Xa()}px, ${aa}px, 0) scale(1)`
              }) : e.itemNumber === xe && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ja(e,-1)}px, ${Za(e)}px, 0) scale(${Ka()})`
              }), e))), we(xe + 1)
            })(a);
            const r = he + 1;
            if (!(r > te))
              if (s({
                  event: a ? "carousel_swipe" : "carousel_next",
                  element_placement: t?.toLowerCase() ?? ""
                }), Qa(r, te, !1), De) {
                let e = r * q * -1;
                e < Te && (e = Te, M(!0), I(!1), ve(te)), ve(r), T(C.map(a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a)))
              } else {
                let e = ye - X;
                ve(r), e < Te && (e = Te, M(!0), I(!1), ve(te)), je(e)
              }
          }, at = (e, a = !1) => {
            if (_a || la) return;
            if (ma(!0), !0 === re) return void((e = !1) => {
              if (_a) return;
              if (xe - 1 < 0) return;
              const a = C[xe - 1]?.tina?.payload?.meta?.title ?? "card-" + (xe - 1);
              s({
                event: e ? "modal_swipe" : "modal_previous",
                element_placement: t?.toLowerCase(),
                card_name: a,
                card_id: xe - 1,
                position: xe - 1,
                view_name: `${C[xe-1].source_content_id}/${a}`,
                source_content_id: C[xe - 1].source_content_id,
                source_content_name: C[xe - 1].source_content_name
              }), Qa(xe - 1, o.length, !0), De || T(C.map(e => (e.itemNumber === xe + 1 ? e.upNext = !1 : e.itemNumber === xe - 2 ? e.upNext = !0 : e.itemNumber === xe ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${Ja(e,1)}px, ${Za(e)}px, 0) scale(${Ka()})`
              }) : e.itemNumber === xe - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Xa()}px, ${aa}px, 0) scale(1)`
              }), e))), De && T(C.map(e => {
                e.itemNumber === xe + 1 ? e.upNext = !1 : e.itemNumber === xe - 2 ? e.upNext = !0 : e.itemNumber === xe ? (e.upNext = !0, e.active = !1) : e.itemNumber === xe - 1 && (e.active = !0);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t += Wa();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              })), we(xe - 1)
            })(a);
            const r = he - 1;
            if (!(r < 0))
              if (s({
                  event: a ? "carousel_swipe" : "carousel_previous",
                  element_placement: t?.toLowerCase()
                }), Qa(r, te, !1), De) {
                let e = r * q * -1;
                e > 0 && (e = 0, I(!0), M(!1), ve(0)), ve(r), T(C.map(a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a)))
              } else {
                let e = ye + X;
                ve(r), (e > 0 || 0 === e || -1 * e < G) && (e = 0, I(!0), M(!1), ve(0)), je(e)
              }
          }, tt = e => {
            if (Na || re || De) return;
            const a = Ls(e);
            wa(a.x)
          }, st = e => {
            if (Na || 0 === xa || re || De) return;
            const a = Ls(e),
              t = a.x > xa ? 1 : -1;
            let s = Math.abs(xa - a.x) * t;
            (0 === he && 1 === t || he === te && -1 === t) && (s *= .35), Ea(!0), za(s)
          }, rt = e => {
            if (Na || re || De) return;
            const a = Ls(e),
              t = a.x > xa ? 1 : -1,
              s = Math.abs(xa - a.x);
            ja(s > Pa ? t > 0 ? "prev" : "next" : ""), nt()
          }, nt = () => {
            Sa(!0), wa(0), za(0), Ea(!1)
          }, it = e => {
            Ta && (rt(e), Ea(!1))
          }, ot = (e, a, t = "") => e.map((e, s) => {
            let r = s * q,
              n = s;
            !1 === De && (n = Math.ceil(.5 * s) + 1, s > 0 && (r = 2 === n ? V : V + q * (n - 2)));
            const i = R[s];
            return i?.current && (i.current.scrollTop = 0), {
              ...e,
              mobileMode: De,
              itemNumber: s,
              columnNumber: n,
              inModalMode: !1,
              upNext: !0,
              active: !1,
              openModalMode: dt,
              element: i,
              transitionStyle: a,
              styles: {
                left: r,
                transform: "" === t ? null : t,
                height: null,
                top: null
              },
              trapFocus: _t
            }
          }), ct = e => {
            if (De) return;
            T(ot(o, "cardClose"));
            const a = Math.ceil((C[e].columnNumber + 1) / K) - 1;
            ve(a);
            let t = a * X * -1;
            Le < _e ? (t = 0, I(!0), M(!0), ve(0)) : t < Te ? (t = Te, I(!1), M(!0), ve(te)) : Qa(a, te, !1), je(t), we(0)
          }, lt = () => {
            const e = C[xe]?.tina?.payload?.meta?.title ?? `card-${xe}`;
            s({
              event: "modal_close",
              element_placement: t?.toLowerCase(),
              card_name: e,
              card_id: xe,
              position: xe,
              view_name: `${C[xe].source_content_id}/${e}`,
              source_content_id: C[xe].source_content_id,
              source_content_name: C[xe].source_content_name
            });
            const a = C[xe]?.element?.current;
            if (De) {
              let e = xe * q * -1;
              e < Te && (e = Te, M(!0), I(!1), ve(te)), ve(xe), Qa(xe, te, !1), T(ot(o, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else ct(xe);
            N.current.style.transform = "translate(0px, 0px)", N.current.style.transition = "all var(--eventDeck-transitionCardClose)", ra(!1), Ke(!1), ne(!1), He(!1), Ve(!1), Xe(!1), setTimeout(() => {
              qe(!0), a.focus()
            }, Ze)
          };
          (0, m.useEffect)(() => {
            !1 !== Ue && (qe(!1), ra(!1), x.style.zIndex = null, T(C.map(e => (e.transitionStyle = "", e))))
          }, [Ue]);
          const dt = e => {
              setTimeout(() => {
                va(e), ka(!0)
              }, 1)
            },
            _t = e => {
              Ha(!0), qa(e), setTimeout(() => {
                Ha(!1)
              }, 1e3)
            };
          (0, m.useEffect)(() => {
            $a && (Va(!1), C[xe]?.element?.current?.focus())
          }, [$a]), (0, m.useEffect)(() => {
            if (!fa) return;
            if (ka(!1), _a) return;
            we(Number(ha?.target?.dataset?.itemPosition)), He(!0), da(!0), oa && ca(!1);
            const e = C[ha?.target?.dataset?.itemPosition].source_content_id,
              a = C[ha?.target?.dataset?.itemPosition].source_content_name,
              r = C[ha?.target?.dataset?.itemPosition]?.tina?.payload?.meta?.title;
            s({
              event: "card_click",
              element_placement: t?.toLowerCase(),
              card_name: r ?? `card-${xe}`,
              card_id: ha?.target?.dataset?.itemPosition,
              position: ha?.target?.dataset?.itemPosition,
              view_name: `${e}/${r}`,
              source_content_id: e,
              source_content_name: a
            })
          }, [fa]), (0, m.useEffect)(() => {
            if (!Fe || re) return;
            He(!1);
            const e = (() => {
              const e = x?.getBoundingClientRect().top;
              return ta(-1 * (e - p)), -1 * (e - 140)
            })();
            De && T(C.map(e => {
              const a = e.itemNumber > xe + 3 || e.itemNumber < xe - 3;
              return e.styles = {
                ...e.styles,
                display: a ? "none" : null,
                transition: a ? "none" : null
              }, e
            })), x.style.zIndex = "var(--eventDeck-zIndexOverlay)", ra(!0), N.current && (N.current.style.transition = "all var(--eventDeck-transitionCardOpen)", N.current.style.transform = `translate(${-1*be}px, ${e}px)`), Ke(!0), setTimeout(() => {
              Ve(!0)
            }, 1)
          }, [Fe]);
          const mt = () => {
            T(C.map((e, a) => {
              e.active = a === xe, e.inModalMode = !0, e.transitionStyle = "cardOpen", De && (e.upNext = Ya(e.itemNumber));
              const t = !De;
              let s = 0;
              if (De) {
                const e = Ne + 5 * p;
                s = window.innerHeight - e
              }
              return e.itemNumber < xe ? e.styles = {
                ...e.styles,
                height: De ? `${s}px` : null,
                transform: `translate3d(${Ja(e,-1,t)}px, ${aa}px, 0) scale(${Ka()})`
              } : e.itemNumber > xe ? e.styles = {
                ...e.styles,
                height: De ? `${s}px` : null,
                transform: `translate3d(${Ja(e,1,t)}px, ${aa}px, 0) scale(1)`
              } : e.itemNumber === xe && (e.styles = De ? {
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
          (0, m.useEffect)(() => {
            !1 !== $e && !0 !== re && (ne(!0), Ve(!1), Qa(xe, C.length, !0), N.current && (N.current.style.transition = "all var(--eventDeck-transitionCardOpen)", N.current.style.transform = `translate(${-1*be}px, ${aa}px)`), mt(), De ? (je(0), da(!1), ia(!0)) : Xe(!0))
          }, [$e]), (0, m.useEffect)(() => {
            na && (ia(!1), T(C.map(e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e))))
          }, [na]);
          const ut = (e = !1) => {
            T(C.map(a => {
              if (a.upNext = Ya(a.itemNumber), a.itemNumber !== xe) {
                let e = Ja(a, 1);
                a.itemNumber < xe && (e = Ja(a, -1)), a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, ${Za(a)}px, 0) scale(${Ka()})`
                }
              } else a.itemNumber === xe && !De && e && (a.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${Xa()}px, ${aa}px, 0) scale(1)`
              });
              return a
            }))
          };
          (0, m.useEffect)(() => {
            !1 !== Ye && !0 !== De && (Xe(!1), setTimeout(() => {
              ut(), da(!1)
            }, 1))
          }, [Ye]), (0, m.useEffect)(() => {
            T(ot(o, ""))
          }, [V, q, o]), (0, m.useEffect)(() => {
            const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
            Da(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
          }, []), (0, m.useEffect)(() => {
            const e = ie !== re,
              t = window.document.body.style.overflowY;
            return re ? (e && (window.document.body.style.overflowY = "hidden", a(!0)), Ra && Ga(!0)) : Ta || re || (e && (window.document.body.style.overflowY = t, a(!1)), Ra && Ba && Ga(!1)), () => {
              window.document.body.style.overflowY = t
            }
          }, [re, Ta]), (0, m.useEffect)(() => {
            if (!_a) return;
            clearTimeout(ua);
            const e = setTimeout(() => {
              ma(!1)
            }, ba);
            ga(e)
          }, [_a]), (0, m.useEffect)(() => {
            v && setTimeout(() => {
              y(!1)
            }, 3e3)
          }, [v]), (0, m.useEffect)(() => {
            y(!0), je(0), ve(0);
            let e = Math.ceil(Math.ceil(Le / q) / K);
            De && (e = C.length - 1), e < 0 && (e = 1), Qa(0, e, !1), re && lt()
          }, [De]), (0, m.useEffect)(() => {
            N.current && !re && (N.current.style.transform = "")
          }, [N, De, re]), (0, m.useEffect)(() => {
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
          }, [i]), (0, m.useEffect)(() => {
            D(o.map(() => (0, m.createRef)()))
          }, [o]), (0, m.useEffect)(() => {
            const e = e => {
              const {
                key: a
              } = e;
              "ArrowLeft" === a ? at(0, !1) : "ArrowRight" === a ? et(0, !1) : "Escape" === a && re && lt()
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }, [_a, la, re, N]), (0, m.useEffect)(() => {
            if (N.current) {
              let e = N?.current?.clientHeight;
              e += Ps(N?.current, "margin-top"), e += Ps(N?.current, "margin-bottom"), Se(e)
            }
          }, [N, S]), (0, m.useEffect)(() => {
            re && (() => {
              const e = x?.getBoundingClientRect().top,
                a = -1 * (e - p);
              if (T(C.map(e => {
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
          }, [De, re, aa]), (0, m.useEffect)(() => {
            re || (Le < le * oe && 0 === he ? (je(0), M(!0), I(!0)) : ye < Te ? (M(!0), I(!1), ve(te), je(Te)) : ye < 0 && (M(!1), ve(te - 1)), Le > le * oe && A && M(!1))
          }, [Te]), (0, m.useEffect)(() => {
            if (j.current) {
              w(j.current);
              const e = Ps(document.documentElement, "--root-font-size"),
                a = Ps(j.current, "--eventDeck-modalGutters") * e,
                t = Ps(j.current, "--eventDeck-collapsedMaxWidth");
              ge(t);
              let s = oe - 2 * a;
              s > t && (s = t), me(s), de(s / oe);
              const r = 2 * a + s;
              let n = 0;
              r < oe && (n = .5 * (oe - r)), pe(n);
              let i = Ps(j.current, "--eventDeck-modalBottomGutter");
              i *= e;
              const c = window.innerHeight - (Ne + i);
              Q(.5 * s < c ? s / 4 : .5 * c);
              const d = Ps(j.current, "--eventDeck-mobileBreakpoint");
              Ge(d);
              let _ = Ps(j.current, "--eventDeck-itemSize");
              _ *= e, B(_);
              let m = Ps(j.current, "--eventDeck-modalGutterGap");
              m *= e, Pe(m);
              let g = Ps(j.current, "--eventDeck-insideMargin");
              g *= e;
              const b = !1 === De ? 2 * _ + g : _ + g;
              $(b), U(b + g);
              const p = _ + g;
              W(p);
              let k = Math.ceil(.5 * (o.length - 1)) * p + b;
              De && (k = o.length * p), Re(k), 0 !== Le && Ie(-1 * Le + s);
              let h = Math.ceil(Math.ceil(k / p) / K);
              (De || re) && (h = C.length - 1), se(h);
              const v = Ps(j.current, "--eventDeck-itemScaleUpAmount");
              ea(v), Je(Ps(j.current, "--eventDeck-cardCloseTransitionDuration")), f(Ps(j.current, "--eventDeck-itemImageTitleMargins") * e), null !== l && e !== l && (u(e), re && ut()), null === l && u(e)
            }
          }, [j, o]), (0, m.useEffect)(() => {
            if (re && !De) {
              ut();
              const e = x?.getBoundingClientRect().top,
                a = -1 * (e - p);
              a !== aa && ta(a)
            }
          }, [k]), (0, m.useEffect)(() => {
            L(!(!E || !A || re))
          }, [E, A]), (0, m.useEffect)(() => {
            const e = (0, F.debounce)(e => {
              ce(e), Oe(e < Be);
              const a = (1 - le) / 2;
              Ae(e * a);
              const t = Math.floor(_e / q);
              Y(t);
              let s = t * q;
              s > ue && (s = ue), Z(s), ae(e - e * a);
              const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (r !== k && h(r), re && r === k && !v) {
                const e = x?.getBoundingClientRect().top,
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
          }, [q, le, re, De]), (0, m.useEffect)(() => {
            !1 !== re && !0 !== v && (De ? mt() : ut(!0))
          }, [ee, X, Me, O, oe, ze, J, aa]), (0, m.useEffect)(() => {
            const e = () => {
              if (j.current && oa) {
                const e = j.current.getBoundingClientRect(),
                  a = .2 * window.innerHeight;
                window.innerHeight - e.top >= a && ca(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }, [j]);
          const gt = (0, m.useCallback)(() => {
            if (null !== j.current && !r) {
              const {
                top: a
              } = j?.current?.getBoundingClientRect() || 0;
              a <= .6 * window.innerHeight && (s({
                event: "page_section_impression",
                element_placement: e?._memoq?.title?.toLowerCase()
              }), n(!0))
            }
          }, [j]);
          (0, m.useEffect)(() => (window.addEventListener("scroll", gt), () => {
            window.removeEventListener("scroll", gt)
          }), [gt, j]), (0, m.useEffect)(() => {
            "next" === ya ? (et(0, !0), ja("")) : "prev" === ya && (at(0, !0), ja(""))
          }, [ya]), (0, m.useEffect)(() => {
            j.current && j.current.addEventListener("mouseleave", () => {
              Ta && nt()
            })
          }, [j, Ta]), (0, m.useEffect)(() => (document.body.addEventListener("mouseleave", it), () => {
            document.body.removeEventListener("mouseleave", it)
          }), [Ta]), (0, m.useEffect)(() => {
            Na && setTimeout(() => {
              Sa(!1), wa(0)
            }, ba)
          }, [Na]), (0, m.useEffect)(() => {
            La(De ? 20 : 100)
          }, [De]), (0, m.useEffect)(() => {
            pa(re ? 500 : 100)
          }, [re]);
          const bt = e => {
              e.currentTarget !== e.target || re || ct(e.target.dataset.itemPosition)
            },
            pt = (0, z.useTinaComponents)(),
            ft = (0, m.useMemo)(() => ({
              ...pt,
              CardWithImageGallery: Oa,
              HTMLElement: H,
              ImageWithBadge: ke.A,
              Carousel: d.A,
              GroupOfItems: Ee.default,
              UnorderedList: fe.A
            }), [pt]),
            kt = (0, m.useMemo)(() => C.map(e => (0, m.createElement)(Os, {
              ...e,
              refDeck: j,
              key: e?.id ?? e?.sync_hash,
              components: ft,
              prevPage: at,
              nextPage: et,
              onFocus: bt,
              loadCssRawValue: Ps,
              selectedItemNumber: xe,
              carouselTitle: t,
              sharedDraggingDelta: Aa,
              setSharedDraggingDelta: Ma
            })), [C, j, ft, at, et, xe]);
          return !kt?.length || kt.length <= 0 ? null : (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b3206f796ddd61f3b6d1974ea73a4f22",
              "data-modal-mode": We,
              "aria-hidden": "true"
            }), (0, _.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e623ea950c02afbb9d28949ca4701ca4",
              "data-modal-mode": re,
              "data-faded": oa,
              ref: j,
              onTouchStart: tt,
              onTouchMove: st,
              onTouchEnd: rt,
              onMouseDown: tt,
              onMouseMove: st,
              onMouseUp: rt,
              tabIndex: -1,
              role: "presentation",
              children: [(0, _.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b8d0a147dd4f1835ba5495bac02f4c11",
                "aria-hidden": "true"
              }), (0, _.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9a758545d118b90def20e860fe541c26e",
                "data-modal-mode": re,
                ref: N,
                "data-animating": sa,
                children: [(0, _.jsx)("h2", {
                  className: "rockstargames-sites-gta-gen9be12152c36226103d53925a82ba66452",
                  children: t
                }), (0, _.jsx)(Gs, {
                  prevPage: at,
                  prevBtnDisabled: E,
                  nextPage: et,
                  nextBtnDisabled: A,
                  selectedItemNumber: xe,
                  itemsData: o,
                  closeModalMode: lt,
                  inModalMode: re,
                  controlsHidden: P,
                  focusTrapControl: Fa,
                  setTriggerFocusCard: Va,
                  focusTrapDirection: Ua
                }), (0, _.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c4f4d692febb9861a621596f22e32d93",
                  id: "eventsDeck-content",
                  role: "region",
                  "aria-live": "polite",
                  children: `${xe+1}/${o.length} ${C[xe]?.tina?.payload?.meta?.title}`
                })]
              }), (0, _.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f369e1390b3aa251df43bea9c55634f2",
                "data-modal-mode": re,
                "data-is-dragging": Ta,
                style: {
                  transform: `translate3d(${ye+Ia}px, 0, 0)`,
                  width: `${Le}px`
                },
                ref: S,
                children: kt
              })]
            })]
          })
        }, ra);
      var Vs = t(34649),
        Fs = t(59139),
        Hs = t(539),
        Us = t(88023),
        qs = t(4522),
        Ws = t(36644),
        Ks = t(80395),
        Ys = t(23331),
        Xs = t(1088),
        Zs = t(2841),
        Js = t(43945),
        Qs = t(86981),
        er = t(43917),
        ar = t(62777),
        tr = t(45327),
        sr = t(31655);
      const rr = JSON.parse('{"de-DE":{"bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","decorative_video_replay_button_label":"Wiederholen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Video wird wiedergegeben","hp_hero_stop_button_label":"Video angehalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","job_card_bookmark_action":"Markieren","job_card_created_by":"Erstellt von","job_card_image_alt_text":"Screenshot vom Job {name}","job_card_report_action":"Melden","job_card_share_action":"Teilen","job_card_updated_date":"Aktualisiert: {date}","job_card_verified_by":"Verifiziert von","job_dialog_bookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen markierten Job sehen zu können – Jobs können nur im Spiel bewertet werden, nachdem sie gespielt wurden.","job_dialog_bookmarked_heading":"Job markiert: <b>{name}</b>","job_dialog_bookmarked_title":"Job markiert","job_dialog_confirmation_button":"OKAY","job_dialog_error_body":"Es gab einen Fehler bei dem Versuch, einen Job zu markieren/eine Markierung zu entfernen. Bitte versuche es erneut.","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Fehler","job_dialog_unbookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen Job nicht länger in deinen Markierungen sehen zu können.","job_dialog_unbookmarked_heading":"Job nicht mehr markiert: <b>{name}</b>","job_dialog_unbookmarked_title":"Job nicht mehr markiert","job_type_adversary_mode":"Gegner-Modus","job_type_air_race":"Luftrennen","job_type_arena_deathmatch":"Arena-Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Radrennen","job_type_capture":"Capture","job_type_contact_mission":"Kontaktmission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Dragsterrennen","job_type_drift_race":"Driftrennen","job_type_foot_race":"Rennen zu Fuß","job_type_hao_special_works_race":"HSW-Rennen","job_type_heist":"Raubüberfall","job_type_heist_prep":"Raubüberfall-Austrüstungsmission","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Landrennen","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission-Creator","job_type_open_wheel_race":"Open-Wheel-Rennen","job_type_parachuting":"Fallschirmsprung","job_type_pursuit_race":"Verfolgungsrennen","job_type_race":"Rennen","job_type_random_mission":"Zufällige Mission","job_type_special_race":"Spezialrennen","job_type_street_race":"Straßenrennen","job_type_stunt_race":"Stuntrennen","job_type_survival":"Überlebenskampf","job_type_target":"Zielscheibenrennen","job_type_team_deathmatch":"Team-Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Verwandlungsrennen","job_type_unknown":"Unbekannt","job_type_vehicle_deathmatch":"Fahrzeug-Deathmatch","job_type_water_race":"Seerennen","lightbox_close_button":"Schließen","login_dialog_body":"Du musst dich erst anmelden, um diese Inhalte zu sehen.","login_dialog_signin_button":"Anmelden","login_dialog_signup_button":"Registrieren","login_dialog_title":"Anmelden erforderlich","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details_amp":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details_amp":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","web_offer_claim_dialog_close":"schließen","web_offer_claim_error_state_button":"Erneut versuchen","web_offer_claim_error_state_icon_label":"Fehler-Symbol","web_offer_claim_exists_state_icon_label":"Erfolgssymbol","web_offer_claim_link_account_state_icon_label":"Fehler-Symbol","web_offer_claim_loading_state":"lädt","web_offer_claim_success_state_icon_label":"Erfolgssymbol"},"en-US":{"bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Video Playing","hp_hero_stop_button_label":"Video Stopped","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","job_card_bookmark_action":"Bookmark","job_card_created_by":"Created by","job_card_image_alt_text":"Screenshot of {name} job","job_card_report_action":"Report","job_card_share_action":"Share","job_card_updated_date":"Updated {date}","job_card_verified_by":"Verified by","job_dialog_bookmarked_body":"You will need to restart Grand Theft Auto Online to see this bookmarked job - jobs can only be rated in-game, after they have been played.","job_dialog_bookmarked_heading":"Job Bookmarked: <b>{name}</b>","job_dialog_bookmarked_title":"Job Bookmarked","job_dialog_confirmation_button":"OK","job_dialog_error_body":"There was an error when attempting to bookmark/unbookmark the job. Please try again","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"You will need to restart Grand Theft Auto Online to no longer see this job in your bookmarks.","job_dialog_unbookmarked_heading":"Job Unbookmarked: <b>{name}</b>","job_dialog_unbookmarked_title":"Job Unbookmarked","job_type_adversary_mode":"Adversary Mode","job_type_air_race":"Air Race","job_type_arena_deathmatch":"Arena Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Bike Race","job_type_capture":"Capture","job_type_contact_mission":"Contact Mission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Drag Race","job_type_drift_race":"Drift Race","job_type_foot_race":"Foot Race","job_type_hao_special_works_race":"Hao\'s Special Works Race","job_type_heist":"Heist","job_type_heist_prep":"Heist Prep","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Land Race","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission Creator","job_type_open_wheel_race":"Open Wheel Race","job_type_parachuting":"Parachuting","job_type_pursuit_race":"Pursuit Race","job_type_race":"Race","job_type_random_mission":"Random Mission","job_type_special_race":"Special Vehicle Race","job_type_street_race":"Street Race","job_type_stunt_race":"Stunt Race","job_type_survival":"Survival","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Team Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Transform Race","job_type_unknown":"Unknown","job_type_vehicle_deathmatch":"Vehicle Deathmatch","job_type_water_race":"Sea Race","lightbox_close_button":"Close","login_dialog_body":"You need to sign in first to interact with this content","login_dialog_signin_button":"Sign In","login_dialog_signup_button":"Sign Up","login_dialog_title":"Sign In Required","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","web_offer_claim_dialog_close":"close","web_offer_claim_error_state_button":"Try Again","web_offer_claim_error_state_icon_label":"Error Icon","web_offer_claim_exists_state_icon_label":"Success Icon","web_offer_claim_link_account_state_icon_label":"Error Icon","web_offer_claim_loading_state":"loading","web_offer_claim_success_state_icon_label":"Success Icon"},"es-ES":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Volver a ver","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproduciendo vídeo","hp_hero_stop_button_label":"Vídeo en pausa","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creada por","job_card_image_alt_text":"Captura de pantalla de la actividad {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizada el {date}","job_card_verified_by":"Verificada por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Ha habido un error al intentar marcar o eliminar la marca de esta actividad. Vuelve a intentarlo","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tu lista de actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad no marcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad no marcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena War","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misiones de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de drift","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar del golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de coches de competición","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Partida de supervivencia","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Para interactuar con este contenido debes iniciar sesión.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Debes iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","web_offer_claim_dialog_close":"Cerrar","web_offer_claim_error_state_button":"Vuelve a intentarlo","web_offer_claim_error_state_icon_label":"Icono de error","web_offer_claim_exists_state_icon_label":"Icono de aprobación","web_offer_claim_link_account_state_icon_label":"Icono de error","web_offer_claim_loading_state":"Cargando","web_offer_claim_success_state_icon_label":"Icono de aprobación"},"es-MX":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Repetir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproduciendo video","hp_hero_stop_button_label":"Video detenido","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creado por","job_card_image_alt_text":"Captura de pantalla del trabajo {name}","job_card_report_action":"Reportar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizado {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Las actividades solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Se produjo un error al intentar marcar o desmarcar la actividad. Inténtalo de nuevo.","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tus actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad desmarcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad desmarcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena de Motores","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misión de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de derrapes","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar de golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de ruedas descubiertas","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Supervivencia","job_type_target":"Carrera de ataque al objetivo","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Necesitas iniciar sesión para poder interactuar con este contenido.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Necesitas iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","web_offer_claim_dialog_close":"cerrar","web_offer_claim_error_state_button":"Volver a intentar","web_offer_claim_error_state_icon_label":"Ícono de error","web_offer_claim_exists_state_icon_label":"Ícono de aprobado","web_offer_claim_link_account_state_icon_label":"Ícono de error","web_offer_claim_loading_state":"cargando","web_offer_claim_success_state_icon_label":"Ícono de aprobado"},"fr-FR":{"bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","decorative_video_replay_button_label":"Relire","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Vidéo en cours de lecture","hp_hero_stop_button_label":"Vidéo arrêtée","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","job_card_bookmark_action":"Ajouter aux favoris","job_card_created_by":"Créé par","job_card_image_alt_text":"Capture d\'écran de la mission {name}","job_card_report_action":"Effectuer un signalement","job_card_share_action":"Partager","job_card_updated_date":"Dernière modification : {date}","job_card_verified_by":"Vérifié par","job_dialog_bookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour voir cette mission ajoutée aux favoris. Les missions ne peuvent être notées qu\'en jeu, après avoir été jouées.","job_dialog_bookmarked_heading":"Mission ajoutée aux favoris : <b>{name}</b>","job_dialog_bookmarked_title":"Mission ajoutée aux favoris","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Une erreur est survenue lors de l\'ajout/du retrait de la mission de la liste des favoris. Veuillez réessayer.","job_dialog_error_heading":"Mission : <b>{name}</b>","job_dialog_error_title":"Erreur","job_dialog_unbookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour ne plus voir cette mission dans vos favoris.","job_dialog_unbookmarked_heading":"Mission retirée des favoris : <b>{name}</b>","job_dialog_unbookmarked_title":"Mission retirée des favoris","job_type_adversary_mode":"Mode rivalité","job_type_air_race":"Course aérienne","job_type_arena_deathmatch":"Affrontement en arène","job_type_arena_war":"Guerre d\'arène","job_type_bike_race":"Course à moto","job_type_capture":"Capture","job_type_contact_mission":"Mission de contact","job_type_deathmatch":"Affrontement","job_type_drag_race":"Course de dragster","job_type_drift_race":"Course de drift","job_type_foot_race":"Course à pied","job_type_hao_special_works_race":"Course d\'Hao\'s Special Works","job_type_heist":"Braquage","job_type_heist_prep":"Préparation de braquage","job_type_king_of_the_hill":"Conquête","job_type_land_race":"Course terrestre","job_type_last_team_standing":"Extermination","job_type_mission":"Mission","job_type_mission_creator":"Éditeur de missions","job_type_open_wheel_race":"Course d\'ultralégères","job_type_parachuting":"Saut en parachute","job_type_pursuit_race":"Course de poursuite","job_type_race":"Course","job_type_random_mission":"Mission aléatoire","job_type_special_race":"Course de véhicules spéciaux","job_type_street_race":"Course de rue","job_type_stunt_race":"Course nautique","job_type_survival":"Survie","job_type_target":"Course aux points","job_type_team_deathmatch":"Affrontement en équipe","job_type_team_king_of_the_hill":"Conquête en équipe","job_type_transform_race":"Course polymorphes","job_type_unknown":"Inconnu","job_type_vehicle_deathmatch":"Affrontement motorisé","job_type_water_race":"Course nautique","lightbox_close_button":"Fermer","login_dialog_body":"Vous devez vous connecter pour interagir avec ce contenu.","login_dialog_signin_button":"Se connecter","login_dialog_signup_button":"Créer un compte","login_dialog_title":"Connexion requise","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details_amp":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","web_offer_claim_dialog_close":"Fermer","web_offer_claim_error_state_button":"Réessayer","web_offer_claim_error_state_icon_label":"Icône d\'erreur","web_offer_claim_exists_state_icon_label":"Icône de réussite","web_offer_claim_link_account_state_icon_label":"Icône d\'erreur","web_offer_claim_loading_state":"Chargement","web_offer_claim_success_state_icon_label":"Icône de réussite"},"it-IT":{"bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","decorative_video_replay_button_label":"Riproduci di nuovo","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Video in riproduzione","hp_hero_stop_button_label":"Riproduzione video interrotta","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","job_card_bookmark_action":"Aggiungi ai preferiti","job_card_created_by":"Creato da","job_card_image_alt_text":"Screenshot dell\'attività {name}","job_card_report_action":"Segnala","job_card_share_action":"Condividi","job_card_updated_date":"Aggiornato il {date}","job_card_verified_by":"Verificato da","job_dialog_bookmarked_body":"Per visualizzare questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online. Le attività possono essere valutate solo all\'interno del gioco, dopo averle giocate.","job_dialog_bookmarked_heading":"Attività aggiunta ai preferiti: <b>{name}</b>","job_dialog_bookmarked_title":"Attività aggiunta ai preferiti","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Si è verificato un errore durante l’aggiunta ai/la rimozione dai preferiti dell’attività. Riprova più tardi","job_dialog_error_heading":"Attività: <b>{name}</b>","job_dialog_error_title":"Errore","job_dialog_unbookmarked_body":"Per non visualizzare più questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online.","job_dialog_unbookmarked_heading":"Attività rimossa dai preferiti: <b>{name}</b>","job_dialog_unbookmarked_title":"Attività rimossa dai preferiti","job_type_adversary_mode":"Modalità Competizione","job_type_air_race":"Gara aerea","job_type_arena_deathmatch":"Deathmatch nell\'Arena","job_type_arena_war":"Arena War","job_type_bike_race":"Gara su due ruote","job_type_capture":"Cattura","job_type_contact_mission":"Missione dei contatti","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Gara drag","job_type_drift_race":"Gara drift","job_type_foot_race":"Gara a piedi","job_type_hao_special_works_race":"Gara di Hao\'s Special Works","job_type_heist":"Colpi","job_type_heist_prep":"Missione preliminare del colpo","job_type_king_of_the_hill":"Re della collina","job_type_land_race":"Gara terrestre","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Missione","job_type_mission_creator":"Creatore di missioni","job_type_open_wheel_race":"Gara per ruote scoperte","job_type_parachuting":"Paracadutismo","job_type_pursuit_race":"Inseguimenti","job_type_race":"Gara","job_type_random_mission":"Missione casuale","job_type_special_race":"Gara con veicoli speciali","job_type_street_race":"Gara clandestina","job_type_stunt_race":"Gara stunt","job_type_survival":"Sopravvivenza","job_type_target":"Gara al bersaglio","job_type_team_deathmatch":"Deathmatch a squadre","job_type_team_king_of_the_hill":"Re della collina a squadre","job_type_transform_race":"Gara multiveicolo","job_type_unknown":"Sconosciuto","job_type_vehicle_deathmatch":"Deathmatch con veicoli","job_type_water_race":"Gara acquatica","lightbox_close_button":"Chiudi","login_dialog_body":"È necessario eseguire l’accesso prima di poter interagire con questo contenuto","login_dialog_signin_button":"Accedi","login_dialog_signup_button":"Registrati","login_dialog_title":"È necessario eseguire l’accesso","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details_amp":"Stai già usando questo indirizzo email per ricevere la newsletter. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","web_offer_claim_dialog_close":"chiudi","web_offer_claim_error_state_button":"Riprova","web_offer_claim_error_state_icon_label":"Icona Errore","web_offer_claim_exists_state_icon_label":"Icona di successo","web_offer_claim_link_account_state_icon_label":"Icona Errore","web_offer_claim_loading_state":"caricamento","web_offer_claim_success_state_icon_label":"Icona di successo"},"ja-JP":{"bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","decorative_video_replay_button_label":"もう一回見る","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"ビデオ再生中","hp_hero_stop_button_label":"ビデオ停止中","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","job_card_bookmark_action":"ブックマーク","job_card_created_by":"により作成","job_card_image_alt_text":"ジョブ{name}のスクリーンショット","job_card_report_action":"報告","job_card_share_action":"共有","job_card_updated_date":"{date}に更新","job_card_verified_by":"により認証","job_dialog_bookmarked_body":"ブックマークされたジョブを閲覧するには「GTAオンライン」を再起動する必要があります - ジョブは実際にプレイした後でなければ、ゲーム内で評価することはできません。","job_dialog_bookmarked_heading":"ブックマークされたジョブ: <b>{name}</b>","job_dialog_bookmarked_title":"ブックマークされたジョブ","job_dialog_confirmation_button":"OK","job_dialog_error_body":"ジョブをブックマーク/ブックマーク解除を試みた際にエラーが起こりました。もう一度お試しください","job_dialog_error_heading":"ジョブ: <b>{name}</b>","job_dialog_error_title":"エラー","job_dialog_unbookmarked_body":"ブックマークから解除たジョブを削除するには「GTAオンライン」を再起動する必要があります。","job_dialog_unbookmarked_heading":"ブックマークから解除されたジョブ: <b>{name}</b>","job_dialog_unbookmarked_title":"ブックマークから解除されたジョブ","job_type_adversary_mode":"敵対モード","job_type_air_race":"エアレース","job_type_arena_deathmatch":"アリーナデスマッチ","job_type_arena_war":"アリーナウォーズ","job_type_bike_race":"バイクレース","job_type_capture":"キャプチャー","job_type_contact_mission":"コンタクトのミッション","job_type_deathmatch":"デスマッチ","job_type_drag_race":"ドラッグレース","job_type_drift_race":"ドリフトレース","job_type_foot_race":"徒競走","job_type_hao_special_works_race":"ハオ・スペシャルワークスレース","job_type_heist":"強盗","job_type_heist_prep":"強盗調達","job_type_king_of_the_hill":"キングオブザヒル","job_type_land_race":"ランドレース","job_type_last_team_standing":"ラスト・チーム・アライブ","job_type_mission":"ミッション","job_type_mission_creator":"ミッションクリエイター","job_type_open_wheel_race":"オープンホイールレース","job_type_parachuting":"パラシューティング","job_type_pursuit_race":"追跡レース","job_type_race":"レース","job_type_random_mission":"ランダムなミッション","job_type_special_race":"特殊車両レース","job_type_street_race":"ストリートレース","job_type_stunt_race":"スタントレース","job_type_survival":"サバイバル","job_type_target":"ターゲットアサルトレース","job_type_team_deathmatch":"チームデスマッチ","job_type_team_king_of_the_hill":"チーム・キングオブザヒル","job_type_transform_race":"トランスフォームレース","job_type_unknown":"不明","job_type_vehicle_deathmatch":"マシンデスマッチ","job_type_water_race":"シーレース","lightbox_close_button":"閉じる","login_dialog_body":"このコンテンツを利用するには、サインインする必要があります","login_dialog_signin_button":"サインイン","login_dialog_signup_button":"サインアップ","login_dialog_title":"サインインが必要","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details_amp":"このメールアドレスで既にニュースレターアップデートを受け取っています。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します","web_offer_claim_dialog_close":"閉じる","web_offer_claim_error_state_button":"もう一度試す","web_offer_claim_error_state_icon_label":"エラーアイコン","web_offer_claim_exists_state_icon_label":"成功のアイコン","web_offer_claim_link_account_state_icon_label":"エラーアイコン","web_offer_claim_loading_state":"ロード中","web_offer_claim_success_state_icon_label":"成功のアイコン"},"ko-KR":{"bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","decorative_video_replay_button_label":"다시 재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"비디오 재생 중","hp_hero_stop_button_label":"비디오 정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","job_card_bookmark_action":"즐겨찾기","job_card_created_by":"생성됨","job_card_image_alt_text":"{name} 작업 스크린샷","job_card_report_action":"신고","job_card_share_action":"공유","job_card_updated_date":"{date} 업데이트됨","job_card_verified_by":"인증됨","job_dialog_bookmarked_body":"즐겨찾기에 등록한 작업을 보려면 Grand Theft Auto 온라인을 다시 시작해야 합니다 - 작업은 플레이한 후에만 게임 내에서 평가할 수 있습니다.","job_dialog_bookmarked_heading":"즐겨찾기에 등록한 작업: <b>{name}</b>","job_dialog_bookmarked_title":"즐겨찾기에 등록한 작업","job_dialog_confirmation_button":"확인","job_dialog_error_body":"작업 즐겨찾기 등록/해제 중 오류가 발생했습니다. 다시 시도하십시오","job_dialog_error_heading":"작업: <b>{name}</b>","job_dialog_error_title":"오류","job_dialog_unbookmarked_body":"즐겨찾기에서 이 작업을 표시하지 않으려면 Grand Theft Auto 온라인을 다시 시작해야 합니다.","job_dialog_unbookmarked_heading":"즐겨찾기 해제한 작업: <b>{name}</b>","job_dialog_unbookmarked_title":"즐겨찾기 해제한 작업","job_type_adversary_mode":"대적 모드","job_type_air_race":"항공 레이스","job_type_arena_deathmatch":"아레나 데스매치","job_type_arena_war":"아레나 워","job_type_bike_race":"바이크 레이스","job_type_capture":"점령","job_type_contact_mission":"연락책 임무","job_type_deathmatch":"데스매치","job_type_drag_race":"드래그 레이스","job_type_drift_race":"드리프트 레이스","job_type_foot_race":"도보 레이스","job_type_hao_special_works_race":"하오의 스페셜 웍스 레이스 ","job_type_heist":"습격","job_type_heist_prep":"습격 준비","job_type_king_of_the_hill":"킹 오브 더 힐","job_type_land_race":"지상 레이스","job_type_last_team_standing":"라스트 팀 스탠딩","job_type_mission":"임무","job_type_mission_creator":"임무 생성기","job_type_open_wheel_race":"오픈 휠 레이스","job_type_parachuting":"낙하산 강하","job_type_pursuit_race":"추격전 레이스","job_type_race":"레이스","job_type_random_mission":"무작위 임무","job_type_special_race":"특수 차량 레이스","job_type_street_race":"길거리 레이스","job_type_stunt_race":"스턴트 레이스","job_type_survival":"서바이벌","job_type_target":"타겟 어썰트 레이스","job_type_team_deathmatch":"팀 데스매치","job_type_team_king_of_the_hill":"팀 킹 오브 더 힐","job_type_transform_race":"변신 레이스","job_type_unknown":"알 수 없음","job_type_vehicle_deathmatch":"이동 수단 데스매치","job_type_water_race":"해상 레이스","lightbox_close_button":"닫기","login_dialog_body":"이 콘텐츠에 댓글을 남기거나 좋아요를 누르려면 먼저 로그인하십시오","login_dialog_signin_button":"로그인","login_dialog_signup_button":"가입","login_dialog_title":"로그인 필요","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details_amp":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details_amp":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","web_offer_claim_dialog_close":"닫기","web_offer_claim_error_state_button":"다시 시도하기","web_offer_claim_error_state_icon_label":"오류 아이콘","web_offer_claim_exists_state_icon_label":"성공 아이콘","web_offer_claim_link_account_state_icon_label":"오류 아이콘","web_offer_claim_loading_state":"불러오는 중","web_offer_claim_success_state_icon_label":"성공 아이콘"},"pl-PL":{"bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","decorative_video_replay_button_label":"Odtwórz ponownie","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Teraz odtwarzane","hp_hero_stop_button_label":"Wideo zatrzymane","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","job_card_bookmark_action":"Dodaj do zakładek","job_card_created_by":"Stworzone przez","job_card_image_alt_text":"Zrzut ekranu akcji {name}","job_card_report_action":"Zgłoś","job_card_share_action":"Udostępnij","job_card_updated_date":"Zaktualizowano {date}","job_card_verified_by":"Zweryfikowane przez","job_dialog_bookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby zobaczyć tę dodaną do ulubionych akcję. Akcje mogą być ocenione tylko i wyłącznie w grze po ich rozegraniu.","job_dialog_bookmarked_heading":"Akcja dodana do ulubionych: <b>{name}</b>","job_dialog_bookmarked_title":"Akcja dodana do ulubionych","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Wystąpił błąd podczas dodawania/usuwania tej akcji z sekcji ulubionych. Spróbuj ponownie.","job_dialog_error_heading":"Akcja: <b>{name}</b>","job_dialog_error_title":"Błąd","job_dialog_unbookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby akcja nie pojawiała się dłużej w sekcji ulubionych akcji.","job_dialog_unbookmarked_heading":"Akcja usunięta z ulubionych: <b>{name}</b>","job_dialog_unbookmarked_title":"Akcja usunięta z ulubionych","job_type_adversary_mode":"Tryb adwerszarza","job_type_air_race":"Wyścig powietrzny","job_type_arena_deathmatch":"Deathmatch na arenie","job_type_arena_war":"Arena wojny","job_type_bike_race":"Wyścig jednośladów","job_type_capture":"Zdobywanie","job_type_contact_mission":"Misja od kontaktów","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Wyścig równoległy","job_type_drift_race":"Wyścig driftowe","job_type_foot_race":"Wyścig pieszy","job_type_hao_special_works_race":"Wyścigi Hao’s Special Works","job_type_heist":"Napad","job_type_heist_prep":"Misja w terenie","job_type_king_of_the_hill":"Król wzgórza","job_type_land_race":"Wyścig lądowy","job_type_last_team_standing":"Ostatnia drużyna wygrywa","job_type_mission":"Misja","job_type_mission_creator":"Kreator misji","job_type_open_wheel_race":"Wyścig bolidów","job_type_parachuting":"Skoki spadochronowe","job_type_pursuit_race":"Pościg","job_type_race":"Wyścig","job_type_random_mission":"Losowa misja","job_type_special_race":"Wyścig pojazdów specjalnych","job_type_street_race":"Wyścig uliczny","job_type_stunt_race":"Wyścig kaskaderski","job_type_survival":"Walka o przetrwanie","job_type_target":"Wyścig strzelecki","job_type_team_deathmatch":"Deathmatch drużynowy","job_type_team_king_of_the_hill":"Drużynowy Król wzgórza","job_type_transform_race":"Wyścig z transformacją","job_type_unknown":"Nieznane","job_type_vehicle_deathmatch":"Deathmatch w pojazdach","job_type_water_race":"Wyścig morski","lightbox_close_button":"Zamknij","login_dialog_body":"Zaloguj się, aby zapoznać się z zawartością.","login_dialog_signin_button":"Zaloguj się","login_dialog_signup_button":"Zarejestruj się","login_dialog_title":"Wymagane zalogowanie się","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details_amp":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","web_offer_claim_dialog_close":"Zamknij","web_offer_claim_error_state_button":"Spróbuj ponownie","web_offer_claim_error_state_icon_label":"Ikona błędu","web_offer_claim_exists_state_icon_label":"Ikona sukcesu","web_offer_claim_link_account_state_icon_label":"Ikona błędu","web_offer_claim_loading_state":"Ładowanie","web_offer_claim_success_state_icon_label":"Ikona sukcesu"},"pt-BR":{"bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Vídeo em reprodução","hp_hero_stop_button_label":"Vídeo parado","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Adicionar aos Favoritos","job_card_created_by":"Criado por","job_card_image_alt_text":"Captura de tela do Serviço {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartilhar","job_card_updated_date":"Atualização {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para ver este serviço como um de seus Favoritos. Serviços só podem ser avaliados no jogo, após terem sido jogados.","job_dialog_bookmarked_heading":"Serviço adicionado aos Favoritos: <b>{name}</b>","job_dialog_bookmarked_title":"Serviço adicionado aos Favoritos","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Houve um erro ao tentar adicionar/remover esse serviço aos Favoritos. Tente novamente.","job_dialog_error_heading":"Serviço: <b>{name}</b>","job_dialog_error_title":"Erro","job_dialog_unbookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para não ver mais este serviço como um de seus Favoritos.","job_dialog_unbookmarked_heading":"Serviço removido dos Favoritos: <b>{name}</b>","job_dialog_unbookmarked_title":"Serviço removido dos Favoritos","job_type_adversary_mode":"Modo Adversário","job_type_air_race":"Corrida Aérea","job_type_arena_deathmatch":"Mata-mata da Arena","job_type_arena_war":"Arena de Guerra","job_type_bike_race":"Corrida sobre duas rodas","job_type_capture":"Captura","job_type_contact_mission":"Missão de Contato","job_type_deathmatch":"Mata-mata","job_type_drag_race":"Corrida de Arrancada","job_type_drift_race":"Corrida de Drift","job_type_foot_race":"Corrida a pé","job_type_hao_special_works_race":"Corrida da Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Preliminar do Golpe","job_type_king_of_the_hill":"Marcando Território","job_type_land_race":"Corrida Terrestre","job_type_last_team_standing":"Última Equipe Sobrevivente","job_type_mission":"Missão","job_type_mission_creator":"Criador de Missões","job_type_open_wheel_race":"Corrida de Roda Exposta","job_type_parachuting":"Paraquedismo","job_type_pursuit_race":"Corrida de Perseguição","job_type_race":"Corrida","job_type_random_mission":"Missão aleatória","job_type_special_race":"Corrida de Veículo Especial","job_type_street_race":"Corrida de Rua","job_type_stunt_race":"Corrida Acrobática","job_type_survival":"Sobrevivência","job_type_target":"Corrida de Assalto com Alvos","job_type_team_deathmatch":"Mata-mata em Equipe","job_type_team_king_of_the_hill":"Marcando Território em Equipe","job_type_transform_race":"Corrida Metamorfose","job_type_unknown":"Desconhecido","job_type_vehicle_deathmatch":"Mata-mata em Veículos","job_type_water_race":"Corrida Marítima","lightbox_close_button":"Fechar","login_dialog_body":"É necessário iniciar sessão para interagir com esse conteúdo","login_dialog_signin_button":"Iniciar sessão","login_dialog_signup_button":"Criar conta","login_dialog_title":"É necessário iniciar sessão","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details_amp":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição","web_offer_claim_dialog_close":"fechar","web_offer_claim_error_state_button":"Tentar novamente","web_offer_claim_error_state_icon_label":"Ícone de erro","web_offer_claim_exists_state_icon_label":"Ícone de êxito","web_offer_claim_link_account_state_icon_label":"Ícone de erro","web_offer_claim_loading_state":"carregando","web_offer_claim_success_state_icon_label":"Ícone de êxito"},"ru-RU":{"bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","decorative_video_replay_button_label":"Повтор","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизведение видео","hp_hero_stop_button_label":"Видео остановлено","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total}","job_card_bookmark_action":"Отметить","job_card_created_by":"Создан","job_card_image_alt_text":"Снимок экрана дела {name}","job_card_report_action":"Пожаловаться","job_card_share_action":"Поделиться","job_card_updated_date":"Обновлен {date}","job_card_verified_by":"Проверен","job_dialog_bookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы увидеть добавленное в закладки дело. Оценивать дела можно только в игре после прохождения.","job_dialog_bookmarked_heading":"Дело добавлено в закладки: <b>{name}</b>","job_dialog_bookmarked_title":"Дело добавлено в закладки","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Произошла ошибка при попытке добавить дело в закладки или удалить его из закладок. Пожалуйста, повторите попытку","job_dialog_error_heading":"Дело: <b>{name}</b>","job_dialog_error_title":"Ошибка","job_dialog_unbookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы удалить это дело из закладок.","job_dialog_unbookmarked_heading":"Дело удалено из закладок: <b>{name}</b>","job_dialog_unbookmarked_title":"Дело удалено из закладок","job_type_adversary_mode":"Режим противоборства","job_type_air_race":"Гонка по воздуху","job_type_arena_deathmatch":"Перестрелка на арене","job_type_arena_war":"Битва на арене","job_type_bike_race":"Велогонка","job_type_capture":"Захват","job_type_contact_mission":"Задание знакомого","job_type_deathmatch":"Перестрелка","job_type_drag_race":"Драг-гонка","job_type_drift_race":"Дрифтовая гонка","job_type_foot_race":"Пешая гонка","job_type_hao_special_works_race":"Гонка Hao’s Special Works","job_type_heist":"Ограбление","job_type_heist_prep":"Подготовка к ограблению","job_type_king_of_the_hill":"Король горы","job_type_land_race":"Гонка по суше","job_type_last_team_standing":"«Команда уцелевших»","job_type_mission":"Задание","job_type_mission_creator":"Редактор заданий","job_type_open_wheel_race":"Гонки на болидах","job_type_parachuting":"Парашютизм","job_type_pursuit_race":"Гонка «Погоня»","job_type_race":"Гонка","job_type_random_mission":"Случайная миссия","job_type_special_race":"Гонка для особого транспорта","job_type_street_race":"Уличная гонка","job_type_stunt_race":"Каскадерская гонка","job_type_survival":"Выживание","job_type_target":"Гонка с мишенями","job_type_team_deathmatch":"Командная перестрелка","job_type_team_king_of_the_hill":"Команда «Король горы»","job_type_transform_race":"Гонка «Трансформации»","job_type_unknown":"Неизвестно","job_type_vehicle_deathmatch":"Перестрелка на транспорте","job_type_water_race":"Морская гонка","lightbox_close_button":"Закрыть","login_dialog_body":"Выполните вход, чтобы взаимодействовать с этим контентом.","login_dialog_signin_button":"Войти","login_dialog_signup_button":"Регистрация","login_dialog_title":"Необходимо выполнить вход","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details_amp":"Вы уже получаете письма по рассылке на этот адрес электронной почты. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","web_offer_claim_dialog_close":"закрыть","web_offer_claim_error_state_button":"Попробовать снова","web_offer_claim_error_state_icon_label":"Значок ошибки","web_offer_claim_exists_state_icon_label":"Значок «Успех»","web_offer_claim_link_account_state_icon_label":"Значок ошибки","web_offer_claim_loading_state":"загрузка","web_offer_claim_success_state_icon_label":"Значок «Успех»"},"zh-CN":{"bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"回放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"视频播放中","hp_hero_stop_button_label":"视频已停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","job_card_bookmark_action":"收藏","job_card_created_by":"制作者","job_card_image_alt_text":"{name}差事的截图","job_card_report_action":"举报","job_card_share_action":"分享","job_card_updated_date":"更新于{date}","job_card_verified_by":"认证者","job_dialog_bookmarked_body":"您需要重新启动Grand Theft Auto在线模式来查看这项已收藏的差事。只有在游玩了差事后才能在游戏内对它们进行评价。","job_dialog_bookmarked_heading":"已收藏差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏差事","job_dialog_confirmation_button":"确定","job_dialog_error_body":"收藏/取消收藏此差事时出现了一个错误。请稍候再试","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"错误","job_dialog_unbookmarked_body":"需要您重新启动Grand Theft Auto在线模式后，这项差事才会从您的收藏中消失。","job_dialog_unbookmarked_heading":"已取消收藏差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏差事","job_type_adversary_mode":"对抗模式","job_type_air_race":"空中竞速","job_type_arena_deathmatch":"竞技场死斗","job_type_arena_war":"竞技场之战","job_type_bike_race":"两轮车竞速","job_type_capture":"夺取","job_type_contact_mission":"联系人任务","job_type_deathmatch":"死斗游戏","job_type_drag_race":"直线竞速","job_type_drift_race":"漂移竞速","job_type_foot_race":"徒步竞速","job_type_hao_special_works_race":"阿浩特别工坊竞速","job_type_heist":"抢劫任务","job_type_heist_prep":"抢劫前置任务","job_type_king_of_the_hill":"占山为王","job_type_land_race":"陆地竞速","job_type_last_team_standing":"团队生存游戏","job_type_mission":"任务","job_type_mission_creator":"任务制作器","job_type_open_wheel_race":"开轮式竞速","job_type_parachuting":"跳伞","job_type_pursuit_race":"追逐竞速","job_type_race":"竞速","job_type_random_mission":"随机任务","job_type_special_race":"特殊载具竞速","job_type_street_race":"街头竞速","job_type_stunt_race":"特技竞速","job_type_survival":"生存战","job_type_target":"标靶射击竞速","job_type_team_deathmatch":"团队死斗游戏","job_type_team_king_of_the_hill":"团队占山为王","job_type_transform_race":"幻变竞速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"载具死斗游戏","job_type_water_race":"水上竞速","lightbox_close_button":"关闭","login_dialog_body":"您需要先登录才能与该内容进行互动","login_dialog_signin_button":"登录","login_dialog_signup_button":"注册","login_dialog_title":"需要登录","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details_amp":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置中随时管理您的通信偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"确定","ns_successfully_subscribed_details_amp":"您现已订阅Rockstar Games邮件通知，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置中随时管理您的通信偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","web_offer_claim_dialog_close":"关闭","web_offer_claim_error_state_button":"再次尝试","web_offer_claim_error_state_icon_label":"错误图标","web_offer_claim_exists_state_icon_label":"成功图标","web_offer_claim_link_account_state_icon_label":"错误图标","web_offer_claim_loading_state":"正在加载","web_offer_claim_success_state_icon_label":"成功图标"},"zh-TW":{"bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"重播","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"正播放影片","hp_hero_stop_button_label":"影片已停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","job_card_bookmark_action":"收藏","job_card_created_by":"創作者：","job_card_image_alt_text":"差事 {name} 的擷圖","job_card_report_action":"檢舉","job_card_share_action":"分享","job_card_updated_date":"更新於 {date}","job_card_verified_by":"驗證者：","job_dialog_bookmarked_body":"您需要重啟 GTA 線上模式才能看見此已收藏的差事。您需要完成該差事，才能在遊戲內對其評價。","job_dialog_bookmarked_heading":"已收藏的差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏的差事","job_dialog_confirmation_button":"確定","job_dialog_error_body":"解決這個請求時出現錯誤。請再試一次。","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"錯誤","job_dialog_unbookmarked_body":"您需要重啟 GTA 線上模式才不會再在收藏中看見此差事。","job_dialog_unbookmarked_heading":"已取消收藏的差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏的差事","job_type_adversary_mode":"競爭模式","job_type_air_race":"空中競速","job_type_arena_deathmatch":"鬥技場死鬥遊戲","job_type_arena_war":"決戰鬥技場","job_type_bike_race":"雙輪車競速","job_type_capture":"奪取","job_type_contact_mission":"聯絡人任務","job_type_deathmatch":"死鬥遊戲","job_type_drag_race":"直線競速","job_type_drift_race":"甩尾競速","job_type_foot_race":"賽跑","job_type_hao_special_works_race":"阿浩特製改裝競速","job_type_heist":"搶劫任務","job_type_heist_prep":"搶劫前置任務","job_type_king_of_the_hill":"山頭之王","job_type_land_race":"陸上競速","job_type_last_team_standing":"團隊生存遊戲","job_type_mission":"任務","job_type_mission_creator":"任務製作器","job_type_open_wheel_race":"開輪式競速","job_type_parachuting":"跳傘活動","job_type_pursuit_race":"追緝競速","job_type_race":"競速","job_type_random_mission":"隨機任務","job_type_special_race":"特殊載具競速","job_type_street_race":"街頭競速","job_type_stunt_race":"特技競速","job_type_survival":"生存戰","job_type_target":"射靶競速","job_type_team_deathmatch":"團隊死鬥遊戲","job_type_team_king_of_the_hill":"團隊山頭之王","job_type_transform_race":"變形狂飆競速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"載具死鬥遊戲","job_type_water_race":"水上競速","lightbox_close_button":"關閉","login_dialog_body":"您需要先登入才能進行操作","login_dialog_signin_button":"登入","login_dialog_signup_button":"註冊","login_dialog_title":"必須登入","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details_amp":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details_amp":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱","web_offer_claim_dialog_close":"關閉","web_offer_claim_error_state_button":"再試一次","web_offer_claim_error_state_icon_label":"錯誤圖示","web_offer_claim_exists_state_icon_label":"成功圖示","web_offer_claim_link_account_state_icon_label":"錯誤圖示","web_offer_claim_loading_state":"正在載入","web_offer_claim_success_state_icon_label":"成功圖示"}}'),
        nr = e => (0, U.withIntl)(e, rr);
      var ir = t(84173),
        or = t(59236);
      const cr = (0, m.createContext)(null),
        lr = (0, m.forwardRef)(function({
          jumpLinkId: e,
          currentStep: a = "unclaimed",
          testId: t = "web-offer-claim-root",
          asChild: s,
          ...r
        }, n) {
          const i = s ? ir.DX : "div",
            o = (0, or.mergeProps)({
              "data-testid": t,
              className: "bfo5lc0"
            }, r);
          return (0, _.jsx)(cr.Provider, {
            value: {
              currentStep: a
            },
            children: (0, _.jsx)(i, {
              id: e,
              ref: n,
              ...o
            })
          })
        }),
        dr = (0, m.forwardRef)(function({
          stepIndex: e,
          asChild: a,
          ...t
        }, s) {
          const r = (() => {
              const {
                currentStep: e
              } = (() => {
                const e = (0, m.useContext)(cr);
                if (!e) throw new Error("Warning, must use inside a WebOfferClaim.Root provider");
                return e
              })();
              return e
            })(),
            n = a ? ir.DX : "div",
            i = (0, or.mergeProps)({
              className: "bfo5lc1"
            }, t);
          return r === e ? (0, _.jsx)(n, {
            ref: s,
            ...i
          }) : null
        }),
        _r = (0, m.forwardRef)(function({
          view: e = "default",
          ...a
        }, t) {
          const s = (0, or.mergeProps)({
            className: "bfo5lc2"
          }, a);
          return "dialog" === e ? (0, _.jsx)(sr.Dialog.Trigger, {
            asChild: !0,
            children: (0, _.jsx)(sr.Button, {
              ref: t,
              ...s
            })
          }) : (0, _.jsx)(sr.Button, {
            ref: t,
            ...s
          })
        });
      const mr = () => {
          const {
            view: e
          } = ur();
          return e
        },
        ur = () => {
          const e = (0, m.useContext)(Br);
          if (!e) throw new Error("Warning, must use inside a WebOfferClaim.Root provider");
          return e
        };
      var gr = t(16630),
        br = (0, gr.c)({
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
        pr = (0, gr.c)({
          defaultClassName: "_1vpanocf",
          variantClassNames: {
            platform: {
              applestore: "_1vpanocg",
              googleplay: "_1vpanoch",
              left: "_1vpanoci",
              pc: "_1vpanocj",
              pcalt: "_1vpanock",
              ps: "_1vpanocl",
              ps3: "_1vpanocm",
              ps4: "_1vpanocn",
              ps5: "_1vpanoco",
              right: "_1vpanocp",
              switch: "_1vpanocq",
              x: "_1vpanocr",
              xbox: "_1vpanocs",
              xboxone: "_1vpanoct",
              xboxseriesxs: "_1vpanocu"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        fr = (0, gr.c)({
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
      const kr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg",
        hr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
        vr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg",
        yr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
        jr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
        xr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg",
        wr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
        Nr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
        Sr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg",
        Cr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg",
        Tr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
        Er = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg",
        Ir = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg",
        zr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
        Ar = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg";
      var Mr = "var(--_1htcsun5)",
        Pr = "var(--_1htcsun4)",
        Lr = (0, gr.c)({
          defaultClassName: "_1htcsun6",
          variantClassNames: {
            orientation: {
              horizontal: "_1htcsun7",
              vertical: "_1htcsun8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Rr = "var(--_1htcsun3)",
        Dr = t(819);
      const Or = (0, m.forwardRef)(function({
          orientation: e = "vertical",
          fadeStart: a = !0,
          fadeEnd: t = !0,
          stops: s = [{
            color: "transparent",
            position: "-5%"
          }, {
            color: "black",
            position: "15%"
          }],
          style: r,
          children: n,
          ...i
        }, o) {
          const c = s.map(e => `${e.color}${e.position?` calc(${e.position} * var(--_1htcsun0))`:""}`).join(", "),
            l = s.map(e => `${e.color}${e.position?` calc(${e.position} * var(--_1htcsun1))`:""}`).join(", "),
            d = "vertical" === e ? "to bottom" : "to right",
            m = "vertical" === e ? "to top" : "to left",
            u = (0, Dr.DI)({
              [Rr]: a ? `linear-gradient(${d}, ${c})` : "linear-gradient(black 0%)",
              [Pr]: t ? `linear-gradient(${m}, ${l})` : "linear-gradient(black 0%)",
              [Mr]: "vertical" === e ? "y" : "x"
            }),
            g = (0, or.mergeProps)({
              className: Lr({
                orientation: e
              })
            }, i),
            b = {
              ...r,
              ...u
            };
          return (0, _.jsxs)(sr.ScrollArea.Root, {
            ...g,
            ref: o,
            style: b,
            children: [(0, _.jsx)(sr.ScrollArea.Viewport, {
              className: "_1htcsun9",
              children: n
            }), (0, _.jsx)(sr.ScrollArea.Scrollbar, {
              orientation: e,
              children: (0, _.jsx)(sr.ScrollArea.Thumb, {})
            }), (0, _.jsx)(sr.ScrollArea.Corner, {})]
          })
        }),
        Br = (0, m.createContext)({
          view: "default"
        }),
        Gr = (0, m.forwardRef)(function({
          asChild: e,
          testId: a = "web-offer-claim-root",
          view: t = "default",
          ...s
        }, r) {
          const n = e ? ir.DX : "div",
            i = (0, or.mergeProps)({
              "data-testid": a,
              className: fr({
                view: t
              })
            }, s);
          return (0, _.jsx)(Br.Provider, {
            value: {
              view: t
            },
            children: (0, _.jsx)(n, {
              ref: r,
              ...i
            })
          })
        }),
        $r = (0, m.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = mr(),
            r = e ? ir.DX : "div",
            n = (0, or.mergeProps)({
              className: br({
                view: s
              })
            }, a);
          return (0, _.jsx)(r, {
            ref: t,
            ...n
          })
        }),
        Vr = (0, m.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = e ? ir.DX : "header",
            r = (0, or.mergeProps)({}, a);
          return (0, _.jsx)(s, {
            ref: t,
            ...r
          })
        }),
        Fr = (0, m.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = e ? ir.DX : "footer",
            r = (0, or.mergeProps)({
              className: "_1vpanocd"
            }, a);
          return (0, _.jsx)(s, {
            ref: t,
            ...r
          })
        }),
        Hr = (0, m.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = mr(),
            r = e ? ir.DX : "div",
            n = (0, or.mergeProps)({
              className: "_1vpanoc8"
            }, a);
          return "dialog" === s ? (0, _.jsx)(sr.Dialog.Description, {
            ref: t,
            asChild: !0,
            children: (0, _.jsx)(r, {
              ...n
            })
          }) : (0, _.jsx)(Or, {
            stops: [{
              color: "transparent",
              position: "0%"
            }, {
              color: "black",
              position: "15%"
            }],
            children: (0, _.jsx)(r, {
              ref: t,
              ...n
            })
          })
        }),
        Ur = (0, m.forwardRef)(function({
          alt: e,
          src: {
            mobile: a,
            desktop: t
          },
          ...s
        }, r) {
          const n = mr(),
            i = (0, or.mergeProps)({
              className: "_1vpanoc3"
            }, s);
          return "dialog" !== n && (0, _.jsxs)("picture", {
            ref: r,
            ...i,
            children: [(0, _.jsx)("source", {
              media: "(max-width: 1279.98px)",
              srcSet: a
            }), (0, _.jsx)("source", {
              media: "(min-width: 1280px)",
              srcSet: t
            }), (0, _.jsx)("img", {
              src: t,
              className: "_1vpanoc4",
              alt: e
            })]
          })
        }),
        qr = (0, m.forwardRef)(function({
          children: e,
          appearance: a = "secondary",
          ...t
        }, s) {
          const r = (0, or.mergeProps)({
            appearance: a,
            testId: "woc.step.badge",
            className: "_1vpanocb"
          }, t);
          return (0, _.jsx)(sr.Badge.Root, {
            ref: s,
            ...r,
            asChild: !0,
            children: (0, _.jsx)(sr.Badge.Label, {
              children: e
            })
          })
        }),
        Wr = (0, m.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = e ? ir.DX : "div",
            r = (0, or.mergeProps)({
              className: "_1vpanoca"
            }, a);
          return (0, _.jsx)(s, {
            ref: t,
            ...r
          })
        }),
        Kr = (0, m.forwardRef)(function({
          ...e
        }, a) {
          const t = mr(),
            s = (0, or.mergeProps)({
              className: "_1vpanoc9"
            }, e);
          return "dialog" === t ? (0, _.jsx)(sr.Dialog.Title, {
            asChild: !0,
            children: (0, _.jsx)(sr.Heading, {
              ref: a,
              ...s
            })
          }) : (0, _.jsx)(sr.Heading, {
            ref: a,
            ...s
          })
        }),
        Yr = (0, m.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, or.mergeProps)({
            testId: "woc.step.description",
            className: "_1vpanocc"
          }, e);
          return (0, _.jsx)(sr.Body, {
            ref: a,
            ...t
          })
        }),
        Xr = (0, m.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, or.mergeProps)({
            testId: "woc.step.disclaimer",
            className: "_1vpanoce"
          }, e);
          return (0, _.jsx)(sr.Body, {
            ref: a,
            ...t,
            size: "XS",
            color: "subdued"
          })
        }),
        Zr = (0, m.forwardRef)(function({
          size: e = "LG",
          ...a
        }, t) {
          return (0, _.jsx)(sr.Button, {
            ref: t,
            ...a,
            size: e
          })
        }),
        Jr = ({
          label: e,
          platform: a,
          ...t
        }) => {
          const s = (0, or.mergeProps)({
            className: pr({
              platform: a
            })
          }, t);
          return (0, _.jsx)(sr.Button, {
            ...s,
            appearance: "secondary",
            size: "MD",
            children: (0, _.jsx)("img", {
              src: n[a],
              alt: e
            })
          })
        },
        Qr = ({
          ...e
        }) => (0, _.jsx)(Jr, {
          ...e,
          label: (0, g.findPlatform)("xbox")?.friendlyName ?? "Xbox",
          platform: "xbox"
        }),
        en = ({
          ...e
        }) => (0, _.jsx)(Jr, {
          ...e,
          label: (0, g.findPlatform)("ps")?.friendlyName ?? "PlayStation",
          platform: "ps"
        }),
        an = ({
          label: e
        }) => (0, _.jsx)("div", {
          className: "_1vpanocv",
          children: (0, _.jsx)(sr.Spinner, {
            size: "pageXL",
            label: e
          })
        }),
        tn = Object.assign(dr, i),
        sn = "claimOffer",
        rn = (0, m.createContext)(null),
        nn = () => {
          const e = (0, m.useContext)(rn);
          if (!e) throw new Error("useClaimContext must be used within a ClaimContext.Provider");
          return e
        },
        on = ({
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
        cn = (e, a) => {
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
                ...e, ...on({
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
        ln = () => {
          const {
            state: e,
            dispatch: a
          } = nn(), {
            charactersNeeded: t,
            setCharactersNeeded: s
          } = (0, b.useRockstarUserState)(), {
            track: r
          } = (0, b.useGtmTrack)(), {
            loggedIn: n,
            data: i
          } = (0, b.useRockstarUser)(), {
            signInUrl: o
          } = (0, g.useScAuthLinks)(e.returnUrl), {
            redirect: c
          } = (() => {
            const e = (0, u.useNavigate)();
            return {
              redirect: (0, m.useCallback)((a, t = {}) => {
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
            ref: l,
            inView: d,
            trackSectionImpression: _
          } = (() => {
            const e = (0, m.useRef)(!1),
              a = (0, m.useRef)(!1),
              {
                track: t
              } = (0, b.useGtmTrack)(),
              {
                ref: s
              } = (0, W.useInView)({
                threshold: .6,
                triggerOnce: !0,
                onChange: a => {
                  e.current = a
                }
              }),
              r = (0, m.useCallback)(s => {
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
          })(), [p] = (0, u.useSearchParams)(), f = p.has(sn, e.giftId), k = "stateful" === e.variant || "stateful-trigger" === e.variant, h = (() => {
            const {
              state: e,
              dispatch: a
            } = nn(), {
              fetch: t
            } = (s = e.giftId, (0, g.useScApi)("marketing/engagement/claim/exists", {
              autoFetch: !1,
              requireBearerToken: !0,
              useCache: !1,
              query: {
                giftUId: s
              }
            }));
            var s;
            return (0, m.useCallback)(async () => {
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
          })(), v = (() => {
            const {
              state: e,
              dispatch: a
            } = nn(), [t] = (0, u.useSearchParams)(), s = {
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
            })(s);
            return (0, m.useCallback)(async () => {
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
          return (0, m.useEffect)(() => {
            if ("IDLE" === e.status && n && k) h();
            else if (f && "IDLE" === e.status) a({
              type: "TRIGGER_CLAIM"
            });
            else if ("TRIGGERED" !== e.status || n || (r({
                element_placement: "WOC",
                event: "cta_claim",
                link_url: o,
                text: e.steps.unclaimed["button-label"] ?? "claim now",
                section_state: e.variant
              }), a({
                type: "LOGIN"
              }), c(o)), n && (f && ("TRIGGERED" === e.status || "UNCLAIMED" === e.status) || !k && "TRIGGERED" === e.status)) t && i.accountSynced || i.characters ? a({
              type: "USER_SYNCED"
            }) : (s("gtao"), a({
              type: "FETCH_CHARACTERS"
            }));
            else if ("FETCHING_CHARACTERS" === e.status && i.accountSynced) a({
              type: "USER_SYNCED"
            });
            else if ("USER_SYNCED" !== e.status) {
              if ("CLAIMABLE" !== e.status) return "ERROR" === e.status ? (r({
                element_placement: "WOC",
                event: "alert_error",
                o_id: e.giftId,
                section_state: `${e.variant}|${e.status}`,
                text: "something went wrong on our end. please try again in a few minutes."
              }), "stateful" === e.variant && _({
                element_placement: "WOC",
                section_state: `${e.variant}|${e.status}`
              }), void a({
                type: "FINISHED"
              })) : "UNLINKED" === e.status ? ("stateful" === e.variant && _({
                element_placement: "WOC",
                section_state: `${e.variant}|${e.status}`
              }), r({
                element_placement: "WOC",
                event: "alert_error",
                o_id: e.giftId,
                text: "no qualifying character found",
                section_state: `${e.variant}|${e.status}`
              }), void a({
                type: "FINISHED"
              })) : "SUCCESS" === e.status || "ALREADY_CLAIMED" === e.status ? ("stateful" === e.variant && _({
                element_placement: "WOC",
                section_state: `${e.variant}|${e.status}`
              }), r({
                element_placement: "WOC",
                event: "alert_update",
                o_id: e.giftId,
                text: "success",
                section_state: `${e.variant}|${e.status}`
              }), void a({
                type: "FINISHED"
              })) : void 0;
              v()
            } else i && i.characters && i.characters.gtao.length > 0 ? a({
              type: "START_CLAIM"
            }) : a({
              type: "LINK_ACCOUNT"
            })
          }, [n, f, i, e.status]), (0, m.useEffect)(() => {
            _({
              element_placement: "WOC",
              section_state: `${e.variant}|${e.status}`
            })
          }, [d, e.variant, e.status, _]), {
            ref: l
          }
        };
      var dn = t(66760);
      const _n = e => 0 === (new DOMParser).parseFromString(e, "text/html").body.textContent.trim().length,
        mn = (0, U.defineMessages)({
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
        un = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, U.useIntl)(), {
            state: t,
            dispatch: s
          } = nn(), r = (0, m.useCallback)(() => {
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
            disclaimer: l
          } = t.steps.error, d = _n(l ?? ""), u = t.steps.unclaimed.disclaimer, g = t.steps.unclaimed.image, {
            alt: b,
            src: p
          } = (0, z.useImageParser)(i ?? g ?? {});
          return (0, _.jsxs)(tn.Root, {
            view: e,
            children: [(0, _.jsx)(tn.Image, {
              alt: b ?? "",
              src: p ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, _.jsxs)(tn.Container, {
              children: [(0, _.jsxs)(tn.Content, {
                children: [(0, _.jsx)(dn.TriangleAlert, {
                  size: "XL",
                  color: Dr.LU.alias.color.icon.danger,
                  label: a(mn.web_offer_claim_error_state_icon_label)
                }), (0, _.jsx)(tn.Heading, {
                  level: 4,
                  children: o
                }), c && (0, _.jsx)(tn.Description, {
                  children: n({
                    children: c
                  })
                })]
              }), (0, _.jsxs)(tn.Footer, {
                children: [(0, _.jsx)(tn.Actions, {
                  children: (0, _.jsx)(tn.Button, {
                    appearance: "primary",
                    onClick: r,
                    children: a(mn.web_offer_claim_error_state_button)
                  })
                }), "stateful" === t.variant && (l || u) && (0, _.jsx)(tn.Disclaimer, {
                  children: n({
                    children: d ? u : l
                  })
                })]
              })]
            })]
          })
        };
      var gn = t(46966);
      const bn = ({
          trackingHandler: e,
          href: a,
          label: t,
          target: s,
          ...r
        }) => (0, _.jsx)(tn.Button, {
          ...r,
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
            target: s,
            children: t
          })
        }),
        pn = ({
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
            i = !t.accountSynced,
            {
              label: o,
              href: c,
              target: l
            } = (0, m.useMemo)(() => {
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
          return (0, _.jsx)(bn, {
            label: o,
            href: c,
            target: l,
            isLoading: i,
            ...a
          })
        },
        fn = ["ps5", "xboxsx", "pcalt"],
        kn = e => {
          const {
            data: a
          } = (0, b.useRockstarUser)(), {
            charactersNeeded: t,
            setCharactersNeeded: s
          } = (0, b.useRockstarUserState)();
          t || s("gtao");
          const r = a.gamesPlayed?.gtav,
            n = (0, m.useMemo)(() => !!r && fn.includes(r), [r]),
            {
              hasGtaPlus: i
            } = a;
          return !i && n && (0, _.jsx)(bn, {
            href: "https://www.rockstargames.com/gta-plus/join",
            target: "_self",
            ...e
          })
        },
        hn = e => {
          const {
            track: a
          } = (0, b.useGtmTrack)(), {
            state: t
          } = nn();
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
              }, i = (0, or.mergeProps)({
                trackingHandler: n
              }, r);
              return (0, _.jsx)(pn, {
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
              }, i = (0, or.mergeProps)({
                trackingHandler: n
              }, r);
              return (0, _.jsx)(kn, {
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
              }, i = (0, or.mergeProps)({
                trackingHandler: n
              }, r);
              return (0, _.jsx)(bn, {
                ...i
              })
            }
          }
        },
        vn = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, U.useIntl)(), {
            state: t
          } = nn(), {
            RichTextComponent: s
          } = t, {
            image: r,
            heading: n,
            description: i,
            ctas: o,
            disclaimer: c
          } = t.steps[t.currentStep], l = t.steps.unclaimed.image, d = _n(c ?? ""), m = t.steps.unclaimed.disclaimer, {
            alt: u,
            src: g
          } = (0, z.useImageParser)(r ?? l ?? {});
          return (0, _.jsxs)(tn.Root, {
            view: e,
            children: [(0, _.jsx)(tn.Image, {
              alt: u ?? "",
              src: g ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, _.jsxs)(tn.Container, {
              children: [(0, _.jsxs)(tn.Content, {
                children: [(0, _.jsx)(tn.Header, {
                  children: (0, _.jsx)(dn.Check, {
                    size: "XL",
                    color: gn.LU.alias.color.icon.success,
                    label: a(mn.web_offer_claim_success_state_icon_label)
                  })
                }), (0, _.jsx)(tn.Heading, {
                  level: 4,
                  children: n
                }), i && (0, _.jsx)(tn.Description, {
                  children: s({
                    children: i
                  })
                })]
              }), (0, _.jsxs)(tn.Footer, {
                children: [o && o.length > 0 && (0, _.jsx)(tn.Actions, {
                  children: o.map((e, a) => (0, _.jsx)(hn, {
                    ...e
                  }, a))
                }), "stateful" === t.variant && (c || m) && (0, _.jsx)(tn.Disclaimer, {
                  children: s({
                    children: d ? m : c
                  })
                })]
              })]
            })]
          })
        },
        yn = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, U.useIntl)(), t = (0, g.useGetTpaLinkGenerator)(), {
            state: s
          } = nn(), {
            track: r
          } = (0, b.useGtmTrack)(), {
            RichTextComponent: n
          } = s, {
            image: i,
            heading: o,
            description: c,
            disclaimer: l
          } = s.steps["link-account"], d = (0, m.useCallback)(async e => {
            const a = (0, g.findPlatform)(e)?.onlineService;
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
          }, [t, r, s.returnUrl, s.giftId]), u = (0, m.useCallback)(() => {
            d("xbox")
          }, [d]), p = (0, m.useCallback)(() => {
            d("ps")
          }, [d]), f = _n(l ?? ""), k = s.steps.unclaimed.disclaimer, h = s.steps.unclaimed.image, {
            alt: v,
            src: y
          } = (0, z.useImageParser)(i ?? h ?? {});
          return (0, _.jsxs)(tn.Root, {
            view: e,
            children: [(0, _.jsx)(tn.Image, {
              alt: v ?? "",
              src: y ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, _.jsxs)(tn.Container, {
              children: [(0, _.jsxs)(tn.Content, {
                children: [(0, _.jsx)(dn.TriangleAlert, {
                  size: "XL",
                  color: Dr.LU.alias.color.icon.danger,
                  label: a(mn.web_offer_claim_link_account_state_icon_label)
                }), (0, _.jsx)(tn.Heading, {
                  level: 4,
                  children: o
                }), c && (0, _.jsx)(tn.Description, {
                  children: n({
                    children: c
                  })
                })]
              }), (0, _.jsxs)(tn.Footer, {
                children: [(0, _.jsxs)(tn.Actions, {
                  children: [(0, _.jsx)(tn.LinkXBoxButton, {
                    target: "_self",
                    onClick: u
                  }), (0, _.jsx)(tn.LinkPSButton, {
                    target: "_self",
                    onClick: p
                  })]
                }), "stateful" === s.variant && (l || k) && (0, _.jsx)(tn.Disclaimer, {
                  children: n({
                    children: f ? k : l
                  })
                })]
              })]
            })]
          })
        },
        jn = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, U.useIntl)(), {
            state: t
          } = nn(), {
            image: s
          } = t.steps.unclaimed, {
            alt: r,
            src: n
          } = (0, z.useImageParser)(s ?? {});
          return (0, _.jsxs)(tn.Root, {
            view: e,
            children: [(0, _.jsx)(tn.Image, {
              alt: r ?? "",
              src: n ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, _.jsxs)(tn.Container, {
              children: [(0, _.jsx)(tn.Header, {
                children: (0, _.jsx)(ir.s6, {
                  children: (0, _.jsx)(tn.Heading, {
                    level: 5,
                    children: a(mn.web_offer_claim_loading_state)
                  })
                })
              }), (0, _.jsx)(tn.Content, {
                children: (0, _.jsx)(tn.Description, {
                  asChild: !0,
                  children: (0, _.jsx)(tn.Loading, {
                    label: a(mn.web_offer_claim_loading_state)
                  })
                })
              })]
            })]
          })
        },
        xn = ({
          label: e,
          ...a
        }) => {
          const {
            loggedIn: t
          } = (0, b.useRockstarUser)(), {
            state: s,
            dispatch: r
          } = nn(), [, n] = (0, u.useSearchParams)(), i = (0, m.useCallback)(() => {
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
          }, [r, t, n, s.giftId, s.jumpLinkId]), o = (0, or.mergeProps)({
            appearance: a.appearance ?? "primary"
          }, a);
          return (0, _.jsx)(_r, {
            onPress: i,
            ...o,
            view: "stateful" !== s.variant ? "dialog" : "default",
            children: e
          })
        },
        wn = ({
          view: e = "default"
        }) => {
          const {
            state: a
          } = nn(), {
            RichTextComponent: t
          } = a, {
            image: s,
            badge: r,
            heading: n,
            description: i,
            disclaimer: o
          } = a.steps.unclaimed, {
            alt: c,
            src: l
          } = (0, z.useImageParser)(s ?? {}), d = a.steps.unclaimed["button-label"];
          return (0, _.jsxs)(tn.Root, {
            view: e,
            children: [(0, _.jsx)(tn.Image, {
              alt: c ?? "",
              src: l ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, _.jsxs)(tn.Container, {
              children: [(0, _.jsxs)(tn.Content, {
                children: [r && (0, _.jsx)(tn.Badge, {
                  children: r
                }), (0, _.jsx)(tn.Heading, {
                  level: 4,
                  children: n
                }), i && (0, _.jsx)(tn.Description, {
                  children: t({
                    children: i
                  })
                })]
              }), (0, _.jsxs)(tn.Footer, {
                children: [d && (0, _.jsx)(tn.Actions, {
                  children: (0, _.jsx)(xn, {
                    appearance: "primary",
                    size: "LG",
                    label: d,
                    view: "stateful" !== a.variant ? "dialog" : "default"
                  })
                }), o && (0, _.jsx)(tn.Disclaimer, {
                  children: t({
                    children: o
                  })
                })]
              })]
            })]
          })
        },
        Nn = () => {
          const {
            state: e
          } = nn(), {
            ref: a
          } = ln();
          return (0, _.jsx)(lr, {
            jumpLinkId: e.jumpLinkId,
            currentStep: e.currentStep,
            "data-exclude-legacy-typography-css": !0,
            ref: a,
            children: "stateful" === e.variant ? (0, _.jsx)(Sn, {}) : (0, _.jsx)(Cn, {})
          })
        },
        Sn = nr(() => (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)(tn, {
            stepIndex: "loading",
            children: (0, _.jsx)(jn, {})
          }), (0, _.jsx)(tn, {
            stepIndex: "unclaimed",
            children: (0, _.jsx)(wn, {})
          }), (0, _.jsx)(tn, {
            stepIndex: "success",
            children: (0, _.jsx)(vn, {})
          }), (0, _.jsx)(tn, {
            stepIndex: "error",
            children: (0, _.jsx)(un, {})
          }), (0, _.jsx)(tn, {
            stepIndex: "link-account",
            children: (0, _.jsx)(yn, {})
          })]
        })),
        Cn = nr(() => {
          const {
            formatMessage: e
          } = (0, U.useIntl)(), {
            state: a
          } = nn(), {
            isOpen: t,
            setIsOpen: s
          } = (() => {
            const {
              state: e
            } = nn(), a = (() => {
              const [, e] = (0, u.useSearchParams)(), {
                dispatch: a
              } = nn();
              return (0, m.useCallback)(() => {
                e(e => (e.delete(sn), e), {
                  replace: !0
                }), a({
                  type: "RESET"
                })
              }, [a, e])
            })(), t = (0, m.useCallback)(e => {
              e || a()
            }, [a]);
            return {
              isOpen: e.dialogOpen,
              setIsOpen: t
            }
          })(), r = "dialog";
          return (0, _.jsxs)(sr.Dialog.Root, {
            isOpen: t,
            onOpenChange: s,
            children: ["static" === a.variant && (0, _.jsx)(wn, {
              view: "default"
            }), (0, _.jsx)(sr.Dialog.Portal, {
              children: (0, _.jsx)(sr.Dialog.Overlay, {
                children: (0, _.jsxs)(sr.Dialog.Content, {
                  children: [(0, _.jsx)(sr.Dialog.CloseButton, {
                    label: e(mn.web_offer_claim_dialog_close),
                    onPress: () => s(!1)
                  }), (0, _.jsx)(sr.Dialog.ScrollArea, {
                    style: {
                      overflowY: "auto"
                    },
                    children: (0, _.jsxs)(sr.Dialog.Layout, {
                      children: [(0, _.jsx)(tn, {
                        stepIndex: "loading",
                        children: (0, _.jsx)(jn, {
                          view: r
                        })
                      }), (0, _.jsx)(tn, {
                        stepIndex: "success",
                        children: (0, _.jsx)(vn, {
                          view: r
                        })
                      }), (0, _.jsx)(tn, {
                        stepIndex: "error",
                        children: (0, _.jsx)(un, {
                          view: r
                        })
                      }), (0, _.jsx)(tn, {
                        stepIndex: "link-account",
                        children: (0, _.jsx)(yn, {
                          view: r
                        })
                      }), (0, _.jsx)(tn, {
                        stepIndex: "exists",
                        children: (0, _.jsx)(vn, {
                          view: r
                        })
                      })]
                    })
                  })]
                })
              })
            })]
          })
        }),
        Tn = (nr(Nn), ({
          children: e
        }) => e ? "string" != typeof e ? (console.error("RichText expects to be a string"), null) : (0, _.jsx)(z.TinaRichText, {
          html: e
        }) : null),
        En = ({
          children: e,
          initialState: a
        }) => {
          const [t, s] = (0, m.useReducer)(cn, a);
          return (0, _.jsx)(rn.Provider, {
            value: {
              state: t,
              dispatch: s
            },
            children: e
          })
        },
        In = nr(({
          giftId: e,
          location: a,
          jumpLinkId: t,
          variant: s = "stateful",
          steps: r
        }) => {
          const n = `${document.location.pathname}${document.location.search}#${t}`,
            i = (0, z.usePrunedTinaKeys)(r),
            o = on({
              giftId: e,
              location: a,
              returnUrl: n,
              jumpLinkId: t,
              steps: i,
              variant: s,
              RichTextComponent: Tn
            }),
            {
              hash: c
            } = (0, u.useLocation)();
          return (0, m.useLayoutEffect)(() => {
            const e = document.getElementById(t);
            e && c.includes(t) && e.scrollIntoView({
              behavior: "instant",
              block: "center"
            })
          }, []), (0, _.jsx)(En, {
            initialState: o,
            children: r && (0, _.jsx)(Nn, {})
          })
        }),
        zn = {
          CalloutSection: l.A,
          Card: va,
          CardWithImageGallery: Oa,
          ConditionalBlock: h,
          CommunityChallenges: Hs.default,
          CoverCard: Va,
          Cta: v.A,
          FoundryButton: w,
          FoundryIconButton: N,
          DiscoveryCallout: Ws.A,
          EventsDeck: $s,
          PageTemplate: Vs.default,
          ExpandingPlatformButton: S.A,
          TextCard: Ss,
          Deck: As,
          Grid: E,
          Hero: V,
          Highlights: Ms.Highlights,
          HighlightsItem: Ms.HighlightsItem,
          HTMLElement: H,
          NewsletterSubscription: ce,
          OrderedList: le.A,
          ParallaxInnerLayer: _e,
          ParallaxOuterLayer: ue,
          ParallaxWrapper: pe,
          UnorderedList: fe.A,
          ImageWithBadge: ke.A,
          ImageTextGroupGroup: nt.A,
          Carousel: d.A,
          GroupOfItems: Ee.default,
          Rating: xe.A,
          gen9: tr,
          TinaModuleFetchNRender: Ce.A,
          TwitchDrops: Us.default,
          PromoModule: je,
          RockstarVideoPlayer: c(),
          Engagement: Fs.default,
          WebOfferClaim: In
        },
        An = {
          CalloutSection: l.A,
          Card: va,
          CardWithImageGallery: Oa,
          ConditionalBlock: h,
          CoverCard: Va,
          Carousel: d.A,
          ExpandingPlatformButton: S.A,
          Hero: V,
          Grid: E,
          TextCard: Ss,
          Deck: As,
          GroupOfItems: Ee.default,
          ParallaxInnerLayer: _e,
          ParallaxOuterLayer: ue,
          ParallaxWrapper: pe,
          PromoModule: je,
          Engagement: Fs.default,
          WebOfferClaim: In,
          NewsletterSubscription: ce,
          gen9: {
            BuyNow: qs.A,
            Disclaimer: Ks.A,
            FAQ: Ys.Ay,
            Guide: Xs.A,
            GuideGroup: Zs.A,
            GuideIntro: Js.A,
            GuideSection: Qs.A,
            Hero: V,
            ImageTextGroupGroup: nt.A,
            LinkoutSection: er.A,
            TinaWrapper: ar.A,
            UserVote: () => null
          },
          HTMLElement: H,
          OrderedList: le.A,
          UnorderedList: fe.A,
          ImageWithBadge: ke.A,
          Rating: xe.A,
          TinaModuleFetchNRender: Ce.A,
          UserVote: Se
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
    58963(e, a, t) {
      var s = {
        "./VI/desktop/global.jpg": 57156
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
      }, r.resolve = n, e.exports = r, r.id = 58963
    },
    25087(e, a, t) {
      var s = {
        "./VI/mobile/global.jpg": 52640
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
      }, r.resolve = n, e.exports = r, r.id = 25087
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