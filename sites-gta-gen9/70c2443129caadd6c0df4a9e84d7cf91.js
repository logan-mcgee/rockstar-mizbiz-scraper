(self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [680, 770], {
    9680: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        default: () => G
      });
      var i = a(927),
        t = a(8008),
        s = a(6711),
        l = a(215),
        o = a(8976),
        d = a(9929);
      const r = {
        mobileNav: "rockstargames-sites-gta-gen9d84f65970dcf088120c73ce75722e823",
        mobileNavOpen: "rockstargames-sites-gta-gen9f9ca04b26905897a1bd181dedf274082",
        activeLink: "rockstargames-sites-gta-gen9fdeda17c572603d3f44074da466a065a"
      };
      var c = a(3705);
      const u = (0, d.withTranslations)((e => {
        let {
          t: n
        } = e;
        const a = (0, l.YM)(),
          {
            track: t
          } = (0, s.useGtmTrack)(),
          {
            state: {
              headerHeight: d,
              mobileNavOpen: u
            },
            setMobileNavOpen: m
          } = (0, l.MB)();
        return (0, i.useEffect)((() => {
          const e = e => {
            let {
              keyCode: n
            } = e;
            27 === n && m(!1)
          };
          return document.addEventListener("keydown", e, !1), () => {
            document.removeEventListener("keydown", e, !1)
          }
        }), []), (0, c.jsx)("nav", {
          className: [r.mobileNav, u ? r.mobileNavOpen : ""].join(" "),
          style: {
            "--header-height": `${d}px`
          },
          children: a.map((e => {
            let {
              activeExact: a,
              title: i,
              to: s
            } = e;
            return (0, c.jsx)(o.A, {
              end: a,
              to: s,
              target: s.startsWith("http") ? "_blank" : "_self",
              className: e => {
                let {
                  isActive: n
                } = e;
                return n ? r.activeLink : null
              },
              onClick: () => function() {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                t({
                  event: "nav_click",
                  event_category: "nav",
                  event_action: "click",
                  event_label: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toLowerCase(),
                  link_url: e
                })
              }(n(i), s),
              children: n(i)
            }, s)
          }))
        })
      }));
      var m = a(6237),
        v = a(4859),
        k = a(9542),
        f = a(7963),
        g = a(1410),
        p = a(9956),
        b = a(9967);
      const h = {
          BuyNow: f.Z,
          TinaWrapper: g.Z
        },
        N = () => {
          const {
            setBodyIsScrollable: e
          } = (0, d.useBodyScrollable)(), {
            track: n
          } = (0, s.useGtmTrack)(), [a, l] = (0, m.useSearchParams)(), {
            data: o
          } = (0, v.useQuery)(b.BuyNowQ, {
            variables: {
              ids: ["6a84"]
            }
          }), [r, u] = (0, t.useModal)();
          return (0, i.useEffect)((() => {
            e(!r)
          }), [r]), (0, i.useEffect)((() => {
            const e = "order" !== a.get("info") && "trailer" !== a.get("info") && (i = a.get("videoId"), /^\d+$/.test(i));
            var i;
            if (a.get("info") || a.get("videoId")) {
              if (e) {
                const e = (0, c.jsx)(p.Z, {
                    id: a.get("videoId")
                  }),
                  i = {
                    left: window.innerWidth / 2,
                    top: window.innerHeight / 2
                  };
                u({
                  content: e,
                  rect: i,
                  contentStyle: {
                    overflow: "hidden"
                  },
                  onClose: () => {
                    l({}), n({
                      event_action: "close",
                      event_category: "modal",
                      event: "modal_close",
                      event_label: a.get("videoId")
                    })
                  }
                }), n({
                  event: "trackPageview",
                  card_id: a.get("videoId"),
                  card_name: "video"
                })
              }
            } else u(null)
          }), [a]), (0, i.useEffect)((() => {
            if ("order" !== a.get("info") || !o) return;
            const e = o?.tinaModulesInfo?.[0].tina,
              i = (0, c.jsx)(k.TinaParser, {
                components: {
                  gen9: h
                },
                tina: e
              }),
              t = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            u({
              content: i,
              contentStyle: {
                "--modal-content-max-width": "100%",
                "--modal-content-padding": "calc(var(--modal-padding) + var(--padding-md)) var(--padding-lg) var(--padding-lg)"
              },
              rect: t,
              onClose: () => {
                l({}), n({
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
          }), [o, a.get("info")]), (0, i.useEffect)((() => {
            if ("trailer" !== a.get("info")) return;
            const e = (0, c.jsx)(p.Z, {
                id: 12258
              }),
              i = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            u({
              content: e,
              rect: i,
              contentStyle: {
                overflow: "hidden"
              },
              onClose: () => {
                l({}), n({
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
          }), [a.get("info")]), r
        };
      var S = a(389),
        y = a.n(S),
        w = a(8865),
        x = a.n(w),
        F = a(7856);
      const _ = () => {
        const {
          setBrand: e
        } = (0, l.MB)();
        return (0, i.useEffect)((() => {
          e("gtao")
        }), []), (0, c.jsx)("span", {
          className: "rockstargames-sites-gta-gen9f070763a1255e4312a53341b5fd10fbc",
          children: (0, c.jsx)(x(), {
            query: F.FeedbackSteps,
            mutation: F.SubmitFeedback,
            type: "gtao"
          })
        })
      };
      var V = a(4222),
        j = a(5370),
        E = a.n(j);
      const T = {
          guideNavMobile: "rockstargames-sites-gta-gen9dc8c1ccf7688e80181a16b7b473a312b",
          guideNavMobileContent: "rockstargames-sites-gta-gen9e3de050ace77d95d7776b954bee219bd",
          sections: "rockstargames-sites-gta-gen9b5aebbbb5f6341a92b3202462cfb9f6f",
          activeSection: "rockstargames-sites-gta-gen9f30de8480b4801fa119e54ae7141ee0c",
          sectionsOpen: "rockstargames-sites-gta-gen9ffd5c0107796ecaf1116e380395f148e"
        },
        D = e => {
          let {
            currentId: n
          } = e;
          const {
            track: a
          } = (0, s.useGtmTrack)(), t = (0, l.yv)(), [d, r] = (0, i.useState)(!1), [u, v] = (0, i.useState)(null), [k, f] = (0, i.useState)(null), [g] = (0, m.useSearchParams)();
          if ((0, i.useEffect)((() => {
              E().cloneDeepWith(t, ((e, a, i) => {
                n === e && v(i?.children ?? null)
              }))
            }), [n, t, g.get("section")]), (0, i.useEffect)((() => {
              f(null), E().cloneDeepWith(u, ((e, n, a) => {
                "id_hash" === n && g.get("section") === e && f(a)
              }))
            }), [u, g.get("section")]), !u) return null;
          const p = () => {
            r(!1), a({
              event: "nav_click",
              event_category: "nav",
              event_action: "click"
            })
          };
          return (0, c.jsx)("div", {
            className: T.guideNavMobile,
            children: (0, c.jsxs)("div", {
              className: T.guideNavMobileContent,
              children: [(0, c.jsx)("div", {
                className: [T.sections, d ? T.sectionsOpen : ""].join(" "),
                children: u.map((e => {
                  let {
                    id_hash: n,
                    title: a,
                    to: i
                  } = e;
                  return (0, c.jsx)(o.A, {
                    className: n === k?.id_hash ? T.activeSection : "",
                    to: i,
                    onClick: p,
                    children: a
                  }, i)
                }))
              }), (0, c.jsx)("button", {
                type: "button",
                onClick: () => r(!d),
                children: "Jump To"
              })]
            })
          })
        };
      var B = a(7311);
      const I = (0, o.withSimpleErrorBoundary)((() => {
        const {
          setBrand: e
        } = (0, l.MB)();
        (0, i.useEffect)((() => {
          e("gtao")
        }), []);
        const {
          guideId: n
        } = (0, m.useParams)(), a = (0, o.useTinaModuleFetchByIds)({
          ids: [n],
          setTitleDataPath: "tinaModulesInfo[0].title_doc"
        })?.[0] ?? {};
        return (0, i.useMemo)((() => {
          if (!a) return null;
          const {
            tina: e,
            type: i
          } = a;
          if (i && "gen9-guide" !== i) throw Error("Invalid type, a guide is needed.");
          return (0, c.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9eaeb117af03214aa0f78fd85d4028bb7",
            children: [(0, c.jsx)(V.Z, {
              currentId: n
            }), e ? (0, c.jsx)(k.TinaParser, {
              components: B.componentsForTinaParserGuide,
              tina: e
            }) : "", (0, c.jsx)(D, {
              currentId: n
            })]
          })
        }), [JSON.stringify(a)])
      }));
      var M = a(6805);
      const $ = (0, o.withSimpleErrorBoundary)((e => {
          let {
            componentsForTinaParser: n,
            root: a,
            url: t
          } = e;
          const {
            data: s
          } = (0, v.useQuery)(M.MetaUrlInfo, {
            variables: {
              url: t
            },
            setTitleDataPath: "metaUrlInfo.title"
          }), {
            setBrand: o
          } = (0, l.MB)(), [d, r] = (0, i.useState)(null);
          return (0, i.useEffect)((() => {
            const e = s?.metaUrlInfo?.tina ?? null,
              n = e?.payload?.meta?.brand ?? null;
            n && o(n), e && r(e)
          }), [s]), d ? (0, c.jsx)("div", {
            "data-root": a,
            className: "rockstargames-sites-gta-gen9f7e42e7491093e80b413a2892ed61ffe",
            children: (0, c.jsx)(k.TinaParser, {
              components: n,
              tina: d
            })
          }) : null
        })),
        O = ["/gta-v", "/gta-online", "/gta-online/guides", "/gta-online/prime-plus-offer", "/gta-plus", "/gta-plus/legal", "/gta-online/license-plates", "/gta-online/heists/lsdw", "/gta-online/heists/cayo-perico-heist", "/gta-online/heists/diamond-casino-heist", "/gta-online/heists/doomsday-heist", "/gta-online/heists/original-heists", "/gta-online/businesses/drug-wars", "/gta-online/businesses/the-contract", "/gta-online/businesses/after-hours", "/gta-online/businesses/smugglers-run", "/gta-online/businesses/gunrunning", "/gta-online/businesses/bikers", "/gta-online/businesses/finance-and-felony", "/gta-online/businesses/import-export", "/gta-online/businesses/chop-shop", "/gta-online/recreation/los-santos-tuners", "/gta-online/recreation/diamond-casino-resort", "/gta-online/contact-missions/operation-paper-trail", "/gta-online/contact-missions/san-andreas-mercenaries", "/gta-online/contact-missions/superyacht-life", "/gta-online/contact-missions/last-play", "/gta-online/contact-missions/premium-deluxe-repo", "/gta-online/contact-missions/dispatch-services", "/gta-online/contact-missions/lowriders", "/gta-online/contact-missions/dlc-1-2023", "/gta-online/series-modes/arena-war", "/gta-online/series-modes/survivals", "/gta-online/series-modes/racing", "/gta-online/series-modes/adversary-modes", "/gta-online/series-modes/deathmatches", "/gta-online/special-interests/vehicles-enthusiast", "/gta-online/special-interests/weapons-expert"],
        A = e => {
          let {
            root: n
          } = e;
          const {
            pathname: a
          } = (0, m.useLocation)();
          return (0, i.useMemo)((() => {
            const e = a.replace(/\/$/, "");
            return O.includes(e) ? (0, c.jsx)($, {
              componentsForTinaParser: B.componentsForTinaParser,
              root: n,
              url: e
            }) : null
          }), [a])
        },
        P = (0, o.withSearchbarErrorBoundary)((e => {
          let {
            routeRoot: n
          } = e;
          const a = [{
            path: "/",
            element: (0, c.jsx)(A, {
              root: n
            })
          }, {
            path: "/feedback",
            element: (0, c.jsx)(_, {})
          }, {
            path: "/guides",
            element: (0, c.jsx)(A, {
              root: n
            })
          }, {
            path: "/guides/:guideId",
            element: (0, c.jsx)(I, {})
          }, {
            path: "/heists/:section",
            element: (0, c.jsx)(A, {
              root: n
            })
          }, {
            path: "/businesses/:section",
            element: (0, c.jsx)(A, {
              root: n
            })
          }, {
            path: "/recreation/:section",
            element: (0, c.jsx)(A, {
              root: n
            })
          }, {
            path: "/contact-missions/:section",
            element: (0, c.jsx)(A, {
              root: n
            })
          }, {
            path: "/series-modes/:section",
            element: (0, c.jsx)(A, {
              root: n
            })
          }, {
            path: "/special-interests/:section",
            element: (0, c.jsx)(A, {
              root: n
            })
          }, {
            path: "/legal",
            element: (0, c.jsx)(A, {
              root: n
            })
          }, {
            path: "/prime-plus-offer",
            eßent: (0, c.jsx)(A, {
              root: n
            })
          }, {
            path: "/license-plates",
            element: (0, c.jsx)(y(), {})
          }, {
            path: "*",
            element: (0, c.jsx)(o.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, m.useRoutes)(a)
        })),
        C = e => {
          let {
            config: n
          } = e;
          const {
            state: {
              headerHeight: a
            }
          } = (0, l.MB)();
          return (0, c.jsx)("div", {
            id: "content",
            className: "rockstargames-sites-gta-gen9b0093976ff3d5d9725a25fa8bf9ef956",
            children: (0, c.jsx)(P, {
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
            setCharactersNeeded: o
          } = (0, s.useRockstarUserState)();
          return (0, i.useLayoutEffect)((() => (t("gtao"), o("gtao"), () => {
            o(null)
          })), []), (0, c.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9deaacbee4aef528355067efdd6b118c2",
            children: [(0, c.jsx)(N, {}), (0, c.jsx)(u, {}), (0, c.jsx)(C, {
              config: n
            })]
          })
        },
        G = e => {
          let {
            config: n,
            setHeaderHidden: a
          } = e;
          return (0, c.jsx)(t.ModalProvider, {
            children: (0, c.jsx)(U, {
              config: n,
              setHeaderHidden: a
            })
          })
        }
    },
    7856: e => {
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

      function s(e, n) {
        var a = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = i[n] || new Set,
          l = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var d = o;
          o = new Set, d.forEach((function(e) {
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
      })), e.exports = n, e.exports.SubmitFeedback = s(n, "SubmitFeedback"), e.exports.FeedbackSteps = s(n, "FeedbackSteps")
    },
    9967: e => {
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
        var s = i[n] || new Set,
          l = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var d = o;
          o = new Set, d.forEach((function(e) {
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
    6805: e => {
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
        var s = i[n] || new Set,
          l = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var d = o;
          o = new Set, d.forEach((function(e) {
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