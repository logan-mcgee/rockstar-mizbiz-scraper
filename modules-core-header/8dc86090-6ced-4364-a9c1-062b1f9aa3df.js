! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "8dc86090-6ced-4364-a9c1-062b1f9aa3df", n._sentryDebugIdIdentifier = "sentry-dbid-8dc86090-6ced-4364-a9c1-062b1f9aa3df")
  } catch (n) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [80], {
    80: (n, e, a) => {
      a.r(e), a.d(e, {
        Actions: () => x,
        AvatarMenu: () => w.Jv,
        AvatarMenuSection: () => w.Kr,
        AvatarMenuSectionContent: () => w.lt,
        AvatarMenuSectionHeader: () => w.bA,
        AvatarMenuSectionHeaderDropdown: () => w.cu,
        Breakpoint: () => k.E,
        CallToAction: () => S,
        Header: () => E.Y9,
        Menu: () => T.W1,
        MenuContent: () => T.rm,
        MenuItem: () => T.Dr,
        MenuLink: () => T.w4,
        MenuList: () => T.cO,
        MenuSub: () => T.aC,
        MenuTrigger: () => T.cQ,
        MobileMenu: () => M.qe,
        MobileMenuNav: () => M.z1,
        NavigationWrapper: () => t.A,
        QuickMenu: () => j.B,
        Root: () => E.bL,
        Search: () => q,
        SearchBar: () => V,
        SearchFilters: () => Z,
        SearchTarget: () => K,
        SearchTargetDropdown: () => $,
        SiteTitle: () => ln,
        default: () => cn
      });
      var r = a(39082),
        t = a(26840),
        o = a(53178),
        i = a.n(o),
        d = a(27835),
        s = a.n(d),
        l = a(17529),
        c = a.n(l),
        A = a(72162),
        g = a.n(A),
        m = a(82510),
        h = a.n(m),
        f = a(90675),
        p = a.n(f),
        b = a(56570),
        u = {};
      u.styleTagTransform = p(), u.setAttributes = g(), u.insert = c().bind(null, "head"), u.domAPI = s(), u.insertStyleElement = h(), i()(b.A, u);
      const v = b.A && b.A.locals ? b.A.locals : void 0;
      var C = a(73855);
      const x = n => {
        let {
          children: e
        } = n;
        return (0, C.jsx)("div", {
          className: v.actions,
          children: e
        })
      };
      var w = a(82508),
        k = a(98077),
        y = a(62229),
        B = a(21222),
        z = a(50212),
        I = {};
      I.styleTagTransform = p(), I.setAttributes = g(), I.insert = c().bind(null, "head"), I.domAPI = s(), I.insertStyleElement = h(), i()(z.A, I);
      const D = z.A && z.A.locals ? z.A.locals : void 0;
      var H = a(24036),
        F = a.n(H),
        M = a(69035);
      const S = (0, y.forwardRef)((function(n, e) {
        let {
          children: a,
          asChild: r,
          className: t,
          variant: o,
          ...i
        } = n;
        const {
          inMobileMenu: d
        } = (0, y.useContext)(M.xN), s = F()(D.callToAction, {
          [D.highlight]: "highlight" === o,
          [D.callToActionMobile]: !!d
        }, t), l = r ? B.Slot : "a";
        return (0, C.jsx)(l, {
          ref: e,
          className: s,
          ...i,
          children: (0, C.jsx)(B.Slottable, {
            children: a
          })
        })
      }));
      var T = a(32948),
        j = a(74720),
        E = a(3241),
        R = a(81788),
        G = a(42638),
        N = a(63582),
        _ = a(64727),
        J = a(89011),
        P = {};
      P.styleTagTransform = p(), P.setAttributes = g(), P.insert = c().bind(null, "head"), P.domAPI = s(), P.insertStyleElement = h(), i()(J.A, P);
      const W = J.A && J.A.locals ? J.A.locals : void 0;
      var Q = a(85891),
        O = a(57835),
        Y = a(94222);
      const L = {
          open: {
            height: "auto",
            overflow: "hidden"
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: Q.b.springClose
          }
        },
        q = n => {
          let {
            children: e
          } = n;
          const a = (0, R.useIntl)(),
            {
              isNavHidden: r
            } = (0, y.useContext)(E.PY),
            [t, o] = (0, y.useState)(!1);
          return (0, y.useEffect)((() => {
            o(!1)
          }), [r]), (0, C.jsx)(C.Fragment, {
            children: (0, C.jsxs)(G.Root, {
              open: t,
              onOpenChange: o,
              children: [(0, C.jsx)(k.E, {
                showOn: "desktop",
                children: (0, C.jsx)(G.Trigger, {
                  asChild: !0,
                  children: (0, C.jsx)("button", {
                    className: W.searchToggleButton,
                    "data-testid": "searchToggle",
                    children: (0, C.jsx)("img", {
                      src: _.qc,
                      alt: a.formatMessage(t ? O.A.search_close_button : O.A.search_open_button)
                    })
                  })
                })
              }), (0, C.jsx)(N.AnimatePresence, {
                children: t && (0, C.jsx)(G.Content, {
                  forceMount: !0,
                  sideOffset: 28,
                  children: (0, C.jsx)(N.motion.div, {
                    className: W.searchPopup,
                    initial: "close",
                    animate: "open",
                    exit: "close",
                    variants: L,
                    transition: Q.b.springOpen,
                    "data-testid": "searchBar",
                    children: e
                  })
                })
              })]
            })
          })
        },
        U = (0, y.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          setRootSearchTarget: () => {},
          searchTarget: "",
          setSearchTarget: () => {},
          onChange: () => {}
        }),
        V = (0, y.forwardRef)((function(n, e) {
          let {
            children: a,
            queryMin: r = 0,
            queryMax: t = 100,
            errorMessage: o,
            onSearch: i,
            onChange: d
          } = n;
          const s = (0, R.useIntl)(),
            {
              inMobileMenu: l
            } = (0, y.useContext)(M.xN),
            [c, A] = (0, y.useState)(""),
            [g, m] = (0, y.useState)(""),
            h = () => {
              i(c, g)
            };
          (0, y.useEffect)((() => {
            c.length >= r && h()
          }), [g, r]);
          const f = {
            inSearchMenu: !0,
            searchTarget: g,
            setSearchTarget: m,
            onChange: d
          };
          return (0, C.jsxs)(U.Provider, {
            value: f,
            children: [(0, C.jsxs)("div", {
              className: F()(W.searchQuery, {
                [W.searchQueryMobile]: l
              }),
              children: [(0, C.jsx)("div", {
                className: W.searchIcon,
                children: (0, C.jsx)("button", {
                  type: "button",
                  onClick: h,
                  children: (0, C.jsx)("img", {
                    src: _.qc,
                    alt: s.formatMessage(O.A.search_action)
                  })
                })
              }), (0, C.jsx)("div", {
                className: F()(W.searchField, {
                  [W.searchFieldMobile]: l
                }),
                children: (0, C.jsx)("input", {
                  type: "textfield",
                  value: c,
                  onChange: n => {
                    return e = n.target.value, A(e), void d?.(e);
                    var e
                  },
                  onKeyUp: n => {
                    "Enter" === n.key && h()
                  },
                  placeholder: s.formatMessage(O.A.search_placeholder),
                  ref: e,
                  enterKeyHint: "search",
                  maxLength: t,
                  min: r,
                  max: t
                })
              })]
            }), (0, C.jsxs)("div", {
              className: F()(W.searchTargets, {
                [W.searchTargetsMobile]: l
              }),
              children: [a, !l && (0, C.jsx)("div", {
                className: W.closeIcon,
                children: (0, C.jsx)(G.Close, {
                  children: (0, C.jsx)("img", {
                    src: _.sk,
                    alt: s.formatMessage(O.A.search_close_button)
                  })
                })
              }), o && (0, C.jsx)("div", {
                className: W.errorMessage,
                "aria-live": "polite",
                children: o
              })]
            })]
          })
        })),
        Z = n => {
          let {
            children: e
          } = n;
          return (0, C.jsx)("div", {
            className: W.filters,
            children: e
          })
        },
        K = (0, y.forwardRef)((function(n, e) {
          let {
            children: a,
            value: r,
            ...t
          } = n;
          const {
            setSearchTarget: o,
            searchTarget: i
          } = (0, y.useContext)(U), {
            inSearchTargetDropdown: d,
            setRootSearchTarget: s
          } = (0, y.useContext)(X), l = i === r;
          return (0, C.jsx)("button", {
            ref: e,
            type: "button",
            className: F()({
              [W.subTargetButton]: d,
              [W.pillButton]: !d,
              [W.selected]: !!l
            }),
            onClick: () => {
              return o(n = r), void(d && s(n));
              var n
            },
            value: r,
            ...t,
            children: a
          })
        })),
        X = (0, y.createContext)({
          inSearchTargetDropdown: !1,
          setRootSearchTarget: () => {}
        }),
        $ = n => {
          let {
            title: e,
            children: a
          } = n;
          const [r, t] = (0, y.useState)(!1), [o, i] = (0, y.useState)("");
          return (0, y.useEffect)((() => {
            t(!1)
          }), [o]), (0, C.jsxs)(G.Root, {
            open: r,
            onOpenChange: t,
            children: [(0, C.jsx)(G.Trigger, {
              asChild: !0,
              children: (0, C.jsxs)(K, {
                value: e,
                children: [o || e, (0, C.jsx)("img", {
                  src: Y,
                  className: W.triggerChevron,
                  alt: ""
                })]
              })
            }), (0, C.jsx)(X.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                setRootSearchTarget: i
              },
              children: (0, C.jsx)(G.Content, {
                align: "start",
                className: W.searchTargetDropdownContent,
                children: a
              })
            })]
          })
        };
      var nn = a(48601),
        en = {};
      en.styleTagTransform = p(), en.setAttributes = g(), en.insert = c().bind(null, "head"), en.domAPI = s(), en.insertStyleElement = h(), i()(nn.A, en);
      const an = nn.A && nn.A.locals ? nn.A.locals : void 0,
        rn = () => (0, C.jsx)("div", {
          className: an.rockstarLogo
        });
      var tn = a(69222),
        on = {};
      on.styleTagTransform = p(), on.setAttributes = g(), on.insert = c().bind(null, "head"), on.domAPI = s(), on.insertStyleElement = h(), i()(tn.A, on);
      const dn = tn.A && tn.A.locals ? tn.A.locals : void 0,
        sn = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        ln = n => {
          let {
            children: e,
            href: a
          } = n;
          const r = (0, R.useIntl)(),
            [t, o] = (0, y.useState)(!1),
            {
              brand: i,
              isNavHidden: d
            } = (0, y.useContext)(E.PY),
            s = a || "/";
          return (0, y.useEffect)((() => {
            o(!1)
          }), [d]), (0, C.jsxs)("div", {
            className: dn.siteTitle,
            children: [(0, C.jsxs)("div", {
              className: dn.rockstar,
              children: [!i && (0, C.jsx)(k.E, {
                showOn: "mobile",
                children: (0, C.jsx)("a", {
                  href: s,
                  "aria-label": r.formatMessage(O.A.nav_rockstargames_home),
                  children: (0, C.jsx)(rn, {})
                })
              }), !e && (0, C.jsx)(k.E, {
                showOn: "desktop",
                children: (0, C.jsx)("a", {
                  href: s,
                  "aria-label": r.formatMessage(O.A.nav_rockstargames_home),
                  children: (0, C.jsx)(rn, {})
                })
              }), e && (0, C.jsxs)(G.Root, {
                open: t,
                onOpenChange: o,
                children: [(0, C.jsx)(k.E, {
                  showOn: "desktop",
                  children: (0, C.jsx)(G.Trigger, {
                    asChild: !0,
                    children: (0, C.jsx)("button", {
                      type: "button",
                      className: dn.quickAccessButton,
                      "aria-label": r.formatMessage(O.A.nav_rockstargames_logo),
                      children: (0, C.jsx)(rn, {})
                    })
                  })
                }), (0, C.jsx)(N.AnimatePresence, {
                  children: t && (0, C.jsx)(G.Content, {
                    forceMount: !0,
                    align: "start",
                    sideOffset: 24,
                    children: (0, C.jsx)(N.motion.div, {
                      className: dn.quickAccessContainer,
                      variants: sn,
                      initial: "closed",
                      animate: "open",
                      exit: "closed",
                      transition: {
                        duration: .2
                      },
                      children: e
                    })
                  })
                })]
              })]
            }), i && (0, C.jsxs)(C.Fragment, {
              children: [(0, C.jsx)(k.E, {
                showOn: "desktop",
                children: (0, C.jsx)("div", {
                  className: dn.divider
                })
              }), (0, C.jsx)("div", {
                className: dn.brand,
                children: i
              })]
            })]
          })
        },
        cn = r.A
    },
    56570: (n, e, a) => {
      a.d(e, {
        A: () => d
      });
      var r = a(42587),
        t = a.n(r),
        o = a(15081),
        i = a.n(o)()(t());
      i.push([n.id, ".siteHeaderContainer .rockstargames-modules-core-headerc4f15625f88eb02acfbc8ca67b037e73{align-items:center;display:flex;gap:var(--rem-15);grid-area:actions;justify-content:flex-end}", "", {
        version: 3,
        sources: ["webpack://./compositional/components/Actions/index.less"],
        names: [],
        mappings: "AAAA,wFAII,kBAAA,CAFA,YAAA,CAGA,iBAAA,CAJA,iBAAA,CAEA,wBAGJ",
        sourcesContent: [".actions {\n    grid-area: actions;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: var(--rem-15);\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        actions: "rockstargames-modules-core-headerc4f15625f88eb02acfbc8ca67b037e73"
      };
      const d = i
    },
    50212: (n, e, a) => {
      a.d(e, {
        A: () => d
      });
      var r = a(42587),
        t = a.n(r),
        o = a(15081),
        i = a.n(o)()(t());
      i.push([n.id, ".siteHeaderContainer .rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca{align-items:center;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:var(--black-65);border:1px solid var(--white-100);border-radius:var(--border-radius-sm);color:var(--white-100);display:flex;font-family:var(--font-family-body);font-size:calc(var(--base-rem-size) * .75);font-style:normal;font-weight:700;gap:10px;justify-content:center;line-height:100%;padding:var(--rem-05) var(--rem-075);text-align:center;text-decoration:none;text-transform:uppercase;transition:all .3s ease-in;white-space:nowrap}.siteHeaderContainer .rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca:hover{background-color:var(--white-100);color:var(--black-200)}.siteHeaderContainer .rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca.rockstargames-modules-core-headerf88340f4aed2ac9af614a8c30dac6a86{background-color:#fcaf17;border:1px solid transparent;color:var(--black-200)}.siteHeaderContainer .rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca.rockstargames-modules-core-headerf88340f4aed2ac9af614a8c30dac6a86:hover{background-color:#e19808;border:1px solid #e19808}.siteHeaderContainer .rockstargames-modules-core-headercbbfe1886a9116f22ee660d6e782abb5{font-size:var(--base-rem-size);margin:var(--padding-sm) var(--padding-md);padding:var(--base-rem-size)}", "", {
        version: 3,
        sources: ["webpack://./compositional/components/CallToAction/index.less"],
        names: [],
        mappings: "AAAA,wFAmBI,kBAAA,CAOA,kCAAA,CAAA,0BAAA,CADA,0BAAA,CADA,iCAAA,CADA,qCAAA,CAlBA,sBAAA,CAWA,YAAA,CATA,mCAAA,CACA,0CAAA,CACA,iBAAA,CAEA,eAAA,CASA,QAAA,CAFA,sBAAA,CAJA,gBAAA,CAGA,oCAAA,CAXA,iBAAA,CAOA,oBAAA,CADA,wBAAA,CASA,0BAAA,CAXA,kBAWJ,CAOI,8FAEI,iCAAA,CADA,sBAJR,CAQI,0JAEI,wBAAA,CACA,4BAAA,CAFA,sBAJR,CAQQ,gKACI,wBAAA,CACA,wBANZ,CAWA,wFAEI,8BAAA,CAEA,0CAAA,CAHA,4BAPJ",
        sourcesContent: [".callToAction {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: calc(var(--base-rem-size) * 0.75);\n    font-style: normal;\n    white-space: nowrap;\n    font-weight: 700;\n    text-transform: uppercase;\n    text-decoration: none;\n    line-height: 100%;\n\n    display: flex;\n    padding: var(--rem-05) var(--rem-075);\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    transition: all 0.3s ease-in;\n\n    border-radius: var(--border-radius-sm);\n    border: 1px solid var(--white-100);\n    background: var(--black-65);\n    backdrop-filter: blur(25px);\n\n    &:hover {\n        color: var(--black-200);\n        background-color: var(--white-100);\n    }\n\n    &.highlight {\n        color: var(--black-200);\n        background-color: #fcaf17;\n        border: 1px solid transparent;\n\n        &:hover {\n            background-color: #e19808;\n            border: 1px solid #e19808;\n        }\n    }\n}\n\n.callToActionMobile {\n    padding: var(--base-rem-size);\n    font-size: var(--base-rem-size);\n\n    margin: var(--padding-sm) var(--padding-md);\n}"],
        sourceRoot: ""
      }]), i.locals = {
        callToAction: "rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca",
        highlight: "rockstargames-modules-core-headerf88340f4aed2ac9af614a8c30dac6a86",
        callToActionMobile: "rockstargames-modules-core-headercbbfe1886a9116f22ee660d6e782abb5"
      };
      const d = i
    },
    48601: (n, e, a) => {
      a.d(e, {
        A: () => g
      });
      var r = a(42587),
        t = a.n(r),
        o = a(15081),
        i = a.n(o),
        d = a(79908),
        s = a.n(d),
        l = new URL(a(72734), a.b),
        c = i()(t()),
        A = s()(l);
      c.push([n.id, `.siteHeaderContainer .rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8{background:url(${A}) no-repeat 50%/contain;cursor:pointer;height:var(--rem-15);position:relative;width:var(--rem-15)}@keyframes rockstargames-modules-core-headerb0f6d946f0bad4946fbb51263581486d{0%{transform:translate(0)}20%{transform:translate(-2px,3px)}40%{transform:translate(-1px,-1px)}60%{transform:translate(1px,2px)}80%{transform:translate(1px,1px)}to{transform:translate(0)}}@keyframes rockstargames-modules-core-headercdcb55dce84a52e009b660df5f30da27{0%{transform:translate(0)}20%{transform:translate(1px,-2px)}40%{transform:translate(-1px,1px)}60%{transform:translate(-1px,-1px)}80%{transform:translateY(1px)}to{transform:translate(0)}}.siteHeaderContainer .rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8:after,.siteHeaderContainer .rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8:before{background:url(${A}) no-repeat 50%/contain;content:"";display:block;height:100%;left:0;opacity:0;position:absolute;text-transform:uppercase;top:0;transition:filter .1s;width:100%}.siteHeaderContainer .rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8:before{z-index:-1}.siteHeaderContainer .rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8:after{z-index:-2}.siteHeaderContainer .rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8:hover:after,.siteHeaderContainer .rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8:hover:before{opacity:1}.siteHeaderContainer .rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8:hover:before{animation:rockstargames-modules-core-headerb0f6d946f0bad4946fbb51263581486d .4s 2 both;filter:invert(55%) sepia(80%) saturate(301%) hue-rotate(148deg) brightness(93%) contrast(91%)}.siteHeaderContainer .rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8:hover:after{animation:rockstargames-modules-core-headercdcb55dce84a52e009b660df5f30da27 .4s 2 both;filter:invert(48%) sepia(83%) saturate(4695%) hue-rotate(329deg) brightness(84%) contrast(107%)}@media (max-width:1023px){.siteHeaderContainer .rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8{pointer-events:none}}`, "", {
        version: 3,
        sources: ["webpack://./compositional/components/RockstarLogo/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,wFA2CI,wEAAA,CAIA,cAAA,CAFA,oBAAA,CADA,iBAAA,CAEA,mBAXJ,CAlCI,6EACI,GACI,sBAoCV,CAlCM,IACI,6BAoCV,CAlCM,IACI,8BAoCV,CAlCM,IACI,4BAoCV,CAlCM,IACI,4BAoCV,CAlCM,GACI,sBAoCV,CACF,CAlCI,6EACI,GACI,sBAoCV,CAlCM,IACI,6BAoCV,CAlCM,IACI,6BAoCV,CAlCM,IACI,8BAoCV,CAlCM,IACI,yBAoCV,CAlCM,GACI,sBAoCV,CACF,CA1BI,6LAII,wEAAA,CADA,UAAA,CADA,aAAA,CAOA,WAAA,CADA,MAAA,CAIA,SAAA,CANA,iBAAA,CADA,wBAAA,CAEA,KAAA,CAIA,qBAAA,CADA,UA8BR,CA1BI,+FACI,UA4BR,CA1BI,8FACI,UA4BR,CAzBQ,yMAEI,SA2BZ,CAzBQ,qGACI,sFAAA,CACA,6FA2BZ,CAvBQ,oGACI,sFAAA,CACA,+FAyBZ,CChDI,0BAAA,wFD6BI,mBAuBN,CACF",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.rockstarLogo {\n    @keyframes glitch {\n        0% {\n            transform: translate(0);\n        }\n        20% {\n            transform: translate(-2px, 3px);\n        }\n        40% {\n            transform: translate(-1px, -1px);\n        }\n        60% {\n            transform: translate(1px, 2px);\n        }\n        80% {\n            transform: translate(1px, 1px);\n        }\n        to {\n            transform: translate(0);\n        }\n    }\n    @keyframes glitch2 {\n        0% {\n            transform: translate(0);\n        }\n        20% {\n            transform: translate(1px, -2px);\n        }\n        40% {\n            transform: translate(-1px, 1px);\n        }\n        60% {\n            transform: translate(-1px, -1px);\n        }\n        80% {\n            transform: translate(0, 1px);\n        }\n        to {\n            transform: translate(0);\n        }\n    }\n\n    @img: './img/rockstar.svg';\n    background: url(@img) no-repeat center/contain;\n    position: relative;\n    height: var(--rem-15);\n    width: var(--rem-15);\n    cursor: pointer;\n\n    &:before,\n    &:after {\n        display: block;\n        content: '';\n        background: url(@img) no-repeat center/contain;\n        text-transform: uppercase;\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        transition: filter 0.1s;\n        opacity: 0;\n    }\n    &:before {\n        z-index: -1;\n    }\n    &:after {\n        z-index: -2;\n    }\n    &:hover {\n        &:before,\n        &:after {\n            opacity: 1;\n        }\n        &:before {\n            animation: glitch 0.4s both 2;\n            filter: invert(55%) sepia(80%) saturate(301%) hue-rotate(148deg)\n                brightness(93%) contrast(91%);\n        }\n\n        &:after {\n            animation: glitch2 0.4s both 2;\n            filter: invert(48%) sepia(83%) saturate(4695%) hue-rotate(329deg)\n                brightness(84%) contrast(107%);\n        }\n    }\n\n    .mdMax({\n        pointer-events: none;\n    });\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), c.locals = {
        rockstarLogo: "rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8",
        glitch: "rockstargames-modules-core-headerb0f6d946f0bad4946fbb51263581486d",
        glitch2: "rockstargames-modules-core-headercdcb55dce84a52e009b660df5f30da27"
      };
      const g = c
    },
    89011: (n, e, a) => {
      a.d(e, {
        A: () => d
      });
      var r = a(42587),
        t = a.n(r),
        o = a(15081),
        i = a.n(o)()(t());
      i.push([n.id, ".siteHeaderContainer .rockstargames-modules-core-headerab3b2e0ecc987b715403e7c4b132f95d{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.siteHeaderContainer .rockstargames-modules-core-headerab3b2e0ecc987b715403e7c4b132f95d img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headerab3b2e0ecc987b715403e7c4b132f95d:focus,.siteHeaderContainer .rockstargames-modules-core-headerab3b2e0ecc987b715403e7c4b132f95d:hover{background-color:var(--white-40);outline:none}.siteHeaderContainer .rockstargames-modules-core-headerab3b2e0ecc987b715403e7c4b132f95d.rockstargames-modules-core-headerd58298b0610cb77e0a7d26a8735a93fd{background:var(--white-100);color:var(--black-200)}.siteHeaderContainer .rockstargames-modules-core-headerab3b2e0ecc987b715403e7c4b132f95d.rockstargames-modules-core-headerd58298b0610cb77e0a7d26a8735a93fd img{filter:invert()}.siteHeaderContainer .rockstargames-modules-core-headerfd31178b39e75b430b16a32f5ed36e2e{background:transparent;border:none;height:var(--rem-125);padding:0;width:var(--rem-125)}.siteHeaderContainer .rockstargames-modules-core-headerfd31178b39e75b430b16a32f5ed36e2e img{height:100%;width:100%}.siteHeaderContainer .rockstargames-modules-core-headerfd31178b39e75b430b16a32f5ed36e2e:hover{cursor:pointer}.siteHeaderContainer .rockstargames-modules-core-headerdf3ae3f8bb4d4763c2c2bdd43a38744a{background:linear-gradient(0deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,.15)),#000;border-bottom:1px solid var(--border-color);box-shadow:var(--global-navigation-box-shadow);display:flex;justify-content:center;width:100vw}.siteHeaderContainer .rockstargames-modules-core-headera634f4a0c4a48cbcc350732d51cb090b{align-items:center;display:flex;gap:var(--grid-gap-static-xs);max-width:1920px;padding:var(--padding-sm) var(--padding-sides);width:100%}.siteHeaderContainer .rockstargames-modules-core-headere1e68d34808ed306bca03b05f5b2b02d{background:#282828}.siteHeaderContainer .rockstargames-modules-core-headere823c5118fac77772d262996cc811242{align-items:center;display:flex;gap:var(--grid-gap-static-xs);padding:var(--padding-sm) var(--padding-sides)}.siteHeaderContainer .rockstargames-modules-core-headereac76768521427c950890d0981c8604c{border-bottom:1px solid var(--global-navigation-border-color);padding:20px 32px}.siteHeaderContainer .rockstargames-modules-core-headerecdd68bbe17f44b9e70ff88f2b2a9b79 button{background:transparent;border:none;display:block;height:var(--rem-15);padding:0;width:var(--rem-15)}.siteHeaderContainer .rockstargames-modules-core-headerecdd68bbe17f44b9e70ff88f2b2a9b79 img{height:var(--rem-15);width:var(--rem-15)}.siteHeaderContainer .rockstargames-modules-core-headere4d62dd5ace547da9e7b6fb79bbe72ad button{background:transparent;border:none;cursor:pointer;display:block;height:var(--rem-15);margin-left:var(--rem-15);padding:0;width:var(--rem-15)}.siteHeaderContainer .rockstargames-modules-core-headere4d62dd5ace547da9e7b6fb79bbe72ad img{height:var(--rem-15);width:var(--rem-15)}.siteHeaderContainer .rockstargames-modules-core-headerd94a8a649b5f5cd1fa547c9308ee4457{flex-grow:1;margin-right:var(--margin-md)}.siteHeaderContainer .rockstargames-modules-core-headerd94a8a649b5f5cd1fa547c9308ee4457 input{background:linear-gradient(0deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,.15)),#000;border:1px solid transparent;color:var(--white-100);font-family:var(--font-family-h);font-size:1.5rem;font-style:normal;font-weight:700;height:100%;letter-spacing:-.025em;line-height:100%;outline:0;width:100%}.siteHeaderContainer .rockstargames-modules-core-headerd94a8a649b5f5cd1fa547c9308ee4457 input::-moz-placeholder{color:var(--text-light);opacity:1}.siteHeaderContainer .rockstargames-modules-core-headerd94a8a649b5f5cd1fa547c9308ee4457 input::placeholder{color:var(--text-light);opacity:1}.siteHeaderContainer .rockstargames-modules-core-headera195beaac090ea8f2494f17d66774cb9 input{font-size:var(--rem-1)}.siteHeaderContainer .rockstargames-modules-core-headerb642c9d9226db09086ecfa05185cc13a{align-items:flex-start;display:flex;gap:var(--grid-gap-xs)}.siteHeaderContainer .rockstargames-modules-core-headerdfec712d8c92dbc76894b8566afe3f9a{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.siteHeaderContainer .rockstargames-modules-core-headerdfec712d8c92dbc76894b8566afe3f9a img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.siteHeaderContainer .rockstargames-modules-core-headerdfec712d8c92dbc76894b8566afe3f9a:focus,.siteHeaderContainer .rockstargames-modules-core-headerdfec712d8c92dbc76894b8566afe3f9a:hover{background-color:var(--white-40);outline:none}.siteHeaderContainer .rockstargames-modules-core-headerdfec712d8c92dbc76894b8566afe3f9a.rockstargames-modules-core-headerd58298b0610cb77e0a7d26a8735a93fd{background:var(--white-100);color:var(--black-200)}.siteHeaderContainer .rockstargames-modules-core-headerdfec712d8c92dbc76894b8566afe3f9a.rockstargames-modules-core-headerd58298b0610cb77e0a7d26a8735a93fd img{filter:invert()}.siteHeaderContainer .rockstargames-modules-core-headerded9b5c5e36e41a53dcdccf1a0fe2766{transition:transform .2s ease-in-out}.siteHeaderContainer [data-state=open] .rockstargames-modules-core-headerded9b5c5e36e41a53dcdccf1a0fe2766{transform:rotate(180deg)}.siteHeaderContainer .rockstargames-modules-core-headerf28d98973e2133109615a7d820b4257a{align-items:flex-start;background:var(--black-100);border:1px solid var(--global-navigation-border-color);border-radius:var(--border-radius-md);box-shadow:var(--global-navigation-box-shadow);display:inline-flex;flex-direction:column;max-height:var(--radix-popover-content-available-height);min-width:var(--sub-nav-min-width);overflow:hidden;padding:0;position:absolute;scrollbar-color:var(--scroll-thumb-color) var(--scroll-track-color);scrollbar-width:auto;z-index:999}.siteHeaderContainer .rockstargames-modules-core-headerf28d98973e2133109615a7d820b4257a::-webkit-scrollbar{width:8px}.siteHeaderContainer .rockstargames-modules-core-headerf28d98973e2133109615a7d820b4257a::-webkit-scrollbar-track{background:transparent}.siteHeaderContainer .rockstargames-modules-core-headerf28d98973e2133109615a7d820b4257a::-webkit-scrollbar-thumb{background-color:var(--scroll-thumb-color);border:none;border-radius:10px}.siteHeaderContainer .rockstargames-modules-core-headerf28d98973e2133109615a7d820b4257a a[data-ui-name=sub-menu-item]:focus-visible,.siteHeaderContainer .rockstargames-modules-core-headerf28d98973e2133109615a7d820b4257a div[data-ui-name=sub-menu-item] button:focus-visible{background-color:var(--white-15);border:1px solid var(--white-100);border-radius:6px;outline:none}.siteHeaderContainer .rockstargames-modules-core-headercbf7a2945565eaca09b784a902ac191b{background:unset;border:none;color:var(--white-100);cursor:pointer;font-family:var(--font-family-body);font-size:var(--nav-link-size);padding:var(--grid-gap-sm);text-align:left;text-decoration:none;transition:color .3s ease-in-out;white-space:nowrap;width:100%}.siteHeaderContainer .rockstargames-modules-core-headercbf7a2945565eaca09b784a902ac191b:hover{background-color:var(--white-15)}.siteHeaderContainer .rockstargames-modules-core-headercbf7a2945565eaca09b784a902ac191b:after{content:none}.siteHeaderContainer .rockstargames-modules-core-headerb471c4190fc8e65979506ca527760dda{animation:rockstargames-modules-core-headerb66ae794e4fe420fc94052d205a7ff94 .5s ease-out;max-height:var(--radix-popover-content-available-height);transform-origin:var(--radix-popover-content-transform-origin);width:var(--radix-popover-trigger-width)}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./compositional/components/Search/index.less"],
        names: [],
        mappings: "AA2QA,wFAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,4FAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,4LAEI,gCAAA,CACA,YC/OR,CDkPI,0JAEI,2BAAA,CADA,sBC/OR,CD8OI,8JAKQ,eChPZ,CAjEA,wFACI,sBAAA,CACA,WAAA,CAGA,qBAAA,CAFA,SAAA,CACA,oBAoEJ,CAxEA,4FASQ,WAAA,CADA,UAoER,CAhEI,8FACI,cAkER,CA9DA,wFAMI,6EAAA,CAFA,2CAAA,CACA,8CAAA,CAJA,YAAA,CACA,sBAAA,CACA,WAmEJ,CAxDA,wFAKI,kBAAA,CADA,YAAA,CAEA,6BAAA,CAJA,gBAAA,CACA,8CAAA,CAFA,UA+DJ,CAvDA,wFACI,kBAyDJ,CAtDA,wFAGI,kBAAA,CADA,YAAA,CAEA,6BAAA,CAHA,8CA2DJ,CArDA,wFAEI,6DAAA,CADA,iBAwDJ,CApDA,+FAEQ,sBAAA,CACA,WAAA,CAIA,aAAA,CAFA,oBAAA,CACA,SAAA,CAFA,mBAwDR,CA5DA,4FAYQ,oBAAA,CADA,mBAqDR,CAhDA,+FAEQ,sBAAA,CACA,WAAA,CAMA,cAAA,CAFA,aAAA,CAFA,oBAAA,CAGA,yBAAA,CAFA,SAAA,CAFA,mBAsDR,CA1DA,4FAcQ,oBAAA,CADA,mBAiDR,CA5CA,wFACI,WAAA,CACA,6BA8CJ,CAhDA,8FAOQ,6EAAA,CAMA,4BAAA,CAEA,sBAAA,CACA,gCAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA,CAbA,WAAA,CAgBA,sBAAA,CAFA,gBAAA,CACA,SAAA,CAhBA,UAyDR,CAtCQ,gHACI,uBAAA,CACA,SAwCZ,CA1CQ,2GACI,uBAAA,CACA,SAwCZ,CAnCA,8FAEQ,sBAoCR,CAhCA,wFAEI,sBAAA,CADA,YAAA,CAEA,sBAkCJ,CA/BA,wFDyII,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CCtGJ,CAlDA,4FD4JQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BCrGR,CDyGI,4LAEI,gCAAA,CACA,YCvGR,CD0GI,0JAEI,2BAAA,CADA,sBCvGR,CDsGI,8JAKQ,eCxGZ,CAhDA,wFACI,oCAkDJ,CAjDI,0GACI,wBAmDR,CA/CA,wFApBI,sBAAA,CA+BA,2BAAA,CADA,sDAAA,CADA,qCAAA,CADA,8CAAA,CALA,mBAAA,CAxBA,qBAAA,CA4BA,wDAAA,CAKA,kCAAA,CANA,eAAA,CA5BA,SAAA,CA0BA,iBAAA,CD8KA,mEAAA,CADA,oBAAA,CC5KA,WA6DJ,CDmHI,2GACI,SCjHR,CDmHI,iHACI,sBCjHR,CDmHI,iHACI,0CAAA,CAEA,WAAA,CADA,kBChHR,CA7FQ,iRAII,gCAAA,CAFA,iCAAA,CACA,iBAAA,CAFA,YAmGZ,CArEA,wFACI,gBAAA,CACA,WAAA,CAOA,sBAAA,CACA,cAAA,CAPA,mCAAA,CACA,8BAAA,CAQA,0BAAA,CAPA,eAAA,CACA,oBAAA,CAEA,gCAAA,CADA,kBAAA,CAIA,UAwEJ,CArEI,8FACI,gCAuER,CApEI,8FACI,YAsER,CAlEA,wFAEC,wFAAA,CAGA,wDAAA,CAJG,8DAAA,CAGA,wCAoEJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.searchToggleButton {\n    background: transparent;\n    border: none;\n    padding: 0;\n    width: var(--rem-125);\n    height: var(--rem-125);\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n\n    &:hover {\n        cursor: pointer;\n    }\n}\n\n.searchPopup {\n    display: flex;\n    justify-content: center;\n    width: 100vw;\n    border-bottom: 1px solid var(--border-color);\n    box-shadow: var(--global-navigation-box-shadow);\n    background: linear-gradient(\n            0deg,\n            rgba(255, 255, 255, 0.15) 0%,\n            rgba(255, 255, 255, 0.15) 100%\n        ),\n        #000;\n}\n\n.searchQuery {\n    width: 100%;\n    max-width: 1920px;\n    padding: var(--padding-sm) var(--padding-sides);\n    display: flex;\n    align-items: center;\n    gap: var(--grid-gap-static-xs);\n}\n\n.searchQueryMobile {\n    background: #282828;\n}\n\n.searchTargets {\n    padding: var(--padding-sm) var(--padding-sides);\n    display: flex;\n    align-items: center;\n    gap: var(--grid-gap-static-xs);\n}\n\n.searchTargetsMobile {\n    padding: 20px 32px;\n    border-bottom: 1px solid var(--global-navigation-border-color);\n}\n\n.searchIcon {\n    button {\n        background: transparent;\n        border: none;\n        width: var(--rem-15);\n        height: var(--rem-15);\n        padding: 0;\n        display: block;\n    }\n\n    img {\n        width: var(--rem-15);\n        height: var(--rem-15);\n    }\n}\n\n.closeIcon {\n    button {\n        background: transparent;\n        border: none;\n        width: var(--rem-15);\n        height: var(--rem-15);\n        padding: 0;\n        display: block;\n        margin-left: var(--rem-15);\n        cursor: pointer;\n    }\n\n    img {\n        width: var(--rem-15);\n        height: var(--rem-15);\n    }\n}\n\n.searchField {\n    flex-grow: 1;\n    margin-right: var(--margin-md);\n\n    input {\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(\n                0deg,\n                rgba(255, 255, 255, 0.15) 0%,\n                rgba(255, 255, 255, 0.15) 100%\n            ),\n            #000;\n        border: 0px 0px 1px solid transparent;\n\n        color: var(--white-100);\n        font-family: var(--font-family-h);\n        font-size: 1.5rem;\n        font-style: normal;\n        font-weight: 700;\n        line-height: 100%;\n        outline: 0;\n        letter-spacing: -0.025em;\n\n        &::placeholder {\n            color: var(--text-light);\n            opacity: 1;\n        }\n    }\n}\n\n.searchFieldMobile {\n    input{\n        font-size: var(--rem-1);\n    }\n}\n\n.filters {\n    display: flex;\n    align-items: flex-start;\n    gap: var(--grid-gap-xs);\n}\n\n.pillButton {\n    .pillBtn();\n}\n\n.subMenuStyles() {\n    padding: 0;\n    flex-direction: column;\n    align-items: flex-start;\n    \n    a[data-ui-name='sub-menu-item'],\n    div[data-ui-name='sub-menu-item'] button {\n        &:focus-visible {\n            outline: none;\n            border: solid 1px var(--white-100);\n            border-radius: 6px;\n            background-color: var(--white-15);\n        }\n    }\n}\n\n.triggerChevron {\n    transition: transform 0.2s ease-in-out;\n    [data-state=\"open\"] & {\n        transform: rotate(180deg);\n    }\n}\n\n.searchTargetDropdownContent {\n    .scrollbar();\n    .subMenuStyles();\n    display: inline-flex;\n    position: absolute;\n    z-index: 999;\n    overflow: hidden;\n    max-height: var(--radix-popover-content-available-height);\n    box-shadow: var(--global-navigation-box-shadow);\n    border-radius: var(--border-radius-md);\n    border: 1px solid var(--global-navigation-border-color);\n    background: var(--black-100);\n    min-width: var(--sub-nav-min-width);\n}\n\n.subTargetButton {\n    background: unset;\n    border: none;\n    font-family: var(--font-family-body);\n    font-size: var(--nav-link-size);\n    text-align: left;\n    text-decoration: none;\n    white-space: nowrap;\n    transition: color 0.3s ease-in-out;\n    color: var(--white-100);\n    cursor: pointer;\n    width: 100%;\n    padding: var(--grid-gap-sm);\n\n    &:hover {\n        background-color: var(--white-15);\n    }\n\n    &::after {\n        content: none;\n    }\n}\n\n.searchTargetDropdown {\n    transform-origin: var(--radix-popover-content-transform-origin);\n\tanimation: scaleIn 0.5s ease-out;\n\n    width: var(--radix-popover-trigger-width);\n\tmax-height: var(--radix-popover-content-available-height);\n}"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-headerab3b2e0ecc987b715403e7c4b132f95d",
        selected: "rockstargames-modules-core-headerd58298b0610cb77e0a7d26a8735a93fd",
        searchToggleButton: "rockstargames-modules-core-headerfd31178b39e75b430b16a32f5ed36e2e",
        searchPopup: "rockstargames-modules-core-headerdf3ae3f8bb4d4763c2c2bdd43a38744a",
        searchQuery: "rockstargames-modules-core-headera634f4a0c4a48cbcc350732d51cb090b",
        searchQueryMobile: "rockstargames-modules-core-headere1e68d34808ed306bca03b05f5b2b02d",
        searchTargets: "rockstargames-modules-core-headere823c5118fac77772d262996cc811242",
        searchTargetsMobile: "rockstargames-modules-core-headereac76768521427c950890d0981c8604c",
        searchIcon: "rockstargames-modules-core-headerecdd68bbe17f44b9e70ff88f2b2a9b79",
        closeIcon: "rockstargames-modules-core-headere4d62dd5ace547da9e7b6fb79bbe72ad",
        searchField: "rockstargames-modules-core-headerd94a8a649b5f5cd1fa547c9308ee4457",
        searchFieldMobile: "rockstargames-modules-core-headera195beaac090ea8f2494f17d66774cb9",
        filters: "rockstargames-modules-core-headerb642c9d9226db09086ecfa05185cc13a",
        pillButton: "rockstargames-modules-core-headerdfec712d8c92dbc76894b8566afe3f9a",
        triggerChevron: "rockstargames-modules-core-headerded9b5c5e36e41a53dcdccf1a0fe2766",
        searchTargetDropdownContent: "rockstargames-modules-core-headerf28d98973e2133109615a7d820b4257a",
        subTargetButton: "rockstargames-modules-core-headercbf7a2945565eaca09b784a902ac191b",
        searchTargetDropdown: "rockstargames-modules-core-headerb471c4190fc8e65979506ca527760dda",
        scaleIn: "rockstargames-modules-core-headerb66ae794e4fe420fc94052d205a7ff94"
      };
      const d = i
    },
    69222: (n, e, a) => {
      a.d(e, {
        A: () => d
      });
      var r = a(42587),
        t = a.n(r),
        o = a(15081),
        i = a.n(o)()(t());
      i.push([n.id, ".siteHeaderContainer .rockstargames-modules-core-headerb849f786b7df4a944d31e8d270e88402{align-items:center;display:flex;gap:var(--rem-075);grid-area:home}.siteHeaderContainer .rockstargames-modules-core-headerd4e4d5dba7484c7a542e229dfbce0fa5{display:flex}.siteHeaderContainer .rockstargames-modules-core-headerd9361f5f553f030e6a2739115afe41a7{background-color:var(--white-40);height:var(--rem-15);width:1px}.siteHeaderContainer .rockstargames-modules-core-headeref458606d6bf19c4a61b18feb8aaf80a{align-items:center;display:flex;height:33px}.siteHeaderContainer .rockstargames-modules-core-headerbcea25446c43c0c1874b964a5c2cae94{height:var(--brand-logo-height,100%);max-height:var(--rem-15);max-width:50vw;width:auto}.siteHeaderContainer .rockstargames-modules-core-headerbcea25446c43c0c1874b964a5c2cae94[data-brand=gta-plus]{--brand-logo-height:130%;margin-bottom:20%;max-height:none}.siteHeaderContainer .rockstargames-modules-core-headerbcea25446c43c0c1874b964a5c2cae94[data-brand=careers]{--brand-logo-height:70%}@media screen and (min-width:1024px){.siteHeaderContainer .rockstargames-modules-core-headerbcea25446c43c0c1874b964a5c2cae94{max-width:20vw}}.siteHeaderContainer .rockstargames-modules-core-headercca5aace5aea24ffadc1b682e19098c1{background:none;border:none;padding:0}.siteHeaderContainer .rockstargames-modules-core-headerfe87bc51f19ebbbaeda0ea6abe883764{min-width:var(--sub-nav-min-width);z-index:1}", "", {
        version: 3,
        sources: ["webpack://./compositional/components/SiteTitle/index.less"],
        names: [],
        mappings: "AAEA,wFAGI,kBAAA,CADA,YAAA,CAEA,kBAAA,CAHA,cAiCJ,CA3BA,wFACI,YA6BJ,CA1BA,wFACI,gCAAA,CACA,oBAAA,CACA,SA4BJ,CAzBA,wFAGI,kBAAA,CAFA,YAAA,CACA,WA4BJ,CAxBA,wFAYI,oCAAA,CACA,wBAAA,CACA,cAAA,CAHA,UAmBJ,CA7BI,6GACI,wBAAA,CACA,iBAAA,CACA,eA+BR,CA5BI,4GACI,uBA8BR,CAtBI,qCAAA,wFACI,cAyBN,CACF,CAtBA,wFACI,eAAA,CACA,WAAA,CACA,SAwBJ,CArBA,wFAEI,kCAAA,CADA,SAwBJ",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins';\n\n.siteTitle {\n    grid-area: home;\n    display: flex;\n    align-items: center;\n    gap: var(--rem-075);\n}\n\n.rockstar {\n    display: flex;\n}\n\n.divider {\n    background-color: var(--white-40);\n    height: var(--rem-15);\n    width: 1px;\n}\n\n.brand {\n    display: flex;\n    height: 33px;\n    align-items: center;\n}\n\n.brandLogo {\n    &[data-brand='gta-plus'] {\n        --brand-logo-height: 130%;\n        margin-bottom: 20%;\n        max-height: none;\n    }\n\n    &[data-brand='careers'] {\n        --brand-logo-height: 70%;\n    }\n\n    width: auto;\n    height: var(--brand-logo-height, 100%);\n    max-height: var(--rem-15);\n    max-width: 50vw;\n\n    @media screen and (min-width: 1024px) {\n        max-width: 20vw;\n    }\n}\n\n.quickAccessButton {\n    background: none;\n    border: none;\n    padding: 0;\n}\n\n.quickAccessContainer {\n    z-index: 1;\n    min-width: var(--sub-nav-min-width);\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        siteTitle: "rockstargames-modules-core-headerb849f786b7df4a944d31e8d270e88402",
        rockstar: "rockstargames-modules-core-headerd4e4d5dba7484c7a542e229dfbce0fa5",
        divider: "rockstargames-modules-core-headerd9361f5f553f030e6a2739115afe41a7",
        brand: "rockstargames-modules-core-headeref458606d6bf19c4a61b18feb8aaf80a",
        brandLogo: "rockstargames-modules-core-headerbcea25446c43c0c1874b964a5c2cae94",
        quickAccessButton: "rockstargames-modules-core-headercca5aace5aea24ffadc1b682e19098c1",
        quickAccessContainer: "rockstargames-modules-core-headerfe87bc51f19ebbbaeda0ea6abe883764"
      };
      const d = i
    },
    72734: n => {
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c46845952588bf44125a37117d4da32c.svg"
    }
  }
]);