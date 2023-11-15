"use strict";
(self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || []).push([
  [887], {
    4887: (e, a, t) => {
      t.r(a), t.d(a, {
        Highlights: () => p,
        HighlightsItem: () => f
      });
      var s = t(279),
        i = t(3903),
        r = t(3705);
      t(3657);
      var l = t(9542),
        n = t(9109),
        o = t(719),
        c = t(2539),
        h = t(3111),
        d = t(1210);
      const g = {
          textWrapper: "rockstargames-modules-core-highlightsd14a59535c6df8134c3dac65e9783a91",
          scrollEnd: "rockstargames-modules-core-highlightsda43304a78c2d7b9a4404c4dab983a5f",
          content: "rockstargames-modules-core-highlightsb485fe85babeaa01e1cf0946b8f855ef",
          heading: "rockstargames-modules-core-highlightsc3266e97f5a95a46021c60e31128a8e6",
          summaryText: "rockstargames-modules-core-highlightsf644dd79020a84aa7b281d705020af19"
        },
        u = {
          ease: "easeInOut",
          duration: .3
        },
        m = {
          fadeIn: {
            opacity: 1,
            zIndex: 5,
            transition: u,
            display: "flex"
          },
          fadeOut: {
            transition: u,
            zIndex: 4,
            opacity: 0,
            transitionEnd: {
              zIndex: "unset",
              display: "none"
            }
          }
        },
        f = e => {
          let {
            heading: a,
            title: t,
            summary: l,
            isActive: n,
            index: o,
            highlightsCount: u,
            ...f
          } = e;
          const b = (0, i.Z)(),
            p = (0, s.useRef)(null),
            [x, k] = (0, s.useState)(null),
            {
              scrollYProgress: j
            } = (0, d.v)({
              container: p
            });
          return (0, s.useEffect)((() => {
            null === x && k(j.current < .9), j.on("change", (e => {
              k(e < .9)
            }))
          }), [j]), (0, r.jsxs)(c.E.div, {
            id: g.content,
            "aria-hidden": !n,
            "aria-label": b.formatMessage(h.highlights.cph_highlights_group_aria, {
              index: o + 1,
              total: u
            }),
            onAnimationStart: () => {
              p.current && n && setTimeout((() => p.current?.scrollTo({
                top: 0
              })), 0)
            },
            role: "group",
            className: [g.textWrapper, x ? "" : g.scrollEnd].join(" "),
            variants: m,
            animate: n ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...f,
            children: [a && (0, r.jsx)("h1", {
              children: a || b.formatMessage(h.highlights.cph_highlights_heading)
            }), t && (0, r.jsx)("h2", {
              className: g.heading,
              children: t
            }), (0, r.jsx)(c.E.div, {
              ref: p,
              className: g.summaryText,
              dangerouslySetInnerHTML: {
                __html: (v = l, v ? v.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
              }
            })]
          });
          var v
        },
        b = {
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
        p = e => {
          let {
            highlights: a = [],
            subtitle: t = ""
          } = e;
          const d = (0, i.Z)(),
            [g, u] = (0, s.useState)(!1),
            [m, p] = (0, s.useState)(0),
            [x, k] = (0, s.useState)(null),
            [j, v] = (0, s.useState)([n.Rv, n.o3, n.tl]),
            [C, _] = (0, s.useState)({}),
            I = (0, s.useRef)(null),
            S = (0, s.useRef)(null),
            y = (0, s.useRef)(null),
            E = (0, s.useRef)(null),
            N = (0, s.useRef)(null),
            w = (0, l.useGenerateCdnSource)();
          return (0, s.useEffect)((() => {
            const e = [n.Rv, n.o3, n.tl];
            v(e)
          }), [!1]), a?.length ? (0, r.jsxs)("section", {
            className: b.mainContainer,
            children: [(0, r.jsxs)("div", {
              ref: I,
              className: b.mainCarousel,
              onMouseEnter: () => {
                u(!0)
              },
              onMouseLeave: () => {
                u(!1)
              },
              children: [a.length > 1 && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(c.E.button, {
                  ref: E,
                  type: "button",
                  "aria-label": d.formatMessage(h.highlights.cph_highlights_previous),
                  className: [b.controlBtn, b.prevBtn, g ? b.fadeIn : b.fadeOut].join(" "),
                  onClick: () => {
                    C && C.slidePrev()
                  },
                  disabled: m < 1
                }), (0, r.jsx)(c.E.button, {
                  ref: N,
                  type: "button",
                  "aria-label": d.formatMessage(h.highlights.cph_highlights_next),
                  className: [b.controlBtn, b.nextBtn, g ? b.fadeIn : b.fadeOut].join(" "),
                  onClick: () => {
                    C && C.slideNext()
                  },
                  disabled: m === a.length - 1
                })]
              }), (0, r.jsx)(o.tq, {
                onInit: e => _(e),
                onBeforeInit: e => {
                  S.current = e
                },
                modules: j,
                onSlideChange: e => {
                  const a = e.realIndex;
                  p(a)
                },
                navigation: {
                  prevEl: E.current,
                  nextEl: N.current
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
                  swiper: x
                },
                watchSlidesProgress: !0,
                slidesPerView: 1,
                initialSlide: m,
                loop: !1,
                children: a.map(((e, a) => (0, r.jsx)(o.o5, {
                  children: (0, r.jsx)("img", {
                    alt: e.title,
                    "aria-label": e.title,
                    "aria-current": a === m,
                    src: w(e.image),
                    role: "presentation"
                  })
                }, `${e.title}-${a}`)))
              })]
            }), (0, r.jsxs)("div", {
              className: b.contentContainer,
              children: [(0, r.jsx)("div", {
                className: b.carouselContainer,
                children: (0, r.jsx)(o.tq, {
                  onBeforeInit: e => {
                    y.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  onSwiper: k,
                  modules: j,
                  slidesPerView: "auto",
                  initialSlide: m,
                  children: a.map(((e, a) => (0, r.jsx)(o.o5, {
                    children: (0, r.jsx)("button", {
                      type: "button",
                      onClick: () => (e => {
                        p(e), S.current?.slideTo(e), y.current?.slideTo(e)
                      })(a),
                      className: `${a===m?b.active:""}`,
                      "aria-label": e.title,
                      "aria-current": a === m,
                      children: (0, r.jsx)("img", {
                        src: `${w(e.image)}?im=Resize,width=252`,
                        alt: e.title ?? "Slide"
                      })
                    })
                  }, e.key)))
                })
              }), (0, r.jsx)("div", {
                className: b.textContainer,
                children: a.map(((e, s) => (0, r.jsx)(f, {
                  heading: t,
                  title: e.title,
                  summary: e.summary,
                  isActive: m === s,
                  index: s,
                  highlightsCount: a.length
                }, e.key)))
              })]
            })]
          }) : null
        }
    }
  }
]);