! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "efa5e721-0fb2-4289-be0f-9c4f9e957e2a", e._sentryDebugIdIdentifier = "sentry-dbid-efa5e721-0fb2-4289-be0f-9c4f9e957e2a")
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
  [8189, 570], {
    78189: (e, t, i) => {
      i.r(t), i.d(t, {
        Highlights: () => x,
        HighlightsItem: () => b
      });
      var a = i(62229),
        s = i(22738),
        h = i(81788),
        n = i(92440),
        g = i(7545),
        r = i(24162),
        l = i(85045),
        c = i(2918);
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
          pillBtn: "rockstargames-sites-gta-gen9ad600e022a4ad8dd7973635698f97aa8",
          selected: "rockstargames-sites-gta-gen9f9974b85283e6ba9338154cf8c6e8144",
          textWrapper: "rockstargames-sites-gta-gen9af453a8fc724892fb3e83b73897f1f76",
          content: "rockstargames-sites-gta-gen9cf3a7a99690a33c677472bfbfdc931e0",
          heading: "rockstargames-sites-gta-gen9c031dc797c3ec3e62d6157eeb36d8520",
          summaryText: "rockstargames-sites-gta-gen9b7dd947d476afb2b98df95ab0d2645da"
        };
      var p = i(98096);
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
        b = (0, h.withIntl)((e => {
          let {
            heading: t,
            title: i,
            summary: s,
            isActive: n,
            index: g,
            highlightsCount: r,
            ...c
          } = e;
          const d = (0, h.useIntl)(),
            u = (0, a.useRef)(null);
          return (0, p.jsxs)(l.motion.div, {
            "aria-hidden": !n,
            "aria-label": d.formatMessage(o.cph_highlights_group_aria, {
              index: g + 1,
              total: r
            }),
            onAnimationStart: () => {
              u.current && n && setTimeout((() => u.current?.scrollTo({
                top: 0
              })), 0)
            },
            role: "group",
            className: [_.content, _.textWrapper].join(" "),
            variants: f,
            animate: n ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...c,
            children: [t && (0, p.jsx)("h1", {
              children: t || d.formatMessage(o.cph_highlights_heading)
            }), i && (0, p.jsx)("h2", {
              className: _.heading,
              children: i
            }), (0, p.jsx)(l.motion.div, {
              ref: u,
              className: _.summaryText,
              dangerouslySetInnerHTML: {
                __html: (b = s, b ? b.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
              }
            })]
          });
          var b
        }), d),
        m = {
          pillBtn: "rockstargames-sites-gta-gen9f7e754149270d537b3a078a3e18e4b37",
          selected: "rockstargames-sites-gta-gen9b5436dde7bfb2a5e32493563610709a5",
          mainContainer: "rockstargames-sites-gta-gen9b8cfa1eb3403128e589e14c5f7fad547",
          heading: "rockstargames-sites-gta-gen9a170c9325e7b3cfda1de5e5b924eb870",
          mainCarousel: "rockstargames-sites-gta-gen9bba85d39f04bc10f647280a811dba117",
          controlBtn: "rockstargames-sites-gta-gen9bd3c798f7bce0b1bf8eef02c2ffc38a8",
          fadeIn: "rockstargames-sites-gta-gen9afbc1e3bc0029085cc98eed1eedeb549",
          fadeOut: "rockstargames-sites-gta-gen9e824186cc798a59373d17cb2439bcb2d",
          circleIndicators: "rockstargames-sites-gta-gen9c6b6ee15075db13060d681d7ef8ea8e1",
          indicator: "rockstargames-sites-gta-gen9ff6f8c30f61a3959fb5e85125bcf14ae",
          nextBtn: "rockstargames-sites-gta-gen9fde90e7bc408045b909293e916c993ae",
          prevBtn: "rockstargames-sites-gta-gen9eeaace28aebebb9f2a68c9ab887d5eda",
          active: "rockstargames-sites-gta-gen9ffe479fc6d12e441bdd869bfadbad9d8",
          contentContainer: "rockstargames-sites-gta-gen9fcc28a7adb515c877d778048222dff3f",
          textContainer: "rockstargames-sites-gta-gen9aaf39b8bf696ac333329547a193bd279",
          carouselContainer: "rockstargames-sites-gta-gen9cb2067c71495e79af319174e21f5b456"
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
            [x, v] = (0, a.useState)(!1),
            [k, y] = (0, a.useState)(!1),
            [w, j] = (0, a.useState)(0),
            [I, S] = (0, a.useState)([g.U1, g.WO, g.dK]),
            [C, E] = (0, a.useState)({}),
            M = (0, a.useRef)(null),
            N = (0, a.useRef)(null),
            R = (0, a.useRef)(null),
            B = (0, a.useRef)(null),
            P = (0, a.useRef)(null),
            z = (0, n.useGenerateCdnSource)();
          return (0, a.useEffect)((() => {
            const e = [g.U1, g.WO, g.dK];
            S(e)
          }), [!1]), (0, a.useEffect)((() => {
            u && !x && (f({
              event: "page_section_impression",
              element_placement: "highlights"
            }), v(!0))
          }), [u]), (0, a.useEffect)((() => (C.el && C.el.querySelectorAll(".swiper-pagination-bullet").forEach(((e, t) => {
            e.addEventListener("click", (() => {
              f({
                event: "carousel_thumbnail_click",
                element_placement: "highlights",
                position: t,
                card_name: "dot"
              })
            }))
          })), () => {
            if (C.el) {
              const e = C.el.querySelectorAll(".swiper-pagination-bullet");
              e && e.forEach((e => {
                e.removeEventListener("click", (() => {}))
              }))
            }
          })), [C]), t?.length ? (0, p.jsxs)("section", {
            className: m.mainContainer,
            ref: _,
            children: [(0, p.jsxs)("div", {
              ref: M,
              className: m.mainCarousel,
              onMouseEnter: () => {
                y(!0)
              },
              onMouseLeave: () => {
                y(!1)
              },
              children: [t.length > 1 && (0, p.jsxs)(p.Fragment, {
                children: [(0, p.jsx)(l.motion.button, {
                  ref: B,
                  type: "button",
                  "aria-label": d.formatMessage(o.cph_highlights_previous),
                  className: [m.controlBtn, m.prevBtn, k ? m.fadeIn : m.fadeOut].join(" "),
                  onClick: () => {
                    f({
                      event: "carousel_previous",
                      element_placement: "highlights"
                    }), C && C.slidePrev()
                  },
                  disabled: w < 1
                }), (0, p.jsx)(l.motion.button, {
                  ref: P,
                  type: "button",
                  "aria-label": d.formatMessage(o.cph_highlights_next),
                  className: [m.controlBtn, m.nextBtn, k ? m.fadeIn : m.fadeOut].join(" "),
                  onClick: () => {
                    f({
                      event: "carousel_next",
                      element_placement: "highlights"
                    }), C && C.slideNext()
                  },
                  disabled: w === t.length - 1
                })]
              }), (0, p.jsx)(r.RC, {
                onInit: e => E(e),
                onBeforeInit: e => {
                  N.current = e
                },
                modules: I,
                onSlideChange: e => {
                  const t = e.realIndex;
                  j(t)
                },
                navigation: {
                  prevEl: B.current,
                  nextEl: P.current
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
                  swiper: R.current?.__swiper__ ? R.current : null
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
                    src: z(e.image),
                    role: "presentation"
                  })
                }, `${e.title}-${t}`)))
              })]
            }), (0, p.jsxs)("div", {
              className: m.contentContainer,
              children: [(0, p.jsx)("div", {
                className: m.carouselContainer,
                children: (0, p.jsx)(r.RC, {
                  onInit: e => {
                    R.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  modules: I,
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
                        }), j(e), N.current?.slideTo(e), R.current?.slideTo(e)
                      })(i),
                      className: `${i===w?m.active:""}`,
                      "aria-label": e.title,
                      "aria-current": i === w,
                      children: (0, p.jsx)("img", {
                        src: `${z(e.image)}?im=Resize,width=252`,
                        alt: e.title ?? "Slide"
                      })
                    })
                  }, e.key)))
                })
              }), (0, p.jsx)("div", {
                className: m.textContainer,
                children: t.map(((e, a) => (0, p.jsx)(b, {
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