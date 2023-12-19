(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [656], {
    982: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => u
      });
      var d = n(9542),
        r = n(8976),
        i = n(1278),
        t = n(5231),
        s = n(5369),
        c = n(2984);
      const o = {
        clrCardModalContent: "rockstargames-modules-core-carddc0e7500dcde84410e1ca036d13bf1eb",
        expandedCard: "rockstargames-modules-core-cardf147f821bee843f25ba323d0d35b681b",
        content: "rockstargames-modules-core-cardc2d60013d6991b99bb296d88c03a8c4a",
        details: "rockstargames-modules-core-carde6a197aa0a3e8c65ce07dcbfdb3073ef",
        calloutHeaders: "rockstargames-modules-core-carda9c077266e78cdc09780c09894f2116d"
      };
      var l = n(3705);
      const {
        variants: m
      } = r.framer.Animations, u = e => {
        let {
          id: a,
          content: n,
          size: r = "clr",
          cardType: u = "release",
          title: p,
          subheader: k,
          subtitle: b,
          storeInfo: f = {},
          expandedType: v,
          to: g,
          image: y,
          deckProps: h,
          tina: x = {},
          position: N
        } = e;
        const C = (0, d.useTinaPayload)(),
          S = x?.payload?.meta?.cdn ?? C?.meta?.prod ?? !1,
          T = {
            image: {
              ...y,
              prod: S
            }
          },
          j = [y];
        return (0, l.jsx)(i.Z, {
          id: a,
          title: p,
          context: "clr-card",
          size: r,
          expandedType: v,
          images: T,
          deckProps: h,
          prod: S,
          position: N,
          modalProps: {
            className: o.clrCardModal,
            contentClassName: o.clrCardModalContent
          },
          variants: m.plainCard,
          payload: {
            content: n
          },
          expandedCardContents: (0, l.jsx)(c.Z, {
            images: j,
            prod: S
          }),
          children: (0, l.jsx)(s.Z, {
            expandedType: v,
            to: g,
            style: {
              display: "flex"
            },
            children: (0, l.jsx)(t.Z, {
              cardType: u,
              title: p,
              subheader: k,
              subtitle: b,
              image: T,
              expandedType: v,
              price: f?.price,
              slashedPrice: f?.slashedPrice,
              badge: f?.badge
            })
          })
        })
      }
    },
    5231: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => s
      });
      var d = n(8976);
      const r = {
        clrCollapsedCard: "rockstargames-modules-core-cardfd6d292ed40cb13ff7d5c26bbeaf9a94",
        cardContainer: "rockstargames-modules-core-cardcc0578014981d1fb5033a246d6dfa958",
        cardInfo: "rockstargames-modules-core-cardfb052b5cc68e62fcbb7114c919aaac20",
        subtitle: "rockstargames-modules-core-carda6c4691e1cd8be86470ac15de966b104",
        price: "rockstargames-modules-core-cardf962cc2f9a0feb49ef73ed4a05923287",
        newBadge: "rockstargames-modules-core-cardb928049e372b0f2256447fb89846bc87",
        outOfStockBadge: "rockstargames-modules-core-cardee6e3af24146dc74c5b1fc3ccc22cbb6",
        saleBadge: "rockstargames-modules-core-cardba67a879a69b4a896ecce094f14bea97",
        slashedPrice: "rockstargames-modules-core-cardbe4898385c3d568d5cc8f78c188eb9d6",
        storeInfo: "rockstargames-modules-core-cardfa7cd7c59e912b860208ca099d7aa49f",
        priceInfo: "rockstargames-modules-core-cardaeeca54c5cd613d8acf128a88a61eeb8",
        cardDesc: "rockstargames-modules-core-cardb34bc203e1757ed47d6d39b6ea3c2b84"
      };
      var i = n(3705);
      const t = e => {
          let {
            videoUrl: a,
            expandedType: n,
            children: r
          } = e;
          return a && "linkout" === n ? (0, i.jsx)(d.A, {
            to: a,
            children: r
          }) : r
        },
        s = e => {
          let {
            className: a,
            cardType: n,
            title: s,
            image: c,
            subheader: o,
            subtitle: l,
            price: m,
            slashedPrice: u,
            badge: p = null,
            expandedType: k,
            videoUrl: b
          } = e;
          return (0, i.jsx)("div", {
            className: [r.clrCollapsedCard, a].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, i.jsx)(t, {
              videoUrl: b,
              expandedType: k,
              children: (0, i.jsxs)("div", {
                className: r.cardContainer,
                "data-type": n,
                children: [(0, i.jsx)("div", {
                  className: r.cardMedia,
                  children: (0, i.jsx)(d.MultiSourceImage, {
                    ...c
                  })
                }), (0, i.jsxs)("div", {
                  className: r.cardInfo,
                  children: [o && (0, i.jsx)("h6", {
                    children: o
                  }), (0, i.jsx)("h5", {
                    children: s
                  }), l && (0, i.jsx)("h6", {
                    className: r.subtitle,
                    children: l
                  }), "store" === n && (0, i.jsxs)("div", {
                    className: r.storeInfo,
                    children: [(0, i.jsx)("p", {
                      className: (() => {
                        switch (p) {
                          case "New":
                            return r.newBadge;
                          case "Sale":
                            return r.saleBadge;
                          case "Out of Stock":
                            return r.outOfStockBadge;
                          default:
                            return ""
                        }
                      })(),
                      children: p
                    }), (0, i.jsxs)("span", {
                      className: r.priceInfo,
                      children: [(0, i.jsx)("p", {
                        className: r.price,
                        children: m
                      }), (0, i.jsx)("p", {
                        className: r.slashedPrice,
                        children: u
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        }
    },
    8656: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        Card: () => d.Z,
        CardGrid: () => v,
        CardWithImageGallery: () => j.Z,
        CoverCard: () => T,
        Deck: () => D.Z,
        TextCard: () => M.Z
      });
      var d = n(1810),
        r = n(927),
        i = n(5370),
        t = n.n(i),
        s = n(8976),
        c = n(420),
        o = n.n(c),
        l = n(9542),
        m = n(982),
        u = n(5231),
        p = n(4859),
        k = n(8845);
      var b = n(3705);

      function f(e, a) {
        const n = {
          ...e
        };
        return t().forOwn(e, ((e, d) => {
          if ("image" === d) {
            const e = n[d];
            n[d] = {
              ...e,
              prod: a
            }
          } else t().isObject(e) && !t().isArray(e) ? f(e, a) : t().isArray(e) && (n[d] = e.map((e => t().isObject(e) ? f(e, a) : e)))
        })), n || []
      }
      const v = e => {
        let {
          size: a,
          className: n
        } = e;
        const d = (0, l.useTinaComponents)(),
          i = (0, r.useMemo)((() => ({
            ...d,
            HTMLElement: s.HTMLElement,
            ImageWithBadge: s.ImageWithBadge,
            Carousel: s.Carousel,
            Cta: s.Cta,
            GroupOfItems: o(),
            Grid: s.Grid,
            ClrCard: m.Z,
            ClrCollapsedCard: u.Z,
            CalloutSection: s.CalloutSection,
            TrackList: s.TrackList
          })), [d]),
          c = (() => {
            const {
              data: e
            } = (0, p.useQuery)(k.TinaModulesList, {
              variables: {
                type: "clr-card",
                locale: "en_us",
                orderDirection: "desc",
                orderBy: "created"
              }
            }), a = e?.tinaModulesList?.results, n = t().map(a, "id");
            return (0, s.useTinaModuleFetchByIds)({
              ids: n
            })
          })(),
          v = (0, l.useTinaPayload)(),
          g = (0, r.useMemo)((() => c ? c.reduce(((e, a) => {
            if (a) {
              const {
                id: n,
                tina: d
              } = a, r = t().clone(d);
              t().set(r, "payload.meta.id", n);
              const s = r?.payload,
                c = s?.meta?.cdn ?? !1 ?? v?.meta?.prod ?? !1,
                o = f(s?.content?.[0], c),
                m = s?.meta?.title,
                u = o?._memoq?.subheader,
                p = o?.image,
                k = s?.content?.[0].expandedType,
                g = s?.content?.[0].cardType,
                y = o?.content ?? [];
              "release" === g && e.push((0, b.jsx)(l.TinaParser, {
                components: i,
                tina: r,
                componentProps: {
                  id: n,
                  tina: r,
                  title: m,
                  subheader: u,
                  image: p,
                  expandedType: k,
                  modalContent: y
                }
              }, n))
            }
            return e
          }), []) : null), [c, a]);
        return (0, b.jsx)(s.Grid, {
          className: n,
          children: g
        })
      };
      var g = n(9585);
      n(3657);
      var y = n(3111),
        h = n(2984),
        x = n(1278),
        N = n(5369);
      const C = {
          customModalContent: "rockstargames-modules-core-cardea6d587c92bce0027521c69627bc1fed",
          content: "rockstargames-modules-core-cardd4e4fb6769eee0c3082457bfd1d2ab47",
          secondary: "rockstargames-modules-core-cardb39dce39f6d0abb78444740ed1e71e5a",
          logo: "rockstargames-modules-core-carda5a09a383b5be586ab9cd8db4065d28b"
        },
        {
          variants: S
        } = s.framer.Animations,
        T = e => {
          let {
            id: a,
            logoImage: n = null,
            title: d,
            titleSizeClass: i = null,
            content: t,
            size: s = "md",
            expandedType: c = "short",
            textOverlayProps: o = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: m = [],
            deckProps: u = {},
            to: p = null,
            tina: k = {},
            cardIds: f,
            theme: v
          } = e;
          const T = (0, l.useTinaPayload)(),
            j = k?.payload?.meta?.cdn ?? T?.meta?.prod ?? !1,
            [M, D] = (0, r.useState)(u?.size ?? s),
            P = (0, l.useGetCdnSource)(n ?? null);
          let I = null;
          return T.content && (I = T?.content[0]?._memoq ? T?.content[0]?._memoq?.body : null), (0, r.useEffect)((() => {
            D(u?.size ?? s)
          }), [u?.size, s]), (0, b.jsx)(x.Z, {
            id: a,
            title: d,
            size: M,
            expandedType: c,
            images: m,
            deckProps: u,
            prod: j,
            payload: {
              content: t,
              meta: {}
            },
            variants: S.plainCard,
            textOverlayProps: o,
            modalProps: {
              className: C.customModal,
              contentClassName: C.customModalContent
            },
            expandedCardContents: (0, b.jsx)(h.Z, {
              images: m,
              prod: j,
              expandedView: !0
            }),
            theme: v,
            cardIds: f,
            isCoverCard: !0,
            children: (0, b.jsx)(N.Z, {
              expandedType: c,
              to: p,
              children: (0, b.jsxs)("div", {
                className: C.content,
                children: [n && (0, b.jsx)("img", {
                  className: C.logo,
                  alt: "logo",
                  src: P
                }), (0, b.jsx)("h2", {
                  className: i,
                  children: d
                }), null !== I && (0, b.jsx)("p", {
                  children: I
                }), (0, b.jsx)("button", {
                  type: "button",
                  children: (0, b.jsx)(g.Z, {
                    ...y.card.card_learn_more
                  })
                })]
              })
            })
          })
        };
      var j = n(7067),
        M = n(5054),
        D = n(5786)
    },
    8845: e => {
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
          var d = e.type;
          "NamedType" === d.kind && a.add(d.name.value)
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
      var d = {};

      function r(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var d = e.definitions[n];
          if (d.name && d.name.value == a) return d
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), d[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = d[a] || new Set,
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var d = r(e, a);
          d && n.definitions.push(d)
        })), n
      }(a, "TinaModulesList")
    }
  }
]);