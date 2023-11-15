/*! For license information please see 4978da2ab92f046e83b9560ddc183e28.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [357], {
    32: (e, i, a) => {
      "use strict";
      var n = a(927),
        o = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function t(e, i, a) {
        var n, t = {},
          c = null,
          l = null;
        for (n in void 0 !== a && (c = "" + a), void 0 !== i.key && (c = "" + i.key), void 0 !== i.ref && (l = i.ref), i) r.call(i, n) && !d.hasOwnProperty(n) && (t[n] = i[n]);
        if (e && e.defaultProps)
          for (n in i = e.defaultProps) void 0 === t[n] && (t[n] = i[n]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: l,
          props: t,
          _owner: s.current
        }
      }
      i.jsx = t, i.jsxs = t
    },
    705: (e, i, a) => {
      "use strict";
      e.exports = a(32)
    },
    68: (e, i, a) => {
      "use strict";
      a.d(i, {
        Z: () => l
      });
      var n = a(927),
        o = a(859);
      const r = {
        hiddenMobile: "rockstargames-modules-core-gif-viewerff7b0b8c8b5337d09e0494100b0f4bca",
        hiddenLarge: "rockstargames-modules-core-gif-viewerb5f7015455ef0b013385884e296f9b47",
        "hidden-sm": "rockstargames-modules-core-gif-viewerb0a40020f6ade9f5b03e6dd84fd7c720",
        "show-sm": "rockstargames-modules-core-gif-viewerfa122440b58b070f7f9c3662667d69d5",
        "hidden-md": "rockstargames-modules-core-gif-viewerb58766ad9eea6ff40140e4ef26951e73",
        "show-md": "rockstargames-modules-core-gif-viewerbe84ec0d49567df75d78020ee3d45e14",
        "hidden-lg": "rockstargames-modules-core-gif-viewerea510dcb151202cb03a0b3ce54398392",
        "show-lg": "rockstargames-modules-core-gif-viewerb3e2fdecdc32b835863ad709836ffc2c",
        "hidden-xl": "rockstargames-modules-core-gif-viewerb73b69d88edcbbbc9c8707ae3f10a828",
        "show-xl": "rockstargames-modules-core-gif-viewerfa85b6b705736353ebd0c1fe0900fec9",
        "hidden-xxl": "rockstargames-modules-core-gif-viewere89ace7cb51701236f21a3e894bec910",
        "show-xxl": "rockstargames-modules-core-gif-vieweraf703bcdb0523f180292f48ee186094f",
        "full-width": "rockstargames-modules-core-gif-viewera58cf9f712138e9ab66e70885c7dceda",
        "reverse-mobile": "rockstargames-modules-core-gif-viewere0c204bbaa93b473c48b9117e0c0e94d",
        "center-children": "rockstargames-modules-core-gif-viewercffbdde88c4db597c274c8cd3fb70310",
        "std-padding-mobile-desktop-none": "rockstargames-modules-core-gif-viewerbf7a717f6d28dd40467ba533fff67d10",
        "std-padding-desktop-mobile-none": "rockstargames-modules-core-gif-viewerae0964e311b92ceaebe99b540d3beb5a",
        "horizontal-line": "rockstargames-modules-core-gif-viewerf02660d108110f8ad4dfd0be18b027f2",
        gold: "rockstargames-modules-core-gif-viewerfc1a3a7680469b49a8fc20a092e1f4c6",
        gifWrapper: "rockstargames-modules-core-gif-viewerbee71bf6036d57496c2e791ac47b1b9e",
        gifWrapperHero: "rockstargames-modules-core-gif-viewerd7f36cad6d4e4eb32ec553bf74812236",
        muteBtn: "rockstargames-modules-core-gif-viewerdf3191e53d035955056329ece4a7025c",
        unMuted: "rockstargames-modules-core-gif-vieweraddfba273b85b13c083805654d3dbbf9",
        video: "rockstargames-modules-core-gif-viewerc4d9e6f3d76dc0e22ee8914f875a37f6",
        videoMobile: "rockstargames-modules-core-gif-viewerc6bb570ca58519071f681f317410e089",
        videoDesktop: "rockstargames-modules-core-gif-viewerc29cfac86e2c81ed526dac35af666f9d",
        mutable: "rockstargames-modules-core-gif-viewerd7de22cf0597def1dd4ca337c1401d4b"
      };
      var s = a(587),
        d = a(705);
      const t = e => {
          let {
            hashes: i,
            hover: a,
            loop: o,
            sound: s
          } = e;
          const {
            desktop: t = null,
            mobile: l = null
          } = i, [f, u] = (0, n.useState)(!0), m = {
            autoPlay: !a,
            hover: a,
            loop: o,
            sound: s,
            muted: f
          };
          return (0, d.jsxs)("div", {
            onClick: () => u(!f),
            children: [t && (0, d.jsx)(c, {
              className: [l ? r.hiddenMobile : "", r.videoDesktop].join(" "),
              hash: t,
              ...m
            }), l && (0, d.jsx)(c, {
              className: [t ? r.hiddenLarge : "", r.videoMobile].join(" "),
              hash: l,
              ...m
            }), m.sound ? (0, d.jsx)("div", {
              className: [r.muteBtn, f ? "" : r.unMuted].join(" ")
            }) : ""]
          })
        },
        c = e => {
          let {
            className: i,
            hash: a,
            hover: t,
            autoPlay: c,
            loop: l,
            muted: f,
            sound: u
          } = e;
          const {
            data: m
          } = (0, o.useQuery)(s.GifInfo, {
            variables: {
              hash: a
            }
          }), v = (0, n.useRef)();
          return m ? (0, d.jsx)("div", {
            className: [i, r.video, u ? r.mutable : ""].join(" "),
            onMouseEnter: () => t && void v.current.play(),
            onMouseLeave: () => t && (v.current.pause(), void(v.current.currentTime = 0)),
            children: (0, d.jsx)("video", {
              ref: v,
              src: m.gifInfo.file,
              autoPlay: c,
              loop: l,
              muted: f,
              playsInline: !0
            })
          }) : null
        },
        l = e => {
          let {
            hash: i,
            style: a,
            title: n,
            caption: o,
            hero: s = !1,
            loop: c = !0,
            sound: l = !1,
            hover: f = !1
          } = e;
          if (!i) return null;
          const u = "object" == typeof i ? i : Object.keys(i).map((e => ({
            [e]: i[e]
          })));
          return (0, d.jsxs)("figure", {
            className: `${r.gifWrapper} ${s?r.gifWrapperHero:""}`,
            style: a,
            children: [(0, d.jsx)(t, {
              hashes: u,
              hover: f,
              loop: c,
              sound: l,
              title: n ?? "R* Games"
            }), o && (0, d.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: o
              }
            })]
          })
        }
    },
    357: (e, i, a) => {
      "use strict";
      a.r(i), a.d(i, {
        default: () => n
      });
      const n = a(68).Z
    },
    587: e => {
      var i = {
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

      function a(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && i.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, i)
        }))
      }
      i.loc.source = {
        body: "query GifsList($cache: Boolean = true) {\n    gifsList {\n        hash\n        name\n    }\n}\n\nquery GifInfo($locale: String!, $hash: String!) {\n    gifInfo(locale: $locale, hash: $hash) {\n        file\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function o(e, i) {
        for (var a = 0; a < e.definitions.length; a++) {
          var n = e.definitions[a];
          if (n.name && n.name.value == i) return n
        }
      }

      function r(e, i) {
        var a = {
          kind: e.kind,
          definitions: [o(e, i)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var r = n[i] || new Set,
          s = new Set,
          d = new Set;
        for (r.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var t = d;
          d = new Set, t.forEach((function(e) {
            s.has(e) || (s.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return s.forEach((function(i) {
          var n = o(e, i);
          n && a.definitions.push(n)
        })), a
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          a(e, i), n[e.name.value] = i
        }
      })), e.exports = i, e.exports.GifsList = r(i, "GifsList"), e.exports.GifInfo = r(i, "GifInfo")
    }
  }
]);