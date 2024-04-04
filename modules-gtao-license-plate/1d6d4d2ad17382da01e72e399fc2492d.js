! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "c1bba353-e11e-4d59-9f37-2b02bcc006e8", t._sentryDebugIdIdentifier = "sentry-dbid-c1bba353-e11e-4d59-9f37-2b02bcc006e8")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [128], {
    64128: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, {
        ConfigResolverMap: () => n.ET,
        EngineMap: () => n.ov,
        createUseGesture: () => _,
        dragAction: () => n.kj,
        hoverAction: () => n.a0,
        moveAction: () => n.Sf,
        pinchAction: () => n.ec,
        registerAction: () => n.Oe,
        rubberbandIfOutOfBounds: () => c.s,
        scrollAction: () => n.AT,
        useDrag: () => d,
        useGesture: () => b,
        useHover: () => g,
        useMove: () => m,
        usePinch: () => p,
        useScroll: () => v,
        useWheel: () => f,
        wheelAction: () => n.sr
      });
      var s = i(77528),
        n = i(98476),
        o = i(51664),
        r = i.n(o),
        a = i(3328),
        c = i(27304),
        h = i(33288),
        l = {};
      for (const t in h)["default", "createUseGesture", "useDrag", "useGesture", "useHover", "useMove", "usePinch", "useScroll", "useWheel", "ConfigResolverMap", "EngineMap", "dragAction", "hoverAction", "moveAction", "pinchAction", "registerAction", "scrollAction", "wheelAction", "rubberbandIfOutOfBounds"].indexOf(t) < 0 && (l[t] = () => h[t]);

      function u(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = arguments.length > 2 ? arguments[2] : void 0,
          s = arguments.length > 3 ? arguments[3] : void 0;
        const n = r().useMemo((() => new a.M(t)), []);
        if (n.applyHandlers(t, s), n.applyConfig(e, i), r().useEffect(n.effect.bind(n)), r().useEffect((() => n.clean.bind(n)), []), void 0 === e.target) return n.bind.bind(n)
      }

      function d(t, e) {
        return (0, s.r)(s.e), u({
          drag: t
        }, e || {}, "drag")
      }

      function p(t, e) {
        return (0, s.r)(s.f), u({
          pinch: t
        }, e || {}, "pinch")
      }

      function f(t, e) {
        return (0, s.r)(s.w), u({
          wheel: t
        }, e || {}, "wheel")
      }

      function v(t, e) {
        return (0, s.r)(s.s), u({
          scroll: t
        }, e || {}, "scroll")
      }

      function m(t, e) {
        return (0, s.r)(s.m), u({
          move: t
        }, e || {}, "move")
      }

      function g(t, e) {
        return (0, s.r)(s.h), u({
          hover: t
        }, e || {}, "hover")
      }

      function _(t) {
        return t.forEach(s.r),
          function(t, e) {
            const {
              handlers: i,
              nativeHandlers: s,
              config: n
            } = (0, a.q)(t, e || {});
            return u(i, n, void 0, s)
          }
      }

      function b(t, e) {
        return _([s.e, s.f, s.s, s.w, s.m, s.h])(t, e || {})
      }
      i.d(e, l)
    },
    98476: (t, e, i) => {
      "use strict";
      i.d(e, {
        AT: () => s.s,
        ET: () => s.C,
        Oe: () => s.r,
        Sf: () => s.m,
        a0: () => s.h,
        ec: () => s.f,
        kj: () => s.e,
        ov: () => s.E,
        sr: () => s.w
      });
      var s = i(77528)
    },
    77528: (t, e, i) => {
      "use strict";
      i.d(e, {
        C: () => N,
        E: () => q,
        S: () => K,
        _: () => r,
        a: () => n,
        b: () => _,
        c: () => T,
        d: () => l,
        e: () => J,
        f: () => $,
        h: () => Q,
        i: () => f,
        m: () => Z,
        p: () => d,
        r: () => F,
        s: () => tt,
        t: () => p,
        w: () => et
      });
      var s = i(15780);

      function n(t, e, i) {
        return (e = function(t) {
          var e = function(t, e) {
            if ("object" != typeof t || null === t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(t, "string");
              if ("object" != typeof s) return s;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
          }(t);
          return "symbol" == typeof e ? e : String(e)
        }(e)) in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i, t
      }

      function o(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          e && (s = s.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.push.apply(i, s)
        }
        return i
      }

      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2 ? o(Object(i), !0).forEach((function(e) {
            n(t, e, i[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }))
        }
        return t
      }
      const a = {
        pointer: {
          start: "down",
          change: "move",
          end: "up"
        },
        mouse: {
          start: "down",
          change: "move",
          end: "up"
        },
        touch: {
          start: "start",
          change: "move",
          end: "end"
        },
        gesture: {
          start: "start",
          change: "change",
          end: "end"
        }
      };

      function c(t) {
        return t ? t[0].toUpperCase() + t.slice(1) : ""
      }
      const h = ["enter", "leave"];

      function l(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const s = a[t],
          n = s && s[e] || e;
        return "on" + c(t) + c(n) + (function() {
          let t = arguments.length > 1 ? arguments[1] : void 0;
          return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && !h.includes(t)
        }(i, n) ? "Capture" : "")
      }
      const u = ["gotpointercapture", "lostpointercapture"];

      function d(t) {
        let e = t.substring(2).toLowerCase();
        const i = !!~e.indexOf("passive");
        i && (e = e.replace("passive", ""));
        const s = u.includes(e) ? "capturecapture" : "capture",
          n = !!~e.indexOf(s);
        return n && (e = e.replace("capture", "")), {
          device: e,
          capture: n,
          passive: i
        }
      }

      function p(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        const i = a[t];
        return t + (i && i[e] || e)
      }

      function f(t) {
        return "touches" in t
      }

      function v(t) {
        return f(t) ? "touch" : "pointerType" in t ? t.pointerType : "mouse"
      }

      function m(t) {
        return f(t) ? function(t) {
          return "touchend" === t.type || "touchcancel" === t.type ? t.changedTouches : t.targetTouches
        }(t)[0] : t
      }

      function g(t, e) {
        try {
          const i = e.clientX - t.clientX,
            s = e.clientY - t.clientY,
            n = (e.clientX + t.clientX) / 2,
            o = (e.clientY + t.clientY) / 2,
            r = Math.hypot(i, s);
          return {
            angle: -180 * Math.atan2(i, s) / Math.PI,
            distance: r,
            origin: [n, o]
          }
        } catch (t) {}
        return null
      }

      function _(t) {
        return function(t) {
          return Array.from(t.touches).filter((e => {
            var i, s;
            return e.target === t.currentTarget || (null === (i = t.currentTarget) || void 0 === i || null === (s = i.contains) || void 0 === s ? void 0 : s.call(i, e.target))
          }))
        }(t).map((t => t.identifier))
      }

      function b(t, e) {
        const [i, s] = Array.from(t.touches).filter((t => e.includes(t.identifier)));
        return g(i, s)
      }

      function y(t) {
        const e = m(t);
        return f(t) ? e.identifier : e.pointerId
      }

      function w(t) {
        const e = m(t);
        return [e.clientX, e.clientY]
      }

      function S(t) {
        let {
          deltaX: e,
          deltaY: i,
          deltaMode: s
        } = t;
        return 1 === s ? (e *= 40, i *= 40) : 2 === s && (e *= 800, i *= 800), [e, i]
      }

      function k(t) {
        if ("function" == typeof t) {
          for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
          return t(...i)
        }
        return t
      }

      function E() {}

      function T() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return 0 === e.length ? E : 1 === e.length ? e[0] : function() {
          let t;
          for (const i of e) t = i.apply(this, arguments) || t;
          return t
        }
      }

      function M(t, e) {
        return Object.assign({}, e, t || {})
      }
      class O {
        constructor(t, e, i) {
          this.ctrl = t, this.args = e, this.key = i, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
        }
        get state() {
          return this.ctrl.state[this.key]
        }
        set state(t) {
          this.ctrl.state[this.key] = t
        }
        get shared() {
          return this.ctrl.state.shared
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key]
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key]
        }
        get config() {
          return this.ctrl.config[this.key]
        }
        get sharedConfig() {
          return this.ctrl.config.shared
        }
        get handler() {
          return this.ctrl.handlers[this.key]
        }
        reset() {
          const {
            state: t,
            shared: e,
            ingKey: i,
            args: s
          } = this;
          e[i] = t._active = t.active = t._blocked = t._force = !1, t._step = [!1, !1], t.intentional = !1, t._movement = [0, 0], t._distance = [0, 0], t._direction = [0, 0], t._delta = [0, 0], t._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ], t.args = s, t.axis = void 0, t.memo = void 0, t.elapsedTime = t.timeDelta = 0, t.direction = [0, 0], t.distance = [0, 0], t.overflow = [0, 0], t._movementBound = [!1, !1], t.velocity = [0, 0], t.movement = [0, 0], t.delta = [0, 0], t.timeStamp = 0
        }
        start(t) {
          const e = this.state,
            i = this.config;
          e._active || (this.reset(), this.computeInitial(), e._active = !0, e.target = t.target, e.currentTarget = t.currentTarget, e.lastOffset = i.from ? k(i.from, e) : e.offset, e.offset = e.lastOffset, e.startTime = e.timeStamp = t.timeStamp)
        }
        computeValues(t) {
          const e = this.state;
          e._values = t, e.values = this.config.transform(t)
        }
        computeInitial() {
          const t = this.state;
          t._initial = t._values, t.initial = t.values
        }
        compute(t) {
          const {
            state: e,
            config: i,
            shared: n
          } = this;
          e.args = this.args;
          let o = 0;
          if (t && (e.event = t, i.preventDefault && t.cancelable && e.event.preventDefault(), e.type = t.type, n.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, n.locked = !!document.pointerLockElement, Object.assign(n, function(t) {
              const e = {};
              if ("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t) {
                const {
                  shiftKey: i,
                  altKey: s,
                  metaKey: n,
                  ctrlKey: o
                } = t;
                Object.assign(e, {
                  shiftKey: i,
                  altKey: s,
                  metaKey: n,
                  ctrlKey: o
                })
              }
              return e
            }(t)), n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0, o = t.timeStamp - e.timeStamp, e.timeStamp = t.timeStamp, e.elapsedTime = e.timeStamp - e.startTime), e._active) {
            const t = e._delta.map(Math.abs);
            s.V.addTo(e._distance, t)
          }
          this.axisIntent && this.axisIntent(t);
          const [r, a] = e._movement, [c, h] = i.threshold, {
            _step: l,
            values: u
          } = e;
          if (i.hasCustomTransform ? (!1 === l[0] && (l[0] = Math.abs(r) >= c && u[0]), !1 === l[1] && (l[1] = Math.abs(a) >= h && u[1])) : (!1 === l[0] && (l[0] = Math.abs(r) >= c && Math.sign(r) * c), !1 === l[1] && (l[1] = Math.abs(a) >= h && Math.sign(a) * h)), e.intentional = !1 !== l[0] || !1 !== l[1], !e.intentional) return;
          const d = [0, 0];
          if (i.hasCustomTransform) {
            const [t, e] = u;
            d[0] = !1 !== l[0] ? t - l[0] : 0, d[1] = !1 !== l[1] ? e - l[1] : 0
          } else d[0] = !1 !== l[0] ? r - l[0] : 0, d[1] = !1 !== l[1] ? a - l[1] : 0;
          this.restrictToAxis && !e._blocked && this.restrictToAxis(d);
          const p = e.offset,
            f = e._active && !e._blocked || e.active;
          f && (e.first = e._active && !e.active, e.last = !e._active && e.active, e.active = n[this.ingKey] = e._active, t && (e.first && ("bounds" in i && (e._bounds = k(i.bounds, e)), this.setup && this.setup()), e.movement = d, this.computeOffset()));
          const [v, m] = e.offset, [
            [g, _],
            [b, y]
          ] = e._bounds;
          e.overflow = [v < g ? -1 : v > _ ? 1 : 0, m < b ? -1 : m > y ? 1 : 0], e._movementBound[0] = !!e.overflow[0] && (!1 === e._movementBound[0] ? e._movement[0] : e._movementBound[0]), e._movementBound[1] = !!e.overflow[1] && (!1 === e._movementBound[1] ? e._movement[1] : e._movementBound[1]);
          const w = e._active && i.rubberband || [0, 0];
          if (e.offset = (0, s.c)(e._bounds, e.offset, w), e.delta = s.V.sub(e.offset, p), this.computeMovement(), f && (!e.last || o > 32)) {
            e.delta = s.V.sub(e.offset, p);
            const t = e.delta.map(Math.abs);
            s.V.addTo(e.distance, t), e.direction = e.delta.map(Math.sign), e._direction = e._delta.map(Math.sign), !e.first && o > 0 && (e.velocity = [t[0] / o, t[1] / o], e.timeDelta = o)
          }
        }
        emit() {
          const t = this.state,
            e = this.shared,
            i = this.config;
          if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !i.triggerAllEvents) return;
          const s = this.handler(r(r(r({}, e), t), {}, {
            [this.aliasKey]: t.values
          }));
          void 0 !== s && (t.memo = s)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class x extends O {
        constructor() {
          super(...arguments), n(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = s.V.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = s.V.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(t) {
          const e = this.state,
            i = this.config;
          if (!e.axis && t) {
            const s = "object" == typeof i.axisThreshold ? i.axisThreshold[v(t)] : i.axisThreshold;
            e.axis = function(t, e) {
              let [i, s] = t;
              const n = Math.abs(i),
                o = Math.abs(s);
              return n > o && n > e ? "x" : o > n && o > e ? "y" : void 0
            }(e._movement, s)
          }
          e._blocked = (i.lockDirection || !!i.axis) && !e.axis || !!i.axis && i.axis !== e.axis
        }
        restrictToAxis(t) {
          if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
            case "x":
              t[1] = 0;
              break;
            case "y":
              t[0] = 0
          }
        }
      }
      const A = t => t,
        I = {
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          eventOptions: (t, e, i) => r(r({}, i.shared.eventOptions), t),
          preventDefault() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          },
          triggerAllEvents() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          },
          rubberband() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            switch (t) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return s.V.toVector(t)
            }
          },
          from: t => "function" == typeof t ? t : null != t ? s.V.toVector(t) : void 0,
          transform(t, e, i) {
            const s = t || i.shared.transform;
            return this.hasCustomTransform = !!s, s || A
          },
          threshold: t => s.V.toVector(t, 0)
        },
        D = r(r({}, I), {}, {
          axis(t, e, i) {
            let {
              axis: s
            } = i;
            if (this.lockDirection = "lock" === s, !this.lockDirection) return s
          },
          axisThreshold() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          },
          bounds() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ("function" == typeof t) return e => D.bounds(t(e));
            if ("current" in t) return () => t.current;
            if ("function" == typeof HTMLElement && t instanceof HTMLElement) return t;
            const {
              left: e = -1 / 0,
              right: i = 1 / 0,
              top: s = -1 / 0,
              bottom: n = 1 / 0
            } = t;
            return [
              [e, i],
              [s, n]
            ]
          }
        }),
        C = {
          ArrowRight: function(t) {
            return [t * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), 0]
          },
          ArrowLeft: function(t) {
            return [-1 * t * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), 0]
          },
          ArrowUp: function(t) {
            return [0, -1 * t * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)]
          },
          ArrowDown: function(t) {
            return [0, t * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)]
          }
        },
        V = "undefined" != typeof window && window.document && window.document.createElement;

      function P() {
        return V && "ontouchstart" in window
      }
      const K = {
          isBrowser: V,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (t) {
              return !1
            }
          }(),
          touch: P(),
          touchscreen: P() || V && window.navigator.maxTouchPoints > 1,
          pointer: V && "onpointerdown" in window,
          pointerLock: V && "exitPointerLock" in window.document
        },
        j = .5,
        B = 50,
        L = 250,
        H = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        U = r(r({}, D), {}, {
          device(t, e, i) {
            let {
              pointer: {
                touch: s = !1,
                lock: n = !1,
                mouse: o = !1
              } = {}
            } = i;
            return this.pointerLock = n && K.pointerLock, K.touch && s ? "touch" : this.pointerLock ? "mouse" : K.pointer && !o ? "pointer" : K.touch ? "touch" : "mouse"
          },
          preventScrollAxis(t, e, i) {
            let {
              preventScroll: s
            } = i;
            if (this.preventScrollDelay = "number" == typeof s ? s : s || void 0 === s && t ? 250 : void 0, K.touchscreen && !1 !== s) return t || (void 0 !== s ? "y" : void 0)
          },
          pointerCapture(t, e, i) {
            let {
              pointer: {
                capture: s = !0,
                buttons: n = 1,
                keys: o = !0
              } = {}
            } = i;
            return this.pointerButtons = n, this.keys = o, !this.pointerLock && "pointer" === this.device && s
          },
          threshold(t, e, i) {
            let {
              filterTaps: n = !1,
              tapsThreshold: o = 3,
              axis: r
            } = i;
            const a = s.V.toVector(t, n ? o : r ? 1 : 0);
            return this.filterTaps = n, this.tapsThreshold = o, a
          },
          swipe() {
            let {
              velocity: t = j,
              distance: e = B,
              duration: i = L
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              velocity: this.transform(s.V.toVector(t)),
              distance: this.transform(s.V.toVector(e)),
              duration: i
            }
          },
          delay() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            switch (t) {
              case !0:
                return 180;
              case !1:
                return 0;
              default:
                return t
            }
          },
          axisThreshold: t => t ? r(r({}, H), t) : H,
          keyboardDisplacement() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
          }
        });

      function Y(t) {
        const [e, i] = t.overflow, [s, n] = t._delta, [o, r] = t._direction;
        (e < 0 && s > 0 && o < 0 || e > 0 && s < 0 && o > 0) && (t._movement[0] = t._movementBound[0]), (i < 0 && n > 0 && r < 0 || i > 0 && n < 0 && r > 0) && (t._movement[1] = t._movementBound[1])
      }
      const X = r(r({}, I), {}, {
          device(t, e, i) {
            let {
              shared: s,
              pointer: {
                touch: n = !1
              } = {}
            } = i;
            if (s.target && !K.touch && K.gesture) return "gesture";
            if (K.touch && n) return "touch";
            if (K.touchscreen) {
              if (K.pointer) return "pointer";
              if (K.touch) return "touch"
            }
          },
          bounds(t, e, i) {
            let {
              scaleBounds: s = {},
              angleBounds: n = {}
            } = i;
            const o = t => {
                const e = M(k(s, t), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [e.min, e.max]
              },
              r = t => {
                const e = M(k(n, t), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [e.min, e.max]
              };
            return "function" != typeof s && "function" != typeof n ? [o(), r()] : t => [o(t), r(t)]
          },
          threshold(t, e, i) {
            return this.lockDirection = "lock" === i.axis, s.V.toVector(t, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: t => void 0 === t ? "ctrlKey" : t,
          pinchOnWheel() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        R = r(r({}, D), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        z = D,
        W = D,
        G = r(r({}, D), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        q = new Map,
        N = new Map;

      function F(t) {
        q.set(t.key, t.engine), N.set(t.key, t.resolver)
      }
      const J = {
          key: "drag",
          engine: class extends x {
            constructor() {
              super(...arguments), n(this, "ingKey", "dragging")
            }
            reset() {
              super.reset();
              const t = this.state;
              t._pointerId = void 0, t._pointerActive = !1, t._keyboardActive = !1, t._preventScroll = !1, t._delayed = !1, t.swipe = [0, 0], t.tap = !1, t.canceled = !1, t.cancel = this.cancel.bind(this)
            }
            setup() {
              const t = this.state;
              if (t._bounds instanceof HTMLElement) {
                const e = t._bounds.getBoundingClientRect(),
                  i = t.currentTarget.getBoundingClientRect(),
                  s = {
                    left: e.left - i.left + t.offset[0],
                    right: e.right - i.right + t.offset[0],
                    top: e.top - i.top + t.offset[1],
                    bottom: e.bottom - i.bottom + t.offset[1]
                  };
                t._bounds = D.bounds(s)
              }
            }
            cancel() {
              const t = this.state;
              t.canceled || (t.canceled = !0, t._active = !1, setTimeout((() => {
                this.compute(), this.emit()
              }), 0))
            }
            setActive() {
              this.state._active = this.state._pointerActive || this.state._keyboardActive
            }
            clean() {
              this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
            }
            pointerDown(t) {
              const e = this.config,
                i = this.state;
              if (null != t.buttons && (Array.isArray(e.pointerButtons) ? !e.pointerButtons.includes(t.buttons) : -1 !== e.pointerButtons && e.pointerButtons !== t.buttons)) return;
              const s = this.ctrl.setEventIds(t);
              e.pointerCapture && t.target.setPointerCapture(t.pointerId), s && s.size > 1 && i._pointerActive || (this.start(t), this.setupPointer(t), i._pointerId = y(t), i._pointerActive = !0, this.computeValues(w(t)), this.computeInitial(), e.preventScrollAxis && "mouse" !== v(t) ? (i._active = !1, this.setupScrollPrevention(t)) : e.delay > 0 ? (this.setupDelayTrigger(t), e.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t))
            }
            startPointerDrag(t) {
              const e = this.state;
              e._active = !0, e._preventScroll = !0, e._delayed = !1, this.compute(t), this.emit()
            }
            pointerMove(t) {
              const e = this.state,
                i = this.config;
              if (!e._pointerActive) return;
              const n = y(t);
              if (void 0 !== e._pointerId && n !== e._pointerId) return;
              const o = w(t);
              return document.pointerLockElement === t.target ? e._delta = [t.movementX, t.movementY] : (e._delta = s.V.sub(o, e._values), this.computeValues(o)), s.V.addTo(e._movement, e._delta), this.compute(t), e._delayed && e.intentional ? (this.timeoutStore.remove("dragDelay"), e.active = !1, void this.startPointerDrag(t)) : i.preventScrollAxis && !e._preventScroll ? e.axis ? e.axis === i.preventScrollAxis || "xy" === i.preventScrollAxis ? (e._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(t)) : void 0 : void this.emit()
            }
            pointerUp(t) {
              this.ctrl.setEventIds(t);
              try {
                this.config.pointerCapture && t.target.hasPointerCapture(t.pointerId) && t.target.releasePointerCapture(t.pointerId)
              } catch (t) {}
              const e = this.state,
                i = this.config;
              if (!e._active || !e._pointerActive) return;
              const s = y(t);
              if (void 0 !== e._pointerId && s !== e._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(t);
              const [n, o] = e._distance;
              if (e.tap = n <= i.tapsThreshold && o <= i.tapsThreshold, e.tap && i.filterTaps) e._force = !0;
              else {
                const [t, s] = e._delta, [n, o] = e._movement, [r, a] = i.swipe.velocity, [c, h] = i.swipe.distance, l = i.swipe.duration;
                if (e.elapsedTime < l) {
                  const i = Math.abs(t / e.timeDelta),
                    l = Math.abs(s / e.timeDelta);
                  i > r && Math.abs(n) > c && (e.swipe[0] = Math.sign(t)), l > a && Math.abs(o) > h && (e.swipe[1] = Math.sign(s))
                }
              }
              this.emit()
            }
            pointerClick(t) {
              !this.state.tap && t.detail > 0 && (t.preventDefault(), t.stopPropagation())
            }
            setupPointer(t) {
              const e = this.config,
                i = e.device;
              e.pointerLock && t.currentTarget.requestPointerLock(), e.pointerCapture || (this.eventStore.add(this.sharedConfig.window, i, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "cancel", this.pointerUp.bind(this)))
            }
            pointerClean() {
              this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
            }
            preventScroll(t) {
              this.state._preventScroll && t.cancelable && t.preventDefault()
            }
            setupScrollPrevention(t) {
              this.state._preventScroll = !1,
                function(t) {
                  "persist" in t && "function" == typeof t.persist && t.persist()
                }(t);
              const e = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                passive: !1
              });
              this.eventStore.add(this.sharedConfig.window, "touch", "end", e), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", e), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, t)
            }
            setupDelayTrigger(t) {
              this.state._delayed = !0, this.timeoutStore.add("dragDelay", (() => {
                this.state._step = [0, 0], this.startPointerDrag(t)
              }), this.config.delay)
            }
            keyDown(t) {
              const e = C[t.key];
              if (e) {
                const i = this.state,
                  n = t.shiftKey ? 10 : t.altKey ? .1 : 1;
                this.start(t), i._delta = e(this.config.keyboardDisplacement, n), i._keyboardActive = !0, s.V.addTo(i._movement, i._delta), this.compute(t), this.emit()
              }
            }
            keyUp(t) {
              t.key in C && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit())
            }
            bind(t) {
              const e = this.config.device;
              t(e, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(e, "change", this.pointerMove.bind(this)), t(e, "end", this.pointerUp.bind(this)), t(e, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: U
        },
        Q = {
          key: "hover",
          engine: class extends x {
            constructor() {
              super(...arguments), n(this, "ingKey", "hovering")
            }
            enter(t) {
              this.config.mouseOnly && "mouse" !== t.pointerType || (this.start(t), this.computeValues(w(t)), this.compute(t), this.emit())
            }
            leave(t) {
              if (this.config.mouseOnly && "mouse" !== t.pointerType) return;
              const e = this.state;
              if (!e._active) return;
              e._active = !1;
              const i = w(t);
              e._movement = e._delta = s.V.sub(i, e._values), this.computeValues(i), this.compute(t), e.delta = e.movement, this.emit()
            }
            bind(t) {
              t("pointer", "enter", this.enter.bind(this)), t("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: G
        },
        Z = {
          key: "move",
          engine: class extends x {
            constructor() {
              super(...arguments), n(this, "ingKey", "moving")
            }
            move(t) {
              this.config.mouseOnly && "mouse" !== t.pointerType || (this.state._active ? this.moveChange(t) : this.moveStart(t), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(t) {
              this.start(t), this.computeValues(w(t)), this.compute(t), this.computeInitial(), this.emit()
            }
            moveChange(t) {
              if (!this.state._active) return;
              const e = w(t),
                i = this.state;
              i._delta = s.V.sub(e, i._values), s.V.addTo(i._movement, i._delta), this.computeValues(e), this.compute(t), this.emit()
            }
            moveEnd(t) {
              this.state._active && (this.state._active = !1, this.compute(t), this.emit())
            }
            bind(t) {
              t("pointer", "change", this.move.bind(this)), t("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: R
        },
        $ = {
          key: "pinch",
          engine: class extends O {
            constructor() {
              super(...arguments), n(this, "ingKey", "pinching"), n(this, "aliasKey", "da")
            }
            init() {
              this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = new Map
            }
            reset() {
              super.reset();
              const t = this.state;
              t._touchIds = [], t.canceled = !1, t.cancel = this.cancel.bind(this), t.turns = 0
            }
            computeOffset() {
              const {
                type: t,
                movement: e,
                lastOffset: i
              } = this.state;
              this.state.offset = "wheel" === t ? s.V.add(e, i) : [(1 + e[0]) * i[0], e[1] + i[1]]
            }
            computeMovement() {
              const {
                offset: t,
                lastOffset: e
              } = this.state;
              this.state.movement = [t[0] / e[0], t[1] - e[1]]
            }
            axisIntent() {
              const t = this.state,
                [e, i] = t._movement;
              if (!t.axis) {
                const s = 30 * Math.abs(e) - Math.abs(i);
                s < 0 ? t.axis = "angle" : s > 0 && (t.axis = "scale")
              }
            }
            restrictToAxis(t) {
              this.config.lockDirection && ("scale" === this.state.axis ? t[1] = 0 : "angle" === this.state.axis && (t[0] = 0))
            }
            cancel() {
              const t = this.state;
              t.canceled || setTimeout((() => {
                t.canceled = !0, t._active = !1, this.compute(), this.emit()
              }), 0)
            }
            touchStart(t) {
              this.ctrl.setEventIds(t);
              const e = this.state,
                i = this.ctrl.touchIds;
              if (e._active && e._touchIds.every((t => i.has(t)))) return;
              if (i.size < 2) return;
              this.start(t), e._touchIds = Array.from(i).slice(0, 2);
              const s = b(t, e._touchIds);
              s && this.pinchStart(t, s)
            }
            pointerStart(t) {
              if (null != t.buttons && t.buttons % 2 != 1) return;
              this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
              const e = this.state,
                i = e._pointerEvents,
                s = this.ctrl.pointerIds;
              if (e._active && Array.from(i.keys()).every((t => s.has(t)))) return;
              if (i.size < 2 && i.set(t.pointerId, t), e._pointerEvents.size < 2) return;
              this.start(t);
              const n = g(...Array.from(i.values()));
              n && this.pinchStart(t, n)
            }
            pinchStart(t, e) {
              this.state.origin = e.origin, this.computeValues([e.distance, e.angle]), this.computeInitial(), this.compute(t), this.emit()
            }
            touchMove(t) {
              if (!this.state._active) return;
              const e = b(t, this.state._touchIds);
              e && this.pinchMove(t, e)
            }
            pointerMove(t) {
              const e = this.state._pointerEvents;
              if (e.has(t.pointerId) && e.set(t.pointerId, t), !this.state._active) return;
              const i = g(...Array.from(e.values()));
              i && this.pinchMove(t, i)
            }
            pinchMove(t, e) {
              const i = this.state,
                s = i._values[1],
                n = e.angle - s;
              let o = 0;
              Math.abs(n) > 270 && (o += Math.sign(n)), this.computeValues([e.distance, e.angle - 360 * o]), i.origin = e.origin, i.turns = o, i._movement = [i._values[0] / i._initial[0] - 1, i._values[1] - i._initial[1]], this.compute(t), this.emit()
            }
            touchEnd(t) {
              this.ctrl.setEventIds(t), this.state._active && this.state._touchIds.some((t => !this.ctrl.touchIds.has(t))) && (this.state._active = !1, this.compute(t), this.emit())
            }
            pointerEnd(t) {
              const e = this.state;
              this.ctrl.setEventIds(t);
              try {
                t.target.releasePointerCapture(t.pointerId)
              } catch (t) {}
              e._pointerEvents.has(t.pointerId) && e._pointerEvents.delete(t.pointerId), e._active && e._pointerEvents.size < 2 && (e._active = !1, this.compute(t), this.emit())
            }
            gestureStart(t) {
              t.cancelable && t.preventDefault();
              const e = this.state;
              e._active || (this.start(t), this.computeValues([t.scale, t.rotation]), e.origin = [t.clientX, t.clientY], this.compute(t), this.emit())
            }
            gestureMove(t) {
              if (t.cancelable && t.preventDefault(), !this.state._active) return;
              const e = this.state;
              this.computeValues([t.scale, t.rotation]), e.origin = [t.clientX, t.clientY];
              const i = e._movement;
              e._movement = [t.scale - 1, t.rotation], e._delta = s.V.sub(e._movement, i), this.compute(t), this.emit()
            }
            gestureEnd(t) {
              this.state._active && (this.state._active = !1, this.compute(t), this.emit())
            }
            wheel(t) {
              const e = this.config.modifierKey;
              e && !(Array.isArray(e) ? e.find((e => t[e])) : t[e]) || (this.state._active ? this.wheelChange(t) : this.wheelStart(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)))
            }
            wheelStart(t) {
              this.start(t), this.wheelChange(t)
            }
            wheelChange(t) {
              "uv" in t || t.cancelable && t.preventDefault();
              const e = this.state;
              e._delta = [-S(t)[1] / 100 * e.offset[0], 0], s.V.addTo(e._movement, e._delta), Y(e), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(t) {
              const e = this.config.device;
              e && (t(e, "start", this[e + "Start"].bind(this)), t(e, "change", this[e + "Move"].bind(this)), t(e, "end", this[e + "End"].bind(this)), t(e, "cancel", this[e + "End"].bind(this)), t("lostPointerCapture", "", this[e + "End"].bind(this))), this.config.pinchOnWheel && t("wheel", "", this.wheel.bind(this), {
                passive: !1
              })
            }
          },
          resolver: X
        },
        tt = {
          key: "scroll",
          engine: class extends x {
            constructor() {
              super(...arguments), n(this, "ingKey", "scrolling")
            }
            scroll(t) {
              this.state._active || this.start(t), this.scrollChange(t), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
            }
            scrollChange(t) {
              t.cancelable && t.preventDefault();
              const e = this.state,
                i = function(t) {
                  var e, i;
                  const {
                    scrollX: s,
                    scrollY: n,
                    scrollLeft: o,
                    scrollTop: r
                  } = t.currentTarget;
                  return [null !== (e = null != s ? s : o) && void 0 !== e ? e : 0, null !== (i = null != n ? n : r) && void 0 !== i ? i : 0]
                }(t);
              e._delta = s.V.sub(i, e._values), s.V.addTo(e._movement, e._delta), this.computeValues(i), this.compute(t), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(t) {
              t("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: z
        },
        et = {
          key: "wheel",
          engine: class extends x {
            constructor() {
              super(...arguments), n(this, "ingKey", "wheeling")
            }
            wheel(t) {
              this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(t) {
              const e = this.state;
              e._delta = S(t), s.V.addTo(e._movement, e._delta), Y(e), this.compute(t), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(t) {
              t("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: W
        }
    },
    15780: (t, e, i) => {
      "use strict";
      i.d(e, {
        V: () => s,
        c: () => r,
        r: () => o
      });
      const s = {
        toVector: (t, e) => (void 0 === t && (t = e), Array.isArray(t) ? t : [t, t]),
        add: (t, e) => [t[0] + e[0], t[1] + e[1]],
        sub: (t, e) => [t[0] - e[0], t[1] - e[1]],
        addTo(t, e) {
          t[0] += e[0], t[1] += e[1]
        },
        subTo(t, e) {
          t[0] -= e[0], t[1] -= e[1]
        }
      };

      function n(t, e, i) {
        return 0 === e || Math.abs(e) === 1 / 0 ? Math.pow(t, 5 * i) : t * e * i / (e + i * t)
      }

      function o(t, e, i) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
        return 0 === s ? function(t, e, i) {
          return Math.max(e, Math.min(t, i))
        }(t, e, i) : t < e ? -n(e - t, i - e, s) + e : t > i ? +n(t - i, i - e, s) + i : t
      }

      function r(t, e, i) {
        let [s, n] = e, [r, a] = i;
        const [
          [c, h],
          [l, u]
        ] = t;
        return [o(s, c, h, r), o(n, l, u, a)]
      }
    },
    3328: (t, e, i) => {
      "use strict";
      i.d(e, {
        M: () => h,
        q: () => f
      });
      var s = i(77528);
      const n = {
          target(t) {
            if (t) return () => "current" in t ? t.current : t
          },
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          window() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.S.isBrowser ? window : void 0
          },
          eventOptions() {
            let {
              passive: t = !0,
              capture: e = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              passive: t,
              capture: e
            }
          },
          transform: t => t
        },
        o = ["target", "eventOptions", "window", "enabled", "transform"];

      function r() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 ? arguments[1] : void 0;
        const i = {};
        for (const [s, n] of Object.entries(e)) switch (typeof n) {
          case "function":
            i[s] = n.call(i, t[s], s, t);
            break;
          case "object":
            i[s] = r(t[s], n);
            break;
          case "boolean":
            n && (i[s] = t[s])
        }
        return i
      }
      class a {
        constructor(t, e) {
          (0, s.a)(this, "_listeners", new Set), this._ctrl = t, this._gestureKey = e
        }
        add(t, e, i, n, o) {
          const r = this._listeners,
            a = (0, s.t)(e, i),
            c = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {},
            h = (0, s._)((0, s._)({}, c), o);
          t.addEventListener(a, n, h);
          const l = () => {
            t.removeEventListener(a, n, h), r.delete(l)
          };
          return r.add(l), l
        }
        clean() {
          this._listeners.forEach((t => t())), this._listeners.clear()
        }
      }
      class c {
        constructor() {
          (0, s.a)(this, "_timeouts", new Map)
        }
        add(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 140;
          this.remove(t);
          for (var s = arguments.length, n = new Array(s > 3 ? s - 3 : 0), o = 3; o < s; o++) n[o - 3] = arguments[o];
          this._timeouts.set(t, window.setTimeout(e, i, ...n))
        }
        remove(t) {
          const e = this._timeouts.get(t);
          e && window.clearTimeout(e)
        }
        clean() {
          this._timeouts.forEach((t => {
            window.clearTimeout(t)
          })), this._timeouts.clear()
        }
      }
      class h {
        constructor(t) {
          var e, i;
          (0, s.a)(this, "gestures", new Set), (0, s.a)(this, "_targetEventStore", new a(this)), (0, s.a)(this, "gestureEventStores", {}), (0, s.a)(this, "gestureTimeoutStores", {}), (0, s.a)(this, "handlers", {}), (0, s.a)(this, "config", {}), (0, s.a)(this, "pointerIds", new Set), (0, s.a)(this, "touchIds", new Set), (0, s.a)(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), e = this, (i = t).drag && l(e, "drag"), i.wheel && l(e, "wheel"), i.scroll && l(e, "scroll"), i.move && l(e, "move"), i.pinch && l(e, "pinch"), i.hover && l(e, "hover")
        }
        setEventIds(t) {
          return (0, s.i)(t) ? (this.touchIds = new Set((0, s.b)(t)), this.touchIds) : "pointerId" in t ? ("pointerup" === t.type || "pointercancel" === t.type ? this.pointerIds.delete(t.pointerId) : "pointerdown" === t.type && this.pointerIds.add(t.pointerId), this.pointerIds) : void 0
        }
        applyHandlers(t, e) {
          this.handlers = t, this.nativeHandlers = e
        }
        applyConfig(t, e) {
          this.config = function(t, e) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const a = t,
              {
                target: c,
                eventOptions: h,
                window: l,
                enabled: u,
                transform: d
              } = a,
              p = function(t, e) {
                if (null == t) return {};
                var i, s, n = function(t, e) {
                  if (null == t) return {};
                  var i, s, n = {},
                    o = Object.keys(t);
                  for (s = 0; s < o.length; s++) i = o[s], e.indexOf(i) >= 0 || (n[i] = t[i]);
                  return n
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(t);
                  for (s = 0; s < o.length; s++) i = o[s], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i])
                }
                return n
              }(a, o);
            if (i.shared = r({
                target: c,
                eventOptions: h,
                window: l,
                enabled: u,
                transform: d
              }, n), e) {
              const t = s.C.get(e);
              i[e] = r((0, s._)({
                shared: i.shared
              }, p), t)
            } else
              for (const t in p) {
                const e = s.C.get(t);
                e && (i[t] = r((0, s._)({
                  shared: i.shared
                }, p[t]), e))
              }
            return i
          }(t, e, this.config)
        }
        clean() {
          this._targetEventStore.clean();
          for (const t of this.gestures) this.gestureEventStores[t].clean(), this.gestureTimeoutStores[t].clean()
        }
        effect() {
          return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
        }
        bind() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
          const n = this.config.shared,
            o = {};
          let r;
          if (!n.target || (r = n.target(), r)) {
            if (n.enabled) {
              for (const t of this.gestures) {
                const i = this.config[t],
                  n = u(o, i.eventOptions, !!r);
                i.enabled && new(s.E.get(t))(this, e, t).bind(n)
              }
              const t = u(o, n.eventOptions, !!r);
              for (const i in this.nativeHandlers) t(i, "", (t => this.nativeHandlers[i]((0, s._)((0, s._)({}, this.state.shared), {}, {
                event: t,
                args: e
              }))), void 0, !0)
            }
            for (const t in o) o[t] = (0, s.c)(...o[t]);
            if (!r) return o;
            for (const t in o) {
              const {
                device: e,
                capture: i,
                passive: n
              } = (0, s.p)(t);
              this._targetEventStore.add(r, e, "", o[t], {
                capture: i,
                passive: n
              })
            }
          }
        }
      }

      function l(t, e) {
        t.gestures.add(e), t.gestureEventStores[e] = new a(t, e), t.gestureTimeoutStores[e] = new c
      }
      const u = (t, e, i) => function(n, o, r) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            c = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          var h, l;
          const u = null !== (h = a.capture) && void 0 !== h ? h : e.capture,
            d = null !== (l = a.passive) && void 0 !== l ? l : e.passive;
          let p = c ? n : (0, s.d)(n, o, u);
          i && d && (p += "Passive"), t[p] = t[p] || [], t[p].push(r)
        },
        d = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function p(t, e, i, n, o, r) {
        if (!t.has(i)) return;
        if (!s.E.has(n)) return;
        const a = i + "Start",
          c = i + "End";
        o[n] = t => {
          let s;
          return t.first && a in e && e[a](t), i in e && (s = e[i](t)), t.last && c in e && e[c](t), s
        }, r[n] = r[n] || {}
      }

      function f(t, e) {
        const [i, s, n] = function(t) {
          const e = {},
            i = {},
            s = new Set;
          for (let n in t) d.test(n) ? (s.add(RegExp.lastMatch), i[n] = t[n]) : e[n] = t[n];
          return [i, e, s]
        }(t), o = {};
        return p(n, i, "onDrag", "drag", o, e), p(n, i, "onWheel", "wheel", o, e), p(n, i, "onScroll", "scroll", o, e), p(n, i, "onPinch", "pinch", o, e), p(n, i, "onMove", "move", o, e), p(n, i, "onHover", "hover", o, e), {
          handlers: o,
          config: e,
          nativeHandlers: s
        }
      }
    },
    33288: () => {},
    27304: (t, e, i) => {
      "use strict";
      i.d(e, {
        s: () => s.r
      });
      var s = i(15780)
    }
  }
]);
//# sourceMappingURL=1d6d4d2ad17382da01e72e399fc2492d.js.map