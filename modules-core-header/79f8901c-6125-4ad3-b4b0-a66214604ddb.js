try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "79f8901c-6125-4ad3-b4b0-a66214604ddb", e._sentryDebugIdIdentifier = "sentry-dbid-79f8901c-6125-4ad3-b4b0-a66214604ddb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8388], {
    32654: (e, t, s) => {
      s.d(t, {
        RC: () => me,
        qr: () => ve
      });
      var i = s(73579);

      function r(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function n(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s])
        }))
      }
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

      function o() {
        const e = "undefined" != typeof document ? document : {};
        return n(e, a), e
      }
      const l = {
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

      function d() {
        const e = "undefined" != typeof window ? window : {};
        return n(e, l), e
      }

      function c(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function p() {
        return Date.now()
      }

      function u(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function f() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != r && (s = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
            const s = Object.keys(Object(r)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, i = s.length; t < i; t += 1) {
              const i = s[t],
                n = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== n && n.enumerable && (u(e[i]) && u(r[i]) ? r[i].__swiper__ ? e[i] = r[i] : f(e[i], r[i]) : !u(e[i]) && u(r[i]) ? (e[i] = {}, r[i].__swiper__ ? e[i] = r[i] : f(e[i], r[i])) : e[i] = r[i])
            }
          }
        }
        var s;
        return e
      }

      function h(e, t, s) {
        e.style.setProperty(t, s)
      }

      function m(e) {
        let {
          swiper: t,
          targetPosition: s,
          side: i
        } = e;
        const r = d(),
          n = -t.translate;
        let a, o = null;
        const l = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
            a = (new Date).getTime(), null === o && (o = a);
            const e = Math.max(Math.min((a - o) / l, 1), 0),
              d = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + d * (s - n);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                [i]: c
              }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [i]: c
              })
            })), void r.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = r.requestAnimationFrame(u)
          };
        u()
      }

      function v(e, t) {
        void 0 === t && (t = "");
        const s = d(),
          i = [...e.children];
        return s.HTMLSlotElement && e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t ? i.filter((e => e.matches(t))) : i
      }

      function g(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function w(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), s
      }

      function b(e, t) {
        return d().getComputedStyle(e, null).getPropertyValue(t)
      }

      function S(e) {
        let t, s = e;
        if (s) {
          for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
          return t
        }
      }

      function T(e, t, s) {
        const i = d();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }
      let y, E, x;

      function M() {
        return y || (y = function() {
          const e = d(),
            t = o();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), y
      }

      function P(e) {
        return void 0 === e && (e = {}), E || (E = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const s = M(),
            i = d(),
            r = i.navigator.platform,
            n = t || i.navigator.userAgent,
            a = {
              ios: !1,
              android: !1
            },
            o = i.screen.width,
            l = i.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === r;
          let m = "MacIntel" === r;
          return !p && m && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${l}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), c && !h && (a.os = "android", a.android = !0), (p || f || u) && (a.os = "ios", a.ios = !0), a
        }(e)), E
      }

      function C() {
        return x || (x = function() {
          const e = d(),
            t = P();
          let s = !1;

          function i() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
          }
          if (i()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
              const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
              s = e < 16 || 16 === e && i < 2
            }
          }
          const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
            n = i();
          return {
            isSafari: s || n,
            needPerspectiveFix: s,
            need3dFix: n || r && t.ios,
            isWebView: r
          }
        }()), x
      }
      var _ = {
        on(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const r = s ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
          })), i
        },
        once(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;

          function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
            t.apply(i, n)
          }
          return r.__emitterProxy = t, i.on(e, r, s)
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          const i = t ? "unshift" : "push";
          return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
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
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, r) => {
              (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1)
            }))
          })), s) : s
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, i;
          for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
          return "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(i, [t, ...s])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(i, s)
            }))
          })), e
        }
      };
      const k = (e, t, s) => {
          t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
        },
        I = (e, t, s) => {
          t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
        },
        O = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        L = (e, t) => {
          if (!e.slides[t]) return;
          const s = e.slides[t].querySelector('[loading="lazy"]');
          s && s.removeAttribute("loading")
        },
        z = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const s = e.slides.length;
          if (!s || !t || t < 0) return;
          t = Math.min(t, s);
          const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            r = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const s = r,
              n = [s - t];
            return n.push(...Array.from({
              length: t
            }).map(((e, t) => s + i + t))), void e.slides.forEach(((t, s) => {
              n.includes(t.column) && L(e, s)
            }))
          }
          const n = r + i - 1;
          if (e.params.rewind || e.params.loop)
            for (let i = r - t; i <= n + t; i += 1) {
              const t = (i % s + s) % s;
              (t < r || t > n) && L(e, t)
            } else
              for (let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1) i !== r && (i > n || i < r) && L(e, i)
        };
      var A = {
        updateSize: function() {
          const e = this;
          let t, s;
          const i = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(i, "padding-left") || 0, 10) - parseInt(b(i, "padding-right") || 0, 10), s = s - parseInt(b(i, "padding-top") || 0, 10) - parseInt(b(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
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
              wrapperEl: i,
              slidesEl: r,
              size: n,
              rtlTranslate: a,
              wrongRTL: o
            } = e,
            l = e.virtual && s.virtual.enabled,
            d = l ? e.virtual.slides.length : e.slides.length,
            c = v(r, `.${e.params.slideClass}, swiper-slide`),
            p = l ? e.virtual.slides.length : c.length;
          let u = [];
          const f = [],
            m = [];
          let g = s.slidesOffsetBefore;
          "function" == typeof g && (g = s.slidesOffsetBefore.call(e));
          let w = s.slidesOffsetAfter;
          "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
          const S = e.snapGrid.length,
            y = e.slidesGrid.length;
          let E = s.spaceBetween,
            x = -g,
            M = 0,
            P = 0;
          if (void 0 === n) return;
          "string" == typeof E && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * n : "string" == typeof E && (E = parseFloat(E)), e.virtualSize = -E, c.forEach((e => {
            a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), s.centeredSlides && s.cssMode && (h(i, "--swiper-centered-offset-before", ""), h(i, "--swiper-centered-offset-after", ""));
          const C = s.grid && s.grid.rows > 1 && e.grid;
          let _;
          C ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
          const k = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
          for (let i = 0; i < p; i += 1) {
            let r;
            if (_ = 0, c[i] && (r = c[i]), C && e.grid.updateSlide(i, r, c), !c[i] || "none" !== b(r, "display")) {
              if ("auto" === s.slidesPerView) {
                k && (c[i].style[e.getDirectionLabel("width")] = "");
                const n = getComputedStyle(r),
                  a = r.style.transform,
                  o = r.style.webkitTransform;
                if (a && (r.style.transform = "none"), o && (r.style.webkitTransform = "none"), s.roundLengths) _ = e.isHorizontal() ? T(r, "width", !0) : T(r, "height", !0);
                else {
                  const e = t(n, "width"),
                    s = t(n, "padding-left"),
                    i = t(n, "padding-right"),
                    a = t(n, "margin-left"),
                    o = t(n, "margin-right"),
                    l = n.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) _ = e + a + o;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: n
                    } = r;
                    _ = e + s + i + a + o + (n - t)
                  }
                }
                a && (r.style.transform = a), o && (r.style.webkitTransform = o), s.roundLengths && (_ = Math.floor(_))
              } else _ = (n - (s.slidesPerView - 1) * E) / s.slidesPerView, s.roundLengths && (_ = Math.floor(_)), c[i] && (c[i].style[e.getDirectionLabel("width")] = `${_}px`);
              c[i] && (c[i].swiperSlideSize = _), m.push(_), s.centeredSlides ? (x = x + _ / 2 + M / 2 + E, 0 === M && 0 !== i && (x = x - n / 2 - E), 0 === i && (x = x - n / 2 - E), Math.abs(x) < .001 && (x = 0), s.roundLengths && (x = Math.floor(x)), P % s.slidesPerGroup == 0 && u.push(x), f.push(x)) : (s.roundLengths && (x = Math.floor(x)), (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup == 0 && u.push(x), f.push(x), x = x + _ + E), e.virtualSize += _ + E, M = _, P += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, n) + w, a && o && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize+E}px`), s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize+E}px`), C && e.grid.updateWrapperSize(_, u), !s.centeredSlides) {
            const t = [];
            for (let i = 0; i < u.length; i += 1) {
              let r = u[i];
              s.roundLengths && (r = Math.floor(r)), u[i] <= e.virtualSize - n && t.push(r)
            }
            u = t, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n)
          }
          if (l && s.loop) {
            const t = m[0] + E;
            if (s.slidesPerGroup > 1) {
              const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                r = t * s.slidesPerGroup;
              for (let e = 0; e < i; e += 1) u.push(u[u.length - 1] + r)
            }
            for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && u.push(u[u.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
          }
          if (0 === u.length && (u = [0]), 0 !== E) {
            const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
            c.filter(((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
              e.style[t] = `${E}px`
            }))
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t => {
              e += t + (E || 0)
            })), e -= E;
            const t = e > n ? e - n : 0;
            u = u.map((e => e <= 0 ? -g : e > t ? t + w : e))
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            m.forEach((t => {
              e += t + (E || 0)
            })), e -= E;
            const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
            if (e + t < n) {
              const s = (n - e - t) / 2;
              u.forEach(((e, t) => {
                u[t] = e - s
              })), f.forEach(((e, t) => {
                f[t] = e + s
              }))
            }
          }
          if (Object.assign(e, {
              slides: c,
              snapGrid: u,
              slidesGrid: f,
              slidesSizesGrid: m
            }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
            h(i, "--swiper-centered-offset-before", -u[0] + "px"), h(i, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
          }
          if (p !== d && e.emit("slidesLengthChange"), u.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== y && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
            const t = `${s.containerModifierClass}backface-hidden`,
              i = e.el.classList.contains(t);
            p <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            s = [],
            i = t.virtual && t.params.virtual.enabled;
          let r, n = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const a = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              s.push(e)
            }));
            else
              for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const e = t.activeIndex + r;
                if (e > t.slides.length && !i) break;
                s.push(a(e))
              } else s.push(a(t.activeIndex));
          for (r = 0; r < s.length; r += 1)
            if (void 0 !== s[r]) {
              const e = s[r].offsetHeight;
              n = e > n ? e : n
            }(n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            s = t.params,
            {
              slides: i,
              rtlTranslate: r,
              snapGrid: n
            } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          r && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let o = s.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < i.length; e += 1) {
            const l = i[e];
            let d = l.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
            const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              u = -(a - d),
              f = u + t.slidesSizesGrid[e],
              h = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
              m = u >= 0 && u < t.size - 1 || f > 1 && f <= t.size || u <= 0 && f >= t.size;
            m && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), k(l, m, s.slideVisibleClass), k(l, h, s.slideFullyVisibleClass), l.progress = r ? -c : c, l.originalProgress = r ? -p : p
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * s || 0
          }
          const s = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let {
            progress: r,
            isBeginning: n,
            isEnd: a,
            progressLoop: o
          } = t;
          const l = n,
            d = a;
          if (0 === i) r = 0, n = !0, a = !0;
          else {
            r = (e - t.minTranslate()) / i;
            const s = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            n = s || r <= 0, a = o || r >= 1, s && (r = 0), o && (r = 1)
          }
          if (s.loop) {
            const s = t.getSlideIndexByData(0),
              i = t.getSlideIndexByData(t.slides.length - 1),
              r = t.slidesGrid[s],
              n = t.slidesGrid[i],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            o = l >= r ? (l - r) / a : (l + a - n) / a, o > 1 && (o -= 1)
          }
          Object.assign(t, {
            progress: r,
            progressLoop: o,
            isBeginning: n,
            isEnd: a
          }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", r)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: s,
              slidesEl: i,
              activeIndex: r
            } = e,
            n = e.virtual && s.virtual.enabled,
            a = e.grid && s.grid && s.grid.rows > 1,
            o = e => v(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
          let l, d, c;
          if (n)
            if (s.loop) {
              let t = r - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = o(`[data-swiper-slide-index="${t}"]`)
            } else l = o(`[data-swiper-slide-index="${r}"]`);
          else a ? (l = t.find((e => e.column === r)), c = t.find((e => e.column === r + 1)), d = t.find((e => e.column === r - 1))) : l = t[r];
          l && (a || (c = function(e, t) {
            const s = [];
            for (; e.nextElementSibling;) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), e = i
            }
            return s
          }(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = function(e, t) {
            const s = [];
            for (; e.previousElementSibling;) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), e = i
            }
            return s
          }(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach((e => {
            I(e, e === l, s.slideActiveClass), I(e, e === c, s.slideNextClass), I(e, e === d, s.slidePrevClass)
          })), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: i,
              params: r,
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
              } = e, i = e.rtlTranslate ? e.translate : -e.translate;
              let r;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : i >= t[e] && i < t[e + 1] && (r = e + 1) : i >= t[e] && (r = e);
              return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
            }(t)), i.indexOf(s) >= 0) l = i.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / r.slidesPerGroup)
          }
          if (l >= i.length && (l = i.length - 1), d === n && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const p = t.grid && r.grid && r.grid.rows > 1;
          let u;
          if (t.virtual && r.virtual.enabled && r.loop) u = c(d);
          else if (p) {
            const e = t.slides.find((e => e.column === d));
            let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / r.grid.rows)
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
          }), t.initialized && z(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const s = this,
            i = s.params;
          let r = e.closest(`.${i.slideClass}, swiper-slide`);
          !r && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e)
          }));
          let n, a = !1;
          if (r)
            for (let e = 0; e < s.slides.length; e += 1)
              if (s.slides[e] === r) {
                a = !0, n = e;
                break
              } if (!r || !a) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
          s.clickedSlide = r, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
      };

      function G(e) {
        let {
          swiper: t,
          runCallbacks: s,
          direction: i,
          step: r
        } = e;
        const {
          activeIndex: n,
          previousIndex: a
        } = t;
        let o = i;
        if (o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), s && n !== a) {
          if ("reset" === o) return void t.emit(`slideResetTransition${r}`);
          t.emit(`slideChangeTransition${r}`), "next" === o ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
        }
      }
      var D = {
          slideTo: function(e, t, s, i, r) {
            void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const n = this;
            let a = e;
            a < 0 && (a = 0);
            const {
              params: o,
              snapGrid: l,
              slidesGrid: d,
              previousIndex: c,
              activeIndex: p,
              rtlTranslate: u,
              wrapperEl: f,
              enabled: h
            } = n;
            if (!h && !i && !r || n.destroyed || n.animating && o.preventInteractionOnTransition) return !1;
            void 0 === t && (t = n.params.speed);
            const v = Math.min(n.params.slidesPerGroupSkip, a);
            let g = v + Math.floor((a - v) / n.params.slidesPerGroup);
            g >= l.length && (g = l.length - 1);
            const w = -l[g];
            if (o.normalizeSlideIndex)
              for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * w),
                  s = Math.floor(100 * d[e]),
                  i = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1] ? t >= s && t < i - (i - s) / 2 ? a = e : t >= s && t < i && (a = e + 1) : t >= s && (a = e)
              }
            if (n.initialized && a !== p) {
              if (!n.allowSlideNext && (u ? w > n.translate && w > n.minTranslate() : w < n.translate && w < n.minTranslate())) return !1;
              if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (p || 0) !== a) return !1
            }
            let b;
            a !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(w), b = a > p ? "next" : a < p ? "prev" : "reset";
            const S = n.virtual && n.params.virtual.enabled;
            if ((!S || !r) && (u && -w === n.translate || !u && w === n.translate)) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== b && (n.transitionStart(s, b), n.transitionEnd(s, b)), !1;
            if (o.cssMode) {
              const e = n.isHorizontal(),
                s = u ? w : -w;
              if (0 === t) S && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), S && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                f[e ? "scrollLeft" : "scrollTop"] = s
              }))) : f[e ? "scrollLeft" : "scrollTop"] = s, S && requestAnimationFrame((() => {
                n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
              }));
              else {
                if (!n.support.smoothScroll) return m({
                  swiper: n,
                  targetPosition: s,
                  side: e ? "left" : "top"
                }), !0;
                f.scrollTo({
                  [e ? "left" : "top"]: s,
                  behavior: "smooth"
                })
              }
              return !0
            }
            const T = C().isSafari;
            return S && !r && T && n.isElement && n.virtual.update(!1, !1, a), n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, b), 0 === t ? n.transitionEnd(s, b) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
              n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, b))
            }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, s, i) {
            void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const r = this;
            if (r.destroyed) return;
            void 0 === t && (t = r.params.speed);
            const n = r.grid && r.params.grid && r.params.grid.rows > 1;
            let a = e;
            if (r.params.loop)
              if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore;
              else {
                let e;
                if (n) {
                  const t = a * r.params.grid.rows;
                  e = r.slides.find((e => 1 * e.getAttribute("data-swiper-slide-index") === t)).column
                } else e = r.getSlideIndexByData(a);
                const t = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                  {
                    centeredSlides: s
                  } = r.params;
                let o = r.params.slidesPerView;
                "auto" === o ? o = r.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(r.params.slidesPerView, 10)), s && o % 2 == 0 && (o += 1));
                let l = t - e < o;
                if (s && (l = l || e < Math.ceil(o / 2)), i && s && "auto" !== r.params.slidesPerView && !n && (l = !1), l) {
                  const i = s ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                  r.loopFix({
                    direction: i,
                    slideTo: !0,
                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === i ? r.realIndex : void 0
                  })
                }
                if (n) {
                  const e = a * r.params.grid.rows;
                  a = r.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)).column
                } else a = r.getSlideIndexByData(a)
              } return requestAnimationFrame((() => {
              r.slideTo(a, t, s, i)
            })), r
          },
          slideNext: function(e, t, s) {
            void 0 === t && (t = !0);
            const i = this,
              {
                enabled: r,
                params: n,
                animating: a
              } = i;
            if (!r || i.destroyed) return i;
            void 0 === e && (e = i.params.speed);
            let o = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
              d = i.virtual && n.virtual.enabled;
            if (n.loop) {
              if (a && !d && n.loopPreventsSliding) return !1;
              if (i.loopFix({
                  direction: "next"
                }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode) return requestAnimationFrame((() => {
                i.slideTo(i.activeIndex + l, e, t, s)
              })), !0
            }
            return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s)
          },
          slidePrev: function(e, t, s) {
            void 0 === t && (t = !0);
            const i = this,
              {
                params: r,
                snapGrid: n,
                slidesGrid: a,
                rtlTranslate: o,
                enabled: l,
                animating: d
              } = i;
            if (!l || i.destroyed) return i;
            void 0 === e && (e = i.params.speed);
            const c = i.virtual && r.virtual.enabled;
            if (r.loop) {
              if (d && !c && r.loopPreventsSliding) return !1;
              i.loopFix({
                direction: "prev"
              }), i._clientLeft = i.wrapperEl.clientLeft
            }

            function p(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(o ? i.translate : -i.translate),
              f = n.map((e => p(e))),
              h = r.freeMode && r.freeMode.enabled;
            let m = n[f.indexOf(u) - 1];
            if (void 0 === m && (r.cssMode || h)) {
              let e;
              n.forEach(((t, s) => {
                u >= t && (e = s)
              })), void 0 !== e && (m = h ? n[e] : n[e > 0 ? e - 1 : e])
            }
            let v = 0;
            if (void 0 !== m && (v = a.indexOf(m), v < 0 && (v = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (v = v - i.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), r.rewind && i.isBeginning) {
              const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
              return i.slideTo(r, e, t, s)
            }
            return r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame((() => {
              i.slideTo(v, e, t, s)
            })), !0) : i.slideTo(v, e, t, s)
          },
          slideReset: function(e, t, s) {
            void 0 === t && (t = !0);
            const i = this;
            if (!i.destroyed) return void 0 === e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, s)
          },
          slideToClosest: function(e, t, s, i) {
            void 0 === t && (t = !0), void 0 === i && (i = .5);
            const r = this;
            if (r.destroyed) return;
            void 0 === e && (e = r.params.speed);
            let n = r.activeIndex;
            const a = Math.min(r.params.slidesPerGroupSkip, n),
              o = a + Math.floor((n - a) / r.params.slidesPerGroup),
              l = r.rtlTranslate ? r.translate : -r.translate;
            if (l >= r.snapGrid[o]) {
              const e = r.snapGrid[o];
              l - e > (r.snapGrid[o + 1] - e) * i && (n += r.params.slidesPerGroup)
            } else {
              const e = r.snapGrid[o - 1];
              l - e <= (r.snapGrid[o] - e) * i && (n -= r.params.slidesPerGroup)
            }
            return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: s
            } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let r, n = e.clickedIndex;
            const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = e.getSlideIndex(v(s, `${a}[data-swiper-slide-index="${r}"]`)[0]), c((() => {
                e.slideTo(n)
              }))) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = e.getSlideIndex(v(s, `${a}[data-swiper-slide-index="${r}"]`)[0]), c((() => {
                e.slideTo(n)
              }))) : e.slideTo(n)
            } else e.slideTo(n)
          }
        },
        N = {
          loopCreate: function(e, t) {
            const s = this,
              {
                params: i,
                slidesEl: r
              } = s;
            if (!i.loop || s.virtual && s.params.virtual.enabled) return;
            const n = () => {
                v(r, `.${i.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              a = s.grid && i.grid && i.grid.rows > 1,
              o = i.slidesPerGroup * (a ? i.grid.rows : 1),
              l = s.slides.length % o != 0,
              d = a && s.slides.length % i.grid.rows != 0,
              c = e => {
                for (let t = 0; t < e; t += 1) {
                  const e = s.isElement ? w("swiper-slide", [i.slideBlankClass]) : w("div", [i.slideClass, i.slideBlankClass]);
                  s.slidesEl.append(e)
                }
              };
            l ? (i.loopAddBlankSlides ? (c(o - s.slides.length % o), s.recalcSlides(), s.updateSlides()) : g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : d ? (i.loopAddBlankSlides ? (c(i.grid.rows - s.slides.length % i.grid.rows), s.recalcSlides(), s.updateSlides()) : g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : n(), s.loopFix({
              slideRealIndex: e,
              direction: i.centeredSlides ? void 0 : "next",
              initial: t
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: s = !0,
              direction: i,
              setTranslate: r,
              activeSlideIndex: n,
              initial: a,
              byController: o,
              byMousewheel: l
            } = void 0 === e ? {} : e;
            const d = this;
            if (!d.params.loop) return;
            d.emit("beforeLoopFix");
            const {
              slides: c,
              allowSlidePrev: p,
              allowSlideNext: u,
              slidesEl: f,
              params: h
            } = d, {
              centeredSlides: m,
              initialSlide: v
            } = h;
            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && h.virtual.enabled) return s && (h.centeredSlides || 0 !== d.snapIndex ? h.centeredSlides && d.snapIndex < h.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = u, void d.emit("loopFix");
            let w = h.slidesPerView;
            "auto" === w ? w = d.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(h.slidesPerView, 10)), m && w % 2 == 0 && (w += 1));
            const b = h.slidesPerGroupAuto ? w : h.slidesPerGroup;
            let S = b;
            S % b != 0 && (S += b - S % b), S += h.loopAdditionalSlides, d.loopedSlides = S;
            const T = d.grid && h.grid && h.grid.rows > 1;
            c.length < w + S || "cards" === d.params.effect && c.length < w + 2 * S ? g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : T && "row" === h.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const y = [],
              E = [],
              x = T ? Math.ceil(c.length / h.grid.rows) : c.length,
              M = a && x - v < w && !m;
            let P = M ? v : d.activeIndex;
            void 0 === n ? n = d.getSlideIndex(c.find((e => e.classList.contains(h.slideActiveClass)))) : P = n;
            const C = "next" === i || !i,
              _ = "prev" === i || !i;
            let k = 0,
              I = 0;
            const O = (T ? c[n].column : n) + (m && void 0 === r ? -w / 2 + .5 : 0);
            if (O < S) {
              k = Math.max(S - O, b);
              for (let e = 0; e < S - O; e += 1) {
                const t = e - Math.floor(e / x) * x;
                if (T) {
                  const e = x - t - 1;
                  for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && y.push(t)
                } else y.push(x - t - 1)
              }
            } else if (O + w > x - S) {
              I = Math.max(O - (x - 2 * S), b), M && (I = Math.max(I, w - x + v + 1));
              for (let e = 0; e < I; e += 1) {
                const t = e - Math.floor(e / x) * x;
                T ? c.forEach(((e, s) => {
                  e.column === t && E.push(s)
                })) : E.push(t)
              }
            }
            if (d.__preventObserver__ = !0, requestAnimationFrame((() => {
                d.__preventObserver__ = !1
              })), "cards" === d.params.effect && c.length < w + 2 * S && (E.includes(n) && E.splice(E.indexOf(n), 1), y.includes(n) && y.splice(y.indexOf(n), 1)), _ && y.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, f.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
              })), C && E.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, f.append(c[e]), c[e].swiperLoopMoveDOM = !1
              })), d.recalcSlides(), "auto" === h.slidesPerView ? d.updateSlides() : T && (y.length > 0 && _ || E.length > 0 && C) && d.slides.forEach(((e, t) => {
                d.grid.updateSlide(t, e, d.slides)
              })), h.watchSlidesProgress && d.updateSlidesOffset(), s)
              if (y.length > 0 && _) {
                if (void 0 === t) {
                  const e = d.slidesGrid[P],
                    t = d.slidesGrid[P + k] - e;
                  l ? d.setTranslate(d.translate - t) : (d.slideTo(P + Math.ceil(k), 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                } else if (r) {
                  const e = T ? y.length / h.grid.rows : y.length;
                  d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                }
              } else if (E.length > 0 && C)
              if (void 0 === t) {
                const e = d.slidesGrid[P],
                  t = d.slidesGrid[P - I] - e;
                l ? d.setTranslate(d.translate - t) : (d.slideTo(P - I, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
              } else {
                const e = T ? E.length / h.grid.rows : E.length;
                d.slideTo(d.activeIndex - e, 0, !1, !0)
              } if (d.allowSlidePrev = p, d.allowSlideNext = u, d.controller && d.controller.control && !o) {
              const e = {
                slideRealIndex: t,
                direction: i,
                setTranslate: r,
                activeSlideIndex: n,
                byController: !0
              };
              Array.isArray(d.controller.control) ? d.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === h.slidesPerView && s
                })
              })) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
                ...e,
                slideTo: d.controller.control.params.slidesPerView === h.slidesPerView && s
              })
            }
            d.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: s
              } = e;
            if (!t.loop || !s || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const i = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              i[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), i.forEach((e => {
              s.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function V(e, t, s) {
        const i = d(),
          {
            params: r
          } = e,
          n = r.edgeSwipeDetection,
          a = r.edgeSwipeThreshold;
        return !n || !(s <= a || s >= i.innerWidth - a) || "prevent" === n && (t.preventDefault(), !0)
      }

      function B(e) {
        const t = this,
          s = o();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const r = t.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
          r.pointerId = i.pointerId
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (r.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void V(t, i, i.targetTouches[0].pageX);
        const {
          params: n,
          touches: a,
          enabled: l
        } = t;
        if (!l) return;
        if (!n.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && n.preventInteractionOnTransition) return;
        !t.animating && n.cssMode && n.loop && t.loopFix();
        let c = i.target;
        if ("wrapper" === n.touchEventsTarget && ! function(e, t) {
            const s = d();
            let i = t.contains(e);
            return !i && s.HTMLSlotElement && t instanceof HTMLSlotElement && (i = [...t.assignedElements()].includes(e), i || (i = function(e, t) {
              const s = [t];
              for (; s.length > 0;) {
                const t = s.shift();
                if (e === t) return !0;
                s.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
              }
            }(e, t))), i
          }(c, t.wrapperEl)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        const u = !!n.noSwipingClass && "" !== n.noSwipingClass,
          f = i.composedPath ? i.composedPath() : i.path;
        u && i.target && i.target.shadowRoot && f && (c = f[0]);
        const h = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
          m = !(!i.target || !i.target.shadowRoot);
        if (n.noSwiping && (m ? function(e, t) {
            return void 0 === t && (t = this),
              function t(s) {
                if (!s || s === o() || s === d()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
              }(t)
          }(h, c) : c.closest(h))) return void(t.allowClick = !0);
        if (n.swipeHandler && !c.closest(n.swipeHandler)) return;
        a.currentX = i.pageX, a.currentY = i.pageY;
        const v = a.currentX,
          g = a.currentY;
        if (!V(t, i, v)) return;
        Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), a.startX = v, a.startY = g, r.touchStartTime = p(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1);
        let w = !0;
        c.matches(r.focusableElements) && (w = !1, "SELECT" === c.nodeName && (r.isTouched = !1)), s.activeElement && s.activeElement.matches(r.focusableElements) && s.activeElement !== c && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !c.matches(r.focusableElements)) && s.activeElement.blur();
        const b = w && t.allowTouchMove && n.touchStartPreventDefault;
        !n.touchStartForcePreventDefault && !b || c.isContentEditable || i.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
      }

      function R(e) {
        const t = o(),
          s = this,
          i = s.touchEventsData,
          {
            params: r,
            touches: n,
            rtlTranslate: a,
            enabled: l
          } = s;
        if (!l) return;
        if (!r.simulateTouch && "mouse" === e.pointerType) return;
        let d, c = e;
        if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
          if (null !== i.touchId) return;
          if (c.pointerId !== i.pointerId) return
        }
        if ("touchmove" === c.type) {
          if (d = [...c.changedTouches].find((e => e.identifier === i.touchId)), !d || d.identifier !== i.touchId) return
        } else d = c;
        if (!i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        const u = d.pageX,
          f = d.pageY;
        if (c.preventedByNestedSwiper) return n.startX = u, void(n.startY = f);
        if (!s.allowTouchMove) return c.target.matches(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f
        }), i.touchStartTime = p()));
        if (r.touchReleaseOnEdges && !r.loop)
          if (s.isVertical()) {
            if (f < n.startY && s.translate <= s.maxTranslate() || f > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
          } else {
            if (a && (u > n.startX && -s.translate <= s.maxTranslate() || u < n.startX && -s.translate >= s.minTranslate())) return;
            if (!a && (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate())) return
          } if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== c.target && "mouse" !== c.pointerType && t.activeElement.blur(), t.activeElement && c.target === t.activeElement && c.target.matches(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        i.allowTouchCallbacks && s.emit("touchMove", c), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = f;
        const h = n.currentX - n.startX,
          m = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
          let e;
          s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(h)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === c.type && i.preventTouchMoveFromPointerMove) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
        let v = s.isHorizontal() ? h : m,
          g = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        r.oneWayMovement && (v = Math.abs(v) * (a ? 1 : -1), g = Math.abs(g) * (a ? 1 : -1)), n.diff = v, v *= r.touchRatio, a && (v = -v, g = -g);
        const w = s.touchesDirection;
        s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = g > 0 ? "prev" : "next";
        const b = s.params.loop && !r.cssMode,
          S = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!i.isMoved) {
          if (b && S && s.loopFix({
              direction: s.swipeDirection
            }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: {
                bySwiperTouchMove: !0
              }
            });
            s.wrapperEl.dispatchEvent(e)
          }
          i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)
        }
        if ((new Date).getTime(), !1 !== r._loopSwapReset && i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && S && Math.abs(v) >= 1) return Object.assign(n, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f,
          startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
        s.emit("sliderMove", c), i.isMoved = !0, i.currentTranslate = v + i.startTranslate;
        let T = !0,
          y = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (y = 0), v > 0 ? (b && S && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), i.currentTranslate > s.minTranslate() && (T = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** y))) : v < 0 && (b && S && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
          }), i.currentTranslate < s.maxTranslate() && (T = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** y))), T && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
          if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
      }

      function j(e) {
        const t = this,
          s = t.touchEventsData;
        let i, r = e;
        if (r.originalEvent && (r = r.originalEvent), "touchend" === r.type || "touchcancel" === r.type) {
          if (i = [...r.changedTouches].find((e => e.identifier === s.touchId)), !i || i.identifier !== s.touchId) return
        } else {
          if (null !== s.touchId) return;
          if (r.pointerId !== s.pointerId) return;
          i = r
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) && (!["pointercancel", "contextmenu"].includes(r.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        s.pointerId = null, s.touchId = null;
        const {
          params: n,
          touches: a,
          rtlTranslate: o,
          slidesGrid: l,
          enabled: d
        } = t;
        if (!d) return;
        if (!n.simulateTouch && "mouse" === r.pointerType) return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", r), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = p(),
          f = u - s.touchStartTime;
        if (t.allowClick) {
          const e = r.path || r.composedPath && r.composedPath();
          t.updateClickedSlide(e && e[0] || r.target, e), t.emit("tap click", r), f < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
        }
        if (s.lastClickTime = p(), c((() => {
            t.destroyed || (t.allowClick = !0)
          })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = n.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
        if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: h
        });
        const m = h >= -t.maxTranslate() && !t.params.loop;
        let v = 0,
          g = t.slidesSizesGrid[0];
        for (let e = 0; e < l.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
          const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
          void 0 !== l[e + t] ? (m || h >= l[e] && h < l[e + t]) && (v = e, g = l[e + t] - l[e]) : (m || h >= l[e]) && (v = e, g = l[l.length - 1] - l[l.length - 2])
        }
        let w = null,
          b = null;
        n.rewind && (t.isBeginning ? b = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
        const S = (h - l[v]) / g,
          T = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (f > n.longSwipesMs) {
          if (!n.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (S >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? w : v + T) : t.slideTo(v)), "prev" === t.swipeDirection && (S > 1 - n.longSwipesRatio ? t.slideTo(v + T) : null !== b && S < 0 && Math.abs(S) > n.longSwipesRatio ? t.slideTo(b) : t.slideTo(v))
        } else {
          if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || r.target !== t.navigation.nextEl && r.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== w ? w : v + T), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : v)) : r.target === t.navigation.nextEl ? t.slideTo(v + T) : t.slideTo(v)
        }
      }

      function F() {
        const e = this,
          {
            params: t,
            el: s
          } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: i,
          allowSlidePrev: r,
          snapGrid: n
        } = e, a = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
      }

      function $(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function H() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: i
          } = e;
        if (!i) return;
        let r;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function W(e) {
        const t = this;
        O(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function q() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const Y = (e, t) => {
          const s = o(),
            {
              params: i,
              el: r,
              wrapperEl: n,
              device: a
            } = e,
            l = !!i.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          r && "string" != typeof r && (s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), r[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), r[d]("pointerdown", e.onTouchStart, {
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
          }), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", F, !0) : e[c]("observerUpdate", F, !0), r[d]("load", e.onLoad, {
            capture: !0
          }))
        },
        X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var U = {
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

      function K(e, t) {
        return function(s) {
          void 0 === s && (s = {});
          const i = Object.keys(s)[0],
            r = s[i];
          "object" == typeof r && null !== r ? (!0 === e[i] && (e[i] = {
            enabled: !0
          }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in r ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
          }), f(t, s)) : f(t, s)) : f(t, s)
        }
      }
      const Z = {
          eventsEmitter: _,
          update: A,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: s,
                translate: i,
                wrapperEl: r
              } = this;
              if (t.virtualTranslate) return s ? -i : i;
              if (t.cssMode) return i;
              let n = function(e, t) {
                void 0 === t && (t = "x");
                const s = d();
                let i, r, n;
                const a = function(e) {
                  const t = d();
                  let s;
                  return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), "x" === t && (r = s.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = s.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
              }(r, e);
              return n += this.cssOverflowAdjustment(), s && (n = -n), n || 0
            },
            setTranslate: function(e, t) {
              const s = this,
                {
                  rtlTranslate: i,
                  params: r,
                  wrapperEl: n,
                  progress: a
                } = s;
              let o, l = 0,
                d = 0;
              s.isHorizontal() ? l = i ? -e : e : d = e, r.roundLengths && (l = Math.floor(l), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : d, r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -d : r.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
              const c = s.maxTranslate() - s.minTranslate();
              o = 0 === c ? 0 : (e - s.minTranslate()) / c, o !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, s, i, r) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
              const n = this,
                {
                  params: a,
                  wrapperEl: o
                } = n;
              if (n.animating && a.preventInteractionOnTransition) return !1;
              const l = n.minTranslate(),
                d = n.maxTranslate();
              let c;
              if (c = i && e > l ? l : i && e < d ? d : e, n.updateProgress(c), a.cssMode) {
                const e = n.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                  if (!n.support.smoothScroll) return m({
                    swiper: n,
                    targetPosition: -c,
                    side: e ? "left" : "top"
                  }), !0;
                  o.scrollTo({
                    [e ? "left" : "top"]: -c,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, s && n.emit("transitionEnd"))
              }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
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
                  params: i
                } = s;
              i.cssMode || (i.autoHeight && s.updateAutoHeight(), G({
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
                  params: i
                } = s;
              s.animating = !1, i.cssMode || (s.setTransition(0), G({
                swiper: s,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: D,
          loop: N,
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
              e.onTouchStart = B.bind(e), e.onTouchMove = R.bind(e), e.onTouchEnd = j.bind(e), e.onDocumentTouchStart = q.bind(e), t.cssMode && (e.onScroll = H.bind(e)), e.onClick = $.bind(e), e.onLoad = W.bind(e), Y(e, "on")
            },
            detachEvents: function() {
              Y(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: s,
                  params: i,
                  el: r
                } = e,
                n = i.breakpoints;
              if (!n || n && 0 === Object.keys(n).length) return;
              const a = o(),
                l = "window" !== i.breakpointsBase && i.breakpointsBase ? "container" : i.breakpointsBase,
                d = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? e.el : a.querySelector(i.breakpointsBase),
                c = e.getBreakpoint(n, l, d);
              if (!c || e.currentBreakpoint === c) return;
              const p = (c in n ? n[c] : void 0) || e.originalParams,
                u = X(e, i),
                h = X(e, p),
                m = e.params.grabCursor,
                v = p.grabCursor,
                g = i.enabled;
              u && !h ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !u && h && (r.classList.add(`${i.containerModifierClass}grid`), (p.grid.fill && "column" === p.grid.fill || !p.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), m && !v ? e.unsetGrabCursor() : !m && v && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === p[t]) return;
                const s = i[t] && i[t].enabled,
                  r = p[t] && p[t].enabled;
                s && !r && e[t].disable(), !s && r && e[t].enable()
              }));
              const w = p.direction && p.direction !== i.direction,
                b = i.loop && (p.slidesPerView !== i.slidesPerView || w),
                S = i.loop;
              w && s && e.changeDirection(), f(e.params, p);
              const T = e.params.enabled,
                y = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), g && !T ? e.disable() : !g && T && e.enable(), e.currentBreakpoint = c, e.emit("_beforeBreakpoint", p), s && (b ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !S && y ? (e.loopCreate(t), e.updateSlides()) : S && !y && e.loopDestroy()), e.emit("breakpoint", p)
            },
            getBreakpoint: function(e, t, s) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
              let i = !1;
              const r = d(),
                n = "window" === t ? r.innerHeight : s.clientHeight,
                a = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: n * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < a.length; e += 1) {
                const {
                  point: n,
                  value: o
                } = a[e];
                "window" === t ? r.matchMedia(`(min-width: ${o}px)`).matches && (i = n) : o <= s.clientWidth && (i = n)
              }
              return i || "max"
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
                  slidesOffsetBefore: i
                } = s;
              if (i) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
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
                  rtl: i,
                  el: r,
                  device: n
                } = e,
                a = function(e, t) {
                  const s = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((i => {
                      e[i] && s.push(t + i)
                    })) : "string" == typeof e && s.push(t + e)
                  })), s
                }(["initialized", s.direction, {
                  "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                  autoheight: s.autoHeight
                }, {
                  rtl: i
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
              t.push(...a), r.classList.add(...t), e.emitContainerClasses()
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
        J = {};
      class Q {
        constructor() {
          let e, t;
          for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
          1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = f({}, t), e && !t.el && (t.el = e);
          const n = o();
          if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
            const e = [];
            return n.querySelectorAll(t.el).forEach((s => {
              const i = f({}, t, {
                el: s
              });
              e.push(new Q(i))
            })), e
          }
          const a = this;
          a.__swiper__ = !0, a.support = M(), a.device = P({
            userAgent: t.userAgent
          }), a.browser = C(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
          const l = {};
          a.modules.forEach((e => {
            e({
              params: t,
              swiper: a,
              extendParams: K(t, l),
              on: a.on.bind(a),
              once: a.once.bind(a),
              off: a.off.bind(a),
              emit: a.emit.bind(a)
            })
          }));
          const d = f({}, U, l);
          return a.params = f({}, d, J, t), a.originalParams = f({}, a.params), a.passedParams = f({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
            a.on(e, a.params.on[e])
          })), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === a.params.direction,
            isVertical: () => "vertical" === a.params.direction,
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
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), a.emit("_swiper"), a.params.init && a.init(), a
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
          } = this, i = S(v(t, `.${s.slideClass}, swiper-slide`)[0]);
          return S(e) - i
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)))
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = v(e, `.${t.slideClass}, swiper-slide`)
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
          const i = s.minTranslate(),
            r = (s.maxTranslate() - i) * e + i;
          s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
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
            const i = e.getSlideClasses(s);
            t.push({
              slideEl: s,
              classNames: i
            }), e.emit("_slideClass", s, i)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: s,
            slides: i,
            slidesGrid: r,
            slidesSizesGrid: n,
            size: a,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof s.slidesPerView) return s.slidesPerView;
          if (s.centeredSlides) {
            let e, t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
            for (let s = o + 1; s < i.length; s += 1) i[s] && !e && (t += Math.ceil(i[s].swiperSlideSize), l += 1, t > a && (e = !0));
            for (let s = o - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = o + 1; e < i.length; e += 1)(t ? r[e] + n[e] - r[o] < a : r[e] - r[o] < a) && (l += 1);
          else
            for (let e = o - 1; e >= 0; e -= 1) r[o] - r[e] < a && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: s
          } = e;

          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let r;
          if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && O(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
              const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
              r = e.slideTo(t.length - 1, 0, !1, !0)
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || i()
          }
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this,
            i = s.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
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
          const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let r = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(i()) : v(s, i())[0];
          return !r && t.params.createElements && (r = w("div", t.params.wrapperClass), s.append(r), v(s, `.${t.params.slideClass}`).forEach((e => {
            r.append(e)
          }))), Object.assign(t, {
            el: s,
            wrapperEl: r,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
            wrongRTL: "-webkit-box" === b(r, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
          const s = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
            e.complete ? O(t, e) : e.addEventListener("load", (e => {
              O(t, e.target)
            }))
          })), z(t), t.initialized = !0, z(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            {
              params: i,
              el: r,
              wrapperEl: n,
              slides: a
            } = s;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), n && n.removeAttribute("style"), a && a.length && a.forEach((e => {
            e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
            s.off(e)
          })), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), function(e) {
            const t = e;
            Object.keys(t).forEach((e => {
              try {
                t[e] = null
              } catch (e) {}
              try {
                delete t[e]
              } catch (e) {}
            }))
          }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
          f(J, e)
        }
        static get extendedDefaults() {
          return J
        }
        static get defaults() {
          return U
        }
        static installModule(e) {
          Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
          const t = Q.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => Q.installModule(e))), Q) : (Q.installModule(e), Q)
        }
      }
      Object.keys(Z).forEach((e => {
        Object.keys(Z[e]).forEach((t => {
          Q.prototype[t] = Z[e][t]
        }))
      })), Q.use([function(e) {
        let {
          swiper: t,
          on: s,
          emit: i
        } = e;
        const r = d();
        let n = null,
          a = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
          },
          l = () => {
            t && !t.destroyed && t.initialized && i("orientationchange")
          };
        s("init", (() => {
          t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
            a = r.requestAnimationFrame((() => {
              const {
                width: s,
                height: i
              } = t;
              let r = s,
                n = i;
              e.forEach((e => {
                let {
                  contentBoxSize: s,
                  contentRect: i,
                  target: a
                } = e;
                a && a !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize)
              })), r === s && n === i || o()
            }))
          })), n.observe(t.el)) : (r.addEventListener("resize", o), r.addEventListener("orientationchange", l))
        })), s("destroy", (() => {
          a && r.cancelAnimationFrame(a), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", l)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: s,
          on: i,
          emit: r
        } = e;
        const n = [],
          a = d(),
          o = function(e, s) {
            void 0 === s && (s = {});
            const i = new(a.MutationObserver || a.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void r("observerUpdate", e[0]);
              const s = function() {
                r("observerUpdate", e[0])
              };
              a.requestAnimationFrame ? a.requestAnimationFrame(s) : a.setTimeout(s, 0)
            }));
            i.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: t.isElement || (void 0 === s.childList || s).childList,
              characterData: void 0 === s.characterData || s.characterData
            }), n.push(i)
          };
        s({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), i("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = function(e) {
                const t = [];
                let s = e.parentElement;
                for (; s;) t.push(s), s = s.parentElement;
                return t
              }(t.hostEl);
              for (let t = 0; t < e.length; t += 1) o(e[t])
            }
            o(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), o(t.wrapperEl, {
              attributes: !1
            })
          }
        })), i("destroy", (() => {
          n.forEach((e => {
            e.disconnect()
          })), n.splice(0, n.length)
        }))
      }]);
      const ee = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function te(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function se(e, t) {
        const s = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
          void 0 === e[s] ? e[s] = t[s] : te(t[s]) && te(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : se(e[s], t[s]) : e[s] = t[s]
        }))
      }

      function ie(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function re(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function ne(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function ae(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          s = [];
        return t.forEach((e => {
          s.indexOf(e) < 0 && s.push(e)
        })), s.join(" ")
      }

      function oe(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function le() {
        return le = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
          }
          return e
        }, le.apply(this, arguments)
      }

      function de(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function ce(e) {
        const t = [];
        return i.Children.toArray(e).forEach((e => {
          de(e) ? t.push(e) : e.props && e.props.children && ce(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function pe(e) {
        const t = [],
          s = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return i.Children.toArray(e).forEach((e => {
          if (de(e)) t.push(e);
          else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const i = ce(e.props.children);
            i.length > 0 ? i.forEach((e => t.push(e))) : s["container-end"].push(e)
          } else s["container-end"].push(e)
        })), {
          slides: t,
          slots: s
        }
      }

      function ue(e, t) {
        return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
      }
      const fe = (0, i.createContext)(null),
        he = (0, i.createContext)(null),
        me = (0, i.forwardRef)((function(e, t) {
          let {
            className: s,
            tag: r = "div",
            wrapperTag: n = "div",
            children: a,
            onSwiper: o,
            ...l
          } = void 0 === e ? {} : e, d = !1;
          const [c, p] = (0, i.useState)("swiper"), [u, f] = (0, i.useState)(null), [h, m] = (0, i.useState)(!1), v = (0, i.useRef)(!1), g = (0, i.useRef)(null), w = (0, i.useRef)(null), b = (0, i.useRef)(null), S = (0, i.useRef)(null), T = (0, i.useRef)(null), y = (0, i.useRef)(null), E = (0, i.useRef)(null), x = (0, i.useRef)(null), {
            params: M,
            passedParams: P,
            rest: C,
            events: _
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const s = {
                on: {}
              },
              i = {},
              r = {};
            se(s, U), s._emitClasses = !0, s.init = !1;
            const n = {},
              a = ee.map((e => e.replace(/_/, ""))),
              o = Object.assign({}, e);
            return Object.keys(o).forEach((o => {
              void 0 !== e[o] && (a.indexOf(o) >= 0 ? te(e[o]) ? (s[o] = {}, r[o] = {}, se(s[o], e[o]), se(r[o], e[o])) : (s[o] = e[o], r[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : s.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : n[o] = e[o])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
            })), {
              params: s,
              passedParams: r,
              rest: n,
              events: i
            }
          }(l), {
            slides: k,
            slots: I
          } = pe(a), O = () => {
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
            if (delete e.wrapperClass, w.current = new Q(e), w.current.virtual && w.current.params.virtual.enabled) {
              w.current.virtual.slides = k;
              const e = {
                cache: !1,
                slides: k,
                renderExternal: f,
                renderExternalUpdate: !1
              };
              se(w.current.params.virtual, e), se(w.current.originalParams.virtual, e)
            }
          };
          return g.current || L(), w.current && w.current.on("_beforeBreakpoint", O), (0, i.useEffect)((() => () => {
            w.current && w.current.off("_beforeBreakpoint", O)
          })), (0, i.useEffect)((() => {
            !v.current && w.current && (w.current.emitSlidesClasses(), v.current = !0)
          })), ue((() => {
            if (t && (t.current = g.current), g.current) return w.current.destroyed && L(),
              function(e, t) {
                let {
                  el: s,
                  nextEl: i,
                  prevEl: r,
                  paginationEl: n,
                  scrollbarEl: a,
                  swiper: o
                } = e;
                ie(t) && i && r && (o.params.navigation.nextEl = i, o.originalParams.navigation.nextEl = i, o.params.navigation.prevEl = r, o.originalParams.navigation.prevEl = r), re(t) && n && (o.params.pagination.el = n, o.originalParams.pagination.el = n), ne(t) && a && (o.params.scrollbar.el = a, o.originalParams.scrollbar.el = a), o.init(s)
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
          }), []), ue((() => {
            !d && _ && w.current && Object.keys(_).forEach((e => {
              w.current.on(e, _[e])
            }));
            const e = function(e, t, s, i, r) {
              const n = [];
              if (!t) return n;
              const a = e => {
                n.indexOf(e) < 0 && n.push(e)
              };
              if (s && i) {
                const e = i.map(r),
                  t = s.map(r);
                e.join("") !== t.join("") && a("children"), i.length !== s.length && a("children")
              }
              return ee.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                if (s in e && s in t)
                  if (te(e[s]) && te(t[s])) {
                    const i = Object.keys(e[s]),
                      r = Object.keys(t[s]);
                    i.length !== r.length ? a(s) : (i.forEach((i => {
                      e[s][i] !== t[s][i] && a(s)
                    })), r.forEach((i => {
                      e[s][i] !== t[s][i] && a(s)
                    })))
                  } else e[s] !== t[s] && a(s)
              })), n
            }(P, b.current, k, S.current, (e => e.key));
            return b.current = P, S.current = k, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: s,
                passedParams: i,
                changedParams: r,
                nextEl: n,
                prevEl: a,
                scrollbarEl: o,
                paginationEl: l
              } = e;
              const d = r.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: p,
                  navigation: u,
                  scrollbar: f,
                  virtual: h,
                  thumbs: m
                } = t;
              let v, g, w, b, S, T, y, E;
              r.includes("thumbs") && i.thumbs && i.thumbs.swiper && !i.thumbs.swiper.destroyed && c.thumbs && (!c.thumbs.swiper || c.thumbs.swiper.destroyed) && (v = !0), r.includes("controller") && i.controller && i.controller.control && c.controller && !c.controller.control && (g = !0), r.includes("pagination") && i.pagination && (i.pagination.el || l) && (c.pagination || !1 === c.pagination) && p && !p.el && (w = !0), r.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (b = !0), r.includes("navigation") && i.navigation && (i.navigation.prevEl || a) && (i.navigation.nextEl || n) && (c.navigation || !1 === c.navigation) && u && !u.prevEl && !u.nextEl && (S = !0);
              const x = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              r.includes("loop") && t.isElement && (c.loop && !i.loop ? T = !0 : !c.loop && i.loop ? y = !0 : E = !0), d.forEach((e => {
                if (te(c[e]) && te(i[e])) Object.assign(c[e], i[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in i[e]) || i[e].enabled || x(e);
                else {
                  const t = i[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = i[e] : !1 === t && x(e)
                }
              })), d.includes("controller") && !g && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), r.includes("children") && s && h && c.virtual.enabled ? (h.slides = s, h.update(!0)) : r.includes("virtual") && h && c.virtual.enabled && (s && (h.slides = s), h.update(!0)), r.includes("children") && s && c.loop && (E = !0), v && m.init() && m.update(!0), g && (t.controller.control = c.controller.control), w && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (c.pagination.el = l), p.init(), p.render(), p.update()), b && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), t.el.appendChild(o)), o && (c.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()), S && (t.isElement && (n && "string" != typeof n || (n = document.createElement("div"), n.classList.add("swiper-button-next"), n.innerHTML = t.hostEl.constructor.nextButtonSvg, n.part.add("button-next"), t.el.appendChild(n)), a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-prev"), a.innerHTML = t.hostEl.constructor.prevButtonSvg, a.part.add("button-prev"), t.el.appendChild(a))), n && (c.navigation.nextEl = n), a && (c.navigation.prevEl = a), u.init(), u.update()), r.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), r.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), r.includes("direction") && t.changeDirection(i.direction, !1), (T || E) && t.loopDestroy(), (y || E) && t.loopCreate(), t.update()
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
          })), ue((() => {
            var e;
            !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [u]), i.createElement(r, le({
            ref: g,
            className: ae(`${c}${s?` ${s}`:""}`)
          }, C), i.createElement(he.Provider, {
            value: w.current
          }, I["container-start"], i.createElement(n, {
            className: oe(M.wrapperClass)
          }, I["wrapper-start"], M.virtual ? function(e, t, s) {
            if (!s) return null;
            const r = e => {
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
            for (let e = l; e < d; e += 1) e >= a && e <= o && c.push(t[r(e)]);
            return c.map(((t, s) => i.cloneElement(t, {
              swiper: e,
              style: n,
              key: t.props.virtualIndex || t.key || `slide-${s}`
            })))
          }(w.current, k, u) : k.map(((e, t) => i.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          }))), I["wrapper-end"]), ie(M) && i.createElement(i.Fragment, null, i.createElement("div", {
            ref: y,
            className: "swiper-button-prev"
          }), i.createElement("div", {
            ref: T,
            className: "swiper-button-next"
          })), ne(M) && i.createElement("div", {
            ref: x,
            className: "swiper-scrollbar"
          }), re(M) && i.createElement("div", {
            ref: E,
            className: "swiper-pagination"
          }), I["container-end"]))
        }));
      me.displayName = "Swiper";
      const ve = (0, i.forwardRef)((function(e, t) {
        let {
          tag: s = "div",
          children: r,
          className: n = "",
          swiper: a,
          zoom: o,
          lazy: l,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...p
        } = void 0 === e ? {} : e;
        const u = (0, i.useRef)(null),
          [f, h] = (0, i.useState)("swiper-slide"),
          [m, v] = (0, i.useState)(!1);

        function g(e, t, s) {
          t === u.current && h(s)
        }
        ue((() => {
          if (void 0 !== c && (u.current.swiperSlideIndex = c), t && (t.current = u.current), u.current && a) {
            if (!a.destroyed) return a.on("_slideClass", g), () => {
              a && a.off("_slideClass", g)
            };
            "swiper-slide" !== f && h("swiper-slide")
          }
        })), ue((() => {
          a && u.current && !a.destroyed && h(a.getSlideClasses(u.current))
        }), [a]);
        const w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof r ? r(w) : r;
        return i.createElement(s, le({
          ref: u,
          className: ae(`${f}${n?` ${n}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            v(!0)
          }
        }, p), o && i.createElement(fe.Provider, {
          value: w
        }, i.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, b(), l && !m && i.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && i.createElement(fe.Provider, {
          value: w
        }, b(), l && !m && i.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      ve.displayName = "SwiperSlide"
    },
    87927: (e, t, s) => {
      s.d(t, {
        NP: () => i.NP
      });
      var i = s(33736)
    }
  }
]);