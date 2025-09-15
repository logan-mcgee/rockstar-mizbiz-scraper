try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    i = (new e.Error).stack;
  i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "1bc7b55b-3f6e-440e-81f2-5ca42b420a8c", e._sentryDebugIdIdentifier = "sentry-dbid-1bc7b55b-3f6e-440e-81f2-5ca42b420a8c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [2368, 9987], {
    32368: (e, i, t) => {
      t.r(i), t.d(i, {
        Highlights: () => x,
        HighlightsItem: () => b
      });
      var a = t(42295),
        s = t(62229),
        h = t(55799),
        n = t(81788),
        l = t(92440),
        r = t(7545),
        c = t(24162),
        g = t(87052),
        o = t(2918);
      const d = (0, n.defineMessages)({
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
        _ = JSON.parse('{"de-DE":{"cph_highlights_group_aria":"Markiertes Element {index} von {total}","cph_highlights_heading":"Markierte Elemente","cph_highlights_next":"Weiter","cph_highlights_previous":"Zurück"},"en-US":{"cph_highlights_group_aria":"Highlight {index} of {total}","cph_highlights_heading":"Highlights","cph_highlights_next":"Next","cph_highlights_previous":"Previous"},"es-ES":{"cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior"},"es-MX":{"cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior"},"fr-FR":{"cph_highlights_group_aria":"Résultat {index} sur {total}","cph_highlights_heading":"Résultats","cph_highlights_next":"Suivant","cph_highlights_previous":"Précédent"},"it-IT":{"cph_highlights_group_aria":"Elemento evidenziato {index} di {total}","cph_highlights_heading":"Elementi evidenziati","cph_highlights_next":"Avanti","cph_highlights_previous":"Precedente"},"ja-JP":{"cph_highlights_group_aria":"{total}のうち{index}をハイライト","cph_highlights_heading":"ハイライト","cph_highlights_next":"進む","cph_highlights_previous":"前"},"ko-KR":{"cph_highlights_group_aria":"하이라이트: {index}/{total}","cph_highlights_heading":"하이라이트","cph_highlights_next":"다음","cph_highlights_previous":"이전"},"pl-PL":{"cph_highlights_group_aria":"Wyróżnione {index} z {total}","cph_highlights_heading":"Wyróżnione","cph_highlights_next":"Dalej","cph_highlights_previous":"Poprzednie"},"pt-BR":{"cph_highlights_group_aria":"Seleção {index} de {total}","cph_highlights_heading":"Seleções","cph_highlights_next":"Próximo","cph_highlights_previous":"Anterior"},"ru-RU":{"cph_highlights_group_aria":"Элемент {index} из {total}","cph_highlights_heading":"Элементы","cph_highlights_next":"Далее","cph_highlights_previous":"Назад"},"zh-CN":{"cph_highlights_group_aria":"突出 {index} 共 {total}","cph_highlights_heading":"突出","cph_highlights_next":"下一个","cph_highlights_previous":"上一个"},"zh-TW":{"cph_highlights_group_aria":"標記 {index} / {total}","cph_highlights_heading":"標記","cph_highlights_next":"繼續","cph_highlights_previous":"上一個"}}'),
        p = {
          content: "rockstargames-sites-legacycf3a7a99690a33c677472bfbfdc931e0",
          heading: "rockstargames-sites-legacyc031dc797c3ec3e62d6157eeb36d8520",
          pillBtn: "rockstargames-sites-legacyad600e022a4ad8dd7973635698f97aa8",
          selected: "rockstargames-sites-legacyf9974b85283e6ba9338154cf8c6e8144",
          summaryText: "rockstargames-sites-legacyb7dd947d476afb2b98df95ab0d2645da",
          textWrapper: "rockstargames-sites-legacyaf453a8fc724892fb3e83b73897f1f76"
        },
        u = {
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
        b = (0, n.withIntl)((({
          heading: e,
          title: i,
          summary: t,
          isActive: h,
          index: l,
          highlightsCount: r,
          ...c
        }) => {
          const o = (0, n.useIntl)(),
            _ = (0, s.useRef)(null);
          return (0, a.jsxs)(g.motion.div, {
            "aria-hidden": !h,
            "aria-label": o.formatMessage(d.cph_highlights_group_aria, {
              index: l + 1,
              total: r
            }),
            onAnimationStart: () => {
              _.current && h && setTimeout((() => _.current?.scrollTo({
                top: 0
              })), 0)
            },
            role: "group",
            className: [p.content, p.textWrapper].join(" "),
            variants: f,
            animate: h ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...c,
            children: [e && (0, a.jsx)("h1", {
              children: e || o.formatMessage(d.cph_highlights_heading)
            }), i && (0, a.jsx)("h2", {
              className: p.heading,
              children: i
            }), (0, a.jsx)(g.motion.div, {
              ref: _,
              className: p.summaryText,
              dangerouslySetInnerHTML: {
                __html: (u = t, u ? u.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
              }
            })]
          });
          var u
        }), _),
        m = {
          active: "rockstargames-sites-legacyffe479fc6d12e441bdd869bfadbad9d8",
          carouselContainer: "rockstargames-sites-legacycb2067c71495e79af319174e21f5b456",
          circleIndicators: "rockstargames-sites-legacyc6b6ee15075db13060d681d7ef8ea8e1",
          contentContainer: "rockstargames-sites-legacyfcc28a7adb515c877d778048222dff3f",
          controlBtn: "rockstargames-sites-legacybd3c798f7bce0b1bf8eef02c2ffc38a8",
          fadeIn: "rockstargames-sites-legacyafbc1e3bc0029085cc98eed1eedeb549",
          fadeOut: "rockstargames-sites-legacye824186cc798a59373d17cb2439bcb2d",
          heading: "rockstargames-sites-legacya170c9325e7b3cfda1de5e5b924eb870",
          indicator: "rockstargames-sites-legacyff6f8c30f61a3959fb5e85125bcf14ae",
          mainCarousel: "rockstargames-sites-legacybba85d39f04bc10f647280a811dba117",
          mainContainer: "rockstargames-sites-legacyb8cfa1eb3403128e589e14c5f7fad547",
          nextBtn: "rockstargames-sites-legacyfde90e7bc408045b909293e916c993ae",
          pillBtn: "rockstargames-sites-legacyf7e754149270d537b3a078a3e18e4b37",
          prevBtn: "rockstargames-sites-legacyeeaace28aebebb9f2a68c9ab887d5eda",
          selected: "rockstargames-sites-legacyb5436dde7bfb2a5e32493563610709a5",
          textContainer: "rockstargames-sites-legacyaaf39b8bf696ac333329547a193bd279"
        },
        x = ({
          highlights: e = [],
          subtitle: i = ""
        }) => {
          const t = (0, n.useIntl)(),
            {
              ref: _,
              inView: p
            } = (0, h.useInView)({
              threshold: .6
            }),
            {
              track: u
            } = (0, o.useGtmTrack)(),
            [f, x] = (0, s.useState)(!1),
            [y, v] = (0, s.useState)(!1),
            [k, w] = (0, s.useState)(0),
            [j, S] = (0, s.useState)([r.U1, r.WO, r.dK]),
            [I, E] = (0, s.useState)({}),
            C = (0, s.useRef)(null),
            M = (0, s.useRef)(null),
            N = (0, s.useRef)(null),
            T = (0, s.useRef)(null),
            R = (0, s.useRef)(null),
            A = (0, l.useGenerateCdnSource)();
          return (0, s.useEffect)((() => {
            const e = [r.U1, r.WO, r.dK];
            S(e)
          }), [!1]), (0, s.useEffect)((() => {
            p && !f && (u({
              event: "page_section_impression",
              element_placement: "highlights"
            }), x(!0))
          }), [p]), (0, s.useEffect)((() => (I.el && I.el.querySelectorAll(".swiper-pagination-bullet").forEach(((e, i) => {
            e.addEventListener("click", (() => {
              u({
                event: "carousel_thumbnail_click",
                element_placement: "highlights",
                position: i,
                card_name: "dot"
              })
            }))
          })), () => {
            if (I.el) {
              const e = I.el.querySelectorAll(".swiper-pagination-bullet");
              e && e.forEach((e => {
                e.removeEventListener("click", (() => {}))
              }))
            }
          })), [I]), e?.length ? (0, a.jsxs)("section", {
            className: m.mainContainer,
            ref: _,
            children: [(0, a.jsxs)("div", {
              ref: C,
              className: m.mainCarousel,
              onMouseEnter: () => {
                v(!0)
              },
              onMouseLeave: () => {
                v(!1)
              },
              children: [e.length > 1 && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(g.motion.button, {
                  ref: T,
                  type: "button",
                  "aria-label": t.formatMessage(d.cph_highlights_previous),
                  className: [m.controlBtn, m.prevBtn, y ? m.fadeIn : m.fadeOut].join(" "),
                  onClick: () => {
                    u({
                      event: "carousel_previous",
                      element_placement: "highlights"
                    }), I && I.slidePrev()
                  },
                  disabled: k < 1
                }), (0, a.jsx)(g.motion.button, {
                  ref: R,
                  type: "button",
                  "aria-label": t.formatMessage(d.cph_highlights_next),
                  className: [m.controlBtn, m.nextBtn, y ? m.fadeIn : m.fadeOut].join(" "),
                  onClick: () => {
                    u({
                      event: "carousel_next",
                      element_placement: "highlights"
                    }), I && I.slideNext()
                  },
                  disabled: k === e.length - 1
                })]
              }), (0, a.jsx)(c.RC, {
                onInit: e => E(e),
                onBeforeInit: e => {
                  M.current = e
                },
                modules: j,
                onSlideChange: e => {
                  const i = e.realIndex;
                  w(i)
                },
                navigation: {
                  prevEl: T.current,
                  nextEl: R.current
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
                  swiper: N.current?.__swiper__ ? N.current : null
                },
                watchSlidesProgress: !0,
                slidesPerView: 1,
                initialSlide: k,
                loop: !1,
                onTouchEnd: () => {
                  u({
                    event: "carousel_swipe",
                    element_placement: "highlights"
                  })
                },
                children: e.map(((e, i) => (0, a.jsx)(c.qr, {
                  children: (0, a.jsx)("img", {
                    alt: e.title,
                    "aria-label": e.title,
                    "aria-current": i === k,
                    src: A(e.image),
                    role: "presentation"
                  })
                }, `${e.title}-${i}`)))
              })]
            }), (0, a.jsxs)("div", {
              className: m.contentContainer,
              children: [(0, a.jsx)("div", {
                className: m.carouselContainer,
                children: (0, a.jsx)(c.RC, {
                  onInit: e => {
                    N.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  modules: j,
                  slidesPerView: "auto",
                  initialSlide: k,
                  children: e.map(((i, t) => (0, a.jsx)(c.qr, {
                    children: (0, a.jsx)("button", {
                      type: "button",
                      onClick: () => (i => {
                        u({
                          event: "carousel_thumbnail_click",
                          element_placement: "highlights",
                          position: i,
                          card_name: e[i]?.title
                        }), w(i), M.current?.slideTo(i), N.current?.slideTo(i)
                      })(t),
                      className: `${t===k?m.active:""}`,
                      "aria-label": i.title,
                      "aria-current": t === k,
                      children: (0, a.jsx)("img", {
                        src: `${A(i.image)}?im=Resize,width=252`,
                        alt: i.title ?? "Slide"
                      })
                    })
                  }, i.key)))
                })
              }), (0, a.jsx)("div", {
                className: m.textContainer,
                children: e.map(((t, s) => (0, a.jsx)(b, {
                  heading: i,
                  title: t.title,
                  summary: t.summary,
                  isActive: k === s,
                  index: s,
                  highlightsCount: e.length
                }, t.key)))
              })]
            })]
          }) : null
        }
    }
  }
]);