(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [8], {
    3008: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        Card: () => i.Z,
        CardGrid: () => T,
        CardWithImageGallery: () => I.Z,
        CoverCard: () => B,
        Deck: () => V.Z,
        TextCard: () => w.Z
      });
      var i = n(498),
        d = n(4932),
        t = n(3653),
        r = n.n(t),
        s = n(8976),
        c = n(420),
        l = n.n(c),
        o = n(9542),
        m = n(3684);
      const u = {
        clrCollapsedCard: "d82452706eccb7b8f6b60ed0528262116599",
        cardContainer: "d82452706eccb7b8eb92e279865c9000b72a",
        cardInfo: "d82452706eccb7b8e58bfe52c22f632dc039",
        subtitle: "d82452706eccb7b8a95eca18e1ad770ea596",
        price: "d82452706eccb7b8e48b1713bf2de6b8abc0",
        newBadge: "d82452706eccb7b8b0aca41f30620c3d2493",
        outOfStockBadge: "d82452706eccb7b8c1e731016dcfde4718af",
        saleBadge: "d82452706eccb7b8b7acd2f4b0a9d92d8d5d",
        slashedPrice: "d82452706eccb7b8a6c6824725dc7d6616e6",
        storeInfo: "d82452706eccb7b8eee54d2e0d1b2ce5b7e3",
        priceInfo: "d82452706eccb7b8da4f70065c6b04b9392e",
        cardDesc: "d82452706eccb7b8f45af61905d26c0592eb"
      };
      var p = n(6160);
      const b = e => {
          let {
            videoUrl: a,
            expandedType: n,
            children: i
          } = e;
          return a && "linkout" === n ? (0, p.jsx)(s.A, {
            to: a,
            children: i
          }) : i
        },
        v = e => {
          let {
            className: a,
            cardType: n,
            title: i,
            image: d,
            subheader: t,
            subtitle: r,
            price: c,
            slashedPrice: l,
            badge: o = null,
            expandedType: m,
            videoUrl: v
          } = e;
          return (0, p.jsx)("div", {
            className: [u.clrCollapsedCard, a].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, p.jsx)(b, {
              videoUrl: v,
              expandedType: m,
              children: (0, p.jsxs)("div", {
                className: u.cardContainer,
                "data-type": n,
                children: [(0, p.jsx)("div", {
                  className: u.cardMedia,
                  children: (0, p.jsx)(s.MultiSourceImage, {
                    ...d
                  })
                }), (0, p.jsxs)("div", {
                  className: u.cardInfo,
                  children: [t && (0, p.jsx)("h6", {
                    children: t
                  }), (0, p.jsx)("h5", {
                    children: i
                  }), r && (0, p.jsx)("h6", {
                    className: u.subtitle,
                    children: r
                  }), "store" === n && (0, p.jsxs)("div", {
                    className: u.storeInfo,
                    children: [(0, p.jsx)("p", {
                      className: (() => {
                        switch (o) {
                          case "New":
                            return u.newBadge;
                          case "Sale":
                            return u.saleBadge;
                          case "Out of Stock":
                            return u.outOfStockBadge;
                          default:
                            return ""
                        }
                      })(),
                      children: o
                    }), (0, p.jsxs)("span", {
                      className: u.priceInfo,
                      children: [(0, p.jsx)("p", {
                        className: u.price,
                        children: c
                      }), (0, p.jsx)("p", {
                        className: u.slashedPrice,
                        children: l
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        };
      var k = n(2174),
        f = n(9361);
      const y = {
          clrCardModalContent: "d82452706eccb7b8de3a11886ff7c7c01a80",
          expandedCard: "d82452706eccb7b8e1a0223a78c9aa470ef6",
          content: "d82452706eccb7b8d104d01f2048b62b51d8",
          details: "d82452706eccb7b8cc5da9e77f92def47e14",
          calloutHeaders: "d82452706eccb7b8ac6438a76bed0e28cf70"
        },
        {
          variants: h
        } = s.framer.Animations,
        g = e => {
          let {
            id: a,
            content: n,
            size: i = "clr",
            cardType: d = "release",
            title: t,
            subheader: r,
            subtitle: s,
            storeInfo: c = {},
            expandedType: l,
            to: u,
            image: b,
            deckProps: g,
            tina: x = {},
            position: N
          } = e;
          const C = (0, o.useTinaPayload)(),
            T = x?.payload?.meta?.cdn ?? C?.meta?.prod ?? !1,
            S = {
              image: {
                ...b,
                prod: T
              }
            },
            j = [b];
          return (0, p.jsx)(m.Z, {
            id: a,
            title: t,
            context: "clr-card",
            size: i,
            expandedType: l,
            images: S,
            deckProps: g,
            prod: T,
            position: N,
            modalProps: {
              className: y.clrCardModal,
              contentClassName: y.clrCardModalContent
            },
            variants: h.plainCard,
            payload: {
              content: n
            },
            expandedCardContents: (0, p.jsx)(f.Z, {
              images: j,
              prod: T
            }),
            children: (0, p.jsx)(k.Z, {
              expandedType: l,
              to: u,
              style: {
                display: "flex"
              },
              children: (0, p.jsx)(v, {
                cardType: d,
                title: t,
                subheader: r,
                subtitle: s,
                image: S,
                expandedType: l,
                price: c?.price,
                slashedPrice: c?.slashedPrice,
                badge: c?.badge
              })
            })
          })
        };
      var x = n(4859),
        N = n(3385);

      function C(e, a) {
        const n = {
          ...e
        };
        return r().forOwn(e, ((e, i) => {
          if ("image" === i) {
            const e = n[i];
            n[i] = {
              ...e,
              prod: a
            }
          } else r().isObject(e) && !r().isArray(e) ? C(e, a) : r().isArray(e) && (n[i] = e.map((e => r().isObject(e) ? C(e, a) : e)))
        })), n || []
      }
      const T = e => {
        let {
          size: a,
          className: n
        } = e;
        const i = (0, o.useTinaComponents)(),
          t = (0, d.useMemo)((() => ({
            ...i,
            HTMLElement: s.HTMLElement,
            ImageWithBadge: s.ImageWithBadge,
            Carousel: s.Carousel,
            Cta: s.Cta,
            GroupOfItems: l(),
            Grid: s.Grid,
            ClrCard: g,
            ClrCollapsedCard: v,
            CalloutSection: s.CalloutSection,
            TrackList: s.TrackList
          })), [i]),
          c = (() => {
            const {
              data: e
            } = (0, x.useQuery)(N.TinaModulesList, {
              variables: {
                type: "clr-card",
                locale: "en_us",
                orderDirection: "desc",
                orderBy: "created"
              }
            }), a = e?.tinaModulesList?.results, n = r().map(a, "id");
            return (0, s.useTinaModuleFetchByIds)({
              ids: n
            })
          })(),
          m = (0, o.useTinaPayload)(),
          u = (0, d.useMemo)((() => c ? c.reduce(((e, a) => {
            if (a) {
              const {
                id: n,
                tina: i
              } = a, d = r().clone(i);
              r().set(d, "payload.meta.id", n);
              const s = d?.payload,
                c = s?.meta?.cdn ?? !1 ?? m?.meta?.prod ?? !1,
                l = C(s?.content?.[0], c),
                u = s?.meta?.title,
                b = l?._memoq?.subheader,
                v = l?.image,
                k = s?.content?.[0].expandedType,
                f = s?.content?.[0].cardType,
                y = l?.content ?? [];
              "release" === f && e.push((0, p.jsx)(o.TinaParser, {
                components: t,
                tina: d,
                componentProps: {
                  id: n,
                  tina: d,
                  title: u,
                  subheader: b,
                  image: v,
                  expandedType: k,
                  modalContent: y
                }
              }, n))
            }
            return e
          }), []) : null), [c, a]);
        return (0, p.jsx)(s.Grid, {
          className: n,
          children: u
        })
      };
      var S = n(5217),
        j = n(3086);
      n(3657);
      const _ = (0, S.vU)({
          card_learn_more: {
            id: "card_learn_more"
          }
        }),
        M = {
          customModalContent: "d82452706eccb7b8f348dacb636353b11c51",
          content: "d82452706eccb7b8df95f12ea94658664861",
          secondary: "d82452706eccb7b8ac4425db45829109b6bb",
          logo: "d82452706eccb7b8e0170396b8c6129f37ee"
        },
        {
          variants: D
        } = s.framer.Animations,
        P = n(5976),
        B = e => {
          let {
            id: a,
            title: n,
            content: i,
            size: t = "md",
            expandedType: r = "short",
            textOverlayProps: s = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: c = [],
            deckProps: l = {},
            to: u = null,
            tina: b = {},
            cardIds: v,
            theme: y
          } = e;
          const h = (0, o.useTinaPayload)(),
            g = b?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            [x, N] = (0, d.useState)(l?.size ?? t);
          let C = null;
          return h.content && (C = h?.content[0]?._memoq ? h?.content[0]?._memoq?.body : null), (0, d.useEffect)((() => {
            N(l?.size ?? t)
          }), [l?.size, t]), (0, p.jsx)(m.Z, {
            id: a,
            title: n,
            size: x,
            expandedType: r,
            images: c,
            deckProps: l,
            prod: g,
            payload: {
              content: i,
              meta: {}
            },
            variants: D.plainCard,
            textOverlayProps: s,
            modalProps: {
              className: M.customModal,
              contentClassName: M.customModalContent
            },
            expandedCardContents: (0, p.jsx)(f.Z, {
              images: c,
              prod: g,
              expandedView: !0
            }),
            theme: y,
            cardIds: v,
            isCoverCard: !0,
            children: (0, p.jsx)(k.Z, {
              expandedType: r,
              to: u,
              children: (0, p.jsxs)("div", {
                className: M.content,
                children: [(0, p.jsx)("img", {
                  className: M.logo,
                  alt: "logo",
                  src: P
                }), (0, p.jsx)("h2", {
                  children: n
                }), null !== C && (0, p.jsx)("p", {
                  children: C
                }), (0, p.jsx)("button", {
                  type: "button",
                  children: (0, p.jsx)(j.Z, {
                    ..._.card_learn_more
                  })
                })]
              })
            })
          })
        };
      var I = n(3614),
        w = n(1324),
        V = n(2)
    },
    3385: e => {
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
                value: "type"
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
                value: "orderBy"
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
                value: "orderDirection"
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
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
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
                        value: "name"
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
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 495
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
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
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
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var t = i[a] || new Set,
          r = new Set,
          s = new Set;
        for (t.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var i = d(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "TinaModulesList")
    },
    5976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e6f9867ec4c5e32867a8.svg"
    }
  }
]);
//# sourceMappingURL=4b9aa235082d0519722f.js.map