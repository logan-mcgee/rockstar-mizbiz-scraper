! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b2734dce-d9c7-465b-a8f3-ea4484e04458", e._sentryDebugIdIdentifier = "sentry-dbid-b2734dce-d9c7-465b-a8f3-ea4484e04458")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6758], {
    60207: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => r
      });
      var s = i(55140),
        n = i(73379);
      const r = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          name: "listItem",
          label: "List Item",
          component: "group",
          fields: [(0, s.NameField)(e), (0, s.translatedField)({
            name: "content",
            label: "Content",
            component: "text",
            initialValues: ""
          }), (0, s.StyleField)(e)],
          defaultItem: () => (0, s.defaultItemUnique)({
            content: ""
          }),
          itemProps: e => (0, s.itemPropsWithKey)(e, {
            label: (0, n.stripHTML)(`${e?.name??e?.[s.TINA_MEMOQ_PREFIX]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    26043: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => m
      });
      var s = i(8999),
        n = i(37297),
        r = i(64064),
        t = i.n(r),
        d = i(31879),
        l = i.n(d);
      const c = {
        hiddenMobile: "rockstargames-modules-core-newswire-articlefcd9b756ec79b800e6e2a874d4952267",
        hiddenLarge: "rockstargames-modules-core-newswire-articlef1e7a1b01f98ac70ad8163ffee4ba650",
        "hidden-sm": "rockstargames-modules-core-newswire-articlef173a012951bcf6271166618a9194d95",
        "show-sm": "rockstargames-modules-core-newswire-articlec865b3fc9496eca4d2b60e4f39cb26b6",
        "hidden-md": "rockstargames-modules-core-newswire-articled373636a89b4a126bd8811fbdf6a8b5a",
        "show-md": "rockstargames-modules-core-newswire-articleb98b287d7b9a9b97f2d424a9ec06eac4",
        "hidden-lg": "rockstargames-modules-core-newswire-articleb4a5056ee672b146ba56a053c0996131",
        "show-lg": "rockstargames-modules-core-newswire-articlea053d2c98542e75ab7996394068ba96e",
        "hidden-xl": "rockstargames-modules-core-newswire-articlea67450e1f1e23eb187faf5bdd7818576",
        "show-xl": "rockstargames-modules-core-newswire-articlefdadc3b48dd33c8d314971f0c4ec768d",
        "hidden-xxl": "rockstargames-modules-core-newswire-articlea6d28df6b16a9ebd36981c24bf0385e6",
        "show-xxl": "rockstargames-modules-core-newswire-articlef16bd7eff092259aa29f77bb430c6cea",
        "full-width": "rockstargames-modules-core-newswire-articleb2703b37afddc64231bad0dbc6dc508e",
        "reverse-mobile": "rockstargames-modules-core-newswire-articlefb8f550bee051c39ae2446a313c6953d",
        "center-children": "rockstargames-modules-core-newswire-articleccd5e5d3fb737dc625dc9f865be73e58",
        "std-padding-mobile-desktop-none": "rockstargames-modules-core-newswire-articlea14d4623ce83550fabc2c0054c12e06c",
        "std-padding-desktop-mobile-none": "rockstargames-modules-core-newswire-articleeef40f8887a7a6f619111caa3133a7e0",
        "horizontal-line": "rockstargames-modules-core-newswire-articleb3c6fa2aa88993c8f208478df68b0da1",
        gold: "rockstargames-modules-core-newswire-articlef3c24bf757a12b65011514e75e247b8c",
        heroImage: "rockstargames-modules-core-newswire-articledf0381460fec48db32dff93b7840826b",
        responsiveImage: "rockstargames-modules-core-newswire-articleab6a895408f1c4da07244f72a48d14d9",
        responsiveVideo: "rockstargames-modules-core-newswire-articlea3faa88c835593aed90c0387fe1655bc"
      };
      var o = i(46632);
      const m = e => {
        let {
          alt: a = "",
          className: i = "",
          src: r = {},
          image: d = null,
          video: m = null
        } = e;
        return (0, o.jsxs)("div", {
          className: ((r?.videoPlayerId || r?.gifHash) && c.heroImage, i),
          children: [r?.mobile && (0, o.jsx)(n.A, {
            src: r.mobile,
            ariaLabel: a,
            className: [r?.desktop && c.hiddenLarge, c.responsiveImage].join(" "),
            noRatioPlease: !0
          }), r?.desktop && (0, o.jsx)(n.A, {
            src: r.desktop,
            ariaLabel: a,
            className: [r?.mobile && c.hiddenMobile, c.responsiveImage].join(" ")
          }), r?.videoPlayerId && (0, o.jsx)("div", {
            className: [c.responsiveVideo, c.trailer].join(" "),
            children: (0, o.jsx)(l(), {
              context: "site",
              autoplay: !1,
              id: r.videoPlayerId,
              hero: !0
            })
          }), r?.gifHash && (0, o.jsx)("div", {
            className: c.responsiveVideo,
            children: (0, o.jsx)(t(), {
              hash: [{
                desktop: r?.gifHash?.desktop
              }, {
                mobile: r?.gifHash?.mobile
              }]
            })
          }), d && (0, o.jsx)(s.A, {
            image: d
          }), m && (0, o.jsx)("div", {
            className: [c.responsiveVideo, c.trailer].join(" "),
            children: (0, o.jsx)(l(), {
              context: "site",
              autoplay: m?.autoplay ?? !1,
              id: m.id,
              hero: !0
            })
          })]
        })
      }
    },
    62550: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => t
      });
      var s = i(71403),
        n = i(64544),
        r = i(46632);
      const t = e => {
        let {
          children: a,
          ...i
        } = e;
        const [t, d] = (0, s.useState)(!1);
        return (0, r.jsx)(n.zb, {
          ...i,
          onReady: () => {
            document.fonts.ready.then((() => {
              d(!0)
            }))
          },
          children: a
        })
      }
    },
    52328: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => l
      });
      var s = i(2024),
        n = i(62550);
      const r = {
        badge: "rockstargames-modules-core-newswire-articlee279e2cebfa338f34b03fd732416e836",
        badgeSizeUpdate: "rockstargames-modules-core-newswire-articled7362a3e27ccaad9d2aadd2f31691340",
        badge2: "rockstargames-modules-core-newswire-articled697f4a5f7c876d5e540a96da1e0ca3a",
        badge3: "rockstargames-modules-core-newswire-articlee1bba3cd4554abbb48a030af24bbada5"
      };
      var t = i(46632);
      const d = e => {
          let {
            wrapper: a,
            children: i,
            role: s,
            splitter: n
          } = e;
          return n || s ? a(i) : i
        },
        l = e => {
          let {
            badge: a,
            badgeType: l,
            role: c,
            splitter: o
          } = e;
          const m = [];
          o ? a.split(o).map(((e, a) => m.push(e))) : m.push(a);
          let u = 100;
          return 2 == m.length && m[1].length < 4 && "off" !== m[1].toLowerCase() && 45, (0, t.jsxs)(d, {
            splitter: o,
            role: c,
            wrapper: e => (0, t.jsx)("div", {
              className: `${r.badge} ${l?r[l]:""} `,
              children: e
            }),
            children: [(0, t.jsx)(t.Fragment, {
              children: c && (0, t.jsx)(s.A, {
                image: {
                  alt: c,
                  desktop: i(45628)(`./${c}.png`)
                }
              })
            }), (0, t.jsx)(n.A, {
              className: `${o||c?"":r.badge} ${l?r[l]:""}`,
              min: 8,
              max: 1e3,
              mode: o || c ? "single" : "multi",
              children: m[0]
            }), (0, t.jsx)(t.Fragment, {
              children: m.shift() && o && m.length >= 1 && (0, t.jsx)(n.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: m.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    8999: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => c
      });
      var s = i(74401),
        n = i(42756),
        r = i(52328),
        t = i(2024);
      var d = i(46632);
      const l = e => {
          let {
            hero: a,
            children: i
          } = e;
          return a ? (0, d.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleefc561ad30f5dfe75c79d939737650dc",
            children: i
          }) : i
        },
        c = e => {
          let {
            badge: a = null,
            badgeType: i,
            discountTxt: c,
            splitter: o,
            image: m,
            style: u,
            className: f = "",
            attributes: b = {},
            role: k,
            hero: g = !1
          } = e;
          return (0, d.jsx)(l, {
            hero: g,
            children: (0, d.jsx)("figure", {
              children: (0, d.jsxs)("div", {
                className: (0, s.classList)("rockstargames-modules-core-newswire-articlecab262c98c7f5bb3e982d9b075b3c2a8", g ? "rockstargames-modules-core-newswire-articlecefd6d8859aeec1057caed28caa160c3" : "", b?.hiddenMobile ? "hiddenMobile" : "", b?.hiddenLarge ? "hiddenLarge" : "", b?.className, f),
                style: (0, n.safeStyles)({
                  ...u,
                  ...b?.style
                }),
                ...b,
                children: [(0, d.jsx)(t.A, {
                  image: m,
                  className: f
                }), (m?.badge || m?.discountTxt || a || c) && (0, d.jsx)(r.A, {
                  badge: m?.discountTxt ?? m?.badge ?? a ?? c,
                  badgeType: i,
                  splitter: m?.splitter ?? o,
                  role: m?.role ?? k
                }), m?.caption && (0, d.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
                  }
                })]
              })
            })
          })
        }
    },
    22941: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => m
      });
      var s = i(71403),
        n = i(61631),
        r = i.n(n),
        t = i(74401),
        d = i(42756);
      const l = {
        pillBtn: "rockstargames-modules-core-newswire-articlef87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-modules-core-newswire-articlea8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-modules-core-newswire-articlea57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-modules-core-newswire-articledaec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-modules-core-newswire-articlebd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-modules-core-newswire-articlea6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-modules-core-newswire-articlee88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-modules-core-newswire-articleab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-modules-core-newswire-articlec20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-modules-core-newswire-articleb16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-modules-core-newswire-articled0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-modules-core-newswire-articled1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-modules-core-newswire-articled6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-modules-core-newswire-articlef3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-modules-core-newswire-articlea6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-modules-core-newswire-articleeade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-modules-core-newswire-articlea82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-modules-core-newswire-articled394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-modules-core-newswire-articlef1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-modules-core-newswire-articlecdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-modules-core-newswire-articleba4bd16bff2fbc40616457007b4a7442"
      };
      var c = i(46632);
      const {
        sanitize: o
      } = r(), m = e => {
        let {
          list: a,
          string: i,
          starColor: n,
          style: r,
          className: m,
          game: u,
          noImg: f,
          columns: b,
          mobileColumns: k
        } = e;
        const [g, w] = (0, s.useState)(null);
        return (0, s.useEffect)((() => {
          w(a)
        }), [a]), i || a ? b && g ? (0, c.jsx)("div", {
          className: l.grid,
          style: {
            "--ordered-list-grid-column": b,
            "--ordered-list-grid-column-mobile": k ?? b
          },
          children: (0, c.jsx)("ol", {
            style: (0, d.safeStyles)(r),
            className: (0, t.classList)(l.itemList, l.noImg, l[n], l[u]),
            children: g.map((e => (0, c.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: o(e.content)
              }
            }, e.content)))
          })
        }) : (0, c.jsx)("ol", {
          style: (0, d.safeStyles)(r),
          className: (0, t.classList)(l.itemList, l.custom, f ? l.noImg : "", n ? l[n] : "", u ? l[u] : "", m ?? ""),
          children: a.map((e => (0, c.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: o(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    37297: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => t
      });
      var s = i(42756);
      const n = {
        responsiveImage: "rockstargames-modules-core-newswire-articlee31b43dce2e720669fb90bf539d22197"
      };
      var r = i(46632);
      const t = e => {
        let {
          src: a,
          className: i = "",
          animate: t,
          ariaLabel: d,
          style: l = {}
        } = e;
        const [c, o] = (0, s.usePreloadImg)(a);
        return c ? (l.backgroundImage = `url(${a})`, (0, r.jsx)("div", {
          role: "img",
          "aria-label": d ?? "R* Games",
          className: [n.responsiveImage, t ? n.animateBox : "", i].join(" "),
          style: {
            ...l,
            "--aspect-ratio": o.width / o.height
          }
        })) : null
      }
    },
    63672: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => m
      });
      var s = i(71403),
        n = i(61631),
        r = i.n(n),
        t = i(74401),
        d = i(42756);
      const l = {
        pillBtn: "rockstargames-modules-core-newswire-articlea89792e50dfe5470a67f42b9e143c824",
        selected: "rockstargames-modules-core-newswire-articlebcce8ac50552b225f30d185d876a3e14",
        grid: "rockstargames-modules-core-newswire-articleac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-modules-core-newswire-articlecaf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-modules-core-newswire-articleb291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-modules-core-newswire-articled146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-modules-core-newswire-articleba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-modules-core-newswire-articleb6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-modules-core-newswire-articleaf89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-modules-core-newswire-articled244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-modules-core-newswire-articled90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-modules-core-newswire-articlec3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-modules-core-newswire-articlefe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-modules-core-newswire-articlef5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-modules-core-newswire-articlef4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-modules-core-newswire-articlef6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-modules-core-newswire-articleab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-modules-core-newswire-articledc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-modules-core-newswire-articleb354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-modules-core-newswire-articlee4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-modules-core-newswire-articled4581a495de14e6762bb15debe5bb810"
      };
      var c = i(46632);
      const {
        sanitize: o
      } = r(), m = e => {
        let {
          list: a,
          string: i,
          starColor: n,
          style: r,
          className: m,
          game: u,
          noImg: f,
          columns: b,
          mobileColumns: k
        } = e;
        const [g, w] = (0, s.useState)(null), v = i ? i.split("_#_") : a;
        return (0, s.useEffect)((() => {
          w(a)
        }), [a]), i || a ? b && g ? (0, c.jsx)("div", {
          className: l.grid,
          style: {
            "--unordered-list-grid-column": b,
            "--unordered-list-grid-column-mobile": k ?? b
          },
          children: (0, c.jsx)("ul", {
            style: (0, d.safeStyles)(r),
            className: (0, t.classList)(l.itemList, l.noImg, l[n], l[u]),
            children: g.map(((e, a) => (0, c.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: o(e.content)
              }
            }, a)))
          })
        }) : (0, c.jsx)("ul", {
          style: (0, d.safeStyles)(r),
          className: (0, t.classList)(l.itemList, l.custom, f ? l.noImg : "", n ? l[n] : "", u ? l[u] : "", m ?? ""),
          children: v.map(((e, a) => (0, c.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: o(e?.content ?? e)
            }
          }, a)))
        }) : null
      }
    },
    2024: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => l
      });
      var s = i(28089),
        n = i(42756);
      const r = "rockstargames-modules-core-newswire-articleeb64520e04e486931cd65dc5b3fa61e8";
      var t = i(46632);
      const d = e => {
          let {
            alt: a,
            className: s,
            src: r,
            style: d
          } = e;
          const [l, c] = (0, n.usePreloadImg)(r);
          let o = r;
          !1 === l && ("rockstargames-modules-core-newswire-articleee609f31f3685766122c2c6fc0ef0710" === s && (o = i(14572)), o = i(8820));
          const {
            width: m,
            height: u
          } = c, f = {
            "--aspect-ratio": Number.isNaN(m / u) ? "" : m / u,
            ...d
          };
          return (0, t.jsx)("img", {
            src: o,
            className: s ?? "",
            alt: a,
            style: f
          })
        },
        l = e => {
          let {
            className: a,
            style: l = {},
            image: c = {},
            imageStyle: o = {}
          } = e, {
            alt: m,
            src: u
          } = (0, s.useImageParser)(c);
          const {
            isMobile: f
          } = (0, n.useWindowResize)();
          return u.desktop || u.mobile || (m = "", u = {
            mobile: i(14572),
            desktop: i(8820)
          }), (0, t.jsx)("div", {
            className: c.frame ? `${c.frame} ${r}` : r,
            style: l,
            children: (0, t.jsx)(d, {
              style: {
                ...o,
                ...c?.style
              },
              src: f ? u.mobile || u.desktop : u?.desktop || u?.mobile,
              alt: m,
              className: a
            })
          })
        }
    },
    50048: e => {
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
                value: "types"
              }
            },
            type: {
              kind: "ListType",
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
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
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
                        value: "id"
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
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "sync"
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
              value: !1
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
              value: !1
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
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
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
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
                        value: "to"
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
                            value: "id"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }]
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
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
          end: 1002
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var s = e.definitions[i];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var i = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var r = s[a] || new Set,
          t = new Set,
          d = new Set;
        for (r.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (s[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var s = n(e, a);
          s && i.definitions.push(s)
        })), i
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = r(a, "TinaModulesList"), e.exports.TinaModulesInfo = r(a, "TinaModulesInfo")
    },
    45628: (e, a, i) => {
      var s = {
        "./bounty.png": 89177,
        "./collector.png": 3787,
        "./moonshiner.png": 14022,
        "./naturalist.png": 34629,
        "./trader.png": 22864
      };

      function n(e) {
        var a = r(e);
        return i(a)
      }

      function r(e) {
        if (!i.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 45628
    },
    89177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    3787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    14022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    34629: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    22864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    8820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    14572: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);