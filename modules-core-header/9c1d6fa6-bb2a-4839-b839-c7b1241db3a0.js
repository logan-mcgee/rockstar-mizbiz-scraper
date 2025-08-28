try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9c1d6fa6-bb2a-4839-b839-c7b1241db3a0", e._sentryDebugIdIdentifier = "sentry-dbid-9c1d6fa6-bb2a-4839-b839-c7b1241db3a0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
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
        CallToAction: () => k,
        Header: () => v.Y9,
        Menu: () => p.W1,
        MenuContent: () => p.rm,
        MenuIcon: () => p.ZB,
        MenuItem: () => p.Dr,
        MenuLink: () => p.w4,
        MenuList: () => p.cO,
        MenuSub: () => p.aC,
        MenuTrigger: () => p.cQ,
        MobileMenu: () => b.qe,
        MobileMenuNav: () => b.z1,
        NavigationWrapper: () => c.A,
        QuickMenu: () => x.B,
        Root: () => v.bL,
        Search: () => B,
        SearchBar: () => L,
        SearchContainer: () => R,
        SearchError: () => F,
        SearchFilters: () => O,
        SearchTarget: () => D,
        SearchTargetDropdown: () => q,
        SiteTitle: () => K,
        default: () => z
      });
      var s = r(63473),
        c = r(44886),
        t = r(70954);
      let o;
      o = {
        actions: "rockstargames-modules-core-headerc4f15625f88eb02acfbc8ca67b037e73"
      };
      const n = e => {
        let {
          children: a
        } = e;
        return (0, t.jsx)("div", {
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
        b = r(73012),
        g = r(91755);
      let m;
      m = {
        callToAction: "rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca",
        highlight: "rockstargames-modules-core-headerf88340f4aed2ac9af614a8c30dac6a86",
        callToActionMobile: "rockstargames-modules-core-headercbbfe1886a9116f22ee660d6e782abb5"
      };
      const k = (0, i.forwardRef)((function(e, a) {
        let {
          children: r,
          asChild: s,
          className: c,
          variant: o,
          dataTestId: n,
          ...d
        } = e;
        const {
          inMobileMenu: l
        } = (0, i.useContext)(b.xN), u = (0, g.mergeProps)({
          "data-testid": n
        }, d), k = f()(m.callToAction, {
          [m.highlight]: "highlight" === o,
          [m.callToActionMobile]: !!l
        }, c), p = s ? h.Slot : "a";
        return (0, t.jsx)(p, {
          ref: a,
          className: k,
          ...u,
          children: (0, t.jsx)(h.Slottable, {
            children: r
          })
        })
      }));
      var p = r(61225),
        x = r(42549),
        v = r(10201),
        M = r(58951),
        C = r(81788),
        j = r(42638),
        T = r(79158),
        y = r(63582),
        S = r(54094),
        w = r(49928),
        N = r(74482),
        A = r(94222);
      let _ = {
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
      const E = {
          open: {
            height: "auto",
            overflow: "hidden"
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: w.b.springClose
          }
        },
        B = e => {
          let {
            children: a,
            isSearchPage: r
          } = e;
          const s = (0, C.useIntl)(),
            {
              isNavHidden: c,
              setForceBackground: o
            } = (0, i.useContext)(v.PY),
            [n, d] = (0, i.useState)(r || !1);
          (0, i.useEffect)((() => {
            d(!1)
          }), [c]), (0, i.useEffect)((() => {
            o(n)
          }), [n]);
          const h = !c && (r || n);
          return (0, t.jsx)(l.E, {
            showOn: "desktop",
            children: (0, t.jsx)("div", {
              className: _.searchContainer,
              children: (0, t.jsxs)(j.Root, {
                open: h,
                onOpenChange: d,
                children: [(0, t.jsx)(j.Trigger, {
                  asChild: !0,
                  children: (0, t.jsx)("button", {
                    className: _.searchToggleButton,
                    "data-testid": "searchToggle",
                    children: (0, t.jsx)("img", {
                      src: S.qc,
                      className: _.searchToggleButtonIcon,
                      alt: s.formatMessage(h ? N.A.search_close_button : N.A.search_open_button)
                    })
                  })
                }), (0, t.jsx)(y.AnimatePresence, {
                  children: h && (0, t.jsx)(j.Content, {
                    forceMount: !0,
                    sideOffset: 26,
                    children: (0, t.jsx)(y.motion.div, {
                      initial: "close",
                      animate: "open",
                      exit: "close",
                      variants: E,
                      transition: w.b.springOpen,
                      "data-testid": "searchBar",
                      children: a
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
        R = (0, i.forwardRef)((function(e, a) {
          let {
            children: r
          } = e;
          return (0, t.jsx)("div", {
            ref: a,
            className: _.searchBarContainer,
            children: r
          })
        })),
        L = (0, i.forwardRef)((function(e, a) {
          let {
            children: r,
            queryMin: s = 0,
            queryMax: c = 100,
            onSearch: o,
            query: n,
            onQueryChange: d,
            target: l,
            onTargetChange: h,
            isSearchPage: u = !1
          } = e;
          const g = (0, C.useIntl)(),
            {
              inMobileMenu: m,
              closeMobileMenu: k
            } = (0, i.useContext)(b.xN),
            [p, x] = (0, T.useControllableState)({
              prop: n,
              onChange: d,
              defaultProp: ""
            }),
            [v, y] = (0, T.useControllableState)({
              prop: l,
              onChange: h,
              defaultProp: ""
            }),
            w = (e, a) => {
              o(e, a, k)
            },
            A = {
              inSearchMenu: !0,
              searchTarget: v,
              setSearchTarget: e => {
                y(e), p && p.length >= s && w(p, e)
              },
              onChange: d
            };
          return (0, t.jsxs)(I.Provider, {
            value: A,
            children: [(0, t.jsxs)("div", {
              className: f()(_.searchQuery, {
                [_.searchQueryMobile]: m
              }),
              "data-testid": "searchBar",
              children: [(0, t.jsx)("div", {
                className: _.searchIcon,
                children: (0, t.jsx)(M.IconButton, {
                  className: _.searchIconButton,
                  onClick: () => {
                    w(p, v)
                  },
                  appearance: "ghost",
                  icon: "Search",
                  size: "LG",
                  label: g.formatMessage(N.A.search_action)
                })
              }), (0, t.jsx)("div", {
                className: _.searchField,
                children: (0, t.jsx)("input", {
                  className: _.searchFieldInput,
                  type: "textfield",
                  value: p,
                  onChange: e => (e => {
                    x(e)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && p && v && w(p, v)
                  },
                  placeholder: g.formatMessage(N.A.search_placeholder),
                  ref: a,
                  enterKeyHint: "search",
                  maxLength: c,
                  min: s,
                  max: c
                })
              })]
            }), (0, t.jsxs)("div", {
              className: f()(_.searchTargets, {
                [_.searchTargetsMobile]: m
              }),
              children: [r, !m && !u && (0, t.jsx)("div", {
                className: _.closeIcon,
                children: (0, t.jsx)(j.Close, {
                  className: _.closeIconButton,
                  children: (0, t.jsx)("img", {
                    className: _.closeIconImg,
                    src: S.sk,
                    alt: g.formatMessage(N.A.search_close_button)
                  })
                })
              })]
            })]
          })
        })),
        O = e => {
          let {
            children: a
          } = e;
          const {
            inMobileMenu: r
          } = (0, i.useContext)(b.xN), s = (0, i.useRef)(null), [c, o] = (0, i.useState)(0);
          return (0, i.useEffect)((() => {
            const e = () => {
              s && s.current && o(s.current.scrollLeft / (s.current.scrollWidth - s.current.offsetWidth))
            };
            return s && s.current && s.current.addEventListener("scroll", e), () => {
              s && s.current && s.current.removeEventListener("scroll", e)
            }
          }), [s.current]), (0, t.jsx)("div", {
            className: f()(r ? _.filterContainerMobile : _.filterContainer, {
              [_.hasScrollLeft]: c > .1,
              [_.hasScrollRight]: c < .9
            }),
            children: (0, t.jsx)("div", {
              ref: s,
              className: _.filters,
              children: a
            })
          })
        },
        D = (0, i.forwardRef)((function(e, a) {
          let {
            children: r,
            value: s,
            title: c,
            active: o,
            hasChevron: n,
            ...d
          } = e;
          const {
            setSearchTarget: l,
            searchTarget: h
          } = (0, i.useContext)(I), {
            inSearchTargetDropdown: u,
            setRootSearchTarget: b,
            rootSearchTarget: g
          } = (0, i.useContext)(P), m = o || Boolean(h) && (h === s || h === g.key);
          return (0, t.jsx)("button", {
            ref: a,
            type: "button",
            className: f()({
              [_.subTargetButton]: u,
              [_.pillButton]: !u,
              [_.selected]: m
            }),
            onClick: () => {
              return e = s, l?.(e), void(u && "string" == typeof r && b({
                key: s,
                title: c
              }));
              var e
            },
            value: s,
            ...d,
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
        q = e => {
          let {
            title: a,
            children: r
          } = e;
          const [s, c] = (0, i.useState)(!1), [o, n] = (0, i.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: d
          } = (0, i.useContext)(I);
          return (0, i.useEffect)((() => {
            c(!1)
          }), [o]), (0, i.useEffect)((() => {
            d !== o.key && n({
              key: "",
              title: ""
            })
          }), [d]), (0, t.jsxs)(j.Root, {
            open: s,
            onOpenChange: c,
            children: [(0, t.jsx)(j.Trigger, {
              asChild: !0,
              children: (0, t.jsxs)(D, {
                value: a,
                title: a,
                active: o.key,
                hasChevron: !0,
                children: [o.title || a, (0, t.jsx)("img", {
                  src: A,
                  className: f()(_.triggerChevron, _.pillButtonChevron, s ? _.open : _.closed),
                  alt: ""
                })]
              })
            }), (0, t.jsx)(P.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: o,
                setRootSearchTarget: n
              },
              children: (0, t.jsx)(j.Content, {
                align: "start",
                className: _.searchTargetDropdownContent,
                children: r
              })
            })]
          })
        },
        F = (0, i.forwardRef)((function(e, a) {
          let {
            errorMessage: r
          } = e;
          return r && (0, t.jsx)("div", {
            ref: a,
            className: _.searchError,
            "aria-live": "polite",
            children: r
          })
        }));
      let H;
      H = {
        rockstarLogo: "rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8",
        glitch: "rockstargames-modules-core-headerb0f6d946f0bad4946fbb51263581486d",
        glitch2: "rockstargames-modules-core-headercdcb55dce84a52e009b660df5f30da27"
      };
      const Q = () => (0, t.jsx)("div", {
        className: H.rockstarLogo
      });
      let W;
      W = {
        siteTitle: "rockstargames-modules-core-headerb849f786b7df4a944d31e8d270e88402",
        rockstar: "rockstargames-modules-core-headerd4e4d5dba7484c7a542e229dfbce0fa5",
        divider: "rockstargames-modules-core-headerd9361f5f553f030e6a2739115afe41a7",
        brand: "rockstargames-modules-core-headeref458606d6bf19c4a61b18feb8aaf80a",
        quickAccessButton: "rockstargames-modules-core-headercca5aace5aea24ffadc1b682e19098c1",
        quickAccessContainer: "rockstargames-modules-core-headerfe87bc51f19ebbbaeda0ea6abe883764"
      };
      const Y = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        K = e => {
          let {
            quickAccessHidden: a,
            children: r,
            href: s
          } = e;
          const c = (0, C.useIntl)(),
            [o, n] = (0, i.useState)(!1),
            {
              brand: d,
              isNavHidden: h
            } = (0, i.useContext)(v.PY),
            u = s || "/";
          return (0, i.useEffect)((() => {
            n(!1)
          }), [h, a]), (0, t.jsxs)("div", {
            className: W.siteTitle,
            children: [(0, t.jsxs)("div", {
              className: W.rockstar,
              children: [!d && (0, t.jsx)(l.E, {
                showOn: "mobile",
                children: (0, t.jsx)("a", {
                  href: u,
                  "aria-label": c.formatMessage(N.A.nav_rockstargames_home),
                  children: (0, t.jsx)(Q, {})
                })
              }), !r && (0, t.jsx)(l.E, {
                showOn: "desktop",
                children: (0, t.jsx)("a", {
                  href: u,
                  "aria-label": c.formatMessage(N.A.nav_rockstargames_home),
                  children: (0, t.jsx)(Q, {})
                })
              }), r && (0, t.jsxs)(j.Root, {
                open: o,
                onOpenChange: n,
                children: [(0, t.jsx)(l.E, {
                  showOn: "desktop",
                  children: (0, t.jsx)(j.Trigger, {
                    asChild: !0,
                    children: (0, t.jsx)("button", {
                      type: "button",
                      className: W.quickAccessButton,
                      "aria-label": c.formatMessage(N.A.nav_rockstargames_logo),
                      children: (0, t.jsx)(Q, {})
                    })
                  })
                }), (0, t.jsx)(y.AnimatePresence, {
                  children: o && (0, t.jsx)(l.E, {
                    showOn: "desktop",
                    children: (0, t.jsx)(j.Content, {
                      forceMount: !0,
                      align: "start",
                      sideOffset: 24,
                      children: (0, t.jsx)(y.motion.div, {
                        className: W.quickAccessContainer,
                        variants: Y,
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
            }), d && (0, t.jsxs)(t.Fragment, {
              children: [(0, t.jsx)(l.E, {
                showOn: "desktop",
                children: (0, t.jsx)("div", {
                  className: W.divider
                })
              }), (0, t.jsx)("div", {
                className: W.brand,
                children: d
              })]
            })]
          })
        },
        z = s.A
    }
  }
]);