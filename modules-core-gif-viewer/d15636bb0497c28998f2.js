/*! For license information please see d15636bb0497c28998f2.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [248], {
    911: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => f
      });
      var i = n(932),
        d = n(859);
      const o = {
        hiddenMobile: "ed8a82031b8a55f7c854e91ecc53637fcea5",
        hiddenLarge: "ed8a82031b8a55f7dd14b008bb18ef5f94e8",
        "hidden-sm": "ed8a82031b8a55f7bc0a76374b8956cf9ab4",
        "show-sm": "ed8a82031b8a55f7fb8f19461f00788e7b9d",
        "hidden-md": "ed8a82031b8a55f7c4a550b51c428d56aaed",
        "show-md": "ed8a82031b8a55f7e915695b5c94892be8e0",
        "hidden-lg": "ed8a82031b8a55f7b81c8c39eac9973e822b",
        "show-lg": "ed8a82031b8a55f7c8ec0319b6ed675e7be0",
        "hidden-xl": "ed8a82031b8a55f7cec99fe3a2487ac87c79",
        "show-xl": "ed8a82031b8a55f7b9ad98a6eb9024a94f24",
        "hidden-xxl": "ed8a82031b8a55f7a45211e72e42840ffe3c",
        "show-xxl": "ed8a82031b8a55f7d7754f6619162d2b8eb5",
        "full-width": "ed8a82031b8a55f7c377bb8506345aa2a5e8",
        "reverse-mobile": "ed8a82031b8a55f7d2625954dba915b332db",
        "center-children": "ed8a82031b8a55f7b24123db2c9111cb0151",
        "std-padding-mobile-desktop-none": "ed8a82031b8a55f7bc8062f51904f026265b",
        "std-padding-desktop-mobile-none": "ed8a82031b8a55f7b2b6cd8b7d3e18d95737",
        "horizontal-line": "ed8a82031b8a55f7ff6e4189c918793c612c",
        gold: "ed8a82031b8a55f7acd1e1d6c91c89f70f3f",
        gifWrapper: "ed8a82031b8a55f7f0536b201c46d2cbd12a",
        gifWrapperHero: "ed8a82031b8a55f7ea801a6bb912926d3b83",
        muteBtn: "ed8a82031b8a55f7c1583b12177f643feda5",
        unMuted: "ed8a82031b8a55f7d15d63f3f9258559d5e0",
        video: "ed8a82031b8a55f7f0fdae62bba0e730a759",
        videoMobile: "ed8a82031b8a55f7a504aaca6d1b9eb84ae6",
        videoDesktop: "ed8a82031b8a55f7a47f5a852cc5583c5508",
        mutable: "ed8a82031b8a55f7ea1c1fef64aec599dc80"
      };
      var t = n(849),
        r = n(160);
      const s = e => {
          let {
            hashes: a,
            hover: n,
            loop: d,
            sound: t
          } = e;
          const {
            desktop: s = null,
            mobile: f = null
          } = a, [c, u] = (0, i.useState)(!0), b = {
            autoPlay: !n,
            hover: n,
            loop: d,
            sound: t,
            muted: c
          };
          return (0, r.jsxs)("div", {
            onClick: () => u(!c),
            children: [s && (0, r.jsx)(l, {
              className: [f ? o.hiddenMobile : "", o.videoDesktop].join(" "),
              hash: s,
              ...b
            }), f && (0, r.jsx)(l, {
              className: [s ? o.hiddenLarge : "", o.videoMobile].join(" "),
              hash: f,
              ...b
            }), b.sound ? (0, r.jsx)("div", {
              className: [o.muteBtn, c ? "" : o.unMuted].join(" ")
            }) : ""]
          })
        },
        l = e => {
          let {
            className: a,
            hash: n,
            hover: s,
            autoPlay: l,
            loop: f,
            muted: c,
            sound: u
          } = e;
          const {
            data: b
          } = (0, d.useQuery)(t.GifInfo, {
            variables: {
              hash: n
            }
          }), m = (0, i.useRef)();
          return b ? (0, r.jsx)("div", {
            className: [a, o.video, u ? o.mutable : ""].join(" "),
            onMouseEnter: () => s && void m.current.play(),
            onMouseLeave: () => s && (m.current.pause(), void(m.current.currentTime = 0)),
            children: (0, r.jsx)("video", {
              ref: m,
              src: b.gifInfo.file,
              autoPlay: l,
              loop: f,
              muted: c,
              playsInline: !0
            })
          }) : null
        },
        f = e => {
          let {
            hash: a,
            style: n,
            title: i,
            caption: d,
            hero: t = !1,
            loop: l = !0,
            sound: f = !1,
            hover: c = !1
          } = e;
          if (!a) return null;
          const u = "object" == typeof a ? a : Object.keys(a).map((e => ({
            [e]: a[e]
          })));
          return (0, r.jsxs)("figure", {
            className: `${o.gifWrapper} ${t?o.gifWrapperHero:""}`,
            style: n,
            children: [(0, r.jsx)(s, {
              hashes: u,
              hover: c,
              loop: l,
              sound: f,
              title: i ?? "R* Games"
            }), d && (0, r.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: d
              }
            })]
          })
        }
    },
    248: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        default: () => i
      });
      const i = n(911).Z
    },
    970: (e, a, n) => {
      "use strict";
      var i = n(932),
        d = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        t = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        r = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, n) {
        var i, s = {},
          l = null,
          f = null;
        for (i in void 0 !== n && (l = "" + n), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (f = a.ref), a) o.call(a, i) && !r.hasOwnProperty(i) && (s[i] = a[i]);
        if (e && e.defaultProps)
          for (i in a = e.defaultProps) void 0 === s[i] && (s[i] = a[i]);
        return {
          $$typeof: d,
          type: e,
          key: l,
          ref: f,
          props: s,
          _owner: t.current
        }
      }
      a.jsx = s, a.jsxs = s
    },
    160: (e, a, n) => {
      "use strict";
      e.exports = n(970)
    },
    849: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifsList"
          },
          variableDefinitions: [{
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
                value: "gifsList"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "hash"
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
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifInfo"
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
                value: "hash"
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
                value: "gifInfo"
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
                  value: "hash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "hash"
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
                    value: "file"
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
          end: 206
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
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
        body: "query GifsList($cache: Boolean = true) {\n    gifsList {\n        hash\n        name\n    }\n}\n\nquery GifInfo($locale: String!, $hash: String!) {\n    gifInfo(locale: $locale, hash: $hash) {\n        file\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function d(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }

      function o(e, a) {
        var n = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var o = i[a] || new Set,
          t = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            t.has(e) || (t.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = d(e, a);
          i && n.definitions.push(i)
        })), n
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.GifsList = o(a, "GifsList"), e.exports.GifInfo = o(a, "GifInfo")
    }
  }
]);