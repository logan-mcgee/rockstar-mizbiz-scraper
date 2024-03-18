! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9879c04b-84f8-4955-b7b8-9bdb0192eaa5", e._sentryDebugIdIdentifier = "sentry-dbid-9879c04b-84f8-4955-b7b8-9bdb0192eaa5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [788], {
    1884: (e, a, d) => {
      "use strict";
      d.d(a, {
        c: () => u
      });
      var n = d(1740),
        r = d(1668),
        i = d(5992),
        t = d(9152),
        s = d(2700),
        c = d(4928);
      const o = {
        clrCardModalContent: "rockstargames-modules-core-carddc0e7500dcde84410e1ca036d13bf1eb",
        expandedCard: "rockstargames-modules-core-cardf147f821bee843f25ba323d0d35b681b",
        content: "rockstargames-modules-core-cardc2d60013d6991b99bb296d88c03a8c4a",
        details: "rockstargames-modules-core-carde6a197aa0a3e8c65ce07dcbfdb3073ef",
        calloutHeaders: "rockstargames-modules-core-carda9c077266e78cdc09780c09894f2116d"
      };
      var l = d(3480);
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
          expandedCardContents: (0, l.jsx)(c.c, {
            images: j,
            prod: S
          }),
          children: (0, l.jsx)(s.c, {
            expandedType: g,
            to: v,
            style: {
              display: "flex"
            },
            children: (0, l.jsx)(t.c, {
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
    9152: (e, a, d) => {
      "use strict";
      d.d(a, {
        c: () => s
      });
      var n = d(1668);
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
      var i = d(3480);
      const t = e => {
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
        s = e => {
          let {
            className: a,
            cardType: d,
            title: s,
            image: c,
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
            children: (0, i.jsx)(t, {
              videoUrl: b,
              expandedType: p,
              children: (0, i.jsxs)("div", {
                className: r.cardContainer,
                "data-type": d,
                children: [(0, i.jsx)("div", {
                  className: r.cardMedia,
                  children: (0, i.jsx)(n.MultiSourceImage, {
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
    6648: (e, a, d) => {
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
      var n = d(360),
        r = d(8200),
        i = d(3660),
        t = d.n(i),
        s = d(1668),
        c = d(9812),
        o = d.n(c),
        l = d(1740),
        m = d(1884),
        u = d(9152),
        f = d(3052),
        p = d(1204);
      var b = d(3480);

      function k(e, a) {
        const d = {
          ...e
        };
        return t().forOwn(e, ((e, n) => {
          if ("image" === n) {
            const e = d[n];
            d[n] = {
              ...e,
              prod: a
            }
          } else t().isObject(e) && !t().isArray(e) ? k(e, a) : t().isArray(e) && (d[n] = e.map((e => t().isObject(e) ? k(e, a) : e)))
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
            HTMLElement: s.HTMLElement,
            ImageWithBadge: s.ImageWithBadge,
            Carousel: s.Carousel,
            Cta: s.Cta,
            GroupOfItems: o(),
            Grid: s.Grid,
            ClrCard: m.c,
            ClrCollapsedCard: u.c,
            CalloutSection: s.CalloutSection,
            TrackList: s.TrackList
          })), [n]),
          c = (() => {
            const {
              data: e
            } = (0, f.useQuery)(p.TinaModulesList, {
              variables: {
                type: "clr-card",
                locale: "en_us",
                orderDirection: "desc",
                orderBy: "created"
              }
            }), a = e?.tinaModulesList?.results, d = t().map(a, "id");
            return (0, s.useTinaModuleFetchByIds)({
              ids: d
            })
          })(),
          g = (0, l.useTinaPayload)(),
          v = (0, r.useMemo)((() => c ? c.reduce(((e, a) => {
            if (a) {
              const {
                id: d,
                tina: n
              } = a, r = t().clone(n);
              t().set(r, "payload.meta.id", d);
              const s = r?.payload,
                c = s?.meta?.cdn ?? !1 ?? g?.meta?.prod ?? !1,
                o = k(s?.content?.[0], c),
                m = s?.meta?.title,
                u = o?._memoq?.subheader,
                f = o?.image,
                p = s?.content?.[0].expandedType,
                v = s?.content?.[0].cardType,
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
          }), []) : null), [c, a]);
        return (0, b.jsx)(s.Grid, {
          className: d,
          children: v
        })
      };
      var v = d(3557);
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
      var N = d(696),
        x = d(5120),
        C = d(4928),
        S = d(5992),
        T = d(2700);
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
        } = s.framer.Animations,
        w = e => {
          let {
            id: a,
            logoImage: d = null,
            title: n,
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
            to: f = null,
            tina: p = {},
            cardIds: k,
            theme: g
          } = e;
          const v = (0, l.useTinaPayload)(),
            y = p?.payload?.meta?.cdn ?? v?.meta?.prod ?? !1,
            [h, w] = (0, r.useState)(u?.size ?? s),
            M = (0, l.useGetCdnSource)(d ?? null);
          let D = null;
          return v.content && (D = v?.content[0]?._memoq ? v?.content[0]?._memoq?.body : null), (0, r.useEffect)((() => {
            w(u?.size ?? s)
          }), [u?.size, s]), (0, b.jsx)(S.c, {
            id: a,
            title: n,
            size: h,
            expandedType: c,
            images: m,
            deckProps: u,
            prod: y,
            payload: {
              content: t,
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
              expandedType: c,
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
      var M = d(4212),
        D = d(7872),
        I = d(4152)
    },
    1204: e => {
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
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            t.has(e) || (t.add(e), (n[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = r(e, a);
          n && d.definitions.push(n)
        })), d
      }(a, "TinaModulesList")
    }
  }
]);
//# sourceMappingURL=89327b51b167e0caf32ca9f31f19526a.js.map