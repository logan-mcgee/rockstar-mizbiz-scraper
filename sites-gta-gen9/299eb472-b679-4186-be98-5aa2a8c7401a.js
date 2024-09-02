! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "299eb472-b679-4186-be98-5aa2a8c7401a", e._sentryDebugIdIdentifier = "sentry-dbid-299eb472-b679-4186-be98-5aa2a8c7401a")
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
  [9269], {
    89269: (e, t, s) => {
      s.d(t, {
        xI: () => c,
        U1: () => p,
        Vx: () => l,
        dK: () => o,
        WO: () => d
      });
      var a = s(93004),
        n = s(40825);

      function i(e, t, s, a) {
        return e.params.createElements && Object.keys(a).forEach((i => {
          if (!s[i] && !0 === s.auto) {
            let l = (0, n.e)(e.el, `.${a[i]}`)[0];
            l || (l = (0, n.c)("div", a[i]), l.className = a[i], e.el.append(l)), s[i] = l, t[i] = l
          }
        })), s
      }

      function l(e) {
        let {
          swiper: t,
          extendParams: s,
          on: a,
          emit: l
        } = e;

        function r(e) {
          let s;
          return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))), e && !s ? e : s)
        }

        function o(e, s) {
          const a = t.params.navigation;
          (e = (0, n.m)(e)).forEach((e => {
            e && (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass))
          }))
        }

        function c() {
          const {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          if (t.params.loop) return o(s, !1), void o(e, !1);
          o(s, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
        }

        function d(e) {
          e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), l("navigationPrev"))
        }

        function p(e) {
          e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), l("navigationNext"))
        }

        function u() {
          const e = t.params.navigation;
          if (t.params.navigation = i(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let s = r(e.nextEl),
            a = r(e.prevEl);
          Object.assign(t.navigation, {
            nextEl: s,
            prevEl: a
          }), s = (0, n.m)(s), a = (0, n.m)(a);
          const l = (s, a) => {
            s && s.addEventListener("click", "next" === a ? p : d), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
          };
          s.forEach((e => l(e, "next"))), a.forEach((e => l(e, "prev")))
        }

        function m() {
          let {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          e = (0, n.m)(e), s = (0, n.m)(s);
          const a = (e, s) => {
            e.removeEventListener("click", "next" === s ? p : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
          };
          e.forEach((e => a(e, "next"))), s.forEach((e => a(e, "prev")))
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
        }), t.navigation = {
          nextEl: null,
          prevEl: null
        }, a("init", (() => {
          !1 === t.params.navigation.enabled ? g() : (u(), c())
        })), a("toEdge fromEdge lock unlock", (() => {
          c()
        })), a("destroy", (() => {
          m()
        })), a("enable disable", (() => {
          let {
            nextEl: e,
            prevEl: s
          } = t.navigation;
          e = (0, n.m)(e), s = (0, n.m)(s), t.enabled ? c() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        })), a("click", ((e, s) => {
          let {
            nextEl: a,
            prevEl: i
          } = t.navigation;
          a = (0, n.m)(a), i = (0, n.m)(i);
          const r = s.target;
          if (t.params.navigation.hideOnClick && !i.includes(r) && !a.includes(r)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === r || t.pagination.el.contains(r))) return;
            let e;
            a.length ? e = a[0].classList.contains(t.params.navigation.hiddenClass) : i.length && (e = i[0].classList.contains(t.params.navigation.hiddenClass)), l(!0 === e ? "navigationShow" : "navigationHide"), [...a, ...i].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
          }
        }));
        const g = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), m()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), c()
          },
          disable: g,
          update: c,
          init: u,
          destroy: m
        })
      }

      function r(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function o(e) {
        let {
          swiper: t,
          extendParams: s,
          on: a,
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
        }), t.pagination = {
          el: null,
          bullets: []
        };
        let d = 0;

        function p() {
          return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function u(e, s) {
          const {
            bulletActiveClass: a
          } = t.params.pagination;
          e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${a}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${s}-${s}`))
        }

        function m(e) {
          const s = e.target.closest(r(t.params.pagination.bulletClass));
          if (!s) return;
          e.preventDefault();
          const a = (0, n.g)(s) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === a) return;
            t.slideToLoop(a)
          } else t.slideTo(a)
        }

        function g() {
          const e = t.rtl,
            s = t.params.pagination;
          if (p()) return;
          let a, i, o = t.pagination.el;
          o = (0, n.m)(o);
          const m = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            g = t.params.loop ? Math.ceil(m / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (i = t.previousRealIndex || 0, a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex, i = t.previousSnapIndex) : (i = t.previousIndex || 0, a = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const l = t.pagination.bullets;
            let r, p, m;
            if (s.dynamicBullets && (c = (0, n.f)(l[0], t.isHorizontal() ? "width" : "height", !0), o.forEach((e => {
                e.style[t.isHorizontal() ? "width" : "height"] = c * (s.dynamicMainBullets + 4) + "px"
              })), s.dynamicMainBullets > 1 && void 0 !== i && (d += a - (i || 0), d > s.dynamicMainBullets - 1 ? d = s.dynamicMainBullets - 1 : d < 0 && (d = 0)), r = Math.max(a - d, 0), p = r + (Math.min(l.length, s.dynamicMainBullets) - 1), m = (p + r) / 2), l.forEach((e => {
                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                e.classList.remove(...t)
              })), o.length > 1) l.forEach((e => {
              const i = (0, n.g)(e);
              i === a ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (i >= r && i <= p && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), i === r && u(e, "prev"), i === p && u(e, "next"))
            }));
            else {
              const e = l[a];
              if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && l.forEach(((e, t) => {
                  e.setAttribute("part", t === a ? "bullet-active" : "bullet")
                })), s.dynamicBullets) {
                const e = l[r],
                  t = l[p];
                for (let e = r; e <= p; e += 1) l[e] && l[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                u(e, "prev"), u(t, "next")
              }
            }
            if (s.dynamicBullets) {
              const a = Math.min(l.length, s.dynamicMainBullets + 4),
                n = (c * a - c) / 2 - m * c,
                i = e ? "right" : "left";
              l.forEach((e => {
                e.style[t.isHorizontal() ? i : "top"] = `${n}px`
              }))
            }
          }
          o.forEach(((e, n) => {
            if ("fraction" === s.type && (e.querySelectorAll(r(s.currentClass)).forEach((e => {
                e.textContent = s.formatFractionCurrent(a + 1)
              })), e.querySelectorAll(r(s.totalClass)).forEach((e => {
                e.textContent = s.formatFractionTotal(g)
              }))), "progressbar" === s.type) {
              let n;
              n = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const i = (a + 1) / g;
              let l = 1,
                o = 1;
              "horizontal" === n ? l = i : o = i, e.querySelectorAll(r(s.progressbarFillClass)).forEach((e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${l}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
              }))
            }
            "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, a + 1, g), 0 === n && l("paginationRender", e)) : (0 === n && l("paginationRender", e), l("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
          }))
        }

        function f() {
          const e = t.params.pagination;
          if (p()) return;
          const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
          let a = t.pagination.el;
          a = (0, n.m)(a);
          let i = "";
          if ("bullets" === e.type) {
            let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
            for (let s = 0; s < a; s += 1) e.renderBullet ? i += e.renderBullet.call(t, s, e.bulletClass) : i += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], a.forEach((s => {
            "custom" !== e.type && (s.innerHTML = i || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(r(e.bulletClass)))
          })), "custom" !== e.type && l("paginationRender", a[0])
        }

        function b() {
          t.params.pagination = i(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let s;
          "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((e => (0, n.a)(e, ".swiper")[0] === t.el))[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
            el: s
          }), s = (0, n.m)(s), s.forEach((s => {
            "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", m), t.enabled || s.classList.add(e.lockClass)
          })))
        }

        function v() {
          const e = t.params.pagination;
          if (p()) return;
          let s = t.pagination.el;
          s && (s = (0, n.m)(s), s.forEach((s => {
            s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", m))
          }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        a("changeDirection", (() => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let {
            el: s
          } = t.pagination;
          s = (0, n.m)(s), s.forEach((s => {
            s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          }))
        })), a("init", (() => {
          !1 === t.params.pagination.enabled ? h() : (b(), f(), g())
        })), a("activeIndexChange", (() => {
          void 0 === t.snapIndex && g()
        })), a("snapIndexChange", (() => {
          g()
        })), a("snapGridLengthChange", (() => {
          f(), g()
        })), a("destroy", (() => {
          v()
        })), a("enable disable", (() => {
          let {
            el: e
          } = t.pagination;
          e && (e = (0, n.m)(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        })), a("lock unlock", (() => {
          g()
        })), a("click", ((e, s) => {
          const a = s.target,
            i = (0, n.m)(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && i && i.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
            const e = i[0].classList.contains(t.params.pagination.hiddenClass);
            l(!0 === e ? "paginationShow" : "paginationHide"), i.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
          }
        }));
        const h = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = t.pagination;
          e && (e = (0, n.m)(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), v()
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = t.pagination;
            e && (e = (0, n.m)(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), b(), f(), g()
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
          swiper: t,
          extendParams: s,
          on: a
        } = e;

        function i(e, t) {
          const s = function() {
            let e, t, s;
            return (a, n) => {
              for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= n ? t = s : e = s;
              return e
            }
          }();
          let a, n;
          return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
            return e ? (n = s(this.x, e), a = n - 1, (e - this.x[a]) * (this.y[n] - this.y[a]) / (this.x[n] - this.x[a]) + this.y[a]) : 0
          }, this
        }

        function l() {
          t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }
        s({
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        }), t.controller = {
          control: void 0
        }, a("beforeInit", (() => {
          if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
            const e = document.querySelector(t.params.controller.control);
            if (e && e.swiper) t.controller.control = e.swiper;
            else if (e) {
              const s = a => {
                t.controller.control = a.detail[0], t.update(), e.removeEventListener("init", s)
              };
              e.addEventListener("init", s)
            }
          } else t.controller.control = t.params.controller.control
        })), a("update", (() => {
          l()
        })), a("resize", (() => {
          l()
        })), a("observerUpdate", (() => {
          l()
        })), a("setTranslate", ((e, s, a) => {
          t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a)
        })), a("setTransition", ((e, s, a) => {
          t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a)
        })), Object.assign(t.controller, {
          setTranslate: function(e, s) {
            const a = t.controller.control;
            let n, l;
            const r = t.constructor;

            function o(e) {
              if (e.destroyed) return;
              const s = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by && (function(e) {
                t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid)
              }(e), l = -t.controller.spline.interpolate(-s)), l && "container" !== t.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(n) && Number.isFinite(n) || (n = 1), l = (s - t.minTranslate()) * n + e.minTranslate()), t.params.controller.inverse && (l = e.maxTranslate() - l), e.updateProgress(l), e.setTranslate(l, t), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            if (Array.isArray(a))
              for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof r && o(a[e]);
            else a instanceof r && s !== a && o(a)
          },
          setTransition: function(e, s) {
            const a = t.constructor,
              i = t.controller.control;
            let l;

            function r(s) {
              s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && (0, n.n)((() => {
                s.updateAutoHeight()
              })), (0, n.j)(s.wrapperEl, (() => {
                i && s.transitionEnd()
              }))))
            }
            if (Array.isArray(i))
              for (l = 0; l < i.length; l += 1) i[l] !== s && i[l] instanceof a && r(i[l]);
            else i instanceof a && s !== i && r(i)
          }
        })
      }

      function d(e) {
        let {
          swiper: t,
          extendParams: s,
          on: i
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
          const e = t.thumbs.swiper;
          if (!e || e.destroyed) return;
          const s = e.clickedIndex,
            a = e.clickedSlide;
          if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
          if (null == s) return;
          let n;
          n = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(n) : t.slideTo(n)
        }

        function c() {
          const {
            thumbs: e
          } = t.params;
          if (l) return !1;
          l = !0;
          const s = t.constructor;
          if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), Object.assign(t.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), t.thumbs.swiper.update();
          else if ((0, n.k)(e.swiper)) {
            const a = Object.assign({}, e.swiper);
            Object.assign(a, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), t.thumbs.swiper = new s(a), r = !0
          }
          return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", o), !0
        }

        function d(e) {
          const s = t.thumbs.swiper;
          if (!s || s.destroyed) return;
          const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
          let i = 1;
          const l = t.params.thumbs.slideThumbActiveClass;
          if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.forEach((e => e.classList.remove(l))), s.params.loop || s.params.virtual && s.params.virtual.enabled)
            for (let e = 0; e < i; e += 1)(0, n.e)(s.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e => {
              e.classList.add(l)
            }));
          else
            for (let e = 0; e < i; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(l);
          const r = t.params.thumbs.autoScrollOffset,
            o = r && !s.params.loop;
          if (t.realIndex !== s.realIndex || o) {
            const n = s.activeIndex;
            let i, l;
            if (s.params.loop) {
              const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
              i = s.slides.indexOf(e), l = t.activeIndex > t.previousIndex ? "next" : "prev"
            } else i = t.realIndex, l = i > t.previousIndex ? "next" : "prev";
            o && (i += "next" === l ? r : -1 * r), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > n ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > n && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0))
          }
        }
        t.thumbs = {
          swiper: null
        }, i("beforeInit", (() => {
          const {
            thumbs: e
          } = t.params;
          if (e && e.swiper)
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
              const s = (0, a.g)(),
                n = () => {
                  const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                  if (a && a.swiper) e.swiper = a.swiper, c(), d(!0);
                  else if (a) {
                    const s = n => {
                      e.swiper = n.detail[0], a.removeEventListener("init", s), c(), d(!0), e.swiper.update(), t.update()
                    };
                    a.addEventListener("init", s)
                  }
                  return a
                },
                i = () => {
                  t.destroyed || n() || requestAnimationFrame(i)
                };
              requestAnimationFrame(i)
            } else c(), d(!0)
        })), i("slideChange update resize observerUpdate", (() => {
          d()
        })), i("setTransition", ((e, s) => {
          const a = t.thumbs.swiper;
          a && !a.destroyed && a.setTransition(s)
        })), i("beforeDestroy", (() => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && r && e.destroy()
        })), Object.assign(t.thumbs, {
          init: c,
          update: d
        })
      }

      function p(e) {
        let {
          swiper: t,
          extendParams: s,
          emit: a,
          once: i
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
        }), Object.assign(t, {
          freeMode: {
            onTouchStart: function() {
              if (t.params.cssMode) return;
              const e = t.getTranslate();
              t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                currentPos: t.rtl ? t.translate : -t.translate
              })
            },
            onTouchMove: function() {
              if (t.params.cssMode) return;
              const {
                touchEventsData: e,
                touches: s
              } = t;
              0 === e.velocities.length && e.velocities.push({
                position: s[t.isHorizontal() ? "startX" : "startY"],
                time: e.touchStartTime
              }), e.velocities.push({
                position: s[t.isHorizontal() ? "currentX" : "currentY"],
                time: (0, n.d)()
              })
            },
            onTouchEnd: function(e) {
              let {
                currentPos: s
              } = e;
              if (t.params.cssMode) return;
              const {
                params: l,
                wrapperEl: r,
                rtlTranslate: o,
                snapGrid: c,
                touchEventsData: d
              } = t, p = (0, n.d)() - d.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate()) t.slides.length < c.length ? t.slideTo(c.length - 1) : t.slideTo(t.slides.length - 1);
              else {
                if (l.freeMode.momentum) {
                  if (d.velocities.length > 1) {
                    const e = d.velocities.pop(),
                      s = d.velocities.pop(),
                      a = e.position - s.position,
                      i = e.time - s.time;
                    t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < l.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || (0, n.d)() - e.time > 300) && (t.velocity = 0)
                  } else t.velocity = 0;
                  t.velocity *= l.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                  let e = 1e3 * l.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let p = t.translate + s;
                  o && (p = -p);
                  let u, m = !1;
                  const g = 20 * Math.abs(t.velocity) * l.freeMode.momentumBounceRatio;
                  let f;
                  if (p < t.maxTranslate()) l.freeMode.momentumBounce ? (p + t.maxTranslate() < -g && (p = t.maxTranslate() - g), u = t.maxTranslate(), m = !0, d.allowMomentumBounce = !0) : p = t.maxTranslate(), l.loop && l.centeredSlides && (f = !0);
                  else if (p > t.minTranslate()) l.freeMode.momentumBounce ? (p - t.minTranslate() > g && (p = t.minTranslate() + g), u = t.minTranslate(), m = !0, d.allowMomentumBounce = !0) : p = t.minTranslate(), l.loop && l.centeredSlides && (f = !0);
                  else if (l.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < c.length; t += 1)
                      if (c[t] > -p) {
                        e = t;
                        break
                      } p = Math.abs(c[e] - p) < Math.abs(c[e - 1] - p) || "next" === t.swipeDirection ? c[e] : c[e - 1], p = -p
                  }
                  if (f && i("transitionEnd", (() => {
                      t.loopFix()
                    })), 0 !== t.velocity) {
                    if (e = o ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), l.freeMode.sticky) {
                      const s = Math.abs((o ? -p : p) - t.translate),
                        a = t.slidesSizesGrid[t.activeIndex];
                      e = s < a ? l.speed : s < 2 * a ? 1.5 * l.speed : 2.5 * l.speed
                    }
                  } else if (l.freeMode.sticky) return void t.slideToClosest();
                  l.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, n.j)(r, (() => {
                    t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(l.speed), setTimeout((() => {
                      t.setTranslate(u), (0, n.j)(r, (() => {
                        t && !t.destroyed && t.transitionEnd()
                      }))
                    }), 0))
                  }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, n.j)(r, (() => {
                    t && !t.destroyed && t.transitionEnd()
                  })))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                } else {
                  if (l.freeMode.sticky) return void t.slideToClosest();
                  l.freeMode && a("_freeModeNoMomentumRelease")
                }(!l.freeMode.momentum || p >= l.longSwipesMs) && (a("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
              }
            }
          }
        })
      }
    }
  }
]);