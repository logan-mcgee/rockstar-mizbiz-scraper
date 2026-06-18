try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9612bb32-da0f-4c24-9ed4-3368ba593e6f", e._sentryDebugIdIdentifier = "sentry-dbid-9612bb32-da0f-4c24-9ed4-3368ba593e6f")
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
  [6936], {
    85705(e) {
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

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          i(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          i(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          i(e, a)
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

      function n(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var s = e.definitions[i];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var i = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var r = s[a] || new Set,
          t = new Set,
          d = new Set;
        for (r.forEach(function(e) {
            d.add(e)
          }); d.size > 0;) {
          var c = d;
          d = new Set, c.forEach(function(e) {
            t.has(e) || (t.add(e), (s[e] || new Set).forEach(function(e) {
              d.add(e)
            }))
          })
        }
        return t.forEach(function(a) {
          var s = n(e, a);
          s && i.definitions.push(s)
        }), i
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.TinaModulesList = r(a, "TinaModulesList"), e.exports.TinaModulesInfo = r(a, "TinaModulesInfo")
    },
    41926(e, a, i) {
      "use strict";
      i.d(a, {
        A: () => r
      });
      var s = i(76589),
        n = i(25847);
      const r = (e = {
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
          label: (0, n._e)(`${e?.name??e?.[s.Qw]?.content??"New"} [List Item]`)
        })
      })
    },
    28851(e, a, i) {
      "use strict";
      i.d(a, {
        A: () => m
      });
      var s = i(39793),
        n = i(93082),
        r = i(91681),
        t = i.n(r),
        d = i(13331),
        c = i(81270);
      const l = {
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
          sanitize: o
        } = t(),
        m = ({
          list: e,
          string: a,
          starColor: i,
          style: r,
          className: t,
          game: m,
          noImg: u,
          columns: f,
          mobileColumns: k
        }) => {
          const [b, g] = (0, n.useState)(null);
          if ((0, n.useEffect)(() => {
              g(e)
            }, [e]), !a && !e) return null;
          const w = {
            color: r?.color
          };
          return delete r?.color, f && b ? (0, s.jsx)("div", {
            className: l.grid,
            style: {
              "--ordered-list-grid-column": f,
              "--ordered-list-grid-column-mobile": k ?? f
            },
            children: (0, s.jsx)("ol", {
              className: (0, c.default)(l.itemList, l.noImg, l[i], l[m]),
              style: (0, d.safeStyles)(r),
              children: b.map(e => (0, s.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: o(e.content)
                },
                style: w
              }, e.content))
            })
          }) : (0, s.jsx)("ol", {
            style: (0, d.safeStyles)(r),
            className: (0, c.default)(l.itemList, l.custom, u ? l.noImg : "", i ? l[i] : "", m ? l[m] : "", t ?? ""),
            children: e.map(e => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: o(e?.content ?? e)
              }
            }, e?.content))
          })
        }
    },
    67359(e, a, i) {
      "use strict";
      i.d(a, {
        A: () => t
      });
      var s = i(39793),
        n = i(13331);
      const r = {
          responsiveImage: "rockstargames-modules-core-newswire-articlef642b754e0efd503262ab7ca0c7b9f5b"
        },
        t = ({
          src: e,
          className: a = "",
          animate: i,
          ariaLabel: t,
          style: d = {}
        }) => {
          const [c, l] = (0, n.usePreloadImg)(e);
          if (!c) return null;
          d.backgroundImage = `url(${e})`;
          const o = {
            ...d
          };
          return l && (o["--aspect-ratio"] = l.width / l.height), (0, s.jsx)("div", {
            role: "img",
            "aria-label": t ?? "R* Games",
            className: [r.responsiveImage, i ? r.animateBox : "", a].join(" "),
            style: o
          })
        }
    },
    12334(e, a, i) {
      "use strict";
      i.d(a, {
        A: () => m
      });
      var s = i(39793),
        n = i(93082),
        r = i(91681),
        t = i.n(r),
        d = i(13331),
        c = i(81270);
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
          sanitize: o
        } = t(),
        m = ({
          list: e,
          string: a,
          starColor: i,
          style: r,
          className: t,
          game: m,
          noImg: u,
          columns: f,
          mobileColumns: k
        }) => {
          const [b, g] = (0, n.useState)(null), w = a ? a.split("_#_") : e;
          if ((0, n.useEffect)(() => {
              g(e)
            }, [e]), !a && !e) return null;
          const v = {
            color: r?.color
          };
          return delete r?.color, f && b ? (0, s.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": f,
              "--unordered-list-grid-column-mobile": k ?? f
            },
            children: (0, s.jsx)("ul", {
              className: (0, c.default)(l.itemList, l.noImg, l[i], l[m]),
              style: (0, d.safeStyles)(r),
              children: b.map((e, a) => (0, s.jsx)("li", {
                style: v,
                dangerouslySetInnerHTML: {
                  __html: o(e.content)
                }
              }, a))
            })
          }) : (0, s.jsx)("ul", {
            style: (0, d.safeStyles)(r),
            className: (0, c.default)(l.itemList, l.custom, u ? l.noImg : "", i ? l[i] : "", m ? l[m] : "", t ?? ""),
            children: w.map((e, a) => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: o(e?.content ?? e)
              }
            }, a))
          })
        }
    },
    32118(e, a, i) {
      "use strict";
      i.d(a, {
        t: () => r
      });
      var s = i(42909),
        n = i(39991);
      const r = async ({
        service: e,
        returnUrl: a,
        pingBearer: i
      }) => {
        const [{
          iso: r
        }] = (0, s.getLocale)(), {
          authHost: t,
          clientId: d
        } = (0, n.A)(), c = await i(), l = new URL(`tpa/${e}/link`, `https://${t}.rockstargames.com`);
        return l.searchParams.append("cid", d), l.searchParams.append("lang", r), l.searchParams.append("returnUrl", a ?? window.location.pathname), c && "boolean" != typeof c && "string" == typeof c.bearerToken && l.searchParams.append("accessToken", c.bearerToken), l
      }
    },
    39991(e, a, i) {
      "use strict";
      i.d(a, {
        A: () => d
      });
      const s = window?.env?.sc,
        n = window?.env?.marketing,
        r = ({
          apiHost: e,
          authHost: a,
          clientId: i,
          cms: r,
          graphEnv: t,
          queryManifest: d,
          scHost: c,
          hostname: l,
          cdnBase: o,
          key: m,
          marketingAuthTLD: u
        }) => {
          const f = s?.apiHost ?? e,
            k = s?.authHost ?? a,
            b = s?.cdnBase ?? o,
            g = s?.clientId ?? i,
            w = n?.marketingAuthTLD ?? u,
            v = s?.scHost ?? c,
            p = n?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${f}.rockstargames.com`,
            graphEnv: s?.graphEnv ?? t,
            host: v,
            hostname: l,
            cdnBase: b,
            key: m,
            clientId: g,
            cms: `https://${r}.rockstargames.com/graphql`,
            authHost: k,
            queryManifest: d,
            scBase: `https://${v}.rockstargames.com/`,
            login: `https://${k}.rockstargames.com/connect/authorize/${g}`,
            silentCheck: `https://${k}.rockstargames.com/connect/cors/check/${g}`,
            signup: `https://${k}.rockstargames.com/create/?cid=${g}`,
            gateway: `https://${w}/auth/gateway.json`,
            logout: `https://${w}/auth/sc-auth-logout`,
            pingBearer: `https://${w}/${p}`,
            authCookieName: "BearerToken"
          }
        },
        t = [r({
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
        }), r({
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
        d = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const a = t.find(({
              key: a
            }) => a === e) ?? null;
            if (a) return a
          }
          return t.find(({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname)) || t[0]
        }
    },
    26581(e, a, i) {
      "use strict";
      i.d(a, {
        A: () => m
      });
      var s = i(39793),
        n = i(44453),
        r = i(67359),
        t = i(64064),
        d = i.n(t),
        c = i(31879),
        l = i.n(c);
      const o = {
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
        m = ({
          alt: e = "",
          className: a = "",
          src: i = {},
          image: t = null,
          video: c = null
        }) => (0, s.jsxs)("div", {
          className: ((i?.videoPlayerId || i?.gifHash) && o.heroImage, a),
          children: [i?.mobile && (0, s.jsx)(r.A, {
            src: i.mobile,
            ariaLabel: e,
            className: [i?.desktop && o.hiddenLarge, o.responsiveImage].join(" "),
            noRatioPlease: !0
          }), i?.desktop && (0, s.jsx)(r.A, {
            src: i.desktop,
            ariaLabel: e,
            className: [i?.mobile && o.hiddenMobile, o.responsiveImage].join(" ")
          }), i?.videoPlayerId && (0, s.jsx)("div", {
            className: [o.responsiveVideo, o.trailer].join(" "),
            children: (0, s.jsx)(l(), {
              context: "site",
              autoplay: !1,
              id: i.videoPlayerId,
              hero: !0
            })
          }), i?.gifHash && (0, s.jsx)("div", {
            className: o.responsiveVideo,
            children: (0, s.jsx)(d(), {
              hash: [{
                desktop: i?.gifHash?.desktop
              }, {
                mobile: i?.gifHash?.mobile
              }]
            })
          }), t && (0, s.jsx)(n.A, {
            image: t
          }), c && (0, s.jsx)("div", {
            className: [o.responsiveVideo, o.trailer].join(" "),
            children: (0, s.jsx)(l(), {
              context: "site",
              autoplay: c?.autoplay ?? !1,
              id: c.id,
              hero: !0
            })
          })]
        })
    }
  }
]);