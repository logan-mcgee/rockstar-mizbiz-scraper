try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d0a2b572-9d08-489a-ab86-977f355ebc0d", e._sentryDebugIdIdentifier = "sentry-dbid-d0a2b572-9d08-489a-ab86-977f355ebc0d")
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
  [2368, 9987], {
    32368: (e, t, i) => {
      i.r(t), i.d(t, {
        Highlights: () => x,
        HighlightsItem: () => b
      });
      var a = i(42295),
        s = i(62229),
        h = i(61128),
        n = i(81788),
        g = i(92440),
        l = i(85827),
        r = i(24162),
        c = i(85045),
        o = i(2918);
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
          content: "rockstargames-sites-gta-gen9cf3a7a99690a33c677472bfbfdc931e0",
          heading: "rockstargames-sites-gta-gen9c031dc797c3ec3e62d6157eeb36d8520",
          pillBtn: "rockstargames-sites-gta-gen9ad600e022a4ad8dd7973635698f97aa8",
          selected: "rockstargames-sites-gta-gen9f9974b85283e6ba9338154cf8c6e8144",
          summaryText: "rockstargames-sites-gta-gen9b7dd947d476afb2b98df95ab0d2645da",
          textWrapper: "rockstargames-sites-gta-gen9af453a8fc724892fb3e83b73897f1f76"
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
        b = (0, n.withIntl)(({
          heading: e,
          title: t,
          summary: i,
          isActive: h,
          index: g,
          highlightsCount: l,
          ...r
        }) => {
          const o = (0, n.useIntl)(),
            _ = (0, s.useRef)(null);
          return (0, a.jsxs)(c.motion.div, {
            "aria-hidden": !h,
            "aria-label": o.formatMessage(d.cph_highlights_group_aria, {
              index: g + 1,
              total: l
            }),
            onAnimationStart: () => {
              _.current && h && setTimeout(() => _.current?.scrollTo({
                top: 0
              }), 0)
            },
            role: "group",
            className: [p.content, p.textWrapper].join(" "),
            variants: f,
            animate: h ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...r,
            children: [e && (0, a.jsx)("h1", {
              children: e || o.formatMessage(d.cph_highlights_heading)
            }), t && (0, a.jsx)("h2", {
              className: p.heading,
              children: t
            }), (0, a.jsx)(c.motion.div, {
              ref: _,
              className: p.summaryText,
              dangerouslySetInnerHTML: {
                __html: (u = i, u ? u.split(/\r?\n/).filter(e => e.trim()).map(e => `<p>${e}</p>`).join("") : "")
              }
            })]
          });
          var u
        }, _),
        m = {
          active: "rockstargames-sites-gta-gen9ffe479fc6d12e441bdd869bfadbad9d8",
          carouselContainer: "rockstargames-sites-gta-gen9cb2067c71495e79af319174e21f5b456",
          circleIndicators: "rockstargames-sites-gta-gen9c6b6ee15075db13060d681d7ef8ea8e1",
          contentContainer: "rockstargames-sites-gta-gen9fcc28a7adb515c877d778048222dff3f",
          controlBtn: "rockstargames-sites-gta-gen9bd3c798f7bce0b1bf8eef02c2ffc38a8",
          fadeIn: "rockstargames-sites-gta-gen9afbc1e3bc0029085cc98eed1eedeb549",
          fadeOut: "rockstargames-sites-gta-gen9e824186cc798a59373d17cb2439bcb2d",
          heading: "rockstargames-sites-gta-gen9a170c9325e7b3cfda1de5e5b924eb870",
          indicator: "rockstargames-sites-gta-gen9ff6f8c30f61a3959fb5e85125bcf14ae",
          mainCarousel: "rockstargames-sites-gta-gen9bba85d39f04bc10f647280a811dba117",
          mainContainer: "rockstargames-sites-gta-gen9b8cfa1eb3403128e589e14c5f7fad547",
          nextBtn: "rockstargames-sites-gta-gen9fde90e7bc408045b909293e916c993ae",
          pillBtn: "rockstargames-sites-gta-gen9f7e754149270d537b3a078a3e18e4b37",
          prevBtn: "rockstargames-sites-gta-gen9eeaace28aebebb9f2a68c9ab887d5eda",
          selected: "rockstargames-sites-gta-gen9b5436dde7bfb2a5e32493563610709a5",
          textContainer: "rockstargames-sites-gta-gen9aaf39b8bf696ac333329547a193bd279"
        },
        x = ({
          highlights: e = [],
          subtitle: t = ""
        }) => {
          const i = (0, n.useIntl)(),
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
            [v, k] = (0, s.useState)(!1),
            [y, w] = (0, s.useState)(0),
            [j, S] = (0, s.useState)([l.U1, l.WO, l.dK]),
            [I, E] = (0, s.useState)({}),
            C = (0, s.useRef)(null),
            M = (0, s.useRef)(null),
            N = (0, s.useRef)(null),
            T = (0, s.useRef)(null),
            R = (0, s.useRef)(null),
            A = (0, g.useGenerateCdnSource)();
          return (0, s.useEffect)(() => {
            const e = [l.U1, l.WO, l.dK];
            S(e)
          }, [!1]), (0, s.useEffect)(() => {
            p && !f && (u({
              event: "page_section_impression",
              element_placement: "highlights"
            }), x(!0))
          }, [p]), (0, s.useEffect)(() => (I.el && I.el.querySelectorAll(".swiper-pagination-bullet").forEach((e, t) => {
            e.addEventListener("click", () => {
              u({
                event: "carousel_thumbnail_click",
                element_placement: "highlights",
                position: t,
                card_name: "dot"
              })
            })
          }), () => {
            if (I.el) {
              const e = I.el.querySelectorAll(".swiper-pagination-bullet");
              e && e.forEach(e => {
                e.removeEventListener("click", () => {})
              })
            }
          }), [I]), e?.length ? (0, a.jsxs)("section", {
            className: m.mainContainer,
            ref: _,
            children: [(0, a.jsxs)("div", {
              ref: C,
              className: m.mainCarousel,
              onMouseEnter: () => {
                k(!0)
              },
              onMouseLeave: () => {
                k(!1)
              },
              children: [e.length > 1 && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(c.motion.button, {
                  ref: T,
                  type: "button",
                  "aria-label": i.formatMessage(d.cph_highlights_previous),
                  className: [m.controlBtn, m.prevBtn, v ? m.fadeIn : m.fadeOut].join(" "),
                  onClick: () => {
                    u({
                      event: "carousel_previous",
                      element_placement: "highlights"
                    }), I && I.slidePrev()
                  },
                  disabled: y < 1
                }), (0, a.jsx)(c.motion.button, {
                  ref: R,
                  type: "button",
                  "aria-label": i.formatMessage(d.cph_highlights_next),
                  className: [m.controlBtn, m.nextBtn, v ? m.fadeIn : m.fadeOut].join(" "),
                  onClick: () => {
                    u({
                      event: "carousel_next",
                      element_placement: "highlights"
                    }), I && I.slideNext()
                  },
                  disabled: y === e.length - 1
                })]
              }), (0, a.jsx)(r.RC, {
                onInit: e => E(e),
                onBeforeInit: e => {
                  M.current = e
                },
                modules: j,
                onSlideChange: e => {
                  const t = e.realIndex;
                  w(t)
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
                initialSlide: y,
                loop: !1,
                onTouchEnd: () => {
                  u({
                    event: "carousel_swipe",
                    element_placement: "highlights"
                  })
                },
                children: e.map((e, t) => (0, a.jsx)(r.qr, {
                  children: (0, a.jsx)("img", {
                    alt: e.title,
                    "aria-label": e.title,
                    "aria-current": t === y,
                    src: A(e.image),
                    role: "presentation"
                  })
                }, `${e.title}-${t}`))
              })]
            }), (0, a.jsxs)("div", {
              className: m.contentContainer,
              children: [(0, a.jsx)("div", {
                className: m.carouselContainer,
                children: (0, a.jsx)(r.RC, {
                  onInit: e => {
                    N.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  modules: j,
                  slidesPerView: "auto",
                  initialSlide: y,
                  children: e.map((t, i) => (0, a.jsx)(r.qr, {
                    children: (0, a.jsx)("button", {
                      type: "button",
                      onClick: () => (t => {
                        u({
                          event: "carousel_thumbnail_click",
                          element_placement: "highlights",
                          position: t,
                          card_name: e[t]?.title
                        }), w(t), M.current?.slideTo(t), N.current?.slideTo(t)
                      })(i),
                      className: `${i===y?m.active:""}`,
                      "aria-label": t.title,
                      "aria-current": i === y,
                      children: (0, a.jsx)("img", {
                        src: `${A(t.image)}?im=Resize,width=252`,
                        alt: t.title ?? "Slide"
                      })
                    })
                  }, t.key))
                })
              }), (0, a.jsx)("div", {
                className: m.textContainer,
                children: e.map((i, s) => (0, a.jsx)(b, {
                  heading: t,
                  title: i.title,
                  summary: i.summary,
                  isActive: y === s,
                  index: s,
                  highlightsCount: e.length
                }, i.key))
              })]
            })]
          }) : null
        }
    }
  }
]);