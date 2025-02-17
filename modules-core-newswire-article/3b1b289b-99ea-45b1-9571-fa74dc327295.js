! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3b1b289b-99ea-45b1-9571-fa74dc327295", e._sentryDebugIdIdentifier = "sentry-dbid-3b1b289b-99ea-45b1-9571-fa74dc327295")
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
  [4943, 9830], {
    23031: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => r
      });
      var s = i(87024),
        n = i(26432);
      const r = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          name: "listItem",
          label: "List Item",
          component: "group",
          fields: [(0, s.om)(e), (0, s.z9)({
            name: "content",
            label: "Content",
            component: "text",
            initialValues: ""
          }), (0, s.sE)(e)],
          defaultItem: () => (0, s.Q)({
            content: ""
          }),
          itemProps: e => (0, s.Rv)(e, {
            label: (0, n._e)(`${e?.name??e?.[s.Qw]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    2715: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => m
      });
      var s = i(57308),
        n = i(46012),
        r = i(64064),
        t = i.n(r),
        d = i(31879),
        c = i.n(d);
      const l = {
        hiddenMobile: "rockstargames-modules-core-newswire-articlec3a08254db141676fff1ac7bf9484218",
        hiddenLarge: "rockstargames-modules-core-newswire-articled38319419aba2f42e721ab08a26208fb",
        "hidden-sm": "rockstargames-modules-core-newswire-articlede4a014046acaad99dc53bb2c03f8719",
        "show-sm": "rockstargames-modules-core-newswire-articleb540a7274484859d8ab14a6c04f62b4f",
        "hidden-md": "rockstargames-modules-core-newswire-articlef1c15a75853dbb6189625b636a6d1baf",
        "show-md": "rockstargames-modules-core-newswire-articled6cabd1c7dce349d9e7e1598ead4503e",
        "hidden-lg": "rockstargames-modules-core-newswire-articlee53c219095a6cea2942bb53c4bf66259",
        "show-lg": "rockstargames-modules-core-newswire-articlea0529cc3561a81f9b96939b579caa623",
        "hidden-xl": "rockstargames-modules-core-newswire-articleb104796d98a3d67dde4b44e2c676b08e",
        "show-xl": "rockstargames-modules-core-newswire-articlee13f7a8d45b3fec8db6dedc3321f89f2",
        "hidden-xxl": "rockstargames-modules-core-newswire-articled1034e839209be1d4f103fc2c29bf531",
        "show-xxl": "rockstargames-modules-core-newswire-articled350dc14eb32714ed0230fe9f53591cd",
        "full-width": "rockstargames-modules-core-newswire-articled506082984d54d056e358cfbc0dde795",
        "reverse-mobile": "rockstargames-modules-core-newswire-articlefc45ea13bab881368ae51d327eb77243",
        "center-children": "rockstargames-modules-core-newswire-articlef2fa26d0f173f3d967cd339102390c4a",
        "std-padding-mobile-desktop-none": "rockstargames-modules-core-newswire-articledef459f80eeef54bcb18d93a9ed91ef7",
        "std-padding-desktop-mobile-none": "rockstargames-modules-core-newswire-articledeff228b0e0b37e77569d72317854418",
        "horizontal-line": "rockstargames-modules-core-newswire-articleba39f5e2ce30b99a045454ac97a6f707",
        gold: "rockstargames-modules-core-newswire-articleadff1577bb3952ea5b448144560148e1",
        heroImage: "rockstargames-modules-core-newswire-articled17c20c4aa402388a4d4b23d6ff41a3b",
        responsiveImage: "rockstargames-modules-core-newswire-articleaa419a38f6bffb372db81c2df3ec23ae",
        responsiveVideo: "rockstargames-modules-core-newswire-articlee70c0545b9c94794421dac5b59959c39"
      };
      var o = i(91029);
      const m = e => {
        let {
          alt: a = "",
          className: i = "",
          src: r = {},
          image: d = null,
          video: m = null
        } = e;
        return (0, o.jsxs)("div", {
          className: ((r?.videoPlayerId || r?.gifHash) && l.heroImage, i),
          children: [r?.mobile && (0, o.jsx)(n.A, {
            src: r.mobile,
            ariaLabel: a,
            className: [r?.desktop && l.hiddenLarge, l.responsiveImage].join(" "),
            noRatioPlease: !0
          }), r?.desktop && (0, o.jsx)(n.A, {
            src: r.desktop,
            ariaLabel: a,
            className: [r?.mobile && l.hiddenMobile, l.responsiveImage].join(" ")
          }), r?.videoPlayerId && (0, o.jsx)("div", {
            className: [l.responsiveVideo, l.trailer].join(" "),
            children: (0, o.jsx)(c(), {
              context: "site",
              autoplay: !1,
              id: r.videoPlayerId,
              hero: !0
            })
          }), r?.gifHash && (0, o.jsx)("div", {
            className: l.responsiveVideo,
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
            className: [l.responsiveVideo, l.trailer].join(" "),
            children: (0, o.jsx)(c(), {
              context: "site",
              autoplay: m?.autoplay ?? !1,
              id: m.id,
              hero: !0
            })
          })]
        })
      }
    },
    59535: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => t
      });
      var s = i(62229),
        n = i(16762),
        r = i(91029);
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
    37123: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => c
      });
      var s = i(40003),
        n = i(59535);
      const r = {
        badge: "rockstargames-modules-core-newswire-articleb7268b0e907630904b6689af83fee8e3",
        badgeSizeUpdate: "rockstargames-modules-core-newswire-articlece8632d7464b556158a1d549f653498c",
        badge2: "rockstargames-modules-core-newswire-articled08ce7145bc9562355a3984f8ccc9313",
        badge3: "rockstargames-modules-core-newswire-articlec7c60cfb12b6e9be68893c60814b3ed7"
      };
      var t = i(91029);
      const d = e => {
          let {
            wrapper: a,
            children: i,
            role: s,
            splitter: n
          } = e;
          return n || s ? a(i) : i
        },
        c = e => {
          let {
            badge: a,
            badgeType: c,
            role: l,
            splitter: o
          } = e;
          const m = [];
          return o ? a.split(o).map(((e, a) => m.push(e))) : m.push(a), (0, t.jsxs)(d, {
            splitter: o,
            role: l,
            wrapper: e => (0, t.jsx)("div", {
              className: `${r.badge} ${c?r[c]:""} `,
              children: e
            }),
            children: [(0, t.jsx)(t.Fragment, {
              children: l && (0, t.jsx)(s.A, {
                image: {
                  alt: l,
                  desktop: i(65287)(`./${l}.png`)
                }
              })
            }), (0, t.jsx)(n.A, {
              className: `${o||l?"":r.badge} ${c?r[c]:""}`,
              min: 8,
              max: 1e3,
              mode: o || l ? "single" : "multi",
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
    57308: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => l
      });
      var s = i(62229),
        n = i(95966),
        r = i(37123),
        t = i(40003);
      var d = i(91029);
      const c = e => {
          let {
            hero: a,
            children: i
          } = e;
          return a ? (0, d.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlea429886d721550d02521f7f5c9de7f5b",
            children: i
          }) : i
        },
        l = e => {
          let {
            badge: a = null,
            badgeType: i,
            discountTxt: l,
            splitter: o,
            image: m,
            style: u,
            className: f = "",
            attributes: b = {},
            role: k,
            hero: g = !1
          } = e;
          const w = (0, s.useMemo)((() => {
            if (m?.badge || m?.discountTxt || a || l) return (0, d.jsx)(r.A, {
              badge: m?.discountTxt ?? m?.badge ?? a ?? l,
              badgeType: i,
              splitter: m?.splitter ?? o,
              role: m?.role ?? k
            })
          }), [a, i, l, m, k, o]);
          return (0, d.jsx)(c, {
            hero: g,
            children: (0, d.jsx)("figure", {
              children: (0, d.jsxs)("div", {
                className: (0, n.classList)("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", g ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", b?.hiddenMobile ? "hiddenMobile" : "", b?.hiddenLarge ? "hiddenLarge" : "", b?.className, f),
                style: (0, n.safeStyles)({
                  ...u,
                  ...b?.style
                }),
                ...b,
                children: [(0, d.jsx)(t.A, {
                  image: m,
                  className: f
                }), w, m?.caption && (0, d.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
                  }
                })]
              })
            })
          })
        }
    },
    84392: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => o
      });
      var s = i(62229),
        n = i(2973),
        r = i.n(n),
        t = i(95966);
      const d = {
        pillBtn: "rockstargames-modules-core-newswire-articlec1ed14af6fceaba7c99728a81676dd92",
        selected: "rockstargames-modules-core-newswire-articlee49b5a5fd4ab934ece172fffe9f6577e",
        grid: "rockstargames-modules-core-newswire-articlebe627ae18a7bd3cff72d3f11aeed67df",
        itemList: "rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992",
        gtaplus: "rockstargames-modules-core-newswire-articlefbf343ed03c1bd513ea4cadc9726af76",
        rdo: "rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13",
        noImg: "rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3",
        gtao: "rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc",
        custom: "rockstargames-modules-core-newswire-articlecc2c26a3dd80cf9db62c4c7f389b7859",
        yellow: "rockstargames-modules-core-newswire-articlece372826eac3cc73094d69c0c5d9a530",
        hotPink: "rockstargames-modules-core-newswire-articleedb9998d6516a5aa1aece9c07c1768be",
        red: "rockstargames-modules-core-newswire-articlef674d6037f10af1a1fe41a83c1e5da17",
        turquoise: "rockstargames-modules-core-newswire-articlee211b0b8ae00897d696af259b3ddd837",
        purple: "rockstargames-modules-core-newswire-articlee61db4af0805bb4c9bf820c26ac8a85f",
        teal: "rockstargames-modules-core-newswire-articlea379d41268f4f002d5ac257f67461f1d",
        blue: "rockstargames-modules-core-newswire-articlebffe0939bda9e26ad14f6b01669338a8",
        green: "rockstargames-modules-core-newswire-articlef9c1eebf59650cd8ee84191d8fc62874",
        darkRed: "rockstargames-modules-core-newswire-articled44e2fc53f269ccf2b8fbe032ef6cec9",
        darkBlue: "rockstargames-modules-core-newswire-articlee2b6f722952b5d61d2a3b725166bfc9b",
        goldenrod: "rockstargames-modules-core-newswire-articlea365c5895cfd6c9f94fc994d71ba402c",
        skull: "rockstargames-modules-core-newswire-articleb2a1c0b367b250fe0606dffece9e1c02"
      };
      var c = i(91029);
      const {
        sanitize: l
      } = r(), o = e => {
        let {
          list: a,
          string: i,
          starColor: n,
          style: r,
          className: o,
          game: m,
          noImg: u,
          columns: f,
          mobileColumns: b
        } = e;
        const [k, g] = (0, s.useState)(null);
        if ((0, s.useEffect)((() => {
            g(a)
          }), [a]), !i && !a) return null;
        const w = {
          color: r?.color
        };
        return delete r?.color, f && k ? (0, c.jsx)("div", {
          className: d.grid,
          style: {
            "--ordered-list-grid-column": f,
            "--ordered-list-grid-column-mobile": b ?? f
          },
          children: (0, c.jsx)("ol", {
            className: (0, t.classList)(d.itemList, d.noImg, d[n], d[m]),
            style: (0, t.safeStyles)(r),
            children: k.map((e => (0, c.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              },
              style: w
            }, e.content)))
          })
        }) : (0, c.jsx)("ol", {
          style: (0, t.safeStyles)(r),
          className: (0, t.classList)(d.itemList, d.custom, u ? d.noImg : "", n ? d[n] : "", m ? d[m] : "", o ?? ""),
          children: a.map((e => (0, c.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, e?.content)))
        })
      }
    },
    46012: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => t
      });
      var s = i(95966);
      const n = {
        responsiveImage: "rockstargames-modules-core-newswire-articlef642b754e0efd503262ab7ca0c7b9f5b"
      };
      var r = i(91029);
      const t = e => {
        let {
          src: a,
          className: i = "",
          animate: t,
          ariaLabel: d,
          style: c = {}
        } = e;
        const [l, o] = (0, s.usePreloadImg)(a);
        if (!l) return null;
        c.backgroundImage = `url(${a})`;
        const m = {
          ...c
        };
        return o && (m["--aspect-ratio"] = o.width / o.height), (0, r.jsx)("div", {
          role: "img",
          "aria-label": d ?? "R* Games",
          className: [n.responsiveImage, t ? n.animateBox : "", i].join(" "),
          style: m
        })
      }
    },
    24069: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => o
      });
      var s = i(62229),
        n = i(2973),
        r = i.n(n),
        t = i(95966);
      const d = {
        pillBtn: "rockstargames-modules-core-newswire-articled45dcc8e4008f8620987ea3033e4373d",
        selected: "rockstargames-modules-core-newswire-articlede1852cf9b8b4b71bcc67f8e66552c46",
        grid: "rockstargames-modules-core-newswire-articlec157d94760f0476ea06aa04da4e86727",
        itemList: "rockstargames-modules-core-newswire-articlea1ccd04246730848111c4868ccba6294",
        gtaplus: "rockstargames-modules-core-newswire-articlec5d92b0365dc60e6b93d321e9139e9f3",
        rdo: "rockstargames-modules-core-newswire-articlecc490e805fe55ab86a3ec5df2a5131e3",
        noImg: "rockstargames-modules-core-newswire-articleb239e263450a84fffba43a94c194d606",
        gtao: "rockstargames-modules-core-newswire-articlef4bc90102d24f73cb2d45d3821bfd32e",
        custom: "rockstargames-modules-core-newswire-articleef5369875ddc5d9d7ad36eadc8afab2e",
        yellow: "rockstargames-modules-core-newswire-articlebdb57ca410954012dfd4711c67fc2a18",
        hotPink: "rockstargames-modules-core-newswire-articlefa9be84c85fca4e66b2489e1e52a2e6a",
        red: "rockstargames-modules-core-newswire-articlec446b758dbe82ad97444174f4d0b4abe",
        turquoise: "rockstargames-modules-core-newswire-articleb03c0798d8655dd98518b2f0dc002f06",
        purple: "rockstargames-modules-core-newswire-articlef14d63f28dd73c05cf950a08d8b8f501",
        teal: "rockstargames-modules-core-newswire-articlea0aaa124176430b6ad4f959cf136e7a3",
        blue: "rockstargames-modules-core-newswire-articledf5c0d39e32be4e6977bb1d638ed2340",
        green: "rockstargames-modules-core-newswire-articleea2d0d0e1e32d8e48d79a0ad80a4c8ac",
        darkRed: "rockstargames-modules-core-newswire-articlea6a078bd68ef39e719c21e5db6329642",
        darkBlue: "rockstargames-modules-core-newswire-articleaa460ec14f75c93c2ba386a115ea407c",
        goldenrod: "rockstargames-modules-core-newswire-articlea55d762df7035a2394c9ffbfcbf1a0db",
        skull: "rockstargames-modules-core-newswire-articlea034e7482e8f28c66ec657f72bb93749"
      };
      var c = i(91029);
      const {
        sanitize: l
      } = r(), o = e => {
        let {
          list: a,
          string: i,
          starColor: n,
          style: r,
          className: o,
          game: m,
          noImg: u,
          columns: f,
          mobileColumns: b
        } = e;
        const [k, g] = (0, s.useState)(null), w = i ? i.split("_#_") : a;
        if ((0, s.useEffect)((() => {
            g(a)
          }), [a]), !i && !a) return null;
        const v = {
          color: r?.color
        };
        return delete r?.color, f && k ? (0, c.jsx)("div", {
          className: d.grid,
          style: {
            "--unordered-list-grid-column": f,
            "--unordered-list-grid-column-mobile": b ?? f
          },
          children: (0, c.jsx)("ul", {
            className: (0, t.classList)(d.itemList, d.noImg, d[n], d[m]),
            style: (0, t.safeStyles)(r),
            children: k.map(((e, a) => (0, c.jsx)("li", {
              style: v,
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, a)))
          })
        }) : (0, c.jsx)("ul", {
          style: (0, t.safeStyles)(r),
          className: (0, t.classList)(d.itemList, d.custom, u ? d.noImg : "", n ? d[n] : "", m ? d[m] : "", o ?? ""),
          children: w.map(((e, a) => (0, c.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, a)))
        })
      }
    },
    40003: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => c
      });
      var s = i(8458),
        n = i(95966);
      const r = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f";
      var t = i(91029);
      const d = e => {
          let {
            alt: a,
            className: s,
            src: r,
            style: d
          } = e;
          const [c, l] = (0, n.usePreloadImg)(r);
          let o = r;
          !1 === c && ("rockstargames-modules-core-newswire-articlea6a06e2d5c4f1811ea39d17312ca2e67" === s && (o = i(28839)), o = i(9333));
          const {
            width: m,
            height: u
          } = l, f = {
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
        c = e => {
          let {
            className: a,
            style: c = {},
            image: l = {},
            imageStyle: o = {}
          } = e, {
            alt: m,
            src: u
          } = (0, s.S1)(l);
          const {
            isMobile: f
          } = (0, n.useWindowResize)();
          u.desktop || u.mobile || (m = "", u = {
            mobile: i(28839),
            desktop: i(9333)
          });
          let b = l.frame ? `${l.frame} ${r}` : r;
          return (0, t.jsx)("div", {
            className: b,
            style: c,
            children: (0, t.jsx)(d, {
              style: {
                ...o,
                ...l?.style
              },
              src: f ? u.mobile || u.desktop : u?.desktop || u?.mobile,
              alt: m,
              className: a
            })
          })
        }
    },
    84343: e => {
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
          var c = d;
          d = new Set, c.forEach((function(e) {
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
    65287: (e, a, i) => {
      var s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
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
      }, n.resolve = r, e.exports = n, n.id = 65287
    },
    7502: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    9333: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);