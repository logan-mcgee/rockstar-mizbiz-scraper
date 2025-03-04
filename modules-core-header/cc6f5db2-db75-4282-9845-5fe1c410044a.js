! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cc6f5db2-db75-4282-9845-5fe1c410044a", e._sentryDebugIdIdentifier = "sentry-dbid-cc6f5db2-db75-4282-9845-5fe1c410044a")
  } catch (e) {}
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
  [1663], {
    61663: (e, a, r) => {
      r.r(a), r.d(a, {
        Actions: () => C,
        AvatarMenu: () => B.Jv,
        AvatarMenuSection: () => B.Kr,
        AvatarMenuSectionContent: () => B.lt,
        AvatarMenuSectionHeader: () => B.bA,
        AvatarMenuSectionHeaderDropdown: () => B.cu,
        Breakpoint: () => p.E,
        CallToAction: () => g,
        Header: () => o.Y9,
        Menu: () => t.W1,
        MenuContent: () => t.rm,
        MenuItem: () => t.Dr,
        MenuLink: () => t.w4,
        MenuList: () => t.cO,
        MenuSub: () => t.aC,
        MenuTrigger: () => t.cQ,
        MobileMenu: () => d.qe,
        MobileMenuNav: () => d.z1,
        NavigationWrapper: () => c.default,
        QuickMenu: () => n.B,
        Root: () => o.bL,
        Search: () => N,
        SearchBar: () => E,
        SearchFilters: () => I,
        SearchTarget: () => D,
        SearchTargetDropdown: () => O,
        SiteTitle: () => M,
        default: () => P
      });
      var s = r(96240),
        c = r(77273),
        o = r(8249),
        t = r(330),
        d = r(16775),
        n = r(25376),
        l = r(62229),
        i = r(21222);
      var h = r(24036),
        u = r.n(h),
        f = r(91029);
      const g = (0, l.forwardRef)((function(e, a) {
        let {
          children: r,
          asChild: s,
          className: c,
          variant: o,
          ...t
        } = e;
        const {
          inMobileMenu: n
        } = (0, l.useContext)(d.xN), h = u()("rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca", {
          "rockstargames-modules-core-headerf88340f4aed2ac9af614a8c30dac6a86": "highlight" === o,
          "rockstargames-modules-core-headercbbfe1886a9116f22ee660d6e782abb5": !!n
        }, c), g = s ? i.Slot : "a";
        return (0, f.jsx)(g, {
          ref: a,
          className: h,
          ...t,
          children: (0, f.jsx)(i.Slottable, {
            children: r
          })
        })
      }));
      var b = r(42638),
        m = r(81788);
      const x = () => (0, f.jsx)("div", {
        className: "rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8"
      });
      var p = r(95757),
        v = r(63582),
        k = r(10033);
      const j = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        M = e => {
          let {
            children: a,
            href: r
          } = e;
          const s = (0, m.useIntl)(),
            [c, t] = (0, l.useState)(!1),
            {
              brand: d,
              isNavHidden: n
            } = (0, l.useContext)(o.PY),
            i = r || "/";
          return (0, l.useEffect)((() => {
            t(!1)
          }), [n]), (0, f.jsxs)("div", {
            className: "rockstargames-modules-core-headerb849f786b7df4a944d31e8d270e88402",
            children: [(0, f.jsxs)("div", {
              className: "rockstargames-modules-core-headerd4e4d5dba7484c7a542e229dfbce0fa5",
              children: [!d && (0, f.jsx)(p.E, {
                showOn: "mobile",
                children: (0, f.jsx)("a", {
                  href: i,
                  "aria-label": s.formatMessage(k.A.nav_rockstargames_home),
                  children: (0, f.jsx)(x, {})
                })
              }), !a && (0, f.jsx)(p.E, {
                showOn: "desktop",
                children: (0, f.jsx)("a", {
                  href: i,
                  "aria-label": s.formatMessage(k.A.nav_rockstargames_home),
                  children: (0, f.jsx)(x, {})
                })
              }), a && (0, f.jsxs)(b.Root, {
                open: c,
                onOpenChange: t,
                children: [(0, f.jsx)(p.E, {
                  showOn: "desktop",
                  children: (0, f.jsx)(b.Trigger, {
                    asChild: !0,
                    children: (0, f.jsx)("button", {
                      type: "button",
                      className: "rockstargames-modules-core-headercca5aace5aea24ffadc1b682e19098c1",
                      "aria-label": s.formatMessage(k.A.nav_rockstargames_logo),
                      children: (0, f.jsx)(x, {})
                    })
                  })
                }), (0, f.jsx)(b.Content, {
                  forceMount: !0,
                  align: "start",
                  sideOffset: 24,
                  children: (0, f.jsx)(v.AnimatePresence, {
                    children: c && (0, f.jsx)(v.motion.div, {
                      className: "rockstargames-modules-core-headerfe87bc51f19ebbbaeda0ea6abe883764",
                      variants: j,
                      initial: "closed",
                      animate: "open",
                      exit: "closed",
                      transition: {
                        duration: .2
                      },
                      children: a
                    })
                  })
                })]
              })]
            }), d && (0, f.jsxs)(f.Fragment, {
              children: [(0, f.jsx)(p.E, {
                showOn: "desktop",
                children: (0, f.jsx)("div", {
                  className: "rockstargames-modules-core-headerd9361f5f553f030e6a2739115afe41a7"
                })
              }), (0, f.jsx)("div", {
                className: "rockstargames-modules-core-headeref458606d6bf19c4a61b18feb8aaf80a",
                children: d
              })]
            })]
          })
        },
        C = e => {
          let {
            children: a
          } = e;
          return (0, f.jsx)("div", {
            className: "rockstargames-modules-core-headerc4f15625f88eb02acfbc8ca67b037e73",
            children: a
          })
        };
      var _ = r(54806);
      const w = {
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
      var S = r(98693),
        T = r(94222);
      const y = {
          open: {
            height: "auto",
            overflow: "hidden"
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: S.b.springClose
          }
        },
        N = e => {
          let {
            children: a
          } = e;
          const r = (0, m.useIntl)(),
            {
              isNavHidden: s
            } = (0, l.useContext)(o.PY),
            [c, t] = (0, l.useState)(!1);
          return (0, l.useEffect)((() => {
            t(!1)
          }), [s]), (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)(b.Root, {
              open: c,
              onOpenChange: t,
              children: [(0, f.jsx)(p.E, {
                showOn: "desktop",
                children: (0, f.jsx)(b.Trigger, {
                  asChild: !0,
                  children: (0, f.jsx)("button", {
                    className: w.searchToggleButton,
                    "data-testid": "searchToggle",
                    children: (0, f.jsx)("img", {
                      src: _.qc,
                      alt: r.formatMessage(c ? k.A.search_close_button : k.A.search_open_button)
                    })
                  })
                })
              }), (0, f.jsx)(b.Content, {
                forceMount: !0,
                sideOffset: 28,
                children: (0, f.jsx)(v.AnimatePresence, {
                  children: c && (0, f.jsx)(v.motion.div, {
                    className: w.searchPopup,
                    initial: "close",
                    animate: "open",
                    exit: "close",
                    variants: y,
                    transition: S.b.springOpen,
                    "data-testid": "searchBar",
                    children: a
                  })
                })
              })]
            })
          })
        },
        A = (0, l.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          setRootSearchTarget: () => {},
          searchTarget: "",
          setSearchTarget: () => {},
          onChange: () => {}
        }),
        E = (0, l.forwardRef)((function(e, a) {
          let {
            children: r,
            queryMin: s = 0,
            queryMax: c = 100,
            errorMessage: o,
            onSearch: t,
            onChange: n
          } = e;
          const i = (0, m.useIntl)(),
            {
              inMobileMenu: h
            } = (0, l.useContext)(d.xN),
            [g, x] = (0, l.useState)(""),
            [p, v] = (0, l.useState)(""),
            j = () => {
              t(g, p)
            };
          (0, l.useEffect)((() => {
            g.length >= s && j()
          }), [p, s]);
          const M = {
            inSearchMenu: !0,
            searchTarget: p,
            setSearchTarget: v,
            onChange: n
          };
          return (0, f.jsxs)(A.Provider, {
            value: M,
            children: [(0, f.jsxs)("div", {
              className: u()(w.searchQuery, {
                [w.searchQueryMobile]: h
              }),
              children: [(0, f.jsx)("div", {
                className: w.searchIcon,
                children: (0, f.jsx)("button", {
                  type: "button",
                  onClick: j,
                  children: (0, f.jsx)("img", {
                    src: _.qc,
                    alt: i.formatMessage(k.A.search_action)
                  })
                })
              }), (0, f.jsx)("div", {
                className: u()(w.searchField, {
                  [w.searchFieldMobile]: h
                }),
                children: (0, f.jsx)("input", {
                  type: "textfield",
                  value: g,
                  onChange: e => {
                    return a = e.target.value, x(a), void n?.(a);
                    var a
                  },
                  onKeyUp: e => {
                    "Enter" === e.key && j()
                  },
                  placeholder: i.formatMessage(k.A.search_placeholder),
                  ref: a,
                  enterKeyHint: "search",
                  maxLength: c,
                  min: s,
                  max: c
                })
              })]
            }), (0, f.jsxs)("div", {
              className: u()(w.searchTargets, {
                [w.searchTargetsMobile]: h
              }),
              children: [r, !h && (0, f.jsx)("div", {
                className: w.closeIcon,
                children: (0, f.jsx)(b.Close, {
                  children: (0, f.jsx)("img", {
                    src: _.sk,
                    alt: i.formatMessage(k.A.search_close_button)
                  })
                })
              }), o && (0, f.jsx)("div", {
                className: w.errorMessage,
                "aria-live": "polite",
                children: o
              })]
            })]
          })
        })),
        I = e => {
          let {
            children: a
          } = e;
          return (0, f.jsx)("div", {
            className: w.filters,
            children: a
          })
        },
        D = (0, l.forwardRef)((function(e, a) {
          let {
            children: r,
            value: s,
            ...c
          } = e;
          const {
            setSearchTarget: o,
            searchTarget: t
          } = (0, l.useContext)(A), {
            inSearchTargetDropdown: d,
            setRootSearchTarget: n
          } = (0, l.useContext)(R), i = t === s;
          return (0, f.jsx)("button", {
            ref: a,
            type: "button",
            className: u()({
              [w.subTargetButton]: d,
              [w.pillButton]: !d,
              [w.selected]: !!i
            }),
            onClick: () => {
              return o(e = s), void(d && n(e));
              var e
            },
            value: s,
            ...c,
            children: r
          })
        })),
        R = (0, l.createContext)({
          inSearchTargetDropdown: !1,
          setRootSearchTarget: () => {}
        }),
        O = e => {
          let {
            title: a,
            children: r
          } = e;
          const [s, c] = (0, l.useState)(!1), [o, t] = (0, l.useState)("");
          return (0, l.useEffect)((() => {
            c(!1)
          }), [o]), (0, f.jsxs)(b.Root, {
            open: s,
            onOpenChange: c,
            children: [(0, f.jsx)(b.Trigger, {
              asChild: !0,
              children: (0, f.jsxs)(D, {
                value: a,
                children: [o || a, (0, f.jsx)("img", {
                  src: T,
                  className: w.triggerChevron,
                  alt: ""
                })]
              })
            }), (0, f.jsx)(R.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                setRootSearchTarget: t
              },
              children: (0, f.jsx)(b.Content, {
                align: "start",
                className: w.searchTargetDropdownContent,
                children: r
              })
            })]
          })
        };
      var B = r(17800);
      const P = s.A
    }
  }
]);