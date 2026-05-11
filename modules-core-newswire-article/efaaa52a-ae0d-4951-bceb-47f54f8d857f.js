try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "efaaa52a-ae0d-4951-bceb-47f54f8d857f", e._sentryDebugIdIdentifier = "sentry-dbid-efaaa52a-ae0d-4951-bceb-47f54f8d857f")
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
  [9593], {
    65211(e) {
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
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (r[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }(a, "GetAudioAlbum")
    },
    50828(e) {
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
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (r[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
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
    95520(e) {
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
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (r[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }(a, "GameData")
    },
    48524(e) {
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
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (r[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
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
    46368(e) {
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
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (r[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
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
    46823(e) {
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
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (r[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }(a, "TinaModulesList")
    },
    11015(e) {
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
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (r[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var r = s(e, a);
          r && t.definitions.push(r)
        }), t
      }(a, "TinaModulesInfo")
    },
    52470(e) {
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
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (r[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
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
    52224(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => _
      });
      var r = t(42295),
        s = t(71127),
        i = t(87731),
        n = t.n(i),
        o = t(13331),
        c = t(65211);
      const d = {
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
        l = ({
          src: e
        }) => (0, r.jsx)("div", {
          className: d.cover,
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
          tracksOpen: o,
          setTracksOpen: c,
          trackData: l,
          setTrackId: m,
          trackBounds: u,
          setAutoNext: _
        }) => {
          const g = (0, s.useRef)(null),
            b = (0, s.useRef)(null),
            f = (0, s.useRef)(null),
            [p, k] = (0, s.useState)(null),
            [v, h] = (0, s.useState)(!1),
            w = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                r = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`
            };
          return (0, s.useEffect)(() => {
            if (!b.current || !f.current) return;
            const e = () => {
              f.current && b.current && k(f.current.clientWidth > b.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }, [f, b, e]), (0, s.useEffect)(() => {
            if (!g.current || !e?.duration) return;
            let a = null;
            const r = new(n())(g.current),
              s = a => {
                if (g.current) {
                  const r = g.current.clientWidth;
                  if (!g.current.contains(a.srcEvent.target)) return;
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
          }, [g.current, e.duration]), (0, s.useEffect)(() => {
            const e = Number(t?.currentTime);
            (a || !isNaN(e) && 0 !== e) && h(!0)
          }, [a, t?.currentTime]), (0, r.jsxs)("div", {
            className: d.controls,
            style: {
              "--track-color": l.color,
              "--track-mix-blend-mode": l.mix_blend_mode,
              "--current-pct": e.current / e.duration
            },
            children: [(0, r.jsx)("div", {
              className: [d.controlsCurrentBg, v ? d.controlsCurrentBgVisible : ""].join(" ")
            }), (0, r.jsx)("div", {
              className: d.controlsTrack,
              ref: b,
              children: (0, r.jsx)("span", {
                className: [d.controlsTrackTitle, p ? d.controlsTrackAnimating : ""].join(" "),
                ref: f,
                children: l.title
              })
            }), (0, r.jsxs)("div", {
              className: d.controlsButtons,
              children: [(0, r.jsx)("div", {
                className: d.controlsPrevTrack,
                onClick: () => {
                  u && (m(u[0]), _(!0), i(!0))
                }
              }), (0, r.jsx)("div", {
                className: [d.controlsPlayPause, a ? d.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!a)
                }
              }), (0, r.jsx)("div", {
                className: d.controlsNextTrack,
                onClick: () => {
                  u && (m(u[1]), _(!0), i(!0))
                }
              })]
            }), (0, r.jsx)("div", {
              "data-active": o ? "" : null,
              className: d.controlsTrackBurger,
              children: (0, r.jsx)("div", {
                className: d.iconBurger,
                onClick: () => {
                  c(!o)
                }
              })
            }), (0, r.jsxs)("div", {
              className: d.controlsScrub,
              children: [(0, r.jsx)("span", {
                children: w(e.current)
              }), (0, r.jsx)("div", {
                className: d.controlsScrubTrack,
                ref: g
              }), (0, r.jsx)("span", {
                children: w(e.duration)
              })]
            })]
          })
        },
        u = ({
          tracks: e,
          trackId: a,
          setTrackId: t,
          tracksOpen: s,
          setTracksOpen: i,
          setPlaying: n,
          setAutoNext: o
        }) => (0, r.jsxs)("div", {
          className: d.tracks,
          children: [(0, r.jsx)("h4", {
            children: "Tracks"
          }), (0, r.jsx)("div", {
            className: d.trackBurger,
            onClick: () => {
              i(!s)
            }
          }), (0, r.jsx)("div", {
            className: d.trackList,
            children: e.map((e, s) => (0, r.jsxs)("a", {
              style: {
                "--highlight-color": e.color
              },
              className: a === e.id ? d.trackActive : "",
              onClick: () => {
                t(e.id), n(!0), o(!0)
              },
              children: [(0, r.jsx)("span", {
                className: d.trackIndex,
                children: String(s + 1).padStart(2, "0")
              }), (0, r.jsx)("span", {
                className: d.trackTitle,
                children: e.title
              }), (0, r.jsx)("span", {
                className: d.trackTime,
                children: e.duration
              })]
            }, e.id))
          })]
        }),
        _ = ({
          id: e,
          className: a = ""
        }) => {
          const {
            data: t
          } = (0, o.useQuery)(c.GetAudioAlbum, {
            variables: {
              id: e
            }
          }), [i, n] = (0, s.useState)(), [_, g] = (0, s.useState)(), [b, f] = (0, s.useState)(), [p, k] = (0, s.useState)(!1), [v, h] = (0, s.useState)(!1), [w, x] = (0, s.useState)(), [y, j] = (0, s.useState)({
            current: 0,
            duration: 0
          }), [N, S] = (0, s.useState)(!0);
          return (0, s.useEffect)(() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (g(a.data.rockstarAudioPlayerPlayTrackId), S(!1), h(!0)), v && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && h(!1)
              };
            return v && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }, [v]), (0, s.useEffect)(() => {
            if (!w) return;
            const e = () => {
                isNaN(w.duration) || j({
                  duration: w?.duration ?? 0,
                  current: w?.currentTime ?? 0
                })
              },
              a = () => {
                N && i && g(i[1])
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
          }, [v, w, b?.id]), (0, s.useEffect)(() => {
            if (!_) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex(e => e.id === _);
            n([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), f(e[a])
          }, [_]), (0, s.useEffect)(() => {
            t && g(t.audioAlbum.tracks[0].id)
          }, [t]), b ? (0, r.jsxs)("div", {
            className: [d.player, d[a], p ? d.tracksOpen : ""].join(" "),
            children: [(0, r.jsx)("audio", {
              ref: e => {
                x(e)
              },
              src: b.mp3_src
            }), (0, r.jsx)(u, {
              tracks: t.audioAlbum.tracks,
              setTrackId: g,
              trackId: _,
              tracksOpen: p,
              setTracksOpen: k,
              setPlaying: h,
              setAutoNext: S
            }), (0, r.jsx)(l, {
              src: b.cover_src
            }), (0, r.jsx)(m, {
              setTrackId: g,
              trackBounds: i,
              tracksOpen: p,
              setTracksOpen: k,
              playing: v,
              setPlaying: h,
              timing: y,
              trackData: b,
              audioRef: w,
              setAutoNext: S
            })]
          }) : null
        }
    },
    46209(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var r = t(42295),
        s = t(71127),
        i = t(21352),
        n = t(13331),
        o = t(82199),
        c = t(50828),
        d = t(29625);
      const l = ({
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
        u = ({
          foreign_id: e,
          foreign_type: a
        }) => {
          const {
            track: t
          } = (0, o.useGtmTrack)(), {
            refetch: i
          } = (0, n.useQuery)(c.UserGetVote, {
            skip: !0
          }), [d] = (0, n.useMutation)(c.UserCastVote), [l, u] = (0, s.useState)(null), _ = (0, s.useCallback)(r => {
            (async () => {
              if (r === l && null !== l) u(null);
              else {
                u(r), t({
                  event: "cta_" + (r ? "like" : "dislike"),
                  text: `${a} ${e}`
                });
                const s = {
                  foreignId: e,
                  foreignType: a,
                  vote: r
                };
                await d({
                  variables: s
                })
              }
            })()
          }, [e, a, l]);
          return (0, s.useEffect)(() => {
            e && a && (async () => {
              const t = await i({
                foreignId: e,
                foreignType: a
              });
              u(t?.data?.userGetVote?.vote ?? null)
            })()
          }, [e, a]), (0, r.jsxs)("div", {
            className: m.calloutVoteForm,
            children: [(0, r.jsx)("button", {
              "aria-label": "upvote",
              className: [m.upvote, m.voteButton, l ? m.active : ""].join(" "),
              name: "upvote",
              onClick: () => _(!0),
              type: "button"
            }), (0, r.jsx)("button", {
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
            track: s
          } = (0, o.useGtmTrack)();
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
              children: [e, (0, r.jsx)(l, {
                className: m.calloutLinkIcon
              })]
            })
          })
        },
        g = ({
          helperText: e,
          linkText: a,
          link: t,
          trackingData: s
        }) => {
          const {
            track: i
          } = (0, o.useGtmTrack)();
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
        b = (0, n.withTranslations)(({
          header: e,
          subheader: a,
          type: t,
          action_text: c,
          link: l,
          foreign_id: b = document.location.pathname,
          foreign_type: f = "url",
          className: p = "",
          actionFooterHelperText: k,
          actionFooterLinkText: v,
          actionFooterLink: h,
          trackingData: w = {},
          actionFooterLinkTrackingData: x = {},
          t: y,
          ...j
        }) => {
          const {
            loggedIn: N
          } = (0, o.useRockstarUser)(), {
            track: S
          } = (0, o.useGtmTrack)(), T = document.location.pathname, {
            signInUrl: C
          } = (0, n.useScAuthLinks)(T), {
            ref: z,
            inView: I
          } = (0, i.useInView)({
            threshold: .6
          }), [A, E] = (0, s.useState)(!1);
          let P;
          if ((0, s.useEffect)(() => {
              I && !A && (S({
                event: "page_section_impression",
                element_placement: `callout section - ${j?.sectionName??j?._memoq?.header}`
              }), E(!0))
            }, [I]), !e && !a) return null;
          switch (t) {
            case "vote":
              if (!N) {
                P = (0, r.jsx)(d.A, {
                  to: C,
                  className: m.calloutButton,
                  onClick: w ? () => S({
                    ...w
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              P = (0, r.jsx)(u, {
                foreign_id: b,
                foreign_type: f
              });
              break;
            case "button":
              c && l && (P = (0, r.jsx)(d.A, {
                to: l,
                className: m.calloutButton,
                onClick: w ? () => S({
                  ...w
                }) : () => {},
                children: c
              }));
              break;
            case "link":
              c && l && (P = (0, r.jsx)(_, {
                action_text: c,
                link: l,
                trackingData: w
              }));
              break;
            default:
              P = null
          }
          return (0, r.jsx)("div", {
            className: `${m.calloutContainer} ${p||""}`,
            ref: z,
            children: (0, r.jsxs)("div", {
              className: m.calloutSection,
              children: [(0, r.jsxs)("div", {
                className: [m.calloutHeaders, P ? m.calloutHeaderMargins : ""].join(" "),
                children: [e && (0, r.jsx)("h2", {
                  className: m.calloutHeader,
                  children: y(e)
                }), a && (0, r.jsx)("h3", {
                  className: m.calloutSubheader,
                  children: y(a)
                })]
              }), (0, r.jsxs)("div", {
                className: m.actionBlock,
                children: [P, k && (0, r.jsx)(g, {
                  helperText: k,
                  linkText: v,
                  link: h,
                  trackingData: x
                })]
              })]
            })
          })
        })
    },
    24769(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var r = t(42295),
        s = t(71127),
        i = t(24162),
        n = t(85827),
        o = t(11206),
        c = t(1556),
        d = t(46219);
      const l = {
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
      var m = t(26708),
        u = t(10632);
      const _ = ({
          item: e
        }) => (0, r.jsxs)("div", {
          children: [(0, r.jsx)(u.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, c.default)(l.img, e?.className)
          }), (e?.title || e?.description) && (0, r.jsx)(m.A, {
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
        b = ({
          children: e,
          items: a = [],
          style: t = {},
          noInfiniteScroll: u = !1,
          className: b = "",
          renderTemplate: f = "standard",
          text: p,
          customSpaceBetween: k = null,
          centerSlides: v = !0,
          centeredSlidesBounds: h = !1
        }) => {
          const w = (0, d.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [x, y] = (0, s.useState)(0),
            [j, N] = (0, s.useState)(null),
            S = (0, s.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, o.A)()) : null, [e, w]),
            T = e => {
              if (!e) return;
              let a = 0;
              e.pagination.bullets.forEach((e, t) => {
                e.classList.contains("swiper-pagination-bullet-active") && (a = t)
              }), y(a)
            };
          if (!(a && 0 !== a?.length || e)) return null;
          const C = {
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
            className: (0, c.default)(l.deprecatedCarousel, l[f], l.infinite_true, e ? l.renderedWithChildren : "", b),
            style: t,
            "data-testid": "carousel",
            children: [(0, r.jsxs)(i.RC, {
              modules: [n.dK, n.Jq],
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
              breakpoints: C,
              onSlideChange: e => {
                T(e)
              },
              onResize: e => {
                null != j && clearTimeout(j);
                const a = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), T(e)
                }, 250);
                N(a)
              },
              children: [(0, r.jsx)("div", {
                className: l.trackWrapper,
                children: (0, r.jsxs)("div", {
                  className: l.track,
                  children: [a?.map(e => (0, r.jsx)(i.qr, {
                    tabIndex: 0,
                    children: (0, r.jsx)(_, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, a) => e && (0, r.jsx)(i.qr, {
                    children: e
                  }, S && S[a]))]
                })
              }), (0, r.jsx)(g, {
                current: x,
                total: e ? e.length : a.length
              })]
            }), (p?.title || p?.description) && (0, r.jsx)(m.A, {
              item: p
            })]
          })
        }
    },
    89230(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => h
      });
      var r = t(42295),
        s = t(71127),
        i = t(10181),
        n = t(82199),
        o = t(13331),
        c = t(80391),
        d = t(28985),
        l = t(47240),
        m = t(32903),
        u = t(81715),
        _ = t(49429),
        g = t(11008);
      const b = {
          ps: c,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: d,
          ps5: l,
          switch: g,
          nintendoswitch: g,
          nintendoswitch2: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7696cbc8ff9dc5f2ed3f618ea7252e3b.svg",
          xbox: m,
          xboxone: _,
          xboxseriesxs: u,
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
        f = e => b[e] || null,
        p = {
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
      var k = t(1556);
      const v = ({
          platform: e = "",
          altText: a
        }) => {
          const t = e ? f(e) : null,
            s = t ? (0, r.jsx)("img", {
              className: p.platformIcon,
              src: t,
              alt: a
            }) : null;
          return (0, r.jsx)("span", {
            className: [p.btnContent, p.platformButton].join(" "),
            children: s
          })
        },
        h = ({
          children: e,
          href: a,
          style: t,
          content: c,
          variant: d = null,
          size: l = "medium",
          icon: m,
          iconPosition: u = "none",
          iconStyle: _,
          badge: g,
          badgeStyle: b,
          platformItem: h,
          platformStyle: w = "border",
          gtm: x = {},
          disabled: y,
          reloadDocument: j = !1,
          className: N,
          role: S
        }) => {
          const {
            track: T
          } = (0, n.useGtmTrack)(), C = (0, o.useDataLayer)(), z = c ?? e, I = (0, o.findPlatform)(h)?.friendlyName, A = (0, s.useMemo)(() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch {
              t = e
            }
            return e === t
          }, [a]), E = (0, s.useCallback)(() => {
            y || T({
              event: "cta_other",
              text: c?.toLowerCase() ?? e ?? void 0,
              ...C,
              ...x,
              link_url: a ?? void 0
            })
          }, [x, a, C]), P = () => m ? (0, r.jsx)("span", {
            className: [p.icon, `icon-${u}`].join(" "),
            style: _,
            children: (0, r.jsx)("img", {
              className: p.btnIcon,
              src: f(m) || "",
              alt: `${m} icon`
            })
          }) : null;
          return (0, r.jsx)(i.Link, {
            to: a,
            target: A ? "_self" : "_blank",
            className: (0, k.default)(p.cta, "platform" === d && h ? p[h] : "", w && p[w], y ? p.disabled : "", N),
            style: t,
            "data-variant": d,
            "data-size": l,
            onClick: E,
            "aria-label": z,
            reloadDocument: j,
            role: S,
            children: "platform" === d && h ? (0, r.jsx)(v, {
              platform: h,
              altText: I || z
            }) : (0, r.jsxs)("div", {
              className: p.btnContent,
              children: ["left" === u && P(), (0, r.jsx)("span", {
                className: p.label,
                children: z
              }), "right" === u && P(), g ? (0, r.jsx)("span", {
                className: p.badge,
                style: b,
                children: g
              }) : null]
            })
          })
        }
    },
    26708(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var r = t(42295),
        s = t(1556),
        i = t(4407),
        n = t(93935),
        o = t(79704);
      const c = "rockstargames-modules-core-newswire-articleacd27eff2209196752622710f7b27558",
        d = ({
          to: e,
          children: a
        }) => e ? (0, r.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        l = ({
          item: e,
          className: a = ""
        }) => (0, r.jsxs)("div", {
          className: (0, s.default)("rockstargames-modules-core-newswire-articlef8bc9589974046cdac4a2264be12d2df", a),
          children: [e.title && (0, r.jsx)(d, {
            to: e?.href ?? e?.to,
            children: (0, r.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, a) => e?.unorderedList ? (0, r.jsx)(n.A, {
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
            children: (0, r.jsx)(o.A, {})
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
    1057(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var r = t(42295),
        s = t(71127);
      const i = {
          animateBox: "rockstargames-modules-core-newswire-articleb07a3be6338e0ba4b346b072762582e3",
          animateMe: "rockstargames-modules-core-newswire-articlef7adfd0186421cac9ad0b300911cc9af",
          bar: "rockstargames-modules-core-newswire-articlebbb7e636ac00581aed0b7e148916cc11",
          barGrow: "rockstargames-modules-core-newswire-articlee0262d00df9ad8a47b08ae84160bfa51",
          fadeArea: "rockstargames-modules-core-newswire-articlef47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-modules-core-newswire-articlec121e11e40215dc778fe8665eb38845d"
        },
        n = ({
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
    67288(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(42295),
        s = t(45881);
      const i = ({
        html: e
      }) => (0, r.jsx)("div", {
        children: (0, s.Ay)(e)
      })
    },
    13897(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var r = t(82199),
        s = t(71127);
      const i = (e = [], a, t) => {
          const r = (0, s.useRef)(null),
            i = (0, s.useRef)(new Set),
            n = (0, s.useRef)([]),
            o = (0, s.useRef)(0),
            c = (0, s.useRef)(0),
            d = (0, s.useRef)(!1),
            l = (0, s.useMemo)(() => Array.from(new Set(e.filter(e => e >= 0 && e <= 100))).sort((e, a) => e - a), [e]);
          return (0, s.useEffect)(() => {
            i.current = new Set, n.current = l.slice()
          }, [l]), (0, s.useEffect)(() => {
            r.current = t ?? window
          }, [t]), (0, s.useEffect)(() => {
            const e = r.current;
            if (!e) return;
            const s = () => {
              d.current || (d.current = !0, requestAnimationFrame(() => {
                (() => {
                  const {
                    scrollTop: r,
                    scrollHeight: d,
                    percent: l
                  } = (() => {
                    const e = t,
                      a = document.documentElement,
                      r = document.body,
                      s = e ? e.scrollTop : a.scrollTop || r.scrollTop || window.scrollY || 0,
                      i = e ? e.scrollHeight : a.scrollHeight || r.scrollHeight || 0,
                      n = e ? e.clientHeight : a.clientHeight || window.innerHeight || 0,
                      o = Math.max(1, i - n);
                    return {
                      scrollTop: s,
                      scrollHeight: i,
                      percent: Math.max(0, Math.min(100, s / o * 100))
                    }
                  })();
                  o.current = l, c.current = r;
                  const m = n.current.find(e => l >= e);
                  if (!m) return;
                  if (i.current.has(m)) return;
                  i.current.add(m), n.current = n.current.filter(e => e !== m);
                  const u = d * (m / 100);
                  a?.({
                    scrollY: m,
                    scrollLength: u
                  }), 0 === n.current.length && e.removeEventListener("scroll", s, {
                    capture: !1
                  })
                })(), d.current = !1
              }))
            };
            return s(), e.addEventListener("scroll", s, {
              passive: !0
            }), () => {
              e.removeEventListener("scroll", s, {
                capture: !1
              })
            }
          }, [a, t, l.join(",")]), {
            scrollY: o.current,
            scrollLength: c.current
          }
        },
        n = ({
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
    67050(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var r = t(42295),
        s = t(71127),
        i = t(10181),
        n = t(13331);
      const o = (0, n.withTranslations)(({
        t: e
      }) => {
        const [a] = (0, s.useState)(""), t = (0, i.useNavigate)(), o = (0, n.useMutateState)();
        return (0, r.jsxs)("form", {
          action: "#",
          className: "rockstargames-modules-core-newswire-articlec9f16d9c2f4a943ae8f1f900f31b5f4b",
          onSubmit: e => {
            e.preventDefault(), o({
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
    61306(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var r = t(42295),
        s = t(71127),
        i = t(55087),
        n = t(82199),
        o = t(24162),
        c = t(85827);
      const d = "rockstargames-modules-core-newswire-articleb7d3d1587271986440f5870d8d02eb3b",
        l = "rockstargames-modules-core-newswire-articlefcffcc6e594fbf9a4a6e9ab5a8d034c7",
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
        u = ({
          title: e = "thumbnail gallery",
          thumbsPerView: a = 3,
          loop: t = !1,
          navigation: u = !1,
          slideChildren: _ = [],
          variants: g = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          },
          transition: b = {
            parent: void 0,
            main: void 0,
            thumbs: void 0
          }
        }) => {
          const {
            track: f
          } = (0, n.useGtmTrack)(), [p, k] = (0, s.useState)([c.U1, c.WO, c.dK]), [v, h] = (0, s.useState)(null), [w, x] = (0, s.useState)(null);
          return (0, s.useEffect)(() => {
            const e = [c.U1, c.WO, c.dK];
            u && e.push(c.Vx), k(e)
          }, [u]), (0, s.useEffect)(() => {
            if (!_) return;
            const e = _.map((e, a) => (0, r.jsx)(o.qr, {
              children: e
            }, Symbol(a).toString()));
            x(e)
          }, [_]), w ? (0, r.jsxs)(i.P.div, {
            className: "rockstargames-modules-core-newswire-articlef2d55de974817e455a162843125a8771",
            variants: g.parent,
            transition: b.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, r.jsx)(i.P.div, {
              className: d,
              variants: g.main,
              transition: b.main,
              initial: "initial",
              animate: "animate",
              children: (0, r.jsx)(o.RC, {
                loop: t,
                navigation: u,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: v
                },
                modules: p,
                breakpoints: m,
                className: d,
                onSlideNextTransitionEnd: () => {
                  f({
                    event: "carousel_next",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  f({
                    event: "carousel_previous",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  f({
                    event: "carousel_swipe",
                    element_placement: e?.toLowerCase() ?? ""
                  })
                },
                children: w
              })
            }), (0, r.jsx)(i.P.div, {
              className: l,
              variants: g.thumbs,
              transition: b.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, r.jsx)(o.RC, {
                threshold: 50,
                onSwiper: h,
                loop: t,
                breakpoints: m,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: p,
                className: l,
                children: w
              })
            })]
          }) : null
        }
    },
    81854(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => u,
        X: () => m
      });
      var r = t(42295),
        s = t(17301),
        i = t(13331),
        n = t(29315),
        o = t(84343),
        c = t(72408);
      const d = {
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
        l = ({
          name: e
        }) => {
          const a = (e => e ? e.trim() : "")(e),
            t = d[a];
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
              data: n
            } = (0, i.useQuery)(o.TinaModulesInfo, {
              variables: {
                ids: s,
                sync: r
              },
              setTitleDataPath: t,
              skip: !s.length
            });
          return n?.tinaModulesInfo ?? null
        },
        u = (0, n.A)(({
          components: e = {},
          id: a = null,
          ids: t = null,
          skeleton: i = null
        }) => {
          const n = m({
              id: a,
              ids: t
            }),
            o = n?.[0]?.tina;
          return o ? (0, r.jsx)(r.Fragment, {
            children: n.map(({
              tina: a
            }, t) => (0, r.jsx)(s.TinaParser, {
              components: e,
              tina: a,
              componentProps: {
                tinaModulesInfo: n
              }
            }, t))
          }) : i ? (0, r.jsx)(l, {
            name: i
          }) : null
        }, {
          header: null
        })
    },
    60212(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var r = t(42295),
        s = t(42909);
      const i = (0, s.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            description: "Tracklist",
            defaultMessage: "Tracklist"
          }
        }),
        n = {
          bodySmall: "rockstargames-modules-core-newswire-articledeed018133fca0148d0bf72fbe95bcd6"
        },
        o = ({
          track: e,
          artist: a
        }) => (0, r.jsxs)("div", {
          className: n.track,
          children: [(0, r.jsx)("p", {
            children: e
          }), (0, r.jsx)("p", {
            className: n.bodySmall,
            children: a
          })]
        }),
        c = (0, t(19732).g)(({
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
              children: e?.map(e => (0, r.jsx)(o, {
                track: e.track,
                artist: e.artist
              }, e.key))
            })
          })]
        }))
    },
    20304(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var r = t(42295);
      const s = ({
        children: e,
        ...a
      }) => (0, r.jsx)("span", {
        ...a,
        className: "rockstargames-modules-core-newswire-articleacd86b7f5778381df8fac4a3f7489f60",
        children: e
      })
    },
    16783(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var r = t(42295);
      const s = ({
        text: e,
        style: a
      }) => (0, r.jsx)("div", {
        className: "rockstargames-modules-core-newswire-articlec08a001134624b9ceb275eae413bfd3d",
        style: a,
        children: e
      })
    },
    42832(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        A: () => s.A,
        AlertDialog: () => Ee,
        AudioPlayer: () => i.A,
        Badge: () => n.A,
        Brands: () => c,
        Button: () => d.A,
        ButtonGroup: () => f,
        CalloutSection: () => S.A,
        Carousel: () => p.A,
        CharacterCard: () => k,
        ConditionalBlock: () => N,
        CookieAB: () => E,
        CountryInputField: () => I,
        Cta: () => P.A,
        DescriptionArea: () => q.A,
        DiscountsBadge: () => W.A,
        DotLoader: () => X,
        Dropdown: () => Q,
        Embed: () => te,
        ExpandingPlatformButton: () => re.A,
        FadeInContent: () => se.A,
        FoundryButton: () => D,
        FoundryIconButton: () => F,
        Gen9Button: () => b,
        Gen9CoreCarousel: () => le,
        Grid: () => ee.A,
        HTMLElement: () => he.A,
        Hero: () => ve,
        HookStore: () => x,
        ImageTextGroup: () => G,
        ImageTextGroupGroup: () => U,
        ImageWithBadge: () => Te.A,
        LayeredImage: () => je,
        Lightbox: () => Se,
        LoadingAnimation: () => Ja.A,
        MultiSourceImage: () => we.A,
        NewswireBlocks: () => $e,
        NewswireCard: () => Pe.A,
        NewswireList: () => Ve,
        NewswireRelated: () => De.A,
        NewswireTag: () => Fe.A,
        OrderedList: () => Be.A,
        Paging: () => He,
        ParallaxCacheBuster: () => qe,
        ParallaxInnerLayer: () => Xe,
        ParallaxOuterLayer: () => Ye,
        ParallaxWrapper: () => Ke,
        PlatformTag: () => Za.Ay,
        PromoModule: () => ea,
        Rating: () => na,
        ResponsiveFlexBox: () => oa.A,
        ResponsiveFlexItem: () => ca.A,
        ResponsiveGridBox: () => da.A,
        ResponsiveGridItem: () => la.A,
        ResponsiveImg: () => ma.A,
        ResponsiveSection: () => ua.A,
        RockstarLogo: () => _a,
        RpCategory: () => Ya,
        SafeHtml: () => ga.A,
        ScrollSection: () => ba,
        ScrollToTop: () => fa,
        ScrollTracker: () => pa.A,
        SearchBox: () => ka.A,
        Separator: () => va.A,
        SrcsetImage: () => ze,
        StorybookWrapper: () => ha,
        TextFit: () => wa.A,
        ThumbsGallery: () => ya.A,
        TinaModuleFetchNRender: () => ja.A,
        TinaWrapper: () => Na,
        TrackList: () => xa.A,
        UnorderedList: () => Sa.A,
        UserVote: () => za,
        VideoCard: () => r,
        VideoCarousel: () => Da,
        VideoList: () => Ha,
        VisuallyHidden: () => Ua.A,
        Wasted: () => qa.A,
        framer: () => R,
        useTinaModuleFetchByIds: () => ja.X,
        withSearchbarErrorBoundary: () => Xa,
        withSimpleErrorBoundary: () => ce.A
      });
      var r = {};
      t.r(r), t.d(r, {
        Art: () => Pa,
        Link: () => La
      });
      var s = t(14200),
        i = t(52224),
        n = t(16783),
        o = t(42295);
      const c = ({
        brands: e = []
      }) => e.length ? (0, o.jsx)("div", {
        className: "rockstargames-modules-core-newswire-articleb53b6eca487387fc5c2057daf151691a",
        children: e.map(({
          brand: e
        }, a) => (0, o.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlee8c3be7a76fd7e532e74a9fcf87bee09",
          "data-brand": e
        }, a))
      }) : null;
      var d = t(29625),
        l = t(1556),
        m = t(10181);
      const u = {
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
        _ = ({
          children: e,
          className: a,
          onClick: t,
          style: r,
          ariaLabel: s
        }) => (0, o.jsx)("button", {
          className: a,
          onClick: t,
          style: r,
          type: "button",
          "aria-label": s,
          children: e
        }),
        g = ({
          children: e,
          className: a,
          onClick: t,
          style: r,
          to: s,
          ariaLabel: i
        }) => (0, o.jsx)(m.NavLink, {
          className: a,
          onClick: t,
          style: r,
          to: s,
          "aria-label": i,
          children: e
        }),
        b = ({
          btnColor: e = "#fff",
          className: a = "",
          consoleBtn: t,
          icon: r = "",
          img: s,
          labelColor: i = "#000",
          onClick: n,
          secondText: c,
          size: d,
          text: l,
          to: m,
          type: b = "",
          ariaLabel: f
        }) => {
          const p = [u.plusButton, u[b] ?? "", u[d] ?? "", u[t] ?? "", a].join(" "),
            k = {
              "--hvr-color": e ?? i,
              "--hvr-bg-color": i ?? e,
              "--hvr-border-color": e ?? i
            },
            v = (0, o.jsxs)(o.Fragment, {
              children: [s ? (0, o.jsx)("img", {
                src: s,
                alt: ""
              }) : "", (0, o.jsxs)("div", {
                className: u.btnText,
                icon: r,
                children: [l, c ? (0, o.jsx)("span", {
                  children: c
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, o.jsx)("a", {
                href: m,
                target: e,
                onClick: n,
                onKeyDown: n,
                className: p,
                "aria-label": f,
                tabIndex: 0,
                children: v
              })
            }
            return (0, o.jsx)(g, {
              className: p,
              onClick: n,
              style: {
                ...k
              },
              to: m,
              ariaLabel: f,
              children: v
            })
          }
          return (0, o.jsx)(_, {
            className: p,
            onClick: n,
            style: {
              ...k
            },
            ariaLabel: f,
            children: v
          })
        },
        f = ({
          buttons: e = [],
          className: a
        }) => e.length ? (0, o.jsx)("div", {
          className: (0, l.default)("rockstargames-modules-core-newswire-articlebbd74dec556da7f5c06710c72c662f8a", a),
          children: e.map(({
            icon: e,
            title: a,
            to: t
          }, r) => a ? (0, o.jsx)(b, {
            icon: e,
            text: a,
            to: t
          }, r) : "")
        }) : null;
      var p = t(24769),
        k = t(32973),
        v = t(71127),
        h = t(13331),
        w = t(82199);
      const x = (0, t(71282).FF)(),
        y = e => e.some(e => !e),
        j = ({
          condition: e = null,
          children: a
        }) => {
          const [t, r] = (0, v.useState)(!1), s = (e => {
            const [a] = (0, m.useSearchParams)(), [t, r] = (0, v.useState)(null), s = (0, w.useRockstarUser)(), {
              loggedIn: i,
              data: n
            } = s, {
              hasGtaPlus: o
            } = n ?? {};
            return (0, v.useEffect)(() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              x.applyFilters("preview_conditions", e);
              const s = [];
              return e.forEach(e => {
                const {
                  value: r
                } = e;
                if (t) return "true" === a.get(r) ? (s.push(!0), !0) : (s.push(!1), !1);
                if (y(s)) return !1;
                switch (r) {
                  case "user:is:loggedIn":
                    s.push(!0 === i);
                    break;
                  case "user:not:loggedIn":
                    s.push(!1 === i);
                    break;
                  case "user:is:gtaPlus":
                    s.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    s.push(!1 === o || void 0 === o);
                    break;
                  default:
                    s.push(!1)
                }
                return null
              }), r(!y(s)), () => {}
            }, [a, e, o, s, i]), t
          })(e);
          return (0, v.useEffect)(() => {
            r(s)
          }, [s]), (0, v.useMemo)(() => t ? a : null, [t])
        },
        N = (0, h.withTranslations)(({
          children: e
        }) => v.Children.map(v.Children.toArray(e), e => (0, o.jsx)(j, {
          ...e?.props
        })));
      var S = t(46209),
        T = t(5955),
        C = t(48303),
        z = t.n(C);
      const I = ({
        isMulti: e,
        allowSelectAll: a,
        label: t,
        miscProps: r
      }) => {
        const [s, i] = (0, v.useState)(""), n = (0, v.useMemo)(() => z()().getData(), []);
        return (0, o.jsx)(T.Ay, {
          unstyled: !0,
          value: s,
          isMulti: e,
          allowSelectAll: a,
          options: n,
          placeholder: t,
          onChange: e => {
            return a = e?.target?.value, void i(a);
            var a
          },
          classNamePrefix: "country-select",
          ...r
        })
      };
      var A = t(12914);
      const E = ({
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
          e && a && (document.cookie = `${e}=${a}; domain=${(0,A.F)()}; path=/;`)
        })(e, i), s === a || i === a ? t : r
      };
      var P = t(89230),
        L = t(75523),
        M = t(38882),
        V = t(91633);
      const D = (0, v.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          label: t,
          href: r,
          target: s,
          justifySelf: i = "center",
          ...n
        }, c) {
          const d = (0, V.m)(a, "normal"),
            l = (0, L.v6)({
              "data-testid": e,
              className: d
            }, n);
          return (0, o.jsx)(M.Button, {
            ref: c,
            ...l,
            asChild: !0,
            children: (0, o.jsx)(m.Link, {
              to: r,
              target: s,
              style: {
                justifySelf: i
              },
              children: t
            })
          })
        }),
        F = (0, v.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          href: t,
          target: r,
          justifySelf: s = "center",
          ...i
        }, n) {
          const c = (0, V.m)(a, "normal"),
            d = (0, L.v6)({
              "data-testid": e,
              className: c
            }, i);
          return (0, o.jsx)(M.IconButton, {
            ref: n,
            ...d,
            asChild: !0,
            children: (0, o.jsx)(m.Link, {
              to: t,
              target: r,
              style: {
                justifySelf: s
              }
            })
          })
        });
      var R = t(95359),
        $ = t(17301),
        B = t(21352);
      const O = ({
          disclaimer: e,
          text: a = null,
          title: t,
          className: r = "",
          style: s = {}
        }) => {
          const i = a ?? e?.text ?? null,
            n = t ? `<h5>${t}</h5>${i}` : i;
          return i ? (0, o.jsx)("div", {
            className: (0, l.default)("rockstargames-modules-core-newswire-articledabdd1de832b01e0bfed17e54d2c48f3", r),
            dangerouslySetInnerHTML: {
              __html: n
            },
            style: s
          }) : null
        },
        G = R.withFadeIn(({
          brands: e = [],
          content: a,
          ctas: t = [],
          disclaimer: r,
          image: s,
          large: i = !1,
          title: n,
          image_on_right: d = !1,
          style: m = {},
          className: u = "",
          ..._
        }) => {
          const {
            track: g
          } = (0, w.useGtmTrack)(), {
            ref: b,
            inView: p
          } = (0, B.useInView)({
            threshold: .6
          }), [k, h] = (0, v.useState)(!1), x = (0, $.useGetCdnSource)(s?.full_src ?? null) ?? null;
          return (0, v.useEffect)(() => {
            p && !k && (g({
              event: "page_section_impression",
              element_placement: _?._memoq?.title?.toLowerCase()
            }), h(!0))
          }, [p]), (0, o.jsxs)("div", {
            className: (0, l.default)("rockstargames-modules-core-newswire-articlee74584d7bd5e5fb4f95b021aea5552e9", i ? "rockstargames-modules-core-newswire-articleecfb600d2677601c52a9b2ba82ea92a0" : "", d ? "rockstargames-modules-core-newswire-articlec1c30f86159b786afa96b64de61d4581" : "", x ? "" : "rockstargames-modules-core-newswire-articlea66c759349419a25e6ac54202d7fc085", u),
            style: m,
            ref: b,
            children: [x ? (0, o.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlec6a4abbe875f9c0cadd82e5b2b2ad16c",
              style: {
                background: `url(${x}) no-repeat center/cover`
              }
            }) : "", (0, o.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled14a6281007b78ed0259affd98faeada",
              children: [(0, o.jsx)(c, {
                brands: e
              }), (0, o.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlebfdc6a008924ac08afb945e8c501d855",
                children: [(0, o.jsx)("h2", {
                  className: "rockstargames-modules-core-newswire-articlebe9969843594b0b04199cf75f098d91c",
                  children: n
                }), a ? (0, o.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleea4015cd0c04b61c6b1f8a4a4a92e337",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                }) : ""]
              }), (0, o.jsx)(f, {
                ctas: t
              }), (0, o.jsx)(O, {
                disclaimer: r
              })]
            })]
          })
        }),
        H = {
          bg: "rockstargames-modules-core-newswire-articled1579fc7a24c295dbe890d8aae408666",
          bgDesktop: "rockstargames-modules-core-newswire-articlea2a6f7c576116735efd4216aeff67734",
          bgMobile: "rockstargames-modules-core-newswire-articleea7956f9173046a1ed7292458dfb5b9e",
          imageTextGroupGroup: "rockstargames-modules-core-newswire-articlebde0bad35b79e73435595e8f30e4adfc",
          pillBtn: "rockstargames-modules-core-newswire-articlefa50d8c1862c94f2cd3200103d1d0e69",
          selected: "rockstargames-modules-core-newswire-articlede81b5eeed31c861fe39ee5062dee5a7"
        },
        U = ({
          bg: e,
          image_text_groups: a = [],
          style: t = {},
          className: r = ""
        }) => {
          const s = (0, $.useGetCdnSource)(e?.image?.mobile?.full_src ?? null),
            i = (0, $.useGetCdnSource)(e?.image?.desktop?.full_src ?? null) ?? s;
          return a.length ? (0, o.jsxs)("div", {
            className: (0, l.default)(H.imageTextGroupGroup, r),
            style: t,
            children: [s ? (0, o.jsx)("div", {
              className: [H.bgMobile, H.bg].join(" "),
              style: {
                background: `url(${s}) no-repeat center/cover`
              }
            }) : "", i ? (0, o.jsx)("div", {
              className: [H.bgDesktop, H.bg].join(" "),
              style: {
                background: `url(${i}) no-repeat center/cover`
              }
            }) : "", a.map((e, a) => (0, v.createElement)(G, {
              ...e,
              key: a
            }))]
          }) : null
        };
      var q = t(26708),
        W = t(84927);
      const K = "rockstargames-modules-core-newswire-articlea19bcd2b98d91e60c43b9de146e20f4e",
        X = ({
          color: e
        }) => (0, o.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlee83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, o.jsx)("div", {
            className: K
          }), (0, o.jsx)("div", {
            className: K
          }), (0, o.jsx)("div", {
            className: K
          })]
        });
      var J = t(51673),
        Y = t.n(J);
      const Z = {
          dropdownWrapper: "rockstargames-modules-core-newswire-articlebbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-modules-core-newswire-articlea9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-modules-core-newswire-articledf17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-modules-core-newswire-articlecb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-modules-core-newswire-articlefe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        Q = ({
          children: e,
          className: a,
          title: t
        }) => {
          const [r, s] = (0, v.useState)(!1);
          return (0, o.jsx)(Y(), {
            active: r,
            focusTrapOptions: {
              onDeactivate: () => s(!1),
              clickOutsideDeactivates: !0
            },
            children: (0, o.jsxs)("div", {
              className: [Z.dropdownWrapper, r ? Z.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, o.jsx)("button", {
                className: Z.opener,
                "aria-expanded": r,
                onClick: () => s(!r),
                children: t
              }), r && (0, o.jsx)("div", {
                className: Z.items,
                onClick: () => s(!1),
                children: e
              })]
            })
          })
        };
      var ee = t(20837);
      const ae = ({
          caption: e,
          children: a,
          ...t
        }) => e ? (0, o.jsxs)("figure", {
          ...t,
          children: [a, (0, o.jsx)("figcaption", {
            dangerouslySetInnerHTML: {
              __html: e
            }
          })]
        }) : a,
        te = ({
          componentTitle: e,
          type: a,
          items: t
        }) => t?.length ? (0, o.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleaee2a98f97e777758e2d9bec034314ee",
          type: a,
          children: (0, o.jsxs)(ee.A, {
            children: [e && (0, o.jsx)("h3", {
              children: e
            }), (0, o.jsx)(ee.A, {
              className: "rockstargames-modules-core-newswire-articledba17b5c55f8d40e2600765f1a60d6af",
              children: t.map((e, a) => {
                return e?.embed ? (0, o.jsx)(ae, {
                  caption: e?.caption,
                  children: (0, o.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlef0cd8278232673606f9c1715bd4950f6",
                    dangerouslySetInnerHTML: {
                      __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                    }
                  }, `${e?.key??a}_div`)
                }, e?.key ?? a) : e?.text ? (0, o.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: e.text
                  }
                }, e?.key ?? a) : void 0;
                var t
              })
            })]
          })
        }) : null;
      var re = t(98357),
        se = t(1057),
        ie = t(10336),
        ne = t(85827),
        oe = t(24162),
        ce = t(29315);
      const de = ({
          prevRef: e,
          nextRef: a,
          onNextClicked: t,
          onPrevClicked: r,
          onNextKeyDown: s,
          title: i,
          testId: n
        }) => (0, o.jsxs)("div", {
          "aria-controls": `${i}-carousel`,
          "aria-label": `${i} carousel buttons`,
          className: "rockstargames-modules-core-newswire-articleb8d5ef10008331a9f6d3a6bdf1690d01",
          role: "group",
          "data-testid": `${n}-controls`,
          children: [(0, o.jsx)("button", {
            className: "rockstargames-modules-core-newswire-articlec38cd500d52d07bd012e288dc0b4f635",
            ref: e,
            onClick: r,
            "aria-label": "Previous"
          }), (0, o.jsx)("button", {
            className: "rockstargames-modules-core-newswire-articleb24ada0f7959966c6d950567eaaafce2",
            ref: a,
            onClick: t,
            onKeyDown: s,
            "aria-label": "Next"
          })]
        }),
        le = (0, ce.A)(({
          description: e,
          slideChildren: a,
          size: t,
          title: r,
          name: s,
          customSlidesPerView: i = null,
          customSpaceBetween: n = null,
          slideClass: c,
          style: d,
          className: m,
          cardSizeBreakpoints: u,
          customAspectRatio: _,
          titleBadge: g,
          theme: b
        }) => {
          const {
            track: f
          } = (0, w.useGtmTrack)(), p = (0, v.useRef)(null), k = (0, v.useRef)(null), h = (0, v.useRef)(null), [x, y] = (0, v.useState)(null), [j, N] = (0, v.useState)(!1), [S, T] = (0, v.useState)(null), [C, z] = (0, v.useState)(), [I, A] = (0, v.useState)(), {
            ref: E,
            inView: P
          } = (0, B.useInView)({
            threshold: .6
          }), [L, M] = (0, v.useState)(!1), [V, D] = (0, v.useState)(null), [F, R] = (0, v.useState)(!1), [$, O] = (0, v.useState)(0), [G, H] = (0, v.useState)(0);
          (0, v.useEffect)(() => {
            const e = () => {
              R(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, v.useEffect)(() => {
            const e = () => {
              C && !(0, ie.isEmpty)(C) && C?.height > 0 && C?.height !== $ && O(C?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [C]);
          const U = {
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
          (0, v.useEffect)(() => {
            if (!p.current) return;
            const e = () => {
              if (p.current) {
                const e = i || Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view")),
                  a = i ? 1 : Number(window.getComputedStyle(p.current).getPropertyValue("--slides-per-view-multiplier"));
                T(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [p, i]), (0, v.useEffect)(() => {
            if (!a) return;
            let e = !1;
            a.forEach(a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, D(a))
            }), M(e);
            const t = a.map((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && F ? null : (0, o.jsx)(oe.qr, {
              className: "rockstargames-modules-core-newswire-articlead67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => K(a),
              role: "button",
              children: e
            }, e.key));
            y(t)
          }, [a, F]), (0, v.useEffect)(() => {
            A({
              nextEl: h.current,
              prevEl: k.current
            })
          }, [h, k]), (0, v.useEffect)(() => {
            P && !j && a && (f({
              event: "page_section_impression",
              element_placement: (s || r).toLowerCase()
            }), N(!0))
          }, [P, a]);
          let q = "custom" === t ? {
            "--custom-aspect-ratio": _,
            ...d
          } : {
            ...d
          };
          const W = 0 !== $ ? `${$}px` : "100%";
          q = {
            ...q,
            "--carousel-cards-height": W,
            "--carousel-nav-opacity": G
          };
          const K = e => {
              C?.slideTo(e)
            },
            X = `${r.trim().toLowerCase().replace(/\s+/g,"-")}-deck`;
          return (0, o.jsxs)("section", {
            "aria-label": r,
            className: (0, l.default)("rockstargames-modules-core-newswire-articlef20b52f7c3f9003cd00811a47a04bf10", m),
            "data-size": t,
            "data-testid": X,
            "data-sm": u?.sm ? u?.sm : t,
            "data-md": u?.md ? u?.md : t,
            "data-lg": u?.lg ? u?.lg : t,
            "data-xl": u?.xl ? u?.xl : t,
            "data-xxl": u?.xxl ? u?.xxl : t,
            "data-has-covercard": L,
            "data-new-carousel-nav": !0,
            id: `${r}-carousel`,
            "data-theme": b,
            ref: p,
            style: q,
            children: [(0, o.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleaeafe767d91d07fab61f307b5bbffeef",
              ref: E
            }), L && F && (0, o.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articledef6705cfe82c4e562f3c71c78bc5248",
              children: V
            }), (0, o.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb093fac5b0d056a4a00f34d0418c6577",
              children: (0, o.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articledcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, o.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articleb83b41754b7e9ac95c806264014db990",
                  children: [!L && r && (0, o.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec8e04a547988dacbae8960776862f15f",
                    children: [(0, o.jsx)("h2", {
                      children: r
                    }), g && (0, o.jsx)("span", {
                      className: "rockstargames-modules-core-newswire-articlec3de2db74771fdba023cc2b11b216955",
                      children: g
                    })]
                  }), (0, o.jsx)(de, {
                    prevRef: k,
                    nextRef: h,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = C?.slides[C?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    title: r,
                    theme: b
                  })]
                }), e && (0, o.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: e
                  }
                })]
              })
            }), S ? (0, o.jsx)(oe.RC, {
              slidesPerView: S,
              onInit: e => {
                z(e);
                const a = setInterval(() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (O(t), H(1), clearInterval(a))
                }, 500)
              },
              grabCursor: !0,
              navigation: I,
              modules: [ne.Vx],
              breakpoints: U,
              slideClass: (0, l.default)("swiper-slide", c),
              onSlideNextTransitionEnd: () => {
                f({
                  event: "carousel_next",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                f({
                  event: "carousel_previous",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                f({
                  event: "carousel_swipe",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              children: x
            }) : ""]
          })
        }, null);
      var me = t(55087);
      const ue = {
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
        _e = {
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
        ge = {
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
        be = ({
          title: e = "",
          mobileImg: a,
          desktopImg: t
        }) => {
          const r = (0, $.useGetCdnSource)(a ?? null),
            s = (0, $.useGetCdnSource)(t ?? r);
          return (0, o.jsx)("div", {
            className: ge.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${s})`
            },
            children: (0, o.jsx)("h5", {
              children: e
            })
          })
        },
        fe = ({
          title: e = "Membership Rewards",
          name: a = "Membership Rewards",
          shards: t
        }) => {
          const [r, s] = (0, v.useState)(null);
          return (0, v.useEffect)(() => {
            t && s(t.reduce((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: r
              } = a, {
                mobile: s,
                desktop: i
              } = r;
              return e.push((0, o.jsx)(be, {
                title: t,
                mobileImg: s?.full_src,
                desktopImg: i?.full_src
              })), e
            }, []))
          }, [t]), r ? (0, o.jsx)("div", {
            className: ge.shardsCarousel,
            children: (0, o.jsx)(le, {
              title: e,
              name: a,
              slideChildren: r,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        pe = ({
          animated: e = !1,
          ctas: a = [],
          expandingButtonLabel: t = "Subscribe"
        }) => {
          const [r, s] = (0, v.useState)([]), [i, n] = (0, v.useState)([]);
          return (0, v.useEffect)(() => {
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
            s(e), n(t)
          }, [a]), r.length ? (0, o.jsx)(me.P.div, {
            variants: e ? _e : void 0,
            children: (0, o.jsx)(re.A, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: r,
              children: !!i.length && (0, o.jsx)(me.P.div, {
                variants: _e,
                children: (0, o.jsx)(f, {
                  buttons: i,
                  className: ge.buttonGroup
                })
              })
            })
          }) : (0, o.jsx)(o.Fragment, {
            children: !!i.length && (0, o.jsx)(me.P.div, {
              variants: _e,
              children: (0, o.jsx)(f, {
                buttons: i,
                className: ge.buttonGroup
              })
            })
          })
        },
        ke = ({
          animated: e = !1,
          brands: a = [],
          cta: t = [],
          ctas: r = [],
          description: s = "",
          expandingButtonLabel: i = "Subscribe",
          legalText: n,
          stackButtons: d,
          title: l = ""
        }) => (0, o.jsxs)(me.P.div, {
          className: ge.content,
          initial: "hidden",
          animate: "visible",
          variants: e ? ue : void 0,
          children: [(0, o.jsx)(me.P.div, {
            variants: e ? _e : void 0,
            children: (0, o.jsx)(c, {
              brands: a
            })
          }), (l || s) && (0, o.jsxs)(me.P.div, {
            className: ge.descriptions,
            variants: e ? _e : void 0,
            children: [l && (0, o.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: l
              }
            }), s && (0, o.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          }), !!t.length && (0, o.jsx)("div", {
            className: d ? ge.verticalCtaBlock : ge.ctaBlock,
            children: (0, o.jsx)($.TinaParser, {
              components: {
                Cta: P.A,
                ExpandingPlatformButton: re.A
              },
              tina: {
                payload: {
                  content: t
                }
              }
            })
          }), !!r.length && (0, o.jsx)("div", {
            className: ge.ctaBlock,
            children: (0, o.jsx)(pe, {
              animated: e,
              ctas: r,
              expandingButtonLabel: i
            })
          }), n && (0, o.jsx)(me.P.div, {
            className: ge.legalText,
            variants: e ? _e : void 0,
            children: (0, o.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: n
              }
            })
          })]
        }),
        ve = ({
          animated: e = !1,
          backgroundImage: a,
          brands: t = [],
          className: r,
          ctas: s = [],
          cta: i,
          description: n = "",
          expandingButtonLabel: c = "Subscribe",
          layeredImage: d,
          layeredImageSettings: m,
          legalText: u,
          shardsSection: _,
          stackButtons: g = !1,
          theme: b = "gen9",
          title: f = ""
        }) => {
          const {
            breakpoints: p,
            windowWidth: k
          } = (0, h.useWindowResize)(), w = p.xxl.min, x = (e => {
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
                  const [i, n] = s;
                  if (t.has(r) && t.has(i)) {
                    const r = `${t.get(i)}${e}`;
                    a[r] = "imageWidth" !== i ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                  }
                })
              }
            }), a
          })(m), y = (0, $.useGetCdnSource)(a?.mobile?.full_src ?? null), j = (0, $.useGetCdnSource)(a?.desktop?.full_src ?? y), N = (0, $.useGetCdnSource)(d?.mobile?.full_src ?? null), S = (0, $.useGetCdnSource)(d?.desktop?.full_src ?? N), T = (0, v.useMemo)(() => {
            const {
              mobileStyle: e,
              desktopStyle: t,
              style: r
            } = a ?? {};
            return {
              ...r,
              ...k >= w ? (0, h.safeStyles)(t) : (0, h.safeStyles)(e)
            }
          }, [k, a?.style, a?.mobileStyle, a?.desktopStyle]);
          return (0, o.jsxs)(me.P.div, {
            className: (0, l.default)(ge.hero, r),
            style: {
              "--background-image-desktop": `url(${j})`,
              "--background-image-mobile": `url(${y})`,
              "--layered-image-desktop": `url(${S})`,
              "--layered-image-mobile": `url(${N})`
            },
            initial: "hidden",
            animate: "visible",
            variants: e ? ue : void 0,
            "data-type": "hero",
            theme: b,
            children: [(0, o.jsxs)("div", {
              className: ge.images,
              children: [j && y ? (0, o.jsx)("div", {
                className: ge.background,
                style: T ?? {}
              }) : "", N && S ? (0, o.jsx)("div", {
                className: ge.layered,
                style: m ? x : {}
              }) : "", (0, o.jsx)("div", {
                className: ge.gradient
              })]
            }), (0, o.jsx)(ke, {
              animated: e,
              brands: t,
              cta: i,
              ctas: s,
              description: n,
              expandingButtonLabel: c,
              legalText: u,
              stackButtons: g,
              title: f
            }), _?.shards && (0, o.jsx)(fe, {
              shards: _.shards
            })]
          })
        };
      var he = t(62312),
        we = t(4407);
      const xe = {
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
        ye = ({
          style: e,
          className: a
        }) => {
          const t = {
              ...e
            },
            r = e["--border-image-source"],
            s = (0, $.useGetCdnSource)(r || null);
          return r && (t["--border-image-source"] = `url(${s})`), (0, o.jsx)("div", {
            className: (0, l.default)(xe.border, a),
            style: {
              ...t
            }
          })
        },
        je = e => e?.images ? (0, o.jsx)("div", {
          className: (0, l.default)(xe.layeredImage, xe[e?.variantClass], xe[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, o.jsxs)("div", {
            className: xe.layersWrapper,
            children: [e?.images?.map((e, a) => {
              const {
                image: t,
                paddingClass: r,
                imageSizeClass: s,
                objectFitClass: i,
                positionClassX: n,
                positionClassY: c,
                zIndex: d,
                className: m,
                style: u,
                alt: _,
                displayClass: g
              } = e;
              return (0, o.jsx)(we.A, {
                image: t,
                style: {
                  zIndex: d ?? a + 1
                },
                imageStyle: u,
                className: (0, l.default)(m, g, xe.imageLayer, xe[r], xe[s], xe[i], xe[n], xe[c]),
                alt: _
              }, d ?? a + 1)
            }), e?.borderImage && (0, o.jsx)(ye, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null;
      var Ne = t(34725);
      const Se = e => {
        const {
          image: a,
          alt: t,
          thumbnail: r,
          caption: s,
          style: i,
          showOpenButtonMobile: n,
          showOpenButton: c,
          showDownloadButtonMobile: d,
          showDownloadButton: l,
          showZoomControls: m
        } = e, u = (0, h.useLocale)(), {
          isMobile: _
        } = (0, h.useWindowResize)(), g = a?.sources ?? {}, b = r?.image?.sources ?? {}, f = (0, Ne.C1)(g?.[u] ?? g?.en_us) ?? "", p = (0, Ne.C1)(b?.[u] ?? b?.en_us) ?? f, k = _ ? n : c, v = _ ? d : l;
        return (0, o.jsx)("div", {
          style: i,
          className: "rockstargames-modules-core-newswire-articleadbaa0167219cd891249a29faec00e8f",
          children: (0, o.jsxs)(M.Lightbox.Root, {
            altText: t || "",
            children: [(0, o.jsxs)(M.Lightbox.Trigger, {
              style: {
                aspectRatio: r?.thumbnailAspectRatio
              },
              children: [(0, o.jsx)(M.Lightbox.Thumbnail, {
                src: p,
                style: {
                  objectPosition: r?.thumbnailPosition
                }
              }), k && (0, o.jsx)(M.Lightbox.OpenIcon, {
                style: {
                  boxSizing: "content-box"
                }
              })]
            }), (0, o.jsxs)(M.Lightbox.Portal, {
              children: [(0, o.jsx)(M.Lightbox.Overlay, {}), (0, o.jsxs)(M.Lightbox.Content, {
                children: [(0, o.jsx)(M.Lightbox.ZoomPan, {
                  children: (0, o.jsx)(M.Lightbox.Image, {
                    src: f
                  })
                }), (0, o.jsxs)(M.Lightbox.Controls, {
                  children: [s && (0, o.jsx)(M.Lightbox.Caption, {
                    children: s
                  }), (0, o.jsx)(M.Lightbox.Close, {}), m && (0, o.jsx)(M.Lightbox.Zoom, {}), v && (0, o.jsx)(M.Lightbox.Download, {})]
                })]
              })]
            })]
          })
        })
      };
      var Te = t(10632);
      const Ce = {
          animatePlaceholder: "rockstargames-modules-core-newswire-articlef6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-modules-core-newswire-articlec3684b80c99c860036d9337843a7be58",
          multiSourceContainer: "rockstargames-modules-core-newswire-articlea99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-modules-core-newswire-articlebc42c525ec0bd93df46e1999e278e9fb",
          pillBtn: "rockstargames-modules-core-newswire-articlec79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-modules-core-newswire-articlec53675ad15e2ef662362850daab33791"
        },
        ze = ({
          imageUrl: e,
          className: a,
          alt: t,
          style: r,
          lazy: s = !1,
          decoding: i = "auto",
          sizes: n = [320, 480, 768, 1024, 1440, 1920, 2560]
        }) => {
          const [c, d] = (0, v.useState)(!1);
          return (0, o.jsxs)("div", {
            className: Ce.multiSourceContainer,
            children: [!c && (0, o.jsx)("img", {
              className: [a, Ce.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, o.jsx)("img", {
              className: [Ce.multiSourceImage, a].join(" "),
              src: `${e}?im=Resize=1920`,
              srcSet: (l = e, n.map(e => `${l}?im=Resize=${e} ${e}w`).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                d(!0)
              },
              loading: s ? "lazy" : "eager",
              decoding: i
            })]
          });
          var l
        },
        Ie = ({
          button: e,
          closeDialog: a,
          style: t = "primary"
        }) => {
          const {
            buttonIcon: r,
            buttonText: s,
            extraClasses: i,
            isDisabled: n,
            isLink: c,
            link: d,
            onClick: m,
            testId: u
          } = e;
          return c ? s && (0, o.jsx)(M.Button, {
            asChild: !0,
            appearance: t,
            size: "MD",
            children: (0, o.jsx)("a", {
              href: d,
              ...u && {
                "data-testid": u
              },
              children: s
            })
          }) : (0, o.jsx)(M.Button, {
            autoFocus: !0,
            iconRight: r,
            className: (0, l.default)(i),
            isDisabled: n,
            onPress: e => (e => {
              m && m(), a && a(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: t,
            "aria-label": s,
            ...u && {
              "data-testid": u
            },
            children: s
          })
        },
        Ae = {
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
        Ee = ({
          icon: e,
          title: a,
          secondaryText: t,
          buttons: r,
          showDialog: s,
          onClose: i = () => {},
          closeOnOutsideClick: n = !0,
          extraClasses: c
        }) => {
          const d = (0, v.useRef)(null),
            {
              setBodyIsLocked: l
            } = (0, h.useBodyScrollable)("AlertDialog");
          (0, v.useEffect)(() => {
            s && d?.current && (d.current?.showModal?.(), l(!0))
          }, [s]);
          const m = () => {
            l(!1), i(), d.current?.close?.()
          };
          if (s) return (0, o.jsxs)("dialog", {
            ref: d,
            className: Ae.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && n && (l(!1), i(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, o.jsx)("i", {
              className: [Ae.icon, Ae[e]].join(" ")
            }), (0, o.jsxs)("div", {
              className: [Ae.content, c?.content].join(" "),
              children: [(0, o.jsx)("h3", {
                className: [Ae.heading, c?.heading].join(" "),
                children: a
              }), t && (0, o.jsx)("div", {
                className: [Ae.message, c?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), r && (0, o.jsx)("div", {
              className: Ae.actions,
              children: r.slice(0, 2).map((e, a) => (0, o.jsx)(Ie, {
                style: e?.style ?? (0 === a ? "primary" : "secondary"),
                button: e,
                closeDialog: m
              }, e.buttonText))
            })]
          })
        };
      var Pe = t(13989),
        Le = t(46368),
        Me = t.n(Le);
      const Ve = (0, h.withTranslations)(({
        section: e = "",
        relativeTo: a = "",
        tagId: t = null,
        metaUrl: r = "/newswire",
        t: s
      }) => {
        const i = (0, h.useLocale)(),
          {
            track: n
          } = (0, w.useGtmTrack)(),
          [c, l] = (0, m.useSearchParams)(),
          {
            tagId: u = null
          } = (0, m.useParams)(),
          [_, g] = (0, v.useState)(u ?? t ?? c.get("tag_id")),
          [b, f] = (0, v.useState)(1),
          [p, k] = (0, v.useState)(20),
          [x, y] = (0, v.useState)([]),
          [j, N] = (0, v.useState)(null),
          [S, {
            loading: T,
            data: C
          }] = (0, h.useLazyQuery)(Me(), {
            variables: {
              tagId: Number(_),
              page: b,
              metaUrl: r,
              limit: p,
              locale: i
            }
          });
        return (0, v.useEffect)(() => {
          f(1), y([]), k(20), g(u ?? t ?? c.get("tag_id")), S()
        }, [c.get("tag_id"), u, t]), (0, v.useEffect)(() => {
          const e = x;
          C?.posts?.paging && N(C?.posts?.paging), C?.posts?.results && y(e.concat(C?.posts?.results))
        }, [C]), (0, v.useEffect)(() => {
          (() => {
            const e = c.get("page"),
              a = Number(e ?? 1);
            k(20 * a), S()
          })()
        }, []), x.length ? (0, o.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlee81cdae3d47ce0490795e6588b3c8464",
          "data-testid": "newswire-list",
          children: [(0, o.jsx)($e, {
            section: e,
            posts: x,
            relativeTo: a,
            noSpecialOrder: null !== _
          }), null !== j && j.nextPage ? (0, o.jsx)(d.A, {
            className: "rockstargames-modules-core-newswire-articlee125d510192feb4ce2844cb97084b838",
            "data-testid": "more-stories",
            onClick: () => {
              const e = c.get("page"),
                a = Number(e ?? b) + 1;
              f(a), 20 !== p && k(20), S(), l({
                page: String(a),
                ..._ && {
                  tag_id: String(_)
                }
              }, {
                replace: !0
              }), n({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: T,
            context: "secondary",
            children: s("More Stories")
          }) : ""]
        }) : null
      });
      var De = t(51434),
        Fe = t(23395);
      const Re = {
          newswireBlocks: "rockstargames-modules-core-newswire-articleea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-modules-core-newswire-articled301334a72b626f8cc2f5b9733299e76"
        },
        $e = (0, h.withGtmTracking)(({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: t,
          gtmTrack: r
        }) => {
          const [s, i] = (0, v.useState)(null);
          return (0, v.useEffect)(() => {
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
          }, [t.length]), (0, o.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Re.newswireBlocks, a ? Re.noSpecialOrder : "", Re.contextHome].join(" "),
            children: t.map((t, r) => (0, o.jsx)(Pe.A, {
              section: e,
              index: r,
              noSpecialOrder: a,
              post: t,
              focused: r === s
            }, t.id))
          })
        });
      var Be = t(43582);
      const Oe = "rockstargames-modules-core-newswire-articleb013d77f453d7053bbcf06f173ff326c",
        Ge = ({
          children: e,
          data: a,
          onPageUpdate: t,
          page: r,
          className: s
        }) => (0, o.jsx)("a", {
          href: "#",
          className: r === a.page ? `rockstargames-modules-core-newswire-articleb577d5726806ec872ecdb8a46905734f ${s??""}` : "",
          onClick: e => {
            e.preventDefault(), t(r)
          },
          children: e
        }),
        He = ({
          data: e,
          onPageUpdate: a,
          className: t
        }) => {
          if (1 === e.pageCount) return null;
          const r = new Array(Math.min(e.pageCount, 8)),
            s = Math.max(e.pageCount - 8, 1),
            i = Math.max(2, e.page - 4),
            n = Array.from(r, (e, a) => a + Math.min(s, i));
          return (0, o.jsxs)("div", {
            className: `rockstargames-modules-core-newswire-articlee480f25872ae2a8b3fcd1e492d838301 ${t??""}`,
            children: [e.pageCount > 8 ? (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)(Ge, {
                data: e,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== n[0] ? (0, o.jsx)("div", {
                className: Oe,
                children: "..."
              }) : ""]
            }) : "", n.map(r => (0, o.jsx)(Ge, {
              data: e,
              onPageUpdate: a,
              page: r,
              className: t,
              children: r
            }, r)), e.pageCount > 8 ? (0, o.jsxs)(o.Fragment, {
              children: [n.slice(-1)[0] + 1 < e.pageCount ? (0, o.jsx)("div", {
                className: Oe,
                children: "..."
              }) : "", (0, o.jsx)(Ge, {
                data: e,
                onPageUpdate: a,
                page: e.pageCount,
                children: e.pageCount
              })]
            }) : ""]
          })
        };
      var Ue = t(68484);
      const qe = ({
          children: e
        }) => {
          const {
            parallaxController: a
          } = (0, Ue.as)();
          return (0, v.useLayoutEffect)(() => {
            if (!a) return;
            const e = setInterval(() => {
              a.update()
            }, 500);
            return () => clearInterval(e)
          }, [a]), e
        },
        We = {
          large: "rockstargames-modules-core-newswire-articlee15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-modules-core-newswire-articledfdaa6f63f8e8bd10576fa2debcbc1fc",
          parallaxWrapper: "rockstargames-modules-core-newswire-articlee30c08cf0e042f7fc7bed0c23c0bfb31",
          small: "rockstargames-modules-core-newswire-articlec32a973dbc862a43cc5d4a2aac19ed9b"
        },
        Ke = ({
          scrollAxis: e = "vertical",
          size: a = "",
          style: t = {},
          children: r
        }) => (0, o.jsx)(Ue.zE, {
          scrollAxis: e,
          children: (0, o.jsx)(qe, {
            children: (0, o.jsx)("div", {
              className: (0, l.default)(We.parallaxWrapper, We[a]),
              style: t,
              "data-context": "parallax-wrapper",
              children: r ? r.map((a, t) => (0, v.cloneElement)(a, {
                scrollAxis: e,
                style: {
                  ...a?.props?.style,
                  zIndex: t
                }
              })) : (0, o.jsx)("div", {})
            })
          })
        }),
        Xe = ({
          layers: e = [],
          displayClass: a = "",
          style: t = {}
        }) => {
          const r = (0, $.useGenerateCdnSource)();
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
          return (0, o.jsx)(Ue.y, {
            className: (0, l.default)("rockstargames-modules-core-newswire-articlec1c689cf47230fa80bccc9b20515d4fa", a),
            layers: s,
            style: t
          })
        },
        Je = "rockstargames-modules-core-newswire-articleae8bfc3f9a519606a95144e64ee454b5",
        Ye = ({
          minOffset: e = 0,
          maxOffset: a = 0,
          scrollAxis: t = "vertical",
          displayClass: r = "",
          style: s = {},
          children: i
        }) => "horizontal" === t ? (0, o.jsx)(Ue.kQ, {
          x: [e, a],
          className: (0, l.default)(Je, r),
          styleOuter: s,
          children: i
        }) : (0, o.jsx)(Ue.kQ, {
          y: [e, a],
          className: (0, l.default)(Je, r),
          styleOuter: s,
          children: i
        }),
        Ze = {
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
        Qe = {
          alt: "",
          sources: {}
        },
        ea = ({
          backgroundColor: e,
          brands: a = [],
          description: t = "",
          ctaLabel: r,
          ctaLink: s = "https://rockstargames.com",
          gradient: i = !0,
          image: n,
          promoImg: d = Qe,
          imageOrientation: l = "right",
          title: m = "",
          name: u = "",
          style: _,
          imageStyle: g,
          _memoq: f
        }) => {
          const [p, k] = (0, v.useState)(!1), {
            ref: x,
            inView: y
          } = (0, B.useInView)({
            threshold: .6
          }), {
            isMobile: j
          } = (0, h.useWindowResize)(), {
            track: N
          } = (0, w.useGtmTrack)(), S = (0, $.useImageParser)(d), T = (0, $.useGetCdnSource)(n), C = {
            ..._,
            "--promo-background": e ?? "var(--black-200)",
            "--promo-image": `url(${(j?S?.src?.mobile:S?.src?.desktop)??T??"var(--promo-background)"})`,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          }, z = {
            ...g
          };
          return (0, v.useEffect)(() => {
            y && !p && (N({
              event: "page_section_impression",
              element_placement: u?.toLowerCase()
            }), k(!0))
          }, [y]), (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)("div", {
              className: Ze.promoModuleWrapper,
              children: (0, o.jsxs)(me.P.div, {
                className: Ze.promoModule,
                style: {
                  ...C
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
                ref: x,
                children: [(0, o.jsx)("div", {
                  className: [Ze.promoModuleImage, i ? Ze.gradient : "", "left" === l ? Ze.left : Ze.right].join(" "),
                  style: {
                    ...z
                  }
                }), (0, o.jsxs)("div", {
                  className: Ze.promoModuleContentContainer,
                  children: [(0, o.jsx)(c, {
                    brands: a
                  }), (0, o.jsxs)("div", {
                    className: Ze.promoModuleTextContent,
                    children: [m && (0, o.jsx)("h3", {
                      children: m
                    }), t && (0, o.jsx)("p", {
                      children: t
                    })]
                  }), r && (0, o.jsx)(b, {
                    to: s,
                    text: r,
                    onClick: () => {
                      N({
                        event: "cta_learn",
                        element_placement: "promo module",
                        link_url: s,
                        text: f?.ctaLabel?.toLowerCase()
                      })
                    }
                  })]
                })]
              })
            })
          })
        };
      var aa = t(42909);
      const ta = {
          rating: "rockstargames-modules-core-newswire-articlec3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-modules-core-newswire-articlebabdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-modules-core-newswire-articleb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-modules-core-newswire-articleb6339480b5fd086fb0c025930bfb7dcd"
        },
        ra = (0, aa.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var sa = t(95520),
        ia = t(19732);
      (0, h.importAll)(t(36672));
      const na = (0, ce.A)((0, ia.g)(({
        descriptors: e = null,
        footer: a = null,
        href: r,
        img: i = null,
        titleSlug: n = null,
        style: c = {},
        className: d,
        ...l
      }) => {
        const [m, u] = (0, v.useState)(!1), {
          inView: _
        } = (0, B.useInView)({
          threshold: .6
        }), [g, b] = (0, v.useState)({
          ratingDescriptors: e,
          ratingFooter: a,
          ratingImg: i,
          ratingUrl: r
        }), {
          track: f
        } = (0, w.useGtmTrack)(), p = (0, aa.useIntl)(), {
          data: k
        } = (0, h.useQuery)(sa.GameData, {
          variables: {
            titleSlug: n
          },
          skip: !n
        });
        if ((0, v.useEffect)(() => {
            k && b(k?.game)
          }, [k]), (0, v.useEffect)(() => {
            _ && !m && g.ratingImg && (f({
              event: "page_section_impression",
              element_placement: "rating"
            }), u(!0))
          }, [_]), !g.ratingImg) return null;
        const x = !!g.ratingDescriptors;
        return (0, o.jsxs)("div", {
          className: [ta.rating, x ? ta.withDescriptors : ta.withOutDescriptors, d || ""].join(" "),
          style: (0, h.safeStyles)(c),
          "data-testid": "rating",
          ...l,
          children: [(0, o.jsx)(s.A, {
            to: g.ratingUrl,
            target: "_blank",
            children: (0, o.jsx)("img", {
              alt: p.formatMessage(ra.components_ratings_link_alt, {
                rating: (y = g.ratingImg, y.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${g.ratingImg}`)
            })
          }), x && (0, o.jsxs)("div", {
            className: ta.text,
            children: [(0, o.jsx)("p", {
              className: ta.descriptors,
              dangerouslySetInnerHTML: {
                __html: g?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), g.ratingFooter && (0, o.jsx)("hr", {}), g.ratingFooter && (0, o.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: g.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var y
      }));
      var oa = t(4595),
        ca = t(99057),
        da = t(15386),
        la = t(51562),
        ma = t(94322),
        ua = t(61784);
      const _a = ({
        disableLink: e,
        className: a,
        "data-testid": t
      }) => {
        const r = e ? "span" : s.A;
        return (0, o.jsx)(r, {
          className: [e ? "rockstargames-modules-core-newswire-articleb28a6ee32abeb20049b97677a86a4314" : "rockstargames-modules-core-newswire-articlea3d920a1139575706b914bc3a0100970", a || ""].join(" "),
          "data-testid": t,
          alt: "Rockstar Games Home",
          ...!e && {
            to: "/"
          }
        })
      };
      var ga = t(67288);
      const ba = ({
          thresholds: e,
          onThresholdReached: a,
          children: t
        }) => {
          const [r, s] = (0, v.useState)([]), [i, n] = (0, v.useState)(new Set);
          return (0, v.useEffect)(() => {
            const a = Array.from(new Set(e));
            a.sort((e, a) => e - a), s(a)
          }, [e]), (0, o.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [r.map(e => (0, o.jsx)(B.InView, {
              threshold: e,
              onChange: t => ((e, t) => {
                e && !i.has(t) && n(e => {
                  const s = new Set(e);
                  return r.forEach(e => {
                    e <= t && !s.has(e) && (s.add(e), a(e))
                  }), s
                })
              })(t, e),
              triggerOnce: !0,
              children: ({
                ref: a
              }) => (0, o.jsx)("div", {
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
        fa = () => {
          const {
            pathname: e
          } = (0, m.useLocation)();
          return (0, v.useEffect)(() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout(() => {
              e.scrollTop = 0
            }, 0)
          }, [e]), null
        };
      var pa = t(13897),
        ka = t(67050),
        va = t(79704);
      const ha = ({
        children: e
      }) => (0, o.jsx)("div", {
        className: "rockstargames-modules-core-newswire-articleaae4d33d1eecebdc9b489f8d7a1ad708",
        children: (0, o.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlec573fe5c7bdcc46c4d57ec4a2c275e3b",
          children: e
        })
      });
      var wa = t(55322),
        xa = t(60212),
        ya = t(61306),
        ja = t(81854);
      const Na = ({
        children: e,
        style: a,
        theme: t
      }) => {
        const [r, s] = (0, v.useState)(t);
        return (0, v.useEffect)(() => {
          t && s(t)
        }, [t]), (0, o.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlee5e0faf6ab9871fd60b958c6f7dcf519",
          style: a,
          "data-theme": r,
          children: e
        })
      };
      var Sa = t(93935),
        Ta = t(48524);
      const Ca = {
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
          } = (0, w.useGtmTrack)(), {
            loggedIn: i
          } = (0, w.useRockstarUser)(), {
            refetch: n
          } = (0, h.useQuery)(Ta.UserGetVote, {
            skip: !0
          }), [c] = (0, h.useMutation)(Ta.UserCastVote), [d, l] = (0, v.useState)(null), m = (0, v.useCallback)(async e => {
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
            l(i?.data?.userCastVote?.vote ?? null)
          }, [a, t]);
          return (0, v.useEffect)(() => {
            (async () => {
              if (!i || !a || !t) return;
              const e = await n({
                foreign_id: a,
                foreign_type: t
              });
              l(e?.data?.userGetVote?.vote ?? null)
            })()
          }, [a, t, i]), (0, o.jsx)("div", {
            className: Ca.userVote,
            children: (0, o.jsxs)("div", {
              className: Ca.voteContent,
              children: [(0, o.jsxs)("div", {
                className: Ca.info,
                children: [(0, o.jsx)("h3", {
                  children: r
                }), (0, o.jsx)("p", {
                  children: e
                })]
              }), (0, o.jsxs)("div", {
                className: [Ca.voteButtons, i ? "" : Ca.loggedOutButtons].join(" "),
                children: [(0, o.jsx)("button", {
                  onClick: () => m(!0),
                  className: [Ca.upVote, d ? Ca.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, o.jsx)("button", {
                  className: [Ca.downVote, !1 === d ? Ca.voteButtonActive : ""].join(" "),
                  onClick: () => m(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var Ia = t(87731),
        Aa = t.n(Ia);
      const Ea = {
          card: "rockstargames-modules-core-newswire-articlef93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-modules-core-newswire-articlea1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-modules-core-newswire-articledabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-modules-core-newswire-articlefd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-modules-core-newswire-articleb8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-modules-core-newswire-articlefd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-modules-core-newswire-articlea626ad482ff0be0336e75929516654d5"
        },
        Pa = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [r] = (0, h.usePreloadImg)(t());
          return (0, o.jsx)("div", {
            className: [Ea.screencap, r ? Ea.screencapLoaded : ""].join(" "),
            "aria-hidden": "true",
            role: "img",
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        La = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: r,
          toExplicit: i
        }) => {
          const n = i ?? `/videos/${t.id}`,
            c = {
              className: Ea.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            d = (0, o.jsxs)("div", {
              className: Ea.card,
              children: [(0, o.jsx)(Pa, {
                video: t,
                size: r
              }), (0, o.jsxs)("div", {
                className: Ea.info,
                children: [e ? (0, o.jsx)("div", {
                  className: Ea.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, o.jsx)("h5", {
                  className: Ea.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, o.jsx)("a", {
            href: n,
            target: "_blank",
            ...c,
            children: d
          }) : (0, o.jsx)(s.A, {
            to: n,
            ...c,
            children: d
          })
        },
        Ma = {
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
        Va = (0, aa.defineMessages)({
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
        Da = (0, ia.g)(({
          videos: e
        }) => {
          const a = (0, h.useLocale)(),
            {
              formatMessage: t
            } = (0, aa.useIntl)(),
            {
              track: r
            } = (0, w.useGtmTrack)(),
            {
              setBodyIsLocked: i
            } = (0, h.useBodyScrollable)("VideoCarousel"),
            [n, c] = (0, v.useState)(0),
            [l, m] = (0, v.useState)(0),
            u = (0, v.useRef)(null),
            _ = (0, v.useRef)(null);
          (0, v.useEffect)(() => {
            if (!u.current || !_.current) return;
            const a = new(Aa())(u.current);
            a.get("press").set({
              time: 0
            }), a.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              r = () => {
                c(n - 1 < 0 ? 0 : n - 1), m(0)
              },
              s = () => {
                const a = n + 1 >= e.length - 1 ? e.length - 1 : n + 1;
                c(a), m(0)
              },
              o = e => {
                m(e.isFinal ? 0 : e.deltaX), "panleft" !== e.type && "panright" !== e.type || !_.current?.classList.contains(Ma.dragging) || t() && i(!0)
              },
              d = () => {
                t() && i(!1), m(0)
              },
              l = e => {
                "press" === e.type && u.current?.classList.add(`${Ma.disableClick}`), "tap" === e.type && (u.current?.classList.remove(`${Ma.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                t() && i(!1), u.current && u.current.classList.remove(`${Ma.disableClick}`)
              },
              b = () => {
                t() && i(!1)
              };
            return _.current.addEventListener("transitionend", b), a.on("swiperight", r), a.on("swipeleft", s), a.on("pan", o), a.on("panend", d), a.on("press tap", l), a.on("pressup", g), () => {
              a.off("swiperight", r), a.off("swipeleft", s), a.off("pan", o), a.off("panend", d), a.off("press tap", l), a.off("pressup", g), _.current && _.current.removeEventListener("transitionend", b), m(0)
            }
          }, [u.current, n]);
          const g = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", t(a ? Va.learn_more : Va.watch_more)]
          };
          return (0, o.jsxs)("section", {
            className: Ma.carousel,
            children: [(0, o.jsx)("div", {
              className: Ma.track,
              ref: u,
              children: (0, o.jsx)("div", {
                className: `${Ma.items} ${0!==l?Ma.dragging:""}`,
                ref: _,
                style: {
                  transform: `translateX(calc(-${100*n}% + ${l}px))`
                },
                children: e.map((e, a) => {
                  const [t, r, i] = g(e);
                  return (0, o.jsx)(s.A, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": r,
                    to: r,
                    className: n === a ? Ma.active : "",
                    role: "link",
                    title: t,
                    tabIndex: n === a ? 0 : -1,
                    target: i,
                    children: (0, o.jsx)(Pa, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                })
              })
            }), (0, o.jsxs)("div", {
              className: Ma.slidesContent,
              children: [(0, o.jsx)("div", {
                className: Ma.text,
                children: e.map((e, t) => {
                  const [i, c, l, m] = g(e);
                  return (0, o.jsxs)(s.A, {
                    className: [Ma.info, t === n ? Ma.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": c,
                    to: c,
                    role: "link",
                    tabIndex: n === t ? 0 : -1,
                    target: l,
                    "aria-label": `${e.game.title} ${i}`,
                    onClick: (u = c, () => {
                      r({
                        event: "cta_watch_video",
                        text: "watch now",
                        link_url: u,
                        element_placement: "video carousel"
                      })
                    }),
                    children: [(0, o.jsxs)("div", {
                      className: Ma.title,
                      children: [(0, o.jsxs)("div", {
                        className: Ma.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, o.jsx)("h2", {
                        className: Ma.videoTitle,
                        children: i
                      })]
                    }), (0, o.jsx)(d.A, {
                      tabIndex: -1,
                      role: "presentation",
                      "aria-hidden": !0,
                      className: Ma.cta,
                      children: m
                    })]
                  }, e.id);
                  var u
                })
              }), (0, o.jsx)("section", {
                className: Ma.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map((e, a) => (0, o.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => c(a),
                  className: n === a ? Ma.active : "",
                  type: "button"
                }, e.id))
              })]
            })]
          })
        }),
        Fa = (0, aa.defineMessages)({
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
        Ra = {
          img: "rockstargames-modules-core-newswire-articled87037fda2ea106061c7a614036a89df",
          imgContentful: "rockstargames-modules-core-newswire-articleb9f3c994ce8a97ac6530cf0a85e5abe0",
          wide: "rockstargames-modules-core-newswire-articledc444c089b89129c0a39bc61845d531f"
        };
      (0, h.importAll)(t(86751));
      const $a = ({
          isWideCard: e = !1,
          size: a = 640,
          title: r,
          titleSlug: s,
          inGlobalNav: i = !1
        }) => {
          const {
            isMobile: n
          } = (0, h.useWindowResize)(), c = (0, h.useLocale)(), d = (0, v.useMemo)(() => {
            let r = "";
            return e && (r = n ? t(16044)(`./${s}/mobile/${c}.jpg`) : t(51048)(`./${s}/desktop/${c}.jpg`)), r || (r = t(39294)(`./${s}.jpg`), r += `?im=Resize=${a}`), r
          }, [n, s]), [l] = (0, h.usePreloadImg)(d);
          let m = d;
          return (0, o.jsx)("div", {
            role: "img",
            "aria-label": r,
            style: {
              backgroundImage: `url(${m})`,
              borderRadius: i ? "unset" : ""
            },
            className: [Ra.img, l ? Ra.startAnimation : "", e ? Ra.wide : ""].join(" ")
          })
        },
        Ba = {
          fobLink: "rockstargames-modules-core-newswire-articled30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-modules-core-newswire-articlec9686ec502f78b05e47568667e90bd17"
        },
        Oa = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: r = ""
          } = e, i = ["VI"].includes(t.toUpperCase());
          return (0, o.jsx)(s.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? r,
            target: "_self",
            className: [Ba.fobLink, i ? Ba.wide : ""].join(" "),
            reloadDocument: i,
            children: (0, o.jsx)($a, {
              title: e.title,
              titleSlug: t,
              isWideCard: i,
              size: i ? 1740 : 480
            })
          })
        },
        Ga = {
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
        Ha = (0, ia.g)(({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: r
        }) => {
          const s = (0, aa.useIntl)(),
            {
              track: i
            } = (0, w.useGtmTrack)(),
            n = void 0 !== a ? "games" : "videos",
            [c, d] = (0, v.useState)(),
            [m, u] = (0, v.useState)(),
            [_, g] = (0, v.useState)(0),
            b = (0, v.useRef)(null),
            f = (0, v.useRef)(null);
          (0, v.useEffect)(() => {
            u({
              nextEl: f.current,
              prevEl: b.current
            })
          }, [f, b]), (0, v.useEffect)(() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), g(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [_]);
          const p = e => {
            c?.slideTo(e)
          };
          let k;
          return k = "games" === n ? (0, o.jsx)(o.Fragment, {
            children: a.results.filter(e => "775700as" !== e.id).map((e, a) => (0, o.jsx)(oe.qr, {
              className: Ga.slide,
              onFocus: () => p(a),
              children: (0, o.jsx)(Oa, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id))
          }) : (0, o.jsx)(o.Fragment, {
            children: e.map((e, a) => (0, o.jsx)(oe.qr, {
              className: Ga.slide,
              onFocus: () => p(a),
              children: (0, o.jsx)(La, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id))
          }), (0, o.jsxs)("section", {
            className: Ga.videoList,
            children: [(0, o.jsxs)("h3", {
              className: Ga.sectionHeader,
              children: [t, (0, o.jsxs)("div", {
                className: Ga.arrowNav,
                children: [(0, o.jsx)("button", {
                  className: (0, l.default)(Ga.arrow, Ga.previous),
                  type: "button",
                  ref: b,
                  "aria-label": s.formatMessage(Fa.previous_button_label),
                  onKeyDown: e => {
                    "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), c?.slidePrev())
                  }
                }), (0, o.jsx)("button", {
                  className: (0, l.default)(Ga.arrow, Ga.next),
                  type: "button",
                  ref: f,
                  "aria-label": s.formatMessage(Fa.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" !== e.key || e.shiftKey) "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), c?.slideNext());
                    else {
                      const a = c?.slides[c?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, o.jsx)("div", {
              className: (0, l.default)(Ga.items, _ % 1 != 0 ? Ga.partial : ""),
              children: (0, o.jsx)("div", {
                className: Ga.trackWrapper,
                children: _ && (0, o.jsx)(oe.RC, {
                  className: Ga.track,
                  slidesPerView: _,
                  spaceBetween: 24,
                  onInit: e => {
                    d(e)
                  },
                  grabCursor: !0,
                  navigation: m,
                  modules: [ne.Vx],
                  slideClass: (0, l.default)("swiper-slide"),
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
                  children: k
                })
              })
            })]
          })
        });
      var Ua = t(20304),
        qa = t(34100),
        Wa = t(47942);
      class Ka extends v.Component {
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
          (0, Wa.addBreadcrumb)({
            category: "ErrorBoundary",
            message: e.message || "E399 triggered",
            data: {
              error: e,
              errorInfo: a
            }
          }), (0, Wa.captureMessage)("ErrorBoundary", Wa.Severity.Error)
        }
        render() {
          return null !== this.state.error.code ? (0, o.jsx)(qa.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const Xa = (e, a = null) => {
        const t = t => (0, o.jsx)(Ka, {
          header: a,
          children: (0, o.jsx)(e, {
            ...t
          })
        });
        return t.displayName = `withSearchbarErrorBoundary(${e.displayName||e.name||"Component"})`, t
      };
      var Ja = t(72408),
        Ya = t(73005),
        Za = t(22230)
    },
    29625(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var r = t(42295),
        s = t(1556),
        i = t(14200);
      const n = {
          button: "rockstargames-modules-core-newswire-articlebc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-modules-core-newswire-articlea3e6439dcaa4870840298d683db4831c"
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
          const m = (0, s.default)(n.button, n[t], e);
          return o ? (0, r.jsx)(i.A, {
            ...l,
            to: o,
            className: m,
            onClick: c,
            target: d,
            children: a
          }) : (0, r.jsx)("button", {
            ...l,
            type: "button",
            className: m,
            onClick: c,
            children: a
          })
        }
    },
    4595(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(42295);
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
    99057(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(42295);
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
    20837(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var r = t(42295),
        s = t(34725),
        i = t(13331),
        n = t(1556);
      const o = ({
        children: e,
        context: a = null,
        game: t,
        image: o = {},
        style: c = {},
        template: d = null,
        theme: l = null,
        reversedOnMobile: m = !1,
        className: u = "",
        id: _ = null
      }) => {
        const g = (0, s.S1)(o ?? {}),
          b = {
            ...c
          };
        if (g?.src?.desktop) {
          const e = (o?.style && o?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (o?.style && o?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (b.background = `url(${g?.src?.desktop}) ${a} ${t}`, o?.style && o?.style["--linear-gradient"]) b.background = `linear-gradient(${o?.style["--linear-gradient"]}), url(${g?.src?.desktop}) ${a} ${t}`;
          else if (o?.style && o?.style["--gradient-height"]) {
            const e = o?.style["--gradient-height"] || "3",
              r = o?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              s = o?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            b.background = `linear-gradient(180deg, ${r}, transparent ${e}%, transparent ${100-e}%, ${s}), url(${g?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, r.jsx)("div", {
          id: _,
          className: (0, n.default)("rockstargames-modules-core-newswire-articleda87ead760b989fbe90a0b89c60b0653", m ? "rockstargames-modules-core-newswire-articledfbda195073626bc6a7690dc73fba873" : "", u),
          "data-game": "community" === d ? null : t,
          style: (0, i.safeStyles)(b),
          "data-context": a,
          "data-template": d,
          "data-theme": l,
          children: e
        })
      }
    },
    15386(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(42295);
      const s = {
          responsiveGridBox: "rockstargames-modules-core-newswire-articlee9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-modules-core-newswire-articleb0d14e4a5e63a903117e93a392cbfb53"
        },
        i = ({
          children: e,
          cols: a,
          className: t,
          rows: i,
          style: n
        }) => {
          const o = n ? {
            ...n
          } : {};
          return void 0 !== a && (o.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== i && (o.gridTemplateRows = `repeat(${i}, 1fr)`), (0, r.jsx)("div", {
            className: [s.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: o,
            children: e
          })
        }
    },
    51562(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(42295);
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
    62312(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var r = t(42295),
        s = t(10336),
        i = t.n(s),
        n = t(13331),
        o = t(1556);
      const c = ({
        attributes: e = {},
        children: a,
        className: t = "",
        id: s = "",
        style: c = {}
      }) => (0, r.jsx)("span", {
        className: (0, o.default)(t, e?.className, "rockstargames-modules-core-newswire-articlec650a7a1e761d6a9f2d6ce1cd8d6f330"),
        id: s,
        style: (0, n.safeStyles)(c ?? e?.style ?? {}),
        dangerouslySetInnerHTML: {
          __html: i().unescape(a)
        }
      })
    },
    61784(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(42295);
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
    79704(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var r = t(42295);
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
    29315(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var r = t(42295),
        s = t(71127);
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
      const n = (e, a = null, t = !1) => {
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
    34100(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var r = t(42295),
        s = t(71127),
        i = t(42909),
        n = t(14200),
        o = t(67050);
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
        d = ({
          error: e,
          domain: a = ""
        }) => {
          console.error({
            error: e
          });
          const {
            formatMessage: t
          } = (0, i.useIntl)();
          let d = e?.message ?? t(c.wasted_error_404_new);
          d = t(c.wasted_error_404_new);
          const l = e?.code ?? 398,
            m = (0, s.useRef)(null);
          return (0, s.useEffect)(() => {
            m && m?.current && m.current.focus()
          }, [m]), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, r.jsx)("h3", {
              tabIndex: -1,
              ref: m,
              children: `${d} (${l})`
            }), (0, r.jsx)(n.A, {
              to: "/",
              reloadDocument: !1,
              children: t(c.wasted_home)
            }), "clr" !== a && (0, r.jsx)(o.A, {})]
          })
        }
    },
    95359(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        Animations: () => r,
        LiteMotion: () => l,
        withFadeIn: () => b,
        withFadeUp: () => v
      });
      var r = {};
      t.r(r), t.d(r, {
        getVariant: () => x,
        transitions: () => h,
        variants: () => w
      });
      var s = t(42295),
        i = t(71127),
        n = t(34712),
        o = t(43348),
        c = t(53078);
      const d = (0, i.forwardRef)((e, a) => {
        const {
          children: t,
          tag: r = "div"
        } = e, i = n.m[r];
        return (0, s.jsx)(o.F, {
          features: c.l,
          children: (0, s.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      });
      d.displayName = "LiteMotion";
      const l = d;
      var m = t(55087);
      const u = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        _ = {
          ease: "easeIn",
          duration: .4
        },
        g = ({
          children: e
        }) => (0, s.jsx)(m.P.div, Object.assign({
          className: "rockstargames-modules-core-newswire-articlef38982805188b64825a72d2c5fac938c",
          variants: u,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: _
        }, {
          children: e
        })),
        b = e => a => (0, s.jsx)(g, {
          children: (0, s.jsx)(e, Object.assign({}, a))
        }),
        f = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        p = {
          ease: "easeIn",
          duration: .75
        },
        k = ({
          children: e
        }) => (0, s.jsx)(m.P.div, {
          className: "rockstargames-modules-core-newswire-articlec1ad787ad6429786650325edac0ffe42",
          variants: f,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: p,
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
        x = (e = "imageMask", a = "collapsed") => w[e][a]
    },
    13989(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => _
      });
      var r = t(42295),
        s = t(71127),
        i = t(10181),
        n = t(13331),
        o = t(82199),
        c = t(46219),
        d = t(75523),
        l = t(14200),
        m = t(23395);
      const u = {
          info: "rockstargames-modules-core-newswire-articleea1c51ae745531c2aeabbe3fcf603842",
          newswireBlock: "rockstargames-modules-core-newswire-articleb394b56c31488c36155ca82090c66e6f",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-newswire-articlec06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-modules-core-newswire-articleca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-modules-core-newswire-articleb3d4a8cfcc371ae39ce6220d009c5954",
          startAnimation: "rockstargames-modules-core-newswire-articlea56af3c95449fe8452485dfb6c89fc29",
          title: "rockstargames-modules-core-newswire-articlef1dfe59c3d981dbe132559620885ecea",
          top: "rockstargames-modules-core-newswire-articleeee9c5d3b714a61ac265369800a6d4e0"
        },
        _ = ({
          section: e = "",
          index: a,
          post: t,
          noSpecialOrder: _ = !1,
          focused: g
        }) => {
          const {
            track: b
          } = (0, o.useGtmTrack)(), [f] = (0, i.useSearchParams)(), p = t.preview_images_parsed.newswire_block, k = (0, c.Ub)(d.fi.mobile), v = {
            default: 0 !== a || _ ? p.square || p.d16x9 || p._fallback : p.d16x9 || p.square || p._fallback,
            mobile: p.square || p._fallback
          }, [h] = (0, n.usePreloadImg)(v.default), w = {
            default: {
              backgroundImage: `url(${v.default})`
            },
            mobile: {
              backgroundImage: `url(${v.mobile})`
            }
          }, x = (0, s.useCallback)(() => {
            b({
              event: "card_click",
              card_id: t.id,
              card_name: t.name_slug.replace(/-/g, " "),
              link_url: t.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }, [t]);
          return (0, r.jsx)(l.A, {
            to: t.url,
            className: [u.newswireBlock, _ ? u.newswireBlockNoSpecialOrder : "", null !== h ? u.startAnimation : ""].join(" "),
            focused: g,
            onClick: x,
            children: (0, r.jsxs)(r.Fragment, {
              children: [0 !== a || f.get("tag_id") ? (0, r.jsx)("div", {
                className: u.preview,
                style: w.default
              }) : (0, r.jsx)("div", {
                className: k ? u.previewMobile : u.preview,
                style: k ? w.mobile : w.default
              }), (0, r.jsxs)("div", {
                className: u.info,
                children: [(0, r.jsxs)("div", {
                  className: u.top,
                  children: [t.primary_tags.length ? (0, r.jsx)(m.A, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, r.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, r.jsx)("h5", {
                  className: u.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        }
    },
    23395(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var r = t(42295),
        s = t(14200);
      const i = {
          tag: "rockstargames-modules-core-newswire-articleb660bb706132d84852c02df01cc6ed5a"
        },
        n = ({
          className: e,
          href: a,
          title: t,
          style: n
        }) => {
          const o = (0, r.jsxs)("div", {
            style: n,
            className: [i.tag, e].join(" "),
            children: [(0, r.jsx)("i", {}), t]
          });
          return void 0 !== a ? (0, r.jsx)(s.A, {
            to: a,
            children: o
          }) : o
        }
    },
    51434(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var r = t(42295),
        s = t(13331),
        i = t(13989);
      const n = {
          just1post: "rockstargames-modules-core-newswire-articled46374473ed68a4121f88b44eba06359",
          pillBtn: "rockstargames-modules-core-newswire-articlef2d003dd0e6a129a56ea07208548787c",
          posts: "rockstargames-modules-core-newswire-articlecfe09d4dc8447b1e606404300d040e7a",
          related: "rockstargames-modules-core-newswire-articleb8a63bb419c1f2a8f94e099e1e650e48",
          selected: "rockstargames-modules-core-newswire-articlef94728c4a438800b9abab11a8b3e3c0a"
        },
        o = (0, s.withTranslations)(({
          posts: e,
          t: a
        }) => (0, r.jsxs)("section", {
          className: n.related,
          children: [(0, r.jsx)("h2", {
            children: a("Related Stories")
          }), (0, r.jsx)("div", {
            className: [n.posts, 1 === e.length ? n.just1post : ""].join(" "),
            children: e.map(e => (0, r.jsx)(i.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id))
          })]
        }))
    },
    3436(e, a, t) {
      "use strict";
      t.d(a, {
        y3: () => _e,
        h7: () => ee,
        E$: () => He
      });
      var r = t(42295),
        s = t(71127),
        i = t(10336),
        n = t.n(i),
        o = t(17301),
        c = t(95359),
        d = t(13897),
        l = t(13331),
        m = t(1556),
        u = t(16783);
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
          children: s.map(e => (0, r.jsx)(u.A, {
            ...e
          }, e?.text))
        }) : null,
        g = {
          content: "rockstargames-modules-core-newswire-articlef418ed13cf5cbe3f701ce0d872b50704",
          textOverlay: "rockstargames-modules-core-newswire-articleca83475001f5d512b9ffcd89f1117561"
        },
        {
          LiteMotion: b,
          Animations: f
        } = c,
        {
          variants: p,
          transitions: k
        } = f,
        v = ({
          title: e,
          hasTag: a,
          tag: t,
          hasDescription: s,
          description: i,
          fadesOut: n = !1,
          badges: o
        }) => (0, r.jsx)(b, {
          initial: p.fade.out.initial,
          animate: {
            opacity: n ? 0 : 1
          },
          transition: k.fade,
          className: g.textOverlay,
          children: (0, r.jsxs)("div", {
            className: g.content,
            children: [(0, r.jsx)(_, {
              hasTag: a,
              tag: t,
              badges: o?.filter(e => e?.isPrimary)
            }), (0, r.jsx)("h3", {
              children: e
            }), s && i && (0, r.jsx)("div", {
              className: g.description,
              children: i
            })]
          })
        }),
        h = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          tag: i,
          tagStyle: n,
          discountPrice: o,
          originalPrice: c,
          setPricingContainerHeight: d = null
        }) => {
          const l = (0, s.createRef)();
          return (0, s.useEffect)(() => {
            const e = () => {
              l.current && null !== d && d(l.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [l]), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee419c6cd31abd635e742e635dcfd8316",
            ref: l,
            "data-show-background": t,
            children: [a && (0, r.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlebf415d56280a8768ee0c26e116865d5b",
              children: e
            }), (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articled98da8fc9dce6d600db165351d3a3fed",
              children: [(0, r.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlea5717338db21efc7eb765011d68ea73d",
                "data-tag-style": n || "free",
                children: i
              }), (0, r.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlecdaaa9655747e4d129d6c22080bdd33d",
                children: o
              }), (0, r.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleaf3db4eb6d14c1f4ee5689b4e6386715",
                children: c
              })]
            })]
          })
        };
      var w = t(80391),
        x = t(28985),
        y = t(47240),
        j = t(81715),
        N = t(49429),
        S = t(32903),
        T = t(85719),
        C = t(11008);
      const z = {
          ps5: y,
          ps4: x,
          ps: w,
          xboxone: N,
          xbox: S,
          xboxseriesxs: j,
          nintendoswitch: C,
          pc: T,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        I = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          platformOptions: i,
          setPricingContainerHeight: n = () => {},
          expandedView: o
        }) => {
          const c = (0, s.createRef)();
          return (0, s.useEffect)(() => {
            const e = () => {
              c.current && null !== n && n(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [c]), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleee81f54f31ab2cd10a67313b9689bf96",
            ref: c,
            "data-show-background": t,
            "data-show-platforms": !o,
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
                  src: z[e]
                }, e))
              })]
            })]
          })
        },
        A = ({
          textOverlayProps: e,
          title: a,
          size: t,
          expandedView: i = !1,
          children: n,
          pricingOptions: o,
          setPricingContainerHeight: c,
          isCoverCard: d = !1,
          platformOptions: l
        }) => {
          const [m] = (({
            hasTextOverlay: e,
            tag: a,
            collapsedHasTag: t,
            description: i,
            collapsedHasDescription: n,
            size: o,
            title: c,
            expandedView: d,
            badges: l
          }) => {
            const [m, u] = (0, s.useState)(null), _ = (0, s.useMemo)(() => {
              if (!e) return null;
              const s = "sm" !== o && n;
              return (0, r.jsx)(v, {
                title: c,
                hasTag: t,
                tag: a,
                hasDescription: s,
                description: i,
                fadesOut: d,
                badges: l
              })
            }, [e, a, t, i, n, o, c, d, l]);
            return (0, s.useEffect)(() => {
              u(_)
            }, [_]), [m, u]
          })({
            ...e,
            size: t,
            title: a,
            expandedView: i
          }), u = void 0 !== o?.hasPricingOptions || null !== l;
          return (0, r.jsxs)("header", {
            className: "rockstargames-modules-core-newswire-articlecab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": d,
            "data-expanded-view": i,
            children: [s.Children.map(n, e => (0, s.cloneElement)(e, {
              title: a,
              size: t,
              expandedView: i
            })), m, u && (0, r.jsxs)(r.Fragment, {
              children: [!0 === l?.hasPlatformOptions && (0, r.jsx)(I, {
                title: a,
                platformOptions: l,
                pricingOptions: o,
                setPricingContainerHeight: c,
                expandedView: i
              }), !0 === o?.hasPricingOptions && (0, r.jsx)(h, {
                title: a,
                tag: o?._memoq?.tag,
                tagStyle: o?._memoq?.tagStyle || "free",
                discountPrice: o?._memoq?.discountPrice,
                originalPrice: o?._memoq?.originalPrice,
                setPricingContainerHeight: c
              })]
            })]
          })
        },
        {
          LiteMotion: E,
          Animations: P
        } = c,
        {
          transitions: L
        } = P,
        M = ({
          components: e,
          payload: a,
          prod: t,
          size: i,
          title: c,
          initial: u = "initial",
          animate: g = "animate",
          variants: b,
          type: f = null,
          context: p = null,
          textOverlayProps: k,
          className: v,
          children: w,
          theme: x = "none",
          id: y,
          pricingOptions: j,
          pricingContainerHeight: N,
          isCoverCard: S,
          platformOptions: T,
          isProductCard: C = !1
        }) => {
          const z = (0, s.useRef)(null),
            I = (0, s.useRef)(null),
            {
              tag: P,
              expandedHasTag: M,
              badges: V
            } = k;
          n().set(a, "meta.prod", t);
          const D = w?.props?.images.length > 0;
          let F = (0, r.jsx)("h1", {
            children: c
          });
          return S && (F = null), (0, s.useEffect)(() => {
            const e = () => {
              z.current && z.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (z.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }, []), (0, r.jsx)(l.DataLayerProvider, {
            card_id: y,
            card_name: c?.toLowerCase(),
            children: (0, r.jsx)(d.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === f ? z : I,
              children: (0, r.jsxs)(E, {
                ref: z,
                initial: u,
                animate: g,
                variants: b.expanded,
                transition: L.cardOpen,
                className: (0, m.default)("rockstargames-modules-core-newswire-articlec2289ce1bf0de6ad8a4a8ce7e90a4b66", v),
                "data-type": f,
                "data-size": i,
                "data-product": C,
                "data-covercard": S || !1,
                "data-context": p,
                style: {
                  "--product-card-pricing-info-height": `${N||0}px`
                },
                children: [D && (0, r.jsx)(A, {
                  size: i,
                  title: c,
                  textOverlayProps: k,
                  expandedView: !0,
                  pricingOptions: j,
                  platformOptions: T,
                  isCoverCard: S,
                  children: w
                }), (0, r.jsxs)(E, {
                  ref: I,
                  className: "rockstargames-modules-core-newswire-articlee461568802b56e8c21b8b82d9c3a1fb4",
                  variants: b.expandedContents,
                  transition: L.afterCardOpen,
                  "data-theme": x,
                  children: [(0, r.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlec4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, r.jsx)(_, {
                      hasTag: M,
                      tag: P,
                      badges: V
                    }), F, C && (0, r.jsxs)(r.Fragment, {
                      children: [!0 === T?.hasPlatformOptions && (0, r.jsx)("div", {
                        className: "rockstargames-modules-core-newswire-articlecd635452588eda421bdea19f00660efc",
                        children: (0, r.jsx)(_, {
                          hasTag: T?.hasPlatformOptions,
                          tag: T?._memoq?.platformTag,
                          tagStyle: T?._memoq?.platformTagStyle
                        })
                      }), !0 === j?.hasPricingOptions && (0, r.jsx)(h, {
                        title: c,
                        showTitle: !1,
                        showBackground: !1,
                        tag: j?._memoq?.tag,
                        tagStyle: j?.tagStyle || "free",
                        discountPrice: j?._memoq?.discountPrice,
                        originalPrice: j?._memoq?.originalPrice
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
      var V = t(62312),
        D = t(10632),
        F = t(24769),
        R = t(72527),
        $ = t(10181),
        B = t(42909),
        O = (t(51673), t(82199));
      const G = [{}, () => {}],
        H = (0, l.setContextItem)({
          context: (0, s.createContext)(G),
          key: "modalContext"
        }),
        U = (0, B.defineMessages)({
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
        q = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第 {currentPage} 页（共 {totalPages} 页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        W = (0, B.withIntl)(({
          id: e,
          position: a,
          title: t,
          size: i = "md",
          sectionTitle: n = "",
          expandedType: o = null,
          modalProps: c = {
            content: null,
            className: "",
            contentClassName: ""
          },
          className: d,
          children: l,
          isProductCard: m,
          cardIds: u = null,
          theme: _ = "none",
          isCoverCard: g,
          platformOptions: b
        }) => {
          const {
            formatMessage: f,
            formatList: p
          } = (0, B.useIntl)(), [k, v] = (0, $.useSearchParams)(), h = (0, s.useRef)(null), [, w] = (0, s.useContext)(H), {
            track: x
          } = (0, O.useGtmTrack)(), [y, j] = (0, s.useState)(!1), N = window.location.href.includes("cms5"), S = () => {
            j(!1), w(null), N || v({}), x({
              event: "trackPageview"
            })
          }, T = () => {
            if (!c?.content || !h.current || !o || "linkout" === o) return;
            const r = h.current,
              s = window.getComputedStyle(r),
              n = parseInt(s.getPropertyValue("width"), 10),
              d = parseInt(s.getPropertyValue("height"), 10),
              l = r.getBoundingClientRect(),
              {
                content: m,
                className: g,
                contentClassName: b
              } = c,
              f = "fob" === i ? "fob" : "default";
            w({
              content: m,
              onClose: S,
              rect: l,
              width: n,
              height: d,
              className: g,
              contentClassName: b,
              fadeIn: !1,
              cardIds: u,
              theme: _,
              activeId: e,
              gtm: {
                card_id: e,
                card_name: t?.toLowerCase(),
                position: a
              },
              aspectRatio: f,
              cardDimensions: {
                size: i,
                type: o
              }
            }), x({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: e,
              card_name: t?.toLowerCase(),
              position: a
            })
          };
          (0, s.useEffect)(() => {
            y && T()
          }, [y]), (0, s.useEffect)(() => {
            j(k.get("info") === e)
          }, [k.get("info"), e]);
          const C = (0, s.useMemo)(() => {
            const e = b?._memoq?.platformTag || "";
            if (b?.platformsAndLinks?.length > 0) {
              const a = b?.platformsAndLinks?.map(({
                  buttonText: e
                }) => e),
                r = p(a, {
                  type: "conjunction"
                });
              return e ? f(U.card_label_platforms_tag, {
                tag: e,
                title: t,
                platformList: r
              }) : f(U.card_label_platforms, {
                title: t,
                platformList: r
              })
            }
            return e ? f(U.card_label_tag, {
              tag: e,
              title: t
            }) : t
          }, [b, t]);
          return g || "linkout" === o ? (0, r.jsx)("div", {
            ref: h,
            className: d,
            "data-size": i,
            "data-type": o,
            "data-product": m,
            role: "button",
            "aria-label": C,
            children: l
          }) : (0, r.jsx)("button", {
            ref: h,
            onClick: r => {
              r.preventDefault(), r.stopPropagation(), e ? v({
                info: e
              }) : T(), x({
                event: "card_click",
                element_placement: n?.toLowerCase(),
                position: a,
                card_id: e,
                card_name: t?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: d,
            "data-size": i,
            "data-type": o,
            "data-product": m,
            tabIndex: "linkout" !== o ? 0 : -1,
            "aria-label": C,
            type: "button",
            children: l
          })
        }, q),
        K = {
          card: "rockstargames-modules-core-newswire-articlec49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-modules-core-newswire-articleb41eac21ba69f02fe26f8dafa8433207",
          coverCardWrapper: "rockstargames-modules-core-newswire-articledd482c08ed9fdc5cef20f63dd6720e13",
          expandedContent: "rockstargames-modules-core-newswire-articlefea5414b5f55420cfcd6c6ee12a393b3",
          imageHolder: "rockstargames-modules-core-newswire-articled893e3eab0a5754bb28882ceb8de6b59",
          pillBtn: "rockstargames-modules-core-newswire-articlef3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-modules-core-newswire-articlea03c60979e8d6882b5b8ce0f0301b7e9",
          text: "rockstargames-modules-core-newswire-articlee961062768d06292ff6cb598ae1c5e69"
        },
        X = ({
          payload: e,
          prod: a,
          images: t,
          size: i,
          title: n,
          initial: c,
          animate: d,
          variants: l,
          id: m,
          position: u,
          sectionTitle: _,
          expandedType: g,
          context: b,
          children: f,
          expandedCardContents: p,
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
          cardIds: x,
          pricingOptions: y,
          platformOptions: j = null,
          pricingContainerHeight: N,
          isCoverCard: S = !1,
          isProductCard: T = !1
        }) => {
          const C = (0, o.useTinaComponents)(),
            z = (0, s.useMemo)(() => ({
              ...C,
              HTMLElement: V.A,
              ImageWithBadge: D.A,
              Carousel: F.A,
              GroupOfItems: R.default
            }), [C]),
            I = (0, s.useMemo)(() => (0, r.jsx)(M, {
              type: g,
              components: z,
              payload: e,
              prod: a,
              images: t,
              size: i,
              title: n,
              context: b,
              textOverlayProps: k,
              initial: c,
              animate: d,
              variants: l,
              theme: w,
              cardIds: x,
              pricingOptions: y,
              id: m,
              pricingContainerHeight: N,
              isCoverCard: S,
              platformOptions: j,
              isProductCard: T,
              children: p
            }), [g, t, a, i, n, k, p, c, d, l, z, e, T]),
            A = [K.card, S ? K.coverCardWrapper : ""].join(" ");
          return (0, r.jsx)(W, {
            id: m,
            position: u,
            sectionTitle: _,
            title: n,
            size: i,
            expandedType: g,
            images: t,
            deckProps: v,
            modalProps: {
              content: I,
              ...h
            },
            className: A,
            isProductCard: T,
            cardIds: x,
            theme: w,
            isCoverCard: S,
            platformOptions: j,
            children: f
          })
        };
      var J = t(14200),
        Y = t(4407);
      const Z = {
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
        Q = ({
          videoUrl: e,
          expandedType: a,
          children: t
        }) => e && "linkout" === a ? (0, r.jsx)(J.A, {
          to: e,
          children: t
        }) : t,
        ee = ({
          className: e,
          cardType: a,
          title: t,
          image: s,
          subheader: i,
          subtitle: n,
          price: o,
          slashedPrice: c,
          badge: d = null,
          expandedType: l,
          videoUrl: m
        }) => (0, r.jsx)("div", {
          className: [Z.clrCollapsedCard, e].join(" "),
          role: "button",
          tabIndex: 0,
          children: (0, r.jsx)(Q, {
            videoUrl: m,
            expandedType: l,
            children: (0, r.jsxs)("div", {
              className: Z.cardContainer,
              "data-type": a,
              children: [(0, r.jsx)("div", {
                className: Z.cardMedia,
                children: (0, r.jsx)(Y.A, {
                  ...s
                })
              }), (0, r.jsxs)("div", {
                className: Z.cardInfo,
                children: [i && (0, r.jsx)("h6", {
                  children: i
                }), (0, r.jsx)("h5", {
                  children: t
                }), n && (0, r.jsx)("h6", {
                  className: Z.subtitle,
                  children: n
                }), "store" === a && (0, r.jsxs)("div", {
                  className: Z.storeInfo,
                  children: [(0, r.jsx)("p", {
                    className: (() => {
                      switch (d) {
                        case "New":
                          return Z.newBadge;
                        case "Sale":
                          return Z.saleBadge;
                        case "Out of Stock":
                          return Z.outOfStockBadge;
                        default:
                          return ""
                      }
                    })(),
                    children: d
                  }), (0, r.jsxs)("span", {
                    className: Z.priceInfo,
                    children: [(0, r.jsx)("p", {
                      className: Z.price,
                      children: o
                    }), (0, r.jsx)("p", {
                      className: Z.slashedPrice,
                      children: c
                    })]
                  })]
                })]
              })]
            })
          })
        }),
        ae = ({
          expandedType: e,
          to: a,
          children: t,
          style: i,
          sectionTitle: n = "",
          id: o,
          cardTitle: c,
          position: d
        }) => {
          const {
            track: l
          } = (0, O.useGtmTrack)(), m = (0, s.useCallback)(() => {
            l({
              event: "card_click",
              link_url: a,
              card_id: o,
              card_name: c,
              element_placement: n.toLowerCase(),
              position: d
            })
          }, [n, a, o, c, n, d]);
          return "linkout" === e && a ? (0, r.jsx)(J.A, {
            to: a,
            style: i,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: m,
            children: t
          }) : t
        };
      var te = t(34725);
      const re = {
          foreground: "rockstargames-modules-core-newswire-articled858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-modules-core-newswire-articled656190323ba10afc580adbf82303a8b",
          layered: "rockstargames-modules-core-newswire-articlea7a1d10cda2bf3de7960b4fadf2f7a4e",
          layeredImageFrame: "rockstargames-modules-core-newswire-articlecfc6074d8b476125230142c79438a249",
          logo: "rockstargames-modules-core-newswire-articleca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-modules-core-newswire-articlef5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: se,
          Animations: ie
        } = c,
        {
          getVariant: ne,
          variants: oe,
          transitions: ce
        } = ie,
        de = ({
          image: e,
          i: a,
          prod: t
        }) => {
          const {
            alt: s,
            src: i
          } = (0, te.S1)({
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
          style: n = {}
        }) => {
          const [o, c] = (0, s.useState)({
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
          }, [o]);
          const d = (0, s.useMemo)(() => e?.length && 0 !== e.length ? e.map(e => (0, r.jsx)(se, {
            className: (0, m.default)(re[e?.specialClass] ?? re.imageMask, re[e?.sizeClass], e?.className),
            variants: ne(e?.specialClass ?? "imageMask", i ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: ce.cardOpen,
            children: (0, r.jsx)(de, {
              image: e,
              prod: t
            })
          }, e.key)) : null, [e, o, i, t]);
          return (0, r.jsx)(se, {
            className: (0, m.default)(re.layeredImageFrame, e.length > 1 ? re.layered : re.flat, a),
            style: n,
            initial: oe.fade.in.initial,
            animate: oe.fade.in.animate,
            transition: ce.instantFade,
            "data-expanded-view": i,
            children: d
          })
        },
        me = {
          calloutHeaders: "rockstargames-modules-core-newswire-articleebd11baf4f38deb4ff8d0662eb5a6862",
          clrCardModalContent: "rockstargames-modules-core-newswire-articlef32476f7063f9c4104b440088ce4c4b0",
          content: "rockstargames-modules-core-newswire-articlea0b99bca02f0c4de4ad0bf4e4bd02337",
          details: "rockstargames-modules-core-newswire-articlee642b377145369df07970f4d4feb3f25",
          expandedCard: "rockstargames-modules-core-newswire-articlef6cbada424337b1e6ccd75c5029db4c3"
        },
        {
          variants: ue
        } = c.Animations,
        _e = ({
          id: e,
          content: a,
          size: t = "clr",
          cardType: s = "release",
          title: i,
          subheader: n,
          subtitle: c,
          storeInfo: d = {},
          expandedType: l,
          to: m,
          image: u,
          deckProps: _,
          tina: g = {},
          position: b
        }) => {
          const f = (0, o.useTinaPayload)(),
            p = g?.payload?.meta?.cdn ?? f?.meta?.prod ?? !1,
            k = {
              image: {
                ...u,
                prod: p
              }
            },
            v = [u];
          return (0, r.jsx)(X, {
            id: e,
            title: i,
            context: "clr-card",
            size: t,
            expandedType: l,
            images: k,
            deckProps: _,
            prod: p,
            position: b,
            modalProps: {
              className: me.clrCardModal,
              contentClassName: me.clrCardModalContent
            },
            variants: ue.plainCard,
            payload: {
              content: a
            },
            expandedCardContents: (0, r.jsx)(le, {
              images: v,
              prod: p
            }),
            children: (0, r.jsx)(ae, {
              expandedType: l,
              to: m,
              style: {
                display: "flex"
              },
              children: (0, r.jsx)(ee, {
                cardType: s,
                title: i,
                subheader: n,
                subtitle: c,
                image: k,
                expandedType: l,
                price: d?.price,
                slashedPrice: d?.slashedPrice,
                badge: d?.badge
              })
            })
          })
        };
      var ge = t(61306);
      const be = ({
        images: e,
        title: a,
        expandedView: t,
        variants: i,
        transition: n
      }) => {
        const o = (0, s.useMemo)(() => e && 0 !== e?.length ? e.map((e, a) => e?.image?.sources ? (0, s.createElement)(D.A, {
          ...e,
          key: a,
          style: {
            ...e?.style,
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null) : null, [e]);
        return !o?.length || o?.length < 1 ? null : 1 === o.length ? o : (0, r.jsx)(ge.A, {
          slideChildren: o,
          title: a,
          navigation: t,
          thumbsVisible: t,
          spaceBetween: 0,
          variants: i,
          transition: n
        })
      };
      var fe = t(9738),
        pe = t.n(fe),
        ke = t(93935);
      const ve = {
          customModalContent: "rockstargames-modules-core-newswire-articleecdc3da21cda9331cebe845898b7fa7b",
          pillBtn: "rockstargames-modules-core-newswire-articlecf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-modules-core-newswire-articlecbdd37e11b752cff831c5a96aeb7dbeb"
        },
        {
          transitions: he,
          variants: we
        } = c.Animations,
        xe = ({
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
          images: d = [],
          deckProps: l = {},
          tina: m = {},
          payload: u,
          position: _ = 0,
          sectionTitle: g = "",
          cardIds: b
        }) => {
          const f = (0, o.useTinaPayload)(),
            p = u ?? f,
            k = m?.payload?.meta?.cdn ?? p?.meta?.prod ?? !1,
            v = ((e, a) => e?.map(e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e))(d, k),
            [h, w] = (0, s.useState)(l?.size ?? i),
            {
              parent: x,
              main: y,
              thumbs: j
            } = we?.cardWithImageGallery?.gallery ?? {};
          return (0, s.useEffect)(() => {
            w(l?.size ?? i)
          }, [l?.size, i]), (0, r.jsx)(X, {
            id: e,
            position: _,
            sectionTitle: g,
            payload: {
              content: t,
              meta: {},
              payload: p
            },
            title: a,
            size: h,
            expandedType: n,
            images: v,
            deckProps: l,
            prod: k,
            variants: we.cardWithImageGallery,
            textOverlayProps: c,
            modalProps: {
              className: ve.customModal,
              contentClassName: ve.customModalContent
            },
            expandedCardContents: (0, r.jsx)(be, {
              images: v,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: x,
                main: y,
                thumbs: j
              },
              transition: {
                parent: he.cardOpen,
                main: he.cardOpen,
                thumbs: he.cardOpen
              }
            }),
            cardIds: b,
            children: (0, r.jsx)("div", {
              className: ve.content,
              children: (0, r.jsx)(A, {
                title: a,
                size: h,
                textOverlayProps: c,
                children: (0, r.jsx)(be, {
                  images: v,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        };
      var ye = t(81854),
        je = t(46823);
      const Ne = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        Se = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Te = e => e.scrollHeight > e.clientHeight;

      function Ce(e, a) {
        const t = {
          ...e
        };
        return n().forOwn(e, (e, r) => {
          if ("image" === r) {
            const e = t[r];
            t[r] = {
              ...e,
              prod: a
            }
          } else n().isObject(e) && !n().isArray(e) ? Ce(e, a) : n().isArray(e) && (t[r] = e.map(e => n().isObject(e) ? Ce(e, a) : e))
        }), t
      }
      const ze = (0, l.withTranslations)(({
        active: e,
        styles: a,
        title: t,
        itemNumber: i,
        inModalMode: n,
        openModalMode: c,
        element: d,
        upNext: l,
        mobileMode: m,
        refDeck: _,
        components: g,
        tina: b,
        prevPage: f,
        nextPage: p,
        onFocus: k,
        transitionStyle: v,
        selectedItemNumber: h,
        carouselTitle: w,
        sharedDraggingDelta: x,
        setSharedDraggingDelta: y,
        trapFocus: j
      }) => {
        const N = (0, B.useIntl)(),
          {
            track: S
          } = (0, O.useGtmTrack)(),
          T = (0, s.createRef)(),
          C = (0, s.createRef)(),
          z = (0, s.createRef)(),
          I = (0, s.createRef)(),
          [A, E] = (0, s.useState)(!1),
          [P, L] = (0, s.useState)(0),
          [M, V] = (0, s.useState)(0),
          [D, F] = (0, s.useState)(0),
          [R, $] = (0, s.useState)(0),
          [G, H] = (0, s.useState)(0),
          [q, W] = (0, s.useState)(!1),
          [K, X] = (0, s.useState)(0),
          [J, Y] = (0, s.useState)(0),
          [Z, Q] = (0, s.useState)(0),
          [ee, ae] = (0, s.useState)("700"),
          [re, se] = (0, s.useState)(-1),
          [ie, ne] = (0, s.useState)(0),
          [oe, ce] = (0, s.useState)(0),
          [de, le] = (0, s.useState)(0),
          [me, ue] = (0, s.useState)(!1),
          [_e, ge] = (0, s.useState)(""),
          [be, fe] = (0, s.useState)(null),
          [ke, ve] = (0, s.useState)(!1),
          [he, we] = (0, s.useState)(null),
          [xe, ye] = (0, s.useState)(!1),
          [je, ze] = (0, s.useState)(!1),
          Ie = (0, o.useTinaPayload)(),
          Ae = b?.payload?.meta?.cdn ?? !1 ?? Ie?.meta?.prod ?? !1,
          Ee = (0, o.useTranslations)({
            payload: b?.payload,
            variables: b?.variables
          }),
          Pe = Ee?.meta ?? {},
          Le = Ce(Ee?.content?.[0], Ae),
          Me = (0, s.useMemo)(() => Le?.images?.[0]?.image?.badge, [Le]),
          Ve = (0, s.useMemo)(() => Le.title ?? t ?? Pe?.title, [t, Pe?.title, Le.title]),
          De = (0, te.S1)({
            alt: Le?.images?.[0]?.image?.alt ?? "",
            ariaLabel: Le?.images?.[0]?.image?.alt ?? "",
            sources: Le?.images?.[0]?.image?.sources ?? [],
            prod: Ae
          }),
          Fe = De?.src?.mobile ?? De?.src?.desktop ?? !1,
          Re = (0, s.useMemo)(() => Pe?.foreignId, [Pe]),
          $e = (0, s.useMemo)(() => Pe?.foreignTitle, [Pe]),
          [Be, Oe] = (0, s.useState)(0),
          [Ge, He] = (0, s.useState)(0),
          [Ue, qe] = (0, s.useState)(0),
          [We, Ke] = (0, s.useState)(0),
          [Xe, Je] = (0, s.useState)(!1),
          [Ye, Ze] = (0, s.useState)(0),
          [Qe, ea] = (0, s.useState)(20),
          [aa, ta] = (0, s.useState)(null),
          [ra, sa] = (0, s.useState)(!1);
        let ia = n ? -1 : 0;
        ia = n && !e ? -1 : 0;
        const na = (0, s.useCallback)(e => {
            if (!0 === q || !n && !m || ke) return;
            const a = Se(e);
            Oe(a.x), He(a.y)
          }, [q, n]),
          oa = e => {
            na(e)
          },
          ca = e => {
            if (!0 === q || 0 === Be || !n && !m || ke) return;
            const a = Se(e),
              t = a.x > Be ? 1 : -1,
              r = Math.abs(Be - a.x);
            n && !m && r > Qe ? (sa(!0), ge(t > 0 ? "prev" : "next"), la()) : (Je(!0), Ze(r * t), y(r * t))
          },
          da = e => {
            if (!0 === q || !n && !m || ke) return;
            const a = Se(e),
              t = a.x > Be ? 1 : -1,
              r = Math.abs(Be - a.x),
              s = Math.abs(Ge - a.y);
            n && !m ? (la(), ge("")) : r > Qe && s < 25 ? (sa(!0), ge(t > 0 ? "prev" : "next"), la()) : la()
          },
          la = () => {
            W(!0), Oe(0), He(0), Je(!1), Ze(0), y(0)
          },
          ma = e => {
            e ? (n || E(!0), n || m || (clearTimeout(re), se(setTimeout(() => {
              S({
                event: "card_title_hover",
                card_name: Ve,
                card_id: i,
                position: i,
                view_name: `${Re}/${$e}`,
                source_content_id: Re,
                source_content_name: $e
              })
            }, 1e3)))) : (n || E(!1), n || m || clearTimeout(re))
          };
        return (0, s.useEffect)(() => {
          let e = K;
          A ? e = 0 : n && !m && (e = K), L(e)
        }, [A, m, n, M, R, J, Z, D, K]), (0, s.useEffect)(() => {
          E(!(!n || !m))
        }, [n, m]), (0, s.useEffect)(() => {
          n && e && S({
            event: "virtualPageview",
            display_type: m ? "mobile" : "desktop",
            view_name: `${Re}/${Ve}`,
            source_content_id: Re,
            source_content_name: $e
          })
        }, [n, e]), (0, s.useEffect)(() => {
          const e = pe()((e, a) => {
            let t = 18;
            if (e?.documentElement && (t = Ne(e?.documentElement, "--root-font-size")), oe !== a.innerHeight && ce(a.innerHeight), _?.current) {
              Q(Ne(_.current, "--eventDeck-marginSm") * t);
              const e = t * Ne(_?.current, "--eventDeck-modalGutters"),
                r = a?.innerWidth,
                s = r - 2 * e;
              V(s), z.current && m && F(s), $(Ne(_.current, "--eventDeck-itemSize") * t), le(Ne(_.current, "--eventDeck-phaseOneTransitionDuration"));
              const i = Ne(_?.current, "--eventDeck-itemImageTitleMargins") * t,
                n = C?.current?.clientHeight,
                o = n + i;
              Number.isNaN(o) || X(o), ne(Ne(_?.current, "--eventDeck-headerHeight") * t)
            }
            let r = Math.min(700, a.innerWidth);
            m || (r = 900), ae(`${r}`)
          }, 300);
          return window.addEventListener("resize", () => {
            e(document, window)
          }), e(document, window), () => {
            window.removeEventListener("resize", () => {
              e(document, window)
            })
          }
        }, [_, m]), (0, s.useEffect)(() => {
          if (T.current) {
            const e = T.current.clientHeight;
            Number.isNaN(e) || Y(e)
          }
        }, [T]), (0, s.useEffect)(() => {
          if (n && m && z.current && (z.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !n && m && z.current) {
            const e = 228 / M;
            z.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
          }!m && z.current && (z.current.style.transform = null)
        }, [n, m, M, D]), (0, s.useEffect)(() => {
          const e = .5 * M,
            a = oe - ie - 3 * Z;
          H(M - (e < a ? e : a))
        }, [M, Z, oe]), (0, s.useEffect)(() => {
          "next" === _e ? (p(null, !0), ge("")) : "prev" === _e && (f(null, !0), ge(""))
        }, [_e]), (0, s.useEffect)(() => {
          qe(0), Ke(0)
        }, [m]), (0, s.useEffect)(() => {
          m ? ea(n ? 35 : 20) : n && ea(50)
        }, [n, m]), (0, s.useEffect)(() => {
          if (null !== a?.transform) {
            const e = a?.transform?.split(",") ?? [],
              t = e[0].split("("),
              r = Number(t[1].replace("px", "")),
              s = Number(e[1].replace("px", ""));
            qe(r), Ke(s)
          }
        }, [a]), (0, s.useEffect)(() => {
          if (!q) return;
          clearTimeout(be);
          const e = setTimeout(() => {
            W(!1), Oe(0)
          }, 200);
          fe(e)
        }, [q, 200]), (0, s.useEffect)(() => {
          if (!ra) return;
          clearTimeout(aa);
          const e = setTimeout(() => {
            sa(!1)
          }, 1e3);
          ta(e)
        }, [ra]), (0, s.useEffect)(() => {
          n && clearTimeout(re), setTimeout(() => {
            ue(!me)
          }, de)
        }, [n]), (0, s.useEffect)(() => (document.body.addEventListener("mouseleave", la), () => {
          document.body.removeEventListener("mouseleave", la)
        }), []), (0, s.useEffect)(() => {
          I.current ? ye(Te(I.current)) : ye(!1), void 0 !== d && d.current ? ze(Te(d.current)) : ze(!1)
        }, [d, I, e, n, me]), Le ? (0, r.jsxs)("button", {
          className: "rockstargames-modules-core-newswire-articlec02ee363d47108460ab7916fc955cd9b",
          ref: d,
          "data-item-position": i,
          "data-modal-mode": n,
          "data-active-item": e,
          "data-up-next": l,
          "data-transition": Xe || 0 !== x ? "none" : v,
          "data-scrollable": je,
          style: {
            ...a,
            transform: n && e && !m ? `translate3d(${Ue+Ye}px, ${We}px, 0)` : m && !n ? `translate3d(${Ue+x}px, ${We}px, 0)` : a?.transform
          },
          onClick: e => {
            ra || (n ? n && !m && (i < h ? f(e, !0) : i > h && p(e, !0)) : c(e))
          },
          onMouseEnter: () => ma(!0),
          onMouseLeave: () => ma(!1),
          onFocus: e => (e => {
            k?.(e), ma(!0)
          })(e),
          onBlur: () => ma(!1),
          onTouchStart: oa,
          onTouchMove: ca,
          onTouchEnd: da,
          onMouseDown: oa,
          onMouseMove: ca,
          onMouseUp: da,
          onKeyUp: e => {
            "Enter" !== e.code && "Space" !== e.code || n || c(e)
          },
          onKeyDown: e => {
            "Tab" === e.key && e.shiftKey && n && (e.preventDefault(), j("backwards")), "Space" === e.code && e.preventDefault()
          },
          "aria-label": n ? N.formatMessage(U.events_deck_modal_group_label) : Ve,
          role: n ? "dialog" : "button",
          children: [(0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articledee75b8e3614051c8f0fc97e373e78e5",
            "data-full-header": A,
            style: {
              height: n && m ? `${M}px` : null,
              width: n && m ? `${M}px` : null
            },
            "aria-hidden": !0,
            children: [Fe && (0, r.jsx)("img", {
              ref: z,
              src: `${De?.src?.mobile??De?.src?.desktop}?im=Resize,width=${ee}`,
              alt: De?.alt,
              style: {
                width: 0 !== D && m ? `${D}px` : null,
                height: 0 !== D && m ? `${D}px` : null
              }
            }), (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articledc279f97c134d6e7d30602288b8b10ae",
              "aria-hidden": "true",
              style: {
                transform: !m || m && n ? `translate3d(0, ${P}px, 0)` : null
              },
              children: [Me && (0, r.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlecfe252d5613a21c1d308c98566cabd21",
                ref: T,
                children: (0, r.jsx)(u.A, {
                  text: Me
                })
              }), (0, r.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleb311a78aea53383ab6bd5cbccb52ceeb",
                tabIndex: -1,
                ref: C,
                "aria-hidden": "true",
                children: Ve
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled212586e74ea4b4fe934beed9e339f78",
            ref: I,
            "aria-hidden": !n,
            tabIndex: -1,
            onScroll: () => {
              ve(!0), la(), clearTimeout(he);
              const e = setTimeout(() => {
                ve(!1)
              }, 100);
              we(e)
            },
            style: {
              top: n && m ? `${M}px` : null,
              width: n && !m && e ? `${G}px` : null,
              touchAction: xe || m ? "unset" : "none"
            },
            children: [Ve && (0, r.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articleda9ef865674c108ffd53cfab2ed2971a",
              children: Ve
            }), (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleabad8b0c98a7216d91b672492397e6a6",
              children: (0, r.jsx)(o.TinaParser, {
                components: g,
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
              onFocus: j,
              style: {
                display: n ? "block" : "none"
              }
            })]
          })]
        }) : null
      });
      var Ie = t(20304);
      const Ae = "rockstargames-modules-core-newswire-articleeff7810cc71a3b63bfc3e58cbe4a0279",
        Ee = ({
          prevPage: e,
          prevBtnDisabled: a,
          nextPage: t,
          nextBtnDisabled: i,
          selectedItemNumber: n,
          itemsData: o,
          closeModalMode: c,
          inModalMode: d,
          controlsHidden: l,
          focusTrapControl: m,
          focusTrapDirection: u,
          setTriggerFocusCard: _
        }) => {
          const g = (0, B.useIntl)(),
            b = (0, s.createRef)(),
            f = (0, s.createRef)(),
            p = (0, s.createRef)();
          return (0, s.useEffect)(() => {
            m && ("backwards" === u ? p?.current?.focus() : a ? f?.current?.focus() : b?.current?.focus())
          }, [m, a]), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea13ee8af1dd8f09d28c65e56abd782ef",
              "aria-hidden": l || "false",
              children: [(0, r.jsx)("button", {
                className: Ae,
                ref: b,
                type: "button",
                onClick: e,
                disabled: a,
                "aria-label": d ? g.formatMessage(U.events_deck_modal_previous_aria_label) : g.formatMessage(U.events_deck_previous_aria_label),
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && d && (e.preventDefault(), _(!0))
                }
              }), (0, r.jsxs)("span", {
                className: "rockstargames-modules-core-newswire-articlea6b11adaa46a0c2acc5893d2f5da04f1",
                "aria-hidden": !d,
                children: [(0, r.jsx)(Ie.A, {
                  "aria-live": "polite",
                  children: g.formatMessage(U.events_deck_paging_label, {
                    currentPage: n + 1,
                    totalPages: o.length
                  })
                }), (0, r.jsxs)("span", {
                  "aria-hidden": "true",
                  className: "rockstargames-modules-core-newswire-articleeb9f07e9a2e17e70e61b73dec95da6c0",
                  children: [n + 1, (0, r.jsx)("span", {
                    className: "rockstargames-modules-core-newswire-articleaad28b229162f1d7494a2de3a3b6b547"
                  }), o.length]
                })]
              }), (0, r.jsx)("button", {
                className: Ae,
                ref: f,
                type: "button",
                onClick: t,
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && a && d && (e.preventDefault(), _(!0))
                },
                disabled: i,
                "aria-label": d ? g.formatMessage(U.events_deck_modal_next_aria_label) : g.formatMessage(U.events_deck_next_aria_label)
              })]
            }), (0, r.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlefb0b7933375b44858b7e92cdea86ee81",
              type: "button",
              onClick: c,
              ref: p,
              onKeyDown: e => {
                "Tab" === e.key && !e.shiftKey && d && (e.preventDefault(), _(!0))
              },
              "aria-label": g.formatMessage(U.events_deck_modal_close_label),
              "aria-hidden": !d,
              tabIndex: d ? 0 : -1
            })]
          })
        };
      (0, B.withIntl)(e => {
        const {
          setBodyIsLocked: a
        } = (0, l.useBodyScrollable)("EventsDeck"), {
          title: t
        } = e, {
          track: i
        } = (0, O.useGtmTrack)(), [c, d] = (0, s.useState)(!1), m = (() => {
          const {
            data: e
          } = (0, l.useQuery)(je.TinaModulesList, {
            variables: {
              type: "gtao-event-card",
              orderBy: "priority",
              orderDirection: "desc"
            }
          }), a = e?.tinaModulesList?.results, t = n().map(a, "id");
          return (0, ye.X)({
            ids: t
          })
        })(), [u, _] = (0, s.useState)([]), [g, b] = (0, s.useState)(null), [f, p] = (0, s.useState)(0), [k, v] = (0, s.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [h, w] = (0, s.useState)(!1), x = (0, s.createRef)(), [y, j] = (0, s.useState)(null), N = (0, s.createRef)(), S = (0, s.createRef)(), [T, C] = (0, s.useState)([]), [z, I] = (0, s.useState)(!0), [A, E] = (0, s.useState)(!1), [P, L] = (0, s.useState)(!1), [M, $] = (0, s.useState)([]), [B, G] = (0, s.useState)(404), [H, U] = (0, s.useState)(808), [q, W] = (0, s.useState)(672), [K, X] = (0, s.useState)(336), [J, Y] = (0, s.useState)(0), [Z, Q] = (0, s.useState)(0), [ee, ae] = (0, s.useState)(0), [te, re] = (0, s.useState)(0), [se, ie] = (0, s.useState)(0), [ne, oe] = (0, s.useState)(!1), ce = !!(0, l.usePrevious)(ne), [de, le] = (0, s.useState)(window.innerWidth), [me, ue] = (0, s.useState)(0), [_e, ge] = (0, s.useState)(0), [be, fe] = (0, s.useState)(0), [ve, he] = (0, s.useState)(0), [we, Te] = (0, s.useState)(0), [Ce, Ie] = (0, s.useState)(0), [Ae, Pe] = (0, s.useState)(0), [Le, Me] = (0, s.useState)(0), [Ve, De] = (0, s.useState)(-1e3), [Fe, Re] = (0, s.useState)(0), [$e, Be] = (0, s.useState)(50), [Oe, Ge] = (0, s.useState)(0), [He, Ue] = (0, s.useState)(!1), [qe, We] = (0, s.useState)(768), [Ke, Xe] = (0, s.useState)(!1), [Je, Ye] = (0, s.useState)(!1), [Ze, Qe] = (0, s.useState)(!1), [ea, aa] = (0, s.useState)(!1), [ta, ra] = (0, s.useState)(!1), [sa, ia] = (0, s.useState)(1e3), [na, oa] = (0, s.useState)(1.2), [ca, da] = (0, s.useState)(0), [la, ma] = (0, s.useState)(!1), [ua, _a] = (0, s.useState)(!1), [ga, ba] = (0, s.useState)(!0), [fa, pa] = (0, s.useState)(!1), [ka, va] = (0, s.useState)(!1), [ha, wa] = (0, s.useState)(null), [xa, ya] = (0, s.useState)(100), [ja, Na] = (0, s.useState)(!1), [Sa, Ta] = (0, s.useState)({}), [Ca, za] = (0, s.useState)(""), [Ia, Aa] = (0, s.useState)(0), [Ea, Pa] = (0, s.useState)(!1), [La, Ma] = (0, s.useState)(!1), [Va, Da] = (0, s.useState)(0), [Fa, Ra] = (0, s.useState)(0), [$a, Ba] = (0, s.useState)(100), [Oa, Ga] = (0, s.useState)(!1), [Ha, Ua] = (0, s.useState)(!1), [qa, Wa] = (0, s.useState)(!1), [Ka, Xa] = (0, s.useState)(!1), [Ja, Ya] = (0, s.useState)("forward"), Za = () => de * me + $e, Qa = () => !1 === He ? na : 1, et = e => e === Ae - 1 || e === Ae + 1, at = () => -1 * Ce - ve, tt = (e, a = !0) => {
          if (!0 === He) return 0;
          const t = e.itemNumber % 2 == 0,
            r = B * na;
          if (!0 === t && 0 !== e.itemNumber) {
            const t = Ne(e?.element?.current, "top");
            let s = t - ee;
            return !1 === a && (s -= t), -1 * (.5 * r + s) + ca
          }
          return ee - .5 * r + ca
        }, rt = (e, a, t = !0) => {
          let r = at();
          !1 === t && (r = 0);
          const s = de * me,
            i = !1 === He ? B * Qa() : s;
          return e.inModalMode && He ? -1 === a ? Za() * (Ae - e.itemNumber) * -1 - e.styles.left : Za() * (e.itemNumber - Ae) - e.styles.left : -1 === a ? -1 * e.styles.left - i - $e + r : s - e.styles.left + $e + r
        }, st = (e, a, t) => {
          -1 === a && (E(!1), I(!0)), E(!1 === t && e >= a || !0 === t && e + 1 === a), I(e <= 0)
        }, it = (e, a = !1) => {
          if (ka || fa) return;
          if (va(!0), ne) return void((e = !1) => {
            if (Ae + 1 >= u.length) return;
            const a = T[Ae + 1]?.tina?.payload?.meta?.title ?? `card-${Ae+1}`;
            i({
              event: e ? "modal_swipe" : "modal_next",
              card_name: a,
              card_id: Ae + 1,
              position: Ae + 1,
              view_name: `${T[Ae+1].source_content_id}/${a}`,
              source_content_id: T[Ae + 1].source_content_id,
              source_content_name: T[Ae + 1].source_content_name
            }), st(Ae + 1, u.length, !0), He ? He && C(T.map(e => {
              e.itemNumber === Ae - 1 ? e.upNext = !1 : e.itemNumber === Ae + 2 ? e.upNext = !0 : e.itemNumber === Ae + 1 ? e.active = !0 : e.itemNumber === Ae && (e.upNext = !0, e.active = !1);
              const a = e.styles.transform.replace("translate3d(", "").split(",");
              let t = Number(a[0].replace("px", ""));
              t -= Za();
              const r = `translate3d(${t}px,${a[1]},${a[2]}`;
              return e.styles = {
                ...e.styles,
                transform: r
              }, e
            })) : C(T.map(e => (e.itemNumber === Ae - 1 ? e.upNext = !1 : e.itemNumber === Ae + 2 ? e.upNext = !0 : e.itemNumber === Ae + 1 ? (e.active = !0, e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${at()}px, ${ca}px, 0) scale(1)`
            }) : e.itemNumber === Ae && (e.upNext = !0, e.active = !1, e.styles = {
              ...e.styles,
              transform: `translate3d(${rt(e,-1)}px, ${tt(e)}px, 0) scale(${Qa()})`
            }), e))), Pe(Ae + 1)
          })(a);
          const r = we + 1;
          if (!(r > se))
            if (i({
                event: a ? "carousel_swipe" : "carousel_next",
                element_placement: t?.toLowerCase() ?? ""
              }), st(r, se, !1), He) {
              let e = r * K * -1;
              e < Ve && (e = Ve, E(!0), I(!1), Te(se)), Te(r), C(T.map(a => (a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, 0, 0)`
              }, a)))
            } else {
              let e = Ce - Z;
              Te(r), e < Ve && (e = Ve, E(!0), I(!1), Te(se)), Ie(e)
            }
        }, nt = (e, a = !1) => {
          if (ka || fa) return;
          if (va(!0), !0 === ne) return void((e = !1) => {
            if (ka) return;
            if (Ae - 1 < 0) return;
            const a = T[Ae - 1]?.tina?.payload?.meta?.title ?? "card-" + (Ae - 1);
            i({
              event: e ? "modal_swipe" : "modal_previous",
              element_placement: t?.toLowerCase(),
              card_name: a,
              card_id: Ae - 1,
              position: Ae - 1,
              view_name: `${T[Ae-1].source_content_id}/${a}`,
              source_content_id: T[Ae - 1].source_content_id,
              source_content_name: T[Ae - 1].source_content_name
            }), st(Ae - 1, u.length, !0), He || C(T.map(e => (e.itemNumber === Ae + 1 ? e.upNext = !1 : e.itemNumber === Ae - 2 ? e.upNext = !0 : e.itemNumber === Ae ? (e.upNext = !0, e.active = !1, e.styles = {
              ...e.styles,
              transform: `translate3d(${rt(e,1)}px, ${tt(e)}px, 0) scale(${Qa()})`
            }) : e.itemNumber === Ae - 1 && (e.active = !0, e.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${at()}px, ${ca}px, 0) scale(1)`
            }), e))), He && C(T.map(e => {
              e.itemNumber === Ae + 1 ? e.upNext = !1 : e.itemNumber === Ae - 2 ? e.upNext = !0 : e.itemNumber === Ae ? (e.upNext = !0, e.active = !1) : e.itemNumber === Ae - 1 && (e.active = !0);
              const a = e.styles.transform.replace("translate3d(", "").split(",");
              let t = Number(a[0].replace("px", ""));
              t += Za();
              const r = `translate3d(${t}px,${a[1]},${a[2]}`;
              return e.styles = {
                ...e.styles,
                transform: r
              }, e
            })), Pe(Ae - 1)
          })(a);
          const r = we - 1;
          if (!(r < 0))
            if (i({
                event: a ? "carousel_swipe" : "carousel_previous",
                element_placement: t?.toLowerCase()
              }), st(r, se, !1), He) {
              let e = r * K * -1;
              e > 0 && (e = 0, I(!0), E(!1), Te(0)), Te(r), C(T.map(a => (a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, 0, 0)`
              }, a)))
            } else {
              let e = Ce + Z;
              Te(r), (e > 0 || 0 === e || -1 * e < H) && (e = 0, I(!0), E(!1), Te(0)), Ie(e)
            }
        }, ot = e => {
          if (Ea || ne || He) return;
          const a = Se(e);
          Aa(a.x)
        }, ct = e => {
          if (Ea || 0 === Ia || ne || He) return;
          const a = Se(e),
            t = a.x > Ia ? 1 : -1;
          let r = Math.abs(Ia - a.x) * t;
          (0 === we && 1 === t || we === se && -1 === t) && (r *= .35), Ma(!0), Da(r)
        }, dt = e => {
          if (Ea || ne || He) return;
          const a = Se(e),
            t = a.x > Ia ? 1 : -1,
            r = Math.abs(Ia - a.x);
          za(r > $a ? t > 0 ? "prev" : "next" : ""), lt()
        }, lt = () => {
          Pa(!0), Aa(0), Da(0), Ma(!1)
        }, mt = e => {
          La && (dt(e), Ma(!1))
        }, ut = (e, a, t = "") => e.map((e, r) => {
          let s = r * K,
            i = r;
          !1 === He && (i = Math.ceil(.5 * r) + 1, r > 0 && (s = 2 === i ? q : q + K * (i - 2)));
          const n = M[r];
          return n?.current && (n.current.scrollTop = 0), {
            ...e,
            mobileMode: He,
            itemNumber: r,
            columnNumber: i,
            inModalMode: !1,
            upNext: !0,
            active: !1,
            openModalMode: bt,
            element: n,
            transitionStyle: a,
            styles: {
              left: s,
              transform: "" === t ? null : t,
              height: null,
              top: null
            },
            trapFocus: ft
          }
        }), _t = e => {
          if (He) return;
          C(ut(u, "cardClose"));
          const a = Math.ceil((T[e].columnNumber + 1) / J) - 1;
          Te(a);
          let t = a * Z * -1;
          Oe < _e ? (t = 0, I(!0), E(!0), Te(0)) : t < Ve ? (t = Ve, I(!1), E(!0), Te(se)) : st(a, se, !1), Ie(t), Pe(0)
        }, gt = () => {
          const e = T[Ae]?.tina?.payload?.meta?.title ?? `card-${Ae}`;
          i({
            event: "modal_close",
            element_placement: t?.toLowerCase(),
            card_name: e,
            card_id: Ae,
            position: Ae,
            view_name: `${T[Ae].source_content_id}/${e}`,
            source_content_id: T[Ae].source_content_id,
            source_content_name: T[Ae].source_content_name
          });
          const a = T[Ae]?.element?.current;
          if (He) {
            let e = Ae * K * -1;
            e < Ve && (e = Ve, E(!0), I(!1), Te(se)), Te(Ae), st(Ae, se, !1), C(ut(u, "cardClose", `translate3d(${e}px, 0, 0)`))
          } else _t(Ae);
          N.current.style.transform = "translate(0px, 0px)", N.current.style.transition = "all var(--eventDeck-transitionCardClose)", ma(!1), aa(!1), oe(!1), Ye(!1), Xe(!1), ra(!1), setTimeout(() => {
            Qe(!0), a.focus()
          }, sa)
        };
        (0, s.useEffect)(() => {
          !1 !== Ze && (Qe(!1), ma(!1), y.style.zIndex = null, C(T.map(e => (e.transitionStyle = "", e))))
        }, [Ze]);
        const bt = e => {
            setTimeout(() => {
              Ta(e), Na(!0)
            }, 1)
          },
          ft = e => {
            Xa(!0), Ya(e), setTimeout(() => {
              Xa(!1)
            }, 1e3)
          };
        (0, s.useEffect)(() => {
          qa && (Wa(!1), T[Ae]?.element?.current?.focus())
        }, [qa]), (0, s.useEffect)(() => {
          if (!ja) return;
          if (Na(!1), ka) return;
          Pe(Number(Sa?.target?.dataset?.itemPosition)), Ye(!0), pa(!0), ga && ba(!1);
          const e = T[Sa?.target?.dataset?.itemPosition].source_content_id,
            a = T[Sa?.target?.dataset?.itemPosition].source_content_name,
            r = T[Sa?.target?.dataset?.itemPosition]?.tina?.payload?.meta?.title;
          i({
            event: "card_click",
            element_placement: t?.toLowerCase(),
            card_name: r ?? `card-${Ae}`,
            card_id: Sa?.target?.dataset?.itemPosition,
            position: Sa?.target?.dataset?.itemPosition,
            view_name: `${e}/${r}`,
            source_content_id: e,
            source_content_name: a
          })
        }, [ja]), (0, s.useEffect)(() => {
          if (!Je || ne) return;
          Ye(!1);
          const e = (() => {
            const e = y?.getBoundingClientRect().top;
            return da(-1 * (e - f)), -1 * (e - 140)
          })();
          He && C(T.map(e => {
            const a = e.itemNumber > Ae + 3 || e.itemNumber < Ae - 3;
            return e.styles = {
              ...e.styles,
              display: a ? "none" : null,
              transition: a ? "none" : null
            }, e
          })), y.style.zIndex = "var(--eventDeck-zIndexOverlay)", ma(!0), N.current && (N.current.style.transition = "all var(--eventDeck-transitionCardOpen)", N.current.style.transform = `translate(${-1*ve}px, ${e}px)`), aa(!0), setTimeout(() => {
            Xe(!0)
          }, 1)
        }, [Je]);
        const pt = () => {
          C(T.map((e, a) => {
            e.active = a === Ae, e.inModalMode = !0, e.transitionStyle = "cardOpen", He && (e.upNext = et(e.itemNumber));
            const t = !He;
            let r = 0;
            if (He) {
              const e = Le + 5 * f;
              r = window.innerHeight - e
            }
            return e.itemNumber < Ae ? e.styles = {
              ...e.styles,
              height: He ? `${r}px` : null,
              transform: `translate3d(${rt(e,-1,t)}px, ${ca}px, 0) scale(${Qa()})`
            } : e.itemNumber > Ae ? e.styles = {
              ...e.styles,
              height: He ? `${r}px` : null,
              transform: `translate3d(${rt(e,1,t)}px, ${ca}px, 0) scale(1)`
            } : e.itemNumber === Ae && (e.styles = He ? {
              ...e.styles,
              height: `${r}px`,
              transform: `translate3d(${-1*e.styles.left}px, ${ca}px, 0) scale(1)`
            } : {
              left: 0,
              top: 0,
              transform: `translate3d(${at()}px, ${ca}px, 0) scale(1)`
            }), e
          }))
        };
        (0, s.useEffect)(() => {
          !1 !== Ke && !0 !== ne && (oe(!0), Xe(!1), st(Ae, T.length, !0), N.current && (N.current.style.transition = "all var(--eventDeck-transitionCardOpen)", N.current.style.transform = `translate(${-1*ve}px, ${ca}px)`), pt(), He ? (Ie(0), pa(!1), _a(!0)) : ra(!0))
        }, [Ke]), (0, s.useEffect)(() => {
          ua && (_a(!1), C(T.map(e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e))))
        }, [ua]);
        const kt = (e = !1) => {
          C(T.map(a => {
            if (a.upNext = et(a.itemNumber), a.itemNumber !== Ae) {
              let e = rt(a, 1);
              a.itemNumber < Ae && (e = rt(a, -1)), a.styles = {
                ...a.styles,
                transform: `translate3d(${e}px, ${tt(a)}px, 0) scale(${Qa()})`
              }
            } else a.itemNumber === Ae && !He && e && (a.styles = {
              left: 0,
              top: 0,
              transform: `translate3d(${at()}px, ${ca}px, 0) scale(1)`
            });
            return a
          }))
        };
        (0, s.useEffect)(() => {
          !1 !== ta && !0 !== He && (ra(!1), setTimeout(() => {
            kt(), pa(!1)
          }, 1))
        }, [ta]), (0, s.useEffect)(() => {
          C(ut(u, ""))
        }, [q, K, u]), (0, s.useEffect)(() => {
          const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
          Ga(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
        }, []), (0, s.useEffect)(() => {
          const e = ce !== ne,
            t = window.document.body.style.overflowY;
          return ne ? (e && (window.document.body.style.overflowY = "hidden", a(!0)), Oa && Ua(!0)) : La || ne || (e && (window.document.body.style.overflowY = t, a(!1)), Oa && Ha && Ua(!1)), () => {
            window.document.body.style.overflowY = t
          }
        }, [ne, La]), (0, s.useEffect)(() => {
          if (!ka) return;
          clearTimeout(ha);
          const e = setTimeout(() => {
            va(!1)
          }, xa);
          wa(e)
        }, [ka]), (0, s.useEffect)(() => {
          h && setTimeout(() => {
            w(!1)
          }, 3e3)
        }, [h]), (0, s.useEffect)(() => {
          w(!0), Ie(0), Te(0);
          let e = Math.ceil(Math.ceil(Oe / K) / J);
          He && (e = T.length - 1), e < 0 && (e = 1), st(0, e, !1), ne && gt()
        }, [He]), (0, s.useEffect)(() => {
          N.current && !ne && (N.current.style.transform = "")
        }, [N, He, ne]), (0, s.useEffect)(() => {
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
          e.length > 10 && (e.length = 10), _(e)
        }, [m]), (0, s.useEffect)(() => {
          $(u.map(() => (0, s.createRef)()))
        }, [u]), (0, s.useEffect)(() => {
          const e = e => {
            const {
              key: a
            } = e;
            "ArrowLeft" === a ? nt(0, !1) : "ArrowRight" === a ? it(0, !1) : "Escape" === a && ne && gt()
          };
          return document.addEventListener("keydown", e), () => {
            document.removeEventListener("keydown", e)
          }
        }, [ka, fa, ne, N]), (0, s.useEffect)(() => {
          if (N.current) {
            let e = N?.current?.clientHeight;
            e += Ne(N?.current, "margin-top"), e += Ne(N?.current, "margin-bottom"), Me(e)
          }
        }, [N, S]), (0, s.useEffect)(() => {
          ne && (() => {
            const e = y?.getBoundingClientRect().top,
              a = -1 * (e - f);
            if (C(T.map(e => {
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
              const a = -1 * (e - f);
              N.current.style.transform = `translate(${-1*ve}px, ${a}px)`
            }
          })()
        }, [He, ne, ca]), (0, s.useEffect)(() => {
          ne || (Oe < me * de && 0 === we ? (Ie(0), E(!0), I(!0)) : Ce < Ve ? (E(!0), I(!1), Te(se), Ie(Ve)) : Ce < 0 && (E(!1), Te(se - 1)), Oe > me * de && A && E(!1))
        }, [Ve]), (0, s.useEffect)(() => {
          if (x.current) {
            j(x.current);
            const e = Ne(document.documentElement, "--root-font-size"),
              a = Ne(x.current, "--eventDeck-modalGutters") * e,
              t = Ne(x.current, "--eventDeck-collapsedMaxWidth");
            fe(t);
            let r = de - 2 * a;
            r > t && (r = t), ge(r), ue(r / de);
            const s = 2 * a + r;
            let i = 0;
            s < de && (i = .5 * (de - s)), he(i);
            let n = Ne(x.current, "--eventDeck-modalBottomGutter");
            n *= e;
            const o = window.innerHeight - (Le + n);
            ae(.5 * r < o ? r / 4 : .5 * o);
            const c = Ne(x.current, "--eventDeck-mobileBreakpoint");
            We(c);
            let d = Ne(x.current, "--eventDeck-itemSize");
            d *= e, G(d);
            let l = Ne(x.current, "--eventDeck-modalGutterGap");
            l *= e, Be(l);
            let m = Ne(x.current, "--eventDeck-insideMargin");
            m *= e;
            const _ = !1 === He ? 2 * d + m : d + m;
            U(_), W(_ + m);
            const f = d + m;
            X(f);
            let k = Math.ceil(.5 * (u.length - 1)) * f + _;
            He && (k = u.length * f), Ge(k), 0 !== Oe && De(-1 * Oe + r);
            let v = Math.ceil(Math.ceil(k / f) / J);
            (He || ne) && (v = T.length - 1), ie(v);
            const h = Ne(x.current, "--eventDeck-itemScaleUpAmount");
            oa(h), ia(Ne(x.current, "--eventDeck-cardCloseTransitionDuration")), p(Ne(x.current, "--eventDeck-itemImageTitleMargins") * e), null !== g && e !== g && (b(e), ne && kt()), null === g && b(e)
          }
        }, [x, u]), (0, s.useEffect)(() => {
          if (ne && !He) {
            kt();
            const e = y?.getBoundingClientRect().top,
              a = -1 * (e - f);
            a !== ca && da(a)
          }
        }, [k]), (0, s.useEffect)(() => {
          L(!(!z || !A || ne))
        }, [z, A]), (0, s.useEffect)(() => {
          const e = pe()(e => {
            le(e), Ue(e < qe);
            const a = (1 - me) / 2;
            Re(e * a);
            const t = Math.floor(_e / K);
            Y(t);
            let r = t * K;
            r > be && (r = be), Q(r), re(e - e * a);
            const s = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
            if (s !== k && v(s), ne && s === k && !h) {
              const e = y?.getBoundingClientRect().top,
                a = -1 * (e - f);
              a !== ca && da(a)
            }
          }, 300);
          return window.addEventListener("resize", () => {
            e(window.innerWidth)
          }), window.addEventListener("scroll", () => {
            ne && He && e(window.innerWidth)
          }), e(window.innerWidth), () => {
            window.removeEventListener("resize", () => {
              e(window.innerWidth)
            })
          }
        }, [K, me, ne, He]), (0, s.useEffect)(() => {
          !1 !== ne && !0 !== h && (He ? pt() : kt(!0))
        }, [te, Z, $e, B, de, Fe, ee, ca]), (0, s.useEffect)(() => {
          const e = () => {
            if (x.current && ga) {
              const e = x.current.getBoundingClientRect(),
                a = .2 * window.innerHeight;
              window.innerHeight - e.top >= a && ba(!1)
            }
          };
          return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
        }, [x]);
        const vt = (0, s.useCallback)(() => {
          if (null !== x.current && !c) {
            const {
              top: a
            } = x?.current?.getBoundingClientRect() || 0;
            a <= .6 * window.innerHeight && (i({
              event: "page_section_impression",
              element_placement: e?._memoq?.title?.toLowerCase()
            }), d(!0))
          }
        }, [x]);
        (0, s.useEffect)(() => (window.addEventListener("scroll", vt), () => {
          window.removeEventListener("scroll", vt)
        }), [vt, x]), (0, s.useEffect)(() => {
          "next" === Ca ? (it(0, !0), za("")) : "prev" === Ca && (nt(0, !0), za(""))
        }, [Ca]), (0, s.useEffect)(() => {
          x.current && x.current.addEventListener("mouseleave", () => {
            La && lt()
          })
        }, [x, La]), (0, s.useEffect)(() => (document.body.addEventListener("mouseleave", mt), () => {
          document.body.removeEventListener("mouseleave", mt)
        }), [La]), (0, s.useEffect)(() => {
          Ea && setTimeout(() => {
            Pa(!1), Aa(0)
          }, xa)
        }, [Ea]), (0, s.useEffect)(() => {
          Ba(He ? 20 : 100)
        }, [He]), (0, s.useEffect)(() => {
          ya(ne ? 500 : 100)
        }, [ne]);
        const ht = e => {
            e.currentTarget !== e.target || ne || _t(e.target.dataset.itemPosition)
          },
          wt = (0, o.useTinaComponents)(),
          xt = (0, s.useMemo)(() => ({
            ...wt,
            CardWithImageGallery: xe,
            HTMLElement: V.A,
            ImageWithBadge: D.A,
            Carousel: F.A,
            GroupOfItems: R.default,
            UnorderedList: ke.A
          }), [wt]),
          yt = (0, s.useMemo)(() => T.map(e => (0, s.createElement)(ze, {
            ...e,
            refDeck: x,
            key: e?.id ?? e?.sync_hash,
            components: xt,
            prevPage: nt,
            nextPage: it,
            onFocus: ht,
            loadCssRawValue: Ne,
            selectedItemNumber: Ae,
            carouselTitle: t,
            sharedDraggingDelta: Fa,
            setSharedDraggingDelta: Ra
          })), [T, x, xt, nt, it, Ae]);
        return !yt?.length || yt.length <= 0 ? null : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleb3206f796ddd61f3b6d1974ea73a4f22",
            "data-modal-mode": ea,
            "aria-hidden": "true"
          }), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee623ea950c02afbb9d28949ca4701ca4",
            "data-modal-mode": ne,
            "data-faded": ga,
            ref: x,
            onTouchStart: ot,
            onTouchMove: ct,
            onTouchEnd: dt,
            onMouseDown: ot,
            onMouseMove: ct,
            onMouseUp: dt,
            tabIndex: -1,
            role: "presentation",
            children: [(0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleb8d0a147dd4f1835ba5495bac02f4c11",
              "aria-hidden": "true"
            }), (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea758545d118b90def20e860fe541c26e",
              "data-modal-mode": ne,
              ref: N,
              "data-animating": la,
              children: [(0, r.jsx)("h2", {
                className: "rockstargames-modules-core-newswire-articlebe12152c36226103d53925a82ba66452",
                children: t
              }), (0, r.jsx)(Ee, {
                prevPage: nt,
                prevBtnDisabled: z,
                nextPage: it,
                nextBtnDisabled: A,
                selectedItemNumber: Ae,
                itemsData: u,
                closeModalMode: gt,
                inModalMode: ne,
                controlsHidden: P,
                focusTrapControl: Ka,
                setTriggerFocusCard: Wa,
                focusTrapDirection: Ja
              }), (0, r.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec4f4d692febb9861a621596f22e32d93",
                id: "eventsDeck-content",
                role: "region",
                "aria-live": "polite",
                children: `${Ae+1}/${u.length} ${T[Ae]?.tina?.payload?.meta?.title}`
              })]
            }), (0, r.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlef369e1390b3aa251df43bea9c55634f2",
              "data-modal-mode": ne,
              "data-is-dragging": La,
              style: {
                transform: `translate3d(${Ce+Va}px, 0, 0)`,
                width: `${Oe}px`
              },
              ref: S,
              children: yt
            })]
          })]
        })
      }, q);
      const Pe = {
          content: "rockstargames-modules-core-newswire-articlec65ddebc8ee2173143d87e1079f2455a",
          customModalContent: "rockstargames-modules-core-newswire-articlefc96cdfdaeb2ad81b1b409fcb233657e",
          pillBtn: "rockstargames-modules-core-newswire-articleddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-modules-core-newswire-articleb4fbb4006fc27b899dac5e522ef574e3"
        },
        {
          variants: Le
        } = c.Animations;
      t(89230), t(20837), t(46209), t(60212), t(29625);
      const {
        variants: Me
      } = c.Animations;
      var Ve = t(3514);
      var De = t(42832),
        Fe = t(67288);
      const {
        Gen9CoreCarousel: Re,
        framer: $e,
        useTinaModuleFetchByIds: Be,
        withSimpleErrorBoundary: Oe
      } = De, Ge = {
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
          images: d = [],
          deckProps: l = {},
          to: m = null,
          tina: u = {},
          position: _ = 0,
          sectionTitle: g = "",
          theme: b,
          pricingOptions: f,
          cardIds: p,
          platformOptions: k = null
        }) => {
          const v = (0, o.useTinaPayload)(),
            h = u?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [w, x] = (0, s.useState)(l?.size ?? i),
            [y, j] = (0, s.useState)(0),
            N = void 0 !== f?.hasPricingOptions || void 0 !== k?.hasPlatformOptions;
          return (0, s.useEffect)(() => {
            x(l?.size ?? i)
          }, [l?.size, i]), (0, r.jsx)(X, {
            id: e,
            title: a,
            size: w,
            expandedType: n,
            images: d,
            deckProps: l,
            prod: h,
            payload: {
              content: t,
              meta: {}
            },
            variants: Le.plainCard,
            textOverlayProps: c,
            modalProps: {
              className: Pe.customModal,
              contentClassName: Pe.customModalContent
            },
            expandedCardContents: (0, r.jsx)(le, {
              images: d,
              prod: h,
              expandedView: !0
            }),
            position: _,
            sectionTitle: g,
            theme: b,
            cardIds: p,
            pricingOptions: f,
            platformOptions: k,
            pricingContainerHeight: y,
            isProductCard: N,
            children: (0, r.jsx)(ae, {
              expandedType: n,
              to: m,
              sectionTitle: g,
              id: e,
              cardTitle: a,
              position: _,
              children: (0, r.jsx)("div", {
                className: Pe.content,
                "data-product": N,
                children: (0, r.jsx)(A, {
                  title: a,
                  size: w,
                  textOverlayProps: c,
                  pricingOptions: f,
                  platformOptions: k,
                  setPricingContainerHeight: j,
                  children: (0, r.jsx)(le, {
                    images: d,
                    prod: h
                  })
                })
              })
            })
          })
        },
        CardWithImageGallery: xe,
        TextCard: ({
          title: e,
          content: a,
          size: t = "md",
          badgeText: s
        }) => {
          const i = {
            ...(0, o.useTinaComponents)(),
            HTMLElement: V.A,
            UnorderedList: ke.A,
            ListItem: Ve.A
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
        ...De
      }, He = $e.withFadeIn(Oe(({
        cards: e = [],
        size: a,
        name: t,
        title: i,
        description: c,
        disclaimer: d,
        customSlidesPerView: l = null,
        theme: m = "none",
        cardSizeBreakpoints: u = {},
        customAspectRatio: _ = "3/1",
        titleBadge: g = null,
        id: b = ""
      }) => {
        const f = (0, s.useRef)(null),
          p = n().map(e, "id"),
          k = Be({
            ids: p
          }),
          [v, h] = (0, s.useState)(l),
          [w] = (0, $.useSearchParams)(),
          [x, y] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          if ("fob" === a) {
            const e = w.get("section");
            if (e && "games" === e && !x && (y(!0), f.current)) {
              const e = 100;
              window.scrollTo(0, f.current.offsetTop - e)
            }
          }
        }, []), (0, s.useEffect)(() => {
          if (!f.current) return;
          const e = () => {
            const e = l || window.getComputedStyle(f.current).getPropertyValue("--slides-per-view");
            h(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        });
        const j = (0, s.useMemo)(() => {
          let e = 0;
          if (!k) return null;
          let t = "blank",
            s = !1;
          return k.forEach(e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (s = e.tina.payload.content[0].excludeFromModal))
          }), k.reduce((c, d) => {
            if (d) {
              const {
                id: l,
                tina: u
              } = d, _ = n().clone(u);
              n().set(_, "payload.meta.id", l);
              const g = p.filter(e => e !== t || e === t && !s);
              c.push((0, r.jsx)(o.TinaParser, {
                components: Ge,
                tina: _,
                componentProps: {
                  deckProps: {
                    size: a
                  },
                  tina: _,
                  id: l,
                  position: e,
                  sectionTitle: i,
                  theme: m,
                  cardIds: g
                }
              }, l)), e += 1
            }
            return c
          }, [])
        }, [k, a]);
        return (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlecf8eaaa96e41e0c9b5a5a1745ded9986",
          "data-theme": m,
          ref: f,
          id: b,
          children: [(0, r.jsx)(Re, {
            description: c,
            size: a,
            cardSizeBreakpoints: u,
            slideChildren: j,
            title: i,
            name: t,
            customSlidesPerView: v,
            customAspectRatio: _,
            titleBadge: g,
            theme: m
          }), d && (0, r.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled6d0f9d842469dec608825829148dff6",
            children: (0, r.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlee22c0580e1e1d2471b4ca2e60e6b900f",
              children: (0, r.jsx)(Fe.A, {
                html: d
              })
            })
          })]
        })
      }))
    },
    76808(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        Jsx0: () => i,
        Jsx1: () => A,
        Jsx2: () => L
      });
      var r = t(42295),
        s = t(23395);
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
      var n = t(71127),
        o = t(79518),
        c = t(13331),
        d = t(52224),
        l = t(24769),
        m = t(10632),
        u = t(14200),
        _ = t(29625),
        g = t(89230),
        b = t(1057),
        f = t(20837),
        p = t(62312),
        k = t(4407),
        v = t(15386),
        h = t(51562),
        w = t(4595),
        x = t(99057),
        y = t(61784),
        j = t(94322),
        N = t(79704),
        S = t(93935),
        T = t(72527),
        C = t(64064),
        z = t.n(C),
        I = t(56100);
      const A = (0, c.withTranslations)(({
        article: e,
        children: a,
        t
      }) => {
        const i = (0, c.useLocale)(),
          C = {
            A: e => (0, r.jsx)(u.A, {
              ...e
            }),
            AnchorLink: e => (0, r.jsx)(I.AnchorLink, {
              ...e
            }),
            ArticleTag: e => (0, r.jsx)(s.A, {
              ...e
            }),
            AudioPlayer: e => (0, r.jsx)(d.A, {
              ...e
            }),
            Button: e => (0, r.jsx)(_.A, {
              ...e
            }),
            Carousel: e => (0, r.jsx)(l.A, {
              ...e
            }),
            Cta: e => (0, r.jsx)(g.A, {
              ...e
            }),
            Discounts: e => (0, r.jsx)(I.Discounts, {
              ...e
            }),
            Donate: e => (0, r.jsx)(I.Donate, {
              ...e
            }),
            FadeInContent: e => (0, r.jsx)(b.A, {
              ...e
            }),
            FontClip: e => (0, r.jsx)(I.FontClip, {
              ...e
            }),
            GamingRewards: e => (0, r.jsx)(I.GamingRewards, {
              ...e
            }),
            Gif: e => (0, r.jsx)(z(), {
              ...e
            }),
            Grid: e => (0, r.jsx)(f.A, {
              ...e
            }),
            GroupOfItems: e => (0, r.jsx)(T.default, {
              ...e
            }),
            HeroImage: e => (0, r.jsx)(I.HeroImage, {
              ...e
            }),
            HTMLElement: e => (0, r.jsx)(p.A, {
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
            ResponsiveFlexItem: e => (0, r.jsx)(x.A, {
              ...e
            }),
            ResponsiveSection: e => (0, r.jsx)(y.A, {
              ...e
            }),
            ResponsiveImg: e => (0, r.jsx)(j.A, {
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
          A = e.posts_jsx.variables_us_defaulted,
          [E] = (0, n.useState)((0, r.jsx)(o.default, {
            renderInWrapper: !1,
            bindings: {
              getArray: (e, a) => e[a],
              renderHtml: e => (0, r.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: e
                }
              }, E),
              article: e,
              locale: i,
              t,
              variables: A
            },
            components: C,
            jsx: e.posts_jsx.markup,
            onError: e => {
              console.error(e)
            }
          }));
        return (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlece2d8080309005e155e5422fd38faa5d",
          children: [E, a]
        })
      });
      var E = t(17301),
        P = t(49052);
      const L = ({
        children: e,
        payload: a,
        variablesKeys: t
      }) => (0, r.jsxs)("div", {
        className: "rockstargames-modules-core-newswire-articledad06d3570a3cd17332c2bfb19d8f611",
        children: [(0, r.jsx)(E.TinaParser, {
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
    56100(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        AnchorLink: () => n,
        Discounts: () => S,
        Donate: () => I,
        Engagement: () => r.default,
        EventInfo: () => U,
        FeaturedEventInfo: () => q,
        FontClip: () => K,
        GamingRewards: () => ae,
        Gen9List: () => ie,
        HeroImage: () => ne.A,
        NewswireFull: () => ce,
        NewswireTitle: () => O,
        PctBar: () => de,
        Podium: () => ue
      });
      var r = t(59139),
        s = t(42295),
        i = t(71127);
      const n = ({
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
      var o = t(72527);
      const c = ({
        items: e,
        columns: a = {},
        noCarousel: t = !1,
        noInfiniteScroll: r = !1,
        ...i
      }) => {
        const n = i?.style ?? {};
        return t && (a?.mobile && (n["--mobile-cols"] = a.mobile), a?.desktop && (n["--desktop-cols"] = a.desktop)), (0, s.jsxs)(s.Fragment, {
          children: [i.title && (0, s.jsx)("p", {
            className: "rockstargames-modules-core-newswire-articlebbdcc06cced1ed19baee825aacefee0b",
            children: i.title
          }), (0, s.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleba7b5228b2134bc8563fe2a8f65ca885",
            children: [t && (0, s.jsx)(o.default, {
              style: {
                ...n,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "rockstargames-modules-core-newswire-articlea225b2127250d1b0285289115c698451",
              renderTemplate: "standard",
              items: e,
              ...i
            }), !t && (0, s.jsx)(h, {
              items: e,
              noInfiniteScroll: r,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var d = t(93935),
        l = t(24769),
        m = t(10632),
        u = t(55322);
      const _ = {
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
        b = ({
          items: e,
          noTextFit: a,
          type: t,
          carouselOnMobile: r,
          columns: n = {
            desktop: 3,
            mobile: 2
          }
        }) => {
          const [o, c] = (0, i.useState)(null), [d, b] = (0, i.useState)(3), f = (0, i.useRef)(null);
          return (0, i.useEffect)(() => {
            const a = window.getComputedStyle(f.current).getPropertyValue("--divisible-desktop"),
              t = () => {
                const e = window.innerWidth;
                b(e <= 767 ? 2 : a)
              };
            if (e?.content.length && e?.content.length >= d) {
              let {
                length: a
              } = e.content;
              const t = [];
              if (a % d !== 0) {
                let e = 0;
                do {
                  t.push((0, s.jsx)("div", {
                    className: `${_.gridItem} ${_.extraDiv}`
                  }, "limited-grid-" + e++)), a++
                } while (a % d !== 0)
              }
              c(t)
            }
            return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
          }, [d, f]), (0, s.jsxs)("div", {
            className: `${_.limitedGrid} ${r?_.carouselOnMobile:""}`,
            children: [(0, s.jsxs)("div", {
              ref: f,
              style: {
                "--divisible-desktop": n.desktop,
                "--divisible-mobile": n.mobile
              },
              className: `\n                    ${_.limitedGridContent}\n                    ${2===n.desktop?_.columnsDesktop2:""}\n                    ${3===n.desktop?_.columnsDesktop3:""}\n                    ${n.desktop>=4?_.columnsDesktop4:""}\n                    ${a?_.noTextFit:""}\n                    ${t?_[t]:""}\n                `,
              children: [(0, s.jsx)("div", {
                className: _.thirdLine
              }), e.content.map((e, t) => (0, s.jsx)("div", {
                className: _.gridItem,
                children: (0, s.jsxs)(g, {
                  to: e?.href ?? e?.to,
                  children: [!a && (0, s.jsx)(u.A, {
                    className: _.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, s.jsx)("div", {
                    className: _.imageArea,
                    children: (0, s.jsx)(m.A, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), a && (0, s.jsx)("p", {
                    children: e.title
                  })]
                })
              }, t)), o]
            }), r && (0, s.jsx)("div", {
              className: _.gridCarousel,
              children: (0, s.jsx)(l.A, {
                children: e.content.map((e, a) => (0, s.jsxs)("div", {
                  children: [(0, s.jsx)("div", {
                    className: `${_.imageArea} ${_.imageAreaBg}`,
                    children: (0, s.jsx)(m.A, {
                      className: t ? _[t] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, s.jsx)("p", {
                    className: _.carouselDesc,
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
        f = ({
          items: e = []
        }) => {
          if (!e.length) return null;
          let a = 0,
            t = 0;
          return e.map((e, r) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const a = [];
              return e.limitedList?.content && a.push((0, s.jsx)(h, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? r)), e.limitedGridList?.content && a.push((0, s.jsx)(b, {
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
              return e.discountsList?.content && t.push((0, s.jsx)(h, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? r)), e.discountsGridList?.content && t.push((0, s.jsx)(b, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? r)), e?.list && t.push((0, s.jsx)(d.A, {
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
      var p = t(26708);
      const k = {
          discountsCarousel: "rockstargames-modules-core-newswire-articlee323ee7ef1389c61bd0f7f5edf7ae87f",
          discountsCarouselItem: "rockstargames-modules-core-newswire-articledbe871f29ce887fdb3633adfa3a508e3",
          fontUpdate: "rockstargames-modules-core-newswire-articleb9e436db9c819a6291277c1c3b14a102",
          singleImage: "rockstargames-modules-core-newswire-articleef61c1eb2ac13f1f00f9fbcf97b591d9",
          wrapper: "rockstargames-modules-core-newswire-articlecf1f4a81a7b06d2f1741f014efccd835"
        },
        v = ({
          wrapper: e,
          children: a,
          length: t
        }) => t > 1 ? e(a) : a,
        h = ({
          items: e,
          noInfiniteScroll: a = !1,
          size: t = null,
          perPage: r = null,
          customSlidesPerView: n = null,
          style: o = {}
        }) => {
          const c = (0, i.useRef)(null),
            [d, u] = (0, i.useState)(null),
            [_, g] = (0, i.useState)(t);
          return (0, i.useEffect)(() => {
            !t && r && g(1 === r ? "lg" : "sm"), t || r || (g("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }, [t, r]), (0, i.useEffect)(() => {
            if (!c.current) return;
            const e = () => {
              const e = n || window.getComputedStyle(c.current).getPropertyValue("--slides-per-view");
              u(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [c, n]), e.length ? (0, s.jsx)(v, {
            length: e.length,
            wrapper: e => (0, s.jsx)("div", {
              "data-size": _,
              ref: c,
              className: k.wrapper,
              children: (0, s.jsx)(l.A, {
                className: k.discountsCarousel,
                noInfiniteScroll: a,
                style: {
                  ...o,
                  "--per-page": d,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: e.map((a, t) => (0, s.jsxs)("div", {
              className: [k.discountsCarouselItem, 1 === e.length ? k.singleImage : ""].join(" "),
              children: [(0, s.jsx)(m.A, {
                ariaLabel: a?.ariaLabel,
                image: a?.image ?? {
                  alt: a?.alt ?? "",
                  desktop: a?.img ?? null,
                  mobile: a?.imgMobile ?? null
                },
                badge: a?.badge ?? a?.image?.badge ?? a.discountTxt,
                splitter: a?.splitter ?? a?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, s.jsx)(p.A, {
                className: k.fontUpdate,
                item: a
              })]
            }, a?.key ?? t))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        };
      var w = t(20837),
        x = t(62312);
      const y = ({
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
          }, e?.key ?? a) : e?.limitedList?.content ? (0, s.jsx)(h, {
            items: e.limitedList.content,
            noInfiniteScroll: e?.noInfiniteScroll,
            perPage: e?.perPage,
            size: e?.size
          }, e?.key ?? a) : e?.discountsGridList?.content ? (0, s.jsx)(c, {
            noCarousel: !0,
            columns: e.discountsGridList?.columns,
            items: e.discountsGridList.content
          }, e?.key ?? a) : e?.content ? (0, s.jsx)(x.A, {
            ...e,
            children: e.content
          }, e?.key ?? a) : e?.list ? (0, s.jsx)(d.A, {
            ...e
          }, e?.key ?? a) : void 0)
        }) : null,
        j = {
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
              return (0, s.jsx)(y, {
                items: e,
                ...t
              });
            case "grid":
              return (0, s.jsx)(c, {
                items: e,
                ...t
              });
            default:
              return (0, s.jsx)(f, {
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
          className: j.area,
          "data-context": "discounts",
          children: (0, s.jsxs)("div", {
            className: j.discountsContent,
            children: [(0, s.jsx)(N, {
              renderTemplate: a,
              items: e,
              props: r,
              style: t
            }), (0, s.jsx)("div", {
              className: j.btmImg
            })]
          })
        });
      var T = t(48863),
        C = t.n(T);
      const z = {
          donate: "rockstargames-modules-core-newswire-articleca3a67499205086cce3ec4006dde027a",
          largePaddingSides: "rockstargames-modules-core-newswire-articlee9aa6553439a489ffff3140708eb84c9"
        },
        I = ({
          text: e
        }) => {
          const {
            sanitize: a
          } = C();
          return (0, s.jsx)("div", {
            className: [z.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: a(e)
              }
            })
          })
        };
      var A = t(10336),
        E = t.n(A),
        P = t(17301),
        L = t(1556),
        M = t(64064),
        V = t.n(M),
        D = t(31879),
        F = t.n(D),
        R = t(14200),
        $ = t(13331);
      const B = {
          breadcrumbs: "rockstargames-modules-core-newswire-articlea300b88d467c420e15084fc2eeeb1e09",
          main: "rockstargames-modules-core-newswire-articleaf5256fb296a82d00fb900a2380a5d7f",
          title: "rockstargames-modules-core-newswire-articlea82cdf4d56d4fbadd86d56caf6b7da04"
        },
        O = (0, $.withTranslations)(({
          children: e,
          intro: a,
          image: t = {},
          style: r = {},
          t: i,
          className: n = "",
          variant: o = null
        }) => {
          let c = {};
          c = {
            "--breadcrumb-separator-filter-invert": r?.toggleInvertSeparator && "#000"
          };
          const d = (0, $.useNewswirePost)(),
            l = {},
            m = l?.meta?.title ?? d?.title,
            u = l?.meta?.subtitle ?? d?.subtitle,
            _ = u ? (0, s.jsx)("h3", {
              "data-context": "newswire-subtitle",
              children: u
            }) : "",
            g = [{
              text: i("Newswire"),
              to: "/newswire"
            }],
            {
              src: b
            } = (0, P.useImageParser)(t),
            f = (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("time", {
                dateTime: d.created,
                children: d.created_formatted
              }), a ? (0, s.jsx)(p.A, {
                item: a
              }) : "", e]
            });
          d?.primary_tags?.length && g.push({
            text: d.primary_tags[0].name,
            to: `/newswire?tag_id=${d.primary_tags[0].id}`
          }), d?.secondary_tags?.length && g.push({
            text: d.secondary_tags[0].name,
            to: `/newswire?tag_id=${d.secondary_tags[0].id}`
          });
          const k = (0, s.jsx)("div", {
            className: B.breadcrumbs,
            "data-cms-breadcrumbs": !0,
            children: g.map(e => (0, s.jsx)(R.A, {
              to: e.to,
              children: e.text
            }, e.to))
          });
          return b?.desktop && (r.background = `url(${b.desktop}) center/cover no-repeat`), (0, s.jsx)("div", {
            className: [n, B.title].join(" "),
            style: {
              ...r,
              ...c
            },
            children: "separated" === o ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("header", {
                "data-context": "title",
                children: [k, (0, s.jsx)("h1", {
                  children: m
                })]
              }), (0, s.jsxs)("footer", {
                "data-context": "title",
                children: [_, f]
              })]
            }) : (0, s.jsxs)(s.Fragment, {
              children: [k, (0, s.jsxs)("div", {
                className: B.main,
                children: [(0, s.jsx)("h1", {
                  children: m
                }), _]
              }), f]
            })
          })
        }),
        G = {
          event: "rockstargames-modules-core-newswire-articled2fab08f92d966e9f62ad805f1e15542",
          eventInfo: "rockstargames-modules-core-newswire-articlee4a137d11e066c1ea5b0c733d364311f",
          featured: "rockstargames-modules-core-newswire-articlebb5a0823d43098a1cc049f2296fcf49e",
          large: "rockstargames-modules-core-newswire-articlee94ea7e671124487acc1e1a38fe28560",
          pillBtn: "rockstargames-modules-core-newswire-articlef5d4e8bec1c576430dea6b22ec107759",
          selected: "rockstargames-modules-core-newswire-articledb6bc6b6bcb510524004bd740d0e8ba9",
          videoWrapper: "rockstargames-modules-core-newswire-articledad6ecb3c2a7a4f228052b0e1bd38ed5"
        },
        H = ({
          images: e
        }) => {
          if (!e?.length) return null;
          if (1 === e.length) {
            const {
              key: a,
              ...t
            } = e[0];
            return (0, s.jsx)(m.A, {
              ...t
            })
          }
          return (0, s.jsx)(l.A, {
            items: e
          })
        },
        U = ({
          images: e,
          title: a = "",
          content: t,
          isFeatured: r = !1,
          className: n = null,
          videoInHeroProps: c,
          hideNewswireTitle: d = !1
        }) => {
          const l = (0, P.useTinaPayload)(),
            u = l?.meta?.prod ?? !1,
            _ = (0, P.useTinaComponents)();
          E().set(l, "meta.prod", u);
          let g = c?.gifVideoProps?.hasVideoInHero || !1;
          const b = c?.htmlVideoProps?.id || !1,
            f = !!c?.htmlVideoProps?.hasHtmlVideoInHero && b;
          f && g && (g = !1);
          const p = void 0 === c || !g && !f,
            k = (0, i.useMemo)(() => ({
              ..._,
              HTMLElement: x.A,
              ImageWithBadge: m.A,
              GroupOfItems: o.default
            }), [_]);
          return (0, s.jsxs)("div", {
            className: (0, L.default)(G.event, n),
            children: [g && (0, s.jsx)("div", {
              className: G.videoWrapper,
              children: (0, s.jsx)(V(), {
                hash: {
                  desktop: c?.gifVideoProps?.hash?.desktop,
                  mobile: c?.gifVideoProps?.hash?.mobile
                },
                loop: c?.gifVideoProps?.isLooping
              })
            }), f && b && (0, s.jsx)("div", {
              className: G.videoWrapper,
              children: (0, s.jsx)(F(), {
                autoplay: c?.htmlVideoProps?.autoPlay || !1,
                id: b
              })
            }), p && (0, s.jsx)(H, {
              images: e
            }), r && (0, s.jsx)(O, {}), (0, s.jsxs)("div", {
              className: G.eventInfo,
              children: [!r && !d && (0, s.jsx)("h3", {
                className: G.eventTitle,
                children: a
              }), (0, s.jsx)(P.TinaParser, {
                components: k,
                tina: {
                  payload: {
                    content: t,
                    meta: {
                      prod: u
                    }
                  }
                }
              })]
            })]
          })
        },
        q = e => (0, s.jsx)(U, {
          ...e,
          className: G.featured,
          isFeatured: !0
        }),
        W = {
          clip: "rockstargames-modules-core-newswire-articleaf597db4ae39661b43752ca8aef0ea95",
          greyTexture: "rockstargames-modules-core-newswire-articlefb39d1c9eee482e2db4e0b343e1cb979",
          redTexture: "rockstargames-modules-core-newswire-articlea1e6c3732fbb497aa657efa3ba5f7aca"
        },
        K = ({
          fontFamily: e = "inherit",
          fontBg: a,
          string: t
        }) => (0, s.jsx)("span", {
          style: {
            "--font-family-clip": e
          },
          className: [W.clip, W[a]].join(" "),
          children: t
        });
      var X = t(4407),
        J = t(15386),
        Y = t(51562),
        Z = t(82199),
        Q = t(21352);
      const ee = {
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
        ae = ({
          headline: e,
          plainImage: a,
          top: r,
          unorderedList: n,
          bottom: o,
          rewards: c = "primeGaming",
          style: l = {}
        }) => {
          const m = (0, $.useLocale)(),
            {
              track: u
            } = (0, Z.useGtmTrack)(),
            {
              ref: _,
              inView: g
            } = (0, Q.useInView)({
              threshold: .6
            }),
            [b, f] = (0, i.useState)(!1);
          return (0, i.useEffect)(() => {
            g && !b && (u({
              element_placement: "newswire-article-gaming-rewards",
              event: "page_section_impression"
            }), f(!0))
          }, [g]), "primeGaming" === c && ["ru", "kr", "ko_kr", "ru_ru"].includes(m) ? null : (0, s.jsx)("div", {
            className: ee.gamingWrapper,
            ref: _,
            children: (0, s.jsx)("div", {
              className: `${ee.gamingRewards} ${ee[c]}`,
              style: l,
              children: (0, s.jsxs)(J.A, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, s.jsxs)(Y.A, {
                  children: [e && (0, s.jsx)("h3", {
                    children: e
                  }), "psPlus" === c && (0, s.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: ee.primeGamingSocialLogo,
                    src: t(1983)
                  }), "primeGaming" === c && (0, s.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: ee.primeGamingSocialLogo,
                    src: t(29654)
                  }), "gtaPlus" === c && (0, s.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: ee.primeGamingSocialLogo,
                    src: t(68547)
                  }), r?.text && (0, s.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: r.text
                    },
                    onClick: e => {
                      e.target.closest("a") && u({
                        element_placement: "newswire-article-gaming-rewards",
                        event: "cta_other",
                        text: c
                      })
                    }
                  }), n?.list && (0, s.jsx)("div", {
                    className: ee.listArea,
                    children: (0, s.jsx)(d.A, {
                      className: "gtaPlus" === c ? ee.plus : "",
                      ...n,
                      list: n.list,
                      ...n?.attributes
                    })
                  }), o?.text && (0, s.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: o.text
                    },
                    onClick: e => {
                      e.target.closest("a") && u({
                        element_placement: "newswire-article-gaming-rewards",
                        event: "cta_other",
                        text: c
                      })
                    }
                  })]
                }), (0, s.jsx)(Y.A, {
                  className: ee.rightSide,
                  children: a?.image ? (0, s.jsx)(X.A, {
                    image: a.image
                  }) : (0, s.jsx)("div", {
                    className: ee.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var te = t(3436),
        re = t(34100),
        se = t(11015);
      const ie = ({
        backgroundImages: e,
        deckHash: a = "",
        perPage: t = null
      }) => {
        const [r, n] = (0, i.useState)(null), o = (0, P.useGetCdnSource)(e?.backgroundImg?.full_src ?? null), c = (0, P.useGetCdnSource)(e?.layeredImg?.full_src ?? null), d = (0, i.useRef)(null), {
          data: l,
          error: m
        } = (0, $.useQuery)(se.TinaModulesInfo, {
          variables: {
            ids: a
          },
          skip: !a
        });
        return (0, i.useEffect)(() => {
          if (l?.tinaModulesInfo) {
            const e = l.tinaModulesInfo[0],
              {
                id: a,
                tina: t
              } = e,
              r = E().clone(t);
            E().set(r, "payload.meta.id", a), n(r)
          }
        }, [l]), l && r ? m ? (0, s.jsx)(re.A, {
          error: m
        }) : (0, s.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea2287392a6363add6fc77a246fc467ce",
          ref: d,
          style: {
            "--background-image": `url(${o})`,
            "--layered-image": `url(${c})`,
            "--slides-per-view-desktop": t
          },
          children: (0, s.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleef8574282ec987f2460a951505ca5ef7",
            children: [c ? (0, s.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleaa9b5909de87ec85fc53e12a7f9ca2d5"
            }) : "", (0, s.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee3ff669c62cc2088728385fb58ef2969",
              children: (0, s.jsx)(P.TinaParser, {
                components: {
                  Deck: te.E$
                },
                tina: r
              })
            })]
          })
        }) : null
      };
      var ne = t(6288),
        oe = t(87608);
      const ce = ({
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
        de = ({
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
      var le = t(94322),
        me = t(61784);
      const ue = ({
        title: e,
        desc: a,
        img: t,
        imgMobile: r,
        bgColor: i,
        descPositionBottom: n,
        fontColor: o = "#fff"
      }) => (0, s.jsxs)(s.Fragment, {
        children: [n ?? (0, s.jsx)(me.A, {
          style: {
            backgroundColor: `${i}`,
            "--padding-top-bottom": "1.75rem"
          },
          className: "normalPaddingTopBottom largePaddingSides",
          children: (0, s.jsxs)(me.A, {
            className: "maxDescArea",
            style: {
              "--desc-h3-margin-bottom": "var(--h-rem-size)"
            },
            children: [(0, s.jsx)("h3", {
              style: {
                "--color-span": `${o}`
              },
              children: e
            }), (0, s.jsx)("p", {
              children: a
            })]
          })
        }), (0, s.jsxs)(me.A, {
          className: [n ?? "spacing"].join(" "),
          children: [(0, s.jsx)(le.A, {
            className: "hiddenMobile",
            src: t
          }), (0, s.jsx)(le.A, {
            className: "hiddenLarge",
            src: r
          })]
        }), n ? (0, s.jsx)(me.A, {
          style: {
            backgroundColor: `${i}`,
            "--padding-top-bottom": "1.75rem"
          },
          className: "normalPaddingTopBottom largePaddingSides spacing",
          children: (0, s.jsxs)(me.A, {
            className: "maxDescArea",
            style: {
              "--desc-h3-margin-bottom": "var(--h-rem-size)"
            },
            children: [(0, s.jsx)("h3", {
              style: {
                "--color-span": `${o}`
              },
              children: e
            }), (0, s.jsx)("p", {
              children: a
            })]
          })
        }) : null]
      })
    },
    49052(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        NewswireArticle: () => w,
        componentsForTinaParser: () => Ae
      });
      var r = {};
      t.r(r), t.d(r, {
        applestore: () => P,
        googleplay: () => L,
        left: () => M,
        pc: () => V,
        pcalt: () => D,
        ps: () => F,
        ps3: () => R,
        ps4: () => $,
        ps5: () => B,
        right: () => O,
        switch: () => G,
        x: () => H,
        xbox: () => U,
        xboxone: () => q,
        xboxseriesxs: () => W
      });
      var s = {};
      t.r(s), t.d(s, {
        Actions: () => Z,
        Button: () => te,
        Content: () => Y,
        Description: () => ee,
        Disclaimer: () => ae,
        Footer: () => J,
        Header: () => X,
        Heading: () => Q,
        LinkPSButton: () => ie,
        LinkXBoxButton: () => se,
        Loading: () => ne,
        PlatformButton: () => re,
        Root: () => K
      });
      var i = t(42832),
        n = t(64064),
        o = t.n(n),
        c = t(72527),
        d = t(35643),
        l = t(31879),
        m = t.n(l),
        u = t(3436),
        _ = t(56100),
        g = t(42295),
        b = t(71127),
        f = t(51434),
        p = t(13331),
        k = t(76808),
        v = t(52470);
      const h = ({
          article: e,
          relatedBlock: a
        }) => {
          switch (e.jsx) {
            case 0:
              return (0, g.jsx)(k.Jsx0, {
                article: e,
                children: a
              });
            case 1:
              return (0, g.jsx)(k.Jsx1, {
                article: e,
                children: a
              });
            default:
              return (0, g.jsx)(k.Jsx2, {
                payload: e.tina.payload,
                variablesKeys: e.tina.variables.keys,
                children: a
              })
          }
        },
        w = ({
          idHash: e
        }) => {
          const {
            data: a,
            loading: t
          } = (0, p.useQuery)(v.NewswirePost, {
            variables: {
              id_hash: e
            },
            setTitleDataPath: "post.title",
            autoSetLoading: !0
          }), r = a?.post ?? null, s = a?.related?.results ?? null;
          if ((0, b.useEffect)(() => {
              r && (window?.instgrm?.Embeds?.process?.(), window?.twttr?.widgets?.load?.())
            }, [r]), !r || t) return null;
          const i = s && r.show_related ? (0, g.jsx)(f.A, {
            posts: s
          }) : "";
          return (0, g.jsx)(p.newswirePost.Provider, {
            article: r,
            children: (0, g.jsx)(h, {
              article: r,
              relatedBlock: i
            })
          })
        };
      var x = t(10475),
        y = t(82199),
        j = t(17301),
        N = t(38882),
        S = t(32067),
        T = t(42909),
        C = t(75523);
      const z = (0, b.createContext)(null),
        I = (0, b.forwardRef)(function({
          jumpLinkId: e,
          currentStep: a = "unclaimed",
          testId: t = "web-offer-claim-root",
          asChild: r,
          ...s
        }, i) {
          const n = r ? S.DX : "div",
            o = (0, C.v6)({
              "data-testid": t,
              className: "ryxcfo0"
            }, s);
          return (0, g.jsx)(z.Provider, {
            value: {
              currentStep: a
            },
            children: (0, g.jsx)(n, {
              id: e,
              ref: i,
              ...o
            })
          })
        }),
        A = (0, b.forwardRef)(function({
          stepIndex: e,
          asChild: a,
          ...t
        }, r) {
          const s = (() => {
              const {
                currentStep: e
              } = (() => {
                const e = (0, b.useContext)(z);
                if (!e) throw new Error("Warning, must use inside a WebOfferClaim.Root provider");
                return e
              })();
              return e
            })(),
            i = a ? S.DX : "div",
            n = (0, C.v6)({
              className: "ryxcfo1"
            }, t);
          return s === e ? (0, g.jsx)(i, {
            ref: r,
            ...n
          }) : null
        });
      var E = (0, t(96369).c)({
        defaultClassName: "_1fcyces9",
        variantClassNames: {
          platform: {
            applestore: "_1fcycesa",
            googleplay: "_1fcycesb",
            left: "_1fcycesc",
            pc: "_1fcycesd",
            pcalt: "_1fcycese",
            ps: "_1fcycesf",
            ps3: "_1fcycesg",
            ps4: "_1fcycesh",
            ps5: "_1fcycesi",
            right: "_1fcycesj",
            switch: "_1fcycesk",
            x: "_1fcycesl",
            xbox: "_1fcycesm",
            xboxone: "_1fcycesn",
            xboxseriesxs: "_1fcyceso"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const P = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg",
        L = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
        M = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg",
        V = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
        D = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
        F = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg",
        R = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
        $ = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
        B = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg",
        O = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg",
        G = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
        H = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg",
        U = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg",
        q = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
        W = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg",
        K = (0, b.forwardRef)(function({
          testId: e = "web-offer-claim-root",
          asChild: a,
          ...t
        }, r) {
          const s = a ? S.DX : "div",
            i = (0, C.v6)({
              "data-testid": e,
              className: "_1fcyces0"
            }, t);
          return (0, g.jsx)(s, {
            ref: r,
            ...i
          })
        }),
        X = (0, b.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = e ? S.DX : "header",
            s = (0, C.v6)({
              className: "_1fcyces2"
            }, a);
          return (0, g.jsx)(r, {
            ref: t,
            ...s
          })
        }),
        J = (0, b.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = e ? S.DX : "footer",
            s = (0, C.v6)({
              className: "_1fcyces3"
            }, a);
          return (0, g.jsx)(r, {
            ref: t,
            ...s
          })
        }),
        Y = (0, b.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = e ? S.DX : "div",
            s = (0, C.v6)({
              className: "_1fcyces1"
            }, a);
          return (0, g.jsx)(r, {
            ref: t,
            ...s
          })
        }),
        Z = (0, b.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const r = e ? S.DX : "div",
            s = (0, C.v6)({
              className: "_1fcyces4"
            }, a);
          return (0, g.jsx)(r, {
            ref: t,
            ...s
          })
        }),
        Q = (0, b.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, C.v6)({
            className: "_1fcyces5"
          }, e);
          return (0, g.jsx)(N.Heading, {
            ref: a,
            ...t
          })
        }),
        ee = (0, b.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, C.v6)({
            className: "_1fcyces6"
          }, e);
          return (0, g.jsx)(N.Body, {
            ref: a,
            ...t
          })
        }),
        ae = (0, b.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, C.v6)({
            className: "_1fcyces7"
          }, e);
          return (0, g.jsx)(N.Body, {
            ref: a,
            ...t,
            size: "XS",
            color: "subdued"
          })
        }),
        te = (0, b.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, C.v6)({
            className: "_1fcyces8"
          }, e);
          return (0, g.jsx)(N.Button, {
            ref: a,
            ...t
          })
        }),
        re = ({
          platform: e,
          ...a
        }) => {
          const t = (0, C.v6)({
            className: E({
              platform: e
            })
          }, a);
          return (0, g.jsx)(N.Button, {
            ...t,
            appearance: "secondary",
            size: "MD",
            children: (0, g.jsx)("img", {
              src: r[e]
            })
          })
        },
        se = ({
          ...e
        }) => {
          const a = (0, C.v6)({
            className: "_1fcycesp"
          }, e);
          return (0, g.jsx)(re, {
            label: (0, p.findPlatform)("xbox")?.friendlyName ?? "Xbox",
            ...a,
            platform: "xbox"
          })
        },
        ie = ({
          ...e
        }) => {
          const a = (0, C.v6)({
            className: "_1fcycesq"
          }, e);
          return (0, g.jsx)(re, {
            label: (0, p.findPlatform)("ps")?.friendlyName ?? "PlayStation",
            ...a,
            platform: "ps"
          })
        },
        ne = ({
          label: e
        }) => (0, g.jsx)("div", {
          className: "_1fcycesr",
          children: (0, g.jsx)(N.Spinner, {
            size: "pageXL",
            label: e
          })
        }),
        oe = Object.assign(A, s);
      var ce = t(10181);
      const de = "claimOffer",
        le = (0, b.createContext)(null),
        me = () => {
          const e = (0, b.useContext)(le);
          if (!e) throw new Error("useClaimContext must be used within a ClaimContext.Provider");
          return e
        },
        ue = ({
          giftId: e,
          location: a,
          returnUrl: t
        }) => ({
          giftId: e,
          location: a,
          returnUrl: t,
          loading: !1,
          status: "IDLE",
          currentStep: "loading",
          dialogOpen: !1
        }),
        _e = (e, a) => {
          switch (a.type) {
            case "FETCH_EXISTS":
              return {
                ...e, status: "FETCHING_EXISTS", loading: !0
              };
            case "CLAIMED":
              return {
                ...e, status: "COMPLETE", currentStep: "exists", loading: !1, exists: !0, dialogOpen: !0
              };
            case "UNCLAIMED":
              return {
                ...e, status: "UNCLAIMED", exists: !1, dialogOpen: !0
              };
            case "EXISTS_ERROR":
              return {
                ...e, status: "ERROR", loading: !1, currentStep: "error", dialogOpen: !0
              };
            case "FETCH_CHARACTERS":
              return {
                ...e, status: "FETCHING_CHARACTERS", currentStep: "loading"
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
                ...e, status: "COMPLETE", currentStep: "success", loading: !1, exists: !0
              };
            case "CLAIM_EXISTS":
              return {
                ...e, status: "COMPLETE", currentStep: "exists", loading: !1, exists: !0
              };
            case "CLAIM_ERROR":
              return {
                ...e, status: "ERROR", currentStep: "error", loading: !1
              };
            case "LINK_ACCOUNT":
              return {
                ...e, status: "ERROR", currentStep: "link-account", loading: !1
              };
            case "RESET":
              return {
                ...e, ...ue({
                  giftId: e.giftId,
                  location: e.location,
                  returnUrl: e.returnUrl
                })
              };
            default:
              return e
          }
        },
        ge = () => {
          const {
            state: e,
            dispatch: a
          } = me(), {
            charactersNeeded: t,
            setCharactersNeeded: r
          } = (0, y.useRockstarUserState)(), {
            track: s
          } = (0, y.useGtmTrack)(), {
            loggedIn: i,
            data: n
          } = (0, y.useRockstarUser)(), {
            signInUrl: o
          } = (0, p.useScAuthLinks)(e.returnUrl), {
            redirect: c
          } = (() => {
            const e = (0, ce.useNavigate)();
            return {
              redirect: (0, b.useCallback)((a, t = {}) => {
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
          })(), [d] = (0, ce.useSearchParams)(), l = d.has(de), m = (() => {
            const {
              state: e,
              dispatch: a
            } = me(), {
              fetch: t
            } = (r = e.giftId, (0, p.useScApi)("marketing/engagement/claim/exists", {
              autoFetch: !1,
              requireBearerToken: !0,
              useCache: !1,
              query: {
                giftUId: r
              }
            }));
            var r;
            return (0, b.useCallback)(async () => {
              a({
                type: "FETCH_EXISTS"
              });
              try {
                const e = await t();
                e?.result && a({
                  type: "CLAIMED"
                }), !1 !== e?.result || e.error || a({
                  type: "UNCLAIMED"
                }), e && e.error && "null" !== e.error && a({
                  type: "EXISTS_ERROR"
                })
              } catch (e) {
                a({
                  type: "EXISTS_ERROR"
                }), console.error("Error fetching claim/exists", e)
              }
            }, [a, t])
          })(), u = (() => {
            const {
              state: e,
              dispatch: a
            } = me(), {
              track: t
            } = (0, y.useGtmTrack)(), [r] = (0, ce.useSearchParams)(), s = {
              giftUId: e.giftId,
              location: e.location,
              utmCampaign: r.get("utm_campaign") ?? "",
              utmContent: r.get("utm_content") ?? "",
              utmMedium: r.get("utm_medium") ?? "",
              utmSource: r.get("utm_source") ?? ""
            }, {
              createClaim: i
            } = (e => {
              const {
                loading: a,
                fetch: t
              } = (0, p.useScApi)("marketing/engagement/claim/create", {
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
            return (0, b.useCallback)(async () => {
              try {
                t({
                  element_placement: "WOC",
                  event: "cta_claim",
                  o_id: e.giftId,
                  text: "claim now",
                  section_layout: "signed in"
                });
                const r = await i();
                if (null === r) return void a({
                  type: "CLAIM_ERROR"
                });
                if (!r.status && r.error && "object" == typeof r.error && "131.100.2" === r.error.code) return void a({
                  type: "CLAIM_EXISTS"
                });
                if (!r.status) return void a({
                  type: "CLAIM_ERROR"
                });
                if (r.status) return void a({
                  type: "CLAIM_SUCCESS"
                })
              } catch (e) {
                a({
                  type: "CLAIM_ERROR"
                }), console.error("Error fetching", e)
              }
            }, [e.giftId, s, i, a, t])
          })();
          (0, b.useEffect)(() => {
            l && "IDLE" === e.status && (i ? m() : (s({
              element_placement: "WOC",
              event: "cta_login",
              link_url: o,
              text: "claim now",
              section_layout: "signed out"
            }), c(o))), "UNCLAIMED" === e.status && (t || n.characters ? a({
              type: "USER_SYNCED"
            }) : (r("gtao"), a({
              type: "FETCH_CHARACTERS"
            }))), "FETCHING_CHARACTERS" === e.status && n.accountSynced && a({
              type: "USER_SYNCED"
            }), "USER_SYNCED" === e.status && (n && n.characters && n.characters.gtao.length > 0 ? a({
              type: "START_CLAIM"
            }) : a({
              type: "LINK_ACCOUNT"
            })), "CLAIMABLE" === e.status && u(), "ERROR" === e.status && s({
              element_placement: "event_label",
              event: "alert_error",
              o_id: e.giftId,
              text: "Something went wrong on our end. Please try again in a few minutes."
            }), "COMPLETE" === e.status && s({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e.giftId,
              text: "Almost there!"
            })
          }, [i, l, n, e.status])
        };
      var be = t(19629);
      const fe = (0, T.defineMessages)({
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
        pe = ({
          heading: e,
          description: a,
          disclaimer: t,
          RichTextComponent: r
        }) => {
          const {
            formatMessage: s
          } = (0, T.useIntl)(), {
            state: i,
            dispatch: n
          } = me(), o = (0, b.useCallback)(() => {
            n({
              type: "RESET"
            })
          }, [i.exists, n]);
          return (0, g.jsxs)(oe.Root, {
            children: [(0, g.jsxs)(oe.Header, {
              children: [(0, g.jsx)(be.TriangleAlert, {
                size: "XL",
                color: "red",
                label: s(fe.web_offer_claim_error_state_icon_label)
              }), (0, g.jsx)(N.Dialog.Title, {
                asChild: !0,
                children: (0, g.jsx)(oe.Heading, {
                  level: 5,
                  children: e
                })
              })]
            }), (0, g.jsx)(N.Dialog.Description, {
              asChild: !0,
              children: (0, g.jsxs)(oe.Content, {
                children: [(0, g.jsx)(oe.Description, {
                  children: (0, g.jsx)(r, {
                    children: a
                  })
                }), (0, g.jsx)(oe.Actions, {
                  children: (0, g.jsx)(oe.Button, {
                    appearance: "primary",
                    size: "MD",
                    onClick: o,
                    children: s(fe.web_offer_claim_error_state_button)
                  })
                })]
              })
            }), (0, g.jsx)(oe.Footer, {
              children: (0, g.jsx)(oe.Disclaimer, {
                children: (0, g.jsx)(r, {
                  children: t
                })
              })
            })]
          })
        },
        ke = e => (0, g.jsx)(oe.Button, {
          appearance: `${e?.appearance??"ghost"}`,
          size: "MD",
          asChild: !0,
          "data-testid": "success-link",
          children: (0, g.jsx)("a", {
            href: e.href,
            children: e.label
          })
        }),
        ve = ({
          platforms: e,
          ...a
        }) => {
          const {
            label: t,
            href: r
          } = e.ps;
          return (0, g.jsx)(ke, {
            label: t,
            href: r,
            target: "_self",
            ...a
          })
        },
        he = e => (0, g.jsx)(ke, {
          href: "",
          target: "_self",
          ...e
        }),
        we = e => {
          switch (e.type) {
            case "shark":
              return (0, g.jsx)(ve, {
                ...e
              });
            case "gta-plus-subscribe":
              return (0, g.jsx)(he, {
                ...e
              });
            default:
              return (0, g.jsx)(ke, {
                ...e
              })
          }
        },
        xe = ({
          heading: e,
          description: a,
          ctas: t,
          disclaimer: r,
          RichTextComponent: s
        }) => {
          const {
            formatMessage: i
          } = (0, T.useIntl)();
          return (0, g.jsxs)(oe.Root, {
            children: [(0, g.jsxs)(oe.Header, {
              children: [(0, g.jsx)(be.Check, {
                size: "XL",
                color: "green",
                label: i(fe.web_offer_claim_success_state_icon_label)
              }), (0, g.jsx)(N.Dialog.Title, {
                asChild: !0,
                children: (0, g.jsx)(oe.Heading, {
                  level: 5,
                  children: e
                })
              })]
            }), (0, g.jsx)(N.Dialog.Description, {
              asChild: !0,
              children: (0, g.jsxs)(oe.Content, {
                children: [(0, g.jsx)(oe.Description, {
                  children: (0, g.jsx)(s, {
                    children: a
                  })
                }), (0, g.jsx)(oe.Actions, {
                  children: t && t.length > 0 && t.map((e, a) => (0, g.jsx)(we, {
                    ...e
                  }, a))
                })]
              })
            }), (0, g.jsx)(oe.Footer, {
              children: (0, g.jsx)(oe.Disclaimer, {
                children: (0, g.jsx)(s, {
                  children: r
                })
              })
            })]
          })
        },
        ye = ({
          heading: e,
          description: a,
          disclaimer: t,
          RichTextComponent: r
        }) => {
          const {
            formatMessage: s
          } = (0, T.useIntl)(), i = (0, p.useGetTpaLinkGenerator)(), {
            state: n
          } = me(), {
            track: o
          } = (0, y.useGtmTrack)(), c = (0, b.useCallback)(async e => {
            const a = (0, p.findPlatform)(e)?.onlineService;
            if (a && "sc" !== a) {
              o({
                element_placement: "woc",
                event: "cta_link_account",
                o_id: n.giftId,
                text: `link ${a}`
              });
              const e = await i({
                returnUrl: n.returnUrl || window.location.pathname,
                service: a
              });
              window.location.assign(e.href)
            }
          }, [i, o, n.returnUrl, n.giftId]), d = (0, b.useCallback)(() => {
            c("xbox")
          }, [c]), l = (0, b.useCallback)(() => {
            c("ps")
          }, [c]);
          return (0, g.jsxs)(oe.Root, {
            children: [(0, g.jsxs)(oe.Header, {
              children: [(0, g.jsx)(be.TriangleAlert, {
                size: "XL",
                color: "red",
                label: s(fe.web_offer_claim_link_account_state_icon_label)
              }), (0, g.jsx)(N.Dialog.Title, {
                asChild: !0,
                children: (0, g.jsx)(oe.Heading, {
                  level: 5,
                  children: e
                })
              })]
            }), (0, g.jsx)(N.Dialog.Description, {
              asChild: !0,
              children: (0, g.jsxs)(oe.Content, {
                children: [(0, g.jsx)(oe.Description, {
                  children: (0, g.jsx)(r, {
                    children: a
                  })
                }), (0, g.jsxs)(oe.Actions, {
                  children: [(0, g.jsx)(oe.LinkXBoxButton, {
                    target: "_self",
                    onClick: d
                  }), (0, g.jsx)(oe.LinkPSButton, {
                    target: "_self",
                    onClick: l
                  })]
                })]
              })
            }), (0, g.jsx)(oe.Footer, {
              children: (0, g.jsx)(oe.Disclaimer, {
                children: (0, g.jsx)(r, {
                  children: t
                })
              })
            })]
          })
        },
        je = ({
          RichTextComponent: e,
          steps: a,
          view: t = "button",
          jumpLinkId: r
        }) => {
          const {
            state: s
          } = me(), {
            isOpen: i,
            setIsOpen: n
          } = (() => {
            const [e, a] = (0, ce.useSearchParams)(), {
              state: t,
              dispatch: r
            } = me(), s = (0, b.useCallback)(t => {
              t || (e.delete(de), a(e), r({
                type: "RESET",
                payload: {
                  dialogOpen: !1,
                  status: "IDLE",
                  loading: !1
                }
              }))
            }, [r, e, a]);
            return {
              isOpen: t.dialogOpen,
              setIsOpen: s
            }
          })();
          return ge(), (0, g.jsx)(I, {
            jumpLinkId: r,
            currentStep: s.currentStep,
            children: (0, g.jsx)(Ne, {
              dialog: {
                isOpen: i,
                setIsOpen: n
              },
              steps: a,
              RichTextComponent: e
            })
          })
        },
        Ne = ({
          dialog: e,
          RichTextComponent: a,
          steps: t
        }) => {
          const {
            formatMessage: r
          } = (0, T.useIntl)();
          return (0, g.jsx)(N.Dialog.Root, {
            isOpen: e.isOpen,
            onOpenChange: e.setIsOpen,
            children: (0, g.jsx)(N.Dialog.Portal, {
              children: (0, g.jsx)(N.Dialog.Overlay, {
                children: (0, g.jsxs)(N.Dialog.Content, {
                  children: [(0, g.jsx)(N.Dialog.CloseButton, {
                    label: r(fe.web_offer_claim_dialog_close),
                    onPress: () => e.setIsOpen(!1)
                  }), (0, g.jsx)(N.Dialog.ScrollArea, {
                    children: (0, g.jsxs)(N.Dialog.Layout, {
                      children: [(0, g.jsxs)(oe, {
                        stepIndex: "loading",
                        children: [(0, g.jsx)(S.s6, {
                          children: (0, g.jsx)(N.Dialog.Title, {
                            children: r(fe.web_offer_claim_loading_state)
                          })
                        }), (0, g.jsx)(N.Dialog.Description, {
                          children: (0, g.jsx)(oe.Loading, {
                            label: r(fe.web_offer_claim_loading_state)
                          })
                        })]
                      }), (0, g.jsx)(oe, {
                        stepIndex: "success",
                        children: (0, g.jsx)(xe, {
                          ...t.success,
                          RichTextComponent: a
                        })
                      }), (0, g.jsx)(oe, {
                        stepIndex: "error",
                        children: (0, g.jsx)(pe, {
                          ...t.error,
                          RichTextComponent: a
                        })
                      }), (0, g.jsx)(oe, {
                        stepIndex: "link-account",
                        children: (0, g.jsx)(ye, {
                          ...t["link-account"],
                          RichTextComponent: a
                        })
                      }), (0, g.jsx)(oe, {
                        stepIndex: "exists",
                        children: (0, g.jsx)(xe, {
                          ...t.exists,
                          RichTextComponent: a
                        })
                      })]
                    })
                  })]
                })
              })
            })
          })
        },
        Se = JSON.parse('{"de-DE":{"bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","decorative_video_replay_button_label":"Wiederholen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Abspielen","hp_hero_stop_button_label":"Anhalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","job_card_bookmark_action":"Markieren","job_card_created_by":"Erstellt von","job_card_image_alt_text":"Screenshot vom Job {name}","job_card_report_action":"Melden","job_card_share_action":"Teilen","job_card_updated_date":"Aktualisiert: {date}","job_card_verified_by":"Verifiziert von","job_dialog_bookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen markierten Job sehen zu können – Jobs können nur im Spiel bewertet werden, nachdem sie gespielt wurden.","job_dialog_bookmarked_heading":"Job markiert: <b>{name}</b>","job_dialog_bookmarked_title":"Job markiert","job_dialog_confirmation_button":"OKAY","job_dialog_error_body":"Es gab einen Fehler bei dem Versuch, einen Job zu markieren/eine Markierung zu entfernen. Bitte versuche es erneut.","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Fehler","job_dialog_unbookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen Job nicht länger in deinen Markierungen sehen zu können.","job_dialog_unbookmarked_heading":"Job nicht mehr markiert: <b>{name}</b>","job_dialog_unbookmarked_title":"Job nicht mehr markiert","lightbox_close_button":"Schließen","login_dialog_body":"Du musst dich erst anmelden, um diese Inhalte zu sehen.","login_dialog_signin_button":"Anmelden","login_dialog_signup_button":"Registrieren","login_dialog_title":"Anmelden erforderlich","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details_amp":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details_amp":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren"},"en-US":{"bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Play","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","job_card_bookmark_action":"Bookmark","job_card_created_by":"Created by","job_card_image_alt_text":"Screenshot of {name} job","job_card_report_action":"Report","job_card_share_action":"Share","job_card_updated_date":"Updated {date}","job_card_verified_by":"Verified by","job_dialog_bookmarked_body":"You will need to restart Grand Theft Auto Online to see this bookmarked job - jobs can only be rated in-game, after they have been played.","job_dialog_bookmarked_heading":"Job Bookmarked: <b>{name}</b>","job_dialog_bookmarked_title":"Job Bookmarked","job_dialog_confirmation_button":"OK","job_dialog_error_body":"There was an error when attempting to bookmark/unbookmark the job. Please try again","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"You will need to restart Grand Theft Auto Online to no longer see this job in your bookmarks.","job_dialog_unbookmarked_heading":"Job Unbookmarked: <b>{name}</b>","job_dialog_unbookmarked_title":"Job Unbookmarked","lightbox_close_button":"Close","login_dialog_body":"You need to sign in first to interact with this content","login_dialog_signin_button":"Sign In","login_dialog_signup_button":"Sign Up","login_dialog_title":"Sign In Required","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","web_offer_claim_dialog_close":"close","web_offer_claim_error_state_button":"Try Again","web_offer_claim_error_state_icon_label":"Erorr Icon","web_offer_claim_exists_state_icon_label":"Success Icon","web_offer_claim_link_account_state_icon_label":"Error Icon","web_offer_claim_loading_state":"loading","web_offer_claim_success_state_icon_label":"Success Icon"},"es-ES":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Volver a ver","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creada por","job_card_image_alt_text":"Captura de pantalla de la actividad {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizada el {date}","job_card_verified_by":"Verificada por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Ha habido un error al intentar marcar o eliminar la marca de esta actividad. Vuelve a intentarlo","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tu lista de actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad no marcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad no marcada","lightbox_close_button":"Cerrar","login_dialog_body":"Para interactuar con este contenido debes iniciar sesión.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Debes iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse"},"es-MX":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Repetir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Marcar","job_card_created_by":"Creado por","job_card_image_alt_text":"Captura de pantalla del trabajo {name}","job_card_report_action":"Reportar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizado {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Las actividades solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Se produjo un error al intentar marcar o desmarcar la actividad. Inténtalo de nuevo.","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tus actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad desmarcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad desmarcada","lightbox_close_button":"Cerrar","login_dialog_body":"Necesitas iniciar sesión para poder interactuar con este contenido.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Necesitas iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse"},"fr-FR":{"bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","decorative_video_replay_button_label":"Relire","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Lecture","hp_hero_stop_button_label":"Arrêter","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","job_card_bookmark_action":"Ajouter aux favoris","job_card_created_by":"Créé par","job_card_image_alt_text":"Capture d\'écran de la mission {name}","job_card_report_action":"Effectuer un signalement","job_card_share_action":"Partager","job_card_updated_date":"Dernière modification : {date}","job_card_verified_by":"Vérifié par","job_dialog_bookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour voir cette mission ajoutée aux favoris. Les missions ne peuvent être notées qu\'en jeu, après avoir été jouées.","job_dialog_bookmarked_heading":"Mission ajoutée aux favoris : <b>{name}</b>","job_dialog_bookmarked_title":"Mission ajoutée aux favoris","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Une erreur est survenue lors de l\'ajout/du retrait de la mission de la liste des favoris. Veuillez réessayer.","job_dialog_error_heading":"Mission : <b>{name}</b>","job_dialog_error_title":"Erreur","job_dialog_unbookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour ne plus voir cette mission dans vos favoris.","job_dialog_unbookmarked_heading":"Mission retirée des favoris : <b>{name}</b>","job_dialog_unbookmarked_title":"Mission retirée des favoris","lightbox_close_button":"Fermer","login_dialog_body":"Vous devez vous connecter pour interagir avec ce contenu.","login_dialog_signin_button":"Se connecter","login_dialog_signup_button":"Créer un compte","login_dialog_title":"Connexion requise","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details_amp":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne"},"it-IT":{"bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","decorative_video_replay_button_label":"Riproduci di nuovo","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Riproduci","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","job_card_bookmark_action":"Aggiungi ai preferiti","job_card_created_by":"Creato da","job_card_image_alt_text":"Screenshot dell\'attività {name}","job_card_report_action":"Segnala","job_card_share_action":"Condividi","job_card_updated_date":"Aggiornato il {date}","job_card_verified_by":"Verificato da","job_dialog_bookmarked_body":"Per visualizzare questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online. Le attività possono essere valutate solo all\'interno del gioco, dopo averle giocate.","job_dialog_bookmarked_heading":"Attività aggiunta ai preferiti: <b>{name}</b>","job_dialog_bookmarked_title":"Attività aggiunta ai preferiti","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Si è verificato un errore durante l’aggiunta ai/la rimozione dai preferiti dell’attività. Riprova più tardi","job_dialog_error_heading":"Attività: <b>{name}</b>","job_dialog_error_title":"Errore","job_dialog_unbookmarked_body":"Per non visualizzare più questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online.","job_dialog_unbookmarked_heading":"Attività rimossa dai preferiti: <b>{name}</b>","job_dialog_unbookmarked_title":"Attività rimossa dai preferiti","lightbox_close_button":"Chiudi","login_dialog_body":"È necessario eseguire l’accesso prima di poter interagire con questo contenuto","login_dialog_signin_button":"Accedi","login_dialog_signup_button":"Registrati","login_dialog_title":"È necessario eseguire l’accesso","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details_amp":"Stai già usando questo indirizzo email per ricevere la newsletter. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti"},"ja-JP":{"bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","decorative_video_replay_button_label":"もう一回見る","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"再生","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","job_card_bookmark_action":"ブックマーク","job_card_created_by":"により作成","job_card_image_alt_text":"ジョブ{name}のスクリーンショット","job_card_report_action":"報告","job_card_share_action":"共有","job_card_updated_date":"{date}に更新","job_card_verified_by":"により認証","job_dialog_bookmarked_body":"ブックマークされたジョブを閲覧するには「GTAオンライン」を再起動する必要があります - ジョブは実際にプレイした後でなければ、ゲーム内で評価することはできません。","job_dialog_bookmarked_heading":"ブックマークされたジョブ: <b>{name}</b>","job_dialog_bookmarked_title":"ブックマークされたジョブ","job_dialog_confirmation_button":"OK","job_dialog_error_body":"ジョブをブックマーク/ブックマーク解除を試みた際にエラーが起こりました。もう一度お試しください","job_dialog_error_heading":"ジョブ: <b>{name}</b>","job_dialog_error_title":"エラー","job_dialog_unbookmarked_body":"ブックマークから解除たジョブを削除するには「GTAオンライン」を再起動する必要があります。","job_dialog_unbookmarked_heading":"ブックマークから解除されたジョブ: <b>{name}</b>","job_dialog_unbookmarked_title":"ブックマークから解除されたジョブ","lightbox_close_button":"閉じる","login_dialog_body":"このコンテンツを利用するには、サインインする必要があります","login_dialog_signin_button":"サインイン","login_dialog_signup_button":"サインアップ","login_dialog_title":"サインインが必要","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details_amp":"このメールアドレスで既にニュースレターアップデートを受け取っています。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します"},"ko-KR":{"bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","decorative_video_replay_button_label":"다시 재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"재생","hp_hero_stop_button_label":"정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","job_card_bookmark_action":"즐겨찾기","job_card_created_by":"생성됨","job_card_image_alt_text":"{name} 작업 스크린샷","job_card_report_action":"신고","job_card_share_action":"공유","job_card_updated_date":"{date} 업데이트됨","job_card_verified_by":"인증됨","job_dialog_bookmarked_body":"즐겨찾기에 등록한 작업을 보려면 Grand Theft Auto 온라인을 다시 시작해야 합니다 - 작업은 플레이한 후에만 게임 내에서 평가할 수 있습니다.","job_dialog_bookmarked_heading":"즐겨찾기에 등록한 작업: <b>{name}</b>","job_dialog_bookmarked_title":"즐겨찾기에 등록한 작업","job_dialog_confirmation_button":"확인","job_dialog_error_body":"작업 즐겨찾기 등록/해제 중 오류가 발생했습니다. 다시 시도하십시오","job_dialog_error_heading":"작업: <b>{name}</b>","job_dialog_error_title":"오류","job_dialog_unbookmarked_body":"즐겨찾기에서 이 작업을 표시하지 않으려면 Grand Theft Auto 온라인을 다시 시작해야 합니다.","job_dialog_unbookmarked_heading":"즐겨찾기 해제한 작업: <b>{name}</b>","job_dialog_unbookmarked_title":"즐겨찾기 해제한 작업","lightbox_close_button":"닫기","login_dialog_body":"이 콘텐츠에 댓글을 남기거나 좋아요를 누르려면 먼저 로그인하십시오","login_dialog_signin_button":"로그인","login_dialog_signup_button":"가입","login_dialog_title":"로그인 필요","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details_amp":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details_amp":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다"},"pl-PL":{"bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","decorative_video_replay_button_label":"Odtwórz ponownie","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Odtwórz","hp_hero_stop_button_label":"Przerwij","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","job_card_bookmark_action":"Dodaj do zakładek","job_card_created_by":"Stworzone przez","job_card_image_alt_text":"Zrzut ekranu akcji {name}","job_card_report_action":"Zgłoś","job_card_share_action":"Udostępnij","job_card_updated_date":"Zaktualizowano {date}","job_card_verified_by":"Zweryfikowane przez","job_dialog_bookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby zobaczyć tę dodaną do ulubionych akcję. Akcje mogą być ocenione tylko i wyłącznie w grze po ich rozegraniu.","job_dialog_bookmarked_heading":"Akcja dodana do ulubionych: <b>{name}</b>","job_dialog_bookmarked_title":"Akcja dodana do ulubionych","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Wystąpił błąd podczas dodawania/usuwania tej akcji z sekcji ulubionych. Spróbuj ponownie.","job_dialog_error_heading":"Akcja: <b>{name}</b>","job_dialog_error_title":"Błąd","job_dialog_unbookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby akcja nie pojawiała się dłużej w sekcji ulubionych akcji.","job_dialog_unbookmarked_heading":"Akcja usunięta z ulubionych: <b>{name}</b>","job_dialog_unbookmarked_title":"Akcja usunięta z ulubionych","lightbox_close_button":"Zamknij","login_dialog_body":"Zaloguj się, aby zapoznać się z zawartością.","login_dialog_signin_button":"Zaloguj się","login_dialog_signup_button":"Zarejestruj się","login_dialog_title":"Wymagane zalogowanie się","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details_amp":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj"},"pt-BR":{"bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Iniciar","hp_hero_stop_button_label":"Parar","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","job_card_bookmark_action":"Adicionar aos Favoritos","job_card_created_by":"Criado por","job_card_image_alt_text":"Captura de tela do Serviço {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartilhar","job_card_updated_date":"Atualização {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para ver este serviço como um de seus Favoritos. Serviços só podem ser avaliados no jogo, após terem sido jogados.","job_dialog_bookmarked_heading":"Serviço adicionado aos Favoritos: <b>{name}</b>","job_dialog_bookmarked_title":"Serviço adicionado aos Favoritos","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Houve um erro ao tentar adicionar/remover esse serviço aos Favoritos. Tente novamente.","job_dialog_error_heading":"Serviço: <b>{name}</b>","job_dialog_error_title":"Erro","job_dialog_unbookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para não ver mais este serviço como um de seus Favoritos.","job_dialog_unbookmarked_heading":"Serviço removido dos Favoritos: <b>{name}</b>","job_dialog_unbookmarked_title":"Serviço removido dos Favoritos","lightbox_close_button":"Fechar","login_dialog_body":"É necessário iniciar sessão para interagir com esse conteúdo","login_dialog_signin_button":"Iniciar sessão","login_dialog_signup_button":"Criar conta","login_dialog_title":"É necessário iniciar sessão","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details_amp":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição"},"ru-RU":{"bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","decorative_video_replay_button_label":"Повтор","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизвести","hp_hero_stop_button_label":"Стоп","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total}","job_card_bookmark_action":"Отметить","job_card_created_by":"Создан","job_card_image_alt_text":"Снимок экрана дела {name}","job_card_report_action":"Пожаловаться","job_card_share_action":"Поделиться","job_card_updated_date":"Обновлен {date}","job_card_verified_by":"Проверен","job_dialog_bookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы увидеть добавленное в закладки дело. Оценивать дела можно только в игре после прохождения.","job_dialog_bookmarked_heading":"Дело добавлено в закладки: <b>{name}</b>","job_dialog_bookmarked_title":"Дело добавлено в закладки","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Произошла ошибка при попытке добавить дело в закладки или удалить его из закладок. Пожалуйста, повторите попытку","job_dialog_error_heading":"Дело: <b>{name}</b>","job_dialog_error_title":"Ошибка","job_dialog_unbookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы удалить это дело из закладок.","job_dialog_unbookmarked_heading":"Дело удалено из закладок: <b>{name}</b>","job_dialog_unbookmarked_title":"Дело удалено из закладок","lightbox_close_button":"Закрыть","login_dialog_body":"Выполните вход, чтобы взаимодействовать с этим контентом.","login_dialog_signin_button":"Войти","login_dialog_signup_button":"Регистрация","login_dialog_title":"Необходимо выполнить вход","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details_amp":"Вы уже получаете письма по рассылке на этот адрес электронной почты. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться"},"zh-CN":{"bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"回放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","job_card_bookmark_action":"收藏","job_card_created_by":"制作者","job_card_image_alt_text":"{name}差事的截图","job_card_report_action":"举报","job_card_share_action":"分享","job_card_updated_date":"更新于{date}","job_card_verified_by":"认证者","job_dialog_bookmarked_body":"您需要重新启动Grand Theft Auto在线模式来查看这项已收藏的差事。只有在游玩了差事后才能在游戏内对它们进行评价。","job_dialog_bookmarked_heading":"已收藏差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏差事","job_dialog_confirmation_button":"确定","job_dialog_error_body":"收藏/取消收藏此差事时出现了一个错误。请稍候再试","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"错误","job_dialog_unbookmarked_body":"需要您重新启动Grand Theft Auto在线模式后，这项差事才会从您的收藏中消失。","job_dialog_unbookmarked_heading":"已取消收藏差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏差事","lightbox_close_button":"关闭","login_dialog_body":"您需要先登录才能与该内容进行互动","login_dialog_signin_button":"登录","login_dialog_signup_button":"注册","login_dialog_title":"需要登录","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details_amp":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置中随时管理您的通信偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"确定","ns_successfully_subscribed_details_amp":"您现已订阅Rockstar Games邮件通知，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置中随时管理您的通信偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅"},"zh-TW":{"bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"重播","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","job_card_bookmark_action":"收藏","job_card_created_by":"創作者：","job_card_image_alt_text":"差事 {name} 的擷圖","job_card_report_action":"檢舉","job_card_share_action":"分享","job_card_updated_date":"更新於 {date}","job_card_verified_by":"驗證者：","job_dialog_bookmarked_body":"您需要重啟 GTA 線上模式才能看見此已收藏的差事。您需要完成該差事，才能在遊戲內對其評價。","job_dialog_bookmarked_heading":"已收藏的差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏的差事","job_dialog_confirmation_button":"確定","job_dialog_error_body":"解決這個請求時出現錯誤。請再試一次。","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"錯誤","job_dialog_unbookmarked_body":"您需要重啟 GTA 線上模式才不會再在收藏中看見此差事。","job_dialog_unbookmarked_heading":"已取消收藏的差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏的差事","lightbox_close_button":"關閉","login_dialog_body":"您需要先登入才能進行操作","login_dialog_signin_button":"登入","login_dialog_signup_button":"註冊","login_dialog_title":"必須登入","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details_amp":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details_amp":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱"}}'),
        Te = ({
          children: e
        }) => e ? "string" != typeof e ? (console.error("RichText expects to be a string"), null) : (0, g.jsx)(j.TinaRichText, {
          html: e
        }) : null,
        Ce = ({
          children: e,
          initialState: a
        }) => {
          const [t, r] = (0, b.useReducer)(_e, a);
          return (0, g.jsx)(le.Provider, {
            value: {
              state: t,
              dispatch: r
            },
            children: e
          })
        },
        ze = (Ie = ({
          giftId: e,
          location: a,
          jumpLinkId: t,
          steps: r
        }) => {
          const s = `${document.location.pathname}${document.location.search}#${t}`,
            i = (0, j.usePrunedTinaKeys)(r),
            n = ue({
              giftId: e,
              location: a,
              returnUrl: s
            }),
            {
              loggedIn: o
            } = (0, y.useRockstarUser)(),
            {
              track: c
            } = (0, y.useGtmTrack)();
          return (0, b.useEffect)(() => {
            c({
              element_placement: "WOC",
              event: "page_section_impression",
              section_layout: o ? "signed in" : "signed out"
            })
          }, [c]), (0, g.jsx)(Ce, {
            initialState: n,
            children: r && (0, g.jsx)(je, {
              steps: i,
              RichTextComponent: Te,
              jumpLinkId: t
            })
          })
        }, (0, T.withIntl)(Ie, Se));
      var Ie;
      const Ae = {
        ...i,
        ..._,
        ClrCard: u.y3,
        ClrCollapsedCard: u.h7,
        Gif: o(),
        GroupOfItems: c.default,
        RockstarVideoPlayer: m(),
        SwiperCarousel: d.default,
        Highlights: x.Highlights,
        WebOfferClaim: ze
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
        "./grac_19.svg": 97231,
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
        "./grac_19.svg": 97231,
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
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 13890,
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
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 13890,
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
    51048(e, a, t) {
      var r = {
        "./VI/desktop/de_de.jpg": 20144,
        "./VI/desktop/en_us.jpg": 40401,
        "./VI/desktop/es_es.jpg": 47534,
        "./VI/desktop/es_mx.jpg": 38537,
        "./VI/desktop/fr_fr.jpg": 72994,
        "./VI/desktop/it_it.jpg": 93668,
        "./VI/desktop/ja_jp.jpg": 63365,
        "./VI/desktop/ko_kr.jpg": 39003,
        "./VI/desktop/pl_pl.jpg": 37758,
        "./VI/desktop/pt_br.jpg": 13890,
        "./VI/desktop/ru_ru.jpg": 11016,
        "./VI/desktop/zh_hans.jpg": 95732,
        "./VI/desktop/zh_tw.jpg": 65667
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
      }, s.resolve = i, e.exports = s, s.id = 51048
    },
    16044(e, a, t) {
      var r = {
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
      }, s.resolve = i, e.exports = s, s.id = 16044
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
    97231(e) {
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
    13890(e) {
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