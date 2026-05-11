try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f3b2f6ab-e0ff-40a4-81c4-6cf575a0f807", e._sentryDebugIdIdentifier = "sentry-dbid-f3b2f6ab-e0ff-40a4-81c4-6cf575a0f807")
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
  [2368, 9064], {
    42649(e) {
      var t, i, r = e.exports = {};

      function a() {
        throw new Error("setTimeout has not been defined")
      }

      function n() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === a || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (i) {
          try {
            return t.call(null, e, 0)
          } catch (i) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
          t = a
        }
        try {
          i = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (e) {
          i = n
        }
      }();
      var l, h = [],
        o = !1,
        c = -1;

      function d() {
        o && l && (o = !1, l.length ? h = l.concat(h) : c = -1, h.length && g())
      }

      function g() {
        if (!o) {
          var e = s(d);
          o = !0;
          for (var t = h.length; t;) {
            for (l = h, h = []; ++c < t;) l && l[c].run();
            c = -1, t = h.length
          }
          l = null, o = !1,
            function(e) {
              if (i === clearTimeout) return clearTimeout(e);
              if ((i === n || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
              try {
                return i(e)
              } catch (t) {
                try {
                  return i.call(null, e)
                } catch (t) {
                  return i.call(this, e)
                }
              }
            }(e)
        }
      }

      function u(e, t) {
        this.fun = e, this.array = t
      }

      function _() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        h.push(new u(e, t)), 1 !== h.length || o || s(g)
      }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = _, r.addListener = _, r.once = _, r.off = _, r.removeListener = _, r.removeAllListeners = _, r.emit = _, r.prependListener = _, r.prependOnceListener = _, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    69245(e, t, i) {
      "use strict";
      var r = i(71127),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        h = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function o(e, t, i) {
        var r, n = {},
          o = null,
          c = null;
        for (r in void 0 !== i && (o = "" + i), void 0 !== t.key && (o = "" + t.key), void 0 !== t.ref && (c = t.ref), t) s.call(t, r) && !h.hasOwnProperty(r) && (n[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === n[r] && (n[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: o,
          ref: c,
          props: n,
          _owner: l.current
        }
      }
      t.Fragment = n, t.jsx = o, t.jsxs = o
    },
    42295(e, t, i) {
      "use strict";
      e.exports = i(69245)
    },
    32368(e, t, i) {
      "use strict";
      i.r(t), i.d(t, {
        Highlights: () => w,
        HighlightsItem: () => m
      });
      var r = i(42295),
        a = i(71127),
        n = i(21352),
        s = i(42909),
        l = i(17301),
        h = i(85827),
        o = i(24162),
        c = i(55087),
        d = i(82199);
      const g = (0, s.defineMessages)({
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
        u = JSON.parse('{"de-DE":{"cph_highlights_group_aria":"Markiertes Element {index} von {total}","cph_highlights_heading":"Markierte Elemente","cph_highlights_next":"Weiter","cph_highlights_previous":"Zurück"},"en-US":{"cph_highlights_group_aria":"Highlight {index} of {total}","cph_highlights_heading":"Highlights","cph_highlights_next":"Next","cph_highlights_previous":"Previous"},"es-ES":{"cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior"},"es-MX":{"cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior"},"fr-FR":{"cph_highlights_group_aria":"Résultat {index} sur {total}","cph_highlights_heading":"Résultats","cph_highlights_next":"Suivant","cph_highlights_previous":"Précédent"},"it-IT":{"cph_highlights_group_aria":"Elemento evidenziato {index} di {total}","cph_highlights_heading":"Elementi evidenziati","cph_highlights_next":"Avanti","cph_highlights_previous":"Precedente"},"ja-JP":{"cph_highlights_group_aria":"{total}のうち{index}をハイライト","cph_highlights_heading":"ハイライト","cph_highlights_next":"進む","cph_highlights_previous":"前"},"ko-KR":{"cph_highlights_group_aria":"하이라이트: {index}/{total}","cph_highlights_heading":"하이라이트","cph_highlights_next":"다음","cph_highlights_previous":"이전"},"pl-PL":{"cph_highlights_group_aria":"Wyróżnione {index} z {total}","cph_highlights_heading":"Wyróżnione","cph_highlights_next":"Dalej","cph_highlights_previous":"Poprzednie"},"pt-BR":{"cph_highlights_group_aria":"Seleção {index} de {total}","cph_highlights_heading":"Seleções","cph_highlights_next":"Próximo","cph_highlights_previous":"Anterior"},"ru-RU":{"cph_highlights_group_aria":"Элемент {index} из {total}","cph_highlights_heading":"Элементы","cph_highlights_next":"Далее","cph_highlights_previous":"Назад"},"zh-CN":{"cph_highlights_group_aria":"突出 {index} 共 {total}","cph_highlights_heading":"突出","cph_highlights_next":"下一个","cph_highlights_previous":"上一个"},"zh-TW":{"cph_highlights_group_aria":"標記 {index} / {total}","cph_highlights_heading":"標記","cph_highlights_next":"繼續","cph_highlights_previous":"上一個"}}'),
        _ = {
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
        m = (0, s.withIntl)(({
          heading: e,
          title: t,
          summary: i,
          isActive: n,
          index: l,
          highlightsCount: h,
          ...o
        }) => {
          const d = (0, s.useIntl)(),
            u = (0, a.useRef)(null);
          return (0, r.jsxs)(c.P.div, {
            "aria-hidden": !n,
            "aria-label": d.formatMessage(g.cph_highlights_group_aria, {
              index: l + 1,
              total: h
            }),
            onAnimationStart: () => {
              u.current && n && setTimeout(() => u.current?.scrollTo({
                top: 0
              }), 0)
            },
            role: "group",
            className: [_.content, _.textWrapper].join(" "),
            variants: f,
            animate: n ? "fadeIn" : "fadeOut",
            "data-testid": "textWrapper",
            ...o,
            children: [e && (0, r.jsx)("h1", {
              children: e || d.formatMessage(g.cph_highlights_heading)
            }), t && (0, r.jsx)("h2", {
              className: _.heading,
              children: t
            }), (0, r.jsx)(c.P.div, {
              ref: u,
              className: _.summaryText,
              dangerouslySetInnerHTML: {
                __html: (p = i, p ? p.split(/\r?\n/).filter(e => e.trim()).map(e => `<p>${e}</p>`).join("") : "")
              }
            })]
          });
          var p
        }, u),
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
        w = ({
          highlights: e = [],
          subtitle: t = ""
        }) => {
          const i = (0, s.useIntl)(),
            {
              ref: u,
              inView: _
            } = (0, n.useInView)({
              threshold: .6
            }),
            {
              track: p
            } = (0, d.useGtmTrack)(),
            [f, w] = (0, a.useState)(!1),
            [x, v] = (0, a.useState)(!1),
            [y, k] = (0, a.useState)(0),
            [T, E] = (0, a.useState)([h.U1, h.WO, h.dK]),
            [S, j] = (0, a.useState)({}),
            I = (0, a.useRef)(null),
            C = (0, a.useRef)(null),
            M = (0, a.useRef)(null),
            R = (0, a.useRef)(null),
            N = (0, a.useRef)(null),
            P = (0, l.useGenerateCdnSource)();
          return (0, a.useEffect)(() => {
            const e = [h.U1, h.WO, h.dK];
            E(e)
          }, [!1]), (0, a.useEffect)(() => {
            _ && !f && (p({
              event: "page_section_impression",
              element_placement: "highlights"
            }), w(!0))
          }, [_]), (0, a.useEffect)(() => (S.el && S.el.querySelectorAll(".swiper-pagination-bullet").forEach((e, t) => {
            e.addEventListener("click", () => {
              p({
                event: "carousel_thumbnail_click",
                element_placement: "highlights",
                position: t,
                card_name: "dot"
              })
            })
          }), () => {
            if (S.el) {
              const e = S.el.querySelectorAll(".swiper-pagination-bullet");
              e && e.forEach(e => {
                e.removeEventListener("click", () => {})
              })
            }
          }), [S]), e?.length ? (0, r.jsxs)("section", {
            className: b.mainContainer,
            ref: u,
            children: [(0, r.jsxs)("div", {
              ref: I,
              className: b.mainCarousel,
              onMouseEnter: () => {
                v(!0)
              },
              onMouseLeave: () => {
                v(!1)
              },
              children: [e.length > 1 && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(c.P.button, {
                  ref: R,
                  type: "button",
                  "aria-label": i.formatMessage(g.cph_highlights_previous),
                  className: [b.controlBtn, b.prevBtn, x ? b.fadeIn : b.fadeOut].join(" "),
                  onClick: () => {
                    p({
                      event: "carousel_previous",
                      element_placement: "highlights"
                    }), S && S.slidePrev()
                  },
                  disabled: y < 1
                }), (0, r.jsx)(c.P.button, {
                  ref: N,
                  type: "button",
                  "aria-label": i.formatMessage(g.cph_highlights_next),
                  className: [b.controlBtn, b.nextBtn, x ? b.fadeIn : b.fadeOut].join(" "),
                  onClick: () => {
                    p({
                      event: "carousel_next",
                      element_placement: "highlights"
                    }), S && S.slideNext()
                  },
                  disabled: y === e.length - 1
                })]
              }), (0, r.jsx)(o.RC, {
                onInit: e => j(e),
                onBeforeInit: e => {
                  C.current = e
                },
                modules: T,
                onSlideChange: e => {
                  const t = e.realIndex;
                  k(t)
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
                initialSlide: y,
                loop: !1,
                onTouchEnd: () => {
                  p({
                    event: "carousel_swipe",
                    element_placement: "highlights"
                  })
                },
                children: e.map((e, t) => (0, r.jsx)(o.qr, {
                  children: (0, r.jsx)("img", {
                    alt: e.altText ?? e.title,
                    "aria-label": e.altText ?? e.title,
                    "aria-current": t === y,
                    src: P(e.image),
                    role: "presentation"
                  })
                }, `${e.title}-${t}`))
              })]
            }), (0, r.jsxs)("div", {
              className: b.contentContainer,
              children: [(0, r.jsx)("div", {
                className: b.carouselContainer,
                children: (0, r.jsx)(o.RC, {
                  onInit: e => {
                    M.current = e
                  },
                  spaceBetween: 8,
                  direction: "horizontal",
                  grabCursor: !0,
                  watchSlidesProgress: !0,
                  modules: T,
                  slidesPerView: "auto",
                  initialSlide: y,
                  children: e.map((t, i) => (0, r.jsx)(o.qr, {
                    children: (0, r.jsx)("button", {
                      type: "button",
                      onClick: () => (t => {
                        p({
                          event: "carousel_thumbnail_click",
                          element_placement: "highlights",
                          position: t,
                          card_name: e[t]?.title
                        }), k(t), C.current?.slideTo(t), M.current?.slideTo(t)
                      })(i),
                      className: `${i===y?b.active:""}`,
                      "aria-label": t.altText ?? t.title,
                      "aria-current": i === y,
                      children: (0, r.jsx)("img", {
                        src: `${P(t.image)}?im=Resize,width=252`,
                        alt: t.altText ?? t.title ?? "Slide"
                      })
                    })
                  }, t.key))
                })
              }), (0, r.jsx)("div", {
                className: b.textContainer,
                children: e.map((i, a) => (0, r.jsx)(m, {
                  heading: t || i.heading,
                  title: i.title,
                  summary: i.summary,
                  isActive: y === a,
                  index: a,
                  highlightsCount: e.length
                }, i.key))
              })]
            })]
          }) : null
        }
    }
  }
]);