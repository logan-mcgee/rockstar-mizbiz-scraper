/*! For license information please see 88b38b1f0d70aba417db70c8d6414505.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [332], {
    6588: (t, e, i) => {
      var n;
      ! function(r, s, o, a) {
        "use strict";
        var h, u = ["", "webkit", "Moz", "MS", "ms", "o"],
          c = s.createElement("div"),
          l = "function",
          p = Math.round,
          f = Math.abs,
          v = Date.now;

        function d(t, e, i) {
          return setTimeout(I(t, i), e)
        }

        function m(t, e, i) {
          return !!Array.isArray(t) && (g(t, i[e], i), !0)
        }

        function g(t, e, i) {
          var n;
          if (t)
            if (t.forEach) t.forEach(e, i);
            else if (t.length !== a)
            for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
          else
            for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
        }

        function y(t, e, i) {
          var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
          return function() {
            var e = new Error("get-stack-trace"),
              i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              s = r.console && (r.console.warn || r.console.log);
            return s && s.call(r.console, n, i), t.apply(this, arguments)
          }
        }
        h = "function" != typeof Object.assign ? function(t) {
          if (t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
          for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var n = arguments[i];
            if (n !== a && null !== n)
              for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
          }
          return e
        } : Object.assign;
        var T = y((function(t, e, i) {
            for (var n = Object.keys(e), r = 0; r < n.length;)(!i || i && t[n[r]] === a) && (t[n[r]] = e[n[r]]), r++;
            return t
          }), "extend", "Use `assign`."),
          E = y((function(t, e) {
            return T(t, e, !0)
          }), "merge", "Use `assign`.");

        function _(t, e, i) {
          var n, r = e.prototype;
          (n = t.prototype = Object.create(r)).constructor = t, n._super = r, i && h(n, i)
        }

        function I(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }

        function A(t, e) {
          return typeof t == l ? t.apply(e && e[0] || a, e) : t
        }

        function S(t, e) {
          return t === a ? e : t
        }

        function b(t, e, i) {
          g(w(e), (function(e) {
            t.addEventListener(e, i, !1)
          }))
        }

        function C(t, e, i) {
          g(w(e), (function(e) {
            t.removeEventListener(e, i, !1)
          }))
        }

        function P(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
          }
          return !1
        }

        function D(t, e) {
          return t.indexOf(e) > -1
        }

        function w(t) {
          return t.trim().split(/\s+/g)
        }

        function O(t, e, i) {
          if (t.indexOf && !i) return t.indexOf(e);
          for (var n = 0; n < t.length;) {
            if (i && t[n][i] == e || !i && t[n] === e) return n;
            n++
          }
          return -1
        }

        function x(t) {
          return Array.prototype.slice.call(t, 0)
        }

        function R(t, e, i) {
          for (var n = [], r = [], s = 0; s < t.length;) {
            var o = e ? t[s][e] : t[s];
            O(r, o) < 0 && n.push(t[s]), r[s] = o, s++
          }
          return i && (n = e ? n.sort((function(t, i) {
            return t[e] > i[e]
          })) : n.sort()), n
        }

        function M(t, e) {
          for (var i, n, r = e[0].toUpperCase() + e.slice(1), s = 0; s < u.length;) {
            if ((n = (i = u[s]) ? i + r : e) in t) return n;
            s++
          }
          return a
        }
        var N = 1;

        function z(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || r
        }
        var Y = "ontouchstart" in r,
          X = M(r, "PointerEvent") !== a,
          k = Y && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          F = "touch",
          W = "mouse",
          L = 25,
          q = 1,
          H = 4,
          U = 8,
          j = 1,
          V = 2,
          G = 4,
          B = 8,
          Z = 16,
          $ = V | G,
          J = B | Z,
          K = $ | J,
          Q = ["x", "y"],
          tt = ["clientX", "clientY"];

        function et(t, e) {
          var i = this;
          this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            A(t.options.enable, [t]) && i.handler(e)
          }, this.init()
        }

        function it(t, e, i) {
          var n = i.pointers.length,
            r = i.changedPointers.length,
            s = e & q && n - r == 0,
            o = e & (H | U) && n - r == 0;
          i.isFirst = !!s, i.isFinal = !!o, s && (t.session = {}), i.eventType = e,
            function(t, e) {
              var i = t.session,
                n = e.pointers,
                r = n.length;
              i.firstInput || (i.firstInput = nt(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = nt(e) : 1 === r && (i.firstMultiple = !1);
              var s = i.firstInput,
                o = i.firstMultiple,
                h = o ? o.center : s.center,
                u = e.center = rt(n);
              e.timeStamp = v(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = ht(h, u), e.distance = at(h, u),
                function(t, e) {
                  var i = e.center,
                    n = t.offsetDelta || {},
                    r = t.prevDelta || {},
                    s = t.prevInput || {};
                  e.eventType !== q && s.eventType !== H || (r = t.prevDelta = {
                    x: s.deltaX || 0,
                    y: s.deltaY || 0
                  }, n = t.offsetDelta = {
                    x: i.x,
                    y: i.y
                  }), e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y)
                }(i, e), e.offsetDirection = ot(e.deltaX, e.deltaY);
              var c, l, p = st(e.deltaTime, e.deltaX, e.deltaY);
              e.overallVelocityX = p.x, e.overallVelocityY = p.y, e.overallVelocity = f(p.x) > f(p.y) ? p.x : p.y, e.scale = o ? (c = o.pointers, at((l = n)[0], l[1], tt) / at(c[0], c[1], tt)) : 1, e.rotation = o ? function(t, e) {
                  return ht(e[1], e[0], tt) + ht(t[1], t[0], tt)
                }(o.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
                function(t, e) {
                  var i, n, r, s, o = t.lastInterval || e,
                    h = e.timeStamp - o.timeStamp;
                  if (e.eventType != U && (h > L || o.velocity === a)) {
                    var u = e.deltaX - o.deltaX,
                      c = e.deltaY - o.deltaY,
                      l = st(h, u, c);
                    n = l.x, r = l.y, i = f(l.x) > f(l.y) ? l.x : l.y, s = ot(u, c), t.lastInterval = e
                  } else i = o.velocity, n = o.velocityX, r = o.velocityY, s = o.direction;
                  e.velocity = i, e.velocityX = n, e.velocityY = r, e.direction = s
                }(i, e);
              var d = t.element;
              P(e.srcEvent.target, d) && (d = e.srcEvent.target), e.target = d
            }(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
        }

        function nt(t) {
          for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
            clientX: p(t.pointers[i].clientX),
            clientY: p(t.pointers[i].clientY)
          }, i++;
          return {
            timeStamp: v(),
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
          for (var i = 0, n = 0, r = 0; r < e;) i += t[r].clientX, n += t[r].clientY, r++;
          return {
            x: p(i / e),
            y: p(n / e)
          }
        }

        function st(t, e, i) {
          return {
            x: e / t || 0,
            y: i / t || 0
          }
        }

        function ot(t, e) {
          return t === e ? j : f(t) >= f(e) ? t < 0 ? V : G : e < 0 ? B : Z
        }

        function at(t, e, i) {
          i || (i = Q);
          var n = e[i[0]] - t[i[0]],
            r = e[i[1]] - t[i[1]];
          return Math.sqrt(n * n + r * r)
        }

        function ht(t, e, i) {
          i || (i = Q);
          var n = e[i[0]] - t[i[0]],
            r = e[i[1]] - t[i[1]];
          return 180 * Math.atan2(r, n) / Math.PI
        }
        et.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && b(this.element, this.evEl, this.domHandler), this.evTarget && b(this.target, this.evTarget, this.domHandler), this.evWin && b(z(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(z(this.element), this.evWin, this.domHandler)
          }
        };
        var ut = {
            mousedown: q,
            mousemove: 2,
            mouseup: H
          },
          ct = "mousedown",
          lt = "mousemove mouseup";

        function pt() {
          this.evEl = ct, this.evWin = lt, this.pressed = !1, et.apply(this, arguments)
        }
        _(pt, et, {
          handler: function(t) {
            var e = ut[t.type];
            e & q && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = H), this.pressed && (e & H && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: W,
              srcEvent: t
            }))
          }
        });
        var ft = {
            pointerdown: q,
            pointermove: 2,
            pointerup: H,
            pointercancel: U,
            pointerout: U
          },
          vt = {
            2: F,
            3: "pen",
            4: W,
            5: "kinect"
          },
          dt = "pointerdown",
          mt = "pointermove pointerup pointercancel";

        function gt() {
          this.evEl = dt, this.evWin = mt, et.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        r.MSPointerEvent && !r.PointerEvent && (dt = "MSPointerDown", mt = "MSPointerMove MSPointerUp MSPointerCancel"), _(gt, et, {
          handler: function(t) {
            var e = this.store,
              i = !1,
              n = t.type.toLowerCase().replace("ms", ""),
              r = ft[n],
              s = vt[t.pointerType] || t.pointerType,
              o = s == F,
              a = O(e, t.pointerId, "pointerId");
            r & q && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : r & (H | U) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, r, {
              pointers: e,
              changedPointers: [t],
              pointerType: s,
              srcEvent: t
            }), i && e.splice(a, 1))
          }
        });
        var yt = {
          touchstart: q,
          touchmove: 2,
          touchend: H,
          touchcancel: U
        };

        function Tt() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, et.apply(this, arguments)
        }

        function Et(t, e) {
          var i = x(t.touches),
            n = x(t.changedTouches);
          return e & (H | U) && (i = R(i.concat(n), "identifier", !0)), [i, n]
        }
        _(Tt, et, {
          handler: function(t) {
            var e = yt[t.type];
            if (e === q && (this.started = !0), this.started) {
              var i = Et.call(this, t, e);
              e & (H | U) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: F,
                srcEvent: t
              })
            }
          }
        });
        var _t = {
            touchstart: q,
            touchmove: 2,
            touchend: H,
            touchcancel: U
          },
          It = "touchstart touchmove touchend touchcancel";

        function At() {
          this.evTarget = It, this.targetIds = {}, et.apply(this, arguments)
        }

        function St(t, e) {
          var i = x(t.touches),
            n = this.targetIds;
          if (e & (2 | q) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
          var r, s, o = x(t.changedTouches),
            a = [],
            h = this.target;
          if (s = i.filter((function(t) {
              return P(t.target, h)
            })), e === q)
            for (r = 0; r < s.length;) n[s[r].identifier] = !0, r++;
          for (r = 0; r < o.length;) n[o[r].identifier] && a.push(o[r]), e & (H | U) && delete n[o[r].identifier], r++;
          return a.length ? [R(s.concat(a), "identifier", !0), a] : void 0
        }
        _(At, et, {
          handler: function(t) {
            var e = _t[t.type],
              i = St.call(this, t, e);
            i && this.callback(this.manager, e, {
              pointers: i[0],
              changedPointers: i[1],
              pointerType: F,
              srcEvent: t
            })
          }
        });
        var bt = 2500;

        function Ct() {
          et.apply(this, arguments);
          var t = I(this.handler, this);
          this.touch = new At(this.manager, t), this.mouse = new pt(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function Pt(t, e) {
          t & q ? (this.primaryTouch = e.changedPointers[0].identifier, Dt.call(this, e)) : t & (H | U) && Dt.call(this, e)
        }

        function Dt(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var i = {
              x: e.clientX,
              y: e.clientY
            };
            this.lastTouches.push(i);
            var n = this.lastTouches;
            setTimeout((function() {
              var t = n.indexOf(i);
              t > -1 && n.splice(t, 1)
            }), bt)
          }
        }

        function wt(t) {
          for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var r = this.lastTouches[n],
              s = Math.abs(e - r.x),
              o = Math.abs(i - r.y);
            if (s <= 25 && o <= 25) return !0
          }
          return !1
        }
        _(Ct, et, {
          handler: function(t, e, i) {
            var n = i.pointerType == F,
              r = i.pointerType == W;
            if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
              if (n) Pt.call(this, e, i);
              else if (r && wt.call(this, i)) return;
              this.callback(t, e, i)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var Ot = M(c.style, "touchAction"),
          xt = Ot !== a,
          Rt = "compute",
          Mt = "auto",
          Nt = "manipulation",
          zt = "none",
          Yt = "pan-x",
          Xt = "pan-y",
          kt = function() {
            if (!xt) return !1;
            var t = {},
              e = r.CSS && r.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(i) {
              t[i] = !e || r.CSS.supports("touch-action", i)
            })), t
          }();

        function Ft(t, e) {
          this.manager = t, this.set(e)
        }
        Ft.prototype = {
          set: function(t) {
            t == Rt && (t = this.compute()), xt && this.manager.element.style && kt[t] && (this.manager.element.style[Ot] = t), this.actions = t.toLowerCase().trim()
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
                if (D(t, zt)) return zt;
                var e = D(t, Yt),
                  i = D(t, Xt);
                return e && i ? zt : e || i ? e ? Yt : Xt : D(t, Nt) ? Nt : Mt
              }(t.join(" "))
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              i = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var n = this.actions,
                r = D(n, zt) && !kt[zt],
                s = D(n, Xt) && !kt[Xt],
                o = D(n, Yt) && !kt[Yt];
              if (r) {
                var a = 1 === t.pointers.length,
                  h = t.distance < 2,
                  u = t.deltaTime < 250;
                if (a && h && u) return
              }
              if (!o || !s) return r || s && i & $ || o && i & J ? this.preventSrc(e) : void 0
            }
          },
          preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
          }
        };
        var Wt = 1,
          Lt = 32;

        function qt(t) {
          this.options = h({}, this.defaults, t || {}), this.id = N++, this.manager = null, this.options.enable = S(this.options.enable, !0), this.state = Wt, this.simultaneous = {}, this.requireFail = []
        }

        function Ht(t) {
          return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
        }

        function Ut(t) {
          return t == Z ? "down" : t == B ? "up" : t == V ? "left" : t == G ? "right" : ""
        }

        function jt(t, e) {
          var i = e.manager;
          return i ? i.get(t) : t
        }

        function Vt() {
          qt.apply(this, arguments)
        }

        function Gt() {
          Vt.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Bt() {
          Vt.apply(this, arguments)
        }

        function Zt() {
          qt.apply(this, arguments), this._timer = null, this._input = null
        }

        function $t() {
          Vt.apply(this, arguments)
        }

        function Jt() {
          Vt.apply(this, arguments)
        }

        function Kt() {
          qt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Qt(t, e) {
          return (e = e || {}).recognizers = S(e.recognizers, Qt.defaults.preset), new te(t, e)
        }

        function te(t, e) {
          this.options = h({}, Qt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (X ? gt : k ? At : Y ? Ct : pt))(this, it), this.touchAction = new Ft(this, this.options.touchAction), ee(this, !0), g(this.options.recognizers, (function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
          }), this)
        }

        function ee(t, e) {
          var i, n = t.element;
          n.style && (g(t.options.cssProps, (function(r, s) {
            i = M(n.style, s), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = t.oldCssProps[i] || ""
          })), e || (t.oldCssProps = {}))
        }
        qt.prototype = {
          defaults: {},
          set: function(t) {
            return h(this.options, t), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(t) {
            if (m(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = jt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
          },
          dropRecognizeWith: function(t) {
            return m(t, "dropRecognizeWith", this) || (t = jt(t, this), delete this.simultaneous[t.id]), this
          },
          requireFailure: function(t) {
            if (m(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === O(e, t = jt(t, this)) && (e.push(t), t.requireFailure(this)), this
          },
          dropRequireFailure: function(t) {
            if (m(t, "dropRequireFailure", this)) return this;
            t = jt(t, this);
            var e = O(this.requireFail, t);
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
              i = this.state;

            function n(i) {
              e.manager.emit(i, t)
            }
            i < 8 && n(e.options.event + Ht(i)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), i >= 8 && n(e.options.event + Ht(i))
          },
          tryEmit: function(t) {
            if (this.canEmit()) return this.emit(t);
            this.state = Lt
          },
          canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
              if (!(this.requireFail[t].state & (Lt | Wt))) return !1;
              t++
            }
            return !0
          },
          recognize: function(t) {
            var e = h({}, t);
            if (!A(this.options.enable, [this, e])) return this.reset(), void(this.state = Lt);
            56 & this.state && (this.state = Wt), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }, _(Vt, qt, {
          defaults: {
            pointers: 1
          },
          attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
          },
          process: function(t) {
            var e = this.state,
              i = t.eventType,
              n = 6 & e,
              r = this.attrTest(t);
            return n && (i & U || !r) ? 16 | e : n || r ? i & H ? 8 | e : 2 & e ? 4 | e : 2 : Lt
          }
        }), _(Gt, Vt, {
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
              i = !0,
              n = t.distance,
              r = t.direction,
              s = t.deltaX,
              o = t.deltaY;
            return r & e.direction || (e.direction & $ ? (r = 0 === s ? j : s < 0 ? V : G, i = s != this.pX, n = Math.abs(t.deltaX)) : (r = 0 === o ? j : o < 0 ? B : Z, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction
          },
          attrTest: function(t) {
            return Vt.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
          },
          emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Ut(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
          }
        }), _(Bt, Vt, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [zt]
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
        }), _(Zt, qt, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          },
          getTouchAction: function() {
            return [Mt]
          },
          process: function(t) {
            var e = this.options,
              i = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              r = t.deltaTime > e.time;
            if (this._input = t, !n || !i || t.eventType & (H | U) && !r) this.reset();
            else if (t.eventType & q) this.reset(), this._timer = d((function() {
              this.state = 8, this.tryEmit()
            }), e.time, this);
            else if (t.eventType & H) return 8;
            return Lt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(t) {
            8 === this.state && (t && t.eventType & H ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = v(), this.manager.emit(this.options.event, this._input)))
          }
        }), _($t, Vt, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [zt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
          }
        }), _(Jt, Vt, {
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
            var e, i = this.options.direction;
            return i & ($ | J) ? e = t.overallVelocity : i & $ ? e = t.overallVelocityX : i & J && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && f(e) > this.options.velocity && t.eventType & H
          },
          emit: function(t) {
            var e = Ut(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
          }
        }), _(Kt, qt, {
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
              i = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              r = t.deltaTime < e.time;
            if (this.reset(), t.eventType & q && 0 === this.count) return this.failTimeout();
            if (n && r && i) {
              if (t.eventType != H) return this.failTimeout();
              var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                o = !this.pCenter || at(this.pCenter, t.center) < e.posThreshold;
              if (this.pTime = t.timeStamp, this.pCenter = t.center, o && s ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = d((function() {
                this.state = 8, this.tryEmit()
              }), e.interval, this), 2) : 8
            }
            return Lt
          },
          failTimeout: function() {
            return this._timer = d((function() {
              this.state = Lt
            }), this.options.interval, this), Lt
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
            [Bt, {
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
            [Zt]
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
            return h(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
          },
          stop: function(t) {
            this.session.stopped = t ? 2 : 1
          },
          recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
              var i;
              this.touchAction.preventDefaults(t);
              var n = this.recognizers,
                r = e.curRecognizer;
              (!r || r && 8 & r.state) && (r = e.curRecognizer = null);
              for (var s = 0; s < n.length;) i = n[s], 2 === e.stopped || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t), !r && 14 & i.state && (r = e.curRecognizer = i), s++
            }
          },
          get: function(t) {
            if (t instanceof qt) return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
              if (e[i].options.event == t) return e[i];
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
                i = O(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update())
            }
            return this
          },
          on: function(t, e) {
            if (t !== a && e !== a) {
              var i = this.handlers;
              return g(w(t), (function(t) {
                i[t] = i[t] || [], i[t].push(e)
              })), this
            }
          },
          off: function(t, e) {
            if (t !== a) {
              var i = this.handlers;
              return g(w(t), (function(t) {
                e ? i[t] && i[t].splice(O(i[t], e), 1) : delete i[t]
              })), this
            }
          },
          emit: function(t, e) {
            this.options.domEvents && function(t, e) {
              var i = s.createEvent("Event");
              i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
            }(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
              e.type = t, e.preventDefault = function() {
                e.srcEvent.preventDefault()
              };
              for (var n = 0; n < i.length;) i[n](e), n++
            }
          },
          destroy: function() {
            this.element && ee(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, h(Qt, {
          INPUT_START: q,
          INPUT_MOVE: 2,
          INPUT_END: H,
          INPUT_CANCEL: U,
          STATE_POSSIBLE: Wt,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: Lt,
          DIRECTION_NONE: j,
          DIRECTION_LEFT: V,
          DIRECTION_RIGHT: G,
          DIRECTION_UP: B,
          DIRECTION_DOWN: Z,
          DIRECTION_HORIZONTAL: $,
          DIRECTION_VERTICAL: J,
          DIRECTION_ALL: K,
          Manager: te,
          Input: et,
          TouchAction: Ft,
          TouchInput: At,
          MouseInput: pt,
          PointerEventInput: gt,
          TouchMouseInput: Ct,
          SingleTouchInput: Tt,
          Recognizer: qt,
          AttrRecognizer: Vt,
          Tap: Kt,
          Pan: Gt,
          Swipe: Jt,
          Pinch: Bt,
          Rotate: $t,
          Press: Zt,
          on: b,
          off: C,
          each: g,
          merge: E,
          extend: T,
          assign: h,
          inherit: _,
          bindFn: I,
          prefixed: M
        }), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = Qt, (n = function() {
          return Qt
        }.call(e, i, e, t)) === a || (t.exports = n)
      }(window, document)
    },
    3032: (t, e, i) => {
      "use strict";
      var n = i(927),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        h = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(t, e, i) {
        var n, s = {},
          u = null,
          c = null;
        for (n in void 0 !== i && (u = "" + i), void 0 !== e.key && (u = "" + e.key), void 0 !== e.ref && (c = e.ref), e) o.call(e, n) && !h.hasOwnProperty(n) && (s[n] = e[n]);
        if (t && t.defaultProps)
          for (n in e = t.defaultProps) void 0 === s[n] && (s[n] = e[n]);
        return {
          $$typeof: r,
          type: t,
          key: u,
          ref: c,
          props: s,
          _owner: a.current
        }
      }
      e.Fragment = s, e.jsx = u, e.jsxs = u
    },
    3705: (t, e, i) => {
      "use strict";
      t.exports = i(3032)
    }
  }
]);