! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "dc5ac57b-ffde-4edf-a889-53057b08c479", e._sentryDebugIdIdentifier = "sentry-dbid-dc5ac57b-ffde-4edf-a889-53057b08c479")
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
  [3882], {
    26889: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => R
      });
      var r = s(71403),
        t = s(26040),
        o = s(75638);
      const c = (e, a) => {
        const s = e.tiers && e.tiers.every((e => e.isComplete)),
          r = a.tiers && a.tiers.every((e => e.isComplete));
        return s && !r ? 1 : !s && r ? -1 : 0
      };
      var n = s(96717);
      const _ = (0, n.defineMessages)({
        pl_card_badge_content_complete: {
          id: "pl_card_badge_content_complete",
          defaultMessage: "Complete"
        }
      });
      var i = s(89779),
        l = s(40207),
        d = s(42756);
      const p = {
        pillBtn: "rockstargames-sites-gta-gen9e6891f053f06919f1ef0dc72cafe9ae7",
        selected: "rockstargames-sites-gta-gen9e5cce3088e494e8ddb9b0cf5528697a3",
        packCardTierIndicator: "rockstargames-sites-gta-gen9eee874b61946e2a65886d622445e1c38",
        tierIndicator: "rockstargames-sites-gta-gen9bf9ed66cb83cf9a38bfc6fbb8e105fb7",
        active: "rockstargames-sites-gta-gen9cfa711252c08391d3a0f1ecd8728a61a"
      };
      var g = s(46632);
      const m = e => {
          let {
            tiers: a
          } = e;
          return (0, g.jsx)("div", {
            className: p.packCardTierIndicator,
            children: a?.map(((e, a) => (0, g.jsx)("div", {
              className: [p.tierIndicator, e.isComplete ? p.active : ""].join(" ")
            }, a)))
          })
        },
        h = {
          pillBtn: "rockstargames-sites-gta-gen9e2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-sites-gta-gen9ff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-sites-gta-gen9d6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-sites-gta-gen9eb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-sites-gta-gen9fcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-sites-gta-gen9a124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-sites-gta-gen9d42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-sites-gta-gen9cbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-sites-gta-gen9d4649f3812d37e7407503d49dcaaba04"
        },
        u = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        b = e => {
          let {
            title: a,
            url: s,
            images: t,
            className: o,
            tiers: c,
            onClick: p,
            imageSize: b = 420,
            imageLoaded: f
          } = e;
          const {
            isMobile: R
          } = (0, d.useWindowResize)(), {
            loggedIn: k
          } = (0, l.useRockstarUser)(), {
            selectedCharacterTuple: E
          } = (0, l.useRockstarUserState)(), [S, v] = (0, r.useState)(!1), [j, w] = (0, r.useState)(f), [x, A] = (0, r.useState)(!1), P = (0, n.useIntl)(), I = !!c?.length;
          (0, r.useEffect)((() => {
            if (Array.isArray(E)) {
              const e = E?.[0];
              A((0, d.getGen9Consoles)().includes(e))
            }
          }), [String(E)]), (0, r.useEffect)((() => {
            if (c && c.length > 0) {
              const e = c.some((e => !e.isComplete));
              v(!e)
            } else v(!1)
          }), [c]);
          const T = `${R?t?.mobile:t?.desktop}?im=Resize,height=${b}`;
          return (0, d.usePreloadImg)(T, (() => w(!0))), (0, g.jsx)(i.NavLink, {
            className: [h.packCard, o, S ? h.packCompleted : ""].join(" "),
            to: s,
            onClick: p,
            children: (0, g.jsxs)("div", {
              className: [h.packCardImageBox, j ? h.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${T})`
              },
              children: [S && (0, g.jsxs)("div", {
                className: h.badge,
                children: [(0, g.jsx)("div", {
                  className: h.icon
                }), (0, g.jsx)("div", {
                  className: h.label,
                  children: P.formatMessage(_.pl_card_badge_content_complete)
                })]
              }), (0, g.jsxs)("div", {
                className: h.packCardTextBox,
                children: [(0, g.jsx)("h4", {
                  children: a
                }), k && !S && x && (0, g.jsx)(m, {
                  tiers: I ? c : u
                })]
              })]
            })
          })
        },
        f = {
          pillBtn: "rockstargames-sites-gta-gen9c0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-gta-gen9ff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-gta-gen9ffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-gta-gen9f6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-gta-gen9a53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-gta-gen9b85775dc95fb3881171ee42e49076cbf"
        };
      t.gsap.registerPlugin(o.useGSAP);
      const R = e => {
        let {
          isHeaderVisible: a,
          packListItems: s,
          packCardClassName: n = f.packCard,
          packListClassName: _ = f.packList,
          packGridClassName: i = f.packGrid,
          selectPackCard: l,
          sortFunction: d = c
        } = e;
        const p = (0, r.useRef)(null),
          m = [...s].sort(d),
          [h, u] = (0, r.useState)(),
          [R, k] = (0, r.useState)(!1);
        return (0, r.useEffect)((() => {
          if (!0 === R) return;
          clearTimeout(h);
          const e = setTimeout((() => {
            k(!0)
          }), 1e3);
          u(e)
        }), []), (0, o.useGSAP)((() => {
          if (!1 !== R && p?.current) {
            const e = p.current.children;
            t.gsap.to(e, {
              opacity: 1,
              y: 0,
              duration: .5,
              stagger: .05,
              ease: t.Power2.easeInOut
            })
          }
        }), {
          dependencies: [R, s],
          scope: p,
          revertOnUpdate: !0
        }), (0, g.jsx)("div", {
          className: [_, a ? f.headerVisible : ""].join(" "),
          "data-testid": "pack-list",
          children: (0, g.jsx)("div", {
            ref: p,
            className: i,
            "data-testid": "pack-grid",
            children: m.map(((e, a) => {
              let {
                id: s,
                name: r,
                title: t,
                url: o,
                images: c,
                tiers: _
              } = e;
              return (0, g.jsx)(b, {
                title: t,
                url: o,
                className: n,
                images: c,
                tiers: _,
                onClick: () => ((e, a, s, r, t) => {
                  l(e, a, s, r, t)
                })(r, t, o, s, a)
              }, t)
            }))
          })
        })
      }
    },
    83082: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => i
      });
      var r = s(71403),
        t = s(27926),
        o = s(40207),
        c = s(1197),
        n = s(26889);
      var _ = s(46632);
      const i = e => {
        let {
          navItems: a,
          onNavItemClick: s,
          isOpen: i,
          isHeaderVisible: l
        } = e;
        const {
          track: d
        } = (0, o.useGtmTrack)(), [p, g] = (0, r.useState)(0), m = (0, r.useCallback)(((e, r) => {
          h(`Secondary Nav > ${a[p].title} > ${e}`, r), s()
        }), [a, s, p, d]), h = (e, a) => {
          d({
            event: "nav_click",
            text: e.split(">").pop()?.trim() || "",
            link_url: a,
            element_placement: e
          })
        };
        return (0, _.jsx)(t.motion.div, {
          className: "rockstargames-sites-gta-gen9aa2ce15f29ac99fe06895664698bb6cc",
          initial: {
            height: 0
          },
          animate: {
            height: i ? "100dvh" : 0
          },
          transition: {
            ease: "easeInOut",
            duration: .4
          },
          children: (0, _.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f2f85d11f6ee99282db61467ebdbd00f",
            children: [(0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c5288c05172905ec86e3fb56c010d6d3",
              children: (0, _.jsx)(c.A, {
                navItems: a,
                category: a[p]?.name,
                setCategory: g,
                nextChipBtnClass: "rockstargames-sites-gta-gen9c8a45e31d035c8e867358deea365ceac",
                prevChipBtnClass: "rockstargames-sites-gta-gen9e9684050ab2f4aa408ae565c740cf50c"
              })
            }), (0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f1adea94eb32de966a0e622247370f4e",
              children: (0, _.jsx)(n.A, {
                isHeaderVisible: l,
                packListItems: a[p]?.subNavItems ?? [],
                selectPackCard: m
              })
            })]
          })
        })
      }
    },
    1197: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => S
      });
      var r = s(71403),
        t = s(81902),
        o = s(89779),
        c = s(96717),
        n = s(74401),
        _ = s(40207);
      const i = {
        pillBtn: "rockstargames-sites-gta-gen9db4bf6cb61b2370932e4811235d51afa",
        selected: "rockstargames-sites-gta-gen9b691088f1c9719532c68ca7b97487e5b",
        chipButton: "rockstargames-sites-gta-gen9bfe6fefc1068ed81c8b38519a854285f"
      };
      var l = s(46632);
      const d = e => {
        let {
          title: a,
          onClick: s,
          selected: r
        } = e;
        return (0, l.jsx)("button", {
          type: "button",
          onClick: s,
          tabIndex: 0,
          "aria-label": a,
          className: [i.chipButton, r ? i.selected : ""].join(" "),
          children: (0, l.jsx)("div", {
            children: a
          })
        })
      };
      var p;

      function g() {
        return g = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, g.apply(this, arguments)
      }
      const m = e => r.createElement("svg", g({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), p || (p = r.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var h;

      function u() {
        return u = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, u.apply(this, arguments)
      }
      const b = e => r.createElement("svg", u({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), h || (h = r.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        f = {
          pillBtn: "rockstargames-sites-gta-gen9f5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-sites-gta-gen9f05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-sites-gta-gen9ef8ca38f98b731ff5dfe07937b1bbe34"
        },
        R = e => {
          let {
            direction: a,
            className: s,
            ...r
          } = e;
          return (0, l.jsxs)("button", {
            type: "button",
            className: [s, f.navScrollButton].join(" "),
            ...r,
            children: ["left" === a && (0, l.jsx)(m, {}), "right" === a && (0, l.jsx)(b, {})]
          })
        };
      var k = s(22137);
      const E = {
          pillBtn: "rockstargames-sites-gta-gen9c07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-sites-gta-gen9b7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-sites-gta-gen9b12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-sites-gta-gen9fde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-sites-gta-gen9e753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-sites-gta-gen9ce3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-sites-gta-gen9ef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-sites-gta-gen9f750c5a49886ae190c14e52aa026a417"
        },
        S = e => {
          let {
            navItems: a,
            category: s,
            setCategory: i,
            chipsContainerClass: p = E.chipsContainer,
            previousChipButtonClass: g = "",
            nextChipBtnClass: m = ""
          } = e;
          const h = (0, c.useIntl)(),
            {
              track: u
            } = (0, _.useGtmTrack)(),
            {
              pathname: b
            } = (0, o.useLocation)(),
            f = (0, r.useMemo)((() => Math.max(a.findIndex((e => e.name === s)), 0)), [a, b]),
            [S, v] = (0, r.useState)(f),
            [j, w] = (0, r.useState)(!1),
            [x, A] = (0, r.useState)(!1),
            [P, I] = (0, r.useState)(!1),
            T = (0, r.useRef)(null),
            C = (0, r.useRef)(null),
            N = (0, r.useRef)(null),
            O = (0, r.useCallback)(((e, a) => {
              N.current && N.current.slideTo(e), v(e), y(`Career Progress Nav > ${a}`)
            }), [u]),
            y = (e, a) => {
              u({
                event: "component_tab_click",
                text: e.split(">").pop()?.trim() || "",
                link_url: a,
                element_placement: e
              })
            };
          (0, r.useEffect)((() => {
            i(S)
          }), [S]);
          const G = e => {
            e.isEnd ? A(!0) : A(!1), e.isBeginning ? I(!0) : I(!1)
          };
          return (0, r.useEffect)((() => {
            N.current && ((N.current.wrapperEl.clientWidth || 0) > (N.current.el.clientWidth || 0) ? (w(!0), N.current.params.centeredSlides = !0, N.current.params.centeredSlidesBounds = !0) : (w(!1), N.current.params.centeredSlides = !1, N.current.params.centeredSlidesBounds = !1))
          }), [N.current?.wrapperEl.clientWidth, N.current?.el.clientWidth]), (0, l.jsxs)("div", {
            className: p,
            children: [!P && j && (0, l.jsx)("div", {
              ref: C,
              className: (0, n.classList)(E.previousChipNavButton, g),
              children: (0, l.jsx)(R, {
                direction: "left",
                className: E.previousNavIcon,
                onClick: () => {
                  N.current && (N.current?.slidePrev(), N.current.isBeginning ? I(!0) : I(!1), u({
                    event: "carousel_previous",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": h.formatMessage(k.D.pln_scroll_left)
              })
            }), (0, l.jsx)("div", {
              className: E.chips,
              children: (0, l.jsx)(t.RC, {
                onBeforeInit: e => N.current = e,
                onInit: G,
                className: E.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: S,
                onSlideChange: G,
                onResize: G,
                children: a.map(((e, a) => {
                  let {
                    title: s
                  } = e;
                  return (0, l.jsx)(t.qr, {
                    children: (0, l.jsx)(d, {
                      title: s,
                      onClick: () => O(a, s),
                      selected: S === a
                    })
                  }, s)
                }))
              })
            }), !x && j && (0, l.jsx)("div", {
              ref: T,
              className: (0, n.classList)(E.nextChipNavButton, m),
              children: (0, l.jsx)(R, {
                direction: "right",
                className: E.nextNavIcon,
                onClick: () => {
                  N.current && (N.current?.slideNext(), N.current.isEnd ? A(!0) : A(!1), u({
                    event: "carousel_next",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": h.formatMessage(k.D.pln_scroll_right)
              })
            })]
          })
        }
    },
    39369: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        PackPage: () => Be,
        default: () => He
      });
      var r = s(71403),
        t = s(26040),
        o = s(14781),
        c = s(55430),
        n = s(26177),
        _ = s(84079),
        i = s(96717),
        l = s(42756),
        d = s(40207),
        p = s(17891);
      const g = JSON.parse('{"us":{"cph_progres_counter_awards_label":"{total, plural, one {{value} out of 1 award completed} other {{value} out of # awards completed}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} out of 1 challenge completed} other {{value} out of # challenges completed}}","pln_career_progress_all_chip_title":"All","pln_career_progress_header_body":"Learn more about a huge range of Grand Theft Auto Online updates, and discover special challenges and rewards only available on PS5 and Xbox Series X|S.","pln_career_progress_header_body_gen9":"See all the challenges you\'ve completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks.","pln_career_progress_header_signin_label":"Sign In","pln_career_progress_header_signup_account":"Don\'t have an account?","pln_career_progress_header_signup_label":"Create An Account","pln_career_progress_header_title":"Career Progress","pln_career_progress_header_tooltip_aria_label":"Tiers Info tooltip","pln_career_progress_link_console_account":"Link A Game Account","pln_career_progress_link_console_account_description":"We couldn\'t find a GTA Online character linked to your Rockstar Games account. Link one or switch to a different Rockstar Games account.","pln_career_progress_link_console_account_title":"Link a GTA Online Character","pln_career_progress_percentage_chart_title":"Complete","pln_career_progress_percentage_chart_title_full":"Your career progress is {percentage}% completed.","pln_career_progress_unavailable":"Sorry, career progress pack cards are currently unavailable.","pln_scroll_left":"Scroll Left","pln_scroll_right":"Scroll Right","cph_awards_bonuses_tattoo":"{tattooName} Tattoo","cph_awards_bonuses_title":"Bonuses","cph_awards_bronze":"Bronze","cph_awards_gold":"Gold","cph_awards_metal_completed":"{metal}: Completed.","cph_awards_metal_not_unlocked":"{metal}: Not unlocked.","cph_awards_platinum":"Platinum","cph_awards_rp_bonus_info":"Complete unique challenges to earn GTA$, bonus items, and more including RP bonuses for each Level:","cph_awards_silver":"Silver","cph_awards_title":"Awards","cph_callout_feedback_body":"How are you enjoying GTA Online? Tell us your thoughts and ideas to help us shape the future of the game.","cph_callout_feedback_button":"Give feedback","cph_callout_feedback_title":"Share Your Feedback","cph_highlights_group_aria":"Highlight {index} of {total}","cph_highlights_heading":"Highlights","cph_highlights_next":"Next","cph_highlights_previous":"Previous","cph_intro_getting_started":"Getting Started","cph_intro_guide_instruction":"Read the {title} Guide to learn more.","cph_intro_guide_learn_more":"Learn more","cph_loggedin_nochar_body":"We couldn\'t find a GTA Online character linked to your account. Link one or switch to a different account.","cph_loggedin_nochar_button":"Link a game account","cph_loggedin_nochar_title":"Link a GTA Online Character","cph_login_prompt_body":"Sign in to your account to see all the rewards you can earn, the awards you\'ve won, and the possibilities still ahead of you.","cph_login_prompt_button":"Sign In","cph_login_prompt_button_helper":"Don\'t have an account?","cph_login_prompt_button_helper_link":"Create an Account","cph_login_prompt_title":"Sign In to Track Your Progress","cph_nav_close":"Close Section Navigation","cph_nav_open":"Open Section Navigation","cph_nav_scroll_left":"Scroll Left","cph_nav_scroll_right":"Scroll Right","cph_progress_available_on":"Only available on","cph_progress_available_on_aria_ps5":"PlayStation5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Progress Bar","cph_progress_challenges_title":"Challenges","cph_progress_close":"Close","cph_progress_rewards_title":"Rewards","cph_progress_rewards_view_all":"View All","cph_progress_rewards_view_less":"View Less","cph_progress_tracker_tier_label":"Tier {number}","cph_progress_tracker_title":"Career Progress","cph_reward_claimable":"Ready to claim","cph_reward_claimed":"Claimed","cph_reward_how_to_claim":"Rewards ready to be claimed. Visit the Career Progress Menu in-game to claim.","cph_reward_locked":"Reward locked","cph_reward_ready_to_claim":"Rewards ready to be claimed","cph_tier_complete":"Tier Complete"},"de":{"cph_progres_counter_awards_label":"{total, plural, one {{value} von 1 Auszeichnung errungen} other {{value} von # Auszeichnungen errungen}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} von 1 Herausforderung abgeschlossen} other {{value} von # Herausforderungen abgeschlossen}}","pln_career_progress_all_chip_title":"Alle","pln_career_progress_header_body":"Erfahre mehr über zahlreiche Updates für Grand Theft Auto Online und entdecke besondere Herausforderungen und Belohnungen, die nur auf PS5 und Xbox Series X|S verfügbar sind.","pln_career_progress_header_body_gen9":"Sieh dir die Herausforderungen an, die du im Rahmen deiner Karriere in GTA Online abgeschlossen hast. Natürlich kannst du auch neue entdecken und wertvolle Belohnungen verdienen, während du in den Reihen der Kriminellen aufsteigst.","pln_career_progress_header_signin_label":"Anmelden","pln_career_progress_header_signup_account":"Du hast noch kein Konto?","pln_career_progress_header_signup_label":"Konto erstellen","pln_career_progress_header_title":"Karrierefortschritt","pln_career_progress_header_tooltip_aria_label":"Stufeninformationen","pln_career_progress_link_console_account":"Spielkonto verknüpfen","pln_career_progress_link_console_account_description":"Es wurde kein GTA-Online-Charakter gefunden, der mit deinem Rockstar-Games-Konto verknüpft ist. Verknüpfe einen oder melde dich mit einem anderen Rockstar-Games-Konto an.","pln_career_progress_link_console_account_title":"GTA-Online-Charakter verknüpfen","pln_career_progress_percentage_chart_title":"Abgeschlossen","pln_career_progress_percentage_chart_title_full":"Dein Karrierefortschritt ist zu {percentage} % abgeschlossen.","pln_career_progress_unavailable":"Die Karrierefortschrittskarten der Spielerweiterungen sind momentan leider nicht verfügbar.","pln_scroll_left":"Links scrollen","pln_scroll_right":"Rechts scrollen","cph_awards_bonuses_tattoo":"Tattoo: {tattooName}","cph_awards_bonuses_title":"Boni","cph_awards_bronze":"Bronze","cph_awards_gold":"Gold","cph_awards_metal_completed":"{metal}: Abgeschlossen.","cph_awards_metal_not_unlocked":"{metal}: Nicht freigeschaltet.","cph_awards_platinum":"Platin","cph_awards_rp_bonus_info":"Schließe einzigartige Herausforderungen ab, um GTA$, besondere Gegenstände und mehr zu erhalten, inklusive RP-Boni für jede Stufe:","cph_awards_silver":"Silber","cph_awards_title":"Auszeichnungen","cph_callout_feedback_body":"Wie gefällt dir GTA Online? Teile uns deine Eindrücke und Ideen mit und hilf uns dabei, die Zukunft des Spiels zu gestalten.","cph_callout_feedback_button":"Feedback geben","cph_callout_feedback_title":"Gib uns dein Feedback","cph_highlights_group_aria":"Markiertes Element {index} von {total}","cph_highlights_heading":"Markierte Elemente","cph_highlights_next":"Weiter","cph_highlights_previous":"Zurück","cph_intro_getting_started":"Erste Schritte","cph_intro_guide_instruction":"Für weitere Informationen sieh dir den Guide zu {title} an.","cph_intro_guide_learn_more":"Mehr erfahren","cph_loggedin_nochar_body":"Es wurde kein GTA-Online-Charakter gefunden, der mit deinem Konto verbunden ist. Verknüpfe einen oder melde dich mit einem anderen Konto an.","cph_loggedin_nochar_button":"Spielkonto verknüpfen","cph_loggedin_nochar_title":"GTA-Online-Charakter verknüpfen","cph_login_prompt_body":"Melde dich mit deinem Konto an und sieh dir die Belohnungen an, die du freischalten kannst, die Auszeichnungen, die du schon verdient hast, sowie die Möglichkeiten, die noch vor dir liegen.","cph_login_prompt_button":"Anmelden","cph_login_prompt_button_helper":"Du hast noch kein Konto?","cph_login_prompt_button_helper_link":"Konto erstellen","cph_login_prompt_title":"Melde dich an, um deinen Fortschritt anzusehen","cph_nav_close":"Bereichsnavigation schließen","cph_nav_open":"Bereichsnavigation öffnen","cph_nav_scroll_left":"Links scrollen","cph_nav_scroll_right":"Rechts scrollen","cph_progress_available_on":"Nur auf","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Fortschrittsanzeige","cph_progress_challenges_title":"Herausforderungen","cph_progress_close":"Schließen","cph_progress_rewards_title":"Belohnungen","cph_progress_rewards_view_all":"Alle anzeigen","cph_progress_rewards_view_less":"Weniger anzeigen","cph_progress_tracker_tier_label":"Stufe {number}","cph_progress_tracker_title":"Karrierefortschritt","cph_reward_claimable":"Bereit zur Abholung","cph_reward_claimed":"Abgeholt","cph_reward_how_to_claim":"Belohnungen sind bereit zur Abholung. Besuche das Karrierefortschrittsmenü im Spiel, um sie abzuholen.","cph_reward_locked":"Belohnung gesperrt","cph_reward_ready_to_claim":"Belohnungen sind bereit zur Abholung","cph_tier_complete":"Stufe abgeschlossen"},"es":{"cph_progres_counter_awards_label":"{total, plural, one {{value} de 1 premio conseguido} other {{value} de # premios conseguidos}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} de 1 desafío completado} other {{value} de # desafíos completados}}","pln_career_progress_all_chip_title":"Todos","pln_career_progress_header_body":"Aprende más sobre el amplio abanico de actualizaciones de Grand Theft Auto Online, y descubre los desafíos y recompensas especiales disponibles solo en PS5 y Xbox Series X|S.","pln_career_progress_header_body_gen9":"Descubre todos los desafíos que has completado en tu trayectoria en GTA Online. También puedes descubrir nuevos desafíos y obtener valiosas recompensas a medida que subes de rango en el mundo del crimen.","pln_career_progress_header_signin_label":"Iniciar sesión","pln_career_progress_header_signup_account":"¿No tienes una cuenta?","pln_career_progress_header_signup_label":"Crear una cuenta","pln_career_progress_header_title":"Progreso en la trayectoria","pln_career_progress_header_tooltip_aria_label":"Descripción emergente sobre rangos","pln_career_progress_link_console_account":"Vincula una cuenta del juego","pln_career_progress_link_console_account_description":"No hemos encontrado un personaje de GTA Online vinculado a tu cuenta de Rockstar Games. Vincula uno o cambia a otra cuenta de Rockstar Games.","pln_career_progress_link_console_account_title":"Vincula un personaje de GTA Online","pln_career_progress_percentage_chart_title":"Completado","pln_career_progress_percentage_chart_title_full":"Tu progreso en la trayectoria está completado al {percentage}µ%.","pln_career_progress_unavailable":"Lo sentimos, las categorías de progreso en la trayectoria no están disponibles en este momento.","pln_scroll_left":"Desplazar hacia la izquierda","pln_scroll_right":"Desplazar hacia la derecha","cph_awards_bonuses_tattoo":"Tatuaje {tattooName}","cph_awards_bonuses_title":"Bonificaciones","cph_awards_bronze":"Bronce","cph_awards_gold":"Oro","cph_awards_metal_completed":"{metal}: Completado","cph_awards_metal_not_unlocked":"{metal}: Bloqueado","cph_awards_platinum":"Platino","cph_awards_rp_bonus_info":"Completa desafíos únicos para ganar GTA$, artículos y mucho más, como bonificaciones de RP por cada nivel:","cph_awards_silver":"Plata","cph_awards_title":"Premios","cph_callout_feedback_body":"¿Te está gustando GTA Online? Comparte tus opiniones e ideas con nosotros para ayudarnos a mejorar el juego en el futuro.","cph_callout_feedback_button":"Da tu opinión","cph_callout_feedback_title":"Comparte tus comentarios","cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior","cph_intro_getting_started":"Primeros pasos","cph_intro_guide_instruction":"Para obtener más información, lee la guía de {title}.","cph_intro_guide_learn_more":"Más información","cph_loggedin_nochar_body":"No hemos encontrado ningún personaje de GTA Online vinculado a tu cuenta. Vincula uno o cambia a una cuenta diferente.","cph_loggedin_nochar_button":"Vincula una cuenta del juego","cph_loggedin_nochar_title":"Vincula un personaje de GTA Online","cph_login_prompt_body":"Inicia sesión en tu cuenta para ver todas las recompensas que puedes conseguir, los premios que has ganado y todas las posibilidades que tienes por delante.","cph_login_prompt_button":"Iniciar sesión","cph_login_prompt_button_helper":"¿No tienes una cuenta?","cph_login_prompt_button_helper_link":"Crear una cuenta","cph_login_prompt_title":"Inicia sesión para ver tu progreso","cph_nav_close":"Cerrar la sección de navegación","cph_nav_open":"Abrir la sección de navegación","cph_nav_scroll_left":"Desplazar hacia la izquierda","cph_nav_scroll_right":"Desplazar hacia la derecha","cph_progress_available_on":"Solo disponible en","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra de progreso","cph_progress_challenges_title":"Desafíos","cph_progress_close":"Cerrar","cph_progress_rewards_title":"Recompensas","cph_progress_rewards_view_all":"Ver todas","cph_progress_rewards_view_less":"Ver menos","cph_progress_tracker_tier_label":"Nivel {number}","cph_progress_tracker_title":"Progreso en la trayectoria","cph_reward_claimable":"Solicítala","cph_reward_claimed":"Solicitada","cph_reward_how_to_claim":"¡Ya puedes solicitar las recompensas! Visita el menú de progreso en la trayectoria para solicitarla en el juego.","cph_reward_locked":"Recompensa bloqueada","cph_reward_ready_to_claim":"¡Ya puedes solicitar las recompensas!","cph_tier_complete":"Nivel completado"},"mx":{"cph_progres_counter_awards_label":"{total, plural, one {{value} de 1 premio completado} other {{value} de # premios completados}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} de 1 desafío completado} other {{value} de # desafíos completados}}","pln_career_progress_all_chip_title":"Todos","pln_career_progress_header_body":"Puedes obtener más información sobre una gran variedad de actualizaciones de Grand Theft Auto Online y descubre desafíos especiales y recompensas exclusivas para PS5 y Xbox Series X|S.","pln_career_progress_header_body_gen9":"Consulta todos los desafíos que completaste en tu trayectoria en GTA Online. Además, descubre desafíos nuevos y obtén recompensas valiosas mientras avanzas en tu carrera criminal.","pln_career_progress_header_signin_label":"Iniciar sesión","pln_career_progress_header_signup_account":"¿Aún no tienes una cuenta?","pln_career_progress_header_signup_label":"Crea una cuenta","pln_career_progress_header_title":"Progreso y trayectoria","pln_career_progress_header_tooltip_aria_label":"Consejos sobre niveles","pln_career_progress_link_console_account":"Vincula tu cuenta de juego","pln_career_progress_link_console_account_description":"Tu cuenta de Rockstar Games no está vinculada a ningún personaje de GTA Online. Vincula un personaje o usa una cuenta de Rockstar Games diferente.","pln_career_progress_link_console_account_title":"Vincula una cuenta con un personaje de GTA Online","pln_career_progress_percentage_chart_title":"Completado","pln_career_progress_percentage_chart_title_full":"Completaste el {percentage}% de Progreso y trayectoria.","pln_career_progress_unavailable":"Lo sentimos, las tarjetas de los contenidos descargables de \\"Progreso y trayectoria\\" no están disponibles en este momento.","pln_scroll_left":"Desplazarse hacia la izquierda","pln_scroll_right":"Desplazarse hacia la derecha","cph_awards_bonuses_tattoo":"{tattooName} Tatuaje","cph_awards_bonuses_title":"Bonificaciones","cph_awards_bronze":"Bronce","cph_awards_gold":"Oro","cph_awards_metal_completed":"{metal}: Completado","cph_awards_metal_not_unlocked":"{metal}: No desbloqueado","cph_awards_platinum":"Platino","cph_awards_rp_bonus_info":"Completa desafíos únicos para ganar GTA$, artículos de bonificación y más, aparte de bonificaciones de RP en cada nivel:","cph_awards_silver":"Plata","cph_awards_title":"Premios","cph_callout_feedback_body":"¿Estás disfrutando GTA Online? Cuéntanos lo que opinas para poder mejorar el juego en el futuro.","cph_callout_feedback_button":"Comenta aquí","cph_callout_feedback_title":"Comparte tus comentarios","cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior","cph_intro_getting_started":"Primeros pasos","cph_intro_guide_instruction":"Lee la guía de {title} para obtener más información.","cph_intro_guide_learn_more":"Más información","cph_loggedin_nochar_body":"Tu cuenta no está vinculada a ningún personaje de GTA Online. Vincula un personaje o usa una cuenta diferente.","cph_loggedin_nochar_button":"Vincula tu cuenta de juego","cph_loggedin_nochar_title":"Vincula una cuenta con un personaje de GTA Online","cph_login_prompt_body":"Inicia sesión con tu cuenta para ver todas las recompensas disponibles, los premios que has ganado y las sorpresas que te esperan.","cph_login_prompt_button":"Iniciar sesión","cph_login_prompt_button_helper":"¿Aún no tienes una cuenta?","cph_login_prompt_button_helper_link":"Crea una cuenta","cph_login_prompt_title":"Regístrate para seguir tu progreso","cph_nav_close":"Cerrar sección","cph_nav_open":"Abrir sección","cph_nav_scroll_left":"Desplazarse hacia la izquierda","cph_nav_scroll_right":"Desplazarse hacia la derecha","cph_progress_available_on":"Disponible solamente en","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra de progreso","cph_progress_challenges_title":"Desafíos","cph_progress_close":"Cerrar","cph_progress_rewards_title":"Recompensas","cph_progress_rewards_view_all":"Ver todas","cph_progress_rewards_view_less":"Ver menos","cph_progress_tracker_tier_label":"Nivel {number}","cph_progress_tracker_title":"Progreso y trayectoria","cph_reward_claimable":"Ya la puedes obtener","cph_reward_claimed":"Ya la obtuviste","cph_reward_how_to_claim":"Ya puedes obtener las recompensas. Visita la sección \\"Progreso y trayectoria\\" del juego para obtenerlas.","cph_reward_locked":"Recompensa bloqueada","cph_reward_ready_to_claim":"Ya puedes obtener las recompensas","cph_tier_complete":"Nivel completado"},"fr":{"cph_progres_counter_awards_label":"{total, plural, one {{value} récompense sur 1 obtenue} other {{value} récompenses sur # obtenues}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} défi sur 1 terminé} other {{value} défis sur # terminés}}","pln_career_progress_all_chip_title":"Tout","pln_career_progress_header_body":"Apprenez-en davantage sur de nombreuses mises à jour de Grand Theft Auto Online, et découvrez des récompenses et des défis spéciaux seulement disponibles sur PS5 et Xbox Series X|S.","pln_career_progress_header_body_gen9":"Consultez tous les défis que vous avez terminés au cours de votre carrière dans GTA Online. Vous pouvez également en découvrir de nouveaux et gagner de belles récompenses en gravissant les échelons de la criminalité.","pln_career_progress_header_signin_label":"Se connecter","pln_career_progress_header_signup_account":"Vous n\'avez pas de compte ?","pln_career_progress_header_signup_label":"Créer un compte","pln_career_progress_header_title":"Suivi de carrière","pln_career_progress_header_tooltip_aria_label":"Informations sur le palier","pln_career_progress_link_console_account":"Associer un compte de jeu","pln_career_progress_link_console_account_description":"Nous n\'avons pas trouvé de personnage de GTA Online associé à votre compte Rockstar Games. Associez-en un ou utilisez un autre compte Rockstar Games.","pln_career_progress_link_console_account_title":"Associer un personnage de GTA Online","pln_career_progress_percentage_chart_title":"Terminé","pln_career_progress_percentage_chart_title_full":"Votre suivi de carrière est terminé à {percentage} %.","pln_career_progress_unavailable":"Désolé, les cartes de suivi de carrière ne sont actuellement pas disponibles.","pln_scroll_left":"Faire défiler vers la gauche","pln_scroll_right":"Faire défiler vers la droite","cph_awards_bonuses_tattoo":"Tatouage {tattooName}","cph_awards_bonuses_title":"Bonus","cph_awards_bronze":"Bronze","cph_awards_gold":"Or","cph_awards_metal_completed":"{metal} : Terminé.","cph_awards_metal_not_unlocked":"{metal} : Non déverrouillé.","cph_awards_platinum":"Platine","cph_awards_rp_bonus_info":"Relevez des défis uniques pour gagner des GTA$, des articles bonus, et plus, dont des RP bonus pour chaque niveau :","cph_awards_silver":"Argent","cph_awards_title":"Récompenses","cph_callout_feedback_body":"Vous appréciez GTA Online ? Faites-nous part de vos remarques et de vos idées pour nous aider à améliorer le jeu à l\'avenir.","cph_callout_feedback_button":"Commenter","cph_callout_feedback_title":"Partagez vos idées","cph_highlights_group_aria":"Résultat {index} sur {total}","cph_highlights_heading":"Résultats","cph_highlights_next":"Suivant","cph_highlights_previous":"Précédent","cph_intro_getting_started":"Bien démarrer","cph_intro_guide_instruction":"Lisez le guide \\"{title}\\" pour en savoir plus.","cph_intro_guide_learn_more":"En savoir plus","cph_loggedin_nochar_body":"Nous n\'avons pas trouvé de personnage de GTA Online associé à votre compte. Associez-en un ou utilisez un autre compte.","cph_loggedin_nochar_button":"Associer un compte de jeu","cph_loggedin_nochar_title":"Associer un personnage de GTA Online","cph_login_prompt_body":"Connectez-vous à votre compte pour consulter toutes les récompenses que vous pouvez gagner ou avez déjà gagnées, ainsi que les opportunités qui vous attendent.","cph_login_prompt_button":"Se connecter","cph_login_prompt_button_helper":"Vous n\'avez pas de compte ?","cph_login_prompt_button_helper_link":"Créer un compte","cph_login_prompt_title":"Connectez-vous pour suivre votre progression","cph_nav_close":"Fermer la navigation pour cette section","cph_nav_open":"Ouvrir la navigation pour cette section","cph_nav_scroll_left":"Faire défiler vers la gauche","cph_nav_scroll_right":"Faire défiler vers la droite","cph_progress_available_on":"Uniquement disponible sur","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barre de progression","cph_progress_challenges_title":"Défis","cph_progress_close":"Fermer","cph_progress_rewards_title":"Récompenses","cph_progress_rewards_view_all":"Afficher tout","cph_progress_rewards_view_less":"Afficher moins","cph_progress_tracker_tier_label":"Palier {number}","cph_progress_tracker_title":"Suivi de carrière","cph_reward_claimable":"Prête à être récupérée","cph_reward_claimed":"Récupérée","cph_reward_how_to_claim":"Récompenses prêtes à être récupérées. Rendez-vous dans le menu Suivi de carrière en jeu pour les récupérer.","cph_reward_locked":"Récompense verrouillée","cph_reward_ready_to_claim":"Récompenses prêtes à être récupérées","cph_tier_complete":"Palier terminé"},"it":{"cph_progres_counter_awards_label":"{total, plural, one {{value} ricompensa completata su 1} other {{value} ricompense completate su #}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} sfida completata su 1} other {{value} sfide completate su #}}","pln_career_progress_all_chip_title":"Tutto","pln_career_progress_header_body":"Esplora l’enorme gamma di aggiornamenti di Grand Theft Auto Online e scopri le sfide e le ricompense speciali disponibili solo su PS5 e Xbox Series X|S.","pln_career_progress_header_body_gen9":"Vedi tutte le sfide che hai completato nella tua carriera di GTA Online. Puoi anche scoprirne di nuove e ottenere delle ricompense preziose mentre sali di rango nella tua carriera criminale.","pln_career_progress_header_signin_label":"Accedi","pln_career_progress_header_signup_account":"Non hai un account?","pln_career_progress_header_signup_label":"Crea un account","pln_career_progress_header_title":"Progressi della carriera","pln_career_progress_header_tooltip_aria_label":"Informazioni dei livelli","pln_career_progress_link_console_account":"Collega un account di gioco","pln_career_progress_link_console_account_description":"Non abbiamo trovato un personaggio di GTA Online collegato al tuo account di Rockstar Games. Collegane uno o prova con un altro account di Rockstar Games.","pln_career_progress_link_console_account_title":"Collega un personaggio di GTA Online","pln_career_progress_percentage_chart_title":"Completamento","pln_career_progress_percentage_chart_title_full":"Percentuale di completamento del progresso della tua carriera: {percentage}%","pln_career_progress_unavailable":"Siamo spiacenti, le informazioni sui progressi della carriera nei vari pacchetti non sono al momento disponibili.","pln_scroll_left":"Scorri a sinistra","pln_scroll_right":"Scorri a destra","cph_awards_bonuses_tattoo":"{tattooName} Tatuaggio","cph_awards_bonuses_title":"Bonus","cph_awards_bronze":"Bronzo","cph_awards_gold":"Oro","cph_awards_metal_completed":"{metal}: Sbloccato","cph_awards_metal_not_unlocked":"{metal}: Bloccato","cph_awards_platinum":"Platino","cph_awards_rp_bonus_info":"Completa sfide uniche per guadagnare GTA$, articoli omaggio e altro ancora, inclusi RP bonus per ogni livello:","cph_awards_silver":"Argento","cph_awards_title":"Ricompense","cph_callout_feedback_body":"Ti piace GTA Online? Dicci cosa ne pensi e aiutaci a plasmare il futuro del gioco.","cph_callout_feedback_button":"Invia feedback","cph_callout_feedback_title":"Condividi il tuo feedback","cph_highlights_group_aria":"Elemento evidenziato {index} di {total}","cph_highlights_heading":"Elementi evidenziati","cph_highlights_next":"Successivo","cph_highlights_previous":"Precedente","cph_intro_getting_started":"Come iniziare","cph_intro_guide_instruction":"Leggi la guida di {title} per saperne di più.","cph_intro_guide_learn_more":"Altre informazioni","cph_loggedin_nochar_body":"Non abbiamo trovato un personaggio di GTA Online collegato al tuo account. Collegane uno o prova con un altro account.","cph_loggedin_nochar_button":"Collega un account di gioco","cph_loggedin_nochar_title":"Collega un personaggio di GTA Online","cph_login_prompt_body":"Accedi al tuo account per vedere tutte le ricompense che puoi ottenere, quelle che hai vinto e tutte le possibilità a tua disposizione.","cph_login_prompt_button":"Accedi","cph_login_prompt_button_helper":"Non hai un account?","cph_login_prompt_button_helper_link":"Crea un account","cph_login_prompt_title":"Accedi per vedere i tuoi progressi","cph_nav_close":"Chiudi il menu","cph_nav_open":"Apri il menu","cph_nav_scroll_left":"Scorri a sinistra","cph_nav_scroll_right":"Scorri a destra","cph_progress_available_on":"Disponibile solo su","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra dei progressi","cph_progress_challenges_title":"Sfide","cph_progress_close":"Chiudi","cph_progress_rewards_title":"Ricompense","cph_progress_rewards_view_all":"Vedi tutte","cph_progress_rewards_view_less":"Riduci","cph_progress_tracker_tier_label":"Livello {number}","cph_progress_tracker_title":"Progressi della carriera","cph_reward_claimable":"Pronta per essere riscattata","cph_reward_claimed":"Riscattata","cph_reward_how_to_claim":"La ricompensa è pronta per essere riscattata. Visita il menu Progressi della carriera per riscattarla.","cph_reward_locked":"Ricompensa bloccata","cph_reward_ready_to_claim":"Ricompense pronte per essere riscattate","cph_tier_complete":"Livello completato"},"jp":{"cph_progres_counter_awards_label":"{total, plural, one {{value}/1のアワードをクリア} other {{value}/#のアワードをクリア}}","cph_progres_counter_challenges_label":"{total, plural, one {{value}/1のチャレンジをクリア} other {{value}/#のチャレンジをクリア}}","pln_career_progress_all_chip_title":"全て","pln_career_progress_header_body":"「GTAオンライン」の幅広いアップデートについての詳細を知り、PS5やXbox Series X|Sでのみ利用可能なスペシャルチャレンジや報酬を発見しましょう。","pln_career_progress_header_body_gen9":"「GTAオンライン」のキャリアで達成した全てのチャレンジを見ましょう。犯罪ランクを上っていくことで、新しいチャレンジを発見したり、貴重な報酬も獲得できます。","pln_career_progress_header_signin_label":"サインイン","pln_career_progress_header_signup_account":"アカウントをお持ちではないですか？","pln_career_progress_header_signup_label":"アカウントを作成する","pln_career_progress_header_title":"キャリア進行状況","pln_career_progress_header_tooltip_aria_label":"ティア情報ツールチップ","pln_career_progress_link_console_account":"ゲームアカウントとリンクする","pln_career_progress_link_console_account_description":"あなたのロックスター・ゲームスアカウントにリンクされた「GTAオンライン」のキャラクターが見つかりませんでした。リンクするか別のロックスター・ゲームスアカウントに切り替えてください。","pln_career_progress_link_console_account_title":"「GTAオンライン」のキャラクターをリンク","pln_career_progress_percentage_chart_title":"完了","pln_career_progress_percentage_chart_title_full":"あなたのキャリア進行状況は{percentage}%達成されています。","pln_career_progress_unavailable":"申し訳ございません。キャリア進行状況パックカードは現在利用不可能です。","pln_scroll_left":"左にスクロール","pln_scroll_right":"右にスクロール","cph_awards_bonuses_tattoo":"{tattooName}タトゥー","cph_awards_bonuses_title":"ボーナス","cph_awards_bronze":"ブロンズ","cph_awards_gold":"ゴールド","cph_awards_metal_completed":"{metal}:完了。","cph_awards_metal_not_unlocked":"{metal}:未解除。","cph_awards_platinum":"プラチナ","cph_awards_rp_bonus_info":"チャレンジを達成して、GTAマネーやボーナスアイテム、RPボーナスなどの報酬を各レベルで獲得：","cph_awards_silver":"シルバー","cph_awards_title":"アワード","cph_callout_feedback_body":"「GTAオンライン」をお楽しみいただけていますか？感想を送り、このゲームの今後を作る手助けをしてください。","cph_callout_feedback_button":"フィードバックを送る","cph_callout_feedback_title":"フィードバックをシェア","cph_highlights_group_aria":"{total}のうち{index}をハイライト","cph_highlights_heading":"ハイライト","cph_highlights_next":"次","cph_highlights_previous":"前","cph_intro_getting_started":"始めよう","cph_intro_guide_instruction":"詳細は「{title}」ガイドにて。","cph_intro_guide_learn_more":"詳細を見る","cph_loggedin_nochar_body":"アカウントにリンクされた「GTAオンライン」のキャラクターが見つかりませんでした。リンクするか別のアカウントに切り替えてください。","cph_loggedin_nochar_button":"ゲームアカウントをリンク","cph_loggedin_nochar_title":"「GTAオンライン」のキャラクターをリンク","cph_login_prompt_body":"アカウントにサインインして、獲得できる報酬、得たアワード、そしてこれからの可能性を確認しよう。","cph_login_prompt_button":"サインイン","cph_login_prompt_button_helper":"アカウントをお持ちではないですか？","cph_login_prompt_button_helper_link":"アカウントを作成する","cph_login_prompt_title":"進行状況を記録するにはサインインしてください","cph_nav_close":"セクションナビゲーションを閉じる","cph_nav_open":"セクションナビゲーションを開く","cph_nav_scroll_left":"左にスクロール","cph_nav_scroll_right":"右にスクロール","cph_progress_available_on":"これらのプラットフォーム限定","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"進行度バー","cph_progress_challenges_title":"チャレンジ","cph_progress_close":"閉じる","cph_progress_rewards_title":"報酬","cph_progress_rewards_view_all":"全て表示","cph_progress_rewards_view_less":"表示件数を減らす","cph_progress_tracker_tier_label":"ティア{number}","cph_progress_tracker_title":"キャリア進行状況","cph_reward_claimable":"受け取り可能","cph_reward_claimed":"受け取り済み","cph_reward_how_to_claim":"報酬が受け取り可能です。ゲーム内のキャリア進行状況メニューからお受け取りください。","cph_reward_locked":"報酬ロック中","cph_reward_ready_to_claim":"報酬が受け取り可能です","cph_tier_complete":"ティア完了"},"kr":{"cph_progres_counter_awards_label":"{total, plural, one {보상 1개 중 {value}개 완료} other {보상 #개 중 {value}개 완료}}","cph_progres_counter_challenges_label":"{total, plural, one {도전 1개 중 {value}개 완료} other {도전 #개 중 {value}개 완료}}","pln_career_progress_all_chip_title":"전체","pln_career_progress_header_body":"다양한 Grand Theft Auto 온라인 업데이트에 대해 알아보십시오. PS5와 Xbox Series X|S에서만 이용할 수 있는 특별 도전과 보상도 여러분을 기다리고 있습니다.","pln_career_progress_header_body_gen9":"GTA 온라인 경력에서 완료한 모든 도전을 확인해 보십시오. 새로운 도전을 발견하고 범죄 제왕의 자리에 올라가면서 귀중한 보상을 획득해 보십시오.","pln_career_progress_header_signin_label":"로그인","pln_career_progress_header_signup_account":"계정이 없으신가요?","pln_career_progress_header_signup_label":"계정 생성하기","pln_career_progress_header_title":"경력 진행","pln_career_progress_header_tooltip_aria_label":"단계 정보 툴팁","pln_career_progress_link_console_account":"게임 계정 연동하기","pln_career_progress_link_console_account_description":"Rockstar Games 계정과 연동된 GTA 온라인 캐릭터를 찾을 수 없습니다. 캐릭터를 연동하거나 다른 Rockstar Games 계정을 사용하십시오.","pln_career_progress_link_console_account_title":"GTA 온라인 캐릭터 연동하기","pln_career_progress_percentage_chart_title":"완료","pln_career_progress_percentage_chart_title_full":"경력 진행이 {percentage}% 완료되었습니다.","pln_career_progress_unavailable":"죄송합니다. 경력 진행 팩 카드를 지금 이용할 수 없습니다.","pln_scroll_left":"왼쪽 스크롤","pln_scroll_right":"오른쪽 스크롤","cph_awards_bonuses_tattoo":"{tattooName} 문신","cph_awards_bonuses_title":"보너스","cph_awards_bronze":"브론즈","cph_awards_gold":"골드","cph_awards_metal_completed":"{metal}: 완료함.","cph_awards_metal_not_unlocked":"{metal}: 잠금 해제되지 않음.","cph_awards_platinum":"플래티넘","cph_awards_rp_bonus_info":"특별한 도전을 완료하면 다음의 다양한 혜택이 지급됩니다. GTA 달러, 보너스 아이템 및 레벨별 RP 보너스 - 레벨:","cph_awards_silver":"실버","cph_awards_title":"보상","cph_callout_feedback_body":"GTA 온라인을 즐기고 계신가요? 계속해서 더 좋은 게임으로 거듭날 수 있도록 여러분의 의견과 아이디어를 보내주시길 바랍니다.","cph_callout_feedback_button":"피드백 보내기","cph_callout_feedback_title":"피드백 공유하기","cph_highlights_group_aria":"하이라이트: {index}/{total}","cph_highlights_heading":"하이라이트","cph_highlights_next":"다음","cph_highlights_previous":"이전","cph_intro_getting_started":"시작하기","cph_intro_guide_instruction":"자세한 사항은 {title} 가이드를 확인하십시오.","cph_intro_guide_learn_more":"더 알아보기","cph_loggedin_nochar_body":"계정과 연동된 GTA 온라인 캐릭터를 찾을 수 없습니다. 캐릭터를 연동하거나 다른 계정을 사용하십시오.","cph_loggedin_nochar_button":"게임 계정 연동하기","cph_loggedin_nochar_title":"GTA 온라인 캐릭터 연동하기","cph_login_prompt_body":"계정에 로그인하여 획득 가능한 모든 보상, 이미 획득한 보상, 그리고 여러분 앞에 펼쳐진 가능성을 확인해 보십시오.","cph_login_prompt_button":"로그인","cph_login_prompt_button_helper":"계정이 없으신가요?","cph_login_prompt_button_helper_link":"계정 생성하기","cph_login_prompt_title":"로그인하고 진행 상황 확인하기","cph_nav_close":"항목 이동 닫기","cph_nav_open":"항목 이동 열기","cph_nav_scroll_left":"왼쪽 스크롤","cph_nav_scroll_right":"오른쪽 스크롤","cph_progress_available_on":"이용 가능한 플랫폼:","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"진행 상황","cph_progress_challenges_title":"도전","cph_progress_close":"닫기","cph_progress_rewards_title":"보상","cph_progress_rewards_view_all":"전체 보기","cph_progress_rewards_view_less":"간단하게 보기","cph_progress_tracker_tier_label":"{number}단계","cph_progress_tracker_title":"경력 진행","cph_reward_claimable":"획득할 수 있음","cph_reward_claimed":"획득함","cph_reward_how_to_claim":"보상을 획득할 수 있습니다. 게임 내 경력 진행 메뉴를 방문해 획득하십시오.","cph_reward_locked":"잠긴 보상","cph_reward_ready_to_claim":"보상을 획득할 수 있습니다","cph_tier_complete":"단계 완료"},"pl":{"cph_progres_counter_awards_label":"{total, plural, one {Zdobyto {value} z 1 nagrody} other {Zdobyto {value} z # nagród}","cph_progres_counter_challenges_label":"{total, plural, one {Ukończono {value} z 1 wyzwania} other {Ukończono {value} z # wyzwań}}","pln_career_progress_all_chip_title":"Wszystko","pln_career_progress_header_body":"Dowiedz się więcej o szerokiej gamie aktualizacji Grand Theft Auto Online i odkryj specjalne wyzwania i nagrody dostępne tylko na PS5 i Xbox Series X|S.","pln_career_progress_header_body_gen9":"Zobacz wszystkie swoje ukończone wyzwania w ramach kariery GTA Online. Odkrywaj nowe wyzwania i zdobywaj wartościowe nagrody, wspinając się po szczeblach swojej przestępczej kariery.","pln_career_progress_header_signin_label":"Zaloguj się","pln_career_progress_header_signup_account":"Nie posiadasz konta?","pln_career_progress_header_signup_label":"Załóż konto","pln_career_progress_header_title":"Postępy kariery","pln_career_progress_header_tooltip_aria_label":"Informacje o poziomach","pln_career_progress_link_console_account":"Powiąż swoje konto","pln_career_progress_link_console_account_description":"Nie odnaleziono postaci GTA Online powiązanej z twoim kontem Rockstar Games. Powiąż postać lub przełącz się na inne konto Rockstar Games.","pln_career_progress_link_console_account_title":"Powiąż postać GTA Online","pln_career_progress_percentage_chart_title":"Ukończono","pln_career_progress_percentage_chart_title_full":"Postępy kariery: ukończono {percentage}%","pln_career_progress_unavailable":"Karty postępu kariery są obecnie niedostępne.","pln_scroll_left":"Przesuń w lewo","pln_scroll_right":"Przesuń w prawo","cph_awards_bonuses_tattoo":"Tatuaż – {tattooName}","cph_awards_bonuses_title":"Premie","cph_awards_bronze":"Brąz","cph_awards_gold":"Złoto","cph_awards_metal_completed":"{metal}: Ukończono.","cph_awards_metal_not_unlocked":"{metal}: Nie odblokowano.","cph_awards_platinum":"Platyna","cph_awards_rp_bonus_info":"Wykonuj wyjątkowe wyzwania, aby zdobyć GTA$, dodatkowe nagrody i więcej, w tym premie RP za każdy poziom wyzwań:","cph_awards_silver":"Srebro","cph_awards_title":"Nagrody","cph_callout_feedback_body":"Jak ci się podoba GTA Online? Podziel się z nami swoimi przemyśleniami i pomysłami, które pomogą nam kształtować przyszłość gry.","cph_callout_feedback_button":"Dodaj opinię","cph_callout_feedback_title":"Podziel się opinią","cph_highlights_group_aria":"Wyróżnione {index} z {total}","cph_highlights_heading":"Wyróżnione","cph_highlights_next":"Dalej","cph_highlights_previous":"Poprzednie","cph_intro_getting_started":"Pierwsze kroki","cph_intro_guide_instruction":"Przeczytaj poradnik „{title}”, aby dowiedzieć się więcej.","cph_intro_guide_learn_more":"Dowiedz się więcej","cph_loggedin_nochar_body":"Nie odnaleziono postaci GTA Online powiązanej z twoim kontem. Powiąż postać lub przełącz się na inne konto.","cph_loggedin_nochar_button":"Powiąż swoje konto","cph_loggedin_nochar_title":"Powiąż postać GTA Online","cph_login_prompt_body":"Zaloguj się, aby zobaczyć wszystkie nagrody, które możesz zdobyć, zdobyte nagrody i możliwości, które wciąż stoją przed tobą otworem.","cph_login_prompt_button":"Zaloguj się","cph_login_prompt_button_helper":"Nie posiadasz konta?","cph_login_prompt_button_helper_link":"Załóż konto","cph_login_prompt_title":"Zaloguj się, aby śledzić postępy","cph_nav_close":"Zamknij menu nawigacji","cph_nav_open":"Otwórz menu nawigacji","cph_nav_scroll_left":"Przesuń w lewo","cph_nav_scroll_right":"Przesuń w prawo","cph_progress_available_on":"Dostępne wyłącznie na","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Postępy","cph_progress_challenges_title":"Wyzwania","cph_progress_close":"Zamknij","cph_progress_rewards_title":"Nagrody","cph_progress_rewards_view_all":"Zobacz wszystkie","cph_progress_rewards_view_less":"Wyświetl mniej","cph_progress_tracker_tier_label":"Poziom {number}","cph_progress_tracker_title":"Postępy kariery","cph_reward_claimable":"Gotowe do odebrania","cph_reward_claimed":"Odebrano","cph_reward_how_to_claim":"Nagrody gotowe do odebrania Odwiedź menu postępów kariery w grze, aby odebrać.","cph_reward_locked":"Nagroda zablokowana","cph_reward_ready_to_claim":"Nagrody gotowe do odebrania","cph_tier_complete":"Poziom ukończony"},"br":{"cph_progres_counter_awards_label":"{total, plural, one {{value} de 1 prêmio concluído} other {{value} de # prêmios concluídos}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} de 1 desafio concluído} other {{value} de # desafios concluídos}}","pln_career_progress_all_chip_title":"Tudo","pln_career_progress_header_body":"Saiba mais sobre as diversas atualizações de Grand Theft Auto Online e descubra desafios e recompensas especiais disponíveis apenas para PS5 e Xbox Series X|S.","pln_career_progress_header_body_gen9":"Confira todos os desafios que você concluiu na sua carreira no GTA Online. Você também pode descobrir novos desafios e ganhar grandes recompensas conforme cresce na hierarquia do crime.","pln_career_progress_header_signin_label":"Iniciar sessão","pln_career_progress_header_signup_account":"Não tem uma conta?","pln_career_progress_header_signup_label":"Criar conta","pln_career_progress_header_title":"Progresso da Carreira","pln_career_progress_header_tooltip_aria_label":"Informação sobre níveis","pln_career_progress_link_console_account":"Vincular conta do jogo","pln_career_progress_link_console_account_description":"Não achamos nenhum personagem do GTA Online vinculado à sua conta da Rockstar Games. Vincule um personagem ou use uma conta da Rockstar Games diferente.","pln_career_progress_link_console_account_title":"Vincule um personagem do GTA Online","pln_career_progress_percentage_chart_title":"Concluiu","pln_career_progress_percentage_chart_title_full":"O seu progresso da carreira está {percentage}% concluído.","pln_career_progress_unavailable":"No momento, os quadros do progresso da carreira não estão disponíveis.","pln_scroll_left":"Rolar para a esquerda","pln_scroll_right":"Rolar para a direita","cph_awards_bonuses_tattoo":"Tatuagem: {tattooName}","cph_awards_bonuses_title":"Bônus","cph_awards_bronze":"Bronze","cph_awards_gold":"Ouro","cph_awards_metal_completed":"{metal}:  concluído.","cph_awards_metal_not_unlocked":"{metal}: não desbloqueado.","cph_awards_platinum":"Platina","cph_awards_rp_bonus_info":"Conclua desafios únicos para ganhar GTA$, itens bônus e mais, incluindo bônus de RP para cada nível:","cph_awards_silver":"Prata","cph_awards_title":"Prêmios","cph_callout_feedback_body":"Como está sendo a sua experiência no GTA Online? Envie suas ideias e opiniões e ajude a construir o futuro do jogo.","cph_callout_feedback_button":"Enviar feedback","cph_callout_feedback_title":"Compartilhe seu feedback","cph_highlights_group_aria":"Destaque {index} de {total}","cph_highlights_heading":"Destaques","cph_highlights_next":"Próximo","cph_highlights_previous":"Anterior","cph_intro_getting_started":"Primeiros passos","cph_intro_guide_instruction":"Leia o Guia de {title} para saber mais.","cph_intro_guide_learn_more":"Saiba mais","cph_loggedin_nochar_body":"Não achamos nenhum personagem do GTA Online vinculado à sua conta. Vincule um personagem ou use uma conta diferente.","cph_loggedin_nochar_button":"Vincular conta do jogo","cph_loggedin_nochar_title":"Vincule um personagem do GTA Online","cph_login_prompt_body":"Inicie sessão na sua conta para ver todas as recompensas que você pode ganhar, as recompensas que já ganhou e todas as possibilidades futuras.","cph_login_prompt_button":"Iniciar sessão","cph_login_prompt_button_helper":"Não tem uma conta?","cph_login_prompt_button_helper_link":"Crie uma conta","cph_login_prompt_title":"Inicie sessão para ver seu Progresso","cph_nav_close":"Fechar navegação entre seções","cph_nav_open":"Abrir navegação entre seções","cph_nav_scroll_left":"Rolar para a esquerda","cph_nav_scroll_right":"Rolar para a direita","cph_progress_available_on":"Disponível apenas para","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra de progresso","cph_progress_challenges_title":"Desafios","cph_progress_close":"Fechar","cph_progress_rewards_title":"Recompensas","cph_progress_rewards_view_all":"Ver tudo","cph_progress_rewards_view_less":"Ver menos","cph_progress_tracker_tier_label":"Nível {number}","cph_progress_tracker_title":"Progresso da Carreira","cph_reward_claimable":"Pronto para resgatar","cph_reward_claimed":"Resgatado","cph_reward_how_to_claim":"Recompensas disponíveis para resgatar. Acesse o Menu de Progresso da Carreira no jogo para resgatar.","cph_reward_locked":"Recompensa bloqueada","cph_reward_ready_to_claim":"Recompensas disponíveis para resgatar","cph_tier_complete":"Nível concluído"},"ru":{"cph_progres_counter_awards_label":"{total, plural, one {Получена награда: {value} из 1} other {Получено наград: {value} из #}}","cph_progres_counter_challenges_label":"{total, plural, one {Выполнено испытание: {value} из 1} other {Выполнено испытаний: {value} из #}}","pln_career_progress_all_chip_title":"Все","pln_career_progress_header_body":"Узнайте больше о различных обновлениях Grand Theft Auto Online, а также откройте для себя особые испытания и награды, доступные только на PS5 и Xbox Series X|S.","pln_career_progress_header_body_gen9":"Просмотрите все испытания, которые вы прошли в своей карьере GTA Online. Вы также можете открывать для себя новые испытания и зарабатывать ценные награды по мере того, как продвигаетесь в своей криминальной карьере.","pln_career_progress_header_signin_label":"Войти","pln_career_progress_header_signup_account":"У вас нет учетной записи?","pln_career_progress_header_signup_label":"Создать учетную запись","pln_career_progress_header_title":"Прогресс карьеры","pln_career_progress_header_tooltip_aria_label":"Подсказка с информацией об уровнях","pln_career_progress_link_console_account":"Привязать учетную запись","pln_career_progress_link_console_account_description":"Мы не смогли найти персонажа GTA Online, связанного с вашей учетной записью Rockstar Games. Привяжите его или переключитесь на другую учетную запись Rockstar Games.","pln_career_progress_link_console_account_title":"Привязка персонажа GTA Online","pln_career_progress_percentage_chart_title":"Завершено","pln_career_progress_percentage_chart_title_full":"Прогресс вашей карьеры завершен на {percentage}%","pln_career_progress_unavailable":"Извините, просмотр обновлений в настоящее время недоступен.","pln_scroll_left":"Пролистать влево","pln_scroll_right":"Пролистать вправо","cph_awards_bonuses_tattoo":"Татуировка {tattooName}","cph_awards_bonuses_title":"Бонусы","cph_awards_bronze":"Бронза","cph_awards_gold":"Золото","cph_awards_metal_completed":"{metal}: завершено.","cph_awards_metal_not_unlocked":"{metal}: не открыто.","cph_awards_platinum":"Платина","cph_awards_rp_bonus_info":"Выполняйте особые испытания и получайте GTA $, бонусные предметы и другие награды, включая дополнительные очки RP за каждый уровень:","cph_awards_silver":"Серебро","cph_awards_title":"Награды","cph_callout_feedback_body":"Как вам GTA Online? Поделитесь вашими мыслями и предложениями – это поможет нам определить будущее игры.","cph_callout_feedback_button":"Обратная связь","cph_callout_feedback_title":"Оставьте отзыв","cph_highlights_group_aria":"Элемент {index} из {total}","cph_highlights_heading":"Элементы","cph_highlights_next":"Далее","cph_highlights_previous":"Назад","cph_intro_getting_started":"С чего начать","cph_intro_guide_instruction":"Ознакомьтесь с руководством по данной теме, чтобы узнать больше.","cph_intro_guide_learn_more":"Узнать больше","cph_loggedin_nochar_body":"Мы не смогли найти персонажа GTA Online, связанного с вашей учетной записью. Привяжите его или переключитесь на другую учетную запись.","cph_loggedin_nochar_button":"Привязать учетную запись","cph_loggedin_nochar_title":"Привязка персонажа GTA Online","cph_login_prompt_body":"Войдите в свою учетную запись, чтобы увидеть все награды, которые вы можете получить и уже получили, а также все возможности, которые вас ждут впереди.","cph_login_prompt_button":"Войти","cph_login_prompt_button_helper":"У вас нет учетной записи?","cph_login_prompt_button_helper_link":"Создать учетную запись","cph_login_prompt_title":"Войдите, чтобы посмотреть свой прогресс","cph_nav_close":"Закрыть навигацию по разделам","cph_nav_open":"Открыть навигацию по разделам","cph_nav_scroll_left":"Пролистать влево","cph_nav_scroll_right":"Пролистать вправо","cph_progress_available_on":"Доступно только на","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Индикатор прогресса","cph_progress_challenges_title":"Испытания","cph_progress_close":"Закрыть","cph_progress_rewards_title":"Награды","cph_progress_rewards_view_all":"Все награды","cph_progress_rewards_view_less":"Свернуть","cph_progress_tracker_tier_label":"Уровень {number}","cph_progress_tracker_title":"Прогресс карьеры","cph_reward_claimable":"Готова к получению","cph_reward_claimed":"Получена","cph_reward_how_to_claim":"Награды готовы к получению. Зайдите в меню «Прогресс карьеры» в игре, чтобы их получить.","cph_reward_locked":"Награда заблокирована","cph_reward_ready_to_claim":"Награды готовы к получению","cph_tier_complete":"Уровень завершен"},"hans":{"cph_progres_counter_awards_label":"{total, plural, one {{value} 个奖章已完成（共 1 个）} other {{value} 个奖章已完成（共 # 个）}}","cph_progres_counter_challenges_label":"{total, plural, one {{value} 个挑战已完成（共 1 个）} other {{value} 个挑战已完成（共 # 个）}}","pln_career_progress_all_chip_title":"全部","pln_career_progress_header_body":"了解一大批 Grand Theft Auto 在线模式更新，并发掘尽在 PS 和 Xbox Series X|S 上可用的特殊挑战和奖励。","pln_career_progress_header_body_gen9":"查看您在 GTA 在线模式职业中完成的所有挑战。您还可在提升犯罪等级时发现新挑战并赚取价值不菲的奖励。","pln_career_progress_header_signin_label":"登录","pln_career_progress_header_signup_account":"没有账户？","pln_career_progress_header_signup_label":"创建一个新账户","pln_career_progress_header_title":"职业进度","pln_career_progress_header_tooltip_aria_label":"等级信息提示","pln_career_progress_link_console_account":"绑定一个游戏账户","pln_career_progress_link_console_account_description":"我们无法找到与您的 Rockstar Games 账户绑定的 GTA 在线模式角色。绑定一个账户或更换一个不同的 Rockstar Games 账户。","pln_career_progress_link_console_account_title":"绑定一个 GTA 在线模式角色","pln_career_progress_percentage_chart_title":"完成","pln_career_progress_percentage_chart_title_full":"您的职业进度已完成 {percentage}%。","pln_career_progress_unavailable":"对不起，职业进度内容包卡片当前不可用。","pln_scroll_left":"向左滚动","pln_scroll_right":"向右滚动","cph_awards_bonuses_tattoo":"{tattooName}纹身","cph_awards_bonuses_title":"奖励","cph_awards_bronze":"青铜","cph_awards_gold":"黄金","cph_awards_metal_completed":"{metal}：已完成。","cph_awards_metal_not_unlocked":"{metal}：未解锁。","cph_awards_platinum":"铂金","cph_awards_rp_bonus_info":"完成独特的挑战以赚取 GTA 游戏币、奖励物品及更多内容，包括每个等级的声望值奖励：","cph_awards_silver":"白银","cph_awards_title":"奖章","cph_callout_feedback_body":"您在 GTA 在线模式的体验如何？告诉我们您的感受和想法以帮助我们更好地塑造游戏。","cph_callout_feedback_button":"提供反馈","cph_callout_feedback_title":"分享您的反馈","cph_highlights_group_aria":"精彩内容 {index}（共 {total}）","cph_highlights_heading":"精彩内容","cph_highlights_next":"下一个","cph_highlights_previous":"上一个","cph_intro_getting_started":"现在开始","cph_intro_guide_instruction":"阅读 {title} 指南以了解详细信息。","cph_intro_guide_learn_more":"了解详细信息","cph_loggedin_nochar_body":"我们无法找到与您的账户绑定的 GTA 在线模式角色。绑定一个账户或更换一个不同的账户。","cph_loggedin_nochar_button":"绑定一个游戏账户","cph_loggedin_nochar_title":"绑定一个 GTA 在线模式角色","cph_login_prompt_body":"登录您的账户以查看您可以赚取的所有奖励、您已经拥有的奖励，及前方等待着的机遇。","cph_login_prompt_button":"登录","cph_login_prompt_button_helper":"没有账户？","cph_login_prompt_button_helper_link":"创建一个新账户","cph_login_prompt_title":"登录以追踪您的进度","cph_nav_close":"关闭章节导航","cph_nav_open":"打开章节导航","cph_nav_scroll_left":"向左滚动","cph_nav_scroll_right":"向右滚动","cph_progress_available_on":"仅限","cph_progress_available_on_aria_ps5":"PlayStation 5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"进度条","cph_progress_challenges_title":"挑战","cph_progress_close":"关闭","cph_progress_rewards_title":"奖励","cph_progress_rewards_view_all":"查看全部","cph_progress_rewards_view_less":"查看较少","cph_progress_tracker_tier_label":"第 {number} 级","cph_progress_tracker_title":"职业进度","cph_reward_claimable":"现可领取","cph_reward_claimed":"已领取","cph_reward_how_to_claim":"现可领取奖励。前往游戏内的“职业进度菜单”以领取。","cph_reward_locked":"奖励已锁定","cph_reward_ready_to_claim":"现可领取奖励","cph_tier_complete":"等级已完成"},"tw":{"cph_progres_counter_awards_label":"{total, plural, one {已完成 {value} 個獎章（共 1 個）} other {已完成 {value} 個獎章（共 # 個）}}","cph_progres_counter_challenges_label":"{total, plural, one {已完成 {value} 個挑戰（共 1 個）} other {已完成 {value} 個挑戰（共 # 個）}}","pln_career_progress_all_chip_title":"全部","pln_career_progress_header_body":"了解更多關於 Grand Theft Auto 線上模式的眾多更新內容，以及探索僅限於 PS5 及 Xbox Series X|S 的特殊挑戰及獎勵。","pln_career_progress_header_body_gen9":"查看您在 GTA 線上模式生涯中已完成的所有挑戰。您也可以探索新挑戰，在您一步一步登上犯罪事業巔峰時賺取豐厚獎勵。","pln_career_progress_header_signin_label":"登入","pln_career_progress_header_signup_account":"沒有帳戶？","pln_career_progress_header_signup_label":"註冊帳戶","pln_career_progress_header_title":"生涯進度","pln_career_progress_header_tooltip_aria_label":"層級資訊小提示","pln_career_progress_link_console_account":"連結遊戲帳戶","pln_career_progress_link_console_account_description":"我們無法找到與您的 Rockstar Games 帳戶連結的 GTA 線上模式角色。連結或切換至另一個 Rockstar Games 帳戶。","pln_career_progress_link_console_account_title":"連結 GTA 線上模式角色","pln_career_progress_percentage_chart_title":"完成","pln_career_progress_percentage_chart_title_full":"您的生涯進度已完成百分之 {percentage}。","pln_career_progress_unavailable":"抱歉，目前無法使用生涯進度內容包卡。","pln_scroll_left":"向左捲動","pln_scroll_right":"向右捲動","cph_awards_bonuses_tattoo":"{tattooName}刺青","cph_awards_bonuses_title":"獎勵","cph_awards_bronze":"銅牌","cph_awards_gold":"金牌","cph_awards_metal_completed":"{metal}：已完成。","cph_awards_metal_not_unlocked":"{metal}：未解鎖。","cph_awards_platinum":"白金","cph_awards_rp_bonus_info":"完成獨特挑戰賺取 GTA 遊戲幣、獎勵物品，以及更多，包括每個等級的聲望值獎勵：","cph_awards_silver":"銀牌","cph_awards_title":"獎章","cph_callout_feedback_body":"您遊玩 GTA 線上模式的感想如何？把您的想法和意見告訴我們，幫助我們塑造遊戲的未來。","cph_callout_feedback_button":"給予意見反應","cph_callout_feedback_title":"分享您的意見反應","cph_highlights_group_aria":"第 {index} 個精選內容（共 {total} 個）","cph_highlights_heading":"精選內容","cph_highlights_next":"下一個","cph_highlights_previous":"上一個","cph_intro_getting_started":"準備開始","cph_intro_guide_instruction":"閱讀「{title}」指南以了解詳情。","cph_intro_guide_learn_more":"了解詳情","cph_loggedin_nochar_body":"我們無法找到與您的帳戶連結的 GTA 線上模式角色。連結或切換至另一個帳戶。","cph_loggedin_nochar_button":"連結遊戲帳戶","cph_loggedin_nochar_title":"連結 GTA 線上模式角色","cph_login_prompt_body":"登入您的帳戶查看所有您能賺取的獎勵、您已獲得的獎章，展望您的可能性。","cph_login_prompt_button":"登入","cph_login_prompt_button_helper":"沒有帳戶？","cph_login_prompt_button_helper_link":"註冊帳戶","cph_login_prompt_title":"登入以追蹤您的進度","cph_nav_close":"關閉區段導覽","cph_nav_open":"開啟區段導覽","cph_nav_scroll_left":"向左捲動","cph_nav_scroll_right":"向右捲動","cph_progress_available_on":"僅限於","cph_progress_available_on_aria_ps5":"PlayStation5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"進度值條","cph_progress_challenges_title":"挑戰","cph_progress_close":"關閉","cph_progress_rewards_title":"獎勵","cph_progress_rewards_view_all":"檢視全部","cph_progress_rewards_view_less":"檢視較少","cph_progress_tracker_tier_label":"第 {number} 級","cph_progress_tracker_title":"生涯進度","cph_reward_claimable":"可領取","cph_reward_claimed":"已領取","cph_reward_how_to_claim":"獎勵已可領取。前往遊戲內的「生涯進度」選單領取。","cph_reward_locked":"獎勵未解鎖","cph_reward_ready_to_claim":"獎勵已可領取","cph_tier_complete":"層級已完成"}}');
      var m = s(58407),
        h = s(94278),
        u = s(49948),
        b = s(27926);
      const f = {
        check: "rockstargames-sites-gta-gen9ab737715525ae389124c666dc2f9a86c",
        bronze: "rockstargames-sites-gta-gen9ff352568fe9fc48fde55d808bd70e6c9",
        silver: "rockstargames-sites-gta-gen9b20155d05445e43199c1d0eecdc66a09",
        gold: "rockstargames-sites-gta-gen9c94f15cc63562c3227552b8b9f57b2cd",
        platinum: "rockstargames-sites-gta-gen9d61f159f71ef073e6883b8a51928597d",
        completed: "rockstargames-sites-gta-gen9cbcaf450f5e45c411a5d39ad47329d8a"
      };
      var R = s(46632);
      const k = e => {
        let {
          alt: a,
          type: s,
          classes: r = ""
        } = e;
        return (0, R.jsx)("div", {
          className: [r, f.check, s ? f[s] : null].join(" "),
          children: (0, R.jsxs)("svg", {
            width: "6",
            height: "4",
            viewBox: "0 0 6 4",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            children: [(0, R.jsx)("title", {
              children: a
            }), (0, R.jsx)("path", {
              d: "M5 0.5L2.25 3.25L1 2",
              strokeWidth: "1",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        })
      };
      var E = s(49276);
      const S = {
          metalLegend: "rockstargames-sites-gta-gen9b5911df9af44c076e0a7a6a493ace2f3",
          single: "rockstargames-sites-gta-gen9fdab6047dff19eac3180eac580974d18",
          completed: "rockstargames-sites-gta-gen9d0b7427e556a1ff2dff00346d267b37a",
          locked: "rockstargames-sites-gta-gen9ac608339ac0b1ccd01de90387330a067"
        },
        v = e => {
          let {
            metals: a,
            currentLevel: s,
            currentLevelComplete: r,
            classes: t = ""
          } = e;
          const {
            formatMessage: o
          } = (0, i.useIntl)();
          return (0, R.jsx)("ul", {
            className: [S.metalLegend, t || "", 1 === a.length ? S.single : ""].join(" "),
            children: a.map(((e, t) => {
              const c = t < a.indexOf(s) || t === a.indexOf(s) && r;
              return (0, R.jsx)("li", {
                "data-unlocked": c,
                children: c ? (0, R.jsx)(k, {
                  alt: o(E.DZ.cph_awards_metal_completed, {
                    metal: o(E.DZ[`cph_awards_${e}`])
                  }),
                  type: e,
                  classes: S.completed
                }) : (0, R.jsx)("div", {
                  className: [S.locked, S[e]].join(" "),
                  "aria-label": o(E.DZ.cph_awards_metal_not_unlocked, {
                    metal: o(E.DZ[`cph_awards_${e}`])
                  })
                })
              }, e)
            }))
          })
        },
        j = {
          pillBtn: "rockstargames-sites-gta-gen9f9a0c65c4470edb68a1e124e0bb27ee2",
          selected: "rockstargames-sites-gta-gen9ef767f5fb1cbcab1aa0943d40cfeab97",
          progressBar: "rockstargames-sites-gta-gen9cca3af743de3c7f052f33f3fcbfedefd",
          bronze: "rockstargames-sites-gta-gen9cfda8a02e3f8d7bf40027cdd78f96ddc",
          silver: "rockstargames-sites-gta-gen9cd5f6686fe1e38015ac578dc0dca4a1f",
          gold: "rockstargames-sites-gta-gen9e1f3077a2adc4e990da65664987e2fcf",
          platinum: "rockstargames-sites-gta-gen9ebf0f8d4aba33cc3a2308f4ae575a966",
          filler: "rockstargames-sites-gta-gen9d7ec89b8b8a02805359eca46f1d9bdcc",
          collapsed: "rockstargames-sites-gta-gen9b2f89346c15a9ea3efd1a53f5055f8c8",
          visuallyHidden: "rockstargames-sites-gta-gen9f77dc7b5e09c8d2c64b36cc8f15a0bb4"
        },
        w = e => {
          let {
            theme: a,
            percentage: s,
            isExpanded: r = !1,
            classes: t = ""
          } = e;
          const o = (0, i.useIntl)();
          return (0, R.jsx)("div", {
            className: `${t} ${[j.progressBar,a&&j[a],r?"":j.collapsed].join(" ")}`,
            role: "progressbar",
            "aria-label": o.formatMessage(E.DZ.cph_progress_bar_aria),
            children: (0, R.jsx)("div", {
              className: [j.filler, a && j[a]].join(" "),
              style: {
                width: `${s}%`
              },
              children: (0, R.jsx)("span", {
                className: j.visuallyHidden,
                children: `${s}%`
              })
            })
          })
        },
        x = (0, i.defineMessages)({
          cph_progres_counter_awards_label: {
            id: "cph_progres_counter_awards_label",
            defaultMessage: "{total, plural, one {{value} out of 1 award completed} other {{value} out of # awards completed}}"
          },
          cph_progres_counter_challenges_label: {
            id: "cph_progres_counter_challenges_label",
            defaultMessage: "{total, plural, one {{value} out of 1 challenge completed} other {{value} out of # challenges completed}}"
          }
        }),
        A = {
          pillBtn: "rockstargames-sites-gta-gen9c792ed8d1de8fd6aab05442901efea2b",
          selected: "rockstargames-sites-gta-gen9d7af6e469c960c39cfdcc0868b5b0185",
          progressCounter: "rockstargames-sites-gta-gen9c22cc73014719206492213cc69b63692",
          slash: "rockstargames-sites-gta-gen9fb90c1fc23c192f9e8f2e999eaf88fd1",
          bronze: "rockstargames-sites-gta-gen9b94b006b8cc445461f27a6cf448908aa",
          silver: "rockstargames-sites-gta-gen9a523d0791c520ba92e0ca3583eca7823",
          gold: "rockstargames-sites-gta-gen9e6df07de0ecd07bb3bdfe03ce48dbb30",
          platinum: "rockstargames-sites-gta-gen9d10c7cd00fee87107e37600d4315fc49",
          light: "rockstargames-sites-gta-gen9ab47fac66c8809c1f183499434716ccb",
          visuallyHidden: "rockstargames-sites-gta-gen9de449424aca8ea7ef65be38196682115"
        };
      let P = function(e) {
        return e[e.Awards = 1] = "Awards", e[e.Challenges = 2] = "Challenges", e
      }({});
      const I = e => {
          let {
            type: a = P.Awards,
            value: s,
            total: r,
            theme: t,
            classes: o
          } = e;
          const c = (0, i.useIntl)();
          let n = null;
          switch (a) {
            case P.Awards:
              n = x.cph_progres_counter_awards_label;
              break;
            case P.Challenges:
              n = x.cph_progres_counter_challenges_label;
              break;
            default:
              n = x.cph_progres_counter_awards_label
          }
          return (0, R.jsxs)("div", {
            className: [A.progressCounter, ...o ? [o] : []].join(" "),
            "data-testid": "progressCounter",
            children: [(0, R.jsx)("span", {
              "aria-hidden": !0,
              children: void 0 === s ? "--" : s
            }), (0, R.jsx)("span", {
              "aria-hidden": !0,
              className: A.slash
            }), (0, R.jsx)("span", {
              "aria-hidden": !0,
              className: t && A[t],
              children: r
            }), (0, R.jsx)("span", {
              className: A.visuallyHidden,
              children: c.formatMessage(n, {
                value: void 0 === s ? 0 : s,
                total: r
              })
            })]
          })
        },
        T = {
          pillBtn: "rockstargames-sites-gta-gen9ae0575384834243e7f2fa00db2391217",
          selected: "rockstargames-sites-gta-gen9c19505e8e7637d5c07945dbc2805c23b",
          award: "rockstargames-sites-gta-gen9e8724a6ebc46db68018e5699ee8b995b",
          completed: "rockstargames-sites-gta-gen9f3635abcda5e8dc0017f4a10459626c7",
          awardName: "rockstargames-sites-gta-gen9e90f39ce0ded561d3a5e20b913ebfe47",
          awardHint: "rockstargames-sites-gta-gen9fda2f962398229d6334fbe11a4693803",
          tooltip: "rockstargames-sites-gta-gen9b275ab2b55c59d5bb91e524711ab73c6",
          fadeItemsIn: "rockstargames-sites-gta-gen9a877de73b9f3b18e555cf6d05949f011",
          hovered: "rockstargames-sites-gta-gen9e3e11771e76a52258eeb55447591cfdf",
          awardInfo: "rockstargames-sites-gta-gen9adcf4df100c0e8ea0256d51cf6dab7ad",
          awardContent: "rockstargames-sites-gta-gen9bb0790b29fc14aa986f06ef69a1a2606",
          metalLegendContainer: "rockstargames-sites-gta-gen9dbe4e8b1e1f5a297cf2495de766c8d17",
          progressBar: "rockstargames-sites-gta-gen9bc0f179921e195f54bb4a24b45a1e072",
          awardDetails: "rockstargames-sites-gta-gen9f3a0794a89f55f25944971ba3909540b",
          awardImage: "rockstargames-sites-gta-gen9ef0aea96f2ed64ee0add9b11dd86625b",
          expanded: "rockstargames-sites-gta-gen9abeb22e22a09875a85445fe4620ffe52",
          tooltipInner: "rockstargames-sites-gta-gen9edd5b917aae098bc18f0a18ef0cccfeb",
          progressCounter: "rockstargames-sites-gta-gen9cfca3fd12e50966085d36ff372bc6ddb"
        },
        C = {
          pillBtn: "rockstargames-sites-gta-gen9dfc6e83d6b88fee37233f7ec6b7e86d8",
          selected: "rockstargames-sites-gta-gen9b79b5fb08ec4fc7feec330a405284fc5",
          title: "rockstargames-sites-gta-gen9c8c3d9e5487b1a5df6cf01ed22d7a62c",
          bonusList: "rockstargames-sites-gta-gen9a747b5e5c38171f89257d3eb5527c1b1",
          platinum: "rockstargames-sites-gta-gen9db6870d07e379b9e95ccb45b26660327",
          check: "rockstargames-sites-gta-gen9e94296b9b53093fd5c37ec0a034e78a8",
          isComplete: "rockstargames-sites-gta-gen9b9627bf33f203224811ff470dd2eca97"
        },
        N = e => {
          let {
            bonuses: a,
            currentLevelComplete: s
          } = e;
          const r = (0, i.useIntl)();
          return (0, R.jsxs)("div", {
            className: C.bonuses,
            children: [(0, R.jsx)("h6", {
              className: C.title,
              children: r.formatMessage(E.DZ.cph_awards_bonuses_title)
            }), (0, R.jsx)("ul", {
              className: C.bonusList,
              children: a.map((e => (0, R.jsxs)("li", {
                children: [(0, R.jsx)(k, {
                  alt: e.title,
                  classes: [C.check, s ? C.isComplete : ""].join(" ")
                }), "TATTOO" === e.type ? r.formatMessage(E.DZ.cph_awards_bonuses_tattoo, {
                  tattooName: e.title
                }) : e.title, (0, R.jsx)("span", {
                  className: C.platinum,
                  children: `(${r.formatMessage(E.DZ.cph_awards_platinum)})`
                })]
              }, e.title)))
            })]
          })
        },
        {
          cdnBase: O
        } = (0, l.getScConfigForOrigin)(),
        y = "bronze",
        G = "platinum",
        W = [y, "silver", "gold", G],
        D = e => {
          let {
            award: a,
            isExpanded: s,
            isMobile: t,
            toggleModal: o,
            classes: c,
            position: n,
            hoverFn: _,
            setHoveredAwardId: i,
            isShowTooltip: l
          } = e;
          const p = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const s = {
                currentLevel: a.length && a.length > 1 ? y : G,
                isComplete: !1,
                levelEnd: a.length > 0 ? a[0] : 1,
                metalLevel: 0,
                percent: 0,
                progress: void 0 === e ? void 0 : Number(e)
              };
              if (void 0 === s.progress || 0 === s.progress) return s;
              if (a.length > 1 && s.progress >= a[a.length - 1] || !a.length && s.progress >= 1) s.isComplete = !0, s.percent = 100, s.levelEnd = a.length ? a[a.length - 1] : 1, s.currentLevel = a.length ? W[a.length - 1] : s.currentLevel, s.progress = s.levelEnd;
              else if (1 === a.length) s.percent = s.progress > 0 ? s.progress / s.levelEnd * 100 : 0, s.isComplete = Boolean(s.progress >= s.levelEnd), s.progress = s.isComplete ? s.levelEnd : s.progress;
              else {
                let e = a.findIndex(((e, r) => {
                  const t = 0 === r ? 0 : r - 1;
                  return void 0 !== s.progress && s.progress >= a[t] && s.progress < e
                }));
                if (e < 0 && (e = 0), e >= 0) {
                  const c = 0 === e ? 0 : e - 1;
                  s.currentLevel = W[e], s.levelEnd = a[e], s.metalLevel = e, s.percent = (r = s.progress, t = c, o = s.levelEnd, Math.floor(100 * (r - t) / (o - t) + 0))
                }
              }
              var r, t, o;
              return s
            }(a.playerProgress, a.levels),
            g = t ? b.motion.button : "li",
            [m, u] = (0, r.useState)(null),
            [f, k] = (0, r.useState)(null),
            [E, S] = (0, r.useState)(null),
            {
              track: j
            } = (0, d.useGtmTrack)(),
            {
              styles: x,
              attributes: A
            } = (0, h.E)(m, f, {
              modifiers: [{
                name: "flip",
                options: {
                  allowedAutoPlacements: ["top"],
                  fallbackPlacements: ["bottom"]
                }
              }],
              placement: "auto"
            });

          function P(e) {
            t || (_(e), i(e ? n : null))
          }(0, r.useEffect)((() => {
            if (!l && E) clearTimeout(E), S(null);
            else if (l && !E) {
              const e = setTimeout((() => {
                j({
                  element_placement: "awards",
                  event: "awards_hover",
                  position: n
                })
              }), 1e3);
              S(e)
            }
          }), [l, E]);
          const C = {
              collapsed: {
                maxHeight: "0",
                opacity: 0,
                overflow: "hidden",
                transition: {
                  damping: 100,
                  duration: .3,
                  ease: "easeIn",
                  stiffness: 1e3
                }
              },
              expanded: {
                maxHeight: "5rem",
                opacity: 1,
                transition: {
                  damping: 100,
                  duration: .3,
                  ease: "easeInOut",
                  stiffness: 1e3
                }
              }
            },
            D = (0, r.useRef)(null);
          return (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsxs)(g, {
              ..."li" !== g && {
                layout: "position"
              },
              className: [T.award, ...p.isComplete ? [T.completed] : [], ...s ? [T.expanded] : [], ...l ? [T.hovered] : [], ...c ? [c] : []].join(" "),
              ref: t ? D : u,
              tabIndex: 0,
              ...t && !s && {
                onClick: () => {
                  o(), j({
                    element_placement: "awards",
                    event: "awards_click",
                    position: n
                  })
                }
              },
              ...t && s && {
                disabled: !0
              },
              ...!t && {
                onBlur: () => P(!1),
                onFocus: () => P(!0),
                onMouseOut: () => P(!1),
                onMouseOver: () => P(!0)
              },
              "data-testid": "award",
              "aria-describedby": !t && l ? `tooltip-${a.imageName}` : null,
              role: "button",
              children: [(0, R.jsxs)(b.motion.div, {
                className: T.awardContent,
                children: [(0, R.jsxs)("div", {
                  className: T.awardInfo,
                  children: [(0, R.jsx)(b.motion.div, {
                    className: T.awardImage,
                    layout: "position",
                    children: (0, R.jsx)(b.motion.img, {
                      src: `${O}/images/games/GTAV/multiplayer/award/${p.currentLevel}/${a.imageName}.png`,
                      alt: a.name,
                      layout: "position"
                    })
                  }), (0, R.jsxs)(b.motion.div, {
                    className: T.awardDetails,
                    layout: !0,
                    children: [(0, R.jsx)("h3", {
                      className: T.awardName,
                      children: a.name
                    }), t && (0, R.jsx)(b.motion.div, {
                      className: T.awardHint,
                      initial: "collapsed",
                      variants: C,
                      animate: s ? "expanded" : "collapsed",
                      children: a.hint
                    }), (0, R.jsx)(I, {
                      theme: p.currentLevel,
                      value: p.progress,
                      total: p.levelEnd,
                      classes: T.progressCounter
                    }), a.bonuses && t && (0, R.jsx)(b.motion.div, {
                      initial: "collapsed",
                      variants: C,
                      animate: s ? "expanded" : "collapsed",
                      children: (0, R.jsx)(N, {
                        currentLevelComplete: p.isComplete,
                        bonuses: a.bonuses
                      })
                    })]
                  })]
                }), !p.isComplete && (0, R.jsx)(w, {
                  theme: p.currentLevel,
                  percentage: p.percent,
                  isExpanded: s,
                  classes: T.progressBar
                })]
              }), (0, R.jsx)("div", {
                className: T.metalLegendContainer,
                children: (0, R.jsx)(v, {
                  metals: a.levels && a.levels.length > 1 ? W : [G],
                  currentLevel: p.currentLevel,
                  currentLevelComplete: p.isComplete,
                  classes: T.metalLegend
                })
              })]
            }), !t && (0, R.jsx)("div", {
              id: `tooltip-${a.imageName}`,
              role: "tooltip",
              className: T.tooltip,
              style: x.popper,
              ref: k,
              ...A,
              children: (0, R.jsxs)("div", {
                className: T.tooltipInner,
                children: [a.hint, a.bonuses && (0, R.jsx)(N, {
                  currentLevelComplete: p.isComplete,
                  bonuses: a.bonuses
                })]
              })
            })]
          })
        },
        z = {
          pillBtn: "rockstargames-sites-gta-gen9c9f51b658e9124308696f7ef2936b453",
          selected: "rockstargames-sites-gta-gen9cd6090ca20a7b8ec38e9b46ef18b4ac5",
          awardsOuter: "rockstargames-sites-gta-gen9e2cf40a54851b977f4a5060b5e140fa0",
          isClosing: "rockstargames-sites-gta-gen9c48efbffa3c71fc4fde373b337eee6e5",
          isOpen: "rockstargames-sites-gta-gen9a75a511f518402b77f6d999027ebea98",
          awardsContainer: "rockstargames-sites-gta-gen9e4c5d1c20cc4ca9daafca9384b488c3a",
          awardCategoryName: "rockstargames-sites-gta-gen9ee2468f6b4124c71112780871440389f",
          modalOpen: "rockstargames-sites-gta-gen9dff766e4158a37455cd9f4f5b06e1e5e",
          categoryWrapper: "rockstargames-sites-gta-gen9aca907780bac9255f9c41fdf7103ebf3",
          awardsCategoryOpen: "rockstargames-sites-gta-gen9fb948d299af77872e3a6503818736d33",
          awardCategoryContainer: "rockstargames-sites-gta-gen9cd15de14ce9e6b655db16f04817f2065",
          awardCategory: "rockstargames-sites-gta-gen9ed58291fddd870dbf57e16f04324ed85",
          award: "rockstargames-sites-gta-gen9faacdbbf9e0ca617c9bd82f1fe84f8bc",
          fadeIn: "rockstargames-sites-gta-gen9ae22d8d309ba51fd9f748c09f6f17b45",
          peek: "rockstargames-sites-gta-gen9cdc7bfeb621a7fdc42503a42910c0073",
          awardCount: "rockstargames-sites-gta-gen9d6c74ff9ecc6967a6c8536ec7d49e855",
          expanded: "rockstargames-sites-gta-gen9f67db1b5b4833066796989db3f3b2143",
          fadeInAwards: "rockstargames-sites-gta-gen9c2e68ceed61c18065dab765e13a22685",
          slideBtnIn: "rockstargames-sites-gta-gen9f21f833ce65ac4c3f1ea3a3572f49131",
          hovered: "rockstargames-sites-gta-gen9cad4cc822e082fb2402f763a18471f17",
          isClosed: "rockstargames-sites-gta-gen9e60faec416863c6f2b8eac74d4386c98",
          fadeOutAwards: "rockstargames-sites-gta-gen9d32e934379061b92f46677b6bebe8c86",
          awardsCategoryClose: "rockstargames-sites-gta-gen9d1eebfcfc6928c87461e98c61b954d46",
          showLess: "rockstargames-sites-gta-gen9c10783ea554c3a3eff4b191ea00b2ec3",
          showMore: "rockstargames-sites-gta-gen9cbcf5d330d1d6a2847fc73939c5e0537",
          awardsTitle: "rockstargames-sites-gta-gen9ede4068469893ad383b5576b657fcd2d",
          rpInfo: "rockstargames-sites-gta-gen9b58772c6e465e53bdaeb081f3ad481c9",
          rpBronze: "rockstargames-sites-gta-gen9b8c5ecc2086c4cc40cbf2dc6cf0cfba7",
          rpSilver: "rockstargames-sites-gta-gen9fc46f0923917d7820dcc1e35c815c928",
          rpGold: "rockstargames-sites-gta-gen9fd50081f092416b71f1229a674e9eea6",
          rpPlatinum: "rockstargames-sites-gta-gen9fd3b807db04cbe393caa7b648a650fe7",
          rpGrid: "rockstargames-sites-gta-gen9b9b6aee0f3b8716503971a064f865713",
          rpLevel: "rockstargames-sites-gta-gen9e11bf597ed35f141f011bf638e36f1a2",
          tooltip: "rockstargames-sites-gta-gen9bd13bcd5d8766f68755b29cdc09fe376",
          tooltipInner: "rockstargames-sites-gta-gen9c531d34e783da35356b65f081ecb9931",
          tooltipIcon: "rockstargames-sites-gta-gen9d2405d096f21f72c5053d3febdf57141"
        },
        V = [{
          max: 767,
          min: 0,
          peek: 1,
          show: 6
        }, {
          max: 1279,
          min: 767,
          peek: 2,
          show: 8
        }, {
          max: 1919,
          min: 1280,
          peek: 3,
          show: 12
        }, {
          max: 0,
          min: 1920,
          peek: 4,
          show: 16
        }],
        L = () => {
          const {
            isMobile: e,
            windowWidth: a
          } = (0, l.useWindowResize)(), {
            state: t
          } = (0, E.Yy)(), {
            awardsKey: o
          } = t, [c, n] = (0, r.useState)([]), _ = (0, m.useRockstarTokenPing)(), {
            loggedIn: p
          } = (0, d.useRockstarUser)(), {
            selectedCharacterTuple: g
          } = (0, d.useRockstarUserState)(), f = c ? function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              a = 0;
            return e && e.forEach((e => {
              const s = e.levels ? Number(e.levels[e.levels.length - 1]) : 1;
              e.playerProgress && e.playerProgress >= s && (a += 1)
            })), a
          }(c) : 0, [k, S] = (0, r.useState)(!1), [v, j] = (0, r.useState)(!1), [w, x] = (0, r.useState)(!1), {
            setBodyIsLocked: A
          } = (0, l.useBodyScrollable)("Awards"), {
            track: P
          } = (0, d.useGtmTrack)(), [T, C] = (0, r.useState)(12), [N, O] = (0, r.useState)(4), y = (0, r.useRef)(null), G = (0, r.useRef)(null), [W, L] = (0, r.useState)(!1), {
            ref: M,
            inView: B
          } = (0, u.useInView)({
            threshold: .6
          }), [H, U] = (0, r.useState)(null), [Z, F] = (0, r.useState)(null), [$, X] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            V.forEach((e => {
              a > e.min && a < e.max && (C(e.show), O(e.peek))
            }))
          }), [a]), (0, r.useEffect)((() => {
            k && !e ? A(!1) : k && e && S(!1)
          }), [e]), (0, r.useEffect)((() => {
            B && !W && (P({
              element_placement: "awards",
              event: "page_section_impression"
            }), L(!0))
          }), [B]);
          const Y = (0, r.useCallback)((() => {
            const a = y?.current;
            e && A(!k), a && (k || P({
              element_placement: "awards",
              event: "view_all",
              text: "awards"
            })), k && (j(!0), P({
              element_placement: "awards",
              event: "nav_back",
              text: "awards"
            }), e || window.scrollTo({
              behavior: "smooth",
              left: 0,
              top: a?.offsetTop
            })), setTimeout((() => {
              j(!1)
            }), 400), S(!k)
          }), [k, y?.current, e]);
          (0, r.useEffect)((() => {
            (async () => {
              if (null === p || null === g || !o) return;
              let e = {};
              if (p && !1 !== g) {
                const [a, s] = g;
                e = {
                  platform: a,
                  slot: s
                }
              }
              const a = await async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const {
                  error: a = null,
                  result: s
                } = await (0, l.coreScApiFetch)("games/gtao/awards", {
                  pingBearer: _,
                  useCache: !0,
                  ...p ? {} : {
                    requireBearerToken: !1
                  },
                  query: e
                });
                if (a) throw Object.assign(new Error(""), a);
                return s?.categories ?? null
              }(e), s = function(e, a) {
                const s = [];
                return a.forEach((a => {
                  a.awards.forEach((a => {
                    a?.sections?.indexOf(e) >= 0 && s.push(a)
                  }))
                })), s
              }(o, a);
              n(s)
            })()
          }), [o, p, g]);
          const {
            styles: q,
            attributes: K,
            update: J
          } = (0, h.E)(H, Z, {
            placement: "bottom-end"
          });
          if (!o || !c.length) return null;
          const Q = e ? "div" : "ul",
            ee = e ? b.motion.div : "div",
            ae = e ? {
              layout: !0
            } : {};
          return (0, R.jsx)("div", {
            className: z.awardsOuter,
            ref: M,
            children: (0, R.jsxs)(ee, {
              "data-open": k && e,
              transition: {
                damping: 100,
                duration: .2,
                ease: "easeInOut",
                stiffness: 1e3
              },
              className: [z.awardsContainer, k && e ? z.modalOpen : "", k && !e ? z.expanded : "", !k && v ? z.isClosed : "", w && !e ? z.hovered : ""].join(" "),
              ref: y,
              ...ae,
              children: [(0, R.jsxs)(b.motion.div, {
                className: z.awardCategoryContainer,
                layout: !0,
                children: [(0, R.jsxs)(b.motion.div, {
                  className: z.awardsTitle,
                  children: [(0, R.jsxs)("h2", {
                    className: z.awardCategoryName,
                    children: [k && e && (0, R.jsx)(b.motion.button, {
                      type: "button",
                      onClick: () => Y(),
                      layout: !0,
                      variants: {
                        closed: {
                          opacity: 0,
                          transition: {
                            damping: 100,
                            duration: .5,
                            ease: "easeInOut",
                            stiffness: 1e3
                          },
                          x: -30
                        },
                        open: {
                          opacity: 1,
                          transition: {
                            damping: 100,
                            delay: 0,
                            duration: .5,
                            ease: "easeInOut",
                            stiffness: 1e3
                          },
                          x: 0
                        }
                      },
                      initial: "closed",
                      animate: k && e ? "open" : "closed",
                      children: (0, R.jsx)(b.motion.img, {
                        src: s(88447),
                        alt: "Back"
                      })
                    }), (0, R.jsx)(i.FormattedMessage, {
                      ...E.DZ.cph_awards_title
                    })]
                  }), (0, R.jsxs)("div", {
                    className: z.rpInfo,
                    children: [(0, R.jsx)("button", {
                      className: z.tooltipIcon,
                      ref: U,
                      type: "button",
                      ...J && {
                        onFocus: J,
                        onMouseOver: J
                      },
                      "aria-describedby": "awards-info"
                    }), (0, R.jsx)("div", {
                      id: "awards-info",
                      role: "tooltip",
                      className: z.tooltip,
                      style: q.popper,
                      ref: F,
                      ...K,
                      children: (0, R.jsxs)("div", {
                        className: z.tooltipInner,
                        children: [(0, R.jsx)(i.FormattedMessage, {
                          ...E.DZ.cph_awards_rp_bonus_info
                        }), (0, R.jsxs)("div", {
                          className: z.rpGrid,
                          children: [(0, R.jsx)("div", {
                            className: z.rpGridItem,
                            children: (0, R.jsx)("span", {
                              className: [z.rpBronze, z.rpLevel].join(" "),
                              children: (0, R.jsx)(i.FormattedMessage, {
                                ...E.DZ.cph_awards_bronze
                              })
                            })
                          }), (0, R.jsx)("div", {
                            className: z.rpGridItem,
                            children: "+100 RP"
                          }), (0, R.jsx)("div", {
                            className: z.rpGridItem,
                            children: (0, R.jsx)("span", {
                              className: [z.rpSilver, z.rpLevel].join(" "),
                              children: (0, R.jsx)(i.FormattedMessage, {
                                ...E.DZ.cph_awards_silver
                              })
                            })
                          }), (0, R.jsx)("div", {
                            className: z.rpGridItem,
                            children: "+200 RP"
                          }), (0, R.jsx)("div", {
                            className: z.rpGridItem,
                            children: (0, R.jsx)("span", {
                              className: [z.rpGold, z.rpLevel].join(" "),
                              children: (0, R.jsx)(i.FormattedMessage, {
                                ...E.DZ.cph_awards_gold
                              })
                            })
                          }), (0, R.jsx)("div", {
                            className: z.rpGridItem,
                            children: "+400 RP"
                          }), (0, R.jsx)("div", {
                            className: z.rpGridItem,
                            children: (0, R.jsx)("span", {
                              className: [z.rpPlatinum, z.rpLevel].join(" "),
                              children: (0, R.jsx)(i.FormattedMessage, {
                                ...E.DZ.cph_awards_platinum
                              })
                            })
                          }), (0, R.jsx)("div", {
                            className: z.rpGridItem,
                            children: "+800 RP"
                          })]
                        })]
                      })
                    })]
                  })]
                }), (0, R.jsx)("span", {
                  children: (0, R.jsx)(I, {
                    value: f,
                    total: c.length,
                    theme: "platinum",
                    classes: z.awardCount
                  })
                })]
              }), (0, R.jsxs)(ee, {
                className: z.categoryWrapper,
                children: [(0, R.jsx)(Q, {
                  className: z.awardCategory,
                  ref: G,
                  children: c.map(((a, s) => (0, R.jsx)(D, {
                    position: s,
                    award: a,
                    isExpanded: e && k,
                    isMobile: e,
                    toggleModal: e && Y,
                    hoverFn: x,
                    setHoveredAwardId: X,
                    isShowTooltip: s === $,
                    classes: [z.award, s >= T + N ? z.fadeIn : "", s >= T && s < T + N ? z.peek : ""].join(" ")
                  }, a.imageName)))
                }), c.length > T && (0, R.jsx)("div", {
                  className: k ? z.showLess : z.showMore,
                  children: (0, R.jsx)("button", {
                    type: "button",
                    onClick: () => Y(),
                    children: k ? (0, R.jsx)(i.FormattedMessage, {
                      ...E.DZ.cph_progress_rewards_view_less
                    }) : (0, R.jsx)(i.FormattedMessage, {
                      ...E.DZ.cph_progress_rewards_view_all
                    })
                  })
                })]
              })]
            })
          })
        };
      var M, B;

      function H() {
        return H = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, H.apply(this, arguments)
      }
      const U = e => r.createElement("svg", H({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 96 21"
      }, e), M || (M = r.createElement("g", {
        fill: "#fff",
        clipPath: "url(#ps5_svg__a)"
      }, r.createElement("path", {
        d: "M10.017 0v19.278l4.361 1.392V4.488c0-.749.337-1.265.883-1.093.748.202.853.898.853 1.654v6.47c2.723 1.31 4.862 0 4.862-3.47 0-3.472-1.257-5.132-4.952-6.404A52.984 52.984 0 0 0 10.017 0Z"
      }), r.createElement("path", {
        d: "m15.208 17.85 7.017-2.5c.793-.291.92-.695.27-.904a4.773 4.773 0 0 0-2.611.134l-4.676 1.646v-2.618l.27-.09a15.875 15.875 0 0 1 3.224-.688 13.81 13.81 0 0 1 6.052.748c2.064.65 2.289 1.608 1.773 2.244a4.982 4.982 0 0 1-1.81 1.137l-9.509 3.419v-2.529ZM2.012 17.58c-2.117-.591-2.469-1.833-1.496-2.544a10.475 10.475 0 0 1 2.401-1.16l6.254-2.244v2.581l-4.488 1.609c-.793.291-.92.695-.27.905.866.199 1.77.152 2.611-.135l2.162-.748v2.244l-.434.075a14.154 14.154 0 0 1-6.733-.546M61.59 17.655a3.433 3.433 0 0 0 3.426-3.441V8.319a2.072 2.072 0 0 1 2.072-2.065h6.65a.09.09 0 0 0 .09-.09V4.982a.09.09 0 0 0-.09-.09h-8.02a3.426 3.426 0 0 0-3.425 3.427v5.895a2.072 2.072 0 0 1-2.073 2.072h-6.56a.09.09 0 0 0-.09.09v1.182a.098.098 0 0 0 .09.09l7.93.007ZM76.573 9.725V4.982a.09.09 0 0 1 .09-.09h18.119a.09.09 0 0 1 .097.09v1.182a.09.09 0 0 1-.097.09H79.394a.09.09 0 0 0-.098.09V9.41a.987.987 0 0 0 .988.98h11.46a3.636 3.636 0 0 1 0 7.264h-15.08a.097.097 0 0 1-.09-.09v-1.182a.09.09 0 0 1 .09-.09h13.712a2.27 2.27 0 1 0 0-4.54h-11.73a2.072 2.072 0 0 1-2.073-2.028ZM49.672 10.39a2.072 2.072 0 0 0 0-4.136H35.773a.09.09 0 0 1-.097-.09V4.982a.09.09 0 0 1 .097-.09h15.261a3.434 3.434 0 0 1 0 6.86H40.471a2.065 2.065 0 0 0-2.065 2.065v3.74a.097.097 0 0 1-.09.09h-2.543a.097.097 0 0 1-.097-.09v-3.74a3.434 3.434 0 0 1 3.433-3.426h10.563Z"
      }))), B || (B = r.createElement("defs", null, r.createElement("clipPath", {
        id: "ps5_svg__a"
      }, r.createElement("path", {
        fill: "#fff",
        d: "M0 0h95.755v20.946H0z"
      })))));
      var Z, F;

      function $() {
        return $ = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, $.apply(this, arguments)
      }
      const X = e => r.createElement("svg", $({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 160 20"
        }, e), Z || (Z = r.createElement("g", {
          clipPath: "url(#xboxseriesxs_svg__a)"
        }, r.createElement("path", {
          fill: "#fff",
          d: "M10.17 8.02a.063.063 0 0 1 .034.017c3.041 2.274 8.249 7.901 6.661 9.49A10.272 10.272 0 0 1 10.17 20c-2.463 0-4.842-.878-6.696-2.472-1.587-1.59 3.62-7.217 6.661-9.491a.067.067 0 0 1 .035-.017Zm5.299-6.556C13.91.556 12.223 0 10.17 0 8.118 0 6.43.556 4.872 1.463a.038.038 0 0 0-.017.05.04.04 0 0 0 .05.017c1.969-.418 4.96 1.254 5.244 1.422a.034.034 0 0 0 .043 0c.282-.167 3.277-1.84 5.244-1.422a.04.04 0 0 0 .05-.017.038.038 0 0 0-.018-.05v.001ZM3.05 2.87a.178.178 0 0 0-.045.034A9.925 9.925 0 0 0 .024 9.31a9.88 9.88 0 0 0 2.056 6.75c.005.008.014.015.025.018.01.003.022.002.031-.003a.04.04 0 0 0 .012-.051C1.37 13.667 5.334 7.953 7.38 5.556a.046.046 0 0 0 .015-.03.043.043 0 0 0-.018-.033C4.275 2.461 3.221 2.783 3.051 2.87Zm9.912 2.625a.043.043 0 0 0-.018.034.045.045 0 0 0 .014.029c2.047 2.395 6.011 8.11 5.235 10.466a.04.04 0 0 0 .01.051.044.044 0 0 0 .057-.016 9.88 9.88 0 0 0 2.056-6.749 9.925 9.925 0 0 0-2.982-6.406.178.178 0 0 0-.045-.034c-.17-.086-1.225-.408-4.327 2.625Zm22.431 10.667h-2.082l-3.582-4.848-3.582 4.848H24.07l4.623-6.256-4.263-5.766h2.081l3.22 4.357 3.221-4.357h2.08L30.77 9.904l4.623 6.257Zm10.802-3.418c0 1.055-.356 1.898-1.059 2.505-.703.606-1.723.913-3.033.913H36.37v-5.354h-2.724l1.133-1.534h1.59V4.14h5.493c1.232 0 2.19.29 2.846.863.656.573.99 1.337.99 2.27 0 1.155-.533 2.032-1.582 2.605.678.259 1.2.638 1.547 1.13.357.51.542 1.116.531 1.735h.001Zm-7.958-3.47h3.503c.706 0 1.243-.155 1.594-.462.35-.308.529-.774.529-1.39 0-.53-.186-.95-.55-1.249-.366-.298-.893-.45-1.57-.45H38.24l-.002 3.551Zm6.073 3.435c0-.63-.194-1.11-.576-1.426-.382-.315-.966-.475-1.735-.475h-3.762v3.77H42c.746 0 1.324-.164 1.718-.485.395-.322.593-.786.593-1.384Zm14.443-2.559c0 .93-.137 1.783-.408 2.535a5.748 5.748 0 0 1-1.222 2.005 5.377 5.377 0 0 1-1.907 1.305c-.718.289-1.533.435-2.421.435-.9 0-1.72-.146-2.438-.435a5.217 5.217 0 0 1-1.89-1.304 5.663 5.663 0 0 1-1.236-1.997c-.273-.753-.412-1.61-.412-2.544 0-.932.139-1.783.412-2.539a5.819 5.819 0 0 1 1.236-2.017 5.213 5.213 0 0 1 1.89-1.292c.718-.286 1.538-.431 2.438-.431.888 0 1.703.145 2.42.43.724.29 1.375.73 1.907 1.292a5.837 5.837 0 0 1 1.223 2.02c.27.754.408 1.61.408 2.537Zm-10 0c0 1.415.372 2.55 1.108 3.373.724.833 1.71 1.256 2.931 1.256 1.222 0 2.208-.423 2.93-1.256.725-.813 1.092-1.945 1.092-3.373 0-1.427-.367-2.565-1.091-3.388-.735-.823-1.721-1.24-2.931-1.24s-2.197.417-2.932 1.24c-.732.845-1.105 1.986-1.105 3.388h-.003Zm15.896-.245 4.26-5.765h-2.08l-3.22 4.357-3.22-4.357h-2.08l4.26 5.765-4.622 6.256h2.081l3.583-4.848 3.581 4.848h2.082l-4.626-6.256Zm20.17-4.111v3.483h6.074v1.533h-6.07v3.702h6.866v1.651h-8.733V4.14h8.733V5.79l-6.87.002Zm-4.293 4.8c-.61-.55-1.624-.975-3.013-1.266l-1.062-.22c-1.008-.21-1.708-.47-2.081-.77-.37-.278-.558-.69-.558-1.232 0-.53.21-.944.626-1.232.415-.287 1.03-.434 1.821-.434 1.017 0 1.766.183 2.224.543.457.36.715.93.772 1.696v.017h1.85v-.018c-.024-1.178-.443-2.117-1.248-2.79-.806-.675-2.02-1.015-3.617-1.015-1.321 0-2.385.299-3.16.89-.775.59-1.172 1.388-1.172 2.378 0 .99.325 1.774.965 2.336.64.562 1.598.97 2.85 1.216l1.045.22c1.03.221 1.751.479 2.15.762.399.284.592.687.592 1.207 0 .641-.243 1.138-.72 1.475-.478.337-1.176.51-2.07.51-1.08 0-1.906-.225-2.454-.667-.548-.44-.832-1.118-.848-2.006v-.026h-1.867v.017c.012 1.38.472 2.445 1.368 3.162.896.716 2.163 1.081 3.769 1.081 1.48 0 2.656-.324 3.495-.963s1.265-1.528 1.265-2.64c0-.93-.31-1.682-.921-2.233l-.001.002Zm22.396 4.085-.12-1.867c-.023-.663-.173-1.201-.448-1.6-.267-.39-.689-.67-1.255-.841.624-.205 1.119-.556 1.469-1.041.359-.5.543-1.124.543-1.854 0-1.033-.38-1.856-1.13-2.444-.751-.589-1.785-.89-3.085-.89h-5.342V16.16h1.868v-4.932h3.525c.7 0 1.214.16 1.526.474.312.315.492.864.526 1.63l.051 1.277c.012.697.134 1.215.363 1.542l.005.008h1.921l-.015-.027c-.209-.354-.345-.844-.401-1.456l-.001.002Zm-7.497-8.956h3.371c.769 0 1.367.164 1.778.485.412.32.62.803.62 1.434 0 .654-.202 1.167-.602 1.519-.399.352-.96.534-1.657.534h-3.509l-.001-3.972ZM104.8 16.16h1.868V4.139H104.8V16.16Zm12.468-10.37V4.14h-8.733V16.16h8.733v-1.652h-6.863v-3.701h6.073V9.273h-6.073V5.791h6.863Zm9.953 4.801c-.61-.55-1.624-.975-3.013-1.267l-1.061-.218c-1.008-.212-1.709-.472-2.082-.772-.37-.277-.558-.69-.558-1.231 0-.53.211-.945.626-1.232.415-.287 1.03-.434 1.821-.434 1.018 0 1.767.182 2.224.543.457.36.716.93.772 1.696v.017h1.849v-.019c-.023-1.177-.443-2.116-1.248-2.79-.804-.674-2.021-1.014-3.616-1.014-1.322 0-2.385.298-3.161.889-.776.59-1.171 1.389-1.171 2.379s.325 1.774.965 2.336c.64.562 1.597.97 2.85 1.216l1.044.219c1.032.222 1.755.48 2.15.763.396.284.592.687.592 1.206 0 .642-.242 1.139-.72 1.476-.478.337-1.176.51-2.07.51-1.08 0-1.905-.226-2.453-.667-.549-.44-.833-1.118-.848-2.006v-.024h-1.867v.017c.011 1.38.471 2.445 1.368 3.162.896.716 2.162 1.081 3.769 1.081 1.481 0 2.655-.324 3.494-.963.839-.639 1.266-1.528 1.266-2.64 0-.93-.31-1.682-.922-2.233Zm19.884-7.954h-.934v15.025h.933l.001-15.025Zm-8.55 7.267 4.259-5.765h-2.081l-3.22 4.357-3.221-4.357h-2.077l4.26 5.765-4.623 6.256h2.081l3.582-4.848 3.582 4.848h2.079l-4.621-6.256Zm20.523.687c-.61-.55-1.623-.975-3.013-1.267l-1.061-.218c-1.008-.212-1.709-.472-2.081-.772-.371-.277-.559-.69-.559-1.231 0-.53.211-.945.626-1.232.416-.287 1.03-.434 1.822-.434 1.017 0 1.766.182 2.223.543.456.36.718.93.775 1.696v.017h1.85v-.019c-.023-1.177-.443-2.116-1.248-2.79-.805-.674-2.02-1.014-3.616-1.014-1.322 0-2.385.298-3.161.889-.776.59-1.171 1.389-1.171 2.379s.324 1.774.965 2.336c.64.562 1.597.97 2.85 1.216l1.044.219c1.031.222 1.755.48 2.15.763.396.284.592.687.592 1.206 0 .642-.242 1.139-.72 1.476-.478.337-1.176.51-2.07.51-1.08 0-1.906-.226-2.454-.667-.547-.44-.832-1.118-.847-2.006v-.024h-1.871v.017c.011 1.38.471 2.445 1.367 3.162.897.716 2.164 1.081 3.77 1.081 1.481 0 2.655-.324 3.495-.963.84-.639 1.265-1.528 1.265-2.64 0-.93-.31-1.682-.922-2.233Z"
        }))), F || (F = r.createElement("defs", null, r.createElement("clipPath", {
          id: "xboxseriesxs_svg__a"
        }, r.createElement("path", {
          fill: "#fff",
          d: "M0 0h160v20H0z"
        }))))),
        Y = {
          pillBtn: "rockstargames-sites-gta-gen9b1d1f214b9615459acdb457186353fe8",
          selected: "rockstargames-sites-gta-gen9c6684cb38fc4f242619672c95292cdac",
          challenge: "rockstargames-sites-gta-gen9b48a674df6c00962fe163fda3e96fc13",
          content: "rockstargames-sites-gta-gen9b25368d6f60a1c9ed06dcb3471330f12",
          title: "rockstargames-sites-gta-gen9dee6427e0848bd659798ffea110a008b",
          isComplete: "rockstargames-sites-gta-gen9f3fe94bf0cd92cc301ef315727cfcc42",
          progressCounter: "rockstargames-sites-gta-gen9fc4a387a44cbcd0669d529ea93a982f9",
          challengeInfo: "rockstargames-sites-gta-gen9d71a219b1e4066d70d95478a8b0d8b7f",
          status: "rockstargames-sites-gta-gen9c95cd36c1ae99a5b48c4478737f478fa",
          check: "rockstargames-sites-gta-gen9d7339eb04fcb10aaa5fb60a6899c9830",
          lock: "rockstargames-sites-gta-gen9e9a5dd84148f75aa7b4c11d285bd41aa",
          progressCounterContainer: "rockstargames-sites-gta-gen9e61f62cac61d9e2a8e052368fefbdc73",
          chevron: "rockstargames-sites-gta-gen9f42bcd8153a65c021d55569f7d5ebead",
          taskList: "rockstargames-sites-gta-gen9a298e31ae17563ffb35b743aa70ffbe4",
          task: "rockstargames-sites-gta-gen9f806d16b858c98ff6cd3bc5b43b4299b",
          taskComplete: "rockstargames-sites-gta-gen9a774bbdb0e5db3a72581e0d91ae1a550",
          open: "rockstargames-sites-gta-gen9cbcca9f52a7426dcdb2d5bc463fcad3d",
          progressBar: "rockstargames-sites-gta-gen9f3798730608647e53a8cedb07739d861"
        },
        q = {
          pillBtn: "rockstargames-sites-gta-gen9cfa3d71674ad5dc896a254c8b89899e2",
          selected: "rockstargames-sites-gta-gen9ca8a805f42effa7e690e06b77734fcfe",
          lock: "rockstargames-sites-gta-gen9ad488688960127b9a83c6b51245ef58c"
        },
        K = e => {
          let {
            alt: a,
            classes: s = ""
          } = e;
          return (0, R.jsx)("div", {
            className: [s, q.lock].join(" "),
            children: (0, R.jsxs)("svg", {
              width: "22",
              height: "27",
              viewBox: "0 0 22 27",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [(0, R.jsx)("title", {
                children: a
              }), (0, R.jsx)("path", {
                opacity: "0.9",
                d: "M20.6592 11.328H18.6515V7.62973C18.6176 3.4098 15.2065 0 11.0017 0C6.79679 0 3.38574 3.41105 3.35313 7.62973V11.328H1.34287C0.620527 11.328 0.0361328 11.9136 0.0361328 12.6347V25.6933C0.0361328 26.4156 0.621781 27 1.34287 27H20.658C21.3803 27 21.9647 26.4144 21.9647 25.6933V12.6347C21.9647 11.9124 21.379 11.328 20.658 11.328H20.6592ZM5.98541 7.62973C6.00924 4.86451 8.24524 2.62977 11.0004 2.62977C13.7556 2.62977 15.9928 4.86451 16.0154 7.62973V11.328H5.98541V7.62973ZM12.5881 20.0199V22.054C12.5881 22.9356 11.8732 23.6504 10.9916 23.6504C10.11 23.6504 9.39521 22.9356 9.39521 22.054V20.0073C8.60515 19.4856 8.08472 18.5902 8.08472 17.5732C8.08472 15.9617 9.3902 14.6562 11.0017 14.6562C12.6131 14.6562 13.9186 15.9617 13.9186 17.5732C13.9186 18.599 13.3894 19.4994 12.5881 20.0199Z",
                fill: "white",
                fillOpacity: "0.4"
              })]
            })
          })
        },
        J = e => {
          let {
            challenge: a,
            isLocked: s,
            isOpen: r,
            onClick: t,
            activeTier: o,
            showUserProgress: c
          } = e;
          const {
            hint: n,
            playerProgress: _,
            totalProgress: i,
            tasks: l
          } = a;
          let p = "div";
          const {
            track: g
          } = (0, d.useGtmTrack)(), m = _ >= i, h = o + 1;
          return p = l?.length ? b.motion.button : b.motion.div, (0, R.jsxs)(p, {
            className: [Y.challenge, m && !s ? Y.isComplete : "", r ? Y.open : Y.closed].join(" "),
            onClick: () => {
              t(), g({
                event: r ? "cta_collapse" : "cta_expand",
                text: n,
                element_placement: `Tier ${h} - Subchallenge`
              })
            },
            children: [(0, R.jsxs)("div", {
              className: Y.challengeInfo,
              children: [c && (0, R.jsx)("div", {
                className: Y.status,
                children: s ? (0, R.jsx)(K, {
                  alt: "Locked",
                  classes: Y.lock
                }) : (0, R.jsx)(k, {
                  alt: m ? "Completed" : "In Progress",
                  classes: [Y.check, m ? Y.isComplete : ""].join(" ")
                })
              }), (0, R.jsxs)("div", {
                className: Y.content,
                children: [(0, R.jsx)("h4", {
                  className: Y.title,
                  children: n
                }), (0, R.jsxs)("div", {
                  className: Y.progressCounterContainer,
                  children: [(0, R.jsx)(I, {
                    theme: "light",
                    value: c ? _ : void 0,
                    total: i,
                    classes: Y.progressCounter,
                    type: P.Challenges
                  }), l?.length && (0, R.jsx)("div", {
                    className: [Y.chevron, Y.expandedChevron].join(" ")
                  })]
                }), l?.length && (0, R.jsx)(b.motion.ul, {
                  className: Y.taskList,
                  animate: r ? "open" : "closed",
                  variants: {
                    open: {
                      opacity: 1,
                      height: "auto",
                      paddingTop: "var(--padding-sm)"
                    },
                    closed: {
                      opacity: 0,
                      height: 0
                    }
                  },
                  transition: {
                    duration: .2
                  },
                  children: l.map((e => (0, R.jsxs)("li", {
                    className: Y.task,
                    children: [(0, R.jsx)("div", {
                      className: Y.status,
                      children: (0, R.jsx)(k, {
                        alt: e.isComplete ? "Completed" : "In Progress",
                        classes: [Y.check, e.isComplete ? Y.isComplete : ""].join(" ")
                      })
                    }), (0, R.jsx)("p", {
                      className: e.isComplete ? Y.taskComplete : "",
                      children: e.hint
                    })]
                  }, e.hint)))
                })]
              })]
            }), !m && !s && c && (0, R.jsx)(w, {
              percentage: _ / i * 100,
              classes: Y.progressBar
            })]
          })
        };
      var Q = s(81902),
        ee = s(64205),
        ae = s(89269);
      const se = {
          pillBtn: "rockstargames-sites-gta-gen9fedf31487b9dcc2297026eba2e2aec52",
          selected: "rockstargames-sites-gta-gen9f225d39e9d3b98d60a27d5ea42cdfbfc",
          badge: "rockstargames-sites-gta-gen9ce2abde41d2e4f541e99fa2bc0f6bc96",
          ready: "rockstargames-sites-gta-gen9c41ef7b845073072358781f14c2b360a",
          check: "rockstargames-sites-gta-gen9c73641cf81c409cf970c55fd0a1b6e63",
          locked: "rockstargames-sites-gta-gen9d8ecbe863100a55fe0d78415f83b8ada",
          hiddenSpacer: "rockstargames-sites-gta-gen9f3206e0f8a465ea3c32111a86fcf1bf1"
        },
        re = e => {
          let {
            variant: a
          } = e;
          const s = (0, i.useIntl)();
          if (!a) return null;
          const r = {
            claimed: s.formatMessage(E.DZ.cph_reward_claimed),
            ready: s.formatMessage(E.DZ.cph_reward_claimable)
          };
          return "locked" === a ? (0, R.jsx)("span", {
            className: se.locked,
            "aria-label": s.formatMessage(E.DZ.cph_reward_locked_alt),
            "data-testid": "locked-reward"
          }) : "hidden" === a ? (0, R.jsx)("span", {
            className: se.hiddenSpacer,
            "aria-hidden": "true"
          }) : (0, R.jsxs)("span", {
            className: [se.badge, se[a]].join(" "),
            children: ["claimed" === a && (0, R.jsx)(k, {
              alt: r.claimed,
              classes: se.check
            }), r[a]]
          })
        },
        te = e => {
          let {
            reward: a,
            tierCompleted: t,
            tierLocked: o,
            showUserProgress: c,
            ...n
          } = e;
          const [_] = (0, r.useState)(`${(e=>{try{return s(4248)(`./${e}.jpg`)}catch(e){return s(22168)}})(a.imageName)}?im=Resize=960`);
          return (0, R.jsx)(b.motion.div, {
            layout: !0,
            ...n,
            className: "rockstargames-sites-gta-gen9dc5ae4349b9bb97d8cafb8450444f64a",
            children: (0, R.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c5bfa7130955939eea9c943f130e3500",
              children: [(0, R.jsx)("div", {
                className: "rockstargames-sites-gta-gen9be5e8768dba379195c32c002a6974150",
                children: (0, R.jsx)("img", {
                  src: _,
                  alt: a.label,
                  "data-id": a.id
                })
              }), (0, R.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9b166fe17023566cbc0fafb55d2ba064f",
                children: [(0, R.jsx)("h4", {
                  children: a.label
                }), o && c && (0, R.jsx)(re, {
                  variant: "locked"
                }), !o && t && c && (0, R.jsx)(re, {
                  variant: a.isCollected ? "claimed" : "ready"
                }), !o && !t && c && (0, R.jsx)(re, {
                  variant: "hidden"
                })]
              })]
            })
          })
        },
        oe = {
          pillBtn: "rockstargames-sites-gta-gen9ad29e0f164bc367f1b6e8b836a686f36",
          selected: "rockstargames-sites-gta-gen9cd39cdf81ca4943dc1f46b3ddee3b1b3",
          rewards: "rockstargames-sites-gta-gen9e845e8b152e4954680e0c07abcf598eb",
          carousel: "rockstargames-sites-gta-gen9f4a0aa3f8f682ab8c0ec875f6019fac1",
          "swiper-scrollbar-disabled": "rockstargames-sites-gta-gen9bca86a7db284aa68e60c970bd9e3bf7c",
          "swiper-horizontal": "rockstargames-sites-gta-gen9e6ae55284cbd8b5bc6026aa824ba62f2",
          "swiper-vertical": "rockstargames-sites-gta-gen9bc8ad486e2507adba50bf2130dcde1b1",
          header: "rockstargames-sites-gta-gen9f5a9b23cbb404a119f15b2307976d649",
          btnViewAll: "rockstargames-sites-gta-gen9c11b199660eaa5914208ed352047cbe2",
          container: "rockstargames-sites-gta-gen9befdc7da5c1871c11075187201e84a12",
          inactiveTier: "rockstargames-sites-gta-gen9fe97bcb08e64360b8d9896c5fef9f908",
          isModalOpen: "rockstargames-sites-gta-gen9a7144efb6771b8ffd0cd1c45c47853a5",
          btnBack: "rockstargames-sites-gta-gen9bc03ed974b69cf84b8204e1c8ed5750a",
          slideBtnIn: "rockstargames-sites-gta-gen9f9a6142b0851a26a55a8a1ab8731ebe1",
          fadeItemsOut: "rockstargames-sites-gta-gen9fbb090a69b7fc59e640c7acffffd95c1",
          fadeItemsIn: "rockstargames-sites-gta-gen9e78702729d0a14de4916ab113751f87e",
          btnCloseContainer: "rockstargames-sites-gta-gen9fd08f6ff77533cd7d81e6c676aba0b03",
          btnClose: "rockstargames-sites-gta-gen9e11a96fbe708f964ba952b9fb22f5f22",
          isModalClosed: "rockstargames-sites-gta-gen9bcb0645b345735cf0ae96f46d755bf38",
          howToClaimMobile: "rockstargames-sites-gta-gen9f1a825f69c29cdbb183bf2f6ef3045d5",
          desktopRewardsGrow: "rockstargames-sites-gta-gen9da7f42652864d411278879e0562416fc",
          mobileRewardsGrow: "rockstargames-sites-gta-gen9f07d0b9c2a0fa6b2a91522fefc625717",
          mobileRewardsShrink: "rockstargames-sites-gta-gen9a0c21a04c3c5084c92159fc24c88f4ba",
          desktopRewardsShrink: "rockstargames-sites-gta-gen9a9f6a56b070632f8ca8cae880be77d37",
          desktopShrinkChallengeMargins: "rockstargames-sites-gta-gen9dc84310dc82989972ac52b7ecfcf0cf5",
          "swiper-preloader-spin": "rockstargames-sites-gta-gen9acbff3d843dc5f1a36abf882423d5547",
          fadeRewardsIn: "rockstargames-sites-gta-gen9aaaca69e59b50c1b13e29c072af02d5e"
        },
        ce = e => {
          let {
            setIsModalOpen: a,
            isModalOpen: t,
            rewardsContainer: o,
            setHeight: c,
            setOffset: n,
            tiers: _,
            activeTier: p,
            lockAllRewards: g,
            showUserProgress: m
          } = e;
          const [h, u] = (0, r.useState)(window.innerWidth >= 1280), [f, k] = (0, r.useState)(1), [S, v] = (0, r.useState)("auto"), {
            track: j
          } = (0, d.useGtmTrack)(), {
            setBodyIsLocked: w
          } = (0, l.useBodyScrollable)("Rewards"), [x, A] = (0, r.useState)(!1), P = (0, r.useRef)(), I = h ? Q.RC : "div", T = h ? Q.qr : "li", C = (0, r.useRef)(null), N = (0, r.useRef)(null), O = _.some((e => e.isCompleted && e?.numClaimable > 0)), y = (0, i.useIntl)(), G = (0, r.useMemo)((() => {
            const e = [];
            return _.forEach(((a, s) => {
              a.rewards.forEach(((a, r) => {
                e.push({
                  tier: s,
                  reward: a,
                  showTitle: 0 === r,
                  id: `reward-${s}-${r}`
                })
              }))
            })), e
          }), [_]);

          function W() {
            u(window.innerWidth >= 1280);
            const e = C?.current?.clientHeight;
            if (c(h && G.length ? e : "auto"), !t) {
              const {
                current: e
              } = N && N, a = window.getComputedStyle(e), s = Number(a.width.replace("px", "")) - Number(a.paddingLeft.replace("px", "")) - Number(a.paddingRight.replace("px", ""));
              v(s)
            }
          }

          function D() {
            if (t && j({
                event: "nav_back",
                text: "rewards",
                element_placement: "rewards"
              }), h)
              if (t) P.current?.swiper.disable(), k(0), setTimeout((() => {
                P.current?.swiper.enable();
                const e = G.findIndex((e => e.id === `reward-${p}-0`));
                P.current?.swiper.slideTo(e), P.current?.swiper.disable(), A(!1), P.current?.swiper.enable(), P.current?.swiper.slideTo(0)
              }), 100), setTimeout((() => {
                a(!1), k(1)
              }), 250);
              else {
                const e = o.current,
                  s = e?.offsetTop;
                n(s), P.current?.swiper.disable(), A(!0);
                let r = G.findIndex((e => e.id === `reward-${p}-0`));
                1 === _[p].rewards.length && (r -= 1), P.current?.swiper.slideTo(r), setTimeout((() => {
                  P.current?.swiper.enable(), P.current?.swiper.slideTo(r), a(!0)
                }), 10)
              }
            else w(!t), a(!t), A(!t)
          }(0, r.useEffect)((() => (window.addEventListener("resize", W), W(), () => {
            window.removeEventListener("resize", W)
          })), [_]), (0, r.useEffect)((() => {
            w(!h && t)
          }), [h]);
          let z = null;
          return z = ee.Ay, (0, r.useMemo)((() => (0, R.jsx)(z, {
            disabled: h || !t,
            children: (0, R.jsxs)(b.motion.div, {
              layout: "position",
              className: [oe.rewards, t ? oe.isModalOpen : oe.isModalClosed].join(" "),
              ref: C,
              children: [t && (0, R.jsx)("div", {
                className: oe.btnCloseContainer,
                children: (0, R.jsx)("button", {
                  type: "button",
                  className: oe.btnClose,
                  onClick: () => D(),
                  children: (0, R.jsx)("img", {
                    src: s(75748),
                    alt: y.formatMessage(E.DZ.cph_progress_close)
                  })
                })
              }), (0, R.jsxs)("div", {
                className: oe.header,
                ref: N,
                children: [t && (0, R.jsx)("button", {
                  type: "button",
                  className: oe.btnBack,
                  onClick: () => D(),
                  children: (0, R.jsx)("img", {
                    src: s(32155),
                    alt: y.formatMessage(E.DZ.cph_progress_close)
                  })
                }), (0, R.jsx)("h3", {
                  children: (0, R.jsx)(i.FormattedMessage, {
                    ...E.DZ.cph_progress_rewards_title
                  })
                }), !t && (0, R.jsx)("button", {
                  type: "button",
                  className: oe.btnViewAll,
                  onClick: () => {
                    j({
                      event: "view_all",
                      element_placement: "progress & rewards"
                    }), D()
                  },
                  children: (0, R.jsx)(i.FormattedMessage, {
                    ...E.DZ.cph_progress_rewards_view_all
                  })
                })]
              }), (0, R.jsx)("div", {
                className: oe.container,
                style: {
                  "--max-width-static-md": `${S}px`
                },
                children: (0, R.jsxs)(I, {
                  ref: P,
                  modules: [ae.xI, ae.Vx],
                  ...h && {
                    breakpoints: {
                      0: {
                        spaceBetween: 16
                      },
                      1024: {
                        spaceBetween: 18
                      },
                      1920: {
                        spaceBetween: 20
                      },
                      2560: {
                        spaceBetween: 22
                      }
                    },
                    className: oe.carousel,
                    loop: !1,
                    grabCursor: !0,
                    centeredSlides: !1,
                    centerInsufficientSlides: !1,
                    slidesPerView: "auto",
                    speed: 700,
                    navigation: !0
                  },
                  children: [!h && O && (0, R.jsx)("div", {
                    className: oe.howToClaimMobile,
                    children: (0, R.jsx)(i.FormattedMessage, {
                      ...E.DZ.cph_reward_how_to_claim
                    })
                  }), G?.map((e => {
                    const a = e.tier === p;
                    return a || x ? (0, R.jsxs)(T, {
                      className: a ? void 0 : oe.inactiveTier,
                      tabIndex: 0,
                      children: [e.showTitle && t && (0, R.jsx)("h3", {
                        children: (0, R.jsx)(i.FormattedMessage, {
                          ...E.DZ.cph_progress_tracker_tier_label,
                          values: {
                            number: e.tier + 1
                          }
                        })
                      }), (0, R.jsx)(te, {
                        reward: e.reward,
                        style: a ? {} : {
                          opacity: f
                        },
                        tierLocked: g || _[e.tier].isLocked,
                        tierCompleted: _[e.tier].isCompleted,
                        showUserProgress: m
                      })]
                    }, e.id) : null
                  })).filter(Boolean)]
                })
              })]
            })
          })), [p, _, G?.length, h, t, S, x, f])
        },
        ne = {
          pillBtn: "rockstargames-sites-gta-gen9fb671d25d5a2abd54544f199d7f4e347",
          selected: "rockstargames-sites-gta-gen9bcf9ab1b0c9bfd83b7f2400155a3aa9b",
          progressTracker: "rockstargames-sites-gta-gen9cc68277bce61e89d3713665a72b718b1",
          progressTrackerHeader: "rockstargames-sites-gta-gen9bd92e51c31049f76687836633cfeaf9c",
          platformAvailability: "rockstargames-sites-gta-gen9d731753208dd11452219ad51ec0a7c9c",
          platformIcons: "rockstargames-sites-gta-gen9ca27426ec20cfec2702aed112934c70c",
          container: "rockstargames-sites-gta-gen9af83f3d924fe80e40753ffd0d1f46c9d",
          tiers: "rockstargames-sites-gta-gen9cdf99e21f58eec9f9374379aa93f6e62",
          active: "rockstargames-sites-gta-gen9f77836b6c06b0ba86a15f93779f873c7",
          tier: "rockstargames-sites-gta-gen9d68c465aed64302f9af248ccf1309843",
          check: "rockstargames-sites-gta-gen9f036759c19af087d8b453e125f2f4c05",
          isComplete: "rockstargames-sites-gta-gen9cdbc594513fcf764a6ef0c4e0e49484b",
          challenges: "rockstargames-sites-gta-gen9be099307e9346b5486c4aa3ccf36a6e4",
          challengesHeader: "rockstargames-sites-gta-gen9f29c2ef9a31cc3864e26ad633c8057b4",
          challengesProgress: "rockstargames-sites-gta-gen9acd51bef24d71200a5956e4027d86dad",
          progressBar: "rockstargames-sites-gta-gen9e3397e5e4fa2d9eb7f5f732560a577da",
          challengeList: "rockstargames-sites-gta-gen9fbd88f73d53a37f3d28fb986e02a055a",
          rewards: "rockstargames-sites-gta-gen9f67f3d175369467bf2366a2957f64e31",
          isModalOpen: "rockstargames-sites-gta-gen9ad94bb04fc0466150acbad7e1ffb7bc7",
          readyToClaim: "rockstargames-sites-gta-gen9e39e4dcb33426adaa4671cba0739c9c9",
          tooltip: "rockstargames-sites-gta-gen9c59062de2475659355390de18f755cae",
          tooltipInner: "rockstargames-sites-gta-gen9d659fab2efa65d105d14d94680a1f06a",
          tooltipIcon: "rockstargames-sites-gta-gen9afa0361120dc9fd33c3532764c446cdd",
          fadeItemsIn: "rockstargames-sites-gta-gen9ffbd860331f85e012de03fe4ac708357",
          fadeItemsOut: "rockstargames-sites-gta-gen9f991c15e518732d0fa70dc808c188b88",
          desktopRewardsGrow: "rockstargames-sites-gta-gen9ef555d1a81df2603ccd27de4f56d86d7",
          mobileRewardsGrow: "rockstargames-sites-gta-gen9dc134ea4187ca7cfad4e7d29e03c09df",
          mobileRewardsShrink: "rockstargames-sites-gta-gen9cd6cda09773ed92610c4a36a26e6ca47",
          desktopRewardsShrink: "rockstargames-sites-gta-gen9d4059494174a6bac6e71d9ef6cba8fff",
          desktopShrinkChallengeMargins: "rockstargames-sites-gta-gen9f6adb38d999bde8541fad4cc59d8dc9c"
        },
        _e = e => {
          let {
            lockAllRewards: a
          } = e;
          const {
            windowWidth: s
          } = (0, l.useWindowResize)(), t = s < 1280, {
            state: o
          } = (0, E.Yy)(), {
            rewardsKey: c
          } = o, n = c ? E.bP[c] : null, [_, p] = (0, r.useState)(null), g = _ ? (e => {
            const a = [];
            let s = !1;
            return e.forEach((e => {
              const {
                challenges: r,
                rewards: t
              } = e, o = {
                challenges: r,
                rewards: t
              };
              o.numCompleted = r.filter((e => e.playerProgress >= e.totalProgress)).length, o.isLocked = s, s = o.numCompleted < r.length, o.isCompleted = o.numCompleted >= r.length, o.isCompleted ? o.numClaimable = t.filter((e => !1 === e.isCollected)).length : o.numClaimable = 0, a.push({
                ...e,
                ...o
              })
            })), a
          })(_.tiers) : null, [f, S] = (0, r.useState)(0), [v, j] = (0, r.useState)(!1), [x, A] = (0, r.useState)(!1), T = (0, r.useRef)([]), {
            ref: C,
            inView: N
          } = (0, u.useInView)({
            threshold: .6
          }), O = (0, m.useRockstarTokenPing)(), {
            loggedIn: y
          } = (0, d.useRockstarUser)(), {
            selectedCharacterTuple: G
          } = (0, d.useRockstarUserState)(), {
            formatMessage: W
          } = (0, i.useIntl)(), {
            track: D
          } = (0, d.useGtmTrack)(), z = g?.[f]?.numCompleted ?? 0, V = g?.[f]?.challenges?.length ?? 0, [L, M] = (0, r.useState)(null), [B, H] = (0, r.useState)(null), [Z, F] = (0, r.useState)(null), [$, Y] = (0, r.useState)(!1), [q, K] = (0, r.useState)("auto"), [Q, ee] = (0, r.useState)("auto"), ae = (0, r.useRef)(null), se = (0, r.useRef)();
          (0, r.useEffect)((() => {
            N && !v && (D({
              event: "page_section_impression",
              element_placement: "progress & rewards"
            }), j(!0))
          }), [N]), (0, r.useEffect)((() => {
            if (null === y || null === G || !n) return;
            const e = G?.[0],
              a = (0, l.isGen9Platform)(e);
            A(a && y), (async e => {
              (async () => {
                const {
                  error: a = null,
                  result: s
                } = await (0, l.coreScApiFetch)("games/gtao/career/progress/section", {
                  pingBearer: O,
                  useCache: !0,
                  ...y ? {} : {
                    requireBearerToken: !1
                  },
                  query: e
                });
                if (a) throw Object.assign(new Error(""), a);
                s && p(s)
              })()
            })({
              section: String(n),
              ...a && y && {
                platform: G?.[0],
                slot: G?.[1]
              }
            })
          }), [y, G, n]);
          const {
            styles: re,
            attributes: te
          } = (0, h.E)(Z, B, {
            placement: "top-end"
          }), oe = (0, r.useCallback)((e => a => {
            let s = e;
            if ("ArrowDown" === a.code) s += 1;
            else {
              if ("ArrowUp" !== a.code) return;
              s -= 1
            }
            s > 3 || s < 0 || (a.preventDefault(), ge(s), T?.current[s]?.focus())
          }), []), _e = (0, r.useCallback)((e => () => {
            ge(e), D({
              event: "component_tab_click",
              text: `Tier ${e+1}`,
              link_url: void 0,
              element_placement: "progress tracker"
            })
          }), []);
          if (!g?.[f] || !n) return null;
          const {
            challenges: ie,
            rewards: le,
            isLocked: de
          } = g[f], pe = g.some((e => e.isCompleted && e?.numClaimable > 0));

          function ge(e) {
            M(null), S(e)
          }
          return (0, R.jsxs)("div", {
            className: ne.progressTracker,
            style: {
              "--rewards-top-offset": "auto" === Q ? "auto" : `${Q}px`
            },
            ref: C,
            children: [(0, R.jsxs)("div", {
              className: ne.progressTrackerHeader,
              children: [(0, R.jsx)("div", {
                children: (0, R.jsx)("h2", {
                  children: (0, R.jsx)(i.FormattedMessage, {
                    ...E.DZ.cph_progress_tracker_title
                  })
                })
              }), !t && pe && x ? (0, R.jsxs)("div", {
                className: ne.readyToClaim,
                children: [(0, R.jsx)(i.FormattedMessage, {
                  ...E.DZ.cph_reward_ready_to_claim
                }), (0, R.jsx)("button", {
                  className: ne.tooltipIcon,
                  ref: F,
                  type: "button",
                  "aria-label": W(E.DZ.cph_reward_ready_to_claim)
                }), (0, R.jsx)("div", {
                  className: ne.tooltip,
                  style: re.popper,
                  ref: H,
                  ...te,
                  children: (0, R.jsx)("div", {
                    className: ne.tooltipInner,
                    children: (0, R.jsx)(i.FormattedMessage, {
                      ...E.DZ.cph_reward_how_to_claim
                    })
                  })
                })]
              }) : (0, R.jsxs)("div", {
                className: ne.platformAvailability,
                children: [(0, R.jsx)("span", {
                  children: (0, R.jsx)(i.FormattedMessage, {
                    ...E.DZ.cph_progress_available_on
                  })
                }), (0, R.jsxs)("div", {
                  className: ne.platformIcons,
                  children: [(0, R.jsx)(U, {
                    "aria-label": W(E.DZ.cph_progress_available_on_aria_ps5)
                  }), (0, R.jsx)(X, {
                    "aria-label": W(E.DZ.cph_progress_available_on_aria_xbox)
                  })]
                })]
              }), (0, R.jsxs)("div", {
                className: ne.platformAvailability,
                children: [(0, R.jsx)("span", {
                  children: (0, R.jsx)(i.FormattedMessage, {
                    ...E.DZ.cph_progress_available_on
                  })
                }), (0, R.jsxs)("div", {
                  className: ne.platformIcons,
                  children: [(0, R.jsx)(U, {
                    "aria-label": W(E.DZ.cph_progress_available_on_aria_ps5)
                  }), (0, R.jsx)(X, {
                    "aria-label": W(E.DZ.cph_progress_available_on_aria_xbox)
                  })]
                })]
              })]
            }), _ && (0, R.jsxs)("div", {
              className: [ne.container, $ && ne.isModalOpen, !1 === $ ? ne.isModalClosed : ""].join(" "),
              style: {
                ...!t && {
                  height: q
                }
              },
              ref: ae,
              children: [(0, R.jsx)("div", {
                className: ne.tiers,
                children: (0, R.jsx)("ul", {
                  children: g && g.map(((e, a) => {
                    const s = g[a]?.isCompleted;
                    return (0, R.jsx)("li", {
                      children: (0, R.jsxs)("button", {
                        type: "button",
                        className: [ne.tier, f === a ? ne.active : "", s ? ne.isComplete : ""].join(" "),
                        ref: e => T.current[a] = e,
                        onClick: _e(a),
                        onKeyDown: oe(a),
                        children: [(0, R.jsx)(i.FormattedMessage, {
                          ...E.DZ.cph_progress_tracker_tier_label,
                          values: {
                            number: a + 1
                          }
                        }), s && x && (0, R.jsx)(k, {
                          classes: ne.check,
                          alt: W(E.DZ.cph_tier_complete)
                        })]
                      })
                    }, e.challenges[0].id)
                  }))
                })
              }), (0, R.jsxs)(b.motion.div, {
                className: ne.challenges,
                children: [(0, R.jsxs)(b.motion.div, {
                  className: ne.challengesHeader,
                  children: [(0, R.jsx)("h3", {
                    children: (0, R.jsx)(i.FormattedMessage, {
                      ...E.DZ.cph_progress_challenges_title
                    })
                  }), (0, R.jsxs)("div", {
                    className: ne.challengesProgress,
                    children: [(0, R.jsx)(w, {
                      percentage: x ? z / V * 100 : 0,
                      classes: ne.progressBar
                    }), (0, R.jsx)(I, {
                      theme: "light",
                      value: x ? z : void 0,
                      total: V,
                      type: P.Challenges
                    })]
                  })]
                }), (0, R.jsx)(b.motion.div, {
                  className: ne.challengeList,
                  children: ie && ie.map((e => (0, R.jsx)(J, {
                    activeTier: f,
                    challenge: e,
                    isLocked: de || !1,
                    isOpen: e.id === L,
                    showUserProgress: x,
                    onClick: () => {
                      M(e.id === L ? null : e.id)
                    }
                  }, e.id)))
                })]
              }), (0, R.jsx)(b.motion.div, {
                className: ne.rewards,
                "data-open": $,
                layout: !0,
                transition: {
                  ease: "easeInOut",
                  stiffness: 1e3,
                  damping: 100,
                  duration: .3
                },
                ref: se,
                children: le && (0, R.jsx)(ce, {
                  tiers: g,
                  activeTier: f,
                  isModalOpen: $,
                  setIsModalOpen: e => {
                    Y(e), M(null)
                  },
                  setHeight: K,
                  setOffset: ee,
                  rewardsContainer: se,
                  lockAllRewards: a,
                  showUserProgress: x
                })
              })]
            })]
          })
        };
      var ie = s(89779),
        le = s(83082),
        de = s(76394);
      const pe = {
          dropdownContainer: "rockstargames-sites-gta-gen9bd98446de1a461ef3a36b13231af6b5b",
          dropdownButton: "rockstargames-sites-gta-gen9eb1b8182c98fd3566673fae2cba07bdd",
          dropdownContent: "rockstargames-sites-gta-gen9c2c7e58088a6b7e3ffc04c0d16c91d30",
          dropdownImage: "rockstargames-sites-gta-gen9dca79041eb35976f8dc1be5d778af437",
          dropdownTitle: "rockstargames-sites-gta-gen9c1033631a0f04e51abd347c9d5494bdd",
          dropdownArrow: "rockstargames-sites-gta-gen9ecae60c71094ed688285a322793d6354",
          open: "rockstargames-sites-gta-gen9a6a5d7d7de1557ecce0f785ac6bfc654"
        },
        ge = e => {
          let {
            imageUrl: a,
            onClick: s,
            isOpen: t
          } = e;
          const o = (0, i.useIntl)(),
            c = t ? E.DZ.cph_nav_close : E.DZ.cph_nav_open,
            n = (0, r.useContext)(he);
          return (0, R.jsx)("div", {
            className: pe.dropdownContainer,
            "data-testid": "menu-dropdown",
            children: (0, R.jsx)("button", {
              type: "button",
              className: pe.dropdownButton,
              onClick: s,
              "aria-label": o.formatMessage(c),
              "data-testid": "menu-dropdown-button",
              children: (0, R.jsxs)("div", {
                className: pe.dropdownContent,
                children: [(0, R.jsx)("div", {
                  className: pe.dropdownImage,
                  children: a && (0, R.jsx)("img", {
                    alt: "",
                    width: "32",
                    height: "32",
                    src: a
                  })
                }), (0, R.jsx)("div", {
                  className: pe.dropdownTitle,
                  children: n
                }), (0, R.jsx)("div", {
                  className: [pe.dropdownArrow, t ? pe.open : ""].join(" "),
                  "data-testid": "chevron"
                })]
              })
            })
          })
        },
        me = {
          pillBtn: "rockstargames-sites-gta-gen9a9df047dcbefa23053025a5387cd1071",
          selected: "rockstargames-sites-gta-gen9f086dc4e8052a5850329e8bb4b4eb371",
          navContainer: "rockstargames-sites-gta-gen9a3552edfd2d13b3a53c03a089138cfa2",
          navOverlay: "rockstargames-sites-gta-gen9efc6d5d475f312a65b1f4f9ea59e1780",
          headerVisible: "rockstargames-sites-gta-gen9e56c5400a147937ad2e029807565f6a5",
          nav: "rockstargames-sites-gta-gen9a97b53bb2f045c2cdaf8f9c51932f6dd",
          navBar: "rockstargames-sites-gta-gen9d138bc1aae425d5a4f7c24c8787e9e6f"
        },
        he = (0, r.createContext)(null),
        ue = {
          initial: {
            opacity: 0
          },
          closed: {
            opacity: 0,
            transition: {
              ease: "linear",
              duration: .3
            },
            transitionEnd: {
              display: "none"
            }
          },
          open: {
            opacity: 1,
            display: "block",
            transition: {
              ease: "linear",
              duration: .3
            }
          }
        },
        be = e => {
          let {
            title: a
          } = e;
          const {
            pathname: s
          } = (0, ie.useLocation)(), t = (0, ie.useParams)(), {
            data: o,
            loading: c
          } = (0, de.A)(), {
            setBodyIsLocked: n
          } = (0, l.useBodyScrollable)("SecondaryNavigation"), {
            state: _
          } = (0, l.useRockstarLocalState)(), [i, p] = (0, r.useState)(!1), [g, m] = (0, r.useState)(!1), [h, u] = (0, r.useState)(!1), {
            pageYOffset: f
          } = (0, l.useScroll)(), {
            track: k
          } = (0, d.useGtmTrack)(), E = (0, r.useContext)(he), S = !_.navHidden, v = !c && o?.length > 0, j = (0, r.useMemo)((() => t["*"]?.slice(0, t["*"].indexOf("/"))), [o, s]), w = o?.find((e => e.name === j))?.subNavItems?.find((e => e.name.toLowerCase() === t.section));
          return (0, r.useEffect)((() => {
            const e = e => {
              "Escape" === e.key && p(!1)
            };
            return i ? (h || u(!0), m(!1), k({
              event: "nav_open",
              text: E,
              element_placement: "secondary Nav"
            })) : i || !h || g || k({
              event: "nav_close",
              text: E,
              element_placement: "secondary Nav"
            }), i ? (n(!0), document.addEventListener("keyup", e)) : n(!1), () => {
              n(!1), document.removeEventListener("keyup", e)
            }
          }), [i, g]), v ? (0, R.jsxs)(he.Provider, {
            value: a,
            children: [(0, R.jsx)(b.motion.div, {
              className: me.navOverlay,
              onClick: () => p(!1),
              variants: ue,
              initial: "initial",
              animate: i ? "open" : "closed"
            }), (0, R.jsx)("div", {
              className: [me.navContainer, S && f > 0 ? me.headerVisible : ""].join(" "),
              children: (0, R.jsxs)("nav", {
                className: me.nav,
                children: [(0, R.jsx)("div", {
                  className: [me.navBar].join(" "),
                  children: (0, R.jsx)(ge, {
                    imageUrl: w?.images?.tinyThumb,
                    isOpen: i,
                    onClick: () => p(!i)
                  })
                }), (0, R.jsx)(le.A, {
                  navItems: o,
                  category: j,
                  isHeaderVisible: S,
                  onNavItemClick: () => {
                    p(!1), m(!0)
                  },
                  isOpen: i
                })]
              })
            })]
          }) : null
        };
      var fe = s(31090),
        Re = s(74401);
      const ke = {
          pillBtn: "rockstargames-sites-gta-gen9ee357846d4b6aea58200c13e67dc1bde",
          selected: "rockstargames-sites-gta-gen9d3d1e66e547d532af771ef76578d59c3",
          heroContainer: "rockstargames-sites-gta-gen9b0075cca096e222197e0328993574939",
          images: "rockstargames-sites-gta-gen9fa2475e07fbf6ce0635d3abc79bd10ce",
          backgroundImage: "rockstargames-sites-gta-gen9d9ddfe2e98afbce6bec23e1031690f3d",
          layeredImage: "rockstargames-sites-gta-gen9ef4b0068f0c488688c390fd44d67fa7e",
          brandCtaSection: "rockstargames-sites-gta-gen9d288e446a9ac8d26646bfb6a3bd60272",
          brand: "rockstargames-sites-gta-gen9ccc5d53425f6b73c29aa2cfd74094828",
          small: "rockstargames-sites-gta-gen9f357c3a7f5094416290a31d912e11370",
          medium: "rockstargames-sites-gta-gen9a1fd085ac3d090549cfcd6ada8eeb7d0",
          large: "rockstargames-sites-gta-gen9c08bd5e88b1b8c660fd0c81c9b137e9a",
          cta: "rockstargames-sites-gta-gen9a3ea0af029d5ad55f48ec107f83d9160"
        },
        Ee = e => {
          let {
            brand: a,
            className: s,
            ctaFields: r,
            style: t,
            title: o = ""
          } = e;
          return (0, R.jsxs)("div", {
            className: ke.brandCtaSection,
            "data-has-cta": !!r?.content,
            children: [a && (0, R.jsx)("img", {
              alt: o ? `${o} logo` : "",
              className: [ke.brand, s ? ke[s] : ""].join(" ").trim(),
              style: t,
              src: a
            }), r?.content && (0, R.jsx)(fe.A, {
              variant: "gen9",
              icon: "play",
              iconPosition: "left",
              className: ke.cta,
              ...r
            })]
          })
        },
        Se = e => {
          let {
            title: a,
            heroImages: s
          } = e;
          const r = (0, Re.useGetCdnSource)(s?.backgroundMobileImage ?? null),
            t = (0, Re.useGetCdnSource)(s?.backgroundDesktopImage ?? null),
            o = (0, Re.useGetCdnSource)(s?.layeredMobileImage ?? null),
            c = (0, Re.useGetCdnSource)(s?.layeredDesktopImage ?? null),
            n = (0, Re.useGetCdnSource)(s?.brandImage ?? null);
          if (!s) return null;
          const {
            brandImageSettings: _,
            ctaFields: i
          } = s, l = {
            ..._?.style
          };
          return (0, R.jsxs)("div", {
            className: ke.heroContainer,
            style: {
              "--background-image-desktop": `url(${t??""})`,
              "--background-image-mobile": `url(${r??t})`,
              "--layered-image-desktop": `url(${c??""})`,
              "--layered-image-mobile": `url(${o??""})`,
              "--custom-logo-height": `${_?.customLogoMaxHeight||"20vw"}`
            },
            children: [(0, R.jsxs)("div", {
              className: ke.images,
              "aria-label": a,
              role: "img",
              children: [(0, R.jsx)("div", {
                className: ke.layeredImage
              }), (0, R.jsx)("div", {
                className: ke.backgroundImage
              })]
            }), (0, R.jsx)(Ee, {
              brand: n,
              className: _?.optionalLogoSizeClassName,
              ctaFields: i,
              style: l,
              title: a
            })]
          })
        },
        ve = e => {
          let {
            className: a
          } = e;
          return (0, R.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, R.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, R.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        je = {
          pillBtn: "rockstargames-sites-gta-gen9fd65270fd86cffeba7142a0b174397c2",
          selected: "rockstargames-sites-gta-gen9d382de9311c7bf5078e8ca02ffdb8e4e",
          intro: "rockstargames-sites-gta-gen9d1ae968aa9b2f686f3cba79d0c83bb5c",
          summary: "rockstargames-sites-gta-gen9c84a31601b2e53c9f59d1abe13d3f0de",
          gettingStarted: "rockstargames-sites-gta-gen9d17368112edc64f6b216f9ddf0570717",
          rightSide: "rockstargames-sites-gta-gen9d52d031697afccf861d624361907322f",
          gettingStartedSteps: "rockstargames-sites-gta-gen9a917f1086b7391fcf65eb4340723d04b",
          gettingStartedGuide: "rockstargames-sites-gta-gen9ecc839d7ba8ab1d6024e840c30713a49",
          guideButton: "rockstargames-sites-gta-gen9ccec3d0d65e50ec093f2e2d7f424a581",
          icon: "rockstargames-sites-gta-gen9b107ffc397fdfb9a124061601fbb9619"
        },
        we = e => {
          let {
            title: a,
            category: s,
            summary: t,
            steps: o = [],
            guideLink: c = ""
          } = e;
          const [n, _] = (0, r.useState)(!1), {
            track: l
          } = (0, d.useGtmTrack)(), {
            ref: p,
            inView: g
          } = (0, u.useInView)({
            threshold: .6
          }), m = (0, i.useIntl)();
          return (0, r.useEffect)((() => {
            g && !n && (l({
              event: "page_section_impression",
              element_placement: "intro"
            }), _(!0))
          }), [g]), (0, R.jsxs)("div", {
            className: je.intro,
            ref: p,
            children: [(0, R.jsxs)("div", {
              className: je.summary,
              children: [(0, R.jsx)("h1", {
                children: s
              }), (0, R.jsx)("h2", {
                children: a
              }), (0, R.jsx)("p", {
                className: je.summaryText,
                children: t
              })]
            }), (0, R.jsxs)("div", {
              className: je.rightSide,
              children: [(0, R.jsxs)("div", {
                className: je.gettingStarted,
                children: [(0, R.jsx)("h3", {
                  children: m.formatMessage(E.DZ.cph_intro_getting_started)
                }), (0, R.jsx)("ol", {
                  className: je.gettingStartedSteps,
                  children: o.map((e => (0, R.jsx)("li", {
                    children: (0, R.jsx)("span", {
                      children: e
                    })
                  }, e)))
                })]
              }), c && (0, R.jsxs)("div", {
                className: je.gettingStartedGuide,
                children: [(0, R.jsx)("span", {
                  children: m.formatMessage(E.DZ.cph_intro_guide_instruction, {
                    title: a
                  })
                }), (0, R.jsxs)(ie.NavLink, {
                  type: "button",
                  to: c,
                  className: je.guideButton,
                  children: [(0, R.jsx)("span", {
                    children: m.formatMessage(E.DZ.cph_intro_guide_learn_more)
                  }), " ", (0, R.jsx)(ve, {
                    className: je.icon
                  })]
                })]
              })]
            })]
          })
        },
        xe = {
          pillBtn: "rockstargames-sites-gta-gen9ce6d15ece7cfe49029ce53e2a923fb5b",
          selected: "rockstargames-sites-gta-gen9f2dc0ecc506b67fe96ae140024a5fe08",
          gen8: "rockstargames-sites-gta-gen9b4970991f4e1e1a2297c2f40cca1caca",
          gen9: "rockstargames-sites-gta-gen9d84f6506213857cb955446290b253edc",
          loggedOut: "rockstargames-sites-gta-gen9cac510e91f934577b079eb20b83ca9c2",
          notLinked: "rockstargames-sites-gta-gen9f93ffb4f8b69ca7f0ba07627aa61cbc9",
          unknown: "rockstargames-sites-gta-gen9f7c399247d0b0cdc3adc16db4a50a703",
          loadingScreen: "rockstargames-sites-gta-gen9da6eeaf3a27b04123ba44b057ecc1b92",
          highlights: "rockstargames-sites-gta-gen9b745489b1c13c5d282e843baefc2b3a3",
          rewardsTrackerWithData: "rockstargames-sites-gta-gen9a9ec9011ffa220700f005bba884d5fdf",
          rewardsTracker: "rockstargames-sites-gta-gen9fbc0ae986397b2449de9a1da243e9606",
          calloutLoginPrompt: "rockstargames-sites-gta-gen9c0e71ef0d2a43fcc9439914b37657142",
          calloutNoChar: "rockstargames-sites-gta-gen9e4fed4b8576e24f0f096b83b74a096b5",
          feedback: "rockstargames-sites-gta-gen9bd8ba19a2ba7b8e91897907ef98f173c",
          rating: "rockstargames-sites-gta-gen9d88edb5d027e16f531fd14270d7e1ea9"
        };
      t.gsap.registerPlugin(o.u);
      const {
        host: Ae,
        signup: Pe
      } = (0, l.getScConfigForOrigin)(), Ie = (0, i.withIntl)((e => {
        let {
          heroImages: a,
          awardsKey: s,
          title: o,
          category: g,
          summary: m,
          steps: h,
          guideLink: u,
          rewardsKey: b,
          images: f,
          subtitle: k,
          highlights: S
        } = e;
        const {
          windowWidth: v
        } = (0, l.useWindowResize)(), {
          selectedCharacterTuple: j,
          userData: w
        } = (0, d.useRockstarUserState)(), {
          loading: x,
          loggedIn: A
        } = (0, d.useRockstarUser)(), {
          setAwardsKey: P,
          setRewardsKey: I
        } = (0, E.Yy)(), [T, C] = (0, r.useState)("unknown"), N = (0, r.useRef)(null), O = (0, r.useRef)(null), {
          formatMessage: y
        } = (0, i.useIntl)(), {
          track: G
        } = (0, d.useGtmTrack)(), W = (0, l.useLocale)(), D = (0, l.toScLocaleString)(W), [z, V] = (0, r.useState)(!1), M = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, B = `${Pe}&returnUrl=${window.location.pathname}&lang=${D}`, H = `https://${Ae}.rockstargames.com/settings/linkedaccounts`;
        (0, r.useEffect)((() => {
          s && P(s)
        }), [s]), (0, r.useEffect)((() => {
          b && I(b)
        }), [b]), (0, r.useEffect)((() => () => {
          P(null), I(null)
        }), []), (0, r.useEffect)((() => {
          if (!1 === A && C("loggedOut"), A && Array.isArray(j)) {
            const e = (0, l.getGen9Consoles)().includes(j[0]),
              a = (0, l.getGen8Consoles)().includes(j[0]);
            e ? C("gen9") : a && C("gen8")
          } else A && !1 === j && C("notLinked")
        }), [A, j]), (0, r.useEffect)((() => {
          x || z || null === A || "unknown" === T || (G({
            event: "virtualPageview",
            view_name: `career progress hub: ${o.toLowerCase()}`,
            page_layout: T
          }), V(!0))
        }), [A, T, x]);
        const U = t.gsap.matchMedia();
        return (0, r.useLayoutEffect)((() => {
          if (!O.current) return;
          const e = O.current.getElementsByTagName("img")?.[5];
          e && U.add({
            isDesktop: "(min-width: 500px)",
            isMobile: "(max-width: 501px)",
            reduceMotion: "(prefers-reduced-motion: reduce)"
          }, (a => {
            const {
              isDesktop: s,
              reduceMotion: r
            } = a.conditions;
            if (r) return;
            const o = {
                mobile: {
                  from: "-100vw",
                  to: "-275vw"
                },
                desktop: {
                  from: "0",
                  to: -1 * (e.offsetLeft + e.width - window.innerWidth)
                }
              },
              c = s ? o.desktop : o.mobile,
              n = {
                trigger: O.current,
                scrub: !0
              };
            t.gsap.fromTo(O.current, {
              x: c.from,
              scrollTrigger: n
            }, {
              x: c.to,
              scrollTrigger: n,
              ease: "none"
            })
          }))
        }), [x, T, O.current]), (0, r.useEffect)((() => {
          t.gsap.matchMediaRefresh()
        }), [v]), x ? (0, R.jsx)("div", {
          className: xe.loadingScreen,
          children: (0, R.jsx)(n.A, {
            type: "SPINNING"
          })
        }) : (0, R.jsxs)(R.Fragment, {
          children: [(0, R.jsx)(be, {
            title: o
          }), (0, R.jsxs)("div", {
            className: xe[T],
            ref: N,
            children: [(0, R.jsx)(Se, {
              title: o,
              heroImages: a ?? {}
            }), (0, R.jsx)(we, {
              title: o,
              category: g,
              summary: m,
              steps: h,
              guideLink: u
            }), (0, R.jsx)("div", {
              className: xe.highlights,
              children: (0, R.jsx)(p.Highlights, {
                highlights: S,
                subtitle: k
              })
            }), !A && (0, R.jsx)(c.A, {
              header: y(E.DZ.cph_login_prompt_title),
              subheader: y(E.DZ.cph_login_prompt_body),
              type: "button",
              action_text: y(E.DZ.cph_login_prompt_button),
              actionFooterHelperText: y(E.DZ.cph_login_prompt_button_helper),
              actionFooterLinkText: y(E.DZ.cph_login_prompt_button_helper_link),
              actionFooterLink: B,
              actionFooterLinkTrackingData: {
                event: "cta_signup",
                text: E.DZ.cph_login_prompt_button_helper_link.defaultMessage.toLowerCase(),
                link_url: B
              },
              link: M,
              className: xe.calloutLoginPrompt,
              sectionName: E.DZ.cph_login_prompt_title.defaultMessage,
              trackingData: {
                event: "cta_login",
                text: E.DZ.cph_login_prompt_button_helper_link.defaultMessage.toLowerCase(),
                link_url: M,
                element_placement: `callout section - ${E.DZ.cph_login_prompt_title.defaultMessage}`
              }
            }), A && !1 === j && (0, R.jsx)(c.A, {
              header: y(E.DZ.cph_loggedin_nochar_title),
              subheader: y(E.DZ.cph_loggedin_nochar_body),
              type: "button",
              action_text: y(E.DZ.cph_loggedin_nochar_button),
              link: H,
              className: xe.calloutNoChar,
              sectionName: E.DZ.cph_loggedin_nochar_title.defaultMessage,
              trackingData: {
                event: "cta_link_account",
                text: E.DZ.cph_loggedin_nochar_button.defaultMessage.toLowerCase(),
                link_url: H,
                element_placement: `callout section - ${E.DZ.cph_loggedin_nochar_title.defaultMessage}`
              }
            }), (0, R.jsx)("div", {
              className: w ? xe.rewardsTrackerWithData : xe.rewardsTracker,
              children: (0, R.jsx)(_e, {
                lockAllRewards: "gen8" === T
              })
            }), (0, R.jsx)(L, {}), (0, R.jsx)(c.A, {
              header: y(E.DZ.cph_callout_feedback_title),
              subheader: y(E.DZ.cph_callout_feedback_body),
              type: "button",
              action_text: y(E.DZ.cph_callout_feedback_button),
              link: "/gta-online/feedback",
              className: xe.feedback,
              sectionName: E.DZ.cph_callout_feedback_title.defaultMessage
            }), (0, R.jsx)(_.A, {
              titleSlug: "gta-online",
              className: xe.rating
            })]
          })]
        })
      }), g);
      var Te = s(60285),
        Ce = s(26889),
        Ne = s(39695),
        Oe = s(22778),
        ye = s(75638),
        Ge = s(22137);
      const We = e => {
          let {
            percentage: a
          } = e;
          const s = (0, i.useIntl)();
          return (0, R.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4dfe880bdee176361de156f4bb7a681",
            style: {
              "--percentage": a,
              "--fill": "#ffffff"
            },
            children: [(0, R.jsx)("h1", {
              "aria-hidden": !0,
              children: `${a}%`
            }), (0, R.jsx)("p", {
              "aria-hidden": !0,
              children: s.formatMessage(Ge.D.pln_career_progress_percentage_chart_title)
            }), (0, R.jsx)("span", {
              className: "rockstargames-sites-gta-gen9f783eb192ece1eb202a93cfd2927641a",
              children: s.formatMessage(Ge.D.pln_career_progress_percentage_chart_title_full, {
                percentage: a
              })
            })]
          })
        },
        De = {
          pillBtn: "rockstargames-sites-gta-gen9ac0abd90ce959fc8b48bc285949add59",
          selected: "rockstargames-sites-gta-gen9d28124732a63c7f4aa42d640e45d2772",
          tierProgress: "rockstargames-sites-gta-gen9e2e8894a3c2986523a62262102289496",
          completedByTiersWrapper: "rockstargames-sites-gta-gen9bfe7973d42a561d2816ad9d5e7893a7b",
          tierProgressBar: "rockstargames-sites-gta-gen9af6b75db6293d44639cdf258f8e70ba5",
          progressCount: "rockstargames-sites-gta-gen9b4f98bc4930563819f2e5decf213f018",
          completedCount: "rockstargames-sites-gta-gen9f3a85297a646100652204b1d5140f6aa",
          total: "rockstargames-sites-gta-gen9d558da93bbea53a1cdc12fe9eb83f0f0"
        },
        ze = e => {
          let {
            totalByTiersArray: a,
            completedByTiersArray: s
          } = e;
          return (0, R.jsx)("div", {
            className: [De.tierProgress].join(" "),
            children: a?.map(((e, a) => {
              const r = isNaN(s[a]) ? 0 : s[a];
              return (0, R.jsxs)("div", {
                children: [(0, R.jsx)("div", {
                  children: `Tier ${a+1}`
                }), (0, R.jsxs)("div", {
                  className: De.completedByTiersWrapper,
                  children: [(0, R.jsx)(w, {
                    percentage: r / e * 100,
                    classes: De.progressBar
                  }), (0, R.jsxs)("div", {
                    className: De.progressCount,
                    children: [(0, R.jsx)("span", {
                      className: De.completedCount,
                      children: r
                    }), "/", (0, R.jsx)("span", {
                      className: De.total,
                      children: e
                    })]
                  })]
                })]
              }, a)
            }))
          })
        };
      var Ve = s(1197);
      const Le = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc67e6abd52f78e607ea6d25a07c3183.jpg",
        Me = {
          pillBtn: "rockstargames-sites-gta-gen9d50d8cd5b3eec8f7c894db8af5987f02",
          selected: "rockstargames-sites-gta-gen9e9be2006519ee9faa04f9973e9e76feb",
          loading: "rockstargames-sites-gta-gen9c09c6d1adb0a1e38b1aed8df334519cc",
          unavailable: "rockstargames-sites-gta-gen9ca349dd61996a0ba81d804e6a45393c1",
          navMenuMain: "rockstargames-sites-gta-gen9de33295e5be5081df175d0cec362a151",
          packListing: "rockstargames-sites-gta-gen9fd7672f7fe996a4e03dc21bfc4e8705d",
          packPageBanner: "rockstargames-sites-gta-gen9b6796f16b03f27635c7ad5c2bd6dc2a2",
          gen9PackPageBanner: "rockstargames-sites-gta-gen9ddd6652b8fd99dad0d9698efcf6017c1",
          packPageContent: "rockstargames-sites-gta-gen9b0a171643e76788e847638d1500c86fe",
          packPageCPH: "rockstargames-sites-gta-gen9f27e806f10cca11bee3106e009c7b6a4",
          colLeft: "rockstargames-sites-gta-gen9f9972e583ce1b7d6c4dbc6153af55f2a",
          titleHeading: "rockstargames-sites-gta-gen9bd61073b637eab6898f804125083ab68",
          colRight: "rockstargames-sites-gta-gen9a6908154578175e809d990035e699ce3",
          cppButton: "rockstargames-sites-gta-gen9d22976936798680b466e958f0beb3c9c",
          signInContent: "rockstargames-sites-gta-gen9ad4912f0e63ad5ee9a064224a7fb52b7",
          signInButton: "rockstargames-sites-gta-gen9cb1c95868fdde1dfb0b1291e9997bf4b",
          signUpContent: "rockstargames-sites-gta-gen9e2d046780a31e902574ea810c9dd3249",
          signUpUrl: "rockstargames-sites-gta-gen9a9c6c7da940a911d861b20f48dad11fb",
          linkAccountButton: "rockstargames-sites-gta-gen9ff923db9f98172b4a2f8fc817d41239c",
          open: "rockstargames-sites-gta-gen9ebaf9d1cbddd97f2604408670c788fc8",
          close: "rockstargames-sites-gta-gen9bc9becde0b63f0d05727c6db9babdafc",
          authContent: "rockstargames-sites-gta-gen9ad77579c7958b304cca96d66a142fe3e",
          gen8ColLeft: "rockstargames-sites-gta-gen9ab7b8436425f2092df162dfd67d4ed62",
          infoTooltip: "rockstargames-sites-gta-gen9daca9d5436325d23e3c20a76bd439167",
          infoTooltipOverlay: "rockstargames-sites-gta-gen9a880799ef781e1d75dd112973a9296e2",
          tiersCompletedContent: "rockstargames-sites-gta-gen9c39c2411e4ab690a338e9bf78aa40c72",
          gen9PackHeader: "rockstargames-sites-gta-gen9e9bcc928358e2a236a01a4451c9c897e",
          progressBtn: "rockstargames-sites-gta-gen9e5c714b3d75663fb51e3d611e12f2852",
          progressBtnIcon: "rockstargames-sites-gta-gen9a43aa63ada360df7d16890615b97d52f",
          expanded: "rockstargames-sites-gta-gen9bc43157c63bddcd96c0db0dbc323c102",
          collapsed: "rockstargames-sites-gta-gen9a6971e9849d43bae0ec93c2afd9dd506",
          packListMenu: "rockstargames-sites-gta-gen9b345360dbc694e618794437a0600f154",
          packList: "rockstargames-sites-gta-gen9b09ba045c8c05403707c2875ec8ec27e",
          packCard: "rockstargames-sites-gta-gen9d3e6fc11f817c5688908fba9ce054499"
        },
        Be = (0, i.withIntl)((() => {
          const e = (0, i.useIntl)(),
            {
              track: a
            } = (0, d.useGtmTrack)(),
            {
              data: s,
              loggedIn: o
            } = (0, d.useRockstarUser)(),
            {
              selectedCharacterTuple: c
            } = (0, d.useRockstarUserState)(),
            {
              signup: _,
              authHost: p,
              clientId: g
            } = (0, l.getScConfigForOrigin)(),
            {
              isTablet: h,
              isMobile: b
            } = (0, l.useWindowResize)(),
            {
              contextSafe: f
            } = (0, ye.useGSAP)(),
            {
              ref: k,
              inView: E
            } = (0, u.useInView)({
              threshold: .6
            }),
            [S, v] = (0, r.useState)([0, 0, 0, 0]),
            [j, w] = (0, r.useState)([0, 0, 0, 0]),
            [x, A] = (0, r.useState)(0),
            [P, I] = (0, r.useState)(null),
            [T, C] = (0, r.useState)(null),
            [N, O] = (0, r.useState)(!1),
            [y, G] = (0, r.useState)((s?.characters?.gtao?.length ?? 0) > 0),
            [W, D] = (0, r.useState)(!1),
            [z, V] = (0, r.useState)(0),
            [L, M] = (0, r.useState)([]),
            [B, H] = (0, r.useState)(!1),
            [U, Z] = (0, r.useState)(!1),
            F = (0, r.useRef)(null),
            $ = (0, r.useRef)(null),
            X = (0, r.useRef)(null),
            Y = (0, r.useRef)(null),
            q = (0, l.useLocale)(),
            K = (0, l.toScLocaleString)(q),
            J = (0, m.useRockstarToken)(),
            Q = `${document.location.pathname}${document.location.search}`,
            ee = `${document.location.origin}/auth/sc-auth-login?returnUrl=${encodeURIComponent(Q)}`,
            ae = `${_}&returnUrl=${encodeURIComponent(Q)}&lang=${K}`,
            se = e => `https://${p}.rockstargames.com/tpa/${e}/link/?cid=${g}&lang=${K}&returnUrl=${encodeURIComponent(Q)}&accessToken=${J}`,
            {
              data: re,
              allData: te,
              loading: oe
            } = (0, de.A)(),
            ce = !!re?.length,
            ne = {
              event: "cta_login",
              text: Ge.D.pln_career_progress_header_signin_label.defaultMessage,
              link_url: ee,
              element_placement: "career progress page"
            },
            _e = {
              event: "cta_signup",
              text: Ge.D.pln_career_progress_header_signup_label.defaultMessage,
              link_url: ae,
              element_placement: "career progress page"
            },
            ie = {
              event: "tool_tip_hover",
              display_type: b ? "mobile" : "desktop",
              element_placement: "career progress page"
            },
            le = {
              event: "page_section_impression",
              element_placement: "career progress page module"
            },
            pe = {
              event: B ? "cta_expand" : "cta_collapse",
              element_placement: "career progress page"
            };
          (0, r.useEffect)((() => {
            if (Array.isArray(c)) {
              const e = c?.[0];
              O((0, l.getGen9Consoles)().includes(e))
            }
          }), [String(c)]), (0, r.useEffect)((() => {
            let e = 0,
              a = 0;
            const s = [0, 0, 0, 0],
              r = [0, 0, 0, 0];
            if (te?.length > 0) {
              te[0].subNavItems.forEach((s => {
                e += s.tiers?.length ?? 0, a += s.tiers?.filter((e => e.isComplete)).length ?? 0
              })), te[0].subNavItems.forEach((e => {
                e.tiers?.forEach(((e, a) => {
                  s[a] += 1, e?.isComplete && (r[a] += 1)
                }))
              }));
              const t = a / e * 100,
                o = t < 1 && t > 0 ? Math.ceil(t) : Math.round(t);
              v(s), w(r), A(isNaN(o) ? 0 : o)
            }
          }), [te]), (0, r.useEffect)((() => {
            if (void 0 !== te && te.length > 0) {
              const a = [{
                title: e.formatMessage(Ge.D.pln_career_progress_all_chip_title),
                name: "all",
                subNavItems: te[0].subNavItems
              }, ...re];
              M(a)
            }
          }), [te]);
          const ge = (0, r.useCallback)(((e, s, r, t, o) => {
              ((e, s, r, t, o, c) => {
                a({
                  event: "card_click",
                  text: o?.toLowerCase() || "",
                  link_url: r,
                  element_placement: s,
                  card_id: c?.toLowerCase(),
                  card_name: c?.toLowerCase(),
                  position: e + 1
                })
              })(o, `Card > ${re[z].title} > ${e}`, r, re[z].title, s, e)
            }), [L, z, a]),
            me = f((() => {
              X?.current && !B ? (t.gsap.to(X?.current, {
                height: "auto",
                autoAlpha: 1,
                duration: .3,
                ease: t.Power2.easeInOut
              }), H(!B)) : (t.gsap.to(X?.current, {
                height: "0px",
                autoAlpha: 0,
                duration: .3,
                ease: t.Power2.easeInOut
              }), H(!B)), a({
                ...pe
              })
            })),
            he = e => {
              "Escape" === e.code && (be(), F?.current?.focus())
            };
          (0, r.useEffect)((() => (U ? document.addEventListener("keydown", he) : document.removeEventListener("keydown", he), () => {
            document.removeEventListener("keydown", he)
          })), [U]);
          const ue = (0, r.useCallback)((() => {
              Z(!0)
            }), []),
            be = (0, r.useCallback)((() => {
              Z(!1)
            }), []);
          return (0, ye.useGSAP)((() => {
            $?.current && (U ? (t.gsap.to($?.current, {
              visibility: "visible",
              autoAlpha: 1,
              y: 10,
              duration: .3,
              ease: t.Power2.easeInOut
            }), a({
              ...ie
            })) : t.gsap.to($?.current, {
              visibility: "hidden",
              autoAlpha: 0,
              y: 0,
              duration: .3,
              ease: t.Power2.easeInOut
            }))
          }), {
            dependencies: [$?.current, U]
          }), (0, r.useEffect)((() => {
            o ? (G(s?.characters?.gtao?.length > 0), y ? (I(e.formatMessage(Ge.D.pln_career_progress_header_title)), C(N ? e.formatMessage(Ge.D.pln_career_progress_header_body_gen9) : e.formatMessage(Ge.D.pln_career_progress_header_body))) : (I(e.formatMessage(Ge.D.pln_career_progress_link_console_account_title)), C(e.formatMessage(Ge.D.pln_career_progress_link_console_account_description)))) : (I(e.formatMessage(Ge.D.pln_career_progress_header_title)), C(e.formatMessage(Ge.D.pln_career_progress_header_body_gen9)))
          }), [o, y, N, e.locale, s?.characters?.gtao?.length]), (0, r.useEffect)((() => {
            E && !W && (a({
              ...le
            }), D(!0))
          }), [E]), oe || null === o ? (0, R.jsx)("div", {
            className: Me.loading,
            children: (0, R.jsx)(n.A, {
              type: "SPINNING"
            })
          }) : (0, R.jsxs)("div", {
            ref: k,
            "data-testid": "pack-page",
            className: [Me.packListing, Me.navContainer].join(" "),
            style: {
              "--background-image-desktop": `url(${Le})`,
              "--background-image-mobile": `url(${Le})`
            },
            children: [(0, R.jsx)("div", {
              className: (0, Re.classList)(Me.packPageBanner, N ? "" : Me.gen9PackPageBanner),
              children: (0, R.jsxs)("div", {
                className: Me.packPageContent,
                children: [(0, R.jsxs)("div", {
                  className: (0, Re.classList)(Me.packPageCPH, o && y && !N ? Me.gen9PackHeader : ""),
                  children: [(0, R.jsx)("div", {
                    className: (0, Re.classList)(Me.colLeft, o && !N ? Me.gen8ColLeft : ""),
                    children: (0, R.jsxs)("div", {
                      className: Me.titleHeading,
                      children: [(0, R.jsx)("h1", {
                        children: P
                      }), (0, R.jsx)("p", {
                        children: T
                      })]
                    })
                  }), o ? (0, R.jsxs)(R.Fragment, {
                    children: [y && (0, R.jsxs)(R.Fragment, {
                      children: [(0, R.jsxs)("div", {
                        "data-testid": "logged-in-with-characters",
                        className: Me.colRight,
                        style: {
                          display: N ? "flex" : "none"
                        },
                        children: [(0, R.jsx)("div", {
                          ref: F,
                          className: Me.infoTooltip,
                          onMouseEnter: ue,
                          onMouseLeave: be,
                          onFocus: ue,
                          onBlur: be,
                          "aria-label": e.formatMessage(Ge.D.pln_career_progress_header_tooltip_aria_label),
                          tabIndex: 0
                        }), (0, R.jsx)("div", {
                          role: "tooltip",
                          ref: $,
                          className: Me.infoTooltipOverlay,
                          children: (0, R.jsx)(ze, {
                            totalByTiersArray: S,
                            completedByTiersArray: j
                          })
                        }), (0, R.jsx)(We, {
                          percentage: x
                        }), (0, R.jsx)("div", {
                          ref: X,
                          className: Me.tiersCompletedContent,
                          children: (0, R.jsx)(ze, {
                            totalByTiersArray: S,
                            completedByTiersArray: j
                          })
                        })]
                      }), N && (0, R.jsx)("button", {
                        ref: Y,
                        type: "button",
                        className: Me.progressBtn,
                        onClick: me,
                        children: (0, R.jsx)("div", {
                          className: (0, Re.classList)(Me.progressBtnIcon, B ? Me.expanded : Me.collapsed)
                        })
                      })]
                    }), !y && (0, R.jsx)("div", {
                      "data-testid": "logged-in-no-characters",
                      className: (0, Re.classList)(Me.colRight, h ? Me.authContent : ""),
                      children: (0, R.jsx)("div", {
                        className: Me.signInContent,
                        children: (0, R.jsx)(Ne.A, {
                          variant: "gen9",
                          className: (0, Re.classList)([Me.linkAccountButton]),
                          buttonText: e.formatMessage(Ge.D.pln_career_progress_link_console_account),
                          platformsAndLinks: [{
                            href: se("np"),
                            key: "ps",
                            platform: "ps",
                            translated: !0
                          }, {
                            href: se("xbox"),
                            key: "xbox",
                            platform: "xbox",
                            translated: !0
                          }],
                          trackingType: "link_account",
                          trackingParent: "career progress",
                          target: "_self"
                        })
                      })
                    })]
                  }) : (0, R.jsx)("div", {
                    "data-testid": "logged-out-sign-in-required",
                    className: (0, Re.classList)(Me.colRight, h ? Me.authContent : ""),
                    children: (0, R.jsxs)("div", {
                      className: Me.signInContent,
                      children: [(0, R.jsx)(Oe.A, {
                        to: ee,
                        onClick: ne && (() => a({
                          ...ne
                        })),
                        className: Me.cppButton,
                        children: e.formatMessage(Ge.D.pln_career_progress_header_signin_label)
                      }), (0, R.jsxs)("div", {
                        className: Me.signUpContent,
                        children: [(0, R.jsx)("p", {
                          children: e.formatMessage(Ge.D.pln_career_progress_header_signup_account)
                        }), (0, R.jsx)(Te.A, {
                          to: ae,
                          role: "button",
                          className: Me.signUpUrl,
                          onClick: _e && (() => a({
                            ..._e
                          })),
                          children: e.formatMessage(Ge.D.pln_career_progress_header_signup_label)
                        })]
                      })]
                    })
                  })]
                }), ce && (0, R.jsx)(Ve.A, {
                  navItems: L,
                  category: L[z]?.name,
                  setCategory: V
                })]
              })
            }), ce ? (0, R.jsx)(Ce.A, {
              packCardClassName: Me.packCard,
              packListClassName: Me.packList,
              packGridClassName: Me.packListGrid,
              packListItems: L[z]?.subNavItems ?? [],
              selectPackCard: ge
            }) : (0, R.jsx)("div", {
              className: Me.unavailable,
              children: (0, R.jsx)(n.A, {
                type: "SPINNING"
              })
            })]
          })
        }), g),
        He = Ie
    },
    22137: (e, a, s) => {
      "use strict";
      s.d(a, {
        D: () => r
      });
      const r = (0, s(96717).defineMessages)({
        pln_career_progress_unavailable: {
          id: "pln_career_progress_unavailable",
          defaultMessage: "Sorry, career progress pack cards are currently unavailable."
        },
        pln_career_progress_all_chip_title: {
          id: "pln_career_progress_all_chip_title",
          defaultMessage: "All"
        },
        pln_career_progress_header_signin_label: {
          id: "pln_career_progress_header_signin_label",
          defaultMessage: "Sign In"
        },
        pln_career_progress_header_signup_label: {
          id: "pln_career_progress_header_signup_label",
          defaultMessage: "Create An Account"
        },
        pln_career_progress_header_signup_account: {
          id: "pln_career_progress_header_signup_account",
          defaultMessage: "Don't have an account?"
        },
        pln_career_progress_link_console_account: {
          id: "pln_career_progress_link_console_account",
          defaultMessage: "Link A Game Account"
        },
        pln_career_progress_link_console_account_title: {
          id: "pln_career_progress_link_console_account_title",
          defaultMessage: "Link a GTA Online Character"
        },
        pln_career_progress_link_console_account_description: {
          id: "pln_career_progress_link_console_account_description",
          defaultMessage: "We couldn't find a GTA Online character linked to your Rockstar Games account. Link one or switch to a different Rockstar Games account."
        },
        pln_career_progress_header_tooltip_aria_label: {
          id: "pln_career_progress_header_tooltip_aria_label",
          defaultMessage: "Tiers Info tooltip"
        },
        pln_career_progress_header_title: {
          id: "pln_career_progress_header_title",
          defaultMessage: "Career Progress"
        },
        pln_career_progress_header_body: {
          id: "pln_career_progress_header_body",
          defaultMessage: "Learn more about a huge range of Grand Theft Auto Online updates, and discover special challenges and rewards only available on PS5 and Xbox Series X|S."
        },
        pln_career_progress_header_body_gen9: {
          id: "pln_career_progress_header_body_gen9",
          defaultMessage: "See all the challenges you've completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks."
        },
        pln_career_progress_percentage_chart_title: {
          id: "pln_career_progress_percentage_chart_title",
          defaultMessage: "Complete"
        },
        pln_career_progress_percentage_chart_title_full: {
          id: "pln_career_progress_percentage_chart_title_full",
          defaultMessage: "Your career progress is {percentage}% completed."
        },
        pln_scroll_left: {
          id: "pln_scroll_left",
          defaultMessage: "Scroll Left"
        },
        pln_scroll_right: {
          id: "pln_scroll_right",
          defaultMessage: "Scroll Right"
        }
      })
    },
    4248: (e, a, s) => {
      var r = {
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T1.jpg": 22168,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T2.jpg": 55015,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T3.jpg": 42858,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4.jpg": 28601,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4_CASH.jpg": 2219,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4_RP.jpg": 84580,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T1.jpg": 74425,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T2.jpg": 59406,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T3.jpg": 55243,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T4.jpg": 51640,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T4_CASH.jpg": 56268,
        "./PROGRESS_BUSINESSES_PREVIEW_BAIL_OFFICE_REWARD_T4_RP.jpg": 47095,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T1.jpg": 73394,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T2.jpg": 92349,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T3.jpg": 66784,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4.jpg": 7091,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4_CASH.jpg": 46733,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4_RP.jpg": 9410,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T1.jpg": 42046,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T2.jpg": 21641,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T3.jpg": 66380,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4.jpg": 72695,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4_CASH.jpg": 42497,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4_RP.jpg": 18038,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T1.jpg": 60742,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T2.jpg": 18513,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T3.jpg": 21140,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4.jpg": 41951,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4_CASH.jpg": 35577,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4_RP.jpg": 50174,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T1.jpg": 13706,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T2.jpg": 54197,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T3.jpg": 93016,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4.jpg": 96619,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4_CASH.jpg": 85781,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4_RP.jpg": 58490,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T1.jpg": 20247,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T2.jpg": 86024,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T3.jpg": 48389,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4.jpg": 53918,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4_CASH.jpg": 53714,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4_RP.jpg": 76969,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T1.jpg": 99777,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T2.jpg": 10198,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T3.jpg": 73363,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4.jpg": 2432,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4_CASH.jpg": 85764,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4_RP.jpg": 6444,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T1.jpg": 75698,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T2.jpg": 85597,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T3.jpg": 12083,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4.jpg": 17299,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4_CASH.jpg": 77357,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4_RP.jpg": 44290,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T1.jpg": 44085,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T2.jpg": 3594,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T3.jpg": 15751,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4.jpg": 61340,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4_CASH.jpg": 19696,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4_RP.jpg": 13163,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T1.jpg": 56319,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T2.jpg": 71984,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T3.jpg": 72909,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T4.jpg": 75110,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T4_CASH.jpg": 89418,
        "./PROGRESS_CONTACT_PREVIEW_CHICKEN_REWARD_T4_RP.jpg": 7057,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T1.jpg": 43304,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T2.jpg": 54231,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T3.jpg": 83066,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4.jpg": 19529,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4_CASH.jpg": 83099,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4_RP.jpg": 59316,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T1.jpg": 14507,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T2.jpg": 89340,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T3.jpg": 33689,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4.jpg": 31594,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4_CASH.jpg": 61086,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4_RP.jpg": 20325,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T1.jpg": 13954,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T2.jpg": 46093,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T3.jpg": 18992,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4.jpg": 33795,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4_CASH.jpg": 84381,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4_RP.jpg": 57586,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T1.jpg": 40261,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T2.jpg": 17658,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T3.jpg": 12119,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4.jpg": 57772,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4_CASH.jpg": 14944,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4_RP.jpg": 60763,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T1.jpg": 85202,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T2.jpg": 95101,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T3.jpg": 39520,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4.jpg": 10451,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4_CASH.jpg": 85645,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4_RP.jpg": 83938,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T1.jpg": 48732,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T2.jpg": 40715,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T3.jpg": 62670,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4.jpg": 8789,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4_CASH.jpg": 39991,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4_RP.jpg": 69808,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T1.jpg": 77210,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T2.jpg": 50789,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T3.jpg": 6824,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4.jpg": 11707,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4_CASH.jpg": 87365,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4_RP.jpg": 45578,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T1.jpg": 49849,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T2.jpg": 69582,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T3.jpg": 47627,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4.jpg": 888,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4_CASH.jpg": 69356,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4_RP.jpg": 45399,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T1.jpg": 72468,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T2.jpg": 66947,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T3.jpg": 28422,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4.jpg": 9869,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4_CASH.jpg": 71903,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4_RP.jpg": 62024,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T1.jpg": 61012,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T2.jpg": 62819,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T3.jpg": 98118,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4.jpg": 75117,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4_CASH.jpg": 79775,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4_RP.jpg": 14888,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T1.jpg": 53554,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T3.jpg": 12320,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T4.jpg": 78803,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T1.jpg": 47025,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T2.jpg": 89254,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T3.jpg": 27779,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4.jpg": 86128,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH.jpg": 5108,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH_LARGE.jpg": 3827,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH_SMALL.jpg": 72044,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP.jpg": 48655,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP_LARGE.jpg": 45923,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP_SMALL.jpg": 9739,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T1.jpg": 12952,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T2.jpg": 50407,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T3.jpg": 94570,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4.jpg": 65465,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4_CASH.jpg": 66251,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4_RP.jpg": 20644,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T1.jpg": 23363,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T2.jpg": 45236,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T3.jpg": 42609,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4.jpg": 53378,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4_CASH.jpg": 36134,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4_RP.jpg": 69309,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T1.jpg": 20338,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T2.jpg": 74493,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T3.jpg": 6400,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4.jpg": 96563,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4_CASH.jpg": 70317,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4_RP.jpg": 14466,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T1.jpg": 43822,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T2.jpg": 58841,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T3.jpg": 14492,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4.jpg": 68903,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4_CASH.jpg": 54385,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4_RP.jpg": 24070,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T1.jpg": 22366,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T2.jpg": 13865,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T3.jpg": 16076,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4.jpg": 76311,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4_CASH.jpg": 81249,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4_RP.jpg": 8406,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T1.jpg": 7669,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T2.jpg": 56682,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T3.jpg": 79335,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4.jpg": 71900,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4_CASH.jpg": 29136,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4_RP.jpg": 76523,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T1.jpg": 56010,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T2.jpg": 31733,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T3.jpg": 27416,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4.jpg": 90507,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4_CASH.jpg": 79029,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4_RP.jpg": 95930,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T1.jpg": 4800,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T2.jpg": 18415,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T3.jpg": 46034,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4.jpg": 71521,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4_CASH.jpg": 98595,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4_RP.jpg": 7404,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T1.jpg": 17086,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T2.jpg": 13033,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T3.jpg": 41420,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4.jpg": 47735,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4_CASH.jpg": 87585,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4_RP.jpg": 43414
      };

      function t(e) {
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      t.keys = function() {
        return Object.keys(r)
      }, t.resolve = o, e.exports = t, t.id = 4248
    },
    88447: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e4f1388056b8ee74c87bc86b2107648b.svg"
    },
    22168: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f5cfd7d54ad7c2528b508e2b22a484a4.jpg"
    },
    55015: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e9ffa532ef5016daad8493cd346628ae.jpg"
    },
    42858: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbb9dd70f8930d047a63131d014ca99e.jpg"
    },
    28601: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8df45133877b2d2b6e8c8d89dcfc93c.jpg"
    },
    2219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    84580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    74425: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d004258651d4b28b1eb42c62ce46f5e0.jpg"
    },
    59406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/db1933f6d65611f72d9524325f504f3e.jpg"
    },
    55243: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/88f0ba90613b3e92a247d156fdd96911.jpg"
    },
    51640: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e9e2850486fd9a90cd3f2c551c4a7ab.jpg"
    },
    56268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    47095: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    73394: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4b3d2387f39a68bb5f76eb71cea9d004.jpg"
    },
    92349: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e60904ee697a602c959024d456d842d8.jpg"
    },
    66784: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f45f3594fe147f50d1192a2ac82fe409.jpg"
    },
    7091: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5175a1a707b9727fdfe3b3004749afff.jpg"
    },
    46733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    9410: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    42046: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac19ba9d81b559aae33c79b248852edc.jpg"
    },
    21641: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceea26325917ceb21c0f696dda936d83.jpg"
    },
    66380: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36598cdddf8e4e48ea2088143218cb70.jpg"
    },
    72695: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/873907cfb98d823251c060f38a0f94c1.jpg"
    },
    42497: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    18038: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    60742: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cbb36284927e01e17bc4cebcb15f7a3b.jpg"
    },
    18513: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0dac3d506a6bbc45c1e69057116f090f.jpg"
    },
    21140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70fa0fecfc148d254c5d4a3d0597014a.jpg"
    },
    41951: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36c8b2a88cd5c85a910409753193e082.jpg"
    },
    35577: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    50174: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    13706: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/738ff75ecbbd0b10f520008cf0ed55e4.jpg"
    },
    54197: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9af6f453dad2c06a02167c55d70e2857.jpg"
    },
    93016: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56300c3ecd82257e0cc4daf401b68484.jpg"
    },
    96619: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d9dc75558f49b4294336d784804ebf33.jpg"
    },
    85781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    58490: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    20247: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0fe57a53f63a5052a1b61ebc2e2aa0c.jpg"
    },
    86024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/956f4cb0e9f776e992f8746d19e21d36.jpg"
    },
    48389: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c4c0606b30d7ceff30c20678f2f406d.jpg"
    },
    53918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0ea538130c115745d6c663e34235300e.jpg"
    },
    53714: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    76969: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    99777: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/329ba3f5dd165e867e3bffb4a1313a4b.jpg"
    },
    10198: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81ff30c53e70ab68713a91755a904448.jpg"
    },
    73363: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/20986a8f9b5eff60740abbbcaf5763a1.jpg"
    },
    2432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46fd71f9a71bbe6801ee02f2d831896a.jpg"
    },
    85764: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    6444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    75698: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab17ff9e69584963068de0d98e8fe15a.jpg"
    },
    85597: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/66bf9fc50889cf4565af70b2bd966736.jpg"
    },
    12083: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/28009d14aa0c5105aa7f0428fde05dff.jpg"
    },
    17299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/83821cbe9fbdd65c74fefff8b9e6b3a1.jpg"
    },
    77357: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    44290: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    44085: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9f141dcc88ad8f93e988fc7be7a115d6.jpg"
    },
    3594: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/236ce971c6378875cf84505688107dc1.jpg"
    },
    15751: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e4afb9735018b6ec08bccbaa8ca2ab1.jpg"
    },
    61340: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5139857e057cd137a1fcc80142c8e008.jpg"
    },
    19696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    13163: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    56319: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753435f901b1fc6a0e9a22a1998390b6.jpg"
    },
    71984: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d588977ea29e4de8310c999d6c538830.jpg"
    },
    72909: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0dfe28ebbe27256c508aba3625f1d05f.jpg"
    },
    75110: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/363f2f912a6275812334148aadd6570e.jpg"
    },
    89418: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    7057: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    43304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9495626fd2e54c715b428ab5a084d67b.jpg"
    },
    54231: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/087f0a5089d563d4cd903fc31997adc3.jpg"
    },
    83066: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/953dcaaedefb500d80b5599fe891d649.jpg"
    },
    19529: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8d3469e461dfaf53704716cf0c00122b.jpg"
    },
    83099: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    59316: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    14507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ce4e5f5c1e08e403a29056957315fc70.jpg"
    },
    89340: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/235ef607bbc5f169e6166094fbbfef20.jpg"
    },
    33689: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/225bcea92ddd1c9528699452b2f327f0.jpg"
    },
    31594: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c3abe3172b838ef4238c451e4f32169.jpg"
    },
    61086: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    20325: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    13954: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d7b04f2fd07d8df02ae13ff38f9bd014.jpg"
    },
    46093: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04bea6c58ca9aa41fa8ea4b68326a24a.jpg"
    },
    18992: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8bf8db232caaeeb346240890b5a16dd4.jpg"
    },
    33795: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac7f847bf384a736ea24f7c3d8efcdfe.jpg"
    },
    84381: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    57586: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    40261: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9e7cf9b504b6bcd0e383be9788dbc65b.jpg"
    },
    17658: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8e9bfe51ea55e6427b0fff3576de1ee9.jpg"
    },
    12119: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7dc74b193ca7f10045ddea5c7d49e7c8.jpg"
    },
    57772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d680a00ae7fffa73f72b07db2a614f43.jpg"
    },
    14944: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    60763: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    85202: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/17ae05873860d112435453bd173d5bdb.jpg"
    },
    95101: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/737e68b4d76af1eacc848e7c6a963bb3.jpg"
    },
    39520: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c5c74e61cbc6654ab3bce73a44a1b807.jpg"
    },
    10451: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e44c0719cc6c8fa967ae4411b9002429.jpg"
    },
    85645: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    83938: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    48732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd75fc7fb83019e8c526dc521934be46.jpg"
    },
    40715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29b7ca2cb558db181179f586337f027f.jpg"
    },
    62670: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8421dda7574225355d6890559c56d703.jpg"
    },
    8789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d9054e4a51b6f5edaed278f85849e87a.jpg"
    },
    39991: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    69808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    77210: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f26193017bef03e33259bc6e8b6a301.jpg"
    },
    50789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2105e961212bb2f553b78a8d98ca24f8.jpg"
    },
    6824: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4e803de2820b2174e7d6b81c150aa9f7.jpg"
    },
    11707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f8b819cc8bc440a40536052f10430e6.jpg"
    },
    87365: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    45578: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    49849: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/410f33763371922183d17770a4bbf045.jpg"
    },
    69582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a64e5693c9fd896ef4b44db42cdfb0a2.jpg"
    },
    47627: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eb96774621ed85029a0dac88015f5623.jpg"
    },
    888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0675692943c33185c823650fb2f7d59a.jpg"
    },
    69356: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    45399: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    72468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/704ae57732ba4aeb39b14c2a62eb5833.jpg"
    },
    66947: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/69cf4dfeaa6b7259a19d11eb34b8ad12.jpg"
    },
    28422: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d552466403ac9b72164dbbc7ea108d6d.jpg"
    },
    9869: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4ae3a45ad0be6ad0c5f52586d6b3206f.jpg"
    },
    71903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    62024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    61012: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f3cd7bceb936bb313fbaa15e89098a8.jpg"
    },
    62819: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/25b661f5c750aeb7fa588fafba90f1cc.jpg"
    },
    98118: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d200b610eaff3bc9afb0e8a1a8bf742b.jpg"
    },
    75117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bc0954f8adbca56f82b725bdc78299e8.jpg"
    },
    79775: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    14888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    53554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7d2f7159e42c4941f90cc07ef61f4bcb.jpg"
    },
    12320: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2618797c7dc1e931867b1d8c4ae4be2.jpg"
    },
    78803: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b332167e59f22f23080b67f8112e82b1.jpg"
    },
    47025: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7d2f7159e42c4941f90cc07ef61f4bcb.jpg"
    },
    89254: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8c3fcd27f71840154cd5e70cf58dfe87.jpg"
    },
    27779: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2618797c7dc1e931867b1d8c4ae4be2.jpg"
    },
    86128: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b332167e59f22f23080b67f8112e82b1.jpg"
    },
    5108: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    3827: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    72044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    48655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    45923: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    9739: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    12952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/568a5ea8d40c934070ccb0d027415537.jpg"
    },
    50407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc26b040f6c53b4212633bfc75c69b57.jpg"
    },
    94570: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8c92e45735dea4bf0f824a0fc9700949.jpg"
    },
    65465: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56b4a94be3120ac7de3432404984e52a.jpg"
    },
    66251: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    20644: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    23363: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/119d114ce10c16621e545c2650b5912e.jpg"
    },
    45236: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1db4f57aeface686dfd0d036908b341e.jpg"
    },
    42609: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9e8a66b52eaed1eb5e7063b0f92f65e6.jpg"
    },
    53378: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/567f38ce806bc29390ba84ea1bf4a1a1.jpg"
    },
    36134: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    69309: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    20338: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/42c9214da8b17b7f4cc9c05b2b511e3b.jpg"
    },
    74493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4f2ee06e20eea5691910888a58c25c.jpg"
    },
    6400: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/317683a193310bb03e30549f72ca70aa.jpg"
    },
    96563: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/53cd24ba391ab62571bcecfb9fcd9101.jpg"
    },
    70317: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    14466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    43822: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a0281a740158d6596585ac6de511af6.jpg"
    },
    58841: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b6d8af1607180dc21ed96dd950dc0cb.jpg"
    },
    14492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8b4ac9af863cb3e25ec1776ddbd95303.jpg"
    },
    68903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/00bb0938efa404a0446c0390dfe904cf.jpg"
    },
    54385: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    24070: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    22366: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a8e7b43b4c2a827ba86e81c6689db03.jpg"
    },
    13865: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9cc957c5eadfb452622edb7bc7ce5555.jpg"
    },
    16076: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/06d481de52d0714190ca4395425c457d.jpg"
    },
    76311: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7e83d4dfaa73d3ed72b788705437a431.jpg"
    },
    81249: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    8406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    7669: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/92fbe71bb5f4b82b5c670de1ad251bea.jpg"
    },
    56682: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5fc7772067f8595434121b7270b0219b.jpg"
    },
    79335: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9503963789b50259c53761aba542ba72.jpg"
    },
    71900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/664e7d6817fada6320e966b12e2ad12d.jpg"
    },
    29136: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    76523: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    56010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f0266bf15e0340c0622f595b8b99cd80.jpg"
    },
    31733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fdafa37eedafeb1bae5be3fcb8eb2e28.jpg"
    },
    27416: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/28e4fd8cc9739277d38720566cf02775.jpg"
    },
    90507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e1a329ec5db576dda1663bf4438ea155.jpg"
    },
    79029: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    95930: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    4800: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a18049e11e58c7b0f18e4df61398aa62.jpg"
    },
    18415: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1640f11865a16ab8e9aa7c5bcd9ae17b.jpg"
    },
    46034: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d9ddb3bff2a20c6e89674a9767ba324.jpg"
    },
    71521: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b6f7dce0838752eac6bc6a9d82c37ba0.jpg"
    },
    98595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    7404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    17086: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0c1a2047eb6f0b36a6bf448c3f41da18.jpg"
    },
    13033: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d5c00db0a81daba487614068eb9314c.jpg"
    },
    41420: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/884600c480f1c290be4e203718263556.jpg"
    },
    47735: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5ef527fec88fb3e84bb737bf423e53e2.jpg"
    },
    87585: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    43414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    32155: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e4f1388056b8ee74c87bc86b2107648b.svg"
    },
    75748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d22169f1fd464ac49f654e2e075ee17.svg"
    }
  }
]);