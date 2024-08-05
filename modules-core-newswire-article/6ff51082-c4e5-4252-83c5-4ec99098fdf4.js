! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6ff51082-c4e5-4252-83c5-4ec99098fdf4", e._sentryDebugIdIdentifier = "sentry-dbid-6ff51082-c4e5-4252-83c5-4ec99098fdf4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [9269], {
    11650: (e, a, s) => {
      s.d(a, {
        U1: () => d,
        Vx: () => l,
        dK: () => o,
        WO: () => c
      });
      var t = s(93004),
        i = s(40825);

      function n(e, a, s, t) {
        return e.params.createElements && Object.keys(t).forEach((n => {
          if (!s[n] && !0 === s.auto) {
            let l = (0, i.e)(e.el, `.${t[n]}`)[0];
            l || (l = (0, i.c)("div", t[n]), l.className = t[n], e.el.append(l)), s[n] = l, a[n] = l
          }
        })), s
      }

      function l(e) {
        let {
          swiper: a,
          extendParams: s,
          on: t,
          emit: l
        } = e;

        function r(e) {
          let s;
          return e && "string" == typeof e && a.isElement && (s = a.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), a.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === a.el.querySelectorAll(e).length && (s = a.el.querySelector(e))), e && !s ? e : s)
        }

        function o(e, s) {
          const t = a.params.navigation;
          (e = (0, i.m)(e)).forEach((e => {
            e && (e.classList[s ? "add" : "remove"](...t.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](t.lockClass))
          }))
        }

        function c() {
          const {
            nextEl: e,
            prevEl: s
          } = a.navigation;
          if (a.params.loop) return o(s, !1), void o(e, !1);
          o(s, a.isBeginning && !a.params.rewind), o(e, a.isEnd && !a.params.rewind)
        }

        function d(e) {
          e.preventDefault(), (!a.isBeginning || a.params.loop || a.params.rewind) && (a.slidePrev(), l("navigationPrev"))
        }

        function p(e) {
          e.preventDefault(), (!a.isEnd || a.params.loop || a.params.rewind) && (a.slideNext(), l("navigationNext"))
        }

        function m() {
          const e = a.params.navigation;
          if (a.params.navigation = n(a, a.originalParams.navigation, a.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let s = r(e.nextEl),
            t = r(e.prevEl);
          Object.assign(a.navigation, {
            nextEl: s,
            prevEl: t
          }), s = (0, i.m)(s), t = (0, i.m)(t);
          const l = (s, t) => {
            s && s.addEventListener("click", "next" === t ? p : d), !a.enabled && s && s.classList.add(...e.lockClass.split(" "))
          };
          s.forEach((e => l(e, "next"))), t.forEach((e => l(e, "prev")))
        }

        function u() {
          let {
            nextEl: e,
            prevEl: s
          } = a.navigation;
          e = (0, i.m)(e), s = (0, i.m)(s);
          const t = (e, s) => {
            e.removeEventListener("click", "next" === s ? p : d), e.classList.remove(...a.params.navigation.disabledClass.split(" "))
          };
          e.forEach((e => t(e, "next"))), s.forEach((e => t(e, "prev")))
        }
        s({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), a.navigation = {
          nextEl: null,
          prevEl: null
        }, t("init", (() => {
          !1 === a.params.navigation.enabled ? g() : (m(), c())
        })), t("toEdge fromEdge lock unlock", (() => {
          c()
        })), t("destroy", (() => {
          u()
        })), t("enable disable", (() => {
          let {
            nextEl: e,
            prevEl: s
          } = a.navigation;
          e = (0, i.m)(e), s = (0, i.m)(s), a.enabled ? c() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(a.params.navigation.lockClass)))
        })), t("click", ((e, s) => {
          let {
            nextEl: t,
            prevEl: n
          } = a.navigation;
          t = (0, i.m)(t), n = (0, i.m)(n);
          const r = s.target;
          if (a.params.navigation.hideOnClick && !n.includes(r) && !t.includes(r)) {
            if (a.pagination && a.params.pagination && a.params.pagination.clickable && (a.pagination.el === r || a.pagination.el.contains(r))) return;
            let e;
            t.length ? e = t[0].classList.contains(a.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(a.params.navigation.hiddenClass)), l(!0 === e ? "navigationShow" : "navigationHide"), [...t, ...n].filter((e => !!e)).forEach((e => e.classList.toggle(a.params.navigation.hiddenClass)))
          }
        }));
        const g = () => {
          a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")), u()
        };
        Object.assign(a.navigation, {
          enable: () => {
            a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")), m(), c()
          },
          disable: g,
          update: c,
          init: m,
          destroy: u
        })
      }

      function r(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function o(e) {
        let {
          swiper: a,
          extendParams: s,
          on: t,
          emit: l
        } = e;
        const o = "swiper-pagination";
        let c;
        s({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${o}-bullet`,
            bulletActiveClass: `${o}-bullet-active`,
            modifierClass: `${o}-`,
            currentClass: `${o}-current`,
            totalClass: `${o}-total`,
            hiddenClass: `${o}-hidden`,
            progressbarFillClass: `${o}-progressbar-fill`,
            progressbarOppositeClass: `${o}-progressbar-opposite`,
            clickableClass: `${o}-clickable`,
            lockClass: `${o}-lock`,
            horizontalClass: `${o}-horizontal`,
            verticalClass: `${o}-vertical`,
            paginationDisabledClass: `${o}-disabled`
          }
        }), a.pagination = {
          el: null,
          bullets: []
        };
        let d = 0;

        function p() {
          return !a.params.pagination.el || !a.pagination.el || Array.isArray(a.pagination.el) && 0 === a.pagination.el.length
        }

        function m(e, s) {
          const {
            bulletActiveClass: t
          } = a.params.pagination;
          e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${t}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${t}-${s}-${s}`))
        }

        function u(e) {
          const s = e.target.closest(r(a.params.pagination.bulletClass));
          if (!s) return;
          e.preventDefault();
          const t = (0, i.g)(s) * a.params.slidesPerGroup;
          if (a.params.loop) {
            if (a.realIndex === t) return;
            a.slideToLoop(t)
          } else a.slideTo(t)
        }

        function g() {
          const e = a.rtl,
            s = a.params.pagination;
          if (p()) return;
          let t, n, o = a.pagination.el;
          o = (0, i.m)(o);
          const u = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
            g = a.params.loop ? Math.ceil(u / a.params.slidesPerGroup) : a.snapGrid.length;
          if (a.params.loop ? (n = a.previousRealIndex || 0, t = a.params.slidesPerGroup > 1 ? Math.floor(a.realIndex / a.params.slidesPerGroup) : a.realIndex) : void 0 !== a.snapIndex ? (t = a.snapIndex, n = a.previousSnapIndex) : (n = a.previousIndex || 0, t = a.activeIndex || 0), "bullets" === s.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
            const l = a.pagination.bullets;
            let r, p, u;
            if (s.dynamicBullets && (c = (0, i.f)(l[0], a.isHorizontal() ? "width" : "height", !0), o.forEach((e => {
                e.style[a.isHorizontal() ? "width" : "height"] = c * (s.dynamicMainBullets + 4) + "px"
              })), s.dynamicMainBullets > 1 && void 0 !== n && (d += t - (n || 0), d > s.dynamicMainBullets - 1 ? d = s.dynamicMainBullets - 1 : d < 0 && (d = 0)), r = Math.max(t - d, 0), p = r + (Math.min(l.length, s.dynamicMainBullets) - 1), u = (p + r) / 2), l.forEach((e => {
                const a = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                e.classList.remove(...a)
              })), o.length > 1) l.forEach((e => {
              const n = (0, i.g)(e);
              n === t ? e.classList.add(...s.bulletActiveClass.split(" ")) : a.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (n >= r && n <= p && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), n === r && m(e, "prev"), n === p && m(e, "next"))
            }));
            else {
              const e = l[t];
              if (e && e.classList.add(...s.bulletActiveClass.split(" ")), a.isElement && l.forEach(((e, a) => {
                  e.setAttribute("part", a === t ? "bullet-active" : "bullet")
                })), s.dynamicBullets) {
                const e = l[r],
                  a = l[p];
                for (let e = r; e <= p; e += 1) l[e] && l[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                m(e, "prev"), m(a, "next")
              }
            }
            if (s.dynamicBullets) {
              const t = Math.min(l.length, s.dynamicMainBullets + 4),
                i = (c * t - c) / 2 - u * c,
                n = e ? "right" : "left";
              l.forEach((e => {
                e.style[a.isHorizontal() ? n : "top"] = `${i}px`
              }))
            }
          }
          o.forEach(((e, i) => {
            if ("fraction" === s.type && (e.querySelectorAll(r(s.currentClass)).forEach((e => {
                e.textContent = s.formatFractionCurrent(t + 1)
              })), e.querySelectorAll(r(s.totalClass)).forEach((e => {
                e.textContent = s.formatFractionTotal(g)
              }))), "progressbar" === s.type) {
              let i;
              i = s.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
              const n = (t + 1) / g;
              let l = 1,
                o = 1;
              "horizontal" === i ? l = n : o = n, e.querySelectorAll(r(s.progressbarFillClass)).forEach((e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${l}) scaleY(${o})`, e.style.transitionDuration = `${a.params.speed}ms`
              }))
            }
            "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(a, t + 1, g), 0 === i && l("paginationRender", e)) : (0 === i && l("paginationRender", e), l("paginationUpdate", e)), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](s.lockClass)
          }))
        }

        function f() {
          const e = a.params.pagination;
          if (p()) return;
          const s = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.grid && a.params.grid.rows > 1 ? a.slides.length / Math.ceil(a.params.grid.rows) : a.slides.length;
          let t = a.pagination.el;
          t = (0, i.m)(t);
          let n = "";
          if ("bullets" === e.type) {
            let t = a.params.loop ? Math.ceil(s / a.params.slidesPerGroup) : a.snapGrid.length;
            a.params.freeMode && a.params.freeMode.enabled && t > s && (t = s);
            for (let s = 0; s < t; s += 1) e.renderBullet ? n += e.renderBullet.call(a, s, e.bulletClass) : n += `<${e.bulletElement} ${a.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), a.pagination.bullets = [], t.forEach((s => {
            "custom" !== e.type && (s.innerHTML = n || ""), "bullets" === e.type && a.pagination.bullets.push(...s.querySelectorAll(r(e.bulletClass)))
          })), "custom" !== e.type && l("paginationRender", t[0])
        }

        function b() {
          a.params.pagination = n(a, a.originalParams.pagination, a.params.pagination, {
            el: "swiper-pagination"
          });
          const e = a.params.pagination;
          if (!e.el) return;
          let s;
          "string" == typeof e.el && a.isElement && (s = a.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (a.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...a.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((e => (0, i.a)(e, ".swiper")[0] === a.el))[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(a.pagination, {
            el: s
          }), s = (0, i.m)(s), s.forEach((s => {
            "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", u), a.enabled || s.classList.add(e.lockClass)
          })))
        }

        function v() {
          const e = a.params.pagination;
          if (p()) return;
          let s = a.pagination.el;
          s && (s = (0, i.m)(s), s.forEach((s => {
            s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(a.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", u))
          }))), a.pagination.bullets && a.pagination.bullets.forEach((a => a.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        t("changeDirection", (() => {
          if (!a.pagination || !a.pagination.el) return;
          const e = a.params.pagination;
          let {
            el: s
          } = a.pagination;
          s = (0, i.m)(s), s.forEach((s => {
            s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass)
          }))
        })), t("init", (() => {
          !1 === a.params.pagination.enabled ? h() : (b(), f(), g())
        })), t("activeIndexChange", (() => {
          void 0 === a.snapIndex && g()
        })), t("snapIndexChange", (() => {
          g()
        })), t("snapGridLengthChange", (() => {
          f(), g()
        })), t("destroy", (() => {
          v()
        })), t("enable disable", (() => {
          let {
            el: e
          } = a.pagination;
          e && (e = (0, i.m)(e), e.forEach((e => e.classList[a.enabled ? "remove" : "add"](a.params.pagination.lockClass))))
        })), t("lock unlock", (() => {
          g()
        })), t("click", ((e, s) => {
          const t = s.target,
            n = (0, i.m)(a.pagination.el);
          if (a.params.pagination.el && a.params.pagination.hideOnClick && n && n.length > 0 && !t.classList.contains(a.params.pagination.bulletClass)) {
            if (a.navigation && (a.navigation.nextEl && t === a.navigation.nextEl || a.navigation.prevEl && t === a.navigation.prevEl)) return;
            const e = n[0].classList.contains(a.params.pagination.hiddenClass);
            l(!0 === e ? "paginationShow" : "paginationHide"), n.forEach((e => e.classList.toggle(a.params.pagination.hiddenClass)))
          }
        }));
        const h = () => {
          a.el.classList.add(a.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = a.pagination;
          e && (e = (0, i.m)(e), e.forEach((e => e.classList.add(a.params.pagination.paginationDisabledClass)))), v()
        };
        Object.assign(a.pagination, {
          enable: () => {
            a.el.classList.remove(a.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = a.pagination;
            e && (e = (0, i.m)(e), e.forEach((e => e.classList.remove(a.params.pagination.paginationDisabledClass)))), b(), f(), g()
          },
          disable: h,
          render: f,
          update: g,
          init: b,
          destroy: v
        })
      }

      function c(e) {
        let {
          swiper: a,
          extendParams: s,
          on: n
        } = e;
        s({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
          }
        });
        let l = !1,
          r = !1;

        function o() {
          const e = a.thumbs.swiper;
          if (!e || e.destroyed) return;
          const s = e.clickedIndex,
            t = e.clickedSlide;
          if (t && t.classList.contains(a.params.thumbs.slideThumbActiveClass)) return;
          if (null == s) return;
          let i;
          i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, a.params.loop ? a.slideToLoop(i) : a.slideTo(i)
        }

        function c() {
          const {
            thumbs: e
          } = a.params;
          if (l) return !1;
          l = !0;
          const s = a.constructor;
          if (e.swiper instanceof s) a.thumbs.swiper = e.swiper, Object.assign(a.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), Object.assign(a.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), a.thumbs.swiper.update();
          else if ((0, i.k)(e.swiper)) {
            const t = Object.assign({}, e.swiper);
            Object.assign(t, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), a.thumbs.swiper = new s(t), r = !0
          }
          return a.thumbs.swiper.el.classList.add(a.params.thumbs.thumbsContainerClass), a.thumbs.swiper.on("tap", o), !0
        }

        function d(e) {
          const s = a.thumbs.swiper;
          if (!s || s.destroyed) return;
          const t = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
          let n = 1;
          const l = a.params.thumbs.slideThumbActiveClass;
          if (a.params.slidesPerView > 1 && !a.params.centeredSlides && (n = a.params.slidesPerView), a.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.forEach((e => e.classList.remove(l))), s.params.loop || s.params.virtual && s.params.virtual.enabled)
            for (let e = 0; e < n; e += 1)(0, i.e)(s.slidesEl, `[data-swiper-slide-index="${a.realIndex+e}"]`).forEach((e => {
              e.classList.add(l)
            }));
          else
            for (let e = 0; e < n; e += 1) s.slides[a.realIndex + e] && s.slides[a.realIndex + e].classList.add(l);
          const r = a.params.thumbs.autoScrollOffset,
            o = r && !s.params.loop;
          if (a.realIndex !== s.realIndex || o) {
            const i = s.activeIndex;
            let n, l;
            if (s.params.loop) {
              const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${a.realIndex}`))[0];
              n = s.slides.indexOf(e), l = a.activeIndex > a.previousIndex ? "next" : "prev"
            } else n = a.realIndex, l = n > a.previousIndex ? "next" : "prev";
            o && (n += "next" === l ? r : -1 * r), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > i ? n - Math.floor(t / 2) + 1 : n + Math.floor(t / 2) - 1 : n > i && s.params.slidesPerGroup, s.slideTo(n, e ? 0 : void 0))
          }
        }
        a.thumbs = {
          swiper: null
        }, n("beforeInit", (() => {
          const {
            thumbs: e
          } = a.params;
          if (e && e.swiper)
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
              const s = (0, t.g)(),
                i = () => {
                  const t = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                  if (t && t.swiper) e.swiper = t.swiper, c(), d(!0);
                  else if (t) {
                    const s = i => {
                      e.swiper = i.detail[0], t.removeEventListener("init", s), c(), d(!0), e.swiper.update(), a.update()
                    };
                    t.addEventListener("init", s)
                  }
                  return t
                },
                n = () => {
                  a.destroyed || i() || requestAnimationFrame(n)
                };
              requestAnimationFrame(n)
            } else c(), d(!0)
        })), n("slideChange update resize observerUpdate", (() => {
          d()
        })), n("setTransition", ((e, s) => {
          const t = a.thumbs.swiper;
          t && !t.destroyed && t.setTransition(s)
        })), n("beforeDestroy", (() => {
          const e = a.thumbs.swiper;
          e && !e.destroyed && r && e.destroy()
        })), Object.assign(a.thumbs, {
          init: c,
          update: d
        })
      }

      function d(e) {
        let {
          swiper: a,
          extendParams: s,
          emit: t,
          once: n
        } = e;
        s({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
          }
        }), Object.assign(a, {
          freeMode: {
            onTouchStart: function() {
              if (a.params.cssMode) return;
              const e = a.getTranslate();
              a.setTranslate(e), a.setTransition(0), a.touchEventsData.velocities.length = 0, a.freeMode.onTouchEnd({
                currentPos: a.rtl ? a.translate : -a.translate
              })
            },
            onTouchMove: function() {
              if (a.params.cssMode) return;
              const {
                touchEventsData: e,
                touches: s
              } = a;
              0 === e.velocities.length && e.velocities.push({
                position: s[a.isHorizontal() ? "startX" : "startY"],
                time: e.touchStartTime
              }), e.velocities.push({
                position: s[a.isHorizontal() ? "currentX" : "currentY"],
                time: (0, i.d)()
              })
            },
            onTouchEnd: function(e) {
              let {
                currentPos: s
              } = e;
              if (a.params.cssMode) return;
              const {
                params: l,
                wrapperEl: r,
                rtlTranslate: o,
                snapGrid: c,
                touchEventsData: d
              } = a, p = (0, i.d)() - d.touchStartTime;
              if (s < -a.minTranslate()) a.slideTo(a.activeIndex);
              else if (s > -a.maxTranslate()) a.slides.length < c.length ? a.slideTo(c.length - 1) : a.slideTo(a.slides.length - 1);
              else {
                if (l.freeMode.momentum) {
                  if (d.velocities.length > 1) {
                    const e = d.velocities.pop(),
                      s = d.velocities.pop(),
                      t = e.position - s.position,
                      n = e.time - s.time;
                    a.velocity = t / n, a.velocity /= 2, Math.abs(a.velocity) < l.freeMode.minimumVelocity && (a.velocity = 0), (n > 150 || (0, i.d)() - e.time > 300) && (a.velocity = 0)
                  } else a.velocity = 0;
                  a.velocity *= l.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                  let e = 1e3 * l.freeMode.momentumRatio;
                  const s = a.velocity * e;
                  let p = a.translate + s;
                  o && (p = -p);
                  let m, u = !1;
                  const g = 20 * Math.abs(a.velocity) * l.freeMode.momentumBounceRatio;
                  let f;
                  if (p < a.maxTranslate()) l.freeMode.momentumBounce ? (p + a.maxTranslate() < -g && (p = a.maxTranslate() - g), m = a.maxTranslate(), u = !0, d.allowMomentumBounce = !0) : p = a.maxTranslate(), l.loop && l.centeredSlides && (f = !0);
                  else if (p > a.minTranslate()) l.freeMode.momentumBounce ? (p - a.minTranslate() > g && (p = a.minTranslate() + g), m = a.minTranslate(), u = !0, d.allowMomentumBounce = !0) : p = a.minTranslate(), l.loop && l.centeredSlides && (f = !0);
                  else if (l.freeMode.sticky) {
                    let e;
                    for (let a = 0; a < c.length; a += 1)
                      if (c[a] > -p) {
                        e = a;
                        break
                      } p = Math.abs(c[e] - p) < Math.abs(c[e - 1] - p) || "next" === a.swipeDirection ? c[e] : c[e - 1], p = -p
                  }
                  if (f && n("transitionEnd", (() => {
                      a.loopFix()
                    })), 0 !== a.velocity) {
                    if (e = o ? Math.abs((-p - a.translate) / a.velocity) : Math.abs((p - a.translate) / a.velocity), l.freeMode.sticky) {
                      const s = Math.abs((o ? -p : p) - a.translate),
                        t = a.slidesSizesGrid[a.activeIndex];
                      e = s < t ? l.speed : s < 2 * t ? 1.5 * l.speed : 2.5 * l.speed
                    }
                  } else if (l.freeMode.sticky) return void a.slideToClosest();
                  l.freeMode.momentumBounce && u ? (a.updateProgress(m), a.setTransition(e), a.setTranslate(p), a.transitionStart(!0, a.swipeDirection), a.animating = !0, (0, i.j)(r, (() => {
                    a && !a.destroyed && d.allowMomentumBounce && (t("momentumBounce"), a.setTransition(l.speed), setTimeout((() => {
                      a.setTranslate(m), (0, i.j)(r, (() => {
                        a && !a.destroyed && a.transitionEnd()
                      }))
                    }), 0))
                  }))) : a.velocity ? (t("_freeModeNoMomentumRelease"), a.updateProgress(p), a.setTransition(e), a.setTranslate(p), a.transitionStart(!0, a.swipeDirection), a.animating || (a.animating = !0, (0, i.j)(r, (() => {
                    a && !a.destroyed && a.transitionEnd()
                  })))) : a.updateProgress(p), a.updateActiveIndex(), a.updateSlidesClasses()
                } else {
                  if (l.freeMode.sticky) return void a.slideToClosest();
                  l.freeMode && t("_freeModeNoMomentumRelease")
                }(!l.freeMode.momentum || p >= l.longSwipesMs) && (t("_freeModeStaticRelease"), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses())
              }
            }
          }
        })
      }
    }
  }
]);