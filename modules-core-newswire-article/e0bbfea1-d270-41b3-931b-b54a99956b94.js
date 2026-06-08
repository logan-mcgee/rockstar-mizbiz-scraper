try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    i = (new e.Error).stack;
  i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "e0bbfea1-d270-41b3-931b-b54a99956b94", e._sentryDebugIdIdentifier = "sentry-dbid-e0bbfea1-d270-41b3-931b-b54a99956b94")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [1411, 3792], {
    94931(e, i, t) {
      var a = t(93082),
        s = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        n = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        h = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function o(e, i, t) {
        var a, r = {},
          o = null,
          c = null;
        for (a in void 0 !== t && (o = "" + t), void 0 !== i.key && (o = "" + i.key), void 0 !== i.ref && (c = i.ref), i) l.call(i, a) && !h.hasOwnProperty(a) && (r[a] = i[a]);
        if (e && e.defaultProps)
          for (a in i = e.defaultProps) void 0 === r[a] && (r[a] = i[a]);
        return {
          $$typeof: s,
          type: e,
          key: o,
          ref: c,
          props: r,
          _owner: n.current
        }
      }
      i.Fragment = r, i.jsx = o, i.jsxs = o
    },
    39793(e, i, t) {
      e.exports = t(94931)
    },
    83792(e, i, t) {
      t.r(i), t.d(i, {
        Highlights: () => w,
        HighlightsItem: () => m
      });
      var a = t(39793),
        s = t(93082),
        r = t(42285),
        l = t(42909),
        n = t(17301),
        h = t(50662),
        o = t(14653),
        c = t(24815),
        g = t(82199);
      const d = (0, l.defineMessages)({
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
        u = {
          content: "rockstargames-modules-core-newswire-articlecf3a7a99690a33c677472bfbfdc931e0",
          heading: "rockstargames-modules-core-newswire-articlec031dc797c3ec3e62d6157eeb36d8520",
          pillBtn: "rockstargames-modules-core-newswire-articlead600e022a4ad8dd7973635698f97aa8",
          selected: "rockstargames-modules-core-newswire-articlef9974b85283e6ba9338154cf8c6e8144",
          summaryText: "rockstargames-modules-core-newswire-articleb7dd947d476afb2b98df95ab0d2645da",
          textWrapper: "rockstargames-modules-core-newswire-articleaf453a8fc724892fb3e83b73897f1f76"
        },
        p = {
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
        m = (0, l.withIntl)(({
          heading: e,
          title: i,
          summary: t,
          isActive: r,
          index: n,
          highlightsCount: h,
          ...o
        }) => {
          const g = (0, l.useIntl)(),
            _ = (0, s.useRef)(null);
          return (0, a.jsxs)(c.P.div, {
            "aria-hidden": !r,
            "aria-label": g.formatMessage(d.cph_highlights_group_aria, {
              index: n + 1,
              total: h
            }),
            onAnimationStart: () => {
              _.current && r && setTimeout(() => _.current?.scrollTo({
                top: 0
              }), 0)
            },
            role: "group",
            className: [u.content, u.textWrapper].join(" "),
            variants: f,
            animate: r ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...o,
            children: [e && (0, a.jsx)("h1", {
              children: e || g.formatMessage(d.cph_highlights_heading)
            }), i && (0, a.jsx)("h2", {
              className: u.heading,
              children: i
            }), (0, a.jsx)(c.P.div, {
              ref: _,
              className: u.summaryText,
              dangerouslySetInnerHTML: {
                __html: (p = t, p ? p.split(/\r?\n/).filter(e => e.trim()).map(e => `<p>${e}</p>`).join("") : "")
              }
            })]
          });
          var p
        }, _),
        b = {
          active: "rockstargames-modules-core-newswire-articleffe479fc6d12e441bdd869bfadbad9d8",
          carouselContainer: "rockstargames-modules-core-newswire-articlecb2067c71495e79af319174e21f5b456",
          circleIndicators: "rockstargames-modules-core-newswire-articlec6b6ee15075db13060d681d7ef8ea8e1",
          contentContainer: "rockstargames-modules-core-newswire-articlefcc28a7adb515c877d778048222dff3f",
          controlBtn: "rockstargames-modules-core-newswire-articlebd3c798f7bce0b1bf8eef02c2ffc38a8",
          fadeIn: "rockstargames-modules-core-newswire-articleafbc1e3bc0029085cc98eed1eedeb549",
          fadeOut: "rockstargames-modules-core-newswire-articlee824186cc798a59373d17cb2439bcb2d",
          heading: "rockstargames-modules-core-newswire-articlea170c9325e7b3cfda1de5e5b924eb870",
          indicator: "rockstargames-modules-core-newswire-articleff6f8c30f61a3959fb5e85125bcf14ae",
          mainCarousel: "rockstargames-modules-core-newswire-articlebba85d39f04bc10f647280a811dba117",
          mainContainer: "rockstargames-modules-core-newswire-articleb8cfa1eb3403128e589e14c5f7fad547",
          nextBtn: "rockstargames-modules-core-newswire-articlefde90e7bc408045b909293e916c993ae",
          pillBtn: "rockstargames-modules-core-newswire-articlef7e754149270d537b3a078a3e18e4b37",
          prevBtn: "rockstargames-modules-core-newswire-articleeeaace28aebebb9f2a68c9ab887d5eda",
          selected: "rockstargames-modules-core-newswire-articleb5436dde7bfb2a5e32493563610709a5",
          textContainer: "rockstargames-modules-core-newswire-articleaaf39b8bf696ac333329547a193bd279"
        },
        w = (0, l.withIntl)(({
          highlights: e = [],
          subtitle: i = ""
        }) => {
          const t = (0, l.useIntl)(),
            {
              ref: _,
              inView: u
            } = (0, r.useInView)({
              threshold: .6
            }),
            {
              track: p
            } = (0, g.useGtmTrack)(),
            [f, w] = (0, s.useState)(!1),
            [x, v] = (0, s.useState)(!1),
            [k, y] = (0, s.useState)(0),
            [S, E] = (0, s.useState)([h.U1, h.WO, h.dK]),
            [j, I] = (0, s.useState)({}),
            C = (0, s.useRef)(null),
            T = (0, s.useRef)(null),
            M = (0, s.useRef)(null),
            R = (0, s.useRef)(null),
            N = (0, s.useRef)(null),
            P = (0, n.useGenerateCdnSource)();
          return (0, s.useEffect)(() => {
            const e = [h.U1, h.WO, h.dK];
            E(e)
          }, [!1]), (0, s.useEffect)(() => {
            u && !f && (p({
              event: "page_section_impression",
              element_placement: "highlights"
            }), w(!0))
          }, [u]), (0, s.useEffect)(() => (j.el && j.el.querySelectorAll(".swiper-pagination-bullet").forEach((e, i) => {
            e.addEventListener("click", () => {
              p({
                event: "carousel_thumbnail_click",
                element_placement: "highlights",
                position: i,
                card_name: "dot"
              })
            })
          }), () => {
            if (j.el) {
              const e = j.el.querySelectorAll(".swiper-pagination-bullet");
              e && e.forEach(e => {
                e.removeEventListener("click", () => {})
              })
            }
          }), [j]), e?.length ? (0, a.jsxs)("section", {
            className: b.mainContainer,
            ref: _,
            children: [(0, a.jsxs)("div", {
              ref: C,
              className: b.mainCarousel,
              onMouseEnter: () => {
                v(!0)
              },
              onMouseLeave: () => {
                v(!1)
              },
              children: [e.length > 1 && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(c.P.button, {
                  ref: R,
                  type: "button",
                  "aria-label": t.formatMessage(d.cph_highlights_previous),
                  className: [b.controlBtn, b.prevBtn, x ? b.fadeIn : b.fadeOut].join(" "),
                  onClick: () => {
                    p({
                      event: "carousel_previous",
                      element_placement: "highlights"
                    }), j && j.slidePrev()
                  },
                  disabled: k < 1
                }), (0, a.jsx)(c.P.button, {
                  ref: N,
                  type: "button",
                  "aria-label": t.formatMessage(d.cph_highlights_next),
                  className: [b.controlBtn, b.nextBtn, x ? b.fadeIn : b.fadeOut].join(" "),
                  onClick: () => {
                    p({
                      event: "carousel_next",
                      element_placement: "highlights"
                    }), j && j.slideNext()
                  },
                  disabled: k === e.length - 1
                })]
              }), (0, a.jsx)(o.RC, {
                onInit: e => I(e),
                onBeforeInit: e => {
                  T.current = e
                },
                modules: S,
                onSlideChange: e => {
                  const i = e.realIndex;
                  y(i)
                },
                navigation: {
                  prevEl: R.current,
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
                  swiper: M.current?.__swiper__ ? M.current : null
                },
                watchSlidesProgress: !0,
                slidesPerView: 1,
                initialSlide: k,
                loop: !1,
                onTouchEnd: () => {
                  p({
                    event: "carousel_swipe",
                    element_placement: "highlights"
                  })
                },
                children: e.map((e, i) => (0, a.jsx)(o.qr, {
                  children: (0, a.jsx)("img", {
                    alt: e.altText ?? e.title,
                    "aria-label": e.altText ?? e.title,
                    "aria-current": i === k,
                    src: P(e.image),
                    role: "presentation"
                  })
                }, `${e.title}-${i}`))
              })]
            }), (0, a.jsxs)("div", {
              className: b.contentContainer,
              children: [(0, a.jsx)("div", {
                className: b.carouselContainer,
                children: (0, a.jsx)(o.RC, {
                  onInit: e => {
                    M.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  modules: S,
                  slidesPerView: "auto",
                  initialSlide: k,
                  children: e.map((i, t) => (0, a.jsx)(o.qr, {
                    children: (0, a.jsx)("button", {
                      type: "button",
                      onClick: () => (i => {
                        p({
                          event: "carousel_thumbnail_click",
                          element_placement: "highlights",
                          position: i,
                          card_name: e[i]?.title
                        }), y(i), T.current?.slideTo(i), M.current?.slideTo(i)
                      })(t),
                      className: `${t===k?b.active:""}`,
                      "aria-label": i.altText ?? i.title,
                      "aria-current": t === k,
                      children: (0, a.jsx)("img", {
                        src: `${P(i.image)}?im=Resize,width=252`,
                        alt: i.altText ?? i.title ?? "Slide"
                      })
                    })
                  }, i.key))
                })
              }), (0, a.jsx)("div", {
                className: b.textContainer,
                children: e.map((t, s) => (0, a.jsx)(m, {
                  heading: i || t.heading,
                  title: t.title,
                  summary: t.summary,
                  isActive: k === s,
                  index: s,
                  highlightsCount: e.length
                }, t.key))
              })]
            })]
          }) : null
        }, _)
    }
  }
]);