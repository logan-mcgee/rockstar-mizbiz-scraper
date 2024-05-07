! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "88920215-8109-4403-8966-f7857ceeb159", e._sentryDebugIdIdentifier = "sentry-dbid-88920215-8109-4403-8966-f7857ceeb159")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [900], {
    98e3: (e, a, n) => {
      "use strict";
      n.d(a, {
        j: () => b,
        i: () => v
      });
      var t = n(51664),
        i = n(94072),
        o = n(22560),
        s = n(1740),
        l = n(42836),
        d = n(57013);
      var r = n(95240);
      const c = e => {
          let {
            modal: a
          } = e;
          const {
            content: n,
            className: c,
            height: u,
            onClose: f,
            rect: m = {
              left: 0,
              top: 0
            },
            contentStyle: v = {},
            contentClassName: b = "",
            width: g,
            fadeIn: k = !0,
            cardIds: y,
            theme: p,
            title: h,
            gtm: w = {},
            aspectRatio: N = "default",
            cardDimensions: _
          } = a, {
            left: S,
            top: x
          } = m, [j, E] = (0, t.useState)(-1), {
            track: D
          } = (0, l.useGtmTrack)(), I = null !== y && (y?.length || 0) > 1 && ("flag_bg" === p || "fob" === _?.size), [T, M] = (0, d.useSearchParams)(), [V, C] = (0, t.useState)(!1), [U, F] = (0, t.useState)(!1), L = () => {
            const e = j > -1 ? j - 1 : 0;
            E(e), F(e <= 0), C(e >= (y?.length || 0) - 1), D({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: j
            })
          }, P = () => {
            const e = j > -1 ? j + 1 : 0;
            E(e), F(e <= 0), C(e >= (y?.length || 0) - 1), D({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: j
            })
          };
          (0, t.useEffect)((() => {
            null !== j && null !== y && y && j < y.length && j > -1 && M({
              info: y[j].toString()
            })
          }), [j, y]), (0, t.useEffect)((() => {
            if (null !== y && -1 === j && y && y.length > 0) {
              const e = T.get("info");
              y?.forEach(((a, n) => {
                a === e && (E(n), F(n <= 0), C(n >= (y?.length || 0) - 1))
              }))
            }
          }), [y, j]);
          const [H] = (0, t.useState)({
            y: x,
            x: S,
            top: 0,
            left: 0,
            width: g,
            height: u,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: I ? "0" : ""
          }), A = {
            opacity: 1
          }, $ = (0, t.useRef)(null), K = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, R = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [z] = (0, t.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: I ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: K,
              y: K,
              top: K,
              left: K,
              width: K,
              height: K,
              border: K,
              background: {
                delay: .3
              }
            }
          }), [B, W] = (0, t.useState)({
            initial: H,
            shown: z
          });
          (0, t.useEffect)((() => {
            W({
              initial: H,
              shown: z
            })
          }), [H, z]), (0, t.useEffect)((() => {
            const e = e => {
              "function" == typeof f && "Escape" === e.key && (f(), D({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: h ?? void 0,
                ...w
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const q = () => {
              "function" == typeof f && (f(), D({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: h ?? void 0,
                ...w
              }))
            },
            O = e => {
              if (Q?.current?.children && Q.current.children[0]) {
                const a = Q.current.children[0];
                switch (e.key) {
                  case "ArrowDown":
                    e.preventDefault(), a.scrollTop += 25;
                    break;
                  case "ArrowUp":
                    e.preventDefault(), a.scrollTop -= 25
                }
              }
            },
            G = k ? 0 : 1,
            Q = (0, t.useRef)(null),
            Y = (0, r.jsx)(o.motion.button, {
              className: "rockstargames-sites-legacyb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: R,
              onClick: () => {
                q()
              },
              onKeyDown: O,
              onKeyUp: O
            });
          return (0, t.useMemo)((() => (0, r.jsx)("div", {
            className: "rockstargames-sites-legacye9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": I,
            "data-aspect-ratio": N,
            children: (0, r.jsxs)(i.cp, {
              children: [(0, r.jsx)(o.motion.div, {
                className: "rockstargames-sites-legacyc8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: A,
                transition: K,
                onClick: () => q()
              }), I && (0, r.jsxs)("div", {
                className: "rockstargames-sites-legacyeeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, r.jsxs)(o.motion.div, {
                  className: "rockstargames-sites-legacyb6e3406cb9a52fc7583d5c74681e88bc",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: R,
                  children: [(0, r.jsx)("button", {
                    type: "button",
                    "aria-label": "Previous",
                    onClick: L,
                    disabled: U,
                    onKeyDown: O,
                    onKeyUp: O
                  }), (0, r.jsxs)("div", {
                    className: "rockstargames-sites-legacyff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", j + 1, (0, r.jsx)("div", {
                      className: "rockstargames-sites-legacycd9c6033ad00894881fa5451acfe15da"
                    }), y?.length, " "]
                  }), (0, r.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: P,
                    disabled: V,
                    onKeyDown: O,
                    onKeyUp: O
                  })]
                }), Y]
              }), (0, r.jsx)(o.motion.div, {
                className: "rockstargames-sites-legacyfab99cc2e2ca2e2a2158f9d41e764558",
                ref: $,
                initial: "initial",
                animate: "shown",
                variants: B,
                transition: K,
                style: v,
                children: (0, r.jsxs)(o.motion.div, {
                  className: (0, s.classList)("rockstargames-sites-legacyb6aa5ebf680af5d95d0e9c76ac36ed82", c),
                  children: [!I && Y, (0, r.jsx)(o.motion.div, {
                    className: (0, s.classList)("rockstargames-sites-legacyd901631c0b9d817396c8352c027a2a0d", b),
                    initial: {
                      opacity: G
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: R,
                    ref: Q,
                    children: n
                  }), (0, r.jsx)("button", {
                    className: "rockstargames-sites-legacyf1ecf74036b2b7fdfda3613619af40cf",
                    type: "button",
                    "aria-label": "End of modal"
                  })]
                })
              })]
            })
          })), [n, j, v])
        },
        u = "modal-context",
        f = [null, () => null],
        m = window?.[u] ?? (window[u] = (0, t.createContext)(f)),
        v = () => (0, t.useContext)(m),
        b = e => {
          let {
            children: a
          } = e;
          const [n, i] = (0, t.useState)(f), o = (0, t.useMemo)((() => n?.content ? (0, r.jsx)(c, {
            modal: n
          }) : null), [n]);
          return (0, r.jsx)(m.Provider, {
            value: [o, i],
            children: a
          })
        }
    },
    44900: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        default: () => k
      });
      var t = n(82708),
        i = n(9860),
        o = n(51664),
        s = n(33052),
        l = n(98e3),
        d = n(1740),
        r = n(84644),
        c = n(45792),
        u = n(1108),
        f = n(6460);
      var m = n(95240);
      const v = (0, c.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [, n] = (0, l.i)(), [v, b] = (0, t.useSearchParams)(), {
          pathname: g
        } = (0, t.useLocation)(), {
          data: k,
          loading: y
        } = (0, s.useQuery)(u.MetaUrlInfo, {
          variables: {
            url: g.replace(/\/$/, "")
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), p = (0, c.useLocale)(), h = k?.metaUrlInfo?.tina;
        return (0, o.useEffect)((() => {
          const e = Number(v.get("video"));
          if (!e || !h) return void n(null);
          const t = Number(h?.payload?.content[0].content[0]?.tag) ?? "";
          let i;
          i = 40 === t && ["pt_br", "zh_tw", "zh_hans", "ko_kr", "ru_ru", "ja_jp", "pl_pl"].includes(p) ? "en_us" : p;
          const o = (0, m.jsx)(r.VideoWithPlaylist, {
              tagIds: [t],
              locale: i,
              playlistTitle: a("Up Next"),
              groupTypes: ["trailer", "feature"],
              currentVideoId: e,
              isModal: !0
            }),
            s = {
              left: window.innerWidth / 2,
              top: window.innerHeight / 2
            };
          n({
            content: o,
            rect: s,
            onClose: () => {
              b({})
            },
            title: "Video Modal",
            contentClassName: "rockstargames-sites-legacya1b74831bac97f1749e525bcc2aeccb2"
          })
        }), [v.get("video"), p, h]), (0, o.useEffect)((() => () => n(null)), []), y || h ? y ? (0, m.jsx)("div", {
          className: "rockstargames-sites-legacye7319efabeddf6cdc8c95f038912d0c1",
          children: (0, m.jsx)(i.LoadingAnimation, {})
        }) : (0, m.jsx)(d.TinaParser, {
          components: f.componentsForTinaParser,
          tina: h
        }) : (0, m.jsx)(i.Wasted, {})
      }));
      var b = n(54512);
      const g = e => {
          let {
            children: a,
            brand: n,
            setHeaderHidden: t
          } = e;
          const {
            setState: i
          } = (0, b.wD)();
          return (0, o.useLayoutEffect)((() => {
            i("brand", n)
          }), []), (0, m.jsx)("div", {
            className: "rockstargames-sites-legacyfa85682f753d59e768dbb3eedf01a62a",
            "data-brand": n,
            children: a
          })
        },
        k = (0, i.withSearchbarErrorBoundary)((e => {
          let {
            setHeaderHidden: a
          } = e;
          const n = [{
            path: "/",
            element: (0, m.jsx)(v, {})
          }, {
            path: "*",
            element: (0, m.jsx)(i.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, m.jsx)(g, {
            brand: "reddeadredemption",
            setHeaderHidden: a,
            children: (0, t.useRoutes)(n)
          })
        }))
    },
    1108: e => {
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
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
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
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        keywords\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function i(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var t = e.definitions[n];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.MetaUrlInfo = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var o = t[a] || new Set,
          s = new Set,
          l = new Set;
        for (o.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            s.has(e) || (s.add(e), (t[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var t = i(e, a);
          t && n.definitions.push(t)
        })), n
      }(a, "MetaUrlInfo")
    }
  }
]);