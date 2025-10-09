try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9aee8c6d-6303-4a31-be57-c2c2d7d346cd", e._sentryDebugIdIdentifier = "sentry-dbid-9aee8c6d-6303-4a31-be57-c2c2d7d346cd")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3395], {
    63395: (e, a, r) => {
      r.r(a), r.d(a, {
        Actions: () => n,
        AvatarMenu: () => d.Jv,
        AvatarMenuLanguageLabel: () => d.VO,
        AvatarMenuSection: () => d.Kr,
        AvatarMenuSectionContent: () => d.lt,
        AvatarMenuSectionHeader: () => d.bA,
        AvatarMenuSectionHeaderDropdown: () => d.cu,
        Breakpoint: () => l.E,
        CallToAction: () => k,
        Header: () => v.Y9,
        Menu: () => x.W1,
        MenuContent: () => x.rm,
        MenuIcon: () => x.ZB,
        MenuItem: () => x.Dr,
        MenuLink: () => x.w4,
        MenuList: () => x.cO,
        MenuSub: () => x.aC,
        MenuTrigger: () => x.cQ,
        MobileMenu: () => g.qe,
        MobileMenuNav: () => g.z1,
        NavigationWrapper: () => c.A,
        QuickMenu: () => p.B,
        Root: () => v.bL,
        Search: () => E,
        SearchBar: () => L,
        SearchContainer: () => R,
        SearchError: () => F,
        SearchFilters: () => O,
        SearchTarget: () => D,
        SearchTargetDropdown: () => q,
        SiteTitle: () => z,
        default: () => K
      });
      var s = r(88842),
        c = r(73258),
        t = r(42295);
      let o;
      o = {
        actions: "rockstargames-modules-core-headerc4f15625f88eb02acfbc8ca67b037e73"
      };
      const n = ({
        children: e
      }) => (0, t.jsx)("div", {
        className: o.actions,
        children: e
      });
      var d = r(46121),
        l = r(64705),
        i = r(71127),
        h = r(21222),
        u = r(4572),
        f = r.n(u),
        g = r(66439),
        b = r(43467);
      let m;
      m = {
        callToAction: "rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca",
        callToActionMobile: "rockstargames-modules-core-headercbbfe1886a9116f22ee660d6e782abb5",
        highlight: "rockstargames-modules-core-headerf88340f4aed2ac9af614a8c30dac6a86"
      };
      const k = (0, i.forwardRef)((function({
        children: e,
        asChild: a,
        className: r,
        variant: s,
        dataTestId: c,
        ...o
      }, n) {
        const {
          inMobileMenu: d
        } = (0, i.useContext)(g.xN), l = (0, b.mergeProps)({
          "data-testid": c
        }, o), u = f()(m.callToAction, {
          [m.highlight]: "highlight" === s,
          [m.callToActionMobile]: !!d
        }, r), k = a ? h.Slot : "a";
        return (0, t.jsx)(k, {
          ref: n,
          className: u,
          ...l,
          children: (0, t.jsx)(h.Slottable, {
            children: e
          })
        })
      }));
      var x = r(15364),
        p = r(16246),
        v = r(14005),
        M = r(86695),
        j = r(81788),
        C = r(42638),
        T = r(79158),
        y = r(63582),
        S = r(3564),
        w = r(35608),
        N = r(54914),
        A = r(94222);
      let _ = {
        closeIcon: "rockstargames-modules-core-headere4d62dd5ace547da9e7b6fb79bbe72ad",
        filterContainer: "rockstargames-modules-core-headerea293624c20a9003528f8f987ca1a72a",
        filterContainerMobile: "rockstargames-modules-core-headerb2545197a446a380d2e8d73ec8cac0b3",
        filters: "rockstargames-modules-core-headerb642c9d9226db09086ecfa05185cc13a",
        hasScrollLeft: "rockstargames-modules-core-headerfe78fb2c62f5bb25362c8c0cc57d0531",
        hasScrollRight: "rockstargames-modules-core-headere566b42b19ba5c234f6aa6ce1019f147",
        open: "rockstargames-modules-core-headerace76bca2cab08dbc01f04d6bb22972c",
        pillBtn: "rockstargames-modules-core-headerab3b2e0ecc987b715403e7c4b132f95d",
        pillButton: "rockstargames-modules-core-headerdfec712d8c92dbc76894b8566afe3f9a",
        scaleIn: "rockstargames-modules-core-headerb66ae794e4fe420fc94052d205a7ff94",
        searchBarContainer: "rockstargames-modules-core-headerd4f3148e5037527a409f7b661459772d",
        searchContainer: "rockstargames-modules-core-headerab5088afc99154e0b25d9940005de113",
        searchError: "rockstargames-modules-core-headereb547eb575435a51cbf0873f194d4107",
        searchField: "rockstargames-modules-core-headerd94a8a649b5f5cd1fa547c9308ee4457",
        searchFieldMobile: "rockstargames-modules-core-headera195beaac090ea8f2494f17d66774cb9",
        searchIcon: "rockstargames-modules-core-headerecdd68bbe17f44b9e70ff88f2b2a9b79",
        searchQuery: "rockstargames-modules-core-headera634f4a0c4a48cbcc350732d51cb090b",
        searchQueryMobile: "rockstargames-modules-core-headere1e68d34808ed306bca03b05f5b2b02d",
        searchTargetDropdown: "rockstargames-modules-core-headerb471c4190fc8e65979506ca527760dda",
        searchTargetDropdownContent: "rockstargames-modules-core-headerf28d98973e2133109615a7d820b4257a",
        searchTargets: "rockstargames-modules-core-headere823c5118fac77772d262996cc811242",
        searchTargetsMobile: "rockstargames-modules-core-headereac76768521427c950890d0981c8604c",
        searchToggleButton: "rockstargames-modules-core-headerfd31178b39e75b430b16a32f5ed36e2e",
        selected: "rockstargames-modules-core-headerd58298b0610cb77e0a7d26a8735a93fd",
        subTargetButton: "rockstargames-modules-core-headercbf7a2945565eaca09b784a902ac191b",
        triggerChevron: "rockstargames-modules-core-headerded9b5c5e36e41a53dcdccf1a0fe2766"
      };
      const B = {
          open: {
            height: "auto",
            overflow: "hidden",
            transition: {
              ...w.b.springClose,
              delay: .15
            }
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: w.b.springClose
          }
        },
        E = ({
          children: e,
          isSearchPage: a
        }) => {
          const r = (0, j.useIntl)(),
            {
              isNavHidden: s
            } = (0, i.useContext)(v.PY),
            [c, o] = (0, i.useState)(a || !1);
          (0, i.useEffect)((() => {
            o(!1)
          }), [s]);
          const n = !s && (a || c);
          return (0, t.jsx)(l.E, {
            showOn: "desktop",
            children: (0, t.jsx)("div", {
              className: _.searchContainer,
              children: (0, t.jsxs)(C.Root, {
                open: n,
                onOpenChange: o,
                children: [(0, t.jsx)(C.Trigger, {
                  asChild: !0,
                  children: (0, t.jsx)("button", {
                    className: _.searchToggleButton,
                    "data-testid": "searchToggle",
                    children: (0, t.jsx)("img", {
                      src: S.qc,
                      className: _.searchToggleButtonIcon,
                      alt: r.formatMessage(n ? N.A.search_close_button : N.A.search_open_button)
                    })
                  })
                }), (0, t.jsx)(y.AnimatePresence, {
                  children: n && (0, t.jsx)(C.Content, {
                    forceMount: !0,
                    sideOffset: 26,
                    children: (0, t.jsx)(y.motion.div, {
                      initial: "close",
                      animate: "open",
                      exit: "close",
                      variants: B,
                      "data-testid": "searchBar",
                      children: e
                    })
                  })
                })]
              })
            })
          })
        },
        I = (0, i.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        R = (0, i.forwardRef)((function({
          children: e
        }, a) {
          return (0, t.jsx)("div", {
            ref: a,
            className: _.searchBarContainer,
            children: e
          })
        })),
        L = (0, i.forwardRef)((function({
          children: e,
          queryMin: a = 0,
          queryMax: r = 100,
          onSearch: s,
          query: c,
          onQueryChange: o,
          target: n,
          onTargetChange: d,
          isSearchPage: l = !1
        }, h) {
          const u = (0, j.useIntl)(),
            {
              inMobileMenu: b,
              closeMobileMenu: m
            } = (0, i.useContext)(g.xN),
            [k, x] = (0, T.useControllableState)({
              prop: c,
              onChange: o,
              defaultProp: ""
            }),
            [p, A] = (0, T.useControllableState)({
              prop: n,
              onChange: d,
              defaultProp: ""
            }),
            [E, R] = (0, i.useState)(!1),
            {
              setForceBackground: L
            } = (0, i.useContext)(v.PY);
          (0, i.useEffect)((() => (L(!0), () => {
            L(!1)
          })), []);
          const O = (e, a) => {
              s(e, a, m)
            },
            D = {
              inSearchMenu: !0,
              searchTarget: p,
              setSearchTarget: e => {
                A(e), k && k.length >= a && O(k, e)
              },
              onChange: o
            },
            P = (0, i.useMemo)((() => b ? (0, t.jsx)(y.AnimatePresence, {
              children: E && (0, t.jsx)(y.motion.div, {
                initial: "close",
                animate: "open",
                exit: "close",
                variants: B,
                transition: w.b.springOpen,
                "data-testid": "searchBar",
                children: (0, t.jsx)("div", {
                  className: _.searchTargetsMobile,
                  children: e
                })
              })
            }) : (0, t.jsxs)("div", {
              className: _.searchTargets,
              children: [e, !b && !l && (0, t.jsx)("div", {
                className: _.closeIcon,
                children: (0, t.jsx)(C.Close, {
                  className: _.closeIconButton,
                  children: (0, t.jsx)("img", {
                    className: _.closeIconImg,
                    src: S.sk,
                    alt: u.formatMessage(N.A.search_close_button)
                  })
                })
              })]
            })), [b, E, l]);
          return (0, t.jsxs)(I.Provider, {
            value: D,
            children: [(0, t.jsxs)("div", {
              className: f()(_.searchQuery, {
                [_.searchQueryMobile]: b
              }),
              "data-testid": "searchBar",
              children: [(0, t.jsx)("div", {
                className: _.searchIcon,
                children: (0, t.jsx)(M.IconButton, {
                  className: _.searchIconButton,
                  onClick: () => {
                    O(k, p)
                  },
                  appearance: "ghost",
                  icon: "Search",
                  size: "LG",
                  label: u.formatMessage(N.A.search_action)
                })
              }), (0, t.jsx)("div", {
                className: _.searchField,
                children: (0, t.jsx)("input", {
                  className: _.searchFieldInput,
                  type: "textfield",
                  value: k,
                  onChange: e => (e => {
                    x(e)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && k && p && O(k, p)
                  },
                  onFocus: () => R(!0),
                  placeholder: u.formatMessage(N.A.search_placeholder),
                  ref: h,
                  enterKeyHint: "search",
                  maxLength: r,
                  min: a,
                  max: r
                })
              }), b && E && (0, t.jsx)(M.IconButton, {
                onClick: () => R(!1),
                appearance: "ghost",
                icon: "X",
                size: "MD",
                label: u.formatMessage(N.A.search_close_button)
              })]
            }), P]
          })
        })),
        O = ({
          children: e
        }) => {
          const {
            inMobileMenu: a
          } = (0, i.useContext)(g.xN), r = (0, i.useRef)(null), [s, c] = (0, i.useState)(0);
          return (0, i.useEffect)((() => {
            const e = () => {
              r && r.current && c(r.current.scrollLeft / (r.current.scrollWidth - r.current.offsetWidth))
            };
            return r && r.current && r.current.addEventListener("scroll", e), () => {
              r && r.current && r.current.removeEventListener("scroll", e)
            }
          }), [r.current]), (0, t.jsx)("div", {
            className: f()(a ? _.filterContainerMobile : _.filterContainer, {
              [_.hasScrollLeft]: s > .1,
              [_.hasScrollRight]: s < .9
            }),
            children: (0, t.jsx)("div", {
              ref: r,
              className: _.filters,
              children: e
            })
          })
        },
        D = (0, i.forwardRef)((function({
          children: e,
          value: a,
          title: r,
          active: s,
          hasChevron: c,
          ...o
        }, n) {
          const {
            setSearchTarget: d,
            searchTarget: l
          } = (0, i.useContext)(I), {
            inSearchTargetDropdown: h,
            setRootSearchTarget: u,
            rootSearchTarget: g
          } = (0, i.useContext)(P), b = s || Boolean(l) && (l === a || l === g.key);
          return (0, t.jsx)("button", {
            ref: n,
            type: "button",
            className: f()({
              [_.subTargetButton]: h,
              [_.pillButton]: !h,
              [_.selected]: b
            }),
            onClick: () => {
              return s = a, d?.(s), void(h && "string" == typeof e && u({
                key: a,
                title: r
              }));
              var s
            },
            value: a,
            ...o,
            children: e
          })
        })),
        P = (0, i.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: {
            key: "",
            title: ""
          },
          setRootSearchTarget: () => {}
        }),
        q = ({
          title: e,
          children: a
        }) => {
          const [r, s] = (0, i.useState)(!1), [c, o] = (0, i.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: n
          } = (0, i.useContext)(I);
          return (0, i.useEffect)((() => {
            s(!1)
          }), [c]), (0, i.useEffect)((() => {
            n !== c.key && o({
              key: "",
              title: ""
            })
          }), [n]), (0, t.jsxs)(C.Root, {
            open: r,
            onOpenChange: s,
            children: [(0, t.jsx)(C.Trigger, {
              asChild: !0,
              children: (0, t.jsxs)(D, {
                value: e,
                title: e,
                active: c.key,
                hasChevron: !0,
                children: [c.title || e, (0, t.jsx)("img", {
                  src: A,
                  className: f()(_.triggerChevron, _.pillButtonChevron, r ? _.open : _.closed),
                  alt: ""
                })]
              })
            }), (0, t.jsx)(P.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: c,
                setRootSearchTarget: o
              },
              children: (0, t.jsx)(C.Content, {
                align: "start",
                className: _.searchTargetDropdownContent,
                children: a
              })
            })]
          })
        },
        F = (0, i.forwardRef)((function({
          errorMessage: e
        }, a) {
          return e && (0, t.jsx)("div", {
            ref: a,
            className: _.searchError,
            "aria-live": "polite",
            children: e
          })
        }));
      let H;
      H = {
        glitch: "rockstargames-modules-core-headerb0f6d946f0bad4946fbb51263581486d",
        glitch2: "rockstargames-modules-core-headercdcb55dce84a52e009b660df5f30da27",
        rockstarLogo: "rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8"
      };
      const Q = () => (0, t.jsx)("div", {
        className: H.rockstarLogo
      });
      let Y;
      Y = {
        brand: "rockstargames-modules-core-headeref458606d6bf19c4a61b18feb8aaf80a",
        divider: "rockstargames-modules-core-headerd9361f5f553f030e6a2739115afe41a7",
        quickAccessButton: "rockstargames-modules-core-headercca5aace5aea24ffadc1b682e19098c1",
        quickAccessContainer: "rockstargames-modules-core-headerfe87bc51f19ebbbaeda0ea6abe883764",
        rockstar: "rockstargames-modules-core-headerd4e4d5dba7484c7a542e229dfbce0fa5",
        siteTitle: "rockstargames-modules-core-headerb849f786b7df4a944d31e8d270e88402"
      };
      const W = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        z = ({
          quickAccessHidden: e,
          children: a,
          href: r
        }) => {
          const s = (0, j.useIntl)(),
            [c, o] = (0, i.useState)(!1),
            {
              brand: n,
              isNavHidden: d
            } = (0, i.useContext)(v.PY),
            h = r || "/";
          return (0, i.useEffect)((() => {
            o(!1)
          }), [d, e]), (0, t.jsxs)("div", {
            className: Y.siteTitle,
            children: [(0, t.jsxs)("div", {
              className: Y.rockstar,
              children: [!n && (0, t.jsx)(l.E, {
                showOn: "mobile",
                children: (0, t.jsx)("a", {
                  href: h,
                  "aria-label": s.formatMessage(N.A.nav_rockstargames_home),
                  children: (0, t.jsx)(Q, {})
                })
              }), !a && (0, t.jsx)(l.E, {
                showOn: "desktop",
                children: (0, t.jsx)("a", {
                  href: h,
                  "aria-label": s.formatMessage(N.A.nav_rockstargames_home),
                  children: (0, t.jsx)(Q, {})
                })
              }), a && (0, t.jsxs)(C.Root, {
                open: c,
                onOpenChange: o,
                children: [(0, t.jsx)(l.E, {
                  showOn: "desktop",
                  children: (0, t.jsx)(C.Trigger, {
                    asChild: !0,
                    children: (0, t.jsx)("button", {
                      type: "button",
                      className: Y.quickAccessButton,
                      "aria-label": s.formatMessage(N.A.nav_rockstargames_logo),
                      children: (0, t.jsx)(Q, {})
                    })
                  })
                }), (0, t.jsx)(y.AnimatePresence, {
                  children: c && (0, t.jsx)(l.E, {
                    showOn: "desktop",
                    children: (0, t.jsx)(C.Content, {
                      forceMount: !0,
                      align: "start",
                      sideOffset: 24,
                      children: (0, t.jsx)(y.motion.div, {
                        className: Y.quickAccessContainer,
                        variants: W,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: a
                      })
                    })
                  })
                })]
              })]
            }), n && (0, t.jsxs)(t.Fragment, {
              children: [(0, t.jsx)(l.E, {
                showOn: "desktop",
                children: (0, t.jsx)("div", {
                  className: Y.divider
                })
              }), (0, t.jsx)("div", {
                className: Y.brand,
                children: n
              })]
            })]
          })
        },
        K = s.A
    }
  }
]);