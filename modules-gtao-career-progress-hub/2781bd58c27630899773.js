(self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [271], {
    2271: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => Ce
      });
      var s = t(4932),
        r = t(635),
        c = t(5436),
        o = t(8976),
        i = t(1570),
        n = t(9929),
        d = t(6711),
        m = t(4859),
        _ = t(4097),
        l = t(7154),
        p = t(6536);
      const g = {
        check: "_0713d670aa98ab78f655d629021584815694",
        bronze: "_0713d670aa98ab78a973aedae0dd2f9160d1",
        silver: "_0713d670aa98ab78c82fb80e3b3af77af1ab",
        gold: "_0713d670aa98ab78b19cf0bb0fd4567c8db0",
        platinum: "_0713d670aa98ab78ffe4e4dbddced01a6891",
        completed: "_0713d670aa98ab78e62b34e0d05ecd82d241"
      };
      var R = t(6160);
      const E = e => {
          let {
            alt: a,
            type: t,
            classes: s = ""
          } = e;
          return (0, R.jsx)("div", {
            className: [s, g.check, t ? g[t] : null].join(" "),
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
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              })]
            })
          })
        },
        S = {
          GUNRUNNING: 1471810592,
          LSDRUGWARS: -1859518261,
          CONTRACT: -392727791,
          AFTERHOURS: -1815199872,
          SMUGGLERSRUN: 1164011531,
          IMPORTEXPORT: -647547292,
          BIKERS: 315075481,
          FAIFAF: -1374101462,
          CAYOPERICOHEIST: -995532639,
          DIAMONDCASINOHEIST: 98960286,
          DOOMSDAY: 1942893817,
          HEISTS: -2044559582,
          PROJECTOVERTHROW: 1445486638,
          PAPERTRAIL: -961870614,
          SUPERYACHTLIFE: -431626303,
          GERALDSLASTPLAY: -192008291,
          PREMIUMDELUXREPO: 75069984,
          MADRAZODISPATCH: -2012307449,
          LOWRIDERS: -501692796,
          LSTUNERS: 320230760,
          DIAMONDCASINO: 1009355195,
          RACING: -344405389,
          SURVIVALS: 350693912,
          ADVERSARYMODE: -789968707,
          DEATHMATCHES: -1232781894,
          VEHICLE: -584819812,
          WEAPONS: -2143405780,
          ARENAWAR: -57043721
        },
        f = (0, i.defineMessages)({
          cph_awards_title: {
            id: "cph_awards_title",
            description: "Awards section title",
            defaultMessage: "Awards"
          },
          cph_awards_not_unlocked: {
            id: "cph_awards_not_unlocked",
            description: "Aria label when a metal level is not unlocked",
            defaultMessage: "Not unlocked"
          },
          cph_progress_bar_aria: {
            id: "cph_progress_bar_aria",
            description: "Label for progress bar on the Career Progress Hub",
            defaultMessage: "Progress Bar"
          },
          cph_progress_tracker_title: {
            id: "cph_progress_tracker_title",
            description: "Title for section on the Career Progress Hub",
            defaultMessage: "Career Progress"
          },
          cph_progress_tracker_tier_label: {
            id: "cph_progress_tracker_tier_label",
            description: "Tier list labels on the Career Progress Hub",
            defaultMessage: "Tier {number}"
          },
          cph_progress_challenges_title: {
            id: "cph_progress_challenges_title",
            description: "Title for Challenges section on the Career Progress Hub",
            defaultMessage: "Challenges"
          },
          cph_progress_rewards_title: {
            id: "cph_progress_rewards_title",
            description: "Title for Rewards section on the Career Progress Hub",
            defaultMessage: "Rewards"
          },
          cph_progress_rewards_view_all: {
            id: "cph_progress_rewards_view_all",
            description: "Title for View All button for Rewards on the Career Progress Hub",
            defaultMessage: "View All"
          },
          cph_progress_rewards_view_less: {
            id: "cph_progress_rewards_view_less",
            description: "Title for View Less button for Rewards on the Career Progress Hub",
            defaultMessage: "View Less"
          },
          cph_progress_close: {
            id: "cph_progress_close",
            description: "Label for close buttons for the Career Progress Hub (eg. to close a popup) on the Career Progress Hub",
            defaultMessage: "Close"
          },
          cph_nav_open: {
            id: "cph_nav_open",
            description: "Label for button which opens the secondary menu",
            defaultMessage: "Open Section Navigation"
          },
          cph_nav_close: {
            id: "cph_nav_close",
            description: "Label for button which closes the secondary menu",
            defaultMessage: "Close Section Navigation"
          },
          cph_nav_scroll_left: {
            id: "cph_nav_scroll_left",
            description: "Label for scroll left buttons for the Career Progress Hub navigation",
            defaultMessage: "Scroll Left"
          },
          cph_nav_scroll_right: {
            id: "cph_nav_scroll_right",
            description: "Label for scroll right buttons for the Career Progress Hub navigation",
            defaultMessage: "Scroll Right"
          },
          cph_intro_getting_started: {
            id: "cph_intro_getting_started",
            description: "Header for the getting started section",
            defaultMessage: "Getting Started"
          },
          cph_intro_guide_instruction: {
            id: "cph_intro_guide_instruction",
            description: "Instruction indicating which guide can be read",
            defaultMessage: "Read the {title} Guide to learn more."
          },
          cph_intro_guide_learn_more: {
            id: "cph_intro_guide_learn_more",
            description: "Label for link to guide",
            defaultMessage: "Learn more"
          },
          cph_progress_available_on: {
            id: "cph_progress_available_on",
            description: "Prepend for platforms that the feature is available on. Will be accompanied by platforms and Icons",
            defaultMessage: "Only available on"
          },
          cph_progress_available_on_aria_ps5: {
            id: "cph_progress_available_on_aria_ps5",
            description: "Platform name used in ARIA labels: Playstation 5",
            defaultMessage: "PlayStation®5"
          },
          cph_progress_available_on_aria_xbox: {
            id: "cph_progress_available_on_aria_xbox",
            description: "Platform name used in ARIA labels: Xbox Series X / S",
            defaultMessage: "Xbox Series X|S"
          },
          cph_login_prompt_title: {
            id: "cph_login_prompt_title",
            description: "Title of login prompt",
            defaultMessage: "Sign In to Track Your Progress"
          },
          cph_login_prompt_body: {
            id: "cph_login_prompt_body",
            description: "Body of login prompt",
            defaultMessage: "Sign in to Social Club to see all the rewards you can earn, the awards you've won, and the possibilities still ahead of you."
          },
          cph_login_prompt_button: {
            id: "cph_login_prompt_button",
            description: "Button text for login prompt",
            defaultMessage: "Sign In"
          },
          cph_login_prompt_button_helper: {
            id: "cph_login_prompt_button_helper",
            description: "Helper text for under login prompt button",
            defaultMessage: "Don't have an account?"
          },
          cph_login_prompt_button_helper_link: {
            id: "cph_login_prompt_button_helper_link",
            description: "Helper text link for under login prompt button",
            defaultMessage: "Join Social Club"
          },
          cph_callout_feedback_title: {
            id: "cph_callout_feedback_title",
            description: "Title for the feedback CalloutSection",
            defaultMessage: "Share Your Feedback"
          },
          cph_callout_feedback_body: {
            id: "cph_callout_feedback_body",
            description: "Body for the feedback CalloutSection",
            defaultMessage: "How are you enjoying GTA Online? Tell us your thoughts and ideas to help us shape the future of the game."
          },
          cph_callout_feedback_button: {
            id: "cph_callout_feedback_button",
            description: "Button text for the feedback CalloutSection",
            defaultMessage: "Give feedback"
          },
          cph_loggedin_nochar_title: {
            id: "cph_loggedin_nochar_title",
            defaultMessage: "Link a GTA Online Character",
            description: "Title for CTA when no character is found"
          },
          cph_loggedin_nochar_body: {
            id: "cph_loggedin_nochar_body",
            defaultMessage: "We couldn't find a GTA Online character linked to your Social Club account. Link one or switch to a different Social Club account.",
            description: "Body for CTA when no character is found"
          },
          cph_loggedin_nochar_button: {
            id: "cph_loggedin_nochar_button",
            defaultMessage: "Link a game account",
            description: "Button for CTA when no character is found"
          },
          cph_highlights_heading: {
            id: "cph_highlights_heading",
            defaultMessage: "Highlights",
            description: "Section header for highlights component"
          },
          cph_highlights_previous: {
            id: "cph_highlights_previous",
            description: "Aria label for button which select the previous item",
            defaultMessage: "Previous"
          },
          cph_highlights_next: {
            id: "cph_highlights_next",
            description: "Aria label for button which select the next item",
            defaultMessage: "Next"
          },
          cph_highlights_group_aria: {
            id: "cph_highlights_group_aria",
            description: "Aria label describing location in list",
            defaultMessage: "Highlight {index} of {total}"
          }
        }),
        b = (0, m.makeVar)({
          awardsKey: null,
          rewardsKey: null
        }),
        u = e => b({
          ...b(),
          awardsKey: e
        }),
        h = e => b({
          ...b(),
          rewardsKey: e
        }),
        k = () => {
          const e = (0, m.useReactiveVar)(b);
          return {
            setAwardsKey: u,
            setRewardsKey: h,
            state: e
          }
        },
        j = {
          metalLegend: "_0713d670aa98ab78c8d1762a4fe687d5e9e9",
          single: "_0713d670aa98ab78df1420450e4efd4364c4",
          completed: "_0713d670aa98ab78ff3997cc18b85ba129d0",
          locked: "_0713d670aa98ab78fbaf607e4208c4a36872"
        },
        I = e => {
          let {
            metals: a,
            currentLevel: t,
            currentLevelComplete: s,
            classes: r = ""
          } = e;
          const {
            formatMessage: c
          } = (0, i.useIntl)();
          return (0, R.jsx)("ul", {
            className: [j.metalLegend, r || "", 1 === a.length ? j.single : ""].join(" "),
            children: a.map(((e, r) => {
              const o = r < a.indexOf(t) || r === a.indexOf(t) && s;
              return (0, R.jsx)("li", {
                "data-unlocked": o,
                children: o ? (0, R.jsx)(E, {
                  alt: e,
                  type: e,
                  classes: j.completed
                }) : (0, R.jsx)("div", {
                  className: [j.locked, j[e]].join(" "),
                  "aria-label": c(f.cph_awards_not_unlocked),
                  role: "img"
                })
              }, e)
            }))
          })
        },
        v = {
          progressBar: "_0713d670aa98ab78f9dd52f0104ffc554a4f",
          bronze: "_0713d670aa98ab78ffeee3b6bfb9ce085d23",
          silver: "_0713d670aa98ab78dc5a1b4987769b776c93",
          gold: "_0713d670aa98ab78ceb2baae1b2d64662272",
          platinum: "_0713d670aa98ab78ef6966bf87d3900da271",
          filler: "_0713d670aa98ab78d813b15d99d1c6c04f3d",
          collapsed: "_0713d670aa98ab78f8df00393e1c037f1afc",
          visuallyHidden: "_0713d670aa98ab78cdd7d528c83f6fcfc68f"
        },
        A = e => {
          let {
            theme: a,
            percentage: t,
            isExpanded: s = !1,
            classes: r = ""
          } = e;
          const c = (0, i.useIntl)();
          return (0, R.jsx)("div", {
            className: `${r} ${[v.progressBar,a&&v[a],s?"":v.collapsed].join(" ")}`,
            role: "progressbar",
            "aria-label": c.formatMessage(f.cph_progress_bar_aria),
            children: (0, R.jsx)("div", {
              className: [v.filler, a && v[a]].join(" "),
              style: {
                width: `${t}%`
              },
              children: (0, R.jsx)("span", {
                className: v.visuallyHidden,
                children: `${t}%`
              })
            })
          })
        },
        P = {
          progressCounter: "_0713d670aa98ab78ed7361162614c7aeeb29",
          slash: "_0713d670aa98ab78f488c04effcb7ba91b80",
          bronze: "_0713d670aa98ab78bf268dd6ffc98ff52994",
          silver: "_0713d670aa98ab78b87024c60bb08c754f47",
          gold: "_0713d670aa98ab78a8c1279b88c3384b4beb",
          platinum: "_0713d670aa98ab78d203a912ca966d4331ea"
        },
        T = e => {
          let {
            value: a,
            total: t,
            theme: s,
            classes: r
          } = e;
          return (0, R.jsxs)("div", {
            className: [P.progressCounter, ...r ? [r] : []].join(" "),
            "aria-label": `${a}/${t}`,
            "data-testid": "progressCounter",
            children: [(0, R.jsx)("span", {
              children: void 0 === a ? "--" : a
            }), (0, R.jsx)("span", {
              className: P.slash
            }), (0, R.jsx)("span", {
              className: s && P[s],
              children: t
            })]
          })
        },
        x = {
          award: "_0713d670aa98ab78f5ee3a2b92ba9fd8b841",
          completed: "_0713d670aa98ab78bc6e47e14bd7e607593a",
          awardName: "_0713d670aa98ab78c18cf6d90559af48213a",
          awardHint: "_0713d670aa98ab78be3aea8c15895adb27f0",
          awardHintExpand: "_0713d670aa98ab78facf99335f42d20bd9a2",
          tooltip: "_0713d670aa98ab78d3baaa94e6a16f83e41e",
          fadeItemsIn: "_0713d670aa98ab78ce97c6d69700385fe95d",
          hovered: "_0713d670aa98ab78bda5e946b74b171b3ea8",
          awardInfo: "_0713d670aa98ab78a60bf40b0e75ba5935a5",
          awardContent: "_0713d670aa98ab78a3d0dfe27a5e98db7f6d",
          metalLegendContainer: "_0713d670aa98ab78cc0cf1b8a54f2d5ddec0",
          progressBar: "_0713d670aa98ab78abf8840630a02e9af177",
          awardDetails: "_0713d670aa98ab78f317c539f80024bc7c28",
          awardImage: "_0713d670aa98ab78c548f5286fc7ba071736",
          expanded: "_0713d670aa98ab78bc4c7d07fb9a091808d9",
          tooltipInner: "_0713d670aa98ab78fbf920236ea1fcdc4a8a",
          progressCounter: "_0713d670aa98ab78bcd1599498c111da3100"
        },
        {
          cdnBase: O
        } = (0, n.getScConfigForOrigin)(),
        W = "bronze",
        N = "platinum",
        C = [W, "silver", "gold", N],
        w = e => {
          let {
            award: a,
            isExpanded: t,
            isMobile: r,
            toggleModal: c,
            classes: o,
            position: i,
            hoverFn: n,
            setHoveredAwardId: m,
            isShowTooltip: _
          } = e;
          const g = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const t = {
                progress: void 0 === e ? void 0 : Number(e),
                currentLevel: a.length && a.length > 1 ? W : N,
                levelEnd: a.length > 0 ? a[0] : 1,
                isComplete: !1,
                percent: 0
              };
              if (void 0 === t.progress || 0 === t.progress) return t;
              if (a.length > 1 && t.progress >= a[a.length - 1] || !a.length && t.progress >= 1) t.isComplete = !0, t.percent = 100, t.levelEnd = a.length ? a[a.length - 1] : 1, t.currentLevel = a.length ? C[a.length - 1] : t.currentLevel, t.progress = t.levelEnd;
              else if (1 === a.length) t.percent = t.progress > 0 ? t.progress / t.levelEnd * 100 : 0, t.isComplete = Boolean(t.progress >= t.levelEnd), t.progress = t.isComplete ? t.levelEnd : t.progress;
              else {
                let e = a.findIndex(((e, s) => {
                  const r = 0 === s ? 0 : s - 1;
                  return void 0 !== t.progress && t.progress >= a[r] && t.progress < e
                }));
                if (e < 0 && (e = 0), e >= 0) {
                  const o = 0 === e ? 0 : e - 1;
                  t.currentLevel = C[e], t.levelEnd = a[e], t.percent = (s = t.progress, r = o, c = t.levelEnd, Math.floor(100 * (s - r) / (c - r) + 0))
                }
              }
              var s, r, c;
              return t
            }(a.playerProgress, a.levels),
            E = r ? l.E.button : "li",
            [S, f] = (0, s.useState)(null),
            [b, u] = (0, s.useState)(null),
            [h, k] = (0, s.useState)(null),
            {
              track: j
            } = (0, d.useGtmTrack)(),
            {
              styles: v,
              attributes: P
            } = (0, p.D)(S, b, {
              placement: "auto",
              modifiers: [{
                name: "flip",
                options: {
                  allowedAutoPlacements: ["top"],
                  fallbackPlacements: ["bottom"]
                }
              }]
            });

          function w(e) {
            r || (n(e), m(i))
          }(0, s.useEffect)((() => {
            if (!_ && h) clearTimeout(h), k(null);
            else if (_ && !h) {
              const e = setTimeout((() => {
                j({
                  event: "awards_hover",
                  event_category: "awards",
                  event_action: "hover",
                  event_label: "awards",
                  element_placement: "awards",
                  position: i
                })
              }), 1e3);
              k(e)
            }
          }), [_, h]);
          const G = (0, s.useRef)(null);
          return (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsxs)(E, {
              ..."li" !== E && {
                layout: "position"
              },
              className: [x.award, ...g.isComplete ? [x.completed] : [], ...t ? [x.expanded] : [], ..._ ? [x.hovered] : [], ...o ? [o] : []].join(" "),
              ref: r ? G : f,
              tabIndex: 0,
              ...r && !t && {
                onClick: () => {
                  c(), j({
                    event: "awards_click",
                    event_category: "awards",
                    event_action: "click",
                    event_label: "awards",
                    element_placement: "awards",
                    position: i
                  })
                }
              },
              ...r && t && {
                disabled: !0
              },
              ...!r && {
                onMouseOver: () => w(!0),
                onMouseOut: () => w(!1),
                onFocus: () => w(!0),
                onBlur: () => w(!1)
              },
              "data-testid": "award",
              children: [(0, R.jsxs)(l.E.div, {
                className: x.awardContent,
                layout: "position",
                children: [(0, R.jsxs)("div", {
                  className: x.awardInfo,
                  children: [(0, R.jsx)("div", {
                    className: x.awardImage,
                    children: (0, R.jsx)("img", {
                      src: `${O}/images/games/GTAV/multiplayer/award/${g.currentLevel}/${a.imageName}.png`,
                      alt: a.name
                    })
                  }), (0, R.jsxs)("div", {
                    className: x.awardDetails,
                    children: [(0, R.jsx)("h3", {
                      className: x.awardName,
                      children: a.name
                    }), t && (0, R.jsx)("div", {
                      className: x.awardHint,
                      children: a.hint
                    }), (0, R.jsx)(T, {
                      theme: g.currentLevel,
                      value: g.progress,
                      total: g.levelEnd,
                      classes: x.progressCounter
                    })]
                  })]
                }), !g.isComplete && (0, R.jsx)(A, {
                  theme: g.currentLevel,
                  percentage: g.percent,
                  isExpanded: t,
                  classes: x.progressBar
                })]
              }), (0, R.jsx)("div", {
                className: x.metalLegendContainer,
                children: (0, R.jsx)(I, {
                  metals: a.levels && a.levels.length > 1 ? C : [N],
                  currentLevel: g.currentLevel,
                  currentLevelComplete: g.isComplete,
                  classes: x.metalLegend
                })
              })]
            }), !r && _ && (0, R.jsx)("div", {
              className: x.tooltip,
              style: v.popper,
              ref: u,
              ...P,
              children: (0, R.jsx)("div", {
                className: x.tooltipInner,
                children: a.hint
              })
            })]
          })
        },
        G = {
          awardsOuter: "_0713d670aa98ab78ab39884a32c4d392658f",
          isClosing: "_0713d670aa98ab78aeb24664786d0f418e75",
          isOpen: "_0713d670aa98ab78c9876998dcb9a0308cea",
          awardsContainer: "_0713d670aa98ab78bb638448cdf95bc3cdfc",
          awardCategoryName: "_0713d670aa98ab78e7f88249cf62c0a527ba",
          modalOpen: "_0713d670aa98ab78d99d63c1a55889266fd4",
          categoryWrapper: "_0713d670aa98ab78f78e68d13a3389738efe",
          awardsCategoryOpen: "_0713d670aa98ab78badb9115773636e283c6",
          awardCategoryContainer: "_0713d670aa98ab78d39f85d294dde3a63adc",
          awardCategory: "_0713d670aa98ab78efc75e8581b7fe788250",
          award: "_0713d670aa98ab78e809bc4cfcf44d9e4ecf",
          fadeIn: "_0713d670aa98ab78da1565e47a1cc834cd4c",
          peek: "_0713d670aa98ab78b42bed780ef472fd465b",
          awardCount: "_0713d670aa98ab78cfd9f0ec602077e5ebed",
          expanded: "_0713d670aa98ab78b79e816068b5afdf50c7",
          fadeInAwards: "_0713d670aa98ab78d5feeb6b4a9bd9d36947",
          slideBtnIn: "_0713d670aa98ab78f6d47b8a9950a4f0e78c",
          hovered: "_0713d670aa98ab78a8008d135ab7ba0cee4d",
          isClosed: "_0713d670aa98ab78aa77785ac566f8b3c95e",
          fadeOutAwards: "_0713d670aa98ab78e0291ade040fee6a646b",
          awardsCategoryClose: "_0713d670aa98ab78a9e1620d9ffb04eafbbd",
          showLess: "_0713d670aa98ab78e6cd08fbeb7851d78133",
          showMore: "_0713d670aa98ab78e4a926233236e065159a"
        },
        D = [{
          min: 0,
          max: 767,
          show: 6,
          peek: 1
        }, {
          min: 767,
          max: 1279,
          show: 8,
          peek: 2
        }, {
          min: 1280,
          max: 1919,
          show: 12,
          peek: 3
        }, {
          min: 1920,
          max: 0,
          show: 16,
          peek: 4
        }],
        V = () => {
          const {
            isMobile: e,
            windowWidth: a
          } = (0, n.useWindowResize)(), {
            state: r
          } = k(), {
            awardsKey: c
          } = r, [o, p] = (0, s.useState)([]), g = (0, m.useRockstarTokenPing)(), {
            loggedIn: E
          } = (0, d.useRockstarUser)(), {
            selectedCharacterTuple: S
          } = (0, d.useRockstarUserState)(), b = o ? function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              a = 0;
            return e && e.forEach((e => {
              const t = e.levels ? Number(e.levels[e.levels.length - 1]) : 1;
              e.playerProgress && e.playerProgress >= t && (a += 1)
            })), a
          }(o) : 0, [u, h] = (0, s.useState)(!1), [j, I] = (0, s.useState)(!1), [v, A] = (0, s.useState)(!1), {
            setBodyIsScrollable: P
          } = (0, n.useBodyScrollable)(), {
            track: x
          } = (0, d.useGtmTrack)(), [O, W] = (0, s.useState)(12), [N, C] = (0, s.useState)(4), V = (0, s.useRef)(null), y = (0, s.useRef)(null), [z, M] = (0, s.useState)(!1), {
            inView: L
          } = (0, _.YD)({
            threshold: .6
          }), [H, U] = (0, s.useState)(0);
          (0, s.useEffect)((() => {
            D.forEach((e => {
              a > e.min && a < e.max && (W(e.show), C(e.peek))
            }))
          }), [a]), (0, s.useEffect)((() => {
            u && !e ? P(!0) : u && e && h(!1)
          }), [e]), (0, s.useEffect)((() => {
            L && !z && (x({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "awards",
              element_placement: "awards"
            }), M(!0))
          }), [L]);
          const B = (0, s.useCallback)((() => {
            const a = V.current;
            e && P(u), a && (u || x({
              event: "view_all",
              event_action: "view_all",
              event_category: "click",
              event_label: "awards",
              text: "awards",
              element_placement: "awards"
            })), u && (I(!0), x({
              event: "nav_back",
              event_action: "back",
              event_category: "nav",
              event_label: "awards",
              text: "awards",
              element_placement: "awards"
            }), e || window.scrollTo({
              top: a?.offsetTop,
              left: 0,
              behavior: "smooth"
            })), setTimeout((() => {
              I(!1)
            }), 400), h(!u)
          }), [u, V?.current, e]);
          if ((0, s.useEffect)((() => {
              (async () => {
                if (null === E || null === S || !c) return;
                let e = {};
                if (E && !1 !== S) {
                  const [a, t] = S;
                  e = {
                    platform: a,
                    slot: t
                  }
                }
                const a = await async function() {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  const {
                    error: a = null,
                    result: t
                  } = await (0, n.coreScApiFetch)("games/gtao/awards", {
                    pingBearer: g,
                    useCache: !0,
                    ...E ? {} : {
                      requireBearerToken: !1
                    },
                    query: e
                  });
                  if (a) throw Object.assign(new Error(""), a);
                  return t?.categories ?? null
                }(e), t = function(e, a) {
                  const t = [];
                  return a.forEach((a => {
                    a.awards.forEach((a => {
                      a?.sections?.indexOf(e) >= 0 && t.push(a)
                    }))
                  })), t
                }(c, a);
                p(t)
              })()
            }), [c, E, S]), !c || !o.length) return null;
          const F = e ? "div" : "ul",
            $ = e ? l.E.div : "div";
          return (0, R.jsx)("div", {
            className: G.awardsOuter,
            children: (0, R.jsxs)($, {
              "data-open": u && e,
              ...e && {
                layout: "position"
              },
              transition: {
                ease: "easeInOut",
                stiffness: 1e3,
                damping: 100,
                duration: .3
              },
              className: [G.awardsContainer, u && e ? G.modalOpen : "", u && !e ? G.expanded : "", !u && j ? G.isClosed : "", v && !e ? G.hovered : ""].join(" "),
              ref: V,
              children: [(0, R.jsxs)("div", {
                className: G.awardCategoryContainer,
                children: [(0, R.jsx)("div", {
                  className: G.awardsTitle,
                  children: (0, R.jsxs)("h2", {
                    className: G.awardCategoryName,
                    children: [u && e && (0, R.jsx)("button", {
                      type: "button",
                      onClick: () => B(),
                      children: (0, R.jsx)("img", {
                        src: t(9806),
                        alt: "Back"
                      })
                    }), (0, R.jsx)(i.FormattedMessage, {
                      ...f.cph_awards_title
                    })]
                  })
                }), (0, R.jsx)("span", {
                  children: (0, R.jsx)(T, {
                    value: b,
                    total: o.length,
                    theme: "platinum",
                    classes: G.awardCount
                  })
                })]
              }), (0, R.jsxs)($, {
                ...e && {
                  layout: "position"
                },
                className: G.categoryWrapper,
                children: [(0, R.jsx)(F, {
                  className: G.awardCategory,
                  ref: y,
                  children: o.map(((a, t) => (0, R.jsx)(w, {
                    position: t,
                    award: a,
                    isExpanded: e && u,
                    isMobile: e,
                    toggleModal: e && B,
                    hoverFn: A,
                    setHoveredAwardId: U,
                    isShowTooltip: t === H,
                    classes: [G.award, t >= O + N ? G.fadeIn : "", t >= O && t < O + N ? G.peek : ""].join(" ")
                  }, a.imageName)))
                }), o.length > O && (0, R.jsx)("div", {
                  className: u ? G.showLess : G.showMore,
                  children: (0, R.jsx)("button", {
                    type: "button",
                    onClick: () => B(),
                    children: u ? (0, R.jsx)(i.FormattedMessage, {
                      ...f.cph_progress_rewards_view_less
                    }) : (0, R.jsx)(i.FormattedMessage, {
                      ...f.cph_progress_rewards_view_all
                    })
                  })
                })]
              })]
            })
          })
        };
      var y, z;

      function M() {
        return M = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, M.apply(this, arguments)
      }
      const L = e => s.createElement("svg", M({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 96 21"
      }, e), y || (y = s.createElement("g", {
        fill: "#fff",
        clipPath: "url(#ps5_svg__a)"
      }, s.createElement("path", {
        d: "M10.017 0v19.278l4.361 1.392V4.488c0-.749.337-1.265.883-1.093.748.202.853.898.853 1.654v6.47c2.723 1.31 4.862 0 4.862-3.47 0-3.472-1.257-5.132-4.952-6.404A52.984 52.984 0 0 0 10.017 0Z"
      }), s.createElement("path", {
        d: "m15.208 17.85 7.017-2.5c.793-.291.92-.695.27-.904a4.773 4.773 0 0 0-2.611.134l-4.676 1.646v-2.618l.27-.09a15.875 15.875 0 0 1 3.224-.688 13.81 13.81 0 0 1 6.052.748c2.064.65 2.289 1.608 1.773 2.244a4.982 4.982 0 0 1-1.81 1.137l-9.509 3.419v-2.529ZM2.012 17.58c-2.117-.591-2.469-1.833-1.496-2.544a10.475 10.475 0 0 1 2.401-1.16l6.254-2.244v2.581l-4.488 1.609c-.793.291-.92.695-.27.905.866.199 1.77.152 2.611-.135l2.162-.748v2.244l-.434.075a14.154 14.154 0 0 1-6.733-.546M61.59 17.655a3.433 3.433 0 0 0 3.426-3.441V8.319a2.072 2.072 0 0 1 2.072-2.065h6.65a.09.09 0 0 0 .09-.09V4.982a.09.09 0 0 0-.09-.09h-8.02a3.426 3.426 0 0 0-3.425 3.427v5.895a2.072 2.072 0 0 1-2.073 2.072h-6.56a.09.09 0 0 0-.09.09v1.182a.098.098 0 0 0 .09.09l7.93.007ZM76.573 9.725V4.982a.09.09 0 0 1 .09-.09h18.119a.09.09 0 0 1 .097.09v1.182a.09.09 0 0 1-.097.09H79.394a.09.09 0 0 0-.098.09V9.41a.987.987 0 0 0 .988.98h11.46a3.636 3.636 0 0 1 0 7.264h-15.08a.097.097 0 0 1-.09-.09v-1.182a.09.09 0 0 1 .09-.09h13.712a2.27 2.27 0 1 0 0-4.54h-11.73a2.072 2.072 0 0 1-2.073-2.028ZM49.672 10.39a2.072 2.072 0 0 0 0-4.136H35.773a.09.09 0 0 1-.097-.09V4.982a.09.09 0 0 1 .097-.09h15.261a3.434 3.434 0 0 1 0 6.86H40.471a2.065 2.065 0 0 0-2.065 2.065v3.74a.097.097 0 0 1-.09.09h-2.543a.097.097 0 0 1-.097-.09v-3.74a3.434 3.434 0 0 1 3.433-3.426h10.563Z"
      }))), z || (z = s.createElement("defs", null, s.createElement("clipPath", {
        id: "ps5_svg__a"
      }, s.createElement("path", {
        fill: "#fff",
        d: "M0 0h95.755v20.946H0z"
      })))));
      var H, U;

      function B() {
        return B = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, B.apply(this, arguments)
      }
      const F = e => s.createElement("svg", B({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 160 20"
        }, e), H || (H = s.createElement("g", {
          clipPath: "url(#xboxseriesxs_svg__a)"
        }, s.createElement("path", {
          fill: "#fff",
          d: "M10.17 8.02a.063.063 0 0 1 .034.017c3.041 2.274 8.249 7.901 6.661 9.49A10.272 10.272 0 0 1 10.17 20c-2.463 0-4.842-.878-6.696-2.472-1.587-1.59 3.62-7.217 6.661-9.491a.067.067 0 0 1 .035-.017Zm5.299-6.556C13.91.556 12.223 0 10.17 0 8.118 0 6.43.556 4.872 1.463a.038.038 0 0 0-.017.05.04.04 0 0 0 .05.017c1.969-.418 4.96 1.254 5.244 1.422a.034.034 0 0 0 .043 0c.282-.167 3.277-1.84 5.244-1.422a.04.04 0 0 0 .05-.017.038.038 0 0 0-.018-.05v.001ZM3.05 2.87a.178.178 0 0 0-.045.034A9.925 9.925 0 0 0 .024 9.31a9.88 9.88 0 0 0 2.056 6.75c.005.008.014.015.025.018.01.003.022.002.031-.003a.04.04 0 0 0 .012-.051C1.37 13.667 5.334 7.953 7.38 5.556a.046.046 0 0 0 .015-.03.043.043 0 0 0-.018-.033C4.275 2.461 3.221 2.783 3.051 2.87Zm9.912 2.625a.043.043 0 0 0-.018.034.045.045 0 0 0 .014.029c2.047 2.395 6.011 8.11 5.235 10.466a.04.04 0 0 0 .01.051.044.044 0 0 0 .057-.016 9.88 9.88 0 0 0 2.056-6.749 9.925 9.925 0 0 0-2.982-6.406.178.178 0 0 0-.045-.034c-.17-.086-1.225-.408-4.327 2.625Zm22.431 10.667h-2.082l-3.582-4.848-3.582 4.848H24.07l4.623-6.256-4.263-5.766h2.081l3.22 4.357 3.221-4.357h2.08L30.77 9.904l4.623 6.257Zm10.802-3.418c0 1.055-.356 1.898-1.059 2.505-.703.606-1.723.913-3.033.913H36.37v-5.354h-2.724l1.133-1.534h1.59V4.14h5.493c1.232 0 2.19.29 2.846.863.656.573.99 1.337.99 2.27 0 1.155-.533 2.032-1.582 2.605.678.259 1.2.638 1.547 1.13.357.51.542 1.116.531 1.735h.001Zm-7.958-3.47h3.503c.706 0 1.243-.155 1.594-.462.35-.308.529-.774.529-1.39 0-.53-.186-.95-.55-1.249-.366-.298-.893-.45-1.57-.45H38.24l-.002 3.551Zm6.073 3.435c0-.63-.194-1.11-.576-1.426-.382-.315-.966-.475-1.735-.475h-3.762v3.77H42c.746 0 1.324-.164 1.718-.485.395-.322.593-.786.593-1.384Zm14.443-2.559c0 .93-.137 1.783-.408 2.535a5.748 5.748 0 0 1-1.222 2.005 5.377 5.377 0 0 1-1.907 1.305c-.718.289-1.533.435-2.421.435-.9 0-1.72-.146-2.438-.435a5.217 5.217 0 0 1-1.89-1.304 5.663 5.663 0 0 1-1.236-1.997c-.273-.753-.412-1.61-.412-2.544 0-.932.139-1.783.412-2.539a5.819 5.819 0 0 1 1.236-2.017 5.213 5.213 0 0 1 1.89-1.292c.718-.286 1.538-.431 2.438-.431.888 0 1.703.145 2.42.43.724.29 1.375.73 1.907 1.292a5.837 5.837 0 0 1 1.223 2.02c.27.754.408 1.61.408 2.537Zm-10 0c0 1.415.372 2.55 1.108 3.373.724.833 1.71 1.256 2.931 1.256 1.222 0 2.208-.423 2.93-1.256.725-.813 1.092-1.945 1.092-3.373 0-1.427-.367-2.565-1.091-3.388-.735-.823-1.721-1.24-2.931-1.24s-2.197.417-2.932 1.24c-.732.845-1.105 1.986-1.105 3.388h-.003Zm15.896-.245 4.26-5.765h-2.08l-3.22 4.357-3.22-4.357h-2.08l4.26 5.765-4.622 6.256h2.081l3.583-4.848 3.581 4.848h2.082l-4.626-6.256Zm20.17-4.111v3.483h6.074v1.533h-6.07v3.702h6.866v1.651h-8.733V4.14h8.733V5.79l-6.87.002Zm-4.293 4.8c-.61-.55-1.624-.975-3.013-1.266l-1.062-.22c-1.008-.21-1.708-.47-2.081-.77-.37-.278-.558-.69-.558-1.232 0-.53.21-.944.626-1.232.415-.287 1.03-.434 1.821-.434 1.017 0 1.766.183 2.224.543.457.36.715.93.772 1.696v.017h1.85v-.018c-.024-1.178-.443-2.117-1.248-2.79-.806-.675-2.02-1.015-3.617-1.015-1.321 0-2.385.299-3.16.89-.775.59-1.172 1.388-1.172 2.378 0 .99.325 1.774.965 2.336.64.562 1.598.97 2.85 1.216l1.045.22c1.03.221 1.751.479 2.15.762.399.284.592.687.592 1.207 0 .641-.243 1.138-.72 1.475-.478.337-1.176.51-2.07.51-1.08 0-1.906-.225-2.454-.667-.548-.44-.832-1.118-.848-2.006v-.026h-1.867v.017c.012 1.38.472 2.445 1.368 3.162.896.716 2.163 1.081 3.769 1.081 1.48 0 2.656-.324 3.495-.963s1.265-1.528 1.265-2.64c0-.93-.31-1.682-.921-2.233l-.001.002Zm22.396 4.085-.12-1.867c-.023-.663-.173-1.201-.448-1.6-.267-.39-.689-.67-1.255-.841.624-.205 1.119-.556 1.469-1.041.359-.5.543-1.124.543-1.854 0-1.033-.38-1.856-1.13-2.444-.751-.589-1.785-.89-3.085-.89h-5.342V16.16h1.868v-4.932h3.525c.7 0 1.214.16 1.526.474.312.315.492.864.526 1.63l.051 1.277c.012.697.134 1.215.363 1.542l.005.008h1.921l-.015-.027c-.209-.354-.345-.844-.401-1.456l-.001.002Zm-7.497-8.956h3.371c.769 0 1.367.164 1.778.485.412.32.62.803.62 1.434 0 .654-.202 1.167-.602 1.519-.399.352-.96.534-1.657.534h-3.509l-.001-3.972ZM104.8 16.16h1.868V4.139H104.8V16.16Zm12.468-10.37V4.14h-8.733V16.16h8.733v-1.652h-6.863v-3.701h6.073V9.273h-6.073V5.791h6.863Zm9.953 4.801c-.61-.55-1.624-.975-3.013-1.267l-1.061-.218c-1.008-.212-1.709-.472-2.082-.772-.37-.277-.558-.69-.558-1.231 0-.53.211-.945.626-1.232.415-.287 1.03-.434 1.821-.434 1.018 0 1.767.182 2.224.543.457.36.716.93.772 1.696v.017h1.849v-.019c-.023-1.177-.443-2.116-1.248-2.79-.804-.674-2.021-1.014-3.616-1.014-1.322 0-2.385.298-3.161.889-.776.59-1.171 1.389-1.171 2.379s.325 1.774.965 2.336c.64.562 1.597.97 2.85 1.216l1.044.219c1.032.222 1.755.48 2.15.763.396.284.592.687.592 1.206 0 .642-.242 1.139-.72 1.476-.478.337-1.176.51-2.07.51-1.08 0-1.905-.226-2.453-.667-.549-.44-.833-1.118-.848-2.006v-.024h-1.867v.017c.011 1.38.471 2.445 1.368 3.162.896.716 2.162 1.081 3.769 1.081 1.481 0 2.655-.324 3.494-.963.839-.639 1.266-1.528 1.266-2.64 0-.93-.31-1.682-.922-2.233Zm19.884-7.954h-.934v15.025h.933l.001-15.025Zm-8.55 7.267 4.259-5.765h-2.081l-3.22 4.357-3.221-4.357h-2.077l4.26 5.765-4.623 6.256h2.081l3.582-4.848 3.582 4.848h2.079l-4.621-6.256Zm20.523.687c-.61-.55-1.623-.975-3.013-1.267l-1.061-.218c-1.008-.212-1.709-.472-2.081-.772-.371-.277-.559-.69-.559-1.231 0-.53.211-.945.626-1.232.416-.287 1.03-.434 1.822-.434 1.017 0 1.766.182 2.223.543.456.36.718.93.775 1.696v.017h1.85v-.019c-.023-1.177-.443-2.116-1.248-2.79-.805-.674-2.02-1.014-3.616-1.014-1.322 0-2.385.298-3.161.889-.776.59-1.171 1.389-1.171 2.379s.324 1.774.965 2.336c.64.562 1.597.97 2.85 1.216l1.044.219c1.031.222 1.755.48 2.15.763.396.284.592.687.592 1.206 0 .642-.242 1.139-.72 1.476-.478.337-1.176.51-2.07.51-1.08 0-1.906-.226-2.454-.667-.547-.44-.832-1.118-.847-2.006v-.024h-1.871v.017c.011 1.38.471 2.445 1.367 3.162.897.716 2.164 1.081 3.77 1.081 1.481 0 2.655-.324 3.495-.963.84-.639 1.265-1.528 1.265-2.64 0-.93-.31-1.682-.922-2.233Z"
        }))), U || (U = s.createElement("defs", null, s.createElement("clipPath", {
          id: "xboxseriesxs_svg__a"
        }, s.createElement("path", {
          fill: "#fff",
          d: "M0 0h160v20H0z"
        }))))),
        $ = {
          challenge: "_0713d670aa98ab78f5bd74257af6cdb467c5",
          content: "_0713d670aa98ab78ad82cd7d34d7823f03f5",
          title: "_0713d670aa98ab78b3eda229665034794566",
          challengeInfo: "_0713d670aa98ab78e23491c1228893ecdb29"
        },
        Y = e => {
          let {
            challenge: a
          } = e;
          const {
            hint: t
          } = a;
          return (0, R.jsx)("div", {
            className: [$.challenge].join(" "),
            children: (0, R.jsx)("div", {
              className: $.challengeInfo,
              children: (0, R.jsx)("div", {
                className: $.content,
                children: (0, R.jsx)("h4", {
                  className: $.title,
                  children: t
                })
              })
            })
          })
        };
      var Z = t(822),
        K = t(5763);
      const X = e => {
          let {
            reward: a,
            ...r
          } = e;
          const [c] = (0, s.useState)(`${(e=>{try{return t(1782)(`./${e}.jpg`)}catch(e){return t(5287)}})(a.imageName)}?im=Resize=960`);
          return (0, R.jsx)(l.E.div, {
            layout: !0,
            ...r,
            className: "_0713d670aa98ab78fb92c1b89d9958b6e2d0",
            children: (0, R.jsxs)("div", {
              className: "_0713d670aa98ab78e0d3bcae234696bc5855",
              children: [(0, R.jsx)("div", {
                className: "_0713d670aa98ab78e925a13d6160e41dc3fc",
                children: (0, R.jsx)("img", {
                  src: c,
                  alt: a.label
                })
              }), (0, R.jsx)("div", {
                className: "_0713d670aa98ab78dd03412529ee9663761b",
                children: (0, R.jsx)("h4", {
                  children: a.label
                })
              })]
            })
          })
        },
        q = {
          rewards: "_0713d670aa98ab78a954444acb7549023ea2",
          carousel: "_0713d670aa98ab78c1ccbe992cc4b43a70e9",
          "swiper-scrollbar-disabled": "_0713d670aa98ab78fc66cadb3992ffec33af",
          "swiper-horizontal": "_0713d670aa98ab78c4c1de223757b0fab72b",
          "swiper-vertical": "_0713d670aa98ab78ea1f2c85afd353d0b991",
          header: "_0713d670aa98ab78d52ecf6f25b277c1536c",
          btnViewAll: "_0713d670aa98ab78f68c06f186313b2f9e08",
          container: "_0713d670aa98ab78c70f8a48c6da92dc2029",
          inactiveTier: "_0713d670aa98ab78d86f87054ac0f3aae26e",
          isModalOpen: "_0713d670aa98ab78aa18d8e68c6f9bcfdcc2",
          btnBack: "_0713d670aa98ab78b7a4c345d22e8293ba0f",
          slideBtnIn: "_0713d670aa98ab78cf2e342507f57a62db97",
          fadeItemsOut: "_0713d670aa98ab78f2b657cf1646415f7635",
          fadeItemsIn: "_0713d670aa98ab78fc6a094f3519149219ff",
          btnCloseContainer: "_0713d670aa98ab78aaa47960f7c8a58cb65f",
          btnClose: "_0713d670aa98ab78a40e7e47ac41b9f69fcf",
          isModalClosed: "_0713d670aa98ab78fe6935c5dc880947cded",
          desktopRewardsGrow: "_0713d670aa98ab78b0cd4776c4ed8afa7cef",
          mobileRewardsGrow: "_0713d670aa98ab78a117bf0b629f316c37d2",
          mobileRewardsShrink: "_0713d670aa98ab78b4b996ccf9745e11e5d4",
          desktopRewardsShrink: "_0713d670aa98ab78f9990269cf7b12011e41",
          desktopShrinkChallengeMargins: "_0713d670aa98ab78d5552b08d478d3bbbc7d",
          fadeRewardsIn: "_0713d670aa98ab78f5114c6fa8664048a2f5"
        },
        J = e => {
          let {
            activeTier: a,
            tiers: r,
            setHeight: c,
            setOffset: o,
            isModalOpen: m,
            setIsModalOpen: _,
            rewardsContainer: p
          } = e;
          const [g, E] = (0, s.useState)(window.innerWidth >= 1280), [S, b] = (0, s.useState)(1), [u, h] = (0, s.useState)("auto"), {
            track: k
          } = (0, d.useGtmTrack)(), {
            setBodyIsScrollable: j
          } = (0, n.useBodyScrollable)(), [I, v] = (0, s.useState)(!1), A = (0, s.useRef)(), P = g ? Z.tq : "div", T = g ? Z.o5 : "li", x = (0, s.useRef)(null), O = (0, s.useRef)(null), W = r.some((e => e.isCompleted && e?.numClaimable > 0)), N = (0, i.useIntl)(), C = (0, s.useMemo)((() => {
            const e = [];
            return r.forEach(((a, t) => {
              a.rewards.forEach(((a, s) => {
                e.push({
                  tier: t,
                  reward: a,
                  showTitle: 0 === s,
                  id: `reward-${t}-${s}`
                })
              }))
            })), e
          }), [r]);

          function w() {
            E(window.innerWidth >= 1280);
            const e = x?.current?.clientHeight;
            if (c(g && C.length ? e : "auto"), !m) {
              const {
                current: e
              } = O && O, a = window.getComputedStyle(e), t = Number(a.width.replace("px", "")) - Number(a.paddingLeft.replace("px", "")) - Number(a.paddingRight.replace("px", ""));
              h(t)
            }
          }

          function G() {
            if (m && k({
                event: "nav_back",
                event_action: "back",
                event_category: "nav",
                event_label: "rewards",
                text: "rewards",
                element_placement: "rewards"
              }), g)
              if (m) A.current?.swiper.disable(), b(0), setTimeout((() => {
                A.current?.swiper.enable();
                const e = C.findIndex((e => e.id === `reward-${a}-0`));
                A.current?.swiper.slideTo(e), A.current?.swiper.disable(), v(!1), A.current?.swiper.enable(), A.current?.swiper.slideTo(0)
              }), 100), setTimeout((() => {
                _(!1), b(1)
              }), 250);
              else {
                const e = p.current,
                  t = e?.offsetTop;
                o(t), A.current?.swiper.disable(), v(!0);
                let s = C.findIndex((e => e.id === `reward-${a}-0`));
                1 === r[a].rewards.length && (s -= 1), A.current?.swiper.slideTo(s), setTimeout((() => {
                  A.current?.swiper.enable(), A.current?.swiper.slideTo(s), _(!0)
                }), 10)
              }
            else j(m), _(!m), v(!m)
          }
          return (0, s.useEffect)((() => (window.addEventListener("resize", w), w(), () => {
            window.removeEventListener("resize", w)
          })), [r]), (0, s.useEffect)((() => {
            j(!!g || !m)
          }), [g]), (0, s.useMemo)((() => (0, R.jsxs)(l.E.div, {
            layout: "position",
            className: [q.rewards, m ? q.isModalOpen : q.isModalClosed].join(" "),
            ref: x,
            children: [m && (0, R.jsx)("div", {
              className: q.btnCloseContainer,
              children: (0, R.jsx)("button", {
                type: "button",
                "aria-label": N.formatMessage(f.cph_progress_close),
                className: q.btnClose,
                onClick: () => G()
              })
            }), (0, R.jsxs)("div", {
              className: q.header,
              ref: O,
              children: [m && (0, R.jsx)("button", {
                type: "button",
                className: q.btnBack,
                onClick: () => G(),
                children: (0, R.jsx)("img", {
                  src: t(5481),
                  alt: N.formatMessage(f.cph_progress_close)
                })
              }), (0, R.jsx)("h3", {
                children: (0, R.jsx)(i.FormattedMessage, {
                  ...f.cph_progress_rewards_title
                })
              }), !m && (0, R.jsx)("button", {
                type: "button",
                className: q.btnViewAll,
                onClick: () => {
                  k({
                    event: "view_all",
                    event_action: "click",
                    event_category: "view_all",
                    event_label: "progress & rewards",
                    element_placement: "progress & rewards"
                  }), G()
                },
                children: (0, R.jsx)(i.FormattedMessage, {
                  ...f.cph_progress_rewards_view_all
                })
              })]
            }), (0, R.jsx)("div", {
              className: q.container,
              style: {
                "--max-width-static-md": `${u}px`
              },
              children: (0, R.jsxs)(P, {
                ref: A,
                modules: [K.Qr, K.W_],
                ...g && {
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
                  className: q.carousel,
                  loop: !1,
                  grabCursor: !0,
                  centeredSlides: !1,
                  centerInsufficientSlides: !1,
                  slidesPerView: "auto",
                  speed: 700,
                  navigation: !0
                },
                children: [!g && W && (0, R.jsx)("div", {
                  className: q.howToClaimMobile,
                  children: (0, R.jsx)(i.FormattedMessage, {
                    ...f.cph_reward_how_to_claim
                  })
                }), C?.map((e => {
                  const t = e.tier === a;
                  return t || I ? (0, R.jsxs)(T, {
                    className: t ? void 0 : q.inactiveTier,
                    children: [e.showTitle && m && (0, R.jsx)("h3", {
                      children: (0, R.jsx)(i.FormattedMessage, {
                        ...f.cph_progress_tracker_tier_label,
                        values: {
                          number: e.tier + 1
                        }
                      })
                    }), (0, R.jsx)(X, {
                      reward: e.reward,
                      style: t ? {} : {
                        opacity: S
                      }
                    })]
                  }, e.id) : null
                })).filter(Boolean)]
              })
            })]
          })), [a, C?.length, g, m, u, I, S])
        },
        Q = {
          progressTracker: "_0713d670aa98ab78cfdee6636785b5ed6619",
          progressTrackerHeader: "_0713d670aa98ab78cfd3873d5fc89521cf03",
          platformAvailability: "_0713d670aa98ab78a2d5d9219bf1c396a633",
          platformIcons: "_0713d670aa98ab78a39129c69f16848fc824",
          container: "_0713d670aa98ab78f5a146d8ef384e95fc19",
          tiers: "_0713d670aa98ab78b2573543a428855aee30",
          active: "_0713d670aa98ab78e4a0d1857c1a44e5a07e",
          challenges: "_0713d670aa98ab78ea73baff98189b606660",
          challengesHeader: "_0713d670aa98ab78ad653eaab7494cd72e86",
          challengesProgress: "_0713d670aa98ab78ec09a2ede4919c681e1a",
          challengeList: "_0713d670aa98ab78b708e758614f43e993ba",
          rewards: "_0713d670aa98ab78e0437ea246b06e8143e2",
          isModalOpen: "_0713d670aa98ab78ef238081f81733ae7ea3",
          fadeItemsIn: "_0713d670aa98ab78f0582b03441dda91fc87",
          fadeItemsOut: "_0713d670aa98ab78b5af64dfdd89f38af42d",
          desktopRewardsGrow: "_0713d670aa98ab78ad1ba9d20c2531a4b750",
          mobileRewardsGrow: "_0713d670aa98ab78e7b76108c1ef4e13a20b",
          mobileRewardsShrink: "_0713d670aa98ab78e0a34ddaa27b998ab0f2",
          desktopRewardsShrink: "_0713d670aa98ab78c1350d2b65d5d4ae1ff0",
          desktopShrinkChallengeMargins: "_0713d670aa98ab78c72cdfa6c9e80821ff57"
        },
        ee = () => {
          const {
            windowWidth: e
          } = (0, n.useWindowResize)(), a = e < 1280, {
            state: t
          } = k(), {
            rewardsKey: r
          } = t, c = r ? S[r] : null, [o, p] = (0, s.useState)(null), g = o ? (e => {
            const a = [];
            return e.forEach((e => {
              const {
                challenges: t,
                rewards: s
              } = e, r = {
                challenges: t,
                rewards: s
              };
              a.push({
                ...e,
                ...r
              })
            })), a
          })(o.tiers) : null, [E, b] = (0, s.useState)(0), [u, h] = (0, s.useState)(!1), {
            ref: j,
            inView: I
          } = (0, _.YD)({
            threshold: .6
          }), v = (0, m.useRockstarTokenPing)(), {
            loggedIn: A
          } = (0, d.useRockstarUser)(), {
            selectedCharacterTuple: P
          } = (0, d.useRockstarUserState)(), {
            formatMessage: T
          } = (0, i.useIntl)(), {
            track: x
          } = (0, d.useGtmTrack)(), [O, W] = (0, s.useState)(!1), [N, C] = (0, s.useState)("auto"), [w, G] = (0, s.useState)("auto"), D = (0, s.useRef)(null), V = (0, s.useRef)();
          if ((0, s.useEffect)((() => {
              I && !u && (x({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "progress & rewards",
                element_placement: "progress & rewards"
              }), h(!0))
            }), [I]), (0, s.useEffect)((() => {
              null !== A && null !== P && c && (async e => {
                (async () => {
                  const {
                    error: a = null,
                    result: t
                  } = await (0, n.coreScApiFetch)("games/gtao/career/progress/section", {
                    pingBearer: v,
                    useCache: !0,
                    ...A ? {} : {
                      requireBearerToken: !1
                    },
                    query: e
                  });
                  if (a) throw Object.assign(new Error(""), a);
                  t && p(t)
                })()
              })({
                section: String(c),
                platform: P?.[0],
                slot: P?.[1]
              })
            }), [A, P, c]), !g?.[E] || !c) return null;
          const {
            challenges: y,
            rewards: z
          } = g[E];
          return (0, R.jsxs)("div", {
            className: Q.progressTracker,
            style: {
              "--rewards-top-offset": "auto" === w ? "auto" : `${w}px`
            },
            ref: j,
            children: [(0, R.jsxs)("div", {
              className: Q.progressTrackerHeader,
              children: [(0, R.jsx)("div", {
                children: (0, R.jsx)("h2", {
                  children: (0, R.jsx)(i.FormattedMessage, {
                    ...f.cph_progress_tracker_title
                  })
                })
              }), (0, R.jsxs)("div", {
                className: Q.platformAvailability,
                children: [(0, R.jsx)("span", {
                  children: (0, R.jsx)(i.FormattedMessage, {
                    ...f.cph_progress_available_on
                  })
                }), (0, R.jsxs)("div", {
                  className: Q.platformIcons,
                  children: [(0, R.jsx)(L, {
                    "aria-label": T(f.cph_progress_available_on_aria_ps5)
                  }), (0, R.jsx)(F, {
                    "aria-label": T(f.cph_progress_available_on_aria_xbox)
                  })]
                })]
              })]
            }), o && (0, R.jsxs)("div", {
              className: [Q.container, O && Q.isModalOpen, !1 === O ? Q.isModalClosed : ""].join(" "),
              style: {
                ...!a && {
                  height: N
                }
              },
              ref: D,
              children: [(0, R.jsx)("div", {
                className: Q.tiers,
                children: (0, R.jsx)("ul", {
                  children: g && g.map(((e, a) => (0, R.jsx)("li", {
                    children: (0, R.jsx)("button", {
                      type: "button",
                      className: [Q.tier, E === a ? Q.active : ""].join(" "),
                      onClick: () => {
                        ! function(e) {
                          b(e)
                        }(a), x({
                          event: "component_tab_click",
                          event_action: "tab_click",
                          event_category: "component",
                          event_label: `${T(f.cph_progress_tracker_tier_label,{number:a+1})}`,
                          text: `${T(f.cph_progress_tracker_tier_label,{number:a+1})}`,
                          link_url: void 0,
                          element_placement: "progress tracker"
                        })
                      },
                      children: (0, R.jsx)(i.FormattedMessage, {
                        ...f.cph_progress_tracker_tier_label,
                        values: {
                          number: a + 1
                        }
                      })
                    })
                  }, e.challenges[0].id)))
                })
              }), (0, R.jsxs)(l.E.div, {
                className: Q.challenges,
                children: [(0, R.jsx)(l.E.div, {
                  className: Q.challengesHeader,
                  children: (0, R.jsx)("h3", {
                    children: (0, R.jsx)(i.FormattedMessage, {
                      ...f.cph_progress_challenges_title
                    })
                  })
                }), (0, R.jsx)(l.E.div, {
                  className: Q.challengeList,
                  children: y && y.map((e => (0, R.jsx)(Y, {
                    challenge: e
                  }, e.id)))
                })]
              }), (0, R.jsx)(l.E.div, {
                className: Q.rewards,
                "data-open": O,
                layout: !0,
                transition: {
                  ease: "easeInOut",
                  stiffness: 1e3,
                  damping: 100,
                  duration: .3
                },
                ref: V,
                children: z && (0, R.jsx)(J, {
                  tiers: g,
                  activeTier: E,
                  isModalOpen: O,
                  setIsModalOpen: e => {
                    W(e)
                  },
                  setHeight: C,
                  setOffset: G,
                  rewardsContainer: V
                })
              })]
            })]
          })
        };
      var ae = t(1424),
        te = t(9542),
        se = t(1374);
      const re = ["1"],
        ce = {
          dropdownContainer: "_0713d670aa98ab78f9e16361420dc253cdae",
          dropdownButton: "_0713d670aa98ab78ee0ff4bc78b897775e23",
          dropdownContent: "_0713d670aa98ab78f559fa4a14286cdca9af",
          dropdownImage: "_0713d670aa98ab78e1f1d817cf38fde6646b",
          dropdownTitle: "_0713d670aa98ab78e3d0953c914916b86b7b",
          dropdownArrow: "_0713d670aa98ab78d9247326007372bad7a4",
          open: "_0713d670aa98ab78b32839da65acc44f62c0"
        },
        oe = e => {
          let {
            imageUrl: a,
            onClick: t,
            isOpen: r
          } = e;
          const c = (0, i.useIntl)(),
            o = r ? f.cph_nav_close : f.cph_nav_open,
            n = (0, s.useContext)(je);
          return (0, R.jsx)("div", {
            className: ce.dropdownContainer,
            "data-testid": "menu-dropdown",
            children: (0, R.jsx)("button", {
              type: "button",
              className: ce.dropdownButton,
              onClick: t,
              "aria-label": c.formatMessage(o),
              "data-testid": "menu-dropdown-button",
              children: (0, R.jsxs)("div", {
                className: ce.dropdownContent,
                children: [(0, R.jsx)("div", {
                  className: ce.dropdownImage,
                  children: (0, R.jsx)("img", {
                    alt: "",
                    width: "32",
                    height: "32",
                    src: a
                  })
                }), (0, R.jsx)("div", {
                  className: ce.dropdownTitle,
                  children: n
                }), (0, R.jsx)("div", {
                  className: [ce.dropdownArrow, r ? ce.open : ""].join(" "),
                  "data-testid": "chevron"
                })]
              })
            })
          })
        },
        ie = {
          navPill: "_0713d670aa98ab78ad863f510f186b6ef117",
          selected: "_0713d670aa98ab78ca48ee4880473a2ac558"
        },
        ne = e => {
          let {
            title: a,
            onClick: t,
            selected: s
          } = e;
          return (0, R.jsx)("button", {
            type: "button",
            onClick: t,
            className: [ie.navPill, s ? ie.selected : ""].join(" "),
            children: (0, R.jsx)("div", {
              children: a
            })
          })
        },
        de = {
          navCard: "_0713d670aa98ab78c1e0b0ddadf44ad4b73a",
          navCardImageBox: "_0713d670aa98ab78f35b799ea02b705ca0a1",
          navCardTextBox: "_0713d670aa98ab78be8e16e4fe67f9c09fca"
        },
        me = e => {
          let {
            title: a,
            url: t,
            imageUrl: s,
            onClick: r
          } = e;
          const c = `${s}?im=Resize,height=420`,
            [o] = (0, n.usePreloadImg)(c);
          return (0, R.jsx)(ae.NavLink, {
            className: de.navCard,
            to: t,
            onClick: r,
            children: (0, R.jsx)("div", {
              className: [de.navCardImageBox, o ? de.navCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${c}")`
              },
              children: (0, R.jsx)("div", {
                className: de.navCardTextBox,
                children: a
              })
            })
          })
        },
        _e = {
          navMenu: "_0713d670aa98ab78d966bf36af277d23ba2d",
          navMenuMain: "_0713d670aa98ab78bbd8a2f4f39af9554ea7",
          sectionMenu: "_0713d670aa98ab78a3abe13dcdc3c8019e74",
          sectionItems: "_0713d670aa98ab78f802934a6135feb1fee0",
          nextSectionNavButton: "_0713d670aa98ab78a58d6bff24921d8d798b",
          previousSectionNavButton: "_0713d670aa98ab78d362d544042d1996864d",
          previousNavButton: "_0713d670aa98ab78e7608c0fcefd9ae0b93d",
          nextNavButton: "_0713d670aa98ab78bc438312a0ef75fdbd3b",
          navMenuScroll: "_0713d670aa98ab78d2091aa72ff8ff9d94bb",
          headerVisible: "_0713d670aa98ab78b8fc04750781ddf4bb79",
          navMenuGrid: "_0713d670aa98ab78e428d35db1a6781d9a5b",
          navFeaturedItems: "_0713d670aa98ab78abf5e9da80ec9b1cfa21"
        };
      var le;

      function pe() {
        return pe = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, pe.apply(this, arguments)
      }
      const ge = e => s.createElement("svg", pe({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), le || (le = s.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var Re;

      function Ee() {
        return Ee = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, Ee.apply(this, arguments)
      }
      const Se = e => s.createElement("svg", Ee({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), Re || (Re = s.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        fe = {
          navScrollButton: "_0713d670aa98ab78b252dd6a81cf8eae3032"
        },
        be = e => {
          let {
            direction: a,
            className: t,
            ...s
          } = e;
          return (0, R.jsxs)("button", {
            type: "button",
            className: [t, fe.navScrollButton].join(" "),
            ...s,
            children: ["left" === a && (0, R.jsx)(ge, {}), "right" === a && (0, R.jsx)(Se, {})]
          })
        },
        ue = {
          initial: {
            height: "0dvh"
          },
          open: {
            height: "100dvh",
            transition: {
              ease: "easeInOut",
              duration: .4
            }
          },
          closed: {
            height: "0dvh",
            transition: {
              ease: "easeInOut",
              duration: .4
            }
          }
        },
        he = e => {
          let {
            navItems: a,
            category: t,
            onNavItemClick: r,
            isOpen: c,
            isHeaderVisible: o
          } = e;
          const n = (0, i.useIntl)(),
            {
              pathname: m
            } = (0, ae.useLocation)(),
            _ = (0, s.useMemo)((() => Math.max(a.findIndex((e => e.name === t)), 0)), [a, m]),
            [p, g] = (0, s.useState)(_),
            [E, S] = (0, s.useState)(!1),
            [b, u] = (0, s.useState)(!1),
            [h, k] = (0, s.useState)(!1),
            j = (0, s.useRef)(null),
            {
              track: I
            } = (0, d.useGtmTrack)(),
            v = (0, s.useContext)(je),
            A = [...a],
            P = A[p],
            T = e => {
              e.isEnd ? u(!0) : u(!1), e.isBeginning ? k(!0) : k(!1)
            };
          return (0, s.useEffect)((() => {
            j.current && ((j.current?.wrapperEl.clientWidth || 0) > (j.current?.el.clientWidth || 0) ? (S(!0), j.current.params.centeredSlides = !0, j.current.params.centeredSlidesBounds = !0) : (S(!1), j.current.params.centeredSlides = !1, j.current.params.centeredSlidesBounds = !1))
          }), [j.current?.wrapperEl.clientWidth, j.current?.el.clientWidth]), (0, R.jsx)(l.E.div, {
            className: _e.navMenu,
            variants: ue,
            initial: "initial",
            animate: c ? "open" : "closed",
            children: (0, R.jsxs)("div", {
              className: _e.navMenuMain,
              children: [(0, R.jsxs)("div", {
                className: _e.sectionMenu,
                children: [!h && E && (0, R.jsx)("div", {
                  className: _e.previousSectionNavButton,
                  children: (0, R.jsx)(be, {
                    direction: "left",
                    className: _e.previousNavButton,
                    onClick: () => j.current?.slidePrev(),
                    "aria-label": n.formatMessage(f.cph_nav_scroll_left)
                  })
                }), (0, R.jsx)("div", {
                  className: _e.sectionItems,
                  children: (0, R.jsx)(Z.tq, {
                    onBeforeInit: e => {
                      j.current = e
                    },
                    onInit: T,
                    className: _e.sectionItems,
                    direction: "horizontal",
                    grabCursor: !0,
                    slidesPerView: "auto",
                    initialSlide: p,
                    onSlideChange: T,
                    onResize: T,
                    onReachEnd: () => u(!0),
                    onReachBeginning: () => k(!0),
                    children: A.map(((e, a) => {
                      let {
                        title: t
                      } = e;
                      return (0, R.jsx)(Z.o5, {
                        children: (0, R.jsx)(ne, {
                          title: t,
                          onClick: () => ((e, a) => {
                            j.current?.slideTo(e), g(e), I({
                              event: "nav_click",
                              event_action: "click",
                              event_category: "nav",
                              event_label: `Secondary Nav > ${a}`,
                              text: `Secondary Nav > ${v} > ${a}`,
                              link_url: void 0,
                              element_placement: "Secondary Nav"
                            })
                          })(a, t),
                          ...p === a ? {
                            selected: !0
                          } : {}
                        }, t)
                      }, t)
                    }))
                  })
                }), !b && E && (0, R.jsx)("div", {
                  className: _e.nextSectionNavButton,
                  children: (0, R.jsx)(be, {
                    direction: "right",
                    className: _e.nextNavButton,
                    onClick: () => j.current?.slideNext(),
                    "aria-label": n.formatMessage(f.cph_nav_scroll_right)
                  })
                })]
              }), (0, R.jsx)("div", {
                className: [_e.navMenuScroll, o ? _e.headerVisible : ""].join(" "),
                children: (0, R.jsx)("div", {
                  className: _e.navMenuGrid,
                  "data-testid": "menu-items",
                  children: P.subNavItems.map((e => {
                    let {
                      title: a,
                      url: t,
                      imageUrl: s
                    } = e;
                    return (0, R.jsx)(me, {
                      title: a,
                      url: t,
                      imageUrl: s,
                      onClick: () => ((e, a) => {
                        I({
                          event: "nav_click",
                          event_action: "click",
                          event_category: "nav",
                          event_label: `Secondary Nav > ${v} > ${P.title} > ${e}`,
                          text: `Secondary Nav > ${v} > ${P.title} > ${e}`,
                          link_url: a,
                          element_placement: "Secondary Nav"
                        }), r()
                      })(a, t)
                    }, a)
                  }))
                })
              })]
            })
          })
        },
        ke = {
          navContainer: "_0713d670aa98ab78b70c3f023453fa9c0b4a",
          navOverlay: "_0713d670aa98ab78f7652094ca203fdbe734",
          headerVisible: "_0713d670aa98ab78ce7a1704aa06af5455d4",
          nav: "_0713d670aa98ab78a2e63b6c64d9b66da513",
          navBar: "_0713d670aa98ab78f5dab893b104ed0a2566",
          navBarVisible: "_0713d670aa98ab78de417570e987b84846e6"
        },
        je = (0, s.createContext)(null),
        Ie = {
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
        ve = e => {
          let {
            title: a
          } = e;
          const {
            pathname: t
          } = (0, ae.useLocation)(), r = (0, ae.useParams)(), {
            data: c,
            loading: o
          } = (() => {
            const e = (0, te.useGenerateCdnSource)(),
              a = (0, m.useQuery)(se.SecondaryNavContent, {
                variables: {
                  url: "/gta-online",
                  branchTags: re
                }
              }),
              t = a => {
                const t = a.images?.find((e => "cphsubnav" === e.context)) || a.images?.[0];
                return {
                  title: a.title,
                  name: a.name,
                  url: a.link && `${a.link.replace("./","../")}`,
                  imageUrl: t && e(t?.src)
                }
              },
              r = e => ({
                title: e.title,
                name: e.name,
                subNavItems: e.children.map(t)
              }),
              c = a?.data?.metaUrlInfo?.tina?.payloadRepresentedAsTree?.tree,
              o = (0, s.useMemo)((() => c?.map(r)), [JSON.stringify(c)]);
            return {
              ...a,
              data: o
            }
          })(), {
            setBodyIsScrollable: i
          } = (0, n.useBodyScrollable)(), {
            state: _
          } = (0, n.useRockstarLocalState)(), [p, g] = (0, s.useState)(!1), [E, S] = (0, s.useState)(!1), [f, b] = (0, s.useState)(!1), {
            pageYOffset: u
          } = (0, n.useScroll)(), {
            track: h
          } = (0, d.useGtmTrack)(), k = (0, s.useContext)(je), j = !_.navHidden, I = !o && c?.length > 0, v = (0, s.useMemo)((() => r["*"]?.slice(0, r["*"].indexOf("/"))), [c, t]), A = (0, s.useMemo)((() => {
            if (!I) return null;
            const e = c.find((e => e.name === v))?.subNavItems?.find((e => e.name.toLowerCase() === r.section)),
              a = e?.imageUrl;
            return a ? `${a}?im=Resize,height=32,width=32` : null
          }), [a, I]);
          return (0, s.useEffect)((() => {
            const e = e => {
              "Escape" === e.key && g(!1)
            };
            return p ? (f || b(!0), S(!1), h({
              event: "nav_open",
              event_action: "open",
              event_category: "nav",
              event_label: "Secondary Nav",
              text: k,
              link_url: void 0,
              element_placement: "Secondary Nav"
            })) : p || !f || E || h({
              event: "nav_close",
              event_action: "close",
              event_category: "nav",
              event_label: "Secondary Nav",
              text: k,
              link_url: void 0,
              element_placement: "Secondary Nav"
            }), p ? (i(!1), document.addEventListener("keyup", e)) : i(!0), () => {
              i(!0), document.removeEventListener("keyup", e)
            }
          }), [p, E]), I ? (0, R.jsxs)(je.Provider, {
            value: a,
            children: [(0, R.jsx)(l.E.div, {
              className: ke.navOverlay,
              onClick: () => g(!1),
              variants: Ie,
              initial: "initial",
              animate: p ? "open" : "closed"
            }), (0, R.jsx)("div", {
              className: [ke.navContainer, j ? ke.headerVisible : ""].join(" "),
              children: (0, R.jsxs)("nav", {
                className: ke.nav,
                children: [(0, R.jsx)("div", {
                  className: [ke.navBar, u > 0 ? ke.navBarVisible : ""].join(" "),
                  children: (0, R.jsx)(oe, {
                    imageUrl: A,
                    isOpen: p,
                    onClick: () => g(!p)
                  })
                }), (0, R.jsx)(he, {
                  navItems: c,
                  category: v,
                  isHeaderVisible: j,
                  onNavItemClick: () => {
                    g(!1), S(!0)
                  },
                  isOpen: p
                })]
              })
            })]
          }) : null
        },
        Ae = e => {
          let {
            title: a,
            heroImages: t
          } = e;
          const s = (0, te.useGetCdnSource)(t?.backgroundMobileImage ?? null),
            r = (0, te.useGetCdnSource)(t?.backgroundDesktopImage ?? null),
            c = (0, te.useGetCdnSource)(t?.layeredMobileImage ?? null),
            o = (0, te.useGetCdnSource)(t?.layeredDesktopImage ?? null),
            i = (0, te.useGetCdnSource)(t?.brandImage ?? null);
          return t ? (0, R.jsxs)("div", {
            className: "_0713d670aa98ab78fbc2a822d7a3c48eb34e",
            style: {
              "--background-image-desktop": `url(${r??""})`,
              "--background-image-mobile": `url(${s??r})`,
              "--layered-image-desktop": `url(${o??""})`,
              "--layered-image-mobile": `url(${c??""})`
            },
            children: [(0, R.jsxs)("div", {
              className: "_0713d670aa98ab78de2f05a98cc1e8098f22",
              "aria-label": a,
              role: "img",
              children: [(0, R.jsx)("div", {
                className: "_0713d670aa98ab78b0ab712026881d681c68"
              }), (0, R.jsx)("div", {
                className: "_0713d670aa98ab78d0d4a5f3681cd69b263b"
              })]
            }), i && (0, R.jsx)("img", {
              alt: a ? `${a} logo` : "",
              className: "_0713d670aa98ab78c5ca50fceaa4ba1c7ffd",
              src: i
            })]
          }) : null
        },
        Pe = e => {
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
        Te = {
          intro: "_0713d670aa98ab78e084502a2c3142b26831",
          summary: "_0713d670aa98ab78d30144ff1b82f2ad1768",
          gettingStarted: "_0713d670aa98ab78e7ed3d6591d76d554d56",
          rightSide: "_0713d670aa98ab78bc58e7ea601b15bb5360",
          gettingStartedSteps: "_0713d670aa98ab78bf3672e679907abfd1ae",
          gettingStartedGuide: "_0713d670aa98ab78c012fda6f9d420abf3f8",
          guideButton: "_0713d670aa98ab78c97a6a64a40df8970b1d",
          icon: "_0713d670aa98ab78a2c1036a74cf02e8c720"
        },
        xe = e => {
          let {
            title: a,
            category: t,
            summary: r,
            steps: c = [],
            guideLink: o = ""
          } = e;
          const [n, m] = (0, s.useState)(!1), {
            track: l
          } = (0, d.useGtmTrack)(), {
            ref: p,
            inView: g
          } = (0, _.YD)({
            threshold: .6
          }), E = (0, i.useIntl)();
          return (0, s.useEffect)((() => {
            g && !n && (l({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "intro",
              element_placement: "intro"
            }), m(!0))
          }), [g]), (0, R.jsxs)("div", {
            className: Te.intro,
            ref: p,
            children: [(0, R.jsxs)("div", {
              className: Te.summary,
              children: [(0, R.jsx)("h1", {
                children: t
              }), (0, R.jsx)("h2", {
                children: a
              }), (0, R.jsx)("p", {
                className: Te.summaryText,
                children: r
              })]
            }), (0, R.jsxs)("div", {
              className: Te.rightSide,
              children: [(0, R.jsxs)("div", {
                className: Te.gettingStarted,
                children: [(0, R.jsx)("h3", {
                  children: E.formatMessage(f.cph_intro_getting_started)
                }), (0, R.jsx)("ol", {
                  className: Te.gettingStartedSteps,
                  children: c.map((e => (0, R.jsx)("li", {
                    children: (0, R.jsx)("span", {
                      children: e
                    })
                  }, e)))
                })]
              }), o && (0, R.jsxs)("div", {
                className: Te.gettingStartedGuide,
                children: [(0, R.jsx)("span", {
                  children: E.formatMessage(f.cph_intro_guide_instruction, {
                    title: a
                  })
                }), (0, R.jsxs)(ae.NavLink, {
                  type: "button",
                  to: o,
                  className: Te.guideButton,
                  children: [(0, R.jsx)("span", {
                    children: E.formatMessage(f.cph_intro_guide_learn_more)
                  }), " ", (0, R.jsx)(Pe, {
                    className: Te.icon
                  })]
                })]
              })]
            })]
          })
        },
        Oe = {
          gen8: "_0713d670aa98ab78a544d5bfda76e76ab075",
          gen9: "_0713d670aa98ab78cf84c163cc29ab4d7992",
          loggedOut: "_0713d670aa98ab78dfabe22a516248474244",
          unknown: "_0713d670aa98ab78eb3b22d7e40ed6c4c3c4",
          loadingScreen: "_0713d670aa98ab78d538a1edefe68e711e2c",
          calloutLoginPrompt: "_0713d670aa98ab78f0b83fd6a53fb2351569",
          calloutNoChar: "_0713d670aa98ab78be2956a2b19cf17847c5",
          feedback: "_0713d670aa98ab78afd504f69a7cf7426c17",
          rating: "_0713d670aa98ab78a5e2b4e97b7752e5bec6"
        };
      r.p8.registerPlugin(c.i);
      const {
        host: We,
        signup: Ne
      } = (0, n.getScConfigForOrigin)(), Ce = e => {
        let {
          heroImages: a,
          awardsKey: t,
          title: c,
          category: m,
          summary: _,
          steps: l,
          guideLink: p,
          rewardsKey: g,
          images: E,
          highlights: S
        } = e;
        const {
          windowWidth: b
        } = (0, n.useWindowResize)(), {
          selectedCharacterTuple: u
        } = (0, d.useRockstarUserState)(), {
          loading: h,
          loggedIn: j
        } = (0, d.useRockstarUser)(), {
          setAwardsKey: I,
          setRewardsKey: v
        } = k(), [A, P] = (0, s.useState)("unknown"), T = (0, s.useRef)(null), x = (0, s.useRef)(null), {
          formatMessage: O
        } = (0, i.useIntl)(), {
          track: W
        } = (0, d.useGtmTrack)(), N = (0, n.useLocale)(), C = (0, n.toScLocaleString)(N), [w, G] = (0, s.useState)(!1), D = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, y = `${Ne}&returnUrl=${window.location.pathname}&lang=${C}`, z = `https://${We}.rockstargames.com/settings/linkedaccounts`;
        (0, s.useEffect)((() => {
          t && I(t)
        }), [t]), (0, s.useEffect)((() => {
          g && v(g)
        }), [g]), (0, s.useEffect)((() => () => {
          I(null), v(null)
        }), []), (0, s.useEffect)((() => {
          if (null === j || !Array.isArray(u)) return;
          const e = (0, n.getGen9Consoles)().includes(u[0]),
            a = (0, n.getGen8Consoles)().includes(u[0]);
          a || e ? e ? P("gen9") : a && P("gen8") : P("loggedOut")
        }), [j, u]), (0, s.useEffect)((() => {
          h || w || null === j || "unknown" === A || (W({
            event: "virtualPageview",
            view_name: `career progress hub: ${c.toLowerCase()}`,
            page_layout: A
          }), G(!0))
        }), [j, A, h]);
        const M = r.p8.matchMedia();
        return (0, s.useLayoutEffect)((() => {
          if (!x.current) return;
          const e = x.current.getElementsByTagName("img")?.[5];
          e && M.add({
            isDesktop: "(min-width: 500px)",
            isMobile: "(max-width: 501px)",
            reduceMotion: "(prefers-reduced-motion: reduce)"
          }, (a => {
            const {
              isDesktop: t,
              reduceMotion: s
            } = a.conditions;
            if (s) return;
            const c = {
                mobile: {
                  from: "-100vw",
                  to: "-275vw"
                },
                desktop: {
                  from: "0",
                  to: -1 * (e.offsetLeft + e.width - window.innerWidth)
                }
              },
              o = t ? c.desktop : c.mobile,
              i = {
                trigger: x.current,
                scrub: !0
              };
            r.p8.fromTo(x.current, {
              x: o.from,
              scrollTrigger: i
            }, {
              x: o.to,
              scrollTrigger: i,
              ease: "none"
            })
          }))
        }), [h, A, x.current]), (0, s.useEffect)((() => {
          r.p8.matchMediaRefresh()
        }), [b]), h ? (0, R.jsx)("div", {
          className: Oe.loadingScreen,
          children: (0, R.jsx)(o.LoadingAnimation, {
            type: "SPINNING"
          })
        }) : (0, R.jsxs)(R.Fragment, {
          children: [(0, R.jsx)(ve, {
            title: c
          }), (0, R.jsxs)("div", {
            className: Oe[A],
            ref: T,
            children: [(0, R.jsx)(Ae, {
              title: c,
              heroImages: a ?? {}
            }), (0, R.jsx)(xe, {
              title: c,
              category: m,
              summary: _,
              steps: l,
              guideLink: p
            }), (0, R.jsx)(V, {}), null, null, !j && (0, R.jsx)(o.CalloutSection, {
              header: O(f.cph_login_prompt_title),
              subheader: O(f.cph_login_prompt_body),
              type: "button",
              action_text: O(f.cph_login_prompt_button),
              actionFooterHelperText: O(f.cph_login_prompt_button_helper),
              actionFooterLinkText: O(f.cph_login_prompt_button_helper_link),
              actionFooterLink: y,
              actionFooterLinkTrackingData: {
                event: "cta_signup",
                event_category: "cta",
                event_action: "register",
                event_label: "callout section",
                text: O(f.cph_login_prompt_button_helper_link).toLowerCase(),
                link_url: y
              },
              link: D,
              className: Oe.calloutLoginPrompt,
              trackingData: {
                event: "cta_login",
                event_category: "cta",
                event_action: "login",
                event_label: "callout section",
                text: O(f.cph_login_prompt_button_helper_link).toLowerCase(),
                link_url: D,
                element_placement: "callout section"
              }
            }), j && !1 === u && (0, R.jsx)(o.CalloutSection, {
              header: O(f.cph_loggedin_nochar_title),
              subheader: O(f.cph_loggedin_nochar_body),
              type: "button",
              action_text: O(f.cph_loggedin_nochar_button),
              link: z,
              className: Oe.calloutNoChar,
              trackingData: {
                event: "cta_link_account",
                event_category: "cta",
                event_action: "link_account",
                event_label: "callout section",
                text: O(f.cph_loggedin_nochar_button).toLowerCase(),
                link_url: z,
                element_placement: "callout section"
              }
            }), (0, R.jsx)(ee, {}), (0, R.jsx)(o.CalloutSection, {
              header: O(f.cph_callout_feedback_title),
              subheader: O(f.cph_callout_feedback_body),
              type: "button",
              action_text: O(f.cph_callout_feedback_button),
              link: "/gta-online/feedback",
              className: Oe.feedback
            }), (0, R.jsx)(o.Rating, {
              titleSlug: "GTAOnline",
              className: Oe.rating
            })]
          })]
        })
      }
    },
    1374: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "SecondaryNavContent"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "url"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "branchTags"
              }
            },
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "metaUrlInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "url"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "branchTags"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "branchTags"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payloadRepresentedAsTree"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 225
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query SecondaryNavContent($url: String!, $locale: String!, $branchTags: [String]) {\n    metaUrlInfo(url: $url, locale: $locale, branchTags: $branchTags) {\n        tina {\n            payloadRepresentedAsTree\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.SecondaryNavContent = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var c = s[a] || new Set,
          o = new Set,
          i = new Set;
        for (c.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var n = i;
          i = new Set, n.forEach((function(e) {
            o.has(e) || (o.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "SecondaryNavContent")
    },
    1782: (e, a, t) => {
      var s = {
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T1.jpg": 5287,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T2.jpg": 5740,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T3.jpg": 8151,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4.jpg": 446,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4_CASH.jpg": 31,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4_RP.jpg": 8945,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T1.jpg": 6784,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T2.jpg": 4242,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T3.jpg": 6713,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4.jpg": 1628,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4_CASH.jpg": 8825,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4_RP.jpg": 1853,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T1.jpg": 5966,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T2.jpg": 7473,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T3.jpg": 7206,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4.jpg": 2492,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4_CASH.jpg": 4535,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4_RP.jpg": 8643,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T1.jpg": 1124,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T2.jpg": 5604,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T3.jpg": 3080,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4.jpg": 435,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4_CASH.jpg": 9487,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4_RP.jpg": 176,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T1.jpg": 5674,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T2.jpg": 6736,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T3.jpg": 516,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4.jpg": 9043,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4_CASH.jpg": 9920,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4_RP.jpg": 6144,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T1.jpg": 6859,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T2.jpg": 8395,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T3.jpg": 5136,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4.jpg": 5906,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4_CASH.jpg": 1060,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4_RP.jpg": 5840,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T1.jpg": 4721,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T2.jpg": 1033,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T3.jpg": 6524,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4.jpg": 2407,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4_CASH.jpg": 5876,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4_RP.jpg": 6716,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T1.jpg": 3215,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T2.jpg": 1433,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T3.jpg": 9382,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4.jpg": 3214,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4_CASH.jpg": 5616,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4_RP.jpg": 8581,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T1.jpg": 9583,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T2.jpg": 2341,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T3.jpg": 7326,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4.jpg": 967,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4_CASH.jpg": 5378,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4_RP.jpg": 2064,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T1.jpg": 6161,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T2.jpg": 4474,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T3.jpg": 2550,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4.jpg": 1009,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4_CASH.jpg": 583,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4_RP.jpg": 487,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T1.jpg": 7958,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T2.jpg": 9521,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T3.jpg": 5835,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4.jpg": 6724,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4_CASH.jpg": 1881,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4_RP.jpg": 1980,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T1.jpg": 1629,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T2.jpg": 2608,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T3.jpg": 5564,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4.jpg": 8001,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4_CASH.jpg": 1763,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4_RP.jpg": 9924,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T1.jpg": 3519,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T2.jpg": 2610,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T3.jpg": 7420,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4.jpg": 5760,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4_CASH.jpg": 987,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4_RP.jpg": 5408,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T1.jpg": 570,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T2.jpg": 6044,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T3.jpg": 6978,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4.jpg": 7852,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4_CASH.jpg": 9552,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4_RP.jpg": 1393,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T1.jpg": 5244,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T2.jpg": 2209,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T3.jpg": 2598,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4.jpg": 7780,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4_CASH.jpg": 1230,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4_RP.jpg": 4503,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T1.jpg": 7841,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T2.jpg": 193,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T3.jpg": 9277,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4.jpg": 752,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4_CASH.jpg": 36,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4_RP.jpg": 4322,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T1.jpg": 2630,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T2.jpg": 6569,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T3.jpg": 6302,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4.jpg": 2096,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4_CASH.jpg": 2573,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4_RP.jpg": 6684,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T1.jpg": 7766,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T2.jpg": 599,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T3.jpg": 1085,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4.jpg": 7509,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4_CASH.jpg": 1347,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4_RP.jpg": 397,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T1.jpg": 3888,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T3.jpg": 6972,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T4.jpg": 7434,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T1.jpg": 4906,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T2.jpg": 3051,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T3.jpg": 7310,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4.jpg": 3918,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH.jpg": 7800,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH_LARGE.jpg": 627,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH_SMALL.jpg": 9255,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP.jpg": 703,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP_LARGE.jpg": 1026,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP_SMALL.jpg": 426,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T1.jpg": 4493,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T2.jpg": 1279,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T3.jpg": 8453,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4.jpg": 8262,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4_CASH.jpg": 2553,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4_RP.jpg": 595,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T1.jpg": 5643,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T2.jpg": 9644,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T3.jpg": 385,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4.jpg": 1858,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4_CASH.jpg": 8208,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4_RP.jpg": 6372,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T1.jpg": 5890,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T2.jpg": 3906,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T3.jpg": 4257,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4.jpg": 9232,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4_CASH.jpg": 1549,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4_RP.jpg": 4049,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T1.jpg": 9041,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T2.jpg": 6620,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T3.jpg": 7196,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4.jpg": 9781,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4_CASH.jpg": 8109,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4_RP.jpg": 8306,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T1.jpg": 7231,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T2.jpg": 339,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T3.jpg": 2237,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4.jpg": 9346,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4_CASH.jpg": 9405,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4_RP.jpg": 7066,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T1.jpg": 9146,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T2.jpg": 3958,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T3.jpg": 7859,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4.jpg": 9282,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4_CASH.jpg": 9810,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4_RP.jpg": 237,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T1.jpg": 68,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T2.jpg": 7774,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T3.jpg": 825,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4.jpg": 8765,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4_CASH.jpg": 9777,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4_RP.jpg": 872,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T1.jpg": 9948,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T2.jpg": 4705,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T3.jpg": 8816,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4.jpg": 7421,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4_CASH.jpg": 7330,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4_RP.jpg": 2471,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T1.jpg": 1037,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T2.jpg": 4802,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T3.jpg": 6607,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4.jpg": 7545,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4_CASH.jpg": 2393,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4_RP.jpg": 3719
      };

      function r(e) {
        var a = c(e);
        return t(a)
      }

      function c(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = c, e.exports = r, r.id = 1782
    },
    9806: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/7ca2224f54f343567a82.svg"
    },
    5287: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0f2b201baf8998bd62eb.jpg"
    },
    5740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/dbc5f43c8eb019627a44.jpg"
    },
    8151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/88121bce8b291c690230.jpg"
    },
    446: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f705ea60be6fd4bfcc83.jpg"
    },
    31: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    8945: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    6784: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/52316f5b96df66dd3164.jpg"
    },
    4242: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/19f6002b1bafadcb1faa.jpg"
    },
    6713: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c42c96b6724a71049d54.jpg"
    },
    1628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ac7127a03ee7fedf2f7e.jpg"
    },
    8825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    1853: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    5966: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c05164a06a8e838f0a24.jpg"
    },
    7473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a2555f7c2e3719fb3243.jpg"
    },
    7206: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e9b679025dffa1c92503.jpg"
    },
    2492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/44e0062e51e23ef01493.jpg"
    },
    4535: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    8643: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    1124: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/474fddacd120a12ca9a7.jpg"
    },
    5604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0a17cc8de916be85bf9b.jpg"
    },
    3080: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e556687869dd49a7c4a4.jpg"
    },
    435: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b01bbf2ff5cd414f42b4.jpg"
    },
    9487: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    176: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    5674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b5dc4f7cad99fb31e551.jpg"
    },
    6736: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/64495a664ef51c2f2e89.jpg"
    },
    516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b8bb87c9df1c40949147.jpg"
    },
    9043: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/34869948d74ac8a56ba1.jpg"
    },
    9920: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    6144: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    6859: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/4a87d416a137e74339a7.jpg"
    },
    8395: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a97bd5c55e8fc479d960.jpg"
    },
    5136: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/5b40dd61e3351f2d52da.jpg"
    },
    5906: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/749dd04bb37f70a72909.jpg"
    },
    1060: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    5840: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    4721: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/776996c91590e82f5ed0.jpg"
    },
    1033: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f45fe10d6a75a4a08f20.jpg"
    },
    6524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/952daefcd47aa259c9c8.jpg"
    },
    2407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/1066fffed4e9a33275ad.jpg"
    },
    5876: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    6716: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    3215: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/02c6b4b3afa86f76d799.jpg"
    },
    1433: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f9b8994d14fbad59480a.jpg"
    },
    9382: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ac3e40c879579fb1120d.jpg"
    },
    3214: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/6bb543e781206d1eb522.jpg"
    },
    5616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    8581: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    9583: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3dabaf864dce2e78f54b.jpg"
    },
    2341: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/74fecc8813b74603b165.jpg"
    },
    7326: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/dee7c2a303cb6a284ccd.jpg"
    },
    967: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/9d2ed387fc238a9f1753.jpg"
    },
    5378: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    2064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    6161: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b82d249d93f194be7307.jpg"
    },
    4474: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/fadeb57965c2b0f2d289.jpg"
    },
    2550: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/570cf9b8e128097bbc6b.jpg"
    },
    1009: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ad8ab1ad80cf701f8a08.jpg"
    },
    583: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    487: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    7958: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/73305382fc9be10ba1af.jpg"
    },
    9521: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/45acff88478e4d2d674e.jpg"
    },
    5835: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/9bc1daf042f3508cbf3f.jpg"
    },
    6724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c9eb88c0ad6a2390d1ce.jpg"
    },
    1881: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    1980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    1629: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/9e8a57b28648562ba798.jpg"
    },
    2608: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/07ac5f98da52c8538e2d.jpg"
    },
    5564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/23e3594ea5ed9aae1b77.jpg"
    },
    8001: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f86a8892f05fd49f02ae.jpg"
    },
    1763: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    9924: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    3519: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/bbca3a2c0454baf3589b.jpg"
    },
    2610: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/9f90ef02fe72d601b85c.jpg"
    },
    7420: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8d1e032e2667f62d80f9.jpg"
    },
    5760: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ef060222f3d758a49414.jpg"
    },
    987: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    5408: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    570: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/efc287e7311a2987656e.jpg"
    },
    6044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/172983a613e0faf55d79.jpg"
    },
    6978: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c281b150d038939d9f01.jpg"
    },
    7852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/67e6a53eb3babaafe36c.jpg"
    },
    9552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    1393: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    5244: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/2ef56f61de4bce2a88fb.jpg"
    },
    2209: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0bf56eb86b7adb04d3f6.jpg"
    },
    2598: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/2df645744f0406483bc8.jpg"
    },
    7780: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/21ec99d8e8f5c242a2d1.jpg"
    },
    1230: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    4503: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    7841: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/5b9c0715c0bb25b8c7d1.jpg"
    },
    193: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e8bb2ffbcae9747c27f6.jpg"
    },
    9277: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/56b1c8aca377b6c957b2.jpg"
    },
    752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8e2d005507871c77c954.jpg"
    },
    36: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    4322: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    2630: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/32e0fe42c5e879c8c207.jpg"
    },
    6569: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/79954d8e68bbfafc0ee0.jpg"
    },
    6302: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/1c2aee0a8caa0ae8b169.jpg"
    },
    2096: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3379b6c6af4067fcd228.jpg"
    },
    2573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    6684: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    7766: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/fc6647cf9faacb5e6f36.jpg"
    },
    599: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/fd26bee9495bf244604c.jpg"
    },
    1085: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/853e8452fd443180d934.jpg"
    },
    7509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c35b590ee604195e255e.jpg"
    },
    1347: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    397: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    3888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a7098f565893419df504.jpg"
    },
    6972: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8af12f566b014b461cf8.jpg"
    },
    7434: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a08a401d8a5ad15aa30e.jpg"
    },
    4906: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a7098f565893419df504.jpg"
    },
    3051: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b1e3ca3528a31e665d34.jpg"
    },
    7310: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8af12f566b014b461cf8.jpg"
    },
    3918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a08a401d8a5ad15aa30e.jpg"
    },
    7800: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    627: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    9255: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    703: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    1026: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    426: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    4493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8e1784189be964358abe.jpg"
    },
    1279: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/53869a6dc441bdfe915c.jpg"
    },
    8453: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/5377586768df9d34e333.jpg"
    },
    8262: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ee866f1351e34eb52850.jpg"
    },
    2553: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    5643: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/cc50f758a4f1e477c2a7.jpg"
    },
    9644: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c3476d9c396ed513e036.jpg"
    },
    385: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/9041ceb8f1b110092ecf.jpg"
    },
    1858: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c2ea7a78e0e8b620e5ab.jpg"
    },
    8208: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    6372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    5890: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/fd842117d7294e4b463a.jpg"
    },
    3906: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/16227c08a84928ff1754.jpg"
    },
    4257: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c04c8e49a8bbab1100e9.jpg"
    },
    9232: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/f2ec59c31d9c4dc5b112.jpg"
    },
    1549: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    4049: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    9041: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/d2c75551065350dde1c4.jpg"
    },
    6620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/702c20b1298c0048b30e.jpg"
    },
    7196: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/329444d034fe2fe5bcf7.jpg"
    },
    9781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/29717875c04b25a7a7ba.jpg"
    },
    8109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    8306: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    7231: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/af6a76f16094fe09a6a4.jpg"
    },
    339: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/291acf24ca62bf67fa15.jpg"
    },
    2237: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/36d6b53f4d449c1c0ead.jpg"
    },
    9346: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/bbd7a850ab8096c7e4d8.jpg"
    },
    9405: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    7066: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    9146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/6aa346aa995ba8d525b8.jpg"
    },
    3958: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/cae36a02c82892fee467.jpg"
    },
    7859: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e188c7ff0aca1ae934bd.jpg"
    },
    9282: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/90d4efa8bc25b86a845e.jpg"
    },
    9810: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    237: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    68: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/cc9bcd5a911c7e802d48.jpg"
    },
    7774: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e34cc45bc2de31769a7d.jpg"
    },
    825: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/5631abb76b70d2d741a0.jpg"
    },
    8765: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/95cfe73bfac8b71fbc51.jpg"
    },
    9777: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8dd297fd9b13c7e51e24.jpg"
    },
    872: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0e53b1cdbe1e831a679d.jpg"
    },
    9948: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/8eb860306b2f65fb7084.jpg"
    },
    4705: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0ea8ec5f320416d307a7.jpg"
    },
    8816: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/5b139dfffa3f54febe31.jpg"
    },
    7421: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/cdd1433dcdc536733c68.jpg"
    },
    7330: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    2471: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    1037: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/9ab105cbae68ab334d73.jpg"
    },
    4802: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/883def238291dbf73a48.jpg"
    },
    6607: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/47fdd3365fdad6cb8ec6.jpg"
    },
    7545: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3e5e796d11be2e76f4b0.jpg"
    },
    2393: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/86d41cb7dfac6b8a57a6.jpg"
    },
    3719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5a15f4404ec05bed894.jpg"
    },
    5481: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/7ca2224f54f343567a82.svg"
    }
  }
]);
//# sourceMappingURL=2781bd58c27630899773.js.map