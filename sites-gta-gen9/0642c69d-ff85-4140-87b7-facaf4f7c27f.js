try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0642c69d-ff85-4140-87b7-facaf4f7c27f", e._sentryDebugIdIdentifier = "sentry-dbid-0642c69d-ff85-4140-87b7-facaf4f7c27f")
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
  [5955, 8393], {
    58393(e, t, i) {
      i.r(t), i.d(t, {
        Highlights: () => k,
        HighlightsItem: () => v
      });
      var a = i(39793),
        s = i(93082),
        n = i(42285),
        l = i(42909),
        r = i(17301),
        h = i(75027),
        o = i(84220),
        g = i(31147),
        c = (i(281), i(14653)),
        d = i(88447),
        p = i(82199);
      const u = (0, l.defineMessages)({
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
        f = {
          content: "rockstargames-sites-gta-gen9cf3a7a99690a33c677472bfbfdc931e0",
          heading: "rockstargames-sites-gta-gen9c031dc797c3ec3e62d6157eeb36d8520",
          pillBtn: "rockstargames-sites-gta-gen9ad600e022a4ad8dd7973635698f97aa8",
          selected: "rockstargames-sites-gta-gen9f9974b85283e6ba9338154cf8c6e8144",
          summaryText: "rockstargames-sites-gta-gen9b7dd947d476afb2b98df95ab0d2645da",
          textWrapper: "rockstargames-sites-gta-gen9af453a8fc724892fb3e83b73897f1f76"
        },
        m = {
          ease: "easeInOut",
          duration: .3
        },
        b = {
          fadeIn: {
            opacity: 1,
            zIndex: 5,
            transition: m,
            display: "flex"
          },
          fadeOut: {
            transition: m,
            zIndex: 4,
            opacity: 0,
            transitionEnd: {
              zIndex: "unset",
              display: "none"
            }
          }
        },
        v = (0, l.withIntl)(({
          heading: e,
          title: t,
          summary: i,
          isActive: n,
          index: r,
          highlightsCount: h,
          ...o
        }) => {
          const g = (0, l.useIntl)(),
            c = (0, s.useRef)(null);
          return (0, a.jsxs)(d.motion.div, {
            "aria-hidden": !n,
            "aria-label": g.formatMessage(u.cph_highlights_group_aria, {
              index: r + 1,
              total: h
            }),
            onAnimationStart: () => {
              c.current && n && setTimeout(() => c.current?.scrollTo({
                top: 0
              }), 0)
            },
            role: "group",
            className: [f.content, f.textWrapper].join(" "),
            variants: b,
            animate: n ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...o,
            children: [e && (0, a.jsx)("h1", {
              children: e || g.formatMessage(u.cph_highlights_heading)
            }), t && (0, a.jsx)("h2", {
              className: f.heading,
              children: t
            }), (0, a.jsx)(d.motion.div, {
              ref: c,
              className: f.summaryText,
              dangerouslySetInnerHTML: {
                __html: (p = i, p ? p.split(/\r?\n/).filter(e => e.trim()).map(e => `<p>${e}</p>`).join("") : "")
              }
            })]
          });
          var p
        }, _),
        x = {
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
        k = (0, l.withIntl)(({
          highlights: e = [],
          subtitle: t = ""
        }) => {
          const i = (0, l.useIntl)(),
            {
              ref: _,
              inView: f
            } = (0, n.useInView)({
              threshold: .6
            }),
            {
              track: m
            } = (0, p.useGtmTrack)(),
            [b, k] = (0, s.useState)(!1),
            [E, y] = (0, s.useState)(!1),
            [w, C] = (0, s.useState)(0),
            [S, j] = (0, s.useState)([h.A, o.A, g.A]),
            [I, T] = (0, s.useState)({}),
            M = (0, s.useRef)(null),
            N = (0, s.useRef)(null),
            A = (0, s.useRef)(null),
            L = (0, s.useRef)(null),
            P = (0, s.useRef)(null),
            R = (0, r.useGenerateCdnSource)();
          return (0, s.useEffect)(() => {
            const e = [h.A, o.A, g.A];
            j(e)
          }, [!1]), (0, s.useEffect)(() => {
            f && !b && (m({
              event: "page_section_impression",
              element_placement: "highlights"
            }), k(!0))
          }, [f]), (0, s.useEffect)(() => (I.el && I.el.querySelectorAll(".swiper-pagination-bullet").forEach((e, t) => {
            e.addEventListener("click", () => {
              m({
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
            className: x.mainContainer,
            ref: _,
            children: [(0, a.jsxs)("div", {
              ref: M,
              className: x.mainCarousel,
              onMouseEnter: () => {
                y(!0)
              },
              onMouseLeave: () => {
                y(!1)
              },
              children: [e.length > 1 && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(d.motion.button, {
                  ref: L,
                  type: "button",
                  "aria-label": i.formatMessage(u.cph_highlights_previous),
                  className: [x.controlBtn, x.prevBtn, E ? x.fadeIn : x.fadeOut].join(" "),
                  onClick: () => {
                    m({
                      event: "carousel_previous",
                      element_placement: "highlights"
                    }), I && I.slidePrev()
                  },
                  disabled: w < 1
                }), (0, a.jsx)(d.motion.button, {
                  ref: P,
                  type: "button",
                  "aria-label": i.formatMessage(u.cph_highlights_next),
                  className: [x.controlBtn, x.nextBtn, E ? x.fadeIn : x.fadeOut].join(" "),
                  onClick: () => {
                    m({
                      event: "carousel_next",
                      element_placement: "highlights"
                    }), I && I.slideNext()
                  },
                  disabled: w === e.length - 1
                })]
              }), (0, a.jsx)(c.RC, {
                onInit: e => T(e),
                onBeforeInit: e => {
                  N.current = e
                },
                modules: S,
                onSlideChange: e => {
                  const t = e.realIndex;
                  C(t)
                },
                navigation: {
                  prevEl: L.current,
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
                  swiper: A.current?.__swiper__ ? A.current : null
                },
                watchSlidesProgress: !0,
                slidesPerView: 1,
                initialSlide: w,
                loop: !1,
                onTouchEnd: () => {
                  m({
                    event: "carousel_swipe",
                    element_placement: "highlights"
                  })
                },
                children: e.map((e, t) => (0, a.jsx)(c.qr, {
                  children: (0, a.jsx)("img", {
                    alt: e.altText ?? e.title,
                    "aria-label": e.altText ?? e.title,
                    "aria-current": t === w,
                    src: R(e.image),
                    role: "presentation"
                  })
                }, `${e.title}-${t}`))
              })]
            }), (0, a.jsxs)("div", {
              className: x.contentContainer,
              children: [(0, a.jsx)("div", {
                className: x.carouselContainer,
                children: (0, a.jsx)(c.RC, {
                  onInit: e => {
                    A.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  modules: S,
                  slidesPerView: "auto",
                  initialSlide: w,
                  children: e.map((t, i) => (0, a.jsx)(c.qr, {
                    children: (0, a.jsx)("button", {
                      type: "button",
                      onClick: () => (t => {
                        m({
                          event: "carousel_thumbnail_click",
                          element_placement: "highlights",
                          position: t,
                          card_name: e[t]?.title
                        }), C(t), N.current?.slideTo(t), A.current?.slideTo(t)
                      })(i),
                      className: `${i===w?x.active:""}`,
                      "aria-label": t.altText ?? t.title,
                      "aria-current": i === w,
                      children: (0, a.jsx)("img", {
                        src: `${R(t.image)}?im=Resize,width=252`,
                        alt: t.altText ?? t.title ?? "Slide"
                      })
                    })
                  }, t.key))
                })
              }), (0, a.jsx)("div", {
                className: x.textContainer,
                children: e.map((i, s) => (0, a.jsx)(v, {
                  heading: t || i.heading,
                  title: i.title,
                  summary: i.summary,
                  isActive: w === s,
                  index: s,
                  highlightsCount: e.length
                }, i.key))
              })]
            })]
          }) : null
        }, _)
    },
    281(e, t, i) {
      i.d(t, {
        A: () => n
      });
      var a = i(61122),
        s = i(20212);

      function n(e) {
        let {
          swiper: t,
          extendParams: i,
          on: n,
          emit: l
        } = e;

        function r(e) {
          let i;
          return e && "string" == typeof e && t.isElement && (i = t.el.querySelector(e) || t.hostEl.querySelector(e), i) ? i : (e && ("string" == typeof e && (i = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && i && i.length > 1 && 1 === t.el.querySelectorAll(e).length ? i = t.el.querySelector(e) : i && 1 === i.length && (i = i[0])), e && !i ? e : i)
        }

        function h(e, i) {
          const a = t.params.navigation;
          (e = (0, s.m)(e)).forEach(e => {
            e && (e.classList[i ? "add" : "remove"](...a.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = i), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass))
          })
        }

        function o() {
          const {
            nextEl: e,
            prevEl: i
          } = t.navigation;
          if (t.params.loop) return h(i, !1), void h(e, !1);
          h(i, t.isBeginning && !t.params.rewind), h(e, t.isEnd && !t.params.rewind)
        }

        function g(e) {
          e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), l("navigationPrev"))
        }

        function c(e) {
          e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), l("navigationNext"))
        }

        function d() {
          const e = t.params.navigation;
          if (t.params.navigation = (0, a.c)(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let i = r(e.nextEl),
            n = r(e.prevEl);
          Object.assign(t.navigation, {
            nextEl: i,
            prevEl: n
          }), i = (0, s.m)(i), n = (0, s.m)(n);
          const l = (i, a) => {
            i && i.addEventListener("click", "next" === a ? c : g), !t.enabled && i && i.classList.add(...e.lockClass.split(" "))
          };
          i.forEach(e => l(e, "next")), n.forEach(e => l(e, "prev"))
        }

        function p() {
          let {
            nextEl: e,
            prevEl: i
          } = t.navigation;
          e = (0, s.m)(e), i = (0, s.m)(i);
          const a = (e, i) => {
            e.removeEventListener("click", "next" === i ? c : g), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
          };
          e.forEach(e => a(e, "next")), i.forEach(e => a(e, "prev"))
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), t.navigation = {
          nextEl: null,
          prevEl: null
        }, n("init", () => {
          !1 === t.params.navigation.enabled ? u() : (d(), o())
        }), n("toEdge fromEdge lock unlock", () => {
          o()
        }), n("destroy", () => {
          p()
        }), n("enable disable", () => {
          let {
            nextEl: e,
            prevEl: i
          } = t.navigation;
          e = (0, s.m)(e), i = (0, s.m)(i), t.enabled ? o() : [...e, ...i].filter(e => !!e).forEach(e => e.classList.add(t.params.navigation.lockClass))
        }), n("click", (e, i) => {
          let {
            nextEl: a,
            prevEl: n
          } = t.navigation;
          a = (0, s.m)(a), n = (0, s.m)(n);
          const r = i.target;
          let h = n.includes(r) || a.includes(r);
          if (t.isElement && !h) {
            const e = i.path || i.composedPath && i.composedPath();
            e && (h = e.find(e => a.includes(e) || n.includes(e)))
          }
          if (t.params.navigation.hideOnClick && !h) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === r || t.pagination.el.contains(r))) return;
            let e;
            a.length ? e = a[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)), l(!0 === e ? "navigationShow" : "navigationHide"), [...a, ...n].filter(e => !!e).forEach(e => e.classList.toggle(t.params.navigation.hiddenClass))
          }
        });
        const u = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), p()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), d(), o()
          },
          disable: u,
          update: o,
          init: d,
          destroy: p
        })
      }
    },
    20219(e, t, i) {
      function a(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
      }
      i.d(t, {
        c: () => a
      })
    }
  }
]);