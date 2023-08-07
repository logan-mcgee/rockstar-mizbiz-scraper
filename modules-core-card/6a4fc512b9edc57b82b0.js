(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [568], {
    568: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        Card: () => i.Z,
        CardGrid: () => T,
        CardWithImageGallery: () => D.Z,
        CoverCard: () => M,
        Deck: () => w.Z,
        TextCard: () => P.Z
      });
      var i = n(498),
        d = n(4932),
        t = n(3653),
        r = n.n(t),
        s = n(8976),
        l = n(420),
        c = n.n(l),
        o = n(9542),
        m = n(3684);
      const u = {
        clrCollapsedCard: "_2b820ae1fad6c6eff6b60ed0528262116599",
        cardContainer: "_2b820ae1fad6c6efeb92e279865c9000b72a",
        cardInfo: "_2b820ae1fad6c6efe58bfe52c22f632dc039",
        subtitle: "_2b820ae1fad6c6efa95eca18e1ad770ea596",
        price: "_2b820ae1fad6c6efe48b1713bf2de6b8abc0",
        newBadge: "_2b820ae1fad6c6efb0aca41f30620c3d2493",
        outOfStockBadge: "_2b820ae1fad6c6efc1e731016dcfde4718af",
        saleBadge: "_2b820ae1fad6c6efb7acd2f4b0a9d92d8d5d",
        slashedPrice: "_2b820ae1fad6c6efa6c6824725dc7d6616e6",
        storeInfo: "_2b820ae1fad6c6efeee54d2e0d1b2ce5b7e3",
        priceInfo: "_2b820ae1fad6c6efda4f70065c6b04b9392e",
        cardDesc: "_2b820ae1fad6c6eff45af61905d26c0592eb"
      };
      var f = n(6160);
      const p = e => {
          let {
            videoUrl: a,
            expandedType: n,
            children: i
          } = e;
          return a && "linkout" === n ? (0, f.jsx)(s.A, {
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
            price: l,
            slashedPrice: c,
            badge: o = null,
            expandedType: m,
            videoUrl: v
          } = e;
          return (0, f.jsx)("div", {
            className: [u.clrCollapsedCard, a].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, f.jsx)(p, {
              videoUrl: v,
              expandedType: m,
              children: (0, f.jsxs)("div", {
                className: u.cardContainer,
                "data-type": n,
                children: [(0, f.jsx)("div", {
                  className: u.cardMedia,
                  children: (0, f.jsx)(s.MultiSourceImage, {
                    ...d
                  })
                }), (0, f.jsxs)("div", {
                  className: u.cardInfo,
                  children: [t && (0, f.jsx)("h6", {
                    children: t
                  }), (0, f.jsx)("h5", {
                    children: i
                  }), r && (0, f.jsx)("h6", {
                    className: u.subtitle,
                    children: r
                  }), "store" === n && (0, f.jsxs)("div", {
                    className: u.storeInfo,
                    children: [(0, f.jsx)("p", {
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
                    }), (0, f.jsxs)("span", {
                      className: u.priceInfo,
                      children: [(0, f.jsx)("p", {
                        className: u.price,
                        children: l
                      }), (0, f.jsx)("p", {
                        className: u.slashedPrice,
                        children: c
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        };
      var k = n(2174),
        b = n(9361);
      const y = {
          clrCardModalContent: "_2b820ae1fad6c6efde3a11886ff7c7c01a80",
          expandedCard: "_2b820ae1fad6c6efe1a0223a78c9aa470ef6",
          content: "_2b820ae1fad6c6efd104d01f2048b62b51d8",
          details: "_2b820ae1fad6c6efcc5da9e77f92def47e14",
          calloutHeaders: "_2b820ae1fad6c6efac6438a76bed0e28cf70"
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
            storeInfo: l = {},
            expandedType: c,
            to: u,
            image: p,
            deckProps: g,
            tina: x = {},
            position: N
          } = e;
          const C = (0, o.useTinaPayload)(),
            T = x?.payload?.meta?.cdn ?? C?.meta?.prod ?? !1,
            S = {
              image: {
                ...p,
                prod: T
              }
            },
            _ = [p];
          return (0, f.jsx)(m.Z, {
            id: a,
            title: t,
            context: "clr-card",
            size: i,
            expandedType: c,
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
            expandedCardContents: (0, f.jsx)(b.Z, {
              images: _,
              prod: T
            }),
            children: (0, f.jsx)(k.Z, {
              expandedType: c,
              to: u,
              style: {
                display: "flex"
              },
              children: (0, f.jsx)(v, {
                cardType: d,
                title: t,
                subheader: r,
                subtitle: s,
                image: S,
                expandedType: c,
                price: l?.price,
                slashedPrice: l?.slashedPrice,
                badge: l?.badge
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
              GroupOfItems: c(),
              Grid: s.Grid,
              ClrCard: g,
              ClrCollapsedCard: v,
              CalloutSection: s.CalloutSection,
              TrackList: s.TrackList
            })), [i]),
            l = (() => {
              const {
                data: e
              } = (0, x.useQuery)(N.TinaModulesList, {
                variables: {
                  type: "clr-card",
                  locale: "en_us"
                }
              }), a = e?.tinaModulesList?.results, n = r().map(a, "id");
              return (0, s.useTinaModuleFetchByIds)({
                ids: n
              })
            })(),
            m = (0, o.useTinaPayload)(),
            u = (0, d.useMemo)((() => l ? l.reduce(((e, a) => {
              if (a) {
                const {
                  id: n,
                  tina: i
                } = a, d = r().clone(i);
                r().set(d, "payload.meta.id", n);
                const s = d?.payload,
                  l = s?.meta?.cdn ?? !1 ?? m?.meta?.prod ?? !1,
                  c = C(s?.content?.[0], l),
                  u = s?.meta?.title,
                  p = c?._memoq?.subheader,
                  v = c?.image,
                  k = s?.content?.[0].expandedType,
                  b = s?.content?.[0].cardType,
                  y = c?.content ?? [];
                "release" === b && e.push((0, f.jsx)(o.TinaParser, {
                  components: t,
                  tina: d,
                  componentProps: {
                    id: n,
                    tina: d,
                    title: u,
                    subheader: p,
                    image: v,
                    expandedType: k,
                    modalContent: y
                  }
                }, n))
              }
              return e
            }), []) : null), [l, a]);
          return (0, f.jsx)(s.Grid, {
            className: n,
            children: u
          })
        },
        S = {
          customModalContent: "_2b820ae1fad6c6eff348dacb636353b11c51",
          content: "_2b820ae1fad6c6efdf95f12ea94658664861",
          secondary: "_2b820ae1fad6c6efac4425db45829109b6bb",
          logo: "_2b820ae1fad6c6efe0170396b8c6129f37ee"
        },
        {
          variants: _
        } = s.framer.Animations,
        j = n(5976),
        M = e => {
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
            images: l = [],
            deckProps: c = {},
            to: u = null,
            tina: p = {}
          } = e;
          const v = (0, o.useTinaPayload)(),
            y = p?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [h, g] = (0, d.useState)(c?.size ?? t),
            {
              learnMoreUrl: x,
              body: N
            } = v.content[0]._memoq;
          return (0, d.useEffect)((() => {
            g(c?.size ?? t)
          }), [c?.size, t]), (0, f.jsx)(m.Z, {
            id: a,
            title: n,
            size: h,
            expandedType: r,
            images: l,
            deckProps: c,
            prod: y,
            payload: {
              content: i,
              meta: {}
            },
            variants: _.plainCard,
            textOverlayProps: s,
            modalProps: {
              className: S.customModal,
              contentClassName: S.customModalContent
            },
            expandedCardContents: (0, f.jsx)(b.Z, {
              images: l,
              prod: y,
              expandedView: !0
            }),
            children: (0, f.jsx)(k.Z, {
              expandedType: r,
              to: u,
              children: (0, f.jsxs)("div", {
                className: S.content,
                children: [(0, f.jsx)("img", {
                  className: S.logo,
                  alt: "logo",
                  src: j
                }), (0, f.jsx)("h2", {
                  children: n
                }), (0, f.jsx)("p", {
                  children: N
                }), (0, f.jsx)("a", {
                  href: x,
                  children: "Learn more"
                })]
              })
            })
          })
        };
      var D = n(3614),
        P = n(1324),
        w = n(2)
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
          var l = s;
          s = new Set, l.forEach((function(e) {
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
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e6f9867ec4c5e32867a8.svg"
    }
  }
]);