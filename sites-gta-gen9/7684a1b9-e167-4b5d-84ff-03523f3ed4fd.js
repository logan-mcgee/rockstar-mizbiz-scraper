try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7684a1b9-e167-4b5d-84ff-03523f3ed4fd", e._sentryDebugIdIdentifier = "sentry-dbid-7684a1b9-e167-4b5d-84ff-03523f3ed4fd")
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
  [4063], {
    12128: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "SubmitFeedback"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "content"
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
                value: "feedback_step"
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
                value: "submittal"
              },
              name: {
                kind: "Name",
                value: "gtaoFeedbackSubmit"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "content"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "content"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "feedback_step"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "feedback_step"
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
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "FeedbackSteps"
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
                value: "step"
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
                  kind: "StringValue",
                  value: "/GTAOnline/feedback",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "fallbackUrl"
                },
                value: {
                  kind: "StringValue",
                  value: "/GTAOnline/",
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
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "tree"
              },
              name: {
                kind: "Name",
                value: "gtaoFeedbackSteps"
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
                  value: "step"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "step"
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
                    value: "path"
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
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "feedback_type"
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
                            value: "title"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "next"
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
                        value: "message"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "feedback_type"
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
                            value: "title"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "href"
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
          end: 856
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          n(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          n(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          n(e, a)
        })
      }
      a.loc.source = {
        body: 'mutation SubmitFeedback(\n    $content: String!\n    $feedback_step: Int!\n    $cache: Boolean = true\n) {\n    submittal: gtaoFeedbackSubmit(\n        content: $content\n        feedback_step: $feedback_step\n    ) {\n        id\n    }\n}\n\nquery FeedbackSteps($locale: String!, $step: String, $cache: Boolean = true) {\n    meta: metaUrl(\n        locale: $locale\n        domain: "www"\n        url: "/GTAOnline/feedback"\n        fallbackUrl: "/GTAOnline/"\n    ) {\n        title\n    }\n    tree: gtaoFeedbackSteps(locale: $locale, step: $step) {\n        path {\n            id\n            id_hash\n            feedback_type {\n                name\n                title\n            }\n        }\n        next {\n            id_hash\n            message\n            feedback_type {\n                name\n                title\n                href\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }

      function o(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var o = i[a] || new Set,
          l = new Set,
          s = new Set;
        for (o.forEach(function(e) {
            s.add(e)
          }); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach(function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach(function(e) {
              s.add(e)
            }))
          })
        }
        return l.forEach(function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        }), n
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      }), e.exports = a, e.exports.SubmitFeedback = o(a, "SubmitFeedback"), e.exports.FeedbackSteps = o(a, "FeedbackSteps")
    },
    29982: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "BuyNowQ"
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
        }],
        loc: {
          start: 0,
          end: 213
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          n(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          n(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          n(e, a)
        })
      }
      a.loc.source = {
        body: "query BuyNowQ($ids: [String]!, $locale: String!) {\n    tinaModulesInfo(ids: $ids, locale: $locale) {\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      }), e.exports = a, e.exports.BuyNowQ = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var o = i[a] || new Set,
          l = new Set,
          s = new Set;
        for (o.forEach(function(e) {
            s.add(e)
          }); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach(function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach(function(e) {
              s.add(e)
            }))
          })
        }
        return l.forEach(function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        }), n
      }(a, "BuyNowQ")
    },
    53169: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MetaUrlInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "url"
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
                value: "metaUrlInfo"
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
                    value: "url"
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
                    value: "description"
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
                    value: "keywords"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 323
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          n(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          n(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          n(e, a)
        })
      }
      a.loc.source = {
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        keywords\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      }), e.exports = a, e.exports.MetaUrlInfo = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var o = i[a] || new Set,
          l = new Set,
          s = new Set;
        for (o.forEach(function(e) {
            s.add(e)
          }); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach(function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach(function(e) {
              s.add(e)
            }))
          })
        }
        return l.forEach(function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        }), n
      }(a, "MetaUrlInfo")
    },
    64063: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        default: () => Q
      });
      var i = n(42295),
        t = n(62229),
        o = n(12294),
        l = n(81788),
        s = n(2918),
        r = n(85870),
        c = n(14200),
        d = n(95966);
      const u = {
          activeLink: "rockstargames-sites-gta-gen9b9fb942404b67a1050524f060ee3ace6",
          mobileNav: "rockstargames-sites-gta-gen9c9fab376299c39a26e18141999de2402",
          mobileNavOpen: "rockstargames-sites-gta-gen9a6d5488a32320301a9036ed9da96cbe0",
          pillBtn: "rockstargames-sites-gta-gen9ca8f6c3576718c050d5f2b4383286e82",
          selected: "rockstargames-sites-gta-gen9ac75fe9dcd52264673c32ae31d7f8669"
        },
        _ = (0, d.withTranslations)(({
          t: e
        }) => {
          const a = (0, r.hI)(),
            {
              track: n
            } = (0, s.useGtmTrack)(),
            {
              state: {
                headerHeight: o,
                mobileNavOpen: l
              },
              setMobileNavOpen: d
            } = (0, r.E_)(),
            [_, v] = (0, t.useState)(!1);
          return (0, t.useEffect)(() => {
            const e = () => {
              window.innerWidth > 1024 ? v(!1) : v(!0)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, t.useEffect)(() => {
            const e = ({
              keyCode: e
            }) => {
              27 === e && d(!1)
            };
            return document.addEventListener("keydown", e, !1), () => {
              document.removeEventListener("keydown", e, !1)
            }
          }, []), (0, i.jsx)("nav", {
            className: [u.mobileNav, l ? u.mobileNavOpen : ""].join(" "),
            style: {
              "--header-height": `${o}px`
            },
            "aria-hidden": !_,
            children: a.map(({
              activeExact: a,
              title: t,
              to: o
            }) => (0, i.jsx)(c.A, {
              end: a,
              to: o,
              target: o.startsWith("http") ? "_blank" : "_self",
              className: ({
                isActive: e
              }) => e ? u.activeLink : null,
              onClick: () => ((e = "", a = null) => {
                n({
                  event: "nav_click",
                  element_placement: e.toLowerCase(),
                  link_url: a
                })
              })(e(t), o),
              children: e(t)
            }, o))
          })
        });
      var v = n(9623),
        m = n(92440),
        p = n(66603),
        b = n(25268),
        k = n(61938),
        g = n(29982);
      const f = "rockstargames-sites-gta-gen9e1700f22ef2633cdb13fe46819b9250f",
        h = {
          BuyNow: p.A,
          TinaWrapper: b.A
        },
        y = () => {
          const {
            setBodyIsLocked: e
          } = (0, d.useBodyScrollable)("ModalContent"), {
            track: a
          } = (0, s.useGtmTrack)(), [n, l] = (0, v.useSearchParams)(), {
            data: r
          } = (0, d.useQuery)(g.BuyNowQ, {
            variables: {
              ids: ["6a84"]
            }
          }), [c, u] = (0, o.h)();
          return (0, t.useEffect)(() => {
            e(!!c)
          }, [c]), (0, t.useEffect)(() => {
            const e = "order" !== n.get("info") && "trailer" !== n.get("info") && n.get("videoId");
            if (n.get("info") || n.get("videoId")) {
              if (e) {
                const e = (0, i.jsx)(k.A, {
                    id: n.get("videoId")
                  }),
                  t = {
                    left: window.innerWidth / 2,
                    top: window.innerHeight / 2
                  };
                u({
                  content: e,
                  rect: t,
                  contentStyle: {
                    overflow: "hidden"
                  },
                  contentClassName: f,
                  onClose: () => {
                    l({}), a({
                      event: "modal_close"
                    })
                  }
                }), a({
                  event: "trackPageview",
                  card_id: n.get("videoId"),
                  card_name: "video"
                })
              }
            } else u(null)
          }, [n]), (0, t.useEffect)(() => {
            if ("order" !== n.get("info") || !r) return;
            const e = r?.tinaModulesInfo?.[0].tina,
              t = (0, i.jsx)(m.TinaParser, {
                components: {
                  gen9: h
                },
                tina: e
              }),
              o = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            u({
              content: t,
              contentClassName: "rockstargames-sites-gta-gen9b82ef78a8a5f1b14aec5b2a543ccf951",
              contentStyle: {
                "--modal-content-max-width": "100%",
                "--modal-content-padding": "calc(var(--modal-padding) + var(--padding-md)) var(--padding-lg) var(--padding-lg)",
                "--modal-height": "100vh"
              },
              rect: o,
              onClose: () => {
                l({}), a({
                  event: "modal_close"
                })
              }
            }), a({
              event: "trackPageview",
              card_id: "order",
              card_name: "order"
            })
          }, [r, n.get("info")]), (0, t.useEffect)(() => {
            if ("trailer" !== n.get("info")) return;
            const e = (0, i.jsx)(k.A, {
                id: "12258"
              }),
              t = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            u({
              content: e,
              rect: t,
              contentStyle: {
                overflow: "hidden"
              },
              contentClassName: f,
              onClose: () => {
                l({}), a({
                  event: "modal_close"
                })
              }
            }), a({
              event: "trackPageview",
              card_id: "trailer",
              card_name: "trailer"
            })
          }, [n.get("info")]), c
        };
      var S = n(34100),
        N = n(29315),
        w = n(53169);
      const x = (0, N.A)(({
        componentsForTinaParser: e,
        root: a,
        url: n,
        setBrand: o
      }) => {
        const {
          data: l
        } = (0, d.useQuery)(w.MetaUrlInfo, {
          variables: {
            url: n
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), [s, r] = (0, t.useState)(null);
        return (0, t.useEffect)(() => {
          const e = l?.metaUrlInfo?.tina ?? null,
            a = e?.payload?.meta?.brand ?? null;
          a && o?.(a), e && r(e)
        }, [l]), s ? (0, i.jsx)("div", {
          "data-root": a,
          className: "rockstargames-sites-gta-gen9b682ae1b0f926c7f6b70f0415bef334f",
          children: (0, i.jsx)(m.TinaParser, {
            components: e,
            tina: s
          })
        }) : null
      });
      var T = n(57386),
        j = n(70636),
        P = n(994),
        F = n.n(P),
        V = n(12128);
      const E = () => (0, i.jsx)("span", {
        className: "rockstargames-sites-gta-gen9a770c6b0d9ce5d924a80290e03ab89aa",
        children: (0, i.jsx)(F(), {
          query: V.FeedbackSteps,
          mutation: V.SubmitFeedback,
          type: "gtao"
        })
      });
      var A = n(81854),
        D = n(58014),
        z = n(16188),
        C = n.n(z);
      const B = {
          activeSection: "rockstargames-sites-gta-gen9b475bb505960a8474b487af0d9da188f",
          guideNavMobile: "rockstargames-sites-gta-gen9e9ae9cb7e211802c352da258be7f2759",
          guideNavMobileContent: "rockstargames-sites-gta-gen9de43dc4a16c82e4c11c4d1d201c2bfcb",
          pillBtn: "rockstargames-sites-gta-gen9e053ac971a9aaeba0baa908802af12ec",
          sections: "rockstargames-sites-gta-gen9bf056804ab1fbd52973a9d9db2982e10",
          sectionsOpen: "rockstargames-sites-gta-gen9efc73eed6fe6a214625874ec23311a52",
          selected: "rockstargames-sites-gta-gen9bbfee46a8ca8593ff2b49333eec2c057"
        },
        I = ({
          currentId: e
        }) => {
          const {
            track: a
          } = (0, s.useGtmTrack)(), n = (0, r.hY)(), [o, l] = (0, t.useState)(!1), [d, u] = (0, t.useState)(null), [_, m] = (0, t.useState)(null), [p] = (0, v.useSearchParams)();
          if ((0, t.useEffect)(() => {
              C().cloneDeepWith(n, (a, n, i) => {
                e === a && u(i?.children ?? null)
              })
            }, [e, n, p.get("section")]), (0, t.useEffect)(() => {
              m(null), C().cloneDeepWith(d, (e, a, n) => {
                "id_hash" === a && p.get("section") === e && m(n)
              })
            }, [d, p.get("section")]), !d) return null;
          const b = () => {
            l(!1), a({
              event: "nav_click",
              element_placement: "guide nav"
            })
          };
          return (0, i.jsx)("div", {
            className: B.guideNavMobile,
            children: (0, i.jsxs)("div", {
              className: B.guideNavMobileContent,
              children: [(0, i.jsx)("div", {
                className: [B.sections, o ? B.sectionsOpen : ""].join(" "),
                children: d.map(({
                  id_hash: e,
                  title: a,
                  to: n
                }) => (0, i.jsx)(c.A, {
                  className: e === _?.id_hash ? B.activeSection : "",
                  to: n,
                  onClick: b,
                  children: a
                }, n))
              }), (0, i.jsx)("button", {
                type: "button",
                onClick: () => l(!o),
                children: "Jump To"
              })]
            })
          })
        };
      var O = n(43920);
      const M = (0, N.A)(() => {
          const {
            setBrand: e
          } = (0, r.E_)();
          (0, t.useEffect)(() => {
            e("gtao")
          }, []);
          const {
            guideId: a
          } = (0, v.useParams)(), n = (0, A.X)({
            ids: [a],
            setTitleDataPath: "tinaModulesInfo[0].title_doc"
          })?.[0] ?? {};
          return (0, t.useMemo)(() => {
            if (!n) return null;
            const {
              tina: e,
              type: t
            } = n;
            if (t && "gen9-guide" !== t) throw Error("Invalid type, a guide is needed.");
            return (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d17bb0876067381894f878e72d9d70f9",
              children: [(0, i.jsx)(D.A, {
                currentId: a
              }), e ? (0, i.jsx)(m.TinaParser, {
                components: O.componentsForTinaParserGuide,
                tina: e
              }) : "", (0, i.jsx)(I, {
                currentId: a
              })]
            })
          }, [JSON.stringify(n)])
        }),
        X = ["/gta-v", "/gta-online", "/gta-online/guides", "/gta-online/prime-plus-offer", "/gta-plus", "/gta-plus/benefits", "/gta-plus/join", "/gta-plus/legal", "/gta-online/license-plates", "/gta-online/heists/lsdw", "/gta-online/heists/cayo-perico-heist", "/gta-online/heists/diamond-casino-heist", "/gta-online/heists/doomsday-heist", "/gta-online/heists/original-heists", "/gta-online/businesses/bottom-dollar-bounties", "/gta-online/businesses/drug-wars", "/gta-online/businesses/the-contract", "/gta-online/businesses/after-hours", "/gta-online/businesses/smugglers-run", "/gta-online/businesses/gunrunning", "/gta-online/businesses/bikers", "/gta-online/businesses/finance-and-felony", "/gta-online/businesses/import-export", "/gta-online/businesses/chop-shop", "/gta-online/businesses/money-fronts", "/gta-online/recreation/los-santos-tuners", "/gta-online/recreation/diamond-casino-resort", "/gta-online/contact-missions/operation-paper-trail", "/gta-online/contact-missions/oscar-guzman-flies-again", "/gta-online/contact-missions/san-andreas-mercenaries", "/gta-online/contact-missions/superyacht-life", "/gta-online/contact-missions/last-play", "/gta-online/contact-missions/premium-deluxe-repo", "/gta-online/contact-missions/dispatch-services", "/gta-online/contact-missions/lowriders", "/gta-online/contact-missions/dlc-1-2023", "/gta-online/contact-missions/cluckin-bell-farm-raid", "/gta-online/career-progress", "/gta-online/twitch-drops", "/gta-online/series-modes/arena-war", "/gta-online/series-modes/survivals", "/gta-online/series-modes/racing", "/gta-online/series-modes/adversary-modes", "/gta-online/series-modes/deathmatches", "/gta-online/special-interests/vehicles-enthusiast", "/gta-online/special-interests/weapons-expert", "/gta-online/community-challenge-dev", "/gta-online/businesses/agents-of-sabotage"],
        G = (e, a = {}) => {
          const n = (0, t.lazy)(e);
          return (0, t.useMemo)(() => (0, i.jsx)(t.Suspense, {
            fallback: "",
            children: (0, i.jsx)(n, {
              ...a
            })
          }), [])
        },
        $ = ({
          root: e
        }) => {
          const {
            pathname: a
          } = (0, v.useLocation)(), {
            setBrand: n
          } = (0, r.E_)();
          return (0, t.useMemo)(() => {
            const t = a.replace(/\/$/, "");
            return X.includes(t) ? (0, i.jsx)(x, {
              componentsForTinaParser: O.componentsForTinaParser,
              root: e,
              url: t,
              setBrand: n
            }) : null
          }, [a])
        },
        U = (0, T.A)(({
          routeRoot: e
        }) => {
          const a = [{
            path: "/",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/twitch-drops",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/benefits",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/join",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/feedback",
            element: (0, i.jsx)(E, {})
          }, {
            path: "/guides",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/guides/:guideId",
            element: (0, i.jsx)(M, {})
          }, {
            path: "/heists/:section",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/businesses/:section",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/recreation/:section",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/contact-missions/:section",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/career-progress",
            element: (0, i.jsx)(j.PackPage, {})
          }, {
            path: "/series-modes/:section",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/special-interests/:section",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/legal",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/prime-plus-offer",
            element: (0, i.jsx)($, {
              root: e
            })
          }, {
            path: "/license-plates",
            element: G(() => n.e(4547).then(n.t.bind(n, 74547, 23)))
          }, {
            path: "*",
            element: (0, i.jsx)(S.A, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, v.useRoutes)(a)
        }),
        L = ({
          config: e
        }) => {
          const {
            state: {
              headerHeight: a
            }
          } = (0, r.E_)();
          return (0, i.jsx)("div", {
            id: "content",
            "data-testid": "content",
            className: "rockstargames-sites-gta-gen9a29c63e4db7e389288025bf8f4a82598",
            children: (0, i.jsx)(U, {
              routeRoot: e?.routeRoot
            })
          })
        },
        q = JSON.parse('{"de-DE":{"discover_callout_cards_aria":"Spielerweiterungskarten","discover_callout_cta_label":"Fortschritt ansehen","discover_callout_description":"Sieh dir die Herausforderungen an, die du im Rahmen deiner Karriere in GTA Online abgeschlossen hast. Natürlich kannst du auch neue entdecken und wertvolle Belohnungen verdienen, während du in den Reihen der Kriminellen aufsteigst.","discover_callout_heading":"Karrierefortschritt","discover_callout_mugshot":"Verbrecherfoto von {userName}","elevator_pitch_available_on":"Nur auf","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation®5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Mitglied werden","elevator_pitch_member_benefit_label":"Mitgliedschaftsvorteile","summary_benefits_link_console_account":"Mitglied werden","tile_link_console_account":"Spielkonto verknüpfen","video_hero_pause_button_label":"Pausetaste","video_hero_play_button_label":"Wiedergabetaste","video_hero_support_message":"Dein Browser unterstützt die Wiedergabe von Videos nicht."},"en-US":{"discover_callout_cards_aria":"Pack Cards","discover_callout_cta_label":"Track Progress","discover_callout_description":"See all the challenges you\'ve completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks.","discover_callout_heading":"Career Progress","discover_callout_mugshot":"{userName} mugshot","elevator_pitch_available_on":"Only available on","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Join Now","elevator_pitch_member_benefit_label":"Member Benefits","summary_benefits_link_console_account":"Join Now","tile_link_console_account":"Link Game Account","video_hero_pause_button_label":"Pause button","video_hero_play_button_label":"Play button","video_hero_support_message":"Your browser does not support video reproduction."},"es-ES":{"discover_callout_cards_aria":"Tarjetas de pack","discover_callout_cta_label":"Ver tu progreso","discover_callout_description":"Descubre todos los desafíos que has completado en tu trayectoria en GTA Online. También puedes descubrir nuevos desafíos y obtener valiosas recompensas a medida que subes de rango en el mundo del crimen.","discover_callout_heading":"Progreso en la trayectoria","discover_callout_mugshot":"Foto de {userName}","elevator_pitch_available_on":"Solo disponible en","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Unirse ahora","elevator_pitch_member_benefit_label":"Ventajas para miembros","summary_benefits_link_console_account":"Unirse ahora","tile_link_console_account":"Vincular una cuenta de juego","video_hero_pause_button_label":"Botón de pausa","video_hero_play_button_label":"Botón de reproducción","video_hero_support_message":"Tu navegador no puede reproducir vídeos."},"es-MX":{"discover_callout_cards_aria":"Tarjetas de contenido descargable","discover_callout_cta_label":"Consulta tu progreso","discover_callout_description":"Consulta todos los desafíos que completaste en tu trayectoria en GTA Online. Además, descubre desafíos nuevos y obtén recompensas valiosas mientras avanzas en tu carrera criminal.","discover_callout_heading":"Progreso y trayectoria","discover_callout_mugshot":"Foto de {userName}","elevator_pitch_available_on":"Disponible solo en","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation®5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Únete ya","elevator_pitch_member_benefit_label":"Beneficios para miembros","summary_benefits_link_console_account":"Únete ya","tile_link_console_account":"Vincula tu cuenta de juego","video_hero_pause_button_label":"Botón de pausa","video_hero_play_button_label":"Botón de reproducción","video_hero_support_message":"Tu navegador no es compatible con la reproducción de video."},"fr-FR":{"discover_callout_cards_aria":"Cartes de suivi","discover_callout_cta_label":"Suivi de progression","discover_callout_description":"Consultez tous les défis que vous avez terminés au cours de votre carrière dans GTA Online. Vous pouvez également en découvrir de nouveaux et gagner de belles récompenses en gravissant les échelons de la criminalité.","discover_callout_heading":"Suivi de carrière","discover_callout_mugshot":"Photo d\'identité : {userName}","elevator_pitch_available_on":"Uniquement disponible sur","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"S’abonner","elevator_pitch_member_benefit_label":"Avantages pour les abonnés","summary_benefits_link_console_account":"S’abonner","tile_link_console_account":"Associer un compte de jeu","video_hero_pause_button_label":"Bouton Pause","video_hero_play_button_label":"Bouton Lecture","video_hero_support_message":"Votre navigateur ne prend pas en charge la reproduction de vidéo."},"it-IT":{"discover_callout_cards_aria":"Informazioni sui contenuti aggiuntivi","discover_callout_cta_label":"Tieni traccia dei progressi","discover_callout_description":"Vedi tutte le sfide che hai completato nella tua carriera di GTA Online. Puoi anche scoprirne di nuove e ottenere delle ricompense preziose mentre sali di rango nella tua carriera criminale.","discover_callout_heading":"Progressi della carriera","discover_callout_mugshot":"Foto segnaletica di {userName}","elevator_pitch_available_on":"Disponibile solo su","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Abbonati ora","elevator_pitch_member_benefit_label":"Vantaggi per i membri","summary_benefits_link_console_account":"Abbonati ora","tile_link_console_account":"Collega un account di gioco","video_hero_pause_button_label":"Pulsante pausa","video_hero_play_button_label":"Pulsante riproduzione","video_hero_support_message":"Il tuo browser non supporta la riproduzione di video."},"ja-JP":{"discover_callout_cards_aria":"パックカード","discover_callout_cta_label":"進行状況を確認","discover_callout_description":"「GTAオンライン」のキャリアで達成した全てのチャレンジを見ましょう。犯罪ランクを上っていくことで、新しいチャレンジを発見したり、貴重な報酬も獲得できます。","discover_callout_heading":"キャリア進行状況","discover_callout_mugshot":"{userName}顔写真","elevator_pitch_available_on":"これらのプラットフォーム限定","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation®5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"今すぐ参加","elevator_pitch_member_benefit_label":"メンバー特典","summary_benefits_link_console_account":"今すぐ参加","tile_link_console_account":"ゲームアカウントをリンクする","video_hero_pause_button_label":"ポーズボタン","video_hero_play_button_label":"プレイボタン","video_hero_support_message":"お使いのブラウザーはビデオの再生に対応していません。"},"ko-KR":{"discover_callout_cards_aria":"팩 카드","discover_callout_cta_label":"진행 상황 확인하기","discover_callout_description":"GTA 온라인 경력에서 완료한 모든 도전을 확인해 보십시오. 새로운 도전을 발견하고 범죄 제왕의 자리에 올라가면서 귀중한 보상을 획득해 보십시오.","discover_callout_heading":"경력 진행","discover_callout_mugshot":"{userName} 머그샷","elevator_pitch_available_on":"이용 가능한 플랫폼:","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"지금 가입","elevator_pitch_member_benefit_label":"멤버 혜택","summary_benefits_link_console_account":"지금 가입","tile_link_console_account":"게임 계정 연동하기","video_hero_pause_button_label":"일시 정지 버튼","video_hero_play_button_label":"재생 버튼","video_hero_support_message":"해당 브라우저에서 동영상 재생을 지원하지 않습니다."},"pl-PL":{"discover_callout_cards_aria":"Karty aktualizacji","discover_callout_cta_label":"Śledź postępy","discover_callout_description":"Zobacz wszystkie swoje ukończone wyzwania w ramach kariery GTA Online. Odkrywaj nowe wyzwania i zdobywaj wartościowe nagrody, wspinając się po szczeblach swojej przestępczej kariery.","discover_callout_heading":"Postępy kariery","discover_callout_mugshot":"Zdjęcie – {userName}","elevator_pitch_available_on":"Dostępne wyłącznie na","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Dołącz teraz","elevator_pitch_member_benefit_label":"Korzyści członkowskie","summary_benefits_link_console_account":"Dołącz teraz","tile_link_console_account":"Powiąż konto","video_hero_pause_button_label":"Przycisk zatrzymania","video_hero_play_button_label":"Przycisk odtwarzania","video_hero_support_message":"Twoja przeglądarka nie obsługuje odtwarzania video."},"pt-BR":{"discover_callout_cards_aria":"Quadros das atualizações","discover_callout_cta_label":"Ver Progresso","discover_callout_description":"Confira todos os desafios que você concluiu na sua carreira no GTA Online. Você também pode descobrir novos desafios e ganhar grandes recompensas conforme cresce na hierarquia do crime.","discover_callout_heading":"Progresso da Carreira","discover_callout_mugshot":"Foto de {userName}","elevator_pitch_available_on":"Disponível apenas para","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Afilie-se","elevator_pitch_member_benefit_label":"Benefícios para membros","summary_benefits_link_console_account":"Afilie-se","tile_link_console_account":"Vincular conta do jogo","video_hero_pause_button_label":"Botão Pausar","video_hero_play_button_label":"Botão Tocar","video_hero_support_message":"O seu navegador não tem suporte para reprodução de vídeo."},"ru-RU":{"discover_callout_cards_aria":"Карточки обновлений","discover_callout_cta_label":"Посмотреть свой прогресс","discover_callout_description":"Просмотрите все испытания, которые вы прошли в своей карьере GTA Online. Вы также можете открывать для себя новые испытания и зарабатывать ценные награды по мере того, как продвигаетесь в своей криминальной карьере.","discover_callout_heading":"Прогресс карьеры","discover_callout_mugshot":"Фотография игрока {userName}","elevator_pitch_available_on":"Доступно только на","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Оформить подписку","elevator_pitch_member_benefit_label":"Бонусы для подписчиков","summary_benefits_link_console_account":"Оформить подписку","tile_link_console_account":"Привязать игровую учетную запись","video_hero_pause_button_label":"Кнопка паузы","video_hero_play_button_label":"Кнопка воспроизведения","video_hero_support_message":"Ваш браузер не поддерживает воспроизведение видео."},"zh-CN":{"discover_callout_cards_aria":"内容包卡片","discover_callout_cta_label":"追踪进度","discover_callout_description":"查看您在 GTA 在线模式职业中完成的所有挑战。您还可在提升犯罪等级时发现新挑战并赚取价值不菲的奖励。","discover_callout_heading":"职业进度","discover_callout_mugshot":"{userName} 面部照片","elevator_pitch_available_on":"仅限 ","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"马上加入","elevator_pitch_member_benefit_label":"会员福利","summary_benefits_link_console_account":"马上加入","tile_link_console_account":"绑定游戏账户","video_hero_pause_button_label":"暂停键","video_hero_play_button_label":"播放键","video_hero_support_message":"您的浏览器不支持视频回放。"},"zh-TW":{"discover_callout_cards_aria":"內容包卡","discover_callout_cta_label":"追蹤進度","discover_callout_description":"查看您在 GTA 線上模式生涯中已完成的所有挑戰。您也可以探索新挑戰，在您一步一步登上犯罪事業巔峰時賺取豐厚獎勵。","discover_callout_heading":"生涯進度","discover_callout_mugshot":"{userName} 罪犯檔案照","elevator_pitch_available_on":"僅限於","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"現在加入","elevator_pitch_member_benefit_label":"會員福利","summary_benefits_link_console_account":"現在加入","tile_link_console_account":"連結遊戲帳戶","video_hero_pause_button_label":"暫停按鍵","video_hero_play_button_label":"播放按鍵","video_hero_support_message":"您的瀏覽器不支援影片播放。"}}'),
        R = ({
          config: e
        }) => {
          const {
            setBrand: a
          } = (0, r.E_)(), {
            setCharactersNeeded: n,
            setCrewsNeeded: o
          } = (0, s.useRockstarUserState)();
          return (0, t.useLayoutEffect)(() => (a("gtao"), n("gtao"), o("true"), () => {
            n(null), o(null)
          }), []), (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4a6a253366efef4ac53a8c3cf47844f",
            children: [(0, i.jsx)(_, {}), (0, i.jsx)(L, {
              config: e
            }), (0, i.jsx)(y, {})]
          })
        },
        Q = (0, l.withIntl)(({
          config: e
        }) => (0, i.jsx)(o.Z, {
          children: (0, i.jsx)(R, {
            config: e
          })
        }), q)
    }
  }
]);