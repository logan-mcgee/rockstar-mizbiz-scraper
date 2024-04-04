! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e9977e20-f517-4160-840d-6a77c056190d", e._sentryDebugIdIdentifier = "sentry-dbid-e9977e20-f517-4160-840d-6a77c056190d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-carousel",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_carousel = self.webpackChunk_rockstargames_modules_core_carousel || []).push([
  [144], {
    9576: (e, a, n) => {
      "use strict";
      var l = n(1664),
        i = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        s = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function r(e, a, n) {
        var l, t = {},
          r = null,
          c = null;
        for (l in void 0 !== n && (r = "" + n), void 0 !== a.key && (r = "" + a.key), void 0 !== a.ref && (c = a.ref), a) o.call(a, l) && !d.hasOwnProperty(l) && (t[l] = a[l]);
        if (e && e.defaultProps)
          for (l in a = e.defaultProps) void 0 === t[l] && (t[l] = a[l]);
        return {
          $$typeof: i,
          type: e,
          key: r,
          ref: c,
          props: t,
          _owner: s.current
        }
      }
      a.Fragment = t, a.jsx = r, a.jsxs = r
    },
    5240: (e, a, n) => {
      "use strict";
      e.exports = n(9576)
    },
    1144: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        default: () => r
      });
      var l = n(9468);
      n(5652);
      const i = e => {
          let {
            parent: a = null
          } = e;
          return {
            name: "type",
            label: "Text",
            component: "group",
            fields: [(0, l.NameField)(), (0, l.TextField)(), (0, l.ClassNamesField)({
              filter: "grid"
            }), (0, l.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, l.defaultItemUnique)({
              style: {
                "--max-width-dynamic": "var(--max-width-static)"
              }
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Text]` : "New [Text]"
            })
          }
        },
        t = e => {
          let {
            game: a = null,
            label: n = "Image",
            description: i = ""
          } = e;
          return {
            name: "imageWithBadge",
            label: n,
            description: i,
            component: "group",
            fields: [(0, l.NameField)(), (0, l.ImageField)({
              game: a
            }), (0, l.LeadAssetToggle)(), (0, l.ClassNamesField)({
              filter: "image"
            }), (0, l.StyleField)({
              filter: "image"
            })],
            defaultItem: () => (0, l.defaultItemUnique)({
              image: (0, l.defaultItemUnique)(l._defaultImageValues),
              badgeType: "rdr2" === a ? "badge3" : ""
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      n(5988), n(3052), n(2104), n(504), n(5240), n(2256), n(5419);
      const o = e => {
          let {
            name: a,
            label: n
          } = e;
          return {
            name: a,
            label: n,
            component: "group",
            fields: [t({}), {
              name: "fadeIn",
              label: "Fade In Content?",
              component: "toggle"
            }]
          }
        },
        s = e => {
          let {
            name: a,
            label: n
          } = e;
          return {
            name: a,
            label: n,
            component: "group",
            fields: [{
              name: l.TINA_PARSER_KEY,
              label: `${n} Content`,
              description: "Choose ONE item to go in this slot.",
              component: "blocks",
              templates: [t({}), i({})]
            }, {
              name: "fadeIn",
              label: "Fade In Content?",
              component: "toggle"
            }]
          }
        },
        d = e => {
          let {
            game: a = null,
            templates: n = null
          } = e;
          return {
            name: "panoramaCarousel",
            label: "Panorama Carousel",
            description: 'Additional options if the Carousel Type is "Panorama Carousel".',
            component: "group",
            fields: [{
              name: "slides",
              label: "Carousel Slides",
              component: "blocks",
              templates: [{
                name: "slide",
                label: "Carousel Slide",
                component: "group",
                fields: [{
                  name: "itemName",
                  label: "Item Name",
                  component: "text"
                }, o({
                  name: "backgroundContent",
                  label: "Background Content"
                }), o({
                  name: "foregroundContent",
                  label: "Foreground Content"
                }), s({
                  name: "topLeftSlot",
                  label: "Top Left Slot"
                }), s({
                  name: "topCenterSlot",
                  label: "Top Center Slot"
                }), s({
                  name: "topRightSlot",
                  label: "Top Right Slot"
                }), s({
                  name: "bottomLeftSlot",
                  label: "Bottom Left Slot"
                }), s({
                  name: "bottomRightSlot",
                  label: "Bottom Right Slot"
                })],
                defaultItem: () => (0, l.defaultItemUnique)({}),
                itemProps: e => (0, l.itemPropsWithKey)(e, {
                  label: `${e?.itemName??"New"} [Carousel Slide]`
                })
              }]
            }, {
              name: "loop",
              label: "Loop",
              description: "If true, slides will run on an infinite loop.",
              component: "toggle"
            }, {
              name: "centeredSlides",
              label: "Centered Slides",
              description: "If true, then active slide will be centered, not always on the left side.",
              component: "toggle"
            }, {
              name: "grabCursor",
              label: "Grab Cursor",
              description: 'This option may a little improve desktop usability. If true, user will see the "grab" cursor when hover on Swiper.',
              component: "toggle"
            }],
            defaultItem: () => (0, l.defaultItemUnique)({}),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [Panorama Carousel]`
            })
          }
        },
        r = e => {
          let {
            game: a = null,
            templates: n = null
          } = e;
          return {
            name: "carousel",
            label: "Swiper Carousel",
            component: "group",
            fields: [(0, l.NameField)(), {
              name: "type",
              label: "Carousel Type",
              component: "select",
              options: [{
                label: "-- Select a Carousel --",
                value: ""
              }, {
                label: "Panorama Carousel",
                value: "panoramaCarousel"
              }]
            }, d({
              game: a,
              templates: n
            }), (0, l.StyleField)({
              filter: "carousel"
            })],
            defaultItem: () => (0, l.defaultItemUnique)({
              panoramaCarousel: {
                loop: !0,
                grabCursor: !0,
                centeredSlides: !0,
                slidesPerView: "2"
              }
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [Swiper Carousel]`
            })
          }
        }
    },
    2256: (e, a, n) => {
      "use strict";
      n.d(a, {
        c: () => m
      });
      var l = n(1664),
        i = n(8560),
        t = n.n(i),
        o = n(1740),
        s = n(5792);
      const d = {
        pillBtn: "rockstargames-modules-core-carouself87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-modules-core-carousela8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-modules-core-carousela57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-modules-core-carouseldaec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-modules-core-carouselbd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-modules-core-carousela6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-modules-core-carousele88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-modules-core-carouselab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-modules-core-carouselc20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-modules-core-carouselb16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-modules-core-carouseld0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-modules-core-carouseld1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-modules-core-carouseld6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-modules-core-carouself3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-modules-core-carousela6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-modules-core-carouseleade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-modules-core-carousela82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-modules-core-carouseld394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-modules-core-carouself1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-modules-core-carouselcdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-modules-core-carouselba4bd16bff2fbc40616457007b4a7442"
      };
      var r = n(5240);
      const {
        sanitize: c
      } = t(), m = e => {
        let {
          list: a,
          string: n,
          starColor: i,
          style: t,
          className: m,
          game: u,
          noImg: f,
          columns: b,
          mobileColumns: k
        } = e;
        const [g, p] = (0, l.useState)(null);
        return (0, l.useEffect)((() => {
          p(a)
        }), [a]), n || a ? b && g ? (0, r.jsx)("div", {
          className: d.grid,
          style: {
            "--ordered-list-grid-column": b,
            "--ordered-list-grid-column-mobile": k ?? b
          },
          children: (0, r.jsx)("ol", {
            style: (0, s.safeStyles)(t),
            className: (0, o.classList)(d.itemList, d.noImg, d[i], d[u]),
            children: g.map((e => (0, r.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: c(e.content)
              }
            }, e.content)))
          })
        }) : (0, r.jsx)("ol", {
          style: (0, s.safeStyles)(t),
          className: (0, o.classList)(d.itemList, d.custom, f ? d.noImg : "", i ? d[i] : "", u ? d[u] : "", m ?? ""),
          children: a.map((e => (0, r.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: c(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    5419: (e, a, n) => {
      "use strict";
      n.d(a, {
        c: () => m
      });
      var l = n(1664),
        i = n(8560),
        t = n.n(i),
        o = n(1740),
        s = n(5792);
      const d = {
        grid: "rockstargames-modules-core-carouselac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-modules-core-carouselcaf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-modules-core-carouselb291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-modules-core-carouseld146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-modules-core-carouselba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-modules-core-carouselb6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-modules-core-carouselaf89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-modules-core-carouseld244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-modules-core-carouseld90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-modules-core-carouselc3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-modules-core-carouselfe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-modules-core-carouself5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-modules-core-carouself4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-modules-core-carouself6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-modules-core-carouselab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-modules-core-carouseldc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-modules-core-carouselb354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-modules-core-carousele4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-modules-core-carouseld4581a495de14e6762bb15debe5bb810"
      };
      var r = n(5240);
      const {
        sanitize: c
      } = t(), m = e => {
        let {
          list: a,
          string: n,
          starColor: i,
          style: t,
          className: m,
          game: u,
          noImg: f,
          columns: b,
          mobileColumns: k
        } = e;
        const [g, p] = (0, l.useState)(null), v = n ? n.split("_#_") : a;
        return (0, l.useEffect)((() => {
          p(a)
        }), [a]), n || a ? b && g ? (0, r.jsx)("div", {
          className: d.grid,
          style: {
            "--unordered-list-grid-column": b,
            "--unordered-list-grid-column-mobile": k ?? b
          },
          children: (0, r.jsx)("ul", {
            style: (0, s.safeStyles)(t),
            className: (0, o.classList)(d.itemList, d.noImg, d[i], d[u]),
            children: g.map((e => (0, r.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: c(e.content)
              }
            }, e.content)))
          })
        }) : (0, r.jsx)("ul", {
          style: (0, s.safeStyles)(t),
          className: (0, o.classList)(d.itemList, d.custom, f ? d.noImg : "", i ? d[i] : "", u ? d[u] : "", m ?? ""),
          children: v.map((e => (0, r.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: c(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    504: e => {
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
          end: 963
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var l = e.type;
          "NamedType" === l.kind && a.add(l.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var l = {};

      function i(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var l = e.definitions[n];
          if (l.name && l.name.value == a) return l
        }
      }

      function t(e, a) {
        var n = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var t = l[a] || new Set,
          o = new Set,
          s = new Set;
        for (t.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (l[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var l = i(e, a);
          l && n.definitions.push(l)
        })), n
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), l[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = t(a, "TinaModulesList"), e.exports.TinaModulesInfo = t(a, "TinaModulesInfo")
    }
  }
]);