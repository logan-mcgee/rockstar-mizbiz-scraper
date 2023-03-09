(self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [4], {
    8004: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        default: () => C
      });
      var i = a(822),
        t = a(8008),
        d = a(6711),
        l = a(1338),
        o = a(8820),
        r = a(8976),
        s = a(9929);
      const c = {
        mobileNav: "e3487da3b1b0786f3445",
        mobileNavOpen: "b765ad01a4ebe49de2dd",
        activeLink: "ba17ad2b77ee3fc833a6"
      };
      var u = a(3322);
      const m = (0, s.withTranslations)((e => {
        let {
          t: n
        } = e;
        const a = (0, l.YM)(),
          {
            state: {
              headerHeight: t,
              mobileNavOpen: d
            },
            setMobileNavOpen: o
          } = (0, l.MB)();
        return (0, i.useEffect)((() => {
          const e = e => {
            let {
              keyCode: n
            } = e;
            27 === n && o(!1)
          };
          return document.addEventListener("keydown", e, !1), () => {
            document.removeEventListener("keydown", e, !1)
          }
        }), []), (0, u.jsx)("nav", {
          className: [c.mobileNav, d ? c.mobileNavOpen : ""].join(" "),
          style: {
            "--header-height": `${t}px`
          },
          children: a.map((e => {
            let {
              activeExact: a,
              title: i,
              to: t
            } = e;
            return (0, u.jsx)(r.A, {
              end: a,
              to: t,
              target: t.startsWith("http") ? "_blank" : "_self",
              className: e => {
                let {
                  isActive: n
                } = e;
                return n ? c.activeLink : null
              },
              children: n(i)
            }, t)
          }))
        })
      }));
      var k = a(6803),
        v = a(4859),
        f = a(9542),
        p = a(1914),
        b = a(7519),
        N = a(5220),
        g = a(2091);
      const S = {
          BuyNow: p.Z,
          TinaWrapper: b.Z
        },
        h = () => {
          const {
            track: e
          } = (0, d.useGtmTrack)(), [n, a] = (0, k.useSearchParams)(), {
            data: l
          } = (0, v.useQuery)(g.BuyNowQ, {
            variables: {
              ids: ["6a84"]
            }
          }), [o, r] = (0, t.useModal)();
          return (0, i.useEffect)((() => {
            document.documentElement.style.setProperty("--body-overflow", o ? "hidden" : "auto")
          }), [o]), (0, i.useEffect)((() => {
            n.get("info") || r(null)
          }), [n]), (0, i.useEffect)((() => {
            if ("order" !== n.get("info") || !l) return;
            const i = l?.tinaModulesInfo?.[0].tina,
              t = (0, u.jsx)(f.TinaParser, {
                components: {
                  gen9: S
                },
                tina: i
              }),
              d = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            r({
              content: t,
              contentStyle: {
                "--modal-content-max-width": "90%",
                "--modal-content-padding": "calc(var(--modal-padding) + var(--padding-md)) var(--padding-lg) var(--padding-lg)"
              },
              rect: d,
              onClose: () => {
                a({}), e({
                  event_action: "close",
                  event_category: "modal",
                  event: "modal_close",
                  event_label: "buy now"
                })
              }
            })
          }), [l, n.get("info")]), (0, i.useEffect)((() => {
            if ("trailer" !== n.get("info")) return;
            const i = (0, u.jsx)(N.Z, {
                id: 12258
              }),
              t = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            r({
              content: i,
              rect: t,
              contentStyle: {
                overflow: "hidden"
              },
              onClose: () => {
                a({}), e({
                  event_action: "close",
                  event_category: "modal",
                  event: "modal_close",
                  event_label: "trailer"
                })
              }
            })
          }), [n.get("info")]), o
        };
      var y = a(8865),
        w = a.n(y),
        F = a(407);
      const x = () => {
        const {
          setBrand: e
        } = (0, l.MB)();
        return (0, i.useEffect)((() => {
          e("gtao")
        }), []), (0, u.jsx)("span", {
          className: "ff4de5f0e1d8485787a9",
          children: (0, u.jsx)(w(), {
            query: F.FeedbackSteps,
            mutation: F.SubmitFeedback,
            type: "gtao"
          })
        })
      };
      var V = a(9803),
        E = a(7311),
        T = a.n(E);
      const j = {
          guideNavMobile: "f2d01cf17573bd802e0b",
          guideNavMobileContent: "ced39cc8b3a309d5ed39",
          sections: "ab0c2836b0df20857390",
          activeSection: "d7c364fa12fcf945179b",
          sectionsOpen: "b16827795aaa9023a0ca"
        },
        _ = e => {
          let {
            currentId: n
          } = e;
          const a = (0, l.yv)(),
            [t, d] = (0, i.useState)(!1),
            [o, s] = (0, i.useState)(null),
            [c, m] = (0, i.useState)(null),
            [v] = (0, k.useSearchParams)();
          return (0, i.useEffect)((() => {
            T().cloneDeepWith(a, ((e, a, i) => {
              n === e && s(i?.children ?? null)
            }))
          }), [n, a, v.get("section")]), (0, i.useEffect)((() => {
            m(null), T().cloneDeepWith(o, ((e, n, a) => {
              "id_hash" === n && v.get("section") === e && m(a)
            }))
          }), [o, v.get("section")]), o ? (0, u.jsx)("div", {
            className: j.guideNavMobile,
            children: (0, u.jsxs)("div", {
              className: j.guideNavMobileContent,
              children: [(0, u.jsx)("div", {
                className: [j.sections, t ? j.sectionsOpen : ""].join(" "),
                children: o.map((e => {
                  let {
                    id_hash: n,
                    title: a,
                    to: i
                  } = e;
                  return (0, u.jsx)(r.A, {
                    className: n === c?.id_hash ? j.activeSection : "",
                    to: i,
                    onClick: () => d(!1),
                    children: a
                  }, i)
                }))
              }), (0, u.jsx)("button", {
                type: "button",
                onClick: () => d(!t),
                children: "Jump To"
              })]
            })
          }) : null
        };
      var D = a(2267);
      const B = (0, r.withSimpleErrorBoundary)((() => {
        const {
          setBrand: e,
          state: n
        } = (0, l.MB)();
        (0, i.useEffect)((() => {
          e("gtao")
        }), []);
        const {
          guideId: a
        } = (0, k.useParams)(), t = (0, r.useTinaModuleFetchByIds)({
          ids: [a],
          setTitleDataPath: "tinaModulesInfo[0].title_doc"
        })?.[0] ?? {};
        return (0, i.useMemo)((() => {
          if (!t) return null;
          const {
            tina: e,
            type: n
          } = t;
          if (n && "gen9-guide" !== n) throw Error("Invalid type, a guide is needed.");
          return (0, u.jsxs)("div", {
            className: "e806501412036864ea86",
            children: [(0, u.jsx)(V.Z, {
              currentId: a
            }), e ? (0, u.jsx)(f.TinaParser, {
              components: D.componentsForTinaParserGuide,
              tina: e
            }) : "", (0, u.jsx)(_, {
              currentId: a
            })]
          })
        }), [JSON.stringify(t)])
      }));
      var M = a(5038);
      const $ = (0, r.withSimpleErrorBoundary)((e => {
          let {
            componentsForTinaParser: n,
            root: a,
            url: t
          } = e;
          const {
            data: d
          } = (0, v.useQuery)(M.MetaUrlInfo, {
            variables: {
              url: t
            },
            setTitleDataPath: "metaUrlInfo.title"
          }), {
            setBrand: o
          } = (0, l.MB)(), [r, s] = (0, i.useState)(null);
          return (0, i.useEffect)((() => {
            const e = d?.metaUrlInfo?.tina ?? null,
              n = e?.payload?.meta?.brand ?? null;
            n && o(n), e && s(e)
          }), [d]), r ? (0, u.jsx)("div", {
            "data-root": a,
            className: "f45d47478d161a2e784c",
            children: (0, u.jsx)(f.TinaParser, {
              components: n,
              tina: r
            })
          }) : null
        })),
        I = ["/gta-v", "/gta-online", "/gta-online/guides", "/gta-online/prime-plus-offer", "/gta-plus", "/gta-plus/legal"],
        O = e => {
          let {
            root: n
          } = e;
          const {
            pathname: a
          } = (0, k.useLocation)();
          return (0, i.useMemo)((() => {
            const e = a.replace(/\/$/, "");
            return I.includes(e) ? (0, u.jsx)($, {
              componentsForTinaParser: D.componentsForTinaParser,
              root: n,
              url: e
            }) : null
          }), [a])
        },
        A = (0, r.withSearchbarErrorBoundary)((e => {
          let {
            routeRoot: n
          } = e;
          const a = [{
            path: "/",
            element: (0, u.jsx)(O, {
              root: n
            })
          }, {
            path: "/feedback",
            element: (0, u.jsx)(x, {})
          }, {
            path: "/guides",
            element: (0, u.jsx)(O, {
              root: n
            })
          }, {
            path: "/guides/:guideId",
            element: (0, u.jsx)(B, {})
          }, {
            path: "/legal",
            element: (0, u.jsx)(O, {
              root: n
            })
          }, {
            path: "/prime-plus-offer",
            element: (0, u.jsx)(O, {
              root: n
            })
          }, {
            path: "*",
            element: (0, u.jsx)(r.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, k.useRoutes)(a)
        })),
        P = e => {
          let {
            config: n
          } = e;
          const {
            state: {
              headerHeight: a
            }
          } = (0, l.MB)();
          return (0, u.jsx)("div", {
            className: "b384ee79d176061b46a4",
            style: {
              marginTop: `${a}px`
            },
            children: (0, u.jsx)(A, {
              routeRoot: n?.routeRoot
            })
          })
        },
        U = e => {
          let {
            config: n,
            setHeaderHidden: a
          } = e;
          const {
            setBrand: t
          } = (0, l.MB)(), {
            setCharactersNeeded: r
          } = (0, d.useRockstarUser)();
          return (0, i.useLayoutEffect)((() => (t("gtao"), a(!0), r("gtao"), () => {
            a(!1), r(null)
          })), []), (0, u.jsxs)("div", {
            className: "e388538908afdf11891a",
            children: [(0, u.jsx)(h, {}), (0, u.jsx)(m, {}), (0, u.jsx)(o.Z, {}), (0, u.jsx)(P, {
              config: n
            })]
          })
        },
        C = e => {
          let {
            config: n,
            setHeaderHidden: a
          } = e;
          return (0, u.jsx)(t.ModalProvider, {
            children: (0, u.jsx)(U, {
              config: n,
              setHeaderHidden: a
            })
          })
        }
    },
    407: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: 'mutation SubmitFeedback(\n    $content: String!\n    $feedback_step: Int!\n    $cache: Boolean = true\n) {\n    submittal: gtaoFeedbackSubmit(\n        content: $content\n        feedback_step: $feedback_step\n    ) {\n        id\n    }\n}\n\nquery FeedbackSteps($locale: String!, $step: String, $cache: Boolean = true) {\n    meta: metaUrl(\n        locale: $locale\n        domain: "www"\n        url: "/GTAOnline/feedback"\n        fallbackUrl: "/GTAOnline/"\n    ) {\n        title\n    }\n    tree: gtaoFeedbackSteps(locale: $locale, step: $step) {\n        path {\n            id\n            id_hash\n            feedback_type {\n                name\n                title\n            }\n        }\n        next {\n            id_hash\n            message\n            feedback_type {\n                name\n                title\n                href\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }

      function d(e, n) {
        var a = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var d = i[n] || new Set,
          l = new Set,
          o = new Set;
        for (d.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var r = o;
          o = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return l.forEach((function(n) {
          var i = t(e, n);
          i && a.definitions.push(i)
        })), a
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.SubmitFeedback = d(n, "SubmitFeedback"), e.exports.FeedbackSteps = d(n, "FeedbackSteps")
    },
    2091: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query BuyNowQ($ids: [String]!, $locale: String!) {\n    tinaModulesInfo(ids: $ids, locale: $locale) {\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.BuyNowQ = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var d = i[n] || new Set,
          l = new Set,
          o = new Set;
        for (d.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var r = o;
          o = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return l.forEach((function(n) {
          var i = t(e, n);
          i && a.definitions.push(i)
        })), a
      }(n, "BuyNowQ")
    },
    5038: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        keywords\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.MetaUrlInfo = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var d = i[n] || new Set,
          l = new Set,
          o = new Set;
        for (d.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var r = o;
          o = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return l.forEach((function(n) {
          var i = t(e, n);
          i && a.definitions.push(i)
        })), a
      }(n, "MetaUrlInfo")
    }
  }
]);