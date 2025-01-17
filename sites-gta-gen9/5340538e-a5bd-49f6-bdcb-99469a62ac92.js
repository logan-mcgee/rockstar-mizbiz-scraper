! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "5340538e-a5bd-49f6-bdcb-99469a62ac92", e._sentryDebugIdIdentifier = "sentry-dbid-5340538e-a5bd-49f6-bdcb-99469a62ac92")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3639], {
    67446: (e, s, a) => {
      a.d(s, {
        A: () => g
      });
      var t = a(71403),
        n = a(96717),
        c = a(20066),
        r = a(73167),
        i = a(98310),
        o = a(39493);
      const d = {
        pillBtn: "rockstargames-sites-gta-gen9e4a42eaa9bfb682035e61ac2e2a34515",
        selected: "rockstargames-sites-gta-gen9eb889d8958be54a67b790d7529530986",
        scCharacterCard: "rockstargames-sites-gta-gen9df279e92086c0d3c96905b3a91b369ed",
        scAvatar: "rockstargames-sites-gta-gen9c1890feda663c93b0f767890394cbdcf",
        scCharNames: "rockstargames-sites-gta-gen9e79d7f5515617d849d7d13cd4ff048ce",
        scCharacterStats: "rockstargames-sites-gta-gen9c721f3aeef9e5ae6b98adca1253e4709",
        scUserName: "rockstargames-sites-gta-gen9eabff0cc0139013f5a60fea6f48c56f6",
        scRpLevel: "rockstargames-sites-gta-gen9b1f87c58a800ad546200fbf17e029f35",
        scRpIcon: "rockstargames-sites-gta-gen9f1e0bcba6214698c490b8201bbd850b7"
      };
      var l = a(46632);
      const g = (0, n.withIntl)((e => {
        let {
          characterData: s
        } = e;
        const c = (0, n.useIntl)(),
          {
            platform: g,
            platformUsername: m,
            mugshotUrl: f,
            stats: u
          } = s,
          [b, _] = (0, t.useState)(f),
          k = (0, r.A)(g, "large");
        return (0, l.jsxs)("div", {
          className: d.scCharacterCard,
          children: [(0, l.jsx)("div", {
            className: d.scAvatar,
            "data-size": "small",
            children: (0, l.jsx)("img", {
              src: b,
              alt: c.formatMessage(o.A.profile_selector_mugshot, {
                userName: m
              }),
              onError: () => {
                _(a(58989))
              }
            })
          }), (0, l.jsx)("div", {
            className: d.scCharacterStats,
            children: (0, l.jsxs)("div", {
              className: d.scCharNames,
              children: [(0, l.jsx)("img", {
                src: k.src,
                alt: k.alt
              }), (0, l.jsx)("div", {
                className: d.scUserName,
                "data-size": "small",
                children: m
              }), (0, l.jsx)("div", {
                className: d.scRp,
                children: (0, l.jsxs)("div", {
                  className: d.scRpLevel,
                  children: [(0, l.jsx)("img", {
                    className: d.scRpIcon,
                    src: (0, i.A)(u.overview.rank.value),
                    alt: c.formatMessage(o.A.profile_selector_rp_icon)
                  }), (0, l.jsx)("span", {
                    children: s.stats.overview.rank.value
                  })]
                })
              })]
            })
          })]
        })
      }), c)
    },
    73167: (e, s, a) => {
      a.d(s, {
        A: () => t
      });
      const t = (e, s) => {
        switch (e) {
          case "pc":
            return "small" === s ? {
              src: a(89544),
              alt: "PC"
            } : {
              src: a(45710),
              alt: "PC"
            };
          case "ps4":
            return "small" === s ? {
              src: a(65636),
              alt: "PS4"
            } : {
              src: a(8318),
              alt: "PS4"
            };
          case "ps5":
            return "small" === s ? {
              src: a(20357),
              alt: "PS5"
            } : {
              src: a(52047),
              alt: "PS5"
            };
          case "xboxone":
            return "small" === s ? {
              src: a(17976),
              alt: "Xbox One"
            } : {
              src: a(60350),
              alt: "Xbox One"
            };
          case "xboxsx":
            return "small" === s ? {
              src: a(84923),
              alt: "Xbox Series X|S"
            } : {
              src: a(89825),
              alt: "Xbox Series X|S"
            };
          default:
            return {
              src: "", alt: ""
            }
        }
      }
    },
    98310: (e, s, a) => {
      a.d(s, {
        A: () => t
      });
      const t = e => a(e < 100 ? 36399 : e > 99 && e < 500 ? 92627 : e > 499 && e < 750 ? 43864 : 76425)
    },
    39493: (e, s, a) => {
      a.d(s, {
        A: () => t
      });
      const t = (0, a(96717).defineMessages)({
        sc_link_activity_feed: {
          id: "sc_link_activity_feed",
          defaultMessage: "Activity Feed"
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
          defaultMessage: "Do Not Sell My Information"
        },
        sc_link_log_out: {
          id: "sc_link_log_out",
          defaultMessage: "Log Out"
        },
        sc_link_sign_in: {
          id: "sc_link_sign_in",
          defaultMessage: "Sign In"
        },
        sc_link_join_social_club: {
          id: "sc_link_join_social_club",
          defaultMessage: "Sign Up"
        },
        profile_selector_switch_character: {
          id: "profile_selector_switch_character",
          defaultMessage: "Switch Character"
        },
        profile_selector_profile_card: {
          id: "profile_selector_profile_card",
          defaultMessage: "Profile Card"
        },
        profile_selector_mugshot: {
          id: "profile_selector_mugshot",
          defaultMessage: "{userName} mugshot"
        },
        profile_selector_rp_icon: {
          id: "profile_selector_rp_icon",
          defaultMessage: "RP Category"
        },
        sc_menu_drag_handle: {
          id: "sc_menu_drag_handle",
          defaultMessage: "Drag Menu Handle"
        },
        sc_menu_open: {
          id: "sc_menu_open",
          defaultMessage: "Open player menu"
        },
        sc_menu_close: {
          id: "sc_menu_close",
          defaultMessage: "Close player menu"
        },
        language_selector_default: {
          id: "language_selector_default",
          defaultMessage: "Select a Language"
        },
        nofications_new: {
          id: "nofications_new",
          defaultMessage: "New notifications"
        }
      })
    },
    62811: (e, s, a) => {
      a.d(s, {
        A: () => o
      });
      var t = a(89779);
      const n = {
        pillBtn: "rockstargames-sites-gta-gen9b59962d0e68ccd73b5ee2e571528d469",
        selected: "rockstargames-sites-gta-gen9f5c57dad202e0d6ff855d5a4aca2c804",
        plusButton: "rockstargames-sites-gta-gen9cffaf489342637258d28f9b3b718836a",
        small: "rockstargames-sites-gta-gen9b8abf927f0ba0af0d8ac0e9c77690d34",
        btnText: "rockstargames-sites-gta-gen9e6e56461bfc2e426c4abc5451cd17284",
        btnTexticon: "rockstargames-sites-gta-gen9cef9f9ce913d167a1fe2e7118a407cdd",
        whiteBtn: "rockstargames-sites-gta-gen9b257e0629b9f8e101791d7a948ed15be",
        blackBtn: "rockstargames-sites-gta-gen9cb03bccaee79394858682d2ce4d08253",
        transparentBtn: "rockstargames-sites-gta-gen9d0460159a17533d4d23686d7dca76794",
        iconBtn: "rockstargames-sites-gta-gen9ac61186c3c22346c9a4ee2cd2820d341",
        link: "rockstargames-sites-gta-gen9c5920e56149b82f20f4db2ad9d397495",
        xboxone: "rockstargames-sites-gta-gen9a7057f2e6d398341f57bc462716d0508",
        xboxseriesxs: "rockstargames-sites-gta-gen9a693ab5879f34d7dea1737d3172ed4e4",
        ps4: "rockstargames-sites-gta-gen9a029ff88fc9aef470aaeef8053f90436",
        ps5: "rockstargames-sites-gta-gen9e25638751cf3e7267db23c6a401fcc36",
        pc: "rockstargames-sites-gta-gen9e03d92653f19a7ae3c4b3d5137bc9909"
      };
      var c = a(46632);
      const r = e => {
          let {
            children: s,
            className: a,
            onClick: t,
            style: n,
            ariaLabel: r
          } = e;
          return (0, c.jsx)("button", {
            className: a,
            onClick: t,
            style: n,
            type: "button",
            "aria-label": r,
            children: s
          })
        },
        i = e => {
          let {
            children: s,
            className: a,
            onClick: n,
            style: r,
            to: i,
            ariaLabel: o
          } = e;
          return (0, c.jsx)(t.NavLink, {
            className: a,
            onClick: n,
            style: r,
            to: i,
            "aria-label": o,
            children: s
          })
        },
        o = e => {
          let {
            btnColor: s = "#fff",
            className: a = "",
            consoleBtn: t,
            icon: o = "",
            img: d,
            labelColor: l = "#000",
            onClick: g,
            secondText: m,
            size: f,
            text: u,
            to: b,
            type: _ = "",
            ariaLabel: k
          } = e;
          const p = [n.plusButton, n[_] ?? "", n[f] ?? "", n[t] ?? "", a].join(" "),
            h = {
              "--hvr-color": s ?? l,
              "--hvr-bg-color": l ?? s,
              "--hvr-border-color": s ?? l
            },
            x = (0, c.jsxs)(c.Fragment, {
              children: [d ? (0, c.jsx)("img", {
                src: d,
                alt: ""
              }) : "", (0, c.jsxs)("div", {
                className: n.btnText,
                icon: o,
                children: [u, m ? (0, c.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, c.jsx)("span", {
                onClick: g,
                onKeyDown: g,
                className: p,
                role: "button",
                "aria-label": k,
                tabIndex: 0,
                children: (0, c.jsx)("a", {
                  href: b,
                  target: e,
                  children: x
                })
              })
            }
            return (0, c.jsx)(i, {
              className: p,
              onClick: g,
              style: {
                ...h
              },
              to: b,
              ariaLabel: k,
              children: x
            })
          }
          return (0, c.jsx)(r, {
            className: p,
            onClick: g,
            style: {
              ...h
            },
            ariaLabel: k,
            children: x
          })
        }
    },
    87027: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => L
      });
      var t = a(71403),
        n = a(57172),
        c = a(77356),
        r = a(59217),
        i = a(42756),
        o = a(58407),
        d = a(40207),
        l = a(26177),
        g = a(96717),
        m = a(94566),
        f = a(74401),
        u = a(62811),
        b = a(46632);
      const _ = e => {
          let {
            legalText: s
          } = e;
          return (0, b.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: s
            }
          })
        },
        k = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        p = e => {
          let {
            s,
            content: a,
            refLanding: t,
            loggedIn: n,
            addClaim: c,
            signin: r,
            landingSlide: i
          } = e;
          return (0, b.jsxs)("div", {
            className: [s.contentContainer, s[i], s.landingSlide].join(" "),
            ref: t,
            children: [(0, b.jsx)("img", {
              src: a.introScreen.image.sources.mobile || k,
              className: s.moduleImageMobile,
              alt: a.introScreen.image.alt
            }), (0, b.jsxs)("div", {
              className: s.topContent,
              children: [(0, b.jsx)("div", {
                className: s.textContent,
                children: (0, b.jsxs)("div", {
                  className: s.alert,
                  children: [(0, b.jsx)("div", {
                    className: s.badge,
                    children: a.introScreen.tag
                  }), (0, b.jsxs)("div", {
                    className: s.alertText,
                    children: [(0, b.jsx)("h2", {
                      children: a.introScreen.headline
                    }), (0, b.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: a.introScreen.body
                      }
                    })]
                  })]
                })
              }), (0, b.jsx)("div", {
                className: s.btnContainer,
                children: (0, b.jsx)(u.A, {
                  text: n ? a.introScreen.btnText.loggedIn : a.introScreen.btnText.loggedOut,
                  onClick: n ? c : r
                })
              })]
            }), (0, b.jsx)("div", {
              className: s.bottomContent,
              children: (0, b.jsx)("div", {
                className: s.legal,
                children: (0, b.jsx)(_, {
                  legalText: a.legalText
                })
              })
            })]
          })
        };
      var h = a(81902),
        x = a(89269),
        v = a(67446),
        S = a(60285);
      const j = e => {
        let {
          s,
          content: a,
          refSuccess: n,
          successSlide: c,
          characterList: r,
          linkAccountUrl: i,
          linkMoreAccounts: o,
          linkAccountBtn: d
        } = e;
        const l = (0, t.createRef)(),
          g = (0, t.createRef)(),
          m = (0, t.createRef)(),
          [f, u] = (0, t.useState)(),
          [k, p] = (0, t.useState)(!1),
          [j, y] = (0, t.useState)(),
          [C, w] = (0, t.useState)(!1),
          [N, M] = (0, t.useState)(!0);
        return (0, t.useEffect)((() => {
          const e = () => {
            l?.current && p(l?.current?.scrollWidth > l?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [l]), (0, t.useEffect)((() => {
          u({
            nextEl: g?.current,
            prevEl: m?.current
          })
        }), [m?.current, g?.current]), (0, b.jsxs)("div", {
          className: [s.contentContainer, s[c], s.successSlide].join(" "),
          "data-type": "long",
          ref: n,
          children: [(0, b.jsxs)("div", {
            className: s.topContent,
            children: [(0, b.jsxs)("div", {
              className: s.alert,
              children: [(0, b.jsx)("div", {
                className: s.successAlert
              }), (0, b.jsxs)("div", {
                className: s.alertText,
                children: [(0, b.jsx)("h3", {
                  children: a.successScreen.headline
                }), (0, b.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: a.successScreen.body
                  }
                })]
              })]
            }), (0, b.jsxs)("div", {
              className: s.swiperWrap,
              children: [(0, b.jsx)("div", {
                className: s.swiperContainer,
                ref: l,
                children: (0, b.jsxs)(h.RC, {
                  releaseOnEdges: !0,
                  touchReleaseOnEdges: !0,
                  loop: !1,
                  grabCursor: k,
                  slidesPerView: "auto",
                  speed: 700,
                  slidesOffsetAfter: 100,
                  navigation: f,
                  modules: [x.Vx, x.Jq],
                  onInit: e => {
                    y(e)
                  },
                  onSlideChange: e => {
                    w(e?.isEnd), M(e?.isBeginning)
                  },
                  children: [r.map((e => (0, b.jsx)(h.qr, {
                    tabIndex: "0",
                    children: (0, t.createElement)(v.A, {
                      characterData: e,
                      key: e.mugshotUrl
                    })
                  }, e.mugshotUrl))), (0, b.jsx)(h.qr, {
                    children: (0, b.jsx)(S.A, {
                      className: [s.linkMore, r.length > 0 ? s.withIcon : ""].join(" "),
                      to: i,
                      onClick: o,
                      children: (0, b.jsx)("div", {
                        className: s.btnText,
                        children: d
                      })
                    })
                  }, "linkMore")]
                })
              }), (0, b.jsx)("button", {
                className: s.swiperBtnPrev,
                "aria-label": "Previous Character",
                type: "button",
                ref: m,
                onClick: () => {
                  j?.slidePrev()
                },
                disabled: N,
                "data-hidden": !k
              }), (0, b.jsx)("button", {
                className: s.swiperBtnNext,
                "aria-label": "Next Character",
                type: "button",
                ref: g,
                onClick: () => {
                  j?.slideNext()
                },
                disabled: C,
                "data-hidden": !k
              })]
            })]
          }), (0, b.jsx)("div", {
            className: s.legal,
            children: (0, b.jsx)(_, {
              legalText: a.legalText
            })
          })]
        })
      };
      var y = a(39695);
      const C = e => {
          let {
            s,
            content: a,
            unlinkedSlide: t,
            refUnlinked: n,
            linkConsoleText: c,
            platformLogin: r,
            giftId: i
          } = e;
          return (0, b.jsxs)("div", {
            className: [s.contentContainer, s[t], s.unlinkedSlide, s.textContent].join(" "),
            ref: n,
            children: [(0, b.jsx)("div", {
              className: s.textContent,
              children: (0, b.jsxs)("div", {
                className: s.platformButtonContainer,
                children: [(0, b.jsx)("div", {
                  className: s.errorAlert
                }), (0, b.jsx)("h3", {
                  children: a.unlinkedScreen.headline
                }), (0, b.jsx)(y.A, {
                  variant: "secondary",
                  buttonText: c,
                  platformsAndLinks: [{
                    href: r("np"),
                    key: "ps",
                    platform: "ps",
                    translated: !0
                  }, {
                    href: r("xbox"),
                    key: "xbox",
                    platform: "xbox",
                    translated: !0
                  }],
                  trackingType: "link_account",
                  trackingParent: "WOC",
                  target: "_self",
                  trackingOId: i,
                  children: (0, b.jsx)("div", {
                    className: s.alert,
                    children: (0, b.jsx)("div", {
                      className: s.alertText,
                      children: (0, b.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: a.unlinkedScreen.body
                        }
                      })
                    })
                  })
                })]
              })
            }), (0, b.jsx)("div", {
              className: s.legal,
              children: (0, b.jsx)(_, {
                legalText: a.legalText
              })
            })]
          })
        },
        w = e => {
          let {
            s,
            errorSlide: a,
            content: t,
            refError: n
          } = e;
          return (0, b.jsxs)("div", {
            className: [s.contentContainer, s[a], s.errorSlide, s.textContent].join(" "),
            ref: n,
            children: [(0, b.jsxs)("div", {
              className: s.textContent,
              children: [(0, b.jsxs)("div", {
                className: s.alert,
                children: [(0, b.jsx)("div", {
                  className: s.errorAlert
                }), (0, b.jsx)("div", {
                  className: s.alertText,
                  children: (0, b.jsx)("h3", {
                    children: t.errorScreen.headline
                  })
                })]
              }), (0, b.jsx)(u.A, {
                text: t.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, b.jsx)("div", {
              className: s.legal,
              children: (0, b.jsx)(_, {
                legalText: t.legalText
              })
            })]
          })
        };
      var N = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e.disabled = "disabled", e
      }(N || {});
      const M = {
          pillBtn: "rockstargames-sites-gta-gen9e9d0055988bd29cc9b3774420b49220d",
          selected: "rockstargames-sites-gta-gen9b6cfe7731b5b7ab166fcb167bd54aeec",
          interestTrackerWrapper: "rockstargames-sites-gta-gen9eecfe5137cf2e3c4b0478b43be1e74b1",
          interestTracker: "rockstargames-sites-gta-gen9f67885e5391b6550f170fd56628c9906",
          loader: "rockstargames-sites-gta-gen9ca488091d243787a9cd796d97a5f122b",
          moduleImage: "rockstargames-sites-gta-gen9d3f21bc571d3a3f577d26e8b45859648",
          mobileImgContainer: "rockstargames-sites-gta-gen9d2125680dd25c2bcb65f9a0b96f21bb4",
          moduleImageMobile: "rockstargames-sites-gta-gen9e434acbd5507065824fc3af14eb8cc5c",
          slideContainer: "rockstargames-sites-gta-gen9d2fab85526434c79bbc12b6a6c8ffd70",
          contentContainer: "rockstargames-sites-gta-gen9f6613d575229be91073e6d484b77ea5e",
          landingSlide: "rockstargames-sites-gta-gen9d05cfa3ac7384704b98ad107655af47d",
          textContent: "rockstargames-sites-gta-gen9fc8660737bbdc8f86f8a4ea06659a33b",
          successSlide: "rockstargames-sites-gta-gen9d9450f3541952682d19fee00772d0f1c",
          unlinkedSlide: "rockstargames-sites-gta-gen9e562047f95446daace762342785ef53a",
          platformButtonContainer: "rockstargames-sites-gta-gen9e29a7fc3592430425d91c6819a1f7e0d",
          errorSlide: "rockstargames-sites-gta-gen9c041c8746fa1e4df112acc81cf6ab418",
          btnContainer: "rockstargames-sites-gta-gen9fa7395c3112347a96a25294116ae8fb0",
          topContent: "rockstargames-sites-gta-gen9fe62cddec5a5071937238008a67b4a23",
          bottomContent: "rockstargames-sites-gta-gen9c1530db66301c04293eabc59c455f37d",
          legal: "rockstargames-sites-gta-gen9b026b94c1160c03be6bb45b35bd171fd",
          faq: "rockstargames-sites-gta-gen9db46c4596b0b0dabb86776e069d7c6c2",
          faqLink: "rockstargames-sites-gta-gen9be9b8de47c9faf09181849be8ce32a7e",
          badge: "rockstargames-sites-gta-gen9b371557778af375ed631f8db217d4b95",
          hidden: "rockstargames-sites-gta-gen9c25fb97a6b90040828d50ba2bc626d2f",
          visible: "rockstargames-sites-gta-gen9c769fa70a9d7c7218a928525e1fc8aee",
          onScreen: "rockstargames-sites-gta-gen9ac869fcee40b7fecf48190c22b0c28c4",
          offScreen: "rockstargames-sites-gta-gen9bc58c9a458acdf7cedb71748dd2b97cd",
          alert: "rockstargames-sites-gta-gen9fa4b2575f1b0bf395ee8aeac6f921b9f",
          alertText: "rockstargames-sites-gta-gen9e5388eb6491a1a8a455f5da886d315a6",
          errorAlert: "rockstargames-sites-gta-gen9f2485866287b1e7bec17cd9956cc27c4",
          successAlert: "rockstargames-sites-gta-gen9f3e46d7eea7a5fdaa3c792ebefd21612",
          linkMore: "rockstargames-sites-gta-gen9f86c9d4e98312229416ab74287beb871",
          withIcon: "rockstargames-sites-gta-gen9c0502853211d6f38c2201df3324d2f4d",
          btnText: "rockstargames-sites-gta-gen9ea48f4033bbcce9a5f46c7ec3bf592cf",
          swiperContainer: "rockstargames-sites-gta-gen9f019ed0ffdb9171e9e607aa2fc5fb907",
          swiperWrap: "rockstargames-sites-gta-gen9b64badc5e0122206ecb30b961bf41ce0",
          swiperButton: "rockstargames-sites-gta-gen9a2afa4a87ebfd0a1c39fae80e25a3a1b",
          swiperBtnPrev: "rockstargames-sites-gta-gen9f89d35a4a9139e178742b2f663b5334b",
          swiperBtnNext: "rockstargames-sites-gta-gen9e3115ab3e897ab6bf9a95fc3e60aa034",
          spinner: "rockstargames-sites-gta-gen9f34b882833088888c4b2eb2b020a2b16"
        },
        {
          host: T,
          login: I,
          authHost: A,
          clientId: E
        } = (0, i.getScConfigForOrigin)(),
        L = e => {
          let {
            giftId: s,
            location: a = "gtaplus_site",
            introScreen: u,
            errorScreen: _,
            unlinkedScreen: h,
            successScreen: x,
            jumpLinkId: v,
            legalText: S
          } = e;
          const y = (0, i.useLocale)(),
            L = {
              errorScreen: {
                btnText: _?.errorButton || "",
                headline: _?.errorHeadline || ""
              },
              introScreen: {
                body: u?.introContent || "",
                btnText: {
                  loggedIn: u?.btnTextLoggedIn || "",
                  loggedOut: u?.btnTextLoggedOut || ""
                },
                headline: u?.introHeadline || "",
                image: {
                  alt: u?.image?.alt || u?.introHeadline || "",
                  sources: {
                    desktop: (0, f.useGetCdnSource)(u?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, f.useGetCdnSource)(u?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: u?.tag || ""
              },
              legalText: S,
              successScreen: {
                body: x?.successContent || "",
                headline: x?.successHeadline || ""
              },
              unlinkedScreen: {
                body: h?.unlinkedContent || "",
                btnText: h?.unlinkedButtonText || "",
                headline: h?.unlinkedHeadline || ""
              }
            },
            [P] = (0, n.useSearchParams)(),
            B = (0, o.useRockstarToken)(),
            {
              data: z,
              loggedIn: R
            } = (0, d.useRockstarUser)(),
            O = (0, o.useRockstarTokenPing)(),
            W = `https://${T}.rockstargames.com/settings/linkedaccounts`,
            U = (0, i.toScLocaleString)(y),
            H = (0, g.useIntl)(),
            {
              track: $
            } = (0, d.useGtmTrack)(),
            {
              ref: F,
              inView: D
            } = (0, r.useInView)({
              threshold: .6
            }),
            q = 1280,
            V = (0, t.createRef)(),
            X = (0, t.createRef)(),
            G = (0, t.createRef)(),
            J = (0, t.createRef)(),
            K = (0, t.createRef)(),
            [Q, Y] = (0, t.useState)(),
            [Z, ee] = (0, t.useState)([]),
            [se, ae] = (0, t.useState)(!1),
            [te, ne] = (0, t.useState)(),
            [ce, re] = (0, t.useState)("hidden"),
            [ie, oe] = (0, t.useState)("hidden"),
            [de, le] = (0, t.useState)("hidden"),
            [ge, me] = (0, t.useState)("hidden"),
            [fe, ue] = (0, t.useState)(!1),
            [be, _e] = (0, t.useState)(N.disabled),
            [ke, pe] = (0, t.useState)(N.landing),
            [he, xe] = (0, t.useState)(0),
            [ve, Se] = (0, t.useState)(0),
            [je, ye] = (0, t.useState)(0),
            [Ce, we] = (0, t.useState)(0),
            [Ne, Me] = (0, t.useState)(0),
            [Te, Ie] = (0, t.useState)(!1),
            [Ae, Ee] = (0, t.useState)(L.introScreen.image.sources.mobile || k),
            [Le, Pe] = (0, t.useState)(!1),
            Be = `${document.location.pathname}${document.location.search}#${v}`,
            ze = (0, i.usePrevious)(te),
            Re = (0, i.usePrevious)(R),
            Oe = () => {
              V.current && Se(V?.current?.scrollHeight), X.current && ye(X?.current?.scrollHeight), G.current && we(G?.current?.scrollHeight), J.current && Me(J?.current?.scrollHeight)
            },
            We = (e, s) => {
              e === N.landing && (e => {
                pe(N.landing), e && xe(ve), oe("onScreen"), re("hidden"), me("hidden"), le("hidden")
              })(s), e === N.success && (e => {
                pe(N.success), e && xe(je), oe("offScreen"), re("visible"), setTimeout((() => {
                  oe("hidden"), me("hidden")
                }), 300), setTimeout((() => {
                  re("onScreen")
                }), 100)
              })(s), e === N.error && (e => {
                pe(N.error), e && xe(Ce), oe("offScreen"), setTimeout((() => {
                  oe("hidden")
                }), 300), setTimeout((() => {
                  me("onScreen")
                }), 100)
              })(s), e === N.unlinked && (e => {
                pe(N.unlinked), e && xe(Ne), oe("offScreen"), le("visible"), setTimeout((() => {
                  oe("hidden"), me("hidden")
                }), 300), setTimeout((() => {
                  le("onScreen")
                }), 100)
              })(s)
            },
            Ue = () => {
              "disabled" === be ? (async () => {
                const e = {
                  giftUId: s,
                  location: a,
                  utmCampaign: P.get("utm_campaign"),
                  utmContent: P.get("utm_content"),
                  utmMedium: P.get("utm_medium"),
                  utmSource: P.get("utm_source")
                };
                if (Z.length > 0) {
                  const {
                    status: s
                  } = await (0, i.coreScApiFetch)("marketing/engagement/claim/create", {
                    fetchOptions: {
                      method: "POST"
                    },
                    pingBearer: O,
                    query: e
                  }) ?? [];
                  We(s ? N.success : N.error, !1)
                } else We(Q ? N.unlinked : N.landing, !1)
              })() : "success" === be ? We(N.success, !1) : "error" === be ? We(N.error, !1) : "unlinked" === be && We(N.unlinked, !1)
            };
          return (0, t.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== a ? Ee(L.introScreen.image.sources.mobile || k) : Ee(L.introScreen.image.sources.desktop || k)
              },
              s = () => {
                Oe(), window.innerWidth <= q && !se && (ae(!0), We(ke, !0)), window.innerWidth > q && se && ae(!1), e()
              };
            return ae(window.innerWidth <= q), e(), window.addEventListener("resize", s), () => {
              window.removeEventListener("resize", s)
            }
          }), [ke, se, V, J, G, X]), (0, t.useEffect)((() => {
            ke === N.success && he !== je ? xe(je) : ke === N.error && he !== Ce ? xe(Ce) : ke === N.landing && he !== ve ? xe(ve) : ke === N.unlinked && he !== Ne && xe(Ne)
          }), [Ce, je, he, Ne, ve]), (0, t.useEffect)((() => {
            Le || (Pe(!0), Oe(), Te && ke === N.success && xe(X?.current?.scrollHeight || 0))
          }), [V, J, G, X]), (0, t.useEffect)((() => {
            const e = z?.characters?.gtao;
            ee(e || [])
          }), [z]), (0, t.useEffect)((() => {
            "boolean" != typeof ze && "boolean" != typeof Re || te && R && (async () => {
              const {
                result: e
              } = await (0, i.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: O,
                query: {
                  giftUId: s
                }
              });
              Y(e), ne(!1)
            })()
          }), [te, R]), (0, t.useEffect)((() => {
            "boolean" == typeof R ? R ? ne(!0) : (ne(!1), oe("onScreen")) : ne(!0)
          }), [R]), (0, t.useEffect)((() => {
            Q && Z.length > 0 ? (Ie(!0), We(N.success, !0)) : Q && 0 === Z.length ? We(N.unlinked, !0) : "boolean" != typeof Q && Q || We(N.landing, !0)
          }), [Q]), (0, t.useEffect)((() => {
            D && !fe && ($({
              element_placement: "WOC",
              event: "page_section_impression",
              section_layout: R ? "signed in" : "signed out"
            }), ue(!0))
          }), [D]), (0, t.useEffect)((() => {
            "onScreen" === ce && $({
              element_placement: "WOC",
              event: "alert_update",
              o_id: s,
              text: "Almost there!"
            })
          }), [ce]), (0, t.useEffect)((() => {
            "onScreen" === de && $({
              element_placement: "WOC",
              event: "alert_error",
              o_id: s,
              text: "No Qualifying Character Found"
            })
          }), [de]), (0, t.useEffect)((() => {
            "onScreen" === ge && $({
              element_placement: "event_label",
              event: "alert_error",
              o_id: s,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [ge]), (0, t.useEffect)((() => {
            Ue()
          }), [be]), (0, b.jsxs)(b.Fragment, {
            children: [!1, (0, b.jsx)("div", {
              className: M.interestTrackerWrapper,
              children: (0, b.jsxs)(c.motion.div, {
                className: [M.interestTracker, te && M.loader].join(" "),
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  duration: .4,
                  ease: "easeIn"
                },
                "data-context": "interestTracker",
                ref: F,
                id: v || "",
                children: [(0, b.jsx)("div", {
                  className: M.moduleImage,
                  style: {
                    "--engagement-image": `url(${Ae})`
                  }
                }), (0, b.jsx)("div", {
                  className: [M.slideContainer, te ? M.loader : ""].join(" "),
                  ref: K,
                  "data-dev-mode": "disabled",
                  style: {
                    "--engagement-height": 0 === he ? "200%" : `${he}px`,
                    height: 0 !== he && se ? `${he}px` : "auto"
                  },
                  children: te ? (0, b.jsx)("div", {
                    className: M.spinner,
                    children: (0, b.jsx)(l.A, {
                      type: "SPINNING"
                    })
                  }) : (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsx)(p, {
                      s: M,
                      content: L,
                      refLanding: V,
                      loggedIn: R,
                      addClaim: async () => {
                        $({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: s,
                          text: "claim now",
                          section_layout: R ? "signed in" : "signed out"
                        }), Ue()
                      },
                      signin: () => {
                        const e = `${I}?returnUrl=${encodeURIComponent(Be)}&lang=${U}`;
                        $({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: e,
                          text: "claim now",
                          section_layout: R ? "signed in" : "signed out"
                        }), window.location.href = e
                      },
                      landingSlide: ie
                    }), (0, b.jsx)(j, {
                      s: M,
                      content: L,
                      refSuccess: X,
                      successSlide: ce,
                      characterList: Z,
                      linkAccountUrl: W,
                      linkMoreAccounts: () => {
                        $({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: W,
                          text: m.engagement.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: (0, b.jsx)(g.FormattedMessage, {
                        ...m.engagement.engagement_link_account
                      })
                    }), (0, b.jsx)(C, {
                      s: M,
                      content: L,
                      unlinkedSlide: de,
                      refUnlinked: J,
                      linkConsoleText: H.formatMessage(m.engagement.engagement_link_console_account),
                      platformLogin: e => `https://${A}.rockstargames.com/tpa/${e}/link/?cid=${E}&lang=${U}&returnUrl=${encodeURIComponent(Be)}&accessToken=${B}`,
                      giftId: s
                    }), (0, b.jsx)(w, {
                      s: M,
                      errorSlide: ge,
                      content: L,
                      refError: G
                    })]
                  })
                })]
              })
            })]
          })
        }
    },
    58989: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    89544: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    65636: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    20357: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    17976: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    84923: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    45710: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    8318: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    52047: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    60350: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    89825: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    36399: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    92627: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    76425: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    43864: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);