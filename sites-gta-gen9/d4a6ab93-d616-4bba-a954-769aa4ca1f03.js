try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d4a6ab93-d616-4bba-a954-769aa4ca1f03", e._sentryDebugIdIdentifier = "sentry-dbid-d4a6ab93-d616-4bba-a954-769aa4ca1f03")
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
  [1660, 1919], {
    27975(e) {
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
          end: 306
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
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
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
    26662(e) {
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
    79600(e) {
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
    51660(e, a, n) {
      "use strict";
      n.r(a), n.d(a, {
        default: () => i.default
      });
      var i = n(31919)
    },
    31919(e, a, n) {
      "use strict";
      n.r(a), n.d(a, {
        default: () => H
      });
      var i = n(39793),
        t = n(93082),
        o = n(93673),
        l = n(24753),
        s = n(42909),
        r = n(67598),
        c = n(38044),
        _ = n(82199),
        d = n(13331);
      const u = {
          activeLink: "rockstargames-sites-gta-gen9b9fb942404b67a1050524f060ee3ace6",
          mobileNav: "rockstargames-sites-gta-gen9c9fab376299c39a26e18141999de2402",
          mobileNavOpen: "rockstargames-sites-gta-gen9a6d5488a32320301a9036ed9da96cbe0",
          pillBtn: "rockstargames-sites-gta-gen9ca8f6c3576718c050d5f2b4383286e82",
          selected: "rockstargames-sites-gta-gen9ac75fe9dcd52264673c32ae31d7f8669"
        },
        m = (0, d.withTranslations)(({
          t: e
        }) => {
          const a = (0, r.hI)(),
            {
              track: n
            } = (0, _.useGtmTrack)(),
            {
              state: {
                headerHeight: o,
                mobileNavOpen: l
              },
              setMobileNavOpen: s
            } = (0, r.E_)(),
            [d, m] = (0, t.useState)(!1);
          return (0, t.useEffect)(() => {
            const e = () => {
              window.innerWidth > 1024 ? m(!1) : m(!0)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []), (0, t.useEffect)(() => {
            const e = ({
              keyCode: e
            }) => {
              27 === e && s(!1)
            };
            return document.addEventListener("keydown", e, !1), () => {
              document.removeEventListener("keydown", e, !1)
            }
          }, []), (0, i.jsx)("nav", {
            className: [u.mobileNav, l ? u.mobileNavOpen : ""].join(" "),
            style: {
              "--header-height": `${o}px`
            },
            "aria-hidden": !d,
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
      var v = n(36416),
        p = n(17301),
        b = n(4522),
        k = n(62777),
        g = n(74455),
        f = n(79600);
      const h = "rockstargames-sites-gta-gen9e1700f22ef2633cdb13fe46819b9250f",
        S = {
          BuyNow: b.A,
          TinaWrapper: k.A
        },
        y = ["info", "videoId"],
        N = () => {
          const {
            setBodyIsLocked: e
          } = (0, d.useBodyScrollable)("ModalContent"), {
            track: a
          } = (0, _.useGtmTrack)(), [n, o] = (0, v.useSearchParams)(), {
            data: s
          } = (0, d.useQuery)(f.BuyNowQ, {
            variables: {
              ids: ["6a84"]
            }
          }), [r, c] = (0, l.h)(), u = n.get("info");
          return (0, t.useEffect)(() => {
            e(!!r)
          }, [r]), (0, t.useEffect)(() => {
            const e = "order" !== u && "trailer" !== u && n.get("videoId");
            if (u || n.get("videoId")) {
              if (e) {
                const e = (0, i.jsx)(g.A, {
                    id: n.get("videoId")
                  }),
                  t = {
                    left: window.innerWidth / 2,
                    top: window.innerHeight / 2
                  };
                c({
                  content: e,
                  rect: t,
                  contentStyle: {
                    overflow: "hidden"
                  },
                  contentClassName: h,
                  onClose: () => {
                    o(e => (y.forEach(a => {
                      e.delete(a)
                    }), e), {
                      replace: !0
                    }), a({
                      event: "modal_close"
                    })
                  }
                }), a({
                  event: "trackPageview",
                  card_id: n.get("videoId"),
                  card_name: "video"
                })
              }
            } else c(null)
          }, [n]), (0, t.useEffect)(() => {
            if ("order" !== u || !s) return;
            const e = s?.tinaModulesInfo?.[0].tina,
              n = (0, i.jsx)(p.TinaParser, {
                components: {
                  gen9: S
                },
                tina: e
              }),
              t = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            c({
              content: n,
              contentClassName: "rockstargames-sites-gta-gen9b82ef78a8a5f1b14aec5b2a543ccf951",
              contentStyle: {
                "--modal-content-max-width": "100%",
                "--modal-content-padding": "calc(var(--modal-padding) + var(--padding-md)) var(--padding-lg) var(--padding-lg)",
                "--modal-height": "100vh"
              },
              rect: t,
              onClose: () => {
                o(e => (y.forEach(a => {
                  e.delete(a)
                }), e), {
                  replace: !0
                }), a({
                  event: "modal_close"
                })
              }
            }), a({
              event: "trackPageview",
              card_id: "order",
              card_name: "order"
            })
          }, [s, u, n, c, o, a]), (0, t.useEffect)(() => {
            if ("trailer" !== u) return;
            const e = (0, i.jsx)(g.A, {
                id: "12258"
              }),
              n = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            c({
              content: e,
              rect: n,
              contentStyle: {
                overflow: "hidden"
              },
              contentClassName: h,
              onClose: () => {
                o(e => (y.forEach(a => {
                  e.delete(a)
                }), e), {
                  replace: !0
                }), a({
                  event: "modal_close"
                })
              }
            }), a({
              event: "trackPageview",
              card_id: "trailer",
              card_name: "trailer"
            })
          }, [u, c, o, a]), r
        };
      var w = n(60982),
        x = n(59426),
        j = n(27975);
      const T = (0, x.A)(({
        componentsForTinaParser: e,
        root: a,
        url: n,
        setBrand: o
      }) => {
        const {
          data: l
        } = (0, d.useQuery)(j.MetaUrlInfo, {
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
          children: (0, i.jsx)(p.TinaParser, {
            components: e,
            tina: s
          })
        }) : null
      });
      var P = n(14159),
        V = n(34649),
        F = n(56263),
        A = n(26662);
      const E = () => (0, i.jsx)("span", {
        className: "rockstargames-sites-gta-gen9a770c6b0d9ce5d924a80290e03ab89aa",
        children: (0, i.jsx)(F.default, {
          query: A.FeedbackSteps,
          mutation: A.SubmitFeedback,
          type: "gtao"
        })
      });
      var C = n(32255),
        z = n(85531),
        D = n(40283),
        I = n(8830);
      const M = (0, s.defineMessages)({
          jump_to_menu_label: {
            id: "jump_to_menu_label",
            description: "Label for a menu item button on mobile",
            defaultMessage: "Jump To"
          },
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
        O = {
          activeSection: "rockstargames-sites-gta-gen9b475bb505960a8474b487af0d9da188f",
          chevronIcon: "rockstargames-sites-gta-gen9f072c660676205863af4e40b104b39da",
          guideNavMobile: "rockstargames-sites-gta-gen9e9ae9cb7e211802c352da258be7f2759",
          guideNavMobileContent: "rockstargames-sites-gta-gen9de43dc4a16c82e4c11c4d1d201c2bfcb",
          jumpToButton: "rockstargames-sites-gta-gen9fcb862a14f937e422cadd103e2a56a0c",
          pillBtn: "rockstargames-sites-gta-gen9e053ac971a9aaeba0baa908802af12ec",
          sections: "rockstargames-sites-gta-gen9bf056804ab1fbd52973a9d9db2982e10",
          sectionsOpen: "rockstargames-sites-gta-gen9efc73eed6fe6a214625874ec23311a52",
          selected: "rockstargames-sites-gta-gen9bbfee46a8ca8593ff2b49333eec2c057"
        },
        B = ({
          currentId: e
        }) => {
          const {
            track: a
          } = (0, _.useGtmTrack)(), {
            formatMessage: n
          } = (0, s.useIntl)(), o = (0, r.hY)(), [l, d] = (0, t.useState)(!1), [u, m] = (0, t.useState)(null), [p, b] = (0, t.useState)(null), [k] = (0, v.useSearchParams)();
          if ((0, t.useEffect)(() => {
              (0, D.cloneDeepWith)(o, (a, n, i) => {
                e === a && m(i?.children ?? null)
              })
            }, [e, o, k.get("section")]), (0, t.useEffect)(() => {
              b(null), (0, D.cloneDeepWith)(u, (e, a, n) => {
                "id_hash" === a && k.get("section") === e && b(n)
              })
            }, [u, k.get("section")]), !u) return null;
          const g = () => {
            d(!1), a({
              event: "nav_click",
              element_placement: "guide nav"
            })
          };
          return (0, i.jsx)("div", {
            className: O.guideNavMobile,
            children: (0, i.jsxs)("div", {
              className: O.guideNavMobileContent,
              children: [(0, i.jsx)("div", {
                id: "guide-nav-menu",
                className: [O.sections, l ? O.sectionsOpen : ""].join(" "),
                children: u.map(({
                  id_hash: e,
                  title: a,
                  to: n
                }) => (0, i.jsx)(c.A, {
                  className: e === p?.id_hash ? O.activeSection : "",
                  to: n,
                  onClick: g,
                  children: a
                }, n))
              }), (0, i.jsxs)("button", {
                className: O.jumpToButton,
                "aria-expanded": l,
                type: "button",
                onClick: () => d(!l),
                "aria-controls": "guide-nav-menu",
                children: [n(M.jump_to_menu_label), (0, i.jsx)(I.ChevronDown, {
                  className: O.chevronIcon,
                  label: n(M.close_icon_aria_label)
                })]
              })]
            })
          })
        };
      var G = n(56558);
      const X = (0, x.A)(() => {
          const {
            setBrand: e
          } = (0, r.E_)();
          (0, t.useEffect)(() => {
            e("gtao")
          }, []);
          const {
            guideId: a
          } = (0, v.useParams)(), n = (0, C.X)({
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
              children: [(0, i.jsx)(z.A, {
                currentId: a
              }), e ? (0, i.jsx)(p.TinaParser, {
                components: G.componentsForTinaParserGuide,
                tina: e
              }) : "", (0, i.jsx)(B, {
                currentId: a
              })]
            })
          }, [JSON.stringify(n)])
        }),
        $ = ["/gta-v", "/gta-online", "/gta-online/guides", "/gta-online/prime-plus-offer", "/gta-plus", "/gta-plus/benefits", "/gta-plus/join", "/gta-plus/legal", "/gta-online/license-plates", "/gta-online/heists/lsdw", "/gta-online/heists/cayo-perico-heist", "/gta-online/heists/diamond-casino-heist", "/gta-online/heists/doomsday-heist", "/gta-online/heists/original-heists", "/gta-online/businesses/bottom-dollar-bounties", "/gta-online/businesses/drug-wars", "/gta-online/businesses/the-contract", "/gta-online/businesses/after-hours", "/gta-online/businesses/smugglers-run", "/gta-online/businesses/gunrunning", "/gta-online/businesses/bikers", "/gta-online/businesses/finance-and-felony", "/gta-online/businesses/import-export", "/gta-online/businesses/chop-shop", "/gta-online/businesses/money-fronts", "/gta-online/businesses/agents-of-sabotage", "/gta-online/recreation/los-santos-tuners", "/gta-online/recreation/diamond-casino-resort", "/gta-online/contact-missions/operation-paper-trail", "/gta-online/contact-missions/oscar-guzman-flies-again", "/gta-online/contact-missions/san-andreas-mercenaries", "/gta-online/contact-missions/superyacht-life", "/gta-online/contact-missions/last-play", "/gta-online/contact-missions/premium-deluxe-repo", "/gta-online/contact-missions/dispatch-services", "/gta-online/contact-missions/lowriders", "/gta-online/contact-missions/cluckin-bell-farm-raid", "/gta-online/contact-missions/a-safehouse-in-the-hills", "/gta-online/career-progress", "/gta-online/mansions", "/gta-online/twitch-drops", "/gta-online/series-modes/arena-war", "/gta-online/series-modes/survivals", "/gta-online/series-modes/racing", "/gta-online/series-modes/adversary-modes", "/gta-online/series-modes/deathmatches", "/gta-online/special-interests/vehicles-enthusiast", "/gta-online/special-interests/weapons-expert"],
        L = (e, a = {}) => {
          const n = (0, t.lazy)(e);
          return (0, t.useMemo)(() => (0, i.jsx)(t.Suspense, {
            fallback: "",
            children: (0, i.jsx)(n, {
              ...a
            })
          }), [])
        },
        U = ({
          root: e
        }) => {
          const {
            pathname: a
          } = (0, v.useLocation)(), {
            setBrand: n
          } = (0, r.E_)();
          return (0, t.useMemo)(() => {
            const t = a.replace(/\/$/, "");
            return $.includes(t) ? (0, i.jsx)(T, {
              componentsForTinaParser: G.componentsForTinaParser,
              root: e,
              url: t,
              setBrand: n
            }) : null
          }, [a])
        },
        q = (0, P.A)(({
          routeRoot: e
        }) => {
          const a = [{
            path: "/",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/twitch-drops",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/benefits",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/join",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/feedback",
            element: (0, i.jsx)(E, {})
          }, {
            path: "/guides",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/guides/:guideId",
            element: (0, i.jsx)(X, {})
          }, {
            path: "/heists/:section",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/businesses/:section",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/recreation/:section",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/contact-missions/:section",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/career-progress",
            element: (0, i.jsx)(V.PackPage, {})
          }, {
            path: "/series-modes/:section",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/special-interests/:section",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/legal",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/prime-plus-offer",
            element: (0, i.jsx)(U, {
              root: e
            })
          }, {
            path: "/license-plates",
            element: L(() => n.e(4547).then(n.t.bind(n, 74547, 23)))
          }, {
            path: "*",
            element: (0, i.jsx)(w.A, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, v.useRoutes)(a)
        }),
        J = ({
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
            children: (0, i.jsx)(q, {
              routeRoot: e?.routeRoot
            })
          })
        },
        R = JSON.parse('{"de-DE":{"close_icon_aria_label":"Schließen","discover_callout_cards_aria":"Spielerweiterungskarten","discover_callout_cta_label":"Fortschritt ansehen","discover_callout_description":"Sieh dir die Herausforderungen an, die du im Rahmen deiner Karriere in GTA Online abgeschlossen hast. Natürlich kannst du auch neue entdecken und wertvolle Belohnungen verdienen, während du in den Reihen der Kriminellen aufsteigst.","discover_callout_heading":"Karrierefortschritt","discover_callout_mugshot":"Verbrecherfoto von {userName}","elevator_pitch_available_on":"Nur auf","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation®5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Mitglied werden","elevator_pitch_member_benefit_label":"Mitgliedschaftsvorteile","jump_to_menu_label":"Gehe zu","next_button_aria_label":"Nächstes Spiel","open_icon_aria_label":"Öffnen","previous_button_aria_label":"Vorheriges Spiel","skip_to_content":"Zum Hauptinhalt springen","summary_benefits_link_console_account":"Mitglied werden","tile_link_console_account":"Spielkonto verknüpfen","value_prop_jump_link_label":"(Zu Abschnitt springen)","video_hero_pause_button_label":"Video pausiert","video_hero_play_button_label":"Video wird wiedergegeben","video_hero_support_message":"Dein Browser unterstützt die Wiedergabe von Videos nicht."},"en-US":{"close_icon_aria_label":"Close","discover_callout_cards_aria":"Pack Cards","discover_callout_cta_label":"Track Progress","discover_callout_description":"See all the challenges you\'ve completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks.","discover_callout_heading":"Career Progress","discover_callout_mugshot":"{userName} mugshot","elevator_pitch_available_on":"Only available on","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Join Now","elevator_pitch_member_benefit_label":"Member Benefits","jump_to_menu_label":"Jump To","next_button_aria_label":"Next Game","open_icon_aria_label":"Open","previous_button_aria_label":"Previous Game","skip_to_content":"Skip to Main Content","summary_benefits_link_console_account":"Join Now","tile_link_console_account":"Link Game Account","value_prop_jump_link_label":"(Skip to section)","video_hero_pause_button_label":"Video Paused","video_hero_play_button_label":"Video Playing","video_hero_support_message":"Your browser does not support video reproduction."},"es-ES":{"close_icon_aria_label":"Cerrar","discover_callout_cards_aria":"Tarjetas de pack","discover_callout_cta_label":"Ver tu progreso","discover_callout_description":"Descubre todos los desafíos que has completado en tu trayectoria en GTA Online. También puedes descubrir nuevos desafíos y obtener valiosas recompensas a medida que subes de rango en el mundo del crimen.","discover_callout_heading":"Progreso en la trayectoria","discover_callout_mugshot":"Foto de {userName}","elevator_pitch_available_on":"Solo disponible en","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Unirse ahora","elevator_pitch_member_benefit_label":"Ventajas para miembros","jump_to_menu_label":"Saltar a","next_button_aria_label":"Juego siguiente","open_icon_aria_label":"Abrir","previous_button_aria_label":"Juego anterior","skip_to_content":"Pasar al contenido principal","summary_benefits_link_console_account":"Unirse ahora","tile_link_console_account":"Vincular una cuenta de juego","value_prop_jump_link_label":"(Ir a la sección)","video_hero_pause_button_label":"Vídeo en pausa","video_hero_play_button_label":"Reproduciendo vídeo","video_hero_support_message":"Tu navegador no puede reproducir vídeos."},"es-MX":{"close_icon_aria_label":"Cerrar","discover_callout_cards_aria":"Tarjetas de contenido descargable","discover_callout_cta_label":"Consulta tu progreso","discover_callout_description":"Consulta todos los desafíos que completaste en tu trayectoria en GTA Online. Además, descubre desafíos nuevos y obtén recompensas valiosas mientras avanzas en tu carrera criminal.","discover_callout_heading":"Progreso y trayectoria","discover_callout_mugshot":"Foto de {userName}","elevator_pitch_available_on":"Disponible solo en","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Únete ya","elevator_pitch_member_benefit_label":"Beneficios para miembros","jump_to_menu_label":"Salta a","next_button_aria_label":"Siguiente juego","open_icon_aria_label":"Abrir","previous_button_aria_label":"Juego anterior","skip_to_content":"Ir al contenido principal","summary_benefits_link_console_account":"Únete ya","tile_link_console_account":"Vincula tu cuenta de juego","value_prop_jump_link_label":"(Ir a la sección)","video_hero_pause_button_label":"Video en pausa","video_hero_play_button_label":"Reproduciendo video","video_hero_support_message":"Tu navegador no es compatible con la reproducción de videos."},"fr-FR":{"close_icon_aria_label":"Fermer","discover_callout_cards_aria":"Cartes de suivi","discover_callout_cta_label":"Suivi de progression","discover_callout_description":"Consultez tous les défis que vous avez terminés au cours de votre carrière dans GTA Online. Vous pouvez également en découvrir de nouveaux et gagner de belles récompenses en gravissant les échelons de la criminalité.","discover_callout_heading":"Suivi de carrière","discover_callout_mugshot":"Photo d\'identité : {userName}","elevator_pitch_available_on":"Uniquement disponible sur","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"S’abonner","elevator_pitch_member_benefit_label":"Avantages pour les abonnés","jump_to_menu_label":"Se rendre à","next_button_aria_label":"Jeu suivant","open_icon_aria_label":"Ouvrir","previous_button_aria_label":"Jeu précédent","skip_to_content":"Passer au contenu principal","summary_benefits_link_console_account":"S’abonner","tile_link_console_account":"Associer un compte de jeu","value_prop_jump_link_label":"(Passer à la section)","video_hero_pause_button_label":"Vidéo mise en pause","video_hero_play_button_label":"Vidéo en cours de lecture","video_hero_support_message":"Votre navigateur ne prend pas en charge la reproduction de vidéo."},"it-IT":{"close_icon_aria_label":"Chiudi","discover_callout_cards_aria":"Informazioni sui contenuti aggiuntivi","discover_callout_cta_label":"Tieni traccia dei progressi","discover_callout_description":"Vedi tutte le sfide che hai completato nella tua carriera di GTA Online. Puoi anche scoprirne di nuove e ottenere delle ricompense preziose mentre sali di rango nella tua carriera criminale.","discover_callout_heading":"Progressi della carriera","discover_callout_mugshot":"Foto segnaletica di {userName}","elevator_pitch_available_on":"Disponibile solo su","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Abbonati ora","elevator_pitch_member_benefit_label":"Vantaggi per i membri","jump_to_menu_label":"Salta a","next_button_aria_label":"Prossimo gioco","open_icon_aria_label":"Apri","previous_button_aria_label":"Gioco precedente","skip_to_content":"Vai ai contenuti principali","summary_benefits_link_console_account":"Abbonati ora","tile_link_console_account":"Collega un account di gioco","value_prop_jump_link_label":"(Salta alla sezione)","video_hero_pause_button_label":"Video in pausa","video_hero_play_button_label":"Video in riproduzione","video_hero_support_message":"Il tuo browser non supporta la riproduzione di video."},"ja-JP":{"close_icon_aria_label":"閉じる","discover_callout_cards_aria":"パックカード","discover_callout_cta_label":"進行状況を確認","discover_callout_description":"「GTAオンライン」のキャリアで達成した全てのチャレンジを見ましょう。犯罪ランクを上っていくことで、新しいチャレンジを発見したり、貴重な報酬も獲得できます。","discover_callout_heading":"キャリア進行状況","discover_callout_mugshot":"{userName}顔写真","elevator_pitch_available_on":"これらのプラットフォーム限定","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation®5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"今すぐ参加","elevator_pitch_member_benefit_label":"メンバー特典","jump_to_menu_label":"移動する","next_button_aria_label":"次のゲーム","open_icon_aria_label":"開く","previous_button_aria_label":"前のゲーム","skip_to_content":"メインコンテンツまでスキップ","summary_benefits_link_console_account":"今すぐ参加","tile_link_console_account":"ゲームアカウントをリンクする","value_prop_jump_link_label":"(セクションへスキップ)","video_hero_pause_button_label":"ビデオ一時停止中","video_hero_play_button_label":"ビデオ再生中","video_hero_support_message":"お使いのブラウザーはビデオの再生に対応していません。"},"ko-KR":{"close_icon_aria_label":"닫기","discover_callout_cards_aria":"팩 카드","discover_callout_cta_label":"진행 상황 확인하기","discover_callout_description":"GTA 온라인 경력에서 완료한 모든 도전을 확인해 보십시오. 새로운 도전을 발견하고 범죄 제왕의 자리에 올라가면서 귀중한 보상을 획득해 보십시오.","discover_callout_heading":"경력 진행","discover_callout_mugshot":"{userName} 머그샷","elevator_pitch_available_on":"이용 가능한 플랫폼:","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"지금 가입","elevator_pitch_member_benefit_label":"멤버 혜택","jump_to_menu_label":"바로 이동하기","next_button_aria_label":"다음 게임","open_icon_aria_label":"열기","previous_button_aria_label":"이전 게임","skip_to_content":"주 콘텐츠로 건너뛰기","summary_benefits_link_console_account":"지금 가입","tile_link_console_account":"게임 계정 연동하기","value_prop_jump_link_label":"(섹션으로 건너뛰기)","video_hero_pause_button_label":"비디오 일시정지","video_hero_play_button_label":"비디오 재생 중","video_hero_support_message":"해당 브라우저에서 동영상 재생을 지원하지 않습니다."},"pl-PL":{"close_icon_aria_label":"Zamknij","discover_callout_cards_aria":"Karty aktualizacji","discover_callout_cta_label":"Śledź postępy","discover_callout_description":"Zobacz wszystkie swoje ukończone wyzwania w ramach kariery GTA Online. Odkrywaj nowe wyzwania i zdobywaj wartościowe nagrody, wspinając się po szczeblach swojej przestępczej kariery.","discover_callout_heading":"Postępy kariery","discover_callout_mugshot":"Zdjęcie – {userName}","elevator_pitch_available_on":"Dostępne wyłącznie na","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Dołącz teraz","elevator_pitch_member_benefit_label":"Korzyści członkowskie","jump_to_menu_label":"Przejdź do","next_button_aria_label":"Następna gra","open_icon_aria_label":"Otwórz","previous_button_aria_label":"Poprzednia gra","skip_to_content":"Przejdź do głównej treści","summary_benefits_link_console_account":"Dołącz teraz","tile_link_console_account":"Powiąż konto","value_prop_jump_link_label":"(Przejdź do sekcji)","video_hero_pause_button_label":"Wideo wstrzymane","video_hero_play_button_label":"Teraz odtwarzane","video_hero_support_message":"Twoja przeglądarka nie obsługuje odtwarzania wideo."},"pt-BR":{"close_icon_aria_label":"Fechar","discover_callout_cards_aria":"Quadros das atualizações","discover_callout_cta_label":"Ver Progresso","discover_callout_description":"Confira todos os desafios que você concluiu na sua carreira no GTA Online. Você também pode descobrir novos desafios e ganhar grandes recompensas conforme cresce na hierarquia do crime.","discover_callout_heading":"Progresso da Carreira","discover_callout_mugshot":"Foto de {userName}","elevator_pitch_available_on":"Disponível apenas para","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Afilie-se","elevator_pitch_member_benefit_label":"Benefícios para membros","jump_to_menu_label":"Pular para","next_button_aria_label":"Próximo Jogo","open_icon_aria_label":"Abrir","previous_button_aria_label":"Jogo anterior","skip_to_content":"Pular para o conteúdo principal","summary_benefits_link_console_account":"Afilie-se","tile_link_console_account":"Vincular conta do jogo","value_prop_jump_link_label":"(Pular para seção)","video_hero_pause_button_label":"Vídeo pausado","video_hero_play_button_label":"Vídeo em reprodução","video_hero_support_message":"O seu navegador não tem suporte para reprodução de vídeo."},"ru-RU":{"close_icon_aria_label":"Закрыть","discover_callout_cards_aria":"Карточки обновлений","discover_callout_cta_label":"Посмотреть свой прогресс","discover_callout_description":"Просмотрите все испытания, которые вы прошли в своей карьере GTA Online. Вы также можете открывать для себя новые испытания и зарабатывать ценные награды по мере того, как продвигаетесь в своей криминальной карьере.","discover_callout_heading":"Прогресс карьеры","discover_callout_mugshot":"Фотография игрока {userName}","elevator_pitch_available_on":"Доступно только на","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Оформить подписку","elevator_pitch_member_benefit_label":"Бонусы для подписчиков","jump_to_menu_label":"Перейти к","next_button_aria_label":"Следующая игра","open_icon_aria_label":"Открыть","previous_button_aria_label":"Предыдущая игра","skip_to_content":"Перейти к основному разделу","summary_benefits_link_console_account":"Оформить подписку","tile_link_console_account":"Привязать игровую учетную запись","value_prop_jump_link_label":"(Перейти к разделу)","video_hero_pause_button_label":"Видео приостановлено","video_hero_play_button_label":"Воспроизведение видео","video_hero_support_message":"Ваш браузер не поддерживает воспроизведение видео."},"zh-CN":{"close_icon_aria_label":"关闭","discover_callout_cards_aria":"内容包卡片","discover_callout_cta_label":"追踪进度","discover_callout_description":"查看您在GTA在线模式职业中完成的所有挑战。您还可在提升犯罪等级时发现新挑战并赚取价值不菲的奖励。","discover_callout_heading":"职业进度","discover_callout_mugshot":"{userName}面部照片","elevator_pitch_available_on":"仅限","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"马上加入","elevator_pitch_member_benefit_label":"会员福利","jump_to_menu_label":"跳转至","next_button_aria_label":"下一个游戏","open_icon_aria_label":"打开","previous_button_aria_label":"上一个游戏","skip_to_content":"跳至主要内容","summary_benefits_link_console_account":"马上加入","tile_link_console_account":"绑定游戏账户","value_prop_jump_link_label":"（跳至区域）","video_hero_pause_button_label":"视频已暂停","video_hero_play_button_label":"视频播放中","video_hero_support_message":"您的浏览器不支持视频回放。"},"zh-TW":{"close_icon_aria_label":"關閉","discover_callout_cards_aria":"內容包卡","discover_callout_cta_label":"追蹤進度","discover_callout_description":"查看您在 GTA 線上模式生涯中已完成的所有挑戰。您也可以探索新挑戰，在您一步一步登上犯罪事業巔峰時賺取豐厚獎勵。","discover_callout_heading":"生涯進度","discover_callout_mugshot":"{userName} 罪犯檔案照","elevator_pitch_available_on":"僅限於","elevator_pitch_available_on_pc":"PC","elevator_pitch_available_on_ps5":"PlayStation5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"現在加入","elevator_pitch_member_benefit_label":"會員福利","jump_to_menu_label":"跳至","next_button_aria_label":"下一個遊戲","open_icon_aria_label":"開啟","previous_button_aria_label":"上一個遊戲","skip_to_content":"跳過至主內容","summary_benefits_link_console_account":"現在加入","tile_link_console_account":"連結遊戲帳戶","value_prop_jump_link_label":"（跳過至頁籤）","video_hero_pause_button_label":"影片已暫停","video_hero_play_button_label":"正播放影片","video_hero_support_message":"您的瀏覽器不支援影片播放。"}}'),
        Q = (0, s.defineMessages)({
          skip_to_main: {
            id: "skip_to_content",
            description: "Text for the Skip to Main Content button",
            defaultMessage: "Skip to Main Content"
          }
        }),
        W = ({
          config: e
        }) => {
          const {
            setBrand: a
          } = (0, r.E_)(), {
            formatMessage: n
          } = (0, s.useIntl)();
          (0, t.useLayoutEffect)(() => {
            a("gtao")
          }, []);
          const l = (0, t.useCallback)(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }, []);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Button, {
              size: "SM",
              appearance: "primary",
              className: "rockstargames-sites-gta-gen9e601fc2a840e2eab012e60f29878fbbf",
              onClick: l,
              children: n(Q.skip_to_main)
            }), (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c4a6a253366efef4ac53a8c3cf47844f",
              children: [(0, i.jsx)(m, {}), (0, i.jsx)(J, {
                config: e
              }), (0, i.jsx)(N, {})]
            })]
          })
        },
        H = (0, s.withIntl)(({
          config: e
        }) => (0, i.jsx)(l.Z, {
          children: (0, i.jsx)(W, {
            config: e
          })
        }), R)
    }
  }
]);