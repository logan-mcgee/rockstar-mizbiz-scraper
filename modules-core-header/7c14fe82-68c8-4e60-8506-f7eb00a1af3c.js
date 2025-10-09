try {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new a.Error).stack;
  e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "7c14fe82-68c8-4e60-8506-f7eb00a1af3c", a._sentryDebugIdIdentifier = "sentry-dbid-7c14fe82-68c8-4e60-8506-f7eb00a1af3c")
} catch (a) {} {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[(new a.Error).stack] = Object.assign({}, a._sentryModuleMetadata[(new a.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5899], {
    3564: (a, e, t) => {
      t.d(e, {
        ZM: () => i,
        br: () => o,
        sk: () => s,
        qc: () => n
      });
      const n = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        s = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg";
      var o = t(94222);
      const i = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg"
    },
    10046: a => {
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    14005: (a, e, t) => {
      t.d(e, {
        PY: () => u,
        Y9: () => v,
        bL: () => f
      });
      var n = t(42295),
        s = t(71127),
        o = t(50078),
        i = (t(79952), t(81788)),
        r = t(54914);
      const d = () => {
        const a = (0, s.useRef)(null);
        return (0, n.jsx)("button", {
          ref: a,
          className: "rockstargames-modules-core-headerc95fa2303ee2096feb04a8cd9d2a5a4b",
          onClick: () => {
            const e = document.querySelector(".siteHeaderContainer");
            if (window?.__spatialNavigation__?.enableExperimentalAPIs(!0), e && window?.__spatialNavigation__) {
              const t = window?.__spatialNavigation__?.findCandidates(e, "down", {
                  mode: "all"
                }),
                n = t.filter((t => !e.contains(t) && a.current !== t));
              n.length > 0 && n[0].focus()
            }
          },
          children: (0, n.jsx)(i.FormattedMessage, {
            ...r.A.accessibility_skip_button
          })
        })
      };
      var l = t(4572),
        c = t.n(l),
        g = t(52542),
        _ = t(63582);
      let m;
      m = {
        badge: "rockstargames-modules-core-headerd9f1030abbf43b4dca938748cd2971f6",
        fixed: "rockstargames-modules-core-headerb0b5cfbe2c5745a3dae3bc5d2a659d0c",
        fluid: "rockstargames-modules-core-headera5621119fecf77af162314e4f58e3bf4",
        globalNavigationContainer: "rockstargames-modules-core-headercdf77b768c87c4f69cdc9f249e664436",
        globalNavigationRoot: "rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e",
        globalNavigationSearchSpacer: "rockstargames-modules-core-headerf5becd5edc3ccc807f80e476aaf0a923",
        globalNavigationSpacer: "rockstargames-modules-core-headerde436e3db259eb0f31d67c3597d8b8fd",
        header: "rockstargames-modules-core-headerb6b45ba1e342fd31738d08621f64dcf4",
        large: "rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c",
        pillBtn: "rockstargames-modules-core-headerb3978c01af4cdbe62e1bd704f1e5642a",
        quickAccessWrapper: "rockstargames-modules-core-headera0ac1e76ac3363eae9fc0b8dc016c4f6",
        selected: "rockstargames-modules-core-headerd89d3d1eec6c5bd71ccb21cee0ab387a",
        title: "rockstargames-modules-core-headere3074d7d0504de5ecbc3f71e8ff47931"
      };
      const v = ({
          children: a
        }) => (0, n.jsx)("header", {
          className: c()(m.header, m.fixed),
          children: a
        }),
        u = (0, s.createContext)({
          isNavHidden: !1
        }),
        p = {
          visible: {
            transform: "translateY(0%)",
            visibility: "visible"
          },
          hidden: {
            transform: "translateY(-100%)",
            transitionEnd: {
              visibility: "hidden"
            }
          }
        },
        f = (0, i.withIntl)((({
          children: a,
          brand: e
        }) => {
          const [t, r] = (0, s.useState)(!1), [l, g] = (0, s.useState)(!0), [v, f] = (0, s.useState)(!1), h = (0, s.useRef)(null), b = (0, s.useRef)(null), [M, w] = (0, s.useState)(null), [{
            iso: x
          }] = (0, i.getLocale)();
          return (0, s.useEffect)((() => {
            let a = window.scrollY;
            const e = () => {
                const e = window.scrollY > 140,
                  t = window.scrollY > a;
                r(e && t), a = window.scrollY
              },
              t = () => {
                g(0 === window.scrollY)
              };
            return window.addEventListener("scroll", e), window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", e), window.removeEventListener("scroll", t)
            }
          }), [t]), (0, s.useEffect)((() => {
            const a = "data-show-more-content";
            t ? document.body.setAttribute(a, "") : document.body.removeAttribute(a)
          }), [t]), (0, n.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            children: (0, n.jsx)("div", {
              ref: w,
              children: M && (0, n.jsx)(o.NP, {
                colorScheme: "dark",
                defaultColorScheme: "dark",
                defaultContrastMode: "normal",
                defaultPlatformScale: "desktop",
                container: M,
                children: (0, n.jsx)(u.Provider, {
                  value: {
                    brand: e,
                    isNavHidden: t,
                    containerRef: h,
                    setForceBackground: f
                  },
                  children: (0, n.jsxs)("div", {
                    className: c()(m.globalNavigationRoot, m.globalNavVars),
                    ref: h,
                    lang: x,
                    children: [(0, n.jsx)(d, {}), (0, n.jsx)("div", {
                      className: m.globalNavigationSpacer
                    }), (0, n.jsx)(_.motion.div, {
                      ref: b,
                      className: m.globalNavigationContainer,
                      variants: p,
                      initial: "visible",
                      animate: t ? "hidden" : "visible",
                      "data-ishidden": t,
                      "data-testid": "globalnav__container",
                      children: a
                    })]
                  })
                })
              })
            })
          })
        }), g)
    },
    15364: (a, e, t) => {
      t.d(e, {
        jd: () => C,
        W1: () => T,
        rm: () => N,
        ZB: () => R,
        Dr: () => L,
        w4: () => D,
        cO: () => G,
        aC: () => B,
        cQ: () => A
      });
      var n = t(42295),
        s = t(71127),
        o = t(81788),
        i = t(9046),
        r = t(74406);
      var d = t(64705),
        l = t(3564),
        c = t(4572),
        g = t.n(c),
        _ = t(57365),
        m = t(66439),
        v = t(63582);
      const u = (...a) => {
        const e = a.filter(Boolean);
        return e.length <= 1 ? e[0] || null : function(a) {
          for (const t of e) "function" == typeof t ? t(a) : t && (t.current = a)
        }
      };
      var p = t(21222),
        f = t(46121),
        h = t(16246),
        b = t(54914),
        M = t(14005),
        w = t(35608);
      let x;
      x = {
        avatarMenuLink: "rockstargames-modules-core-headerc640bf864619b6a2296140ddb12e8475",
        avatarNestedDropdown: "rockstargames-modules-core-headera4788f15b7ea9665e8e186a03c86ca32",
        dropdownMenu: "rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715",
        dropdownMenuMobile: "rockstargames-modules-core-headerf905a8b31e0bab44202ab5722726c472",
        externalLinkIcon: "rockstargames-modules-core-headerb350a68799dbf9dc424ca04489c8a0ad",
        hiddenItem: "rockstargames-modules-core-headerd5e29664a79741798b66ebe415c59463",
        hiddenItems: "rockstargames-modules-core-headerabf1a661e4902fa5712272e92f2de033",
        menu: "rockstargames-modules-core-headerd922c5fe52102c7e5c8bc3c42d010585",
        menuItem: "rockstargames-modules-core-headerf303c57e835ec31bf4213fb03aba17ef",
        menuItems: "rockstargames-modules-core-headerec44e526244f48930351136a502341d5",
        menuLink: "rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912",
        menuList: "rockstargames-modules-core-headere463be3861d293e36d66bb8ab0c19645",
        menuTrigger: "rockstargames-modules-core-headerfaca5fabb7852e77e62aa1da55dfad31",
        menuTriggerChevron: "rockstargames-modules-core-headerec5d2c793461b20aed9bb78b399482ad",
        mobileMenuLink: "rockstargames-modules-core-headerfe55c83723647f4df2a5ba88baa866e2",
        nestedDropdown: "rockstargames-modules-core-headerddf1983ce836b67a33e2f08a1a5316a3",
        nestedLink: "rockstargames-modules-core-headerbba8a763e416f3af074bb59987ec7834",
        nestedMenuItem: "rockstargames-modules-core-headerda3bef6906347a4766f3e910c294774a",
        pillBtn: "rockstargames-modules-core-headere0ed1b3547264fc03757f0e9e9d6f93b",
        quickMenuLink: "rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60",
        selected: "rockstargames-modules-core-headerf9516763b5bc7d2d11b742f2362cca74",
        sharedMenuLinkStyles: "rockstargames-modules-core-headerb76fe7fae607404368bb160833f02f4b",
        subMenu: "rockstargames-modules-core-headerd962f98ae74a4cbed394cf29a5d0a472",
        subMenuLink: "rockstargames-modules-core-headeree8b6e236dcc760405f887886740a954"
      };
      const k = a => {
          a.preventDefault()
        },
        y = (0, s.createContext)({
          inMenu: !1,
          openedNav: "",
          setOpenedNav: a => {}
        }),
        C = (0, s.createContext)({
          isHidden: !1
        }),
        T = ({
          children: a
        }) => {
          const e = (0, o.useIntl)(),
            [t, r] = (0, s.useState)(""),
            [l, c] = (0, s.useState)(a),
            [g, _] = (0, s.useState)([]),
            m = (0, s.useRef)(null),
            v = (0, s.useRef)(null),
            {
              isNavHidden: u
            } = (0, s.useContext)(M.PY),
            p = (0, s.useCallback)((() => {
              const e = v.current;
              if (!e) return;
              const {
                children: t
              } = e;
              let n = 0;
              const o = Array.from(t).map(((a, e) => {
                  const t = a.getBoundingClientRect().top;
                  return 0 === e && (n = t), t
                })),
                i = o.filter((a => a !== n)).length,
                r = o.findIndex((a => a > n));
              let d = r;
              if (r > 0 && (d = r - 2), i) {
                const e = [],
                  t = [];
                s.Children.forEach(a, ((a, n) => {
                  n < d ? e.push(a) : t.push(a)
                })), e && c(e), t && _(t)
              } else c(a), _([])
            }), [a, v?.current]);
          let f, h;
          return (0, s.useEffect)((() => {
            const a = new ResizeObserver(p);
            return v?.current && a.observe(v.current), () => {
              v?.current && a.unobserve(v.current)
            }
          }), [a, v?.current]), (0, s.useEffect)((() => {
            r("")
          }), [u]), (0, s.useEffect)((() => {
            const a = () => r("");
            return window.addEventListener("scroll", a), () => {
              window.removeEventListener("scroll", a)
            }
          }), []), f = x.menuItems, h = x.hiddenItems, (0, n.jsx)(y.Provider, {
            value: {
              inMenu: !0,
              openedNav: t,
              setOpenedNav: r
            },
            children: (0, n.jsx)(d.E, {
              showOn: "desktop",
              children: (0, n.jsxs)(i.Root, {
                className: x.menu,
                value: t,
                onValueChange: r,
                children: [(0, n.jsxs)(G, {
                  ref: m,
                  className: f,
                  children: [l, g?.length > 0 && (0, n.jsxs)(L, {
                    children: [(0, n.jsx)(A, {
                      "data-testid": "navMore",
                      children: e.formatMessage(b.A.nav_more_dropdown)
                    }), (0, n.jsx)(N, {
                      children: (0, n.jsx)(B, {
                        children: (0, n.jsx)(G, {
                          children: g
                        })
                      })
                    })]
                  })]
                }), (0, n.jsx)(G, {
                  ref: v,
                  className: h,
                  "aria-hidden": "true",
                  children: (0, n.jsx)(C.Provider, {
                    value: {
                      isHidden: !0
                    },
                    children: a
                  })
                })]
              })
            })
          })
        },
        G = (0, s.forwardRef)((function({
          children: a,
          className: e,
          ...t
        }, s) {
          return (0, n.jsx)(i.List, {
            ref: s,
            className: g()(x.menuList, e),
            ...t,
            children: a
          })
        })),
        I = (0, s.createContext)({
          value: ""
        }),
        L = (0, s.forwardRef)((function({
          testId: a,
          children: e,
          ...t
        }, o) {
          const {
            depth: d
          } = (0, s.useContext)(P), {
            inMobileMenu: l
          } = (0, s.useContext)(m.xN), c = (0, s.useRef)(null), _ = `rsm-${(0,r.useId)()}`;
          return (0, n.jsx)(I.Provider, {
            value: {
              value: _,
              ref: c
            },
            children: (0, n.jsx)(i.Item, {
              value: _,
              ref: u(o, c),
              className: g()({
                [x.menuItem]: !0,
                [x.nestedMenuItem]: 1 === d && !l
              }),
              "data-testid": a,
              ...t,
              children: e
            })
          })
        })),
        A = (0, s.forwardRef)((function(a, e) {
          const {
            children: t,
            ...o
          } = a, {
            inMenu: r
          } = (0, s.useContext)(y), {
            inAvatarMenu: d
          } = (0, s.useContext)(f.QY), {
            inQuickMenu: c
          } = (0, s.useContext)(h.s), {
            inMobileMenu: _
          } = (0, s.useContext)(m.xN), {
            inSubMenu: v,
            depth: u
          } = (0, s.useContext)(P);
          return (0, n.jsxs)(i.Trigger, {
            ref: e,
            onPointerMove: k,
            onPointerLeave: k,
            className: g()(x.menuTrigger, {
              [x.menuLink]: r,
              [x.quickMenuLink]: c,
              [x.mobileMenuLink]: _,
              [x.subMenuLink]: v,
              [x.avatarMenuLink]: d,
              [x.nestedLink]: u > 1
            }),
            ...o,
            children: [t, (0, n.jsx)("img", {
              src: l.br,
              className: x.menuTriggerChevron,
              alt: ""
            })]
          })
        })),
        S = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        j = {
          open: {
            height: "auto",
            width: "100%",
            opacity: 1,
            marginBottom: "revert-layer",
            display: "block",
            transition: {
              delay: .15,
              ...w.b.springClose
            }
          },
          closed: {
            height: 0,
            width: "100%",
            opacity: 0,
            marginBottom: "auto",
            transitionEnd: {
              display: "none"
            },
            transition: w.b.springClose
          }
        },
        N = (0, s.forwardRef)((function({
          children: a,
          animationOverride: e,
          ...t
        }, o) {
          const {
            navContentRef: r
          } = (0, s.useContext)(M.PY), {
            inSubMenu: d,
            openedNav: l
          } = (0, s.useContext)(P), {
            openedNav: c
          } = (0, s.useContext)(y), {
            openedNav: _
          } = (0, s.useContext)(m.iU), {
            value: u,
            ref: p
          } = (0, s.useContext)(I), {
            inMobileMenu: h
          } = (0, s.useContext)(m.xN), {
            isHidden: b
          } = (0, s.useContext)(C), {
            inAvatarMenu: w
          } = (0, s.useContext)(f.QY), T = [l, c, _].includes(u);
          return b ? null : (0, n.jsx)(v.AnimatePresence, {
            children: T && (0, n.jsx)(i.Content, {
              forceMount: !0,
              ref: o,
              className: g()({
                [x.dropdownMenu]: !h,
                [x.dropdownMenuMobile]: h,
                [x.nestedDropdown]: d && !h,
                [x.avatarNestedDropdown]: w
              }),
              onPointerEnter: k,
              onPointerLeave: k,
              onPointerDown: k,
              onPointerDownOutside: d ? k : null,
              style: {
                left: p?.current?.offsetLeft,
                top: (p?.current?.offsetHeight ?? 0) + 3
              },
              asChild: !0,
              ...t,
              children: (0, n.jsx)(v.motion.div, {
                variants: e || d || h ? j : S,
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
        })),
        P = (0, s.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        B = (0, s.forwardRef)((function({
          children: a,
          ...e
        }, t) {
          const {
            depth: o
          } = (0, s.useContext)(P), {
            openedNav: r
          } = (0, s.useContext)(m.iU), {
            isNavHidden: d
          } = (0, s.useContext)(M.PY), [l, c] = (0, s.useState)("");
          (0, s.useEffect)((() => {
            c("")
          }), [r, d]);
          const g = o ? o + 1 : 1;
          return (0, n.jsx)(P.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: l,
              depth: g
            },
            children: (0, n.jsx)(i.Root, {
              ref: t,
              defaultValue: "",
              value: l,
              onValueChange: a => {
                c(a === l ? "" : a)
              },
              orientation: "vertical",
              className: x.subMenu,
              "data-depth": g,
              ...e,
              asChild: !0,
              children: (0, n.jsx)("div", {
                children: a
              })
            })
          })
        })),
        R = (0, s.forwardRef)((function({
          className: a,
          ...e
        }, t) {
          const s = g()(x.menuIcon, a);
          return (0, n.jsx)("img", {
            ref: t,
            className: s,
            ...e
          })
        })),
        D = (0, s.forwardRef)((function(a, e) {
          const {
            children: t,
            asChild: r,
            className: d,
            onClick: l,
            external: c,
            ...v
          } = a, u = (0, o.useIntl)(), {
            inMenu: M
          } = (0, s.useContext)(y), {
            inAvatarMenu: w,
            closeAvatarMenu: k
          } = (0, s.useContext)(f.QY), {
            inQuickMenu: C
          } = (0, s.useContext)(h.s), {
            inMobileMenu: T,
            closeMobileMenu: G
          } = (0, s.useContext)(m.xN), {
            inSubMenu: I,
            depth: L
          } = (0, s.useContext)(P), A = g()({
            [x.menuLink]: M,
            [x.quickMenuLink]: C,
            [x.mobileMenuLink]: T,
            [x.subMenuLink]: I,
            [x.avatarMenuLink]: w,
            [x.nestedLink]: L > 1
          }, d), S = r ? p.Slot : "a";
          return (0, n.jsx)(i.Link, {
            asChild: !0,
            onSelect: a => {
              k?.(), G?.(), l?.(a)
            },
            ...v,
            children: (0, n.jsxs)(S, {
              ref: e,
              className: A,
              children: [(0, n.jsx)(p.Slottable, {
                children: t
              }), c && (0, n.jsx)(_.ExternalLink, {
                label: u.formatMessage(b.A.nav_rockstargames_external_link),
                className: x.externalLinkIcon
              })]
            })
          })
        }))
    },
    16246: (a, e, t) => {
      t.d(e, {
        B: () => p,
        s: () => u
      });
      var n = t(42295),
        s = t(71127),
        o = t(66439),
        i = t(63582),
        r = t(35608),
        d = t(4572),
        l = t.n(d),
        c = t(9046);
      let g = "rockstargames-modules-core-headeree781136421e86f1ba76f28f45009bfd",
        _ = "rockstargames-modules-core-headera0afcf77006159d689145a562371f6af",
        m = "rockstargames-modules-core-headeredd6d5149d36c2b3d89460393482b5a1",
        v = "rockstargames-modules-core-headere3008521b763b81f3b4f2c3659d22cc2";
      const u = (0, s.createContext)({
          inQuickMenu: !1
        }),
        p = ({
          children: a
        }) => {
          const {
            inMobileMenu: e,
            setHasQuickMenu: t
          } = (0, s.useContext)(o.xN), d = {
            hidden: {
              opacity: 0,
              y: "100%",
              transition: r.b.hamburgerClose
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                ...r.b.hamburgerOpen,
                staggerChildren: .15,
                delay: .8 * r.b.hamburgerOpen.duration,
                delayChildren: .15
              }
            }
          }, p = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: r.b.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: r.b.staggerFade
            }
          }, f = l()(m, e ? _ : g);
          return (0, s.useEffect)((() => (t?.(!0), () => {
            t?.(!1)
          })), []), e ? (0, n.jsx)(u.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, n.jsx)(c.Root, {
              asChild: !0,
              children: (0, n.jsx)(i.motion.div, {
                variants: d,
                className: f,
                children: s.Children.map(a, (a => (0, n.jsx)(i.motion.li, {
                  variants: p,
                  className: l()(v, _),
                  children: a
                })))
              })
            })
          }) : (0, n.jsx)(u.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, n.jsx)(c.Root, {
              asChild: !0,
              children: (0, n.jsx)("div", {
                className: f,
                children: a
              })
            })
          })
        }
    },
    35608: (a, e, t) => {
      t.d(e, {
        R: () => s,
        b: () => n
      });
      const n = {
          quickFade: {
            duration: .1
          },
          staggerFade: {
            ease: "easeOut",
            duration: .4
          },
          springOpen: {
            type: "spring",
            stiffness: 300,
            damping: 35
          },
          springClose: {
            type: "spring",
            stiffness: 400,
            damping: 40
          },
          hamburgerOpen: {
            type: "spring",
            duration: .6,
            bounce: 0
          },
          hamburgerClose: {
            type: "spring",
            duration: .4,
            bounce: 0
          }
        },
        s = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        }
    },
    46121: (a, e, t) => {
      t.d(e, {
        Jv: () => T,
        QY: () => x,
        VO: () => j,
        Kr: () => I,
        lt: () => S,
        bA: () => L,
        cu: () => A
      });
      var n = t(42295),
        s = t(71127),
        o = t(42638),
        i = t(61339),
        r = t(24780),
        d = t(63694),
        l = t(63582),
        c = t(2918),
        g = t(81788),
        _ = t(15364),
        m = t(14005),
        v = t(64705),
        u = t(54914),
        p = t(3564),
        f = t(4572),
        h = t.n(f),
        b = t(34902);
      const M = ({
        children: a,
        className: e,
        ...t
      }) => {
        const {
          containerRef: o
        } = (0, s.useContext)(m.PY);
        return (0, n.jsx)(b.Root, {
          className: h()("rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563", e),
          container: o?.current,
          ...t,
          children: a
        })
      };
      let w = {
        avatarDropdownChevron: "rockstargames-modules-core-headerda0dbf9fd75e574727b5d795d7681bfd",
        avatarMenu: "rockstargames-modules-core-headerc21d08286895e5d5d2fc1a7586c6a11d",
        avatarMenuContent: "rockstargames-modules-core-headerfbdd0b16d9b61ed0dd3f5e76b9a1f9de",
        avatarMenuContentMobile: "rockstargames-modules-core-headereef2738c4b5cf2f7e69238683d6d503f",
        avatarMenuLanguageLabel: "rockstargames-modules-core-headerad542b51868c54065401d2ccb5f6159f",
        avatarMenuMobile: "rockstargames-modules-core-headerb68abcf23dae4ff8aa054bd9ff446a9a",
        avatarMenuSection: "rockstargames-modules-core-headerf43b908943d5a326555406c89c919f3a",
        avatarMenuSectionHeader: "rockstargames-modules-core-headerc63374d1c5bca5343c48709064ac9ecc",
        avatarMenuSectionHeaderDropdown: "rockstargames-modules-core-headerc2907f284a3a3dd7c419856bdb6a99ee",
        dragHandle: "rockstargames-modules-core-headerbe1cd057f4c550474a77b822a5eb729e",
        dragHandleBtn: "rockstargames-modules-core-headeredeb54ea736b008d967474a5c9b63a33",
        pillBtn: "rockstargames-modules-core-headerff5e3320dd70a4dcaccbe336302b4714",
        scAvatarBtn: "rockstargames-modules-core-headerb82b1a7297d0e2f91a3ac183adcb21c4",
        scAvatarBtnUser: "rockstargames-modules-core-headerfa4a01e9a53561bce475cd223f7cafe1",
        selected: "rockstargames-modules-core-headercb3e82faf685657df2d72233f5467a60"
      };
      const x = (0, s.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        k = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        y = {
          open: {
            height: "auto",
            width: "100%",
            opacity: 1,
            marginBottom: "revert-layer",
            display: "block"
          },
          closed: {
            height: 0,
            width: "100%",
            opacity: 0,
            marginBottom: "auto",
            transitionEnd: {
              display: "none"
            }
          }
        },
        C = {
          open: {
            transform: "translateY(0%)",
            display: "block"
          },
          closed: {
            transform: "translateY(100%)",
            transitionEnd: {
              display: "none"
            }
          }
        },
        T = ({
          avatarIconUrl: a,
          nickname: e,
          isLoggedIn: p,
          children: f
        }) => {
          const h = (0, g.useIntl)(),
            b = t(10046),
            [y, T] = (0, s.useState)(!1),
            [G, I] = (0, s.useState)(!1),
            [L, A] = (0, s.useState)(["open"]),
            {
              isNavHidden: S
            } = (0, s.useContext)(m.PY),
            {
              data: j,
              loggedIn: N
            } = (0, c.useRockstarUser)(),
            {
              track: P
            } = (0, c.useGtmTrack)(),
            [B, R] = (0, s.useState)(!1),
            D = a => {
              const e = ["open", ...a.filter((a => "open" !== a))];
              A(e)
            },
            O = () => {
              T(!1), I(!1)
            };
          return (0, s.useEffect)((() => {
            S && O()
          }), [S]), (0, s.useEffect)((() => {
            j && N && !B && j?.accountSynced && (R(!0), P({
              event: "account_synced"
            }))
          }), [j?.accountSynced, N]), (0, n.jsxs)(x.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: L,
              closeAvatarMenu: O
            },
            children: [(0, n.jsx)(o.Root, {
              open: y,
              onOpenChange: T,
              children: (0, n.jsx)(v.E, {
                showOn: "desktop",
                children: (0, n.jsxs)("div", {
                  className: w.avatarMenu,
                  children: [(0, n.jsx)(o.Trigger, {
                    asChild: !0,
                    children: (0, n.jsx)("button", {
                      className: w.scAvatarBtn,
                      "aria-label": h.formatMessage(y ? u.A.avatar_menu_close : u.A.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": p,
                      children: (0, n.jsx)("img", {
                        className: w.scAvatarBtnUser,
                        src: a || b,
                        alt: e
                      })
                    })
                  }), (0, n.jsx)(l.AnimatePresence, {
                    children: y && (0, n.jsx)(o.Content, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      onOpenAutoFocus: a => a.preventDefault(),
                      children: (0, n.jsx)(l.motion.div, {
                        variants: k,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, n.jsx)(i.Root, {
                          type: "multiple",
                          value: L,
                          onValueChange: D,
                          children: (0, n.jsx)(_.aC, {
                            className: w.avatarMenuContent,
                            children: f
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, n.jsx)(r.Root, {
              open: G,
              onOpenChange: I,
              children: (0, n.jsx)(v.E, {
                showOn: "mobile",
                children: (0, n.jsxs)("div", {
                  className: w.avatarMenu,
                  children: [(0, n.jsx)(r.Trigger, {
                    className: w.scAvatarBtn,
                    "aria-label": h.formatMessage(G ? u.A.avatar_menu_close : u.A.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": p,
                    children: (0, n.jsx)("button", {
                      className: w.scAvatarBtn,
                      "aria-label": h.formatMessage(y ? u.A.avatar_menu_close : u.A.avatar_menu_open),
                      children: (0, n.jsx)("img", {
                        className: w.scAvatarBtnUser,
                        src: a || b
                      })
                    })
                  }), (0, n.jsx)(l.AnimatePresence, {
                    children: G && (0, n.jsx)(M, {
                      asChild: !0,
                      children: (0, n.jsxs)(r.Content, {
                        forceMount: !0,
                        children: [(0, n.jsxs)(d.VisuallyHidden, {
                          children: [(0, n.jsx)(r.Title, {
                            children: h.formatMessage(u.A.nav_avatarmenu_title)
                          }), (0, n.jsx)(r.Description, {
                            children: h.formatMessage(u.A.nav_avatarmenu_title)
                          })]
                        }), (0, n.jsxs)(l.motion.div, {
                          variants: C,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: w.avatarMenuMobile,
                          children: [(0, n.jsx)(r.Close, {
                            className: w.dragHandleBtn,
                            "aria-label": h.formatMessage(u.A.avatar_menu_close),
                            children: (0, n.jsx)("div", {
                              className: w.dragHandle
                            })
                          }), (0, n.jsx)(i.Root, {
                            type: "multiple",
                            value: L,
                            onValueChange: D,
                            children: (0, n.jsx)(_.aC, {
                              className: w.avatarMenuContentMobile,
                              children: f
                            })
                          })]
                        })]
                      })
                    })
                  })]
                })
              })
            })]
          })
        },
        G = (0, s.createContext)({
          avatarMenuItemId: ""
        }),
        I = ({
          children: a,
          value: e
        }) => {
          const t = (0, s.useId)();
          return (0, n.jsx)(G.Provider, {
            value: {
              avatarMenuItemId: e || t
            },
            children: (0, n.jsx)(i.Item, {
              value: e || t,
              className: w.avatarMenuSection,
              children: a
            })
          })
        },
        L = ({
          children: a,
          ...e
        }) => (0, n.jsx)(i.Header, {
          asChild: !0,
          children: (0, n.jsx)("li", {
            className: w.listItem,
            children: (0, n.jsx)(i.Trigger, {
              className: w.avatarMenuSectionHeader,
              ...e,
              children: a
            })
          })
        }),
        A = ({
          children: a,
          ...e
        }) => (0, n.jsx)(i.Header, {
          style: {
            margin: 0
          },
          children: (0, n.jsxs)(i.Trigger, {
            className: w.avatarMenuSectionHeaderDropdown,
            "data-testid": "header-language-selector-button",
            ...e,
            children: [a, (0, n.jsx)("img", {
              src: p.br,
              className: w.avatarDropdownChevron,
              alt: ""
            })]
          })
        }),
        S = ({
          children: a,
          ...e
        }) => {
          const {
            avatarMenuOpenItems: t
          } = (0, s.useContext)(x), {
            avatarMenuItemId: o
          } = (0, s.useContext)(G), r = t.indexOf(o) >= 0;
          return (0, n.jsx)(i.Content, {
            forceMount: !0,
            asChild: !0,
            ...e,
            children: (0, n.jsx)(l.motion.div, {
              variants: y,
              initial: "closed",
              animate: r ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: a
            })
          })
        },
        j = ({
          children: a,
          ...e
        }) => (0, n.jsx)("div", {
          className: w.avatarMenuLanguageLabel,
          ...e,
          children: a
        })
    },
    54914: (a, e, t) => {
      t.d(e, {
        A: () => n
      });
      const n = (0, t(81788).defineMessages)({
        nav_rockstargames_home: {
          id: "nav_rockstargames_home",
          description: "Global navigation, Rockstar Games Home",
          defaultMessage: "Rockstar Games Home"
        },
        nav_rockstargames_logo: {
          id: "nav_rockstargames_logo",
          description: "Global navigation, Rockstar Games Logo that opens the Quick Access Menu",
          defaultMessage: "Click to open menu"
        },
        nav_rockstargames_external_link: {
          id: "nav_rockstargames_external_link",
          description: "Label for an external link.",
          defaultMessage: "External"
        },
        nav_mobilemenu_open: {
          id: "nav_mobilemenu_open",
          description: "Global navigation, Hamburger menu opens the Mobile Menu",
          defaultMessage: "Open menu"
        },
        nav_mobilemenu_close: {
          id: "nav_mobilemenu_close",
          description: "Global navigation, Hamburger menu closes the Mobile Menu",
          defaultMessage: "Close menu"
        },
        nav_mobilemenu_title: {
          id: "nav_mobilemenu_title",
          description: "Mobile Menu, Accessible title for the mobile menu",
          defaultMessage: "Navigation menu"
        },
        nav_avatarmenu_title: {
          id: "nav_avatarmenu_title",
          description: "Avatar Menu, Accessible title for the avatar menu",
          defaultMessage: "Avatar menu"
        },
        search_action: {
          id: "search_action",
          description: "Global navigation search, Search action used on buttons and aria-labels",
          defaultMessage: "Search"
        },
        search_open_button: {
          id: "search_open_button",
          description: "Global navigation search, Button label for opening search input",
          defaultMessage: "Open Search"
        },
        search_close_button: {
          id: "search_close_button",
          description: "Global navigation search, Button label for closing search input",
          defaultMessage: "Close Search"
        },
        search_placeholder: {
          id: "search_placeholder",
          description: "Global navigation search, Placeholder text within search input",
          defaultMessage: "Search Rockstar Games..."
        },
        search_target_aria_label: {
          id: "search_target_aria_label",
          description: 'Global navigation search, Search Target (aria label). Formatted: "Search Games", "Search Community", etc',
          defaultMessage: "Search {target}"
        },
        nav_quick_access_home: {
          id: "nav_quick_access_home",
          description: "Global navigation Quick Access, Home text link",
          defaultMessage: "Home"
        },
        nav_quick_access_games: {
          id: "nav_quick_access_games",
          description: "Global navigation Quick Access, Games text link",
          defaultMessage: "Games"
        },
        nav_quick_access_newswire: {
          id: "nav_quick_access_newswire",
          description: "Global navigation Quick Access, Newswire text link",
          defaultMessage: "Newswire"
        },
        nav_more_dropdown: {
          id: "nav_more_dropdown",
          description: "Global navigation More, Overflow for small screens More text link",
          defaultMessage: "More"
        },
        quick_access_title: {
          id: "quick_access_title",
          description: "The Rockstar Games title for quick access menu.",
          defaultMessage: "Rockstar Games"
        },
        nav_opens_in_new_window: {
          id: "nav_opens_in_new_window",
          description: "Message for A11Y to describe when a link is opened in a new window",
          defaultMessage: "{text} (Link opens in new window)"
        },
        accessibility_skip_button: {
          id: "accessibility_skip_button",
          description: "Message for A11Y asking the user if they want to skip the navigation and go straight to the content.",
          defaultMessage: "Skip the Menu"
        },
        avatar_menu_open: {
          id: "avatar_menu_open",
          description: "Global navigation player menu, Button label for opening search input",
          defaultMessage: "Open Player Menu"
        },
        avatar_menu_close: {
          id: "avatar_menu_close",
          description: "Global navigation player menu, Button label for closing search input",
          defaultMessage: "Close Player Menu"
        }
      })
    },
    64705: (a, e, t) => {
      t.d(e, {
        E: () => i
      });
      var n = t(42295),
        s = t(21222);
      const o = {
          desktop: "rockstargames-modules-core-headerf1fc26697d7f376112d0fcd256b22a9a",
          mobile: "rockstargames-modules-core-headerd46e4a60f402edcf62521fefd6a9289f",
          pillBtn: "rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939",
          selected: "rockstargames-modules-core-headerade3ff1f5041701c0a98cb7198ece826"
        },
        i = ({
          showOn: a,
          ...e
        }) => (0, n.jsx)(s.Slot, {
          className: a ? o[a] : "",
          ...e
        })
    },
    66439: (a, e, t) => {
      t.d(e, {
        qe: () => M,
        xN: () => b,
        z1: () => h,
        iU: () => f
      });
      var n = t(42295),
        s = t(71127),
        o = t(63582),
        i = t(4572),
        r = t.n(i),
        d = t(9046),
        l = t(24780),
        c = t(63694),
        g = t(81788),
        _ = t(14005),
        m = t(64705),
        v = t(35608),
        u = t(54914);
      let p = {
        fullMenuOpen: "rockstargames-modules-core-headerb179669051e37adce8fd2936eb8222de",
        menuMobile: "rockstargames-modules-core-headerfd282c0ed200fdb171dae24f3902f6b1",
        menuMobileCta: "rockstargames-modules-core-headerd4f74f7e1cef072e336f954fae948a07",
        menuMobileItem: "rockstargames-modules-core-headerb9830b1f4dd5e2813b68130c424c3aa6",
        menuMobileItems: "rockstargames-modules-core-headera72000cfbe48e7dc2c0f071ecf0b533c",
        mobileMenuContainer: "rockstargames-modules-core-headerd8335dcffc8b201a6f702cc7b22ebab7",
        mobileMenuDrawer: "rockstargames-modules-core-headerd28d9855f9427597e52d7e74abbf75dc",
        mobileMenuHamburger: "rockstargames-modules-core-headerffee60778b241ac8cd6bc04685b782d3",
        mobileMenuHamburgerContainer: "rockstargames-modules-core-headerfb5e947b9aa01caf3aa9bca4ddcb3dee",
        mobileMenuOpen: "rockstargames-modules-core-headerb523d5fd993427cae2eda1f5b9225699",
        mobileMenuSearchOpen: "rockstargames-modules-core-headera2283f7a71bfe0902ebe7176a1f3f45a",
        open: "rockstargames-modules-core-headere31b18e5d92d04a3ffe036ff25c1ee5a",
        overlay: "rockstargames-modules-core-headerd07fb32788b786e529979364bf8fcb5c"
      };
      const f = (0, s.createContext)({
          openedNav: ""
        }),
        h = ({
          children: a
        }) => {
          const [e, t] = (0, s.useState)("");
          return (0, n.jsx)(f.Provider, {
            value: {
              openedNav: e
            },
            children: (0, n.jsx)(d.Root, {
              value: e,
              onValueChange: t,
              children: (0, n.jsx)(d.List, {
                className: p.menuMobileItems,
                children: a
              })
            })
          })
        },
        b = (0, s.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        M = ({
          children: a
        }) => {
          const e = (0, g.useIntl)(),
            [t, i] = (0, s.useState)(!1),
            [d, f] = (0, s.useState)(!1),
            [h, M] = (0, s.useState)(!1),
            {
              brand: x,
              setForceBackground: k
            } = (0, s.useContext)(_.PY),
            y = {
              show: {
                height: "100dvh",
                paddingBottom: t && x ? "var(--global-navigation-height)" : "",
                transition: {
                  ...v.b.hamburgerOpen,
                  delay: .2,
                  staggerChildren: .15
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: v.b.hamburgerClose
              }
            };
          return (0, n.jsx)(b.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                i(!1)
              },
              setHasQuickMenu: M
            },
            children: (0, n.jsxs)(l.Root, {
              open: t,
              onOpenChange: i,
              children: [(0, n.jsx)(m.E, {
                showOn: "mobile",
                children: (0, n.jsx)(w, {
                  onClick: () => {
                    i(!t), f(!1)
                  },
                  isMenuOpen: t
                })
              }), (0, n.jsx)(o.AnimatePresence, {
                onExitComplete: () => k(!1),
                children: t && (0, n.jsx)(m.E, {
                  showOn: "mobile",
                  children: (0, n.jsxs)(o.motion.div, {
                    className: p.dialogWrap,
                    variants: y,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, n.jsx)(l.Overlay, {
                      className: p.overlay
                    }), (0, n.jsx)(l.Content, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => i(!1),
                      children: (0, n.jsxs)(o.motion.div, {
                        className: r()(p.mobileMenuDrawer, p.mobileMenuOpen),
                        variants: y,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, n.jsxs)(c.VisuallyHidden, {
                          children: [(0, n.jsx)(l.Title, {
                            children: e.formatMessage(u.A.nav_mobilemenu_title)
                          }), (0, n.jsx)(l.Description, {
                            children: e.formatMessage(u.A.nav_mobilemenu_title)
                          })]
                        }), (0, n.jsx)("div", {
                          className: r()(d ? p.mobileMenuSearchOpen : "", p.mobileMenuContainer),
                          children: (0, n.jsx)(o.motion.div, {
                            className: r()(p.menuMobile, h ? p.withQuickMenu : ""),
                            children: s.Children.map(a, (a => (0, n.jsx)(o.motion.div, {
                              variants: v.R,
                              transition: v.b.staggerFade,
                              children: a
                            })))
                          })
                        })]
                      })
                    })]
                  })
                })
              })]
            })
          })
        },
        w = ({
          className: a,
          isMenuOpen: e,
          ...t
        }) => {
          const s = (0, g.useIntl)();
          return (0, n.jsx)("div", {
            className: r()(p.mobileMenuHamburgerContainer, a),
            children: (0, n.jsxs)(l.Trigger, {
              title: s.formatMessage(e ? u.A.nav_mobilemenu_close : u.A.nav_mobilemenu_open),
              type: "button",
              className: r()(p.mobileMenuHamburger, {
                [p.open]: e
              }),
              "data-testid": "hamburgerNav",
              ...t,
              children: [(0, n.jsx)("span", {
                className: p.bar,
                "data-opened": e
              }), (0, n.jsx)("span", {
                className: p.bar,
                "data-opened": e
              }), (0, n.jsx)("span", {
                className: p.bar,
                "data-opened": e
              })]
            })
          })
        }
    },
    73258: (a, e, t) => {
      t.d(e, {
        A: () => Na
      });
      var n = {};
      t.r(n), t.d(n, {
        beaterator: () => d,
        bully: () => _,
        careers: () => m,
        gta: () => v,
        gta2: () => u,
        gta3: () => p,
        gta4: () => f,
        gta5: () => h,
        gtaAdvance: () => b,
        gtaCtw: () => M,
        gtaIvEflc: () => w,
        gtaLcs: () => x,
        gtaLondon: () => k,
        gtaOnline: () => y,
        gtaPlus: () => C,
        gtaSanAndreas: () => T,
        gtaTrilogy: () => G,
        gtaVc: () => I,
        gtaVcs: () => L,
        laNoire: () => A,
        manhunt: () => S,
        manhunt2: () => j,
        maxPayne: () => N,
        maxPayne2: () => P,
        maxPayne3: () => B,
        midnightclub: () => R,
        midnightclub2: () => D,
        midnightclub3: () => O,
        midnightclubStreetRacing: () => V,
        oni: () => E,
        readDeadOnline: () => z,
        redDeadRedemption: () => H,
        redDeadRedemption2: () => q,
        redDeadRedemptionUndeadNightmare: () => F,
        redDeadRevolver: () => $,
        rsg: () => U,
        skateAndDestroy: () => J,
        smugglersRun: () => Q,
        smugglersRun2: () => W,
        smugglersRunWarzones: () => Z,
        stateOfEmergency: () => Y,
        tableTennis: () => K,
        theItalianJob: () => X,
        theWarriors: () => aa,
        wildMetal: () => ea
      });
      var s = {};
      t.r(s), t.d(s, {
        GamesMenu: () => Ta,
        GamesMenuItem: () => Ga,
        default: () => La
      });
      var o = t(42295),
        i = t(71127),
        r = t(79867);
      const d = () => ({
        site: "beaterator",
        appearancePaths: {
          [r.C.www]: [{
            path: "/games/beaterator/*",
            options: {}
          }]
        },
        brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f9915b608d2f8e73cc53e3f08205b71.png",
        links: []
      });
      var l = t(81788);
      const c = (0, l.defineMessages)({
          nav_rockstargames_home: {
            id: "nav_rockstargames_home",
            description: "Global navigation, Rockstar Games Home",
            defaultMessage: "Rockstar Games Home"
          },
          nav_rockstargames_logo: {
            id: "nav_rockstargames_logo",
            description: "Global navigation, Rockstar Games Logo that opens the Quick Access Menu",
            defaultMessage: "Click to open menu"
          },
          nav_gtao_overview: {
            id: "nav_gtao_overview",
            description: "Global navigation, gtao variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_gtao_gtao: {
            id: "nav_gtao_gtao",
            description: "Global navigation, gtao variant - GTA Online text link",
            defaultMessage: "GTA Online"
          },
          nav_gtao_discover: {
            id: "nav_gtao_discover",
            description: "Global navigation, gtao variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_gtao_my_character: {
            id: "nav_gtao_my_character",
            description: "Global navigation, gtao variant - My Character text link",
            defaultMessage: "My Character"
          },
          nav_gtao_twitch_drops: {
            id: "nav_gtao_twitch_drops",
            description: "Global navigation, gtao variant - Twitch Drops text link",
            defaultMessage: "Twitch Drops"
          },
          nav_gtao_career_progress: {
            id: "nav_gtao_career_progress",
            description: "Global navigation, gtao variant - Career Progress text link",
            defaultMessage: "Career Progress"
          },
          nav_gtao_guides: {
            id: "nav_gtao_guides",
            description: "Global navigation, gtao variant - Guides text link",
            defaultMessage: "Guides"
          },
          nav_gtao_license_plate_creator: {
            id: "nav_gtao_license_plate_creator",
            description: "Global navigation, gtao variant - License Plate Creator text link",
            defaultMessage: "License Plate Creator"
          },
          nav_gtao_story: {
            id: "nav_gtao_story",
            description: "Global navigation, gtao variant - Story text link",
            defaultMessage: "Story"
          },
          nav_gtao_stats: {
            id: "nav_gtao_stats",
            description: "Global navigation, gtao variant - Stats text link",
            defaultMessage: "Stats"
          },
          nav_gtao_missions: {
            id: "nav_gtao_missions",
            description: "Global navigation, gtao variant - Missions text link",
            defaultMessage: "Missions"
          },
          nav_gtao_checklist: {
            id: "nav_gtao_checklist",
            description: "Global navigation, gtao variant - Checklist text link",
            defaultMessage: "Checklist"
          },
          nav_gtao_accomplishments: {
            id: "nav_gtao_accomplishments",
            description: "Global navigation, gtao variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_gtao_gta_plus: {
            id: "nav_gtao_gta_plus",
            description: "Global navigation, gtao variant - GTA+ text link",
            defaultMessage: "GTA+"
          },
          nav_gtao_community: {
            id: "nav_gtao_community",
            description: "Global navigation, gtao variant - Community text link",
            defaultMessage: "Community"
          },
          nav_gtao_jobs: {
            id: "nav_gtao_jobs",
            description: "Global navigation, gtao variant - Jobs text link",
            defaultMessage: "Jobs"
          },
          nav_gtao_community_series: {
            id: "nav_gtao_community_series",
            description: "Global navigation, gtao variant - Community Series text link",
            defaultMessage: "Community Series"
          },
          nav_gtao_my_jobs: {
            id: "nav_gtao_my_jobs",
            description: "Global navigation, gtao variant - My jobs text link",
            defaultMessage: "My Jobs"
          },
          nav_gtao_jobs_browse_all: {
            id: "nav_gtao_jobs_browse_all",
            description: "Global navigation, gtao variant - Browse all jobs text link",
            defaultMessage: "Browse All Jobs"
          },
          nav_gtao_crews: {
            id: "nav_gtao_crews",
            description: "Global navigation, gtao variant - Crews text link",
            defaultMessage: "Crews"
          },
          nav_gtao_my_crews: {
            id: "nav_gtao_my_crews",
            description: "Global navigation, gtao variant - My crews text link",
            defaultMessage: "My Crews"
          },
          nav_gtao_browse_crews: {
            id: "nav_gtao_browse_crews",
            description: "Global navigation, gtao variant - Browse all crews text link",
            defaultMessage: "Browse All Crews"
          },
          nav_gtao_crews_create: {
            id: "nav_gtao_crews_create",
            description: "Global navigation, gtao variant - Create a crew text link",
            defaultMessage: "Create a Crew"
          },
          nav_gtao_emblem_editor: {
            id: "nav_gtao_emblem_editor",
            description: "Global navigation, gtao variant - Emblem editor text link",
            defaultMessage: "Emblem Editor"
          },
          nav_gtao_jobs_playlists: {
            id: "nav_gtao_jobs_playlists",
            description: "Global navigation, gtao variant - Playlists text link",
            defaultMessage: "Playlists"
          },
          nav_gtao_photos: {
            id: "nav_gtao_photos",
            description: "Global navigation, gtao variant - Photos text link",
            defaultMessage: "Photos"
          },
          nav_gtao_videos: {
            id: "nav_gtao_videos",
            description: "Global navigation, gtao variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_gtao_support: {
            id: "nav_gtao_support",
            description: "Global navigation, gtao variant - Support text link",
            defaultMessage: "Support"
          },
          nav_gtao_cta_buy_now: {
            id: "nav_gtao_cta_buy_now",
            description: "Global navigation, gtao variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gta_trilogy_overview: {
            id: "nav_gta_trilogy_overview",
            description: "Global navigation, gta trilogy variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_gta_trilogy_accomplishments: {
            id: "nav_gta_trilogy_accomplishments",
            description: "Global navigation, gta trilogy variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_gta_trilogy_gtasa: {
            id: "nav_gta_trilogy_gtasa",
            description: "Global navigation, gta trilogy variant - GTA: San Andreas text link",
            defaultMessage: "GTA: San Andreas"
          },
          nav_gta_trilogy_gtavc: {
            id: "nav_gta_trilogy_gtavc",
            description: "Global navigation, gta trilogy variant - GTA: Vice City text link",
            defaultMessage: "GTA: Vice City"
          },
          nav_gta_trilogy_gta3: {
            id: "nav_gta_trilogy_gta3",
            description: "Global navigation, gta trilogy variant - GTA III text link",
            defaultMessage: "GTA III"
          },
          nav_gta_trilogy_support: {
            id: "nav_gta_trilogy_support",
            description: "Global navigation, gta trilogy variant - Support text link",
            defaultMessage: "Support"
          },
          nav_gta_trilogy_cta_buy_now: {
            id: "nav_gta_trilogy_cta_buy_now",
            description: "Global navigation, gta trilogy variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_bully_game_overview: {
            id: "nav_bully_game_overview",
            description: "Global navigation, Bully variant - Game overview text link",
            defaultMessage: "Discover"
          },
          nav_bully_videos: {
            id: "nav_bully_videos",
            description: "Global navigation, Bully variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_bully_accomplishments: {
            id: "nav_bully_accomplishments",
            description: "Global navigation, Bully variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_bully_support: {
            id: "nav_bully_Overview",
            description: "Global navigation, Bully variant - Support text link",
            defaultMessage: "Support"
          },
          nav_bully_cta_buy_now: {
            id: "nav_bully_cta_buy_now",
            description: "Global navigation, Bully variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_rsg_games: {
            id: "nav_rsg_games",
            description: "Global navigation, rsg variant - Games text link",
            defaultMessage: "Games"
          },
          nav_rsg_newswire: {
            id: "nav_rsg_newswire",
            description: "Global navigation, rsg variant - Newswire text link",
            defaultMessage: "Newswire"
          },
          nav_rsg_videos: {
            id: "nav_rsg_videos",
            description: "Global navigation, rsg variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_rsg_downloads: {
            id: "nav_rsg_downloads",
            description: "Global navigation, rsg variant - Download text link",
            defaultMessage: "Downloads"
          },
          nav_rsg_store: {
            id: "nav_rsg_store",
            description: "Global navigation, rsg variant - Store text link",
            defaultMessage: "Store"
          },
          nav_rsg_support: {
            id: "nav_rsg_support",
            description: "Global navigation, rsg variant - Support text link",
            defaultMessage: "Support"
          },
          nav_rsg_community_guidelines: {
            id: "nav_rsg_community_guidelines",
            description: "Global navigation, rsg variant - Community Guidelines text link",
            defaultMessage: "Community Guidelines"
          },
          nav_rsg_cta_get_launcher: {
            id: "nav_cta_get_launcher",
            description: "Global navigation, rsg variant - Get Launcher text link",
            defaultMessage: "Get Launcher"
          },
          nav_careers_home: {
            id: "nav_careers_home",
            description: "Global navigation, Careers variant - Home text link",
            defaultMessage: "Home"
          },
          nav_careers_openings: {
            id: "nav_careers_openings",
            description: "Global navigation, Careers variant - Openings text link",
            defaultMessage: "Openings"
          },
          nav_careers_contact_us: {
            id: "nav_careers_contact_us",
            description: "Global navigation, Careers variant - Contact us text link",
            defaultMessage: "Contact us"
          },
          nav_careers_careers_on_linkedin: {
            id: "nav_careers_careers_on_linkedin",
            description: "Global navigation, Careers variant - Careers on LinkedIn text link",
            defaultMessage: "Careers on LinkedIn"
          },
          nav_gta3_cta_buy_now: {
            id: "nav_gta3_cta_buy_now",
            description: "Global navigation, GTA3 variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtaiv_overview: {
            id: "nav_gtaiv_overview",
            description: "Global navigation, GTA IV variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_gtaiv_accomplishments: {
            id: "nav_gtaiv_accomplishments",
            description: "Global navigation, GTA IV variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiv_support: {
            id: "nav_gtaiv_support",
            description: "Global navigation, GTA IV variant - Support text link",
            defaultMessage: "Support"
          },
          nav_gtaiv_cta_buy_now: {
            id: "nav_gtaiv_cta_buy_now",
            description: "Global navigation, GTA IV variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtav_overview: {
            id: "nav_gtav_overview",
            description: "Global navigation, GTA V variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_gtav_gta_online: {
            id: "nav_gtav_gta_online",
            description: "Global navigation, GTA V variant - GTA Online text link",
            defaultMessage: "GTA Online"
          },
          nav_gtav_discover: {
            id: "nav_gtav_discover",
            description: "Global navigation, GTA V variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_gtav_my_character: {
            id: "nav_gtav_my_character",
            description: "Global navigation, GTA V variant - My Character text link",
            defaultMessage: "My Character"
          },
          nav_gtav_guides: {
            id: "nav_gtav_guides",
            description: "Global navigation, GTA V variant - Guides text link",
            defaultMessage: "Guides"
          },
          nav_gtav_licence_plate_creator: {
            id: "nav_gtav_licence_plate_creator",
            description: "Global navigation, GTA V variant - License Plate Creator text link",
            defaultMessage: "License Plate Creator"
          },
          nav_gtav_story: {
            id: "nav_gtav_story",
            description: "Global navigation, GTA V variant - Story text link",
            defaultMessage: "Story"
          },
          nav_gtav_stats: {
            id: "nav_gtav_stats",
            description: "Global navigation, GTA V variant - Stats text link",
            defaultMessage: "Stats"
          },
          nav_gtav_missions: {
            id: "nav_gtav_missions",
            description: "Global navigation, GTA V variant - Missions text link",
            defaultMessage: "Missions"
          },
          nav_gtav_checklist: {
            id: "nav_gtav_checklist",
            description: "Global navigation, GTA V variant - Checklist text link",
            defaultMessage: "Checklist"
          },
          nav_gtav_accomplishments: {
            id: "nav_gtav_accomplishments",
            description: "Global navigation, GTA V variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_gtav_gta_plus: {
            id: "nav_gtav_gta_plus",
            description: "Global navigation, GTA V variant - GTA+ text link",
            defaultMessage: "GTA+"
          },
          nav_gtav_community: {
            id: "nav_gtav_community",
            description: "Global navigation, GTA V variant - Community text link",
            defaultMessage: "Community"
          },
          nav_gtav_jobs: {
            id: "nav_gtav_jobs",
            description: "Global navigation, GTA V variant - Jobs text link",
            defaultMessage: "Jobs"
          },
          nav_gtav_community_series: {
            id: "nav_gtav_community_series",
            description: "Global navigation, GTA V variant - Community Series text link",
            defaultMessage: "Community Series"
          },
          nav_gtav_jobs_browse_all: {
            id: "nav_gtav_jobs_browse_all",
            description: "Global navigation, GTA V variant - Browse all jobs text link",
            defaultMessage: "Browse All Jobs"
          },
          nav_gtav_my_jobs: {
            id: "nav_gtav_my_jobs",
            description: "Global navigation, GTA V variant - My Jobs text link",
            defaultMessage: "My Jobs"
          },
          nav_gtav_playlists: {
            id: "nav_gtav_playlists",
            description: "Global navigation, GTA V variant - Playlists text link",
            defaultMessage: "Playlists"
          },
          nav_gtav_crews: {
            id: "nav_gtav_crews",
            description: "Global navigation, GTA V variant - Crews text link",
            defaultMessage: "Crews"
          },
          nav_gtav_crews_browse_all: {
            id: "nav_gtav_crews_browse_all",
            description: "Global navigation, GTA V variant - Browse All Crews text link",
            defaultMessage: "Browse All Crews"
          },
          nav_gtav_my_crews: {
            id: "nav_gtav_my_crews",
            description: "Global navigation, GTA V variant - My Crews text link",
            defaultMessage: "My Crews"
          },
          nav_gtav_create_crew: {
            id: "nav_gtav_create_crew",
            description: "Global navigation, GTA V variant - Create a Crew text link",
            defaultMessage: "Create a Crew"
          },
          nav_gtav_emblem_editor: {
            id: "nav_gtav_emblem_editor",
            description: "Global navigation, GTA V variant - Emblem Editor text link",
            defaultMessage: "Emblem Editor"
          },
          nav_gtav_photos: {
            id: "nav_gtav_photos",
            description: "Global navigation, GTA V variant - Photos text link",
            defaultMessage: "Photos"
          },
          nav_gtav_videos: {
            id: "nav_gtav_videos",
            description: "Global navigation, GTA V variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_gtav_support: {
            id: "nav_gtav_support",
            description: "Global navigation, GTA V variant - Support text link",
            defaultMessage: "Support"
          },
          nav_gtav_cta_buy_now: {
            id: "nav_gtav_cta_buy_now",
            description: "Global navigation, GTA V variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtaiveflc_overview: {
            id: "nav_gtaiveflc_overview",
            description: "Global navigation, GTA: EFLC variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_gtaiveflc_accomplishments: {
            id: "nav_gtaiveflc_accomplishments",
            description: "Global navigation, GTA: EFLC variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiveflc_support: {
            id: "nav_gtaiveflc_support",
            description: "Global navigation, GTA: EFLC variant - Support text link",
            defaultMessage: "Support"
          },
          nav_gtaiveflc_cta_buy_now: {
            id: "nav_gtaiveflc_cta_buy_now",
            description: "Global navigation, GTA EFLC variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtasanandreas_cta_buy_now: {
            id: "nav_gtasanandreas_cta_buy_now",
            description: "Global navigation, GTA: San Andreas variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtavc_discover: {
            id: "nav_gtavc_discover",
            description: "Global navigation, GTA: Vice City variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_gtavc_cta_buy_now: {
            id: "nav_gtavc_cta_buy_now",
            description: "Global navigation, GTA: Vice City variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_gtavcs_discover: {
            id: "nav_gtavcs_discover",
            description: "Global navigation, GTA: Vice City Stories variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_lanoire_overview: {
            id: "nav_lanoire_overview",
            description: "Global navigation, LA Noire variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_lanoire_official_site: {
            id: "nav_lanoire_official_site",
            description: "Global navigation, LA Noire variant - Official Site text link",
            defaultMessage: "Official Site"
          },
          nav_lanoire_progress: {
            id: "nav_lanoire_progress",
            description: "Global navigation, LA Noire variant - Progress text link",
            defaultMessage: "Progress"
          },
          nav_lanoire_pc_console: {
            id: "nav_lanoire_pc_console",
            description: "Global navigation, LA Noire variant - PC/Console text link",
            defaultMessage: "PC/Console"
          },
          nav_lanoire_case_tracker: {
            id: "nav_lanoire_case_tracker",
            description: "Global navigation, LA Noire variant - Case Tracker text link",
            defaultMessage: "Case Tracker"
          },
          nav_lanoire_checklist: {
            id: "nav_lanoire_checklist",
            description: "Global navigation, LA Noire variant - Checklist text link",
            defaultMessage: "Checklist"
          },
          nav_lanoire_stats: {
            id: "nav_lanoire_stats",
            description: "Global navigation, LA Noire variant - Stats text link",
            defaultMessage: "Stats"
          },
          nav_lanoire_accomplishments: {
            id: "nav_lanoire_accomplishments",
            description: "Global navigation, LA Noire variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_lanoire_badge_pursuit: {
            id: "nav_lanoire_badge_pursuit",
            description: "Global navigation, LA Noire variant - Badge Pursuit text link",
            defaultMessage: "Badge Pursuit"
          },
          nav_lanoire_vr_case_files: {
            id: "nav_lanoire_vr_case_files",
            description: "Global navigation, LA Noire variant - VR Case Files text link",
            defaultMessage: "VR Case Files"
          },
          nav_lanoire_support: {
            id: "nav_lanoire_support",
            description: "Global navigation, LA Noire variant - Support text link",
            defaultMessage: "Support"
          },
          nav_lanoire_cta_buy_now: {
            id: "nav_lanoire_cta_buy_now",
            description: "Global navigation, LA Noire variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_mp3_overview: {
            id: "nav_mp3_overview",
            description: "Global navigation, MP3 variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_mp3_official_site: {
            id: "nav_mp3_official_site",
            description: "Global navigation, MP3 variant - Official Site text link",
            defaultMessage: "Official Site"
          },
          nav_mp3_news: {
            id: "nav_mp3_news",
            description: "Global navigation, MP3 variant - News text link",
            defaultMessage: "News"
          },
          nav_mp3_progress: {
            id: "nav_mp3_progress",
            description: "Global navigation, MP3 variant - Progress text link",
            defaultMessage: "Progress"
          },
          nav_mp3_accomplishments: {
            id: "nav_mp3_accomplishments",
            description: "Global navigation, MP3 variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_mp3_singleplayer: {
            id: "nav_mp3_singleplayer",
            description: "Global navigation, MP3 variant - Singleplayer text link",
            defaultMessage: "Singleplayer"
          },
          nav_mp3_multiplayer: {
            id: "nav_mp3_multiplayer",
            description: "Global navigation, MP3 variant - Multiplayer text link",
            defaultMessage: "Multiplayer"
          },
          nav_mp3_career: {
            id: "nav_mp3_career",
            description: "Global navigation, MP3 variant - Career text link",
            defaultMessage: "Career"
          },
          nav_mp3_checklist: {
            id: "nav_mp3_checklist",
            description: "Global navigation, MP3 variant - Checklist text link",
            defaultMessage: "Checklist"
          },
          nav_mp3_grinds: {
            id: "nav_mp3_grinds",
            description: "Global navigation, MP3 variant - Grinds text link",
            defaultMessage: "Grinds"
          },
          nav_mp3_weapons: {
            id: "nav_mp3_weapons",
            description: "Global navigation, MP3 variant - Weapons text link",
            defaultMessage: "Weapons"
          },
          nav_mp3_chapters: {
            id: "nav_mp3_chapters",
            description: "Global navigation, MP3 variant - Chapters text link",
            defaultMessage: "Chapters"
          },
          nav_mp3_leaderboards: {
            id: "nav_mp3_leaderboards",
            description: "Global navigation, MP3 variant - Leaderboards text link",
            defaultMessage: "Leaderboards"
          },
          nav_mp3_crews: {
            id: "nav_mp3_crews",
            description: "Global navigation, MP3 variant - Crews text link",
            defaultMessage: "Crews"
          },
          nav_mp3_score_attack: {
            id: "nav_mp3_score_attack",
            description: "Global navigation, MP3 variant - Score Attack text link",
            defaultMessage: "Score Attack"
          },
          nav_mp3_ny_minute: {
            id: "nav_mp3_ny_minute",
            description: "Global navigation, MP3 variant - New York Minute text link",
            defaultMessage: "New York Minute"
          },
          nav_mp3_checkpoint_challenge: {
            id: "nav_mp3_checkpoint_challenge",
            description: "Global navigation, MP3 variant - Checkpoint Challenge text link",
            defaultMessage: "Checkpoint Challenge"
          },
          nav_mp3_featured: {
            id: "nav_mp3_featured",
            description: "Global navigation, MP3 variant - Featured text link",
            defaultMessage: "Featured"
          },
          nav_mp3_specifications: {
            id: "nav_mp3_specifications",
            description: "Global navigation, MP3 variant - Specifications text link",
            defaultMessage: "Specifications"
          },
          nav_mp3_support: {
            id: "nav_mp3_support",
            description: "Global navigation, MP3 variant - Support text link",
            defaultMessage: "Support"
          },
          nav_mp3_cta_buy_now: {
            id: "nav_mp3_cta_buy_now",
            description: "Global navigation, MP3 variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_rdr_cta_buy_now: {
            id: "nav_rdr_cta_buy_now",
            description: "Global navigation, RDR variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_rdo_overview: {
            id: "nav_rdo_overview",
            description: "Global navigation, RDO variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_rdo_explore: {
            id: "nav_rdo_explore",
            description: "Global navigation, RDO variant - Explore text link",
            defaultMessage: "Explore"
          },
          nav_rdo_getting_started: {
            id: "nav_rdo_getting_started",
            description: "Global navigation, RDO variant - Getting Started text link",
            defaultMessage: "Getting Started"
          },
          nav_rdo_specialist_roles: {
            id: "nav_rdo_specialist_roles",
            description: "Global navigation, RDO variant - Specialist Roles text link",
            defaultMessage: "Specialist Roles"
          },
          nav_rdo_story_missions: {
            id: "nav_rdo_story_missions",
            description: "Global navigation, RDO variant - Story Missions text link",
            defaultMessage: "Story Missions"
          },
          nav_rdo_posses_free_roam: {
            id: "nav_rdo_posses_free_roam",
            description: "Global navigation, RDO variant - Posses and Free Roam text link",
            defaultMessage: "Posses and Free Roam"
          },
          nav_rdo_competitive_series: {
            id: "nav_rdo_competitive_series",
            description: "Global navigation, RDO variant - Competitive Series text link",
            defaultMessage: "Competitive Series"
          },
          nav_rdo_customization: {
            id: "nav_rdo_customization",
            description: "Global navigation, RDO variant - Customization text link",
            defaultMessage: "Customization"
          },
          nav_rdo_progression: {
            id: "nav_rdo_progression",
            description: "Global navigation, RDO variant - Progression text link",
            defaultMessage: "Progression"
          },
          nav_rdo_progress: {
            id: "nav_rdo_progress",
            description: "Global navigation, RDO variant - Progress text link",
            defaultMessage: "Progress"
          },
          nav_rdo_my_character: {
            id: "nav_rdo_my_character",
            description: "Global navigation, RDO variant - My Character text link",
            defaultMessage: "My Character"
          },
          nav_rdo_roles: {
            id: "nav_rdo_roles",
            description: "Global navigation, RDO variant - Roles text link",
            defaultMessage: "Roles"
          },
          nav_rdo_rank_unlocks: {
            id: "nav_rdo_rank_unlocks",
            description: "Global navigation, RDO variant - Rank Unlocks text link",
            defaultMessage: "Rank Unlocks"
          },
          nav_rdo_awards: {
            id: "nav_rdo_awards",
            description: "Global navigation, RDO variant - Awards text link",
            defaultMessage: "Awards"
          },
          nav_rdo_accomplishments: {
            id: "nav_rdo_accomplishments",
            description: "Global navigation, RDO variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_rdo_benefits: {
            id: "nav_rdo_benefits",
            description: "Global navigation, RDO variant - Benefits text link",
            defaultMessage: "Benefits"
          },
          nav_rdo_guides: {
            id: "nav_rdo_guides",
            description: "Global navigation, RDO variant - Guides text link",
            defaultMessage: "Guides"
          },
          nav_rdo_club_rewards: {
            id: "nav_rdo_club_rewards",
            description: "Global navigation, RDO variant - Club Rewards text link",
            defaultMessage: "Club Rewards"
          },
          nav_rdo_community: {
            id: "nav_rdo_community",
            description: "Global navigation, RDO variant - Community text link",
            defaultMessage: "Community"
          },
          nav_rdo_posses: {
            id: "nav_rdo_posses",
            description: "Global navigation, RDO variant - Posses text link",
            defaultMessage: "Posses"
          },
          nav_rdo_photos: {
            id: "nav_rdo_photos",
            description: "Global navigation, RDO variant - Photos text link",
            defaultMessage: "Photos"
          },
          nav_rdo_catalogue: {
            id: "nav_rdo_catalogue",
            description: "Global navigation, RDO variant - Catalogue text link",
            defaultMessage: "Catalogue"
          },
          nav_rdo_support: {
            id: "nav_rdo_support",
            description: "Global navigation, RDO variant - Support text link",
            defaultMessage: "Support"
          },
          nav_rdo_cta_buy_now: {
            id: "nav_rdo_cta_buy_now",
            description: "Global navigation, RDO variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_rdr2_overview: {
            id: "nav_rdr2_overview",
            description: "Global navigation, RDR2 variant - Overview text link",
            defaultMessage: "Overview"
          },
          nav_rdr2_explore: {
            id: "nav_rdr2_explore",
            description: "Global navigation, RDR2 variant - Explore text link",
            defaultMessage: "Explore"
          },
          nav_rdr2_van_der_linde_gang: {
            id: "nav_rdr2_van_der_linde_gang",
            description: "Global navigation, RDR2 variant - The Van der Linde Gang text link",
            defaultMessage: "The Van der Linde Gang"
          },
          nav_rdr2_locations: {
            id: "nav_rdr2_locations",
            description: "Global navigation, RDR2 variant - Locations text link",
            defaultMessage: "Locations"
          },
          nav_rdr2_wildlife: {
            id: "nav_rdr2_wildlife",
            description: "Global navigation, RDR2 variant - Wildlife text link",
            defaultMessage: "Wildlife"
          },
          nav_rdr2_weaponry: {
            id: "nav_rdr2_weaponry",
            description: "Global navigation, RDR2 variant - Weaponry text link",
            defaultMessage: "Weaponry"
          },
          nav_rdr2_progress: {
            id: "nav_rdr2_progress",
            description: "Global navigation, RDR2 variant - Progress text link",
            defaultMessage: "Progress"
          },
          nav_rdr2_stats: {
            id: "nav_rdr2_stats",
            description: "Global navigation, RDR2 variant - Stats text link",
            defaultMessage: "Stats"
          },
          nav_rdr2_chapters: {
            id: "nav_rdr2_chapters",
            description: "Global navigation, RDR2 variant - Chapters text link",
            defaultMessage: "Chapters"
          },
          nav_rdr2_challenges: {
            id: "nav_rdr2_challenges",
            description: "Global navigation, RDR2 variant - Challenges text link",
            defaultMessage: "Challenges"
          },
          nav_rdr2_character: {
            id: "nav_rdr2_character",
            description: "Global navigation, RDR2 variant - Character text link",
            defaultMessage: "Character"
          },
          nav_rdr2_compendium: {
            id: "nav_rdr2_compendium",
            description: "Global navigation, RDR2 variant - Compendium text link",
            defaultMessage: "Compendium"
          },
          nav_rdr2_accomplishments: {
            id: "nav_rdr2_accomplishments",
            description: "Global navigation, RDR2 variant - Accomplishments text link",
            defaultMessage: "Accomplishments"
          },
          nav_rdr2_media: {
            id: "nav_rdr2_media",
            description: "Global navigation, RDR2 variant - Media text link",
            defaultMessage: "Media"
          },
          nav_rdr2_gallery: {
            id: "nav_rdr2_gallery",
            description: "Global navigation, RDR2 variant - Gallery text link",
            defaultMessage: "Gallery"
          },
          nav_rdr2_artwork: {
            id: "nav_rdr2_artwork",
            description: "Global navigation, RDR2 variant - Artwork text link",
            defaultMessage: "Artwork"
          },
          nav_rdr2_videos: {
            id: "nav_rdr2_videos",
            description: "Global navigation, RDR2 variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_rdr2_music: {
            id: "nav_rdr2_music",
            description: "Global navigation, RDR2 variant - Music text link",
            defaultMessage: "Music"
          },
          nav_rdr2_online: {
            id: "nav_rdr2_online",
            description: "Global navigation, RDR2 variant - Online text link",
            defaultMessage: "Online"
          },
          nav_rdr2_catalogue: {
            id: "nav_rdr2_catalogue",
            description: "Global navigation, RDR2 variant - Catalogue text link",
            defaultMessage: "Catalogue"
          },
          nav_rdr2_support: {
            id: "nav_rdr2_support",
            description: "Global navigation, RDR2 variant - Support text link",
            defaultMessage: "Support"
          },
          nav_rdr2_cta_buy_now: {
            id: "nav_rdr2_cta_buy_now",
            description: "Global navigation, RDR2 variant - CTA Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_discover: {
            id: "nav_undeadnightmare_discover",
            description: "Global navigation, Undead Nightmare variant - Discover text link",
            defaultMessage: "Discover"
          },
          nav_undeadnightmare_info: {
            id: "nav_undeadnightmare_info",
            description: "Global navigation, Undead Nightmare variant - Info text link",
            defaultMessage: "Info"
          },
          nav_undeadnightmare_media: {
            id: "nav_undeadnightmare_media",
            description: "Global navigation, Undead Nightmare variant - Media text link",
            defaultMessage: "Media"
          },
          nav_undeadnightmare_videos: {
            id: "nav_undeadnightmare_videos",
            description: "Global navigation, Undead Nightmare variant - Videos text link",
            defaultMessage: "Videos"
          },
          nav_undeadnightmare_gallery: {
            id: "nav_undeadnightmare_gallery",
            description: "Global navigation, Undead Nightmare variant - Gallery text link",
            defaultMessage: "Gallery"
          },
          nav_undeadnightmare_news: {
            id: "nav_undeadnightmare_news",
            description: "Global navigation, Undead Nightmare variant - News text link",
            defaultMessage: "News"
          },
          nav_undeadnightmare_specs: {
            id: "nav_undeadnightmare_specs",
            description: "Global navigation, Undead Nightmare variant - Specifications text link",
            defaultMessage: "Specifications"
          },
          nav_undeadnightmare_suport: {
            id: "nav_undeadnightmare_suport",
            description: "Global navigation, Undead Nightmare variant - Support text link",
            defaultMessage: "Support"
          },
          nav_undeadnightmare_buy_now: {
            id: "nav_undeadnightmare_buy_now",
            description: "Global navigation, Undead Nightmare variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_ps3_digital: {
            id: "nav_undeadnightmare_ps3_digital",
            description: "Global navigation, Undead Nightmare variant - PS3 - Digital text link",
            defaultMessage: "PS3 - Digital"
          },
          nav_undeadnightmare_xbox360_digital: {
            id: "nav_undeadnightmare_xbox360_digital",
            description: "Global navigation, Undead Nightmare variant - Xbox 360  - Digital text link",
            defaultMessage: "Xbox 360  - Digital"
          },
          nav_support_home: {
            id: "nav_support_home",
            description: "Global navigation, Support variant - Home text link",
            defaultMessage: "Home"
          },
          nav_support_service_status: {
            id: "nav_support_service_status",
            description: "Global navigation, Support variant - Service Status text link",
            defaultMessage: "Service Status"
          },
          nav_support_submit_ticket: {
            id: "nav_support_submit_ticket",
            description: "Global navigation, Support variant - Submit a Ticket text link",
            defaultMessage: "Submit a Ticket"
          },
          nav_support_dashboard: {
            id: "nav_support_dashboard",
            description: "Global navigation, Support variant - My Dashboard text link",
            defaultMessage: "My Dashboard"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            description: "Global navigation, Games Menu - Title for games menu",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            description: "Global navigation, Games Menu - View All link",
            defaultMessage: "View All"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            description: "Global navigation, Games Menu Games - Grand Theft Auto V",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            description: "Global navigation, Games Menu Games - Grand Theft Auto Online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            description: "Global navigation, Games Menu Games - Grand Theft Auto: The Trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            description: "Global navigation, Games Menu Games - Red Dead Redemption 2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr_online: {
            id: "games_menu_rdr_online",
            description: "Global navigation, Games Menu Games - Red Dead Online",
            defaultMessage: "Red Dead Online"
          },
          nav_thewarriors_cta_buy_now: {
            id: "nav_thewarriors_cta_buy_now",
            description: "Global navigation, The Warriors variant - Buy Now text link",
            defaultMessage: "Buy Now"
          },
          search_action: {
            id: "search_action",
            description: "Global navigation search, Search action used on buttons and aria-labels",
            defaultMessage: "Search"
          },
          search_open_button: {
            id: "search_open_button",
            description: "Global navigation search, Button label for opening search input",
            defaultMessage: "Open Search"
          },
          search_close_button: {
            id: "search_close_button",
            description: "Global navigation search, Button label for closing search input",
            defaultMessage: "Close Search"
          },
          search_placeholder: {
            id: "search_placeholder",
            description: "Global navigation search, Placeholder text within search input",
            defaultMessage: "Search Rockstar Games..."
          },
          search_target_aria_label: {
            id: "search_target_aria_label",
            description: 'Global navigation search, Search Target (aria label). Formatted: "Search Games", "Search Community", etc',
            defaultMessage: "Search {target}"
          },
          search_target_games: {
            id: "search_target_games",
            description: "Global navigation search, Search Target - Games",
            defaultMessage: "Games"
          },
          search_target_posts: {
            id: "search_target_posts",
            description: "Global navigation search, Search Target - Posts",
            defaultMessage: "Posts"
          },
          search_target_videos: {
            id: "search_target_videos",
            description: "Global navigation search, Search Target - Videos",
            defaultMessage: "Videos"
          },
          search_target_community: {
            id: "search_target_community",
            description: "Global navigation search, Search Target - Community",
            defaultMessage: "Community"
          },
          search_target_users: {
            id: "search_target_users",
            description: "Global navigation search, Search Target - Users",
            defaultMessage: "Users"
          },
          search_target_crews: {
            id: "search_target_crews",
            description: "Global navigation search, Search Target - Crews",
            defaultMessage: "Crews"
          },
          search_target_jobs: {
            id: "search_target_jobs",
            description: "Global navigation search, Search Target - Jobs",
            defaultMessage: "Jobs"
          },
          sc_link_account: {
            id: "sc_link_account",
            description: "A button that opens the account drop-down.",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            description: "A link to the social club profile page.",
            defaultMessage: "View My Profile"
          },
          sc_link_messages: {
            id: "sc_link_messages",
            description: "A link to the social club messages page.",
            defaultMessage: "Messages"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            description: "A link to the social club game activation page.",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            description: "A link to the social club notifications page.",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            description: "A link to the social club crews page.",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            description: "A button that openes the friends drop-down.",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            description: "A link to the social club friends page.",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            description: "A link to the social club import friends page.",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            description: "A link to the social club find friends page.",
            defaultMessage: "Find Friends"
          },
          sc_link_settings: {
            id: "sc_link_settings",
            description: "A link to the social club find settings page.",
            defaultMessage: "Settings"
          },
          sc_link_help: {
            id: "sc_link_help",
            description: "A link to the social club find help page.",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            description: "A link to the social club find support page.",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            description: "A link to the social club find legal page.",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            description: "A link to the social club find privacy policy page.",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            description: "A link to the social club find cookies policy page.",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            description: "A link to the social club find cookies settings page.",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            description: "A link to the social club find do not sell my information page.",
            defaultMessage: "Do Not Sell or Share My Personal Information"
          },
          nofications_new: {
            id: "nofications_new",
            description: "Aria label for new notifications icon.",
            defaultMessage: "New notifications"
          }
        }),
        g = r.C.www,
        _ = a => ({
          site: "bully",
          appearancePaths: {
            [r.C.www]: [{
              path: "/bully/*",
              options: {}
            }],
            [r.C.socialClub]: [{
              path: "/games/bully*",
              options: {}
            }, {
              path: "/member/*/games/bully/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
          links: [{
            text: a.formatMessage(c.nav_bully_game_overview),
            gaText: c.nav_bully_game_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: a.formatMessage(c.nav_bully_accomplishments),
            gaText: c.nav_bully_accomplishments.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: a.formatMessage(c.nav_bully_support),
            gaText: c.nav_bully_support.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: a.formatMessage(c.nav_bully_cta_buy_now),
            gaText: c.nav_bully_cta_buy_now.defaultMessage,
            location: {
              domain: g,
              path: "/bully/?section=order"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        }),
        m = a => ({
          site: "careers",
          appearancePaths: {
            [r.C.www]: [{
              path: "/careers/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a6910245d0cd177a1c2228d2f661b86.svg",
          hideSearch: !0,
          links: [{
            text: a.formatMessage(c.nav_careers_home),
            gaText: c.nav_careers_home.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/careers"
            },
            dataTestId: "careersLink"
          }, {
            text: a.formatMessage(c.nav_careers_openings),
            gaText: c.nav_careers_openings.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/careers/openings"
            },
            dataTestId: "careersOpeningsLink"
          }, {
            text: a.formatMessage(c.nav_careers_contact_us),
            gaText: c.nav_careers_contact_us.defaultMessage,
            type: "nav-no-link",
            dataTestId: "careersContactUsLink"
          }, {
            text: a.formatMessage(c.nav_careers_careers_on_linkedin),
            gaText: c.nav_careers_careers_on_linkedin.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: "https://linkedin.com",
              path: "/company/rockstar-games/"
            },
            dataTestId: "careersLinkedInLink"
          }]
        }),
        v = () => ({
          site: "gta",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/gta/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65f1aec1603710b9836acf07cf9ac79d.svg",
          links: []
        }),
        u = () => ({
          site: "gta2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/gta2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d183c567f4254a34a55e0bc49cf69fe6.svg",
          links: []
        }),
        p = a => ({
          site: "grandtheftauto3",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/grandtheftauto3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70d4774a8eb28cbdc69793504746f961.svg",
          links: [],
          cta: {
            text: a.formatMessage(c.nav_gta3_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: c.nav_gta3_cta_buy_now.defaultMessage,
            dataTestId: "gta3BuyNowCta",
            variant: "highlight"
          }
        }),
        f = a => ({
          site: "gta-iv",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/IV/*",
              options: {}
            }],
            [r.C.socialClub]: [{
              path: "/games/gtaiv*",
              options: {}
            }, {
              path: "/member/*/games/gtaiv*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01dcdecd53de88ec599ab76ce2863fcd.svg",
          links: [{
            text: a.formatMessage(c.nav_gtaiv_overview),
            gaText: c.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: a.formatMessage(c.nav_gtaiv_accomplishments),
            gaText: c.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: r.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(c.nav_gtaiv_support),
            gaText: c.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: a.formatMessage(c.nav_gtaiv_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            gaText: c.nav_gtaiv_cta_buy_now.defaultMessage,
            dataTestId: "gtaivPurchaseLink",
            variant: "highlight"
          }
        }),
        h = a => ({
          site: "gta5",
          appearancePaths: {
            [r.C.www]: [{
              path: "/gta-v/*",
              options: {}
            }],
            [r.C.socialClub]: [{
              path: "/games/gtav/*",
              options: {}
            }, {
              path: "/member/*/games/gtav/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/732efc56393d89076732e76b0a2b55b2.svg",
          links: [{
            dataTestId: "gtavLink",
            location: {
              domain: r.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(c.nav_gtav_overview),
            gaText: c.nav_gtav_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(c.nav_gtav_discover),
              gaText: c.nav_gtav_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(c.nav_gtao_career_progress),
              gaText: c.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(c.nav_gtav_my_character),
              gaText: c.nav_gtav_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(c.nav_gtav_jobs),
              gaText: c.nav_gtav_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(c.nav_gtav_guides),
              gaText: c.nav_gtav_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlatesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(c.nav_gtav_licence_plate_creator),
              gaText: c.nav_gtav_licence_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: a.formatMessage(c.nav_gtao_twitch_drops),
              gaText: c.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(c.nav_gtav_gta_online),
            gaText: c.nav_gtav_gta_online.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtavSpOverviewButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(c.nav_gtav_stats),
              gaText: c.nav_gtav_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(c.nav_gtav_missions),
              gaText: c.nav_gtav_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(c.nav_gtav_checklist),
              gaText: c.nav_gtav_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(c.nav_gtav_accomplishments),
              gaText: c.nav_gtav_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavSpLink",
            text: a.formatMessage(c.nav_gtav_story),
            gaText: c.nav_gtav_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtav+Link",
            location: {
              domain: r.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(c.nav_gtav_gta_plus),
            gaText: c.nav_gtav_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              children: [{
                dataTestId: "gtavAllJobsButtons",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                },
                text: a.formatMessage(c.nav_gtav_jobs_browse_all),
                gaText: c.nav_gtav_jobs_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCommunitySeriesLink",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                text: a.formatMessage(c.nav_gtav_community_series),
                gaText: c.nav_gtav_community_series.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyJobsButtons",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                },
                text: a.formatMessage(c.nav_gtav_my_jobs),
                gaText: c.nav_gtav_my_jobs.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavPlaylistsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/gtav/playlists"
                },
                text: a.formatMessage(c.nav_gtav_playlists),
                gaText: c.nav_gtav_playlists.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavJobsDropdown",
              text: a.formatMessage(c.nav_gtav_jobs),
              gaText: c.nav_gtav_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              children: [{
                dataTestId: "gtavBrowseCrewsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/crews"
                },
                text: a.formatMessage(c.nav_gtav_crews_browse_all),
                gaText: c.nav_gtav_crews_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyCrewsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0,
                text: a.formatMessage(c.nav_gtav_my_crews),
                gaText: c.nav_gtav_my_crews.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateCrewButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                },
                text: a.formatMessage(c.nav_gtav_create_crew),
                gaText: c.nav_gtav_create_crew.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateEmblemButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/emblems"
                },
                text: a.formatMessage(c.nav_gtav_emblem_editor),
                gaText: c.nav_gtav_emblem_editor.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavCrewsDropdown",
              text: a.formatMessage(c.nav_gtav_crews),
              gaText: c.nav_gtav_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
              },
              text: a.formatMessage(c.nav_rsg_community_guidelines),
              gaText: c.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavCommunityDropdown",
            text: a.formatMessage(c.nav_gtav_community),
            gaText: c.nav_gtav_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(c.nav_gtav_support),
            gaText: c.nav_gtav_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: a.formatMessage(c.nav_gtav_cta_buy_now),
            location: {
              domain: r.C.www,
              path: "/gta-v?info=order"
            },
            ga: "cta_buy",
            gaText: c.nav_gtav_cta_buy_now.defaultMessage,
            dataTestId: "gtavPurchaseLink"
          }
        }),
        b = () => ({
          site: "grandtheftauto-gba",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/grandtheftauto-gba/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c2406b2d84fbe619ab07b1971ecf579.svg",
          links: []
        }),
        M = () => ({
          site: "chinatownwars",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/chinatownwars/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/02cb5f725e6afe939eba7948707242f5.svg",
          links: []
        }),
        w = a => ({
          site: "episodesfromlibertycity",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/episodesfromlibertycity/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a7dfd2058127cb6f5adca6c9b1d91cc.png",
          cta: {
            dataTestId: "gtaiveflcPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: "https://store.rockstargames.com",
              path: "/game/buy-grand-theft-auto-iv"
            },
            text: a.formatMessage(c.nav_gtaiveflc_cta_buy_now),
            gaText: c.nav_gtaiveflc_cta_buy_now.defaultMessage
          },
          links: [{
            text: a.formatMessage(c.nav_gtaiv_overview),
            gaText: c.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: r.C.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: a.formatMessage(c.nav_gtaiv_accomplishments),
            gaText: c.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: r.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(c.nav_gtaiv_support),
            gaText: c.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/115001614848"
            }
          }]
        }),
        x = () => ({
          site: "libertycitystories",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/libertycitystories/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e39e530c8e7a5b1a3243edeaaf0b223.svg",
          links: []
        }),
        k = () => ({
          site: "gtalondon",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/gtalondon/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6177d74645c9cd4e1bad75e86cadd1f8.png",
          links: []
        }),
        y = a => ({
          site: "gta-online",
          appearancePaths: {
            [r.C.www]: [{
              path: "/gta-online/*",
              options: {}
            }],
            [r.C.socialClub]: [{
              path: "/members*",
              options: {
                isSearchPage: !0
              }
            }, {
              path: "/member/:username/crews*",
              options: {}
            }, {
              path: "/crews*",
              options: {
                isSearchPage: !0
              }
            }, {
              path: "/crew*",
              options: {}
            }, {
              path: "/jobs*",
              options: {
                isSearchPage: !0,
                queryParams: {
                  title: "gtav"
                }
              }
            }, {
              path: "*/jobs*",
              options: {}
            }, {
              path: "/emblems*",
              options: {}
            }, {
              path: "/games/gtav/:platform/career/overview/gtaonline*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d2753ceddb2213d956d51d369985513.svg",
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: r.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(c.nav_gtao_overview),
            gaText: c.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(c.nav_gtao_discover),
              gaText: c.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(c.nav_gtao_career_progress),
              gaText: c.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(c.nav_gtao_my_character),
              gaText: c.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(c.nav_gtao_jobs),
              gaText: c.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(c.nav_gtao_guides),
              gaText: c.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(c.nav_gtao_license_plate_creator),
              gaText: c.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: a.formatMessage(c.nav_gtao_twitch_drops),
              gaText: c.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(c.nav_gtao_gtao),
            gaText: c.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(c.nav_gtao_stats),
              gaText: c.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(c.nav_gtao_missions),
              gaText: c.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(c.nav_gtao_checklist),
              gaText: c.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(c.nav_gtao_accomplishments),
              gaText: c.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: a.formatMessage(c.nav_gtao_story),
            gaText: c.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: r.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(c.nav_gtao_gta_plus),
            gaText: c.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: a.formatMessage(c.nav_gtao_jobs_browse_all),
                gaText: c.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_community_series),
                gaText: c.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: a.formatMessage(c.nav_gtao_my_jobs),
                gaText: c.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                requiresAuth: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_jobs_playlists),
                gaText: c.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: a.formatMessage(c.nav_gtao_jobs),
              gaText: c.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: a.formatMessage(c.nav_gtao_browse_crews),
                gaText: c.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_my_crews),
                gaText: c.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(c.nav_gtao_crews_create),
                gaText: c.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_emblem_editor),
                gaText: c.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/emblems"
                }
              }],
              text: a.formatMessage(c.nav_gtao_crews),
              gaText: c.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
              },
              text: a.formatMessage(c.nav_rsg_community_guidelines),
              gaText: c.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: a.formatMessage(c.nav_gtao_community),
            gaText: c.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(c.nav_gtao_support),
            gaText: c.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: a.formatMessage(c.nav_gtao_cta_buy_now),
            location: {
              domain: r.C.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy",
            gaText: c.nav_gtao_cta_buy_now.defaultMessage,
            dataTestId: "gtaoPurchaseLink"
          }
        }),
        C = a => ({
          site: "gta-plus",
          appearancePaths: {
            [r.C.www]: [{
              path: "/gta-plus/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: r.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(c.nav_gtao_overview),
            gaText: c.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(c.nav_gtao_discover),
              gaText: c.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(c.nav_gtao_career_progress),
              gaText: c.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(c.nav_gtao_my_character),
              gaText: c.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(c.nav_gtao_jobs),
              gaText: c.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(c.nav_gtao_guides),
              gaText: c.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(c.nav_gtao_license_plate_creator),
              gaText: c.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: a.formatMessage(c.nav_gtao_twitch_drops),
              gaText: c.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(c.nav_gtao_gtao),
            gaText: c.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(c.nav_gtao_stats),
              gaText: c.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(c.nav_gtao_missions),
              gaText: c.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(c.nav_gtao_checklist),
              gaText: c.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(c.nav_gtao_accomplishments),
              gaText: c.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: a.formatMessage(c.nav_gtao_story),
            gaText: c.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: r.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(c.nav_gtao_gta_plus),
            gaText: c.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: a.formatMessage(c.nav_gtao_jobs_browse_all),
                gaText: c.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_community_series),
                gaText: c.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: a.formatMessage(c.nav_gtao_my_jobs),
                gaText: c.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_jobs_playlists),
                gaText: c.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: a.formatMessage(c.nav_gtao_jobs),
              gaText: c.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: a.formatMessage(c.nav_gtao_browse_crews),
                gaText: c.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_my_crews),
                gaText: c.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(c.nav_gtao_crews_create),
                gaText: c.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(c.nav_gtao_emblem_editor),
                gaText: c.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/emblems/new"
                }
              }],
              text: a.formatMessage(c.nav_gtao_crews),
              gaText: c.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
              },
              text: a.formatMessage(c.nav_rsg_community_guidelines),
              gaText: c.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: a.formatMessage(c.nav_gtao_community),
            gaText: c.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(c.nav_gtao_support),
            gaText: c.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: a.formatMessage(c.nav_gtao_cta_buy_now),
            location: {
              domain: r.C.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy",
            gaText: c.nav_gtao_cta_buy_now.defaultMessage,
            dataTestId: "gtaoPurchaseLink"
          }
        }),
        T = a => ({
          site: "sanandreas",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/sanandreas/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/854bac2f4c6c23fb7ca33f9407ac3c0d.svg",
          links: [],
          cta: {
            text: a.formatMessage(c.nav_gtasanandreas_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: c.nav_gtasanandreas_cta_buy_now.defaultMessage,
            dataTestId: "gtaSanAndreasPurchaseLink",
            variant: "highlight"
          }
        }),
        G = a => ({
          site: "gta-trilogy",
          appearancePaths: {
            [r.C.www]: [{
              path: "/GTATrilogy/*",
              options: {}
            }],
            [r.C.socialClub]: [{
              path: "/games/gtasa($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gtasa/*",
              options: {}
            }, {
              path: "/games/gtavc($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gtavc/*",
              options: {}
            }, {
              path: "/games/gta3($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gta3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ccc721c72fc5553108c7e70b0778dba.svg",
          links: [{
            text: a.formatMessage(c.nav_gta_trilogy_overview),
            gaText: c.nav_gta_trilogy_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: r.C.www,
              path: "/GTATrilogy"
            }
          }, {
            text: a.formatMessage(c.nav_gta_trilogy_accomplishments),
            gaText: c.nav_gta_trilogy_accomplishments.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: a.formatMessage(c.nav_gta_trilogy_gtasa),
              gaText: c.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: a.formatMessage(c.nav_gta_trilogy_gtavc),
              gaText: c.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: a.formatMessage(c.nav_gta_trilogy_gta3),
              gaText: c.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: a.formatMessage(c.nav_gta_trilogy_support),
            gaText: c.nav_gta_trilogy_support.defaultMessage,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: a.formatMessage(c.nav_gta_trilogy_gtasa),
              gaText: c.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: r.C.support,
                path: "/categories/115001620287"
              }
            }, {
              text: a.formatMessage(c.nav_gta_trilogy_gtavc),
              gaText: c.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: r.C.support,
                path: "/categories/115001619868"
              }
            }, {
              text: a.formatMessage(c.nav_gta_trilogy_gta3),
              gaText: c.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-external",
              dataTestId: "gta3TrilogySupportLink",
              target: "_blank",
              location: {
                domain: r.C.support,
                path: "/categories/115001619948"
              }
            }]
          }],
          cta: {
            text: a.formatMessage(c.nav_gta_trilogy_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: c.nav_gta_trilogy_cta_buy_now.defaultMessage,
            dataTestId: "gtaTrilogyPurchaseLink"
          }
        }),
        I = a => ({
          site: "vicecity",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/vicecity/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
          links: [],
          cta: {
            text: a.formatMessage(c.nav_gtavc_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: c.nav_gtavc_cta_buy_now.defaultMessage,
            dataTestId: "gtaVcBuyNowLink",
            variant: "highlight"
          }
        }),
        L = () => ({
          site: "vicecitystories",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/vicecitystories/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a73128cb6201d9d830f2ac4802ad6c2f.svg",
          links: []
        }),
        A = a => ({
          site: "la-noire",
          appearancePaths: {
            [r.C.www]: [{
              path: "/lanoire/*",
              options: {}
            }, {
              path: "/games/lanoire/*",
              options: {}
            }],
            [r.C.socialClub]: [{
              path: "/games/lanvr/*",
              options: {}
            }, {
              path: "/member/*/games/lanvr/*",
              options: {}
            }, {
              path: "/games/lan/*",
              options: {}
            }, {
              path: "/member/*/games/lan/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/63c149607e42c3f7a8988ef21d53ec97.svg",
          links: [{
            text: a.formatMessage(c.nav_lanoire_overview),
            gaText: c.nav_lanoire_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: r.C.www,
              path: "/games/lanoire"
            }
          }, {
            text: a.formatMessage(c.nav_lanoire_progress),
            gaText: c.nav_lanoire_progress.defaultMessage,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: a.formatMessage(c.nav_lanoire_pc_console),
              gaText: c.nav_lanoire_pc_console.defaultMessage,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: a.formatMessage(c.nav_lanoire_case_tracker),
                gaText: c.nav_lanoire_case_tracker.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: a.formatMessage(c.nav_lanoire_checklist),
                gaText: c.nav_lanoire_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: a.formatMessage(c.nav_lanoire_stats),
                gaText: c.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: a.formatMessage(c.nav_lanoire_accomplishments),
                gaText: c.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: a.formatMessage(c.nav_lanoire_badge_pursuit),
                gaText: c.nav_lanoire_badge_pursuit.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/badgepursuit"
                }
              }]
            }, {
              text: a.formatMessage(c.nav_lanoire_vr_case_files),
              gaText: c.nav_lanoire_vr_case_files.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: a.formatMessage(c.nav_lanoire_stats),
                gaText: c.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: a.formatMessage(c.nav_lanoire_accomplishments),
                gaText: c.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lanvr/achievements?platFormId=8"
                }
              }]
            }]
          }, {
            text: a.formatMessage(c.nav_lanoire_support),
            gaText: c.nav_lanoire_support.defaultMessage,
            type: "nav-external",
            dataTestId: "lanoireSupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: a.formatMessage(c.nav_lanoire_cta_buy_now),
            location: {
              domain: r.C.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy",
            gaText: c.nav_lanoire_cta_buy_now.defaultMessage,
            dataTestId: "lanoirePurchaseLink"
          }
        }),
        S = () => ({
          site: "manhunt",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/manhunt/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36e8ec97940586d12e63320c75c99d03.svg",
          links: []
        }),
        j = () => ({
          site: "manhunt2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/manhunt2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceb3dacaa63b2f3036670bbf7e677dc2.png",
          links: []
        }),
        N = () => ({
          site: "maxpayne",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/maxpayne/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d866f8e4ea468c7ad8fb5d301228c1b2.svg",
          links: []
        }),
        P = () => ({
          site: "maxpayne2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/maxpayne2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3f251fe931f3533cb980bbc23e599b8.svg",
          links: []
        }),
        B = a => ({
          site: "maxpayne3",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/maxpayne3/*",
              options: {}
            }],
            [r.C.socialClub]: [{
              path: "/games/maxpayne3*",
              options: {}
            }, {
              path: "/member/*/games/maxpayne3*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba94346e4b206acc56976b59974bffbe.png",
          links: [{
            text: a.formatMessage(c.nav_mp3_overview),
            gaText: c.nav_mp3_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: r.C.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: a.formatMessage(c.nav_mp3_progress),
            gaText: c.nav_mp3_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: a.formatMessage(c.nav_mp3_accomplishments),
              gaText: c.nav_mp3_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: a.formatMessage(c.nav_mp3_singleplayer),
              gaText: c.nav_mp3_singleplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: a.formatMessage(c.nav_mp3_career),
                gaText: c.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_checklist),
                gaText: c.nav_mp3_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_grinds),
                gaText: c.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_chapters),
                gaText: c.nav_mp3_chapters.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_weapons),
                gaText: c.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_leaderboards),
                gaText: c.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/leaderboards"
                }
              }]
            }, {
              text: a.formatMessage(c.nav_mp3_multiplayer),
              gaText: c.nav_mp3_multiplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: a.formatMessage(c.nav_mp3_career),
                gaText: c.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_grinds),
                gaText: c.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_weapons),
                gaText: c.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_leaderboards),
                gaText: c.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/leaderboards"
                }
              }]
            }, {
              text: a.formatMessage(c.nav_mp3_crews),
              gaText: c.nav_mp3_crews.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: a.formatMessage(c.nav_mp3_multiplayer),
                gaText: c.nav_mp3_multiplayer.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_score_attack),
                gaText: c.nav_mp3_score_attack.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_ny_minute),
                gaText: c.nav_mp3_ny_minute.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_checkpoint_challenge),
                gaText: c.nav_mp3_checkpoint_challenge.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: a.formatMessage(c.nav_mp3_featured),
                gaText: c.nav_mp3_featured.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewFeaturedLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/rivalries"
                }
              }]
            }]
          }, {
            text: a.formatMessage(c.nav_mp3_support),
            gaText: c.nav_mp3_support.defaultMessage,
            type: "nav-external",
            dataTestId: "mp3SupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: a.formatMessage(c.nav_mp3_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-max-payne-3"
            },
            ga: "cta_buy",
            gaText: c.nav_mp3_cta_buy_now.defaultMessage,
            dataTestId: "mp3PurchaseLink"
          }
        }),
        R = () => ({
          site: "midnightclub",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/midnightclub/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce5da0e35899b99c836bd73e2f7aa7a.png",
          links: []
        }),
        D = () => ({
          site: "midnightclub2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/midnightclub2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa516901becb336d1d5ddc08401e490.png",
          links: []
        }),
        O = () => ({
          site: "midnightclub3",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/midnightclub3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
          links: []
        }),
        V = () => ({
          site: "midnightclubLA",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/midnightclubLA/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0333d6f30ad108c77944b8faf6f34c03.png",
          links: []
        }),
        E = () => ({
          site: "oni",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/oni/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753452f0a8e31d63b8cc1b3337ca8dd1.png",
          links: []
        }),
        z = a => ({
          site: "rdo",
          appearancePaths: {
            [r.C.www]: [{
              path: "/reddeadonline/*",
              options: {}
            }],
            [r.C.socialClub]: [{
              path: "/games/rdo*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b2f9181adacf5b0713a311fb0065164.svg",
          links: [{
            dataTestId: "rdoLink",
            location: {
              domain: r.C.www,
              path: "/reddeadonline"
            },
            text: a.formatMessage(c.nav_rdo_overview),
            gaText: c.nav_rdo_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/getting-started"
              },
              text: a.formatMessage(c.nav_rdo_getting_started),
              gaText: c.nav_rdo_getting_started.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/roles"
              },
              text: a.formatMessage(c.nav_rdo_specialist_roles),
              gaText: c.nav_rdo_specialist_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoLOOLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              },
              text: a.formatMessage(c.nav_rdo_story_missions),
              gaText: c.nav_rdo_story_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPossesLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              },
              text: a.formatMessage(c.nav_rdo_posses_free_roam),
              gaText: c.nav_rdo_posses_free_roam.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoSAELink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              },
              text: a.formatMessage(c.nav_rdo_competitive_series),
              gaText: c.nav_rdo_competitive_series.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/customization"
              },
              text: a.formatMessage(c.nav_rdo_customization),
              gaText: c.nav_rdo_customization.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoProgressLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/rank-and-fortune"
              },
              text: a.formatMessage(c.nav_rdo_progression),
              gaText: c.nav_rdo_progression.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoExploreDropdown",
            text: a.formatMessage(c.nav_rdo_explore),
            gaText: c.nav_rdo_explore.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoOverviewButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/overview"
              },
              text: a.formatMessage(c.nav_rdo_my_character),
              gaText: c.nav_rdo_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/roles"
              },
              text: a.formatMessage(c.nav_rdo_roles),
              gaText: c.nav_rdo_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/clubrewards"
              },
              text: a.formatMessage(c.nav_rdo_club_rewards),
              gaText: c.nav_rdo_club_rewards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRankButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/rank"
              },
              text: a.formatMessage(c.nav_rdo_rank_unlocks),
              gaText: c.nav_rdo_rank_unlocks.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAwardsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/awards"
              },
              text: a.formatMessage(c.nav_rdo_awards),
              gaText: c.nav_rdo_awards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/achievements"
              },
              text: a.formatMessage(c.nav_rdo_accomplishments),
              gaText: c.nav_rdo_accomplishments.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/benefits"
              },
              text: a.formatMessage(c.nav_rdo_benefits),
              gaText: c.nav_rdo_benefits.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoProgressDropdown",
            text: a.formatMessage(c.nav_rdo_progress),
            gaText: c.nav_rdo_progress.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoPosseButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/posse"
              },
              text: a.formatMessage(c.nav_rdo_posses),
              gaText: c.nav_rdo_posses.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
              },
              text: a.formatMessage(c.nav_rsg_community_guidelines),
              gaText: c.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoCommunityDropdown",
            text: a.formatMessage(c.nav_rdo_community),
            gaText: c.nav_rdo_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "rdoCatalogueButton",
            location: {
              domain: r.C.socialClub,
              path: "/games/rdr2/catalogue/online/"
            },
            target: "_blank",
            text: a.formatMessage(c.nav_rdo_catalogue),
            gaText: c.nav_rdo_catalogue.defaultMessage,
            type: "nav-external"
          }, {
            dataTestId: "rdoSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/115001624507"
            },
            target: "_blank",
            text: a.formatMessage(c.nav_rdo_support),
            gaText: c.nav_rdo_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: a.formatMessage(c.nav_rdo_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy",
            gaText: c.nav_rdo_cta_buy_now.defaultMessage,
            dataTestId: "rdoPurchaseLink"
          }
        }),
        H = a => ({
          site: "reddeadredemption",
          appearancePaths: {
            [r.C.www]: [{
              path: "/reddeadredemption/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afce1282be848202a965031813991b09.svg",
          links: [],
          cta: {
            text: a.formatMessage(c.nav_rdr_cta_buy_now),
            location: {
              domain: r.C.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy",
            gaText: c.nav_rdr_cta_buy_now.defaultMessage,
            dataTestId: "rsrBuyNowCta"
          }
        }),
        q = a => ({
          site: "rdr2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/reddeadredemption2/*",
              options: {}
            }, {
              path: "/games/reddeadredemption2/*",
              options: {}
            }],
            [r.C.socialClub]: [{
              path: "/games/rdr2*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e3cf24e53a1fb96410ddbe7d17ca96f.svg",
          links: [{
            text: a.formatMessage(c.nav_rdr2_overview),
            gaText: c.nav_rdr2_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: r.C.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: a.formatMessage(c.nav_rdr2_explore),
            gaText: c.nav_rdr2_explore.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: a.formatMessage(c.nav_rdr2_van_der_linde_gang),
              gaText: c.nav_rdr2_van_der_linde_gang.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_locations),
              gaText: c.nav_rdr2_locations.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_wildlife),
              gaText: c.nav_rdr2_wildlife.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_weaponry),
              gaText: c.nav_rdr2_weaponry.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: a.formatMessage(c.nav_rdr2_progress),
            gaText: c.nav_rdr2_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: a.formatMessage(c.nav_rdr2_stats),
              gaText: c.nav_rdr2_stats.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_chapters),
              gaText: c.nav_rdr2_chapters.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_challenges),
              gaText: c.nav_rdr2_challenges.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_character),
              gaText: c.nav_rdr2_character.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_compendium),
              gaText: c.nav_rdr2_compendium.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_accomplishments),
              gaText: c.nav_rdr2_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: a.formatMessage(c.nav_rdr2_media),
            gaText: c.nav_rdr2_media.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: a.formatMessage(c.nav_rdr2_gallery),
              gaText: c.nav_rdr2_gallery.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_artwork),
              gaText: c.nav_rdr2_artwork.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_videos),
              gaText: c.nav_rdr2_videos.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: a.formatMessage(c.nav_rdr2_music),
              gaText: c.nav_rdr2_music.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: a.formatMessage(c.nav_rdr2_online),
            gaText: c.nav_rdr2_online.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: r.C.www,
              path: "/reddeadonline"
            }
          }, {
            text: a.formatMessage(c.nav_rdr2_catalogue),
            gaText: c.nav_rdr2_catalogue.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: r.C.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: a.formatMessage(c.nav_rdr2_support),
            gaText: c.nav_rdr2_support.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: a.formatMessage(c.nav_rdr2_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy",
            gaText: c.nav_rdr2_cta_buy_now.defaultMessage,
            dataTestId: "rdr2StoreLink"
          }
        }),
        F = () => ({
          site: "undeadnightmare",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/undeadnightmare/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27bc39e322a4e55dc8b34fa4543269b8.svg",
          links: []
        }),
        $ = () => ({
          site: "reddeadrevolver",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/reddeadrevolver/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
          links: []
        }),
        U = a => ({
          site: "rsg",
          appearancePaths: {
            [r.C.www]: [{
              path: "/search/*",
              options: {
                isSearchPage: !0,
                forceSearch: !0
              }
            }, {
              path: "/*",
              options: {}
            }],
            [r.C.socialClub]: [{
              path: "/*",
              options: {}
            }]
          },
          brand: null,
          links: [{
            text: a.formatMessage(c.nav_rsg_games),
            gaText: c.nav_rsg_games.defaultMessage,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: a.formatMessage(c.nav_rsg_newswire),
            gaText: c.nav_rsg_newswire.defaultMessage,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: r.C.www,
              path: "/newswire"
            }
          }, {
            text: a.formatMessage(c.nav_rsg_videos),
            gaText: c.nav_rsg_videos.defaultMessage,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: r.C.www,
              path: "/videos"
            }
          }, {
            text: a.formatMessage(c.nav_rsg_downloads),
            gaText: c.nav_rsg_downloads.defaultMessage,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: r.C.www,
              path: "/downloads"
            }
          }, {
            text: a.formatMessage(c.nav_rsg_store),
            gaText: c.nav_rsg_store.defaultMessage,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/"
            }
          }, {
            text: a.formatMessage(c.nav_rsg_support),
            gaText: c.nav_rsg_support.defaultMessage,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/"
            }
          }],
          cta: {
            text: a.formatMessage(c.nav_rsg_cta_get_launcher),
            location: {
              domain: r.C.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download",
            gaText: c.nav_rsg_cta_get_launcher.defaultMessage,
            dataTestId: "launcherLink",
            variant: "highlight"
          },
          hideQuickAccess: !0
        }),
        Y = () => ({
          site: "stateofemergency",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/stateofemergency/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b4f7013cd8954b8f41c5bc60173b1e6.svg",
          links: []
        }),
        J = () => ({
          site: "skateanddestroy",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/skateanddestroy/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e24eba17ceb19c8e953425fdc8f69bf.svg",
          links: []
        }),
        Q = () => ({
          site: "smugglersrun",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/smugglersrun/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56ad67de5fcb23d5170c6ab1c22090a9.png",
          links: []
        }),
        W = () => ({
          site: "smugglersrun2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/smugglersrun2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95c570982247f87a5720d3b09edea287.png",
          links: []
        }),
        Z = () => ({
          site: "smugglersrunwarzones",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/smugglersrunwarzones/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76ea0a9986ebf83e1bc9be3e03a0433f.png",
          links: []
        }),
        K = () => ({
          site: "tabletennis",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/tabletennis/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6168a999187a8807caacf4d106a60a80.svg",
          links: []
        }),
        X = () => ({
          site: "italianjob",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/italianjob/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dfc0cce899459d99bc2403b124a5d30d.svg",
          links: []
        }),
        aa = a => ({
          site: "thewarriors",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/thewarriors/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afa9c45d4c8ee52983534b4be5504ff0.svg",
          links: [],
          cta: {
            text: a.formatMessage(c.nav_thewarriors_cta_buy_now),
            location: {
              domain: "https://store.playstation.com",
              path: "/concept/205082"
            },
            ga: "cta_buy",
            gaText: c.nav_thewarriors_cta_buy_now.defaultMessage,
            dataTestId: "thewarriorsPurchaseLink"
          }
        }),
        ea = () => ({
          site: "wildmetal",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/wildmetal/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95bd5f94c3522fcf1ebc9e1254522379.svg",
          links: []
        }),
        ta = /[*?\\<>&%@:~]/g,
        na = a => a.match(ta),
        sa = {
          min: 3,
          max: 100,
          validationFunction: na
        },
        oa = (0, r.A)(),
        ia = (a, e) => "/" + [e, ...a.split("/")].filter(Boolean).join("/"),
        ra = (a, e) => a ? a === e ? "" : a.startsWith("http") ? a : `https://${oa.sites[a]}.rockstargames.com` : "";
      var da = t(52542);
      const la = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        ca = (a, e, t, n) => [{
          text: a.formatMessage(c.sc_link_account),
          target: "_self",
          dataTestId: "accountButton",
          type: "nav-dropdown",
          children: [{
            text: a.formatMessage(c.sc_link_settings),
            location: {
              domain: r.C.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...la,
              text: c.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, {
            text: a.formatMessage(c.sc_link_view_my_profile),
            location: {
              domain: t,
              path: ""
            },
            target: "_self",
            ga: {
              ...la,
              text: c.sc_link_view_my_profile.defaultMessage
            },
            dataTestId: "viewMyProfileLink"
          }, {
            text: a.formatMessage(c.sc_link_game_activation),
            location: {
              domain: r.C.socialClub,
              path: "/activate"
            },
            target: "_self",
            ga: {
              ...la,
              text: c.sc_link_game_activation.defaultMessage
            },
            dataTestId: "gameActivationLink"
          }]
        }, {
          text: a.formatMessage(c.sc_link_notifications),
          location: {
            domain: r.C.socialClub,
            path: "/notifications"
          },
          target: "_self",
          hasNotifications: n,
          ga: {
            ...la,
            text: c.sc_link_notifications.defaultMessage,
            location: {
              domain: r.C.socialClub,
              path: "/notifications"
            }
          },
          dataTestId: "notificationsLink"
        }, {
          text: a.formatMessage(c.sc_link_crews),
          location: {
            domain: r.C.socialClub,
            path: `/member/${e}/crews`
          },
          target: "_self",
          ga: {
            ...la,
            text: c.sc_link_crews.defaultMessage
          },
          dataTestId: "crewsLink"
        }, {
          text: a.formatMessage(c.sc_link_friends),
          target: "_self",
          dataTestId: "friendsButton",
          type: "nav-dropdown",
          children: [{
            text: a.formatMessage(c.sc_link_my_friends),
            location: {
              domain: r.C.socialClub,
              path: `/member/${e}/friends`
            },
            target: "_self",
            ga: {
              ...la,
              text: c.sc_link_my_friends.defaultMessage
            },
            dataTestId: "myFriendsLink"
          }, {
            text: a.formatMessage(c.sc_link_import_friends),
            location: {
              domain: r.C.socialClub,
              path: "/friends/import"
            },
            target: "_self",
            ga: {
              ...la,
              text: c.sc_link_import_friends.defaultMessage
            },
            dataTestId: "importFriendsLink"
          }, {
            text: a.formatMessage(c.sc_link_find_friends),
            location: {
              domain: r.C.socialClub,
              path: "/members"
            },
            target: "_self",
            ga: {
              ...la,
              text: c.sc_link_import_friends.defaultMessage
            },
            dataTestId: "findFriendsLink"
          }]
        }],
        ga = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        _a = a => ({
          text: a.formatMessage(c.sc_link_help),
          target: "_self",
          ga: {
            ...ga,
            text: c.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          type: "nav-dropdown",
          children: [{
            text: a.formatMessage(c.sc_link_support),
            location: {
              domain: r.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...ga,
              text: c.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: a.formatMessage(c.sc_link_legal),
            location: {
              domain: r.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...ga,
              text: c.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: a.formatMessage(c.sc_link_privacy_policy),
            location: {
              domain: r.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...ga,
              text: c.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: a.formatMessage(c.sc_link_cookies_policy),
            location: {
              domain: r.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...ga,
              text: c.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            type: "nav-no-link",
            text: a.formatMessage(c.sc_link_cookies_settings),
            onClickCallback: a => {
              a.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...ga,
              text: c.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: a.formatMessage(c.sc_link_do_not_sell_my_information),
            location: {
              domain: r.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...ga,
              text: c.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        });
      var ma = t(32654),
        va = t(86695),
        ua = t(18670),
        pa = t(3860);
      let fa;
      fa = {
        gameCard: "rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251"
      };
      const ha = ({
        title: a,
        titleSlug: e,
        path: t,
        onNavigate: n,
        dataTestId: s,
        onClick: i,
        ...r
      }) => {
        let d;
        return d = r, (0, o.jsx)("div", {
          className: fa.gameCard,
          children: (0, o.jsx)(pa.A, {
            to: t,
            "aria-label": a,
            onNavigate: n,
            onClick: i,
            "data-testid": s,
            ...d,
            children: (0, o.jsx)(ua.A, {
              title: a,
              titleSlug: e,
              inGlobalNav: !0
            })
          })
        }, a)
      };
      var ba = t(3564);
      const Ma = (0, l.defineMessages)({
          games_menu_item: {
            id: "games_menu_item",
            description: "Global navigation, Games Menu - Menu Item label in main nav",
            defaultMessage: "Games"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            description: "Global navigation, Games Menu - Title for games menu",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            description: "Global navigation, Games Menu - View All link",
            defaultMessage: "View All"
          },
          games_menu_vi: {
            id: "games_menu_vi",
            description: "Global navigation, Games Menu Games - Grand Theft Auto VI",
            defaultMessage: "Grand Theft Auto VI"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            description: "Global navigation, Games Menu Games - Grand Theft Auto V",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            description: "Global navigation, Games Menu Games - Grand Theft Auto Online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            description: "Global navigation, Games Menu Games - Grand Theft Auto: The Trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            description: "Global navigation, Games Menu Games - Red Dead Redemption 2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr: {
            id: "games_menu_rdr",
            description: "Global navigation, Games Menu Games - Red Dead Redemption",
            defaultMessage: "Red Dead Redemption"
          }
        }),
        wa = a => ({
          viewAllLocation: {
            path: "/games"
          },
          games: [{
            titleSlug: "VI",
            text: a.formatMessage(Ma.games_menu_vi),
            gaText: "Grand Theft Auto VI",
            path: "/VI",
            useLocale: !0,
            externalRoute: !0,
            dataTestId: "VI"
          }, {
            titleSlug: "gta-v",
            text: a.formatMessage(Ma.games_menu_gta_v),
            gaText: "Grand Theft Auto V",
            path: "/gta-v",
            dataTestId: "gtav"
          }, {
            titleSlug: "gta-online",
            text: a.formatMessage(Ma.games_menu_gta_online),
            gaText: "Grand Theft Auto Online",
            path: "/gta-online",
            dataTestId: "gtao"
          }, {
            titleSlug: "reddeadredemption2",
            text: a.formatMessage(Ma.games_menu_rdr_2),
            gaText: "Red Dead Redemption 2",
            path: "/reddeadredemption2",
            dataTestId: "rdr2"
          }, {
            titleSlug: "reddeadredemption",
            text: a.formatMessage(Ma.games_menu_rdr),
            gaText: "Red Dead Redemption",
            path: "/reddeadredemption",
            dataTestId: "rdr"
          }]
        });
      var xa = t(15364),
        ka = t(66439),
        ya = t(63582);
      let Ca;
      Ca = {
        gameCards: "rockstargames-modules-core-headere104ee1bbcd8b04a2ea224fdccd9bb67",
        gamesMenu: "rockstargames-modules-core-headerdb2039d0fa02404c1e032ddafe358efd",
        gamesMenuContent: "rockstargames-modules-core-headercaea3404775ed365d2f4aef72c9990dc",
        gamesMenuMobile: "rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89",
        gamesSubMenu: "rockstargames-modules-core-headerf01964ebb2d62c8bd7d7ad3df1d818a4",
        header: "rockstargames-modules-core-headerefbf909442a1564a3efb261ef928345d",
        menuTitle: "rockstargames-modules-core-headerbacc5a58858921d497c7752942deb135",
        pillBtn: "rockstargames-modules-core-headercae5df759f802aa04900e0b40597ba48",
        selected: "rockstargames-modules-core-headerc1d01988f20547a303ca62d99b0beee4",
        slide: "rockstargames-modules-core-headerdf455110c72d70cc653582db9d812af6",
        slider: "rockstargames-modules-core-headerb673908f44e71f1c48537b69a244eaf5",
        "swiper-horizontal": "rockstargames-modules-core-headerc5d5a6c2ae5bc35a9ce9fa397ffe3508",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-headera6e13c807485e2f4de5e219ba255f912",
        "swiper-vertical": "rockstargames-modules-core-headerde108a391289bb293ca8f15ddccf6fd0",
        titleBar: "rockstargames-modules-core-headerb2d95a9777e140a30958fbd98a9fb053",
        viewAllLink: "rockstargames-modules-core-headera4f8eb74ae350f61ed4b4fffa4d8ff8d"
      };
      const Ta = ({
          onNavigate: a,
          onClick: e
        }) => {
          const t = (0, l.useIntl)(),
            n = (0, r.A)(),
            [{
              subdomaincom: s
            }] = (0, l.getLocale)(),
            d = s !== l.englishLocale.subdomaincom ? `/${s}` : "",
            c = n.currentSite?.site === r.C.www,
            g = `https://${n.sites[r.C.www]}.rockstargames.com`;
          let _ = "";
          _ = c ? d : `${g}${d}`;
          const {
            viewAllLocation: m,
            games: v
          } = (0, i.useMemo)((() => wa(t)), [s]);
          return (0, o.jsxs)("div", {
            className: Ca.gamesMenu,
            "data-testid": "gamesMenu",
            children: [(0, o.jsxs)("div", {
              className: Ca.titleBar,
              children: [(0, o.jsx)("div", {
                children: (0, o.jsx)("h2", {
                  className: Ca.menuTitle,
                  children: t.formatMessage(Ma.games_menu_featured)
                })
              }), (0, o.jsx)("div", {
                children: (0, o.jsx)(va.Button, {
                  asChild: !0,
                  appearance: "ghost",
                  size: "MD",
                  children: (0, o.jsxs)("a", {
                    className: Ca.viewAllLink,
                    href: _ + m.path,
                    children: [t.formatMessage(Ma.games_menu_view_all), (0, o.jsx)("img", {
                      src: ba.ZM,
                      alt: t.formatMessage(Ma.games_menu_view_all)
                    })]
                  })
                })
              })]
            }), (0, o.jsx)("div", {
              className: Ca.gameCards,
              children: v.map((t => {
                return (0, o.jsx)(ha, {
                  titleSlug: t.titleSlug,
                  title: t.text,
                  path: (!c || t.externalRoute ? t.useLocale ? `${g}${d}` : g : "") + t.path,
                  dataTestId: t.dataTestId,
                  onNavigate: a,
                  onClick: (n = t.gaText, s = `Games > ${t.gaText}`, i = (!c || t.externalRoute ? t.useLocale ? `${g}${d}` : g : "") + t.path, () => {
                    e?.(n, s, i)
                  })
                }, t.titleSlug);
                var n, s, i
              }))
            })]
          })
        },
        Ga = ({
          onNavigate: a,
          onClick: e,
          dataTestId: t
        }) => {
          const n = (0, l.useIntl)(),
            {
              isHidden: s
            } = (0, i.useContext)(xa.jd),
            {
              inMobileMenu: r
            } = (0, i.useContext)(ka.xN);
          return r ? (0, o.jsx)(Ia, {
            onNavigate: a,
            onClick: e
          }) : (0, o.jsxs)(xa.Dr, {
            children: [(0, o.jsx)(xa.cQ, {
              "data-testid": t,
              children: n.formatMessage(Ma.games_menu_item)
            }), (0, o.jsx)(ya.AnimatePresence, {
              children: !s && (0, o.jsx)(xa.rm, {
                className: Ca.gamesMenuContent,
                animationOverride: "expandCollapse",
                children: (0, o.jsx)(Ta, {
                  onNavigate: a,
                  onClick: e
                })
              })
            })]
          })
        },
        Ia = ({
          onNavigate: a,
          onClick: e
        }) => {
          const t = (0, l.useIntl)(),
            n = (0, r.A)(),
            [{
              subdomaincom: s
            }] = (0, l.getLocale)(),
            {
              closeMobileMenu: d
            } = (0, i.useContext)(ka.xN),
            c = s !== l.englishLocale.subdomaincom ? `/${s}` : "",
            g = n.currentSite?.site === r.C.www,
            _ = `https://${n.sites[r.C.www]}.rockstargames.com`;
          let m = "";
          m = g ? c : `${_}${c}`;
          const {
            viewAllLocation: v,
            games: u
          } = (0, i.useMemo)((() => wa(t)), [s]);
          let p;
          return p = 3.5, (0, o.jsxs)("li", {
            className: Ca.gamesMenuMobile,
            "data-testid": "gamesMenu",
            children: [(0, o.jsxs)("div", {
              className: Ca.header,
              children: [(0, o.jsx)("h2", {
                children: t.formatMessage(Ma.games_menu_featured)
              }), (0, o.jsx)(va.Button, {
                asChild: !0,
                appearance: "ghost",
                size: "MD",
                children: (0, o.jsxs)("a", {
                  className: Ca.viewAllLink,
                  href: m + v.path,
                  children: [t.formatMessage(Ma.games_menu_view_all), (0, o.jsx)("img", {
                    src: ba.ZM,
                    alt: t.formatMessage(Ma.games_menu_view_all)
                  })]
                })
              })]
            }), (0, o.jsx)(ma.RC, {
              className: Ca.slider,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: 3.5,
              speed: 700,
              children: u.map((t => {
                return (0, o.jsx)(ma.qr, {
                  className: Ca.slide,
                  children: (0, o.jsx)(ha, {
                    titleSlug: t.titleSlug,
                    title: t.text,
                    path: (!g || t.externalRoute ? t.useLocale ? `${_}${c}` : _ : "") + t.path,
                    dataTestId: t.dataTestId,
                    onNavigate: a,
                    onClick: (n = t.gaText, s = `Games > ${t.gaText}`, i = (!g || t.externalRoute ? t.useLocale ? `${_}${c}` : _ : "") + t.path, () => {
                      e?.(n, s, i), d()
                    })
                  })
                }, t.gaText);
                var n, s, i
              }))
            })]
          })
        },
        La = Ia,
        Aa = () => {
          const a = (() => {
            const a = (0, r.A)(),
              [e] = (0, l.getLocale)();
            return (t, n) => {
              if (!t.path) return t.domain;
              const s = [
                  ["username", n]
                ],
                o = ((a, e) => e.filter((([, a]) => Boolean(a))).reduce(((a, [e, t]) => a.replaceAll(`{${e}}`, t)), a))(t.path, s),
                i = "www" === t.domain && "www" !== a.currentSite?.site ? ((a, e) => {
                  if (!e || e.iso === l.englishLocale.iso) return a;
                  const t = e.subdomaincom;
                  return "/" === a[0] ? t + a : `${t}/${a}`
                })(o, e) : o;
              return t.domain + i
            }
          })();
          return (e, t) => {
            const n = new URLSearchParams(t.params),
              s = t.path?.replace("{term}", e);
            n.forEach(((a, t) => {
              "{query}" === a && n.set(t, e)
            }));
            const o = n.toString() ? `?${n.toString()}` : "",
              i = {
                domain: t.domain,
                path: s + o
              },
              r = a(i, "");
            if (r) return r;
            console.error(`No search url could be constructed from ${t.domain} and ${t.path}`)
          }
        };
      var Sa = t(50097);
      const ja = ({
          globalNavLoaderComponent: a,
          globalNavComponent: e,
          locale: t,
          username: d,
          userProfileLink: g,
          hasNotifications: _,
          ...m
        }) => {
          const v = (0, l.useIntl)(),
            u = (0, r.A)();
          let p;
          p = ((a, e = "") => {
            const t = (0, r.A)(),
              n = a.subdomaincom,
              s = (a, t) => t?.requiresAuth && !e ? a : [...a, o(t)],
              o = a => {
                const o = t.currentSite?.site !== r.C.www && a.location?.domain === r.C.www && "en" !== n,
                  i = a.location?.path.replace("{username}", e);
                return {
                  ...a,
                  ...a.children ? {
                    children: a.children.reduce(s, [])
                  } : {},
                  ...a.targets ? {
                    targets: a.targets.reduce(s, [])
                  } : {},
                  ...a.location ? {
                    location: {
                      ...a.location,
                      path: o && i ? ia(i, n) : i,
                      domain: t?.currentSite ? ra(a.location.domain, t.currentSite.site) : ""
                    }
                  } : {}
                }
              };
            return a => o(a)
          })(t, d);
          const f = Aa(),
            [h, b] = (0, i.useState)(""),
            M = a,
            w = (a => ({
              targets: [{
                text: a.formatMessage(c.search_target_games),
                gaText: c.search_target_games.defaultMessage,
                tab: "games",
                value: "games",
                type: "",
                location: {
                  domain: r.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "games"
                  }
                },
                searchOptions: sa
              }, {
                text: a.formatMessage(c.search_target_posts),
                gaText: c.search_target_posts.defaultMessage,
                tab: "posts",
                value: "posts",
                type: "",
                location: {
                  domain: r.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "posts"
                  }
                },
                searchOptions: sa
              }, {
                text: a.formatMessage(c.search_target_videos),
                gaText: c.search_target_videos.defaultMessage,
                tab: "videos",
                value: "videos",
                type: "",
                location: {
                  domain: r.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "videos"
                  }
                },
                searchOptions: sa
              }, {
                text: a.formatMessage(c.search_target_community),
                gaText: c.search_target_community.defaultMessage,
                tab: "socialClub",
                value: "socialClub",
                type: "nav-dropdown",
                targets: [{
                  text: a.formatMessage(c.search_target_users),
                  gaText: c.search_target_users.defaultMessage,
                  value: "community-users",
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/members/{term}"
                  },
                  searchOptions: sa
                }, {
                  text: a.formatMessage(c.search_target_crews),
                  gaText: c.search_target_crews.defaultMessage,
                  value: "community-crews",
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/crews/{term}"
                  },
                  searchOptions: sa
                }, {
                  text: a.formatMessage(c.search_target_jobs),
                  gaText: c.search_target_jobs.defaultMessage,
                  value: "community-jobs",
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/jobs/{term}"
                  },
                  searchOptions: sa
                }]
              }]
            }))(v),
            [x, k] = (0, i.useState)(window.innerWidth < 1024),
            {
              rsg: y,
              ...C
            } = n,
            T = Object.values({
              ...C,
              rsg: y
            }).map((a => a(v))),
            G = (0, i.useMemo)((() => {
              const a = u.currentSite?.site,
                e = y(v).links;
              return T.reduce(((t, n) => {
                if (!u.currentSite?.site || !n?.appearancePaths?.[u.currentSite.site]) return t;
                const s = ((a, e, t, n) => a && 0 !== a.length || "www" !== t || !n ? a : e)(n.links, e, a, x);
                return [...t, {
                  ...n,
                  appearancePaths: u.currentSite?.site ? n?.appearancePaths?.[u.currentSite.site] : [],
                  links: s.map(p),
                  cta: n.cta && p(n.cta)
                }]
              }), [])
            }), [x, T]),
            I = (0, i.useMemo)((() => ({
              ...w,
              targets: w.targets.map(p)
            })), [w, p]),
            L = (0, i.useMemo)((() => (a => ({
              quickMenuHome: a.formatMessage(Sa.A.nav_quick_access_home),
              quickMenuGames: a.formatMessage(Sa.A.nav_quick_access_games),
              quickMenuNewswire: a.formatMessage(Sa.A.nav_quick_access_newswire),
              avatarMenuSelectLanguage: a.formatMessage(Sa.A.avatarmenu_selectlanguage),
              avatarMenuSignIn: a.formatMessage(Sa.A.avatarmenu_signin),
              avatarMenuSignUp: a.formatMessage(Sa.A.avatarmenu_signup),
              avatarMenuSignOut: a.formatMessage(Sa.A.avatarmenu_logout)
            }))(v)), []),
            A = (a, e) => {
              let t, n = "";
              const s = new URLSearchParams(a);
              if (new URLSearchParams(e).forEach(((a, e) => {
                  const o = s.get(e);
                  "{query}" === a && o ? (t = !0, n = o) : t = o === a && !1 !== t
                })), t) return n
            },
            S = (a, e) => {
              if (!e) return !1;
              const t = a.split(/[/?]+/),
                n = e.split(/[/?]+/);
              if (n.every(((a, e) => a === t[e] || "{term}" === a || "" === a))) {
                const a = n.findIndex((a => "{term}" === a));
                if (a) return t[a]
              }
              return ""
            },
            j = (0, i.useCallback)((() => {
              let a, e = "";
              const {
                pathname: t,
                search: n
              } = window.location;
              return I.targets.findIndex((s => {
                if ("" === s.type && s.location) {
                  if (s.location.path && t.startsWith(s.location.path)) {
                    const t = A(n, s.location.params);
                    if (t) return e = t, a = s, !0
                  }
                  if (!s.location.params) {
                    const n = S(t, s.location.path);
                    if (n) return e = n, a = s, !0
                  }
                }
                if ("nav-dropdown" === s.type) {
                  const o = s.targets?.findIndex((s => {
                    if ("" === s.type) {
                      if (s.location.path && t.startsWith(s.location.path)) {
                        const t = A(n, s.location.params);
                        if (t) return e = t, a = s, !0
                      }
                      const o = S(t, s.location.path);
                      if (o) return e = o, a = s, !0
                    }
                    return !1
                  }));
                  return Boolean(o) && o >= 0
                }
              })), [e, a]
            }), [I]),
            N = (0, i.useCallback)(((a, e) => {
              let t;
              return a.forEach((a => {
                if ("nav-dropdown" === a.type) {
                  const n = N(a.targets, e);
                  n && (t = n)
                } else a.value === e && (t = a)
              })), t
            }), [I]),
            P = (0, i.useCallback)((a => {
              if ("" === a) return !1;
              const e = na?.(a);
              return a.split(/\s+/).every((a => a.length < 3)) ? (b(v.formatMessage(Sa.A.nav_search_error_too_short, {
                count: 3
              })), !1) : e ? (b(v.formatMessage(Sa.A.nav_search_error_invalid_chars, {
                invalidChars: [...new Set(e)].join(", ")
              })), !1) : (b(""), !0)
            }), []),
            B = (0, i.useCallback)(((a, e) => {
              if (P(a) && e) {
                const t = N(I.targets, e);
                return t ? f(a, t.location) : null
              }
            }), [I]),
            R = (0, i.useMemo)((() => ({
              loggedInLinks: ca(v, d, g, _).map(p),
              helpItem: p(_a(v))
            })), [v, d, g, _]);
          return (0, i.useEffect)((() => {
            const a = () => {
              k(window.innerWidth < 1024)
            };
            return window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }), []), (0, o.jsx)(M, {
            navigationData: G,
            locale: t,
            globalNavigationComponent: e,
            searchConfig: I,
            gamesMenuComponent: s,
            avatarMenuData: R,
            onSearch: B,
            getQueryFromUrl: j,
            errorMessage: h,
            localisedStrings: L,
            ...m
          })
        },
        Na = (0, l.withIntl)((({
          globalNavLoaderComponent: a,
          globalNavComponent: e,
          username: t,
          userProfileLink: n,
          hasNotifications: s,
          ...i
        }) => {
          const [r] = (0, l.getLocale)();
          return a ? (0, o.jsx)(ja, {
            globalNavLoaderComponent: a,
            globalNavComponent: e,
            locale: r,
            username: t,
            userProfileLink: n,
            hasNotifications: s,
            ...i
          }) : null
        }), da)
    },
    94222: a => {
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg"
    }
  }
]);