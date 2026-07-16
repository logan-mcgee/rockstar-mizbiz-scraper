try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "bcfdcbca-8c86-4d25-8f92-2a74768cc541", e._sentryDebugIdIdentifier = "sentry-dbid-bcfdcbca-8c86-4d25-8f92-2a74768cc541")
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
  [5980], {
    75027(e, s, t) {
      t.d(s, {
        A: () => i
      });
      var a = t(20212);

      function i(e) {
        let {
          swiper: s,
          extendParams: t,
          emit: i,
          once: l
        } = e;
        t({
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
        }), Object.assign(s, {
          freeMode: {
            onTouchStart: function() {
              if (s.params.cssMode) return;
              const e = s.getTranslate();
              s.setTranslate(e), s.setTransition(0), s.touchEventsData.velocities.length = 0, s.freeMode.onTouchEnd({
                currentPos: s.rtl ? s.translate : -s.translate
              })
            },
            onTouchMove: function() {
              if (s.params.cssMode) return;
              const {
                touchEventsData: e,
                touches: t
              } = s;
              0 === e.velocities.length && e.velocities.push({
                position: t[s.isHorizontal() ? "startX" : "startY"],
                time: e.touchStartTime
              }), e.velocities.push({
                position: t[s.isHorizontal() ? "currentX" : "currentY"],
                time: (0, a.f)()
              })
            },
            onTouchEnd: function(e) {
              let {
                currentPos: t
              } = e;
              if (s.params.cssMode) return;
              const {
                params: n,
                wrapperEl: r,
                rtlTranslate: o,
                snapGrid: d,
                touchEventsData: c
              } = s, p = (0, a.f)() - c.touchStartTime;
              if (t < -s.minTranslate()) s.slideTo(s.activeIndex);
              else if (t > -s.maxTranslate()) s.slides.length < d.length ? s.slideTo(d.length - 1) : s.slideTo(s.slides.length - 1);
              else {
                if (n.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    const e = c.velocities.pop(),
                      t = c.velocities.pop(),
                      i = e.position - t.position,
                      l = e.time - t.time;
                    s.velocity = i / l, s.velocity /= 2, Math.abs(s.velocity) < n.freeMode.minimumVelocity && (s.velocity = 0), (l > 150 || (0, a.f)() - e.time > 300) && (s.velocity = 0)
                  } else s.velocity = 0;
                  s.velocity *= n.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                  let e = 1e3 * n.freeMode.momentumRatio;
                  const t = s.velocity * e;
                  let p = s.translate + t;
                  o && (p = -p);
                  let u, m = !1;
                  const f = 20 * Math.abs(s.velocity) * n.freeMode.momentumBounceRatio;
                  let g;
                  if (p < s.maxTranslate()) n.freeMode.momentumBounce ? (p + s.maxTranslate() < -f && (p = s.maxTranslate() - f), u = s.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = s.maxTranslate(), n.loop && n.centeredSlides && (g = !0);
                  else if (p > s.minTranslate()) n.freeMode.momentumBounce ? (p - s.minTranslate() > f && (p = s.minTranslate() + f), u = s.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = s.minTranslate(), n.loop && n.centeredSlides && (g = !0);
                  else if (n.freeMode.sticky) {
                    let e;
                    for (let s = 0; s < d.length; s += 1)
                      if (d[s] > -p) {
                        e = s;
                        break
                      } p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === s.swipeDirection ? d[e] : d[e - 1], p = -p
                  }
                  if (g && l("transitionEnd", () => {
                      s.loopFix()
                    }), 0 !== s.velocity) {
                    if (e = o ? Math.abs((-p - s.translate) / s.velocity) : Math.abs((p - s.translate) / s.velocity), n.freeMode.sticky) {
                      const t = Math.abs((o ? -p : p) - s.translate),
                        a = s.slidesSizesGrid[s.activeIndex];
                      e = t < a ? n.speed : t < 2 * a ? 1.5 * n.speed : 2.5 * n.speed
                    }
                  } else if (n.freeMode.sticky) return void s.slideToClosest();
                  n.freeMode.momentumBounce && m ? (s.updateProgress(u), s.setTransition(e), s.setTranslate(p), s.transitionStart(!0, s.swipeDirection), s.animating = !0, (0, a.l)(r, () => {
                    s && !s.destroyed && c.allowMomentumBounce && (i("momentumBounce"), s.setTransition(n.speed), setTimeout(() => {
                      s.setTranslate(u), (0, a.l)(r, () => {
                        s && !s.destroyed && s.transitionEnd()
                      })
                    }, 0))
                  })) : s.velocity ? (i("_freeModeNoMomentumRelease"), s.updateProgress(p), s.setTransition(e), s.setTranslate(p), s.transitionStart(!0, s.swipeDirection), s.animating || (s.animating = !0, (0, a.l)(r, () => {
                    s && !s.destroyed && s.transitionEnd()
                  }))) : s.updateProgress(p), s.updateActiveIndex(), s.updateSlidesClasses()
                } else {
                  if (n.freeMode.sticky) return void s.slideToClosest();
                  n.freeMode && i("_freeModeNoMomentumRelease")
                }(!n.freeMode.momentum || p >= n.longSwipesMs) && (i("_freeModeStaticRelease"), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses())
              }
            }
          }
        })
      }
    },
    31147(e, s, t) {
      t.d(s, {
        A: () => n
      });
      var a = t(20219),
        i = t(61122),
        l = t(20212);

      function n(e) {
        let {
          swiper: s,
          extendParams: t,
          on: n,
          emit: r
        } = e;
        const o = "swiper-pagination";
        let d;
        t({
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
        }), s.pagination = {
          el: null,
          bullets: []
        };
        let c = 0;

        function p() {
          return !s.params.pagination.el || !s.pagination.el || Array.isArray(s.pagination.el) && 0 === s.pagination.el.length
        }

        function u(e, t) {
          const {
            bulletActiveClass: a
          } = s.params.pagination;
          e && (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${a}-${t}`), (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${t}-${t}`))
        }

        function m(e) {
          const t = e.target.closest((0, a.c)(s.params.pagination.bulletClass));
          if (!t) return;
          e.preventDefault();
          const i = (0, l.i)(t) * s.params.slidesPerGroup;
          if (s.params.loop) {
            if (s.realIndex === i) return;
            const e = (n = s.realIndex, r = i, (r %= o = s.slides.length) === 1 + (n %= o) ? "next" : r === n - 1 ? "previous" : void 0);
            "next" === e ? s.slideNext() : "previous" === e ? s.slidePrev() : s.slideToLoop(i)
          } else s.slideTo(i);
          var n, r, o
        }

        function f() {
          const e = s.rtl,
            t = s.params.pagination;
          if (p()) return;
          let i, n, o = s.pagination.el;
          o = (0, l.m)(o);
          const m = s.virtual && s.params.virtual.enabled ? s.virtual.slides.length : s.slides.length,
            f = s.params.loop ? Math.ceil(m / s.params.slidesPerGroup) : s.snapGrid.length;
          if (s.params.loop ? (n = s.previousRealIndex || 0, i = s.params.slidesPerGroup > 1 ? Math.floor(s.realIndex / s.params.slidesPerGroup) : s.realIndex) : void 0 !== s.snapIndex ? (i = s.snapIndex, n = s.previousSnapIndex) : (n = s.previousIndex || 0, i = s.activeIndex || 0), "bullets" === t.type && s.pagination.bullets && s.pagination.bullets.length > 0) {
            const a = s.pagination.bullets;
            let r, p, m;
            if (t.dynamicBullets && (d = (0, l.h)(a[0], s.isHorizontal() ? "width" : "height", !0), o.forEach(e => {
                e.style[s.isHorizontal() ? "width" : "height"] = d * (t.dynamicMainBullets + 4) + "px"
              }), t.dynamicMainBullets > 1 && void 0 !== n && (c += i - (n || 0), c > t.dynamicMainBullets - 1 ? c = t.dynamicMainBullets - 1 : c < 0 && (c = 0)), r = Math.max(i - c, 0), p = r + (Math.min(a.length, t.dynamicMainBullets) - 1), m = (p + r) / 2), a.forEach(e => {
                const s = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${t.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...s)
              }), o.length > 1) a.forEach(e => {
              const a = (0, l.i)(e);
              a === i ? e.classList.add(...t.bulletActiveClass.split(" ")) : s.isElement && e.setAttribute("part", "bullet"), t.dynamicBullets && (a >= r && a <= p && e.classList.add(...`${t.bulletActiveClass}-main`.split(" ")), a === r && u(e, "prev"), a === p && u(e, "next"))
            });
            else {
              const e = a[i];
              if (e && e.classList.add(...t.bulletActiveClass.split(" ")), s.isElement && a.forEach((e, s) => {
                  e.setAttribute("part", s === i ? "bullet-active" : "bullet")
                }), t.dynamicBullets) {
                const e = a[r],
                  s = a[p];
                for (let e = r; e <= p; e += 1) a[e] && a[e].classList.add(...`${t.bulletActiveClass}-main`.split(" "));
                u(e, "prev"), u(s, "next")
              }
            }
            if (t.dynamicBullets) {
              const i = Math.min(a.length, t.dynamicMainBullets + 4),
                l = (d * i - d) / 2 - m * d,
                n = e ? "right" : "left";
              a.forEach(e => {
                e.style[s.isHorizontal() ? n : "top"] = `${l}px`
              })
            }
          }
          o.forEach((e, n) => {
            if ("fraction" === t.type && (e.querySelectorAll((0, a.c)(t.currentClass)).forEach(e => {
                e.textContent = t.formatFractionCurrent(i + 1)
              }), e.querySelectorAll((0, a.c)(t.totalClass)).forEach(e => {
                e.textContent = t.formatFractionTotal(f)
              })), "progressbar" === t.type) {
              let l;
              l = t.progressbarOpposite ? s.isHorizontal() ? "vertical" : "horizontal" : s.isHorizontal() ? "horizontal" : "vertical";
              const n = (i + 1) / f;
              let r = 1,
                o = 1;
              "horizontal" === l ? r = n : o = n, e.querySelectorAll((0, a.c)(t.progressbarFillClass)).forEach(e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${o})`, e.style.transitionDuration = `${s.params.speed}ms`
              })
            }
            "custom" === t.type && t.renderCustom ? ((0, l.s)(e, t.renderCustom(s, i + 1, f)), 0 === n && r("paginationRender", e)) : (0 === n && r("paginationRender", e), r("paginationUpdate", e)), s.params.watchOverflow && s.enabled && e.classList[s.isLocked ? "add" : "remove"](t.lockClass)
          })
        }

        function g() {
          const e = s.params.pagination;
          if (p()) return;
          const t = s.virtual && s.params.virtual.enabled ? s.virtual.slides.length : s.grid && s.params.grid.rows > 1 ? s.slides.length / Math.ceil(s.params.grid.rows) : s.slides.length;
          let i = s.pagination.el;
          i = (0, l.m)(i);
          let n = "";
          if ("bullets" === e.type) {
            let a = s.params.loop ? Math.ceil(t / s.params.slidesPerGroup) : s.snapGrid.length;
            s.params.freeMode && s.params.freeMode.enabled && a > t && (a = t);
            for (let t = 0; t < a; t += 1) e.renderBullet ? n += e.renderBullet.call(s, t, e.bulletClass) : n += `<${e.bulletElement} ${s.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(s, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(s, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), s.pagination.bullets = [], i.forEach(t => {
            "custom" !== e.type && (0, l.s)(t, n || ""), "bullets" === e.type && s.pagination.bullets.push(...t.querySelectorAll((0, a.c)(e.bulletClass)))
          }), "custom" !== e.type && r("paginationRender", i[0])
        }

        function b() {
          s.params.pagination = (0, i.c)(s, s.originalParams.pagination, s.params.pagination, {
            el: "swiper-pagination"
          });
          const e = s.params.pagination;
          if (!e.el) return;
          let t;
          "string" == typeof e.el && s.isElement && (t = s.el.querySelector(e.el)), t || "string" != typeof e.el || (t = [...document.querySelectorAll(e.el)]), t || (t = e.el), t && 0 !== t.length && (s.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(t) && t.length > 1 && (t = [...s.el.querySelectorAll(e.el)], t.length > 1 && (t = t.find(e => (0, l.b)(e, ".swiper")[0] === s.el))), Array.isArray(t) && 1 === t.length && (t = t[0]), Object.assign(s.pagination, {
            el: t
          }), t = (0, l.m)(t), t.forEach(t => {
            "bullets" === e.type && e.clickable && t.classList.add(...(e.clickableClass || "").split(" ")), t.classList.add(e.modifierClass + e.type), t.classList.add(s.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (t.classList.add(`${e.modifierClass}${e.type}-dynamic`), c = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.classList.add(e.progressbarOppositeClass), e.clickable && t.addEventListener("click", m), s.enabled || t.classList.add(e.lockClass)
          }))
        }

        function h() {
          const e = s.params.pagination;
          if (p()) return;
          let t = s.pagination.el;
          t && (t = (0, l.m)(t), t.forEach(t => {
            t.classList.remove(e.hiddenClass), t.classList.remove(e.modifierClass + e.type), t.classList.remove(s.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")), t.removeEventListener("click", m))
          })), s.pagination.bullets && s.pagination.bullets.forEach(s => s.classList.remove(...e.bulletActiveClass.split(" ")))
        }
        n("changeDirection", () => {
          if (!s.pagination || !s.pagination.el) return;
          const e = s.params.pagination;
          let {
            el: t
          } = s.pagination;
          t = (0, l.m)(t), t.forEach(t => {
            t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(s.isHorizontal() ? e.horizontalClass : e.verticalClass)
          })
        }), n("init", () => {
          !1 === s.params.pagination.enabled ? v() : (b(), g(), f())
        }), n("activeIndexChange", () => {
          void 0 === s.snapIndex && f()
        }), n("snapIndexChange", () => {
          f()
        }), n("snapGridLengthChange", () => {
          g(), f()
        }), n("destroy", () => {
          h()
        }), n("enable disable", () => {
          let {
            el: e
          } = s.pagination;
          e && (e = (0, l.m)(e), e.forEach(e => e.classList[s.enabled ? "remove" : "add"](s.params.pagination.lockClass)))
        }), n("lock unlock", () => {
          f()
        }), n("click", (e, t) => {
          const a = t.target,
            i = (0, l.m)(s.pagination.el);
          if (s.params.pagination.el && s.params.pagination.hideOnClick && i && i.length > 0 && !a.classList.contains(s.params.pagination.bulletClass)) {
            if (s.navigation && (s.navigation.nextEl && a === s.navigation.nextEl || s.navigation.prevEl && a === s.navigation.prevEl)) return;
            const e = i[0].classList.contains(s.params.pagination.hiddenClass);
            r(!0 === e ? "paginationShow" : "paginationHide"), i.forEach(e => e.classList.toggle(s.params.pagination.hiddenClass))
          }
        });
        const v = () => {
          s.el.classList.add(s.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = s.pagination;
          e && (e = (0, l.m)(e), e.forEach(e => e.classList.add(s.params.pagination.paginationDisabledClass))), h()
        };
        Object.assign(s.pagination, {
          enable: () => {
            s.el.classList.remove(s.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = s.pagination;
            e && (e = (0, l.m)(e), e.forEach(e => e.classList.remove(s.params.pagination.paginationDisabledClass))), b(), g(), f()
          },
          disable: v,
          render: g,
          update: f,
          init: b,
          destroy: h
        })
      }
    },
    84220(e, s, t) {
      t.d(s, {
        A: () => l
      });
      var a = t(37015),
        i = t(20212);

      function l(e) {
        let {
          swiper: s,
          extendParams: t,
          on: l
        } = e;
        t({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
          }
        });
        let n = !1,
          r = !1;

        function o() {
          const e = s.thumbs.swiper;
          if (!e || e.destroyed) return;
          const t = e.clickedIndex,
            a = e.clickedSlide;
          if (a && a.classList.contains(s.params.thumbs.slideThumbActiveClass)) return;
          if (null == t) return;
          let i;
          i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : t, s.params.loop ? s.slideToLoop(i) : s.slideTo(i)
        }

        function d() {
          const {
            thumbs: e
          } = s.params;
          if (n) return !1;
          n = !0;
          const t = s.constructor;
          if (e.swiper instanceof t) {
            if (e.swiper.destroyed) return n = !1, !1;
            s.thumbs.swiper = e.swiper, Object.assign(s.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), Object.assign(s.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), s.thumbs.swiper.update()
          } else if ((0, i.o)(e.swiper)) {
            const a = Object.assign({}, e.swiper);
            Object.assign(a, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), s.thumbs.swiper = new t(a), r = !0
          }
          return s.thumbs.swiper.el.classList.add(s.params.thumbs.thumbsContainerClass), s.thumbs.swiper.on("tap", o), !0
        }

        function c(e) {
          const t = s.thumbs.swiper;
          if (!t || t.destroyed) return;
          const a = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
          let l = 1;
          const n = s.params.thumbs.slideThumbActiveClass;
          if (s.params.slidesPerView > 1 && !s.params.centeredSlides && (l = s.params.slidesPerView), s.params.thumbs.multipleActiveThumbs || (l = 1), l = Math.floor(l), t.slides.forEach(e => e.classList.remove(n)), t.params.loop || t.params.virtual && t.params.virtual.enabled)
            for (let e = 0; e < l; e += 1)(0, i.e)(t.slidesEl, `[data-swiper-slide-index="${s.realIndex+e}"]`).forEach(e => {
              e.classList.add(n)
            });
          else
            for (let e = 0; e < l; e += 1) t.slides[s.realIndex + e] && t.slides[s.realIndex + e].classList.add(n);
          const r = s.params.thumbs.autoScrollOffset,
            o = r && !t.params.loop;
          if (s.realIndex !== t.realIndex || o) {
            const i = t.activeIndex;
            let l, n;
            if (t.params.loop) {
              const e = t.slides.find(e => e.getAttribute("data-swiper-slide-index") === `${s.realIndex}`);
              l = t.slides.indexOf(e), n = s.activeIndex > s.previousIndex ? "next" : "prev"
            } else l = s.realIndex, n = l > s.previousIndex ? "next" : "prev";
            o && (l += "next" === n ? r : -1 * r), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(l) < 0 && (t.params.centeredSlides ? l = l > i ? l - Math.floor(a / 2) + 1 : l + Math.floor(a / 2) - 1 : l > i && t.params.slidesPerGroup, t.slideTo(l, e ? 0 : void 0))
          }
        }
        s.thumbs = {
          swiper: null
        }, l("beforeInit", () => {
          const {
            thumbs: e
          } = s.params;
          if (e && e.swiper)
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
              const t = (0, a.g)(),
                i = () => {
                  const a = "string" == typeof e.swiper ? t.querySelector(e.swiper) : e.swiper;
                  if (a && a.swiper) e.swiper = a.swiper, d(), c(!0);
                  else if (a) {
                    const t = `${s.params.eventsPrefix}init`,
                      i = l => {
                        e.swiper = l.detail[0], a.removeEventListener(t, i), d(), c(!0), e.swiper.update(), s.update()
                      };
                    a.addEventListener(t, i)
                  }
                  return a
                },
                l = () => {
                  s.destroyed || i() || requestAnimationFrame(l)
                };
              requestAnimationFrame(l)
            } else d(), c(!0)
        }), l("slideChange update resize observerUpdate", () => {
          c()
        }), l("setTransition", (e, t) => {
          const a = s.thumbs.swiper;
          a && !a.destroyed && a.setTransition(t)
        }), l("beforeDestroy", () => {
          const e = s.thumbs.swiper;
          e && !e.destroyed && r && e.destroy()
        }), Object.assign(s.thumbs, {
          init: d,
          update: c
        })
      }
    }
  }
]);