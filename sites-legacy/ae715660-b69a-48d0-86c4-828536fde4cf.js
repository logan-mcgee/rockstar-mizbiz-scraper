! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ae715660-b69a-48d0-86c4-828536fde4cf", e._sentryDebugIdIdentifier = "sentry-dbid-ae715660-b69a-48d0-86c4-828536fde4cf")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [512, 131], {
    76131: (e, t, i) => {
      i.r(t), i.d(t, {
        Highlights: () => x,
        HighlightsItem: () => m
      });
      var a = i(71403),
        s = i(59217),
        h = i(96717),
        l = i(74401),
        n = i(89269),
        r = i(81902),
        g = i(174),
        c = i(40207);
      const o = (0, h.defineMessages)({
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
          pillBtn: "rockstargames-sites-legacyfa9d61a2cef6c7cbc91784b01b64bb3a",
          selected: "rockstargames-sites-legacycfad8129d0dc275840e9691a47020682",
          textWrapper: "rockstargames-sites-legacya0226766765ba11acf755aaa9e58956c",
          content: "rockstargames-sites-legacyb443c6c58f4215a40ba481d0191decaa",
          heading: "rockstargames-sites-legacyad4d0033db9ff6fc9a0634ee8a6f6949",
          summaryText: "rockstargames-sites-legacyed7b542b2eadfcae3e18dacf2e2a79d2"
        };
      var p = i(46632);
      const u = {
          ease: "easeInOut",
          duration: .3
        },
        f = {
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
        m = (0, h.withIntl)((e => {
          let {
            heading: t,
            title: i,
            summary: s,
            isActive: l,
            index: n,
            highlightsCount: r,
            ...c
          } = e;
          const d = (0, h.useIntl)(),
            u = (0, a.useRef)(null);
          return (0, p.jsxs)(g.motion.div, {
            "aria-hidden": !l,
            "aria-label": d.formatMessage(o.cph_highlights_group_aria, {
              index: n + 1,
              total: r
            }),
            onAnimationStart: () => {
              u.current && l && setTimeout((() => u.current?.scrollTo({
                top: 0
              })), 0)
            },
            role: "group",
            className: [_.content, _.textWrapper].join(" "),
            variants: f,
            animate: l ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...c,
            children: [t && (0, p.jsx)("h1", {
              children: t || d.formatMessage(o.cph_highlights_heading)
            }), i && (0, p.jsx)("h2", {
              className: _.heading,
              children: i
            }), (0, p.jsx)(g.motion.div, {
              ref: u,
              className: _.summaryText,
              dangerouslySetInnerHTML: {
                __html: (m = s, m ? m.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
              }
            })]
          });
          var m
        }), d),
        b = {
          pillBtn: "rockstargames-sites-legacyfbf2653dcb83a5319042540c5a7bfded",
          selected: "rockstargames-sites-legacyfcab921449e395e9d9b91430f2cf93da",
          mainContainer: "rockstargames-sites-legacyb074cd4a4ec387dfeb02a44613beade3",
          heading: "rockstargames-sites-legacybf153e81c4496d191eb3cbe512ef7e8b",
          mainCarousel: "rockstargames-sites-legacyb2c096da5ec6645b62222e0e1007edf8",
          controlBtn: "rockstargames-sites-legacya0af431c5d94b4edb73011259125b7ce",
          fadeIn: "rockstargames-sites-legacyc6f866fe73c17491e427c4d57cb2072c",
          fadeOut: "rockstargames-sites-legacyd7c9e2a818180c042f4f59dd34751356",
          circleIndicators: "rockstargames-sites-legacyd899b3bad0a36ee8067b6c06039d68b0",
          indicator: "rockstargames-sites-legacyb12395255a853afbe2f30d6cbfc6d899",
          nextBtn: "rockstargames-sites-legacyf26a03d6aa116dede0a18d59b83676b2",
          prevBtn: "rockstargames-sites-legacyabc615a921c991c567ba1c20c88f6337",
          active: "rockstargames-sites-legacyfc507b499a7d3cd97f67ab5b9495a182",
          contentContainer: "rockstargames-sites-legacyb49266a85e70c01645e072c0c104ee55",
          textContainer: "rockstargames-sites-legacycca1336227938a222f13116a6fd609a0",
          carouselContainer: "rockstargames-sites-legacya97165e413ad93c417b9ddd803ba13b1"
        },
        x = e => {
          let {
            highlights: t = [],
            subtitle: i = ""
          } = e;
          const d = (0, h.useIntl)(),
            {
              ref: _,
              inView: u
            } = (0, s.useInView)({
              threshold: .6
            }),
            {
              track: f
            } = (0, c.useGtmTrack)(),
            [x, y] = (0, a.useState)(!1),
            [v, k] = (0, a.useState)(!1),
            [w, j] = (0, a.useState)(0),
            [S, I] = (0, a.useState)(null),
            [C, E] = (0, a.useState)([n.U1, n.WO, n.dK]),
            [M, N] = (0, a.useState)({}),
            R = (0, a.useRef)(null),
            B = (0, a.useRef)(null),
            P = (0, a.useRef)(null),
            z = (0, a.useRef)(null),
            A = (0, a.useRef)(null),
            T = (0, l.useGenerateCdnSource)();
          return (0, a.useEffect)((() => {
            const e = [n.U1, n.WO, n.dK];
            E(e)
          }), [!1]), (0, a.useEffect)((() => {
            u && !x && (f({
              event: "page_section_impression",
              element_placement: "highlights"
            }), y(!0))
          }), [u]), (0, a.useEffect)((() => (M.el && M.el.querySelectorAll(".swiper-pagination-bullet").forEach(((e, t) => {
            e.addEventListener("click", (() => {
              f({
                event: "carousel_thumbnail_click",
                element_placement: "highlights",
                position: t,
                card_name: "dot"
              })
            }))
          })), () => {
            if (M.el) {
              const e = M.el.querySelectorAll(".swiper-pagination-bullet");
              e && e.forEach((e => {
                e.removeEventListener("click", (() => {}))
              }))
            }
          })), [M]), t?.length ? (0, p.jsxs)("section", {
            className: b.mainContainer,
            ref: _,
            children: [(0, p.jsxs)("div", {
              ref: R,
              className: b.mainCarousel,
              onMouseEnter: () => {
                k(!0)
              },
              onMouseLeave: () => {
                k(!1)
              },
              children: [t.length > 1 && (0, p.jsxs)(p.Fragment, {
                children: [(0, p.jsx)(g.motion.button, {
                  ref: z,
                  type: "button",
                  "aria-label": d.formatMessage(o.cph_highlights_previous),
                  className: [b.controlBtn, b.prevBtn, v ? b.fadeIn : b.fadeOut].join(" "),
                  onClick: () => {
                    f({
                      event: "carousel_previous",
                      element_placement: "highlights"
                    }), M && M.slidePrev()
                  },
                  disabled: w < 1
                }), (0, p.jsx)(g.motion.button, {
                  ref: A,
                  type: "button",
                  "aria-label": d.formatMessage(o.cph_highlights_next),
                  className: [b.controlBtn, b.nextBtn, v ? b.fadeIn : b.fadeOut].join(" "),
                  onClick: () => {
                    f({
                      event: "carousel_next",
                      element_placement: "highlights"
                    }), M && M.slideNext()
                  },
                  disabled: w === t.length - 1
                })]
              }), (0, p.jsx)(r.RC, {
                onInit: e => N(e),
                onBeforeInit: e => {
                  B.current = e
                },
                modules: C,
                onSlideChange: e => {
                  const t = e.realIndex;
                  j(t)
                },
                navigation: {
                  prevEl: z.current,
                  nextEl: A.current
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
                    element_placement: "highlights"
                  })
                },
                children: t.map(((e, t) => (0, p.jsx)(r.qr, {
                  children: (0, p.jsx)("img", {
                    alt: e.title,
                    "aria-label": e.title,
                    "aria-current": t === w,
                    src: T(e.image),
                    role: "presentation"
                  })
                }, `${e.title}-${t}`)))
              })]
            }), (0, p.jsxs)("div", {
              className: b.contentContainer,
              children: [(0, p.jsx)("div", {
                className: b.carouselContainer,
                children: (0, p.jsx)(r.RC, {
                  onBeforeInit: e => {
                    P.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  onSwiper: I,
                  modules: C,
                  slidesPerView: "auto",
                  initialSlide: w,
                  children: t.map(((e, i) => (0, p.jsx)(r.qr, {
                    children: (0, p.jsx)("button", {
                      type: "button",
                      onClick: () => (e => {
                        f({
                          event: "carousel_thumbnail_click",
                          element_placement: "highlights",
                          position: e,
                          card_name: t[e]?.title
                        }), j(e), B.current?.slideTo(e), P.current?.slideTo(e)
                      })(i),
                      className: `${i===w?b.active:""}`,
                      "aria-label": e.title,
                      "aria-current": i === w,
                      children: (0, p.jsx)("img", {
                        src: `${T(e.image)}?im=Resize,width=252`,
                        alt: e.title ?? "Slide"
                      })
                    })
                  }, e.key)))
                })
              }), (0, p.jsx)("div", {
                className: b.textContainer,
                children: t.map(((e, a) => (0, p.jsx)(m, {
                  heading: i,
                  title: e.title,
                  summary: e.summary,
                  isActive: w === a,
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