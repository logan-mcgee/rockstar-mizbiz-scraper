/*! For license information please see 4366e010b23f936d495f.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [485], {
    6716: (t, e, n) => {
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

        function I(t, e, n) {
          var i, r = e.prototype;
          (i = t.prototype = Object.create(r)).constructor = t, i._super = r, n && u(i, n)
        }

        function _(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }

        function A(t, e) {
          return typeof t == l ? t.apply(e && e[0] || a, e) : t
        }

        function b(t, e) {
          return t === a ? e : t
        }

        function C(t, e, n) {
          g(P(e), (function(e) {
            t.addEventListener(e, n, !1)
          }))
        }

        function D(t, e, n) {
          g(P(e), (function(e) {
            t.removeEventListener(e, n, !1)
          }))
        }

        function S(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
          }
          return !1
        }

        function w(t, e) {
          return t.indexOf(e) > -1
        }

        function P(t) {
          return t.trim().split(/\s+/g)
        }

        function x(t, e, n) {
          if (t.indexOf && !n) return t.indexOf(e);
          for (var i = 0; i < t.length;) {
            if (n && t[i][n] == e || !n && t[i] === e) return i;
            i++
          }
          return -1
        }

        function R(t) {
          return Array.prototype.slice.call(t, 0)
        }

        function O(t, e, n) {
          for (var i = [], r = [], s = 0; s < t.length;) {
            var o = e ? t[s][e] : t[s];
            x(r, o) < 0 && i.push(t[s]), r[s] = o, s++
          }
          return n && (i = e ? i.sort((function(t, n) {
            return t[e] > n[e]
          })) : i.sort()), i
        }

        function M(t, e) {
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
        var X = "ontouchstart" in r,
          Y = M(r, "PointerEvent") !== a,
          U = X && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          k = "touch",
          F = "mouse",
          W = 25,
          q = 1,
          L = 2,
          H = 4,
          V = 8,
          j = 1,
          G = 2,
          Z = 4,
          B = 8,
          $ = 16,
          J = G | Z,
          K = B | $,
          Q = J | K,
          tt = ["x", "y"],
          et = ["clientX", "clientY"];

        function nt(t, e) {
          var n = this;
          this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            A(t.options.enable, [t]) && n.handler(e)
          }, this.init()
        }

        function it(t, e, n) {
          var i = n.pointers.length,
            r = n.changedPointers.length,
            s = e & q && i - r == 0,
            o = e & (H | V) && i - r == 0;
          n.isFirst = !!s, n.isFinal = !!o, s && (t.session = {}), n.eventType = e,
            function(t, e) {
              var n = t.session,
                i = e.pointers,
                r = i.length;
              n.firstInput || (n.firstInput = rt(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = rt(e) : 1 === r && (n.firstMultiple = !1);
              var s = n.firstInput,
                o = n.firstMultiple,
                u = o ? o.center : s.center,
                h = e.center = st(i);
              e.timeStamp = d(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = ht(u, h), e.distance = ut(u, h),
                function(t, e) {
                  var n = e.center,
                    i = t.offsetDelta || {},
                    r = t.prevDelta || {},
                    s = t.prevInput || {};
                  e.eventType !== q && s.eventType !== H || (r = t.prevDelta = {
                    x: s.deltaX || 0,
                    y: s.deltaY || 0
                  }, i = t.offsetDelta = {
                    x: n.x,
                    y: n.y
                  }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
                }(n, e), e.offsetDirection = at(e.deltaX, e.deltaY);
              var c, l, p = ot(e.deltaTime, e.deltaX, e.deltaY);
              e.overallVelocityX = p.x, e.overallVelocityY = p.y, e.overallVelocity = f(p.x) > f(p.y) ? p.x : p.y, e.scale = o ? (c = o.pointers, ut((l = i)[0], l[1], et) / ut(c[0], c[1], et)) : 1, e.rotation = o ? function(t, e) {
                  return ht(e[1], e[0], et) + ht(t[1], t[0], et)
                }(o.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
                function(t, e) {
                  var n, i, r, s, o = t.lastInterval || e,
                    u = e.timeStamp - o.timeStamp;
                  if (e.eventType != V && (u > W || o.velocity === a)) {
                    var h = e.deltaX - o.deltaX,
                      c = e.deltaY - o.deltaY,
                      l = ot(u, h, c);
                    i = l.x, r = l.y, n = f(l.x) > f(l.y) ? l.x : l.y, s = at(h, c), t.lastInterval = e
                  } else n = o.velocity, i = o.velocityX, r = o.velocityY, s = o.direction;
                  e.velocity = n, e.velocityX = i, e.velocityY = r, e.direction = s
                }(n, e);
              var v = t.element;
              S(e.srcEvent.target, v) && (v = e.srcEvent.target), e.target = v
            }(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
        }

        function rt(t) {
          for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
            clientX: p(t.pointers[n].clientX),
            clientY: p(t.pointers[n].clientY)
          }, n++;
          return {
            timeStamp: d(),
            pointers: e,
            center: st(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
          }
        }

        function st(t) {
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

        function ot(t, e, n) {
          return {
            x: e / t || 0,
            y: n / t || 0
          }
        }

        function at(t, e) {
          return t === e ? j : f(t) >= f(e) ? t < 0 ? G : Z : e < 0 ? B : $
        }

        function ut(t, e, n) {
          n || (n = tt);
          var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
          return Math.sqrt(i * i + r * r)
        }

        function ht(t, e, n) {
          n || (n = tt);
          var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
          return 180 * Math.atan2(r, i) / Math.PI
        }
        nt.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(N(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && D(this.element, this.evEl, this.domHandler), this.evTarget && D(this.target, this.evTarget, this.domHandler), this.evWin && D(N(this.element), this.evWin, this.domHandler)
          }
        };
        var ct = {
            mousedown: q,
            mousemove: L,
            mouseup: H
          },
          lt = "mousedown",
          pt = "mousemove mouseup";

        function ft() {
          this.evEl = lt, this.evWin = pt, this.pressed = !1, nt.apply(this, arguments)
        }
        I(ft, nt, {
          handler: function(t) {
            var e = ct[t.type];
            e & q && 0 === t.button && (this.pressed = !0), e & L && 1 !== t.which && (e = H), this.pressed && (e & H && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: F,
              srcEvent: t
            }))
          }
        });
        var dt = {
            pointerdown: q,
            pointermove: L,
            pointerup: H,
            pointercancel: V,
            pointerout: V
          },
          vt = {
            2: k,
            3: "pen",
            4: F,
            5: "kinect"
          },
          mt = "pointerdown",
          gt = "pointermove pointerup pointercancel";

        function yt() {
          this.evEl = mt, this.evWin = gt, nt.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        r.MSPointerEvent && !r.PointerEvent && (mt = "MSPointerDown", gt = "MSPointerMove MSPointerUp MSPointerCancel"), I(yt, nt, {
          handler: function(t) {
            var e = this.store,
              n = !1,
              i = t.type.toLowerCase().replace("ms", ""),
              r = dt[i],
              s = vt[t.pointerType] || t.pointerType,
              o = s == k,
              a = x(e, t.pointerId, "pointerId");
            r & q && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : r & (H | V) && (n = !0), a < 0 || (e[a] = t, this.callback(this.manager, r, {
              pointers: e,
              changedPointers: [t],
              pointerType: s,
              srcEvent: t
            }), n && e.splice(a, 1))
          }
        });
        var Tt = {
          touchstart: q,
          touchmove: L,
          touchend: H,
          touchcancel: V
        };

        function Et() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, nt.apply(this, arguments)
        }

        function It(t, e) {
          var n = R(t.touches),
            i = R(t.changedTouches);
          return e & (H | V) && (n = O(n.concat(i), "identifier", !0)), [n, i]
        }
        I(Et, nt, {
          handler: function(t) {
            var e = Tt[t.type];
            if (e === q && (this.started = !0), this.started) {
              var n = It.call(this, t, e);
              e & (H | V) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: k,
                srcEvent: t
              })
            }
          }
        });
        var _t = {
            touchstart: q,
            touchmove: L,
            touchend: H,
            touchcancel: V
          },
          At = "touchstart touchmove touchend touchcancel";

        function bt() {
          this.evTarget = At, this.targetIds = {}, nt.apply(this, arguments)
        }

        function Ct(t, e) {
          var n = R(t.touches),
            i = this.targetIds;
          if (e & (q | L) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
          var r, s, o = R(t.changedTouches),
            a = [],
            u = this.target;
          if (s = n.filter((function(t) {
              return S(t.target, u)
            })), e === q)
            for (r = 0; r < s.length;) i[s[r].identifier] = !0, r++;
          for (r = 0; r < o.length;) i[o[r].identifier] && a.push(o[r]), e & (H | V) && delete i[o[r].identifier], r++;
          return a.length ? [O(s.concat(a), "identifier", !0), a] : void 0
        }
        I(bt, nt, {
          handler: function(t) {
            var e = _t[t.type],
              n = Ct.call(this, t, e);
            n && this.callback(this.manager, e, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: k,
              srcEvent: t
            })
          }
        });
        var Dt = 2500;

        function St() {
          nt.apply(this, arguments);
          var t = _(this.handler, this);
          this.touch = new bt(this.manager, t), this.mouse = new ft(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function wt(t, e) {
          t & q ? (this.primaryTouch = e.changedPointers[0].identifier, Pt.call(this, e)) : t & (H | V) && Pt.call(this, e)
        }

        function Pt(t) {
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
            }), Dt)
          }
        }

        function xt(t) {
          for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var r = this.lastTouches[i],
              s = Math.abs(e - r.x),
              o = Math.abs(n - r.y);
            if (s <= 25 && o <= 25) return !0
          }
          return !1
        }
        I(St, nt, {
          handler: function(t, e, n) {
            var i = n.pointerType == k,
              r = n.pointerType == F;
            if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
              if (i) wt.call(this, e, n);
              else if (r && xt.call(this, n)) return;
              this.callback(t, e, n)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var Rt = M(c.style, "touchAction"),
          Ot = Rt !== a,
          Mt = "compute",
          zt = "auto",
          Nt = "manipulation",
          Xt = "none",
          Yt = "pan-x",
          Ut = "pan-y",
          kt = function() {
            if (!Ot) return !1;
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
            t == Mt && (t = this.compute()), Ot && this.manager.element.style && kt[t] && (this.manager.element.style[Rt] = t), this.actions = t.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var t = [];
            return g(this.manager.recognizers, (function(e) {
                A(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              })),
              function(t) {
                if (w(t, Xt)) return Xt;
                var e = w(t, Yt),
                  n = w(t, Ut);
                return e && n ? Xt : e || n ? e ? Yt : Ut : w(t, Nt) ? Nt : zt
              }(t.join(" "))
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              n = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var i = this.actions,
                r = w(i, Xt) && !kt[Xt],
                s = w(i, Ut) && !kt[Ut],
                o = w(i, Yt) && !kt[Yt];
              if (r) {
                var a = 1 === t.pointers.length,
                  u = t.distance < 2,
                  h = t.deltaTime < 250;
                if (a && u && h) return
              }
              if (!o || !s) return r || s && n & J || o && n & K ? this.preventSrc(e) : void 0
            }
          },
          preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
          }
        };
        var Wt = 1,
          qt = 2,
          Lt = 4,
          Ht = 8,
          Vt = Ht,
          jt = 16,
          Gt = 32;

        function Zt(t) {
          this.options = u({}, this.defaults, t || {}), this.id = z++, this.manager = null, this.options.enable = b(this.options.enable, !0), this.state = Wt, this.simultaneous = {}, this.requireFail = []
        }

        function Bt(t) {
          return t & jt ? "cancel" : t & Ht ? "end" : t & Lt ? "move" : t & qt ? "start" : ""
        }

        function $t(t) {
          return t == $ ? "down" : t == B ? "up" : t == G ? "left" : t == Z ? "right" : ""
        }

        function Jt(t, e) {
          var n = e.manager;
          return n ? n.get(t) : t
        }

        function Kt() {
          Zt.apply(this, arguments)
        }

        function Qt() {
          Kt.apply(this, arguments), this.pX = null, this.pY = null
        }

        function te() {
          Kt.apply(this, arguments)
        }

        function ee() {
          Zt.apply(this, arguments), this._timer = null, this._input = null
        }

        function ne() {
          Kt.apply(this, arguments)
        }

        function ie() {
          Kt.apply(this, arguments)
        }

        function re() {
          Zt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function se(t, e) {
          return (e = e || {}).recognizers = b(e.recognizers, se.defaults.preset), new oe(t, e)
        }

        function oe(t, e) {
          this.options = u({}, se.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (Y ? yt : U ? bt : X ? St : ft))(this, it), this.touchAction = new Ft(this, this.options.touchAction), ae(this, !0), g(this.options.recognizers, (function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
          }), this)
        }

        function ae(t, e) {
          var n, i = t.element;
          i.style && (g(t.options.cssProps, (function(r, s) {
            n = M(i.style, s), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || ""
          })), e || (t.oldCssProps = {}))
        }
        Zt.prototype = {
          defaults: {},
          set: function(t) {
            return u(this.options, t), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(t) {
            if (m(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = Jt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
          },
          dropRecognizeWith: function(t) {
            return m(t, "dropRecognizeWith", this) || (t = Jt(t, this), delete this.simultaneous[t.id]), this
          },
          requireFailure: function(t) {
            if (m(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === x(e, t = Jt(t, this)) && (e.push(t), t.requireFailure(this)), this
          },
          dropRequireFailure: function(t) {
            if (m(t, "dropRequireFailure", this)) return this;
            t = Jt(t, this);
            var e = x(this.requireFail, t);
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
            n < Ht && i(e.options.event + Bt(n)), i(e.options.event), t.additionalEvent && i(t.additionalEvent), n >= Ht && i(e.options.event + Bt(n))
          },
          tryEmit: function(t) {
            if (this.canEmit()) return this.emit(t);
            this.state = Gt
          },
          canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
              if (!(this.requireFail[t].state & (Gt | Wt))) return !1;
              t++
            }
            return !0
          },
          recognize: function(t) {
            var e = u({}, t);
            if (!A(this.options.enable, [this, e])) return this.reset(), void(this.state = Gt);
            this.state & (Vt | jt | Gt) && (this.state = Wt), this.state = this.process(e), this.state & (qt | Lt | Ht | jt) && this.tryEmit(e)
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }, I(Kt, Zt, {
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
              i = e & (qt | Lt),
              r = this.attrTest(t);
            return i && (n & V || !r) ? e | jt : i || r ? n & H ? e | Ht : e & qt ? e | Lt : qt : Gt
          }
        }), I(Qt, Kt, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Q
          },
          getTouchAction: function() {
            var t = this.options.direction,
              e = [];
            return t & J && e.push(Ut), t & K && e.push(Yt), e
          },
          directionTest: function(t) {
            var e = this.options,
              n = !0,
              i = t.distance,
              r = t.direction,
              s = t.deltaX,
              o = t.deltaY;
            return r & e.direction || (e.direction & J ? (r = 0 === s ? j : s < 0 ? G : Z, n = s != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === o ? j : o < 0 ? B : $, n = o != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
          },
          attrTest: function(t) {
            return Kt.prototype.attrTest.call(this, t) && (this.state & qt || !(this.state & qt) && this.directionTest(t))
          },
          emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = $t(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
          }
        }), I(te, Kt, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Xt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & qt)
          },
          emit: function(t) {
            if (1 !== t.scale) {
              var e = t.scale < 1 ? "in" : "out";
              t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
          }
        }), I(ee, Zt, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          },
          getTouchAction: function() {
            return [zt]
          },
          process: function(t) {
            var e = this.options,
              n = t.pointers.length === e.pointers,
              i = t.distance < e.threshold,
              r = t.deltaTime > e.time;
            if (this._input = t, !i || !n || t.eventType & (H | V) && !r) this.reset();
            else if (t.eventType & q) this.reset(), this._timer = v((function() {
              this.state = Vt, this.tryEmit()
            }), e.time, this);
            else if (t.eventType & H) return Vt;
            return Gt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(t) {
            this.state === Vt && (t && t.eventType & H ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = d(), this.manager.emit(this.options.event, this._input)))
          }
        }), I(ne, Kt, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Xt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & qt)
          }
        }), I(ie, Kt, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: J | K,
            pointers: 1
          },
          getTouchAction: function() {
            return Qt.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
            var e, n = this.options.direction;
            return n & (J | K) ? e = t.overallVelocity : n & J ? e = t.overallVelocityX : n & K && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && f(e) > this.options.velocity && t.eventType & H
          },
          emit: function(t) {
            var e = $t(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
          }
        }), I(re, Zt, {
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
            return [Nt]
          },
          process: function(t) {
            var e = this.options,
              n = t.pointers.length === e.pointers,
              i = t.distance < e.threshold,
              r = t.deltaTime < e.time;
            if (this.reset(), t.eventType & q && 0 === this.count) return this.failTimeout();
            if (i && r && n) {
              if (t.eventType != H) return this.failTimeout();
              var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                o = !this.pCenter || ut(this.pCenter, t.center) < e.posThreshold;
              if (this.pTime = t.timeStamp, this.pCenter = t.center, o && s ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = v((function() {
                this.state = Vt, this.tryEmit()
              }), e.interval, this), qt) : Vt
            }
            return Gt
          },
          failTimeout: function() {
            return this._timer = v((function() {
              this.state = Gt
            }), this.options.interval, this), Gt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            this.state == Vt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), se.VERSION = "2.0.7", se.defaults = {
          domEvents: !1,
          touchAction: Mt,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [ne, {
              enable: !1
            }],
            [te, {
                enable: !1
              },
              ["rotate"]
            ],
            [ie, {
              direction: J
            }],
            [Qt, {
                direction: J
              },
              ["swipe"]
            ],
            [re],
            [re, {
                event: "doubletap",
                taps: 2
              },
              ["tap"]
            ],
            [ee]
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        }, oe.prototype = {
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
              (!r || r && r.state & Vt) && (r = e.curRecognizer = null);
              for (var s = 0; s < i.length;) n = i[s], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (qt | Lt | Ht) && (r = e.curRecognizer = n), s++
            }
          },
          get: function(t) {
            if (t instanceof Zt) return t;
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
                n = x(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
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
                e ? n[t] && n[t].splice(x(n[t], e), 1) : delete n[t]
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
            this.element && ae(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, u(se, {
          INPUT_START: q,
          INPUT_MOVE: L,
          INPUT_END: H,
          INPUT_CANCEL: V,
          STATE_POSSIBLE: Wt,
          STATE_BEGAN: qt,
          STATE_CHANGED: Lt,
          STATE_ENDED: Ht,
          STATE_RECOGNIZED: Vt,
          STATE_CANCELLED: jt,
          STATE_FAILED: Gt,
          DIRECTION_NONE: j,
          DIRECTION_LEFT: G,
          DIRECTION_RIGHT: Z,
          DIRECTION_UP: B,
          DIRECTION_DOWN: $,
          DIRECTION_HORIZONTAL: J,
          DIRECTION_VERTICAL: K,
          DIRECTION_ALL: Q,
          Manager: oe,
          Input: nt,
          TouchAction: Ft,
          TouchInput: bt,
          MouseInput: ft,
          PointerEventInput: yt,
          TouchMouseInput: St,
          SingleTouchInput: Et,
          Recognizer: Zt,
          AttrRecognizer: Kt,
          Tap: re,
          Pan: Qt,
          Swipe: ie,
          Pinch: te,
          Rotate: ne,
          Press: ee,
          on: C,
          off: D,
          each: g,
          merge: E,
          extend: T,
          assign: u,
          inherit: I,
          bindFn: _,
          prefixed: M
        }), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = se, (i = function() {
          return se
        }.call(e, n, e, t)) === a || (t.exports = i)
      }(window, document)
    },
    8272: (t, e, n) => {
      "use strict";
      n.d(e, {
        Z: () => u
      });
      const i = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let r;
      const s = new Uint8Array(16);

      function o() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(s)
      }
      const a = [];
      for (let t = 0; t < 256; ++t) a.push((t + 256).toString(16).slice(1));
      const u = function(t, e, n) {
        if (i.randomUUID && !e && !t) return i.randomUUID();
        const r = (t = t || {}).random || (t.rng || o)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, e) {
          n = n || 0;
          for (let t = 0; t < 16; ++t) e[n + t] = r[t];
          return e
        }
        return function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (a[t[e + 0]] + a[t[e + 1]] + a[t[e + 2]] + a[t[e + 3]] + "-" + a[t[e + 4]] + a[t[e + 5]] + "-" + a[t[e + 6]] + a[t[e + 7]] + "-" + a[t[e + 8]] + a[t[e + 9]] + "-" + a[t[e + 10]] + a[t[e + 11]] + a[t[e + 12]] + a[t[e + 13]] + a[t[e + 14]] + a[t[e + 15]]).toLowerCase()
        }(r)
      }
    }
  }
]);