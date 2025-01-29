! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "200c115f-bd98-4c4e-a45c-11fba8e14744", t._sentryDebugIdIdentifier = "sentry-dbid-200c115f-bd98-4c4e-a45c-11fba8e14744")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [712], {
    7712: (t, e, n) => {
      var i;
      ! function(r, s, o, a) {
        "use strict";
        var u, h = ["", "webkit", "Moz", "MS", "ms", "o"],
          c = s.createElement("div"),
          l = "function",
          p = Math.round,
          f = Math.abs,
          d = Date.now;

        function v(t, e, n) {
          return setTimeout(_(t, n), e)
        }

        function m(t, e, n) {
          return !!Array.isArray(t) && (g(t, n[e], n), !0)
        }

        function g(t, e, n) {
          var i;
          if (t)
            if (t.forEach) t.forEach(e, n);
            else if (t.length !== a)
            for (i = 0; i < t.length;) e.call(n, t[i], i, t), i++;
          else
            for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
        }

        function y(t, e, n) {
          var i = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
          return function() {
            var e = new Error("get-stack-trace"),
              n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              s = r.console && (r.console.warn || r.console.log);
            return s && s.call(r.console, i, n), t.apply(this, arguments)
          }
        }
        u = "function" != typeof Object.assign ? function(t) {
          if (t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
          for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            if (i !== a && null !== i)
              for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r])
          }
          return e
        } : Object.assign;
        var T = y((function(t, e, n) {
            for (var i = Object.keys(e), r = 0; r < i.length;)(!n || n && t[i[r]] === a) && (t[i[r]] = e[i[r]]), r++;
            return t
          }), "extend", "Use `assign`."),
          E = y((function(t, e) {
            return T(t, e, !0)
          }), "merge", "Use `assign`.");

        function b(t, e, n) {
          var i, r = e.prototype;
          (i = t.prototype = Object.create(r)).constructor = t, i._super = r, n && u(i, n)
        }

        function _(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }

        function I(t, e) {
          return typeof t == l ? t.apply(e && e[0] || a, e) : t
        }

        function w(t, e) {
          return t === a ? e : t
        }

        function A(t, e, n) {
          g(P(e), (function(e) {
            t.addEventListener(e, n, !1)
          }))
        }

        function C(t, e, n) {
          g(P(e), (function(e) {
            t.removeEventListener(e, n, !1)
          }))
        }

        function D(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
          }
          return !1
        }

        function S(t, e) {
          return t.indexOf(e) > -1
        }

        function P(t) {
          return t.trim().split(/\s+/g)
        }

        function M(t, e, n) {
          if (t.indexOf && !n) return t.indexOf(e);
          for (var i = 0; i < t.length;) {
            if (n && t[i][n] == e || !n && t[i] === e) return i;
            i++
          }
          return -1
        }

        function x(t) {
          return Array.prototype.slice.call(t, 0)
        }

        function R(t, e, n) {
          for (var i = [], r = [], s = 0; s < t.length;) {
            var o = e ? t[s][e] : t[s];
            M(r, o) < 0 && i.push(t[s]), r[s] = o, s++
          }
          return n && (i = e ? i.sort((function(t, n) {
            return t[e] > n[e]
          })) : i.sort()), i
        }

        function O(t, e) {
          for (var n, i, r = e[0].toUpperCase() + e.slice(1), s = 0; s < h.length;) {
            if ((i = (n = h[s]) ? n + r : e) in t) return i;
            s++
          }
          return a
        }
        var z = 1;

        function N(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || r
        }
        var Y = "ontouchstart" in r,
          X = O(r, "PointerEvent") !== a,
          k = Y && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          F = "touch",
          W = "mouse",
          q = 25,
          L = 1,
          H = 4,
          U = 8,
          V = 1,
          j = 2,
          G = 4,
          Z = 8,
          B = 16,
          $ = j | G,
          J = Z | B,
          K = $ | J,
          Q = ["x", "y"],
          tt = ["clientX", "clientY"];

        function et(t, e) {
          var n = this;
          this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            I(t.options.enable, [t]) && n.handler(e)
          }, this.init()
        }

        function nt(t, e, n) {
          var i = n.pointers.length,
            r = n.changedPointers.length,
            s = e & L && i - r == 0,
            o = e & (H | U) && i - r == 0;
          n.isFirst = !!s, n.isFinal = !!o, s && (t.session = {}), n.eventType = e,
            function(t, e) {
              var n = t.session,
                i = e.pointers,
                r = i.length;
              n.firstInput || (n.firstInput = it(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = it(e) : 1 === r && (n.firstMultiple = !1);
              var s = n.firstInput,
                o = n.firstMultiple,
                u = o ? o.center : s.center,
                h = e.center = rt(i);
              e.timeStamp = d(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = ut(u, h), e.distance = at(u, h),
                function(t, e) {
                  var n = e.center,
                    i = t.offsetDelta || {},
                    r = t.prevDelta || {},
                    s = t.prevInput || {};
                  e.eventType !== L && s.eventType !== H || (r = t.prevDelta = {
                    x: s.deltaX || 0,
                    y: s.deltaY || 0
                  }, i = t.offsetDelta = {
                    x: n.x,
                    y: n.y
                  }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
                }(n, e), e.offsetDirection = ot(e.deltaX, e.deltaY);
              var c, l, p = st(e.deltaTime, e.deltaX, e.deltaY);
              e.overallVelocityX = p.x, e.overallVelocityY = p.y, e.overallVelocity = f(p.x) > f(p.y) ? p.x : p.y, e.scale = o ? (c = o.pointers, at((l = i)[0], l[1], tt) / at(c[0], c[1], tt)) : 1, e.rotation = o ? function(t, e) {
                  return ut(e[1], e[0], tt) + ut(t[1], t[0], tt)
                }(o.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
                function(t, e) {
                  var n, i, r, s, o = t.lastInterval || e,
                    u = e.timeStamp - o.timeStamp;
                  if (e.eventType != U && (u > q || o.velocity === a)) {
                    var h = e.deltaX - o.deltaX,
                      c = e.deltaY - o.deltaY,
                      l = st(u, h, c);
                    i = l.x, r = l.y, n = f(l.x) > f(l.y) ? l.x : l.y, s = ot(h, c), t.lastInterval = e
                  } else n = o.velocity, i = o.velocityX, r = o.velocityY, s = o.direction;
                  e.velocity = n, e.velocityX = i, e.velocityY = r, e.direction = s
                }(n, e);
              var v = t.element;
              D(e.srcEvent.target, v) && (v = e.srcEvent.target), e.target = v
            }(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
        }

        function it(t) {
          for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
            clientX: p(t.pointers[n].clientX),
            clientY: p(t.pointers[n].clientY)
          }, n++;
          return {
            timeStamp: d(),
            pointers: e,
            center: rt(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
          }
        }

        function rt(t) {
          var e = t.length;
          if (1 === e) return {
            x: p(t[0].clientX),
            y: p(t[0].clientY)
          };
          for (var n = 0, i = 0, r = 0; r < e;) n += t[r].clientX, i += t[r].clientY, r++;
          return {
            x: p(n / e),
            y: p(i / e)
          }
        }

        function st(t, e, n) {
          return {
            x: e / t || 0,
            y: n / t || 0
          }
        }

        function ot(t, e) {
          return t === e ? V : f(t) >= f(e) ? t < 0 ? j : G : e < 0 ? Z : B
        }

        function at(t, e, n) {
          n || (n = Q);
          var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
          return Math.sqrt(i * i + r * r)
        }

        function ut(t, e, n) {
          n || (n = Q);
          var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
          return 180 * Math.atan2(r, i) / Math.PI
        }
        et.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && A(this.element, this.evEl, this.domHandler), this.evTarget && A(this.target, this.evTarget, this.domHandler), this.evWin && A(N(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(N(this.element), this.evWin, this.domHandler)
          }
        };
        var ht = {
            mousedown: L,
            mousemove: 2,
            mouseup: H
          },
          ct = "mousedown",
          lt = "mousemove mouseup";

        function pt() {
          this.evEl = ct, this.evWin = lt, this.pressed = !1, et.apply(this, arguments)
        }
        b(pt, et, {
          handler: function(t) {
            var e = ht[t.type];
            e & L && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = H), this.pressed && (e & H && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: W,
              srcEvent: t
            }))
          }
        });
        var ft = {
            pointerdown: L,
            pointermove: 2,
            pointerup: H,
            pointercancel: U,
            pointerout: U
          },
          dt = {
            2: F,
            3: "pen",
            4: W,
            5: "kinect"
          },
          vt = "pointerdown",
          mt = "pointermove pointerup pointercancel";

        function gt() {
          this.evEl = vt, this.evWin = mt, et.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        r.MSPointerEvent && !r.PointerEvent && (vt = "MSPointerDown", mt = "MSPointerMove MSPointerUp MSPointerCancel"), b(gt, et, {
          handler: function(t) {
            var e = this.store,
              n = !1,
              i = t.type.toLowerCase().replace("ms", ""),
              r = ft[i],
              s = dt[t.pointerType] || t.pointerType,
              o = s == F,
              a = M(e, t.pointerId, "pointerId");
            r & L && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : r & (H | U) && (n = !0), a < 0 || (e[a] = t, this.callback(this.manager, r, {
              pointers: e,
              changedPointers: [t],
              pointerType: s,
              srcEvent: t
            }), n && e.splice(a, 1))
          }
        });
        var yt = {
          touchstart: L,
          touchmove: 2,
          touchend: H,
          touchcancel: U
        };

        function Tt() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, et.apply(this, arguments)
        }

        function Et(t, e) {
          var n = x(t.touches),
            i = x(t.changedTouches);
          return e & (H | U) && (n = R(n.concat(i), "identifier", !0)), [n, i]
        }
        b(Tt, et, {
          handler: function(t) {
            var e = yt[t.type];
            if (e === L && (this.started = !0), this.started) {
              var n = Et.call(this, t, e);
              e & (H | U) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: F,
                srcEvent: t
              })
            }
          }
        });
        var bt = {
            touchstart: L,
            touchmove: 2,
            touchend: H,
            touchcancel: U
          },
          _t = "touchstart touchmove touchend touchcancel";

        function It() {
          this.evTarget = _t, this.targetIds = {}, et.apply(this, arguments)
        }

        function wt(t, e) {
          var n = x(t.touches),
            i = this.targetIds;
          if (e & (2 | L) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
          var r, s, o = x(t.changedTouches),
            a = [],
            u = this.target;
          if (s = n.filter((function(t) {
              return D(t.target, u)
            })), e === L)
            for (r = 0; r < s.length;) i[s[r].identifier] = !0, r++;
          for (r = 0; r < o.length;) i[o[r].identifier] && a.push(o[r]), e & (H | U) && delete i[o[r].identifier], r++;
          return a.length ? [R(s.concat(a), "identifier", !0), a] : void 0
        }
        b(It, et, {
          handler: function(t) {
            var e = bt[t.type],
              n = wt.call(this, t, e);
            n && this.callback(this.manager, e, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: F,
              srcEvent: t
            })
          }
        });
        var At = 2500;

        function Ct() {
          et.apply(this, arguments);
          var t = _(this.handler, this);
          this.touch = new It(this.manager, t), this.mouse = new pt(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function Dt(t, e) {
          t & L ? (this.primaryTouch = e.changedPointers[0].identifier, St.call(this, e)) : t & (H | U) && St.call(this, e)
        }

        function St(t) {
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
            }), At)
          }
        }

        function Pt(t) {
          for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var r = this.lastTouches[i],
              s = Math.abs(e - r.x),
              o = Math.abs(n - r.y);
            if (s <= 25 && o <= 25) return !0
          }
          return !1
        }
        b(Ct, et, {
          handler: function(t, e, n) {
            var i = n.pointerType == F,
              r = n.pointerType == W;
            if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
              if (i) Dt.call(this, e, n);
              else if (r && Pt.call(this, n)) return;
              this.callback(t, e, n)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var Mt = O(c.style, "touchAction"),
          xt = Mt !== a,
          Rt = "compute",
          Ot = "auto",
          zt = "manipulation",
          Nt = "none",
          Yt = "pan-x",
          Xt = "pan-y",
          kt = function() {
            if (!xt) return !1;
            var t = {},
              e = r.CSS && r.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(n) {
              t[n] = !e || r.CSS.supports("touch-action", n)
            })), t
          }();

        function Ft(t, e) {
          this.manager = t, this.set(e)
        }
        Ft.prototype = {
          set: function(t) {
            t == Rt && (t = this.compute()), xt && this.manager.element.style && kt[t] && (this.manager.element.style[Mt] = t), this.actions = t.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var t = [];
            return g(this.manager.recognizers, (function(e) {
                I(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              })),
              function(t) {
                if (S(t, Nt)) return Nt;
                var e = S(t, Yt),
                  n = S(t, Xt);
                return e && n ? Nt : e || n ? e ? Yt : Xt : S(t, zt) ? zt : Ot
              }(t.join(" "))
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              n = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var i = this.actions,
                r = S(i, Nt) && !kt[Nt],
                s = S(i, Xt) && !kt[Xt],
                o = S(i, Yt) && !kt[Yt];
              if (r) {
                var a = 1 === t.pointers.length,
                  u = t.distance < 2,
                  h = t.deltaTime < 250;
                if (a && u && h) return
              }
              if (!o || !s) return r || s && n & $ || o && n & J ? this.preventSrc(e) : void 0
            }
          },
          preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
          }
        };
        var Wt = 1,
          qt = 32;

        function Lt(t) {
          this.options = u({}, this.defaults, t || {}), this.id = z++, this.manager = null, this.options.enable = w(this.options.enable, !0), this.state = Wt, this.simultaneous = {}, this.requireFail = []
        }

        function Ht(t) {
          return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
        }

        function Ut(t) {
          return t == B ? "down" : t == Z ? "up" : t == j ? "left" : t == G ? "right" : ""
        }

        function Vt(t, e) {
          var n = e.manager;
          return n ? n.get(t) : t
        }

        function jt() {
          Lt.apply(this, arguments)
        }

        function Gt() {
          jt.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Zt() {
          jt.apply(this, arguments)
        }

        function Bt() {
          Lt.apply(this, arguments), this._timer = null, this._input = null
        }

        function $t() {
          jt.apply(this, arguments)
        }

        function Jt() {
          jt.apply(this, arguments)
        }

        function Kt() {
          Lt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Qt(t, e) {
          return (e = e || {}).recognizers = w(e.recognizers, Qt.defaults.preset), new te(t, e)
        }

        function te(t, e) {
          this.options = u({}, Qt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (X ? gt : k ? It : Y ? Ct : pt))(this, nt), this.touchAction = new Ft(this, this.options.touchAction), ee(this, !0), g(this.options.recognizers, (function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
          }), this)
        }

        function ee(t, e) {
          var n, i = t.element;
          i.style && (g(t.options.cssProps, (function(r, s) {
            n = O(i.style, s), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || ""
          })), e || (t.oldCssProps = {}))
        }
        Lt.prototype = {
          defaults: {},
          set: function(t) {
            return u(this.options, t), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(t) {
            if (m(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = Vt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
          },
          dropRecognizeWith: function(t) {
            return m(t, "dropRecognizeWith", this) || (t = Vt(t, this), delete this.simultaneous[t.id]), this
          },
          requireFailure: function(t) {
            if (m(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === M(e, t = Vt(t, this)) && (e.push(t), t.requireFailure(this)), this
          },
          dropRequireFailure: function(t) {
            if (m(t, "dropRequireFailure", this)) return this;
            t = Vt(t, this);
            var e = M(this.requireFail, t);
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
            n < 8 && i(e.options.event + Ht(n)), i(e.options.event), t.additionalEvent && i(t.additionalEvent), n >= 8 && i(e.options.event + Ht(n))
          },
          tryEmit: function(t) {
            if (this.canEmit()) return this.emit(t);
            this.state = qt
          },
          canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
              if (!(this.requireFail[t].state & (qt | Wt))) return !1;
              t++
            }
            return !0
          },
          recognize: function(t) {
            var e = u({}, t);
            if (!I(this.options.enable, [this, e])) return this.reset(), void(this.state = qt);
            56 & this.state && (this.state = Wt), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }, b(jt, Lt, {
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
              r = this.attrTest(t);
            return i && (n & U || !r) ? 16 | e : i || r ? n & H ? 8 | e : 2 & e ? 4 | e : 2 : qt
          }
        }), b(Gt, jt, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: K
          },
          getTouchAction: function() {
            var t = this.options.direction,
              e = [];
            return t & $ && e.push(Xt), t & J && e.push(Yt), e
          },
          directionTest: function(t) {
            var e = this.options,
              n = !0,
              i = t.distance,
              r = t.direction,
              s = t.deltaX,
              o = t.deltaY;
            return r & e.direction || (e.direction & $ ? (r = 0 === s ? V : s < 0 ? j : G, n = s != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === o ? V : o < 0 ? Z : B, n = o != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
          },
          attrTest: function(t) {
            return jt.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
          },
          emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Ut(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
          }
        }), b(Zt, jt, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Nt]
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
        }), b(Bt, Lt, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          },
          getTouchAction: function() {
            return [Ot]
          },
          process: function(t) {
            var e = this.options,
              n = t.pointers.length === e.pointers,
              i = t.distance < e.threshold,
              r = t.deltaTime > e.time;
            if (this._input = t, !i || !n || t.eventType & (H | U) && !r) this.reset();
            else if (t.eventType & L) this.reset(), this._timer = v((function() {
              this.state = 8, this.tryEmit()
            }), e.time, this);
            else if (t.eventType & H) return 8;
            return qt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(t) {
            8 === this.state && (t && t.eventType & H ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = d(), this.manager.emit(this.options.event, this._input)))
          }
        }), b($t, jt, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Nt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
          }
        }), b(Jt, jt, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: $ | J,
            pointers: 1
          },
          getTouchAction: function() {
            return Gt.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
            var e, n = this.options.direction;
            return n & ($ | J) ? e = t.overallVelocity : n & $ ? e = t.overallVelocityX : n & J && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && f(e) > this.options.velocity && t.eventType & H
          },
          emit: function(t) {
            var e = Ut(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
          }
        }), b(Kt, Lt, {
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
            return [zt]
          },
          process: function(t) {
            var e = this.options,
              n = t.pointers.length === e.pointers,
              i = t.distance < e.threshold,
              r = t.deltaTime < e.time;
            if (this.reset(), t.eventType & L && 0 === this.count) return this.failTimeout();
            if (i && r && n) {
              if (t.eventType != H) return this.failTimeout();
              var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                o = !this.pCenter || at(this.pCenter, t.center) < e.posThreshold;
              if (this.pTime = t.timeStamp, this.pCenter = t.center, o && s ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = v((function() {
                this.state = 8, this.tryEmit()
              }), e.interval, this), 2) : 8
            }
            return qt
          },
          failTimeout: function() {
            return this._timer = v((function() {
              this.state = qt
            }), this.options.interval, this), qt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), Qt.VERSION = "2.0.7", Qt.defaults = {
          domEvents: !1,
          touchAction: Rt,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [$t, {
              enable: !1
            }],
            [Zt, {
                enable: !1
              },
              ["rotate"]
            ],
            [Jt, {
              direction: $
            }],
            [Gt, {
                direction: $
              },
              ["swipe"]
            ],
            [Kt],
            [Kt, {
                event: "doubletap",
                taps: 2
              },
              ["tap"]
            ],
            [Bt]
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        }, te.prototype = {
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
                r = e.curRecognizer;
              (!r || r && 8 & r.state) && (r = e.curRecognizer = null);
              for (var s = 0; s < i.length;) n = i[s], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && 14 & n.state && (r = e.curRecognizer = n), s++
            }
          },
          get: function(t) {
            if (t instanceof Lt) return t;
            for (var e = this.recognizers, n = 0; n < e.length; n++)
              if (e[n].options.event == t) return e[n];
            return null
          },
          add: function(t) {
            if (m(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
          },
          remove: function(t) {
            if (m(t, "remove", this)) return this;
            if (t = this.get(t)) {
              var e = this.recognizers,
                n = M(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
            }
            return this
          },
          on: function(t, e) {
            if (t !== a && e !== a) {
              var n = this.handlers;
              return g(P(t), (function(t) {
                n[t] = n[t] || [], n[t].push(e)
              })), this
            }
          },
          off: function(t, e) {
            if (t !== a) {
              var n = this.handlers;
              return g(P(t), (function(t) {
                e ? n[t] && n[t].splice(M(n[t], e), 1) : delete n[t]
              })), this
            }
          },
          emit: function(t, e) {
            this.options.domEvents && function(t, e) {
              var n = s.createEvent("Event");
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
            this.element && ee(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, u(Qt, {
          INPUT_START: L,
          INPUT_MOVE: 2,
          INPUT_END: H,
          INPUT_CANCEL: U,
          STATE_POSSIBLE: Wt,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: qt,
          DIRECTION_NONE: V,
          DIRECTION_LEFT: j,
          DIRECTION_RIGHT: G,
          DIRECTION_UP: Z,
          DIRECTION_DOWN: B,
          DIRECTION_HORIZONTAL: $,
          DIRECTION_VERTICAL: J,
          DIRECTION_ALL: K,
          Manager: te,
          Input: et,
          TouchAction: Ft,
          TouchInput: It,
          MouseInput: pt,
          PointerEventInput: gt,
          TouchMouseInput: Ct,
          SingleTouchInput: Tt,
          Recognizer: Lt,
          AttrRecognizer: jt,
          Tap: Kt,
          Pan: Gt,
          Swipe: Jt,
          Pinch: Zt,
          Rotate: $t,
          Press: Bt,
          on: A,
          off: C,
          each: g,
          merge: E,
          extend: T,
          assign: u,
          inherit: b,
          bindFn: _,
          prefixed: O
        }), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = Qt, (i = function() {
          return Qt
        }.call(e, n, e, t)) === a || (t.exports = i)
      }(window, document)
    }
  }
]);