! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      i = (new Error).stack;
    i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "357fee0f-1115-4cdd-bb17-8eca71d65994", e._sentryDebugIdIdentifier = "sentry-dbid-357fee0f-1115-4cdd-bb17-8eca71d65994")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-highlights",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || []).push([
  [504], {
    6504: (e, i, t) => {
      t.r(i), t.d(i, {
        Highlights: () => x,
        HighlightsItem: () => m
      });
      var h = t(1664),
        a = t(9496),
        s = t(1272),
        l = t(1740),
        r = t(1403),
        n = t(8111),
        g = t(3488),
        o = t(2836);
      const c = (0, s.defineMessages)({
          cph_highlights_heading: {
            id: "cph_highlights_heading",
            defaultMessage: "Highlights"
          },
          cph_highlights_previous: {
            id: "cph_highlights_previous",
            defaultMessage: "Previous"
          },
          cph_highlights_next: {
            id: "cph_highlights_next",
            defaultMessage: "Next"
          },
          cph_highlights_group_aria: {
            id: "cph_highlights_group_aria",
            defaultMessage: "Highlight {index} of {total}"
          }
        }),
        d = JSON.parse('{"us":{"cph_highlights_group_aria":"Highlight {index} of {total}","cph_highlights_heading":"Highlights","cph_highlights_next":"Next","cph_highlights_previous":"Previous"},"de":{"cph_highlights_group_aria":"Markiertes Element {index} von {total}","cph_highlights_heading":"Markierte Elemente","cph_highlights_next":"Weiter","cph_highlights_previous":"Zurück"},"es":{"cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior"},"mx":{"cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior"},"fr":{"cph_highlights_group_aria":"Résultat {index} sur {total}","cph_highlights_heading":"Résultats","cph_highlights_next":"Suivant","cph_highlights_previous":"Précédent"},"it":{"cph_highlights_group_aria":"Elemento evidenziato {index} di {total}","cph_highlights_heading":"Elementi evidenziati","cph_highlights_next":"Avanti","cph_highlights_previous":"Precedente"},"jp":{"cph_highlights_group_aria":"{total}のうち{index}をハイライト","cph_highlights_heading":"ハイライト","cph_highlights_next":"進む","cph_highlights_previous":"前"},"kr":{"cph_highlights_group_aria":"하이라이트: {index}/{total}","cph_highlights_heading":"하이라이트","cph_highlights_next":"다음","cph_highlights_previous":"이전"},"pl":{"cph_highlights_group_aria":"Wyróżnione {index} z {total}","cph_highlights_heading":"Wyróżnione","cph_highlights_next":"Dalej","cph_highlights_previous":"Poprzednie"},"br":{"cph_highlights_group_aria":"Seleção {index} de {total}","cph_highlights_heading":"Seleções","cph_highlights_next":"Próximo","cph_highlights_previous":"Anterior"},"ru":{"cph_highlights_group_aria":"Элемент {index} из {total}","cph_highlights_heading":"Элементы","cph_highlights_next":"Далее","cph_highlights_previous":"Назад"},"hans":{"cph_highlights_group_aria":"突出 {index} 共 {total}","cph_highlights_heading":"突出","cph_highlights_next":"下一个","cph_highlights_previous":"上一个"},"tw":{"cph_highlights_group_aria":"標記 {index} / {total}","cph_highlights_heading":"標記","cph_highlights_next":"繼續","cph_highlights_previous":"上一個"}}'),
        _ = {
          pillBtn: "rockstargames-modules-core-highlightsff3fc1de81e43e4d9957c57f57905551",
          selected: "rockstargames-modules-core-highlightse72e58362a34fc1f916890d22d8f2882",
          textWrapper: "rockstargames-modules-core-highlightsd14a59535c6df8134c3dac65e9783a91",
          scrollEnd: "rockstargames-modules-core-highlightsda43304a78c2d7b9a4404c4dab983a5f",
          content: "rockstargames-modules-core-highlightsb485fe85babeaa01e1cf0946b8f855ef",
          heading: "rockstargames-modules-core-highlightsc3266e97f5a95a46021c60e31128a8e6",
          summaryText: "rockstargames-modules-core-highlightsf644dd79020a84aa7b281d705020af19"
        };
      var u = t(5240);
      const p = {
          ease: "easeInOut",
          duration: .3
        },
        f = {
          fadeIn: {
            opacity: 1,
            zIndex: 5,
            transition: p,
            display: "flex"
          },
          fadeOut: {
            transition: p,
            zIndex: 4,
            opacity: 0,
            transitionEnd: {
              zIndex: "unset",
              display: "none"
            }
          }
        },
        m = (0, s.withIntl)((e => {
          let {
            heading: i,
            title: t,
            summary: a,
            isActive: l,
            index: r,
            highlightsCount: n,
            ...o
          } = e;
          const d = (0, s.useIntl)(),
            p = (0, h.useRef)(null),
            [m, b] = (0, h.useState)(null),
            {
              scrollYProgress: x
            } = (0, g.useScroll)({
              container: p
            });
          return (0, h.useEffect)((() => {
            null === m && b(x.current < .9), x.on("change", (e => {
              b(e < .9)
            }))
          }), [x]), (0, u.jsxs)(g.motion.div, {
            id: _.content,
            "aria-hidden": !l,
            "aria-label": d.formatMessage(c.cph_highlights_group_aria, {
              index: r + 1,
              total: n
            }),
            onAnimationStart: () => {
              p.current && l && setTimeout((() => p.current?.scrollTo({
                top: 0
              })), 0)
            },
            role: "group",
            className: [_.textWrapper, m ? "" : _.scrollEnd].join(" "),
            variants: f,
            animate: l ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...o,
            children: [i && (0, u.jsx)("h1", {
              children: i || d.formatMessage(c.cph_highlights_heading)
            }), t && (0, u.jsx)("h2", {
              className: _.heading,
              children: t
            }), (0, u.jsx)(g.motion.div, {
              ref: p,
              className: _.summaryText,
              dangerouslySetInnerHTML: {
                __html: (v = a, v ? v.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
              }
            })]
          });
          var v
        }), d),
        b = {
          pillBtn: "rockstargames-modules-core-highlightsd7ebf2b9b974578337ed6082561a7eb4",
          selected: "rockstargames-modules-core-highlightsc7b83e46ad094cbce38bcb64baf3f455",
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
        x = e => {
          let {
            highlights: i = [],
            subtitle: t = ""
          } = e;
          const d = (0, s.useIntl)(),
            {
              ref: _,
              inView: p
            } = (0, a.useInView)({
              threshold: .6
            }),
            {
              track: f
            } = (0, o.useGtmTrack)(),
            [x, v] = (0, h.useState)(!1),
            [k, y] = (0, h.useState)(!1),
            [w, j] = (0, h.useState)(0),
            [S, I] = (0, h.useState)(null),
            [M, C] = (0, h.useState)([r.O4, r.Hj, r.eM]),
            [E, N] = (0, h.useState)({}),
            H = (0, h.useRef)(null),
            B = (0, h.useRef)(null),
            P = (0, h.useRef)(null),
            R = (0, h.useRef)(null),
            z = (0, h.useRef)(null),
            T = (0, l.useGenerateCdnSource)();
          return (0, h.useEffect)((() => {
            const e = [r.O4, r.Hj, r.eM];
            C(e)
          }), [!1]), (0, h.useEffect)((() => {
            p && !x && (f({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "highlights",
              element_placement: "Highlights"
            }), v(!0))
          }), [p]), i?.length ? (0, u.jsxs)("section", {
            className: b.mainContainer,
            ref: _,
            children: [(0, u.jsxs)("div", {
              ref: H,
              className: b.mainCarousel,
              onMouseEnter: () => {
                y(!0)
              },
              onMouseLeave: () => {
                y(!1)
              },
              children: [i.length > 1 && (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)(g.motion.button, {
                  ref: R,
                  type: "button",
                  "aria-label": d.formatMessage(c.cph_highlights_previous),
                  className: [b.controlBtn, b.prevBtn, k ? b.fadeIn : b.fadeOut].join(" "),
                  onClick: () => {
                    f({
                      event: "carousel_previous",
                      element_placement: "Highlights"
                    }), E && E.slidePrev()
                  },
                  disabled: w < 1
                }), (0, u.jsx)(g.motion.button, {
                  ref: z,
                  type: "button",
                  "aria-label": d.formatMessage(c.cph_highlights_next),
                  className: [b.controlBtn, b.nextBtn, k ? b.fadeIn : b.fadeOut].join(" "),
                  onClick: () => {
                    f({
                      event: "carousel_next",
                      element_placement: "Highlights"
                    }), E && E.slideNext()
                  },
                  disabled: w === i.length - 1
                })]
              }), (0, u.jsx)(n.wx, {
                onInit: e => N(e),
                onBeforeInit: e => {
                  B.current = e
                },
                modules: M,
                onSlideChange: e => {
                  const i = e.realIndex;
                  j(i)
                },
                navigation: {
                  prevEl: R.current,
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
                  swiper: S
                },
                watchSlidesProgress: !0,
                slidesPerView: 1,
                initialSlide: w,
                loop: !1,
                onTouchEnd: () => {
                  f({
                    event: "carousel_swipe",
                    element_placement: "Highlights"
                  })
                },
                children: i.map(((e, i) => (0, u.jsx)(n.Ky, {
                  children: (0, u.jsx)("img", {
                    alt: e.title,
                    "aria-label": e.title,
                    "aria-current": i === w,
                    src: T(e.image),
                    role: "presentation"
                  })
                }, `${e.title}-${i}`)))
              })]
            }), (0, u.jsxs)("div", {
              className: b.contentContainer,
              children: [(0, u.jsx)("div", {
                className: b.carouselContainer,
                children: (0, u.jsx)(n.wx, {
                  onBeforeInit: e => {
                    P.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  onSwiper: I,
                  modules: M,
                  slidesPerView: "auto",
                  initialSlide: w,
                  children: i.map(((e, t) => (0, u.jsx)(n.Ky, {
                    children: (0, u.jsx)("button", {
                      type: "button",
                      onClick: () => (e => {
                        f({
                          event: "carousel_thumbnail_click",
                          element_placement: "Highlights",
                          position: e,
                          card_name: i[e]?.title
                        }), j(e), B.current?.slideTo(e), P.current?.slideTo(e)
                      })(t),
                      className: `${t===w?b.active:""}`,
                      "aria-label": e.title,
                      "aria-current": t === w,
                      children: (0, u.jsx)("img", {
                        src: `${T(e.image)}?im=Resize,width=252`,
                        alt: e.title ?? "Slide"
                      })
                    })
                  }, e.key)))
                })
              }), (0, u.jsx)("div", {
                className: b.textContainer,
                children: i.map(((e, h) => (0, u.jsx)(m, {
                  heading: t,
                  title: e.title,
                  summary: e.summary,
                  isActive: w === h,
                  index: h,
                  highlightsCount: i.length
                }, e.key)))
              })]
            })]
          }) : null
        }
    }
  }
]);