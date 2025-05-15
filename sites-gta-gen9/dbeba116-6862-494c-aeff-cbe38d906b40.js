! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dbeba116-6862-494c-aeff-cbe38d906b40", e._sentryDebugIdIdentifier = "sentry-dbid-dbeba116-6862-494c-aeff-cbe38d906b40")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1559, 3940], {
    21559: (e, t, i) => {
      i.r(t), i.d(t, {
        Highlights: () => x,
        HighlightsItem: () => b
      });
      var a = i(62229),
        s = i(55799),
        n = i(81788),
        h = i(92440),
        l = i(52066),
        g = i(43851),
        r = i(85045),
        o = i(2918);
      const c = (0, n.defineMessages)({
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
        d = JSON.parse('{"de-DE":{"cph_highlights_group_aria":"Markiertes Element {index} von {total}","cph_highlights_heading":"Markierte Elemente","cph_highlights_next":"Weiter","cph_highlights_previous":"Zurück"},"en-US":{"cph_highlights_group_aria":"Highlight {index} of {total}","cph_highlights_heading":"Highlights","cph_highlights_next":"Next","cph_highlights_previous":"Previous"},"es-ES":{"cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior"},"es-MX":{"cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior"},"fr-FR":{"cph_highlights_group_aria":"Résultat {index} sur {total}","cph_highlights_heading":"Résultats","cph_highlights_next":"Suivant","cph_highlights_previous":"Précédent"},"it-IT":{"cph_highlights_group_aria":"Elemento evidenziato {index} di {total}","cph_highlights_heading":"Elementi evidenziati","cph_highlights_next":"Avanti","cph_highlights_previous":"Precedente"},"ja-JP":{"cph_highlights_group_aria":"{total}のうち{index}をハイライト","cph_highlights_heading":"ハイライト","cph_highlights_next":"進む","cph_highlights_previous":"前"},"ko-KR":{"cph_highlights_group_aria":"하이라이트: {index}/{total}","cph_highlights_heading":"하이라이트","cph_highlights_next":"다음","cph_highlights_previous":"이전"},"pl-PL":{"cph_highlights_group_aria":"Wyróżnione {index} z {total}","cph_highlights_heading":"Wyróżnione","cph_highlights_next":"Dalej","cph_highlights_previous":"Poprzednie"},"pt-BR":{"cph_highlights_group_aria":"Seleção {index} de {total}","cph_highlights_heading":"Seleções","cph_highlights_next":"Próximo","cph_highlights_previous":"Anterior"},"ru-RU":{"cph_highlights_group_aria":"Элемент {index} из {total}","cph_highlights_heading":"Элементы","cph_highlights_next":"Далее","cph_highlights_previous":"Назад"},"zh-CN":{"cph_highlights_group_aria":"突出 {index} 共 {total}","cph_highlights_heading":"突出","cph_highlights_next":"下一个","cph_highlights_previous":"上一个"},"zh-TW":{"cph_highlights_group_aria":"標記 {index} / {total}","cph_highlights_heading":"標記","cph_highlights_next":"繼續","cph_highlights_previous":"上一個"}}'),
        _ = {
          pillBtn: "rockstargames-sites-gta-gen9ad600e022a4ad8dd7973635698f97aa8",
          selected: "rockstargames-sites-gta-gen9f9974b85283e6ba9338154cf8c6e8144",
          textWrapper: "rockstargames-sites-gta-gen9af453a8fc724892fb3e83b73897f1f76",
          content: "rockstargames-sites-gta-gen9cf3a7a99690a33c677472bfbfdc931e0",
          heading: "rockstargames-sites-gta-gen9c031dc797c3ec3e62d6157eeb36d8520",
          summaryText: "rockstargames-sites-gta-gen9b7dd947d476afb2b98df95ab0d2645da"
        };
      var u = i(25854);
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
        b = (0, n.withIntl)((e => {
          let {
            heading: t,
            title: i,
            summary: s,
            isActive: h,
            index: l,
            highlightsCount: g,
            ...o
          } = e;
          const d = (0, n.useIntl)(),
            p = (0, a.useRef)(null);
          return (0, u.jsxs)(r.motion.div, {
            "aria-hidden": !h,
            "aria-label": d.formatMessage(c.cph_highlights_group_aria, {
              index: l + 1,
              total: g
            }),
            onAnimationStart: () => {
              p.current && h && setTimeout((() => p.current?.scrollTo({
                top: 0
              })), 0)
            },
            role: "group",
            className: [_.content, _.textWrapper].join(" "),
            variants: f,
            animate: h ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...o,
            children: [t && (0, u.jsx)("h1", {
              children: t || d.formatMessage(c.cph_highlights_heading)
            }), i && (0, u.jsx)("h2", {
              className: _.heading,
              children: i
            }), (0, u.jsx)(r.motion.div, {
              ref: p,
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
          const d = (0, n.useIntl)(),
            {
              ref: _,
              inView: p
            } = (0, s.useInView)({
              threshold: .6
            }),
            {
              track: f
            } = (0, o.useGtmTrack)(),
            [x, v] = (0, a.useState)(!1),
            [k, y] = (0, a.useState)(!1),
            [M, w] = (0, a.useState)(0),
            [j, I] = (0, a.useState)([l.U1, l.WO, l.dK]),
            [S, E] = (0, a.useState)({}),
            C = (0, a.useRef)(null),
            N = (0, a.useRef)(null),
            T = (0, a.useRef)(null),
            R = (0, a.useRef)(null),
            P = (0, a.useRef)(null),
            z = (0, h.useGenerateCdnSource)();
          return (0, a.useEffect)((() => {
            const e = [l.U1, l.WO, l.dK];
            I(e)
          }), [!1]), (0, a.useEffect)((() => {
            p && !x && (f({
              event: "page_section_impression",
              element_placement: "highlights"
            }), v(!0))
          }), [p]), (0, a.useEffect)((() => (S.el && S.el.querySelectorAll(".swiper-pagination-bullet").forEach(((e, t) => {
            e.addEventListener("click", (() => {
              f({
                event: "carousel_thumbnail_click",
                element_placement: "highlights",
                position: t,
                card_name: "dot"
              })
            }))
          })), () => {
            if (S.el) {
              const e = S.el.querySelectorAll(".swiper-pagination-bullet");
              e && e.forEach((e => {
                e.removeEventListener("click", (() => {}))
              }))
            }
          })), [S]), t?.length ? (0, u.jsxs)("section", {
            className: m.mainContainer,
            ref: _,
            children: [(0, u.jsxs)("div", {
              ref: C,
              className: m.mainCarousel,
              onMouseEnter: () => {
                y(!0)
              },
              onMouseLeave: () => {
                y(!1)
              },
              children: [t.length > 1 && (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)(r.motion.button, {
                  ref: R,
                  type: "button",
                  "aria-label": d.formatMessage(c.cph_highlights_previous),
                  className: [m.controlBtn, m.prevBtn, k ? m.fadeIn : m.fadeOut].join(" "),
                  onClick: () => {
                    f({
                      event: "carousel_previous",
                      element_placement: "highlights"
                    }), S && S.slidePrev()
                  },
                  disabled: M < 1
                }), (0, u.jsx)(r.motion.button, {
                  ref: P,
                  type: "button",
                  "aria-label": d.formatMessage(c.cph_highlights_next),
                  className: [m.controlBtn, m.nextBtn, k ? m.fadeIn : m.fadeOut].join(" "),
                  onClick: () => {
                    f({
                      event: "carousel_next",
                      element_placement: "highlights"
                    }), S && S.slideNext()
                  },
                  disabled: M === t.length - 1
                })]
              }), (0, u.jsx)(g.RC, {
                onInit: e => E(e),
                onBeforeInit: e => {
                  N.current = e
                },
                modules: j,
                onSlideChange: e => {
                  const t = e.realIndex;
                  w(t)
                },
                navigation: {
                  prevEl: R.current,
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
                  swiper: T.current?.__swiper__ ? T.current : null
                },
                watchSlidesProgress: !0,
                slidesPerView: 1,
                initialSlide: M,
                loop: !1,
                onTouchEnd: () => {
                  f({
                    event: "carousel_swipe",
                    element_placement: "highlights"
                  })
                },
                children: t.map(((e, t) => (0, u.jsx)(g.qr, {
                  children: (0, u.jsx)("img", {
                    alt: e.title,
                    "aria-label": e.title,
                    "aria-current": t === M,
                    src: z(e.image),
                    role: "presentation"
                  })
                }, `${e.title}-${t}`)))
              })]
            }), (0, u.jsxs)("div", {
              className: m.contentContainer,
              children: [(0, u.jsx)("div", {
                className: m.carouselContainer,
                children: (0, u.jsx)(g.RC, {
                  onInit: e => {
                    T.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  modules: j,
                  slidesPerView: "auto",
                  initialSlide: M,
                  children: t.map(((e, i) => (0, u.jsx)(g.qr, {
                    children: (0, u.jsx)("button", {
                      type: "button",
                      onClick: () => (e => {
                        f({
                          event: "carousel_thumbnail_click",
                          element_placement: "highlights",
                          position: e,
                          card_name: t[e]?.title
                        }), w(e), N.current?.slideTo(e), T.current?.slideTo(e)
                      })(i),
                      className: `${i===M?m.active:""}`,
                      "aria-label": e.title,
                      "aria-current": i === M,
                      children: (0, u.jsx)("img", {
                        src: `${z(e.image)}?im=Resize,width=252`,
                        alt: e.title ?? "Slide"
                      })
                    })
                  }, e.key)))
                })
              }), (0, u.jsx)("div", {
                className: m.textContainer,
                children: t.map(((e, a) => (0, u.jsx)(b, {
                  heading: i,
                  title: e.title,
                  summary: e.summary,
                  isActive: M === a,
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