try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2fbfecd2-c175-4ac8-82b0-3c82212a9dfd", e._sentryDebugIdIdentifier = "sentry-dbid-2fbfecd2-c175-4ac8-82b0-3c82212a9dfd")
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
  [7473], {
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
      }(a, "GameData")
    },
    18357(e) {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "SecondaryNavContent"
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
                value: "branchTags"
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
                  value: "ids"
                },
                value: {
                  kind: "ListValue",
                  values: [{
                    kind: "StringValue",
                    value: "38a82",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "8k827",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "o49o8",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "k9a48",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "k9a38",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "a1453",
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
                        value: "payloadRepresentedAsTree"
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
                value: "all"
              },
              name: {
                kind: "Name",
                value: "tinaModulesInfo"
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
                  value: "ids"
                },
                value: {
                  kind: "ListValue",
                  values: [{
                    kind: "StringValue",
                    value: "2k384",
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
                        value: "payloadRepresentedAsTree"
                      },
                      arguments: [],
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
          end: 650
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
        body: 'query SecondaryNavContent($locale: String!, $branchTags: [String]) {\n    tinaModulesInfo(\n        locale: $locale\n        ids: [\n            "38a82" # Contact Missions\n            "8k827" # Businesses\n            "o49o8" # Heists\n            "k9a48" # Recreation\n            "k9a38" # Series Modes\n            "a1453" # Special Interests\n        ]\n    ) {\n        tina {\n            payload\n            payloadRepresentedAsTree\n        }\n    }\n\n    all: tinaModulesInfo(\n        locale: $locale\n        ids: [\n            "2k384" # All Packs\n        ]\n    ) {\n        tina {\n            payload\n            payloadRepresentedAsTree\n        }\n    }\n}\n',
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
      }), e.exports = a, e.exports.SecondaryNavContent = function(e, a) {
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
      }(a, "SecondaryNavContent")
    },
    73965(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(39793),
        r = t(93082),
        i = t(42285),
        n = t(13331),
        o = t(82199),
        c = t(38828),
        d = t(92511);
      const m = ({
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
        l = {
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
            refetch: i
          } = (0, n.useQuery)(c.UserGetVote, {
            skip: !0
          }), [d] = (0, n.useMutation)(c.UserCastVote), [m, g] = (0, r.useState)(null), f = (0, r.useCallback)(s => {
            (async () => {
              if (s === m && null !== m) g(null);
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
          }, [e, a, m]);
          return (0, r.useEffect)(() => {
            e && a && (async () => {
              const t = await i({
                foreignId: e,
                foreignType: a
              });
              g(t?.data?.userGetVote?.vote ?? null)
            })()
          }, [e, a]), (0, s.jsxs)("div", {
            className: l.calloutVoteForm,
            children: [(0, s.jsx)("button", {
              "aria-label": "upvote",
              className: [l.upvote, l.voteButton, m ? l.active : ""].join(" "),
              name: "upvote",
              onClick: () => f(!0),
              type: "button"
            }), (0, s.jsx)("button", {
              "aria-label": "downvote",
              className: [l.downvote, l.voteButton, !1 === m ? l.active : ""].join(" "),
              name: "downvote",
              onClick: () => f(!1),
              type: "button"
            })]
          })
        },
        f = ({
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
              className: l.calloutLink,
              type: "button",
              onClick: t ? () => r({
                ...t
              }) : () => {},
              children: [e, (0, s.jsx)(m, {
                className: l.calloutLinkIcon
              })]
            })
          })
        },
        p = ({
          helperText: e,
          linkText: a,
          link: t,
          trackingData: r
        }) => {
          const {
            track: i
          } = (0, o.useGtmTrack)();
          return (0, s.jsxs)("div", {
            className: l.actionFooter,
            children: [e, a && " ", a && (0, s.jsx)("a", {
              href: t ?? "",
              onClick: () => i({
                ...r
              }),
              children: a
            })]
          })
        },
        u = (0, n.withTranslations)(({
          header: e,
          subheader: a,
          type: t,
          action_text: c,
          link: m,
          foreign_id: u = document.location.pathname,
          foreign_type: _ = "url",
          className: b = "",
          actionFooterHelperText: k,
          actionFooterLinkText: v,
          actionFooterLink: h,
          trackingData: x = {},
          actionFooterLinkTrackingData: w = {},
          t: y,
          ...N
        }) => {
          const {
            loggedIn: S
          } = (0, o.useRockstarUser)(), {
            track: T
          } = (0, o.useGtmTrack)(), C = document.location.pathname, {
            signInUrl: z
          } = (0, n.useScAuthLinks)(C), {
            ref: A,
            inView: M
          } = (0, i.useInView)({
            threshold: .6
          }), [D, E] = (0, r.useState)(!1);
          let L;
          if ((0, r.useEffect)(() => {
              M && !D && (T({
                event: "page_section_impression",
                element_placement: `callout section - ${N?.sectionName??N?._memoq?.header}`
              }), E(!0))
            }, [M]), !e && !a) return null;
          switch (t) {
            case "vote":
              if (!S) {
                L = (0, s.jsx)(d.A, {
                  to: z,
                  className: l.calloutButton,
                  onClick: x ? () => T({
                    ...x
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              L = (0, s.jsx)(g, {
                foreign_id: u,
                foreign_type: _
              });
              break;
            case "button":
              c && m && (L = (0, s.jsx)(d.A, {
                to: m,
                className: l.calloutButton,
                onClick: x ? () => T({
                  ...x
                }) : () => {},
                children: c
              }));
              break;
            case "link":
              c && m && (L = (0, s.jsx)(f, {
                action_text: c,
                link: m,
                trackingData: x
              }));
              break;
            default:
              L = null
          }
          return (0, s.jsx)("div", {
            className: `${l.calloutContainer} ${b||""}`,
            ref: A,
            children: (0, s.jsxs)("div", {
              className: l.calloutSection,
              children: [(0, s.jsxs)("div", {
                className: [l.calloutHeaders, L ? l.calloutHeaderMargins : ""].join(" "),
                children: [e && (0, s.jsx)("h2", {
                  className: l.calloutHeader,
                  children: y(e)
                }), a && (0, s.jsx)("h3", {
                  className: l.calloutSubheader,
                  children: y(a)
                })]
              }), (0, s.jsxs)("div", {
                className: l.actionBlock,
                children: [L, k && (0, s.jsx)(p, {
                  helperText: k,
                  linkText: v,
                  link: h,
                  trackingData: w
                })]
              })]
            })
          })
        })
    },
    33899(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => p
      });
      var s = t(39793),
        r = t(93082),
        i = t(99225),
        n = t(42909),
        o = t(82199),
        c = t(13331),
        d = t(78967);
      const m = (0, n.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        l = {
          applestore: "rockstargames-sites-gta-gen9e97115f479fca9697b140bfbfa6534f2",
          border: "rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620",
          borderless: "rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38",
          btnContent: "rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc",
          btnIcon: "rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad",
          "clr-button": "rockstargames-sites-gta-gen9d4ec60c769b079ac712ea0264480d480",
          cta: "rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480",
          disabled: "rockstargames-sites-gta-gen9d7a212b6e993966a3773c335359586d5",
          googleplay: "rockstargames-sites-gta-gen9ad074b742a5ce23c053880b289c2bbe6",
          icon: "rockstargames-sites-gta-gen9c394fea7e071f1213a5d44f5b569bd1a",
          "icon-left": "rockstargames-sites-gta-gen9c73b838b4f69aff2241b814ad1547c48",
          "icon-right": "rockstargames-sites-gta-gen9f0de4560b8a1190f63a65ad1e9fd4e03",
          label: "rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1",
          lgMax: "rockstargames-sites-gta-gen9df956d5fc70d2129beb1406170402148",
          lgMin: "rockstargames-sites-gta-gen9e974b6c740bfac2959d5170bd2d9f3ca",
          netflix: "rockstargames-sites-gta-gen9d82eca980780ce1b5e831106013dba81",
          nintendoswitch: "rockstargames-sites-gta-gen9e646f30d1a0c9990c5178e67be93f75e",
          nintendoswitch2: "rockstargames-sites-gta-gen9dcdb37a92eeedc0ae18336dd9fb9e39e",
          pc: "rockstargames-sites-gta-gen9a1b9c83f518722f01ecb3ece3681c117",
          pillBtn: "rockstargames-sites-gta-gen9f39c827be0d560f2cc376d83e3988fbc",
          platformIcon: "rockstargames-sites-gta-gen9f25581474e97714bc974f3ab51136511",
          primary: "rockstargames-sites-gta-gen9a857266233e524e3bb96d327a2095642",
          ps: "rockstargames-sites-gta-gen9d439373e74d36689bc159e9a585db184",
          ps4: "rockstargames-sites-gta-gen9e49e2b4d44ce7bab7966fbd9fdfb0760",
          ps5: "rockstargames-sites-gta-gen9baa2b83edce86fda2d9dffb2682092f7",
          selected: "rockstargames-sites-gta-gen9a63fd127fc0aab231f6740340658d647",
          smMax: "rockstargames-sites-gta-gen9fce12fc6343fbf09a5bb418bb8107f0b",
          xbox: "rockstargames-sites-gta-gen9cf162a09fdf0c180f3f5091077493d98",
          xboxone: "rockstargames-sites-gta-gen9e34e2c7fd3dd88f7e7d46f495c15a98d",
          xboxseriesxs: "rockstargames-sites-gta-gen9f5b0bc5e5a291a3ecab7447d33a76e55"
        };
      var g = t(81270);
      const f = ({
          platform: e = "",
          altText: a
        }) => {
          const t = e ? (0, d.A)(e) : null,
            r = t ? (0, s.jsx)("img", {
              className: l.platformIcon,
              src: t,
              alt: a
            }) : null;
          return (0, s.jsx)("span", {
            className: [l.btnContent, l.platformButton].join(" "),
            children: r
          })
        },
        p = ({
          children: e,
          href: a,
          style: t,
          content: p,
          variant: u = null,
          size: _ = "medium",
          icon: b,
          iconPosition: k = "none",
          iconStyle: v,
          badge: h,
          badgeStyle: x,
          platformItem: w,
          platformStyle: y = "border",
          gtm: N = {},
          disabled: S,
          reloadDocument: T = !1,
          className: C,
          role: z = "button"
        }) => {
          const {
            track: A
          } = (0, o.useGtmTrack)(), {
            formatMessage: M
          } = (0, n.useIntl)(), D = (0, c.useDataLayer)(), E = p ?? e, L = (0, r.useRef)(null), j = (0, c.findPlatform)(w)?.friendlyName, I = "platform" === u, V = (0, r.useMemo)(() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch {
              t = e
            }
            return e === t
          }, [a]), R = V ? j : `${j} ${M(m.aria_label_open_new_window)}`, O = (0, r.useCallback)(() => {
            S || A({
              event: "cta_other",
              text: p?.toLowerCase() ?? e ?? void 0,
              ...D,
              ...N,
              link_url: a ?? void 0
            })
          }, [N, a, D]), P = () => b ? (0, s.jsx)("span", {
            className: [l.icon, `icon-${k}`].join(" "),
            style: v,
            children: (0, s.jsx)("img", {
              className: l.btnIcon,
              src: (0, d.A)(b) || "",
              alt: `${b} icon`
            })
          }) : null, F = () => {
            I && L?.current?.blur()
          };
          return (0, s.jsx)(i.Link, {
            ref: L,
            to: a,
            target: V ? "_self" : "_blank",
            className: (0, g.default)(l.cta, I && w ? l[w] : "", y && l[y], S ? l.disabled : "", C),
            style: t,
            "data-variant": u,
            "data-size": _,
            onClick: O,
            "aria-label": R,
            reloadDocument: T,
            onPointerUp: F,
            onPointerLeave: F,
            role: z,
            children: I && w ? (0, s.jsx)(f, {
              platform: w,
              altText: j || E
            }) : (0, s.jsxs)("div", {
              className: l.btnContent,
              children: ["left" === k && P(), (0, s.jsx)("span", {
                className: l.label,
                children: E
              }), "right" === k && P(), h ? (0, s.jsx)("span", {
                className: l.badge,
                style: x,
                children: h
              }) : null]
            })
          })
        }
    },
    26237(e, a, t) {
      "use strict";
      t.d(a, {
        U: () => u,
        A: () => _
      });
      var s = t(39793),
        r = t(93082),
        i = t(99225),
        n = t(45266),
        o = t(79955),
        c = t.n(o),
        d = t(13331),
        m = t(81270),
        l = t(82199);
      const g = {
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
        f = {
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
        p = {
          applestore: "rockstargames-sites-gta-gen9e68d88a0e9f24a2f0bcf7da8a0e1b388",
          buttonText: "rockstargames-sites-gta-gen9c240c5768c5acdd2bc6022568ef877f0",
          closeButton: "rockstargames-sites-gta-gen9ee432a5defea7b8181973d3a9ad3190b",
          container: "rockstargames-sites-gta-gen9fc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-sites-gta-gen9b12c469ae4536819db4253c10b2cd11d",
          expandedArea: "rockstargames-sites-gta-gen9e752e3ffffce454f84c993a62a279f87",
          expandedButton: "rockstargames-sites-gta-gen9bb945d977a4db6fdd9206dbfe8581304",
          googleplay: "rockstargames-sites-gta-gen9d0d623dce429f6ae2fd898e1d551257e",
          pc: "rockstargames-sites-gta-gen9ffc20241c500599d4ee134fcffd66961",
          pcalt: "rockstargames-sites-gta-gen9a2ef6590cf9e642c1a2a8c589a792928",
          pillBtn: "rockstargames-sites-gta-gen9ed7115facef4ace39e8c7486e9066fe1",
          platformButton: "rockstargames-sites-gta-gen9fa40c93ee13fdec88bb8dc08ce36353a",
          platformButtons: "rockstargames-sites-gta-gen9e950c05307f67ce36d561a09027fd844",
          ps: "rockstargames-sites-gta-gen9dd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-sites-gta-gen9ed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-sites-gta-gen9f046700558956d566323b32d87c4a54f",
          selected: "rockstargames-sites-gta-gen9e7705468e2dbcfc45d23ef5047671698",
          switch: "rockstargames-sites-gta-gen9e8e3ea0f1d334667f3928f696308060e",
          unexpandedButton: "rockstargames-sites-gta-gen9eaa10e0601812da4ea334974165d92ec",
          xbox: "rockstargames-sites-gta-gen9e6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-sites-gta-gen9c03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-sites-gta-gen9dde1b553776bdd59373d22a43479de29"
        },
        u = ({
          buttonText: e = "",
          link: a = "",
          platform: r = "",
          target: n = null,
          onClick: o,
          tabIndex: c,
          className: d,
          ...m
        }) => {
          const l = n ?? (a.startsWith(document.location.origin) ? "_self" : "_blank"),
            g = [p.platformButton, p[r], d].join(" "),
            f = r ? t(5328)(`./${r}.svg`) : null,
            u = (0, s.jsxs)(s.Fragment, {
              children: [f ? (0, s.jsx)("img", {
                src: f,
                alt: e
              }) : "", !f && (0, s.jsx)("div", {
                className: p.buttonText,
                children: e
              })]
            });
          return a ? a.startsWith("http") ? (0, s.jsx)("a", {
            href: a,
            className: g,
            target: l,
            onClick: o,
            "aria-label": e,
            tabIndex: c,
            ...m,
            children: u
          }) : (0, s.jsx)(i.NavLink, {
            className: g,
            onClick: o,
            to: a,
            "aria-label": e,
            ...m,
            children: u
          }) : (0, s.jsx)("button", {
            className: g,
            onClick: o,
            "aria-label": e,
            tabIndex: c,
            ...m,
            children: u
          })
        },
        _ = ({
          variant: e,
          buttonText: a = "Subscribe",
          buttonClassName: i,
          className: o,
          children: _,
          platformsAndLinks: b = [],
          trackingType: k = "buy",
          trackingParent: v,
          target: h = null,
          trackingOId: x = null,
          returnUrl: w = null
        }) => {
          const y = (0, d.useRockstarTokenPing)(),
            [N, S] = (0, r.useState)(!1),
            [T, C] = (0, r.useState)(!1),
            [z, A] = (0, r.useState)(200),
            {
              track: M
            } = (0, l.useGtmTrack)(),
            D = (0, r.useRef)(null),
            E = (0, r.useRef)(null),
            L = (0, r.useRef)(null),
            j = (0, r.useRef)(null),
            [I, V] = (0, r.useState)(0),
            R = (0, r.useRef)(null),
            O = () => {
              L.current?.blur(), C(!0), S(!1), R.current = window.setTimeout(() => {
                E.current?.focus()
              }, 30)
            },
            P = (0, r.useCallback)(() => {
              M({
                element_placement: v?.toLowerCase(),
                event: "cta_other",
                text: "close expanding platform button"
              }), O()
            }, [M, v]);
          (0, r.useEffect)(() => () => {
            null !== R.current && window.clearTimeout(R.current)
          }, []), (0, r.useLayoutEffect)(() => {
            N && j.current ? V(j.current.scrollHeight) : V(0)
          }, [N]), (0, r.useEffect)(() => {
            if (!N) return;
            const e = e => {
              const a = e.target;
              D.current && !D.current.contains(a) && document.contains(a) && (O(), R?.current && (R.current = window.setTimeout(() => {
                E.current?.blur()
              }, 40)))
            };
            return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
              document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
            }
          }, [N]), (0, r.useEffect)(() => {
            const e = () => {
              N && (C(!0), S(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [N]), (0, r.useLayoutEffect)(() => {
            if (D?.current) {
              const e = getComputedStyle(D.current).getPropertyValue("--expandingPlatformButton-expandDuration"),
                a = parseFloat(e) * (e.includes("ms") ? 1 : 1e3);
              requestAnimationFrame(() => {
                A(isNaN(a) ? 200 : a)
              })
            }
          }, []), (0, r.useEffect)(() => {
            let e;
            return T && (e = window.setTimeout(() => {
              C(!1)
            }, z)), () => {
              e && window.clearTimeout(e)
            }
          }, [T, z]);
          const F = ({
            href: e,
            platform: a
          }) => async () => {
            if (e) M({
              element_placement: v?.toLowerCase(),
              event: "cta_store_link",
              link_url: e,
              text: a
            });
            else {
              const e = (0, d.findPlatform)(a)?.onlineService;
              if (e && "sc" !== e) {
                M({
                  element_placement: v?.toLowerCase(),
                  event: "cta_link_account",
                  text: `link ${e}`
                });
                const a = await (0, d.generateTpaLink)({
                  pingBearer: y,
                  returnUrl: w || window.location.pathname,
                  service: e
                });
                window.location.assign(a.href)
              }
            }
          };
          return "string" != typeof a ? null : (0, s.jsxs)("div", {
            className: (0, m.default)(p.container, o),
            children: [(0, s.jsx)(n.motion.div, {
              className: p.content,
              animate: N ? "open" : "close",
              variants: g,
              "aria-hidden": !!N,
              children: _
            }), (0, s.jsxs)(n.motion.div, {
              "data-variant": e,
              "data-animating": T,
              className: (0, m.default)(N ? p.expandedButton : p.unexpandedButton),
              animate: N ? "open" : "closed",
              variants: f,
              initial: !1,
              ref: D,
              children: [(0, s.jsx)(n.motion.button, {
                className: (0, m.default)(p.buttonText, i),
                "aria-expanded": N,
                onClick: () => {
                  if (C(!0), S(!N), !N) switch (k) {
                    case "select_platform":
                      M({
                        element_placement: v?.toLowerCase(),
                        event: "select_platform",
                        text: a?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      M({
                        element_placement: v?.toLowerCase(),
                        event: "cta_link_account",
                        o_id: x,
                        text: a?.toLowerCase()
                      });
                      break;
                    case "buy":
                      M({
                        element_placement: v?.toLowerCase(),
                        event: "cta_buy",
                        text: a?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      M({
                        element_placement: v?.toLowerCase(),
                        event: "cta_store_link",
                        text: a?.toLowerCase()
                      });
                      break;
                    case "other":
                      M({
                        element_placement: v?.toLowerCase(),
                        event: "cta_other",
                        text: a?.toLowerCase()
                      })
                  }
                },
                ref: E,
                children: a
              }), (0, s.jsx)("div", {
                className: p.expandedArea,
                ref: j,
                "data-animate": N ? "open" : "closed",
                "aria-hidden": !N,
                style: {
                  height: I
                },
                children: (0, s.jsx)(c(), {
                  active: N,
                  focusTrapOptions: {
                    preventScroll: !0,
                    returnFocusOnDeactivate: !1,
                    escapeDeactivates: !0,
                    clickOutsideDeactivates: !0,
                    onDeactivate: O,
                    checkCanFocusTrap: e => new Promise(a => {
                      const t = setInterval(() => {
                        "hidden" !== getComputedStyle(e[0]).visibility && (a(), clearInterval(t))
                      }, 5)
                    })
                  },
                  children: (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("button", {
                      className: p.closeButton,
                      onClick: P,
                      "aria-label": "Close",
                      tabIndex: N ? 0 : -1,
                      ref: L,
                      children: (0, s.jsx)("img", {
                        src: t(66426),
                        alt: "Close"
                      })
                    }), (0, s.jsx)("div", {
                      className: p.platformButtons,
                      children: b.length ? b.map(e => (0, s.jsx)(u, {
                        buttonText: e.buttonText ?? (0, d.findPlatform)(e.platform)?.friendlyName ?? "",
                        link: e.href,
                        platform: e.platform,
                        onClick: F(e),
                        target: h,
                        tabIndex: N ? 0 : -1
                      }, `${e.key}-${e.href}-${e.platform}`)) : ""
                    })]
                  })
                })
              })]
            })]
          })
        }
    },
    62686(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(39793),
        r = t(93082),
        i = t(42909),
        n = t(13331),
        o = t(42285),
        c = t(82199),
        d = t(72442),
        m = t(30615);
      const l = {
          rating: "rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc",
          text: "rockstargames-sites-gta-gen9babdd6ae2ff83f380dadc6982effa011",
          withDescriptors: "rockstargames-sites-gta-gen9b98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-gta-gen9b6339480b5fd086fb0c025930bfb7dcd"
        },
        g = (0, i.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            description: "Ratings link alt text",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var f = t(88256),
        p = t(95125);
      (0, n.importAll)(t(36672));
      const u = (0, m.A)((0, p.g)(({
        descriptors: e = null,
        footer: a = null,
        href: m,
        img: p = null,
        titleSlug: u = null,
        style: _ = {},
        className: b
      }) => {
        const [k, v] = (0, r.useState)(!1), {
          inView: h
        } = (0, o.useInView)({
          threshold: .6
        }), [x, w] = (0, r.useState)({
          ratingDescriptors: e,
          ratingFooter: a,
          ratingImg: p,
          ratingUrl: m
        }), {
          track: y
        } = (0, c.useGtmTrack)(), N = (0, i.useIntl)(), {
          data: S
        } = (0, n.useQuery)(f.GameData, {
          variables: {
            titleSlug: u
          },
          skip: !u
        });
        if ((0, r.useEffect)(() => {
            S && w(S?.game)
          }, [S]), (0, r.useEffect)(() => {
            h && !k && x.ratingImg && (y({
              event: "page_section_impression",
              element_placement: "rating"
            }), v(!0))
          }, [h]), !x.ratingImg) return null;
        const T = !!x.ratingDescriptors;
        return (0, s.jsxs)("div", {
          className: [l.rating, T ? l.withDescriptors : l.withOutDescriptors, b || ""].join(" "),
          style: (0, n.safeStyles)(_),
          "data-testid": "rating",
          children: [(0, s.jsx)(d.A, {
            to: x.ratingUrl,
            target: "_blank",
            children: (0, s.jsx)("img", {
              alt: N.formatMessage(g.components_ratings_link_alt, {
                rating: (C = x.ratingImg, C.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${x.ratingImg}`)
            })
          }), T && (0, s.jsxs)("div", {
            className: l.text,
            children: [(0, s.jsx)("p", {
              className: l.descriptors,
              dangerouslySetInnerHTML: {
                __html: x?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), x.ratingFooter && (0, s.jsx)("hr", {}), x.ratingFooter && (0, s.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: x.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var C
      }))
    },
    92511(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(39793),
        r = t(81270),
        i = t(72442);
      const n = {
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
          ...m
        }) => {
          const l = (0, r.default)(n.button, n[t], e);
          return o ? (0, s.jsx)(i.A, {
            ...m,
            to: o,
            className: l,
            onClick: c,
            target: d,
            children: a
          }) : (0, s.jsx)("button", {
            ...m,
            type: "button",
            className: l,
            onClick: c,
            children: a
          })
        }
    },
    30615(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(39793),
        r = t(93082);
      class i extends r.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9d5c408a8b618087ef4bb452f96526b2b",
            children: [(0, s.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, s.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const n = (e, a = null, t = !1) => {
        const r = r => (0, s.jsx)(i, {
          header: a,
          hidden: t,
          children: (0, s.jsx)(e, {
            ...r
          })
        });
        return r.displayName = `withSimpleErrorBoundary(${e.displayName||e.name||"Component"})`, r
      }
    },
    78967(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(80391),
        r = t(28985),
        i = t(47240),
        n = t(32903),
        o = t(81715),
        c = t(49429),
        d = t(11008);
      const m = {
          ps: s,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: r,
          ps5: i,
          switch: d,
          nintendoswitch: d,
          nintendoswitch2: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7696cbc8ff9dc5f2ed3f618ea7252e3b.svg",
          xbox: n,
          xboxone: c,
          xboxseriesxs: o,
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
        l = e => m[e] || null
    },
    48161(e, a, t) {
      "use strict";
      var s = t(93082),
        r = t(82199),
        i = t(17301),
        n = t(13331),
        o = t(18357),
        c = t(51217);
      t.d(a, ["A", 0, ({
        relativeTo: e = ".."
      } = {}) => {
        const {
          selectedCharacterTuple: a
        } = (0, r.useRockstarUserState)(), t = (0, n.useRockstarTokenPing)(), d = (0, i.useGenerateCdnSource)(), [m, l] = (0, s.useState)(), [g, f] = (0, s.useState)(), [p, u] = (0, s.useState)([]), {
          data: _,
          loading: b
        } = (0, n.useQuery)(o.SecondaryNavContent, {
          variables: {
            branchTags: ["1"]
          }
        });
        return (0, s.useEffect)(() => {
          (async () => {
            u([]);
            const e = a?.[0],
              s = a?.[1];
            if ((0, n.getGen9Consoles)().includes(e)) try {
              const {
                result: a
              } = await (0, n.coreScApiFetch)("games/gtao/career/progress/summary", {
                pingBearer: t,
                query: {
                  platform: e,
                  slot: s
                }
              });
              a && u(a.sections)
            } catch (e) {
              console.error(e)
            }
          })()
        }, [String(a)]), (0, s.useEffect)(() => {
          if (!_) return;
          const a = "cphsubnav",
            t = "cphdiscover",
            s = s => {
              const r = _?.all?.find(e => e?.tina?.payloadRepresentedAsTree?.tree?.[0]?.idHash === s?.idHash),
                i = _?.tinaModulesInfo?.find(e => e?.tina?.payloadRepresentedAsTree?.tree?.[0]?.idHash === s?.idHash),
                n = r ?? i,
                o = n?.tina?.payload?.meta?.prod ?? !0,
                m = s.children.map(s => {
                  const r = ({
                      context: e
                    }) => {
                      const a = s.images?.find(a => a.context === e);
                      return a?.src ? d(a.src, {
                        prod: o
                      }) : null
                    },
                    i = c.b[s.rewardsKey],
                    {
                      tiers: n
                    } = p?.find(({
                      id: e
                    }) => e === i) ?? {
                      tiers: []
                    },
                    m = (s.images?.filter(e => e.context === t) ?? [])?.length,
                    l = r({
                      context: a
                    }) ?? r({
                      context: ""
                    });
                  return {
                    title: s.title,
                    name: s.name,
                    tiers: n,
                    url: `${e}/${s.link}`,
                    images: {
                      tinyThumb: `${r({context:a})}?im=Resize,height=32,width=32`,
                      brand: r({
                        context: t
                      }),
                      desktop: l,
                      mobile: r({
                        context: "cphcover"
                      }) ?? l
                    },
                    createdAt: s.created,
                    discoverSafe: m
                  }
                });
              return {
                title: s.title,
                name: s.name,
                subNavItems: m
              }
            },
            r = _?.tinaModulesInfo?.map(e => e?.tina?.payloadRepresentedAsTree?.tree?.[0] ?? null).filter(Boolean).map(s),
            i = _?.all?.map(e => e?.tina?.payloadRepresentedAsTree?.tree?.[0] ?? null).filter(Boolean).map(s);
          l(r), f(i)
        }, [_, p, e, d]), {
          loading: b,
          data: m,
          allData: g
        }
      }])
    },
    51217(e, a, t) {
      "use strict";
      t.d(a, {
        b: () => s,
        D: () => r
      });
      const s = {
          GUNRUNNING: 1471810592,
          LSDRUGWARS: -1859518261,
          CONTRACT: -392727791,
          AFTERHOURS: -1815199872,
          SMUGGLERSRUN: 1164011531,
          IMPORTEXPORT: -647547292,
          BIKERS: 315075481,
          FAIFAF: -1374101462,
          CAYOPERICOHEIST: -995532639,
          DIAMONDCASINOHEIST: 98960286,
          DOOMSDAY: 1942893817,
          HEISTS: -2044559582,
          PROJECTOVERTHROW: 1445486638,
          PAPERTRAIL: -961870614,
          SUPERYACHTLIFE: -431626303,
          GERALDSLASTPLAY: -192008291,
          PREMIUMDELUXREPO: 75069984,
          MADRAZODISPATCH: -2012307449,
          LOWRIDERS: -501692796,
          LSTUNERS: 320230760,
          DIAMONDCASINO: 1009355195,
          RACING: -344405389,
          SURVIVALS: 350693912,
          ADVERSARYMODE: -789968707,
          DEATHMATCHES: -1232781894,
          VEHICLE: -584819812,
          WEAPONS: -2143405780,
          ARENAWAR: -57043721,
          CHOPSHOP: -4750723,
          CLUCKINBELL: -1470413487,
          BAILOFFICE: -1472755728,
          HACKERDEN: -1087198207,
          FIELDHANGAR: 1376198550,
          BUSINESSTYCOON: -1366130389,
          KNOWAY: -1410790007,
          KORTZ: -1819654978
        },
        r = (0, t(42909).defineMessages)({
          cph_awards_title: {
            id: "cph_awards_title",
            description: "Awards section title",
            defaultMessage: "Awards"
          },
          cph_awards_metal_completed: {
            defaultMessage: "{metal}: Completed.",
            description: "Aria label when a metal level is completed",
            id: "cph_awards_metal_completed"
          },
          cph_awards_progressbar_completed: {
            defaultMessage: "Current progress {percentage}%.",
            description: "Aria label for an award progress bar",
            id: "cph_awards_progressbar_completed"
          },
          cph_awards_metal_not_unlocked: {
            defaultMessage: "{metal}: Not unlocked.",
            description: "Aria label when a metal level is not unlocked",
            id: "cph_awards_metal_not_unlocked"
          },
          cph_progress_tracker_title: {
            id: "cph_progress_tracker_title",
            description: "Title for section on the Career Progress Hub",
            defaultMessage: "Career Progress"
          },
          cph_progress_tracker_tier_label: {
            id: "cph_progress_tracker_tier_label",
            description: "Tier list labels on the Career Progress Hub",
            defaultMessage: "Tier {number}"
          },
          cph_progress_challenges_title: {
            id: "cph_progress_challenges_title",
            description: "Title for Challenges section on the Career Progress Hub",
            defaultMessage: "Challenges"
          },
          cph_progress_rewards_title: {
            id: "cph_progress_rewards_title",
            description: "Title for Rewards section on the Career Progress Hub",
            defaultMessage: "Rewards"
          },
          cph_progress_rewards_view_all: {
            id: "cph_progress_rewards_view_all",
            description: "Title for View All button for Rewards on the Career Progress Hub",
            defaultMessage: "View All"
          },
          cph_progress_rewards_view_less: {
            id: "cph_progress_rewards_view_less",
            description: "Title for View Less button for Rewards on the Career Progress Hub",
            defaultMessage: "View Less"
          },
          cph_progress_next_slide: {
            id: "cph_progress_next_slide",
            description: "A11y Label for Next slide button for Rewards Carousel on the Career Progress Hub",
            defaultMessage: "Next slide"
          },
          cph_progress_previous_slide: {
            id: "cph_progress_previous_slide",
            description: "A11y Label for Previous slide button for Rewards Carousel on the Career Progress Hub",
            defaultMessage: "Previous slide"
          },
          cph_progress_close: {
            id: "cph_progress_close",
            description: "Label for close buttons for the Career Progress Hub (eg. to close a popup) on the Career Progress Hub",
            defaultMessage: "Close"
          },
          cph_nav_open: {
            id: "cph_nav_open",
            description: "Label for button which opens the secondary menu",
            defaultMessage: "Open Section Navigation"
          },
          cph_nav_close: {
            id: "cph_nav_close",
            description: "Label for button which closes the secondary menu",
            defaultMessage: "Close Section Navigation"
          },
          cph_nav_scroll_left: {
            id: "cph_nav_scroll_left",
            description: "Label for scroll left buttons for the Career Progress Hub navigation",
            defaultMessage: "Scroll Left"
          },
          cph_nav_scroll_right: {
            id: "cph_nav_scroll_right",
            description: "Label for scroll right buttons for the Career Progress Hub navigation",
            defaultMessage: "Scroll Right"
          },
          cph_intro_getting_started: {
            id: "cph_intro_getting_started",
            description: "Header for the getting started section",
            defaultMessage: "Getting Started"
          },
          cph_intro_guide_instruction: {
            id: "cph_intro_guide_instruction",
            description: "Instruction indicating which guide can be read",
            defaultMessage: "Read the {title} Guide to learn more."
          },
          cph_intro_guide_learn_more: {
            id: "cph_intro_guide_learn_more",
            description: "Label for link to guide",
            defaultMessage: "Learn more"
          },
          cph_progress_available_on: {
            id: "cph_progress_available_on",
            description: "Prepend for platforms that the feature is available on. Will be accompanied by platforms and Icons",
            defaultMessage: "Only available on"
          },
          cph_progress_available_on_aria_ps5: {
            id: "cph_progress_available_on_aria_ps5",
            description: "Platform name used in ARIA labels: Playstation 5",
            defaultMessage: "PlayStation5"
          },
          cph_progress_available_on_aria_xbox: {
            id: "cph_progress_available_on_aria_xbox",
            description: "Platform name used in ARIA labels: Xbox Series X / S",
            defaultMessage: "Xbox Series X|S"
          },
          cph_progress_available_on_aria_pc: {
            id: "cph_progress_available_on_aria_pc",
            description: "Platform name used in ARIA labels: PC",
            defaultMessage: "PC"
          },
          cph_login_prompt_title: {
            id: "cph_login_prompt_title",
            description: "Title of login prompt",
            defaultMessage: "Sign In to Track Your Progress"
          },
          cph_login_prompt_body: {
            id: "cph_login_prompt_body",
            description: "Body of login prompt",
            defaultMessage: "Sign in to your account to see all the rewards you can earn, the awards you've won, and the possibilities still ahead of you."
          },
          cph_login_prompt_button: {
            id: "cph_login_prompt_button",
            description: "Button text for login prompt",
            defaultMessage: "Sign In"
          },
          cph_login_prompt_button_helper: {
            id: "cph_login_prompt_button_helper",
            description: "Helper text for under login prompt button",
            defaultMessage: "Don't have an account?"
          },
          cph_login_prompt_button_helper_link: {
            id: "cph_login_prompt_button_helper_link",
            description: "Helper text link for under login prompt button",
            defaultMessage: "Create an Account"
          },
          cph_callout_feedback_title: {
            id: "cph_callout_feedback_title",
            description: "Title for the feedback CalloutSection",
            defaultMessage: "Share Your Feedback"
          },
          cph_callout_feedback_body: {
            id: "cph_callout_feedback_body",
            description: "Body for the feedback CalloutSection",
            defaultMessage: "How are you enjoying GTA Online? Tell us your thoughts and ideas to help us shape the future of the game."
          },
          cph_callout_feedback_button: {
            id: "cph_callout_feedback_button",
            description: "Button text for the feedback CalloutSection",
            defaultMessage: "Give feedback"
          },
          cph_loggedin_nochar_title: {
            id: "cph_loggedin_nochar_title",
            defaultMessage: "Link a GTA Online Character",
            description: "Title for CTA when no character is found"
          },
          cph_loggedin_nochar_body: {
            id: "cph_loggedin_nochar_body",
            defaultMessage: "We couldn't find a GTA Online character linked to your Rockstar Games account.",
            description: "Body for CTA when no character is found"
          },
          cph_loggedin_nochar_button: {
            id: "cph_loggedin_nochar_button",
            defaultMessage: "Link a game account",
            description: "Button for CTA when no character is found"
          },
          cph_reward_locked_alt: {
            id: "cph_reward_locked",
            defaultMessage: "Reward locked",
            description: "Alt text for reward locked icon"
          },
          cph_reward_claimable: {
            id: "cph_reward_claimable",
            defaultMessage: "Ready to claim",
            description: 'Text for reward "Ready to claim" label'
          },
          cph_reward_claimed: {
            id: "cph_reward_claimed",
            defaultMessage: "Claimed",
            description: 'Text for reward "Claimed" label'
          },
          cph_tier_complete: {
            id: "cph_tier_complete",
            defaultMessage: "Tier Complete",
            description: "Text when a tier is completed"
          },
          cph_reward_ready_to_claim: {
            id: "cph_reward_ready_to_claim",
            defaultMessage: "Rewards ready to be claimed",
            description: "Text informing user that they have rewards available to claim"
          },
          cph_reward_how_to_claim: {
            id: "cph_reward_how_to_claim",
            defaultMessage: "Rewards ready to be claimed. Visit the Career Progress Menu in-game to claim.",
            description: "Text explaining how to claim a reward that is currently available"
          },
          cph_highlights_heading: {
            id: "cph_highlights_heading",
            defaultMessage: "Highlights",
            description: "Section header for highlights component"
          },
          cph_highlights_previous: {
            id: "cph_highlights_previous",
            description: "Aria label for button which select the previous item",
            defaultMessage: "Previous"
          },
          cph_highlights_next: {
            id: "cph_highlights_next",
            description: "Aria label for button which select the next item",
            defaultMessage: "Next"
          },
          cph_highlights_group_aria: {
            id: "cph_highlights_group_aria",
            description: "Aria label describing location in list",
            defaultMessage: "Highlight {index} of {total}"
          },
          cph_awards_bonuses_title: {
            id: "cph_awards_bonuses_title",
            description: "Title for Bonuses list within each award",
            defaultMessage: "Bonuses"
          },
          cph_awards_bronze: {
            id: "cph_awards_bronze",
            description: "Label for Bronze (in context of award levels)",
            defaultMessage: "Bronze"
          },
          cph_awards_silver: {
            id: "cph_awards_silver",
            description: "Label for Silver (in context of award levels)",
            defaultMessage: "Silver"
          },
          cph_awards_gold: {
            id: "cph_awards_gold",
            description: "Label for Gold (in context of award levels)",
            defaultMessage: "Gold"
          },
          cph_awards_platinum: {
            id: "cph_awards_platinum",
            description: "Label for Platinum (in context of award levels)",
            defaultMessage: "Platinum"
          },
          cph_awards_bonuses_tattoo: {
            id: "cph_awards_bonuses_tattoo",
            description: "Label for Tattoo bonus type",
            defaultMessage: "{tattooName} Tattoo"
          },
          cph_awards_rp_bonus_info: {
            id: "cph_awards_rp_bonus_info",
            description: "Information on tooltip for RP bonus information for each tier level",
            defaultMessage: "Complete unique challenges to earn GTA$, bonus items, and more including RP bonuses for each Level:"
          }
        })
    },
    66302(e, a, t) {
      "use strict";
      var s = t(40283);
      const r = [{
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
      }];
      t.d(a, ["A", 0, () => {
        let e;
        const {
          location: a
        } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), i = r.findIndex(a => Object.entries(a.sites).findIndex(([a, s]) => s === t && (e = {
          site: a,
          subDomain: s
        }, !0)) >= 0), n = r[i >= 0 ? i : 0], o = r.find(e => e.id === n.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, s.omit)((0, s.merge)({}, o, {
          currentSite: e
        }, n), "fallbackEnvironment")
      }, "C", 0, {
        www: "www",
        socialClub: "socialClub",
        support: "support",
        store: "store",
        circoloco: "circoloco",
        supportNew: "support"
      }])
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
      }, r.resolve = i, e.exports = r, r.id = 5328
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
        "./vaci_rp.png": 32323
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
      }, r.resolve = i, e.exports = r, r.id = 36672
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
        "./vaci_rp.png": 32323
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
      }, r.resolve = i, e.exports = r, r.id = 8194
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
    }
  }
]);