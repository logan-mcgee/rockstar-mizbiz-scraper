"use strict";
(self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || []).push([
  [741], {
    1741: (e, t, a) => {
      a.r(t), a.d(t, {
        Highlights: () => m,
        HighlightsItem: () => b
      });
      var i = a(289),
        r = a(5217),
        n = a(4029),
        _ = a(6160);
      a(3657);
      var l = a(9542),
        s = a(9770),
        o = a(4304),
        c = a(4547);
      const d = (0, r.vU)({
        cph_awards_title: {
          id: "cph_awards_title"
        },
        cph_awards_not_unlocked: {
          id: "cph_awards_not_unlocked"
        },
        cph_progress_tracker_title: {
          id: "cph_progress_tracker_title"
        },
        cph_progress_tracker_tier_label: {
          id: "cph_progress_tracker_tier_label"
        },
        cph_progress_challenges_title: {
          id: "cph_progress_challenges_title"
        },
        cph_progress_rewards_title: {
          id: "cph_progress_rewards_title"
        },
        cph_progress_rewards_view_all: {
          id: "cph_progress_rewards_view_all"
        },
        cph_progress_rewards_view_less: {
          id: "cph_progress_rewards_view_less"
        },
        cph_progress_close: {
          id: "cph_progress_close"
        },
        cph_nav_open: {
          id: "cph_nav_open"
        },
        cph_nav_close: {
          id: "cph_nav_close"
        },
        cph_nav_scroll_left: {
          id: "cph_nav_scroll_left"
        },
        cph_nav_scroll_right: {
          id: "cph_nav_scroll_right"
        },
        cph_intro_getting_started: {
          id: "cph_intro_getting_started"
        },
        cph_intro_guide_instruction: {
          id: "cph_intro_guide_instruction"
        },
        cph_intro_guide_learn_more: {
          id: "cph_intro_guide_learn_more"
        },
        cph_progress_available_on: {
          id: "cph_progress_available_on"
        },
        cph_progress_available_on_aria_ps5: {
          id: "cph_progress_available_on_aria_ps5"
        },
        cph_progress_available_on_aria_xbox: {
          id: "cph_progress_available_on_aria_xbox"
        },
        cph_login_prompt_title: {
          id: "cph_login_prompt_title"
        },
        cph_login_prompt_body: {
          id: "cph_login_prompt_body"
        },
        cph_login_prompt_button: {
          id: "cph_login_prompt_button"
        },
        cph_login_prompt_button_helper: {
          id: "cph_login_prompt_button_helper"
        },
        cph_login_prompt_button_helper_link: {
          id: "cph_login_prompt_button_helper_link"
        },
        cph_callout_feedback_title: {
          id: "cph_callout_feedback_title"
        },
        cph_callout_feedback_body: {
          id: "cph_callout_feedback_body"
        },
        cph_callout_feedback_button: {
          id: "cph_callout_feedback_button"
        },
        cph_loggedin_nochar_title: {
          id: "cph_loggedin_nochar_title"
        },
        cph_loggedin_nochar_body: {
          id: "cph_loggedin_nochar_body"
        },
        cph_loggedin_nochar_button: {
          id: "cph_loggedin_nochar_button"
        },
        cph_highlights_heading: {
          id: "cph_highlights_heading"
        },
        cph_highlights_previous: {
          id: "cph_highlights_previous"
        },
        cph_highlights_next: {
          id: "cph_highlights_next"
        },
        cph_highlights_group_aria: {
          id: "cph_highlights_group_aria"
        }
      });
      var h = a(2809);
      const p = {
          textWrapper: "_1295218517e38355be7a0b1097ee26acac6c",
          scrollEnd: "_1295218517e38355b7b9a5102a6d1af15f9e",
          content: "_1295218517e38355f48a6ec3b7cb94bd8762",
          heading: "_1295218517e38355f0dbc0f3b4fdbacc3d98",
          summaryText: "_1295218517e38355a1e30094ea318acc22ab"
        },
        g = {
          ease: "easeInOut",
          duration: .3
        },
        u = {
          fadeIn: {
            opacity: 1,
            zIndex: 5,
            transition: g,
            display: "flex"
          },
          fadeOut: {
            transition: g,
            zIndex: 4,
            opacity: 0,
            transitionEnd: {
              zIndex: "unset",
              display: "none"
            }
          }
        },
        b = e => {
          let {
            heading: t,
            disableHeading: a = !1,
            title: r,
            summary: l,
            isActive: s,
            index: o,
            highlightsCount: g,
            ...b
          } = e;
          const f = (0, n.Z)(),
            m = (0, i.useRef)(null),
            [v, x] = (0, i.useState)(null),
            {
              scrollYProgress: k
            } = (0, h.v)({
              container: m
            });
          return (0, i.useEffect)((() => {
            null === v && x(k.current < .9), k.on("change", (e => {
              x(e < .9)
            }))
          }), [k]), (0, _.jsxs)(c.E.div, {
            id: p.content,
            "aria-hidden": !s,
            "aria-label": f.formatMessage(d.cph_highlights_group_aria, {
              index: o + 1,
              total: g
            }),
            onAnimationStart: () => {
              m.current && s && setTimeout((() => m.current?.scrollTo({
                top: 0
              })), 0)
            },
            role: "group",
            className: [p.textWrapper, v ? "" : p.scrollEnd].join(" "),
            variants: u,
            animate: s ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...b,
            children: [!a && (0, _.jsx)("h1", {
              children: t || f.formatMessage(d.cph_highlights_heading)
            }), r && (0, _.jsx)("h2", {
              className: p.heading,
              children: r
            }), (0, _.jsx)(c.E.div, {
              ref: m,
              className: p.summaryText,
              dangerouslySetInnerHTML: {
                __html: (j = l, j ? j.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
              }
            })]
          });
          var j
        },
        f = {
          mainContainer: "_1295218517e38355eb05ee805789f3ff2ddf",
          heading: "_1295218517e38355c703e8ec143f25690046",
          mainCarousel: "_1295218517e38355ffc952af5de08fb9d99d",
          controlBtn: "_1295218517e38355e441ad8c974f4ec55698",
          fadeIn: "_1295218517e38355b901a1a524e928a6d1a4",
          fadeOut: "_1295218517e38355ec72f411878cfa7159a4",
          circleIndicators: "_1295218517e38355c5a6f6a3ed00451e0728",
          indicator: "_1295218517e38355d44e0a2f71094a5ca9fc",
          nextBtn: "_1295218517e38355a87a24029b13cc5408e7",
          prevBtn: "_1295218517e38355a4c6573b769a3265f0f4",
          active: "_1295218517e38355e4064fd02069faeda5ed",
          contentContainer: "_1295218517e38355f78133660ed3a7a6c93c",
          textContainer: "_1295218517e38355bea30800a70fb24b1312",
          carouselContainer: "_1295218517e38355ebef4da388e02ff8ad1d"
        },
        m = e => {
          let {
            highlights: t = []
          } = e;
          const a = (0, n.Z)(),
            [r, h] = (0, i.useState)(!1),
            [p, g] = (0, i.useState)(0),
            [u, m] = (0, i.useState)(null),
            [v, x] = (0, i.useState)([s.Rv, s.o3, s.tl]),
            [k, j] = (0, i.useState)({}),
            w = (0, i.useRef)(null),
            y = (0, i.useRef)(null),
            C = (0, i.useRef)(null),
            I = (0, i.useRef)(null),
            S = (0, i.useRef)(null),
            E = (0, l.useGenerateCdnSource)();
          return (0, i.useEffect)((() => {
            const e = [s.Rv, s.o3, s.tl];
            x(e)
          }), [!1]), t?.length ? (0, _.jsxs)("section", {
            className: f.mainContainer,
            children: [(0, _.jsxs)("div", {
              ref: w,
              className: f.mainCarousel,
              onMouseEnter: () => {
                h(!0)
              },
              onMouseLeave: () => {
                h(!1)
              },
              children: [t.length > 1 && (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)(c.E.button, {
                  ref: I,
                  type: "button",
                  "aria-label": a.formatMessage(d.cph_highlights_previous),
                  className: [f.controlBtn, f.prevBtn, r ? f.fadeIn : f.fadeOut].join(" "),
                  onClick: () => {
                    k && k.slidePrev()
                  },
                  disabled: p < 1
                }), (0, _.jsx)(c.E.button, {
                  ref: S,
                  type: "button",
                  "aria-label": a.formatMessage(d.cph_highlights_next),
                  className: [f.controlBtn, f.nextBtn, r ? f.fadeIn : f.fadeOut].join(" "),
                  onClick: () => {
                    k && k.slideNext()
                  },
                  disabled: p === t.length - 1
                })]
              }), (0, _.jsx)(o.tq, {
                onInit: e => j(e),
                onBeforeInit: e => {
                  y.current = e
                },
                modules: v,
                onSlideChange: e => {
                  const t = e.realIndex;
                  g(t)
                },
                navigation: {
                  prevEl: I.current,
                  nextEl: S.current
                },
                pagination: {
                  clickable: !0
                },
                scrollbar: {
                  draggable: !0
                },
                direction: "horizontal",
                grabCursor: !0,
                thumbs: {
                  swiper: u
                },
                watchSlidesProgress: !0,
                slidesPerView: 1,
                initialSlide: p,
                loop: !1,
                children: t.map(((e, t) => (0, _.jsx)(o.o5, {
                  children: (0, _.jsx)("img", {
                    alt: e.title,
                    "aria-label": e.title,
                    "aria-current": t === p,
                    src: E(e.image),
                    role: "presentation"
                  })
                }, e.title)))
              })]
            }), (0, _.jsxs)("div", {
              className: f.contentContainer,
              children: [(0, _.jsx)("div", {
                className: f.carouselContainer,
                children: (0, _.jsx)(o.tq, {
                  onBeforeInit: e => {
                    C.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  onSwiper: m,
                  modules: v,
                  slidesPerView: "auto",
                  initialSlide: p,
                  children: t.map(((e, t) => (0, _.jsx)(o.o5, {
                    children: (0, _.jsx)("button", {
                      type: "button",
                      onClick: () => (e => {
                        g(e), y.current?.slideTo(e), C.current?.slideTo(e)
                      })(t),
                      className: `${t===p?f.active:""}`,
                      "aria-label": e.title,
                      "aria-current": t === p,
                      children: (0, _.jsx)("img", {
                        src: `${E(e.image)}?im=Resize,width=252`,
                        alt: e.title ?? "Slide"
                      })
                    })
                  }, e.key)))
                })
              }), (0, _.jsx)("div", {
                className: f.textContainer,
                children: t.map(((e, a) => (0, _.jsx)(b, {
                  disableHeading: e.disableHeading,
                  heading: e.heading,
                  title: e.title,
                  summary: e.summary,
                  isActive: p === a,
                  index: a,
                  highlightsCount: t.length
                }, e.key)))
              })]
            })]
          }) : null
        }
    }
  }
]);
//# sourceMappingURL=6cfc204fd5650ba09ee9.js.map