(self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [137], {
    1137: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, {
        default: () => H
      });
      var a = i(822),
        t = i(8008),
        l = i(6711),
        s = i(4372),
        d = i(5818),
        o = i(8976),
        r = i(9929);
      const c = {
        mobileNav: "e3487da3b1b0786f3445",
        mobileNavOpen: "b765ad01a4ebe49de2dd",
        activeLink: "ba17ad2b77ee3fc833a6"
      };
      var u = i(9706);
      const m = (0, r.withTranslations)((e => {
        let {
          t: n
        } = e;
        const i = (0, s.YM)(),
          {
            state: {
              headerHeight: t,
              mobileNavOpen: l
            },
            setMobileNavOpen: d
          } = (0, s.MB)();
        return (0, a.useEffect)((() => {
          const e = e => {
            let {
              keyCode: n
            } = e;
            27 === n && d(!1)
          };
          return document.addEventListener("keydown", e, !1), () => {
            document.removeEventListener("keydown", e, !1)
          }
        }), []), (0, u.jsx)("nav", {
          className: [c.mobileNav, l ? c.mobileNavOpen : ""].join(" "),
          style: {
            "--header-height": `${t}px`
          },
          children: i.map((e => {
            let {
              activeExact: i,
              title: a,
              to: t
            } = e;
            return (0, u.jsx)(o.A, {
              end: i,
              to: t,
              target: t.startsWith("http") ? "_blank" : "_self",
              className: e => {
                let {
                  isActive: n
                } = e;
                return n ? c.activeLink : null
              },
              children: n(a)
            }, t)
          }))
        })
      }));
      var k = i(7814),
        v = i(4859),
        f = i(9542),
        p = i(7110),
        g = i(5174),
        b = i(1436),
        h = i(4786);
      const N = {
          BuyNow: p.Z,
          TinaWrapper: g.Z
        },
        S = () => {
          const {
            setBodyIsScrollable: e
          } = (0, r.useBodyScrollable)(), {
            track: n
          } = (0, l.useGtmTrack)(), [i, s] = (0, k.useSearchParams)(), {
            data: d
          } = (0, v.useQuery)(h.BuyNowQ, {
            variables: {
              ids: ["6a84"]
            }
          }), [o, c] = (0, t.useModal)();
          return (0, a.useEffect)((() => {
            e(!o)
          }), [o]), (0, a.useEffect)((() => {
            i.get("info") || c(null)
          }), [i]), (0, a.useEffect)((() => {
            if ("order" !== i.get("info") || !d) return;
            const e = d?.tinaModulesInfo?.[0].tina,
              a = (0, u.jsx)(f.TinaParser, {
                components: {
                  gen9: N
                },
                tina: e
              }),
              t = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            c({
              content: a,
              contentStyle: {
                "--modal-content-max-width": "90%",
                "--modal-content-padding": "calc(var(--modal-padding) + var(--padding-md)) var(--padding-lg) var(--padding-lg)"
              },
              rect: t,
              onClose: () => {
                s({}), n({
                  event_action: "close",
                  event_category: "modal",
                  event: "modal_close",
                  event_label: "buy now"
                })
              }
            }), n({
              event: "trackPageview",
              card_id: "order",
              card_name: "order"
            })
          }), [d, i.get("info")]), (0, a.useEffect)((() => {
            if ("trailer" !== i.get("info")) return;
            const e = (0, u.jsx)(b.Z, {
                id: 12258
              }),
              a = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            c({
              content: e,
              rect: a,
              contentStyle: {
                overflow: "hidden"
              },
              onClose: () => {
                s({}), n({
                  event_action: "close",
                  event_category: "modal",
                  event: "modal_close",
                  event_label: "trailer"
                })
              }
            }), n({
              event: "trackPageview",
              card_id: "trailer",
              card_name: "trailer"
            })
          }), [i.get("info")]), o
        };
      var y = i(389),
        w = i.n(y),
        x = i(8865),
        F = i.n(x),
        V = i(6909);
      const j = () => {
        const {
          setBrand: e
        } = (0, s.MB)();
        return (0, a.useEffect)((() => {
          e("gtao")
        }), []), (0, u.jsx)("span", {
          className: "ff4de5f0e1d8485787a9",
          children: (0, u.jsx)(F(), {
            query: V.FeedbackSteps,
            mutation: V.SubmitFeedback,
            type: "gtao"
          })
        })
      };
      var E = i(9163),
        T = i(948),
        _ = i.n(T);
      const D = {
          guideNavMobile: "f2d01cf17573bd802e0b",
          guideNavMobileContent: "ced39cc8b3a309d5ed39",
          sections: "ab0c2836b0df20857390",
          activeSection: "d7c364fa12fcf945179b",
          sectionsOpen: "b16827795aaa9023a0ca"
        },
        B = e => {
          let {
            currentId: n
          } = e;
          const i = (0, s.yv)(),
            [t, l] = (0, a.useState)(!1),
            [d, r] = (0, a.useState)(null),
            [c, m] = (0, a.useState)(null),
            [v] = (0, k.useSearchParams)();
          return (0, a.useEffect)((() => {
            _().cloneDeepWith(i, ((e, i, a) => {
              n === e && r(a?.children ?? null)
            }))
          }), [n, i, v.get("section")]), (0, a.useEffect)((() => {
            m(null), _().cloneDeepWith(d, ((e, n, i) => {
              "id_hash" === n && v.get("section") === e && m(i)
            }))
          }), [d, v.get("section")]), d ? (0, u.jsx)("div", {
            className: D.guideNavMobile,
            children: (0, u.jsxs)("div", {
              className: D.guideNavMobileContent,
              children: [(0, u.jsx)("div", {
                className: [D.sections, t ? D.sectionsOpen : ""].join(" "),
                children: d.map((e => {
                  let {
                    id_hash: n,
                    title: i,
                    to: a
                  } = e;
                  return (0, u.jsx)(o.A, {
                    className: n === c?.id_hash ? D.activeSection : "",
                    to: a,
                    onClick: () => l(!1),
                    children: i
                  }, a)
                }))
              }), (0, u.jsx)("button", {
                type: "button",
                onClick: () => l(!t),
                children: "Jump To"
              })]
            })
          }) : null
        };
      var M = i(2253);
      const $ = (0, o.withSimpleErrorBoundary)((() => {
        const {
          setBrand: e,
          state: n
        } = (0, s.MB)();
        (0, a.useEffect)((() => {
          e("gtao")
        }), []);
        const {
          guideId: i
        } = (0, k.useParams)(), t = (0, o.useTinaModuleFetchByIds)({
          ids: [i],
          setTitleDataPath: "tinaModulesInfo[0].title_doc"
        })?.[0] ?? {};
        return (0, a.useMemo)((() => {
          if (!t) return null;
          const {
            tina: e,
            type: n
          } = t;
          if (n && "gen9-guide" !== n) throw Error("Invalid type, a guide is needed.");
          return (0, u.jsxs)("div", {
            className: "e806501412036864ea86",
            children: [(0, u.jsx)(E.Z, {
              currentId: i
            }), e ? (0, u.jsx)(f.TinaParser, {
              components: M.componentsForTinaParserGuide,
              tina: e
            }) : "", (0, u.jsx)(B, {
              currentId: i
            })]
          })
        }), [JSON.stringify(t)])
      }));
      var I = i(8034);
      const O = (0, o.withSimpleErrorBoundary)((e => {
          let {
            componentsForTinaParser: n,
            root: i,
            url: t
          } = e;
          const {
            data: l
          } = (0, v.useQuery)(I.MetaUrlInfo, {
            variables: {
              url: t
            },
            setTitleDataPath: "metaUrlInfo.title"
          }), {
            setBrand: d
          } = (0, s.MB)(), [o, r] = (0, a.useState)(null);
          return (0, a.useEffect)((() => {
            const e = l?.metaUrlInfo?.tina ?? null,
              n = e?.payload?.meta?.brand ?? null;
            n && d(n), e && r(e)
          }), [l]), o ? (0, u.jsx)("div", {
            "data-root": i,
            className: "f45d47478d161a2e784c",
            children: (0, u.jsx)(f.TinaParser, {
              components: n,
              tina: o
            })
          }) : null
        })),
        A = ["/gta-v", "/gta-online", "/gta-online/guides", "/gta-online/prime-plus-offer", "/gta-plus", "/gta-plus/legal", "/gta-online/license-plates", "/gta-online/heists/lsdw", "/gta-online/heists/cayo-perico-heist", "/gta-online/heists/diamond-casino-heist", "/gta-online/heists/doomsday-heist", "/gta-online/heists/original-heists", "/gta-online/businesses/drug-wars", "/gta-online/businesses/the-contract", "/gta-online/businesses/after-hours", "/gta-online/businesses/smugglers-run", "/gta-online/businesses/gunrunning", "/gta-online/businesses/bikers", "/gta-online/businesses/finance-and-felony", "/gta-online/businesses/import-export", "/gta-online/social-spaces/los-santos-tuners", "/gta-online/social-spaces/diamond-casino-resort", "/gta-online/contact-missions/operation-paper-trail", "/gta-online/contact-missions/superyacht-life", "/gta-online/contact-missions/last-play", "/gta-online/contact-missions/premium-deluxe-repo", "/gta-online/contact-missions/dispatch-services", "/gta-online/contact-missions/lowriders", "/gta-online/contact-missions/dlc-1-2023", "/gta-online/series-modes/arena-war", "/gta-online/series-modes/survivals", "/gta-online/series-modes/racing", "/gta-online/series-modes/adversary-modes", "/gta-online/series-modes/deathmatches", "/gta-online/special-interests/vehicles-enthusiast", "/gta-online/special-interests/weapons-expert"],
        P = e => {
          let {
            root: n
          } = e;
          const {
            pathname: i
          } = (0, k.useLocation)();
          return (0, a.useMemo)((() => {
            const e = i.replace(/\/$/, "");
            return A.includes(e) ? (0, u.jsx)(O, {
              componentsForTinaParser: M.componentsForTinaParser,
              root: n,
              url: e
            }) : null
          }), [i])
        },
        U = (0, o.withSearchbarErrorBoundary)((e => {
          let {
            routeRoot: n
          } = e;
          const i = [{
            path: "/",
            element: (0, u.jsx)(P, {
              root: n
            })
          }, {
            path: "/feedback",
            element: (0, u.jsx)(j, {})
          }, {
            path: "/guides",
            element: (0, u.jsx)(P, {
              root: n
            })
          }, {
            path: "/guides/:guideId",
            element: (0, u.jsx)($, {})
          }, {
            path: "/heists/:heistName",
            element: (0, u.jsx)(P, {
              root: n
            })
          }, {
            path: "/businesses/:business",
            element: (0, u.jsx)(P, {
              root: n
            })
          }, {
            path: "/social-spaces/:space",
            element: (0, u.jsx)(P, {
              root: n
            })
          }, {
            path: "/contact-missions/:mission",
            element: (0, u.jsx)(P, {
              root: n
            })
          }, {
            path: "/series-modes/:mode",
            element: (0, u.jsx)(P, {
              root: n
            })
          }, {
            path: "/special-interests/:interest",
            element: (0, u.jsx)(P, {
              root: n
            })
          }, {
            path: "/legal",
            element: (0, u.jsx)(P, {
              root: n
            })
          }, {
            path: "/prime-plus-offer",
            element: (0, u.jsx)(P, {
              root: n
            })
          }, {
            path: "/license-plates",
            element: (0, u.jsx)(w(), {})
          }, {
            path: "*",
            element: (0, u.jsx)(o.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, k.useRoutes)(i)
        })),
        C = e => {
          let {
            config: n
          } = e;
          const {
            state: {
              headerHeight: i
            }
          } = (0, s.MB)();
          return (0, u.jsx)("div", {
            id: "content",
            className: "b384ee79d176061b46a4",
            style: {
              marginTop: `${i}px`
            },
            children: (0, u.jsx)(U, {
              routeRoot: n?.routeRoot
            })
          })
        },
        q = e => {
          let {
            config: n,
            setHeaderHidden: i
          } = e;
          const {
            setBrand: t
          } = (0, s.MB)(), {
            setCharactersNeeded: o
          } = (0, l.useRockstarUserState)();
          return (0, a.useLayoutEffect)((() => (t("gtao"), i(!0), o("gtao"), () => {
            i(!1), o(null)
          })), []), (0, u.jsxs)("div", {
            className: "e388538908afdf11891a",
            children: [(0, u.jsx)(S, {}), (0, u.jsx)(m, {}), (0, u.jsx)(d.Z, {}), (0, u.jsx)(C, {
              config: n
            })]
          })
        },
        H = e => {
          let {
            config: n,
            setHeaderHidden: i
          } = e;
          return (0, u.jsx)(t.ModalProvider, {
            children: (0, u.jsx)(q, {
              config: n,
              setHeaderHidden: i
            })
          })
        }
    },
    6909: e => {
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
        body: 'mutation SubmitFeedback(\n    $content: String!\n    $feedback_step: Int!\n    $cache: Boolean = true\n) {\n    submittal: gtaoFeedbackSubmit(\n        content: $content\n        feedback_step: $feedback_step\n    ) {\n        id\n    }\n}\n\nquery FeedbackSteps($locale: String!, $step: String, $cache: Boolean = true) {\n    meta: metaUrl(\n        locale: $locale\n        domain: "www"\n        url: "/GTAOnline/feedback"\n        fallbackUrl: "/GTAOnline/"\n    ) {\n        title\n    }\n    tree: gtaoFeedbackSteps(locale: $locale, step: $step) {\n        path {\n            id\n            id_hash\n            feedback_type {\n                name\n                title\n            }\n        }\n        next {\n            id_hash\n            message\n            feedback_type {\n                name\n                title\n                href\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function t(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }

      function l(e, n) {
        var i = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var l = a[n] || new Set,
          s = new Set,
          d = new Set;
        for (l.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
            s.has(e) || (s.add(e), (a[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return s.forEach((function(n) {
          var a = t(e, n);
          a && i.definitions.push(a)
        })), i
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.SubmitFeedback = l(n, "SubmitFeedback"), e.exports.FeedbackSteps = l(n, "FeedbackSteps")
    },
    4786: e => {
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
        body: "query BuyNowQ($ids: [String]!, $locale: String!) {\n    tinaModulesInfo(ids: $ids, locale: $locale) {\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function t(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.BuyNowQ = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var l = a[n] || new Set,
          s = new Set,
          d = new Set;
        for (l.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
            s.has(e) || (s.add(e), (a[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return s.forEach((function(n) {
          var a = t(e, n);
          a && i.definitions.push(a)
        })), i
      }(n, "BuyNowQ")
    },
    8034: e => {
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
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        keywords\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function t(e, n) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == n) return a
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          i(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.MetaUrlInfo = function(e, n) {
        var i = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var l = a[n] || new Set,
          s = new Set,
          d = new Set;
        for (l.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var o = d;
          d = new Set, o.forEach((function(e) {
            s.has(e) || (s.add(e), (a[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return s.forEach((function(n) {
          var a = t(e, n);
          a && i.definitions.push(a)
        })), i
      }(n, "MetaUrlInfo")
    }
  }
]);