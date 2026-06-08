try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a692f5f4-d343-4f73-9267-8de2fac0ed06", e._sentryDebugIdIdentifier = "sentry-dbid-a692f5f4-d343-4f73-9267-8de2fac0ed06")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [5007], {
    9206(e, t, n) {
      n.d(t, {
        L: () => u
      });
      var r = n(4637),
        o = n(3529);
      let i = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        a = [],
        c = {},
        l = o.Ay;
      const u = (e, t = a) => {
        let n = c;
        s(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : a) : s(t) && (n = t, t = "dependencies" in n ? n.dependencies : a), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: o,
          revertOnUpdate: u
        } = n, d = (0, r.useRef)(!1), f = (0, r.useRef)(l.context(() => {}, o)), p = (0, r.useRef)(e => f.current.add(null, e)), h = t && t.length && !u;
        return h && i(() => (d.current = !0, () => f.current.revert()), a), i(() => {
          if (e && f.current.add(e, o), !h || !d.current) return () => f.current.revert()
        }, t), {
          context: f.current,
          contextSafe: p.current
        }
      };
      u.register = e => {
        l = e
      }, u.headless = !0
    },
    4811(e, t, n) {
      n.d(t, {
        useDrag: () => ue,
        useGesture: () => de
      });
      const r = {
        toVector: (e, t) => (void 0 === e && (e = t), Array.isArray(e) ? e : [e, e]),
        add: (e, t) => [e[0] + t[0], e[1] + t[1]],
        sub: (e, t) => [e[0] - t[0], e[1] - t[1]],
        addTo(e, t) {
          e[0] += t[0], e[1] += t[1]
        },
        subTo(e, t) {
          e[0] -= t[0], e[1] -= t[1]
        }
      };

      function o(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function i(e, t, n, r = .15) {
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -o(t - e, n - t, r) + t : e > n ? +o(e - n, n - t, r) + n : e
      }

      function s(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(Object(n), !0).forEach(function(t) {
            s(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      const l = {
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

      function u(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const d = ["enter", "leave"];
      const f = ["gotpointercapture", "lostpointercapture"];

      function p(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = f.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function h(e) {
        return "touches" in e
      }

      function m(e) {
        return h(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function v(e) {
        return h(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function g(e, t) {
        try {
          const n = t.clientX - e.clientX,
            r = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            i = (t.clientY + e.clientY) / 2,
            s = Math.hypot(n, r);
          return {
            angle: -180 * Math.atan2(n, r) / Math.PI,
            distance: s,
            origin: [o, i]
          }
        } catch (e) {}
        return null
      }

      function y(e, t) {
        const [n, r] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return g(n, r)
      }

      function _(e) {
        const t = v(e);
        return h(e) ? t.identifier : t.pointerId
      }

      function b(e) {
        const t = v(e);
        return [t.clientX, t.clientY]
      }

      function w(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function x(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function S() {}

      function E(...e) {
        return 0 === e.length ? S : 1 === e.length ? e[0] : function() {
          let t;
          for (const n of e) t = n.apply(this, arguments) || t;
          return t
        }
      }

      function T(e, t) {
        return Object.assign({}, t, e || {})
      }
      class C {
        constructor(e, t, n) {
          this.ctrl = e, this.args = t, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
        }
        get state() {
          return this.ctrl.state[this.key]
        }
        set state(e) {
          this.ctrl.state[this.key] = e
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
            state: e,
            shared: t,
            ingKey: n,
            args: r
          } = this;
          t[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ], e.args = r, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0
        }
        start(e) {
          const t = this.state,
            n = this.config;
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? x(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
        }
        computeValues(e) {
          const t = this.state;
          t._values = e, t.values = this.config.transform(e)
        }
        computeInitial() {
          const e = this.state;
          e._initial = e._values, e.initial = e.values
        }
        compute(e) {
          const {
            state: t,
            config: n,
            shared: o
          } = this;
          t.args = this.args;
          let s = 0;
          if (e && (t.event = e, n.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, o.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, o.locked = !!document.pointerLockElement, Object.assign(o, function(e) {
              const t = {};
              if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
                const {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                } = e;
                Object.assign(t, {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                })
              }
              return t
            }(e)), o.down = o.pressed = o.buttons % 2 == 1 || o.touches > 0, s = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            r.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [a, c] = t._movement, [l, u] = n.threshold, {
            _step: d,
            values: f
          } = t;
          if (n.hasCustomTransform ? (!1 === d[0] && (d[0] = Math.abs(a) >= l && f[0]), !1 === d[1] && (d[1] = Math.abs(c) >= u && f[1])) : (!1 === d[0] && (d[0] = Math.abs(a) >= l && Math.sign(a) * l), !1 === d[1] && (d[1] = Math.abs(c) >= u && Math.sign(c) * u)), t.intentional = !1 !== d[0] || !1 !== d[1], !t.intentional) return;
          const p = [0, 0];
          if (n.hasCustomTransform) {
            const [e, t] = f;
            p[0] = !1 !== d[0] ? e - d[0] : 0, p[1] = !1 !== d[1] ? t - d[1] : 0
          } else p[0] = !1 !== d[0] ? a - d[0] : 0, p[1] = !1 !== d[1] ? c - d[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(p);
          const h = t.offset,
            m = t._active && !t._blocked || t.active;
          m && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = o[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = x(n.bounds, t)), this.setup && this.setup()), t.movement = p, this.computeOffset()));
          const [v, g] = t.offset, [
            [y, _],
            [b, w]
          ] = t._bounds;
          t.overflow = [v < y ? -1 : v > _ ? 1 : 0, g < b ? -1 : g > w ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const S = t._active && n.rubberband || [0, 0];
          if (t.offset = function(e, [t, n], [r, o]) {
              const [
                [s, a],
                [c, l]
              ] = e;
              return [i(t, s, a, r), i(n, c, l, o)]
            }(t._bounds, t.offset, S), t.delta = r.sub(t.offset, h), this.computeMovement(), m && (!t.last || s > 32)) {
            t.delta = r.sub(t.offset, h);
            const e = t.delta.map(Math.abs);
            r.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && s > 0 && (t.velocity = [e[0] / s, e[1] / s], t.timeDelta = s)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(c(c(c({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class k extends C {
        constructor(...e) {
          super(...e), s(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = r.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = r.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[m(e)] : n.axisThreshold;
            t.axis = function([e, t], n) {
              const r = Math.abs(e),
                o = Math.abs(t);
              return r > o && r > n ? "x" : o > r && o > n ? "y" : void 0
            }(t._movement, r)
          }
          t._blocked = (n.lockDirection || !!n.axis) && !t.axis || !!n.axis && n.axis !== t.axis
        }
        restrictToAxis(e) {
          if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
            case "x":
              e[1] = 0;
              break;
            case "y":
              e[0] = 0
          }
        }
      }
      const P = e => e,
        O = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, n) => c(c({}, n.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return r.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? r.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || P
          },
          threshold: e => r.toVector(e, 0)
        },
        R = c(c({}, O), {}, {
          axis(e, t, {
            axis: n
          }) {
            if (this.lockDirection = "lock" === n, !this.lockDirection) return n
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => R.bounds(e(t));
            if ("current" in e) return () => e.current;
            if ("function" == typeof HTMLElement && e instanceof HTMLElement) return e;
            const {
              left: t = -1 / 0,
              right: n = 1 / 0,
              top: r = -1 / 0,
              bottom: o = 1 / 0
            } = e;
            return [
              [t, n],
              [r, o]
            ]
          }
        }),
        M = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        D = "undefined" != typeof window && window.document && window.document.createElement;

      function A() {
        return D && "ontouchstart" in window
      }
      const j = {
          isBrowser: D,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: A(),
          touchscreen: A() || D && window.navigator.maxTouchPoints > 1,
          pointer: D && "onpointerdown" in window,
          pointerLock: D && "exitPointerLock" in window.document
        },
        L = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        I = c(c({}, R), {}, {
          device(e, t, {
            pointer: {
              touch: n = !1,
              lock: r = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = r && j.pointerLock, j.touch && n ? "touch" : this.pointerLock ? "mouse" : j.pointer && !o ? "pointer" : j.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: n
          }) {
            if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && e ? 250 : void 0, j.touchscreen && !1 !== n) return e || (void 0 !== n ? "y" : void 0)
          },
          pointerCapture(e, t, {
            pointer: {
              capture: n = !0,
              buttons: r = 1,
              keys: o = !0
            } = {}
          }) {
            return this.pointerButtons = r, this.keys = o, !this.pointerLock && "pointer" === this.device && n
          },
          threshold(e, t, {
            filterTaps: n = !1,
            tapsThreshold: o = 3,
            axis: i
          }) {
            const s = r.toVector(e, n ? o : i ? 1 : 0);
            return this.filterTaps = n, this.tapsThreshold = o, s
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: n = 250
          } = {}) {
            return {
              velocity: this.transform(r.toVector(e)),
              distance: this.transform(r.toVector(t)),
              duration: n
            }
          },
          delay(e = 0) {
            switch (e) {
              case !0:
                return 180;
              case !1:
                return 0;
              default:
                return e
            }
          },
          axisThreshold: e => e ? c(c({}, L), e) : L,
          keyboardDisplacement: (e = 10) => e
        });

      function N(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, s] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && s < 0 || n > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const F = c(c({}, O), {}, {
          device(e, t, {
            shared: n,
            pointer: {
              touch: r = !1
            } = {}
          }) {
            if (n.target && !j.touch && j.gesture) return "gesture";
            if (j.touch && r) return "touch";
            if (j.touchscreen) {
              if (j.pointer) return "pointer";
              if (j.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: n = {},
            angleBounds: r = {}
          }) {
            const o = e => {
                const t = T(x(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = T(x(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof n && "function" != typeof r ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, r.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        z = c(c({}, R), {}, {
          mouseOnly: (e = !0) => e
        }),
        V = R,
        B = R,
        q = c(c({}, R), {}, {
          mouseOnly: (e = !0) => e
        }),
        K = new Map,
        W = new Map;

      function H(e) {
        K.set(e.key, e.engine), W.set(e.key, e.resolver)
      }
      const $ = {
          key: "drag",
          engine: class extends k {
            constructor(...e) {
              super(...e), s(this, "ingKey", "dragging")
            }
            reset() {
              super.reset();
              const e = this.state;
              e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this)
            }
            setup() {
              const e = this.state;
              if (e._bounds instanceof HTMLElement) {
                const t = e._bounds.getBoundingClientRect(),
                  n = e.currentTarget.getBoundingClientRect(),
                  r = {
                    left: t.left - n.left + e.offset[0],
                    right: t.right - n.right + e.offset[0],
                    top: t.top - n.top + e.offset[1],
                    bottom: t.bottom - n.bottom + e.offset[1]
                  };
                e._bounds = R.bounds(r)
              }
            }
            cancel() {
              const e = this.state;
              e.canceled || (e.canceled = !0, e._active = !1, setTimeout(() => {
                this.compute(), this.emit()
              }, 0))
            }
            setActive() {
              this.state._active = this.state._pointerActive || this.state._keyboardActive
            }
            clean() {
              this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
            }
            pointerDown(e) {
              const t = this.config,
                n = this.state;
              if (null != e.buttons && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)) return;
              const r = this.ctrl.setEventIds(e);
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = _(e), n._pointerActive = !0, this.computeValues(b(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== m(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const o = _(e);
              if (void 0 !== t._pointerId && o !== t._pointerId) return;
              const i = b(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = r.sub(i, t._values), this.computeValues(i)), r.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = _(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= n.tapsThreshold && i <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
              else {
                const [e, r] = t._delta, [o, i] = t._movement, [s, a] = n.swipe.velocity, [c, l] = n.swipe.distance, u = n.swipe.duration;
                if (t.elapsedTime < u) {
                  const n = Math.abs(e / t.timeDelta),
                    u = Math.abs(r / t.timeDelta);
                  n > s && Math.abs(o) > c && (t.swipe[0] = Math.sign(e)), u > a && Math.abs(i) > l && (t.swipe[1] = Math.sign(r))
                }
              }
              this.emit()
            }
            pointerClick(e) {
              !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }
            setupPointer(e) {
              const t = this.config,
                n = t.device;
              t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)))
            }
            pointerClean() {
              this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
            }
            preventScroll(e) {
              this.state._preventScroll && e.cancelable && e.preventDefault()
            }
            setupScrollPrevention(e) {
              this.state._preventScroll = !1,
                function(e) {
                  "persist" in e && "function" == typeof e.persist && e.persist()
                }(e);
              const t = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                passive: !1
              });
              this.eventStore.add(this.sharedConfig.window, "touch", "end", t), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", t), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e)
            }
            setupDelayTrigger(e) {
              this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
                this.state._step = [0, 0], this.startPointerDrag(e)
              }, this.config.delay)
            }
            keyDown(e) {
              const t = M[e.key];
              if (t) {
                const n = this.state,
                  o = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, o), n._keyboardActive = !0, r.addTo(n._movement, n._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in M && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: I
        },
        U = {
          key: "hover",
          engine: class extends k {
            constructor(...e) {
              super(...e), s(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(b(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = b(e);
              t._movement = t._delta = r.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: q
        },
        G = {
          key: "move",
          engine: class extends k {
            constructor(...e) {
              super(...e), s(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(b(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = b(e),
                n = this.state;
              n._delta = r.sub(t, n._values), r.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: z
        },
        X = {
          key: "pinch",
          engine: class extends C {
            constructor(...e) {
              super(...e), s(this, "ingKey", "pinching"), s(this, "aliasKey", "da")
            }
            init() {
              this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = new Map
            }
            reset() {
              super.reset();
              const e = this.state;
              e._touchIds = [], e.canceled = !1, e.cancel = this.cancel.bind(this), e.turns = 0
            }
            computeOffset() {
              const {
                type: e,
                movement: t,
                lastOffset: n
              } = this.state;
              this.state.offset = "wheel" === e ? r.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
            }
            computeMovement() {
              const {
                offset: e,
                lastOffset: t
              } = this.state;
              this.state.movement = [e[0] / t[0], e[1] - t[1]]
            }
            axisIntent() {
              const e = this.state,
                [t, n] = e._movement;
              if (!e.axis) {
                const r = 30 * Math.abs(t) - Math.abs(n);
                r < 0 ? e.axis = "angle" : r > 0 && (e.axis = "scale")
              }
            }
            restrictToAxis(e) {
              this.config.lockDirection && ("scale" === this.state.axis ? e[1] = 0 : "angle" === this.state.axis && (e[0] = 0))
            }
            cancel() {
              const e = this.state;
              e.canceled || setTimeout(() => {
                e.canceled = !0, e._active = !1, this.compute(), this.emit()
              }, 0)
            }
            touchStart(e) {
              this.ctrl.setEventIds(e);
              const t = this.state,
                n = this.ctrl.touchIds;
              if (t._active && t._touchIds.every(e => n.has(e))) return;
              if (n.size < 2) return;
              this.start(e), t._touchIds = Array.from(n).slice(0, 2);
              const r = y(e, t._touchIds);
              r && this.pinchStart(e, r)
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              const t = this.state,
                n = t._pointerEvents,
                r = this.ctrl.pointerIds;
              if (t._active && Array.from(n.keys()).every(e => r.has(e))) return;
              if (n.size < 2 && n.set(e.pointerId, e), t._pointerEvents.size < 2) return;
              this.start(e);
              const o = g(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = y(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = g(...Array.from(t.values()));
              n && this.pinchMove(e, n)
            }
            pinchMove(e, t) {
              const n = this.state,
                r = n._values[1],
                o = t.angle - r;
              let i = 0;
              Math.abs(o) > 270 && (i += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * i]), n.origin = t.origin, n.turns = i, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(e), this.emit()
            }
            touchEnd(e) {
              this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some(e => !this.ctrl.touchIds.has(e)) && (this.state._active = !1, this.compute(e), this.emit())
            }
            pointerEnd(e) {
              const t = this.state;
              this.ctrl.setEventIds(e);
              try {
                e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              t._pointerEvents.has(e.pointerId) && t._pointerEvents.delete(e.pointerId), t._active && t._pointerEvents.size < 2 && (t._active = !1, this.compute(e), this.emit())
            }
            gestureStart(e) {
              e.cancelable && e.preventDefault();
              const t = this.state;
              t._active || (this.start(e), this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY], this.compute(e), this.emit())
            }
            gestureMove(e) {
              if (e.cancelable && e.preventDefault(), !this.state._active) return;
              const t = this.state;
              this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY];
              const n = t._movement;
              t._movement = [e.scale - 1, e.rotation], t._delta = r.sub(t._movement, n), this.compute(e), this.emit()
            }
            gestureEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            wheel(e) {
              const t = this.config.modifierKey;
              t && !(Array.isArray(t) ? t.find(t => e[t]) : e[t]) || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)))
            }
            wheelStart(e) {
              this.start(e), this.wheelChange(e)
            }
            wheelChange(e) {
              "uv" in e || e.cancelable && e.preventDefault();
              const t = this.state;
              t._delta = [-w(e)[1] / 100 * t.offset[0], 0], r.addTo(t._movement, t._delta), N(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              t && (e(t, "start", this[t + "Start"].bind(this)), e(t, "change", this[t + "Move"].bind(this)), e(t, "end", this[t + "End"].bind(this)), e(t, "cancel", this[t + "End"].bind(this)), e("lostPointerCapture", "", this[t + "End"].bind(this))), this.config.pinchOnWheel && e("wheel", "", this.wheel.bind(this), {
                passive: !1
              })
            }
          },
          resolver: F
        },
        Y = {
          key: "scroll",
          engine: class extends k {
            constructor(...e) {
              super(...e), s(this, "ingKey", "scrolling")
            }
            scroll(e) {
              this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
            }
            scrollChange(e) {
              e.cancelable && e.preventDefault();
              const t = this.state,
                n = function(e) {
                  var t, n;
                  const {
                    scrollX: r,
                    scrollY: o,
                    scrollLeft: i,
                    scrollTop: s
                  } = e.currentTarget;
                  return [null !== (t = null != r ? r : i) && void 0 !== t ? t : 0, null !== (n = null != o ? o : s) && void 0 !== n ? n : 0]
                }(e);
              t._delta = r.sub(n, t._values), r.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: V
        },
        Q = {
          key: "wheel",
          engine: class extends k {
            constructor(...e) {
              super(...e), s(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = w(e), r.addTo(t._movement, t._delta), N(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: B
        };
      var Z = n(4637);
      const J = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (j.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        ee = ["target", "eventOptions", "window", "enabled", "transform"];

      function te(e = {}, t) {
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = te(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class ne {
        constructor(e, t) {
          s(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            s = function(e, t = "") {
              const n = l[e];
              return e + (n && n[t] || t)
            }(t, n),
            a = c(c({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(s, r, a);
          const u = () => {
            e.removeEventListener(s, r, a), i.delete(u)
          };
          return i.add(u), u
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class re {
        constructor() {
          s(this, "_timeouts", new Map)
        }
        add(e, t, n = 140, ...r) {
          this.remove(e), this._timeouts.set(e, window.setTimeout(t, n, ...r))
        }
        remove(e) {
          const t = this._timeouts.get(e);
          t && window.clearTimeout(t)
        }
        clean() {
          this._timeouts.forEach(e => {
            window.clearTimeout(e)
          }), this._timeouts.clear()
        }
      }
      class oe {
        constructor(e) {
          var t, n;
          s(this, "gestures", new Set), s(this, "_targetEventStore", new ne(this)), s(this, "gestureEventStores", {}), s(this, "gestureTimeoutStores", {}), s(this, "handlers", {}), s(this, "config", {}), s(this, "pointerIds", new Set), s(this, "touchIds", new Set), s(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && ie(t, "drag"), n.wheel && ie(t, "wheel"), n.scroll && ie(t, "scroll"), n.move && ie(t, "move"), n.pinch && ie(t, "pinch"), n.hover && ie(t, "hover")
        }
        setEventIds(e) {
          return h(e) ? (this.touchIds = new Set(function(e) {
            return function(e) {
              return Array.from(e.touches).filter(t => {
                var n, r;
                return t.target === e.currentTarget || (null === (n = e.currentTarget) || void 0 === n || null === (r = n.contains) || void 0 === r ? void 0 : r.call(n, t.target))
              })
            }(e).map(e => e.identifier)
          }(e)), this.touchIds) : "pointerId" in e ? ("pointerup" === e.type || "pointercancel" === e.type ? this.pointerIds.delete(e.pointerId) : "pointerdown" === e.type && this.pointerIds.add(e.pointerId), this.pointerIds) : void 0
        }
        applyHandlers(e, t) {
          this.handlers = e, this.nativeHandlers = t
        }
        applyConfig(e, t) {
          this.config = function(e, t, n = {}) {
            const r = e,
              {
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              } = r,
              u = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
              }(r, ee);
            if (n.shared = te({
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              }, J), t) {
              const e = W.get(t);
              n[t] = te(c({
                shared: n.shared
              }, u), e)
            } else
              for (const e in u) {
                const t = W.get(e);
                t && (n[e] = te(c({
                  shared: n.shared
                }, u[e]), t))
              }
            return n
          }(e, t, this.config)
        }
        clean() {
          this._targetEventStore.clean();
          for (const e of this.gestures) this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean()
        }
        effect() {
          return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
        }
        bind(...e) {
          const t = this.config.shared,
            n = {};
          let r;
          if (!t.target || (r = t.target(), r)) {
            if (t.enabled) {
              for (const t of this.gestures) {
                const o = this.config[t],
                  i = se(n, o.eventOptions, !!r);
                o.enabled && new(K.get(t))(this, e, t).bind(i)
              }
              const o = se(n, t.eventOptions, !!r);
              for (const t in this.nativeHandlers) o(t, "", n => this.nativeHandlers[t](c(c({}, this.state.shared), {}, {
                event: n,
                args: e
              })), void 0, !0)
            }
            for (const e in n) n[e] = E(...n[e]);
            if (!r) return n;
            for (const e in n) {
              const {
                device: t,
                capture: o,
                passive: i
              } = p(e);
              this._targetEventStore.add(r, t, "", n[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function ie(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new ne(e, t), e.gestureTimeoutStores[t] = new re
      }
      const se = (e, t, n) => (r, o, i, s = {}, a = !1) => {
          var c, f;
          const p = null !== (c = s.capture) && void 0 !== c ? c : t.capture,
            h = null !== (f = s.passive) && void 0 !== f ? f : t.passive;
          let m = a ? r : function(e, t = "", n = !1) {
            const r = l[e],
              o = r && r[t] || t;
            return "on" + u(e) + u(o) + (function(e = !1, t) {
              return e && !d.includes(t)
            }(n, o) ? "Capture" : "")
          }(r, o, p);
          n && h && (m += "Passive"), e[m] = e[m] || [], e[m].push(i)
        },
        ae = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function ce(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!K.has(r)) return;
        const s = n + "Start",
          a = n + "End";
        o[r] = e => {
          let r;
          return e.first && s in t && t[s](e), n in t && (r = t[n](e)), e.last && a in t && t[a](e), r
        }, i[r] = i[r] || {}
      }

      function le(e, t = {}, n, r) {
        const o = Z.useMemo(() => new oe(e), []);
        if (o.applyHandlers(e, r), o.applyConfig(t, n), Z.useEffect(o.effect.bind(o)), Z.useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function ue(e, t) {
        return H($), le({
          drag: e
        }, t || {}, "drag")
      }

      function de(e, t) {
        const n = ([$, X, Y, Q, G, U].forEach(H), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) ae.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return ce(o, n, "onDrag", "drag", i, t), ce(o, n, "onWheel", "wheel", i, t), ce(o, n, "onScroll", "scroll", i, t), ce(o, n, "onPinch", "pinch", i, t), ce(o, n, "onMove", "move", i, t), ce(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return le(n, o, void 0, r)
        });
        return n(e, t || {})
      }
    },
    5787(e, t, n) {
      n.d(t, {
        Eq: () => c
      });
      var r = new WeakMap,
        o = new WeakMap,
        i = {},
        s = 0,
        a = function(e) {
          return e && (e.host || a(e.parentNode))
        },
        c = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var c = Array.from(Array.isArray(e) ? e : [e]),
            l = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return l ? (c.push.apply(c, Array.from(l.querySelectorAll("[aria-live], script"))), function(e, t, n, c) {
            var l = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = a(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            i[n] || (i[n] = new WeakMap);
            var u = i[n],
              d = [],
              f = new Set,
              p = new Set(l),
              h = function(e) {
                e && !f.has(e) && (f.add(e), h(e.parentNode))
              };
            l.forEach(h);
            var m = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) m(e);
                else try {
                  var t = e.getAttribute(c),
                    i = null !== t && "false" !== t,
                    s = (r.get(e) || 0) + 1,
                    a = (u.get(e) || 0) + 1;
                  r.set(e, s), u.set(e, a), d.push(e), 1 === s && i && o.set(e, !0), 1 === a && e.setAttribute(n, "true"), i || e.setAttribute(c, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return m(t), f.clear(), s++,
              function() {
                d.forEach(function(e) {
                  var t = r.get(e) - 1,
                    i = u.get(e) - 1;
                  r.set(e, t), u.set(e, i), t || (o.has(e) || e.removeAttribute(c), o.delete(e)), i || e.removeAttribute(n)
                }), --s || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
              }
          }(c, l, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    3529(e, t, n) {
      function r(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function o(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
      }
      n.d(t, {
        Ay: () => Xr,
        os: () => Xr
      });
      var i, s, a, c, l, u, d, f, p, h, m, v, g, y, _, b, w, x = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        S = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        E = 1e8,
        T = 1e-8,
        C = 2 * Math.PI,
        k = C / 4,
        P = 0,
        O = Math.sqrt,
        R = Math.cos,
        M = Math.sin,
        D = function(e) {
          return "string" == typeof e
        },
        A = function(e) {
          return "function" == typeof e
        },
        j = function(e) {
          return "number" == typeof e
        },
        L = function(e) {
          return void 0 === e
        },
        I = function(e) {
          return "object" == typeof e
        },
        N = function(e) {
          return !1 !== e
        },
        F = function() {
          return "undefined" != typeof window
        },
        z = function(e) {
          return A(e) || D(e)
        },
        V = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        B = Array.isArray,
        q = /(?:-?\.?\d|\.)+/gi,
        K = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        W = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        H = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        $ = /[+-]=-?[.\d]+/,
        U = /[^,'"\[\]\s]+/gi,
        G = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        X = {},
        Y = {},
        Q = function(e) {
          return (Y = Ce(e, X)) && kn
        },
        Z = function(e, t) {
          return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
        },
        J = function(e, t) {
          return !t && console.warn(e)
        },
        ee = function(e, t) {
          return e && (X[e] = t) && Y && (Y[e] = t) || X
        },
        te = function() {
          return 0
        },
        ne = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        re = {
          suppressEvents: !0,
          kill: !1
        },
        oe = {
          suppressEvents: !0
        },
        ie = {},
        se = [],
        ae = {},
        ce = {},
        le = {},
        ue = 30,
        de = [],
        fe = "",
        pe = function(e) {
          var t, n, r = e[0];
          if (I(r) || A(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
            for (n = de.length; n-- && !de[n].targetTest(r););
            t = de[n]
          }
          for (n = e.length; n--;) e[n] && (e[n]._gsap || (e[n]._gsap = new Vt(e[n], t))) || e.splice(n, 1);
          return e
        },
        he = function(e) {
          return e._gsap || pe(rt(e))[0]._gsap
        },
        me = function(e, t, n) {
          return (n = e[t]) && A(n) ? e[t]() : L(n) && e.getAttribute && e.getAttribute(t) || n
        },
        ve = function(e, t) {
          return (e = e.split(",")).forEach(t) || e
        },
        ge = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        ye = function(e) {
          return Math.round(1e7 * e) / 1e7 || 0
        },
        _e = function(e, t) {
          var n = t.charAt(0),
            r = parseFloat(t.substr(2));
          return e = parseFloat(e), "+" === n ? e + r : "-" === n ? e - r : "*" === n ? e * r : e / r
        },
        be = function(e, t) {
          for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
          return r < n
        },
        we = function() {
          var e, t, n = se.length,
            r = se.slice(0);
          for (ae = {}, se.length = 0, e = 0; e < n; e++)(t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        xe = function(e, t, n, r) {
          se.length && !s && we(), e.render(t, n, r || s && t < 0 && (e._initted || e._startAt)), se.length && !s && we()
        },
        Se = function(e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(U).length < 2 ? t : D(e) ? e.trim() : e
        },
        Ee = function(e) {
          return e
        },
        Te = function(e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e
        },
        Ce = function(e, t) {
          for (var n in t) e[n] = t[n];
          return e
        },
        ke = function e(t, n) {
          for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = I(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
          return t
        },
        Pe = function(e, t) {
          var n, r = {};
          for (n in e) n in t || (r[n] = e[n]);
          return r
        },
        Oe = function(e) {
          var t, n = e.parent || c,
            r = e.keyframes ? (t = B(e.keyframes), function(e, n) {
              for (var r in n) r in e || "duration" === r && t || "ease" === r || (e[r] = n[r])
            }) : Te;
          if (N(e.inherit))
            for (; n;) r(e, n.vars.defaults), n = n.parent || n._dp;
          return e
        },
        Re = function(e, t, n, r, o) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i, s = e[r];
          if (o)
            for (i = t[o]; s && s[o] > i;) s = s._prev;
          return s ? (t._next = s._next, s._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = s, t.parent = t._dp = e, t
        },
        Me = function(e, t, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var o = t._prev,
            i = t._next;
          o ? o._next = i : e[n] === t && (e[n] = i), i ? i._prev = o : e[r] === t && (e[r] = o), t._next = t._prev = t.parent = null
        },
        De = function(e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        Ae = function(e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n;) n._dirty = 1, n = n.parent;
          return e
        },
        je = function(e, t, n, r) {
          return e._startAt && (s ? e._startAt.revert(re) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
        },
        Le = function e(t) {
          return !t || t._ts && e(t.parent)
        },
        Ie = function(e) {
          return e._repeat ? Ne(e._tTime, e = e.duration() + e._rDelay) * e : 0
        },
        Ne = function(e, t) {
          var n = Math.floor(e /= t);
          return e && n === e ? n - 1 : n
        },
        Fe = function(e, t) {
          return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        },
        ze = function(e) {
          return e._end = ye(e._start + (e._tDur / Math.abs(e._ts || e._rts || T) || 0))
        },
        Ve = function(e, t) {
          var n = e._dp;
          return n && n.smoothChildTiming && e._ts && (e._start = ye(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), ze(e), n._dirty || Ae(n, e)), e
        },
        Be = function(e, t) {
          var n;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = Fe(e.rawTime(), t), (!t._dur || Je(0, t.totalDuration(), n) - t._tTime > T) && t.render(n, !0)), Ae(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
            e._zTime = -1e-8
          }
        },
        qe = function(e, t, n, r) {
          return t.parent && De(t), t._start = ye((j(n) ? n : n || e !== c ? Ye(e, n, t) : e._time) + t._delay), t._end = ye(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Re(e, t, "_first", "_last", e._sort ? "_start" : 0), $e(t) || (e._recent = t), r || Be(e, t), e._ts < 0 && Ve(e, e._tTime), e
        },
        Ke = function(e, t) {
          return (X.ScrollTrigger || Z("scrollTrigger", t)) && X.ScrollTrigger.create(t, e)
        },
        We = function(e, t, n, r, o) {
          return Gt(e, t, o), e._initted ? !n && e._pt && !s && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && p !== kt.frame ? (se.push(e), e._lazy = [o, r], 1) : void 0 : 1
        },
        He = function e(t) {
          var n = t.parent;
          return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
        },
        $e = function(e) {
          var t = e.data;
          return "isFromStart" === t || "isStart" === t
        },
        Ue = function(e, t, n, r) {
          var o = e._repeat,
            i = ye(t) || 0,
            s = e._tTime / e._tDur;
          return s && !r && (e._time *= i / e._dur), e._dur = i, e._tDur = o ? o < 0 ? 1e10 : ye(i * (o + 1) + e._rDelay * o) : i, s > 0 && !r && Ve(e, e._tTime = e._tDur * s), e.parent && ze(e), n || Ae(e.parent, e), e
        },
        Ge = function(e) {
          return e instanceof qt ? Ae(e) : Ue(e, e._dur)
        },
        Xe = {
          _start: 0,
          endTime: te,
          totalDuration: te
        },
        Ye = function e(t, n, r) {
          var o, i, s, a = t.labels,
            c = t._recent || Xe,
            l = t.duration() >= E ? c.endTime(!1) : t._dur;
          return D(n) && (isNaN(n) || n in a) ? (i = n.charAt(0), s = "%" === n.substr(-1), o = n.indexOf("="), "<" === i || ">" === i ? (o >= 0 && (n = n.replace(/=/, "")), ("<" === i ? c._start : c.endTime(c._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (o < 0 ? c : r).totalDuration() / 100 : 1)) : o < 0 ? (n in a || (a[n] = l), a[n]) : (i = parseFloat(n.charAt(o - 1) + n.substr(o + 1)), s && r && (i = i / 100 * (B(r) ? r[0] : r).totalDuration()), o > 1 ? e(t, n.substr(0, o - 1), r) + i : l + i)) : null == n ? l : +n
        },
        Qe = function(e, t, n) {
          var r, o, i = j(t[1]),
            s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
          if (i && (a.duration = t[1]), a.parent = n, e) {
            for (r = a, o = n; o && !("immediateRender" in r);) r = o.vars.defaults || {}, o = N(o.vars.inherit) && o.parent;
            a.immediateRender = N(r.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
          }
          return new Jt(t[0], a, t[s + 1])
        },
        Ze = function(e, t) {
          return e || 0 === e ? t(e) : t
        },
        Je = function(e, t, n) {
          return n < e ? e : n > t ? t : n
        },
        et = function(e, t) {
          return D(e) && (t = G.exec(e)) ? t[1] : ""
        },
        tt = [].slice,
        nt = function(e, t) {
          return e && I(e) && "length" in e && (!t && !e.length || e.length - 1 in e && I(e[0])) && !e.nodeType && e !== l
        },
        rt = function(e, t, n) {
          return a && !t && a.selector ? a.selector(e) : !D(e) || n || !u && Pt() ? B(e) ? function(e, t, n) {
            return void 0 === n && (n = []), e.forEach(function(e) {
              var r;
              return D(e) && !t || nt(e, 1) ? (r = n).push.apply(r, rt(e)) : n.push(e)
            }) || n
          }(e, n) : nt(e) ? tt.call(e, 0) : e ? [e] : [] : tt.call((t || d).querySelectorAll(e), 0)
        },
        ot = function(e) {
          return e = rt(e)[0] || J("Invalid scope") || {},
            function(t) {
              var n = e.current || e.nativeElement || e;
              return rt(t, n.querySelectorAll ? n : n === e ? J("Invalid scope") || d.createElement("div") : e)
            }
        },
        it = function(e) {
          return e.sort(function() {
            return .5 - Math.random()
          })
        },
        st = function(e) {
          if (A(e)) return e;
          var t = I(e) ? e : {
              each: e
            },
            n = Lt(t.ease),
            r = t.from || 0,
            o = parseFloat(t.base) || 0,
            i = {},
            s = r > 0 && r < 1,
            a = isNaN(r) || s,
            c = t.axis,
            l = r,
            u = r;
          return D(r) ? l = u = {
              center: .5,
              edges: .5,
              end: 1
            } [r] || 0 : !s && a && (l = r[0], u = r[1]),
            function(e, s, d) {
              var f, p, h, m, v, g, y, _, b, w = (d || t).length,
                x = i[w];
              if (!x) {
                if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, E])[1])) {
                  for (y = -E; y < (y = d[b++].getBoundingClientRect().left) && b < w;);
                  b < w && b--
                }
                for (x = i[w] = [], f = a ? Math.min(b, w) * l - .5 : r % b, p = b === E ? 0 : a ? w * u / b - .5 : r / b | 0, y = 0, _ = E, g = 0; g < w; g++) h = g % b - f, m = p - (g / b | 0), x[g] = v = c ? Math.abs("y" === c ? m : h) : O(h * h + m * m), v > y && (y = v), v < _ && (_ = v);
                "random" === r && it(x), x.max = y - _, x.min = _, x.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (b > w ? w - 1 : c ? "y" === c ? w / b : b : Math.max(b, w / b)) || 0) * ("edges" === r ? -1 : 1), x.b = w < 0 ? o - w : o, x.u = et(t.amount || t.each) || 0, n = n && w < 0 ? At(n) : n
              }
              return w = (x[e] - x.min) / x.max || 0, ye(x.b + (n ? n(w) : w) * x.v) + x.u
            }
        },
        at = function(e) {
          var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function(n) {
            var r = ye(Math.round(parseFloat(n) / e) * e * t);
            return (r - r % 1) / t + (j(n) ? 0 : et(n))
          }
        },
        ct = function(e, t) {
          var n, r, o = B(e);
          return !o && I(e) && (n = o = e.radius || E, e.values ? (e = rt(e.values), (r = !j(e[0])) && (n *= n)) : e = at(e.increment)), Ze(t, o ? A(e) ? function(t) {
            return r = e(t), Math.abs(r - t) <= n ? r : t
          } : function(t) {
            for (var o, i, s = parseFloat(r ? t.x : t), a = parseFloat(r ? t.y : 0), c = E, l = 0, u = e.length; u--;)(o = r ? (o = e[u].x - s) * o + (i = e[u].y - a) * i : Math.abs(e[u] - s)) < c && (c = o, l = u);
            return l = !n || c <= n ? e[l] : t, r || l === t || j(t) ? l : l + et(t)
          } : at(e))
        },
        lt = function(e, t, n, r) {
          return Ze(B(e) ? !t : !0 === n ? !!(n = 0) : !r, function() {
            return B(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * r) / r
          })
        },
        ut = function(e, t, n) {
          return Ze(n, function(n) {
            return e[~~t(n)]
          })
        },
        dt = function(e) {
          for (var t, n, r, o, i = 0, s = ""; ~(t = e.indexOf("random(", i));) r = e.indexOf(")", t), o = "[" === e.charAt(t + 7), n = e.substr(t + 7, r - t - 7).match(o ? U : q), s += e.substr(i, t - i) + lt(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), i = r + 1;
          return s + e.substr(i, e.length - i)
        },
        ft = function(e, t, n, r, o) {
          var i = t - e,
            s = r - n;
          return Ze(o, function(t) {
            return n + ((t - e) / i * s || 0)
          })
        },
        pt = function(e, t, n) {
          var r, o, i, s = e.labels,
            a = E;
          for (r in s)(o = s[r] - t) < 0 == !!n && o && a > (o = Math.abs(o)) && (i = r, a = o);
          return i
        },
        ht = function(e, t, n) {
          var r, o, i, s = e.vars,
            c = s[t],
            l = a,
            u = e._ctx;
          if (c) return r = s[t + "Params"], o = s.callbackScope || e, n && se.length && we(), u && (a = u), i = r ? c.apply(o, r) : c.call(o), a = l, i
        },
        mt = function(e) {
          return De(e), e.scrollTrigger && e.scrollTrigger.kill(!!s), e.progress() < 1 && ht(e, "onInterrupt"), e
        },
        vt = [],
        gt = function(e) {
          if (e)
            if (e = !e.name && e.default || e, F() || e.headless) {
              var t = e.name,
                n = A(e),
                r = t && !n && e.init ? function() {
                  this._props = []
                } : e,
                o = {
                  init: te,
                  render: ln,
                  add: $t,
                  kill: dn,
                  modifier: un,
                  rawVars: 0
                },
                i = {
                  targetTest: 0,
                  get: 0,
                  getSetter: on,
                  aliases: {},
                  register: 0
                };
              if (Pt(), e !== r) {
                if (ce[t]) return;
                Te(r, Te(Pe(e, o), i)), Ce(r.prototype, Ce(o, Pe(e, i))), ce[r.prop = t] = r, e.targetTest && (de.push(r), ie[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
              }
              ee(t, r), e.register && e.register(kn, r, hn)
            } else vt.push(e)
        },
        yt = 255,
        _t = {
          aqua: [0, yt, yt],
          lime: [0, yt, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, yt],
          navy: [0, 0, 128],
          white: [yt, yt, yt],
          olive: [128, 128, 0],
          yellow: [yt, yt, 0],
          orange: [yt, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [yt, 0, 0],
          pink: [yt, 192, 203],
          cyan: [0, yt, yt],
          transparent: [yt, yt, yt, 0]
        },
        bt = function(e, t, n) {
          return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * yt + .5 | 0
        },
        wt = function(e, t, n) {
          var r, o, i, s, a, c, l, u, d, f, p = e ? j(e) ? [e >> 16, e >> 8 & yt, e & yt] : 0 : _t.black;
          if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), _t[e]) p = _t[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (r = e.charAt(1), o = e.charAt(2), i = e.charAt(3), e = "#" + r + r + o + o + i + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & yt, p & yt, parseInt(e.substr(7), 16) / 255];
              p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & yt, e & yt]
            } else if ("hsl" === e.substr(0, 3))
              if (p = f = e.match(q), t) {
                if (~e.indexOf("=")) return p = e.match(K), n && p.length < 4 && (p[3] = 1), p
              } else s = +p[0] % 360 / 360, a = +p[1] / 100, r = 2 * (c = +p[2] / 100) - (o = c <= .5 ? c * (a + 1) : c + a - c * a), p.length > 3 && (p[3] *= 1), p[0] = bt(s + 1 / 3, r, o), p[1] = bt(s, r, o), p[2] = bt(s - 1 / 3, r, o);
            else p = e.match(q) || _t.transparent;
            p = p.map(Number)
          }
          return t && !f && (r = p[0] / yt, o = p[1] / yt, i = p[2] / yt, c = ((l = Math.max(r, o, i)) + (u = Math.min(r, o, i))) / 2, l === u ? s = a = 0 : (d = l - u, a = c > .5 ? d / (2 - l - u) : d / (l + u), s = l === r ? (o - i) / d + (o < i ? 6 : 0) : l === o ? (i - r) / d + 2 : (r - o) / d + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * c + .5)), n && p.length < 4 && (p[3] = 1), p
        },
        xt = function(e) {
          var t = [],
            n = [],
            r = -1;
          return e.split(Et).forEach(function(e) {
            var o = e.match(W) || [];
            t.push.apply(t, o), n.push(r += o.length + 1)
          }), t.c = n, t
        },
        St = function(e, t, n) {
          var r, o, i, s, a = "",
            c = (e + a).match(Et),
            l = t ? "hsla(" : "rgba(",
            u = 0;
          if (!c) return e;
          if (c = c.map(function(e) {
              return (e = wt(e, t, 1)) && l + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            }), n && (i = xt(e), (r = n.c).join(a) !== i.c.join(a)))
            for (s = (o = e.replace(Et, "1").split(W)).length - 1; u < s; u++) a += o[u] + (~r.indexOf(u) ? c.shift() || l + "0,0,0,0)" : (i.length ? i : c.length ? c : n).shift());
          if (!o)
            for (s = (o = e.split(Et)).length - 1; u < s; u++) a += o[u] + c[u];
          return a + o[s]
        },
        Et = function() {
          var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in _t) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        Tt = /hsl[a]?\(/,
        Ct = function(e) {
          var t, n = e.join(" ");
          if (Et.lastIndex = 0, Et.test(n)) return t = Tt.test(n), e[1] = St(e[1], t), e[0] = St(e[0], t, xt(e[1])), !0
        },
        kt = function() {
          var e, t, n, r, o, i, s = Date.now,
            a = 500,
            c = 33,
            p = s(),
            h = p,
            v = 1e3 / 240,
            g = v,
            y = [],
            _ = function n(l) {
              var u, d, f, m, _ = s() - h,
                b = !0 === l;
              if ((_ > a || _ < 0) && (p += _ - c), ((u = (f = (h += _) - p) - g) > 0 || b) && (m = ++r.frame, o = f - 1e3 * r.time, r.time = f /= 1e3, g += u + (u >= v ? 4 : v - u), d = 1), b || (e = t(n)), d)
                for (i = 0; i < y.length; i++) y[i](f, o, m, l)
            };
          return r = {
            time: 0,
            frame: 0,
            tick: function() {
              _(!0)
            },
            deltaRatio: function(e) {
              return o / (1e3 / (e || 60))
            },
            wake: function() {
              f && (!u && F() && (l = u = window, d = l.document || {}, X.gsap = kn, (l.gsapVersions || (l.gsapVersions = [])).push(kn.version), Q(Y || l.GreenSockGlobals || !l.gsap && l || {}), vt.forEach(gt)), n = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, e && r.sleep(), t = n || function(e) {
                return setTimeout(e, g - 1e3 * r.time + 1 | 0)
              }, m = 1, _(2))
            },
            sleep: function() {
              (n ? cancelAnimationFrame : clearTimeout)(e), m = 0, t = te
            },
            lagSmoothing: function(e, t) {
              a = e || 1 / 0, c = Math.min(t || 33, a)
            },
            fps: function(e) {
              v = 1e3 / (e || 240), g = 1e3 * r.time + v
            },
            add: function(e, t, n) {
              var o = t ? function(t, n, i, s) {
                e(t, n, i, s), r.remove(o)
              } : e;
              return r.remove(e), y[n ? "unshift" : "push"](o), Pt(), o
            },
            remove: function(e, t) {
              ~(t = y.indexOf(e)) && y.splice(t, 1) && i >= t && i--
            },
            _listeners: y
          }
        }(),
        Pt = function() {
          return !m && kt.wake()
        },
        Ot = {},
        Rt = /^[\d.\-M][\d.\-,\s]/,
        Mt = /["']/g,
        Dt = function(e) {
          for (var t, n, r, o = {}, i = e.substr(1, e.length - 3).split(":"), s = i[0], a = 1, c = i.length; a < c; a++) n = i[a], t = a !== c - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, t), o[s] = isNaN(r) ? r.replace(Mt, "").trim() : +r, s = n.substr(t + 1).trim();
          return o
        },
        At = function(e) {
          return function(t) {
            return 1 - e(1 - t)
          }
        },
        jt = function e(t, n) {
          for (var r, o = t._first; o;) o instanceof qt ? e(o, n) : !o.vars.yoyoEase || o._yoyo && o._repeat || o._yoyo === n || (o.timeline ? e(o.timeline, n) : (r = o._ease, o._ease = o._yEase, o._yEase = r, o._yoyo = n)), o = o._next
        },
        Lt = function(e, t) {
          return e && (A(e) ? e : Ot[e] || function(e) {
            var t, n, r, o, i = (e + "").split("("),
              s = Ot[i[0]];
            return s && i.length > 1 && s.config ? s.config.apply(null, ~e.indexOf("{") ? [Dt(i[1])] : (t = e, n = t.indexOf("(") + 1, r = t.indexOf(")"), o = t.indexOf("(", n), t.substring(n, ~o && o < r ? t.indexOf(")", r + 1) : r)).split(",").map(Se)) : Ot._CE && Rt.test(e) ? Ot._CE("", e) : s
          }(e)) || t
        },
        It = function(e, t, n, r) {
          void 0 === n && (n = function(e) {
            return 1 - t(1 - e)
          }), void 0 === r && (r = function(e) {
            return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
          });
          var o, i = {
            easeIn: t,
            easeOut: n,
            easeInOut: r
          };
          return ve(e, function(e) {
            for (var t in Ot[e] = X[e] = i, Ot[o = e.toLowerCase()] = n, i) Ot[o + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Ot[e + "." + t] = i[t]
          }), i
        },
        Nt = function(e) {
          return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
          }
        },
        Ft = function e(t, n, r) {
          var o = n >= 1 ? n : 1,
            i = (r || (t ? .3 : .45)) / (n < 1 ? n : 1),
            s = i / C * (Math.asin(1 / o) || 0),
            a = function(e) {
              return 1 === e ? 1 : o * Math.pow(2, -10 * e) * M((e - s) * i) + 1
            },
            c = "out" === t ? a : "in" === t ? function(e) {
              return 1 - a(1 - e)
            } : Nt(a);
          return i = C / i, c.config = function(n, r) {
            return e(t, n, r)
          }, c
        },
        zt = function e(t, n) {
          void 0 === n && (n = 1.70158);
          var r = function(e) {
              return e ? --e * e * ((n + 1) * e + n) + 1 : 0
            },
            o = "out" === t ? r : "in" === t ? function(e) {
              return 1 - r(1 - e)
            } : Nt(r);
          return o.config = function(n) {
            return e(t, n)
          }, o
        };
      ve("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
        var n = t < 5 ? t + 1 : t;
        It(e + ",Power" + (n - 1), t ? function(e) {
          return Math.pow(e, n)
        } : function(e) {
          return e
        }, function(e) {
          return 1 - Math.pow(1 - e, n)
        }, function(e) {
          return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2
        })
      }), Ot.Linear.easeNone = Ot.none = Ot.Linear.easeIn, It("Elastic", Ft("in"), Ft("out"), Ft()), v = 7.5625, _ = 2 * (y = 1 / (g = 2.75)), b = 2.5 * y, It("Bounce", function(e) {
        return 1 - w(1 - e)
      }, w = function(e) {
        return e < y ? v * e * e : e < _ ? v * Math.pow(e - 1.5 / g, 2) + .75 : e < b ? v * (e -= 2.25 / g) * e + .9375 : v * Math.pow(e - 2.625 / g, 2) + .984375
      }), It("Expo", function(e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
      }), It("Circ", function(e) {
        return -(O(1 - e * e) - 1)
      }), It("Sine", function(e) {
        return 1 === e ? 1 : 1 - R(e * k)
      }), It("Back", zt("in"), zt("out"), zt()), Ot.SteppedEase = Ot.steps = X.SteppedEase = {
        config: function(e, t) {
          void 0 === e && (e = 1);
          var n = 1 / e,
            r = e + (t ? 0 : 1),
            o = t ? 1 : 0;
          return function(e) {
            return ((r * Je(0, .99999999, e) | 0) + o) * n
          }
        }
      }, S.ease = Ot["quad.out"], ve("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
        return fe += e + "," + e + "Params,"
      });
      var Vt = function(e, t) {
          this.id = P++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : me, this.set = t ? t.getSetter : on
        },
        Bt = function() {
          function e(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ue(this, +e.duration, 1, 1), this.data = e.data, a && (this._ctx = a, a.data.push(this)), m || kt.wake()
          }
          var t = e.prototype;
          return t.delay = function(e) {
            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
          }, t.duration = function(e) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
          }, t.totalDuration = function(e) {
            return arguments.length ? (this._dirty = 0, Ue(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, t.totalTime = function(e, t) {
            if (Pt(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (Ve(this, e), !n._dp || n.parent || Be(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && qe(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === T || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), xe(this, e, t)), this
          }, t.time = function(e, t) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Ie(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
          }, t.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
          }, t.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Ie(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
          }, t.iteration = function(e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? Ne(this._tTime, n) + 1 : 1
          }, t.timeScale = function(e, t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var n = this.parent && this._ts ? Fe(this.parent._time, this) : this._tTime;
            return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Je(-Math.abs(this._delay), this._tDur, n), !1 !== t), ze(this),
              function(e) {
                for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                return e
              }(this)
          }, t.paused = function(e) {
            return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== T && (this._tTime -= T)))), this) : this._ps
          }, t.startTime = function(e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return t && (t._sort || !this.parent) && qe(t, this, e - this._delay), this
            }
            return this._start
          }, t.endTime = function(e) {
            return this._start + (N(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, t.rawTime = function(e) {
            var t = this.parent || this._dp;
            return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Fe(t.rawTime(e), this) : this._tTime : this._tTime
          }, t.revert = function(e) {
            void 0 === e && (e = oe);
            var t = s;
            return s = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), s = t, this
          }, t.globalTime = function(e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (Math.abs(t._ts) || 1), t = t._dp;
            return !this.parent && this._sat ? this._sat.globalTime(e) : n
          }, t.repeat = function(e) {
            return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Ge(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, t.repeatDelay = function(e) {
            if (arguments.length) {
              var t = this._time;
              return this._rDelay = e, Ge(this), t ? this.time(t) : this
            }
            return this._rDelay
          }, t.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
          }, t.seek = function(e, t) {
            return this.totalTime(Ye(this, e), N(t))
          }, t.restart = function(e, t) {
            return this.play().totalTime(e ? -this._delay : 0, N(t))
          }, t.play = function(e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
          }, t.reverse = function(e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
          }, t.pause = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
          }, t.resume = function() {
            return this.paused(!1)
          }, t.reversed = function(e) {
            return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
          }, t.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
          }, t.isActive = function() {
            var e, t = this.parent || this._dp,
              n = this._start;
            return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - T))
          }, t.eventCallback = function(e, t, n) {
            var r = this.vars;
            return arguments.length > 1 ? (t ? (r[e] = t, n && (r[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = t)) : delete r[e], this) : r[e]
          }, t.then = function(e) {
            var t = this;
            return new Promise(function(n) {
              var r = A(e) ? e : Ee,
                o = function() {
                  var e = t.then;
                  t.then = null, A(r) && (r = r(t)) && (r.then || r === t) && (t.then = e), n(r), t.then = e
                };
              t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? o() : t._prom = o
            })
          }, t.kill = function() {
            mt(this)
          }, e
        }();
      Te(Bt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
      });
      var qt = function(e) {
        function t(t, n) {
          var o;
          return void 0 === t && (t = {}), (o = e.call(this, t) || this).labels = {}, o.smoothChildTiming = !!t.smoothChildTiming, o.autoRemoveChildren = !!t.autoRemoveChildren, o._sort = N(t.sortChildren), c && qe(t.parent || c, r(o), n), t.reversed && o.reverse(), t.paused && o.paused(!0), t.scrollTrigger && Ke(r(o), t.scrollTrigger), o
        }
        o(t, e);
        var n = t.prototype;
        return n.to = function(e, t, n) {
          return Qe(0, arguments, this), this
        }, n.from = function(e, t, n) {
          return Qe(1, arguments, this), this
        }, n.fromTo = function(e, t, n, r) {
          return Qe(2, arguments, this), this
        }, n.set = function(e, t, n) {
          return t.duration = 0, t.parent = this, Oe(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Jt(e, t, Ye(this, n), 1), this
        }, n.call = function(e, t, n) {
          return qe(this, Jt.delayedCall(0, e, t), n)
        }, n.staggerTo = function(e, t, n, r, o, i, s) {
          return n.duration = t, n.stagger = n.stagger || r, n.onComplete = i, n.onCompleteParams = s, n.parent = this, new Jt(e, n, Ye(this, o)), this
        }, n.staggerFrom = function(e, t, n, r, o, i, s) {
          return n.runBackwards = 1, Oe(n).immediateRender = N(n.immediateRender), this.staggerTo(e, t, n, r, o, i, s)
        }, n.staggerFromTo = function(e, t, n, r, o, i, s, a) {
          return r.startAt = n, Oe(r).immediateRender = N(r.immediateRender), this.staggerTo(e, t, r, o, i, s, a)
        }, n.render = function(e, t, n) {
          var r, o, i, a, l, u, d, f, p, h, m, v, g = this._time,
            y = this._dirty ? this.totalDuration() : this._tDur,
            _ = this._dur,
            b = e <= 0 ? 0 : ye(e),
            w = this._zTime < 0 != e < 0 && (this._initted || !_);
          if (this !== c && b > y && e >= 0 && (b = y), b !== this._tTime || n || w) {
            if (g !== this._time && _ && (b += this._time - g, e += this._time - g), r = b, p = this._start, u = !(f = this._ts), w && (_ || (g = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (m = this._yoyo, l = _ + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * l + e, t, n);
              if (r = ye(b % l), b === y ? (a = this._repeat, r = _) : ((a = ~~(b / l)) && a === b / l && (r = _, a--), r > _ && (r = _)), h = Ne(this._tTime, l), !g && this._tTime && h !== a && this._tTime - h * l - this._dur <= 0 && (h = a), m && 1 & a && (r = _ - r, v = 1), a !== h && !this._lock) {
                var x = m && 1 & h,
                  S = x === (m && 1 & a);
                if (a < h && (x = !x), g = x ? 0 : b % _ ? _ : b, this._lock = 1, this.render(g || (v ? 0 : ye(a * l)), t, !_)._lock = 0, this._tTime = b, !t && this.parent && ht(this, "onRepeat"), this.vars.repeatRefresh && !v && (this.invalidate()._lock = 1), g && g !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (_ = this._dur, y = this._tDur, S && (this._lock = 2, g = x ? _ : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !v && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                jt(this, v)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (d = function(e, t, n) {
                var r;
                if (n > t)
                  for (r = e._first; r && r._start <= n;) {
                    if ("isPause" === r.data && r._start > t) return r;
                    r = r._next
                  } else
                    for (r = e._last; r && r._start >= n;) {
                      if ("isPause" === r.data && r._start < t) return r;
                      r = r._prev
                    }
              }(this, ye(g), ye(r)), d && (b -= r - (r = d._start))), this._tTime = b, this._time = r, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, g = 0), !g && r && !t && !a && (ht(this, "onStart"), this._tTime !== b)) return this;
            if (r >= g && e >= 0)
              for (o = this._first; o;) {
                if (i = o._next, (o._act || r >= o._start) && o._ts && d !== o) {
                  if (o.parent !== this) return this.render(e, t, n);
                  if (o.render(o._ts > 0 ? (r - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (r - o._start) * o._ts, t, n), r !== this._time || !this._ts && !u) {
                    d = 0, i && (b += this._zTime = -1e-8);
                    break
                  }
                }
                o = i
              } else {
                o = this._last;
                for (var E = e < 0 ? e : r; o;) {
                  if (i = o._prev, (o._act || E <= o._end) && o._ts && d !== o) {
                    if (o.parent !== this) return this.render(e, t, n);
                    if (o.render(o._ts > 0 ? (E - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (E - o._start) * o._ts, t, n || s && (o._initted || o._startAt)), r !== this._time || !this._ts && !u) {
                      d = 0, i && (b += this._zTime = E ? -1e-8 : T);
                      break
                    }
                  }
                  o = i
                }
              }
            if (d && !t && (this.pause(), d.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = p, ze(this), this.render(e, t, n);
            this._onUpdate && !t && ht(this, "onUpdate", !0), (b === y && this._tTime >= this.totalDuration() || !b && g) && (p !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((e || !_) && (b === y && this._ts > 0 || !b && this._ts < 0) && De(this, 1), t || e < 0 && !g || !b && !g && y || (ht(this, b === y && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < y && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, n.add = function(e, t) {
          var n = this;
          if (j(t) || (t = Ye(this, t, e)), !(e instanceof Bt)) {
            if (B(e)) return e.forEach(function(e) {
              return n.add(e, t)
            }), this;
            if (D(e)) return this.addLabel(e, t);
            if (!A(e)) return this;
            e = Jt.delayedCall(0, e)
          }
          return this !== e ? qe(this, e, t) : this
        }, n.getChildren = function(e, t, n, r) {
          void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === r && (r = -E);
          for (var o = [], i = this._first; i;) i._start >= r && (i instanceof Jt ? t && o.push(i) : (n && o.push(i), e && o.push.apply(o, i.getChildren(!0, t, n)))), i = i._next;
          return o
        }, n.getById = function(e) {
          for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
            if (t[n].vars.id === e) return t[n]
        }, n.remove = function(e) {
          return D(e) ? this.removeLabel(e) : A(e) ? this.killTweensOf(e) : (Me(this, e), e === this._recent && (this._recent = this._last), Ae(this))
        }, n.totalTime = function(t, n) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ye(kt.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(e, t) {
          return this.labels[e] = Ye(this, t), this
        }, n.removeLabel = function(e) {
          return delete this.labels[e], this
        }, n.addPause = function(e, t, n) {
          var r = Jt.delayedCall(0, t || te, n);
          return r.data = "isPause", this._hasPause = 1, qe(this, r, Ye(this, e))
        }, n.removePause = function(e) {
          var t = this._first;
          for (e = Ye(this, e); t;) t._start === e && "isPause" === t.data && De(t), t = t._next
        }, n.killTweensOf = function(e, t, n) {
          for (var r = this.getTweensOf(e, n), o = r.length; o--;) Kt !== r[o] && r[o].kill(e, t);
          return this
        }, n.getTweensOf = function(e, t) {
          for (var n, r = [], o = rt(e), i = this._first, s = j(t); i;) i instanceof Jt ? be(i._targets, o) && (s ? (!Kt || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && r.push(i) : (n = i.getTweensOf(o, t)).length && r.push.apply(r, n), i = i._next;
          return r
        }, n.tweenTo = function(e, t) {
          t = t || {};
          var n, r = this,
            o = Ye(r, e),
            i = t,
            s = i.startAt,
            a = i.onStart,
            c = i.onStartParams,
            l = i.immediateRender,
            u = Jt.to(r, Te({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration: t.duration || Math.abs((o - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || T,
              onStart: function() {
                if (r.pause(), !n) {
                  var e = t.duration || Math.abs((o - (s && "time" in s ? s.time : r._time)) / r.timeScale());
                  u._dur !== e && Ue(u, e, 0, 1).render(u._time, !0, !0), n = 1
                }
                a && a.apply(u, c || [])
              }
            }, t));
          return l ? u.render(0) : u
        }, n.tweenFromTo = function(e, t, n) {
          return this.tweenTo(t, Te({
            startAt: {
              time: Ye(this, e)
            }
          }, n))
        }, n.recent = function() {
          return this._recent
        }, n.nextLabel = function(e) {
          return void 0 === e && (e = this._time), pt(this, Ye(this, e))
        }, n.previousLabel = function(e) {
          return void 0 === e && (e = this._time), pt(this, Ye(this, e), 1)
        }, n.currentLabel = function(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + T)
        }, n.shiftChildren = function(e, t, n) {
          void 0 === n && (n = 0);
          for (var r, o = this._first, i = this.labels; o;) o._start >= n && (o._start += e, o._end += e), o = o._next;
          if (t)
            for (r in i) i[r] >= n && (i[r] += e);
          return Ae(this)
        }, n.invalidate = function(t) {
          var n = this._first;
          for (this._lock = 0; n;) n.invalidate(t), n = n._next;
          return e.prototype.invalidate.call(this, t)
        }, n.clear = function(e) {
          void 0 === e && (e = !0);
          for (var t, n = this._first; n;) t = n._next, this.remove(n), n = t;
          return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Ae(this)
        }, n.totalDuration = function(e) {
          var t, n, r, o = 0,
            i = this,
            s = i._last,
            a = E;
          if (arguments.length) return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -e : e));
          if (i._dirty) {
            for (r = i.parent; s;) t = s._prev, s._dirty && s.totalDuration(), (n = s._start) > a && i._sort && s._ts && !i._lock ? (i._lock = 1, qe(i, s, n - s._delay, 1)._lock = 0) : a = n, n < 0 && s._ts && (o -= n, (!r && !i._dp || r && r.smoothChildTiming) && (i._start += n / i._ts, i._time -= n, i._tTime -= n), i.shiftChildren(-n, !1, -1 / 0), a = 0), s._end > o && s._ts && (o = s._end), s = t;
            Ue(i, i === c && i._time > o ? i._time : o, 1, 1), i._dirty = 0
          }
          return i._tDur
        }, t.updateRoot = function(e) {
          if (c._ts && (xe(c, Fe(e, c)), p = kt.frame), kt.frame >= ue) {
            ue += x.autoSleep || 120;
            var t = c._first;
            if ((!t || !t._ts) && x.autoSleep && kt._listeners.length < 2) {
              for (; t && !t._ts;) t = t._next;
              t || kt.sleep()
            }
          }
        }, t
      }(Bt);
      Te(qt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var Kt, Wt, Ht = function(e, t, n, r, o, i, s) {
          var a, c, l, u, d, f, p, h, m = new hn(this._pt, e, t, 0, 1, cn, null, o),
            v = 0,
            g = 0;
          for (m.b = n, m.e = r, n += "", (p = ~(r += "").indexOf("random(")) && (r = dt(r)), i && (i(h = [n, r], e, t), n = h[0], r = h[1]), c = n.match(H) || []; a = H.exec(r);) u = a[0], d = r.substring(v, a.index), l ? l = (l + 1) % 5 : "rgba(" === d.substr(-5) && (l = 1), u !== c[g++] && (f = parseFloat(c[g - 1]) || 0, m._pt = {
            _next: m._pt,
            p: d || 1 === g ? d : ",",
            s: f,
            c: "=" === u.charAt(1) ? _e(f, u) - f : parseFloat(u) - f,
            m: l && l < 4 ? Math.round : 0
          }, v = H.lastIndex);
          return m.c = v < r.length ? r.substring(v, r.length) : "", m.fp = s, ($.test(r) || p) && (m.e = 0), this._pt = m, m
        },
        $t = function(e, t, n, r, o, i, s, a, c, l) {
          A(r) && (r = r(o || 0, e, i));
          var u, d = e[t],
            f = "get" !== n ? n : A(d) ? c ? e[t.indexOf("set") || !A(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : d,
            p = A(d) ? c ? nn : tn : en;
          if (D(r) && (~r.indexOf("random(") && (r = dt(r)), "=" === r.charAt(1) && ((u = _e(f, r) + (et(f) || 0)) || 0 === u) && (r = u)), !l || f !== r || Wt) return isNaN(f * r) || "" === r ? (!d && !(t in e) && Z(t, r), Ht.call(this, e, t, f, r, p, a || x.stringFilter, c)) : (u = new hn(this._pt, e, t, +f || 0, r - (f || 0), "boolean" == typeof d ? an : sn, 0, p), c && (u.fp = c), s && u.modifier(s, this, e), this._pt = u)
        },
        Ut = function(e, t, n, r, o, i) {
          var s, a, c, l;
          if (ce[e] && !1 !== (s = new ce[e]).init(o, s.rawVars ? t[e] : function(e, t, n, r, o) {
              if (A(e) && (e = Yt(e, o, t, n, r)), !I(e) || e.style && e.nodeType || B(e) || V(e)) return D(e) ? Yt(e, o, t, n, r) : e;
              var i, s = {};
              for (i in e) s[i] = Yt(e[i], o, t, n, r);
              return s
            }(t[e], r, o, i, n), n, r, i) && (n._pt = a = new hn(n._pt, o, e, 0, 1, s.render, s, 0, s.priority), n !== h))
            for (c = n._ptLookup[n._targets.indexOf(o)], l = s._props.length; l--;) c[s._props[l]] = a;
          return s
        },
        Gt = function e(t, n, r) {
          var o, a, l, u, d, f, p, h, m, v, g, y, _, b = t.vars,
            w = b.ease,
            x = b.startAt,
            C = b.immediateRender,
            k = b.lazy,
            P = b.onUpdate,
            O = b.runBackwards,
            R = b.yoyoEase,
            M = b.keyframes,
            D = b.autoRevert,
            A = t._dur,
            j = t._startAt,
            L = t._targets,
            I = t.parent,
            F = I && "nested" === I.data ? I.vars.targets : L,
            z = "auto" === t._overwrite && !i,
            V = t.timeline;
          if (V && (!M || !w) && (w = "none"), t._ease = Lt(w, S.ease), t._yEase = R ? At(Lt(!0 === R ? w : R, S.ease)) : 0, R && t._yoyo && !t._repeat && (R = t._yEase, t._yEase = t._ease, t._ease = R), t._from = !V && !!b.runBackwards, !V || M && !b.stagger) {
            if (y = (h = L[0] ? he(L[0]).harness : 0) && b[h.prop], o = Pe(b, ie), j && (j._zTime < 0 && j.progress(1), n < 0 && O && C && !D ? j.render(-1, !0) : j.revert(O && A ? re : ne), j._lazy = 0), x) {
              if (De(t._startAt = Jt.set(L, Te({
                  data: "isStart",
                  overwrite: !1,
                  parent: I,
                  immediateRender: !0,
                  lazy: !j && N(k),
                  startAt: null,
                  delay: 0,
                  onUpdate: P && function() {
                    return ht(t, "onUpdate")
                  },
                  stagger: 0
                }, x))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (s || !C && !D) && t._startAt.revert(re), C && A && n <= 0 && r <= 0) return void(n && (t._zTime = n))
            } else if (O && A && !j)
              if (n && (C = !1), l = Te({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: C && !j && N(k),
                  immediateRender: C,
                  stagger: 0,
                  parent: I
                }, o), y && (l[h.prop] = y), De(t._startAt = Jt.set(L, l)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (s ? t._startAt.revert(re) : t._startAt.render(-1, !0)), t._zTime = n, C) {
                if (!n) return
              } else e(t._startAt, T, T);
            for (t._pt = t._ptCache = 0, k = A && N(k) || k && !A, a = 0; a < L.length; a++) {
              if (p = (d = L[a])._gsap || pe(L)[a]._gsap, t._ptLookup[a] = v = {}, ae[p.id] && se.length && we(), g = F === L ? a : F.indexOf(d), h && !1 !== (m = new h).init(d, y || o, t, g, F) && (t._pt = u = new hn(t._pt, d, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach(function(e) {
                  v[e] = u
                }), m.priority && (f = 1)), !h || y)
                for (l in o) ce[l] && (m = Ut(l, o, t, g, d, F)) ? m.priority && (f = 1) : v[l] = u = $t.call(t, d, l, "get", o[l], g, F, 0, b.stringFilter);
              t._op && t._op[a] && t.kill(d, t._op[a]), z && t._pt && (Kt = t, c.killTweensOf(d, v, t.globalTime(n)), _ = !t.parent, Kt = 0), t._pt && k && (ae[p.id] = 1)
            }
            f && pn(t), t._onInit && t._onInit(t)
          }
          t._onUpdate = P, t._initted = (!t._op || t._pt) && !_, M && n <= 0 && V.render(E, !0, !0)
        },
        Xt = function(e, t, n, r) {
          var o, i, s = t.ease || r || "power1.inOut";
          if (B(t)) i = n[e] || (n[e] = []), t.forEach(function(e, n) {
            return i.push({
              t: n / (t.length - 1) * 100,
              v: e,
              e: s
            })
          });
          else
            for (o in t) i = n[o] || (n[o] = []), "ease" === o || i.push({
              t: parseFloat(e),
              v: t[o],
              e: s
            })
        },
        Yt = function(e, t, n, r, o) {
          return A(e) ? e.call(t, n, r, o) : D(e) && ~e.indexOf("random(") ? dt(e) : e
        },
        Qt = fe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Zt = {};
      ve(Qt + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
        return Zt[e] = 1
      });
      var Jt = function(e) {
        function t(t, n, o, s) {
          var a;
          "number" == typeof n && (o.duration = n, n = o, o = null);
          var l, u, d, f, p, h, m, v, g = (a = e.call(this, s ? n : Oe(n)) || this).vars,
            y = g.duration,
            _ = g.delay,
            b = g.immediateRender,
            w = g.stagger,
            S = g.overwrite,
            E = g.keyframes,
            T = g.defaults,
            C = g.scrollTrigger,
            k = g.yoyoEase,
            P = n.parent || c,
            O = (B(t) || V(t) ? j(t[0]) : "length" in n) ? [t] : rt(t);
          if (a._targets = O.length ? pe(O) : J("GSAP target " + t + " not found. https://gsap.com", !x.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = S, E || w || z(y) || z(_)) {
            if (n = a.vars, (l = a.timeline = new qt({
                data: "nested",
                defaults: T || {},
                targets: P && "nested" === P.data ? P.vars.targets : O
              })).kill(), l.parent = l._dp = r(a), l._start = 0, w || z(y) || z(_)) {
              if (f = O.length, m = w && st(w), I(w))
                for (p in w) ~Qt.indexOf(p) && (v || (v = {}), v[p] = w[p]);
              for (u = 0; u < f; u++)(d = Pe(n, Zt)).stagger = 0, k && (d.yoyoEase = k), v && Ce(d, v), h = O[u], d.duration = +Yt(y, r(a), u, h, O), d.delay = (+Yt(_, r(a), u, h, O) || 0) - a._delay, !w && 1 === f && d.delay && (a._delay = _ = d.delay, a._start += _, d.delay = 0), l.to(h, d, m ? m(u, h, O) : 0), l._ease = Ot.none;
              l.duration() ? y = _ = 0 : a.timeline = 0
            } else if (E) {
              Oe(Te(l.vars.defaults, {
                ease: "none"
              })), l._ease = Lt(E.ease || n.ease || "none");
              var R, M, D, A = 0;
              if (B(E)) E.forEach(function(e) {
                return l.to(O, e, ">")
              }), l.duration();
              else {
                for (p in d = {}, E) "ease" === p || "easeEach" === p || Xt(p, E[p], d, E.easeEach);
                for (p in d)
                  for (R = d[p].sort(function(e, t) {
                      return e.t - t.t
                    }), A = 0, u = 0; u < R.length; u++)(D = {
                    ease: (M = R[u]).e,
                    duration: (M.t - (u ? R[u - 1].t : 0)) / 100 * y
                  })[p] = M.v, l.to(O, D, A), A += D.duration;
                l.duration() < y && l.to({}, {
                  duration: y - l.duration()
                })
              }
            }
            y || a.duration(y = l.duration())
          } else a.timeline = 0;
          return !0 !== S || i || (Kt = r(a), c.killTweensOf(O), Kt = 0), qe(P, r(a), o), n.reversed && a.reverse(), n.paused && a.paused(!0), (b || !y && !E && a._start === ye(P._time) && N(b) && Le(r(a)) && "nested" !== P.data) && (a._tTime = -1e-8, a.render(Math.max(0, -_) || 0)), C && Ke(r(a), C), a
        }
        o(t, e);
        var n = t.prototype;
        return n.render = function(e, t, n) {
          var r, o, i, a, c, l, u, d, f, p = this._time,
            h = this._tDur,
            m = this._dur,
            v = e < 0,
            g = e > h - T && !v ? h : e < T ? 0 : e;
          if (m) {
            if (g !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== v) {
              if (r = g, d = this.timeline, this._repeat) {
                if (a = m + this._rDelay, this._repeat < -1 && v) return this.totalTime(100 * a + e, t, n);
                if (r = ye(g % a), g === h ? (i = this._repeat, r = m) : ((i = ~~(g / a)) && i === ye(g / a) && (r = m, i--), r > m && (r = m)), (l = this._yoyo && 1 & i) && (f = this._yEase, r = m - r), c = Ne(this._tTime, a), r === p && !n && this._initted && i === c) return this._tTime = g, this;
                i !== c && (d && this._yEase && jt(d, l), this.vars.repeatRefresh && !l && !this._lock && this._time !== a && this._initted && (this._lock = n = 1, this.render(ye(a * i), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (We(this, v ? e : r, n, t, g)) return this._tTime = 0, this;
                if (!(p === this._time || n && this.vars.repeatRefresh && i !== c)) return this;
                if (m !== this._dur) return this.render(e, t, n)
              }
              if (this._tTime = g, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (f || this._ease)(r / m), this._from && (this.ratio = u = 1 - u), r && !p && !t && !i && (ht(this, "onStart"), this._tTime !== g)) return this;
              for (o = this._pt; o;) o.r(u, o.d), o = o._next;
              d && d.render(e < 0 ? e : d._dur * d._ease(r / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (v && je(this, e, 0, n), ht(this, "onUpdate")), this._repeat && i !== c && this.vars.onRepeat && !t && this.parent && ht(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (v && !this._onUpdate && je(this, e, 0, !0), (e || !m) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && De(this, 1), t || v && !p || !(g || p || l) || (ht(this, g === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < h && this.timeScale() > 0) && this._prom()))
            }
          } else ! function(e, t, n, r) {
            var o, i, a, c = e.ratio,
              l = t < 0 || !t && (!e._start && He(e) && (e._initted || !$e(e)) || (e._ts < 0 || e._dp._ts < 0) && !$e(e)) ? 0 : 1,
              u = e._rDelay,
              d = 0;
            if (u && e._repeat && (d = Je(0, e._tDur, t), i = Ne(d, u), e._yoyo && 1 & i && (l = 1 - l), i !== Ne(e._tTime, u) && (c = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== c || s || r || e._zTime === T || !t && e._zTime) {
              if (!e._initted && We(e, t, r, n, d)) return;
              for (a = e._zTime, e._zTime = t || (n ? T : 0), n || (n = t && !a), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = d, o = e._pt; o;) o.r(l, o.d), o = o._next;
              t < 0 && je(e, t, 0, !0), e._onUpdate && !n && ht(e, "onUpdate"), d && e._repeat && !n && e.parent && ht(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && De(e, 1), n || s || (ht(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = t)
          }(this, e, t, n);
          return this
        }, n.targets = function() {
          return this._targets
        }, n.invalidate = function(t) {
          return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
        }, n.resetTo = function(e, t, n, r, o) {
          m || kt.wake(), this._ts || this.play();
          var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Gt(this, i),
            function(e, t, n, r, o, i, s, a) {
              var c, l, u, d, f = (e._pt && e._ptCache || (e._ptCache = {}))[t];
              if (!f)
                for (f = e._ptCache[t] = [], u = e._ptLookup, d = e._targets.length; d--;) {
                  if ((c = u[d][t]) && c.d && c.d._pt)
                    for (c = c.d._pt; c && c.p !== t && c.fp !== t;) c = c._next;
                  if (!c) return Wt = 1, e.vars[t] = "+=0", Gt(e, s), Wt = 0, a ? J(t + " not eligible for reset") : 1;
                  f.push(c)
                }
              for (d = f.length; d--;)(c = (l = f[d])._pt || l).s = !r && 0 !== r || o ? c.s + (r || 0) + i * c.c : r, c.c = n - c.s, l.e && (l.e = ge(n) + et(l.e)), l.b && (l.b = c.s + et(l.b))
            }(this, e, t, n, r, this._ease(i / this._dur), i, o) ? this.resetTo(e, t, n, r, 1) : (Ve(this, 0), this.parent || Re(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, n.kill = function(e, t) {
          if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? mt(this) : this;
          if (this.timeline) {
            var n = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Kt && !0 !== Kt.vars.overwrite)._first || mt(this), this.parent && n !== this.timeline.totalDuration() && Ue(this, this._dur * this.timeline._tDur / n, 0, 1), this
          }
          var r, o, i, s, a, c, l, u = this._targets,
            d = e ? rt(e) : u,
            f = this._ptLookup,
            p = this._pt;
          if ((!t || "all" === t) && function(e, t) {
              for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
              return n < 0
            }(u, d)) return "all" === t && (this._pt = 0), mt(this);
          for (r = this._op = this._op || [], "all" !== t && (D(t) && (a = {}, ve(t, function(e) {
              return a[e] = 1
            }), t = a), t = function(e, t) {
              var n, r, o, i, s = e[0] ? he(e[0]).harness : 0,
                a = s && s.aliases;
              if (!a) return t;
              for (r in n = Ce({}, t), a)
                if (r in n)
                  for (o = (i = a[r].split(",")).length; o--;) n[i[o]] = n[r];
              return n
            }(u, t)), l = u.length; l--;)
            if (~d.indexOf(u[l]))
              for (a in o = f[l], "all" === t ? (r[l] = t, s = o, i = {}) : (i = r[l] = r[l] || {}, s = t), s)(c = o && o[a]) && ("kill" in c.d && !0 !== c.d.kill(a) || Me(this, c, "_pt"), delete o[a]), "all" !== i && (i[a] = 1);
          return this._initted && !this._pt && p && mt(this), this
        }, t.to = function(e, n) {
          return new t(e, n, arguments[2])
        }, t.from = function(e, t) {
          return Qe(1, arguments)
        }, t.delayedCall = function(e, n, r, o) {
          return new t(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: o
          })
        }, t.fromTo = function(e, t, n) {
          return Qe(2, arguments)
        }, t.set = function(e, n) {
          return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(e, n)
        }, t.killTweensOf = function(e, t, n) {
          return c.killTweensOf(e, t, n)
        }, t
      }(Bt);
      Te(Jt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), ve("staggerTo,staggerFrom,staggerFromTo", function(e) {
        Jt[e] = function() {
          var t = new qt,
            n = tt.call(arguments, 0);
          return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
        }
      });
      var en = function(e, t, n) {
          return e[t] = n
        },
        tn = function(e, t, n) {
          return e[t](n)
        },
        nn = function(e, t, n, r) {
          return e[t](r.fp, n)
        },
        rn = function(e, t, n) {
          return e.setAttribute(t, n)
        },
        on = function(e, t) {
          return A(e[t]) ? tn : L(e[t]) && e.setAttribute ? rn : en
        },
        sn = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
        },
        an = function(e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        },
        cn = function(e, t) {
          var n = t._pt,
            r = "";
          if (!e && t.b) r = t.b;
          else if (1 === e && t.e) r = t.e;
          else {
            for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + r, n = n._next;
            r += t.c
          }
          t.set(t.t, t.p, r, t)
        },
        ln = function(e, t) {
          for (var n = t._pt; n;) n.r(e, n.d), n = n._next
        },
        un = function(e, t, n, r) {
          for (var o, i = this._pt; i;) o = i._next, i.p === r && i.modifier(e, t, n), i = o
        },
        dn = function(e) {
          for (var t, n, r = this._pt; r;) n = r._next, r.p === e && !r.op || r.op === e ? Me(this, r, "_pt") : r.dep || (t = 1), r = n;
          return !t
        },
        fn = function(e, t, n, r) {
          r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
        },
        pn = function(e) {
          for (var t, n, r, o, i = e._pt; i;) {
            for (t = i._next, n = r; n && n.pr > i.pr;) n = n._next;
            (i._prev = n ? n._prev : o) ? i._prev._next = i: r = i, (i._next = n) ? n._prev = i : o = i, i = t
          }
          e._pt = r
        },
        hn = function() {
          function e(e, t, n, r, o, i, s, a, c) {
            this.t = t, this.s = r, this.c = o, this.p = n, this.r = i || sn, this.d = s || this, this.set = a || en, this.pr = c || 0, this._next = e, e && (e._prev = this)
          }
          return e.prototype.modifier = function(e, t, n) {
            this.mSet = this.mSet || this.set, this.set = fn, this.m = e, this.mt = n, this.tween = t
          }, e
        }();
      ve(fe + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
        return ie[e] = 1
      }), X.TweenMax = X.TweenLite = Jt, X.TimelineLite = X.TimelineMax = qt, c = new qt({
        sortChildren: !1,
        defaults: S,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), x.stringFilter = Ct;
      var mn = [],
        vn = {},
        gn = [],
        yn = 0,
        _n = 0,
        bn = function(e) {
          return (vn[e] || gn).map(function(e) {
            return e()
          })
        },
        wn = function() {
          var e = Date.now(),
            t = [];
          e - yn > 2 && (bn("matchMediaInit"), mn.forEach(function(e) {
            var n, r, o, i, s = e.queries,
              a = e.conditions;
            for (r in s)(n = l.matchMedia(s[r]).matches) && (o = 1), n !== a[r] && (a[r] = n, i = 1);
            i && (e.revert(), o && t.push(e))
          }), bn("matchMediaRevert"), t.forEach(function(e) {
            return e.onMatch(e, function(t) {
              return e.add(null, t)
            })
          }), yn = e, bn("matchMedia"))
        },
        xn = function() {
          function e(e, t) {
            this.selector = t && ot(t), this.data = [], this._r = [], this.isReverted = !1, this.id = _n++, e && this.add(e)
          }
          var t = e.prototype;
          return t.add = function(e, t, n) {
            A(e) && (n = t, t = e, e = A);
            var r = this,
              o = function() {
                var e, o = a,
                  i = r.selector;
                return o && o !== r && o.data.push(r), n && (r.selector = ot(n)), a = r, e = t.apply(r, arguments), A(e) && r._r.push(e), a = o, r.selector = i, r.isReverted = !1, e
              };
            return r.last = o, e === A ? o(r, function(e) {
              return r.add(null, e)
            }) : e ? r[e] = o : o
          }, t.ignore = function(e) {
            var t = a;
            a = null, e(this), a = t
          }, t.getTweens = function() {
            var t = [];
            return this.data.forEach(function(n) {
              return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof Jt && !(n.parent && "nested" === n.parent.data) && t.push(n)
            }), t
          }, t.clear = function() {
            this._r.length = this.data.length = 0
          }, t.kill = function(e, t) {
            var n = this;
            if (e ? function() {
                for (var t, r = n.getTweens(), o = n.data.length; o--;) "isFlip" === (t = n.data[o]).data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(e) {
                  return r.splice(r.indexOf(e), 1)
                }));
                for (r.map(function(e) {
                    return {
                      g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0,
                      t: e
                    }
                  }).sort(function(e, t) {
                    return t.g - e.g || -1 / 0
                  }).forEach(function(t) {
                    return t.t.revert(e)
                  }), o = n.data.length; o--;)(t = n.data[o]) instanceof qt ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : !(t instanceof Jt) && t.revert && t.revert(e);
                n._r.forEach(function(t) {
                  return t(e, n)
                }), n.isReverted = !0
              }() : this.data.forEach(function(e) {
                return e.kill && e.kill()
              }), this.clear(), t)
              for (var r = mn.length; r--;) mn[r].id === this.id && mn.splice(r, 1)
          }, t.revert = function(e) {
            this.kill(e || {})
          }, e
        }(),
        Sn = function() {
          function e(e) {
            this.contexts = [], this.scope = e, a && a.data.push(this)
          }
          var t = e.prototype;
          return t.add = function(e, t, n) {
            I(e) || (e = {
              matches: e
            });
            var r, o, i, s = new xn(0, n || this.scope),
              c = s.conditions = {};
            for (o in a && !s.selector && (s.selector = a.selector), this.contexts.push(s), t = s.add("onMatch", t), s.queries = e, e) "all" === o ? i = 1 : (r = l.matchMedia(e[o])) && (mn.indexOf(s) < 0 && mn.push(s), (c[o] = r.matches) && (i = 1), r.addListener ? r.addListener(wn) : r.addEventListener("change", wn));
            return i && t(s, function(e) {
              return s.add(null, e)
            }), this
          }, t.revert = function(e) {
            this.kill(e || {})
          }, t.kill = function(e) {
            this.contexts.forEach(function(t) {
              return t.kill(e, !0)
            })
          }, e
        }(),
        En = {
          registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t.forEach(function(e) {
              return gt(e)
            })
          },
          timeline: function(e) {
            return new qt(e)
          },
          getTweensOf: function(e, t) {
            return c.getTweensOf(e, t)
          },
          getProperty: function(e, t, n, r) {
            D(e) && (e = rt(e)[0]);
            var o = he(e || {}).get,
              i = n ? Ee : Se;
            return "native" === n && (n = ""), e ? t ? i((ce[t] && ce[t].get || o)(e, t, n, r)) : function(t, n, r) {
              return i((ce[t] && ce[t].get || o)(e, t, n, r))
            } : e
          },
          quickSetter: function(e, t, n) {
            if ((e = rt(e)).length > 1) {
              var r = e.map(function(e) {
                  return kn.quickSetter(e, t, n)
                }),
                o = r.length;
              return function(e) {
                for (var t = o; t--;) r[t](e)
              }
            }
            e = e[0] || {};
            var i = ce[t],
              s = he(e),
              a = s.harness && (s.harness.aliases || {})[t] || t,
              c = i ? function(t) {
                var r = new i;
                h._pt = 0, r.init(e, n ? t + n : t, h, 0, [e]), r.render(1, r), h._pt && ln(1, h)
              } : s.set(e, a);
            return i ? c : function(t) {
              return c(e, a, n ? t + n : t, s, 1)
            }
          },
          quickTo: function(e, t, n) {
            var r, o = kn.to(e, Ce(((r = {})[t] = "+=0.1", r.paused = !0, r), n || {})),
              i = function(e, n, r) {
                return o.resetTo(t, e, n, r)
              };
            return i.tween = o, i
          },
          isTweening: function(e) {
            return c.getTweensOf(e, !0).length > 0
          },
          defaults: function(e) {
            return e && e.ease && (e.ease = Lt(e.ease, S.ease)), ke(S, e || {})
          },
          config: function(e) {
            return ke(x, e || {})
          },
          registerEffect: function(e) {
            var t = e.name,
              n = e.effect,
              r = e.plugins,
              o = e.defaults,
              i = e.extendTimeline;
            (r || "").split(",").forEach(function(e) {
              return e && !ce[e] && !X[e] && J(t + " effect requires " + e + " plugin.")
            }), le[t] = function(e, t, r) {
              return n(rt(e), Te(t || {}, o), r)
            }, i && (qt.prototype[t] = function(e, n, r) {
              return this.add(le[t](e, I(n) ? n : (r = n) && {}, this), r)
            })
          },
          registerEase: function(e, t) {
            Ot[e] = Lt(t)
          },
          parseEase: function(e, t) {
            return arguments.length ? Lt(e, t) : Ot
          },
          getById: function(e) {
            return c.getById(e)
          },
          exportRoot: function(e, t) {
            void 0 === e && (e = {});
            var n, r, o = new qt(e);
            for (o.smoothChildTiming = N(e.smoothChildTiming), c.remove(o), o._dp = 0, o._time = o._tTime = c._time, n = c._first; n;) r = n._next, !t && !n._dur && n instanceof Jt && n.vars.onComplete === n._targets[0] || qe(o, n, n._start - n._delay), n = r;
            return qe(c, o, 0), o
          },
          context: function(e, t) {
            return e ? new xn(e, t) : a
          },
          matchMedia: function(e) {
            return new Sn(e)
          },
          matchMediaRefresh: function() {
            return mn.forEach(function(e) {
              var t, n, r = e.conditions;
              for (n in r) r[n] && (r[n] = !1, t = 1);
              t && e.revert()
            }) || wn()
          },
          addEventListener: function(e, t) {
            var n = vn[e] || (vn[e] = []);
            ~n.indexOf(t) || n.push(t)
          },
          removeEventListener: function(e, t) {
            var n = vn[e],
              r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1)
          },
          utils: {
            wrap: function e(t, n, r) {
              var o = n - t;
              return B(t) ? ut(t, e(0, t.length), n) : Ze(r, function(e) {
                return (o + (e - t) % o) % o + t
              })
            },
            wrapYoyo: function e(t, n, r) {
              var o = n - t,
                i = 2 * o;
              return B(t) ? ut(t, e(0, t.length - 1), n) : Ze(r, function(e) {
                return t + ((e = (i + (e - t) % i) % i || 0) > o ? i - e : e)
              })
            },
            distribute: st,
            random: lt,
            snap: ct,
            normalize: function(e, t, n) {
              return ft(e, t, 0, 1, n)
            },
            getUnit: et,
            clamp: function(e, t, n) {
              return Ze(n, function(n) {
                return Je(e, t, n)
              })
            },
            splitColor: wt,
            toArray: rt,
            selector: ot,
            mapRange: ft,
            pipe: function() {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return function(e) {
                return t.reduce(function(e, t) {
                  return t(e)
                }, e)
              }
            },
            unitize: function(e, t) {
              return function(n) {
                return e(parseFloat(n)) + (t || et(n))
              }
            },
            interpolate: function e(t, n, r, o) {
              var i = isNaN(t + n) ? 0 : function(e) {
                return (1 - e) * t + e * n
              };
              if (!i) {
                var s, a, c, l, u, d = D(t),
                  f = {};
                if (!0 === r && (o = 1) && (r = null), d) t = {
                  p: t
                }, n = {
                  p: n
                };
                else if (B(t) && !B(n)) {
                  for (c = [], l = t.length, u = l - 2, a = 1; a < l; a++) c.push(e(t[a - 1], t[a]));
                  l--, i = function(e) {
                    e *= l;
                    var t = Math.min(u, ~~e);
                    return c[t](e - t)
                  }, r = n
                } else o || (t = Ce(B(t) ? [] : {}, t));
                if (!c) {
                  for (s in n) $t.call(f, t, s, "get", n[s]);
                  i = function(e) {
                    return ln(e, f) || (d ? t.p : t)
                  }
                }
              }
              return Ze(r, i)
            },
            shuffle: it
          },
          install: Q,
          effects: le,
          ticker: kt,
          updateRoot: qt.updateRoot,
          plugins: ce,
          globalTimeline: c,
          core: {
            PropTween: hn,
            globals: ee,
            Tween: Jt,
            Timeline: qt,
            Animation: Bt,
            getCache: he,
            _removeLinkedListItem: Me,
            reverting: function() {
              return s
            },
            context: function(e) {
              return e && a && (a.data.push(e), e._ctx = a), a
            },
            suppressOverwrites: function(e) {
              return i = e
            }
          }
        };
      ve("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
        return En[e] = Jt[e]
      }), kt.add(qt.updateRoot), h = En.to({}, {
        duration: 0
      });
      var Tn = function(e, t) {
          for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
          return n
        },
        Cn = function(e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function(e, n, r) {
              r._onInit = function(e) {
                var r, o;
                if (D(n) && (r = {}, ve(n, function(e) {
                    return r[e] = 1
                  }), n = r), t) {
                  for (o in r = {}, n) r[o] = t(n[o]);
                  n = r
                }! function(e, t) {
                  var n, r, o, i = e._targets;
                  for (n in t)
                    for (r = i.length; r--;)(o = e._ptLookup[r][n]) && (o = o.d) && (o._pt && (o = Tn(o, n)), o && o.modifier && o.modifier(t[n], e, i[r], n))
                }(e, n)
              }
            }
          }
        },
        kn = En.registerPlugin({
          name: "attr",
          init: function(e, t, n, r, o) {
            var i, s, a;
            for (i in this.tween = n, t) a = e.getAttribute(i) || "", (s = this.add(e, "setAttribute", (a || 0) + "", t[i], r, o, 0, 0, i)).op = i, s.b = a, this._props.push(i)
          },
          render: function(e, t) {
            for (var n = t._pt; n;) s ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
          }
        }, {
          name: "endArray",
          init: function(e, t) {
            for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
          }
        }, Cn("roundProps", at), Cn("modifiers"), Cn("snap", ct)) || En;
      Jt.version = qt.version = kn.version = "3.12.5", f = 1, F() && Pt(), Ot.Power0, Ot.Power1, Ot.Power2, Ot.Power3, Ot.Power4, Ot.Linear, Ot.Quad, Ot.Cubic, Ot.Quart, Ot.Quint, Ot.Strong, Ot.Elastic, Ot.Back, Ot.SteppedEase, Ot.Bounce, Ot.Sine, Ot.Expo, Ot.Circ;
      var Pn, On, Rn, Mn, Dn, An, jn, Ln, In = {},
        Nn = 180 / Math.PI,
        Fn = Math.PI / 180,
        zn = Math.atan2,
        Vn = /([A-Z])/g,
        Bn = /(left|right|width|margin|padding|x)/i,
        qn = /[\s,\(]\S/,
        Kn = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        Wn = function(e, t) {
          return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        Hn = function(e, t) {
          return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        $n = function(e, t) {
          return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        },
        Un = function(e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
        },
        Gn = function(e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t)
        },
        Xn = function(e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
        },
        Yn = function(e, t, n) {
          return e.style[t] = n
        },
        Qn = function(e, t, n) {
          return e.style.setProperty(t, n)
        },
        Zn = function(e, t, n) {
          return e._gsap[t] = n
        },
        Jn = function(e, t, n) {
          return e._gsap.scaleX = e._gsap.scaleY = n
        },
        er = function(e, t, n, r, o) {
          var i = e._gsap;
          i.scaleX = i.scaleY = n, i.renderTransform(o, i)
        },
        tr = function(e, t, n, r, o) {
          var i = e._gsap;
          i[t] = n, i.renderTransform(o, i)
        },
        nr = "transform",
        rr = nr + "Origin",
        or = function e(t, n) {
          var r = this,
            o = this.target,
            i = o.style,
            s = o._gsap;
          if (t in In && i) {
            if (this.tfm = this.tfm || {}, "transform" === t) return Kn.transform.split(",").forEach(function(t) {
              return e.call(r, t, n)
            });
            if (~(t = Kn[t] || t).indexOf(",") ? t.split(",").forEach(function(e) {
                return r.tfm[e] = xr(o, e)
              }) : this.tfm[t] = s.x ? s[t] : xr(o, t), t === rr && (this.tfm.zOrigin = s.zOrigin), this.props.indexOf(nr) >= 0) return;
            s.svg && (this.svgo = o.getAttribute("data-svg-origin"), this.props.push(rr, n, "")), t = nr
          }(i || n) && this.props.push(t, n, i[t])
        },
        ir = function(e) {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        sr = function() {
          var e, t, n = this.props,
            r = this.target,
            o = r.style,
            i = r._gsap;
          for (e = 0; e < n.length; e += 3) n[e + 1] ? r[n[e]] = n[e + 2] : n[e + 2] ? o[n[e]] = n[e + 2] : o.removeProperty("--" === n[e].substr(0, 2) ? n[e] : n[e].replace(Vn, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg && (i.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (e = jn()) && e.isStart || o[nr] || (ir(o), i.zOrigin && o[rr] && (o[rr] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
          }
        },
        ar = function(e, t) {
          var n = {
            target: e,
            props: [],
            revert: sr,
            save: or
          };
          return e._gsap || kn.core.getCache(e), t && t.split(",").forEach(function(e) {
            return n.save(e)
          }), n
        },
        cr = function(e, t) {
          var n = On.createElementNS ? On.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : On.createElement(e);
          return n && n.style ? n : On.createElement(e)
        },
        lr = function e(t, n, r) {
          var o = getComputedStyle(t);
          return o[n] || o.getPropertyValue(n.replace(Vn, "-$1").toLowerCase()) || o.getPropertyValue(n) || !r && e(t, dr(n) || n, 1) || ""
        },
        ur = "O,Moz,ms,Ms,Webkit".split(","),
        dr = function(e, t, n) {
          var r = (t || Dn).style,
            o = 5;
          if (e in r && !n) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(ur[o] + e in r););
          return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? ur[o] : "") + e
        },
        fr = function() {
          "undefined" != typeof window && window.document && (Pn = window, On = Pn.document, Rn = On.documentElement, Dn = cr("div") || {
            style: {}
          }, cr("div"), nr = dr(nr), rr = nr + "Origin", Dn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ln = !!dr("perspective"), jn = kn.core.reverting, Mn = 1)
        },
        pr = function e(t) {
          var n, r = cr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            o = this.parentNode,
            i = this.nextSibling,
            s = this.style.cssText;
          if (Rn.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
          } catch (e) {} else this._gsapBBox && (n = this._gsapBBox());
          return o && (i ? o.insertBefore(this, i) : o.appendChild(this)), Rn.removeChild(r), this.style.cssText = s, n
        },
        hr = function(e, t) {
          for (var n = t.length; n--;)
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
        },
        mr = function(e) {
          var t;
          try {
            t = e.getBBox()
          } catch (n) {
            t = pr.call(e, !0)
          }
          return t && (t.width || t.height) || e.getBBox === pr || (t = pr.call(e, !0)), !t || t.width || t.x || t.y ? t : {
            x: +hr(e, ["x", "cx", "x1"]) || 0,
            y: +hr(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        vr = function(e) {
          return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !mr(e))
        },
        gr = function(e, t) {
          if (t) {
            var n, r = e.style;
            t in In && t !== rr && (t = nr), r.removeProperty ? ("ms" !== (n = t.substr(0, 2)) && "webkit" !== t.substr(0, 6) || (t = "-" + t), r.removeProperty("--" === n ? t : t.replace(Vn, "-$1").toLowerCase())) : r.removeAttribute(t)
          }
        },
        yr = function(e, t, n, r, o, i) {
          var s = new hn(e._pt, t, n, 0, 1, i ? Xn : Gn);
          return e._pt = s, s.b = r, s.e = o, e._props.push(n), s
        },
        _r = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        br = {
          grid: 1,
          flex: 1
        },
        wr = function e(t, n, r, o) {
          var i, s, a, c, l = parseFloat(r) || 0,
            u = (r + "").trim().substr((l + "").length) || "px",
            d = Dn.style,
            f = Bn.test(n),
            p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            v = "px" === o,
            g = "%" === o;
          if (o === u || !l || _r[o] || _r[u]) return l;
          if ("px" !== u && !v && (l = e(t, n, r, "px")), c = t.getCTM && vr(t), (g || "%" === u) && (In[n] || ~n.indexOf("adius"))) return i = c ? t.getBBox()[f ? "width" : "height"] : t[h], ge(g ? l / i * m : l / 100 * i);
          if (d[f ? "width" : "height"] = m + (v ? u : o), s = ~n.indexOf("adius") || "em" === o && t.appendChild && !p ? t : t.parentNode, c && (s = (t.ownerSVGElement || {}).parentNode), s && s !== On && s.appendChild || (s = On.body), (a = s._gsap) && g && a.width && f && a.time === kt.time && !a.uncache) return ge(l / a.width * m);
          if (!g || "height" !== n && "width" !== n)(g || "%" === u) && !br[lr(s, "display")] && (d.position = lr(t, "position")), s === t && (d.position = "static"), s.appendChild(Dn), i = Dn[h], s.removeChild(Dn), d.position = "absolute";
          else {
            var y = t.style[n];
            t.style[n] = m + o, i = t[h], y ? t.style[n] = y : gr(t, n)
          }
          return f && g && ((a = he(s)).time = kt.time, a.width = s[h]), ge(v ? i * l / m : i && l ? m / i * l : 0)
        },
        xr = function(e, t, n, r) {
          var o;
          return Mn || fr(), t in Kn && "transform" !== t && ~(t = Kn[t]).indexOf(",") && (t = t.split(",")[0]), In[t] && "transform" !== t ? (o = jr(e, r), o = "transformOrigin" !== t ? o[t] : o.svg ? o.origin : Lr(lr(e, rr)) + " " + o.zOrigin + "px") : (!(o = e.style[t]) || "auto" === o || r || ~(o + "").indexOf("calc(")) && (o = kr[t] && kr[t](e, t, n) || lr(e, t) || me(e, t) || ("opacity" === t ? 1 : 0)), n && !~(o + "").trim().indexOf(" ") ? wr(e, t, o, n) + n : o
        },
        Sr = function(e, t, n, r) {
          if (!n || "none" === n) {
            var o = dr(t, e, 1),
              i = o && lr(e, o, 1);
            i && i !== n ? (t = o, n = i) : "borderColor" === t && (n = lr(e, "borderTopColor"))
          }
          var s, a, c, l, u, d, f, p, h, m, v, g = new hn(this._pt, e.style, t, 0, 1, cn),
            y = 0,
            _ = 0;
          if (g.b = n, g.e = r, n += "", "auto" == (r += "") && (d = e.style[t], e.style[t] = r, r = lr(e, t) || r, d ? e.style[t] = d : gr(e, t)), Ct(s = [n, r]), r = s[1], c = (n = s[0]).match(W) || [], (r.match(W) || []).length) {
            for (; a = W.exec(r);) f = a[0], h = r.substring(y, a.index), u ? u = (u + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (u = 1), f !== (d = c[_++] || "") && (l = parseFloat(d) || 0, v = d.substr((l + "").length), "=" === f.charAt(1) && (f = _e(l, f) + v), p = parseFloat(f), m = f.substr((p + "").length), y = W.lastIndex - m.length, m || (m = m || x.units[t] || v, y === r.length && (r += m, g.e += m)), v !== m && (l = wr(e, t, d, m) || 0), g._pt = {
              _next: g._pt,
              p: h || 1 === _ ? h : ",",
              s: l,
              c: p - l,
              m: u && u < 4 || "zIndex" === t ? Math.round : 0
            });
            g.c = y < r.length ? r.substring(y, r.length) : ""
          } else g.r = "display" === t && "none" === r ? Xn : Gn;
          return $.test(r) && (g.e = 0), this._pt = g, g
        },
        Er = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Tr = function(e) {
          var t = e.split(" "),
            n = t[0],
            r = t[1] || "50%";
          return "top" !== n && "bottom" !== n && "left" !== r && "right" !== r || (e = n, n = r, r = e), t[0] = Er[n] || n, t[1] = Er[r] || r, t.join(" ")
        },
        Cr = function(e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n, r, o, i = t.t,
              s = i.style,
              a = t.u,
              c = i._gsap;
            if ("all" === a || !0 === a) s.cssText = "", r = 1;
            else
              for (o = (a = a.split(",")).length; --o > -1;) n = a[o], In[n] && (r = 1, n = "transformOrigin" === n ? rr : nr), gr(i, n);
            r && (gr(i, nr), c && (c.svg && i.removeAttribute("transform"), jr(i, 1), c.uncache = 1, ir(s)))
          }
        },
        kr = {
          clearProps: function(e, t, n, r, o) {
            if ("isFromStart" !== o.data) {
              var i = e._pt = new hn(e._pt, t, n, 0, 0, Cr);
              return i.u = r, i.pr = -10, i.tween = o, e._props.push(n), 1
            }
          }
        },
        Pr = [1, 0, 0, 1, 0, 0],
        Or = {},
        Rr = function(e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
        },
        Mr = function(e) {
          var t = lr(e, nr);
          return Rr(t) ? Pr : t.substr(7).match(K).map(ge)
        },
        Dr = function(e, t) {
          var n, r, o, i, s = e._gsap || he(e),
            a = e.style,
            c = Mr(e);
          return s.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (c = [(o = e.transform.baseVal.consolidate().matrix).a, o.b, o.c, o.d, o.e, o.f]).join(",") ? Pr : c : (c !== Pr || e.offsetParent || e === Rn || s.svg || (o = a.display, a.display = "block", (n = e.parentNode) && e.offsetParent || (i = 1, r = e.nextElementSibling, Rn.appendChild(e)), c = Mr(e), o ? a.display = o : gr(e, "display"), i && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : Rn.removeChild(e))), t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c)
        },
        Ar = function(e, t, n, r, o, i) {
          var s, a, c, l = e._gsap,
            u = o || Dr(e, !0),
            d = l.xOrigin || 0,
            f = l.yOrigin || 0,
            p = l.xOffset || 0,
            h = l.yOffset || 0,
            m = u[0],
            v = u[1],
            g = u[2],
            y = u[3],
            _ = u[4],
            b = u[5],
            w = t.split(" "),
            x = parseFloat(w[0]) || 0,
            S = parseFloat(w[1]) || 0;
          n ? u !== Pr && (a = m * y - v * g) && (c = x * (-v / a) + S * (m / a) - (m * b - v * _) / a, x = x * (y / a) + S * (-g / a) + (g * b - y * _) / a, S = c) : (x = (s = mr(e)).x + (~w[0].indexOf("%") ? x / 100 * s.width : x), S = s.y + (~(w[1] || w[0]).indexOf("%") ? S / 100 * s.height : S)), r || !1 !== r && l.smooth ? (_ = x - d, b = S - f, l.xOffset = p + (_ * m + b * g) - _, l.yOffset = h + (_ * v + b * y) - b) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = S, l.smooth = !!r, l.origin = t, l.originIsAbsolute = !!n, e.style[rr] = "0px 0px", i && (yr(i, l, "xOrigin", d, x), yr(i, l, "yOrigin", f, S), yr(i, l, "xOffset", p, l.xOffset), yr(i, l, "yOffset", h, l.yOffset)), e.setAttribute("data-svg-origin", x + " " + S)
        },
        jr = function(e, t) {
          var n = e._gsap || new Vt(e);
          if ("x" in n && !t && !n.uncache) return n;
          var r, o, i, s, a, c, l, u, d, f, p, h, m, v, g, y, _, b, w, S, E, T, C, k, P, O, R, M, D, A, j, L, I = e.style,
            N = n.scaleX < 0,
            F = "px",
            z = "deg",
            V = getComputedStyle(e),
            B = lr(e, rr) || "0";
          return r = o = i = c = l = u = d = f = p = 0, s = a = 1, n.svg = !(!e.getCTM || !vr(e)), V.translate && ("none" === V.translate && "none" === V.scale && "none" === V.rotate || (I[nr] = ("none" !== V.translate ? "translate3d(" + (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") + ("none" !== V.scale ? "scale(" + V.scale.split(" ").join(",") + ") " : "") + ("none" !== V[nr] ? V[nr] : "")), I.scale = I.rotate = I.translate = "none"), v = Dr(e, n.svg), n.svg && (n.uncache ? (P = e.getBBox(), B = n.xOrigin - P.x + "px " + (n.yOrigin - P.y) + "px", k = "") : k = !t && e.getAttribute("data-svg-origin"), Ar(e, k || B, !!k || n.originIsAbsolute, !1 !== n.smooth, v)), h = n.xOrigin || 0, m = n.yOrigin || 0, v !== Pr && (b = v[0], w = v[1], S = v[2], E = v[3], r = T = v[4], o = C = v[5], 6 === v.length ? (s = Math.sqrt(b * b + w * w), a = Math.sqrt(E * E + S * S), c = b || w ? zn(w, b) * Nn : 0, (d = S || E ? zn(S, E) * Nn + c : 0) && (a *= Math.abs(Math.cos(d * Fn))), n.svg && (r -= h - (h * b + m * S), o -= m - (h * w + m * E))) : (L = v[6], A = v[7], R = v[8], M = v[9], D = v[10], j = v[11], r = v[12], o = v[13], i = v[14], l = (g = zn(L, D)) * Nn, g && (k = T * (y = Math.cos(-g)) + R * (_ = Math.sin(-g)), P = C * y + M * _, O = L * y + D * _, R = T * -_ + R * y, M = C * -_ + M * y, D = L * -_ + D * y, j = A * -_ + j * y, T = k, C = P, L = O), u = (g = zn(-S, D)) * Nn, g && (y = Math.cos(-g), j = E * (_ = Math.sin(-g)) + j * y, b = k = b * y - R * _, w = P = w * y - M * _, S = O = S * y - D * _), c = (g = zn(w, b)) * Nn, g && (k = b * (y = Math.cos(g)) + w * (_ = Math.sin(g)), P = T * y + C * _, w = w * y - b * _, C = C * y - T * _, b = k, T = P), l && Math.abs(l) + Math.abs(c) > 359.9 && (l = c = 0, u = 180 - u), s = ge(Math.sqrt(b * b + w * w + S * S)), a = ge(Math.sqrt(C * C + L * L)), g = zn(T, C), d = Math.abs(g) > 2e-4 ? g * Nn : 0, p = j ? 1 / (j < 0 ? -j : j) : 0), n.svg && (k = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Rr(lr(e, nr)), k && e.setAttribute("transform", k))), Math.abs(d) > 90 && Math.abs(d) < 270 && (N ? (s *= -1, d += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (a *= -1, d += d <= 0 ? 180 : -180)), t = t || n.uncache, n.x = r - ((n.xPercent = r && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + F, n.y = o - ((n.yPercent = o && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-o) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + F, n.z = i + F, n.scaleX = ge(s), n.scaleY = ge(a), n.rotation = ge(c) + z, n.rotationX = ge(l) + z, n.rotationY = ge(u) + z, n.skewX = d + z, n.skewY = f + z, n.transformPerspective = p + F, (n.zOrigin = parseFloat(B.split(" ")[2]) || !t && n.zOrigin || 0) && (I[rr] = Lr(B)), n.xOffset = n.yOffset = 0, n.force3D = x.force3D, n.renderTransform = n.svg ? qr : Ln ? Br : Nr, n.uncache = 0, n
        },
        Lr = function(e) {
          return (e = e.split(" "))[0] + " " + e[1]
        },
        Ir = function(e, t, n) {
          var r = et(t);
          return ge(parseFloat(t) + parseFloat(wr(e, "x", n + "px", r))) + r
        },
        Nr = function(e, t) {
          t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Br(e, t)
        },
        Fr = "0deg",
        zr = "0px",
        Vr = ") ",
        Br = function(e, t) {
          var n = t || this,
            r = n.xPercent,
            o = n.yPercent,
            i = n.x,
            s = n.y,
            a = n.z,
            c = n.rotation,
            l = n.rotationY,
            u = n.rotationX,
            d = n.skewX,
            f = n.skewY,
            p = n.scaleX,
            h = n.scaleY,
            m = n.transformPerspective,
            v = n.force3D,
            g = n.target,
            y = n.zOrigin,
            _ = "",
            b = "auto" === v && e && 1 !== e || !0 === v;
          if (y && (u !== Fr || l !== Fr)) {
            var w, x = parseFloat(l) * Fn,
              S = Math.sin(x),
              E = Math.cos(x);
            x = parseFloat(u) * Fn, w = Math.cos(x), i = Ir(g, i, S * w * -y), s = Ir(g, s, -Math.sin(x) * -y), a = Ir(g, a, E * w * -y + y)
          }
          m !== zr && (_ += "perspective(" + m + Vr), (r || o) && (_ += "translate(" + r + "%, " + o + "%) "), (b || i !== zr || s !== zr || a !== zr) && (_ += a !== zr || b ? "translate3d(" + i + ", " + s + ", " + a + ") " : "translate(" + i + ", " + s + Vr), c !== Fr && (_ += "rotate(" + c + Vr), l !== Fr && (_ += "rotateY(" + l + Vr), u !== Fr && (_ += "rotateX(" + u + Vr), d === Fr && f === Fr || (_ += "skew(" + d + ", " + f + Vr), 1 === p && 1 === h || (_ += "scale(" + p + ", " + h + Vr), g.style[nr] = _ || "translate(0, 0)"
        },
        qr = function(e, t) {
          var n, r, o, i, s, a = t || this,
            c = a.xPercent,
            l = a.yPercent,
            u = a.x,
            d = a.y,
            f = a.rotation,
            p = a.skewX,
            h = a.skewY,
            m = a.scaleX,
            v = a.scaleY,
            g = a.target,
            y = a.xOrigin,
            _ = a.yOrigin,
            b = a.xOffset,
            w = a.yOffset,
            x = a.forceCSS,
            S = parseFloat(u),
            E = parseFloat(d);
          f = parseFloat(f), p = parseFloat(p), (h = parseFloat(h)) && (p += h = parseFloat(h), f += h), f || p ? (f *= Fn, p *= Fn, n = Math.cos(f) * m, r = Math.sin(f) * m, o = Math.sin(f - p) * -v, i = Math.cos(f - p) * v, p && (h *= Fn, s = Math.tan(p - h), o *= s = Math.sqrt(1 + s * s), i *= s, h && (s = Math.tan(h), n *= s = Math.sqrt(1 + s * s), r *= s)), n = ge(n), r = ge(r), o = ge(o), i = ge(i)) : (n = m, i = v, r = o = 0), (S && !~(u + "").indexOf("px") || E && !~(d + "").indexOf("px")) && (S = wr(g, "x", u, "px"), E = wr(g, "y", d, "px")), (y || _ || b || w) && (S = ge(S + y - (y * n + _ * o) + b), E = ge(E + _ - (y * r + _ * i) + w)), (c || l) && (s = g.getBBox(), S = ge(S + c / 100 * s.width), E = ge(E + l / 100 * s.height)), s = "matrix(" + n + "," + r + "," + o + "," + i + "," + S + "," + E + ")", g.setAttribute("transform", s), x && (g.style[nr] = s)
        },
        Kr = function(e, t, n, r, o) {
          var i, s, a = 360,
            c = D(o),
            l = parseFloat(o) * (c && ~o.indexOf("rad") ? Nn : 1) - r,
            u = r + l + "deg";
          return c && ("short" === (i = o.split("_")[1]) && (l %= a) !== l % 180 && (l += l < 0 ? a : -360), "cw" === i && l < 0 ? l = (l + 36e9) % a - ~~(l / a) * a : "ccw" === i && l > 0 && (l = (l - 36e9) % a - ~~(l / a) * a)), e._pt = s = new hn(e._pt, t, n, r, l, Hn), s.e = u, s.u = "deg", e._props.push(n), s
        },
        Wr = function(e, t) {
          for (var n in t) e[n] = t[n];
          return e
        },
        Hr = function(e, t, n) {
          var r, o, i, s, a, c, l, u = Wr({}, n._gsap),
            d = n.style;
          for (o in u.svg ? (i = n.getAttribute("transform"), n.setAttribute("transform", ""), d[nr] = t, r = jr(n, 1), gr(n, nr), n.setAttribute("transform", i)) : (i = getComputedStyle(n)[nr], d[nr] = t, r = jr(n, 1), d[nr] = i), In)(i = u[o]) !== (s = r[o]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 && (a = et(i) !== (l = et(s)) ? wr(n, o, i, l) : parseFloat(i), c = parseFloat(s), e._pt = new hn(e._pt, r, o, a, c - a, Wn), e._pt.u = l || 0, e._props.push(o));
          Wr(r, u)
        };
      ve("padding,margin,Width,Radius", function(e, t) {
        var n = "Top",
          r = "Right",
          o = "Bottom",
          i = "Left",
          s = (t < 3 ? [n, r, o, i] : [n + i, n + r, o + r, o + i]).map(function(n) {
            return t < 2 ? e + n : "border" + n + e
          });
        kr[t > 1 ? "border" + e : e] = function(e, t, n, r, o) {
          var i, a;
          if (arguments.length < 4) return i = s.map(function(t) {
            return xr(e, t, n)
          }), 5 === (a = i.join(" ")).split(i[0]).length ? i[0] : a;
          i = (r + "").split(" "), a = {}, s.forEach(function(e, t) {
            return a[e] = i[t] = i[t] || i[(t - 1) / 2 | 0]
          }), e.init(t, a, o)
        }
      });
      var $r, Ur, Gr = {
        name: "css",
        register: fr,
        targetTest: function(e) {
          return e.style && e.nodeType
        },
        init: function(e, t, n, r, o) {
          var i, s, a, c, l, u, d, f, p, h, m, v, g, y, _, b, w = this._props,
            S = e.style,
            E = n.vars.startAt;
          for (d in Mn || fr(), this.styles = this.styles || ar(e), b = this.styles.props, this.tween = n, t)
            if ("autoRound" !== d && (s = t[d], !ce[d] || !Ut(d, t, n, r, e, o)))
              if (l = typeof s, u = kr[d], "function" === l && (l = typeof(s = s.call(n, r, e, o))), "string" === l && ~s.indexOf("random(") && (s = dt(s)), u) u(this, e, d, s, n) && (_ = 1);
              else if ("--" === d.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(d) + "").trim(), s += "", Et.lastIndex = 0, Et.test(i) || (f = et(i), p = et(s)), p ? f !== p && (i = wr(e, d, i, p) + p) : f && (s += f), this.add(S, "setProperty", i, s, r, o, 0, 0, d), w.push(d), b.push(d, 0, S[d]);
          else if ("undefined" !== l) {
            if (E && d in E ? (i = "function" == typeof E[d] ? E[d].call(n, r, e, o) : E[d], D(i) && ~i.indexOf("random(") && (i = dt(i)), et(i + "") || "auto" === i || (i += x.units[d] || et(xr(e, d)) || ""), "=" === (i + "").charAt(1) && (i = xr(e, d))) : i = xr(e, d), c = parseFloat(i), (h = "string" === l && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), d in Kn && ("autoAlpha" === d && (1 === c && "hidden" === xr(e, "visibility") && a && (c = 0), b.push("visibility", 0, S.visibility), yr(this, S, "visibility", c ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== d && "transform" !== d && ~(d = Kn[d]).indexOf(",") && (d = d.split(",")[0])), m = d in In)
              if (this.styles.save(d), v || ((g = e._gsap).renderTransform && !t.parseTransform || jr(e, t.parseTransform), y = !1 !== t.smoothOrigin && g.smooth, (v = this._pt = new hn(this._pt, S, nr, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === d) this._pt = new hn(this._pt, g, "scaleY", g.scaleY, (h ? _e(g.scaleY, h + a) : a) - g.scaleY || 0, Wn), this._pt.u = 0, w.push("scaleY", d), d += "X";
              else {
                if ("transformOrigin" === d) {
                  b.push(rr, 0, S[rr]), s = Tr(s), g.svg ? Ar(e, s, 0, y, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && yr(this, g, "zOrigin", g.zOrigin, p), yr(this, S, d, Lr(i), Lr(s)));
                  continue
                }
                if ("svgOrigin" === d) {
                  Ar(e, s, 1, y, 0, this);
                  continue
                }
                if (d in Or) {
                  Kr(this, g, d, c, h ? _e(c, h + s) : s);
                  continue
                }
                if ("smoothOrigin" === d) {
                  yr(this, g, "smooth", g.smooth, s);
                  continue
                }
                if ("force3D" === d) {
                  g[d] = s;
                  continue
                }
                if ("transform" === d) {
                  Hr(this, s, e);
                  continue
                }
              }
            else d in S || (d = dr(d) || d);
            if (m || (a || 0 === a) && (c || 0 === c) && !qn.test(s) && d in S) a || (a = 0), (f = (i + "").substr((c + "").length)) !== (p = et(s) || (d in x.units ? x.units[d] : f)) && (c = wr(e, d, i, p)), this._pt = new hn(this._pt, m ? g : S, d, c, (h ? _e(c, h + a) : a) - c, m || "px" !== p && "zIndex" !== d || !1 === t.autoRound ? Wn : Un), this._pt.u = p || 0, f !== p && "%" !== p && (this._pt.b = i, this._pt.r = $n);
            else if (d in S) Sr.call(this, e, d, i, h ? h + s : s);
            else if (d in e) this.add(e, d, i || e[d], h ? h + s : s, r, o);
            else if ("parseTransform" !== d) {
              Z(d, s);
              continue
            }
            m || (d in S ? b.push(d, 0, S[d]) : b.push(d, 1, i || e[d])), w.push(d)
          }
          _ && pn(this)
        },
        render: function(e, t) {
          if (t.tween._time || !jn())
            for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
          else t.styles.revert()
        },
        get: xr,
        aliases: Kn,
        getSetter: function(e, t, n) {
          var r = Kn[t];
          return r && r.indexOf(",") < 0 && (t = r), t in In && t !== rr && (e._gsap.x || xr(e, "x")) ? n && An === n ? "scale" === t ? Jn : Zn : (An = n || {}) && ("scale" === t ? er : tr) : e.style && !L(e.style[t]) ? Yn : ~t.indexOf("-") ? Qn : on(e, t)
        },
        core: {
          _removeProperty: gr,
          _getMatrix: Dr
        }
      };
      kn.utils.checkPrefix = dr, kn.core.getStyleSaver = ar, Ur = ve("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + ($r = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
        In[e] = 1
      }), ve($r, function(e) {
        x.units[e] = "deg", Or[e] = 1
      }), Kn[Ur[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + $r, ve("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
        var t = e.split(":");
        Kn[t[1]] = Ur[t[0]]
      }), ve("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
        x.units[e] = "px"
      }), kn.registerPlugin(Gr);
      var Xr = kn.registerPlugin(Gr) || kn;
      Xr.core.Tween
    },
    4(e, t, n) {
      n.d(t, {
        Hb: () => b,
        vC: () => S
      });
      var r = n(4637),
        o = n(9793);

      function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, i.apply(null, arguments)
      }
      var s = ["shift", "alt", "meta", "mod", "ctrl"],
        a = {
          esc: "escape",
          return: "enter",
          ".": "period",
          ",": "comma",
          "-": "slash",
          " ": "space",
          "`": "backquote",
          "#": "backslash",
          "+": "bracketright",
          ShiftLeft: "shift",
          ShiftRight: "shift",
          AltLeft: "alt",
          AltRight: "alt",
          MetaLeft: "meta",
          MetaRight: "meta",
          OSLeft: "meta",
          OSRight: "meta",
          ControlLeft: "ctrl",
          ControlRight: "ctrl"
        };

      function c(e) {
        return (e && a[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function l(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function u(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map(function(e) {
          return c(e)
        });
        return i({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter(function(e) {
            return !s.includes(e)
          }),
          description: n,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && p([c(e.key), c(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && h([c(e.key), c(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        d.clear()
      });
      var d = new Set;

      function f(e) {
        return Array.isArray(e)
      }

      function p(e) {
        var t = Array.isArray(e) ? e : [e];
        d.has("meta") && d.forEach(function(e) {
          return ! function(e) {
            return s.includes(e)
          }(e) && d.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return d.add(e.toLowerCase())
        })
      }

      function h(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? d.clear() : t.forEach(function(e) {
          return d.delete(e.toLowerCase())
        })
      }

      function m(e, t) {
        void 0 === t && (t = !1);
        var n, r, o = e.target,
          i = e.composed;
        return r = (n = o).tagName && !n.tagName.startsWith("-") && n.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, f(t) ? Boolean(r && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = r) ? void 0 : t.toLowerCase())
        })) : Boolean(r && t && t)
      }
      var v = (0, r.createContext)(void 0);

      function g(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, o.jsx)(v.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function y(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(n, r) {
          return n && y(e[r], t[r])
        }, !0) : e === t
      }
      var _ = (0, r.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        b = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            i = e.children,
            s = (0, r.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            a = s[0],
            c = s[1],
            l = (0, r.useState)([]),
            u = l[0],
            d = l[1],
            f = (0, r.useCallback)(function(e) {
              c(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            p = (0, r.useCallback)(function(e) {
              c(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            h = (0, r.useCallback)(function(e) {
              c(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            m = (0, r.useCallback)(function(e) {
              d(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            v = (0, r.useCallback)(function(e) {
              d(function(t) {
                return t.filter(function(t) {
                  return !y(t, e)
                })
              })
            }, []);
          return (0, o.jsx)(_.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: u,
              enableScope: f,
              disableScope: p,
              toggleScope: h
            },
            children: (0, o.jsx)(g, {
              addHotkey: m,
              removeHotkey: v,
              children: i
            })
          })
        },
        w = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        x = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;

      function S(e, t, n, o) {
        var i = (0, r.useState)(null),
          s = i[0],
          a = i[1],
          g = (0, r.useRef)(!1),
          b = n instanceof Array ? o instanceof Array ? void 0 : o : n,
          S = f(e) ? e.join(null == b ? void 0 : b.splitKey) : e,
          E = n instanceof Array ? n : o instanceof Array ? o : void 0,
          T = (0, r.useCallback)(t, null != E ? E : []),
          C = (0, r.useRef)(T);
        C.current = E ? T : t;
        var k = function(e) {
            var t = (0, r.useRef)(void 0);
            return y(t.current, e) || (t.current = e), t.current
          }(b),
          P = (0, r.useContext)(_).enabledScopes,
          O = (0, r.useContext)(v);
        return x(function() {
          if (!1 !== (null == k ? void 0 : k.enabled) && (e = P, t = null == k ? void 0 : k.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !m(e, ["input", "textarea", "select"]) || m(e, null == k ? void 0 : k.enableOnFormTags)) {
                  if (null !== s) {
                    var r = s.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== s && !s.contains(r.activeElement)) return void w(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != k && k.enableOnContentEditable) && l(S, null == k ? void 0 : k.splitKey).forEach(function(n) {
                    var r, o = u(n, null == k ? void 0 : k.combinationKey);
                    if (function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, o, i = t.alt,
                          s = t.meta,
                          a = t.mod,
                          l = t.shift,
                          u = t.ctrl,
                          p = t.keys,
                          h = e.key,
                          m = e.code,
                          v = e.ctrlKey,
                          g = e.metaKey,
                          y = e.shiftKey,
                          _ = e.altKey,
                          b = c(m),
                          w = h.toLowerCase();
                        if (!(null != p && p.includes(b) || null != p && p.includes(w) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(b))) return !1;
                        if (!n) {
                          if (i === !_ && "alt" !== w) return !1;
                          if (l === !y && "shift" !== w) return !1;
                          if (a) {
                            if (!g && !v) return !1
                          } else {
                            if (s === !g && "meta" !== w && "os" !== w) return !1;
                            if (u === !v && "ctrl" !== w && "control" !== w) return !1
                          }
                        }
                        return !(!p || 1 !== p.length || !p.includes(w) && !p.includes(b)) || (p ? (void 0 === o && (o = ","), (f(r = p) ? r : r.split(o)).every(function(e) {
                          return d.has(e.trim().toLowerCase())
                        })) : !p)
                      }(e, o, null == k ? void 0 : k.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != k && null != k.ignoreEventWhen && k.ignoreEventWhen(e)) return;
                      if (t && g.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == k ? void 0 : k.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == k ? void 0 : k.enabled)) return void w(e);
                      C.current(e, o), t || (g.current = !0)
                    }
                  })
                }
              },
              r = function(e) {
                void 0 !== e.key && (p(c(e.code)), (void 0 === (null == k ? void 0 : k.keydown) && !0 !== (null == k ? void 0 : k.keyup) || null != k && k.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && (h(c(e.code)), g.current = !1, null != k && k.keyup && n(e, !0))
              },
              i = s || (null == b ? void 0 : b.document) || document;
            return i.addEventListener("keyup", o, null == b ? void 0 : b.eventListenerOptions), i.addEventListener("keydown", r, null == b ? void 0 : b.eventListenerOptions), O && l(S, null == k ? void 0 : k.splitKey).forEach(function(e) {
                return O.addHotkey(u(e, null == k ? void 0 : k.combinationKey, null == k ? void 0 : k.description))
              }),
              function() {
                i.removeEventListener("keyup", o, null == b ? void 0 : b.eventListenerOptions), i.removeEventListener("keydown", r, null == b ? void 0 : b.eventListenerOptions), O && l(S, null == k ? void 0 : k.splitKey).forEach(function(e) {
                  return O.removeHotkey(u(e, null == k ? void 0 : k.combinationKey, null == k ? void 0 : k.description))
                })
              }
          }
        }, [s, S, k, P]), a
      }
    },
    3133(e, t, n) {
      var r = n(4637),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        i = r.useState,
        s = r.useEffect,
        a = r.useLayoutEffect,
        c = r.useDebugValue;

      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !o(e, n)
        } catch (e) {
          return !0
        }
      }
      var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
      } : function(e, t) {
        var n = t(),
          r = i({
            inst: {
              value: n,
              getSnapshot: t
            }
          }),
          o = r[0].inst,
          u = r[1];
        return a(function() {
          o.value = n, o.getSnapshot = t, l(o) && u({
            inst: o
          })
        }, [e, n, t]), s(function() {
          return l(o) && u({
            inst: o
          }), e(function() {
            l(o) && u({
              inst: o
            })
          })
        }, [e]), c(n), n
      };
      t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u
    },
    9104(e, t, n) {
      e.exports = n(3133)
    },
    179(e, t, n) {
      n.d(t, {
        $: () => S
      });
      var r = n(9793),
        o = n(3626),
        i = n(8528),
        s = n(4173),
        a = n(8251),
        c = n(9353),
        l = n(4637),
        u = n(4889),
        d = n(4921),
        f = n(2760);

      function p(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? h(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = p(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function v(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var g = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        y = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = m(m({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var c = e.variantClassNames[o][a];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) g(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return v(e.variantClassNames, e => v(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _ = y({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnuao foundry_1qqcnuap",
              secondary: "foundry_17pcofy3 foundry_1qqcnuao foundry_1qqcnuaq",
              tertiary: "foundry_1qqcnuao foundry_1qqcnuar",
              ghost: "foundry_1qqcnuao foundry_1qqcnuas",
              danger: "foundry_1qqcnuao foundry_1qqcnuau",
              information: "foundry_1qqcnuao foundry_1qqcnuat",
              accent: "foundry_1qqcnuao foundry_1qqcnuav",
              link: "foundry_17pcofy9 foundry_1qqcnuao foundry_1qqcnuaw"
            },
            size: {
              SM: "foundry_17pcofya foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj",
              MD: "foundry_17pcofyb foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
              LG: "foundry_17pcofyc foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
              XL: "foundry_17pcofyd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            },
            fullWidth: {
              true: "foundry_17pcofye",
              false: "foundry_17pcofyf"
            },
            iconLeft: {
              true: "foundry_17pcofyg",
              false: "foundry_17pcofyh"
            },
            iconRight: {
              true: "foundry_17pcofyi",
              false: "foundry_17pcofyj"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "SM",
              iconLeft: !0
            }, "foundry_17pcofyk"],
            [{
              size: "SM",
              iconRight: !0
            }, "foundry_17pcofyl"],
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_17pcofym"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_17pcofyn"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_17pcofyo"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_17pcofyp"],
            [{
              size: "XL",
              iconLeft: !0
            }, "foundry_17pcofyq"],
            [{
              size: "XL",
              iconRight: !0
            }, "foundry_17pcofyr"]
          ]
        });
      y({
        defaultClassName: "foundry_17pcofys",
        variantClassNames: {
          isLoading: {
            true: "foundry_17pcofyt"
          },
          fullWidth: {
            true: "foundry_17pcofyu",
            false: "foundry_17pcofyv"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var b = y({
          defaultClassName: "foundry_17pcofyw",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofyx",
              MD: "foundry_17pcofyy",
              LG: "foundry_17pcofyz",
              XL: "foundry_17pcofy10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        w = y({
          defaultClassName: "foundry_17pcofy12",
          variantClassNames: {
            fullWidth: {
              true: "foundry_17pcofy13",
              false: "foundry_17pcofy14"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        x = y({
          defaultClassName: "foundry_17pcofy17",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofy18",
              MD: "foundry_17pcofy19",
              LG: "foundry_17pcofy1a",
              XL: "foundry_17pcofy1b"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const S = (0, l.forwardRef)(({
        testId: e,
        asChild: t,
        children: n,
        iconLeft: p,
        iconLeftLabel: h,
        iconRight: m,
        iconRightLabel: v,
        appearance: g,
        size: y = "MD",
        fullWidth: S = !1,
        isLoading: E = !1,
        spinnerLabel: T,
        preventFocusOnPress: C = !1,
        override_darkenLuminance: k = o.y.darkenLuminance,
        override_textLuminance: P = o.y.textLuminance,
        override_hoverLuminance: O = o.y.hoverLuminance,
        override_pressedLuminance: R = o.y.pressedLuminance,
        override_backgroundColor: M,
        override_hoverColor: D,
        override_pressedColor: A,
        override_textColor: j,
        ...L
      }, I) => {
        const N = (0, l.useRef)(null),
          F = (0, i.UP)(N, I),
          z = (0, a.zQ)(),
          V = "string" == typeof y ? y : y?.[z] ?? y.default ?? "MD",
          {
            buttonProps: B
          } = (0, i.sL)((0, c.v6)(L, {
            isLoading: E,
            preventFocusOnPress: C
          }), N);
        (0, o.I)({
          refs: {
            buttonRef: N
          },
          config: {
            textLuminance: P,
            darkenLuminance: k,
            hoverLuminance: O,
            pressedLuminance: R
          },
          overrides: {
            backgroundColor: M,
            hoverColor: D,
            pressedColor: A,
            textColor: j
          },
          enabled: "accent" === g
        }, [t]);
        const q = (0, c.v6)({
            className: _({
              appearance: g,
              size: V,
              fullWidth: S,
              iconLeft: !!p,
              iconRight: !!m
            }),
            "data-testid": e
          }, B),
          K = p && f[p],
          W = m && f[m],
          H = t ? s.DX : "button",
          $ = S && (W || W && K);
        return (0, r.jsxs)(H, {
          ref: F,
          ...q,
          children: [$ && (0, r.jsx)("div", {
            className: "foundry_17pcofy15"
          }), K && (0, r.jsx)(K, {
            label: h || "",
            size: V,
            className: (0, d.$)(b({
              size: V
            }), "foundry_17pcofy11")
          }), (0, r.jsx)(s.xV, {
            children: n
          }), W && (0, r.jsx)(W, {
            label: v || "",
            size: V,
            className: (0, d.$)(b({
              size: V
            }), w({
              fullWidth: S
            }))
          }), E && (0, r.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, r.jsx)(u.y, {
              label: T || "",
              size: "inline" + ("XL" === V ? "LG" : "MD"),
              hideTrack: !0,
              className: x({
                size: V
              })
            })
          })]
        })
      })
    },
    6789(e, t, n) {
      n.d(t, {
        K: () => w
      });
      var r = n(9793),
        o = n(3626),
        i = n(4173),
        s = n(8251),
        a = n(4637),
        c = n(8528),
        l = n(9353),
        u = n(4889);

      function d(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? f(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = d(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function h(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var m = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        v = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = p(p({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var c = e.variantClassNames[o][a];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) m(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return h(e.variantClassNames, e => h(e, e => e.split(" ")[0]))
            }
          }, t
        },
        g = v({
          defaultClassName: "foundry_a5x3khf",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khg",
              MD: "foundry_a5x3khh",
              LG: "foundry_a5x3khi",
              XL: "foundry_a5x3khj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        y = v({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_a5x3kh0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnuao foundry_1qqcnuap",
              secondary: "foundry_1qqcnuao foundry_1qqcnuaq",
              tertiary: "foundry_1qqcnuao foundry_1qqcnuar",
              ghost: "foundry_1qqcnuao foundry_1qqcnuas",
              danger: "foundry_1qqcnuao foundry_1qqcnuau",
              information: "foundry_1qqcnuao foundry_1qqcnuat",
              accent: "foundry_1qqcnuao foundry_1qqcnuav"
            },
            size: {
              SM: "foundry_a5x3kh9",
              MD: "foundry_a5x3kha",
              LG: "foundry_a5x3khb",
              XL: "foundry_a5x3khc"
            },
            fullWidth: {
              true: "foundry_a5x3khd",
              false: "foundry_a5x3khe"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _ = v({
          defaultClassName: "foundry_a5x3khl",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khm",
              MD: "foundry_a5x3khn",
              LG: "foundry_a5x3kho",
              XL: "foundry_a5x3khp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        b = n(2760);
      const w = (0, a.forwardRef)(({
        testId: e,
        asChild: t,
        icon: n,
        label: d,
        appearance: f,
        fullWidth: p = !1,
        size: h = "LG",
        children: m,
        isLoading: v = !1,
        spinnerLabel: w,
        preventFocusOnPress: x = !1,
        override_darkenLuminance: S = o.y.darkenLuminance,
        override_textLuminance: E = o.y.textLuminance,
        override_hoverLuminance: T = o.y.hoverLuminance,
        override_pressedLuminance: C = o.y.pressedLuminance,
        override_backgroundColor: k,
        override_hoverColor: P,
        override_pressedColor: O,
        override_textColor: R,
        ...M
      }, D) => {
        const A = (0, a.useRef)(null),
          j = (0, c.UP)(A, D),
          L = (0, s.zQ)(),
          I = "string" == typeof h ? h : h?.[L] ?? h.default ?? "LG",
          {
            buttonProps: N
          } = (0, c.sL)((0, l.v6)(M, {
            isLoading: v,
            preventFocusOnPress: x
          }), A);
        (0, o.I)({
          refs: {
            buttonRef: A
          },
          config: {
            textLuminance: E,
            darkenLuminance: S,
            hoverLuminance: T,
            pressedLuminance: C
          },
          overrides: {
            backgroundColor: k,
            hoverColor: P,
            pressedColor: O,
            textColor: R
          },
          enabled: "accent" === f
        }, [t]);
        const F = (0, l.v6)({
            className: y({
              appearance: f,
              size: I,
              fullWidth: p
            }),
            "data-testid": e
          }, N),
          z = b[n],
          V = t ? i.DX : "button";
        return (0, r.jsxs)(V, {
          ref: j,
          ...F,
          children: [z && (0, r.jsx)(z, {
            label: d || "",
            size: I,
            className: g({
              size: I
            })
          }), (0, r.jsx)(i.xV, {
            children: m
          }), v && (0, r.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, r.jsx)(u.y, {
              label: w || "",
              size: I && "SM" !== I ? `inline${I}` : "inlineMD",
              hideTrack: !0,
              className: _({
                size: I
              })
            })
          })]
        })
      })
    },
    4889(e, t, n) {
      n.d(t, {
        y: () => g
      });
      var r = n(9793),
        o = n(8251),
        i = n(9353),
        s = n(4637),
        a = n(6892);

      function c(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = c(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function d(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var f, p, h = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        m = (f = {
          defaultClassName: "foundry_1d33zd11",
          variantClassNames: {
            size: {
              inlineMD: "foundry_1d33zd12",
              inlineLG: "foundry_1d33zd13",
              inlineXL: "foundry_1d33zd14",
              pageMD: "foundry_1d33zd15",
              pageLG: "foundry_1d33zd16",
              pageXL: "foundry_1d33zd17"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (p = e => {
          var t = f.defaultClassName,
            n = u(u({}, f.defaultVariants), e);
          for (var r in n) {
            var o, i = null !== (o = n[r]) && void 0 !== o ? o : f.defaultVariants[r];
            if (null != i) {
              var s = i;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var a = f.variantClassNames[r][s];
              a && (t += " " + a)
            }
          }
          for (var [c, l] of f.compoundVariants) h(c, n, f.defaultVariants) && (t += " " + l);
          return t
        }).variants = () => Object.keys(f.variantClassNames), p.classNames = {
          get base() {
            return f.defaultClassName.split(" ")[0]
          },
          get variants() {
            return d(f.variantClassNames, e => d(e, e => e.split(" ")[0]))
          }
        }, p);
      const v = "pageMD",
        g = (0, s.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: n = v,
          testId: s,
          ...c
        }, l) => {
          const u = (0, o.zQ)(),
            d = "string" == typeof n ? n : n?.[u] ?? n.default ?? v,
            f = (0, i.v6)({
              className: m({
                size: d
              }),
              "data-testid": s,
              "aria-label": e
            }, c);
          return (0, r.jsx)(a.b, {
            label: e,
            children: (0, r.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...f,
              ref: l,
              viewBox: "0 0 16 16",
              children: [!t && (0, r.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, r.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        })
    },
    8251(e, t, n) {
      n.d(t, {
        Ym: () => l,
        zQ: () => c
      });
      var r = n(9793),
        o = (n(7278), n(3400), n(4173)),
        i = n(4637);
      const s = (0, i.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        a = () => (0, i.useContext)(s),
        c = () => {
          const {
            platformScale: e
          } = a();
          return e
        },
        l = () => {
          const {
            locale: e
          } = a();
          return e
        };
      var u = n(8528),
        d = n(8789);
      const f = e => "dark" === e ? d.xW.dark : d.xW.light;
      var p = n(9353);
      const h = () => p.X3 ? null : document.body;
      (0, i.forwardRef)(({
        children: e,
        className: t,
        container: n = h(),
        asChild: a,
        colorScheme: c,
        defaultColorScheme: l,
        defaultPlatformScale: m,
        platformScale: v,
        onPlatformScaleChange: g,
        locale: y = "en-US"
      }, _) => {
        const b = (0, i.useRef)(null),
          w = (0, u.UP)(b, _),
          x = (0, i.useRef)(n),
          {
            ratio: S,
            scale: E
          } = function(e) {
            const [t, n] = (0, i.useState)(e.platformScale || e.defaultPlatformScale), r = (0, i.useCallback)(t => {
              n(t), e.onPlatformScaleChange?.(t)
            }, [e.onPlatformScaleChange]), o = (0, i.useRef)([]), s = () => {
              if (!p.X3) {
                for (const {
                    handler: e,
                    matchMedia: t
                  }
                  of o.current) t.removeEventListener("change", e);
                o.current = []
              }
            };
            return (0, i.useEffect)(() => (e.platformScale ? r(e.platformScale) : (() => {
              if (!p.X3) {
                s();
                for (const e in d.wj) {
                  const t = window.matchMedia(d.wj[e]),
                    n = t => {
                      t.matches && r(e)
                    };
                  t.addEventListener("change", n), t.matches && r(e), o.current.push({
                    handler: n,
                    matchMedia: t
                  })
                }
              }
            })(), s), [e.platformScale, r]), {
              scale: t,
              ratio: d.nz[t]
            }
          }({
            onPlatformScaleChange: g,
            defaultPlatformScale: m,
            platformScale: v
          }),
          {
            appearanceClass: T,
            otherAppearanceClasses: C,
            providerColor: k
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark"
          }) {
            const n = (0, u.Ub)("(prefers-color-scheme: light)"),
              r = (0, u.Ub)("(prefers-color-scheme: dark)"),
              o = "system" !== e && e || n && "light" || r && "dark" || t,
              s = (0, i.useMemo)(() => f(o), [o]),
              a = (0, i.useMemo)(() => (e => {
                const t = f(e);
                return [d.xW.light, d.xW.dark].filter(e => e !== t)
              })(o), [o]);
            return {
              appearanceClass: s,
              otherAppearanceClasses: a,
              providerColor: o
            }
          }({
            colorScheme: c,
            defaultColorScheme: l
          });
        return (({
          container: e,
          currentScale: t,
          appearanceClass: n,
          otherAppearanceClasses: r,
          locale: o,
          className: s
        }) => {
          const a = (0, u.ZC)(s),
            c = (0, u.ZC)(e.current);
          (0, i.useEffect)(() => {
            e.current?.classList.contains(d.X6) || e.current?.classList.add(d.X6), e.current?.classList.contains(d.yU) || e.current?.classList.add(d.yU), e.current?.classList.contains(d.Np) || e.current?.classList.add(d.Np), e.current?.classList.add(n), e.current?.classList.remove(...r), a && s && e.current?.classList.contains(a) ? e.current?.classList.replace(a, s) : a && !s && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : s && e.current?.classList.add(s)
          }, [n, s]), (0, i.useEffect)(() => {
            e.current?.setAttribute("lang", o)
          }, [o]), (0, i.useEffect)(() => (t && e.current?.style.setProperty(d.HZ, t.toString()), () => {
            e.current?.style.removeProperty(d.HZ)
          }), [t]), (0, i.useEffect)(() => {
            c?.classList.remove(d.X6), c?.classList.remove(d.yU), c?.classList.remove(n), c?.style.removeProperty(d.HZ), s && c?.classList.remove(s)
          }, [c])
        })({
          locale: y,
          className: t,
          appearanceClass: T,
          otherAppearanceClasses: C,
          currentScale: v ? S : -0,
          container: a ? b : x
        }), (0, r.jsx)(s.Provider, {
          value: {
            locale: y,
            defaultColorScheme: l,
            colorScheme: k,
            defaultPlatformScale: m,
            platformScale: E
          },
          children: a ? (0, r.jsx)(o.DX, {
            ref: w,
            children: e
          }) : e
        })
      })
    },
    3626(e, t, n) {
      n.d(t, {
        y: () => l,
        I: () => u
      });
      var r = n(1350),
        o = n(4637),
        i = n(819),
        s = n(3804),
        a = n(9353);
      const c = {
          enabled: {
            background: (0, i.Tm)(s.no.enabled.background),
            border: (0, i.Tm)(s.no.enabled.border),
            text: (0, i.Tm)(s.no.enabled.text),
            outline: (0, i.Tm)(s.no.enabled.outline)
          },
          hover: {
            background: (0, i.Tm)(s.no.hover.background),
            border: (0, i.Tm)(s.no.hover.border),
            text: (0, i.Tm)(s.no.hover.text),
            outline: (0, i.Tm)(s.no.hover.outline)
          },
          focus: {
            background: (0, i.Tm)(s.no.focus.background),
            border: (0, i.Tm)(s.no.focus.border),
            text: (0, i.Tm)(s.no.focus.text),
            outline: (0, i.Tm)(s.no.focus.outline)
          },
          pressed: {
            background: (0, i.Tm)(s.no.pressed.background),
            border: (0, i.Tm)(s.no.pressed.border),
            text: (0, i.Tm)(s.no.pressed.text),
            outline: (0, i.Tm)(s.no.pressed.outline)
          },
          disabled: {
            background: (0, i.Tm)(s.no.disabled.background),
            border: (0, i.Tm)(s.no.disabled.border),
            text: (0, i.Tm)(s.no.disabled.text),
            outline: (0, i.Tm)(s.no.disabled.outline)
          },
          loading: {
            background: (0, i.Tm)(s.no.loading.background),
            border: (0, i.Tm)(s.no.loading.border),
            text: (0, i.Tm)(s.no.loading.text),
            outline: (0, i.Tm)(s.no.loading.outline)
          }
        },
        l = {
          textLuminance: .179,
          darkenLuminance: .035,
          hoverLuminance: .08,
          pressedLuminance: .15
        },
        u = ({
          refs: {
            buttonRef: e
          },
          config: {
            textLuminance: t,
            darkenLuminance: n,
            hoverLuminance: s,
            pressedLuminance: l
          },
          overrides: {
            backgroundColor: u,
            hoverColor: d,
            pressedColor: f,
            textColor: p
          },
          enabled: h = !1
        }, m = []) => {
          (0, o.useEffect)(() => {
            if (!e.current || !u || !h) return;
            const o = `${u}:${t}:${n}`,
              {
                text: m,
                hover: v,
                pressed: g
              } = (0, a.IO)(o, () => {
                const e = (0, r.J1)(u);
                return {
                  text: p || (e > t ? i.LU.global.color.black.static[100] : i.LU.global.color.white.static[100]),
                  hover: d || (e >= n ? (0, r.e$)(u, s) : (0, r.a)(u, s)),
                  pressed: f || (e >= n ? (0, r.e$)(u, l) : (0, r.a)(u, l))
                }
              });
            return e.current.style.setProperty(c.enabled.background, u), e.current.style.setProperty(c.enabled.border, u), e.current.style.setProperty(c.enabled.text, m), e.current.style.setProperty(c.hover.background, v), e.current.style.setProperty(c.hover.border, v), e.current.style.setProperty(c.hover.text, m), e.current.style.setProperty(c.focus.background, v), e.current.style.setProperty(c.focus.border, v), e.current.style.setProperty(c.focus.text, m), e.current.style.setProperty(c.pressed.background, g), e.current.style.setProperty(c.pressed.border, g), e.current.style.setProperty(c.pressed.text, m), e.current.style.setProperty(c.loading.background, v), e.current.style.setProperty(c.loading.border, v), e.current.style.setProperty(c.loading.text, m), () => {
              e.current?.style.removeProperty(c.enabled.background), e.current?.style.removeProperty(c.enabled.border), e.current?.style.removeProperty(c.enabled.text), e.current?.style.removeProperty(c.hover.background), e.current?.style.removeProperty(c.hover.border), e.current?.style.removeProperty(c.hover.text), e.current?.style.removeProperty(c.focus.background), e.current?.style.removeProperty(c.focus.border), e.current?.style.removeProperty(c.focus.text), e.current?.style.removeProperty(c.pressed.background), e.current?.style.removeProperty(c.pressed.border), e.current?.style.removeProperty(c.pressed.text), e.current?.style.removeProperty(c.loading.background), e.current?.style.removeProperty(c.loading.border), e.current?.style.removeProperty(c.loading.text)
            }
          }, [e.current, t, n, s, l, u, d, f, p, h, ...m])
        }
    },
    888(e, t, n) {
      n.d(t, {
        Dk: () => c,
        YK: () => s.YK,
        tz: () => a.A
      });
      var r = n(9793),
        o = n(4637),
        i = n(4422),
        s = n(7338),
        a = n(4775);
      const c = ({
        children: e,
        messages: t,
        locale: n,
        fallback: s
      }) => {
        const [a, c] = (0, o.useState)(null);
        return (0, o.useEffect)(() => {
          (t?.[n] ?? t["en-US"]).then(e => {
            c(e.default)
          })
        }, [n]), a ? (0, r.jsx)(i.A, {
          locale: n,
          messages: a,
          children: e
        }) : s ?? null
      }
    },
    8789(e, t, n) {
      n.d(t, {
        nz: () => r,
        wj: () => o,
        xW: () => i,
        Np: () => s,
        HZ: () => a,
        X6: () => c,
        yU: () => l
      });
      var r = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        o = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        i = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        s = "foundry_nu8bkpb",
        a = "--foundry-platform-scales-ratio-65afb887",
        c = "foundry_nu8bkp4",
        l = "foundry_nu8bkp3"
    },
    7690(e, t, n) {
      function r(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }
      n.d(t, {
        q: () => r
      })
    },
    8316(e, t, n) {
      function r(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      n.d(t, {
        mK: () => r
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    2667(e, t, n) {
      n.d(t, {
        _V: () => x,
        bL: () => w
      });
      var r = n(4637),
        o = n(3367),
        i = n(8351),
        s = n(6627),
        a = n(972),
        c = n(9104);

      function l() {
        return () => {}
      }
      var u = n(9793),
        d = "Avatar",
        [f, p] = (0, o.A)(d),
        [h, m] = f(d),
        v = r.forwardRef((e, t) => {
          const {
            __scopeAvatar: n,
            ...o
          } = e, [i, s] = r.useState("idle");
          return (0, u.jsx)(h, {
            scope: n,
            imageLoadingStatus: i,
            onImageLoadingStatusChange: s,
            children: (0, u.jsx)(a.sG.span, {
              ...o,
              ref: t
            })
          })
        });
      v.displayName = d;
      var g = "AvatarImage",
        y = r.forwardRef((e, t) => {
          const {
            __scopeAvatar: n,
            src: o,
            onLoadingStatusChange: d = () => {},
            ...f
          } = e, p = m(g, n), h = function(e, {
            referrerPolicy: t,
            crossOrigin: n
          }) {
            const o = (0, c.useSyncExternalStore)(l, () => !0, () => !1),
              i = r.useRef(null),
              a = o ? (i.current || (i.current = new window.Image), i.current) : null,
              [u, d] = r.useState(() => b(a, e));
            return (0, s.N)(() => {
              d(b(a, e))
            }, [a, e]), (0, s.N)(() => {
              const e = e => () => {
                d(e)
              };
              if (!a) return;
              const r = e("loaded"),
                o = e("error");
              return a.addEventListener("load", r), a.addEventListener("error", o), t && (a.referrerPolicy = t), "string" == typeof n && (a.crossOrigin = n), () => {
                a.removeEventListener("load", r), a.removeEventListener("error", o)
              }
            }, [a, n, t]), u
          }(o, f), v = (0, i.c)(e => {
            d(e), p.onImageLoadingStatusChange(e)
          });
          return (0, s.N)(() => {
            "idle" !== h && v(h)
          }, [h, v]), "loaded" === h ? (0, u.jsx)(a.sG.img, {
            ...f,
            ref: t,
            src: o
          }) : null
        });
      y.displayName = g;
      var _ = "AvatarFallback";

      function b(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      r.forwardRef((e, t) => {
        const {
          __scopeAvatar: n,
          delayMs: o,
          ...i
        } = e, s = m(_, n), [c, l] = r.useState(void 0 === o);
        return r.useEffect(() => {
          if (void 0 !== o) {
            const e = window.setTimeout(() => l(!0), o);
            return () => window.clearTimeout(e)
          }
        }, [o]), c && "loaded" !== s.imageLoadingStatus ? (0, u.jsx)(a.sG.span, {
          ...i,
          ref: t
        }) : null
      }).displayName = _;
      var w = v,
        x = y
    },
    3028(e, t, n) {
      n.d(t, {
        N: () => c
      });
      var r = n(4637),
        o = n(3582),
        i = n(446),
        s = n(2976),
        a = n(9793);

      function c(e) {
        const t = e + "CollectionProvider",
          [n, c] = (0, o.A)(t),
          [l, u] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = e => {
            const {
              scope: t,
              children: n
            } = e, o = r.useRef(null), i = r.useRef(new Map).current;
            return (0, a.jsx)(l, {
              scope: t,
              itemMap: i,
              collectionRef: o,
              children: n
            })
          };
        d.displayName = t;
        const f = e + "CollectionSlot",
          p = (0, s.TL)(f),
          h = r.forwardRef((e, t) => {
            const {
              scope: n,
              children: r
            } = e, o = u(f, n), s = (0, i.s)(t, o.collectionRef);
            return (0, a.jsx)(p, {
              ref: s,
              children: r
            })
          });
        h.displayName = f;
        const m = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          g = (0, s.TL)(m),
          y = r.forwardRef((e, t) => {
            const {
              scope: n,
              children: o,
              ...s
            } = e, c = r.useRef(null), l = (0, i.s)(t, c), d = u(m, n);
            return r.useEffect(() => (d.itemMap.set(c, {
              ref: c,
              ...s
            }), () => {
              d.itemMap.delete(c)
            })), (0, a.jsx)(g, {
              [v]: "",
              ref: l,
              children: o
            })
          });
        return y.displayName = m, [{
          Provider: d,
          Slot: h,
          ItemSlot: y
        }, function(t) {
          const n = u(e + "CollectionConsumer", t);
          return r.useCallback(() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${v}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
          }, [n.collectionRef, n.itemMap])
        }, c]
      }
      Map
    },
    3582(e, t, n) {
      n.d(t, {
        A: () => s,
        q: () => i
      });
      var r = n(4637),
        o = n(9793);

      function i(e, t) {
        const n = r.createContext(t),
          i = e => {
            const {
              children: t,
              ...i
            } = e, s = r.useMemo(() => i, Object.values(i));
            return (0, o.jsx)(n.Provider, {
              value: s,
              children: t
            })
          };
        return i.displayName = e + "Provider", [i, function(o) {
          const i = r.useContext(n);
          if (i) return i;
          if (void 0 !== t) return t;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function s(e, t = []) {
        let n = [];
        const i = () => {
          const t = n.map(e => r.createContext(e));
          return function(n) {
            const o = n?.[e] || t;
            return r.useMemo(() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: o
              }
            }), [n, o])
          }
        };
        return i.scopeName = e, [function(t, i) {
          const s = r.createContext(i),
            a = n.length;
          n = [...n, i];
          const c = t => {
            const {
              scope: n,
              children: i,
              ...c
            } = t, l = n?.[e]?.[a] || s, u = r.useMemo(() => c, Object.values(c));
            return (0, o.jsx)(l.Provider, {
              value: u,
              children: i
            })
          };
          return c.displayName = t + "Provider", [c, function(n, o) {
            const c = o?.[e]?.[a] || s,
              l = r.useContext(c);
            if (l) return l;
            if (void 0 !== i) return i;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, a(i, ...t)]
      }

      function a(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const o = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return r.useMemo(() => ({
              [`__scope${t.scopeName}`]: o
            }), [o])
          }
        };
        return n.scopeName = t.scopeName, n
      }
    },
    3367(e, t, n) {
      n.d(t, {
        A: () => i
      });
      var r = n(4637),
        o = n(9793);

      function i(e, t = []) {
        let n = [];
        const i = () => {
          const t = n.map(e => r.createContext(e));
          return function(n) {
            const o = n?.[e] || t;
            return r.useMemo(() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: o
              }
            }), [n, o])
          }
        };
        return i.scopeName = e, [function(t, i) {
          const s = r.createContext(i);
          s.displayName = t + "Context";
          const a = n.length;
          n = [...n, i];
          const c = t => {
            const {
              scope: n,
              children: i,
              ...c
            } = t, l = n?.[e]?.[a] || s, u = r.useMemo(() => c, Object.values(c));
            return (0, o.jsx)(l.Provider, {
              value: u,
              children: i
            })
          };
          return c.displayName = t + "Provider", [c, function(n, o) {
            const c = o?.[e]?.[a] || s,
              l = r.useContext(c);
            if (l) return l;
            if (void 0 !== i) return i;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, s(i, ...t)]
      }

      function s(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const o = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return r.useMemo(() => ({
              [`__scope${t.scopeName}`]: o
            }), [o])
          }
        };
        return n.scopeName = t.scopeName, n
      }
    },
    8819(e, t, n) {
      n.d(t, {
        UC: () => ne,
        VY: () => oe,
        ZL: () => ee,
        bL: () => Z,
        bm: () => ie,
        hE: () => re,
        hJ: () => te,
        l9: () => J
      });
      var r = n(4637),
        o = n(8316),
        i = n(446),
        s = n(3582),
        a = n(6883),
        c = n(1531),
        l = n(7028),
        u = n(3876),
        d = n(2823),
        f = n(7306),
        p = n(6704),
        h = n(1685),
        m = n(5328),
        v = n(5787),
        g = n(2976),
        y = n(9793),
        _ = "Dialog",
        [b, w] = (0, s.A)(_),
        [x, S] = b(_),
        E = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: i,
            onOpenChange: s,
            modal: l = !0
          } = e, u = r.useRef(null), d = r.useRef(null), [f, p] = (0, c.i)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: s,
            caller: _
          });
          return (0, y.jsx)(x, {
            scope: t,
            triggerRef: u,
            contentRef: d,
            contentId: (0, a.B)(),
            titleId: (0, a.B)(),
            descriptionId: (0, a.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p(e => !e), [p]),
            modal: l,
            children: n
          })
        };
      E.displayName = _;
      var T = "DialogTrigger",
        C = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, s = S(T, n), a = (0, i.s)(t, s.triggerRef);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": $(s.open),
            ...r,
            ref: a,
            onClick: (0, o.mK)(e.onClick, s.onOpenToggle)
          })
        });
      C.displayName = T;
      var k = "DialogPortal",
        [P, O] = b(k, {
          forceMount: void 0
        }),
        R = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: i
          } = e, s = S(k, t);
          return (0, y.jsx)(P, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, e => (0, y.jsx)(f.C, {
              present: n || s.open,
              children: (0, y.jsx)(d.Z, {
                asChild: !0,
                container: i,
                children: e
              })
            }))
          })
        };
      R.displayName = k;
      var M = "DialogOverlay",
        D = r.forwardRef((e, t) => {
          const n = O(M, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = S(M, e.__scopeDialog);
          return i.modal ? (0, y.jsx)(f.C, {
            present: r || i.open,
            children: (0, y.jsx)(j, {
              ...o,
              ref: t
            })
          }) : null
        });
      D.displayName = M;
      var A = (0, g.TL)("DialogOverlay.RemoveScroll"),
        j = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = S(M, n);
          return (0, y.jsx)(m.A, {
            as: A,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, y.jsx)(p.sG.div, {
              "data-state": $(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        L = "DialogContent",
        I = r.forwardRef((e, t) => {
          const n = O(L, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = S(L, e.__scopeDialog);
          return (0, y.jsx)(f.C, {
            present: r || i.open,
            children: i.modal ? (0, y.jsx)(N, {
              ...o,
              ref: t
            }) : (0, y.jsx)(F, {
              ...o,
              ref: t
            })
          })
        });
      I.displayName = L;
      var N = r.forwardRef((e, t) => {
          const n = S(L, e.__scopeDialog),
            s = r.useRef(null),
            a = (0, i.s)(t, n.contentRef, s);
          return r.useEffect(() => {
            const e = s.current;
            if (e) return (0, v.Eq)(e)
          }, []), (0, y.jsx)(z, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, o.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, o.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: (0, o.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        F = r.forwardRef((e, t) => {
          const n = S(L, e.__scopeDialog),
            o = r.useRef(!1),
            i = r.useRef(!1);
          return (0, y.jsx)(z, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, i.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
              const r = t.target,
                s = n.triggerRef.current?.contains(r);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
            }
          })
        }),
        z = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: s,
            onCloseAutoFocus: a,
            ...c
          } = e, d = S(L, n), f = r.useRef(null), p = (0, i.s)(t, f);
          return (0, h.Oh)(), (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)(u.n, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: s,
              onUnmountAutoFocus: a,
              children: (0, y.jsx)(l.qW, {
                role: "dialog",
                id: d.contentId,
                "aria-describedby": d.descriptionId,
                "aria-labelledby": d.titleId,
                "data-state": $(d.open),
                ...c,
                ref: p,
                onDismiss: () => d.onOpenChange(!1)
              })
            }), (0, y.jsxs)(y.Fragment, {
              children: [(0, y.jsx)(Y, {
                titleId: d.titleId
              }), (0, y.jsx)(Q, {
                contentRef: f,
                descriptionId: d.descriptionId
              })]
            })]
          })
        }),
        V = "DialogTitle",
        B = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = S(V, n);
          return (0, y.jsx)(p.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      B.displayName = V;
      var q = "DialogDescription",
        K = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = S(q, n);
          return (0, y.jsx)(p.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      K.displayName = q;
      var W = "DialogClose",
        H = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, i = S(W, n);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.mK)(e.onClick, () => i.onOpenChange(!1))
          })
        });

      function $(e) {
        return e ? "open" : "closed"
      }
      H.displayName = W;
      var U = "DialogTitleWarning",
        [G, X] = (0, s.q)(U, {
          contentName: L,
          titleName: V,
          docsSlug: "dialog"
        }),
        Y = ({
          titleId: e
        }) => {
          const t = X(U),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return r.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        Q = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${X("DialogDescriptionWarning").contentName}}.`;
          return r.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        Z = E,
        J = C,
        ee = R,
        te = D,
        ne = I,
        re = B,
        oe = K,
        ie = H
    },
    3689(e, t, n) {
      n.d(t, {
        jH: () => i
      });
      var r = n(4637),
        o = (n(9793), r.createContext(void 0));

      function i(e) {
        const t = r.useContext(o);
        return e || t || "ltr"
      }
    },
    7028(e, t, n) {
      n.d(t, {
        lg: () => g,
        qW: () => f,
        bL: () => v
      });
      var r, o = n(4637),
        i = n(8316),
        s = n(6704),
        a = n(446),
        c = n(8351),
        l = n(9793),
        u = "dismissableLayer.update",
        d = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        f = o.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: f,
            onPointerDownOutside: p,
            onFocusOutside: v,
            onInteractOutside: g,
            onDismiss: y,
            ..._
          } = e, b = o.useContext(d), [w, x] = o.useState(null), S = w?.ownerDocument ?? globalThis?.document, [, E] = o.useState({}), T = (0, a.s)(t, e => x(e)), C = Array.from(b.layers), [k] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1), P = C.indexOf(k), O = w ? C.indexOf(w) : -1, R = b.layersWithOutsidePointerEventsDisabled.size > 0, M = O >= P, D = function(e, t = globalThis?.document) {
            const n = (0, c.c)(e),
              r = o.useRef(!1),
              i = o.useRef(() => {});
            return o.useEffect(() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      m("dismissableLayer.pointerDownOutside", n, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", i.current);
                  r.current = !1
                },
                o = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current)
              }
            }, [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }(e => {
            const t = e.target,
              n = [...b.branches].some(e => e.contains(t));
            M && !n && (p?.(e), g?.(e), e.defaultPrevented || y?.())
          }, S), A = function(e, t = globalThis?.document) {
            const n = (0, c.c)(e),
              r = o.useRef(!1);
            return o.useEffect(() => {
              const e = e => {
                e.target && !r.current && m("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }(e => {
            const t = e.target;
            [...b.branches].some(e => e.contains(t)) || (v?.(e), g?.(e), e.defaultPrevented || y?.())
          }, S);
          return function(e, t = globalThis?.document) {
            const n = (0, c.c)(e);
            o.useEffect(() => {
              const e = e => {
                "Escape" === e.key && n(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }, [n, t])
          }(e => {
            O === b.layers.size - 1 && (f?.(e), !e.defaultPrevented && y && (e.preventDefault(), y()))
          }, S), o.useEffect(() => {
            if (w) return n && (0 === b.layersWithOutsidePointerEventsDisabled.size && (r = S.body.style.pointerEvents, S.body.style.pointerEvents = "none"), b.layersWithOutsidePointerEventsDisabled.add(w)), b.layers.add(w), h(), () => {
              n && 1 === b.layersWithOutsidePointerEventsDisabled.size && (S.body.style.pointerEvents = r)
            }
          }, [w, S, n, b]), o.useEffect(() => () => {
            w && (b.layers.delete(w), b.layersWithOutsidePointerEventsDisabled.delete(w), h())
          }, [w, b]), o.useEffect(() => {
            const e = () => E({});
            return document.addEventListener(u, e), () => document.removeEventListener(u, e)
          }, []), (0, l.jsx)(s.sG.div, {
            ..._,
            ref: T,
            style: {
              pointerEvents: R ? M ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, i.mK)(e.onFocusCapture, A.onFocusCapture),
            onBlurCapture: (0, i.mK)(e.onBlurCapture, A.onBlurCapture),
            onPointerDownCapture: (0, i.mK)(e.onPointerDownCapture, D.onPointerDownCapture)
          })
        });
      f.displayName = "DismissableLayer";
      var p = o.forwardRef((e, t) => {
        const n = o.useContext(d),
          r = o.useRef(null),
          i = (0, a.s)(t, r);
        return o.useEffect(() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, l.jsx)(s.sG.div, {
          ...e,
          ref: i
        })
      });

      function h() {
        const e = new CustomEvent(u);
        document.dispatchEvent(e)
      }

      function m(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? (0, s.hO)(o, i) : o.dispatchEvent(i)
      }
      p.displayName = "DismissableLayerBranch";
      var v = f,
        g = p
    },
    1685(e, t, n) {
      n.d(t, {
        Oh: () => i
      });
      var r = n(4637),
        o = 0;

      function i() {
        r.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? s()), document.body.insertAdjacentElement("beforeend", e[1] ?? s()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
          }
        }, [])
      }

      function s() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    3876(e, t, n) {
      n.d(t, {
        n: () => d
      });
      var r = n(4637),
        o = n(446),
        i = n(6704),
        s = n(8351),
        a = n(9793),
        c = "focusScope.autoFocusOnMount",
        l = "focusScope.autoFocusOnUnmount",
        u = {
          bubbles: !1,
          cancelable: !0
        },
        d = r.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: d = !1,
            onMountAutoFocus: h,
            onUnmountAutoFocus: g,
            ...y
          } = e, [_, b] = r.useState(null), w = (0, s.c)(h), x = (0, s.c)(g), S = r.useRef(null), E = (0, o.s)(t, e => b(e)), T = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect(() => {
            if (d) {
              let e = function(e) {
                  if (T.paused || !_) return;
                  const t = e.target;
                  _.contains(t) ? S.current = t : m(S.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (T.paused || !_) return;
                  const t = e.relatedTarget;
                  null !== t && (_.contains(t) || m(S.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && m(_)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return _ && r.observe(_, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }, [d, _, T.paused]), r.useEffect(() => {
            if (_) {
              v.add(T);
              const e = document.activeElement;
              if (!_.contains(e)) {
                const t = new CustomEvent(c, u);
                _.addEventListener(c, w), _.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (m(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(f(_).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && m(_))
              }
              return () => {
                _.removeEventListener(c, w), setTimeout(() => {
                  const t = new CustomEvent(l, u);
                  _.addEventListener(l, x), _.dispatchEvent(t), t.defaultPrevented || m(e ?? document.body, {
                    select: !0
                  }), _.removeEventListener(l, x), v.remove(T)
                }, 0)
              }
            }
          }, [_, w, x, T]);
          const C = r.useCallback(e => {
            if (!n && !d) return;
            if (T.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, i] = function(e) {
                  const t = f(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              o && i ? e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && m(i, {
                select: !0
              })) : (e.preventDefault(), n && m(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }, [n, d, T.paused]);
          return (0, a.jsx)(i.sG.div, {
            tabIndex: -1,
            ...y,
            ref: E,
            onKeyDown: C
          })
        });

      function f(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function p(e, t) {
        for (const n of e)
          if (!h(n, {
              upTo: t
            })) return n
      }

      function h(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function m(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      d.displayName = "FocusScope";
      var v = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = g(e, t), e.unshift(t)
          },
          remove(t) {
            e = g(e, t), e[0]?.resume()
          }
        }
      }();

      function g(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
    },
    6883(e, t, n) {
      var r;
      n.d(t, {
        B: () => c
      });
      var o = n(4637),
        i = n(6627),
        s = (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        a = 0;

      function c(e) {
        const [t, n] = o.useState(s());
        return (0, i.N)(() => {
          e || n(e => e ?? String(a++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
    },
    1421(e, t, n) {
      n.d(t, {
        Mz: () => $,
        UC: () => X,
        ZL: () => G,
        bL: () => H,
        bm: () => Y,
        i3: () => Q,
        l9: () => U
      });
      var r = n(4637),
        o = n(8316),
        i = n(446),
        s = n(3582),
        a = n(7028),
        c = n(1685),
        l = n(3876),
        u = n(6883),
        d = n(5677),
        f = n(2823),
        p = n(7306),
        h = n(6704),
        m = n(2976),
        v = n(1531),
        g = n(5787),
        y = n(5328),
        _ = n(9793),
        b = "Popover",
        [w, x] = (0, s.A)(b, [d.Bk]),
        S = (0, d.Bk)(),
        [E, T] = w(b),
        C = e => {
          const {
            __scopePopover: t,
            children: n,
            open: o,
            defaultOpen: i,
            onOpenChange: s,
            modal: a = !1
          } = e, c = S(t), l = r.useRef(null), [f, p] = r.useState(!1), [h, m] = (0, v.i)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: s,
            caller: b
          });
          return (0, _.jsx)(d.bL, {
            ...c,
            children: (0, _.jsx)(E, {
              scope: t,
              contentId: (0, u.B)(),
              triggerRef: l,
              open: h,
              onOpenChange: m,
              onOpenToggle: r.useCallback(() => m(e => !e), [m]),
              hasCustomAnchor: f,
              onCustomAnchorAdd: r.useCallback(() => p(!0), []),
              onCustomAnchorRemove: r.useCallback(() => p(!1), []),
              modal: a,
              children: n
            })
          })
        };
      C.displayName = b;
      var k = "PopoverAnchor",
        P = r.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...o
          } = e, i = T(k, n), s = S(n), {
            onCustomAnchorAdd: a,
            onCustomAnchorRemove: c
          } = i;
          return r.useEffect(() => (a(), () => c()), [a, c]), (0, _.jsx)(d.Mz, {
            ...s,
            ...o,
            ref: t
          })
        });
      P.displayName = k;
      var O = "PopoverTrigger",
        R = r.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, s = T(O, n), a = S(n), c = (0, i.s)(t, s.triggerRef), l = (0, _.jsx)(h.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": W(s.open),
            ...r,
            ref: c,
            onClick: (0, o.mK)(e.onClick, s.onOpenToggle)
          });
          return s.hasCustomAnchor ? l : (0, _.jsx)(d.Mz, {
            asChild: !0,
            ...a,
            children: l
          })
        });
      R.displayName = O;
      var M = "PopoverPortal",
        [D, A] = w(M, {
          forceMount: void 0
        }),
        j = e => {
          const {
            __scopePopover: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = T(M, t);
          return (0, _.jsx)(D, {
            scope: t,
            forceMount: n,
            children: (0, _.jsx)(p.C, {
              present: n || i.open,
              children: (0, _.jsx)(f.Z, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      j.displayName = M;
      var L = "PopoverContent",
        I = r.forwardRef((e, t) => {
          const n = A(L, e.__scopePopover),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = T(L, e.__scopePopover);
          return (0, _.jsx)(p.C, {
            present: r || i.open,
            children: i.modal ? (0, _.jsx)(F, {
              ...o,
              ref: t
            }) : (0, _.jsx)(z, {
              ...o,
              ref: t
            })
          })
        });
      I.displayName = L;
      var N = (0, m.TL)("PopoverContent.RemoveScroll"),
        F = r.forwardRef((e, t) => {
          const n = T(L, e.__scopePopover),
            s = r.useRef(null),
            a = (0, i.s)(t, s),
            c = r.useRef(!1);
          return r.useEffect(() => {
            const e = s.current;
            if (e) return (0, g.Eq)(e)
          }, []), (0, _.jsx)(y.A, {
            as: N,
            allowPinchZoom: !0,
            children: (0, _.jsx)(V, {
              ...e,
              ref: a,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), c.current || n.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, o.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey,
                  r = 2 === t.button || n;
                c.current = r
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, o.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        z = r.forwardRef((e, t) => {
          const n = T(L, e.__scopePopover),
            o = r.useRef(!1),
            i = r.useRef(!1);
          return (0, _.jsx)(V, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, i.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
              const r = t.target,
                s = n.triggerRef.current?.contains(r);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
            }
          })
        }),
        V = r.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: u,
            onPointerDownOutside: f,
            onFocusOutside: p,
            onInteractOutside: h,
            ...m
          } = e, v = T(L, n), g = S(n);
          return (0, c.Oh)(), (0, _.jsx)(l.n, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: (0, _.jsx)(a.qW, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: h,
              onEscapeKeyDown: u,
              onPointerDownOutside: f,
              onFocusOutside: p,
              onDismiss: () => v.onOpenChange(!1),
              children: (0, _.jsx)(d.UC, {
                "data-state": W(v.open),
                role: "dialog",
                id: v.contentId,
                ...g,
                ...m,
                ref: t,
                style: {
                  ...m.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              })
            })
          })
        }),
        B = "PopoverClose",
        q = r.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, i = T(B, n);
          return (0, _.jsx)(h.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.mK)(e.onClick, () => i.onOpenChange(!1))
          })
        });
      q.displayName = B;
      var K = r.forwardRef((e, t) => {
        const {
          __scopePopover: n,
          ...r
        } = e, o = S(n);
        return (0, _.jsx)(d.i3, {
          ...o,
          ...r,
          ref: t
        })
      });

      function W(e) {
        return e ? "open" : "closed"
      }
      K.displayName = "PopoverArrow";
      var H = C,
        $ = P,
        U = R,
        G = j,
        X = I,
        Y = q,
        Q = K
    },
    5677(e, t, n) {
      n.d(t, {
        Mz: () => ct,
        i3: () => ut,
        UC: () => lt,
        bL: () => at,
        Bk: () => He
      });
      var r = n(4637);
      const o = ["top", "right", "bottom", "left"],
        i = Math.min,
        s = Math.max,
        a = Math.round,
        c = Math.floor,
        l = e => ({
          x: e,
          y: e
        }),
        u = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

      function d(e, t, n) {
        return s(e, i(t, n))
      }

      function f(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function p(e) {
        return e.split("-")[0]
      }

      function h(e) {
        return e.split("-")[1]
      }

      function m(e) {
        return "x" === e ? "y" : "x"
      }

      function v(e) {
        return "y" === e ? "height" : "width"
      }

      function g(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
      }

      function y(e) {
        return m(g(e))
      }

      function _(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
      }
      const b = ["left", "right"],
        w = ["right", "left"],
        x = ["top", "bottom"],
        S = ["bottom", "top"];

      function E(e) {
        const t = p(e);
        return u[t] + e.slice(t.length)
      }

      function T(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function C(e) {
        const {
          x: t,
          y: n,
          width: r,
          height: o
        } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n
        }
      }

      function k(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = g(t),
          s = y(t),
          a = v(s),
          c = p(t),
          l = "y" === i,
          u = r.x + r.width / 2 - o.width / 2,
          d = r.y + r.height / 2 - o.height / 2,
          f = r[a] / 2 - o[a] / 2;
        let m;
        switch (c) {
          case "top":
            m = {
              x: u,
              y: r.y - o.height
            };
            break;
          case "bottom":
            m = {
              x: u,
              y: r.y + r.height
            };
            break;
          case "right":
            m = {
              x: r.x + r.width,
              y: d
            };
            break;
          case "left":
            m = {
              x: r.x - o.width,
              y: d
            };
            break;
          default:
            m = {
              x: r.x,
              y: r.y
            }
        }
        switch (h(t)) {
          case "start":
            m[s] -= f * (n && l ? -1 : 1);
            break;
          case "end":
            m[s] += f * (n && l ? -1 : 1)
        }
        return m
      }
      async function P(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: r,
          y: o,
          platform: i,
          rects: s,
          elements: a,
          strategy: c
        } = e, {
          boundary: l = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: d = "floating",
          altBoundary: p = !1,
          padding: h = 0
        } = f(t, e), m = T(h), v = a[p ? "floating" === d ? "reference" : "floating" : d], g = C(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n ? v : v.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
          boundary: l,
          rootBoundary: u,
          strategy: c
        })), y = "floating" === d ? {
          x: r,
          y: o,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, _ = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), b = await (null == i.isElement ? void 0 : i.isElement(_)) && await (null == i.getScale ? void 0 : i.getScale(_)) || {
          x: 1,
          y: 1
        }, w = C(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: y,
          offsetParent: _,
          strategy: c
        }) : y);
        return {
          top: (g.top - w.top + m.top) / b.y,
          bottom: (w.bottom - g.bottom + m.bottom) / b.y,
          left: (g.left - w.left + m.left) / b.x,
          right: (w.right - g.right + m.right) / b.x
        }
      }

      function O(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function R(e) {
        return o.some(t => e[t] >= 0)
      }
      const M = new Set(["left", "top"]);

      function D() {
        return "undefined" != typeof window
      }

      function A(e) {
        return I(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function j(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function L(e) {
        var t;
        return null == (t = (I(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function I(e) {
        return !!D() && (e instanceof Node || e instanceof j(e).Node)
      }

      function N(e) {
        return !!D() && (e instanceof Element || e instanceof j(e).Element)
      }

      function F(e) {
        return !!D() && (e instanceof HTMLElement || e instanceof j(e).HTMLElement)
      }

      function z(e) {
        return !(!D() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof j(e).ShadowRoot)
      }

      function V(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = Y(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== o && "contents" !== o
      }

      function B(e) {
        return /^(table|td|th)$/.test(A(e))
      }

      function q(e) {
        try {
          if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
          return e.matches(":modal")
        } catch (e) {
          return !1
        }
      }
      const K = /transform|translate|scale|rotate|perspective|filter/,
        W = /paint|layout|strict|content/,
        H = e => !!e && "none" !== e;
      let $;

      function U(e) {
        const t = N(e) ? Y(e) : e;
        return H(t.transform) || H(t.translate) || H(t.scale) || H(t.rotate) || H(t.perspective) || !G() && (H(t.backdropFilter) || H(t.filter)) || K.test(t.willChange || "") || W.test(t.contain || "")
      }

      function G() {
        return null == $ && ($ = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), $
      }

      function X(e) {
        return /^(html|body|#document)$/.test(A(e))
      }

      function Y(e) {
        return j(e).getComputedStyle(e)
      }

      function Q(e) {
        return N(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Z(e) {
        if ("html" === A(e)) return e;
        const t = e.assignedSlot || e.parentNode || z(e) && e.host || L(e);
        return z(t) ? t.host : t
      }

      function J(e) {
        const t = Z(e);
        return X(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : F(t) && V(t) ? t : J(t)
      }

      function ee(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = J(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          s = j(o);
        if (i) {
          const e = te(s);
          return t.concat(s, s.visualViewport || [], V(o) ? o : [], e && n ? ee(e) : [])
        }
        return t.concat(o, ee(o, [], n))
      }

      function te(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function ne(e) {
        const t = Y(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = F(e),
          i = o ? e.offsetWidth : n,
          s = o ? e.offsetHeight : r,
          c = a(n) !== i || a(r) !== s;
        return c && (n = i, r = s), {
          width: n,
          height: r,
          $: c
        }
      }

      function re(e) {
        return N(e) ? e : e.contextElement
      }

      function oe(e) {
        const t = re(e);
        if (!F(t)) return l(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = ne(t);
        let s = (i ? a(n.width) : n.width) / r,
          c = (i ? a(n.height) : n.height) / o;
        return s && Number.isFinite(s) || (s = 1), c && Number.isFinite(c) || (c = 1), {
          x: s,
          y: c
        }
      }
      const ie = l(0);

      function se(e) {
        const t = j(e);
        return G() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : ie
      }

      function ae(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = re(e);
        let s = l(1);
        t && (r ? N(r) && (s = oe(r)) : s = oe(e));
        const a = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== j(e)) && t
        }(i, n, r) ? se(i) : l(0);
        let c = (o.left + a.x) / s.x,
          u = (o.top + a.y) / s.y,
          d = o.width / s.x,
          f = o.height / s.y;
        if (i) {
          const e = j(i),
            t = r && N(r) ? j(r) : r;
          let n = e,
            o = te(n);
          for (; o && r && t !== n;) {
            const e = oe(o),
              t = o.getBoundingClientRect(),
              r = Y(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              s = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            c *= e.x, u *= e.y, d *= e.x, f *= e.y, c += i, u += s, n = j(o), o = te(n)
          }
        }
        return C({
          width: d,
          height: f,
          x: c,
          y: u
        })
      }

      function ce(e, t) {
        const n = Q(e).scrollLeft;
        return t ? t.left + n : ae(L(e)).left + n
      }

      function le(e, t) {
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - ce(e, n),
          y: n.top + t.scrollTop
        }
      }

      function ue(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = j(e),
            r = L(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            s = r.clientHeight,
            a = 0,
            c = 0;
          if (o) {
            i = o.width, s = o.height;
            const e = G();
            (!e || e && "fixed" === t) && (a = o.offsetLeft, c = o.offsetTop)
          }
          const l = ce(r);
          if (l <= 0) {
            const e = r.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              s = Math.abs(r.clientWidth - t.clientWidth - o);
            s <= 25 && (i -= s)
          } else l <= 25 && (i += l);
          return {
            width: i,
            height: s,
            x: a,
            y: c
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = L(e),
            n = Q(e),
            r = e.ownerDocument.body,
            o = s(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = s(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -n.scrollLeft + ce(e);
          const c = -n.scrollTop;
          return "rtl" === Y(r).direction && (a += s(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: a,
            y: c
          }
        }(L(e));
        else if (N(t)) r = function(e, t) {
          const n = ae(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = F(e) ? oe(e) : l(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = se(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return C(r)
      }

      function de(e, t) {
        const n = Z(e);
        return !(n === t || !N(n) || X(n)) && ("fixed" === Y(n).position || de(n, t))
      }

      function fe(e, t, n) {
        const r = F(t),
          o = L(t),
          i = "fixed" === n,
          s = ae(e, !0, i, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const c = l(0);

        function u() {
          c.x = ce(o)
        }
        if (r || !r && !i)
          if (("body" !== A(t) || V(o)) && (a = Q(t)), r) {
            const e = ae(t, !0, i, t);
            c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
          } else o && u();
        i && !r && o && u();
        const d = !o || r || i ? l(0) : le(o, a);
        return {
          x: s.left + a.scrollLeft - c.x - d.x,
          y: s.top + a.scrollTop - c.y - d.y,
          width: s.width,
          height: s.height
        }
      }

      function pe(e) {
        return "static" === Y(e).position
      }

      function he(e, t) {
        if (!F(e) || "fixed" === Y(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return L(e) === n && (n = n.ownerDocument.body), n
      }

      function me(e, t) {
        const n = j(e);
        if (q(e)) return n;
        if (!F(e)) {
          let t = Z(e);
          for (; t && !X(t);) {
            if (N(t) && !pe(t)) return t;
            t = Z(t)
          }
          return n
        }
        let r = he(e, t);
        for (; r && B(r) && pe(r);) r = he(r, t);
        return r && X(r) && pe(r) && !U(r) ? n : r || function(e) {
          let t = Z(e);
          for (; F(t) && !X(t);) {
            if (U(t)) return t;
            if (q(t)) return null;
            t = Z(t)
          }
          return null
        }(e) || n
      }
      const ve = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            s = L(r),
            a = !!t && q(t.floating);
          if (r === s || a && i) return n;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = l(1);
          const d = l(0),
            f = F(r);
          if ((f || !f && !i) && (("body" !== A(r) || V(s)) && (c = Q(r)), f)) {
            const e = ae(r);
            u = oe(r), d.x = e.x + r.clientLeft, d.y = e.y + r.clientTop
          }
          const p = !s || f || i ? l(0) : le(s, c);
          return {
            width: n.width * u.x,
            height: n.height * u.y,
            x: n.x * u.x - c.scrollLeft * u.x + d.x + p.x,
            y: n.y * u.y - c.scrollTop * u.y + d.y + p.y
          }
        },
        getDocumentElement: L,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const a = [..."clippingAncestors" === n ? q(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = ee(e, [], !1).filter(e => N(e) && "body" !== A(e)),
                o = null;
              const i = "fixed" === Y(e).position;
              let s = i ? Z(e) : e;
              for (; N(s) && !X(s);) {
                const t = Y(s),
                  n = U(s);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ("absolute" === o.position || "fixed" === o.position) || V(s) && !n && de(e, s)) ? r = r.filter(e => e !== s) : o = t, s = Z(s)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            c = ue(t, a[0], o);
          let l = c.top,
            u = c.right,
            d = c.bottom,
            f = c.left;
          for (let e = 1; e < a.length; e++) {
            const n = ue(t, a[e], o);
            l = s(n.top, l), u = i(n.right, u), d = i(n.bottom, d), f = s(n.left, f)
          }
          return {
            width: u - f,
            height: d - l,
            x: f,
            y: l
          }
        },
        getOffsetParent: me,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || me,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: fe(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: r.width,
              height: r.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: n
          } = ne(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: oe,
        isElement: N,
        isRTL: function(e) {
          return "rtl" === Y(e).direction
        }
      };

      function ge(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const ye = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                middlewareData: i,
                rects: s,
                initialPlacement: a,
                platform: c,
                elements: l
              } = t, {
                mainAxis: u = !0,
                crossAxis: d = !0,
                fallbackPlacements: m,
                fallbackStrategy: T = "bestFit",
                fallbackAxisSideDirection: C = "none",
                flipAlignment: k = !0,
                ...P
              } = f(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const O = p(o),
                R = g(a),
                M = p(a) === a,
                D = await (null == c.isRTL ? void 0 : c.isRTL(l.floating)),
                A = m || (M || !k ? [E(a)] : function(e) {
                  const t = E(e);
                  return [_(e), t, _(t)]
                }(a)),
                j = "none" !== C;
              !m && j && A.push(... function(e, t, n, r) {
                const o = h(e);
                let i = function(e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? w : b : t ? b : w;
                    case "left":
                    case "right":
                      return t ? x : S;
                    default:
                      return []
                  }
                }(p(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(_)))), i
              }(a, k, C, D));
              const L = [a, ...A],
                I = await c.detectOverflow(t, P),
                N = [];
              let F = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (u && N.push(I[O]), d) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = h(e),
                    o = y(e),
                    i = v(o);
                  let s = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (s = E(s)), [s, E(s)]
                }(o, s, D);
                N.push(I[e[0]], I[e[1]])
              }
              if (F = [...F, {
                  placement: o,
                  overflows: N
                }], !N.every(e => e <= 0)) {
                var z, V;
                const e = ((null == (z = i.flip) ? void 0 : z.index) || 0) + 1,
                  t = L[e];
                if (t && ("alignment" !== d || R === g(t) || F.every(e => g(e.placement) !== R || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: F
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (V = F.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : V.placement;
                if (!n) switch (T) {
                  case "bestFit": {
                    var B;
                    const e = null == (B = F.filter(e => {
                      if (j) {
                        const t = g(e.placement);
                        return t === R || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : B[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = a
                }
                if (o !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        },
        _e = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: n,
              y: r,
              placement: o,
              rects: s,
              platform: a,
              elements: c,
              middlewareData: l
            } = t, {
              element: u,
              padding: p = 0
            } = f(e, t) || {};
            if (null == u) return {};
            const m = T(p),
              g = {
                x: n,
                y: r
              },
              _ = y(o),
              b = v(_),
              w = await a.getDimensions(u),
              x = "y" === _,
              S = x ? "top" : "left",
              E = x ? "bottom" : "right",
              C = x ? "clientHeight" : "clientWidth",
              k = s.reference[b] + s.reference[_] - g[_] - s.floating[b],
              P = g[_] - s.reference[_],
              O = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(u));
            let R = O ? O[C] : 0;
            R && await (null == a.isElement ? void 0 : a.isElement(O)) || (R = c.floating[C] || s.floating[b]);
            const M = k / 2 - P / 2,
              D = R / 2 - w[b] / 2 - 1,
              A = i(m[S], D),
              j = i(m[E], D),
              L = A,
              I = R - w[b] - j,
              N = R / 2 - w[b] / 2 + M,
              F = d(L, N, I),
              z = !l.arrow && null != h(o) && N !== F && s.reference[b] / 2 - (N < L ? A : j) - w[b] / 2 < 0,
              V = z ? N < L ? N - L : N - I : 0;
            return {
              [_]: g[_] + V,
              data: {
                [_]: F,
                centerOffset: N - F - V,
                ...z && {
                  alignmentOffset: V
                }
              },
              reset: z
            }
          }
        }),
        be = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                middlewareData: s
              } = t, {
                offset: a = 0,
                mainAxis: c = !0,
                crossAxis: l = !0
              } = f(e, t), u = {
                x: n,
                y: r
              }, d = g(o), h = m(d);
              let v = u[h],
                y = u[d];
              const _ = f(a, t),
                b = "number" == typeof _ ? {
                  mainAxis: _,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ..._
                };
              if (c) {
                const e = "y" === h ? "height" : "width",
                  t = i.reference[h] - i.floating[e] + b.mainAxis,
                  n = i.reference[h] + i.reference[e] - b.mainAxis;
                v < t ? v = t : v > n && (v = n)
              }
              if (l) {
                var w, x;
                const e = "y" === h ? "width" : "height",
                  t = M.has(p(o)),
                  n = i.reference[d] - i.floating[e] + (t && (null == (w = s.offset) ? void 0 : w[d]) || 0) + (t ? 0 : b.crossAxis),
                  r = i.reference[d] + i.reference[e] + (t ? 0 : (null == (x = s.offset) ? void 0 : x[d]) || 0) - (t ? b.crossAxis : 0);
                y < n ? y = n : y > r && (y = r)
              }
              return {
                [h]: v,
                [d]: y
              }
            }
          }
        },
        we = (e, t, n) => {
          const r = new Map,
            o = {
              platform: ve,
              ...n
            },
            i = {
              ...o.platform,
              _c: r
            };
          return (async (e, t, n) => {
            const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: s
            } = n, a = s.detectOverflow ? s : {
              ...s,
              detectOverflow: P
            }, c = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let l = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: u,
                y: d
              } = k(l, r, c),
              f = r,
              p = 0;
            const h = {};
            for (let n = 0; n < i.length; n++) {
              const m = i[n];
              if (!m) continue;
              const {
                name: v,
                fn: g
              } = m, {
                x: y,
                y: _,
                data: b,
                reset: w
              } = await g({
                x: u,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: o,
                middlewareData: h,
                rects: l,
                platform: a,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              u = null != y ? y : u, d = null != _ ? _ : d, h[v] = {
                ...h[v],
                ...b
              }, w && p < 50 && (p++, "object" == typeof w && (w.placement && (f = w.placement), w.rects && (l = !0 === w.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : w.rects), ({
                x: u,
                y: d
              } = k(l, f, c))), n = -1)
            }
            return {
              x: u,
              y: d,
              placement: f,
              strategy: o,
              middlewareData: h
            }
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var xe = n(4017),
        Se = "undefined" != typeof document ? r.useLayoutEffect : function() {};

      function Ee(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 !== r--;)
              if (!Ee(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 !== r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Ee(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Te(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Ce(e, t) {
        const n = Te(e);
        return Math.round(t * n) / n
      }

      function ke(e) {
        const t = r.useRef(e);
        return Se(() => {
          t.current = e
        }), t
      }
      const Pe = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = 0), {
              name: "offset",
              options: e,
              async fn(t) {
                var n, r;
                const {
                  x: o,
                  y: i,
                  placement: s,
                  middlewareData: a
                } = t, c = await async function(e, t) {
                  const {
                    placement: n,
                    platform: r,
                    elements: o
                  } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), s = p(n), a = h(n), c = "y" === g(n), l = M.has(s) ? -1 : 1, u = i && c ? -1 : 1, d = f(t, e);
                  let {
                    mainAxis: m,
                    crossAxis: v,
                    alignmentAxis: y
                  } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                  } : {
                    mainAxis: d.mainAxis || 0,
                    crossAxis: d.crossAxis || 0,
                    alignmentAxis: d.alignmentAxis
                  };
                  return a && "number" == typeof y && (v = "end" === a ? -1 * y : y), c ? {
                    x: v * u,
                    y: m * l
                  } : {
                    x: m * l,
                    y: v * u
                  }
                }(t, e);
                return s === (null == (n = a.offset) ? void 0 : n.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                  x: o + c.x,
                  y: i + c.y,
                  data: {
                    ...c,
                    placement: s
                  }
                }
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Oe = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "shift",
              options: e,
              async fn(t) {
                const {
                  x: n,
                  y: r,
                  placement: o,
                  platform: i
                } = t, {
                  mainAxis: s = !0,
                  crossAxis: a = !1,
                  limiter: c = {
                    fn: e => {
                      let {
                        x: t,
                        y: n
                      } = e;
                      return {
                        x: t,
                        y: n
                      }
                    }
                  },
                  ...l
                } = f(e, t), u = {
                  x: n,
                  y: r
                }, h = await i.detectOverflow(t, l), v = g(p(o)), y = m(v);
                let _ = u[y],
                  b = u[v];
                if (s) {
                  const e = "y" === y ? "bottom" : "right";
                  _ = d(_ + h["y" === y ? "top" : "left"], _, _ - h[e])
                }
                if (a) {
                  const e = "y" === v ? "bottom" : "right";
                  b = d(b + h["y" === v ? "top" : "left"], b, b - h[e])
                }
                const w = c.fn({
                  ...t,
                  [y]: _,
                  [v]: b
                });
                return {
                  ...w,
                  data: {
                    x: w.x - n,
                    y: w.y - r,
                    enabled: {
                      [y]: s,
                      [v]: a
                    }
                  }
                }
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Re = (e, t) => {
          const n = ye(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Me = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "size",
              options: e,
              async fn(t) {
                var n, r;
                const {
                  placement: o,
                  rects: a,
                  platform: c,
                  elements: l
                } = t, {
                  apply: u = () => {},
                  ...d
                } = f(e, t), m = await c.detectOverflow(t, d), v = p(o), y = h(o), _ = "y" === g(o), {
                  width: b,
                  height: w
                } = a.floating;
                let x, S;
                "top" === v || "bottom" === v ? (x = v, S = y === (await (null == c.isRTL ? void 0 : c.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (S = v, x = "end" === y ? "top" : "bottom");
                const E = w - m.top - m.bottom,
                  T = b - m.left - m.right,
                  C = i(w - m[x], E),
                  k = i(b - m[S], T),
                  P = !t.middlewareData.shift;
                let O = C,
                  R = k;
                if (null != (n = t.middlewareData.shift) && n.enabled.x && (R = T), null != (r = t.middlewareData.shift) && r.enabled.y && (O = E), P && !y) {
                  const e = s(m.left, 0),
                    t = s(m.right, 0),
                    n = s(m.top, 0),
                    r = s(m.bottom, 0);
                  _ ? R = b - 2 * (0 !== e || 0 !== t ? e + t : s(m.left, m.right)) : O = w - 2 * (0 !== n || 0 !== r ? n + r : s(m.top, m.bottom))
                }
                await u({
                  ...t,
                  availableWidth: R,
                  availableHeight: O
                });
                const M = await c.getDimensions(l.floating);
                return b !== M.width || w !== M.height ? {
                  reset: {
                    rects: !0
                  }
                } : {}
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        De = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "hide",
              options: e,
              async fn(t) {
                const {
                  rects: n,
                  platform: r
                } = t, {
                  strategy: o = "referenceHidden",
                  ...i
                } = f(e, t);
                switch (o) {
                  case "referenceHidden": {
                    const e = O(await r.detectOverflow(t, {
                      ...i,
                      elementContext: "reference"
                    }), n.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: R(e)
                      }
                    }
                  }
                  case "escaped": {
                    const e = O(await r.detectOverflow(t, {
                      ...i,
                      altBoundary: !0
                    }), n.floating);
                    return {
                      data: {
                        escapedOffsets: e,
                        escaped: R(e)
                      }
                    }
                  }
                  default:
                    return {}
                }
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Ae = (e, t) => {
          const n = (e => ({
            name: "arrow",
            options: e,
            fn(t) {
              const {
                element: n,
                padding: r
              } = "function" == typeof e ? e(t) : e;
              return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? _e({
                element: n.current,
                padding: r
              }).fn(t) : {} : n ? _e({
                element: n,
                padding: r
              }).fn(t) : {};
              var o
            }
          }))(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        };
      var je = n(6704),
        Le = n(9793),
        Ie = r.forwardRef((e, t) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
          } = e;
          return (0, Le.jsx)(je.sG.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, Le.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Ie.displayName = "Arrow";
      var Ne = Ie,
        Fe = n(446),
        ze = n(3582),
        Ve = n(8351),
        Be = n(6627),
        qe = n(4119),
        Ke = "Popper",
        [We, He] = (0, ze.A)(Ke),
        [$e, Ue] = We(Ke),
        Ge = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [o, i] = r.useState(null);
          return (0, Le.jsx)($e, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n
          })
        };
      Ge.displayName = Ke;
      var Xe = "PopperAnchor",
        Ye = r.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: o,
            ...i
          } = e, s = Ue(Xe, n), a = r.useRef(null), c = (0, Fe.s)(t, a), l = r.useRef(null);
          return r.useEffect(() => {
            const e = l.current;
            l.current = o?.current || a.current, e !== l.current && s.onAnchorChange(l.current)
          }), o ? null : (0, Le.jsx)(je.sG.div, {
            ...i,
            ref: c
          })
        });
      Ye.displayName = Xe;
      var Qe = "PopperContent",
        [Ze, Je] = We(Qe),
        et = r.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            side: o = "bottom",
            sideOffset: a = 0,
            align: l = "center",
            alignOffset: u = 0,
            arrowPadding: d = 0,
            avoidCollisions: f = !0,
            collisionBoundary: p = [],
            collisionPadding: h = 0,
            sticky: m = "partial",
            hideWhenDetached: v = !1,
            updatePositionStrategy: g = "optimized",
            onPlaced: y,
            ..._
          } = e, b = Ue(Qe, n), [w, x] = r.useState(null), S = (0, Fe.s)(t, e => x(e)), [E, T] = r.useState(null), C = (0, qe.X)(E), k = C?.width ?? 0, P = C?.height ?? 0, O = o + ("center" !== l ? "-" + l : ""), R = "number" == typeof h ? h : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...h
          }, M = Array.isArray(p) ? p : [p], D = M.length > 0, A = {
            padding: R,
            boundary: M.filter(ot),
            altBoundary: D
          }, {
            refs: j,
            floatingStyles: I,
            placement: N,
            isPositioned: F,
            middlewareData: z
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: o = [],
              platform: i,
              elements: {
                reference: s,
                floating: a
              } = {},
              transform: c = !0,
              whileElementsMounted: l,
              open: u
            } = e, [d, f] = r.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [p, h] = r.useState(o);
            Ee(p, o) || h(o);
            const [m, v] = r.useState(null), [g, y] = r.useState(null), _ = r.useCallback(e => {
              e !== S.current && (S.current = e, v(e))
            }, []), b = r.useCallback(e => {
              e !== E.current && (E.current = e, y(e))
            }, []), w = s || m, x = a || g, S = r.useRef(null), E = r.useRef(null), T = r.useRef(d), C = null != l, k = ke(l), P = ke(i), O = ke(u), R = r.useCallback(() => {
              if (!S.current || !E.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: p
              };
              P.current && (e.platform = P.current), we(S.current, E.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== O.current
                };
                M.current && !Ee(T.current, t) && (T.current = t, xe.flushSync(() => {
                  f(t)
                }))
              })
            }, [p, t, n, P, O]);
            Se(() => {
              !1 === u && T.current.isPositioned && (T.current.isPositioned = !1, f(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [u]);
            const M = r.useRef(!1);
            Se(() => (M.current = !0, () => {
              M.current = !1
            }), []), Se(() => {
              if (w && (S.current = w), x && (E.current = x), w && x) {
                if (k.current) return k.current(w, x, R);
                R()
              }
            }, [w, x, R, k, C]);
            const D = r.useMemo(() => ({
                reference: S,
                floating: E,
                setReference: _,
                setFloating: b
              }), [_, b]),
              A = r.useMemo(() => ({
                reference: w,
                floating: x
              }), [w, x]),
              j = r.useMemo(() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!A.floating) return e;
                const t = Ce(A.floating, d.x),
                  r = Ce(A.floating, d.y);
                return c ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...Te(A.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }, [n, c, A.floating, d.x, d.y]);
            return r.useMemo(() => ({
              ...d,
              update: R,
              refs: D,
              elements: A,
              floatingStyles: j
            }), [d, R, D, A, j])
          }({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: a = !0,
                elementResize: l = "function" == typeof ResizeObserver,
                layoutShift: u = "function" == typeof IntersectionObserver,
                animationFrame: d = !1
              } = r, f = re(e), p = o || a ? [...f ? ee(f) : [], ...t ? ee(t) : []] : [];
              p.forEach(e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), a && e.addEventListener("resize", n)
              });
              const h = f && u ? function(e, t) {
                let n, r = null;
                const o = L(e);

                function a() {
                  var e;
                  clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                }
                return function l(u, d) {
                  void 0 === u && (u = !1), void 0 === d && (d = 1), a();
                  const f = e.getBoundingClientRect(),
                    {
                      left: p,
                      top: h,
                      width: m,
                      height: v
                    } = f;
                  if (u || t(), !m || !v) return;
                  const g = {
                    rootMargin: -c(h) + "px " + -c(o.clientWidth - (p + m)) + "px " + -c(o.clientHeight - (h + v)) + "px " + -c(p) + "px",
                    threshold: s(0, i(1, d)) || 1
                  };
                  let y = !0;

                  function _(t) {
                    const r = t[0].intersectionRatio;
                    if (r !== d) {
                      if (!y) return l();
                      r ? l(!1, r) : n = setTimeout(() => {
                        l(!1, 1e-7)
                      }, 1e3)
                    }
                    1 !== r || ge(f, e.getBoundingClientRect()) || l(), y = !1
                  }
                  try {
                    r = new IntersectionObserver(_, {
                      ...g,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    r = new IntersectionObserver(_, g)
                  }
                  r.observe(e)
                }(!0), a
              }(f, n) : null;
              let m, v = -1,
                g = null;
              l && (g = new ResizeObserver(e => {
                let [r] = e;
                r && r.target === f && g && t && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
                  var e;
                  null == (e = g) || e.observe(t)
                })), n()
              }), f && !d && g.observe(f), t && g.observe(t));
              let y = d ? ae(e) : null;
              return d && function t() {
                const r = ae(e);
                y && !ge(y, r) && n(), y = r, m = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                p.forEach(e => {
                  o && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n)
                }), null == h || h(), null == (e = g) || e.disconnect(), g = null, d && cancelAnimationFrame(m)
              }
            }(...e, {
              animationFrame: "always" === g
            }),
            elements: {
              reference: b.anchor
            },
            middleware: [Pe({
              mainAxis: a + P,
              alignmentAxis: u
            }), f && Oe({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === m ? {
                fn: be(V).fn,
                options: [V, void 0]
              } : void 0,
              ...A
            }), f && Re({
              ...A
            }), Me({
              ...A,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: r
              }) => {
                const {
                  width: o,
                  height: i
                } = t.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${n}px`), s.setProperty("--radix-popper-available-height", `${r}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), E && Ae({
              element: E,
              padding: d
            }), it({
              arrowWidth: k,
              arrowHeight: P
            }), v && De({
              strategy: "referenceHidden",
              ...A
            })]
          });
          var V;
          const [B, q] = st(N), K = (0, Ve.c)(y);
          (0, Be.N)(() => {
            F && K?.()
          }, [F, K]);
          const W = z.arrow?.x,
            H = z.arrow?.y,
            $ = 0 !== z.arrow?.centerOffset,
            [U, G] = r.useState();
          return (0, Be.N)(() => {
            w && G(window.getComputedStyle(w).zIndex)
          }, [w]), (0, Le.jsx)("div", {
            ref: j.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: F ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: U,
              "--radix-popper-transform-origin": [z.transformOrigin?.x, z.transformOrigin?.y].join(" "),
              ...z.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, Le.jsx)(Ze, {
              scope: n,
              placedSide: B,
              onArrowChange: T,
              arrowX: W,
              arrowY: H,
              shouldHideArrow: $,
              children: (0, Le.jsx)(je.sG.div, {
                "data-side": B,
                "data-align": q,
                ..._,
                ref: S,
                style: {
                  ..._.style,
                  animation: F ? void 0 : "none"
                }
              })
            })
          })
        });
      et.displayName = Qe;
      var tt = "PopperArrow",
        nt = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        rt = r.forwardRef(function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = Je(tt, n), i = nt[o.placedSide];
          return (0, Le.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, Le.jsx)(Ne, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        });

      function ot(e) {
        return null !== e
      }
      rt.displayName = tt;
      var it = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [c, l] = st(n), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], d = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let p = "",
            h = "";
          return "bottom" === c ? (p = i ? u : `${d}px`, h = -a + "px") : "top" === c ? (p = i ? u : `${d}px`, h = `${r.floating.height+a}px`) : "right" === c ? (p = -a + "px", h = i ? u : `${f}px`) : "left" === c && (p = `${r.floating.width+a}px`, h = i ? u : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function st(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var at = Ge,
        ct = Ye,
        lt = et,
        ut = rt
    },
    2823(e, t, n) {
      n.d(t, {
        Z: () => c
      });
      var r = n(4637),
        o = n(4017),
        i = n(6704),
        s = n(6627),
        a = n(9793),
        c = r.forwardRef((e, t) => {
          const {
            container: n,
            ...c
          } = e, [l, u] = r.useState(!1);
          (0, s.N)(() => u(!0), []);
          const d = n || l && globalThis?.document?.body;
          return d ? o.createPortal((0, a.jsx)(i.sG.div, {
            ...c,
            ref: t
          }), d) : null
        });
      c.displayName = "Portal"
    },
    7306(e, t, n) {
      n.d(t, {
        C: () => s
      });
      var r = n(4637),
        o = n(446),
        i = n(6627),
        s = e => {
          const {
            present: t,
            children: n
          } = e, s = function(e) {
            const [t, n] = r.useState(), o = r.useRef(null), s = r.useRef(e), c = r.useRef("none"), l = e ? "mounted" : "unmounted", [u, d] = function(e, t) {
              return r.useReducer((e, n) => t[e][n] ?? e, e)
            }(l, {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
              },
              unmounted: {
                MOUNT: "mounted"
              }
            });
            return r.useEffect(() => {
              const e = a(o.current);
              c.current = "mounted" === u ? e : "none"
            }, [u]), (0, i.N)(() => {
              const t = o.current,
                n = s.current;
              if (n !== e) {
                const r = c.current,
                  o = a(t);
                d(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
              }
            }, [e, d]), (0, i.N)(() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  r = r => {
                    const i = a(o.current).includes(CSS.escape(r.animationName));
                    if (r.target === t && i && (d("ANIMATION_END"), !s.current)) {
                      const r = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                      })
                    }
                  },
                  i = e => {
                    e.target === t && (c.current = a(o.current))
                  };
                return t.addEventListener("animationstart", i), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                  n.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
                }
              }
              d("ANIMATION_END")
            }, [t, d]), {
              isPresent: ["mounted", "unmountSuspended"].includes(u),
              ref: r.useCallback(e => {
                o.current = e ? getComputedStyle(e) : null, n(e)
              }, [])
            }
          }(t), c = "function" == typeof n ? n({
            present: s.isPresent
          }) : r.Children.only(n), l = (0, o.s)(s.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(c));
          return "function" == typeof n || s.isPresent ? r.cloneElement(c, {
            ref: l
          }) : null
        };

      function a(e) {
        return e?.animationName || "none"
      }
      s.displayName = "Presence"
    },
    6704(e, t, n) {
      n.d(t, {
        hO: () => c,
        sG: () => a
      });
      var r = n(4637),
        o = n(4017),
        i = n(2976),
        s = n(9793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, i.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {});

      function c(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
    },
    2510(e, t, n) {
      n.d(t, {
        C1: () => w,
        bL: () => b
      });
      var r = n(4637),
        o = n(3367),
        i = n(972),
        s = n(9793),
        a = "Progress",
        [c, l] = (0, o.A)(a),
        [u, d] = c(a),
        f = r.forwardRef((e, t) => {
          const {
            __scopeProgress: n,
            value: r = null,
            max: o,
            getValueLabel: a = m,
            ...c
          } = e;
          !o && 0 !== o || y(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const l = y(o) ? o : 100;
          null === r || _(r, l) || console.error(`Invalid prop \`value\` of value \`${`${r}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = _(r, l) ? r : null,
            f = g(d) ? a(d, l) : void 0;
          return (0, s.jsx)(u, {
            scope: n,
            value: d,
            max: l,
            children: (0, s.jsx)(i.sG.div, {
              "aria-valuemax": l,
              "aria-valuemin": 0,
              "aria-valuenow": g(d) ? d : void 0,
              "aria-valuetext": f,
              role: "progressbar",
              "data-state": v(d, l),
              "data-value": d ?? void 0,
              "data-max": l,
              ...c,
              ref: t
            })
          })
        });
      f.displayName = a;
      var p = "ProgressIndicator",
        h = r.forwardRef((e, t) => {
          const {
            __scopeProgress: n,
            ...r
          } = e, o = d(p, n);
          return (0, s.jsx)(i.sG.div, {
            "data-state": v(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...r,
            ref: t
          })
        });

      function m(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function v(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function g(e) {
        return "number" == typeof e
      }

      function y(e) {
        return g(e) && !isNaN(e) && e > 0
      }

      function _(e, t) {
        return g(e) && !isNaN(e) && e <= t && e >= 0
      }
      h.displayName = p;
      var b = f,
        w = h
    },
    428(e, t, n) {
      n.d(t, {
        LM: () => X,
        OK: () => Z,
        Ze: () => Y,
        bL: () => G,
        zi: () => Q
      });
      var r = n(4637),
        o = n(6704),
        i = n(7306),
        s = n(3582),
        a = n(446),
        c = n(8351),
        l = n(3689),
        u = n(6627),
        d = n(7690),
        f = n(8316),
        p = n(9793),
        h = "ScrollArea",
        [m, v] = (0, s.A)(h),
        [g, y] = m(h),
        _ = r.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            type: i = "hover",
            dir: s,
            scrollHideDelay: c = 600,
            ...u
          } = e, [d, f] = r.useState(null), [h, m] = r.useState(null), [v, y] = r.useState(null), [_, b] = r.useState(null), [w, x] = r.useState(null), [S, E] = r.useState(0), [T, C] = r.useState(0), [k, P] = r.useState(!1), [O, R] = r.useState(!1), M = (0, a.s)(t, e => f(e)), D = (0, l.jH)(s);
          return (0, p.jsx)(g, {
            scope: n,
            type: i,
            dir: D,
            scrollHideDelay: c,
            scrollArea: d,
            viewport: h,
            onViewportChange: m,
            content: v,
            onContentChange: y,
            scrollbarX: _,
            onScrollbarXChange: b,
            scrollbarXEnabled: k,
            onScrollbarXEnabledChange: P,
            scrollbarY: w,
            onScrollbarYChange: x,
            scrollbarYEnabled: O,
            onScrollbarYEnabledChange: R,
            onCornerWidthChange: E,
            onCornerHeightChange: C,
            children: (0, p.jsx)(o.sG.div, {
              dir: D,
              ...u,
              ref: M,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": S + "px",
                "--radix-scroll-area-corner-height": T + "px",
                ...e.style
              }
            })
          })
        });
      _.displayName = h;
      var b = "ScrollAreaViewport",
        w = r.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            children: i,
            nonce: s,
            ...c
          } = e, l = y(b, n), u = r.useRef(null), d = (0, a.s)(t, u, l.onViewportChange);
          return (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: s
            }), (0, p.jsx)(o.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...c,
              ref: d,
              style: {
                overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, p.jsx)("div", {
                ref: l.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: i
              })
            })]
          })
        });
      w.displayName = b;
      var x = "ScrollAreaScrollbar",
        S = r.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, i = y(x, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: a
          } = i, c = "horizontal" === e.orientation;
          return r.useEffect(() => (c ? s(!0) : a(!0), () => {
            c ? s(!1) : a(!1)
          }), [c, s, a]), "hover" === i.type ? (0, p.jsx)(E, {
            ...o,
            ref: t,
            forceMount: n
          }) : "scroll" === i.type ? (0, p.jsx)(T, {
            ...o,
            ref: t,
            forceMount: n
          }) : "auto" === i.type ? (0, p.jsx)(C, {
            ...o,
            ref: t,
            forceMount: n
          }) : "always" === i.type ? (0, p.jsx)(k, {
            ...o,
            ref: t
          }) : null
        });
      S.displayName = x;
      var E = r.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, s = y(x, e.__scopeScrollArea), [a, c] = r.useState(!1);
          return r.useEffect(() => {
            const e = s.scrollArea;
            let t = 0;
            if (e) {
              const n = () => {
                  window.clearTimeout(t), c(!0)
                },
                r = () => {
                  t = window.setTimeout(() => c(!1), s.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r)
              }
            }
          }, [s.scrollArea, s.scrollHideDelay]), (0, p.jsx)(i.C, {
            present: n || a,
            children: (0, p.jsx)(C, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        T = r.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, s = y(x, e.__scopeScrollArea), a = "horizontal" === e.orientation, c = $(() => u("SCROLL_END"), 100), [l, u] = (d = {
            hidden: {
              SCROLL: "scrolling"
            },
            scrolling: {
              SCROLL_END: "idle",
              POINTER_ENTER: "interacting"
            },
            interacting: {
              SCROLL: "interacting",
              POINTER_LEAVE: "idle"
            },
            idle: {
              HIDE: "hidden",
              SCROLL: "scrolling",
              POINTER_ENTER: "interacting"
            }
          }, r.useReducer((e, t) => d[e][t] ?? e, "hidden"));
          var d;
          return r.useEffect(() => {
            if ("idle" === l) {
              const e = window.setTimeout(() => u("HIDE"), s.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [l, s.scrollHideDelay, u]), r.useEffect(() => {
            const e = s.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (u("SCROLL"), c()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }, [s.viewport, a, u, c]), (0, p.jsx)(i.C, {
            present: n || "hidden" !== l,
            children: (0, p.jsx)(k, {
              "data-state": "hidden" === l ? "hidden" : "visible",
              ...o,
              ref: t,
              onPointerEnter: (0, f.mK)(e.onPointerEnter, () => u("POINTER_ENTER")),
              onPointerLeave: (0, f.mK)(e.onPointerLeave, () => u("POINTER_LEAVE"))
            })
          })
        }),
        C = r.forwardRef((e, t) => {
          const n = y(x, e.__scopeScrollArea),
            {
              forceMount: o,
              ...s
            } = e,
            [a, c] = r.useState(!1),
            l = "horizontal" === e.orientation,
            u = $(() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                c(l ? e : t)
              }
            }, 10);
          return U(n.viewport, u), U(n.content, u), (0, p.jsx)(i.C, {
            present: o || a,
            children: (0, p.jsx)(k, {
              "data-state": a ? "visible" : "hidden",
              ...s,
              ref: t
            })
          })
        }),
        k = r.forwardRef((e, t) => {
          const {
            orientation: n = "vertical",
            ...o
          } = e, i = y(x, e.__scopeScrollArea), s = r.useRef(null), a = r.useRef(0), [c, l] = r.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), u = V(c.viewport, c.content), d = {
            ...o,
            sizes: c,
            onSizesChange: l,
            hasThumb: Boolean(u > 0 && u < 1),
            onThumbChange: e => s.current = e,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: e => a.current = e
          };

          function f(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = B(n),
                i = t || o / 2,
                s = o - i,
                a = n.scrollbar.paddingStart + i,
                c = n.scrollbar.size - n.scrollbar.paddingEnd - s,
                l = n.content - n.viewport;
              return K([a, c], "ltr" === r ? [0, l] : [-1 * l, 0])(e)
            }(e, a.current, c, t)
          }
          return "horizontal" === n ? (0, p.jsx)(P, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (i.viewport && s.current) {
                const e = q(i.viewport.scrollLeft, c, i.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              i.viewport && (i.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              i.viewport && (i.viewport.scrollLeft = f(e, i.dir))
            }
          }) : "vertical" === n ? (0, p.jsx)(O, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (i.viewport && s.current) {
                const e = q(i.viewport.scrollTop, c);
                s.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              i.viewport && (i.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              i.viewport && (i.viewport.scrollTop = f(e))
            }
          }) : null
        }),
        P = r.forwardRef((e, t) => {
          const {
            sizes: n,
            onSizesChange: o,
            ...i
          } = e, s = y(x, e.__scopeScrollArea), [c, l] = r.useState(), u = r.useRef(null), d = (0, a.s)(t, u, s.onScrollbarXChange);
          return r.useEffect(() => {
            u.current && l(getComputedStyle(u.current))
          }, [u]), (0, p.jsx)(D, {
            "data-orientation": "horizontal",
            ...i,
            ref: d,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": B(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (s.viewport) {
                const r = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), W(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              u.current && s.viewport && c && o({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: u.current.clientWidth,
                  paddingStart: z(c.paddingLeft),
                  paddingEnd: z(c.paddingRight)
                }
              })
            }
          })
        }),
        O = r.forwardRef((e, t) => {
          const {
            sizes: n,
            onSizesChange: o,
            ...i
          } = e, s = y(x, e.__scopeScrollArea), [c, l] = r.useState(), u = r.useRef(null), d = (0, a.s)(t, u, s.onScrollbarYChange);
          return r.useEffect(() => {
            u.current && l(getComputedStyle(u.current))
          }, [u]), (0, p.jsx)(D, {
            "data-orientation": "vertical",
            ...i,
            ref: d,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": B(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (s.viewport) {
                const r = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), W(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              u.current && s.viewport && c && o({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: u.current.clientHeight,
                  paddingStart: z(c.paddingTop),
                  paddingEnd: z(c.paddingBottom)
                }
              })
            }
          })
        }),
        [R, M] = m(x),
        D = r.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            sizes: i,
            hasThumb: s,
            onThumbChange: l,
            onThumbPointerUp: u,
            onThumbPointerDown: d,
            onThumbPositionChange: h,
            onDragScroll: m,
            onWheelScroll: v,
            onResize: g,
            ..._
          } = e, b = y(x, n), [w, S] = r.useState(null), E = (0, a.s)(t, e => S(e)), T = r.useRef(null), C = r.useRef(""), k = b.viewport, P = i.content - i.viewport, O = (0, c.c)(v), M = (0, c.c)(h), D = $(g, 10);

          function A(e) {
            if (T.current) {
              const t = e.clientX - T.current.left,
                n = e.clientY - T.current.top;
              m({
                x: t,
                y: n
              })
            }
          }
          return r.useEffect(() => {
            const e = e => {
              const t = e.target,
                n = w?.contains(t);
              n && O(e, P)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [k, w, P, O]), r.useEffect(M, [i, M]), U(w, D), U(b.content, D), (0, p.jsx)(R, {
            scope: n,
            scrollbar: w,
            hasThumb: s,
            onThumbChange: (0, c.c)(l),
            onThumbPointerUp: (0, c.c)(u),
            onThumbPositionChange: M,
            onThumbPointerDown: (0, c.c)(d),
            children: (0, p.jsx)(o.sG.div, {
              ..._,
              ref: E,
              style: {
                position: "absolute",
                ..._.style
              },
              onPointerDown: (0, f.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), T.current = w.getBoundingClientRect(), C.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", b.viewport && (b.viewport.style.scrollBehavior = "auto"), A(e))
              }),
              onPointerMove: (0, f.mK)(e.onPointerMove, A),
              onPointerUp: (0, f.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = C.current, b.viewport && (b.viewport.style.scrollBehavior = ""), T.current = null
              })
            })
          })
        }),
        A = "ScrollAreaThumb",
        j = r.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = M(A, e.__scopeScrollArea);
          return (0, p.jsx)(i.C, {
            present: n || o.hasThumb,
            children: (0, p.jsx)(L, {
              ref: t,
              ...r
            })
          })
        }),
        L = r.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            style: i,
            ...s
          } = e, c = y(A, n), l = M(A, n), {
            onThumbPositionChange: u
          } = l, d = (0, a.s)(t, e => l.onThumbChange(e)), h = r.useRef(void 0), m = $(() => {
            h.current && (h.current(), h.current = void 0)
          }, 100);
          return r.useEffect(() => {
            const e = c.viewport;
            if (e) {
              const t = () => {
                if (m(), !h.current) {
                  const t = H(e, u);
                  h.current = t, u()
                }
              };
              return u(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [c.viewport, m, u]), (0, p.jsx)(o.sG.div, {
            "data-state": l.hasThumb ? "visible" : "hidden",
            ...s,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...i
            },
            onPointerDownCapture: (0, f.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              l.onThumbPointerDown({
                x: n,
                y: r
              })
            }),
            onPointerUp: (0, f.mK)(e.onPointerUp, l.onThumbPointerUp)
          })
        });
      j.displayName = A;
      var I = "ScrollAreaCorner",
        N = r.forwardRef((e, t) => {
          const n = y(I, e.__scopeScrollArea),
            r = Boolean(n.scrollbarX && n.scrollbarY);
          return "scroll" !== n.type && r ? (0, p.jsx)(F, {
            ...e,
            ref: t
          }) : null
        });
      N.displayName = I;
      var F = r.forwardRef((e, t) => {
        const {
          __scopeScrollArea: n,
          ...i
        } = e, s = y(I, n), [a, c] = r.useState(0), [l, u] = r.useState(0), d = Boolean(a && l);
        return U(s.scrollbarX, () => {
          const e = s.scrollbarX?.offsetHeight || 0;
          s.onCornerHeightChange(e), u(e)
        }), U(s.scrollbarY, () => {
          const e = s.scrollbarY?.offsetWidth || 0;
          s.onCornerWidthChange(e), c(e)
        }), d ? (0, p.jsx)(o.sG.div, {
          ...i,
          ref: t,
          style: {
            width: a,
            height: l,
            position: "absolute",
            right: "ltr" === s.dir ? 0 : void 0,
            left: "rtl" === s.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function z(e) {
        return e ? parseInt(e, 10) : 0
      }

      function V(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function B(e) {
        const t = V(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function q(e, t, n = "ltr") {
        const r = B(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          s = t.content - t.viewport,
          a = i - r,
          c = "ltr" === n ? [0, s] : [-1 * s, 0],
          l = (0, d.q)(e, c);
        return K([0, s], [0, a])(l)
      }

      function K(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function W(e, t) {
        return e > 0 && e < t
      }
      var H = (e, t = () => {}) => {
        let n = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          r = 0;
        return function o() {
          const i = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            s = n.left !== i.left,
            a = n.top !== i.top;
          (s || a) && t(), n = i, r = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(r)
      };

      function $(e, t) {
        const n = (0, c.c)(e),
          o = r.useRef(0);
        return r.useEffect(() => () => window.clearTimeout(o.current), []), r.useCallback(() => {
          window.clearTimeout(o.current), o.current = window.setTimeout(n, t)
        }, [n, t])
      }

      function U(e, t) {
        const n = (0, c.c)(t);
        (0, u.N)(() => {
          let t = 0;
          if (e) {
            const r = new ResizeObserver(() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            });
            return r.observe(e), () => {
              window.cancelAnimationFrame(t), r.unobserve(e)
            }
          }
        }, [e, n])
      }
      var G = _,
        X = w,
        Y = S,
        Q = j,
        Z = N
    },
    2791(e, t, n) {
      n.d(t, {
        In: () => Pe,
        LM: () => Me,
        UC: () => Re,
        WT: () => ke,
        ZL: () => Oe,
        bL: () => Te,
        l9: () => Ce,
        p4: () => Ae,
        q7: () => De
      });
      var r = n(4637),
        o = n(4017),
        i = n(7690),
        s = n(8316),
        a = n(3028),
        c = n(446),
        l = n(3582),
        u = n(3689),
        d = n(7028),
        f = n(1685),
        p = n(3876),
        h = n(6883),
        m = n(5677),
        v = n(2823),
        g = n(6704),
        y = n(2976),
        _ = n(8351),
        b = n(1531),
        w = n(6627),
        x = n(4823),
        S = n(5047),
        E = n(5787),
        T = n(5328),
        C = n(9793),
        k = [" ", "Enter", "ArrowUp", "ArrowDown"],
        P = [" ", "Enter"],
        O = "Select",
        [R, M, D] = (0, a.N)(O),
        [A, j] = (0, l.A)(O, [D, m.Bk]),
        L = (0, m.Bk)(),
        [I, N] = A(O),
        [F, z] = A(O),
        V = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: o,
            defaultOpen: i,
            onOpenChange: s,
            value: a,
            defaultValue: c,
            onValueChange: l,
            dir: d,
            name: f,
            autoComplete: p,
            disabled: v,
            required: g,
            form: y
          } = e, _ = L(t), [w, x] = r.useState(null), [S, E] = r.useState(null), [T, k] = r.useState(!1), P = (0, u.jH)(d), [M, D] = (0, b.i)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: s,
            caller: O
          }), [A, j] = (0, b.i)({
            prop: a,
            defaultProp: c,
            onChange: l,
            caller: O
          }), N = r.useRef(null), z = !w || y || !!w.closest("form"), [V, B] = r.useState(new Set), q = Array.from(V).map(e => e.props.value).join(";");
          return (0, C.jsx)(m.bL, {
            ..._,
            children: (0, C.jsxs)(I, {
              required: g,
              scope: t,
              trigger: w,
              onTriggerChange: x,
              valueNode: S,
              onValueNodeChange: E,
              valueNodeHasChildren: T,
              onValueNodeHasChildrenChange: k,
              contentId: (0, h.B)(),
              value: A,
              onValueChange: j,
              open: M,
              onOpenChange: D,
              dir: P,
              triggerPointerDownPosRef: N,
              disabled: v,
              children: [(0, C.jsx)(R.Provider, {
                scope: t,
                children: (0, C.jsx)(F, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: r.useCallback(e => {
                    B(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: r.useCallback(e => {
                    B(t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    })
                  }, []),
                  children: n
                })
              }), z ? (0, C.jsxs)(we, {
                "aria-hidden": !0,
                required: g,
                tabIndex: -1,
                name: f,
                autoComplete: p,
                value: A,
                onChange: e => j(e.target.value),
                disabled: v,
                form: y,
                children: [void 0 === A ? (0, C.jsx)("option", {
                  value: ""
                }) : null, Array.from(V)]
              }, q) : null]
            })
          })
        };
      V.displayName = O;
      var B = "SelectTrigger",
        q = r.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            disabled: o = !1,
            ...i
          } = e, a = L(n), l = N(B, n), u = l.disabled || o, d = (0, c.s)(t, l.onTriggerChange), f = M(n), p = r.useRef("touch"), [h, v, y] = Se(e => {
            const t = f().filter(e => !e.disabled),
              n = t.find(e => e.value === l.value),
              r = Ee(t, e, n);
            void 0 !== r && l.onValueChange(r.value)
          }), _ = e => {
            u || (l.onOpenChange(!0), y()), e && (l.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, C.jsx)(m.Mz, {
            asChild: !0,
            ...a,
            children: (0, C.jsx)(g.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": l.contentId,
              "aria-expanded": l.open,
              "aria-required": l.required,
              "aria-autocomplete": "none",
              dir: l.dir,
              "data-state": l.open ? "open" : "closed",
              disabled: u,
              "data-disabled": u ? "" : void 0,
              "data-placeholder": xe(l.value) ? "" : void 0,
              ...i,
              ref: d,
              onClick: (0, s.mK)(i.onClick, e => {
                e.currentTarget.focus(), "mouse" !== p.current && _(e)
              }),
              onPointerDown: (0, s.mK)(i.onPointerDown, e => {
                p.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (_(e), e.preventDefault())
              }),
              onKeyDown: (0, s.mK)(i.onKeyDown, e => {
                const t = "" !== h.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || v(e.key), t && " " === e.key || k.includes(e.key) && (_(), e.preventDefault())
              })
            })
          })
        });
      q.displayName = B;
      var K = "SelectValue",
        W = r.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
          } = e, l = N(K, n), {
            onValueNodeHasChildrenChange: u
          } = l, d = void 0 !== i, f = (0, c.s)(t, l.onValueNodeChange);
          return (0, w.N)(() => {
            u(d)
          }, [u, d]), (0, C.jsx)(g.sG.span, {
            ...a,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: xe(l.value) ? (0, C.jsx)(C.Fragment, {
              children: s
            }) : i
          })
        });
      W.displayName = K;
      var H = r.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, C.jsx)(g.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      });
      H.displayName = "SelectIcon";
      var $ = e => (0, C.jsx)(v.Z, {
        asChild: !0,
        ...e
      });
      $.displayName = "SelectPortal";
      var U = "SelectContent",
        G = r.forwardRef((e, t) => {
          const n = N(U, e.__scopeSelect),
            [i, s] = r.useState();
          if ((0, w.N)(() => {
              s(new DocumentFragment)
            }, []), !n.open) {
            const t = i;
            return t ? o.createPortal((0, C.jsx)(Y, {
              scope: e.__scopeSelect,
              children: (0, C.jsx)(R.Slot, {
                scope: e.__scopeSelect,
                children: (0, C.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, C.jsx)(J, {
            ...e,
            ref: t
          })
        });
      G.displayName = U;
      var X = 10,
        [Y, Q] = A(U),
        Z = (0, y.TL)("SelectContent.RemoveScroll"),
        J = r.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            position: o = "item-aligned",
            onCloseAutoFocus: i,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            side: u,
            sideOffset: h,
            align: m,
            alignOffset: v,
            arrowPadding: g,
            collisionBoundary: y,
            collisionPadding: _,
            sticky: b,
            hideWhenDetached: w,
            avoidCollisions: x,
            ...S
          } = e, k = N(U, n), [P, O] = r.useState(null), [R, D] = r.useState(null), A = (0, c.s)(t, e => O(e)), [j, L] = r.useState(null), [I, F] = r.useState(null), z = M(n), [V, B] = r.useState(!1), q = r.useRef(!1);
          r.useEffect(() => {
            if (P) return (0, E.Eq)(P)
          }, [P]), (0, f.Oh)();
          const K = r.useCallback(e => {
              const [t, ...n] = z().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && R && (R.scrollTop = 0), n === r && R && (R.scrollTop = R.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }, [z, R]),
            W = r.useCallback(() => K([j, P]), [K, j, P]);
          r.useEffect(() => {
            V && W()
          }, [V, W]);
          const {
            onOpenChange: H,
            triggerPointerDownPosRef: $
          } = k;
          r.useEffect(() => {
            if (P) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - ($.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - ($.current?.y ?? 0))
                  }
                },
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : P.contains(n.target) || H(!1), document.removeEventListener("pointermove", t), $.current = null
                };
              return null !== $.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }, [P, H, $]), r.useEffect(() => {
            const e = () => H(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [H]);
          const [G, X] = Se(e => {
            const t = z().filter(e => !e.disabled),
              n = t.find(e => e.ref.current === document.activeElement),
              r = Ee(t, e, n);
            r && setTimeout(() => r.ref.current.focus())
          }), Q = r.useCallback((e, t, n) => {
            const r = !q.current && !n;
            (void 0 !== k.value && k.value === t || r) && (L(e), r && (q.current = !0))
          }, [k.value]), J = r.useCallback(() => P?.focus(), [P]), ne = r.useCallback((e, t, n) => {
            const r = !q.current && !n;
            (void 0 !== k.value && k.value === t || r) && F(e)
          }, [k.value]), re = "popper" === o ? te : ee, oe = re === te ? {
            side: u,
            sideOffset: h,
            align: m,
            alignOffset: v,
            arrowPadding: g,
            collisionBoundary: y,
            collisionPadding: _,
            sticky: b,
            hideWhenDetached: w,
            avoidCollisions: x
          } : {};
          return (0, C.jsx)(Y, {
            scope: n,
            content: P,
            viewport: R,
            onViewportChange: D,
            itemRefCallback: Q,
            selectedItem: j,
            onItemLeave: J,
            itemTextRefCallback: ne,
            focusSelectedItem: W,
            selectedItemText: I,
            position: o,
            isPositioned: V,
            searchRef: G,
            children: (0, C.jsx)(T.A, {
              as: Z,
              allowPinchZoom: !0,
              children: (0, C.jsx)(p.n, {
                asChild: !0,
                trapped: k.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, s.mK)(i, e => {
                  k.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, C.jsx)(d.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: l,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => k.onOpenChange(!1),
                  children: (0, C.jsx)(re, {
                    role: "listbox",
                    id: k.contentId,
                    "data-state": k.open ? "open" : "closed",
                    dir: k.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...S,
                    ...oe,
                    onPlaced: () => B(!0),
                    ref: A,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...S.style
                    },
                    onKeyDown: (0, s.mK)(S.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || X(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        let t = z().filter(e => !e.disabled).map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1)
                        }
                        setTimeout(() => K(t)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      J.displayName = "SelectContentImpl";
      var ee = r.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: o,
          ...s
        } = e, a = N(U, n), l = Q(U, n), [u, d] = r.useState(null), [f, p] = r.useState(null), h = (0, c.s)(t, e => p(e)), m = M(n), v = r.useRef(!1), y = r.useRef(!0), {
          viewport: _,
          selectedItem: b,
          selectedItemText: x,
          focusSelectedItem: S
        } = l, E = r.useCallback(() => {
          if (a.trigger && a.valueNode && u && f && _ && b && x) {
            const e = a.trigger.getBoundingClientRect(),
              t = f.getBoundingClientRect(),
              n = a.valueNode.getBoundingClientRect(),
              r = x.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const o = r.left - t.left,
                s = n.left - o,
                a = e.left - s,
                c = e.width + a,
                l = Math.max(c, t.width),
                d = window.innerWidth - X,
                f = (0, i.q)(s, [X, Math.max(X, d - l)]);
              u.style.minWidth = c + "px", u.style.left = f + "px"
            } else {
              const o = t.right - r.right,
                s = window.innerWidth - n.right - o,
                a = window.innerWidth - e.right - s,
                c = e.width + a,
                l = Math.max(c, t.width),
                d = window.innerWidth - X,
                f = (0, i.q)(s, [X, Math.max(X, d - l)]);
              u.style.minWidth = c + "px", u.style.right = f + "px"
            }
            const s = m(),
              c = window.innerHeight - 2 * X,
              l = _.scrollHeight,
              d = window.getComputedStyle(f),
              p = parseInt(d.borderTopWidth, 10),
              h = parseInt(d.paddingTop, 10),
              g = parseInt(d.borderBottomWidth, 10),
              y = p + h + l + parseInt(d.paddingBottom, 10) + g,
              w = Math.min(5 * b.offsetHeight, y),
              S = window.getComputedStyle(_),
              E = parseInt(S.paddingTop, 10),
              T = parseInt(S.paddingBottom, 10),
              C = e.top + e.height / 2 - X,
              k = c - C,
              P = b.offsetHeight / 2,
              O = p + h + (b.offsetTop + P),
              R = y - O;
            if (O <= C) {
              const e = s.length > 0 && b === s[s.length - 1].ref.current;
              u.style.bottom = "0px";
              const t = f.clientHeight - _.offsetTop - _.offsetHeight,
                n = O + Math.max(k, P + (e ? T : 0) + t + g);
              u.style.height = n + "px"
            } else {
              const e = s.length > 0 && b === s[0].ref.current;
              u.style.top = "0px";
              const t = Math.max(C, p + _.offsetTop + (e ? E : 0) + P) + R;
              u.style.height = t + "px", _.scrollTop = O - C + _.offsetTop
            }
            u.style.margin = `${X}px 0`, u.style.minHeight = w + "px", u.style.maxHeight = c + "px", o?.(), requestAnimationFrame(() => v.current = !0)
          }
        }, [m, a.trigger, a.valueNode, u, f, _, b, x, a.dir, o]);
        (0, w.N)(() => E(), [E]);
        const [T, k] = r.useState();
        (0, w.N)(() => {
          f && k(window.getComputedStyle(f).zIndex)
        }, [f]);
        const P = r.useCallback(e => {
          e && !0 === y.current && (E(), S?.(), y.current = !1)
        }, [E, S]);
        return (0, C.jsx)(ne, {
          scope: n,
          contentWrapper: u,
          shouldExpandOnScrollRef: v,
          onScrollButtonChange: P,
          children: (0, C.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: T
            },
            children: (0, C.jsx)(g.sG.div, {
              ...s,
              ref: h,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...s.style
              }
            })
          })
        })
      });
      ee.displayName = "SelectItemAlignedPosition";
      var te = r.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = X,
          ...i
        } = e, s = L(n);
        return (0, C.jsx)(m.UC, {
          ...s,
          ...i,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      });
      te.displayName = "SelectPopperPosition";
      var [ne, re] = A(U, {}), oe = "SelectViewport", ie = r.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          nonce: o,
          ...i
        } = e, a = Q(oe, n), l = re(oe, n), u = (0, c.s)(t, a.onViewportChange), d = r.useRef(0);
        return (0, C.jsxs)(C.Fragment, {
          children: [(0, C.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
          }), (0, C.jsx)(R.Slot, {
            scope: n,
            children: (0, C.jsx)(g.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...i,
              ref: u,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...i.style
              },
              onScroll: (0, s.mK)(i.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = l;
                if (r?.current && n) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * X,
                      o = parseFloat(n.style.minHeight),
                      i = parseFloat(n.style.height),
                      s = Math.max(o, i);
                    if (s < r) {
                      const o = s + e,
                        i = Math.min(r, o),
                        a = o - i;
                      n.style.height = i + "px", "0px" === n.style.bottom && (t.scrollTop = a > 0 ? a : 0, n.style.justifyContent = "flex-end")
                    }
                  }
                }
                d.current = t.scrollTop
              })
            })
          })]
        })
      });
      ie.displayName = oe;
      var se = "SelectGroup",
        [ae, ce] = A(se);
      r.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = (0, h.B)();
        return (0, C.jsx)(ae, {
          scope: n,
          id: o,
          children: (0, C.jsx)(g.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      }).displayName = se;
      var le = "SelectLabel";
      r.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = ce(le, n);
        return (0, C.jsx)(g.sG.div, {
          id: o.id,
          ...r,
          ref: t
        })
      }).displayName = le;
      var ue = "SelectItem",
        [de, fe] = A(ue),
        pe = r.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            value: o,
            disabled: i = !1,
            textValue: a,
            ...l
          } = e, u = N(ue, n), d = Q(ue, n), f = u.value === o, [p, m] = r.useState(a ?? ""), [v, y] = r.useState(!1), _ = (0, c.s)(t, e => d.itemRefCallback?.(e, o, i)), b = (0, h.B)(), w = r.useRef("touch"), x = () => {
            i || (u.onValueChange(o), u.onOpenChange(!1))
          };
          if ("" === o) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, C.jsx)(de, {
            scope: n,
            value: o,
            disabled: i,
            textId: b,
            isSelected: f,
            onItemTextChange: r.useCallback(e => {
              m(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, C.jsx)(R.ItemSlot, {
              scope: n,
              value: o,
              disabled: i,
              textValue: p,
              children: (0, C.jsx)(g.sG.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": f && v,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...l,
                ref: _,
                onFocus: (0, s.mK)(l.onFocus, () => y(!0)),
                onBlur: (0, s.mK)(l.onBlur, () => y(!1)),
                onClick: (0, s.mK)(l.onClick, () => {
                  "mouse" !== w.current && x()
                }),
                onPointerUp: (0, s.mK)(l.onPointerUp, () => {
                  "mouse" === w.current && x()
                }),
                onPointerDown: (0, s.mK)(l.onPointerDown, e => {
                  w.current = e.pointerType
                }),
                onPointerMove: (0, s.mK)(l.onPointerMove, e => {
                  w.current = e.pointerType, i ? d.onItemLeave?.() : "mouse" === w.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, s.mK)(l.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, s.mK)(l.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (P.includes(e.key) && x(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      pe.displayName = ue;
      var he = "SelectItemText",
        me = r.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            className: i,
            style: s,
            ...a
          } = e, l = N(he, n), u = Q(he, n), d = fe(he, n), f = z(he, n), [p, h] = r.useState(null), m = (0, c.s)(t, e => h(e), d.onItemTextChange, e => u.itemTextRefCallback?.(e, d.value, d.disabled)), v = p?.textContent, y = r.useMemo(() => (0, C.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: v
          }, d.value), [d.disabled, d.value, v]), {
            onNativeOptionAdd: _,
            onNativeOptionRemove: b
          } = f;
          return (0, w.N)(() => (_(y), () => b(y)), [_, b, y]), (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)(g.sG.span, {
              id: d.textId,
              ...a,
              ref: m
            }), d.isSelected && l.valueNode && !l.valueNodeHasChildren ? o.createPortal(a.children, l.valueNode) : null]
          })
        });
      me.displayName = he;
      var ve = "SelectItemIndicator";
      r.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return fe(ve, n).isSelected ? (0, C.jsx)(g.sG.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      }).displayName = ve;
      var ge = "SelectScrollUpButton";
      r.forwardRef((e, t) => {
        const n = Q(ge, e.__scopeSelect),
          o = re(ge, e.__scopeSelect),
          [i, s] = r.useState(!1),
          a = (0, c.s)(t, o.onScrollButtonChange);
        return (0, w.N)(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              s(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), i ? (0, C.jsx)(_e, {
          ...e,
          ref: a,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      }).displayName = ge;
      var ye = "SelectScrollDownButton";
      r.forwardRef((e, t) => {
        const n = Q(ye, e.__scopeSelect),
          o = re(ye, e.__scopeSelect),
          [i, s] = r.useState(!1),
          a = (0, c.s)(t, o.onScrollButtonChange);
        return (0, w.N)(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              s(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), i ? (0, C.jsx)(_e, {
          ...e,
          ref: a,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      }).displayName = ye;
      var _e = r.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: o,
          ...i
        } = e, a = Q("SelectScrollButton", n), c = r.useRef(null), l = M(n), u = r.useCallback(() => {
          null !== c.current && (window.clearInterval(c.current), c.current = null)
        }, []);
        return r.useEffect(() => () => u(), [u]), (0, w.N)(() => {
          const e = l().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [l]), (0, C.jsx)(g.sG.div, {
          "aria-hidden": !0,
          ...i,
          ref: t,
          style: {
            flexShrink: 0,
            ...i.style
          },
          onPointerDown: (0, s.mK)(i.onPointerDown, () => {
            null === c.current && (c.current = window.setInterval(o, 50))
          }),
          onPointerMove: (0, s.mK)(i.onPointerMove, () => {
            a.onItemLeave?.(), null === c.current && (c.current = window.setInterval(o, 50))
          }),
          onPointerLeave: (0, s.mK)(i.onPointerLeave, () => {
            u()
          })
        })
      });
      r.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, C.jsx)(g.sG.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var be = "SelectArrow";
      r.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = L(n), i = N(be, n), s = Q(be, n);
        return i.open && "popper" === s.position ? (0, C.jsx)(m.i3, {
          ...o,
          ...r,
          ref: t
        }) : null
      }).displayName = be;
      var we = r.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
      }, o) => {
        const i = r.useRef(null),
          s = (0, c.s)(o, i),
          a = (0, x.Z)(t);
        return r.useEffect(() => {
          const e = i.current;
          if (!e) return;
          const n = window.HTMLSelectElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (a !== t && r) {
            const n = new Event("change", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }, [a, t]), (0, C.jsx)(g.sG.select, {
          ...n,
          style: {
            ...S.Qg,
            ...n.style
          },
          ref: s,
          defaultValue: t
        })
      });

      function xe(e) {
        return "" === e || void 0 === e
      }

      function Se(e) {
        const t = (0, _.c)(e),
          n = r.useRef(""),
          o = r.useRef(0),
          i = r.useCallback(e => {
            const r = n.current + e;
            t(r),
              function e(t) {
                n.current = t, window.clearTimeout(o.current), "" !== t && (o.current = window.setTimeout(() => e(""), 1e3))
              }(r)
          }, [t]),
          s = r.useCallback(() => {
            n.current = "", window.clearTimeout(o.current)
          }, []);
        return r.useEffect(() => () => window.clearTimeout(o.current), []), [n, i, s]
      }

      function Ee(e, t, n) {
        const r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map((e, t) => s[(a + t) % s.length]));
        var s, a;
        1 === r.length && (i = i.filter(e => e !== n));
        const c = i.find(e => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
        return c !== n ? c : void 0
      }
      we.displayName = "SelectBubbleInput";
      var Te = V,
        Ce = q,
        ke = W,
        Pe = H,
        Oe = $,
        Re = G,
        Me = ie,
        De = pe,
        Ae = me
    },
    2699(e, t, n) {
      n.d(t, {
        CC: () => K,
        Q6: () => W,
        bL: () => q,
        zi: () => H
      });
      var r = n(4637),
        o = n(7690),
        i = n(8316),
        s = n(446),
        a = n(3582),
        c = n(1531),
        l = n(3689),
        u = n(4823),
        d = n(4119),
        f = n(6704),
        p = n(3028),
        h = n(9793),
        m = ["PageUp", "PageDown"],
        v = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        g = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        y = "Slider",
        [_, b, w] = (0, p.N)(y),
        [x, S] = (0, a.A)(y, [w]),
        [E, T] = x(y),
        C = r.forwardRef((e, t) => {
          const {
            name: n,
            min: s = 0,
            max: a = 100,
            step: l = 1,
            orientation: u = "horizontal",
            disabled: d = !1,
            minStepsBetweenThumbs: f = 0,
            defaultValue: p = [s],
            value: g,
            onValueChange: y = () => {},
            onValueCommit: b = () => {},
            inverted: w = !1,
            form: x,
            ...S
          } = e, T = r.useRef(new Set), C = r.useRef(0), k = "horizontal" === u ? O : R, [P = [], M] = (0, c.i)({
            prop: g,
            defaultProp: p,
            onChange: e => {
              const t = [...T.current];
              t[C.current]?.focus(), y(e)
            }
          }), D = r.useRef(P);

          function A(e, t, {
            commit: n
          } = {
            commit: !1
          }) {
            const r = function(e) {
                return (String(e).split(".")[1] || "").length
              }(l),
              i = function(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n
              }(Math.round((e - s) / l) * l + s, r),
              c = (0, o.q)(i, [s, a]);
            M((e = []) => {
              const r = function(e = [], t, n) {
                const r = [...e];
                return r[n] = t, r.sort((e, t) => e - t)
              }(e, c, t);
              if (function(e, t) {
                  if (t > 0) {
                    const n = function(e) {
                      return e.slice(0, -1).map((t, n) => e[n + 1] - t)
                    }(e);
                    return Math.min(...n) >= t
                  }
                  return !0
                }(r, f * l)) {
                C.current = r.indexOf(c);
                const t = String(r) !== String(e);
                return t && n && b(r), t ? r : e
              }
              return e
            })
          }
          return (0, h.jsx)(E, {
            scope: e.__scopeSlider,
            name: n,
            disabled: d,
            min: s,
            max: a,
            valueIndexToChangeRef: C,
            thumbs: T.current,
            values: P,
            orientation: u,
            form: x,
            children: (0, h.jsx)(_.Provider, {
              scope: e.__scopeSlider,
              children: (0, h.jsx)(_.Slot, {
                scope: e.__scopeSlider,
                children: (0, h.jsx)(k, {
                  "aria-disabled": d,
                  "data-disabled": d ? "" : void 0,
                  ...S,
                  ref: t,
                  onPointerDown: (0, i.mK)(S.onPointerDown, () => {
                    d || (D.current = P)
                  }),
                  min: s,
                  max: a,
                  inverted: w,
                  onSlideStart: d ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const n = e.map(e => Math.abs(e - t)),
                        r = Math.min(...n);
                      return n.indexOf(r)
                    }(P, e);
                    A(e, t)
                  },
                  onSlideMove: d ? void 0 : function(e) {
                    A(e, C.current)
                  },
                  onSlideEnd: d ? void 0 : function() {
                    const e = D.current[C.current];
                    P[C.current] !== e && b(P)
                  },
                  onHomeKeyDown: () => !d && A(s, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !d && A(a, P.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!d) {
                      const n = m.includes(e.key) || e.shiftKey && v.includes(e.key) ? 10 : 1,
                        r = C.current;
                      A(P[r] + l * n * t, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      C.displayName = y;
      var [k, P] = x(y, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), O = r.forwardRef((e, t) => {
        const {
          min: n,
          max: o,
          dir: i,
          inverted: a,
          onSlideStart: c,
          onSlideMove: u,
          onSlideEnd: d,
          onStepKeyDown: f,
          ...p
        } = e, [m, v] = r.useState(null), y = (0, s.s)(t, e => v(e)), _ = r.useRef(void 0), b = (0, l.jH)(i), w = "ltr" === b, x = w && !a || !w && a;

        function S(e) {
          const t = _.current || m.getBoundingClientRect(),
            r = B([0, t.width], x ? [n, o] : [o, n]);
          return _.current = t, r(e - t.left)
        }
        return (0, h.jsx)(k, {
          scope: e.__scopeSlider,
          startEdge: x ? "left" : "right",
          endEdge: x ? "right" : "left",
          direction: x ? 1 : -1,
          size: "width",
          children: (0, h.jsx)(M, {
            dir: b,
            "data-orientation": "horizontal",
            ...p,
            ref: y,
            style: {
              ...p.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = S(e.clientX);
              c?.(t)
            },
            onSlideMove: e => {
              const t = S(e.clientX);
              u?.(t)
            },
            onSlideEnd: () => {
              _.current = void 0, d?.()
            },
            onStepKeyDown: e => {
              const t = g[x ? "from-left" : "from-right"].includes(e.key);
              f?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), R = r.forwardRef((e, t) => {
        const {
          min: n,
          max: o,
          inverted: i,
          onSlideStart: a,
          onSlideMove: c,
          onSlideEnd: l,
          onStepKeyDown: u,
          ...d
        } = e, f = r.useRef(null), p = (0, s.s)(t, f), m = r.useRef(void 0), v = !i;

        function y(e) {
          const t = m.current || f.current.getBoundingClientRect(),
            r = B([0, t.height], v ? [o, n] : [n, o]);
          return m.current = t, r(e - t.top)
        }
        return (0, h.jsx)(k, {
          scope: e.__scopeSlider,
          startEdge: v ? "bottom" : "top",
          endEdge: v ? "top" : "bottom",
          size: "height",
          direction: v ? 1 : -1,
          children: (0, h.jsx)(M, {
            "data-orientation": "vertical",
            ...d,
            ref: p,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = y(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = y(e.clientY);
              c?.(t)
            },
            onSlideEnd: () => {
              m.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = g[v ? "from-bottom" : "from-top"].includes(e.key);
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), M = r.forwardRef((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: s,
          onHomeKeyDown: a,
          onEndKeyDown: c,
          onStepKeyDown: l,
          ...u
        } = e, d = T(y, n);
        return (0, h.jsx)(f.sG.span, {
          ...u,
          ref: t,
          onKeyDown: (0, i.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (c(e), e.preventDefault()) : m.concat(v).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, i.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          }),
          onPointerMove: (0, i.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, i.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
          })
        })
      }), D = "SliderTrack", A = r.forwardRef((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = T(D, n);
        return (0, h.jsx)(f.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      });
      A.displayName = D;
      var j = "SliderRange",
        L = r.forwardRef((e, t) => {
          const {
            __scopeSlider: n,
            ...o
          } = e, i = T(j, n), a = P(j, n), c = r.useRef(null), l = (0, s.s)(t, c), u = i.values.length, d = i.values.map(e => V(e, i.min, i.max)), p = u > 1 ? Math.min(...d) : 0, m = 100 - Math.max(...d);
          return (0, h.jsx)(f.sG.span, {
            "data-orientation": i.orientation,
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: l,
            style: {
              ...e.style,
              [a.startEdge]: p + "%",
              [a.endEdge]: m + "%"
            }
          })
        });
      L.displayName = j;
      var I = "SliderThumb",
        N = r.forwardRef((e, t) => {
          const n = b(e.__scopeSlider),
            [o, i] = r.useState(null),
            a = (0, s.s)(t, e => i(e)),
            c = r.useMemo(() => o ? n().findIndex(e => e.ref.current === o) : -1, [n, o]);
          return (0, h.jsx)(F, {
            ...e,
            ref: a,
            index: c
          })
        }),
        F = r.forwardRef((e, t) => {
          const {
            __scopeSlider: n,
            index: o,
            name: a,
            ...c
          } = e, l = T(I, n), u = P(I, n), [p, m] = r.useState(null), v = (0, s.s)(t, e => m(e)), g = !p || l.form || !!p.closest("form"), y = (0, d.X)(p), b = l.values[o], w = void 0 === b ? 0 : V(b, l.min, l.max), x = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(o, l.values.length), S = y?.[u.size], E = S ? function(e, t, n) {
            const r = e / 2;
            return (r - B([0, 50], [0, r])(t) * n) * n
          }(S, w, u.direction) : 0;
          return r.useEffect(() => {
            if (p) return l.thumbs.add(p), () => {
              l.thumbs.delete(p)
            }
          }, [p, l.thumbs]), (0, h.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [u.startEdge]: `calc(${w}% + ${E}px)`
            },
            children: [(0, h.jsx)(_.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, h.jsx)(f.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || x,
                "aria-valuemin": l.min,
                "aria-valuenow": b,
                "aria-valuemax": l.max,
                "aria-orientation": l.orientation,
                "data-orientation": l.orientation,
                "data-disabled": l.disabled ? "" : void 0,
                tabIndex: l.disabled ? void 0 : 0,
                ...c,
                ref: v,
                style: void 0 === b ? {
                  display: "none"
                } : e.style,
                onFocus: (0, i.mK)(e.onFocus, () => {
                  l.valueIndexToChangeRef.current = o
                })
              })
            }), g && (0, h.jsx)(z, {
              name: a ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
              form: l.form,
              value: b
            }, o)]
          })
        });
      N.displayName = I;
      var z = r.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...n
      }, o) => {
        const i = r.useRef(null),
          a = (0, s.s)(i, o),
          c = (0, u.Z)(t);
        return r.useEffect(() => {
          const e = i.current;
          if (!e) return;
          const n = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (c !== t && r) {
            const n = new Event("input", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }, [c, t]), (0, h.jsx)(f.sG.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: a,
          defaultValue: t
        })
      });

      function V(e, t, n) {
        const r = 100 / (n - t) * (e - t);
        return (0, o.q)(r, [0, 100])
      }

      function B(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      z.displayName = "RadioBubbleInput";
      var q = C,
        K = A,
        W = L,
        H = N
    },
    2976(e, t, n) {
      n.d(t, {
        Dc: () => l,
        TL: () => s
      });
      var r = n(4637),
        o = n(446),
        i = n(9793);

      function s(e) {
        const t = a(e),
          n = r.forwardRef((e, n) => {
            const {
              children: o,
              ...s
            } = e, a = r.Children.toArray(o), c = a.find(u);
            if (c) {
              const e = c.props.children,
                o = a.map(t => t === c ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
              return (0, i.jsx)(t, {
                ...s,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, i.jsx)(t, {
              ...s,
              ref: n,
              children: o
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function a(e) {
        const t = r.forwardRef((e, t) => {
          const {
            children: n,
            ...i
          } = e;
          if (r.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              s = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(i, n.props);
            return n.type !== r.Fragment && (s.ref = t ? (0, o.t)(t, e) : e), r.cloneElement(n, s)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var c = Symbol("radix.slottable");

      function l(e) {
        const t = ({
          children: e
        }) => (0, i.jsx)(i.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = c, t
      }

      function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
    },
    6441(e, t, n) {
      n.d(t, {
        Kq: () => Q,
        LM: () => Z,
        VY: () => ee,
        bL: () => J,
        bm: () => ne,
        rc: () => te
      });
      var r = n(4637),
        o = n(4017),
        i = n(8316),
        s = n(446),
        a = n(3028),
        c = n(3582),
        l = n(7028),
        u = n(2823),
        d = n(7306),
        f = n(6704),
        p = n(8351),
        h = n(1531),
        m = n(6627),
        v = n(5047),
        g = n(9793),
        y = "ToastProvider",
        [_, b, w] = (0, a.N)("Toast"),
        [x, S] = (0, c.A)("Toast", [w]),
        [E, T] = x(y),
        C = e => {
          const {
            __scopeToast: t,
            label: n = "Notification",
            duration: o = 5e3,
            swipeDirection: i = "right",
            swipeThreshold: s = 50,
            children: a
          } = e, [c, l] = r.useState(null), [u, d] = r.useState(0), f = r.useRef(!1), p = r.useRef(!1);
          return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${y}\`. Expected non-empty \`string\`.`), (0, g.jsx)(_.Provider, {
            scope: t,
            children: (0, g.jsx)(E, {
              scope: t,
              label: n,
              duration: o,
              swipeDirection: i,
              swipeThreshold: s,
              toastCount: u,
              viewport: c,
              onViewportChange: l,
              onToastAdd: r.useCallback(() => d(e => e + 1), []),
              onToastRemove: r.useCallback(() => d(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: f,
              isClosePausedRef: p,
              children: a
            })
          })
        };
      C.displayName = y;
      var k = "ToastViewport",
        P = ["F8"],
        O = "toast.viewportPause",
        R = "toast.viewportResume",
        M = r.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            hotkey: o = P,
            label: i = "Notifications ({hotkey})",
            ...a
          } = e, c = T(k, n), u = b(n), d = r.useRef(null), p = r.useRef(null), h = r.useRef(null), m = r.useRef(null), v = (0, s.s)(t, m, c.onViewportChange), y = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), w = c.toastCount > 0;
          r.useEffect(() => {
            const e = e => {
              0 !== o.length && o.every(t => e[t] || e.code === t) && m.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [o]), r.useEffect(() => {
            const e = d.current,
              t = m.current;
            if (w && e && t) {
              const n = () => {
                  if (!c.isClosePausedRef.current) {
                    const e = new CustomEvent(O);
                    t.dispatchEvent(e), c.isClosePausedRef.current = !0
                  }
                },
                r = () => {
                  if (c.isClosePausedRef.current) {
                    const e = new CustomEvent(R);
                    t.dispatchEvent(e), c.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && r()
                },
                i = () => {
                  e.contains(document.activeElement) || r()
                };
              return e.addEventListener("focusin", n), e.addEventListener("focusout", o), e.addEventListener("pointermove", n), e.addEventListener("pointerleave", i), window.addEventListener("blur", n), window.addEventListener("focus", r), () => {
                e.removeEventListener("focusin", n), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", n), e.removeEventListener("pointerleave", i), window.removeEventListener("blur", n), window.removeEventListener("focus", r)
              }
            }
          }, [w, c.isClosePausedRef]);
          const x = r.useCallback(({
            tabbingDirection: e
          }) => {
            const t = u().map(t => {
              const n = t.ref.current,
                r = [n, ...X(n)];
              return "forwards" === e ? r : r.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [u]);
          return r.useEffect(() => {
            const e = m.current;
            if (e) {
              const t = t => {
                const n = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !n) {
                  const n = document.activeElement,
                    r = t.shiftKey;
                  if (t.target === e && r) return void p.current?.focus();
                  const o = x({
                      tabbingDirection: r ? "backwards" : "forwards"
                    }),
                    i = o.findIndex(e => e === n);
                  Y(o.slice(i + 1)) ? t.preventDefault() : r ? p.current?.focus() : h.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [u, x]), (0, g.jsxs)(l.lg, {
            ref: d,
            role: "region",
            "aria-label": i.replace("{hotkey}", y),
            tabIndex: -1,
            style: {
              pointerEvents: w ? void 0 : "none"
            },
            children: [w && (0, g.jsx)(A, {
              ref: p,
              onFocusFromOutsideViewport: () => {
                Y(x({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, g.jsx)(_.Slot, {
              scope: n,
              children: (0, g.jsx)(f.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: v
              })
            }), w && (0, g.jsx)(A, {
              ref: h,
              onFocusFromOutsideViewport: () => {
                Y(x({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      M.displayName = k;
      var D = "ToastFocusProxy",
        A = r.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
          } = e, i = T(D, n);
          return (0, g.jsx)(v.s6, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !i.viewport?.contains(t) && r()
            }
          })
        });
      A.displayName = D;
      var j = "Toast",
        L = r.forwardRef((e, t) => {
          const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: s,
            ...a
          } = e, [c, l] = (0, h.i)({
            prop: r,
            defaultProp: o ?? !0,
            onChange: s,
            caller: j
          });
          return (0, g.jsx)(d.C, {
            present: n || c,
            children: (0, g.jsx)(F, {
              open: c,
              ...a,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, p.c)(e.onPause),
              onResume: (0, p.c)(e.onResume),
              onSwipeStart: (0, i.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, i.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: n
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${n}px`)
              }),
              onSwipeCancel: (0, i.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, i.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: n
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${n}px`), l(!1)
              })
            })
          })
        });
      L.displayName = j;
      var [I, N] = x(j, {
        onClose() {}
      }), F = r.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          type: a = "foreground",
          duration: c,
          open: u,
          onClose: d,
          onEscapeKeyDown: h,
          onPause: m,
          onResume: v,
          onSwipeStart: y,
          onSwipeMove: b,
          onSwipeCancel: w,
          onSwipeEnd: x,
          ...S
        } = e, E = T(j, n), [C, k] = r.useState(null), P = (0, s.s)(t, e => k(e)), M = r.useRef(null), D = r.useRef(null), A = c || E.duration, L = r.useRef(0), N = r.useRef(A), F = r.useRef(0), {
          onToastAdd: V,
          onToastRemove: B
        } = E, q = (0, p.c)(() => {
          const e = C?.contains(document.activeElement);
          e && E.viewport?.focus(), d()
        }), K = r.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(F.current), L.current = (new Date).getTime(), F.current = window.setTimeout(q, e))
        }, [q]);
        r.useEffect(() => {
          const e = E.viewport;
          if (e) {
            const t = () => {
                K(N.current), v?.()
              },
              n = () => {
                const e = (new Date).getTime() - L.current;
                N.current = N.current - e, window.clearTimeout(F.current), m?.()
              };
            return e.addEventListener(O, n), e.addEventListener(R, t), () => {
              e.removeEventListener(O, n), e.removeEventListener(R, t)
            }
          }
        }, [E.viewport, A, m, v, K]), r.useEffect(() => {
          u && !E.isClosePausedRef.current && K(A)
        }, [u, A, E.isClosePausedRef, K]), r.useEffect(() => (V(), () => B()), [V, B]);
        const W = r.useMemo(() => C ? $(C) : null, [C]);
        return E.viewport ? (0, g.jsxs)(g.Fragment, {
          children: [W && (0, g.jsx)(z, {
            __scopeToast: n,
            role: "status",
            "aria-live": "foreground" === a ? "assertive" : "polite",
            children: W
          }), (0, g.jsx)(I, {
            scope: n,
            onClose: q,
            children: o.createPortal((0, g.jsx)(_.ItemSlot, {
              scope: n,
              children: (0, g.jsx)(l.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, i.mK)(h, () => {
                  E.isFocusedToastEscapeKeyDownRef.current || q(), E.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, g.jsx)(f.sG.li, {
                  tabIndex: 0,
                  "data-state": u ? "open" : "closed",
                  "data-swipe-direction": E.swipeDirection,
                  ...S,
                  ref: P,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, i.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (h?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (E.isFocusedToastEscapeKeyDownRef.current = !0, q()))
                  }),
                  onPointerDown: (0, i.mK)(e.onPointerDown, e => {
                    0 === e.button && (M.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, i.mK)(e.onPointerMove, e => {
                    if (!M.current) return;
                    const t = e.clientX - M.current.x,
                      n = e.clientY - M.current.y,
                      r = Boolean(D.current),
                      o = ["left", "right"].includes(E.swipeDirection),
                      i = ["left", "up"].includes(E.swipeDirection) ? Math.min : Math.max,
                      s = o ? i(0, t) : 0,
                      a = o ? 0 : i(0, n),
                      c = "touch" === e.pointerType ? 10 : 2,
                      l = {
                        x: s,
                        y: a
                      },
                      u = {
                        originalEvent: e,
                        delta: l
                      };
                    r ? (D.current = l, U("toast.swipeMove", b, u, {
                      discrete: !1
                    })) : G(l, E.swipeDirection, c) ? (D.current = l, U("toast.swipeStart", y, u, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > c || Math.abs(n) > c) && (M.current = null)
                  }),
                  onPointerUp: (0, i.mK)(e.onPointerUp, e => {
                    const t = D.current,
                      n = e.target;
                    if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), D.current = null, M.current = null, t) {
                      const n = e.currentTarget,
                        r = {
                          originalEvent: e,
                          delta: t
                        };
                      G(t, E.swipeDirection, E.swipeThreshold) ? U("toast.swipeEnd", x, r, {
                        discrete: !0
                      }) : U("toast.swipeCancel", w, r, {
                        discrete: !0
                      }), n.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), E.viewport)
          })]
        }) : null
      }), z = e => {
        const {
          __scopeToast: t,
          children: n,
          ...o
        } = e, i = T(j, t), [s, a] = r.useState(!1), [c, l] = r.useState(!1);
        return function(e = () => {}) {
          const t = (0, p.c)(e);
          (0, m.N)(() => {
            let e = 0,
              n = 0;
            return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(n)
            }
          }, [t])
        }(() => a(!0)), r.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), c ? null : (0, g.jsx)(u.Z, {
          asChild: !0,
          children: (0, g.jsx)(v.s6, {
            ...o,
            children: s && (0, g.jsxs)(g.Fragment, {
              children: [i.label, " ", n]
            })
          })
        })
      };
      r.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          ...r
        } = e;
        return (0, g.jsx)(f.sG.div, {
          ...r,
          ref: t
        })
      }).displayName = "ToastTitle";
      var V = r.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          ...r
        } = e;
        return (0, g.jsx)(f.sG.div, {
          ...r,
          ref: t
        })
      });
      V.displayName = "ToastDescription";
      var B = "ToastAction",
        q = r.forwardRef((e, t) => {
          const {
            altText: n,
            ...r
          } = e;
          return n.trim() ? (0, g.jsx)(H, {
            altText: n,
            asChild: !0,
            children: (0, g.jsx)(W, {
              ...r,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${B}\`. Expected non-empty \`string\`.`), null)
        });
      q.displayName = B;
      var K = "ToastClose",
        W = r.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            ...r
          } = e, o = N(K, n);
          return (0, g.jsx)(H, {
            asChild: !0,
            children: (0, g.jsx)(f.sG.button, {
              type: "button",
              ...r,
              ref: t,
              onClick: (0, i.mK)(e.onClick, o.onClose)
            })
          })
        });
      W.displayName = K;
      var H = r.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          altText: r,
          ...o
        } = e;
        return (0, g.jsx)(f.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": r || void 0,
          ...o,
          ref: t
        })
      });

      function $(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e)) {
            const n = e.ariaHidden || e.hidden || "none" === e.style.display,
              r = "" === e.dataset.radixToastAnnounceExclude;
            if (!n)
              if (r) {
                const n = e.dataset.radixToastAnnounceAlt;
                n && t.push(n)
              } else t.push(...$(e))
          }
        }), t
      }

      function U(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.currentTarget,
          i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? (0, f.hO)(o, i) : o.dispatchEvent(i)
      }
      var G = (e, t, n = 0) => {
        const r = Math.abs(e.x),
          o = Math.abs(e.y),
          i = r > o;
        return "left" === t || "right" === t ? i && r > n : !i && o > n
      };

      function X(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function Y(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var Q = C,
        Z = M,
        J = L,
        ee = V,
        te = q,
        ne = W
    },
    7969(e, t, n) {
      n.d(t, {
        q7: () => Y,
        bL: () => X
      });
      var r = n(4637),
        o = n(3582),
        i = n(6704),
        s = n(8316),
        a = n(3028),
        c = n(446),
        l = n(6883),
        u = n(8351),
        d = n(1531),
        f = n(3689),
        p = n(9793),
        h = "rovingFocusGroup.onEntryFocus",
        m = {
          bubbles: !1,
          cancelable: !0
        },
        v = "RovingFocusGroup",
        [g, y, _] = (0, a.N)(v),
        [b, w] = (0, o.A)(v, [_]),
        [x, S] = b(v),
        E = r.forwardRef((e, t) => (0, p.jsx)(g.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, p.jsx)(g.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, p.jsx)(T, {
              ...e,
              ref: t
            })
          })
        }));
      E.displayName = v;
      var T = r.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: n,
            orientation: o,
            loop: a = !1,
            dir: l,
            currentTabStopId: g,
            defaultCurrentTabStopId: _,
            onCurrentTabStopIdChange: b,
            onEntryFocus: w,
            preventScrollOnEntryFocus: S = !1,
            ...E
          } = e, T = r.useRef(null), C = (0, c.s)(t, T), k = (0, f.jH)(l), [P, R] = (0, d.i)({
            prop: g,
            defaultProp: _ ?? null,
            onChange: b,
            caller: v
          }), [M, D] = r.useState(!1), A = (0, u.c)(w), j = y(n), L = r.useRef(!1), [I, N] = r.useState(0);
          return r.useEffect(() => {
            const e = T.current;
            if (e) return e.addEventListener(h, A), () => e.removeEventListener(h, A)
          }, [A]), (0, p.jsx)(x, {
            scope: n,
            orientation: o,
            dir: k,
            loop: a,
            currentTabStopId: P,
            onItemFocus: r.useCallback(e => R(e), [R]),
            onItemShiftTab: r.useCallback(() => D(!0), []),
            onFocusableItemAdd: r.useCallback(() => N(e => e + 1), []),
            onFocusableItemRemove: r.useCallback(() => N(e => e - 1), []),
            children: (0, p.jsx)(i.sG.div, {
              tabIndex: M || 0 === I ? -1 : 0,
              "data-orientation": o,
              ...E,
              ref: C,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, s.mK)(e.onMouseDown, () => {
                L.current = !0
              }),
              onFocus: (0, s.mK)(e.onFocus, e => {
                const t = !L.current;
                if (e.target === e.currentTarget && t && !M) {
                  const t = new CustomEvent(h, m);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = j().filter(e => e.focusable);
                    O([e.find(e => e.active), e.find(e => e.id === P), ...e].filter(Boolean).map(e => e.ref.current), S)
                  }
                }
                L.current = !1
              }),
              onBlur: (0, s.mK)(e.onBlur, () => D(!1))
            })
          })
        }),
        C = "RovingFocusGroupItem",
        k = r.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: n,
            focusable: o = !0,
            active: a = !1,
            tabStopId: c,
            children: u,
            ...d
          } = e, f = (0, l.B)(), h = c || f, m = S(C, n), v = m.currentTabStopId === h, _ = y(n), {
            onFocusableItemAdd: b,
            onFocusableItemRemove: w,
            currentTabStopId: x
          } = m;
          return r.useEffect(() => {
            if (o) return b(), () => w()
          }, [o, b, w]), (0, p.jsx)(g.ItemSlot, {
            scope: n,
            id: h,
            focusable: o,
            active: a,
            children: (0, p.jsx)(i.sG.span, {
              tabIndex: v ? 0 : -1,
              "data-orientation": m.orientation,
              ...d,
              ref: t,
              onMouseDown: (0, s.mK)(e.onMouseDown, e => {
                o ? m.onItemFocus(h) : e.preventDefault()
              }),
              onFocus: (0, s.mK)(e.onFocus, () => m.onItemFocus(h)),
              onKeyDown: (0, s.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void m.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, n) {
                  const r = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, n);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r) ? void 0 : P[r]
                }(e, m.orientation, m.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  let o = _().filter(e => e.focusable).map(e => e.ref.current);
                  if ("last" === t) o.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && o.reverse();
                    const i = o.indexOf(e.currentTarget);
                    o = m.loop ? (r = i + 1, (n = o).map((e, t) => n[(r + t) % n.length])) : o.slice(i + 1)
                  }
                  setTimeout(() => O(o))
                }
                var n, r
              }),
              children: "function" == typeof u ? u({
                isCurrentTabStop: v,
                hasTabStop: null != x
              }) : u
            })
          })
        });
      k.displayName = C;
      var P = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function O(e, t = !1) {
        const n = document.activeElement;
        for (const r of e) {
          if (r === n) return;
          if (r.focus({
              preventScroll: t
            }), document.activeElement !== n) return
        }
      }
      var R = E,
        M = k,
        D = "Toggle",
        A = r.forwardRef((e, t) => {
          const {
            pressed: n,
            defaultPressed: r,
            onPressedChange: o,
            ...a
          } = e, [c, l] = (0, d.i)({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: D
          });
          return (0, p.jsx)(i.sG.button, {
            type: "button",
            "aria-pressed": c,
            "data-state": c ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, s.mK)(e.onClick, () => {
              e.disabled || l(!c)
            })
          })
        });
      A.displayName = D;
      var j = "ToggleGroup",
        [L, I] = (0, o.A)(j, [w]),
        N = w(),
        F = r.forwardRef((e, t) => {
          const {
            type: n,
            ...r
          } = e;
          if ("single" === n) {
            const e = r;
            return (0, p.jsx)(B, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === n) {
            const e = r;
            return (0, p.jsx)(q, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${j}\``)
        });
      F.displayName = j;
      var [z, V] = L(j), B = r.forwardRef((e, t) => {
        const {
          value: n,
          defaultValue: o,
          onValueChange: i = () => {},
          ...s
        } = e, [a, c] = (0, d.i)({
          prop: n,
          defaultProp: o ?? "",
          onChange: i,
          caller: j
        });
        return (0, p.jsx)(z, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: r.useMemo(() => a ? [a] : [], [a]),
          onItemActivate: c,
          onItemDeactivate: r.useCallback(() => c(""), [c]),
          children: (0, p.jsx)(H, {
            ...s,
            ref: t
          })
        })
      }), q = r.forwardRef((e, t) => {
        const {
          value: n,
          defaultValue: o,
          onValueChange: i = () => {},
          ...s
        } = e, [a, c] = (0, d.i)({
          prop: n,
          defaultProp: o ?? [],
          onChange: i,
          caller: j
        }), l = r.useCallback(e => c((t = []) => [...t, e]), [c]), u = r.useCallback(e => c((t = []) => t.filter(t => t !== e)), [c]);
        return (0, p.jsx)(z, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: a,
          onItemActivate: l,
          onItemDeactivate: u,
          children: (0, p.jsx)(H, {
            ...s,
            ref: t
          })
        })
      });
      F.displayName = j;
      var [K, W] = L(j), H = r.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: n,
          disabled: r = !1,
          rovingFocus: o = !0,
          orientation: s,
          dir: a,
          loop: c = !0,
          ...l
        } = e, u = N(n), d = (0, f.jH)(a), h = {
          role: "group",
          dir: d,
          ...l
        };
        return (0, p.jsx)(K, {
          scope: n,
          rovingFocus: o,
          disabled: r,
          children: o ? (0, p.jsx)(R, {
            asChild: !0,
            ...u,
            orientation: s,
            dir: d,
            loop: c,
            children: (0, p.jsx)(i.sG.div, {
              ...h,
              ref: t
            })
          }) : (0, p.jsx)(i.sG.div, {
            ...h,
            ref: t
          })
        })
      }), $ = "ToggleGroupItem", U = r.forwardRef((e, t) => {
        const n = V($, e.__scopeToggleGroup),
          o = W($, e.__scopeToggleGroup),
          i = N(e.__scopeToggleGroup),
          s = n.value.includes(e.value),
          a = o.disabled || e.disabled,
          c = {
            ...e,
            pressed: s,
            disabled: a
          },
          l = r.useRef(null);
        return o.rovingFocus ? (0, p.jsx)(M, {
          asChild: !0,
          ...i,
          focusable: !a,
          active: s,
          ref: l,
          children: (0, p.jsx)(G, {
            ...c,
            ref: t
          })
        }) : (0, p.jsx)(G, {
          ...c,
          ref: t
        })
      });
      U.displayName = $;
      var G = r.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: n,
            value: r,
            ...o
          } = e, i = V($, n), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, a = "single" === i.type ? s : void 0;
          return (0, p.jsx)(A, {
            ...a,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? i.onItemActivate(r) : i.onItemDeactivate(r)
            }
          })
        }),
        X = F,
        Y = U
    },
    5173(e, t, n) {
      n.d(t, {
        Kq: () => H,
        UC: () => X,
        ZL: () => G,
        bL: () => $,
        i3: () => Y,
        l9: () => U
      });
      var r = n(4637),
        o = n(8316),
        i = n(446),
        s = n(3582),
        a = n(7028),
        c = n(6883),
        l = n(5677),
        u = n(2823),
        d = n(7306),
        f = n(6704),
        p = n(2976),
        h = n(1531),
        m = n(5047),
        v = n(9793),
        [g, y] = (0, s.A)("Tooltip", [l.Bk]),
        _ = (0, l.Bk)(),
        b = "TooltipProvider",
        w = 700,
        x = "tooltip.open",
        [S, E] = g(b),
        T = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = w,
            skipDelayDuration: o = 300,
            disableHoverableContent: i = !1,
            children: s
          } = e, a = r.useRef(!0), c = r.useRef(!1), l = r.useRef(0);
          return r.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, v.jsx)(S, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: n,
            onOpen: r.useCallback(() => {
              window.clearTimeout(l.current), a.current = !1
            }, []),
            onClose: r.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => a.current = !0, o)
            }, [o]),
            isPointerInTransitRef: c,
            onPointerInTransitChange: r.useCallback(e => {
              c.current = e
            }, []),
            disableHoverableContent: i,
            children: s
          })
        };
      T.displayName = b;
      var C = "Tooltip",
        [k, P] = g(C),
        O = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: o,
            defaultOpen: i,
            onOpenChange: s,
            disableHoverableContent: a,
            delayDuration: u
          } = e, d = E(C, e.__scopeTooltip), f = _(t), [p, m] = r.useState(null), g = (0, c.B)(), y = r.useRef(0), b = a ?? d.disableHoverableContent, w = u ?? d.delayDuration, S = r.useRef(!1), [T, P] = (0, h.i)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(x))) : d.onClose(), s?.(e)
            },
            caller: C
          }), O = r.useMemo(() => T ? S.current ? "delayed-open" : "instant-open" : "closed", [T]), R = r.useCallback(() => {
            window.clearTimeout(y.current), y.current = 0, S.current = !1, P(!0)
          }, [P]), M = r.useCallback(() => {
            window.clearTimeout(y.current), y.current = 0, P(!1)
          }, [P]), D = r.useCallback(() => {
            window.clearTimeout(y.current), y.current = window.setTimeout(() => {
              S.current = !0, P(!0), y.current = 0
            }, w)
          }, [w, P]);
          return r.useEffect(() => () => {
            y.current && (window.clearTimeout(y.current), y.current = 0)
          }, []), (0, v.jsx)(l.bL, {
            ...f,
            children: (0, v.jsx)(k, {
              scope: t,
              contentId: g,
              open: T,
              stateAttribute: O,
              trigger: p,
              onTriggerChange: m,
              onTriggerEnter: r.useCallback(() => {
                d.isOpenDelayedRef.current ? D() : R()
              }, [d.isOpenDelayedRef, D, R]),
              onTriggerLeave: r.useCallback(() => {
                b ? M() : (window.clearTimeout(y.current), y.current = 0)
              }, [M, b]),
              onOpen: R,
              onClose: M,
              disableHoverableContent: b,
              children: n
            })
          })
        };
      O.displayName = C;
      var R = "TooltipTrigger",
        M = r.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            ...s
          } = e, a = P(R, n), c = E(R, n), u = _(n), d = r.useRef(null), p = (0, i.s)(t, d, a.onTriggerChange), h = r.useRef(!1), m = r.useRef(!1), g = r.useCallback(() => h.current = !1, []);
          return r.useEffect(() => () => document.removeEventListener("pointerup", g), [g]), (0, v.jsx)(l.Mz, {
            asChild: !0,
            ...u,
            children: (0, v.jsx)(f.sG.button, {
              "aria-describedby": a.open ? a.contentId : void 0,
              "data-state": a.stateAttribute,
              ...s,
              ref: p,
              onPointerMove: (0, o.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (m.current || c.isPointerInTransitRef.current || (a.onTriggerEnter(), m.current = !0))
              }),
              onPointerLeave: (0, o.mK)(e.onPointerLeave, () => {
                a.onTriggerLeave(), m.current = !1
              }),
              onPointerDown: (0, o.mK)(e.onPointerDown, () => {
                a.open && a.onClose(), h.current = !0, document.addEventListener("pointerup", g, {
                  once: !0
                })
              }),
              onFocus: (0, o.mK)(e.onFocus, () => {
                h.current || a.onOpen()
              }),
              onBlur: (0, o.mK)(e.onBlur, a.onClose),
              onClick: (0, o.mK)(e.onClick, a.onClose)
            })
          })
        });
      M.displayName = R;
      var D = "TooltipPortal",
        [A, j] = g(D, {
          forceMount: void 0
        }),
        L = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = P(D, t);
          return (0, v.jsx)(A, {
            scope: t,
            forceMount: n,
            children: (0, v.jsx)(d.C, {
              present: n || i.open,
              children: (0, v.jsx)(u.Z, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      L.displayName = D;
      var I = "TooltipContent",
        N = r.forwardRef((e, t) => {
          const n = j(I, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = P(I, e.__scopeTooltip);
          return (0, v.jsx)(d.C, {
            present: r || s.open,
            children: s.disableHoverableContent ? (0, v.jsx)(q, {
              side: o,
              ...i,
              ref: t
            }) : (0, v.jsx)(F, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        F = r.forwardRef((e, t) => {
          const n = P(I, e.__scopeTooltip),
            o = E(I, e.__scopeTooltip),
            s = r.useRef(null),
            a = (0, i.s)(t, s),
            [c, l] = r.useState(null),
            {
              trigger: u,
              onClose: d
            } = n,
            f = s.current,
            {
              onPointerInTransitChange: p
            } = o,
            h = r.useCallback(() => {
              l(null), p(!1)
            }, [p]),
            m = r.useCallback((e, t) => {
              const n = e.currentTarget,
                r = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, n = 5) {
                  const r = [];
                  switch (t) {
                    case "top":
                      r.push({
                        x: e.x - n,
                        y: e.y + n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "bottom":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y - n
                      });
                      break;
                    case "left":
                      r.push({
                        x: e.x + n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "right":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x - n,
                        y: e.y + n
                      })
                  }
                  return r
                }(r, function(e, t) {
                  const n = Math.abs(t.top - e.y),
                    r = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(n, r, o, i)) {
                    case i:
                      return "left";
                    case o:
                      return "right";
                    case n:
                      return "top";
                    case r:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(r, n.getBoundingClientRect())),
                i = function(e) {
                  const t = e.slice();
                  return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            n = t[t.length - 2];
                          if (!((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))) break;
                          t.pop()
                        }
                        t.push(r)
                      }
                      t.pop();
                      const n = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const r = e[t];
                        for (; n.length >= 2;) {
                          const e = n[n.length - 1],
                            t = n[n.length - 2];
                          if (!((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))) break;
                          n.pop()
                        }
                        n.push(r)
                      }
                      return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: n,
                    bottom: r,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: n,
                    y: t
                  }, {
                    x: n,
                    y: r
                  }, {
                    x: o,
                    y: r
                  }]
                }(t.getBoundingClientRect())]);
              l(i), p(!0)
            }, [p]);
          return r.useEffect(() => () => h(), [h]), r.useEffect(() => {
            if (u && f) {
              const e = e => m(e, f),
                t = e => m(e, u);
              return u.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                u.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
              }
            }
          }, [u, f, m, h]), r.useEffect(() => {
            if (c) {
              const e = e => {
                const t = e.target,
                  n = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  r = u?.contains(t) || f?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: n,
                      y: r
                    } = e;
                    let o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const s = t[e],
                        a = t[i],
                        c = s.x,
                        l = s.y,
                        u = a.x,
                        d = a.y;
                      l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (o = !o)
                    }
                    return o
                  }(n, c);
                r ? h() : o && (h(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [u, f, c, d, h]), (0, v.jsx)(q, {
            ...e,
            ref: a
          })
        }),
        [z, V] = g(C, {
          isInside: !1
        }),
        B = (0, p.Dc)("TooltipContent"),
        q = r.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            children: o,
            "aria-label": i,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            ...u
          } = e, d = P(I, n), f = _(n), {
            onClose: p
          } = d;
          return r.useEffect(() => (document.addEventListener(x, p), () => document.removeEventListener(x, p)), [p]), r.useEffect(() => {
            if (d.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(d.trigger) && p()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, p]), (0, v.jsx)(a.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: p,
            children: (0, v.jsxs)(l.UC, {
              "data-state": d.stateAttribute,
              ...f,
              ...u,
              ref: t,
              style: {
                ...u.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, v.jsx)(B, {
                children: o
              }), (0, v.jsx)(z, {
                scope: n,
                isInside: !0,
                children: (0, v.jsx)(m.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: i || o
                })
              })]
            })
          })
        });
      N.displayName = I;
      var K = "TooltipArrow",
        W = r.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = _(n);
          return V(K, n).isInside ? null : (0, v.jsx)(l.i3, {
            ...o,
            ...r,
            ref: t
          })
        });
      W.displayName = K;
      var H = T,
        $ = O,
        U = M,
        G = L,
        X = N,
        Y = W
    },
    8351(e, t, n) {
      n.d(t, {
        c: () => o
      });
      var r = n(4637);

      function o(e) {
        const t = r.useRef(e);
        return r.useEffect(() => {
          t.current = e
        }), r.useMemo(() => (...e) => t.current?.(...e), [])
      }
    },
    1531(e, t, n) {
      var r;
      n.d(t, {
        i: () => a
      });
      var o = n(4637),
        i = n(6627),
        s = (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] || i.N;

      function a({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [i, a, c] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), i = o.useRef(n), a = o.useRef(t);
          return s(() => {
            a.current = t
          }, [t]), o.useEffect(() => {
            i.current !== n && (a.current?.(n), i.current = n)
          }, [n, i]), [n, r, a]
        }({
          defaultProp: t,
          onChange: n
        }), l = void 0 !== e, u = l ? e : i; {
          const t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = t.current;
            if (e !== l) {
              const t = e ? "controlled" : "uncontrolled",
                n = l ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = l
          }, [l, r])
        }
        const d = o.useCallback(t => {
          if (l) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && c.current?.(n)
          } else a(t)
        }, [l, e, a, c]);
        return [u, d]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    6627(e, t, n) {
      n.d(t, {
        N: () => o
      });
      var r = n(4637),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    4823(e, t, n) {
      n.d(t, {
        Z: () => o
      });
      var r = n(4637);

      function o(e) {
        const t = r.useRef({
          value: e,
          previous: e
        });
        return r.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
    },
    4119(e, t, n) {
      n.d(t, {
        X: () => i
      });
      var r = n(4637),
        o = n(6627);

      function i(e) {
        const [t, n] = r.useState(void 0);
        return (0, o.N)(() => {
          if (e) {
            n({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver(t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const r = t[0];
              let o, i;
              if ("borderBoxSize" in r) {
                const e = r.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, i = t.blockSize
              } else o = e.offsetWidth, i = e.offsetHeight;
              n({
                width: o,
                height: i
              })
            });
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          n(void 0)
        }, [e]), t
      }
    },
    5047(e, t, n) {
      n.d(t, {
        Qg: () => s,
        bL: () => c,
        s6: () => a
      });
      var r = n(4637),
        o = n(6704),
        i = n(9793),
        s = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        a = r.forwardRef((e, t) => (0, i.jsx)(o.sG.span, {
          ...e,
          ref: t,
          style: {
            ...s,
            ...e.style
          }
        }));
      a.displayName = "VisuallyHidden";
      var c = a
    },
    5462(e, t, n) {
      n.d(t, {
        A: () => z
      });
      var r = n(4637);

      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function i(e, t, n) {
        return t = c(t),
          function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, l() ? Reflect.construct(t, n || [], c(e).constructor) : t.apply(e, n))
      }

      function s(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
              }
            }(e)) || t) {
            n && (e = n);
            var r = 0,
              i = function() {};
            return {
              s: i,
              n: function() {
                return r >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[r++]
                }
              },
              e: function(e) {
                throw e
              },
              f: i
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s, a = !0,
          c = !1;
        return {
          s: function() {
            n = n.call(e)
          },
          n: function() {
            var e = n.next();
            return a = e.done, e
          },
          e: function(e) {
            c = !0, s = e
          },
          f: function() {
            try {
              a || null == n.return || n.return()
            } finally {
              if (c) throw s
            }
          }
        }
      }

      function a(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }

      function l() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (l = function() {
          return !!e
        })()
      }

      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(n), !0).forEach(function(t) {
            a(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function f(e, t) {
        return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, f(e, t)
      }

      function p(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = r,
          c = "",
          l = s(e);
        try {
          for (l.s(); !(n = l.n()).done;) {
            var u, d = n.value,
              f = !Object.prototype.hasOwnProperty.call(o, d) && (null === (u = o[a[0]]) || void 0 === u ? void 0 : u.test(d));
            (i && d === a[0] || f) && (a = a.slice(1), c += d)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return c
      }

      function h(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          c = 0,
          l = "",
          u = s(r);
        try {
          for (u.s(); !(n = u.n()).done;) {
            var d = n.value;
            if (!a && void 0 === e[c]) break;
            Object.prototype.hasOwnProperty.call(o, d) && void 0 !== e[c] ? l += e[c++] : l += d
          }
        } catch (e) {
          u.e(e)
        } finally {
          u.f()
        }
        if (i && !a) {
          for (var f = r.length - 1; f >= 0 && l[f] === r[f]; f--);
          l = l.slice(0, f + 1)
        }
        return l
      }

      function m(e, t) {
        for (var n = t.mask, r = t.replacement, o = [], i = 0; i < n.length; i++) {
          var s, a = null !== (s = e[i]) && void 0 !== s ? s : n[i],
            c = Object.prototype.hasOwnProperty.call(r, a) ? "replacement" : void 0 !== e[i] && e[i] !== n[i] ? "input" : "mask";
          o.push({
            type: c,
            value: a,
            index: i
          })
        }
        return o
      }

      function v(e) {
        return e.length > 0 ? a({}, e, /./) : {}
      }

      function g(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, s = t.replacement, a = t.separate, c = e.slice(r, o), l = i.slice(r, o), u = "", d = 0; d < l.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(s, l[d]);
          f && void 0 !== c[d] && c[d] !== l[d] ? u += c[d] : f && a && (u += l[d])
        }
        return u
      }

      function y(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? v(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return h(p(e, {
          replacementChars: n.replace(i, ""),
          replacement: o,
          separate: !1
        }), {
          mask: n,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var _ = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function b(e) {
        return _.includes(e) ? "\\".concat(e) : e
      }

      function w(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function x(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function S(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function E(e) {
        return E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, E(e)
      }

      function T() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (T = function() {
          return !!e
        })()
      }

      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? C(Object(n), !0).forEach(function(t) {
            S(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function P(e, t) {
        return P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, P(e, t)
      }

      function O(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return O = function(e) {
          if (null === e || ! function(e) {
              try {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
              } catch (t) {
                return "function" == typeof e
              }
            }(e)) return e;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
          }

          function n() {
            return function(e, t, n) {
              if (T()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && P(o, n.prototype), o
            }(e, arguments, E(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), P(n, e)
        }, O(e)
      }
      var R, M = function(e) {
          function t(e) {
            var n;
            return w(this, t), (n = function(e, t, n) {
              return t = E(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, T() ? Reflect.construct(t, n || [], E(e).constructor) : t.apply(e, n))
            }(this, t, [e])).name = "SyntheticChangeError", n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && P(e, t)
          }(t, e), x(t)
        }(O(Error)),
        D = ["options"],
        A = ["text", "email", "tel", "search", "url"],
        j = x(function e(t) {
          var n = t.init,
            r = t.tracking;
          w(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (A.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                s = i.initialValue,
                a = void 0 === s ? "" : s,
                c = i.controlled,
                l = void 0 !== c && c,
                u = n({
                  initialValue: e.value || a,
                  controlled: l
                }),
                d = u.value,
                f = u.options,
                p = {
                  value: d,
                  options: f,
                  fallbackOptions: f
                },
                h = {
                  id: -1,
                  cachedId: -1
                },
                m = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                v = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", k(k({}, v), {}, {
                set: function(t) {
                  var n;
                  m.value = t, null == v || null === (n = v.set) || void 0 === n || n.call(e, t)
                }
              })), e.value = d;
              var g = function() {
                  var t = function() {
                    var n, r;
                    m.selectionStart = null !== (n = e.selectionStart) && void 0 !== n ? n : 0, m.selectionEnd = null !== (r = e.selectionEnd) && void 0 !== r ? r : 0, h.id = window.setTimeout(t)
                  };
                  h.id = window.setTimeout(t)
                },
                y = function() {
                  window.clearTimeout(h.id), h.id = -1, h.cachedId = -1
                },
                _ = function(t) {
                  try {
                    var n, o;
                    if (h.cachedId === h.id) throw new M("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new M("The selection attributes have not been initialized.");
                    var c, l = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = l.length), s > m.selectionStart ? c = "insert" : s <= m.selectionStart && s < m.selectionEnd ? c = "deleteBackward" : s === m.selectionEnd && i.length < l.length && (c = "deleteForward"), void 0 === c || ("deleteBackward" === c || "deleteForward" === c) && i.length > l.length) throw new M("Input type detection error.");
                    var u = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === c) u = i.slice(m.selectionStart, s);
                    else {
                      var v = l.length - i.length;
                      d = s, f = s + v
                    }
                    p.value !== l ? p.options = p.fallbackOptions : p.fallbackOptions = p.options;
                    var g = p.options,
                      y = r({
                        inputType: c,
                        previousValue: l,
                        previousOptions: g,
                        value: i,
                        addedValue: u,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: s,
                        selectionEnd: a
                      }),
                      _ = y.options,
                      b = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                          if (null == e) return {};
                          var n = {};
                          for (var r in e)
                            if ({}.hasOwnProperty.call(e, r)) {
                              if (t.includes(r)) continue;
                              n[r] = e[r]
                            } return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                      }(y, D);
                    e.value = b.value, e.setSelectionRange(b.selectionStart, b.selectionEnd), p.value = b.value, p.options = _, m.selectionStart = b.selectionStart, m.selectionEnd = b.selectionEnd, null === (n = e._valueTracker) || void 0 === n || null === (o = n.setValue) || void 0 === o || o.call(n, l)
                  } catch (n) {
                    if (e.value = m.value, e.setSelectionRange(m.selectionStart, m.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== n.name) throw n
                  }
                };
              document.activeElement === e && g(), e.addEventListener("focus", g), e.addEventListener("blur", y), e.addEventListener("input", _), o.set(e, {
                onFocus: g,
                onBlur: y,
                onInput: _
              })
            }
          }, this.unregister = function(e) {
            var t = o.get(e);
            void 0 !== t && (e.removeEventListener("focus", t.onFocus), e.removeEventListener("blur", t.onBlur), e.removeEventListener("input", t.onInput), o.delete(e))
          }
        });
      R = j, Object.defineProperty(R.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var L, I = ["track", "modify"];

      function N(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? v(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var F = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = i(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = N(n),
                i = o.mask,
                s = o.replacement,
                a = o.separate,
                c = o.showMask;
              return {
                value: t = r || t ? t : c ? i : "",
                options: {
                  mask: i,
                  replacement: s,
                  separate: a
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                r = e.previousValue,
                o = e.previousOptions,
                i = e.addedValue,
                s = e.changeStart,
                a = e.changeEnd,
                c = N(n),
                l = c.track,
                u = c.modify,
                f = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                      if ({}.hasOwnProperty.call(e, r)) {
                        if (t.includes(r)) continue;
                        n[r] = e[r]
                      } return n
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                  }
                  return o
                }(c, I),
                y = f.mask,
                _ = f.replacement,
                b = f.showMask,
                w = f.separate,
                x = d(d({}, "insert" === t ? {
                  inputType: t,
                  data: i
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: r,
                  selectionStart: s,
                  selectionEnd: a
                }),
                S = null == l ? void 0 : l(x);
              if (!1 === S) throw new M("Custom tracking stop.");
              null === S ? i = "" : !0 !== S && void 0 !== S && (i = S);
              var E = null == u ? void 0 : u(x);
              void 0 !== (null == E ? void 0 : E.mask) && (y = E.mask), void 0 !== (null == E ? void 0 : E.replacement) && (_ = "string" == typeof(null == E ? void 0 : E.replacement) ? v(null == E ? void 0 : E.replacement) : E.replacement), void 0 !== (null == E ? void 0 : E.showMask) && (b = E.showMask), void 0 !== (null == E ? void 0 : E.separate) && (w = E.separate);
              var T = g(r, d({
                  end: s
                }, o)),
                C = g(r, d({
                  start: a
                }, o)),
                k = RegExp("[^".concat(Object.keys(_).join(""), "]"), "g"),
                P = y.replace(k, "");
              if (T && (T = p(T, {
                  replacementChars: P,
                  replacement: _,
                  separate: w
                }), P = P.slice(T.length)), i && (i = p(i, {
                  replacementChars: P,
                  replacement: _,
                  separate: !1
                }), P = P.slice(i.length)), "insert" === t && "" === i) throw new M("The character does not match the key value of the `replacement` object.");
              if (w) {
                var O = y.slice(s, a).replace(k, ""),
                  R = O.length - i.length;
                R < 0 ? C = C.slice(-R) : R > 0 && (C = O.slice(-R) + C)
              }
              C && (C = p(C, {
                replacementChars: P,
                replacement: _,
                separate: w
              }));
              var D = h(T + i + C, {
                  mask: y,
                  replacement: _,
                  separate: w,
                  showMask: b
                }),
                A = function(e) {
                  var t, n, r, o = e.inputType,
                    i = e.value,
                    s = e.addedValue,
                    a = e.beforeChangeValue,
                    c = e.replacement,
                    l = e.separate,
                    u = m(i, {
                      mask: e.mask,
                      replacement: c
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || l && "replacement" === t
                    }),
                    d = null === (t = u[a.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (n = u[a.length - 1]) || void 0 === n ? void 0 : n.index,
                    p = null === (r = u[a.length + s.length]) || void 0 === r ? void 0 : r.index;
                  if ("insert" === o) {
                    if (void 0 !== d) return d + 1;
                    if (void 0 !== p) return p;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteForward" === o) {
                    if (void 0 !== p) return p;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteBackward" === o) {
                    if (void 0 !== f) return f + 1;
                    if (void 0 !== p) return p
                  }
                  var h = i.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(c, e)
                  });
                  return -1 !== h ? h : i.length
                }({
                  inputType: t,
                  value: D,
                  addedValue: i,
                  beforeChangeValue: T,
                  mask: y,
                  replacement: _,
                  separate: w
                });
              return {
                value: D,
                selectionStart: A,
                selectionEnd: A,
                options: {
                  mask: y,
                  replacement: _,
                  separate: w
                }
              }
            }
          }])).format = function(e) {
            return y(e, N(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? v(r) : r;
              return m(y(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, N(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? v(r) : r,
                i = g(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return p(i, {
                replacementChars: n.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, N(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? v(r) : r, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", c = 0; c < n.length; c++) {
                var l = n[c];
                0 === c && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, l) ? "".concat(s ? "(?!".concat(b(l), ")") : "", "(").concat(o[l].source, ")") : b(l), c === n.length - 1 && (i && (a += ")?".repeat(n.length)), a += "$")
              }
              return a
            }(e, N(n))
          }, t
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && f(e, t)
          }(e, j),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function z() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.mask,
          n = e.replacement,
          o = e.showMask,
          i = e.separate,
          s = e.track,
          a = e.modify,
          c = (0, r.useRef)(null),
          l = (0, r.useRef)({
            mask: t,
            replacement: n,
            showMask: o,
            separate: i,
            track: s,
            modify: a
          });
        return l.current.mask = t, l.current.replacement = n, l.current.showMask = o, l.current.separate = i, l.current.track = s, l.current.modify = a, (0, r.useMemo)(function() {
          return function(e, t) {
            return new Proxy(e, {
              set: function(n, r, o) {
                return "current" === r && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), n[r] = o, !0)
              }
            })
          }(c, new F(l.current))
        }, [])
      }
      L = F, Object.defineProperty(L.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      })
    },
    818(e, t, n) {
      n.d(t, {
        $9: () => fn,
        CS: () => Ln,
        $W: () => Et,
        U2: () => hn,
        pn: () => mn
      });
      var r = _(),
        o = e => m(e, r),
        i = _();
      o.write = e => m(e, i);
      var s = _();
      o.onStart = e => m(e, s);
      var a = _();
      o.onFrame = e => m(e, a);
      var c = _();
      o.onFinish = e => m(e, c);
      var l = [];
      o.setTimeout = (e, t) => {
        const n = o.now() + t,
          r = () => {
            const e = l.findIndex(e => e.cancel == r);
            ~e && l.splice(e, 1), p -= ~e ? 1 : 0
          },
          i = {
            time: n,
            handler: e,
            cancel: r
          };
        return l.splice(u(n), 0, i), p += 1, v(), i
      };
      var u = e => ~(~l.findIndex(t => t.time > e) || ~l.length);
      o.cancel = e => {
        s.delete(e), a.delete(e), c.delete(e), r.delete(e), i.delete(e)
      }, o.sync = e => {
        h = !0, o.batchedUpdates(e), h = !1
      }, o.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, o.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          s.delete(n), t = null
        }, r
      };
      var d = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      o.use = e => d = e, o.now = "undefined" != typeof performance ? () => performance.now() : Date.now, o.batchedUpdates = e => e(), o.catch = console.error, o.frameLoop = "always", o.advance = () => {
        "demand" !== o.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : y()
      };
      var f = -1,
        p = 0,
        h = !1;

      function m(e, t) {
        h ? (t.delete(e), e(0)) : (t.add(e), v())
      }

      function v() {
        f < 0 && (f = 0, "demand" !== o.frameLoop && d(g))
      }

      function g() {
        ~f && (d(g), o.batchedUpdates(y))
      }

      function y() {
        const e = f;
        f = o.now();
        const t = u(f);
        t && (b(l.splice(0, t), e => e.handler()), p -= t), p ? (s.flush(), r.flush(e ? Math.min(64, f - e) : 16.667), a.flush(), i.flush(), c.flush()) : f = -1
      }

      function _() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            p += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (p -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, p -= t.size, b(t, t => t(n) && e.add(t)), p += e.size, t = e)
          }
        }
      }

      function b(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            o.catch(e)
          }
        })
      }
      var w = n(4637),
        x = Object.defineProperty,
        S = {};

      function E() {}((e, t) => {
        for (var n in t) x(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(S, {
        assign: () => F,
        colors: () => L,
        createStringInterpolator: () => M,
        skipAnimation: () => I,
        to: () => D,
        willAdvance: () => N
      });
      var T = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function C(e, t) {
        if (T.arr(e)) {
          if (!T.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var k = (e, t) => e.forEach(t);

      function P(e, t, n) {
        if (T.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var O = e => T.und(e) ? [] : T.arr(e) ? e : [e];

      function R(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), k(n, t)
        }
      }
      var M, D, A = (e, ...t) => R(e, e => e(...t)),
        j = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        L = null,
        I = !1,
        N = E,
        F = e => {
          e.to && (D = e.to), e.now && (o.now = e.now), void 0 !== e.colors && (L = e.colors), null != e.skipAnimation && (I = e.skipAnimation), e.createStringInterpolator && (M = e.createStringInterpolator), e.requestAnimationFrame && o.use(e.requestAnimationFrame), e.batchedUpdates && (o.batchedUpdates = e.batchedUpdates), e.willAdvance && (N = e.willAdvance), e.frameLoop && (o.frameLoop = e.frameLoop)
        },
        z = new Set,
        V = [],
        B = [],
        q = 0,
        K = {
          get idle() {
            return !z.size && !V.length
          },
          start(e) {
            q > e.priority ? (z.add(e), o.onStart(W)) : (H(e), o(U))
          },
          advance: U,
          sort(e) {
            if (q) o.onFrame(() => K.sort(e));
            else {
              const t = V.indexOf(e);
              ~t && (V.splice(t, 1), $(e))
            }
          },
          clear() {
            V = [], z.clear()
          }
        };

      function W() {
        z.forEach(H), z.clear(), o(U)
      }

      function H(e) {
        V.includes(e) || $(e)
      }

      function $(e) {
        V.splice(function(t) {
          const n = t.findIndex(t => t.priority > e.priority);
          return n < 0 ? t.length : n
        }(V), 0, e)
      }

      function U(e) {
        const t = B;
        for (let n = 0; n < V.length; n++) {
          const r = V[n];
          q = r.priority, r.idle || (N(r), r.advance(e), r.idle || t.push(r))
        }
        return q = 0, (B = V).length = 0, (V = t).length > 0
      }
      var G = "[-+]?\\d*\\.?\\d+",
        X = G + "%";

      function Y(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Q = new RegExp("rgb" + Y(G, G, G)),
        Z = new RegExp("rgba" + Y(G, G, G, G)),
        J = new RegExp("hsl" + Y(G, X, X)),
        ee = new RegExp("hsla" + Y(G, X, X, G)),
        te = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ne = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        re = /^#([0-9a-fA-F]{6})$/,
        oe = /^#([0-9a-fA-F]{8})$/;

      function ie(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function se(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = ie(o, r, e + 1 / 3),
          s = ie(o, r, e),
          a = ie(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function ae(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ce(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function le(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function ue(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function de(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = re.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : L && void 0 !== L[e] ? L[e] : (t = Q.exec(e)) ? (ae(t[1]) << 24 | ae(t[2]) << 16 | ae(t[3]) << 8 | 255) >>> 0 : (t = Z.exec(e)) ? (ae(t[1]) << 24 | ae(t[2]) << 16 | ae(t[3]) << 8 | le(t[4])) >>> 0 : (t = te.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = oe.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ne.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = J.exec(e)) ? (255 | se(ce(t[1]), ue(t[2]), ue(t[3]))) >>> 0 : (t = ee.exec(e)) ? (se(ce(t[1]), ue(t[2]), ue(t[3])) | le(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var fe = (e, t, n) => {
          if (T.fun(e)) return e;
          if (T.arr(e)) return fe({
            range: e,
            output: t,
            extrapolate: n
          });
          if (T.str(e.output[0])) return M(e);
          const r = e,
            o = r.output,
            i = r.range || [0, 1],
            s = r.extrapolateLeft || r.extrapolate || "extend",
            a = r.extrapolateRight || r.extrapolate || "extend",
            c = r.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, i);
            return function(e, t, n, r, o, i, s, a, c) {
              let l = c ? c(e) : e;
              if (l < t) {
                if ("identity" === s) return l;
                "clamp" === s && (l = t)
              }
              if (l > n) {
                if ("identity" === a) return l;
                "clamp" === a && (l = n)
              }
              return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? l = -l : n === 1 / 0 ? l -= t : l = (l - t) / (n - t), l = i(l), r === -1 / 0 ? l = -l : o === 1 / 0 ? l += r : l = l * (o - r) + r, l)
            }(e, i[t], i[t + 1], o[t], o[t + 1], c, s, a, r.map)
          }
        },
        pe = 1.70158,
        he = 1.525 * pe,
        me = pe + 1,
        ve = 2 * Math.PI / 3,
        ge = 2 * Math.PI / 4.5,
        ye = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        _e = {
          linear: e => e,
          easeInQuad: e => e * e,
          easeOutQuad: e => 1 - (1 - e) * (1 - e),
          easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: e => e * e * e,
          easeOutCubic: e => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: e => e * e * e * e,
          easeOutQuart: e => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: e => e * e * e * e * e,
          easeOutQuint: e => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
          easeOutSine: e => Math.sin(e * Math.PI / 2),
          easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
          easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
          easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: e => me * e * e * e - pe * e * e,
          easeOutBack: e => 1 + me * Math.pow(e - 1, 3) + pe * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - he) / 2 : (Math.pow(2 * e - 2, 2) * ((he + 1) * (2 * e - 2) + he) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ve),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ve) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ge) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ge) / 2 + 1,
          easeInBounce: e => 1 - ye(1 - e),
          easeOutBounce: ye,
          easeInOutBounce: e => e < .5 ? (1 - ye(1 - 2 * e)) / 2 : (1 + ye(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return o = ("end" === t ? Math.floor(r) : Math.ceil(r)) / e, Math.min(Math.max(o, 0), 1);
            var o
          }
        },
        be = Symbol.for("FluidValue.get"),
        we = Symbol.for("FluidValue.observers"),
        xe = e => Boolean(e && e[be]),
        Se = e => e && e[be] ? e[be]() : e,
        Ee = e => e[we] || null;

      function Te(e, t) {
        const n = e[we];
        n && n.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var Ce = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            ke(this, e)
          }
        },
        ke = (e, t) => Me(e, be, t);

      function Pe(e, t) {
        if (e[be]) {
          let n = e[we];
          n || Me(e, we, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Oe(e, t) {
        const n = e[we];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[we] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var Re, Me = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        De = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ae = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        je = new RegExp(`(${De.source})(%|[a-z]+)`, "i"),
        Le = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Ie = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Ne = e => {
          const [t, n] = Fe(e);
          if (!t || j()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && Ie.test(n) ? Ne(n) : n || e
        },
        Fe = e => {
          const t = Ie.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        ze = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        Ve = e => {
          Re || (Re = L ? new RegExp(`(${Object.keys(L).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => Se(e).replace(Ie, Ne).replace(Ae, de).replace(Re, de)),
            n = t.map(e => e.match(De).map(Number)),
            r = n[0].map((e, t) => n.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })).map(t => fe({
              ...e,
              output: t
            }));
          return e => {
            const n = !je.test(t[0]) && t.find(e => je.test(e))?.replace(De, "");
            let o = 0;
            return t[0].replace(De, () => `${r[o++](e)}${n||""}`).replace(Le, ze)
          }
        },
        Be = "react-spring: ",
        qe = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Be}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        Ke = qe(console.warn),
        We = qe(console.warn);

      function He(e) {
        return T.str(e) && ("#" == e[0] || /\d/.test(e) || !j() && Ie.test(e) || e in (L || {}))
      }
      var $e = j() ? w.useEffect : w.useLayoutEffect;

      function Ue() {
        const e = (0, w.useState)()[1],
          t = (() => {
            const e = (0, w.useRef)(!1);
            return $e(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Ge = e => (0, w.useEffect)(e, Xe),
        Xe = [],
        Ye = Symbol.for("Animated:node"),
        Qe = e => e && e[Ye],
        Ze = (e, t) => {
          return n = e, r = Ye, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        Je = e => e && e[Ye] && e[Ye].getPayload(),
        et = class {
          constructor() {
            Ze(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        tt = class e extends et {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, T.num(this._value) && (this.lastPosition = this._value)
          }
          static create(t) {
            return new e(t)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return T.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, T.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        nt = class e extends tt {
          constructor(e) {
            super(0), this._string = null, this._toString = fe({
              output: [e, e]
            })
          }
          static create(t) {
            return new e(t)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (T.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = fe({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        rt = {
          dependencies: null
        },
        ot = class extends et {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return P(this.source, (n, r) => {
              var o;
              (o = n) && o[Ye] === o ? t[r] = n.getValue(e) : xe(n) ? t[r] = Se(n) : e || (t[r] = n)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && k(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return P(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            rt.dependencies && xe(e) && rt.dependencies.add(e);
            const t = Je(e);
            t && k(t, e => this.add(e))
          }
        },
        it = class e extends ot {
          constructor(e) {
            super(e)
          }
          static create(t) {
            return new e(t)
          }
          getValue() {
            return this.source.map(e => e.getValue())
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((t, n) => t.setValue(e[n])).some(Boolean) : (super.setValue(e.map(st)), !0)
          }
        };

      function st(e) {
        return (He(e) ? nt : tt).create(e)
      }

      function at(e) {
        const t = Qe(e);
        return t ? t.constructor : T.arr(e) ? it : He(e) ? nt : tt
      }
      var ct = (e, t) => {
          const n = !T.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, w.forwardRef)((r, i) => {
            const s = (0, w.useRef)(null),
              a = n && (0, w.useCallback)(e => {
                s.current = function(e, t) {
                  return e && (T.fun(e) ? e(t) : e.current = t), t
                }(i, e)
              }, [i]),
              [c, l] = function(e, t) {
                const n = new Set;
                return rt.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new ot(e), rt.dependencies = null, [e, n]
              }(r, t),
              u = Ue(),
              d = () => {
                const e = s.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, c.getValue(!0))) && u()
              },
              f = new lt(d, l),
              p = (0, w.useRef)(void 0);
            $e(() => (p.current = f, k(l, e => Pe(e, f)), () => {
              p.current && (k(p.current.deps, e => Oe(e, p.current)), o.cancel(p.current.update))
            })), (0, w.useEffect)(d, []), Ge(() => () => {
              const e = p.current;
              k(e.deps, t => Oe(t, e))
            });
            const h = t.getComponentProps(c.getValue());
            return w.createElement(e, {
              ...h,
              ref: a
            })
          })
        },
        lt = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && o.write(this.update)
          }
        },
        ut = Symbol.for("AnimatedComponent"),
        dt = e => T.str(e) ? e : e && T.str(e.displayName) ? e.displayName : T.fun(e) && e.name || null;

      function ft(e, ...t) {
        return T.fun(e) ? e(...t) : e
      }
      var pt = (e, t) => !0 === e || !!(t && e && (T.fun(e) ? e(t) : O(e).includes(t))),
        ht = (e, t) => T.obj(e) ? t && e[t] : e,
        mt = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        vt = e => e,
        gt = (e, t = vt) => {
          let n = yt;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            T.und(n) || (r[o] = n)
          }
          return r
        },
        yt = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        _t = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1
        };

      function bt(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (P(e, (e, r) => {
              _t[r] || (t[r] = e, n++)
            }), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return P(e, (e, r) => r in t || (n[r] = e)), n
        }
        return {
          ...e
        }
      }

      function wt(e) {
        return e = Se(e), T.arr(e) ? e.map(wt) : He(e) ? S.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function xt(e) {
        return T.fun(e) || T.arr(e) && T.obj(e[0])
      }

      function St(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var Et = {
          default: {
            tension: 170,
            friction: 26
          },
          gentle: {
            tension: 120,
            friction: 14
          },
          wobbly: {
            tension: 180,
            friction: 12
          },
          stiff: {
            tension: 210,
            friction: 20
          },
          slow: {
            tension: 280,
            friction: 60
          },
          molasses: {
            tension: 280,
            friction: 120
          }
        },
        Tt = {
          ...Et.default,
          mass: 1,
          damping: 1,
          easing: _e.linear,
          clamp: !1
        },
        Ct = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Tt)
          }
        };

      function kt(e, t) {
        if (T.und(t.decay)) {
          const n = !T.und(t.tension) || !T.und(t.friction);
          !n && T.und(t.frequency) && T.und(t.damping) && T.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Pt = [],
        Ot = class {
          constructor() {
            this.changed = !1, this.values = Pt, this.toValues = null, this.fromValues = Pt, this.config = new Ct, this.immediate = !1
          }
        };

      function Rt(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: i,
        actions: s
      }) {
        return new Promise((a, c) => {
          let l, u, d = pt(n.cancel ?? r?.cancel, t);
          if (d) h();
          else {
            T.und(n.pause) || (i.paused = pt(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = i.paused || pt(e, t)), l = ft(n.delay || 0, t), e ? (i.resumeQueue.add(p), s.pause()) : (s.resume(), p())
          }

          function f() {
            i.resumeQueue.add(p), i.timeouts.delete(u), u.cancel(), l = u.time - o.now()
          }

          function p() {
            l > 0 && !S.skipAnimation ? (i.delayed = !0, u = o.setTimeout(h, l), i.pauseQueue.add(f), i.timeouts.add(u)) : h()
          }

          function h() {
            i.delayed && (i.delayed = !1), i.pauseQueue.delete(f), i.timeouts.delete(u), e <= (i.cancelId || 0) && (d = !0);
            try {
              s.start({
                ...n,
                callId: e,
                cancel: d
              }, a)
            } catch (e) {
              c(e)
            }
          }
        })
      }
      var Mt = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? jt(e.get()) : t.every(e => e.noop) ? Dt(e.get()) : At(e.get(), t.every(e => e.finished)),
        Dt = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        At = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        jt = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Lt(e, t, n, r) {
        const {
          callId: i,
          parentId: s,
          onRest: a
        } = t, {
          asyncTo: c,
          promise: l
        } = n;
        return s || e !== c || t.reset ? n.promise = (async () => {
          n.asyncId = i, n.asyncTo = e;
          const u = gt(t, (e, t) => "onRest" === t ? void 0 : e);
          let d, f;
          const p = new Promise((e, t) => (d = e, f = t)),
            h = e => {
              const t = i <= (n.cancelId || 0) && jt(r) || i !== n.asyncId && At(r, !1);
              if (t) throw e.result = t, f(e), e
            },
            m = (e, t) => {
              const o = new Nt,
                s = new Ft;
              return (async () => {
                if (S.skipAnimation) throw It(n), s.result = At(r, !1), f(s), s;
                h(o);
                const a = T.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = i, P(u, (e, t) => {
                  T.und(a[t]) && (a[t] = e)
                });
                const c = await r.start(a);
                return h(o), n.paused && await new Promise(e => {
                  n.resumeQueue.add(e)
                }), c
              })()
            };
          let v;
          if (S.skipAnimation) return It(n), At(r, !1);
          try {
            let t;
            t = T.arr(e) ? (async e => {
              for (const t of e) await m(t)
            })(e) : Promise.resolve(e(m, r.stop.bind(r))), await Promise.all([t.then(d), p]), v = At(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof Nt) v = e.result;
            else {
              if (!(e instanceof Ft)) throw e;
              v = e.result
            }
          } finally {
            i == n.asyncId && (n.asyncId = s, n.asyncTo = s ? c : void 0, n.promise = s ? l : void 0)
          }
          return T.fun(a) && o.batchedUpdates(() => {
            a(v, r, r.item)
          }), v
        })() : l
      }

      function It(e, t) {
        R(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Nt = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Ft = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        zt = e => e instanceof Bt,
        Vt = 1,
        Bt = class extends Ce {
          constructor() {
            super(...arguments), this.id = Vt++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Qe(this);
            return e && e.getValue()
          }
          to(...e) {
            return S.to(this, e)
          }
          interpolate(...e) {
            return Ke(`${Be}The "interpolate" function is deprecated in v9 (use "to" instead)`), S.to(this, e)
          }
          toJSON() {
            return this.get()
          }
          observerAdded(e) {
            1 == e && this._attach()
          }
          observerRemoved(e) {
            0 == e && this._detach()
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            Te(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || K.sort(this), Te(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        qt = Symbol.for("SpringPhase"),
        Kt = e => (1 & e[qt]) > 0,
        Wt = e => (2 & e[qt]) > 0,
        Ht = e => (4 & e[qt]) > 0,
        $t = (e, t) => t ? e[qt] |= 3 : e[qt] &= -3,
        Ut = (e, t) => t ? e[qt] |= 4 : e[qt] &= -5,
        Gt = class extends Bt {
          constructor(e, t) {
            if (super(), this.animation = new Ot, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !T.und(e) || !T.und(t)) {
              const n = T.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              T.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(Wt(this) || this._state.asyncTo) || Ht(this)
          }
          get goal() {
            return Se(this.animation.to)
          }
          get velocity() {
            const e = Qe(this);
            return e instanceof tt ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return Kt(this)
          }
          get isAnimating() {
            return Wt(this)
          }
          get isPaused() {
            return Ht(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              n = !1;
            const r = this.animation;
            let {
              toValues: o
            } = r;
            const {
              config: i
            } = r, s = Je(r.to);
            !s && xe(r.to) && (o = O(Se(r.to))), r.values.forEach((a, c) => {
              if (a.done) return;
              const l = a.constructor == nt ? 1 : s ? s[c].lastPosition : o[c];
              let u = r.immediate,
                d = l;
              if (!u) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const n = r.fromValues[c],
                  o = null != a.v0 ? a.v0 : a.v0 = T.arr(i.velocity) ? i.velocity[c] : i.velocity;
                let s;
                const f = i.precision || (n == l ? .005 : Math.min(1, .001 * Math.abs(l - n)));
                if (T.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), u = Math.abs(a.lastPosition - d) <= f, s = o * r
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      c = !T.und(r),
                      p = n == l ? a.v0 > 0 : n < l;
                    let h, m = !1;
                    const v = 1,
                      g = Math.ceil(e / v);
                    for (let e = 0; e < g && (h = Math.abs(s) > t, h || (u = Math.abs(l - d) <= f, !u)); ++e) c && (m = d == l || d > l == p, m && (s = -s * r, d = l)), s += (1e-6 * -i.tension * (d - l) + .001 * -i.friction * s) / i.mass * v, d += s * v
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, a.durationProgress = r), d = n + i.easing(r) * (l - n), s = (d - a.lastPosition) / e, u = 1 == r
                }
                a.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              s && !s[c].done && (u = !1), u ? a.done = !0 : t = !1, a.setValue(d, i.round) && (n = !0)
            });
            const a = Qe(this),
              c = a.getValue();
            if (t) {
              const e = Se(r.to);
              c === e && !n || i.decay ? n && i.decay && this._onChange(c) : (a.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(c)
          }
          set(e) {
            return o.batchedUpdates(() => {
              this._stop(), this._focus(e), this._set(e)
            }), this
          }
          pause() {
            this._update({
              pause: !0
            })
          }
          resume() {
            this._update({
              pause: !1
            })
          }
          finish() {
            if (Wt(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              o.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              })
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let n;
            return T.und(e) ? (n = this.queue || [], this.queue = []) : n = [T.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map(e => this._update(e))).then(e => Mt(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), It(this._state, e && this._lastCallId), o.batchedUpdates(() => this._stop(t, e)), this
          }
          reset() {
            this._update({
              reset: !0
            })
          }
          eventObserved(e) {
            "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
          }
          _prepareNode(e) {
            const t = this.key || "";
            let {
              to: n,
              from: r
            } = e;
            n = T.obj(n) ? n[t] : n, (null == n || xt(n)) && (n = void 0), r = T.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return Kt(this) || (e.reverse && ([n, r] = [r, n]), r = Se(r), T.und(r) ? Qe(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, gt(e, (e, t) => /^on/.test(t) ? ht(e, n) : e)), en(this, e, "onProps"), tn(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Rt(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  Ht(this) || (Ut(this, !0), A(i.pauseQueue), tn(this, "onPause", At(this, Xt(this, this.animation.to)), this))
                },
                resume: () => {
                  Ht(this) && (Ut(this, !1), Wt(this) && this._resume(), A(i.resumeQueue), tn(this, "onResume", At(this, Xt(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = Yt(e);
                if (t) return this._update(t, !0)
              }
              return n
            })
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(jt(this));
            const r = !T.und(e.to),
              i = !T.und(e.from);
            if (r || i) {
              if (!(t.callId > this._lastToId)) return n(jt(this));
              this._lastToId = t.callId
            }
            const {
              key: s,
              defaultProps: a,
              animation: c
            } = this, {
              to: l,
              from: u
            } = c;
            let {
              to: d = l,
              from: f = u
            } = e;
            !i || r || t.default && !T.und(d) || (d = f), t.reverse && ([d, f] = [f, d]);
            const p = !C(f, u);
            p && (c.from = f), f = Se(f);
            const h = !C(d, l);
            h && this._focus(d);
            const m = xt(t.to),
              {
                config: v
              } = c,
              {
                decay: g,
                velocity: y
              } = v;
            (r || i) && (v.velocity = 0), t.config && !m && function(e, t, n) {
              n && (kt(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), kt(e, t), Object.assign(e, t);
              for (const t in Tt) null == e[t] && (e[t] = Tt[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              T.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(v, ft(t.config, s), t.config !== a.config ? ft(a.config, s) : void 0);
            let _ = Qe(this);
            if (!_ || T.und(d)) return n(At(this, !0));
            const b = T.und(t.reset) ? i && !t.default : !T.und(f) && pt(t.reset, s),
              w = b ? f : this.get(),
              x = wt(d),
              S = T.num(x) || T.arr(x) || He(x),
              E = !m && (!S || pt(a.immediate || t.immediate, s));
            if (h) {
              const e = at(d);
              if (e !== _.constructor) {
                if (!E) throw Error(`Cannot animate between ${_.constructor.name} and ${e.name}, as the "to" prop suggests`);
                _ = this._set(x)
              }
            }
            const P = _.constructor;
            let R = xe(d),
              M = !1;
            if (!R) {
              const e = b || !Kt(this) && p;
              (h || e) && (M = C(wt(w), x), R = !M), (C(c.immediate, E) || E) && C(v.decay, g) && C(v.velocity, y) || (R = !0)
            }
            if (M && Wt(this) && (c.changed && !b ? R = !0 : R || this._stop(l)), !m && ((R || xe(l)) && (c.values = _.getPayload(), c.toValues = xe(d) ? null : P == nt ? [1] : O(x)), c.immediate != E && (c.immediate = E, E || b || this._set(l)), R)) {
              const {
                onRest: e
              } = c;
              k(Jt, e => en(this, t, e));
              const r = At(this, Xt(this, l));
              A(this._pendingCalls, r), this._pendingCalls.add(n), c.changed && o.batchedUpdates(() => {
                c.changed = !b, e?.(r, this), b ? ft(a.onRest, r) : c.onStart?.(r, this)
              })
            }
            b && this._set(w), m ? n(Lt(t.to, t, this._state, this)) : R ? this._start() : Wt(this) && !h ? this._pendingCalls.add(n) : n(Dt(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Ee(this) && this._detach(), t.to = e, Ee(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            xe(t) && (Pe(t, this), zt(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            xe(e) && Oe(e, this)
          }
          _set(e, t = !0) {
            const n = Se(e);
            if (!T.und(n)) {
              const e = Qe(this);
              if (!e || !C(n, e.getValue())) {
                const r = at(n);
                e && e.constructor == r ? e.setValue(n) : Ze(this, r.create(n)), e && o.batchedUpdates(() => {
                  this._onChange(n, t)
                })
              }
            }
            return Qe(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, tn(this, "onStart", At(this, Xt(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), ft(this.animation.onChange, e, this)), ft(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Qe(this).reset(Se(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Wt(this) || ($t(this, !0), Ht(this) || this._resume())
          }
          _resume() {
            S.skipAnimation ? this.finish() : K.start(this)
          }
          _stop(e, t) {
            if (Wt(this)) {
              $t(this, !1);
              const n = this.animation;
              k(n.values, e => {
                e.done = !0
              }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Te(this, {
                type: "idle",
                parent: this
              });
              const r = t ? jt(this.get()) : At(this.get(), Xt(this, e ?? n.to));
              A(this._pendingCalls, r), n.changed && (n.changed = !1, tn(this, "onRest", r, this))
            }
          }
        };

      function Xt(e, t) {
        const n = wt(t);
        return C(wt(e.get()), n)
      }

      function Yt(e, t = e.loop, n = e.to) {
        const r = ft(t);
        if (r) {
          const o = !0 !== r && bt(r),
            i = (o || e).reverse,
            s = !o || o.reset;
          return Qt({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || xt(n) ? n : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function Qt(e) {
        const {
          to: t,
          from: n
        } = e = bt(e), r = new Set;
        return T.obj(t) && Zt(t, r), T.obj(n) && Zt(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function Zt(e, t) {
        P(e, (e, n) => null != e && t.add(n))
      }
      var Jt = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function en(e, t, n) {
        e.animation[n] = t[n] !== mt(t, n) ? ht(t[n], e.key) : void 0
      }

      function tn(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var nn = ["onStart", "onChange", "onRest"],
        rn = 1,
        on = class {
          constructor(e, t) {
            this.id = rn++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._events = {
              onStart: new Map,
              onChange: new Map,
              onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
              default: !0,
              ...e
            })
          }
          get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused)
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each((t, n) => e[n] = t.get()), e
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              T.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(Qt(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = O(e).map(Qt) : this.queue = [], this._flush ? this._flush(this, t) : (un(this, t), function(e, t) {
              return Promise.all(t.map(t => sn(e, t))).then(t => Mt(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              k(O(t), t => n[t].stop(!!e))
            } else It(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (T.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              k(O(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (T.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              k(O(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            P(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, R(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !r && this._started,
              s = o || i && n.size ? this.get() : null;
            o && t.size && R(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, R(n, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            o.onFrame(this._onFrame)
          }
        };
      async function sn(e, t, n) {
        const {
          keys: r,
          to: i,
          from: s,
          loop: a,
          onRest: c,
          onResolve: l
        } = t, u = T.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === i && (t.to = null), !1 === s && (t.from = null);
        const d = T.arr(i) || T.fun(i) ? i : void 0;
        d ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : k(nn, n => {
          const r = t[n];
          if (T.fun(r)) {
            const o = e._events[n];
            t[n] = ({
              finished: e,
              cancelled: t
            }) => {
              const n = o.get(r);
              n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : o.set(r, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, u && (u[n] = t[n])
          }
        });
        const f = e._state;
        t.pause === !f.paused ? (f.paused = t.pause, A(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
        const p = (r || Object.keys(e.springs)).map(n => e.springs[n].start(t)),
          h = !0 === t.cancel || !0 === mt(t, "cancel");
        (d || h && f.asyncId) && p.push(Rt(++e._lastAsyncId, {
          props: t,
          state: f,
          actions: {
            pause: E,
            resume: E,
            start(t, n) {
              h ? (It(f, e._lastAsyncId), n(jt(e))) : (t.onRest = c, n(Lt(d, t, f, e)))
            }
          }
        })), f.paused && await new Promise(e => {
          f.resumeQueue.add(e)
        });
        const m = Mt(e, await Promise.all(p));
        if (a && m.finished && (!n || !m.noop)) {
          const n = Yt(t, a, i);
          if (n) return un(e, [n]), sn(e, n, !0)
        }
        return l && o.batchedUpdates(() => l(m, e, e.item)), m
      }

      function an(e, t) {
        const n = {
          ...e.springs
        };
        return t && k(O(t), e => {
            T.und(e.keys) && (e = Qt(e)), T.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), ln(n, e, e => cn(e))
          }),
          function(e, t) {
            P(t, (t, n) => {
              e.springs[n] || (e.springs[n] = t, Pe(t, e))
            })
          }(e, n), n
      }

      function cn(e, t) {
        const n = new Gt;
        return n.key = e, t && Pe(n, t), n
      }

      function ln(e, t, n) {
        t.keys && k(t.keys, r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        })
      }

      function un(e, t) {
        k(t, t => {
          ln(e.springs, t, t => cn(t, e))
        })
      }
      var dn = w.createContext({
          pause: !1,
          immediate: !1
        }),
        fn = () => {
          const e = [],
            t = function(t) {
              We(`${Be}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const r = [];
              return k(e, (e, o) => {
                if (T.und(t)) r.push(e.start());
                else {
                  const i = n(t, e, o);
                  i && r.push(e.start(i))
                }
              }), r
            };
          t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
          }, t.delete = function(t) {
            const n = e.indexOf(t);
            ~n && e.splice(n, 1)
          }, t.pause = function() {
            return k(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return k(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            k(e, (e, n) => {
              const r = T.fun(t) ? t(n, e) : t;
              r && e.set(r)
            })
          }, t.start = function(t) {
            const n = [];
            return k(e, (e, r) => {
              if (T.und(t)) n.push(e.start());
              else {
                const o = this._getProps(t, e, r);
                o && n.push(e.start(o))
              }
            }), n
          }, t.stop = function() {
            return k(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return k(e, (e, n) => e.update(this._getProps(t, e, n))), this
          };
          const n = function(e, t, n) {
            return T.fun(e) ? e(n, t) : e
          };
          return t._getProps = n, t
        },
        pn = () => fn(),
        hn = () => (0, w.useState)(pn)[0];

      function mn(e, t, n) {
        const r = T.fun(t) && t,
          {
            reset: o,
            sort: i,
            trail: s = 0,
            expires: a = !0,
            exitBeforeEnter: c = !1,
            onDestroyed: l,
            ref: u,
            config: d
          } = r ? r() : t,
          f = (0, w.useMemo)(() => r || 3 == arguments.length ? fn() : void 0, []),
          p = O(e),
          h = [],
          m = (0, w.useRef)(null),
          v = o ? null : m.current;
        $e(() => {
          m.current = h
        }), Ge(() => (k(h, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          k(m.current, e => {
            e.expired && clearTimeout(e.expirationId), St(e.ctrl, f), e.ctrl.stop(!0)
          })
        }));
        const g = function(e, {
            key: t,
            keys: n = t
          }, r) {
            if (null === n) {
              const t = new Set;
              return e.map(e => {
                const n = r && r.find(n => n.item === e && "leave" !== n.phase && !t.has(n));
                return n ? (t.add(n), n.key) : vn++
              })
            }
            return T.und(n) ? e : T.fun(n) ? e.map(n) : O(n)
          }(p, r ? r() : t, v),
          y = o && m.current || [];
        $e(() => k(y, ({
          ctrl: e,
          item: t,
          key: n
        }) => {
          St(e, f), ft(l, t, n)
        }));
        const _ = [];
        if (v && k(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), y.push(e)) : ~(t = _[t] = g.indexOf(e.key)) && (h[t] = e)
          }), k(p, (e, t) => {
            h[t] || (h[t] = {
              key: g[t],
              item: e,
              phase: "mount",
              ctrl: new on
            }, h[t].ctrl.item = e)
          }), _.length) {
          let e = -1;
          const {
            leave: n
          } = r ? r() : t;
          k(_, (t, r) => {
            const o = v[r];
            ~t ? (e = h.indexOf(o), h[e] = {
              ...o,
              item: p[t]
            }) : n && h.splice(++e, 0, o)
          })
        }
        T.fun(i) && h.sort((e, t) => i(e.item, t.item));
        let b = -s;
        const x = Ue(),
          S = gt(t),
          E = new Map,
          C = (0, w.useRef)(new Map),
          P = (0, w.useRef)(!1);
        k(h, (e, n) => {
          const o = e.key,
            i = e.phase,
            l = r ? r() : t;
          let f, p;
          const h = ft(l.delay || 0, o);
          if ("mount" == i) f = l.enter, p = "enter";
          else {
            const e = g.indexOf(o) < 0;
            if ("leave" != i)
              if (e) f = l.leave, p = "leave";
              else {
                if (!(f = l.update)) return;
                p = "update"
              }
            else {
              if (e) return;
              f = l.enter, p = "enter"
            }
          }
          if (f = ft(f, e.item, n), f = T.obj(f) ? bt(f) : {
              to: f
            }, !f.config) {
            const t = d || S.config;
            f.config = ft(t, e.item, n, p)
          }
          b += s;
          const y = {
            ...S,
            delay: h + b,
            ref: u,
            immediate: l.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == p && T.und(y.from)) {
            const o = r ? r() : t,
              i = T.und(o.initial) || v ? o.from : o.initial;
            y.from = ft(i, e.item, n)
          }
          const {
            onResolve: _
          } = y;
          y.onResolve = e => {
            ft(_, e);
            const t = m.current,
              n = t.find(e => e.key === o);
            if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == n.phase) {
                const t = ft(a, n.item);
                if (!1 !== t) {
                  const r = !0 === t ? 0 : t;
                  if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(x, r)))
                }
              }
              e && t.some(e => e.expired) && (C.current.delete(n), c && (P.current = !0), x())
            }
          };
          const w = an(e.ctrl, y);
          "leave" === p && c ? C.current.set(e, {
            phase: p,
            springs: w,
            payload: y
          }) : E.set(e, {
            phase: p,
            springs: w,
            payload: y
          })
        });
        const R = (0, w.useContext)(dn),
          M = function(e) {
            const t = (0, w.useRef)(void 0);
            return (0, w.useEffect)(() => {
              t.current = e
            }), t.current
          }(R),
          D = R !== M && function(e) {
            for (const t in e) return !0;
            return !1
          }(R);
        $e(() => {
          D && k(h, e => {
            e.ctrl.start({
              default: R
            })
          })
        }, [R]), k(E, (e, t) => {
          if (C.current.size) {
            const e = h.findIndex(e => e.key === t.key);
            h.splice(e, 1)
          }
        }), $e(() => {
          k(C.current.size ? C.current : E, ({
            phase: e,
            payload: t
          }, n) => {
            const {
              ctrl: r
            } = n;
            n.phase = e, f?.add(r), D && "enter" == e && r.start({
              default: R
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(r, t.ref), !r.ref && !f || P.current ? (r.start(t), P.current && (P.current = !1)) : r.update(t))
          })
        }, o ? void 0 : n);
        const A = e => w.createElement(w.Fragment, null, h.map((t, n) => {
          const {
            springs: r
          } = E.get(t) || t.ctrl, o = e({
            ...r
          }, t.item, t, n), i = T.str(t.key) || T.num(t.key) ? t.key : t.ctrl.id, s = w.version < "19.0.0", a = o?.props ?? {}, c = s ? o?.ref : a?.ref;
          return o && o.type ? w.createElement(o.type, {
            ...a,
            key: i,
            ref: c
          }) : o
        }));
        return f ? [A, f] : A
      }
      var vn = 1,
        gn = class extends Bt {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = fe(...t);
            const n = this._get(),
              r = at(n);
            Ze(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            C(t, this.get()) || (Qe(this).setValue(t), this._onChange(t, this.idle)), !this.idle && _n(this._active) && bn(this)
          }
          _get() {
            const e = T.arr(this.source) ? this.source.map(Se) : O(Se(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !_n(this._active) && (this.idle = !1, k(Je(this), e => {
              e.done = !1
            }), S.skipAnimation ? (o.batchedUpdates(() => this.advance()), bn(this)) : K.start(this))
          }
          _attach() {
            let e = 1;
            k(O(this.source), t => {
              xe(t) && Pe(t, this), zt(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            k(O(this.source), e => {
              xe(e) && Oe(e, this)
            }), this._active.clear(), bn(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = O(this.source).reduce((e, t) => Math.max(e, (zt(t) ? t.priority : 0) + 1), 0))
          }
        };

      function yn(e) {
        return !1 !== e.idle
      }

      function _n(e) {
        return !e.size || Array.from(e).every(yn)
      }

      function bn(e) {
        e.idle || (e.idle = !0, k(Je(e), e => {
          e.done = !0
        }), Te(e, {
          type: "idle",
          parent: e
        }))
      }
      S.assign({
        createStringInterpolator: Ve,
        to: (e, t) => new gn(e, t)
      }), K.advance;
      var wn = n(4017),
        xn = /^--/;

      function Sn(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || xn.test(e) || Tn.hasOwnProperty(e) && Tn[e] ? ("" + t).trim() : t + "px"
      }
      var En = {},
        Tn = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        Cn = ["Webkit", "Ms", "Moz", "O"];
      Tn = Object.keys(Tn).reduce((e, t) => (Cn.forEach(n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t]), e), Tn);
      var kn = /^(matrix|translate|scale|rotate|skew)/,
        Pn = /^(translate)/,
        On = /^(rotate|skew)/,
        Rn = (e, t) => T.num(e) && 0 !== e ? e + t : e,
        Mn = (e, t) => T.arr(e) ? e.every(e => Mn(e, t)) : T.num(e) ? e === t : parseFloat(e) === t,
        Dn = class extends ot {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push(e => [`translate3d(${e.map(e=>Rn(e,"px")).join(",")})`, Mn(e, 0)])), P(r, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (kn.test(t)) {
                if (delete r[t], T.und(e)) return;
                const n = Pn.test(t) ? "px" : On.test(t) ? "deg" : "";
                o.push(O(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Rn(o,n)})`, Mn(o, 0)] : e => [`${t}(${e.map(e=>Rn(e,n)).join(",")})`, Mn(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (r.transform = new An(o, i)), super(r)
          }
        },
        An = class extends Ce {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return k(this.inputs, (n, r) => {
              const o = Se(n[0]),
                [i, s] = this.transforms[r](T.arr(o) ? o : n.map(Se));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && k(this.inputs, e => k(e, e => xe(e) && Pe(e, this)))
          }
          observerRemoved(e) {
            0 == e && k(this.inputs, e => k(e, e => xe(e) && Oe(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Te(this, e)
          }
        };
      S.assign({
        batchedUpdates: wn.unstable_batchedUpdates,
        createStringInterpolator: Ve,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199
        }
      });
      var jn = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new ot(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = dt(e) || "Anonymous";
              return (e = T.str(e) ? i[e] || (i[e] = ct(e, o)) : e[ut] || (e[ut] = ct(e, o))).displayName = `Animated(${t})`, e
            };
          return P(e, (t, n) => {
            T.arr(e) && (n = dt(t)), i[n] = i(t)
          }), {
            animated: i
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: r,
                style: o,
                children: i,
                scrollTop: s,
                scrollLeft: a,
                viewBox: c,
                ...l
              } = t,
              u = Object.values(l),
              d = Object.keys(l).map(t => n || e.hasAttribute(t) ? t : En[t] || (En[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = Sn(t, o[t]);
                xn.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach((t, n) => {
              e.setAttribute(t, u[n])
            }), void 0 !== r && (e.className = r), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== c && e.setAttribute("viewBox", c)
          },
          createAnimatedStyle: e => new Dn(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        Ln = jn.animated
    },
    1350(e, t, n) {
      function r(e, t, n) {
        return Math.min(Math.max(e, n), t)
      }
      n.d(t, {
        J1: () => y,
        a: () => _,
        e$: () => g
      });
      class o extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var i = o;

      function s(e) {
        if ("string" != typeof e) throw new i(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = h.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            n = c[function(e) {
              let t = 5381,
                n = e.length;
              for (; n;) t = 33 * t ^ e.charCodeAt(--n);
              return (t >>> 0) % 2341
            }(t)];
          if (!n) throw new i(e);
          return `#${n}`
        }(e) : e;
        const n = u.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(l(e, 2), 16)), parseInt(l(e[3] || "f", 2), 16) / 255]
        }
        const o = d.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const s = f.exec(t);
        if (s) {
          const e = Array.from(s).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const a = p.exec(t);
        if (a) {
          const [t, n, o, s] = Array.from(a).slice(1).map(parseFloat);
          if (r(0, 100, n) !== n) throw new i(e);
          if (r(0, 100, o) !== o) throw new i(e);
          return [...v(t, n, o), Number.isNaN(s) ? 1 : s]
        }
        throw new i(e)
      }
      const a = e => parseInt(e.replace(/_/g, ""), 36),
        c = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const n = a(t.substring(0, 3)),
            r = a(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - r.length; e++) o += "0";
          return e[n] = `${o}${r}`, e
        }, {}),
        l = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        u = new RegExp(`^#${l("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        d = new RegExp(`^#${l("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        f = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${l(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        p = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        h = /^[a-z]+$/i,
        m = e => Math.round(255 * e),
        v = (e, t, n) => {
          let r = n / 100;
          if (0 === t) return [r, r, r].map(m);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * r - 1)) * (t / 100),
            s = i * (1 - Math.abs(o % 2 - 1));
          let a = 0,
            c = 0,
            l = 0;
          o >= 0 && o < 1 ? (a = i, c = s) : o >= 1 && o < 2 ? (a = s, c = i) : o >= 2 && o < 3 ? (c = i, l = s) : o >= 3 && o < 4 ? (c = s, l = i) : o >= 4 && o < 5 ? (a = s, l = i) : o >= 5 && o < 6 && (a = i, l = s);
          const u = r - i / 2;
          return [a + u, c + u, l + u].map(m)
        };

      function g(e, t) {
        const [n, o, i, a] = function(e) {
          const [t, n, r, o] = s(e).map((e, t) => 3 === t ? e : e / 255), i = Math.max(t, n, r), a = Math.min(t, n, r), c = (i + a) / 2;
          if (i === a) return [0, 0, c, o];
          const l = i - a;
          return [60 * (t === i ? (n - r) / l + (n < r ? 6 : 0) : n === i ? (r - t) / l + 2 : (t - n) / l + 4), c > .5 ? l / (2 - i - a) : l / (i + a), c, o]
        }(e);
        return function(e, t, n, o) {
          return `hsla(${(e%360).toFixed()}, ${r(0,100,100*t).toFixed()}%, ${r(0,100,100*n).toFixed()}%, ${parseFloat(r(0,1,o).toFixed(3))})`
        }(n, o, i - t, a)
      }

      function y(e) {
        if ("transparent" === e) return 0;

        function t(e) {
          const t = e / 255;
          return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }
        const [n, r, o] = s(e);
        return .2126 * t(n) + .7152 * t(r) + .0722 * t(o)
      }

      function _(e, t) {
        return g(e, -t)
      }
    },
    7697(e, t, n) {
      function r(e = {}) {
        let t, n = [];
        const r = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), r = e[t.selectedScrollSnap()];
          return r ? r.map(e => n[e]).reduce((e, t) => Math.max(e, t), 0) : null
        }

        function i() {
          null !== o() && (t.containerNode().style.height = `${o()}px`)
        }
        return {
          name: "autoHeight",
          options: e,
          init: function(e) {
            t = e;
            const {
              options: {
                axis: o
              },
              slideRects: s
            } = t.internalEngine();
            "y" !== o && (n = s.map(e => e.height), r.forEach(e => t.on(e, i)), i())
          },
          destroy: function() {
            r.forEach(e => t.off(e, i));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      n.d(t, {
        A: () => r
      }), r.globalOptions = void 0
    },
    7497(e, t, n) {
      n.d(t, {
        A: () => a
      });
      const r = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function o(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function i(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function s(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function a(e = {}) {
        let t, n, c, l, u = [],
          d = [];
        const f = ["select"],
          p = ["pointerDown", "pointerUp"],
          h = ["slidesInView"],
          m = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function v(e, t) {
          ("pointerDown" === t ? s : i)(c, m.dragging)
        }

        function g(e = [], t = [], n) {
          const r = t.map(e => l[e]),
            o = e.map(e => l[e]);
          return r.forEach(e => i(e, n)), o.forEach(e => s(e, n)), e
        }

        function y() {
          const {
            slideRegistry: e
          } = n.internalEngine(), t = e[n.selectedScrollSnap()];
          u = g(t, u, m.snapped)
        }

        function _() {
          const e = n.slidesInView();
          d = g(e, d, m.inView)
        }
        return {
          name: "classNames",
          options: e,
          init: function(i, u) {
            n = i;
            const {
              mergeOptions: d,
              optionsAtMedia: g
            } = u, b = d(r, a.globalOptions), w = d(b, e);
            t = g(w), c = n.rootNode(), l = n.slideNodes();
            const {
              watchDrag: x,
              loop: S
            } = n.internalEngine().options, E = !!x;
            t.loop && S && (m.loop = o(t.loop), s(c, m.loop)), t.draggable && E && (m.draggable = o(t.draggable), s(c, m.draggable)), t.dragging && (m.dragging = o(t.dragging), p.forEach(e => n.on(e, v))), t.snapped && (m.snapped = o(t.snapped), f.forEach(e => n.on(e, y)), y()), t.inView && (m.inView = o(t.inView), h.forEach(e => n.on(e, _)), _())
          },
          destroy: function() {
            p.forEach(e => n.off(e, v)), f.forEach(e => n.off(e, y)), h.forEach(e => n.off(e, _)), i(c, m.loop), i(c, m.draggable), i(c, m.dragging), g([], u, m.snapped), g([], d, m.inView), Object.keys(m).forEach(e => {
              m[e] = []
            })
          }
        }
      }
      a.globalOptions = void 0
    },
    4634(e, t, n) {
      n.d(t, {
        A: () => F
      });
      var r = n(4637);

      function o(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function i(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every(n => {
          const r = e[n],
            s = t[n];
          return "function" == typeof r ? `${r}` == `${s}` : o(r) && o(s) ? i(r, s) : r === s
        }))
      }

      function s(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function a(e) {
        return "number" == typeof e
      }

      function c(e) {
        return "string" == typeof e
      }

      function l(e) {
        return "boolean" == typeof e
      }

      function u(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function d(e) {
        return Math.abs(e)
      }

      function f(e) {
        return Math.sign(e)
      }

      function p(e, t) {
        return d(e - t)
      }

      function h(e) {
        return _(e).map(Number)
      }

      function m(e) {
        return e[v(e)]
      }

      function v(e) {
        return Math.max(0, e.length - 1)
      }

      function g(e, t) {
        return t === v(e)
      }

      function y(e, t = 0) {
        return Array.from(Array(e), (e, n) => t + n)
      }

      function _(e) {
        return Object.keys(e)
      }

      function b(e, t) {
        return [e, t].reduce((e, t) => (_(t).forEach(n => {
          const r = e[n],
            o = t[n],
            i = u(r) && u(o);
          e[n] = i ? b(r, o) : o
        }), e), {})
      }

      function w(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function x() {
        let e = [];
        const t = {
          add: function(n, r, o, i = {
            passive: !0
          }) {
            let s;
            if ("addEventListener" in n) n.addEventListener(r, o, i), s = () => n.removeEventListener(r, o, i);
            else {
              const e = n;
              e.addListener(o), s = () => e.removeListener(o)
            }
            return e.push(s), t
          },
          clear: function() {
            e = e.filter(e => e())
          }
        };
        return t
      }

      function S(e = 0, t = 0) {
        const n = d(e - t);

        function r(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function i(e) {
          return r(e) || o(e)
        }
        return {
          length: n,
          max: t,
          min: e,
          constrain: function(n) {
            return i(n) ? r(n) ? e : t : n
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: r,
          removeOffset: function(e) {
            return n ? e - n * Math.ceil((e - t) / n) : e
          }
        }
      }

      function E(e, t, n) {
        const {
          constrain: r
        } = S(0, e), o = e + 1;
        let i = s(t);

        function s(e) {
          return n ? d((o + e) % o) : r(e)
        }

        function a() {
          return i
        }

        function c() {
          return E(e, a(), n)
        }
        const l = {
          get: a,
          set: function(e) {
            return i = s(e), l
          },
          add: function(e) {
            return c().set(a() + e)
          },
          clone: c
        };
        return l
      }

      function T(e, t, n, r, o, i, s, a, c, u, h, m, v, g, y, _, b, E, T) {
        const {
          cross: C,
          direction: k
        } = e, P = ["INPUT", "SELECT", "TEXTAREA"], O = {
          passive: !1
        }, R = x(), M = x(), D = S(50, 225).constrain(g.measure(20)), A = {
          mouse: 300,
          touch: 400
        }, j = {
          mouse: 500,
          touch: 600
        }, L = y ? 43 : 25;
        let I = !1,
          N = 0,
          F = 0,
          z = !1,
          V = !1,
          B = !1,
          q = !1;

        function K(e) {
          if (!w(e, r) && e.touches.length >= 2) return W(e);
          const t = i.readPoint(e),
            n = i.readPoint(e, C),
            s = p(t, N),
            c = p(n, F);
          if (!V && !q) {
            if (!e.cancelable) return W(e);
            if (V = s > c, !V) return W(e)
          }
          const l = i.pointerMove(e);
          s > _ && (B = !0), u.useFriction(.3).useDuration(.75), a.start(), o.add(k(l)), e.preventDefault()
        }

        function W(e) {
          const t = h.byDistance(0, !1).index !== m.get(),
            n = i.pointerUp(e) * (y ? j : A)[q ? "mouse" : "touch"],
            r = function(e, t) {
              const n = m.add(-1 * f(e)),
                r = h.byDistance(e, !y).distance;
              return y || d(e) < D ? r : b && t ? .5 * r : h.byIndex(n.get(), 0).distance
            }(k(n), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (d(e) <= d(t)) return 0;
              const n = p(d(e), d(t));
              return d(n / e)
            }(n, r),
            s = L - 10 * o,
            a = E + o / 50;
          V = !1, z = !1, M.clear(), u.useDuration(s).useFriction(a), c.distance(r, !y), q = !1, v.emit("pointerUp")
        }

        function H(e) {
          B && (e.stopPropagation(), e.preventDefault(), B = !1)
        }
        return {
          init: function(e) {
            if (!T) return;

            function a(a) {
              (l(T) || T(e, a)) && function(e) {
                const a = w(e, r);
                q = a, B = y && a && !e.buttons && I, I = p(o.get(), s.get()) >= 2, a && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return P.includes(t)
                }(e.target) || (z = !0, i.pointerDown(e), u.useFriction(0).useDuration(0), o.set(s), function() {
                  const e = q ? n : t;
                  M.add(e, "touchmove", K, O).add(e, "touchend", W).add(e, "mousemove", K, O).add(e, "mouseup", W)
                }(), N = i.readPoint(e), F = i.readPoint(e, C), v.emit("pointerDown"))
              }(a)
            }
            const c = t;
            R.add(c, "dragstart", e => e.preventDefault(), O).add(c, "touchmove", () => {}, O).add(c, "touchend", () => {}).add(c, "touchstart", a).add(c, "mousedown", a).add(c, "touchcancel", W).add(c, "contextmenu", W).add(c, "click", H, !0)
          },
          destroy: function() {
            R.clear(), M.clear()
          },
          pointerDown: function() {
            return z
          }
        }
      }

      function C(e, t) {
        let n, r;

        function o(e) {
          return e.timeStamp
        }

        function i(n, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return (w(n, t) ? n : n.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return n = e, r = e, i(e)
          },
          pointerMove: function(e) {
            const t = i(e) - i(r),
              s = o(e) - o(n) > 170;
            return r = e, s && (n = e), t
          },
          pointerUp: function(e) {
            if (!n || !r) return 0;
            const t = i(r) - i(n),
              s = o(e) - o(n),
              a = o(e) - o(r) > 170,
              c = t / s;
            return s && !a && d(c) > .1 ? c : 0
          },
          readPoint: i
        }
      }

      function k(e, t, n, r, o, i, s) {
        const a = [e].concat(r);
        let c, u, f = [],
          p = !1;

        function h(e) {
          return o.measureSize(s.measure(e))
        }
        return {
          init: function(o) {
            i && (u = h(e), f = r.map(h), c = new ResizeObserver(n => {
              (l(i) || i(o, n)) && function(n) {
                for (const i of n) {
                  if (p) return;
                  const n = i.target === e,
                    s = r.indexOf(i.target),
                    a = n ? u : f[s];
                  if (d(h(n ? e : r[s]) - a) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(n)
            }), n.requestAnimationFrame(() => {
              a.forEach(e => c.observe(e))
            }))
          },
          destroy: function() {
            p = !0, c && c.disconnect()
          }
        }
      }

      function P(e, t, n, r, o) {
        const i = o.measure(10),
          s = o.measure(50),
          a = S(.1, .99);
        let c = !1;

        function l() {
          return !c && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: l,
          constrain: function(o) {
            if (!l()) return;
            const c = e.reachedMin(t.get()) ? "min" : "max",
              u = d(e[c] - t.get()),
              f = n.get() - t.get(),
              p = a.constrain(u / s);
            n.subtract(f * p), !o && d(f) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            c = !e
          }
        }
      }

      function O(e, t, n, r) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: s,
            reachedMax: a
          } = S(o, i);
        return {
          loop: function(t) {
            if (! function(e) {
                return 1 === e ? a(n.get()) : -1 === e && s(n.get())
              }(t)) return;
            const o = e * (-1 * t);
            r.forEach(e => e.add(o))
          }
        }
      }

      function R(e) {
        let t = e;

        function n(e) {
          return a(e) ? e : e.get()
        }
        return {
          get: function() {
            return t
          },
          set: function(e) {
            t = n(e)
          },
          add: function(e) {
            t += n(e)
          },
          subtract: function(e) {
            t -= n(e)
          }
        }
      }

      function M(e, t) {
        const n = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          r = t.style;
        let o = null,
          i = !1;
        return {
          clear: function() {
            i || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (i) return;
            const s = (a = e.direction(t), Math.round(100 * a) / 100);
            var a;
            s !== o && (r.transform = n(s), o = s)
          },
          toggleActive: function(e) {
            i = !e
          }
        }
      }

      function D(e, t, n, r, o, i, s, a, c) {
        const l = h(o),
          u = h(o).reverse(),
          d = function() {
            const e = s[0];
            return m(p(u, e), n, !1)
          }().concat(function() {
            const e = t - s[0] - 1;
            return m(p(l, e), -n, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function p(e, t) {
          return e.reduce((e, n) => f(e, t) > 0 ? e.concat([n]) : e, [])
        }

        function m(o, s, l) {
          const u = function(e) {
            return i.map((n, o) => ({
              start: n - r[o] + .5 + e,
              end: n + t - .5 + e
            }))
          }(s);
          return o.map(t => {
            const r = l ? 0 : -n,
              o = l ? n : 0,
              i = l ? "end" : "start",
              s = u[t][i];
            return {
              index: t,
              loopPoint: s,
              slideLocation: R(-1),
              translate: M(e, c[t]),
              target: () => a.get() > s ? r : o
            }
          })
        }
        return {
          canLoop: function() {
            return d.every(({
              index: e
            }) => f(l.filter(t => t !== e), t) <= .1)
          },
          clear: function() {
            d.forEach(e => e.translate.clear())
          },
          loop: function() {
            d.forEach(e => {
              const {
                target: t,
                translate: n,
                slideLocation: r
              } = e, o = t();
              o !== r.get() && (n.to(o), r.set(o))
            })
          },
          loopPoints: d
        }
      }

      function A(e, t, n) {
        let r, o = !1;
        return {
          init: function(i) {
            n && (r = new MutationObserver(e => {
              o || (l(n) || n(i, e)) && function(e) {
                for (const n of e)
                  if ("childList" === n.type) {
                    i.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(e)
            }), r.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            r && r.disconnect(), o = !0
          }
        }
      }

      function j(e, t, n, r, o, i, s) {
        const {
          align: u,
          axis: b,
          direction: w,
          startIndex: j,
          loop: L,
          duration: I,
          dragFree: N,
          dragThreshold: F,
          inViewThreshold: z,
          slidesToScroll: V,
          skipSnaps: B,
          containScroll: q,
          watchResize: K,
          watchSlides: W,
          watchDrag: H,
          watchFocus: $
        } = i, U = {
          measure: function(e) {
            const {
              offsetTop: t,
              offsetLeft: n,
              offsetWidth: r,
              offsetHeight: o
            } = e;
            return {
              top: t,
              right: n + r,
              bottom: t + o,
              left: n,
              width: r,
              height: o
            }
          }
        }, G = U.measure(t), X = n.map(U.measure), Y = function(e, t) {
          const n = "rtl" === t,
            r = "y" === e,
            o = !r && n ? -1 : 1;
          return {
            scroll: r ? "y" : "x",
            cross: r ? "x" : "y",
            startEdge: r ? "top" : n ? "right" : "left",
            endEdge: r ? "bottom" : n ? "left" : "right",
            measureSize: function(e) {
              const {
                height: t,
                width: n
              } = e;
              return r ? t : n
            },
            direction: function(e) {
              return e * o
            }
          }
        }(b, w), Q = Y.measureSize(G), Z = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(Q), J = function(e, t) {
          const n = {
            start: function() {
              return 0
            },
            center: function(e) {
              return r(e) / 2
            },
            end: r
          };

          function r(e) {
            return t - e
          }
          return {
            measure: function(r, o) {
              return c(e) ? n[e](r) : e(t, r, o)
            }
          }
        }(u, Q), ee = !L && !!q, te = L || !!q, {
          slideSizes: ne,
          slideSizesWithGaps: re,
          startGap: oe,
          endGap: ie
        } = function(e, t, n, r, o, i) {
          const {
            measureSize: s,
            startEdge: a,
            endEdge: c
          } = e, l = n[0] && o, u = function() {
            if (!l) return 0;
            const e = n[0];
            return d(t[a] - e[a])
          }(), f = function() {
            if (!l) return 0;
            const e = i.getComputedStyle(m(r));
            return parseFloat(e.getPropertyValue(`margin-${c}`))
          }(), p = n.map(s), h = n.map((e, t, n) => {
            const r = !t,
              o = g(n, t);
            return r ? p[t] + u : o ? p[t] + f : n[t + 1][a] - e[a]
          }).map(d);
          return {
            slideSizes: p,
            slideSizesWithGaps: h,
            startGap: u,
            endGap: f
          }
        }(Y, G, X, n, te, o), se = function(e, t, n, r, o, i, s, c, l) {
          const {
            startEdge: u,
            endEdge: f,
            direction: p
          } = e, g = a(n);
          return {
            groupSlides: function(e) {
              return g ? function(e, t) {
                return h(e).filter(e => e % t === 0).map(n => e.slice(n, n + t))
              }(e, n) : function(e) {
                return e.length ? h(e).reduce((n, a, h) => {
                  const g = m(n) || 0,
                    y = 0 === g,
                    _ = a === v(e),
                    b = o[u] - i[g][u],
                    w = o[u] - i[a][f],
                    x = !r && y ? p(s) : 0,
                    S = d(w - (!r && _ ? p(c) : 0) - (b + x));
                  return h && S > t + l && n.push(a), _ && n.push(e.length), n
                }, []).map((t, n, r) => {
                  const o = Math.max(r[n - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          }
        }(Y, Q, V, L, G, X, oe, ie, 2), {
          snaps: ae,
          snapsAligned: ce
        } = function(e, t, n, r, o) {
          const {
            startEdge: i,
            endEdge: s
          } = e, {
            groupSlides: a
          } = o, c = a(r).map(e => m(e)[s] - e[0][i]).map(d).map(t.measure), l = r.map(e => n[i] - e[i]).map(e => -d(e)), u = a(l).map(e => e[0]).map((e, t) => e + c[t]);
          return {
            snaps: l,
            snapsAligned: u
          }
        }(Y, J, G, X, se), le = -m(ae) + m(re), {
          snapsContained: ue,
          scrollContainLimit: de
        } = function(e, t, n, r) {
          const o = S(-t + e, 0),
            i = n.map((e, t) => {
              const {
                min: r,
                max: i
              } = o, s = o.constrain(e), c = !t, l = g(n, t);
              return c ? i : l || a(r, s) ? r : a(i, s) ? i : s
            }).map(e => parseFloat(e.toFixed(3))),
            s = function() {
              const e = i[0],
                t = m(i);
              return S(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function a(e, t) {
            return p(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === r) return i;
              const {
                min: n,
                max: a
              } = s;
              return i.slice(n, a)
            }(),
            scrollContainLimit: s
          }
        }(Q, le, ce, q), fe = ee ? ue : ce, {
          limit: pe
        } = function(e, t, n) {
          const r = t[0];
          return {
            limit: S(n ? r - e : m(t), r)
          }
        }(le, fe, L), he = E(v(fe), j, L), me = he.clone(), ve = h(n), ge = function(e, t, n, r) {
          const o = x(),
            i = 1e3 / 60;
          let s = null,
            a = 0,
            c = 0;

          function l(e) {
            if (!c) return;
            s || (s = e, n(), n());
            const o = e - s;
            for (s = e, a += o; a >= i;) n(), a -= i;
            r(a / i), c && (c = t.requestAnimationFrame(l))
          }

          function u() {
            t.cancelAnimationFrame(c), s = null, a = 0, c = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", () => {
                e.hidden && (s = null, a = 0)
              })
            },
            destroy: function() {
              u(), o.clear()
            },
            start: function() {
              c || (c = t.requestAnimationFrame(l))
            },
            stop: u,
            update: n,
            render: r
          }
        }(r, o, () => (({
          dragHandler: e,
          scrollBody: t,
          scrollBounds: n,
          options: {
            loop: r
          }
        }) => {
          r || n.constrain(e.pointerDown()), t.seek()
        })(Me), e => (({
          scrollBody: e,
          translate: t,
          location: n,
          offsetLocation: r,
          previousLocation: o,
          scrollLooper: i,
          slideLooper: s,
          dragHandler: a,
          animation: c,
          eventHandler: l,
          scrollBounds: u,
          options: {
            loop: d
          }
        }, f) => {
          const p = e.settled(),
            h = !u.shouldConstrain(),
            m = d ? p : p && h,
            v = m && !a.pointerDown();
          v && c.stop();
          const g = n.get() * f + o.get() * (1 - f);
          r.set(g), d && (i.loop(e.direction()), s.loop()), t.to(r.get()), v && l.emit("settle"), m || l.emit("scroll")
        })(Me, e)), ye = fe[he.get()], _e = R(ye), be = R(ye), we = R(ye), xe = R(ye), Se = function(e, t, n, r, o) {
          let i = 0,
            s = 0,
            a = o,
            c = .68,
            l = e.get(),
            u = 0;

          function p(e) {
            return a = e, m
          }

          function h(e) {
            return c = e, m
          }
          const m = {
            direction: function() {
              return s
            },
            duration: function() {
              return a
            },
            velocity: function() {
              return i
            },
            seek: function() {
              const t = r.get() - e.get();
              let o = 0;
              return a ? (n.set(e), i += t / a, i *= c, l += i, e.add(i), o = l - u) : (i = 0, n.set(r), e.set(r), o = t), s = f(o), u = l, m
            },
            settled: function() {
              return d(r.get() - t.get()) < .001
            },
            useBaseFriction: function() {
              return h(.68)
            },
            useBaseDuration: function() {
              return p(o)
            },
            useFriction: h,
            useDuration: p
          };
          return m
        }(_e, we, be, xe, I), Ee = function(e, t, n, r, o) {
          const {
            reachedAny: i,
            removeOffset: s,
            constrain: a
          } = r;

          function c(e) {
            return e.concat().sort((e, t) => d(e) - d(t))[0]
          }

          function l(t, r) {
            const o = [t, t + n, t - n];
            if (!e) return t;
            if (!r) return c(o);
            const i = o.filter(e => f(e) === r);
            return i.length ? c(i) : m(o) - n
          }
          return {
            byDistance: function(n, r) {
              const c = o.get() + n,
                {
                  index: u,
                  distance: f
                } = function(n) {
                  const r = e ? s(n) : a(n),
                    o = t.map((e, t) => ({
                      diff: l(e - r, 0),
                      index: t
                    })).sort((e, t) => d(e.diff) - d(t.diff)),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: r
                  }
                }(c),
                p = !e && i(c);
              return !r || p ? {
                index: u,
                distance: n
              } : {
                index: u,
                distance: n + l(t[u] - f, 0)
              }
            },
            byIndex: function(e, n) {
              return {
                index: e,
                distance: l(t[e] - o.get(), n)
              }
            },
            shortcut: l
          }
        }(L, fe, le, pe, xe), Te = function(e, t, n, r, o, i, s) {
          function a(o) {
            const a = o.distance,
              c = o.index !== t.get();
            i.add(a), a && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), c && (n.set(t.get()), t.set(o.index), s.emit("select"))
          }
          return {
            distance: function(e, t) {
              a(o.byDistance(e, t))
            },
            index: function(e, n) {
              const r = t.clone().set(e);
              a(o.byIndex(r.get(), n))
            }
          }
        }(ge, he, me, Se, Ee, xe, s), Ce = function(e) {
          const {
            max: t,
            length: n
          } = e;
          return {
            get: function(e) {
              return n ? (e - t) / -n : 0
            }
          }
        }(pe), ke = x(), Pe = function(e, t, n, r) {
          const o = {};
          let i, s = null,
            a = null,
            c = !1;
          return {
            init: function() {
              i = new IntersectionObserver(e => {
                c || (e.forEach(e => {
                  const n = t.indexOf(e.target);
                  o[n] = e
                }), s = null, a = null, n.emit("slidesInView"))
              }, {
                root: e.parentElement,
                threshold: r
              }), t.forEach(e => i.observe(e))
            },
            destroy: function() {
              i && i.disconnect(), c = !0
            },
            get: function(e = !0) {
              if (e && s) return s;
              if (!e && a) return a;
              const t = function(e) {
                return _(o).reduce((t, n) => {
                  const r = parseInt(n),
                    {
                      isIntersecting: i
                    } = o[r];
                  return (e && i || !e && !i) && t.push(r), t
                }, [])
              }(e);
              return e && (s = t), e || (a = t), t
            }
          }
        }(t, n, s, z), {
          slideRegistry: Oe
        } = function(e, t, n, r, o, i) {
          const {
            groupSlides: s
          } = o, {
            min: a,
            max: c
          } = r;
          return {
            slideRegistry: function() {
              const r = s(i),
                o = !e || "keepSnaps" === t;
              return 1 === n.length ? [i] : o ? r : r.slice(a, c).map((e, t, n) => {
                const r = !t,
                  o = g(n, t);
                return r ? y(m(n[0]) + 1) : o ? y(v(i) - m(n)[0] + 1, m(n)[0]) : e
              })
            }()
          }
        }(ee, q, fe, de, se, ve), Re = function(e, t, n, r, o, i, s, c) {
          const u = {
            passive: !0,
            capture: !0
          };
          let d = 0;

          function f(e) {
            "Tab" === e.code && (d = (new Date).getTime())
          }
          return {
            init: function(p) {
              c && (i.add(document, "keydown", f, !1), t.forEach((t, f) => {
                i.add(t, "focus", t => {
                  (l(c) || c(p, t)) && function(t) {
                    if ((new Date).getTime() - d > 10) return;
                    s.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = n.findIndex(e => e.includes(t));
                    a(i) && (o.useDuration(0), r.index(i, 0), s.emit("slideFocus"))
                  }(f)
                }, u)
              }))
            }
          }
        }(e, n, Oe, Te, Se, ke, s, $), Me = {
          ownerDocument: r,
          ownerWindow: o,
          eventHandler: s,
          containerRect: G,
          slideRects: X,
          animation: ge,
          axis: Y,
          dragHandler: T(Y, e, r, o, xe, C(Y, o), _e, ge, Te, Se, Ee, he, s, Z, N, F, B, .68, H),
          eventStore: ke,
          percentOfView: Z,
          index: he,
          indexPrevious: me,
          limit: pe,
          location: _e,
          offsetLocation: we,
          previousLocation: be,
          options: i,
          resizeHandler: k(t, s, o, n, Y, K, U),
          scrollBody: Se,
          scrollBounds: P(pe, we, xe, Se, Z),
          scrollLooper: O(le, pe, we, [_e, we, be, xe]),
          scrollProgress: Ce,
          scrollSnapList: fe.map(Ce.get),
          scrollSnaps: fe,
          scrollTarget: Ee,
          scrollTo: Te,
          slideLooper: D(Y, Q, le, ne, re, ae, fe, we, n),
          slideFocus: Re,
          slidesHandler: A(t, s, W),
          slidesInView: Pe,
          slideIndexes: ve,
          slideRegistry: Oe,
          slidesToScroll: se,
          target: xe,
          translate: M(Y, t)
        };
        return Me
      }
      const L = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
      };

      function I(e) {
        function t(e, t) {
          return b(e, t || {})
        }
        return {
          mergeOptions: t,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              o = _(r).filter(t => e.matchMedia(t).matches).map(e => r[e]).reduce((e, n) => t(e, n), {});
            return t(n, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => _(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        }
      }

      function N(e, t, n) {
        const r = e.ownerDocument,
          o = r.defaultView,
          i = I(o),
          s = function(e) {
            let t = [];
            return {
              init: function(n, r) {
                return t = r.filter(({
                  options: t
                }) => !1 !== e.optionsAtMedia(t).active), t.forEach(t => t.init(n, e)), r.reduce((e, t) => Object.assign(e, {
                  [t.name]: t
                }), {})
              },
              destroy: function() {
                t = t.filter(e => e.destroy())
              }
            }
          }(i),
          a = x(),
          l = function() {
            let e, t = {};

            function n(e) {
              return t[e] || []
            }
            const r = {
              init: function(t) {
                e = t
              },
              emit: function(t) {
                return n(t).forEach(n => n(e, t)), r
              },
              off: function(e, o) {
                return t[e] = n(e).filter(e => e !== o), r
              },
              on: function(e, o) {
                return t[e] = n(e).concat([o]), r
              },
              clear: function() {
                t = {}
              }
            };
            return r
          }(),
          {
            mergeOptions: u,
            optionsAtMedia: d,
            optionsMediaQueries: f
          } = i,
          {
            on: p,
            off: h,
            emit: m
          } = l,
          v = P;
        let g, y, _, b, w = !1,
          S = u(L, N.globalOptions),
          E = u(S),
          T = [];

        function C(t) {
          const n = j(e, _, b, r, o, t, l);
          return t.loop && !n.slideLooper.canLoop() ? C(Object.assign({}, t, {
            loop: !1
          })) : n
        }

        function k(t, n) {
          w || (S = u(S, t), E = d(S), T = n || T, function() {
            const {
              container: t,
              slides: n
            } = E, r = c(t) ? e.querySelector(t) : t;
            _ = r || e.children[0];
            const o = c(n) ? _.querySelectorAll(n) : n;
            b = [].slice.call(o || _.children)
          }(), g = C(E), f([S, ...T.map(({
            options: e
          }) => e)]).forEach(e => a.add(e, "change", P)), E.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(D), g.eventHandler.init(D), g.resizeHandler.init(D), g.slidesHandler.init(D), g.options.loop && g.slideLooper.loop(), _.offsetParent && b.length && g.dragHandler.init(D), y = s.init(D, T)))
        }

        function P(e, t) {
          const n = M();
          O(), k(u({
            startIndex: n
          }, e), t), l.emit("reInit")
        }

        function O() {
          g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), s.destroy(), a.clear()
        }

        function R(e, t, n) {
          E.active && !w && (g.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : E.duration), g.scrollTo.index(e, n || 0))
        }

        function M() {
          return g.index.get()
        }
        const D = {
          canScrollNext: function() {
            return g.index.add(1).get() !== M()
          },
          canScrollPrev: function() {
            return g.index.add(-1).get() !== M()
          },
          containerNode: function() {
            return _
          },
          internalEngine: function() {
            return g
          },
          destroy: function() {
            w || (w = !0, a.clear(), O(), l.emit("destroy"), l.clear())
          },
          off: h,
          on: p,
          emit: m,
          plugins: function() {
            return y
          },
          previousScrollSnap: function() {
            return g.indexPrevious.get()
          },
          reInit: v,
          rootNode: function() {
            return e
          },
          scrollNext: function(e) {
            R(g.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            R(g.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return g.scrollProgress.get(g.offsetLocation.get())
          },
          scrollSnapList: function() {
            return g.scrollSnapList
          },
          scrollTo: R,
          selectedScrollSnap: M,
          slideNodes: function() {
            return b
          },
          slidesInView: function() {
            return g.slidesInView.get()
          },
          slidesNotInView: function() {
            return g.slidesInView.get(!1)
          }
        };
        return k(t, n), setTimeout(() => l.emit("init"), 0), D
      }

      function F(e = {}, t = []) {
        const n = (0, r.useRef)(e),
          o = (0, r.useRef)(t),
          [a, c] = (0, r.useState)(),
          [l, u] = (0, r.useState)(),
          d = (0, r.useCallback)(() => {
            a && a.reInit(n.current, o.current)
          }, [a]);
        return (0, r.useEffect)(() => {
          i(n.current, e) || (n.current = e, d())
        }, [e, d]), (0, r.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const n = s(e),
              r = s(t);
            return n.every((e, t) => i(e, r[t]))
          })(o.current, t) || (o.current = t, d())
        }, [t, d]), (0, r.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && l) {
            N.globalOptions = F.globalOptions;
            const e = N(l, n.current, o.current);
            return c(e), () => e.destroy()
          }
          c(void 0)
        }, [l, c]), [u, a]
      }
      N.globalOptions = void 0, F.globalOptions = void 0
    },
    2405(e, t, n) {
      n.d(t, {
        I: () => o
      });
      var r = n(6319);

      function o(e, t) {
        let {
          isCurrent: n,
          isDisabled: o,
          "aria-current": i,
          elementType: s = "a",
          ...a
        } = e, {
          linkProps: c
        } = (0, r.i)({
          isDisabled: o || n,
          elementType: s,
          ...a
        }, t), l = {};
        return /^h[1-6]$/.test(s) || (l = c), n && (l["aria-current"] = i || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
          itemProps: {
            "aria-disabled": o,
            ...l
          }
        }
      }
    },
    8611(e, t, n) {
      n.d(t, {
        v: () => l
      });
      var r = n(3455),
        o = n(7013),
        i = n(3442),
        s = n(3258),
        a = n(4637),
        c = n(1369);

      function l(e, t, n) {
        let l = (0, c.KZ)({
            ...e,
            value: t.isSelected
          }),
          {
            isInvalid: u,
            validationErrors: d,
            validationDetails: f
          } = l.displayValidation,
          {
            labelProps: p,
            inputProps: h,
            isSelected: m,
            isPressed: v,
            isDisabled: g,
            isReadOnly: y
          } = (0, r.e)({
            ...e,
            isInvalid: u
          }, t, n);
        (0, i.X)(e, l, n);
        let {
          isIndeterminate: _,
          isRequired: b,
          validationBehavior: w = "aria"
        } = e;
        (0, a.useEffect)(() => {
          n.current && (n.current.indeterminate = !!_)
        });
        let {
          pressProps: x
        } = (0, s.d)({
          isDisabled: g || y,
          onPress() {
            let {
              [c.Lf]: t
            } = e, {
              commitValidation: n
            } = t || l;
            n()
          }
        });
        return {
          labelProps: (0, o.v)(p, x, (0, a.useMemo)(() => ({
            onMouseDown: e => e.preventDefault()
          }), [])),
          inputProps: {
            ...h,
            checked: m,
            "aria-required": b && "aria" === w || void 0,
            required: b && "native" === w
          },
          isSelected: m,
          isPressed: v,
          isDisabled: g,
          isReadOnly: y,
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        }
      }
    },
    3442(e, t, n) {
      n.d(t, {
        X: () => c
      });
      var r = n(4961),
        o = n(9386),
        i = n(6187),
        s = n(8907),
        a = n(4637);

      function c(e, t, n) {
        let {
          validationBehavior: c,
          focus: u
        } = e;
        (0, s.N)(() => {
          if ("native" === c && n?.current && !n.current.disabled) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: l(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let d = (0, a.useRef)(!1),
          f = (0, i.J)(() => {
            d.current || t.resetValidation()
          }),
          p = (0, i.J)(e => {
            t.displayValidation.isInvalid || t.commitValidation();
            let r = n?.current?.form;
            !e.defaultPrevented && n && r && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let n = e.elements[t];
                if (!1 === n.validity?.valid) return n
              }
              return null
            }(r) === n.current && (u ? u() : n.current?.focus(), (0, o.Cl)("keyboard")), e.preventDefault()
          }),
          h = (0, i.J)(() => {
            t.commitValidation()
          });
        (0, a.useEffect)(() => {
          let e = n?.current;
          if (!e) return;
          let t = e.form,
            o = t?.reset;
          return t && (t.reset = () => {
            d.current = !window.event || "message" === window.event.type && (0, r.wt)(window.event) instanceof MessagePort, o?.call(t), d.current = !1
          }), e.addEventListener("invalid", p), e.addEventListener("change", h), t?.addEventListener("reset", f), () => {
            e.removeEventListener("invalid", p), e.removeEventListener("change", h), t?.removeEventListener("reset", f), t && (t.reset = o)
          }
        }, [n, c])
      }

      function l(e) {
        let t = e.validity;
        return {
          badInput: t.badInput,
          customError: t.customError,
          patternMismatch: t.patternMismatch,
          rangeOverflow: t.rangeOverflow,
          rangeUnderflow: t.rangeUnderflow,
          stepMismatch: t.stepMismatch,
          tooLong: t.tooLong,
          tooShort: t.tooShort,
          typeMismatch: t.typeMismatch,
          valueMissing: t.valueMissing,
          valid: t.valid
        }
      }
    },
    6319(e, t, n) {
      n.d(t, {
        i: () => c
      });
      var r = n(2069),
        o = n(2577),
        i = n(7013),
        s = n(8140),
        a = n(3258);

      function c(e, t) {
        let {
          elementType: n = "a",
          onPress: c,
          onPressStart: l,
          onPressEnd: u,
          onClick: d,
          isDisabled: f,
          ...p
        } = e, h = {};
        "a" !== n && (h = {
          role: "link",
          tabIndex: f ? void 0 : 0
        });
        let {
          focusableProps: m
        } = (0, s.Wc)(e, t), {
          pressProps: v,
          isPressed: g
        } = (0, a.d)({
          onPress: c,
          onPressStart: l,
          onPressEnd: u,
          onClick: d,
          isDisabled: f,
          ref: t
        }), y = (0, r.$)(p, {
          labelable: !0
        }), _ = (0, i.v)(m, v), b = (0, o.rd)(), w = (0, o._h)(e);
        return {
          isPressed: g,
          linkProps: (0, i.v)(y, w, {
            ..._,
            ...h,
            "aria-disabled": f || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              v.onClick?.(t), (0, o.PJ)(t, b, e.href, e.routerOptions)
            }
          })
        }
      }
    },
    9153(e, t, n) {
      n.d(t, {
        z: () => d
      });
      var r = n(2069),
        o = n(7013),
        i = n(1774),
        s = n(8140),
        a = n(8649),
        c = n(3442),
        l = n(3258),
        u = n(4637);

      function d(e, t, n) {
        let {
          value: d,
          children: f,
          "aria-label": p,
          "aria-labelledby": h,
          onPressStart: m,
          onPressEnd: v,
          onPressChange: g,
          onPress: y,
          onPressUp: _,
          onClick: b
        } = e;
        const w = e.isDisabled || t.isDisabled;
        let x = t.selectedValue === d,
          {
            pressProps: S,
            isPressed: E
          } = (0, l.d)({
            onPressStart: m,
            onPressEnd: v,
            onPressChange: g,
            onPress: y,
            onPressUp: _,
            onClick: b,
            isDisabled: w
          }),
          {
            pressProps: T,
            isPressed: C
          } = (0, l.d)({
            onPressStart: m,
            onPressEnd: v,
            onPressChange: g,
            onPressUp: _,
            onClick: b,
            isDisabled: w,
            onPress(e) {
              y?.(e), t.setSelectedValue(d), n.current?.focus()
            }
          }),
          {
            focusableProps: k
          } = (0, s.Wc)((0, o.v)(e, {
            onFocus: () => t.setLastFocusedValue(d)
          }), n),
          P = (0, o.v)(S, k),
          O = (0, r.$)(e, {
            labelable: !0
          }),
          R = -1;
        null != t.selectedValue ? t.selectedValue === d && (R = 0) : t.lastFocusedValue !== d && null != t.lastFocusedValue || (R = 0), w && (R = void 0);
        let {
          name: M,
          form: D,
          descriptionId: A,
          errorMessageId: j,
          validationBehavior: L
        } = i.V.get(t);
        return (0, a.F)(n, t.defaultSelectedValue, t.setSelectedValue), (0, c.X)({
          validationBehavior: L
        }, t, n), {
          labelProps: (0, o.v)(T, (0, u.useMemo)(() => ({
            onClick: e => e.preventDefault(),
            onMouseDown: e => e.preventDefault()
          }), [])),
          inputProps: (0, o.v)(O, {
            ...P,
            type: "radio",
            name: M,
            form: D,
            tabIndex: R,
            disabled: w,
            required: t.isRequired && "native" === L,
            checked: x,
            value: d,
            onChange: e => {
              e.stopPropagation(), t.setSelectedValue(d)
            },
            "aria-describedby": [e["aria-describedby"], t.isInvalid ? j : null, A].filter(Boolean).join(" ") || void 0
          }),
          isDisabled: w,
          isSelected: x,
          isPressed: E || C
        }
      }
    },
    8222(e, t, n) {
      n.d(t, {
        m: () => D
      });
      var r = n(2069),
        o = n(4961),
        i = n(7892);
      class s {
        constructor(e, t, n, r) {
          this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
            if (e.nodeType === Node.ELEMENT_NODE) {
              const t = e.shadowRoot;
              if (t) {
                const e = this._doc.createTreeWalker(t, this.whatToShow, {
                  acceptNode: this._acceptNode
                });
                return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
              }
              if ("function" == typeof this.filter) return this.filter(e);
              if (this.filter?.acceptNode) return this.filter.acceptNode(e);
              if (null === this.filter) return NodeFilter.FILTER_ACCEPT
            }
            return NodeFilter.FILTER_SKIP
          }, this._doc = e, this.root = t, this.filter = r ?? null, this.whatToShow = n ?? NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
          const o = t.shadowRoot;
          if (o) {
            const e = this._doc.createTreeWalker(o, this.whatToShow, {
              acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(e)
          }
        }
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, o.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
          const t = [];
          let n = e,
            r = e;
          for (this._currentNode = e; n && n !== this.root;)
            if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              const e = n,
                o = this._doc.createTreeWalker(e, this.whatToShow, {
                  acceptNode: this._acceptNode
                });
              t.push(o), o.currentNode = r, this._currentSetFor.add(o), n = r = e.host
            } else n = n.parentNode;
          const i = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          t.push(i), i.currentNode = r, this._currentSetFor.add(i), this._walkerStack = t
        }
        get doc() {
          return this._doc
        }
        firstChild() {
          let e = this.currentNode,
            t = this.nextNode();
          return (0, o.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
        }
        lastChild() {
          let e = this._walkerStack[0].lastChild();
          return e && (this.currentNode = e), e
        }
        nextNode() {
          const e = this._walkerStack[0].nextNode();
          if (e) {
            if (e.shadowRoot) {
              let t;
              if ("function" == typeof this.filter ? t = this.filter(e) : this.filter?.acceptNode && (t = this.filter.acceptNode(e)), t === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
              let n = this.nextNode();
              return n && (this.currentNode = n), n
            }
            return e && (this.currentNode = e), e
          }
          if (this._walkerStack.length > 1) {
            this._walkerStack.shift();
            let e = this.nextNode();
            return e && (this.currentNode = e), e
          }
          return null
        }
        previousNode() {
          const e = this._walkerStack[0];
          if (e.currentNode === e.root) {
            if (this._currentSetFor.has(e)) {
              if (this._currentSetFor.delete(e), this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let e = this.previousNode();
                return e && (this.currentNode = e), e
              }
              return null
            }
            return null
          }
          const t = e.previousNode();
          if (t) {
            if (t.shadowRoot) {
              let e;
              if ("function" == typeof this.filter ? e = this.filter(t) : this.filter?.acceptNode && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
              let n = this.lastChild();
              return n && (this.currentNode = n), n
            }
            return t && (this.currentNode = t), t
          }
          if (this._walkerStack.length > 1) {
            this._walkerStack.shift();
            let e = this.previousNode();
            return e && (this.currentNode = e), e
          }
          return null
        }
        nextSibling() {
          return null
        }
        previousSibling() {
          return null
        }
        parentNode() {
          return null
        }
      }
      var a = n(8562),
        c = n(1360),
        l = n(4637);

      function u(e, t) {
        return !!e && !!t && t.some(t => (0, o.sD)(t, e))
      }

      function d(e, t, n) {
        let r = t?.tabbable ? c.A : c.t,
          l = e?.nodeType === Node.ELEMENT_NODE ? e : null,
          d = (0, a.TW)(l),
          f = function(e, t, n, r) {
            return (0, i.Nf)() ? new s(e, t, n, r) : e.createTreeWalker(t, n, r)
          }(d, e || d, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if ((0, o.sD)(t?.from, e)) return NodeFilter.FILTER_REJECT;
              if (t?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from((0, a.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let n = (0, a.mD)(e);
                      return t instanceof n.RadioNodeList ? Array.from(t).filter(e => e instanceof n.HTMLInputElement) : t instanceof n.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === f.currentNode.tagName && "radio" === f.currentNode.type && f.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !r(e) || n && !u(e, n) || t?.accept && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return t?.from && (f.currentNode = t.from), f
      }
      class f {
        constructor() {
          this.fastMap = new Map, this.root = new p({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(t ?? null);
          if (!r) return;
          let o = new p({
            scopeRef: e
          });
          r.addChild(o), o.parent = r, this.fastMap.set(e, o), n && (o.nodeToRestore = n)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let n = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && u(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          let e = new f;
          for (let t of this.traverse()) e.addTreeNode(t.scopeRef, t.parent?.scopeRef ?? null, t.nodeToRestore);
          return e
        }
      }
      class p {
        constructor(e) {
          this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
        addChild(e) {
          this.children.add(e), e.parent = this
        }
        removeChild(e) {
          this.children.delete(e), e.parent = void 0
        }
      }
      new f;
      var h = n(7013),
        m = n(1774),
        v = n(3087);

      function g(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = (0, v.Bi)(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function y(e) {
        let {
          description: t,
          errorMessage: n,
          isInvalid: r,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: s
        } = function(e) {
          let {
            id: t,
            label: n,
            "aria-labelledby": r,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = (0, v.Bi)(t);
          let s = (0, v.Bi)(),
            a = {};
          return n && (r = r ? `${s} ${r}` : s, a = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: a,
            fieldProps: g({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), a = (0, v.X1)([Boolean(t), Boolean(n), r, o]), c = (0, v.X1)([Boolean(t), Boolean(n), r, o]);
        return s = (0, h.v)(s, {
          "aria-describedby": [a, c, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: i,
          fieldProps: s,
          descriptionProps: {
            id: a
          },
          errorMessageProps: {
            id: c
          }
        }
      }
      var _ = n(4142),
        b = n(7478);
      const w = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        x = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function S(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return w.has(t.script)
        }
        let t = e.split("-")[0];
        return x.has(t)
      }
      var E = n(6859);
      const T = Symbol.for("react-aria.i18n.locale");

      function C() {
        let e = "undefined" != typeof window && window[T] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: S(e) ? "rtl" : "ltr"
        }
      }
      let k = C(),
        P = new Set;

      function O() {
        k = C();
        for (let e of P) e(k)
      }
      const R = l.createContext(null);

      function M() {
        let e = function() {
          let e = (0, E.wR)(),
            [t, n] = (0, l.useState)(k);
          return (0, l.useEffect)(() => (0 === P.size && window.addEventListener("languagechange", O), P.add(n), () => {
            P.delete(n), 0 === P.size && window.removeEventListener("languagechange", O)
          }), []), e ? {
            locale: "undefined" != typeof window && window[T] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, l.useContext)(R) || e
      }

      function D(e, t) {
        let {
          name: n,
          form: i,
          isReadOnly: s,
          isRequired: c,
          isDisabled: u,
          orientation: f = "vertical",
          validationBehavior: p = "aria"
        } = e, {
          direction: g
        } = M(), {
          isInvalid: w,
          validationErrors: x,
          validationDetails: S
        } = t.displayValidation, {
          labelProps: E,
          fieldProps: T,
          descriptionProps: C,
          errorMessageProps: k
        } = y({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || x
        }), P = (0, r.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: O
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: i
          } = e, s = (0, l.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: c,
            removeAllGlobalListeners: u
          } = (0, b.A)(), d = (0, l.useCallback)(e => {
            (0, o.sD)(e.currentTarget, (0, o.wt)(e)) && s.current.isFocusWithin && !(0, o.sD)(e.currentTarget, e.relatedTarget) && (s.current.isFocusWithin = !1, u(), n && n(e), i && i(!1))
          }, [n, i, s, u]), f = (0, _.yB)(d), p = (0, l.useCallback)(e => {
            if (!(0, o.sD)(e.currentTarget, (0, o.wt)(e))) return;
            let t = (0, o.wt)(e);
            const n = (0, a.TW)(t),
              l = (0, o.bq)(n);
            if (!s.current.isFocusWithin && l === t) {
              r && r(e), i && i(!0), s.current.isFocusWithin = !0, f(e);
              let t = e.currentTarget;
              c(n, "focus", e => {
                let r = (0, o.wt)(e);
                if (s.current.isFocusWithin && !(0, o.sD)(t, r)) {
                  let e = new n.defaultView.FocusEvent("blur", {
                    relatedTarget: r
                  });
                  (0, _.o1)(e, t);
                  let o = (0, _.eg)(e);
                  d(o)
                }
              }, {
                capture: !0
              })
            }
          }, [r, i, f, c, d]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: p,
              onBlur: d
            }
          }
        }({
          onBlurWithin(n) {
            e.onBlur?.(n), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), R = (0, v.Bi)(n);
        return m.V.set(t, {
          name: R,
          form: i,
          descriptionId: C.id,
          errorMessageId: k.id,
          validationBehavior: p
        }), {
          radioGroupProps: (0, h.v)(P, {
            role: "radiogroup",
            onKeyDown: e => {
              let n;
              switch (e.key) {
                case "ArrowRight":
                  n = "rtl" === g && "vertical" !== f ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  n = "rtl" === g && "vertical" !== f ? "next" : "prev";
                  break;
                case "ArrowDown":
                  n = "next";
                  break;
                case "ArrowUp":
                  n = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let r, i = d(e.currentTarget, {
                from: (0, o.wt)(e),
                accept: e => e instanceof(0, a.mD)(e).HTMLInputElement && "radio" === e.type
              });
              "next" === n ? (r = i.nextNode(), r || (i.currentNode = e.currentTarget, r = i.firstChild())) : (r = i.previousNode(), r || (i.currentNode = e.currentTarget, r = i.lastChild())), r && (r.focus(), t.setSelectedValue(r.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": s || void 0,
            "aria-required": c || void 0,
            "aria-disabled": u || void 0,
            "aria-orientation": f,
            ...T,
            ...O
          }),
          labelProps: E,
          descriptionProps: C,
          errorMessageProps: k,
          isInvalid: w,
          validationErrors: x,
          validationDetails: S
        }
      }
    },
    1774(e, t, n) {
      n.d(t, {
        V: () => r
      });
      const r = new WeakMap
    },
    8687(e, t, n) {
      n.d(t, {
        K: () => o
      });
      var r = n(3455);

      function o(e, t, n) {
        let {
          labelProps: o,
          inputProps: i,
          isSelected: s,
          isPressed: a,
          isDisabled: c,
          isReadOnly: l
        } = (0, r.e)(e, t, n);
        return {
          labelProps: o,
          inputProps: {
            ...i,
            role: "switch",
            checked: s
          },
          isSelected: s,
          isPressed: a,
          isDisabled: c,
          isReadOnly: l
        }
      }
    },
    3455(e, t, n) {
      n.d(t, {
        e: () => l
      });
      var r = n(2069),
        o = n(4961),
        i = n(7013),
        s = n(8140),
        a = n(8649),
        c = n(3258);

      function l(e, t, n) {
        let {
          isDisabled: l = !1,
          isReadOnly: u = !1,
          value: d,
          name: f,
          form: p,
          children: h,
          "aria-label": m,
          "aria-labelledby": v,
          validationState: g = "valid",
          isInvalid: y,
          onPressStart: _,
          onPressEnd: b,
          onPressChange: w,
          onPress: x,
          onPressUp: S,
          onClick: E
        } = e, {
          pressProps: T,
          isPressed: C
        } = (0, c.d)({
          onPressStart: _,
          onPressEnd: b,
          onPressChange: w,
          onPress: x,
          onPressUp: S,
          onClick: E,
          isDisabled: l
        }), {
          pressProps: k,
          isPressed: P
        } = (0, c.d)({
          onPressStart: _,
          onPressEnd: b,
          onPressChange: w,
          onPressUp: S,
          onClick: E,
          onPress(e) {
            x?.(e), t.toggle(), n.current?.focus()
          },
          isDisabled: l || u
        }), {
          focusableProps: O
        } = (0, s.Wc)(e, n), R = (0, i.v)(T, O), M = (0, r.$)(e, {
          labelable: !0
        });
        return (0, a.F)(n, t.defaultSelected, t.setSelected), {
          labelProps: (0, i.v)(k, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, i.v)(M, {
            "aria-invalid": y || "invalid" === g || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": u || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected((0, o.wt)(e).checked)
            },
            disabled: l,
            ...null == d ? {} : {
              value: d
            },
            name: f,
            form: p,
            type: "checkbox",
            ...R
          }),
          isSelected: t.isSelected,
          isPressed: C || P,
          isDisabled: l,
          isReadOnly: u,
          isInvalid: y || "invalid" === g
        }
      }
    },
    8649(e, t, n) {
      n.d(t, {
        F: () => i
      });
      var r = n(6187),
        o = n(4637);

      function i(e, t, n) {
        let i = (0, r.J)(e => {
          n && !e.defaultPrevented && n(t)
        });
        (0, o.useEffect)(() => {
          let t = e?.current?.form;
          return t?.addEventListener("reset", i), () => {
            t?.removeEventListener("reset", i)
          }
        }, [e])
      }
    },
    1369(e, t, n) {
      n.d(t, {
        KZ: () => l,
        Lf: () => c
      });
      var r = n(4637);
      const o = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        i = {
          ...o,
          customError: !0,
          valid: !1
        },
        s = {
          isInvalid: !1,
          validationDetails: o,
          validationErrors: []
        },
        a = (0, r.createContext)({}),
        c = "__reactAriaFormValidationState";

      function l(e) {
        if (e[c]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[c];
          return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: n,
            name: o,
            value: c,
            builtinValidation: l,
            validate: p,
            validationBehavior: h = "aria"
          } = e;
          n && (t ||= "invalid" === n);
          let m = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: i
            } : null,
            v = (0, r.useMemo)(() => {
              if (!p || null == c) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return u(n)
                }
                return []
              }(p, c);
              return d(e)
            }, [p, c]);
          l?.validationDetails.valid && (l = void 0);
          let g = (0, r.useContext)(a),
            y = (0, r.useMemo)(() => o ? Array.isArray(o) ? o.flatMap(e => u(g[e])) : u(g[o]) : [], [g, o]),
            [_, b] = (0, r.useState)(g),
            [w, x] = (0, r.useState)(!1);
          g !== _ && (b(g), x(!1));
          let S = (0, r.useMemo)(() => d(w ? [] : y), [w, y]),
            E = (0, r.useRef)(s),
            [T, C] = (0, r.useState)(s),
            k = (0, r.useRef)(s),
            [P, O] = (0, r.useState)(!1);
          return (0, r.useEffect)(() => {
            if (!P) return;
            O(!1);
            let e = v || l || E.current;
            f(e, k.current) || (k.current = e, C(e))
          }), {
            realtimeValidation: m || S || v || l || s,
            displayValidation: "native" === h ? m || S || T : m || S || v || l || T,
            updateValidation(e) {
              "aria" !== h || f(T, e) ? E.current = e : C(e)
            },
            resetValidation() {
              let e = s;
              f(e, k.current) || (k.current = e, C(e)), "native" === h && O(!1), x(!0)
            },
            commitValidation() {
              "native" === h && O(!0), x(!0)
            }
          }
        }(e)
      }

      function u(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function d(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: i
        } : null
      }

      function f(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n)
      }
    },
    7097(e, t, n) {
      n.d(t, {
        Z: () => c
      });
      var r = n(1369),
        o = n(2083),
        i = n(4637);
      let s = Math.round(1e10 * Math.random()),
        a = 0;

      function c(e) {
        let t = (0, i.useMemo)(() => e.name || `radio-group-${s}-${++a}`, [e.name]),
          [n, c] = (0, o.P)(e.value, e.defaultValue ?? null, e.onChange),
          [l] = (0, i.useState)(n),
          [u, d] = (0, i.useState)(null),
          f = (0, r.KZ)({
            ...e,
            value: n
          }),
          p = f.displayValidation.isInvalid;
        return {
          ...f,
          name: t,
          selectedValue: n,
          defaultSelectedValue: void 0 !== e.value ? l : e.defaultValue ?? null,
          setSelectedValue: t => {
            e.isReadOnly || e.isDisabled || (c(t), f.commitValidation())
          },
          lastFocusedValue: u,
          setLastFocusedValue: d,
          isDisabled: e.isDisabled || !1,
          isReadOnly: e.isReadOnly || !1,
          isRequired: e.isRequired || !1,
          validationState: e.validationState || (p ? "invalid" : null),
          isInvalid: p
        }
      }
    },
    6646(e, t, n) {
      n.d(t, {
        H: () => i
      });
      var r = n(2083),
        o = n(4637);

      function i(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, i] = (0, r.P)(e.isSelected, e.defaultSelected || !1, e.onChange), [s] = (0, o.useState)(n);
        return {
          isSelected: n,
          defaultSelected: e.defaultSelected ?? s,
          setSelected: function(e) {
            t || i(e)
          },
          toggle: function() {
            t || i(!n)
          }
        }
      }
    },
    2083(e, t, n) {
      n.d(t, {
        P: () => i
      });
      var r = n(4637);
      const o = "undefined" != typeof document ? r.useInsertionEffect ?? r.useLayoutEffect : () => {};

      function i(e, t, n) {
        let [i, s] = (0, r.useState)(e || t), a = (0, r.useRef)(i), c = (0, r.useRef)(void 0 !== e), l = void 0 !== e;
        (0, r.useEffect)(() => {
          c.current, c.current = l
        }, [l]);
        let u = l ? e : i;
        o(() => {
          a.current = u
        });
        let [, d] = (0, r.useReducer)(() => ({}), {}), f = (0, r.useCallback)((e, ...t) => {
          let r = "function" == typeof e ? e(a.current) : e;
          Object.is(a.current, r) || (a.current = r, s(r), d(), n?.(r, ...t))
        }, [n]);
        return [u, f]
      }
    }
  }
]);