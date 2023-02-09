/*! For license information please see 77128b4b4c1801e492cc.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [328], {
    98: (e, n, i) => {
      "use strict";
      i.d(n, {
        Z: () => c
      });
      var a = i(822),
        o = i(859);
      const t = {
        hiddenMobile: "c854e91ecc53637fcea5",
        hiddenLarge: "dd14b008bb18ef5f94e8",
        "hidden-sm": "bc0a76374b8956cf9ab4",
        "show-sm": "fb8f19461f00788e7b9d",
        "hidden-md": "c4a550b51c428d56aaed",
        "show-md": "e915695b5c94892be8e0",
        "hidden-lg": "b81c8c39eac9973e822b",
        "show-lg": "c8ec0319b6ed675e7be0",
        "hidden-xl": "cec99fe3a2487ac87c79",
        "show-xl": "b9ad98a6eb9024a94f24",
        "hidden-xxl": "a45211e72e42840ffe3c",
        "show-xxl": "d7754f6619162d2b8eb5",
        "full-width": "c377bb8506345aa2a5e8",
        "reverse-mobile": "d2625954dba915b332db",
        "center-children": "b24123db2c9111cb0151",
        "std-padding-mobile-desktop-none": "bc8062f51904f026265b",
        "std-padding-desktop-mobile-none": "b2b6cd8b7d3e18d95737",
        "horizontal-line": "ff6e4189c918793c612c",
        gold: "acd1e1d6c91c89f70f3f",
        gifWrapper: "f0536b201c46d2cbd12a",
        gifWrapperHero: "ea801a6bb912926d3b83",
        muteBtn: "c1583b12177f643feda5",
        unMuted: "d15d63f3f9258559d5e0",
        video: "f0fdae62bba0e730a759",
        videoMobile: "a504aaca6d1b9eb84ae6",
        videoDesktop: "a47f5a852cc5583c5508",
        mutable: "ea1c1fef64aec599dc80"
      };
      var d = i(445),
        s = i(563);
      const r = e => {
          let {
            hashes: n,
            hover: i,
            loop: o,
            sound: d
          } = e;
          const {
            desktop: r = null,
            mobile: c = null
          } = n, [f, u] = (0, a.useState)(!0), m = {
            autoPlay: !i,
            hover: i,
            loop: o,
            sound: d,
            muted: f
          };
          return (0, s.jsxs)("div", {
            onClick: () => u(!f),
            children: [r && (0, s.jsx)(l, {
              className: [c ? t.hiddenMobile : "", t.videoDesktop].join(" "),
              hash: r,
              ...m
            }), c && (0, s.jsx)(l, {
              className: [r ? t.hiddenLarge : "", t.videoMobile].join(" "),
              hash: c,
              ...m
            }), m.sound ? (0, s.jsx)("div", {
              className: [t.muteBtn, f ? "" : t.unMuted].join(" ")
            }) : ""]
          })
        },
        l = e => {
          let {
            className: n,
            hash: i,
            hover: r,
            autoPlay: l,
            loop: c,
            muted: f,
            sound: u
          } = e;
          const {
            data: m
          } = (0, o.useQuery)(d.GifInfo, {
            variables: {
              hash: i
            }
          }), h = (0, a.useRef)();
          return m ? (0, s.jsx)("div", {
            className: [n, t.video, u ? t.mutable : ""].join(" "),
            onMouseEnter: () => r && void h.current.play(),
            onMouseLeave: () => r && (h.current.pause(), void(h.current.currentTime = 0)),
            children: (0, s.jsx)("video", {
              ref: h,
              src: m.gifInfo.file,
              autoPlay: l,
              loop: c,
              muted: f,
              playsInline: !0
            })
          }) : null
        },
        c = e => {
          let {
            hash: n,
            style: i,
            title: a,
            caption: o,
            hero: d = !1,
            loop: l = !0,
            sound: c = !1,
            hover: f = !1
          } = e;
          if (!n) return null;
          const u = "object" == typeof n ? n : Object.keys(n).map((e => ({
            [e]: n[e]
          })));
          return (0, s.jsxs)("figure", {
            className: `${t.gifWrapper} ${d?t.gifWrapperHero:""}`,
            style: i,
            children: [(0, s.jsx)(r, {
              hashes: u,
              hover: f,
              loop: l,
              sound: c,
              title: a ?? "R* Games"
            }), o && (0, s.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: o
              }
            })]
          })
        }
    },
    328: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        default: () => d
      });
      var a = i(364),
        o = i(98),
        t = i(563);
      const d = () => {
        const {
          hashId: e
        } = (0, a.useParams)(), [n] = (0, a.useSearchParams)(), i = !("false" === n.get("loop")), d = "true" === n.get("sound"), s = n.has("hover");
        return (0, t.jsx)(o.Z, {
          hash: {
            desktop: e
          },
          hover: s,
          loop: i,
          sound: d
        })
      }
    },
    461: (e, n, i) => {
      "use strict";
      var a = i(822),
        o = Symbol.for("react.element"),
        t = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function r(e, n, i) {
        var a, r = {},
          l = null,
          c = null;
        for (a in void 0 !== i && (l = "" + i), void 0 !== n.key && (l = "" + n.key), void 0 !== n.ref && (c = n.ref), n) t.call(n, a) && !s.hasOwnProperty(a) && (r[a] = n[a]);
        if (e && e.defaultProps)
          for (a in n = e.defaultProps) void 0 === r[a] && (r[a] = n[a]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: c,
          props: r,
          _owner: d.current
        }
      }
      n.jsx = r, n.jsxs = r
    },
    563: (e, n, i) => {
      "use strict";
      e.exports = i(461)
    },
    445: e => {
      var n = {
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

      function i(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && n.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, n)
        }))
      }
      n.loc.source = {
        body: "query GifsList($cache: Boolean = true) {\n    gifsList {\n        hash\n        name\n    }\n}\n\nquery GifInfo($locale: String!, $hash: String!) {\n    gifInfo(locale: $locale, hash: $hash) {\n        file\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function o(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }

      function t(e, n) {
        var i = {
          kind: e.kind,
          definitions: [o(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = a[n] || new Set,
          d = new Set,
          s = new Set;
        for (t.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            d.has(e) || (d.add(e), (a[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return d.forEach((function(n) {
          var a = o(e, n);
          a && i.definitions.push(a)
        })), i
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.GifsList = t(n, "GifsList"), e.exports.GifInfo = t(n, "GifInfo")
    }
  }
]);