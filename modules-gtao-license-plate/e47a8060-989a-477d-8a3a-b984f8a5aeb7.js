try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "e47a8060-989a-477d-8a3a-b984f8a5aeb7", t._sentryDebugIdIdentifier = "sentry-dbid-e47a8060-989a-477d-8a3a-b984f8a5aeb7")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [7729], {
    14850: (t, e, s) => {
      "use strict";
      s.d(e, {
        C: () => W,
        E: () => z,
        S: () => K,
        _: () => r,
        a: () => n,
        b: () => _,
        c: () => T,
        d: () => u,
        e: () => F,
        f: () => $,
        h: () => N,
        i: () => f,
        m: () => Q,
        p: () => d,
        r: () => G,
        s: () => q,
        t: () => p,
        w: () => J
      });
      var i = s(84242);

      function n(t, e, s) {
        return (e = function(t) {
          var e = function(t) {
            if ("object" != typeof t || null === t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var s = e.call(t, "string");
              if ("object" != typeof s) return s;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
          }(t);
          return "symbol" == typeof e ? e : String(e)
        }(e)) in t ? Object.defineProperty(t, e, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = s, t
      }

      function o(t, e) {
        var s = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e && (i = i.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), s.push.apply(s, i)
        }
        return s
      }

      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var s = null != arguments[e] ? arguments[e] : {};
          e % 2 ? o(Object(s), !0).forEach((function(e) {
            n(t, e, s[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : o(Object(s)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
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

      function u(t, e = "", s = !1) {
        const i = a[t],
          n = i && i[e] || e;
        return "on" + c(t) + c(n) + (function(t = !1, e) {
          return t && !h.includes(e)
        }(s, n) ? "Capture" : "")
      }
      const l = ["gotpointercapture", "lostpointercapture"];

      function d(t) {
        let e = t.substring(2).toLowerCase();
        const s = !!~e.indexOf("passive");
        s && (e = e.replace("passive", ""));
        const i = l.includes(e) ? "capturecapture" : "capture",
          n = !!~e.indexOf(i);
        return n && (e = e.replace("capture", "")), {
          device: e,
          capture: n,
          passive: s
        }
      }

      function p(t, e = "") {
        const s = a[t];
        return t + (s && s[e] || e)
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
          const s = e.clientX - t.clientX,
            i = e.clientY - t.clientY,
            n = (e.clientX + t.clientX) / 2,
            o = (e.clientY + t.clientY) / 2,
            r = Math.hypot(s, i);
          return {
            angle: -180 * Math.atan2(s, i) / Math.PI,
            distance: r,
            origin: [n, o]
          }
        } catch (t) {}
        return null
      }

      function _(t) {
        return function(t) {
          return Array.from(t.touches).filter((e => {
            var s, i;
            return e.target === t.currentTarget || (null === (s = t.currentTarget) || void 0 === s || null === (i = s.contains) || void 0 === i ? void 0 : i.call(s, e.target))
          }))
        }(t).map((t => t.identifier))
      }

      function b(t, e) {
        const [s, i] = Array.from(t.touches).filter((t => e.includes(t.identifier)));
        return g(s, i)
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
          deltaY: s,
          deltaMode: i
        } = t;
        return 1 === i ? (e *= 40, s *= 40) : 2 === i && (e *= 800, s *= 800), [e, s]
      }

      function k(t, ...e) {
        return "function" == typeof t ? t(...e) : t
      }

      function E() {}

      function T(...t) {
        return 0 === t.length ? E : 1 === t.length ? t[0] : function() {
          let e;
          for (const s of t) e = s.apply(this, arguments) || e;
          return e
        }
      }

      function x(t, e) {
        return Object.assign({}, e, t || {})
      }
      class M {
        constructor(t, e, s) {
          this.ctrl = t, this.args = e, this.key = s, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
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
            ingKey: s,
            args: i
          } = this;
          e[s] = t._active = t.active = t._blocked = t._force = !1, t._step = [!1, !1], t.intentional = !1, t._movement = [0, 0], t._distance = [0, 0], t._direction = [0, 0], t._delta = [0, 0], t._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ], t.args = i, t.axis = void 0, t.memo = void 0, t.elapsedTime = t.timeDelta = 0, t.direction = [0, 0], t.distance = [0, 0], t.overflow = [0, 0], t._movementBound = [!1, !1], t.velocity = [0, 0], t.movement = [0, 0], t.delta = [0, 0], t.timeStamp = 0
        }
        start(t) {
          const e = this.state,
            s = this.config;
          e._active || (this.reset(), this.computeInitial(), e._active = !0, e.target = t.target, e.currentTarget = t.currentTarget, e.lastOffset = s.from ? k(s.from, e) : e.offset, e.offset = e.lastOffset, e.startTime = e.timeStamp = t.timeStamp)
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
            config: s,
            shared: n
          } = this;
          e.args = this.args;
          let o = 0;
          if (t && (e.event = t, s.preventDefault && t.cancelable && e.event.preventDefault(), e.type = t.type, n.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, n.locked = !!document.pointerLockElement, Object.assign(n, function(t) {
              const e = {};
              if ("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t) {
                const {
                  shiftKey: s,
                  altKey: i,
                  metaKey: n,
                  ctrlKey: o
                } = t;
                Object.assign(e, {
                  shiftKey: s,
                  altKey: i,
                  metaKey: n,
                  ctrlKey: o
                })
              }
              return e
            }(t)), n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0, o = t.timeStamp - e.timeStamp, e.timeStamp = t.timeStamp, e.elapsedTime = e.timeStamp - e.startTime), e._active) {
            const t = e._delta.map(Math.abs);
            i.V.addTo(e._distance, t)
          }
          this.axisIntent && this.axisIntent(t);
          const [r, a] = e._movement, [c, h] = s.threshold, {
            _step: u,
            values: l
          } = e;
          if (s.hasCustomTransform ? (!1 === u[0] && (u[0] = Math.abs(r) >= c && l[0]), !1 === u[1] && (u[1] = Math.abs(a) >= h && l[1])) : (!1 === u[0] && (u[0] = Math.abs(r) >= c && Math.sign(r) * c), !1 === u[1] && (u[1] = Math.abs(a) >= h && Math.sign(a) * h)), e.intentional = !1 !== u[0] || !1 !== u[1], !e.intentional) return;
          const d = [0, 0];
          if (s.hasCustomTransform) {
            const [t, e] = l;
            d[0] = !1 !== u[0] ? t - u[0] : 0, d[1] = !1 !== u[1] ? e - u[1] : 0
          } else d[0] = !1 !== u[0] ? r - u[0] : 0, d[1] = !1 !== u[1] ? a - u[1] : 0;
          this.restrictToAxis && !e._blocked && this.restrictToAxis(d);
          const p = e.offset,
            f = e._active && !e._blocked || e.active;
          f && (e.first = e._active && !e.active, e.last = !e._active && e.active, e.active = n[this.ingKey] = e._active, t && (e.first && ("bounds" in s && (e._bounds = k(s.bounds, e)), this.setup && this.setup()), e.movement = d, this.computeOffset()));
          const [v, m] = e.offset, [
            [g, _],
            [b, y]
          ] = e._bounds;
          e.overflow = [v < g ? -1 : v > _ ? 1 : 0, m < b ? -1 : m > y ? 1 : 0], e._movementBound[0] = !!e.overflow[0] && (!1 === e._movementBound[0] ? e._movement[0] : e._movementBound[0]), e._movementBound[1] = !!e.overflow[1] && (!1 === e._movementBound[1] ? e._movement[1] : e._movementBound[1]);
          const w = e._active && s.rubberband || [0, 0];
          if (e.offset = (0, i.c)(e._bounds, e.offset, w), e.delta = i.V.sub(e.offset, p), this.computeMovement(), f && (!e.last || o > 32)) {
            e.delta = i.V.sub(e.offset, p);
            const t = e.delta.map(Math.abs);
            i.V.addTo(e.distance, t), e.direction = e.delta.map(Math.sign), e._direction = e._delta.map(Math.sign), !e.first && o > 0 && (e.velocity = [t[0] / o, t[1] / o], e.timeDelta = o)
          }
        }
        emit() {
          const t = this.state,
            e = this.shared,
            s = this.config;
          if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !s.triggerAllEvents) return;
          const i = this.handler(r(r(r({}, e), t), {}, {
            [this.aliasKey]: t.values
          }));
          void 0 !== i && (t.memo = i)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class O extends M {
        constructor(...t) {
          super(...t), n(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = i.V.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = i.V.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(t) {
          const e = this.state,
            s = this.config;
          if (!e.axis && t) {
            const i = "object" == typeof s.axisThreshold ? s.axisThreshold[v(t)] : s.axisThreshold;
            e.axis = function([t, e], s) {
              const i = Math.abs(t),
                n = Math.abs(e);
              return i > n && i > s ? "x" : n > i && n > s ? "y" : void 0
            }(e._movement, i)
          }
          e._blocked = (s.lockDirection || !!s.axis) && !e.axis || !!s.axis && s.axis !== e.axis
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
      const I = t => t,
        A = {
          enabled: (t = !0) => t,
          eventOptions: (t, e, s) => r(r({}, s.shared.eventOptions), t),
          preventDefault: (t = !1) => t,
          triggerAllEvents: (t = !1) => t,
          rubberband(t = 0) {
            switch (t) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return i.V.toVector(t)
            }
          },
          from: t => "function" == typeof t ? t : null != t ? i.V.toVector(t) : void 0,
          transform(t, e, s) {
            const i = t || s.shared.transform;
            return this.hasCustomTransform = !!i, i || I
          },
          threshold: t => i.V.toVector(t, 0)
        },
        D = r(r({}, A), {}, {
          axis(t, e, {
            axis: s
          }) {
            if (this.lockDirection = "lock" === s, !this.lockDirection) return s
          },
          axisThreshold: (t = 0) => t,
          bounds(t = {}) {
            if ("function" == typeof t) return e => D.bounds(t(e));
            if ("current" in t) return () => t.current;
            if ("function" == typeof HTMLElement && t instanceof HTMLElement) return t;
            const {
              left: e = -1 / 0,
              right: s = 1 / 0,
              top: i = -1 / 0,
              bottom: n = 1 / 0
            } = t;
            return [
              [e, s],
              [i, n]
            ]
          }
        }),
        C = {
          ArrowRight: (t, e = 1) => [t * e, 0],
          ArrowLeft: (t, e = 1) => [-1 * t * e, 0],
          ArrowUp: (t, e = 1) => [0, -1 * t * e],
          ArrowDown: (t, e = 1) => [0, t * e]
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
        j = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        B = r(r({}, D), {}, {
          device(t, e, {
            pointer: {
              touch: s = !1,
              lock: i = !1,
              mouse: n = !1
            } = {}
          }) {
            return this.pointerLock = i && K.pointerLock, K.touch && s ? "touch" : this.pointerLock ? "mouse" : K.pointer && !n ? "pointer" : K.touch ? "touch" : "mouse"
          },
          preventScrollAxis(t, e, {
            preventScroll: s
          }) {
            if (this.preventScrollDelay = "number" == typeof s ? s : s || void 0 === s && t ? 250 : void 0, K.touchscreen && !1 !== s) return t || (void 0 !== s ? "y" : void 0)
          },
          pointerCapture(t, e, {
            pointer: {
              capture: s = !0,
              buttons: i = 1,
              keys: n = !0
            } = {}
          }) {
            return this.pointerButtons = i, this.keys = n, !this.pointerLock && "pointer" === this.device && s
          },
          threshold(t, e, {
            filterTaps: s = !1,
            tapsThreshold: n = 3,
            axis: o
          }) {
            const r = i.V.toVector(t, s ? n : o ? 1 : 0);
            return this.filterTaps = s, this.tapsThreshold = n, r
          },
          swipe({
            velocity: t = .5,
            distance: e = 50,
            duration: s = 250
          } = {}) {
            return {
              velocity: this.transform(i.V.toVector(t)),
              distance: this.transform(i.V.toVector(e)),
              duration: s
            }
          },
          delay(t = 0) {
            switch (t) {
              case !0:
                return 180;
              case !1:
                return 0;
              default:
                return t
            }
          },
          axisThreshold: t => t ? r(r({}, j), t) : j,
          keyboardDisplacement: (t = 10) => t
        });

      function L(t) {
        const [e, s] = t.overflow, [i, n] = t._delta, [o, r] = t._direction;
        (e < 0 && i > 0 && o < 0 || e > 0 && i < 0 && o > 0) && (t._movement[0] = t._movementBound[0]), (s < 0 && n > 0 && r < 0 || s > 0 && n < 0 && r > 0) && (t._movement[1] = t._movementBound[1])
      }
      const H = r(r({}, A), {}, {
          device(t, e, {
            shared: s,
            pointer: {
              touch: i = !1
            } = {}
          }) {
            if (s.target && !K.touch && K.gesture) return "gesture";
            if (K.touch && i) return "touch";
            if (K.touchscreen) {
              if (K.pointer) return "pointer";
              if (K.touch) return "touch"
            }
          },
          bounds(t, e, {
            scaleBounds: s = {},
            angleBounds: i = {}
          }) {
            const n = t => {
                const e = x(k(s, t), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [e.min, e.max]
              },
              o = t => {
                const e = x(k(i, t), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [e.min, e.max]
              };
            return "function" != typeof s && "function" != typeof i ? [n(), o()] : t => [n(t), o(t)]
          },
          threshold(t, e, s) {
            return this.lockDirection = "lock" === s.axis, i.V.toVector(t, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: t => void 0 === t ? "ctrlKey" : t,
          pinchOnWheel: (t = !0) => t
        }),
        U = r(r({}, D), {}, {
          mouseOnly: (t = !0) => t
        }),
        Y = D,
        X = D,
        R = r(r({}, D), {}, {
          mouseOnly: (t = !0) => t
        }),
        z = new Map,
        W = new Map;

      function G(t) {
        z.set(t.key, t.engine), W.set(t.key, t.resolver)
      }
      const F = {
          key: "drag",
          engine: class extends O {
            constructor(...t) {
              super(...t), n(this, "ingKey", "dragging")
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
                  s = t.currentTarget.getBoundingClientRect(),
                  i = {
                    left: e.left - s.left + t.offset[0],
                    right: e.right - s.right + t.offset[0],
                    top: e.top - s.top + t.offset[1],
                    bottom: e.bottom - s.bottom + t.offset[1]
                  };
                t._bounds = D.bounds(i)
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
                s = this.state;
              if (null != t.buttons && (Array.isArray(e.pointerButtons) ? !e.pointerButtons.includes(t.buttons) : -1 !== e.pointerButtons && e.pointerButtons !== t.buttons)) return;
              const i = this.ctrl.setEventIds(t);
              e.pointerCapture && t.target.setPointerCapture(t.pointerId), i && i.size > 1 && s._pointerActive || (this.start(t), this.setupPointer(t), s._pointerId = y(t), s._pointerActive = !0, this.computeValues(w(t)), this.computeInitial(), e.preventScrollAxis && "mouse" !== v(t) ? (s._active = !1, this.setupScrollPrevention(t)) : e.delay > 0 ? (this.setupDelayTrigger(t), e.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t))
            }
            startPointerDrag(t) {
              const e = this.state;
              e._active = !0, e._preventScroll = !0, e._delayed = !1, this.compute(t), this.emit()
            }
            pointerMove(t) {
              const e = this.state,
                s = this.config;
              if (!e._pointerActive) return;
              const n = y(t);
              if (void 0 !== e._pointerId && n !== e._pointerId) return;
              const o = w(t);
              return document.pointerLockElement === t.target ? e._delta = [t.movementX, t.movementY] : (e._delta = i.V.sub(o, e._values), this.computeValues(o)), i.V.addTo(e._movement, e._delta), this.compute(t), e._delayed && e.intentional ? (this.timeoutStore.remove("dragDelay"), e.active = !1, void this.startPointerDrag(t)) : s.preventScrollAxis && !e._preventScroll ? e.axis ? e.axis === s.preventScrollAxis || "xy" === s.preventScrollAxis ? (e._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(t)) : void 0 : void this.emit()
            }
            pointerUp(t) {
              this.ctrl.setEventIds(t);
              try {
                this.config.pointerCapture && t.target.hasPointerCapture(t.pointerId) && t.target.releasePointerCapture(t.pointerId)
              } catch (t) {}
              const e = this.state,
                s = this.config;
              if (!e._active || !e._pointerActive) return;
              const i = y(t);
              if (void 0 !== e._pointerId && i !== e._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(t);
              const [n, o] = e._distance;
              if (e.tap = n <= s.tapsThreshold && o <= s.tapsThreshold, e.tap && s.filterTaps) e._force = !0;
              else {
                const [t, i] = e._delta, [n, o] = e._movement, [r, a] = s.swipe.velocity, [c, h] = s.swipe.distance, u = s.swipe.duration;
                if (e.elapsedTime < u) {
                  const s = Math.abs(t / e.timeDelta),
                    u = Math.abs(i / e.timeDelta);
                  s > r && Math.abs(n) > c && (e.swipe[0] = Math.sign(t)), u > a && Math.abs(o) > h && (e.swipe[1] = Math.sign(i))
                }
              }
              this.emit()
            }
            pointerClick(t) {
              !this.state.tap && t.detail > 0 && (t.preventDefault(), t.stopPropagation())
            }
            setupPointer(t) {
              const e = this.config,
                s = e.device;
              e.pointerLock && t.currentTarget.requestPointerLock(), e.pointerCapture || (this.eventStore.add(this.sharedConfig.window, s, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, s, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, s, "cancel", this.pointerUp.bind(this)))
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
                const s = this.state,
                  n = t.shiftKey ? 10 : t.altKey ? .1 : 1;
                this.start(t), s._delta = e(this.config.keyboardDisplacement, n), s._keyboardActive = !0, i.V.addTo(s._movement, s._delta), this.compute(t), this.emit()
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
          resolver: B
        },
        N = {
          key: "hover",
          engine: class extends O {
            constructor(...t) {
              super(...t), n(this, "ingKey", "hovering")
            }
            enter(t) {
              this.config.mouseOnly && "mouse" !== t.pointerType || (this.start(t), this.computeValues(w(t)), this.compute(t), this.emit())
            }
            leave(t) {
              if (this.config.mouseOnly && "mouse" !== t.pointerType) return;
              const e = this.state;
              if (!e._active) return;
              e._active = !1;
              const s = w(t);
              e._movement = e._delta = i.V.sub(s, e._values), this.computeValues(s), this.compute(t), e.delta = e.movement, this.emit()
            }
            bind(t) {
              t("pointer", "enter", this.enter.bind(this)), t("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: R
        },
        Q = {
          key: "move",
          engine: class extends O {
            constructor(...t) {
              super(...t), n(this, "ingKey", "moving")
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
                s = this.state;
              s._delta = i.V.sub(e, s._values), i.V.addTo(s._movement, s._delta), this.computeValues(e), this.compute(t), this.emit()
            }
            moveEnd(t) {
              this.state._active && (this.state._active = !1, this.compute(t), this.emit())
            }
            bind(t) {
              t("pointer", "change", this.move.bind(this)), t("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: U
        },
        $ = {
          key: "pinch",
          engine: class extends M {
            constructor(...t) {
              super(...t), n(this, "ingKey", "pinching"), n(this, "aliasKey", "da")
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
                lastOffset: s
              } = this.state;
              this.state.offset = "wheel" === t ? i.V.add(e, s) : [(1 + e[0]) * s[0], e[1] + s[1]]
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
                [e, s] = t._movement;
              if (!t.axis) {
                const i = 30 * Math.abs(e) - Math.abs(s);
                i < 0 ? t.axis = "angle" : i > 0 && (t.axis = "scale")
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
                s = this.ctrl.touchIds;
              if (e._active && e._touchIds.every((t => s.has(t)))) return;
              if (s.size < 2) return;
              this.start(t), e._touchIds = Array.from(s).slice(0, 2);
              const i = b(t, e._touchIds);
              i && this.pinchStart(t, i)
            }
            pointerStart(t) {
              if (null != t.buttons && t.buttons % 2 != 1) return;
              this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
              const e = this.state,
                s = e._pointerEvents,
                i = this.ctrl.pointerIds;
              if (e._active && Array.from(s.keys()).every((t => i.has(t)))) return;
              if (s.size < 2 && s.set(t.pointerId, t), e._pointerEvents.size < 2) return;
              this.start(t);
              const n = g(...Array.from(s.values()));
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
              const s = g(...Array.from(e.values()));
              s && this.pinchMove(t, s)
            }
            pinchMove(t, e) {
              const s = this.state,
                i = s._values[1],
                n = e.angle - i;
              let o = 0;
              Math.abs(n) > 270 && (o += Math.sign(n)), this.computeValues([e.distance, e.angle - 360 * o]), s.origin = e.origin, s.turns = o, s._movement = [s._values[0] / s._initial[0] - 1, s._values[1] - s._initial[1]], this.compute(t), this.emit()
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
              const s = e._movement;
              e._movement = [t.scale - 1, t.rotation], e._delta = i.V.sub(e._movement, s), this.compute(t), this.emit()
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
              e._delta = [-S(t)[1] / 100 * e.offset[0], 0], i.V.addTo(e._movement, e._delta), L(e), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit()
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
          resolver: H
        },
        q = {
          key: "scroll",
          engine: class extends O {
            constructor(...t) {
              super(...t), n(this, "ingKey", "scrolling")
            }
            scroll(t) {
              this.state._active || this.start(t), this.scrollChange(t), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
            }
            scrollChange(t) {
              t.cancelable && t.preventDefault();
              const e = this.state,
                s = function(t) {
                  var e, s;
                  const {
                    scrollX: i,
                    scrollY: n,
                    scrollLeft: o,
                    scrollTop: r
                  } = t.currentTarget;
                  return [null !== (e = null != i ? i : o) && void 0 !== e ? e : 0, null !== (s = null != n ? n : r) && void 0 !== s ? s : 0]
                }(t);
              e._delta = i.V.sub(s, e._values), i.V.addTo(e._movement, e._delta), this.computeValues(s), this.compute(t), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(t) {
              t("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Y
        },
        J = {
          key: "wheel",
          engine: class extends O {
            constructor(...t) {
              super(...t), n(this, "ingKey", "wheeling")
            }
            wheel(t) {
              this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(t) {
              const e = this.state;
              e._delta = S(t), i.V.addTo(e._movement, e._delta), L(e), this.compute(t), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(t) {
              t("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: X
        }
    },
    15197: (t, e, s) => {
      "use strict";
      s.d(e, {
        B: () => i.r
      });
      var i = s(84242)
    },
    17729: (t, e, s) => {
      "use strict";
      s.r(e), s.d(e, {
        ConfigResolverMap: () => n.dQ,
        EngineMap: () => n.$s,
        createUseGesture: () => _,
        dragAction: () => n.PF,
        hoverAction: () => n.xv,
        moveAction: () => n.U2,
        pinchAction: () => n.lc,
        registerAction: () => n.OH,
        rubberbandIfOutOfBounds: () => c.B,
        scrollAction: () => n.id,
        useDrag: () => d,
        useGesture: () => b,
        useHover: () => g,
        useMove: () => m,
        usePinch: () => p,
        useScroll: () => v,
        useWheel: () => f,
        wheelAction: () => n.ky
      });
      var i = s(14850),
        n = s(47149),
        o = s(62229),
        r = s.n(o),
        a = s(89383),
        c = s(15197),
        h = s(90525),
        u = {};
      for (const t in h)["default", "createUseGesture", "useDrag", "useGesture", "useHover", "useMove", "usePinch", "useScroll", "useWheel", "ConfigResolverMap", "EngineMap", "dragAction", "hoverAction", "moveAction", "pinchAction", "registerAction", "scrollAction", "wheelAction", "rubberbandIfOutOfBounds"].indexOf(t) < 0 && (u[t] = () => h[t]);

      function l(t, e = {}, s, i) {
        const n = r().useMemo((() => new a.x(t)), []);
        if (n.applyHandlers(t, i), n.applyConfig(e, s), r().useEffect(n.effect.bind(n)), r().useEffect((() => n.clean.bind(n)), []), void 0 === e.target) return n.bind.bind(n)
      }

      function d(t, e) {
        return (0, i.r)(i.e), l({
          drag: t
        }, e || {}, "drag")
      }

      function p(t, e) {
        return (0, i.r)(i.f), l({
          pinch: t
        }, e || {}, "pinch")
      }

      function f(t, e) {
        return (0, i.r)(i.w), l({
          wheel: t
        }, e || {}, "wheel")
      }

      function v(t, e) {
        return (0, i.r)(i.s), l({
          scroll: t
        }, e || {}, "scroll")
      }

      function m(t, e) {
        return (0, i.r)(i.m), l({
          move: t
        }, e || {}, "move")
      }

      function g(t, e) {
        return (0, i.r)(i.h), l({
          hover: t
        }, e || {}, "hover")
      }

      function _(t) {
        return t.forEach(i.r),
          function(t, e) {
            const {
              handlers: s,
              nativeHandlers: i,
              config: n
            } = (0, a.t)(t, e || {});
            return l(s, n, void 0, i)
          }
      }

      function b(t, e) {
        return _([i.e, i.f, i.s, i.w, i.m, i.h])(t, e || {})
      }
      s.d(e, u)
    },
    47149: (t, e, s) => {
      "use strict";
      s.d(e, {
        $s: () => i.E,
        OH: () => i.r,
        PF: () => i.e,
        U2: () => i.m,
        dQ: () => i.C,
        id: () => i.s,
        ky: () => i.w,
        lc: () => i.f,
        xv: () => i.h
      });
      var i = s(14850)
    },
    84242: (t, e, s) => {
      "use strict";
      s.d(e, {
        V: () => i,
        c: () => r,
        r: () => o
      });
      const i = {
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

      function n(t, e, s) {
        return 0 === e || Math.abs(e) === 1 / 0 ? Math.pow(t, 5 * s) : t * e * s / (e + s * t)
      }

      function o(t, e, s, i = .15) {
        return 0 === i ? function(t, e, s) {
          return Math.max(e, Math.min(t, s))
        }(t, e, s) : t < e ? -n(e - t, s - e, i) + e : t > s ? +n(t - s, s - e, i) + s : t
      }

      function r(t, [e, s], [i, n]) {
        const [
          [r, a],
          [c, h]
        ] = t;
        return [o(e, r, a, i), o(s, c, h, n)]
      }
    },
    89383: (t, e, s) => {
      "use strict";
      s.d(e, {
        t: () => f,
        x: () => h
      });
      var i = s(14850);
      const n = {
          target(t) {
            if (t) return () => "current" in t ? t.current : t
          },
          enabled: (t = !0) => t,
          window: (t = (i.S.isBrowser ? window : void 0)) => t,
          eventOptions: ({
            passive: t = !0,
            capture: e = !1
          } = {}) => ({
            passive: t,
            capture: e
          }),
          transform: t => t
        },
        o = ["target", "eventOptions", "window", "enabled", "transform"];

      function r(t = {}, e) {
        const s = {};
        for (const [i, n] of Object.entries(e)) switch (typeof n) {
          case "function":
            s[i] = n.call(s, t[i], i, t);
            break;
          case "object":
            s[i] = r(t[i], n);
            break;
          case "boolean":
            n && (s[i] = t[i])
        }
        return s
      }
      class a {
        constructor(t, e) {
          (0, i.a)(this, "_listeners", new Set), this._ctrl = t, this._gestureKey = e
        }
        add(t, e, s, n, o) {
          const r = this._listeners,
            a = (0, i.t)(e, s),
            c = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {},
            h = (0, i._)((0, i._)({}, c), o);
          t.addEventListener(a, n, h);
          const u = () => {
            t.removeEventListener(a, n, h), r.delete(u)
          };
          return r.add(u), u
        }
        clean() {
          this._listeners.forEach((t => t())), this._listeners.clear()
        }
      }
      class c {
        constructor() {
          (0, i.a)(this, "_timeouts", new Map)
        }
        add(t, e, s = 140, ...i) {
          this.remove(t), this._timeouts.set(t, window.setTimeout(e, s, ...i))
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
          var e, s;
          (0, i.a)(this, "gestures", new Set), (0, i.a)(this, "_targetEventStore", new a(this)), (0, i.a)(this, "gestureEventStores", {}), (0, i.a)(this, "gestureTimeoutStores", {}), (0, i.a)(this, "handlers", {}), (0, i.a)(this, "config", {}), (0, i.a)(this, "pointerIds", new Set), (0, i.a)(this, "touchIds", new Set), (0, i.a)(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), e = this, (s = t).drag && u(e, "drag"), s.wheel && u(e, "wheel"), s.scroll && u(e, "scroll"), s.move && u(e, "move"), s.pinch && u(e, "pinch"), s.hover && u(e, "hover")
        }
        setEventIds(t) {
          return (0, i.i)(t) ? (this.touchIds = new Set((0, i.b)(t)), this.touchIds) : "pointerId" in t ? ("pointerup" === t.type || "pointercancel" === t.type ? this.pointerIds.delete(t.pointerId) : "pointerdown" === t.type && this.pointerIds.add(t.pointerId), this.pointerIds) : void 0
        }
        applyHandlers(t, e) {
          this.handlers = t, this.nativeHandlers = e
        }
        applyConfig(t, e) {
          this.config = function(t, e, s = {}) {
            const a = t,
              {
                target: c,
                eventOptions: h,
                window: u,
                enabled: l,
                transform: d
              } = a,
              p = function(t, e) {
                if (null == t) return {};
                var s, i, n = function(t, e) {
                  if (null == t) return {};
                  var s, i, n = {},
                    o = Object.keys(t);
                  for (i = 0; i < o.length; i++) s = o[i], e.indexOf(s) >= 0 || (n[s] = t[s]);
                  return n
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(t);
                  for (i = 0; i < o.length; i++) s = o[i], e.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(t, s) && (n[s] = t[s])
                }
                return n
              }(a, o);
            if (s.shared = r({
                target: c,
                eventOptions: h,
                window: u,
                enabled: l,
                transform: d
              }, n), e) {
              const t = i.C.get(e);
              s[e] = r((0, i._)({
                shared: s.shared
              }, p), t)
            } else
              for (const t in p) {
                const e = i.C.get(t);
                e && (s[t] = r((0, i._)({
                  shared: s.shared
                }, p[t]), e))
              }
            return s
          }(t, e, this.config)
        }
        clean() {
          this._targetEventStore.clean();
          for (const t of this.gestures) this.gestureEventStores[t].clean(), this.gestureTimeoutStores[t].clean()
        }
        effect() {
          return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
        }
        bind(...t) {
          const e = this.config.shared,
            s = {};
          let n;
          if (!e.target || (n = e.target(), n)) {
            if (e.enabled) {
              for (const e of this.gestures) {
                const o = this.config[e],
                  r = l(s, o.eventOptions, !!n);
                o.enabled && new(i.E.get(e))(this, t, e).bind(r)
              }
              const o = l(s, e.eventOptions, !!n);
              for (const e in this.nativeHandlers) o(e, "", (s => this.nativeHandlers[e]((0, i._)((0, i._)({}, this.state.shared), {}, {
                event: s,
                args: t
              }))), void 0, !0)
            }
            for (const t in s) s[t] = (0, i.c)(...s[t]);
            if (!n) return s;
            for (const t in s) {
              const {
                device: e,
                capture: o,
                passive: r
              } = (0, i.p)(t);
              this._targetEventStore.add(n, e, "", s[t], {
                capture: o,
                passive: r
              })
            }
          }
        }
      }

      function u(t, e) {
        t.gestures.add(e), t.gestureEventStores[e] = new a(t, e), t.gestureTimeoutStores[e] = new c
      }
      const l = (t, e, s) => (n, o, r, a = {}, c = !1) => {
          var h, u;
          const l = null !== (h = a.capture) && void 0 !== h ? h : e.capture,
            d = null !== (u = a.passive) && void 0 !== u ? u : e.passive;
          let p = c ? n : (0, i.d)(n, o, l);
          s && d && (p += "Passive"), t[p] = t[p] || [], t[p].push(r)
        },
        d = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function p(t, e, s, n, o, r) {
        if (!t.has(s)) return;
        if (!i.E.has(n)) return;
        const a = s + "Start",
          c = s + "End";
        o[n] = t => {
          let i;
          return t.first && a in e && e[a](t), s in e && (i = e[s](t)), t.last && c in e && e[c](t), i
        }, r[n] = r[n] || {}
      }

      function f(t, e) {
        const [s, i, n] = function(t) {
          const e = {},
            s = {},
            i = new Set;
          for (let n in t) d.test(n) ? (i.add(RegExp.lastMatch), s[n] = t[n]) : e[n] = t[n];
          return [s, e, i]
        }(t), o = {};
        return p(n, s, "onDrag", "drag", o, e), p(n, s, "onWheel", "wheel", o, e), p(n, s, "onScroll", "scroll", o, e), p(n, s, "onPinch", "pinch", o, e), p(n, s, "onMove", "move", o, e), p(n, s, "onHover", "hover", o, e), {
          handlers: o,
          config: e,
          nativeHandlers: i
        }
      }
    },
    90525: () => {}
  }
]);