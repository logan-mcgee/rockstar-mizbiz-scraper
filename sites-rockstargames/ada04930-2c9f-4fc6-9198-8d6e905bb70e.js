try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ada04930-2c9f-4fc6-9198-8d6e905bb70e", e._sentryDebugIdIdentifier = "sentry-dbid-ada04930-2c9f-4fc6-9198-8d6e905bb70e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9568], {
    99568(e, t, o) {
      o.r(t), o.d(t, {
        Alert: () => Be,
        AlertBanner: () => Me,
        Avatar: () => Ne,
        Badge: () => Fe,
        Body: () => d.nB,
        Breadcrumbs: () => De,
        Button: () => s.$,
        Checkbox: () => Se,
        ChipGroup: () => Ue,
        Code: () => d.Cy,
        Dialog: () => Ee,
        Display: () => d.nl,
        Divider: () => r.c,
        Dropdown: () => Oe,
        Heading: () => d.DZ,
        IconButton: () => n.K,
        Label: () => d.JU,
        Lightbox: () => i,
        Loader: () => a.a,
        Pagination: () => Ve,
        Popover: () => He,
        ProgressBar: () => Ge,
        RadioGroup: () => je,
        ScrollArea: () => We,
        Spinner: () => l.y,
        Switch: () => Ze,
        Tag: () => Ie,
        Text: () => d.EY,
        TextArea: () => _e,
        TextField: () => Ae,
        TextSemantics: () => d.jA,
        Toast: () => ke,
        Tooltip: () => oe
      });
      var i = {};
      o.r(i), o.d(i, {
        Caption: () => xe,
        Close: () => Le,
        Content: () => me,
        Controls: () => ye,
        CssVars: () => Pe,
        Download: () => Te,
        Image: () => ve,
        Keyboard: () => ze,
        LightboxContext: () => ne,
        OpenIcon: () => he,
        Overlay: () => pe,
        Portal: () => ue,
        Reset: () => Ce,
        Root: () => re,
        RootImplContext: () => ae,
        Thumbnail: () => ce,
        Trigger: () => de,
        Zoom: () => Re,
        ZoomPan: () => fe
      });
      var s = o(90179),
        n = o(76789),
        r = o(94097),
        a = o(51994),
        l = o(14889),
        d = o(32648),
        c = o(39793),
        h = o(84173),
        u = o(93082),
        p = o(32996),
        m = o(93529),
        f = o(99206),
        g = o(34811);
      const b = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, o) => {
        e.onload = () => t(), e.onerror = o
      }), v = ([e, t]) => ({
        x: e,
        y: t
      }), x = (e, t) => (e.x = t.x, e.y = t.y, e), y = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, w = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), z = (e, t, o) => Math.min(Math.max(e, t), o);
      var R = o(90004),
        L = o(819);

      function C(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var o = e[Symbol.toPrimitive];
          if (void 0 !== o) {
            var i = o.call(e, t);
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function T(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), o.push.apply(o, i)
        }
        return o
      }

      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? T(Object(o), !0).forEach(function(t) {
            var i, s, n;
            i = e, s = t, n = o[t], (s = C(s)) in i ? Object.defineProperty(i, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : i[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : T(Object(o)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          })
        }
        return e
      }

      function O(e, t) {
        var o = {};
        for (var i in e) o[i] = t(e[i], i);
        return o
      }
      var Z = (e, t, o) => {
          for (var i of Object.keys(e)) {
            var s;
            if (e[i] !== (null !== (s = t[i]) && void 0 !== s ? s : o[i])) return !1
          }
          return !0
        },
        S = e => {
          var t = t => {
            var o = e.defaultClassName,
              i = P(P({}, e.defaultVariants), t);
            for (var s in i) {
              var n, r = null !== (n = i[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != r) {
                var a = r;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[s][a];
                l && (o += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Z(d, i, e.defaultVariants) && (o += " " + c);
            return o
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return O(e.variantClassNames, e => O(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _ = S({
          defaultClassName: "foundry_1a74xwbk",
          variantClassNames: {
            styled: {
              true: "foundry_1a74xwbj",
              false: "foundry_1a74xwbm"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        j = S({
          defaultClassName: "foundry_1a74xwbq foundry_1a74xwbi",
          variantClassNames: {
            position: {
              top: "foundry_1a74xwbr",
              bottom: "foundry_1a74xwbs"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      m.os.registerPlugin(f.L);
      const A = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        B = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        M = (0, L.Tm)("var(--foundry_1a74xwb0)");
      var I = o(50888);
      const k = {
        "en-US": o.e(4974).then(o.bind(o, 84974)),
        "de-DE": o.e(5389).then(o.bind(o, 55389)),
        "es-ES": o.e(4235).then(o.bind(o, 4235)),
        "es-MX": o.e(5038).then(o.bind(o, 85038)),
        "fr-FR": o.e(9947).then(o.bind(o, 59947)),
        "it-IT": o.e(2837).then(o.bind(o, 72837)),
        "ja-JP": o.e(622).then(o.bind(o, 90622)),
        "ko-KR": o.e(4756).then(o.bind(o, 4756)),
        "pl-PL": o.e(9447).then(o.bind(o, 69447)),
        "pt-BR": o.e(8915).then(o.bind(o, 8915)),
        "ru-RU": o.e(6501).then(o.bind(o, 26501)),
        "zh-CN": o.e(4572).then(o.bind(o, 74572)),
        "zh-TW": o.e(4144).then(o.bind(o, 34144))
      };
      class D {
        slide;
        currZoomLevel = 1;
        center = {
          x: 0,
          y: 0
        };
        max = {
          x: 0,
          y: 0
        };
        min = {
          x: 0,
          y: 0
        };
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        update(e) {
          this.currZoomLevel = e, this.slide.width ? (this.updateAxis("x"), this.updateAxis("y")) : this.reset()
        }
        updateAxis(e) {
          const t = this.slide["x" === e ? "width" : "height"] * this.currZoomLevel,
            o = this.slide.panAreaSize["x" === e ? "w" : "h"],
            i = this.slide.panAreaSize.safeArea["x" === e ? "w" : "h"] + 2 * this.slide.panAreaSize.safeArea[e];
          this.center[e] = this.currZoomLevel === this.slide.zoomLevels.initial ? Math.round((o - t - (o - i)) / 2) : Math.round((o - t) / 2), this.max[e] = t > o ? Math.round(o - t) : this.center[e], this.min[e] = t > o ? 0 : this.center[e]
        }
        reset() {
          this.center = {
            x: 0,
            y: 0
          }, this.max = {
            x: 0,
            y: 0
          }, this.min = {
            x: 0,
            y: 0
          }
        }
        correctPan(e, t, o = !1) {
          return o ? t : z(t, this.max[e], this.min[e])
        }
      }
      class F {
        panAreaSize = {
          w: 0,
          h: 0
        };
        elementSize = {
          w: 0,
          h: 0
        };
        vFill = 1;
        initial = 1;
        max = 1;
        min = 1;
        step = 1;
        steps = 1;
        options;
        slide;
        constructor({
          options: e,
          slide: t
        }) {
          this.options = e, this.slide = t
        }
        update(e) {
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = w(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            o = e.h / this.elementSize.h;
          return w(o < t ? o : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return w(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class E {
        eventCallbacks = new Map;
        addEventListener(e, t) {
          this.eventCallbacks.has(e) || this.eventCallbacks.set(e, new Set), this.eventCallbacks.get(e)?.add(t)
        }
        removeEventListener(e, t) {
          this.eventCallbacks.has(e) && this.eventCallbacks.get(e)?.delete(t)
        }
        dispatch(e, t) {
          const o = t || new Event(e);
          return this.eventCallbacks.get(e)?.forEach(e => e(o)), o
        }
      }
      class N {
        slide;
        options;
        startPan = {
          x: 0,
          y: 0
        };
        dragAxis = null;
        tapTimer;
        prevTap = {
          x: 0,
          y: 0
        };
        animate = !0;
        dragging = !1;
        constructor({
          slide: e,
          options: t
        }) {
          this.slide = e, this.options = t || {
            dragToClose: !0
          }
        }
        setup() {
          this.animate = !0, this.slide.updateOverlayOpacity(1)
        }
        handleDrag(e) {
          e.tap ? this.handleTap(e) : e.first ? (this.dragging = !0, this.start(e)) : e.last ? (this.end(e), this.dragging = !1) : this.change(e)
        }
        start({
          movement: [e, t]
        }) {
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", x(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [o, i]
          } = e, s = t > 1, n = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && n && !s ? (this.setPanWithFriction("y", this.slide.pan.y + i, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && n ? this.setPanWithFriction("x", this.slide.pan.x + o, .35) : (this.setPanWithFriction("x", this.slide.pan.x + o), this.setPanWithFriction("y", this.slide.pan.y + i))
        }
        end(e) {
          const t = e.touches > 1;
          this.slide && this.slide.currZoomLevel > this.slide.zoomLevels.max || t || (this.finishPanGestureForAxis("x", e), this.finishPanGestureForAxis("y", e))
        }
        handleTap({
          event: e,
          xy: [t, o]
        }) {
          const i = {
              x: t,
              y: o
            },
            s = e;
          if (s.type.includes("cancel")) return;
          const n = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const o = Math.abs(e.x - t.x),
              i = Math.abs(e.y - t.y);
            return Math.sqrt(o * o + i * i)
          })(this.prevTap, i) < 25 && this.slide.tapHandler.doubleTap(i, s)) : (x(this.prevTap, {
            x: t,
            y: o
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(i, s), this.clearTapTimer()
          }, n))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [o, i]
          } = t, s = "x" === e ? o : i, n = this.slide.pan[e], r = n + s;
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(n),
              t = this.getVerticalDragRatio(r);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const a = this.slide.bounds.correctPan(e, r);
          n !== a && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = a)
        }
        setPanWithFriction(e, t, o) {
          if (this.slide.bounds.correctPan(e, t) !== t || o) {
            const i = Math.round(t - this.slide.pan[e]);
            this.slide.pan[e] += i * (o || .35)
          } else this.slide.pan[e] = t
        }
        getVerticalDragRatio(e) {
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.h / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class V {
        slide;
        trigger = null;
        thumbnail = null;
        containerOpacity = "1";
        containerBounds = null;
        containerRadius = "";
        containerClip = "";
        placeholderFit = "";
        placeholderClip = "";
        placeholderPosition = "";
        placeholderScale = "";
        placeholderTransform = "";
        placeholderRadius = "";
        width = 0;
        height = 0;
        initialZoom = 0;
        initialPan = {
          x: 0,
          y: 0
        };
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        setup(e, t) {
          this.trigger = e, this.thumbnail = t, this.correctImageSize(), this.setTriggerBounds(), this.setTriggerStyles(), this.setThumbStyles()
        }
        update(e) {
          this.thumbnail = e, this.correctImageSize(), this.setTriggerBounds(), this.setTriggerStyles(), this.setThumbStyles()
        }
        resize() {
          this.setTriggerBounds(), this.setThumbStyles(), this.correctImageSize()
        }
        async loadPlaceholder(e) {
          e.src = this.thumbnail.currentSrc ?? "", await b(e)
        }
        setTriggerBounds() {
          this.containerBounds = (e => {
            const t = e?.getBoundingClientRect() ?? {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            return {
              x: t.x,
              y: t.y,
              w: t.width,
              h: t.height
            }
          })(this.trigger)
        }
        setThumbStyles() {
          if (this.thumbnail) {
            const e = getComputedStyle(this.thumbnail);
            this.placeholderFit = e.objectFit, this.placeholderPosition = e.objectPosition, this.placeholderScale = "none" === e.scale ? void 0 : e.scale, this.placeholderTransform = e.transform, this.placeholderClip = "none" === e.clipPath ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : e.clipPath, this.placeholderRadius = e.borderRadius || `${e.borderTopLeftRadius} ${e.borderTopRightRadius} ${e.borderBottomRightRadius} ${e.borderBottomLeftRadius}`
          }
        }
        setTriggerStyles() {
          if (this.trigger) {
            const e = getComputedStyle(this.trigger);
            this.containerOpacity = e.opacity, this.containerClip = "none" === e.clipPath ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : e.clipPath, this.containerRadius = e.borderRadius || `${e.borderTopLeftRadius} ${e.borderTopRightRadius} ${e.borderBottomRightRadius} ${e.borderBottomLeftRadius}`
          }
        }
        correctImageSize() {
          if (this.thumbnail) {
            const e = this.thumbnail.naturalWidth,
              t = this.thumbnail.naturalHeight,
              o = this.slide.panAreaSize.w / e,
              i = this.slide.panAreaSize.h / t;
            this.width = i > o ? this.slide.panAreaSize.w : e * i, this.height = o > i ? this.slide.panAreaSize.h : t * o
          }
        }
      }
      class U {
        slide;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleWheel({
          ctrlKey: e,
          event: t,
          delta: [o, i]
        }) {
          if (e) {
            let e = -i;
            1 === t.deltaMode ? e *= .05 : e *= t.deltaMode ? 1 : .002, e = 2 ** e;
            const o = this.slide.currZoomLevel * e;
            this.slide.zoomTo(o, {
              x: t.x,
              y: t.y
            })
          } else 1 === t.deltaMode && (o *= 18, i *= 18), this.slide.panTo(this.slide.pan.x - o, this.slide.pan.y - i)
        }
      }
      class H extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, o, i) {
          super(e), this.point = o, this.tapTarget = t, this.originalEvent = i
        }
      }
      class W extends E {
        slide;
        options;
        constructor({
          slide: e,
          options: t
        }) {
          super(), this.slide = e, this.options = t
        }
        updateOptions(e) {
          this.options = e
        }
        click(e, t) {
          const o = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("click", o, e, t)
        }
        tap(e, t) {
          const o = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("tap", o, e, t)
        }
        doubleTap(e, t) {
          const o = "IMG" === t.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("doubleTap", o, e, t)
        }
        doClickOrTapAction(e, t, o, i) {
          if (!this.dispatch(e, new H(e, t, o, i)).defaultPrevented) switch (this.options[e]) {
            case "none":
              break;
            case "close":
              this.slide.dispatch("close");
              break;
            case "zoom":
              this.slide.toggleZoom(o), this.slide.dispatch("animate");
              break;
            case "toggle-controls":
              this.slide.dispatch("toggle-controls");
              break;
            case "zoom-or-close":
              this.slide.currZoomLevel === this.slide.zoomLevels.initial ? this.slide.dispatch("close") : (this.slide.toggleZoom(o), this.slide.dispatch("animate"))
          }
        }
      }
      class G {
        animate = !0;
        pinching = !1;
        slide;
        startPan = {
          x: 0,
          y: 0
        };
        zoomPoint = {
          x: 0,
          y: 0
        };
        startZoomPoint = {
          x: 0,
          y: 0
        };
        startZoomDistance = 0;
        startZoomLevel = 1;
        wasOverFitZoomLevel = !1;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleZoom(e) {
          e.first ? (this.pinching = !0, this.start(e)) : e.last ? (this.end(), this.pinching = !1) : this.change(e)
        }
        start({
          origin: e,
          da: [t]
        }) {
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = v(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, x(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const o = this.slide.zoomLevels.min,
            i = this.slide.zoomLevels.max;
          this.zoomPoint = v(e);
          let s = 1 / this.startZoomDistance * t * this.startZoomLevel;
          s > this.slide.zoomLevels.initial + this.slide.zoomLevels.initial / 15 && (this.wasOverFitZoomLevel = !0), s < o ? this.slide.pinchToClose && !this.wasOverFitZoomLevel && this.startZoomLevel <= this.slide.zoomLevels.initial ? this.slide.updateOverlayOpacity(1 - (o - s) / (o / 1.2)) : s = o - .15 * (o - s) : s > i && (s = i + .05 * (s - i)), this.slide.pan.x = this.calculatePanForZoomLevel("x", s), this.slide.pan.y = this.calculatePanForZoomLevel("y", s), this.slide.setZoomLevel(s, s >= this.slide.zoomLevels.initial)
        }
        end() {
          this.slide.currZoomLevel < this.slide.zoomLevels.initial && !this.wasOverFitZoomLevel && this.slide.pinchToClose ? (this.animate = !1, this.slide.dispatch("close")) : this.correctZoomPan()
        }
        calculatePanForZoomLevel(e, t) {
          const o = t / this.startZoomLevel;
          return this.zoomPoint[e] - (this.startZoomPoint[e] - this.startPan[e]) * o
        }
        correctZoomPan(e) {
          0 === this.zoomPoint.x && (e = !0);
          const t = this.slide.currZoomLevel;
          let o, i = !0;
          t < this.slide.zoomLevels.initial ? o = this.slide.zoomLevels.initial : t > this.slide.zoomLevels.max ? o = this.slide.zoomLevels.max : (i = !1, o = t), this.slide.getControlsOpacity();
          const s = this.slide.getControlsOpacity() < 1,
            n = x({
              x: 0,
              y: 0
            }, this.slide.pan);
          let r = x({
            x: 0,
            y: 0
          }, n);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, x(this.startPan, n)), i && (r = {
            x: this.calculatePanForZoomLevel("x", o),
            y: this.calculatePanForZoomLevel("y", o)
          }), this.slide.setZoomLevel(o, !1), r = {
            x: this.slide.bounds.correctPan("x", r.x),
            y: this.slide.bounds.correctPan("y", r.y)
          }, this.slide.setZoomLevel(t, !1), l = n, ((a = r).x !== l.x || a.y !== l.y || i || s) && (x(this.slide.pan, r), this.slide.setZoomLevel(o))
        }
      }
      class K {
        target;
        safeAreaTarget;
        constructor({
          options: e
        } = {}) {
          this.target = e?.panArea, this.safeAreaTarget = e?.safeArea
        }
        setup(e) {
          this.safeAreaTarget = e
        }
        get w() {
          return this.target ? this.target.clientWidth : window.innerWidth
        }
        get h() {
          return this.target ? this.target.clientHeight : window.innerHeight
        }
        get safeArea() {
          return this.safeAreaTarget ? (e => {
            const t = window.getComputedStyle(e, null),
              o = e.getBoundingClientRect();
            return {
              x: o.left + parseFloat(t.paddingLeft),
              y: o.top + parseFloat(t.paddingTop),
              w: o.width - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight),
              h: o.height - parseFloat(t.paddingTop) - parseFloat(t.paddingBottom)
            }
          })(this.safeAreaTarget) : {
            w: this.w,
            h: this.h,
            x: 0,
            y: 0
          }
        }
      }
      class X extends E {
        overlayOpacity = 1;
        controlsOpacity = 1;
        width;
        height;
        closing = !1;
        opening = !0;
        pan = {
          x: 0,
          y: 0
        };
        currZoomLevel = 1;
        opener;
        bounds;
        zoomLevels;
        dragHandler;
        zoomHandler;
        scrollWheel;
        tapHandler;
        pinchToClose = !1;
        controlsVisible = !0;
        panAreaSize;
        constructor({
          width: e = 0,
          height: t = 0,
          zoomLevelOptions: o,
          actionOptions: i,
          panAreaOptions: s,
          dragOptions: n
        }) {
          super(), this.width = e, this.height = t, this.opener = new V({
            slide: this
          }), this.bounds = new D({
            slide: this
          }), this.dragHandler = new N({
            options: n,
            slide: this
          }), this.scrollWheel = new U({
            slide: this
          }), this.zoomHandler = new G({
            slide: this
          }), this.zoomLevels = new F({
            options: o,
            slide: this
          }), this.tapHandler = new W({
            options: i,
            slide: this
          }), this.panAreaSize = new K({
            options: s
          })
        }
        setup(e, t, o) {
          this.panAreaSize.setup(o), this.opener.setup(e, t), this.dragHandler.setup(), this.closing = !1, this.width = this.opener.width, this.height = this.opener.height, this.controlsVisible = !0, this.controlsOpacity = 1, this.calculateSize(), this.bounds.update(this.currZoomLevel)
        }
        updateImage(e) {
          this.opener.update(e), this.resize()
        }
        resize() {
          this.opener.resize(), this.width = this.opener.width, this.height = this.opener.height, this.currZoomLevel === this.zoomLevels.initial ? (this.calculateSize(), this.zoomAndPanToInitial(), this.getUpdatedContentSize()) : (this.calculateSize(), this.bounds.update(this.currZoomLevel), this.panTo(this.pan.x, this.pan.y)), this.dispatch("resize")
        }
        close() {
          this.closing = !0, this.opener.resize()
        }
        panTo(e, t, o) {
          this.pan.x = this.bounds.correctPan("x", e, o), this.pan.y = this.bounds.correctPan("y", t, o)
        }
        zoomTo(e, t, o) {
          const i = this.currZoomLevel;
          e = w(e), o || (e = z(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, i), this.pan.y = this.calculateZoomToPanOffset("y", t, i), y(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            o = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(o), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), y(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), x(this.pan, this.bounds.center)
        }
        toggleControls() {
          this.controlsVisible = !this.controlsVisible, this.controlsOpacity = this.controlsVisible ? 1 : 0
        }
        getControlsVisible() {
          return this.controlsVisible
        }
        getControlsOpacity() {
          return this.controlsOpacity
        }
        updateControlsOpacity(e = 1) {
          this.controlsVisible && (this.controlsOpacity = e)
        }
        getOverlayOpacity() {
          return this.overlayOpacity
        }
        updateOverlayOpacity(e = 1) {
          this.overlayOpacity = e, this.updateControlsOpacity(e < 1 ? e - .4 : e)
        }
        setZoomLevel(e, t = !0) {
          this.currZoomLevel = e, this.bounds.update(this.currZoomLevel), t && this.dispatch("zoom")
        }
        calculateSize() {
          this.zoomLevels.update({
            w: this.width,
            h: this.height
          })
        }
        calculateZoomToPanOffset(e, t, o) {
          if (0 === this.bounds.max[e] - this.bounds.min[e]) return this.bounds.center[e];
          t || (t = this.getPanAreaCenterPoint()), o || (o = this.zoomLevels.initial);
          const i = this.currZoomLevel / o;
          return this.bounds.correctPan(e, (this.pan[e] - t[e]) * i + t[e])
        }
        getCurrentScale() {
          return this.currZoomLevel / 1
        }
        getCurrentTransform() {
          const e = this.getCurrentScale();
          return {
            x: this.pan.x,
            y: this.pan.y,
            scale: e
          }
        }
        getUpdatedContentSize() {
          return {
            width: Math.round(1 * this.width) || this.panAreaSize.w,
            height: Math.round(1 * this.height) || this.panAreaSize.h
          }
        }
        getPanAreaCenterPoint() {
          return {
            x: this.panAreaSize.w / 2,
            y: this.panAreaSize.h / 2
          }
        }
        getCursor() {
          if (!this.opening && !this.closing) switch (this.tapHandler.options.tap) {
            case "zoom":
              return this.currZoomLevel > this.zoomLevels.initial ? "zoom-out" : "zoom-in";
            case "zoom-or-close":
            case "close":
              return "zoom-out"
          }
        }
      }
      var $ = o(18552),
        Y = o(69353),
        J = o(40632),
        q = o(66760);
      const Q = (0, I.YK)({
        OpenButtonLabel: {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        CloseButtonLabel: {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        CloseButtonTooltip: {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        ZoomInButtonLabel: {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        ZoomInButtonTooltip: {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        ZoomOutButtonLabel: {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        ZoomOutButtonTooltip: {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        ResetZoomButtonLabel: {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        ResetZoomButtonTooltip: {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        ZoomSliderLabel: {
          id: "Lightbox_Zoom_Slider_Label",
          description: "Aria-label for the lightbox zoom slider",
          defaultMessage: "Zoom level"
        },
        ZoomSliderTooltip: {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        DownloadButtonLabel: {
          id: "Lightbox_Download_Button_Label",
          description: "Aria-label for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        DownloadButtonTooltip: {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        }
      });
      var ee = o(81270),
        te = o(26842),
        oe = o(30452),
        ie = o(82699),
        se = o(88819);
      const ne = (0, u.createContext)({
          triggerRef: (0, u.createRef)(),
          triggerBorderRef: (0, u.createRef)(),
          thumbnailRef: (0, u.createRef)(),
          openIconRef: (0, u.createRef)(),
          overlayRef: (0, u.createRef)(),
          contentRef: (0, u.createRef)(),
          containerRef: (0, u.createRef)(),
          imageRef: (0, u.createRef)(),
          placeholderRef: (0, u.createRef)(),
          zoomPanRef: (0, u.createRef)(),
          captionRef: (0, u.createRef)(),
          controlsRef: (0, u.createRef)(),
          closeRef: (0, u.createRef)(),
          zoomRef: (0, u.createRef)(),
          zoomInRef: (0, u.createRef)(),
          zoomSliderRef: (0, u.createRef)(),
          zoomOutRef: (0, u.createRef)(),
          resetRef: (0, u.createRef)(),
          downloadRef: (0, u.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        re = ({
          altText: e,
          open: t,
          onOpenChange: o,
          defaultOpen: i,
          minZoomLevel: s = 100,
          maxZoomLevel: n = 300,
          zoomLevelStep: r = 100,
          clickAction: a = "close",
          doubleTapAction: l,
          tapAction: d,
          hideTrigger: h = !0,
          ...m
        }) => {
          const f = (0, J.Ym)(),
            g = (0, p.rl)(),
            b = (0, u.useRef)(null),
            v = (0, u.useRef)(null),
            x = (0, u.useRef)(null),
            y = (0, u.useRef)(null),
            w = (0, u.useRef)(null),
            z = (0, u.useRef)(null),
            R = (0, u.useRef)(null),
            L = (0, u.useRef)(null),
            C = (0, u.useRef)(null),
            T = (0, u.useRef)(null),
            P = (0, u.useRef)(null),
            O = (0, u.useRef)(null),
            Z = (0, u.useRef)(null),
            S = (0, u.useRef)(null),
            _ = (0, u.useRef)(null),
            j = (0, u.useRef)(null),
            A = (0, u.useRef)(null),
            B = (0, u.useRef)(null),
            M = (0, u.useRef)(null),
            [D = !1, F] = (0, p.ic)({
              prop: t || i,
              onChange: o
            }),
            E = (0, u.useRef)(null);
          return E.current || (E.current = new X({
            zoomLevelOptions: {
              max: n,
              min: s,
              step: r
            },
            actionOptions: {
              click: a,
              tap: d || (g ? "toggle-controls" : "close"),
              doubleTap: l || (g ? "zoom" : "none")
            }
          })), (0, c.jsx)(I.Dk, {
            messages: k,
            locale: f,
            children: (0, c.jsx)(ne.Provider, {
              value: {
                triggerRef: b,
                triggerBorderRef: v,
                thumbnailRef: x,
                openIconRef: y,
                overlayRef: w,
                contentRef: z,
                containerRef: R,
                zoomPanRef: L,
                imageRef: C,
                placeholderRef: T,
                captionRef: P,
                controlsRef: O,
                closeRef: Z,
                zoomRef: S,
                zoomInRef: _,
                zoomSliderRef: j,
                zoomOutRef: A,
                resetRef: B,
                downloadRef: M,
                open: D,
                setOpen: F,
                altText: e,
                hideTrigger: h,
                slide: E.current
              },
              children: (0, c.jsx)(le, {
                ...m
              })
            })
          })
        },
        ae = (0, u.createContext)({
          openAnim: () => Promise.resolve(),
          update: () => Promise.resolve(),
          close: () => Promise.resolve(),
          zoomIn: () => Promise.resolve(),
          zoomOut: () => Promise.resolve(),
          zoomTo: () => Promise.resolve(),
          resetZoom: () => Promise.resolve(),
          toggleControls: () => Promise.resolve(),
          onOpenChange: () => Promise.resolve()
        }),
        le = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, u.useContext)(ne), {
            onOpenChange: o,
            openAnim: i,
            close: s
          } = (() => {
            const {
              contextSafe: e
            } = (0, f.L)(), {
              slide: t,
              setOpen: o,
              hideTrigger: i,
              overlayRef: s,
              controlsRef: n,
              triggerRef: r,
              triggerBorderRef: a,
              thumbnailRef: l,
              containerRef: d,
              zoomPanRef: c,
              placeholderRef: h,
              imageRef: p
            } = (0, u.useContext)(ne), g = (0, u.useRef)(null);
            g.current || (g.current = m.os.timeline({
              defaults: A
            }));
            const v = (0, u.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const t = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of t)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              x = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), m.os.set([h.current, p.current], {
                  position: "absolute",
                  border: "0px",
                  width: "1px",
                  height: "1px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  overflowWrap: "normal",
                  opacity: .003
                }), m.os.set([p.current], {
                  visibility: "hidden"
                }), await t.opener.loadPlaceholder(h.current), g.current.clear(), h.current && (g.current.to([h.current, p.current], {
                  border: "initial",
                  padding: "initial",
                  margin: "initial",
                  overflow: "hidden",
                  clip: "initial",
                  whiteSpace: "initial",
                  overflowWrap: "initial",
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  objectFit: t.opener.placeholderFit,
                  objectPosition: t.opener.placeholderPosition,
                  scale: t.opener.placeholderScale,
                  transform: t.opener.placeholderTransform,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), g.current.to([c.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), g.current.to([d.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), i && g.current.to([r.current, a.current], {
                  opacity: 0,
                  duration: 0
                }), g.current.to([h.current, p.current], {
                  opacity: t.opener.containerOpacity,
                  borderRadius: t.opener.placeholderRadius,
                  clipPath: t.opener.placeholderClip,
                  duration: 0
                }), g.current.fromTo([d.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  borderRadius: () => t.opener.placeholderRadius
                }, {
                  x: 0,
                  y: 0,
                  width: () => t.panAreaSize.w,
                  height: () => t.panAreaSize.h,
                  borderRadius: 0,
                  data: {
                    invalidate: !0
                  }
                }, 0), g.current.fromTo([h.current, p.current], {
                  border: "initial",
                  padding: "initial",
                  margin: "initial",
                  overflow: "hidden",
                  clip: "initial",
                  whiteSpace: "initial",
                  overflowWrap: "initial",
                  scale: () => t.opener.placeholderScale,
                  transform: () => t.opener.placeholderTransform,
                  objectPosition: () => t.opener.placeholderPosition,
                  objectFit: () => t.opener.placeholderFit,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  opacity: t.opener.containerOpacity,
                  borderRadius: () => t.opener.placeholderRadius,
                  clipPath: () => t.opener.placeholderClip
                }, {
                  opacity: 1,
                  borderRadius: 0,
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  width: () => t.opener.width,
                  height: () => t.opener.height,
                  transform: "translate(0, 0) scale(1)",
                  data: {
                    invalidate: !0
                  }
                }, 0), g.current.fromTo([c.current], {
                  x: () => 0,
                  y: () => 0,
                  scale: () => 1
                }, {
                  x: () => t.pan.x ?? 0,
                  y: () => t.pan.y ?? 0,
                  scale: () => t.getCurrentScale() ?? 1,
                  transformOrigin: "0px 0px",
                  data: {
                    invalidate: !0
                  }
                }, 0), g.current.fromTo([s.current], {
                  opacity: 0
                }, {
                  opacity: () => t.getOverlayOpacity(),
                  data: {
                    invalidate: !0
                  }
                }, 0), g.current.fromTo([n.current], {
                  opacity: 0,
                  [M]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [M]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (g.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await b(p.current), t.closing || (m.os.set([p.current], {
                  visibility: "visible",
                  ...B
                }), m.os.set([h.current], {
                  visibility: "hidden",
                  ...B
                }))))
              }),
              y = e(async () => {
                t.close(), g.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await g.current.reverse()
              }),
              w = (0, u.useCallback)(async e => {
                e || (window.addEventListener("click", v), await y(), window.removeEventListener("click", v)), o(e)
              }, [o]),
              z = (0, u.useCallback)(() => w(!1), [w]);
            return {
              onOpenChange: w,
              openAnim: x,
              close: z
            }
          })(), {
            update: n,
            zoomIn: r,
            zoomOut: a,
            zoomTo: l,
            resetZoom: d,
            toggleControls: h
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = (0, f.L)(), {
              slide: o,
              imageRef: i,
              zoomPanRef: s,
              controlsRef: n,
              containerRef: r,
              placeholderRef: a
            } = (0, u.useContext)(ne), l = t(async e => {
              o.zoomTo(e), m.os.set([s.current], {
                ...o.getCurrentTransform(),
                ...B
              })
            }), d = t(async () => {
              o.zoomTo(o.currZoomLevel + o.zoomLevels.step), m.os.to([s.current], {
                ...o.getCurrentTransform(),
                ...B
              })
            }), c = t(async () => {
              o.zoomTo(o.currZoomLevel - o.zoomLevels.step), m.os.to([s.current], {
                ...o.getCurrentTransform(),
                ...B
              })
            }), h = t(async () => {
              o.zoomAndPanToInitial(), m.os.to([s.current], {
                ...o.getCurrentTransform(),
                ...B
              })
            }), p = t(async () => {
              if (o.closing) return;
              o.toggleControls();
              const e = o.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              m.os.to([n.current], {
                opacity: e,
                [M]: t,
                ...B
              })
            }), g = t(async () => {
              m.os.to([s.current], {
                ...o.getCurrentTransform(),
                ...B
              })
            }), b = (0, u.useCallback)(() => {
              i.current && s.current && (m.os.set([s.current], {
                ...o.getCurrentTransform(),
                ...B
              }), m.os.set([i.current, a.current], {
                ...o.getUpdatedContentSize(),
                ...B
              }), m.os.set([r.current], {
                width: o.panAreaSize.w,
                height: o.panAreaSize.h
              }))
            }, []);
            return (0, u.useEffect)(() => (o.addEventListener("close", e), o.addEventListener("animate", g), o.addEventListener("toggle-controls", p), o.addEventListener("resize", b), window.addEventListener("resize", o.resize.bind(o)), () => {
              o.removeEventListener("close", e), o.removeEventListener("animate", g), o.removeEventListener("toggle-controls", p), o.removeEventListener("resize", b), window.removeEventListener("resize", o.resize.bind(o))
            }), []), {
              zoomIn: d,
              zoomOut: c,
              zoomTo: l,
              resetZoom: h,
              toggleControls: p,
              update: g
            }
          })({
            close: s
          }), p = (0, Y.v6)(e, {
            open: t,
            onOpenChange: o
          });
          return (0, c.jsx)(ae.Provider, {
            value: {
              update: n,
              openAnim: i,
              close: s,
              zoomIn: r,
              zoomOut: a,
              zoomTo: l,
              resetZoom: d,
              toggleControls: h,
              onOpenChange: o
            },
            children: (0, c.jsx)(se.bL, {
              ...p
            })
          })
        },
        de = (0, u.forwardRef)(function({
          testId: e,
          children: t,
          ...o
        }, i) {
          const s = (0, I.tz)(),
            {
              triggerRef: n,
              triggerBorderRef: r,
              altText: a
            } = (0, u.useContext)(ne),
            l = (0, p.UP)(n, i),
            d = (0, Y.v6)(o, {
              "data-testid": e,
              "aria-label": s.formatMessage(Q.OpenButtonLabel, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, c.jsx)(se.l9, {
            ref: l,
            ...d,
            children: (0, c.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: r,
              children: (0, c.jsx)(h.xV, {
                children: t
              })
            })
          })
        }),
        ce = (0, u.forwardRef)(function({
          testId: e,
          asChild: t,
          ...o
        }, i) {
          const {
            thumbnailRef: s
          } = (0, u.useContext)(ne), n = (0, p.UP)(s, i), r = (0, Y.v6)(o, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? h.DX : "img";
          return (0, c.jsx)(a, {
            ref: n,
            ...r
          })
        }),
        he = (0, u.forwardRef)(function({
          asChild: e,
          ...t
        }, o) {
          const {
            openIconRef: i
          } = (0, u.useContext)(ne), s = (0, p.UP)(i, o), n = (0, Y.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), r = e ? h.DX : q.Maximize2;
          return (0, c.jsx)(r, {
            ref: s,
            ...n
          })
        }),
        ue = ({
          ...e
        }) => (0, c.jsx)(se.ZL, {
          ...e
        }),
        pe = (0, u.forwardRef)(function({
          testId: e,
          ...t
        }, o) {
          const {
            overlayRef: i
          } = (0, u.useContext)(ne), s = (0, p.UP)(i, o), n = (0, Y.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, c.jsx)(se.hJ, {
            ref: s,
            ...n
          })
        }),
        me = (0, u.forwardRef)(function({
          testId: e,
          children: t,
          ...o
        }, i) {
          const {
            openAnim: s
          } = (0, u.useContext)(ae), {
            contentRef: n,
            altText: r,
            triggerRef: a
          } = (0, u.useContext)(ne), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, u.useContext)(ne), [t, o] = (0, u.useState)(e.getCursor()), i = (0, u.useCallback)(() => {
              o(e.getCursor())
            }, []);
            return (0, u.useEffect)(() => (e.addEventListener("zoom", i), () => {
              e.removeEventListener("zoom", i)
            }), [i]), {
              cursor: t
            }
          })(), d = (0, $.m)("dark"), m = (0, p.UP)(n, i), f = (0, Y.v6)(o, {
            "data-testid": e,
            onOpenAutoFocus: s,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, a),
            className: (0, ee.clsx)("foundry_1a74xwb9", d),
            style: {
              cursor: l
            }
          });
          return (0, c.jsxs)(se.UC, {
            ref: m,
            ...f,
            children: [(0, c.jsx)(h.s6, {
              children: (0, c.jsx)(se.hE, {
                children: r
              })
            }), t]
          })
        }),
        fe = (0, u.forwardRef)(function({
          testId: e,
          children: t,
          ...o
        }, i) {
          const {
            containerRef: s
          } = (0, u.useContext)(ne);
          (() => {
            const {
              contextSafe: e
            } = (0, f.L)(), {
              toggleControls: t
            } = (0, u.useContext)(ae), {
              containerRef: o,
              zoomPanRef: i,
              overlayRef: s,
              controlsRef: n,
              slide: r
            } = (0, u.useContext)(ne), a = e(e => {
              e.pinching || r.zoomHandler.pinching || (r.dragHandler.handleDrag(e), r.dragHandler.animate && !r.closing && (m.os.to([i.current], {
                ...r.getCurrentTransform(),
                ...B
              }), m.os.to([s.current], {
                opacity: r.getOverlayOpacity(),
                ...B
              }), m.os.to([n.current], {
                opacity: r.getControlsOpacity(),
                ...B
              })))
            }), l = e(e => {
              e.pinching || r.zoomHandler.pinching || (r.scrollWheel.handleWheel(e), r.closing || m.os.to([i.current], {
                ...r.getCurrentTransform(),
                ...B
              }))
            }), d = e(e => {
              !e.pinching && !r.zoomHandler.pinching || r.dragHandler.dragging || (r.zoomHandler.handleZoom(e), r.zoomHandler.animate && !r.closing && (m.os.to([i.current], {
                ...r.getCurrentTransform(),
                ...B
              }), m.os.to([s.current], {
                opacity: r.getOverlayOpacity(),
                ...B
              }), m.os.to([n.current], {
                opacity: r.getControlsOpacity(),
                ...B
              })))
            }), c = (0, u.useCallback)(() => {
              r.controlsVisible || t()
            }, [, t]);
            (0, p.iQ)({
              ref: n,
              onFocusIn: c
            }), (0, g.useGesture)({
              onWheel: l,
              onDrag: a,
              onPinch: d
            }, {
              target: o,
              drag: {
                filterTaps: !0
              },
              pinch: {
                pinchOnWheel: !1
              }
            })
          })();
          const n = (0, p.UP)(s, i),
            r = (0, Y.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, c.jsx)("div", {
            ref: n,
            ...r,
            children: (0, c.jsxs)(ge, {
              children: [(0, c.jsx)(be, {}), t]
            })
          })
        }),
        ge = (0, u.forwardRef)(function({
          testId: e,
          asChild: t,
          ...o
        }, i) {
          const {
            zoomPanRef: s
          } = (0, u.useContext)(ne), n = (0, p.UP)(s, i), r = (0, Y.v6)(o, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? h.DX : "div";
          return (0, c.jsx)(a, {
            ref: n,
            ...r
          })
        }),
        be = (0, u.forwardRef)(function({
          testId: e,
          asChild: t,
          ...o
        }, i) {
          const {
            placeholderRef: s
          } = (0, u.useContext)(ne), n = (0, p.UP)(s, i), r = (0, Y.v6)(o, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), a = t ? h.DX : "img";
          return (0, c.jsx)(a, {
            ref: n,
            ...r
          })
        }),
        ve = (0, u.forwardRef)(function({
          testId: e,
          asChild: t,
          ...o
        }, i) {
          const {
            imageRef: s
          } = (0, u.useContext)(ne), n = (0, p.UP)(s, i), r = (0, Y.v6)(o, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? h.DX : "img";
          return (0, c.jsx)(a, {
            ref: n,
            ...r
          })
        }),
        xe = (0, u.forwardRef)(function({
          testId: e,
          asChild: t,
          ...o
        }, i) {
          const {
            captionRef: s
          } = (0, u.useContext)(ne), n = (0, p.UP)(s, i), r = (0, Y.v6)(o, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), a = t ? h.DX : "p";
          return (0, c.jsx)(se.VY, {
            asChild: !0,
            children: (0, c.jsx)(a, {
              ref: n,
              ...r
            })
          })
        }),
        ye = (0, u.forwardRef)(function({
          testId: e,
          asChild: t,
          ...o
        }, i) {
          const {
            controlsRef: s
          } = (0, u.useContext)(ne);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: o,
              resetZoom: i,
              close: s
            } = (0, u.useContext)(ae);
            (0, R.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, R.vC)(["minus", "subtract"], o, {
              enabled: e,
              preventDefault: !0
            }), (0, R.vC)("r", i, {
              enabled: e,
              preventDefault: !0
            }), (0, R.vC)("esc", s, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const n = (0, p.UP)(s, i),
            r = (0, Y.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            a = t ? h.DX : "div";
          return (0, c.jsx)(R.Hb, {
            children: (0, c.jsx)(a, {
              ref: n,
              ...r
            })
          })
        }),
        we = ({
          content: e,
          metadata: t,
          enabled: o = !0,
          children: i,
          ...s
        }) => {
          if (!o) return (0, c.jsx)(c.Fragment, {
            children: i
          });
          const n = (0, Y.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, s);
          return (0, c.jsxs)(oe.Root, {
            delayDuration: 0,
            children: [(0, c.jsx)(oe.Trigger, {
              children: i
            }), (0, c.jsxs)(oe.Content, {
              ...n,
              children: [(0, c.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, c.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, c.jsx)(oe.Arrow, {})]
            })]
          })
        },
        ze = (0, u.forwardRef)(function({
          ...e
        }, t) {
          const o = (0, Y.v6)(e, {
            isInline: !0
          });
          return (0, c.jsx)(te.s, {
            ref: t,
            ...o
          })
        }),
        Re = (0, u.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: o = !0,
          children: i,
          ...s
        }, r) {
          const a = (0, I.tz)(),
            {
              zoomRef: l
            } = (0, u.useContext)(ne),
            {
              canZoomIn: d,
              zoomIn: m,
              canZoomOut: f,
              zoomOut: g,
              zoomProgress: b,
              minZoomLevel: v,
              maxZoomLevel: x,
              zoomTo: y
            } = (() => {
              const {
                slide: e
              } = (0, u.useContext)(ne), {
                zoomIn: t,
                zoomOut: o,
                zoomTo: i
              } = (0, u.useContext)(ae), [s, n] = (0, u.useState)(!1), [r, a] = (0, u.useState)(!1), [l, d] = (0, u.useState)(0), [c, h] = (0, u.useState)(0), [p, m] = (0, u.useState)(0), f = (0, u.useCallback)(() => {
                n(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), d(Math.ceil(100 * e.currZoomLevel)), h(Math.ceil(100 * e.zoomLevels.min)), m(Math.ceil(100 * e.zoomLevels.max))
              }, []), g = (0, u.useCallback)(([e]) => {
                i(e / 100)
              }, [i]);
              return (0, u.useEffect)(() => (e.addEventListener("zoom", f), () => {
                e.removeEventListener("zoom", f)
              }), [f]), {
                zoomTo: g,
                zoomIn: t,
                zoomOut: o,
                canZoomIn: s,
                canZoomOut: r,
                zoomProgress: l,
                minZoomLevel: c,
                maxZoomLevel: p
              }
            })(),
            w = (0, p.UP)(l, r),
            z = (0, Y.v6)(s, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            R = t ? h.DX : "div";
          return (0, c.jsxs)(R, {
            ref: w,
            ...z,
            children: [(0, c.jsx)(we, {
              side: "left",
              enabled: o,
              content: a.formatMessage(Q.ZoomInButtonLabel),
              metadata: a.formatMessage(Q.ZoomInButtonTooltip, {
                shortcut: (0, c.jsx)(ze, {
                  shortcut: "+"
                })
              }),
              children: (0, c.jsx)(n.K, {
                label: a.formatMessage(Q.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: j({
                  position: "top"
                }),
                onPress: m,
                isDisabled: !d
              })
            }), (0, c.jsxs)(ie.bL, {
              className: "foundry_1a74xwbt",
              max: x,
              min: v,
              step: 1,
              value: [b],
              orientation: "vertical",
              onValueChange: y,
              children: [(0, c.jsx)(ie.CC, {
                className: "foundry_1a74xwbu",
                children: (0, c.jsx)(ie.Q6, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, c.jsx)(we, {
                side: "left",
                enabled: o,
                content: a.formatMessage(Q.ZoomSliderTooltip, {
                  zoom: b.toFixed(0)
                }),
                children: (0, c.jsx)(ie.zi, {
                  className: "foundry_1a74xwbw",
                  children: (0, c.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, c.jsx)(we, {
              side: "left",
              enabled: o,
              content: a.formatMessage(Q.ZoomOutButtonLabel),
              metadata: a.formatMessage(Q.ZoomOutButtonTooltip, {
                shortcut: (0, c.jsx)(ze, {
                  shortcut: "-"
                })
              }),
              children: (0, c.jsx)(n.K, {
                label: a.formatMessage(Q.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: j({
                  position: "bottom"
                }),
                onPress: g,
                isDisabled: !f
              })
            }), (0, c.jsx)(h.xV, {
              children: i
            })]
          })
        }),
        Le = (0, u.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: o = !0,
          ...i
        }, s) {
          const r = (0, I.tz)(),
            {
              closeRef: a
            } = (0, u.useContext)(ne),
            l = (0, p.UP)(a, s),
            d = (0, Y.v6)(i, {
              "data-testid": e,
              className: _({
                styled: !t
              })
            }),
            m = t ? (0, c.jsx)(h.DX, {
              ref: l,
              ...d
            }) : (0, c.jsx)(n.K, {
              ref: l,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: r.formatMessage(Q.CloseButtonLabel)
            });
          return (0, c.jsx)(we, {
            side: "right",
            enabled: o,
            content: r.formatMessage(Q.CloseButtonLabel),
            metadata: r.formatMessage(Q.CloseButtonTooltip, {
              shortcut: (0, c.jsx)(ze, {
                shortcut: "Esc"
              })
            }),
            children: (0, c.jsx)(se.bm, {
              asChild: !0,
              children: m
            })
          })
        }),
        Ce = (0, u.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...o
        }, i) {
          const s = (0, I.tz)(),
            r = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, u.useContext)(ne), {
                contextSafe: o
              } = (0, f.L)(), {
                resetZoom: i
              } = (0, u.useContext)(ae), [s, n] = (0, u.useState)(e.currZoomLevel !== e.zoomLevels.initial), r = o(e => {
                m.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...B
                })
              }), a = (0, u.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                n(t), r(t)
              }, [n]);
              return (0, u.useEffect)(() => (e.addEventListener("zoom", a), () => {
                e.removeEventListener("zoom", a)
              }), [a]), {
                isDisabled: !s,
                onPress: i,
                "aria-hidden": !s
              }
            })(),
            {
              resetRef: a
            } = (0, u.useContext)(ne),
            l = (0, p.UP)(a, i),
            d = (0, Y.v6)(o, r, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, c.jsx)(we, {
            side: "left",
            enabled: t,
            content: s.formatMessage(Q.ResetZoomButtonLabel),
            metadata: s.formatMessage(Q.ResetZoomButtonTooltip, {
              shortcut: (0, c.jsx)(ze, {
                shortcut: "R"
              })
            }),
            children: (0, c.jsx)(n.K, {
              ref: l,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: s.formatMessage(Q.ResetZoomButtonLabel)
            })
          })
        }),
        Te = (0, u.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...o
        }, i) {
          const s = (0, I.tz)(),
            {
              downloadRef: r,
              imageRef: a
            } = (0, u.useContext)(ne),
            l = (0, p.UP)(r, i),
            d = (0, Y.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, c.jsx)(we, {
            side: "left",
            enabled: t,
            content: s.formatMessage(Q.DownloadButtonTooltip),
            children: (0, c.jsx)(n.K, {
              ref: l,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: s.formatMessage(Q.DownloadButtonTooltip),
              onPress: () => (async e => {
                if (!e) return;
                const t = e.currentSrc,
                  o = t.split("\\").pop()?.split("/").pop() || "";
                fetch(t, {
                  headers: {
                    origin: location.origin
                  }
                }).then(e => e.blob()).then(e => {
                  ((e, t) => {
                    const o = document.createElement("a");
                    o.href = e, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
                  })(window.URL.createObjectURL(e), o)
                }).catch(e => console.error(e))
              })(a.current)
            })
          })
        }),
        Pe = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Oe = o(23358),
        Ze = o(5847),
        Se = o(38679),
        _e = o(87256),
        je = o(39072),
        Ae = o(78812),
        Be = o(67673),
        Me = o(84781),
        Ie = o(93699),
        ke = o(11594),
        De = o(36280),
        Fe = o(54255),
        Ee = o(1777),
        Ne = o(43602),
        Ve = o(2487),
        Ue = o(1750),
        He = o(84244),
        We = o(6917),
        Ge = o(35611)
    },
    50888(e, t, o) {
      o.d(t, {
        Dk: () => l,
        YK: () => r.YK,
        tz: () => a.A
      });
      var i = o(39793),
        s = o(93082),
        n = o(54422),
        r = o(57338),
        a = o(74775);
      const l = ({
        children: e,
        messages: t,
        locale: o,
        fallback: r
      }) => {
        const [a, l] = (0, s.useState)(null);
        return (0, s.useEffect)(() => {
          (t?.[o] ?? t["en-US"]).then(e => {
            l(e.default)
          })
        }, [o]), a ? (0, i.jsx)(n.A, {
          locale: o,
          messages: a,
          children: e
        }) : r ?? null
      }
    }
  }
]);