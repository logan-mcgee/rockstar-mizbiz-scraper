try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "64592568-e43f-4539-84d2-f3ce552b0c7d", e._sentryDebugIdIdentifier = "sentry-dbid-64592568-e43f-4539-84d2-f3ce552b0c7d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [544], {
    1157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/090acda789de843d56780aa60c1f7056.jpg"
    },
    3818: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    3933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    7994: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    8494: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    10111: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    10670: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var i = t(62229),
        s = t(95966);
      const n = {
        img: "rockstargames-sites-rockstargamesd87037fda2ea106061c7a614036a89df",
        wide: "rockstargames-sites-rockstargamesdc444c089b89129c0a39bc61845d531f",
        imgContentful: "rockstargames-sites-rockstargamesb9f3c994ce8a97ac6530cf0a85e5abe0"
      };
      var d = t(70954);
      (0, s.importAll)(t(86751));
      const r = e => {
        let {
          isWideCard: a = !1,
          size: r = 640,
          title: m,
          titleSlug: c
        } = e;
        const {
          isMobile: o
        } = (0, s.useWindowResize)(), l = (0, i.useMemo)((() => {
          let e = "";
          return a && (e = o ? t(24865)(`./${c}/mobile.jpg`) : t(53781)(`./${c}/desktop.jpg`)), e || (e = t(39294)(`./${c}.jpg`), e += `?im=Resize=${r}`), e
        }), [o, c]), [g] = (0, s.usePreloadImg)(l);
        let p = l;
        return (0, d.jsx)("div", {
          role: "img",
          "aria-label": m,
          style: {
            backgroundImage: `url(${p})`
          },
          className: [n.img, g ? n.startAnimation : "", a ? n.wide : ""].join(" ")
        })
      }
    },
    10869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    12602: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    13095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    14724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    14825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    18518: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    19083: e => {
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
            value: "SearchData"
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
                value: "q"
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
                value: "withPosts"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGames"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withVideos"
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
                  value: "/search/query",
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
              name: {
                kind: "Name",
                value: "games"
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
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
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
                          value: "withGames"
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
                        value: "titleSlug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "urlOfficial"
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
                value: "posts"
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
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "hideExpired"
                },
                value: {
                  kind: "BooleanValue",
                  value: !1
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
                          value: "withPosts"
                        }
                      }
                    }]
                  }],
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
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
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
                          value: "withVideos"
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
                        value: "screencap"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
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
                            value: "title"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "titleSlug"
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
          end: 1514
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery SearchData(\n    $locale: String!\n    $q: String!\n    $page: Int!\n    $withPosts: Boolean!\n    $withGames: Boolean!\n    $withVideos: Boolean!\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/search/query") {\n        title\n    }\n    games(locale: $locale, page: $page, q: $q) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withGames) {\n            id\n            title\n            titleSlug\n            urlOfficial\n        }\n    }\n    posts(locale: $locale, page: $page, q: $q, hideExpired: false) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withPosts) {\n            ...postFields\n        }\n    }\n    videos(locale: $locale, page: $page, q: $q) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withVideos) {\n            id\n            title\n            screencap\n            game {\n                id\n                title\n                titleSlug\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == a) return i
        }
      }

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = i[a] || new Set,
          d = new Set,
          r = new Set;
        for (n.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var m = r;
          r = new Set, m.forEach((function(e) {
            d.has(e) || (d.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return d.forEach((function(a) {
          var i = s(e, a);
          i && t.definitions.push(i)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = n(a, "postFields"), e.exports.paging = n(a, "paging"), e.exports.SearchData = n(a, "SearchData")
    },
    19552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    21094: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var i = t(62229),
        s = t(9623),
        n = t(95966),
        d = t(2918),
        r = t(18444),
        m = t(88816);
      const c = {
        newswireBlock: "rockstargames-sites-rockstargamesb394b56c31488c36155ca82090c66e6f",
        info: "rockstargames-sites-rockstargamesea1c51ae745531c2aeabbe3fcf603842",
        title: "rockstargames-sites-rockstargamesf1dfe59c3d981dbe132559620885ecea",
        newswireBlockNoSpecialOrder: "rockstargames-sites-rockstargamesc06d09374e8b5cc41f1732c691ee8e25",
        preview: "rockstargames-sites-rockstargamesca2b587572d3c9a74cfc2fedf400ce8c",
        previewMobile: "rockstargames-sites-rockstargamesb3d4a8cfcc371ae39ce6220d009c5954",
        top: "rockstargames-sites-rockstargameseee9c5d3b714a61ac265369800a6d4e0",
        startAnimation: "rockstargames-sites-rockstargamesa56af3c95449fe8452485dfb6c89fc29"
      };
      var o = t(70954);
      const l = e => {
        let {
          section: a = "",
          index: t,
          post: l,
          noSpecialOrder: g = !1,
          focused: p
        } = e;
        const {
          track: u
        } = (0, d.useGtmTrack)(), [k] = (0, s.useSearchParams)(), f = l.preview_images_parsed.newswire_block, b = {
          default: 0 !== t || g ? f.square || f.d16x9 || f._fallback : f.d16x9 || f.square || f._fallback,
          mobile: f.square || f._fallback
        }, [v, j] = (0, n.usePreloadImg)(b.default), h = {
          default: {
            backgroundImage: `url(${b.default})`
          },
          mobile: {
            backgroundImage: `url(${b.mobile})`
          }
        }, _ = (0, i.useCallback)((() => {
          u({
            event: "card_click",
            card_id: l.id,
            card_name: l.name_slug.replace(/-/g, " "),
            link_url: l.url,
            position: t,
            element_placement: a?.toLowerCase()
          })
        }), [l]);
        return (0, o.jsx)(r.A, {
          to: l.url,
          className: [c.newswireBlock, g ? c.newswireBlockNoSpecialOrder : "", null !== v ? c.startAnimation : ""].join(" "),
          focused: p,
          onClick: _,
          children: (0, o.jsxs)(o.Fragment, {
            children: [0 !== t || k.get("tag_id") ? (0, o.jsx)("div", {
              className: c.preview,
              style: h.default
            }) : (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)("div", {
                className: c.previewMobile,
                style: h.mobile
              }), (0, o.jsx)("div", {
                className: c.preview,
                style: h.default
              })]
            }), (0, o.jsxs)("div", {
              className: c.info,
              children: [(0, o.jsxs)("div", {
                className: c.top,
                children: [l.primary_tags.length ? (0, o.jsx)(m.A, {
                  title: l.primary_tags[l.primary_tags.length > 1 && 722 === l.primary_tags[0].id ? 1 : 0].name
                }) : "", (0, o.jsx)("time", {
                  dateTime: l.created,
                  children: l.created_formatted
                })]
              }), (0, o.jsx)("h5", {
                className: c.title,
                dangerouslySetInnerHTML: {
                  __html: l.title
                }
              })]
            })]
          })
        })
      }
    },
    22844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    23587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    24808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    24865: (e, a, t) => {
      var i = {
        "./VI/mobile.jpg": 92244
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 24865
    },
    26788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    27064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    28005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    30760: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => r,
        N: () => m
      });
      var i = t(95966),
        s = t(18444);
      const n = {
        videoPreview: "rockstargames-sites-rockstargamesa626ad482ff0be0336e75929516654d5",
        card: "rockstargames-sites-rockstargamesf93031694e202c791c00e5ae3497250a",
        info: "rockstargames-sites-rockstargamesdabce30c906fad181d7cc188f1632c04",
        title: "rockstargames-sites-rockstargamesfd87597d0f90ed6d8a2081da933f53bc",
        screencap: "rockstargames-sites-rockstargamesfd37974f16cd1f2376fef29d4af8d948",
        screencapLoaded: "rockstargames-sites-rockstargamesb8d4ef3e1a73c58f4002eab351d4eec2",
        gameTitle: "rockstargames-sites-rockstargamesa1fe577b937c0e16250bf38e9d775061"
      };
      var d = t(70954);
      const r = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [r] = (0, i.usePreloadImg)(s());
          return (0, d.jsx)("div", {
            className: [n.screencap, r ? n.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        m = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: i,
            size: m,
            toExplicit: c
          } = e;
          const o = c ?? `/videos/${i.id}`,
            l = {
              className: n.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": o
            },
            g = (0, d.jsxs)("div", {
              className: n.card,
              children: [(0, d.jsx)(r, {
                video: i,
                size: m
              }), (0, d.jsxs)("div", {
                className: n.info,
                children: [a ? (0, d.jsx)("div", {
                  className: n.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: i.game.title
                  }
                }) : "", (0, d.jsx)("h5", {
                  className: n.title,
                  dangerouslySetInnerHTML: {
                    __html: i.title
                  }
                })]
              })]
            });
          return t ? (0, d.jsx)("a", {
            href: o,
            target: "_blank",
            ...l,
            children: g
          }) : (0, d.jsx)(s.A, {
            to: o,
            ...l,
            children: g
          })
        }
    },
    31248: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    32830: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    33143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    39294: (e, a, t) => {
      var i = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
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
        "./wildmetal.jpg": 7994
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 39294
    },
    42043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    42787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    44596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    50544: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => j
      });
      var i = t(62229),
        s = t(9623),
        n = t(21094);
      const d = "rockstargames-sites-rockstargamesb013d77f453d7053bbcf06f173ff326c";
      var r = t(70954);
      const m = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: i,
            page: s,
            className: n
          } = e;
          return (0, r.jsx)("a", {
            href: "#",
            className: s === t.page ? `rockstargames-sites-rockstargamesb577d5726806ec872ecdb8a46905734f ${n??""}` : "",
            onClick: e => {
              e.preventDefault(), i(s)
            },
            children: a
          })
        },
        c = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: i
          } = e;
          if (1 === a.pageCount) return null;
          const s = new Array(Math.min(a.pageCount, 8)),
            n = Math.max(a.pageCount - 8, 1),
            c = Math.max(2, a.page - 4),
            o = Array.from(s, ((e, a) => a + Math.min(n, c)));
          return (0, r.jsxs)("div", {
            className: `rockstargames-sites-rockstargamese480f25872ae2a8b3fcd1e492d838301 ${i??""}`,
            children: [a.pageCount > 8 ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(m, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== o[0] ? (0, r.jsx)("div", {
                className: d,
                children: "..."
              }) : ""]
            }) : "", o.map((e => (0, r.jsx)(m, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: i,
              children: e
            }, e))), a.pageCount > 8 ? (0, r.jsxs)(r.Fragment, {
              children: [o.slice(-1)[0] + 1 < a.pageCount ? (0, r.jsx)("div", {
                className: d,
                children: "..."
              }) : "", (0, r.jsx)(m, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var o = t(43885),
        l = t(30760),
        g = t(91430),
        p = t(95966),
        u = t(33918),
        k = t(19083);
      const f = "rockstargames-sites-rockstargamesfd5351e921b874473f5256931420f405",
        b = "rockstargames-sites-rockstargamescfd48749550b301dcc13f82e4b478494",
        v = e => {
          let {
            loading: a,
            searchResponse: t,
            activeTab: i
          } = e;
          const [d, m] = (0, s.useSearchParams)();
          let o;
          switch (i) {
            case "posts":
              o = t.posts.results.map((e => (0, r.jsx)(n.A, {
                post: e,
                noSpecialOrder: !0
              }, e.id)));
              break;
            case "games":
              o = t.games.results.map((e => (0, r.jsx)(g.N, {
                game: e
              }, e.id)));
              break;
            case "videos":
              o = t.videos.results.map((e => (0, r.jsx)(l.N, {
                video: e
              }, e.id)));
              break;
            default:
              o = null
          }
          return (0, r.jsxs)(r.Fragment, {
            children: [a ? "" : (0, r.jsx)("section", {
              className: "rockstargames-sites-rockstargamesfd11aba08f1048b65f7622be1a6b951d",
              children: (0, r.jsx)("div", {
                className: "rockstargames-sites-rockstargamesf0dd8d4498e6c2c72fa698ba6fa3ad15",
                children: o
              })
            }), t[i]?.paging ? (0, r.jsx)("section", {
              className: "rockstargames-sites-rockstargamesa181f90d52be1b1d67d871d5df02c04e",
              children: (0, r.jsx)(c, {
                data: t[i].paging,
                onPageUpdate: e => {
                  m({
                    ...Object.fromEntries([...d]),
                    page: e
                  }), window.scrollTo(0, 0)
                }
              })
            }) : ""]
          })
        },
        j = (0, p.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            state: {
              search: t
            },
            setSearch: s,
            setTitle: n
          } = (0, u.b)(), d = (0, p.useQueryParams)(), [m, c] = (0, i.useState)(null), [l, g] = (0, i.useState)({}), [j, h] = (0, i.useState)(d.get("tab") ?? "games"), {
            data: _ = {},
            loading: N
          } = (0, p.useQuery)(k.SearchData, {
            variables: l,
            skip: !Object.entries(l).length || !l.q,
            autoSetLoading: !0
          });
          return (0, i.useEffect)((() => {
            const e = {
              q: d.get("q"),
              page: Number(d.get("page") ?? 1),
              withGames: !0,
              withPosts: !0,
              withVideos: !0
            };
            g(e), s(d.get("q"))
          }), [d.get("q"), d.get("page"), d.get("tab"), j]), (0, i.useEffect)((() => {
            const e = Object.entries(_).find((e => {
              let [, a] = e;
              return a?.paging?.count > 0
            }))?.[0];
            h(d.get("tab") ?? e ?? "games")
          }), [_, d.get("tab")]), (0, i.useEffect)((() => {
            void 0 !== _?.games?.paging?.count && (c((_?.games?.paging?.count ?? 0) + (_?.videos?.paging?.count ?? 0) + (_?.posts?.paging?.count ?? 0)), n(_?.meta?.title.replace("%s", t)))
          }), [_, j]), Object.entries(l).length ? l.q ? null === m || N ? null : (0, r.jsxs)("div", {
            className: f,
            children: [(0, r.jsx)("section", {
              className: b,
              children: (0, r.jsxs)("div", {
                className: "rockstargames-sites-rockstargamese054deca2519c2462fc96246266a5fbc",
                children: [(0, r.jsxs)("h4", {
                  children: [N ? a("search-active") : "", N || m ? N ? "" : a("Search results for:") : a("search-over-empty")]
                }), (0, r.jsx)("h1", {
                  children: a("%s").replace("%s", d.get("q"))
                })]
              })
            }), !N && m ? (0, r.jsx)(v, {
              searchResponse: _,
              searchTerm: t,
              activeTab: j,
              t: a
            }) : ""]
          }) : (0, r.jsx)("div", {
            className: f,
            children: (0, r.jsxs)("section", {
              className: b,
              children: [(0, r.jsx)("h3", {
                children: a("Search")
              }), (0, r.jsx)(o.A, {})]
            })
          }) : null
        }))
    },
    52014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    52461: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    52591: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    53781: (e, a, t) => {
      var i = {
        "./VI/desktop.jpg": 67496
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 53781
    },
    57258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    59414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    59655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    59942: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    63839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    64923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    67181: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    67496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/372e91ece1e13eda3ec63d6dfc06f7ce.jpg"
    },
    73483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    73534: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    73564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    77321: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    78323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    79114: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    79795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    84141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    84715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    84752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    85256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    85332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    86751: (e, a, t) => {
      var i = {
        "./GTAOnline.jpg": 10111,
        "./GTATrilogy.jpg": 84752,
        "./IV.jpg": 73483,
        "./V.jpg": 98754,
        "./VI.jpg": 1157,
        "./VI/desktop.jpg": 67496,
        "./VI/mobile.jpg": 92244,
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
        "./wildmetal.jpg": 7994
      };

      function s(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = n, e.exports = s, s.id = 86751
    },
    88816: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var i = t(18444);
      const s = {
        tag: "rockstargames-sites-rockstargamesb660bb706132d84852c02df01cc6ed5a"
      };
      var n = t(70954);
      const d = e => {
        let {
          className: a,
          href: t,
          title: d,
          style: r
        } = e;
        const m = (0, n.jsxs)("div", {
          style: r,
          className: [s.tag, a].join(" "),
          children: [(0, n.jsx)("i", {}), d]
        });
        return void 0 !== t ? (0, n.jsx)(i.A, {
          to: t,
          children: m
        }) : m
      }
    },
    89273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    90377: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    91430: (e, a, t) => {
      "use strict";
      t.d(a, {
        s: () => i.A,
        N: () => r
      });
      var i = t(10670),
        s = t(18444);
      const n = {
        fobLink: "rockstargames-sites-rockstargamesd30ff40ba02b7ed14124da3ca9cd4f2b",
        wide: "rockstargames-sites-rockstargamesc9686ec502f78b05e47568667e90bd17"
      };
      var d = t(70954);
      const r = e => {
        let {
          game: a,
          to: t
        } = e;
        const {
          titleSlug: r,
          urlOfficial: m = ""
        } = a, c = ["VI"].includes(r.toUpperCase());
        return (0, d.jsx)(s.A, {
          "data-gtm-category": "Games",
          "data-gtm-action": "Game Click-through",
          "data-gtm-label": r,
          "data-testid": `${r}-gamecard`,
          to: t ?? m,
          target: "_self",
          className: [n.fobLink, c ? n.wide : ""].join(" "),
          reloadDocument: c,
          children: (0, d.jsx)(i.A, {
            title: a.title,
            titleSlug: r,
            isWideCard: c,
            size: c ? 1740 : 480
          })
        })
      }
    },
    91480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    92244: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f086bb17e0de94d33c4031f30fff704.jpg"
    },
    93573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    95903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    96148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    98754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    }
  }
]);