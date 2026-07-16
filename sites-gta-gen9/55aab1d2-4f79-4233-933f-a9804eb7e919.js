try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "55aab1d2-4f79-4233-933f-a9804eb7e919", e._sentryDebugIdIdentifier = "sentry-dbid-55aab1d2-4f79-4233-933f-a9804eb7e919")
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
  [6870], {
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
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }(a, "GetAudioAlbum")
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
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
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

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
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

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
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
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }(a, "TinaModulesList")
    },
    43657(e) {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesTree"
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
                value: "tinaModulesTree"
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
                    value: "id_hash"
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
                        value: "to"
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
                            value: "to"
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
          end: 331
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
        body: "query TinaModulesTree($type: String, $locale: String!) {\n    tinaModulesTree(type: $type, locale: $locale) {\n        title\n        id_hash\n        children {\n            title\n            to\n            id_hash\n            children {\n                title\n                to\n                id_hash\n            }\n        }\n    }\n}\n",
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
      }), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }(a, "TinaModulesTree")
    },
    64303(e) {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesTree"
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
                value: "tinaModulesTree"
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
                    value: "tree"
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
          end: 213
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
        body: "query TinaModulesTree($id: String, $locale: String!) {\n    tinaModulesTree(id: $id, locale: $locale) {\n        tree {\n            title\n            children {\n                title\n            }\n        }\n    }\n}\n",
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
      }), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }(a, "TinaModulesTree")
    },
    41886(e, a, t) {
      "use strict";
      t.d(a, ["Ay", 0, {
        blackBtn: "rockstargames-sites-gta-gen9bbd36af2983e15984f3d2fa86129628f",
        btnText: "rockstargames-sites-gta-gen9e4f5dc32465e33ed6130d534797e872d",
        btnTexticon: "rockstargames-sites-gta-gen9c56c801a4897f1a22bb198809026c4af",
        iconBtn: "rockstargames-sites-gta-gen9c0f3776450e9060231d6d337875f9c5b",
        link: "rockstargames-sites-gta-gen9b674c52b22c36a24354be5d90f57b9d4",
        pc: "rockstargames-sites-gta-gen9ca151f4cfae57e062233ee5279d44ad4",
        pillBtn: "rockstargames-sites-gta-gen9f15ebf4bd284c6bf502680beaff4673f",
        plusButton: "rockstargames-sites-gta-gen9d4a62e4f78c35665195e12dd5a2144f5",
        ps4: "rockstargames-sites-gta-gen9a20ae3e61b8916d13f90dc35e5aaf916",
        ps5: "rockstargames-sites-gta-gen9a2713e909f1d2dff9938b778ee8fd11b",
        selected: "rockstargames-sites-gta-gen9d256197abeb6fc349fcc27d01f21866e",
        small: "rockstargames-sites-gta-gen9c2a7ad87320bd484347d2304919b377f",
        transparentBtn: "rockstargames-sites-gta-gen9faacc07dbc90b60f23c2b5b754f019bb",
        whiteBtn: "rockstargames-sites-gta-gen9e07aef349a8e5e5c36b76566c83c4c79",
        xboxone: "rockstargames-sites-gta-gen9f75f6748656bc069f9d20f9f2183ec6e",
        xboxseriesxs: "rockstargames-sites-gta-gen9ea41ca8dd514fd714b8ed6d951bf006d"
      }])
    },
    43623(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var s = t(39793),
        r = t(93082),
        i = t(14653),
        n = t(44128),
        o = t(73059),
        c = t(31147),
        l = t(39279),
        d = t(81270),
        m = t(46764);
      const _ = {
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
      var u = t(49516),
        g = t(98769);
      const b = ({
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
            className: (0, d.default)(_.img, e?.className)
          }), (e?.title || e?.description) && (0, s.jsx)(u.A, {
            item: e
          })]
        }),
        p = ({
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
        f = ({
          children: e,
          items: a = [],
          style: t = {},
          noInfiniteScroll: g = !1,
          className: f = "",
          renderTemplate: h = "standard",
          text: k,
          customSpaceBetween: v = null,
          centerSlides: y = !0,
          centeredSlidesBounds: j = !1
        }) => {
          const x = (0, m.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [w, N] = (0, r.useState)(0),
            [S, C] = (0, r.useState)(null),
            T = (0, r.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, l.A)()) : null, [e, x]),
            E = e => {
              if (!e) return;
              let a = 0;
              e.pagination.bullets.forEach((e, t) => {
                e.classList.contains("swiper-pagination-bullet-active") && (a = t)
              }), N(a)
            };
          if (!(a && 0 !== a?.length || e)) return null;
          const I = {
            0: {
              spaceBetween: v ?? 16
            },
            1024: {
              spaceBetween: v ?? 18
            },
            1920: {
              spaceBetween: v ?? 20
            },
            2560: {
              spaceBetween: v ?? 22
            }
          };
          return (0, s.jsxs)("div", {
            className: (0, d.default)(_.deprecatedCarousel, _[h], _.infinite_true, e ? _.renderedWithChildren : "", f),
            style: t,
            "data-testid": "carousel",
            children: [(0, s.jsxs)(i.RC, {
              modules: [n.A, o.A, c.A],
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
              centeredSlides: y,
              centerInsufficientSlides: y,
              centeredSlidesBounds: j,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: I,
              onSlideChange: e => {
                E(e)
              },
              onResize: e => {
                null != S && clearTimeout(S);
                const a = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), E(e)
                }, 250);
                C(a)
              },
              children: [(0, s.jsx)("div", {
                className: _.trackWrapper,
                children: (0, s.jsxs)("div", {
                  className: _.track,
                  children: [a?.map(e => (0, s.jsx)(i.qr, {
                    children: (0, s.jsx)(b, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, a) => e && (0, s.jsx)(i.qr, {
                    children: e
                  }, T && T[a]))]
                })
              }), (0, s.jsx)(p, {
                current: w,
                total: e ? e.length : a.length
              })]
            }), (k?.title || k?.description) && (0, s.jsx)(u.A, {
              item: k
            })]
          })
        }
    },
    49516(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(39793),
        r = t(81270),
        i = t(62012),
        n = t(49852),
        o = t(51299);
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
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, a) => e?.unorderedList ? (0, s.jsx)(n.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, a) : e?.image ? (0, s.jsx)(i.A, {
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
    73904(e, a, t) {
      "use strict";
      t.d(a, {
        YT: () => n,
        lv: () => o,
        Ay: () => c
      });
      var s = t(39793),
        r = t(69088);
      var i = t(81270);
      var n = function(e) {
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
          src: n,
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
            className: (0, i.default)("rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1", t),
            "data-testid": "platform-tag",
            "data-platform": a,
            "data-tag-size": e,
            src: n,
            alt: "",
            "aria-hidden": !0
          }), (0, s.jsx)(r.s6, {
            children: o
          })]
        })
      }
    },
    53351(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(39793),
        r = t(48478);
      const i = ({
        disableLink: e,
        className: a,
        "data-testid": t
      }) => {
        const i = e ? "span" : r.A;
        return (0, s.jsx)(i, {
          className: [e ? "rockstargames-sites-gta-gen9b28a6ee32abeb20049b97677a86a4314" : "rockstargames-sites-gta-gen9a3d920a1139575706b914bc3a0100970", a || ""].join(" "),
          "data-testid": t,
          alt: "Rockstar Games Home",
          ...!e && {
            to: "/"
          }
        })
      }
    },
    87335(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        RpCategory: () => l,
        rpCategoryTestIds: () => c
      });
      var s = t(39793),
        r = t(93082),
        i = t(33949);
      var n = t(81270);
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
        }, m) {
          const _ = o(e),
            u = (0, i.mergeProps)(d, {
              className: (0, n.default)("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", t),
              "data-testid": l
            });
          return (0, s.jsxs)("div", {
            "data-size": a,
            ref: m,
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
                fill: _
              })
            }), (0, s.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d9ea5cdf174033003a8670f31ae66a59",
              "data-testid": c.RANK_VALUE,
              children: e
            })]
          })
        })
    },
    36346(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(39793),
        r = t(93082),
        i = t(99225),
        n = t(13331);
      const o = (0, n.withTranslations)(({
        t: e
      }) => {
        const [a] = (0, r.useState)(""), t = (0, i.useNavigate)(), o = (0, n.useMutateState)();
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
    85618(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        Root: () => M,
        Text: () => P
      });
      var s = t(39793),
        r = t(93082),
        i = t(69088),
        n = t(33949);
      let o = [],
        c = null;
      const l = "requestAnimationFrame" in window ? (e = {
          sync: !1
        }) => {
          null !== c && window.cancelAnimationFrame(c);
          const a = () => m(o.filter(e => e.dirty && e.active));
          if (e.sync) return a();
          c = window.requestAnimationFrame(a)
        } : () => {},
        d = e => a => {
          o.forEach(a => a.dirty = e), l(a)
        },
        m = e => {
          e.filter(e => !e.styleComputed).forEach(e => {
            e.styleComputed = b(e)
          }), e.filter(p).forEach(f);
          const a = e.filter(g);
          for (let e = 0; e < 2; e++) a.forEach(u), a.forEach(e => {
            f(e), _(e)
          }), a.forEach(h)
        },
        _ = e => e.dirty = 0,
        u = e => {
          e.availableWidth = e.element.parentElement?.clientWidth, e.availableHeight = e.element.parentElement?.clientHeight, e.currentWidth = e.element.scrollWidth, e.currentHeight = e.element.scrollHeight, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), Math.min(Math.max(e.minSize, e.availableHeight / e.currentHeight * e.previousFontSize), e.maxSize)), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap"
        },
        g = e => 2 !== e.dirty || 2 === e.dirty && (e.element.parentElement?.clientWidth !== e.availableWidth || e.element.parentElement?.clientHeight !== e.availableHeight),
        b = e => {
          const a = window.getComputedStyle(e.element, null);
          return e.currentFontSize = parseFloat(a.getPropertyValue("font-size")), e.display = a.getPropertyValue("display"), e.whiteSpace = a.getPropertyValue("white-space"), !0
        },
        p = e => {
          let a = !1;
          return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (a = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (a = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, a)
        },
        f = e => {
          e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px"
        },
        h = e => {
          e.element.dispatchEvent(new CustomEvent("fit", {
            detail: {
              oldValue: e.previousFontSize,
              newValue: e.currentFontSize,
              scaleFactor: e.currentFontSize / e.previousFontSize
            }
          }))
        },
        k = (e, a) => t => {
          e.dirty = a, e.active && l(t)
        },
        v = e => () => {
          o = o.filter(a => a.element !== e.element), e.observeMutations && e.observer && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize
        },
        y = e => () => {
          e.active || (e.active = !0, l())
        },
        j = e => () => e.active = !1,
        x = {
          minSize: 16,
          maxSize: 512,
          multiLine: !0,
          observeMutations: {
            subtree: !0,
            childList: !0,
            characterData: !0
          }
        };

      function w(e, a) {
        const t = {
          ...x,
          ...a
        };
        t.minSize = Number.isFinite(t.minSize) && t.minSize > 0 ? t.minSize : x.minSize, t.maxSize = Number.isFinite(t.maxSize) && t.maxSize > 0 ? t.maxSize : x.maxSize;
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
            e.observeMutations && (e.observer = new MutationObserver(() => k(e, 1)()), e.observer.observe(e.element, e.observeMutations))
          })(a), o.push(a), {
            element: e,
            fit: k(a, 3),
            unfreeze: y(a),
            freeze: j(a),
            unsubscribe: v(a)
          }
        });
        return l(), s
      }

      function N(e, a = {}) {
        return "string" == typeof e ? w((t = document.querySelectorAll(e), [].slice.call(t)), a) : w([e], a)[0];
        var t
      }
      let S;
      const C = () => {
          window.clearTimeout(S), S = window.setTimeout(d(2), N.observeWindowDelay)
        },
        T = ["resize", "orientationchange"];
      Object.defineProperty(N, "observeWindow", {
        set: e => {
          T.forEach(a => {
            e ? window.addEventListener(a, C) : window.removeEventListener(a, C)
          })
        }
      }), N.observeWindow = !0, N.observeWindowDelay = 100, N.fitAll = d(3);
      const E = N;
      var I = t(46764);
      const A = (0, r.createContext)({
          rootRef: (0, r.createRef)(),
          min: 0,
          max: 0,
          mode: "single"
        }),
        M = (0, r.forwardRef)(function({
          min: e = 1,
          max: a = 100,
          mode: t = "multi",
          asChild: o,
          testId: c,
          ...l
        }, d) {
          const m = (0, r.useRef)(null),
            _ = (0, I.UP)(m, d),
            u = (0, n.mergeProps)({
              "data-testid": c
            }, l),
            g = o ? i.DX : "div";
          return (0, s.jsx)(A.Provider, {
            value: {
              rootRef: m,
              min: e,
              max: a,
              mode: t
            },
            children: (0, s.jsx)(g, {
              ref: _,
              ...u
            })
          })
        }),
        P = (0, r.forwardRef)(function({
          asChild: e,
          testId: a,
          ...t
        }, o) {
          const {
            rootRef: c,
            min: l,
            max: d,
            mode: m
          } = (0, r.useContext)(A), _ = (0, r.useRef)(null), u = (0, r.useRef)(null);
          (0, r.useEffect)(() => (u.current = E(_.current, {
            minSize: l,
            maxSize: d,
            multiLine: "multi" === m
          }), () => u.current.unsubscribe()), [l, d, m]), (0, r.useEffect)(() => {
            if (null === c.current || null === u.current) return;
            const e = new ResizeObserver(() => {
              u.current.fit()
            });
            return e.observe(c.current), () => e.disconnect()
          }, [c, u]), (0, r.useEffect)(() => {
            document.fonts.ready.then(() => u.current && u.current.fit())
          }, []);
          const g = (0, I.UP)(_, o),
            b = (0, n.mergeProps)({
              className: "_1gyq4dd0",
              "data-testid": a
            }, t),
            p = e ? i.DX : "div";
          return (0, s.jsx)(p, {
            ref: g,
            ...b
          })
        })
    },
    82306(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => _,
        X: () => m
      });
      var s = t(39793),
        r = t(17301),
        i = t(13331),
        n = t(66956),
        o = t(64727),
        c = t(70067);
      const l = {
          gen9Hero: () => (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ee796fcf55787f1dd1af025b1ec9d6b8",
            children: (0, s.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d2e785bbf2071e806cee23e58d1a3b53",
              children: (0, s.jsx)(c.A, {
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
          return t ? (0, s.jsx)(t, {}) : null
        },
        m = ({
          id: e = null,
          ids: a = null,
          setTitleDataPath: t = null,
          sync: s = !1
        }) => {
          const r = a ?? [e],
            {
              data: n
            } = (0, i.useQuery)(o.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: s
              },
              setTitleDataPath: t,
              skip: !r.length
            });
          return n?.tinaModulesInfo ?? null
        },
        _ = (0, n.A)(({
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
          return o ? (0, s.jsx)(s.Fragment, {
            children: n.map(({
              tina: a
            }, t) => (0, s.jsx)(r.TinaParser, {
              components: e,
              tina: a,
              componentProps: {
                tinaModulesInfo: n
              }
            }, t))
          }) : i ? (0, s.jsx)(d, {
            name: i
          }) : null
        }, {
          header: null
        })
    },
    97990(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(39793),
        r = t(62012),
        i = t(85618);
      const n = {
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
              className: `${n.badge} ${a?n[a]:""} `,
              children: e
            }),
            children: [(0, s.jsx)(s.Fragment, {
              children: c && (0, s.jsx)(r.A, {
                image: {
                  alt: c,
                  desktop: t(65287)(`./${c}.png`)
                }
              })
            }), (0, s.jsx)(i.Root, {
              className: `${l||c?"":n.badge} ${a?n[a]:""}`,
              min: 8,
              max: 1e3,
              mode: l || c ? "single" : "multi",
              children: (0, s.jsx)(i.Text, {
                children: d[0]
              })
            }), (0, s.jsx)(s.Fragment, {
              children: d.shift() && l && d.length >= 1 && (0, s.jsx)(i.Root, {
                min: 8,
                max: 1e3,
                mode: "single",
                children: (0, s.jsx)(i.Text, {
                  children: d.join(" ")
                })
              })
            })]
          }, "badge-wrapper")
        }
    },
    98769(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(39793),
        r = t(93082),
        i = t(13331),
        n = t(81270),
        o = t(97990),
        c = t(62012);
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
          image: m,
          style: _,
          className: u = "",
          attributes: g = {},
          role: b,
          hero: p = !1
        }) => {
          const f = (0, r.useMemo)(() => {
              if (m?.badge || m?.discountTxt || e || t) return (0, s.jsx)(o.A, {
                badge: m?.discountTxt ?? m?.badge ?? e ?? t,
                badgeType: a,
                splitter: m?.splitter ?? d,
                role: m?.role ?? b
              })
            }, [e, a, t, m, b, d]),
            h = (0, i.isEmptyMarkup)(m?.caption ?? "");
          return (0, s.jsx)(l, {
            hero: p,
            children: (0, s.jsx)("figure", {
              children: (0, s.jsxs)("div", {
                className: (0, n.default)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", p ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", g?.hiddenMobile ? "hiddenMobile" : "", g?.hiddenLarge ? "hiddenLarge" : "", g?.className, u),
                style: (0, i.safeStyles)({
                  ..._,
                  ...g?.style
                }),
                ...g,
                children: [(0, s.jsx)(c.A, {
                  role: m?.accessibleRole,
                  image: m,
                  className: u
                }), f, !h && (0, s.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
                  }
                })]
              })
            })
          })
        }
    },
    76475(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        Avatar: () => p,
        Content: () => f,
        PlatformTag: () => k,
        PlatformTagSizes: () => c.YT,
        Platforms: () => c.lv,
        RankContent: () => y,
        Root: () => b,
        RpCategory: () => j,
        TextContent: () => x,
        TopRow: () => h,
        UserName: () => v
      });
      var s = t(39793),
        r = t(93082),
        i = t(69088),
        n = t(33949),
        o = t(81270),
        c = t(73904),
        l = t(87335),
        d = t(3018),
        m = t(42909);
      const _ = (0, m.defineMessages)({
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
          } = (0, m.useIntl)(), d = (0, n.mergeProps)(r, {
            "data-testid": t,
            className: (0, o.default)("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", a)
          });
          return (0, s.jsxs)("div", {
            ref: c,
            ...d,
            children: [(0, s.jsx)(i.s6, {
              children: l(_.character_card_a11y_intro)
            }), e]
          })
        }),
        b = (0, d.g)(g),
        p = (0, r.forwardRef)(function({
          src: e,
          alt: a,
          testId: i,
          ...o
        }, c) {
          const [l, d] = (0, r.useState)(e), m = (0, n.mergeProps)(o, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": i
          });
          return e ? (0, s.jsx)("div", {
            ref: c,
            ...m,
            children: (0, s.jsx)("img", {
              className: u,
              src: l,
              alt: a ?? "",
              onError: () => d(t(14804)),
              "aria-hidden": !a
            })
          }) : (0, s.jsx)("div", {
            ref: c,
            ...m,
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
          const l = e ? i.DX : "div",
            d = (0, n.mergeProps)(r, {
              className: (0, o.default)("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", t),
              "data-testid": a
            });
          return (0, s.jsx)(l, {
            ref: c,
            ...d
          })
        }),
        h = (0, r.forwardRef)(function({
          children: e,
          testId: a,
          ...t
        }, r) {
          const i = (0, n.mergeProps)(t, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": a
          });
          return (0, s.jsx)("div", {
            ref: r,
            ...i,
            children: e
          })
        }),
        k = ({
          testId: e,
          ...a
        }) => {
          const t = (0, n.mergeProps)(a, {
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
          } = (0, m.useIntl)(), l = (0, n.mergeProps)(r, {
            "data-testid": a
          });
          return (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...l,
            ref: o,
            children: [(0, s.jsx)(i.s6, {
              children: c(_.character_card_a11y_player, {
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
          const i = (0, n.mergeProps)(t, {
            "data-testid": e
          });
          return (0, s.jsx)("div", {
            ...i,
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
          } = (0, m.useIntl)(), r = (0, n.mergeProps)(a, {
            "data-testid": e
          });
          return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(i.s6, {
              children: t(_.character_card_a11y_rank, {
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
          const c = e ? i.DX : "div",
            l = (0, n.mergeProps)(r, {
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
    62579(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(39793),
        r = t(99225),
        i = t(11400),
        n = t(42909);
      const o = (0, n.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        c = {
          blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
          btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
          btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
          iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
          link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
          pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844",
          pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
          plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
          ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
          ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
          selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
          small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
          transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
          whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
          xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
          xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999"
        },
        l = ({
          children: e,
          className: a,
          onClick: t,
          style: r,
          ariaLabel: i
        }) => (0, s.jsx)("button", {
          className: a,
          onClick: t,
          style: r,
          type: "button",
          "aria-label": i,
          children: e
        }),
        d = ({
          children: e,
          className: a,
          onClick: t,
          style: i,
          to: n,
          ariaLabel: o
        }) => (0, s.jsx)(r.NavLink, {
          className: a,
          onClick: t,
          style: i,
          to: n,
          "aria-label": o,
          children: e
        }),
        m = ({
          btnColor: e = "#fff",
          className: a = "",
          consoleBtn: t,
          icon: r = "",
          img: m,
          labelColor: _ = "#000",
          onClick: u,
          secondText: g,
          size: b,
          text: p,
          to: f,
          type: h = "",
          ariaLabel: k
        }) => {
          const {
            formatMessage: v
          } = (0, n.useIntl)(), y = [c.plusButton, c[h] ?? "", c[b] ?? "", c[t] ?? "", a].join(" "), j = {
            "--hvr-color": e ?? _,
            "--hvr-bg-color": _ ?? e,
            "--hvr-border-color": e ?? _
          }, x = (0, s.jsxs)(s.Fragment, {
            children: [m ? (0, s.jsx)("img", {
              src: m,
              alt: ""
            }) : "", (0, s.jsxs)("div", {
              className: c.btnText,
              icon: r,
              children: [p, g ? (0, s.jsx)("span", {
                children: g
              }) : ""]
            })]
          });
          if (f) {
            if (f.startsWith("http")) {
              const e = f.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsxs)("a", {
                href: f,
                target: e,
                onClick: u,
                onKeyDown: u,
                className: y,
                "aria-label": k,
                tabIndex: 0,
                children: [x, "_blank" === e && (0, s.jsx)(i.ExternalLink, {
                  label: v(o.aria_label_open_new_window)
                })]
              })
            }
            return (0, s.jsx)(d, {
              className: y,
              onClick: u,
              style: {
                ...j
              },
              to: f,
              ariaLabel: k,
              children: x
            })
          }
          return (0, s.jsx)(l, {
            className: y,
            onClick: u,
            style: {
              ...j
            },
            ariaLabel: k,
            children: x
          })
        }
    },
    51299(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(39793);
      const r = {
          gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b"
        },
        i = ({
          style: e,
          className: a = "",
          type: t = ""
        }) => (0, s.jsx)("div", {
          style: e,
          className: [r.hr, r[t], a].join(" ")
        })
    },
    49852(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(39793),
        r = t(93082),
        i = t(50062),
        n = t.n(i),
        o = t(13331),
        c = t(81270);
      const l = {
          blue: "rockstargames-sites-gta-gen9df5c0d39e32be4e6977bb1d638ed2340",
          custom: "rockstargames-sites-gta-gen9ef5369875ddc5d9d7ad36eadc8afab2e",
          darkBlue: "rockstargames-sites-gta-gen9aa460ec14f75c93c2ba386a115ea407c",
          darkRed: "rockstargames-sites-gta-gen9a6a078bd68ef39e719c21e5db6329642",
          goldenrod: "rockstargames-sites-gta-gen9a55d762df7035a2394c9ffbfcbf1a0db",
          green: "rockstargames-sites-gta-gen9ea2d0d0e1e32d8e48d79a0ad80a4c8ac",
          grid: "rockstargames-sites-gta-gen9c157d94760f0476ea06aa04da4e86727",
          gtao: "rockstargames-sites-gta-gen9f4bc90102d24f73cb2d45d3821bfd32e",
          gtaplus: "rockstargames-sites-gta-gen9c5d92b0365dc60e6b93d321e9139e9f3",
          hotPink: "rockstargames-sites-gta-gen9fa9be84c85fca4e66b2489e1e52a2e6a",
          itemList: "rockstargames-sites-gta-gen9a1ccd04246730848111c4868ccba6294",
          noImg: "rockstargames-sites-gta-gen9b239e263450a84fffba43a94c194d606",
          pillBtn: "rockstargames-sites-gta-gen9d45dcc8e4008f8620987ea3033e4373d",
          purple: "rockstargames-sites-gta-gen9f14d63f28dd73c05cf950a08d8b8f501",
          rdo: "rockstargames-sites-gta-gen9cc490e805fe55ab86a3ec5df2a5131e3",
          red: "rockstargames-sites-gta-gen9c446b758dbe82ad97444174f4d0b4abe",
          selected: "rockstargames-sites-gta-gen9de1852cf9b8b4b71bcc67f8e66552c46",
          skull: "rockstargames-sites-gta-gen9a034e7482e8f28c66ec657f72bb93749",
          teal: "rockstargames-sites-gta-gen9a0aaa124176430b6ad4f959cf136e7a3",
          turquoise: "rockstargames-sites-gta-gen9b03c0798d8655dd98518b2f0dc002f06",
          yellow: "rockstargames-sites-gta-gen9bdb57ca410954012dfd4711c67fc2a18"
        },
        {
          sanitize: d
        } = n(),
        m = ({
          list: e,
          string: a,
          starColor: t,
          style: i,
          className: n,
          game: m,
          noImg: _,
          columns: u,
          mobileColumns: g
        }) => {
          const [b, p] = (0, r.useState)(null), f = a ? a.split("_#_") : e;
          if ((0, r.useEffect)(() => {
              p(e)
            }, [e]), !a && !e) return null;
          const h = {
            color: i?.color
          };
          return delete i?.color, u && b ? (0, s.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": u,
              "--unordered-list-grid-column-mobile": g ?? u
            },
            children: (0, s.jsx)("ul", {
              className: (0, c.default)(l.itemList, l.noImg, l[t], l[m]),
              style: (0, o.safeStyles)(i),
              children: b.map((e, a) => (0, s.jsx)("li", {
                style: h,
                dangerouslySetInnerHTML: {
                  __html: d(e.content)
                }
              }, a))
            })
          }) : (0, s.jsx)("ul", {
            style: (0, o.safeStyles)(i),
            className: (0, c.default)(l.itemList, l.custom, _ ? l.noImg : "", t ? l[t] : "", m ? l[m] : "", n ?? ""),
            children: f.map((e, a) => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e?.content ?? e)
              }
            }, a))
          })
        }
    },
    72905(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(39793),
        r = t(93082),
        i = t(57208),
        n = function(e) {
          return e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e
        }({}),
        o = t(64317);
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
          }), (0, i.wd)(`ErrorBoundary - ${e.name} ${e.message}`, {
            level: n.Error,
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
        const t = t => (0, s.jsx)(c, {
          header: a,
          children: (0, s.jsx)(e, {
            ...t
          })
        });
        return t.displayName = `withSearchbarErrorBoundary(${e.displayName||e.name||"Component"})`, t
      }
    },
    64317(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(39793),
        r = t(93082),
        i = t(42909),
        n = t(48478),
        o = t(36346);
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
            m = (0, r.useRef)(null);
          return (0, r.useEffect)(() => {
            m && m?.current && m.current.focus()
          }, [m]), (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9d0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, s.jsx)("h3", {
              tabIndex: -1,
              ref: m,
              children: `${l} (${d})`
            }), (0, s.jsx)(n.A, {
              to: "/",
              reloadDocument: !1,
              children: t(c.wasted_home)
            }), "clr" !== a && (0, s.jsx)(o.A, {})]
          })
        }
    },
    96063(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        Animations: () => s,
        LiteMotion: () => c,
        withFadeIn: () => _,
        withFadeUp: () => p
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => k,
        transitions: () => f,
        variants: () => h
      });
      var r = t(39793),
        i = t(93082),
        n = t(88447);
      const o = (0, i.forwardRef)((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, i = n.m[s];
        return (0, r.jsx)(n.LazyMotion, {
          features: n.domAnimation,
          children: (0, r.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      });
      o.displayName = "LiteMotion";
      const c = o,
        l = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        d = {
          ease: "easeIn",
          duration: .4
        },
        m = ({
          children: e
        }) => (0, r.jsx)(n.motion.div, Object.assign({
          className: "rockstargames-sites-gta-gen9f38982805188b64825a72d2c5fac938c",
          variants: l,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: d
        }, {
          children: e
        })),
        _ = e => a => (0, r.jsx)(m, {
          children: (0, r.jsx)(e, Object.assign({}, a))
        }),
        u = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        g = {
          ease: "easeIn",
          duration: .75
        },
        b = ({
          children: e
        }) => (0, r.jsx)(n.motion.div, {
          className: "rockstargames-sites-gta-gen9c1ad787ad6429786650325edac0ffe42",
          variants: u,
          initial: "hidden",
          whileInView: "visible",
          viewport: {
            margin: "-20%",
            once: !0
          },
          transition: g,
          children: e
        }),
        p = e => a => (0, r.jsx)(b, {
          children: (0, r.jsx)(e, {
            ...a
          })
        }),
        f = {
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
        h = {
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
        k = (e = "imageMask", a = "collapsed") => h[e][a]
    },
    62012(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(39793),
        r = t(17301),
        i = t(13331);
      const n = ({
          alt: e,
          className: a,
          src: r,
          role: n,
          style: o
        }) => {
          const [c, l] = (0, i.usePreloadImg)(r);
          let d = r;
          !1 === c && (d = t(9333));
          const {
            width: m,
            height: _
          } = l, u = {
            "--aspect-ratio": Number.isNaN(m / _) ? "" : m / _,
            ...o
          };
          return (0, s.jsx)("img", {
            src: d,
            className: a ?? "",
            alt: e,
            style: u,
            role: n
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
            alt: m,
            src: _
          } = (0, r.useImageParser)(c);
          const {
            isMobile: u
          } = (0, i.useWindowResize)(), g = u ? _.imageMobileStyle : _.imageDesktopStyle;
          _.desktop || _.mobile || (m = "", _ = {
            mobile: t(28839),
            desktop: t(9333)
          });
          let b = c.frame ? `${c.frame} ${o}` : o;
          return (0, s.jsx)("div", {
            className: b,
            style: a,
            children: (0, s.jsx)(n, {
              style: {
                ...l,
                ...c?.style,
                ...g
              },
              src: u ? _.mobile || _.desktop : _?.desktop || _?.mobile,
              alt: m,
              role: d,
              className: e
            })
          })
        }
    },
    13324(e, a, t) {
      "use strict";
      t.d(a, {
        Z: () => j,
        h: () => y
      });
      var s = t(39793),
        r = t(93082),
        i = t(13331),
        n = t(99225),
        o = t(79955),
        c = t.n(o),
        l = t(88447),
        d = t(82199),
        m = t(42909);
      const _ = (0, m.defineMessages)({
        modal_pagination_group_sr_only_label: {
          id: "modal_pagination_group_sr_only_label",
          description: "Aria label describing modal pagination in list",
          defaultMessage: "Now showing {index} of {total}"
        }
      });
      var u = t(81270);
      const g = ({
          current: e = 0,
          total: a = 0,
          announcer: t
        }) => (0, s.jsx)("p", {
          className: "rockstargames-sites-gta-gen9ec4533199609400e6361d508929048f7",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: t(e, a)
        }),
        b = {
          ease: [.77, 0, .175, 1],
          duration: .5
        },
        p = {
          ease: "easeIn",
          duration: .3,
          delay: .5
        },
        f = {
          opacity: 1
        },
        h = ({
          modal: e
        }) => {
          const {
            content: a,
            className: t,
            height: i,
            onClose: o,
            rect: h = {
              left: 0,
              top: 0
            },
            contentStyle: k = {},
            contentClassName: v = "",
            width: y,
            fadeIn: j = !0,
            cardIds: x,
            activeId: w,
            theme: N,
            title: S,
            gtm: C = {},
            aspectRatio: T = "default",
            cardDimensions: E
          } = e, I = (0, r.useRef)(null), {
            left: A,
            top: M
          } = h, P = x?.indexOf(w), {
            track: L
          } = (0, d.useGtmTrack)(), {
            formatMessage: z
          } = (0, m.useIntl)(), R = null !== x && (x?.length || 0) > 1 && ("flag_bg" === N || "fob" === E?.size), D = window.location.href.includes("cms5"), [, B] = (0, n.useSearchParams)(), [G, O] = (0, r.useState)(!1), [$, F] = (0, r.useState)(!1), [V, H] = (0, r.useState)(), q = (0, r.useCallback)(e => {
            "number" == typeof e && x && e < x.length && e > -1 && B({
              info: x[e].toString()
            })
          }, [x, B]), W = (0, r.useCallback)(() => {
            const e = "number" == typeof P && P > -1 ? P - 1 : 0;
            q(e), L({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: S?.toLowerCase(),
              position: P
            })
          }, [P, q, S, L]), U = (0, r.useCallback)(() => {
            const e = "number" == typeof P && P > -1 ? P + 1 : 0;
            q(e), L({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: S?.toLowerCase(),
              position: P
            })
          }, [P, q, S, L]);
          (0, r.useEffect)(() => {
            const e = x?.findIndex(e => e === w);
            "number" == typeof e && (F(e <= 0), O(e >= (x?.length || 0) - 1))
          }, [x, w]);
          const K = (0, r.useRef)(null),
            X = (0, r.useMemo)(() => ({
              initial: {
                y: M,
                x: A,
                top: 0,
                left: 0,
                width: y,
                height: i,
                border: "0px solid transparent",
                background: "transparent",
                marginTop: R ? "0" : ""
              },
              shown: {
                x: "-50%",
                y: "-50%",
                top: "50%",
                left: "50%",
                width: "calc(100vw - (var(--modal-padding) * 2))",
                height: "var(--modal-height)",
                border: "1px solid var(--border-color, #2d2d2d)",
                background: "var(--black-100)",
                marginTop: R ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
                transition: {
                  x: b,
                  y: b,
                  top: b,
                  left: b,
                  width: b,
                  height: b,
                  border: b,
                  background: {
                    delay: .3
                  }
                }
              }
            }), [M, A, y, i, R]);
          (0, r.useEffect)(() => {
            const e = e => {
              "function" == typeof o && "Escape" === e.key && (o(), L({
                event: "modal_close",
                element_placement: S?.toLowerCase(),
                ...C
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }, [C, o, S, L]);
          const Y = (0, r.useCallback)(() => {
              "function" == typeof o && (o(), L({
                event: "modal_close",
                element_placement: S?.toLowerCase(),
                ...C
              }))
            }, [C, o, S, L]),
            Z = (0, r.useCallback)((e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const s = e.children[t];
                if (s.scrollHeight > s.clientHeight) return s;
                const r = Z(s, a - 1);
                if (r) return r
              }
              return null
            }, []),
            J = (0, r.useCallback)(e => {
              let a;
              return V?.queried ? a = V.element : (a = Z(e, 2), H({
                queried: !0,
                element: a
              })), a
            }, [V?.element, V?.queried, Z]),
            Q = (0, r.useCallback)(e => {
              if (I?.current?.children) {
                let a;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = J(I.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            }, [J]),
            ee = j ? 0 : 1,
            ae = (0, r.useMemo)(() => (0, s.jsx)(l.motion.button, {
              className: "rockstargames-sites-gta-gen9f462dceb5efde1dd4885f34f45132e3d",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: p,
              onClick: () => {
                Y()
              },
              onKeyDown: Q,
              onKeyUp: Q
            }), [Q, Y]),
            te = Boolean(S),
            se = D ? r.Fragment : c(),
            re = P ?? 0,
            ie = x?.length,
            ne = (0, r.useCallback)((e, a) => z(_.modal_pagination_group_sr_only_label, {
              index: `${e+1}`,
              total: `${a}`
            }), [z]);
          return (0, r.useMemo)(() => (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9a1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": R,
            "data-aspect-ratio": T,
            children: (0, s.jsx)(se, {
              children: (0, s.jsxs)("div", {
                id: "modal",
                "data-testid": "modal",
                "aria-modal": "true",
                "aria-label": te ? S : void 0,
                children: [(0, s.jsx)(l.motion.div, {
                  className: "rockstargames-sites-gta-gen9cf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: f,
                  transition: b,
                  onClick: () => Y()
                }), R && (0, s.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9d5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, s.jsx)(g, {
                    current: re,
                    total: ie,
                    announcer: ne
                  }), (0, s.jsxs)(l.motion.div, {
                    className: "rockstargames-sites-gta-gen9dbb0055ba799f28f1a2e41026b8781e8",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: p,
                    children: [(0, s.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: W,
                      disabled: $,
                      onKeyDown: Q,
                      onKeyUp: Q
                    }), (0, s.jsxs)("div", {
                      className: "rockstargames-sites-gta-gen9e316695281c4c56337307741bda1371f",
                      "data-theme": N,
                      children: [" ", re + 1, (0, s.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9c1ee424eae15f7b789c86e634df9e28d"
                      }), ie, " "]
                    }), (0, s.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: U,
                      disabled: G,
                      onKeyDown: Q,
                      onKeyUp: Q,
                      "data-autofocus": !0
                    })]
                  }), ae]
                }), (0, s.jsx)(l.motion.div, {
                  className: "rockstargames-sites-gta-gen9e708da42918d8bbff9a8e1a36a2c4366",
                  ref: K,
                  initial: {
                    ...X.initial,
                    opacity: 0
                  },
                  animate: {
                    ...X.shown,
                    opacity: 1
                  },
                  transition: {
                    ...b,
                    opacity: {
                      duration: .2,
                      delay: .15
                    }
                  },
                  style: k,
                  children: (0, s.jsxs)(l.motion.div, {
                    className: (0, u.default)("rockstargames-sites-gta-gen9a7d77f83f629e9ae93f6934c8ba007b0", t),
                    children: [!R && ae, (0, s.jsx)(l.motion.div, {
                      className: (0, u.default)("rockstargames-sites-gta-gen9f26fc1babb8dd1284d4c03b3dabff714", v),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: p,
                      ref: I,
                      children: a
                    })]
                  })
                })]
              })
            })
          }), [R, T, se, te, S, re, ie, ne, W, $, Q, N, U, G, ae, X.initial, X.shown, k, t, v, ee, a, Y])
        },
        k = [{}, () => {}],
        v = (0, i.setContextItem)({
          context: (0, r.createContext)(k),
          key: "modalContext"
        }),
        y = () => (0, r.useContext)(v),
        j = ({
          children: e
        }) => {
          const [a, t] = (0, r.useState)(), {
            setBodyIsLocked: n
          } = (0, i.useBodyScrollable)("ModalProvider"), o = (0, r.useMemo)(() => a?.content ? (0, s.jsx)(h, {
            modal: a
          }) : null, [a]), c = (0, r.useCallback)(() => n(!1), [n]), l = Boolean(a?.content);
          return (0, r.useEffect)(() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          }), [c]), (0, r.useEffect)(() => {
            n(l)
          }, [l]), (0, s.jsx)(v.Provider, {
            value: [o, t],
            children: e
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
    25088(e, a, t) {
      "use strict";
      var s = t(39793),
        r = t(99225),
        i = t(82199),
        n = t(41886);
      const o = ({
          children: e,
          className: a,
          onClick: t,
          style: r,
          innerRef: i = null
        }) => (0, s.jsx)("button", {
          className: a,
          onClick: t,
          style: r,
          type: "button",
          ref: i,
          children: e
        }),
        c = ({
          children: e,
          className: a,
          onClick: t,
          style: i,
          to: n
        }) => (0, s.jsx)(r.NavLink, {
          className: a,
          onClick: t,
          style: i,
          to: n,
          children: e
        });
      t.d(a, ["A", 0, ({
        altText: e = "",
        className: a = "",
        text: t,
        onClick: r,
        btnColor: l = "#fff",
        labelColor: d = "#000",
        type: m = "",
        icon: _,
        size: u,
        secondText: g,
        consoleBtn: b = !1,
        img: p,
        to: f = !1,
        gtm: h,
        innerRef: k = null
      }) => {
        const {
          track: v
        } = (0, i.useGtmTrack)(), y = [n.Ay.plusButton, n.Ay[m] ?? "", n.Ay[u] ?? "", n.Ay[b] ?? "", a].join(" "), j = {
          "--hvr-color": l ?? d,
          "--hvr-bg-color": d ?? l,
          "--hvr-border-color": l ?? d
        }, x = (0, s.jsxs)(s.Fragment, {
          children: [p ? (0, s.jsx)("img", {
            src: p,
            alt: (e || t).replace(/\|/g, " ")
          }) : "", (0, s.jsxs)("div", {
            className: n.Ay.btnText,
            icon: _,
            children: [t, g ? (0, s.jsx)("span", {
              children: g
            }) : ""]
          })]
        }), w = e => {
          r?.(e), h && v({
            event: "cta_other",
            text: t,
            ...h,
            link_url: f || ""
          })
        };
        if (f) {
          if (f.startsWith("http")) {
            const a = f.startsWith(document.location.origin) ? "_self" : "_blank";
            return (0, s.jsx)("span", {
              children: (0, s.jsx)("a", {
                "aria-label": e,
                href: f,
                className: y,
                target: a,
                onClick: w,
                children: x
              })
            })
          }
          return (0, s.jsx)(c, {
            className: y,
            onClick: w,
            style: j,
            to: f,
            children: x
          })
        }
        return (0, s.jsx)(o, {
          className: a,
          onClick: w,
          style: j,
          innerRef: k,
          children: x
        })
      }])
    },
    70301(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => x
      });
      var s = t(39793),
        r = t(93082),
        i = t(88447),
        n = t(96063),
        o = t(42909),
        c = t(66956),
        l = t(82199),
        d = t(42285),
        m = t(17301),
        _ = t(14653),
        u = t(281),
        g = t(79955),
        b = t.n(g),
        p = t(25088);
      const f = {
        addedInfo: "rockstargames-sites-gta-gen9ecebdfbbb8664273e60cf5b0124abe06",
        backgroundImage: "rockstargames-sites-gta-gen9d32ec6c5086cedcceae1d072aee4e056",
        bottomText: "rockstargames-sites-gta-gen9c5ffa779bb09039356fe8883b4fcac22",
        btnArea: "rockstargames-sites-gta-gen9df5ebafc18cd32806cae851c9f6dec49",
        buyNowArea: "rockstargames-sites-gta-gen9b12dd0413eee1cad648d006aca06d858",
        buyNowPlatformButton: "rockstargames-sites-gta-gen9fbde99d72c4c6ef46d007b069f064b7b",
        card: "rockstargames-sites-gta-gen9ad0ad646806352ae0a799fec0ba233b3",
        closeBtn: "rockstargames-sites-gta-gen9e4a30069b67e78d17d8b259fd6fbebf9",
        closed: "rockstargames-sites-gta-gen9d0d5bbebcc175ad1df63c09efd45a148",
        content: "rockstargames-sites-gta-gen9bda7a52557d65b5b77591cb72cd816cd",
        contentGrid: "rockstargames-sites-gta-gen9a39b9b077c1e79d0da875a297e83fdff",
        ctaBtn: "rockstargames-sites-gta-gen9ddc663b4618b40b41a0448e187c8eeec",
        ctaBtnText: "rockstargames-sites-gta-gen9a4aaa62eabc82bb4cb94fd3d7ac7ffa5",
        foregroundImage: "rockstargames-sites-gta-gen9c08169fa5e30f0ab58d83b95b6547b50",
        imageGroup: "rockstargames-sites-gta-gen9e4ac1266f37004b14c4410e015e505d0",
        imgDesktop: "rockstargames-sites-gta-gen9c3829d9fc2bc7587466bf64199ca83c9",
        imgMobile: "rockstargames-sites-gta-gen9b0ed43ba8b973198107dd81517c432c5",
        linkList: "rockstargames-sites-gta-gen9b74531e8a5ef761ba8892f5b8f90c735",
        linksArea: "rockstargames-sites-gta-gen9e189b898f0dd25d9af82c5b311dafb1f",
        nextBtn: "rockstargames-sites-gta-gen9b7b5802c64ea1aad5e4c769bca1f5132",
        pillBtn: "rockstargames-sites-gta-gen9f1a2211e41cad20f60731249de0174f6",
        platforms: "rockstargames-sites-gta-gen9fcb7a2232b11627c161d301f7ff13d11",
        prevBtn: "rockstargames-sites-gta-gen9e31eb460f8d416b1d1e621eb14129b13",
        responsiveImages: "rockstargames-sites-gta-gen9a7369afacbaea1cb98000a7ef486f54c",
        selected: "rockstargames-sites-gta-gen9ffa153ee7956b1766e65c6fbcedb9563",
        titleArea: "rockstargames-sites-gta-gen9d6a81af377181410bef0ef4cf3b35add",
        topArea: "rockstargames-sites-gta-gen9ca61c1420b75faf8d3edc65b1c737f5e"
      };
      var h = t(41886);
      const k = (0, o.defineMessages)({
          next_button_aria_label: {
            id: "next_button_aria_label",
            description: "Aria label for next button in game carousel for Buy Now",
            defaultMessage: "Next Game"
          },
          previous_button_aria_label: {
            id: "previous_button_aria_label",
            description: "Aria label for previous button in game carousel for Buy Now ",
            defaultMessage: "Previous Game"
          }
        }),
        v = ({
          className: e,
          images: a
        }) => {
          const t = (0, m.useGetCdnSource)(a?.mobile?.full_src ?? null),
            r = (0, m.useGetCdnSource)(a?.desktop?.full_src ?? t);
          return (0, s.jsxs)("div", {
            className: [e, f.responsiveImages].join(" "),
            children: [t ? (0, s.jsx)("div", {
              className: f.imgMobile,
              style: {
                background: `url(${t}) no-repeat center/cover`
              }
            }) : "", r ? (0, s.jsx)("div", {
              className: f.imgDesktop,
              style: {
                background: `url(${r}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        y = ({
          addedInfo: e = null,
          buynowbtn: a = null,
          description: n = null,
          images: o,
          links: c = [],
          title: d = null
        }) => {
          const {
            track: m
          } = (0, l.useGtmTrack)(), [u, g] = (0, r.useState)(!1), k = (0, r.useRef)(null), y = (0, r.useRef)(null), j = {
            type: "spring",
            stiffness: 425,
            damping: 40
          }, x = {
            type: "spring",
            stiffness: 650,
            damping: 45
          }, w = {
            ease: "easeOut",
            duration: .9,
            delay: .3
          }, N = {
            open: {
              opacity: 0,
              transition: {
                ease: "easeOut",
                duration: .3
              }
            },
            closed: {
              opacity: 1,
              transition: w
            }
          }, S = {
            open: {
              opacity: 1,
              display: "grid",
              height: "auto",
              transition: {
                opacity: w,
                height: j
              }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: {
                opacity: {
                  ease: "easeOut",
                  duration: .1
                },
                height: x
              },
              transitionEnd: {
                display: "none"
              }
            }
          }, C = {
            open: {
              cursor: "default",
              "--cta-border-color": "var(--white-15)",
              "--cta-background-color": "rgba(255,255,255,.1)",
              "--cta-background-color-noBlur": "var(--black-100)",
              gridGap: "var(--grid-gap-sm)",
              transition: j,
              paddingBottom: "var(--card-padding)",
              "--btn-hover-bg-color": "rgba(255,255,255,.1)",
              "--btn-hover-bg-color-noBlur": "var(--black-100)",
              "--btn-hover-font-color": "none",
              "--btn-hover-border-color": "var(--white-15)"
            },
            closed: {
              "--cta-border-color": "var(--white-100)",
              "--cta-background-color": "inherit",
              "--cta-background-color-noBlur": "inherit",
              gridGap: 0,
              transition: x,
              transitionEnd: {
                "--btn-hover-bg-color": "inherit",
                "--btn-hover-bg-color-noBlur": "inherit",
                "--btn-hover-font-color": "inherit",
                "--btn-hover-border-color": "inherit"
              }
            }
          };
          return (0, s.jsx)(_.qr, {
            children: (0, s.jsxs)("div", {
              className: f.card,
              children: [(0, s.jsxs)("div", {
                className: f.imageGroup,
                children: [(0, s.jsx)(v, {
                  className: f.backgroundImage,
                  images: o?.background
                }), (0, s.jsx)(v, {
                  className: f.foregroundImage,
                  images: o?.foreground
                })]
              }), (0, s.jsxs)("div", {
                className: f.content,
                children: [(0, s.jsxs)(i.motion.div, {
                  className: f.contentGrid,
                  animate: u ? "open" : "closed",
                  variants: N,
                  children: [(0, s.jsxs)("div", {
                    className: f.titleArea,
                    children: [(0, s.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: d
                      }
                    }), (0, s.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: n
                      }
                    })]
                  }), c.length ? (0, s.jsx)("div", {
                    className: f.platforms,
                    children: c.map((e, a) => (0, s.jsx)("div", {
                      className: f[e.platform],
                      children: e.platform ? (0, s.jsx)("img", {
                        src: t(85394)(`./${e.platform}.svg`),
                        alt: `${"xboxone"===e.platform?"xbox one":e.platform}`
                      }) : ""
                    }, `${e.platform+a}`))
                  }) : ""]
                }), e ? (0, s.jsx)(i.motion.p, {
                  className: f.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: e
                  },
                  animate: u ? "open" : "closed",
                  variants: N
                }) : "", a ? (0, s.jsx)(b(), {
                  active: u,
                  focusTrapOptions: {
                    fallbackFocus: "#link-area",
                    onDeactivate: () => g(!1),
                    clickOutsideDeactivates: !0
                  },
                  children: (0, s.jsxs)(i.motion.div, {
                    className: [f.ctaBtn, h.Ay.plusButton, u ? "" : f.closed].join(" "),
                    animate: u ? "open" : "closed",
                    variants: C,
                    initial: !1,
                    children: [(0, s.jsx)(i.motion.button, {
                      className: [f.ctaBtnText, h.Ay.btnText].join(" "),
                      animate: u ? "open" : "closed",
                      variants: {
                        open: {
                          pointerEvents: "none",
                          cursor: "default",
                          paddingTop: "var(--card-padding)",
                          paddingBottom: "0",
                          paddingLeft: "var(--card-padding)",
                          paddingRight: "var(--card-padding)"
                        },
                        closed: {
                          cursor: "pointer",
                          paddingTop: "var(--padding-sm)",
                          paddingBottom: "var(--padding-sm)",
                          paddingLeft: "var(--padding-md)",
                          paddingRight: "var(--padding-md)"
                        }
                      },
                      initial: !1,
                      onClick: () => {
                        m({
                          event: "select_platform",
                          text: "select platform",
                          element_placement: `buy now > ${d?.toLowerCase()}`
                        }), g(!u)
                      },
                      onAnimationComplete: () => {
                        k?.current?.focus()
                      },
                      ref: y,
                      tabIndex: u ? -1 : 0,
                      children: a
                    }), (0, s.jsxs)(i.motion.div, {
                      id: "link-area",
                      className: [f.linksArea, u ? f.showLinks : ""].join(" "),
                      animate: u ? "open" : "closed",
                      variants: S,
                      initial: !1,
                      tabIndex: -1,
                      children: [(0, s.jsx)("button", {
                        type: "button",
                        className: f.closeBtn,
                        onClick: () => {
                          m({
                            event: "cta_other",
                            text: "close",
                            element_placement: `buy now > ${d?.toLowerCase()} > select platform`
                          }), g(!1), y?.current?.focus()
                        },
                        ref: k,
                        children: (0, s.jsx)("img", {
                          src: t(70930),
                          alt: "Close menu button"
                        })
                      }), (0, s.jsx)("div", {
                        className: f.linkList,
                        children: c.map((e, a) => {
                          return (0, s.jsx)(p.A, {
                            className: f.buyNowPlatformButton,
                            type: "blackBtn",
                            size: "large",
                            img: t(85394)(`./${e.platform}.svg`),
                            consoleBtn: e.platform,
                            to: e.href,
                            altText: e?.altText,
                            onClick: (r = e.platform, i = e.href, () => {
                              m({
                                event: "cta_store_link",
                                text: r,
                                link_url: i,
                                element_placement: `buy now > ${d?.toLowerCase()} > select platform`
                              })
                            }),
                            "aria-hidden": !u
                          }, `${e.platform+a}`);
                          var r, i
                        })
                      })]
                    })]
                  })
                }) : ""]
              })]
            })
          })
        };
      y.displayName = "SwiperSlide";
      const j = {
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
            enabled: !0
          },
          768: {
            slidesPerView: 1.25,
            spaceBetween: 16,
            enabled: !0
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 18,
            enabled: !1
          },
          1920: {
            slidesPerView: 2,
            spaceBetween: 20,
            enabled: !1
          },
          2560: {
            slidesPerView: 2,
            spaceBetween: 22,
            enabled: !1
          }
        },
        x = n.withFadeIn((0, c.A)(({
          cards: e = [],
          bottomText: a,
          topText: t,
          ...i
        }) => {
          const {
            track: n
          } = (0, l.useGtmTrack)(), {
            formatMessage: c
          } = (0, o.useIntl)(), {
            ref: m,
            inView: g
          } = (0, d.useInView)({
            threshold: .6
          }), [b, p] = (0, r.useState)(!1), h = (0, r.useRef)(null);
          return (0, r.useEffect)(() => {
            g && !b && (n({
              event: "page_section_impression",
              element_placement: i?._memoq?.topText?.toLowerCase()
            }), p(!0))
          }, [g]), (0, s.jsxs)("div", {
            className: f.buyNowArea,
            ref: m,
            children: [(0, s.jsxs)("div", {
              className: f.topArea,
              children: [t ? (0, s.jsx)("h2", {
                children: t
              }) : "", (0, s.jsxs)("div", {
                className: f.btnArea,
                children: [(0, s.jsx)("button", {
                  className: f.prevBtn,
                  type: "button",
                  "aria-label": c(k.previous_button_aria_label)
                }), (0, s.jsx)("button", {
                  className: f.nextBtn,
                  type: "button",
                  "aria-label": c(k.next_button_aria_label)
                })]
              })]
            }), e?.length ? (0, s.jsx)(_.RC, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${f.nextBtn}`,
                prevEl: `.${f.prevBtn}`
              },
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
              keyboard: {
                enabled: !0
              },
              onSwiper: e => {
                h.current = e, e.el.addEventListener("focusin", a => {
                  if (!(a.target instanceof HTMLElement)) return;
                  const t = a.target?.closest(".swiper-slide");
                  if (t) {
                    const a = Array.from(e.slides).indexOf(t); - 1 !== a && a !== e.activeIndex && e.slideTo(a)
                  }
                })
              },
              preventClicks: !1,
              preventClicksPropagation: !1,
              touchStartPreventDefault: !1,
              modules: [u.A],
              breakpoints: j,
              children: e.map(e => (0, r.createElement)(y, {
                ...e,
                key: JSON.stringify(e)
              })) ?? ""
            }) : "", a ? (0, s.jsx)("p", {
              className: f.bottomText,
              children: a
            }) : ""]
          })
        }))
    },
    91482(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => v
      });
      var s = t(39793),
        r = t(93082),
        i = t(99225),
        n = t(40283),
        o = t(88447),
        c = t(11400),
        l = t(48478),
        d = t(42909),
        m = t(82199),
        _ = t(9224);
      const u = (0, d.defineMessages)({
          open_icon_aria_label: {
            id: "open_icon_aria_label",
            description: "Aria label for open icon in expandable menu item",
            defaultMessage: "Open"
          },
          close_icon_aria_label: {
            id: "close_icon_aria_label",
            description: "Aria label for close icon in expandable menu item",
            defaultMessage: "Close"
          }
        }),
        g = {
          activeSection: "rockstargames-sites-gta-gen9e66ed2c434929d07a41d7019123da090",
          chevronIcon: "rockstargames-sites-gta-gen9cc324882779bfdabbbeda1b25717e68c",
          guide: "rockstargames-sites-gta-gen9b6f1057e3bd5c447f72a0f00fa9632bc",
          guideLink: "rockstargames-sites-gta-gen9b3285d9633fb6fbf931c857d897f19d4",
          guideLinkCurrent: "rockstargames-sites-gta-gen9edcad0840b5bebf39b5304ec183f70a2",
          guideList: "rockstargames-sites-gta-gen9ca8f0699653b08699348f5bef86c240c",
          guideNav: "rockstargames-sites-gta-gen9df1f6e9822c286cb164d47ff7eaedf07",
          guideSectionLink: "rockstargames-sites-gta-gen9e187495979c04c463c979a6ece536e03",
          headerHidden: "rockstargames-sites-gta-gen9baf6b529fe7eee619ab1e3f09b328245",
          hideSection: "rockstargames-sites-gta-gen9b233dad1b29078fc9fb1f641e49ab6a2",
          pillBtn: "rockstargames-sites-gta-gen9aa77a5ebc89b1f82d5b2d2b285dbb5f9",
          sections: "rockstargames-sites-gta-gen9a02853141523b5f14a0ed182d7908a21",
          selected: "rockstargames-sites-gta-gen9d90123bfede42f33615d4b38c7fa4bd5",
          topLevelButton: "rockstargames-sites-gta-gen9f33dd3d212718aed806c47e8d3708e26"
        },
        b = {
          ease: "easeInOut",
          duration: .3
        },
        p = {
          closed: {
            opacity: 0,
            visibility: "hidden",
            height: "0px"
          },
          open: {
            opacity: 1,
            visibility: "visible",
            height: "auto"
          }
        },
        f = ({
          to: e,
          title: a,
          id_hash: t,
          query: r
        }) => {
          const {
            track: i
          } = (0, m.useGtmTrack)(), {
            state: n
          } = (0, _.E_)(), {
            activeSection: o
          } = n, c = r !== o ? o === t : r === t;
          return (0, s.jsx)(l.A, {
            to: e,
            className: [g.guideSectionLink, c ? g.activeSection : ""].join(" "),
            onClick: () => {
              i({
                event: "nav_click",
                element_placement: "guide nav"
              })
            },
            children: a
          }, e)
        },
        h = ({
          sections: e,
          open: a
        }) => {
          const [t] = (0, i.useSearchParams)();
          return (0, s.jsx)("div", {
            className: [g.sections, !a && g.hideSection].join(" "),
            children: e?.map(({
              id_hash: e,
              title: a,
              to: r
            }, i) => (0, s.jsx)(f, {
              id_hash: e,
              query: t,
              title: a,
              to: r
            }, i))
          })
        },
        k = ({
          currentId: e,
          group: a
        }) => {
          const {
            formatMessage: t
          } = (0, d.useIntl)(), i = (0, n.findIndex)(a?.children, ({
            id_hash: a
          }) => a === e), [m, _] = (0, r.useState)(-1 !== i);
          return (0, s.jsxs)("div", {
            className: g.guideList,
            children: [(0, s.jsxs)("button", {
              "aria-expanded": m,
              className: [g.topLevelButton, g.guideLink, m && g.guideLinkCurrent].join(" "),
              type: "button",
              onClick: () => _(e => !e),
              children: [a.title, (0, s.jsx)(c.ChevronDown, {
                className: g.chevronIcon,
                label: t(u.close_icon_aria_label)
              })]
            }), (0, s.jsx)(o.motion.nav, {
              animate: m ? "open" : "closed",
              variants: p,
              transition: b,
              children: a?.children?.map(({
                children: a,
                id_hash: t,
                title: r,
                to: n
              }, o) => (0, s.jsxs)("div", {
                className: g.guide,
                children: [(0, s.jsx)(l.A, {
                  className: [g.guideLink, e === t ? g.guideLinkCurrent : ""].join(" "),
                  to: n,
                  tabIndex: m ? 0 : 1,
                  children: r
                }), o === i && a?.length ? (0, s.jsx)(h, {
                  sections: a,
                  open: m
                }) : ""]
              }, r))
            })]
          })
        },
        v = ({
          currentId: e
        }) => {
          const a = (0, _.hY)(),
            {
              state: {
                headerHeight: t,
                headerHidden: r
              }
            } = (0, _.E_)();
          return (0, s.jsx)("div", {
            className: [g.guideNav, r ? g.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${t}px`
            },
            children: a?.map(a => (0, s.jsx)(k, {
              currentId: e,
              group: a
            }, a.id_hash))
          })
        }
    },
    2091(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(39793),
        r = t(93082);
      var i = t(13331);
      const n = ({
        children: e,
        style: a,
        theme: t
      }) => {
        const [n, o] = (0, r.useState)(t);
        return (0, r.useEffect)(() => {
          t && o(t)
        }, [t]), (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9bdd63bd70824357b0aedc604c0fe628d",
          style: (0, i.safeStyles)(a),
          "data-theme": n,
          children: e
        })
      }
    },
    73651(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(39793),
        r = t(31879),
        i = t.n(r);
      const n = ({
        id: e
      }) => (0, s.jsx)("div", {
        className: "rockstargames-sites-gta-gen9ded9c0fd97227bbcd0fa5f6428ef97cb",
        children: (0, s.jsx)(i(), {
          autoplay: !0,
          context: "embed",
          id: e,
          endBehavior: "stillframe",
          wrapper: !1,
          titleCrop: "2rem"
        })
      })
    },
    9224(e, a, t) {
      "use strict";
      t.d(a, {
        E_: () => i,
        Yh: () => n.Y,
        qj: () => _,
        hY: () => c,
        hI: () => d
      });
      var s = t(13331);
      const r = (0, s.makeVar)({
          brand: null,
          headerHeight: 0,
          headerHidden: !1,
          mobileNavOpen: !1,
          activeSection: null
        }),
        i = () => {
          const e = (0, s.useReactiveVar)(r),
            a = e => {
              const a = {
                ...r(),
                ...e
              };
              r(a)
            };
          return {
            state: e,
            setBrand: e => {
              a({
                brand: e
              })
            },
            setHeaderHeight: e => {
              a({
                headerHeight: e
              })
            },
            setMobileNavOpen: e => {
              a({
                mobileNavOpen: e
              })
            },
            setActiveSection: e => {
              a({
                activeSection: e
              })
            }
          }
        };
      var n = t(70956),
        o = t(43657);
      const c = () => {
        const {
          data: e
        } = (0, s.useQuery)(o.TinaModulesTree, {
          variables: {
            type: "gen9-guide-group"
          }
        });
        return e?.tinaModulesTree ?? null
      };
      var l = t(93082);
      const d = () => {
        const [e] = (0, l.useState)([{
          title: "Overview",
          to: "/gta-v"
        }, {
          title: "GTA Online",
          to: "/gta-online",
          activeExact: !0
        }, {
          title: "GTA+",
          to: "/gta-plus"
        }, {
          title: "Guides",
          to: "/gta-online/guides",
          children_key: "guides"
        }, {
          title: "Support",
          to: "https://support.rockstargames.com"
        }]);
        return e
      };
      t(82199);
      var m = t(64303);
      const _ = (e, a = " > ") => {
        const [t, r] = (0, l.useState)(null), {
          data: i
        } = (0, s.useQuery)(m.TinaModulesTree, {
          variables: {
            id: e
          },
          skip: !e
        });
        return (0, l.useEffect)(() => {
          const e = i?.tinaModulesTree?.[0]?.tree ?? null;
          e && r(e.map(({
            title: e
          }) => e).join(a))
        }, [i, a, e]), t
      }
    },
    70956(e, a, t) {
      "use strict";
      t.d(a, {
        B: () => d,
        Y: () => l
      });
      var s = t(39793),
        r = t(93082),
        i = t(99225),
        n = t(13331),
        o = t(9224);
      const c = (0, n.setContextItem)({
          context: (0, r.createContext)(),
          key: "gen9Data"
        }),
        l = () => (0, r.useContext)(c),
        d = ({
          children: e
        }) => {
          const [a, t] = (0, r.useState)(null), [l] = (0, i.useSearchParams)(), {
            setActiveSection: d
          } = (0, o.E_)(), {
            pauseUserShouldSeeMore: m
          } = (0, n.useScroll)(), _ = (0, r.useCallback)(e => {
            if (e !== l.get("section")) return void d(e);
            const a = document.getElementsByName(l.get("section"))?.[0];
            a && (m(), d(l.get("section")), a.scrollIntoView({
              behavior: "auto"
            }))
          }, [l.get("section"), a]);
          (0, r.useEffect)(() => {
            l.get("section") && _(l.get("section"))
          }, [l.get("section")]);
          const u = (0, r.useMemo)(() => ({
            announcePresence: _,
            section: a,
            setSection: t
          }), [_, a, t]);
          return (0, s.jsx)(c.Provider, {
            value: u,
            children: e
          })
        }
    },
    91659(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        componentsForTinaParser: () => $n,
        componentsForTinaParserGuide: () => Fn
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => ys,
        Link: () => js
      });
      var r = {};
      t.r(r), t.d(r, {
        A: () => Ca.A,
        Lt: () => oe,
        Y$: () => ct,
        Ex: () => Ve,
        xz: () => X,
        $n: () => Za.A,
        e2: () => Z,
        IO: () => _.A,
        FN: () => u.A,
        yJ: () => lt,
        aU: () => j,
        uo: () => bt,
        HV: () => ut,
        RO: () => x.A,
        g$: () => vt.A,
        Wd: () => yt.A,
        dT: () => xt,
        ms: () => Ct,
        C9: () => Et,
        Qd: () => E.A,
        fF: () => At,
        uR: () => C,
        n0: () => T,
        KY: () => Y.A,
        JS: () => q,
        xA: () => M,
        wt: () => ae,
        lq: () => ee,
        X4: () => k,
        wB: () => ft,
        LQ: () => kt,
        DN: () => Ie.A,
        _q: () => Lt,
        Yf: () => zt,
        bQ: () => re.A,
        c$: () => Ra.A,
        z1: () => Xt,
        x0: () => Ft,
        LY: () => qt,
        cC: () => Ut,
        Db: () => Ot,
        _J: () => ye,
        lK: () => Jt,
        Xp: () => Se,
        Zx: () => xe,
        GL: () => Ne,
        X9: () => Te,
        AU: () => Ds.Ay,
        uE: () => Pe,
        GW: () => Le.A,
        nR: () => es,
        t5: () => ts,
        Oe: () => rs,
        IP: () => ns,
        oC: () => cs,
        wE: () => ds,
        p3: () => se.A,
        LU: () => Rs,
        Vu: () => _s,
        ZL: () => us,
        eq: () => gs,
        gp: () => Fe,
        Gd: () => bs.A,
        wv: () => ps.A,
        U1: () => Dt,
        Qy: () => fs,
        r9: () => hs,
        mL: () => qa,
        rb: () => Be.A,
        QQ: () => ks,
        S4: () => za,
        Xy: () => Ee.A,
        mj: () => De,
        O1: () => s,
        i3: () => Ns,
        _0: () => Ms,
        s6: () => Ps,
        z4: () => Ls.A,
        CS: () => Ge,
        XM: () => Be.X,
        oS: () => zs.A,
        Bg: () => $.A
      });
      var i = {};
      t.r(i), t.d(i, {
        A: () => Ca.A,
        AlertDialog: () => oe,
        AudioPlayer: () => ct,
        Badge: () => Ve,
        Brands: () => X,
        Button: () => Za.A,
        ButtonGroup: () => Z,
        CalloutSection: () => _.A,
        Carousel: () => u.A,
        CharacterCard: () => lt,
        ConditionalBlock: () => j,
        CookieAB: () => bt,
        CountryInputField: () => ut,
        Cta: () => x.A,
        DescriptionArea: () => vt.A,
        DiscountsBadge: () => yt.A,
        DotLoader: () => xt,
        Dropdown: () => Ct,
        Embed: () => Et,
        ExpandingPlatformButton: () => E.A,
        FadeInContent: () => At,
        FoundryButton: () => C,
        FoundryIconButton: () => T,
        Gen9Button: () => Y.A,
        Gen9CoreCarousel: () => q,
        Grid: () => M,
        HTMLElement: () => ae,
        Hero: () => ee,
        HookStore: () => k,
        ImageTextGroup: () => ft,
        ImageTextGroupGroup: () => kt,
        ImageWithBadge: () => Ie.A,
        LayeredImage: () => Lt,
        Lightbox: () => zt,
        LoadingAnimation: () => re.A,
        MultiSourceImage: () => Ra.A,
        NewswireBlocks: () => Xt,
        NewswireCard: () => Ft,
        NewswireList: () => qt,
        NewswireRelated: () => Ut,
        NewswireTag: () => Ot,
        OrderedList: () => ye,
        Paging: () => Jt,
        ParallaxCacheBuster: () => Se,
        ParallaxInnerLayer: () => xe,
        ParallaxOuterLayer: () => Ne,
        ParallaxWrapper: () => Te,
        PlatformTag: () => Ds.Ay,
        PromoModule: () => Pe,
        Rating: () => Le.A,
        ResponsiveFlexBox: () => es,
        ResponsiveFlexItem: () => ts,
        ResponsiveGridBox: () => rs,
        ResponsiveGridItem: () => ns,
        ResponsiveImg: () => cs,
        ResponsiveSection: () => ds,
        RockstarLogo: () => se.A,
        RpCategory: () => Rs,
        SafeHtml: () => _s,
        ScrollSection: () => us,
        ScrollToTop: () => gs,
        ScrollTracker: () => Fe,
        SearchBox: () => bs.A,
        Separator: () => ps.A,
        SrcsetImage: () => Dt,
        StorybookWrapper: () => fs,
        TextFit: () => hs,
        ThumbsGallery: () => qa,
        TinaModuleFetchNRender: () => Be.A,
        TinaWrapper: () => ks,
        TrackList: () => za,
        UnorderedList: () => Ee.A,
        UserVote: () => De,
        VideoCard: () => s,
        VideoCarousel: () => Ns,
        VideoList: () => Ms,
        VisuallyHidden: () => Ps,
        Wasted: () => Ls.A,
        framer: () => Ge,
        useTinaModuleFetchByIds: () => Be.X,
        withSearchbarErrorBoundary: () => zs.A,
        withSimpleErrorBoundary: () => $.A
      });
      var n = {};
      t.r(n), t.d(n, {
        defaultVideo: () => Ur,
        vinewoodClub: () => Kr
      });
      var o = {};
      t.r(o), t.d(o, {
        BrandMessage: () => Ar,
        BuyNow: () => rr.A,
        ClaimCountdown: () => Mr,
        CommunityChallenges: () => tr.default,
        Disclaimer: () => pt,
        DiscoverCallout: () => mr,
        ElevatorPitch: () => Vr,
        FAQ: () => fr,
        Guide: () => kr,
        GuideGroup: () => yr,
        GuideIntro: () => Nr,
        GuideNavDesktop: () => Pr.A,
        GuideSection: () => Sr,
        Hero: () => Gr,
        HeroVideo: () => Xr,
        ImageTextGroup: () => ft,
        ImageTextGroupGroup: () => kt,
        LinkoutSection: () => Tr,
        Logo: () => mi,
        SectionTitle: () => _i,
        StickyColumn: () => Jr,
        Summary: () => ei,
        SummaryCard: () => ai,
        Tile: () => ri,
        TinaWrapper: () => Er.A,
        TitleImage: () => Yr,
        TwitchDrops: () => sr.default,
        ValueProp: () => li,
        VideoPlayerWrapper: () => ui.A
      });
      var c = {};
      t.r(c), t.d(c, {
        applestore: () => Ei,
        googleplay: () => Ii,
        left: () => Ai,
        pc: () => Mi,
        pcalt: () => Pi,
        ps: () => Li,
        ps3: () => zi,
        ps4: () => Ri,
        ps5: () => Di,
        right: () => Bi,
        switch: () => Gi,
        x: () => Oi,
        xbox: () => $i,
        xboxone: () => Fi,
        xboxseriesxs: () => Vi
      });
      var l = {};
      t.r(l), t.d(l, {
        Actions: () => rn,
        Badge: () => sn,
        Button: () => ln,
        Container: () => Ji,
        Content: () => an,
        Description: () => on,
        Disclaimer: () => cn,
        Footer: () => en,
        Header: () => Qi,
        Heading: () => nn,
        Image: () => tn,
        LinkPSButton: () => _n,
        LinkXBoxButton: () => mn,
        Loading: () => un,
        PlatformButton: () => dn,
        Root: () => Zi,
        RootContext: () => Yi
      });
      var d = t(31879),
        m = t.n(d),
        _ = t(93655),
        u = t(43623),
        g = t(39793),
        b = t(93082),
        p = t(99225),
        f = t(13331),
        h = t(82199);
      const k = (0, t(54472).FF)(),
        v = e => e.some(e => !e),
        y = ({
          condition: e = null,
          children: a
        }) => {
          const [t, s] = (0, b.useState)(!1), r = (e => {
            const [a] = (0, p.useSearchParams)(), [t, s] = (0, b.useState)(null), r = (0, h.useRockstarUser)(), {
              loggedIn: i,
              data: n
            } = r, {
              hasGtaPlus: o
            } = n ?? {};
            return (0, b.useEffect)(() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              k.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach(e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (v(r)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    r.push(!0 === i);
                    break;
                  case "user:not:loggedIn":
                    r.push(!1 === i);
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
              }), s(!v(r)), () => {}
            }, [a, e, o, r, i]), t
          })(e);
          return (0, b.useEffect)(() => {
            s(r)
          }, [r]), (0, b.useMemo)(() => t ? a : null, [t])
        },
        j = (0, f.withTranslations)(({
          children: e
        }) => b.Children.map(b.Children.toArray(e), e => (0, g.jsx)(y, {
          ...e?.props
        })));
      var x = t(56901),
        w = t(33949),
        N = t(9360),
        S = t(42347);
      const C = (0, b.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          label: t,
          href: s,
          target: r,
          justifySelf: i = "center",
          ...n
        }, o) {
          const c = (0, S.m)(a, "normal"),
            l = (0, w.mergeProps)({
              "data-testid": e,
              className: c
            }, n);
          return (0, g.jsx)(N.Button, {
            ref: o,
            ...l,
            asChild: !0,
            children: (0, g.jsx)(p.Link, {
              to: s,
              target: r,
              style: {
                justifySelf: i
              },
              children: t
            })
          })
        }),
        T = (0, b.forwardRef)(function({
          testId: e,
          theme: a = "dark",
          href: t,
          target: s,
          justifySelf: r = "center",
          ...i
        }, n) {
          const o = (0, S.m)(a, "normal"),
            c = (0, w.mergeProps)({
              "data-testid": e,
              className: o
            }, i);
          return (0, g.jsx)(N.IconButton, {
            ref: n,
            ...c,
            asChild: !0,
            children: (0, g.jsx)(p.Link, {
              to: t,
              target: s,
              style: {
                justifySelf: r
              }
            })
          })
        });
      var E = t(48863),
        I = t(17301),
        A = t(81270);
      const M = ({
        children: e,
        context: a = null,
        game: t,
        image: s = {},
        style: r = {},
        template: i = null,
        theme: n = null,
        reversedOnMobile: o = !1,
        className: c = "",
        id: l = null
      }) => {
        const d = (0, I.useImageParser)(s ?? {}),
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
              i = s?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            m.background = `linear-gradient(180deg, ${r}, transparent ${e}%, transparent ${100-e}%, ${i}), url(${d?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, g.jsx)("div", {
          id: l,
          className: (0, A.default)("rockstargames-sites-gta-gen9da87ead760b989fbe90a0b89c60b0653", o ? "rockstargames-sites-gta-gen9dfbda195073626bc6a7690dc73fba873" : "", c),
          "data-game": "community" === i ? null : t,
          style: (0, f.safeStyles)(m),
          "data-context": a,
          "data-template": i,
          "data-theme": n,
          children: e
        })
      };
      var P = t(88447);
      const L = {
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
        z = {
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
      var R = t(40283),
        D = t(42285),
        B = t(281),
        G = t(42909),
        O = t(14653),
        $ = t(66956),
        F = t(3018);
      const V = (0, G.defineMessages)({
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
        H = ({
          prevRef: e,
          nextRef: a,
          onNextClicked: t,
          onPrevClicked: s,
          onNextKeyDown: r,
          testId: i
        }) => {
          const {
            formatMessage: n
          } = (0, G.useIntl)();
          return (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9b8d5ef10008331a9f6d3a6bdf1690d01",
            "data-testid": `${i}-controls`,
            children: [(0, g.jsx)("button", {
              className: "rockstargames-sites-gta-gen9c38cd500d52d07bd012e288dc0b4f635",
              ref: e,
              onClick: s,
              "aria-label": n(V.carousel_previous_slide_label)
            }), (0, g.jsx)("button", {
              className: "rockstargames-sites-gta-gen9b24ada0f7959966c6d950567eaaafce2",
              ref: a,
              onClick: t,
              onKeyDown: r,
              "aria-label": n(V.carousel_next_slide_label)
            })]
          })
        },
        q = (0, $.A)((0, F.g)(({
          description: e,
          slideChildren: a,
          size: t,
          title: s,
          name: r,
          customSlidesPerView: i = null,
          customSpaceBetween: n = null,
          slideClass: o,
          style: c,
          className: l,
          cardSizeBreakpoints: d,
          customAspectRatio: m,
          titleBadge: _,
          theme: u
        }) => {
          const {
            track: p
          } = (0, h.useGtmTrack)(), f = (0, b.useRef)(null), k = (0, b.useRef)(null), v = (0, b.useRef)(null), [y, j] = (0, b.useState)(null), [x, w] = (0, b.useState)(!1), [N, S] = (0, b.useState)(null), [C, T] = (0, b.useState)(), [E, I] = (0, b.useState)(), {
            ref: M,
            inView: P
          } = (0, D.useInView)({
            threshold: .6
          }), [L, z] = (0, b.useState)(!1), [G, $] = (0, b.useState)(null), [F, V] = (0, b.useState)(!1), [q, W] = (0, b.useState)(0), [U, K] = (0, b.useState)(0);
          (0, b.useEffect)(() => {
            const e = () => {
              V(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, b.useEffect)(() => {
            const e = () => {
              C && !(0, R.isEmpty)(C) && C?.height > 0 && C?.height !== q && W(C?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [C]);
          const X = {
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
          (0, b.useEffect)(() => {
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
          }, [f, i]), (0, b.useEffect)(() => {
            if (!a) return;
            let e = !1;
            a.forEach(a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, $(a))
            }), z(e);
            const t = a.map((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && F ? null : (0, g.jsx)(O.qr, {
              className: "rockstargames-sites-gta-gen9ad67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => J(a),
              children: e
            }, e.key));
            j(t)
          }, [a, F]), (0, b.useEffect)(() => {
            I({
              nextEl: v.current,
              prevEl: k.current
            })
          }, [v, k]), (0, b.useEffect)(() => {
            P && !x && a && (p({
              event: "page_section_impression",
              element_placement: (r || s).toLowerCase()
            }), w(!0))
          }, [P, a]);
          let Y = "custom" === t ? {
            "--custom-aspect-ratio": m,
            ...c
          } : {
            ...c
          };
          const Z = 0 !== q ? `${q}px` : "100%";
          Y = {
            ...Y,
            "--carousel-cards-height": Z,
            "--carousel-nav-opacity": U
          };
          const J = e => {
              C?.slideTo(e)
            },
            Q = `${s.trim().toLowerCase().replace(/\s+/g,"-")}-deck`;
          return (0, g.jsxs)("section", {
            "aria-label": s,
            className: (0, A.default)("rockstargames-sites-gta-gen9f20b52f7c3f9003cd00811a47a04bf10", l),
            "data-size": t,
            "data-testid": Q,
            "data-sm": d?.sm ? d?.sm : t,
            "data-md": d?.md ? d?.md : t,
            "data-lg": d?.lg ? d?.lg : t,
            "data-xl": d?.xl ? d?.xl : t,
            "data-xxl": d?.xxl ? d?.xxl : t,
            "data-has-covercard": L,
            "data-new-carousel-nav": !0,
            id: `${s}-carousel`,
            "data-theme": u,
            ref: f,
            style: Y,
            children: [(0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9aeafe767d91d07fab61f307b5bbffeef",
              ref: M
            }), L && F && (0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9def6705cfe82c4e562f3c71c78bc5248",
              children: G
            }), (0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b093fac5b0d056a4a00f34d0418c6577",
              children: (0, g.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9dcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, g.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9b83b41754b7e9ac95c806264014db990",
                  children: [!L && s && (0, g.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9c8e04a547988dacbae8960776862f15f",
                    children: [(0, g.jsx)("h2", {
                      children: s
                    }), _ && (0, g.jsx)("span", {
                      className: "rockstargames-sites-gta-gen9c3de2db74771fdba023cc2b11b216955",
                      children: _
                    })]
                  }), (0, g.jsx)(H, {
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
                    title: s,
                    theme: u
                  })]
                }), e && (0, g.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9a1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: e
                  }
                })]
              })
            }), N ? (0, g.jsx)(O.RC, {
              slidesPerView: N,
              onInit: e => {
                T(e);
                const a = setInterval(() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (W(t), K(1), clearInterval(a))
                }, 500)
              },
              grabCursor: !0,
              navigation: E,
              modules: [B.A],
              breakpoints: X,
              slideClass: (0, A.default)("swiper-slide", o),
              onSlideNextTransitionEnd: () => {
                p({
                  event: "carousel_next",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                p({
                  event: "carousel_previous",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                p({
                  event: "carousel_swipe",
                  element_placement: s?.toLowerCase() ?? ""
                })
              },
              children: y
            }) : ""]
          })
        }), null),
        W = {
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
        U = ({
          title: e = "",
          mobileImg: a,
          desktopImg: t
        }) => {
          const s = (0, I.useGetCdnSource)(a ?? null),
            r = (0, I.useGetCdnSource)(t ?? s);
          return (0, g.jsx)("div", {
            className: W.shard,
            style: {
              "--background-image-mobile": `url(${s})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, g.jsx)("h5", {
              children: e
            })
          })
        },
        K = ({
          title: e = "Membership Rewards",
          name: a = "Membership Rewards",
          shards: t
        }) => {
          const [s, r] = (0, b.useState)(null);
          return (0, b.useEffect)(() => {
            t && r(t.reduce((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: r,
                desktop: i
              } = s;
              return e.push((0, g.jsx)(U, {
                title: t,
                mobileImg: r?.full_src,
                desktopImg: i?.full_src
              })), e
            }, []))
          }, [t]), s ? (0, g.jsx)("div", {
            className: W.shardsCarousel,
            children: (0, g.jsx)(q, {
              title: e,
              name: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        X = ({
          brands: e = []
        }) => e.length ? (0, g.jsx)("div", {
          className: "rockstargames-sites-gta-gen9b53b6eca487387fc5c2057daf151691a",
          children: e.map((e, a) => (0, g.jsx)("div", {
            role: "img",
            "aria-label": e?.brandLabel,
            className: "rockstargames-sites-gta-gen9e8c3be7a76fd7e532e74a9fcf87bee09",
            "data-brand": e.brand
          }, a))
        }) : null;
      var Y = t(62579);
      const Z = ({
          buttons: e = [],
          className: a
        }) => e.length ? (0, g.jsx)("div", {
          className: (0, A.default)("rockstargames-sites-gta-gen9bbd74dec556da7f5c06710c72c662f8a", a),
          children: e.map(({
            icon: e,
            title: a,
            to: t
          }, s) => a ? (0, g.jsx)(Y.A, {
            icon: e,
            text: a,
            to: t
          }, s) : "")
        }) : null,
        J = ({
          animated: e = !1,
          ctas: a = [],
          expandingButtonLabel: t = "Subscribe"
        }) => {
          const [s, r] = (0, b.useState)([]), [i, n] = (0, b.useState)([]);
          return (0, b.useEffect)(() => {
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
            r(e), n(t)
          }, [a]), s.length ? (0, g.jsx)(P.motion.div, {
            variants: e ? z : void 0,
            children: (0, g.jsx)(E.A, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: s,
              children: !!i.length && (0, g.jsx)(P.motion.div, {
                variants: z,
                children: (0, g.jsx)(Z, {
                  buttons: i,
                  className: W.buttonGroup
                })
              })
            })
          }) : (0, g.jsx)(g.Fragment, {
            children: !!i.length && (0, g.jsx)(P.motion.div, {
              variants: z,
              children: (0, g.jsx)(Z, {
                buttons: i,
                className: W.buttonGroup
              })
            })
          })
        },
        Q = ({
          animated: e = !1,
          brands: a = [],
          cta: t = [],
          ctas: s = [],
          description: r = "",
          expandingButtonLabel: i = "Subscribe",
          legalText: n,
          stackButtons: o,
          title: c = ""
        }) => (0, g.jsxs)(P.motion.div, {
          className: W.content,
          initial: "hidden",
          animate: "visible",
          variants: e ? L : void 0,
          children: [(0, g.jsx)(P.motion.div, {
            variants: e ? z : void 0,
            children: (0, g.jsx)(X, {
              brands: a
            })
          }), (c || r) && (0, g.jsxs)(P.motion.div, {
            className: W.descriptions,
            variants: e ? z : void 0,
            children: [c && (0, g.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: c
              }
            }), r && (0, g.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: r
              }
            })]
          }), !!t.length && (0, g.jsx)("div", {
            className: o ? W.verticalCtaBlock : W.ctaBlock,
            children: (0, g.jsx)(I.TinaParser, {
              components: {
                Cta: x.A,
                ExpandingPlatformButton: E.A
              },
              tina: {
                payload: {
                  content: t
                }
              }
            })
          }), !!s.length && (0, g.jsx)("div", {
            className: W.ctaBlock,
            children: (0, g.jsx)(J, {
              animated: e,
              ctas: s,
              expandingButtonLabel: i
            })
          }), n && (0, g.jsx)(P.motion.div, {
            className: W.legalText,
            variants: e ? z : void 0,
            children: (0, g.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: n
              }
            })
          })]
        }),
        ee = ({
          animated: e = !1,
          backgroundImage: a,
          brands: t = [],
          className: s,
          ctas: r = [],
          cta: i,
          description: n = "",
          expandingButtonLabel: o = "Subscribe",
          layeredImage: c,
          layeredImageSettings: l,
          legalText: d,
          shardsSection: m,
          stackButtons: _ = !1,
          theme: u = "gen9",
          title: p = ""
        }) => {
          const {
            breakpoints: h,
            windowWidth: k
          } = (0, f.useWindowResize)(), v = h.xxl.min, y = (e => {
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
                  const [i, n] = r;
                  if (t.has(s) && t.has(i)) {
                    const s = `${t.get(i)}${e}`;
                    a[s] = "imageWidth" !== i ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                  }
                })
              }
            }), a
          })(l), j = (0, I.useGetCdnSource)(a?.mobile?.full_src ?? null), x = (0, I.useGetCdnSource)(a?.desktop?.full_src ?? j), w = (0, I.useGetCdnSource)(c?.mobile?.full_src ?? null), N = (0, I.useGetCdnSource)(c?.desktop?.full_src ?? w), S = (0, b.useMemo)(() => {
            const {
              mobileStyle: e,
              desktopStyle: t,
              style: s
            } = a ?? {};
            return {
              ...s,
              ...k >= v ? (0, f.safeStyles)(t) : (0, f.safeStyles)(e)
            }
          }, [k, a?.style, a?.mobileStyle, a?.desktopStyle]);
          return (0, g.jsxs)(P.motion.div, {
            className: (0, A.default)(W.hero, s),
            style: {
              "--background-image-desktop": `url(${x})`,
              "--background-image-mobile": `url(${j})`,
              "--layered-image-desktop": `url(${N})`,
              "--layered-image-mobile": `url(${w})`
            },
            initial: "hidden",
            animate: "visible",
            variants: e ? L : void 0,
            "data-type": "hero",
            theme: u,
            children: [(0, g.jsxs)("div", {
              className: W.images,
              children: [x && j ? (0, g.jsx)("div", {
                className: W.background,
                style: S ?? {}
              }) : "", w && N ? (0, g.jsx)("div", {
                className: W.layered,
                style: l ? y : {}
              }) : "", (0, g.jsx)("div", {
                className: W.gradient
              })]
            }), (0, g.jsx)(Q, {
              animated: e,
              brands: t,
              cta: i,
              ctas: r,
              description: n,
              expandingButtonLabel: o,
              legalText: d,
              stackButtons: _,
              title: p
            }), m?.shards && (0, g.jsx)(K, {
              shards: m.shards
            })]
          })
        },
        ae = ({
          attributes: e = {},
          children: a,
          className: t = "",
          id: s = "",
          style: r = {}
        }) => {
          const {
            hash: i
          } = (0, p.useLocation)();
          return (0, b.useLayoutEffect)(() => {
            const e = document.getElementById(s);
            e && i.includes(s) && e.scrollIntoView({
              behavior: "instant",
              block: "start"
            })
          }, []), (0, g.jsx)("span", {
            className: (0, A.default)(t, e?.className, "rockstargames-sites-gta-gen9c650a7a1e761d6a9f2d6ce1cd8d6f330"),
            id: s,
            style: (0, f.safeStyles)(r ?? e?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: (0, R.unescape)(a)
            }
          })
        };
      var te = t(24834),
        se = t(53351),
        re = t(70067);
      const ie = ({
          button: e,
          closeDialog: a,
          style: t = "primary"
        }) => {
          const {
            buttonIcon: s,
            buttonText: r,
            extraClasses: i,
            isDisabled: n,
            isLink: o,
            link: c,
            onClick: l,
            testId: d
          } = e;
          return o ? r && (0, g.jsx)(N.Button, {
            asChild: !0,
            appearance: t,
            size: "LG",
            children: (0, g.jsx)("a", {
              href: c,
              ...d && {
                "data-testid": d
              },
              children: r
            })
          }) : (0, g.jsx)(N.Button, {
            autoFocus: !0,
            iconRight: s,
            className: (0, A.default)(i),
            isDisabled: n,
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
        ne = {
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
        oe = ({
          icon: e,
          title: a,
          secondaryText: t,
          buttons: s,
          showDialog: r,
          onClose: i = () => {},
          closeOnOutsideClick: n = !0,
          extraClasses: o
        }) => {
          const c = (0, b.useRef)(null),
            {
              setBodyIsLocked: l
            } = (0, f.useBodyScrollable)("AlertDialog");
          (0, b.useEffect)(() => {
            r && c?.current && (c.current?.showModal?.(), l(!0))
          }, [r]);
          const d = () => {
            l(!1), i(), c.current?.close?.()
          };
          if (r) return (0, g.jsxs)("dialog", {
            ref: c,
            className: ne.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const a = e.currentTarget.getBoundingClientRect();
              (a.left > e.clientX || a.right < e.clientX || a.top > e.clientY || a.bottom < e.clientY) && n && (l(!1), i(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, g.jsx)("i", {
              className: [ne.icon, ne[e]].join(" ")
            }), (0, g.jsxs)("div", {
              className: [ne.content, o?.content].join(" "),
              children: [(0, g.jsx)("h3", {
                className: [ne.heading, o?.heading].join(" "),
                children: a
              }), t && (0, g.jsx)("div", {
                className: [ne.message, o?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), s && (0, g.jsx)("div", {
              className: ne.actions,
              children: s.slice(0, 2).map((e, a) => (0, g.jsx)(ie, {
                style: e?.style ?? (0 === a ? "primary" : "secondary"),
                button: e,
                closeDialog: d
              }, e.buttonText))
            })]
          })
        },
        ce = (0, G.defineMessages)({
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
        le = {
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
        de = ({
          loading: e,
          loggedIn: a,
          urls: t,
          handleSubscribeButton: s,
          isButtonLoading: r,
          showDialog: i,
          setShowDialog: n,
          dialog: o,
          isSubscribed: c,
          variant: l
        }) => {
          const [d, m] = (0, b.useState)(!1), _ = (0, G.useIntl)(), {
            track: u
          } = (0, h.useGtmTrack)(), {
            ref: f,
            inView: k
          } = (0, D.useInView)({
            threshold: .6
          }), v = o?.buttons || [{
            buttonText: _.formatMessage(ce.ns_ok_button_text),
            onClick: () => {
              n(!1)
            },
            testId: "ok-btn",
            style: "secondary"
          }, {
            buttonText: o?.showManagePreferences ? _.formatMessage(ce.ns_manage_prefs_button_text) : "",
            isLink: !0,
            link: t.preferences,
            testId: "preferences-btn",
            style: "ghost"
          }];
          return (0, b.useEffect)(() => {
            k && !d && (u({
              event: "page_section_impression",
              section_layout: a ? "signed in" : "signed out",
              element_placement: "newsletter subscribe"
            }), m(!0))
          }, [k]), (0, g.jsxs)(g.Fragment, {
            children: [!c && (0, g.jsx)("div", {
              className: (0, A.default)(le.newsletterSubscription),
              "data-testid": "news-sub-banner",
              ref: f,
              children: (0, g.jsx)("section", {
                className: le.banner,
                children: (0, g.jsx)("div", {
                  className: le.inner,
                  children: e ? (0, g.jsx)(re.A, {}) : (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsx)(se.A, {
                      disableLink: !0,
                      className: le.fadeIn
                    }), (0, g.jsxs)("div", {
                      className: le.body,
                      children: [(0, g.jsx)(N.Heading, {
                        level: 5,
                        className: [le.heading, le.fadeIn].join(" "),
                        children: "twitchdrops" === l ? (0, g.jsx)(G.FormattedMessage, {
                          ...ce.ns_cta_title_twitchdrops
                        }) : (0, g.jsx)(G.FormattedMessage, {
                          ...ce.ns_cta_title
                        })
                      }), (0, g.jsx)(N.Body, {
                        className: [le.copy, le.fadeIn].join(" "),
                        children: (0, g.jsx)(G.FormattedMessage, {
                          ...ce.ns_cta_text
                        })
                      })]
                    }), a ? (0, g.jsxs)(N.Button, {
                      size: "LG",
                      appearance: "secondary",
                      onPress: s,
                      isDisabled: r,
                      "data-testid": "sub-btn",
                      children: [(0, g.jsx)(G.FormattedMessage, {
                        ...ce.ns_cta_button_text
                      }), r && (0, g.jsx)("div", {
                        className: le.buttonLoader,
                        children: (0, g.jsx)(re.A, {})
                      })]
                    }) : t?.auth && (0, g.jsx)(N.Button, {
                      size: "LG",
                      appearance: "secondary",
                      onPress: s,
                      isDisabled: r,
                      "data-testid": "sub-btn",
                      asChild: !0,
                      children: (0, g.jsx)(p.Link, {
                        to: t.auth,
                        "data-testid": "sub-link",
                        onClick: () => {
                          u({
                            event: "cta_subscribe_news",
                            section_layout: "signed out",
                            element_placement: "newsletter subscribe",
                            text: "subscribe now",
                            link_url: t.auth
                          })
                        },
                        children: (0, g.jsx)(G.FormattedMessage, {
                          ...ce.ns_cta_button_text
                        })
                      })
                    })]
                  })
                })
              })
            }), o && (0, g.jsx)(oe, {
              icon: o.icon,
              title: _.formatMessage(o.heading),
              secondaryText: _.formatMessage(o.bodyText),
              closeOnOutsideClick: o.closeOnOutsideClick,
              buttons: [{
                ...v[0]
              }, {
                ...v[1]
              }],
              showDialog: i,
              onClose: () => n(!1)
            })]
          })
        },
        me = {
          SUCCESS: {
            icon: "check",
            heading: ce.ns_successfully_subscribed_title,
            bodyText: ce.ns_successfully_subscribed_details_amp,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: ce.ns_check_email_title,
            bodyText: ce.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: ce.ns_error_preferences_title,
            bodyText: ce.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: ce.ns_error_generic_title,
            bodyText: ce.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: ce.ns_already_subbed_title,
            bodyText: ce.ns_already_subbed_details_amp,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: ce.ns_confirm_after_register_title,
            bodyText: ce.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: ce.ns_confirm_title,
            bodyText: ce.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        _e = {
          0: me.ERROR_PREFERENCES,
          1: me.SUCCESS,
          2: me.ERROR_PREFERENCES,
          3: me.ERROR_PREFERENCES,
          4: me.ERROR_GENERIC
        },
        ue = (0, f.setMakeVarItem)({
          key: "subscriptionStatusReactive",
          value: (0, f.makeVar)(void 0)
        }),
        ge = e => ue(e),
        be = (e, a) => {
          const [t, s] = (0, b.useState)(), [r, i] = (0, b.useState)(!1), [n, o] = (0, b.useState)(!1), [c, l] = (0, b.useState)(!1), [d, m] = (0, b.useState)(!1), _ = (0, f.useReactiveVar)(ue), u = (0, G.useIntl)(), {
            track: g
          } = (0, h.useGtmTrack)(), p = {
            preferences: `https://${e.www}.rockstargames.com/account/communications`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          }, k = e => {
            s(e), o(!0), l(!1)
          }, v = {
            ...me.NEW_ACCOUNT,
            closeOnOutsideClick: !1,
            buttons: [{
              buttonText: u.formatMessage(ce.ns_yes_subscribe_text),
              style: "monochrome",
              onClick: () => {
                y()
              }
            }, {
              buttonText: u.formatMessage(ce.ns_go_back_text),
              onClick: () => {
                s(null), o(!1)
              }
            }]
          }, y = async () => (g({
            event: "cta_subscribe_news",
            section_layout: a.loggedIn ? "signed in" : "signed out",
            element_placement: "newsletter subscribe",
            text: "subscribe now"
          }), a.loggedIn || window.location.assign(p.auth), a.loggedIn && a.isAMinor ? (k(me.ERROR_GENERIC), m(!1), void g({
            event: "alert_error",
            text: "error message with no preferences link",
            element_placement: "newsletter subscribe"
          })) : a.loggedIn && !_ || a.loggedIn && 3 == _ ? void await j() : a.loggedIn && _ ? (g({
            event: "alert_update",
            text: "alert - user already subscribed",
            element_placement: "newsletter subscribe"
          }), k(me.ALREADY_SUBSCRIBED), void m(!1)) : void 0), j = async () => {
            const {
              error: e = null,
              result: t
            } = await (0, f.coreScApiFetch)("marketing/update", {
              fetchOptions: {
                method: "POST"
              },
              pingBearer: a.pingBearer,
              query: {
                subscribe: !0
              }
            });
            if (e) ge(0), k(me.ERROR_GENERIC), g({
              event: "alert_error",
              text: "error message with preferences link",
              element_placement: "newsletter subscribe"
            });
            else {
              const e = t.status;
              ge(e), k(_e[e]), 1 === e ? (g({
                event: "subscribe_news_success",
                element_placement: "newsletter subscribe"
              }), g({
                event: "alert_update",
                text: "user subscribed successfully",
                element_placement: "newsletter subscribe"
              })) : g({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              })
            }
          };
          return (0, b.useEffect)(() => {
            i(1 === _)
          }, [_]), (0, b.useEffect)(() => {
            (async () => {
              await (async () => {
                a.loggedIn ? await (async () => {
                  if (-1 === _) return;
                  ge(-1), l(!0);
                  const t = await (0, f.coreScApiFetch)("marketing/status", {
                    pingBearer: a.pingBearer
                  });
                  if (!t || t.error) ge(0), l(!1);
                  else {
                    const s = t.result.status;
                    ge(s), a.isFromAuth && (t => {
                      if (e.navigate(".", {
                          replace: !0
                        }), a.loggedIn) switch (t) {
                        case 1:
                          a.isNewAccount ? (g({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), g({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), k(me.SUCCESS)) : (g({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), k(me.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          g({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), k(me.ERROR_GENERIC);
                          break;
                        default:
                          a.isNewAccount ? (k(v), g({
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
            showDialog: n,
            subscriptionStatus: _,
            urls: p,
            setDialog: s
          }
        },
        pe = (0, F.g)(() => {
          const e = (0, f.useRockstarTokenPing)(),
            a = (0, te.A)(),
            [{
              iso: t
            }] = (0, G.getLocale)(),
            s = (0, f.toScLocaleString)(t),
            {
              login: r
            } = (0, f.getConfigForDomain)(),
            [i] = (0, p.useSearchParams)(),
            n = (0, p.useNavigate)(),
            o = (0, p.useLocation)(),
            {
              loggedIn: c,
              data: l,
              loading: d
            } = (0, h.useRockstarUser)(),
            m = "true" === i.get("marketing"),
            _ = {
              lang: s,
              location: o.pathname,
              login: r,
              navigate: n,
              www: a.sites.www
            },
            u = {
              ...l,
              isFromAuth: m || !1,
              loggedIn: c,
              pingBearer: e,
              userLoading: d
            },
            b = be(_, u),
            {
              dialog: k,
              setDialog: v,
              handleSubscribeButton: y,
              isButtonLoading: j,
              isLoading: x,
              isSubscribed: w,
              setShowDialog: N,
              showDialog: S,
              urls: C
            } = b;
          return (0, g.jsx)(g.Fragment, {
            children: (0, g.jsx)(de, {
              handleSubscribeButton: y,
              loggedIn: c || !1,
              loading: d || x,
              urls: C,
              isButtonLoading: j,
              setShowDialog: N,
              isSubscribed: w,
              showDialog: S,
              ...S && k && {
                dialog: k
              }
            })
          })
        });
      var fe = t(50062),
        he = t.n(fe);
      const ke = {
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
          sanitize: ve
        } = he(),
        ye = ({
          list: e,
          string: a,
          starColor: t,
          style: s,
          className: r,
          game: i,
          noImg: n,
          columns: o,
          mobileColumns: c
        }) => {
          const [l, d] = (0, b.useState)(null);
          if ((0, b.useEffect)(() => {
              d(e)
            }, [e]), !a && !e) return null;
          const m = {
            color: s?.color
          };
          return delete s?.color, o && l ? (0, g.jsx)("div", {
            className: ke.grid,
            style: {
              "--ordered-list-grid-column": o,
              "--ordered-list-grid-column-mobile": c ?? o
            },
            children: (0, g.jsx)("ol", {
              className: (0, A.default)(ke.itemList, ke.noImg, ke[t], ke[i]),
              style: (0, f.safeStyles)(s),
              children: l.map(e => (0, g.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: ve(e.content)
                },
                style: m
              }, e.content))
            })
          }) : (0, g.jsx)("ol", {
            style: (0, f.safeStyles)(s),
            className: (0, A.default)(ke.itemList, ke.custom, n ? ke.noImg : "", t ? ke[t] : "", i ? ke[i] : "", r ?? ""),
            children: e.map(e => (0, g.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: ve(e?.content ?? e)
              }
            }, e?.content))
          })
        };
      var je = t(14143);
      const xe = ({
          layers: e = [],
          displayClass: a = "",
          style: t = {}
        }) => {
          const s = (0, I.useGenerateCdnSource)();
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
          return (0, g.jsx)(je.y, {
            className: (0, A.default)("rockstargames-sites-gta-gen9c1c689cf47230fa80bccc9b20515d4fa", a),
            layers: r,
            style: t
          })
        },
        we = "rockstargames-sites-gta-gen9ae8bfc3f9a519606a95144e64ee454b5",
        Ne = ({
          minOffset: e = 0,
          maxOffset: a = 0,
          scrollAxis: t = "vertical",
          displayClass: s = "",
          style: r = {},
          children: i
        }) => "horizontal" === t ? (0, g.jsx)(je.kQ, {
          x: [e, a],
          className: (0, A.default)(we, s),
          styleOuter: r,
          children: i
        }) : (0, g.jsx)(je.kQ, {
          y: [e, a],
          className: (0, A.default)(we, s),
          styleOuter: r,
          children: i
        }),
        Se = ({
          children: e
        }) => {
          const {
            parallaxController: a
          } = (0, je.as)();
          return (0, b.useLayoutEffect)(() => {
            if (!a) return;
            const e = setInterval(() => {
              a.update()
            }, 500);
            return () => clearInterval(e)
          }, [a]), e
        },
        Ce = {
          large: "rockstargames-sites-gta-gen9e15ce487b25ba576b6e2b31df308098f",
          medium: "rockstargames-sites-gta-gen9dfdaa6f63f8e8bd10576fa2debcbc1fc",
          parallaxWrapper: "rockstargames-sites-gta-gen9e30c08cf0e042f7fc7bed0c23c0bfb31",
          small: "rockstargames-sites-gta-gen9c32a973dbc862a43cc5d4a2aac19ed9b"
        },
        Te = ({
          scrollAxis: e = "vertical",
          size: a = "",
          style: t = {},
          children: s
        }) => (0, g.jsx)(je.zE, {
          scrollAxis: e,
          children: (0, g.jsx)(Se, {
            children: (0, g.jsx)("div", {
              className: (0, A.default)(Ce.parallaxWrapper, Ce[a]),
              style: t,
              "data-context": "parallax-wrapper",
              children: s ? s.map((a, t) => (0, b.cloneElement)(a, {
                scrollAxis: e,
                style: {
                  ...a?.props?.style,
                  zIndex: t
                }
              })) : (0, g.jsx)("div", {})
            })
          })
        });
      var Ee = t(49852),
        Ie = t(98769);
      const Ae = {
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
        Me = {
          alt: "",
          sources: {}
        },
        Pe = ({
          backgroundColor: e,
          brands: a = [],
          description: t = "",
          ctaLabel: s,
          ctaLink: r = "https://rockstargames.com",
          gradient: i = !0,
          image: n,
          promoImg: o = Me,
          imageOrientation: c = "right",
          title: l = "",
          name: d = "",
          style: m,
          imageStyle: _,
          _memoq: u
        }) => {
          const [p, k] = (0, b.useState)(!1), {
            ref: v,
            inView: y
          } = (0, D.useInView)({
            threshold: .6
          }), {
            isMobile: j
          } = (0, f.useWindowResize)(), {
            track: x
          } = (0, h.useGtmTrack)(), w = (0, I.useImageParser)(o), N = (0, I.useGetCdnSource)(n), S = j ? w?.src?.mobile : w?.src?.desktop, C = w?.alt ?? "", T = {
            ...m,
            "--promo-background": e ?? "var(--black-200)",
            "--promo-image": `url(${S??N??"var(--promo-background)"})`,
            "--promo-order": "left" === c ? "row" : "row-reverse"
          }, E = {
            ..._
          };
          return (0, b.useEffect)(() => {
            y && !p && (x({
              event: "page_section_impression",
              element_placement: d?.toLowerCase()
            }), k(!0))
          }, [y]), (0, g.jsx)(g.Fragment, {
            children: (0, g.jsx)("div", {
              className: Ae.promoModuleWrapper,
              children: (0, g.jsxs)(P.motion.div, {
                className: Ae.promoModule,
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
                children: [(0, g.jsx)("div", {
                  role: "img",
                  "aria-label": C,
                  className: [Ae.promoModuleImage, i ? Ae.gradient : "", "left" === c ? Ae.left : Ae.right].join(" "),
                  style: {
                    ...E
                  }
                }), (0, g.jsxs)("div", {
                  className: Ae.promoModuleContentContainer,
                  children: [(0, g.jsx)(X, {
                    brands: a
                  }), (0, g.jsxs)("div", {
                    className: Ae.promoModuleTextContent,
                    children: [l && (0, g.jsx)("h3", {
                      children: l
                    }), t && (0, g.jsx)("p", {
                      children: t
                    })]
                  }), s && (0, g.jsx)(Y.A, {
                    to: r,
                    text: s,
                    onClick: () => {
                      x({
                        event: "cta_learn",
                        element_placement: "promo module",
                        link_url: r,
                        text: u?.ctaLabel?.toLowerCase()
                      })
                    }
                  })]
                })]
              })
            })
          })
        };
      var Le = t(88028),
        ze = t(99948);
      const Re = {
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
        De = ({
          description: e,
          foreign_id: a = document.location.pathname,
          foreign_type: t = "url",
          title: s
        }) => {
          const {
            track: r
          } = (0, h.useGtmTrack)(), {
            loggedIn: i
          } = (0, h.useRockstarUser)(), {
            refetch: n
          } = (0, f.useQuery)(ze.UserGetVote, {
            skip: !0
          }), [o] = (0, f.useMutation)(ze.UserCastVote), [c, l] = (0, b.useState)(null), d = (0, b.useCallback)(async e => {
            r({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${t} ${a}`
            });
            const s = {
                foreign_id: a,
                foreign_type: t,
                vote: e
              },
              i = await o({
                variables: s
              });
            l(i?.data?.userCastVote?.vote ?? null)
          }, [a, t]);
          return (0, b.useEffect)(() => {
            (async () => {
              if (!i || !a || !t) return;
              const e = await n({
                foreign_id: a,
                foreign_type: t
              });
              l(e?.data?.userGetVote?.vote ?? null)
            })()
          }, [a, t, i]), (0, g.jsx)("div", {
            className: Re.userVote,
            children: (0, g.jsxs)("div", {
              className: Re.voteContent,
              children: [(0, g.jsxs)("div", {
                className: Re.info,
                children: [(0, g.jsx)("h3", {
                  children: s
                }), (0, g.jsx)("p", {
                  children: e
                })]
              }), (0, g.jsxs)("div", {
                className: [Re.voteButtons, i ? "" : Re.loggedOutButtons].join(" "),
                children: [(0, g.jsx)("button", {
                  onClick: () => d(!0),
                  className: [Re.upVote, c ? Re.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, g.jsx)("button", {
                  className: [Re.downVote, !1 === c ? Re.voteButtonActive : ""].join(" "),
                  onClick: () => d(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var Be = t(82306),
        Ge = t(96063),
        Oe = t(72527);
      const $e = (e = [], a, t) => {
          const s = (0, b.useRef)(null),
            r = (0, b.useRef)(new Set),
            i = (0, b.useRef)([]),
            n = (0, b.useRef)(0),
            o = (0, b.useRef)(0),
            c = (0, b.useRef)(!1),
            l = (0, b.useMemo)(() => Array.from(new Set(e.filter(e => e >= 0 && e <= 100))).sort((e, a) => e - a), [e]);
          return (0, b.useEffect)(() => {
            r.current = new Set, i.current = l.slice()
          }, [l]), (0, b.useEffect)(() => {
            s.current = t ?? window
          }, [t]), (0, b.useEffect)(() => {
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
                      i = e ? e.scrollHeight : a.scrollHeight || s.scrollHeight || 0,
                      n = e ? e.clientHeight : a.clientHeight || window.innerHeight || 0,
                      o = Math.max(1, i - n);
                    return {
                      scrollTop: r,
                      scrollHeight: i,
                      percent: Math.max(0, Math.min(100, r / o * 100))
                    }
                  })();
                  n.current = d, o.current = s;
                  const m = i.current.find(e => d >= e);
                  if (!m) return;
                  if (r.current.has(m)) return;
                  r.current.add(m), i.current = i.current.filter(e => e !== m);
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
            scrollY: n.current,
            scrollLength: o.current
          }
        },
        Fe = ({
          threshold: e,
          trackRef: a,
          children: t
        }) => {
          const {
            track: s
          } = (0, h.useGtmTrack)();
          return $e(e, ({
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
        Ve = ({
          text: e,
          style: a
        }) => (0, g.jsx)("div", {
          className: "rockstargames-sites-gta-gen9c08a001134624b9ceb275eae413bfd3d",
          style: a,
          children: e
        }),
        He = ({
          hasTag: e = !1,
          tag: a = null,
          tagStyle: t = null,
          badges: s = []
        }) => e && a ? (0, g.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ceb75d3391774f84e920e955d7a6853f",
          "data-tag-style": t,
          children: a
        }) : e && s && s?.length > 0 ? (0, g.jsx)("div", {
          className: "rockstargames-sites-gta-gen9f83b84453472e937d57011680a564ec6",
          children: s.map(e => (0, g.jsx)(Ve, {
            ...e
          }, e?.text))
        }) : null,
        qe = {
          content: "rockstargames-sites-gta-gen9f418ed13cf5cbe3f701ce0d872b50704",
          textOverlay: "rockstargames-sites-gta-gen9ca83475001f5d512b9ffcd89f1117561"
        },
        {
          LiteMotion: We,
          Animations: Ue
        } = Ge,
        {
          variants: Ke,
          transitions: Xe
        } = Ue,
        Ye = ({
          title: e,
          hasTag: a,
          tag: t,
          hasDescription: s,
          description: r,
          fadesOut: i = !1,
          badges: n
        }) => (0, g.jsx)(We, {
          initial: Ke.fade.out.initial,
          animate: {
            opacity: i ? 0 : 1
          },
          transition: Xe.fade,
          className: qe.textOverlay,
          children: (0, g.jsxs)("div", {
            className: qe.content,
            children: [(0, g.jsx)(He, {
              hasTag: a,
              tag: t,
              badges: n?.filter(e => e?.isPrimary)
            }), (0, g.jsx)("h3", {
              children: e
            }), s && r && (0, g.jsx)("div", {
              className: qe.description,
              children: r
            })]
          })
        }),
        Ze = (0, G.defineMessages)({
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
        Je = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          tag: s,
          tagStyle: r,
          discountPrice: i,
          originalPrice: n,
          setPricingContainerHeight: o = null
        }) => {
          const c = (0, b.createRef)(),
            {
              formatMessage: l
            } = (0, G.useIntl)();
          return (0, b.useEffect)(() => {
            const e = () => {
              c.current && null !== o && o(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [c]), (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e419c6cd31abd635e742e635dcfd8316",
            ref: c,
            "data-show-background": t,
            children: [a && (0, g.jsx)("span", {
              className: "rockstargames-sites-gta-gen9bf415d56280a8768ee0c26e116865d5b",
              children: e
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d98da8fc9dce6d600db165351d3a3fed",
              children: [(0, g.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a5717338db21efc7eb765011d68ea73d",
                "data-tag-style": r || "free",
                children: s
              }), (0, g.jsx)("span", {
                className: "rockstargames-sites-gta-gen9cdaaa9655747e4d129d6c22080bdd33d",
                children: i
              }), n && (0, g.jsx)("span", {
                className: "rockstargames-sites-gta-gen9d2cd2139f671e2976f60b0002f59fd77",
                children: l(Ze.card_sr_only_discount_label)
              }), (0, g.jsx)("span", {
                className: "rockstargames-sites-gta-gen9af3db4eb6d14c1f4ee5689b4e6386715",
                children: n
              })]
            })]
          })
        };
      var Qe = t(80391),
        ea = t(28985),
        aa = t(47240),
        ta = t(81715),
        sa = t(49429),
        ra = t(32903),
        ia = t(85719),
        na = t(11008);
      const oa = {
          ps5: aa,
          ps4: ea,
          ps: Qe,
          xboxone: sa,
          xbox: ra,
          xboxseriesxs: ta,
          nintendoswitch: na,
          pc: ia,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        ca = ({
          title: e,
          showTitle: a = !0,
          showBackground: t = !0,
          platformOptions: s,
          setPricingContainerHeight: r = () => {},
          expandedView: i
        }) => {
          const n = (0, b.createRef)();
          return (0, b.useEffect)(() => {
            const e = () => {
              n.current && null !== r && r(n.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [n]), (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ee81f54f31ab2cd10a67313b9689bf96",
            ref: n,
            "data-show-background": t,
            "data-show-platforms": !i,
            children: [a && (0, g.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d4ab460f0a204a588d4d4dd0a110ca36",
              children: e
            }), s?.platformsAndLinks && (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9afdc85bfd80cae52d4c1b422f1294962",
              children: [(0, g.jsx)(He, {
                hasTag: s?._memoq?.platformTag,
                tag: s?._memoq?.platformTag,
                tagStyle: s?._memoq?.platformTagStyle
              }), (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c252412353007d9f02f19a754430b14b",
                children: s.platformsAndLinks.map(({
                  platform: e,
                  buttonText: a
                }) => (0, g.jsx)("img", {
                  className: "rockstargames-sites-gta-gen9ff5cde8853312ffb892472d100c684cd",
                  alt: a,
                  src: oa[e]
                }, e))
              })]
            })]
          })
        },
        la = ({
          textOverlayProps: e,
          title: a,
          size: t,
          expandedView: s = !1,
          children: r,
          pricingOptions: i,
          setPricingContainerHeight: n,
          isCoverCard: o = !1,
          platformOptions: c
        }) => {
          const [l] = (({
            hasTextOverlay: e,
            tag: a,
            collapsedHasTag: t,
            description: s,
            collapsedHasDescription: r,
            size: i,
            title: n,
            expandedView: o,
            badges: c
          }) => {
            const [l, d] = (0, b.useState)(null), m = (0, b.useMemo)(() => {
              if (!e) return null;
              const l = "sm" !== i && r;
              return (0, g.jsx)(Ye, {
                title: n,
                hasTag: t,
                tag: a,
                hasDescription: l,
                description: s,
                fadesOut: o,
                badges: c
              })
            }, [e, a, t, s, r, i, n, o, c]);
            return (0, b.useEffect)(() => {
              d(m)
            }, [m]), [l, d]
          })({
            ...e,
            size: t,
            title: a,
            expandedView: s
          }), d = void 0 !== i?.hasPricingOptions || null !== c;
          return (0, g.jsxs)("header", {
            className: "rockstargames-sites-gta-gen9cab36c59e0808c47183ef125bd12c511",
            "data-is-covercard": o,
            "data-expanded-view": s,
            children: [r, !s && l, d && (0, g.jsxs)(g.Fragment, {
              children: [!0 === c?.hasPlatformOptions && (0, g.jsx)(ca, {
                title: a,
                platformOptions: c,
                pricingOptions: i,
                setPricingContainerHeight: n,
                expandedView: s
              }), !0 === i?.hasPricingOptions && (0, g.jsx)(Je, {
                title: a,
                tag: i?._memoq?.tag,
                tagStyle: i?._memoq?.tagStyle || "free",
                discountPrice: i?._memoq?.discountPrice,
                originalPrice: i?._memoq?.originalPrice,
                setPricingContainerHeight: n
              })]
            })]
          })
        },
        {
          LiteMotion: da,
          Animations: ma
        } = Ge,
        {
          transitions: _a
        } = ma,
        ua = ({
          components: e,
          images: a,
          payload: t,
          prod: s,
          size: r,
          title: i,
          initial: n = "initial",
          animate: o = "animate",
          variants: c,
          type: l = null,
          context: d = null,
          textOverlayProps: m,
          className: _,
          children: u,
          theme: p = "none",
          id: h,
          pricingOptions: k,
          pricingContainerHeight: v,
          isCoverCard: y,
          platformOptions: j,
          isProductCard: x = !1
        }) => {
          const w = (0, b.useRef)(null),
            N = (0, b.useRef)(null),
            {
              tag: S,
              expandedHasTag: C,
              badges: T
            } = m;
          (0, R.set)(t, "meta.prod", s);
          const E = a?.length > 0;
          let M = (0, g.jsx)("h1", {
            children: i
          });
          return y && (M = null), (0, b.useEffect)(() => {
            const e = () => {
              w.current && w.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (w.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }, []), (0, b.useEffect)(() => {
            const e = window.innerWidth >= window.innerHeight;
            e && N?.current?.scrollTop && (N.current.scrollTop = 0), !e && w?.current?.scrollTop && (w.current.scrollTop = 0)
          }, [t, N, w]), (0, g.jsx)(f.DataLayerProvider, {
            card_id: h,
            card_name: i?.toLowerCase(),
            children: (0, g.jsx)(Fe, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === l ? w : N,
              children: (0, g.jsxs)(da, {
                ref: w,
                initial: n,
                animate: o,
                variants: c.expanded,
                transition: _a.cardOpen,
                className: (0, A.default)("rockstargames-sites-gta-gen9c2289ce1bf0de6ad8a4a8ce7e90a4b66", _),
                "data-type": l,
                "data-size": r,
                "data-product": x,
                "data-covercard": y || !1,
                "data-context": d,
                style: {
                  "--product-card-pricing-info-height": `${v||0}px`
                },
                children: [E && (0, g.jsx)(la, {
                  size: r,
                  title: i,
                  textOverlayProps: m,
                  expandedView: !0,
                  pricingOptions: k,
                  platformOptions: j,
                  isCoverCard: y,
                  children: u
                }), (0, g.jsxs)(da, {
                  ref: N,
                  className: "rockstargames-sites-gta-gen9e461568802b56e8c21b8b82d9c3a1fb4",
                  variants: c.expandedContents,
                  transition: _a.afterCardOpen,
                  "data-theme": p,
                  tabindex: -1,
                  children: [(0, g.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9c4c35e83dbf962aa44c3f94b313361b3",
                    children: [(0, g.jsx)(He, {
                      hasTag: C,
                      tag: S,
                      badges: T
                    }), M, x && (0, g.jsxs)(g.Fragment, {
                      children: [!0 === j?.hasPlatformOptions && (0, g.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9cd635452588eda421bdea19f00660efc",
                        children: (0, g.jsx)(He, {
                          hasTag: j?.hasPlatformOptions,
                          tag: j?._memoq?.platformTag,
                          tagStyle: j?._memoq?.platformTagStyle
                        })
                      }), !0 === k?.hasPricingOptions && (0, g.jsx)(Je, {
                        title: i,
                        showTitle: !1,
                        showBackground: !1,
                        tag: k?._memoq?.tag,
                        tagStyle: k?.tagStyle || "free",
                        discountPrice: k?._memoq?.discountPrice,
                        originalPrice: k?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, g.jsx)(I.TinaParser, {
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
      var ga = t(13324);
      const ba = JSON.parse('{"de-DE":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Mehr erfahren","card_sr_only_discount_label":"Ermäßigter Preis, vorher","events_deck_modal_close_label":"Schließen","events_deck_modal_group_label":"Eventdetails","events_deck_modal_next_aria_label":"Nächstes Event","events_deck_modal_previous_aria_label":"Vorheriges Event","events_deck_next_aria_label":"Nächste Seite von Events","events_deck_paging_label":"Auf Seite {currentPage} von {totalPages}","events_deck_previous_aria_label":"Vorherige Seite von Events"},"en-US":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Learn More","card_sr_only_discount_label":"Discount price, previously","events_deck_modal_close_label":"Close","events_deck_modal_group_label":"Event Details","events_deck_modal_next_aria_label":"Next event","events_deck_modal_previous_aria_label":"Previous event","events_deck_next_aria_label":"Next Page of Events","events_deck_paging_label":"On page {currentPage} of {totalPages}","events_deck_previous_aria_label":"Previous Page of Events"},"es-ES":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","card_sr_only_discount_label":"Precio rebajado, anteriormente","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página siguiente de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"es-MX":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Más información","card_sr_only_discount_label":"Precio con descuento, anteriormente","events_deck_modal_close_label":"Cerrar","events_deck_modal_group_label":"Detalles del evento","events_deck_modal_next_aria_label":"Evento siguiente","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Página de eventos siguiente","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página de eventos anterior"},"fr-FR":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"En savoir plus","card_sr_only_discount_label":"Prix réduit, précédemment","events_deck_modal_close_label":"Fermer","events_deck_modal_group_label":"Détails de l’évènement","events_deck_modal_next_aria_label":"Évènement suivant","events_deck_modal_previous_aria_label":"Évènement précédent","events_deck_next_aria_label":"Page suivante des évènements","events_deck_paging_label":"Page {currentPage} sur {totalPages}","events_deck_previous_aria_label":"Page précédente des évènements"},"it-IT":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Altre informazioni","card_sr_only_discount_label":"Prezzo scontato: prima","events_deck_modal_close_label":"Chiudi","events_deck_modal_group_label":"Dettagli evento","events_deck_modal_next_aria_label":"Evento successivo","events_deck_modal_previous_aria_label":"Evento precedente","events_deck_next_aria_label":"Pagina degli eventi successiva","events_deck_paging_label":"Pagina {currentPage} di {totalPages}","events_deck_previous_aria_label":"Pagina degli eventi precedente"},"ja-JP":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}","card_learn_more":"詳細を閲覧","card_sr_only_discount_label":"割引価格(以前の価格)","events_deck_modal_close_label":"閉じる","events_deck_modal_group_label":"イベントの詳細","events_deck_modal_next_aria_label":"次のイベント","events_deck_modal_previous_aria_label":"前のイベント","events_deck_next_aria_label":"次のイベントのページ","events_deck_paging_label":"{currentPage}/{totalPages}ページ","events_deck_previous_aria_label":"前のイベントのページ"},"ko-KR":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}","card_learn_more":"더 알아보기","card_sr_only_discount_label":"할인 가격, 정가","events_deck_modal_close_label":"닫기","events_deck_modal_group_label":"이벤트 세부 정보","events_deck_modal_next_aria_label":"다음 이벤트","events_deck_modal_previous_aria_label":"이전 이벤트","events_deck_next_aria_label":"다음 이벤트 페이지","events_deck_paging_label":"{currentPage}/{totalPages} 페이지","events_deck_previous_aria_label":"이전 이벤트 페이지"},"pl-PL":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Dowiedz się więcej","card_sr_only_discount_label":"Cena promocyjna, poprzednio","events_deck_modal_close_label":"Zamknij","events_deck_modal_group_label":"Szczegóły wydarzenia","events_deck_modal_next_aria_label":"Następne wydarzenie","events_deck_modal_previous_aria_label":"Poprzednie wydarzenie","events_deck_next_aria_label":"Następna strona wydarzeń","events_deck_paging_label":"Strona {currentPage} z {totalPages}","events_deck_previous_aria_label":"Poprzednia strona wydarzeń"},"pt-BR":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}","card_learn_more":"Saiba mais","card_sr_only_discount_label":"Preço com desconto, antes","events_deck_modal_close_label":"Fechar","events_deck_modal_group_label":"Detalhes do evento","events_deck_modal_next_aria_label":"Próximo evento","events_deck_modal_previous_aria_label":"Evento anterior","events_deck_next_aria_label":"Próxima página de eventos","events_deck_paging_label":"Página {currentPage} de {totalPages}","events_deck_previous_aria_label":"Página anterior de eventos"},"ru-RU":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})","card_learn_more":"Подробности","card_sr_only_discount_label":"Цена по скидке, ранее","events_deck_modal_close_label":"Закрыть","events_deck_modal_group_label":"Описание события","events_deck_modal_next_aria_label":"Следующее событие","events_deck_modal_previous_aria_label":"Предыдущее событие","events_deck_next_aria_label":"Следующая страница с событиями","events_deck_paging_label":"На {currentPage}-й странице из {totalPages}","events_deck_previous_aria_label":"Предыдущая страница с событиями"},"zh-CN":{"card_label_platforms":"{platformList}上的{title}","card_label_platforms_tag":"{tag} {platformList}上的{title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","card_sr_only_discount_label":"折扣价格，此前","events_deck_modal_close_label":"关闭","events_deck_modal_group_label":"活动细节","events_deck_modal_next_aria_label":"下一个活动","events_deck_modal_previous_aria_label":"上一个活动","events_deck_next_aria_label":"下一页活动","events_deck_paging_label":"在第{currentPage}页（共{totalPages}页）","events_deck_previous_aria_label":"上一页活动"},"zh-TW":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}","card_learn_more":"了解更多","card_sr_only_discount_label":"優惠價格，原為","events_deck_modal_close_label":"關閉","events_deck_modal_group_label":"活動詳情","events_deck_modal_next_aria_label":"下一個活動","events_deck_modal_previous_aria_label":"上一個活動","events_deck_next_aria_label":"下一頁活動","events_deck_paging_label":"第 {currentPage} 頁（共 {totalPages} 頁）","events_deck_previous_aria_label":"上一頁活動"}}'),
        pa = (0, G.withIntl)(({
          id: e,
          position: a,
          title: t,
          size: s = "md",
          sectionTitle: r = "",
          expandedType: i = null,
          modalProps: n = {
            content: null,
            className: "",
            contentClassName: ""
          },
          className: o,
          children: c,
          isProductCard: l,
          cardIds: d = null,
          theme: m = "none",
          isCoverCard: _,
          platformOptions: u,
          pricingOptions: f
        }) => {
          const {
            formatMessage: k,
            formatList: v
          } = (0, G.useIntl)(), [y, j] = (0, p.useSearchParams)(), x = (0, b.useRef)(null), [, w] = (0, ga.h)(), {
            track: N
          } = (0, h.useGtmTrack)(), S = window.location.href.includes("cms5"), C = "info", T = y.get(C), E = (0, b.useCallback)(() => {
            w(null), S || j(e => (e.delete(C), e), {
              replace: !0
            }), N({
              event: "trackPageview"
            })
          }, [S, w, j, N]), I = (0, b.useCallback)(() => {
            if (!n?.content || !x.current || !i || "linkout" === i) return;
            const r = x.current,
              o = window.getComputedStyle(r),
              c = parseInt(o.getPropertyValue("width"), 10),
              l = parseInt(o.getPropertyValue("height"), 10),
              _ = r.getBoundingClientRect(),
              {
                content: u,
                className: g,
                contentClassName: b
              } = n,
              p = "fob" === s ? "fob" : "default";
            w({
              content: u,
              onClose: E,
              rect: _,
              width: c,
              height: l,
              className: g,
              contentClassName: b,
              fadeIn: !1,
              cardIds: d,
              theme: m,
              activeId: e,
              gtm: {
                card_id: e,
                card_name: t?.toLowerCase(),
                position: a
              },
              aspectRatio: p,
              cardDimensions: {
                size: s,
                type: i
              }
            }), N({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: e,
              card_name: t?.toLowerCase(),
              position: a
            })
          }, [d, i, e, n, E, a, w, s, m, t, N]), A = (0, b.useCallback)(async s => {
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
          }, [e, I, a, r, j, t, N]), M = (0, b.useMemo)(() => {
            const e = u?._memoq?.platformTag || "";
            if (u?.platformsAndLinks?.length > 0) {
              const a = u?.platformsAndLinks?.map(({
                  buttonText: e
                }) => e).filter(Boolean),
                s = v(a, {
                  type: "conjunction"
                });
              return e ? k(Ze.card_label_platforms_tag, {
                tag: e,
                title: t,
                platformList: s
              }) : k(Ze.card_label_platforms, {
                title: t,
                platformList: s
              })
            }
            return e ? k(Ze.card_label_tag, {
              tag: e,
              title: t
            }) : !0 === f?.hasPricingOptions ? null : t
          }, [v, k, u?._memoq?.platformTag, u?.platformsAndLinks, f?.hasPricingOptions, t]);
          return (0, b.useEffect)(() => {
            T === e && I()
          }, [T, e]), _ || "linkout" === i ? (0, g.jsx)("div", {
            ref: x,
            className: o,
            "data-size": s,
            "data-type": i,
            "data-product": l,
            role: "button",
            "aria-label": M,
            children: c
          }) : (0, g.jsx)("button", {
            ref: x,
            onClick: A,
            className: o,
            "data-size": s,
            "data-type": i,
            "data-product": l,
            tabIndex: "linkout" !== i ? 0 : -1,
            "aria-label": M,
            type: "button",
            children: c
          })
        }, ba),
        fa = {
          card: "rockstargames-sites-gta-gen9c49a3d41905733d6aa83dcd3463df7d5",
          content: "rockstargames-sites-gta-gen9b41eac21ba69f02fe26f8dafa8433207",
          coverCardWrapper: "rockstargames-sites-gta-gen9dd482c08ed9fdc5cef20f63dd6720e13",
          expandedContent: "rockstargames-sites-gta-gen9fea5414b5f55420cfcd6c6ee12a393b3",
          imageHolder: "rockstargames-sites-gta-gen9d893e3eab0a5754bb28882ceb8de6b59",
          pillBtn: "rockstargames-sites-gta-gen9f3a91bbe53323354bc84e26197787c03",
          selected: "rockstargames-sites-gta-gen9a03c60979e8d6882b5b8ce0f0301b7e9",
          text: "rockstargames-sites-gta-gen9e961062768d06292ff6cb598ae1c5e69"
        },
        ha = ({
          payload: e,
          prod: a,
          images: t,
          size: s,
          title: r,
          initial: i,
          animate: n,
          variants: o,
          id: c,
          position: l,
          sectionTitle: d,
          expandedType: m,
          context: _,
          children: p,
          expandedCardContents: f,
          textOverlayProps: h = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          deckProps: k = {},
          modalProps: v = [],
          theme: y,
          cardIds: j,
          pricingOptions: x,
          platformOptions: w = null,
          pricingContainerHeight: N,
          isCoverCard: S = !1,
          isProductCard: C = !1
        }) => {
          const T = (0, I.useTinaComponents)(),
            E = (0, b.useMemo)(() => ({
              ...T,
              HTMLElement: ae,
              ImageWithBadge: Ie.A,
              Carousel: u.A,
              GroupOfItems: Oe.default
            }), [T]),
            A = (0, b.useMemo)(() => (0, g.jsx)(ua, {
              type: m,
              components: E,
              payload: e,
              prod: a,
              images: t,
              size: s,
              title: r,
              context: _,
              textOverlayProps: h,
              initial: i,
              animate: n,
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
            }), [m, E, e, a, t, s, r, _, h, i, n, o, y, j, x, c, N, S, w, C, f]),
            M = [fa.card, S ? fa.coverCardWrapper : ""].join(" ");
          return (0, g.jsx)(pa, {
            id: c,
            position: l,
            sectionTitle: d,
            title: r,
            size: s,
            expandedType: m,
            images: t,
            deckProps: k,
            modalProps: {
              content: A,
              ...v
            },
            className: M,
            isProductCard: C,
            cardIds: j,
            theme: y,
            isCoverCard: S,
            platformOptions: w,
            pricingOptions: x,
            children: p
          })
        },
        ka = {
          foreground: "rockstargames-sites-gta-gen9d858cc29f8933cc96ea1b20f734c1796",
          imageMask: "rockstargames-sites-gta-gen9d656190323ba10afc580adbf82303a8b",
          layered: "rockstargames-sites-gta-gen9a7a1d10cda2bf3de7960b4fadf2f7a4e",
          layeredImageFrame: "rockstargames-sites-gta-gen9cfc6074d8b476125230142c79438a249",
          logo: "rockstargames-sites-gta-gen9ca32213b5f72baeb68ba9a21ee8a295b",
          "sm-horizontal": "rockstargames-sites-gta-gen9f5ab2fbb234fc0631784968dc2b1da75"
        },
        {
          LiteMotion: va,
          Animations: ya
        } = Ge,
        {
          getVariant: ja,
          variants: xa,
          transitions: wa
        } = ya,
        Na = ({
          image: e,
          zIndex: a,
          prod: t
        }) => {
          const {
            alt: s,
            src: r
          } = (0, I.useImageParser)({
            ...e,
            prod: t
          });
          return (0, g.jsx)("img", {
            src: r.mobile,
            alt: s ?? "",
            style: {
              zIndex: a
            }
          })
        },
        Sa = ({
          images: e = [],
          className: a = "",
          prod: t = !1,
          expandedView: s = !1,
          style: r = {}
        }) => {
          const i = (0, b.useMemo)(() => e?.length && 0 !== e.length ? e.map((e, a) => (0, g.jsx)(va, {
            className: (0, A.default)(ka[e?.specialClass] ?? ka.imageMask, ka[e?.sizeClass], e?.className),
            variants: ja(e?.specialClass ?? "imageMask", s ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: wa.cardOpen,
            children: (0, g.jsx)(Na, {
              image: e,
              prod: t,
              zIndex: 100 + a
            })
          }, e.key)) : null, [e, s, t]);
          return (0, g.jsx)(va, {
            className: (0, A.default)(ka.layeredImageFrame, e.length > 1 ? ka.layered : ka.flat, a),
            style: r,
            initial: xa.fade.in.initial,
            animate: xa.fade.in.animate,
            transition: wa.instantFade,
            "data-expanded-view": s,
            children: i
          })
        };
      var Ca = t(48478);
      const Ta = ({
          expandedType: e,
          to: a,
          children: t,
          style: s,
          sectionTitle: r = "",
          id: i,
          cardTitle: n,
          position: o
        }) => {
          const {
            track: c
          } = (0, h.useGtmTrack)(), l = (0, b.useCallback)(() => {
            c({
              event: "card_click",
              link_url: a,
              card_id: i,
              card_name: n,
              element_placement: r.toLowerCase(),
              position: o
            })
          }, [r, a, i, n, r, o]);
          return "linkout" === e && a ? (0, g.jsx)(Ca.A, {
            to: a,
            style: s,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: l,
            children: t
          }) : t
        },
        Ea = {
          content: "rockstargames-sites-gta-gen9c65ddebc8ee2173143d87e1079f2455a",
          customModalContent: "rockstargames-sites-gta-gen9fc96cdfdaeb2ad81b1b409fcb233657e",
          pillBtn: "rockstargames-sites-gta-gen9ddaada7b150b18de710c9f77384c6537",
          selected: "rockstargames-sites-gta-gen9b4fbb4006fc27b899dac5e522ef574e3"
        },
        {
          variants: Ia
        } = Ge.Animations,
        Aa = ({
          id: e,
          title: a,
          content: t,
          size: s = "md",
          expandedType: r = "short",
          textOverlayProps: i = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: n = [],
          deckProps: o = {},
          to: c = null,
          tina: l = {},
          position: d = 0,
          sectionTitle: m = "",
          theme: _,
          pricingOptions: u,
          cardIds: p,
          platformOptions: f = null
        }) => {
          const h = (0, I.useTinaPayload)(),
            k = l?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            [v, y] = (0, b.useState)(o?.size ?? s),
            [j, x] = (0, b.useState)(0),
            w = void 0 !== u?.hasPricingOptions || void 0 !== f?.hasPlatformOptions;
          return (0, b.useEffect)(() => {
            y(o?.size ?? s)
          }, [o?.size, s]), (0, g.jsx)(ha, {
            id: e,
            title: a,
            size: v,
            expandedType: r,
            images: n,
            deckProps: o,
            prod: k,
            payload: {
              content: t,
              meta: {}
            },
            variants: Ia.plainCard,
            textOverlayProps: i,
            modalProps: {
              className: Ea.customModal,
              contentClassName: Ea.customModalContent
            },
            expandedCardContents: (0, g.jsx)(Sa, {
              images: n,
              prod: k,
              expandedView: !0
            }, `expanded-${e}`),
            position: d,
            sectionTitle: m,
            theme: _,
            cardIds: p,
            pricingOptions: u,
            platformOptions: f,
            pricingContainerHeight: j,
            isProductCard: w,
            children: (0, g.jsx)(Ta, {
              expandedType: r,
              to: c,
              sectionTitle: m,
              id: e,
              cardTitle: a,
              position: d,
              children: (0, g.jsx)("div", {
                className: Ea.content,
                "data-product": w,
                children: (0, g.jsx)(la, {
                  title: a,
                  size: v,
                  textOverlayProps: i,
                  pricingOptions: u,
                  platformOptions: f,
                  setPricingContainerHeight: x,
                  children: (0, g.jsx)(Sa, {
                    images: n,
                    prod: k
                  })
                })
              })
            })
          })
        },
        Ma = (0, G.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            description: "Tracklist",
            defaultMessage: "Tracklist"
          }
        }),
        Pa = {
          bodySmall: "rockstargames-sites-gta-gen9deed018133fca0148d0bf72fbe95bcd6"
        },
        La = ({
          track: e,
          artist: a
        }) => (0, g.jsxs)("div", {
          className: Pa.track,
          children: [(0, g.jsx)("p", {
            children: e
          }), (0, g.jsx)("p", {
            className: Pa.bodySmall,
            children: a
          })]
        }),
        za = (0, F.g)(({
          content: e = []
        }) => (0, g.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9e2587587f57e43c9ca90d1e16e4a6ca6",
          children: [(0, g.jsx)("h4", {
            className: "rockstargames-sites-gta-gen9ef167f82b058360b2b6a3466ca73d7de",
            children: (0, g.jsx)(G.FormattedMessage, {
              ...Ma.components_track_list_title
            })
          }), (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9beaa4a0a8d9f3a6ef20ee517f222a3c2",
            children: (0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c06a65e90847e8b44df20f2aceb57038",
              children: e?.map(e => (0, g.jsx)(La, {
                track: e.track,
                artist: e.artist
              }, e.key))
            })
          })]
        }));
      var Ra = t(62012);
      const {
        variants: Da
      } = Ge.Animations;
      var Ba = t(30631),
        Ga = t(75027),
        Oa = t(84220),
        $a = t(31147);
      const Fa = "rockstargames-sites-gta-gen9b7d3d1587271986440f5870d8d02eb3b",
        Va = "rockstargames-sites-gta-gen9fcffcc6e594fbf9a4a6e9ab5a8d034c7",
        Ha = {
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
        qa = ({
          title: e = "thumbnail gallery",
          thumbsPerView: a = 3,
          loop: t = !1,
          navigation: s = !1,
          slideChildren: r = [],
          variants: i = {
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
            track: o
          } = (0, h.useGtmTrack)(), [c, l] = (0, b.useState)([Ga.A, Oa.A, $a.A]), [d, m] = (0, b.useState)(null), [_, u] = (0, b.useState)(null);
          return (0, b.useEffect)(() => {
            const e = [Ga.A, Oa.A, $a.A];
            s && e.push(B.A), l(e)
          }, [s]), (0, b.useEffect)(() => {
            if (!r) return;
            const e = r.map((e, a) => (0, g.jsx)(O.qr, {
              children: e
            }, Symbol(a).toString()));
            u(e)
          }, [r]), _ ? (0, g.jsxs)(P.motion.div, {
            className: "rockstargames-sites-gta-gen9f2d55de974817e455a162843125a8771",
            variants: i.parent,
            transition: n.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, g.jsx)(P.motion.div, {
              className: Fa,
              variants: i.main,
              transition: n.main,
              initial: "initial",
              animate: "animate",
              children: (0, g.jsx)(O.RC, {
                loop: t,
                navigation: s,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: d
                },
                modules: c,
                breakpoints: Ha,
                className: Fa,
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
                children: _
              })
            }), (0, g.jsx)(P.motion.div, {
              className: Va,
              variants: i.thumbs,
              transition: n.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, g.jsx)(O.RC, {
                threshold: 50,
                onSwiper: m,
                loop: t,
                breakpoints: Ha,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: c,
                className: Va,
                children: _
              })
            })]
          }) : null
        },
        Wa = ({
          images: e,
          title: a,
          expandedView: t,
          variants: s,
          transition: r
        }) => {
          const i = (0, b.useMemo)(() => e && 0 !== e?.length ? e.map((e, a) => e?.image?.sources ? (0, b.createElement)(Ie.A, {
            ...e,
            key: a,
            style: {
              ...e?.style,
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null) : null, [e]);
          return !i?.length || i?.length < 1 ? null : 1 === i.length ? i : (0, g.jsx)(qa, {
            slideChildren: i,
            title: a,
            navigation: t,
            thumbsVisible: t,
            spaceBetween: 0,
            variants: s,
            transition: r
          })
        },
        Ua = {
          customModalContent: "rockstargames-sites-gta-gen9ecdc3da21cda9331cebe845898b7fa7b",
          pillBtn: "rockstargames-sites-gta-gen9cf00b554598ff2d6e233a11c7c829c7d",
          selected: "rockstargames-sites-gta-gen9cbdd37e11b752cff831c5a96aeb7dbeb"
        },
        {
          transitions: Ka,
          variants: Xa
        } = Ge.Animations,
        Ya = ({
          id: e,
          title: a,
          content: t,
          size: s = "md",
          expandedType: r = "gallery",
          textOverlayProps: i = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: n = [],
          deckProps: o = {},
          tina: c = {},
          payload: l,
          position: d = 0,
          sectionTitle: m = "",
          cardIds: _
        }) => {
          const u = (0, I.useTinaPayload)(),
            p = l ?? u,
            f = c?.payload?.meta?.cdn ?? p?.meta?.prod ?? !1,
            h = ((e, a) => e?.map(e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e))(n, f),
            [k, v] = (0, b.useState)(o?.size ?? s),
            {
              parent: y,
              main: j,
              thumbs: x
            } = Xa?.cardWithImageGallery?.gallery ?? {};
          return (0, b.useEffect)(() => {
            v(o?.size ?? s)
          }, [o?.size, s]), (0, g.jsx)(ha, {
            id: e,
            position: d,
            sectionTitle: m,
            payload: {
              content: t,
              meta: {},
              payload: p
            },
            title: a,
            size: k,
            expandedType: r,
            images: h,
            deckProps: o,
            prod: f,
            variants: Xa.cardWithImageGallery,
            textOverlayProps: i,
            modalProps: {
              className: Ua.customModal,
              contentClassName: Ua.customModalContent
            },
            expandedCardContents: (0, g.jsx)(Wa, {
              images: h,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: y,
                main: j,
                thumbs: x
              },
              transition: {
                parent: Ka.cardOpen,
                main: Ka.cardOpen,
                thumbs: Ka.cardOpen
              }
            }, `expanded-${e}`),
            cardIds: _,
            children: (0, g.jsx)("div", {
              className: Ua.content,
              children: (0, g.jsx)(la, {
                title: a,
                size: k,
                textOverlayProps: i,
                children: (0, g.jsx)(Wa, {
                  images: h,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        };
      var Za = t(19236);
      const Ja = {
          content: "rockstargames-sites-gta-gen9db8d475894c24c580268644776443fa6",
          customModalContent: "rockstargames-sites-gta-gen9c758020ea3f5943e5f8a7d89ade3da69",
          logo: "rockstargames-sites-gta-gen9f5649436402db0dddc6a55b41c5556cc",
          pillBtn: "rockstargames-sites-gta-gen9e810afee3cb66fbbb03c473e5aa2f5be",
          secondary: "rockstargames-sites-gta-gen9d761507b70662391f68f5018510655ea",
          selected: "rockstargames-sites-gta-gen9e4ad62c1f330692bdb75370f5bbe66eb"
        },
        {
          variants: Qa
        } = Ge.Animations,
        et = ({
          id: e,
          logoImage: a = null,
          logoImageHeight: t = "auto",
          name: s = null,
          title: r,
          titleSizeClass: i = null,
          content: n,
          ctaText: o,
          ctaURL: c,
          size: l = "md",
          expandedType: d = "short",
          textOverlayProps: m = {
            hasTextOverlay: !1,
            tag: "",
            collapsedHasTag: !1,
            expandedHasTag: !1,
            description: "",
            collapsedHasDescription: !1
          },
          images: _ = [],
          deckProps: u = {},
          to: p = null,
          tina: f = {},
          cardIds: h,
          theme: k
        }) => {
          const v = (0, G.useIntl)(),
            y = (0, I.useTranslations)({
              payload: f?.payload,
              variables: f?.variables ?? {}
            }),
            [j, x] = (0, b.useState)(u?.size ?? l),
            w = (0, I.useGetCdnSource)(a ?? null),
            N = y?.content?.[0],
            S = N?.body ?? N?._memoq?.body;
          return (0, b.useEffect)(() => {
            x(u?.size ?? l)
          }, [u?.size, l]), (0, g.jsx)(ha, {
            id: e,
            title: r,
            sectionTitle: s || r,
            size: j,
            expandedType: d,
            images: _,
            deckProps: u,
            payload: {
              content: n,
              meta: {}
            },
            variants: Qa.plainCard,
            textOverlayProps: m,
            modalProps: {
              className: Ja.customModal,
              contentClassName: Ja.customModalContent
            },
            expandedCardContents: (0, g.jsx)(Sa, {
              images: _,
              expandedView: !0
            }, `expanded-${e}`),
            theme: k,
            cardIds: h,
            isCoverCard: !0,
            children: (0, g.jsx)(Ta, {
              expandedType: d,
              to: p,
              sectionTitle: s || r,
              children: (0, g.jsxs)("div", {
                className: Ja.content,
                children: [a && (0, g.jsx)("img", {
                  className: Ja.logo,
                  alt: "logo",
                  src: w,
                  style: {
                    height: `${t}`
                  }
                }), (0, g.jsx)("h2", {
                  className: i,
                  children: r
                }), S && (0, g.jsx)("p", {
                  children: S
                }), (0, g.jsx)(Za.A, {
                  target: "newtab" === d ? "_blank" : "_self",
                  to: c || void 0,
                  children: o || v.formatMessage(Ze.card_learn_more)
                })]
              })
            })
          })
        };
      var at = t(36038),
        tt = t.n(at),
        st = t(60603);
      const rt = {
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
        it = ({
          src: e
        }) => (0, g.jsx)("div", {
          className: rt.cover,
          style: {
            background: `url(${e}) center/cover`
          }
        }),
        nt = ({
          timing: e = {
            current: 0,
            duration: 0
          },
          playing: a,
          audioRef: t,
          setPlaying: s,
          tracksOpen: r,
          setTracksOpen: i,
          trackData: n,
          setTrackId: o,
          trackBounds: c,
          setAutoNext: l
        }) => {
          const d = (0, b.useRef)(null),
            m = (0, b.useRef)(null),
            _ = (0, b.useRef)(null),
            [u, p] = (0, b.useState)(null),
            [f, h] = (0, b.useState)(!1),
            k = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, b.useEffect)(() => {
            if (!m.current || !_.current) return;
            const e = () => {
              _.current && m.current && p(_.current.clientWidth > m.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }, [_, m, e]), (0, b.useEffect)(() => {
            if (!d.current || !e?.duration) return;
            let a = null;
            const s = new(tt())(d.current),
              r = a => {
                if (d.current) {
                  const s = d.current.clientWidth;
                  if (!d.current.contains(a.srcEvent.target)) return;
                  const r = Math.max(0, a.srcEvent.offsetX),
                    i = Number(r / s * e.duration);
                  t.currentTime = i
                }
              },
              i = () => {
                a ? t.pause() : t.play()
              },
              n = () => {
                a = t.paused, t.pause()
              };
            return s.on("panstart", n), s.on("panleft", r), s.on("panright", r), s.on("panend", i), s.on("tap", r), () => {
              s.off("panstart", n), s.off("panleft", r), s.off("panright", r), s.off("panend", i), s.off("tap", r)
            }
          }, [d.current, e.duration]), (0, b.useEffect)(() => {
            const e = Number(t?.currentTime);
            (a || !isNaN(e) && 0 !== e) && h(!0)
          }, [a, t?.currentTime]), (0, g.jsxs)("div", {
            className: rt.controls,
            style: {
              "--track-color": n.color,
              "--track-mix-blend-mode": n.mix_blend_mode,
              "--current-pct": e.current / e.duration
            },
            children: [(0, g.jsx)("div", {
              className: [rt.controlsCurrentBg, f ? rt.controlsCurrentBgVisible : ""].join(" ")
            }), (0, g.jsx)("div", {
              className: rt.controlsTrack,
              ref: m,
              children: (0, g.jsx)("span", {
                className: [rt.controlsTrackTitle, u ? rt.controlsTrackAnimating : ""].join(" "),
                ref: _,
                children: n.title
              })
            }), (0, g.jsxs)("div", {
              className: rt.controlsButtons,
              children: [(0, g.jsx)("div", {
                className: rt.controlsPrevTrack,
                onClick: () => {
                  c && (o(c[0]), l(!0), s(!0))
                }
              }), (0, g.jsx)("div", {
                className: [rt.controlsPlayPause, a ? rt.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  s(!a)
                }
              }), (0, g.jsx)("div", {
                className: rt.controlsNextTrack,
                onClick: () => {
                  c && (o(c[1]), l(!0), s(!0))
                }
              })]
            }), (0, g.jsx)("div", {
              "data-active": r ? "" : null,
              className: rt.controlsTrackBurger,
              children: (0, g.jsx)("div", {
                className: rt.iconBurger,
                onClick: () => {
                  i(!r)
                }
              })
            }), (0, g.jsxs)("div", {
              className: rt.controlsScrub,
              children: [(0, g.jsx)("span", {
                children: k(e.current)
              }), (0, g.jsx)("div", {
                className: rt.controlsScrubTrack,
                ref: d
              }), (0, g.jsx)("span", {
                children: k(e.duration)
              })]
            })]
          })
        },
        ot = ({
          tracks: e,
          trackId: a,
          setTrackId: t,
          tracksOpen: s,
          setTracksOpen: r,
          setPlaying: i,
          setAutoNext: n
        }) => (0, g.jsxs)("div", {
          className: rt.tracks,
          children: [(0, g.jsx)("h4", {
            children: "Tracks"
          }), (0, g.jsx)("div", {
            className: rt.trackBurger,
            onClick: () => {
              r(!s)
            }
          }), (0, g.jsx)("div", {
            className: rt.trackList,
            children: e.map((e, s) => (0, g.jsxs)("a", {
              style: {
                "--highlight-color": e.color
              },
              className: a === e.id ? rt.trackActive : "",
              onClick: () => {
                t(e.id), i(!0), n(!0)
              },
              children: [(0, g.jsx)("span", {
                className: rt.trackIndex,
                children: String(s + 1).padStart(2, "0")
              }), (0, g.jsx)("span", {
                className: rt.trackTitle,
                children: e.title
              }), (0, g.jsx)("span", {
                className: rt.trackTime,
                children: e.duration
              })]
            }, e.id))
          })]
        }),
        ct = ({
          id: e,
          className: a = ""
        }) => {
          const {
            data: t
          } = (0, f.useQuery)(st.GetAudioAlbum, {
            variables: {
              id: e
            }
          }), [s, r] = (0, b.useState)(), [i, n] = (0, b.useState)(), [o, c] = (0, b.useState)(), [l, d] = (0, b.useState)(!1), [m, _] = (0, b.useState)(!1), [u, p] = (0, b.useState)(), [h, k] = (0, b.useState)({
            current: 0,
            duration: 0
          }), [v, y] = (0, b.useState)(!0);
          return (0, b.useEffect)(() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (n(a.data.rockstarAudioPlayerPlayTrackId), y(!1), _(!0)), m && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && _(!1)
              };
            return m && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }, [m]), (0, b.useEffect)(() => {
            if (!u) return;
            const e = () => {
                isNaN(u.duration) || k({
                  duration: u?.duration ?? 0,
                  current: u?.currentTime ?? 0
                })
              },
              a = () => {
                v && s && n(s[1])
              };
            return u.addEventListener("loadedmetadata", e), u.addEventListener("timeupdate", e), u.addEventListener("ended", a), () => {
              u.removeEventListener("loadedmetadata", e), u.removeEventListener("timeupdate", e), u.removeEventListener("ended", a)
            }
          }, [u, s, v]), (0, b.useEffect)(() => {
            m && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }, [m]), (0, b.useEffect)(() => {
            u && (m ? u.play() : u.pause(), d(!1))
          }, [m, u, o?.id]), (0, b.useEffect)(() => {
            if (!i) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex(e => e.id === i);
            r([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), c(e[a])
          }, [i]), (0, b.useEffect)(() => {
            t && n(t.audioAlbum.tracks[0].id)
          }, [t]), o ? (0, g.jsxs)("div", {
            className: [rt.player, rt[a], l ? rt.tracksOpen : ""].join(" "),
            children: [(0, g.jsx)("audio", {
              ref: e => {
                p(e)
              },
              src: o.mp3_src
            }), (0, g.jsx)(ot, {
              tracks: t.audioAlbum.tracks,
              setTrackId: n,
              trackId: i,
              tracksOpen: l,
              setTracksOpen: d,
              setPlaying: _,
              setAutoNext: y
            }), (0, g.jsx)(it, {
              src: o.cover_src
            }), (0, g.jsx)(nt, {
              setTrackId: n,
              trackBounds: s,
              tracksOpen: l,
              setTracksOpen: d,
              playing: m,
              setPlaying: _,
              timing: h,
              trackData: o,
              audioRef: u,
              setAutoNext: y
            })]
          }) : null
        };
      var lt = t(76475),
        dt = t(62429),
        mt = t(56386),
        _t = t.n(mt);
      const ut = ({
        isMulti: e,
        allowSelectAll: a,
        label: t,
        miscProps: s
      }) => {
        const [r, i] = (0, b.useState)(""), n = (0, b.useMemo)(() => _t()().getData(), []);
        return (0, g.jsx)(dt.A, {
          unstyled: !0,
          value: r,
          isMulti: e,
          allowSelectAll: a,
          options: n,
          placeholder: t,
          onChange: e => {
            return a = e?.target?.value, void i(a);
            var a
          },
          classNamePrefix: "country-select",
          ...s
        })
      };
      var gt = t(31613);
      const bt = ({
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
            i = new URLSearchParams(window.location.search).get(e);
          return i && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(0,gt.F)()}; path=/;`)
          })(e, i), r === a || i === a ? t : s
        },
        pt = ({
          disclaimer: e,
          text: a = null,
          title: t,
          className: s = "",
          style: r = {}
        }) => {
          const i = a ?? e?.text ?? null,
            n = t ? `<h5>${t}</h5>${i}` : i;
          return i ? (0, g.jsx)("div", {
            className: (0, A.default)("rockstargames-sites-gta-gen9dabdd1de832b01e0bfed17e54d2c48f3", s),
            dangerouslySetInnerHTML: {
              __html: n
            },
            style: r
          }) : null
        },
        ft = Ge.withFadeIn(({
          brands: e = [],
          content: a,
          ctas: t = [],
          disclaimer: s,
          image: r,
          large: i = !1,
          title: n,
          image_on_right: o = !1,
          style: c = {},
          className: l = "",
          ...d
        }) => {
          const {
            track: m
          } = (0, h.useGtmTrack)(), {
            ref: _,
            inView: u
          } = (0, D.useInView)({
            threshold: .6
          }), [p, f] = (0, b.useState)(!1), k = (0, I.useGetCdnSource)(r?.full_src ?? null) ?? null;
          return (0, b.useEffect)(() => {
            u && !p && (m({
              event: "page_section_impression",
              element_placement: d?._memoq?.title?.toLowerCase()
            }), f(!0))
          }, [u]), (0, g.jsxs)("div", {
            className: (0, A.default)("rockstargames-sites-gta-gen9e74584d7bd5e5fb4f95b021aea5552e9", i ? "rockstargames-sites-gta-gen9ecfb600d2677601c52a9b2ba82ea92a0" : "", o ? "rockstargames-sites-gta-gen9c1c30f86159b786afa96b64de61d4581" : "", k ? "" : "rockstargames-sites-gta-gen9a66c759349419a25e6ac54202d7fc085", l),
            style: c,
            ref: _,
            children: [k ? (0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c6a4abbe875f9c0cadd82e5b2b2ad16c",
              style: {
                background: `url(${k}) no-repeat center/cover`
              }
            }) : "", (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d14a6281007b78ed0259affd98faeada",
              children: [(0, g.jsx)(X, {
                brands: e
              }), (0, g.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9bfdc6a008924ac08afb945e8c501d855",
                children: [(0, g.jsx)("h2", {
                  className: "rockstargames-sites-gta-gen9be9969843594b0b04199cf75f098d91c",
                  children: n
                }), a ? (0, g.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9ea4015cd0c04b61c6b1f8a4a4a92e337",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                }) : ""]
              }), (0, g.jsx)(Z, {
                ctas: t
              }), (0, g.jsx)(pt, {
                disclaimer: s
              })]
            })]
          })
        }),
        ht = {
          bg: "rockstargames-sites-gta-gen9d1579fc7a24c295dbe890d8aae408666",
          bgDesktop: "rockstargames-sites-gta-gen9a2a6f7c576116735efd4216aeff67734",
          bgMobile: "rockstargames-sites-gta-gen9ea7956f9173046a1ed7292458dfb5b9e",
          imageTextGroupGroup: "rockstargames-sites-gta-gen9bde0bad35b79e73435595e8f30e4adfc",
          pillBtn: "rockstargames-sites-gta-gen9fa50d8c1862c94f2cd3200103d1d0e69",
          selected: "rockstargames-sites-gta-gen9de81b5eeed31c861fe39ee5062dee5a7"
        },
        kt = ({
          bg: e,
          image_text_groups: a = [],
          style: t = {},
          className: s = ""
        }) => {
          const r = (0, I.useGetCdnSource)(e?.image?.mobile?.full_src ?? null),
            i = (0, I.useGetCdnSource)(e?.image?.desktop?.full_src ?? null) ?? r;
          return a.length ? (0, g.jsxs)("div", {
            className: (0, A.default)(ht.imageTextGroupGroup, s),
            style: t,
            children: [r ? (0, g.jsx)("div", {
              className: [ht.bgMobile, ht.bg].join(" "),
              style: {
                background: `url(${r}) no-repeat center/cover`
              }
            }) : "", i ? (0, g.jsx)("div", {
              className: [ht.bgDesktop, ht.bg].join(" "),
              style: {
                background: `url(${i}) no-repeat center/cover`
              }
            }) : "", a.map((e, a) => (0, b.createElement)(ft, {
              ...e,
              key: a
            }))]
          }) : null
        };
      var vt = t(49516),
        yt = t(97990);
      const jt = "rockstargames-sites-gta-gen9a19bcd2b98d91e60c43b9de146e20f4e",
        xt = ({
          color: e
        }) => (0, g.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9e83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, g.jsx)("div", {
            className: jt
          }), (0, g.jsx)("div", {
            className: jt
          }), (0, g.jsx)("div", {
            className: jt
          })]
        });
      var wt = t(79955),
        Nt = t.n(wt);
      const St = {
          dropdownWrapper: "rockstargames-sites-gta-gen9bbf48ac7e790ff47ad1d5ee6fb7da4d9",
          items: "rockstargames-sites-gta-gen9a9afd60434d032bdba4ce040dbeb13b7",
          open: "rockstargames-sites-gta-gen9df17f0cb21e0947d4f391f915bd797d2",
          opener: "rockstargames-sites-gta-gen9cb53c003fd165ccb31dee0f32edca90f",
          secondary: "rockstargames-sites-gta-gen9fe6babf9fc35bb59a2b5225e4d6e7a50"
        },
        Ct = ({
          children: e,
          className: a,
          title: t
        }) => {
          const [s, r] = (0, b.useState)(!1);
          return (0, g.jsx)(Nt(), {
            active: s,
            focusTrapOptions: {
              onDeactivate: () => r(!1),
              clickOutsideDeactivates: !0
            },
            children: (0, g.jsxs)("div", {
              className: [St.dropdownWrapper, s ? St.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, g.jsx)("button", {
                className: St.opener,
                "aria-expanded": s,
                onClick: () => r(!s),
                children: t
              }), s && (0, g.jsx)("div", {
                className: St.items,
                onClick: () => r(!1),
                children: e
              })]
            })
          })
        },
        Tt = ({
          caption: e,
          children: a,
          ...t
        }) => e ? (0, g.jsxs)("figure", {
          ...t,
          children: [a, (0, g.jsx)("figcaption", {
            dangerouslySetInnerHTML: {
              __html: e
            }
          })]
        }) : a,
        Et = ({
          componentTitle: e,
          type: a,
          items: t
        }) => t?.length ? (0, g.jsx)("div", {
          className: "rockstargames-sites-gta-gen9aee2a98f97e777758e2d9bec034314ee",
          type: a,
          children: (0, g.jsxs)(M, {
            children: [e && (0, g.jsx)("h3", {
              children: e
            }), (0, g.jsx)(M, {
              className: "rockstargames-sites-gta-gen9dba17b5c55f8d40e2600765f1a60d6af",
              children: t.map((e, a) => {
                return e?.embed ? (0, g.jsx)(Tt, {
                  caption: e?.caption,
                  children: (0, g.jsx)("div", {
                    className: "rockstargames-sites-gta-gen9f0cd8278232673606f9c1715bd4950f6",
                    dangerouslySetInnerHTML: {
                      __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                    }
                  }, `${e?.key??a}_div`)
                }, e?.key ?? a) : e?.text ? (0, g.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: e.text
                  }
                }, e?.key ?? a) : void 0;
                var t
              })
            })]
          })
        }) : null,
        It = {
          animateBox: "rockstargames-sites-gta-gen9b07a3be6338e0ba4b346b072762582e3",
          animateMe: "rockstargames-sites-gta-gen9f7adfd0186421cac9ad0b300911cc9af",
          bar: "rockstargames-sites-gta-gen9bbb7e636ac00581aed0b7e148916cc11",
          barGrow: "rockstargames-sites-gta-gen9e0262d00df9ad8a47b08ae84160bfa51",
          fadeArea: "rockstargames-sites-gta-gen9f47504b50907dd0fd609719dad3f62bd",
          visible: "rockstargames-sites-gta-gen9c121e11e40215dc778fe8665eb38845d"
        },
        At = ({
          children: e,
          style: a
        }) => {
          const t = (0, b.useRef)(null);
          return (0, b.useEffect)(() => {
            new IntersectionObserver(e => {
              e.forEach(e => {
                e.isIntersecting && e.target.classList.add([It.visible])
              })
            }).observe(t?.current)
          }, []), (0, g.jsx)("div", {
            style: a,
            className: [It.fadeArea].join(" "),
            ref: t,
            children: e
          })
        },
        Mt = {
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
        Pt = ({
          style: e,
          className: a
        }) => {
          const t = {
              ...e
            },
            s = e["--border-image-source"],
            r = (0, I.useGetCdnSource)(s || null);
          return s && (t["--border-image-source"] = `url(${r})`), (0, g.jsx)("div", {
            className: (0, A.default)(Mt.border, a),
            style: {
              ...t
            }
          })
        },
        Lt = e => e?.images ? (0, g.jsx)("div", {
          className: (0, A.default)(Mt.layeredImage, Mt[e?.variantClass], Mt[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, g.jsxs)("div", {
            className: Mt.layersWrapper,
            children: [e?.images?.map((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: i,
                positionClassX: n,
                positionClassY: o,
                zIndex: c,
                className: l,
                style: d,
                alt: m,
                displayClass: _
              } = e;
              return (0, g.jsx)(Ra.A, {
                image: t,
                style: {
                  zIndex: c ?? a + 1
                },
                imageStyle: d,
                className: (0, A.default)(l, _, Mt.imageLayer, Mt[s], Mt[r], Mt[i], Mt[n], Mt[o]),
                alt: m
              }, c ?? a + 1)
            }), e?.borderImage && (0, g.jsx)(Pt, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        zt = e => {
          const {
            image: a,
            alt: t,
            thumbnail: s,
            caption: r,
            style: i,
            showOpenButtonMobile: n,
            showOpenButton: o,
            showDownloadButtonMobile: c,
            showDownloadButton: l,
            showZoomControls: d
          } = e, m = (0, f.useLocale)(), {
            isMobile: _
          } = (0, f.useWindowResize)(), u = a?.sources ?? {}, b = s?.image?.sources ?? {}, p = (0, I.useGetCdnSource)(u?.[m] ?? u?.en_us) ?? "", h = (0, I.useGetCdnSource)(b?.[m] ?? b?.en_us) ?? p, k = _ ? n : o, v = _ ? c : l;
          return (0, g.jsx)("div", {
            style: i,
            className: "rockstargames-sites-gta-gen9adbaa0167219cd891249a29faec00e8f",
            children: (0, g.jsxs)(N.Lightbox.Root, {
              altText: t || "",
              children: [(0, g.jsxs)(N.Lightbox.Trigger, {
                className: "rockstargames-sites-gta-gen9d769ad0525fc8e1ea83ce616ce6959bb",
                style: {
                  aspectRatio: s?.thumbnailAspectRatio
                },
                children: [(0, g.jsx)(N.Lightbox.Thumbnail, {
                  src: h,
                  style: {
                    objectPosition: s?.thumbnailPosition
                  }
                }), k && (0, g.jsx)(N.Lightbox.OpenIcon, {
                  style: {
                    boxSizing: "content-box"
                  }
                })]
              }), (0, g.jsxs)(N.Lightbox.Portal, {
                children: [(0, g.jsx)(N.Lightbox.Overlay, {}), (0, g.jsxs)(N.Lightbox.Content, {
                  children: [(0, g.jsx)(N.Lightbox.ZoomPan, {
                    children: (0, g.jsx)(N.Lightbox.Image, {
                      src: p
                    })
                  }), (0, g.jsxs)(N.Lightbox.Controls, {
                    children: [r && (0, g.jsx)(N.Lightbox.Caption, {
                      children: r
                    }), (0, g.jsx)(N.Lightbox.Close, {
                      showTooltip: !1
                    }), d && (0, g.jsx)(N.Lightbox.Zoom, {}), v && (0, g.jsx)(N.Lightbox.Download, {})]
                  })]
                })]
              })]
            })
          })
        },
        Rt = {
          animatePlaceholder: "rockstargames-sites-gta-gen9f6f51dbe7c2f79f974e9573386bba9da",
          "loader-keyframes": "rockstargames-sites-gta-gen9c3684b80c99c860036d9337843a7be58",
          multiSourceContainer: "rockstargames-sites-gta-gen9a99f18f8581cc9aeafa5111379885ee6",
          multiSourceImage: "rockstargames-sites-gta-gen9bc42c525ec0bd93df46e1999e278e9fb",
          pillBtn: "rockstargames-sites-gta-gen9c79dd3a7e7c5c11adfd19c623716576f",
          selected: "rockstargames-sites-gta-gen9c53675ad15e2ef662362850daab33791"
        },
        Dt = ({
          imageUrl: e,
          className: a,
          alt: t,
          style: s,
          lazy: r = !1,
          decoding: i = "auto",
          sizes: n = [320, 480, 768, 1024, 1440, 1920, 2560]
        }) => {
          const [o, c] = (0, b.useState)(!1);
          return (0, g.jsxs)("div", {
            className: Rt.multiSourceContainer,
            children: [!o && (0, g.jsx)("img", {
              className: [a, Rt.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: s
            }), (0, g.jsx)("img", {
              className: [Rt.multiSourceImage, a].join(" "),
              src: `${e}?im=Resize=1920`,
              srcSet: (l = e, n.map(e => `${l}?im=Resize=${e} ${e}w`).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: s,
              onLoad: () => {
                c(!0)
              },
              loading: r ? "lazy" : "eager",
              decoding: i
            })]
          });
          var l
        };
      var Bt = t(46764);
      const Gt = {
          tag: "rockstargames-sites-gta-gen9b660bb706132d84852c02df01cc6ed5a"
        },
        Ot = ({
          className: e,
          href: a,
          title: t,
          style: s
        }) => {
          const r = (0, g.jsxs)("div", {
            style: s,
            className: [Gt.tag, e].join(" "),
            children: [(0, g.jsx)("i", {}), t]
          });
          return void 0 !== a ? (0, g.jsx)(Ca.A, {
            to: a,
            children: r
          }) : r
        },
        $t = {
          info: "rockstargames-sites-gta-gen9ea1c51ae745531c2aeabbe3fcf603842",
          newswireBlock: "rockstargames-sites-gta-gen9b394b56c31488c36155ca82090c66e6f",
          newswireBlockNoSpecialOrder: "rockstargames-sites-gta-gen9c06d09374e8b5cc41f1732c691ee8e25",
          preview: "rockstargames-sites-gta-gen9ca2b587572d3c9a74cfc2fedf400ce8c",
          previewMobile: "rockstargames-sites-gta-gen9b3d4a8cfcc371ae39ce6220d009c5954",
          startAnimation: "rockstargames-sites-gta-gen9a56af3c95449fe8452485dfb6c89fc29",
          title: "rockstargames-sites-gta-gen9f1dfe59c3d981dbe132559620885ecea",
          top: "rockstargames-sites-gta-gen9eee9c5d3b714a61ac265369800a6d4e0"
        },
        Ft = ({
          section: e = "",
          index: a,
          post: t,
          noSpecialOrder: s = !1,
          focused: r
        }) => {
          const {
            track: i
          } = (0, h.useGtmTrack)(), [n] = (0, p.useSearchParams)(), o = t.preview_images_parsed.newswire_block, c = (0, Bt.Ub)(w.breakpoints.mobile), l = {
            default: 0 !== a || s ? o.square || o.d16x9 || o._fallback : o.d16x9 || o.square || o._fallback,
            mobile: o.square || o._fallback
          }, [d] = (0, f.usePreloadImg)(l.default), m = {
            default: {
              backgroundImage: `url(${l.default})`
            },
            mobile: {
              backgroundImage: `url(${l.mobile})`
            }
          }, _ = (0, b.useCallback)(() => {
            i({
              event: "card_click",
              card_id: t.id,
              card_name: t.name_slug.replace(/-/g, " "),
              link_url: t.url,
              position: a,
              element_placement: e?.toLowerCase()
            })
          }, [t]);
          return (0, g.jsx)(Ca.A, {
            to: t.url,
            className: [$t.newswireBlock, s ? $t.newswireBlockNoSpecialOrder : "", null !== d ? $t.startAnimation : ""].join(" "),
            focused: r,
            onClick: _,
            children: (0, g.jsxs)(g.Fragment, {
              children: [0 !== a || n.get("tag_id") ? (0, g.jsx)("div", {
                className: $t.preview,
                style: m.default
              }) : (0, g.jsx)("div", {
                className: c ? $t.previewMobile : $t.preview,
                style: c ? m.mobile : m.default
              }), (0, g.jsxs)("div", {
                className: $t.info,
                children: [(0, g.jsxs)("div", {
                  className: $t.top,
                  children: [t.primary_tags.length ? (0, g.jsx)(Ot, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, g.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, g.jsx)("h5", {
                  className: $t.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Vt = t(97984),
        Ht = t.n(Vt);
      const qt = (0, f.withTranslations)(({
          section: e = "",
          relativeTo: a = "",
          tagId: t = null,
          metaUrl: s = "/newswire",
          t: r
        }) => {
          const i = (0, f.useLocale)(),
            {
              track: n
            } = (0, h.useGtmTrack)(),
            [o, c] = (0, p.useSearchParams)(),
            {
              tagId: l = null
            } = (0, p.useParams)(),
            [d, m] = (0, b.useState)(l ?? t ?? o.get("tag_id")),
            [_, u] = (0, b.useState)(1),
            [k, v] = (0, b.useState)(20),
            [y, j] = (0, b.useState)([]),
            [x, w] = (0, b.useState)(null),
            [N, {
              loading: S,
              data: C
            }] = (0, f.useLazyQuery)(Ht(), {
              variables: {
                tagId: Number(d),
                page: _,
                metaUrl: s,
                limit: k,
                locale: i
              }
            });
          return (0, b.useEffect)(() => {
            u(1), j([]), v(20), m(l ?? t ?? o.get("tag_id")), N()
          }, [o.get("tag_id"), l, t]), (0, b.useEffect)(() => {
            const e = y;
            C?.posts?.paging && w(C?.posts?.paging), C?.posts?.results && j(e.concat(C?.posts?.results))
          }, [C]), (0, b.useEffect)(() => {
            (() => {
              const e = o.get("page"),
                a = Number(e ?? 1);
              v(20 * a), N()
            })()
          }, []), y.length ? (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e81cdae3d47ce0490795e6588b3c8464",
            "data-testid": "newswire-list",
            children: [(0, g.jsx)(Xt, {
              section: e,
              posts: y,
              relativeTo: a,
              noSpecialOrder: null !== d
            }), null !== x && x.nextPage ? (0, g.jsx)(Za.A, {
              className: "rockstargames-sites-gta-gen9e125d510192feb4ce2844cb97084b838",
              "data-testid": "more-stories",
              onClick: () => {
                const e = o.get("page"),
                  a = Number(e ?? _) + 1;
                u(a), 20 !== k && v(20), N(), c({
                  page: String(a),
                  ...d && {
                    tag_id: String(d)
                  }
                }, {
                  replace: !0
                }), n({
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
        Wt = {
          just1post: "rockstargames-sites-gta-gen9d46374473ed68a4121f88b44eba06359",
          pillBtn: "rockstargames-sites-gta-gen9f2d003dd0e6a129a56ea07208548787c",
          posts: "rockstargames-sites-gta-gen9cfe09d4dc8447b1e606404300d040e7a",
          related: "rockstargames-sites-gta-gen9b8a63bb419c1f2a8f94e099e1e650e48",
          selected: "rockstargames-sites-gta-gen9f94728c4a438800b9abab11a8b3e3c0a"
        },
        Ut = (0, f.withTranslations)(({
          posts: e,
          t: a
        }) => (0, g.jsxs)("section", {
          className: Wt.related,
          children: [(0, g.jsx)("h2", {
            children: a("Related Stories")
          }), (0, g.jsx)("div", {
            className: [Wt.posts, 1 === e.length ? Wt.just1post : ""].join(" "),
            children: e.map(e => (0, g.jsx)(Ft, {
              noSpecialOrder: !0,
              post: e
            }, e.id))
          })]
        })),
        Kt = {
          newswireBlocks: "rockstargames-sites-gta-gen9ea687097d9239d4830bc03090f0116f2",
          noSpecialOrder: "rockstargames-sites-gta-gen9d301334a72b626f8cc2f5b9733299e76"
        },
        Xt = (0, f.withGtmTracking)(({
          section: e = "",
          noSpecialOrder: a = !1,
          posts: t,
          gtmTrack: s
        }) => {
          const [r, i] = (0, b.useState)(null);
          return (0, b.useEffect)(() => {
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
            }), s(a), i(t.length)
          }, [t.length]), (0, g.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Kt.newswireBlocks, a ? Kt.noSpecialOrder : "", Kt.contextHome].join(" "),
            children: t.map((t, s) => (0, g.jsx)(Ft, {
              section: e,
              index: s,
              noSpecialOrder: a,
              post: t,
              focused: s === r
            }, t.id))
          })
        }),
        Yt = "rockstargames-sites-gta-gen9b013d77f453d7053bbcf06f173ff326c",
        Zt = ({
          children: e,
          data: a,
          onPageUpdate: t,
          page: s,
          className: r
        }) => (0, g.jsx)("a", {
          href: "#",
          className: s === a.page ? `rockstargames-sites-gta-gen9b577d5726806ec872ecdb8a46905734f ${r??""}` : "",
          onClick: e => {
            e.preventDefault(), t(s)
          },
          children: e
        }),
        Jt = ({
          data: e,
          onPageUpdate: a,
          className: t
        }) => {
          if (1 === e.pageCount) return null;
          const s = new Array(Math.min(e.pageCount, 8)),
            r = Math.max(e.pageCount - 8, 1),
            i = Math.max(2, e.page - 4),
            n = Array.from(s, (e, a) => a + Math.min(r, i));
          return (0, g.jsxs)("div", {
            className: `rockstargames-sites-gta-gen9e480f25872ae2a8b3fcd1e492d838301 ${t??""}`,
            children: [e.pageCount > 8 ? (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsx)(Zt, {
                data: e,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== n[0] ? (0, g.jsx)("div", {
                className: Yt,
                children: "..."
              }) : ""]
            }) : "", n.map(s => (0, g.jsx)(Zt, {
              data: e,
              onPageUpdate: a,
              page: s,
              className: t,
              children: s
            }, s)), e.pageCount > 8 ? (0, g.jsxs)(g.Fragment, {
              children: [n.slice(-1)[0] + 1 < e.pageCount ? (0, g.jsx)("div", {
                className: Yt,
                children: "..."
              }) : "", (0, g.jsx)(Zt, {
                data: e,
                onPageUpdate: a,
                page: e.pageCount,
                children: e.pageCount
              })]
            }) : ""]
          })
        },
        Qt = {
          responsiveFlexBox: "rockstargames-sites-gta-gen9fad65f02dd0ee292c36ec9d50b9c249a",
          responsiveFlexItem: "rockstargames-sites-gta-gen9f5215494f66727858110c9c73e2d882a",
          responsiveImage: "rockstargames-sites-gta-gen9d437a700a9b768227a114e70db78af03"
        },
        es = ({
          children: e,
          className: a,
          style: t
        }) => (0, g.jsx)("div", {
          className: [Qt.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        as = {
          responsiveFlexItem: "rockstargames-sites-gta-gen9e7371144db2e94a049204d4b178416ec"
        },
        ts = ({
          children: e,
          className: a,
          style: t
        }) => (0, g.jsx)("div", {
          className: [as.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        ss = {
          responsiveGridBox: "rockstargames-sites-gta-gen9e9ae27279428e611bbce59656759ed50",
          responsiveGridItem: "rockstargames-sites-gta-gen9b0d14e4a5e63a903117e93a392cbfb53"
        },
        rs = ({
          children: e,
          cols: a,
          className: t,
          rows: s,
          style: r
        }) => {
          const i = r ? {
            ...r
          } : {};
          return void 0 !== a && (i.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== s && (i.gridTemplateRows = `repeat(${s}, 1fr)`), (0, g.jsx)("div", {
            className: [ss.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: i,
            children: e
          })
        },
        is = {
          responsiveGridBox: "rockstargames-sites-gta-gen9e721a07d53edbb90b165a7720bb32c08",
          responsiveGridItem: "rockstargames-sites-gta-gen9a32d93b6ae982b5ad473f75cf86ff085"
        },
        ns = ({
          children: e,
          className: a,
          style: t
        }) => (0, g.jsx)("div", {
          className: [is.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: e
        }),
        os = {
          responsiveImage: "rockstargames-sites-gta-gen9f642b754e0efd503262ab7ca0c7b9f5b"
        },
        cs = ({
          src: e,
          className: a = "",
          animate: t,
          ariaLabel: s,
          style: r = {}
        }) => {
          const [i, n] = (0, f.usePreloadImg)(e);
          if (!i) return null;
          r.backgroundImage = `url(${e})`;
          const o = {
            ...r
          };
          return n && (o["--aspect-ratio"] = n.width / n.height), (0, g.jsx)("div", {
            role: "img",
            "aria-label": s ?? "R* Games",
            className: [os.responsiveImage, t ? os.animateBox : "", a].join(" "),
            style: o
          })
        },
        ls = {
          maxWidth: "rockstargames-sites-gta-gen9b2c8f49e280c2e7c204b30a4af8c13b9",
          responsiveSection: "rockstargames-sites-gta-gen9bd7167fb3a3edaf4df4d9a576efb1170"
        },
        ds = ({
          children: e,
          className: a,
          style: t,
          maxWidth: s
        }) => (0, g.jsx)("section", {
          className: [ls.responsiveSection, void 0 !== a ? a : ""].join(" "),
          style: t,
          children: s ? (0, g.jsx)("div", {
            className: ls.maxWidth,
            children: e
          }) : e
        });
      var ms = t(50182);
      const _s = ({
          html: e
        }) => (0, g.jsx)("div", {
          children: (0, ms.Ay)(e)
        }),
        us = ({
          thresholds: e,
          onThresholdReached: a,
          children: t
        }) => {
          const [s, r] = (0, b.useState)([]), [i, n] = (0, b.useState)(new Set);
          return (0, b.useEffect)(() => {
            const a = Array.from(new Set(e));
            a.sort((e, a) => e - a), r(a)
          }, [e]), (0, g.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [s.map(e => (0, g.jsx)(D.InView, {
              threshold: e,
              onChange: t => ((e, t) => {
                e && !i.has(t) && n(e => {
                  const r = new Set(e);
                  return s.forEach(e => {
                    e <= t && !r.has(e) && (r.add(e), a(e))
                  }), r
                })
              })(t, e),
              triggerOnce: !0,
              children: ({
                ref: a
              }) => (0, g.jsx)("div", {
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
        gs = () => {
          const {
            pathname: e
          } = (0, p.useLocation)();
          return (0, b.useEffect)(() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout(() => {
              e.scrollTop = 0
            }, 0)
          }, [e]), null
        };
      var bs = t(36346),
        ps = t(51299);
      const fs = ({
        children: e
      }) => (0, g.jsx)("div", {
        className: "rockstargames-sites-gta-gen9aae4d33d1eecebdc9b489f8d7a1ad708",
        children: (0, g.jsx)("div", {
          className: "rockstargames-sites-gta-gen9c573fe5c7bdcc46c4d57ec4a2c275e3b",
          children: e
        })
      });
      var hs = t(85618);
      const ks = ({
          children: e,
          style: a,
          theme: t
        }) => {
          const [s, r] = (0, b.useState)(t);
          return (0, b.useEffect)(() => {
            t && r(t)
          }, [t]), (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e5e0faf6ab9871fd60b958c6f7dcf519",
            style: a,
            "data-theme": s,
            children: e
          })
        },
        vs = {
          card: "rockstargames-sites-gta-gen9f93031694e202c791c00e5ae3497250a",
          gameTitle: "rockstargames-sites-gta-gen9a1fe577b937c0e16250bf38e9d775061",
          info: "rockstargames-sites-gta-gen9dabce30c906fad181d7cc188f1632c04",
          screencap: "rockstargames-sites-gta-gen9fd37974f16cd1f2376fef29d4af8d948",
          screencapLoaded: "rockstargames-sites-gta-gen9b8d4ef3e1a73c58f4002eab351d4eec2",
          title: "rockstargames-sites-gta-gen9fd87597d0f90ed6d8a2081da933f53bc",
          videoPreview: "rockstargames-sites-gta-gen9a626ad482ff0be0336e75929516654d5"
        },
        ys = ({
          video: e,
          size: a = 640
        }) => {
          const t = () => e.screencap.includes("akamai") ? `${e.screencap}?im=Resize=${a}` : e.screencap,
            [s] = (0, f.usePreloadImg)(t());
          return (0, g.jsx)("div", {
            className: [vs.screencap, s ? vs.screencapLoaded : ""].join(" "),
            "aria-hidden": "true",
            role: "img",
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        js = ({
          gameTitleNecessary: e = !0,
          openInNewWindow: a = !1,
          video: t,
          size: s,
          toExplicit: r
        }) => {
          const i = r ?? `/videos/${t.id}`,
            n = {
              className: vs.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            o = (0, g.jsxs)("div", {
              className: vs.card,
              children: [(0, g.jsx)(ys, {
                video: t,
                size: s
              }), (0, g.jsxs)("div", {
                className: vs.info,
                children: [e ? (0, g.jsx)("div", {
                  className: vs.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, g.jsx)("h5", {
                  className: vs.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return a ? (0, g.jsx)("a", {
            href: i,
            target: "_blank",
            ...n,
            children: o
          }) : (0, g.jsx)(Ca.A, {
            to: i,
            ...n,
            children: o
          })
        },
        xs = {
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
        ws = (0, G.defineMessages)({
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
        Ns = (0, F.g)(({
          videos: e
        }) => {
          const a = (0, f.useLocale)(),
            {
              formatMessage: t
            } = (0, G.useIntl)(),
            {
              track: s
            } = (0, h.useGtmTrack)(),
            {
              setBodyIsLocked: r
            } = (0, f.useBodyScrollable)("VideoCarousel"),
            [i, n] = (0, b.useState)(0),
            [o, c] = (0, b.useState)(0),
            l = (0, b.useRef)(null),
            d = (0, b.useRef)(null);
          (0, b.useEffect)(() => {
            if (!l.current || !d.current) return;
            const a = new(tt())(l.current);
            a.get("press").set({
              time: 0
            }), a.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                n(i - 1 < 0 ? 0 : i - 1), c(0)
              },
              o = () => {
                const a = i + 1 >= e.length - 1 ? e.length - 1 : i + 1;
                n(a), c(0)
              },
              m = e => {
                c(e.isFinal ? 0 : e.deltaX), "panleft" !== e.type && "panright" !== e.type || !d.current?.classList.contains(xs.dragging) || t() && r(!0)
              },
              _ = () => {
                t() && r(!1), c(0)
              },
              u = e => {
                "press" === e.type && l.current?.classList.add(`${xs.disableClick}`), "tap" === e.type && (l.current?.classList.remove(`${xs.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                t() && r(!1), l.current && l.current.classList.remove(`${xs.disableClick}`)
              },
              b = () => {
                t() && r(!1)
              };
            return d.current.addEventListener("transitionend", b), a.on("swiperight", s), a.on("swipeleft", o), a.on("pan", m), a.on("panend", _), a.on("press tap", u), a.on("pressup", g), () => {
              a.off("swiperight", s), a.off("swipeleft", o), a.off("pan", m), a.off("panend", _), a.off("press tap", u), a.off("pressup", g), d.current && d.current.removeEventListener("transitionend", b), c(0)
            }
          }, [l.current, i]);
          const m = e => {
            const a = "VI" === e.game?.titleSlug;
            return [e?.titleHomepage ?? e?.title, a ? "/VI" : `/videos/${e.id}`, a ? "_blank" : "_self", t(a ? ws.learn_more : ws.watch_more)]
          };
          return (0, g.jsxs)("section", {
            className: xs.carousel,
            children: [(0, g.jsx)("div", {
              className: xs.track,
              ref: l,
              children: (0, g.jsx)("div", {
                className: `${xs.items} ${0!==o?xs.dragging:""}`,
                ref: d,
                style: {
                  transform: `translateX(calc(-${100*i}% + ${o}px))`
                },
                children: e.map((e, a) => {
                  const [s, r, n] = m(e), o = "_blank" === n ? `${s} ${t(ws.aria_label_open_new_window)}` : `${s}`;
                  return (0, g.jsx)(p.NavLink, {
                    className: i === a ? xs.active : "",
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through screencap",
                    "data-gtm-label": r,
                    to: r,
                    target: n,
                    rel: "noreferrer",
                    "aria-label": o,
                    onDragStart: e => {
                      e.preventDefault()
                    },
                    children: (0, g.jsx)(ys, {
                      video: e,
                      size: 1280
                    })
                  }, e.id)
                })
              })
            }), (0, g.jsxs)("div", {
              className: xs.slidesContent,
              children: [(0, g.jsx)("div", {
                className: xs.text,
                children: e.map((e, t) => {
                  const [r, n, o, c] = m(e);
                  return (0, g.jsxs)("div", {
                    className: [xs.info, t === i ? xs.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": n,
                    children: [(0, g.jsxs)("div", {
                      className: xs.title,
                      children: [(0, g.jsxs)("div", {
                        className: xs.gameTitle,
                        children: [e.game.title, "fr_fr" === a && " "]
                      }), (0, g.jsx)("h2", {
                        className: xs.videoTitle,
                        children: r
                      })]
                    }), (0, g.jsx)(Za.A, {
                      to: n,
                      target: o,
                      role: "presentation",
                      className: xs.cta,
                      "aria-label": `${c}, ${e.game.title} ${r}`,
                      onClick: (l = n, () => {
                        s({
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
              }), (0, g.jsx)("section", {
                className: xs.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: e.map((e, a) => (0, g.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => n(a),
                  className: i === a ? xs.active : "",
                  type: "button"
                }, e.id))
              })]
            })]
          })
        }),
        Ss = (0, G.defineMessages)({
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
        Cs = {
          img: "rockstargames-sites-gta-gen9d87037fda2ea106061c7a614036a89df",
          imgContentful: "rockstargames-sites-gta-gen9b9f3c994ce8a97ac6530cf0a85e5abe0",
          wide: "rockstargames-sites-gta-gen9dc444c089b89129c0a39bc61845d531f"
        };
      (0, f.importAll)(t(86751));
      const Ts = ({
          isWideCard: e = !1,
          size: a = 640,
          title: s,
          titleSlug: r,
          inGlobalNav: i = !1
        }) => {
          const {
            isMobile: n
          } = (0, f.useWindowResize)(), o = (0, b.useMemo)(() => {
            let s = "";
            return e && (s = n ? t(25087)(`./${r}/mobile/global.jpg`) : t(58963)(`./${r}/desktop/global.jpg`)), s || (s = t(39294)(`./${r}.jpg`), s += `?im=Resize=${a}`), s
          }, [n, r]), [c] = (0, f.usePreloadImg)(o);
          let l = o;
          return (0, g.jsx)("div", {
            role: "img",
            "aria-label": s,
            style: {
              backgroundImage: `url(${l})`,
              borderRadius: i ? "unset" : ""
            },
            className: [Cs.img, c ? Cs.startAnimation : "", e ? Cs.wide : ""].join(" ")
          })
        },
        Es = {
          fobLink: "rockstargames-sites-gta-gen9d30ff40ba02b7ed14124da3ca9cd4f2b",
          wide: "rockstargames-sites-gta-gen9c9686ec502f78b05e47568667e90bd17"
        },
        Is = ({
          game: e,
          to: a
        }) => {
          const {
            titleSlug: t,
            urlOfficial: s = ""
          } = e, r = ["VI"].includes(t.toUpperCase());
          return (0, g.jsx)(Ca.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: a ?? s,
            target: "_self",
            className: [Es.fobLink, r ? Es.wide : ""].join(" "),
            reloadDocument: r,
            children: (0, g.jsx)(Ts, {
              title: e.title,
              titleSlug: t,
              isWideCard: r,
              size: r ? 1740 : 480
            })
          })
        },
        As = {
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
        Ms = (0, F.g)(({
          vids: e,
          games: a,
          title: t,
          gameTitleNecessary: s
        }) => {
          const r = (0, G.useIntl)(),
            {
              track: i
            } = (0, h.useGtmTrack)(),
            n = void 0 !== a ? "games" : "videos",
            [o, c] = (0, b.useState)(),
            [l, d] = (0, b.useState)(),
            [m, _] = (0, b.useState)(0),
            u = (0, b.useRef)(null),
            p = (0, b.useRef)(null),
            f = (0, b.useRef)(null);
          (0, b.useEffect)(() => {
            d({
              nextEl: f.current,
              prevEl: p.current
            })
          }, [f, p]), (0, b.useEffect)(() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), _(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }, [m]);
          const k = e => {
            u.current && (u.current.scrollLeft = 0), o?.slideTo(e)
          };
          let v;
          return v = "games" === n ? (0, g.jsx)(g.Fragment, {
            children: a.results.filter(e => "775700as" !== e.id).map((e, a) => (0, g.jsx)(O.qr, {
              className: As.slide,
              onFocus: () => k(a),
              children: (0, g.jsx)(Is, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id))
          }) : (0, g.jsx)(g.Fragment, {
            children: e.map((e, a) => (0, g.jsx)(O.qr, {
              className: As.slide,
              onFocus: () => k(a),
              children: (0, g.jsx)(js, {
                video: e,
                gameTitleNecessary: s
              })
            }, e.id))
          }), (0, g.jsxs)("section", {
            className: As.videoList,
            children: [(0, g.jsxs)("h3", {
              className: As.sectionHeader,
              children: [t, (0, g.jsxs)("div", {
                className: As.arrowNav,
                children: [(0, g.jsx)("button", {
                  className: (0, A.default)(As.arrow, As.previous),
                  type: "button",
                  ref: p,
                  "aria-label": r.formatMessage(Ss.previous_button_label),
                  onKeyDown: e => {
                    "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), o?.slidePrev())
                  }
                }), (0, g.jsx)("button", {
                  className: (0, A.default)(As.arrow, As.next),
                  type: "button",
                  ref: f,
                  "aria-label": r.formatMessage(Ss.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" !== e.key || e.shiftKey) "Enter" !== e.key && " " !== e.key && "Spacebar" !== e.key || (e.preventDefault(), o?.slideNext());
                    else {
                      const a = o?.slides[o?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, g.jsx)("div", {
              className: (0, A.default)(As.items, m % 1 != 0 ? As.partial : ""),
              children: (0, g.jsx)("div", {
                className: As.trackWrapper,
                ref: u,
                children: m && (0, g.jsx)(O.RC, {
                  className: As.track,
                  slidesPerView: m,
                  spaceBetween: 24,
                  onInit: e => {
                    c(e)
                  },
                  grabCursor: !0,
                  navigation: l,
                  modules: [B.A],
                  slideClass: (0, A.default)("swiper-slide"),
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
        Ps = ({
          children: e,
          ...a
        }) => (0, g.jsx)("span", {
          ...a,
          className: "rockstargames-sites-gta-gen9acd86b7f5778381df8fac4a3f7489f60",
          children: e
        });
      var Ls = t(64317),
        zs = t(72905),
        Rs = t(87335),
        Ds = t(73904);
      const Bs = ({
          title: e,
          content: a,
          size: t = "md",
          badgeText: s
        }) => {
          const r = {
            ...(0, I.useTinaComponents)(),
            HTMLElement: ae,
            UnorderedList: Ee.A
          };
          return (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cfa8d259e6ae05cd5f97d50306be5ffe",
            "data-size": t,
            children: (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a4a39548fac12526e8721ffa8813e66a",
              children: [s && (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9cf77e65e2af63ee114825607dde3d11e",
                children: s
              }), (0, g.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9f903ce7e605696e1bc18c4bc22274a6e",
                children: [e && (0, g.jsx)("h3", {
                  children: e
                }), (0, g.jsx)(I.TinaParser, {
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
          JS: Gs,
          CS: Os,
          XM: $s,
          Bg: Fs
        } = r,
        Vs = {
          Card: Aa,
          CardWithImageGallery: Ya,
          TextCard: Bs,
          ...i
        },
        Hs = Os.withFadeIn(Fs(({
          cards: e = [],
          size: a,
          name: t,
          title: s,
          description: r,
          disclaimer: i,
          customSlidesPerView: n = null,
          theme: o = "none",
          cardSizeBreakpoints: c = {},
          customAspectRatio: l = "3/1",
          titleBadge: d = null,
          id: m = ""
        }) => {
          const _ = (0, b.useRef)(null),
            u = (0, R.map)(e, "id"),
            f = $s({
              ids: u
            }),
            [h, k] = (0, b.useState)(n),
            [v] = (0, p.useSearchParams)(),
            [y, j] = (0, b.useState)(!1);
          (0, b.useEffect)(() => {
            if ("fob" === a) {
              const e = v.get("section");
              if (e && "games" === e && !y && (j(!0), _.current)) {
                const e = 100;
                window.scrollTo(0, _.current.offsetTop - e)
              }
            }
          }, []), (0, b.useEffect)(() => {
            if (!_.current) return;
            const e = () => {
              if (!_.current) return;
              const e = n || window.getComputedStyle(_.current).getPropertyValue("--slides-per-view");
              k(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          });
          const x = (0, b.useMemo)(() => {
            let e = 0;
            if (!f) return null;
            let t = "blank",
              r = !1;
            return f.forEach(e => {
              "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (r = e.tina.payload.content[0].excludeFromModal))
            }), f.reduce((i, n) => {
              if (n) {
                const {
                  id: c,
                  tina: l
                } = n, d = (0, R.clone)(l);
                (0, R.set)(d, "payload.meta.id", c);
                const m = u.filter(e => e !== t || e === t && !r);
                i.push((0, g.jsx)(I.TinaParser, {
                  components: Vs,
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
              return i
            }, [])
          }, [f, a]);
          return (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9cf8eaaa96e41e0c9b5a5a1745ded9986",
            "data-theme": o,
            ref: _,
            id: m,
            children: [(0, g.jsx)(Gs, {
              description: r,
              size: a,
              cardSizeBreakpoints: c,
              slideChildren: x,
              title: s,
              name: t,
              customSlidesPerView: h,
              customAspectRatio: l,
              titleBadge: d,
              theme: o
            }), i && (0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d6d0f9d842469dec608825829148dff6",
              children: (0, g.jsx)("span", {
                className: "rockstargames-sites-gta-gen9e22c0580e1e1d2471b4ca2e60e6b900f",
                children: (0, g.jsx)(_s, {
                  html: i
                })
              })
            })]
          })
        }));
      var qs = t(10475);
      const Ws = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        Us = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Ks = e => e.scrollHeight > e.clientHeight;

      function Xs(e, a) {
        const t = {
          ...e
        };
        return (0, R.forOwn)(e, (e, s) => {
          if ("image" === s) {
            const e = t[s];
            t[s] = {
              ...e,
              prod: a
            }
          } else(0, R.isObject)(e) && !(0, R.isArray)(e) ? Xs(e, a) : (0, R.isArray)(e) && (t[s] = e.map(e => (0, R.isObject)(e) ? Xs(e, a) : e))
        }), t
      }
      const Ys = (0, f.withTranslations)(({
          active: e,
          styles: a,
          title: t,
          itemNumber: s,
          inModalMode: r,
          openModalMode: i,
          element: n,
          upNext: o,
          mobileMode: c,
          refDeck: l,
          components: d,
          tina: m,
          prevPage: _,
          nextPage: u,
          onFocus: p,
          transitionStyle: f,
          selectedItemNumber: k,
          sharedDraggingDelta: v,
          setSharedDraggingDelta: y,
          trapFocus: j
        }) => {
          const x = (0, G.useIntl)(),
            {
              track: w
            } = (0, h.useGtmTrack)(),
            N = (0, b.createRef)(),
            S = (0, b.createRef)(),
            C = (0, b.createRef)(),
            T = (0, b.createRef)(),
            [E, A] = (0, b.useState)(!1),
            [M, P] = (0, b.useState)(0),
            [L, z] = (0, b.useState)(0),
            [D, B] = (0, b.useState)(0),
            [O, $] = (0, b.useState)(0),
            [F, V] = (0, b.useState)(0),
            [H, q] = (0, b.useState)(!1),
            [W, U] = (0, b.useState)(0),
            [K, X] = (0, b.useState)(0),
            [Y, Z] = (0, b.useState)(0),
            [J, Q] = (0, b.useState)("700"),
            [ee, ae] = (0, b.useState)(-1),
            [te, se] = (0, b.useState)(0),
            [re, ie] = (0, b.useState)(0),
            [ne, oe] = (0, b.useState)(0),
            [ce, le] = (0, b.useState)(!1),
            [de, me] = (0, b.useState)(""),
            [_e, ue] = (0, b.useState)(null),
            [ge, be] = (0, b.useState)(!1),
            [pe, fe] = (0, b.useState)(null),
            [he, ke] = (0, b.useState)(!1),
            [ve, ye] = (0, b.useState)(!1),
            je = (0, I.useTinaPayload)(),
            xe = m?.payload?.meta?.cdn ?? !1 ?? je?.meta?.prod ?? !1,
            we = (0, I.useTranslations)({
              payload: m?.payload,
              variables: m?.variables
            }),
            Ne = we?.meta ?? {},
            Se = Xs(we?.content?.[0], xe),
            Ce = (0, b.useMemo)(() => Se?.images?.[0]?.image?.badge, [Se]),
            Te = (0, b.useMemo)(() => Se.title ?? t ?? Ne?.title, [t, Ne?.title, Se.title]),
            Ee = (0, I.useImageParser)({
              alt: Se?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Se?.images?.[0]?.image?.alt ?? "",
              sources: Se?.images?.[0]?.image?.sources ?? [],
              prod: xe
            }),
            Ie = Ee?.src?.mobile ?? Ee?.src?.desktop ?? !1,
            Ae = (0, b.useMemo)(() => Ne?.foreignId, [Ne]),
            Me = (0, b.useMemo)(() => Ne?.foreignTitle, [Ne]),
            [Pe, Le] = (0, b.useState)(0),
            [ze, Re] = (0, b.useState)(0),
            [De, Be] = (0, b.useState)(0),
            [Ge, Oe] = (0, b.useState)(0),
            [$e, Fe] = (0, b.useState)(!1),
            [He, qe] = (0, b.useState)(0),
            [We, Ue] = (0, b.useState)(20),
            [Ke, Xe] = (0, b.useState)(null),
            [Ye, Je] = (0, b.useState)(!1),
            Qe = (0, b.useCallback)(e => {
              if (!0 === H || !r && !c || ge) return;
              const a = Us(e);
              Le(a.x), Re(a.y)
            }, [H, r]),
            ea = e => {
              Qe(e)
            },
            aa = e => {
              if (!0 === H || 0 === Pe || !r && !c || ge) return;
              const a = Us(e),
                t = a.x > Pe ? 1 : -1,
                s = Math.abs(Pe - a.x);
              r && !c && s > We ? (Je(!0), me(t > 0 ? "prev" : "next"), sa()) : (Fe(!0), qe(s * t), y(s * t))
            },
            ta = e => {
              if (!0 === H || !r && !c || ge) return;
              const a = Us(e),
                t = a.x > Pe ? 1 : -1,
                s = Math.abs(Pe - a.x),
                i = Math.abs(ze - a.y);
              r && !c ? (sa(), me("")) : s > We && i < 25 ? (Je(!0), me(t > 0 ? "prev" : "next"), sa()) : sa()
            },
            sa = () => {
              q(!0), Le(0), Re(0), Fe(!1), qe(0), y(0)
            },
            ra = e => {
              e ? (r || A(!0), r || c || (clearTimeout(ee), ae(setTimeout(() => {
                w({
                  event: "card_title_hover",
                  card_name: Te,
                  card_id: s,
                  position: s,
                  view_name: `${Ae}/${Me}`,
                  source_content_id: Ae,
                  source_content_name: Me
                })
              }, 1e3)))) : (r || A(!1), r || c || clearTimeout(ee))
            };
          return (0, b.useEffect)(() => {
            let e = W;
            E ? e = 0 : r && !c && (e = W), P(e)
          }, [E, c, r, L, O, K, Y, D, W]), (0, b.useEffect)(() => {
            A(!(!r || !c))
          }, [r, c]), (0, b.useEffect)(() => {
            r && e && w({
              event: "virtualPageview",
              display_type: c ? "mobile" : "desktop",
              view_name: `${Ae}/${Te}`,
              source_content_id: Ae,
              source_content_name: Me
            })
          }, [r, e]), (0, b.useEffect)(() => {
            const e = (0, R.debounce)((e, a) => {
              let t = 18;
              if (e?.documentElement && (t = Ws(e?.documentElement, "--root-font-size")), re !== a.innerHeight && ie(a.innerHeight), l?.current) {
                Z(Ws(l.current, "--eventDeck-marginSm") * t);
                const e = t * Ws(l?.current, "--eventDeck-modalGutters"),
                  s = a?.innerWidth,
                  r = s - 2 * e;
                z(r), C.current && c && B(r), $(Ws(l.current, "--eventDeck-itemSize") * t), oe(Ws(l.current, "--eventDeck-phaseOneTransitionDuration"));
                const i = Ws(l?.current, "--eventDeck-itemImageTitleMargins") * t,
                  n = S?.current?.clientHeight,
                  o = n + i;
                Number.isNaN(o) || U(o), se(Ws(l?.current, "--eventDeck-headerHeight") * t)
              }
              let s = Math.min(700, a.innerWidth);
              c || (s = 900), Q(`${s}`)
            }, 300);
            return window.addEventListener("resize", () => {
              e(document, window)
            }), e(document, window), () => {
              window.removeEventListener("resize", () => {
                e(document, window)
              })
            }
          }, [l, c]), (0, b.useEffect)(() => {
            if (N.current) {
              const e = N.current.clientHeight;
              Number.isNaN(e) || X(e)
            }
          }, [N]), (0, b.useEffect)(() => {
            const e = .5 * L,
              a = re - te - 3 * Y;
            V(L - (e < a ? e : a))
          }, [L, Y, re]), (0, b.useEffect)(() => {
            "next" === de ? (u(null, !0), me("")) : "prev" === de && (_(null, !0), me(""))
          }, [de]), (0, b.useEffect)(() => {
            Be(0), Oe(0)
          }, [c]), (0, b.useEffect)(() => {
            c ? Ue(r ? 35 : 20) : r && Ue(50)
          }, [r, c]), (0, b.useEffect)(() => {
            if (null !== a?.transform) {
              const e = a?.transform?.split(",") ?? [],
                t = e[0].split("("),
                s = Number(t[1].replace("px", "")),
                r = Number(e[1].replace("px", ""));
              Be(s), Oe(r)
            }
          }, [a]), (0, b.useEffect)(() => {
            if (!H) return;
            clearTimeout(_e);
            const e = setTimeout(() => {
              q(!1), Le(0)
            }, 200);
            ue(e)
          }, [H, 200]), (0, b.useEffect)(() => {
            if (!Ye) return;
            clearTimeout(Ke);
            const e = setTimeout(() => {
              Je(!1)
            }, 1e3);
            Xe(e)
          }, [Ye]), (0, b.useEffect)(() => {
            r && clearTimeout(ee), setTimeout(() => {
              le(!ce)
            }, ne)
          }, [r]), (0, b.useEffect)(() => (document.body.addEventListener("mouseleave", sa), () => {
            document.body.removeEventListener("mouseleave", sa)
          }), []), (0, b.useEffect)(() => {
            T.current ? ke(Ks(T.current)) : ke(!1), void 0 !== n && n.current ? ye(Ks(n.current)) : ye(!1)
          }, [n, T, e, r, ce]), Se ? (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c02ee363d47108460ab7916fc955cd9b",
            ref: n,
            "data-item-position": s,
            "data-modal-mode": r,
            "data-active-item": e,
            "data-up-next": o,
            "data-transition": $e || 0 !== v ? "none" : f,
            "data-scrollable": ve,
            style: {
              ...a,
              transform: r && e && !c ? `translate3d(${De+He}px, ${Ge}px, 0)` : c && !r ? `translate3d(${De+v}px, ${Ge}px, 0)` : a?.transform
            },
            onClick: e => {
              Ye || (r ? r && !c && (s < k ? _(e, !0) : s > k && u(e, !0)) : i(e))
            },
            onMouseEnter: () => ra(!0),
            onMouseLeave: () => ra(!1),
            onFocus: e => (e => {
              p?.(e), ra(!0)
            })(e),
            onBlur: () => ra(!1),
            onTouchStart: ea,
            onTouchMove: aa,
            onTouchEnd: ta,
            onMouseDown: ea,
            onMouseMove: aa,
            onMouseUp: ta,
            onKeyUp: e => {
              "Enter" !== e.code && "Space" !== e.code || r || i(e)
            },
            onKeyDown: e => {
              "Tab" === e.key && e.shiftKey && r && (e.preventDefault(), j("backwards")), "Space" === e.code && e.preventDefault()
            },
            "aria-label": r ? x.formatMessage(Ze.events_deck_modal_group_label) : Te,
            role: r ? "dialog" : "button",
            tabIndex: r ? -1 : 0,
            children: [(0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dee75b8e3614051c8f0fc97e373e78e5",
              "data-full-header": E,
              style: {
                height: r && c ? `${L}px` : null,
                width: r && c ? `${L}px` : null
              },
              role: "figure",
              children: [Ie && (0, g.jsx)("img", {
                ref: C,
                src: `${Ee?.src?.mobile??Ee?.src?.desktop}?im=Resize,width=${J}`,
                alt: Ee?.alt ?? ""
              }), (0, g.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9dc279f97c134d6e7d30602288b8b10ae",
                "aria-hidden": "true",
                style: {
                  transform: !c || c && r ? `translate3d(0, ${M}px, 0)` : null
                },
                children: [Ce && (0, g.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9cfe252d5613a21c1d308c98566cabd21",
                  ref: N,
                  children: (0, g.jsx)(Ve, {
                    text: Ce
                  })
                }), (0, g.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9b311a78aea53383ab6bd5cbccb52ceeb",
                  tabIndex: -1,
                  ref: S,
                  "aria-hidden": "true",
                  children: Te
                })]
              })]
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d212586e74ea4b4fe934beed9e339f78",
              ref: T,
              "aria-hidden": !r,
              tabIndex: r ? 0 : -1,
              onScroll: () => {
                be(!0), sa(), clearTimeout(pe);
                const e = setTimeout(() => {
                  be(!1)
                }, 100);
                fe(e)
              },
              style: {
                top: r && c ? `${L}px` : null,
                width: r && !c && e ? `${F}px` : null,
                touchAction: he || c ? "unset" : "none"
              },
              children: [Te && (0, g.jsx)("span", {
                className: "rockstargames-sites-gta-gen9da9ef865674c108ffd53cfab2ed2971a",
                role: "heading",
                children: Te
              }), (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9abad8b0c98a7216d91b672492397e6a6",
                role: "text",
                children: (0, g.jsx)(I.TinaParser, {
                  components: d,
                  tina: {
                    meta: Ne,
                    payload: {
                      content: Se?.content
                    }
                  }
                })
              }), (0, g.jsx)("button", {
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
        Zs = "rockstargames-sites-gta-gen9eff7810cc71a3b63bfc3e58cbe4a0279",
        Js = ({
          prevPage: e,
          prevBtnDisabled: a,
          nextPage: t,
          nextBtnDisabled: s,
          selectedItemNumber: r,
          itemsData: i,
          closeModalMode: n,
          inModalMode: o,
          controlsHidden: c,
          focusTrapControl: l,
          focusTrapDirection: d,
          setTriggerFocusCard: m
        }) => {
          const _ = (0, G.useIntl)(),
            u = (0, b.createRef)(),
            p = (0, b.createRef)(),
            f = (0, b.createRef)();
          return (0, b.useEffect)(() => {
            l && ("backwards" === d ? f?.current?.focus() : a ? p?.current?.focus() : u?.current?.focus())
          }, [l, a]), (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a13ee8af1dd8f09d28c65e56abd782ef",
              "aria-hidden": c || "false",
              children: [(0, g.jsx)("button", {
                className: Zs,
                ref: u,
                type: "button",
                onClick: e,
                disabled: a,
                "aria-label": o ? _.formatMessage(Ze.events_deck_modal_previous_aria_label) : _.formatMessage(Ze.events_deck_previous_aria_label),
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && o && (e.preventDefault(), m(!0))
                }
              }), (0, g.jsxs)("span", {
                className: "rockstargames-sites-gta-gen9a6b11adaa46a0c2acc5893d2f5da04f1",
                "aria-hidden": !o,
                children: [(0, g.jsx)(Ps, {
                  "aria-live": "polite",
                  children: _.formatMessage(Ze.events_deck_paging_label, {
                    currentPage: r + 1,
                    totalPages: i.length
                  })
                }), (0, g.jsxs)("span", {
                  "aria-hidden": "true",
                  className: "rockstargames-sites-gta-gen9eb9f07e9a2e17e70e61b73dec95da6c0",
                  children: [r + 1, (0, g.jsx)("span", {
                    className: "rockstargames-sites-gta-gen9aad28b229162f1d7494a2de3a3b6b547"
                  }), i.length]
                })]
              }), (0, g.jsx)("button", {
                className: Zs,
                ref: p,
                type: "button",
                onClick: t,
                onKeyDown: e => {
                  "Tab" === e.key && e.shiftKey && a && o && (e.preventDefault(), m(!0))
                },
                disabled: s,
                "aria-label": o ? _.formatMessage(Ze.events_deck_modal_next_aria_label) : _.formatMessage(Ze.events_deck_next_aria_label)
              })]
            }), (0, g.jsx)("button", {
              className: "rockstargames-sites-gta-gen9fb0b7933375b44858b7e92cdea86ee81",
              type: "button",
              onClick: n,
              ref: f,
              onKeyDown: e => {
                "Tab" === e.key && !e.shiftKey && o && (e.preventDefault(), m(!0))
              },
              "aria-label": _.formatMessage(Ze.events_deck_modal_close_label),
              "aria-hidden": !o,
              tabIndex: o ? 0 : -1
            })]
          })
        },
        Qs = (0, G.withIntl)(e => {
          const {
            setBodyIsLocked: a
          } = (0, f.useBodyScrollable)("EventsDeck"), {
            title: t
          } = e, {
            track: s
          } = (0, h.useGtmTrack)(), [r, i] = (0, b.useState)(!1), n = (() => {
            const {
              data: e
            } = (0, f.useQuery)(Ba.TinaModulesList, {
              variables: {
                type: "gtao-event-card",
                orderBy: "priority",
                orderDirection: "desc"
              }
            }), a = e?.tinaModulesList?.results, t = (0, R.map)(a, "id");
            return (0, Be.X)({
              ids: t
            })
          })(), [o, c] = (0, b.useState)([]), [l, d] = (0, b.useState)(null), [m, _] = (0, b.useState)(0), [p, k] = (0, b.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [v, y] = (0, b.useState)(!1), j = (0, b.createRef)(), [x, w] = (0, b.useState)(null), N = (0, b.createRef)(), S = (0, b.createRef)(), [C, T] = (0, b.useState)([]), [E, A] = (0, b.useState)(!0), [M, P] = (0, b.useState)(!1), [L, z] = (0, b.useState)(!1), [D, B] = (0, b.useState)([]), [G, O] = (0, b.useState)(404), [$, F] = (0, b.useState)(808), [V, H] = (0, b.useState)(672), [q, W] = (0, b.useState)(336), [U, K] = (0, b.useState)(0), [X, Y] = (0, b.useState)(0), [Z, J] = (0, b.useState)(0), [Q, ee] = (0, b.useState)(0), [te, se] = (0, b.useState)(0), [re, ie] = (0, b.useState)(!1), ne = !!(0, f.usePrevious)(re), [oe, ce] = (0, b.useState)(window.innerWidth), [le, de] = (0, b.useState)(0), [me, _e] = (0, b.useState)(0), [ue, ge] = (0, b.useState)(0), [be, pe] = (0, b.useState)(0), [fe, he] = (0, b.useState)(0), [ke, ve] = (0, b.useState)(0), [ye, je] = (0, b.useState)(0), [xe, we] = (0, b.useState)(0), [Ne, Se] = (0, b.useState)(-1e3), [Ce, Te] = (0, b.useState)(0), [Ae, Me] = (0, b.useState)(50), [Pe, Le] = (0, b.useState)(0), [ze, Re] = (0, b.useState)(!1), [De, Ge] = (0, b.useState)(768), [$e, Fe] = (0, b.useState)(!1), [Ve, He] = (0, b.useState)(!1), [qe, We] = (0, b.useState)(!1), [Ue, Ke] = (0, b.useState)(!1), [Xe, Ye] = (0, b.useState)(!1), [Ze, Je] = (0, b.useState)(1e3), [Qe, ea] = (0, b.useState)(1.2), [aa, ta] = (0, b.useState)(0), [sa, ra] = (0, b.useState)(!1), [ia, na] = (0, b.useState)(!1), [oa, ca] = (0, b.useState)(!0), [la, da] = (0, b.useState)(!1), [ma, _a] = (0, b.useState)(!1), [ua, ga] = (0, b.useState)(null), [ba, pa] = (0, b.useState)(100), [fa, ha] = (0, b.useState)(!1), [ka, va] = (0, b.useState)({}), [ya, ja] = (0, b.useState)(""), [xa, wa] = (0, b.useState)(0), [Na, Sa] = (0, b.useState)(!1), [Ca, Ta] = (0, b.useState)(!1), [Ea, Ia] = (0, b.useState)(0), [Aa, Ma] = (0, b.useState)(0), [Pa, La] = (0, b.useState)(100), [za, Ra] = (0, b.useState)(!1), [Da, Ga] = (0, b.useState)(!1), [Oa, $a] = (0, b.useState)(!1), [Fa, Va] = (0, b.useState)(!1), [Ha, qa] = (0, b.useState)(!1), [Wa, Ua] = (0, b.useState)(!1), [Ka, Xa] = (0, b.useState)("forward"), Za = () => oe * le + Ae, Ja = () => !1 === ze ? Qe : 1, Qa = e => e === ye - 1 || e === ye + 1, et = () => -1 * ke - be, at = (e, a = !0) => {
            if (!0 === ze) return 0;
            const t = e.itemNumber % 2 == 0,
              s = G * Qe;
            if (!0 === t && 0 !== e.itemNumber) {
              const t = Ws(e?.element?.current, "top");
              let r = t - Z;
              return !1 === a && (r -= t), -1 * (.5 * s + r) + aa
            }
            return Z - .5 * s + aa
          }, tt = (e, a, t = !0) => {
            let s = et();
            !1 === t && (s = 0);
            const r = oe * le,
              i = !1 === ze ? G * Ja() : r;
            return e.inModalMode && ze ? -1 === a ? Za() * (ye - e.itemNumber) * -1 - e.styles.left : Za() * (e.itemNumber - ye) - e.styles.left : -1 === a ? -1 * e.styles.left - i - Ae + s : r - e.styles.left + Ae + s
          }, st = (e, a, t) => {
            -1 === a && (P(!1), A(!0)), P(!1 === t && e >= a || !0 === t && e + 1 === a), A(e <= 0)
          }, rt = (e, a = !1) => {
            if (ma || la) return;
            if (_a(!0), re) return void((e = !1) => {
              if (ye + 1 >= o.length) return;
              const a = C[ye + 1]?.tina?.payload?.meta?.title ?? `card-${ye+1}`;
              s({
                event: e ? "modal_swipe" : "modal_next",
                card_name: a,
                card_id: ye + 1,
                position: ye + 1,
                view_name: `${C[ye+1].source_content_id}/${a}`,
                source_content_id: C[ye + 1].source_content_id,
                source_content_name: C[ye + 1].source_content_name
              }), st(ye + 1, o.length, !0), ze ? ze && T(C.map(e => {
                e.itemNumber === ye - 1 ? e.upNext = !1 : e.itemNumber === ye + 2 ? e.upNext = !0 : e.itemNumber === ye + 1 ? e.active = !0 : e.itemNumber === ye && (e.upNext = !0, e.active = !1);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t -= Za();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              })) : T(C.map(e => (e.itemNumber === ye - 1 ? e.upNext = !1 : e.itemNumber === ye + 2 ? e.upNext = !0 : e.itemNumber === ye + 1 ? (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${et()}px, ${aa}px, 0) scale(1)`
              }) : e.itemNumber === ye && (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${tt(e,-1)}px, ${at(e)}px, 0) scale(${Ja()})`
              }), e))), je(ye + 1)
            })(a);
            const r = fe + 1;
            if (!(r > te))
              if (s({
                  event: a ? "carousel_swipe" : "carousel_next",
                  element_placement: t?.toLowerCase() ?? ""
                }), st(r, te, !1), ze) {
                let e = r * q * -1;
                e < Ne && (e = Ne, P(!0), A(!1), he(te)), he(r), T(C.map(a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a)))
              } else {
                let e = ke - X;
                he(r), e < Ne && (e = Ne, P(!0), A(!1), he(te)), ve(e)
              }
          }, it = (e, a = !1) => {
            if (ma || la) return;
            if (_a(!0), !0 === re) return void((e = !1) => {
              if (ma) return;
              if (ye - 1 < 0) return;
              const a = C[ye - 1]?.tina?.payload?.meta?.title ?? "card-" + (ye - 1);
              s({
                event: e ? "modal_swipe" : "modal_previous",
                element_placement: t?.toLowerCase(),
                card_name: a,
                card_id: ye - 1,
                position: ye - 1,
                view_name: `${C[ye-1].source_content_id}/${a}`,
                source_content_id: C[ye - 1].source_content_id,
                source_content_name: C[ye - 1].source_content_name
              }), st(ye - 1, o.length, !0), ze || T(C.map(e => (e.itemNumber === ye + 1 ? e.upNext = !1 : e.itemNumber === ye - 2 ? e.upNext = !0 : e.itemNumber === ye ? (e.upNext = !0, e.active = !1, e.styles = {
                ...e.styles,
                transform: `translate3d(${tt(e,1)}px, ${at(e)}px, 0) scale(${Ja()})`
              }) : e.itemNumber === ye - 1 && (e.active = !0, e.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${et()}px, ${aa}px, 0) scale(1)`
              }), e))), ze && T(C.map(e => {
                e.itemNumber === ye + 1 ? e.upNext = !1 : e.itemNumber === ye - 2 ? e.upNext = !0 : e.itemNumber === ye ? (e.upNext = !0, e.active = !1) : e.itemNumber === ye - 1 && (e.active = !0);
                const a = e.styles.transform.replace("translate3d(", "").split(",");
                let t = Number(a[0].replace("px", ""));
                t += Za();
                const s = `translate3d(${t}px,${a[1]},${a[2]}`;
                return e.styles = {
                  ...e.styles,
                  transform: s
                }, e
              })), je(ye - 1)
            })(a);
            const r = fe - 1;
            if (!(r < 0))
              if (s({
                  event: a ? "carousel_swipe" : "carousel_previous",
                  element_placement: t?.toLowerCase()
                }), st(r, te, !1), ze) {
                let e = r * q * -1;
                e > 0 && (e = 0, A(!0), P(!1), he(0)), he(r), T(C.map(a => (a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, 0, 0)`
                }, a)))
              } else {
                let e = ke + X;
                he(r), (e > 0 || 0 === e || -1 * e < $) && (e = 0, A(!0), P(!1), he(0)), ve(e)
              }
          }, nt = e => {
            if (!re && za) return;
            if (Na || re || ze) return;
            const a = Us(e);
            wa(a.x)
          }, ot = e => {
            if (!re && za) return;
            if (Na || 0 === xa || re || ze) return;
            const a = Us(e),
              t = a.x > xa ? 1 : -1;
            let s = Math.abs(xa - a.x) * t;
            (0 === fe && 1 === t || fe === te && -1 === t) && (s *= .35), Ta(!0), Ia(s)
          }, ct = e => {
            if (!re && za) return;
            if (Na || re || ze) return;
            const a = Us(e),
              t = a.x > xa ? 1 : -1,
              s = Math.abs(xa - a.x);
            ja(s > Pa ? t > 0 ? "prev" : "next" : ""), lt()
          }, lt = () => {
            Sa(!0), wa(0), Ia(0), Ta(!1)
          }, dt = e => {
            Ca && (ct(e), Ta(!1))
          }, mt = (e, a, t = "") => e.map((e, s) => {
            let r = s * q,
              i = s;
            !1 === ze && (i = Math.ceil(.5 * s) + 1, s > 0 && (r = 2 === i ? V : V + q * (i - 2)));
            const n = D[s];
            return n?.current && (n.current.scrollTop = 0), {
              ...e,
              mobileMode: ze,
              itemNumber: s,
              columnNumber: i,
              inModalMode: !1,
              upNext: !0,
              active: !1,
              openModalMode: bt,
              element: n,
              transitionStyle: a,
              styles: {
                left: r,
                transform: "" === t ? null : t,
                height: null,
                top: null
              },
              trapFocus: pt
            }
          }), _t = e => {
            if (ze) return;
            T(mt(o, "cardClose"));
            let a = Math.ceil((C[e].columnNumber + 1) / U) - 1;
            Da && (a = 0), he(a);
            let t = a * X * -1;
            Pe < me ? (t = 0, A(!0), P(!0), he(0)) : t < Ne ? (t = Ne, A(!1), P(!0), he(te)) : st(a, te, !1), ve(t), je(0)
          }, ut = () => {
            const e = C[ye]?.tina?.payload?.meta?.title ?? `card-${ye}`;
            s({
              event: "modal_close",
              element_placement: t?.toLowerCase(),
              card_name: e,
              card_id: ye,
              position: ye,
              view_name: `${C[ye].source_content_id}/${e}`,
              source_content_id: C[ye].source_content_id,
              source_content_name: C[ye].source_content_name
            });
            const a = C[ye]?.element?.current;
            if (ze) {
              let e = ye * q * -1;
              e < Ne && (e = Ne, P(!0), A(!1), he(te)), he(ye), st(ye, te, !1), T(mt(o, "cardClose", `translate3d(${e}px, 0, 0)`))
            } else _t(ye);
            N.current.style.transform = "translate(0px, 0px)", N.current.style.transition = "all var(--eventDeck-transitionCardClose)", ra(!1), Ke(!1), ie(!1), He(!1), Fe(!1), Ye(!1), setTimeout(() => {
              We(!0), a.focus()
            }, Ze)
          }, gt = (e, a) => {
            2 == e && Ga(Pe - a <= .25 * G)
          };
          (0, b.useEffect)(() => {
            !1 !== qe && (We(!1), ra(!1), x.style.zIndex = null, T(C.map(e => (e.transitionStyle = "", e))))
          }, [qe]);
          const bt = e => {
              setTimeout(() => {
                va(e), ha(!0)
              }, 1)
            },
            pt = e => {
              Ua(!0), Xa(e), setTimeout(() => {
                Ua(!1)
              }, 1e3)
            };
          (0, b.useEffect)(() => {
            Ha && (qa(!1), C[ye]?.element?.current?.focus())
          }, [Ha]), (0, b.useEffect)(() => {
            if (!fa) return;
            if (ha(!1), ma) return;
            je(Number(ka?.target?.dataset?.itemPosition)), He(!0), da(!0), oa && ca(!1);
            const e = C[ka?.target?.dataset?.itemPosition].source_content_id,
              a = C[ka?.target?.dataset?.itemPosition].source_content_name,
              r = C[ka?.target?.dataset?.itemPosition]?.tina?.payload?.meta?.title;
            s({
              event: "card_click",
              element_placement: t?.toLowerCase(),
              card_name: r ?? `card-${ye}`,
              card_id: ka?.target?.dataset?.itemPosition,
              position: ka?.target?.dataset?.itemPosition,
              view_name: `${e}/${r}`,
              source_content_id: e,
              source_content_name: a
            })
          }, [fa]), (0, b.useEffect)(() => {
            if (!Ve || re) return;
            He(!1);
            const e = (() => {
              const e = x?.getBoundingClientRect().top;
              return ta(-1 * (e - m)), -1 * (e - 140)
            })();
            ze && T(C.map(e => {
              const a = e.itemNumber > ye + 3 || e.itemNumber < ye - 3;
              return e.styles = {
                ...e.styles,
                display: a ? "none" : null,
                transition: a ? "none" : null
              }, e
            })), x.style.zIndex = "var(--eventDeck-zIndexOverlay)", ra(!0), N.current && (N.current.style.transition = "all var(--eventDeck-transitionCardOpen)", N.current.style.transform = `translate(${-1*be}px, ${e}px)`), Ke(!0), setTimeout(() => {
              Fe(!0)
            }, 1)
          }, [Ve]);
          const ft = () => {
            T(C.map((e, a) => {
              e.active = a === ye, e.inModalMode = !0, e.transitionStyle = "cardOpen", ze && (e.upNext = Qa(e.itemNumber));
              const t = !ze;
              let s = 0;
              if (ze) {
                const e = xe + 5 * m;
                s = window.innerHeight - e
              }
              return e.itemNumber < ye ? e.styles = {
                ...e.styles,
                height: ze ? `${s}px` : null,
                transform: `translate3d(${tt(e,-1,t)}px, ${aa}px, 0) scale(${Ja()})`
              } : e.itemNumber > ye ? e.styles = {
                ...e.styles,
                height: ze ? `${s}px` : null,
                transform: `translate3d(${tt(e,1,t)}px, ${aa}px, 0) scale(1)`
              } : e.itemNumber === ye && (e.styles = ze ? {
                ...e.styles,
                height: `${s}px`,
                transform: `translate3d(${-1*e.styles.left}px, ${aa}px, 0) scale(1)`
              } : {
                left: 0,
                top: 0,
                transform: `translate3d(${et()}px, ${aa}px, 0) scale(1)`
              }), e
            }))
          };
          (0, b.useEffect)(() => {
            !1 !== $e && !0 !== re && (ie(!0), Fe(!1), st(ye, C.length, !0), N.current && (N.current.style.transition = "all var(--eventDeck-transitionCardOpen)", N.current.style.transform = `translate(${-1*be}px, ${aa}px)`), ft(), ze ? (ve(0), da(!1), na(!0)) : Ye(!0))
          }, [$e]), (0, b.useEffect)(() => {
            ia && (na(!1), T(C.map(e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e))))
          }, [ia]);
          const ht = (e = !1) => {
            T(C.map(a => {
              if (a.upNext = Qa(a.itemNumber), a.itemNumber !== ye) {
                let e = tt(a, 1);
                a.itemNumber < ye && (e = tt(a, -1)), a.styles = {
                  ...a.styles,
                  transform: `translate3d(${e}px, ${at(a)}px, 0) scale(${Ja()})`
                }
              } else a.itemNumber === ye && !ze && e && (a.styles = {
                left: 0,
                top: 0,
                transform: `translate3d(${et()}px, ${aa}px, 0) scale(1)`
              });
              return a
            }))
          };
          (0, b.useEffect)(() => {
            !1 !== Xe && !0 !== ze && (Ye(!1), setTimeout(() => {
              ht(), da(!1)
            }, 1))
          }, [Xe]), (0, b.useEffect)(() => {
            T(mt(o, ""))
          }, [V, q, o]), (0, b.useEffect)(() => {
            const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
            $a(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
          }, []), (0, b.useEffect)(() => {
            const e = ne !== re,
              t = window.document.body.style.overflowY;
            return re ? (e && (window.document.body.style.overflowY = "hidden", a(!0)), Oa && Va(!0)) : Ca || re || (e && (window.document.body.style.overflowY = t, a(!1)), Oa && Fa && Va(!1)), () => {
              window.document.body.style.overflowY = t
            }
          }, [re, Ca]), (0, b.useEffect)(() => {
            if (!ma) return;
            clearTimeout(ua);
            const e = setTimeout(() => {
              _a(!1)
            }, ba);
            ga(e)
          }, [ma]), (0, b.useEffect)(() => {
            v && setTimeout(() => {
              y(!1)
            }, 3e3)
          }, [v]), (0, b.useEffect)(() => {
            y(!0), ve(0), he(0);
            let e = Math.ceil(Math.ceil(Pe / q) / U);
            ze && (e = C.length - 1), e < 0 && (e = 1), st(0, e, !1), re && ut()
          }, [ze]), (0, b.useEffect)(() => {
            N.current && !re && (N.current.style.transform = "")
          }, [N, ze, re]), (0, b.useEffect)(() => {
            const e = (n ?? []).map(e => {
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
          }, [n]), (0, b.useEffect)(() => {
            B(o.map(() => (0, b.createRef)()))
          }, [o]), (0, b.useEffect)(() => {
            const e = e => {
              const {
                key: a
              } = e;
              "ArrowLeft" === a ? it(0, !1) : "ArrowRight" === a ? rt(0, !1) : "Escape" === a && re && ut()
            };
            return document.addEventListener("keydown", e), () => {
              document.removeEventListener("keydown", e)
            }
          }, [ma, la, re, N]), (0, b.useEffect)(() => {
            if (N.current) {
              let e = N?.current?.clientHeight;
              e += Ws(N?.current, "margin-top"), e += Ws(N?.current, "margin-bottom"), we(e)
            }
          }, [N, S]), (0, b.useEffect)(() => {
            re && (() => {
              const e = x?.getBoundingClientRect().top,
                a = -1 * (e - m);
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
                const a = -1 * (e - m);
                N.current.style.transform = `translate(${-1*be}px, ${a}px)`
              }
            })()
          }, [ze, re, aa]), (0, b.useEffect)(() => {
            re || (Pe <= le * oe ? (ve(0), P(!0), A(!0)) : ke < Ne ? (P(!1), A(!0), he(0), ve(0)) : ke < 0 && (P(!1), he(te - 1)), Pe > le * oe && M && P(!1))
          }, [Ne, Pe]), (0, b.useEffect)(() => {
            if (j.current) {
              w(j.current);
              const e = Ws(document.documentElement, "--root-font-size"),
                a = Ws(j.current, "--eventDeck-modalGutters") * e,
                t = Ws(j.current, "--eventDeck-collapsedMaxWidth");
              ge(t);
              let s = oe - 2 * a;
              s > t && (s = t), _e(s), de(s / oe);
              const r = 2 * a + s;
              let i = 0;
              r < oe && (i = .5 * (oe - r)), pe(i);
              let n = Ws(j.current, "--eventDeck-modalBottomGutter");
              n *= e;
              const c = window.innerHeight - (xe + n);
              J(.5 * s < c ? s / 4 : .5 * c);
              const m = Ws(j.current, "--eventDeck-mobileBreakpoint");
              Ge(m);
              let u = Ws(j.current, "--eventDeck-itemSize");
              u *= e, O(u);
              let g = Ws(j.current, "--eventDeck-modalGutterGap");
              g *= e, Me(g);
              let b = Ws(j.current, "--eventDeck-insideMargin");
              b *= e;
              const p = !1 === ze ? 2 * u + b : u + b;
              F(p), H(p + b);
              const f = u + b;
              W(f);
              let h = Math.ceil(.5 * (o.length - 1)) * f + p;
              ze && (h = o.length * f), Le(h), 0 !== Pe && Se(-1 * Pe + s);
              let k = Math.ceil(Math.ceil(h / f) / U);
              (ze || re) && (k = C.length - 1), se(k), gt(k, s);
              const v = Ws(j.current, "--eventDeck-itemScaleUpAmount");
              ea(v), Je(Ws(j.current, "--eventDeck-cardCloseTransitionDuration")), _(Ws(j.current, "--eventDeck-itemImageTitleMargins") * e), null !== l && e !== l && (d(e), re && ht()), null === l && d(e)
            }
          }, [j, o]), (0, b.useEffect)(() => {
            if (re && !ze) {
              ht();
              const e = x?.getBoundingClientRect().top,
                a = -1 * (e - m);
              a !== aa && ta(a)
            } else re || ze || gt(te, le)
          }, [p]), (0, b.useEffect)(() => {
            Da && !ze ? (z(!re), Ra(!0)) : E && M && !re ? (z(!0), Ra(!0)) : (z(!1), Ra(!1))
          }, [E, M, Da, re, ze]), (0, b.useEffect)(() => {
            const e = (0, R.debounce)(e => {
              ce(e), Re(e < De);
              const a = (1 - le) / 2;
              Te(e * a);
              const t = Math.floor(me / q);
              K(t);
              let s = t * q;
              s > ue && (s = ue), Y(s), ee(e - e * a);
              const r = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
              if (r !== p && k(r), re && r === p && !v) {
                const e = x?.getBoundingClientRect().top,
                  a = -1 * (e - m);
                a !== aa && ta(a)
              }
            }, 300);
            return window.addEventListener("resize", () => {
              e(window.innerWidth)
            }), window.addEventListener("scroll", () => {
              re && ze && e(window.innerWidth)
            }), e(window.innerWidth), () => {
              window.removeEventListener("resize", () => {
                e(window.innerWidth)
              })
            }
          }, [q, le, re, ze]), (0, b.useEffect)(() => {
            !1 !== re && !0 !== v && (ze ? ft() : ht(!0))
          }, [Q, X, Ae, G, oe, Ce, Z, aa]), (0, b.useEffect)(() => {
            const e = () => {
              if (j.current && oa) {
                const e = j.current.getBoundingClientRect(),
                  a = .2 * window.innerHeight;
                window.innerHeight - e.top >= a && ca(!1)
              }
            };
            return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }, [j]);
          const kt = (0, b.useCallback)(() => {
            if (null !== j.current && !r) {
              const {
                top: a
              } = j?.current?.getBoundingClientRect() || 0;
              a <= .6 * window.innerHeight && (s({
                event: "page_section_impression",
                element_placement: e?._memoq?.title?.toLowerCase()
              }), i(!0))
            }
          }, [j]);
          (0, b.useEffect)(() => (window.addEventListener("scroll", kt), () => {
            window.removeEventListener("scroll", kt)
          }), [kt, j]), (0, b.useEffect)(() => {
            "next" === ya ? (rt(0, !0), ja("")) : "prev" === ya && (it(0, !0), ja(""))
          }, [ya]), (0, b.useEffect)(() => {
            j.current && j.current.addEventListener("mouseleave", () => {
              Ca && lt()
            })
          }, [j, Ca]), (0, b.useEffect)(() => (document.body.addEventListener("mouseleave", dt), () => {
            document.body.removeEventListener("mouseleave", dt)
          }), [Ca]), (0, b.useEffect)(() => {
            Na && setTimeout(() => {
              Sa(!1), wa(0)
            }, ba)
          }, [Na]), (0, b.useEffect)(() => {
            La(ze ? 20 : 100)
          }, [ze]), (0, b.useEffect)(() => {
            pa(re ? 500 : 100)
          }, [re]);
          const vt = e => {
              e.currentTarget !== e.target || re || Da || _t(e.target.dataset.itemPosition)
            },
            yt = (0, I.useTinaComponents)(),
            jt = (0, b.useMemo)(() => ({
              ...yt,
              CardWithImageGallery: Ya,
              HTMLElement: ae,
              ImageWithBadge: Ie.A,
              Carousel: u.A,
              GroupOfItems: Oe.default,
              UnorderedList: Ee.A
            }), [yt]),
            xt = (0, b.useMemo)(() => C.map(e => (0, b.createElement)(Ys, {
              ...e,
              refDeck: j,
              key: e?.id ?? e?.sync_hash,
              components: jt,
              prevPage: it,
              nextPage: rt,
              onFocus: vt,
              loadCssRawValue: Ws,
              selectedItemNumber: ye,
              carouselTitle: t,
              sharedDraggingDelta: Aa,
              setSharedDraggingDelta: Ma
            })), [C, j, jt, it, rt, ye]);
          return !xt?.length || xt.length <= 0 ? null : (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b3206f796ddd61f3b6d1974ea73a4f22",
              "data-modal-mode": Ue,
              "aria-hidden": "true"
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e623ea950c02afbb9d28949ca4701ca4",
              "data-modal-mode": re,
              "data-faded": oa,
              ref: j,
              onTouchStart: nt,
              onTouchMove: ot,
              onTouchEnd: ct,
              onMouseDown: nt,
              onMouseMove: ot,
              onMouseUp: ct,
              tabIndex: -1,
              role: "presentation",
              children: [(0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b8d0a147dd4f1835ba5495bac02f4c11",
                "aria-hidden": "true"
              }), (0, g.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9a758545d118b90def20e860fe541c26e",
                "data-modal-mode": re,
                ref: N,
                "data-animating": sa,
                children: [(0, g.jsx)("h2", {
                  className: "rockstargames-sites-gta-gen9be12152c36226103d53925a82ba66452",
                  children: t
                }), (0, g.jsx)(Js, {
                  prevPage: it,
                  prevBtnDisabled: E,
                  nextPage: rt,
                  nextBtnDisabled: M,
                  selectedItemNumber: ye,
                  itemsData: o,
                  closeModalMode: ut,
                  inModalMode: re,
                  controlsHidden: L,
                  focusTrapControl: Wa,
                  setTriggerFocusCard: qa,
                  focusTrapDirection: Ka
                }), (0, g.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c4f4d692febb9861a621596f22e32d93",
                  id: "eventsDeck-content",
                  role: "region",
                  "aria-live": "polite",
                  children: `${ye+1}/${o.length} ${C[ye]?.tina?.payload?.meta?.title}`
                })]
              }), (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f369e1390b3aa251df43bea9c55634f2",
                "data-modal-mode": re,
                "data-is-dragging": Ca,
                style: {
                  transform: `translate3d(${ke+Ea}px, 0, 0)`,
                  width: `${Pe}px`
                },
                ref: S,
                children: xt
              })]
            })]
          })
        }, ba);
      var er = t(34649),
        ar = t(59139),
        tr = t(539),
        sr = t(88023),
        rr = t(70301),
        ir = t(35812),
        nr = t(67347),
        or = t(57978),
        cr = t(1133);
      const lr = (0, G.defineMessages)({
          discover_callout_cards_aria: {
            id: "discover_callout_cards_aria",
            description: "aria label for the discover callout cards.",
            defaultMessage: "Pack Cards"
          },
          discover_callout_mugshot: {
            id: "discover_callout_mugshot",
            description: "The alt tag for the player characters mugshot.",
            defaultMessage: "{userName} mugshot"
          },
          discover_callout_heading: {
            id: "discover_callout_heading",
            description: "The Discover Callout section heading.",
            defaultMessage: "Career Progress"
          },
          discover_callout_description: {
            id: "discover_callout_description",
            description: "The Discover Callout section description.",
            defaultMessage: "See all the challenges you've completed in your GTA Online Career.  You can also discover new ones and earn valuable rewards as you rise through the criminal ranks."
          },
          discover_callout_cta_label: {
            id: "discover_callout_cta_label",
            description: "The Discover Callout CTA label",
            defaultMessage: "Track Progress"
          },
          discover_callout_cta_pause_label: {
            id: "discover_callout_cta_pause_label",
            description: "Discover Callout pause button label",
            defaultMessage: "Discover Callout Paused"
          },
          discover_callout_cta_play_label: {
            id: "discover_callout_cta_play_label",
            description: "Discover Callout play button label",
            defaultMessage: "Discover Callout Playing"
          }
        }),
        dr = "rockstargames-sites-gta-gen9e69747aa5d7adb3304425cd1943479d9";
      ir.gsap.registerPlugin(or.u), ir.gsap.registerPlugin(nr.useGSAP);
      const mr = ({
        backgroundColor: e,
        cardsOrientation: a = "left"
      }) => {
        const [s, r] = (0, b.useState)(""), [i, n] = (0, b.useState)(void 0), [o, c] = (0, b.useState)(!0), {
          currentCharId: l
        } = (0, h.useRockstarUserState)(), {
          windowWidth: d
        } = (0, f.useWindowResize)(), {
          formatMessage: m
        } = (0, G.useIntl)(), {
          data: _
        } = (0, h.useRockstarUser)(), {
          track: u
        } = (0, h.useGtmTrack)(), p = {
          "--promo-background": e ?? "var(--black-200)",
          "--promo-order": "left" === a ? "row" : "row-reverse"
        }, k = t(40844), v = () => {}, y = (0, cr.A)().data, j = !!y?.length, x = (0, b.useMemo)(() => j ? (e => {
          const a = [];
          let t = 0;
          for (let s = 0; s < e.length && t < 12; s++) {
            const r = s % 3;
            Array.isArray(a[r]) || (a[r] = []), a[r].push(e[s]), t++
          }
          return a
        })(y.reduce((e, a) => e.concat(a.subNavItems.filter(e => e.discoverSafe)), []).sort((e, a) => {
          const t = new Date(e.createdAt),
            s = new Date(a.createdAt);
          return e.createdAt && a.createdAt ? s.getTime() - t.getTime() : e.createdAt ? -1 : a.createdAt ? 1 : 0
        })) : [], [j, y]), w = (0, b.useMemo)(() => (0, g.jsx)("img", {
          alt: m(lr.discover_callout_mugshot, {
            userName: _?.nickname
          }),
          className: "rockstargames-sites-gta-gen9b44dd13add379d566cc2778f2bbb6e62",
          src: s || k,
          onError: v
        }), [s, k, m, _]), S = {
          event: "cta_learn",
          text: "track progress",
          link_url: "/gta-online/career-progress",
          element_placement: "discover page"
        };
        return (0, b.useEffect)(() => {
          const e = document.querySelector(`.${dr}`);
          e?.clientHeight && n(e.clientHeight)
        }, [d]), (0, b.useEffect)(() => {
          if (_) {
            const {
              characters: e
            } = _;
            r(e?.gtao[l]?.mugshotUrl || "")
          }
        }, [l, _]), (0, g.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ef7bcdb43f351229c9a05ad1d621316c",
          children: (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ef1462c6a58b59c70b18e542a70fb76e",
            style: p,
            children: [(0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dda4d1a66f24aa33e90a377b72aec436",
              "aria-label": m(lr.discover_callout_cards_aria),
              children: [(0, g.jsx)(N.IconButton, {
                appearance: "primary",
                label: m(o ? lr.discover_callout_cta_pause_label : lr.discover_callout_cta_play_label),
                "aria-label": m(o ? lr.discover_callout_cta_play_label : lr.discover_callout_cta_pause_label),
                size: "SM",
                icon: o ? "Pause" : "Play",
                onPress: () => c(!o),
                className: "rockstargames-sites-gta-gen9ed9a7abb593571e77b0085f89d1bbbed"
              }), j ? (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9ed41109354440ae1158df0c4d1912f3f",
                children: j && x.map((e, a) => (0, g.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9c07e974cea0a798e32895669634748a3",
                  style: {
                    "--packCard-height": i ? `${i}px` : "100px",
                    animationPlayState: o ? "running" : "paused"
                  },
                  tabIndex: -1,
                  children: [e.map(e => (0, g.jsx)("img", {
                    className: dr,
                    src: e.images.brand,
                    alt: e.title,
                    tabIndex: -1,
                    "aria-hidden": !0
                  }, e.title)), e.map(e => (0, g.jsx)("img", {
                    className: dr,
                    src: e.images.brand,
                    alt: e.title,
                    tabIndex: -1,
                    "aria-hidden": !0
                  }, e.title))]
                }, a))
              }) : (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9bd76302b4217a870b53bbe88f88d4da0",
                children: (0, g.jsx)(re.A, {
                  type: "SPINNING"
                })
              })]
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c58b655f2403e317825d3d191c6e36db",
              children: [w, (0, g.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9a09a68decb58285a04d030c5954b79ac",
                children: [(0, g.jsx)("h3", {
                  className: "rockstargames-sites-gta-gen9ff663b63b31dd02b90f4953cd210c4dd",
                  children: m(lr.discover_callout_heading)
                }), (0, g.jsx)("p", {
                  children: m(lr.discover_callout_description)
                })]
              }), (0, g.jsx)(Y.A, {
                to: "/gta-online/career-progress",
                text: m(lr.discover_callout_cta_label),
                onClick: S && (() => u({
                  ...S
                }))
              })]
            })]
          })
        })
      };
      var _r = t(18103),
        ur = t(27131);
      const gr = {
          accordionChevron: "rockstargames-sites-gta-gen9a81c4eaf24da2e2a56167e74d7dd2788",
          accordionContent: "rockstargames-sites-gta-gen9aeccf4ca42937ce2d8d76a76c9ebdc7a",
          accordionContentText: "rockstargames-sites-gta-gen9e09d630fa3fc716d9b3f34bbb6b7c6a9",
          accordionItem: "rockstargames-sites-gta-gen9cabc7dcd339f3f63c172cf5881ecca07",
          accordionRoot: "rockstargames-sites-gta-gen9ff4c276ff3fe3172dd6ce28527ff9b5d",
          accordionTrigger: "rockstargames-sites-gta-gen9be1438706665e822882826c90033fd09",
          disclaimer: "rockstargames-sites-gta-gen9d2203c1c27236b40e99e957046216284",
          faq: "rockstargames-sites-gta-gen9fe88e61686d4803b6c47536d34f1244e",
          faqArea: "rockstargames-sites-gta-gen9a52b40a67d08a800219e3f5240ddb18d",
          pillBtn: "rockstargames-sites-gta-gen9f6996f4c3f7191c2ab9f2d8a7ac4d378",
          selected: "rockstargames-sites-gta-gen9a094d48286b9bf724d77a89550401953",
          slideDown: "rockstargames-sites-gta-gen9b4f19bd4c09e3ed85ea80968f28075ae",
          slideUp: "rockstargames-sites-gta-gen9ac7cf56e2d7d02e4555f2f9e3feb547e",
          viewMore: "rockstargames-sites-gta-gen9d26903b16012ce40de048c5650eb2778",
          viewMoreContent: "rockstargames-sites-gta-gen9a9b36e5fbf98c429906018a41776b230"
        },
        br = (0, b.forwardRef)(({
          children: e,
          className: a,
          ...t
        }, s) => (0, g.jsx)(ur.Header, {
          className: gr.accordionHeader,
          children: (0, g.jsxs)(ur.Trigger, {
            ref: s,
            className: (0, A.default)(gr.accordionTrigger, a),
            ...t,
            children: [e, (0, g.jsx)(_r.ChevronDownIcon, {
              className: gr.accordionChevron,
              "aria-hidden": !0
            })]
          })
        })),
        pr = (0, b.forwardRef)(({
          children: e,
          className: a,
          ...t
        }, s) => (0, g.jsx)(ur.Content, {
          className: (0, A.default)(gr.accordionContent, a),
          ...t,
          ref: s,
          children: (0, g.jsx)("div", {
            className: gr.accordionContentText,
            children: e
          })
        })),
        fr = (0, $.A)(({
          buttonTxt: e,
          description: a,
          disclaimer: t,
          faqList: s = [],
          initialLength: r = 6,
          addedLength: i = 6,
          title: n,
          tinaModulesInfo: o,
          style: c
        }) => {
          const {
            track: l
          } = (0, h.useGtmTrack)(), [d, m] = (0, b.useState)(r), [_, u] = (0, b.useState)([]), [p, f] = (0, b.useState)(!1), k = (0, b.useRef)(null), v = (0, b.useRef)([]), {
            ref: y
          } = (0, D.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && l({
                event: "page_section_impression",
                element_placement: "faqs"
              })
            }
          });
          return (0, b.useEffect)(() => {
            if (p) {
              const e = d - i;
              v.current[e] && v.current[e].focus(), f(!1)
            }
          }, [d]), (0, g.jsxs)("div", {
            ref: y,
            className: gr.faq,
            style: c,
            children: [(0, g.jsxs)("div", {
              className: gr.faqArea,
              children: [n && (0, g.jsxs)("div", {
                children: [(0, g.jsx)("h3", {
                  children: o?.[0]?.title ?? n
                }), (0, g.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              }), (0, g.jsx)(ur.Root, {
                className: gr.accordionRoot,
                type: "multiple",
                value: _,
                onValueChange: e => {
                  let a = "",
                    t = null;
                  const s = e.find(e => !_.includes(e));
                  if (s) a = "cta_expand", t = parseInt(s, 10);
                  else {
                    const s = _.find(a => !e.includes(a));
                    s && (a = "cta_collapse", t = parseInt(s, 10))
                  }
                  a && l({
                    event: a,
                    text: `faq ${t}`,
                    position: t,
                    element_placement: "faqs"
                  }), u(e)
                },
                children: s.length ? s.slice(0, d).map(({
                  question: e,
                  answer: a
                }, t) => (0, g.jsxs)(ur.Item, {
                  className: gr.accordionItem,
                  value: (t + 1).toString(),
                  children: [(0, g.jsx)(br, {
                    ref: e => v.current[t] = e,
                    children: e
                  }), (0, g.jsx)(pr, {
                    children: (0, g.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: a
                      }
                    })
                  })]
                }, t)) : ""
              }), s.length > d && (0, g.jsx)("div", {
                className: gr.viewMoreContent,
                children: (0, g.jsxs)("button", {
                  className: gr.viewMore,
                  onClick: () => {
                    l({
                      event: "view_all",
                      text: "view more",
                      element_placement: "faqs"
                    }), m(e => e + i), f(!0)
                  },
                  ref: k,
                  children: [(0, g.jsx)("span", {
                    children: e
                  }), (0, g.jsx)("img", {
                    src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd73beaf06cda8c7936703f23f90bd6f.svg",
                    alt: ""
                  })]
                })
              })]
            }), !(e => {
              const a = document.createElement("div");
              return a.innerHTML = e, "" === a.textContent.trim()
            })(t) && (0, g.jsx)("div", {
              className: gr.disclaimer,
              dangerouslySetInnerHTML: {
                __html: t
              }
            })]
          })
        });
      var hr = t(70956);
      const kr = ({
          children: e,
          style: a
        }) => (0, g.jsx)(hr.B, {
          children: (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9f98b9fd72a955107202bbabd74bd3b47",
            style: a,
            "data-type": "guide",
            children: (0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ec205c6bdb78dfec571c38eb7fa1bf7d",
              children: e
            })
          })
        }),
        vr = ({
          guide: e,
          parentTitle: a,
          index: t
        }) => {
          const {
            track: s
          } = (0, h.useGtmTrack)();
          let r = {
            hero: {}
          };
          (0, R.cloneDeepWith)(e, (e, a) => {
            "images" === a && (r = e)
          });
          const {
            src: i
          } = (0, I.useImageParser)(r?.thumb ?? {});
          return (0, g.jsx)(Ca.A, {
            to: e.to,
            onClick: () => {
              s({
                event: "card_click",
                card_id: e.id,
                card_name: e.title.toLowerCase(),
                link_url: e.to,
                position: t,
                element_placement: a?.toLowerCase()
              })
            },
            "aria-label": e.title,
            children: (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9be3c33ee48383e4d42e8166cff70d981",
              children: [(0, g.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${i?.mobile}) no-repeat center/cover`
                }
              }), (0, g.jsx)("h4", {
                children: e.title
              })]
            })
          })
        },
        yr = ({
          guides: e = {},
          tinaModulesInfo: a,
          title: t
        }) => {
          const s = (0, R.map)(e, "guide_id"),
            r = (0, Be.X)({
              ids: s
            }),
            i = a?.[0]?.title ?? t,
            [n, o] = (0, b.useState)(null);
          return (0, b.useEffect)(() => {
            const e = r?.map((e, a) => (0, g.jsx)(vr, {
              guide: e,
              parentTitle: i,
              index: a
            }, e.id));
            o(e)
          }, [r]), (0, g.jsx)(q, {
            size: "lg",
            slideChildren: n,
            title: i
          })
        };
      var jr = t(9224);
      const xr = () => {
          const {
            guideId: e
          } = (0, p.useParams)(), a = (0, jr.qj)(e, "<span></span>");
          return a ? (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e0c1980d28737900798ff21f14b0f211",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${a}`
            }
          }) : null
        },
        wr = ({
          hero: e
        }) => {
          const {
            alt: a,
            src: t = {}
          } = (0, I.useImageParser)(e) ?? {}, {
            mobile: s
          } = t;
          if (s) return (0, g.jsx)("div", {
            "aria-label": a,
            className: "rockstargames-sites-gta-gen9a1ce0dc6b03347ab2f672aa8af2fc31d",
            role: "img",
            style: {
              background: `url(${s}) no-repeat center/contain`
            }
          })
        },
        Nr = ({
          blurb: e,
          hero: a,
          title: t
        }) => (0, g.jsxs)(g.Fragment, {
          children: [a ? (0, g.jsx)(wr, {
            hero: a
          }) : "", (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c248846cb1d6e783e8af7b9e4282325a",
            children: [(0, g.jsx)(xr, {}), (0, g.jsx)("h1", {
              children: t
            }), e && (0, g.jsx)("span", {
              className: "rockstargames-sites-gta-gen9c521ae65eeab1356dbd0371d68019439",
              dangerouslySetInnerHTML: {
                __html: e
              }
            })]
          })]
        }),
        Sr = ({
          style: e,
          children: a,
          __anchor: t = null
        }) => {
          const {
            announcePresence: s
          } = (0, jr.Yh)(), {
            ref: r,
            inView: i
          } = (0, D.useInView)({
            rootMargin: "0px 0px -700px 0px",
            threshold: 0,
            delay: 850
          });
          return (0, b.useEffect)(() => {
            s(t)
          }, [t]), (0, b.useEffect)(() => {
            i && s(t)
          }, [i]), (0, g.jsx)("span", {
            style: e,
            className: "rockstargames-sites-gta-gen9e2fa43158653af56030934673d242e25",
            name: t,
            ref: r,
            children: a
          })
        },
        Cr = {
          cta: "rockstargames-sites-gta-gen9c0247664a3a72139c46a532fa45f0b2f",
          linkoutSection: "rockstargames-sites-gta-gen9c0189aa00161ef858fc360d8a3ee31c4",
          pillBtn: "rockstargames-sites-gta-gen9c5a05e60c5daa6250d9022bc30a0ffd9",
          selected: "rockstargames-sites-gta-gen9c6e5b27a17c6f72f82ccac3a6349ecda"
        },
        Tr = ({
          text: e,
          cta: a,
          to: s,
          className: r = "",
          style: i = {}
        }) => (0, g.jsxs)(Ca.A, {
          className: (0, A.default)(Cr.linkoutSection, r),
          to: s,
          style: i,
          children: [e && (0, g.jsx)("div", {
            className: Cr.text,
            children: e
          }), a && (0, g.jsxs)("div", {
            className: Cr.cta,
            children: [a, " ", (0, g.jsx)("img", {
              src: t(81018)
            })]
          })]
        });
      var Er = t(2091);
      const Ir = ({
          brands: e = []
        }) => e.length ? (0, g.jsx)("div", {
          className: "rockstargames-sites-gta-gen9f6238fa20ad55d94e2baee6252cacc9a",
          children: e.map(({
            brand: e
          }, a) => (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cdf9bbf4599d4c4643bc18a37b5fa601",
            "data-brand": e
          }, a))
        }) : null,
        Ar = ({
          brand: e,
          headline_left: a,
          headline_right: t,
          info: s
        }) => (0, g.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9d21f3c9d6952c874ebdfb8c59fccf4c4",
          children: [(0, g.jsx)(Ir, {
            brands: [{
              brand: e
            }]
          }), (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9d723a3483ffbe40280b0faa62d665775",
            children: [(0, g.jsxs)("h2", {
              children: [a, " ", (0, g.jsx)("span", {
                children: t
              })]
            }), (0, g.jsx)("p", {
              children: s
            })]
          })]
        }),
        Mr = ({
          left: e,
          right: a
        }) => {
          const [t, s] = (0, b.useState)(""), [r, i] = (0, b.useState)(!1);
          return (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9d4cf2b6544a73290a36c0d5978306345",
            children: [(0, g.jsxs)("h2", {
              "aria-hidden": r,
              onMouseOver: () => {
                i(!0), s(`${e} ${a}`)
              },
              onMouseOut: () => {
                i(!1), s("")
              },
              onFocus: () => {},
              onBlur: () => {},
              children: [e, " ", (0, g.jsx)("span", {
                children: a
              })]
            }), (0, g.jsx)("h2", {
              role: "status",
              "aria-live": "polite",
              className: "rockstargames-sites-gta-gen9d409f137f998638736d516816d888018",
              children: t
            })]
          })
        };
      var Pr = t(91482),
        Lr = t(25088);
      const zr = ({
          buttons: e = [],
          className: a
        }) => e.length ? (0, g.jsx)("div", {
          className: (0, A.default)("rockstargames-sites-gta-gen9d5cf39b0f935ff4f022f65634a36ef76", a),
          children: e.map(({
            icon: e,
            to: a,
            title: t,
            gtm: s
          }, r) => t ? (0, g.jsx)(Lr.A, {
            className: "white",
            text: t,
            to: a,
            icon: e,
            gtm: s
          }, r) : "")
        }) : null,
        Rr = {
          background: "rockstargames-sites-gta-gen9b6a24a872b9dcca29c2421e6abe261a7",
          buttonGroup: "rockstargames-sites-gta-gen9aeb3db441fb9d0e5e56872ef4c76e135",
          content: "rockstargames-sites-gta-gen9cdcca1527294056f1f6bed47b5e496cf",
          descriptions: "rockstargames-sites-gta-gen9e24370ef2696c6b295c2c8e1a32fd937",
          gradient: "rockstargames-sites-gta-gen9caf8df2a786db534f194eafe8e8869f4",
          hero: "rockstargames-sites-gta-gen9b2ba83d95e58e4e8ee5db947901752d6",
          images: "rockstargames-sites-gta-gen9ec42922139eb8af3babbed410b5c0985",
          layered: "rockstargames-sites-gta-gen9eccf2d8a9d0ec4cf6c087231ae7a0d7f",
          legalText: "rockstargames-sites-gta-gen9d2b6a425930fddaf41a3062887bda824",
          pillBtn: "rockstargames-sites-gta-gen9f8fcdee83ef906b0f73b6019eb716dd5",
          selected: "rockstargames-sites-gta-gen9bcd79ce88b14ac303755975890cba503",
          shardsCarousel: "rockstargames-sites-gta-gen9c75e522b68f2112d11ece94bb89f2d26"
        },
        Dr = ({
          title: e = "",
          mobileImg: a,
          desktopImg: t
        }) => {
          const s = (0, I.useGetCdnSource)(a ?? null),
            r = (0, I.useGetCdnSource)(t ?? s);
          return (0, g.jsx)("div", {
            className: Rr.shard,
            style: {
              "--background-image-mobile": `url(${s})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, g.jsx)("h5", {
              children: e
            })
          })
        },
        Br = ({
          title: e = "Membership Rewards",
          shards: a
        }) => {
          const [t, s] = (0, b.useState)(null);
          return (0, b.useEffect)(() => {
            a && s(a.map(e => {
              if (!e?.shardImg) return;
              const {
                title: a,
                shardImg: t
              } = e, {
                mobile: s,
                desktop: r
              } = t;
              return (0, g.jsx)(Dr, {
                title: a,
                mobileImg: s?.full_src,
                desktopImg: r?.full_src
              }, a)
            }))
          }, [a]), t ? (0, g.jsx)("div", {
            className: Rr.shardsCarousel,
            children: (0, g.jsx)(q, {
              title: e,
              slideChildren: t,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        Gr = ({
          brands: e = [],
          backgroundImg: a,
          layeredImg: t,
          ctas: s = [],
          expandingButtonLabel: r = "Subscribe",
          platformsAndLinks: i = [],
          description: n,
          title: o,
          legalText: c,
          shardsSection: l = {},
          className: d
        }) => {
          const m = (0, I.useGetCdnSource)(a?.mobile?.full_src ?? null),
            _ = (0, I.useGetCdnSource)(a?.desktop?.full_src ?? m),
            u = (0, I.useGetCdnSource)(t?.mobile?.full_src ?? null),
            b = (0, I.useGetCdnSource)(t?.desktop?.full_src ?? u),
            p = {
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
            f = {
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
          return (0, g.jsxs)(P.motion.div, {
            className: (0, A.default)(Rr.hero, d),
            style: {
              "--background-image-desktop": `url(${_})`,
              "--background-image-mobile": `url(${m})`,
              "--layered-image-desktop": `url(${b})`,
              "--layered-image-mobile": `url(${u})`
            },
            initial: "hidden",
            animate: "visible",
            variants: p,
            children: [(0, g.jsxs)("div", {
              "data-testid": "hero",
              className: Rr.images,
              children: [_ && m ? (0, g.jsx)("div", {
                className: Rr.background,
                style: a?.style ?? {}
              }) : "", u && b ? (0, g.jsx)("div", {
                className: Rr.layered
              }) : "", (0, g.jsx)("div", {
                className: Rr.gradient
              })]
            }), (0, g.jsxs)(P.motion.div, {
              className: Rr.content,
              initial: "hidden",
              animate: "visible",
              variants: p,
              children: [(0, g.jsx)(P.motion.div, {
                variants: f,
                children: (0, g.jsx)(Ir, {
                  brands: e
                })
              }), i.length ? (0, g.jsx)(P.motion.div, {
                variants: f,
                children: (0, g.jsx)(E.A, {
                  buttonText: r,
                  platformsAndLinks: i,
                  children: (0, g.jsxs)(g.Fragment, {
                    children: [(0, g.jsxs)(P.motion.div, {
                      className: Rr.descriptions,
                      variants: f,
                      children: [(0, g.jsx)("h1", {
                        dangerouslySetInnerHTML: {
                          __html: o
                        }
                      }), (0, g.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: n
                        }
                      })]
                    }), s.length > 0 && (0, g.jsx)(P.motion.div, {
                      variants: f,
                      children: (0, g.jsx)(zr, {
                        buttons: s,
                        className: Rr.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, g.jsxs)(g.Fragment, {
                children: [(0, g.jsxs)(P.motion.div, {
                  className: Rr.descriptions,
                  variants: f,
                  children: [(0, g.jsx)("h1", {
                    dangerouslySetInnerHTML: {
                      __html: o
                    }
                  }), (0, g.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: n
                    }
                  })]
                }), s.length > 0 && (0, g.jsx)(P.motion.div, {
                  variants: f,
                  children: (0, g.jsx)(zr, {
                    buttons: s,
                    className: Rr.buttonGroup
                  })
                })]
              }), c && (0, g.jsx)(P.motion.div, {
                className: Rr.legalText,
                variants: f,
                children: (0, g.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: c
                  }
                })
              })]
            }), l?.shards && (0, g.jsx)(Br, {
              ...l
            })]
          })
        };
      var Or = t(1468);
      const $r = (0, G.defineMessages)({
          elevator_pitch_link_console_account: {
            id: "elevator_pitch_link_console_account",
            description: "Message prompting user to join now",
            defaultMessage: "Join Now"
          },
          elevator_pitch_member_benefit_label: {
            id: "elevator_pitch_member_benefit_label",
            description: "Message prompting user to see the member benefits",
            defaultMessage: "Member Benefits"
          },
          elevator_pitch_available_on: {
            id: "elevator_pitch_available_on",
            description: "Prepend for platforms that the feature is available on. Will be accompanied by platforms and Icons",
            defaultMessage: "Only available on"
          },
          elevator_pitch_available_on_ps5: {
            id: "elevator_pitch_available_on_ps5",
            description: "Platform name used in ARIA labels: Playstation 5",
            defaultMessage: "PlayStation5"
          },
          elevator_pitch_available_on_xbox: {
            id: "elevator_pitch_available_on_xbox",
            description: "Platform name used in ARIA labels: Xbox Series X / S",
            defaultMessage: "Xbox Series X|S"
          },
          elevator_pitch_available_on_pc: {
            id: "elevator_pitch_available_on_pc",
            description: "Platform name used in ARIA labels: PC",
            defaultMessage: "PC"
          }
        }),
        Fr = {
          btnText: "rockstargames-sites-gta-gen9a48e1ee8d3e12b36e5469bd8b24bb342",
          buttonGroup: "rockstargames-sites-gta-gen9abe920c537da9aaa8a38353cae9cd093",
          ctaLinks: "rockstargames-sites-gta-gen9a801bf5e3d5213212fe0e1264294968d",
          ctaLinksContainer: "rockstargames-sites-gta-gen9cdf9ce1e4b24a6540b83c9cd42505afd",
          description: "rockstargames-sites-gta-gen9d575caf276ffc565a582234883a22fba",
          disclaimer: "rockstargames-sites-gta-gen9e2c438b9e54b2e4c4e5213fa1d49cbfc",
          elevatorPitch: "rockstargames-sites-gta-gen9fd513cc9af6a88e972723736ef93f309",
          elevatorPitchBtn: "rockstargames-sites-gta-gen9ea94a548f3be7c6be018fa5e62c65287",
          linkAccountButton: "rockstargames-sites-gta-gen9bdb769082c100b8d37e37ca7634eb68f",
          pillBtn: "rockstargames-sites-gta-gen9f15dc7913c94ea4e398f088bbc03d15b",
          pitch: "rockstargames-sites-gta-gen9f0bb897d6f7c86814c51f8eb1ffe6180",
          platformGroup: "rockstargames-sites-gta-gen9fa05409f0a6a3600d949d0952ddcbdec",
          platforms: "rockstargames-sites-gta-gen9e1fbcf677768ab9422c80de67e3ad23b",
          primaryBtn: "rockstargames-sites-gta-gen9cc051ed56e6be4c08ee1d979b9d7c304",
          secondaryBtn: "rockstargames-sites-gta-gen9cbf9ba643d59f5ef26cd1e9261992aa5",
          selected: "rockstargames-sites-gta-gen9f922b6fe161b6643bd6187741167c0bd",
          text: "rockstargames-sites-gta-gen9ef5cd6ccfa26e83f3b9f7ebd57a006b8",
          title: "rockstargames-sites-gta-gen9f618930e007937580dd35c92daa718c7",
          unexpandedButton: "rockstargames-sites-gta-gen9e5c4359b73f73c8a3ad7548a7ea472cf"
        },
        Vr = ({
          title: e,
          description: a,
          disclaimer: t,
          cta: s
        }) => {
          const {
            formatMessage: r
          } = (0, G.useIntl)();
          return (0, g.jsxs)("div", {
            className: Fr.elevatorPitch,
            "data-testid": "elevator-pitch",
            children: [(0, g.jsxs)("div", {
              className: Fr.pitch,
              children: [(0, g.jsx)("h2", {
                className: Fr.title,
                children: e
              }), (0, g.jsx)("p", {
                className: Fr.description,
                children: a
              })]
            }), (0, g.jsxs)("div", {
              className: Fr.ctaLinksContainer,
              children: [(0, g.jsxs)("div", {
                className: Fr.ctaLinks,
                children: [(0, g.jsx)("div", {
                  className: Fr.buttonGroup,
                  children: s && (0, g.jsx)(I.TinaParser, {
                    components: {
                      Cta: x.A,
                      ExpandingPlatformButton: E.A,
                      Gen9Button: Y.A
                    },
                    tina: {
                      payload: {
                        content: s
                      }
                    }
                  })
                }), (0, g.jsxs)("div", {
                  className: Fr.platformGroup,
                  children: [(0, g.jsx)("div", {
                    className: Fr.text,
                    children: (0, g.jsx)(G.FormattedMessage, {
                      ...$r.elevator_pitch_available_on
                    })
                  }), (0, g.jsxs)("div", {
                    className: Fr.platforms,
                    children: [(0, g.jsx)("img", {
                      className: Fr.platformIcon,
                      src: (0, Or.A)("ps5") || "",
                      alt: r($r.elevator_pitch_available_on_ps5)
                    }), (0, g.jsx)("img", {
                      className: Fr.platformIcon,
                      src: (0, Or.A)("xboxseriesxs") || "",
                      alt: r($r.elevator_pitch_available_on_xbox).replace(/\|/g, " ")
                    }), (0, g.jsx)("img", {
                      className: Fr.platformIcon,
                      src: (0, Or.A)("pcalt") || "",
                      alt: r($r.elevator_pitch_available_on_pc)
                    })]
                  })]
                })]
              }), t && (0, g.jsx)("div", {
                className: Fr.disclaimer,
                children: (0, g.jsx)("p", {
                  children: t
                })
              })]
            })]
          })
        },
        Hr = (0, G.defineMessages)({
          video_hero_support_message: {
            id: "video_hero_support_message",
            description: "Video Hero description when video unavailable or not supported",
            defaultMessage: "Your browser does not support video reproduction."
          },
          video_hero_play_button_label: {
            id: "video_hero_play_button_label",
            description: "Play video button",
            defaultMessage: "Video Playing"
          },
          video_hero_pause_button_label: {
            id: "video_hero_pause_button_label",
            description: "Pause video button",
            defaultMessage: "Video Paused"
          }
        }),
        qr = ({
          alt: e = "",
          className: a = "",
          clipRule: t = "evenodd",
          fill: s = "white",
          fillRule: r = "evenodd",
          height: i = "20",
          viewBox: n = "0 0 20 20",
          width: o = "20"
        }) => (0, g.jsxs)("svg", {
          className: a,
          height: i,
          width: o,
          viewBox: n,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, g.jsx)("title", {
            children: e
          }), (0, g.jsx)("path", {
            fillRule: r,
            clipRule: t,
            d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
            fill: s
          })]
        }),
        Wr = ({
          alt: e = "",
          className: a = "",
          clipRule: t = "evenodd",
          fill: s = "white",
          fillRule: r = "evenodd",
          height: i = "20",
          viewBox: n = "0 0 20 20",
          width: o = "20"
        }) => (0, g.jsxs)("svg", {
          className: a,
          height: i,
          width: o,
          viewBox: n,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, g.jsx)("title", {
            children: e
          }), (0, g.jsx)("path", {
            fillRule: r,
            clipRule: t,
            d: "M4.16797 3.33333C4.16797 2.8731 4.54106 2.5 5.0013 2.5H8.33464C8.79487 2.5 9.16797 2.8731 9.16797 3.33333V16.6667C9.16797 17.1269 8.79487 17.5 8.33464 17.5H5.0013C4.54106 17.5 4.16797 17.1269 4.16797 16.6667V3.33333Z",
            fill: s
          }), (0, g.jsx)("path", {
            fillRule: r,
            clipRule: t,
            d: "M10.8346 3.33333C10.8346 2.8731 11.2077 2.5 11.668 2.5H15.0013C15.4615 2.5 15.8346 2.8731 15.8346 3.33333V16.6667C15.8346 17.1269 15.4615 17.5 15.0013 17.5H11.668C11.2077 17.5 10.8346 17.1269 10.8346 16.6667V3.33333Z",
            fill: s
          })]
        }),
        Ur = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/7cfb24053cf0c7ee3c6454923c53ac28.mp4",
        Kr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/f7da4ca1b248290693c7cdfc89b8c369.mp4",
        Xr = ({
          variant: e,
          videoSrc: a,
          fallbackImg: t,
          fallbackImgAlt: s,
          contentImgSrc: r,
          contentImgAlt: i,
          heading: o,
          subheading: c,
          ctaText: l,
          ctaLink: d,
          overlayColor: m
        }) => {
          const {
            track: _
          } = (0, h.useGtmTrack)(), u = (0, b.useRef)(null), [p, f] = (0, b.useState)(!1), k = !("undefined" == typeof window || !window.matchMedia) && window.matchMedia("(prefers-reduced-motion: reduce)").matches, v = (0, I.useGetCdnSource)(r?.full_src ?? ""), y = (0, I.useGetCdnSource)(t), {
            formatMessage: j
          } = (0, G.useIntl)(), x = "image" === e || k;
          let w;
          (0, b.useEffect)(() => {
            const e = () => f(!0),
              a = () => f(!1),
              t = u.current;
            return t && (t.addEventListener("play", e), t.addEventListener("pause", a)), () => {
              t && (t.removeEventListener("play", e), t.removeEventListener("pause", a))
            }
          }, []);
          try {
            w = a ? n["vinewood-club" === a ? "vinewoodClub" : "defaultVideo"] : "mock-video-url.mp4"
          } catch (e) {
            console.error("Error loading video: ", e)
          }
          return (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9de61f9f0fbf4ae3e3b07b26d7c10a639",
            children: [(0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d4b7b248ee11d241ed4a5037fcbfb292",
              children: "image" === e || k ? (0, g.jsx)("img", {
                className: "rockstargames-sites-gta-gen9e92c7660caabd22b2f06e10b65ff5973",
                src: y,
                alt: s
              }) : (0, g.jsxs)(g.Fragment, {
                children: [(0, g.jsxs)("video", {
                  ref: u,
                  "data-testid": "hero-video",
                  className: "rockstargames-sites-gta-gen9b85fcf4842e5aa328e802d6d9adbc2f2",
                  "aria-hidden": !0,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  children: [(0, g.jsx)("source", {
                    src: w,
                    type: "video/mp4"
                  }), j(Hr.video_hero_support_message)]
                }), (0, g.jsx)("button", {
                  role: "button",
                  className: "rockstargames-sites-gta-gen9a31a09aae4f84e779f576d40766f35cb",
                  "aria-label": j(p ? Hr.video_hero_play_button_label : Hr.video_hero_pause_button_label),
                  onClick: () => {
                    if (!x && u.current) {
                      let e;
                      p ? (u.current.pause(), e = "toggle pause") : (u.current.play(), e = "toggle play"), _({
                        event: "cta_other",
                        text: e,
                        element_placement: "hero"
                      }), f(!p)
                    }
                  },
                  children: p ? (0, g.jsx)(Wr, {
                    alt: j(Hr.video_hero_pause_button_label),
                    height: "24",
                    width: "24"
                  }) : (0, g.jsx)(qr, {
                    alt: j(Hr.video_hero_play_button_label),
                    height: "24",
                    width: "24"
                  })
                })]
              })
            }), (0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a97e06257d4710e044371f38ce00dccb",
              style: {
                "--overlay-bg": m ?? "var(--gradient-black-200-bottom, linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%))"
              }
            }), (r || o || c || l) && (0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ccf0d483e03e6a559024c925f53acb62",
              children: (0, g.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9d5a3173e27bff888207a7723eb2b63a9",
                children: [r && (0, g.jsx)("img", {
                  className: "rockstargames-sites-gta-gen9f42b599db347bf5fe648d2378e513fd7",
                  src: v ?? r,
                  alt: i
                }), o && (0, g.jsx)("h1", {
                  children: o
                }), c && (0, g.jsx)("h2", {
                  children: c
                }), d && (0, g.jsx)("a", {
                  href: d,
                  className: "rockstargames-sites-gta-gen9e5850d65d78ee941581350c10927c108",
                  children: l
                })]
              })
            })]
          })
        },
        Yr = ({
          imageSrc: e,
          imgTitle: a,
          description: t,
          cta: s
        }) => {
          const r = (0, I.useGetCdnSource)(e) ?? null,
            {
              isTablet: i
            } = (0, f.useWindowResize)(),
            [n, o] = (0, b.useState)(0);
          return (0, b.useEffect)(() => {
            o(i ? .5 * window.innerHeight : .25 * window.innerHeight)
          }, [i, window.innerHeight]), (0, g.jsxs)("figure", {
            className: "rockstargames-sites-gta-gen9da9cf7137b4554af52a7376b73f95862",
            children: [(0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9dac75c91cfffebce99e959a7ff449c0b",
              style: {
                "--background-image": `url(${r})`
              },
              children: (0, g.jsx)("span", {
                className: (0, A.default)("rockstargames-sites-gta-gen9d78d21271d0368e3cb992e18424ce364", "rockstargames-sites-gta-gen9eaac6b80bfbb8510c8d196db8dab1f2b"),
                children: (0, g.jsx)(hs.Root, {
                  mode: "multi",
                  className: "rockstargames-sites-gta-gen9f290924e1a03efbb505d8c6febcbf732",
                  max: n,
                  children: (0, g.jsx)(hs.Text, {
                    className: "rockstargames-sites-gta-gen9ac5bf2f3514347bbf41536621f9ee6ea",
                    dangerouslySetInnerHTML: a ? {
                      __html: a
                    } : void 0
                  })
                })
              })
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9f234ffc786a24e0aa0639fe21c7c62e9",
              children: [t && (0, g.jsx)("p", {
                className: "rockstargames-sites-gta-gen9d98ba885b836b9e46851139e2d002223",
                children: t
              }), s && (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9cc90f09a8f9111ac26c5b02800b0f50d",
                children: (0, g.jsx)(I.TinaParser, {
                  components: {
                    Cta: x.A,
                    ExpandingPlatformButton: E.A
                  },
                  tina: {
                    payload: {
                      content: s
                    }
                  }
                })
              })]
            })]
          })
        },
        Zr = {
          gridLayout: "rockstargames-sites-gta-gen9abd3a002d12c82304f1a16828d437d2d",
          leftColumn: "rockstargames-sites-gta-gen9bf750e5ac4ef4fcf0adea8d9c120912b",
          pillBtn: "rockstargames-sites-gta-gen9f77482349780a53d7275882506f3ac08",
          rightColumn: "rockstargames-sites-gta-gen9ba7a36b77781558b65eb7017d6135313",
          selected: "rockstargames-sites-gta-gen9c6936d8eaa450f600430217c2d7ad0d0",
          shadow: "rockstargames-sites-gta-gen9d581bd44cf40ff5de24b09f1ac44fad8",
          stickyBlock: "rockstargames-sites-gta-gen9e33eb2f23d42103d1f82d95db615109f"
        },
        Jr = ({
          title: e,
          leftColumn: a,
          rightColumn: t,
          disableStickyOnDesktop: s,
          disableStickyOnMobile: r,
          id: i = ""
        }) => {
          const {
            track: n
          } = (0, h.useGtmTrack)(), {
            isTablet: o
          } = (0, f.useWindowResize)(), {
            ref: c
          } = (0, D.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: a => {
              a && n({
                event: "page_section_impression",
                element_placement: e?.toLowerCase()
              })
            }
          }), l = (0, b.useRef)(null), d = (0, b.useRef)(null), m = (0, I.useTinaComponents)(), _ = (0, b.useMemo)(() => ({
            ...m,
            HTMLElement
          }), [m]);
          return ((e, a, t) => {
            const s = (0, b.useCallback)(() => {
              if (e && a.current && t.current) {
                const e = a.current.getBoundingClientRect().bottom,
                  s = t.current.getBoundingClientRect().top;
                t.current.style.marginTop = s <= e ? "" + (e - s) : "0"
              }
            }, [e, a, t]);
            (0, b.useEffect)(() => (window.addEventListener("scroll", s), window.addEventListener("resize", s), () => {
              window.removeEventListener("scroll", s), window.removeEventListener("resize", s)
            }), [s])
          })(o, l, d), (0, g.jsx)(us, {
            thresholds: [.5, 1],
            onThresholdReached: a => {
              n({
                event: "page_section_scroll",
                element_placement: e?.toLowerCase(),
                scroll_depth: 100 * a + "%"
              })
            },
            children: (0, g.jsxs)("div", {
              className: (0, A.default)(Zr.gridLayout),
              id: i,
              tabIndex: -1,
              children: [(0, g.jsx)("div", {
                ref: l,
                className: Zr.leftColumn,
                style: {
                  "--desktop-position": s ? "relative" : "sticky",
                  "--mobile-position": r ? "relative" : "sticky"
                },
                children: (0, g.jsx)("div", {
                  ref: c,
                  className: Zr.stickyBlock,
                  children: a && (0, g.jsx)(I.TinaParser, {
                    components: _,
                    tina: {
                      payload: {
                        content: a
                      }
                    }
                  })
                })
              }), (0, g.jsx)("div", {
                ref: d,
                className: (0, A.default)(Zr.rightColumn, o ? Zr.shadow : null, Zr.borderGrey),
                children: t && (0, g.jsx)(I.TinaParser, {
                  components: _,
                  tina: {
                    payload: {
                      content: t
                    }
                  }
                })
              })]
            })
          })
        },
        Qr = {
          benefitsContent: "rockstargames-sites-gta-gen9ddd53cff975d47544bde967e76d3b836",
          benefitsGroup: "rockstargames-sites-gta-gen9a88643cacc40499dd691cc923172eb81",
          benefitsWrapper: "rockstargames-sites-gta-gen9b9539a1e050b68a2244211811661ecef",
          description: "rockstargames-sites-gta-gen9f2c9a205fc4aaa2b53af1a3fbe5e7939",
          heading: "rockstargames-sites-gta-gen9d88696b727ef1969236c84f9812c872e",
          pillBtn: "rockstargames-sites-gta-gen9d2ddae0a995ad44289d2241ff9e30894",
          selected: "rockstargames-sites-gta-gen9df0a538b69dc0efa837e83454b438455",
          summaryBenefits: "rockstargames-sites-gta-gen9cc53a5d0b0b5a8f7aec586c7dcb0ebe8",
          summaryContent: "rockstargames-sites-gta-gen9a9b923feebb7047e79194478184e82b9",
          title: "rockstargames-sites-gta-gen9be825d3a95aaed519872e47144792232",
          titleHeading: "rockstargames-sites-gta-gen9e08e0549551793e2a2770450f25c4b8d"
        },
        ei = ({
          benefits: e
        }) => e?.length ? (0, g.jsx)("section", {
          className: (0, A.default)(Qr.scrollableBlock, Qr.benefitsWrapper),
          children: (0, g.jsx)("div", {
            className: Qr.benefitsGroup,
            children: e.map(e => (0, g.jsxs)("div", {
              className: Qr.benefitsContent,
              children: [(0, g.jsx)("h3", {
                className: Qr.heading,
                children: e.title
              }), (0, g.jsx)(Ee.A, {
                columns: e.columns ?? null,
                noImg: !0,
                list: e.list
              })]
            }, e.title))
          })
        }) : null,
        ai = ({
          title: e,
          description: a,
          imgSrc: t,
          cta: s
        }) => {
          const r = (0, I.useGetCdnSource)(t?.mobile),
            i = (0, I.useGetCdnSource)(t?.desktop) || r;
          return (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f5c2b4f08055afcd61341203c35ce5cc",
            role: "article",
            children: [(0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c5aed97481686103bcd6dd9233b232b8",
              children: [(0, g.jsxs)("header", {
                className: "rockstargames-sites-gta-gen9f3656c1e04b56ff20d3eef229d4d0241",
                children: [e && (0, g.jsx)("h2", {
                  className: "rockstargames-sites-gta-gen9d8afc706fb49b6338cb7cf29b8e3caf6",
                  children: e
                }), a && (0, g.jsx)("p", {
                  className: "rockstargames-sites-gta-gen9ba52cdd62b667ad47773b106c3c61cc0",
                  children: a
                })]
              }), s && (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c805527c48a7bc06e6cd0b7b852c21c7",
                children: (0, g.jsx)(I.TinaParser, {
                  components: {
                    Cta: x.A,
                    ExpandingPlatformButton: E.A,
                    Gen9Button: Y.A
                  },
                  tina: {
                    payload: {
                      content: s
                    }
                  }
                })
              })]
            }), t && (0, g.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ffc2fea677e762c4d129fdf2455458b0",
              children: (0, g.jsx)("img", {
                src: i,
                alt: e
              })
            })]
          })
        },
        ti = {
          btn__primary: "rockstargames-sites-gta-gen9f7cd84191ce7292388285221268bb216",
          contain: "rockstargames-sites-gta-gen9cf954fb41e5ae1eb6a3e34bf8056be13",
          cta: "rockstargames-sites-gta-gen9c5283b6a7f210b689b3266a3c2d0532b",
          ctaBlock: "rockstargames-sites-gta-gen9b357dfce2cbbbaaddba0922bf6aa4349",
          fullBleed: "rockstargames-sites-gta-gen9fe35d4b3501cddd0a7f8bc53b458d8d0",
          pillBtn: "rockstargames-sites-gta-gen9ccbeeaf2adb368ba639f6cf57439c93c",
          selected: "rockstargames-sites-gta-gen9e78c91f6d4f5b4795c02540af8f24464",
          tile: "rockstargames-sites-gta-gen9a55121701981a0fa5d48172268c48e15",
          "tile--large": "rockstargames-sites-gta-gen9abad2ab70da5961f0cd93a0ec0584a25",
          "tile--medium": "rockstargames-sites-gta-gen9be75e3368953489da1733298f9d9ecf9",
          "tile--right": "rockstargames-sites-gta-gen9fd8f438da705d0651f99137f64c2e451",
          "tile--small": "rockstargames-sites-gta-gen9b743dddc76f7a11f2e038f0f53bf0e23",
          tile__content: "rockstargames-sites-gta-gen9a9d7d7cb57c3428c037aba5371209bbd",
          tile__description: "rockstargames-sites-gta-gen9d0b5b4ec670ef2e69a9a29905750c758",
          tile__image: "rockstargames-sites-gta-gen9bcc24445ba035f3331f4305d4b95a2d0",
          tile__title: "rockstargames-sites-gta-gen9dc139eed59a46cb43994bd9ab230b1b9"
        },
        si = ({
          title: e,
          description: a,
          cta: t,
          imgSrc: s,
          imgPosition: r = "top",
          cardSize: i = "medium",
          enableFullBleed: n,
          background: o = "var(--foundry-alias-color-background-bold-layer-2)",
          backgroundSize: c = "cover",
          backgroundImage: l,
          backgroundPosition: d = "center",
          backgroundRepeat: m = "no-repeat",
          customStyles: _
        }) => {
          const u = (0, I.useGetCdnSource)(s?.mobile ?? null),
            b = (0, I.useGetCdnSource)(s?.desktop ?? u),
            p = (0, I.useGetCdnSource)(l ?? null),
            f = {
              background: o,
              backgroundSize: c,
              backgroundImage: l ? `url(${p})` : void 0,
              backgroundPosition: d,
              backgroundRepeat: m,
              ..._
            };
          return (0, g.jsxs)("article", {
            className: (0, A.default)(ti.tile, [ti[`tile--${i}`]], [ti[n ? "fullBleed" : "contain"]], [ti[`tile--${r}`]]),
            style: {
              ...f
            },
            children: [s && (0, g.jsx)("div", {
              role: "img",
              className: ti.tile__image,
              "aria-label": s?.imgAlt || s?._memoq?.imgAlt,
              style: {
                "--background-image-desktop": `url(${b})`,
                "--background-image-mobile": `url(${u})`
              }
            }), (0, g.jsxs)("div", {
              className: (0, A.default)(ti.tile__content),
              children: [e && (0, g.jsx)("h2", {
                className: ti.tile__title,
                children: e
              }), a && (0, g.jsx)("p", {
                className: ti.tile__description,
                children: a
              }), t && (0, g.jsx)("div", {
                className: ti.ctaBlock,
                children: (0, g.jsx)(I.TinaParser, {
                  components: {
                    Cta: x.A,
                    ExpandingPlatformButton: E.A
                  },
                  tina: {
                    payload: {
                      content: t
                    }
                  }
                })
              })]
            })]
          })
        },
        ri = (0, b.memo)(si);
      var ii = t(69088);
      const ni = ({
          src: e,
          alt: a
        }) => {
          const t = (0, I.useGetCdnSource)(e ?? null);
          return (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9bafb4e6a158f4ed0bc68089ef275ad94",
            children: (0, g.jsx)("img", {
              src: t,
              alt: a
            })
          })
        },
        oi = (0, b.memo)(ni),
        ci = (0, G.defineMessages)({
          value_prop_jump_link_label: {
            id: "value_prop_jump_link_label",
            description: "A hidden label for the jump links to tell the user the link behavior.",
            defaultMessage: "(Skip to section)"
          }
        }),
        li = ({
          name: e,
          valueProps: a,
          enableAnimation: t
        }) => {
          const s = a.map(({
              jumpToSectionId: e = ""
            }) => e),
            {
              track: r
            } = (0, h.useGtmTrack)(),
            {
              ref: i
            } = (0, D.useInView)({
              threshold: .6,
              triggerOnce: !0,
              onChange: a => {
                a && r({
                  event: "page_section_impression",
                  element_placement: e.toLowerCase()
                })
              }
            }),
            n = a => {
              const t = a + 1;
              r({
                event: "card_click",
                card_id: t.toString(),
                card_name: `Card ${t}`,
                position: t,
                element_placement: e.toLowerCase()
              })
            },
            o = (0, b.useCallback)(e => {
              n(e);
              const a = document?.getElementById(s[e] || "") || null;
              if (a) {
                const e = 20;
                window?.scrollTo({
                  top: a?.getBoundingClientRect()?.top + window?.scrollY - e,
                  behavior: "smooth"
                }), a.focus({
                  preventScroll: !0
                })
              }
            }, [a, s, n]);
          return (0, g.jsx)("div", {
            ref: i,
            "data-animate": t,
            className: "rockstargames-sites-gta-gen9ee4924ba29def53eb12a10d11c8f705d",
            children: a.map((e, a) => (0, g.jsxs)("button", {
              className: "rockstargames-sites-gta-gen9f971bd8827552a1baadea8776cdada8a",
              onClick: () => o(a),
              children: [e?.iconImgSrc && (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9cce42e1c4264e5b1460e981b29b85809",
                children: (0, g.jsx)(oi, {
                  src: e?.iconImgSrc,
                  alt: e?.iconAlt || e?.title || "Icon"
                })
              }), (0, g.jsxs)("h3", {
                className: "rockstargames-sites-gta-gen9fef730bb1272030876b06f9275276637",
                children: [e?.title, (0, g.jsx)(ii.s6, {
                  children: (0, g.jsx)(G.FormattedMessage, {
                    ...ci.value_prop_jump_link_label
                  })
                })]
              })]
            }, e?.key))
          })
        },
        di = {},
        mi = ({
          brand: e
        }) => (0, g.jsx)("div", {
          className: di[e]
        }),
        _i = () => (0, g.jsx)("h2", {
          children: "Section"
        });
      var ui = t(73651),
        gi = t(83841);
      const bi = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","decorative_video_replay_button_label":"Wiederholen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Video wird wiedergegeben","hp_hero_stop_button_label":"Video angehalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","image_marquee_cta_pause_label":"Laufband pausieren","image_marquee_cta_play_label":"Laufband abspielen","job_card_bookmark_action":"Markieren","job_card_created_by":"Erstellt von","job_card_image_alt_text":"Screenshot vom Job {name}","job_card_report_action":"Melden","job_card_share_action":"Teilen","job_card_updated_date":"Aktualisiert: {date}","job_card_verified_by":"Verifiziert von","job_dialog_bookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen markierten Job sehen zu können – Jobs können nur im Spiel bewertet werden, nachdem sie gespielt wurden.","job_dialog_bookmarked_heading":"Job markiert: <b>{name}</b>","job_dialog_bookmarked_title":"Job markiert","job_dialog_confirmation_button":"OKAY","job_dialog_error_body":"Es gab einen Fehler bei dem Versuch, einen Job zu markieren/eine Markierung zu entfernen. Bitte versuche es erneut.","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Fehler","job_dialog_unbookmarked_body":"Du musst Grand Theft Auto Online neu starten, um diesen Job nicht länger in deinen Markierungen sehen zu können.","job_dialog_unbookmarked_heading":"Job nicht mehr markiert: <b>{name}</b>","job_dialog_unbookmarked_title":"Job nicht mehr markiert","job_type_adversary_mode":"Gegner-Modus","job_type_air_race":"Luftrennen","job_type_arena_deathmatch":"Arena-Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Radrennen","job_type_capture":"Capture","job_type_contact_mission":"Kontaktmission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Dragsterrennen","job_type_drift_race":"Driftrennen","job_type_foot_race":"Rennen zu Fuß","job_type_hao_special_works_race":"HSW-Rennen","job_type_heist":"Raubüberfall","job_type_heist_prep":"Raubüberfall-Austrüstungsmission","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Landrennen","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission-Creator","job_type_open_wheel_race":"Open-Wheel-Rennen","job_type_parachuting":"Fallschirmsprung","job_type_pursuit_race":"Verfolgungsrennen","job_type_race":"Rennen","job_type_random_mission":"Zufällige Mission","job_type_special_race":"Spezialrennen","job_type_street_race":"Straßenrennen","job_type_stunt_race":"Stuntrennen","job_type_survival":"Überlebenskampf","job_type_target":"Zielscheibenrennen","job_type_team_deathmatch":"Team-Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Verwandlungsrennen","job_type_unknown":"Unbekannt","job_type_vehicle_deathmatch":"Fahrzeug-Deathmatch","job_type_water_race":"Seerennen","lightbox_close_button":"Schließen","login_dialog_body":"Du musst dich erst anmelden, um diese Inhalte zu sehen.","login_dialog_signin_button":"Anmelden","login_dialog_signup_button":"Registrieren","login_dialog_title":"Anmelden erforderlich","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details_amp":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details_amp":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte jederzeit deine Präferenzen bezüglich der Kommunikation in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","share_copied_to_clipboard":"Link erfolgreich kopiert!","share_copy_to_clipboard":"In die Zwischenablage kopieren","share_heading":"Teilen","share_share_to_facebook":"Auf Facebook teilen","share_share_to_reddit":"Auf Reddit teilen","share_share_to_twitter":"Auf X teilen","web_offer_claim_dialog_close":"schließen","web_offer_claim_error_state_button":"Erneut versuchen","web_offer_claim_error_state_icon_label":"Fehler-Symbol","web_offer_claim_exists_state_icon_label":"Erfolgssymbol","web_offer_claim_link_account_state_icon_label":"Fehler-Symbol","web_offer_claim_loading_state":"lädt","web_offer_claim_success_state_icon_label":"Erfolgssymbol"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Video Playing","hp_hero_stop_button_label":"Video Stopped","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","image_marquee_cta_pause_label":"Marquee Pause","image_marquee_cta_play_label":"Marquee Play","job_card_bookmark_action":"Bookmark","job_card_created_by":"Created by","job_card_image_alt_text":"Screenshot of {name} job","job_card_report_action":"Report","job_card_share_action":"Share","job_card_updated_date":"Updated {date}","job_card_verified_by":"Verified by","job_dialog_bookmarked_body":"You will need to restart Grand Theft Auto Online to see this bookmarked job - jobs can only be rated in-game, after they have been played.","job_dialog_bookmarked_heading":"Job Bookmarked: <b>{name}</b>","job_dialog_bookmarked_title":"Job Bookmarked","job_dialog_confirmation_button":"OK","job_dialog_error_body":"There was an error when attempting to bookmark/unbookmark the job. Please try again","job_dialog_error_heading":"Job: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"You will need to restart Grand Theft Auto Online to no longer see this job in your bookmarks.","job_dialog_unbookmarked_heading":"Job Unbookmarked: <b>{name}</b>","job_dialog_unbookmarked_title":"Job Unbookmarked","job_type_adversary_mode":"Adversary Mode","job_type_air_race":"Air Race","job_type_arena_deathmatch":"Arena Deathmatch","job_type_arena_war":"Arena War","job_type_bike_race":"Bike Race","job_type_capture":"Capture","job_type_contact_mission":"Contact Mission","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Drag Race","job_type_drift_race":"Drift Race","job_type_foot_race":"Foot Race","job_type_hao_special_works_race":"Hao\'s Special Works Race","job_type_heist":"Heist","job_type_heist_prep":"Heist Prep","job_type_king_of_the_hill":"King of the Hill","job_type_land_race":"Land Race","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Mission","job_type_mission_creator":"Mission Creator","job_type_open_wheel_race":"Open Wheel Race","job_type_parachuting":"Parachuting","job_type_pursuit_race":"Pursuit Race","job_type_race":"Race","job_type_random_mission":"Random Mission","job_type_special_race":"Special Vehicle Race","job_type_street_race":"Street Race","job_type_stunt_race":"Stunt Race","job_type_survival":"Survival","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Team Deathmatch","job_type_team_king_of_the_hill":"Team King of the Hill","job_type_transform_race":"Transform Race","job_type_unknown":"Unknown","job_type_vehicle_deathmatch":"Vehicle Deathmatch","job_type_water_race":"Sea Race","lightbox_close_button":"Close","login_dialog_body":"You need to sign in first to interact with this content","login_dialog_signin_button":"Sign In","login_dialog_signup_button":"Sign Up","login_dialog_title":"Sign In Required","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","share_copied_to_clipboard":"Link Copied Successfully!","share_copy_to_clipboard":"Copy to clipboard","share_heading":"Share","share_share_to_facebook":"Share to Facebook","share_share_to_reddit":"Share to Reddit","share_share_to_twitter":"Share to X","web_offer_claim_dialog_close":"close","web_offer_claim_error_state_button":"Try Again","web_offer_claim_error_state_icon_label":"Error Icon","web_offer_claim_exists_state_icon_label":"Success Icon","web_offer_claim_link_account_state_icon_label":"Error Icon","web_offer_claim_loading_state":"loading","web_offer_claim_success_state_icon_label":"Success Icon"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Volver a ver","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproduciendo vídeo","hp_hero_stop_button_label":"Vídeo en pausa","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","image_marquee_cta_pause_label":"Pausar marquesina","image_marquee_cta_play_label":"Reproducir marquesina","job_card_bookmark_action":"Marcar","job_card_created_by":"Creada por","job_card_image_alt_text":"Captura de pantalla de la actividad {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizada el {date}","job_card_verified_by":"Verificada por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Ha habido un error al intentar marcar o eliminar la marca de esta actividad. Vuelve a intentarlo","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tu lista de actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad no marcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad no marcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena War","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misiones de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de drift","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar del golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de coches de competición","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Partida de supervivencia","job_type_target":"Target Assault Race","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Para interactuar con este contenido debes iniciar sesión.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Debes iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de comunicación en cualquier momento en los ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","share_copied_to_clipboard":"¡El enlace se ha copiado con éxito!","share_copy_to_clipboard":"Copiar al portapapeles","share_heading":"Compartir","share_share_to_facebook":"Compartir en Facebook","share_share_to_reddit":"Compartir en Reddit","share_share_to_twitter":"Compartir en X","web_offer_claim_dialog_close":"Cerrar","web_offer_claim_error_state_button":"Vuelve a intentarlo","web_offer_claim_error_state_icon_label":"Icono de error","web_offer_claim_exists_state_icon_label":"Icono de aprobación","web_offer_claim_link_account_state_icon_label":"Icono de error","web_offer_claim_loading_state":"Cargando","web_offer_claim_success_state_icon_label":"Icono de aprobación"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","decorative_video_replay_button_label":"Repetir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproduciendo video","hp_hero_stop_button_label":"Video detenido","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","image_marquee_cta_pause_label":"Pausar marco","image_marquee_cta_play_label":"Reproducir marco","job_card_bookmark_action":"Marcar","job_card_created_by":"Creado por","job_card_image_alt_text":"Captura de pantalla del trabajo {name}","job_card_report_action":"Reportar","job_card_share_action":"Compartir","job_card_updated_date":"Actualizado {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para ver esta actividad marcada. Las actividades solo se pueden calificar en el juego una vez jugadas.","job_dialog_bookmarked_heading":"Actividad marcada: <b>{name}</b>","job_dialog_bookmarked_title":"Actividad marcada","job_dialog_confirmation_button":"ACEPTAR","job_dialog_error_body":"Se produjo un error al intentar marcar o desmarcar la actividad. Inténtalo de nuevo.","job_dialog_error_heading":"Actividad: <b>{name}</b>","job_dialog_error_title":"Error","job_dialog_unbookmarked_body":"Necesitas reiniciar Grand Theft Auto Online para dejar de ver esta actividad en tus actividades marcadas.","job_dialog_unbookmarked_heading":"Actividad desmarcada: <b>{name}</b>","job_dialog_unbookmarked_title":"Actividad desmarcada","job_type_adversary_mode":"Modo Adversario","job_type_air_race":"Carrera aérea","job_type_arena_deathmatch":"Partida a muerte de arena","job_type_arena_war":"Arena de Motores","job_type_bike_race":"Carrera a dos ruedas","job_type_capture":"Captura","job_type_contact_mission":"Misión de contacto","job_type_deathmatch":"Partida a muerte","job_type_drag_race":"Carrera de aceleración","job_type_drift_race":"Carrera de derrapes","job_type_foot_race":"Carrera a pie","job_type_hao_special_works_race":"Carrera de Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Misión preliminar de golpe","job_type_king_of_the_hill":"Rey de la colina","job_type_land_race":"Carrera terrestre","job_type_last_team_standing":"Último equipo en pie","job_type_mission":"Misión","job_type_mission_creator":"Creador de misiones","job_type_open_wheel_race":"Carrera de ruedas descubiertas","job_type_parachuting":"Paracaidismo","job_type_pursuit_race":"Carrera de persecución","job_type_race":"Carrera","job_type_random_mission":"Misión aleatoria","job_type_special_race":"Carrera de vehículos especiales","job_type_street_race":"Carrera urbana","job_type_stunt_race":"Carrera acrobática","job_type_survival":"Supervivencia","job_type_target":"Carrera de ataque al objetivo","job_type_team_deathmatch":"Partida a muerte por equipos","job_type_team_king_of_the_hill":"Rey de la colina por equipos","job_type_transform_race":"Carrera de transformación","job_type_unknown":"Sin especificar","job_type_vehicle_deathmatch":"Partida a muerte con vehículos","job_type_water_race":"Carrera marítima","lightbox_close_button":"Cerrar","login_dialog_body":"Necesitas iniciar sesión para poder interactuar con este contenido.","login_dialog_signin_button":"Iniciar sesión","login_dialog_signup_button":"Registrarse","login_dialog_title":"Necesitas iniciar sesión","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details_amp":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details_amp":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de comunicación cuando quieras desde los ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","share_copied_to_clipboard":"¡Enlace copiado con éxito!","share_copy_to_clipboard":"Copiar al portapapeles","share_heading":"Compartir","share_share_to_facebook":"Compartir en Facebook","share_share_to_reddit":"Compartir en Reddit","share_share_to_twitter":"Compartir en X","web_offer_claim_dialog_close":"cerrar","web_offer_claim_error_state_button":"Volver a intentar","web_offer_claim_error_state_icon_label":"Ícono de error","web_offer_claim_exists_state_icon_label":"Ícono de aprobado","web_offer_claim_link_account_state_icon_label":"Ícono de error","web_offer_claim_loading_state":"cargando","web_offer_claim_success_state_icon_label":"Ícono de aprobado"},"fr-FR":{"aria_label_open_new_window":"(S\'ouvre dans une nouvelle fenêtre)","bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","decorative_video_replay_button_label":"Relire","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Vidéo en cours de lecture","hp_hero_stop_button_label":"Vidéo arrêtée","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","image_marquee_cta_pause_label":"Marquee Pause","image_marquee_cta_play_label":"Marquee Lecture","job_card_bookmark_action":"Ajouter aux favoris","job_card_created_by":"Créé par","job_card_image_alt_text":"Capture d\'écran de la mission {name}","job_card_report_action":"Effectuer un signalement","job_card_share_action":"Partager","job_card_updated_date":"Dernière modification : {date}","job_card_verified_by":"Vérifié par","job_dialog_bookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour voir cette mission ajoutée aux favoris. Les missions ne peuvent être notées qu\'en jeu, après avoir été jouées.","job_dialog_bookmarked_heading":"Mission ajoutée aux favoris : <b>{name}</b>","job_dialog_bookmarked_title":"Mission ajoutée aux favoris","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Une erreur est survenue lors de l\'ajout/du retrait de la mission de la liste des favoris. Veuillez réessayer.","job_dialog_error_heading":"Mission : <b>{name}</b>","job_dialog_error_title":"Erreur","job_dialog_unbookmarked_body":"Vous devrez redémarrer Grand Theft Auto Online pour ne plus voir cette mission dans vos favoris.","job_dialog_unbookmarked_heading":"Mission retirée des favoris : <b>{name}</b>","job_dialog_unbookmarked_title":"Mission retirée des favoris","job_type_adversary_mode":"Mode rivalité","job_type_air_race":"Course aérienne","job_type_arena_deathmatch":"Affrontement en arène","job_type_arena_war":"Guerre d\'arène","job_type_bike_race":"Course à moto","job_type_capture":"Capture","job_type_contact_mission":"Mission de contact","job_type_deathmatch":"Affrontement","job_type_drag_race":"Course de dragster","job_type_drift_race":"Course de drift","job_type_foot_race":"Course à pied","job_type_hao_special_works_race":"Course d\'Hao\'s Special Works","job_type_heist":"Braquage","job_type_heist_prep":"Préparation de braquage","job_type_king_of_the_hill":"Conquête","job_type_land_race":"Course terrestre","job_type_last_team_standing":"Extermination","job_type_mission":"Mission","job_type_mission_creator":"Éditeur de missions","job_type_open_wheel_race":"Course d\'ultralégères","job_type_parachuting":"Saut en parachute","job_type_pursuit_race":"Course de poursuite","job_type_race":"Course","job_type_random_mission":"Mission aléatoire","job_type_special_race":"Course de véhicules spéciaux","job_type_street_race":"Course de rue","job_type_stunt_race":"Course nautique","job_type_survival":"Survie","job_type_target":"Course aux points","job_type_team_deathmatch":"Affrontement en équipe","job_type_team_king_of_the_hill":"Conquête en équipe","job_type_transform_race":"Course polymorphes","job_type_unknown":"Inconnu","job_type_vehicle_deathmatch":"Affrontement motorisé","job_type_water_race":"Course nautique","lightbox_close_button":"Fermer","login_dialog_body":"Vous devez vous connecter pour interagir avec ce contenu.","login_dialog_signin_button":"Se connecter","login_dialog_signup_button":"Créer un compte","login_dialog_title":"Connexion requise","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details_amp":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les communications à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","share_copied_to_clipboard":"Lien copié !","share_copy_to_clipboard":"Copier dans le presse-papiers","share_heading":"Partager","share_share_to_facebook":"Partager sur Facebook","share_share_to_reddit":"Partager sur Reddit","share_share_to_twitter":"Partager sur X","web_offer_claim_dialog_close":"Fermer","web_offer_claim_error_state_button":"Réessayer","web_offer_claim_error_state_icon_label":"Icône d\'erreur","web_offer_claim_exists_state_icon_label":"Icône de réussite","web_offer_claim_link_account_state_icon_label":"Icône d\'erreur","web_offer_claim_loading_state":"Chargement","web_offer_claim_success_state_icon_label":"Icône de réussite"},"it-IT":{"aria_label_open_new_window":"(Si apre in una nuova finestra)","bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","decorative_video_replay_button_label":"Riproduci di nuovo","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Video in riproduzione","hp_hero_stop_button_label":"Riproduzione video interrotta","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","image_marquee_cta_pause_label":"Metti in pausa marquee","image_marquee_cta_play_label":"Riproduci marquee","job_card_bookmark_action":"Aggiungi ai preferiti","job_card_created_by":"Creato da","job_card_image_alt_text":"Screenshot dell\'attività {name}","job_card_report_action":"Segnala","job_card_share_action":"Condividi","job_card_updated_date":"Aggiornato il {date}","job_card_verified_by":"Verificato da","job_dialog_bookmarked_body":"Per visualizzare questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online. Le attività possono essere valutate solo all\'interno del gioco, dopo averle giocate.","job_dialog_bookmarked_heading":"Attività aggiunta ai preferiti: <b>{name}</b>","job_dialog_bookmarked_title":"Attività aggiunta ai preferiti","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Si è verificato un errore durante l’aggiunta ai/la rimozione dai preferiti dell’attività. Riprova più tardi","job_dialog_error_heading":"Attività: <b>{name}</b>","job_dialog_error_title":"Errore","job_dialog_unbookmarked_body":"Per non visualizzare più questa attività tra i preferiti, è necessario riavviare Grand Theft Auto Online.","job_dialog_unbookmarked_heading":"Attività rimossa dai preferiti: <b>{name}</b>","job_dialog_unbookmarked_title":"Attività rimossa dai preferiti","job_type_adversary_mode":"Modalità Competizione","job_type_air_race":"Gara aerea","job_type_arena_deathmatch":"Deathmatch nell\'Arena","job_type_arena_war":"Arena War","job_type_bike_race":"Gara su due ruote","job_type_capture":"Cattura","job_type_contact_mission":"Missione dei contatti","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Gara drag","job_type_drift_race":"Gara drift","job_type_foot_race":"Gara a piedi","job_type_hao_special_works_race":"Gara di Hao\'s Special Works","job_type_heist":"Colpi","job_type_heist_prep":"Missione preliminare del colpo","job_type_king_of_the_hill":"Re della collina","job_type_land_race":"Gara terrestre","job_type_last_team_standing":"Last Team Standing","job_type_mission":"Missione","job_type_mission_creator":"Creatore di missioni","job_type_open_wheel_race":"Gara per ruote scoperte","job_type_parachuting":"Paracadutismo","job_type_pursuit_race":"Inseguimenti","job_type_race":"Gara","job_type_random_mission":"Missione casuale","job_type_special_race":"Gara con veicoli speciali","job_type_street_race":"Gara clandestina","job_type_stunt_race":"Gara stunt","job_type_survival":"Sopravvivenza","job_type_target":"Gara al bersaglio","job_type_team_deathmatch":"Deathmatch a squadre","job_type_team_king_of_the_hill":"Re della collina a squadre","job_type_transform_race":"Gara multiveicolo","job_type_unknown":"Sconosciuto","job_type_vehicle_deathmatch":"Deathmatch con veicoli","job_type_water_race":"Gara acquatica","lightbox_close_button":"Chiudi","login_dialog_body":"È necessario eseguire l’accesso prima di poter interagire con questo contenuto","login_dialog_signin_button":"Accedi","login_dialog_signup_button":"Registrati","login_dialog_title":"È necessario eseguire l’accesso","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details_amp":"Stai già usando questo indirizzo email per ricevere la newsletter. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Gestisci le tue preferenze di comunicazione in qualsiasi momento nelle impostazioni del tuo account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","share_copied_to_clipboard":"Link copiato con successo!","share_copy_to_clipboard":"Copia","share_heading":"Condividi","share_share_to_facebook":"Condividi su Facebook","share_share_to_reddit":"Condividi su Reddit","share_share_to_twitter":"Condividi su X","web_offer_claim_dialog_close":"chiudi","web_offer_claim_error_state_button":"Riprova","web_offer_claim_error_state_icon_label":"Icona Errore","web_offer_claim_exists_state_icon_label":"Icona di successo","web_offer_claim_link_account_state_icon_label":"Icona Errore","web_offer_claim_loading_state":"caricamento","web_offer_claim_success_state_icon_label":"Icona di successo"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","decorative_video_replay_button_label":"もう一回見る","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"ビデオ再生中","hp_hero_stop_button_label":"ビデオ停止中","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","image_marquee_cta_pause_label":"自動スクロール一時停止","image_marquee_cta_play_label":"自動スクロール再生","job_card_bookmark_action":"ブックマーク","job_card_created_by":"により作成","job_card_image_alt_text":"ジョブ{name}のスクリーンショット","job_card_report_action":"報告","job_card_share_action":"共有","job_card_updated_date":"{date}に更新","job_card_verified_by":"により認証","job_dialog_bookmarked_body":"ブックマークされたジョブを閲覧するには「GTAオンライン」を再起動する必要があります - ジョブは実際にプレイした後でなければ、ゲーム内で評価することはできません。","job_dialog_bookmarked_heading":"ブックマークされたジョブ: <b>{name}</b>","job_dialog_bookmarked_title":"ブックマークされたジョブ","job_dialog_confirmation_button":"OK","job_dialog_error_body":"ジョブをブックマーク/ブックマーク解除を試みた際にエラーが起こりました。もう一度お試しください","job_dialog_error_heading":"ジョブ: <b>{name}</b>","job_dialog_error_title":"エラー","job_dialog_unbookmarked_body":"ブックマークから解除たジョブを削除するには「GTAオンライン」を再起動する必要があります。","job_dialog_unbookmarked_heading":"ブックマークから解除されたジョブ: <b>{name}</b>","job_dialog_unbookmarked_title":"ブックマークから解除されたジョブ","job_type_adversary_mode":"敵対モード","job_type_air_race":"エアレース","job_type_arena_deathmatch":"アリーナデスマッチ","job_type_arena_war":"アリーナウォーズ","job_type_bike_race":"バイクレース","job_type_capture":"キャプチャー","job_type_contact_mission":"コンタクトのミッション","job_type_deathmatch":"デスマッチ","job_type_drag_race":"ドラッグレース","job_type_drift_race":"ドリフトレース","job_type_foot_race":"徒競走","job_type_hao_special_works_race":"ハオ・スペシャルワークスレース","job_type_heist":"強盗","job_type_heist_prep":"強盗調達","job_type_king_of_the_hill":"キングオブザヒル","job_type_land_race":"ランドレース","job_type_last_team_standing":"ラスト・チーム・アライブ","job_type_mission":"ミッション","job_type_mission_creator":"ミッションクリエイター","job_type_open_wheel_race":"オープンホイールレース","job_type_parachuting":"パラシューティング","job_type_pursuit_race":"追跡レース","job_type_race":"レース","job_type_random_mission":"ランダムなミッション","job_type_special_race":"特殊車両レース","job_type_street_race":"ストリートレース","job_type_stunt_race":"スタントレース","job_type_survival":"サバイバル","job_type_target":"ターゲットアサルトレース","job_type_team_deathmatch":"チームデスマッチ","job_type_team_king_of_the_hill":"チーム・キングオブザヒル","job_type_transform_race":"トランスフォームレース","job_type_unknown":"不明","job_type_vehicle_deathmatch":"マシンデスマッチ","job_type_water_race":"シーレース","lightbox_close_button":"閉じる","login_dialog_body":"このコンテンツを利用するには、サインインする必要があります","login_dialog_signin_button":"サインイン","login_dialog_signup_button":"サインアップ","login_dialog_title":"サインインが必要","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details_amp":"このメールアドレスで既にニュースレターアップデートを受け取っています。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。コミュニケーション設定はアカウント設定からいつでも管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します","share_copied_to_clipboard":"リンクのコピー完了！","share_copy_to_clipboard":"クリップボードにコピー","share_heading":"共有","share_share_to_facebook":"Facebookで共有","share_share_to_reddit":"Redditで共有","share_share_to_twitter":"Xで共有","web_offer_claim_dialog_close":"閉じる","web_offer_claim_error_state_button":"もう一度試す","web_offer_claim_error_state_icon_label":"エラーアイコン","web_offer_claim_exists_state_icon_label":"成功のアイコン","web_offer_claim_link_account_state_icon_label":"エラーアイコン","web_offer_claim_loading_state":"ロード中","web_offer_claim_success_state_icon_label":"成功のアイコン"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","decorative_video_replay_button_label":"다시 재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"비디오 재생 중","hp_hero_stop_button_label":"비디오 정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","image_marquee_cta_pause_label":"마키 일시정지","image_marquee_cta_play_label":"마키 재생","job_card_bookmark_action":"즐겨찾기","job_card_created_by":"생성됨","job_card_image_alt_text":"{name} 작업 스크린샷","job_card_report_action":"신고","job_card_share_action":"공유","job_card_updated_date":"{date} 업데이트됨","job_card_verified_by":"인증됨","job_dialog_bookmarked_body":"즐겨찾기에 등록한 작업을 보려면 Grand Theft Auto 온라인을 다시 시작해야 합니다 - 작업은 플레이한 후에만 게임 내에서 평가할 수 있습니다.","job_dialog_bookmarked_heading":"즐겨찾기에 등록한 작업: <b>{name}</b>","job_dialog_bookmarked_title":"즐겨찾기에 등록한 작업","job_dialog_confirmation_button":"확인","job_dialog_error_body":"작업 즐겨찾기 등록/해제 중 오류가 발생했습니다. 다시 시도하십시오","job_dialog_error_heading":"작업: <b>{name}</b>","job_dialog_error_title":"오류","job_dialog_unbookmarked_body":"즐겨찾기에서 이 작업을 표시하지 않으려면 Grand Theft Auto 온라인을 다시 시작해야 합니다.","job_dialog_unbookmarked_heading":"즐겨찾기 해제한 작업: <b>{name}</b>","job_dialog_unbookmarked_title":"즐겨찾기 해제한 작업","job_type_adversary_mode":"대적 모드","job_type_air_race":"항공 레이스","job_type_arena_deathmatch":"아레나 데스매치","job_type_arena_war":"아레나 워","job_type_bike_race":"바이크 레이스","job_type_capture":"점령","job_type_contact_mission":"연락책 임무","job_type_deathmatch":"데스매치","job_type_drag_race":"드래그 레이스","job_type_drift_race":"드리프트 레이스","job_type_foot_race":"도보 레이스","job_type_hao_special_works_race":"하오의 스페셜 웍스 레이스 ","job_type_heist":"습격","job_type_heist_prep":"습격 준비","job_type_king_of_the_hill":"킹 오브 더 힐","job_type_land_race":"지상 레이스","job_type_last_team_standing":"라스트 팀 스탠딩","job_type_mission":"임무","job_type_mission_creator":"임무 생성기","job_type_open_wheel_race":"오픈 휠 레이스","job_type_parachuting":"낙하산 강하","job_type_pursuit_race":"추격전 레이스","job_type_race":"레이스","job_type_random_mission":"무작위 임무","job_type_special_race":"특수 차량 레이스","job_type_street_race":"길거리 레이스","job_type_stunt_race":"스턴트 레이스","job_type_survival":"서바이벌","job_type_target":"타겟 어썰트 레이스","job_type_team_deathmatch":"팀 데스매치","job_type_team_king_of_the_hill":"팀 킹 오브 더 힐","job_type_transform_race":"변신 레이스","job_type_unknown":"알 수 없음","job_type_vehicle_deathmatch":"이동 수단 데스매치","job_type_water_race":"해상 레이스","lightbox_close_button":"닫기","login_dialog_body":"이 콘텐츠에 댓글을 남기거나 좋아요를 누르려면 먼저 로그인하십시오","login_dialog_signin_button":"로그인","login_dialog_signup_button":"가입","login_dialog_title":"로그인 필요","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details_amp":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details_amp":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 커뮤니케이션 선호 사항을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","share_copied_to_clipboard":"링크 복사 완료!","share_copy_to_clipboard":"클립보드로 복사","share_heading":"공유","share_share_to_facebook":"Facebook으로 공유","share_share_to_reddit":"Reddit으로 공유","share_share_to_twitter":"X로 공유","web_offer_claim_dialog_close":"닫기","web_offer_claim_error_state_button":"다시 시도하기","web_offer_claim_error_state_icon_label":"오류 아이콘","web_offer_claim_exists_state_icon_label":"성공 아이콘","web_offer_claim_link_account_state_icon_label":"오류 아이콘","web_offer_claim_loading_state":"불러오는 중","web_offer_claim_success_state_icon_label":"성공 아이콘"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","decorative_video_replay_button_label":"Odtwórz ponownie","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Teraz odtwarzane","hp_hero_stop_button_label":"Wideo zatrzymane","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","image_marquee_cta_pause_label":"Pasek przewijania Zatrzymaj","image_marquee_cta_play_label":"Pasek przewijania Odtwórz","job_card_bookmark_action":"Dodaj do zakładek","job_card_created_by":"Stworzone przez","job_card_image_alt_text":"Zrzut ekranu akcji {name}","job_card_report_action":"Zgłoś","job_card_share_action":"Udostępnij","job_card_updated_date":"Zaktualizowano {date}","job_card_verified_by":"Zweryfikowane przez","job_dialog_bookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby zobaczyć tę dodaną do ulubionych akcję. Akcje mogą być ocenione tylko i wyłącznie w grze po ich rozegraniu.","job_dialog_bookmarked_heading":"Akcja dodana do ulubionych: <b>{name}</b>","job_dialog_bookmarked_title":"Akcja dodana do ulubionych","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Wystąpił błąd podczas dodawania/usuwania tej akcji z sekcji ulubionych. Spróbuj ponownie.","job_dialog_error_heading":"Akcja: <b>{name}</b>","job_dialog_error_title":"Błąd","job_dialog_unbookmarked_body":"Musisz uruchomić ponownie Grand Theft Auto Online, aby akcja nie pojawiała się dłużej w sekcji ulubionych akcji.","job_dialog_unbookmarked_heading":"Akcja usunięta z ulubionych: <b>{name}</b>","job_dialog_unbookmarked_title":"Akcja usunięta z ulubionych","job_type_adversary_mode":"Tryb adwerszarza","job_type_air_race":"Wyścig powietrzny","job_type_arena_deathmatch":"Deathmatch na arenie","job_type_arena_war":"Arena wojny","job_type_bike_race":"Wyścig jednośladów","job_type_capture":"Zdobywanie","job_type_contact_mission":"Misja od kontaktów","job_type_deathmatch":"Deathmatch","job_type_drag_race":"Wyścig równoległy","job_type_drift_race":"Wyścig driftowe","job_type_foot_race":"Wyścig pieszy","job_type_hao_special_works_race":"Wyścigi Hao’s Special Works","job_type_heist":"Napad","job_type_heist_prep":"Misja w terenie","job_type_king_of_the_hill":"Król wzgórza","job_type_land_race":"Wyścig lądowy","job_type_last_team_standing":"Ostatnia drużyna wygrywa","job_type_mission":"Misja","job_type_mission_creator":"Kreator misji","job_type_open_wheel_race":"Wyścig bolidów","job_type_parachuting":"Skoki spadochronowe","job_type_pursuit_race":"Pościg","job_type_race":"Wyścig","job_type_random_mission":"Losowa misja","job_type_special_race":"Wyścig pojazdów specjalnych","job_type_street_race":"Wyścig uliczny","job_type_stunt_race":"Wyścig kaskaderski","job_type_survival":"Walka o przetrwanie","job_type_target":"Wyścig strzelecki","job_type_team_deathmatch":"Deathmatch drużynowy","job_type_team_king_of_the_hill":"Drużynowy Król wzgórza","job_type_transform_race":"Wyścig z transformacją","job_type_unknown":"Nieznane","job_type_vehicle_deathmatch":"Deathmatch w pojazdach","job_type_water_race":"Wyścig morski","lightbox_close_button":"Zamknij","login_dialog_body":"Zaloguj się, aby zapoznać się z zawartością.","login_dialog_signin_button":"Zaloguj się","login_dialog_signup_button":"Zarejestruj się","login_dialog_title":"Wymagane zalogowanie się","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details_amp":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","share_copied_to_clipboard":"Link został skopiowany!","share_copy_to_clipboard":"Skopiuj do schowka","share_heading":"Udostępnij","share_share_to_facebook":"Udostępnij na Facebooku","share_share_to_reddit":"Udostępnij na Reddit","share_share_to_twitter":"Udostępnij na X","web_offer_claim_dialog_close":"Zamknij","web_offer_claim_error_state_button":"Spróbuj ponownie","web_offer_claim_error_state_icon_label":"Ikona błędu","web_offer_claim_exists_state_icon_label":"Ikona sukcesu","web_offer_claim_link_account_state_icon_label":"Ikona błędu","web_offer_claim_loading_state":"Ładowanie","web_offer_claim_success_state_icon_label":"Ikona sukcesu"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","decorative_video_replay_button_label":"Replay","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Vídeo em reprodução","hp_hero_stop_button_label":"Vídeo parado","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","image_marquee_cta_pause_label":"Pausar marquee","image_marquee_cta_play_label":"Iniciar marquee","job_card_bookmark_action":"Adicionar aos Favoritos","job_card_created_by":"Criado por","job_card_image_alt_text":"Captura de tela do Serviço {name}","job_card_report_action":"Denunciar","job_card_share_action":"Compartilhar","job_card_updated_date":"Atualização {date}","job_card_verified_by":"Verificado por","job_dialog_bookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para ver este serviço como um de seus Favoritos. Serviços só podem ser avaliados no jogo, após terem sido jogados.","job_dialog_bookmarked_heading":"Serviço adicionado aos Favoritos: <b>{name}</b>","job_dialog_bookmarked_title":"Serviço adicionado aos Favoritos","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Houve um erro ao tentar adicionar/remover esse serviço aos Favoritos. Tente novamente.","job_dialog_error_heading":"Serviço: <b>{name}</b>","job_dialog_error_title":"Erro","job_dialog_unbookmarked_body":"Será preciso reiniciar Grand Theft Auto Online para não ver mais este serviço como um de seus Favoritos.","job_dialog_unbookmarked_heading":"Serviço removido dos Favoritos: <b>{name}</b>","job_dialog_unbookmarked_title":"Serviço removido dos Favoritos","job_type_adversary_mode":"Modo Adversário","job_type_air_race":"Corrida Aérea","job_type_arena_deathmatch":"Mata-mata da Arena","job_type_arena_war":"Arena de Guerra","job_type_bike_race":"Corrida sobre duas rodas","job_type_capture":"Captura","job_type_contact_mission":"Missão de Contato","job_type_deathmatch":"Mata-mata","job_type_drag_race":"Corrida de Arrancada","job_type_drift_race":"Corrida de Drift","job_type_foot_race":"Corrida a pé","job_type_hao_special_works_race":"Corrida da Hao\'s Special Works","job_type_heist":"Golpe","job_type_heist_prep":"Preliminar do Golpe","job_type_king_of_the_hill":"Marcando Território","job_type_land_race":"Corrida Terrestre","job_type_last_team_standing":"Última Equipe Sobrevivente","job_type_mission":"Missão","job_type_mission_creator":"Criador de Missões","job_type_open_wheel_race":"Corrida de Roda Exposta","job_type_parachuting":"Paraquedismo","job_type_pursuit_race":"Corrida de Perseguição","job_type_race":"Corrida","job_type_random_mission":"Missão aleatória","job_type_special_race":"Corrida de Veículo Especial","job_type_street_race":"Corrida de Rua","job_type_stunt_race":"Corrida Acrobática","job_type_survival":"Sobrevivência","job_type_target":"Corrida de Assalto com Alvos","job_type_team_deathmatch":"Mata-mata em Equipe","job_type_team_king_of_the_hill":"Marcando Território em Equipe","job_type_transform_race":"Corrida Metamorfose","job_type_unknown":"Desconhecido","job_type_vehicle_deathmatch":"Mata-mata em Veículos","job_type_water_race":"Corrida Marítima","lightbox_close_button":"Fechar","login_dialog_body":"É necessário iniciar sessão para interagir com esse conteúdo","login_dialog_signin_button":"Iniciar sessão","login_dialog_signup_button":"Criar conta","login_dialog_title":"É necessário iniciar sessão","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details_amp":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de comunicação a qualquer momento nas configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição","share_copied_to_clipboard":"Link copiado!","share_copy_to_clipboard":"Copiar para a área de transferência","share_heading":"Compartilhar","share_share_to_facebook":"Compartilhar com Facebook","share_share_to_reddit":"Compartilhar com Reddit","share_share_to_twitter":"Compartilhar com X","web_offer_claim_dialog_close":"fechar","web_offer_claim_error_state_button":"Tentar novamente","web_offer_claim_error_state_icon_label":"Ícone de erro","web_offer_claim_exists_state_icon_label":"Ícone de êxito","web_offer_claim_link_account_state_icon_label":"Ícone de erro","web_offer_claim_loading_state":"carregando","web_offer_claim_success_state_icon_label":"Ícone de êxito"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","decorative_video_replay_button_label":"Повтор","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизведение видео","hp_hero_stop_button_label":"Видео остановлено","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total}","image_marquee_cta_pause_label":"Бегущая строка: пауза","image_marquee_cta_play_label":"Бегущая строка: воспроизвести","job_card_bookmark_action":"Отметить","job_card_created_by":"Создан","job_card_image_alt_text":"Снимок экрана дела {name}","job_card_report_action":"Пожаловаться","job_card_share_action":"Поделиться","job_card_updated_date":"Обновлен {date}","job_card_verified_by":"Проверен","job_dialog_bookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы увидеть добавленное в закладки дело. Оценивать дела можно только в игре после прохождения.","job_dialog_bookmarked_heading":"Дело добавлено в закладки: <b>{name}</b>","job_dialog_bookmarked_title":"Дело добавлено в закладки","job_dialog_confirmation_button":"OK","job_dialog_error_body":"Произошла ошибка при попытке добавить дело в закладки или удалить его из закладок. Пожалуйста, повторите попытку","job_dialog_error_heading":"Дело: <b>{name}</b>","job_dialog_error_title":"Ошибка","job_dialog_unbookmarked_body":"Перезапустите Grand Theft Auto Online, чтобы удалить это дело из закладок.","job_dialog_unbookmarked_heading":"Дело удалено из закладок: <b>{name}</b>","job_dialog_unbookmarked_title":"Дело удалено из закладок","job_type_adversary_mode":"Режим противоборства","job_type_air_race":"Гонка по воздуху","job_type_arena_deathmatch":"Перестрелка на арене","job_type_arena_war":"Битва на арене","job_type_bike_race":"Велогонка","job_type_capture":"Захват","job_type_contact_mission":"Задание знакомого","job_type_deathmatch":"Перестрелка","job_type_drag_race":"Драг-гонка","job_type_drift_race":"Дрифтовая гонка","job_type_foot_race":"Пешая гонка","job_type_hao_special_works_race":"Гонка Hao’s Special Works","job_type_heist":"Ограбление","job_type_heist_prep":"Подготовка к ограблению","job_type_king_of_the_hill":"Король горы","job_type_land_race":"Гонка по суше","job_type_last_team_standing":"«Команда уцелевших»","job_type_mission":"Задание","job_type_mission_creator":"Редактор заданий","job_type_open_wheel_race":"Гонки на болидах","job_type_parachuting":"Парашютизм","job_type_pursuit_race":"Гонка «Погоня»","job_type_race":"Гонка","job_type_random_mission":"Случайная миссия","job_type_special_race":"Гонка для особого транспорта","job_type_street_race":"Уличная гонка","job_type_stunt_race":"Каскадерская гонка","job_type_survival":"Выживание","job_type_target":"Гонка с мишенями","job_type_team_deathmatch":"Командная перестрелка","job_type_team_king_of_the_hill":"Команда «Король горы»","job_type_transform_race":"Гонка «Трансформации»","job_type_unknown":"Неизвестно","job_type_vehicle_deathmatch":"Перестрелка на транспорте","job_type_water_race":"Морская гонка","lightbox_close_button":"Закрыть","login_dialog_body":"Выполните вход, чтобы взаимодействовать с этим контентом.","login_dialog_signin_button":"Войти","login_dialog_signup_button":"Регистрация","login_dialog_title":"Необходимо выполнить вход","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details_amp":"Вы уже получаете письма по рассылке на этот адрес электронной почты. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. ы можете изменить настройки обратной связи в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","share_copied_to_clipboard":"Ссылка скопирована успешно!","share_copy_to_clipboard":"Скопировать","share_heading":"Поделиться","share_share_to_facebook":"Поделиться на Facebook","share_share_to_reddit":"Поделиться на Reddit","share_share_to_twitter":"Поделиться на X","web_offer_claim_dialog_close":"закрыть","web_offer_claim_error_state_button":"Попробовать снова","web_offer_claim_error_state_icon_label":"Значок ошибки","web_offer_claim_exists_state_icon_label":"Значок «Успех»","web_offer_claim_link_account_state_icon_label":"Значок ошибки","web_offer_claim_loading_state":"загрузка","web_offer_claim_success_state_icon_label":"Значок «Успех»"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"回放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"视频播放中","hp_hero_stop_button_label":"视频已停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","image_marquee_cta_pause_label":"滚动暂停","image_marquee_cta_play_label":"滚动开启","job_card_bookmark_action":"收藏","job_card_created_by":"制作者","job_card_image_alt_text":"{name}差事的截图","job_card_report_action":"举报","job_card_share_action":"分享","job_card_updated_date":"更新于{date}","job_card_verified_by":"认证者","job_dialog_bookmarked_body":"您需要重新启动Grand Theft Auto在线模式来查看这项已收藏的差事。只有在游玩了差事后才能在游戏内对它们进行评价。","job_dialog_bookmarked_heading":"已收藏差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏差事","job_dialog_confirmation_button":"确定","job_dialog_error_body":"收藏/取消收藏此差事时出现了一个错误。请稍候再试","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"错误","job_dialog_unbookmarked_body":"需要您重新启动Grand Theft Auto在线模式后，这项差事才会从您的收藏中消失。","job_dialog_unbookmarked_heading":"已取消收藏差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏差事","job_type_adversary_mode":"对抗模式","job_type_air_race":"空中竞速","job_type_arena_deathmatch":"竞技场死斗","job_type_arena_war":"竞技场之战","job_type_bike_race":"两轮车竞速","job_type_capture":"夺取","job_type_contact_mission":"联系人任务","job_type_deathmatch":"死斗游戏","job_type_drag_race":"直线竞速","job_type_drift_race":"漂移竞速","job_type_foot_race":"徒步竞速","job_type_hao_special_works_race":"阿浩特别工坊竞速","job_type_heist":"抢劫任务","job_type_heist_prep":"抢劫前置任务","job_type_king_of_the_hill":"占山为王","job_type_land_race":"陆地竞速","job_type_last_team_standing":"团队生存游戏","job_type_mission":"任务","job_type_mission_creator":"任务制作器","job_type_open_wheel_race":"开轮式竞速","job_type_parachuting":"跳伞","job_type_pursuit_race":"追逐竞速","job_type_race":"竞速","job_type_random_mission":"随机任务","job_type_special_race":"特殊载具竞速","job_type_street_race":"街头竞速","job_type_stunt_race":"特技竞速","job_type_survival":"生存战","job_type_target":"标靶射击竞速","job_type_team_deathmatch":"团队死斗游戏","job_type_team_king_of_the_hill":"团队占山为王","job_type_transform_race":"幻变竞速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"载具死斗游戏","job_type_water_race":"水上竞速","lightbox_close_button":"关闭","login_dialog_body":"您需要先登录才能与该内容进行互动","login_dialog_signin_button":"登录","login_dialog_signup_button":"注册","login_dialog_title":"需要登录","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details_amp":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置中随时管理您的通信偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"确定","ns_successfully_subscribed_details_amp":"您现已订阅Rockstar Games邮件通知，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置中随时管理您的通信偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","share_copied_to_clipboard":"链接复制成功！","share_copy_to_clipboard":"复制到剪贴板","share_heading":"分享","share_share_to_facebook":"分享至Facebook","share_share_to_reddit":"分享至Reddit","share_share_to_twitter":"分享至X","web_offer_claim_dialog_close":"关闭","web_offer_claim_error_state_button":"再次尝试","web_offer_claim_error_state_icon_label":"错误图标","web_offer_claim_exists_state_icon_label":"成功图标","web_offer_claim_link_account_state_icon_label":"错误图标","web_offer_claim_loading_state":"正在加载","web_offer_claim_success_state_icon_label":"成功图标"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","decorative_video_replay_button_label":"重播","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"正播放影片","hp_hero_stop_button_label":"影片已停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","image_marquee_cta_pause_label":"跑馬燈暫停","image_marquee_cta_play_label":"跑馬燈播放","job_card_bookmark_action":"收藏","job_card_created_by":"創作者：","job_card_image_alt_text":"「{name}」差事的擷圖","job_card_report_action":"檢舉","job_card_share_action":"分享","job_card_updated_date":"更新於 {date}","job_card_verified_by":"驗證者：","job_dialog_bookmarked_body":"您需要重啟 GTA 線上模式才能看見此已收藏的差事。您需要完成該差事，才能在遊戲內對其評價。","job_dialog_bookmarked_heading":"已收藏的差事：<b>{name}</b>","job_dialog_bookmarked_title":"已收藏的差事","job_dialog_confirmation_button":"確定","job_dialog_error_body":"解決這個請求時出現錯誤。請再試一次。","job_dialog_error_heading":"差事：<b>{name}</b>","job_dialog_error_title":"錯誤","job_dialog_unbookmarked_body":"您需要重啟 GTA 線上模式才不會再在收藏中看見此差事。","job_dialog_unbookmarked_heading":"已取消收藏的差事：<b>{name}</b>","job_dialog_unbookmarked_title":"已取消收藏的差事","job_type_adversary_mode":"競爭模式","job_type_air_race":"空中競速","job_type_arena_deathmatch":"鬥技場死鬥遊戲","job_type_arena_war":"決戰鬥技場","job_type_bike_race":"雙輪車競速","job_type_capture":"奪取","job_type_contact_mission":"聯絡人任務","job_type_deathmatch":"死鬥遊戲","job_type_drag_race":"直線競速","job_type_drift_race":"甩尾競速","job_type_foot_race":"賽跑","job_type_hao_special_works_race":"阿浩特製改裝競速","job_type_heist":"搶劫任務","job_type_heist_prep":"搶劫前置任務","job_type_king_of_the_hill":"山頭之王","job_type_land_race":"陸上競速","job_type_last_team_standing":"團隊生存遊戲","job_type_mission":"任務","job_type_mission_creator":"任務製作器","job_type_open_wheel_race":"開輪式競速","job_type_parachuting":"跳傘活動","job_type_pursuit_race":"追緝競速","job_type_race":"競速","job_type_random_mission":"隨機任務","job_type_special_race":"特殊載具競速","job_type_street_race":"街頭競速","job_type_stunt_race":"特技競速","job_type_survival":"生存戰","job_type_target":"射靶競速","job_type_team_deathmatch":"團隊死鬥遊戲","job_type_team_king_of_the_hill":"團隊山頭之王","job_type_transform_race":"變形狂飆競速","job_type_unknown":"未知","job_type_vehicle_deathmatch":"載具死鬥遊戲","job_type_water_race":"水上競速","lightbox_close_button":"關閉","login_dialog_body":"您需要先登入才能進行操作","login_dialog_signin_button":"登入","login_dialog_signup_button":"註冊","login_dialog_title":"必須登入","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details_amp":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details_amp":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定隨時管理您的聯絡偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱","share_copied_to_clipboard":"連結已成功複製！","share_copy_to_clipboard":"複製至剪貼簿","share_heading":"分享","share_share_to_facebook":"分享至 Facebook","share_share_to_reddit":"分享至 Reddit","share_share_to_twitter":"分享至 X","web_offer_claim_dialog_close":"關閉","web_offer_claim_error_state_button":"再試一次","web_offer_claim_error_state_icon_label":"錯誤圖示","web_offer_claim_exists_state_icon_label":"成功圖示","web_offer_claim_link_account_state_icon_label":"錯誤圖示","web_offer_claim_loading_state":"正在載入","web_offer_claim_success_state_icon_label":"成功圖示"}}'),
        pi = e => (0, G.withIntl)(e, bi);
      var fi = t(86361),
        hi = t(39628);
      const ki = (0, b.createContext)(null),
        vi = (0, b.forwardRef)(function({
          jumpLinkId: e,
          currentStep: a = "unclaimed",
          testId: t = "web-offer-claim-root",
          asChild: s,
          ...r
        }, i) {
          const n = s ? fi.DX : "div",
            o = (0, hi.mergeProps)({
              "data-testid": t,
              className: "bfo5lc0"
            }, r);
          return (0, g.jsx)(ki.Provider, {
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
        yi = (0, b.forwardRef)(function({
          stepIndex: e,
          asChild: a,
          ...t
        }, s) {
          const r = (() => {
              const {
                currentStep: e
              } = (() => {
                const e = (0, b.useContext)(ki);
                if (!e) throw new Error("Warning, must use inside a WebOfferClaim.Root provider");
                return e
              })();
              return e
            })(),
            i = a ? fi.DX : "div",
            n = (0, hi.mergeProps)({
              className: "bfo5lc1"
            }, t);
          return r === e ? (0, g.jsx)(i, {
            ref: s,
            ...n
          }) : null
        }),
        ji = (0, b.forwardRef)(function({
          view: e = "default",
          ...a
        }, t) {
          const s = (0, hi.mergeProps)({
            className: "bfo5lc2"
          }, a);
          return "dialog" === e ? (0, g.jsx)(gi.Dialog.Trigger, {
            asChild: !0,
            children: (0, g.jsx)(gi.Button, {
              ref: t,
              ...s
            })
          }) : (0, g.jsx)(gi.Button, {
            ref: t,
            ...s
          })
        });
      const xi = () => {
          const {
            view: e
          } = wi();
          return e
        },
        wi = () => {
          const e = (0, b.useContext)(Yi);
          if (!e) throw new Error("Warning, must use inside a WebOfferClaim.Root provider");
          return e
        };
      var Ni = t(71554),
        Si = (0, Ni.c)({
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
        Ci = (0, Ni.c)({
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
        Ti = (0, Ni.c)({
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
      const Ei = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg",
        Ii = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
        Ai = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg",
        Mi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
        Pi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
        Li = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg",
        zi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
        Ri = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
        Di = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg",
        Bi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg",
        Gi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
        Oi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg",
        $i = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg",
        Fi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
        Vi = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg";
      var Hi = "var(--_1htcsun5)",
        qi = "var(--_1htcsun4)",
        Wi = (0, Ni.c)({
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
        Ui = "var(--_1htcsun3)",
        Ki = t(57030);
      const Xi = (0, b.forwardRef)(function({
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
          children: i,
          ...n
        }, o) {
          const c = s.map(e => `${e.color}${e.position?` calc(${e.position} * var(--_1htcsun0))`:""}`).join(", "),
            l = s.map(e => `${e.color}${e.position?` calc(${e.position} * var(--_1htcsun1))`:""}`).join(", "),
            d = "vertical" === e ? "to bottom" : "to right",
            m = "vertical" === e ? "to top" : "to left",
            _ = (0, Ki.DI)({
              [Ui]: a ? `linear-gradient(${d}, ${c})` : "linear-gradient(black 0%)",
              [qi]: t ? `linear-gradient(${m}, ${l})` : "linear-gradient(black 0%)",
              [Hi]: "vertical" === e ? "y" : "x"
            }),
            u = (0, hi.mergeProps)({
              className: Wi({
                orientation: e
              })
            }, n),
            b = {
              ...r,
              ..._
            };
          return (0, g.jsxs)(gi.ScrollArea.Root, {
            ...u,
            ref: o,
            style: b,
            children: [(0, g.jsx)(gi.ScrollArea.Viewport, {
              className: "_1htcsun9",
              children: i
            }), (0, g.jsx)(gi.ScrollArea.Scrollbar, {
              orientation: e,
              children: (0, g.jsx)(gi.ScrollArea.Thumb, {})
            }), (0, g.jsx)(gi.ScrollArea.Corner, {})]
          })
        }),
        Yi = (0, b.createContext)({
          view: "default"
        }),
        Zi = (0, b.forwardRef)(function({
          asChild: e,
          testId: a = "web-offer-claim-root",
          view: t = "default",
          ...s
        }, r) {
          const i = e ? fi.DX : "div",
            n = (0, hi.mergeProps)({
              "data-testid": a,
              className: Ti({
                view: t
              })
            }, s);
          return (0, g.jsx)(Yi.Provider, {
            value: {
              view: t
            },
            children: (0, g.jsx)(i, {
              ref: r,
              ...n
            })
          })
        }),
        Ji = (0, b.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = xi(),
            r = e ? fi.DX : "div",
            i = (0, hi.mergeProps)({
              className: Si({
                view: s
              })
            }, a);
          return (0, g.jsx)(r, {
            ref: t,
            ...i
          })
        }),
        Qi = (0, b.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = e ? fi.DX : "header",
            r = (0, hi.mergeProps)({}, a);
          return (0, g.jsx)(s, {
            ref: t,
            ...r
          })
        }),
        en = (0, b.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = e ? fi.DX : "footer",
            r = (0, hi.mergeProps)({
              className: "_1vpanocd"
            }, a);
          return (0, g.jsx)(s, {
            ref: t,
            ...r
          })
        }),
        an = (0, b.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = xi(),
            r = e ? fi.DX : "div",
            i = (0, hi.mergeProps)({
              className: "_1vpanoc8"
            }, a);
          return "dialog" === s ? (0, g.jsx)(gi.Dialog.Description, {
            ref: t,
            asChild: !0,
            children: (0, g.jsx)(r, {
              ...i
            })
          }) : (0, g.jsx)(Xi, {
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
            children: (0, g.jsx)(r, {
              ref: t,
              ...i
            })
          })
        }),
        tn = (0, b.forwardRef)(function({
          alt: e,
          src: {
            mobile: a,
            desktop: t
          },
          ...s
        }, r) {
          const i = xi(),
            n = (0, hi.mergeProps)({
              className: "_1vpanoc3"
            }, s);
          return "dialog" !== i && (0, g.jsxs)("picture", {
            ref: r,
            ...n,
            children: [(0, g.jsx)("source", {
              media: "(max-width: 1279.98px)",
              srcSet: a
            }), (0, g.jsx)("source", {
              media: "(min-width: 1280px)",
              srcSet: t
            }), (0, g.jsx)("img", {
              src: t,
              className: "_1vpanoc4",
              alt: e
            })]
          })
        }),
        sn = (0, b.forwardRef)(function({
          children: e,
          appearance: a = "secondary",
          ...t
        }, s) {
          const r = (0, hi.mergeProps)({
            appearance: a,
            testId: "woc.step.badge",
            className: "_1vpanocb"
          }, t);
          return (0, g.jsx)(gi.Badge.Root, {
            ref: s,
            ...r,
            asChild: !0,
            children: (0, g.jsx)(gi.Badge.Label, {
              children: e
            })
          })
        }),
        rn = (0, b.forwardRef)(function({
          asChild: e,
          ...a
        }, t) {
          const s = e ? fi.DX : "div",
            r = (0, hi.mergeProps)({
              className: "_1vpanoca"
            }, a);
          return (0, g.jsx)(s, {
            ref: t,
            ...r
          })
        }),
        nn = (0, b.forwardRef)(function({
          ...e
        }, a) {
          const t = xi(),
            s = (0, hi.mergeProps)({
              className: "_1vpanoc9"
            }, e);
          return "dialog" === t ? (0, g.jsx)(gi.Dialog.Title, {
            asChild: !0,
            children: (0, g.jsx)(gi.Heading, {
              ref: a,
              ...s
            })
          }) : (0, g.jsx)(gi.Heading, {
            ref: a,
            ...s
          })
        }),
        on = (0, b.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, hi.mergeProps)({
            testId: "woc.step.description",
            className: "_1vpanocc"
          }, e);
          return (0, g.jsx)(gi.Body, {
            ref: a,
            ...t
          })
        }),
        cn = (0, b.forwardRef)(function({
          ...e
        }, a) {
          const t = (0, hi.mergeProps)({
            testId: "woc.step.disclaimer",
            className: "_1vpanoce"
          }, e);
          return (0, g.jsx)(gi.Body, {
            ref: a,
            ...t,
            size: "XS",
            color: "subdued"
          })
        }),
        ln = (0, b.forwardRef)(function({
          size: e = "LG",
          ...a
        }, t) {
          return (0, g.jsx)(gi.Button, {
            ref: t,
            ...a,
            size: e
          })
        }),
        dn = ({
          label: e,
          platform: a,
          ...t
        }) => {
          const s = (0, hi.mergeProps)({
            className: Ci({
              platform: a
            })
          }, t);
          return (0, g.jsx)(gi.Button, {
            ...s,
            appearance: "secondary",
            size: "LG",
            children: (0, g.jsx)("img", {
              src: c[a],
              alt: e
            })
          })
        },
        mn = ({
          ...e
        }) => (0, g.jsx)(dn, {
          ...e,
          label: (0, f.findPlatform)("xbox")?.friendlyName ?? "Xbox",
          platform: "xbox"
        }),
        _n = ({
          ...e
        }) => (0, g.jsx)(dn, {
          ...e,
          label: (0, f.findPlatform)("ps")?.friendlyName ?? "PlayStation",
          platform: "ps"
        }),
        un = ({
          label: e
        }) => (0, g.jsx)("div", {
          className: "_1vpanocv",
          children: (0, g.jsx)(gi.Spinner, {
            size: "pageXL",
            label: e
          })
        }),
        gn = Object.assign(yi, l),
        bn = "claimOffer",
        pn = (0, b.createContext)(null),
        fn = () => {
          const e = (0, b.useContext)(pn);
          if (!e) throw new Error("useClaimContext must be used within a ClaimContext.Provider");
          return e
        },
        hn = ({
          giftId: e,
          location: a,
          jumpLinkId: t,
          returnUrl: s,
          steps: r,
          variant: i,
          RichTextComponent: n
        }) => ({
          giftId: e,
          location: a,
          returnUrl: s,
          jumpLinkId: t,
          variant: i,
          steps: r,
          RichTextComponent: n,
          loading: !1,
          status: "IDLE",
          currentStep: "unclaimed",
          dialogOpen: !1
        }),
        kn = (e, a) => {
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
                ...e, ...hn({
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
        vn = () => {
          const {
            state: e,
            dispatch: a
          } = fn(), {
            charactersNeeded: t,
            setCharactersNeeded: s
          } = (0, h.useRockstarUserState)(), {
            track: r
          } = (0, h.useGtmTrack)(), {
            loggedIn: i,
            data: n
          } = (0, h.useRockstarUser)(), {
            signInUrl: o
          } = (0, f.useScAuthLinks)(e.returnUrl), {
            redirect: c
          } = (() => {
            const e = (0, p.useNavigate)();
            return {
              redirect: (0, b.useCallback)((a, t = {}) => {
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
            trackSectionImpression: m
          } = (() => {
            const e = (0, b.useRef)(!1),
              a = (0, b.useRef)(!1),
              {
                track: t
              } = (0, h.useGtmTrack)(),
              {
                ref: s
              } = (0, D.useInView)({
                threshold: .6,
                triggerOnce: !0,
                onChange: a => {
                  e.current = a
                }
              }),
              r = (0, b.useCallback)(s => {
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
          })(), [_] = (0, p.useSearchParams)(), u = _.has(bn, e.giftId), g = "stateful" === e.variant || "stateful-trigger" === e.variant, k = (() => {
            const {
              state: e,
              dispatch: a
            } = fn(), {
              fetch: t
            } = (s = e.giftId, (0, f.useScApi)("marketing/engagement/claim/exists", {
              autoFetch: !1,
              requireBearerToken: !0,
              useCache: !1,
              query: {
                giftUId: s
              }
            }));
            var s;
            return (0, b.useCallback)(async () => {
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
            } = fn(), [t] = (0, p.useSearchParams)(), s = {
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
              } = (0, f.useScApi)("marketing/engagement/claim/create", {
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
          return (0, b.useEffect)(() => {
            if ("IDLE" === e.status && i && g) k();
            else if (u && "IDLE" === e.status) a({
              type: "TRIGGER_CLAIM"
            });
            else if ("TRIGGERED" !== e.status || i || (r({
                element_placement: "WOC",
                event: "cta_claim",
                link_url: o,
                text: e.steps.unclaimed["button-label"] ?? "claim now",
                section_state: e.variant
              }), a({
                type: "LOGIN"
              }), c(o)), i && (u && ("TRIGGERED" === e.status || "UNCLAIMED" === e.status) || !g && "TRIGGERED" === e.status)) t && n.accountSynced || n.characters ? a({
              type: "USER_SYNCED"
            }) : (s("gtao"), a({
              type: "FETCH_CHARACTERS"
            }));
            else if ("FETCHING_CHARACTERS" === e.status && n.accountSynced) a({
              type: "USER_SYNCED"
            });
            else if ("USER_SYNCED" !== e.status) {
              if ("CLAIMABLE" !== e.status) return "ERROR" === e.status ? (r({
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
              }), r({
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
            } else n && n.characters && n.characters.gtao.length > 0 ? a({
              type: "START_CLAIM"
            }) : a({
              type: "LINK_ACCOUNT"
            })
          }, [i, u, n, e.status]), (0, b.useEffect)(() => {
            m({
              element_placement: "WOC",
              section_state: `${e.variant}|${e.status}`
            })
          }, [d, e.variant, e.status, m]), {
            ref: l
          }
        };
      var yn = t(20357);
      const jn = (0, G.defineMessages)({
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
        xn = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, G.useIntl)(), {
            state: t,
            dispatch: s
          } = fn(), r = (0, b.useCallback)(() => {
            s({
              type: "TRIGGER_CLAIM",
              payload: {
                status: "CLAIMABLE"
              }
            })
          }, [s]), {
            RichTextComponent: i
          } = t, {
            image: n,
            heading: o,
            description: c,
            disclaimer: l
          } = t.steps.error, d = (0, f.isEmptyMarkup)(l ?? ""), m = t.steps.unclaimed.disclaimer, _ = t.steps.unclaimed.image, {
            alt: u,
            src: p
          } = (0, I.useImageParser)(n ?? _ ?? {});
          return (0, g.jsxs)(gn.Root, {
            view: e,
            children: [(0, g.jsx)(gn.Image, {
              alt: u ?? "",
              src: p ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, g.jsxs)(gn.Container, {
              children: [(0, g.jsxs)(gn.Content, {
                children: [(0, g.jsx)(yn.TriangleAlert, {
                  size: "XL",
                  color: Ki.LU.alias.color.icon.danger,
                  label: a(jn.web_offer_claim_error_state_icon_label)
                }), (0, g.jsx)(gn.Heading, {
                  level: 4,
                  children: o
                }), c && (0, g.jsx)(gn.Description, {
                  children: i({
                    children: c
                  })
                })]
              }), (0, g.jsxs)(gn.Footer, {
                children: [(0, g.jsx)(gn.Actions, {
                  children: (0, g.jsx)(gn.Button, {
                    appearance: "primary",
                    onClick: r,
                    children: a(jn.web_offer_claim_error_state_button)
                  })
                }), "stateful" === t.variant && (l || m) && (0, g.jsx)(gn.Disclaimer, {
                  children: i({
                    children: d ? m : l
                  })
                })]
              })]
            })]
          })
        };
      var wn = t(21152);
      const Nn = ({
          trackingHandler: e,
          href: a,
          label: t,
          target: s,
          ...r
        }) => (0, g.jsx)(gn.Button, {
          ...r,
          onClick: () => {
            e && e({
              label: t,
              href: a
            })
          },
          asChild: !0,
          "data-testid": "success-link",
          children: (0, g.jsx)("a", {
            href: a,
            target: s,
            children: t
          })
        }),
        Sn = ({
          platformConfigs: e,
          ...a
        }) => {
          const {
            data: t
          } = (0, h.useRockstarUser)(), {
            charactersNeeded: s,
            setCharactersNeeded: r
          } = (0, h.useRockstarUserState)();
          s || r("gtao");
          const i = t.gamesPlayed?.gtav,
            n = !t.accountSynced,
            {
              label: o,
              href: c,
              target: l
            } = (0, b.useMemo)(() => {
              const a = e.default ?? {
                label: "",
                href: "",
                target: "_blank"
              };
              if (i) {
                const {
                  hasGtaPlus: s
                } = t, r = i.includes("pc") ? "pc" : i, n = s ? `gtaPlus-${r}` : r;
                return Object.hasOwn(e, n) ? e[n] : a
              }
              return a
            }, [i, t, e]);
          return (0, g.jsx)(Nn, {
            label: o,
            href: c,
            target: l,
            isLoading: n,
            ...a
          })
        },
        Cn = ["ps5", "xboxsx", "pcalt"],
        Tn = e => {
          const {
            data: a
          } = (0, h.useRockstarUser)(), {
            charactersNeeded: t,
            setCharactersNeeded: s
          } = (0, h.useRockstarUserState)();
          t || s("gtao");
          const r = a.gamesPlayed?.gtav,
            i = (0, b.useMemo)(() => !!r && Cn.includes(r), [r]),
            {
              hasGtaPlus: n
            } = a;
          return !n && i && (0, g.jsx)(Nn, {
            href: "https://www.rockstargames.com/gta-plus/join",
            target: "_self",
            ...e
          })
        },
        En = e => {
          const {
            track: a
          } = (0, h.useGtmTrack)(), {
            state: t
          } = fn();
          switch (e.type) {
            case "shark": {
              const {
                type: s,
                ...r
              } = e, i = ({
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
              }, n = (0, hi.mergeProps)({
                trackingHandler: i
              }, r);
              return (0, g.jsx)(Sn, {
                ...n
              })
            }
            case "gta-plus-subscribe": {
              const {
                type: s,
                ...r
              } = e, i = ({
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
              }, n = (0, hi.mergeProps)({
                trackingHandler: i
              }, r);
              return (0, g.jsx)(Tn, {
                ...n
              })
            }
            default: {
              const {
                type: s,
                ...r
              } = e, i = ({
                label: e
              }) => {
                a({
                  element_placement: "WOC",
                  event: "alert_update",
                  o_id: t.giftId,
                  text: e
                })
              }, n = (0, hi.mergeProps)({
                trackingHandler: i
              }, r);
              return (0, g.jsx)(Nn, {
                ...n
              })
            }
          }
        },
        In = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, G.useIntl)(), {
            state: t
          } = fn(), {
            RichTextComponent: s
          } = t, {
            image: r,
            heading: i,
            description: n,
            ctas: o,
            disclaimer: c
          } = t.steps[t.currentStep], l = t.steps.unclaimed.image, d = (0, f.isEmptyMarkup)(c ?? ""), m = t.steps.unclaimed.disclaimer, {
            alt: _,
            src: u
          } = (0, I.useImageParser)(r ?? l ?? {});
          return (0, g.jsxs)(gn.Root, {
            view: e,
            children: [(0, g.jsx)(gn.Image, {
              alt: _ ?? "",
              src: u ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, g.jsxs)(gn.Container, {
              children: [(0, g.jsxs)(gn.Content, {
                children: [(0, g.jsx)(yn.Check, {
                  size: "XL",
                  color: wn.LU.alias.color.icon.success,
                  label: a(jn.web_offer_claim_success_state_icon_label)
                }), (0, g.jsx)(gn.Heading, {
                  level: 4,
                  children: i
                }), n && (0, g.jsx)(gn.Description, {
                  children: s({
                    children: n
                  })
                })]
              }), (0, g.jsxs)(gn.Footer, {
                children: [o && o.length > 0 && (0, g.jsx)(gn.Actions, {
                  children: o.map((e, a) => (0, g.jsx)(En, {
                    ...e
                  }, a))
                }), "stateful" === t.variant && (c || m) && (0, g.jsx)(gn.Disclaimer, {
                  children: s({
                    children: d ? m : c
                  })
                })]
              })]
            })]
          })
        },
        An = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, G.useIntl)(), t = (0, f.useGetTpaLinkGenerator)(), {
            state: s
          } = fn(), {
            track: r
          } = (0, h.useGtmTrack)(), {
            RichTextComponent: i
          } = s, {
            image: n,
            heading: o,
            description: c,
            disclaimer: l
          } = s.steps["link-account"], d = (0, b.useCallback)(async e => {
            const a = (0, f.findPlatform)(e)?.onlineService;
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
          }, [t, r, s.returnUrl, s.giftId]), m = (0, b.useCallback)(() => {
            d("xbox")
          }, [d]), _ = (0, b.useCallback)(() => {
            d("ps")
          }, [d]), u = (0, f.isEmptyMarkup)(l ?? ""), p = s.steps.unclaimed.disclaimer, k = s.steps.unclaimed.image, {
            alt: v,
            src: y
          } = (0, I.useImageParser)(n ?? k ?? {});
          return (0, g.jsxs)(gn.Root, {
            view: e,
            children: [(0, g.jsx)(gn.Image, {
              alt: v ?? "",
              src: y ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, g.jsxs)(gn.Container, {
              children: [(0, g.jsxs)(gn.Content, {
                children: [(0, g.jsx)(yn.TriangleAlert, {
                  size: "XL",
                  color: Ki.LU.alias.color.icon.danger,
                  label: a(jn.web_offer_claim_link_account_state_icon_label)
                }), (0, g.jsx)(gn.Heading, {
                  level: 4,
                  children: o
                }), c && (0, g.jsx)(gn.Description, {
                  children: i({
                    children: c
                  })
                })]
              }), (0, g.jsxs)(gn.Footer, {
                children: [(0, g.jsxs)(gn.Actions, {
                  children: [(0, g.jsx)(gn.LinkXBoxButton, {
                    target: "_self",
                    onClick: m
                  }), (0, g.jsx)(gn.LinkPSButton, {
                    target: "_self",
                    onClick: _
                  })]
                }), "stateful" === s.variant && (l || p) && (0, g.jsx)(gn.Disclaimer, {
                  children: i({
                    children: u ? p : l
                  })
                })]
              })]
            })]
          })
        },
        Mn = ({
          view: e = "default"
        }) => {
          const {
            formatMessage: a
          } = (0, G.useIntl)(), {
            state: t
          } = fn(), {
            image: s
          } = t.steps.unclaimed, {
            alt: r,
            src: i
          } = (0, I.useImageParser)(s ?? {});
          return (0, g.jsxs)(gn.Root, {
            view: e,
            children: [(0, g.jsx)(gn.Image, {
              alt: r ?? "",
              src: i ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, g.jsxs)(gn.Container, {
              children: [(0, g.jsx)(gn.Header, {
                children: (0, g.jsx)(fi.s6, {
                  children: (0, g.jsx)(gn.Heading, {
                    level: 5,
                    children: a(jn.web_offer_claim_loading_state)
                  })
                })
              }), (0, g.jsx)(gn.Content, {
                children: (0, g.jsx)(gn.Description, {
                  asChild: !0,
                  children: (0, g.jsx)(gn.Loading, {
                    label: a(jn.web_offer_claim_loading_state)
                  })
                })
              })]
            })]
          })
        },
        Pn = ({
          label: e,
          ...a
        }) => {
          const {
            loggedIn: t
          } = (0, h.useRockstarUser)(), {
            state: s,
            dispatch: r
          } = fn(), [, i] = (0, p.useSearchParams)(), n = (0, b.useCallback)(() => {
            t && i(e => (e.set("claimOffer", s.giftId), e), {
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
          }, [r, t, i, s.giftId, s.jumpLinkId]), o = (0, hi.mergeProps)({
            appearance: a.appearance ?? "primary"
          }, a);
          return (0, g.jsx)(ji, {
            onPress: n,
            ...o,
            view: "stateful" !== s.variant ? "dialog" : "default",
            children: e
          })
        },
        Ln = ({
          view: e = "default"
        }) => {
          const {
            state: a
          } = fn(), {
            RichTextComponent: t
          } = a, {
            image: s,
            badge: r,
            heading: i,
            description: n,
            disclaimer: o
          } = a.steps.unclaimed, {
            alt: c,
            src: l
          } = (0, I.useImageParser)(s ?? {}), d = a.steps.unclaimed["button-label"];
          return (0, g.jsxs)(gn.Root, {
            view: e,
            children: [(0, g.jsx)(gn.Image, {
              alt: c ?? "",
              src: l ?? {
                mobile: "",
                desktop: ""
              }
            }), (0, g.jsxs)(gn.Container, {
              children: [(0, g.jsxs)(gn.Content, {
                children: [r && (0, g.jsx)(gn.Badge, {
                  children: r
                }), (0, g.jsx)(gn.Heading, {
                  level: 4,
                  children: i
                }), n && (0, g.jsx)(gn.Description, {
                  children: t({
                    children: n
                  })
                })]
              }), (0, g.jsxs)(gn.Footer, {
                children: [d && (0, g.jsx)(gn.Actions, {
                  children: (0, g.jsx)(Pn, {
                    appearance: "primary",
                    size: "LG",
                    label: d,
                    view: "stateful" !== a.variant ? "dialog" : "default"
                  })
                }), o && (0, g.jsx)(gn.Disclaimer, {
                  children: t({
                    children: o
                  })
                })]
              })]
            })]
          })
        },
        zn = () => {
          const {
            state: e
          } = fn(), {
            ref: a
          } = vn();
          return (0, g.jsx)(vi, {
            jumpLinkId: e.jumpLinkId,
            currentStep: e.currentStep,
            "data-exclude-legacy-typography-css": !0,
            ref: a,
            children: "stateful" === e.variant ? (0, g.jsx)(Rn, {}) : (0, g.jsx)(Dn, {})
          })
        },
        Rn = pi(() => (0, g.jsxs)(g.Fragment, {
          children: [(0, g.jsx)(gn, {
            stepIndex: "loading",
            children: (0, g.jsx)(Mn, {})
          }), (0, g.jsx)(gn, {
            stepIndex: "unclaimed",
            children: (0, g.jsx)(Ln, {})
          }), (0, g.jsx)(gn, {
            stepIndex: "success",
            children: (0, g.jsx)(In, {})
          }), (0, g.jsx)(gn, {
            stepIndex: "error",
            children: (0, g.jsx)(xn, {})
          }), (0, g.jsx)(gn, {
            stepIndex: "link-account",
            children: (0, g.jsx)(An, {})
          })]
        })),
        Dn = pi(() => {
          const {
            formatMessage: e
          } = (0, G.useIntl)(), {
            state: a
          } = fn(), {
            isOpen: t,
            setIsOpen: s
          } = (() => {
            const {
              state: e
            } = fn(), a = (() => {
              const [, e] = (0, p.useSearchParams)(), {
                dispatch: a
              } = fn();
              return (0, b.useCallback)(() => {
                e(e => (e.delete(bn), e), {
                  replace: !0
                }), a({
                  type: "RESET"
                })
              }, [a, e])
            })(), t = (0, b.useCallback)(e => {
              e || a()
            }, [a]);
            return {
              isOpen: e.dialogOpen,
              setIsOpen: t
            }
          })(), r = "dialog";
          return (0, g.jsxs)(gi.Dialog.Root, {
            isOpen: t,
            onOpenChange: s,
            children: ["static" === a.variant && (0, g.jsx)(Ln, {
              view: "default"
            }), (0, g.jsx)(gi.Dialog.Portal, {
              children: (0, g.jsx)(gi.Dialog.Overlay, {
                children: (0, g.jsxs)(gi.Dialog.Content, {
                  children: [(0, g.jsx)(gi.Dialog.CloseButton, {
                    label: e(jn.web_offer_claim_dialog_close),
                    onPress: () => s(!1)
                  }), (0, g.jsx)(gi.Dialog.ScrollArea, {
                    style: {
                      overflowY: "auto"
                    },
                    children: (0, g.jsxs)(gi.Dialog.Layout, {
                      children: [(0, g.jsx)(gn, {
                        stepIndex: "loading",
                        children: (0, g.jsx)(Mn, {
                          view: r
                        })
                      }), (0, g.jsx)(gn, {
                        stepIndex: "success",
                        children: (0, g.jsx)(In, {
                          view: r
                        })
                      }), (0, g.jsx)(gn, {
                        stepIndex: "error",
                        children: (0, g.jsx)(xn, {
                          view: r
                        })
                      }), (0, g.jsx)(gn, {
                        stepIndex: "link-account",
                        children: (0, g.jsx)(An, {
                          view: r
                        })
                      }), (0, g.jsx)(gn, {
                        stepIndex: "exists",
                        children: (0, g.jsx)(In, {
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
        Bn = (pi(zn), ({
          children: e
        }) => e ? "string" != typeof e ? (console.error("RichText expects to be a string"), null) : (0, g.jsx)(I.TinaRichText, {
          html: e
        }) : null),
        Gn = ({
          children: e,
          initialState: a
        }) => {
          const [t, s] = (0, b.useReducer)(kn, a);
          return (0, g.jsx)(pn.Provider, {
            value: {
              state: t,
              dispatch: s
            },
            children: e
          })
        },
        On = pi(({
          giftId: e,
          location: a,
          jumpLinkId: t,
          variant: s = "stateful",
          steps: r
        }) => {
          const i = `${document.location.pathname}${document.location.search}#${t}`,
            n = (0, I.usePrunedTinaKeys)(r),
            o = hn({
              giftId: e,
              location: a,
              returnUrl: i,
              jumpLinkId: t,
              steps: n,
              variant: s,
              RichTextComponent: Bn
            }),
            {
              hash: c
            } = (0, p.useLocation)();
          return (0, b.useLayoutEffect)(() => {
            const e = document.getElementById(t);
            e && c.includes(t) && e.scrollIntoView({
              behavior: "instant",
              block: "center"
            })
          }, []), (0, g.jsx)(Gn, {
            initialState: o,
            children: r && (0, g.jsx)(zn, {})
          })
        }),
        $n = {
          CalloutSection: _.A,
          Card: Aa,
          CardWithImageGallery: Ya,
          ConditionalBlock: j,
          CommunityChallenges: tr.default,
          CoverCard: et,
          Cta: x.A,
          FoundryButton: C,
          FoundryIconButton: T,
          DiscoveryCallout: mr,
          EventsDeck: Qs,
          PageTemplate: er.default,
          ExpandingPlatformButton: E.A,
          TextCard: Bs,
          Deck: Hs,
          Grid: M,
          Hero: ee,
          Highlights: qs.Highlights,
          HighlightsItem: qs.HighlightsItem,
          HTMLElement: ae,
          NewsletterSubscription: pe,
          OrderedList: ye,
          ParallaxInnerLayer: xe,
          ParallaxOuterLayer: Ne,
          ParallaxWrapper: Te,
          UnorderedList: Ee.A,
          ImageWithBadge: Ie.A,
          ImageTextGroupGroup: kt,
          Carousel: u.A,
          GroupOfItems: Oe.default,
          Rating: Le.A,
          gen9: o,
          TinaModuleFetchNRender: Be.A,
          TwitchDrops: sr.default,
          PromoModule: Pe,
          RockstarVideoPlayer: m(),
          Engagement: ar.default,
          WebOfferClaim: On
        },
        Fn = {
          CalloutSection: _.A,
          Card: Aa,
          CardWithImageGallery: Ya,
          ConditionalBlock: j,
          CoverCard: et,
          Carousel: u.A,
          ExpandingPlatformButton: E.A,
          Hero: ee,
          Grid: M,
          TextCard: Bs,
          Deck: Hs,
          GroupOfItems: Oe.default,
          ParallaxInnerLayer: xe,
          ParallaxOuterLayer: Ne,
          ParallaxWrapper: Te,
          PromoModule: Pe,
          Engagement: ar.default,
          WebOfferClaim: On,
          NewsletterSubscription: pe,
          gen9: {
            BuyNow: rr.A,
            Disclaimer: pt,
            FAQ: fr,
            Guide: kr,
            GuideGroup: yr,
            GuideIntro: Nr,
            GuideSection: Sr,
            Hero: ee,
            ImageTextGroupGroup: kt,
            LinkoutSection: Tr,
            TinaWrapper: Er.A,
            UserVote: () => null
          },
          HTMLElement: ae,
          OrderedList: ye,
          UnorderedList: Ee.A,
          ImageWithBadge: Ie.A,
          Rating: Le.A,
          TinaModuleFetchNRender: Be.A,
          UserVote: De
        }
    },
    65287(e, a, t) {
      const s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function r(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 65287
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

      function r(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 86751
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

      function r(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 39294
    },
    58963(e, a, t) {
      const s = {
        "./VI/desktop/global.jpg": 57156
      };

      function r(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 58963
    },
    25087(e, a, t) {
      const s = {
        "./VI/mobile/global.jpg": 52640
      };

      function r(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 25087
    },
    85394(e, a, t) {
      const s = {
        "./left.svg": 92085,
        "./pc.svg": 65957,
        "./ps4.svg": 71395,
        "./ps5.svg": 33458,
        "./right.svg": 6392,
        "./x.svg": 70930,
        "./xboxone.svg": 30107,
        "./xboxseriesxs.svg": 80237
      };

      function r(e) {
        const a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 85394
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
    92085(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    65957(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    71395(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    33458(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    6392(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    70930(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    30107(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    80237(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    40844(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    81018(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e50aff7a4148673983e493ca815454e.svg"
    }
  }
]);