try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5019f41b-3fa1-4938-9a49-624ad0c2ab55", e._sentryDebugIdIdentifier = "sentry-dbid-5019f41b-3fa1-4938-9a49-624ad0c2ab55")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "23734b3e70371e18a05f141b62211d2d95128dc9",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "23734b3e70371e18a05f141b62211d2d95128dc9"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5137], {
    95137: (e, a, r) => {
      r.r(a), r.d(a, {
        Actions: () => n,
        AvatarMenu: () => d.Jv,
        AvatarMenuLanguageLabel: () => d.VO,
        AvatarMenuSection: () => d.Kr,
        AvatarMenuSectionContent: () => d.lt,
        AvatarMenuSectionHeader: () => d.bA,
        AvatarMenuSectionHeaderDropdown: () => d.cu,
        Breakpoint: () => l.E,
        CallToAction: () => x,
        Header: () => j.Y9,
        Menu: () => p.W1,
        MenuContent: () => p.rm,
        MenuItem: () => p.Dr,
        MenuLink: () => p.w4,
        MenuList: () => p.cO,
        MenuSub: () => p.aC,
        MenuTrigger: () => p.cQ,
        MobileMenu: () => g.qe,
        MobileMenuNav: () => g.z1,
        NavigationWrapper: () => t.A,
        QuickMenu: () => v.B,
        Root: () => j.bL,
        Search: () => I,
        SearchBar: () => O,
        SearchContainer: () => L,
        SearchError: () => Q,
        SearchFilters: () => D,
        SearchTarget: () => q,
        SearchTargetDropdown: () => H,
        SiteTitle: () => z,
        default: () => G
      });
      var s = r(63473),
        t = r(22147),
        c = r(70954);
      let o;
      o = {
        actions: "rockstargames-modules-core-headerc4f15625f88eb02acfbc8ca67b037e73"
      };
      const n = e => {
        let {
          children: a
        } = e;
        return (0, c.jsx)("div", {
          className: o.actions,
          children: a
        })
      };
      var d = r(21315),
        l = r(46690),
        i = r(71127),
        h = r(21222),
        u = r(24036),
        f = r.n(u),
        g = r(73012);
      let b = "rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca",
        m = "rockstargames-modules-core-headerf88340f4aed2ac9af614a8c30dac6a86",
        k = "rockstargames-modules-core-headercbbfe1886a9116f22ee660d6e782abb5";
      const x = (0, i.forwardRef)((function(e, a) {
        let {
          children: r,
          asChild: s,
          className: t,
          variant: o,
          ...n
        } = e;
        const {
          inMobileMenu: d
        } = (0, i.useContext)(g.xN), l = f()(b, {
          [m]: "highlight" === o,
          [k]: !!d
        }, t), u = s ? h.Slot : "a";
        return (0, c.jsx)(u, {
          ref: a,
          className: l,
          ...n,
          children: (0, c.jsx)(h.Slottable, {
            children: r
          })
        })
      }));
      var p = r(61225),
        v = r(42549),
        j = r(38324),
        C = r(61898),
        M = r(81788),
        y = r(42638),
        T = r(79158),
        S = r(63582),
        w = r(54094),
        N = r(49928),
        _ = r(74482),
        A = r(94222);
      let E = {
        pillBtn: "rockstargames-modules-core-headerab3b2e0ecc987b715403e7c4b132f95d",
        selected: "rockstargames-modules-core-headerd58298b0610cb77e0a7d26a8735a93fd",
        searchContainer: "rockstargames-modules-core-headerab5088afc99154e0b25d9940005de113",
        searchToggleButton: "rockstargames-modules-core-headerfd31178b39e75b430b16a32f5ed36e2e",
        searchBarContainer: "rockstargames-modules-core-headerd4f3148e5037527a409f7b661459772d",
        searchQuery: "rockstargames-modules-core-headera634f4a0c4a48cbcc350732d51cb090b",
        searchQueryMobile: "rockstargames-modules-core-headere1e68d34808ed306bca03b05f5b2b02d",
        searchTargets: "rockstargames-modules-core-headere823c5118fac77772d262996cc811242",
        searchTargetsMobile: "rockstargames-modules-core-headereac76768521427c950890d0981c8604c",
        searchIcon: "rockstargames-modules-core-headerecdd68bbe17f44b9e70ff88f2b2a9b79",
        closeIcon: "rockstargames-modules-core-headere4d62dd5ace547da9e7b6fb79bbe72ad",
        searchField: "rockstargames-modules-core-headerd94a8a649b5f5cd1fa547c9308ee4457",
        searchFieldMobile: "rockstargames-modules-core-headera195beaac090ea8f2494f17d66774cb9",
        filterContainer: "rockstargames-modules-core-headerea293624c20a9003528f8f987ca1a72a",
        filterContainerMobile: "rockstargames-modules-core-headerb2545197a446a380d2e8d73ec8cac0b3",
        hasScrollLeft: "rockstargames-modules-core-headerfe78fb2c62f5bb25362c8c0cc57d0531",
        hasScrollRight: "rockstargames-modules-core-headere566b42b19ba5c234f6aa6ce1019f147",
        filters: "rockstargames-modules-core-headerb642c9d9226db09086ecfa05185cc13a",
        pillButton: "rockstargames-modules-core-headerdfec712d8c92dbc76894b8566afe3f9a",
        triggerChevron: "rockstargames-modules-core-headerded9b5c5e36e41a53dcdccf1a0fe2766",
        open: "rockstargames-modules-core-headerace76bca2cab08dbc01f04d6bb22972c",
        searchTargetDropdownContent: "rockstargames-modules-core-headerf28d98973e2133109615a7d820b4257a",
        subTargetButton: "rockstargames-modules-core-headercbf7a2945565eaca09b784a902ac191b",
        searchTargetDropdown: "rockstargames-modules-core-headerb471c4190fc8e65979506ca527760dda",
        scaleIn: "rockstargames-modules-core-headerb66ae794e4fe420fc94052d205a7ff94",
        searchError: "rockstargames-modules-core-headereb547eb575435a51cbf0873f194d4107"
      };
      const B = {
          open: {
            height: "auto",
            overflow: "hidden"
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: N.b.springClose
          }
        },
        I = e => {
          let {
            children: a,
            isSearchPage: r
          } = e;
          const s = (0, M.useIntl)(),
            {
              isNavHidden: t
            } = (0, i.useContext)(j.PY),
            [o, n] = (0, i.useState)(r || !1);
          (0, i.useEffect)((() => {
            n(!1)
          }), [t]);
          const d = !t && (r || o);
          return (0, c.jsx)(l.E, {
            showOn: "desktop",
            children: (0, c.jsx)("div", {
              className: E.searchContainer,
              children: (0, c.jsxs)(y.Root, {
                open: d,
                onOpenChange: n,
                children: [(0, c.jsx)(y.Trigger, {
                  asChild: !0,
                  children: (0, c.jsx)("button", {
                    className: E.searchToggleButton,
                    "data-testid": "searchToggle",
                    children: (0, c.jsx)("img", {
                      src: w.qc,
                      className: E.searchToggleButtonIcon,
                      alt: s.formatMessage(d ? _.A.search_close_button : _.A.search_open_button)
                    })
                  })
                }), (0, c.jsx)(S.AnimatePresence, {
                  children: d && (0, c.jsx)(y.Content, {
                    forceMount: !0,
                    sideOffset: 26,
                    children: (0, c.jsx)(S.motion.div, {
                      initial: "close",
                      animate: "open",
                      exit: "close",
                      variants: B,
                      transition: N.b.springOpen,
                      "data-testid": "searchBar",
                      children: a
                    })
                  })
                })]
              })
            })
          })
        },
        R = (0, i.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        L = (0, i.forwardRef)((function(e, a) {
          let {
            children: r
          } = e;
          return (0, c.jsx)("div", {
            ref: a,
            className: E.searchBarContainer,
            children: r
          })
        })),
        O = (0, i.forwardRef)((function(e, a) {
          let {
            children: r,
            queryMin: s = 0,
            queryMax: t = 100,
            onSearch: o,
            query: n,
            onQueryChange: d,
            target: l,
            onTargetChange: h,
            isSearchPage: u = !1
          } = e;
          const b = (0, M.useIntl)(),
            {
              inMobileMenu: m,
              closeMobileMenu: k
            } = (0, i.useContext)(g.xN),
            [x, p] = (0, T.useControllableState)({
              prop: n,
              onChange: d,
              defaultProp: ""
            }),
            [v, j] = (0, T.useControllableState)({
              prop: l,
              onChange: h,
              defaultProp: ""
            }),
            S = (e, a) => {
              o(e, a, k)
            },
            N = {
              inSearchMenu: !0,
              searchTarget: v,
              setSearchTarget: e => {
                j(e), x && x.length >= s && S(x, e)
              },
              onChange: d
            };
          return (0, c.jsxs)(R.Provider, {
            value: N,
            children: [(0, c.jsxs)("div", {
              className: f()(E.searchQuery, {
                [E.searchQueryMobile]: m
              }),
              "data-testid": "searchBar",
              children: [(0, c.jsx)("div", {
                className: E.searchIcon,
                children: (0, c.jsx)(C.IconButton, {
                  className: E.searchIconButton,
                  onClick: () => {
                    S(x, v)
                  },
                  appearance: "ghost",
                  icon: "Search",
                  size: "LG",
                  label: b.formatMessage(_.A.search_action)
                })
              }), (0, c.jsx)("div", {
                className: E.searchField,
                children: (0, c.jsx)("input", {
                  className: E.searchFieldInput,
                  type: "textfield",
                  value: x,
                  onChange: e => (e => {
                    p(e)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && x && v && S(x, v)
                  },
                  placeholder: b.formatMessage(_.A.search_placeholder),
                  ref: a,
                  enterKeyHint: "search",
                  maxLength: t,
                  min: s,
                  max: t
                })
              })]
            }), (0, c.jsxs)("div", {
              className: f()(E.searchTargets, {
                [E.searchTargetsMobile]: m
              }),
              children: [r, !m && !u && (0, c.jsx)("div", {
                className: E.closeIcon,
                children: (0, c.jsx)(y.Close, {
                  className: E.closeIconButton,
                  children: (0, c.jsx)("img", {
                    className: E.closeIconImg,
                    src: w.sk,
                    alt: b.formatMessage(_.A.search_close_button)
                  })
                })
              })]
            })]
          })
        })),
        D = e => {
          let {
            children: a
          } = e;
          const {
            inMobileMenu: r
          } = (0, i.useContext)(g.xN), s = (0, i.useRef)(null), [t, o] = (0, i.useState)(0);
          return (0, i.useEffect)((() => {
            const e = () => {
              s && s.current && o(s.current.scrollLeft / (s.current.scrollWidth - s.current.offsetWidth))
            };
            return s && s.current && s.current.addEventListener("scroll", e), () => {
              s && s.current && s.current.removeEventListener("scroll", e)
            }
          }), [s.current]), (0, c.jsx)("div", {
            className: f()(r ? E.filterContainerMobile : E.filterContainer, {
              [E.hasScrollLeft]: t > .1,
              [E.hasScrollRight]: t < .9
            }),
            children: (0, c.jsx)("div", {
              ref: s,
              className: E.filters,
              children: a
            })
          })
        },
        q = (0, i.forwardRef)((function(e, a) {
          let {
            children: r,
            value: s,
            title: t,
            active: o,
            ...n
          } = e;
          const {
            setSearchTarget: d,
            searchTarget: l
          } = (0, i.useContext)(R), {
            inSearchTargetDropdown: h,
            setRootSearchTarget: u,
            rootSearchTarget: g
          } = (0, i.useContext)(P), b = o || Boolean(l) && (l === s || l === g.key);
          return (0, c.jsx)("button", {
            ref: a,
            type: "button",
            className: f()({
              [E.subTargetButton]: h,
              [E.pillButton]: !h,
              [E.selected]: b
            }),
            onClick: () => {
              return e = s, d?.(e), void(h && "string" == typeof r && u({
                key: s,
                title: t
              }));
              var e
            },
            value: s,
            ...n,
            children: r
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
        H = e => {
          let {
            title: a,
            children: r
          } = e;
          const [s, t] = (0, i.useState)(!1), [o, n] = (0, i.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: d
          } = (0, i.useContext)(R);
          return (0, i.useEffect)((() => {
            t(!1)
          }), [o]), (0, i.useEffect)((() => {
            d !== o.key && n({
              key: "",
              title: ""
            })
          }), [d]), (0, c.jsxs)(y.Root, {
            open: s,
            onOpenChange: t,
            children: [(0, c.jsx)(y.Trigger, {
              asChild: !0,
              children: (0, c.jsxs)(q, {
                value: a,
                title: a,
                active: o.key,
                children: [o.title || a, (0, c.jsx)("img", {
                  src: A,
                  className: f()(E.triggerChevron, E.pillButtonChevron, s ? E.open : E.closed),
                  alt: ""
                })]
              })
            }), (0, c.jsx)(P.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: o,
                setRootSearchTarget: n
              },
              children: (0, c.jsx)(y.Content, {
                align: "start",
                className: E.searchTargetDropdownContent,
                children: r
              })
            })]
          })
        },
        Q = (0, i.forwardRef)((function(e, a) {
          let {
            errorMessage: r
          } = e;
          return r && (0, c.jsx)("div", {
            ref: a,
            className: E.searchError,
            "aria-live": "polite",
            children: r
          })
        }));
      let F;
      F = {
        rockstarLogo: "rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8",
        glitch: "rockstargames-modules-core-headerb0f6d946f0bad4946fbb51263581486d",
        glitch2: "rockstargames-modules-core-headercdcb55dce84a52e009b660df5f30da27"
      };
      const W = () => (0, c.jsx)("div", {
        className: F.rockstarLogo
      });
      let Y;
      Y = {
        siteTitle: "rockstargames-modules-core-headerb849f786b7df4a944d31e8d270e88402",
        rockstar: "rockstargames-modules-core-headerd4e4d5dba7484c7a542e229dfbce0fa5",
        divider: "rockstargames-modules-core-headerd9361f5f553f030e6a2739115afe41a7",
        brand: "rockstargames-modules-core-headeref458606d6bf19c4a61b18feb8aaf80a",
        quickAccessButton: "rockstargames-modules-core-headercca5aace5aea24ffadc1b682e19098c1",
        quickAccessContainer: "rockstargames-modules-core-headerfe87bc51f19ebbbaeda0ea6abe883764"
      };
      const K = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        z = e => {
          let {
            quickAccessHidden: a,
            children: r,
            href: s
          } = e;
          const t = (0, M.useIntl)(),
            [o, n] = (0, i.useState)(!1),
            {
              brand: d,
              isNavHidden: h
            } = (0, i.useContext)(j.PY),
            u = s || "/";
          return (0, i.useEffect)((() => {
            n(!1)
          }), [h, a]), (0, c.jsxs)("div", {
            className: Y.siteTitle,
            children: [(0, c.jsxs)("div", {
              className: Y.rockstar,
              children: [!d && (0, c.jsx)(l.E, {
                showOn: "mobile",
                children: (0, c.jsx)("a", {
                  href: u,
                  "aria-label": t.formatMessage(_.A.nav_rockstargames_home),
                  children: (0, c.jsx)(W, {})
                })
              }), !r && (0, c.jsx)(l.E, {
                showOn: "desktop",
                children: (0, c.jsx)("a", {
                  href: u,
                  "aria-label": t.formatMessage(_.A.nav_rockstargames_home),
                  children: (0, c.jsx)(W, {})
                })
              }), r && (0, c.jsxs)(y.Root, {
                open: o,
                onOpenChange: n,
                children: [(0, c.jsx)(l.E, {
                  showOn: "desktop",
                  children: (0, c.jsx)(y.Trigger, {
                    asChild: !0,
                    children: (0, c.jsx)("button", {
                      type: "button",
                      className: Y.quickAccessButton,
                      "aria-label": t.formatMessage(_.A.nav_rockstargames_logo),
                      children: (0, c.jsx)(W, {})
                    })
                  })
                }), (0, c.jsx)(S.AnimatePresence, {
                  children: o && (0, c.jsx)(l.E, {
                    showOn: "desktop",
                    children: (0, c.jsx)(y.Content, {
                      forceMount: !0,
                      align: "start",
                      sideOffset: 24,
                      children: (0, c.jsx)(S.motion.div, {
                        className: Y.quickAccessContainer,
                        variants: K,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: r
                      })
                    })
                  })
                })]
              })]
            }), d && (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(l.E, {
                showOn: "desktop",
                children: (0, c.jsx)("div", {
                  className: Y.divider
                })
              }), (0, c.jsx)("div", {
                className: Y.brand,
                children: d
              })]
            })]
          })
        },
        G = s.A
    }
  }
]);