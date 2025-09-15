try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "78788d0b-a0f1-42f5-8ece-c2a24fbd8f67", e._sentryDebugIdIdentifier = "sentry-dbid-78788d0b-a0f1-42f5-8ece-c2a24fbd8f67")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [7662], {
    272: (e, t, r) => {
      "use strict";

      function n(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function i(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : n(t[r]) && n(e[r]) && Object.keys(t[r]).length > 0 && i(e[r], t[r])
        }))
      }
      r.d(t, {
        a: () => l,
        g: () => s
      });
      const a = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function s() {
        const e = "undefined" != typeof document ? document : {};
        return i(e, a), e
      }
      const o = {
        document: a,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function l() {
        const e = "undefined" != typeof window ? window : {};
        return i(e, o), e
      }
    },
    4162: (e, t, r) => {
      "use strict";
      r.d(t, {
        RC: () => K,
        qr: () => ee
      });
      var n = r(1913),
        i = r(272),
        a = r(6501);
      let s, o, l;

      function d() {
        return s || (s = function() {
          const e = (0, i.a)(),
            t = (0, i.g)();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), s
      }

      function c(e) {
        return void 0 === e && (e = {}), o || (o = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const r = d(),
            n = (0, i.a)(),
            a = n.navigator.platform,
            s = t || n.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            l = n.screen.width,
            c = n.screen.height,
            u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = s.match(/(iPad).*OS\s([\d_]+)/);
          const f = s.match(/(iPod)(.*OS\s([\d_]+))?/),
            m = !p && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === a;
          let g = "MacIntel" === a;
          return !p && g && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (p = s.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), g = !1), u && !h && (o.os = "android", o.android = !0), (p || m || f) && (o.os = "ios", o.ios = !0), o
        }(e)), o
      }

      function u() {
        return l || (l = function() {
          const e = (0, i.a)(),
            t = c();
          let r = !1;

          function n() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
          }
          if (n()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
              const [e, n] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
              r = e < 16 || 16 === e && n < 2
            }
          }
          const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
            s = n();
          return {
            isSafari: r || s,
            needPerspectiveFix: r,
            need3dFix: s || a && t.ios,
            isWebView: a
          }
        }()), l
      }
      var p = {
        on(e, t, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;
          const i = r ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t)
          })), n
        },
        once(e, t, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;

          function i() {
            n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
            t.apply(n, a)
          }
          return i.__emitterProxy = t, n.on(e, i, r)
        },
        onAny(e, t) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof e) return r;
          const n = t ? "unshift" : "push";
          return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const r = t.eventsAnyListeners.indexOf(e);
          return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
        },
        off(e, t) {
          const r = this;
          return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((e => {
            void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((n, i) => {
              (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(i, 1)
            }))
          })), r) : r
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, r, n;
          for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
          return "string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0], r = a.slice(1, a.length), n = e) : (t = a[0].events, r = a[0].data, n = a[0].context || e), r.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(n, [t, ...r])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(n, r)
            }))
          })), e
        }
      };
      const f = (e, t, r) => {
          t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
        },
        m = (e, t, r) => {
          t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
        },
        h = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (r) {
            let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        g = (e, t) => {
          if (!e.slides[t]) return;
          const r = e.slides[t].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading")
        },
        v = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const r = e.slides.length;
          if (!r || !t || t < 0) return;
          t = Math.min(t, r);
          const n = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const r = i,
              a = [r - t];
            return a.push(...Array.from({
              length: t
            }).map(((e, t) => r + n + t))), void e.slides.forEach(((t, r) => {
              a.includes(t.column) && g(e, r)
            }))
          }
          const a = i + n - 1;
          if (e.params.rewind || e.params.loop)
            for (let n = i - t; n <= a + t; n += 1) {
              const t = (n % r + r) % r;
              (t < i || t > a) && g(e, t)
            } else
              for (let n = Math.max(i - t, 0); n <= Math.min(a + t, r - 1); n += 1) n !== i && (n > a || n < i) && g(e, n)
        };
      var b = {
        updateSize: function() {
          const e = this;
          let t, r;
          const n = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : n.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt((0, a.p)(n, "padding-left") || 0, 10) - parseInt((0, a.p)(n, "padding-right") || 0, 10), r = r - parseInt((0, a.p)(n, "padding-top") || 0, 10) - parseInt((0, a.p)(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
            width: t,
            height: r,
            size: e.isHorizontal() ? t : r
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, r) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0)
          }
          const r = e.params,
            {
              wrapperEl: n,
              slidesEl: i,
              size: s,
              rtlTranslate: o,
              wrongRTL: l
            } = e,
            d = e.virtual && r.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            u = (0, a.e)(i, `.${e.params.slideClass}, swiper-slide`),
            p = d ? e.virtual.slides.length : u.length;
          let f = [];
          const m = [],
            h = [];
          let g = r.slidesOffsetBefore;
          "function" == typeof g && (g = r.slidesOffsetBefore.call(e));
          let v = r.slidesOffsetAfter;
          "function" == typeof v && (v = r.slidesOffsetAfter.call(e));
          const b = e.snapGrid.length,
            w = e.slidesGrid.length;
          let y = r.spaceBetween,
            S = -g,
            x = 0,
            E = 0;
          if (void 0 === s) return;
          "string" == typeof y && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * s : "string" == typeof y && (y = parseFloat(y)), e.virtualSize = -y, u.forEach((e => {
            o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), r.centeredSlides && r.cssMode && ((0, a.s)(n, "--swiper-centered-offset-before", ""), (0, a.s)(n, "--swiper-centered-offset-after", ""));
          const T = r.grid && r.grid.rows > 1 && e.grid;
          let M;
          T ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
          const C = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
          for (let n = 0; n < p; n += 1) {
            let i;
            if (M = 0, u[n] && (i = u[n]), T && e.grid.updateSlide(n, i, u), !u[n] || "none" !== (0, a.p)(i, "display")) {
              if ("auto" === r.slidesPerView) {
                C && (u[n].style[e.getDirectionLabel("width")] = "");
                const s = getComputedStyle(i),
                  o = i.style.transform,
                  l = i.style.webkitTransform;
                if (o && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), r.roundLengths) M = e.isHorizontal() ? (0, a.f)(i, "width", !0) : (0, a.f)(i, "height", !0);
                else {
                  const e = t(s, "width"),
                    r = t(s, "padding-left"),
                    n = t(s, "padding-right"),
                    a = t(s, "margin-left"),
                    o = t(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) M = e + a + o;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: s
                    } = i;
                    M = e + r + n + a + o + (s - t)
                  }
                }
                o && (i.style.transform = o), l && (i.style.webkitTransform = l), r.roundLengths && (M = Math.floor(M))
              } else M = (s - (r.slidesPerView - 1) * y) / r.slidesPerView, r.roundLengths && (M = Math.floor(M)), u[n] && (u[n].style[e.getDirectionLabel("width")] = `${M}px`);
              u[n] && (u[n].swiperSlideSize = M), h.push(M), r.centeredSlides ? (S = S + M / 2 + x / 2 + y, 0 === x && 0 !== n && (S = S - s / 2 - y), 0 === n && (S = S - s / 2 - y), Math.abs(S) < .001 && (S = 0), r.roundLengths && (S = Math.floor(S)), E % r.slidesPerGroup == 0 && f.push(S), m.push(S)) : (r.roundLengths && (S = Math.floor(S)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && f.push(S), m.push(S), S = S + M + y), e.virtualSize += M + y, x = M, E += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, s) + v, o && l && ("slide" === r.effect || "coverflow" === r.effect) && (n.style.width = `${e.virtualSize+y}px`), r.setWrapperSize && (n.style[e.getDirectionLabel("width")] = `${e.virtualSize+y}px`), T && e.grid.updateWrapperSize(M, f), !r.centeredSlides) {
            const t = [];
            for (let n = 0; n < f.length; n += 1) {
              let i = f[n];
              r.roundLengths && (i = Math.floor(i)), f[n] <= e.virtualSize - s && t.push(i)
            }
            f = t, Math.floor(e.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - s)
          }
          if (d && r.loop) {
            const t = h[0] + y;
            if (r.slidesPerGroup > 1) {
              const n = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
                i = t * r.slidesPerGroup;
              for (let e = 0; e < n; e += 1) f.push(f[f.length - 1] + i)
            }
            for (let n = 0; n < e.virtual.slidesBefore + e.virtual.slidesAfter; n += 1) 1 === r.slidesPerGroup && f.push(f[f.length - 1] + t), m.push(m[m.length - 1] + t), e.virtualSize += t
          }
          if (0 === f.length && (f = [0]), 0 !== y) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            u.filter(((e, t) => !(r.cssMode && !r.loop) || t !== u.length - 1)).forEach((e => {
              e.style[t] = `${y}px`
            }))
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t => {
              e += t + (y || 0)
            })), e -= y;
            const t = e > s ? e - s : 0;
            f = f.map((e => e <= 0 ? -g : e > t ? t + v : e))
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            h.forEach((t => {
              e += t + (y || 0)
            })), e -= y;
            const t = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
            if (e + t < s) {
              const r = (s - e - t) / 2;
              f.forEach(((e, t) => {
                f[t] = e - r
              })), m.forEach(((e, t) => {
                m[t] = e + r
              }))
            }
          }
          if (Object.assign(e, {
              slides: u,
              snapGrid: f,
              slidesGrid: m,
              slidesSizesGrid: h
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            (0, a.s)(n, "--swiper-centered-offset-before", -f[0] + "px"), (0, a.s)(n, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + r))
          }
          if (p !== c && e.emit("slidesLengthChange"), f.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== w && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(d || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const t = `${r.containerModifierClass}backface-hidden`,
              n = e.el.classList.contains(t);
            p <= r.maxBackfaceHiddenSlides ? n || e.el.classList.add(t) : n && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            r = [],
            n = t.virtual && t.params.virtual.enabled;
          let i, a = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const s = e => n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              r.push(e)
            }));
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !n) break;
                r.push(s(e))
              } else r.push(s(t.activeIndex));
          for (i = 0; i < r.length; i += 1)
            if (void 0 !== r[i]) {
              const e = r[i].offsetHeight;
              a = e > a ? e : a
            }(a || 0 === a) && (t.wrapperEl.style.height = `${a}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - r - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            r = t.params,
            {
              slides: n,
              rtlTranslate: i,
              snapGrid: a
            } = t;
          if (0 === n.length) return;
          void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
          let s = -e;
          i && (s = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let o = r.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < n.length; e += 1) {
            const l = n[e];
            let d = l.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (d -= n[0].swiperSlideOffset);
            const c = (s + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              u = (s - a[0] + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              p = -(s - d),
              m = p + t.slidesSizesGrid[e],
              h = p >= 0 && p <= t.size - t.slidesSizesGrid[e],
              g = p >= 0 && p < t.size - 1 || m > 1 && m <= t.size || p <= 0 && m >= t.size;
            g && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), f(l, g, r.slideVisibleClass), f(l, h, r.slideFullyVisibleClass), l.progress = i ? -c : c, l.originalProgress = i ? -u : u
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * r || 0
          }
          const r = t.params,
            n = t.maxTranslate() - t.minTranslate();
          let {
            progress: i,
            isBeginning: a,
            isEnd: s,
            progressLoop: o
          } = t;
          const l = a,
            d = s;
          if (0 === n) i = 0, a = !0, s = !0;
          else {
            i = (e - t.minTranslate()) / n;
            const r = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            a = r || i <= 0, s = o || i >= 1, r && (i = 0), o && (i = 1)
          }
          if (r.loop) {
            const r = t.getSlideIndexByData(0),
              n = t.getSlideIndexByData(t.slides.length - 1),
              i = t.slidesGrid[r],
              a = t.slidesGrid[n],
              s = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            o = l >= i ? (l - i) / s : (l + s - a) / s, o > 1 && (o -= 1)
          }
          Object.assign(t, {
            progress: i,
            progressLoop: o,
            isBeginning: a,
            isEnd: s
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), a && !l && t.emit("reachBeginning toEdge"), s && !d && t.emit("reachEnd toEdge"), (l && !a || d && !s) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: r,
              slidesEl: n,
              activeIndex: i
            } = e,
            s = e.virtual && r.virtual.enabled,
            o = e.grid && r.grid && r.grid.rows > 1,
            l = e => (0, a.e)(n, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
          let d, c, u;
          if (s)
            if (r.loop) {
              let t = i - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), d = l(`[data-swiper-slide-index="${t}"]`)
            } else d = l(`[data-swiper-slide-index="${i}"]`);
          else o ? (d = t.find((e => e.column === i)), u = t.find((e => e.column === i + 1)), c = t.find((e => e.column === i - 1))) : d = t[i];
          d && (o || (u = (0, a.q)(d, `.${r.slideClass}, swiper-slide`)[0], r.loop && !u && (u = t[0]), c = (0, a.r)(d, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !c && (c = t[t.length - 1]))), t.forEach((e => {
            m(e, e === d, r.slideActiveClass), m(e, e === u, r.slideNextClass), m(e, e === c, r.slidePrevClass)
          })), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: n,
              params: i,
              activeIndex: a,
              realIndex: s,
              snapIndex: o
            } = t;
          let l, d = e;
          const c = e => {
            let r = e - t.virtual.slidesBefore;
            return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
          };
          if (void 0 === d && (d = function(e) {
              const {
                slidesGrid: t,
                params: r
              } = e, n = e.rtlTranslate ? e.translate : -e.translate;
              let i;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? n >= t[e] && n < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : n >= t[e] && n < t[e + 1] && (i = e + 1) : n >= t[e] && (i = e);
              return r.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            }(t)), n.indexOf(r) >= 0) l = n.indexOf(r);
          else {
            const e = Math.min(i.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / i.slidesPerGroup)
          }
          if (l >= n.length && (l = n.length - 1), d === a && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (d === a && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const u = t.grid && i.grid && i.grid.rows > 1;
          let p;
          if (t.virtual && i.virtual.enabled && i.loop) p = c(d);
          else if (u) {
            const e = t.slides.find((e => e.column === d));
            let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)), p = Math.floor(r / i.grid.rows)
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            p = e ? parseInt(e, 10) : d
          } else p = d;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: s,
            realIndex: p,
            previousIndex: a,
            activeIndex: d
          }), t.initialized && v(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (s !== p && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const r = this,
            n = r.params;
          let i = e.closest(`.${n.slideClass}, swiper-slide`);
          !i && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !i && e.matches && e.matches(`.${n.slideClass}, swiper-slide`) && (i = e)
          }));
          let a, s = !1;
          if (i)
            for (let e = 0; e < r.slides.length; e += 1)
              if (r.slides[e] === i) {
                s = !0, a = e;
                break
              } if (!i || !s) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
          r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = a, n.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
      };

      function w(e) {
        let {
          swiper: t,
          runCallbacks: r,
          direction: n,
          step: i
        } = e;
        const {
          activeIndex: a,
          previousIndex: s
        } = t;
        let o = n;
        if (o || (o = a > s ? "next" : a < s ? "prev" : "reset"), t.emit(`transition${i}`), r && a !== s) {
          if ("reset" === o) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`), "next" === o ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
      }
      var y = {
          slideTo: function(e, t, r, n, i) {
            void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const s = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: l,
              snapGrid: d,
              slidesGrid: c,
              previousIndex: p,
              activeIndex: f,
              rtlTranslate: m,
              wrapperEl: h,
              enabled: g
            } = s;
            if (!g && !n && !i || s.destroyed || s.animating && l.preventInteractionOnTransition) return !1;
            void 0 === t && (t = s.params.speed);
            const v = Math.min(s.params.slidesPerGroupSkip, o);
            let b = v + Math.floor((o - v) / s.params.slidesPerGroup);
            b >= d.length && (b = d.length - 1);
            const w = -d[b];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * w),
                  r = Math.floor(100 * c[e]),
                  n = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1] ? t >= r && t < n - (n - r) / 2 ? o = e : t >= r && t < n && (o = e + 1) : t >= r && (o = e)
              }
            if (s.initialized && o !== f) {
              if (!s.allowSlideNext && (m ? w > s.translate && w > s.minTranslate() : w < s.translate && w < s.minTranslate())) return !1;
              if (!s.allowSlidePrev && w > s.translate && w > s.maxTranslate() && (f || 0) !== o) return !1
            }
            let y;
            o !== (p || 0) && r && s.emit("beforeSlideChangeStart"), s.updateProgress(w), y = o > f ? "next" : o < f ? "prev" : "reset";
            const S = s.virtual && s.params.virtual.enabled;
            if ((!S || !i) && (m && -w === s.translate || !m && w === s.translate)) return s.updateActiveIndex(o), l.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== l.effect && s.setTranslate(w), "reset" !== y && (s.transitionStart(r, y), s.transitionEnd(r, y)), !1;
            if (l.cssMode) {
              const e = s.isHorizontal(),
                r = m ? w : -w;
              if (0 === t) S && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), S && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                h[e ? "scrollLeft" : "scrollTop"] = r
              }))) : h[e ? "scrollLeft" : "scrollTop"] = r, S && requestAnimationFrame((() => {
                s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
              }));
              else {
                if (!s.support.smoothScroll) return (0, a.t)({
                  swiper: s,
                  targetPosition: r,
                  side: e ? "left" : "top"
                }), !0;
                h.scrollTo({
                  [e ? "left" : "top"]: r,
                  behavior: "smooth"
                })
              }
              return !0
            }
            const x = u().isSafari;
            return S && !i && x && s.isElement && s.virtual.update(!1, !1, o), s.setTransition(t), s.setTranslate(w), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(r, y), 0 === t ? s.transitionEnd(r, y) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
              s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(r, y))
            }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, r, n) {
            void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const i = this;
            if (i.destroyed) return;
            void 0 === t && (t = i.params.speed);
            const a = i.grid && i.params.grid && i.params.grid.rows > 1;
            let s = e;
            if (i.params.loop)
              if (i.virtual && i.params.virtual.enabled) s += i.virtual.slidesBefore;
              else {
                let e;
                if (a) {
                  const t = s * i.params.grid.rows;
                  e = i.slides.find((e => 1 * e.getAttribute("data-swiper-slide-index") === t)).column
                } else e = i.getSlideIndexByData(s);
                const t = a ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                  {
                    centeredSlides: r
                  } = i.params;
                let o = i.params.slidesPerView;
                "auto" === o ? o = i.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(i.params.slidesPerView, 10)), r && o % 2 == 0 && (o += 1));
                let l = t - e < o;
                if (r && (l = l || e < Math.ceil(o / 2)), n && r && "auto" !== i.params.slidesPerView && !a && (l = !1), l) {
                  const n = r ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                  i.loopFix({
                    direction: n,
                    slideTo: !0,
                    activeSlideIndex: "next" === n ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === n ? i.realIndex : void 0
                  })
                }
                if (a) {
                  const e = s * i.params.grid.rows;
                  s = i.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)).column
                } else s = i.getSlideIndexByData(s)
              } return requestAnimationFrame((() => {
              i.slideTo(s, t, r, n)
            })), i
          },
          slideNext: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this,
              {
                enabled: i,
                params: a,
                animating: s
              } = n;
            if (!i || n.destroyed) return n;
            void 0 === e && (e = n.params.speed);
            let o = a.slidesPerGroup;
            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
            const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o,
              d = n.virtual && a.virtual.enabled;
            if (a.loop) {
              if (s && !d && a.loopPreventsSliding) return !1;
              if (n.loopFix({
                  direction: "next"
                }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && a.cssMode) return requestAnimationFrame((() => {
                n.slideTo(n.activeIndex + l, e, t, r)
              })), !0
            }
            return a.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r)
          },
          slidePrev: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this,
              {
                params: i,
                snapGrid: a,
                slidesGrid: s,
                rtlTranslate: o,
                enabled: l,
                animating: d
              } = n;
            if (!l || n.destroyed) return n;
            void 0 === e && (e = n.params.speed);
            const c = n.virtual && i.virtual.enabled;
            if (i.loop) {
              if (d && !c && i.loopPreventsSliding) return !1;
              n.loopFix({
                direction: "prev"
              }), n._clientLeft = n.wrapperEl.clientLeft
            }

            function u(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = u(o ? n.translate : -n.translate),
              f = a.map((e => u(e))),
              m = i.freeMode && i.freeMode.enabled;
            let h = a[f.indexOf(p) - 1];
            if (void 0 === h && (i.cssMode || m)) {
              let e;
              a.forEach(((t, r) => {
                p >= t && (e = r)
              })), void 0 !== e && (h = m ? a[e] : a[e > 0 ? e - 1 : e])
            }
            let g = 0;
            if (void 0 !== h && (g = s.indexOf(h), g < 0 && (g = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (g = g - n.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), i.rewind && n.isBeginning) {
              const i = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
              return n.slideTo(i, e, t, r)
            }
            return i.loop && 0 === n.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
              n.slideTo(g, e, t, r)
            })), !0) : n.slideTo(g, e, t, r)
          },
          slideReset: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this;
            if (!n.destroyed) return void 0 === e && (e = n.params.speed), n.slideTo(n.activeIndex, e, t, r)
          },
          slideToClosest: function(e, t, r, n) {
            void 0 === t && (t = !0), void 0 === n && (n = .5);
            const i = this;
            if (i.destroyed) return;
            void 0 === e && (e = i.params.speed);
            let a = i.activeIndex;
            const s = Math.min(i.params.slidesPerGroupSkip, a),
              o = s + Math.floor((a - s) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[o]) {
              const e = i.snapGrid[o];
              l - e > (i.snapGrid[o + 1] - e) * n && (a += i.params.slidesPerGroup)
            } else {
              const e = i.snapGrid[o - 1];
              l - e <= (i.snapGrid[o] - e) * n && (a -= i.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, i.slidesGrid.length - 1), i.slideTo(a, e, t, r)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: r
            } = e, n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, s = e.clickedIndex;
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - n / 2 || s > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), s = e.getSlideIndex((0, a.e)(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), (0, a.n)((() => {
                e.slideTo(s)
              }))) : e.slideTo(s) : s > e.slides.length - n ? (e.loopFix(), s = e.getSlideIndex((0, a.e)(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), (0, a.n)((() => {
                e.slideTo(s)
              }))) : e.slideTo(s)
            } else e.slideTo(s)
          }
        },
        S = {
          loopCreate: function(e, t) {
            const r = this,
              {
                params: n,
                slidesEl: i
              } = r;
            if (!n.loop || r.virtual && r.params.virtual.enabled) return;
            const s = () => {
                (0, a.e)(i, `.${n.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              o = r.grid && n.grid && n.grid.rows > 1,
              l = n.slidesPerGroup * (o ? n.grid.rows : 1),
              d = r.slides.length % l != 0,
              c = o && r.slides.length % n.grid.rows != 0,
              u = e => {
                for (let t = 0; t < e; t += 1) {
                  const e = r.isElement ? (0, a.c)("swiper-slide", [n.slideBlankClass]) : (0, a.c)("div", [n.slideClass, n.slideBlankClass]);
                  r.slidesEl.append(e)
                }
              };
            d ? (n.loopAddBlankSlides ? (u(l - r.slides.length % l), r.recalcSlides(), r.updateSlides()) : (0, a.u)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), s()) : c ? (n.loopAddBlankSlides ? (u(n.grid.rows - r.slides.length % n.grid.rows), r.recalcSlides(), r.updateSlides()) : (0, a.u)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), s()) : s(), r.loopFix({
              slideRealIndex: e,
              direction: n.centeredSlides ? void 0 : "next",
              initial: t
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: r = !0,
              direction: n,
              setTranslate: i,
              activeSlideIndex: s,
              initial: o,
              byController: l,
              byMousewheel: d
            } = void 0 === e ? {} : e;
            const c = this;
            if (!c.params.loop) return;
            c.emit("beforeLoopFix");
            const {
              slides: u,
              allowSlidePrev: p,
              allowSlideNext: f,
              slidesEl: m,
              params: h
            } = c, {
              centeredSlides: g,
              initialSlide: v
            } = h;
            if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && h.virtual.enabled) return r && (h.centeredSlides || 0 !== c.snapIndex ? h.centeredSlides && c.snapIndex < h.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0) : c.slideTo(c.virtual.slides.length, 0, !1, !0)), c.allowSlidePrev = p, c.allowSlideNext = f, void c.emit("loopFix");
            let b = h.slidesPerView;
            "auto" === b ? b = c.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(h.slidesPerView, 10)), g && b % 2 == 0 && (b += 1));
            const w = h.slidesPerGroupAuto ? b : h.slidesPerGroup;
            let y = w;
            y % w != 0 && (y += w - y % w), y += h.loopAdditionalSlides, c.loopedSlides = y;
            const S = c.grid && h.grid && h.grid.rows > 1;
            u.length < b + y || "cards" === c.params.effect && u.length < b + 2 * y ? (0, a.u)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && "row" === h.grid.fill && (0, a.u)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const x = [],
              E = [],
              T = S ? Math.ceil(u.length / h.grid.rows) : u.length,
              M = o && T - v < b && !g;
            let C = M ? v : c.activeIndex;
            void 0 === s ? s = c.getSlideIndex(u.find((e => e.classList.contains(h.slideActiveClass)))) : C = s;
            const _ = "next" === n || !n,
              A = "prev" === n || !n;
            let P = 0,
              L = 0;
            const k = (S ? u[s].column : s) + (g && void 0 === i ? -b / 2 + .5 : 0);
            if (k < y) {
              P = Math.max(y - k, w);
              for (let e = 0; e < y - k; e += 1) {
                const t = e - Math.floor(e / T) * T;
                if (S) {
                  const e = T - t - 1;
                  for (let t = u.length - 1; t >= 0; t -= 1) u[t].column === e && x.push(t)
                } else x.push(T - t - 1)
              }
            } else if (k + b > T - y) {
              L = Math.max(k - (T - 2 * y), w), M && (L = Math.max(L, b - T + v + 1));
              for (let e = 0; e < L; e += 1) {
                const t = e - Math.floor(e / T) * T;
                S ? u.forEach(((e, r) => {
                  e.column === t && E.push(r)
                })) : E.push(t)
              }
            }
            if (c.__preventObserver__ = !0, requestAnimationFrame((() => {
                c.__preventObserver__ = !1
              })), "cards" === c.params.effect && u.length < b + 2 * y && (E.includes(s) && E.splice(E.indexOf(s), 1), x.includes(s) && x.splice(x.indexOf(s), 1)), A && x.forEach((e => {
                u[e].swiperLoopMoveDOM = !0, m.prepend(u[e]), u[e].swiperLoopMoveDOM = !1
              })), _ && E.forEach((e => {
                u[e].swiperLoopMoveDOM = !0, m.append(u[e]), u[e].swiperLoopMoveDOM = !1
              })), c.recalcSlides(), "auto" === h.slidesPerView ? c.updateSlides() : S && (x.length > 0 && A || E.length > 0 && _) && c.slides.forEach(((e, t) => {
                c.grid.updateSlide(t, e, c.slides)
              })), h.watchSlidesProgress && c.updateSlidesOffset(), r)
              if (x.length > 0 && A) {
                if (void 0 === t) {
                  const e = c.slidesGrid[C],
                    t = c.slidesGrid[C + P] - e;
                  d ? c.setTranslate(c.translate - t) : (c.slideTo(C + Math.ceil(P), 0, !1, !0), i && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                } else if (i) {
                  const e = S ? x.length / h.grid.rows : x.length;
                  c.slideTo(c.activeIndex + e, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate
                }
              } else if (E.length > 0 && _)
              if (void 0 === t) {
                const e = c.slidesGrid[C],
                  t = c.slidesGrid[C - L] - e;
                d ? c.setTranslate(c.translate - t) : (c.slideTo(C - L, 0, !1, !0), i && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
              } else {
                const e = S ? E.length / h.grid.rows : E.length;
                c.slideTo(c.activeIndex - e, 0, !1, !0)
              } if (c.allowSlidePrev = p, c.allowSlideNext = f, c.controller && c.controller.control && !l) {
              const e = {
                slideRealIndex: t,
                direction: n,
                setTranslate: i,
                activeSlideIndex: s,
                byController: !0
              };
              Array.isArray(c.controller.control) ? c.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === h.slidesPerView && r
                })
              })) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
                ...e,
                slideTo: c.controller.control.params.slidesPerView === h.slidesPerView && r
              })
            }
            c.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: r
              } = e;
            if (!t.loop || !r || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const n = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              n[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), n.forEach((e => {
              r.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function x(e, t, r) {
        const n = (0, i.a)(),
          {
            params: a
          } = e,
          s = a.edgeSwipeDetection,
          o = a.edgeSwipeThreshold;
        return !s || !(r <= o || r >= n.innerWidth - o) || "prevent" === s && (t.preventDefault(), !0)
      }

      function E(e) {
        const t = this,
          r = (0, i.g)();
        let n = e;
        n.originalEvent && (n = n.originalEvent);
        const s = t.touchEventsData;
        if ("pointerdown" === n.type) {
          if (null !== s.pointerId && s.pointerId !== n.pointerId) return;
          s.pointerId = n.pointerId
        } else "touchstart" === n.type && 1 === n.targetTouches.length && (s.touchId = n.targetTouches[0].identifier);
        if ("touchstart" === n.type) return void x(t, n, n.targetTouches[0].pageX);
        const {
          params: o,
          touches: l,
          enabled: d
        } = t;
        if (!d) return;
        if (!o.simulateTouch && "mouse" === n.pointerType) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let c = n.target;
        if ("wrapper" === o.touchEventsTarget && !(0, a.v)(c, t.wrapperEl)) return;
        if ("which" in n && 3 === n.which) return;
        if ("button" in n && n.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        const u = !!o.noSwipingClass && "" !== o.noSwipingClass,
          p = n.composedPath ? n.composedPath() : n.path;
        u && n.target && n.target.shadowRoot && p && (c = p[0]);
        const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          m = !(!n.target || !n.target.shadowRoot);
        if (o.noSwiping && (m ? function(e, t) {
            return void 0 === t && (t = this),
              function t(r) {
                if (!r || r === (0, i.g)() || r === (0, i.a)()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const n = r.closest(e);
                return n || r.getRootNode ? n || t(r.getRootNode().host) : null
              }(t)
          }(f, c) : c.closest(f))) return void(t.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
        l.currentX = n.pageX, l.currentY = n.pageY;
        const h = l.currentX,
          g = l.currentY;
        if (!x(t, n, h)) return;
        Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = h, l.startY = g, s.touchStartTime = (0, a.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (s.allowThresholdMove = !1);
        let v = !0;
        c.matches(s.focusableElements) && (v = !1, "SELECT" === c.nodeName && (s.isTouched = !1)), r.activeElement && r.activeElement.matches(s.focusableElements) && r.activeElement !== c && ("mouse" === n.pointerType || "mouse" !== n.pointerType && !c.matches(s.focusableElements)) && r.activeElement.blur();
        const b = v && t.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !b || c.isContentEditable || n.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", n)
      }

      function T(e) {
        const t = (0, i.g)(),
          r = this,
          n = r.touchEventsData,
          {
            params: s,
            touches: o,
            rtlTranslate: l,
            enabled: d
          } = r;
        if (!d) return;
        if (!s.simulateTouch && "mouse" === e.pointerType) return;
        let c, u = e;
        if (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type) {
          if (null !== n.touchId) return;
          if (u.pointerId !== n.pointerId) return
        }
        if ("touchmove" === u.type) {
          if (c = [...u.changedTouches].find((e => e.identifier === n.touchId)), !c || c.identifier !== n.touchId) return
        } else c = u;
        if (!n.isTouched) return void(n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", u));
        const p = c.pageX,
          f = c.pageY;
        if (u.preventedByNestedSwiper) return o.startX = p, void(o.startY = f);
        if (!r.allowTouchMove) return u.target.matches(n.focusableElements) || (r.allowClick = !1), void(n.isTouched && (Object.assign(o, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f
        }), n.touchStartTime = (0, a.d)()));
        if (s.touchReleaseOnEdges && !s.loop)
          if (r.isVertical()) {
            if (f < o.startY && r.translate <= r.maxTranslate() || f > o.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
          } else {
            if (l && (p > o.startX && -r.translate <= r.maxTranslate() || p < o.startX && -r.translate >= r.minTranslate())) return;
            if (!l && (p < o.startX && r.translate <= r.maxTranslate() || p > o.startX && r.translate >= r.minTranslate())) return
          } if (t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== u.target && "mouse" !== u.pointerType && t.activeElement.blur(), t.activeElement && u.target === t.activeElement && u.target.matches(n.focusableElements)) return n.isMoved = !0, void(r.allowClick = !1);
        n.allowTouchCallbacks && r.emit("touchMove", u), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = p, o.currentY = f;
        const m = o.currentX - o.startX,
          h = o.currentY - o.startY;
        if (r.params.threshold && Math.sqrt(m ** 2 + h ** 2) < r.params.threshold) return;
        if (void 0 === n.isScrolling) {
          let e;
          r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? n.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, n.isScrolling = r.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
        }
        if (n.isScrolling && r.emit("touchMoveOpposite", u), void 0 === n.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (n.startMoving = !0)), n.isScrolling || "touchmove" === u.type && n.preventTouchMoveFromPointerMove) return void(n.isTouched = !1);
        if (!n.startMoving) return;
        r.allowClick = !1, !s.cssMode && u.cancelable && u.preventDefault(), s.touchMoveStopPropagation && !s.nested && u.stopPropagation();
        let g = r.isHorizontal() ? m : h,
          v = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        s.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), o.diff = g, g *= s.touchRatio, l && (g = -g, v = -v);
        const b = r.touchesDirection;
        r.swipeDirection = g > 0 ? "prev" : "next", r.touchesDirection = v > 0 ? "prev" : "next";
        const w = r.params.loop && !s.cssMode,
          y = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
        if (!n.isMoved) {
          if (w && y && r.loopFix({
              direction: r.swipeDirection
            }), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: {
                bySwiperTouchMove: !0
              }
            });
            r.wrapperEl.dispatchEvent(e)
          }
          n.allowMomentumBounce = !1, !s.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", u)
        }
        if ((new Date).getTime(), !1 !== s._loopSwapReset && n.isMoved && n.allowThresholdMove && b !== r.touchesDirection && w && y && Math.abs(g) >= 1) return Object.assign(o, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f,
          startTranslate: n.currentTranslate
        }), n.loopSwapReset = !0, void(n.startTranslate = n.currentTranslate);
        r.emit("sliderMove", u), n.isMoved = !0, n.currentTranslate = g + n.startTranslate;
        let S = !0,
          x = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (x = 0), g > 0 ? (w && y && n.allowThresholdMove && n.currentTranslate > (s.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] - ("auto" !== s.slidesPerView && r.slides.length - s.slidesPerView >= 2 ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween : 0) - r.params.spaceBetween : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), n.currentTranslate > r.minTranslate() && (S = !1, s.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + g) ** x))) : g < 0 && (w && y && n.allowThresholdMove && n.currentTranslate < (s.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween + ("auto" !== s.slidesPerView && r.slides.length - s.slidesPerView >= 2 ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween : 0) : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === s.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
          }), n.currentTranslate < r.maxTranslate() && (S = !1, s.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - g) ** x))), S && (u.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), s.threshold > 0) {
          if (!(Math.abs(g) > s.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove) return n.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, n.currentTranslate = n.startTranslate, void(o.diff = r.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && r.freeMode || s.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate))
      }

      function M(e) {
        const t = this,
          r = t.touchEventsData;
        let n, i = e;
        if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
          if (n = [...i.changedTouches].find((e => e.identifier === r.touchId)), !n || n.identifier !== r.touchId) return
        } else {
          if (null !== r.touchId) return;
          if (i.pointerId !== r.pointerId) return;
          n = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && (!["pointercancel", "contextmenu"].includes(i.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        r.pointerId = null, r.touchId = null;
        const {
          params: s,
          touches: o,
          rtlTranslate: l,
          slidesGrid: d,
          enabled: c
        } = t;
        if (!c) return;
        if (!s.simulateTouch && "mouse" === i.pointerType) return;
        if (r.allowTouchCallbacks && t.emit("touchEnd", i), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && s.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        s.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = (0, a.d)(),
          p = u - r.touchStartTime;
        if (t.allowClick) {
          const e = i.path || i.composedPath && i.composedPath();
          t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), p < 300 && u - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (r.lastClickTime = (0, a.d)(), (0, a.n)((() => {
            t.destroyed || (t.allowClick = !0)
          })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let f;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, f = s.followFinger ? l ? t.translate : -t.translate : -r.currentTranslate, s.cssMode) return;
        if (s.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: f
        });
        const m = f >= -t.maxTranslate() && !t.params.loop;
        let h = 0,
          g = t.slidesSizesGrid[0];
        for (let e = 0; e < d.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
          const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== d[e + t] ? (m || f >= d[e] && f < d[e + t]) && (h = e, g = d[e + t] - d[e]) : (m || f >= d[e]) && (h = e, g = d[d.length - 1] - d[d.length - 2])
        }
        let v = null,
          b = null;
        s.rewind && (t.isBeginning ? b = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
        const w = (f - d[h]) / g,
          y = h < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (p > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (w >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? v : h + y) : t.slideTo(h)), "prev" === t.swipeDirection && (w > 1 - s.longSwipesRatio ? t.slideTo(h + y) : null !== b && w < 0 && Math.abs(w) > s.longSwipesRatio ? t.slideTo(b) : t.slideTo(h))
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || i.target !== t.navigation.nextEl && i.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + y), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : h)) : i.target === t.navigation.nextEl ? t.slideTo(h + y) : t.slideTo(h)
        }
      }

      function C() {
        const e = this,
          {
            params: t,
            el: r
          } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: n,
          allowSlidePrev: i,
          snapGrid: a
        } = e, s = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = s && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !s ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
      }

      function _(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function A() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: r,
            enabled: n
          } = e;
        if (!n) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const a = e.maxTranslate() - e.minTranslate();
        i = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, i !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function P(e) {
        const t = this;
        h(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function L() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const k = (e, t) => {
          const r = (0, i.g)(),
            {
              params: n,
              el: a,
              wrapperEl: s,
              device: o
            } = e,
            l = !!n.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          a && "string" != typeof a && (r[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), a[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), a[d]("pointerdown", e.onTouchStart, {
            passive: !1
          }), r[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("touchend", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerup", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerout", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), r[d]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (n.preventClicks || n.preventClicksPropagation) && a[d]("click", e.onClick, !0), n.cssMode && s[d]("scroll", e.onScroll), n.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", C, !0) : e[c]("observerUpdate", C, !0), a[d]("load", e.onLoad, {
            capture: !0
          }))
        },
        I = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var O = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };

      function R(e, t) {
        return function(r) {
          void 0 === r && (r = {});
          const n = Object.keys(r)[0],
            i = r[n];
          "object" == typeof i && null !== i ? (!0 === e[n] && (e[n] = {
            enabled: !0
          }), "navigation" === n && e[n] && e[n].enabled && !e[n].prevEl && !e[n].nextEl && (e[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && e[n] && e[n].enabled && !e[n].el && (e[n].auto = !0), n in e && "enabled" in i ? ("object" != typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
            enabled: !1
          }), (0, a.w)(t, r)) : (0, a.w)(t, r)) : (0, a.w)(t, r)
        }
      }
      const F = {
          eventsEmitter: p,
          update: b,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: r,
                translate: n,
                wrapperEl: i
              } = this;
              if (t.virtualTranslate) return r ? -n : n;
              if (t.cssMode) return n;
              let s = (0, a.j)(i, e);
              return s += this.cssOverflowAdjustment(), r && (s = -s), s || 0
            },
            setTranslate: function(e, t) {
              const r = this,
                {
                  rtlTranslate: n,
                  params: i,
                  wrapperEl: a,
                  progress: s
                } = r;
              let o, l = 0,
                d = 0;
              r.isHorizontal() ? l = n ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : d, i.cssMode ? a[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -d : i.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : d -= r.cssOverflowAdjustment(), a.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
              const c = r.maxTranslate() - r.minTranslate();
              o = 0 === c ? 0 : (e - r.minTranslate()) / c, o !== s && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, r, n, i) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === n && (n = !0);
              const s = this,
                {
                  params: o,
                  wrapperEl: l
                } = s;
              if (s.animating && o.preventInteractionOnTransition) return !1;
              const d = s.minTranslate(),
                c = s.maxTranslate();
              let u;
              if (u = n && e > d ? d : n && e < c ? c : e, s.updateProgress(u), o.cssMode) {
                const e = s.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -u;
                else {
                  if (!s.support.smoothScroll) return (0, a.t)({
                    swiper: s,
                    targetPosition: -u,
                    side: e ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [e ? "left" : "top"]: -u,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (s.setTransition(0), s.setTranslate(u), r && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(u), r && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, s.animating = !1, r && s.emit("transitionEnd"))
              }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const r = this;
              r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), r.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: n
                } = r;
              n.cssMode || (n.autoHeight && r.updateAutoHeight(), w({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: n
                } = r;
              r.animating = !1, n.cssMode || (r.setTransition(0), w({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: y,
          loop: S,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                t.__preventObserver__ = !1
              }))
            },
            unsetGrabCursor: function() {
              const e = this;
              e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                e.__preventObserver__ = !1
              })))
            }
          },
          events: {
            attachEvents: function() {
              const e = this,
                {
                  params: t
                } = e;
              e.onTouchStart = E.bind(e), e.onTouchMove = T.bind(e), e.onTouchEnd = M.bind(e), e.onDocumentTouchStart = L.bind(e), t.cssMode && (e.onScroll = A.bind(e)), e.onClick = _.bind(e), e.onLoad = P.bind(e), k(e, "on")
            },
            detachEvents: function() {
              k(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: r,
                  params: n,
                  el: s
                } = e,
                o = n.breakpoints;
              if (!o || o && 0 === Object.keys(o).length) return;
              const l = (0, i.g)(),
                d = "window" !== n.breakpointsBase && n.breakpointsBase ? "container" : n.breakpointsBase,
                c = ["window", "container"].includes(n.breakpointsBase) || !n.breakpointsBase ? e.el : l.querySelector(n.breakpointsBase),
                u = e.getBreakpoint(o, d, c);
              if (!u || e.currentBreakpoint === u) return;
              const p = (u in o ? o[u] : void 0) || e.originalParams,
                f = I(e, n),
                m = I(e, p),
                h = e.params.grabCursor,
                g = p.grabCursor,
                v = n.enabled;
              f && !m ? (s.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !f && m && (s.classList.add(`${n.containerModifierClass}grid`), (p.grid.fill && "column" === p.grid.fill || !p.grid.fill && "column" === n.grid.fill) && s.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), h && !g ? e.unsetGrabCursor() : !h && g && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === p[t]) return;
                const r = n[t] && n[t].enabled,
                  i = p[t] && p[t].enabled;
                r && !i && e[t].disable(), !r && i && e[t].enable()
              }));
              const b = p.direction && p.direction !== n.direction,
                w = n.loop && (p.slidesPerView !== n.slidesPerView || b),
                y = n.loop;
              b && r && e.changeDirection(), (0, a.w)(e.params, p);
              const S = e.params.enabled,
                x = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), v && !S ? e.disable() : !v && S && e.enable(), e.currentBreakpoint = u, e.emit("_beforeBreakpoint", p), r && (w ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !y && x ? (e.loopCreate(t), e.updateSlides()) : y && !x && e.loopDestroy()), e.emit("breakpoint", p)
            },
            getBreakpoint: function(e, t, r) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
              let n = !1;
              const a = (0, i.a)(),
                s = "window" === t ? a.innerHeight : r.clientHeight,
                o = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: s * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: i,
                  value: s
                } = o[e];
                "window" === t ? a.matchMedia(`(min-width: ${s}px)`).matches && (n = i) : s <= r.clientWidth && (n = i)
              }
              return n || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: r
                } = e,
                {
                  slidesOffsetBefore: n
                } = r;
              if (n) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                e.isLocked = e.size > r
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: r,
                  rtl: n,
                  el: i,
                  device: a
                } = e,
                s = function(e, t) {
                  const r = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((n => {
                      e[n] && r.push(t + n)
                    })) : "string" == typeof e && r.push(t + e)
                  })), r
                }(["initialized", r.direction, {
                  "free-mode": e.params.freeMode && r.freeMode.enabled
                }, {
                  autoheight: r.autoHeight
                }, {
                  rtl: n
                }, {
                  grid: r.grid && r.grid.rows > 1
                }, {
                  "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                }, {
                  android: a.android
                }, {
                  ios: a.ios
                }, {
                  "css-mode": r.cssMode
                }, {
                  centered: r.cssMode && r.centeredSlides
                }, {
                  "watch-progress": r.watchSlidesProgress
                }], r.containerModifierClass);
              t.push(...s), i.classList.add(...t), e.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: e,
                classNames: t
              } = this;
              e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
            }
          }
        },
        V = {};
      class G {
        constructor() {
          let e, t;
          for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
          1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = (0, a.w)({}, t), e && !t.el && (t.el = e);
          const o = (0, i.g)();
          if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
            const e = [];
            return o.querySelectorAll(t.el).forEach((r => {
              const n = (0, a.w)({}, t, {
                el: r
              });
              e.push(new G(n))
            })), e
          }
          const l = this;
          l.__swiper__ = !0, l.support = d(), l.device = c({
            userAgent: t.userAgent
          }), l.browser = u(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
          const p = {};
          l.modules.forEach((e => {
            e({
              params: t,
              swiper: l,
              extendParams: R(t, p),
              on: l.on.bind(l),
              once: l.once.bind(l),
              off: l.off.bind(l),
              emit: l.emit.bind(l)
            })
          }));
          const f = (0, a.w)({}, O, p);
          return l.params = (0, a.w)({}, f, V, t), l.originalParams = (0, a.w)({}, l.params), l.passedParams = (0, a.w)({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
            l.on(e, l.params.on[e])
          })), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === l.params.direction,
            isVertical: () => "vertical" === l.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: l.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), l.emit("_swiper"), l.params.init && l.init(), l
        }
        getDirectionLabel(e) {
          return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          } [e]
        }
        getSlideIndex(e) {
          const {
            slidesEl: t,
            params: r
          } = this, n = (0, a.e)(t, `.${r.slideClass}, swiper-slide`), i = (0, a.h)(n[0]);
          return (0, a.h)(e) - i
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)))
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = (0, a.e)(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
          const e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
          const e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const n = r.minTranslate(),
            i = (r.maxTranslate() - n) * e + n;
          r.translateTo(i, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((r => {
            const n = e.getSlideClasses(r);
            t.push({
              slideEl: r,
              classNames: n
            }), e.emit("_slideClass", r, n)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: n,
            slidesGrid: i,
            slidesSizesGrid: a,
            size: s,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let e, t = n[o] ? Math.ceil(n[o].swiperSlideSize) : 0;
            for (let r = o + 1; r < n.length; r += 1) n[r] && !e && (t += Math.ceil(n[r].swiperSlideSize), l += 1, t > s && (e = !0));
            for (let r = o - 1; r >= 0; r -= 1) n[r] && !e && (t += n[r].swiperSlideSize, l += 1, t > s && (e = !0))
          } else if ("current" === e)
            for (let e = o + 1; e < n.length; e += 1)(t ? i[e] + a[e] - i[o] < s : i[e] - i[o] < s) && (l += 1);
          else
            for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < s && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: r
          } = e;

          function n() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let i;
          if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && h(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) n(), r.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
              const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
              i = e.slideTo(t.length - 1, 0, !1, !0)
            } else i = e.slideTo(e.activeIndex, 0, !1, !0);
            i || n()
          }
          r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            n = r.params.direction;
          return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${n}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), r.emit("changeDirection"), t && r.update()), r
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let r = e || t.params.el;
          if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
          r.swiper = t, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(n()) : (0, a.e)(r, n())[0];
          return !i && t.params.createElements && (i = (0, a.c)("div", t.params.wrapperClass), r.append(i), (0, a.e)(r, `.${t.params.slideClass}`).forEach((e => {
            i.append(e)
          }))), Object.assign(t, {
            el: r,
            wrapperEl: i,
            slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : i,
            hostEl: t.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === (0, a.p)(r, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === (0, a.p)(r, "direction")),
            wrongRTL: "-webkit-box" === (0, a.p)(i, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
          const r = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((e => {
            e.complete ? h(t, e) : e.addEventListener("load", (e => {
              h(t, e.target)
            }))
          })), v(t), t.initialized = !0, v(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            {
              params: n,
              el: i,
              wrapperEl: s,
              slides: o
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), s && s.removeAttribute("style"), o && o.length && o.forEach((e => {
            e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
            r.off(e)
          })), !1 !== e && (r.el && "string" != typeof r.el && (r.el.swiper = null), (0, a.x)(r)), r.destroyed = !0), null
        }
        static extendDefaults(e) {
          (0, a.w)(V, e)
        }
        static get extendedDefaults() {
          return V
        }
        static get defaults() {
          return O
        }
        static installModule(e) {
          G.prototype.__modules__ || (G.prototype.__modules__ = []);
          const t = G.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => G.installModule(e))), G) : (G.installModule(e), G)
        }
      }
      Object.keys(F).forEach((e => {
        Object.keys(F[e]).forEach((t => {
          G.prototype[t] = F[e][t]
        }))
      })), G.use([function(e) {
        let {
          swiper: t,
          on: r,
          emit: n
        } = e;
        const a = (0, i.a)();
        let s = null,
          o = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
          },
          d = () => {
            t && !t.destroyed && t.initialized && n("orientationchange")
          };
        r("init", (() => {
          t.params.resizeObserver && void 0 !== a.ResizeObserver ? t && !t.destroyed && t.initialized && (s = new ResizeObserver((e => {
            o = a.requestAnimationFrame((() => {
              const {
                width: r,
                height: n
              } = t;
              let i = r,
                a = n;
              e.forEach((e => {
                let {
                  contentBoxSize: r,
                  contentRect: n,
                  target: s
                } = e;
                s && s !== t.el || (i = n ? n.width : (r[0] || r).inlineSize, a = n ? n.height : (r[0] || r).blockSize)
              })), i === r && a === n || l()
            }))
          })), s.observe(t.el)) : (a.addEventListener("resize", l), a.addEventListener("orientationchange", d))
        })), r("destroy", (() => {
          o && a.cancelAnimationFrame(o), s && s.unobserve && t.el && (s.unobserve(t.el), s = null), a.removeEventListener("resize", l), a.removeEventListener("orientationchange", d)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: r,
          on: n,
          emit: s
        } = e;
        const o = [],
          l = (0, i.a)(),
          d = function(e, r) {
            void 0 === r && (r = {});
            const n = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void s("observerUpdate", e[0]);
              const r = function() {
                s("observerUpdate", e[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(r) : l.setTimeout(r, 0)
            }));
            n.observe(e, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: t.isElement || (void 0 === r.childList || r).childList,
              characterData: void 0 === r.characterData || r.characterData
            }), o.push(n)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), n("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = (0, a.a)(t.hostEl);
              for (let t = 0; t < e.length; t += 1) d(e[t])
            }
            d(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), d(t.wrapperEl, {
              attributes: !1
            })
          }
        })), n("destroy", (() => {
          o.forEach((e => {
            e.disconnect()
          })), o.splice(0, o.length)
        }))
      }]);
      const D = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function N(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function z(e, t) {
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : N(t[r]) && N(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : z(e[r], t[r]) : e[r] = t[r]
        }))
      }

      function H(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function W(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function B(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function j(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          r = [];
        return t.forEach((e => {
          r.indexOf(e) < 0 && r.push(e)
        })), r.join(" ")
      }

      function X(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function Y() {
        return Y = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Y.apply(this, arguments)
      }

      function Z(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function $(e) {
        const t = [];
        return n.Children.toArray(e).forEach((e => {
          Z(e) ? t.push(e) : e.props && e.props.children && $(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function U(e) {
        const t = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return n.Children.toArray(e).forEach((e => {
          if (Z(e)) t.push(e);
          else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const n = $(e.props.children);
            n.length > 0 ? n.forEach((e => t.push(e))) : r["container-end"].push(e)
          } else r["container-end"].push(e)
        })), {
          slides: t,
          slots: r
        }
      }

      function J(e, t) {
        return "undefined" == typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
      }
      const q = (0, n.createContext)(null),
        Q = (0, n.createContext)(null),
        K = (0, n.forwardRef)((function(e, t) {
          let {
            className: r,
            tag: i = "div",
            wrapperTag: a = "div",
            children: s,
            onSwiper: o,
            ...l
          } = void 0 === e ? {} : e, d = !1;
          const [c, u] = (0, n.useState)("swiper"), [p, f] = (0, n.useState)(null), [m, h] = (0, n.useState)(!1), g = (0, n.useRef)(!1), v = (0, n.useRef)(null), b = (0, n.useRef)(null), w = (0, n.useRef)(null), y = (0, n.useRef)(null), S = (0, n.useRef)(null), x = (0, n.useRef)(null), E = (0, n.useRef)(null), T = (0, n.useRef)(null), {
            params: M,
            passedParams: C,
            rest: _,
            events: A
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const r = {
                on: {}
              },
              n = {},
              i = {};
            z(r, O), r._emitClasses = !0, r.init = !1;
            const a = {},
              s = D.map((e => e.replace(/_/, ""))),
              o = Object.assign({}, e);
            return Object.keys(o).forEach((o => {
              void 0 !== e[o] && (s.indexOf(o) >= 0 ? N(e[o]) ? (r[o] = {}, i[o] = {}, z(r[o], e[o]), z(i[o], e[o])) : (r[o] = e[o], i[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? n[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : a[o] = e[o])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
            })), {
              params: r,
              passedParams: i,
              rest: a,
              events: n
            }
          }(l), {
            slides: P,
            slots: L
          } = U(s), k = () => {
            h(!m)
          };
          Object.assign(M.on, {
            _containerClasses(e, t) {
              u(t)
            }
          });
          const I = () => {
            Object.assign(M.on, A), d = !0;
            const e = {
              ...M
            };
            if (delete e.wrapperClass, b.current = new G(e), b.current.virtual && b.current.params.virtual.enabled) {
              b.current.virtual.slides = P;
              const e = {
                cache: !1,
                slides: P,
                renderExternal: f,
                renderExternalUpdate: !1
              };
              z(b.current.params.virtual, e), z(b.current.originalParams.virtual, e)
            }
          };
          return v.current || I(), b.current && b.current.on("_beforeBreakpoint", k), (0, n.useEffect)((() => () => {
            b.current && b.current.off("_beforeBreakpoint", k)
          })), (0, n.useEffect)((() => {
            !g.current && b.current && (b.current.emitSlidesClasses(), g.current = !0)
          })), J((() => {
            if (t && (t.current = v.current), v.current) return b.current.destroyed && I(),
              function(e, t) {
                let {
                  el: r,
                  nextEl: n,
                  prevEl: i,
                  paginationEl: a,
                  scrollbarEl: s,
                  swiper: o
                } = e;
                H(t) && n && i && (o.params.navigation.nextEl = n, o.originalParams.navigation.nextEl = n, o.params.navigation.prevEl = i, o.originalParams.navigation.prevEl = i), W(t) && a && (o.params.pagination.el = a, o.originalParams.pagination.el = a), B(t) && s && (o.params.scrollbar.el = s, o.originalParams.scrollbar.el = s), o.init(r)
              }({
                el: v.current,
                nextEl: S.current,
                prevEl: x.current,
                paginationEl: E.current,
                scrollbarEl: T.current,
                swiper: b.current
              }, M), o && !b.current.destroyed && o(b.current), () => {
                b.current && !b.current.destroyed && b.current.destroy(!0, !1)
              }
          }), []), J((() => {
            !d && A && b.current && Object.keys(A).forEach((e => {
              b.current.on(e, A[e])
            }));
            const e = function(e, t, r, n, i) {
              const a = [];
              if (!t) return a;
              const s = e => {
                a.indexOf(e) < 0 && a.push(e)
              };
              if (r && n) {
                const e = n.map(i),
                  t = r.map(i);
                e.join("") !== t.join("") && s("children"), n.length !== r.length && s("children")
              }
              return D.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((r => {
                if (r in e && r in t)
                  if (N(e[r]) && N(t[r])) {
                    const n = Object.keys(e[r]),
                      i = Object.keys(t[r]);
                    n.length !== i.length ? s(r) : (n.forEach((n => {
                      e[r][n] !== t[r][n] && s(r)
                    })), i.forEach((n => {
                      e[r][n] !== t[r][n] && s(r)
                    })))
                  } else e[r] !== t[r] && s(r)
              })), a
            }(C, w.current, P, y.current, (e => e.key));
            return w.current = C, y.current = P, e.length && b.current && !b.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: r,
                passedParams: n,
                changedParams: i,
                nextEl: a,
                prevEl: s,
                scrollbarEl: o,
                paginationEl: l
              } = e;
              const d = i.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: u,
                  navigation: p,
                  scrollbar: f,
                  virtual: m,
                  thumbs: h
                } = t;
              let g, v, b, w, y, S, x, E;
              i.includes("thumbs") && n.thumbs && n.thumbs.swiper && !n.thumbs.swiper.destroyed && c.thumbs && (!c.thumbs.swiper || c.thumbs.swiper.destroyed) && (g = !0), i.includes("controller") && n.controller && n.controller.control && c.controller && !c.controller.control && (v = !0), i.includes("pagination") && n.pagination && (n.pagination.el || l) && (c.pagination || !1 === c.pagination) && u && !u.el && (b = !0), i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || o) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (w = !0), i.includes("navigation") && n.navigation && (n.navigation.prevEl || s) && (n.navigation.nextEl || a) && (c.navigation || !1 === c.navigation) && p && !p.prevEl && !p.nextEl && (y = !0);
              const T = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              i.includes("loop") && t.isElement && (c.loop && !n.loop ? S = !0 : !c.loop && n.loop ? x = !0 : E = !0), d.forEach((e => {
                if (N(c[e]) && N(n[e])) Object.assign(c[e], n[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in n[e]) || n[e].enabled || T(e);
                else {
                  const t = n[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = n[e] : !1 === t && T(e)
                }
              })), d.includes("controller") && !v && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), i.includes("children") && r && m && c.virtual.enabled ? (m.slides = r, m.update(!0)) : i.includes("virtual") && m && c.virtual.enabled && (r && (m.slides = r), m.update(!0)), i.includes("children") && r && c.loop && (E = !0), g && h.init() && h.update(!0), v && (t.controller.control = c.controller.control), b && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (c.pagination.el = l), u.init(), u.render(), u.update()), w && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), t.el.appendChild(o)), o && (c.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()), y && (t.isElement && (a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-next"), a.innerHTML = t.hostEl.constructor.nextButtonSvg, a.part.add("button-next"), t.el.appendChild(a)), s && "string" != typeof s || (s = document.createElement("div"), s.classList.add("swiper-button-prev"), s.innerHTML = t.hostEl.constructor.prevButtonSvg, s.part.add("button-prev"), t.el.appendChild(s))), a && (c.navigation.nextEl = a), s && (c.navigation.prevEl = s), p.init(), p.update()), i.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev), i.includes("direction") && t.changeDirection(n.direction, !1), (S || E) && t.loopDestroy(), (x || E) && t.loopCreate(), t.update()
            }({
              swiper: b.current,
              slides: P,
              passedParams: C,
              changedParams: e,
              nextEl: S.current,
              prevEl: x.current,
              scrollbarEl: T.current,
              paginationEl: E.current
            }), () => {
              A && b.current && Object.keys(A).forEach((e => {
                b.current.off(e, A[e])
              }))
            }
          })), J((() => {
            var e;
            !(e = b.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [p]), n.createElement(i, Y({
            ref: v,
            className: j(`${c}${r?` ${r}`:""}`)
          }, _), n.createElement(Q.Provider, {
            value: b.current
          }, L["container-start"], n.createElement(a, {
            className: X(M.wrapperClass)
          }, L["wrapper-start"], M.virtual ? function(e, t, r) {
            if (!r) return null;
            const i = e => {
                let r = e;
                return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
              },
              a = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                top: `${r.offset}px`
              },
              {
                from: s,
                to: o
              } = r,
              l = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < d; e += 1) e >= s && e <= o && c.push(t[i(e)]);
            return c.map(((t, r) => n.cloneElement(t, {
              swiper: e,
              style: a,
              key: t.props.virtualIndex || t.key || `slide-${r}`
            })))
          }(b.current, P, p) : P.map(((e, t) => n.cloneElement(e, {
            swiper: b.current,
            swiperSlideIndex: t
          }))), L["wrapper-end"]), H(M) && n.createElement(n.Fragment, null, n.createElement("div", {
            ref: x,
            className: "swiper-button-prev"
          }), n.createElement("div", {
            ref: S,
            className: "swiper-button-next"
          })), B(M) && n.createElement("div", {
            ref: T,
            className: "swiper-scrollbar"
          }), W(M) && n.createElement("div", {
            ref: E,
            className: "swiper-pagination"
          }), L["container-end"]))
        }));
      K.displayName = "Swiper";
      const ee = (0, n.forwardRef)((function(e, t) {
        let {
          tag: r = "div",
          children: i,
          className: a = "",
          swiper: s,
          zoom: o,
          lazy: l,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...u
        } = void 0 === e ? {} : e;
        const p = (0, n.useRef)(null),
          [f, m] = (0, n.useState)("swiper-slide"),
          [h, g] = (0, n.useState)(!1);

        function v(e, t, r) {
          t === p.current && m(r)
        }
        J((() => {
          if (void 0 !== c && (p.current.swiperSlideIndex = c), t && (t.current = p.current), p.current && s) {
            if (!s.destroyed) return s.on("_slideClass", v), () => {
              s && s.off("_slideClass", v)
            };
            "swiper-slide" !== f && m("swiper-slide")
          }
        })), J((() => {
          s && p.current && !s.destroyed && m(s.getSlideClasses(p.current))
        }), [s]);
        const b = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          w = () => "function" == typeof i ? i(b) : i;
        return n.createElement(r, Y({
          ref: p,
          className: j(`${f}${a?` ${a}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            g(!0)
          }
        }, u), o && n.createElement(q.Provider, {
          value: b
        }, n.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, w(), l && !h && n.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && n.createElement(q.Provider, {
          value: b
        }, w(), l && !h && n.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      ee.displayName = "SwiperSlide"
    },
    6327: (e, t, r) => {
      "use strict";
      r.d(t, {
        Wx: () => d
      });
      var n = r(2229),
        i = (Object.defineProperty, new Map),
        a = new WeakMap,
        s = 0,
        o = void 0;

      function l(e, t, r = {}, n = o) {
        if (void 0 === window.IntersectionObserver && void 0 !== n) {
          const i = e.getBoundingClientRect();
          return t(n, {
            isIntersecting: n,
            target: e,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: i,
            intersectionRect: i,
            rootBounds: i
          }), () => {}
        }
        const {
          id: l,
          observer: d,
          elements: c
        } = function(e) {
          const t = function(e) {
            return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
              return `${t}_${"root"===t?(r=e.root,r?(a.has(r)||(s+=1,a.set(r,s.toString())),a.get(r)):"0"):e[t]}`;
              var r
            })).toString()
          }(e);
          let r = i.get(t);
          if (!r) {
            const n = new Map;
            let a;
            const s = new IntersectionObserver((t => {
              t.forEach((t => {
                var r;
                const i = t.isIntersecting && a.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i), null == (r = n.get(t.target)) || r.forEach((e => {
                  e(i, t)
                }))
              }))
            }), e);
            a = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
              id: t,
              observer: s,
              elements: n
            }, i.set(t, r)
          }
          return r
        }(r), u = c.get(e) || [];
        return c.has(e) || c.set(e, u), u.push(t), d.observe(e),
          function() {
            u.splice(u.indexOf(t), 1), 0 === u.length && (c.delete(e), d.unobserve(e)), 0 === c.size && (d.disconnect(), i.delete(l))
          }
      }

      function d({
        threshold: e,
        delay: t,
        trackVisibility: r,
        rootMargin: i,
        root: a,
        triggerOnce: s,
        skip: o,
        initialInView: d,
        fallbackInView: c,
        onChange: u
      } = {}) {
        var p;
        const [f, m] = n.useState(null), h = n.useRef(u), [g, v] = n.useState({
          inView: !!d,
          entry: void 0
        });
        h.current = u, n.useEffect((() => {
          if (o || !f) return;
          let n;
          return n = l(f, ((e, t) => {
            v({
              inView: e,
              entry: t
            }), h.current && h.current(e, t), t.isIntersecting && s && n && (n(), n = void 0)
          }), {
            root: a,
            rootMargin: i,
            threshold: e,
            trackVisibility: r,
            delay: t
          }, c), () => {
            n && n()
          }
        }), [Array.isArray(e) ? e.toString() : e, f, a, i, s, o, r, c, t]);
        const b = null == (p = g.entry) ? void 0 : p.target,
          w = n.useRef(void 0);
        f || !b || s || o || w.current === b || (w.current = b, v({
          inView: !!d,
          entry: void 0
        }));
        const y = [m, g.inView, g.entry];
        return y.ref = y[0], y.inView = y[1], y.entry = y[2], y
      }
      n.Component
    },
    6501: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => y,
        c: () => h,
        d: () => s,
        e: () => p,
        f: () => S,
        h: () => w,
        j: () => o,
        m: () => x,
        n: () => a,
        p: () => b,
        q: () => v,
        r: () => g,
        s: () => c,
        t: () => u,
        u: () => m,
        v: () => f,
        w: () => d,
        x: () => i
      });
      var n = r(272);

      function i(e) {
        const t = e;
        Object.keys(t).forEach((e => {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        }))
      }

      function a(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function s() {
        return Date.now()
      }

      function o(e, t) {
        void 0 === t && (t = "x");
        const r = (0, n.a)();
        let i, a, s;
        const o = function(e) {
          const t = (0, n.a)();
          let r;
          return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
        }(e);
        return r.WebKitCSSMatrix ? (a = o.transform || o.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((e => e.replace(",", "."))).join(", ")), s = new r.WebKitCSSMatrix("none" === a ? "" : a)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = s.toString().split(",")), "x" === t && (a = r.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (a = r.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), a || 0
      }

      function l(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function d() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i && (r = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
            const r = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, n = r.length; t < n; t += 1) {
              const n = r[t],
                a = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== a && a.enumerable && (l(e[n]) && l(i[n]) ? i[n].__swiper__ ? e[n] = i[n] : d(e[n], i[n]) : !l(e[n]) && l(i[n]) ? (e[n] = {}, i[n].__swiper__ ? e[n] = i[n] : d(e[n], i[n])) : e[n] = i[n])
            }
          }
        }
        var r;
        return e
      }

      function c(e, t, r) {
        e.style.setProperty(t, r)
      }

      function u(e) {
        let {
          swiper: t,
          targetPosition: r,
          side: i
        } = e;
        const a = (0, n.a)(),
          s = -t.translate;
        let o, l = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > s ? "next" : "prev",
          u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          p = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / d, 1), 0),
              n = .5 - Math.cos(e * Math.PI) / 2;
            let c = s + n * (r - s);
            if (u(c, r) && (c = r), t.wrapperEl.scrollTo({
                [i]: c
              }), u(c, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [i]: c
              })
            })), void a.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = a.requestAnimationFrame(p)
          };
        p()
      }

      function p(e, t) {
        void 0 === t && (t = "");
        const r = (0, n.a)(),
          i = [...e.children];
        return r.HTMLSlotElement && e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t ? i.filter((e => e.matches(t))) : i
      }

      function f(e, t) {
        const r = (0, n.a)();
        let i = t.contains(e);
        return !i && r.HTMLSlotElement && t instanceof HTMLSlotElement && (i = [...t.assignedElements()].includes(e), i || (i = function(e, t) {
          const r = [t];
          for (; r.length > 0;) {
            const t = r.shift();
            if (e === t) return !0;
            r.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
          }
        }(e, t))), i
      }

      function m(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function h(e, t) {
        void 0 === t && (t = []);
        const r = document.createElement(e);
        return r.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), r
      }

      function g(e, t) {
        const r = [];
        for (; e.previousElementSibling;) {
          const n = e.previousElementSibling;
          t ? n.matches(t) && r.push(n) : r.push(n), e = n
        }
        return r
      }

      function v(e, t) {
        const r = [];
        for (; e.nextElementSibling;) {
          const n = e.nextElementSibling;
          t ? n.matches(t) && r.push(n) : r.push(n), e = n
        }
        return r
      }

      function b(e, t) {
        return (0, n.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function w(e) {
        let t, r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
          return t
        }
      }

      function y(e, t) {
        const r = [];
        let n = e.parentElement;
        for (; n;) t ? n.matches(t) && r.push(n) : r.push(n), n = n.parentElement;
        return r
      }

      function S(e, t, r) {
        const i = (0, n.a)();
        return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }

      function x(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
      }
    },
    7545: (e, t, r) => {
      "use strict";
      r.d(t, {
        dK: () => a
      }), r(272);
      var n = r(6501);

      function i(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function a(e) {
        let {
          swiper: t,
          extendParams: r,
          on: a,
          emit: s
        } = e;
        const o = "swiper-pagination";
        let l;
        r({
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

        function c() {
          return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function u(e, r) {
          const {
            bulletActiveClass: n
          } = t.params.pagination;
          e && (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${n}-${r}`), (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${n}-${r}-${r}`))
        }

        function p(e) {
          const r = e.target.closest(i(t.params.pagination.bulletClass));
          if (!r) return;
          e.preventDefault();
          const a = (0, n.h)(r) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === a) return;
            const e = (s = t.realIndex, o = a, (o %= l = t.slides.length) == 1 + (s %= l) ? "next" : o === s - 1 ? "previous" : void 0);
            "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(a)
          } else t.slideTo(a);
          var s, o, l
        }

        function f() {
          const e = t.rtl,
            r = t.params.pagination;
          if (c()) return;
          let a, o, p = t.pagination.el;
          p = (0, n.m)(p);
          const f = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            m = t.params.loop ? Math.ceil(f / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (o = t.previousRealIndex || 0, a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex, o = t.previousSnapIndex) : (o = t.previousIndex || 0, a = t.activeIndex || 0), "bullets" === r.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const i = t.pagination.bullets;
            let s, c, f;
            if (r.dynamicBullets && (l = (0, n.f)(i[0], t.isHorizontal() ? "width" : "height", !0), p.forEach((e => {
                e.style[t.isHorizontal() ? "width" : "height"] = l * (r.dynamicMainBullets + 4) + "px"
              })), r.dynamicMainBullets > 1 && void 0 !== o && (d += a - (o || 0), d > r.dynamicMainBullets - 1 ? d = r.dynamicMainBullets - 1 : d < 0 && (d = 0)), s = Math.max(a - d, 0), c = s + (Math.min(i.length, r.dynamicMainBullets) - 1), f = (c + s) / 2), i.forEach((e => {
                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${r.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                e.classList.remove(...t)
              })), p.length > 1) i.forEach((e => {
              const i = (0, n.h)(e);
              i === a ? e.classList.add(...r.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), r.dynamicBullets && (i >= s && i <= c && e.classList.add(...`${r.bulletActiveClass}-main`.split(" ")), i === s && u(e, "prev"), i === c && u(e, "next"))
            }));
            else {
              const e = i[a];
              if (e && e.classList.add(...r.bulletActiveClass.split(" ")), t.isElement && i.forEach(((e, t) => {
                  e.setAttribute("part", t === a ? "bullet-active" : "bullet")
                })), r.dynamicBullets) {
                const e = i[s],
                  t = i[c];
                for (let e = s; e <= c; e += 1) i[e] && i[e].classList.add(...`${r.bulletActiveClass}-main`.split(" "));
                u(e, "prev"), u(t, "next")
              }
            }
            if (r.dynamicBullets) {
              const n = Math.min(i.length, r.dynamicMainBullets + 4),
                a = (l * n - l) / 2 - f * l,
                s = e ? "right" : "left";
              i.forEach((e => {
                e.style[t.isHorizontal() ? s : "top"] = `${a}px`
              }))
            }
          }
          p.forEach(((e, n) => {
            if ("fraction" === r.type && (e.querySelectorAll(i(r.currentClass)).forEach((e => {
                e.textContent = r.formatFractionCurrent(a + 1)
              })), e.querySelectorAll(i(r.totalClass)).forEach((e => {
                e.textContent = r.formatFractionTotal(m)
              }))), "progressbar" === r.type) {
              let n;
              n = r.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const s = (a + 1) / m;
              let o = 1,
                l = 1;
              "horizontal" === n ? o = s : l = s, e.querySelectorAll(i(r.progressbarFillClass)).forEach((e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
              }))
            }
            "custom" === r.type && r.renderCustom ? (e.innerHTML = r.renderCustom(t, a + 1, m), 0 === n && s("paginationRender", e)) : (0 === n && s("paginationRender", e), s("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass)
          }))
        }

        function m() {
          const e = t.params.pagination;
          if (c()) return;
          const r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
          let a = t.pagination.el;
          a = (0, n.m)(a);
          let o = "";
          if ("bullets" === e.type) {
            let n = t.params.loop ? Math.ceil(r / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && n > r && (n = r);
            for (let r = 0; r < n; r += 1) e.renderBullet ? o += e.renderBullet.call(t, r, e.bulletClass) : o += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (o = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (o = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], a.forEach((r => {
            "custom" !== e.type && (r.innerHTML = o || ""), "bullets" === e.type && t.pagination.bullets.push(...r.querySelectorAll(i(e.bulletClass)))
          })), "custom" !== e.type && s("paginationRender", a[0])
        }

        function h() {
          t.params.pagination = function(e, t, r, i) {
            return e.params.createElements && Object.keys(i).forEach((a => {
              if (!r[a] && !0 === r.auto) {
                let s = (0, n.e)(e.el, `.${i[a]}`)[0];
                s || (s = (0, n.c)("div", i[a]), s.className = i[a], e.el.append(s)), r[a] = s, t[a] = s
              }
            })), r
          }(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let r;
          "string" == typeof e.el && t.isElement && (r = t.el.querySelector(e.el)), r || "string" != typeof e.el || (r = [...document.querySelectorAll(e.el)]), r || (r = e.el), r && 0 !== r.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(r) && r.length > 1 && (r = [...t.el.querySelectorAll(e.el)], r.length > 1 && (r = r.find((e => (0, n.a)(e, ".swiper")[0] === t.el)))), Array.isArray(r) && 1 === r.length && (r = r[0]), Object.assign(t.pagination, {
            el: r
          }), r = (0, n.m)(r), r.forEach((r => {
            "bullets" === e.type && e.clickable && r.classList.add(...(e.clickableClass || "").split(" ")), r.classList.add(e.modifierClass + e.type), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (r.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && r.classList.add(e.progressbarOppositeClass), e.clickable && r.addEventListener("click", p), t.enabled || r.classList.add(e.lockClass)
          })))
        }

        function g() {
          const e = t.params.pagination;
          if (c()) return;
          let r = t.pagination.el;
          r && (r = (0, n.m)(r), r.forEach((r => {
            r.classList.remove(e.hiddenClass), r.classList.remove(e.modifierClass + e.type), r.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (r.classList.remove(...(e.clickableClass || "").split(" ")), r.removeEventListener("click", p))
          }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        a("changeDirection", (() => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let {
            el: r
          } = t.pagination;
          r = (0, n.m)(r), r.forEach((r => {
            r.classList.remove(e.horizontalClass, e.verticalClass), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          }))
        })), a("init", (() => {
          !1 === t.params.pagination.enabled ? v() : (h(), m(), f())
        })), a("activeIndexChange", (() => {
          void 0 === t.snapIndex && f()
        })), a("snapIndexChange", (() => {
          f()
        })), a("snapGridLengthChange", (() => {
          m(), f()
        })), a("destroy", (() => {
          g()
        })), a("enable disable", (() => {
          let {
            el: e
          } = t.pagination;
          e && (e = (0, n.m)(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        })), a("lock unlock", (() => {
          f()
        })), a("click", ((e, r) => {
          const i = r.target,
            a = (0, n.m)(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && a && a.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
            const e = a[0].classList.contains(t.params.pagination.hiddenClass);
            s(!0 === e ? "paginationShow" : "paginationHide"), a.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
          }
        }));
        const v = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = t.pagination;
          e && (e = (0, n.m)(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), g()
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = t.pagination;
            e && (e = (0, n.m)(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), h(), m(), f()
          },
          disable: v,
          render: m,
          update: f,
          init: h,
          destroy: g
        })
      }
    },
    8989: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        componentsToDebugString: () => ae,
        default: () => ce,
        getFullscreenElement: () => I,
        getScreenFrame: () => j,
        hashComponents: () => se,
        isAndroid: () => O,
        isChromium: () => A,
        isDesktopSafari: () => L,
        isEdgeHTML: () => _,
        isGecko: () => k,
        isTrident: () => C,
        isWebKit: () => P,
        load: () => de,
        loadSources: () => T,
        murmurX64Hash128: () => ue,
        prepareForSources: () => oe,
        sources: () => ne,
        transformSource: () => M,
        withIframe: () => F
      });
      var n = r(8322),
        i = "3.4.2";

      function a(e, t) {
        return new Promise((function(r) {
          return setTimeout(r, e, t)
        }))
      }

      function s(e) {
        return !!e && "function" == typeof e.then
      }

      function o(e, t) {
        try {
          var r = e();
          s(r) ? r.then((function(e) {
            return t(!0, e)
          }), (function(e) {
            return t(!1, e)
          })) : t(!0, r)
        } catch (e) {
          t(!1, e)
        }
      }

      function l(e, t, r) {
        return void 0 === r && (r = 16), (0, n.__awaiter)(this, void 0, void 0, (function() {
          var i, s, o, l;
          return (0, n.__generator)(this, (function(n) {
            switch (n.label) {
              case 0:
                i = Array(e.length), s = Date.now(), o = 0, n.label = 1;
              case 1:
                return o < e.length ? (i[o] = t(e[o], o), (l = Date.now()) >= s + r ? (s = l, [4, a(0)]) : [3, 3]) : [3, 4];
              case 2:
                n.sent(), n.label = 3;
              case 3:
                return ++o, [3, 1];
              case 4:
                return [2, i]
            }
          }))
        }))
      }

      function d(e) {
        e.then(void 0, (function() {}))
      }

      function c(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var r = [0, 0, 0, 0];
        return r[3] += e[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function u(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var r = [0, 0, 0, 0];
        return r[3] += e[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function p(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
      }

      function f(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
      }

      function m(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
      }

      function h(e) {
        return e = m(e, [0, e[0] >>> 1]), e = m(e = u(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), m(e = u(e, [3301882366, 444984403]), [0, e[0] >>> 1])
      }

      function g(e, t) {
        t = t || 0;
        var r, n = (e = e || "").length % 16,
          i = e.length - n,
          a = [0, t],
          s = [0, t],
          o = [0, 0],
          l = [0, 0],
          d = [2277735313, 289559509],
          g = [1291169091, 658871167];
        for (r = 0; r < i; r += 16) o = [255 & e.charCodeAt(r + 4) | (255 & e.charCodeAt(r + 5)) << 8 | (255 & e.charCodeAt(r + 6)) << 16 | (255 & e.charCodeAt(r + 7)) << 24, 255 & e.charCodeAt(r) | (255 & e.charCodeAt(r + 1)) << 8 | (255 & e.charCodeAt(r + 2)) << 16 | (255 & e.charCodeAt(r + 3)) << 24], l = [255 & e.charCodeAt(r + 12) | (255 & e.charCodeAt(r + 13)) << 8 | (255 & e.charCodeAt(r + 14)) << 16 | (255 & e.charCodeAt(r + 15)) << 24, 255 & e.charCodeAt(r + 8) | (255 & e.charCodeAt(r + 9)) << 8 | (255 & e.charCodeAt(r + 10)) << 16 | (255 & e.charCodeAt(r + 11)) << 24], o = p(o = u(o, d), 31), a = c(a = p(a = m(a, o = u(o, g)), 27), s), a = c(u(a, [0, 5]), [0, 1390208809]), l = p(l = u(l, g), 33), s = c(s = p(s = m(s, l = u(l, d)), 31), a), s = c(u(s, [0, 5]), [0, 944331445]);
        switch (o = [0, 0], l = [0, 0], n) {
          case 15:
            l = m(l, f([0, e.charCodeAt(r + 14)], 48));
          case 14:
            l = m(l, f([0, e.charCodeAt(r + 13)], 40));
          case 13:
            l = m(l, f([0, e.charCodeAt(r + 12)], 32));
          case 12:
            l = m(l, f([0, e.charCodeAt(r + 11)], 24));
          case 11:
            l = m(l, f([0, e.charCodeAt(r + 10)], 16));
          case 10:
            l = m(l, f([0, e.charCodeAt(r + 9)], 8));
          case 9:
            l = u(l = m(l, [0, e.charCodeAt(r + 8)]), g), s = m(s, l = u(l = p(l, 33), d));
          case 8:
            o = m(o, f([0, e.charCodeAt(r + 7)], 56));
          case 7:
            o = m(o, f([0, e.charCodeAt(r + 6)], 48));
          case 6:
            o = m(o, f([0, e.charCodeAt(r + 5)], 40));
          case 5:
            o = m(o, f([0, e.charCodeAt(r + 4)], 32));
          case 4:
            o = m(o, f([0, e.charCodeAt(r + 3)], 24));
          case 3:
            o = m(o, f([0, e.charCodeAt(r + 2)], 16));
          case 2:
            o = m(o, f([0, e.charCodeAt(r + 1)], 8));
          case 1:
            o = u(o = m(o, [0, e.charCodeAt(r)]), d), a = m(a, o = u(o = p(o, 31), g))
        }
        return a = c(a = m(a, [0, e.length]), s = m(s, [0, e.length])), s = c(s, a), a = c(a = h(a), s = h(s)), s = c(s, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
      }

      function v(e) {
        return parseInt(e)
      }

      function b(e) {
        return parseFloat(e)
      }

      function w(e, t) {
        return "number" == typeof e && isNaN(e) ? t : e
      }

      function y(e) {
        return e.reduce((function(e, t) {
          return e + (t ? 1 : 0)
        }), 0)
      }

      function S(e, t) {
        if (void 0 === t && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t;
        var r = 1 / t;
        return Math.round(e * r) / r
      }

      function x(e) {
        return e && "object" == typeof e && "message" in e ? e : {
          message: e
        }
      }

      function E(e) {
        return "function" != typeof e
      }

      function T(e, t, r) {
        var i = Object.keys(e).filter((function(e) {
            return ! function(e, t) {
              for (var r = 0, n = e.length; r < n; ++r)
                if (e[r] === t) return !0;
              return !1
            }(r, e)
          })),
          a = l(i, (function(r) {
            return function(e, t) {
              var r = new Promise((function(r) {
                var n = Date.now();
                o(e.bind(null, t), (function() {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                  var i = Date.now() - n;
                  if (!e[0]) return r((function() {
                    return {
                      error: x(e[1]),
                      duration: i
                    }
                  }));
                  var a = e[1];
                  if (E(a)) return r((function() {
                    return {
                      value: a,
                      duration: i
                    }
                  }));
                  r((function() {
                    return new Promise((function(e) {
                      var t = Date.now();
                      o(a, (function() {
                        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                        var a = i + Date.now() - t;
                        if (!r[0]) return e({
                          error: x(r[1]),
                          duration: a
                        });
                        e({
                          value: r[1],
                          duration: a
                        })
                      }))
                    }))
                  }))
                }))
              }));
              return d(r),
                function() {
                  return r.then((function(e) {
                    return e()
                  }))
                }
            }(e[r], t)
          }));
        return d(a),
          function() {
            return (0, n.__awaiter)(this, void 0, void 0, (function() {
              var e, t, r, s;
              return (0, n.__generator)(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [4, a];
                  case 1:
                    return [4, l(n.sent(), (function(e) {
                      var t = e();
                      return d(t), t
                    }))];
                  case 2:
                    return e = n.sent(), [4, Promise.all(e)];
                  case 3:
                    for (t = n.sent(), r = {}, s = 0; s < i.length; ++s) r[i[s]] = t[s];
                    return [2, r]
                }
              }))
            }))
          }
      }

      function M(e, t) {
        var r = function(e) {
          return E(e) ? t(e) : function() {
            var r = e();
            return s(r) ? r.then(t) : t(r)
          }
        };
        return function(t) {
          var n = e(t);
          return s(n) ? n.then(r) : r(n)
        }
      }

      function C() {
        var e = window,
          t = navigator;
        return y(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
      }

      function _() {
        var e = window,
          t = navigator;
        return y(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !C()
      }

      function A() {
        var e = window,
          t = navigator;
        return y(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
      }

      function P() {
        var e = window,
          t = navigator;
        return y(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates" in t, "WebKitMediaKeys" in e]) >= 4
      }

      function L() {
        var e = window;
        return y(["safari" in e, !("DeviceMotionEvent" in e), !("ongestureend" in e), !("standalone" in navigator)]) >= 3
      }

      function k() {
        var e, t, r = window;
        return y(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange" in r, "mozInnerScreenX" in r, "CSSMozDocumentRule" in r, "CanvasCaptureMediaStream" in r]) >= 4
      }

      function I() {
        var e = document;
        return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
      }

      function O() {
        var e = A(),
          t = k();
        if (!e && !t) return !1;
        var r = window;
        return y(["onorientationchange" in r, "orientation" in r, e && !("SharedWorker" in r), t && /android/i.test(navigator.appVersion)]) >= 2
      }

      function R(e) {
        var t = new Error(e);
        return t.name = e, t
      }

      function F(e, t, r) {
        var i, s, o;
        return void 0 === r && (r = 50), (0, n.__awaiter)(this, void 0, void 0, (function() {
          var l, d;
          return (0, n.__generator)(this, (function(n) {
            switch (n.label) {
              case 0:
                l = document, n.label = 1;
              case 1:
                return l.body ? [3, 3] : [4, a(r)];
              case 2:
                return n.sent(), [3, 1];
              case 3:
                d = l.createElement("iframe"), n.label = 4;
              case 4:
                return n.trys.push([4, , 10, 11]), [4, new Promise((function(e, r) {
                  var n = !1,
                    i = function() {
                      n = !0, e()
                    };
                  d.onload = i, d.onerror = function(e) {
                    n = !0, r(e)
                  };
                  var a = d.style;
                  a.setProperty("display", "block", "important"), a.position = "absolute", a.top = "0", a.left = "0", a.visibility = "hidden", t && "srcdoc" in d ? d.srcdoc = t : d.src = "about:blank", l.body.appendChild(d);
                  var s = function() {
                    var e, t;
                    n || ("complete" === (null === (t = null === (e = d.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? i() : setTimeout(s, 10))
                  };
                  s()
                }))];
              case 5:
                n.sent(), n.label = 6;
              case 6:
                return (null === (s = null === (i = d.contentWindow) || void 0 === i ? void 0 : i.document) || void 0 === s ? void 0 : s.body) ? [3, 8] : [4, a(r)];
              case 7:
                return n.sent(), [3, 6];
              case 8:
                return [4, e(d, d.contentWindow)];
              case 9:
                return [2, n.sent()];
              case 10:
                return null === (o = d.parentNode) || void 0 === o || o.removeChild(d), [7];
              case 11:
                return [2]
            }
          }))
        }))
      }

      function V(e) {
        for (var t = function(e) {
            for (var t, r, n = "Unexpected syntax '".concat(e, "'"), i = /^\s*([a-z-]*)(.*)$/i.exec(e), a = i[1] || void 0, s = {}, o = /([.:#][\w-]+|\[.+?\])/gi, l = function(e, t) {
                s[e] = s[e] || [], s[e].push(t)
              };;) {
              var d = o.exec(i[2]);
              if (!d) break;
              var c = d[0];
              switch (c[0]) {
                case ".":
                  l("class", c.slice(1));
                  break;
                case "#":
                  l("id", c.slice(1));
                  break;
                case "[":
                  var u = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(c);
                  if (!u) throw new Error(n);
                  l(u[1], null !== (r = null !== (t = u[4]) && void 0 !== t ? t : u[5]) && void 0 !== r ? r : "");
                  break;
                default:
                  throw new Error(n)
              }
            }
            return [a, s]
          }(e), r = t[0], n = t[1], i = document.createElement(null != r ? r : "div"), a = 0, s = Object.keys(n); a < s.length; a++) {
          var o = s[a],
            l = n[o].join(" ");
          "style" === o ? G(i.style, l) : i.setAttribute(o, l)
        }
        return i
      }

      function G(e, t) {
        for (var r = 0, n = t.split(";"); r < n.length; r++) {
          var i = n[r],
            a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
          if (a) {
            var s = a[1],
              o = a[2],
              l = a[4];
            e.setProperty(s, o, l || "")
          }
        }
      }
      var D = ["monospace", "sans-serif", "serif"],
        N = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

      function z(e) {
        return e.toDataURL()
      }
      var H, W, B = 2500;

      function j() {
        var e = this;
        return function() {
            if (void 0 === W) {
              var e = function() {
                var t = X();
                Y(t) ? W = setTimeout(e, B) : (H = t, W = void 0)
              };
              e()
            }
          }(),
          function() {
            return (0, n.__awaiter)(e, void 0, void 0, (function() {
              var e;
              return (0, n.__generator)(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return Y(e = X()) ? H ? [2, (0, n.__spreadArray)([], H, !0)] : I() ? [4, (r = document, (r.exitFullscreen || r.msExitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen).call(r))] : [3, 2] : [3, 2];
                  case 1:
                    t.sent(), e = X(), t.label = 2;
                  case 2:
                    return Y(e) || (H = e), [2, e]
                }
                var r
              }))
            }))
          }
      }

      function X() {
        var e = screen;
        return [w(b(e.availTop), null), w(b(e.width) - b(e.availWidth) - w(b(e.availLeft), 0), null), w(b(e.height) - b(e.availHeight) - w(b(e.availTop), 0), null), w(b(e.availLeft), null)]
      }

      function Y(e) {
        for (var t = 0; t < 4; ++t)
          if (e[t]) return !1;
        return !0
      }

      function Z(e) {
        var t;
        return (0, n.__awaiter)(this, void 0, void 0, (function() {
          var r, i, s, o, l, d, c;
          return (0, n.__generator)(this, (function(n) {
            switch (n.label) {
              case 0:
                for (r = document, i = r.createElement("div"), s = new Array(e.length), o = {}, $(i), c = 0; c < e.length; ++c) "DIALOG" === (l = V(e[c])).tagName && l.show(), $(d = r.createElement("div")), d.appendChild(l), i.appendChild(d), s[c] = l;
                n.label = 1;
              case 1:
                return r.body ? [3, 3] : [4, a(50)];
              case 2:
                return n.sent(), [3, 1];
              case 3:
                r.body.appendChild(i);
                try {
                  for (c = 0; c < e.length; ++c) s[c].offsetParent || (o[e[c]] = !0)
                } finally {
                  null === (t = i.parentNode) || void 0 === t || t.removeChild(i)
                }
                return [2, o]
            }
          }))
        }))
      }

      function $(e) {
        e.style.setProperty("display", "block", "important")
      }

      function U(e) {
        return matchMedia("(inverted-colors: ".concat(e, ")")).matches
      }

      function J(e) {
        return matchMedia("(forced-colors: ".concat(e, ")")).matches
      }

      function q(e) {
        return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
      }

      function Q(e) {
        return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
      }

      function K(e) {
        return matchMedia("(dynamic-range: ".concat(e, ")")).matches
      }
      var ee = Math,
        te = function() {
          return 0
        },
        re = {
          default: [],
          apple: [{
            font: "-apple-system-body"
          }],
          serif: [{
            fontFamily: "serif"
          }],
          sans: [{
            fontFamily: "sans-serif"
          }],
          mono: [{
            fontFamily: "monospace"
          }],
          min: [{
            fontSize: "1px"
          }],
          system: [{
            fontFamily: "system-ui"
          }]
        },
        ne = {
          fonts: function() {
            return F((function(e, t) {
              var r = t.document,
                n = r.body;
              n.style.fontSize = "48px";
              var i = r.createElement("div"),
                a = {},
                s = {},
                o = function(e) {
                  var t = r.createElement("span"),
                    n = t.style;
                  return n.position = "absolute", n.top = "0", n.left = "0", n.fontFamily = e, t.textContent = "mmMwWLliI0O&1", i.appendChild(t), t
                },
                l = D.map(o),
                d = function() {
                  for (var e = {}, t = function(t) {
                      e[t] = D.map((function(e) {
                        return function(e, t) {
                          return o("'".concat(e, "',").concat(t))
                        }(t, e)
                      }))
                    }, r = 0, n = N; r < n.length; r++) t(n[r]);
                  return e
                }();
              n.appendChild(i);
              for (var c = 0; c < D.length; c++) a[D[c]] = l[c].offsetWidth, s[D[c]] = l[c].offsetHeight;
              return N.filter((function(e) {
                return t = d[e], D.some((function(e, r) {
                  return t[r].offsetWidth !== a[e] || t[r].offsetHeight !== s[e]
                }));
                var t
              }))
            }))
          },
          domBlockers: function(e) {
            var t = (void 0 === e ? {} : e).debug;
            return (0, n.__awaiter)(this, void 0, void 0, (function() {
              var e, r, i, a, s;
              return (0, n.__generator)(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return P() || O() ? (o = atob, e = {
                      abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', o("I0JveC1CYW5uZXItYWRz")],
                      abpvn: [".quangcao", "#mobileCatfish", o("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                      adBlockFinland: [".mainostila", o("LnNwb25zb3JpdA=="), ".ylamainos", o("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), o("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                      adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", o("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                      adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", o("LmhlYWRlci1ibG9ja2VkLWFk"), o("I2FkX2Jsb2NrZXI=")],
                      adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                      adGuardBase: [".BetterJsPopOverlay", o("I2FkXzMwMFgyNTA="), o("I2Jhbm5lcmZsb2F0MjI="), o("I2NhbXBhaWduLWJhbm5lcg=="), o("I0FkLUNvbnRlbnQ=")],
                      adGuardChinese: [o("LlppX2FkX2FfSA=="), o("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", o("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), o("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                      adGuardFrench: ["#pavePub", o("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", o("LmFkc19iYW4=")],
                      adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                      adGuardJapanese: ["#kauli_yad_1", o("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), o("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), o("LmFkZ29vZ2xl"), o("Ll9faXNib29zdFJldHVybkFk")],
                      adGuardMobile: [o("YW1wLWF1dG8tYWRz"), o("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", o("I2FkX2ludmlld19hcmVh")],
                      adGuardRussian: [o("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), o("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', o("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                      adGuardSocial: [o("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), o("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                      adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                      adGuardTrackingProtection: ["#qoo-counter", o("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), o("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), o("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                      adGuardTurkish: ["#backkapat", o("I3Jla2xhbWk="), o("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), o("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), o("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                      bulgarian: [o("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                      easyList: [".yb-floorad", o("LndpZGdldF9wb19hZHNfd2lkZ2V0"), o("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", o("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                      easyListChina: [o("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), o("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                      easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", o("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                      easyListCzechSlovak: ["#onlajny-stickers", o("I3Jla2xhbW5pLWJveA=="), o("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", o("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                      easyListDutch: [o("I2FkdmVydGVudGll"), o("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", o("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                      easyListGermany: ["#SSpotIMPopSlider", o("LnNwb25zb3JsaW5rZ3J1ZW4="), o("I3dlcmJ1bmdza3k="), o("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), o("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                      easyListItaly: [o("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", o("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), o("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), o("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                      easyListLithuania: [o("LnJla2xhbW9zX3RhcnBhcw=="), o("LnJla2xhbW9zX251b3JvZG9z"), o("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), o("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), o("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                      estonian: [o("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                      fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                      fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                      fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                      fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                      frellwitSwedish: [o("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), o("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", o("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                      greekAdBlock: [o("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), o("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), o("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                      hungarian: ["#cemp_doboz", ".optimonk-iframe-container", o("LmFkX19tYWlu"), o("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                      iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                      icelandicAbp: [o("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                      latvian: [o("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), o("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                      listKr: [o("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), o("I2xpdmVyZUFkV3JhcHBlcg=="), o("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), o("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                      listeAr: [o("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", o("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), o("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), o("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                      listeFr: [o("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), o("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), o("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                      officialPolish: ["#ceneo-placeholder-ceneo-12", o("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), o("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), o("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), o("ZGl2I3NrYXBpZWNfYWQ=")],
                      ro: [o("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), o("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), o("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), o("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                      ruAd: [o("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), o("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), o("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                      thaiAds: ["a[href*=macau-uta-popup]", o("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), o("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                      webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", o("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                    }, r = Object.keys(e), [4, Z((s = []).concat.apply(s, r.map((function(t) {
                      return e[t]
                    }))))]) : [2, void 0];
                  case 1:
                    return i = n.sent(), t && function(e, t) {
                      for (var r = "DOM blockers debug:\n```", n = 0, i = Object.keys(e); n < i.length; n++) {
                        var a = i[n];
                        r += "\n".concat(a, ":");
                        for (var s = 0, o = e[a]; s < o.length; s++) {
                          var l = o[s];
                          r += "\n  ".concat(t[l] ? "🚫" : "➡️", " ").concat(l)
                        }
                      }
                      console.log("".concat(r, "\n```"))
                    }(e, i), (a = r.filter((function(t) {
                      var r = e[t];
                      return y(r.map((function(e) {
                        return i[e]
                      }))) > .6 * r.length
                    }))).sort(), [2, a]
                }
                var o
              }))
            }))
          },
          fontPreferences: function() {
            return void 0 === e && (e = 4e3), F((function(t, r) {
              var i = r.document,
                a = i.body,
                s = a.style;
              s.width = "".concat(e, "px"), s.webkitTextSizeAdjust = s.textSizeAdjust = "none", A() ? a.style.zoom = "".concat(1 / r.devicePixelRatio) : P() && (a.style.zoom = "reset");
              var o = i.createElement("div");
              return o.textContent = (0, n.__spreadArray)([], Array(e / 20 | 0), !0).map((function() {
                  return "word"
                })).join(" "), a.appendChild(o),
                function(e, t) {
                  for (var r = {}, n = {}, i = 0, a = Object.keys(re); i < a.length; i++) {
                    var s = a[i],
                      o = re[s],
                      l = o[0],
                      d = void 0 === l ? {} : l,
                      c = o[1],
                      u = void 0 === c ? "mmMwWLliI0fiflO&1" : c,
                      p = e.createElement("span");
                    p.textContent = u, p.style.whiteSpace = "nowrap";
                    for (var f = 0, m = Object.keys(d); f < m.length; f++) {
                      var h = m[f],
                        g = d[h];
                      void 0 !== g && (p.style[h] = g)
                    }
                    r[s] = p, t.appendChild(e.createElement("br")), t.appendChild(p)
                  }
                  for (var v = 0, b = Object.keys(re); v < b.length; v++) n[s = b[v]] = r[s].getBoundingClientRect().width;
                  return n
                }(i, a)
            }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
            var e
          },
          audio: function() {
            var e = window,
              t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
            if (!t) return -2;
            if (P() && !L() && ! function() {
                var e = window;
                return y(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
              }()) return -1;
            var r = new t(1, 5e3, 44100),
              n = r.createOscillator();
            n.type = "triangle", n.frequency.value = 1e4;
            var i = r.createDynamicsCompressor();
            i.threshold.value = -50, i.knee.value = 40, i.ratio.value = 12, i.attack.value = 0, i.release.value = .25, n.connect(i), i.connect(r.destination), n.start(0);
            var a = function(e) {
                var t = function() {};
                return [new Promise((function(r, n) {
                  var i = !1,
                    a = 0,
                    o = 0;
                  e.oncomplete = function(e) {
                    return r(e.renderedBuffer)
                  };
                  var l = function() {
                      setTimeout((function() {
                        return n(R("timeout"))
                      }), Math.min(500, o + 5e3 - Date.now()))
                    },
                    c = function() {
                      try {
                        var t = e.startRendering();
                        switch (s(t) && d(t), e.state) {
                          case "running":
                            o = Date.now(), i && l();
                            break;
                          case "suspended":
                            document.hidden || a++, i && a >= 3 ? n(R("suspended")) : setTimeout(c, 500)
                        }
                      } catch (e) {
                        n(e)
                      }
                    };
                  c(), t = function() {
                    i || (i = !0, o > 0 && l())
                  }
                })), t]
              }(r),
              o = a[0],
              l = a[1],
              c = o.then((function(e) {
                return function(e) {
                  for (var t = 0, r = 0; r < e.length; ++r) t += Math.abs(e[r]);
                  return t
                }(e.getChannelData(0).subarray(4500))
              }), (function(e) {
                if ("timeout" === e.name || "suspended" === e.name) return -3;
                throw e
              }));
            return d(c),
              function() {
                return l(), c
              }
          },
          screenFrame: function() {
            var e = this,
              t = j();
            return function() {
              return (0, n.__awaiter)(e, void 0, void 0, (function() {
                var e, r;
                return (0, n.__generator)(this, (function(n) {
                  switch (n.label) {
                    case 0:
                      return [4, t()];
                    case 1:
                      return e = n.sent(), [2, [(r = function(e) {
                        return null === e ? null : S(e, 10)
                      })(e[0]), r(e[1]), r(e[2]), r(e[3])]]
                  }
                }))
              }))
            }
          },
          osCpu: function() {
            return navigator.oscpu
          },
          languages: function() {
            var e, t = navigator,
              r = [],
              n = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
            if (void 0 !== n && r.push([n]), Array.isArray(t.languages)) A() && y([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || r.push(t.languages);
            else if ("string" == typeof t.languages) {
              var i = t.languages;
              i && r.push(i.split(","))
            }
            return r
          },
          colorDepth: function() {
            return window.screen.colorDepth
          },
          deviceMemory: function() {
            return w(b(navigator.deviceMemory), void 0)
          },
          screenResolution: function() {
            var e = screen,
              t = function(e) {
                return w(v(e), null)
              },
              r = [t(e.width), t(e.height)];
            return r.sort().reverse(), r
          },
          hardwareConcurrency: function() {
            return w(v(navigator.hardwareConcurrency), void 0)
          },
          timezone: function() {
            var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
            if (t) {
              var r = (new t).resolvedOptions().timeZone;
              if (r) return r
            }
            var n, i = (n = (new Date).getFullYear(), -Math.max(b(new Date(n, 0, 1).getTimezoneOffset()), b(new Date(n, 6, 1).getTimezoneOffset())));
            return "UTC".concat(i >= 0 ? "+" : "").concat(Math.abs(i))
          },
          sessionStorage: function() {
            try {
              return !!window.sessionStorage
            } catch (e) {
              return !0
            }
          },
          localStorage: function() {
            try {
              return !!window.localStorage
            } catch (e) {
              return !0
            }
          },
          indexedDB: function() {
            if (!C() && !_()) try {
              return !!window.indexedDB
            } catch (e) {
              return !0
            }
          },
          openDatabase: function() {
            return !!window.openDatabase
          },
          cpuClass: function() {
            return navigator.cpuClass
          },
          platform: function() {
            var e = navigator.platform;
            return "MacIntel" === e && P() && !L() ? function() {
              if ("iPad" === navigator.platform) return !0;
              var e = screen,
                t = e.width / e.height;
              return y(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
            }() ? "iPad" : "iPhone" : e
          },
          plugins: function() {
            var e = navigator.plugins;
            if (e) {
              for (var t = [], r = 0; r < e.length; ++r) {
                var n = e[r];
                if (n) {
                  for (var i = [], a = 0; a < n.length; ++a) {
                    var s = n[a];
                    i.push({
                      type: s.type,
                      suffixes: s.suffixes
                    })
                  }
                  t.push({
                    name: n.name,
                    description: n.description,
                    mimeTypes: i
                  })
                }
              }
              return t
            }
          },
          canvas: function() {
            var e, t, r = !1,
              n = function() {
                var e = document.createElement("canvas");
                return e.width = 1, e.height = 1, [e, e.getContext("2d")]
              }(),
              i = n[0],
              a = n[1];
            if (function(e, t) {
                return !(!t || !e.toDataURL)
              }(i, a)) {
              r = function(e) {
                  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
                }(a),
                function(e, t) {
                  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
                  var r = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                  t.fillText(r, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(r, 4, 45)
                }(i, a);
              var s = z(i);
              s !== z(i) ? e = t = "unstable" : (t = s, function(e, t) {
                e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
                for (var r = 0, n = [
                    ["#f2f", 40, 40],
                    ["#2ff", 80, 40],
                    ["#ff2", 60, 80]
                  ]; r < n.length; r++) {
                  var i = n[r],
                    a = i[0],
                    s = i[1],
                    o = i[2];
                  t.fillStyle = a, t.beginPath(), t.arc(s, o, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill()
                }
                t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, !0), t.arc(60, 60, 20, 0, 2 * Math.PI, !0), t.fill("evenodd")
              }(i, a), e = z(i))
            } else e = t = "";
            return {
              winding: r,
              geometry: e,
              text: t
            }
          },
          touchSupport: function() {
            var e, t = navigator,
              r = 0;
            void 0 !== t.maxTouchPoints ? r = v(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (r = t.msMaxTouchPoints);
            try {
              document.createEvent("TouchEvent"), e = !0
            } catch (t) {
              e = !1
            }
            return {
              maxTouchPoints: r,
              touchEvent: e,
              touchStart: "ontouchstart" in window
            }
          },
          vendor: function() {
            return navigator.vendor || ""
          },
          vendorFlavors: function() {
            for (var e = [], t = 0, r = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < r.length; t++) {
              var n = r[t],
                i = window[n];
              i && "object" == typeof i && e.push(n)
            }
            return e.sort()
          },
          cookiesEnabled: function() {
            var e = document;
            try {
              e.cookie = "cookietest=1; SameSite=Strict;";
              var t = -1 !== e.cookie.indexOf("cookietest=");
              return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
            } catch (e) {
              return !1
            }
          },
          colorGamut: function() {
            for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
              var r = t[e];
              if (matchMedia("(color-gamut: ".concat(r, ")")).matches) return r
            }
          },
          invertedColors: function() {
            return !!U("inverted") || !U("none") && void 0
          },
          forcedColors: function() {
            return !!J("active") || !J("none") && void 0
          },
          monochrome: function() {
            if (matchMedia("(min-monochrome: 0)").matches) {
              for (var e = 0; e <= 100; ++e)
                if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
              throw new Error("Too high value")
            }
          },
          contrast: function() {
            return q("no-preference") ? 0 : q("high") || q("more") ? 1 : q("low") || q("less") ? -1 : q("forced") ? 10 : void 0
          },
          reducedMotion: function() {
            return !!Q("reduce") || !Q("no-preference") && void 0
          },
          hdr: function() {
            return !!K("high") || !K("standard") && void 0
          },
          math: function() {
            var e, t = ee.acos || te,
              r = ee.acosh || te,
              n = ee.asin || te,
              i = ee.asinh || te,
              a = ee.atanh || te,
              s = ee.atan || te,
              o = ee.sin || te,
              l = ee.sinh || te,
              d = ee.cos || te,
              c = ee.cosh || te,
              u = ee.tan || te,
              p = ee.tanh || te,
              f = ee.exp || te,
              m = ee.expm1 || te,
              h = ee.log1p || te;
            return {
              acos: t(.12312423423423424),
              acosh: r(1e308),
              acoshPf: (e = 1e154, ee.log(e + ee.sqrt(e * e - 1))),
              asin: n(.12312423423423424),
              asinh: i(1),
              asinhPf: ee.log(1 + ee.sqrt(2)),
              atanh: a(.5),
              atanhPf: ee.log(3) / 2,
              atan: s(.5),
              sin: o(-1e300),
              sinh: l(1),
              sinhPf: ee.exp(1) - 1 / ee.exp(1) / 2,
              cos: d(10.000000000123),
              cosh: c(1),
              coshPf: (ee.exp(1) + 1 / ee.exp(1)) / 2,
              tan: u(-1e300),
              tanh: p(1),
              tanhPf: (ee.exp(2) - 1) / (ee.exp(2) + 1),
              exp: f(1),
              expm1: m(1),
              expm1Pf: ee.exp(1) - 1,
              log1p: h(10),
              log1pPf: ee.log(11),
              powPI: ee.pow(ee.PI, -100)
            }
          },
          videoCard: function() {
            var e, t = document.createElement("canvas"),
              r = null !== (e = t.getContext("webgl")) && void 0 !== e ? e : t.getContext("experimental-webgl");
            if (r && "getExtension" in r) {
              var n = r.getExtension("WEBGL_debug_renderer_info");
              if (n) return {
                vendor: (r.getParameter(n.UNMASKED_VENDOR_WEBGL) || "").toString(),
                renderer: (r.getParameter(n.UNMASKED_RENDERER_WEBGL) || "").toString()
              }
            }
          },
          pdfViewerEnabled: function() {
            return navigator.pdfViewerEnabled
          },
          architecture: function() {
            var e = new Float32Array(1),
              t = new Uint8Array(e.buffer);
            return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
          }
        },
        ie = "$ if upgrade to Pro: https://fpjs.dev/pro";

      function ae(e) {
        return JSON.stringify(e, (function(e, t) {
          return t instanceof Error ? (r = t, (0, n.__assign)({
            name: r.name,
            message: r.message,
            stack: null === (i = r.stack) || void 0 === i ? void 0 : i.split("\n")
          }, r)) : t;
          var r, i
        }), 2)
      }

      function se(e) {
        return g(function(e) {
          for (var t = "", r = 0, n = Object.keys(e).sort(); r < n.length; r++) {
            var i = n[r],
              a = e[i],
              s = a.error ? "error" : JSON.stringify(a.value);
            t += "".concat(t ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(s)
          }
          return t
        }(e))
      }

      function oe(e) {
        return void 0 === e && (e = 50),
          function(e, t) {
            void 0 === t && (t = 1 / 0);
            var r = window.requestIdleCallback;
            return r ? new Promise((function(e) {
              return r.call(window, (function() {
                return e()
              }), {
                timeout: t
              })
            })) : a(Math.min(e, t))
          }(e, 2 * e)
      }

      function le(e, t) {
        var r = Date.now();
        return {
          get: function(a) {
            return (0, n.__awaiter)(this, void 0, void 0, (function() {
              var s, o, l;
              return (0, n.__generator)(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return s = Date.now(), [4, e()];
                  case 1:
                    return o = n.sent(), l = function(e) {
                      var t, r = function(e) {
                        var t = function(e) {
                            if (O()) return .4;
                            if (P()) return L() ? .5 : .3;
                            var t = e.platform.value || "";
                            return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
                          }(e),
                          r = function(e) {
                            return S(.99 + .01 * e, 1e-4)
                          }(t);
                        return {
                          score: t,
                          comment: ie.replace(/\$/g, "".concat(r))
                        }
                      }(e);
                      return {
                        get visitorId() {
                          return void 0 === t && (t = se(this.components)), t
                        },
                        set visitorId(e) {
                          t = e
                        },
                        confidence: r,
                        components: e,
                        version: i
                      }
                    }(o), (t || (null == a ? void 0 : a.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(l.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(s - r, "\nvisitorId: ").concat(l.visitorId, "\ncomponents: ").concat(ae(o), "\n```")), [2, l]
                }
              }))
            }))
          }
        }
      }

      function de(e) {
        var t = void 0 === e ? {} : e,
          r = t.delayFallback,
          a = t.debug,
          s = t.monitoring,
          o = void 0 === s || s;
        return (0, n.__awaiter)(this, void 0, void 0, (function() {
          return (0, n.__generator)(this, (function(e) {
            switch (e.label) {
              case 0:
                return o && function() {
                  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
                    var e = new XMLHttpRequest;
                    e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(i, "/npm-monitoring"), !0), e.send()
                  } catch (e) {
                    console.error(e)
                  }
                }(), [4, oe(r)];
              case 1:
                return e.sent(), [2, le(T(ne, {
                  debug: a
                }, []), a)]
            }
          }))
        }))
      }
      var ce = {
          load: de,
          hashComponents: se,
          componentsToDebugString: ae
        },
        ue = g
    },
    9763: (e, t, r) => {
      var n, i, a, s = r(8989);

      function o(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        let r = [0, 0, 0, 0];
        return r[3] += e[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function l(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        let r = [0, 0, 0, 0];
        return r[3] += e[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function d(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
      }

      function c(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
      }

      function u(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
      }

      function p(e) {
        return e = u(e, [0, e[0] >>> 1]), e = u(e = l(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), u(e = l(e, [3301882366, 444984403]), [0, e[0] >>> 1])
      }

      function f(e) {
        return e.length > 32 ? function(e, t) {
          t = t || 0;
          let r, n = (e = e || "").length % 16,
            i = e.length - n,
            a = [0, t],
            s = [0, t],
            f = [0, 0],
            m = [0, 0],
            h = [2277735313, 289559509],
            g = [1291169091, 658871167];
          for (r = 0; r < i; r += 16) f = [255 & e.charCodeAt(r + 4) | (255 & e.charCodeAt(r + 5)) << 8 | (255 & e.charCodeAt(r + 6)) << 16 | (255 & e.charCodeAt(r + 7)) << 24, 255 & e.charCodeAt(r) | (255 & e.charCodeAt(r + 1)) << 8 | (255 & e.charCodeAt(r + 2)) << 16 | (255 & e.charCodeAt(r + 3)) << 24], m = [255 & e.charCodeAt(r + 12) | (255 & e.charCodeAt(r + 13)) << 8 | (255 & e.charCodeAt(r + 14)) << 16 | (255 & e.charCodeAt(r + 15)) << 24, 255 & e.charCodeAt(r + 8) | (255 & e.charCodeAt(r + 9)) << 8 | (255 & e.charCodeAt(r + 10)) << 16 | (255 & e.charCodeAt(r + 11)) << 24], f = l(f, h), f = d(f, 31), f = l(f, g), a = u(a, f), a = d(a, 27), a = o(a, s), a = o(l(a, [0, 5]), [0, 1390208809]), m = l(m, g), m = d(m, 33), m = l(m, h), s = u(s, m), s = d(s, 31), s = o(s, a), s = o(l(s, [0, 5]), [0, 944331445]);
          switch (f = [0, 0], m = [0, 0], n) {
            case 15:
              m = u(m, c([0, e.charCodeAt(r + 14)], 48));
              break;
            case 14:
              m = u(m, c([0, e.charCodeAt(r + 13)], 40));
              break;
            case 13:
              m = u(m, c([0, e.charCodeAt(r + 12)], 32));
              break;
            case 12:
              m = u(m, c([0, e.charCodeAt(r + 11)], 24));
              break;
            case 11:
              m = u(m, c([0, e.charCodeAt(r + 10)], 16));
              break;
            case 10:
              m = u(m, c([0, e.charCodeAt(r + 9)], 8));
              break;
            case 9:
              m = u(m, [0, e.charCodeAt(r + 8)]), m = l(m, g), m = d(m, 33), m = l(m, h), s = u(s, m);
              break;
            case 8:
              f = u(f, c([0, e.charCodeAt(r + 7)], 56));
              break;
            case 7:
              f = u(f, c([0, e.charCodeAt(r + 6)], 48));
              break;
            case 6:
              f = u(f, c([0, e.charCodeAt(r + 5)], 40));
              break;
            case 5:
              f = u(f, c([0, e.charCodeAt(r + 4)], 32));
              break;
            case 4:
              f = u(f, c([0, e.charCodeAt(r + 3)], 24));
              break;
            case 3:
              f = u(f, c([0, e.charCodeAt(r + 2)], 16));
              break;
            case 2:
              f = u(f, c([0, e.charCodeAt(r + 1)], 8));
              break;
            case 1:
              f = u(f, [0, e.charCodeAt(r)]), f = l(f, h), f = d(f, 31), f = l(f, g), a = u(a, f)
          }
          return a = u(a, [0, e.length]), s = u(s, [0, e.length]), a = o(a, s), s = o(s, a), a = p(a), s = p(s), a = o(a, s), s = o(s, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
        }(e, 31) : e
      }

      function m(e) {
        const t = [...e];
        return function() {
          const e = [/palemoon/i];
          let t = !1;
          for (let r = 0, n = e.length; r < n; r++) {
            let n = e[r];
            if (navigator.userAgent.match(n)) {
              t = !0;
              break
            }
          }
          return t
        }() && (t = t.sort((function(e, t) {
          return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
        }))), t.map((e => {
          let t = e.mimeTypes.map((e => [e.type, e.suffixes].join("~")));
          return [e.name, e.description, t].join("::")
        }))
      }

      function h() {
        let e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
      }

      function g() {
        let e = document.createElement("div");
        e.innerHTML = "&nbsp;", e.className = "adsbox";
        let t = !1;
        try {
          document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
        } catch (e) {
          t = !1
        }
        return t
      }

      function v(e) {
        let t, r = navigator.oscpu,
          n = navigator.platform.toLowerCase(),
          i = w(e);
        if (t = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, t && "Windows Phone" !== i && "Android" !== i && "iOS" !== i && "Other" !== i) return !0;
        if (void 0 !== r) {
          if (r = r.toLowerCase(), r.indexOf("win") >= 0 && "Windows" !== i && "Windows Phone" !== i) return !0;
          if (r.indexOf("linux") >= 0 && "Linux" !== i && "Android" !== i) return !0;
          if (r.indexOf("mac") >= 0 && "Mac" !== i && "iOS" !== i) return !0;
          if (0 === r.indexOf("win") && 0 === r.indexOf("linux") && r.indexOf("mac") >= 0 && "other" !== i) return !0
        }
        return n.indexOf("win") >= 0 && "Windows" !== i && "Windows Phone" !== i || (n.indexOf("linux") >= 0 || n.indexOf("android") >= 0 || n.indexOf("pike") >= 0) && "Linux" !== i && "Android" !== i || (n.indexOf("mac") >= 0 || n.indexOf("ipad") >= 0 || n.indexOf("ipod") >= 0 || n.indexOf("iphone") >= 0) && "Mac" !== i && "iOS" !== i || 0 === n.indexOf("win") && 0 === n.indexOf("linux") && n.indexOf("mac") >= 0 && "other" !== i || void 0 === navigator.plugins && "Windows" !== i && "Windows Phone" !== i
      }

      function b(e, t) {
        const r = function() {
            let e, t = navigator.userAgent.toLowerCase();
            return e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("ucbrowser") >= 0 ? "UC Browser" : t.indexOf("maxthon") >= 0 ? "Maxthon" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("edge") >= 0 || t.indexOf("edg") >= 0 ? "Microsoft Edge" : t.indexOf("chrome") >= 0 || t.indexOf("crios") >= 0 ? "Chrome" : t.indexOf("playstation") >= 0 ? "PlayStation" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : t.indexOf("nintendobrowser") >= 0 ? "Nintendo" : "Unknown browser", e
          }(),
          n = w(e, t);
        switch (r) {
          case "PlayStation":
          case "Nintendo":
            return n;
          default:
            return r + " on " + n
        }
      }

      function w(e, t) {
        if (e) return e;
        let r, n = navigator.userAgent.toLowerCase();
        return r = n.indexOf("windows phone") >= 0 ? "Windows Phone" : n.indexOf("steam") >= 0 ? "Steam" : n.indexOf("xbox series x") >= 0 || n.indexOf("xbox series s") >= 0 ? "Xbox Series X|S" : n.indexOf("xbox one") >= 0 || n.indexOf("xbox_one") >= 0 ? "Xbox One" : n.indexOf("xbox") >= 0 ? "Xbox 360" : t && t.model && "xbox" === t.model.toLowerCase() ? "Xbox" : n.indexOf("playstation 5") >= 0 ? "PlayStation 5" : n.indexOf("playstation 4") >= 0 ? "PlayStation 4" : n.indexOf("playstation 3") >= 0 ? "PlayStation 3" : n.indexOf("win") >= 0 ? "Windows" : n.indexOf("android") >= 0 ? "Android" : n.indexOf("linux") >= 0 ? "Linux" : n.indexOf("nintendo switch") >= 0 ? "Nintendo Switch" : n.indexOf("iphone") >= 0 || n.indexOf("ipad") >= 0 ? "iOS" : n.indexOf("mac") >= 0 ? "Mac" : "Unknown OS", r
      }

      function y(e) {
        let t = ["monospace", "sans-serif", "serif"],
          r = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
          n = document.getElementsByTagName("body")[0],
          i = document.createElement("div"),
          a = document.createElement("div"),
          s = {},
          o = {},
          l = function() {
            let e = document.createElement("span");
            return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.innerHTML = "mmmmmmmmmmlli", e
          },
          d = function(e, t) {
            let r = l();
            return r.style.fontFamily = "'" + e + "'," + t, r
          },
          c = function(e) {
            let r = !1;
            for (let n = 0; n < t.length; n++)
              if (r = e[n].offsetWidth !== s[t[n]] || e[n].offsetHeight !== o[t[n]], r) return r;
            return r
          },
          u = function() {
            let e = [];
            for (let r = 0, n = t.length; r < n; r++) {
              let n = l();
              n.style.fontFamily = t[r], i.appendChild(n), e.push(n)
            }
            return e
          }();
        n.appendChild(i);
        for (let e = 0, r = t.length; e < r; e++) s[t[e]] = u[e].offsetWidth, o[t[e]] = u[e].offsetHeight;
        let p = function() {
          let e = {};
          for (let n = 0, i = r.length; n < i; n++) {
            let i = [];
            for (let e = 0, s = t.length; e < s; e++) {
              let s = d(r[n], t[e]);
              a.appendChild(s), i.push(s)
            }
            e[r[n]] = i
          }
          return e
        }();
        n.appendChild(a);
        let f = [];
        for (let e = 0, t = r.length; e < t; e++) c(p[r[e]]) && f.push(r[e]);
        return n.removeChild(a), n.removeChild(i), f
      }
      n = e.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
      }), i = e.exports, a = () => E, Object.defineProperty(i, "default", {
        get: a,
        set: undefined,
        enumerable: !0,
        configurable: !0
      });
      let S = null;
      const x = {
        get: function(e) {
          return S || (S = new Promise((t => {
            const r = function(e) {
                return e && e.__esModule ? e.default : e
              }(s).load({
                monitoring: !1
              }),
              n = navigator.userAgentData && navigator.userAgentData.getHighEntropyValues ? navigator.userAgentData.getHighEntropyValues(["model"]) : Promise.resolve({});
            Promise.all([r, n]).then((r => {
              const n = r[0],
                i = r[1];
              n.get().then((r => {
                const n = r.components,
                  a = {
                    fp: {
                      user_agent: f(navigator.userAgent),
                      language: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "",
                      pixel_ratio: window.devicePixelRatio || "",
                      timezone_offset: (new Date).getTimezoneOffset(),
                      session_storage: n.sessionStorage.value ? 1 : 0,
                      local_storage: n.localStorage.value ? 1 : 0,
                      indexed_db: n.indexedDB.value ? 1 : 0,
                      open_database: n.openDatabase.value ? 1 : 0,
                      cpu_class: n.cpuClass.value ? n.cpuClass.value : "unknown",
                      navigator_platform: n.platform.value ? n.platform.value : "unknown",
                      do_not_track: navigator.doNotTrack ? navigator.doNotTrack : "unknown",
                      regular_plugins: f(m(n.plugins.value).join(";")),
                      canvas: null,
                      webgl: null,
                      adblock: f(g()),
                      has_lied_os: v(i),
                      touch_support: [n.touchSupport.value.maxTouchPoints, n.touchSupport.value.touchEvent, n.touchSupport.value.touchStart].join(";"),
                      device_name: b(e, i),
                      js_fonts: f(y().join(";"))
                    }
                  };
                h() ? a.fp.canvas = f(function() {
                    let e = [],
                      t = document.createElement("canvas");
                    t.width = 2e3, t.height = 200, t.style.display = "inline";
                    let r = t.getContext("2d");
                    return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === r.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", r.font = "11pt no-real-font-123", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.2)", r.font = "18pt Arial", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), r.globalCompositeOperation = "multiply", r.fillStyle = "rgb(255,0,255)", r.beginPath(), r.arc(50, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(0,255,255)", r.beginPath(), r.arc(100, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,255,0)", r.beginPath(), r.arc(75, 100, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,0,255)", r.arc(75, 75, 75, 0, 2 * Math.PI, !0), r.arc(75, 75, 25, 0, 2 * Math.PI, !0), r.fill("evenodd"), e.push("canvas fp:" + t.toDataURL()), e.join("~")
                  }()) : delete a.fp.canvas,
                  function() {
                    if (!h()) return !1;
                    let e, t = document.createElement("canvas");
                    try {
                      e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                    } catch (t) {
                      e = !1
                    }
                    return !!window.WebGLRenderingContext && !!e
                  }() ? a.fp.webgl = f(function() {
                    let e, t = function(t) {
                      return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                    };
                    if (e = function() {
                        let e = document.createElement("canvas"),
                          t = null;
                        try {
                          t = e.getContext("webgl") || e.getContext("experimental-webgl")
                        } catch (e) {}
                        return t || (t = null), t
                      }(), !e) return null;
                    let r = [],
                      n = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, n);
                    let i = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                    e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW), n.itemSize = 3, n.numItems = 3;
                    let a = e.createProgram(),
                      s = e.createShader(e.VERTEX_SHADER);
                    e.shaderSource(s, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(s);
                    let o = e.createShader(e.FRAGMENT_SHADER);
                    return e.shaderSource(o, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(o), e.attachShader(a, s), e.attachShader(a, o), e.linkProgram(a), e.useProgram(a), a.vertexPosAttrib = e.getAttribLocation(a, "attrVertex"), a.offsetUniform = e.getUniformLocation(a, "uniformOffset"), e.enableVertexAttribArray(a.vertexPosArray), e.vertexAttribPointer(a.vertexPosAttrib, n.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(a.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, n.numItems), e.canvas && r.push(e.canvas.toDataURL()), r.push("extensions:" + e.getSupportedExtensions().join(";")), r.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), r.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), r.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), r.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), r.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), r.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), r.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), r.push("webgl max anisotropy:" + function(e) {
                      let t, r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                      return r ? (t = e.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
                    }(e)), r.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), r.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), r.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), r.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), r.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), r.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), r.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), r.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), r.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), r.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), r.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), r.push("webgl red bits:" + e.getParameter(e.RED_BITS)), r.push("webgl renderer:" + e.getParameter(e.RENDERER)), r.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), r.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), r.push("webgl vendor:" + e.getParameter(e.VENDOR)), r.push("webgl version:" + e.getParameter(e.VERSION)), e.getShaderPrecisionFormat ? (r.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), r.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), r.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), r.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), r.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), r.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), r.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), r.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), r.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), r.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), r.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), r.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), r.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), r.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), r.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), r.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), r.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), r.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), r.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), r.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), r.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), r.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), r.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), r.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), r.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), r.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), r.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), r.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), r.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), r.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), r.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), r.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), r.join("~")) : ("undefined" == typeof NODEBUG && console.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"), r.join("~"))
                  }()) : delete a.fp.webgl;
                const s = JSON.stringify(a);
                t(s)
              }))
            })).catch((e => console.error(e)))
          }))), S
        }
      };
      var E = x
    }
  }
]);