/*! For license information please see 71ba7ff959a9a29e3d80.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [182], {
    911: (e, n, i) => {
      "use strict";
      i.d(n, {
        Z: () => f
      });
      var a = i(932),
        d = i(859);
      const o = {
        hiddenMobile: "_2499f2356e8d48e3c854e91ecc53637fcea5",
        hiddenLarge: "_2499f2356e8d48e3dd14b008bb18ef5f94e8",
        "hidden-sm": "_2499f2356e8d48e3bc0a76374b8956cf9ab4",
        "show-sm": "_2499f2356e8d48e3fb8f19461f00788e7b9d",
        "hidden-md": "_2499f2356e8d48e3c4a550b51c428d56aaed",
        "show-md": "_2499f2356e8d48e3e915695b5c94892be8e0",
        "hidden-lg": "_2499f2356e8d48e3b81c8c39eac9973e822b",
        "show-lg": "_2499f2356e8d48e3c8ec0319b6ed675e7be0",
        "hidden-xl": "_2499f2356e8d48e3cec99fe3a2487ac87c79",
        "show-xl": "_2499f2356e8d48e3b9ad98a6eb9024a94f24",
        "hidden-xxl": "_2499f2356e8d48e3a45211e72e42840ffe3c",
        "show-xxl": "_2499f2356e8d48e3d7754f6619162d2b8eb5",
        "full-width": "_2499f2356e8d48e3c377bb8506345aa2a5e8",
        "reverse-mobile": "_2499f2356e8d48e3d2625954dba915b332db",
        "center-children": "_2499f2356e8d48e3b24123db2c9111cb0151",
        "std-padding-mobile-desktop-none": "_2499f2356e8d48e3bc8062f51904f026265b",
        "std-padding-desktop-mobile-none": "_2499f2356e8d48e3b2b6cd8b7d3e18d95737",
        "horizontal-line": "_2499f2356e8d48e3ff6e4189c918793c612c",
        gold: "_2499f2356e8d48e3acd1e1d6c91c89f70f3f",
        gifWrapper: "_2499f2356e8d48e3f0536b201c46d2cbd12a",
        gifWrapperHero: "_2499f2356e8d48e3ea801a6bb912926d3b83",
        muteBtn: "_2499f2356e8d48e3c1583b12177f643feda5",
        unMuted: "_2499f2356e8d48e3d15d63f3f9258559d5e0",
        video: "_2499f2356e8d48e3f0fdae62bba0e730a759",
        videoMobile: "_2499f2356e8d48e3a504aaca6d1b9eb84ae6",
        videoDesktop: "_2499f2356e8d48e3a47f5a852cc5583c5508",
        mutable: "_2499f2356e8d48e3ea1c1fef64aec599dc80"
      };
      var t = i(849),
        s = i(160);
      const r = e => {
          let {
            hashes: n,
            hover: i,
            loop: d,
            sound: t
          } = e;
          const {
            desktop: r = null,
            mobile: f = null
          } = n, [c, u] = (0, a.useState)(!0), m = {
            autoPlay: !i,
            hover: i,
            loop: d,
            sound: t,
            muted: c
          };
          return (0, s.jsxs)("div", {
            onClick: () => u(!c),
            children: [r && (0, s.jsx)(l, {
              className: [f ? o.hiddenMobile : "", o.videoDesktop].join(" "),
              hash: r,
              ...m
            }), f && (0, s.jsx)(l, {
              className: [r ? o.hiddenLarge : "", o.videoMobile].join(" "),
              hash: f,
              ...m
            }), m.sound ? (0, s.jsx)("div", {
              className: [o.muteBtn, c ? "" : o.unMuted].join(" ")
            }) : ""]
          })
        },
        l = e => {
          let {
            className: n,
            hash: i,
            hover: r,
            autoPlay: l,
            loop: f,
            muted: c,
            sound: u
          } = e;
          const {
            data: m
          } = (0, d.useQuery)(t.GifInfo, {
            variables: {
              hash: i
            }
          }), h = (0, a.useRef)();
          return m ? (0, s.jsx)("div", {
            className: [n, o.video, u ? o.mutable : ""].join(" "),
            onMouseEnter: () => r && void h.current.play(),
            onMouseLeave: () => r && (h.current.pause(), void(h.current.currentTime = 0)),
            children: (0, s.jsx)("video", {
              ref: h,
              src: m.gifInfo.file,
              autoPlay: l,
              loop: f,
              muted: c,
              playsInline: !0
            })
          }) : null
        },
        f = e => {
          let {
            hash: n,
            style: i,
            title: a,
            caption: d,
            hero: t = !1,
            loop: l = !0,
            sound: f = !1,
            hover: c = !1
          } = e;
          if (!n) return null;
          const u = "object" == typeof n ? n : Object.keys(n).map((e => ({
            [e]: n[e]
          })));
          return (0, s.jsxs)("figure", {
            className: `${o.gifWrapper} ${t?o.gifWrapperHero:""}`,
            style: i,
            children: [(0, s.jsx)(r, {
              hashes: u,
              hover: c,
              loop: l,
              sound: f,
              title: a ?? "R* Games"
            }), d && (0, s.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: d
              }
            })]
          })
        }
    },
    182: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        default: () => t
      });
      var a = i(455),
        d = i(911),
        o = i(160);
      const t = () => {
        const {
          hashId: e
        } = (0, a.useParams)(), [n] = (0, a.useSearchParams)(), i = !("false" === n.get("loop")), t = "true" === n.get("sound"), s = n.has("hover");
        return (0, o.jsx)(d.Z, {
          hash: {
            desktop: e
          },
          hover: s,
          loop: i,
          sound: t
        })
      }
    },
    970: (e, n, i) => {
      "use strict";
      var a = i(932),
        d = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        t = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function r(e, n, i) {
        var a, r = {},
          l = null,
          f = null;
        for (a in void 0 !== i && (l = "" + i), void 0 !== n.key && (l = "" + n.key), void 0 !== n.ref && (f = n.ref), n) o.call(n, a) && !s.hasOwnProperty(a) && (r[a] = n[a]);
        if (e && e.defaultProps)
          for (a in n = e.defaultProps) void 0 === r[a] && (r[a] = n[a]);
        return {
          $$typeof: d,
          type: e,
          key: l,
          ref: f,
          props: r,
          _owner: t.current
        }
      }
      n.jsx = r, n.jsxs = r
    },
    160: (e, n, i) => {
      "use strict";
      e.exports = i(970)
    },
    849: e => {
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

      function d(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }

      function o(e, n) {
        var i = {
          kind: e.kind,
          definitions: [d(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var o = a[n] || new Set,
          t = new Set,
          s = new Set;
        for (o.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (a[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(n) {
          var a = d(e, n);
          a && i.definitions.push(a)
        })), i
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.GifsList = o(n, "GifsList"), e.exports.GifInfo = o(n, "GifInfo")
    }
  }
]);