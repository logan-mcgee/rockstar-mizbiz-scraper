! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "abc0cda6-65bc-4139-900d-5761eb0b9a25", e._sentryDebugIdIdentifier = "sentry-dbid-abc0cda6-65bc-4139-900d-5761eb0b9a25")
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
  [7478, 5240, 2860, 2240], {
    99576: (e, t, i) => {
      var a = i(51664),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        h = Object.prototype.hasOwnProperty,
        r = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        g = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, i) {
        var a, n = {},
          l = null,
          c = null;
        for (a in void 0 !== i && (l = "" + i), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t) h.call(t, a) && !g.hasOwnProperty(a) && (n[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === n[a] && (n[a] = t[a]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: c,
          props: n,
          _owner: r.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    },
    95240: (e, t, i) => {
      e.exports = i(99576)
    },
    92240: (e, t, i) => {
      i.r(t), i.d(t, {
        Highlights: () => x,
        HighlightsItem: () => b
      });
      var a = i(51664),
        s = i(56572),
        n = i(41272),
        h = i(1740),
        r = i(31403),
        g = i(48111),
        l = i(78480),
        c = i(42836);
      const o = (0, n.defineMessages)({
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
          pillBtn: "rockstargames-sites-gta-gen9fa9d61a2cef6c7cbc91784b01b64bb3a",
          selected: "rockstargames-sites-gta-gen9cfad8129d0dc275840e9691a47020682",
          textWrapper: "rockstargames-sites-gta-gen9a0226766765ba11acf755aaa9e58956c",
          scrollEnd: "rockstargames-sites-gta-gen9bb19405fda6da2faaf6ab431bf170253",
          content: "rockstargames-sites-gta-gen9b443c6c58f4215a40ba481d0191decaa",
          heading: "rockstargames-sites-gta-gen9ad4d0033db9ff6fc9a0634ee8a6f6949",
          summaryText: "rockstargames-sites-gta-gen9ed7b542b2eadfcae3e18dacf2e2a79d2"
        };
      var p = i(95240);
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
        b = (0, n.withIntl)((e => {
          let {
            heading: t,
            title: i,
            summary: s,
            isActive: h,
            index: r,
            highlightsCount: g,
            ...c
          } = e;
          const d = (0, n.useIntl)(),
            u = (0, a.useRef)(null),
            [b, m] = (0, a.useState)(null),
            {
              scrollYProgress: x
            } = (0, l.useScroll)({
              container: u
            });
          return (0, a.useEffect)((() => {
            null === b && m(x.current < .9), x?.on && x.on("change", (e => {
              m(e < .9)
            }))
          }), [x]), (0, p.jsxs)(l.motion.div, {
            id: _.content,
            "aria-hidden": !h,
            "aria-label": d.formatMessage(o.cph_highlights_group_aria, {
              index: r + 1,
              total: g
            }),
            onAnimationStart: () => {
              u.current && h && setTimeout((() => u.current?.scrollTo({
                top: 0
              })), 0)
            },
            role: "group",
            className: [_.textWrapper, b ? "" : _.scrollEnd].join(" "),
            variants: f,
            animate: h ? "fadeIn" : "fadeOut",
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
                __html: (v = s, v ? v.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
              }
            })]
          });
          var v
        }), d),
        m = {
          pillBtn: "rockstargames-sites-gta-gen9fbf2653dcb83a5319042540c5a7bfded",
          selected: "rockstargames-sites-gta-gen9fcab921449e395e9d9b91430f2cf93da",
          mainContainer: "rockstargames-sites-gta-gen9b074cd4a4ec387dfeb02a44613beade3",
          heading: "rockstargames-sites-gta-gen9bf153e81c4496d191eb3cbe512ef7e8b",
          mainCarousel: "rockstargames-sites-gta-gen9b2c096da5ec6645b62222e0e1007edf8",
          controlBtn: "rockstargames-sites-gta-gen9a0af431c5d94b4edb73011259125b7ce",
          fadeIn: "rockstargames-sites-gta-gen9c6f866fe73c17491e427c4d57cb2072c",
          fadeOut: "rockstargames-sites-gta-gen9d7c9e2a818180c042f4f59dd34751356",
          circleIndicators: "rockstargames-sites-gta-gen9d899b3bad0a36ee8067b6c06039d68b0",
          indicator: "rockstargames-sites-gta-gen9b12395255a853afbe2f30d6cbfc6d899",
          nextBtn: "rockstargames-sites-gta-gen9f26a03d6aa116dede0a18d59b83676b2",
          prevBtn: "rockstargames-sites-gta-gen9abc615a921c991c567ba1c20c88f6337",
          active: "rockstargames-sites-gta-gen9fc507b499a7d3cd97f67ab5b9495a182",
          contentContainer: "rockstargames-sites-gta-gen9b49266a85e70c01645e072c0c104ee55",
          textContainer: "rockstargames-sites-gta-gen9cca1336227938a222f13116a6fd609a0",
          carouselContainer: "rockstargames-sites-gta-gen9a97165e413ad93c417b9ddd803ba13b1"
        },
        x = e => {
          let {
            highlights: t = [],
            subtitle: i = ""
          } = e;
          const d = (0, n.useIntl)(),
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
            [S, I] = (0, a.useState)(null),
            [E, C] = (0, a.useState)([r.O4, r.Hj, r.eM]),
            [M, N] = (0, a.useState)({}),
            O = (0, a.useRef)(null),
            P = (0, a.useRef)(null),
            R = (0, a.useRef)(null),
            H = (0, a.useRef)(null),
            B = (0, a.useRef)(null),
            T = (0, h.useGenerateCdnSource)();
          return (0, a.useEffect)((() => {
            const e = [r.O4, r.Hj, r.eM];
            C(e)
          }), [!1]), (0, a.useEffect)((() => {
            u && !x && (f({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "highlights",
              element_placement: "Highlights"
            }), v(!0))
          }), [u]), t?.length ? (0, p.jsxs)("section", {
            className: m.mainContainer,
            ref: _,
            children: [(0, p.jsxs)("div", {
              ref: O,
              className: m.mainCarousel,
              onMouseEnter: () => {
                y(!0)
              },
              onMouseLeave: () => {
                y(!1)
              },
              children: [t.length > 1 && (0, p.jsxs)(p.Fragment, {
                children: [(0, p.jsx)(l.motion.button, {
                  ref: H,
                  type: "button",
                  "aria-label": d.formatMessage(o.cph_highlights_previous),
                  className: [m.controlBtn, m.prevBtn, k ? m.fadeIn : m.fadeOut].join(" "),
                  onClick: () => {
                    f({
                      event: "carousel_previous",
                      element_placement: "Highlights"
                    }), M && M.slidePrev()
                  },
                  disabled: w < 1
                }), (0, p.jsx)(l.motion.button, {
                  ref: B,
                  type: "button",
                  "aria-label": d.formatMessage(o.cph_highlights_next),
                  className: [m.controlBtn, m.nextBtn, k ? m.fadeIn : m.fadeOut].join(" "),
                  onClick: () => {
                    f({
                      event: "carousel_next",
                      element_placement: "Highlights"
                    }), M && M.slideNext()
                  },
                  disabled: w === t.length - 1
                })]
              }), (0, p.jsx)(g.wx, {
                onInit: e => N(e),
                onBeforeInit: e => {
                  P.current = e
                },
                modules: E,
                onSlideChange: e => {
                  const t = e.realIndex;
                  j(t)
                },
                navigation: {
                  prevEl: H.current,
                  nextEl: B.current
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
                children: t.map(((e, t) => (0, p.jsx)(g.Ky, {
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
              className: m.contentContainer,
              children: [(0, p.jsx)("div", {
                className: m.carouselContainer,
                children: (0, p.jsx)(g.wx, {
                  onBeforeInit: e => {
                    R.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  onSwiper: I,
                  modules: E,
                  slidesPerView: "auto",
                  initialSlide: w,
                  children: t.map(((e, i) => (0, p.jsx)(g.Ky, {
                    children: (0, p.jsx)("button", {
                      type: "button",
                      onClick: () => (e => {
                        f({
                          event: "carousel_thumbnail_click",
                          element_placement: "Highlights",
                          position: e,
                          card_name: t[e]?.title
                        }), j(e), P.current?.slideTo(e), R.current?.slideTo(e)
                      })(i),
                      className: `${i===w?m.active:""}`,
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