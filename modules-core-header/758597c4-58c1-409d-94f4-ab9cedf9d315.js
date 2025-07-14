try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "758597c4-58c1-409d-94f4-ab9cedf9d315", e._sentryDebugIdIdentifier = "sentry-dbid-758597c4-58c1-409d-94f4-ab9cedf9d315")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3613], {
    33613: (e, a, r) => {
      r.r(a), r.d(a, {
        Actions: () => t,
        AvatarMenu: () => d.Jv,
        AvatarMenuSection: () => d.Kr,
        AvatarMenuSectionContent: () => d.lt,
        AvatarMenuSectionHeader: () => d.bA,
        AvatarMenuSectionHeaderDropdown: () => d.cu,
        Breakpoint: () => n.E,
        CallToAction: () => m,
        Header: () => j.Y9,
        Menu: () => x.W1,
        MenuContent: () => x.rm,
        MenuItem: () => x.Dr,
        MenuLink: () => x.w4,
        MenuList: () => x.cO,
        MenuSub: () => x.aC,
        MenuTrigger: () => x.cQ,
        MobileMenu: () => b.qe,
        MobileMenuNav: () => b.z1,
        NavigationWrapper: () => c.A,
        QuickMenu: () => p.B,
        Root: () => j.bL,
        Search: () => P,
        SearchBar: () => H,
        SearchContainer: () => q,
        SearchError: () => Q,
        SearchFilters: () => B,
        SearchTarget: () => L,
        SearchTargetDropdown: () => K,
        SiteTitle: () => z,
        default: () => J
      });
      var s = r(17828),
        c = r(37587);
      var o = r(25854);
      const t = e => {
        let {
          children: a
        } = e;
        return (0, o.jsx)("div", {
          className: "rockstargames-modules-core-headerc4f15625f88eb02acfbc8ca67b037e73",
          children: a
        })
      };
      var d = r(75736),
        n = r(16586),
        l = r(71127),
        i = r(21222);
      const h = "rockstargames-modules-core-headerf88340f4aed2ac9af614a8c30dac6a86",
        f = "rockstargames-modules-core-headercbbfe1886a9116f22ee660d6e782abb5";
      var u = r(24036),
        g = r.n(u),
        b = r(74956);
      const m = (0, l.forwardRef)((function(e, a) {
        let {
          children: r,
          asChild: s,
          className: c,
          variant: t,
          ...d
        } = e;
        const {
          inMobileMenu: n
        } = (0, l.useContext)(b.xN), u = g()("rockstargames-modules-core-headerd9b00ef4e9bc668dcc3dd569ef1e2eca", {
          [h]: "highlight" === t,
          [f]: !!n
        }, c), m = s ? i.Slot : "a";
        return (0, o.jsx)(m, {
          ref: a,
          className: u,
          ...d,
          children: (0, o.jsx)(i.Slottable, {
            children: r
          })
        })
      }));
      var x = r(54312),
        p = r(78211),
        j = r(96099),
        k = r(81788),
        v = r(42638),
        M = r(79158),
        S = r(63582),
        C = r(60520);
      const y = "rockstargames-modules-core-headerd58298b0610cb77e0a7d26a8735a93fd",
        w = "rockstargames-modules-core-headere1e68d34808ed306bca03b05f5b2b02d",
        T = "rockstargames-modules-core-headereac76768521427c950890d0981c8604c",
        N = "rockstargames-modules-core-headera195beaac090ea8f2494f17d66774cb9",
        _ = "rockstargames-modules-core-headerdfec712d8c92dbc76894b8566afe3f9a",
        A = "rockstargames-modules-core-headercbf7a2945565eaca09b784a902ac191b";
      var E = r(98081),
        R = r(64989),
        O = r(94222);
      const D = {
          open: {
            height: "auto",
            overflow: "hidden"
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: E.b.springClose
          }
        },
        P = e => {
          let {
            children: a,
            isSearchPage: r
          } = e;
          const s = (0, k.useIntl)(),
            {
              isNavHidden: c
            } = (0, l.useContext)(j.PY),
            [t, d] = (0, l.useState)(r || !1);
          (0, l.useEffect)((() => {
            d(!1)
          }), [c]);
          const i = !c && (r || t);
          return (0, o.jsx)(n.E, {
            showOn: "desktop",
            children: (0, o.jsx)("div", {
              className: "rockstargames-modules-core-headerab5088afc99154e0b25d9940005de113",
              children: (0, o.jsxs)(v.Root, {
                open: i,
                onOpenChange: d,
                children: [(0, o.jsx)(v.Trigger, {
                  asChild: !0,
                  children: (0, o.jsx)("button", {
                    className: "rockstargames-modules-core-headerfd31178b39e75b430b16a32f5ed36e2e",
                    "data-testid": "searchToggle",
                    children: (0, o.jsx)("img", {
                      src: C.qc,
                      alt: s.formatMessage(i ? R.A.search_close_button : R.A.search_open_button)
                    })
                  })
                }), (0, o.jsx)(S.AnimatePresence, {
                  children: i && (0, o.jsx)(v.Content, {
                    forceMount: !0,
                    sideOffset: 26,
                    children: (0, o.jsx)(S.motion.div, {
                      initial: "close",
                      animate: "open",
                      exit: "close",
                      variants: D,
                      transition: E.b.springOpen,
                      "data-testid": "searchBar",
                      children: a
                    })
                  })
                })]
              })
            })
          })
        },
        I = (0, l.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        q = (0, l.forwardRef)((function(e, a) {
          let {
            children: r
          } = e;
          return (0, o.jsx)("div", {
            ref: a,
            className: "rockstargames-modules-core-headerd4f3148e5037527a409f7b661459772d",
            children: r
          })
        })),
        H = (0, l.forwardRef)((function(e, a) {
          let {
            children: r,
            queryMin: s = 0,
            queryMax: c = 100,
            onSearch: t,
            query: d,
            onQueryChange: n,
            target: i,
            onTargetChange: h,
            isSearchPage: f = !1
          } = e;
          const u = (0, k.useIntl)(),
            {
              inMobileMenu: m
            } = (0, l.useContext)(b.xN),
            [x, p] = (0, M.useControllableState)({
              prop: d,
              onChange: n,
              defaultProp: ""
            }),
            [j, S] = (0, M.useControllableState)({
              prop: i,
              onChange: h,
              defaultProp: ""
            }),
            y = (e, a) => {
              t(e, a)
            },
            _ = {
              inSearchMenu: !0,
              searchTarget: j,
              setSearchTarget: e => {
                S(e), x && x.length >= s && y(x, e)
              },
              onChange: n
            };
          return (0, o.jsxs)(I.Provider, {
            value: _,
            children: [(0, o.jsxs)("div", {
              className: g()("rockstargames-modules-core-headera634f4a0c4a48cbcc350732d51cb090b", {
                [w]: m
              }),
              children: [(0, o.jsx)("div", {
                className: "rockstargames-modules-core-headerecdd68bbe17f44b9e70ff88f2b2a9b79",
                children: (0, o.jsx)("button", {
                  type: "button",
                  onClick: y,
                  children: (0, o.jsx)("img", {
                    src: C.qc,
                    alt: u.formatMessage(R.A.search_action)
                  })
                })
              }), (0, o.jsx)("div", {
                className: g()("rockstargames-modules-core-headerd94a8a649b5f5cd1fa547c9308ee4457", {
                  [N]: m
                }),
                children: (0, o.jsx)("input", {
                  type: "textfield",
                  value: x,
                  onChange: e => (e => {
                    p(e)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && x && j && y(x, j)
                  },
                  placeholder: u.formatMessage(R.A.search_placeholder),
                  ref: a,
                  enterKeyHint: "search",
                  maxLength: c,
                  min: s,
                  max: c
                })
              })]
            }), (0, o.jsxs)("div", {
              className: g()("rockstargames-modules-core-headere823c5118fac77772d262996cc811242", {
                [T]: m
              }),
              children: [r, !m && !f && (0, o.jsx)("div", {
                className: "rockstargames-modules-core-headere4d62dd5ace547da9e7b6fb79bbe72ad",
                children: (0, o.jsx)(v.Close, {
                  children: (0, o.jsx)("img", {
                    src: C.sk,
                    alt: u.formatMessage(R.A.search_close_button)
                  })
                })
              })]
            })]
          })
        })),
        B = e => {
          let {
            children: a
          } = e;
          return (0, o.jsx)("div", {
            className: "rockstargames-modules-core-headerb642c9d9226db09086ecfa05185cc13a",
            children: a
          })
        },
        L = (0, l.forwardRef)((function(e, a) {
          let {
            children: r,
            value: s,
            ...c
          } = e;
          const {
            setSearchTarget: t,
            searchTarget: d
          } = (0, l.useContext)(I), {
            inSearchTargetDropdown: n,
            setRootSearchTarget: i,
            rootSearchTarget: h
          } = (0, l.useContext)(Y), f = Boolean(d) && (d === s || d === h);
          return (0, o.jsx)("button", {
            ref: a,
            type: "button",
            className: g()({
              [A]: n,
              [_]: !n,
              [y]: !!f
            }),
            onClick: () => {
              return e = s, t?.(e), void(n && "string" == typeof r && i(r));
              var e
            },
            value: s,
            ...c,
            children: r
          })
        })),
        Y = (0, l.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: "",
          setRootSearchTarget: () => {}
        }),
        K = e => {
          let {
            title: a,
            children: r
          } = e;
          const [s, c] = (0, l.useState)(!1), [t, d] = (0, l.useState)(""), {
            searchTarget: n
          } = (0, l.useContext)(I);
          return (0, l.useEffect)((() => {
            c(!1)
          }), [t]), (0, l.useEffect)((() => {
            n !== t && d("")
          }), [n]), (0, o.jsxs)(v.Root, {
            open: s,
            onOpenChange: c,
            children: [(0, o.jsx)(v.Trigger, {
              asChild: !0,
              children: (0, o.jsxs)(L, {
                value: a,
                children: [t || a, (0, o.jsx)("img", {
                  src: O,
                  className: "rockstargames-modules-core-headerded9b5c5e36e41a53dcdccf1a0fe2766",
                  alt: ""
                })]
              })
            }), (0, o.jsx)(Y.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: t,
                setRootSearchTarget: d
              },
              children: (0, o.jsx)(v.Content, {
                align: "start",
                className: "rockstargames-modules-core-headerf28d98973e2133109615a7d820b4257a",
                children: r
              })
            })]
          })
        },
        Q = (0, l.forwardRef)((function(e, a) {
          let {
            errorMessage: r
          } = e;
          return r && (0, o.jsx)("div", {
            ref: a,
            className: "rockstargames-modules-core-headereb547eb575435a51cbf0873f194d4107",
            "aria-live": "polite",
            children: r
          })
        })),
        F = () => (0, o.jsx)("div", {
          className: "rockstargames-modules-core-headeraa43ee879b21fbda8dda46987f91dbe8"
        }),
        W = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        z = e => {
          let {
            children: a,
            href: r
          } = e;
          const s = (0, k.useIntl)(),
            [c, t] = (0, l.useState)(!1),
            {
              brand: d,
              isNavHidden: i
            } = (0, l.useContext)(j.PY),
            h = r || "/";
          return (0, l.useEffect)((() => {
            t(!1)
          }), [i]), (0, o.jsxs)("div", {
            className: "rockstargames-modules-core-headerb849f786b7df4a944d31e8d270e88402",
            children: [(0, o.jsxs)("div", {
              className: "rockstargames-modules-core-headerd4e4d5dba7484c7a542e229dfbce0fa5",
              children: [!d && (0, o.jsx)(n.E, {
                showOn: "mobile",
                children: (0, o.jsx)("a", {
                  href: h,
                  "aria-label": s.formatMessage(R.A.nav_rockstargames_home),
                  children: (0, o.jsx)(F, {})
                })
              }), !a && (0, o.jsx)(n.E, {
                showOn: "desktop",
                children: (0, o.jsx)("a", {
                  href: h,
                  "aria-label": s.formatMessage(R.A.nav_rockstargames_home),
                  children: (0, o.jsx)(F, {})
                })
              }), a && (0, o.jsxs)(v.Root, {
                open: c,
                onOpenChange: t,
                children: [(0, o.jsx)(n.E, {
                  showOn: "desktop",
                  children: (0, o.jsx)(v.Trigger, {
                    asChild: !0,
                    children: (0, o.jsx)("button", {
                      type: "button",
                      className: "rockstargames-modules-core-headercca5aace5aea24ffadc1b682e19098c1",
                      "aria-label": s.formatMessage(R.A.nav_rockstargames_logo),
                      children: (0, o.jsx)(F, {})
                    })
                  })
                }), (0, o.jsx)(S.AnimatePresence, {
                  children: c && (0, o.jsx)(v.Content, {
                    forceMount: !0,
                    align: "start",
                    sideOffset: 24,
                    children: (0, o.jsx)(S.motion.div, {
                      className: "rockstargames-modules-core-headerfe87bc51f19ebbbaeda0ea6abe883764",
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
        J = s.A
    }
  }
]);