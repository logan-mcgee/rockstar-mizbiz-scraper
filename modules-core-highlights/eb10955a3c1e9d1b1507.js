"use strict";
(self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || []).push([
  [509], {
    509: (e, t, a) => {
      a.r(t), a.d(t, {
        Highlights: () => f,
        HighlightsItem: () => _
      });
      var i = a(289),
        o = a(570),
        r = a(542),
        s = a(160),
        n = a(547);
      const l = (0, o.defineMessages)({
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
          defaultMessage: "Join Social Club."
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
        },
        highlights_title_std: {
          id: "highlights_title_std",
          description: "Title for highlights",
          defaultMessage: "Features"
        }
      });
      var c = a(809);
      const d = {
        textWrapper: "_1295218517e38355be7a0b1097ee26acac6c",
        scrollEnd: "_1295218517e38355b7b9a5102a6d1af15f9e"
      };
      var g = a(274);
      const h = {
          ease: "easeInOut",
          duration: .3
        },
        u = {
          fadeIn: {
            opacity: 1,
            zIndex: 5,
            transition: h,
            display: "flex"
          },
          fadeOut: {
            transition: h,
            zIndex: 4,
            opacity: 0,
            transitionEnd: {
              zIndex: "unset",
              display: "none"
            }
          }
        },
        _ = e => {
          let {
            subTitle: t,
            title: a,
            summary: r,
            isActive: s,
            index: h,
            highlightsCount: _,
            ...p
          } = e;
          const b = (0, o.useIntl)(),
            f = (0, i.useRef)(null),
            [m, k] = (0, i.useState)(null),
            {
              scrollYProgress: x
            } = (0, c.v)({
              container: f
            });
          return (0, i.useEffect)((() => {
            null === m && k(x.current < 1), x.on("change", (e => {
              k(e < 1)
            }))
          }), [x]), (0, g.jsxs)(n.E.div, {
            "aria-hidden": !s,
            "aria-label": b.formatMessage(l.cph_highlights_group_aria, {
              index: h + 1,
              total: _
            }),
            onAnimationStart: () => {
              f.current && s && setTimeout((() => f.current?.scrollTo({
                top: 0
              })), 0)
            },
            role: "group",
            className: [d.textWrapper, m ? "" : d.scrollEnd].join(" "),
            variants: u,
            animate: s ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...p,
            children: [t && (0, g.jsx)("h1", {
              children: t
            }), a && (0, g.jsx)("h2", {
              children: a
            }), (0, g.jsx)(n.E.div, {
              ref: f,
              className: d.summaryText,
              children: (0, g.jsx)("p", {
                children: r
              })
            })]
          })
        },
        p = {
          ease: "easeInOut",
          duration: .3
        },
        b = {
          fadeIn: {
            opacity: 1,
            zIndex: 5,
            transition: p,
            display: "block"
          },
          fadeOut: {
            transition: p,
            zIndex: 4,
            opacity: 1,
            transitionEnd: {
              zIndex: "unset",
              display: "none"
            }
          }
        },
        f = e => {
          let {
            highlights: t = [],
            blockSettings: a
          } = e;
          const c = (0, o.useIntl)(),
            [d, h] = (0, i.useState)(0),
            u = (0, i.useRef)(null),
            p = (0, r.useGenerateCdnSource)(),
            f = (0, r.useGetCdnSource)(a?.backgroundImageGroup?.mobile?.image),
            m = (0, r.useGetCdnSource)(a?.backgroundImageGroup?.desktop?.image ?? f),
            k = (0, r.useGetCdnSource)(a?.backgroundImageGroup?.mobile?.mask),
            x = (0, r.useGetCdnSource)(a?.backgroundImageGroup?.desktop?.mask ?? k),
            v = a?.backgroundImageGroup?.backgroundAttachment || "",
            w = a?.backgroundImageGroup?.backgroundClip || "",
            C = a?.backgroundImageGroup?.backgroundColor || "",
            y = a?.backgroundImageGroup?.backgroundOrigin || "",
            M = a?.backgroundImageGroup?.backgroundPosition || "",
            I = a?.backgroundImageGroup?.backgroundRepeat || "",
            S = a?.backgroundImageGroup?.backgroundSize || "",
            T = a?.contentBlock?.backgroundColor || "",
            j = a?.contentBlock?.["--image-border-style"] || "",
            A = a?.contentBlock?.["--image-border-radius"] || "";
          if (!t?.length) return null;
          const G = e => {
            h(e), u.current?.slideTo(e)
          };
          return (0, g.jsxs)("section", {
            className: "_1295218517e38355ce181e3efd83dce95753",
            style: {
              "--background-image-desktop": `url(${m})`,
              "--background-image-mobile": `url(${f})`,
              "--image-mask-desktop": `url(${x})`,
              "--image-mask-mobile": `url(${k})`,
              "--background-attachment": v,
              "--background-clip": w,
              "--background-color": C,
              "--background-origin": y,
              "--background-position": M,
              "--background-repeat": I,
              "--background-size": S
            },
            children: [(0, g.jsx)("h3", {
              className: "_1295218517e38355c703e8ec143f25690046",
              children: c.formatMessage(l.highlights_title_std)
            }), (0, g.jsxs)("div", {
              className: "_1295218517e38355ab42acaf2c77c4b3e559",
              children: [t.length > 1 && (0, g.jsxs)(g.Fragment, {
                children: [(0, g.jsx)("button", {
                  type: "button",
                  "aria-label": c.formatMessage(l.cph_highlights_previous),
                  className: "_1295218517e38355a4c6573b769a3265f0f4",
                  onClick: () => {
                    const e = d > 0 ? d - 1 : t.length - 1;
                    G(e)
                  }
                }), (0, g.jsx)("button", {
                  type: "button",
                  "aria-label": c.formatMessage(l.cph_highlights_next),
                  className: "_1295218517e38355a87a24029b13cc5408e7",
                  onClick: () => {
                    const e = d < t.length - 1 ? d + 1 : 0;
                    G(e)
                  }
                })]
              }), t.map(((e, t) => (0, g.jsx)(n.E.img, {
                "aria-hidden": t !== d,
                hidden: t !== d,
                alt: e.title,
                src: p(e.image),
                variants: b,
                animate: t === d ? "fadeIn" : "fadeOut",
                role: "presentation"
              }, e.title)))]
            }), (0, g.jsxs)("div", {
              className: "_1295218517e38355f78133660ed3a7a6c93c",
              style: {
                "--content-bg-color": `${T}`,
                "--content-border-style": `${j}`,
                "--content-border-radius": `${A}`
              },
              children: [(0, g.jsx)("div", {
                className: "_1295218517e38355ebef4da388e02ff8ad1d",
                children: (0, g.jsx)(s.tq, {
                  onBeforeInit: e => {
                    u.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  slidesPerView: "auto",
                  initialSlide: d,
                  children: t.map(((e, t) => (0, g.jsx)(s.o5, {
                    children: (0, g.jsx)("button", {
                      type: "button",
                      onClick: () => G(t),
                      className: "" + (t === d ? "_1295218517e38355e4064fd02069faeda5ed" : ""),
                      "aria-label": e.title,
                      "aria-current": t === d,
                      children: (0, g.jsx)("img", {
                        src: `${p(e.image)}?im=Resize,width=252`,
                        alt: ""
                      })
                    })
                  }, e.title)))
                })
              }), (0, g.jsx)("div", {
                className: "_1295218517e38355bea30800a70fb24b1312",
                children: t.map(((e, a) => (0, g.jsx)(_, {
                  subTitle: e.subTitle,
                  title: e.title,
                  summary: e.summary,
                  isActive: d === a,
                  index: a,
                  highlightsCount: t.length
                }, e.title)))
              })]
            })]
          })
        }
    }
  }
]);