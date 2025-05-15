! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "157b2eac-6a4e-440d-9eb8-2d5ff698fedf", e._sentryDebugIdIdentifier = "sentry-dbid-157b2eac-6a4e-440d-9eb8-2d5ff698fedf")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3613], {
    33613: (e, a, r) => {
      r.r(a), r.d(a, {
        Actions: () => c,
        AvatarMenu: () => d.Jv,
        AvatarMenuSection: () => d.Kr,
        AvatarMenuSectionContent: () => d.lt,
        AvatarMenuSectionHeader: () => d.bA,
        AvatarMenuSectionHeaderDropdown: () => d.cu,
        Breakpoint: () => n.E,
        CallToAction: () => m,
        Header: () => M.Y9,
        Menu: () => x.W1,
        MenuContent: () => x.rm,
        MenuItem: () => x.Dr,
        MenuLink: () => x.w4,
        MenuList: () => x.cO,
        MenuSub: () => x.aC,
        MenuTrigger: () => x.cQ,
        MobileMenu: () => g.qe,
        MobileMenuNav: () => g.z1,
        NavigationWrapper: () => t.A,
        QuickMenu: () => p.B,
        Root: () => M.bL,
        Search: () => N,
        SearchBar: () => E,
        SearchFilters: () => I,
        SearchTarget: () => D,
        SearchTargetDropdown: () => R,
        SiteTitle: () => F,
        default: () => G
      });
      var s = r(79296),
        t = r(92074);
      var o = r(25854);
      const c = e => {
        let {
          children: a
        } = e;
        return (0, o.jsx)("div", {
          className: "rockstargames-modules-core-headerc4f15625f88eb02acfbc8ca67b037e73",
          children: a
        })
      };
      var d = r(1707),
        n = r(16586),
        l = r(71127),
        i = r(21222);
      const h = "rockstargames-modules-core-headerf88340f4aed2ac9af614a8c30dac6a86",
        u = "rockstargames-modules-core-headercbbfe1886a9116f22ee660d6e782abb5";
      var f = r(24036),
        b = r.n(f),
        g = r(74956);
      const m = (0, l.forwardRef)((function(e, a) {
        let {
          children: r,
          asChild: s,
          className: t,
          variant: c,
          ...d
        } = e;
        const {
          inMobileMenu: n
        } = (0, l.useContext)(g.xN), f = b()("rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca", {
          [h]: "highlight" === c,
          [u]: !!n
        }, t), m = s ? i.Slot : "a";
        return (0, o.jsx)(m, {
          ref: a,
          className: f,
          ...d,
          children: (0, o.jsx)(i.Slottable, {
            children: r
          })
        })
      }));
      var x = r(54312),
        p = r(78211),
        M = r(96099),
        v = r(81788),
        k = r(42638),
        j = r(63582),
        y = r(60520);
      const T = {
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
      var _ = r(98081),
        w = r(64989),
        C = r(94222);
      const S = {
          open: {
            height: "auto",
            overflow: "hidden"
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: _.b.springClose
          }
        },
        N = e => {
          let {
            children: a
          } = e;
          const r = (0, v.useIntl)(),
            {
              isNavHidden: s
            } = (0, l.useContext)(M.PY),
            [t, c] = (0, l.useState)(!1);
          return (0, l.useEffect)((() => {
            c(!1)
          }), [s]), (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(k.Root, {
              open: t,
              onOpenChange: c,
              children: [(0, o.jsx)(n.E, {
                showOn: "desktop",
                children: (0, o.jsx)(k.Trigger, {
                  asChild: !0,
                  children: (0, o.jsx)("button", {
                    className: T.searchToggleButton,
                    "data-testid": "searchToggle",
                    children: (0, o.jsx)("img", {
                      src: y.qc,
                      alt: r.formatMessage(t ? w.A.search_close_button : w.A.search_open_button)
                    })
                  })
                })
              }), (0, o.jsx)(j.AnimatePresence, {
                children: t && (0, o.jsx)(k.Content, {
                  forceMount: !0,
                  sideOffset: 28,
                  children: (0, o.jsx)(j.motion.div, {
                    className: T.searchPopup,
                    initial: "close",
                    animate: "open",
                    exit: "close",
                    variants: S,
                    transition: _.b.springOpen,
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
            queryMax: t = 100,
            errorMessage: c,
            onSearch: d,
            onChange: n
          } = e;
          const i = (0, v.useIntl)(),
            {
              inMobileMenu: h
            } = (0, l.useContext)(g.xN),
            [u, f] = (0, l.useState)(""),
            [m, x] = (0, l.useState)(""),
            p = () => {
              d(u, m)
            };
          (0, l.useEffect)((() => {
            u.length >= s && p()
          }), [m, s]);
          const M = {
            inSearchMenu: !0,
            searchTarget: m,
            setSearchTarget: x,
            onChange: n
          };
          return (0, o.jsxs)(A.Provider, {
            value: M,
            children: [(0, o.jsxs)("div", {
              className: b()(T.searchQuery, {
                [T.searchQueryMobile]: h
              }),
              children: [(0, o.jsx)("div", {
                className: T.searchIcon,
                children: (0, o.jsx)("button", {
                  type: "button",
                  onClick: p,
                  children: (0, o.jsx)("img", {
                    src: y.qc,
                    alt: i.formatMessage(w.A.search_action)
                  })
                })
              }), (0, o.jsx)("div", {
                className: b()(T.searchField, {
                  [T.searchFieldMobile]: h
                }),
                children: (0, o.jsx)("input", {
                  type: "textfield",
                  value: u,
                  onChange: e => {
                    return a = e.target.value, f(a), void n?.(a);
                    var a
                  },
                  onKeyUp: e => {
                    "Enter" === e.key && p()
                  },
                  placeholder: i.formatMessage(w.A.search_placeholder),
                  ref: a,
                  enterKeyHint: "search",
                  maxLength: t,
                  min: s,
                  max: t
                })
              })]
            }), (0, o.jsxs)("div", {
              className: b()(T.searchTargets, {
                [T.searchTargetsMobile]: h
              }),
              children: [r, !h && (0, o.jsx)("div", {
                className: T.closeIcon,
                children: (0, o.jsx)(k.Close, {
                  children: (0, o.jsx)("img", {
                    src: y.sk,
                    alt: i.formatMessage(w.A.search_close_button)
                  })
                })
              }), c && (0, o.jsx)("div", {
                className: T.errorMessage,
                "aria-live": "polite",
                children: c
              })]
            })]
          })
        })),
        I = e => {
          let {
            children: a
          } = e;
          return (0, o.jsx)("div", {
            className: T.filters,
            children: a
          })
        },
        D = (0, l.forwardRef)((function(e, a) {
          let {
            children: r,
            value: s,
            ...t
          } = e;
          const {
            setSearchTarget: c,
            searchTarget: d
          } = (0, l.useContext)(A), {
            inSearchTargetDropdown: n,
            setRootSearchTarget: i
          } = (0, l.useContext)(O), h = d === s;
          return (0, o.jsx)("button", {
            ref: a,
            type: "button",
            className: b()({
              [T.subTargetButton]: n,
              [T.pillButton]: !n,
              [T.selected]: !!h
            }),
            onClick: () => {
              return c(e = s), void(n && i(e));
              var e
            },
            value: s,
            ...t,
            children: r
          })
        })),
        O = (0, l.createContext)({
          inSearchTargetDropdown: !1,
          setRootSearchTarget: () => {}
        }),
        R = e => {
          let {
            title: a,
            children: r
          } = e;
          const [s, t] = (0, l.useState)(!1), [c, d] = (0, l.useState)("");
          return (0, l.useEffect)((() => {
            t(!1)
          }), [c]), (0, o.jsxs)(k.Root, {
            open: s,
            onOpenChange: t,
            children: [(0, o.jsx)(k.Trigger, {
              asChild: !0,
              children: (0, o.jsxs)(D, {
                value: a,
                children: [c || a, (0, o.jsx)("img", {
                  src: C,
                  className: T.triggerChevron,
                  alt: ""
                })]
              })
            }), (0, o.jsx)(O.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                setRootSearchTarget: d
              },
              children: (0, o.jsx)(k.Content, {
                align: "start",
                className: T.searchTargetDropdownContent,
                children: r
              })
            })]
          })
        },
        B = () => (0, o.jsx)("div", {
          className: "rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8"
        }),
        P = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        F = e => {
          let {
            children: a,
            href: r
          } = e;
          const s = (0, v.useIntl)(),
            [t, c] = (0, l.useState)(!1),
            {
              brand: d,
              isNavHidden: i
            } = (0, l.useContext)(M.PY),
            h = r || "/";
          return (0, l.useEffect)((() => {
            c(!1)
          }), [i]), (0, o.jsxs)("div", {
            className: "rockstargames-modules-core-headerb849f786b7df4a944d31e8d270e88402",
            children: [(0, o.jsxs)("div", {
              className: "rockstargames-modules-core-headerd4e4d5dba7484c7a542e229dfbce0fa5",
              children: [!d && (0, o.jsx)(n.E, {
                showOn: "mobile",
                children: (0, o.jsx)("a", {
                  href: h,
                  "aria-label": s.formatMessage(w.A.nav_rockstargames_home),
                  children: (0, o.jsx)(B, {})
                })
              }), !a && (0, o.jsx)(n.E, {
                showOn: "desktop",
                children: (0, o.jsx)("a", {
                  href: h,
                  "aria-label": s.formatMessage(w.A.nav_rockstargames_home),
                  children: (0, o.jsx)(B, {})
                })
              }), a && (0, o.jsxs)(k.Root, {
                open: t,
                onOpenChange: c,
                children: [(0, o.jsx)(n.E, {
                  showOn: "desktop",
                  children: (0, o.jsx)(k.Trigger, {
                    asChild: !0,
                    children: (0, o.jsx)("button", {
                      type: "button",
                      className: "rockstargames-modules-core-headercca5aace5aea24ffadc1b682e19098c1",
                      "aria-label": s.formatMessage(w.A.nav_rockstargames_logo),
                      children: (0, o.jsx)(B, {})
                    })
                  })
                }), (0, o.jsx)(j.AnimatePresence, {
                  children: t && (0, o.jsx)(k.Content, {
                    forceMount: !0,
                    align: "start",
                    sideOffset: 24,
                    children: (0, o.jsx)(j.motion.div, {
                      className: "rockstargames-modules-core-headerfe87bc51f19ebbbaeda0ea6abe883764",
                      variants: P,
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
            }), d && (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)(n.E, {
                showOn: "desktop",
                children: (0, o.jsx)("div", {
                  className: "rockstargames-modules-core-headerd9361f5f553f030e6a2739115afe41a7"
                })
              }), (0, o.jsx)("div", {
                className: "rockstargames-modules-core-headeref458606d6bf19c4a61b18feb8aaf80a",
                children: d
              })]
            })]
          })
        },
        G = s.A
    }
  }
]);