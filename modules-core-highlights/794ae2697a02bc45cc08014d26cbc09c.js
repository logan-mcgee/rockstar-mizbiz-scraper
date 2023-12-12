"use strict";
(self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || []).push([
  [887], {
    4887: (e, t, a) => {
      a.r(t), a.d(t, {
        Highlights: () => _,
        HighlightsItem: () => p
      });
      var s = a(279),
        i = a(6809),
        r = a(3903),
        l = a(3705);
      a(3657);
      var n = a(9542),
        o = a(9109),
        c = a(719),
        h = a(2539),
        d = a(3111),
        g = a(6711),
        u = a(1210);
      const m = {
          textWrapper: "rockstargames-modules-core-highlightsd14a59535c6df8134c3dac65e9783a91",
          scrollEnd: "rockstargames-modules-core-highlightsda43304a78c2d7b9a4404c4dab983a5f",
          content: "rockstargames-modules-core-highlightsb485fe85babeaa01e1cf0946b8f855ef",
          heading: "rockstargames-modules-core-highlightsc3266e97f5a95a46021c60e31128a8e6",
          summaryText: "rockstargames-modules-core-highlightsf644dd79020a84aa7b281d705020af19"
        },
        f = {
          ease: "easeInOut",
          duration: .3
        },
        b = {
          fadeIn: {
            opacity: 1,
            zIndex: 5,
            transition: f,
            display: "flex"
          },
          fadeOut: {
            transition: f,
            zIndex: 4,
            opacity: 0,
            transitionEnd: {
              zIndex: "unset",
              display: "none"
            }
          }
        },
        p = e => {
          let {
            heading: t,
            title: a,
            summary: i,
            isActive: n,
            index: o,
            highlightsCount: c,
            ...g
          } = e;
          const f = (0, r.Z)(),
            p = (0, s.useRef)(null),
            [x, _] = (0, s.useState)(null),
            {
              scrollYProgress: k
            } = (0, u.v)({
              container: p
            });
          return (0, s.useEffect)((() => {
            null === x && _(k.current < .9), k.on("change", (e => {
              _(e < .9)
            }))
          }), [k]), (0, l.jsxs)(h.E.div, {
            id: m.content,
            "aria-hidden": !n,
            "aria-label": f.formatMessage(d.highlights.cph_highlights_group_aria, {
              index: o + 1,
              total: c
            }),
            onAnimationStart: () => {
              p.current && n && setTimeout((() => p.current?.scrollTo({
                top: 0
              })), 0)
            },
            role: "group",
            className: [m.textWrapper, x ? "" : m.scrollEnd].join(" "),
            variants: b,
            animate: n ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...g,
            children: [t && (0, l.jsx)("h1", {
              children: t || f.formatMessage(d.highlights.cph_highlights_heading)
            }), a && (0, l.jsx)("h2", {
              className: m.heading,
              children: a
            }), (0, l.jsx)(h.E.div, {
              ref: p,
              className: m.summaryText,
              dangerouslySetInnerHTML: {
                __html: (v = i, v ? v.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
              }
            })]
          });
          var v
        },
        x = {
          mainContainer: "rockstargames-modules-core-highlightsbbde5539e2c654279be115c23e8bf5e2",
          heading: "rockstargames-modules-core-highlightsc12a2f21b1f733d28256c8019f082344",
          mainCarousel: "rockstargames-modules-core-highlightsf662fcf883e04456a890585ea0b56b4a",
          controlBtn: "rockstargames-modules-core-highlightsbef4ae3fa1935b746f984a011a6f9d8a",
          fadeIn: "rockstargames-modules-core-highlightsd8153b8d2e83249dc2a89c7fdfe7511e",
          fadeOut: "rockstargames-modules-core-highlightsf8700c66c8e1cf14b94d3f38b4834cf8",
          circleIndicators: "rockstargames-modules-core-highlightsda9d19ff30f37b7b1252ab255502f6fa",
          indicator: "rockstargames-modules-core-highlightsf99db8e9b84e0f9a31481d0f9f5f22d7",
          nextBtn: "rockstargames-modules-core-highlightsb85877a27995f6e019da8576da83fde3",
          prevBtn: "rockstargames-modules-core-highlightsa86f0eaca3ff34a70644a48f849948f7",
          active: "rockstargames-modules-core-highlightsdf535800ce625cdbd677b4d089f22c56",
          contentContainer: "rockstargames-modules-core-highlightsa3deb7bb99b59d63fa82c95b04098ddd",
          textContainer: "rockstargames-modules-core-highlightsad9f1eba7c5fe46b3a6c7576ac5c94af",
          carouselContainer: "rockstargames-modules-core-highlightse0ff414596aa953fd026359c8e084c26"
        },
        _ = e => {
          let {
            highlights: t = [],
            subtitle: a = ""
          } = e;
          const u = (0, r.Z)(),
            {
              ref: m,
              inView: f
            } = (0, i.YD)({
              threshold: .6
            }),
            {
              track: b
            } = (0, g.useGtmTrack)(),
            [_, k] = (0, s.useState)(!1),
            [v, j] = (0, s.useState)(!1),
            [C, S] = (0, s.useState)(0),
            [y, I] = (0, s.useState)(null),
            [E, w] = (0, s.useState)([o.Rv, o.o3, o.tl]),
            [N, B] = (0, s.useState)({}),
            R = (0, s.useRef)(null),
            T = (0, s.useRef)(null),
            H = (0, s.useRef)(null),
            M = (0, s.useRef)(null),
            z = (0, s.useRef)(null),
            O = (0, n.useGenerateCdnSource)();
          return (0, s.useEffect)((() => {
            const e = [o.Rv, o.o3, o.tl];
            w(e)
          }), [!1]), (0, s.useEffect)((() => {
            f && !_ && (b({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "highlights",
              element_placement: "Highlights"
            }), k(!0))
          }), [f]), t?.length ? (0, l.jsxs)("section", {
            className: x.mainContainer,
            ref: m,
            children: [(0, l.jsxs)("div", {
              ref: R,
              className: x.mainCarousel,
              onMouseEnter: () => {
                j(!0)
              },
              onMouseLeave: () => {
                j(!1)
              },
              children: [t.length > 1 && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(h.E.button, {
                  ref: M,
                  type: "button",
                  "aria-label": u.formatMessage(d.highlights.cph_highlights_previous),
                  className: [x.controlBtn, x.prevBtn, v ? x.fadeIn : x.fadeOut].join(" "),
                  onClick: () => {
                    b({
                      event: "carousel_previous",
                      element_placement: "Highlights"
                    }), N && N.slidePrev()
                  },
                  disabled: C < 1
                }), (0, l.jsx)(h.E.button, {
                  ref: z,
                  type: "button",
                  "aria-label": u.formatMessage(d.highlights.cph_highlights_next),
                  className: [x.controlBtn, x.nextBtn, v ? x.fadeIn : x.fadeOut].join(" "),
                  onClick: () => {
                    b({
                      event: "carousel_next",
                      element_placement: "Highlights"
                    }), N && N.slideNext()
                  },
                  disabled: C === t.length - 1
                })]
              }), (0, l.jsx)(c.tq, {
                onInit: e => B(e),
                onBeforeInit: e => {
                  T.current = e
                },
                modules: E,
                onSlideChange: e => {
                  const t = e.realIndex;
                  S(t)
                },
                navigation: {
                  prevEl: M.current,
                  nextEl: z.current
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
                  swiper: y
                },
                watchSlidesProgress: !0,
                slidesPerView: 1,
                initialSlide: C,
                loop: !1,
                onTouchEnd: () => {
                  b({
                    event: "carousel_swipe",
                    element_placement: "Highlights"
                  })
                },
                children: t.map(((e, t) => (0, l.jsx)(c.o5, {
                  children: (0, l.jsx)("img", {
                    alt: e.title,
                    "aria-label": e.title,
                    "aria-current": t === C,
                    src: O(e.image),
                    role: "presentation"
                  })
                }, `${e.title}-${t}`)))
              })]
            }), (0, l.jsxs)("div", {
              className: x.contentContainer,
              children: [(0, l.jsx)("div", {
                className: x.carouselContainer,
                children: (0, l.jsx)(c.tq, {
                  onBeforeInit: e => {
                    H.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  onSwiper: I,
                  modules: E,
                  slidesPerView: "auto",
                  initialSlide: C,
                  children: t.map(((e, a) => (0, l.jsx)(c.o5, {
                    children: (0, l.jsx)("button", {
                      type: "button",
                      onClick: () => (e => {
                        b({
                          event: "carousel_thumbnail_click",
                          element_placement: "Highlights",
                          position: e,
                          card_name: t[e]?.title
                        }), S(e), T.current?.slideTo(e), H.current?.slideTo(e)
                      })(a),
                      className: `${a===C?x.active:""}`,
                      "aria-label": e.title,
                      "aria-current": a === C,
                      children: (0, l.jsx)("img", {
                        src: `${O(e.image)}?im=Resize,width=252`,
                        alt: e.title ?? "Slide"
                      })
                    })
                  }, e.key)))
                })
              }), (0, l.jsx)("div", {
                className: x.textContainer,
                children: t.map(((e, s) => (0, l.jsx)(p, {
                  heading: a,
                  title: e.title,
                  summary: e.summary,
                  isActive: C === s,
                  index: s,
                  highlightsCount: t.length
                }, e.key)))
              })]
            })]
          }) : null
        }
    }
  }
]);