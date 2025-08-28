try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "283664a9-cccd-45fd-b846-e97d8942d0cd", e._sentryDebugIdIdentifier = "sentry-dbid-283664a9-cccd-45fd-b846-e97d8942d0cd")
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
  [1925], {
    10046: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    10201: (e, a, t) => {
      t.d(a, {
        PY: () => v,
        Y9: () => u,
        bL: () => f
      });
      var s = t(71127),
        n = t(14869),
        o = (t(79952), t(81788)),
        r = t(74482);
      var i = t(70954);
      const d = () => {
        const e = (0, s.useRef)(null);
        return (0, i.jsx)("button", {
          ref: e,
          className: "rockstargames-modules-core-headerc95fa2303ee2096feb04a8cd9d2a5a4b",
          onClick: () => {
            const a = document.querySelector(".siteHeaderContainer");
            if (window?.__spatialNavigation__?.enableExperimentalAPIs(!0), a && window?.__spatialNavigation__) {
              const t = window?.__spatialNavigation__?.findCandidates(a, "down", {
                  mode: "all"
                }),
                s = t.filter((t => !a.contains(t) && e.current !== t));
              s.length > 0 && s[0].focus()
            }
          },
          children: (0, i.jsx)(o.FormattedMessage, {
            ...r.A.accessibility_skip_button
          })
        })
      };
      var l = t(24036),
        g = t.n(l),
        c = t(52542),
        _ = t(63582);
      let m;
      m = {
        pillBtn: "rockstargames-modules-core-headerb3978c01af4cdbe62e1bd704f1e5642a",
        selected: "rockstargames-modules-core-headerd89d3d1eec6c5bd71ccb21cee0ab387a",
        globalNavigationRoot: "rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e",
        large: "rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c",
        badge: "rockstargames-modules-core-headerd9f1030abbf43b4dca938748cd2971f6",
        globalNavigationSpacer: "rockstargames-modules-core-headerde436e3db259eb0f31d67c3597d8b8fd",
        globalNavigationSearchSpacer: "rockstargames-modules-core-headerf5becd5edc3ccc807f80e476aaf0a923",
        globalNavigationContainer: "rockstargames-modules-core-headercdf77b768c87c4f69cdc9f249e664436",
        header: "rockstargames-modules-core-headerb6b45ba1e342fd31738d08621f64dcf4",
        fluid: "rockstargames-modules-core-headera5621119fecf77af162314e4f58e3bf4",
        fixed: "rockstargames-modules-core-headerb0b5cfbe2c5745a3dae3bc5d2a659d0c",
        title: "rockstargames-modules-core-headere3074d7d0504de5ecbc3f71e8ff47931",
        quickAccessWrapper: "rockstargames-modules-core-headera0ac1e76ac3363eae9fc0b8dc016c4f6"
      };
      const u = e => {
          let {
            children: a
          } = e;
          return (0, i.jsx)("header", {
            className: g()(m.header, m.fixed),
            children: a
          })
        },
        v = (0, s.createContext)({
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
        f = (0, o.withIntl)((e => {
          let {
            children: a,
            brand: t
          } = e;
          const [r, l] = (0, s.useState)(!1), [c, u] = (0, s.useState)(!0), [f, h] = (0, s.useState)(!1), b = (0, s.useRef)(null), M = (0, s.useRef)(null), [w, y] = (0, s.useState)(null), [{
            iso: x
          }] = (0, o.getLocale)();
          return (0, s.useEffect)((() => {
            let e = window.scrollY;
            const a = () => {
                const a = window.scrollY > 140,
                  t = window.scrollY > e;
                l(a && t), e = window.scrollY
              },
              t = () => {
                u(0 === window.scrollY)
              };
            return window.addEventListener("scroll", a), window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", a), window.removeEventListener("scroll", t)
            }
          }), [r]), (0, s.useEffect)((() => {
            const e = "data-show-more-content";
            r ? document.body.setAttribute(e, "") : document.body.removeAttribute(e)
          }), [r]), (0, i.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            children: (0, i.jsx)("div", {
              ref: y,
              children: w && (0, i.jsx)(n.NP, {
                colorScheme: "dark",
                defaultColorScheme: "dark",
                defaultContrastMode: "normal",
                defaultPlatformScale: "desktop",
                container: w,
                children: (0, i.jsx)(v.Provider, {
                  value: {
                    brand: t,
                    isNavHidden: r,
                    containerRef: b,
                    setForceBackground: h
                  },
                  children: (0, i.jsxs)("div", {
                    className: g()(m.globalNavigationRoot, m.globalNavVars),
                    ref: b,
                    lang: x,
                    children: [(0, i.jsx)(d, {}), (0, i.jsx)("div", {
                      className: m.globalNavigationSpacer
                    }), (0, i.jsx)(_.motion.div, {
                      ref: M,
                      className: m.globalNavigationContainer,
                      variants: p,
                      initial: "visible",
                      animate: r ? "hidden" : "visible",
                      "data-ishidden": r,
                      "data-testid": "globalnav__container",
                      children: a
                    })]
                  })
                })
              })
            })
          })
        }), c)
    },
    21315: (e, a, t) => {
      t.d(a, {
        Jv: () => C,
        QY: () => w,
        VO: () => N,
        Kr: () => I,
        lt: () => S,
        bA: () => L,
        cu: () => j
      });
      var s = t(71127),
        n = t(42638),
        o = t(61339),
        r = t(24780),
        i = t(63694),
        d = t(63582),
        l = t(81788),
        g = t(61225),
        c = t(10201),
        _ = t(46690),
        m = t(74482),
        u = t(54094),
        v = t(24036),
        p = t.n(v),
        f = t(34902);
      var h = t(70954);
      const b = e => {
        let {
          children: a,
          className: t,
          ...n
        } = e;
        const {
          containerRef: o
        } = (0, s.useContext)(c.PY);
        return (0, h.jsx)(f.Root, {
          className: p()("rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563", t),
          container: o?.current,
          ...n,
          children: a
        })
      };
      let M = {
        pillBtn: "rockstargames-modules-core-headerff5e3320dd70a4dcaccbe336302b4714",
        selected: "rockstargames-modules-core-headercb3e82faf685657df2d72233f5467a60",
        avatarMenu: "rockstargames-modules-core-headerc21d08286895e5d5d2fc1a7586c6a11d",
        avatarMenuContent: "rockstargames-modules-core-headerfbdd0b16d9b61ed0dd3f5e76b9a1f9de",
        avatarMenuMobile: "rockstargames-modules-core-headerb68abcf23dae4ff8aa054bd9ff446a9a",
        avatarMenuContentMobile: "rockstargames-modules-core-headereef2738c4b5cf2f7e69238683d6d503f",
        dragHandleBtn: "rockstargames-modules-core-headeredeb54ea736b008d967474a5c9b63a33",
        dragHandle: "rockstargames-modules-core-headerbe1cd057f4c550474a77b822a5eb729e",
        scAvatarBtn: "rockstargames-modules-core-headerb82b1a7297d0e2f91a3ac183adcb21c4",
        scAvatarBtnUser: "rockstargames-modules-core-headerfa4a01e9a53561bce475cd223f7cafe1",
        avatarMenuSection: "rockstargames-modules-core-headerf43b908943d5a326555406c89c919f3a",
        avatarMenuSectionHeader: "rockstargames-modules-core-headerc63374d1c5bca5343c48709064ac9ecc",
        avatarMenuSectionHeaderDropdown: "rockstargames-modules-core-headerc2907f284a3a3dd7c419856bdb6a99ee",
        avatarDropdownChevron: "rockstargames-modules-core-headerda0dbf9fd75e574727b5d795d7681bfd",
        avatarMenuLanguageLabel: "rockstargames-modules-core-headerad542b51868c54065401d2ccb5f6159f"
      };
      const w = (0, s.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        y = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        x = {
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
        k = {
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
        C = e => {
          let {
            avatarIconUrl: a,
            nickname: u,
            isLoggedIn: v,
            children: p
          } = e;
          const f = (0, l.useIntl)(),
            x = t(10046),
            [C, T] = (0, s.useState)(!1),
            [I, L] = (0, s.useState)(!1),
            [j, S] = (0, s.useState)(["open"]),
            {
              isNavHidden: N
            } = (0, s.useContext)(c.PY),
            P = e => {
              const a = ["open", ...e.filter((e => "open" !== e))];
              S(a)
            },
            B = () => {
              T(!1), L(!1)
            };
          return (0, s.useEffect)((() => {
            N && B()
          }), [N]), (0, h.jsxs)(w.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: j,
              closeAvatarMenu: B
            },
            children: [(0, h.jsx)(n.Root, {
              open: C,
              onOpenChange: T,
              children: (0, h.jsx)(_.E, {
                showOn: "desktop",
                children: (0, h.jsxs)("div", {
                  className: M.avatarMenu,
                  children: [(0, h.jsx)(n.Trigger, {
                    asChild: !0,
                    children: (0, h.jsx)("button", {
                      className: M.scAvatarBtn,
                      "aria-label": f.formatMessage(C ? m.A.avatar_menu_close : m.A.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": v,
                      children: (0, h.jsx)("img", {
                        className: M.scAvatarBtnUser,
                        src: a || x,
                        alt: u
                      })
                    })
                  }), (0, h.jsx)(d.AnimatePresence, {
                    children: C && (0, h.jsx)(n.Content, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      children: (0, h.jsx)(d.motion.div, {
                        variants: y,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, h.jsx)(o.Root, {
                          type: "multiple",
                          value: j,
                          onValueChange: P,
                          children: (0, h.jsx)(g.aC, {
                            className: M.avatarMenuContent,
                            children: p
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, h.jsx)(r.Root, {
              open: I,
              onOpenChange: L,
              children: (0, h.jsx)(_.E, {
                showOn: "mobile",
                children: (0, h.jsxs)("div", {
                  className: M.avatarMenu,
                  children: [(0, h.jsx)(r.Trigger, {
                    className: M.scAvatarBtn,
                    "aria-label": f.formatMessage(I ? m.A.avatar_menu_close : m.A.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": v,
                    children: (0, h.jsx)("button", {
                      className: M.scAvatarBtn,
                      "aria-label": f.formatMessage(C ? m.A.avatar_menu_close : m.A.avatar_menu_open),
                      children: (0, h.jsx)("img", {
                        className: M.scAvatarBtnUser,
                        src: a || x
                      })
                    })
                  }), (0, h.jsx)(d.AnimatePresence, {
                    children: I && (0, h.jsx)(b, {
                      asChild: !0,
                      children: (0, h.jsxs)(r.Content, {
                        forceMount: !0,
                        children: [(0, h.jsxs)(i.VisuallyHidden, {
                          children: [(0, h.jsx)(r.Title, {
                            children: f.formatMessage(m.A.nav_avatarmenu_title)
                          }), (0, h.jsx)(r.Description, {
                            children: f.formatMessage(m.A.nav_avatarmenu_title)
                          })]
                        }), (0, h.jsxs)(d.motion.div, {
                          variants: k,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: M.avatarMenuMobile,
                          children: [(0, h.jsx)(r.Close, {
                            className: M.dragHandleBtn,
                            "aria-label": f.formatMessage(m.A.avatar_menu_close),
                            children: (0, h.jsx)("div", {
                              className: M.dragHandle
                            })
                          }), (0, h.jsx)(o.Root, {
                            type: "multiple",
                            value: j,
                            onValueChange: P,
                            children: (0, h.jsx)(g.aC, {
                              className: M.avatarMenuContentMobile,
                              children: p
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
        T = (0, s.createContext)({
          avatarMenuItemId: ""
        }),
        I = e => {
          let {
            children: a,
            value: t
          } = e;
          const n = (0, s.useId)();
          return (0, h.jsx)(T.Provider, {
            value: {
              avatarMenuItemId: t || n
            },
            children: (0, h.jsx)(o.Item, {
              value: t || n,
              className: M.avatarMenuSection,
              children: a
            })
          })
        },
        L = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, h.jsx)(o.Header, {
            asChild: !0,
            children: (0, h.jsx)("li", {
              className: M.listItem,
              children: (0, h.jsx)(o.Trigger, {
                className: M.avatarMenuSectionHeader,
                ...t,
                children: a
              })
            })
          })
        },
        j = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, h.jsx)(o.Header, {
            style: {
              margin: 0
            },
            children: (0, h.jsxs)(o.Trigger, {
              className: M.avatarMenuSectionHeaderDropdown,
              "data-testid": "header-language-selector-button",
              ...t,
              children: [a, (0, h.jsx)("img", {
                src: u.br,
                className: M.avatarDropdownChevron,
                alt: ""
              })]
            })
          })
        },
        S = e => {
          let {
            children: a,
            ...t
          } = e;
          const {
            avatarMenuOpenItems: n
          } = (0, s.useContext)(w), {
            avatarMenuItemId: r
          } = (0, s.useContext)(T), i = n.indexOf(r) >= 0;
          return (0, h.jsx)(o.Content, {
            forceMount: !0,
            asChild: !0,
            ...t,
            children: (0, h.jsx)(d.motion.div, {
              variants: x,
              initial: "closed",
              animate: i ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: a
            })
          })
        },
        N = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, h.jsx)("div", {
            className: M.avatarMenuLanguageLabel,
            ...t,
            children: a
          })
        }
    },
    42549: (e, a, t) => {
      t.d(a, {
        B: () => v,
        s: () => u
      });
      var s = t(71127),
        n = t(73012),
        o = t(63582),
        r = t(49928),
        i = t(24036),
        d = t.n(i),
        l = t(9046),
        g = t(70954);
      let c = "rockstargames-modules-core-headeredd6d5149d36c2b3d89460393482b5a1",
        _ = "rockstargames-modules-core-headera0afcf77006159d689145a562371f6af",
        m = "rockstargames-modules-core-headeree781136421e86f1ba76f28f45009bfd";
      const u = (0, s.createContext)({
          inQuickMenu: !1
        }),
        v = e => {
          let {
            children: a
          } = e;
          const {
            inMobileMenu: t
          } = (0, s.useContext)(n.xN), i = {
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
          }, v = d()(c, t ? _ : m);
          return t ? (0, g.jsx)(u.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, g.jsx)(l.Root, {
              asChild: !0,
              children: (0, g.jsx)(o.motion.div, {
                variants: i,
                className: v,
                children: a
              })
            })
          }) : (0, g.jsx)(u.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, g.jsx)(l.Root, {
              asChild: !0,
              children: (0, g.jsx)("div", {
                className: v,
                children: a
              })
            })
          })
        }
    },
    44886: (e, a, t) => {
      t.d(a, {
        A: () => Be
      });
      var s = {};
      t.r(s), t.d(s, {
        beaterator: () => i,
        bully: () => c,
        careers: () => _,
        gta: () => m,
        gta2: () => u,
        gta3: () => v,
        gta4: () => p,
        gta5: () => f,
        gtaAdvance: () => h,
        gtaCtw: () => b,
        gtaIvEflc: () => M,
        gtaLcs: () => w,
        gtaLondon: () => y,
        gtaOnline: () => x,
        gtaPlus: () => k,
        gtaSanAndreas: () => C,
        gtaTrilogy: () => T,
        gtaVc: () => I,
        gtaVcs: () => L,
        laNoire: () => j,
        manhunt: () => S,
        manhunt2: () => N,
        maxPayne: () => P,
        maxPayne2: () => B,
        maxPayne3: () => A,
        midnightclub: () => R,
        midnightclub2: () => D,
        midnightclub3: () => O,
        midnightclubStreetRacing: () => z,
        oni: () => G,
        readDeadOnline: () => E,
        redDeadRedemption: () => V,
        redDeadRedemption2: () => q,
        redDeadRedemptionUndeadNightmare: () => H,
        redDeadRevolver: () => $,
        rsg: () => F,
        skateAndDestroy: () => J,
        smugglersRun: () => W,
        smugglersRun2: () => U,
        smugglersRunWarzones: () => Q,
        stateOfEmergency: () => Y,
        tableTennis: () => Z,
        theItalianJob: () => K,
        theWarriors: () => X,
        wildMetal: () => ee
      });
      var n = {};
      t.r(n), t.d(n, {
        GamesMenu: () => Te,
        GamesMenuItem: () => Ie,
        default: () => je
      });
      var o = t(71127),
        r = t(32779);
      const i = () => ({
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
      var d = t(81788);
      const l = (0, d.defineMessages)({
          nav_rockstargames_home: {
            id: "nav_rockstargames_home",
            defaultMessage: "Rockstar Games Home"
          },
          nav_rockstargames_logo: {
            id: "nav_rockstargames_logo",
            defaultMessage: "Click to open menu"
          },
          nav_gtao_overview: {
            id: "nav_gtao_overview",
            defaultMessage: "Overview"
          },
          nav_gtao_gtao: {
            id: "nav_gtao_gtao",
            defaultMessage: "GTA Online"
          },
          nav_gtao_discover: {
            id: "nav_gtao_discover",
            defaultMessage: "Discover"
          },
          nav_gtao_my_character: {
            id: "nav_gtao_my_character",
            defaultMessage: "My Character"
          },
          nav_gtao_twitch_drops: {
            id: "nav_gtao_twitch_drops",
            defaultMessage: "Twitch Drops"
          },
          nav_gtao_career_progress: {
            id: "nav_gtao_career_progress",
            defaultMessage: "Career Progress"
          },
          nav_gtao_guides: {
            id: "nav_gtao_guides",
            defaultMessage: "Guides"
          },
          nav_gtao_license_plate_creator: {
            id: "nav_gtao_license_plate_creator",
            defaultMessage: "License Plate Creator"
          },
          nav_gtao_story: {
            id: "nav_gtao_story",
            defaultMessage: "Story"
          },
          nav_gtao_stats: {
            id: "nav_gtao_stats",
            defaultMessage: "Stats"
          },
          nav_gtao_missions: {
            id: "nav_gtao_missions",
            defaultMessage: "Missions"
          },
          nav_gtao_checklist: {
            id: "nav_gtao_checklist",
            defaultMessage: "Checklist"
          },
          nav_gtao_accomplishments: {
            id: "nav_gtao_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtao_gta_plus: {
            id: "nav_gtao_gta_plus",
            defaultMessage: "GTA+"
          },
          nav_gtao_community: {
            id: "nav_gtao_community",
            defaultMessage: "Community"
          },
          nav_gtao_jobs: {
            id: "nav_gtao_jobs",
            defaultMessage: "Jobs"
          },
          nav_gtao_community_series: {
            id: "nav_gtao_community_series",
            defaultMessage: "Community Series"
          },
          nav_gtao_my_jobs: {
            id: "nav_gtao_my_jobs",
            defaultMessage: "My Jobs"
          },
          nav_gtao_jobs_browse_all: {
            id: "nav_gtao_jobs_browse_all",
            defaultMessage: "Browse All Jobs"
          },
          nav_gtao_crews: {
            id: "nav_gtao_crews",
            defaultMessage: "Crews"
          },
          nav_gtao_my_crews: {
            id: "nav_gtao_my_crews",
            defaultMessage: "My Crews"
          },
          nav_gtao_browse_crews: {
            id: "nav_gtao_browse_crews",
            defaultMessage: "Browse All Crews"
          },
          nav_gtao_crews_create: {
            id: "nav_gtao_crews_create",
            defaultMessage: "Create a Crew"
          },
          nav_gtao_emblem_editor: {
            id: "nav_gtao_emblem_editor",
            defaultMessage: "Emblem Editor"
          },
          nav_gtao_jobs_playlists: {
            id: "nav_gtao_jobs_playlists",
            defaultMessage: "Playlists"
          },
          nav_gtao_photos: {
            id: "nav_gtao_photos",
            defaultMessage: "Photos"
          },
          nav_gtao_videos: {
            id: "nav_gtao_videos",
            defaultMessage: "Videos"
          },
          nav_gtao_support: {
            id: "nav_gtao_support",
            defaultMessage: "Support"
          },
          nav_gtao_cta_buy_now: {
            id: "nav_gtao_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gta_trilogy_overview: {
            id: "nav_gta_trilogy_overview",
            defaultMessage: "Overview"
          },
          nav_gta_trilogy_accomplishments: {
            id: "nav_gta_trilogy_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gta_trilogy_gtasa: {
            id: "nav_gta_trilogy_gtasa",
            defaultMessage: "GTA: San Andreas"
          },
          nav_gta_trilogy_gtavc: {
            id: "nav_gta_trilogy_gtavc",
            defaultMessage: "GTA: Vice City"
          },
          nav_gta_trilogy_gta3: {
            id: "nav_gta_trilogy_gta3",
            defaultMessage: "GTA III"
          },
          nav_gta_trilogy_support: {
            id: "nav_gta_trilogy_support",
            defaultMessage: "Support"
          },
          nav_gta_trilogy_cta_buy_now: {
            id: "nav_gta_trilogy_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_bully_game_overview: {
            id: "nav_bully_game_overview",
            defaultMessage: "Discover"
          },
          nav_bully_videos: {
            id: "nav_bully_videos",
            defaultMessage: "Videos"
          },
          nav_bully_accomplishments: {
            id: "nav_bully_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_bully_support: {
            id: "nav_bully_Overview",
            defaultMessage: "Support"
          },
          nav_bully_cta_buy_now: {
            id: "nav_bully_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rsg_games: {
            id: "nav_rsg_games",
            defaultMessage: "Games"
          },
          nav_rsg_newswire: {
            id: "nav_rsg_newswire",
            defaultMessage: "Newswire"
          },
          nav_rsg_videos: {
            id: "nav_rsg_videos",
            defaultMessage: "Videos"
          },
          nav_rsg_downloads: {
            id: "nav_rsg_downloads",
            defaultMessage: "Downloads"
          },
          nav_rsg_store: {
            id: "nav_rsg_store",
            defaultMessage: "Store"
          },
          nav_rsg_support: {
            id: "nav_rsg_support",
            defaultMessage: "Support"
          },
          nav_rsg_community_guidelines: {
            id: "nav_rsg_community_guidelines",
            defaultMessage: "Community Guidelines"
          },
          nav_rsg_cta_get_launcher: {
            id: "nav_cta_get_launcher",
            defaultMessage: "Get Launcher"
          },
          nav_careers_home: {
            id: "nav_careers_home",
            defaultMessage: "Home"
          },
          nav_careers_openings: {
            id: "nav_careers_openings",
            defaultMessage: "Openings"
          },
          nav_careers_contact_us: {
            id: "nav_careers_contact_us",
            defaultMessage: "Contact us"
          },
          nav_careers_careers_on_linkedin: {
            id: "nav_careers_careers_on_linkedin",
            defaultMessage: "Careers on LinkedIn"
          },
          nav_gta3_cta_buy_now: {
            id: "nav_gta3_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtaiv_overview: {
            id: "nav_gtaiv_overview",
            defaultMessage: "Discover"
          },
          nav_gtaiv_accomplishments: {
            id: "nav_gtaiv_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiv_support: {
            id: "nav_gtaiv_support",
            defaultMessage: "Support"
          },
          nav_gtaiv_cta_buy_now: {
            id: "nav_gtaiv_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtav_overview: {
            id: "nav_gtav_overview",
            defaultMessage: "Overview"
          },
          nav_gtav_gta_online: {
            id: "nav_gtav_gta_online",
            defaultMessage: "GTA Online"
          },
          nav_gtav_discover: {
            id: "nav_gtav_discover",
            defaultMessage: "Discover"
          },
          nav_gtav_my_character: {
            id: "nav_gtav_my_character",
            defaultMessage: "My Character"
          },
          nav_gtav_guides: {
            id: "nav_gtav_guides",
            defaultMessage: "Guides"
          },
          nav_gtav_licence_plate_creator: {
            id: "nav_gtav_licence_plate_creator",
            defaultMessage: "License Plate Creator"
          },
          nav_gtav_story: {
            id: "nav_gtav_story",
            defaultMessage: "Story"
          },
          nav_gtav_stats: {
            id: "nav_gtav_stats",
            defaultMessage: "Stats"
          },
          nav_gtav_missions: {
            id: "nav_gtav_missions",
            defaultMessage: "Missions"
          },
          nav_gtav_checklist: {
            id: "nav_gtav_checklist",
            defaultMessage: "Checklist"
          },
          nav_gtav_accomplishments: {
            id: "nav_gtav_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtav_gta_plus: {
            id: "nav_gtav_gta_plus",
            defaultMessage: "GTA+"
          },
          nav_gtav_community: {
            id: "nav_gtav_community",
            defaultMessage: "Community"
          },
          nav_gtav_jobs: {
            id: "nav_gtav_jobs",
            defaultMessage: "Jobs"
          },
          nav_gtav_community_series: {
            id: "nav_gtav_community_series",
            defaultMessage: "Community Series"
          },
          nav_gtav_jobs_browse_all: {
            id: "nav_gtav_jobs_browse_all",
            defaultMessage: "Browse All Jobs"
          },
          nav_gtav_my_jobs: {
            id: "nav_gtav_my_jobs",
            defaultMessage: "My Jobs"
          },
          nav_gtav_playlists: {
            id: "nav_gtav_playlists",
            defaultMessage: "Playlists"
          },
          nav_gtav_crews: {
            id: "nav_gtav_crews",
            defaultMessage: "Crews"
          },
          nav_gtav_crews_browse_all: {
            id: "nav_gtav_crews_browse_all",
            defaultMessage: "Browse All Crews"
          },
          nav_gtav_my_crews: {
            id: "nav_gtav_my_crews",
            defaultMessage: "My Crews"
          },
          nav_gtav_create_crew: {
            id: "nav_gtav_create_crew",
            defaultMessage: "Create a Crew"
          },
          nav_gtav_emblem_editor: {
            id: "nav_gtav_emblem_editor",
            defaultMessage: "Emblem Editor"
          },
          nav_gtav_photos: {
            id: "nav_gtav_photos",
            defaultMessage: "Photos"
          },
          nav_gtav_videos: {
            id: "nav_gtav_videos",
            defaultMessage: "Videos"
          },
          nav_gtav_support: {
            id: "nav_gtav_support",
            defaultMessage: "Support"
          },
          nav_gtav_cta_buy_now: {
            id: "nav_gtav_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtaiveflc_overview: {
            id: "nav_gtaiveflc_overview",
            defaultMessage: "Overview"
          },
          nav_gtaiveflc_accomplishments: {
            id: "nav_gtaiveflc_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiveflc_support: {
            id: "nav_gtaiveflc_support",
            defaultMessage: "Support"
          },
          nav_gtaiveflc_cta_buy_now: {
            id: "nav_gtaiveflc_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtasanandreas_cta_buy_now: {
            id: "nav_gtasanandreas_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtavc_discover: {
            id: "nav_gtavc_discover",
            defaultMessage: "Discover"
          },
          nav_gtavc_cta_buy_now: {
            id: "nav_gtavc_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtavcs_discover: {
            id: "nav_gtavcs_discover",
            defaultMessage: "Discover"
          },
          nav_lanoire_overview: {
            id: "nav_lanoire_overview",
            defaultMessage: "Overview"
          },
          nav_lanoire_official_site: {
            id: "nav_lanoire_official_site",
            defaultMessage: "Official Site"
          },
          nav_lanoire_progress: {
            id: "nav_lanoire_progress",
            defaultMessage: "Progress"
          },
          nav_lanoire_pc_console: {
            id: "nav_lanoire_pc_console",
            defaultMessage: "PC/Console"
          },
          nav_lanoire_case_tracker: {
            id: "nav_lanoire_case_tracker",
            defaultMessage: "Case Tracker"
          },
          nav_lanoire_checklist: {
            id: "nav_lanoire_checklist",
            defaultMessage: "Checklist"
          },
          nav_lanoire_stats: {
            id: "nav_lanoire_stats",
            defaultMessage: "Stats"
          },
          nav_lanoire_accomplishments: {
            id: "nav_lanoire_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_lanoire_badge_pursuit: {
            id: "nav_lanoire_badge_pursuit",
            defaultMessage: "Badge Pursuit"
          },
          nav_lanoire_vr_case_files: {
            id: "nav_lanoire_vr_case_files",
            defaultMessage: "VR Case Files"
          },
          nav_lanoire_support: {
            id: "nav_lanoire_support",
            defaultMessage: "Support"
          },
          nav_lanoire_cta_buy_now: {
            id: "nav_lanoire_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_mp3_overview: {
            id: "nav_mp3_overview",
            defaultMessage: "Overview"
          },
          nav_mp3_official_site: {
            id: "nav_mp3_official_site",
            defaultMessage: "Official Site"
          },
          nav_mp3_news: {
            id: "nav_mp3_news",
            defaultMessage: "News"
          },
          nav_mp3_progress: {
            id: "nav_mp3_progress",
            defaultMessage: "Progress"
          },
          nav_mp3_accomplishments: {
            id: "nav_mp3_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_mp3_singleplayer: {
            id: "nav_mp3_singleplayer",
            defaultMessage: "Singleplayer"
          },
          nav_mp3_multiplayer: {
            id: "nav_mp3_multiplayer",
            defaultMessage: "Multiplayer"
          },
          nav_mp3_career: {
            id: "nav_mp3_career",
            defaultMessage: "Career"
          },
          nav_mp3_checklist: {
            id: "nav_mp3_checklist",
            defaultMessage: "Checklist"
          },
          nav_mp3_grinds: {
            id: "nav_mp3_grinds",
            defaultMessage: "Grinds"
          },
          nav_mp3_weapons: {
            id: "nav_mp3_weapons",
            defaultMessage: "Weapons"
          },
          nav_mp3_chapters: {
            id: "nav_mp3_chapters",
            defaultMessage: "Chapters"
          },
          nav_mp3_leaderboards: {
            id: "nav_mp3_leaderboards",
            defaultMessage: "Leaderboards"
          },
          nav_mp3_crews: {
            id: "nav_mp3_crews",
            defaultMessage: "Crews"
          },
          nav_mp3_score_attack: {
            id: "nav_mp3_score_attack",
            defaultMessage: "Score Attack"
          },
          nav_mp3_ny_minute: {
            id: "nav_mp3_ny_minute",
            defaultMessage: "New York Minute"
          },
          nav_mp3_checkpoint_challenge: {
            id: "nav_mp3_checkpoint_challenge",
            defaultMessage: "Checkpoint Challenge"
          },
          nav_mp3_featured: {
            id: "nav_mp3_featured",
            defaultMessage: "Featured"
          },
          nav_mp3_specifications: {
            id: "nav_mp3_specifications",
            defaultMessage: "Specifications"
          },
          nav_mp3_support: {
            id: "nav_mp3_support",
            defaultMessage: "Support"
          },
          nav_mp3_cta_buy_now: {
            id: "nav_mp3_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdr_cta_buy_now: {
            id: "nav_rdr_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdo_overview: {
            id: "nav_rdo_overview",
            defaultMessage: "Overview"
          },
          nav_rdo_explore: {
            id: "nav_rdo_explore",
            defaultMessage: "Explore"
          },
          nav_rdo_getting_started: {
            id: "nav_rdo_getting_started",
            defaultMessage: "Getting Started"
          },
          nav_rdo_specialist_roles: {
            id: "nav_rdo_specialist_roles",
            defaultMessage: "Specialist Roles"
          },
          nav_rdo_story_missions: {
            id: "nav_rdo_story_missions",
            defaultMessage: "Story Missions"
          },
          nav_rdo_posses_free_roam: {
            id: "nav_rdo_posses_free_roam",
            defaultMessage: "Posses and Free Roam"
          },
          nav_rdo_competitive_series: {
            id: "nav_rdo_competitive_series",
            defaultMessage: "Competitive Series"
          },
          nav_rdo_customization: {
            id: "nav_rdo_customization",
            defaultMessage: "Customization"
          },
          nav_rdo_progression: {
            id: "nav_rdo_progression",
            defaultMessage: "Progression"
          },
          nav_rdo_progress: {
            id: "nav_rdo_progress",
            defaultMessage: "Progress"
          },
          nav_rdo_my_character: {
            id: "nav_rdo_my_character",
            defaultMessage: "My Character"
          },
          nav_rdo_roles: {
            id: "nav_rdo_roles",
            defaultMessage: "Roles"
          },
          nav_rdo_rank_unlocks: {
            id: "nav_rdo_rank_unlocks",
            defaultMessage: "Rank Unlocks"
          },
          nav_rdo_awards: {
            id: "nav_rdo_awards",
            defaultMessage: "Awards"
          },
          nav_rdo_accomplishments: {
            id: "nav_rdo_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_rdo_benefits: {
            id: "nav_rdo_benefits",
            defaultMessage: "Benefits"
          },
          nav_rdo_guides: {
            id: "nav_rdo_guides",
            defaultMessage: "Guides"
          },
          nav_rdo_club_rewards: {
            id: "nav_rdo_club_rewards",
            defaultMessage: "Club Rewards"
          },
          nav_rdo_community: {
            id: "nav_rdo_community",
            defaultMessage: "Community"
          },
          nav_rdo_posses: {
            id: "nav_rdo_posses",
            defaultMessage: "Posses"
          },
          nav_rdo_photos: {
            id: "nav_rdo_photos",
            defaultMessage: "Photos"
          },
          nav_rdo_catalogue: {
            id: "nav_rdo_catalogue",
            defaultMessage: "Catalogue"
          },
          nav_rdo_support: {
            id: "nav_rdo_support",
            defaultMessage: "Support"
          },
          nav_rdo_cta_buy_now: {
            id: "nav_rdo_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdr2_overview: {
            id: "nav_rdr2_overview",
            defaultMessage: "Overview"
          },
          nav_rdr2_explore: {
            id: "nav_rdr2_explore",
            defaultMessage: "Explore"
          },
          nav_rdr2_van_der_linde_gang: {
            id: "nav_rdr2_van_der_linde_gang",
            defaultMessage: "The Van der Linde Gang"
          },
          nav_rdr2_locations: {
            id: "nav_rdr2_locations",
            defaultMessage: "Locations"
          },
          nav_rdr2_wildlife: {
            id: "nav_rdr2_wildlife",
            defaultMessage: "Wildlife"
          },
          nav_rdr2_weaponry: {
            id: "nav_rdr2_weaponry",
            defaultMessage: "Weaponry"
          },
          nav_rdr2_progress: {
            id: "nav_rdr2_progress",
            defaultMessage: "Progress"
          },
          nav_rdr2_stats: {
            id: "nav_rdr2_stats",
            defaultMessage: "Stats"
          },
          nav_rdr2_chapters: {
            id: "nav_rdr2_chapters",
            defaultMessage: "Chapters"
          },
          nav_rdr2_challenges: {
            id: "nav_rdr2_challenges",
            defaultMessage: "Challenges"
          },
          nav_rdr2_character: {
            id: "nav_rdr2_character",
            defaultMessage: "Character"
          },
          nav_rdr2_compendium: {
            id: "nav_rdr2_compendium",
            defaultMessage: "Compendium"
          },
          nav_rdr2_accomplishments: {
            id: "nav_rdr2_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_rdr2_media: {
            id: "nav_rdr2_media",
            defaultMessage: "Media"
          },
          nav_rdr2_gallery: {
            id: "nav_rdr2_gallery",
            defaultMessage: "Gallery"
          },
          nav_rdr2_artwork: {
            id: "nav_rdr2_artwork",
            defaultMessage: "Artwork"
          },
          nav_rdr2_videos: {
            id: "nav_rdr2_videos",
            defaultMessage: "Videos"
          },
          nav_rdr2_music: {
            id: "nav_rdr2_music",
            defaultMessage: "Music"
          },
          nav_rdr2_online: {
            id: "nav_rdr2_online",
            defaultMessage: "Online"
          },
          nav_rdr2_catalogue: {
            id: "nav_rdr2_catalogue",
            defaultMessage: "Catalogue"
          },
          nav_rdr2_support: {
            id: "nav_rdr2_support",
            defaultMessage: "Support"
          },
          nav_rdr2_cta_buy_now: {
            id: "nav_rdr2_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_discover: {
            id: "nav_undeadnightmare_discover",
            defaultMessage: "Discover"
          },
          nav_undeadnightmare_info: {
            id: "nav_undeadnightmare_info",
            defaultMessage: "Info"
          },
          nav_undeadnightmare_media: {
            id: "nav_undeadnightmare_media",
            defaultMessage: "Media"
          },
          nav_undeadnightmare_videos: {
            id: "nav_undeadnightmare_videos",
            defaultMessage: "Videos"
          },
          nav_undeadnightmare_gallery: {
            id: "nav_undeadnightmare_gallery",
            defaultMessage: "Gallery"
          },
          nav_undeadnightmare_news: {
            id: "nav_undeadnightmare_news",
            defaultMessage: "News"
          },
          nav_undeadnightmare_specs: {
            id: "nav_undeadnightmare_specs",
            defaultMessage: "Specifications"
          },
          nav_undeadnightmare_suport: {
            id: "nav_undeadnightmare_suport",
            defaultMessage: "Support"
          },
          nav_undeadnightmare_buy_now: {
            id: "nav_undeadnightmare_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_ps3_digital: {
            id: "nav_undeadnightmare_ps3_digital",
            defaultMessage: "PS3 - Digital"
          },
          nav_undeadnightmare_xbox360_digital: {
            id: "nav_undeadnightmare_xbox360_digital",
            defaultMessage: "Xbox 360 - Digital"
          },
          nav_support_home: {
            id: "nav_support_home",
            defaultMessage: "Home"
          },
          nav_support_service_status: {
            id: "nav_support_service_status",
            defaultMessage: "Service Status"
          },
          nav_support_submit_ticket: {
            id: "nav_support_submit_ticket",
            defaultMessage: "Submit a Ticket"
          },
          nav_support_dashboard: {
            id: "nav_support_dashboard",
            defaultMessage: "My Dashboard"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            defaultMessage: "View All"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr_online: {
            id: "games_menu_rdr_online",
            defaultMessage: "Red Dead Online"
          },
          nav_thewarriors_cta_buy_now: {
            id: "nav_thewarriors_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          search_action: {
            id: "search_action",
            defaultMessage: "Search"
          },
          search_open_button: {
            id: "search_open_button",
            defaultMessage: "Open Search"
          },
          search_close_button: {
            id: "search_close_button",
            defaultMessage: "Close Search"
          },
          search_placeholder: {
            id: "search_placeholder",
            defaultMessage: "Search Rockstar Games..."
          },
          search_target_aria_label: {
            id: "search_target_aria_label",
            defaultMessage: "Search {target}"
          },
          search_target_games: {
            id: "search_target_games",
            defaultMessage: "Games"
          },
          search_target_posts: {
            id: "search_target_posts",
            defaultMessage: "Posts"
          },
          search_target_videos: {
            id: "search_target_videos",
            defaultMessage: "Videos"
          },
          search_target_community: {
            id: "search_target_community",
            defaultMessage: "Community"
          },
          search_target_users: {
            id: "search_target_users",
            defaultMessage: "Users"
          },
          search_target_crews: {
            id: "search_target_crews",
            defaultMessage: "Crews"
          },
          search_target_jobs: {
            id: "search_target_jobs",
            defaultMessage: "Jobs"
          },
          sc_link_account: {
            id: "sc_link_account",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            defaultMessage: "View My Profile"
          },
          sc_link_messages: {
            id: "sc_link_messages",
            defaultMessage: "Messages"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            defaultMessage: "Find Friends"
          },
          sc_link_settings: {
            id: "sc_link_settings",
            defaultMessage: "Settings"
          },
          sc_link_help: {
            id: "sc_link_help",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            defaultMessage: "Do Not Sell or Share My Personal Information"
          },
          nofications_new: {
            id: "nofications_new",
            defaultMessage: "New notifications"
          }
        }),
        g = r.C.www,
        c = e => ({
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
            text: e.formatMessage(l.nav_bully_game_overview),
            gaText: l.nav_bully_game_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: e.formatMessage(l.nav_bully_accomplishments),
            gaText: l.nav_bully_accomplishments.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: e.formatMessage(l.nav_bully_support),
            gaText: l.nav_bully_support.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: e.formatMessage(l.nav_bully_cta_buy_now),
            gaText: l.nav_bully_cta_buy_now.defaultMessage,
            location: {
              domain: g,
              path: "/bully/?section=order"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        }),
        _ = e => ({
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
            text: e.formatMessage(l.nav_careers_home),
            gaText: l.nav_careers_home.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/careers"
            },
            dataTestId: "careersLink"
          }, {
            text: e.formatMessage(l.nav_careers_openings),
            gaText: l.nav_careers_openings.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/careers/openings"
            },
            dataTestId: "careersOpeningsLink"
          }, {
            text: e.formatMessage(l.nav_careers_contact_us),
            gaText: l.nav_careers_contact_us.defaultMessage,
            type: "nav-no-link",
            dataTestId: "careersContactUsLink"
          }, {
            text: e.formatMessage(l.nav_careers_careers_on_linkedin),
            gaText: l.nav_careers_careers_on_linkedin.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: "https://linkedin.com",
              path: "/company/rockstar-games/"
            },
            dataTestId: "careersLinkedInLink"
          }]
        }),
        m = () => ({
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
        v = e => ({
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
            text: e.formatMessage(l.nav_gta3_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: l.nav_gta3_cta_buy_now.defaultMessage,
            dataTestId: "gta3BuyNowCta",
            variant: "highlight"
          }
        }),
        p = e => ({
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
            text: e.formatMessage(l.nav_gtaiv_overview),
            gaText: l.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: e.formatMessage(l.nav_gtaiv_accomplishments),
            gaText: l.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: r.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: e.formatMessage(l.nav_gtaiv_support),
            gaText: l.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: e.formatMessage(l.nav_gtaiv_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            gaText: l.nav_gtaiv_cta_buy_now.defaultMessage,
            dataTestId: "gtaivPurchaseLink",
            variant: "highlight"
          }
        }),
        f = e => ({
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
            text: e.formatMessage(l.nav_gtav_overview),
            gaText: l.nav_gtav_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: e.formatMessage(l.nav_gtav_discover),
              gaText: l.nav_gtav_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: e.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: e.formatMessage(l.nav_gtav_my_character),
              gaText: l.nav_gtav_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: e.formatMessage(l.nav_gtav_jobs),
              gaText: l.nav_gtav_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: e.formatMessage(l.nav_gtav_guides),
              gaText: l.nav_gtav_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlatesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/license-plates"
              },
              text: e.formatMessage(l.nav_gtav_licence_plate_creator),
              gaText: l.nav_gtav_licence_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: e.formatMessage(l.nav_gtao_twitch_drops),
              gaText: l.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: e.formatMessage(l.nav_gtav_gta_online),
            gaText: l.nav_gtav_gta_online.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtavSpOverviewButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: e.formatMessage(l.nav_gtav_stats),
              gaText: l.nav_gtav_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: e.formatMessage(l.nav_gtav_missions),
              gaText: l.nav_gtav_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: e.formatMessage(l.nav_gtav_checklist),
              gaText: l.nav_gtav_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: e.formatMessage(l.nav_gtav_accomplishments),
              gaText: l.nav_gtav_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavSpLink",
            text: e.formatMessage(l.nav_gtav_story),
            gaText: l.nav_gtav_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtav+Link",
            location: {
              domain: r.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: e.formatMessage(l.nav_gtav_gta_plus),
            gaText: l.nav_gtav_gta_plus.defaultMessage,
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
                text: e.formatMessage(l.nav_gtav_jobs_browse_all),
                gaText: l.nav_gtav_jobs_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCommunitySeriesLink",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                text: e.formatMessage(l.nav_gtav_community_series),
                gaText: l.nav_gtav_community_series.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyJobsButtons",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                },
                text: e.formatMessage(l.nav_gtav_my_jobs),
                gaText: l.nav_gtav_my_jobs.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavPlaylistsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/gtav/playlists"
                },
                text: e.formatMessage(l.nav_gtav_playlists),
                gaText: l.nav_gtav_playlists.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavJobsDropdown",
              text: e.formatMessage(l.nav_gtav_jobs),
              gaText: l.nav_gtav_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              children: [{
                dataTestId: "gtavBrowseCrewsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/crews"
                },
                text: e.formatMessage(l.nav_gtav_crews_browse_all),
                gaText: l.nav_gtav_crews_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyCrewsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0,
                text: e.formatMessage(l.nav_gtav_my_crews),
                gaText: l.nav_gtav_my_crews.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateCrewButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                },
                text: e.formatMessage(l.nav_gtav_create_crew),
                gaText: l.nav_gtav_create_crew.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateEmblemButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/emblems"
                },
                text: e.formatMessage(l.nav_gtav_emblem_editor),
                gaText: l.nav_gtav_emblem_editor.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavCrewsDropdown",
              text: e.formatMessage(l.nav_gtav_crews),
              gaText: l.nav_gtav_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
              },
              text: e.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavCommunityDropdown",
            text: e.formatMessage(l.nav_gtav_community),
            gaText: l.nav_gtav_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: e.formatMessage(l.nav_gtav_support),
            gaText: l.nav_gtav_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: e.formatMessage(l.nav_gtav_cta_buy_now),
            location: {
              domain: r.C.www,
              path: "/gta-v?info=order"
            },
            ga: "cta_buy",
            gaText: l.nav_gtav_cta_buy_now.defaultMessage,
            dataTestId: "gtavPurchaseLink"
          }
        }),
        h = () => ({
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
        b = () => ({
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
        M = e => ({
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
            text: e.formatMessage(l.nav_gtaiveflc_cta_buy_now),
            gaText: l.nav_gtaiveflc_cta_buy_now.defaultMessage
          },
          links: [{
            text: e.formatMessage(l.nav_gtaiv_overview),
            gaText: l.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: r.C.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: e.formatMessage(l.nav_gtaiv_accomplishments),
            gaText: l.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: r.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: e.formatMessage(l.nav_gtaiv_support),
            gaText: l.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/115001614848"
            }
          }]
        }),
        w = () => ({
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
        y = () => ({
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
        x = e => ({
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
            text: e.formatMessage(l.nav_gtao_overview),
            gaText: l.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: e.formatMessage(l.nav_gtao_discover),
              gaText: l.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: e.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: e.formatMessage(l.nav_gtao_my_character),
              gaText: l.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: e.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: e.formatMessage(l.nav_gtao_guides),
              gaText: l.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/license-plates"
              },
              text: e.formatMessage(l.nav_gtao_license_plate_creator),
              gaText: l.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: e.formatMessage(l.nav_gtao_twitch_drops),
              gaText: l.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: e.formatMessage(l.nav_gtao_gtao),
            gaText: l.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: e.formatMessage(l.nav_gtao_stats),
              gaText: l.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: e.formatMessage(l.nav_gtao_missions),
              gaText: l.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: e.formatMessage(l.nav_gtao_checklist),
              gaText: l.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: e.formatMessage(l.nav_gtao_accomplishments),
              gaText: l.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: e.formatMessage(l.nav_gtao_story),
            gaText: l.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: r.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: e.formatMessage(l.nav_gtao_gta_plus),
            gaText: l.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: e.formatMessage(l.nav_gtao_jobs_browse_all),
                gaText: l.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: e.formatMessage(l.nav_gtao_community_series),
                gaText: l.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: e.formatMessage(l.nav_gtao_my_jobs),
                gaText: l.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                requiresAuth: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: e.formatMessage(l.nav_gtao_jobs_playlists),
                gaText: l.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: e.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: e.formatMessage(l.nav_gtao_browse_crews),
                gaText: l.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: e.formatMessage(l.nav_gtao_my_crews),
                gaText: l.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: e.formatMessage(l.nav_gtao_crews_create),
                gaText: l.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: e.formatMessage(l.nav_gtao_emblem_editor),
                gaText: l.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/emblems"
                }
              }],
              text: e.formatMessage(l.nav_gtao_crews),
              gaText: l.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
              },
              text: e.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: e.formatMessage(l.nav_gtao_community),
            gaText: l.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: e.formatMessage(l.nav_gtao_support),
            gaText: l.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: e.formatMessage(l.nav_gtao_cta_buy_now),
            location: {
              domain: r.C.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy",
            gaText: l.nav_gtao_cta_buy_now.defaultMessage,
            dataTestId: "gtaoPurchaseLink"
          }
        }),
        k = e => ({
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
            text: e.formatMessage(l.nav_gtao_overview),
            gaText: l.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: e.formatMessage(l.nav_gtao_discover),
              gaText: l.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: e.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: e.formatMessage(l.nav_gtao_my_character),
              gaText: l.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: e.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: e.formatMessage(l.nav_gtao_guides),
              gaText: l.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/license-plates"
              },
              text: e.formatMessage(l.nav_gtao_license_plate_creator),
              gaText: l.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoTwitchDropsButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/twitch-drops"
              },
              text: e.formatMessage(l.nav_gtao_twitch_drops),
              gaText: l.nav_gtao_twitch_drops.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: e.formatMessage(l.nav_gtao_gtao),
            gaText: l.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: e.formatMessage(l.nav_gtao_stats),
              gaText: l.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: e.formatMessage(l.nav_gtao_missions),
              gaText: l.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: e.formatMessage(l.nav_gtao_checklist),
              gaText: l.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: e.formatMessage(l.nav_gtao_accomplishments),
              gaText: l.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: e.formatMessage(l.nav_gtao_story),
            gaText: l.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: r.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: e.formatMessage(l.nav_gtao_gta_plus),
            gaText: l.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: e.formatMessage(l.nav_gtao_jobs_browse_all),
                gaText: l.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: e.formatMessage(l.nav_gtao_community_series),
                gaText: l.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: e.formatMessage(l.nav_gtao_my_jobs),
                gaText: l.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: e.formatMessage(l.nav_gtao_jobs_playlists),
                gaText: l.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: e.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: e.formatMessage(l.nav_gtao_browse_crews),
                gaText: l.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: e.formatMessage(l.nav_gtao_my_crews),
                gaText: l.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: e.formatMessage(l.nav_gtao_crews_create),
                gaText: l.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: e.formatMessage(l.nav_gtao_emblem_editor),
                gaText: l.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/emblems/new"
                }
              }],
              text: e.formatMessage(l.nav_gtao_crews),
              gaText: l.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
              },
              text: e.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: e.formatMessage(l.nav_gtao_community),
            gaText: l.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: e.formatMessage(l.nav_gtao_support),
            gaText: l.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: e.formatMessage(l.nav_gtao_cta_buy_now),
            location: {
              domain: r.C.www,
              path: "/gta-online?info=order"
            },
            ga: "cta_buy",
            gaText: l.nav_gtao_cta_buy_now.defaultMessage,
            dataTestId: "gtaoPurchaseLink"
          }
        }),
        C = e => ({
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
            text: e.formatMessage(l.nav_gtasanandreas_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: l.nav_gtasanandreas_cta_buy_now.defaultMessage,
            dataTestId: "gtaSanAndreasPurchaseLink",
            variant: "highlight"
          }
        }),
        T = e => ({
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
            text: e.formatMessage(l.nav_gta_trilogy_overview),
            gaText: l.nav_gta_trilogy_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: r.C.www,
              path: "/GTATrilogy"
            }
          }, {
            text: e.formatMessage(l.nav_gta_trilogy_accomplishments),
            gaText: l.nav_gta_trilogy_accomplishments.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: e.formatMessage(l.nav_gta_trilogy_gtasa),
              gaText: l.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: e.formatMessage(l.nav_gta_trilogy_gtavc),
              gaText: l.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: e.formatMessage(l.nav_gta_trilogy_gta3),
              gaText: l.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: e.formatMessage(l.nav_gta_trilogy_support),
            gaText: l.nav_gta_trilogy_support.defaultMessage,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: e.formatMessage(l.nav_gta_trilogy_gtasa),
              gaText: l.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: r.C.support,
                path: "/categories/115001620287"
              }
            }, {
              text: e.formatMessage(l.nav_gta_trilogy_gtavc),
              gaText: l.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: r.C.support,
                path: "/categories/115001619868"
              }
            }, {
              text: e.formatMessage(l.nav_gta_trilogy_gta3),
              gaText: l.nav_gta_trilogy_gta3.defaultMessage,
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
            text: e.formatMessage(l.nav_gta_trilogy_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: l.nav_gta_trilogy_cta_buy_now.defaultMessage,
            dataTestId: "gtaTrilogyPurchaseLink"
          }
        }),
        I = e => ({
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
            text: e.formatMessage(l.nav_gtavc_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            gaText: l.nav_gtavc_cta_buy_now.defaultMessage,
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
        j = e => ({
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
            text: e.formatMessage(l.nav_lanoire_overview),
            gaText: l.nav_lanoire_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: r.C.www,
              path: "/games/lanoire"
            }
          }, {
            text: e.formatMessage(l.nav_lanoire_progress),
            gaText: l.nav_lanoire_progress.defaultMessage,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: e.formatMessage(l.nav_lanoire_pc_console),
              gaText: l.nav_lanoire_pc_console.defaultMessage,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: e.formatMessage(l.nav_lanoire_case_tracker),
                gaText: l.nav_lanoire_case_tracker.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: e.formatMessage(l.nav_lanoire_checklist),
                gaText: l.nav_lanoire_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: e.formatMessage(l.nav_lanoire_stats),
                gaText: l.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: e.formatMessage(l.nav_lanoire_accomplishments),
                gaText: l.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: e.formatMessage(l.nav_lanoire_badge_pursuit),
                gaText: l.nav_lanoire_badge_pursuit.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/badgepursuit"
                }
              }]
            }, {
              text: e.formatMessage(l.nav_lanoire_vr_case_files),
              gaText: l.nav_lanoire_vr_case_files.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: e.formatMessage(l.nav_lanoire_stats),
                gaText: l.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: e.formatMessage(l.nav_lanoire_accomplishments),
                gaText: l.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lanvr/achievements?platFormId=8"
                }
              }]
            }]
          }, {
            text: e.formatMessage(l.nav_lanoire_support),
            gaText: l.nav_lanoire_support.defaultMessage,
            type: "nav-external",
            dataTestId: "lanoireSupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: e.formatMessage(l.nav_lanoire_cta_buy_now),
            location: {
              domain: r.C.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy",
            gaText: l.nav_lanoire_cta_buy_now.defaultMessage,
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
        N = () => ({
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
        P = () => ({
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
        B = () => ({
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
        A = e => ({
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
            text: e.formatMessage(l.nav_mp3_overview),
            gaText: l.nav_mp3_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: r.C.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: e.formatMessage(l.nav_mp3_progress),
            gaText: l.nav_mp3_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: e.formatMessage(l.nav_mp3_accomplishments),
              gaText: l.nav_mp3_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: e.formatMessage(l.nav_mp3_singleplayer),
              gaText: l.nav_mp3_singleplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: e.formatMessage(l.nav_mp3_career),
                gaText: l.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_checklist),
                gaText: l.nav_mp3_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_grinds),
                gaText: l.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_chapters),
                gaText: l.nav_mp3_chapters.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_weapons),
                gaText: l.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_leaderboards),
                gaText: l.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/leaderboards"
                }
              }]
            }, {
              text: e.formatMessage(l.nav_mp3_multiplayer),
              gaText: l.nav_mp3_multiplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: e.formatMessage(l.nav_mp3_career),
                gaText: l.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_grinds),
                gaText: l.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_weapons),
                gaText: l.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_leaderboards),
                gaText: l.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/leaderboards"
                }
              }]
            }, {
              text: e.formatMessage(l.nav_mp3_crews),
              gaText: l.nav_mp3_crews.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: e.formatMessage(l.nav_mp3_multiplayer),
                gaText: l.nav_mp3_multiplayer.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_score_attack),
                gaText: l.nav_mp3_score_attack.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_ny_minute),
                gaText: l.nav_mp3_ny_minute.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_checkpoint_challenge),
                gaText: l.nav_mp3_checkpoint_challenge.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: e.formatMessage(l.nav_mp3_featured),
                gaText: l.nav_mp3_featured.defaultMessage,
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
            text: e.formatMessage(l.nav_mp3_support),
            gaText: l.nav_mp3_support.defaultMessage,
            type: "nav-external",
            dataTestId: "mp3SupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: e.formatMessage(l.nav_mp3_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-max-payne-3"
            },
            ga: "cta_buy",
            gaText: l.nav_mp3_cta_buy_now.defaultMessage,
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
        z = () => ({
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
        G = () => ({
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
        E = e => ({
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
            text: e.formatMessage(l.nav_rdo_overview),
            gaText: l.nav_rdo_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/getting-started"
              },
              text: e.formatMessage(l.nav_rdo_getting_started),
              gaText: l.nav_rdo_getting_started.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/roles"
              },
              text: e.formatMessage(l.nav_rdo_specialist_roles),
              gaText: l.nav_rdo_specialist_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoLOOLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              },
              text: e.formatMessage(l.nav_rdo_story_missions),
              gaText: l.nav_rdo_story_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPossesLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              },
              text: e.formatMessage(l.nav_rdo_posses_free_roam),
              gaText: l.nav_rdo_posses_free_roam.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoSAELink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              },
              text: e.formatMessage(l.nav_rdo_competitive_series),
              gaText: l.nav_rdo_competitive_series.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/customization"
              },
              text: e.formatMessage(l.nav_rdo_customization),
              gaText: l.nav_rdo_customization.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoProgressLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/rank-and-fortune"
              },
              text: e.formatMessage(l.nav_rdo_progression),
              gaText: l.nav_rdo_progression.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoExploreDropdown",
            text: e.formatMessage(l.nav_rdo_explore),
            gaText: l.nav_rdo_explore.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoOverviewButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/overview"
              },
              text: e.formatMessage(l.nav_rdo_my_character),
              gaText: l.nav_rdo_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/roles"
              },
              text: e.formatMessage(l.nav_rdo_roles),
              gaText: l.nav_rdo_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/clubrewards"
              },
              text: e.formatMessage(l.nav_rdo_club_rewards),
              gaText: l.nav_rdo_club_rewards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRankButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/rank"
              },
              text: e.formatMessage(l.nav_rdo_rank_unlocks),
              gaText: l.nav_rdo_rank_unlocks.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAwardsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/awards"
              },
              text: e.formatMessage(l.nav_rdo_awards),
              gaText: l.nav_rdo_awards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/achievements"
              },
              text: e.formatMessage(l.nav_rdo_accomplishments),
              gaText: l.nav_rdo_accomplishments.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/benefits"
              },
              text: e.formatMessage(l.nav_rdo_benefits),
              gaText: l.nav_rdo_benefits.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoProgressDropdown",
            text: e.formatMessage(l.nav_rdo_progress),
            gaText: l.nav_rdo_progress.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoPosseButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/posse"
              },
              text: e.formatMessage(l.nav_rdo_posses),
              gaText: l.nav_rdo_posses.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
              },
              text: e.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoCommunityDropdown",
            text: e.formatMessage(l.nav_rdo_community),
            gaText: l.nav_rdo_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "rdoCatalogueButton",
            location: {
              domain: r.C.socialClub,
              path: "/games/rdr2/catalogue/online/"
            },
            target: "_blank",
            text: e.formatMessage(l.nav_rdo_catalogue),
            gaText: l.nav_rdo_catalogue.defaultMessage,
            type: "nav-external"
          }, {
            dataTestId: "rdoSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/115001624507"
            },
            target: "_blank",
            text: e.formatMessage(l.nav_rdo_support),
            gaText: l.nav_rdo_support.defaultMessage,
            type: "nav-external"
          }],
          cta: {
            text: e.formatMessage(l.nav_rdo_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy",
            gaText: l.nav_rdo_cta_buy_now.defaultMessage,
            dataTestId: "rdoPurchaseLink"
          }
        }),
        V = e => ({
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
            text: e.formatMessage(l.nav_rdr_cta_buy_now),
            location: {
              domain: r.C.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy",
            gaText: l.nav_rdr_cta_buy_now.defaultMessage,
            dataTestId: "rsrBuyNowCta"
          }
        }),
        q = e => ({
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
            text: e.formatMessage(l.nav_rdr2_overview),
            gaText: l.nav_rdr2_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: r.C.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: e.formatMessage(l.nav_rdr2_explore),
            gaText: l.nav_rdr2_explore.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: e.formatMessage(l.nav_rdr2_van_der_linde_gang),
              gaText: l.nav_rdr2_van_der_linde_gang.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: e.formatMessage(l.nav_rdr2_locations),
              gaText: l.nav_rdr2_locations.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: e.formatMessage(l.nav_rdr2_wildlife),
              gaText: l.nav_rdr2_wildlife.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: e.formatMessage(l.nav_rdr2_weaponry),
              gaText: l.nav_rdr2_weaponry.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: e.formatMessage(l.nav_rdr2_progress),
            gaText: l.nav_rdr2_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: e.formatMessage(l.nav_rdr2_stats),
              gaText: l.nav_rdr2_stats.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: e.formatMessage(l.nav_rdr2_chapters),
              gaText: l.nav_rdr2_chapters.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: e.formatMessage(l.nav_rdr2_challenges),
              gaText: l.nav_rdr2_challenges.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: e.formatMessage(l.nav_rdr2_character),
              gaText: l.nav_rdr2_character.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: e.formatMessage(l.nav_rdr2_compendium),
              gaText: l.nav_rdr2_compendium.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: e.formatMessage(l.nav_rdr2_accomplishments),
              gaText: l.nav_rdr2_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: e.formatMessage(l.nav_rdr2_media),
            gaText: l.nav_rdr2_media.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: e.formatMessage(l.nav_rdr2_gallery),
              gaText: l.nav_rdr2_gallery.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: e.formatMessage(l.nav_rdr2_artwork),
              gaText: l.nav_rdr2_artwork.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: e.formatMessage(l.nav_rdr2_videos),
              gaText: l.nav_rdr2_videos.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: e.formatMessage(l.nav_rdr2_music),
              gaText: l.nav_rdr2_music.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: e.formatMessage(l.nav_rdr2_online),
            gaText: l.nav_rdr2_online.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: r.C.www,
              path: "/reddeadonline"
            }
          }, {
            text: e.formatMessage(l.nav_rdr2_catalogue),
            gaText: l.nav_rdr2_catalogue.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: r.C.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: e.formatMessage(l.nav_rdr2_support),
            gaText: l.nav_rdr2_support.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: e.formatMessage(l.nav_rdr2_cta_buy_now),
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy",
            gaText: l.nav_rdr2_cta_buy_now.defaultMessage,
            dataTestId: "rdr2StoreLink"
          }
        }),
        H = () => ({
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
        F = e => ({
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
            text: e.formatMessage(l.nav_rsg_games),
            gaText: l.nav_rsg_games.defaultMessage,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: e.formatMessage(l.nav_rsg_newswire),
            gaText: l.nav_rsg_newswire.defaultMessage,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: r.C.www,
              path: "/newswire"
            }
          }, {
            text: e.formatMessage(l.nav_rsg_videos),
            gaText: l.nav_rsg_videos.defaultMessage,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: r.C.www,
              path: "/videos"
            }
          }, {
            text: e.formatMessage(l.nav_rsg_downloads),
            gaText: l.nav_rsg_downloads.defaultMessage,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: r.C.www,
              path: "/downloads"
            }
          }, {
            text: e.formatMessage(l.nav_rsg_store),
            gaText: l.nav_rsg_store.defaultMessage,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/"
            }
          }, {
            text: e.formatMessage(l.nav_rsg_support),
            gaText: l.nav_rsg_support.defaultMessage,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/"
            }
          }],
          cta: {
            text: e.formatMessage(l.nav_rsg_cta_get_launcher),
            location: {
              domain: r.C.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download",
            gaText: l.nav_rsg_cta_get_launcher.defaultMessage,
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
        W = () => ({
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
        U = () => ({
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
        Q = () => ({
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
        Z = () => ({
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
        K = () => ({
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
        X = e => ({
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
            text: e.formatMessage(l.nav_thewarriors_cta_buy_now),
            location: {
              domain: "https://store.playstation.com",
              path: "/concept/205082"
            },
            ga: "cta_buy",
            gaText: l.nav_thewarriors_cta_buy_now.defaultMessage,
            dataTestId: "thewarriorsPurchaseLink"
          }
        }),
        ee = () => ({
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
        ae = /[*?\\<>&%@:~]/g,
        te = e => e.match(ae),
        se = {
          min: 3,
          max: 100,
          validationFunction: te
        },
        ne = (0, r.A)(),
        oe = (e, a) => "/" + [a, ...e.split("/")].filter(Boolean).join("/"),
        re = (e, a) => e ? e === a ? "" : e.startsWith("http") ? e : `https://${ne.sites[e]}.rockstargames.com` : "";
      var ie = t(52542);
      const de = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        le = (e, a, t, s) => [{
          text: e.formatMessage(l.sc_link_account),
          target: "_self",
          dataTestId: "accountButton",
          type: "nav-dropdown",
          children: [{
            text: e.formatMessage(l.sc_link_settings),
            location: {
              domain: r.C.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...de,
              text: l.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, {
            text: e.formatMessage(l.sc_link_view_my_profile),
            location: {
              domain: t,
              path: ""
            },
            target: "_self",
            ga: {
              ...de,
              text: l.sc_link_view_my_profile.defaultMessage
            },
            dataTestId: "viewMyProfileLink"
          }, {
            text: e.formatMessage(l.sc_link_messages),
            location: {
              domain: r.C.socialClub,
              path: "/message"
            },
            target: "_self",
            ga: {
              ...de,
              text: l.sc_link_messages.defaultMessage
            },
            dataTestId: "messagesLink"
          }, {
            text: e.formatMessage(l.sc_link_game_activation),
            location: {
              domain: r.C.socialClub,
              path: "/activate"
            },
            target: "_self",
            ga: {
              ...de,
              text: l.sc_link_game_activation.defaultMessage
            },
            dataTestId: "gameActivationLink"
          }]
        }, {
          text: e.formatMessage(l.sc_link_notifications),
          location: {
            domain: r.C.socialClub,
            path: "/notifications"
          },
          target: "_self",
          hasNotifications: s,
          ga: {
            ...de,
            text: l.sc_link_notifications.defaultMessage,
            location: {
              domain: r.C.socialClub,
              path: "/notifications"
            }
          },
          dataTestId: "notificationsLink"
        }, {
          text: e.formatMessage(l.sc_link_crews),
          location: {
            domain: r.C.socialClub,
            path: `/member/${a}/crews`
          },
          target: "_self",
          ga: {
            ...de,
            text: l.sc_link_crews.defaultMessage
          },
          dataTestId: "crewsLink"
        }, {
          text: e.formatMessage(l.sc_link_friends),
          target: "_self",
          dataTestId: "friendsButton",
          type: "nav-dropdown",
          children: [{
            text: e.formatMessage(l.sc_link_my_friends),
            location: {
              domain: r.C.socialClub,
              path: `/member/${a}/friends`
            },
            target: "_self",
            ga: {
              ...de,
              text: l.sc_link_my_friends.defaultMessage
            },
            dataTestId: "myFriendsLink"
          }, {
            text: e.formatMessage(l.sc_link_import_friends),
            location: {
              domain: r.C.socialClub,
              path: "/friends/import"
            },
            target: "_self",
            ga: {
              ...de,
              text: l.sc_link_import_friends.defaultMessage
            },
            dataTestId: "importFriendsLink"
          }, {
            text: e.formatMessage(l.sc_link_find_friends),
            location: {
              domain: r.C.socialClub,
              path: "/members"
            },
            target: "_self",
            ga: {
              ...de,
              text: l.sc_link_import_friends.defaultMessage
            },
            dataTestId: "findFriendsLink"
          }]
        }],
        ge = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        ce = e => ({
          text: e.formatMessage(l.sc_link_help),
          target: "_self",
          ga: {
            ...ge,
            text: l.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          type: "nav-dropdown",
          children: [{
            text: e.formatMessage(l.sc_link_support),
            location: {
              domain: r.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...ge,
              text: l.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(l.sc_link_legal),
            location: {
              domain: r.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...ge,
              text: l.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(l.sc_link_privacy_policy),
            location: {
              domain: r.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...ge,
              text: l.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(l.sc_link_cookies_policy),
            location: {
              domain: r.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...ge,
              text: l.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            type: "nav-no-link",
            text: e.formatMessage(l.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...ge,
              text: l.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(l.sc_link_do_not_sell_my_information),
            location: {
              domain: r.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...ge,
              text: l.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        });
      var _e = t(11040),
        me = t(58951),
        ue = t(10670),
        ve = t(52612),
        pe = t(70954);
      let fe;
      fe = {
        gameCard: "rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251"
      };
      const he = e => {
        let a, {
          title: t,
          titleSlug: s,
          path: n,
          onNavigate: o,
          dataTestId: r,
          onClick: i,
          ...d
        } = e;
        return a = d, (0, pe.jsx)("div", {
          className: fe.gameCard,
          children: (0, pe.jsx)(ve.A, {
            to: n,
            "aria-label": t,
            onNavigate: o,
            onClick: i,
            "data-testid": r,
            ...a,
            children: (0, pe.jsx)(ue.A, {
              title: t,
              titleSlug: s,
              inGlobalNav: !0
            })
          })
        }, t)
      };
      var be = t(54094);
      const Me = (0, d.defineMessages)({
          games_menu_item: {
            id: "games_menu_item",
            defaultMessage: "Games"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            defaultMessage: "View All"
          },
          games_menu_vi: {
            id: "games_menu_vi",
            defaultMessage: "Grand Theft Auto VI"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr: {
            id: "games_menu_rdr",
            defaultMessage: "Red Dead Redemption"
          }
        }),
        we = e => ({
          viewAllLocation: {
            path: "/games"
          },
          games: [{
            titleSlug: "VI",
            text: e.formatMessage(Me.games_menu_vi),
            gaText: "Grand Theft Auto VI",
            path: "/VI",
            useLocale: !0,
            externalRoute: !0,
            dataTestId: "VI"
          }, {
            titleSlug: "gta-v",
            text: e.formatMessage(Me.games_menu_gta_v),
            gaText: "Grand Theft Auto V",
            path: "/gta-v",
            dataTestId: "gtav"
          }, {
            titleSlug: "gta-online",
            text: e.formatMessage(Me.games_menu_gta_online),
            gaText: "Grand Theft Auto Online",
            path: "/gta-online",
            dataTestId: "gtao"
          }, {
            titleSlug: "reddeadredemption2",
            text: e.formatMessage(Me.games_menu_rdr_2),
            gaText: "Red Dead Redemption 2",
            path: "/reddeadredemption2",
            dataTestId: "rdr2"
          }, {
            titleSlug: "reddeadredemption",
            text: e.formatMessage(Me.games_menu_rdr),
            gaText: "Red Dead Redemption",
            path: "/reddeadredemption",
            dataTestId: "rdr"
          }]
        });
      var ye = t(61225),
        xe = t(73012),
        ke = t(63582);
      let Ce;
      Ce = {
        pillBtn: "rockstargames-modules-core-headercae5df759f802aa04900e0b40597ba48",
        selected: "rockstargames-modules-core-headerc1d01988f20547a303ca62d99b0beee4",
        gamesSubMenu: "rockstargames-modules-core-headerf01964ebb2d62c8bd7d7ad3df1d818a4",
        gamesMenu: "rockstargames-modules-core-headerdb2039d0fa02404c1e032ddafe358efd",
        titleBar: "rockstargames-modules-core-headerb2d95a9777e140a30958fbd98a9fb053",
        menuTitle: "rockstargames-modules-core-headerbacc5a58858921d497c7752942deb135",
        viewAllLink: "rockstargames-modules-core-headera4f8eb74ae350f61ed4b4fffa4d8ff8d",
        gameCards: "rockstargames-modules-core-headere104ee1bbcd8b04a2ea224fdccd9bb67",
        gamesMenuContent: "rockstargames-modules-core-headercaea3404775ed365d2f4aef72c9990dc",
        gamesMenuMobile: "rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-headera6e13c807485e2f4de5e219ba255f912",
        "swiper-horizontal": "rockstargames-modules-core-headerc5d5a6c2ae5bc35a9ce9fa397ffe3508",
        "swiper-vertical": "rockstargames-modules-core-headerde108a391289bb293ca8f15ddccf6fd0",
        header: "rockstargames-modules-core-headerefbf909442a1564a3efb261ef928345d",
        slider: "rockstargames-modules-core-headerb673908f44e71f1c48537b69a244eaf5",
        slide: "rockstargames-modules-core-headerdf455110c72d70cc653582db9d812af6"
      };
      const Te = e => {
          let {
            onNavigate: a,
            onClick: t
          } = e;
          const s = (0, d.useIntl)(),
            n = (0, r.A)(),
            [{
              subdomaincom: i
            }] = (0, d.getLocale)(),
            l = i !== d.englishLocale.subdomaincom ? `/${i}` : "",
            g = n.currentSite?.site === r.C.www,
            c = `https://${n.sites[r.C.www]}.rockstargames.com`,
            _ = g ? l : `${c}${l}`,
            {
              viewAllLocation: m,
              games: u
            } = (0, o.useMemo)((() => we(s)), [i]);
          return (0, pe.jsxs)("div", {
            className: Ce.gamesMenu,
            "data-testid": "gamesMenu",
            children: [(0, pe.jsxs)("div", {
              className: Ce.titleBar,
              children: [(0, pe.jsx)("div", {
                children: (0, pe.jsx)("h2", {
                  className: Ce.menuTitle,
                  children: s.formatMessage(Me.games_menu_featured)
                })
              }), (0, pe.jsx)("div", {
                children: (0, pe.jsx)(me.Button, {
                  asChild: !0,
                  appearance: "ghost",
                  size: "MD",
                  children: (0, pe.jsxs)("a", {
                    className: Ce.viewAllLink,
                    href: _ + m.path,
                    children: [s.formatMessage(Me.games_menu_view_all), (0, pe.jsx)("img", {
                      src: be.ZM,
                      alt: s.formatMessage(Me.games_menu_view_all)
                    })]
                  })
                })
              })]
            }), (0, pe.jsx)("div", {
              className: Ce.gameCards,
              children: u.map((e => {
                return (0, pe.jsx)(he, {
                  titleSlug: e.titleSlug,
                  title: e.text,
                  path: (!g || e.externalRoute ? e.useLocale ? `${c}${l}` : c : "") + e.path,
                  dataTestId: e.dataTestId,
                  onNavigate: a,
                  onClick: (s = e.gaText, n = `Games > ${e.gaText}`, o = (!g || e.externalRoute ? e.useLocale ? `${c}${l}` : c : "") + e.path, () => {
                    t?.(s, n, o)
                  })
                }, e.titleSlug);
                var s, n, o
              }))
            })]
          })
        },
        Ie = e => {
          let {
            onNavigate: a,
            onClick: t,
            dataTestId: s
          } = e;
          const n = (0, d.useIntl)(),
            {
              isHidden: r
            } = (0, o.useContext)(ye.jd),
            {
              inMobileMenu: i
            } = (0, o.useContext)(xe.xN);
          return i ? (0, pe.jsx)(Le, {
            onNavigate: a,
            onClick: t
          }) : (0, pe.jsxs)(ye.Dr, {
            children: [(0, pe.jsx)(ye.cQ, {
              "data-testid": s,
              children: n.formatMessage(Me.games_menu_item)
            }), (0, pe.jsx)(ke.AnimatePresence, {
              children: !r && (0, pe.jsx)(ye.rm, {
                className: Ce.gamesMenuContent,
                animationOverride: "expandCollapse",
                children: (0, pe.jsx)(Te, {
                  onNavigate: a,
                  onClick: t
                })
              })
            })]
          })
        },
        Le = e => {
          let {
            onNavigate: a,
            onClick: t
          } = e;
          const s = (0, d.useIntl)(),
            n = (0, r.A)(),
            [{
              subdomaincom: i
            }] = (0, d.getLocale)(),
            {
              closeMobileMenu: l
            } = (0, o.useContext)(xe.xN),
            g = i !== d.englishLocale.subdomaincom ? `/${i}` : "",
            c = n.currentSite?.site === r.C.www,
            _ = `https://${n.sites[r.C.www]}.rockstargames.com`,
            m = c ? g : `${_}${g}`,
            {
              viewAllLocation: u,
              games: v
            } = (0, o.useMemo)((() => we(s)), [i]);
          let p;
          return p = 3.5, (0, pe.jsxs)("li", {
            className: Ce.gamesMenuMobile,
            "data-testid": "gamesMenu",
            children: [(0, pe.jsxs)("div", {
              className: Ce.header,
              children: [(0, pe.jsx)("h2", {
                children: s.formatMessage(Me.games_menu_featured)
              }), (0, pe.jsx)(me.Button, {
                asChild: !0,
                appearance: "ghost",
                size: "MD",
                children: (0, pe.jsxs)("a", {
                  className: Ce.viewAllLink,
                  href: m + u.path,
                  children: [s.formatMessage(Me.games_menu_view_all), (0, pe.jsx)("img", {
                    src: be.ZM,
                    alt: s.formatMessage(Me.games_menu_view_all)
                  })]
                })
              })]
            }), (0, pe.jsx)(_e.RC, {
              className: Ce.slider,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: 3.5,
              speed: 700,
              children: v.map((e => {
                return (0, pe.jsx)(_e.qr, {
                  className: Ce.slide,
                  children: (0, pe.jsx)(he, {
                    titleSlug: e.titleSlug,
                    title: e.text,
                    path: (!c || e.externalRoute ? e.useLocale ? `${_}${g}` : _ : "") + e.path,
                    dataTestId: e.dataTestId,
                    onNavigate: a,
                    onClick: (s = e.gaText, n = `Games > ${e.gaText}`, o = (!c || e.externalRoute ? e.useLocale ? `${_}${g}` : _ : "") + e.path, () => {
                      t?.(s, n, o), l()
                    })
                  })
                }, e.gaText);
                var s, n, o
              }))
            })]
          })
        },
        je = Le,
        Se = () => {
          const e = (() => {
            const e = (0, r.A)(),
              [a] = (0, d.getLocale)();
            return (t, s) => {
              if (!t.path) return t.domain;
              const n = [
                  ["username", s]
                ],
                o = ((e, a) => a.filter((e => {
                  let [, a] = e;
                  return Boolean(a)
                })).reduce(((e, a) => {
                  let [t, s] = a;
                  return e.replaceAll(`{${t}}`, s)
                }), e))(t.path, n),
                r = "www" === t.domain && "www" !== e.currentSite?.site ? ((e, a) => {
                  if (!a || a.iso === d.englishLocale.iso) return e;
                  const t = a.subdomaincom;
                  return "/" === e[0] ? t + e : `${t}/${e}`
                })(o, a) : o;
              return t.domain + r
            }
          })();
          return (a, t) => {
            const s = new URLSearchParams(t.params),
              n = t.path?.replace("{term}", a);
            s.forEach(((e, t) => {
              "{query}" === e && s.set(t, a)
            }));
            const o = s.toString() ? `?${s.toString()}` : "",
              r = {
                domain: t.domain,
                path: n + o
              },
              i = e(r, "");
            if (i) return i;
            console.error(`No search url could be constructed from ${t.domain} and ${t.path}`)
          }
        };
      var Ne = t(98753);
      const Pe = e => {
          let {
            globalNavLoaderComponent: a,
            globalNavComponent: t,
            locale: i,
            username: g,
            userProfileLink: c,
            hasNotifications: _,
            ...m
          } = e;
          const u = (0, d.useIntl)(),
            v = (0, r.A)();
          let p;
          p = function(e) {
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            const t = (0, r.A)(),
              s = e.subdomaincom,
              n = (e, t) => t?.requiresAuth && !a ? e : [...e, o(t)],
              o = e => {
                const o = t.currentSite?.site !== r.C.www && e.location?.domain === r.C.www && "en" !== s,
                  i = e.location?.path.replace("{username}", a);
                return {
                  ...e,
                  ...e.children ? {
                    children: e.children.reduce(n, [])
                  } : {},
                  ...e.targets ? {
                    targets: e.targets.reduce(n, [])
                  } : {},
                  ...e.location ? {
                    location: {
                      ...e.location,
                      path: o && i ? oe(i, s) : i,
                      domain: t?.currentSite ? re(e.location.domain, t.currentSite.site) : ""
                    }
                  } : {}
                }
              };
            return e => o(e)
          }(i, g);
          const f = Se(),
            [h, b] = (0, o.useState)(""),
            M = a,
            w = (e => ({
              targets: [{
                text: e.formatMessage(l.search_target_games),
                gaText: l.search_target_games.defaultMessage,
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
                searchOptions: se
              }, {
                text: e.formatMessage(l.search_target_posts),
                gaText: l.search_target_posts.defaultMessage,
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
                searchOptions: se
              }, {
                text: e.formatMessage(l.search_target_videos),
                gaText: l.search_target_videos.defaultMessage,
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
                searchOptions: se
              }, {
                text: e.formatMessage(l.search_target_community),
                gaText: l.search_target_community.defaultMessage,
                tab: "socialClub",
                value: "socialClub",
                type: "nav-dropdown",
                targets: [{
                  text: e.formatMessage(l.search_target_users),
                  gaText: l.search_target_users.defaultMessage,
                  value: "community-users",
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/members/{term}"
                  },
                  searchOptions: se
                }, {
                  text: e.formatMessage(l.search_target_crews),
                  gaText: l.search_target_crews.defaultMessage,
                  value: "community-crews",
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/crews/{term}"
                  },
                  searchOptions: se
                }, {
                  text: e.formatMessage(l.search_target_jobs),
                  gaText: l.search_target_jobs.defaultMessage,
                  value: "community-jobs",
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/jobs/{term}"
                  },
                  searchOptions: se
                }]
              }]
            }))(u),
            [y, x] = (0, o.useState)(window.innerWidth < 1024),
            {
              rsg: k,
              ...C
            } = s,
            T = Object.values({
              ...C,
              rsg: k
            }).map((e => e(u))),
            I = (0, o.useMemo)((() => {
              const e = v.currentSite?.site,
                a = k(u).links;
              return T.reduce(((t, s) => {
                if (!v.currentSite?.site || !s?.appearancePaths?.[v.currentSite.site]) return t;
                const n = ((e, a, t, s) => e && 0 !== e.length || "www" !== t || !s ? e : a)(s.links, a, e, y);
                return [...t, {
                  ...s,
                  appearancePaths: v.currentSite?.site ? s?.appearancePaths?.[v.currentSite.site] : [],
                  links: n.map(p),
                  cta: s.cta && p(s.cta)
                }]
              }), [])
            }), [y, T]),
            L = (0, o.useMemo)((() => ({
              ...w,
              targets: w.targets.map(p)
            })), [w, p]),
            j = (0, o.useMemo)((() => (e => ({
              quickMenuHome: e.formatMessage(Ne.A.nav_quick_access_home),
              quickMenuGames: e.formatMessage(Ne.A.nav_quick_access_games),
              quickMenuNewswire: e.formatMessage(Ne.A.nav_quick_access_newswire),
              avatarMenuSelectLanguage: e.formatMessage(Ne.A.avatarmenu_selectlanguage),
              avatarMenuSignIn: e.formatMessage(Ne.A.avatarmenu_signin),
              avatarMenuSignUp: e.formatMessage(Ne.A.avatarmenu_signup),
              avatarMenuSignOut: e.formatMessage(Ne.A.avatarmenu_logout)
            }))(u)), []),
            S = (e, a) => {
              let t, s = "";
              const n = new URLSearchParams(e);
              if (new URLSearchParams(a).forEach(((e, a) => {
                  const o = n.get(a);
                  "{query}" === e && o ? (t = !0, s = o) : t = o === e && !1 !== t
                })), t) return s
            },
            N = (e, a) => {
              if (!a) return !1;
              const t = e.split(/[/?]+/),
                s = a.split(/[/?]+/);
              if (s.every(((e, a) => e === t[a] || "{term}" === e || "" === e))) {
                const e = s.findIndex((e => "{term}" === e));
                if (e) return t[e]
              }
              return ""
            },
            P = (0, o.useCallback)((() => {
              let e, a = "";
              const {
                pathname: t,
                search: s
              } = window.location;
              return L.targets.findIndex((n => {
                if ("" === n.type && n.location) {
                  if (n.location.path && t.startsWith(n.location.path)) {
                    const t = S(s, n.location.params);
                    if (t) return a = t, e = n, !0
                  }
                  if (!n.location.params) {
                    const s = N(t, n.location.path);
                    if (s) return a = s, e = n, !0
                  }
                }
                if ("nav-dropdown" === n.type) {
                  const o = n.targets?.findIndex((n => {
                    if ("" === n.type) {
                      if (n.location.path && t.startsWith(n.location.path)) {
                        const t = S(s, n.location.params);
                        if (t) return a = t, e = n, !0
                      }
                      const o = N(t, n.location.path);
                      if (o) return a = o, e = n, !0
                    }
                    return !1
                  }));
                  return Boolean(o) && o >= 0
                }
              })), [a, e]
            }), [L]),
            B = (0, o.useCallback)(((e, a) => {
              let t;
              return e.forEach((e => {
                if ("nav-dropdown" === e.type) {
                  const s = B(e.targets, a);
                  s && (t = s)
                } else e.value === a && (t = e)
              })), t
            }), [L]),
            A = (0, o.useCallback)((e => {
              if ("" === e) return !1;
              const a = te?.(e);
              return e.split(/\s+/).every((e => e.length < 3)) ? (b(u.formatMessage(Ne.A.nav_search_error_too_short, {
                count: 3
              })), !1) : a ? (b(u.formatMessage(Ne.A.nav_search_error_invalid_chars, {
                invalidChars: [...new Set(a)].join(", ")
              })), !1) : (b(""), !0)
            }), []),
            R = (0, o.useCallback)(((e, a) => {
              if (A(e) && a) {
                const t = B(L.targets, a);
                return t ? f(e, t.location) : null
              }
            }), [L]),
            D = (0, o.useMemo)((() => ({
              loggedInLinks: le(u, g, c, _).map(p),
              helpItem: p(ce(u))
            })), [u, g, c, _]);
          return (0, o.useEffect)((() => {
            const e = () => {
              x(window.innerWidth < 1024)
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, pe.jsx)(M, {
            navigationData: I,
            locale: i,
            globalNavigationComponent: t,
            searchConfig: L,
            gamesMenuComponent: n,
            avatarMenuData: D,
            onSearch: R,
            getQueryFromUrl: P,
            errorMessage: h,
            localisedStrings: j,
            ...m
          })
        },
        Be = (0, d.withIntl)((e => {
          let {
            globalNavLoaderComponent: a,
            globalNavComponent: t,
            username: s,
            userProfileLink: n,
            hasNotifications: o,
            ...r
          } = e;
          const [i] = (0, d.getLocale)();
          return a ? (0, pe.jsx)(Pe, {
            globalNavLoaderComponent: a,
            globalNavComponent: t,
            locale: i,
            username: s,
            userProfileLink: n,
            hasNotifications: o,
            ...r
          }) : null
        }), ie)
    },
    46690: (e, a, t) => {
      t.d(a, {
        E: () => r
      });
      var s = t(21222);
      const n = {
        pillBtn: "rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939",
        selected: "rockstargames-modules-core-headerade3ff1f5041701c0a98cb7198ece826",
        mobile: "rockstargames-modules-core-headerd46e4a60f402edcf62521fefd6a9289f",
        desktop: "rockstargames-modules-core-headerf1fc26697d7f376112d0fcd256b22a9a"
      };
      var o = t(70954);
      const r = e => {
        let {
          showOn: a,
          ...t
        } = e;
        return (0, o.jsx)(s.Slot, {
          className: a ? n[a] : "",
          ...t
        })
      }
    },
    49928: (e, a, t) => {
      t.d(a, {
        b: () => s
      });
      const s = {
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
      }
    },
    54094: (e, a, t) => {
      t.d(a, {
        ZM: () => r,
        br: () => o,
        sk: () => n,
        qc: () => s
      });
      const s = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        n = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg";
      var o = t(94222);
      const r = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg"
    },
    61225: (e, a, t) => {
      t.d(a, {
        jd: () => k,
        W1: () => C,
        rm: () => P,
        ZB: () => R,
        Dr: () => L,
        w4: () => D,
        cO: () => T,
        aC: () => A,
        cQ: () => j
      });
      var s = t(71127),
        n = t(81788),
        o = t(9046),
        r = t(74406),
        i = t(46690),
        d = t(54094),
        l = t(91650),
        g = t(24036),
        c = t.n(g),
        _ = t(73012),
        m = t(63582);
      const u = function() {
        for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
        const s = a.filter(Boolean);
        return s.length <= 1 ? s[0] || null : function(e) {
          for (const a of s) "function" == typeof a ? a(e) : a && (a.current = e)
        }
      };
      var v = t(21222),
        p = t(21315),
        f = t(42549),
        h = t(74482),
        b = t(10201),
        M = t(70954);
      let w;
      w = {
        pillBtn: "rockstargames-modules-core-headere0ed1b3547264fc03757f0e9e9d6f93b",
        selected: "rockstargames-modules-core-headerf9516763b5bc7d2d11b742f2362cca74",
        menu: "rockstargames-modules-core-headerd922c5fe52102c7e5c8bc3c42d010585",
        menuItems: "rockstargames-modules-core-headerec44e526244f48930351136a502341d5",
        menuItem: "rockstargames-modules-core-headerf303c57e835ec31bf4213fb03aba17ef",
        nestedMenuItem: "rockstargames-modules-core-headerda3bef6906347a4766f3e910c294774a",
        hiddenItems: "rockstargames-modules-core-headerabf1a661e4902fa5712272e92f2de033",
        hiddenItem: "rockstargames-modules-core-headerd5e29664a79741798b66ebe415c59463",
        dropdownMenu: "rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715",
        dropdownMenuMobile: "rockstargames-modules-core-headerf905a8b31e0bab44202ab5722726c472",
        nestedDropdown: "rockstargames-modules-core-headerddf1983ce836b67a33e2f08a1a5316a3",
        avatarNestedDropdown: "rockstargames-modules-core-headera4788f15b7ea9665e8e186a03c86ca32",
        subMenu: "rockstargames-modules-core-headerd962f98ae74a4cbed394cf29a5d0a472",
        menuList: "rockstargames-modules-core-headere463be3861d293e36d66bb8ab0c19645",
        menuTriggerChevron: "rockstargames-modules-core-headerec5d2c793461b20aed9bb78b399482ad",
        menuTrigger: "rockstargames-modules-core-headerfaca5fabb7852e77e62aa1da55dfad31",
        sharedMenuLinkStyles: "rockstargames-modules-core-headerb76fe7fae607404368bb160833f02f4b",
        menuLink: "rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912",
        mobileMenuLink: "rockstargames-modules-core-headerfe55c83723647f4df2a5ba88baa866e2",
        quickMenuLink: "rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60",
        subMenuLink: "rockstargames-modules-core-headeree8b6e236dcc760405f887886740a954",
        avatarMenuLink: "rockstargames-modules-core-headerc640bf864619b6a2296140ddb12e8475",
        nestedLink: "rockstargames-modules-core-headerbba8a763e416f3af074bb59987ec7834",
        externalLinkIcon: "rockstargames-modules-core-headerb350a68799dbf9dc424ca04489c8a0ad"
      };
      const y = e => {
          e.preventDefault()
        },
        x = (0, s.createContext)({
          inMenu: !1,
          openedNav: "",
          setOpenedNav: e => {}
        }),
        k = (0, s.createContext)({
          isHidden: !1
        }),
        C = e => {
          let {
            children: a
          } = e;
          const t = (0, n.useIntl)(),
            [r, d] = (0, s.useState)(""),
            [l, g] = (0, s.useState)(a),
            [c, _] = (0, s.useState)([]),
            m = (0, s.useRef)(null),
            u = (0, s.useRef)(null),
            {
              isNavHidden: v
            } = (0, s.useContext)(b.PY),
            p = (0, s.useCallback)((() => {
              const e = u.current;
              if (!e) return;
              const {
                children: t
              } = e;
              let n = 0;
              const o = Array.from(t).map(((e, a) => {
                  const t = e.getBoundingClientRect().top;
                  return 0 === a && (n = t), t
                })),
                r = o.filter((e => e !== n)).length,
                i = o.findIndex((e => e > n));
              let d = i;
              if (i > 0 && (d = i - 1), r) {
                const e = [],
                  t = [];
                s.Children.forEach(a, ((a, s) => {
                  s < d ? e.push(a) : t.push(a)
                })), e && g(e), t && _(t)
              } else g(a), _([])
            }), [a, u?.current]);
          let f, y;
          return (0, s.useEffect)((() => {
            const e = new ResizeObserver(p);
            return u?.current && e.observe(u.current), () => {
              u?.current && e.unobserve(u.current)
            }
          }), [a, u?.current]), (0, s.useEffect)((() => {
            d("")
          }), [v]), (0, s.useEffect)((() => {
            const e = () => d("");
            return window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), f = w.menuItems, y = w.hiddenItems, (0, M.jsx)(x.Provider, {
            value: {
              inMenu: !0,
              openedNav: r,
              setOpenedNav: d
            },
            children: (0, M.jsx)(i.E, {
              showOn: "desktop",
              children: (0, M.jsxs)(o.Root, {
                className: w.menu,
                value: r,
                onValueChange: d,
                children: [(0, M.jsxs)(T, {
                  ref: m,
                  className: f,
                  children: [l, c?.length > 0 && (0, M.jsxs)(L, {
                    children: [(0, M.jsx)(j, {
                      "data-testid": "navMore",
                      children: t.formatMessage(h.A.nav_more_dropdown)
                    }), (0, M.jsx)(P, {
                      children: (0, M.jsx)(A, {
                        children: (0, M.jsx)(T, {
                          children: c
                        })
                      })
                    })]
                  })]
                }), (0, M.jsx)(T, {
                  ref: u,
                  className: y,
                  "aria-hidden": "true",
                  children: (0, M.jsx)(k.Provider, {
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
        T = (0, s.forwardRef)((function(e, a) {
          let {
            children: t,
            className: s,
            ...n
          } = e;
          return (0, M.jsx)(o.List, {
            ref: a,
            className: c()(w.menuList, s),
            ...n,
            children: t
          })
        })),
        I = (0, s.createContext)({
          value: ""
        }),
        L = (0, s.forwardRef)((function(e, a) {
          let {
            testId: t,
            children: n,
            ...i
          } = e;
          const {
            depth: d
          } = (0, s.useContext)(B), {
            inMobileMenu: l
          } = (0, s.useContext)(_.xN), g = (0, s.useRef)(null), m = `rsm-${(0,r.useId)()}`;
          return (0, M.jsx)(I.Provider, {
            value: {
              value: m,
              ref: g
            },
            children: (0, M.jsx)(o.Item, {
              value: m,
              ref: u(a, g),
              className: c()({
                [w.menuItem]: !0,
                [w.nestedMenuItem]: 1 === d && !l
              }),
              "data-testid": t,
              ...i,
              children: n
            })
          })
        })),
        j = (0, s.forwardRef)((function(e, a) {
          const {
            children: t,
            ...n
          } = e, {
            inMenu: r
          } = (0, s.useContext)(x), {
            inAvatarMenu: i
          } = (0, s.useContext)(p.QY), {
            inQuickMenu: l
          } = (0, s.useContext)(f.s), {
            inMobileMenu: g
          } = (0, s.useContext)(_.xN), {
            inSubMenu: m,
            depth: u
          } = (0, s.useContext)(B);
          return (0, M.jsxs)(o.Trigger, {
            ref: a,
            onPointerMove: y,
            onPointerLeave: y,
            className: c()(w.menuTrigger, {
              [w.menuLink]: r,
              [w.quickMenuLink]: l,
              [w.mobileMenuLink]: g,
              [w.subMenuLink]: m,
              [w.avatarMenuLink]: i,
              [w.nestedLink]: u > 1
            }),
            ...n,
            children: [t, (0, M.jsx)("img", {
              src: d.br,
              className: w.menuTriggerChevron,
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
        N = {
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
        P = (0, s.forwardRef)((function(e, a) {
          let {
            children: t,
            animationOverride: n,
            ...r
          } = e;
          const {
            navContentRef: i
          } = (0, s.useContext)(b.PY), {
            inSubMenu: d,
            openedNav: l
          } = (0, s.useContext)(B), {
            openedNav: g
          } = (0, s.useContext)(x), {
            openedNav: u
          } = (0, s.useContext)(_.iU), {
            value: v,
            ref: f
          } = (0, s.useContext)(I), {
            inMobileMenu: h
          } = (0, s.useContext)(_.xN), {
            isHidden: C
          } = (0, s.useContext)(k), {
            inAvatarMenu: T
          } = (0, s.useContext)(p.QY), L = [l, g, u].includes(v);
          return C ? null : (0, M.jsx)(m.AnimatePresence, {
            children: L && (0, M.jsx)(o.Content, {
              forceMount: !0,
              ref: a,
              className: c()({
                [w.dropdownMenu]: !h,
                [w.dropdownMenuMobile]: h,
                [w.nestedDropdown]: d && !h,
                [w.avatarNestedDropdown]: T
              }),
              onPointerEnter: y,
              onPointerLeave: y,
              onPointerDown: y,
              onPointerDownOutside: d ? y : null,
              style: {
                left: f?.current?.offsetLeft,
                top: (f?.current?.offsetHeight ?? 0) + 3
              },
              asChild: !0,
              ...r,
              children: (0, M.jsx)(m.motion.div, {
                variants: n || d || h ? N : S,
                initial: "closed",
                animate: "open",
                exit: "closed",
                transition: {
                  duration: .2
                },
                children: t
              })
            })
          })
        })),
        B = (0, s.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        A = (0, s.forwardRef)((function(e, a) {
          let {
            children: t,
            ...n
          } = e;
          const {
            depth: r
          } = (0, s.useContext)(B), {
            openedNav: i
          } = (0, s.useContext)(_.iU), {
            isNavHidden: d
          } = (0, s.useContext)(b.PY), [l, g] = (0, s.useState)("");
          (0, s.useEffect)((() => {
            g("")
          }), [i, d]);
          const c = r ? r + 1 : 1;
          return (0, M.jsx)(B.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: l,
              depth: c
            },
            children: (0, M.jsx)(o.Root, {
              ref: a,
              defaultValue: "",
              value: l,
              onValueChange: e => {
                g(e === l ? "" : e)
              },
              orientation: "vertical",
              className: w.subMenu,
              "data-depth": c,
              ...n,
              asChild: !0,
              children: (0, M.jsx)("div", {
                children: t
              })
            })
          })
        })),
        R = (0, s.forwardRef)((function(e, a) {
          let {
            className: t,
            ...s
          } = e;
          const n = c()(w.menuIcon, t);
          return (0, M.jsx)("img", {
            ref: a,
            className: n,
            ...s
          })
        })),
        D = (0, s.forwardRef)((function(e, a) {
          const {
            children: t,
            asChild: r,
            className: i,
            onClick: d,
            external: g,
            ...m
          } = e, u = (0, n.useIntl)(), {
            inMenu: b
          } = (0, s.useContext)(x), {
            inAvatarMenu: y,
            closeAvatarMenu: k
          } = (0, s.useContext)(p.QY), {
            inQuickMenu: C
          } = (0, s.useContext)(f.s), {
            inMobileMenu: T,
            closeMobileMenu: I
          } = (0, s.useContext)(_.xN), {
            inSubMenu: L,
            depth: j
          } = (0, s.useContext)(B), S = c()({
            [w.menuLink]: b,
            [w.quickMenuLink]: C,
            [w.mobileMenuLink]: T,
            [w.subMenuLink]: L,
            [w.avatarMenuLink]: y,
            [w.nestedLink]: j > 1
          }, i), N = r ? v.Slot : "a";
          return (0, M.jsx)(o.Link, {
            asChild: !0,
            onSelect: e => {
              k?.(), I?.(), d?.(e)
            },
            ...m,
            children: (0, M.jsxs)(N, {
              ref: a,
              className: S,
              children: [(0, M.jsx)(v.Slottable, {
                children: t
              }), g && (0, M.jsx)(l.ExternalLink, {
                label: u.formatMessage(h.A.nav_rockstargames_external_link),
                className: w.externalLinkIcon
              })]
            })
          })
        }))
    },
    73012: (e, a, t) => {
      t.d(a, {
        qe: () => w,
        xN: () => M,
        z1: () => b,
        iU: () => h
      });
      var s = t(71127),
        n = t(63582),
        o = t(24036),
        r = t.n(o),
        i = t(9046),
        d = t(24780),
        l = t(63694),
        g = t(81788),
        c = t(10201),
        _ = t(46690),
        m = t(95966),
        u = t(49928),
        v = t(74482),
        p = t(70954);
      let f = {
        menuMobile: "rockstargames-modules-core-headerfd282c0ed200fdb171dae24f3902f6b1",
        menuMobileItems: "rockstargames-modules-core-headera72000cfbe48e7dc2c0f071ecf0b533c",
        menuMobileItem: "rockstargames-modules-core-headerb9830b1f4dd5e2813b68130c424c3aa6",
        menuMobileCta: "rockstargames-modules-core-headerd4f74f7e1cef072e336f954fae948a07",
        mobileMenuDrawer: "rockstargames-modules-core-headerd28d9855f9427597e52d7e74abbf75dc",
        fullMenuOpen: "rockstargames-modules-core-headerb179669051e37adce8fd2936eb8222de",
        mobileMenuContainer: "rockstargames-modules-core-headerd8335dcffc8b201a6f702cc7b22ebab7",
        mobileMenuOpen: "rockstargames-modules-core-headerb523d5fd993427cae2eda1f5b9225699",
        mobileMenuSearchOpen: "rockstargames-modules-core-headera2283f7a71bfe0902ebe7176a1f3f45a",
        overlay: "rockstargames-modules-core-headerd07fb32788b786e529979364bf8fcb5c",
        mobileMenuHamburgerContainer: "rockstargames-modules-core-headerfb5e947b9aa01caf3aa9bca4ddcb3dee",
        mobileMenuHamburger: "rockstargames-modules-core-headerffee60778b241ac8cd6bc04685b782d3",
        open: "rockstargames-modules-core-headere31b18e5d92d04a3ffe036ff25c1ee5a"
      };
      const h = (0, s.createContext)({
          openedNav: ""
        }),
        b = e => {
          let {
            children: a
          } = e;
          const [t, n] = (0, s.useState)("");
          return (0, p.jsx)(h.Provider, {
            value: {
              openedNav: t
            },
            children: (0, p.jsx)(i.Root, {
              value: t,
              onValueChange: n,
              children: (0, p.jsx)(i.List, {
                className: f.menuMobileItems,
                children: a
              })
            })
          })
        },
        M = (0, s.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        w = e => {
          let {
            children: a
          } = e;
          const t = (0, g.useIntl)(),
            [o, i] = (0, s.useState)(!1),
            [h, b] = (0, s.useState)(!1),
            {
              brand: w,
              setForceBackground: x
            } = (0, s.useContext)(c.PY),
            {
              windowWidth: k
            } = (0, m.useWindowResize)(),
            C = {
              show: {
                height: "100dvh",
                paddingBottom: o && w ? "var(--global-navigation-height)" : "",
                transition: {
                  ...u.b.hamburgerOpen,
                  staggerChildren: .05
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: u.b.hamburgerClose
              }
            };
          return (0, p.jsx)(M.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                i(!1)
              }
            },
            children: (0, p.jsxs)(d.Root, {
              open: o,
              onOpenChange: i,
              children: [(0, p.jsx)(_.E, {
                showOn: "mobile",
                children: (0, p.jsx)(y, {
                  onClick: () => {
                    i(!o), b(!1)
                  },
                  isMenuOpen: o
                })
              }), (0, p.jsx)(n.AnimatePresence, {
                children: o && (0, p.jsx)(_.E, {
                  showOn: "mobile",
                  children: (0, p.jsxs)(n.motion.div, {
                    className: f.dialogWrap,
                    variants: C,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, p.jsx)(d.Overlay, {
                      className: f.overlay
                    }), (0, p.jsx)(d.Content, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => i(!1),
                      children: (0, p.jsxs)(n.motion.div, {
                        className: r()(f.mobileMenuDrawer, f.mobileMenuOpen),
                        variants: C,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, p.jsx)(l.VisuallyHidden, {
                          children: (0, p.jsx)(d.Title, {
                            children: t.formatMessage(v.A.nav_mobilemenu_title)
                          })
                        }), (0, p.jsx)("div", {
                          className: r()(h ? f.mobileMenuSearchOpen : "", f.mobileMenuContainer),
                          children: (0, p.jsx)("div", {
                            className: f.menuMobile,
                            children: a
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
        y = e => {
          let {
            className: a,
            isMenuOpen: t,
            ...s
          } = e;
          const n = (0, g.useIntl)();
          return (0, p.jsx)("div", {
            className: r()(f.mobileMenuHamburgerContainer, a),
            children: (0, p.jsxs)(d.Trigger, {
              title: n.formatMessage(t ? v.A.nav_mobilemenu_close : v.A.nav_mobilemenu_open),
              type: "button",
              className: r()(f.mobileMenuHamburger, {
                [f.open]: t
              }),
              "data-testid": "hamburgerNav",
              ...s,
              children: [(0, p.jsx)("span", {
                className: f.bar,
                "data-opened": t
              }), (0, p.jsx)("span", {
                className: f.bar,
                "data-opened": t
              }), (0, p.jsx)("span", {
                className: f.bar,
                "data-opened": t
              })]
            })
          })
        }
    },
    74482: (e, a, t) => {
      t.d(a, {
        A: () => s
      });
      const s = (0, t(81788).defineMessages)({
        nav_rockstargames_home: {
          id: "nav_rockstargames_home",
          defaultMessage: "Rockstar Games Home"
        },
        nav_rockstargames_logo: {
          id: "nav_rockstargames_logo",
          defaultMessage: "Click to open menu"
        },
        nav_rockstargames_external_link: {
          id: "nav_rockstargames_external_link",
          defaultMessage: "External"
        },
        nav_mobilemenu_open: {
          id: "nav_mobilemenu_open",
          defaultMessage: "Open menu"
        },
        nav_mobilemenu_close: {
          id: "nav_mobilemenu_close",
          defaultMessage: "Close menu"
        },
        nav_mobilemenu_title: {
          id: "nav_mobilemenu_title",
          defaultMessage: "Navigation menu"
        },
        nav_avatarmenu_title: {
          id: "nav_avatarmenu_title",
          defaultMessage: "Avatar menu"
        },
        search_action: {
          id: "search_action",
          defaultMessage: "Search"
        },
        search_open_button: {
          id: "search_open_button",
          defaultMessage: "Open Search"
        },
        search_close_button: {
          id: "search_close_button",
          defaultMessage: "Close Search"
        },
        search_placeholder: {
          id: "search_placeholder",
          defaultMessage: "Search Rockstar Games..."
        },
        search_target_aria_label: {
          id: "search_target_aria_label",
          defaultMessage: "Search {target}"
        },
        nav_quick_access_home: {
          id: "nav_quick_access_home",
          defaultMessage: "Home"
        },
        nav_quick_access_games: {
          id: "nav_quick_access_games",
          defaultMessage: "Games"
        },
        nav_quick_access_newswire: {
          id: "nav_quick_access_newswire",
          defaultMessage: "Newswire"
        },
        nav_more_dropdown: {
          id: "nav_more_dropdown",
          defaultMessage: "More"
        },
        quick_access_title: {
          id: "quick_access_title",
          defaultMessage: "Rockstar Games"
        },
        nav_opens_in_new_window: {
          id: "nav_opens_in_new_window",
          defaultMessage: "{text} (Link opens in new window)"
        },
        accessibility_skip_button: {
          id: "accessibility_skip_button",
          defaultMessage: "Skip the Menu"
        },
        avatar_menu_open: {
          id: "avatar_menu_open",
          defaultMessage: "Open Player Menu"
        },
        avatar_menu_close: {
          id: "avatar_menu_close",
          defaultMessage: "Close Player Menu"
        }
      })
    },
    94222: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg"
    }
  }
]);