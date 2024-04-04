! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "501a49a7-cd2d-4200-bff2-9799116c8e39", e._sentryDebugIdIdentifier = "sentry-dbid-501a49a7-cd2d-4200-bff2-9799116c8e39")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [148], {
    5108: (e, a, d) => {
      "use strict";
      d.d(a, {
        c: () => u
      });
      var n = d(1740),
        r = d(9860),
        i = d(6464),
        c = d(6372),
        t = d(8244),
        s = d(4166);
      const o = {
        clrCardModalContent: "rockstargames-modules-core-carddc0e7500dcde84410e1ca036d13bf1eb",
        expandedCard: "rockstargames-modules-core-cardf147f821bee843f25ba323d0d35b681b",
        content: "rockstargames-modules-core-cardc2d60013d6991b99bb296d88c03a8c4a",
        details: "rockstargames-modules-core-carde6a197aa0a3e8c65ce07dcbfdb3073ef",
        calloutHeaders: "rockstargames-modules-core-carda9c077266e78cdc09780c09894f2116d"
      };
      var l = d(5240);
      const {
        variants: m
      } = r.framer.Animations, u = e => {
        let {
          id: a,
          content: d,
          size: r = "clr",
          cardType: u = "release",
          title: f,
          subheader: p,
          subtitle: b,
          storeInfo: k = {},
          expandedType: g,
          to: v,
          image: y,
          deckProps: h,
          tina: N = {},
          position: x
        } = e;
        const C = (0, n.useTinaPayload)(),
          S = N?.payload?.meta?.cdn ?? C?.meta?.prod ?? !1,
          T = {
            image: {
              ...y,
              prod: S
            }
          },
          j = [y];
        return (0, l.jsx)(i.c, {
          id: a,
          title: f,
          context: "clr-card",
          size: r,
          expandedType: g,
          images: T,
          deckProps: h,
          prod: S,
          position: x,
          modalProps: {
            className: o.clrCardModal,
            contentClassName: o.clrCardModalContent
          },
          variants: m.plainCard,
          payload: {
            content: d
          },
          expandedCardContents: (0, l.jsx)(s.c, {
            images: j,
            prod: S
          }),
          children: (0, l.jsx)(t.c, {
            expandedType: g,
            to: v,
            style: {
              display: "flex"
            },
            children: (0, l.jsx)(c.c, {
              cardType: u,
              title: f,
              subheader: p,
              subtitle: b,
              image: T,
              expandedType: g,
              price: k?.price,
              slashedPrice: k?.slashedPrice,
              badge: k?.badge
            })
          })
        })
      }
    },
    6372: (e, a, d) => {
      "use strict";
      d.d(a, {
        c: () => t
      });
      var n = d(9860);
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
      var i = d(5240);
      const c = e => {
          let {
            videoUrl: a,
            expandedType: d,
            children: r
          } = e;
          return a && "linkout" === d ? (0, i.jsx)(n.A, {
            to: a,
            children: r
          }) : r
        },
        t = e => {
          let {
            className: a,
            cardType: d,
            title: t,
            image: s,
            subheader: o,
            subtitle: l,
            price: m,
            slashedPrice: u,
            badge: f = null,
            expandedType: p,
            videoUrl: b
          } = e;
          return (0, i.jsx)("div", {
            className: [r.clrCollapsedCard, a].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, i.jsx)(c, {
              videoUrl: b,
              expandedType: p,
              children: (0, i.jsxs)("div", {
                className: r.cardContainer,
                "data-type": d,
                children: [(0, i.jsx)("div", {
                  className: r.cardMedia,
                  children: (0, i.jsx)(n.MultiSourceImage, {
                    ...s
                  })
                }), (0, i.jsxs)("div", {
                  className: r.cardInfo,
                  children: [o && (0, i.jsx)("h6", {
                    children: o
                  }), (0, i.jsx)("h5", {
                    children: t
                  }), l && (0, i.jsx)("h6", {
                    className: r.subtitle,
                    children: l
                  }), "store" === d && (0, i.jsxs)("div", {
                    className: r.storeInfo,
                    children: [(0, i.jsx)("p", {
                      className: (() => {
                        switch (f) {
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
                      children: f
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
    4052: (e, a, d) => {
      "use strict";
      d.r(a), d.d(a, {
        Card: () => n.c,
        CardGrid: () => g,
        CardWide: () => h,
        CardWithImageGallery: () => M.c,
        CoverCard: () => w,
        Deck: () => I.c,
        TextCard: () => D.c
      });
      var n = d(4204),
        r = d(1664),
        i = d(3660),
        c = d.n(i),
        t = d(9860),
        s = d(9812),
        o = d.n(s),
        l = d(1740),
        m = d(5108),
        u = d(6372),
        f = d(3052),
        p = d(4064);
      var b = d(5240);

      function k(e, a) {
        const d = {
          ...e
        };
        return c().forOwn(e, ((e, n) => {
          if ("image" === n) {
            const e = d[n];
            d[n] = {
              ...e,
              prod: a
            }
          } else c().isObject(e) && !c().isArray(e) ? k(e, a) : c().isArray(e) && (d[n] = e.map((e => c().isObject(e) ? k(e, a) : e)))
        })), d || []
      }
      const g = e => {
        let {
          size: a,
          className: d
        } = e;
        const n = (0, l.useTinaComponents)(),
          i = (0, r.useMemo)((() => ({
            ...n,
            HTMLElement: t.HTMLElement,
            ImageWithBadge: t.ImageWithBadge,
            Carousel: t.Carousel,
            Cta: t.Cta,
            GroupOfItems: o(),
            Grid: t.Grid,
            ClrCard: m.c,
            ClrCollapsedCard: u.c,
            CalloutSection: t.CalloutSection,
            TrackList: t.TrackList
          })), [n]),
          s = (() => {
            const {
              data: e
            } = (0, f.useQuery)(p.TinaModulesList, {
              variables: {
                type: "clr-card",
                locale: "en_us",
                orderDirection: "desc",
                orderBy: "created"
              }
            }), a = e?.tinaModulesList?.results, d = c().map(a, "id");
            return (0, t.useTinaModuleFetchByIds)({
              ids: d
            })
          })(),
          g = (0, l.useTinaPayload)(),
          v = (0, r.useMemo)((() => s ? s.reduce(((e, a) => {
            if (a) {
              const {
                id: d,
                tina: n
              } = a, r = c().clone(n);
              c().set(r, "payload.meta.id", d);
              const t = r?.payload,
                s = t?.meta?.cdn ?? !1 ?? g?.meta?.prod ?? !1,
                o = k(t?.content?.[0], s),
                m = t?.meta?.title,
                u = o?._memoq?.subheader,
                f = o?.image,
                p = t?.content?.[0].expandedType,
                v = t?.content?.[0].cardType,
                y = o?.content ?? [];
              "release" === v && e.push((0, b.jsx)(l.TinaParser, {
                components: i,
                tina: r,
                componentProps: {
                  id: d,
                  tina: r,
                  title: m,
                  subheader: u,
                  image: f,
                  expandedType: p,
                  modalContent: y
                }
              }, d))
            }
            return e
          }), []) : null), [s, a]);
        return (0, b.jsx)(t.Grid, {
          className: d,
          children: v
        })
      };
      var v = d(7013);
      const y = {
          pillBtn: "rockstargames-modules-core-cardbd88ef1aaf8b49461677d4d97306f35d",
          selected: "rockstargames-modules-core-cardf42b53431437947c43561959abf79491",
          cardWideContainer: "rockstargames-modules-core-cardd87ea8e8472f569ce05472af1c929903",
          cardWideContent: "rockstargames-modules-core-cardf7f18a1484cb133006ddf25280f61dec",
          cardWide: "rockstargames-modules-core-cardc3a0e9c010c26326b49aadd4163cd8c1"
        },
        h = e => {
          let {
            link: a,
            title: d,
            containerClass: n
          } = e;
          const i = (0, r.useRef)(null);
          return (0, b.jsx)(v.NavLink, {
            to: a,
            className: [y.cardWideContainer, n].join(" "),
            rel: "noopener noreferrer",
            children: (0, b.jsx)("div", {
              ref: i,
              className: y.cardWide,
              children: (0, b.jsx)("div", {
                role: "img",
                "aria-label": d,
                className: y.cardWideContent,
                style: {
                  "--background-image-desktop": "url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png)",
                  "--background-image-mobile": "url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png)"
                }
              })
            })
          })
        };
      var N = d(1272),
        x = d(5120),
        C = d(4166),
        S = d(6464),
        T = d(8244);
      const j = {
          pillBtn: "rockstargames-modules-core-carda56c6df6234fdecc1eb63ff63868bcdc",
          selected: "rockstargames-modules-core-cardf1662a1d515a6c37c1e47875f82f10dc",
          customModalContent: "rockstargames-modules-core-cardea6d587c92bce0027521c69627bc1fed",
          content: "rockstargames-modules-core-cardd4e4fb6769eee0c3082457bfd1d2ab47",
          secondary: "rockstargames-modules-core-cardb39dce39f6d0abb78444740ed1e71e5a",
          logo: "rockstargames-modules-core-carda5a09a383b5be586ab9cd8db4065d28b"
        },
        {
          variants: _
        } = t.framer.Animations,
        w = e => {
          let {
            id: a,
            logoImage: d = null,
            title: n,
            titleSizeClass: i = null,
            content: c,
            size: t = "md",
            expandedType: s = "short",
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
            to: f = null,
            tina: p = {},
            cardIds: k,
            theme: g
          } = e;
          const v = (0, l.useTinaPayload)(),
            y = p?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [h, w] = (0, r.useState)(u?.size ?? t),
            M = (0, l.useGetCdnSource)(d ?? null);
          let D = null;
          return v.content && (D = v?.content[0]?._memoq ? v?.content[0]?._memoq?.body : null), (0, r.useEffect)((() => {
            w(u?.size ?? t)
          }), [u?.size, t]), (0, b.jsx)(S.c, {
            id: a,
            title: n,
            size: h,
            expandedType: s,
            images: m,
            deckProps: u,
            prod: y,
            payload: {
              content: c,
              meta: {}
            },
            variants: _.plainCard,
            textOverlayProps: o,
            modalProps: {
              className: j.customModal,
              contentClassName: j.customModalContent
            },
            expandedCardContents: (0, b.jsx)(C.c, {
              images: m,
              prod: y,
              expandedView: !0
            }),
            theme: g,
            cardIds: k,
            isCoverCard: !0,
            children: (0, b.jsx)(T.c, {
              expandedType: s,
              to: f,
              children: (0, b.jsxs)("div", {
                className: j.content,
                children: [d && (0, b.jsx)("img", {
                  className: j.logo,
                  alt: "logo",
                  src: M
                }), (0, b.jsx)("h2", {
                  className: i,
                  children: n
                }), null !== D && (0, b.jsx)("p", {
                  children: D
                }), (0, b.jsx)("button", {
                  type: "button",
                  children: (0, b.jsx)(N.FormattedMessage, {
                    ...x.card.card_learn_more
                  })
                })]
              })
            })
          })
        };
      var M = d(5976),
        D = d(8812),
        I = d(4896)
    },
    4064: e => {
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

      function d(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          d(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          d(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          d(e, a)
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
      var n = {};

      function r(e, a) {
        for (var d = 0; d < e.definitions.length; d++) {
          var n = e.definitions[d];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          d(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var d = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (d.loc = e.loc);
        var i = n[a] || new Set,
          c = new Set,
          t = new Set;
        for (i.forEach((function(e) {
            t.add(e)
          })); t.size > 0;) {
          var s = t;
          t = new Set, s.forEach((function(e) {
            c.has(e) || (c.add(e), (n[e] || new Set).forEach((function(e) {
              t.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var n = r(e, a);
          n && d.definitions.push(n)
        })), d
      }(a, "TinaModulesList")
    }
  }
]);