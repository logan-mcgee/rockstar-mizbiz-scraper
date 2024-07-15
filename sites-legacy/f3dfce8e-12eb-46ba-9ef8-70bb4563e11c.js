! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f3dfce8e-12eb-46ba-9ef8-70bb4563e11c", e._sentryDebugIdIdentifier = "sentry-dbid-f3dfce8e-12eb-46ba-9ef8-70bb4563e11c")
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
        j: () => g,
        i: () => v
      });
      var t = n(51664),
        i = n(43924),
        l = n(22560),
        o = n(1740),
        s = n(42836),
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
            contentClassName: g = "",
            width: b,
            fadeIn: k = !0,
            cardIds: p,
            activeId: y,
            theme: h,
            title: w,
            gtm: _ = {},
            aspectRatio: N = "default",
            cardDimensions: S
          } = a, {
            left: x,
            top: E
          } = m, [j, D] = (0, t.useState)(-1), [I, T] = (0, t.useState)(p?.length || 0), {
            track: M
          } = (0, s.useGtmTrack)(), U = null !== p && (p?.length || 0) > 1 && ("flag_bg" === h || "fob" === S?.size), [V, C] = (0, d.useSearchParams)(), [F, H] = (0, t.useState)(!1), [L, A] = (0, t.useState)(!1), [P, $] = (0, t.useState)(), K = () => {
            const e = j > -1 ? j - 1 : 0;
            D(e), A(e <= 0), H(e >= I - 1), M({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              event_label: w ?? void 0,
              element_placement: w ?? void 0,
              position: j
            })
          }, R = () => {
            const e = j > -1 ? j + 1 : 0;
            D(e), A(e <= 0), H(e >= I - 1), M({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              event_label: w ?? void 0,
              element_placement: w ?? void 0,
              position: j
            })
          };
          (0, t.useEffect)((() => {
            T(p?.length || 0)
          }), [p?.length]), (0, t.useEffect)((() => {
            null !== j && null !== p && p && j < p.length && j > -1 && C({
              info: p[j].toString()
            })
          }), [j, p]), (0, t.useEffect)((() => {
            const e = p?.indexOf(y);
            e && D(e)
          }), [y, p]), (0, t.useEffect)((() => {
            if (null !== p && -1 === j && p && p.length > 0) {
              const e = V.get("info");
              p?.forEach(((a, n) => {
                a === e && (D(n), A(n <= 0), H(n >= I - 1))
              }))
            }
          }), [p, j]);
          const [q] = (0, t.useState)({
            y: E,
            x,
            top: 0,
            left: 0,
            width: b,
            height: u,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: U ? "0" : ""
          }), z = {
            opacity: 1
          }, B = (0, t.useRef)(null), O = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, W = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [G] = (0, t.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: U ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: O,
              y: O,
              top: O,
              left: O,
              width: O,
              height: O,
              border: O,
              background: {
                delay: .3
              }
            }
          }), [Q, Y] = (0, t.useState)({
            initial: q,
            shown: G
          });
          (0, t.useEffect)((() => {
            Y({
              initial: q,
              shown: G
            })
          }), [q, G]), (0, t.useEffect)((() => {
            const e = e => {
              "function" == typeof f && "Escape" === e.key && (f(), M({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: w ?? void 0,
                element_placement: w ?? void 0,
                ..._
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const J = () => {
              "function" == typeof f && (f(), M({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: w ?? void 0,
                element_placement: w ?? void 0,
                ..._
              }))
            },
            X = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let n = 0; n < e.children.length; n++) {
                const t = e.children[n];
                if (t.scrollHeight > t.clientHeight) return t;
                const i = X(t, a - 1);
                if (i) return i
              }
              return null
            },
            Z = e => {
              if (ae?.current?.children) {
                let a = null;
                const n = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return P?.queried ? a = P.element : (a = X(e, 2), $({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += n)
                }
              }
            },
            ee = k ? 0 : 1,
            ae = (0, t.useRef)(null),
            ne = (0, r.jsx)(l.motion.button, {
              className: "rockstargames-sites-legacyb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: W,
              onClick: () => {
                J()
              },
              onKeyDown: Z,
              onKeyUp: Z
            });
          return (0, t.useMemo)((() => (0, r.jsx)("div", {
            className: "rockstargames-sites-legacye9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": U,
            "data-aspect-ratio": N,
            children: (0, r.jsxs)(i.cp, {
              children: [(0, r.jsx)(l.motion.div, {
                className: "rockstargames-sites-legacyc8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: z,
                transition: O,
                onClick: () => J()
              }), U && (0, r.jsxs)("div", {
                className: "rockstargames-sites-legacyeeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, r.jsxs)(l.motion.div, {
                  className: "rockstargames-sites-legacyb6e3406cb9a52fc7583d5c74681e88bc",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: W,
                  children: [(0, r.jsx)("button", {
                    type: "button",
                    "aria-label": "Previous",
                    onClick: K,
                    disabled: L,
                    onKeyDown: Z,
                    onKeyUp: Z
                  }), (0, r.jsxs)("div", {
                    className: "rockstargames-sites-legacyff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", j + 1, (0, r.jsx)("div", {
                      className: "rockstargames-sites-legacycd9c6033ad00894881fa5451acfe15da"
                    }), p?.length, " "]
                  }), (0, r.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: R,
                    disabled: F,
                    onKeyDown: Z,
                    onKeyUp: Z,
                    "data-autofocus": !0
                  })]
                }), ne]
              }), (0, r.jsx)(l.motion.div, {
                className: "rockstargames-sites-legacyfab99cc2e2ca2e2a2158f9d41e764558",
                ref: B,
                initial: "initial",
                animate: "shown",
                variants: Q,
                transition: O,
                style: v,
                children: (0, r.jsxs)(l.motion.div, {
                  className: (0, o.classList)("rockstargames-sites-legacyb6aa5ebf680af5d95d0e9c76ac36ed82", c),
                  children: [!U && ne, (0, r.jsx)(l.motion.div, {
                    className: (0, o.classList)("rockstargames-sites-legacyd901631c0b9d817396c8352c027a2a0d", g),
                    initial: {
                      opacity: ee
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: W,
                    ref: ae,
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
        g = e => {
          let {
            children: a
          } = e;
          const [n, i] = (0, t.useState)(f), l = (0, t.useMemo)((() => n?.content ? (0, r.jsx)(c, {
            modal: n
          }) : null), [n]);
          return (0, r.jsx)(m.Provider, {
            value: [l, i],
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
        l = n(51664),
        o = n(33052),
        s = n(98e3),
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
        const [, n] = (0, s.i)(), [v, g] = (0, t.useSearchParams)(), {
          pathname: b
        } = (0, t.useLocation)(), {
          data: k,
          loading: p
        } = (0, o.useQuery)(u.MetaUrlInfo, {
          variables: {
            url: b.replace(/\/$/, "")
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), y = (0, c.useLocale)(), h = k?.metaUrlInfo?.tina;
        return (0, l.useEffect)((() => {
          const e = v.get("video");
          if (!e || !h) return void n(null);
          const t = Number(h?.payload?.content[0].content[0]?.tag ?? 0);
          let i;
          i = 40 === t && ["pt_br", "zh_tw", "zh_hans", "ko_kr", "ru_ru", "ja_jp", "pl_pl"].includes(y) ? "en_us" : y;
          const l = (0, m.jsx)(r.VideoWithPlaylist, {
              tagIds: [t],
              locale: i,
              playlistTitle: a("Up Next"),
              groupTypes: ["trailer", "feature"],
              currentVideoId: e,
              isModal: !0
            }),
            o = {
              left: window.innerWidth / 2,
              top: window.innerHeight / 2
            };
          n({
            content: l,
            rect: o,
            onClose: () => {
              g({})
            },
            title: "Video Modal",
            contentClassName: "rockstargames-sites-legacya1b74831bac97f1749e525bcc2aeccb2"
          })
        }), [v.get("video"), y, h]), (0, l.useEffect)((() => () => n(null)), []), p || h ? p ? (0, m.jsx)("div", {
          className: "rockstargames-sites-legacye7319efabeddf6cdc8c95f038912d0c1",
          children: (0, m.jsx)(i.LoadingAnimation, {})
        }) : (0, m.jsx)(d.TinaParser, {
          components: f.componentsForTinaParser,
          tina: h
        }) : (0, m.jsx)(i.Wasted, {})
      }));
      var g = n(54512);
      const b = e => {
          let {
            children: a,
            brand: n,
            setHeaderHidden: t
          } = e;
          const {
            setState: i
          } = (0, g.wD)();
          return (0, l.useLayoutEffect)((() => {
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
          return (0, m.jsx)(b, {
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
        var l = t[a] || new Set,
          o = new Set,
          s = new Set;
        for (l.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var t = i(e, a);
          t && n.definitions.push(t)
        })), n
      }(a, "MetaUrlInfo")
    }
  }
]);