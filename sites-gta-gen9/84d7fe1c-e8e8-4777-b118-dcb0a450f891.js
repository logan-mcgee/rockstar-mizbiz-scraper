try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "84d7fe1c-e8e8-4777-b118-dcb0a450f891", e._sentryDebugIdIdentifier = "sentry-dbid-84d7fe1c-e8e8-4777-b118-dcb0a450f891")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [954, 8312, 8573], {
    21991: (e, t, s) => {
      function r(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function i(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s])
        }))
      }
      s.d(t, {
        a: () => l,
        g: () => a
      });
      const n = {
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

      function a() {
        const e = "undefined" != typeof document ? document : {};
        return i(e, n), e
      }
      const o = {
        document: n,
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
    23205: (e, t, s) => {
      s.d(t, {
        RC: () => Q,
        qr: () => ee
      });
      var r = s(61913),
        i = s(21991),
        n = s(99108);
      let a, o, l;

      function d() {
        return a || (a = function() {
          const e = (0, i.a)(),
            t = (0, i.g)();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), a
      }

      function c(e) {
        return void 0 === e && (e = {}), o || (o = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const s = d(),
            r = (0, i.a)(),
            n = r.navigator.platform,
            a = t || r.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            l = r.screen.width,
            c = r.screen.height,
            p = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = a.match(/(iPad).*OS\s([\d_]+)/);
          const f = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === n;
          let v = "MacIntel" === n;
          return !u && v && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), v = !1), p && !m && (o.os = "android", o.android = !0), (u || h || f) && (o.os = "ios", o.ios = !0), o
        }(e)), o
      }

      function p() {
        return l || (l = function() {
          const e = (0, i.a)(),
            t = c();
          let s = !1;

          function r() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
          }
          if (r()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
              const [e, r] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
              s = e < 16 || 16 === e && r < 2
            }
          }
          const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
            a = r();
          return {
            isSafari: s || a,
            needPerspectiveFix: s,
            need3dFix: a || n && t.ios,
            isWebView: n
          }
        }()), l
      }
      var u = {
        on(e, t, s) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof t) return r;
          const i = s ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
          })), r
        },
        once(e, t, s) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof t) return r;

          function i() {
            r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
            t.apply(r, n)
          }
          return i.__emitterProxy = t, r.on(e, i, s)
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          const r = t ? "unshift" : "push";
          return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[r](e), s
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
          const s = this;
          return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((r, i) => {
              (r === t || r.__emitterProxy && r.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
            }))
          })), s) : s
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, r;
          for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
          return "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), r = e) : (t = n[0].events, s = n[0].data, r = n[0].context || e), s.unshift(r), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(r, [t, ...s])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(r, s)
            }))
          })), e
        }
      };
      const f = (e, t, s) => {
          t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
        },
        h = (e, t, s) => {
          t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
        },
        m = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        v = (e, t) => {
          if (!e.slides[t]) return;
          const s = e.slides[t].querySelector('[loading="lazy"]');
          s && s.removeAttribute("loading")
        },
        g = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const s = e.slides.length;
          if (!s || !t || t < 0) return;
          t = Math.min(t, s);
          const r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const s = i,
              n = [s - t];
            return n.push(...Array.from({
              length: t
            }).map(((e, t) => s + r + t))), void e.slides.forEach(((t, s) => {
              n.includes(t.column) && v(e, s)
            }))
          }
          const n = i + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let r = i - t; r <= n + t; r += 1) {
              const t = (r % s + s) % s;
              (t < i || t > n) && v(e, t)
            } else
              for (let r = Math.max(i - t, 0); r <= Math.min(n + t, s - 1); r += 1) r !== i && (r > n || r < i) && v(e, r)
        };
      var w = {
        updateSize: function() {
          const e = this;
          let t, s;
          const r = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt((0, n.p)(r, "padding-left") || 0, 10) - parseInt((0, n.p)(r, "padding-right") || 0, 10), s = s - parseInt((0, n.p)(r, "padding-top") || 0, 10) - parseInt((0, n.p)(r, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, s) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
          }
          const s = e.params,
            {
              wrapperEl: r,
              slidesEl: i,
              size: a,
              rtlTranslate: o,
              wrongRTL: l
            } = e,
            d = e.virtual && s.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            p = (0, n.e)(i, `.${e.params.slideClass}, swiper-slide`),
            u = d ? e.virtual.slides.length : p.length;
          let f = [];
          const h = [],
            m = [];
          let v = s.slidesOffsetBefore;
          "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
          let g = s.slidesOffsetAfter;
          "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
          const w = e.snapGrid.length,
            b = e.slidesGrid.length;
          let S = s.spaceBetween,
            T = -v,
            y = 0,
            E = 0;
          if (void 0 === a) return;
          "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * a : "string" == typeof S && (S = parseFloat(S)), e.virtualSize = -S, p.forEach((e => {
            o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), s.centeredSlides && s.cssMode && ((0, n.s)(r, "--swiper-centered-offset-before", ""), (0, n.s)(r, "--swiper-centered-offset-after", ""));
          const x = s.grid && s.grid.rows > 1 && e.grid;
          let M;
          x ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
          const P = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
          for (let r = 0; r < u; r += 1) {
            let i;
            if (M = 0, p[r] && (i = p[r]), x && e.grid.updateSlide(r, i, p), !p[r] || "none" !== (0, n.p)(i, "display")) {
              if ("auto" === s.slidesPerView) {
                P && (p[r].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(i),
                  o = i.style.transform,
                  l = i.style.webkitTransform;
                if (o && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), s.roundLengths) M = e.isHorizontal() ? (0, n.f)(i, "width", !0) : (0, n.f)(i, "height", !0);
                else {
                  const e = t(a, "width"),
                    s = t(a, "padding-left"),
                    r = t(a, "padding-right"),
                    n = t(a, "margin-left"),
                    o = t(a, "margin-right"),
                    l = a.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) M = e + n + o;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: a
                    } = i;
                    M = e + s + r + n + o + (a - t)
                  }
                }
                o && (i.style.transform = o), l && (i.style.webkitTransform = l), s.roundLengths && (M = Math.floor(M))
              } else M = (a - (s.slidesPerView - 1) * S) / s.slidesPerView, s.roundLengths && (M = Math.floor(M)), p[r] && (p[r].style[e.getDirectionLabel("width")] = `${M}px`);
              p[r] && (p[r].swiperSlideSize = M), m.push(M), s.centeredSlides ? (T = T + M / 2 + y / 2 + S, 0 === y && 0 !== r && (T = T - a / 2 - S), 0 === r && (T = T - a / 2 - S), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), E % s.slidesPerGroup == 0 && f.push(T), h.push(T)) : (s.roundLengths && (T = Math.floor(T)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && f.push(T), h.push(T), T = T + M + S), e.virtualSize += M + S, y = M, E += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, a) + g, o && l && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = `${e.virtualSize+S}px`), s.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize+S}px`), x && e.grid.updateWrapperSize(M, f), !s.centeredSlides) {
            const t = [];
            for (let r = 0; r < f.length; r += 1) {
              let i = f[r];
              s.roundLengths && (i = Math.floor(i)), f[r] <= e.virtualSize - a && t.push(i)
            }
            f = t, Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - a)
          }
          if (d && s.loop) {
            const t = m[0] + S;
            if (s.slidesPerGroup > 1) {
              const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                i = t * s.slidesPerGroup;
              for (let e = 0; e < r; e += 1) f.push(f[f.length - 1] + i)
            }
            for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
          }
          if (0 === f.length && (f = [0]), 0 !== S) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            p.filter(((e, t) => !(s.cssMode && !s.loop) || t !== p.length - 1)).forEach((e => {
              e.style[t] = `${S}px`
            }))
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t => {
              e += t + (S || 0)
            })), e -= S;
            const t = e > a ? e - a : 0;
            f = f.map((e => e <= 0 ? -v : e > t ? t + g : e))
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            m.forEach((t => {
              e += t + (S || 0)
            })), e -= S;
            const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
            if (e + t < a) {
              const s = (a - e - t) / 2;
              f.forEach(((e, t) => {
                f[t] = e - s
              })), h.forEach(((e, t) => {
                h[t] = e + s
              }))
            }
          }
          if (Object.assign(e, {
              slides: p,
              snapGrid: f,
              slidesGrid: h,
              slidesSizesGrid: m
            }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
            (0, n.s)(r, "--swiper-centered-offset-before", -f[0] + "px"), (0, n.s)(r, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
          }
          if (u !== c && e.emit("slidesLengthChange"), f.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(d || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
            const t = `${s.containerModifierClass}backface-hidden`,
              r = e.el.classList.contains(t);
            u <= s.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            s = [],
            r = t.virtual && t.params.virtual.enabled;
          let i, n = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const a = e => r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              s.push(e)
            }));
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !r) break;
                s.push(a(e))
              } else s.push(a(t.activeIndex));
          for (i = 0; i < s.length; i += 1)
            if (void 0 !== s[i]) {
              const e = s[i].offsetHeight;
              n = e > n ? e : n
            }(n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            s = t.params,
            {
              slides: r,
              rtlTranslate: i,
              snapGrid: n
            } = t;
          if (0 === r.length) return;
          void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          i && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let o = s.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < r.length; e += 1) {
            const l = r[e];
            let d = l.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (d -= r[0].swiperSlideOffset);
            const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              u = -(a - d),
              h = u + t.slidesSizesGrid[e],
              m = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
              v = u >= 0 && u < t.size - 1 || h > 1 && h <= t.size || u <= 0 && h >= t.size;
            v && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), f(l, v, s.slideVisibleClass), f(l, m, s.slideFullyVisibleClass), l.progress = i ? -c : c, l.originalProgress = i ? -p : p
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * s || 0
          }
          const s = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let {
            progress: i,
            isBeginning: n,
            isEnd: a,
            progressLoop: o
          } = t;
          const l = n,
            d = a;
          if (0 === r) i = 0, n = !0, a = !0;
          else {
            i = (e - t.minTranslate()) / r;
            const s = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            n = s || i <= 0, a = o || i >= 1, s && (i = 0), o && (i = 1)
          }
          if (s.loop) {
            const s = t.getSlideIndexByData(0),
              r = t.getSlideIndexByData(t.slides.length - 1),
              i = t.slidesGrid[s],
              n = t.slidesGrid[r],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            o = l >= i ? (l - i) / a : (l + a - n) / a, o > 1 && (o -= 1)
          }
          Object.assign(t, {
            progress: i,
            progressLoop: o,
            isBeginning: n,
            isEnd: a
          }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: s,
              slidesEl: r,
              activeIndex: i
            } = e,
            a = e.virtual && s.virtual.enabled,
            o = e.grid && s.grid && s.grid.rows > 1,
            l = e => (0, n.e)(r, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
          let d, c, p;
          if (a)
            if (s.loop) {
              let t = i - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), d = l(`[data-swiper-slide-index="${t}"]`)
            } else d = l(`[data-swiper-slide-index="${i}"]`);
          else o ? (d = t.find((e => e.column === i)), p = t.find((e => e.column === i + 1)), c = t.find((e => e.column === i - 1))) : d = t[i];
          d && (o || (p = (0, n.q)(d, `.${s.slideClass}, swiper-slide`)[0], s.loop && !p && (p = t[0]), c = (0, n.r)(d, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !c && (c = t[t.length - 1]))), t.forEach((e => {
            h(e, e === d, s.slideActiveClass), h(e, e === p, s.slideNextClass), h(e, e === c, s.slidePrevClass)
          })), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: r,
              params: i,
              activeIndex: n,
              realIndex: a,
              snapIndex: o
            } = t;
          let l, d = e;
          const c = e => {
            let s = e - t.virtual.slidesBefore;
            return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
          };
          if (void 0 === d && (d = function(e) {
              const {
                slidesGrid: t,
                params: s
              } = e, r = e.rtlTranslate ? e.translate : -e.translate;
              let i;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? r >= t[e] && r < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : r >= t[e] && r < t[e + 1] && (i = e + 1) : r >= t[e] && (i = e);
              return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            }(t)), r.indexOf(s) >= 0) l = r.indexOf(s);
          else {
            const e = Math.min(i.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / i.slidesPerGroup)
          }
          if (l >= r.length && (l = r.length - 1), d === n && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const p = t.grid && i.grid && i.grid.rows > 1;
          let u;
          if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
          else if (p) {
            const e = t.slides.find((e => e.column === d));
            let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / i.grid.rows)
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            u = e ? parseInt(e, 10) : d
          } else u = d;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: a,
            realIndex: u,
            previousIndex: n,
            activeIndex: d
          }), t.initialized && g(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const s = this,
            r = s.params;
          let i = e.closest(`.${r.slideClass}, swiper-slide`);
          !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !i && e.matches && e.matches(`.${r.slideClass}, swiper-slide`) && (i = e)
          }));
          let n, a = !1;
          if (i)
            for (let e = 0; e < s.slides.length; e += 1)
              if (s.slides[e] === i) {
                a = !0, n = e;
                break
              } if (!i || !a) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
          s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, r.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
      };

      function b(e) {
        let {
          swiper: t,
          runCallbacks: s,
          direction: r,
          step: i
        } = e;
        const {
          activeIndex: n,
          previousIndex: a
        } = t;
        let o = r;
        if (o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${i}`), s && n !== a) {
          if ("reset" === o) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`), "next" === o ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
      }
      var S = {
          slideTo: function(e, t, s, r, i) {
            void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const a = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: l,
              snapGrid: d,
              slidesGrid: c,
              previousIndex: u,
              activeIndex: f,
              rtlTranslate: h,
              wrapperEl: m,
              enabled: v
            } = a;
            if (!v && !r && !i || a.destroyed || a.animating && l.preventInteractionOnTransition) return !1;
            void 0 === t && (t = a.params.speed);
            const g = Math.min(a.params.slidesPerGroupSkip, o);
            let w = g + Math.floor((o - g) / a.params.slidesPerGroup);
            w >= d.length && (w = d.length - 1);
            const b = -d[w];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * b),
                  s = Math.floor(100 * c[e]),
                  r = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1] ? t >= s && t < r - (r - s) / 2 ? o = e : t >= s && t < r && (o = e + 1) : t >= s && (o = e)
              }
            if (a.initialized && o !== f) {
              if (!a.allowSlideNext && (h ? b > a.translate && b > a.minTranslate() : b < a.translate && b < a.minTranslate())) return !1;
              if (!a.allowSlidePrev && b > a.translate && b > a.maxTranslate() && (f || 0) !== o) return !1
            }
            let S;
            o !== (u || 0) && s && a.emit("beforeSlideChangeStart"), a.updateProgress(b), S = o > f ? "next" : o < f ? "prev" : "reset";
            const T = a.virtual && a.params.virtual.enabled;
            if ((!T || !i) && (h && -b === a.translate || !h && b === a.translate)) return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(b), "reset" !== S && (a.transitionStart(s, S), a.transitionEnd(s, S)), !1;
            if (l.cssMode) {
              const e = a.isHorizontal(),
                s = h ? b : -b;
              if (0 === t) T && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), T && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                m[e ? "scrollLeft" : "scrollTop"] = s
              }))) : m[e ? "scrollLeft" : "scrollTop"] = s, T && requestAnimationFrame((() => {
                a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
              }));
              else {
                if (!a.support.smoothScroll) return (0, n.t)({
                  swiper: a,
                  targetPosition: s,
                  side: e ? "left" : "top"
                }), !0;
                m.scrollTo({
                  [e ? "left" : "top"]: s,
                  behavior: "smooth"
                })
              }
              return !0
            }
            const y = p().isSafari;
            return T && !i && y && a.isElement && a.virtual.update(!1, !1, o), a.setTransition(t), a.setTranslate(b), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, r), a.transitionStart(s, S), 0 === t ? a.transitionEnd(s, S) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
              a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, S))
            }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, s, r) {
            void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const i = this;
            if (i.destroyed) return;
            void 0 === t && (t = i.params.speed);
            const n = i.grid && i.params.grid && i.params.grid.rows > 1;
            let a = e;
            if (i.params.loop)
              if (i.virtual && i.params.virtual.enabled) a += i.virtual.slidesBefore;
              else {
                let e;
                if (n) {
                  const t = a * i.params.grid.rows;
                  e = i.slides.find((e => 1 * e.getAttribute("data-swiper-slide-index") === t)).column
                } else e = i.getSlideIndexByData(a);
                const t = n ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                  {
                    centeredSlides: s
                  } = i.params;
                let o = i.params.slidesPerView;
                "auto" === o ? o = i.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(i.params.slidesPerView, 10)), s && o % 2 == 0 && (o += 1));
                let l = t - e < o;
                if (s && (l = l || e < Math.ceil(o / 2)), r && s && "auto" !== i.params.slidesPerView && !n && (l = !1), l) {
                  const r = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                  i.loopFix({
                    direction: r,
                    slideTo: !0,
                    activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === r ? i.realIndex : void 0
                  })
                }
                if (n) {
                  const e = a * i.params.grid.rows;
                  a = i.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)).column
                } else a = i.getSlideIndexByData(a)
              } return requestAnimationFrame((() => {
              i.slideTo(a, t, s, r)
            })), i
          },
          slideNext: function(e, t, s) {
            void 0 === t && (t = !0);
            const r = this,
              {
                enabled: i,
                params: n,
                animating: a
              } = r;
            if (!i || r.destroyed) return r;
            void 0 === e && (e = r.params.speed);
            let o = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
            const l = r.activeIndex < n.slidesPerGroupSkip ? 1 : o,
              d = r.virtual && n.virtual.enabled;
            if (n.loop) {
              if (a && !d && n.loopPreventsSliding) return !1;
              if (r.loopFix({
                  direction: "next"
                }), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && n.cssMode) return requestAnimationFrame((() => {
                r.slideTo(r.activeIndex + l, e, t, s)
              })), !0
            }
            return n.rewind && r.isEnd ? r.slideTo(0, e, t, s) : r.slideTo(r.activeIndex + l, e, t, s)
          },
          slidePrev: function(e, t, s) {
            void 0 === t && (t = !0);
            const r = this,
              {
                params: i,
                snapGrid: n,
                slidesGrid: a,
                rtlTranslate: o,
                enabled: l,
                animating: d
              } = r;
            if (!l || r.destroyed) return r;
            void 0 === e && (e = r.params.speed);
            const c = r.virtual && i.virtual.enabled;
            if (i.loop) {
              if (d && !c && i.loopPreventsSliding) return !1;
              r.loopFix({
                direction: "prev"
              }), r._clientLeft = r.wrapperEl.clientLeft
            }

            function p(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(o ? r.translate : -r.translate),
              f = n.map((e => p(e))),
              h = i.freeMode && i.freeMode.enabled;
            let m = n[f.indexOf(u) - 1];
            if (void 0 === m && (i.cssMode || h)) {
              let e;
              n.forEach(((t, s) => {
                u >= t && (e = s)
              })), void 0 !== e && (m = h ? n[e] : n[e > 0 ? e - 1 : e])
            }
            let v = 0;
            if (void 0 !== m && (v = a.indexOf(m), v < 0 && (v = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (v = v - r.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), i.rewind && r.isBeginning) {
              const i = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
              return r.slideTo(i, e, t, s)
            }
            return i.loop && 0 === r.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
              r.slideTo(v, e, t, s)
            })), !0) : r.slideTo(v, e, t, s)
          },
          slideReset: function(e, t, s) {
            void 0 === t && (t = !0);
            const r = this;
            if (!r.destroyed) return void 0 === e && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, s)
          },
          slideToClosest: function(e, t, s, r) {
            void 0 === t && (t = !0), void 0 === r && (r = .5);
            const i = this;
            if (i.destroyed) return;
            void 0 === e && (e = i.params.speed);
            let n = i.activeIndex;
            const a = Math.min(i.params.slidesPerGroupSkip, n),
              o = a + Math.floor((n - a) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[o]) {
              const e = i.snapGrid[o];
              l - e > (i.snapGrid[o + 1] - e) * r && (n += i.params.slidesPerGroup)
            } else {
              const e = i.snapGrid[o - 1];
              l - e <= (i.snapGrid[o] - e) * r && (n -= i.params.slidesPerGroup)
            }
            return n = Math.max(n, 0), n = Math.min(n, i.slidesGrid.length - 1), i.slideTo(n, e, t, s)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: s
            } = e, r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, a = e.clickedIndex;
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - r / 2 || a > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), a = e.getSlideIndex((0, n.e)(s, `${o}[data-swiper-slide-index="${i}"]`)[0]), (0, n.n)((() => {
                e.slideTo(a)
              }))) : e.slideTo(a) : a > e.slides.length - r ? (e.loopFix(), a = e.getSlideIndex((0, n.e)(s, `${o}[data-swiper-slide-index="${i}"]`)[0]), (0, n.n)((() => {
                e.slideTo(a)
              }))) : e.slideTo(a)
            } else e.slideTo(a)
          }
        },
        T = {
          loopCreate: function(e, t) {
            const s = this,
              {
                params: r,
                slidesEl: i
              } = s;
            if (!r.loop || s.virtual && s.params.virtual.enabled) return;
            const a = () => {
                (0, n.e)(i, `.${r.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              o = s.grid && r.grid && r.grid.rows > 1,
              l = r.slidesPerGroup * (o ? r.grid.rows : 1),
              d = s.slides.length % l != 0,
              c = o && s.slides.length % r.grid.rows != 0,
              p = e => {
                for (let t = 0; t < e; t += 1) {
                  const e = s.isElement ? (0, n.c)("swiper-slide", [r.slideBlankClass]) : (0, n.c)("div", [r.slideClass, r.slideBlankClass]);
                  s.slidesEl.append(e)
                }
              };
            d ? (r.loopAddBlankSlides ? (p(l - s.slides.length % l), s.recalcSlides(), s.updateSlides()) : (0, n.u)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), a()) : c ? (r.loopAddBlankSlides ? (p(r.grid.rows - s.slides.length % r.grid.rows), s.recalcSlides(), s.updateSlides()) : (0, n.u)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), a()) : a(), s.loopFix({
              slideRealIndex: e,
              direction: r.centeredSlides ? void 0 : "next",
              initial: t
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: s = !0,
              direction: r,
              setTranslate: i,
              activeSlideIndex: a,
              initial: o,
              byController: l,
              byMousewheel: d
            } = void 0 === e ? {} : e;
            const c = this;
            if (!c.params.loop) return;
            c.emit("beforeLoopFix");
            const {
              slides: p,
              allowSlidePrev: u,
              allowSlideNext: f,
              slidesEl: h,
              params: m
            } = c, {
              centeredSlides: v,
              initialSlide: g
            } = m;
            if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== c.snapIndex ? m.centeredSlides && c.snapIndex < m.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0) : c.slideTo(c.virtual.slides.length, 0, !1, !0)), c.allowSlidePrev = u, c.allowSlideNext = f, void c.emit("loopFix");
            let w = m.slidesPerView;
            "auto" === w ? w = c.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(m.slidesPerView, 10)), v && w % 2 == 0 && (w += 1));
            const b = m.slidesPerGroupAuto ? w : m.slidesPerGroup;
            let S = b;
            S % b != 0 && (S += b - S % b), S += m.loopAdditionalSlides, c.loopedSlides = S;
            const T = c.grid && m.grid && m.grid.rows > 1;
            p.length < w + S || "cards" === c.params.effect && p.length < w + 2 * S ? (0, n.u)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : T && "row" === m.grid.fill && (0, n.u)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const y = [],
              E = [],
              x = T ? Math.ceil(p.length / m.grid.rows) : p.length,
              M = o && x - g < w && !v;
            let P = M ? g : c.activeIndex;
            void 0 === a ? a = c.getSlideIndex(p.find((e => e.classList.contains(m.slideActiveClass)))) : P = a;
            const C = "next" === r || !r,
              _ = "prev" === r || !r;
            let k = 0,
              O = 0;
            const I = (T ? p[a].column : a) + (v && void 0 === i ? -w / 2 + .5 : 0);
            if (I < S) {
              k = Math.max(S - I, b);
              for (let e = 0; e < S - I; e += 1) {
                const t = e - Math.floor(e / x) * x;
                if (T) {
                  const e = x - t - 1;
                  for (let t = p.length - 1; t >= 0; t -= 1) p[t].column === e && y.push(t)
                } else y.push(x - t - 1)
              }
            } else if (I + w > x - S) {
              O = Math.max(I - (x - 2 * S), b), M && (O = Math.max(O, w - x + g + 1));
              for (let e = 0; e < O; e += 1) {
                const t = e - Math.floor(e / x) * x;
                T ? p.forEach(((e, s) => {
                  e.column === t && E.push(s)
                })) : E.push(t)
              }
            }
            if (c.__preventObserver__ = !0, requestAnimationFrame((() => {
                c.__preventObserver__ = !1
              })), "cards" === c.params.effect && p.length < w + 2 * S && (E.includes(a) && E.splice(E.indexOf(a), 1), y.includes(a) && y.splice(y.indexOf(a), 1)), _ && y.forEach((e => {
                p[e].swiperLoopMoveDOM = !0, h.prepend(p[e]), p[e].swiperLoopMoveDOM = !1
              })), C && E.forEach((e => {
                p[e].swiperLoopMoveDOM = !0, h.append(p[e]), p[e].swiperLoopMoveDOM = !1
              })), c.recalcSlides(), "auto" === m.slidesPerView ? c.updateSlides() : T && (y.length > 0 && _ || E.length > 0 && C) && c.slides.forEach(((e, t) => {
                c.grid.updateSlide(t, e, c.slides)
              })), m.watchSlidesProgress && c.updateSlidesOffset(), s)
              if (y.length > 0 && _) {
                if (void 0 === t) {
                  const e = c.slidesGrid[P],
                    t = c.slidesGrid[P + k] - e;
                  d ? c.setTranslate(c.translate - t) : (c.slideTo(P + Math.ceil(k), 0, !1, !0), i && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                } else if (i) {
                  const e = T ? y.length / m.grid.rows : y.length;
                  c.slideTo(c.activeIndex + e, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate
                }
              } else if (E.length > 0 && C)
              if (void 0 === t) {
                const e = c.slidesGrid[P],
                  t = c.slidesGrid[P - O] - e;
                d ? c.setTranslate(c.translate - t) : (c.slideTo(P - O, 0, !1, !0), i && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
              } else {
                const e = T ? E.length / m.grid.rows : E.length;
                c.slideTo(c.activeIndex - e, 0, !1, !0)
              } if (c.allowSlidePrev = u, c.allowSlideNext = f, c.controller && c.controller.control && !l) {
              const e = {
                slideRealIndex: t,
                direction: r,
                setTranslate: i,
                activeSlideIndex: a,
                byController: !0
              };
              Array.isArray(c.controller.control) ? c.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === m.slidesPerView && s
                })
              })) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
                ...e,
                slideTo: c.controller.control.params.slidesPerView === m.slidesPerView && s
              })
            }
            c.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: s
              } = e;
            if (!t.loop || !s || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const r = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              r[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), r.forEach((e => {
              s.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function y(e, t, s) {
        const r = (0, i.a)(),
          {
            params: n
          } = e,
          a = n.edgeSwipeDetection,
          o = n.edgeSwipeThreshold;
        return !a || !(s <= o || s >= r.innerWidth - o) || "prevent" === a && (t.preventDefault(), !0)
      }

      function E(e) {
        const t = this,
          s = (0, i.g)();
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === r.type) {
          if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
          a.pointerId = r.pointerId
        } else "touchstart" === r.type && 1 === r.targetTouches.length && (a.touchId = r.targetTouches[0].identifier);
        if ("touchstart" === r.type) return void y(t, r, r.targetTouches[0].pageX);
        const {
          params: o,
          touches: l,
          enabled: d
        } = t;
        if (!d) return;
        if (!o.simulateTouch && "mouse" === r.pointerType) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let c = r.target;
        if ("wrapper" === o.touchEventsTarget && !(0, n.v)(c, t.wrapperEl)) return;
        if ("which" in r && 3 === r.which) return;
        if ("button" in r && r.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const p = !!o.noSwipingClass && "" !== o.noSwipingClass,
          u = r.composedPath ? r.composedPath() : r.path;
        p && r.target && r.target.shadowRoot && u && (c = u[0]);
        const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          h = !(!r.target || !r.target.shadowRoot);
        if (o.noSwiping && (h ? function(e, t) {
            return void 0 === t && (t = this),
              function t(s) {
                if (!s || s === (0, i.g)() || s === (0, i.a)()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const r = s.closest(e);
                return r || s.getRootNode ? r || t(s.getRootNode().host) : null
              }(t)
          }(f, c) : c.closest(f))) return void(t.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
        l.currentX = r.pageX, l.currentY = r.pageY;
        const m = l.currentX,
          v = l.currentY;
        if (!y(t, r, m)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = m, l.startY = v, a.touchStartTime = (0, n.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1);
        let g = !0;
        c.matches(a.focusableElements) && (g = !1, "SELECT" === c.nodeName && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== c && ("mouse" === r.pointerType || "mouse" !== r.pointerType && !c.matches(a.focusableElements)) && s.activeElement.blur();
        const w = g && t.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !w || c.isContentEditable || r.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r)
      }

      function x(e) {
        const t = (0, i.g)(),
          s = this,
          r = s.touchEventsData,
          {
            params: a,
            touches: o,
            rtlTranslate: l,
            enabled: d
          } = s;
        if (!d) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
          if (null !== r.touchId) return;
          if (p.pointerId !== r.pointerId) return
        }
        if ("touchmove" === p.type) {
          if (c = [...p.changedTouches].find((e => e.identifier === r.touchId)), !c || c.identifier !== r.touchId) return
        } else c = p;
        if (!r.isTouched) return void(r.startMoving && r.isScrolling && s.emit("touchMoveOpposite", p));
        const u = c.pageX,
          f = c.pageY;
        if (p.preventedByNestedSwiper) return o.startX = u, void(o.startY = f);
        if (!s.allowTouchMove) return p.target.matches(r.focusableElements) || (s.allowClick = !1), void(r.isTouched && (Object.assign(o, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f
        }), r.touchStartTime = (0, n.d)()));
        if (a.touchReleaseOnEdges && !a.loop)
          if (s.isVertical()) {
            if (f < o.startY && s.translate <= s.maxTranslate() || f > o.startY && s.translate >= s.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
          } else {
            if (l && (u > o.startX && -s.translate <= s.maxTranslate() || u < o.startX && -s.translate >= s.minTranslate())) return;
            if (!l && (u < o.startX && s.translate <= s.maxTranslate() || u > o.startX && s.translate >= s.minTranslate())) return
          } if (t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== p.target && "mouse" !== p.pointerType && t.activeElement.blur(), t.activeElement && p.target === t.activeElement && p.target.matches(r.focusableElements)) return r.isMoved = !0, void(s.allowClick = !1);
        r.allowTouchCallbacks && s.emit("touchMove", p), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = u, o.currentY = f;
        const h = o.currentX - o.startX,
          m = o.currentY - o.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold) return;
        if (void 0 === r.isScrolling) {
          let e;
          s.isHorizontal() && o.currentY === o.startY || s.isVertical() && o.currentX === o.startX ? r.isScrolling = !1 : h * h + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(h)) / Math.PI, r.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (r.isScrolling && s.emit("touchMoveOpposite", p), void 0 === r.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (r.startMoving = !0)), r.isScrolling || "touchmove" === p.type && r.preventTouchMoveFromPointerMove) return void(r.isTouched = !1);
        if (!r.startMoving) return;
        s.allowClick = !1, !a.cssMode && p.cancelable && p.preventDefault(), a.touchMoveStopPropagation && !a.nested && p.stopPropagation();
        let v = s.isHorizontal() ? h : m,
          g = s.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        a.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), g = Math.abs(g) * (l ? 1 : -1)), o.diff = v, v *= a.touchRatio, l && (v = -v, g = -g);
        const w = s.touchesDirection;
        s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = g > 0 ? "prev" : "next";
        const b = s.params.loop && !a.cssMode,
          S = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!r.isMoved) {
          if (b && S && s.loopFix({
              direction: s.swipeDirection
            }), r.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: {
                bySwiperTouchMove: !0
              }
            });
            s.wrapperEl.dispatchEvent(e)
          }
          r.allowMomentumBounce = !1, !a.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(), !1 !== a._loopSwapReset && r.isMoved && r.allowThresholdMove && w !== s.touchesDirection && b && S && Math.abs(v) >= 1) return Object.assign(o, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f,
          startTranslate: r.currentTranslate
        }), r.loopSwapReset = !0, void(r.startTranslate = r.currentTranslate);
        s.emit("sliderMove", p), r.isMoved = !0, r.currentTranslate = v + r.startTranslate;
        let T = !0,
          y = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (y = 0), v > 0 ? (b && S && r.allowThresholdMove && r.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== a.slidesPerView && s.slides.length - a.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), r.currentTranslate > s.minTranslate() && (T = !1, a.resistance && (r.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + r.startTranslate + v) ** y))) : v < 0 && (b && S && r.allowThresholdMove && r.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== a.slidesPerView && s.slides.length - a.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === a.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
          }), r.currentTranslate < s.maxTranslate() && (T = !1, a.resistance && (r.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - r.startTranslate - v) ** y))), T && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), s.allowSlidePrev || s.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0) {
          if (!(Math.abs(v) > a.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove) return r.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, r.currentTranslate = r.startTranslate, void(o.diff = s.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(r.currentTranslate), s.setTranslate(r.currentTranslate))
      }

      function M(e) {
        const t = this,
          s = t.touchEventsData;
        let r, i = e;
        if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
          if (r = [...i.changedTouches].find((e => e.identifier === s.touchId)), !r || r.identifier !== s.touchId) return
        } else {
          if (null !== s.touchId) return;
          if (i.pointerId !== s.pointerId) return;
          r = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && (!["pointercancel", "contextmenu"].includes(i.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        s.pointerId = null, s.touchId = null;
        const {
          params: a,
          touches: o,
          rtlTranslate: l,
          slidesGrid: d,
          enabled: c
        } = t;
        if (!c) return;
        if (!a.simulateTouch && "mouse" === i.pointerType) return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const p = (0, n.d)(),
          u = p - s.touchStartTime;
        if (t.allowClick) {
          const e = i.path || i.composedPath && i.composedPath();
          t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), u < 300 && p - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (s.lastClickTime = (0, n.d)(), (0, n.n)((() => {
            t.destroyed || (t.allowClick = !0)
          })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === o.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let f;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, f = a.followFinger ? l ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: f
        });
        const h = f >= -t.maxTranslate() && !t.params.loop;
        let m = 0,
          v = t.slidesSizesGrid[0];
        for (let e = 0; e < d.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
          const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== d[e + t] ? (h || f >= d[e] && f < d[e + t]) && (m = e, v = d[e + t] - d[e]) : (h || f >= d[e]) && (m = e, v = d[d.length - 1] - d[d.length - 2])
        }
        let g = null,
          w = null;
        a.rewind && (t.isBeginning ? w = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const b = (f - d[m]) / v,
          S = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (u > a.longSwipesMs) {
          if (!a.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (b >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + S) : t.slideTo(m)), "prev" === t.swipeDirection && (b > 1 - a.longSwipesRatio ? t.slideTo(m + S) : null !== w && b < 0 && Math.abs(b) > a.longSwipesRatio ? t.slideTo(w) : t.slideTo(m))
        } else {
          if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || i.target !== t.navigation.nextEl && i.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + S), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : m)) : i.target === t.navigation.nextEl ? t.slideTo(m + S) : t.slideTo(m)
        }
      }

      function P() {
        const e = this,
          {
            params: t,
            el: s
          } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: r,
          allowSlidePrev: i,
          snapGrid: n
        } = e, a = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
      }

      function C(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function _() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: r
          } = e;
        if (!r) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        i = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function k(e) {
        const t = this;
        m(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function O() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const I = (e, t) => {
          const s = (0, i.g)(),
            {
              params: r,
              el: n,
              wrapperEl: a,
              device: o
            } = e,
            l = !!r.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          n && "string" != typeof n && (s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), n[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), n[d]("pointerdown", e.onTouchStart, {
            passive: !1
          }), s[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), s[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), s[d]("touchend", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointerup", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), s[d]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointerout", e.onTouchEnd, {
            passive: !0
          }), s[d]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), s[d]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (r.preventClicks || r.preventClicksPropagation) && n[d]("click", e.onClick, !0), r.cssMode && a[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", P, !0) : e[c]("observerUpdate", P, !0), n[d]("load", e.onLoad, {
            capture: !0
          }))
        },
        L = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var A = {
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

      function z(e, t) {
        return function(s) {
          void 0 === s && (s = {});
          const r = Object.keys(s)[0],
            i = s[r];
          "object" == typeof i && null !== i ? (!0 === e[r] && (e[r] = {
            enabled: !0
          }), "navigation" === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0), r in e && "enabled" in i ? ("object" != typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {
            enabled: !1
          }), (0, n.w)(t, s)) : (0, n.w)(t, s)) : (0, n.w)(t, s)
        }
      }
      const G = {
          eventsEmitter: u,
          update: w,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: s,
                translate: r,
                wrapperEl: i
              } = this;
              if (t.virtualTranslate) return s ? -r : r;
              if (t.cssMode) return r;
              let a = (0, n.j)(i, e);
              return a += this.cssOverflowAdjustment(), s && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
              const s = this,
                {
                  rtlTranslate: r,
                  params: i,
                  wrapperEl: n,
                  progress: a
                } = s;
              let o, l = 0,
                d = 0;
              s.isHorizontal() ? l = r ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : d, i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -d : i.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
              const c = s.maxTranslate() - s.minTranslate();
              o = 0 === c ? 0 : (e - s.minTranslate()) / c, o !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, s, r, i) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === r && (r = !0);
              const a = this,
                {
                  params: o,
                  wrapperEl: l
                } = a;
              if (a.animating && o.preventInteractionOnTransition) return !1;
              const d = a.minTranslate(),
                c = a.maxTranslate();
              let p;
              if (p = r && e > d ? d : r && e < c ? c : e, a.updateProgress(p), o.cssMode) {
                const e = a.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -p;
                else {
                  if (!a.support.smoothScroll) return (0, n.t)({
                    swiper: a,
                    targetPosition: -p,
                    side: e ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [e ? "left" : "top"]: -p,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (a.setTransition(0), a.setTranslate(p), s && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(p), s && (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, a.animating = !1, s && a.emit("transitionEnd"))
              }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const s = this;
              s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const s = this,
                {
                  params: r
                } = s;
              r.cssMode || (r.autoHeight && s.updateAutoHeight(), b({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const s = this,
                {
                  params: r
                } = s;
              s.animating = !1, r.cssMode || (s.setTransition(0), b({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: S,
          loop: T,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
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
              e.onTouchStart = E.bind(e), e.onTouchMove = x.bind(e), e.onTouchEnd = M.bind(e), e.onDocumentTouchStart = O.bind(e), t.cssMode && (e.onScroll = _.bind(e)), e.onClick = C.bind(e), e.onLoad = k.bind(e), I(e, "on")
            },
            detachEvents: function() {
              I(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: s,
                  params: r,
                  el: a
                } = e,
                o = r.breakpoints;
              if (!o || o && 0 === Object.keys(o).length) return;
              const l = (0, i.g)(),
                d = "window" !== r.breakpointsBase && r.breakpointsBase ? "container" : r.breakpointsBase,
                c = ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase ? e.el : l.querySelector(r.breakpointsBase),
                p = e.getBreakpoint(o, d, c);
              if (!p || e.currentBreakpoint === p) return;
              const u = (p in o ? o[p] : void 0) || e.originalParams,
                f = L(e, r),
                h = L(e, u),
                m = e.params.grabCursor,
                v = u.grabCursor,
                g = r.enabled;
              f && !h ? (a.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !f && h && (a.classList.add(`${r.containerModifierClass}grid`), (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === r.grid.fill) && a.classList.add(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), m && !v ? e.unsetGrabCursor() : !m && v && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === u[t]) return;
                const s = r[t] && r[t].enabled,
                  i = u[t] && u[t].enabled;
                s && !i && e[t].disable(), !s && i && e[t].enable()
              }));
              const w = u.direction && u.direction !== r.direction,
                b = r.loop && (u.slidesPerView !== r.slidesPerView || w),
                S = r.loop;
              w && s && e.changeDirection(), (0, n.w)(e.params, u);
              const T = e.params.enabled,
                y = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), g && !T ? e.disable() : !g && T && e.enable(), e.currentBreakpoint = p, e.emit("_beforeBreakpoint", u), s && (b ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !S && y ? (e.loopCreate(t), e.updateSlides()) : S && !y && e.loopDestroy()), e.emit("breakpoint", u)
            },
            getBreakpoint: function(e, t, s) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
              let r = !1;
              const n = (0, i.a)(),
                a = "window" === t ? n.innerHeight : s.clientHeight,
                o = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: a * t,
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
                  value: a
                } = o[e];
                "window" === t ? n.matchMedia(`(min-width: ${a}px)`).matches && (r = i) : a <= s.clientWidth && (r = i)
              }
              return r || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: s
                } = e,
                {
                  slidesOffsetBefore: r
                } = s;
              if (r) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                e.isLocked = e.size > s
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: s,
                  rtl: r,
                  el: i,
                  device: n
                } = e,
                a = function(e, t) {
                  const s = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((r => {
                      e[r] && s.push(t + r)
                    })) : "string" == typeof e && s.push(t + e)
                  })), s
                }(["initialized", s.direction, {
                  "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                  autoheight: s.autoHeight
                }, {
                  rtl: r
                }, {
                  grid: s.grid && s.grid.rows > 1
                }, {
                  "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                }, {
                  android: n.android
                }, {
                  ios: n.ios
                }, {
                  "css-mode": s.cssMode
                }, {
                  centered: s.cssMode && s.centeredSlides
                }, {
                  "watch-progress": s.watchSlidesProgress
                }], s.containerModifierClass);
              t.push(...a), i.classList.add(...t), e.emitContainerClasses()
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
        D = {};
      class N {
        constructor() {
          let e, t;
          for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
          1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = (0, n.w)({}, t), e && !t.el && (t.el = e);
          const o = (0, i.g)();
          if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
            const e = [];
            return o.querySelectorAll(t.el).forEach((s => {
              const r = (0, n.w)({}, t, {
                el: s
              });
              e.push(new N(r))
            })), e
          }
          const l = this;
          l.__swiper__ = !0, l.support = d(), l.device = c({
            userAgent: t.userAgent
          }), l.browser = p(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
          const u = {};
          l.modules.forEach((e => {
            e({
              params: t,
              swiper: l,
              extendParams: z(t, u),
              on: l.on.bind(l),
              once: l.once.bind(l),
              off: l.off.bind(l),
              emit: l.emit.bind(l)
            })
          }));
          const f = (0, n.w)({}, A, u);
          return l.params = (0, n.w)({}, f, D, t), l.originalParams = (0, n.w)({}, l.params), l.passedParams = (0, n.w)({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
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
            params: s
          } = this, r = (0, n.e)(t, `.${s.slideClass}, swiper-slide`), i = (0, n.h)(r[0]);
          return (0, n.h)(e) - i
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)))
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = (0, n.e)(e, `.${t.slideClass}, swiper-slide`)
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
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = s.minTranslate(),
            i = (s.maxTranslate() - r) * e + r;
          s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
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
          e.slides.forEach((s => {
            const r = e.getSlideClasses(s);
            t.push({
              slideEl: s,
              classNames: r
            }), e.emit("_slideClass", s, r)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: s,
            slides: r,
            slidesGrid: i,
            slidesSizesGrid: n,
            size: a,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof s.slidesPerView) return s.slidesPerView;
          if (s.centeredSlides) {
            let e, t = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0;
            for (let s = o + 1; s < r.length; s += 1) r[s] && !e && (t += Math.ceil(r[s].swiperSlideSize), l += 1, t > a && (e = !0));
            for (let s = o - 1; s >= 0; s -= 1) r[s] && !e && (t += r[s].swiperSlideSize, l += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = o + 1; e < r.length; e += 1)(t ? i[e] + n[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
          else
            for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < a && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: s
          } = e;

          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let i;
          if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && m(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
              const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
              i = e.slideTo(t.length - 1, 0, !1, !0)
            } else i = e.slideTo(e.activeIndex, 0, !1, !0);
            i || r()
          }
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this,
            r = s.params.direction;
          return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${r}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let s = e || t.params.el;
          if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
          s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const r = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(r()) : (0, n.e)(s, r())[0];
          return !i && t.params.createElements && (i = (0, n.c)("div", t.params.wrapperClass), s.append(i), (0, n.e)(s, `.${t.params.slideClass}`).forEach((e => {
            i.append(e)
          }))), Object.assign(t, {
            el: s,
            wrapperEl: i,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === (0, n.p)(s, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === (0, n.p)(s, "direction")),
            wrongRTL: "-webkit-box" === (0, n.p)(i, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
          const s = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
            e.complete ? m(t, e) : e.addEventListener("load", (e => {
              m(t, e.target)
            }))
          })), g(t), t.initialized = !0, g(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            {
              params: r,
              el: i,
              wrapperEl: a,
              slides: o
            } = s;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), r.loop && s.loopDestroy(), t && (s.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), a && a.removeAttribute("style"), o && o.length && o.forEach((e => {
            e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
            s.off(e)
          })), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), (0, n.x)(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
          (0, n.w)(D, e)
        }
        static get extendedDefaults() {
          return D
        }
        static get defaults() {
          return A
        }
        static installModule(e) {
          N.prototype.__modules__ || (N.prototype.__modules__ = []);
          const t = N.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => N.installModule(e))), N) : (N.installModule(e), N)
        }
      }
      Object.keys(G).forEach((e => {
        Object.keys(G[e]).forEach((t => {
          N.prototype[t] = G[e][t]
        }))
      })), N.use([function(e) {
        let {
          swiper: t,
          on: s,
          emit: r
        } = e;
        const n = (0, i.a)();
        let a = null,
          o = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
          },
          d = () => {
            t && !t.destroyed && t.initialized && r("orientationchange")
          };
        s("init", (() => {
          t.params.resizeObserver && void 0 !== n.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
            o = n.requestAnimationFrame((() => {
              const {
                width: s,
                height: r
              } = t;
              let i = s,
                n = r;
              e.forEach((e => {
                let {
                  contentBoxSize: s,
                  contentRect: r,
                  target: a
                } = e;
                a && a !== t.el || (i = r ? r.width : (s[0] || s).inlineSize, n = r ? r.height : (s[0] || s).blockSize)
              })), i === s && n === r || l()
            }))
          })), a.observe(t.el)) : (n.addEventListener("resize", l), n.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
          o && n.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", d)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: s,
          on: r,
          emit: a
        } = e;
        const o = [],
          l = (0, i.a)(),
          d = function(e, s) {
            void 0 === s && (s = {});
            const r = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void a("observerUpdate", e[0]);
              const s = function() {
                a("observerUpdate", e[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0)
            }));
            r.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: t.isElement || (void 0 === s.childList || s).childList,
              characterData: void 0 === s.characterData || s.characterData
            }), o.push(r)
          };
        s({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), r("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = (0, n.a)(t.hostEl);
              for (let t = 0; t < e.length; t += 1) d(e[t])
            }
            d(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), d(t.wrapperEl, {
              attributes: !1
            })
          }
        })), r("destroy", (() => {
          o.forEach((e => {
            e.disconnect()
          })), o.splice(0, o.length)
        }))
      }]);
      const B = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function V(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function R(e, t) {
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : V(t[s]) && V(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : R(e[s], t[s]) : e[s] = t[s]
        }))
      }

      function j(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function F(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function $(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function H(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          s = [];
        return t.forEach((e => {
          s.indexOf(e) < 0 && s.push(e)
        })), s.join(" ")
      }

      function W(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function q() {
        return q = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
          }
          return e
        }, q.apply(this, arguments)
      }

      function Y(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function X(e) {
        const t = [];
        return r.Children.toArray(e).forEach((e => {
          Y(e) ? t.push(e) : e.props && e.props.children && X(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function U(e) {
        const t = [],
          s = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return r.Children.toArray(e).forEach((e => {
          if (Y(e)) t.push(e);
          else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const r = X(e.props.children);
            r.length > 0 ? r.forEach((e => t.push(e))) : s["container-end"].push(e)
          } else s["container-end"].push(e)
        })), {
          slides: t,
          slots: s
        }
      }

      function K(e, t) {
        return "undefined" == typeof window ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
      }
      const Z = (0, r.createContext)(null),
        J = (0, r.createContext)(null),
        Q = (0, r.forwardRef)((function(e, t) {
          let {
            className: s,
            tag: i = "div",
            wrapperTag: n = "div",
            children: a,
            onSwiper: o,
            ...l
          } = void 0 === e ? {} : e, d = !1;
          const [c, p] = (0, r.useState)("swiper"), [u, f] = (0, r.useState)(null), [h, m] = (0, r.useState)(!1), v = (0, r.useRef)(!1), g = (0, r.useRef)(null), w = (0, r.useRef)(null), b = (0, r.useRef)(null), S = (0, r.useRef)(null), T = (0, r.useRef)(null), y = (0, r.useRef)(null), E = (0, r.useRef)(null), x = (0, r.useRef)(null), {
            params: M,
            passedParams: P,
            rest: C,
            events: _
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const s = {
                on: {}
              },
              r = {},
              i = {};
            R(s, A), s._emitClasses = !0, s.init = !1;
            const n = {},
              a = B.map((e => e.replace(/_/, ""))),
              o = Object.assign({}, e);
            return Object.keys(o).forEach((o => {
              void 0 !== e[o] && (a.indexOf(o) >= 0 ? V(e[o]) ? (s[o] = {}, i[o] = {}, R(s[o], e[o]), R(i[o], e[o])) : (s[o] = e[o], i[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : s.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : n[o] = e[o])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
            })), {
              params: s,
              passedParams: i,
              rest: n,
              events: r
            }
          }(l), {
            slides: k,
            slots: O
          } = U(a), I = () => {
            m(!h)
          };
          Object.assign(M.on, {
            _containerClasses(e, t) {
              p(t)
            }
          });
          const L = () => {
            Object.assign(M.on, _), d = !0;
            const e = {
              ...M
            };
            if (delete e.wrapperClass, w.current = new N(e), w.current.virtual && w.current.params.virtual.enabled) {
              w.current.virtual.slides = k;
              const e = {
                cache: !1,
                slides: k,
                renderExternal: f,
                renderExternalUpdate: !1
              };
              R(w.current.params.virtual, e), R(w.current.originalParams.virtual, e)
            }
          };
          return g.current || L(), w.current && w.current.on("_beforeBreakpoint", I), (0, r.useEffect)((() => () => {
            w.current && w.current.off("_beforeBreakpoint", I)
          })), (0, r.useEffect)((() => {
            !v.current && w.current && (w.current.emitSlidesClasses(), v.current = !0)
          })), K((() => {
            if (t && (t.current = g.current), g.current) return w.current.destroyed && L(),
              function(e, t) {
                let {
                  el: s,
                  nextEl: r,
                  prevEl: i,
                  paginationEl: n,
                  scrollbarEl: a,
                  swiper: o
                } = e;
                j(t) && r && i && (o.params.navigation.nextEl = r, o.originalParams.navigation.nextEl = r, o.params.navigation.prevEl = i, o.originalParams.navigation.prevEl = i), F(t) && n && (o.params.pagination.el = n, o.originalParams.pagination.el = n), $(t) && a && (o.params.scrollbar.el = a, o.originalParams.scrollbar.el = a), o.init(s)
              }({
                el: g.current,
                nextEl: T.current,
                prevEl: y.current,
                paginationEl: E.current,
                scrollbarEl: x.current,
                swiper: w.current
              }, M), o && !w.current.destroyed && o(w.current), () => {
                w.current && !w.current.destroyed && w.current.destroy(!0, !1)
              }
          }), []), K((() => {
            !d && _ && w.current && Object.keys(_).forEach((e => {
              w.current.on(e, _[e])
            }));
            const e = function(e, t, s, r, i) {
              const n = [];
              if (!t) return n;
              const a = e => {
                n.indexOf(e) < 0 && n.push(e)
              };
              if (s && r) {
                const e = r.map(i),
                  t = s.map(i);
                e.join("") !== t.join("") && a("children"), r.length !== s.length && a("children")
              }
              return B.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                if (s in e && s in t)
                  if (V(e[s]) && V(t[s])) {
                    const r = Object.keys(e[s]),
                      i = Object.keys(t[s]);
                    r.length !== i.length ? a(s) : (r.forEach((r => {
                      e[s][r] !== t[s][r] && a(s)
                    })), i.forEach((r => {
                      e[s][r] !== t[s][r] && a(s)
                    })))
                  } else e[s] !== t[s] && a(s)
              })), n
            }(P, b.current, k, S.current, (e => e.key));
            return b.current = P, S.current = k, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: s,
                passedParams: r,
                changedParams: i,
                nextEl: n,
                prevEl: a,
                scrollbarEl: o,
                paginationEl: l
              } = e;
              const d = i.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: p,
                  navigation: u,
                  scrollbar: f,
                  virtual: h,
                  thumbs: m
                } = t;
              let v, g, w, b, S, T, y, E;
              i.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && c.thumbs && (!c.thumbs.swiper || c.thumbs.swiper.destroyed) && (v = !0), i.includes("controller") && r.controller && r.controller.control && c.controller && !c.controller.control && (g = !0), i.includes("pagination") && r.pagination && (r.pagination.el || l) && (c.pagination || !1 === c.pagination) && p && !p.el && (w = !0), i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || o) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (b = !0), i.includes("navigation") && r.navigation && (r.navigation.prevEl || a) && (r.navigation.nextEl || n) && (c.navigation || !1 === c.navigation) && u && !u.prevEl && !u.nextEl && (S = !0);
              const x = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              i.includes("loop") && t.isElement && (c.loop && !r.loop ? T = !0 : !c.loop && r.loop ? y = !0 : E = !0), d.forEach((e => {
                if (V(c[e]) && V(r[e])) Object.assign(c[e], r[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in r[e]) || r[e].enabled || x(e);
                else {
                  const t = r[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = r[e] : !1 === t && x(e)
                }
              })), d.includes("controller") && !g && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), i.includes("children") && s && h && c.virtual.enabled ? (h.slides = s, h.update(!0)) : i.includes("virtual") && h && c.virtual.enabled && (s && (h.slides = s), h.update(!0)), i.includes("children") && s && c.loop && (E = !0), v && m.init() && m.update(!0), g && (t.controller.control = c.controller.control), w && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (c.pagination.el = l), p.init(), p.render(), p.update()), b && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), t.el.appendChild(o)), o && (c.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()), S && (t.isElement && (n && "string" != typeof n || (n = document.createElement("div"), n.classList.add("swiper-button-next"), n.innerHTML = t.hostEl.constructor.nextButtonSvg, n.part.add("button-next"), t.el.appendChild(n)), a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-prev"), a.innerHTML = t.hostEl.constructor.prevButtonSvg, a.part.add("button-prev"), t.el.appendChild(a))), n && (c.navigation.nextEl = n), a && (c.navigation.prevEl = a), u.init(), u.update()), i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev), i.includes("direction") && t.changeDirection(r.direction, !1), (T || E) && t.loopDestroy(), (y || E) && t.loopCreate(), t.update()
            }({
              swiper: w.current,
              slides: k,
              passedParams: P,
              changedParams: e,
              nextEl: T.current,
              prevEl: y.current,
              scrollbarEl: x.current,
              paginationEl: E.current
            }), () => {
              _ && w.current && Object.keys(_).forEach((e => {
                w.current.off(e, _[e])
              }))
            }
          })), K((() => {
            var e;
            !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [u]), r.createElement(i, q({
            ref: g,
            className: H(`${c}${s?` ${s}`:""}`)
          }, C), r.createElement(J.Provider, {
            value: w.current
          }, O["container-start"], r.createElement(n, {
            className: W(M.wrapperClass)
          }, O["wrapper-start"], M.virtual ? function(e, t, s) {
            if (!s) return null;
            const i = e => {
                let s = e;
                return e < 0 ? s = t.length + e : s >= t.length && (s -= t.length), s
              },
              n = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
              } : {
                top: `${s.offset}px`
              },
              {
                from: a,
                to: o
              } = s,
              l = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < d; e += 1) e >= a && e <= o && c.push(t[i(e)]);
            return c.map(((t, s) => r.cloneElement(t, {
              swiper: e,
              style: n,
              key: t.props.virtualIndex || t.key || `slide-${s}`
            })))
          }(w.current, k, u) : k.map(((e, t) => r.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          }))), O["wrapper-end"]), j(M) && r.createElement(r.Fragment, null, r.createElement("div", {
            ref: y,
            className: "swiper-button-prev"
          }), r.createElement("div", {
            ref: T,
            className: "swiper-button-next"
          })), $(M) && r.createElement("div", {
            ref: x,
            className: "swiper-scrollbar"
          }), F(M) && r.createElement("div", {
            ref: E,
            className: "swiper-pagination"
          }), O["container-end"]))
        }));
      Q.displayName = "Swiper";
      const ee = (0, r.forwardRef)((function(e, t) {
        let {
          tag: s = "div",
          children: i,
          className: n = "",
          swiper: a,
          zoom: o,
          lazy: l,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...p
        } = void 0 === e ? {} : e;
        const u = (0, r.useRef)(null),
          [f, h] = (0, r.useState)("swiper-slide"),
          [m, v] = (0, r.useState)(!1);

        function g(e, t, s) {
          t === u.current && h(s)
        }
        K((() => {
          if (void 0 !== c && (u.current.swiperSlideIndex = c), t && (t.current = u.current), u.current && a) {
            if (!a.destroyed) return a.on("_slideClass", g), () => {
              a && a.off("_slideClass", g)
            };
            "swiper-slide" !== f && h("swiper-slide")
          }
        })), K((() => {
          a && u.current && !a.destroyed && h(a.getSlideClasses(u.current))
        }), [a]);
        const w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof i ? i(w) : i;
        return r.createElement(s, q({
          ref: u,
          className: H(`${f}${n?` ${n}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            v(!0)
          }
        }, p), o && r.createElement(Z.Provider, {
          value: w
        }, r.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, b(), l && !m && r.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && r.createElement(Z.Provider, {
          value: w
        }, b(), l && !m && r.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      ee.displayName = "SwiperSlide"
    },
    70954: (e, t, s) => {
      e.exports = s(92834)
    },
    92834: (e, t, s) => {
      var r = s(62229),
        i = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, s) {
        var r, n = {},
          d = null,
          c = null;
        for (r in void 0 !== s && (d = "" + s), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, r) && !l.hasOwnProperty(r) && (n[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === n[r] && (n[r] = t[r]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: c,
          props: n,
          _owner: o.current
        }
      }
      t.Fragment = n, t.jsx = d, t.jsxs = d
    },
    99108: (e, t, s) => {
      s.d(t, {
        a: () => S,
        c: () => m,
        d: () => a,
        e: () => u,
        f: () => y,
        h: () => b,
        j: () => o,
        k: () => T,
        l: () => l,
        m: () => E,
        n: () => n,
        p: () => w,
        q: () => g,
        r: () => v,
        s: () => c,
        t: () => p,
        u: () => h,
        v: () => f,
        w: () => d,
        x: () => i
      });
      var r = s(21991);

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

      function n(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function a() {
        return Date.now()
      }

      function o(e, t) {
        void 0 === t && (t = "x");
        const s = (0, r.a)();
        let i, n, a;
        const o = function(e) {
          const t = (0, r.a)();
          let s;
          return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new s.WebKitCSSMatrix("none" === n ? "" : n)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (n = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
      }

      function l(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function d() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
          const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
            const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, r = s.length; t < r; t += 1) {
              const r = s[t],
                n = Object.getOwnPropertyDescriptor(i, r);
              void 0 !== n && n.enumerable && (l(e[r]) && l(i[r]) ? i[r].__swiper__ ? e[r] = i[r] : d(e[r], i[r]) : !l(e[r]) && l(i[r]) ? (e[r] = {}, i[r].__swiper__ ? e[r] = i[r] : d(e[r], i[r])) : e[r] = i[r])
            }
          }
        }
        var s;
        return e
      }

      function c(e, t, s) {
        e.style.setProperty(t, s)
      }

      function p(e) {
        let {
          swiper: t,
          targetPosition: s,
          side: i
        } = e;
        const n = (0, r.a)(),
          a = -t.translate;
        let o, l = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > a ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / d, 1), 0),
              r = .5 - Math.cos(e * Math.PI) / 2;
            let c = a + r * (s - a);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                [i]: c
              }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [i]: c
              })
            })), void n.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = n.requestAnimationFrame(u)
          };
        u()
      }

      function u(e, t) {
        void 0 === t && (t = "");
        const s = (0, r.a)(),
          i = [...e.children];
        return s.HTMLSlotElement && e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t ? i.filter((e => e.matches(t))) : i
      }

      function f(e, t) {
        const s = (0, r.a)();
        let i = t.contains(e);
        return !i && s.HTMLSlotElement && t instanceof HTMLSlotElement && (i = [...t.assignedElements()].includes(e), i || (i = function(e, t) {
          const s = [t];
          for (; s.length > 0;) {
            const t = s.shift();
            if (e === t) return !0;
            s.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
          }
        }(e, t))), i
      }

      function h(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function m(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), s
      }

      function v(e, t) {
        const s = [];
        for (; e.previousElementSibling;) {
          const r = e.previousElementSibling;
          t ? r.matches(t) && s.push(r) : s.push(r), e = r
        }
        return s
      }

      function g(e, t) {
        const s = [];
        for (; e.nextElementSibling;) {
          const r = e.nextElementSibling;
          t ? r.matches(t) && s.push(r) : s.push(r), e = r
        }
        return s
      }

      function w(e, t) {
        return (0, r.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function b(e) {
        let t, s = e;
        if (s) {
          for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
          return t
        }
      }

      function S(e, t) {
        const s = [];
        let r = e.parentElement;
        for (; r;) t ? r.matches(t) && s.push(r) : s.push(r), r = r.parentElement;
        return s
      }

      function T(e, t) {
        t && e.addEventListener("transitionend", (function s(r) {
          r.target === e && (t.call(e, r), e.removeEventListener("transitionend", s))
        }))
      }

      function y(e, t, s) {
        const i = (0, r.a)();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }

      function E(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
      }
    }
  }
]);