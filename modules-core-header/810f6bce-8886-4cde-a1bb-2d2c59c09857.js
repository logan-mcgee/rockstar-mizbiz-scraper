try {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new a.Error).stack;
  e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "810f6bce-8886-4cde-a1bb-2d2c59c09857", a._sentryDebugIdIdentifier = "sentry-dbid-810f6bce-8886-4cde-a1bb-2d2c59c09857")
} catch (a) {} {
  let a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[(new a.Error).stack] = Object.assign({}, a._sentryModuleMetadata[(new a.Error).stack], {
    release: "23734b3e70371e18a05f141b62211d2d95128dc9",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "23734b3e70371e18a05f141b62211d2d95128dc9"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8846], {
    10046: a => {
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    21315: (a, e, t) => {
      t.d(e, {
        Jv: () => D,
        QY: () => B,
        VO: () => H,
        Kr: () => z,
        lt: () => q,
        bA: () => E,
        cu: () => V
      });
      var s = t(71127),
        n = t(42638),
        o = t(61339),
        r = t(24780),
        i = t(63694),
        d = t(63582),
        l = t(81788),
        g = t(61225),
        c = t(38324),
        _ = t(46690),
        m = t(74482),
        u = t(54094),
        v = t(24036),
        p = t.n(v),
        f = t(34902);
      var h = t(70954);
      const b = a => {
        let {
          children: e,
          className: t,
          ...n
        } = a;
        const {
          containerRef: o
        } = (0, s.useContext)(c.PY);
        return (0, h.jsx)(f.Root, {
          className: p()("rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563", t),
          container: o?.current,
          ...n,
          children: e
        })
      };
      let w = "rockstargames-modules-core-headerc21d08286895e5d5d2fc1a7586c6a11d",
        M = "rockstargames-modules-core-headerfbdd0b16d9b61ed0dd3f5e76b9a1f9de",
        y = "rockstargames-modules-core-headerb68abcf23dae4ff8aa054bd9ff446a9a",
        x = "rockstargames-modules-core-headereef2738c4b5cf2f7e69238683d6d503f",
        k = "rockstargames-modules-core-headeredeb54ea736b008d967474a5c9b63a33",
        C = "rockstargames-modules-core-headerbe1cd057f4c550474a77b822a5eb729e",
        T = "rockstargames-modules-core-headerb82b1a7297d0e2f91a3ac183adcb21c4",
        I = "rockstargames-modules-core-headerfa4a01e9a53561bce475cd223f7cafe1",
        L = "rockstargames-modules-core-headerf43b908943d5a326555406c89c919f3a",
        j = "rockstargames-modules-core-headerc63374d1c5bca5343c48709064ac9ecc",
        S = "rockstargames-modules-core-headerc2907f284a3a3dd7c419856bdb6a99ee",
        N = "rockstargames-modules-core-headerda0dbf9fd75e574727b5d795d7681bfd",
        P = "rockstargames-modules-core-headerad542b51868c54065401d2ccb5f6159f";
      const B = (0, s.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        A = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        R = {
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
        O = {
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
        D = a => {
          let {
            avatarIconUrl: e,
            isLoggedIn: u,
            children: v
          } = a;
          const p = (0, l.useIntl)(),
            f = t(10046),
            [L, j] = (0, s.useState)(!1),
            [S, N] = (0, s.useState)(!1),
            [P, R] = (0, s.useState)(["open"]),
            {
              isNavHidden: D
            } = (0, s.useContext)(c.PY),
            G = a => {
              const e = ["open", ...a.filter((a => "open" !== a))];
              R(e)
            },
            z = () => {
              j(!1), N(!1)
            };
          return (0, s.useEffect)((() => {
            D && z()
          }), [D]), (0, h.jsxs)(B.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: P,
              closeAvatarMenu: z
            },
            children: [(0, h.jsx)(n.Root, {
              open: L,
              onOpenChange: j,
              children: (0, h.jsx)(_.E, {
                showOn: "desktop",
                children: (0, h.jsxs)("div", {
                  className: w,
                  children: [(0, h.jsx)(n.Trigger, {
                    asChild: !0,
                    children: (0, h.jsxs)("button", {
                      className: T,
                      "aria-label": p.formatMessage(L ? m.A.avatar_menu_close : m.A.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": u,
                      children: [(0, h.jsx)("img", {
                        className: I,
                        src: e || f
                      }), (0, h.jsx)("img", {
                        className: I,
                        src: e || f,
                        alt: ""
                      })]
                    })
                  }), (0, h.jsx)(d.AnimatePresence, {
                    children: L && (0, h.jsx)(n.Content, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      children: (0, h.jsx)(d.motion.div, {
                        variants: A,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, h.jsx)(o.Root, {
                          type: "multiple",
                          value: P,
                          onValueChange: G,
                          collapsible: !0,
                          children: (0, h.jsx)(g.aC, {
                            className: M,
                            children: v
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, h.jsx)(r.Root, {
              open: S,
              onOpenChange: N,
              children: (0, h.jsx)(_.E, {
                showOn: "mobile",
                children: (0, h.jsxs)("div", {
                  className: w,
                  children: [(0, h.jsx)(r.Trigger, {
                    className: T,
                    "aria-label": p.formatMessage(S ? m.A.avatar_menu_close : m.A.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": u,
                    children: (0, h.jsx)("button", {
                      className: T,
                      "aria-label": p.formatMessage(L ? m.A.avatar_menu_close : m.A.avatar_menu_open),
                      children: (0, h.jsx)("img", {
                        className: I,
                        src: e || f
                      })
                    })
                  }), (0, h.jsx)(d.AnimatePresence, {
                    children: S && (0, h.jsx)(b, {
                      asChild: !0,
                      children: (0, h.jsxs)(r.Content, {
                        forceMount: !0,
                        children: [(0, h.jsx)(i.VisuallyHidden, {
                          children: (0, h.jsx)(r.Title, {
                            children: p.formatMessage(m.A.nav_avatarmenu_title)
                          })
                        }), (0, h.jsxs)(d.motion.div, {
                          variants: O,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: y,
                          children: [(0, h.jsx)(r.Close, {
                            className: k,
                            children: (0, h.jsx)("div", {
                              className: C
                            })
                          }), (0, h.jsx)(o.Root, {
                            type: "multiple",
                            value: P,
                            onValueChange: G,
                            collapsible: !0,
                            children: (0, h.jsx)(g.aC, {
                              className: x,
                              children: v
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
        z = a => {
          let {
            children: e,
            value: t
          } = a;
          const n = (0, s.useId)();
          return (0, h.jsx)(G.Provider, {
            value: {
              avatarMenuItemId: t || n
            },
            children: (0, h.jsx)(o.Item, {
              value: t || n,
              className: L,
              children: e
            })
          })
        },
        E = a => {
          let {
            children: e,
            ...t
          } = a;
          return (0, h.jsx)(o.Header, {
            children: (0, h.jsx)(o.Trigger, {
              className: j,
              ...t,
              children: e
            })
          })
        },
        V = a => {
          let {
            children: e,
            ...t
          } = a;
          return (0, h.jsx)(o.Header, {
            children: (0, h.jsxs)(o.Trigger, {
              className: S,
              "data-testid": "header-language-selector-button",
              ...t,
              children: [e, (0, h.jsx)("img", {
                src: u.br,
                className: N,
                alt: ""
              })]
            })
          })
        },
        q = a => {
          let {
            children: e,
            ...t
          } = a;
          const {
            avatarMenuOpenItems: n
          } = (0, s.useContext)(B), {
            avatarMenuItemId: r
          } = (0, s.useContext)(G), i = n.indexOf(r) >= 0;
          return (0, h.jsx)(o.Content, {
            forceMount: !0,
            asChild: !0,
            ...t,
            children: (0, h.jsx)(d.motion.div, {
              variants: R,
              initial: "closed",
              animate: i ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: e
            })
          })
        },
        H = a => {
          let {
            children: e,
            ...t
          } = a;
          return (0, h.jsx)("div", {
            className: P,
            ...t,
            children: e
          })
        }
    },
    22147: (a, e, t) => {
      t.d(e, {
        A: () => Va
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
        gtaIvEflc: () => w,
        gtaLcs: () => M,
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
        midnightclub2: () => O,
        midnightclub3: () => D,
        midnightclubStreetRacing: () => G,
        oni: () => z,
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
        wildMetal: () => aa
      });
      var n = {};
      t.r(n), t.d(n, {
        GamesMenu: () => Aa,
        GamesMenuItem: () => Ra,
        default: () => Da
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
        c = a => ({
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
            text: a.formatMessage(l.nav_bully_game_overview),
            gaText: l.nav_bully_game_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: a.formatMessage(l.nav_bully_accomplishments),
            gaText: l.nav_bully_accomplishments.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: a.formatMessage(l.nav_bully_support),
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
            text: a.formatMessage(l.nav_bully_cta_buy_now),
            gaText: l.nav_bully_cta_buy_now.defaultMessage,
            location: {
              domain: g,
              path: "/bully/?section=order"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        }),
        _ = a => ({
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
            text: a.formatMessage(l.nav_careers_home),
            gaText: l.nav_careers_home.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/careers"
            },
            dataTestId: "careersLink"
          }, {
            text: a.formatMessage(l.nav_careers_openings),
            gaText: l.nav_careers_openings.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/careers/openings"
            },
            dataTestId: "careersOpeningsLink"
          }, {
            text: a.formatMessage(l.nav_careers_contact_us),
            gaText: l.nav_careers_contact_us.defaultMessage,
            type: "nav-no-link",
            dataTestId: "careersContactUsLink"
          }, {
            text: a.formatMessage(l.nav_careers_careers_on_linkedin),
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
        v = a => ({
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
            text: a.formatMessage(l.nav_gta3_cta_buy_now),
            gaText: l.nav_gta3_cta_buy_now.defaultMessage,
            variant: "highlight",
            dataTestId: "gta3BuyNowCta",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        }),
        p = a => ({
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
            text: a.formatMessage(l.nav_gtaiv_overview),
            gaText: l.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: a.formatMessage(l.nav_gtaiv_accomplishments),
            gaText: l.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: r.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(l.nav_gtaiv_support),
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
            text: a.formatMessage(l.nav_gtaiv_cta_buy_now),
            gaText: l.nav_gtaiv_cta_buy_now.defaultMessage,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            dataTestId: "gtaivPurchaseLink"
          }
        }),
        f = a => ({
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
          cta: {
            dataTestId: "gtavPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: r.C.www,
              path: "/gta-v?info=order"
            },
            text: a.formatMessage(l.nav_gtav_cta_buy_now),
            gaText: l.nav_gtav_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtavLink",
            location: {
              domain: r.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(l.nav_gtav_overview),
            gaText: l.nav_gtav_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(l.nav_gtav_discover),
              gaText: l.nav_gtav_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(l.nav_gtav_my_character),
              gaText: l.nav_gtav_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(l.nav_gtav_jobs),
              gaText: l.nav_gtav_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(l.nav_gtav_guides),
              gaText: l.nav_gtav_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlatesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(l.nav_gtav_licence_plate_creator),
              gaText: l.nav_gtav_licence_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(l.nav_gtav_gta_online),
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
              text: a.formatMessage(l.nav_gtav_stats),
              gaText: l.nav_gtav_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(l.nav_gtav_missions),
              gaText: l.nav_gtav_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(l.nav_gtav_checklist),
              gaText: l.nav_gtav_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(l.nav_gtav_accomplishments),
              gaText: l.nav_gtav_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavSpLink",
            text: a.formatMessage(l.nav_gtav_story),
            gaText: l.nav_gtav_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtav+Link",
            location: {
              domain: r.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(l.nav_gtav_gta_plus),
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
                text: a.formatMessage(l.nav_gtav_jobs_browse_all),
                gaText: l.nav_gtav_jobs_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCommunitySeriesLink",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                text: a.formatMessage(l.nav_gtav_community_series),
                gaText: l.nav_gtav_community_series.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyJobsButtons",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                },
                text: a.formatMessage(l.nav_gtav_my_jobs),
                gaText: l.nav_gtav_my_jobs.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavPlaylistsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/gtav/playlists"
                },
                text: a.formatMessage(l.nav_gtav_playlists),
                gaText: l.nav_gtav_playlists.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavJobsDropdown",
              text: a.formatMessage(l.nav_gtav_jobs),
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
                text: a.formatMessage(l.nav_gtav_crews_browse_all),
                gaText: l.nav_gtav_crews_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyCrewsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0,
                text: a.formatMessage(l.nav_gtav_my_crews),
                gaText: l.nav_gtav_my_crews.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateCrewButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                },
                text: a.formatMessage(l.nav_gtav_create_crew),
                gaText: l.nav_gtav_create_crew.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateEmblemButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/emblems"
                },
                text: a.formatMessage(l.nav_gtav_emblem_editor),
                gaText: l.nav_gtav_emblem_editor.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavCrewsDropdown",
              text: a.formatMessage(l.nav_gtav_crews),
              gaText: l.nav_gtav_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
              },
              text: a.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavCommunityDropdown",
            text: a.formatMessage(l.nav_gtav_community),
            gaText: l.nav_gtav_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_gtav_support),
            gaText: l.nav_gtav_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta5"
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
            text: a.formatMessage(l.nav_gtaiveflc_cta_buy_now),
            gaText: l.nav_gtaiveflc_cta_buy_now.defaultMessage
          },
          links: [{
            text: a.formatMessage(l.nav_gtaiv_overview),
            gaText: l.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: r.C.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: a.formatMessage(l.nav_gtaiv_accomplishments),
            gaText: l.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: r.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(l.nav_gtaiv_support),
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
        M = () => ({
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
        x = a => ({
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
          cta: {
            dataTestId: "gtaoPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: r.C.www,
              path: "/gta-online?info=order"
            },
            text: a.formatMessage(l.nav_gtao_cta_buy_now),
            gaText: l.nav_gtao_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: r.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(l.nav_gtao_overview),
            gaText: l.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(l.nav_gtao_discover),
              gaText: l.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(l.nav_gtao_my_character),
              gaText: l.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(l.nav_gtao_guides),
              gaText: l.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(l.nav_gtao_license_plate_creator),
              gaText: l.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(l.nav_gtao_gtao),
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
              text: a.formatMessage(l.nav_gtao_stats),
              gaText: l.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(l.nav_gtao_missions),
              gaText: l.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(l.nav_gtao_checklist),
              gaText: l.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(l.nav_gtao_accomplishments),
              gaText: l.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: a.formatMessage(l.nav_gtao_story),
            gaText: l.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: r.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(l.nav_gtao_gta_plus),
            gaText: l.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: a.formatMessage(l.nav_gtao_jobs_browse_all),
                gaText: l.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_community_series),
                gaText: l.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: a.formatMessage(l.nav_gtao_my_jobs),
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
                text: a.formatMessage(l.nav_gtao_jobs_playlists),
                gaText: l.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: a.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: a.formatMessage(l.nav_gtao_browse_crews),
                gaText: l.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_my_crews),
                gaText: l.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(l.nav_gtao_crews_create),
                gaText: l.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_emblem_editor),
                gaText: l.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/emblems"
                }
              }],
              text: a.formatMessage(l.nav_gtao_crews),
              gaText: l.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
              },
              text: a.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: a.formatMessage(l.nav_gtao_community),
            gaText: l.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_gtao_support),
            gaText: l.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta-online"
        }),
        k = a => ({
          appearancePaths: {
            [r.C.www]: [{
              path: "/gta-plus/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
          cta: {
            dataTestId: "gtaoPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: r.C.www,
              path: "/gta-online?info=order"
            },
            text: a.formatMessage(l.nav_gtao_cta_buy_now),
            gaText: l.nav_gtao_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: r.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(l.nav_gtao_overview),
            gaText: l.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(l.nav_gtao_discover),
              gaText: l.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(l.nav_gtao_my_character),
              gaText: l.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(l.nav_gtao_guides),
              gaText: l.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(l.nav_gtao_license_plate_creator),
              gaText: l.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(l.nav_gtao_gtao),
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
              text: a.formatMessage(l.nav_gtao_stats),
              gaText: l.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(l.nav_gtao_missions),
              gaText: l.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(l.nav_gtao_checklist),
              gaText: l.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(l.nav_gtao_accomplishments),
              gaText: l.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: a.formatMessage(l.nav_gtao_story),
            gaText: l.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: r.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(l.nav_gtao_gta_plus),
            gaText: l.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: a.formatMessage(l.nav_gtao_jobs_browse_all),
                gaText: l.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_community_series),
                gaText: l.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: a.formatMessage(l.nav_gtao_my_jobs),
                gaText: l.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_jobs_playlists),
                gaText: l.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: a.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: a.formatMessage(l.nav_gtao_browse_crews),
                gaText: l.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_my_crews),
                gaText: l.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(l.nav_gtao_crews_create),
                gaText: l.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_emblem_editor),
                gaText: l.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/emblems/new"
                }
              }],
              text: a.formatMessage(l.nav_gtao_crews),
              gaText: l.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-guidelines"
              },
              text: a.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: a.formatMessage(l.nav_gtao_community),
            gaText: l.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_gtao_support),
            gaText: l.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta-plus"
        }),
        C = a => ({
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
            text: a.formatMessage(l.nav_gtasanandreas_cta_buy_now),
            gaText: l.nav_gtasanandreas_cta_buy_now.defaultMessage,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            dataTestId: "gtaSanAndreasPurchaseLink"
          }
        }),
        T = a => ({
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
            text: a.formatMessage(l.nav_gta_trilogy_overview),
            gaText: l.nav_gta_trilogy_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: r.C.www,
              path: "/GTATrilogy"
            }
          }, {
            text: a.formatMessage(l.nav_gta_trilogy_accomplishments),
            gaText: l.nav_gta_trilogy_accomplishments.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: a.formatMessage(l.nav_gta_trilogy_gtasa),
              gaText: l.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gtavc),
              gaText: l.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gta3),
              gaText: l.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: a.formatMessage(l.nav_gta_trilogy_support),
            gaText: l.nav_gta_trilogy_support.defaultMessage,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: a.formatMessage(l.nav_gta_trilogy_gtasa),
              gaText: l.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: r.C.support,
                path: "/categories/115001620287"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gtavc),
              gaText: l.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: r.C.support,
                path: "/categories/115001619868"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gta3),
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
            text: a.formatMessage(l.nav_gta_trilogy_cta_buy_now),
            gaText: l.nav_gta_trilogy_cta_buy_now.defaultMessage,
            dataTestId: "gtaTrilogyPurchaseLink",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
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
            text: a.formatMessage(l.nav_gtavc_cta_buy_now),
            gaText: l.nav_gtavc_cta_buy_now.defaultMessage,
            variant: "highlight",
            dataTestId: "gtaVcBuyNowLink",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
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
        j = a => ({
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
            text: a.formatMessage(l.nav_lanoire_overview),
            gaText: l.nav_lanoire_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: r.C.www,
              path: "/games/lanoire"
            }
          }, {
            text: a.formatMessage(l.nav_lanoire_progress),
            gaText: l.nav_lanoire_progress.defaultMessage,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: a.formatMessage(l.nav_lanoire_pc_console),
              gaText: l.nav_lanoire_pc_console.defaultMessage,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: a.formatMessage(l.nav_lanoire_case_tracker),
                gaText: l.nav_lanoire_case_tracker.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_checklist),
                gaText: l.nav_lanoire_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_stats),
                gaText: l.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_accomplishments),
                gaText: l.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_badge_pursuit),
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
              text: a.formatMessage(l.nav_lanoire_vr_case_files),
              gaText: l.nav_lanoire_vr_case_files.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: a.formatMessage(l.nav_lanoire_stats),
                gaText: l.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_accomplishments),
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
            text: a.formatMessage(l.nav_lanoire_support),
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
            text: a.formatMessage(l.nav_lanoire_cta_buy_now),
            gaText: l.nav_lanoire_cta_buy_now.defaultMessage,
            dataTestId: "lanoirePurchaseLink",
            location: {
              domain: r.C.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy"
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
        A = a => ({
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
            text: a.formatMessage(l.nav_mp3_overview),
            gaText: l.nav_mp3_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: r.C.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: a.formatMessage(l.nav_mp3_progress),
            gaText: l.nav_mp3_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: a.formatMessage(l.nav_mp3_accomplishments),
              gaText: l.nav_mp3_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: a.formatMessage(l.nav_mp3_singleplayer),
              gaText: l.nav_mp3_singleplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: a.formatMessage(l.nav_mp3_career),
                gaText: l.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_checklist),
                gaText: l.nav_mp3_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_grinds),
                gaText: l.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_chapters),
                gaText: l.nav_mp3_chapters.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_weapons),
                gaText: l.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_leaderboards),
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
              text: a.formatMessage(l.nav_mp3_multiplayer),
              gaText: l.nav_mp3_multiplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: a.formatMessage(l.nav_mp3_career),
                gaText: l.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_grinds),
                gaText: l.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_weapons),
                gaText: l.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_leaderboards),
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
              text: a.formatMessage(l.nav_mp3_crews),
              gaText: l.nav_mp3_crews.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: a.formatMessage(l.nav_mp3_multiplayer),
                gaText: l.nav_mp3_multiplayer.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_score_attack),
                gaText: l.nav_mp3_score_attack.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_ny_minute),
                gaText: l.nav_mp3_ny_minute.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_checkpoint_challenge),
                gaText: l.nav_mp3_checkpoint_challenge.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_featured),
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
            text: a.formatMessage(l.nav_mp3_support),
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
            text: a.formatMessage(l.nav_mp3_cta_buy_now),
            gaText: l.nav_mp3_cta_buy_now.defaultMessage,
            dataTestId: "mp3PurchaseLink",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-max-payne-3"
            },
            ga: "cta_buy"
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
        O = () => ({
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
        D = () => ({
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
        G = () => ({
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
        z = () => ({
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
        E = a => ({
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
          cta: {
            dataTestId: "rdoPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: r.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_rdo_cta_buy_now),
            gaText: l.nav_rdo_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "rdoLink",
            location: {
              domain: r.C.www,
              path: "/reddeadonline"
            },
            text: a.formatMessage(l.nav_rdo_overview),
            gaText: l.nav_rdo_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/getting-started"
              },
              text: a.formatMessage(l.nav_rdo_getting_started),
              gaText: l.nav_rdo_getting_started.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/roles"
              },
              text: a.formatMessage(l.nav_rdo_specialist_roles),
              gaText: l.nav_rdo_specialist_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoLOOLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              },
              text: a.formatMessage(l.nav_rdo_story_missions),
              gaText: l.nav_rdo_story_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPossesLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              },
              text: a.formatMessage(l.nav_rdo_posses_free_roam),
              gaText: l.nav_rdo_posses_free_roam.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoSAELink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              },
              text: a.formatMessage(l.nav_rdo_competitive_series),
              gaText: l.nav_rdo_competitive_series.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/customization"
              },
              text: a.formatMessage(l.nav_rdo_customization),
              gaText: l.nav_rdo_customization.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoProgressLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/rank-and-fortune"
              },
              text: a.formatMessage(l.nav_rdo_progression),
              gaText: l.nav_rdo_progression.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoExploreDropdown",
            text: a.formatMessage(l.nav_rdo_explore),
            gaText: l.nav_rdo_explore.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoOverviewButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/overview"
              },
              text: a.formatMessage(l.nav_rdo_my_character),
              gaText: l.nav_rdo_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/roles"
              },
              text: a.formatMessage(l.nav_rdo_roles),
              gaText: l.nav_rdo_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/clubrewards"
              },
              text: a.formatMessage(l.nav_rdo_club_rewards),
              gaText: l.nav_rdo_club_rewards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRankButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/rank"
              },
              text: a.formatMessage(l.nav_rdo_rank_unlocks),
              gaText: l.nav_rdo_rank_unlocks.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAwardsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/awards"
              },
              text: a.formatMessage(l.nav_rdo_awards),
              gaText: l.nav_rdo_awards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/achievements"
              },
              text: a.formatMessage(l.nav_rdo_accomplishments),
              gaText: l.nav_rdo_accomplishments.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/benefits"
              },
              text: a.formatMessage(l.nav_rdo_benefits),
              gaText: l.nav_rdo_benefits.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoProgressDropdown",
            text: a.formatMessage(l.nav_rdo_progress),
            gaText: l.nav_rdo_progress.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoPosseButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/posse"
              },
              text: a.formatMessage(l.nav_rdo_posses),
              gaText: l.nav_rdo_posses.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
              },
              text: a.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoCommunityDropdown",
            text: a.formatMessage(l.nav_rdo_community),
            gaText: l.nav_rdo_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "rdoCatalogueButton",
            location: {
              domain: r.C.socialClub,
              path: "/games/rdr2/catalogue/online/"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_rdo_catalogue),
            gaText: l.nav_rdo_catalogue.defaultMessage,
            type: "nav-external"
          }, {
            dataTestId: "rdoSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/115001624507"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_rdo_support),
            gaText: l.nav_rdo_support.defaultMessage,
            type: "nav-external"
          }],
          site: "rdo"
        }),
        V = a => ({
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
            text: a.formatMessage(l.nav_rdr_cta_buy_now),
            gaText: l.nav_rdr_cta_buy_now.defaultMessage,
            dataTestId: "rsrBuyNowCta",
            location: {
              domain: r.C.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy"
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
            text: a.formatMessage(l.nav_rdr2_overview),
            gaText: l.nav_rdr2_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: r.C.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: a.formatMessage(l.nav_rdr2_explore),
            gaText: l.nav_rdr2_explore.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: a.formatMessage(l.nav_rdr2_van_der_linde_gang),
              gaText: l.nav_rdr2_van_der_linde_gang.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_locations),
              gaText: l.nav_rdr2_locations.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_wildlife),
              gaText: l.nav_rdr2_wildlife.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_weaponry),
              gaText: l.nav_rdr2_weaponry.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: a.formatMessage(l.nav_rdr2_progress),
            gaText: l.nav_rdr2_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: a.formatMessage(l.nav_rdr2_stats),
              gaText: l.nav_rdr2_stats.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_chapters),
              gaText: l.nav_rdr2_chapters.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_challenges),
              gaText: l.nav_rdr2_challenges.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_character),
              gaText: l.nav_rdr2_character.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_compendium),
              gaText: l.nav_rdr2_compendium.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_accomplishments),
              gaText: l.nav_rdr2_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: a.formatMessage(l.nav_rdr2_media),
            gaText: l.nav_rdr2_media.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: a.formatMessage(l.nav_rdr2_gallery),
              gaText: l.nav_rdr2_gallery.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_artwork),
              gaText: l.nav_rdr2_artwork.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_videos),
              gaText: l.nav_rdr2_videos.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_music),
              gaText: l.nav_rdr2_music.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: a.formatMessage(l.nav_rdr2_online),
            gaText: l.nav_rdr2_online.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: r.C.www,
              path: "/reddeadonline"
            }
          }, {
            text: a.formatMessage(l.nav_rdr2_catalogue),
            gaText: l.nav_rdr2_catalogue.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: r.C.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: a.formatMessage(l.nav_rdr2_support),
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
            text: a.formatMessage(l.nav_rdr2_cta_buy_now),
            gaText: l.nav_rdr2_cta_buy_now.defaultMessage,
            dataTestId: "rdr2StoreLink",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
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
        F = a => ({
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
            text: a.formatMessage(l.nav_rsg_games),
            gaText: l.nav_rsg_games.defaultMessage,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: a.formatMessage(l.nav_rsg_newswire),
            gaText: l.nav_rsg_newswire.defaultMessage,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: r.C.www,
              path: "/newswire"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_videos),
            gaText: l.nav_rsg_videos.defaultMessage,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: r.C.www,
              path: "/videos"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_downloads),
            gaText: l.nav_rsg_downloads.defaultMessage,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: r.C.www,
              path: "/downloads"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_store),
            gaText: l.nav_rsg_store.defaultMessage,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_support),
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
            text: a.formatMessage(l.nav_rsg_cta_get_launcher),
            gaText: l.nav_rsg_cta_get_launcher.defaultMessage,
            variant: "highlight",
            dataTestId: "launcherLink",
            location: {
              domain: r.C.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download"
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
        X = a => ({
          site: "thewarriors",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/thewarriors/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afa9c45d4c8ee52983534b4be5504ff0.svg",
          cta: {
            dataTestId: "thewarriorsPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: "https://store.playstation.com",
              path: "/concept/205082"
            },
            text: a.formatMessage(l.nav_thewarriors_cta_buy_now),
            gaText: l.nav_thewarriors_cta_buy_now.defaultMessage
          },
          links: []
        }),
        aa = () => ({
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
        ea = /[*?\\<>&%@:~]/g,
        ta = a => a.match(ea),
        sa = {
          min: 3,
          max: 100,
          validationFunction: ta
        },
        na = (0, r.A)(),
        oa = (a, e) => "/" + [e, ...a.split("/")].filter(Boolean).join("/"),
        ra = (a, e) => a ? a === e ? "" : a.startsWith("http") ? a : `https://${na.sites[a]}.rockstargames.com` : "";
      var ia = t(52542);
      const da = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        la = (a, e, t, s) => [{
          text: a.formatMessage(l.sc_link_account),
          target: "_self",
          dataTestId: "accountButton",
          type: "nav-dropdown",
          children: [{
            text: a.formatMessage(l.sc_link_settings),
            location: {
              domain: r.C.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, {
            text: a.formatMessage(l.sc_link_view_my_profile),
            location: {
              domain: t,
              path: ""
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_view_my_profile.defaultMessage
            },
            dataTestId: "viewMyProfileLink"
          }, {
            text: a.formatMessage(l.sc_link_messages),
            location: {
              domain: r.C.socialClub,
              path: "/message"
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_messages.defaultMessage
            },
            dataTestId: "messagesLink"
          }, {
            text: a.formatMessage(l.sc_link_game_activation),
            location: {
              domain: r.C.socialClub,
              path: "/activate"
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_game_activation.defaultMessage
            },
            dataTestId: "gameActivationLink"
          }]
        }, {
          text: a.formatMessage(l.sc_link_notifications),
          location: {
            domain: r.C.socialClub,
            path: "/notifications"
          },
          target: "_self",
          hasNotifications: s,
          ga: {
            ...da,
            text: l.sc_link_notifications.defaultMessage,
            location: {
              domain: r.C.socialClub,
              path: "/notifications"
            }
          },
          dataTestId: "notificationsLink"
        }, {
          text: a.formatMessage(l.sc_link_crews),
          location: {
            domain: r.C.socialClub,
            path: `/member/${e}/crews`
          },
          target: "_self",
          ga: {
            ...da,
            text: l.sc_link_crews.defaultMessage
          },
          dataTestId: "crewsLink"
        }, {
          text: a.formatMessage(l.sc_link_friends),
          target: "_self",
          dataTestId: "friendsButton",
          type: "nav-dropdown",
          children: [{
            text: a.formatMessage(l.sc_link_my_friends),
            location: {
              domain: r.C.socialClub,
              path: `/member/${e}/friends`
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_my_friends.defaultMessage
            },
            dataTestId: "myFriendsLink"
          }, {
            text: a.formatMessage(l.sc_link_import_friends),
            location: {
              domain: r.C.socialClub,
              path: "/friends/import"
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_import_friends.defaultMessage
            },
            dataTestId: "importFriendsLink"
          }, {
            text: a.formatMessage(l.sc_link_find_friends),
            location: {
              domain: r.C.socialClub,
              path: "/members"
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_import_friends.defaultMessage
            },
            dataTestId: "findFriendsLink"
          }]
        }],
        ga = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        ca = a => ({
          text: a.formatMessage(l.sc_link_help),
          target: "_self",
          ga: {
            ...ga,
            text: l.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          type: "nav-dropdown",
          children: [{
            text: a.formatMessage(l.sc_link_support),
            location: {
              domain: r.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...ga,
              text: l.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: a.formatMessage(l.sc_link_legal),
            location: {
              domain: r.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...ga,
              text: l.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: a.formatMessage(l.sc_link_privacy_policy),
            location: {
              domain: r.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...ga,
              text: l.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: a.formatMessage(l.sc_link_cookies_policy),
            location: {
              domain: r.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...ga,
              text: l.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            type: "nav-no-link",
            text: a.formatMessage(l.sc_link_cookies_settings),
            onClickCallback: a => {
              a.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...ga,
              text: l.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: a.formatMessage(l.sc_link_do_not_sell_my_information),
            location: {
              domain: r.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...ga,
              text: l.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        });
      var _a = t(11040),
        ma = t(10670),
        ua = t(52612);
      var va = t(70954);
      const pa = a => {
        let {
          title: e,
          titleSlug: t,
          path: s,
          onNavigate: n,
          dataTestId: o,
          onClick: r,
          ...i
        } = a;
        return (0, va.jsx)("div", {
          className: "rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251",
          children: (0, va.jsx)(ua.A, {
            to: s,
            "aria-label": e,
            onNavigate: n,
            onClick: r,
            "data-testid": o,
            ...i,
            children: (0, va.jsx)(ma.A, {
              title: e,
              titleSlug: t,
              inGlobalNav: !0
            })
          })
        }, e)
      };
      var fa = t(54094);
      const ha = (0, d.defineMessages)({
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
        ba = a => ({
          viewAllLocation: {
            path: "/games"
          },
          games: [{
            titleSlug: "VI",
            text: a.formatMessage(ha.games_menu_vi),
            gaText: "Grand Theft Auto VI",
            path: "/VI",
            useLocale: !0,
            externalRoute: !0,
            dataTestId: "VI"
          }, {
            titleSlug: "gta-v",
            text: a.formatMessage(ha.games_menu_gta_v),
            gaText: "Grand Theft Auto V",
            path: "/gta-v",
            dataTestId: "gtav"
          }, {
            titleSlug: "gta-online",
            text: a.formatMessage(ha.games_menu_gta_online),
            gaText: "Grand Theft Auto Online",
            path: "/gta-online",
            dataTestId: "gtao"
          }, {
            titleSlug: "reddeadredemption2",
            text: a.formatMessage(ha.games_menu_rdr_2),
            gaText: "Red Dead Redemption 2",
            path: "/reddeadredemption2",
            dataTestId: "rdr2"
          }, {
            titleSlug: "reddeadredemption",
            text: a.formatMessage(ha.games_menu_rdr),
            gaText: "Red Dead Redemption",
            path: "/reddeadredemption",
            dataTestId: "rdr"
          }]
        });
      var wa = t(61225),
        Ma = t(73012),
        ya = t(63582),
        xa = t(9164);
      let ka = "rockstargames-modules-core-headerdb2039d0fa02404c1e032ddafe358efd",
        Ca = "rockstargames-modules-core-headerb2d95a9777e140a30958fbd98a9fb053",
        Ta = "rockstargames-modules-core-headerbacc5a58858921d497c7752942deb135",
        Ia = "rockstargames-modules-core-headera4f8eb74ae350f61ed4b4fffa4d8ff8d",
        La = "rockstargames-modules-core-headere104ee1bbcd8b04a2ea224fdccd9bb67",
        ja = "rockstargames-modules-core-headercaea3404775ed365d2f4aef72c9990dc",
        Sa = "rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89",
        Na = "rockstargames-modules-core-headerefbf909442a1564a3efb261ef928345d",
        Pa = "rockstargames-modules-core-headerb673908f44e71f1c48537b69a244eaf5",
        Ba = "rockstargames-modules-core-headerdf455110c72d70cc653582db9d812af6";
      const Aa = a => {
          let {
            onNavigate: e
          } = a;
          const t = (0, d.useIntl)(),
            s = (0, r.A)(),
            [{
              subdomaincom: n
            }] = (0, d.getLocale)(),
            i = n !== d.englishLocale.subdomaincom ? `/${n}` : "",
            l = s.currentSite?.site === r.C.www,
            g = `https://${s.sites[r.C.www]}.rockstargames.com`,
            c = l ? i : `${g}${i}`,
            {
              viewAllLocation: _,
              games: m
            } = (0, o.useMemo)((() => ba(t)), [n]);
          return (0, va.jsxs)("div", {
            className: ka,
            "data-testid": "gamesMenu",
            children: [(0, va.jsxs)("div", {
              className: Ca,
              children: [(0, va.jsx)("div", {
                children: (0, va.jsx)("h2", {
                  className: Ta,
                  children: t.formatMessage(ha.games_menu_featured)
                })
              }), (0, va.jsx)("div", {
                children: (0, va.jsxs)("a", {
                  className: Ia,
                  href: c + _.path,
                  children: [t.formatMessage(ha.games_menu_view_all), (0, va.jsx)("img", {
                    src: fa.ZM,
                    alt: t.formatMessage(ha.games_menu_view_all)
                  })]
                })
              })]
            }), (0, va.jsx)("div", {
              className: La,
              children: m.map((a => (0, va.jsx)(pa, {
                titleSlug: a.titleSlug,
                title: a.text,
                gaText: a.gaText,
                gaBreadCrumb: `Games > ${a.gaText}`,
                path: (!l || a.externalRoute ? a.useLocale ? `${g}${i}` : g : "") + a.path,
                dataTestId: a.dataTestId,
                onNavigate: e
              }, a.titleSlug)))
            })]
          })
        },
        Ra = a => {
          let {
            onNavigate: e,
            dataTestId: t
          } = a;
          const s = (0, d.useIntl)(),
            {
              isHidden: n
            } = (0, o.useContext)(wa.jd),
            {
              inMobileMenu: r
            } = (0, o.useContext)(Ma.xN);
          return r ? (0, va.jsx)(Oa, {
            onNavigate: e
          }) : (0, va.jsxs)(wa.Dr, {
            children: [(0, va.jsx)(wa.cQ, {
              "data-testid": t,
              children: s.formatMessage(ha.games_menu_item)
            }), (0, va.jsx)(ya.AnimatePresence, {
              children: !n && (0, va.jsx)(wa.rm, {
                className: ja,
                animationOverride: "expandCollapse",
                children: (0, va.jsx)(Aa, {
                  onNavigate: e
                })
              })
            })]
          })
        },
        Oa = a => {
          let {
            onNavigate: e
          } = a;
          (0, xa.Ub)("(min-width: 768px) and (max-width: 1023px)");
          const t = (0, d.useIntl)(),
            s = (0, r.A)(),
            [{
              subdomaincom: n
            }] = (0, d.getLocale)(),
            {
              closeMobileMenu: i
            } = (0, o.useContext)(Ma.xN),
            l = n !== d.englishLocale.subdomaincom ? `/${n}` : "",
            g = s.currentSite?.site === r.C.www,
            c = `https://${s.sites[r.C.www]}.rockstargames.com`,
            _ = g ? l : `${c}${l}`,
            {
              viewAllLocation: m,
              games: u
            } = (0, o.useMemo)((() => ba(t)), [n]);
          return (0, va.jsxs)("div", {
            className: Sa,
            "data-testid": "gamesMenu",
            children: [(0, va.jsxs)("div", {
              className: Na,
              children: [(0, va.jsx)("h2", {
                children: t.formatMessage(ha.games_menu_featured)
              }), (0, va.jsxs)("a", {
                className: Ia,
                href: _ + m.path,
                children: [t.formatMessage(ha.games_menu_view_all), (0, va.jsx)("img", {
                  src: fa.ZM,
                  alt: t.formatMessage(ha.games_menu_view_all)
                })]
              })]
            }), (0, va.jsx)(_a.RC, {
              className: Pa,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: 2.5,
              speed: 700,
              children: u.map((a => (0, va.jsx)(_a.qr, {
                className: Ba,
                children: (0, va.jsx)(pa, {
                  titleSlug: a.titleSlug,
                  title: a.text,
                  gaText: a.gaText,
                  gaBreadCrumb: `Games > ${a.gaText}`,
                  path: (!g || a.externalRoute ? a.useLocale ? `${c}${l}` : c : "") + a.path,
                  dataTestId: a.dataTestId,
                  onNavigate: e,
                  onClick: i
                })
              }, a.gaText)))
            })]
          })
        },
        Da = Oa,
        Ga = () => {
          const a = (() => {
            const a = (0, r.A)(),
              [e] = (0, d.getLocale)();
            return (t, s) => {
              if (!t.path) return t.domain;
              const n = [
                  ["username", s]
                ],
                o = ((a, e) => e.filter((a => {
                  let [, e] = a;
                  return Boolean(e)
                })).reduce(((a, e) => {
                  let [t, s] = e;
                  return a.replaceAll(`{${t}}`, s)
                }), a))(t.path, n),
                r = "www" === t.domain && "www" !== a.currentSite?.site ? ((a, e) => {
                  if (!e || e.iso === d.englishLocale.iso) return a;
                  const t = e.subdomaincom;
                  return "/" === a[0] ? t + a : `${t}/${a}`
                })(o, e) : o;
              return t.domain + r
            }
          })();
          return (e, t) => {
            const s = new URLSearchParams(t.params),
              n = t.path?.replace("{term}", e);
            s.forEach(((a, t) => {
              "{query}" === a && s.set(t, e)
            }));
            const o = s.toString() ? `?${s.toString()}` : "",
              r = {
                domain: t.domain,
                path: n + o
              },
              i = a(r, "");
            if (i) return i;
            console.error(`No search url could be constructed from ${t.domain} and ${t.path}`)
          }
        };
      var za = t(98753);
      const Ea = a => {
          let {
            globalNavLoaderComponent: e,
            globalNavComponent: t,
            locale: i,
            username: g,
            userProfileLink: c,
            hasNotifications: _,
            ...m
          } = a;
          const u = (0, d.useIntl)(),
            v = (0, r.A)(),
            p = function(a) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              const t = (0, r.A)(),
                s = a.subdomaincom,
                n = (a, t) => t?.requiresAuth && !e ? a : [...a, o(t)],
                o = a => {
                  const o = t.currentSite?.site !== r.C.www && a.location?.domain === r.C.www && "en" !== s,
                    i = a.location?.path.replace("{username}", e);
                  return {
                    ...a,
                    ...a.children ? {
                      children: a.children.reduce(n, [])
                    } : {},
                    ...a.targets ? {
                      targets: a.targets.reduce(n, [])
                    } : {},
                    ...a.location ? {
                      location: {
                        ...a.location,
                        path: o && i ? oa(i, s) : i,
                        domain: t?.currentSite ? ra(a.location.domain, t.currentSite.site) : ""
                      }
                    } : {}
                  }
                };
              return a => o(a)
            }(i, g),
            f = Ga(),
            [h, b] = (0, o.useState)(""),
            w = e,
            M = (a => ({
              targets: [{
                text: a.formatMessage(l.search_target_games),
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
                searchOptions: sa
              }, {
                text: a.formatMessage(l.search_target_posts),
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
                searchOptions: sa
              }, {
                text: a.formatMessage(l.search_target_videos),
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
                searchOptions: sa
              }, {
                text: a.formatMessage(l.search_target_community),
                gaText: l.search_target_community.defaultMessage,
                tab: "socialClub",
                value: "socialClub",
                type: "nav-dropdown",
                targets: [{
                  text: a.formatMessage(l.search_target_users),
                  gaText: l.search_target_users.defaultMessage,
                  value: "community-users",
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/members/{term}"
                  },
                  searchOptions: sa
                }, {
                  text: a.formatMessage(l.search_target_crews),
                  gaText: l.search_target_crews.defaultMessage,
                  value: "community-crews",
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/crews/{term}"
                  },
                  searchOptions: sa
                }, {
                  text: a.formatMessage(l.search_target_jobs),
                  gaText: l.search_target_jobs.defaultMessage,
                  value: "community-jobs",
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/jobs/{term}"
                  },
                  searchOptions: sa
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
            }).map((a => a(u))),
            I = (0, o.useMemo)((() => {
              const a = v.currentSite?.site,
                e = k(u).links;
              return T.reduce(((t, s) => {
                if (!v.currentSite?.site || !s?.appearancePaths?.[v.currentSite.site]) return t;
                const n = ((a, e, t, s) => a && 0 !== a.length || "www" !== t || !s ? a : e)(s.links, e, a, y);
                return [...t, {
                  ...s,
                  appearancePaths: v.currentSite?.site ? s?.appearancePaths?.[v.currentSite.site] : [],
                  links: n.map(p),
                  cta: s.cta && p(s.cta)
                }]
              }), [])
            }), [y, T]),
            L = (0, o.useMemo)((() => ({
              ...M,
              targets: M.targets.map(p)
            })), [M, p]),
            j = (0, o.useMemo)((() => (a => ({
              quickMenuHome: a.formatMessage(za.A.nav_quick_access_home),
              quickMenuGames: a.formatMessage(za.A.nav_quick_access_games),
              quickMenuNewswire: a.formatMessage(za.A.nav_quick_access_newswire),
              avatarMenuSelectLanguage: a.formatMessage(za.A.avatarmenu_selectlanguage),
              avatarMenuSignIn: a.formatMessage(za.A.avatarmenu_signin),
              avatarMenuSignUp: a.formatMessage(za.A.avatarmenu_signup),
              avatarMenuSignOut: a.formatMessage(za.A.avatarmenu_logout)
            }))(u)), []),
            S = (a, e) => {
              let t, s = "";
              const n = new URLSearchParams(a);
              if (new URLSearchParams(e).forEach(((a, e) => {
                  const o = n.get(e);
                  "{query}" === a && o ? (t = !0, s = o) : t = o === a && !1 !== t
                })), t) return s
            },
            N = (a, e) => {
              if (!e) return !1;
              const t = a.split(/[/?]+/),
                s = e.split(/[/?]+/);
              if (s.every(((a, e) => a === t[e] || "{term}" === a || "" === a))) {
                const a = s.findIndex((a => "{term}" === a));
                if (a) return t[a]
              }
              return ""
            },
            P = (0, o.useCallback)((() => {
              let a, e = "";
              const {
                pathname: t,
                search: s
              } = window.location;
              return L.targets.findIndex((n => {
                if ("" === n.type && n.location) {
                  if (n.location.path && t.startsWith(n.location.path)) {
                    const t = S(s, n.location.params);
                    if (t) return e = t, a = n, !0
                  }
                  if (!n.location.params) {
                    const s = N(t, n.location.path);
                    if (s) return e = s, a = n, !0
                  }
                }
                if ("nav-dropdown" === n.type) {
                  const o = n.targets?.findIndex((n => {
                    if ("" === n.type) {
                      if (n.location.path && t.startsWith(n.location.path)) {
                        const t = S(s, n.location.params);
                        if (t) return e = t, a = n, !0
                      }
                      const o = N(t, n.location.path);
                      if (o) return e = o, a = n, !0
                    }
                    return !1
                  }));
                  return Boolean(o) && o >= 0
                }
              })), [e, a]
            }), [L]),
            B = (0, o.useCallback)(((a, e) => {
              let t;
              return a.forEach((a => {
                if ("nav-dropdown" === a.type) {
                  const s = B(a.targets, e);
                  s && (t = s)
                } else a.value === e && (t = a)
              })), t
            }), [L]),
            A = (0, o.useCallback)((a => {
              if ("" === a) return !1;
              const e = ta?.(a);
              return a.split(/\s+/).every((a => a.length < 3)) ? (b(u.formatMessage(za.A.nav_search_error_too_short, {
                count: 3
              })), !1) : e ? (b(u.formatMessage(za.A.nav_search_error_invalid_chars, {
                invalidChars: [...new Set(e)].join(", ")
              })), !1) : (b(""), !0)
            }), []),
            R = (0, o.useCallback)(((a, e) => {
              if (A(a) && e) {
                const t = B(L.targets, e);
                return t ? f(a, t.location) : null
              }
            }), [L]),
            O = (0, o.useMemo)((() => ({
              loggedInLinks: la(u, g, c, _).map(p),
              helpItem: p(ca(u))
            })), [u, g, c, _]);
          return (0, o.useEffect)((() => {
            const a = () => {
              x(window.innerWidth < 1024)
            };
            return window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }), []), (0, va.jsx)(w, {
            navigationData: I,
            locale: i,
            globalNavigationComponent: t,
            searchConfig: L,
            gamesMenuComponent: n,
            avatarMenuData: O,
            onSearch: R,
            getQueryFromUrl: P,
            errorMessage: h,
            localisedStrings: j,
            ...m
          })
        },
        Va = (0, d.withIntl)((a => {
          let {
            globalNavLoaderComponent: e,
            globalNavComponent: t,
            username: s,
            userProfileLink: n,
            hasNotifications: o,
            ...r
          } = a;
          const [i] = (0, d.getLocale)();
          return e ? (0, va.jsx)(Ea, {
            globalNavLoaderComponent: e,
            globalNavComponent: t,
            locale: i,
            username: s,
            userProfileLink: n,
            hasNotifications: o,
            ...r
          }) : null
        }), ia)
    },
    38324: (a, e, t) => {
      t.d(e, {
        PY: () => p,
        Y9: () => v,
        bL: () => h
      });
      var s = t(71127),
        n = t(41689),
        o = (t(79952), t(81788)),
        r = t(74482);
      var i = t(70954);
      const d = () => {
        const a = (0, s.useRef)(null);
        return (0, i.jsx)("button", {
          ref: a,
          className: "rockstargames-modules-core-headerc95fa2303ee2096feb04a8cd9d2a5a4b",
          onClick: () => {
            const e = document.querySelector(".siteHeaderContainer");
            if (window?.__spatialNavigation__?.enableExperimentalAPIs(!0), e && window?.__spatialNavigation__) {
              const t = window?.__spatialNavigation__?.findCandidates(e, "down", {
                  mode: "all"
                }),
                s = t.filter((t => !e.contains(t) && a.current !== t));
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
        _ = t(63582),
        m = t(47211);
      let u;
      u = m.default;
      const v = a => {
          let {
            children: e
          } = a;
          return (0, i.jsx)("header", {
            className: g()(u.header, u.fixed),
            children: e
          })
        },
        p = (0, s.createContext)({
          isNavHidden: !1
        }),
        f = {
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
        h = (0, o.withIntl)((a => {
          let {
            children: e,
            brand: r
          } = a;
          const [l, g] = (0, s.useState)(!1), [c, m] = (0, s.useState)(!0), v = (0, s.useRef)(null), [{
            iso: h
          }] = (0, o.getLocale)();
          (0, s.useEffect)((() => {
            let a = window.scrollY;
            const e = () => {
                const e = window.scrollY > 140,
                  t = window.scrollY > a;
                g(e && t), a = window.scrollY
              },
              t = () => {
                m(0 === window.scrollY)
              };
            return window.addEventListener("scroll", e), window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", e), window.removeEventListener("scroll", t)
            }
          }), [l]), (0, s.useEffect)((() => {
            Promise.resolve().then(t.bind(t, 47211))
          }));
          let b = "dark";
          return (0, s.useEffect)((() => {
            const a = "data-show-more-content";
            l ? document.body.setAttribute(a, "") : document.body.removeAttribute(a)
          }), [l]), (0, i.jsx)(n.NP, {
            colorScheme: b,
            defaultColorScheme: b,
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            children: (0, i.jsx)("div", {
              className: "siteHeaderContainer",
              children: (0, i.jsx)(p.Provider, {
                value: {
                  brand: r,
                  isNavHidden: l,
                  containerRef: v
                },
                children: (0, i.jsxs)("div", {
                  className: u.globalNavigationRoot,
                  ref: v,
                  lang: h,
                  children: [(0, i.jsx)(d, {}), (0, i.jsx)("div", {
                    className: u.globalNavigationSpacer
                  }), (0, i.jsx)(_.motion.div, {
                    className: u.globalNavigationContainer,
                    variants: f,
                    initial: "visible",
                    animate: l ? "hidden" : "visible",
                    "data-ishidden": l,
                    "data-testid": "globalnav__container",
                    children: e
                  })]
                })
              })
            })
          })
        }), c)
    },
    42549: (a, e, t) => {
      t.d(e, {
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
        v = a => {
          let {
            children: e
          } = a;
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
                children: e
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
                children: e
              })
            })
          })
        }
    },
    46690: (a, e, t) => {
      t.d(e, {
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
      const r = a => {
        let {
          showOn: e,
          ...t
        } = a;
        return (0, o.jsx)(s.Slot, {
          className: e ? n[e] : "",
          ...t
        })
      }
    },
    47211: (a, e, t) => {
      t.r(e), t.d(e, {
        default: () => s
      });
      const s = {
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
      }
    },
    49928: (a, e, t) => {
      t.d(e, {
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
    54094: (a, e, t) => {
      t.d(e, {
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
    61225: (a, e, t) => {
      t.d(e, {
        jd: () => H,
        W1: () => $,
        rm: () => Z,
        Dr: () => J,
        w4: () => aa,
        cO: () => F,
        aC: () => X,
        cQ: () => W
      });
      var s = t(71127),
        n = t(81788),
        o = t(9046),
        r = t(74406),
        i = t(46690),
        d = t(54094),
        l = t(78618),
        g = t(24036),
        c = t.n(g),
        _ = t(73012),
        m = t(63582);
      const u = function() {
        for (var a = arguments.length, e = new Array(a), t = 0; t < a; t++) e[t] = arguments[t];
        const s = e.filter(Boolean);
        return s.length <= 1 ? s[0] || null : function(a) {
          for (const e of s) "function" == typeof e ? e(a) : e && (e.current = a)
        }
      };
      var v = t(21222),
        p = t(21315),
        f = t(42549),
        h = t(74482),
        b = t(38324),
        w = t(70954);
      let M = "rockstargames-modules-core-headerd922c5fe52102c7e5c8bc3c42d010585",
        y = "rockstargames-modules-core-headerec44e526244f48930351136a502341d5",
        x = "rockstargames-modules-core-headerf303c57e835ec31bf4213fb03aba17ef",
        k = "rockstargames-modules-core-headerda3bef6906347a4766f3e910c294774a",
        C = "rockstargames-modules-core-headerabf1a661e4902fa5712272e92f2de033",
        T = "rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715",
        I = "rockstargames-modules-core-headerf905a8b31e0bab44202ab5722726c472",
        L = "rockstargames-modules-core-headerddf1983ce836b67a33e2f08a1a5316a3",
        j = "rockstargames-modules-core-headera4788f15b7ea9665e8e186a03c86ca32",
        S = "rockstargames-modules-core-headerd962f98ae74a4cbed394cf29a5d0a472",
        N = "rockstargames-modules-core-headere463be3861d293e36d66bb8ab0c19645",
        P = "rockstargames-modules-core-headerec5d2c793461b20aed9bb78b399482ad",
        B = "rockstargames-modules-core-headerfaca5fabb7852e77e62aa1da55dfad31",
        A = "rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912",
        R = "rockstargames-modules-core-headerfe55c83723647f4df2a5ba88baa866e2",
        O = "rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60",
        D = "rockstargames-modules-core-headeree8b6e236dcc760405f887886740a954",
        G = "rockstargames-modules-core-headerc640bf864619b6a2296140ddb12e8475",
        z = "rockstargames-modules-core-headerbba8a763e416f3af074bb59987ec7834",
        E = "rockstargames-modules-core-headerb350a68799dbf9dc424ca04489c8a0ad";
      const V = a => {
          a.preventDefault()
        },
        q = (0, s.createContext)({
          inMenu: !1,
          openedNav: ""
        }),
        H = (0, s.createContext)({
          isHidden: !1
        }),
        $ = a => {
          let {
            children: e
          } = a;
          const t = (0, n.useIntl)(),
            [r, d] = (0, s.useState)(""),
            [l, g] = (0, s.useState)(e),
            [c, _] = (0, s.useState)([]),
            m = (0, s.useRef)(null),
            u = (0, s.useRef)(null),
            {
              isNavHidden: v
            } = (0, s.useContext)(b.PY),
            p = (0, s.useCallback)((() => {
              const a = u.current;
              if (!a) return;
              const {
                children: t
              } = a;
              let n = 0;
              const o = Array.from(t).map(((a, e) => {
                  const t = a.getBoundingClientRect().top;
                  return 0 === e && (n = t), t
                })),
                r = o.filter((a => a !== n)).length,
                i = o.findIndex((a => a > n));
              let d = i;
              if (i > 0 && (d = i - 1), r) {
                const a = [],
                  t = [];
                s.Children.forEach(e, ((e, s) => {
                  s < d ? a.push(e) : t.push(e)
                })), a && g(a), t && _(t)
              } else g(e), _([])
            }), [e, u?.current]);
          return (0, s.useEffect)((() => {
            const a = new ResizeObserver(p);
            return u?.current && a.observe(u.current), () => {
              u?.current && a.unobserve(u.current)
            }
          }), [e, u?.current]), (0, s.useEffect)((() => {
            d("")
          }), [v]), (0, w.jsx)(q.Provider, {
            value: {
              inMenu: !0,
              openedNav: r
            },
            children: (0, w.jsx)(i.E, {
              showOn: "desktop",
              children: (0, w.jsxs)(o.Root, {
                className: M,
                value: r,
                onValueChange: d,
                tabIndex: -1,
                children: [(0, w.jsxs)(F, {
                  ref: m,
                  className: y,
                  children: [l, c?.length > 0 && (0, w.jsxs)(J, {
                    children: [(0, w.jsx)(W, {
                      "data-testid": "navMore",
                      children: t.formatMessage(h.A.nav_more_dropdown)
                    }), (0, w.jsx)(Z, {
                      children: (0, w.jsx)(X, {
                        children: (0, w.jsx)(F, {
                          children: c
                        })
                      })
                    })]
                  })]
                }), (0, w.jsx)(F, {
                  ref: u,
                  className: C,
                  "aria-hidden": "true",
                  children: (0, w.jsx)(H.Provider, {
                    value: {
                      isHidden: !0
                    },
                    children: e
                  })
                })]
              })
            })
          })
        },
        F = (0, s.forwardRef)((function(a, e) {
          let {
            children: t,
            className: s,
            ...n
          } = a;
          return (0, w.jsx)(o.List, {
            ref: e,
            className: c()(N, s),
            ...n,
            children: t
          })
        })),
        Y = (0, s.createContext)({
          value: ""
        }),
        J = (0, s.forwardRef)((function(a, e) {
          let {
            testId: t,
            children: n,
            ...i
          } = a;
          const {
            depth: d
          } = (0, s.useContext)(K), {
            inMobileMenu: l
          } = (0, s.useContext)(_.xN), g = (0, s.useRef)(null), m = `rsm-${(0,r.useId)()}`;
          return (0, w.jsx)(Y.Provider, {
            value: {
              value: m,
              ref: g
            },
            children: (0, w.jsx)(o.Item, {
              value: m,
              ref: u(e, g),
              className: c()({
                [x]: !0,
                [k]: 1 === d && !l
              }),
              "data-testid": t,
              ...i,
              children: n
            })
          })
        })),
        W = (0, s.forwardRef)((function(a, e) {
          let {
            children: t,
            ...n
          } = a;
          const {
            inMenu: r
          } = (0, s.useContext)(q), {
            inAvatarMenu: i
          } = (0, s.useContext)(p.QY), {
            inQuickMenu: l
          } = (0, s.useContext)(f.s), {
            inMobileMenu: g
          } = (0, s.useContext)(_.xN), {
            inSubMenu: m,
            depth: u
          } = (0, s.useContext)(K);
          return (0, w.jsxs)(o.Trigger, {
            ref: e,
            onPointerMove: V,
            onPointerLeave: V,
            className: c()(B, {
              [A]: r,
              [O]: l,
              [R]: g,
              [D]: m,
              [G]: i,
              [z]: u > 1
            }),
            ...n,
            children: [t, (0, w.jsx)("img", {
              src: d.br,
              className: P,
              alt: ""
            })]
          })
        })),
        U = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        Q = {
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
        Z = (0, s.forwardRef)((function(a, e) {
          let {
            children: t,
            animationOverride: n,
            ...r
          } = a;
          const {
            inSubMenu: i,
            openedNav: d
          } = (0, s.useContext)(K), {
            openedNav: l
          } = (0, s.useContext)(q), {
            openedNav: g
          } = (0, s.useContext)(_.iU), {
            value: u,
            ref: v
          } = (0, s.useContext)(Y), {
            inMobileMenu: f
          } = (0, s.useContext)(_.xN), {
            isHidden: h
          } = (0, s.useContext)(H), {
            inAvatarMenu: b
          } = (0, s.useContext)(p.QY), M = [d, l, g].includes(u);
          return h ? null : (0, w.jsx)(m.AnimatePresence, {
            children: M && (0, w.jsx)(o.Content, {
              forceMount: !0,
              ref: e,
              className: c()({
                [T]: !f,
                [I]: f,
                [L]: i && !f,
                [j]: b
              }),
              onPointerEnter: V,
              onPointerLeave: V,
              onPointerDown: V,
              onPointerDownOutside: i ? V : null,
              style: {
                left: v?.current?.offsetLeft,
                top: (v?.current?.offsetHeight ?? 0) + 3
              },
              asChild: !0,
              ...r,
              children: (0, w.jsx)(m.motion.div, {
                variants: n || i || f ? Q : U,
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
        K = (0, s.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        X = (0, s.forwardRef)((function(a, e) {
          let {
            children: t,
            ...n
          } = a;
          const {
            depth: r
          } = (0, s.useContext)(K), {
            openedNav: i
          } = (0, s.useContext)(_.iU), {
            isNavHidden: d
          } = (0, s.useContext)(b.PY), [l, g] = (0, s.useState)("");
          (0, s.useEffect)((() => {
            g("")
          }), [i, d]);
          const c = r ? r + 1 : 1;
          return (0, w.jsx)(K.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: l,
              depth: c
            },
            children: (0, w.jsx)(o.Root, {
              ref: e,
              defaultValue: "",
              value: l,
              onValueChange: a => {
                g(a === l ? "" : a)
              },
              orientation: "vertical",
              className: S,
              "data-depth": c,
              ...n,
              asChild: !0,
              children: (0, w.jsx)("div", {
                children: t
              })
            })
          })
        })),
        aa = (0, s.forwardRef)((function(a, e) {
          let {
            children: t,
            asChild: r,
            className: i,
            onClick: d,
            external: g,
            ...m
          } = a;
          const u = (0, n.useIntl)(),
            {
              inMenu: b
            } = (0, s.useContext)(q),
            {
              inAvatarMenu: M,
              closeAvatarMenu: y
            } = (0, s.useContext)(p.QY),
            {
              inQuickMenu: x
            } = (0, s.useContext)(f.s),
            {
              inMobileMenu: k,
              closeMobileMenu: C
            } = (0, s.useContext)(_.xN),
            {
              inSubMenu: T,
              depth: I
            } = (0, s.useContext)(K),
            L = c()({
              [A]: b,
              [O]: x,
              [R]: k,
              [D]: T,
              [G]: M,
              [z]: I > 1
            }, i),
            j = r ? v.Slot : "a";
          return (0, w.jsx)(o.Link, {
            asChild: !0,
            onSelect: a => {
              y?.(), C?.(), d?.(a)
            },
            ...m,
            children: (0, w.jsxs)(j, {
              ref: e,
              className: L,
              children: [(0, w.jsx)(v.Slottable, {
                children: t
              }), g && (0, w.jsx)(l.ExternalLink, {
                size: "LG",
                label: u.formatMessage(h.A.nav_rockstargames_external_link),
                className: E
              })]
            })
          })
        }))
    },
    73012: (a, e, t) => {
      t.d(e, {
        qe: () => w,
        xN: () => b,
        z1: () => h,
        iU: () => f
      });
      var s = t(71127),
        n = t(63582),
        o = t(24036),
        r = t.n(o),
        i = t(9046),
        d = t(24780),
        l = t(63694),
        g = t(81788),
        c = t(38324),
        _ = t(46690),
        m = t(49928),
        u = t(74482),
        v = t(70954);
      let p = {
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
      const f = (0, s.createContext)({
          openedNav: ""
        }),
        h = a => {
          let {
            children: e
          } = a;
          const [t, n] = (0, s.useState)("");
          return (0, v.jsx)(f.Provider, {
            value: {
              openedNav: t
            },
            children: (0, v.jsx)(i.Root, {
              value: t,
              onValueChange: n,
              children: (0, v.jsx)(i.List, {
                className: p.menuMobileItems,
                children: e
              })
            })
          })
        },
        b = (0, s.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        w = a => {
          let {
            children: e
          } = a;
          const t = (0, g.useIntl)(),
            [o, i] = (0, s.useState)(!1),
            [f, h] = (0, s.useState)(!1),
            {
              brand: w
            } = (0, s.useContext)(c.PY),
            y = {
              show: {
                height: "100dvh",
                paddingBottom: o && w ? "var(--global-navigation-height)" : "",
                transition: {
                  ...m.b.hamburgerOpen,
                  staggerChildren: .05
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: m.b.hamburgerClose
              }
            };
          return (0, v.jsx)(b.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                i(!1)
              }
            },
            children: (0, v.jsxs)(d.Root, {
              open: o,
              onOpenChange: i,
              children: [(0, v.jsx)(_.E, {
                showOn: "mobile",
                children: (0, v.jsx)(M, {
                  onClick: () => {
                    i(!o), h(!1)
                  },
                  isMenuOpen: o
                })
              }), (0, v.jsx)(n.AnimatePresence, {
                children: o && (0, v.jsx)(_.E, {
                  showOn: "mobile",
                  children: (0, v.jsxs)(n.motion.div, {
                    className: p.dialogWrap,
                    variants: y,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, v.jsx)(d.Overlay, {
                      className: p.overlay
                    }), (0, v.jsx)(d.Content, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => i(!1),
                      children: (0, v.jsxs)(n.motion.div, {
                        className: r()(p.mobileMenuDrawer, p.mobileMenuOpen),
                        variants: y,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, v.jsx)(l.VisuallyHidden, {
                          children: (0, v.jsx)(d.Title, {
                            children: t.formatMessage(u.A.nav_mobilemenu_title)
                          })
                        }), (0, v.jsx)("div", {
                          className: r()(f ? p.mobileMenuSearchOpen : "", p.mobileMenuContainer),
                          children: (0, v.jsx)("div", {
                            className: p.menuMobile,
                            children: e
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
        M = a => {
          let {
            className: e,
            isMenuOpen: t,
            ...s
          } = a;
          const n = (0, g.useIntl)();
          return (0, v.jsx)("div", {
            className: r()(p.mobileMenuHamburgerContainer, e),
            children: (0, v.jsxs)(d.Trigger, {
              title: n.formatMessage(t ? u.A.nav_mobilemenu_close : u.A.nav_mobilemenu_open),
              type: "button",
              className: r()(p.mobileMenuHamburger, {
                [p.open]: t
              }),
              "data-testid": "hamburgerNav",
              ...s,
              children: [(0, v.jsx)("span", {
                className: p.bar,
                "data-opened": t
              }), (0, v.jsx)("span", {
                className: p.bar,
                "data-opened": t
              }), (0, v.jsx)("span", {
                className: p.bar,
                "data-opened": t
              })]
            })
          })
        }
    },
    74482: (a, e, t) => {
      t.d(e, {
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
    94222: a => {
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg"
    }
  }
]);