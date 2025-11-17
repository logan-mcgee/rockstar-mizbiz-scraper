try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "40ff6509-d857-4975-9e34-9b2d870e2537", e._sentryDebugIdIdentifier = "sentry-dbid-40ff6509-d857-4975-9e34-9b2d870e2537")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1270, 3003], {
    325: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(80391),
        r = t(28985),
        o = t(47240),
        n = t(32903),
        i = t(81715),
        c = t(49429),
        d = t(11008);
      const l = {
          ps: s,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: r,
          ps5: o,
          switch: d,
          nintendoswitch: d,
          nintendoswitch2: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7696cbc8ff9dc5f2ed3f618ea7252e3b.svg",
          xbox: n,
          xboxone: c,
          xboxseriesxs: i,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: t(85719),
          pcalt: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          netflix: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc13a3a816ffa3f7e379ea32a79f99a3.svg",
          default: ""
        },
        m = e => l[e] || null
    },
    5328: (e, a, t) => {
      var s = {
        "./applestore.svg": 49733,
        "./googleplay.svg": 62749,
        "./left.svg": 84941,
        "./pc.svg": 39821,
        "./pcalt.svg": 29886,
        "./ps.svg": 65437,
        "./ps3.svg": 33492,
        "./ps4.svg": 65115,
        "./ps5.svg": 23146,
        "./right.svg": 80304,
        "./switch.svg": 22454,
        "./x.svg": 66426,
        "./xbox.svg": 59129,
        "./xboxone.svg": 42659,
        "./xboxseriesxs.svg": 36773
      };

      function r(e) {
        var a = o(e);
        return t(a)
      }

      function o(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = o, e.exports = r, r.id = 5328
    },
    11008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    17954: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(62229),
        r = t(2918),
        o = t(92440),
        n = t(95966),
        i = t(84213),
        c = t(28759);
      const d = ({
        relativeTo: e = ".."
      } = {}) => {
        const {
          selectedCharacterTuple: a
        } = (0, r.useRockstarUserState)(), t = (0, n.useRockstarTokenPing)(), d = (0, o.useGenerateCdnSource)(), [l, m] = (0, s.useState)(), [g, f] = (0, s.useState)(), [p, u] = (0, s.useState)([]), {
          data: b,
          loading: _
        } = (0, n.useQuery)(i.SecondaryNavContent, {
          variables: {
            branchTags: ["1"]
          }
        });
        return (0, s.useEffect)(() => {
          (async () => {
            u([]);
            const e = a?.[0],
              s = a?.[1];
            if ((0, n.getGen9Consoles)().includes(e)) try {
              const {
                result: a
              } = await (0, n.coreScApiFetch)("games/gtao/career/progress/summary", {
                pingBearer: t,
                query: {
                  platform: e,
                  slot: s
                }
              });
              a && u(a.sections)
            } catch (e) {
              console.error(e)
            }
          })()
        }, [String(a)]), (0, s.useEffect)(() => {
          if (!b) return;
          const a = "cphsubnav",
            t = "cphdiscover",
            s = s => {
              const r = b?.all?.find(e => e?.tina?.payloadRepresentedAsTree?.tree?.[0]?.idHash === s?.idHash),
                o = b?.tinaModulesInfo?.find(e => e?.tina?.payloadRepresentedAsTree?.tree?.[0]?.idHash === s?.idHash),
                n = r ?? o,
                i = n?.tina?.payload?.meta?.prod ?? !0,
                l = s.children.map(s => {
                  const r = ({
                      context: e
                    }) => {
                      const a = s.images?.find(a => a.context === e);
                      return a?.src ? d(a.src, {
                        prod: i
                      }) : null
                    },
                    o = c.b[s.rewardsKey],
                    {
                      tiers: n
                    } = p?.find(({
                      id: e
                    }) => e === o) ?? {
                      tiers: []
                    },
                    l = (s.images?.filter(e => e.context === t) ?? [])?.length,
                    m = r({
                      context: a
                    }) ?? r({
                      context: ""
                    });
                  return {
                    title: s.title,
                    name: s.name,
                    tiers: n,
                    url: `${e}/${s.link}`,
                    images: {
                      tinyThumb: `${r({context:a})}?im=Resize,height=32,width=32`,
                      brand: r({
                        context: t
                      }),
                      desktop: m,
                      mobile: r({
                        context: "cphcover"
                      }) ?? m
                    },
                    createdAt: s.created,
                    discoverSafe: l
                  }
                });
              return {
                title: s.title,
                name: s.name,
                subNavItems: l
              }
            },
            r = b?.tinaModulesInfo?.map(e => e?.tina?.payloadRepresentedAsTree?.tree?.[0] ?? null).filter(Boolean).map(s),
            o = b?.all?.map(e => e?.tina?.payloadRepresentedAsTree?.tree?.[0] ?? null).filter(Boolean).map(s);
          m(r), f(o)
        }, [b, p, e, d]), {
          loading: _,
          data: l,
          allData: g
        }
      }
    },
    19913: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var s = t(42295),
        r = t(62229),
        o = t(9623),
        n = t(2918),
        i = t(95966),
        c = t(325);
      const d = {
        applestore: "rockstargames-sites-gta-gen9e97115f479fca9697b140bfbfa6534f2",
        border: "rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620",
        borderless: "rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38",
        btnContent: "rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc",
        btnIcon: "rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad",
        "clr-button": "rockstargames-sites-gta-gen9d4ec60c769b079ac712ea0264480d480",
        cta: "rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480",
        disabled: "rockstargames-sites-gta-gen9d7a212b6e993966a3773c335359586d5",
        googleplay: "rockstargames-sites-gta-gen9ad074b742a5ce23c053880b289c2bbe6",
        icon: "rockstargames-sites-gta-gen9c394fea7e071f1213a5d44f5b569bd1a",
        "icon-left": "rockstargames-sites-gta-gen9c73b838b4f69aff2241b814ad1547c48",
        "icon-right": "rockstargames-sites-gta-gen9f0de4560b8a1190f63a65ad1e9fd4e03",
        label: "rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1",
        lgMax: "rockstargames-sites-gta-gen9df956d5fc70d2129beb1406170402148",
        lgMin: "rockstargames-sites-gta-gen9e974b6c740bfac2959d5170bd2d9f3ca",
        netflix: "rockstargames-sites-gta-gen9d82eca980780ce1b5e831106013dba81",
        nintendoswitch: "rockstargames-sites-gta-gen9e646f30d1a0c9990c5178e67be93f75e",
        nintendoswitch2: "rockstargames-sites-gta-gen9dcdb37a92eeedc0ae18336dd9fb9e39e",
        pc: "rockstargames-sites-gta-gen9a1b9c83f518722f01ecb3ece3681c117",
        pillBtn: "rockstargames-sites-gta-gen9f39c827be0d560f2cc376d83e3988fbc",
        platformIcon: "rockstargames-sites-gta-gen9f25581474e97714bc974f3ab51136511",
        primary: "rockstargames-sites-gta-gen9a857266233e524e3bb96d327a2095642",
        ps: "rockstargames-sites-gta-gen9d439373e74d36689bc159e9a585db184",
        ps4: "rockstargames-sites-gta-gen9e49e2b4d44ce7bab7966fbd9fdfb0760",
        ps5: "rockstargames-sites-gta-gen9baa2b83edce86fda2d9dffb2682092f7",
        selected: "rockstargames-sites-gta-gen9a63fd127fc0aab231f6740340658d647",
        smMax: "rockstargames-sites-gta-gen9fce12fc6343fbf09a5bb418bb8107f0b",
        xbox: "rockstargames-sites-gta-gen9cf162a09fdf0c180f3f5091077493d98",
        xboxone: "rockstargames-sites-gta-gen9e34e2c7fd3dd88f7e7d46f495c15a98d",
        xboxseriesxs: "rockstargames-sites-gta-gen9f5b0bc5e5a291a3ecab7447d33a76e55"
      };
      var l = t(4572),
        m = t.n(l);
      const g = ({
          platform: e = "",
          altText: a
        }) => {
          const t = e ? (0, c.A)(e) : null,
            r = t ? (0, s.jsx)("img", {
              className: d.platformIcon,
              src: t,
              alt: a
            }) : null;
          return (0, s.jsx)("span", {
            className: [d.btnContent, d.platformButton].join(" "),
            children: r
          })
        },
        f = ({
          children: e,
          href: a,
          style: t,
          content: l,
          variant: f = null,
          size: p = "medium",
          icon: u,
          iconPosition: b = "none",
          iconStyle: _,
          badge: h,
          badgeStyle: k,
          platformItem: v,
          platformStyle: x = "border",
          gtm: w = {},
          disabled: y,
          reloadDocument: S = !1,
          className: C,
          role: T = ""
        }) => {
          const {
            track: N
          } = (0, n.useGtmTrack)(), A = (0, i.useDataLayer)(), M = l ?? e, L = (0, i.findPlatform)(v)?.friendlyName, R = (0, r.useMemo)(() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch (a) {
              t = e
            }
            return e === t
          }, [a]), E = (0, r.useCallback)(() => {
            y || N({
              event: "cta_other",
              text: l?.toLowerCase() ?? e ?? void 0,
              ...A,
              ...w,
              link_url: a ?? void 0
            })
          }, [w, a, A]), I = () => u ? (0, s.jsx)("span", {
            className: [d.icon, `icon-${b}`].join(" "),
            style: _,
            children: (0, s.jsx)("img", {
              className: d.btnIcon,
              src: (0, c.A)(u) || "",
              alt: `${u} icon`
            })
          }) : null;
          return (0, s.jsx)(o.Link, {
            to: a,
            target: R ? "_self" : "_blank",
            className: m()(d.cta, "platform" === f && v ? d[v] : "", x && d[x], y ? d.disabled : "", C),
            style: t,
            "data-variant": f,
            "data-size": p,
            onClick: E,
            "aria-label": M,
            reloadDocument: S,
            role: T,
            children: "platform" === f && v ? (0, s.jsx)(g, {
              platform: v,
              altText: L || M
            }) : (0, s.jsxs)("div", {
              className: d.btnContent,
              children: ["left" === b && I(), (0, s.jsx)("span", {
                className: d.label,
                children: M
              }), "right" === b && I(), h ? (0, s.jsx)("span", {
                className: d.badge,
                style: k,
                children: h
              }) : null]
            })
          })
        }
    },
    22454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    23146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    28759: (e, a, t) => {
      "use strict";
      t.d(a, {
        b: () => s,
        D: () => r
      });
      const s = {
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
          ARENAWAR: -57043721,
          CHOPSHOP: -4750723,
          CLUCKINBELL: -1470413487,
          BAILOFFICE: -1472755728,
          HACKERDEN: -1087198207,
          FIELDHANGAR: 1376198550,
          BUSINESSTYCOON: -1366130389
        },
        r = (0, t(81788).defineMessages)({
          cph_awards_title: {
            id: "cph_awards_title",
            description: "Awards section title",
            defaultMessage: "Awards"
          },
          cph_awards_metal_completed: {
            defaultMessage: "{metal}: Completed.",
            description: "Aria label when a metal level is completed",
            id: "cph_awards_metal_completed"
          },
          cph_awards_metal_not_unlocked: {
            defaultMessage: "{metal}: Not unlocked.",
            description: "Aria label when a metal level is not unlocked",
            id: "cph_awards_metal_not_unlocked"
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
            defaultMessage: "PlayStation5"
          },
          cph_progress_available_on_aria_xbox: {
            id: "cph_progress_available_on_aria_xbox",
            description: "Platform name used in ARIA labels: Xbox Series X / S",
            defaultMessage: "Xbox Series X|S"
          },
          cph_progress_available_on_aria_pc: {
            id: "cph_progress_available_on_aria_pc",
            description: "Platform name used in ARIA labels: PC",
            defaultMessage: "PC"
          },
          cph_login_prompt_title: {
            id: "cph_login_prompt_title",
            description: "Title of login prompt",
            defaultMessage: "Sign In to Track Your Progress"
          },
          cph_login_prompt_body: {
            id: "cph_login_prompt_body",
            description: "Body of login prompt",
            defaultMessage: "Sign in to your account to see all the rewards you can earn, the awards you've won, and the possibilities still ahead of you."
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
            defaultMessage: "Create an Account"
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
            defaultMessage: "We couldn't find a GTA Online character linked to your account. Link one or switch to a different account.",
            description: "Body for CTA when no character is found"
          },
          cph_loggedin_nochar_button: {
            id: "cph_loggedin_nochar_button",
            defaultMessage: "Link a game account",
            description: "Button for CTA when no character is found"
          },
          cph_reward_locked_alt: {
            id: "cph_reward_locked",
            defaultMessage: "Reward locked",
            description: "Alt text for reward locked icon"
          },
          cph_reward_claimable: {
            id: "cph_reward_claimable",
            defaultMessage: "Ready to claim",
            description: 'Text for reward "Ready to claim" label'
          },
          cph_reward_claimed: {
            id: "cph_reward_claimed",
            defaultMessage: "Claimed",
            description: 'Text for reward "Claimed" label'
          },
          cph_tier_complete: {
            id: "cph_tier_complete",
            defaultMessage: "Tier Complete",
            description: "Text when a tier is completed"
          },
          cph_reward_ready_to_claim: {
            id: "cph_reward_ready_to_claim",
            defaultMessage: "Rewards ready to be claimed",
            description: "Text informing user that they have rewards available to claim"
          },
          cph_reward_how_to_claim: {
            id: "cph_reward_how_to_claim",
            defaultMessage: "Rewards ready to be claimed. Visit the Career Progress Menu in-game to claim.",
            description: "Text explaining how to claim a reward that is currently available"
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
          },
          cph_awards_bonuses_title: {
            id: "cph_awards_bonuses_title",
            description: "Title for Bonuses list within each award",
            defaultMessage: "Bonuses"
          },
          cph_awards_bronze: {
            id: "cph_awards_bronze",
            description: "Label for Bronze (in context of award levels)",
            defaultMessage: "Bronze"
          },
          cph_awards_silver: {
            id: "cph_awards_silver",
            description: "Label for Silver (in context of award levels)",
            defaultMessage: "Silver"
          },
          cph_awards_gold: {
            id: "cph_awards_gold",
            description: "Label for Gold (in context of award levels)",
            defaultMessage: "Gold"
          },
          cph_awards_platinum: {
            id: "cph_awards_platinum",
            description: "Label for Platinum (in context of award levels)",
            defaultMessage: "Platinum"
          },
          cph_awards_bonuses_tattoo: {
            id: "cph_awards_bonuses_tattoo",
            description: "Label for Tattoo bonus type",
            defaultMessage: "{tattooName} Tattoo"
          },
          cph_awards_rp_bonus_info: {
            id: "cph_awards_rp_bonus_info",
            description: "Information on tooltip for RP bonus information for each tier level",
            defaultMessage: "Complete unique challenges to earn GTA$, bonus items, and more including RP bonuses for each Level:"
          }
        })
    },
    28985: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    29315: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(42295),
        r = t(62229);
      class o extends r.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, s.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9d5c408a8b618087ef4bb452f96526b2b",
            children: [(0, s.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, s.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const n = (e, a = null, t = !1) => function(r) {
        return (0, s.jsx)(o, {
          header: a,
          hidden: t,
          children: (0, s.jsx)(e, {
            ...r
          })
        })
      }
    },
    29886: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg"
    },
    32903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    33492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    36773: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    39821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    42659: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    47240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    49429: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    49733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    59129: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    62749: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    65115: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    65437: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    66426: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    80304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    80391: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    81715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    },
    84213: e => {
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
                value: "tinaModulesInfo"
              },
              arguments: [{
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
                  value: "ids"
                },
                value: {
                  kind: "ListValue",
                  values: [{
                    kind: "StringValue",
                    value: "38a82",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "8k827",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "o49o8",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "k9a48",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "k9a38",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "a1453",
                    block: !1
                  }]
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
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
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
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "all"
              },
              name: {
                kind: "Name",
                value: "tinaModulesInfo"
              },
              arguments: [{
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
                  value: "ids"
                },
                value: {
                  kind: "ListValue",
                  values: [{
                    kind: "StringValue",
                    value: "2k384",
                    block: !1
                  }]
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
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
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
          end: 650
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: 'query SecondaryNavContent($locale: String!, $branchTags: [String]) {\n    tinaModulesInfo(\n        locale: $locale\n        ids: [\n            "38a82" # Contact Missions\n            "8k827" # Businesses\n            "o49o8" # Heists\n            "k9a48" # Recreation\n            "k9a38" # Series Modes\n            "a1453" # Special Interests\n        ]\n    ) {\n        tina {\n            payload\n            payloadRepresentedAsTree\n        }\n    }\n\n    all: tinaModulesInfo(\n        locale: $locale\n        ids: [\n            "2k384" # All Packs\n        ]\n    ) {\n        tina {\n            payload\n            payloadRepresentedAsTree\n        }\n    }\n}\n',
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
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      }), e.exports = a, e.exports.SecondaryNavContent = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var o = s[a] || new Set,
          n = new Set,
          i = new Set;
        for (o.forEach(function(e) {
            i.add(e)
          }); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach(function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach(function(e) {
              i.add(e)
            }))
          })
        }
        return n.forEach(function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        }), t
      }(a, "SecondaryNavContent")
    },
    84941: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    85719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    98357: (e, a, t) => {
      "use strict";
      t.d(a, {
        U: () => b,
        A: () => _
      });
      var s = t(42295),
        r = t(62229),
        o = t(9623),
        n = t(62665),
        i = t(51673),
        c = t.n(i),
        d = t(95966),
        l = t(4572),
        m = t.n(l),
        g = t(2918);
      const f = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: .9,
              delay: .3
            }
          }
        },
        p = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            gridGap: "var(--grid-gap-sm)",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            gridGap: 0,
            transition: {
              type: "spring",
              stiffness: 650,
              damping: 45
            },
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        u = {
          applestore: "rockstargames-sites-gta-gen9e68d88a0e9f24a2f0bcf7da8a0e1b388",
          buttonText: "rockstargames-sites-gta-gen9c240c5768c5acdd2bc6022568ef877f0",
          closeButton: "rockstargames-sites-gta-gen9ee432a5defea7b8181973d3a9ad3190b",
          container: "rockstargames-sites-gta-gen9fc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-sites-gta-gen9b12c469ae4536819db4253c10b2cd11d",
          expandedArea: "rockstargames-sites-gta-gen9e752e3ffffce454f84c993a62a279f87",
          expandedButton: "rockstargames-sites-gta-gen9bb945d977a4db6fdd9206dbfe8581304",
          googleplay: "rockstargames-sites-gta-gen9d0d623dce429f6ae2fd898e1d551257e",
          pc: "rockstargames-sites-gta-gen9ffc20241c500599d4ee134fcffd66961",
          pcalt: "rockstargames-sites-gta-gen9a2ef6590cf9e642c1a2a8c589a792928",
          pillBtn: "rockstargames-sites-gta-gen9ed7115facef4ace39e8c7486e9066fe1",
          platformButton: "rockstargames-sites-gta-gen9fa40c93ee13fdec88bb8dc08ce36353a",
          platformButtons: "rockstargames-sites-gta-gen9e950c05307f67ce36d561a09027fd844",
          ps: "rockstargames-sites-gta-gen9dd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-sites-gta-gen9ed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-sites-gta-gen9f046700558956d566323b32d87c4a54f",
          selected: "rockstargames-sites-gta-gen9e7705468e2dbcfc45d23ef5047671698",
          switch: "rockstargames-sites-gta-gen9e8e3ea0f1d334667f3928f696308060e",
          unexpandedButton: "rockstargames-sites-gta-gen9eaa10e0601812da4ea334974165d92ec",
          xbox: "rockstargames-sites-gta-gen9e6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-sites-gta-gen9c03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-sites-gta-gen9dde1b553776bdd59373d22a43479de29"
        },
        b = ({
          buttonText: e = "",
          link: a = "",
          platform: r = "",
          target: n = null,
          onClick: i,
          tabIndex: c,
          ...d
        }) => {
          const l = n ?? (a.startsWith(document.location.origin) ? "_self" : "_blank"),
            m = [u.platformButton, u[r]].join(" "),
            g = r ? t(5328)(`./${r}.svg`) : null,
            f = (0, s.jsxs)(s.Fragment, {
              children: [g ? (0, s.jsx)("img", {
                src: g,
                alt: e
              }) : "", !g && (0, s.jsx)("div", {
                className: u.buttonText,
                children: e
              })]
            });
          return a ? a.startsWith("http") ? (0, s.jsx)("a", {
            href: a,
            className: m,
            target: l,
            onClick: i,
            "aria-label": e,
            tabIndex: c,
            ...d,
            children: f
          }) : (0, s.jsx)(o.NavLink, {
            className: m,
            onClick: i,
            to: a,
            "aria-label": e,
            ...d,
            children: f
          }) : (0, s.jsx)("button", {
            className: m,
            onClick: i,
            "aria-label": e,
            tabIndex: c,
            ...d,
            children: f
          })
        },
        _ = ({
          variant: e,
          buttonText: a = "Subscribe",
          buttonClassName: o,
          className: i,
          children: l,
          platformsAndLinks: _ = [],
          trackingType: h = "buy",
          trackingParent: k,
          target: v = null,
          trackingOId: x = null,
          returnUrl: w = null
        }) => {
          const y = (0, d.useRockstarTokenPing)(),
            [S, C] = (0, r.useState)(!1),
            [T, N] = (0, r.useState)(!1),
            [A, M] = (0, r.useState)(200),
            {
              track: L
            } = (0, g.useGtmTrack)(),
            R = (0, r.useRef)(null),
            E = (0, r.useRef)(S),
            I = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            E.current = S
          }, [S]), (0, r.useEffect)(() => {
            const e = e => {
              E && !R?.current?.contains(e.target) && C(!1)
            };
            document.addEventListener("click", e);
            const a = e => {
              E && "Escape" == e.code && C(!1)
            };
            return document.addEventListener("keydown", a, !1), () => {
              document.removeEventListener("click", e), document.removeEventListener("keydown", a, !1)
            }
          }, []), (0, r.useEffect)(() => {
            const e = () => {
              S && (N(!0), C(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [S]), (0, r.useEffect)(() => {
            if (R?.current) {
              const e = 1e3 * Number(getComputedStyle(R.current).getPropertyValue("--expandingPlatformButton-expandDuration").replace("ms", "").replace("s", ""));
              M(isNaN(e) ? 200 : e)
            }
          }, []), (0, r.useEffect)(() => {
            T && setTimeout(() => {
              N(!1)
            }, A)
          }, [T]);
          const P = ({
            href: e,
            platform: a
          }) => async () => {
            if (e) L({
              element_placement: k?.toLowerCase(),
              event: "cta_store_link",
              link_url: e,
              text: a
            });
            else {
              const e = (0, d.findPlatform)(a)?.onlineService;
              if (e && "sc" !== e) {
                L({
                  element_placement: k?.toLowerCase(),
                  event: "cta_link_account",
                  text: `link ${e}`
                });
                const a = await (0, d.generateTpaLink)({
                  pingBearer: y,
                  returnUrl: w || window.location.pathname,
                  service: e
                });
                window.location.href = a.href
              }
            }
          };
          return (0, s.jsxs)("div", {
            className: m()(u.container, i),
            children: [(0, s.jsx)(n.motion.div, {
              className: u.content,
              animate: S ? "open" : "close",
              variants: f,
              "aria-hidden": !!S,
              children: l
            }), (0, s.jsxs)(n.motion.div, {
              "data-variant": e,
              "data-animating": T,
              className: m()(S ? u.expandedButton : u.unexpandedButton),
              animate: S ? "open" : "closed",
              variants: p,
              initial: !1,
              ref: R,
              children: [(0, s.jsx)(n.motion.button, {
                className: m()(u.buttonText, o),
                "aria-expanded": S,
                onClick: () => {
                  if (N(!0), C(!S), !S) switch (h) {
                    case "select_platform":
                      L({
                        element_placement: k?.toLowerCase(),
                        event: "select_platform",
                        text: a?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      L({
                        element_placement: k?.toLowerCase(),
                        event: "cta_link_account",
                        o_id: x,
                        text: a?.toLowerCase()
                      });
                      break;
                    case "buy":
                      L({
                        element_placement: k?.toLowerCase(),
                        event: "cta_buy",
                        text: a?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      L({
                        element_placement: k?.toLowerCase(),
                        event: "cta_store_link",
                        text: a?.toLowerCase()
                      });
                      break;
                    case "other":
                      L({
                        element_placement: k?.toLowerCase(),
                        event: "cta_other",
                        text: a?.toLowerCase()
                      })
                  }
                },
                tabIndex: S ? -1 : 0,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, s.jsx)("div", {
                className: u.expandedArea,
                ref: I,
                "data-animate": S ? "open" : "closed",
                "aria-hidden": !S,
                style: {
                  height: S ? I?.current?.scrollHeight : 0
                },
                children: (0, s.jsx)(c(), {
                  active: S,
                  focusTrapOptions: {
                    allowOutsideClick: !0,
                    preventScroll: !0,
                    checkCanFocusTrap: e => new Promise(a => {
                      const t = setInterval(() => {
                        "hidden" !== getComputedStyle(e[0]).visibility && (a(), clearInterval(t))
                      }, 5)
                    })
                  },
                  children: (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("button", {
                      className: u.closeButton,
                      onClick: () => {
                        C(!1), N(!0), L({
                          element_placement: k?.toLowerCase(),
                          event: "cta_other",
                          text: "close expanding platform button"
                        })
                      },
                      "aria-label": "Close",
                      tabIndex: S ? 0 : -1,
                      children: (0, s.jsx)("img", {
                        src: t(66426),
                        alt: "Close"
                      })
                    }), (0, s.jsx)("div", {
                      className: u.platformButtons,
                      children: _.length ? _.map(e => (0, s.jsx)(b, {
                        buttonText: e.buttonText ?? (0, d.findPlatform)(e.platform)?.friendlyName ?? "",
                        link: e.href,
                        platform: e.platform,
                        onClick: P(e),
                        target: v,
                        tabIndex: S ? 0 : -1
                      }, `${e.key}-${e.href}-${e.platform}`)) : ""
                    })]
                  })
                })
              })]
            })]
          })
        }
    }
  }
]);