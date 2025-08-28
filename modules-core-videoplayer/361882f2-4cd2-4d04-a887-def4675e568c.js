try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "361882f2-4cd2-4d04-a887-def4675e568c", t._sentryDebugIdIdentifier = "sentry-dbid-361882f2-4cd2-4d04-a887-def4675e568c")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [2698], {
    32698: (t, e, n) => {
      var i;
      ! function(s, r, o, a) {
        "use strict";
        var u, h = ["", "webkit", "Moz", "MS", "ms", "o"],
          c = r.createElement("div"),
          l = Math.round,
          p = Math.abs,
          f = Date.now;

        function d(t, e, n) {
          return setTimeout(b(t, n), e)
        }

        function v(t, e, n) {
          return !!Array.isArray(t) && (m(t, n[e], n), !0)
        }

        function m(t, e, n) {
          var i;
          if (t)
            if (t.forEach) t.forEach(e, n);
            else if (t.length !== a)
            for (i = 0; i < t.length;) e.call(n, t[i], i, t), i++;
          else
            for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
        }

        function g(t, e, n) {
          var i = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
          return function() {
            var e = new Error("get-stack-trace"),
              n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              r = s.console && (s.console.warn || s.console.log);
            return r && r.call(s.console, i, n), t.apply(this, arguments)
          }
        }
        u = "function" != typeof Object.assign ? function(t) {
          if (t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
          for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            if (i !== a && null !== i)
              for (var s in i) i.hasOwnProperty(s) && (e[s] = i[s])
          }
          return e
        } : Object.assign;
        var y = g((function(t, e, n) {
            for (var i = Object.keys(e), s = 0; s < i.length;)(!n || n && t[i[s]] === a) && (t[i[s]] = e[i[s]]), s++;
            return t
          }), "extend", "Use `assign`."),
          T = g((function(t, e) {
            return y(t, e, !0)
          }), "merge", "Use `assign`.");

        function E(t, e, n) {
          var i, s = e.prototype;
          (i = t.prototype = Object.create(s)).constructor = t, i._super = s, n && u(i, n)
        }

        function b(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }

        function _(t, e) {
          return "function" == typeof t ? t.apply(e && e[0] || a, e) : t
        }

        function I(t, e) {
          return t === a ? e : t
        }

        function w(t, e, n) {
          m(S(e), (function(e) {
            t.addEventListener(e, n, !1)
          }))
        }

        function A(t, e, n) {
          m(S(e), (function(e) {
            t.removeEventListener(e, n, !1)
          }))
        }

        function C(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
          }
          return !1
        }

        function D(t, e) {
          return t.indexOf(e) > -1
        }

        function S(t) {
          return t.trim().split(/\s+/g)
        }

        function P(t, e, n) {
          if (t.indexOf && !n) return t.indexOf(e);
          for (var i = 0; i < t.length;) {
            if (n && t[i][n] == e || !n && t[i] === e) return i;
            i++
          }
          return -1
        }

        function M(t) {
          return Array.prototype.slice.call(t, 0)
        }

        function x(t, e, n) {
          for (var i = [], s = [], r = 0; r < t.length;) {
            var o = e ? t[r][e] : t[r];
            P(s, o) < 0 && i.push(t[r]), s[r] = o, r++
          }
          return n && (i = e ? i.sort((function(t, n) {
            return t[e] > n[e]
          })) : i.sort()), i
        }

        function R(t, e) {
          for (var n, i, s = e[0].toUpperCase() + e.slice(1), r = 0; r < h.length;) {
            if ((i = (n = h[r]) ? n + s : e) in t) return i;
            r++
          }
          return a
        }
        var O = 1;

        function z(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || s
        }
        var N = "ontouchstart" in s,
          Y = R(s, "PointerEvent") !== a,
          k = N && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          X = "touch",
          F = "mouse",
          W = ["x", "y"],
          q = ["clientX", "clientY"];

        function L(t, e) {
          var n = this;
          this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            _(t.options.enable, [t]) && n.handler(e)
          }, this.init()
        }

        function H(t, e, n) {
          var i = n.pointers.length,
            s = n.changedPointers.length,
            r = 1 & e && i - s == 0,
            o = 12 & e && i - s == 0;
          n.isFirst = !!r, n.isFinal = !!o, r && (t.session = {}), n.eventType = e,
            function(t, e) {
              var n = t.session,
                i = e.pointers,
                s = i.length;
              n.firstInput || (n.firstInput = U(e)), s > 1 && !n.firstMultiple ? n.firstMultiple = U(e) : 1 === s && (n.firstMultiple = !1);
              var r = n.firstInput,
                o = n.firstMultiple,
                u = o ? o.center : r.center,
                h = e.center = V(i);
              e.timeStamp = f(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = B(u, h), e.distance = Z(u, h),
                function(t, e) {
                  var n = e.center,
                    i = t.offsetDelta || {},
                    s = t.prevDelta || {},
                    r = t.prevInput || {};
                  1 !== e.eventType && 4 !== r.eventType || (s = t.prevDelta = {
                    x: r.deltaX || 0,
                    y: r.deltaY || 0
                  }, i = t.offsetDelta = {
                    x: n.x,
                    y: n.y
                  }), e.deltaX = s.x + (n.x - i.x), e.deltaY = s.y + (n.y - i.y)
                }(n, e), e.offsetDirection = G(e.deltaX, e.deltaY);
              var c, l, d = j(e.deltaTime, e.deltaX, e.deltaY);
              e.overallVelocityX = d.x, e.overallVelocityY = d.y, e.overallVelocity = p(d.x) > p(d.y) ? d.x : d.y, e.scale = o ? (c = o.pointers, Z((l = i)[0], l[1], q) / Z(c[0], c[1], q)) : 1, e.rotation = o ? function(t, e) {
                  return B(e[1], e[0], q) + B(t[1], t[0], q)
                }(o.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
                function(t, e) {
                  var n, i, s, r, o = t.lastInterval || e,
                    u = e.timeStamp - o.timeStamp;
                  if (8 != e.eventType && (u > 25 || o.velocity === a)) {
                    var h = e.deltaX - o.deltaX,
                      c = e.deltaY - o.deltaY,
                      l = j(u, h, c);
                    i = l.x, s = l.y, n = p(l.x) > p(l.y) ? l.x : l.y, r = G(h, c), t.lastInterval = e
                  } else n = o.velocity, i = o.velocityX, s = o.velocityY, r = o.direction;
                  e.velocity = n, e.velocityX = i, e.velocityY = s, e.direction = r
                }(n, e);
              var v = t.element;
              C(e.srcEvent.target, v) && (v = e.srcEvent.target), e.target = v
            }(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
        }

        function U(t) {
          for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
            clientX: l(t.pointers[n].clientX),
            clientY: l(t.pointers[n].clientY)
          }, n++;
          return {
            timeStamp: f(),
            pointers: e,
            center: V(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
          }
        }

        function V(t) {
          var e = t.length;
          if (1 === e) return {
            x: l(t[0].clientX),
            y: l(t[0].clientY)
          };
          for (var n = 0, i = 0, s = 0; s < e;) n += t[s].clientX, i += t[s].clientY, s++;
          return {
            x: l(n / e),
            y: l(i / e)
          }
        }

        function j(t, e, n) {
          return {
            x: e / t || 0,
            y: n / t || 0
          }
        }

        function G(t, e) {
          return t === e ? 1 : p(t) >= p(e) ? t < 0 ? 2 : 4 : e < 0 ? 8 : 16
        }

        function Z(t, e, n) {
          n || (n = W);
          var i = e[n[0]] - t[n[0]],
            s = e[n[1]] - t[n[1]];
          return Math.sqrt(i * i + s * s)
        }

        function B(t, e, n) {
          n || (n = W);
          var i = e[n[0]] - t[n[0]],
            s = e[n[1]] - t[n[1]];
          return 180 * Math.atan2(s, i) / Math.PI
        }
        L.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && w(this.element, this.evEl, this.domHandler), this.evTarget && w(this.target, this.evTarget, this.domHandler), this.evWin && w(z(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && A(this.element, this.evEl, this.domHandler), this.evTarget && A(this.target, this.evTarget, this.domHandler), this.evWin && A(z(this.element), this.evWin, this.domHandler)
          }
        };
        var $ = {
          mousedown: 1,
          mousemove: 2,
          mouseup: 4
        };

        function J() {
          this.evEl = "mousedown", this.evWin = "mousemove mouseup", this.pressed = !1, L.apply(this, arguments)
        }
        E(J, L, {
          handler: function(t) {
            var e = $[t.type];
            1 & e && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = 4), this.pressed && (4 & e && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: F,
              srcEvent: t
            }))
          }
        });
        var K = {
            pointerdown: 1,
            pointermove: 2,
            pointerup: 4,
            pointercancel: 8,
            pointerout: 8
          },
          Q = {
            2: X,
            3: "pen",
            4: F,
            5: "kinect"
          },
          tt = "pointerdown",
          et = "pointermove pointerup pointercancel";

        function nt() {
          this.evEl = tt, this.evWin = et, L.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        s.MSPointerEvent && !s.PointerEvent && (tt = "MSPointerDown", et = "MSPointerMove MSPointerUp MSPointerCancel"), E(nt, L, {
          handler: function(t) {
            var e = this.store,
              n = !1,
              i = t.type.toLowerCase().replace("ms", ""),
              s = K[i],
              r = Q[t.pointerType] || t.pointerType,
              o = r == X,
              a = P(e, t.pointerId, "pointerId");
            1 & s && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : 12 & s && (n = !0), a < 0 || (e[a] = t, this.callback(this.manager, s, {
              pointers: e,
              changedPointers: [t],
              pointerType: r,
              srcEvent: t
            }), n && e.splice(a, 1))
          }
        });
        var it = {
          touchstart: 1,
          touchmove: 2,
          touchend: 4,
          touchcancel: 8
        };

        function st() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, L.apply(this, arguments)
        }

        function rt(t, e) {
          var n = M(t.touches),
            i = M(t.changedTouches);
          return 12 & e && (n = x(n.concat(i), "identifier", !0)), [n, i]
        }
        E(st, L, {
          handler: function(t) {
            var e = it[t.type];
            if (1 === e && (this.started = !0), this.started) {
              var n = rt.call(this, t, e);
              12 & e && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: X,
                srcEvent: t
              })
            }
          }
        });
        var ot = {
          touchstart: 1,
          touchmove: 2,
          touchend: 4,
          touchcancel: 8
        };

        function at() {
          this.evTarget = "touchstart touchmove touchend touchcancel", this.targetIds = {}, L.apply(this, arguments)
        }

        function ut(t, e) {
          var n = M(t.touches),
            i = this.targetIds;
          if (3 & e && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
          var s, r, o = M(t.changedTouches),
            a = [],
            u = this.target;
          if (r = n.filter((function(t) {
              return C(t.target, u)
            })), 1 === e)
            for (s = 0; s < r.length;) i[r[s].identifier] = !0, s++;
          for (s = 0; s < o.length;) i[o[s].identifier] && a.push(o[s]), 12 & e && delete i[o[s].identifier], s++;
          return a.length ? [x(r.concat(a), "identifier", !0), a] : void 0
        }

        function ht() {
          L.apply(this, arguments);
          var t = b(this.handler, this);
          this.touch = new at(this.manager, t), this.mouse = new J(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function ct(t, e) {
          1 & t ? (this.primaryTouch = e.changedPointers[0].identifier, lt.call(this, e)) : 12 & t && lt.call(this, e)
        }

        function lt(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var n = {
              x: e.clientX,
              y: e.clientY
            };
            this.lastTouches.push(n);
            var i = this.lastTouches;
            setTimeout((function() {
              var t = i.indexOf(n);
              t > -1 && i.splice(t, 1)
            }), 2500)
          }
        }

        function pt(t) {
          for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var s = this.lastTouches[i],
              r = Math.abs(e - s.x),
              o = Math.abs(n - s.y);
            if (r <= 25 && o <= 25) return !0
          }
          return !1
        }
        E(at, L, {
          handler: function(t) {
            var e = ot[t.type],
              n = ut.call(this, t, e);
            n && this.callback(this.manager, e, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: X,
              srcEvent: t
            })
          }
        }), E(ht, L, {
          handler: function(t, e, n) {
            var i = n.pointerType == X,
              s = n.pointerType == F;
            if (!(s && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
              if (i) ct.call(this, e, n);
              else if (s && pt.call(this, n)) return;
              this.callback(t, e, n)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var ft = R(c.style, "touchAction"),
          dt = ft !== a,
          vt = "compute",
          mt = "auto",
          gt = "manipulation",
          yt = "none",
          Tt = "pan-x",
          Et = "pan-y",
          bt = function() {
            if (!dt) return !1;
            var t = {},
              e = s.CSS && s.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(n) {
              t[n] = !e || s.CSS.supports("touch-action", n)
            })), t
          }();

        function _t(t, e) {
          this.manager = t, this.set(e)
        }
        _t.prototype = {
          set: function(t) {
            t == vt && (t = this.compute()), dt && this.manager.element.style && bt[t] && (this.manager.element.style[ft] = t), this.actions = t.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var t = [];
            return m(this.manager.recognizers, (function(e) {
                _(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              })),
              function(t) {
                if (D(t, yt)) return yt;
                var e = D(t, Tt),
                  n = D(t, Et);
                return e && n ? yt : e || n ? e ? Tt : Et : D(t, gt) ? gt : mt
              }(t.join(" "))
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              n = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var i = this.actions,
                s = D(i, yt) && !bt[yt],
                r = D(i, Et) && !bt[Et],
                o = D(i, Tt) && !bt[Tt];
              if (s) {
                var a = 1 === t.pointers.length,
                  u = t.distance < 2,
                  h = t.deltaTime < 250;
                if (a && u && h) return
              }
              if (!o || !r) return s || r && 6 & n || o && 24 & n ? this.preventSrc(e) : void 0
            }
          },
          preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
          }
        };
        var It = 32;

        function wt(t) {
          this.options = u({}, this.defaults, t || {}), this.id = O++, this.manager = null, this.options.enable = I(this.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = []
        }

        function At(t) {
          return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
        }

        function Ct(t) {
          return 16 == t ? "down" : 8 == t ? "up" : 2 == t ? "left" : 4 == t ? "right" : ""
        }

        function Dt(t, e) {
          var n = e.manager;
          return n ? n.get(t) : t
        }

        function St() {
          wt.apply(this, arguments)
        }

        function Pt() {
          St.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Mt() {
          St.apply(this, arguments)
        }

        function xt() {
          wt.apply(this, arguments), this._timer = null, this._input = null
        }

        function Rt() {
          St.apply(this, arguments)
        }

        function Ot() {
          St.apply(this, arguments)
        }

        function zt() {
          wt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Nt(t, e) {
          return (e = e || {}).recognizers = I(e.recognizers, Nt.defaults.preset), new Yt(t, e)
        }

        function Yt(t, e) {
          this.options = u({}, Nt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (Y ? nt : k ? at : N ? ht : J))(this, H), this.touchAction = new _t(this, this.options.touchAction), kt(this, !0), m(this.options.recognizers, (function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
          }), this)
        }

        function kt(t, e) {
          var n, i = t.element;
          i.style && (m(t.options.cssProps, (function(s, r) {
            n = R(i.style, r), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = s) : i.style[n] = t.oldCssProps[n] || ""
          })), e || (t.oldCssProps = {}))
        }
        wt.prototype = {
          defaults: {},
          set: function(t) {
            return u(this.options, t), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(t) {
            if (v(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = Dt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
          },
          dropRecognizeWith: function(t) {
            return v(t, "dropRecognizeWith", this) || (t = Dt(t, this), delete this.simultaneous[t.id]), this
          },
          requireFailure: function(t) {
            if (v(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === P(e, t = Dt(t, this)) && (e.push(t), t.requireFailure(this)), this
          },
          dropRequireFailure: function(t) {
            if (v(t, "dropRequireFailure", this)) return this;
            t = Dt(t, this);
            var e = P(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
          },
          hasRequireFailures: function() {
            return this.requireFail.length > 0
          },
          canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
          },
          emit: function(t) {
            var e = this,
              n = this.state;

            function i(n) {
              e.manager.emit(n, t)
            }
            n < 8 && i(e.options.event + At(n)), i(e.options.event), t.additionalEvent && i(t.additionalEvent), n >= 8 && i(e.options.event + At(n))
          },
          tryEmit: function(t) {
            if (this.canEmit()) return this.emit(t);
            this.state = It
          },
          canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
              if (!(33 & this.requireFail[t].state)) return !1;
              t++
            }
            return !0
          },
          recognize: function(t) {
            var e = u({}, t);
            if (!_(this.options.enable, [this, e])) return this.reset(), void(this.state = It);
            56 & this.state && (this.state = 1), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }, E(St, wt, {
          defaults: {
            pointers: 1
          },
          attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
          },
          process: function(t) {
            var e = this.state,
              n = t.eventType,
              i = 6 & e,
              s = this.attrTest(t);
            return i && (8 & n || !s) ? 16 | e : i || s ? 4 & n ? 8 | e : 2 & e ? 4 | e : 2 : It
          }
        }), E(Pt, St, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: 30
          },
          getTouchAction: function() {
            var t = this.options.direction,
              e = [];
            return 6 & t && e.push(Et), 24 & t && e.push(Tt), e
          },
          directionTest: function(t) {
            var e = this.options,
              n = !0,
              i = t.distance,
              s = t.direction,
              r = t.deltaX,
              o = t.deltaY;
            return s & e.direction || (6 & e.direction ? (s = 0 === r ? 1 : r < 0 ? 2 : 4, n = r != this.pX, i = Math.abs(t.deltaX)) : (s = 0 === o ? 1 : o < 0 ? 8 : 16, n = o != this.pY, i = Math.abs(t.deltaY))), t.direction = s, n && i > e.threshold && s & e.direction
          },
          attrTest: function(t) {
            return St.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
          },
          emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Ct(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
          }
        }), E(Mt, St, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [yt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
          },
          emit: function(t) {
            if (1 !== t.scale) {
              var e = t.scale < 1 ? "in" : "out";
              t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
          }
        }), E(xt, wt, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          },
          getTouchAction: function() {
            return [mt]
          },
          process: function(t) {
            var e = this.options,
              n = t.pointers.length === e.pointers,
              i = t.distance < e.threshold,
              s = t.deltaTime > e.time;
            if (this._input = t, !i || !n || 12 & t.eventType && !s) this.reset();
            else if (1 & t.eventType) this.reset(), this._timer = d((function() {
              this.state = 8, this.tryEmit()
            }), e.time, this);
            else if (4 & t.eventType) return 8;
            return It
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(t) {
            8 === this.state && (t && 4 & t.eventType ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)))
          }
        }), E(Rt, St, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [yt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
          }
        }), E(Ot, St, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: 30,
            pointers: 1
          },
          getTouchAction: function() {
            return Pt.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
            var e, n = this.options.direction;
            return 30 & n ? e = t.overallVelocity : 6 & n ? e = t.overallVelocityX : 24 & n && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && p(e) > this.options.velocity && 4 & t.eventType
          },
          emit: function(t) {
            var e = Ct(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
          }
        }), E(zt, wt, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
          },
          getTouchAction: function() {
            return [gt]
          },
          process: function(t) {
            var e = this.options,
              n = t.pointers.length === e.pointers,
              i = t.distance < e.threshold,
              s = t.deltaTime < e.time;
            if (this.reset(), 1 & t.eventType && 0 === this.count) return this.failTimeout();
            if (i && s && n) {
              if (4 != t.eventType) return this.failTimeout();
              var r = !this.pTime || t.timeStamp - this.pTime < e.interval,
                o = !this.pCenter || Z(this.pCenter, t.center) < e.posThreshold;
              if (this.pTime = t.timeStamp, this.pCenter = t.center, o && r ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = d((function() {
                this.state = 8, this.tryEmit()
              }), e.interval, this), 2) : 8
            }
            return It
          },
          failTimeout: function() {
            return this._timer = d((function() {
              this.state = It
            }), this.options.interval, this), It
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), Nt.VERSION = "2.0.7", Nt.defaults = {
          domEvents: !1,
          touchAction: vt,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [Rt, {
              enable: !1
            }],
            [Mt, {
                enable: !1
              },
              ["rotate"]
            ],
            [Ot, {
              direction: 6
            }],
            [Pt, {
                direction: 6
              },
              ["swipe"]
            ],
            [zt],
            [zt, {
                event: "doubletap",
                taps: 2
              },
              ["tap"]
            ],
            [xt]
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        }, Yt.prototype = {
          set: function(t) {
            return u(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
          },
          stop: function(t) {
            this.session.stopped = t ? 2 : 1
          },
          recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
              var n;
              this.touchAction.preventDefaults(t);
              var i = this.recognizers,
                s = e.curRecognizer;
              (!s || s && 8 & s.state) && (s = e.curRecognizer = null);
              for (var r = 0; r < i.length;) n = i[r], 2 === e.stopped || s && n != s && !n.canRecognizeWith(s) ? n.reset() : n.recognize(t), !s && 14 & n.state && (s = e.curRecognizer = n), r++
            }
          },
          get: function(t) {
            if (t instanceof wt) return t;
            for (var e = this.recognizers, n = 0; n < e.length; n++)
              if (e[n].options.event == t) return e[n];
            return null
          },
          add: function(t) {
            if (v(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
          },
          remove: function(t) {
            if (v(t, "remove", this)) return this;
            if (t = this.get(t)) {
              var e = this.recognizers,
                n = P(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
            }
            return this
          },
          on: function(t, e) {
            if (t !== a && e !== a) {
              var n = this.handlers;
              return m(S(t), (function(t) {
                n[t] = n[t] || [], n[t].push(e)
              })), this
            }
          },
          off: function(t, e) {
            if (t !== a) {
              var n = this.handlers;
              return m(S(t), (function(t) {
                e ? n[t] && n[t].splice(P(n[t], e), 1) : delete n[t]
              })), this
            }
          },
          emit: function(t, e) {
            this.options.domEvents && function(t, e) {
              var n = r.createEvent("Event");
              n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
            }(t, e);
            var n = this.handlers[t] && this.handlers[t].slice();
            if (n && n.length) {
              e.type = t, e.preventDefault = function() {
                e.srcEvent.preventDefault()
              };
              for (var i = 0; i < n.length;) n[i](e), i++
            }
          },
          destroy: function() {
            this.element && kt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, u(Nt, {
          INPUT_START: 1,
          INPUT_MOVE: 2,
          INPUT_END: 4,
          INPUT_CANCEL: 8,
          STATE_POSSIBLE: 1,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: It,
          DIRECTION_NONE: 1,
          DIRECTION_LEFT: 2,
          DIRECTION_RIGHT: 4,
          DIRECTION_UP: 8,
          DIRECTION_DOWN: 16,
          DIRECTION_HORIZONTAL: 6,
          DIRECTION_VERTICAL: 24,
          DIRECTION_ALL: 30,
          Manager: Yt,
          Input: L,
          TouchAction: _t,
          TouchInput: at,
          MouseInput: J,
          PointerEventInput: nt,
          TouchMouseInput: ht,
          SingleTouchInput: st,
          Recognizer: wt,
          AttrRecognizer: St,
          Tap: zt,
          Pan: Pt,
          Swipe: Ot,
          Pinch: Mt,
          Rotate: Rt,
          Press: xt,
          on: w,
          off: A,
          each: m,
          merge: T,
          extend: y,
          assign: u,
          inherit: E,
          bindFn: b,
          prefixed: R
        }), (void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer = Nt, (i = function() {
          return Nt
        }.call(e, n, e, t)) === a || (t.exports = i)
      }(window, document)
    }
  }
]);