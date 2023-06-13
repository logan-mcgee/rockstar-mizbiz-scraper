/*! For license information please see 0b0e9bfdccbd9976d579.js.LICENSE.txt */
(self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [750], {
    6111: (t, e, r) => {
      "use strict";
      r.d(e, {
        Hu: () => f
      });
      const n = function(t) {
          return "string" != typeof t || "" === t ? (console.error("The namespace must be a non-empty string."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1)
        },
        i = function(t) {
          return "string" != typeof t || "" === t ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(t) ? (console.error("The hook name cannot begin with `__`."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1)
        },
        s = function(t, e) {
          return function(r, s, a) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
            const l = t[e];
            if (!i(r)) return;
            if (!n(s)) return;
            if ("function" != typeof a) return void console.error("The hook callback must be a function.");
            if ("number" != typeof o) return void console.error("If specified, the hook priority must be a number.");
            const h = {
              callback: a,
              priority: o,
              namespace: s
            };
            if (l[r]) {
              const t = l[r].handlers;
              let e;
              for (e = t.length; e > 0 && !(o >= t[e - 1].priority); e--);
              e === t.length ? t[e] = h : t.splice(e, 0, h), l.__current.forEach((t => {
                t.name === r && t.currentIndex >= e && t.currentIndex++
              }))
            } else l[r] = {
              handlers: [h],
              runs: 0
            };
            "hookAdded" !== r && t.doAction("hookAdded", r, s, a, o)
          }
        },
        a = function(t, e) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(s, a) {
            const o = t[e];
            if (!i(s)) return;
            if (!r && !n(a)) return;
            if (!o[s]) return 0;
            let l = 0;
            if (r) l = o[s].handlers.length, o[s] = {
              runs: o[s].runs,
              handlers: []
            };
            else {
              const t = o[s].handlers;
              for (let e = t.length - 1; e >= 0; e--) t[e].namespace === a && (t.splice(e, 1), l++, o.__current.forEach((t => {
                t.name === s && t.currentIndex >= e && t.currentIndex--
              })))
            }
            return "hookRemoved" !== s && t.doAction("hookRemoved", s, a), l
          }
        },
        o = function(t, e) {
          return function(r, n) {
            const i = t[e];
            return void 0 !== n ? r in i && i[r].handlers.some((t => t.namespace === n)) : r in i
          }
        },
        l = function(t, e) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(n) {
            const i = t[e];
            i[n] || (i[n] = {
              handlers: [],
              runs: 0
            }), i[n].runs++;
            const s = i[n].handlers;
            for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) o[l - 1] = arguments[l];
            if (!s || !s.length) return r ? o[0] : void 0;
            const h = {
              name: n,
              currentIndex: 0
            };
            for (i.__current.push(h); h.currentIndex < s.length;) {
              const t = s[h.currentIndex].callback.apply(null, o);
              r && (o[0] = t), h.currentIndex++
            }
            return i.__current.pop(), r ? o[0] : void 0
          }
        },
        h = function(t, e) {
          return function() {
            var r, n;
            const i = t[e];
            return null !== (r = null === (n = i.__current[i.__current.length - 1]) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : null
          }
        },
        p = function(t, e) {
          return function(r) {
            const n = t[e];
            return void 0 === r ? void 0 !== n.__current[0] : !!n.__current[0] && r === n.__current[0].name
          }
        },
        u = function(t, e) {
          return function(r) {
            const n = t[e];
            if (i(r)) return n[r] && n[r].runs ? n[r].runs : 0
          }
        };
      class c {
        constructor() {
          this.actions = Object.create(null), this.actions.__current = [], this.filters = Object.create(null), this.filters.__current = [], this.addAction = s(this, "actions"), this.addFilter = s(this, "filters"), this.removeAction = a(this, "actions"), this.removeFilter = a(this, "filters"), this.hasAction = o(this, "actions"), this.hasFilter = o(this, "filters"), this.removeAllActions = a(this, "actions", !0), this.removeAllFilters = a(this, "filters", !0), this.doAction = l(this, "actions"), this.applyFilters = l(this, "filters", !0), this.currentAction = h(this, "actions"), this.currentFilter = h(this, "filters"), this.doingAction = p(this, "actions"), this.doingFilter = p(this, "filters"), this.didAction = u(this, "actions"), this.didFilter = u(this, "filters")
        }
      }
      const f = function() {
          return new c
        },
        d = f(),
        {
          addAction: m,
          addFilter: g,
          removeAction: v,
          removeFilter: y,
          hasAction: b,
          hasFilter: _,
          removeAllActions: x,
          removeAllFilters: E,
          doAction: S,
          applyFilters: P,
          currentAction: w,
          currentFilter: C,
          doingAction: T,
          doingFilter: A,
          didAction: M,
          didFilter: k,
          actions: D,
          filters: I
        } = d
    },
    8423: (t, e, r) => {
      var n;
      ! function(i, s, a, o) {
        "use strict";
        var l, h = ["", "webkit", "Moz", "MS", "ms", "o"],
          p = s.createElement("div"),
          u = "function",
          c = Math.round,
          f = Math.abs,
          d = Date.now;

        function m(t, e, r) {
          return setTimeout(E(t, r), e)
        }

        function g(t, e, r) {
          return !!Array.isArray(t) && (v(t, r[e], r), !0)
        }

        function v(t, e, r) {
          var n;
          if (t)
            if (t.forEach) t.forEach(e, r);
            else if (t.length !== o)
            for (n = 0; n < t.length;) e.call(r, t[n], n, t), n++;
          else
            for (n in t) t.hasOwnProperty(n) && e.call(r, t[n], n, t)
        }

        function y(t, e, r) {
          var n = "DEPRECATED METHOD: " + e + "\n" + r + " AT \n";
          return function() {
            var e = new Error("get-stack-trace"),
              r = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              s = i.console && (i.console.warn || i.console.log);
            return s && s.call(i.console, n, r), t.apply(this, arguments)
          }
        }
        l = "function" != typeof Object.assign ? function(t) {
          if (t === o || null === t) throw new TypeError("Cannot convert undefined or null to object");
          for (var e = Object(t), r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            if (n !== o && null !== n)
              for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i])
          }
          return e
        } : Object.assign;
        var b = y((function(t, e, r) {
            for (var n = Object.keys(e), i = 0; i < n.length;)(!r || r && t[n[i]] === o) && (t[n[i]] = e[n[i]]), i++;
            return t
          }), "extend", "Use `assign`."),
          _ = y((function(t, e) {
            return b(t, e, !0)
          }), "merge", "Use `assign`.");

        function x(t, e, r) {
          var n, i = e.prototype;
          (n = t.prototype = Object.create(i)).constructor = t, n._super = i, r && l(n, r)
        }

        function E(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }

        function S(t, e) {
          return typeof t == u ? t.apply(e && e[0] || o, e) : t
        }

        function P(t, e) {
          return t === o ? e : t
        }

        function w(t, e, r) {
          v(M(e), (function(e) {
            t.addEventListener(e, r, !1)
          }))
        }

        function C(t, e, r) {
          v(M(e), (function(e) {
            t.removeEventListener(e, r, !1)
          }))
        }

        function T(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
          }
          return !1
        }

        function A(t, e) {
          return t.indexOf(e) > -1
        }

        function M(t) {
          return t.trim().split(/\s+/g)
        }

        function k(t, e, r) {
          if (t.indexOf && !r) return t.indexOf(e);
          for (var n = 0; n < t.length;) {
            if (r && t[n][r] == e || !r && t[n] === e) return n;
            n++
          }
          return -1
        }

        function D(t) {
          return Array.prototype.slice.call(t, 0)
        }

        function I(t, e, r) {
          for (var n = [], i = [], s = 0; s < t.length;) {
            var a = e ? t[s][e] : t[s];
            k(i, a) < 0 && n.push(t[s]), i[s] = a, s++
          }
          return r && (n = e ? n.sort((function(t, r) {
            return t[e] > r[e]
          })) : n.sort()), n
        }

        function F(t, e) {
          for (var r, n, i = e[0].toUpperCase() + e.slice(1), s = 0; s < h.length;) {
            if ((n = (r = h[s]) ? r + i : e) in t) return n;
            s++
          }
          return o
        }
        var O = 1;

        function R(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || i
        }
        var L = "ontouchstart" in i,
          B = F(i, "PointerEvent") !== o,
          V = L && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          z = "touch",
          j = "mouse",
          N = 25,
          G = 1,
          $ = 2,
          H = 4,
          W = 8,
          q = 1,
          Y = 2,
          X = 4,
          U = 8,
          Z = 16,
          K = Y | X,
          J = U | Z,
          Q = K | J,
          tt = ["x", "y"],
          et = ["clientX", "clientY"];

        function rt(t, e) {
          var r = this;
          this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            S(t.options.enable, [t]) && r.handler(e)
          }, this.init()
        }

        function nt(t, e, r) {
          var n = r.pointers.length,
            i = r.changedPointers.length,
            s = e & G && n - i == 0,
            a = e & (H | W) && n - i == 0;
          r.isFirst = !!s, r.isFinal = !!a, s && (t.session = {}), r.eventType = e,
            function(t, e) {
              var r = t.session,
                n = e.pointers,
                i = n.length;
              r.firstInput || (r.firstInput = it(e)), i > 1 && !r.firstMultiple ? r.firstMultiple = it(e) : 1 === i && (r.firstMultiple = !1);
              var s = r.firstInput,
                a = r.firstMultiple,
                l = a ? a.center : s.center,
                h = e.center = st(n);
              e.timeStamp = d(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = ht(l, h), e.distance = lt(l, h),
                function(t, e) {
                  var r = e.center,
                    n = t.offsetDelta || {},
                    i = t.prevDelta || {},
                    s = t.prevInput || {};
                  e.eventType !== G && s.eventType !== H || (i = t.prevDelta = {
                    x: s.deltaX || 0,
                    y: s.deltaY || 0
                  }, n = t.offsetDelta = {
                    x: r.x,
                    y: r.y
                  }), e.deltaX = i.x + (r.x - n.x), e.deltaY = i.y + (r.y - n.y)
                }(r, e), e.offsetDirection = ot(e.deltaX, e.deltaY);
              var p, u, c = at(e.deltaTime, e.deltaX, e.deltaY);
              e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = f(c.x) > f(c.y) ? c.x : c.y, e.scale = a ? (p = a.pointers, lt((u = n)[0], u[1], et) / lt(p[0], p[1], et)) : 1, e.rotation = a ? function(t, e) {
                  return ht(e[1], e[0], et) + ht(t[1], t[0], et)
                }(a.pointers, n) : 0, e.maxPointers = r.prevInput ? e.pointers.length > r.prevInput.maxPointers ? e.pointers.length : r.prevInput.maxPointers : e.pointers.length,
                function(t, e) {
                  var r, n, i, s, a = t.lastInterval || e,
                    l = e.timeStamp - a.timeStamp;
                  if (e.eventType != W && (l > N || a.velocity === o)) {
                    var h = e.deltaX - a.deltaX,
                      p = e.deltaY - a.deltaY,
                      u = at(l, h, p);
                    n = u.x, i = u.y, r = f(u.x) > f(u.y) ? u.x : u.y, s = ot(h, p), t.lastInterval = e
                  } else r = a.velocity, n = a.velocityX, i = a.velocityY, s = a.direction;
                  e.velocity = r, e.velocityX = n, e.velocityY = i, e.direction = s
                }(r, e);
              var m = t.element;
              T(e.srcEvent.target, m) && (m = e.srcEvent.target), e.target = m
            }(t, r), t.emit("hammer.input", r), t.recognize(r), t.session.prevInput = r
        }

        function it(t) {
          for (var e = [], r = 0; r < t.pointers.length;) e[r] = {
            clientX: c(t.pointers[r].clientX),
            clientY: c(t.pointers[r].clientY)
          }, r++;
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
            x: c(t[0].clientX),
            y: c(t[0].clientY)
          };
          for (var r = 0, n = 0, i = 0; i < e;) r += t[i].clientX, n += t[i].clientY, i++;
          return {
            x: c(r / e),
            y: c(n / e)
          }
        }

        function at(t, e, r) {
          return {
            x: e / t || 0,
            y: r / t || 0
          }
        }

        function ot(t, e) {
          return t === e ? q : f(t) >= f(e) ? t < 0 ? Y : X : e < 0 ? U : Z
        }

        function lt(t, e, r) {
          r || (r = tt);
          var n = e[r[0]] - t[r[0]],
            i = e[r[1]] - t[r[1]];
          return Math.sqrt(n * n + i * i)
        }

        function ht(t, e, r) {
          r || (r = tt);
          var n = e[r[0]] - t[r[0]],
            i = e[r[1]] - t[r[1]];
          return 180 * Math.atan2(i, n) / Math.PI
        }
        rt.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && w(this.element, this.evEl, this.domHandler), this.evTarget && w(this.target, this.evTarget, this.domHandler), this.evWin && w(R(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(R(this.element), this.evWin, this.domHandler)
          }
        };
        var pt = {
            mousedown: G,
            mousemove: $,
            mouseup: H
          },
          ut = "mousedown",
          ct = "mousemove mouseup";

        function ft() {
          this.evEl = ut, this.evWin = ct, this.pressed = !1, rt.apply(this, arguments)
        }
        x(ft, rt, {
          handler: function(t) {
            var e = pt[t.type];
            e & G && 0 === t.button && (this.pressed = !0), e & $ && 1 !== t.which && (e = H), this.pressed && (e & H && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: j,
              srcEvent: t
            }))
          }
        });
        var dt = {
            pointerdown: G,
            pointermove: $,
            pointerup: H,
            pointercancel: W,
            pointerout: W
          },
          mt = {
            2: z,
            3: "pen",
            4: j,
            5: "kinect"
          },
          gt = "pointerdown",
          vt = "pointermove pointerup pointercancel";

        function yt() {
          this.evEl = gt, this.evWin = vt, rt.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        i.MSPointerEvent && !i.PointerEvent && (gt = "MSPointerDown", vt = "MSPointerMove MSPointerUp MSPointerCancel"), x(yt, rt, {
          handler: function(t) {
            var e = this.store,
              r = !1,
              n = t.type.toLowerCase().replace("ms", ""),
              i = dt[n],
              s = mt[t.pointerType] || t.pointerType,
              a = s == z,
              o = k(e, t.pointerId, "pointerId");
            i & G && (0 === t.button || a) ? o < 0 && (e.push(t), o = e.length - 1) : i & (H | W) && (r = !0), o < 0 || (e[o] = t, this.callback(this.manager, i, {
              pointers: e,
              changedPointers: [t],
              pointerType: s,
              srcEvent: t
            }), r && e.splice(o, 1))
          }
        });
        var bt = {
          touchstart: G,
          touchmove: $,
          touchend: H,
          touchcancel: W
        };

        function _t() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, rt.apply(this, arguments)
        }

        function xt(t, e) {
          var r = D(t.touches),
            n = D(t.changedTouches);
          return e & (H | W) && (r = I(r.concat(n), "identifier", !0)), [r, n]
        }
        x(_t, rt, {
          handler: function(t) {
            var e = bt[t.type];
            if (e === G && (this.started = !0), this.started) {
              var r = xt.call(this, t, e);
              e & (H | W) && r[0].length - r[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                pointers: r[0],
                changedPointers: r[1],
                pointerType: z,
                srcEvent: t
              })
            }
          }
        });
        var Et = {
            touchstart: G,
            touchmove: $,
            touchend: H,
            touchcancel: W
          },
          St = "touchstart touchmove touchend touchcancel";

        function Pt() {
          this.evTarget = St, this.targetIds = {}, rt.apply(this, arguments)
        }

        function wt(t, e) {
          var r = D(t.touches),
            n = this.targetIds;
          if (e & (G | $) && 1 === r.length) return n[r[0].identifier] = !0, [r, r];
          var i, s, a = D(t.changedTouches),
            o = [],
            l = this.target;
          if (s = r.filter((function(t) {
              return T(t.target, l)
            })), e === G)
            for (i = 0; i < s.length;) n[s[i].identifier] = !0, i++;
          for (i = 0; i < a.length;) n[a[i].identifier] && o.push(a[i]), e & (H | W) && delete n[a[i].identifier], i++;
          return o.length ? [I(s.concat(o), "identifier", !0), o] : void 0
        }
        x(Pt, rt, {
          handler: function(t) {
            var e = Et[t.type],
              r = wt.call(this, t, e);
            r && this.callback(this.manager, e, {
              pointers: r[0],
              changedPointers: r[1],
              pointerType: z,
              srcEvent: t
            })
          }
        });
        var Ct = 2500;

        function Tt() {
          rt.apply(this, arguments);
          var t = E(this.handler, this);
          this.touch = new Pt(this.manager, t), this.mouse = new ft(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function At(t, e) {
          t & G ? (this.primaryTouch = e.changedPointers[0].identifier, Mt.call(this, e)) : t & (H | W) && Mt.call(this, e)
        }

        function Mt(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var r = {
              x: e.clientX,
              y: e.clientY
            };
            this.lastTouches.push(r);
            var n = this.lastTouches;
            setTimeout((function() {
              var t = n.indexOf(r);
              t > -1 && n.splice(t, 1)
            }), Ct)
          }
        }

        function kt(t) {
          for (var e = t.srcEvent.clientX, r = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var i = this.lastTouches[n],
              s = Math.abs(e - i.x),
              a = Math.abs(r - i.y);
            if (s <= 25 && a <= 25) return !0
          }
          return !1
        }
        x(Tt, rt, {
          handler: function(t, e, r) {
            var n = r.pointerType == z,
              i = r.pointerType == j;
            if (!(i && r.sourceCapabilities && r.sourceCapabilities.firesTouchEvents)) {
              if (n) At.call(this, e, r);
              else if (i && kt.call(this, r)) return;
              this.callback(t, e, r)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var Dt = F(p.style, "touchAction"),
          It = Dt !== o,
          Ft = "compute",
          Ot = "auto",
          Rt = "manipulation",
          Lt = "none",
          Bt = "pan-x",
          Vt = "pan-y",
          zt = function() {
            if (!It) return !1;
            var t = {},
              e = i.CSS && i.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(r) {
              t[r] = !e || i.CSS.supports("touch-action", r)
            })), t
          }();

        function jt(t, e) {
          this.manager = t, this.set(e)
        }
        jt.prototype = {
          set: function(t) {
            t == Ft && (t = this.compute()), It && this.manager.element.style && zt[t] && (this.manager.element.style[Dt] = t), this.actions = t.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var t = [];
            return v(this.manager.recognizers, (function(e) {
                S(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              })),
              function(t) {
                if (A(t, Lt)) return Lt;
                var e = A(t, Bt),
                  r = A(t, Vt);
                return e && r ? Lt : e || r ? e ? Bt : Vt : A(t, Rt) ? Rt : Ot
              }(t.join(" "))
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              r = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var n = this.actions,
                i = A(n, Lt) && !zt[Lt],
                s = A(n, Vt) && !zt[Vt],
                a = A(n, Bt) && !zt[Bt];
              if (i) {
                var o = 1 === t.pointers.length,
                  l = t.distance < 2,
                  h = t.deltaTime < 250;
                if (o && l && h) return
              }
              if (!a || !s) return i || s && r & K || a && r & J ? this.preventSrc(e) : void 0
            }
          },
          preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
          }
        };
        var Nt = 1,
          Gt = 2,
          $t = 4,
          Ht = 8,
          Wt = Ht,
          qt = 16,
          Yt = 32;

        function Xt(t) {
          this.options = l({}, this.defaults, t || {}), this.id = O++, this.manager = null, this.options.enable = P(this.options.enable, !0), this.state = Nt, this.simultaneous = {}, this.requireFail = []
        }

        function Ut(t) {
          return t & qt ? "cancel" : t & Ht ? "end" : t & $t ? "move" : t & Gt ? "start" : ""
        }

        function Zt(t) {
          return t == Z ? "down" : t == U ? "up" : t == Y ? "left" : t == X ? "right" : ""
        }

        function Kt(t, e) {
          var r = e.manager;
          return r ? r.get(t) : t
        }

        function Jt() {
          Xt.apply(this, arguments)
        }

        function Qt() {
          Jt.apply(this, arguments), this.pX = null, this.pY = null
        }

        function te() {
          Jt.apply(this, arguments)
        }

        function ee() {
          Xt.apply(this, arguments), this._timer = null, this._input = null
        }

        function re() {
          Jt.apply(this, arguments)
        }

        function ne() {
          Jt.apply(this, arguments)
        }

        function ie() {
          Xt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function se(t, e) {
          return (e = e || {}).recognizers = P(e.recognizers, se.defaults.preset), new ae(t, e)
        }

        function ae(t, e) {
          this.options = l({}, se.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (B ? yt : V ? Pt : L ? Tt : ft))(this, nt), this.touchAction = new jt(this, this.options.touchAction), oe(this, !0), v(this.options.recognizers, (function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
          }), this)
        }

        function oe(t, e) {
          var r, n = t.element;
          n.style && (v(t.options.cssProps, (function(i, s) {
            r = F(n.style, s), e ? (t.oldCssProps[r] = n.style[r], n.style[r] = i) : n.style[r] = t.oldCssProps[r] || ""
          })), e || (t.oldCssProps = {}))
        }
        Xt.prototype = {
          defaults: {},
          set: function(t) {
            return l(this.options, t), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(t) {
            if (g(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = Kt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
          },
          dropRecognizeWith: function(t) {
            return g(t, "dropRecognizeWith", this) || (t = Kt(t, this), delete this.simultaneous[t.id]), this
          },
          requireFailure: function(t) {
            if (g(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === k(e, t = Kt(t, this)) && (e.push(t), t.requireFailure(this)), this
          },
          dropRequireFailure: function(t) {
            if (g(t, "dropRequireFailure", this)) return this;
            t = Kt(t, this);
            var e = k(this.requireFail, t);
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
              r = this.state;

            function n(r) {
              e.manager.emit(r, t)
            }
            r < Ht && n(e.options.event + Ut(r)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), r >= Ht && n(e.options.event + Ut(r))
          },
          tryEmit: function(t) {
            if (this.canEmit()) return this.emit(t);
            this.state = Yt
          },
          canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
              if (!(this.requireFail[t].state & (Yt | Nt))) return !1;
              t++
            }
            return !0
          },
          recognize: function(t) {
            var e = l({}, t);
            if (!S(this.options.enable, [this, e])) return this.reset(), void(this.state = Yt);
            this.state & (Wt | qt | Yt) && (this.state = Nt), this.state = this.process(e), this.state & (Gt | $t | Ht | qt) && this.tryEmit(e)
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }, x(Jt, Xt, {
          defaults: {
            pointers: 1
          },
          attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
          },
          process: function(t) {
            var e = this.state,
              r = t.eventType,
              n = e & (Gt | $t),
              i = this.attrTest(t);
            return n && (r & W || !i) ? e | qt : n || i ? r & H ? e | Ht : e & Gt ? e | $t : Gt : Yt
          }
        }), x(Qt, Jt, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Q
          },
          getTouchAction: function() {
            var t = this.options.direction,
              e = [];
            return t & K && e.push(Vt), t & J && e.push(Bt), e
          },
          directionTest: function(t) {
            var e = this.options,
              r = !0,
              n = t.distance,
              i = t.direction,
              s = t.deltaX,
              a = t.deltaY;
            return i & e.direction || (e.direction & K ? (i = 0 === s ? q : s < 0 ? Y : X, r = s != this.pX, n = Math.abs(t.deltaX)) : (i = 0 === a ? q : a < 0 ? U : Z, r = a != this.pY, n = Math.abs(t.deltaY))), t.direction = i, r && n > e.threshold && i & e.direction
          },
          attrTest: function(t) {
            return Jt.prototype.attrTest.call(this, t) && (this.state & Gt || !(this.state & Gt) && this.directionTest(t))
          },
          emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Zt(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
          }
        }), x(te, Jt, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Lt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Gt)
          },
          emit: function(t) {
            if (1 !== t.scale) {
              var e = t.scale < 1 ? "in" : "out";
              t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
          }
        }), x(ee, Xt, {
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
              r = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              i = t.deltaTime > e.time;
            if (this._input = t, !n || !r || t.eventType & (H | W) && !i) this.reset();
            else if (t.eventType & G) this.reset(), this._timer = m((function() {
              this.state = Wt, this.tryEmit()
            }), e.time, this);
            else if (t.eventType & H) return Wt;
            return Yt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(t) {
            this.state === Wt && (t && t.eventType & H ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = d(), this.manager.emit(this.options.event, this._input)))
          }
        }), x(re, Jt, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Lt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Gt)
          }
        }), x(ne, Jt, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: K | J,
            pointers: 1
          },
          getTouchAction: function() {
            return Qt.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
            var e, r = this.options.direction;
            return r & (K | J) ? e = t.overallVelocity : r & K ? e = t.overallVelocityX : r & J && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && r & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && f(e) > this.options.velocity && t.eventType & H
          },
          emit: function(t) {
            var e = Zt(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
          }
        }), x(ie, Xt, {
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
            return [Rt]
          },
          process: function(t) {
            var e = this.options,
              r = t.pointers.length === e.pointers,
              n = t.distance < e.threshold,
              i = t.deltaTime < e.time;
            if (this.reset(), t.eventType & G && 0 === this.count) return this.failTimeout();
            if (n && i && r) {
              if (t.eventType != H) return this.failTimeout();
              var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                a = !this.pCenter || lt(this.pCenter, t.center) < e.posThreshold;
              if (this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = m((function() {
                this.state = Wt, this.tryEmit()
              }), e.interval, this), Gt) : Wt
            }
            return Yt
          },
          failTimeout: function() {
            return this._timer = m((function() {
              this.state = Yt
            }), this.options.interval, this), Yt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            this.state == Wt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), se.VERSION = "2.0.7", se.defaults = {
          domEvents: !1,
          touchAction: Ft,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [re, {
              enable: !1
            }],
            [te, {
                enable: !1
              },
              ["rotate"]
            ],
            [ne, {
              direction: K
            }],
            [Qt, {
                direction: K
              },
              ["swipe"]
            ],
            [ie],
            [ie, {
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
        }, ae.prototype = {
          set: function(t) {
            return l(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
          },
          stop: function(t) {
            this.session.stopped = t ? 2 : 1
          },
          recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
              var r;
              this.touchAction.preventDefaults(t);
              var n = this.recognizers,
                i = e.curRecognizer;
              (!i || i && i.state & Wt) && (i = e.curRecognizer = null);
              for (var s = 0; s < n.length;) r = n[s], 2 === e.stopped || i && r != i && !r.canRecognizeWith(i) ? r.reset() : r.recognize(t), !i && r.state & (Gt | $t | Ht) && (i = e.curRecognizer = r), s++
            }
          },
          get: function(t) {
            if (t instanceof Xt) return t;
            for (var e = this.recognizers, r = 0; r < e.length; r++)
              if (e[r].options.event == t) return e[r];
            return null
          },
          add: function(t) {
            if (g(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
          },
          remove: function(t) {
            if (g(t, "remove", this)) return this;
            if (t = this.get(t)) {
              var e = this.recognizers,
                r = k(e, t); - 1 !== r && (e.splice(r, 1), this.touchAction.update())
            }
            return this
          },
          on: function(t, e) {
            if (t !== o && e !== o) {
              var r = this.handlers;
              return v(M(t), (function(t) {
                r[t] = r[t] || [], r[t].push(e)
              })), this
            }
          },
          off: function(t, e) {
            if (t !== o) {
              var r = this.handlers;
              return v(M(t), (function(t) {
                e ? r[t] && r[t].splice(k(r[t], e), 1) : delete r[t]
              })), this
            }
          },
          emit: function(t, e) {
            this.options.domEvents && function(t, e) {
              var r = s.createEvent("Event");
              r.initEvent(t, !0, !0), r.gesture = e, e.target.dispatchEvent(r)
            }(t, e);
            var r = this.handlers[t] && this.handlers[t].slice();
            if (r && r.length) {
              e.type = t, e.preventDefault = function() {
                e.srcEvent.preventDefault()
              };
              for (var n = 0; n < r.length;) r[n](e), n++
            }
          },
          destroy: function() {
            this.element && oe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, l(se, {
          INPUT_START: G,
          INPUT_MOVE: $,
          INPUT_END: H,
          INPUT_CANCEL: W,
          STATE_POSSIBLE: Nt,
          STATE_BEGAN: Gt,
          STATE_CHANGED: $t,
          STATE_ENDED: Ht,
          STATE_RECOGNIZED: Wt,
          STATE_CANCELLED: qt,
          STATE_FAILED: Yt,
          DIRECTION_NONE: q,
          DIRECTION_LEFT: Y,
          DIRECTION_RIGHT: X,
          DIRECTION_UP: U,
          DIRECTION_DOWN: Z,
          DIRECTION_HORIZONTAL: K,
          DIRECTION_VERTICAL: J,
          DIRECTION_ALL: Q,
          Manager: ae,
          Input: rt,
          TouchAction: jt,
          TouchInput: Pt,
          MouseInput: ft,
          PointerEventInput: yt,
          TouchMouseInput: Tt,
          SingleTouchInput: _t,
          Recognizer: Xt,
          AttrRecognizer: Jt,
          Tap: ie,
          Pan: Qt,
          Swipe: ne,
          Pinch: te,
          Rotate: re,
          Press: ee,
          on: w,
          off: C,
          each: v,
          merge: _,
          extend: b,
          assign: l,
          inherit: x,
          bindFn: E,
          prefixed: F
        }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = se, (n = function() {
          return se
        }.call(e, r, e, t)) === o || (t.exports = n)
      }(window, document)
    },
    948: function(t, e, r) {
      var n;
      t = r.nmd(t),
        function() {
          var i, s = "Expected a function",
            a = "__lodash_hash_undefined__",
            o = "__lodash_placeholder__",
            l = 32,
            h = 128,
            p = 1 / 0,
            u = 9007199254740991,
            c = NaN,
            f = 4294967295,
            d = [
              ["ary", h],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", l],
              ["partialRight", 64],
              ["rearg", 256]
            ],
            m = "[object Arguments]",
            g = "[object Array]",
            v = "[object Boolean]",
            y = "[object Date]",
            b = "[object Error]",
            _ = "[object Function]",
            x = "[object GeneratorFunction]",
            E = "[object Map]",
            S = "[object Number]",
            P = "[object Object]",
            w = "[object Promise]",
            C = "[object RegExp]",
            T = "[object Set]",
            A = "[object String]",
            M = "[object Symbol]",
            k = "[object WeakMap]",
            D = "[object ArrayBuffer]",
            I = "[object DataView]",
            F = "[object Float32Array]",
            O = "[object Float64Array]",
            R = "[object Int8Array]",
            L = "[object Int16Array]",
            B = "[object Int32Array]",
            V = "[object Uint8Array]",
            z = "[object Uint8ClampedArray]",
            j = "[object Uint16Array]",
            N = "[object Uint32Array]",
            G = /\b__p \+= '';/g,
            $ = /\b(__p \+=) '' \+/g,
            H = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            W = /&(?:amp|lt|gt|quot|#39);/g,
            q = /[&<>"']/g,
            Y = RegExp(W.source),
            X = RegExp(q.source),
            U = /<%-([\s\S]+?)%>/g,
            Z = /<%([\s\S]+?)%>/g,
            K = /<%=([\s\S]+?)%>/g,
            J = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Q = /^\w*$/,
            tt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            et = /[\\^$.*+?()[\]{}|]/g,
            rt = RegExp(et.source),
            nt = /^\s+/,
            it = /\s/,
            st = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            at = /\{\n\/\* \[wrapped with (.+)\] \*/,
            ot = /,? & /,
            lt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            ht = /[()=,{}\[\]\/\s]/,
            pt = /\\(\\)?/g,
            ut = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            ct = /\w*$/,
            ft = /^[-+]0x[0-9a-f]+$/i,
            dt = /^0b[01]+$/i,
            mt = /^\[object .+?Constructor\]$/,
            gt = /^0o[0-7]+$/i,
            vt = /^(?:0|[1-9]\d*)$/,
            yt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            bt = /($^)/,
            _t = /['\n\r\u2028\u2029\\]/g,
            xt = "\\ud800-\\udfff",
            Et = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            St = "\\u2700-\\u27bf",
            Pt = "a-z\\xdf-\\xf6\\xf8-\\xff",
            wt = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Ct = "\\ufe0e\\ufe0f",
            Tt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            At = "[" + xt + "]",
            Mt = "[" + Tt + "]",
            kt = "[" + Et + "]",
            Dt = "\\d+",
            It = "[" + St + "]",
            Ft = "[" + Pt + "]",
            Ot = "[^" + xt + Tt + Dt + St + Pt + wt + "]",
            Rt = "\\ud83c[\\udffb-\\udfff]",
            Lt = "[^" + xt + "]",
            Bt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Vt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            zt = "[" + wt + "]",
            jt = "\\u200d",
            Nt = "(?:" + Ft + "|" + Ot + ")",
            Gt = "(?:" + zt + "|" + Ot + ")",
            $t = "(?:['’](?:d|ll|m|re|s|t|ve))?",
            Ht = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
            Wt = "(?:" + kt + "|" + Rt + ")?",
            qt = "[" + Ct + "]?",
            Yt = qt + Wt + "(?:" + jt + "(?:" + [Lt, Bt, Vt].join("|") + ")" + qt + Wt + ")*",
            Xt = "(?:" + [It, Bt, Vt].join("|") + ")" + Yt,
            Ut = "(?:" + [Lt + kt + "?", kt, Bt, Vt, At].join("|") + ")",
            Zt = RegExp("['’]", "g"),
            Kt = RegExp(kt, "g"),
            Jt = RegExp(Rt + "(?=" + Rt + ")|" + Ut + Yt, "g"),
            Qt = RegExp([zt + "?" + Ft + "+" + $t + "(?=" + [Mt, zt, "$"].join("|") + ")", Gt + "+" + Ht + "(?=" + [Mt, zt + Nt, "$"].join("|") + ")", zt + "?" + Nt + "+" + $t, zt + "+" + Ht, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Dt, Xt].join("|"), "g"),
            te = RegExp("[" + jt + xt + Et + Ct + "]"),
            ee = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            re = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            ne = -1,
            ie = {};
          ie[F] = ie[O] = ie[R] = ie[L] = ie[B] = ie[V] = ie[z] = ie[j] = ie[N] = !0, ie[m] = ie[g] = ie[D] = ie[v] = ie[I] = ie[y] = ie[b] = ie[_] = ie[E] = ie[S] = ie[P] = ie[C] = ie[T] = ie[A] = ie[k] = !1;
          var se = {};
          se[m] = se[g] = se[D] = se[I] = se[v] = se[y] = se[F] = se[O] = se[R] = se[L] = se[B] = se[E] = se[S] = se[P] = se[C] = se[T] = se[A] = se[M] = se[V] = se[z] = se[j] = se[N] = !0, se[b] = se[_] = se[k] = !1;
          var ae = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029"
            },
            oe = parseFloat,
            le = parseInt,
            he = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
            pe = "object" == typeof self && self && self.Object === Object && self,
            ue = he || pe || Function("return this")(),
            ce = e && !e.nodeType && e,
            fe = ce && t && !t.nodeType && t,
            de = fe && fe.exports === ce,
            me = de && he.process,
            ge = function() {
              try {
                return fe && fe.require && fe.require("util").types || me && me.binding && me.binding("util")
              } catch (t) {}
            }(),
            ve = ge && ge.isArrayBuffer,
            ye = ge && ge.isDate,
            be = ge && ge.isMap,
            _e = ge && ge.isRegExp,
            xe = ge && ge.isSet,
            Ee = ge && ge.isTypedArray;

          function Se(t, e, r) {
            switch (r.length) {
              case 0:
                return t.call(e);
              case 1:
                return t.call(e, r[0]);
              case 2:
                return t.call(e, r[0], r[1]);
              case 3:
                return t.call(e, r[0], r[1], r[2])
            }
            return t.apply(e, r)
          }

          function Pe(t, e, r, n) {
            for (var i = -1, s = null == t ? 0 : t.length; ++i < s;) {
              var a = t[i];
              e(n, a, r(a), t)
            }
            return n
          }

          function we(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
            return t
          }

          function Ce(t, e) {
            for (var r = null == t ? 0 : t.length; r-- && !1 !== e(t[r], r, t););
            return t
          }

          function Te(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
              if (!e(t[r], r, t)) return !1;
            return !0
          }

          function Ae(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length, i = 0, s = []; ++r < n;) {
              var a = t[r];
              e(a, r, t) && (s[i++] = a)
            }
            return s
          }

          function Me(t, e) {
            return !(null == t || !t.length) && ze(t, e, 0) > -1
          }

          function ke(t, e, r) {
            for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
              if (r(e, t[n])) return !0;
            return !1
          }

          function De(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t);
            return i
          }

          function Ie(t, e) {
            for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];
            return t
          }

          function Fe(t, e, r, n) {
            var i = -1,
              s = null == t ? 0 : t.length;
            for (n && s && (r = t[++i]); ++i < s;) r = e(r, t[i], i, t);
            return r
          }

          function Oe(t, e, r, n) {
            var i = null == t ? 0 : t.length;
            for (n && i && (r = t[--i]); i--;) r = e(r, t[i], i, t);
            return r
          }

          function Re(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
              if (e(t[r], r, t)) return !0;
            return !1
          }
          var Le = $e("length");

          function Be(t, e, r) {
            var n;
            return r(t, (function(t, r, i) {
              if (e(t, r, i)) return n = r, !1
            })), n
          }

          function Ve(t, e, r, n) {
            for (var i = t.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i;)
              if (e(t[s], s, t)) return s;
            return -1
          }

          function ze(t, e, r) {
            return e == e ? function(t, e, r) {
              for (var n = r - 1, i = t.length; ++n < i;)
                if (t[n] === e) return n;
              return -1
            }(t, e, r) : Ve(t, Ne, r)
          }

          function je(t, e, r, n) {
            for (var i = r - 1, s = t.length; ++i < s;)
              if (n(t[i], e)) return i;
            return -1
          }

          function Ne(t) {
            return t != t
          }

          function Ge(t, e) {
            var r = null == t ? 0 : t.length;
            return r ? qe(t, e) / r : c
          }

          function $e(t) {
            return function(e) {
              return null == e ? i : e[t]
            }
          }

          function He(t) {
            return function(e) {
              return null == t ? i : t[e]
            }
          }

          function We(t, e, r, n, i) {
            return i(t, (function(t, i, s) {
              r = n ? (n = !1, t) : e(r, t, i, s)
            })), r
          }

          function qe(t, e) {
            for (var r, n = -1, s = t.length; ++n < s;) {
              var a = e(t[n]);
              a !== i && (r = r === i ? a : r + a)
            }
            return r
          }

          function Ye(t, e) {
            for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
            return n
          }

          function Xe(t) {
            return t ? t.slice(0, ur(t) + 1).replace(nt, "") : t
          }

          function Ue(t) {
            return function(e) {
              return t(e)
            }
          }

          function Ze(t, e) {
            return De(e, (function(e) {
              return t[e]
            }))
          }

          function Ke(t, e) {
            return t.has(e)
          }

          function Je(t, e) {
            for (var r = -1, n = t.length; ++r < n && ze(e, t[r], 0) > -1;);
            return r
          }

          function Qe(t, e) {
            for (var r = t.length; r-- && ze(e, t[r], 0) > -1;);
            return r
          }
          var tr = He({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s"
            }),
            er = He({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;"
            });

          function rr(t) {
            return "\\" + ae[t]
          }

          function nr(t) {
            return te.test(t)
          }

          function ir(t) {
            var e = -1,
              r = Array(t.size);
            return t.forEach((function(t, n) {
              r[++e] = [n, t]
            })), r
          }

          function sr(t, e) {
            return function(r) {
              return t(e(r))
            }
          }

          function ar(t, e) {
            for (var r = -1, n = t.length, i = 0, s = []; ++r < n;) {
              var a = t[r];
              a !== e && a !== o || (t[r] = o, s[i++] = r)
            }
            return s
          }

          function or(t) {
            var e = -1,
              r = Array(t.size);
            return t.forEach((function(t) {
              r[++e] = t
            })), r
          }

          function lr(t) {
            var e = -1,
              r = Array(t.size);
            return t.forEach((function(t) {
              r[++e] = [t, t]
            })), r
          }

          function hr(t) {
            return nr(t) ? function(t) {
              for (var e = Jt.lastIndex = 0; Jt.test(t);) ++e;
              return e
            }(t) : Le(t)
          }

          function pr(t) {
            return nr(t) ? function(t) {
              return t.match(Jt) || []
            }(t) : function(t) {
              return t.split("")
            }(t)
          }

          function ur(t) {
            for (var e = t.length; e-- && it.test(t.charAt(e)););
            return e
          }
          var cr = He({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'"
            }),
            fr = function t(e) {
              var r, n = (e = null == e ? ue : fr.defaults(ue.Object(), e, fr.pick(ue, re))).Array,
                it = e.Date,
                xt = e.Error,
                Et = e.Function,
                St = e.Math,
                Pt = e.Object,
                wt = e.RegExp,
                Ct = e.String,
                Tt = e.TypeError,
                At = n.prototype,
                Mt = Et.prototype,
                kt = Pt.prototype,
                Dt = e["__core-js_shared__"],
                It = Mt.toString,
                Ft = kt.hasOwnProperty,
                Ot = 0,
                Rt = (r = /[^.]+$/.exec(Dt && Dt.keys && Dt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
                Lt = kt.toString,
                Bt = It.call(Pt),
                Vt = ue._,
                zt = wt("^" + It.call(Ft).replace(et, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                jt = de ? e.Buffer : i,
                Nt = e.Symbol,
                Gt = e.Uint8Array,
                $t = jt ? jt.allocUnsafe : i,
                Ht = sr(Pt.getPrototypeOf, Pt),
                Wt = Pt.create,
                qt = kt.propertyIsEnumerable,
                Yt = At.splice,
                Xt = Nt ? Nt.isConcatSpreadable : i,
                Ut = Nt ? Nt.iterator : i,
                Jt = Nt ? Nt.toStringTag : i,
                te = function() {
                  try {
                    var t = ls(Pt, "defineProperty");
                    return t({}, "", {}), t
                  } catch (t) {}
                }(),
                ae = e.clearTimeout !== ue.clearTimeout && e.clearTimeout,
                he = it && it.now !== ue.Date.now && it.now,
                pe = e.setTimeout !== ue.setTimeout && e.setTimeout,
                ce = St.ceil,
                fe = St.floor,
                me = Pt.getOwnPropertySymbols,
                ge = jt ? jt.isBuffer : i,
                Le = e.isFinite,
                He = At.join,
                dr = sr(Pt.keys, Pt),
                mr = St.max,
                gr = St.min,
                vr = it.now,
                yr = e.parseInt,
                br = St.random,
                _r = At.reverse,
                xr = ls(e, "DataView"),
                Er = ls(e, "Map"),
                Sr = ls(e, "Promise"),
                Pr = ls(e, "Set"),
                wr = ls(e, "WeakMap"),
                Cr = ls(Pt, "create"),
                Tr = wr && new wr,
                Ar = {},
                Mr = Ls(xr),
                kr = Ls(Er),
                Dr = Ls(Sr),
                Ir = Ls(Pr),
                Fr = Ls(wr),
                Or = Nt ? Nt.prototype : i,
                Rr = Or ? Or.valueOf : i,
                Lr = Or ? Or.toString : i;

              function Br(t) {
                if (Qa(t) && !Ga(t) && !(t instanceof Nr)) {
                  if (t instanceof jr) return t;
                  if (Ft.call(t, "__wrapped__")) return Bs(t)
                }
                return new jr(t)
              }
              var Vr = function() {
                function t() {}
                return function(e) {
                  if (!Ja(e)) return {};
                  if (Wt) return Wt(e);
                  t.prototype = e;
                  var r = new t;
                  return t.prototype = i, r
                }
              }();

              function zr() {}

              function jr(t, e) {
                this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = i
              }

              function Nr(t) {
                this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = f, this.__views__ = []
              }

              function Gr(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                  var n = t[e];
                  this.set(n[0], n[1])
                }
              }

              function $r(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                  var n = t[e];
                  this.set(n[0], n[1])
                }
              }

              function Hr(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                  var n = t[e];
                  this.set(n[0], n[1])
                }
              }

              function Wr(t) {
                var e = -1,
                  r = null == t ? 0 : t.length;
                for (this.__data__ = new Hr; ++e < r;) this.add(t[e])
              }

              function qr(t) {
                var e = this.__data__ = new $r(t);
                this.size = e.size
              }

              function Yr(t, e) {
                var r = Ga(t),
                  n = !r && Na(t),
                  i = !r && !n && qa(t),
                  s = !r && !n && !i && oo(t),
                  a = r || n || i || s,
                  o = a ? Ye(t.length, Ct) : [],
                  l = o.length;
                for (var h in t) !e && !Ft.call(t, h) || a && ("length" == h || i && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || ms(h, l)) || o.push(h);
                return o
              }

              function Xr(t) {
                var e = t.length;
                return e ? t[Wn(0, e - 1)] : i
              }

              function Ur(t, e) {
                return Ds(Ci(t), sn(e, 0, t.length))
              }

              function Zr(t) {
                return Ds(Ci(t))
              }

              function Kr(t, e, r) {
                (r !== i && !Va(t[e], r) || r === i && !(e in t)) && rn(t, e, r)
              }

              function Jr(t, e, r) {
                var n = t[e];
                Ft.call(t, e) && Va(n, r) && (r !== i || e in t) || rn(t, e, r)
              }

              function Qr(t, e) {
                for (var r = t.length; r--;)
                  if (Va(t[r][0], e)) return r;
                return -1
              }

              function tn(t, e, r, n) {
                return pn(t, (function(t, i, s) {
                  e(n, t, r(t), s)
                })), n
              }

              function en(t, e) {
                return t && Ti(e, ko(e), t)
              }

              function rn(t, e, r) {
                "__proto__" == e && te ? te(t, e, {
                  configurable: !0,
                  enumerable: !0,
                  value: r,
                  writable: !0
                }) : t[e] = r
              }

              function nn(t, e) {
                for (var r = -1, s = e.length, a = n(s), o = null == t; ++r < s;) a[r] = o ? i : wo(t, e[r]);
                return a
              }

              function sn(t, e, r) {
                return t == t && (r !== i && (t = t <= r ? t : r), e !== i && (t = t >= e ? t : e)), t
              }

              function an(t, e, r, n, s, a) {
                var o, l = 1 & e,
                  h = 2 & e,
                  p = 4 & e;
                if (r && (o = s ? r(t, n, s, a) : r(t)), o !== i) return o;
                if (!Ja(t)) return t;
                var u = Ga(t);
                if (u) {
                  if (o = function(t) {
                      var e = t.length,
                        r = new t.constructor(e);
                      return e && "string" == typeof t[0] && Ft.call(t, "index") && (r.index = t.index, r.input = t.input), r
                    }(t), !l) return Ci(t, o)
                } else {
                  var c = us(t),
                    f = c == _ || c == x;
                  if (qa(t)) return _i(t, l);
                  if (c == P || c == m || f && !s) {
                    if (o = h || f ? {} : fs(t), !l) return h ? function(t, e) {
                      return Ti(t, ps(t), e)
                    }(t, function(t, e) {
                      return t && Ti(e, Do(e), t)
                    }(o, t)) : function(t, e) {
                      return Ti(t, hs(t), e)
                    }(t, en(o, t))
                  } else {
                    if (!se[c]) return s ? t : {};
                    o = function(t, e, r) {
                      var n, i = t.constructor;
                      switch (e) {
                        case D:
                          return xi(t);
                        case v:
                        case y:
                          return new i(+t);
                        case I:
                          return function(t, e) {
                            var r = e ? xi(t.buffer) : t.buffer;
                            return new t.constructor(r, t.byteOffset, t.byteLength)
                          }(t, r);
                        case F:
                        case O:
                        case R:
                        case L:
                        case B:
                        case V:
                        case z:
                        case j:
                        case N:
                          return Ei(t, r);
                        case E:
                          return new i;
                        case S:
                        case A:
                          return new i(t);
                        case C:
                          return function(t) {
                            var e = new t.constructor(t.source, ct.exec(t));
                            return e.lastIndex = t.lastIndex, e
                          }(t);
                        case T:
                          return new i;
                        case M:
                          return n = t, Rr ? Pt(Rr.call(n)) : {}
                      }
                    }(t, c, l)
                  }
                }
                a || (a = new qr);
                var d = a.get(t);
                if (d) return d;
                a.set(t, o), io(t) ? t.forEach((function(n) {
                  o.add(an(n, e, r, n, t, a))
                })) : to(t) && t.forEach((function(n, i) {
                  o.set(i, an(n, e, r, i, t, a))
                }));
                var g = u ? i : (p ? h ? es : ts : h ? Do : ko)(t);
                return we(g || t, (function(n, i) {
                  g && (n = t[i = n]), Jr(o, i, an(n, e, r, i, t, a))
                })), o
              }

              function on(t, e, r) {
                var n = r.length;
                if (null == t) return !n;
                for (t = Pt(t); n--;) {
                  var s = r[n],
                    a = e[s],
                    o = t[s];
                  if (o === i && !(s in t) || !a(o)) return !1
                }
                return !0
              }

              function ln(t, e, r) {
                if ("function" != typeof t) throw new Tt(s);
                return Ts((function() {
                  t.apply(i, r)
                }), e)
              }

              function hn(t, e, r, n) {
                var i = -1,
                  s = Me,
                  a = !0,
                  o = t.length,
                  l = [],
                  h = e.length;
                if (!o) return l;
                r && (e = De(e, Ue(r))), n ? (s = ke, a = !1) : e.length >= 200 && (s = Ke, a = !1, e = new Wr(e));
                t: for (; ++i < o;) {
                  var p = t[i],
                    u = null == r ? p : r(p);
                  if (p = n || 0 !== p ? p : 0, a && u == u) {
                    for (var c = h; c--;)
                      if (e[c] === u) continue t;
                    l.push(p)
                  } else s(e, u, n) || l.push(p)
                }
                return l
              }
              Br.templateSettings = {
                escape: U,
                evaluate: Z,
                interpolate: K,
                variable: "",
                imports: {
                  _: Br
                }
              }, Br.prototype = zr.prototype, Br.prototype.constructor = Br, jr.prototype = Vr(zr.prototype), jr.prototype.constructor = jr, Nr.prototype = Vr(zr.prototype), Nr.prototype.constructor = Nr, Gr.prototype.clear = function() {
                this.__data__ = Cr ? Cr(null) : {}, this.size = 0
              }, Gr.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
              }, Gr.prototype.get = function(t) {
                var e = this.__data__;
                if (Cr) {
                  var r = e[t];
                  return r === a ? i : r
                }
                return Ft.call(e, t) ? e[t] : i
              }, Gr.prototype.has = function(t) {
                var e = this.__data__;
                return Cr ? e[t] !== i : Ft.call(e, t)
              }, Gr.prototype.set = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = Cr && e === i ? a : e, this
              }, $r.prototype.clear = function() {
                this.__data__ = [], this.size = 0
              }, $r.prototype.delete = function(t) {
                var e = this.__data__,
                  r = Qr(e, t);
                return !(r < 0 || (r == e.length - 1 ? e.pop() : Yt.call(e, r, 1), --this.size, 0))
              }, $r.prototype.get = function(t) {
                var e = this.__data__,
                  r = Qr(e, t);
                return r < 0 ? i : e[r][1]
              }, $r.prototype.has = function(t) {
                return Qr(this.__data__, t) > -1
              }, $r.prototype.set = function(t, e) {
                var r = this.__data__,
                  n = Qr(r, t);
                return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
              }, Hr.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                  hash: new Gr,
                  map: new(Er || $r),
                  string: new Gr
                }
              }, Hr.prototype.delete = function(t) {
                var e = as(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
              }, Hr.prototype.get = function(t) {
                return as(this, t).get(t)
              }, Hr.prototype.has = function(t) {
                return as(this, t).has(t)
              }, Hr.prototype.set = function(t, e) {
                var r = as(this, t),
                  n = r.size;
                return r.set(t, e), this.size += r.size == n ? 0 : 1, this
              }, Wr.prototype.add = Wr.prototype.push = function(t) {
                return this.__data__.set(t, a), this
              }, Wr.prototype.has = function(t) {
                return this.__data__.has(t)
              }, qr.prototype.clear = function() {
                this.__data__ = new $r, this.size = 0
              }, qr.prototype.delete = function(t) {
                var e = this.__data__,
                  r = e.delete(t);
                return this.size = e.size, r
              }, qr.prototype.get = function(t) {
                return this.__data__.get(t)
              }, qr.prototype.has = function(t) {
                return this.__data__.has(t)
              }, qr.prototype.set = function(t, e) {
                var r = this.__data__;
                if (r instanceof $r) {
                  var n = r.__data__;
                  if (!Er || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
                  r = this.__data__ = new Hr(n)
                }
                return r.set(t, e), this.size = r.size, this
              };
              var pn = ki(yn),
                un = ki(bn, !0);

              function cn(t, e) {
                var r = !0;
                return pn(t, (function(t, n, i) {
                  return r = !!e(t, n, i)
                })), r
              }

              function fn(t, e, r) {
                for (var n = -1, s = t.length; ++n < s;) {
                  var a = t[n],
                    o = e(a);
                  if (null != o && (l === i ? o == o && !ao(o) : r(o, l))) var l = o,
                    h = a
                }
                return h
              }

              function dn(t, e) {
                var r = [];
                return pn(t, (function(t, n, i) {
                  e(t, n, i) && r.push(t)
                })), r
              }

              function mn(t, e, r, n, i) {
                var s = -1,
                  a = t.length;
                for (r || (r = ds), i || (i = []); ++s < a;) {
                  var o = t[s];
                  e > 0 && r(o) ? e > 1 ? mn(o, e - 1, r, n, i) : Ie(i, o) : n || (i[i.length] = o)
                }
                return i
              }
              var gn = Di(),
                vn = Di(!0);

              function yn(t, e) {
                return t && gn(t, e, ko)
              }

              function bn(t, e) {
                return t && vn(t, e, ko)
              }

              function _n(t, e) {
                return Ae(e, (function(e) {
                  return Ua(t[e])
                }))
              }

              function xn(t, e) {
                for (var r = 0, n = (e = gi(e, t)).length; null != t && r < n;) t = t[Rs(e[r++])];
                return r && r == n ? t : i
              }

              function En(t, e, r) {
                var n = e(t);
                return Ga(t) ? n : Ie(n, r(t))
              }

              function Sn(t) {
                return null == t ? t === i ? "[object Undefined]" : "[object Null]" : Jt && Jt in Pt(t) ? function(t) {
                  var e = Ft.call(t, Jt),
                    r = t[Jt];
                  try {
                    t[Jt] = i;
                    var n = !0
                  } catch (t) {}
                  var s = Lt.call(t);
                  return n && (e ? t[Jt] = r : delete t[Jt]), s
                }(t) : function(t) {
                  return Lt.call(t)
                }(t)
              }

              function Pn(t, e) {
                return t > e
              }

              function wn(t, e) {
                return null != t && Ft.call(t, e)
              }

              function Cn(t, e) {
                return null != t && e in Pt(t)
              }

              function Tn(t, e, r) {
                for (var s = r ? ke : Me, a = t[0].length, o = t.length, l = o, h = n(o), p = 1 / 0, u = []; l--;) {
                  var c = t[l];
                  l && e && (c = De(c, Ue(e))), p = gr(c.length, p), h[l] = !r && (e || a >= 120 && c.length >= 120) ? new Wr(l && c) : i
                }
                c = t[0];
                var f = -1,
                  d = h[0];
                t: for (; ++f < a && u.length < p;) {
                  var m = c[f],
                    g = e ? e(m) : m;
                  if (m = r || 0 !== m ? m : 0, !(d ? Ke(d, g) : s(u, g, r))) {
                    for (l = o; --l;) {
                      var v = h[l];
                      if (!(v ? Ke(v, g) : s(t[l], g, r))) continue t
                    }
                    d && d.push(g), u.push(m)
                  }
                }
                return u
              }

              function An(t, e, r) {
                var n = null == (t = Ps(t, e = gi(e, t))) ? t : t[Rs(Xs(e))];
                return null == n ? i : Se(n, t, r)
              }

              function Mn(t) {
                return Qa(t) && Sn(t) == m
              }

              function kn(t, e, r, n, s) {
                return t === e || (null == t || null == e || !Qa(t) && !Qa(e) ? t != t && e != e : function(t, e, r, n, s, a) {
                  var o = Ga(t),
                    l = Ga(e),
                    h = o ? g : us(t),
                    p = l ? g : us(e),
                    u = (h = h == m ? P : h) == P,
                    c = (p = p == m ? P : p) == P,
                    f = h == p;
                  if (f && qa(t)) {
                    if (!qa(e)) return !1;
                    o = !0, u = !1
                  }
                  if (f && !u) return a || (a = new qr), o || oo(t) ? Ji(t, e, r, n, s, a) : function(t, e, r, n, i, s, a) {
                    switch (r) {
                      case I:
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                        t = t.buffer, e = e.buffer;
                      case D:
                        return !(t.byteLength != e.byteLength || !s(new Gt(t), new Gt(e)));
                      case v:
                      case y:
                      case S:
                        return Va(+t, +e);
                      case b:
                        return t.name == e.name && t.message == e.message;
                      case C:
                      case A:
                        return t == e + "";
                      case E:
                        var o = ir;
                      case T:
                        var l = 1 & n;
                        if (o || (o = or), t.size != e.size && !l) return !1;
                        var h = a.get(t);
                        if (h) return h == e;
                        n |= 2, a.set(t, e);
                        var p = Ji(o(t), o(e), n, i, s, a);
                        return a.delete(t), p;
                      case M:
                        if (Rr) return Rr.call(t) == Rr.call(e)
                    }
                    return !1
                  }(t, e, h, r, n, s, a);
                  if (!(1 & r)) {
                    var d = u && Ft.call(t, "__wrapped__"),
                      _ = c && Ft.call(e, "__wrapped__");
                    if (d || _) {
                      var x = d ? t.value() : t,
                        w = _ ? e.value() : e;
                      return a || (a = new qr), s(x, w, r, n, a)
                    }
                  }
                  return !!f && (a || (a = new qr), function(t, e, r, n, s, a) {
                    var o = 1 & r,
                      l = ts(t),
                      h = l.length;
                    if (h != ts(e).length && !o) return !1;
                    for (var p = h; p--;) {
                      var u = l[p];
                      if (!(o ? u in e : Ft.call(e, u))) return !1
                    }
                    var c = a.get(t),
                      f = a.get(e);
                    if (c && f) return c == e && f == t;
                    var d = !0;
                    a.set(t, e), a.set(e, t);
                    for (var m = o; ++p < h;) {
                      var g = t[u = l[p]],
                        v = e[u];
                      if (n) var y = o ? n(v, g, u, e, t, a) : n(g, v, u, t, e, a);
                      if (!(y === i ? g === v || s(g, v, r, n, a) : y)) {
                        d = !1;
                        break
                      }
                      m || (m = "constructor" == u)
                    }
                    if (d && !m) {
                      var b = t.constructor,
                        _ = e.constructor;
                      b == _ || !("constructor" in t) || !("constructor" in e) || "function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _ || (d = !1)
                    }
                    return a.delete(t), a.delete(e), d
                  }(t, e, r, n, s, a))
                }(t, e, r, n, kn, s))
              }

              function Dn(t, e, r, n) {
                var s = r.length,
                  a = s,
                  o = !n;
                if (null == t) return !a;
                for (t = Pt(t); s--;) {
                  var l = r[s];
                  if (o && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
                }
                for (; ++s < a;) {
                  var h = (l = r[s])[0],
                    p = t[h],
                    u = l[1];
                  if (o && l[2]) {
                    if (p === i && !(h in t)) return !1
                  } else {
                    var c = new qr;
                    if (n) var f = n(p, u, h, t, e, c);
                    if (!(f === i ? kn(u, p, 3, n, c) : f)) return !1
                  }
                }
                return !0
              }

              function In(t) {
                return !(!Ja(t) || (e = t, Rt && Rt in e)) && (Ua(t) ? zt : mt).test(Ls(t));
                var e
              }

              function Fn(t) {
                return "function" == typeof t ? t : null == t ? rl : "object" == typeof t ? Ga(t) ? Vn(t[0], t[1]) : Bn(t) : ul(t)
              }

              function On(t) {
                if (!_s(t)) return dr(t);
                var e = [];
                for (var r in Pt(t)) Ft.call(t, r) && "constructor" != r && e.push(r);
                return e
              }

              function Rn(t, e) {
                return t < e
              }

              function Ln(t, e) {
                var r = -1,
                  i = Ha(t) ? n(t.length) : [];
                return pn(t, (function(t, n, s) {
                  i[++r] = e(t, n, s)
                })), i
              }

              function Bn(t) {
                var e = os(t);
                return 1 == e.length && e[0][2] ? Es(e[0][0], e[0][1]) : function(r) {
                  return r === t || Dn(r, t, e)
                }
              }

              function Vn(t, e) {
                return vs(t) && xs(e) ? Es(Rs(t), e) : function(r) {
                  var n = wo(r, t);
                  return n === i && n === e ? Co(r, t) : kn(e, n, 3)
                }
              }

              function zn(t, e, r, n, s) {
                t !== e && gn(e, (function(a, o) {
                  if (s || (s = new qr), Ja(a)) ! function(t, e, r, n, s, a, o) {
                    var l = ws(t, r),
                      h = ws(e, r),
                      p = o.get(h);
                    if (p) Kr(t, r, p);
                    else {
                      var u = a ? a(l, h, r + "", t, e, o) : i,
                        c = u === i;
                      if (c) {
                        var f = Ga(h),
                          d = !f && qa(h),
                          m = !f && !d && oo(h);
                        u = h, f || d || m ? Ga(l) ? u = l : Wa(l) ? u = Ci(l) : d ? (c = !1, u = _i(h, !0)) : m ? (c = !1, u = Ei(h, !0)) : u = [] : ro(h) || Na(h) ? (u = l, Na(l) ? u = go(l) : Ja(l) && !Ua(l) || (u = fs(h))) : c = !1
                      }
                      c && (o.set(h, u), s(u, h, n, a, o), o.delete(h)), Kr(t, r, u)
                    }
                  }(t, e, o, r, zn, n, s);
                  else {
                    var l = n ? n(ws(t, o), a, o + "", t, e, s) : i;
                    l === i && (l = a), Kr(t, o, l)
                  }
                }), Do)
              }

              function jn(t, e) {
                var r = t.length;
                if (r) return ms(e += e < 0 ? r : 0, r) ? t[e] : i
              }

              function Nn(t, e, r) {
                e = e.length ? De(e, (function(t) {
                  return Ga(t) ? function(e) {
                    return xn(e, 1 === t.length ? t[0] : t)
                  } : t
                })) : [rl];
                var n = -1;
                e = De(e, Ue(ss()));
                var i = Ln(t, (function(t, r, i) {
                  var s = De(e, (function(e) {
                    return e(t)
                  }));
                  return {
                    criteria: s,
                    index: ++n,
                    value: t
                  }
                }));
                return function(t, e) {
                  var n = t.length;
                  for (t.sort((function(t, e) {
                      return function(t, e, r) {
                        for (var n = -1, i = t.criteria, s = e.criteria, a = i.length, o = r.length; ++n < a;) {
                          var l = Si(i[n], s[n]);
                          if (l) return n >= o ? l : l * ("desc" == r[n] ? -1 : 1)
                        }
                        return t.index - e.index
                      }(t, e, r)
                    })); n--;) t[n] = t[n].value;
                  return t
                }(i)
              }

              function Gn(t, e, r) {
                for (var n = -1, i = e.length, s = {}; ++n < i;) {
                  var a = e[n],
                    o = xn(t, a);
                  r(o, a) && Zn(s, gi(a, t), o)
                }
                return s
              }

              function $n(t, e, r, n) {
                var i = n ? je : ze,
                  s = -1,
                  a = e.length,
                  o = t;
                for (t === e && (e = Ci(e)), r && (o = De(t, Ue(r))); ++s < a;)
                  for (var l = 0, h = e[s], p = r ? r(h) : h;
                    (l = i(o, p, l, n)) > -1;) o !== t && Yt.call(o, l, 1), Yt.call(t, l, 1);
                return t
              }

              function Hn(t, e) {
                for (var r = t ? e.length : 0, n = r - 1; r--;) {
                  var i = e[r];
                  if (r == n || i !== s) {
                    var s = i;
                    ms(i) ? Yt.call(t, i, 1) : li(t, i)
                  }
                }
                return t
              }

              function Wn(t, e) {
                return t + fe(br() * (e - t + 1))
              }

              function qn(t, e) {
                var r = "";
                if (!t || e < 1 || e > u) return r;
                do {
                  e % 2 && (r += t), (e = fe(e / 2)) && (t += t)
                } while (e);
                return r
              }

              function Yn(t, e) {
                return As(Ss(t, e, rl), t + "")
              }

              function Xn(t) {
                return Xr(zo(t))
              }

              function Un(t, e) {
                var r = zo(t);
                return Ds(r, sn(e, 0, r.length))
              }

              function Zn(t, e, r, n) {
                if (!Ja(t)) return t;
                for (var s = -1, a = (e = gi(e, t)).length, o = a - 1, l = t; null != l && ++s < a;) {
                  var h = Rs(e[s]),
                    p = r;
                  if ("__proto__" === h || "constructor" === h || "prototype" === h) return t;
                  if (s != o) {
                    var u = l[h];
                    (p = n ? n(u, h, l) : i) === i && (p = Ja(u) ? u : ms(e[s + 1]) ? [] : {})
                  }
                  Jr(l, h, p), l = l[h]
                }
                return t
              }
              var Kn = Tr ? function(t, e) {
                  return Tr.set(t, e), t
                } : rl,
                Jn = te ? function(t, e) {
                  return te(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Qo(e),
                    writable: !0
                  })
                } : rl;

              function Qn(t) {
                return Ds(zo(t))
              }

              function ti(t, e, r) {
                var i = -1,
                  s = t.length;
                e < 0 && (e = -e > s ? 0 : s + e), (r = r > s ? s : r) < 0 && (r += s), s = e > r ? 0 : r - e >>> 0, e >>>= 0;
                for (var a = n(s); ++i < s;) a[i] = t[i + e];
                return a
              }

              function ei(t, e) {
                var r;
                return pn(t, (function(t, n, i) {
                  return !(r = e(t, n, i))
                })), !!r
              }

              function ri(t, e, r) {
                var n = 0,
                  i = null == t ? n : t.length;
                if ("number" == typeof e && e == e && i <= 2147483647) {
                  for (; n < i;) {
                    var s = n + i >>> 1,
                      a = t[s];
                    null !== a && !ao(a) && (r ? a <= e : a < e) ? n = s + 1 : i = s
                  }
                  return i
                }
                return ni(t, e, rl, r)
              }

              function ni(t, e, r, n) {
                var s = 0,
                  a = null == t ? 0 : t.length;
                if (0 === a) return 0;
                for (var o = (e = r(e)) != e, l = null === e, h = ao(e), p = e === i; s < a;) {
                  var u = fe((s + a) / 2),
                    c = r(t[u]),
                    f = c !== i,
                    d = null === c,
                    m = c == c,
                    g = ao(c);
                  if (o) var v = n || m;
                  else v = p ? m && (n || f) : l ? m && f && (n || !d) : h ? m && f && !d && (n || !g) : !d && !g && (n ? c <= e : c < e);
                  v ? s = u + 1 : a = u
                }
                return gr(a, 4294967294)
              }

              function ii(t, e) {
                for (var r = -1, n = t.length, i = 0, s = []; ++r < n;) {
                  var a = t[r],
                    o = e ? e(a) : a;
                  if (!r || !Va(o, l)) {
                    var l = o;
                    s[i++] = 0 === a ? 0 : a
                  }
                }
                return s
              }

              function si(t) {
                return "number" == typeof t ? t : ao(t) ? c : +t
              }

              function ai(t) {
                if ("string" == typeof t) return t;
                if (Ga(t)) return De(t, ai) + "";
                if (ao(t)) return Lr ? Lr.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e
              }

              function oi(t, e, r) {
                var n = -1,
                  i = Me,
                  s = t.length,
                  a = !0,
                  o = [],
                  l = o;
                if (r) a = !1, i = ke;
                else if (s >= 200) {
                  var h = e ? null : qi(t);
                  if (h) return or(h);
                  a = !1, i = Ke, l = new Wr
                } else l = e ? [] : o;
                t: for (; ++n < s;) {
                  var p = t[n],
                    u = e ? e(p) : p;
                  if (p = r || 0 !== p ? p : 0, a && u == u) {
                    for (var c = l.length; c--;)
                      if (l[c] === u) continue t;
                    e && l.push(u), o.push(p)
                  } else i(l, u, r) || (l !== o && l.push(u), o.push(p))
                }
                return o
              }

              function li(t, e) {
                return null == (t = Ps(t, e = gi(e, t))) || delete t[Rs(Xs(e))]
              }

              function hi(t, e, r, n) {
                return Zn(t, e, r(xn(t, e)), n)
              }

              function pi(t, e, r, n) {
                for (var i = t.length, s = n ? i : -1;
                  (n ? s-- : ++s < i) && e(t[s], s, t););
                return r ? ti(t, n ? 0 : s, n ? s + 1 : i) : ti(t, n ? s + 1 : 0, n ? i : s)
              }

              function ui(t, e) {
                var r = t;
                return r instanceof Nr && (r = r.value()), Fe(e, (function(t, e) {
                  return e.func.apply(e.thisArg, Ie([t], e.args))
                }), r)
              }

              function ci(t, e, r) {
                var i = t.length;
                if (i < 2) return i ? oi(t[0]) : [];
                for (var s = -1, a = n(i); ++s < i;)
                  for (var o = t[s], l = -1; ++l < i;) l != s && (a[s] = hn(a[s] || o, t[l], e, r));
                return oi(mn(a, 1), e, r)
              }

              function fi(t, e, r) {
                for (var n = -1, s = t.length, a = e.length, o = {}; ++n < s;) {
                  var l = n < a ? e[n] : i;
                  r(o, t[n], l)
                }
                return o
              }

              function di(t) {
                return Wa(t) ? t : []
              }

              function mi(t) {
                return "function" == typeof t ? t : rl
              }

              function gi(t, e) {
                return Ga(t) ? t : vs(t, e) ? [t] : Os(vo(t))
              }
              var vi = Yn;

              function yi(t, e, r) {
                var n = t.length;
                return r = r === i ? n : r, !e && r >= n ? t : ti(t, e, r)
              }
              var bi = ae || function(t) {
                return ue.clearTimeout(t)
              };

              function _i(t, e) {
                if (e) return t.slice();
                var r = t.length,
                  n = $t ? $t(r) : new t.constructor(r);
                return t.copy(n), n
              }

              function xi(t) {
                var e = new t.constructor(t.byteLength);
                return new Gt(e).set(new Gt(t)), e
              }

              function Ei(t, e) {
                var r = e ? xi(t.buffer) : t.buffer;
                return new t.constructor(r, t.byteOffset, t.length)
              }

              function Si(t, e) {
                if (t !== e) {
                  var r = t !== i,
                    n = null === t,
                    s = t == t,
                    a = ao(t),
                    o = e !== i,
                    l = null === e,
                    h = e == e,
                    p = ao(e);
                  if (!l && !p && !a && t > e || a && o && h && !l && !p || n && o && h || !r && h || !s) return 1;
                  if (!n && !a && !p && t < e || p && r && s && !n && !a || l && r && s || !o && s || !h) return -1
                }
                return 0
              }

              function Pi(t, e, r, i) {
                for (var s = -1, a = t.length, o = r.length, l = -1, h = e.length, p = mr(a - o, 0), u = n(h + p), c = !i; ++l < h;) u[l] = e[l];
                for (; ++s < o;)(c || s < a) && (u[r[s]] = t[s]);
                for (; p--;) u[l++] = t[s++];
                return u
              }

              function wi(t, e, r, i) {
                for (var s = -1, a = t.length, o = -1, l = r.length, h = -1, p = e.length, u = mr(a - l, 0), c = n(u + p), f = !i; ++s < u;) c[s] = t[s];
                for (var d = s; ++h < p;) c[d + h] = e[h];
                for (; ++o < l;)(f || s < a) && (c[d + r[o]] = t[s++]);
                return c
              }

              function Ci(t, e) {
                var r = -1,
                  i = t.length;
                for (e || (e = n(i)); ++r < i;) e[r] = t[r];
                return e
              }

              function Ti(t, e, r, n) {
                var s = !r;
                r || (r = {});
                for (var a = -1, o = e.length; ++a < o;) {
                  var l = e[a],
                    h = n ? n(r[l], t[l], l, r, t) : i;
                  h === i && (h = t[l]), s ? rn(r, l, h) : Jr(r, l, h)
                }
                return r
              }

              function Ai(t, e) {
                return function(r, n) {
                  var i = Ga(r) ? Pe : tn,
                    s = e ? e() : {};
                  return i(r, t, ss(n, 2), s)
                }
              }

              function Mi(t) {
                return Yn((function(e, r) {
                  var n = -1,
                    s = r.length,
                    a = s > 1 ? r[s - 1] : i,
                    o = s > 2 ? r[2] : i;
                  for (a = t.length > 3 && "function" == typeof a ? (s--, a) : i, o && gs(r[0], r[1], o) && (a = s < 3 ? i : a, s = 1), e = Pt(e); ++n < s;) {
                    var l = r[n];
                    l && t(e, l, n, a)
                  }
                  return e
                }))
              }

              function ki(t, e) {
                return function(r, n) {
                  if (null == r) return r;
                  if (!Ha(r)) return t(r, n);
                  for (var i = r.length, s = e ? i : -1, a = Pt(r);
                    (e ? s-- : ++s < i) && !1 !== n(a[s], s, a););
                  return r
                }
              }

              function Di(t) {
                return function(e, r, n) {
                  for (var i = -1, s = Pt(e), a = n(e), o = a.length; o--;) {
                    var l = a[t ? o : ++i];
                    if (!1 === r(s[l], l, s)) break
                  }
                  return e
                }
              }

              function Ii(t) {
                return function(e) {
                  var r = nr(e = vo(e)) ? pr(e) : i,
                    n = r ? r[0] : e.charAt(0),
                    s = r ? yi(r, 1).join("") : e.slice(1);
                  return n[t]() + s
                }
              }

              function Fi(t) {
                return function(e) {
                  return Fe(Zo(Go(e).replace(Zt, "")), t, "")
                }
              }

              function Oi(t) {
                return function() {
                  var e = arguments;
                  switch (e.length) {
                    case 0:
                      return new t;
                    case 1:
                      return new t(e[0]);
                    case 2:
                      return new t(e[0], e[1]);
                    case 3:
                      return new t(e[0], e[1], e[2]);
                    case 4:
                      return new t(e[0], e[1], e[2], e[3]);
                    case 5:
                      return new t(e[0], e[1], e[2], e[3], e[4]);
                    case 6:
                      return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                    case 7:
                      return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                  }
                  var r = Vr(t.prototype),
                    n = t.apply(r, e);
                  return Ja(n) ? n : r
                }
              }

              function Ri(t) {
                return function(e, r, n) {
                  var s = Pt(e);
                  if (!Ha(e)) {
                    var a = ss(r, 3);
                    e = ko(e), r = function(t) {
                      return a(s[t], t, s)
                    }
                  }
                  var o = t(e, r, n);
                  return o > -1 ? s[a ? e[o] : o] : i
                }
              }

              function Li(t) {
                return Qi((function(e) {
                  var r = e.length,
                    n = r,
                    a = jr.prototype.thru;
                  for (t && e.reverse(); n--;) {
                    var o = e[n];
                    if ("function" != typeof o) throw new Tt(s);
                    if (a && !l && "wrapper" == ns(o)) var l = new jr([], !0)
                  }
                  for (n = l ? n : r; ++n < r;) {
                    var h = ns(o = e[n]),
                      p = "wrapper" == h ? rs(o) : i;
                    l = p && ys(p[0]) && 424 == p[1] && !p[4].length && 1 == p[9] ? l[ns(p[0])].apply(l, p[3]) : 1 == o.length && ys(o) ? l[h]() : l.thru(o)
                  }
                  return function() {
                    var t = arguments,
                      n = t[0];
                    if (l && 1 == t.length && Ga(n)) return l.plant(n).value();
                    for (var i = 0, s = r ? e[i].apply(this, t) : n; ++i < r;) s = e[i].call(this, s);
                    return s
                  }
                }))
              }

              function Bi(t, e, r, s, a, o, l, p, u, c) {
                var f = e & h,
                  d = 1 & e,
                  m = 2 & e,
                  g = 24 & e,
                  v = 512 & e,
                  y = m ? i : Oi(t);
                return function h() {
                  for (var b = arguments.length, _ = n(b), x = b; x--;) _[x] = arguments[x];
                  if (g) var E = is(h),
                    S = function(t, e) {
                      for (var r = t.length, n = 0; r--;) t[r] === e && ++n;
                      return n
                    }(_, E);
                  if (s && (_ = Pi(_, s, a, g)), o && (_ = wi(_, o, l, g)), b -= S, g && b < c) {
                    var P = ar(_, E);
                    return Hi(t, e, Bi, h.placeholder, r, _, P, p, u, c - b)
                  }
                  var w = d ? r : this,
                    C = m ? w[t] : t;
                  return b = _.length, p ? _ = function(t, e) {
                    for (var r = t.length, n = gr(e.length, r), s = Ci(t); n--;) {
                      var a = e[n];
                      t[n] = ms(a, r) ? s[a] : i
                    }
                    return t
                  }(_, p) : v && b > 1 && _.reverse(), f && u < b && (_.length = u), this && this !== ue && this instanceof h && (C = y || Oi(C)), C.apply(w, _)
                }
              }

              function Vi(t, e) {
                return function(r, n) {
                  return function(t, e, r, n) {
                    return yn(t, (function(t, i, s) {
                      e(n, r(t), i, s)
                    })), n
                  }(r, t, e(n), {})
                }
              }

              function zi(t, e) {
                return function(r, n) {
                  var s;
                  if (r === i && n === i) return e;
                  if (r !== i && (s = r), n !== i) {
                    if (s === i) return n;
                    "string" == typeof r || "string" == typeof n ? (r = ai(r), n = ai(n)) : (r = si(r), n = si(n)), s = t(r, n)
                  }
                  return s
                }
              }

              function ji(t) {
                return Qi((function(e) {
                  return e = De(e, Ue(ss())), Yn((function(r) {
                    var n = this;
                    return t(e, (function(t) {
                      return Se(t, n, r)
                    }))
                  }))
                }))
              }

              function Ni(t, e) {
                var r = (e = e === i ? " " : ai(e)).length;
                if (r < 2) return r ? qn(e, t) : e;
                var n = qn(e, ce(t / hr(e)));
                return nr(e) ? yi(pr(n), 0, t).join("") : n.slice(0, t)
              }

              function Gi(t) {
                return function(e, r, s) {
                  return s && "number" != typeof s && gs(e, r, s) && (r = s = i), e = uo(e), r === i ? (r = e, e = 0) : r = uo(r),
                    function(t, e, r, i) {
                      for (var s = -1, a = mr(ce((e - t) / (r || 1)), 0), o = n(a); a--;) o[i ? a : ++s] = t, t += r;
                      return o
                    }(e, r, s = s === i ? e < r ? 1 : -1 : uo(s), t)
                }
              }

              function $i(t) {
                return function(e, r) {
                  return "string" == typeof e && "string" == typeof r || (e = mo(e), r = mo(r)), t(e, r)
                }
              }

              function Hi(t, e, r, n, s, a, o, h, p, u) {
                var c = 8 & e;
                e |= c ? l : 64, 4 & (e &= ~(c ? 64 : l)) || (e &= -4);
                var f = [t, e, s, c ? a : i, c ? o : i, c ? i : a, c ? i : o, h, p, u],
                  d = r.apply(i, f);
                return ys(t) && Cs(d, f), d.placeholder = n, Ms(d, t, e)
              }

              function Wi(t) {
                var e = St[t];
                return function(t, r) {
                  if (t = mo(t), (r = null == r ? 0 : gr(co(r), 292)) && Le(t)) {
                    var n = (vo(t) + "e").split("e");
                    return +((n = (vo(e(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
                  }
                  return e(t)
                }
              }
              var qi = Pr && 1 / or(new Pr([, -0]))[1] == p ? function(t) {
                return new Pr(t)
              } : ol;

              function Yi(t) {
                return function(e) {
                  var r = us(e);
                  return r == E ? ir(e) : r == T ? lr(e) : function(t, e) {
                    return De(e, (function(e) {
                      return [e, t[e]]
                    }))
                  }(e, t(e))
                }
              }

              function Xi(t, e, r, a, p, u, c, f) {
                var d = 2 & e;
                if (!d && "function" != typeof t) throw new Tt(s);
                var m = a ? a.length : 0;
                if (m || (e &= -97, a = p = i), c = c === i ? c : mr(co(c), 0), f = f === i ? f : co(f), m -= p ? p.length : 0, 64 & e) {
                  var g = a,
                    v = p;
                  a = p = i
                }
                var y = d ? i : rs(t),
                  b = [t, e, r, a, p, g, v, u, c, f];
                if (y && function(t, e) {
                    var r = t[1],
                      n = e[1],
                      i = r | n,
                      s = i < 131,
                      a = n == h && 8 == r || n == h && 256 == r && t[7].length <= e[8] || 384 == n && e[7].length <= e[8] && 8 == r;
                    if (!s && !a) return t;
                    1 & n && (t[2] = e[2], i |= 1 & r ? 0 : 4);
                    var l = e[3];
                    if (l) {
                      var p = t[3];
                      t[3] = p ? Pi(p, l, e[4]) : l, t[4] = p ? ar(t[3], o) : e[4]
                    }(l = e[5]) && (p = t[5], t[5] = p ? wi(p, l, e[6]) : l, t[6] = p ? ar(t[5], o) : e[6]), (l = e[7]) && (t[7] = l), n & h && (t[8] = null == t[8] ? e[8] : gr(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i
                  }(b, y), t = b[0], e = b[1], r = b[2], a = b[3], p = b[4], !(f = b[9] = b[9] === i ? d ? 0 : t.length : mr(b[9] - m, 0)) && 24 & e && (e &= -25), e && 1 != e) _ = 8 == e || 16 == e ? function(t, e, r) {
                  var s = Oi(t);
                  return function a() {
                    for (var o = arguments.length, l = n(o), h = o, p = is(a); h--;) l[h] = arguments[h];
                    var u = o < 3 && l[0] !== p && l[o - 1] !== p ? [] : ar(l, p);
                    return (o -= u.length) < r ? Hi(t, e, Bi, a.placeholder, i, l, u, i, i, r - o) : Se(this && this !== ue && this instanceof a ? s : t, this, l)
                  }
                }(t, e, f) : e != l && 33 != e || p.length ? Bi.apply(i, b) : function(t, e, r, i) {
                  var s = 1 & e,
                    a = Oi(t);
                  return function e() {
                    for (var o = -1, l = arguments.length, h = -1, p = i.length, u = n(p + l), c = this && this !== ue && this instanceof e ? a : t; ++h < p;) u[h] = i[h];
                    for (; l--;) u[h++] = arguments[++o];
                    return Se(c, s ? r : this, u)
                  }
                }(t, e, r, a);
                else var _ = function(t, e, r) {
                  var n = 1 & e,
                    i = Oi(t);
                  return function e() {
                    return (this && this !== ue && this instanceof e ? i : t).apply(n ? r : this, arguments)
                  }
                }(t, e, r);
                return Ms((y ? Kn : Cs)(_, b), t, e)
              }

              function Ui(t, e, r, n) {
                return t === i || Va(t, kt[r]) && !Ft.call(n, r) ? e : t
              }

              function Zi(t, e, r, n, s, a) {
                return Ja(t) && Ja(e) && (a.set(e, t), zn(t, e, i, Zi, a), a.delete(e)), t
              }

              function Ki(t) {
                return ro(t) ? i : t
              }

              function Ji(t, e, r, n, s, a) {
                var o = 1 & r,
                  l = t.length,
                  h = e.length;
                if (l != h && !(o && h > l)) return !1;
                var p = a.get(t),
                  u = a.get(e);
                if (p && u) return p == e && u == t;
                var c = -1,
                  f = !0,
                  d = 2 & r ? new Wr : i;
                for (a.set(t, e), a.set(e, t); ++c < l;) {
                  var m = t[c],
                    g = e[c];
                  if (n) var v = o ? n(g, m, c, e, t, a) : n(m, g, c, t, e, a);
                  if (v !== i) {
                    if (v) continue;
                    f = !1;
                    break
                  }
                  if (d) {
                    if (!Re(e, (function(t, e) {
                        if (!Ke(d, e) && (m === t || s(m, t, r, n, a))) return d.push(e)
                      }))) {
                      f = !1;
                      break
                    }
                  } else if (m !== g && !s(m, g, r, n, a)) {
                    f = !1;
                    break
                  }
                }
                return a.delete(t), a.delete(e), f
              }

              function Qi(t) {
                return As(Ss(t, i, $s), t + "")
              }

              function ts(t) {
                return En(t, ko, hs)
              }

              function es(t) {
                return En(t, Do, ps)
              }
              var rs = Tr ? function(t) {
                return Tr.get(t)
              } : ol;

              function ns(t) {
                for (var e = t.name + "", r = Ar[e], n = Ft.call(Ar, e) ? r.length : 0; n--;) {
                  var i = r[n],
                    s = i.func;
                  if (null == s || s == t) return i.name
                }
                return e
              }

              function is(t) {
                return (Ft.call(Br, "placeholder") ? Br : t).placeholder
              }

              function ss() {
                var t = Br.iteratee || nl;
                return t = t === nl ? Fn : t, arguments.length ? t(arguments[0], arguments[1]) : t
              }

              function as(t, e) {
                var r, n, i = t.__data__;
                return ("string" == (n = typeof(r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map
              }

              function os(t) {
                for (var e = ko(t), r = e.length; r--;) {
                  var n = e[r],
                    i = t[n];
                  e[r] = [n, i, xs(i)]
                }
                return e
              }

              function ls(t, e) {
                var r = function(t, e) {
                  return null == t ? i : t[e]
                }(t, e);
                return In(r) ? r : i
              }
              var hs = me ? function(t) {
                  return null == t ? [] : (t = Pt(t), Ae(me(t), (function(e) {
                    return qt.call(t, e)
                  })))
                } : dl,
                ps = me ? function(t) {
                  for (var e = []; t;) Ie(e, hs(t)), t = Ht(t);
                  return e
                } : dl,
                us = Sn;

              function cs(t, e, r) {
                for (var n = -1, i = (e = gi(e, t)).length, s = !1; ++n < i;) {
                  var a = Rs(e[n]);
                  if (!(s = null != t && r(t, a))) break;
                  t = t[a]
                }
                return s || ++n != i ? s : !!(i = null == t ? 0 : t.length) && Ka(i) && ms(a, i) && (Ga(t) || Na(t))
              }

              function fs(t) {
                return "function" != typeof t.constructor || _s(t) ? {} : Vr(Ht(t))
              }

              function ds(t) {
                return Ga(t) || Na(t) || !!(Xt && t && t[Xt])
              }

              function ms(t, e) {
                var r = typeof t;
                return !!(e = null == e ? u : e) && ("number" == r || "symbol" != r && vt.test(t)) && t > -1 && t % 1 == 0 && t < e
              }

              function gs(t, e, r) {
                if (!Ja(r)) return !1;
                var n = typeof e;
                return !!("number" == n ? Ha(r) && ms(e, r.length) : "string" == n && e in r) && Va(r[e], t)
              }

              function vs(t, e) {
                if (Ga(t)) return !1;
                var r = typeof t;
                return !("number" != r && "symbol" != r && "boolean" != r && null != t && !ao(t)) || Q.test(t) || !J.test(t) || null != e && t in Pt(e)
              }

              function ys(t) {
                var e = ns(t),
                  r = Br[e];
                if ("function" != typeof r || !(e in Nr.prototype)) return !1;
                if (t === r) return !0;
                var n = rs(r);
                return !!n && t === n[0]
              }(xr && us(new xr(new ArrayBuffer(1))) != I || Er && us(new Er) != E || Sr && us(Sr.resolve()) != w || Pr && us(new Pr) != T || wr && us(new wr) != k) && (us = function(t) {
                var e = Sn(t),
                  r = e == P ? t.constructor : i,
                  n = r ? Ls(r) : "";
                if (n) switch (n) {
                  case Mr:
                    return I;
                  case kr:
                    return E;
                  case Dr:
                    return w;
                  case Ir:
                    return T;
                  case Fr:
                    return k
                }
                return e
              });
              var bs = Dt ? Ua : ml;

              function _s(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || kt)
              }

              function xs(t) {
                return t == t && !Ja(t)
              }

              function Es(t, e) {
                return function(r) {
                  return null != r && r[t] === e && (e !== i || t in Pt(r))
                }
              }

              function Ss(t, e, r) {
                return e = mr(e === i ? t.length - 1 : e, 0),
                  function() {
                    for (var i = arguments, s = -1, a = mr(i.length - e, 0), o = n(a); ++s < a;) o[s] = i[e + s];
                    s = -1;
                    for (var l = n(e + 1); ++s < e;) l[s] = i[s];
                    return l[e] = r(o), Se(t, this, l)
                  }
              }

              function Ps(t, e) {
                return e.length < 2 ? t : xn(t, ti(e, 0, -1))
              }

              function ws(t, e) {
                if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
              }
              var Cs = ks(Kn),
                Ts = pe || function(t, e) {
                  return ue.setTimeout(t, e)
                },
                As = ks(Jn);

              function Ms(t, e, r) {
                var n = e + "";
                return As(t, function(t, e) {
                  var r = e.length;
                  if (!r) return t;
                  var n = r - 1;
                  return e[n] = (r > 1 ? "& " : "") + e[n], e = e.join(r > 2 ? ", " : " "), t.replace(st, "{\n/* [wrapped with " + e + "] */\n")
                }(n, function(t, e) {
                  return we(d, (function(r) {
                    var n = "_." + r[0];
                    e & r[1] && !Me(t, n) && t.push(n)
                  })), t.sort()
                }(function(t) {
                  var e = t.match(at);
                  return e ? e[1].split(ot) : []
                }(n), r)))
              }

              function ks(t) {
                var e = 0,
                  r = 0;
                return function() {
                  var n = vr(),
                    s = 16 - (n - r);
                  if (r = n, s > 0) {
                    if (++e >= 800) return arguments[0]
                  } else e = 0;
                  return t.apply(i, arguments)
                }
              }

              function Ds(t, e) {
                var r = -1,
                  n = t.length,
                  s = n - 1;
                for (e = e === i ? n : e; ++r < e;) {
                  var a = Wn(r, s),
                    o = t[a];
                  t[a] = t[r], t[r] = o
                }
                return t.length = e, t
              }
              var Is, Fs, Os = (Is = Ia((function(t) {
                var e = [];
                return 46 === t.charCodeAt(0) && e.push(""), t.replace(tt, (function(t, r, n, i) {
                  e.push(n ? i.replace(pt, "$1") : r || t)
                })), e
              }), (function(t) {
                return 500 === Fs.size && Fs.clear(), t
              })), Fs = Is.cache, Is);

              function Rs(t) {
                if ("string" == typeof t || ao(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e
              }

              function Ls(t) {
                if (null != t) {
                  try {
                    return It.call(t)
                  } catch (t) {}
                  try {
                    return t + ""
                  } catch (t) {}
                }
                return ""
              }

              function Bs(t) {
                if (t instanceof Nr) return t.clone();
                var e = new jr(t.__wrapped__, t.__chain__);
                return e.__actions__ = Ci(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
              }
              var Vs = Yn((function(t, e) {
                  return Wa(t) ? hn(t, mn(e, 1, Wa, !0)) : []
                })),
                zs = Yn((function(t, e) {
                  var r = Xs(e);
                  return Wa(r) && (r = i), Wa(t) ? hn(t, mn(e, 1, Wa, !0), ss(r, 2)) : []
                })),
                js = Yn((function(t, e) {
                  var r = Xs(e);
                  return Wa(r) && (r = i), Wa(t) ? hn(t, mn(e, 1, Wa, !0), i, r) : []
                }));

              function Ns(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var i = null == r ? 0 : co(r);
                return i < 0 && (i = mr(n + i, 0)), Ve(t, ss(e, 3), i)
              }

              function Gs(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var s = n - 1;
                return r !== i && (s = co(r), s = r < 0 ? mr(n + s, 0) : gr(s, n - 1)), Ve(t, ss(e, 3), s, !0)
              }

              function $s(t) {
                return null != t && t.length ? mn(t, 1) : []
              }

              function Hs(t) {
                return t && t.length ? t[0] : i
              }
              var Ws = Yn((function(t) {
                  var e = De(t, di);
                  return e.length && e[0] === t[0] ? Tn(e) : []
                })),
                qs = Yn((function(t) {
                  var e = Xs(t),
                    r = De(t, di);
                  return e === Xs(r) ? e = i : r.pop(), r.length && r[0] === t[0] ? Tn(r, ss(e, 2)) : []
                })),
                Ys = Yn((function(t) {
                  var e = Xs(t),
                    r = De(t, di);
                  return (e = "function" == typeof e ? e : i) && r.pop(), r.length && r[0] === t[0] ? Tn(r, i, e) : []
                }));

              function Xs(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : i
              }
              var Us = Yn(Zs);

              function Zs(t, e) {
                return t && t.length && e && e.length ? $n(t, e) : t
              }
              var Ks = Qi((function(t, e) {
                var r = null == t ? 0 : t.length,
                  n = nn(t, e);
                return Hn(t, De(e, (function(t) {
                  return ms(t, r) ? +t : t
                })).sort(Si)), n
              }));

              function Js(t) {
                return null == t ? t : _r.call(t)
              }
              var Qs = Yn((function(t) {
                  return oi(mn(t, 1, Wa, !0))
                })),
                ta = Yn((function(t) {
                  var e = Xs(t);
                  return Wa(e) && (e = i), oi(mn(t, 1, Wa, !0), ss(e, 2))
                })),
                ea = Yn((function(t) {
                  var e = Xs(t);
                  return e = "function" == typeof e ? e : i, oi(mn(t, 1, Wa, !0), i, e)
                }));

              function ra(t) {
                if (!t || !t.length) return [];
                var e = 0;
                return t = Ae(t, (function(t) {
                  if (Wa(t)) return e = mr(t.length, e), !0
                })), Ye(e, (function(e) {
                  return De(t, $e(e))
                }))
              }

              function na(t, e) {
                if (!t || !t.length) return [];
                var r = ra(t);
                return null == e ? r : De(r, (function(t) {
                  return Se(e, i, t)
                }))
              }
              var ia = Yn((function(t, e) {
                  return Wa(t) ? hn(t, e) : []
                })),
                sa = Yn((function(t) {
                  return ci(Ae(t, Wa))
                })),
                aa = Yn((function(t) {
                  var e = Xs(t);
                  return Wa(e) && (e = i), ci(Ae(t, Wa), ss(e, 2))
                })),
                oa = Yn((function(t) {
                  var e = Xs(t);
                  return e = "function" == typeof e ? e : i, ci(Ae(t, Wa), i, e)
                })),
                la = Yn(ra),
                ha = Yn((function(t) {
                  var e = t.length,
                    r = e > 1 ? t[e - 1] : i;
                  return r = "function" == typeof r ? (t.pop(), r) : i, na(t, r)
                }));

              function pa(t) {
                var e = Br(t);
                return e.__chain__ = !0, e
              }

              function ua(t, e) {
                return e(t)
              }
              var ca = Qi((function(t) {
                  var e = t.length,
                    r = e ? t[0] : 0,
                    n = this.__wrapped__,
                    s = function(e) {
                      return nn(e, t)
                    };
                  return !(e > 1 || this.__actions__.length) && n instanceof Nr && ms(r) ? ((n = n.slice(r, +r + (e ? 1 : 0))).__actions__.push({
                    func: ua,
                    args: [s],
                    thisArg: i
                  }), new jr(n, this.__chain__).thru((function(t) {
                    return e && !t.length && t.push(i), t
                  }))) : this.thru(s)
                })),
                fa = Ai((function(t, e, r) {
                  Ft.call(t, r) ? ++t[r] : rn(t, r, 1)
                })),
                da = Ri(Ns),
                ma = Ri(Gs);

              function ga(t, e) {
                return (Ga(t) ? we : pn)(t, ss(e, 3))
              }

              function va(t, e) {
                return (Ga(t) ? Ce : un)(t, ss(e, 3))
              }
              var ya = Ai((function(t, e, r) {
                  Ft.call(t, r) ? t[r].push(e) : rn(t, r, [e])
                })),
                ba = Yn((function(t, e, r) {
                  var i = -1,
                    s = "function" == typeof e,
                    a = Ha(t) ? n(t.length) : [];
                  return pn(t, (function(t) {
                    a[++i] = s ? Se(e, t, r) : An(t, e, r)
                  })), a
                })),
                _a = Ai((function(t, e, r) {
                  rn(t, r, e)
                }));

              function xa(t, e) {
                return (Ga(t) ? De : Ln)(t, ss(e, 3))
              }
              var Ea = Ai((function(t, e, r) {
                  t[r ? 0 : 1].push(e)
                }), (function() {
                  return [
                    [],
                    []
                  ]
                })),
                Sa = Yn((function(t, e) {
                  if (null == t) return [];
                  var r = e.length;
                  return r > 1 && gs(t, e[0], e[1]) ? e = [] : r > 2 && gs(e[0], e[1], e[2]) && (e = [e[0]]), Nn(t, mn(e, 1), [])
                })),
                Pa = he || function() {
                  return ue.Date.now()
                };

              function wa(t, e, r) {
                return e = r ? i : e, e = t && null == e ? t.length : e, Xi(t, h, i, i, i, i, e)
              }

              function Ca(t, e) {
                var r;
                if ("function" != typeof e) throw new Tt(s);
                return t = co(t),
                  function() {
                    return --t > 0 && (r = e.apply(this, arguments)), t <= 1 && (e = i), r
                  }
              }
              var Ta = Yn((function(t, e, r) {
                  var n = 1;
                  if (r.length) {
                    var i = ar(r, is(Ta));
                    n |= l
                  }
                  return Xi(t, n, e, r, i)
                })),
                Aa = Yn((function(t, e, r) {
                  var n = 3;
                  if (r.length) {
                    var i = ar(r, is(Aa));
                    n |= l
                  }
                  return Xi(e, n, t, r, i)
                }));

              function Ma(t, e, r) {
                var n, a, o, l, h, p, u = 0,
                  c = !1,
                  f = !1,
                  d = !0;
                if ("function" != typeof t) throw new Tt(s);

                function m(e) {
                  var r = n,
                    s = a;
                  return n = a = i, u = e, l = t.apply(s, r)
                }

                function g(t) {
                  var r = t - p;
                  return p === i || r >= e || r < 0 || f && t - u >= o
                }

                function v() {
                  var t = Pa();
                  if (g(t)) return y(t);
                  h = Ts(v, function(t) {
                    var r = e - (t - p);
                    return f ? gr(r, o - (t - u)) : r
                  }(t))
                }

                function y(t) {
                  return h = i, d && n ? m(t) : (n = a = i, l)
                }

                function b() {
                  var t = Pa(),
                    r = g(t);
                  if (n = arguments, a = this, p = t, r) {
                    if (h === i) return function(t) {
                      return u = t, h = Ts(v, e), c ? m(t) : l
                    }(p);
                    if (f) return bi(h), h = Ts(v, e), m(p)
                  }
                  return h === i && (h = Ts(v, e)), l
                }
                return e = mo(e) || 0, Ja(r) && (c = !!r.leading, o = (f = "maxWait" in r) ? mr(mo(r.maxWait) || 0, e) : o, d = "trailing" in r ? !!r.trailing : d), b.cancel = function() {
                  h !== i && bi(h), u = 0, n = p = a = h = i
                }, b.flush = function() {
                  return h === i ? l : y(Pa())
                }, b
              }
              var ka = Yn((function(t, e) {
                  return ln(t, 1, e)
                })),
                Da = Yn((function(t, e, r) {
                  return ln(t, mo(e) || 0, r)
                }));

              function Ia(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw new Tt(s);
                var r = function() {
                  var n = arguments,
                    i = e ? e.apply(this, n) : n[0],
                    s = r.cache;
                  if (s.has(i)) return s.get(i);
                  var a = t.apply(this, n);
                  return r.cache = s.set(i, a) || s, a
                };
                return r.cache = new(Ia.Cache || Hr), r
              }

              function Fa(t) {
                if ("function" != typeof t) throw new Tt(s);
                return function() {
                  var e = arguments;
                  switch (e.length) {
                    case 0:
                      return !t.call(this);
                    case 1:
                      return !t.call(this, e[0]);
                    case 2:
                      return !t.call(this, e[0], e[1]);
                    case 3:
                      return !t.call(this, e[0], e[1], e[2])
                  }
                  return !t.apply(this, e)
                }
              }
              Ia.Cache = Hr;
              var Oa = vi((function(t, e) {
                  var r = (e = 1 == e.length && Ga(e[0]) ? De(e[0], Ue(ss())) : De(mn(e, 1), Ue(ss()))).length;
                  return Yn((function(n) {
                    for (var i = -1, s = gr(n.length, r); ++i < s;) n[i] = e[i].call(this, n[i]);
                    return Se(t, this, n)
                  }))
                })),
                Ra = Yn((function(t, e) {
                  var r = ar(e, is(Ra));
                  return Xi(t, l, i, e, r)
                })),
                La = Yn((function(t, e) {
                  var r = ar(e, is(La));
                  return Xi(t, 64, i, e, r)
                })),
                Ba = Qi((function(t, e) {
                  return Xi(t, 256, i, i, i, e)
                }));

              function Va(t, e) {
                return t === e || t != t && e != e
              }
              var za = $i(Pn),
                ja = $i((function(t, e) {
                  return t >= e
                })),
                Na = Mn(function() {
                  return arguments
                }()) ? Mn : function(t) {
                  return Qa(t) && Ft.call(t, "callee") && !qt.call(t, "callee")
                },
                Ga = n.isArray,
                $a = ve ? Ue(ve) : function(t) {
                  return Qa(t) && Sn(t) == D
                };

              function Ha(t) {
                return null != t && Ka(t.length) && !Ua(t)
              }

              function Wa(t) {
                return Qa(t) && Ha(t)
              }
              var qa = ge || ml,
                Ya = ye ? Ue(ye) : function(t) {
                  return Qa(t) && Sn(t) == y
                };

              function Xa(t) {
                if (!Qa(t)) return !1;
                var e = Sn(t);
                return e == b || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !ro(t)
              }

              function Ua(t) {
                if (!Ja(t)) return !1;
                var e = Sn(t);
                return e == _ || e == x || "[object AsyncFunction]" == e || "[object Proxy]" == e
              }

              function Za(t) {
                return "number" == typeof t && t == co(t)
              }

              function Ka(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= u
              }

              function Ja(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
              }

              function Qa(t) {
                return null != t && "object" == typeof t
              }
              var to = be ? Ue(be) : function(t) {
                return Qa(t) && us(t) == E
              };

              function eo(t) {
                return "number" == typeof t || Qa(t) && Sn(t) == S
              }

              function ro(t) {
                if (!Qa(t) || Sn(t) != P) return !1;
                var e = Ht(t);
                if (null === e) return !0;
                var r = Ft.call(e, "constructor") && e.constructor;
                return "function" == typeof r && r instanceof r && It.call(r) == Bt
              }
              var no = _e ? Ue(_e) : function(t) {
                  return Qa(t) && Sn(t) == C
                },
                io = xe ? Ue(xe) : function(t) {
                  return Qa(t) && us(t) == T
                };

              function so(t) {
                return "string" == typeof t || !Ga(t) && Qa(t) && Sn(t) == A
              }

              function ao(t) {
                return "symbol" == typeof t || Qa(t) && Sn(t) == M
              }
              var oo = Ee ? Ue(Ee) : function(t) {
                  return Qa(t) && Ka(t.length) && !!ie[Sn(t)]
                },
                lo = $i(Rn),
                ho = $i((function(t, e) {
                  return t <= e
                }));

              function po(t) {
                if (!t) return [];
                if (Ha(t)) return so(t) ? pr(t) : Ci(t);
                if (Ut && t[Ut]) return function(t) {
                  for (var e, r = []; !(e = t.next()).done;) r.push(e.value);
                  return r
                }(t[Ut]());
                var e = us(t);
                return (e == E ? ir : e == T ? or : zo)(t)
              }

              function uo(t) {
                return t ? (t = mo(t)) === p || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
              }

              function co(t) {
                var e = uo(t),
                  r = e % 1;
                return e == e ? r ? e - r : e : 0
              }

              function fo(t) {
                return t ? sn(co(t), 0, f) : 0
              }

              function mo(t) {
                if ("number" == typeof t) return t;
                if (ao(t)) return c;
                if (Ja(t)) {
                  var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                  t = Ja(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = Xe(t);
                var r = dt.test(t);
                return r || gt.test(t) ? le(t.slice(2), r ? 2 : 8) : ft.test(t) ? c : +t
              }

              function go(t) {
                return Ti(t, Do(t))
              }

              function vo(t) {
                return null == t ? "" : ai(t)
              }
              var yo = Mi((function(t, e) {
                  if (_s(e) || Ha(e)) Ti(e, ko(e), t);
                  else
                    for (var r in e) Ft.call(e, r) && Jr(t, r, e[r])
                })),
                bo = Mi((function(t, e) {
                  Ti(e, Do(e), t)
                })),
                _o = Mi((function(t, e, r, n) {
                  Ti(e, Do(e), t, n)
                })),
                xo = Mi((function(t, e, r, n) {
                  Ti(e, ko(e), t, n)
                })),
                Eo = Qi(nn),
                So = Yn((function(t, e) {
                  t = Pt(t);
                  var r = -1,
                    n = e.length,
                    s = n > 2 ? e[2] : i;
                  for (s && gs(e[0], e[1], s) && (n = 1); ++r < n;)
                    for (var a = e[r], o = Do(a), l = -1, h = o.length; ++l < h;) {
                      var p = o[l],
                        u = t[p];
                      (u === i || Va(u, kt[p]) && !Ft.call(t, p)) && (t[p] = a[p])
                    }
                  return t
                })),
                Po = Yn((function(t) {
                  return t.push(i, Zi), Se(Fo, i, t)
                }));

              function wo(t, e, r) {
                var n = null == t ? i : xn(t, e);
                return n === i ? r : n
              }

              function Co(t, e) {
                return null != t && cs(t, e, Cn)
              }
              var To = Vi((function(t, e, r) {
                  null != e && "function" != typeof e.toString && (e = Lt.call(e)), t[e] = r
                }), Qo(rl)),
                Ao = Vi((function(t, e, r) {
                  null != e && "function" != typeof e.toString && (e = Lt.call(e)), Ft.call(t, e) ? t[e].push(r) : t[e] = [r]
                }), ss),
                Mo = Yn(An);

              function ko(t) {
                return Ha(t) ? Yr(t) : On(t)
              }

              function Do(t) {
                return Ha(t) ? Yr(t, !0) : function(t) {
                  if (!Ja(t)) return function(t) {
                    var e = [];
                    if (null != t)
                      for (var r in Pt(t)) e.push(r);
                    return e
                  }(t);
                  var e = _s(t),
                    r = [];
                  for (var n in t)("constructor" != n || !e && Ft.call(t, n)) && r.push(n);
                  return r
                }(t)
              }
              var Io = Mi((function(t, e, r) {
                  zn(t, e, r)
                })),
                Fo = Mi((function(t, e, r, n) {
                  zn(t, e, r, n)
                })),
                Oo = Qi((function(t, e) {
                  var r = {};
                  if (null == t) return r;
                  var n = !1;
                  e = De(e, (function(e) {
                    return e = gi(e, t), n || (n = e.length > 1), e
                  })), Ti(t, es(t), r), n && (r = an(r, 7, Ki));
                  for (var i = e.length; i--;) li(r, e[i]);
                  return r
                })),
                Ro = Qi((function(t, e) {
                  return null == t ? {} : function(t, e) {
                    return Gn(t, e, (function(e, r) {
                      return Co(t, r)
                    }))
                  }(t, e)
                }));

              function Lo(t, e) {
                if (null == t) return {};
                var r = De(es(t), (function(t) {
                  return [t]
                }));
                return e = ss(e), Gn(t, r, (function(t, r) {
                  return e(t, r[0])
                }))
              }
              var Bo = Yi(ko),
                Vo = Yi(Do);

              function zo(t) {
                return null == t ? [] : Ze(t, ko(t))
              }
              var jo = Fi((function(t, e, r) {
                return e = e.toLowerCase(), t + (r ? No(e) : e)
              }));

              function No(t) {
                return Uo(vo(t).toLowerCase())
              }

              function Go(t) {
                return (t = vo(t)) && t.replace(yt, tr).replace(Kt, "")
              }
              var $o = Fi((function(t, e, r) {
                  return t + (r ? "-" : "") + e.toLowerCase()
                })),
                Ho = Fi((function(t, e, r) {
                  return t + (r ? " " : "") + e.toLowerCase()
                })),
                Wo = Ii("toLowerCase"),
                qo = Fi((function(t, e, r) {
                  return t + (r ? "_" : "") + e.toLowerCase()
                })),
                Yo = Fi((function(t, e, r) {
                  return t + (r ? " " : "") + Uo(e)
                })),
                Xo = Fi((function(t, e, r) {
                  return t + (r ? " " : "") + e.toUpperCase()
                })),
                Uo = Ii("toUpperCase");

              function Zo(t, e, r) {
                return t = vo(t), (e = r ? i : e) === i ? function(t) {
                  return ee.test(t)
                }(t) ? function(t) {
                  return t.match(Qt) || []
                }(t) : function(t) {
                  return t.match(lt) || []
                }(t) : t.match(e) || []
              }
              var Ko = Yn((function(t, e) {
                  try {
                    return Se(t, i, e)
                  } catch (t) {
                    return Xa(t) ? t : new xt(t)
                  }
                })),
                Jo = Qi((function(t, e) {
                  return we(e, (function(e) {
                    e = Rs(e), rn(t, e, Ta(t[e], t))
                  })), t
                }));

              function Qo(t) {
                return function() {
                  return t
                }
              }
              var tl = Li(),
                el = Li(!0);

              function rl(t) {
                return t
              }

              function nl(t) {
                return Fn("function" == typeof t ? t : an(t, 1))
              }
              var il = Yn((function(t, e) {
                  return function(r) {
                    return An(r, t, e)
                  }
                })),
                sl = Yn((function(t, e) {
                  return function(r) {
                    return An(t, r, e)
                  }
                }));

              function al(t, e, r) {
                var n = ko(e),
                  i = _n(e, n);
                null != r || Ja(e) && (i.length || !n.length) || (r = e, e = t, t = this, i = _n(e, ko(e)));
                var s = !(Ja(r) && "chain" in r && !r.chain),
                  a = Ua(t);
                return we(i, (function(r) {
                  var n = e[r];
                  t[r] = n, a && (t.prototype[r] = function() {
                    var e = this.__chain__;
                    if (s || e) {
                      var r = t(this.__wrapped__);
                      return (r.__actions__ = Ci(this.__actions__)).push({
                        func: n,
                        args: arguments,
                        thisArg: t
                      }), r.__chain__ = e, r
                    }
                    return n.apply(t, Ie([this.value()], arguments))
                  })
                })), t
              }

              function ol() {}
              var ll = ji(De),
                hl = ji(Te),
                pl = ji(Re);

              function ul(t) {
                return vs(t) ? $e(Rs(t)) : function(t) {
                  return function(e) {
                    return xn(e, t)
                  }
                }(t)
              }
              var cl = Gi(),
                fl = Gi(!0);

              function dl() {
                return []
              }

              function ml() {
                return !1
              }
              var gl, vl = zi((function(t, e) {
                  return t + e
                }), 0),
                yl = Wi("ceil"),
                bl = zi((function(t, e) {
                  return t / e
                }), 1),
                _l = Wi("floor"),
                xl = zi((function(t, e) {
                  return t * e
                }), 1),
                El = Wi("round"),
                Sl = zi((function(t, e) {
                  return t - e
                }), 0);
              return Br.after = function(t, e) {
                if ("function" != typeof e) throw new Tt(s);
                return t = co(t),
                  function() {
                    if (--t < 1) return e.apply(this, arguments)
                  }
              }, Br.ary = wa, Br.assign = yo, Br.assignIn = bo, Br.assignInWith = _o, Br.assignWith = xo, Br.at = Eo, Br.before = Ca, Br.bind = Ta, Br.bindAll = Jo, Br.bindKey = Aa, Br.castArray = function() {
                if (!arguments.length) return [];
                var t = arguments[0];
                return Ga(t) ? t : [t]
              }, Br.chain = pa, Br.chunk = function(t, e, r) {
                e = (r ? gs(t, e, r) : e === i) ? 1 : mr(co(e), 0);
                var s = null == t ? 0 : t.length;
                if (!s || e < 1) return [];
                for (var a = 0, o = 0, l = n(ce(s / e)); a < s;) l[o++] = ti(t, a, a += e);
                return l
              }, Br.compact = function(t) {
                for (var e = -1, r = null == t ? 0 : t.length, n = 0, i = []; ++e < r;) {
                  var s = t[e];
                  s && (i[n++] = s)
                }
                return i
              }, Br.concat = function() {
                var t = arguments.length;
                if (!t) return [];
                for (var e = n(t - 1), r = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
                return Ie(Ga(r) ? Ci(r) : [r], mn(e, 1))
              }, Br.cond = function(t) {
                var e = null == t ? 0 : t.length,
                  r = ss();
                return t = e ? De(t, (function(t) {
                  if ("function" != typeof t[1]) throw new Tt(s);
                  return [r(t[0]), t[1]]
                })) : [], Yn((function(r) {
                  for (var n = -1; ++n < e;) {
                    var i = t[n];
                    if (Se(i[0], this, r)) return Se(i[1], this, r)
                  }
                }))
              }, Br.conforms = function(t) {
                return function(t) {
                  var e = ko(t);
                  return function(r) {
                    return on(r, t, e)
                  }
                }(an(t, 1))
              }, Br.constant = Qo, Br.countBy = fa, Br.create = function(t, e) {
                var r = Vr(t);
                return null == e ? r : en(r, e)
              }, Br.curry = function t(e, r, n) {
                var s = Xi(e, 8, i, i, i, i, i, r = n ? i : r);
                return s.placeholder = t.placeholder, s
              }, Br.curryRight = function t(e, r, n) {
                var s = Xi(e, 16, i, i, i, i, i, r = n ? i : r);
                return s.placeholder = t.placeholder, s
              }, Br.debounce = Ma, Br.defaults = So, Br.defaultsDeep = Po, Br.defer = ka, Br.delay = Da, Br.difference = Vs, Br.differenceBy = zs, Br.differenceWith = js, Br.drop = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? ti(t, (e = r || e === i ? 1 : co(e)) < 0 ? 0 : e, n) : []
              }, Br.dropRight = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? ti(t, 0, (e = n - (e = r || e === i ? 1 : co(e))) < 0 ? 0 : e) : []
              }, Br.dropRightWhile = function(t, e) {
                return t && t.length ? pi(t, ss(e, 3), !0, !0) : []
              }, Br.dropWhile = function(t, e) {
                return t && t.length ? pi(t, ss(e, 3), !0) : []
              }, Br.fill = function(t, e, r, n) {
                var s = null == t ? 0 : t.length;
                return s ? (r && "number" != typeof r && gs(t, e, r) && (r = 0, n = s), function(t, e, r, n) {
                  var s = t.length;
                  for ((r = co(r)) < 0 && (r = -r > s ? 0 : s + r), (n = n === i || n > s ? s : co(n)) < 0 && (n += s), n = r > n ? 0 : fo(n); r < n;) t[r++] = e;
                  return t
                }(t, e, r, n)) : []
              }, Br.filter = function(t, e) {
                return (Ga(t) ? Ae : dn)(t, ss(e, 3))
              }, Br.flatMap = function(t, e) {
                return mn(xa(t, e), 1)
              }, Br.flatMapDeep = function(t, e) {
                return mn(xa(t, e), p)
              }, Br.flatMapDepth = function(t, e, r) {
                return r = r === i ? 1 : co(r), mn(xa(t, e), r)
              }, Br.flatten = $s, Br.flattenDeep = function(t) {
                return null != t && t.length ? mn(t, p) : []
              }, Br.flattenDepth = function(t, e) {
                return null != t && t.length ? mn(t, e = e === i ? 1 : co(e)) : []
              }, Br.flip = function(t) {
                return Xi(t, 512)
              }, Br.flow = tl, Br.flowRight = el, Br.fromPairs = function(t) {
                for (var e = -1, r = null == t ? 0 : t.length, n = {}; ++e < r;) {
                  var i = t[e];
                  n[i[0]] = i[1]
                }
                return n
              }, Br.functions = function(t) {
                return null == t ? [] : _n(t, ko(t))
              }, Br.functionsIn = function(t) {
                return null == t ? [] : _n(t, Do(t))
              }, Br.groupBy = ya, Br.initial = function(t) {
                return null != t && t.length ? ti(t, 0, -1) : []
              }, Br.intersection = Ws, Br.intersectionBy = qs, Br.intersectionWith = Ys, Br.invert = To, Br.invertBy = Ao, Br.invokeMap = ba, Br.iteratee = nl, Br.keyBy = _a, Br.keys = ko, Br.keysIn = Do, Br.map = xa, Br.mapKeys = function(t, e) {
                var r = {};
                return e = ss(e, 3), yn(t, (function(t, n, i) {
                  rn(r, e(t, n, i), t)
                })), r
              }, Br.mapValues = function(t, e) {
                var r = {};
                return e = ss(e, 3), yn(t, (function(t, n, i) {
                  rn(r, n, e(t, n, i))
                })), r
              }, Br.matches = function(t) {
                return Bn(an(t, 1))
              }, Br.matchesProperty = function(t, e) {
                return Vn(t, an(e, 1))
              }, Br.memoize = Ia, Br.merge = Io, Br.mergeWith = Fo, Br.method = il, Br.methodOf = sl, Br.mixin = al, Br.negate = Fa, Br.nthArg = function(t) {
                return t = co(t), Yn((function(e) {
                  return jn(e, t)
                }))
              }, Br.omit = Oo, Br.omitBy = function(t, e) {
                return Lo(t, Fa(ss(e)))
              }, Br.once = function(t) {
                return Ca(2, t)
              }, Br.orderBy = function(t, e, r, n) {
                return null == t ? [] : (Ga(e) || (e = null == e ? [] : [e]), Ga(r = n ? i : r) || (r = null == r ? [] : [r]), Nn(t, e, r))
              }, Br.over = ll, Br.overArgs = Oa, Br.overEvery = hl, Br.overSome = pl, Br.partial = Ra, Br.partialRight = La, Br.partition = Ea, Br.pick = Ro, Br.pickBy = Lo, Br.property = ul, Br.propertyOf = function(t) {
                return function(e) {
                  return null == t ? i : xn(t, e)
                }
              }, Br.pull = Us, Br.pullAll = Zs, Br.pullAllBy = function(t, e, r) {
                return t && t.length && e && e.length ? $n(t, e, ss(r, 2)) : t
              }, Br.pullAllWith = function(t, e, r) {
                return t && t.length && e && e.length ? $n(t, e, i, r) : t
              }, Br.pullAt = Ks, Br.range = cl, Br.rangeRight = fl, Br.rearg = Ba, Br.reject = function(t, e) {
                return (Ga(t) ? Ae : dn)(t, Fa(ss(e, 3)))
              }, Br.remove = function(t, e) {
                var r = [];
                if (!t || !t.length) return r;
                var n = -1,
                  i = [],
                  s = t.length;
                for (e = ss(e, 3); ++n < s;) {
                  var a = t[n];
                  e(a, n, t) && (r.push(a), i.push(n))
                }
                return Hn(t, i), r
              }, Br.rest = function(t, e) {
                if ("function" != typeof t) throw new Tt(s);
                return Yn(t, e = e === i ? e : co(e))
              }, Br.reverse = Js, Br.sampleSize = function(t, e, r) {
                return e = (r ? gs(t, e, r) : e === i) ? 1 : co(e), (Ga(t) ? Ur : Un)(t, e)
              }, Br.set = function(t, e, r) {
                return null == t ? t : Zn(t, e, r)
              }, Br.setWith = function(t, e, r, n) {
                return n = "function" == typeof n ? n : i, null == t ? t : Zn(t, e, r, n)
              }, Br.shuffle = function(t) {
                return (Ga(t) ? Zr : Qn)(t)
              }, Br.slice = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? (r && "number" != typeof r && gs(t, e, r) ? (e = 0, r = n) : (e = null == e ? 0 : co(e), r = r === i ? n : co(r)), ti(t, e, r)) : []
              }, Br.sortBy = Sa, Br.sortedUniq = function(t) {
                return t && t.length ? ii(t) : []
              }, Br.sortedUniqBy = function(t, e) {
                return t && t.length ? ii(t, ss(e, 2)) : []
              }, Br.split = function(t, e, r) {
                return r && "number" != typeof r && gs(t, e, r) && (e = r = i), (r = r === i ? f : r >>> 0) ? (t = vo(t)) && ("string" == typeof e || null != e && !no(e)) && !(e = ai(e)) && nr(t) ? yi(pr(t), 0, r) : t.split(e, r) : []
              }, Br.spread = function(t, e) {
                if ("function" != typeof t) throw new Tt(s);
                return e = null == e ? 0 : mr(co(e), 0), Yn((function(r) {
                  var n = r[e],
                    i = yi(r, 0, e);
                  return n && Ie(i, n), Se(t, this, i)
                }))
              }, Br.tail = function(t) {
                var e = null == t ? 0 : t.length;
                return e ? ti(t, 1, e) : []
              }, Br.take = function(t, e, r) {
                return t && t.length ? ti(t, 0, (e = r || e === i ? 1 : co(e)) < 0 ? 0 : e) : []
              }, Br.takeRight = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                return n ? ti(t, (e = n - (e = r || e === i ? 1 : co(e))) < 0 ? 0 : e, n) : []
              }, Br.takeRightWhile = function(t, e) {
                return t && t.length ? pi(t, ss(e, 3), !1, !0) : []
              }, Br.takeWhile = function(t, e) {
                return t && t.length ? pi(t, ss(e, 3)) : []
              }, Br.tap = function(t, e) {
                return e(t), t
              }, Br.throttle = function(t, e, r) {
                var n = !0,
                  i = !0;
                if ("function" != typeof t) throw new Tt(s);
                return Ja(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Ma(t, e, {
                  leading: n,
                  maxWait: e,
                  trailing: i
                })
              }, Br.thru = ua, Br.toArray = po, Br.toPairs = Bo, Br.toPairsIn = Vo, Br.toPath = function(t) {
                return Ga(t) ? De(t, Rs) : ao(t) ? [t] : Ci(Os(vo(t)))
              }, Br.toPlainObject = go, Br.transform = function(t, e, r) {
                var n = Ga(t),
                  i = n || qa(t) || oo(t);
                if (e = ss(e, 4), null == r) {
                  var s = t && t.constructor;
                  r = i ? n ? new s : [] : Ja(t) && Ua(s) ? Vr(Ht(t)) : {}
                }
                return (i ? we : yn)(t, (function(t, n, i) {
                  return e(r, t, n, i)
                })), r
              }, Br.unary = function(t) {
                return wa(t, 1)
              }, Br.union = Qs, Br.unionBy = ta, Br.unionWith = ea, Br.uniq = function(t) {
                return t && t.length ? oi(t) : []
              }, Br.uniqBy = function(t, e) {
                return t && t.length ? oi(t, ss(e, 2)) : []
              }, Br.uniqWith = function(t, e) {
                return e = "function" == typeof e ? e : i, t && t.length ? oi(t, i, e) : []
              }, Br.unset = function(t, e) {
                return null == t || li(t, e)
              }, Br.unzip = ra, Br.unzipWith = na, Br.update = function(t, e, r) {
                return null == t ? t : hi(t, e, mi(r))
              }, Br.updateWith = function(t, e, r, n) {
                return n = "function" == typeof n ? n : i, null == t ? t : hi(t, e, mi(r), n)
              }, Br.values = zo, Br.valuesIn = function(t) {
                return null == t ? [] : Ze(t, Do(t))
              }, Br.without = ia, Br.words = Zo, Br.wrap = function(t, e) {
                return Ra(mi(e), t)
              }, Br.xor = sa, Br.xorBy = aa, Br.xorWith = oa, Br.zip = la, Br.zipObject = function(t, e) {
                return fi(t || [], e || [], Jr)
              }, Br.zipObjectDeep = function(t, e) {
                return fi(t || [], e || [], Zn)
              }, Br.zipWith = ha, Br.entries = Bo, Br.entriesIn = Vo, Br.extend = bo, Br.extendWith = _o, al(Br, Br), Br.add = vl, Br.attempt = Ko, Br.camelCase = jo, Br.capitalize = No, Br.ceil = yl, Br.clamp = function(t, e, r) {
                return r === i && (r = e, e = i), r !== i && (r = (r = mo(r)) == r ? r : 0), e !== i && (e = (e = mo(e)) == e ? e : 0), sn(mo(t), e, r)
              }, Br.clone = function(t) {
                return an(t, 4)
              }, Br.cloneDeep = function(t) {
                return an(t, 5)
              }, Br.cloneDeepWith = function(t, e) {
                return an(t, 5, e = "function" == typeof e ? e : i)
              }, Br.cloneWith = function(t, e) {
                return an(t, 4, e = "function" == typeof e ? e : i)
              }, Br.conformsTo = function(t, e) {
                return null == e || on(t, e, ko(e))
              }, Br.deburr = Go, Br.defaultTo = function(t, e) {
                return null == t || t != t ? e : t
              }, Br.divide = bl, Br.endsWith = function(t, e, r) {
                t = vo(t), e = ai(e);
                var n = t.length,
                  s = r = r === i ? n : sn(co(r), 0, n);
                return (r -= e.length) >= 0 && t.slice(r, s) == e
              }, Br.eq = Va, Br.escape = function(t) {
                return (t = vo(t)) && X.test(t) ? t.replace(q, er) : t
              }, Br.escapeRegExp = function(t) {
                return (t = vo(t)) && rt.test(t) ? t.replace(et, "\\$&") : t
              }, Br.every = function(t, e, r) {
                var n = Ga(t) ? Te : cn;
                return r && gs(t, e, r) && (e = i), n(t, ss(e, 3))
              }, Br.find = da, Br.findIndex = Ns, Br.findKey = function(t, e) {
                return Be(t, ss(e, 3), yn)
              }, Br.findLast = ma, Br.findLastIndex = Gs, Br.findLastKey = function(t, e) {
                return Be(t, ss(e, 3), bn)
              }, Br.floor = _l, Br.forEach = ga, Br.forEachRight = va, Br.forIn = function(t, e) {
                return null == t ? t : gn(t, ss(e, 3), Do)
              }, Br.forInRight = function(t, e) {
                return null == t ? t : vn(t, ss(e, 3), Do)
              }, Br.forOwn = function(t, e) {
                return t && yn(t, ss(e, 3))
              }, Br.forOwnRight = function(t, e) {
                return t && bn(t, ss(e, 3))
              }, Br.get = wo, Br.gt = za, Br.gte = ja, Br.has = function(t, e) {
                return null != t && cs(t, e, wn)
              }, Br.hasIn = Co, Br.head = Hs, Br.identity = rl, Br.includes = function(t, e, r, n) {
                t = Ha(t) ? t : zo(t), r = r && !n ? co(r) : 0;
                var i = t.length;
                return r < 0 && (r = mr(i + r, 0)), so(t) ? r <= i && t.indexOf(e, r) > -1 : !!i && ze(t, e, r) > -1
              }, Br.indexOf = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var i = null == r ? 0 : co(r);
                return i < 0 && (i = mr(n + i, 0)), ze(t, e, i)
              }, Br.inRange = function(t, e, r) {
                return e = uo(e), r === i ? (r = e, e = 0) : r = uo(r),
                  function(t, e, r) {
                    return t >= gr(e, r) && t < mr(e, r)
                  }(t = mo(t), e, r)
              }, Br.invoke = Mo, Br.isArguments = Na, Br.isArray = Ga, Br.isArrayBuffer = $a, Br.isArrayLike = Ha, Br.isArrayLikeObject = Wa, Br.isBoolean = function(t) {
                return !0 === t || !1 === t || Qa(t) && Sn(t) == v
              }, Br.isBuffer = qa, Br.isDate = Ya, Br.isElement = function(t) {
                return Qa(t) && 1 === t.nodeType && !ro(t)
              }, Br.isEmpty = function(t) {
                if (null == t) return !0;
                if (Ha(t) && (Ga(t) || "string" == typeof t || "function" == typeof t.splice || qa(t) || oo(t) || Na(t))) return !t.length;
                var e = us(t);
                if (e == E || e == T) return !t.size;
                if (_s(t)) return !On(t).length;
                for (var r in t)
                  if (Ft.call(t, r)) return !1;
                return !0
              }, Br.isEqual = function(t, e) {
                return kn(t, e)
              }, Br.isEqualWith = function(t, e, r) {
                var n = (r = "function" == typeof r ? r : i) ? r(t, e) : i;
                return n === i ? kn(t, e, i, r) : !!n
              }, Br.isError = Xa, Br.isFinite = function(t) {
                return "number" == typeof t && Le(t)
              }, Br.isFunction = Ua, Br.isInteger = Za, Br.isLength = Ka, Br.isMap = to, Br.isMatch = function(t, e) {
                return t === e || Dn(t, e, os(e))
              }, Br.isMatchWith = function(t, e, r) {
                return r = "function" == typeof r ? r : i, Dn(t, e, os(e), r)
              }, Br.isNaN = function(t) {
                return eo(t) && t != +t
              }, Br.isNative = function(t) {
                if (bs(t)) throw new xt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                return In(t)
              }, Br.isNil = function(t) {
                return null == t
              }, Br.isNull = function(t) {
                return null === t
              }, Br.isNumber = eo, Br.isObject = Ja, Br.isObjectLike = Qa, Br.isPlainObject = ro, Br.isRegExp = no, Br.isSafeInteger = function(t) {
                return Za(t) && t >= -9007199254740991 && t <= u
              }, Br.isSet = io, Br.isString = so, Br.isSymbol = ao, Br.isTypedArray = oo, Br.isUndefined = function(t) {
                return t === i
              }, Br.isWeakMap = function(t) {
                return Qa(t) && us(t) == k
              }, Br.isWeakSet = function(t) {
                return Qa(t) && "[object WeakSet]" == Sn(t)
              }, Br.join = function(t, e) {
                return null == t ? "" : He.call(t, e)
              }, Br.kebabCase = $o, Br.last = Xs, Br.lastIndexOf = function(t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var s = n;
                return r !== i && (s = (s = co(r)) < 0 ? mr(n + s, 0) : gr(s, n - 1)), e == e ? function(t, e, r) {
                  for (var n = r + 1; n--;)
                    if (t[n] === e) return n;
                  return n
                }(t, e, s) : Ve(t, Ne, s, !0)
              }, Br.lowerCase = Ho, Br.lowerFirst = Wo, Br.lt = lo, Br.lte = ho, Br.max = function(t) {
                return t && t.length ? fn(t, rl, Pn) : i
              }, Br.maxBy = function(t, e) {
                return t && t.length ? fn(t, ss(e, 2), Pn) : i
              }, Br.mean = function(t) {
                return Ge(t, rl)
              }, Br.meanBy = function(t, e) {
                return Ge(t, ss(e, 2))
              }, Br.min = function(t) {
                return t && t.length ? fn(t, rl, Rn) : i
              }, Br.minBy = function(t, e) {
                return t && t.length ? fn(t, ss(e, 2), Rn) : i
              }, Br.stubArray = dl, Br.stubFalse = ml, Br.stubObject = function() {
                return {}
              }, Br.stubString = function() {
                return ""
              }, Br.stubTrue = function() {
                return !0
              }, Br.multiply = xl, Br.nth = function(t, e) {
                return t && t.length ? jn(t, co(e)) : i
              }, Br.noConflict = function() {
                return ue._ === this && (ue._ = Vt), this
              }, Br.noop = ol, Br.now = Pa, Br.pad = function(t, e, r) {
                t = vo(t);
                var n = (e = co(e)) ? hr(t) : 0;
                if (!e || n >= e) return t;
                var i = (e - n) / 2;
                return Ni(fe(i), r) + t + Ni(ce(i), r)
              }, Br.padEnd = function(t, e, r) {
                t = vo(t);
                var n = (e = co(e)) ? hr(t) : 0;
                return e && n < e ? t + Ni(e - n, r) : t
              }, Br.padStart = function(t, e, r) {
                t = vo(t);
                var n = (e = co(e)) ? hr(t) : 0;
                return e && n < e ? Ni(e - n, r) + t : t
              }, Br.parseInt = function(t, e, r) {
                return r || null == e ? e = 0 : e && (e = +e), yr(vo(t).replace(nt, ""), e || 0)
              }, Br.random = function(t, e, r) {
                if (r && "boolean" != typeof r && gs(t, e, r) && (e = r = i), r === i && ("boolean" == typeof e ? (r = e, e = i) : "boolean" == typeof t && (r = t, t = i)), t === i && e === i ? (t = 0, e = 1) : (t = uo(t), e === i ? (e = t, t = 0) : e = uo(e)), t > e) {
                  var n = t;
                  t = e, e = n
                }
                if (r || t % 1 || e % 1) {
                  var s = br();
                  return gr(t + s * (e - t + oe("1e-" + ((s + "").length - 1))), e)
                }
                return Wn(t, e)
              }, Br.reduce = function(t, e, r) {
                var n = Ga(t) ? Fe : We,
                  i = arguments.length < 3;
                return n(t, ss(e, 4), r, i, pn)
              }, Br.reduceRight = function(t, e, r) {
                var n = Ga(t) ? Oe : We,
                  i = arguments.length < 3;
                return n(t, ss(e, 4), r, i, un)
              }, Br.repeat = function(t, e, r) {
                return e = (r ? gs(t, e, r) : e === i) ? 1 : co(e), qn(vo(t), e)
              }, Br.replace = function() {
                var t = arguments,
                  e = vo(t[0]);
                return t.length < 3 ? e : e.replace(t[1], t[2])
              }, Br.result = function(t, e, r) {
                var n = -1,
                  s = (e = gi(e, t)).length;
                for (s || (s = 1, t = i); ++n < s;) {
                  var a = null == t ? i : t[Rs(e[n])];
                  a === i && (n = s, a = r), t = Ua(a) ? a.call(t) : a
                }
                return t
              }, Br.round = El, Br.runInContext = t, Br.sample = function(t) {
                return (Ga(t) ? Xr : Xn)(t)
              }, Br.size = function(t) {
                if (null == t) return 0;
                if (Ha(t)) return so(t) ? hr(t) : t.length;
                var e = us(t);
                return e == E || e == T ? t.size : On(t).length
              }, Br.snakeCase = qo, Br.some = function(t, e, r) {
                var n = Ga(t) ? Re : ei;
                return r && gs(t, e, r) && (e = i), n(t, ss(e, 3))
              }, Br.sortedIndex = function(t, e) {
                return ri(t, e)
              }, Br.sortedIndexBy = function(t, e, r) {
                return ni(t, e, ss(r, 2))
              }, Br.sortedIndexOf = function(t, e) {
                var r = null == t ? 0 : t.length;
                if (r) {
                  var n = ri(t, e);
                  if (n < r && Va(t[n], e)) return n
                }
                return -1
              }, Br.sortedLastIndex = function(t, e) {
                return ri(t, e, !0)
              }, Br.sortedLastIndexBy = function(t, e, r) {
                return ni(t, e, ss(r, 2), !0)
              }, Br.sortedLastIndexOf = function(t, e) {
                if (null != t && t.length) {
                  var r = ri(t, e, !0) - 1;
                  if (Va(t[r], e)) return r
                }
                return -1
              }, Br.startCase = Yo, Br.startsWith = function(t, e, r) {
                return t = vo(t), r = null == r ? 0 : sn(co(r), 0, t.length), e = ai(e), t.slice(r, r + e.length) == e
              }, Br.subtract = Sl, Br.sum = function(t) {
                return t && t.length ? qe(t, rl) : 0
              }, Br.sumBy = function(t, e) {
                return t && t.length ? qe(t, ss(e, 2)) : 0
              }, Br.template = function(t, e, r) {
                var n = Br.templateSettings;
                r && gs(t, e, r) && (e = i), t = vo(t), e = _o({}, e, n, Ui);
                var s, a, o = _o({}, e.imports, n.imports, Ui),
                  l = ko(o),
                  h = Ze(o, l),
                  p = 0,
                  u = e.interpolate || bt,
                  c = "__p += '",
                  f = wt((e.escape || bt).source + "|" + u.source + "|" + (u === K ? ut : bt).source + "|" + (e.evaluate || bt).source + "|$", "g"),
                  d = "//# sourceURL=" + (Ft.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ne + "]") + "\n";
                t.replace(f, (function(e, r, n, i, o, l) {
                  return n || (n = i), c += t.slice(p, l).replace(_t, rr), r && (s = !0, c += "' +\n__e(" + r + ") +\n'"), o && (a = !0, c += "';\n" + o + ";\n__p += '"), n && (c += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), p = l + e.length, e
                })), c += "';\n";
                var m = Ft.call(e, "variable") && e.variable;
                if (m) {
                  if (ht.test(m)) throw new xt("Invalid `variable` option passed into `_.template`")
                } else c = "with (obj) {\n" + c + "\n}\n";
                c = (a ? c.replace(G, "") : c).replace($, "$1").replace(H, "$1;"), c = "function(" + (m || "obj") + ") {\n" + (m ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + c + "return __p\n}";
                var g = Ko((function() {
                  return Et(l, d + "return " + c).apply(i, h)
                }));
                if (g.source = c, Xa(g)) throw g;
                return g
              }, Br.times = function(t, e) {
                if ((t = co(t)) < 1 || t > u) return [];
                var r = f,
                  n = gr(t, f);
                e = ss(e), t -= f;
                for (var i = Ye(n, e); ++r < t;) e(r);
                return i
              }, Br.toFinite = uo, Br.toInteger = co, Br.toLength = fo, Br.toLower = function(t) {
                return vo(t).toLowerCase()
              }, Br.toNumber = mo, Br.toSafeInteger = function(t) {
                return t ? sn(co(t), -9007199254740991, u) : 0 === t ? t : 0
              }, Br.toString = vo, Br.toUpper = function(t) {
                return vo(t).toUpperCase()
              }, Br.trim = function(t, e, r) {
                if ((t = vo(t)) && (r || e === i)) return Xe(t);
                if (!t || !(e = ai(e))) return t;
                var n = pr(t),
                  s = pr(e);
                return yi(n, Je(n, s), Qe(n, s) + 1).join("")
              }, Br.trimEnd = function(t, e, r) {
                if ((t = vo(t)) && (r || e === i)) return t.slice(0, ur(t) + 1);
                if (!t || !(e = ai(e))) return t;
                var n = pr(t);
                return yi(n, 0, Qe(n, pr(e)) + 1).join("")
              }, Br.trimStart = function(t, e, r) {
                if ((t = vo(t)) && (r || e === i)) return t.replace(nt, "");
                if (!t || !(e = ai(e))) return t;
                var n = pr(t);
                return yi(n, Je(n, pr(e))).join("")
              }, Br.truncate = function(t, e) {
                var r = 30,
                  n = "...";
                if (Ja(e)) {
                  var s = "separator" in e ? e.separator : s;
                  r = "length" in e ? co(e.length) : r, n = "omission" in e ? ai(e.omission) : n
                }
                var a = (t = vo(t)).length;
                if (nr(t)) {
                  var o = pr(t);
                  a = o.length
                }
                if (r >= a) return t;
                var l = r - hr(n);
                if (l < 1) return n;
                var h = o ? yi(o, 0, l).join("") : t.slice(0, l);
                if (s === i) return h + n;
                if (o && (l += h.length - l), no(s)) {
                  if (t.slice(l).search(s)) {
                    var p, u = h;
                    for (s.global || (s = wt(s.source, vo(ct.exec(s)) + "g")), s.lastIndex = 0; p = s.exec(u);) var c = p.index;
                    h = h.slice(0, c === i ? l : c)
                  }
                } else if (t.indexOf(ai(s), l) != l) {
                  var f = h.lastIndexOf(s);
                  f > -1 && (h = h.slice(0, f))
                }
                return h + n
              }, Br.unescape = function(t) {
                return (t = vo(t)) && Y.test(t) ? t.replace(W, cr) : t
              }, Br.uniqueId = function(t) {
                var e = ++Ot;
                return vo(t) + e
              }, Br.upperCase = Xo, Br.upperFirst = Uo, Br.each = ga, Br.eachRight = va, Br.first = Hs, al(Br, (gl = {}, yn(Br, (function(t, e) {
                Ft.call(Br.prototype, e) || (gl[e] = t)
              })), gl), {
                chain: !1
              }), Br.VERSION = "4.17.21", we(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                Br[t].placeholder = Br
              })), we(["drop", "take"], (function(t, e) {
                Nr.prototype[t] = function(r) {
                  r = r === i ? 1 : mr(co(r), 0);
                  var n = this.__filtered__ && !e ? new Nr(this) : this.clone();
                  return n.__filtered__ ? n.__takeCount__ = gr(r, n.__takeCount__) : n.__views__.push({
                    size: gr(r, f),
                    type: t + (n.__dir__ < 0 ? "Right" : "")
                  }), n
                }, Nr.prototype[t + "Right"] = function(e) {
                  return this.reverse()[t](e).reverse()
                }
              })), we(["filter", "map", "takeWhile"], (function(t, e) {
                var r = e + 1,
                  n = 1 == r || 3 == r;
                Nr.prototype[t] = function(t) {
                  var e = this.clone();
                  return e.__iteratees__.push({
                    iteratee: ss(t, 3),
                    type: r
                  }), e.__filtered__ = e.__filtered__ || n, e
                }
              })), we(["head", "last"], (function(t, e) {
                var r = "take" + (e ? "Right" : "");
                Nr.prototype[t] = function() {
                  return this[r](1).value()[0]
                }
              })), we(["initial", "tail"], (function(t, e) {
                var r = "drop" + (e ? "" : "Right");
                Nr.prototype[t] = function() {
                  return this.__filtered__ ? new Nr(this) : this[r](1)
                }
              })), Nr.prototype.compact = function() {
                return this.filter(rl)
              }, Nr.prototype.find = function(t) {
                return this.filter(t).head()
              }, Nr.prototype.findLast = function(t) {
                return this.reverse().find(t)
              }, Nr.prototype.invokeMap = Yn((function(t, e) {
                return "function" == typeof t ? new Nr(this) : this.map((function(r) {
                  return An(r, t, e)
                }))
              })), Nr.prototype.reject = function(t) {
                return this.filter(Fa(ss(t)))
              }, Nr.prototype.slice = function(t, e) {
                t = co(t);
                var r = this;
                return r.__filtered__ && (t > 0 || e < 0) ? new Nr(r) : (t < 0 ? r = r.takeRight(-t) : t && (r = r.drop(t)), e !== i && (r = (e = co(e)) < 0 ? r.dropRight(-e) : r.take(e - t)), r)
              }, Nr.prototype.takeRightWhile = function(t) {
                return this.reverse().takeWhile(t).reverse()
              }, Nr.prototype.toArray = function() {
                return this.take(f)
              }, yn(Nr.prototype, (function(t, e) {
                var r = /^(?:filter|find|map|reject)|While$/.test(e),
                  n = /^(?:head|last)$/.test(e),
                  s = Br[n ? "take" + ("last" == e ? "Right" : "") : e],
                  a = n || /^find/.test(e);
                s && (Br.prototype[e] = function() {
                  var e = this.__wrapped__,
                    o = n ? [1] : arguments,
                    l = e instanceof Nr,
                    h = o[0],
                    p = l || Ga(e),
                    u = function(t) {
                      var e = s.apply(Br, Ie([t], o));
                      return n && c ? e[0] : e
                    };
                  p && r && "function" == typeof h && 1 != h.length && (l = p = !1);
                  var c = this.__chain__,
                    f = !!this.__actions__.length,
                    d = a && !c,
                    m = l && !f;
                  if (!a && p) {
                    e = m ? e : new Nr(this);
                    var g = t.apply(e, o);
                    return g.__actions__.push({
                      func: ua,
                      args: [u],
                      thisArg: i
                    }), new jr(g, c)
                  }
                  return d && m ? t.apply(this, o) : (g = this.thru(u), d ? n ? g.value()[0] : g.value() : g)
                })
              })), we(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                var e = At[t],
                  r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                  n = /^(?:pop|shift)$/.test(t);
                Br.prototype[t] = function() {
                  var t = arguments;
                  if (n && !this.__chain__) {
                    var i = this.value();
                    return e.apply(Ga(i) ? i : [], t)
                  }
                  return this[r]((function(r) {
                    return e.apply(Ga(r) ? r : [], t)
                  }))
                }
              })), yn(Nr.prototype, (function(t, e) {
                var r = Br[e];
                if (r) {
                  var n = r.name + "";
                  Ft.call(Ar, n) || (Ar[n] = []), Ar[n].push({
                    name: e,
                    func: r
                  })
                }
              })), Ar[Bi(i, 2).name] = [{
                name: "wrapper",
                func: i
              }], Nr.prototype.clone = function() {
                var t = new Nr(this.__wrapped__);
                return t.__actions__ = Ci(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ci(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ci(this.__views__), t
              }, Nr.prototype.reverse = function() {
                if (this.__filtered__) {
                  var t = new Nr(this);
                  t.__dir__ = -1, t.__filtered__ = !0
                } else(t = this.clone()).__dir__ *= -1;
                return t
              }, Nr.prototype.value = function() {
                var t = this.__wrapped__.value(),
                  e = this.__dir__,
                  r = Ga(t),
                  n = e < 0,
                  i = r ? t.length : 0,
                  s = function(t, e, r) {
                    for (var n = -1, i = r.length; ++n < i;) {
                      var s = r[n],
                        a = s.size;
                      switch (s.type) {
                        case "drop":
                          t += a;
                          break;
                        case "dropRight":
                          e -= a;
                          break;
                        case "take":
                          e = gr(e, t + a);
                          break;
                        case "takeRight":
                          t = mr(t, e - a)
                      }
                    }
                    return {
                      start: t,
                      end: e
                    }
                  }(0, i, this.__views__),
                  a = s.start,
                  o = s.end,
                  l = o - a,
                  h = n ? o : a - 1,
                  p = this.__iteratees__,
                  u = p.length,
                  c = 0,
                  f = gr(l, this.__takeCount__);
                if (!r || !n && i == l && f == l) return ui(t, this.__actions__);
                var d = [];
                t: for (; l-- && c < f;) {
                  for (var m = -1, g = t[h += e]; ++m < u;) {
                    var v = p[m],
                      y = v.iteratee,
                      b = v.type,
                      _ = y(g);
                    if (2 == b) g = _;
                    else if (!_) {
                      if (1 == b) continue t;
                      break t
                    }
                  }
                  d[c++] = g
                }
                return d
              }, Br.prototype.at = ca, Br.prototype.chain = function() {
                return pa(this)
              }, Br.prototype.commit = function() {
                return new jr(this.value(), this.__chain__)
              }, Br.prototype.next = function() {
                this.__values__ === i && (this.__values__ = po(this.value()));
                var t = this.__index__ >= this.__values__.length;
                return {
                  done: t,
                  value: t ? i : this.__values__[this.__index__++]
                }
              }, Br.prototype.plant = function(t) {
                for (var e, r = this; r instanceof zr;) {
                  var n = Bs(r);
                  n.__index__ = 0, n.__values__ = i, e ? s.__wrapped__ = n : e = n;
                  var s = n;
                  r = r.__wrapped__
                }
                return s.__wrapped__ = t, e
              }, Br.prototype.reverse = function() {
                var t = this.__wrapped__;
                if (t instanceof Nr) {
                  var e = t;
                  return this.__actions__.length && (e = new Nr(this)), (e = e.reverse()).__actions__.push({
                    func: ua,
                    args: [Js],
                    thisArg: i
                  }), new jr(e, this.__chain__)
                }
                return this.thru(Js)
              }, Br.prototype.toJSON = Br.prototype.valueOf = Br.prototype.value = function() {
                return ui(this.__wrapped__, this.__actions__)
              }, Br.prototype.first = Br.prototype.head, Ut && (Br.prototype[Ut] = function() {
                return this
              }), Br
            }();
          ue._ = fr, (n = function() {
            return fr
          }.call(e, r, e, t)) === i || (t.exports = n)
        }.call(this)
    },
    5332: (t, e, r) => {
      "use strict";
      var n = r(4226);

      function i() {}

      function s() {}
      s.resetWarningCache = i, t.exports = function() {
        function t(t, e, r, i, s, a) {
          if (a !== n) {
            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o.name = "Invariant Violation", o
          }
        }

        function e() {
          return t
        }
        t.isRequired = t;
        var r = {
          array: t,
          bigint: t,
          bool: t,
          func: t,
          number: t,
          object: t,
          string: t,
          symbol: t,
          any: t,
          arrayOf: e,
          element: t,
          elementType: t,
          instanceOf: e,
          node: t,
          objectOf: e,
          oneOf: e,
          oneOfType: e,
          shape: e,
          exact: e,
          checkPropTypes: s,
          resetWarningCache: i
        };
        return r.PropTypes = r, r
      }
    },
    9109: (t, e, r) => {
      t.exports = r(5332)()
    },
    4226: t => {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    206: (t, e, r) => {
      "use strict";
      var n = c(r(5272)),
        i = c(r(671)),
        s = c(r(4064)),
        a = c(r(2107)),
        o = c(r(9599)),
        l = c(r(4257)),
        h = c(r(822)),
        p = c(r(9109)),
        u = c(r(9729));

      function c(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var f = function(t) {
        function e() {
          var t, r, n, a;
          (0, s.default)(this, e);
          for (var l = arguments.length, h = Array(l), p = 0; p < l; p++) h[p] = arguments[p];
          return r = n = (0, o.default)(this, (t = e.__proto__ || (0, i.default)(e)).call.apply(t, [this].concat(h))), n.handleClickToPause = function() {
            n.anim.isPaused ? n.anim.play() : n.anim.pause()
          }, a = r, (0, o.default)(n, a)
        }
        return (0, l.default)(e, t), (0, a.default)(e, [{
          key: "componentDidMount",
          value: function() {
            var t = this.props,
              e = t.options,
              r = t.eventListeners,
              i = e.loop,
              s = e.autoplay,
              a = e.animationData,
              o = e.rendererSettings,
              l = e.segments;
            this.options = {
              container: this.el,
              renderer: "svg",
              loop: !1 !== i,
              autoplay: !1 !== s,
              segments: !1 !== l,
              animationData: a,
              rendererSettings: o
            }, this.options = (0, n.default)({}, this.options, e), this.anim = u.default.loadAnimation(this.options), this.registerEvents(r)
          }
        }, {
          key: "componentWillUpdate",
          value: function(t) {
            this.options.animationData !== t.options.animationData && (this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options = (0, n.default)({}, this.options, t.options), this.anim = u.default.loadAnimation(this.options), this.registerEvents(t.eventListeners))
          }
        }, {
          key: "componentDidUpdate",
          value: function() {
            this.props.isStopped ? this.stop() : this.props.segments ? this.playSegments() : this.play(), this.pause(), this.setSpeed(), this.setDirection()
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options.animationData = null, this.anim = null
          }
        }, {
          key: "setSpeed",
          value: function() {
            this.anim.setSpeed(this.props.speed)
          }
        }, {
          key: "setDirection",
          value: function() {
            this.anim.setDirection(this.props.direction)
          }
        }, {
          key: "play",
          value: function() {
            this.anim.play()
          }
        }, {
          key: "playSegments",
          value: function() {
            this.anim.playSegments(this.props.segments)
          }
        }, {
          key: "stop",
          value: function() {
            this.anim.stop()
          }
        }, {
          key: "pause",
          value: function() {
            (this.props.isPaused && !this.anim.isPaused || !this.props.isPaused && this.anim.isPaused) && this.anim.pause()
          }
        }, {
          key: "destroy",
          value: function() {
            this.anim.destroy()
          }
        }, {
          key: "registerEvents",
          value: function(t) {
            var e = this;
            t.forEach((function(t) {
              e.anim.addEventListener(t.eventName, t.callback)
            }))
          }
        }, {
          key: "deRegisterEvents",
          value: function(t) {
            var e = this;
            t.forEach((function(t) {
              e.anim.removeEventListener(t.eventName, t.callback)
            }))
          }
        }, {
          key: "render",
          value: function() {
            var t = this,
              e = this.props,
              r = e.width,
              i = e.height,
              s = e.ariaRole,
              a = e.ariaLabel,
              o = e.isClickToPauseDisabled,
              l = e.title,
              p = function(t) {
                return "number" == typeof t ? t + "px" : t || "100%"
              },
              u = (0, n.default)({
                width: p(r),
                height: p(i),
                overflow: "hidden",
                margin: "0 auto",
                outline: "none"
              }, this.props.style),
              c = o ? function() {
                return null
              } : this.handleClickToPause;
            return h.default.createElement("div", {
              ref: function(e) {
                t.el = e
              },
              style: u,
              onClick: c,
              title: l,
              role: s,
              "aria-label": a,
              tabIndex: "0"
            })
          }
        }]), e
      }(h.default.Component);
      e.Z = f, f.propTypes = {
        eventListeners: p.default.arrayOf(p.default.object),
        options: p.default.object.isRequired,
        height: p.default.oneOfType([p.default.string, p.default.number]),
        width: p.default.oneOfType([p.default.string, p.default.number]),
        isStopped: p.default.bool,
        isPaused: p.default.bool,
        speed: p.default.number,
        segments: p.default.arrayOf(p.default.number),
        direction: p.default.number,
        ariaRole: p.default.string,
        ariaLabel: p.default.string,
        isClickToPauseDisabled: p.default.bool,
        title: p.default.string
      }, f.defaultProps = {
        eventListeners: [],
        isStopped: !1,
        isPaused: !1,
        speed: 1,
        ariaRole: "button",
        ariaLabel: "animation",
        isClickToPauseDisabled: !1,
        title: ""
      }
    },
    6945: (t, e, r) => {
      t.exports = {
        default: r(4637),
        __esModule: !0
      }
    },
    6102: (t, e, r) => {
      t.exports = {
        default: r(9404),
        __esModule: !0
      }
    },
    6895: (t, e, r) => {
      t.exports = {
        default: r(9807),
        __esModule: !0
      }
    },
    671: (t, e, r) => {
      t.exports = {
        default: r(5438),
        __esModule: !0
      }
    },
    8307: (t, e, r) => {
      t.exports = {
        default: r(7145),
        __esModule: !0
      }
    },
    4513: (t, e, r) => {
      t.exports = {
        default: r(3241),
        __esModule: !0
      }
    },
    2659: (t, e, r) => {
      t.exports = {
        default: r(3174),
        __esModule: !0
      }
    },
    4064: (t, e) => {
      "use strict";
      e.__esModule = !0, e.default = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
    },
    2107: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n, i = (n = r(6895)) && n.__esModule ? n : {
        default: n
      };
      e.default = function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, i.default)(t, n.key, n)
          }
        }
        return function(e, r, n) {
          return r && t(e.prototype, r), n && t(e, n), e
        }
      }()
    },
    5272: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n, i = (n = r(6945)) && n.__esModule ? n : {
        default: n
      };
      e.default = i.default || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
      }
    },
    4257: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n = a(r(8307)),
        i = a(r(6102)),
        s = a(r(5541));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      e.default = function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, s.default)(e)));
        t.prototype = (0, i.default)(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (n.default ? (0, n.default)(t, e) : t.__proto__ = e)
      }
    },
    9599: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n, i = (n = r(5541)) && n.__esModule ? n : {
        default: n
      };
      e.default = function(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== (void 0 === e ? "undefined" : (0, i.default)(e)) && "function" != typeof e ? t : e
      }
    },
    5541: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var n = a(r(2659)),
        i = a(r(4513)),
        s = "function" == typeof i.default && "symbol" == typeof n.default ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : typeof t
        };

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      e.default = "function" == typeof i.default && "symbol" === s(n.default) ? function(t) {
        return void 0 === t ? "undefined" : s(t)
      } : function(t) {
        return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : void 0 === t ? "undefined" : s(t)
      }
    },
    4637: (t, e, r) => {
      r(4573), t.exports = r(2272).Object.assign
    },
    9404: (t, e, r) => {
      r(7262);
      var n = r(2272).Object;
      t.exports = function(t, e) {
        return n.create(t, e)
      }
    },
    9807: (t, e, r) => {
      r(7003);
      var n = r(2272).Object;
      t.exports = function(t, e, r) {
        return n.defineProperty(t, e, r)
      }
    },
    5438: (t, e, r) => {
      r(6299), t.exports = r(2272).Object.getPrototypeOf
    },
    7145: (t, e, r) => {
      r(4580), t.exports = r(2272).Object.setPrototypeOf
    },
    3241: (t, e, r) => {
      r(9151), r(8182), r(3471), r(1238), t.exports = r(2272).Symbol
    },
    3174: (t, e, r) => {
      r(8825), r(2282), t.exports = r(2208).f("iterator")
    },
    5161: t => {
      t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
      }
    },
    3557: t => {
      t.exports = function() {}
    },
    3672: (t, e, r) => {
      var n = r(5984);
      t.exports = function(t) {
        if (!n(t)) throw TypeError(t + " is not an object!");
        return t
      }
    },
    5368: (t, e, r) => {
      var n = r(7039),
        i = r(7477),
        s = r(1457);
      t.exports = function(t) {
        return function(e, r, a) {
          var o, l = n(e),
            h = i(l.length),
            p = s(a, h);
          if (t && r != r) {
            for (; h > p;)
              if ((o = l[p++]) != o) return !0
          } else
            for (; h > p; p++)
              if ((t || p in l) && l[p] === r) return t || p || 0;
          return !t && -1
        }
      }
    },
    9808: t => {
      var e = {}.toString;
      t.exports = function(t) {
        return e.call(t).slice(8, -1)
      }
    },
    2272: t => {
      var e = t.exports = {
        version: "2.6.12"
      };
      "number" == typeof __e && (__e = e)
    },
    859: (t, e, r) => {
      var n = r(5161);
      t.exports = function(t, e, r) {
        if (n(t), void 0 === e) return t;
        switch (r) {
          case 1:
            return function(r) {
              return t.call(e, r)
            };
          case 2:
            return function(r, n) {
              return t.call(e, r, n)
            };
          case 3:
            return function(r, n, i) {
              return t.call(e, r, n, i)
            }
        }
        return function() {
          return t.apply(e, arguments)
        }
      }
    },
    7035: t => {
      t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
      }
    },
    9129: (t, e, r) => {
      t.exports = !r(5511)((function() {
        return 7 != Object.defineProperty({}, "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    5176: (t, e, r) => {
      var n = r(5984),
        i = r(1554).document,
        s = n(i) && n(i.createElement);
      t.exports = function(t) {
        return s ? i.createElement(t) : {}
      }
    },
    3451: t => {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    1254: (t, e, r) => {
      var n = r(6947),
        i = r(1428),
        s = r(9757);
      t.exports = function(t) {
        var e = n(t),
          r = i.f;
        if (r)
          for (var a, o = r(t), l = s.f, h = 0; o.length > h;) l.call(t, a = o[h++]) && e.push(a);
        return e
      }
    },
    5760: (t, e, r) => {
      var n = r(1554),
        i = r(2272),
        s = r(859),
        a = r(1643),
        o = r(2554),
        l = "prototype",
        h = function(t, e, r) {
          var p, u, c, f = t & h.F,
            d = t & h.G,
            m = t & h.S,
            g = t & h.P,
            v = t & h.B,
            y = t & h.W,
            b = d ? i : i[e] || (i[e] = {}),
            _ = b[l],
            x = d ? n : m ? n[e] : (n[e] || {})[l];
          for (p in d && (r = e), r)(u = !f && x && void 0 !== x[p]) && o(b, p) || (c = u ? x[p] : r[p], b[p] = d && "function" != typeof x[p] ? r[p] : v && u ? s(c, n) : y && x[p] == c ? function(t) {
            var e = function(e, r, n) {
              if (this instanceof t) {
                switch (arguments.length) {
                  case 0:
                    return new t;
                  case 1:
                    return new t(e);
                  case 2:
                    return new t(e, r)
                }
                return new t(e, r, n)
              }
              return t.apply(this, arguments)
            };
            return e[l] = t[l], e
          }(c) : g && "function" == typeof c ? s(Function.call, c) : c, g && ((b.virtual || (b.virtual = {}))[p] = c, t & h.R && _ && !_[p] && a(_, p, c)))
        };
      h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, h.U = 64, h.R = 128, t.exports = h
    },
    5511: t => {
      t.exports = function(t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    1554: t => {
      var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = e)
    },
    2554: t => {
      var e = {}.hasOwnProperty;
      t.exports = function(t, r) {
        return e.call(t, r)
      }
    },
    1643: (t, e, r) => {
      var n = r(556),
        i = r(3890);
      t.exports = r(9129) ? function(t, e, r) {
        return n.f(t, e, i(1, r))
      } : function(t, e, r) {
        return t[e] = r, t
      }
    },
    1990: (t, e, r) => {
      var n = r(1554).document;
      t.exports = n && n.documentElement
    },
    8366: (t, e, r) => {
      t.exports = !r(9129) && !r(5511)((function() {
        return 7 != Object.defineProperty(r(5176)("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    5649: (t, e, r) => {
      var n = r(9808);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == n(t) ? t.split("") : Object(t)
      }
    },
    1609: (t, e, r) => {
      var n = r(9808);
      t.exports = Array.isArray || function(t) {
        return "Array" == n(t)
      }
    },
    5984: t => {
      t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
      }
    },
    6897: (t, e, r) => {
      "use strict";
      var n = r(3337),
        i = r(3890),
        s = r(8753),
        a = {};
      r(1643)(a, r(6057)("iterator"), (function() {
        return this
      })), t.exports = function(t, e, r) {
        t.prototype = n(a, {
          next: i(1, r)
        }), s(t, e + " Iterator")
      }
    },
    196: (t, e, r) => {
      "use strict";
      var n = r(6179),
        i = r(5760),
        s = r(6075),
        a = r(1643),
        o = r(1734),
        l = r(6897),
        h = r(8753),
        p = r(6471),
        u = r(6057)("iterator"),
        c = !([].keys && "next" in [].keys()),
        f = "keys",
        d = "values",
        m = function() {
          return this
        };
      t.exports = function(t, e, r, g, v, y, b) {
        l(r, e, g);
        var _, x, E, S = function(t) {
            if (!c && t in T) return T[t];
            switch (t) {
              case f:
              case d:
                return function() {
                  return new r(this, t)
                }
            }
            return function() {
              return new r(this, t)
            }
          },
          P = e + " Iterator",
          w = v == d,
          C = !1,
          T = t.prototype,
          A = T[u] || T["@@iterator"] || v && T[v],
          M = A || S(v),
          k = v ? w ? S("entries") : M : void 0,
          D = "Array" == e && T.entries || A;
        if (D && (E = p(D.call(new t))) !== Object.prototype && E.next && (h(E, P, !0), n || "function" == typeof E[u] || a(E, u, m)), w && A && A.name !== d && (C = !0, M = function() {
            return A.call(this)
          }), n && !b || !c && !C && T[u] || a(T, u, M), o[e] = M, o[P] = m, v)
          if (_ = {
              values: w ? M : S(d),
              keys: y ? M : S(f),
              entries: k
            }, b)
            for (x in _) x in T || s(T, x, _[x]);
          else i(i.P + i.F * (c || C), e, _);
        return _
      }
    },
    1448: t => {
      t.exports = function(t, e) {
        return {
          value: e,
          done: !!t
        }
      }
    },
    1734: t => {
      t.exports = {}
    },
    6179: t => {
      t.exports = !0
    },
    626: (t, e, r) => {
      var n = r(6755)("meta"),
        i = r(5984),
        s = r(2554),
        a = r(556).f,
        o = 0,
        l = Object.isExtensible || function() {
          return !0
        },
        h = !r(5511)((function() {
          return l(Object.preventExtensions({}))
        })),
        p = function(t) {
          a(t, n, {
            value: {
              i: "O" + ++o,
              w: {}
            }
          })
        },
        u = t.exports = {
          KEY: n,
          NEED: !1,
          fastKey: function(t, e) {
            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!s(t, n)) {
              if (!l(t)) return "F";
              if (!e) return "E";
              p(t)
            }
            return t[n].i
          },
          getWeak: function(t, e) {
            if (!s(t, n)) {
              if (!l(t)) return !0;
              if (!e) return !1;
              p(t)
            }
            return t[n].w
          },
          onFreeze: function(t) {
            return h && u.NEED && l(t) && !s(t, n) && p(t), t
          }
        }
    },
    4928: (t, e, r) => {
      "use strict";
      var n = r(9129),
        i = r(6947),
        s = r(1428),
        a = r(9757),
        o = r(5695),
        l = r(5649),
        h = Object.assign;
      t.exports = !h || r(5511)((function() {
        var t = {},
          e = {},
          r = Symbol(),
          n = "abcdefghijklmnopqrst";
        return t[r] = 7, n.split("").forEach((function(t) {
          e[t] = t
        })), 7 != h({}, t)[r] || Object.keys(h({}, e)).join("") != n
      })) ? function(t, e) {
        for (var r = o(t), h = arguments.length, p = 1, u = s.f, c = a.f; h > p;)
          for (var f, d = l(arguments[p++]), m = u ? i(d).concat(u(d)) : i(d), g = m.length, v = 0; g > v;) f = m[v++], n && !c.call(d, f) || (r[f] = d[f]);
        return r
      } : h
    },
    3337: (t, e, r) => {
      var n = r(3672),
        i = r(5688),
        s = r(3451),
        a = r(1784)("IE_PROTO"),
        o = function() {},
        l = "prototype",
        h = function() {
          var t, e = r(5176)("iframe"),
            n = s.length;
          for (e.style.display = "none", r(1990).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), h = t.F; n--;) delete h[l][s[n]];
          return h()
        };
      t.exports = Object.create || function(t, e) {
        var r;
        return null !== t ? (o[l] = n(t), r = new o, o[l] = null, r[a] = t) : r = h(), void 0 === e ? r : i(r, e)
      }
    },
    556: (t, e, r) => {
      var n = r(3672),
        i = r(8366),
        s = r(6362),
        a = Object.defineProperty;
      e.f = r(9129) ? Object.defineProperty : function(t, e, r) {
        if (n(t), e = s(e, !0), n(r), i) try {
          return a(t, e, r)
        } catch (t) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (t[e] = r.value), t
      }
    },
    5688: (t, e, r) => {
      var n = r(556),
        i = r(3672),
        s = r(6947);
      t.exports = r(9129) ? Object.defineProperties : function(t, e) {
        i(t);
        for (var r, a = s(e), o = a.length, l = 0; o > l;) n.f(t, r = a[l++], e[r]);
        return t
      }
    },
    7875: (t, e, r) => {
      var n = r(9757),
        i = r(3890),
        s = r(7039),
        a = r(6362),
        o = r(2554),
        l = r(8366),
        h = Object.getOwnPropertyDescriptor;
      e.f = r(9129) ? h : function(t, e) {
        if (t = s(t), e = a(e, !0), l) try {
          return h(t, e)
        } catch (t) {}
        if (o(t, e)) return i(!n.f.call(t, e), t[e])
      }
    },
    3611: (t, e, r) => {
      var n = r(7039),
        i = r(2119).f,
        s = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      t.exports.f = function(t) {
        return a && "[object Window]" == s.call(t) ? function(t) {
          try {
            return i(t)
          } catch (t) {
            return a.slice()
          }
        }(t) : i(n(t))
      }
    },
    2119: (t, e, r) => {
      var n = r(2e3),
        i = r(3451).concat("length", "prototype");
      e.f = Object.getOwnPropertyNames || function(t) {
        return n(t, i)
      }
    },
    1428: (t, e) => {
      e.f = Object.getOwnPropertySymbols
    },
    6471: (t, e, r) => {
      var n = r(2554),
        i = r(5695),
        s = r(1784)("IE_PROTO"),
        a = Object.prototype;
      t.exports = Object.getPrototypeOf || function(t) {
        return t = i(t), n(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
      }
    },
    2e3: (t, e, r) => {
      var n = r(2554),
        i = r(7039),
        s = r(5368)(!1),
        a = r(1784)("IE_PROTO");
      t.exports = function(t, e) {
        var r, o = i(t),
          l = 0,
          h = [];
        for (r in o) r != a && n(o, r) && h.push(r);
        for (; e.length > l;) n(o, r = e[l++]) && (~s(h, r) || h.push(r));
        return h
      }
    },
    6947: (t, e, r) => {
      var n = r(2e3),
        i = r(3451);
      t.exports = Object.keys || function(t) {
        return n(t, i)
      }
    },
    9757: (t, e) => {
      e.f = {}.propertyIsEnumerable
    },
    2032: (t, e, r) => {
      var n = r(5760),
        i = r(2272),
        s = r(5511);
      t.exports = function(t, e) {
        var r = (i.Object || {})[t] || Object[t],
          a = {};
        a[t] = e(r), n(n.S + n.F * s((function() {
          r(1)
        })), "Object", a)
      }
    },
    3890: t => {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        }
      }
    },
    6075: (t, e, r) => {
      t.exports = r(1643)
    },
    4636: (t, e, r) => {
      var n = r(5984),
        i = r(3672),
        s = function(t, e) {
          if (i(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
      t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, n) {
          try {
            (n = r(859)(Function.call, r(7875).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
          } catch (t) {
            e = !0
          }
          return function(t, r) {
            return s(t, r), e ? t.__proto__ = r : n(t, r), t
          }
        }({}, !1) : void 0),
        check: s
      }
    },
    8753: (t, e, r) => {
      var n = r(556).f,
        i = r(2554),
        s = r(6057)("toStringTag");
      t.exports = function(t, e, r) {
        t && !i(t = r ? t : t.prototype, s) && n(t, s, {
          configurable: !0,
          value: e
        })
      }
    },
    1784: (t, e, r) => {
      var n = r(1051)("keys"),
        i = r(6755);
      t.exports = function(t) {
        return n[t] || (n[t] = i(t))
      }
    },
    1051: (t, e, r) => {
      var n = r(2272),
        i = r(1554),
        s = "__core-js_shared__",
        a = i[s] || (i[s] = {});
      (t.exports = function(t, e) {
        return a[t] || (a[t] = void 0 !== e ? e : {})
      })("versions", []).push({
        version: n.version,
        mode: r(6179) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      })
    },
    2405: (t, e, r) => {
      var n = r(7888),
        i = r(7035);
      t.exports = function(t) {
        return function(e, r) {
          var s, a, o = String(i(e)),
            l = n(r),
            h = o.length;
          return l < 0 || l >= h ? t ? "" : void 0 : (s = o.charCodeAt(l)) < 55296 || s > 56319 || l + 1 === h || (a = o.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? o.charAt(l) : s : t ? o.slice(l, l + 2) : a - 56320 + (s - 55296 << 10) + 65536
        }
      }
    },
    1457: (t, e, r) => {
      var n = r(7888),
        i = Math.max,
        s = Math.min;
      t.exports = function(t, e) {
        return (t = n(t)) < 0 ? i(t + e, 0) : s(t, e)
      }
    },
    7888: t => {
      var e = Math.ceil,
        r = Math.floor;
      t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
      }
    },
    7039: (t, e, r) => {
      var n = r(5649),
        i = r(7035);
      t.exports = function(t) {
        return n(i(t))
      }
    },
    7477: (t, e, r) => {
      var n = r(7888),
        i = Math.min;
      t.exports = function(t) {
        return t > 0 ? i(n(t), 9007199254740991) : 0
      }
    },
    5695: (t, e, r) => {
      var n = r(7035);
      t.exports = function(t) {
        return Object(n(t))
      }
    },
    6362: (t, e, r) => {
      var n = r(5984);
      t.exports = function(t, e) {
        if (!n(t)) return t;
        var r, i;
        if (e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
        if ("function" == typeof(r = t.valueOf) && !n(i = r.call(t))) return i;
        if (!e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
      }
    },
    6755: t => {
      var e = 0,
        r = Math.random();
      t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
      }
    },
    5777: (t, e, r) => {
      var n = r(1554),
        i = r(2272),
        s = r(6179),
        a = r(2208),
        o = r(556).f;
      t.exports = function(t) {
        var e = i.Symbol || (i.Symbol = s ? {} : n.Symbol || {});
        "_" == t.charAt(0) || t in e || o(e, t, {
          value: a.f(t)
        })
      }
    },
    2208: (t, e, r) => {
      e.f = r(6057)
    },
    6057: (t, e, r) => {
      var n = r(1051)("wks"),
        i = r(6755),
        s = r(1554).Symbol,
        a = "function" == typeof s;
      (t.exports = function(t) {
        return n[t] || (n[t] = a && s[t] || (a ? s : i)("Symbol." + t))
      }).store = n
    },
    933: (t, e, r) => {
      "use strict";
      var n = r(3557),
        i = r(1448),
        s = r(1734),
        a = r(7039);
      t.exports = r(196)(Array, "Array", (function(t, e) {
        this._t = a(t), this._i = 0, this._k = e
      }), (function() {
        var t = this._t,
          e = this._k,
          r = this._i++;
        return !t || r >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
      }), "values"), s.Arguments = s.Array, n("keys"), n("values"), n("entries")
    },
    4573: (t, e, r) => {
      var n = r(5760);
      n(n.S + n.F, "Object", {
        assign: r(4928)
      })
    },
    7262: (t, e, r) => {
      var n = r(5760);
      n(n.S, "Object", {
        create: r(3337)
      })
    },
    7003: (t, e, r) => {
      var n = r(5760);
      n(n.S + n.F * !r(9129), "Object", {
        defineProperty: r(556).f
      })
    },
    6299: (t, e, r) => {
      var n = r(5695),
        i = r(6471);
      r(2032)("getPrototypeOf", (function() {
        return function(t) {
          return i(n(t))
        }
      }))
    },
    4580: (t, e, r) => {
      var n = r(5760);
      n(n.S, "Object", {
        setPrototypeOf: r(4636).set
      })
    },
    8182: () => {},
    8825: (t, e, r) => {
      "use strict";
      var n = r(2405)(!0);
      r(196)(String, "String", (function(t) {
        this._t = String(t), this._i = 0
      }), (function() {
        var t, e = this._t,
          r = this._i;
        return r >= e.length ? {
          value: void 0,
          done: !0
        } : (t = n(e, r), this._i += t.length, {
          value: t,
          done: !1
        })
      }))
    },
    9151: (t, e, r) => {
      "use strict";
      var n = r(1554),
        i = r(2554),
        s = r(9129),
        a = r(5760),
        o = r(6075),
        l = r(626).KEY,
        h = r(5511),
        p = r(1051),
        u = r(8753),
        c = r(6755),
        f = r(6057),
        d = r(2208),
        m = r(5777),
        g = r(1254),
        v = r(1609),
        y = r(3672),
        b = r(5984),
        _ = r(5695),
        x = r(7039),
        E = r(6362),
        S = r(3890),
        P = r(3337),
        w = r(3611),
        C = r(7875),
        T = r(1428),
        A = r(556),
        M = r(6947),
        k = C.f,
        D = A.f,
        I = w.f,
        F = n.Symbol,
        O = n.JSON,
        R = O && O.stringify,
        L = "prototype",
        B = f("_hidden"),
        V = f("toPrimitive"),
        z = {}.propertyIsEnumerable,
        j = p("symbol-registry"),
        N = p("symbols"),
        G = p("op-symbols"),
        $ = Object[L],
        H = "function" == typeof F && !!T.f,
        W = n.QObject,
        q = !W || !W[L] || !W[L].findChild,
        Y = s && h((function() {
          return 7 != P(D({}, "a", {
            get: function() {
              return D(this, "a", {
                value: 7
              }).a
            }
          })).a
        })) ? function(t, e, r) {
          var n = k($, e);
          n && delete $[e], D(t, e, r), n && t !== $ && D($, e, n)
        } : D,
        X = function(t) {
          var e = N[t] = P(F[L]);
          return e._k = t, e
        },
        U = H && "symbol" == typeof F.iterator ? function(t) {
          return "symbol" == typeof t
        } : function(t) {
          return t instanceof F
        },
        Z = function(t, e, r) {
          return t === $ && Z(G, e, r), y(t), e = E(e, !0), y(r), i(N, e) ? (r.enumerable ? (i(t, B) && t[B][e] && (t[B][e] = !1), r = P(r, {
            enumerable: S(0, !1)
          })) : (i(t, B) || D(t, B, S(1, {})), t[B][e] = !0), Y(t, e, r)) : D(t, e, r)
        },
        K = function(t, e) {
          y(t);
          for (var r, n = g(e = x(e)), i = 0, s = n.length; s > i;) Z(t, r = n[i++], e[r]);
          return t
        },
        J = function(t) {
          var e = z.call(this, t = E(t, !0));
          return !(this === $ && i(N, t) && !i(G, t)) && (!(e || !i(this, t) || !i(N, t) || i(this, B) && this[B][t]) || e)
        },
        Q = function(t, e) {
          if (t = x(t), e = E(e, !0), t !== $ || !i(N, e) || i(G, e)) {
            var r = k(t, e);
            return !r || !i(N, e) || i(t, B) && t[B][e] || (r.enumerable = !0), r
          }
        },
        tt = function(t) {
          for (var e, r = I(x(t)), n = [], s = 0; r.length > s;) i(N, e = r[s++]) || e == B || e == l || n.push(e);
          return n
        },
        et = function(t) {
          for (var e, r = t === $, n = I(r ? G : x(t)), s = [], a = 0; n.length > a;) !i(N, e = n[a++]) || r && !i($, e) || s.push(N[e]);
          return s
        };
      H || (o((F = function() {
        if (this instanceof F) throw TypeError("Symbol is not a constructor!");
        var t = c(arguments.length > 0 ? arguments[0] : void 0),
          e = function(r) {
            this === $ && e.call(G, r), i(this, B) && i(this[B], t) && (this[B][t] = !1), Y(this, t, S(1, r))
          };
        return s && q && Y($, t, {
          configurable: !0,
          set: e
        }), X(t)
      })[L], "toString", (function() {
        return this._k
      })), C.f = Q, A.f = Z, r(2119).f = w.f = tt, r(9757).f = J, T.f = et, s && !r(6179) && o($, "propertyIsEnumerable", J, !0), d.f = function(t) {
        return X(f(t))
      }), a(a.G + a.W + a.F * !H, {
        Symbol: F
      });
      for (var rt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; rt.length > nt;) f(rt[nt++]);
      for (var it = M(f.store), st = 0; it.length > st;) m(it[st++]);
      a(a.S + a.F * !H, "Symbol", {
        for: function(t) {
          return i(j, t += "") ? j[t] : j[t] = F(t)
        },
        keyFor: function(t) {
          if (!U(t)) throw TypeError(t + " is not a symbol!");
          for (var e in j)
            if (j[e] === t) return e
        },
        useSetter: function() {
          q = !0
        },
        useSimple: function() {
          q = !1
        }
      }), a(a.S + a.F * !H, "Object", {
        create: function(t, e) {
          return void 0 === e ? P(t) : K(P(t), e)
        },
        defineProperty: Z,
        defineProperties: K,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: tt,
        getOwnPropertySymbols: et
      });
      var at = h((function() {
        T.f(1)
      }));
      a(a.S + a.F * at, "Object", {
        getOwnPropertySymbols: function(t) {
          return T.f(_(t))
        }
      }), O && a(a.S + a.F * (!H || h((function() {
        var t = F();
        return "[null]" != R([t]) || "{}" != R({
          a: t
        }) || "{}" != R(Object(t))
      }))), "JSON", {
        stringify: function(t) {
          for (var e, r, n = [t], i = 1; arguments.length > i;) n.push(arguments[i++]);
          if (r = e = n[1], (b(e) || void 0 !== t) && !U(t)) return v(e) || (e = function(t, e) {
            if ("function" == typeof r && (e = r.call(this, t, e)), !U(e)) return e
          }), n[1] = e, R.apply(O, n)
        }
      }), F[L][V] || r(1643)(F[L], V, F[L].valueOf), u(F, "Symbol"), u(Math, "Math", !0), u(n.JSON, "JSON", !0)
    },
    3471: (t, e, r) => {
      r(5777)("asyncIterator")
    },
    1238: (t, e, r) => {
      r(5777)("observable")
    },
    2282: (t, e, r) => {
      r(933);
      for (var n = r(1554), i = r(1643), s = r(1734), a = r(6057)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
        var h = o[l],
          p = n[h],
          u = p && p.prototype;
        u && !u[a] && i(u, a, h), s[h] = s.Array
      }
    },
    9729: function(module, exports, __webpack_require__) {
      var factory;
      "undefined" != typeof navigator && (factory = function() {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
          locationHref = "",
          _useWebWorker = !1,
          initialDefaultFrame = -999999,
          setWebWorker = function(t) {
            _useWebWorker = !!t
          },
          getWebWorker = function() {
            return _useWebWorker
          },
          setLocationHref = function(t) {
            locationHref = t
          },
          getLocationHref = function() {
            return locationHref
          };

        function createTag(t) {
          return document.createElement(t)
        }

        function extendPrototype(t, e) {
          var r, n, i = t.length;
          for (r = 0; r < i; r += 1)
            for (var s in n = t[r].prototype) Object.prototype.hasOwnProperty.call(n, s) && (e.prototype[s] = n[s])
        }

        function getDescriptor(t, e) {
          return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
          function e() {}
          return e.prototype = t, e
        }
        var audioControllerFactory = function() {
            function t(t) {
              this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
            }
            return t.prototype = {
                addAudio: function(t) {
                  this.audios.push(t)
                },
                pause: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].pause()
                },
                resume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].resume()
                },
                setRate: function(t) {
                  var e, r = this.audios.length;
                  for (e = 0; e < r; e += 1) this.audios[e].setRate(t)
                },
                createAudio: function(t) {
                  return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                    src: [t]
                  }) : {
                    isPlaying: !1,
                    play: function() {
                      this.isPlaying = !0
                    },
                    seek: function() {
                      this.isPlaying = !1
                    },
                    playing: function() {},
                    rate: function() {},
                    setVolume: function() {}
                  }
                },
                setAudioFactory: function(t) {
                  this.audioFactory = t
                },
                setVolume: function(t) {
                  this._volume = t, this._updateVolume()
                },
                mute: function() {
                  this._isMuted = !0, this._updateVolume()
                },
                unmute: function() {
                  this._isMuted = !1, this._updateVolume()
                },
                getVolume: function() {
                  return this._volume
                },
                _updateVolume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                }
              },
              function() {
                return new t
              }
          }(),
          createTypedArray = function() {
            function t(t, e) {
              var r, n = 0,
                i = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  r = 1;
                  break;
                default:
                  r = 1.1
              }
              for (n = 0; n < e; n += 1) i.push(r);
              return i
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) {
              return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r)
            } : t
          }();

        function createSizedArray(t) {
          return Array.apply(null, {
            length: t
          })
        }

        function _typeof$6(t) {
          return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$6(t)
        }
        var subframeEnabled = !0,
          expressionsPlugin = null,
          expressionsInterfaces = null,
          idPrefix$1 = "",
          isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          _shouldRoundValues = !1,
          bmPow = Math.pow,
          bmSqrt = Math.sqrt,
          bmFloor = Math.floor,
          bmMax = Math.max,
          bmMin = Math.min,
          BMMath = {};

        function ProjectInterface$1() {
          return {}
        }! function() {
          var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
            r = e.length;
          for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
          if ("object" === _typeof$6(t) && t.length) {
            var e, r = createSizedArray(t.length),
              n = t.length;
            for (e = 0; e < n; e += 1) r[e] = Math.abs(t[e]);
            return r
          }
          return Math.abs(t)
        };
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = .5519;

        function roundValues(t) {
          _shouldRoundValues = !!t
        }

        function bmRnd(t) {
          return _shouldRoundValues ? Math.round(t) : t
        }

        function styleDiv(t) {
          t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, r, n) {
          this.type = t, this.currentTime = e, this.totalTime = r, this.direction = n < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
          this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, r, n) {
          this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = n < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, r) {
          this.type = t, this.firstFrame = e, this.totalFrames = r
        }

        function BMDestroyEvent(t, e) {
          this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
          this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
          this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
          this.type = t, this.nativeError = e
        }
        var createElementID = (_count = 0, function() {
            return idPrefix$1 + "__lottie_element_" + (_count += 1)
          }),
          _count;

        function HSVtoRGB(t, e, r) {
          var n, i, s, a, o, l, h, p;
          switch (l = r * (1 - e), h = r * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), a % 6) {
            case 0:
              n = r, i = p, s = l;
              break;
            case 1:
              n = h, i = r, s = l;
              break;
            case 2:
              n = l, i = r, s = p;
              break;
            case 3:
              n = l, i = h, s = r;
              break;
            case 4:
              n = p, i = l, s = r;
              break;
            case 5:
              n = r, i = l, s = h
          }
          return [n, i, s]
        }

        function RGBtoHSV(t, e, r) {
          var n, i = Math.max(t, e, r),
            s = Math.min(t, e, r),
            a = i - s,
            o = 0 === i ? 0 : a / i,
            l = i / 255;
          switch (i) {
            case s:
              n = 0;
              break;
            case t:
              n = e - r + a * (e < r ? 6 : 0), n /= 6 * a;
              break;
            case e:
              n = r - t + 2 * a, n /= 6 * a;
              break;
            case r:
              n = t - e + 4 * a, n /= 6 * a
          }
          return [n, o, l]
        }

        function addSaturationToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
            var t, e, r = [];
            for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 === e.length ? "0" + e : e;
            return function(t, e, n) {
              return t < 0 && (t = 0), e < 0 && (e = 0), n < 0 && (n = 0), "#" + r[t] + r[e] + r[n]
            }
          }(),
          setSubframeEnabled = function(t) {
            subframeEnabled = !!t
          },
          getSubframeEnabled = function() {
            return subframeEnabled
          },
          setExpressionsPlugin = function(t) {
            expressionsPlugin = t
          },
          getExpressionsPlugin = function() {
            return expressionsPlugin
          },
          setExpressionInterfaces = function(t) {
            expressionsInterfaces = t
          },
          getExpressionInterfaces = function() {
            return expressionsInterfaces
          },
          setDefaultCurveSegments = function(t) {
            defaultCurveSegments = t
          },
          getDefaultCurveSegments = function() {
            return defaultCurveSegments
          },
          setIdPrefix = function(t) {
            idPrefix$1 = t
          },
          getIdPrefix = function() {
            return idPrefix$1
          };

        function createNS(t) {
          return document.createElementNS(svgNS, t)
        }

        function _typeof$5(t) {
          return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$5(t)
        }
        var dataManager = function() {
            var t, e, r = 1,
              n = [],
              i = {
                onmessage: function() {},
                postMessage: function(e) {
                  t({
                    data: e
                  })
                }
              },
              s = {
                postMessage: function(t) {
                  i.onmessage({
                    data: t
                  })
                }
              };

            function a() {
              e || (e = function(e) {
                if (window.Worker && window.Blob && getWebWorker()) {
                  var r = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                      type: "text/javascript"
                    }),
                    n = URL.createObjectURL(r);
                  return new Worker(n)
                }
                return t = e, i
              }((function(t) {
                if (s.dataManager || (s.dataManager = function() {
                    function t(i, s) {
                      var a, o, l, h, p, u, c, f = i.length;
                      for (o = 0; o < f; o += 1)
                        if ("ks" in (a = i[o]) && !a.completed) {
                          if (a.completed = !0, a.hasMask) {
                            var d = a.masksProperties;
                            for (h = d.length, l = 0; l < h; l += 1)
                              if (d[l].pt.k.i) n(d[l].pt.k);
                              else
                                for (u = d[l].pt.k.length, p = 0; p < u; p += 1) d[l].pt.k[p].s && n(d[l].pt.k[p].s[0]), d[l].pt.k[p].e && n(d[l].pt.k[p].e[0])
                          }
                          0 === a.ty ? (a.layers = e(a.refId, s), t(a.layers, s)) : 4 === a.ty ? r(a.shapes) : 5 === a.ty && (0 === (c = a).t.a.length && c.t.p)
                        }
                    }

                    function e(t, e) {
                      var r = function(t, e) {
                        for (var r = 0, n = e.length; r < n;) {
                          if (e[r].id === t) return e[r];
                          r += 1
                        }
                        return null
                      }(t, e);
                      return r ? r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : (r.layers.__used = !0, r.layers) : null
                    }

                    function r(t) {
                      var e, i, s;
                      for (e = t.length - 1; e >= 0; e -= 1)
                        if ("sh" === t[e].ty)
                          if (t[e].ks.k.i) n(t[e].ks.k);
                          else
                            for (s = t[e].ks.k.length, i = 0; i < s; i += 1) t[e].ks.k[i].s && n(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && n(t[e].ks.k[i].e[0]);
                      else "gr" === t[e].ty && r(t[e].it)
                    }

                    function n(t) {
                      var e, r = t.i.length;
                      for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                    }

                    function i(t, e) {
                      var r = e ? e.split(".") : [100, 100, 100];
                      return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null))
                    }
                    var s, a = function() {
                        var t = [4, 4, 14];

                        function e(t) {
                          var e, r, n, i = t.length;
                          for (e = 0; e < i; e += 1) 5 === t[e].ty && (void 0, n = (r = t[e]).t.d, r.t.d = {
                            k: [{
                              s: n,
                              t: 0
                            }]
                          })
                        }
                        return function(r) {
                          if (i(t, r.v) && (e(r.layers), r.assets)) {
                            var n, s = r.assets.length;
                            for (n = 0; n < s; n += 1) r.assets[n].layers && e(r.assets[n].layers)
                          }
                        }
                      }(),
                      o = (s = [4, 7, 99], function(t) {
                        if (t.chars && !i(s, t.v)) {
                          var e, n = t.chars.length;
                          for (e = 0; e < n; e += 1) {
                            var a = t.chars[e];
                            a.data && a.data.shapes && (r(a.data.shapes), a.data.ip = 0, a.data.op = 99999, a.data.st = 0, a.data.sr = 1, a.data.ks = {
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              }
                            }, t.chars[e].t || (a.data.shapes.push({
                              ty: "no"
                            }), a.data.shapes[0].it.push({
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              },
                              sk: {
                                k: 0,
                                a: 0
                              },
                              sa: {
                                k: 0,
                                a: 0
                              },
                              ty: "tr"
                            })))
                          }
                        }
                      }),
                      l = function() {
                        var t = [5, 7, 15];

                        function e(t) {
                          var e, r, n = t.length;
                          for (e = 0; e < n; e += 1) 5 === t[e].ty && (r = void 0, "number" == typeof(r = t[e].t.p).a && (r.a = {
                            a: 0,
                            k: r.a
                          }), "number" == typeof r.p && (r.p = {
                            a: 0,
                            k: r.p
                          }), "number" == typeof r.r && (r.r = {
                            a: 0,
                            k: r.r
                          }))
                        }
                        return function(r) {
                          if (i(t, r.v) && (e(r.layers), r.assets)) {
                            var n, s = r.assets.length;
                            for (n = 0; n < s; n += 1) r.assets[n].layers && e(r.assets[n].layers)
                          }
                        }
                      }(),
                      h = function() {
                        var t = [4, 1, 9];

                        function e(t) {
                          var r, n, i, s = t.length;
                          for (r = 0; r < s; r += 1)
                            if ("gr" === t[r].ty) e(t[r].it);
                            else if ("fl" === t[r].ty || "st" === t[r].ty)
                            if (t[r].c.k && t[r].c.k[0].i)
                              for (i = t[r].c.k.length, n = 0; n < i; n += 1) t[r].c.k[n].s && (t[r].c.k[n].s[0] /= 255, t[r].c.k[n].s[1] /= 255, t[r].c.k[n].s[2] /= 255, t[r].c.k[n].s[3] /= 255), t[r].c.k[n].e && (t[r].c.k[n].e[0] /= 255, t[r].c.k[n].e[1] /= 255, t[r].c.k[n].e[2] /= 255, t[r].c.k[n].e[3] /= 255);
                            else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
                        }

                        function r(t) {
                          var r, n = t.length;
                          for (r = 0; r < n; r += 1) 4 === t[r].ty && e(t[r].shapes)
                        }
                        return function(e) {
                          if (i(t, e.v) && (r(e.layers), e.assets)) {
                            var n, s = e.assets.length;
                            for (n = 0; n < s; n += 1) e.assets[n].layers && r(e.assets[n].layers)
                          }
                        }
                      }(),
                      p = function() {
                        var t = [4, 4, 18];

                        function e(t) {
                          var r, n, i;
                          for (r = t.length - 1; r >= 0; r -= 1)
                            if ("sh" === t[r].ty)
                              if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                              else
                                for (i = t[r].ks.k.length, n = 0; n < i; n += 1) t[r].ks.k[n].s && (t[r].ks.k[n].s[0].c = t[r].closed), t[r].ks.k[n].e && (t[r].ks.k[n].e[0].c = t[r].closed);
                          else "gr" === t[r].ty && e(t[r].it)
                        }

                        function r(t) {
                          var r, n, i, s, a, o, l = t.length;
                          for (n = 0; n < l; n += 1) {
                            if ((r = t[n]).hasMask) {
                              var h = r.masksProperties;
                              for (s = h.length, i = 0; i < s; i += 1)
                                if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl;
                                else
                                  for (o = h[i].pt.k.length, a = 0; a < o; a += 1) h[i].pt.k[a].s && (h[i].pt.k[a].s[0].c = h[i].cl), h[i].pt.k[a].e && (h[i].pt.k[a].e[0].c = h[i].cl)
                            }
                            4 === r.ty && e(r.shapes)
                          }
                        }
                        return function(e) {
                          if (i(t, e.v) && (r(e.layers), e.assets)) {
                            var n, s = e.assets.length;
                            for (n = 0; n < s; n += 1) e.assets[n].layers && r(e.assets[n].layers)
                          }
                        }
                      }();
                    var u = {
                      completeData: function(r) {
                        r.__complete || (h(r), a(r), o(r), l(r), p(r), t(r.layers, r.assets), function(r, n) {
                          if (r) {
                            var i = 0,
                              s = r.length;
                            for (i = 0; i < s; i += 1) 1 === r[i].t && (r[i].data.layers = e(r[i].data.refId, n), t(r[i].data.layers, n))
                          }
                        }(r.chars, r.assets), r.__complete = !0)
                      }
                    };
                    return u.checkColors = h, u.checkChars = o, u.checkPathProperties = l, u.checkShapes = p, u.completeLayers = t, u
                  }()), s.assetLoader || (s.assetLoader = function() {
                    function t(t) {
                      var e = t.getResponseHeader("content-type");
                      return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                    }
                    return {
                      load: function(e, r, n, i) {
                        var s, a = new XMLHttpRequest;
                        try {
                          a.responseType = "json"
                        } catch (t) {}
                        a.onreadystatechange = function() {
                          if (4 === a.readyState)
                            if (200 === a.status) s = t(a), n(s);
                            else try {
                              s = t(a), n(s)
                            } catch (t) {
                              i && i(t)
                            }
                        };
                        try {
                          a.open(["G", "E", "T"].join(""), e, !0)
                        } catch (t) {
                          a.open(["G", "E", "T"].join(""), r + "/" + e, !0)
                        }
                        a.send()
                      }
                    }
                  }()), "loadAnimation" === t.data.type) s.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  s.dataManager.completeData(e), s.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  s.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }));
                else if ("complete" === t.data.type) {
                  var e = t.data.animation;
                  s.dataManager.completeData(e), s.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                } else "loadData" === t.data.type && s.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  s.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  s.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }))
              })), e.onmessage = function(t) {
                var e = t.data,
                  r = e.id,
                  i = n[r];
                n[r] = null, "success" === e.status ? i.onComplete(e.payload) : i.onError && i.onError()
              })
            }

            function o(t, e) {
              var i = "processId_" + (r += 1);
              return n[i] = {
                onComplete: t,
                onError: e
              }, i
            }
            return {
              loadAnimation: function(t, r, n) {
                a();
                var i = o(r, n);
                e.postMessage({
                  type: "loadAnimation",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: i
                })
              },
              loadData: function(t, r, n) {
                a();
                var i = o(r, n);
                e.postMessage({
                  type: "loadData",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: i
                })
              },
              completeAnimation: function(t, r, n) {
                a();
                var i = o(r, n);
                e.postMessage({
                  type: "complete",
                  animation: t,
                  id: i
                })
              }
            }
          }(),
          ImagePreloader = function() {
            var t = function() {
              var t = createTag("canvas");
              t.width = 1, t.height = 1;
              var e = t.getContext("2d");
              return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
            }();

            function e() {
              this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function r() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function n(t, e, r) {
              var n = "";
              if (t.e) n = t.p;
              else if (e) {
                var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), n = e + i
              } else n = r, n += t.u ? t.u : "", n += t.p;
              return n
            }

            function i(t) {
              var e = 0,
                r = setInterval(function() {
                  (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(r)), e += 1
                }.bind(this), 50)
            }

            function s(t) {
              var e = {
                  assetData: t
                },
                r = n(t, this.assetsPath, this.path);
              return dataManager.loadData(r, function(t) {
                e.img = t, this._footageLoaded()
              }.bind(this), function() {
                e.img = {}, this._footageLoaded()
              }.bind(this)), e
            }

            function a() {
              this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = s.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }
            return a.prototype = {
              loadAssets: function(t, e) {
                var r;
                this.imagesLoadedCb = e;
                var n = t.length;
                for (r = 0; r < n; r += 1) t[r].layers || (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[r]))))
              },
              setAssetsPath: function(t) {
                this.assetsPath = t || ""
              },
              setPath: function(t) {
                this.path = t || ""
              },
              loadedImages: function() {
                return this.totalImages === this.loadedAssets
              },
              loadedFootages: function() {
                return this.totalFootages === this.loadedFootagesCount
              },
              destroy: function() {
                this.imagesLoadedCb = null, this.images.length = 0
              },
              getAsset: function(t) {
                for (var e = 0, r = this.images.length; e < r;) {
                  if (this.images[e].assetData === t) return this.images[e].img;
                  e += 1
                }
                return null
              },
              createImgData: function(e) {
                var r = n(e, this.assetsPath, this.path),
                  i = createTag("img");
                i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                  s.img = t, this._imageLoaded()
                }.bind(this), !1), i.src = r;
                var s = {
                  img: i,
                  assetData: e
                };
                return s
              },
              createImageData: function(e) {
                var r = n(e, this.assetsPath, this.path),
                  i = createNS("image");
                isSafari ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                  s.img = t, this._imageLoaded()
                }.bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(i) : this._elementHelper.appendChild(i);
                var s = {
                  img: i,
                  assetData: e
                };
                return s
              },
              imageLoaded: e,
              footageLoaded: r,
              setCacheType: function(t, e) {
                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
              }
            }, a
          }();

        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function(t, e) {
            if (this._cbs[t])
              for (var r = this._cbs[t], n = 0; n < r.length; n += 1) r[n](e)
          },
          addEventListener: function(t, e) {
            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
              function() {
                this.removeEventListener(t, e)
              }.bind(this)
          },
          removeEventListener: function(t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (var r = 0, n = this._cbs[t].length; r < n;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, n -= 1), r += 1;
                this._cbs[t].length || (this._cbs[t] = null)
              }
            } else this._cbs[t] = null
          }
        };
        var markerParser = function() {
            function t(t) {
              for (var e, r = t.split("\r\n"), n = {}, i = 0, s = 0; s < r.length; s += 1) 2 === (e = r[s].split(":")).length && (n[e[0]] = e[1].trim(), i += 1);
              if (0 === i) throw new Error;
              return n
            }
            return function(e) {
              for (var r = [], n = 0; n < e.length; n += 1) {
                var i = e[n],
                  s = {
                    time: i.tm,
                    duration: i.dr
                  };
                try {
                  s.payload = JSON.parse(e[n].cm)
                } catch (r) {
                  try {
                    s.payload = t(e[n].cm)
                  } catch (t) {
                    s.payload = {
                      name: e[n].cm
                    }
                  }
                }
                r.push(s)
              }
              return r
            }
          }(),
          ProjectInterface = function() {
            function t(t) {
              this.compositions.push(t)
            }
            return function() {
              function e(t) {
                for (var e = 0, r = this.compositions.length; e < r;) {
                  if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                  e += 1
                }
                return null
              }
              return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
            }
          }(),
          renderers = {},
          registerRenderer = function(t, e) {
            renderers[t] = e
          };

        function getRenderer(t) {
          return renderers[t]
        }

        function _typeof$4(t) {
          return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$4(t)
        }
        var AnimationItem = function() {
          this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
          (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
          var e = "svg";
          t.animType ? e = t.animType : t.renderer && (e = t.renderer);
          var r = getRenderer(e);
          this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(t) {
          dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function(t, e) {
          e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
          var r = {
              wrapper: t,
              animationData: e
            },
            n = t.attributes;
          r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : "canvas";
          var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
          "false" === i ? r.loop = !1 : "true" === i ? r.loop = !0 : "" !== i && (r.loop = parseInt(i, 10));
          var s = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
          r.autoplay = "false" !== s, r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", "false" === (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
        }, AnimationItem.prototype.includeLayers = function(t) {
          t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
          var e, r, n = this.animationData.layers,
            i = n.length,
            s = t.layers,
            a = s.length;
          for (r = 0; r < a; r += 1)
            for (e = 0; e < i;) {
              if (n[e].id === s[r].id) {
                n[e] = s[r];
                break
              }
              e += 1
            }
          if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (i = t.assets.length, e = 0; e < i; e += 1) this.animationData.assets.push(t.assets[e]);
          this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(t) {
          this.animationData = t;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
          var t = this.animationData.segments;
          if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
          var e = t.shift();
          this.timeCompleted = e.time * this.frameRate;
          var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
            this.trigger("data_failed")
          }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
          this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
          this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
          this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(t) {
          if (this.renderer) try {
            this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
          } catch (t) {
            this.triggerConfigError(t)
          }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
          this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
            this.isLoaded = !0;
            var t = getExpressionsPlugin();
            t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
              this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
          }
        }, AnimationItem.prototype.resize = function(t, e) {
          var r = "number" == typeof t ? t : void 0,
            n = "number" == typeof e ? e : void 0;
          this.renderer.updateContainerSize(r, n)
        }, AnimationItem.prototype.setSubframe = function(t) {
          this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
          if (!1 !== this.isLoaded && this.renderer) try {
            this.renderer.renderFrame(this.currentFrame + this.firstFrame)
          } catch (t) {
            this.triggerRenderFrameError(t)
          }
        }, AnimationItem.prototype.play = function(t) {
          t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
          t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(t) {
          t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
          t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(t) {
          for (var e, r = 0; r < this.markers.length; r += 1)
            if ((e = this.markers[r]).payload && e.payload.name === t) return e;
          return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
          if (!r || this.name === r) {
            var n = Number(t);
            if (isNaN(n)) {
              var i = this.getMarkerData(t);
              i && this.goToAndStop(i.time, !0)
            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
          if (!r || this.name === r) {
            var n = Number(t);
            if (isNaN(n)) {
              var i = this.getMarkerData(t);
              i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
            } else this.goToAndStop(n, e, r);
            this.play()
          }
        }, AnimationItem.prototype.advanceTime = function(t) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var e = this.currentRawFrame + t * this.frameModifier,
              r = !1;
            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
          }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
          this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
          var r = -1;
          this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
          if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
            var r, n = t.length;
            for (r = 0; r < n; r += 1) this.segments.push(t[r])
          } else this.segments.push(t);
          this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
          this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(t) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function(t) {
          t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
          this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
          this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
          this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function(t) {
          this.loop = t
        }, AnimationItem.prototype.setVolume = function(t, e) {
          e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function() {
          return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(t) {
          t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(t) {
          t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
          return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
          var e = "";
          if (t.e) e = t.p;
          else if (this.assetsPath) {
            var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
          } else e = this.path, e += t.u ? t.u : "", e += t.p;
          return e
        }, AnimationItem.prototype.getAssetData = function(t) {
          for (var e = 0, r = this.assets.length; e < r;) {
            if (t === this.assets[e].id) return this.assets[e];
            e += 1
          }
          return null
        }, AnimationItem.prototype.hide = function() {
          this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
          this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
          try {
            this.renderer.getElementByPath(t).updateDocumentData(e, r)
          } catch (t) {}
        }, AnimationItem.prototype.trigger = function(t) {
          if (this._cbs && this._cbs[t]) switch (t) {
            case "enterFrame":
              this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
              break;
            case "drawnFrame":
              this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
              break;
            case "loopComplete":
              this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
              break;
            case "complete":
              this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
              break;
            case "segmentStart":
              this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
              break;
            case "destroy":
              this.triggerEvent(t, new BMDestroyEvent(t, this));
              break;
            default:
              this.triggerEvent(t)
          }
          "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
          var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function(t) {
          var e = new BMConfigErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var animationManager = function() {
            var t = {},
              e = [],
              r = 0,
              n = 0,
              i = 0,
              s = !0,
              a = !1;

            function o(t) {
              for (var r = 0, i = t.target; r < n;) e[r].animation === i && (e.splice(r, 1), r -= 1, n -= 1, i.isPaused || p()), r += 1
            }

            function l(t, r) {
              if (!t) return null;
              for (var i = 0; i < n;) {
                if (e[i].elem === t && null !== e[i].elem) return e[i].animation;
                i += 1
              }
              var s = new AnimationItem;
              return u(s, t), s.setData(t, r), s
            }

            function h() {
              i += 1, d()
            }

            function p() {
              i -= 1
            }

            function u(t, r) {
              t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", p), e.push({
                elem: r,
                animation: t
              }), n += 1
            }

            function c(t) {
              var o, l = t - r;
              for (o = 0; o < n; o += 1) e[o].animation.advanceTime(l);
              r = t, i && !a ? window.requestAnimationFrame(c) : s = !0
            }

            function f(t) {
              r = t, window.requestAnimationFrame(c)
            }

            function d() {
              !a && i && s && (window.requestAnimationFrame(f), s = !1)
            }
            return t.registerAnimation = l, t.loadAnimation = function(t) {
              var e = new AnimationItem;
              return u(e, null), e.setParams(t), e
            }, t.setSpeed = function(t, r) {
              var i;
              for (i = 0; i < n; i += 1) e[i].animation.setSpeed(t, r)
            }, t.setDirection = function(t, r) {
              var i;
              for (i = 0; i < n; i += 1) e[i].animation.setDirection(t, r)
            }, t.play = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.play(t)
            }, t.pause = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.pause(t)
            }, t.stop = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.stop(t)
            }, t.togglePause = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.togglePause(t)
            }, t.searchAnimations = function(t, e, r) {
              var n, i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                s = i.length;
              for (n = 0; n < s; n += 1) r && i[n].setAttribute("data-bm-type", r), l(i[n], t);
              if (e && 0 === s) {
                r || (r = "svg");
                var a = document.getElementsByTagName("body")[0];
                a.innerText = "";
                var o = createTag("div");
                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), a.appendChild(o), l(o, t)
              }
            }, t.resize = function() {
              var t;
              for (t = 0; t < n; t += 1) e[t].animation.resize()
            }, t.goToAndStop = function(t, r, i) {
              var s;
              for (s = 0; s < n; s += 1) e[s].animation.goToAndStop(t, r, i)
            }, t.destroy = function(t) {
              var r;
              for (r = n - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
            }, t.freeze = function() {
              a = !0
            }, t.unfreeze = function() {
              a = !1, d()
            }, t.setVolume = function(t, r) {
              var i;
              for (i = 0; i < n; i += 1) e[i].animation.setVolume(t, r)
            }, t.mute = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.mute(t)
            }, t.unmute = function(t) {
              var r;
              for (r = 0; r < n; r += 1) e[r].animation.unmute(t)
            }, t.getRegisteredAnimations = function() {
              var t, r = e.length,
                n = [];
              for (t = 0; t < r; t += 1) n.push(e[t].animation);
              return n
            }, t
          }(),
          BezierFactory = function() {
            var t = {
                getBezierEasing: function(t, r, n, i, s) {
                  var a = s || ("bez_" + t + "_" + r + "_" + n + "_" + i).replace(/\./g, "p");
                  if (e[a]) return e[a];
                  var o = new p([t, r, n, i]);
                  return e[a] = o, o
                }
              },
              e = {},
              r = 11,
              n = 1 / (r - 1),
              i = "function" == typeof Float32Array;

            function s(t, e) {
              return 1 - 3 * e + 3 * t
            }

            function a(t, e) {
              return 3 * e - 6 * t
            }

            function o(t) {
              return 3 * t
            }

            function l(t, e, r) {
              return ((s(e, r) * t + a(e, r)) * t + o(e)) * t
            }

            function h(t, e, r) {
              return 3 * s(e, r) * t * t + 2 * a(e, r) * t + o(e)
            }

            function p(t) {
              this._p = t, this._mSampleValues = i ? new Float32Array(r) : new Array(r), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return p.prototype = {
              get: function(t) {
                var e = this._p[0],
                  r = this._p[1],
                  n = this._p[2],
                  i = this._p[3];
                return this._precomputed || this._precompute(), e === r && n === i ? t : 0 === t ? 0 : 1 === t ? 1 : l(this._getTForX(t), r, i)
              },
              _precompute: function() {
                var t = this._p[0],
                  e = this._p[1],
                  r = this._p[2],
                  n = this._p[3];
                this._precomputed = !0, t === e && r === n || this._calcSampleValues()
              },
              _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], i = 0; i < r; ++i) this._mSampleValues[i] = l(i * n, t, e)
              },
              _getTForX: function(t) {
                for (var e = this._p[0], i = this._p[2], s = this._mSampleValues, a = 0, o = 1, p = r - 1; o !== p && s[o] <= t; ++o) a += n;
                var u = a + (t - s[--o]) / (s[o + 1] - s[o]) * n,
                  c = h(u, e, i);
                return c >= .001 ? function(t, e, r, n) {
                  for (var i = 0; i < 4; ++i) {
                    var s = h(e, r, n);
                    if (0 === s) return e;
                    e -= (l(e, r, n) - t) / s
                  }
                  return e
                }(t, u, e, i) : 0 === c ? u : function(t, e, r, n, i) {
                  var s, a, o = 0;
                  do {
                    (s = l(a = e + (r - e) / 2, n, i) - t) > 0 ? r = a : e = a
                  } while (Math.abs(s) > 1e-7 && ++o < 10);
                  return a
                }(t, a, a + n, e, i)
              }
            }, t
          }(),
          pooling = {
            double: function(t) {
              return t.concat(createSizedArray(t.length))
            }
          },
          poolFactory = function(t, e, r) {
            var n = 0,
              i = t,
              s = createSizedArray(i);
            return {
              newElement: function() {
                return n ? s[n -= 1] : e()
              },
              release: function(t) {
                n === i && (s = pooling.double(s), i *= 2), r && r(t), s[n] = t, n += 1
              }
            }
          },
          bezierLengthPool = poolFactory(8, (function() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments())
            }
          })),
          segmentsLengthPool = poolFactory(8, (function() {
            return {
              lengths: [],
              totalLength: 0
            }
          }), (function(t) {
            var e, r = t.lengths.length;
            for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0
          }));

        function bezFunction() {
          var t = Math;

          function e(t, e, r, n, i, s) {
            var a = t * n + e * i + r * s - i * n - s * t - r * e;
            return a > -.001 && a < .001
          }
          var r = function(t, e, r, n) {
            var i, s, a, o, l, h, p = getDefaultCurveSegments(),
              u = 0,
              c = [],
              f = [],
              d = bezierLengthPool.newElement();
            for (a = r.length, i = 0; i < p; i += 1) {
              for (l = i / (p - 1), h = 0, s = 0; s < a; s += 1) o = bmPow(1 - l, 3) * t[s] + 3 * bmPow(1 - l, 2) * l * r[s] + 3 * (1 - l) * bmPow(l, 2) * n[s] + bmPow(l, 3) * e[s], c[s] = o, null !== f[s] && (h += bmPow(c[s] - f[s], 2)), f[s] = c[s];
              h && (u += h = bmSqrt(h)), d.percents[i] = l, d.lengths[i] = u
            }
            return d.addedLength = u, d
          };

          function n(t) {
            this.segmentLength = 0, this.points = new Array(t)
          }

          function i(t, e) {
            this.partialLength = t, this.point = e
          }
          var s, a = (s = {}, function(t, r, a, o) {
            var l = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!s[l]) {
              var h, p, u, c, f, d, m, g = getDefaultCurveSegments(),
                v = 0,
                y = null;
              2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + a[0], t[1] + a[1]) && e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (g = 2);
              var b = new n(g);
              for (u = a.length, h = 0; h < g; h += 1) {
                for (m = createSizedArray(u), f = h / (g - 1), d = 0, p = 0; p < u; p += 1) c = bmPow(1 - f, 3) * t[p] + 3 * bmPow(1 - f, 2) * f * (t[p] + a[p]) + 3 * (1 - f) * bmPow(f, 2) * (r[p] + o[p]) + bmPow(f, 3) * r[p], m[p] = c, null !== y && (d += bmPow(m[p] - y[p], 2));
                v += d = bmSqrt(d), b.points[h] = new i(d, m), y = m
              }
              b.segmentLength = v, s[l] = b
            }
            return s[l]
          });

          function o(t, e) {
            var r = e.percents,
              n = e.lengths,
              i = r.length,
              s = bmFloor((i - 1) * t),
              a = t * e.addedLength,
              o = 0;
            if (s === i - 1 || 0 === s || a === n[s]) return r[s];
            for (var l = n[s] > a ? -1 : 1, h = !0; h;)
              if (n[s] <= a && n[s + 1] > a ? (o = (a - n[s]) / (n[s + 1] - n[s]), h = !1) : s += l, s < 0 || s >= i - 1) {
                if (s === i - 1) return r[s];
                h = !1
              } return r[s] + (r[s + 1] - r[s]) * o
          }
          var l = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function(t) {
              var e, n = segmentsLengthPool.newElement(),
                i = t.c,
                s = t.v,
                a = t.o,
                o = t.i,
                l = t._length,
                h = n.lengths,
                p = 0;
              for (e = 0; e < l - 1; e += 1) h[e] = r(s[e], s[e + 1], a[e], o[e + 1]), p += h[e].addedLength;
              return i && l && (h[e] = r(s[e], s[0], a[e], o[0]), p += h[e].addedLength), n.totalLength = p, n
            },
            getNewSegment: function(e, r, n, i, s, a, h) {
              s < 0 ? s = 0 : s > 1 && (s = 1);
              var p, u = o(s, h),
                c = o(a = a > 1 ? 1 : a, h),
                f = e.length,
                d = 1 - u,
                m = 1 - c,
                g = d * d * d,
                v = u * d * d * 3,
                y = u * u * d * 3,
                b = u * u * u,
                _ = d * d * m,
                x = u * d * m + d * u * m + d * d * c,
                E = u * u * m + d * u * c + u * d * c,
                S = u * u * c,
                P = d * m * m,
                w = u * m * m + d * c * m + d * m * c,
                C = u * c * m + d * c * c + u * m * c,
                T = u * c * c,
                A = m * m * m,
                M = c * m * m + m * c * m + m * m * c,
                k = c * c * m + m * c * c + c * m * c,
                D = c * c * c;
              for (p = 0; p < f; p += 1) l[4 * p] = t.round(1e3 * (g * e[p] + v * n[p] + y * i[p] + b * r[p])) / 1e3, l[4 * p + 1] = t.round(1e3 * (_ * e[p] + x * n[p] + E * i[p] + S * r[p])) / 1e3, l[4 * p + 2] = t.round(1e3 * (P * e[p] + w * n[p] + C * i[p] + T * r[p])) / 1e3, l[4 * p + 3] = t.round(1e3 * (A * e[p] + M * n[p] + k * i[p] + D * r[p])) / 1e3;
              return l
            },
            getPointInSegment: function(e, r, n, i, s, a) {
              var l = o(s, a),
                h = 1 - l;
              return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * n[0] + (l * l * h + h * l * l + l * h * l) * i[0] + l * l * l * r[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * n[1] + (l * l * h + h * l * l + l * h * l) * i[1] + l * l * l * r[1])) / 1e3]
            },
            buildBezierData: a,
            pointOnLine2D: e,
            pointOnLine3D: function(r, n, i, s, a, o, l, h, p) {
              if (0 === i && 0 === o && 0 === p) return e(r, n, s, a, l, h);
              var u, c = t.sqrt(t.pow(s - r, 2) + t.pow(a - n, 2) + t.pow(o - i, 2)),
                f = t.sqrt(t.pow(l - r, 2) + t.pow(h - n, 2) + t.pow(p - i, 2)),
                d = t.sqrt(t.pow(l - s, 2) + t.pow(h - a, 2) + t.pow(p - o, 2));
              return (u = c > f ? c > d ? c - f - d : d - f - c : d > f ? d - f - c : f - c - d) > -1e-4 && u < 1e-4
            }
          }
        }
        var bez = bezFunction(),
          PropertyFactory = function() {
            var t = initialDefaultFrame,
              e = Math.abs;

            function r(t, e) {
              var r, i = this.offsetTime;
              "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
              for (var s, a, o, l, h, p, u, c, f, d = e.lastIndex, m = d, g = this.keyframes.length - 1, v = !0; v;) {
                if (s = this.keyframes[m], a = this.keyframes[m + 1], m === g - 1 && t >= a.t - i) {
                  s.h && (s = a), d = 0;
                  break
                }
                if (a.t - i > t) {
                  d = m;
                  break
                }
                m < g - 1 ? m += 1 : (d = 0, v = !1)
              }
              o = this.keyframesMetadata[m] || {};
              var y, b, _, x, E, S, P, w, C, T, A = a.t - i,
                M = s.t - i;
              if (s.to) {
                o.bezierData || (o.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
                var k = o.bezierData;
                if (t >= A || t < M) {
                  var D = t >= A ? k.points.length - 1 : 0;
                  for (h = k.points[D].point.length, l = 0; l < h; l += 1) r[l] = k.points[D].point[l]
                } else {
                  o.__fnct ? f = o.__fnct : (f = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, o.__fnct = f), p = f((t - M) / (A - M));
                  var I, F = k.segmentLength * p,
                    O = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                  for (c = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, v = !0, u = k.points.length; v;) {
                    if (O += k.points[c].partialLength, 0 === F || 0 === p || c === k.points.length - 1) {
                      for (h = k.points[c].point.length, l = 0; l < h; l += 1) r[l] = k.points[c].point[l];
                      break
                    }
                    if (F >= O && F < O + k.points[c + 1].partialLength) {
                      for (I = (F - O) / k.points[c + 1].partialLength, h = k.points[c].point.length, l = 0; l < h; l += 1) r[l] = k.points[c].point[l] + (k.points[c + 1].point[l] - k.points[c].point[l]) * I;
                      break
                    }
                    c < u - 1 ? c += 1 : v = !1
                  }
                  e._lastPoint = c, e._lastAddedLength = O - k.points[c].partialLength, e._lastKeyframeIndex = m
                }
              } else {
                var R, L, B, V, z;
                if (g = s.s.length, y = a.s || s.e, this.sh && 1 !== s.h)
                  if (t >= A) r[0] = y[0], r[1] = y[1], r[2] = y[2];
                  else if (t <= M) r[0] = s.s[0], r[1] = s.s[1], r[2] = s.s[2];
                else {
                  b = r, _ = function(t, e, r) {
                    var n, i, s, a, o, l = [],
                      h = t[0],
                      p = t[1],
                      u = t[2],
                      c = t[3],
                      f = e[0],
                      d = e[1],
                      m = e[2],
                      g = e[3];
                    return (i = h * f + p * d + u * m + c * g) < 0 && (i = -i, f = -f, d = -d, m = -m, g = -g), 1 - i > 1e-6 ? (n = Math.acos(i), s = Math.sin(n), a = Math.sin((1 - r) * n) / s, o = Math.sin(r * n) / s) : (a = 1 - r, o = r), l[0] = a * h + o * f, l[1] = a * p + o * d, l[2] = a * u + o * m, l[3] = a * c + o * g, l
                  }(n(s.s), n(y), (t - M) / (A - M)), x = _[0], E = _[1], S = _[2], P = _[3], w = Math.atan2(2 * E * P - 2 * x * S, 1 - 2 * E * E - 2 * S * S), C = Math.asin(2 * x * E + 2 * S * P), T = Math.atan2(2 * x * P - 2 * E * S, 1 - 2 * x * x - 2 * S * S), b[0] = w / degToRads, b[1] = C / degToRads, b[2] = T / degToRads
                } else
                  for (m = 0; m < g; m += 1) 1 !== s.h && (t >= A ? p = 1 : t < M ? p = 0 : (s.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []), o.__fnct[m] ? f = o.__fnct[m] : (R = void 0 === s.o.x[m] ? s.o.x[0] : s.o.x[m], L = void 0 === s.o.y[m] ? s.o.y[0] : s.o.y[m], B = void 0 === s.i.x[m] ? s.i.x[0] : s.i.x[m], V = void 0 === s.i.y[m] ? s.i.y[0] : s.i.y[m], f = BezierFactory.getBezierEasing(R, L, B, V).get, o.__fnct[m] = f)) : o.__fnct ? f = o.__fnct : (R = s.o.x, L = s.o.y, B = s.i.x, V = s.i.y, f = BezierFactory.getBezierEasing(R, L, B, V).get, s.keyframeMetadata = f), p = f((t - M) / (A - M)))), y = a.s || s.e, z = 1 === s.h ? s.s[m] : s.s[m] + (y[m] - s.s[m]) * p, "multidimensional" === this.propType ? r[m] = z : r = z
              }
              return e.lastIndex = d, r
            }

            function n(t) {
              var e = t[0] * degToRads,
                r = t[1] * degToRads,
                n = t[2] * degToRads,
                i = Math.cos(e / 2),
                s = Math.cos(r / 2),
                a = Math.cos(n / 2),
                o = Math.sin(e / 2),
                l = Math.sin(r / 2),
                h = Math.sin(n / 2);
              return [o * l * a + i * s * h, o * s * a + i * l * h, i * l * a - o * s * h, i * s * a - o * l * h]
            }

            function i() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
              if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= n && e >= n || this._caching.lastFrame < r && e < r))) {
                this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var i = this.interpolateValue(e, this._caching);
                this.pv = i
              }
              return this._caching.lastFrame = e, this.pv
            }

            function s(t) {
              var r;
              if ("unidimensional" === this.propType) r = t * this.mult, e(this.v - r) > 1e-5 && (this.v = r, this._mdf = !0);
              else
                for (var n = 0, i = this.v.length; n < i;) r = t[n] * this.mult, e(this.v[n] - r) > 1e-5 && (this.v[n] = r, this._mdf = !0), n += 1
            }

            function a() {
              if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                if (this.lock) this.setVValue(this.pv);
                else {
                  var t;
                  this.lock = !0, this._mdf = this._isFirstFrame;
                  var e = this.effectsSequence.length,
                    r = this.kf ? this.pv : this.data.k;
                  for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                  this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            }

            function o(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function l(t, e, r, n) {
              this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.addEffect = o
            }

            function h(t, e, r, n) {
              var i;
              this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
              var l = e.k.length;
              for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), this.vel = createTypedArray("float32", l), i = 0; i < l; i += 1) this.v[i] = e.k[i] * this.mult, this.pv[i] = e.k[i];
              this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = a, this.setVValue = s, this.addEffect = o
            }

            function p(e, n, l, h) {
              this.propType = "unidimensional", this.keyframes = n.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                lastFrame: t,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
              }, this.k = !0, this.kf = !0, this.data = n, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.interpolateValue = r, this.effectsSequence = [i.bind(this)], this.addEffect = o
            }

            function u(e, n, l, h) {
              var p;
              this.propType = "multidimensional";
              var u, c, f, d, m = n.k.length;
              for (p = 0; p < m - 1; p += 1) n.k[p].to && n.k[p].s && n.k[p + 1] && n.k[p + 1].s && (u = n.k[p].s, c = n.k[p + 1].s, f = n.k[p].to, d = n.k[p].ti, (2 === u.length && (u[0] !== c[0] || u[1] !== c[1]) && bez.pointOnLine2D(u[0], u[1], c[0], c[1], u[0] + f[0], u[1] + f[1]) && bez.pointOnLine2D(u[0], u[1], c[0], c[1], c[0] + d[0], c[1] + d[1]) || 3 === u.length && (u[0] !== c[0] || u[1] !== c[1] || u[2] !== c[2]) && bez.pointOnLine3D(u[0], u[1], u[2], c[0], c[1], c[2], u[0] + f[0], u[1] + f[1], u[2] + f[2]) && bez.pointOnLine3D(u[0], u[1], u[2], c[0], c[1], c[2], c[0] + d[0], c[1] + d[1], c[2] + d[2])) && (n.k[p].to = null, n.k[p].ti = null), u[0] === c[0] && u[1] === c[1] && 0 === f[0] && 0 === f[1] && 0 === d[0] && 0 === d[1] && (2 === u.length || u[2] === c[2] && 0 === f[2] && 0 === d[2]) && (n.k[p].to = null, n.k[p].ti = null));
              this.effectsSequence = [i.bind(this)], this.data = n, this.keyframes = n.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.getValue = a, this.setVValue = s, this.interpolateValue = r, this.frameId = -1;
              var g = n.k[0].s.length;
              for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), p = 0; p < g; p += 1) this.v[p] = t, this.pv[p] = t;
              this._caching = {
                lastFrame: t,
                lastIndex: 0,
                value: createTypedArray("float32", g)
              }, this.addEffect = o
            }
            return {
              getProp: function(t, e, r, n, i) {
                var s;
                if (e.k.length)
                  if ("number" == typeof e.k[0]) s = new h(t, e, n, i);
                  else switch (r) {
                    case 0:
                      s = new p(t, e, n, i);
                      break;
                    case 1:
                      s = new u(t, e, n, i)
                  } else s = new l(t, e, n, i);
                return s.effectsSequence.length && i.addDynamicProperty(s), s
              }
            }
          }();

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
          },
          iterateDynamicProperties: function() {
            var t;
            this._mdf = !1;
            var e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
          },
          initDynamicPropertyContainer: function(t) {
            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
          }
        };
        var pointPool = poolFactory(8, (function() {
          return createTypedArray("float32", 2)
        }));

        function ShapePath() {
          this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
          this.c = t, this.setLength(e);
          for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function(t) {
          for (; this._maxLength < t;) this.doubleArrayLength();
          this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, r, n, i) {
          var s;
          switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
            case "v":
              s = this.v;
              break;
            case "i":
              s = this.i;
              break;
            case "o":
              s = this.o;
              break;
            default:
              s = []
          }(!s[n] || s[n] && !i) && (s[n] = pointPool.newElement()), s[n][0] = t, s[n][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, r, n, i, s, a, o) {
          this.setXYAt(t, e, "v", a, o), this.setXYAt(r, n, "o", a, o), this.setXYAt(i, s, "i", a, o)
        }, ShapePath.prototype.reverse = function() {
          var t = new ShapePath;
          t.setPathData(this.c, this._length);
          var e = this.v,
            r = this.o,
            n = this.i,
            i = 0;
          this.c && (t.setTripleAt(e[0][0], e[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
          var s, a = this._length - 1,
            o = this._length;
          for (s = i; s < o; s += 1) t.setTripleAt(e[a][0], e[a][1], n[a][0], n[a][1], r[a][0], r[a][1], s, !1), a -= 1;
          return t
        }, ShapePath.prototype.length = function() {
          return this._length
        };
        var shapePool = (factory = poolFactory(4, (function() {
            return new ShapePath
          }), (function(t) {
            var e, r = t._length;
            for (e = 0; e < r; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = !1
          })), factory.clone = function(t) {
            var e, r = factory.newElement(),
              n = void 0 === t._length ? t.v.length : t._length;
            for (r.setLength(n), r.c = t.c, e = 0; e < n; e += 1) r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return r
          }, factory),
          factory;

        function ShapeCollection() {
          this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(t) {
          this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
          var t;
          for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
          this._length = 0
        };
        var shapeCollectionPool = (ob = {
            newShapeCollection: function() {
              return _length ? pool[_length -= 1] : new ShapeCollection
            },
            release: function(t) {
              var e, r = t._length;
              for (e = 0; e < r; e += 1) shapePool.release(t.shapes[e]);
              t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
            }
          }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
          ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
            var t = -999999;

            function e(t, e, r) {
              var n, i, s, a, o, l, h, p, u, c = r.lastIndex,
                f = this.keyframes;
              if (t < f[0].t - this.offsetTime) n = f[0].s[0], s = !0, c = 0;
              else if (t >= f[f.length - 1].t - this.offsetTime) n = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], s = !0;
              else {
                for (var d, m, g, v = c, y = f.length - 1, b = !0; b && (d = f[v], !((m = f[v + 1]).t - this.offsetTime > t));) v < y - 1 ? v += 1 : b = !1;
                if (g = this.keyframesMetadata[v] || {}, c = v, !(s = 1 === d.h)) {
                  if (t >= m.t - this.offsetTime) p = 1;
                  else if (t < d.t - this.offsetTime) p = 0;
                  else {
                    var _;
                    g.__fnct ? _ = g.__fnct : (_ = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, g.__fnct = _), p = _((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                  }
                  i = m.s ? m.s[0] : d.e[0]
                }
                n = d.s[0]
              }
              for (l = e._length, h = n.i[0].length, r.lastIndex = c, a = 0; a < l; a += 1)
                for (o = 0; o < h; o += 1) u = s ? n.i[a][o] : n.i[a][o] + (i.i[a][o] - n.i[a][o]) * p, e.i[a][o] = u, u = s ? n.o[a][o] : n.o[a][o] + (i.o[a][o] - n.o[a][o]) * p, e.o[a][o] = u, u = s ? n.v[a][o] : n.v[a][o] + (i.v[a][o] - n.v[a][o]) * p, e.v[a][o] = u
            }

            function r() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                i = this._caching.lastFrame;
              return i !== t && (i < r && e < r || i > n && e > n) || (this._caching.lastIndex = i < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
            }

            function n() {
              this.paths = this.localShapeCollection
            }

            function i(t) {
              (function(t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var r, n = t._length;
                for (r = 0; r < n; r += 1)
                  if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                return !0
              })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function s() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var t, e;
                    this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                    var r = this.effectsSequence.length;
                    for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                    this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                  }
              else this._mdf = !1
            }

            function a(t, e, r) {
              this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
              var i = 3 === r ? e.pt.k : e.ks.k;
              this.v = shapePool.clone(i), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
            }

            function o(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function l(e, i, s) {
              this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === s ? i.pt.k : i.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
              var a = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = n, this._caching = {
                lastFrame: t,
                lastIndex: 0
              }, this.effectsSequence = [r.bind(this)]
            }
            a.prototype.interpolateShape = e, a.prototype.getValue = s, a.prototype.setVValue = i, a.prototype.addEffect = o, l.prototype.getValue = s, l.prototype.interpolateShape = e, l.prototype.setVValue = i, l.prototype.addEffect = o;
            var h = function() {
                var t = roundCorner;

                function e(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }
                return e.prototype = {
                  reset: n,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                  },
                  convertEllToPath: function() {
                    var e = this.p.v[0],
                      r = this.p.v[1],
                      n = this.s.v[0] / 2,
                      i = this.s.v[1] / 2,
                      s = 3 !== this.d,
                      a = this.v;
                    a.v[0][0] = e, a.v[0][1] = r - i, a.v[1][0] = s ? e + n : e - n, a.v[1][1] = r, a.v[2][0] = e, a.v[2][1] = r + i, a.v[3][0] = s ? e - n : e + n, a.v[3][1] = r, a.i[0][0] = s ? e - n * t : e + n * t, a.i[0][1] = r - i, a.i[1][0] = s ? e + n : e - n, a.i[1][1] = r - i * t, a.i[2][0] = s ? e + n * t : e - n * t, a.i[2][1] = r + i, a.i[3][0] = s ? e - n : e + n, a.i[3][1] = r + i * t, a.o[0][0] = s ? e + n * t : e - n * t, a.o[0][1] = r - i, a.o[1][0] = s ? e + n : e - n, a.o[1][1] = r + i * t, a.o[2][0] = s ? e - n * t : e + n * t, a.o[2][1] = r + i, a.o[3][0] = s ? e - n : e + n, a.o[3][1] = r - i * t
                  }
                }, extendPrototype([DynamicPropertyContainer], e), e
              }(),
              p = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }
                return t.prototype = {
                  reset: n,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                  },
                  convertStarToPath: function() {
                    var t, e, r, n, i = 2 * Math.floor(this.pt.v),
                      s = 2 * Math.PI / i,
                      a = !0,
                      o = this.or.v,
                      l = this.ir.v,
                      h = this.os.v,
                      p = this.is.v,
                      u = 2 * Math.PI * o / (2 * i),
                      c = 2 * Math.PI * l / (2 * i),
                      f = -Math.PI / 2;
                    f += this.r.v;
                    var d = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, t = 0; t < i; t += 1) {
                      r = a ? h : p, n = a ? u : c;
                      var m = (e = a ? o : l) * Math.cos(f),
                        g = e * Math.sin(f),
                        v = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                        y = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                      m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - v * n * r * d, g - y * n * r * d, m + v * n * r * d, g + y * n * r * d, t, !0), a = !a, f += s * d
                    }
                  },
                  convertPolygonToPath: function() {
                    var t, e = Math.floor(this.pt.v),
                      r = 2 * Math.PI / e,
                      n = this.or.v,
                      i = this.os.v,
                      s = 2 * Math.PI * n / (4 * e),
                      a = .5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                      var l = n * Math.cos(a),
                        h = n * Math.sin(a),
                        p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                        u = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                      l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - p * s * i * o, h - u * s * i * o, l + p * s * i * o, h + u * s * i * o, t, !0), a += r * o
                    }
                    this.paths.length = 0, this.paths[0] = this.v
                  }
                }, extendPrototype([DynamicPropertyContainer], t), t
              }(),
              u = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                }
                return t.prototype = {
                  convertRectToPath: function() {
                    var t = this.p.v[0],
                      e = this.p.v[1],
                      r = this.s.v[0] / 2,
                      n = this.s.v[1] / 2,
                      i = bmMin(r, n, this.r.v),
                      s = i * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + i, t + r, e - n + s, 0, !0), this.v.setTripleAt(t + r, e + n - i, t + r, e + n - s, t + r, e + n - i, 1, !0), 0 !== i ? (this.v.setTripleAt(t + r - i, e + n, t + r - i, e + n, t + r - s, e + n, 2, !0), this.v.setTripleAt(t - r + i, e + n, t - r + s, e + n, t - r + i, e + n, 3, !0), this.v.setTripleAt(t - r, e + n - i, t - r, e + n - i, t - r, e + n - s, 4, !0), this.v.setTripleAt(t - r, e - n + i, t - r, e - n + s, t - r, e - n + i, 5, !0), this.v.setTripleAt(t - r + i, e - n, t - r + i, e - n, t - r + s, e - n, 6, !0), this.v.setTripleAt(t + r - i, e - n, t + r - s, e - n, t + r - i, e - n, 7, !0)) : (this.v.setTripleAt(t - r, e + n, t - r + s, e + n, t - r, e + n, 2), this.v.setTripleAt(t - r, e - n, t - r, e - n + s, t - r, e - n, 3))) : (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + s, t + r, e - n + i, 0, !0), 0 !== i ? (this.v.setTripleAt(t + r - i, e - n, t + r - i, e - n, t + r - s, e - n, 1, !0), this.v.setTripleAt(t - r + i, e - n, t - r + s, e - n, t - r + i, e - n, 2, !0), this.v.setTripleAt(t - r, e - n + i, t - r, e - n + i, t - r, e - n + s, 3, !0), this.v.setTripleAt(t - r, e + n - i, t - r, e + n - s, t - r, e + n - i, 4, !0), this.v.setTripleAt(t - r + i, e + n, t - r + i, e + n, t - r + s, e + n, 5, !0), this.v.setTripleAt(t + r - i, e + n, t + r - s, e + n, t + r - i, e + n, 6, !0), this.v.setTripleAt(t + r, e + n - i, t + r, e + n - i, t + r, e + n - s, 7, !0)) : (this.v.setTripleAt(t - r, e - n, t - r + s, e - n, t - r, e - n, 1, !0), this.v.setTripleAt(t - r, e + n, t - r, e + n - s, t - r, e + n, 2, !0), this.v.setTripleAt(t + r, e + n, t + r - s, e + n, t + r, e + n, 3, !0)))
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                  },
                  reset: n
                }, extendPrototype([DynamicPropertyContainer], t), t
              }();
            return {
              getShapeProp: function(t, e, r) {
                var n;
                return 3 === r || 4 === r ? n = (3 === r ? e.pt : e.ks).k.length ? new l(t, e, r) : new a(t, e, r) : 5 === r ? n = new u(t, e) : 6 === r ? n = new h(t, e) : 7 === r && (n = new p(t, e)), n.k && t.addDynamicProperty(n), n
              },
              getConstructorFunction: function() {
                return a
              },
              getKeyframedConstructorFunction: function() {
                return l
              }
            }
          }(),
          Matrix = function() {
            var t = Math.cos,
              e = Math.sin,
              r = Math.tan,
              n = Math.round;

            function i() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function s(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function a(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1)
            }

            function o(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1)
            }

            function l(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function h(t, e) {
              return this._t(1, e, t, 1, 0, 0)
            }

            function p(t, e) {
              return this.shear(r(t), r(e))
            }

            function u(n, i) {
              var s = t(i),
                a = e(i);
              return this._t(s, a, 0, 0, -a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function c(t, e, r) {
              return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
            }

            function f(t, e, r, n, i, s, a, o, l, h, p, u, c, f, d, m) {
              return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = n, this.props[4] = i, this.props[5] = s, this.props[6] = a, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = p, this.props[11] = u, this.props[12] = c, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
            }

            function d(t, e, r) {
              return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
            }

            function m(t, e, r, n, i, s, a, o, l, h, p, u, c, f, d, m) {
              var g = this.props;
              if (1 === t && 0 === e && 0 === r && 0 === n && 0 === i && 1 === s && 0 === a && 0 === o && 0 === l && 0 === h && 1 === p && 0 === u) return g[12] = g[12] * t + g[15] * c, g[13] = g[13] * s + g[15] * f, g[14] = g[14] * p + g[15] * d, g[15] *= m, this._identityCalculated = !1, this;
              var v = g[0],
                y = g[1],
                b = g[2],
                _ = g[3],
                x = g[4],
                E = g[5],
                S = g[6],
                P = g[7],
                w = g[8],
                C = g[9],
                T = g[10],
                A = g[11],
                M = g[12],
                k = g[13],
                D = g[14],
                I = g[15];
              return g[0] = v * t + y * i + b * l + _ * c, g[1] = v * e + y * s + b * h + _ * f, g[2] = v * r + y * a + b * p + _ * d, g[3] = v * n + y * o + b * u + _ * m, g[4] = x * t + E * i + S * l + P * c, g[5] = x * e + E * s + S * h + P * f, g[6] = x * r + E * a + S * p + P * d, g[7] = x * n + E * o + S * u + P * m, g[8] = w * t + C * i + T * l + A * c, g[9] = w * e + C * s + T * h + A * f, g[10] = w * r + C * a + T * p + A * d, g[11] = w * n + C * o + T * u + A * m, g[12] = M * t + k * i + D * l + I * c, g[13] = M * e + k * s + D * h + I * f, g[14] = M * r + k * a + D * p + I * d, g[15] = M * n + k * o + D * u + I * m, this._identityCalculated = !1, this
            }

            function g() {
              return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function v(t) {
              for (var e = 0; e < 16;) {
                if (t.props[e] !== this.props[e]) return !1;
                e += 1
              }
              return !0
            }

            function y(t) {
              var e;
              for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              return t
            }

            function b(t) {
              var e;
              for (e = 0; e < 16; e += 1) this.props[e] = t[e]
            }

            function _(t, e, r) {
              return {
                x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
              }
            }

            function x(t, e, r) {
              return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
            }

            function E(t, e, r) {
              return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
            }

            function S(t, e, r) {
              return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
            }

            function P() {
              var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                r = -this.props[1] / t,
                n = -this.props[4] / t,
                i = this.props[0] / t,
                s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                o = new Matrix;
              return o.props[0] = e, o.props[1] = r, o.props[4] = n, o.props[5] = i, o.props[12] = s, o.props[13] = a, o
            }

            function w(t) {
              return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function C(t) {
              var e, r = t.length,
                n = [];
              for (e = 0; e < r; e += 1) n[e] = w(t[e]);
              return n
            }

            function T(t, e, r) {
              var n = createTypedArray("float32", 6);
              if (this.isIdentity()) n[0] = t[0], n[1] = t[1], n[2] = e[0], n[3] = e[1], n[4] = r[0], n[5] = r[1];
              else {
                var i = this.props[0],
                  s = this.props[1],
                  a = this.props[4],
                  o = this.props[5],
                  l = this.props[12],
                  h = this.props[13];
                n[0] = t[0] * i + t[1] * a + l, n[1] = t[0] * s + t[1] * o + h, n[2] = e[0] * i + e[1] * a + l, n[3] = e[0] * s + e[1] * o + h, n[4] = r[0] * i + r[1] * a + l, n[5] = r[0] * s + r[1] * o + h
              }
              return n
            }

            function A(t, e, r) {
              return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
            }

            function M(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var r = this.props;
              return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
            }

            function k() {
              for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += n(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
              return r
            }

            function D(t) {
              return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? n(1e4 * t) / 1e4 : t
            }

            function I() {
              var t = this.props;
              return "matrix(" + D(t[0]) + "," + D(t[1]) + "," + D(t[4]) + "," + D(t[5]) + "," + D(t[12]) + "," + D(t[13]) + ")"
            }
            return function() {
              this.reset = i, this.rotate = s, this.rotateX = a, this.rotateY = o, this.rotateZ = l, this.skew = p, this.skewFromAxis = u, this.shear = h, this.scale = c, this.setTransform = f, this.translate = d, this.transform = m, this.applyToPoint = _, this.applyToX = x, this.applyToY = E, this.applyToZ = S, this.applyToPointArray = A, this.applyToTriplePoints = T, this.applyToPointStringified = M, this.toCSS = k, this.to2dCSS = I, this.clone = y, this.cloneFromProps = b, this.equals = v, this.inversePoints = C, this.inversePoint = w, this.getInverseMatrix = P, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
          }();

        function _typeof$3(t) {
          return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$3(t)
        }
        var lottie = {},
          standalone = "__[STANDALONE]__",
          animationData = "__[ANIMATIONDATA]__",
          renderer = "";

        function setLocation(t) {
          setLocationHref(t)
        }

        function searchAnimations() {
          !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
          setSubframeEnabled(t)
        }

        function setPrefix(t) {
          setIdPrefix(t)
        }

        function loadAnimation(t) {
          return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality(t) {
          if ("string" == typeof t) switch (t) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10)
          } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
          getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser() {
          return "undefined" != typeof navigator
        }

        function installPlugin(t, e) {
          "expressions" === t && setExpressionsPlugin(e)
        }

        function getFactory(t) {
          switch (t) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null
          }
        }

        function checkReady() {
          "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
          for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
            var n = e[r].split("=");
            if (decodeURIComponent(n[0]) == t) return decodeURIComponent(n[1])
          }
          return null
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.10.2";
        var queryString = "";
        if (standalone) {
          var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || {
              src: ""
            };
          queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
          "object" !== _typeof$3(exports) && __webpack_require__.amdO
        } catch (t) {}
        var ShapeModifiers = function() {
          var t = {},
            e = {};
          return t.registerModifier = function(t, r) {
            e[t] || (e[t] = r)
          }, t.getModifier = function(t, r, n) {
            return new e[t](r, n)
          }, t
        }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function PuckerAndBloatModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
          if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = {
              shape: t.sh,
              data: t,
              localShapeCollection: shapeCollectionPool.newShapeCollection()
            };
            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
          }
        }, ShapeModifier.prototype.init = function(t, e) {
          this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
          this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
          t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, n, i) {
          var s = [];
          e <= 1 ? s.push({
            s: t,
            e
          }) : t >= 1 ? s.push({
            s: t - 1,
            e: e - 1
          }) : (s.push({
            s: t,
            e: 1
          }), s.push({
            s: 0,
            e: e - 1
          }));
          var a, o, l = [],
            h = s.length;
          for (a = 0; a < h; a += 1) {
            var p, u;
            (o = s[a]).e * i < n || o.s * i > n + r || (p = o.s * i <= n ? 0 : (o.s * i - n) / r, u = o.e * i >= n + r ? 1 : (o.e * i - n) / r, l.push([p, u]))
          }
          return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
          return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
          var e, r, n, i;
          if (this._mdf || t) {
            var s = this.o.v % 360 / 360;
            if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (r = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
              var a = e;
              e = r, r = a
            }
            e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
          } else e = this.sValue, r = this.eValue;
          var o, l, h, p, u, c = this.shapes.length,
            f = 0;
          if (r === e)
            for (i = 0; i < c; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
          else if (1 === r && 0 === e || 0 === r && 1 === e) {
            if (this._mdf)
              for (i = 0; i < c; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
          } else {
            var d, m, g = [];
            for (i = 0; i < c; i += 1)
              if ((d = this.shapes[i]).shape._mdf || this._mdf || t || 2 === this.m) {
                if (l = (n = d.shape.paths)._length, u = 0, !d.shape._mdf && d.pathsData.length) u = d.totalShapeLength;
                else {
                  for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) p = bez.getSegmentsLength(n.shapes[o]), h.push(p), u += p.totalLength;
                  d.totalShapeLength = u, d.pathsData = h
                }
                f += u, d.shape._mdf = !0
              } else d.shape.paths = d.localShapeCollection;
            var v, y = e,
              b = r,
              _ = 0;
            for (i = c - 1; i >= 0; i -= 1)
              if ((d = this.shapes[i]).shape._mdf) {
                for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (v = this.calculateShapeEdges(e, r, d.totalShapeLength, _, f), _ += d.totalShapeLength) : v = [
                    [y, b]
                  ], l = v.length, o = 0; o < l; o += 1) {
                  y = v[o][0], b = v[o][1], g.length = 0, b <= 1 ? g.push({
                    s: d.totalShapeLength * y,
                    e: d.totalShapeLength * b
                  }) : y >= 1 ? g.push({
                    s: d.totalShapeLength * (y - 1),
                    e: d.totalShapeLength * (b - 1)
                  }) : (g.push({
                    s: d.totalShapeLength * y,
                    e: d.totalShapeLength
                  }), g.push({
                    s: 0,
                    e: d.totalShapeLength * (b - 1)
                  }));
                  var x = this.addShapes(d, g[0]);
                  if (g[0].s !== g[0].e) {
                    if (g.length > 1)
                      if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                        var E = x.pop();
                        this.addPaths(x, m), x = this.addShapes(d, g[1], E)
                      } else this.addPaths(x, m), x = this.addShapes(d, g[1]);
                    this.addPaths(x, m)
                  }
                }
                d.shape.paths = m
              }
          }
        }, TrimModifier.prototype.addPaths = function(t, e) {
          var r, n = t.length;
          for (r = 0; r < n; r += 1) e.addShape(t[r])
        }, TrimModifier.prototype.addSegment = function(t, e, r, n, i, s, a) {
          i.setXYAt(e[0], e[1], "o", s), i.setXYAt(r[0], r[1], "i", s + 1), a && i.setXYAt(t[0], t[1], "v", s), i.setXYAt(n[0], n[1], "v", s + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, n) {
          e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), n && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, r) {
          var n, i, s, a, o, l, h, p, u = t.pathsData,
            c = t.shape.paths.shapes,
            f = t.shape.paths._length,
            d = 0,
            m = [],
            g = !0;
          for (r ? (o = r._length, p = r._length) : (r = shapePool.newElement(), o = 0, p = 0), m.push(r), n = 0; n < f; n += 1) {
            for (l = u[n].lengths, r.c = c[n].c, s = c[n].c ? l.length : l.length + 1, i = 1; i < s; i += 1)
              if (d + (a = l[i - 1]).addedLength < e.s) d += a.addedLength, r.c = !1;
              else {
                if (d > e.e) {
                  r.c = !1;
                  break
                }
                e.s <= d && e.e >= d + a.addedLength ? (this.addSegment(c[n].v[i - 1], c[n].o[i - 1], c[n].i[i], c[n].v[i], r, o, g), g = !1) : (h = bez.getNewSegment(c[n].v[i - 1], c[n].v[i], c[n].o[i - 1], c[n].i[i], (e.s - d) / a.addedLength, (e.e - d) / a.addedLength, l[i - 1]), this.addSegmentFromArray(h, r, o, g), g = !1, r.c = !1), d += a.addedLength, o += 1
              } if (c[n].c && l.length) {
              if (a = l[i - 1], d <= e.e) {
                var v = l[i - 1].addedLength;
                e.s <= d && e.e >= d + v ? (this.addSegment(c[n].v[i - 1], c[n].o[i - 1], c[n].i[0], c[n].v[0], r, o, g), g = !1) : (h = bez.getNewSegment(c[n].v[i - 1], c[n].v[0], c[n].o[i - 1], c[n].i[0], (e.s - d) / v, (e.e - d) / v, l[i - 1]), this.addSegmentFromArray(h, r, o, g), g = !1, r.c = !1)
              } else r.c = !1;
              d += a.addedLength, o += 1
            }
            if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
            n < f - 1 && (r = shapePool.newElement(), g = !0, m.push(r), o = 0)
          }
          return m
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
          var r = e / 100,
            n = [0, 0],
            i = t._length,
            s = 0;
          for (s = 0; s < i; s += 1) n[0] += t.v[s][0], n[1] += t.v[s][1];
          n[0] /= i, n[1] /= i;
          var a, o, l, h, p, u, c = shapePool.newElement();
          for (c.c = t.c, s = 0; s < i; s += 1) a = t.v[s][0] + (n[0] - t.v[s][0]) * r, o = t.v[s][1] + (n[1] - t.v[s][1]) * r, l = t.o[s][0] + (n[0] - t.o[s][0]) * -r, h = t.o[s][1] + (n[1] - t.o[s][1]) * -r, p = t.i[s][0] + (n[0] - t.i[s][0]) * -r, u = t.i[s][1] + (n[1] - t.i[s][1]) * -r, c.setTripleAt(a, o, l, h, p, u, s);
          return c
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
          var e, r, n, i, s, a, o = this.shapes.length,
            l = this.amount.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (a = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, i = s.shape.paths._length, n = 0; n < i; n += 1) a.addShape(this.processPath(e[n], l));
              s.shape.paths = s.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
          var t = [0, 0];

          function e(t, e, r) {
            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                k: [0, 0, 0]
              }, 1, 0, this), e.rx) {
              if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                var n, i = e.or.k.length;
                for (n = 0; n < i; n += 1) e.or.k[n].to = null, e.or.k[n].ti = null
              }
              this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
            } else this.r = PropertyFactory.getProp(t, e.r || {
              k: 0
            }, 0, degToRads, this);
            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
              k: [0, 0, 0]
            }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
              k: [100, 100, 100]
            }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
              _mdf: !1,
              v: 1
            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
          }
          return e.prototype = {
            applyToMatrix: function(t) {
              var e = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            },
            getValue: function(e) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                  var r;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var n, i;
                    if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (n = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), i = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (n = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), i = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (n = this.p.pv, i = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      n = [], i = [];
                      var s = this.px,
                        a = this.py;
                      s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (n[0] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), n[1] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), i[0] = s.getValueAtTime(s.keyframes[0].t / r, 0), i[1] = a.getValueAtTime(a.keyframes[0].t / r, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (n[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), n[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), i[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0), i[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0)) : (n = [s.pv, a.pv], i[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime), i[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime))
                    } else n = i = t;
                    this.v.rotate(-Math.atan2(n[1] - i[1], n[0] - i[0]))
                  }
                  this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                }
                this.frameId = this.elem.globalData.frameId
              }
            },
            precalculateMatrix: function() {
              if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                  if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                }
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
              }
            },
            autoOrient: function() {}
          }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
          }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function(t, r, n) {
              return new e(t, r, n)
            }
          }
        }();

        function RepeaterModifier() {}

        function RoundCornersModifier() {}

        function floatEqual(t, e) {
          return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
        }

        function floatZero(t) {
          return Math.abs(t) <= 1e-5
        }

        function lerp(t, e, r) {
          return t * (1 - r) + e * r
        }

        function lerpPoint(t, e, r) {
          return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)]
        }

        function quadRoots(t, e, r) {
          if (0 === t) return [];
          var n = e * e - 4 * t * r;
          if (n < 0) return [];
          var i = -e / (2 * t);
          if (0 === n) return [i];
          var s = Math.sqrt(n) / (2 * t);
          return [i - s, i + s]
        }

        function polynomialCoefficients(t, e, r, n) {
          return [3 * e - t - 3 * r + n, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
          return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, r, n, i) {
          i && pointEqual(t, e) && (e = lerpPoint(t, n, 1 / 3)), i && pointEqual(r, n) && (r = lerpPoint(t, n, 2 / 3));
          var s = polynomialCoefficients(t[0], e[0], r[0], n[0]),
            a = polynomialCoefficients(t[1], e[1], r[1], n[1]);
          this.a = [s[0], a[0]], this.b = [s[1], a[1]], this.c = [s[2], a[2]], this.d = [s[3], a[3]], this.points = [t, e, r, n]
        }

        function extrema(t, e) {
          var r = t.points[0][e],
            n = t.points[t.points.length - 1][e];
          if (r > n) {
            var i = n;
            n = r, r = i
          }
          for (var s = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), a = 0; a < s.length; a += 1)
            if (s[a] > 0 && s[a] < 1) {
              var o = t.point(s[a])[e];
              o < r ? r = o : o > n && (n = o)
            } return {
            min: r,
            max: n
          }
        }

        function intersectData(t, e, r) {
          var n = t.boundingBox();
          return {
            cx: n.cx,
            cy: n.cy,
            width: n.width,
            height: n.height,
            bez: t,
            t: (e + r) / 2,
            t1: e,
            t2: r
          }
        }

        function splitData(t) {
          var e = t.bez.split(.5);
          return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect(t, e) {
          return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
        }

        function intersectsImpl(t, e, r, n, i, s) {
          if (boxIntersect(t, e))
            if (r >= s || t.width <= n && t.height <= n && e.width <= n && e.height <= n) i.push([t.t, e.t]);
            else {
              var a = splitData(t),
                o = splitData(e);
              intersectsImpl(a[0], o[0], r + 1, n, i, s), intersectsImpl(a[0], o[1], r + 1, n, i, s), intersectsImpl(a[1], o[0], r + 1, n, i, s), intersectsImpl(a[1], o[1], r + 1, n, i, s)
            }
        }

        function crossProduct(t, e) {
          return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, r, n) {
          var i = [t[0], t[1], 1],
            s = [e[0], e[1], 1],
            a = [r[0], r[1], 1],
            o = [n[0], n[1], 1],
            l = crossProduct(crossProduct(i, s), crossProduct(a, o));
          return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
        }

        function polarOffset(t, e, r) {
          return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r]
        }

        function pointDistance(t, e) {
          return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual(t, e) {
          return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier() {}

        function setPoint(t, e, r, n, i, s, a) {
          var o = r - Math.PI / 2,
            l = r + Math.PI / 2,
            h = e[0] + Math.cos(r) * n * i,
            p = e[1] - Math.sin(r) * n * i;
          t.setTripleAt(h, p, h + Math.cos(o) * s, p - Math.sin(o) * s, h + Math.cos(l) * a, p - Math.sin(l) * a, t.length())
        }

        function getPerpendicularVector(t, e) {
          var r = [e[0] - t[0], e[1] - t[1]],
            n = .5 * -Math.PI;
          return [Math.cos(n) * r[0] - Math.sin(n) * r[1], Math.sin(n) * r[0] + Math.cos(n) * r[1]]
        }

        function getProjectingAngle(t, e) {
          var r = 0 === e ? t.length() - 1 : e - 1,
            n = (e + 1) % t.length(),
            i = getPerpendicularVector(t.v[r], t.v[n]);
          return Math.atan2(0, 1) - Math.atan2(i[1], i[0])
        }

        function zigZagCorner(t, e, r, n, i, s, a) {
          var o = getProjectingAngle(e, r),
            l = e.v[r % e._length],
            h = e.v[0 === r ? e._length - 1 : r - 1],
            p = e.v[(r + 1) % e._length],
            u = 2 === s ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0,
            c = 2 === s ? Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)) : 0;
          setPoint(t, e.v[r % e._length], o, a, n, c / (2 * (i + 1)), u / (2 * (i + 1)), s)
        }

        function zigZagSegment(t, e, r, n, i, s) {
          for (var a = 0; a < n; a += 1) {
            var o = (a + 1) / (n + 1),
              l = 2 === i ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
              h = e.normalAngle(o);
            setPoint(t, e.point(o), h, s, r, l / (2 * (n + 1)), l / (2 * (n + 1)), i), s = -s
          }
          return s
        }

        function linearOffset(t, e, r) {
          var n = Math.atan2(e[0] - t[0], e[1] - t[1]);
          return [polarOffset(t, n, r), polarOffset(e, n, r)]
        }

        function offsetSegment(t, e) {
          var r, n, i, s, a, o, l;
          r = (l = linearOffset(t.points[0], t.points[1], e))[0], n = l[1], i = (l = linearOffset(t.points[1], t.points[2], e))[0], s = l[1], a = (l = linearOffset(t.points[2], t.points[3], e))[0], o = l[1];
          var h = lineIntersection(r, n, i, s);
          null === h && (h = n);
          var p = lineIntersection(a, o, i, s);
          return null === p && (p = a), new PolynomialBezier(r, h, p, o)
        }

        function joinLines(t, e, r, n, i) {
          var s = e.points[3],
            a = r.points[0];
          if (3 === n) return s;
          if (pointEqual(s, a)) return s;
          if (2 === n) {
            var o = -e.tangentAngle(1),
              l = -r.tangentAngle(0) + Math.PI,
              h = lineIntersection(s, polarOffset(s, o + Math.PI / 2, 100), a, polarOffset(a, o + Math.PI / 2, 100)),
              p = h ? pointDistance(h, s) : pointDistance(s, a) / 2,
              u = polarOffset(s, o, 2 * p * roundCorner);
            return t.setXYAt(u[0], u[1], "o", t.length() - 1), u = polarOffset(a, l, 2 * p * roundCorner), t.setTripleAt(a[0], a[1], a[0], a[1], u[0], u[1], t.length()), a
          }
          var c = lineIntersection(pointEqual(s, e.points[2]) ? e.points[0] : e.points[2], s, a, pointEqual(a, r.points[1]) ? r.points[3] : r.points[1]);
          return c && pointDistance(c, s) < i ? (t.setTripleAt(c[0], c[1], c[0], c[1], c[0], c[1], t.length()), c) : s
        }

        function getIntersection(t, e) {
          var r = t.intersections(e);
          return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
        }

        function pruneSegmentIntersection(t, e) {
          var r = t.slice(),
            n = e.slice(),
            i = getIntersection(t[t.length - 1], e[0]);
          return i && (r[t.length - 1] = t[t.length - 1].split(i[0])[0], n[0] = e[0].split(i[1])[1]), t.length > 1 && e.length > 1 && (i = getIntersection(t[0], e[e.length - 1])) ? [
            [t[0].split(i[0])[0]],
            [e[e.length - 1].split(i[1])[1]]
          ] : [r, n]
        }

        function pruneIntersections(t) {
          for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
          return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
          var r, n, i, s, a = t.inflectionPoints();
          if (0 === a.length) return [offsetSegment(t, e)];
          if (1 === a.length || floatEqual(a[1], 1)) return r = (i = t.split(a[0]))[0], n = i[1], [offsetSegment(r, e), offsetSegment(n, e)];
          r = (i = t.split(a[0]))[0];
          var o = (a[1] - a[0]) / (1 - a[0]);
          return s = (i = i[1].split(o))[0], n = i[1], [offsetSegment(r, e), offsetSegment(s, e), offsetSegment(n, e)]
        }

        function OffsetPathModifier() {}

        function getFontProperties(t) {
          for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", n = "normal", i = e.length, s = 0; s < i; s += 1) switch (e[s].toLowerCase()) {
            case "italic":
              n = "italic";
              break;
            case "bold":
              r = "700";
              break;
            case "black":
              r = "900";
              break;
            case "medium":
              r = "500";
              break;
            case "regular":
            case "normal":
              r = "400";
              break;
            case "light":
            case "thin":
              r = "200"
          }
          return {
            style: n,
            weight: t.fWeight || r
          }
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, n, i, s) {
          var a = s ? -1 : 1,
            o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
            l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
          t.translate(n.p.v[0] * a * i, n.p.v[1] * a * i, n.p.v[2]), e.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), e.rotate(-n.r.v * a * i), e.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(s ? 1 / o : o, s ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, r, n) {
          for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
          this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
          var e = JSON.parse(JSON.stringify(t));
          return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
          var r, n = t.length;
          for (r = 0; r < n; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
          var e, r, n, i, s, a = !1;
          if (this._mdf || t) {
            var o, l = Math.ceil(this.c.v);
            if (this._groups.length < l) {
              for (; this._groups.length < l;) {
                var h = {
                  it: this.cloneElements(this._elements),
                  ty: "gr"
                };
                h.it.push({
                  a: {
                    a: 0,
                    ix: 1,
                    k: [0, 0]
                  },
                  nm: "Transform",
                  o: {
                    a: 0,
                    ix: 7,
                    k: 100
                  },
                  p: {
                    a: 0,
                    ix: 2,
                    k: [0, 0]
                  },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [{
                      s: 0,
                      e: 0,
                      t: 0
                    }, {
                      s: 0,
                      e: 0,
                      t: 1
                    }]
                  },
                  s: {
                    a: 0,
                    ix: 3,
                    k: [100, 100]
                  },
                  sa: {
                    a: 0,
                    ix: 5,
                    k: 0
                  },
                  sk: {
                    a: 0,
                    ix: 4,
                    k: 0
                  },
                  ty: "tr"
                }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
              }
              this.elem.reloadShapes(), a = !0
            }
            for (s = 0, n = 0; n <= this._groups.length - 1; n += 1) {
              if (o = s < l, this._groups[n]._render = o, this.changeGroupRender(this._groups[n].it, o), !o) {
                var p = this.elemsData[n].it,
                  u = p[p.length - 1];
                0 !== u.transform.op.v ? (u.transform.op._mdf = !0, u.transform.op.v = 0) : u.transform.op._mdf = !1
              }
              s += 1
            }
            this._currentCopies = l;
            var c = this.o.v,
              f = c % 1,
              d = c > 0 ? Math.floor(c) : Math.ceil(c),
              m = this.pMatrix.props,
              g = this.rMatrix.props,
              v = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var y, b, _ = 0;
            if (c > 0) {
              for (; _ < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), _ += f)
            } else if (c < 0) {
              for (; _ > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), _ -= f)
            }
            for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
              if (b = (r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 0 !== _) {
                for ((0 !== n && 1 === i || n !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
              _ += 1, s -= 1, n += i
            }
          } else
            for (s = this._currentCopies, n = 0, i = 1; s;) r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, n += i;
          return a
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
          var r, n = shapePool.newElement();
          n.c = t.c;
          var i, s, a, o, l, h, p, u, c, f, d, m, g = t._length,
            v = 0;
          for (r = 0; r < g; r += 1) i = t.v[r], a = t.o[r], s = t.i[r], i[0] === a[0] && i[1] === a[1] && i[0] === s[0] && i[1] === s[1] ? 0 !== r && r !== g - 1 || t.c ? (o = 0 === r ? t.v[g - 1] : t.v[r - 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = d = i[0] + (o[0] - i[0]) * h, u = m = i[1] - (i[1] - o[1]) * h, c = p - (p - i[0]) * roundCorner, f = u - (u - i[1]) * roundCorner, n.setTripleAt(p, u, c, f, d, m, v), v += 1, o = r === g - 1 ? t.v[0] : t.v[r + 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = c = i[0] + (o[0] - i[0]) * h, u = f = i[1] + (o[1] - i[1]) * h, d = p - (p - i[0]) * roundCorner, m = u - (u - i[1]) * roundCorner, n.setTripleAt(p, u, c, f, d, m, v), v += 1) : (n.setTripleAt(i[0], i[1], a[0], a[1], s[0], s[1], v), v += 1) : (n.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], v), v += 1);
          return n
        }, RoundCornersModifier.prototype.processShapes = function(t) {
          var e, r, n, i, s, a, o = this.shapes.length,
            l = this.rd.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (a = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, i = s.shape.paths._length, n = 0; n < i; n += 1) a.addShape(this.processPath(e[n], l));
              s.shape.paths = s.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, PolynomialBezier.prototype.point = function(t) {
          return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function(t) {
          return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[1], e[0])
        }, PolynomialBezier.prototype.normalAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[0], e[1])
        }, PolynomialBezier.prototype.inflectionPoints = function() {
          var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(t)) return [];
          var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
            r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
          if (r < 0) return [];
          var n = Math.sqrt(r);
          return floatZero(n) ? n > 0 && n < 1 ? [e] : [] : [e - n, e + n].filter((function(t) {
            return t > 0 && t < 1
          }))
        }, PolynomialBezier.prototype.split = function(t) {
          if (t <= 0) return [singlePoint(this.points[0]), this];
          if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
          var e = lerpPoint(this.points[0], this.points[1], t),
            r = lerpPoint(this.points[1], this.points[2], t),
            n = lerpPoint(this.points[2], this.points[3], t),
            i = lerpPoint(e, r, t),
            s = lerpPoint(r, n, t),
            a = lerpPoint(i, s, t);
          return [new PolynomialBezier(this.points[0], e, i, a, !0), new PolynomialBezier(a, s, n, this.points[3], !0)]
        }, PolynomialBezier.prototype.bounds = function() {
          return {
            x: extrema(this, 0),
            y: extrema(this, 1)
          }
        }, PolynomialBezier.prototype.boundingBox = function() {
          var t = this.bounds();
          return {
            left: t.x.min,
            right: t.x.max,
            top: t.y.min,
            bottom: t.y.max,
            width: t.x.max - t.x.min,
            height: t.y.max - t.y.min,
            cx: (t.x.max + t.x.min) / 2,
            cy: (t.y.max + t.y.min) / 2
          }
        }, PolynomialBezier.prototype.intersections = function(t, e, r) {
          void 0 === e && (e = 2), void 0 === r && (r = 7);
          var n = [];
          return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, n, r), n
        }, PolynomialBezier.shapeSegment = function(t, e) {
          var r = (e + 1) % t.length();
          return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
          var r = (e + 1) % t.length();
          return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
        }, ZigZagModifier.prototype.processPath = function(t, e, r, n) {
          var i = t._length,
            s = shapePool.newElement();
          if (s.c = t.c, t.c || (i -= 1), 0 === i) return s;
          var a = -1,
            o = PolynomialBezier.shapeSegment(t, 0);
          zigZagCorner(s, t, 0, e, r, n, a);
          for (var l = 0; l < i; l += 1) a = zigZagSegment(s, o, e, r, n, -a), o = l !== i - 1 || t.c ? PolynomialBezier.shapeSegment(t, (l + 1) % i) : null, zigZagCorner(s, t, l + 1, e, r, n, a);
          return s
        }, ZigZagModifier.prototype.processShapes = function(t) {
          var e, r, n, i, s, a, o = this.shapes.length,
            l = this.amplitude.v,
            h = Math.max(0, Math.round(this.frequency.v)),
            p = this.pointsType.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (a = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, i = s.shape.paths._length, n = 0; n < i; n += 1) a.addShape(this.processPath(e[n], l, h, p));
              s.shape.paths = s.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function(t, e, r, n) {
          var i = shapePool.newElement();
          i.c = t.c;
          var s, a, o, l = t.length();
          t.c || (l -= 1);
          var h = [];
          for (s = 0; s < l; s += 1) o = PolynomialBezier.shapeSegment(t, s), h.push(offsetSegmentSplit(o, e));
          if (!t.c)
            for (s = l - 1; s >= 0; s -= 1) o = PolynomialBezier.shapeSegmentInverted(t, s), h.push(offsetSegmentSplit(o, e));
          h = pruneIntersections(h);
          var p = null,
            u = null;
          for (s = 0; s < h.length; s += 1) {
            var c = h[s];
            for (u && (p = joinLines(i, u, c[0], r, n)), u = c[c.length - 1], a = 0; a < c.length; a += 1) o = c[a], p && pointEqual(o.points[0], p) ? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1) : i.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], i.length()), i.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], i.length()), p = o.points[3]
          }
          return h.length && joinLines(i, u, h[0][0], r, n), i
        }, OffsetPathModifier.prototype.processShapes = function(t) {
          var e, r, n, i, s, a, o = this.shapes.length,
            l = this.amount.v,
            h = this.miterLimit.v,
            p = this.lineJoin;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (a = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, i = s.shape.paths._length, n = 0; n < i; n += 1) a.addShape(this.processPath(e[n], l, p, h));
              s.shape.paths = s.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var FontManager = function() {
          var t = {
              w: 0,
              size: 0,
              shapes: [],
              data: {
                shapes: []
              }
            },
            e = [];
          e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
            n = [65039, 8205];

          function i(t, e) {
            var r = createTag("span");
            r.setAttribute("aria-hidden", !0), r.style.fontFamily = e;
            var n = createTag("span");
            n.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(n), document.body.appendChild(r);
            var i = n.offsetWidth;
            return n.style.fontFamily = function(t) {
              var e, r = t.split(","),
                n = r.length,
                i = [];
              for (e = 0; e < n; e += 1) "sans-serif" !== r[e] && "monospace" !== r[e] && i.push(r[e]);
              return i.join(",")
            }(t) + ", " + e, {
              node: n,
              w: i,
              parent: r
            }
          }

          function s(t, e) {
            var r, n = document.body && e ? "svg" : "canvas",
              i = getFontProperties(t);
            if ("svg" === n) {
              var s = createNS("text");
              s.style.fontSize = "100px", s.setAttribute("font-family", t.fFamily), s.setAttribute("font-style", i.style), s.setAttribute("font-weight", i.weight), s.textContent = "1", t.fClass ? (s.style.fontFamily = "inherit", s.setAttribute("class", t.fClass)) : s.style.fontFamily = t.fFamily, e.appendChild(s), r = s
            } else {
              var a = new OffscreenCanvas(500, 500).getContext("2d");
              a.font = i.style + " " + i.weight + " 100px " + t.fFamily, r = a
            }
            return {
              measureText: function(t) {
                return "svg" === n ? (r.textContent = t, r.getComputedTextLength()) : r.measureText(t).width
              }
            }
          }
          var a = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          };
          a.isModifier = function(t, e) {
            var n = t.toString(16) + e.toString(16);
            return -1 !== r.indexOf(n)
          }, a.isZeroWidthJoiner = function(t, e) {
            return e ? t === n[0] && e === n[1] : t === n[1]
          }, a.isCombinedCharacter = function(t) {
            return -1 !== e.indexOf(t)
          };
          var o = {
            addChars: function(t) {
              if (t) {
                var e;
                this.chars || (this.chars = []);
                var r, n, i = t.length,
                  s = this.chars.length;
                for (e = 0; e < i; e += 1) {
                  for (r = 0, n = !1; r < s;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (n = !0), r += 1;
                  n || (this.chars.push(t[e]), s += 1)
                }
              }
            },
            addFonts: function(t, e) {
              if (t) {
                if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                  t.helper = s(t), t.cache = {}
                })), void(this.fonts = t.list);
                var r, n = t.list,
                  a = n.length,
                  o = a;
                for (r = 0; r < a; r += 1) {
                  var l, h, p = !0;
                  if (n[r].loaded = !1, n[r].monoCase = i(n[r].fFamily, "monospace"), n[r].sansCase = i(n[r].fFamily, "sans-serif"), n[r].fPath) {
                    if ("p" === n[r].fOrigin || 3 === n[r].origin) {
                      if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[r].fFamily + '"], style[f-origin="3"][f-family="' + n[r].fFamily + '"]')).length > 0 && (p = !1), p) {
                        var u = createTag("style");
                        u.setAttribute("f-forigin", n[r].fOrigin), u.setAttribute("f-origin", n[r].origin), u.setAttribute("f-family", n[r].fFamily), u.type = "text/css", u.innerText = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}", e.appendChild(u)
                      }
                    } else if ("g" === n[r].fOrigin || 1 === n[r].origin) {
                      for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) - 1 !== l[h].href.indexOf(n[r].fPath) && (p = !1);
                      if (p) {
                        var c = createTag("link");
                        c.setAttribute("f-forigin", n[r].fOrigin), c.setAttribute("f-origin", n[r].origin), c.type = "text/css", c.rel = "stylesheet", c.href = n[r].fPath, document.body.appendChild(c)
                      }
                    } else if ("t" === n[r].fOrigin || 2 === n[r].origin) {
                      for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) n[r].fPath === l[h].src && (p = !1);
                      if (p) {
                        var f = createTag("link");
                        f.setAttribute("f-forigin", n[r].fOrigin), f.setAttribute("f-origin", n[r].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", n[r].fPath), e.appendChild(f)
                      }
                    }
                  } else n[r].loaded = !0, o -= 1;
                  n[r].helper = s(n[r], e), n[r].cache = {}, this.fonts.push(n[r])
                }
                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function(e, r, n) {
              for (var i = 0, s = this.chars.length; i < s;) {
                if (this.chars[i].ch === e && this.chars[i].style === r && this.chars[i].fFamily === n) return this.chars[i];
                i += 1
              }
              return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, r, n)), t
            },
            getFontByName: function(t) {
              for (var e = 0, r = this.fonts.length; e < r;) {
                if (this.fonts[e].fName === t) return this.fonts[e];
                e += 1
              }
              return this.fonts[0]
            },
            measureText: function(t, e, r) {
              var n = this.getFontByName(e),
                i = t.charCodeAt(0);
              if (!n.cache[i + 1]) {
                var s = n.helper;
                if (" " === t) {
                  var a = s.measureText("|" + t + "|"),
                    o = s.measureText("||");
                  n.cache[i + 1] = (a - o) / 100
                } else n.cache[i + 1] = s.measureText(t) / 100
              }
              return n.cache[i + 1] * r
            },
            checkLoadedFonts: function() {
              var t, e, r, n = this.fonts.length,
                i = n;
              for (t = 0; t < n; t += 1) this.fonts[t].loaded ? i -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (i -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (i -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
              0 !== i && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            },
            setIsLoaded: function() {
              this.isLoaded = !0
            }
          };
          return a.prototype = o, a
        }();

        function RenderableElement() {}
        RenderableElement.prototype = {
          initRenderable: function() {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
          },
          addRenderableComponent: function(t) {
            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
          },
          removeRenderableComponent: function(t) {
            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
          },
          prepareRenderableFrame: function(t) {
            this.checkLayerLimits(t)
          },
          checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
          },
          checkLayerLimits: function(t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
          },
          renderRenderable: function() {
            var t, e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
          },
          sourceRectAtTime: function() {
            return {
              top: 0,
              left: 0,
              width: 100,
              height: 100
            }
          },
          getLayerSize: function() {
            return 5 === this.data.ty ? {
              w: this.data.textData.width,
              h: this.data.textData.height
            } : {
              w: this.data.width,
              h: this.data.height
            }
          }
        };
        var getBlendMode = (blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
          }, function(t) {
            return blendModeEnums[t] || ""
          }),
          blendModeEnums;

        function SliderEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function AngleEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function ColorEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function PointEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function LayerIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function MaskIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function CheckboxEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function NoValueEffect() {
          this.p = {}
        }

        function EffectsManager(t, e) {
          var r, n = t.ef || [];
          this.effectElements = [];
          var i, s = n.length;
          for (r = 0; r < s; r += 1) i = new GroupEffect(n[r], e), this.effectElements.push(i)
        }

        function GroupEffect(t, e) {
          this.init(t, e)
        }

        function BaseElement() {}

        function FrameElement() {}

        function FootageElement(t, e, r) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
        }

        function AudioElement(t, e, r) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
          var n = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
            k: [100]
          }, 1, .01, this)
        }

        function BaseRenderer() {}

        function TransformElement() {}

        function MaskElement(t, e, r) {
          this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
          var n, i, s = this.globalData.defs,
            a = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(a), this.solidPath = "";
          var o, l, h, p, u, c, f = this.masksProperties,
            d = 0,
            m = [],
            g = createElementID(),
            v = "clipPath",
            y = "clip-path";
          for (n = 0; n < a; n += 1)
            if (("a" !== f[n].mode && "n" !== f[n].mode || f[n].inv || 100 !== f[n].o.k || f[n].o.x) && (v = "mask", y = "mask"), "s" !== f[n].mode && "i" !== f[n].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), i = createNS("path"), "n" === f[n].mode) this.viewData[n] = {
              op: PropertyFactory.getProp(this.element, f[n].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, f[n], 3),
              elem: i,
              lastPath: ""
            }, s.appendChild(i);
            else {
              var b;
              if (d += 1, i.setAttribute("fill", "s" === f[n].mode ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), 0 !== f[n].x.k ? (v = "mask", y = "mask", c = PropertyFactory.getProp(this.element, f[n].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (u = createNS("feMorphology")).setAttribute("operator", "erode"), u.setAttribute("in", "SourceGraphic"), u.setAttribute("radius", "0"), p.appendChild(u), s.appendChild(p), i.setAttribute("stroke", "s" === f[n].mode ? "#000000" : "#ffffff")) : (u = null, c = null), this.storedData[n] = {
                  elem: i,
                  x: c,
                  expan: u,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0
                }, "i" === f[n].mode) {
                l = m.length;
                var _ = createNS("g");
                for (o = 0; o < l; o += 1) _.appendChild(m[o]);
                var x = createNS("mask");
                x.setAttribute("mask-type", "alpha"), x.setAttribute("id", g + "_" + d), x.appendChild(i), s.appendChild(x), _.setAttribute("mask", "url(" + getLocationHref() + "#" + g + "_" + d + ")"), m.length = 0, m.push(_)
              } else m.push(i);
              f[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
                elem: i,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, f[n].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, f[n], 3),
                invRect: h
              }, this.viewData[n].prop.k || this.drawPath(f[n], this.viewData[n].prop.v, this.viewData[n])
            } for (this.maskElement = createNS(v), a = m.length, n = 0; n < a; n += 1) this.maskElement.appendChild(m[n]);
          d > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + g + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
          var r;
          this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
          var n, i = this.data.ef.length,
            s = this.data.ef;
          for (r = 0; r < i; r += 1) {
            switch (n = null, s[r].ty) {
              case 0:
                n = new SliderEffect(s[r], e, this);
                break;
              case 1:
                n = new AngleEffect(s[r], e, this);
                break;
              case 2:
                n = new ColorEffect(s[r], e, this);
                break;
              case 3:
                n = new PointEffect(s[r], e, this);
                break;
              case 4:
              case 7:
                n = new CheckboxEffect(s[r], e, this);
                break;
              case 10:
                n = new LayerIndexEffect(s[r], e, this);
                break;
              case 11:
                n = new MaskIndexEffect(s[r], e, this);
                break;
              case 5:
                n = new EffectsManager(s[r], e, this);
                break;
              default:
                n = new NoValueEffect(s[r], e, this)
            }
            n && this.effectElements.push(n)
          }
        }, BaseElement.prototype = {
          checkMasks: function() {
            if (!this.data.hasMask) return !1;
            for (var t = 0, e = this.data.masksProperties.length; t < e;) {
              if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
              t += 1
            }
            return !1
          },
          initExpressions: function() {
            var t = getExpressionInterfaces();
            if (t) {
              var e = t("layer"),
                r = t("effects"),
                n = t("shape"),
                i = t("text"),
                s = t("comp");
              this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
              var a = r.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(a), 0 === this.data.ty || this.data.xt ? this.compInterface = s(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = n(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = i(this), this.layerInterface.text = this.layerInterface.textInterface)
            }
          },
          setBlendMode: function() {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
          },
          initBaseData: function(t, e, r) {
            this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
          },
          getType: function() {
            return this.type
          },
          sourceRectAtTime: function() {}
        }, FrameElement.prototype = {
          initFrame: function() {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
          },
          prepareProperties: function(t, e) {
            var r, n = this.dynamicProperties.length;
            for (r = 0; r < n; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
          },
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
          }
        }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
          return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
          var t = getExpressionInterfaces();
          if (t) {
            var e = t("footage");
            this.layerInterface = e(this)
          }
        }, FootageElement.prototype.getFootageData = function() {
          return this.footageData
        }, AudioElement.prototype.prepareFrame = function(t) {
          if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
          else {
            var e = this.tm.v;
            this._currentTime = e
          }
          this._volume = this.lv.v[0];
          var r = this._volume * this._volumeMultiplier;
          this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
          this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
          this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
          this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
          this._canPlay = !0
        }, AudioElement.prototype.setRate = function(t) {
          this.audio.rate(t)
        }, AudioElement.prototype.volume = function(t) {
          this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function() {
          return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
          var e, r, n = this.layers.length;
          for (this.completeLayers = !0, e = n - 1; e >= 0; e -= 1) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
          this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t);
            case 0:
              return this.createComp(t);
            case 1:
              return this.createSolid(t);
            case 3:
            default:
              return this.createNull(t);
            case 4:
              return this.createShape(t);
            case 5:
              return this.createText(t);
            case 6:
              return this.createAudio(t);
            case 13:
              return this.createCamera(t);
            case 15:
              return this.createFootage(t)
          }
        }, BaseRenderer.prototype.createCamera = function() {
          throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(t) {
          return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(t) {
          return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.buildItem(t);
          this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
          var e;
          this.completeLayers = !1;
          var r, n = t.length,
            i = this.layers.length;
          for (e = 0; e < n; e += 1)
            for (r = 0; r < i;) {
              if (this.layers[r].id === t[e].id) {
                this.layers[r] = t[e];
                break
              }
              r += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
          this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
          this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
          for (var n = this.elements, i = this.layers, s = 0, a = i.length; s < a;) i[s].ind == e && (n[s] && !0 !== n[s] ? (r.push(n[s]), n[s].setAsParent(), void 0 !== i[s].parent ? this.buildElementParenting(t, i[s].parent, r) : t.setHierarchy(r)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
          this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var n = this.createComp(t[e]);
              n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
            }
        }, BaseRenderer.prototype.getElementById = function(t) {
          var e, r = this.elements.length;
          for (e = 0; e < r; e += 1)
            if (this.elements[e].data.ind === t) return this.elements[e];
          return null
        }, BaseRenderer.prototype.getElementByPath = function(t) {
          var e, r = t.shift();
          if ("number" == typeof r) e = this.elements[r];
          else {
            var n, i = this.elements.length;
            for (n = 0; n < i; n += 1)
              if (this.elements[n].data.nm === r) {
                e = this.elements[n];
                break
              }
          }
          return 0 === t.length ? e : e.getElementByPath(t)
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
          this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
            w: t.w,
            h: t.h
          }
        }, TransformElement.prototype = {
          initTransform: function() {
            this.finalTransform = {
              mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                o: 0
              },
              _matMdf: !1,
              _opMdf: !1,
              mat: new Matrix
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
          },
          renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
              var t, e = this.finalTransform.mat,
                r = 0,
                n = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; r < n;) {
                  if (this.hierarchy[r].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break
                  }
                  r += 1
                }
              if (this.finalTransform._matMdf)
                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < n; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
            }
          },
          globalToLocal: function(t) {
            var e = [];
            e.push(this.finalTransform);
            for (var r, n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
            var s, a = e.length;
            for (r = 0; r < a; r += 1) s = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
            return t
          },
          mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function(t) {
          return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
          var e, r = this.element.finalTransform.mat,
            n = this.masksProperties.length;
          for (e = 0; e < n; e += 1)
            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
              var i = this.storedData[e].expan;
              this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), i.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var t = "M0,0 ";
          return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(t, e, r) {
          var n, i, s = " M" + e.v[0][0] + "," + e.v[0][1];
          for (i = e._length, n = 1; n < i; n += 1) s += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[n][0] + "," + e.i[n][1] + " " + e.v[n][0] + "," + e.v[n][1];
          if (e.c && i > 1 && (s += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== s) {
            var a = "";
            r.elem && (e.c && (a = t.inv ? this.solidPath + s : s), r.elem.setAttribute("d", a)), r.lastPath = s
          }
        }, MaskElement.prototype.destroy = function() {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = {
            createFilter: function(t, e) {
              var r = createNS("filter");
              return r.setAttribute("id", t), !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
            },
            createAlphaToLuminanceFilter: function() {
              var t = createNS("feColorMatrix");
              return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
            }
          },
          featureSupport = function() {
            var t = {
              maskType: !0,
              svgLumaHidden: !0,
              offscreenCanvas: "undefined" != typeof OffscreenCanvas
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
          }(),
          registeredEffects = {},
          idPrefix = "filter_result_";

        function SVGEffects(t) {
          var e, r, n = "SourceGraphic",
            i = t.data.ef ? t.data.ef.length : 0,
            s = createElementID(),
            a = filtersFactory.createFilter(s, !0),
            o = 0;
          for (this.filters = [], e = 0; e < i; e += 1) {
            r = null;
            var l = t.data.ef[e].ty;
            registeredEffects[l] && (r = new(0, registeredEffects[l].effect)(a, t.effectsManager.effectElements[e], t, idPrefix + o, n), n = idPrefix + o, registeredEffects[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
          }
          o && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect(t, e, r) {
          registeredEffects[t] = {
            effect: e,
            countsAsEffect: r
          }
        }

        function SVGBaseElement() {}

        function HierarchyElement() {}

        function RenderableDOMElement() {}

        function IImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          }
        }

        function ProcessedElement(t, e) {
          this.elem = t, this.pos = e
        }

        function IShapeElement() {}
        SVGEffects.prototype.renderFrame = function(t) {
          var e, r = this.filters.length;
          for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, SVGBaseElement.prototype = {
          initRendererElement: function() {
            this.layerElement = createNS("g")
          },
          createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
            var t = null;
            if (this.data.td) {
              this.matteMasks = {};
              var e = createNS("g");
              e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
              var r = createNS("clipPath"),
                n = createNS("path");
              n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var i = createElementID();
              if (r.setAttribute("id", i), r.appendChild(n), this.globalData.defs.appendChild(r), this.checkMasks()) {
                var s = createNS("g");
                s.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), s.appendChild(this.layerElement), this.transformedElement = s, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")")
            }
            0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
          },
          destroyBaseElement: function() {
            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
          },
          getBaseElement: function() {
            return this.data.hd ? null : this.baseElement
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
          },
          getMatte: function(t) {
            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
              var e, r, n, i, s = this.layerId + "_" + t;
              if (1 === t || 3 === t) {
                var a = createNS("mask");
                a.setAttribute("id", s), a.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), a.appendChild(n), this.globalData.defs.appendChild(a), featureSupport.maskType || 1 !== t || (a.setAttribute("mask-type", "luminance"), e = createElementID(), r = filtersFactory.createFilter(e), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(n), a.appendChild(i), i.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
              } else if (2 === t) {
                var o = createNS("mask");
                o.setAttribute("id", s), o.setAttribute("mask-type", "alpha");
                var l = createNS("g");
                o.appendChild(l), e = createElementID(), r = filtersFactory.createFilter(e);
                var h = createNS("feComponentTransfer");
                h.setAttribute("in", "SourceGraphic"), r.appendChild(h);
                var p = createNS("feFuncA");
                p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), h.appendChild(p), this.globalData.defs.appendChild(r);
                var u = createNS("rect");
                u.setAttribute("width", this.comp.data.w), u.setAttribute("height", this.comp.data.h), u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("fill", "#ffffff"), u.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), l.appendChild(u), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), l.appendChild(u), i.appendChild(this.layerElement), l.appendChild(i)), this.globalData.defs.appendChild(o)
              }
              this.matteMasks[t] = s
            }
            return this.matteMasks[t]
          },
          setMatte: function(t) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
          }
        }, HierarchyElement.prototype = {
          initHierarchy: function() {
            this.hierarchy = [], this._isParent = !1, this.checkParenting()
          },
          setHierarchy: function(t) {
            this.hierarchy = t
          },
          setAsParent: function() {
            this._isParent = !0
          },
          checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
          }
        }, extendPrototype([RenderableElement, createProxyFunction({
          initElement: function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
          },
          hide: function() {
            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
          },
          show: function() {
            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          renderInnerContent: function() {},
          prepareFrame: function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
          },
          destroy: function() {
            this.innerElem = null, this.destroyBaseElement()
          }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
          return this.sourceRect
        }, IShapeElement.prototype = {
          addShapeToModifiers: function(t) {
            var e, r = this.shapeModifiers.length;
            for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
          },
          isShapeInAnimatedModifiers: function(t) {
            for (var e = this.shapeModifiers.length; 0 < e;)
              if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
            return !1
          },
          renderModifiers: function() {
            if (this.shapeModifiers.length) {
              var t, e = this.shapes.length;
              for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
              for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
            }
          },
          searchProcessedElement: function(t) {
            for (var e = this.processedElements, r = 0, n = e.length; r < n;) {
              if (e[r].elem === t) return e[r].pos;
              r += 1
            }
            return 0
          },
          addProcessedElement: function(t, e) {
            for (var r = this.processedElements, n = r.length; n;)
              if (r[n -= 1].elem === t) return void(r[n].pos = e);
            r.push(new ProcessedElement(t, e))
          },
          prepareFrame: function(t) {
            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
          }
        };
        var lineCapEnum = {
            1: "butt",
            2: "round",
            3: "square"
          },
          lineJoinEnum = {
            1: "miter",
            2: "round",
            3: "bevel"
          };

        function SVGShapeData(t, e, r) {
          this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
          for (var n = 0, i = t.length; n < i;) {
            if (t[n].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break
            }
            n += 1
          }
        }

        function SVGStyleData(t, e) {
          this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(t, e, r, n) {
          var i;
          this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
          var s, a = e.length || 0;
          for (i = 0; i < a; i += 1) s = PropertyFactory.getProp(t, e[i].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[i] = {
            n: e[i].n,
            p: s
          };
          this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
        }

        function SVGNoStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r
        }

        function GradientProperty(t, e, r) {
          this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
          var n = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
          this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
        }

        function SVGGradientStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
          this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, r) {
          this.transform = {
            mProps: t,
            op: e,
            container: r
          }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function() {
          this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function(t) {
          if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
            var e = 0,
              r = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
          for (var r = 0, n = this.o.length / 2; r < n;) {
            if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
            r += 1
          }
          return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e;) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
              t += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0
        }, GradientProperty.prototype.getValue = function(t) {
          if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
            var e, r, n, i = 4 * this.data.p;
            for (e = 0; e < i; e += 1) r = e % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[e] * r), this.c[e] !== n && (this.c[e] = n, this._cmdf = !t);
            if (this.o.length)
              for (i = this.prop.v.length, e = 4 * this.data.p; e < i; e += 1) r = e % 2 == 0 ? 100 : 1, n = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== n && (this.o[e - 4 * this.data.p] = n, this._omdf = !t);
            this._mdf = !t
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
          this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
            k: 0
          }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
            k: 0
          }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
          var r = createElementID(),
            n = createNS(1 === e.t ? "linearGradient" : "radialGradient");
          n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
          var i, s, a, o = [];
          for (a = 4 * e.g.p, s = 0; s < a; s += 4) i = createNS("stop"), n.appendChild(i), o.push(i);
          t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = n, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r, n, i, s = createNS("mask"),
              a = createNS("path");
            s.appendChild(a);
            var o = createElementID(),
              l = createElementID();
            s.setAttribute("id", l);
            var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), i = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var p = this.stops;
            for (n = 4 * t.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), p.push(r);
            a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), this.of = h, this.ms = s, this.ost = p, this.maskId = l, e.msElem = a
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(t, e, r, n) {
            if (0 === e) return "";
            var i, s = t.o,
              a = t.i,
              o = t.v,
              l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
            for (i = 1; i < e; i += 1) l += " C" + n.applyToPointStringified(s[i - 1][0], s[i - 1][1]) + " " + n.applyToPointStringified(a[i][0], a[i][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]);
            return r && e && (l += " C" + n.applyToPointStringified(s[i - 1][0], s[i - 1][1]) + " " + n.applyToPointStringified(a[0][0], a[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
          },
          SVGElementsRenderer = function() {
            var t = new Matrix,
              e = new Matrix;

            function r(t, e, r) {
              (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function n() {}

            function i(r, n, i) {
              var s, a, o, l, h, p, u, c, f, d, m, g = n.styles.length,
                v = n.lvl;
              for (p = 0; p < g; p += 1) {
                if (l = n.sh._mdf || i, n.styles[p].lvl < v) {
                  for (c = e.reset(), d = v - n.styles[p].lvl, m = n.transformers.length - 1; !l && d > 0;) l = n.transformers[m].mProps._mdf || l, d -= 1, m -= 1;
                  if (l)
                    for (d = v - n.styles[p].lvl, m = n.transformers.length - 1; d > 0;) f = n.transformers[m].mProps.v.props, c.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), d -= 1, m -= 1
                } else c = t;
                if (a = (u = n.sh.paths)._length, l) {
                  for (o = "", s = 0; s < a; s += 1)(h = u.shapes[s]) && h._length && (o += buildShapeString(h, h._length, h.c, c));
                  n.caches[p] = o
                } else o = n.caches[p];
                n.styles[p].d += !0 === r.hd ? "" : o, n.styles[p]._mdf = l || n.styles[p]._mdf
              }
            }

            function s(t, e, r) {
              var n = e.style;
              (e.c._mdf || r) && n.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function a(t, e, r) {
              o(t, e, r), l(0, e, r)
            }

            function o(t, e, r) {
              var n, i, s, a, o, l = e.gf,
                h = e.g._hasOpacity,
                p = e.s.v,
                u = e.e.v;
              if (e.o._mdf || r) {
                var c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(c, e.o.v)
              }
              if (e.s._mdf || r) {
                var f = 1 === t.t ? "x1" : "cx",
                  d = "x1" === f ? "y1" : "cy";
                l.setAttribute(f, p[0]), l.setAttribute(d, p[1]), h && !e.g._collapsable && (e.of.setAttribute(f, p[0]), e.of.setAttribute(d, p[1]))
              }
              if (e.g._cmdf || r) {
                n = e.cst;
                var m = e.g.c;
                for (s = n.length, i = 0; i < s; i += 1)(a = n[i]).setAttribute("offset", m[4 * i] + "%"), a.setAttribute("stop-color", "rgb(" + m[4 * i + 1] + "," + m[4 * i + 2] + "," + m[4 * i + 3] + ")")
              }
              if (h && (e.g._omdf || r)) {
                var g = e.g.o;
                for (s = (n = e.g._collapsable ? e.cst : e.ost).length, i = 0; i < s; i += 1) a = n[i], e.g._collapsable || a.setAttribute("offset", g[2 * i] + "%"), a.setAttribute("stop-opacity", g[2 * i + 1])
              }
              if (1 === t.t)(e.e._mdf || r) && (l.setAttribute("x2", u[0]), l.setAttribute("y2", u[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", u[0]), e.of.setAttribute("y2", u[1])));
              else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - u[0], 2) + Math.pow(p[1] - u[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                o || (o = Math.sqrt(Math.pow(p[0] - u[0], 2) + Math.pow(p[1] - u[1], 2)));
                var v = Math.atan2(u[1] - p[1], u[0] - p[0]),
                  y = e.h.v;
                y >= 1 ? y = .99 : y <= -1 && (y = -.99);
                var b = o * y,
                  _ = Math.cos(v + e.a.v) * b + p[0],
                  x = Math.sin(v + e.a.v) * b + p[1];
                l.setAttribute("fx", _), l.setAttribute("fy", x), h && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", x))
              }
            }

            function l(t, e, r) {
              var n = e.style,
                i = e.d;
              i && (i._mdf || r) && i.dashStr && (n.pElem.setAttribute("stroke-dasharray", i.dashStr), n.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])), e.c && (e.c._mdf || r) && n.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (n.pElem.setAttribute("stroke-width", e.w.v), n.msElem && n.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
              createRenderFunction: function(t) {
                switch (t.ty) {
                  case "fl":
                    return s;
                  case "gf":
                    return o;
                  case "gs":
                    return a;
                  case "st":
                    return l;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return i;
                  case "tr":
                    return r;
                  case "no":
                    return n;
                  default:
                    return null
                }
              }
            }
          }();

        function SVGShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
        }

        function LetterProps(t, e, r, n, i, s) {
          this.o = t, this.sw = e, this.sc = r, this.fc = n, this.m = i, this.p = s, this._mdf = {
            o: !0,
            sw: !!e,
            sc: !!r,
            fc: !!n,
            m: !0,
            p: !0
          }
        }

        function TextProperty(t, e) {
          this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1
          }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
          var t, e, r, n, i = this.shapes.length,
            s = this.stylesList.length,
            a = [],
            o = !1;
          for (r = 0; r < s; r += 1) {
            for (n = this.stylesList[r], o = !1, a.length = 0, t = 0; t < i; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(n) && (a.push(e), o = e._isAnimated || o);
            a.length > 1 && o && this.setShapesAsAnimated(a)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
          var r, n = new SVGStyleData(t, e),
            i = n.pElem;
          return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, n) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, n) : "gf" === t.ty || "gs" === t.ty ? (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : "no" === t.ty && (r = new SVGNoStyleData(this, t, n)), "st" !== t.ty && "gs" !== t.ty || (i.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), i.setAttribute("fill-opacity", "0"), 1 === t.lj && i.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && i.setAttribute("fill-rule", "evenodd"), t.ln && i.setAttribute("id", t.ln), t.cl && i.setAttribute("class", t.cl), t.bm && (i.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(n), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
          var e = new ShapeGroupData;
          return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
          var r = TransformPropertyFactory.getTransformProperty(this, t, this),
            n = new SVGTransformData(r, r.o, e);
          return this.addToAnimatedContents(t, n), n
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
          var n = 4;
          "rc" === t.ty ? n = 5 : "el" === t.ty ? n = 6 : "sr" === t.ty && (n = 7);
          var i = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, n, this));
          return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
          for (var r = 0, n = this.animatedContents.length; r < n;) {
            if (this.animatedContents[r].element === e) return;
            r += 1
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t
          })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
          var e, r = t.styles,
            n = this.stylesList.length;
          for (e = 0; e < n; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, n, i, s, a) {
          var o, l, h, p, u, c, f = [].concat(s),
            d = t.length - 1,
            m = [],
            g = [];
          for (o = d; o >= 0; o -= 1) {
            if ((c = this.searchProcessedElement(t[o])) ? e[o] = r[c - 1] : t[o]._render = a, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], i), t[o]._render && e[o].style.pElem.parentNode !== n && n.appendChild(e[o].style.pElem), m.push(e[o].style);
            else if ("gr" === t[o].ty) {
              if (c)
                for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
              else e[o] = this.createGroupElement(t[o]);
              this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, i + 1, f, a), t[o]._render && e[o].gr.parentNode !== n && n.appendChild(e[o].gr)
            } else "tr" === t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], n)), p = e[o].transform, f.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], f, i)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (c ? (u = e[o]).closed = !1 : ((u = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = u, this.shapeModifiers.push(u)), g.push(u)) : "rp" === t[o].ty && (c ? (u = e[o]).closed = !0 : (u = ShapeModifiers.getModifier(t[o].ty), e[o] = u, u.init(this, t, o, e), this.shapeModifiers.push(u), a = !1), g.push(u));
            this.addProcessedElement(t[o], o + 1)
          }
          for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
          for (d = g.length, o = 0; o < d; o += 1) g[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
          var t;
          this.renderModifiers();
          var e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].reset();
          for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
          var t, e, r = this.animatedContents.length;
          for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function(t, e, r, n, i, s) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
          var a = !1;
          return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, a = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, a = !0), this.m !== i && (this.m = i, this._mdf.m = !0, a = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, a = !0), a
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t
        }, TextProperty.prototype.setCurrentData = function(t) {
          t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
          return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
          return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(t) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData,
              r = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var n;
              this.lock = !0, this._mdf = !1;
              var i = this.effectsSequence.length,
                s = t || this.data.d.k[this.keysIndex].s;
              for (n = 0; n < i; n += 1) s = r !== this.keysIndex ? this.effectsSequence[n](s, s.t) : this.effectsSequence[n](this.currentData, s.t);
              e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, n = t.length; r <= n - 1 && !(r === n - 1 || t[r + 1].t > e);) r += 1;
          return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
          for (var e, r, n = [], i = 0, s = t.length, a = !1; i < s;) e = t.charCodeAt(i), FontManager.isCombinedCharacter(e) ? n[n.length - 1] += t.charAt(i) : e >= 55296 && e <= 56319 ? (r = t.charCodeAt(i + 1)) >= 56320 && r <= 57343 ? (a || FontManager.isModifier(e, r) ? (n[n.length - 1] += t.substr(i, 2), a = !1) : n.push(t.substr(i, 2)), i += 1) : n.push(t.charAt(i)) : e > 56319 ? (r = t.charCodeAt(i + 1), FontManager.isZeroWidthJoiner(e, r) ? (a = !0, n[n.length - 1] += t.substr(i, 2), i += 1) : n.push(t.charAt(i))) : FontManager.isZeroWidthJoiner(e) ? (n[n.length - 1] += t.charAt(i), a = !0) : n.push(t.charAt(i)), i += 1;
          return n
        }, TextProperty.prototype.completeTextData = function(t) {
          t.__complete = !0;
          var e, r, n, i, s, a, o, l = this.elem.globalData.fontManager,
            h = this.data,
            p = [],
            u = 0,
            c = h.m.g,
            f = 0,
            d = 0,
            m = 0,
            g = [],
            v = 0,
            y = 0,
            b = l.getFontByName(t.f),
            _ = 0,
            x = getFontProperties(b);
          t.fWeight = x.weight, t.fStyle = x.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
          var E, S = t.tr / 1e3 * t.finalSize;
          if (t.sz)
            for (var P, w, C = !0, T = t.sz[0], A = t.sz[1]; C;) {
              P = 0, v = 0, r = (w = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
              var M = -1;
              for (e = 0; e < r; e += 1) E = w[e].charCodeAt(0), n = !1, " " === w[e] ? M = e : 13 !== E && 3 !== E || (v = 0, n = !0, P += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(w[e], b.fStyle, b.fFamily), _ = n ? 0 : o.w * t.finalSize / 100) : _ = l.measureText(w[e], t.f, t.finalSize), v + _ > T && " " !== w[e] ? (-1 === M ? r += 1 : e = M, P += t.finalLineHeight || 1.2 * t.finalSize, w.splice(e, M === e ? 1 : 0, "\r"), M = -1, v = 0) : (v += _, v += S);
              P += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && A < P ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = w, r = t.finalText.length, C = !1)
            }
          v = -S, _ = 0;
          var k, D = 0;
          for (e = 0; e < r; e += 1)
            if (n = !1, 13 === (E = (k = t.finalText[e]).charCodeAt(0)) || 3 === E ? (D = 0, g.push(v), y = v > y ? v : y, v = -2 * S, i = "", n = !0, m += 1) : i = k, l.chars ? (o = l.getCharData(k, b.fStyle, l.getFontByName(t.f).fFamily), _ = n ? 0 : o.w * t.finalSize / 100) : _ = l.measureText(i, t.f, t.finalSize), " " === k ? D += _ + S : (v += _ + S + D, D = 0), p.push({
                l: _,
                an: _,
                add: f,
                n,
                anIndexes: [],
                val: i,
                line: m,
                animatorJustifyOffset: 0
              }), 2 == c) {
              if (f += _, "" === i || " " === i || e === r - 1) {
                for ("" !== i && " " !== i || (f -= _); d <= e;) p[d].an = f, p[d].ind = u, p[d].extra = _, d += 1;
                u += 1, f = 0
              }
            } else if (3 == c) {
            if (f += _, "" === i || e === r - 1) {
              for ("" === i && (f -= _); d <= e;) p[d].an = f, p[d].ind = u, p[d].extra = _, d += 1;
              f = 0, u += 1
            }
          } else p[u].ind = u, p[u].extra = 0, u += 1;
          if (t.l = p, y = v > y ? v : y, g.push(v), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
          else switch (t.boxWidth = y, t.j) {
            case 1:
              t.justifyOffset = -t.boxWidth;
              break;
            case 2:
              t.justifyOffset = -t.boxWidth / 2;
              break;
            default:
              t.justifyOffset = 0
          }
          t.lineWidths = g;
          var I, F, O, R, L = h.a;
          a = L.length;
          var B = [];
          for (s = 0; s < a; s += 1) {
            for ((I = L[s]).a.sc && (t.strokeColorAnim = !0), I.a.sw && (t.strokeWidthAnim = !0), (I.a.fc || I.a.fh || I.a.fs || I.a.fb) && (t.fillColorAnim = !0), R = 0, O = I.s.b, e = 0; e < r; e += 1)(F = p[e]).anIndexes[s] = R, (1 == O && "" !== F.val || 2 == O && "" !== F.val && " " !== F.val || 3 == O && (F.n || " " == F.val || e == r - 1) || 4 == O && (F.n || e == r - 1)) && (1 === I.s.rn && B.push(R), R += 1);
            h.a[s].s.totalChars = R;
            var V, z = -1;
            if (1 === I.s.rn)
              for (e = 0; e < r; e += 1) z != (F = p[e]).anIndexes[s] && (z = F.anIndexes[s], V = B.splice(Math.floor(Math.random() * B.length), 1)[0]), F.anIndexes[s] = V
          }
          t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
          e = void 0 === e ? this.keysIndex : e;
          var r = this.copyData({}, this.data.d.k[e].s);
          r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
          var e = this.data.d.k[t].s;
          e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) {
          this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
          this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
          var t = Math.max,
            e = Math.min,
            r = Math.floor;

          function n(t, e) {
            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
              k: 0
            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
              v: 100
            }, this.o = PropertyFactory.getProp(t, e.o || {
              k: 0
            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
              k: 0
            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
              k: 0
            }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
              k: 100
            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
          }
          return n.prototype = {
            getMult: function(n) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var i = 0,
                s = 0,
                a = 1,
                o = 1;
              this.ne.v > 0 ? i = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? a = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
              var l = BezierFactory.getBezierEasing(i, s, a, o).get,
                h = 0,
                p = this.finalS,
                u = this.finalE,
                c = this.data.sh;
              if (2 === c) h = l(h = u === p ? n >= u ? 1 : 0 : t(0, e(.5 / (u - p) + (n - p) / (u - p), 1)));
              else if (3 === c) h = l(h = u === p ? n >= u ? 0 : 1 : 1 - t(0, e(.5 / (u - p) + (n - p) / (u - p), 1)));
              else if (4 === c) u === p ? h = 0 : (h = t(0, e(.5 / (u - p) + (n - p) / (u - p), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
              else if (5 === c) {
                if (u === p) h = 0;
                else {
                  var f = u - p,
                    d = -f / 2 + (n = e(t(0, n + .5 - p), u - p)),
                    m = f / 2;
                  h = Math.sqrt(1 - d * d / (m * m))
                }
                h = l(h)
              } else 6 === c ? (u === p ? h = 0 : (n = e(t(0, n + .5 - p), u - p), h = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (u - p))) / 2), h = l(h)) : (n >= r(p) && (h = t(0, e(n - p < 0 ? e(u, 1) - (p - n) : u - n, 1))), h = l(h));
              if (100 !== this.sm.v) {
                var g = .01 * this.sm.v;
                0 === g && (g = 1e-8);
                var v = .5 - .5 * g;
                h < v ? h = 0 : (h = (h - v) / g) > 1 && (h = 1)
              }
              return h * this.a.v
            },
            getValue: function(t) {
              this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                r = this.o.v / e,
                n = this.s.v / e + r,
                i = this.e.v / e + r;
              if (n > i) {
                var s = n;
                n = i, i = s
              }
              this.finalS = n, this.finalE = i
            }
          }, extendPrototype([DynamicPropertyContainer], n), {
            getTextSelectorProp: function(t, e, r) {
              return new n(t, e, r)
            }
          }
        }();

        function TextAnimatorDataProperty(t, e, r) {
          var n = {
              propType: !1
            },
            i = PropertyFactory.getProp,
            s = e.a;
          this.a = {
            r: s.r ? i(t, s.r, 0, degToRads, r) : n,
            rx: s.rx ? i(t, s.rx, 0, degToRads, r) : n,
            ry: s.ry ? i(t, s.ry, 0, degToRads, r) : n,
            sk: s.sk ? i(t, s.sk, 0, degToRads, r) : n,
            sa: s.sa ? i(t, s.sa, 0, degToRads, r) : n,
            s: s.s ? i(t, s.s, 1, .01, r) : n,
            a: s.a ? i(t, s.a, 1, 0, r) : n,
            o: s.o ? i(t, s.o, 0, .01, r) : n,
            p: s.p ? i(t, s.p, 1, 0, r) : n,
            sw: s.sw ? i(t, s.sw, 0, 0, r) : n,
            sc: s.sc ? i(t, s.sc, 1, 0, r) : n,
            fc: s.fc ? i(t, s.fc, 1, 0, r) : n,
            fh: s.fh ? i(t, s.fh, 0, 0, r) : n,
            fs: s.fs ? i(t, s.fs, 0, .01, r) : n,
            fb: s.fb ? i(t, s.fb, 0, .01, r) : n,
            t: s.t ? i(t, s.t, 0, 0, r) : n
          }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, r) {
          this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
          }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }

        function ITextElement() {}
        TextAnimatorProperty.prototype.searchProperties = function() {
          var t, e, r = this._textData.a.length,
            n = PropertyFactory.getProp;
          for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
          this._textData.p && "m" in this._textData.p ? (this._pathData = {
            a: n(this._elem, this._textData.p.a, 0, 0, this),
            f: n(this._elem, this._textData.p.f, 0, 0, this),
            l: n(this._elem, this._textData.p.l, 0, 0, this),
            r: n(this._elem, this._textData.p.r, 0, 0, this),
            p: n(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
          if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var r, n, i, s, a, o, l, h, p, u, c, f, d, m, g, v, y, b, _, x = this._moreOptions.alignment.v,
              E = this._animatorsData,
              S = this._textData,
              P = this.mHelper,
              w = this._renderType,
              C = this.renderedLetters.length,
              T = t.l;
            if (this._hasMaskedPath) {
              if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var A, M = _.v;
                for (this._pathData.r.v && (M = M.reverse()), a = {
                    tLength: 0,
                    segments: []
                  }, s = M._length - 1, v = 0, i = 0; i < s; i += 1) A = bez.buildBezierData(M.v[i], M.v[i + 1], [M.o[i][0] - M.v[i][0], M.o[i][1] - M.v[i][1]], [M.i[i + 1][0] - M.v[i + 1][0], M.i[i + 1][1] - M.v[i + 1][1]]), a.tLength += A.segmentLength, a.segments.push(A), v += A.segmentLength;
                i = s, _.v.c && (A = bez.buildBezierData(M.v[i], M.v[0], [M.o[i][0] - M.v[i][0], M.o[i][1] - M.v[i][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), a.tLength += A.segmentLength, a.segments.push(A), v += A.segmentLength), this._pathData.pi = a
              }
              if (a = this._pathData.pi, o = this._pathData.f.v, c = 0, u = 1, h = 0, p = !0, m = a.segments, o < 0 && _.v.c)
                for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), u = (d = m[c = m.length - 1].points).length - 1; o < 0;) o += d[u].partialLength, (u -= 1) < 0 && (u = (d = m[c -= 1].points).length - 1);
              f = (d = m[c].points)[u - 1], g = (l = d[u]).partialLength
            }
            s = T.length, r = 0, n = 0;
            var k, D, I, F, O, R = 1.2 * t.finalSize * .714,
              L = !0;
            I = E.length;
            var B, V, z, j, N, G, $, H, W, q, Y, X, U = -1,
              Z = o,
              K = c,
              J = u,
              Q = -1,
              tt = "",
              et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
              var rt = 0,
                nt = 0,
                it = 2 === t.j ? -.5 : -1,
                st = 0,
                at = !0;
              for (i = 0; i < s; i += 1)
                if (T[i].n) {
                  for (rt && (rt += nt); st < i;) T[st].animatorJustifyOffset = rt, st += 1;
                  rt = 0, at = !0
                } else {
                  for (D = 0; D < I; D += 1)(k = E[D].a).t.propType && (at && 2 === t.j && (nt += k.t.v * it), (O = E[D].s.getMult(T[i].anIndexes[D], S.a[D].s.totalChars)).length ? rt += k.t.v * O[0] * it : rt += k.t.v * O * it);
                  at = !1
                } for (rt && (rt += nt); st < i;) T[st].animatorJustifyOffset = rt, st += 1
            }
            for (i = 0; i < s; i += 1) {
              if (P.reset(), j = 1, T[i].n) r = 0, n += t.yOffset, n += L ? 1 : 0, o = Z, L = !1, this._hasMaskedPath && (u = J, f = (d = m[c = K].points)[u - 1], g = (l = d[u]).partialLength, h = 0), tt = "", Y = "", W = "", X = "", et = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== T[i].line) {
                    switch (t.j) {
                      case 1:
                        o += v - t.lineWidths[T[i].line];
                        break;
                      case 2:
                        o += (v - t.lineWidths[T[i].line]) / 2
                    }
                    Q = T[i].line
                  }
                  U !== T[i].ind && (T[U] && (o += T[U].extra), o += T[i].an / 2, U = T[i].ind), o += x[0] * T[i].an * .005;
                  var ot = 0;
                  for (D = 0; D < I; D += 1)(k = E[D].a).p.propType && ((O = E[D].s.getMult(T[i].anIndexes[D], S.a[D].s.totalChars)).length ? ot += k.p.v[0] * O[0] : ot += k.p.v[0] * O), k.a.propType && ((O = E[D].s.getMult(T[i].anIndexes[D], S.a[D].s.totalChars)).length ? ot += k.a.v[0] * O[0] : ot += k.a.v[0] * O);
                  for (p = !0, this._pathData.a.v && (o = .5 * T[0].an + (v - this._pathData.f.v - .5 * T[0].an - .5 * T[T.length - 1].an) * U / (s - 1), o += this._pathData.f.v); p;) h + g >= o + ot || !d ? (y = (o + ot - h) / l.partialLength, V = f.point[0] + (l.point[0] - f.point[0]) * y, z = f.point[1] + (l.point[1] - f.point[1]) * y, P.translate(-x[0] * T[i].an * .005, -x[1] * R * .01), p = !1) : d && (h += l.partialLength, (u += 1) >= d.length && (u = 0, m[c += 1] ? d = m[c].points : _.v.c ? (u = 0, d = m[c = 0].points) : (h -= l.partialLength, d = null)), d && (f = l, g = (l = d[u]).partialLength));
                  B = T[i].an / 2 - T[i].add, P.translate(-B, 0, 0)
                } else B = T[i].an / 2 - T[i].add, P.translate(-B, 0, 0), P.translate(-x[0] * T[i].an * .005, -x[1] * R * .01, 0);
                for (D = 0; D < I; D += 1)(k = E[D].a).t.propType && (O = E[D].s.getMult(T[i].anIndexes[D], S.a[D].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? O.length ? o += k.t.v * O[0] : o += k.t.v * O : O.length ? r += k.t.v * O[0] : r += k.t.v * O));
                for (t.strokeWidthAnim && (G = t.sw || 0), t.strokeColorAnim && (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && ($ = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < I; D += 1)(k = E[D].a).a.propType && ((O = E[D].s.getMult(T[i].anIndexes[D], S.a[D].s.totalChars)).length ? P.translate(-k.a.v[0] * O[0], -k.a.v[1] * O[1], k.a.v[2] * O[2]) : P.translate(-k.a.v[0] * O, -k.a.v[1] * O, k.a.v[2] * O));
                for (D = 0; D < I; D += 1)(k = E[D].a).s.propType && ((O = E[D].s.getMult(T[i].anIndexes[D], S.a[D].s.totalChars)).length ? P.scale(1 + (k.s.v[0] - 1) * O[0], 1 + (k.s.v[1] - 1) * O[1], 1) : P.scale(1 + (k.s.v[0] - 1) * O, 1 + (k.s.v[1] - 1) * O, 1));
                for (D = 0; D < I; D += 1) {
                  if (k = E[D].a, O = E[D].s.getMult(T[i].anIndexes[D], S.a[D].s.totalChars), k.sk.propType && (O.length ? P.skewFromAxis(-k.sk.v * O[0], k.sa.v * O[1]) : P.skewFromAxis(-k.sk.v * O, k.sa.v * O)), k.r.propType && (O.length ? P.rotateZ(-k.r.v * O[2]) : P.rotateZ(-k.r.v * O)), k.ry.propType && (O.length ? P.rotateY(k.ry.v * O[1]) : P.rotateY(k.ry.v * O)), k.rx.propType && (O.length ? P.rotateX(k.rx.v * O[0]) : P.rotateX(k.rx.v * O)), k.o.propType && (O.length ? j += (k.o.v * O[0] - j) * O[0] : j += (k.o.v * O - j) * O), t.strokeWidthAnim && k.sw.propType && (O.length ? G += k.sw.v * O[0] : G += k.sw.v * O), t.strokeColorAnim && k.sc.propType)
                    for (H = 0; H < 3; H += 1) O.length ? N[H] += (k.sc.v[H] - N[H]) * O[0] : N[H] += (k.sc.v[H] - N[H]) * O;
                  if (t.fillColorAnim && t.fc) {
                    if (k.fc.propType)
                      for (H = 0; H < 3; H += 1) O.length ? $[H] += (k.fc.v[H] - $[H]) * O[0] : $[H] += (k.fc.v[H] - $[H]) * O;
                    k.fh.propType && ($ = O.length ? addHueToRGB($, k.fh.v * O[0]) : addHueToRGB($, k.fh.v * O)), k.fs.propType && ($ = O.length ? addSaturationToRGB($, k.fs.v * O[0]) : addSaturationToRGB($, k.fs.v * O)), k.fb.propType && ($ = O.length ? addBrightnessToRGB($, k.fb.v * O[0]) : addBrightnessToRGB($, k.fb.v * O))
                  }
                }
                for (D = 0; D < I; D += 1)(k = E[D].a).p.propType && (O = E[D].s.getMult(T[i].anIndexes[D], S.a[D].s.totalChars), this._hasMaskedPath ? O.length ? P.translate(0, k.p.v[1] * O[0], -k.p.v[2] * O[1]) : P.translate(0, k.p.v[1] * O, -k.p.v[2] * O) : O.length ? P.translate(k.p.v[0] * O[0], k.p.v[1] * O[1], -k.p.v[2] * O[2]) : P.translate(k.p.v[0] * O, k.p.v[1] * O, -k.p.v[2] * O));
                if (t.strokeWidthAnim && (W = G < 0 ? 0 : G), t.strokeColorAnim && (q = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * $[0]) + "," + Math.round(255 * $[1]) + "," + Math.round(255 * $[2]) + ")"), this._hasMaskedPath) {
                  if (P.translate(0, -t.ls), P.translate(0, x[1] * R * .01 + n, 0), this._pathData.p.v) {
                    b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                    var lt = 180 * Math.atan(b) / Math.PI;
                    l.point[0] < f.point[0] && (lt += 180), P.rotate(-lt * Math.PI / 180)
                  }
                  P.translate(V, z, 0), o -= x[0] * T[i].an * .005, T[i + 1] && U !== T[i + 1].ind && (o += T[i].an / 2, o += .001 * t.tr * t.finalSize)
                } else {
                  switch (P.translate(r, n, 0), t.ps && P.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      P.translate(T[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[i].line]), 0, 0);
                      break;
                    case 2:
                      P.translate(T[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[i].line]) / 2, 0, 0)
                  }
                  P.translate(0, -t.ls), P.translate(B, 0, 0), P.translate(x[0] * T[i].an * .005, x[1] * R * .01, 0), r += T[i].l + .001 * t.tr * t.finalSize
                }
                "html" === w ? tt = P.toCSS() : "svg" === w ? tt = P.to2dCSS() : et = [P.props[0], P.props[1], P.props[2], P.props[3], P.props[4], P.props[5], P.props[6], P.props[7], P.props[8], P.props[9], P.props[10], P.props[11], P.props[12], P.props[13], P.props[14], P.props[15]], X = j
              }
              C <= i ? (F = new LetterProps(X, W, q, Y, tt, et), this.renderedLetters.push(F), C += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[i], this.lettersChangedFlag = F.update(X, W, q, Y, tt, et) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, r) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
          this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        }, ITextElement.prototype.createPathShape = function(t, e) {
          var r, n, i = e.length,
            s = "";
          for (r = 0; r < i; r += 1) "sh" === e[r].ty && (n = e[r].ks.k, s += buildShapeString(n, n.i.length, !0, t));
          return s
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
          this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
          this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
          this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, n, i) {
          switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
              break;
            case 2:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
          }
          e.translate(n, i, 0)
        }, ITextElement.prototype.buildColor = function(t) {
          return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {};
        var emptyShapeData = {
          shapes: []
        };

        function SVGTextLottieElement(t, e, r) {
          this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
        }

        function ISolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function NullElement(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
        }

        function SVGRendererBase() {}

        function ICompElement() {}

        function SVGCompElement(t, e, r) {
          this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function SVGRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
          var r = "";
          if (e && e.title) {
            var n = createNS("title"),
              i = createElementID();
            n.setAttribute("id", i), n.textContent = e.title, this.svgElement.appendChild(n), r += i
          }
          if (e && e.description) {
            var s = createNS("desc"),
              a = createElementID();
            s.setAttribute("id", a), s.textContent = e.description, this.svgElement.appendChild(s), r += " " + a
          }
          r && this.svgElement.setAttribute("aria-labelledby", r);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var l = createNS("g");
          this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            progressiveLoad: e && e.progressiveLoad || !1,
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            viewBoxOnly: e && e.viewBoxOnly || !1,
            viewBoxSize: e && e.viewBoxSize || !1,
            className: e && e.className || "",
            id: e && e.id || "",
            focusable: e && e.focusable,
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "100%",
              height: e && e.filterSize && e.filterSize.height || "100%",
              x: e && e.filterSize && e.filterSize.x || "0%",
              y: e && e.filterSize && e.filterSize.y || "0%"
            },
            width: e && e.width,
            height: e && e.height,
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig
          }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function CVContextData() {
          var t;
          for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
          this._length = 15
        }

        function ShapeTransformManager() {
          this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
          this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
          for (var e = 0, r = t.length, n = [], i = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (n.push(i), i = "") : i += t[e], e += 1;
          return n.push(i), n
        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
          if (t.shapes && t.shapes.length) {
            var r = t.shapes[0];
            if (r.it) {
              var n = r.it[r.it.length - 1];
              n.s && (n.s.k[0] = e, n.s.k[1] = e)
            }
          }
          return t
        }, SVGTextLottieElement.prototype.buildNewText = function() {
          var t, e;
          this.addDynamicProperty(this);
          var r = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
          var n = this.globalData.fontManager.getFontByName(r.f);
          if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
          else {
            this.layerElement.setAttribute("font-family", n.fFamily);
            var i = r.fWeight,
              s = r.fStyle;
            this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", i)
          }
          this.layerElement.setAttribute("aria-label", r.t);
          var a, o = r.l || [],
            l = !!this.globalData.fontManager.chars;
          e = o.length;
          var h = this.mHelper,
            p = this.data.singleShape,
            u = 0,
            c = 0,
            f = !0,
            d = .001 * r.tr * r.finalSize;
          if (!p || l || r.sz) {
            var m, g = this.textSpans.length;
            for (t = 0; t < e; t += 1) {
              if (this.textSpans[t] || (this.textSpans[t] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !l || !p || 0 === t) {
                if (a = g > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), g <= t) {
                  if (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = a, l) {
                    var v = createNS("g");
                    a.appendChild(v), this.textSpans[t].childSpan = v
                  }
                  this.textSpans[t].span = a, this.layerElement.appendChild(a)
                }
                a.style.display = "inherit"
              }
              if (h.reset(), p && (o[t].n && (u = -d, c += r.yOffset, c += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(r, h, o[t].line, u, c), u += o[t].l || 0, u += d), l) {
                var y;
                if (1 === (m = this.globalData.fontManager.getCharData(r.finalText[t], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) y = new SVGCompElement(m.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  m.data && m.data.shapes && (b = this.buildShapeData(m.data, r.finalSize)), y = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[t].glyph) {
                  var _ = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(_.layerElement), _.destroy()
                }
                this.textSpans[t].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[t].childSpan.appendChild(y.layerElement), 1 === m.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
              } else p && a.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            p && a && a.setAttribute("d", "")
          } else {
            var x = this.textContainer,
              E = "start";
            switch (r.j) {
              case 1:
                E = "end";
                break;
              case 2:
                E = "middle";
                break;
              default:
                E = "start"
            }
            x.setAttribute("text-anchor", E), x.setAttribute("letter-spacing", d);
            var S = this.buildTextContents(r.finalText);
            for (e = S.length, c = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(a = this.textSpans[t].span || createNS("tspan")).textContent = S[t], a.setAttribute("x", 0), a.setAttribute("y", c), a.style.display = "inherit", x.appendChild(a), this.textSpans[t] || (this.textSpans[t] = {
              span: null,
              glyph: null
            }), this.textSpans[t].span = a, c += r.finalLineHeight;
            this.layerElement.appendChild(x)
          }
          for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
          this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
          if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1;
            var t = this.layerElement.getBBox();
            this.bbox = {
              top: t.y,
              left: t.x,
              width: t.width,
              height: t.height
            }
          }
          return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
          var t, e, r = this.textSpans.length;
          for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < r; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
          if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var t, e;
            this._sizeChanged = !0;
            var r, n, i, s = this.textAnimator.renderedLetters,
              a = this.textProperty.currentData.l;
            for (e = a.length, t = 0; t < e; t += 1) a[t].n || (r = s[t], n = this.textSpans[t].span, (i = this.textSpans[t].glyph) && i.renderFrame(), r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
          }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
          var t = createNS("rect");
          t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, NullElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
          return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
          return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(t) {
          return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(t) {
          return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(t) {
          return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(t) {
          return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(t) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
          var e = this.globalData.defs;
          this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
          var r = createNS("clipPath"),
            n = createNS("rect");
          n.setAttribute("width", t.w), n.setAttribute("height", t.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
          var i = createElementID();
          r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
          var e = 0,
            r = this.layers.length;
          for (e = 0; e < r; e += 1)
            if (this.layers[e].ind === t) return e;
          return -1
        }, SVGRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            e[t] = !0;
            var r = this.createItem(this.layers[t]);
            if (e[t] = r, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
              var n = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
              if (-1 === n) return;
              if (this.elements[n] && !0 !== this.elements[n]) {
                var i = e[n].getMatte(this.layers[t].tt);
                r.setMatte(i)
              } else this.buildItem(n), this.addPendingElement(r)
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
              for (var e = 0, r = this.elements.length; e < r;) {
                if (this.elements[e] === t) {
                  var n = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                    i = this.elements[n].getMatte(this.layers[e].tt);
                  t.setMatte(i);
                  break
                }
                e += 1
              }
          }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            var e;
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
            var r = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
          }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
          var r = t.getBaseElement();
          if (r) {
            for (var n, i = 0; i < e;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
            n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
          }
        }, SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
          if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
            else {
              var e = this.tm.v;
              e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            }
            var r, n = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
          }
        }, ICompElement.prototype.renderInnerContent = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function(t) {
          this.elements = t
        }, ICompElement.prototype.getElements = function() {
          return this.elements
        }, ICompElement.prototype.destroyElements = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function() {
          this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, CVContextData.prototype.duplicate = function() {
          var t = 2 * this._length,
            e = this.savedOp;
          this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
          var r = 0;
          for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
          this._length = t
        }, CVContextData.prototype.reset = function() {
          this.cArrPos = 0, this.cTr.reset(), this.cO = 1
        }, CVContextData.prototype.popTransform = function() {
          var t, e = this.saved[this.cArrPos],
            r = this.cTr.props;
          for (t = 0; t < 16; t += 1) r[t] = e[t];
          return e
        }, CVContextData.prototype.popOpacity = function() {
          var t = this.savedOp[this.cArrPos];
          return this.cO = t, t
        }, CVContextData.prototype.pop = function() {
          return this.cArrPos -= 1, {
            transform: this.popTransform(),
            opacity: this.popOpacity()
          }
        }, CVContextData.prototype.push = function() {
          var t, e = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var r = this.saved[this.cArrPos];
          for (t = 0; t < 16; t += 1) r[t] = e[t];
          this.savedOp[this.cArrPos] = this.cO, this.cArrPos += 1
        }, CVContextData.prototype.getTransform = function() {
          return this.cTr
        }, CVContextData.prototype.getOpacity = function() {
          return this.cO
        }, CVContextData.prototype.setOpacity = function(t) {
          this.cO = t
        }, ShapeTransformManager.prototype = {
          addTransformSequence: function(t) {
            var e, r = t.length,
              n = "_";
            for (e = 0; e < r; e += 1) n += t[e].transform.key + "_";
            var i = this.sequences[n];
            return i || (i = {
              transforms: [].concat(t),
              finalTransform: new Matrix,
              _mdf: !1
            }, this.sequences[n] = i, this.sequenceList.push(i)), i
          },
          processSequence: function(t, e) {
            for (var r, n = 0, i = t.transforms.length, s = e; n < i && !e;) {
              if (t.transforms[n].transform.mProps._mdf) {
                s = !0;
                break
              }
              n += 1
            }
            if (s)
              for (t.finalTransform.reset(), n = i - 1; n >= 0; n -= 1) r = t.transforms[n].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
            t._mdf = s
          },
          processSequences: function(t) {
            var e, r = this.sequenceList.length;
            for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
          },
          getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count
          }
        };
        var lumaLoader = function() {
          var t = "__lottie_element_luma_buffer",
            e = null,
            r = null,
            n = null;

          function i() {
            var i, s, a;
            e || (i = createNS("svg"), s = createNS("filter"), a = createNS("feColorMatrix"), s.setAttribute("id", t), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), s.appendChild(a), i.appendChild(s), i.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (i.style.display = "none"), n = i, document.body.appendChild(n), e = createTag("canvas"), (r = e.getContext("2d")).filter = "url(#" + t + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
          }
          return {
            load: i,
            get: function(n) {
              return e || i(), e.width = n.width, e.height = n.height, r.filter = "url(#" + t + ")", e
            }
          }
        };

        function createCanvas(t, e) {
          if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
          var r = createTag("canvas");
          return r.width = t, r.height = e, r
        }
        var assetLoader = {
          loadLumaCanvas: lumaLoader.load,
          getLumaCanvas: lumaLoader.get,
          createCanvas
        };

        function CVEffects() {}

        function CVMaskElement(t, e) {
          var r;
          this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
          var n = this.masksProperties.length,
            i = !1;
          for (r = 0; r < n; r += 1) "n" !== this.masksProperties[r].mode && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
          this.hasMasks = i, i && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {}
        CVEffects.prototype.renderFrame = function() {}, CVMaskElement.prototype.renderFrame = function() {
          if (this.hasMasks) {
            var t, e, r, n, i = this.element.finalTransform.mat,
              s = this.element.canvasContext,
              a = this.masksProperties.length;
            for (s.beginPath(), t = 0; t < a; t += 1)
              if ("n" !== this.masksProperties[t].mode) {
                var o;
                this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), n = this.viewData[t].v, e = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), s.moveTo(e[0], e[1]);
                var l = n._length;
                for (o = 1; o < l; o += 1) r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
              } this.element.globalData.renderer.save(!0), s.clip()
          }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
          this.element = null
        };
        var operationsMap = {
          1: "source-in",
          2: "source-out",
          3: "source-in",
          4: "source-out"
        };

        function CVShapeData(t, e, r, n) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
          var i, s = 4;
          "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
          var a, o = r.length;
          for (i = 0; i < o; i += 1) r[i].closed || (a = {
            transforms: n.addTransformSequence(r[i].transforms),
            trNodes: []
          }, this.styledShapes.push(a), r[i].elements.push(a))
        }

        function CVShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
        }

        function CVTextElement(t, e, r) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
          }, this.initElement(t, e, r)
        }

        function CVImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
        }

        function CVSolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function CanvasRendererBase(t, e) {
          this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            className: e && e.className || "",
            id: e && e.id || ""
          }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
        }

        function CVCompElement(t, e, r) {
          this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function CanvasRenderer(t, e) {
          this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            className: e && e.className || "",
            id: e && e.id || "",
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
        }

        function HBaseElement() {}

        function HSolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function HShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }
        }

        function HTextElement(t, e, r) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
        }

        function HCameraElement(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
          var n = PropertyFactory.getProp;
          if (this.pe = n(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = n(this, t.ks.p.x, 1, 0, this), this.py = n(this, t.ks.p.y, 1, 0, this), this.pz = n(this, t.ks.p.z, 1, 0, this)) : this.p = n(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = n(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
            var i, s = t.ks.or.k.length;
            for (i = 0; i < s; i += 1) t.ks.or.k[i].to = null, t.ks.or.k[i].ti = null
          }
          this.or = n(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, t.ks.rx, 0, degToRads, this), this.ry = n(this, t.ks.ry, 0, degToRads, this), this.rz = n(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
          }
        }

        function HImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
        }

        function HybridRendererBase(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            }
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function HCompElement(t, e, r) {
          this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function HybridRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            },
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        CVBaseElement.prototype = {
          createElements: function() {},
          initRendererElement: function() {},
          createContainerElements: function() {
            if (this.data.tt >= 1) {
              this.buffers = [];
              var t = this.globalData.canvasContext,
                e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(e);
              var r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
            }
            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this)
          },
          createContent: function() {},
          setBlendMode: function() {
            var t = this.globalData;
            if (t.blendMode !== this.data.bm) {
              t.blendMode = this.data.bm;
              var e = getBlendMode(this.data.bm);
              t.canvasContext.globalCompositeOperation = e
            }
          },
          createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data, this)
          },
          hideElement: function() {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
          },
          showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
          },
          clearCanvas: function(t) {
            t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
          },
          prepareLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[0].getContext("2d");
              this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
            }
          },
          exitLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[1],
                e = t.getContext("2d");
              if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
            }
          },
          renderFrame: function(t) {
            if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
              this.renderTransform(), this.renderRenderable(), this.setBlendMode();
              var e = 0 === this.data.ty;
              this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
            }
          },
          destroy: function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
          },
          mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
          opacity: 1,
          _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
          var r = {
              data: t,
              type: t.ty,
              preTransforms: this.transformsManager.addTransformSequence(e),
              transforms: [],
              elements: [],
              closed: !0 === t.hd
            },
            n = {};
          if ("fl" === t.ty || "st" === t.ty ? (n.c = PropertyFactory.getProp(this, t.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (n.s = PropertyFactory.getProp(this, t.s, 1, null, this), n.e = PropertyFactory.getProp(this, t.e, 1, null, this), n.h = PropertyFactory.getProp(this, t.h || {
              k: 0
            }, 0, .01, this), n.a = PropertyFactory.getProp(this, t.a || {
              k: 0
            }, 0, degToRads, this), n.g = new GradientProperty(this, t.g, this)), n.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
            if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), n.w = PropertyFactory.getProp(this, t.w, 0, null, this), n.w.k || (r.wi = n.w.v), t.d) {
              var i = new DashProperty(this, t.d, "canvas", this);
              n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
            }
          } else r.r = 2 === t.r ? "evenodd" : "nonzero";
          return this.stylesList.push(r), n.style = r, n
        }, CVShapeElement.prototype.createGroupElement = function() {
          return {
            it: [],
            prevViewData: []
          }
        }, CVShapeElement.prototype.createTransformElement = function(t) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, t.o, 0, .01, this),
              mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
            }
          }
        }, CVShapeElement.prototype.createShapeElement = function(t) {
          var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
          return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
          var e, r = this.stylesList.length;
          for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
          var t, e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(t, e, r, n, i) {
          var s, a, o, l, h, p, u = t.length - 1,
            c = [],
            f = [],
            d = [].concat(i);
          for (s = u; s >= 0; s -= 1) {
            if ((l = this.searchProcessedElement(t[s])) ? e[s] = r[l - 1] : t[s]._shouldRender = n, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) l ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], d), c.push(e[s].style);
            else if ("gr" === t[s].ty) {
              if (l)
                for (o = e[s].it.length, a = 0; a < o; a += 1) e[s].prevViewData[a] = e[s].it[a];
              else e[s] = this.createGroupElement(t[s]);
              this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, n, d)
            } else "tr" === t[s].ty ? (l || (p = this.createTransformElement(t[s]), e[s] = p), d.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? l || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty || "zz" === t[s].ty || "op" === t[s].ty ? (l ? (h = e[s]).closed = !1 : ((h = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = h, this.shapeModifiers.push(h)), f.push(h)) : "rp" === t[s].ty && (l ? (h = e[s]).closed = !0 : (h = ShapeModifiers.getModifier(t[s].ty), e[s] = h, h.init(this, t, s, e), this.shapeModifiers.push(h), n = !1), f.push(h));
            this.addProcessedElement(t[s], s + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(c), u = f.length, s = 0; s < u; s += 1) f[s].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var t, e, r, n, i, s, a, o, l, h = this.stylesList.length,
            p = this.globalData.renderer,
            u = this.globalData.canvasContext;
          for (t = 0; t < h; t += 1)
            if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (p.save(), s = l.elements, "st" === o || "gs" === o ? (u.strokeStyle = "st" === o ? l.co : l.grd, u.lineWidth = l.wi, u.lineCap = l.lc, u.lineJoin = l.lj, u.miterLimit = l.ml || 0) : u.fillStyle = "fl" === o ? l.co : l.grd, p.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && u.beginPath(), p.ctxTransform(l.preTransforms.finalTransform.props), r = s.length, e = 0; e < r; e += 1) {
                for ("st" !== o && "gs" !== o || (u.beginPath(), l.da && (u.setLineDash(l.da), u.lineDashOffset = l.do)), i = (a = s[e].trNodes).length, n = 0; n < i; n += 1) "m" === a[n].t ? u.moveTo(a[n].p[0], a[n].p[1]) : "c" === a[n].t ? u.bezierCurveTo(a[n].pts[0], a[n].pts[1], a[n].pts[2], a[n].pts[3], a[n].pts[4], a[n].pts[5]) : u.closePath();
                "st" !== o && "gs" !== o || (u.stroke(), l.da && u.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && u.fill(l.r), p.restore()
            }
        }, CVShapeElement.prototype.renderShape = function(t, e, r, n) {
          var i, s;
          for (s = t, i = e.length - 1; i >= 0; i -= 1) "tr" === e[i].ty ? (s = r[i].transform, this.renderShapeTransform(t, s)) : "sh" === e[i].ty || "el" === e[i].ty || "rc" === e[i].ty || "sr" === e[i].ty ? this.renderPath(e[i], r[i]) : "fl" === e[i].ty ? this.renderFill(e[i], r[i], s) : "st" === e[i].ty ? this.renderStroke(e[i], r[i], s) : "gf" === e[i].ty || "gs" === e[i].ty ? this.renderGradientFill(e[i], r[i], s) : "gr" === e[i].ty ? this.renderShape(s, e[i].it, r[i].it) : e[i].ty;
          n && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var r, n, i, s = t.trNodes,
              a = e.paths,
              o = a._length;
            s.length = 0;
            var l = t.transforms.finalTransform;
            for (i = 0; i < o; i += 1) {
              var h = a.shapes[i];
              if (h && h.v) {
                for (n = h._length, r = 1; r < n; r += 1) 1 === r && s.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), s.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r])
                });
                1 === n && s.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), h.c && n && (s.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0])
                }), s.push({
                  t: "z"
                }))
              }
            }
            t.trNodes = s
          }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
          if (!0 !== t.hd && t._shouldRender) {
            var r, n = e.styledShapes.length;
            for (r = 0; r < n; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
          }
        }, CVShapeElement.prototype.renderFill = function(t, e, r) {
          var n = e.style;
          (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
          var n, i = e.style;
          if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
            var s, a = this.globalData.canvasContext,
              o = e.s.v,
              l = e.e.v;
            if (1 === t.t) n = a.createLinearGradient(o[0], o[1], l[0], l[1]);
            else {
              var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                p = Math.atan2(l[1] - o[1], l[0] - o[0]),
                u = e.h.v;
              u >= 1 ? u = .99 : u <= -1 && (u = -.99);
              var c = h * u,
                f = Math.cos(p + e.a.v) * c + o[0],
                d = Math.sin(p + e.a.v) * c + o[1];
              n = a.createRadialGradient(f, d, 0, o[0], o[1], h)
            }
            var m = t.g.p,
              g = e.g.c,
              v = 1;
            for (s = 0; s < m; s += 1) e.g._hasOpacity && e.g._collapsable && (v = e.g.o[2 * s + 1]), n.addColorStop(g[4 * s] / 100, "rgba(" + g[4 * s + 1] + "," + g[4 * s + 2] + "," + g[4 * s + 3] + "," + v + ")");
            i.grd = n
          }
          i.coOp = e.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
          var n = e.style,
            i = e.d;
          i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (n.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = !1;
          t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
          var r = !1;
          t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
          var n, i, s, a, o, l, h, p, u, c, f, d, m = this.globalData.fontManager.getFontByName(t.f),
            g = t.l,
            v = this.mHelper;
          this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, i = t.finalText.length;
          var y = this.data.singleShape,
            b = .001 * t.tr * t.finalSize,
            _ = 0,
            x = 0,
            E = !0,
            S = 0;
          for (n = 0; n < i; n += 1) {
            a = (s = this.globalData.fontManager.getCharData(t.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {}, v.reset(), y && g[n].n && (_ = -b, x += t.yOffset, x += E ? 1 : 0, E = !1), u = (h = a.shapes ? a.shapes[0].it : []).length, v.scale(t.finalSize / 100, t.finalSize / 100), y && this.applyTextPropertiesToMatrix(t, v, g[n].line, _, x), f = createSizedArray(u - 1);
            var P = 0;
            for (p = 0; p < u; p += 1)
              if ("sh" === h[p].ty) {
                for (l = h[p].ks.k.i.length, c = h[p].ks.k, d = [], o = 1; o < l; o += 1) 1 === o && d.push(v.applyToX(c.v[0][0], c.v[0][1], 0), v.applyToY(c.v[0][0], c.v[0][1], 0)), d.push(v.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), v.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), v.applyToX(c.i[o][0], c.i[o][1], 0), v.applyToY(c.i[o][0], c.i[o][1], 0), v.applyToX(c.v[o][0], c.v[o][1], 0), v.applyToY(c.v[o][0], c.v[o][1], 0));
                d.push(v.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), v.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), v.applyToX(c.i[0][0], c.i[0][1], 0), v.applyToY(c.i[0][0], c.i[0][1], 0), v.applyToX(c.v[0][0], c.v[0][1], 0), v.applyToY(c.v[0][0], c.v[0][1], 0)), f[P] = d, P += 1
              } y && (_ += g[n].l, _ += b), this.textSpans[S] ? this.textSpans[S].elem = f : this.textSpans[S] = {
              elem: f
            }, S += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var t, e, r, n, i, s, a = this.canvasContext;
          a.font = this.values.fValue, a.lineCap = "butt", a.lineJoin = "miter", a.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var o, l = this.textAnimator.renderedLetters,
            h = this.textProperty.currentData.l;
          e = h.length;
          var p, u, c = null,
            f = null,
            d = null;
          for (t = 0; t < e; t += 1)
            if (!h[t].n) {
              if ((o = l[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                for (o && o.fc ? c !== o.fc && (c = o.fc, a.fillStyle = o.fc) : c !== this.values.fill && (c = this.values.fill, a.fillStyle = this.values.fill), n = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                  for (s = (u = p[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < s; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
              }
              if (this.stroke) {
                for (o && o.sw ? d !== o.sw && (d = o.sw, a.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, a.lineWidth = this.values.sWidth), o && o.sc ? f !== o.sc && (f = o.sc, a.strokeStyle = o.sc) : f !== this.values.stroke && (f = this.values.stroke, a.strokeStyle = this.values.stroke), n = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                  for (s = (u = p[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < s; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
              }
              o && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var t = createTag("canvas");
            t.width = this.assetData.w, t.height = this.assetData.h;
            var e, r, n = t.getContext("2d"),
              i = this.img.width,
              s = this.img.height,
              a = i / s,
              o = this.assetData.w / this.assetData.h,
              l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            a > o && "xMidYMid slice" === l || a < o && "xMidYMid slice" !== l ? e = (r = s) * o : r = (e = i) / o, n.drawImage(this.img, (i - e) / 2, (s - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
          }
        }, CVImageElement.prototype.renderInnerContent = function() {
          this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
          this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
          var t = this.canvasContext;
          t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
          return new CVShapeElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function(t) {
          return new CVTextElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function(t) {
          return new CVImageElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function(t) {
          return new CVSolidElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
          if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
            if (this.renderConfig.clearCanvas) {
              this.transformMat.cloneFromProps(t);
              var e = this.contextData.getTransform(),
                r = e.props;
              this.transformMat.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]), e.cloneFromProps(this.transformMat.props);
              var n = e.props;
              this.canvasContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13])
            } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
          var e = this.contextData.getOpacity();
          if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = e);
          e *= t < 0 ? 0 : t, this.contextData.setOpacity(e), this.globalData.currentGlobalAlpha !== e && (this.canvasContext.globalAlpha = e, this.globalData.currentGlobalAlpha = e)
        }, CanvasRendererBase.prototype.reset = function() {
          this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function(t) {
          this.renderConfig.clearCanvas ? (t && this.canvasContext.save(), this.contextData.push()) : this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function(t) {
          if (this.renderConfig.clearCanvas) {
            t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over");
            var e = this.contextData.pop(),
              r = e.transform,
              n = e.opacity;
            this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), this.globalData.currentGlobalAlpha !== n && (this.canvasContext.globalAlpha = n, this.globalData.currentGlobalAlpha = n)
          } else this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function(t) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var e = this.animationItem.container.style;
            e.width = "100%", e.height = "100%";
            var r = "0px 0px 0px";
            e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
          } else this.canvasContext = this.renderConfig.context;
          this.data = t, this.layers = t.layers, this.transformCanvas = {
            w: t.w,
            h: t.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
          }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
          var r, n, i, s;
          if (this.reset(), t ? (r = t, n = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = n) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, n = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, n = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = n * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var a = this.renderConfig.preserveAspectRatio.split(" "),
              o = a[1] || "meet",
              l = a[0] || "xMidYMid",
              h = l.substr(0, 4),
              p = l.substr(4);
            i = r / n, (s = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === o || s < i && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === h && (s < i && "meet" === o || s > i && "slice" === o) ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === h && (s < i && "meet" === o || s > i && "slice" === o) ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === p && (s > i && "meet" === o || s < i && "slice" === o) ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (s > i && "meet" === o || s < i && "slice" === o) ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
          } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
          var t;
          for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
          this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
          if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
            var r;
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
            var n = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), r = 0; r < n; r += 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
            if (this.globalData._mdf) {
              for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
              !0 !== this.renderConfig.clearCanvas && this.restore()
            }
          }
        }, CanvasRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            var r = this.createItem(this.layers[t], this, this.globalData);
            e[t] = r, r.initExpressions()
          }
        }, CanvasRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, CanvasRendererBase.prototype.hide = function() {
          this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function() {
          this.animationItem.container.style.display = "block"
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
          var t, e = this.canvasContext;
          for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
          var t;
          for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
          this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, HBaseElement.prototype = {
          checkBlendMode: function() {},
          initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
          },
          createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            var t = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
              var e = this.finalTransform.mat.toCSS();
              t.transform = e, t.webkitTransform = e
            }
            this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          destroy: function() {
            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData)
          },
          addEffects: function() {},
          setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
          var t;
          this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
          var t;
          if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
          else {
            t = createNS("svg");
            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
            t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
          var r, n = t.length;
          for (r = 0; r < n; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
          return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
          var r, n, i, s, a, o = t.sh.v,
            l = t.transformers,
            h = o._length;
          if (!(h <= 1)) {
            for (r = 0; r < h - 1; r += 1) n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), s = this.getTransformedPoint(l, o.i[r + 1]), a = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(n, i, s, a, e);
            o.c && (n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), s = this.getTransformedPoint(l, o.i[0]), a = this.getTransformedPoint(l, o.v[0]), this.checkBounds(n, i, s, a, e))
          }
        }, HShapeElement.prototype.checkBounds = function(t, e, r, n, i) {
          this.getBoundsOfCurve(t, e, r, n);
          var s = this.shapeBoundingBox;
          i.x = bmMin(s.left, i.x), i.xMax = bmMax(s.right, i.xMax), i.y = bmMin(s.top, i.y), i.yMax = bmMax(s.bottom, i.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, n) {
          for (var i, s, a, o, l, h, p, u = [
              [t[0], n[0]],
              [t[1], n[1]]
            ], c = 0; c < 2; ++c) s = 6 * t[c] - 12 * e[c] + 6 * r[c], i = -3 * t[c] + 9 * e[c] - 9 * r[c] + 3 * n[c], a = 3 * e[c] - 3 * t[c], s |= 0, a |= 0, 0 == (i |= 0) && 0 === s || (0 === i ? (o = -a / s) > 0 && o < 1 && u[c].push(this.calculateF(o, t, e, r, n, c)) : (l = s * s - 4 * a * i) >= 0 && ((h = (-s + bmSqrt(l)) / (2 * i)) > 0 && h < 1 && u[c].push(this.calculateF(h, t, e, r, n, c)), (p = (-s - bmSqrt(l)) / (2 * i)) > 0 && p < 1 && u[c].push(this.calculateF(p, t, e, r, n, c))));
          this.shapeBoundingBox.left = bmMin.apply(null, u[0]), this.shapeBoundingBox.top = bmMin.apply(null, u[1]), this.shapeBoundingBox.right = bmMax.apply(null, u[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, u[1])
        }, HShapeElement.prototype.calculateF = function(t, e, r, n, i, s) {
          return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * r[s] + 3 * (1 - t) * bmPow(t, 2) * n[s] + bmPow(t, 3) * i[s]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
          var r, n = t.length;
          for (r = 0; r < n; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
          var r = 0;
          if (t.keyframes) {
            for (var n = 0; n < t.keyframes.length; n += 1) {
              var i = t.keyframes[n].s;
              i > r && (r = i)
            }
            r *= t.mult
          } else r = t.v * t.mult;
          e.x -= r, e.xMax += r, e.y -= r, e.yMax += r
        }, HShapeElement.prototype.currentBoxContains = function(t) {
          return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function() {
          if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var t = this.tempBoundingBox,
              e = 999999;
            if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
            var r = !1;
            if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
              this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var n = this.shapeCont.style,
                i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              n.transform = i, n.webkitTransform = i
            }
          }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
          if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
            var t = createNS("g");
            this.maskedElement.appendChild(t), this.innerElem = t
          } else this.renderType = "html", this.innerElem = this.layerElement;
          this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = this.innerElem.style,
            r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
          e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
          var n, i, s = this.globalData.fontManager.getFontByName(t.f);
          if (!this.globalData.fontManager.chars)
            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
            else {
              e.fontFamily = s.fFamily;
              var a = t.fWeight,
                o = t.fStyle;
              e.fontStyle = o, e.fontWeight = a
            } var l, h, p, u = t.l;
          i = u.length;
          var c, f = this.mHelper,
            d = "",
            m = 0;
          for (n = 0; n < i; n += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? p = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
              var g, v = this.globalData.fontManager.getCharData(t.finalText[n], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
              if (g = v ? v.data : null, f.reset(), g && g.shapes && g.shapes.length && (c = g.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(f, c), l.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(l);
              else {
                if (this.innerElem.appendChild(h), g && g.shapes) {
                  document.body.appendChild(p);
                  var y = p.getBBox();
                  p.setAttribute("width", y.width + 2), p.setAttribute("height", y.height + 2), p.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
                  var b = p.style,
                    _ = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                  b.transform = _, b.webkitTransform = _, u[n].yOffset = y.y - 1
                } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                h.appendChild(p)
              }
            } else if (l.textContent = u[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(h);
              var x = l.style,
                E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              x.transform = E, x.webkitTransform = E
            }
            this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
          }
          for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function() {
          var t;
          if (this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
              var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
              t.transform = e, t.webkitTransform = e
            }
          }
          if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var r, n, i, s, a, o = 0,
              l = this.textAnimator.renderedLetters,
              h = this.textProperty.currentData.l;
            for (n = h.length, r = 0; r < n; r += 1) h[r].n ? o += 1 : (s = this.textSpans[r], a = this.textPaths[r], i = l[o], o += 1, i._mdf.m && (this.isMasked ? s.setAttribute("transform", i.m) : (s.style.webkitTransform = i.m, s.style.transform = i.m)), s.style.opacity = i.o, i.sw && i._mdf.sw && a.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && a.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (a.setAttribute("fill", i.fc), a.style.color = i.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
              var p = this.innerElem.getBBox();
              if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                t.transform = u, t.webkitTransform = u
              }
            }
          }
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
          var t, e, r, n, i = this.comp.threeDElements.length;
          for (t = 0; t < i; t += 1)
            if ("3d" === (e = this.comp.threeDElements[t]).type) {
              r = e.perspectiveElem.style, n = e.container.style;
              var s = this.pe.v + "px",
                a = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              r.perspective = s, r.webkitPerspective = s, n.transformOrigin = a, n.mozTransformOrigin = a, n.webkitTransformOrigin = a, r.transform = o, r.webkitTransform = o
            }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
          var t, e, r = this._isFirstFrame;
          if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
          if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy)
              for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                var n = this.hierarchy[t].finalTransform.mProp;
                this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
              }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
              var i;
              i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              var s = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                a = [i[0] / s, i[1] / s, i[2] / s],
                o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                l = Math.atan2(a[1], o),
                h = Math.atan2(a[0], -a[2]);
              this.mat.rotateY(h).rotateX(-l)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var p = !this._prevMat.equals(this.mat);
            if ((p || this.pe._mdf) && this.comp.threeDElements) {
              var u, c, f;
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                if ("3d" === (u = this.comp.threeDElements[t]).type) {
                  if (p) {
                    var d = this.mat.toCSS();
                    (f = u.container.style).transform = d, f.webkitTransform = d
                  }
                  this.pe._mdf && ((c = u.perspectiveElem.style).perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px")
                } this.mat.clone(this._prevMat)
            }
          }
          this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
          return null
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image;
          this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
          var r = t.getBaseElement();
          if (r) {
            var n = this.layers[e];
            if (n.ddd && this.supports3d) this.addTo3dContainer(r, e);
            else if (this.threeDElements) this.addTo3dContainer(r, e);
            else {
              for (var i, s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a], i = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : s.getBaseElement()) || i), a += 1;
              i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
            }
          }
        }, HybridRendererBase.prototype.createShape = function(t) {
          return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function(t) {
          return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function(t) {
          return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function(t) {
          return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function(t) {
          return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
          for (var e = 0, r = this.threeDElements.length; e < r;) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
            e += 1
          }
          return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
          var r, n, i = createTag("div");
          styleDiv(i);
          var s = createTag("div");
          if (styleDiv(s), "3d" === e) {
            (r = i.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
            var a = "50% 50%";
            r.webkitTransformOrigin = a, r.mozTransformOrigin = a, r.transformOrigin = a;
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (n = s.style).transform = o, n.webkitTransform = o
          }
          i.appendChild(s);
          var l = {
            container: s,
            perspectiveElem: i,
            startPos: t,
            endPos: t,
            type: e
          };
          return this.threeDElements.push(l), l
        }, HybridRendererBase.prototype.build3dContainers = function() {
          var t, e, r = this.layers.length,
            n = "";
          for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== n && (n = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== n && (n = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
          for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
          for (var r = 0, n = this.threeDElements.length; r < n;) {
            if (e <= this.threeDElements[r].endPos) {
              for (var i, s = this.threeDElements[r].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (i = this.elements[s].getBaseElement()), s += 1;
              i ? this.threeDElements[r].container.insertBefore(t, i) : this.threeDElements[r].container.appendChild(t);
              break
            }
            r += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function(t) {
          var e = createTag("div"),
            r = this.animationItem.wrapper,
            n = e.style;
          n.width = t.w + "px", n.height = t.h + "px", this.resizerElem = e, styleDiv(e), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), n.overflow = "hidden";
          var i = createNS("svg");
          i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
          var s = createNS("defs");
          i.appendChild(s), this.data = t, this.setupGlobalData(t, i), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
          var t, e, r, n, i = this.animationItem.wrapper.offsetWidth,
            s = this.animationItem.wrapper.offsetHeight,
            a = i / s;
          this.globalData.compSize.w / this.globalData.compSize.h > a ? (t = i / this.globalData.compSize.w, e = i / this.globalData.compSize.w, r = 0, n = (s - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, n = 0);
          var o = this.resizerElem.style;
          o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + n + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
          this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
          this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
          if (this.buildAllItems(), this.camera) this.camera.setup();
          else {
            var t, e = this.globalData.compSize.w,
              r = this.globalData.compSize.h,
              n = this.threeDElements.length;
            for (t = 0; t < n; t += 1) {
              var i = this.threeDElements[t].perspectiveElem.style;
              i.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", i.perspective = i.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
          var e, r = t.length,
            n = createTag("div");
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var i = this.createComp(t[e], n, this.globalData.comp, null);
              i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
          this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
          for (var r, n = 0; n < e;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
          r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
        }, HCompElement.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };
        var CompExpressionInterface = function(t) {
            function e(e) {
              for (var r = 0, n = t.layers.length; r < n;) {
                if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
                r += 1
              }
              return null
            }
            return Object.defineProperty(e, "_name", {
              value: t.data.nm
            }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
          },
          Expressions = {
            initExpressions: function(t) {
              var e = 0,
                r = [];
              t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                e += 1
              }, t.renderer.globalData.popExpression = function() {
                0 == (e -= 1) && function() {
                  var t, e = r.length;
                  for (t = 0; t < e; t += 1) r[t].release();
                  r.length = 0
                }()
              }, t.renderer.globalData.registerExpressionProperty = function(t) {
                -1 === r.indexOf(t) && r.push(t)
              }
            }
          },
          MaskManagerInterface = function() {
            function t(t, e) {
              this._mask = t, this._data = e
            }
            return Object.defineProperty(t.prototype, "maskPath", {
                get: function() {
                  return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
              }), Object.defineProperty(t.prototype, "maskOpacity", {
                get: function() {
                  return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                }
              }),
              function(e) {
                var r, n = createSizedArray(e.viewData.length),
                  i = e.viewData.length;
                for (r = 0; r < i; r += 1) n[r] = new t(e.viewData[r], e.masksProperties[r]);
                return function(t) {
                  for (r = 0; r < i;) {
                    if (e.masksProperties[r].nm === t) return n[r];
                    r += 1
                  }
                  return null
                }
              }
          }(),
          ExpressionPropertyInterface = function() {
            var t = {
                pv: 0,
                v: 0,
                mult: 1
              },
              e = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
              };

            function r(t, e, r) {
              Object.defineProperty(t, "velocity", {
                get: function() {
                  return e.getVelocityAtTime(e.comp.currentFrame)
                }
              }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(n) {
                if (!t.numKeys) return 0;
                var i;
                i = "s" in e.keyframes[n - 1] ? e.keyframes[n - 1].s : "e" in e.keyframes[n - 2] ? e.keyframes[n - 2].e : e.keyframes[n - 2].s;
                var s = "unidimensional" === r ? new Number(i) : Object.assign({}, i);
                return s.time = e.keyframes[n - 1].t / e.elem.comp.globalData.frameRate, s.value = "unidimensional" === r ? i[0] : i, s
              }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
            }

            function n() {
              return t
            }
            return function(i) {
              return i ? "unidimensional" === i.propType ? function(e) {
                e && "pv" in e || (e = t);
                var n = 1 / e.mult,
                  i = e.pv * n,
                  s = new Number(i);
                return s.value = i, r(s, e, "unidimensional"),
                  function() {
                    return e.k && e.getValue(), i = e.v * n, s.value !== i && ((s = new Number(i)).value = i, r(s, e, "unidimensional")), s
                  }
              }(i) : function(t) {
                t && "pv" in t || (t = e);
                var n = 1 / t.mult,
                  i = t.data && t.data.l || t.pv.length,
                  s = createTypedArray("float32", i),
                  a = createTypedArray("float32", i);
                return s.value = a, r(s, t, "multidimensional"),
                  function() {
                    t.k && t.getValue();
                    for (var e = 0; e < i; e += 1) a[e] = t.v[e] * n, s[e] = a[e];
                    return s
                  }
              }(i) : n
            }
          }(),
          TransformExpressionInterface = function(t) {
            function e(t) {
              switch (t) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return e.rotation;
                case "ADBE Rotate X":
                  return e.xRotation;
                case "ADBE Rotate Y":
                  return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return e.position;
                case "ADBE Position_0":
                  return e.xPosition;
                case "ADBE Position_1":
                  return e.yPosition;
                case "ADBE Position_2":
                  return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return e.opacity;
                default:
                  return null
              }
            }
            var r, n, i, s;
            return Object.defineProperty(e, "rotation", {
              get: ExpressionPropertyInterface(t.r || t.rz)
            }), Object.defineProperty(e, "zRotation", {
              get: ExpressionPropertyInterface(t.rz || t.r)
            }), Object.defineProperty(e, "xRotation", {
              get: ExpressionPropertyInterface(t.rx)
            }), Object.defineProperty(e, "yRotation", {
              get: ExpressionPropertyInterface(t.ry)
            }), Object.defineProperty(e, "scale", {
              get: ExpressionPropertyInterface(t.s)
            }), t.p ? s = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), n = ExpressionPropertyInterface(t.py), t.pz && (i = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
              get: function() {
                return t.p ? s() : [r(), n(), i ? i() : 0]
              }
            }), Object.defineProperty(e, "xPosition", {
              get: ExpressionPropertyInterface(t.px)
            }), Object.defineProperty(e, "yPosition", {
              get: ExpressionPropertyInterface(t.py)
            }), Object.defineProperty(e, "zPosition", {
              get: ExpressionPropertyInterface(t.pz)
            }), Object.defineProperty(e, "anchorPoint", {
              get: ExpressionPropertyInterface(t.a)
            }), Object.defineProperty(e, "opacity", {
              get: ExpressionPropertyInterface(t.o)
            }), Object.defineProperty(e, "skew", {
              get: ExpressionPropertyInterface(t.sk)
            }), Object.defineProperty(e, "skewAxis", {
              get: ExpressionPropertyInterface(t.sa)
            }), Object.defineProperty(e, "orientation", {
              get: ExpressionPropertyInterface(t.or)
            }), e
          },
          LayerExpressionInterface = function() {
            function t(t) {
              var e = new Matrix;
              return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
            }

            function e(t, e) {
              var r = this.getMatrix(e);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, t)
            }

            function r(t, e) {
              var r = this.getMatrix(e);
              return this.applyPoint(r, t)
            }

            function n(t, e) {
              var r = this.getMatrix(e);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, t)
            }

            function i(t, e) {
              var r = this.getMatrix(e);
              return this.invertPoint(r, t)
            }

            function s(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function a(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
              }
              return t.inversePoint(e)
            }

            function o(t) {
              var e = new Matrix;
              if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t)
              }
              return e.inversePoint(t)
            }

            function l() {
              return [1, 1, 1, 1]
            }
            return function(h) {
              var p;

              function u(t) {
                switch (t) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return u.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return p;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return u.effect;
                  case "ADBE Text Properties":
                    return u.textInterface;
                  default:
                    return null
                }
              }
              u.getMatrix = t, u.invertPoint = a, u.applyPoint = s, u.toWorld = r, u.toWorldVec = e, u.fromWorld = i, u.fromWorldVec = n, u.toComp = r, u.fromComp = o, u.sampleImage = l, u.sourceRectAtTime = h.sourceRectAtTime.bind(h), u._elem = h;
              var c = getDescriptor(p = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(u, {
                hasParent: {
                  get: function() {
                    return h.hierarchy.length
                  }
                },
                parent: {
                  get: function() {
                    return h.hierarchy[0].layerInterface
                  }
                },
                rotation: getDescriptor(p, "rotation"),
                scale: getDescriptor(p, "scale"),
                position: getDescriptor(p, "position"),
                opacity: getDescriptor(p, "opacity"),
                anchorPoint: c,
                anchor_point: c,
                transform: {
                  get: function() {
                    return p
                  }
                },
                active: {
                  get: function() {
                    return h.isInRange
                  }
                }
              }), u.startTime = h.data.st, u.index = h.data.ind, u.source = h.data.refId, u.height = 0 === h.data.ty ? h.data.h : 100, u.width = 0 === h.data.ty ? h.data.w : 100, u.inPoint = h.data.ip / h.comp.globalData.frameRate, u.outPoint = h.data.op / h.comp.globalData.frameRate, u._name = h.data.nm, u.registerMaskInterface = function(t) {
                u.mask = new MaskManagerInterface(t, h)
              }, u.registerEffectsInterface = function(t) {
                u.effect = t
              }, u
            }
          }(),
          propertyGroupFactory = function(t, e) {
            return function(r) {
              return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1)
            }
          },
          PropertyInterface = function(t, e) {
            var r = {
              _name: t
            };
            return function(t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1)
            }
          },
          EffectsExpressionInterface = function() {
            function t(r, n, i, s) {
              function a(t) {
                for (var e = r.ef, n = 0, i = e.length; n < i;) {
                  if (t === e[n].nm || t === e[n].mn || t === e[n].ix) return 5 === e[n].ty ? h[n] : h[n]();
                  n += 1
                }
                throw new Error
              }
              var o, l = propertyGroupFactory(a, i),
                h = [],
                p = r.ef.length;
              for (o = 0; o < p; o += 1) 5 === r.ef[o].ty ? h.push(t(r.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, s)) : h.push(e(n.effectElements[o], r.ef[o].ty, s, l));
              return "ADBE Color Control" === r.mn && Object.defineProperty(a, "color", {
                get: function() {
                  return h[0]()
                }
              }), Object.defineProperties(a, {
                numProperties: {
                  get: function() {
                    return r.np
                  }
                },
                _name: {
                  value: r.nm
                },
                propertyGroup: {
                  value: l
                }
              }), a.enabled = 0 !== r.en, a.active = a.enabled, a
            }

            function e(t, e, r, n) {
              var i = ExpressionPropertyInterface(t.p);
              return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", n)),
                function() {
                  return 10 === e ? r.comp.compInterface(t.p.v) : i()
                }
            }
            return {
              createEffectsInterface: function(e, r) {
                if (e.effectsManager) {
                  var n, i = [],
                    s = e.data.ef,
                    a = e.effectsManager.effectElements.length;
                  for (n = 0; n < a; n += 1) i.push(t(s[n], e.effectsManager.effectElements[n], r, e));
                  var o = e.data.ef || [],
                    l = function(t) {
                      for (n = 0, a = o.length; n < a;) {
                        if (t === o[n].nm || t === o[n].mn || t === o[n].ix) return i[n];
                        n += 1
                      }
                      return null
                    };
                  return Object.defineProperty(l, "numProperties", {
                    get: function() {
                      return o.length
                    }
                  }), l
                }
                return null
              }
            }
          }(),
          ShapePathInterface = function(t, e, r) {
            var n = e.sh;

            function i(t) {
              return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? i.path : null
            }
            var s = propertyGroupFactory(i, r);
            return n.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(i, {
              path: {
                get: function() {
                  return n.k && n.getValue(), n
                }
              },
              shape: {
                get: function() {
                  return n.k && n.getValue(), n
                }
              },
              _name: {
                value: t.nm
              },
              ix: {
                value: t.ix
              },
              propertyIndex: {
                value: t.ix
              },
              mn: {
                value: t.mn
              },
              propertyGroup: {
                value: r
              }
            }), i
          },
          ShapeExpressionInterface = function() {
            function t(t, a, c) {
              var f, d = [],
                m = t ? t.length : 0;
              for (f = 0; f < m; f += 1) "gr" === t[f].ty ? d.push(e(t[f], a[f], c)) : "fl" === t[f].ty ? d.push(r(t[f], a[f], c)) : "st" === t[f].ty ? d.push(i(t[f], a[f], c)) : "tm" === t[f].ty ? d.push(s(t[f], a[f], c)) : "tr" === t[f].ty || ("el" === t[f].ty ? d.push(o(t[f], a[f], c)) : "sr" === t[f].ty ? d.push(l(t[f], a[f], c)) : "sh" === t[f].ty ? d.push(ShapePathInterface(t[f], a[f], c)) : "rc" === t[f].ty ? d.push(h(t[f], a[f], c)) : "rd" === t[f].ty ? d.push(p(t[f], a[f], c)) : "rp" === t[f].ty ? d.push(u(t[f], a[f], c)) : "gf" === t[f].ty ? d.push(n(t[f], a[f], c)) : d.push((t[f], a[f], function() {
                return null
              })));
              return d
            }

            function e(e, r, n) {
              var i = function(t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return i.content;
                  default:
                    return i.transform
                }
              };
              i.propertyGroup = propertyGroupFactory(i, n);
              var s = function(e, r, n) {
                  var i, s = function(t) {
                    for (var e = 0, r = i.length; e < r;) {
                      if (i[e]._name === t || i[e].mn === t || i[e].propertyIndex === t || i[e].ix === t || i[e].ind === t) return i[e];
                      e += 1
                    }
                    return "number" == typeof t ? i[t - 1] : null
                  };
                  s.propertyGroup = propertyGroupFactory(s, n), i = t(e.it, r.it, s.propertyGroup), s.numProperties = i.length;
                  var o = a(e.it[e.it.length - 1], r.it[r.it.length - 1], s.propertyGroup);
                  return s.transform = o, s.propertyIndex = e.cix, s._name = e.nm, s
                }(e, r, i.propertyGroup),
                o = a(e.it[e.it.length - 1], r.it[r.it.length - 1], i.propertyGroup);
              return i.content = s, i.transform = o, Object.defineProperty(i, "_name", {
                get: function() {
                  return e.nm
                }
              }), i.numProperties = e.np, i.propertyIndex = e.ix, i.nm = e.nm, i.mn = e.mn, i
            }

            function r(t, e, r) {
              function n(t) {
                return "Color" === t || "color" === t ? n.color : "Opacity" === t || "opacity" === t ? n.opacity : null
              }
              return Object.defineProperties(n, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), n
            }

            function n(t, e, r) {
              function n(t) {
                return "Start Point" === t || "start point" === t ? n.startPoint : "End Point" === t || "end point" === t ? n.endPoint : "Opacity" === t || "opacity" === t ? n.opacity : null
              }
              return Object.defineProperties(n, {
                startPoint: {
                  get: ExpressionPropertyInterface(e.s)
                },
                endPoint: {
                  get: ExpressionPropertyInterface(e.e)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                type: {
                  get: function() {
                    return "a"
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.s.setGroupProperty(PropertyInterface("Start Point", r)), e.e.setGroupProperty(PropertyInterface("End Point", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), n
            }

            function i(t, e, r) {
              var n, i = propertyGroupFactory(h, r),
                s = propertyGroupFactory(l, i);

              function a(r) {
                Object.defineProperty(l, t.d[r].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                })
              }
              var o = t.d ? t.d.length : 0,
                l = {};
              for (n = 0; n < o; n += 1) a(n), e.d.dataProps[n].p.setGroupProperty(s);

              function h(t) {
                return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : null
              }
              return Object.defineProperties(h, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                strokeWidth: {
                  get: ExpressionPropertyInterface(e.w)
                },
                dash: {
                  get: function() {
                    return l
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), e.w.setGroupProperty(PropertyInterface("Stroke Width", i)), h
            }

            function s(t, e, r) {
              function n(e) {
                return e === t.e.ix || "End" === e || "end" === e ? n.end : e === t.s.ix ? n.start : e === t.o.ix ? n.offset : null
              }
              var i = propertyGroupFactory(n, r);
              return n.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", i)), e.e.setGroupProperty(PropertyInterface("End", i)), e.o.setGroupProperty(PropertyInterface("Offset", i)), n.propertyIndex = t.ix, n.propertyGroup = r, Object.defineProperties(n, {
                start: {
                  get: ExpressionPropertyInterface(e.s)
                },
                end: {
                  get: ExpressionPropertyInterface(e.e)
                },
                offset: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }

            function a(t, e, r) {
              function n(e) {
                return t.a.ix === e || "Anchor Point" === e ? n.anchorPoint : t.o.ix === e || "Opacity" === e ? n.opacity : t.p.ix === e || "Position" === e ? n.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? n.rotation : t.s.ix === e || "Scale" === e ? n.scale : t.sk && t.sk.ix === e || "Skew" === e ? n.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? n.skewAxis : null
              }
              var i = propertyGroupFactory(n, r);
              return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", i)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", i)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", i)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", i)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", i)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", i)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", i))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", i)), Object.defineProperties(n, {
                opacity: {
                  get: ExpressionPropertyInterface(e.transform.mProps.o)
                },
                position: {
                  get: ExpressionPropertyInterface(e.transform.mProps.p)
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(e.transform.mProps.a)
                },
                scale: {
                  get: ExpressionPropertyInterface(e.transform.mProps.s)
                },
                rotation: {
                  get: ExpressionPropertyInterface(e.transform.mProps.r)
                },
                skew: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sk)
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sa)
                },
                _name: {
                  value: t.nm
                }
              }), n.ty = "tr", n.mn = t.mn, n.propertyGroup = r, n
            }

            function o(t, e, r) {
              function n(e) {
                return t.p.ix === e ? n.position : t.s.ix === e ? n.size : null
              }
              var i = propertyGroupFactory(n, r);
              n.propertyIndex = t.ix;
              var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return s.s.setGroupProperty(PropertyInterface("Size", i)), s.p.setGroupProperty(PropertyInterface("Position", i)), Object.defineProperties(n, {
                size: {
                  get: ExpressionPropertyInterface(s.s)
                },
                position: {
                  get: ExpressionPropertyInterface(s.p)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }

            function l(t, e, r) {
              function n(e) {
                return t.p.ix === e ? n.position : t.r.ix === e ? n.rotation : t.pt.ix === e ? n.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? n.outerRadius : t.os.ix === e ? n.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? n.innerRoundness : null : n.innerRadius
              }
              var i = propertyGroupFactory(n, r),
                s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return n.propertyIndex = t.ix, s.or.setGroupProperty(PropertyInterface("Outer Radius", i)), s.os.setGroupProperty(PropertyInterface("Outer Roundness", i)), s.pt.setGroupProperty(PropertyInterface("Points", i)), s.p.setGroupProperty(PropertyInterface("Position", i)), s.r.setGroupProperty(PropertyInterface("Rotation", i)), t.ir && (s.ir.setGroupProperty(PropertyInterface("Inner Radius", i)), s.is.setGroupProperty(PropertyInterface("Inner Roundness", i))), Object.defineProperties(n, {
                position: {
                  get: ExpressionPropertyInterface(s.p)
                },
                rotation: {
                  get: ExpressionPropertyInterface(s.r)
                },
                points: {
                  get: ExpressionPropertyInterface(s.pt)
                },
                outerRadius: {
                  get: ExpressionPropertyInterface(s.or)
                },
                outerRoundness: {
                  get: ExpressionPropertyInterface(s.os)
                },
                innerRadius: {
                  get: ExpressionPropertyInterface(s.ir)
                },
                innerRoundness: {
                  get: ExpressionPropertyInterface(s.is)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }

            function h(t, e, r) {
              function n(e) {
                return t.p.ix === e ? n.position : t.r.ix === e ? n.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? n.size : null
              }
              var i = propertyGroupFactory(n, r),
                s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return n.propertyIndex = t.ix, s.p.setGroupProperty(PropertyInterface("Position", i)), s.s.setGroupProperty(PropertyInterface("Size", i)), s.r.setGroupProperty(PropertyInterface("Rotation", i)), Object.defineProperties(n, {
                position: {
                  get: ExpressionPropertyInterface(s.p)
                },
                roundness: {
                  get: ExpressionPropertyInterface(s.r)
                },
                size: {
                  get: ExpressionPropertyInterface(s.s)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }

            function p(t, e, r) {
              function n(e) {
                return t.r.ix === e || "Round Corners 1" === e ? n.radius : null
              }
              var i = propertyGroupFactory(n, r),
                s = e;
              return n.propertyIndex = t.ix, s.rd.setGroupProperty(PropertyInterface("Radius", i)), Object.defineProperties(n, {
                radius: {
                  get: ExpressionPropertyInterface(s.rd)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }

            function u(t, e, r) {
              function n(e) {
                return t.c.ix === e || "Copies" === e ? n.copies : t.o.ix === e || "Offset" === e ? n.offset : null
              }
              var i = propertyGroupFactory(n, r),
                s = e;
              return n.propertyIndex = t.ix, s.c.setGroupProperty(PropertyInterface("Copies", i)), s.o.setGroupProperty(PropertyInterface("Offset", i)), Object.defineProperties(n, {
                copies: {
                  get: ExpressionPropertyInterface(s.c)
                },
                offset: {
                  get: ExpressionPropertyInterface(s.o)
                },
                _name: {
                  value: t.nm
                }
              }), n.mn = t.mn, n
            }
            return function(e, r, n) {
              var i;

              function s(t) {
                if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? n : i[t - 1];
                for (var e = 0, r = i.length; e < r;) {
                  if (i[e]._name === t) return i[e];
                  e += 1
                }
                return null
              }
              return s.propertyGroup = propertyGroupFactory(s, (function() {
                return n
              })), i = t(e, r, s.propertyGroup), s.numProperties = i.length, s._name = "Contents", s
            }
          }(),
          TextExpressionInterface = function(t) {
            var e, r;

            function n(t) {
              return "ADBE Text Document" === t ? n.sourceText : null
            }
            return Object.defineProperty(n, "sourceText", {
              get: function() {
                t.textProperty.getValue();
                var n = t.textProperty.currentData.t;
                return n !== e && (e = t.textProperty.currentData.t, (r = new String(n)).value = n || new String(n), Object.defineProperty(r, "style", {
                  get: function() {
                    return {
                      fillColor: t.textProperty.currentData.fc
                    }
                  }
                })), r
              }
            }), n
          };

        function _typeof$2(t) {
          return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$2(t)
        }
        var FootageInterface = (dataInterfaceFactory = function(t) {
            function e(t) {
              return "Outline" === t ? e.outlineInterface() : null
            }
            return e._name = "Outline", e.outlineInterface = function(t) {
              var e = "",
                r = t.getFootageData();

              function n(t) {
                if (r[t]) return e = t, "object" === _typeof$2(r = r[t]) ? n : r;
                var i = t.indexOf(e);
                if (-1 !== i) {
                  var s = parseInt(t.substr(i + e.length), 10);
                  return "object" === _typeof$2(r = r[s]) ? n : r
                }
                return ""
              }
              return function() {
                return e = "", r = t.getFootageData(), n
              }
            }(t), e
          }, function(t) {
            function e(t) {
              return "Data" === t ? e.dataInterface : null
            }
            return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
          }),
          dataInterfaceFactory, interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
          };

        function getInterface(t) {
          return interfaces[t] || null
        }

        function _typeof$1(t) {
          return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$1(t)
        }

        function seedRandom(t, e) {
          var r, n = this,
            i = 256,
            s = "random",
            a = e.pow(i, 6),
            o = e.pow(2, 52),
            l = 2 * o,
            h = i - 1;

          function p(t) {
            var e, r = t.length,
              n = this,
              s = 0,
              a = n.i = n.j = 0,
              o = n.S = [];
            for (r || (t = [r++]); s < i;) o[s] = s++;
            for (s = 0; s < i; s++) o[s] = o[a = h & a + t[s % r] + (e = o[s])], o[a] = e;
            n.g = function(t) {
              for (var e, r = 0, s = n.i, a = n.j, o = n.S; t--;) e = o[s = h & s + 1], r = r * i + o[h & (o[s] = o[a = h & a + e]) + (o[a] = e)];
              return n.i = s, n.j = a, r
            }
          }

          function u(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
          }

          function c(t, e) {
            var r, n = [],
              i = _typeof$1(t);
            if (e && "object" == i)
              for (r in t) try {
                n.push(c(t[r], e - 1))
              } catch (t) {}
            return n.length ? n : "string" == i ? t : t + "\0"
          }

          function f(t, e) {
            for (var r, n = t + "", i = 0; i < n.length;) e[h & i] = h & (r ^= 19 * e[h & i]) + n.charCodeAt(i++);
            return d(e)
          }

          function d(t) {
            return String.fromCharCode.apply(0, t)
          }
          e["seed" + s] = function(h, m, g) {
            var v = [],
              y = f(c((m = !0 === m ? {
                entropy: !0
              } : m || {}).entropy ? [h, d(t)] : null === h ? function() {
                try {
                  r;
                  var e = new Uint8Array(i);
                  return (n.crypto || n.msCrypto).getRandomValues(e), d(e)
                } catch (e) {
                  var s = n.navigator,
                    a = s && s.plugins;
                  return [+new Date, n, a, n.screen, d(t)]
                }
              }() : h, 3), v),
              b = new p(v),
              _ = function() {
                for (var t = b.g(6), e = a, r = 0; t < o;) t = (t + r) * i, e *= i, r = b.g(1);
                for (; t >= l;) t /= 2, e /= 2, r >>>= 1;
                return (t + r) / e
              };
            return _.int32 = function() {
              return 0 | b.g(4)
            }, _.quick = function() {
              return b.g(4) / 4294967296
            }, _.double = _, f(d(b.S), t), (m.pass || g || function(t, r, n, i) {
              return i && (i.S && u(i, b), t.state = function() {
                return u(b, {})
              }), n ? (e[s] = t, r) : t
            })(_, y, "global" in m ? m.global : this == e, m.state)
          }, f(e.random(), t)
        }

        function initialize$2(t) {
          seedRandom([], t)
        }
        var propTypes = {
          SHAPE: "shape"
        };

        function _typeof(t) {
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof(t)
        }
        var ExpressionManager = function() {
            var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null,
              frames = null;

            function $bm_isInstanceOfArray(t) {
              return t.constructor === Array || t.constructor === Float32Array
            }

            function isNumerable(t, e) {
              return "number" === t || "boolean" === t || "string" === t || e instanceof Number
            }

            function $bm_neg(t) {
              var e = _typeof(t);
              if ("number" === e || "boolean" === e || t instanceof Number) return -t;
              if ($bm_isInstanceOfArray(t)) {
                var r, n = t.length,
                  i = [];
                for (r = 0; r < n; r += 1) i[r] = -t[r];
                return i
              }
              return t.propType ? t.v : -t
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
              easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
              easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(t, e) {
              var r = _typeof(t),
                n = _typeof(e);
              if ("string" === r || "string" === n) return t + e;
              if (isNumerable(r, t) && isNumerable(n, e)) return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] += e, t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var i = 0, s = t.length, a = e.length, o = []; i < s || i < a;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? o[i] = t[i] + e[i] : o[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1;
                return o
              }
              return 0
            }
            var add = sum;

            function sub(t, e) {
              var r = _typeof(t),
                n = _typeof(e);
              if (isNumerable(r, t) && isNumerable(n, e)) return "string" === r && (t = parseInt(t, 10)), "string" === n && (e = parseInt(e, 10)), t - e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] -= e, t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var i = 0, s = t.length, a = e.length, o = []; i < s || i < a;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? o[i] = t[i] - e[i] : o[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1;
                return o
              }
              return 0
            }

            function mul(t, e) {
              var r, n, i, s = _typeof(t),
                a = _typeof(e);
              if (isNumerable(s, t) && isNumerable(a, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] * e;
                return r
              }
              if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t * e[n];
                return r
              }
              return 0
            }

            function div(t, e) {
              var r, n, i, s = _typeof(t),
                a = _typeof(e);
              if (isNumerable(s, t) && isNumerable(a, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] / e;
                return r
              }
              if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t / e[n];
                return r
              }
              return 0
            }

            function mod(t, e) {
              return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;

            function clamp(t, e, r) {
              if (e > r) {
                var n = r;
                r = e, e = n
              }
              return Math.min(Math.max(t, e), r)
            }

            function radiansToDegrees(t) {
              return t / degToRads
            }
            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(t) {
              return t * degToRads
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(t, e) {
              if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
              var r;
              e || (e = helperLengthArray);
              var n = Math.min(t.length, e.length),
                i = 0;
              for (r = 0; r < n; r += 1) i += Math.pow(e[r] - t[r], 2);
              return Math.sqrt(i)
            }

            function normalize(t) {
              return div(t, length(t))
            }

            function rgbToHsl(t) {
              var e, r, n = t[0],
                i = t[1],
                s = t[2],
                a = Math.max(n, i, s),
                o = Math.min(n, i, s),
                l = (a + o) / 2;
              if (a === o) e = 0, r = 0;
              else {
                var h = a - o;
                switch (r = l > .5 ? h / (2 - a - o) : h / (a + o), a) {
                  case n:
                    e = (i - s) / h + (i < s ? 6 : 0);
                    break;
                  case i:
                    e = (s - n) / h + 2;
                    break;
                  case s:
                    e = (n - i) / h + 4
                }
                e /= 6
              }
              return [e, r, l, t[3]]
            }

            function hue2rgb(t, e, r) {
              return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function hslToRgb(t) {
              var e, r, n, i = t[0],
                s = t[1],
                a = t[2];
              if (0 === s) e = a, n = a, r = a;
              else {
                var o = a < .5 ? a * (1 + s) : a + s - a * s,
                  l = 2 * a - o;
                e = hue2rgb(l, o, i + 1 / 3), r = hue2rgb(l, o, i), n = hue2rgb(l, o, i - 1 / 3)
              }
              return [e, r, n, t[3]]
            }

            function linear(t, e, r, n, i) {
              if (void 0 !== n && void 0 !== i || (n = e, i = r, e = 0, r = 1), r < e) {
                var s = r;
                r = e, e = s
              }
              if (t <= e) return n;
              if (t >= r) return i;
              var a, o = r === e ? 0 : (t - e) / (r - e);
              if (!n.length) return n + (i - n) * o;
              var l = n.length,
                h = createTypedArray("float32", l);
              for (a = 0; a < l; a += 1) h[a] = n[a] + (i[a] - n[a]) * o;
              return h
            }

            function random(t, e) {
              if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                var r, n = e.length;
                t || (t = createTypedArray("float32", n));
                var i = createTypedArray("float32", n),
                  s = BMMath.random();
                for (r = 0; r < n; r += 1) i[r] = t[r] + s * (e[r] - t[r]);
                return i
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
            }

            function createPath(t, e, r, n) {
              var i, s = t.length,
                a = shapePool.newElement();
              a.setPathData(!!n, s);
              var o, l, h = [0, 0];
              for (i = 0; i < s; i += 1) o = e && e[i] ? e[i] : h, l = r && r[i] ? r[i] : h, a.setTripleAt(t[i][0], t[i][1], l[0] + t[i][0], l[1] + t[i][1], o[0] + t[i][0], o[1] + t[i][1], i, !0);
              return a
            }

            function initiateExpression(elem, data, property) {
              function noOp(t) {
                return t
              }
              if (!elem.globalData.renderConfig.runExpressions) return noOp;
              var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = -1 !== val.indexOf("random"),
                elemType = elem.data.ty,
                transform, $bm_transform, content, effect, thisProperty = property;
              thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                get: function() {
                  return thisProperty.v
                }
              }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || !0 !== this.data.hd,
                wiggle = function(t, e) {
                  var r, n, i = this.pv.length ? this.pv.length : 1,
                    s = createTypedArray("float32", i),
                    a = Math.floor(5 * time);
                  for (r = 0, n = 0; r < a;) {
                    for (n = 0; n < i; n += 1) s[n] += -e + 2 * e * BMMath.random();
                    r += 1
                  }
                  var o = 5 * time,
                    l = o - Math.floor(o),
                    h = createTypedArray("float32", i);
                  if (i > 1) {
                    for (n = 0; n < i; n += 1) h[n] = this.pv[n] + s[n] + (-e + 2 * e * BMMath.random()) * l;
                    return h
                  }
                  return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * l
                }.bind(this);

              function loopInDuration(t, e) {
                return loopIn(t, e, !0)
              }

              function loopOutDuration(t, e) {
                return loopOut(t, e, !0)
              }
              thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                time, velocity, value, text, textIndex, textTotal, selectorValue;

              function lookAt(t, e) {
                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                  n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
              }

              function easeOut(t, e, r, n, i) {
                return applyEase(easeOutBez, t, e, r, n, i)
              }

              function easeIn(t, e, r, n, i) {
                return applyEase(easeInBez, t, e, r, n, i)
              }

              function ease(t, e, r, n, i) {
                return applyEase(easeInOutBez, t, e, r, n, i)
              }

              function applyEase(t, e, r, n, i, s) {
                void 0 === i ? (i = r, s = n) : e = (e - r) / (n - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                var a = t(e);
                if ($bm_isInstanceOfArray(i)) {
                  var o, l = i.length,
                    h = createTypedArray("float32", l);
                  for (o = 0; o < l; o += 1) h[o] = (s[o] - i[o]) * a + i[o];
                  return h
                }
                return (s - i) * a + i
              }

              function nearestKey(t) {
                var e, r, n, i = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
                  else {
                    for (e = 0; e < i - 1; e += 1) {
                      if (t === data.k[e].t) {
                        r = e + 1, n = data.k[e].t;
                        break
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, n = data.k[e + 1].t) : (r = e + 1, n = data.k[e].t);
                        break
                      }
                    } - 1 === r && (r = e + 1, n = data.k[e].t)
                  }
                else r = 0, n = 0;
                var s = {};
                return s.index = r, s.time = n / elem.comp.globalData.frameRate, s
              }

              function key(t) {
                var e, r, n;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                t -= 1, e = {
                  time: data.k[t].t / elem.comp.globalData.frameRate,
                  value: []
                };
                var i = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                for (n = i.length, r = 0; r < n; r += 1) e[r] = i[r], e.value[r] = i[r];
                return e
              }

              function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate), t / e
              }

              function timeToFrames(t, e) {
                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
              }

              function seedRandom(t) {
                BMMath.seedrandom(randSeed + t)
              }

              function sourceRectAtTime() {
                return elem.sourceRectAtTime()
              }

              function substring(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
              }

              function substr(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
              }

              function posterizeTime(t) {
                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent, randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;

              function executeExpression(t) {
                return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
              }
              return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
            }
            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath], ob
          }(),
          expressionHelpers = {
            searchExpressions: function(t, e, r) {
              e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
            },
            getSpeedAtTime: function(t) {
              var e = this.getValueAtTime(t),
                r = this.getValueAtTime(t + -.01),
                n = 0;
              if (e.length) {
                var i;
                for (i = 0; i < e.length; i += 1) n += Math.pow(r[i] - e[i], 2);
                n = 100 * Math.sqrt(n)
              } else n = 0;
              return n
            },
            getVelocityAtTime: function(t) {
              if (void 0 !== this.vel) return this.vel;
              var e, r, n = -.001,
                i = this.getValueAtTime(t),
                s = this.getValueAtTime(t + n);
              if (i.length)
                for (e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) e[r] = (s[r] - i[r]) / n;
              else e = (s - i) / n;
              return e
            },
            getValueAtTime: function(t) {
              return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
            },
            getStaticValueAtTime: function() {
              return this.pv
            },
            setGroupProperty: function(t) {
              this.propertyGroup = t
            }
          };

        function addPropertyDecorator() {
          function t(t, e, r) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var n, i, s, a, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              p = h[h.length - 1].t;
            if (l <= p) return this.pv;
            if (r ? i = p - (n = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), n = p - (i = h[h.length - 1 - e].t)), "pingpong" === t) {
              if (Math.floor((l - i) / n) % 2 != 0) return this.getValueAtTime((n - (l - i) % n + i) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var u = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((l - i) / n);
                if (this.pv.length) {
                  for (a = (o = new Array(u.length)).length, s = 0; s < a; s += 1) o[s] = (c[s] - u[s]) * d + f[s];
                  return o
                }
                return (c - u) * d + f
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  g = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - g[s]) * ((l - p) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return m + (l - p) / .001 * (m - g)
              }
            }
            return this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0)
          }

          function e(t, e, r) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var n, i, s, a, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              p = h[0].t;
            if (l >= p) return this.pv;
            if (r ? i = p + (n = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > h.length - 1) && (e = h.length - 1), n = (i = h[e].t) - p), "pingpong" === t) {
              if (Math.floor((p - l) / n) % 2 == 0) return this.getValueAtTime(((p - l) % n + p) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  c = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime((n - (p - l) % n + p) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((p - l) / n) + 1;
                if (this.pv.length) {
                  for (a = (o = new Array(u.length)).length, s = 0; s < a; s += 1) o[s] = f[s] - (c[s] - u[s]) * d;
                  return o
                }
                return f - (c - u) * d
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  g = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - g[s]) * (p - l) / .001;
                  return o
                }
                return m + (m - g) * (p - l) / .001
              }
            }
            return this.getValueAtTime((n - ((p - l) % n + p)) / this.comp.globalData.frameRate, 0)
          }

          function r(t, e) {
            if (!this.k) return this.pv;
            if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
            var r, n, i = this.comp.renderedFrame / this.comp.globalData.frameRate,
              s = i - t,
              a = e > 1 ? (i + t - s) / (e - 1) : 1,
              o = 0,
              l = 0;
            for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
              if (n = this.getValueAtTime(s + o * a), this.pv.length)
                for (l = 0; l < this.pv.length; l += 1) r[l] += n[l];
              else r += n;
              o += 1
            }
            if (this.pv.length)
              for (l = 0; l < this.pv.length; l += 1) r[l] /= e;
            else r /= e;
            return r
          }

          function n(t) {
            this._transformCachingAtTime || (this._transformCachingAtTime = {
              v: new Matrix
            });
            var e = this._transformCachingAtTime.v;
            if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              var r = this.a.getValueAtTime(t);
              e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
            }
            if (this.appliedTransformations < 2) {
              var n = this.s.getValueAtTime(t);
              e.scale(n[0] * this.s.mult, n[1] * this.s.mult, n[2] * this.s.mult)
            }
            if (this.sk && this.appliedTransformations < 3) {
              var i = this.sk.getValueAtTime(t),
                s = this.sa.getValueAtTime(t);
              e.skewFromAxis(-i * this.sk.mult, s * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              var a = this.r.getValueAtTime(t);
              e.rotate(-a * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(t),
                l = this.ry.getValueAtTime(t),
                h = this.rx.getValueAtTime(t),
                p = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              var u = this.px.getValueAtTime(t),
                c = this.py.getValueAtTime(t);
              if (this.data.p.z) {
                var f = this.pz.getValueAtTime(t);
                e.translate(u * this.px.mult, c * this.py.mult, -f * this.pz.mult)
              } else e.translate(u * this.px.mult, c * this.py.mult, 0)
            } else {
              var d = this.p.getValueAtTime(t);
              e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
            }
            return e
          }

          function i() {
            return this.v.clone(new Matrix)
          }
          var s = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(t, e, r) {
            var a = s(t, e, r);
            return a.dynamicProperties.length ? a.getValueAtTime = n.bind(a) : a.getValueAtTime = i.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a
          };
          var a = PropertyFactory.getProp;
          PropertyFactory.getProp = function(n, i, s, o, l) {
            var h = a(n, i, s, o, l);
            h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === i.a ? i.k.length : 0, h.propertyIndex = i.ix;
            var p = 0;
            return 0 !== s && (p = createTypedArray("float32", 1 === i.a ? i.k[0].s.length : i.k.length)), h._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: p
            }, expressionHelpers.searchExpressions(n, i, h), h.k && l.addDynamicProperty(h), h
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            l = ShapePropertyFactory.getKeyframedConstructorFunction();

          function h() {}
          h.prototype = {
            vertices: function(t, e) {
              this.k && this.getValue();
              var r, n = this.v;
              void 0 !== e && (n = this.getValueAtTime(e, 0));
              var i = n._length,
                s = n[t],
                a = n.v,
                o = createSizedArray(i);
              for (r = 0; r < i; r += 1) o[r] = "i" === t || "o" === t ? [s[r][0] - a[r][0], s[r][1] - a[r][1]] : [s[r][0], s[r][1]];
              return o
            },
            points: function(t) {
              return this.vertices("v", t)
            },
            inTangents: function(t) {
              return this.vertices("i", t)
            },
            outTangents: function(t) {
              return this.vertices("o", t)
            },
            isClosed: function() {
              return this.v.c
            },
            pointOnPath: function(t, e) {
              var r = this.v;
              void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
              for (var n, i = this._segmentsLength, s = i.lengths, a = i.totalLength * t, o = 0, l = s.length, h = 0; o < l;) {
                if (h + s[o].addedLength > a) {
                  var p = o,
                    u = r.c && o === l - 1 ? 0 : o + 1,
                    c = (a - h) / s[o].addedLength;
                  n = bez.getPointInSegment(r.v[p], r.v[u], r.o[p], r.i[u], c, s[o]);
                  break
                }
                h += s[o].addedLength, o += 1
              }
              return n || (n = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), n
            },
            vectorOnPath: function(t, e, r) {
              1 == t ? t = this.v.c : 0 == t && (t = .999);
              var n = this.pointOnPath(t, e),
                i = this.pointOnPath(t + .001, e),
                s = i[0] - n[0],
                a = i[1] - n[1],
                o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
              return 0 === o ? [0, 0] : "tangent" === r ? [s / o, a / o] : [-a / o, s / o]
            },
            tangentOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "tangent")
            },
            normalOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function(t) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var p = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(t, e, r, n, i) {
            var s = p(t, e, r, n, i);
            return s.propertyIndex = e.ix, s.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
          }
        }

        function initialize$1() {
          addPropertyDecorator()
        }

        function addDecorator() {
          TextProperty.prototype.getExpressionValue = function(t, e) {
            var r = this.calculateExpression(e);
            if (t.t !== r) {
              var n = {};
              return this.copyData(n, t), n.t = r.toString(), n.__complete = !1, n
            }
            return t
          }, TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes(),
              e = this.searchExpressions();
            return this.kf = t || e, this.kf
          }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
          }
        }

        function initialize() {
          addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
          createMergeNode: function(t, e) {
            var r, n, i = createNS("feMerge");
            for (i.setAttribute("result", t), n = 0; n < e.length; n += 1)(r = createNS("feMergeNode")).setAttribute("in", e[n]), i.appendChild(r), i.appendChild(r);
            return i
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, r, n, i) {
          this.filterManager = e;
          var s = createNS("feColorMatrix");
          s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = s, s.setAttribute("result", n + "_tint_1"), t.appendChild(s), (s = createNS("feColorMatrix")).setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", n + "_tint_2"), t.appendChild(s), this.matrixFilter = s;
          var a = this.createMergeNode(n, [i, n + "_tint_1", n + "_tint_2"]);
          t.appendChild(a)
        }

        function SVGFillFilter(t, e, r, n) {
          this.filterManager = e;
          var i = createNS("feColorMatrix");
          i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", n), t.appendChild(i), this.matrixFilter = i
        }

        function SVGStrokeEffect(t, e, r) {
          this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = []
        }

        function SVGTritoneFilter(t, e, r, n) {
          this.filterManager = e;
          var i = createNS("feColorMatrix");
          i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(i);
          var s = createNS("feComponentTransfer");
          s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", n), this.matrixFilter = s;
          var a = createNS("feFuncR");
          a.setAttribute("type", "table"), s.appendChild(a), this.feFuncR = a;
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), s.appendChild(o), this.feFuncG = o;
          var l = createNS("feFuncB");
          l.setAttribute("type", "table"), s.appendChild(l), this.feFuncB = l, t.appendChild(s)
        }

        function SVGProLevelsFilter(t, e, r, n) {
          this.filterManager = e;
          var i = this.filterManager.effectElements,
            s = createNS("feComponentTransfer");
          (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", s)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", s)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", s)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s)), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && ((s = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", n), t.appendChild(s), this.feFuncRComposed = this.createFeFunc("feFuncR", s), this.feFuncGComposed = this.createFeFunc("feFuncG", s), this.feFuncBComposed = this.createFeFunc("feFuncB", s))
        }

        function SVGDropShadowEffect(t, e, r, n, i) {
          var s = e.container.globalData.renderConfig.filterSize,
            a = e.data.fs || s;
          t.setAttribute("x", a.x || s.x), t.setAttribute("y", a.y || s.y), t.setAttribute("width", a.width || s.width), t.setAttribute("height", a.height || s.height), this.filterManager = e;
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", n + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
          var l = createNS("feOffset");
          l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", n + "_drop_shadow_1"), l.setAttribute("result", n + "_drop_shadow_2"), this.feOffset = l, t.appendChild(l);
          var h = createNS("feFlood");
          h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", n + "_drop_shadow_3"), this.feFlood = h, t.appendChild(h);
          var p = createNS("feComposite");
          p.setAttribute("in", n + "_drop_shadow_3"), p.setAttribute("in2", n + "_drop_shadow_2"), p.setAttribute("operator", "in"), p.setAttribute("result", n + "_drop_shadow_4"), t.appendChild(p);
          var u = this.createMergeNode(n, [n + "_drop_shadow_4", i]);
          t.appendChild(u)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              n = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + n + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
          }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[2].p.v,
              r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
          }
        }, SVGStrokeEffect.prototype.initialize = function() {
          var t, e, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          for (1 === this.filterManager.effectElements[1].p.v ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < n; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
            p: t,
            m: r
          });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var s = createNS("mask"),
              a = createElementID();
            s.setAttribute("id", a), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); i[0];) o.appendChild(i[0]);
            this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
          } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
          }
          this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
          var e;
          this.initialized || this.initialize();
          var r, n, i = this.paths.length;
          for (e = 0; e < i; e += 1)
            if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], n = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
              var s;
              if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var a = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  l = n.getTotalLength();
                s = "0 0 0 " + l * a + " ";
                var h, p = l * (o - a),
                  u = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  c = Math.floor(p / u);
                for (h = 0; h < c; h += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                s += "0 " + 10 * l + " 0 0"
              } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
              n.setAttribute("stroke-dasharray", s)
            } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
            var f = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
          }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              n = this.filterManager.effectElements[2].p.v,
              i = n[0] + " " + r[0] + " " + e[0],
              s = n[1] + " " + r[1] + " " + e[1],
              a = n[2] + " " + r[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", a)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
          var r = createNS(t);
          return r.setAttribute("type", "table"), e.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, n, i) {
          for (var s, a, o = 0, l = Math.min(t, e), h = Math.max(t, e), p = Array.call(null, {
              length: 256
            }), u = 0, c = i - n, f = e - t; o <= 256;) a = (s = o / 256) <= l ? f < 0 ? i : n : s >= h ? f < 0 ? n : i : n + c * Math.pow((s - t) / f, 1 / r), p[u] = a, u += 1, o += 256 / 255;
          return p.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e, r = this.filterManager.effectElements;
            this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
          }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
              var e = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              var r = this.filterManager.effectElements[3].p.v,
                n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                i = r * Math.cos(n),
                s = r * Math.sin(n);
              this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", s)
            }
          }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, r) {
          this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        function SVGGaussianBlurEffect(t, e, r, n) {
          t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
          var i = createNS("feGaussianBlur");
          i.setAttribute("result", n), t.appendChild(i), this.feGaussianBlur = i
        }
        return SVGMatte3Effect.prototype.findSymbol = function(t) {
          for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
            e += 1
          }
          return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
          var r = t.layerElement.parentNode;
          if (r) {
            for (var n, i = r.children, s = 0, a = i.length; s < a && i[s] !== t.layerElement;) s += 1;
            s <= a - 2 && (n = i[s + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e), n ? r.insertBefore(o, n) : r.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
          if (!this.findSymbol(e)) {
            var r = createElementID(),
              n = createNS("mask");
            n.setAttribute("id", e.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
            var i = t.globalData.defs;
            i.appendChild(n);
            var s = createNS("symbol");
            s.setAttribute("id", r), this.replaceInParent(e, r), s.appendChild(e.layerElement), i.appendChild(s);
            var a = createNS("use");
            a.setAttribute("href", "#" + r), n.appendChild(a), e.data.hd = !1, e.show()
          }
          t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
          for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, n = e.length; r < n;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
          this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
          this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = .3 * this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              n = 3 == r ? 0 : e,
              i = 2 == r ? 0 : e;
            this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
            var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", s)
          }
        }, registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie
      }, module.exports = factory())
    },
    5834: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      e.default = function t(e, r, n) {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var i = r.y0,
          s = r.y1,
          a = r.x1,
          o = r.x0,
          l = "%" === s.unit && "%" === i.unit,
          h = i.value,
          p = s.value;
        if (l) {
          var u = e.height / 100;
          h = i.value * u, p = s.value * u
        }
        var c = "%" === a.unit && "%" === o.unit,
          f = o.value,
          d = a.value;
        if (c) {
          var m = e.width / 100;
          f = o.value * m, d = a.value * m
        }
        var g = Math.abs(h) + Math.abs(p);
        this.totalDistY = n.height + e.height + g;
        var v = n.height + e.height + (p > h ? -1 * g : g),
          y = Math.abs(f) + Math.abs(d);
        this.totalDistX = n.width + e.width + y;
        var b = n.width + e.width + (d > f ? -1 * y : y),
          _ = e.originTotalDistY / v,
          x = e.originTotalDistX / b;
        this.top = e.top, this.bottom = e.bottom, h < 0 && (this.top = this.top + h * _), p > 0 && (this.bottom = this.bottom + p * _), this.left = e.left, this.right = e.right, f < 0 && (this.left = this.left + f * x), d > 0 && (this.right = this.right + d * x)
      }
    },
    8980: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.Element = void 0;
      var n = r(6870),
        i = r(3738),
        s = r(2290),
        a = l(r(5834)),
        o = l(r(6205));

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function h(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? h(Object(r), !0).forEach((function(e) {
            u(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }

      function u(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }

      function c(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      var f = function() {
        function t(e) {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.elInner = e.elInner, this.elOuter = e.elOuter, this.props = e.props, this.scrollAxis = e.scrollAxis, this.id = (0, n.createId)(), this.offsets = (0, i.getOffsets)(this.props), this.isInView = null, this.percent = 0, this.updatePosition = e.scrollAxis === s.VERTICAL ? this._updatePositionVertical : this._updatePositionHorizontal
        }
        var e, r;
        return e = t, (r = [{
          key: "updateProps",
          value: function(t) {
            return this.props = p(p({}, this.props), t), this.offsets = (0, i.getOffsets)(t), this
          }
        }, {
          key: "setCachedAttributes",
          value: function(t, e) {
            return this.rect = new o.default(this.elOuter, t, e), this.bounds = new a.default(this.rect, this.offsets, t), this
          }
        }, {
          key: "_updatePositionHorizontal",
          value: function(t, e) {
            return this.isInView = (0, i.isElementInView)(this.bounds.left, this.bounds.right, t.width, e.x), this.isInView ? (this.percent = (0, i.percentMoved)(this.rect.left, this.rect.originTotalDistX, t.width, e.x), (0, i.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }, {
          key: "_updatePositionVertical",
          value: function(t, e) {
            return this.isInView = (0, i.isElementInView)(this.bounds.top, this.bounds.bottom, t.height, e.y), this.isInView ? (this.percent = (0, i.percentMoved)(this.rect.top, this.rect.originTotalDistY, t.height, e.y), (0, i.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }]) && c(e.prototype, r), t
      }();
      e.Element = f
    },
    7338: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = r(6870),
        i = r(3738),
        s = r(4433),
        a = r(9036),
        o = r(8980),
        l = r(2290);

      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
      }

      function p(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? p(Object(r), !0).forEach((function(e) {
            c(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }

      function c(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }

      function f(t) {
        var e = t.scrollAxis,
          r = void 0 === e ? l.VERTICAL : e,
          p = t.scrollContainer,
          c = [],
          f = !!p,
          d = p || window,
          m = f ? d.scrollLeft : window.pageXOffset,
          g = f ? d.scrollTop : window.pageYOffset,
          v = new a.Scroll(m, g),
          y = new s.View({
            width: 0,
            height: 0,
            scrollContainer: p
          }),
          b = !1,
          _ = (0, n.testForPassiveScroll)();

        function x(t) {
          t.addEventListener("scroll", S, !!_ && {
            passive: !0
          }), window.addEventListener("resize", P, !1)
        }

        function E(t) {
          t.removeEventListener("scroll", S, !!_ && {
            passive: !0
          }), window.removeEventListener("resize", P, !1)
        }

        function S() {
          var t = f ? d.scrollLeft : window.pageXOffset,
            e = f ? d.scrollTop : window.pageYOffset;
          v.setScroll(t, e), !b && c.length > 0 && (b = !0, window.requestAnimationFrame(w))
        }

        function P() {
          T(), w({
            updateCache: !0
          })
        }

        function w() {
          var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).updateCache;
          c && c.forEach((function(e) {
            C(e), t && e.setCachedAttributes(y, v)
          })), b = !1
        }

        function C(t) {
          t.props.disabled || t.updatePosition(y, v)
        }

        function T() {
          if (f) {
            var t = d.offsetWidth,
              e = d.offsetHeight;
            return y.setSize(t, e)
          }
          var r = document.documentElement,
            n = window.innerWidth || r.clientWidth,
            i = window.innerHeight || r.clientHeight;
          return y.setSize(n, i)
        }
        x(d), T(), this.getElements = function() {
          return c
        }, this.createElement = function(t) {
          var e, n = new o.Element(u(u({}, t), {}, {
            scrollAxis: r
          }));
          return n.setCachedAttributes(y, v), c = c ? [].concat(function(t) {
            if (Array.isArray(t)) return h(t)
          }(e = c) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
          }(e) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return h(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? h(t, e) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }(), [n]) : [n], C(n), n
        }, this.removeElementById = function(t) {
          c && (c = c.filter((function(e) {
            return e.id !== t
          })))
        }, this.updateElementPropsById = function(t, e) {
          c && (c = c.map((function(r) {
            return r.id === t ? r.updateProps(e) : r
          }))), this.update()
        }, this.resetElementStyles = function(t) {
          (0, i.resetStyles)(t)
        }, this.update = function() {
          var t = f ? d.scrollLeft : window.pageXOffset,
            e = f ? d.scrollTop : window.pageYOffset;
          v.setScroll(t, e), T(), w({
            updateCache: !0
          })
        }, this.updateScrollContainer = function(t) {
          E(d), d = t, f = !!t, y = new s.View({
            width: 0,
            height: 0,
            scrollContainer: t
          }), T(), x(d), w({
            updateCache: !0
          })
        }, this.destroy = function() {
          E(d), c && c.forEach((function(t) {
            return (0, i.resetStyles)(t)
          })), c = void 0
        }
      }
      f.init = function(t) {
        if ("undefined" == typeof window) throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");
        return new f(t)
      };
      var d = f;
      e.default = d
    },
    6205: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      e.default = function t(e, r, n) {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var i = e.getBoundingClientRect();
        if (r.scrollContainer) {
          var s = r.scrollContainer.getBoundingClientRect();
          i = {
            top: i.top - s.top,
            right: i.right - s.left,
            bottom: i.bottom - s.top,
            left: i.left - s.left
          }
        }
        this.height = e.offsetHeight, this.width = e.offsetWidth, this.left = i.left + n.x, this.right = i.right + n.x, this.top = i.top + n.y, this.bottom = i.bottom + n.y, this.originTotalDistY = r.height + this.height, this.originTotalDistX = r.width + this.width
      }
    },
    9036: (t, e) => {
      "use strict";

      function r(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.Scroll = void 0;
      var n = function() {
        function t() {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.setScroll.apply(this, arguments)
        }
        var e, n;
        return e = t, (n = [{
          key: "setScroll",
          value: function(t, e) {
            return this.x = t, this.y = e, this
          }
        }]) && r(e.prototype, n), t
      }();
      e.Scroll = n
    },
    4433: (t, e) => {
      "use strict";

      function r(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.View = void 0;
      var n = function() {
        function t(e) {
          var r = e.width,
            n = e.height,
            i = e.scrollContainer;
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.scrollContainer = i, this.setSize(r, n)
        }
        var e, n;
        return e = t, (n = [{
          key: "setSize",
          value: function(t, e) {
            return this.width = t, this.height = e, this
          }
        }]) && r(e.prototype, n), t
      }();
      e.View = n
    },
    6741: (t, e, r) => {
      "use strict";

      function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== n(t) && "function" != typeof t) return {
            default: t
          };
          var e = h();
          if (e && e.has(t)) return e.get(t);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in t)
            if (Object.prototype.hasOwnProperty.call(t, s)) {
              var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
              a && (a.get || a.set) ? Object.defineProperty(r, s, a) : r[s] = t[s]
            } return r.default = t, e && e.set(t, r), r
        }(r(822)),
        s = l(r(9109)),
        a = l(r(7338)),
        o = l(r(6374));

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function h() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return h = function() {
          return t
        }, t
      }

      function p(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      function u(t, e) {
        return u = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, u(t, e)
      }

      function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function f(t) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, f(t)
      }

      function d(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
      var m = function(t) {
        ! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && u(t, e)
        }(h, t);
        var e, r, s, o, l = (s = h, o = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }(), function() {
          var t, e = f(s);
          if (o) {
            var r = f(this).constructor;
            t = Reflect.construct(e, arguments, r)
          } else t = e.apply(this, arguments);
          return function(t, e) {
            return !e || "object" !== n(e) && "function" != typeof e ? c(t) : e
          }(this, t)
        });

        function h() {
          var t;
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, h);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          return d(c(t = l.call.apply(l, [this].concat(r))), "mapRefOuter", (function(e) {
            t._outer = e
          })), d(c(t), "mapRefInner", (function(e) {
            t._inner = e
          })), t
        }
        return e = h, (r = [{
          key: "componentDidMount",
          value: function() {
            var t = this.controller instanceof a.default;
            if (!this.controller && !t) throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.");
            this.element = this.controller.createElement(this._getElementOptions())
          }
        }, {
          key: "componentDidUpdate",
          value: function(t) {
            this.props.disabled === t.disabled && this.props.x[0] === t.x[0] && this.props.x[1] === t.x[1] && this.props.y[0] === t.y[0] && this.props.y[1] === t.y[1] || this.controller.updateElementPropsById(this.element.id, this._getElementOptions().props), this.props.disabled !== t.disabled && this.props.disabled && this.controller.resetElementStyles(this.element)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller.removeElementById(this.element.id)
          }
        }, {
          key: "_getElementOptions",
          value: function() {
            return {
              elInner: this._inner,
              elOuter: this._outer,
              props: {
                disabled: this.props.disabled,
                x0: this.props.x[0],
                x1: this.props.x[1],
                y0: this.props.y[0],
                y1: this.props.y[1]
              }
            }
          }
        }, {
          key: "controller",
          get: function() {
            return this.props.parallaxController
          }
        }, {
          key: "render",
          value: function() {
            var t = this.props,
              e = t.children,
              r = t.className,
              n = t.tagOuter,
              s = t.tagInner,
              a = t.styleOuter,
              o = t.styleInner,
              l = "parallax-outer" + (r ? " ".concat(r) : "");
            return i.default.createElement(n, {
              className: l,
              ref: this.mapRefOuter,
              style: a
            }, i.default.createElement(s, {
              className: "parallax-inner",
              ref: this.mapRefInner,
              style: o
            }, e))
          }
        }]) && p(e.prototype, r), h
      }(i.Component);
      d(m, "defaultProps", {
        disabled: !1,
        tagInner: "div",
        tagOuter: "div",
        x: [0, 0],
        y: [0, 0]
      }), d(m, "propTypes", {
        children: s.default.node,
        className: s.default.string,
        disabled: s.default.bool.isRequired,
        parallaxController: s.default.object,
        styleInner: s.default.object,
        styleOuter: s.default.object,
        tagInner: s.default.string.isRequired,
        tagOuter: s.default.string.isRequired,
        x: s.default.arrayOf(s.default.oneOfType([s.default.string, s.default.number])),
        y: s.default.arrayOf(s.default.oneOfType([s.default.string, s.default.number]))
      });
      var g = (0, o.default)(m);
      e.default = g
    },
    1041: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = a(r(822)),
        i = a(r(9109)),
        s = a(r(6741));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function o() {
        return o = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }, o.apply(this, arguments)
      }

      function l(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? l(Object(r), !0).forEach((function(e) {
            p(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }

      function p(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
      var u = {
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "50vh"
        },
        c = {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        f = function(t) {
          var e = t.children,
            r = t.className,
            i = t.layers,
            a = t.style,
            l = t.disabled;
          return n.default.createElement("div", {
            style: h(h({}, u), a),
            className: "parallax-banner" + (r ? " ".concat(r) : "")
          }, i.map((function(t, e) {
            var r = t.amount,
              i = t.children,
              a = t.expanded,
              p = void 0 === a || a,
              u = t.image,
              f = t.props,
              d = void 0 === f ? {} : f,
              m = d.style || {},
              g = d.className || "";
            delete d.style, delete d.className;
            var v = "parallax-banner-layer-".concat(e).concat(g ? " ".concat(g) : ""),
              y = p ? {
                top: 100 * Math.abs(r) * -1 + "%",
                bottom: 100 * Math.abs(r) * -1 + "%"
              } : {},
              b = u ? {
                backgroundImage: "url(".concat(u, ")"),
                backgroundPosition: "center",
                backgroundSize: "cover"
              } : {};
            return n.default.createElement(s.default, {
              key: "layer-".concat(e),
              y: [-1 * r * 100 + "%", 100 * r + "%"],
              styleInner: c,
              styleOuter: c,
              disabled: l
            }, n.default.createElement("div", o({
              className: v,
              style: h(h(h(h({}, b), c), y), m)
            }, d), i))
          })), e)
        };
      f.defaultProps = {
        disabled: !1
      }, f.propTypes = {
        children: i.default.node,
        className: i.default.string,
        disabled: i.default.bool.isRequired,
        layers: i.default.arrayOf(i.default.shape({
          amount: i.default.number.isRequired,
          children: i.default.oneOfType([i.default.node, i.default.func]),
          expanded: i.default.bool,
          image: i.default.string,
          props: i.default.object
        })),
        style: i.default.object
      };
      var d = f;
      e.default = d
    },
    4799: (t, e, r) => {
      "use strict";

      function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== n(t) && "function" != typeof t) return {
            default: t
          };
          var e = u();
          if (e && e.has(t)) return e.get(t);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in t)
            if (Object.prototype.hasOwnProperty.call(t, s)) {
              var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
              a && (a.get || a.set) ? Object.defineProperty(r, s, a) : r[s] = t[s]
            } return r.default = t, e && e.set(t, r), r
        }(r(822)),
        s = p(r(9109)),
        a = p(r(8769)),
        o = p(r(7338)),
        l = r(2290),
        h = p(r(7639));

      function p(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function u() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return u = function() {
          return t
        }, t
      }

      function c(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      function f(t, e) {
        return f = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, f(t, e)
      }

      function d(t) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, d(t)
      }

      function m(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
      var g = function(t) {
        ! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && f(t, e)
        }(p, t);
        var e, r, s, l, h = (s = p, l = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }(), function() {
          var t, e = d(s);
          if (l) {
            var r = d(this).constructor;
            t = Reflect.construct(e, arguments, r)
          } else t = e.apply(this, arguments);
          return function(t, e) {
            return !e || "object" !== n(e) && "function" != typeof e ? function(t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t
            }(t) : e
          }(this, t)
        });

        function p(t) {
          var e, r;
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, p), (e = h.call(this, t)).controller = (r = {
            scrollAxis: t.scrollAxis,
            scrollContainer: t.scrollContainer
          }, "undefined" == typeof window ? null : o.default.init(r)), e
        }
        return e = p, (r = [{
          key: "componentDidUpdate",
          value: function(t) {
            t.scrollContainer !== this.props.scrollContainer && this.controller.updateScrollContainer(this.props.scrollContainer)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller = this.controller.destroy()
          }
        }, {
          key: "render",
          value: function() {
            var t = this.props.children;
            return i.default.createElement(a.default.Provider, {
              value: this.controller
            }, t)
          }
        }]) && c(e.prototype, r), p
      }(i.Component);
      e.default = g, m(g, "defaultProps", {
        scrollAxis: l.VERTICAL
      }), m(g, "propTypes", {
        children: s.default.node.isRequired,
        scrollAxis: s.default.oneOf([l.VERTICAL, l.HORIZONTAL]),
        scrollContainer: h.default
      })
    },
    3338: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n, i = r(822),
        s = (n = r(8769)) && n.__esModule ? n : {
          default: n
        };
      e.default = function() {
        var t = (0, i.useContext)(s.default);
        if ("undefined" == typeof window) return null;
        if (!t) throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");
        return {
          parallaxController: t
        }
      }
    },
    6374: (t, e, r) => {
      "use strict";

      function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== n(t) && "function" != typeof t) return {
            default: t
          };
          var e = l();
          if (e && e.has(t)) return e.get(t);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var s in t)
            if (Object.prototype.hasOwnProperty.call(t, s)) {
              var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
              a && (a.get || a.set) ? Object.defineProperty(r, s, a) : r[s] = t[s]
            } return r.default = t, e && e.set(t, r), r
        }(r(822)),
        s = o(r(9109)),
        a = o(r(8769));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function l() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return l = function() {
          return t
        }, t
      }

      function h() {
        return h = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }, h.apply(this, arguments)
      }

      function p(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      function u(t, e) {
        return u = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, u(t, e)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      e.default = function(t) {
        var e, r, o, l = function(e) {
          ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), e && u(t, e)
          }(d, e);
          var r, s, o, l, f = (o = d, l = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
              return !1
            }
          }(), function() {
            var t, e = c(o);
            if (l) {
              var r = c(this).constructor;
              t = Reflect.construct(e, arguments, r)
            } else t = e.apply(this, arguments);
            return function(t, e) {
              return !e || "object" !== n(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
              }(t) : e
            }(this, t)
          });

          function d() {
            return function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, d), f.apply(this, arguments)
          }
          return r = d, (s = [{
            key: "render",
            value: function() {
              var e = this;
              return i.default.createElement(a.default.Consumer, null, (function(r) {
                return i.default.createElement(t, h({
                  parallaxController: r
                }, e.props))
              }))
            }
          }]) && p(r.prototype, s), d
        }(i.Component);
        return e = l, r = "propTypes", o = {
          parallaxController: s.default.object
        }, r in e ? Object.defineProperty(e, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[r] = o, l
      }
    },
    2290: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.HORIZONTAL = e.VERTICAL = void 0, e.VERTICAL = "vertical", e.HORIZONTAL = "horizontal"
    },
    8769: (t, e, r) => {
      "use strict";
      var n;
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = ((n = r(822)) && n.__esModule ? n : {
        default: n
      }).default.createContext(null);
      e.default = i
    },
    9777: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.setParallaxStyles = function(t, e, r) {
        var i = (0, n.getParallaxOffsets)(e, r),
          s = i.x,
          a = s.value,
          o = s.unit,
          l = i.y,
          h = l.value,
          p = l.unit;
        t.style.transform = "translate3d(".concat(a).concat(o, ", ").concat(h).concat(p, ", 0)")
      }, e.resetStyles = function(t) {
        t.elInner.style.transform = ""
      };
      var n = r(2312)
    },
    9664: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t) {
        var e = t.y0,
          r = t.y1,
          i = t.x1,
          s = t.x0,
          a = (0, n.parseValueAndUnit)(e),
          o = (0, n.parseValueAndUnit)(r),
          l = (0, n.parseValueAndUnit)(s),
          h = (0, n.parseValueAndUnit)(i);
        if (l.unit !== h.unit || a.unit !== o.unit) throw new Error("Must provide matching units for the min and max offset values of each axis.");
        return {
          xUnit: l.unit || "%",
          yUnit: a.unit || "%",
          y0: a,
          y1: o,
          x0: l,
          x1: h
        }
      };
      var n = r(6870)
    },
    2312: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.getParallaxOffsets = function(t, e) {
        var r = t.y0,
          i = t.y1,
          s = t.x0,
          a = t.x1,
          o = i.unit,
          l = a.unit;
        return {
          x: {
            value: (0, n.scaleBetween)(e, s.value, a.value, 0, 100),
            unit: l
          },
          y: {
            value: (0, n.scaleBetween)(e, r.value, i.value, 0, 100),
            unit: o
          }
        }
      };
      var n = r(6870)
    },
    3738: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "ParallaxContext", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(e, "percentMoved", {
        enumerable: !0,
        get: function() {
          return i.percentMoved
        }
      }), Object.defineProperty(e, "setParallaxStyles", {
        enumerable: !0,
        get: function() {
          return s.setParallaxStyles
        }
      }), Object.defineProperty(e, "resetStyles", {
        enumerable: !0,
        get: function() {
          return s.resetStyles
        }
      }), Object.defineProperty(e, "getParallaxOffsets", {
        enumerable: !0,
        get: function() {
          return a.getParallaxOffsets
        }
      }), Object.defineProperty(e, "isElementInView", {
        enumerable: !0,
        get: function() {
          return o.isElementInView
        }
      }), Object.defineProperty(e, "getOffsets", {
        enumerable: !0,
        get: function() {
          return l.default
        }
      });
      var n = h(r(8769)),
        i = r(8204),
        s = r(9777),
        a = r(2312),
        o = r(8439),
        l = h(r(9664));

      function h(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    8439: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.isElementInView = function(t, e, r, n) {
        var i = t - n,
          s = e - n;
        return i >= 0 && i <= r || s >= 0 && s <= r || i <= 0 && s >= r
      }
    },
    8204: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.percentMoved = function(t, e, r, n) {
        return (-1 * (t - n) + r) / e * 100
      }
    },
    9917: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "bc", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(e, "VS", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(e, "Xu", {
        enumerable: !0,
        get: function() {
          return s.default
        }
      }), Object.defineProperty(e, "UG", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      });
      var n = o(r(3338)),
        i = (o(r(6374)), o(r(6741))),
        s = o(r(4799)),
        a = o(r(1041));
      o(r(8769));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    9639: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.createId = function() {
        return ++r
      };
      var r = 0
    },
    6870: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "parseValueAndUnit", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(e, "scaleBetween", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(e, "testForPassiveScroll", {
        enumerable: !0,
        get: function() {
          return s.default
        }
      }), Object.defineProperty(e, "createId", {
        enumerable: !0,
        get: function() {
          return a.createId
        }
      });
      var n = o(r(7872)),
        i = o(r(6626)),
        s = o(r(5823)),
        a = r(9639);

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    7872: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          value: 0,
          unit: "px"
        };
        if ("number" != typeof t && "string" != typeof t) throw new Error("Invalid value provided. Must provide a value as a string or number");
        if (t = String(t), e.value = parseFloat(t, 10), e.unit = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "%", !["px", "%"].find((function(t) {
            return t === e.unit
          }))) throw new Error("Invalid unit provided. Must provide a unit of px in or %");
        return e
      }
    },
    6626: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e, r, n, i) {
        return (r - e) * (t - n) / (i - n) + e
      }
    },
    5823: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0
            }
          });
          window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
        } catch (t) {}
        return t
      }
    },
    7639: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ANONYMOUS";
        return "undefined" == typeof window || !t[e] || t[e] instanceof window.Element ? null : new Error('Prop name "'.concat(e, '" in <').concat(r, "> must be an HTML DOM element."))
      }
    },
    9195: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        },
        i = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
          }
          return function(e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), e
          }
        }(),
        s = f(r(822)),
        a = f(r(9109)),
        o = f(r(3026)),
        l = f(r(5738)),
        h = f(r(6383)),
        p = f(r(1070)),
        u = f(r(7193)),
        c = r(9610);

      function f(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function d(t, e) {
        return t.scrollWidth - 1 <= e
      }

      function m(t, e) {
        return t.scrollHeight - 1 <= e
      }
      var g = function(t) {
        function e(t) {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var r = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
          }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return r.state = {
            fontSize: null,
            ready: !1
          }, r.handleWindowResize = function() {
            r.process()
          }, "perfectFit" in t && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, p.default)(r.handleWindowResize, t.throttle), r
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t), i(e, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(t) {
            this.state.ready && ((0, o.default)(this.props, t) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, u.default)()
          }
        }, {
          key: "process",
          value: function() {
            var t = this,
              e = this.props,
              r = e.min,
              n = e.max,
              i = e.mode,
              s = e.forceSingleModeWidth,
              a = e.onReady,
              o = this._parent,
              p = this._child,
              f = (0, c.innerWidth)(o),
              g = (0, c.innerHeight)(o);
            if (g <= 0 || isNaN(g)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (f <= 0 || isNaN(f)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var v = (0, u.default)();
              this.pid = v;
              var y = function() {
                  return v !== t.pid
                },
                b = "multi" === i ? function() {
                  return m(p, g)
                } : function() {
                  return d(p, f)
                },
                _ = "multi" === i ? function() {
                  return d(p, f)
                } : function() {
                  return m(p, g)
                },
                x = void 0,
                E = r,
                S = n;
              this.setState({
                ready: !1
              }), (0, l.default)([function(e) {
                return (0, h.default)((function() {
                  return E <= S
                }), (function(e) {
                  if (y()) return e(!0);
                  x = parseInt((E + S) / 2, 10), t.setState({
                    fontSize: x
                  }, (function() {
                    return y() ? e(!0) : (b() ? E = x + 1 : S = x - 1, e())
                  }))
                }), e)
              }, function(e) {
                return "single" === i && s || _() ? e() : (E = r, S = x, (0, h.default)((function() {
                  return E < S
                }), (function(e) {
                  if (y()) return e(!0);
                  x = parseInt((E + S) / 2, 10), t.setState({
                    fontSize: x
                  }, (function() {
                    return v !== t.pid ? e(!0) : (_() ? E = x + 1 : S = x - 1, e())
                  }))
                }), e))
              }, function(e) {
                if (x = Math.min(E, S), x = Math.max(x, r), x = Math.min(x, n), x = Math.max(x, 0), y()) return e(!0);
                t.setState({
                  fontSize: x
                }, e)
              }], (function(e) {
                e || y() || t.setState({
                  ready: !0
                }, (function() {
                  return a(x)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var t = this,
              e = this.props,
              r = e.children,
              i = e.text,
              a = e.style,
              o = (e.min, e.max, e.mode),
              l = (e.forceWidth, e.forceSingleModeWidth, e.throttle, e.autoResize, e.onReady, function(t, e) {
                var r = {};
                for (var n in t) e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
                return r
              }(e, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              h = this.state,
              p = h.fontSize,
              u = h.ready,
              c = n({}, a, {
                fontSize: p
              }),
              f = {
                display: u ? "block" : "inline-block"
              };
            return "single" === o && (f.whiteSpace = "nowrap"), s.default.createElement("div", n({
              ref: function(e) {
                return t._parent = e
              },
              style: c
            }, l), s.default.createElement("div", {
              ref: function(e) {
                return t._child = e
              },
              style: f
            }, i && "function" == typeof r ? u ? r(i) : i : r))
          }
        }]), e
      }(s.default.Component);
      g.propTypes = {
        children: a.default.node,
        text: a.default.string,
        min: a.default.number,
        max: a.default.number,
        mode: a.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: a.default.bool,
        throttle: a.default.number,
        onReady: a.default.func
      }, g.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, e.default = g
    },
    4582: (t, e, r) => {
      "use strict";
      e.iF = void 0;
      var n, i = (n = r(9195)) && n.__esModule ? n : {
        default: n
      };
      e.iF = i.default, i.default
    },
    9610: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.innerHeight = function(t) {
        var e = window.getComputedStyle(t, null);
        return e ? t.clientHeight - parseInt(e.getPropertyValue("padding-top"), 10) - parseInt(e.getPropertyValue("padding-bottom"), 10) : t.clientHeight
      }, e.innerWidth = function(t) {
        var e = window.getComputedStyle(t, null);
        return e ? t.clientWidth - parseInt(e.getPropertyValue("padding-left"), 10) - parseInt(e.getPropertyValue("padding-right"), 10) : t.clientWidth
      }
    },
    5738: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var r = [],
          n = 0,
          s = !0;

        function a(t) {
          function n() {
            e && e(t, r)
          }
          s ? i.default.nextTick(n) : n()
        }
        t.length > 0 ? t[0]((function e(i, s) {
          r.push(s), ++n >= t.length || i ? a(i) : t[n](e)
        })) : a(null), s = !1
      };
      var n, i = (n = r(6275)) && n.__esModule ? n : {
        default: n
      }
    },
    3026: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        if (t === e) return !0;
        var r = Object.keys(t),
          n = Object.keys(e);
        if (r.length !== n.length) return !1;
        for (var i = Object.prototype.hasOwnProperty, s = 0; s < r.length; s++)
          if (!i.call(e, r[s]) || t[r[s]] !== e[r[s]]) return !1;
        return !0
      }
    },
    1070: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var r = void 0,
          n = void 0,
          i = void 0,
          s = void 0,
          a = 0;

        function o() {
          s = 0, a = +new Date, i = t.apply(r, n), r = null, n = null
        }
        return function() {
          r = this, n = arguments;
          var t = new Date - a;
          return s || (t >= e ? o() : s = setTimeout(o, e - t)), i
        }
      }
    },
    7193: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function() {
        return r++
      };
      var r = 0
    },
    6383: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        t() ? e((function r(i) {
          for (var s = arguments.length, a = Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) a[o - 1] = arguments[o];
          i ? n(i) : t.apply(this, a) ? e(r) : n(null)
        })) : n(null)
      };
      var r = function() {}
    },
    2848: (t, e, r) => {
      "use strict";
      r.d(e, {
        Z: () => l
      });
      const n = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let i;
      const s = new Uint8Array(16);

      function a() {
        if (!i && (i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return i(s)
      }
      const o = [];
      for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
      const l = function(t, e, r) {
        if (n.randomUUID && !e && !t) return n.randomUUID();
        const i = (t = t || {}).random || (t.rng || a)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, e) {
          r = r || 0;
          for (let t = 0; t < 16; ++t) e[r + t] = i[t];
          return e
        }
        return function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (o[t[e + 0]] + o[t[e + 1]] + o[t[e + 2]] + o[t[e + 3]] + "-" + o[t[e + 4]] + o[t[e + 5]] + "-" + o[t[e + 6]] + o[t[e + 7]] + "-" + o[t[e + 8]] + o[t[e + 9]] + "-" + o[t[e + 10]] + o[t[e + 11]] + o[t[e + 12]] + o[t[e + 13]] + o[t[e + 14]] + o[t[e + 15]]).toLowerCase()
        }(i)
      }
    },
    3797: (t, e, r) => {
      "use strict";
      r.d(e, {
        tq: () => _,
        o5: () => E
      });
      var n = r(822),
        i = r(3195);

      function s(t) {
        return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1)
      }

      function a(t, e) {
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(e).filter((t => r.indexOf(t) < 0)).forEach((r => {
          void 0 === t[r] ? t[r] = e[r] : s(e[r]) && s(t[r]) && Object.keys(e[r]).length > 0 ? e[r].__swiper__ ? t[r] = e[r] : a(t[r], e[r]) : t[r] = e[r]
        }))
      }

      function o() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return t.navigation && void 0 === t.navigation.nextEl && void 0 === t.navigation.prevEl
      }

      function l() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return t.pagination && void 0 === t.pagination.el
      }

      function h() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return t.scrollbar && void 0 === t.scrollbar.el
      }

      function p() {
        const t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(" ").map((t => t.trim())).filter((t => !!t)),
          e = [];
        return t.forEach((t => {
          e.indexOf(t) < 0 && e.push(t)
        })), e.join(" ")
      }
      const u = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"],
        c = (t, e) => {
          let r = e.slidesPerView;
          if (e.breakpoints) {
            const t = i.ZP.prototype.getBreakpoint(e.breakpoints),
              n = t in e.breakpoints ? e.breakpoints[t] : void 0;
            n && n.slidesPerView && (r = n.slidesPerView)
          }
          let n = Math.ceil(parseFloat(e.loopedSlides || r, 10));
          return n += e.loopAdditionalSlides, n > t.length && e.loopedSlidesLimit && (n = t.length), n
        };

      function f(t) {
        return t.type && t.type.displayName && t.type.displayName.includes("SwiperSlide")
      }

      function d(t) {
        const e = [];
        return n.Children.toArray(t).forEach((t => {
          f(t) ? e.push(t) : t.props && t.props.children && d(t.props.children).forEach((t => e.push(t)))
        })), e
      }

      function m(t) {
        const e = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return n.Children.toArray(t).forEach((t => {
          if (f(t)) e.push(t);
          else if (t.props && t.props.slot && r[t.props.slot]) r[t.props.slot].push(t);
          else if (t.props && t.props.children) {
            const n = d(t.props.children);
            n.length > 0 ? n.forEach((t => e.push(t))) : r["container-end"].push(t)
          } else r["container-end"].push(t)
        })), {
          slides: e,
          slots: r
        }
      }

      function g(t, e) {
        return "undefined" == typeof window ? (0, n.useEffect)(t, e) : (0, n.useLayoutEffect)(t, e)
      }
      const v = (0, n.createContext)(null),
        y = (0, n.createContext)(null);

      function b() {
        return b = Object.assign ? Object.assign.bind() : function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }, b.apply(this, arguments)
      }
      const _ = (0, n.forwardRef)((function(t, e) {
        let {
          className: r,
          tag: f = "div",
          wrapperTag: d = "div",
          children: v,
          onSwiper: _,
          ...x
        } = void 0 === t ? {} : t, E = !1;
        const [S, P] = (0, n.useState)("swiper"), [w, C] = (0, n.useState)(null), [T, A] = (0, n.useState)(!1), M = (0, n.useRef)(!1), k = (0, n.useRef)(null), D = (0, n.useRef)(null), I = (0, n.useRef)(null), F = (0, n.useRef)(null), O = (0, n.useRef)(null), R = (0, n.useRef)(null), L = (0, n.useRef)(null), B = (0, n.useRef)(null), {
          params: V,
          passedParams: z,
          rest: j,
          events: N
        } = function() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const r = {
              on: {}
            },
            n = {},
            o = {};
          a(r, i.ZP.defaults), a(r, i.ZP.extendedDefaults), r._emitClasses = !0, r.init = !1;
          const l = {},
            h = u.map((t => t.replace(/_/, ""))),
            p = Object.assign({}, t);
          return Object.keys(p).forEach((i => {
            void 0 !== t[i] && (h.indexOf(i) >= 0 ? s(t[i]) ? (r[i] = {}, o[i] = {}, a(r[i], t[i]), a(o[i], t[i])) : (r[i] = t[i], o[i] = t[i]) : 0 === i.search(/on[A-Z]/) && "function" == typeof t[i] ? e ? n[`${i[2].toLowerCase()}${i.substr(3)}`] = t[i] : r.on[`${i[2].toLowerCase()}${i.substr(3)}`] = t[i] : l[i] = t[i])
          })), ["navigation", "pagination", "scrollbar"].forEach((t => {
            !0 === r[t] && (r[t] = {}), !1 === r[t] && delete r[t]
          })), {
            params: r,
            passedParams: o,
            rest: l,
            events: n
          }
        }(x), {
          slides: G,
          slots: $
        } = m(v), H = () => {
          A(!T)
        };
        Object.assign(V.on, {
          _containerClasses(t, e) {
            P(e)
          }
        });
        const W = () => {
          if (Object.assign(V.on, N), E = !0, D.current = new i.ZP(V), D.current.loopCreate = () => {}, D.current.loopDestroy = () => {}, V.loop && (D.current.loopedSlides = c(G, V)), D.current.virtual && D.current.params.virtual.enabled) {
            D.current.virtual.slides = G;
            const t = {
              cache: !1,
              slides: G,
              renderExternal: C,
              renderExternalUpdate: !1
            };
            a(D.current.params.virtual, t), a(D.current.originalParams.virtual, t)
          }
        };
        return k.current || W(), D.current && D.current.on("_beforeBreakpoint", H), (0, n.useEffect)((() => () => {
          D.current && D.current.off("_beforeBreakpoint", H)
        })), (0, n.useEffect)((() => {
          !M.current && D.current && (D.current.emitSlidesClasses(), M.current = !0)
        })), g((() => {
          if (e && (e.current = k.current), k.current) return D.current.destroyed && W(),
            function(t, e) {
              let {
                el: r,
                nextEl: n,
                prevEl: i,
                paginationEl: s,
                scrollbarEl: a,
                swiper: p
              } = t;
              o(e) && n && i && (p.params.navigation.nextEl = n, p.originalParams.navigation.nextEl = n, p.params.navigation.prevEl = i, p.originalParams.navigation.prevEl = i), l(e) && s && (p.params.pagination.el = s, p.originalParams.pagination.el = s), h(e) && a && (p.params.scrollbar.el = a, p.originalParams.scrollbar.el = a), p.init(r)
            }({
              el: k.current,
              nextEl: O.current,
              prevEl: R.current,
              paginationEl: L.current,
              scrollbarEl: B.current,
              swiper: D.current
            }, V), _ && _(D.current), () => {
              D.current && !D.current.destroyed && D.current.destroy(!0, !1)
            }
        }), []), g((() => {
          !E && N && D.current && Object.keys(N).forEach((t => {
            D.current.on(t, N[t])
          }));
          const t = function(t, e, r, n, i) {
            const a = [];
            if (!e) return a;
            const o = t => {
              a.indexOf(t) < 0 && a.push(t)
            };
            if (r && n) {
              const t = n.map(i),
                e = r.map(i);
              t.join("") !== e.join("") && o("children"), n.length !== r.length && o("children")
            }
            return u.filter((t => "_" === t[0])).map((t => t.replace(/_/, ""))).forEach((r => {
              if (r in t && r in e)
                if (s(t[r]) && s(e[r])) {
                  const n = Object.keys(t[r]),
                    i = Object.keys(e[r]);
                  n.length !== i.length ? o(r) : (n.forEach((n => {
                    t[r][n] !== e[r][n] && o(r)
                  })), i.forEach((n => {
                    t[r][n] !== e[r][n] && o(r)
                  })))
                } else t[r] !== e[r] && o(r)
            })), a
          }(z, I.current, G, F.current, (t => t.key));
          return I.current = z, F.current = G, t.length && D.current && !D.current.destroyed && function(t) {
            let {
              swiper: e,
              slides: r,
              passedParams: n,
              changedParams: i,
              nextEl: o,
              prevEl: l,
              scrollbarEl: h,
              paginationEl: p
            } = t;
            const u = i.filter((t => "children" !== t && "direction" !== t)),
              {
                params: c,
                pagination: f,
                navigation: d,
                scrollbar: m,
                virtual: g,
                thumbs: v
              } = e;
            let y, b, _, x, E;
            i.includes("thumbs") && n.thumbs && n.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (y = !0), i.includes("controller") && n.controller && n.controller.control && c.controller && !c.controller.control && (b = !0), i.includes("pagination") && n.pagination && (n.pagination.el || p) && (c.pagination || !1 === c.pagination) && f && !f.el && (_ = !0), i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || h) && (c.scrollbar || !1 === c.scrollbar) && m && !m.el && (x = !0), i.includes("navigation") && n.navigation && (n.navigation.prevEl || l) && (n.navigation.nextEl || o) && (c.navigation || !1 === c.navigation) && d && !d.prevEl && !d.nextEl && (E = !0), u.forEach((t => {
              if (s(c[t]) && s(n[t])) a(c[t], n[t]);
              else {
                const i = n[t];
                !0 !== i && !1 !== i || "navigation" !== t && "pagination" !== t && "scrollbar" !== t ? c[t] = n[t] : !1 === i && e[r = t] && (e[r].destroy(), "navigation" === r ? (c[r].prevEl = void 0, c[r].nextEl = void 0, e[r].prevEl = void 0, e[r].nextEl = void 0) : (c[r].el = void 0, e[r].el = void 0))
              }
              var r
            })), u.includes("controller") && !b && e.controller && e.controller.control && c.controller && c.controller.control && (e.controller.control = c.controller.control), i.includes("children") && r && g && c.virtual.enabled ? (g.slides = r, g.update(!0)) : i.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(), y && v.init() && v.update(!0), b && (e.controller.control = c.controller.control), _ && (p && (c.pagination.el = p), f.init(), f.render(), f.update()), x && (h && (c.scrollbar.el = h), m.init(), m.updateSize(), m.setTranslate()), E && (o && (c.navigation.nextEl = o), l && (c.navigation.prevEl = l), d.init(), d.update()), i.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext), i.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev), i.includes("direction") && e.changeDirection(n.direction, !1), e.update()
          }({
            swiper: D.current,
            slides: G,
            passedParams: z,
            changedParams: t,
            nextEl: O.current,
            prevEl: R.current,
            scrollbarEl: B.current,
            paginationEl: L.current
          }), () => {
            N && D.current && Object.keys(N).forEach((t => {
              D.current.off(t, N[t])
            }))
          }
        })), g((() => {
          var t;
          !(t = D.current) || t.destroyed || !t.params.virtual || t.params.virtual && !t.params.virtual.enabled || (t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load(), t.parallax && t.params.parallax && t.params.parallax.enabled && t.parallax.setTranslate())
        }), [w]), n.createElement(f, b({
          ref: k,
          className: p(`${S}${r?` ${r}`:""}`)
        }, j), n.createElement(y.Provider, {
          value: D.current
        }, $["container-start"], n.createElement(d, {
          className: "swiper-wrapper"
        }, $["wrapper-start"], V.virtual ? function(t, e, r) {
          if (!r) return null;
          const i = t.isHorizontal() ? {
            [t.rtlTranslate ? "right" : "left"]: `${r.offset}px`
          } : {
            top: `${r.offset}px`
          };
          return e.filter(((t, e) => e >= r.from && e <= r.to)).map((e => n.cloneElement(e, {
            swiper: t,
            style: i
          })))
        }(D.current, G, w) : !V.loop || D.current && D.current.destroyed ? G.map((t => n.cloneElement(t, {
          swiper: D.current
        }))) : function(t, e, r) {
          const i = e.map(((e, r) => n.cloneElement(e, {
            swiper: t,
            "data-swiper-slide-index": r
          })));

          function s(t, e, i) {
            return n.cloneElement(t, {
              key: `${t.key}-duplicate-${e}-${i}`,
              className: `${t.props.className||""} ${r.slideDuplicateClass}`
            })
          }
          if (r.loopFillGroupWithBlank) {
            const t = r.slidesPerGroup - i.length % r.slidesPerGroup;
            if (t !== r.slidesPerGroup)
              for (let e = 0; e < t; e += 1) {
                const t = n.createElement("div", {
                  className: `${r.slideClass} ${r.slideBlankClass}`
                });
                i.push(t)
              }
          }
          "auto" !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = i.length);
          const a = c(i, r),
            o = [],
            l = [];
          for (let t = 0; t < a; t += 1) {
            const e = t - Math.floor(t / i.length) * i.length;
            l.push(s(i[e], t, "append")), o.unshift(s(i[i.length - e - 1], t, "prepend"))
          }
          return t && (t.loopedSlides = a), [...o, ...i, ...l]
        }(D.current, G, V), $["wrapper-end"]), o(V) && n.createElement(n.Fragment, null, n.createElement("div", {
          ref: R,
          className: "swiper-button-prev"
        }), n.createElement("div", {
          ref: O,
          className: "swiper-button-next"
        })), h(V) && n.createElement("div", {
          ref: B,
          className: "swiper-scrollbar"
        }), l(V) && n.createElement("div", {
          ref: L,
          className: "swiper-pagination"
        }), $["container-end"]))
      }));

      function x() {
        return x = Object.assign ? Object.assign.bind() : function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }, x.apply(this, arguments)
      }
      _.displayName = "Swiper";
      const E = (0, n.forwardRef)((function(t, e) {
        let {
          tag: r = "div",
          children: i,
          className: s = "",
          swiper: a,
          zoom: o,
          virtualIndex: l,
          ...h
        } = void 0 === t ? {} : t;
        const u = (0, n.useRef)(null),
          [c, f] = (0, n.useState)("swiper-slide");

        function d(t, e, r) {
          e === u.current && f(r)
        }
        g((() => {
          if (e && (e.current = u.current), u.current && a) {
            if (!a.destroyed) return a.on("_slideClass", d), () => {
              a && a.off("_slideClass", d)
            };
            "swiper-slide" !== c && f("swiper-slide")
          }
        })), g((() => {
          a && u.current && !a.destroyed && f(a.getSlideClasses(u.current))
        }), [a]);
        const m = {
            isActive: c.indexOf("swiper-slide-active") >= 0 || c.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: c.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: c.indexOf("swiper-slide-duplicate") >= 0,
            isPrev: c.indexOf("swiper-slide-prev") >= 0 || c.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext: c.indexOf("swiper-slide-next") >= 0 || c.indexOf("swiper-slide-duplicate-next") >= 0
          },
          y = () => "function" == typeof i ? i(m) : i;
        return n.createElement(r, x({
          ref: u,
          className: p(`${c}${s?` ${s}`:""}`),
          "data-swiper-slide-index": l
        }, h), n.createElement(v.Provider, {
          value: m
        }, o ? n.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, y()) : y()))
      }));
      E.displayName = "SwiperSlide"
    },
    3195: (t, e, r) => {
      "use strict";

      function n(t) {
        return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
      }

      function i() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(e).forEach((r => {
          void 0 === t[r] ? t[r] = e[r] : n(e[r]) && n(t[r]) && Object.keys(e[r]).length > 0 && i(t[r], e[r])
        }))
      }
      r.d(e, {
        Rv: () => at,
        W_: () => rt,
        tl: () => it,
        o3: () => st,
        ZP: () => tt
      });
      const s = {
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
        const t = "undefined" != typeof document ? document : {};
        return i(t, s), t
      }
      const o = {
        document: s,
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
        requestAnimationFrame: t => "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
        cancelAnimationFrame(t) {
          "undefined" != typeof setTimeout && clearTimeout(t)
        }
      };

      function l() {
        const t = "undefined" != typeof window ? window : {};
        return i(t, o), t
      }

      function h(t) {
        return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
      }

      function p() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(e).forEach((r => {
          void 0 === t[r] ? t[r] = e[r] : h(e[r]) && h(t[r]) && Object.keys(e[r]).length > 0 && p(t[r], e[r])
        }))
      }
      const u = {
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

      function c() {
        const t = "undefined" != typeof document ? document : {};
        return p(t, u), t
      }
      const f = {
        document: u,
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
        requestAnimationFrame: t => "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
        cancelAnimationFrame(t) {
          "undefined" != typeof setTimeout && clearTimeout(t)
        }
      };

      function d() {
        const t = "undefined" != typeof window ? window : {};
        return p(t, f), t
      }
      class m extends Array {
        constructor(t) {
          "number" == typeof t ? super(t) : (super(...t || []), function(t) {
            const e = t.__proto__;
            Object.defineProperty(t, "__proto__", {
              get: () => e,
              set(t) {
                e.__proto__ = t
              }
            })
          }(this))
        }
      }

      function g() {
        const t = [];
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((e => {
          Array.isArray(e) ? t.push(...g(e)) : t.push(e)
        })), t
      }

      function v(t, e) {
        return Array.prototype.filter.call(t, e)
      }

      function y(t, e) {
        const r = d(),
          n = c();
        let i = [];
        if (!e && t instanceof m) return t;
        if (!t) return new m(i);
        if ("string" == typeof t) {
          const r = t.trim();
          if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
            let t = "div";
            0 === r.indexOf("<li") && (t = "ul"), 0 === r.indexOf("<tr") && (t = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (t = "tr"), 0 === r.indexOf("<tbody") && (t = "table"), 0 === r.indexOf("<option") && (t = "select");
            const e = n.createElement(t);
            e.innerHTML = r;
            for (let t = 0; t < e.childNodes.length; t += 1) i.push(e.childNodes[t])
          } else i = function(t, e) {
            if ("string" != typeof t) return [t];
            const r = [],
              n = e.querySelectorAll(t);
            for (let t = 0; t < n.length; t += 1) r.push(n[t]);
            return r
          }(t.trim(), e || n)
        } else if (t.nodeType || t === r || t === n) i.push(t);
        else if (Array.isArray(t)) {
          if (t instanceof m) return t;
          i = t
        }
        return new m(function(t) {
          const e = [];
          for (let r = 0; r < t.length; r += 1) - 1 === e.indexOf(t[r]) && e.push(t[r]);
          return e
        }(i))
      }
      y.fn = m.prototype;
      const b = "resize scroll".split(" ");

      function _(t) {
        return function() {
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          if (void 0 === r[0]) {
            for (let e = 0; e < this.length; e += 1) b.indexOf(t) < 0 && (t in this[e] ? this[e][t]() : y(this[e]).trigger(t));
            return this
          }
          return this.on(t, ...r)
        }
      }
      _("click"), _("blur"), _("focus"), _("focusin"), _("focusout"), _("keyup"), _("keydown"), _("keypress"), _("submit"), _("change"), _("mousedown"), _("mousemove"), _("mouseup"), _("mouseenter"), _("mouseleave"), _("mouseout"), _("mouseover"), _("touchstart"), _("touchend"), _("touchmove"), _("resize"), _("scroll");
      const x = {
        addClass: function() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          const n = g(e.map((t => t.split(" "))));
          return this.forEach((t => {
            t.classList.add(...n)
          })), this
        },
        removeClass: function() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          const n = g(e.map((t => t.split(" "))));
          return this.forEach((t => {
            t.classList.remove(...n)
          })), this
        },
        hasClass: function() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          const n = g(e.map((t => t.split(" "))));
          return v(this, (t => n.filter((e => t.classList.contains(e))).length > 0)).length > 0
        },
        toggleClass: function() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          const n = g(e.map((t => t.split(" "))));
          this.forEach((t => {
            n.forEach((e => {
              t.classList.toggle(e)
            }))
          }))
        },
        attr: function(t, e) {
          if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
          for (let r = 0; r < this.length; r += 1)
            if (2 === arguments.length) this[r].setAttribute(t, e);
            else
              for (const e in t) this[r][e] = t[e], this[r].setAttribute(e, t[e]);
          return this
        },
        removeAttr: function(t) {
          for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
          return this
        },
        transform: function(t) {
          for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
          return this
        },
        transition: function(t) {
          for (let e = 0; e < this.length; e += 1) this[e].style.transitionDuration = "string" != typeof t ? `${t}ms` : t;
          return this
        },
        on: function() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          let [n, i, s, a] = e;

          function o(t) {
            const e = t.target;
            if (!e) return;
            const r = t.target.dom7EventData || [];
            if (r.indexOf(t) < 0 && r.unshift(t), y(e).is(i)) s.apply(e, r);
            else {
              const t = y(e).parents();
              for (let e = 0; e < t.length; e += 1) y(t[e]).is(i) && s.apply(t[e], r)
            }
          }

          function l(t) {
            const e = t && t.target && t.target.dom7EventData || [];
            e.indexOf(t) < 0 && e.unshift(t), s.apply(this, e)
          }
          "function" == typeof e[1] && ([n, s, a] = e, i = void 0), a || (a = !1);
          const h = n.split(" ");
          let p;
          for (let t = 0; t < this.length; t += 1) {
            const e = this[t];
            if (i)
              for (p = 0; p < h.length; p += 1) {
                const t = h[p];
                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                  listener: s,
                  proxyListener: o
                }), e.addEventListener(t, o, a)
              } else
                for (p = 0; p < h.length; p += 1) {
                  const t = h[p];
                  e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                    listener: s,
                    proxyListener: l
                  }), e.addEventListener(t, l, a)
                }
          }
          return this
        },
        off: function() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          let [n, i, s, a] = e;
          "function" == typeof e[1] && ([n, s, a] = e, i = void 0), a || (a = !1);
          const o = n.split(" ");
          for (let t = 0; t < o.length; t += 1) {
            const e = o[t];
            for (let t = 0; t < this.length; t += 1) {
              const r = this[t];
              let n;
              if (!i && r.dom7Listeners ? n = r.dom7Listeners[e] : i && r.dom7LiveListeners && (n = r.dom7LiveListeners[e]), n && n.length)
                for (let t = n.length - 1; t >= 0; t -= 1) {
                  const i = n[t];
                  s && i.listener === s || s && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === s ? (r.removeEventListener(e, i.proxyListener, a), n.splice(t, 1)) : s || (r.removeEventListener(e, i.proxyListener, a), n.splice(t, 1))
                }
            }
          }
          return this
        },
        trigger: function() {
          const t = d();
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          const i = r[0].split(" "),
            s = r[1];
          for (let e = 0; e < i.length; e += 1) {
            const n = i[e];
            for (let e = 0; e < this.length; e += 1) {
              const i = this[e];
              if (t.CustomEvent) {
                const e = new t.CustomEvent(n, {
                  detail: s,
                  bubbles: !0,
                  cancelable: !0
                });
                i.dom7EventData = r.filter(((t, e) => e > 0)), i.dispatchEvent(e), i.dom7EventData = [], delete i.dom7EventData
              }
            }
          }
          return this
        },
        transitionEnd: function(t) {
          const e = this;
          return t && e.on("transitionend", (function r(n) {
            n.target === this && (t.call(this, n), e.off("transitionend", r))
          })), this
        },
        outerWidth: function(t) {
          if (this.length > 0) {
            if (t) {
              const t = this.styles();
              return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
            }
            return this[0].offsetWidth
          }
          return null
        },
        outerHeight: function(t) {
          if (this.length > 0) {
            if (t) {
              const t = this.styles();
              return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
            }
            return this[0].offsetHeight
          }
          return null
        },
        styles: function() {
          const t = d();
          return this[0] ? t.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
          if (this.length > 0) {
            const t = d(),
              e = c(),
              r = this[0],
              n = r.getBoundingClientRect(),
              i = e.body,
              s = r.clientTop || i.clientTop || 0,
              a = r.clientLeft || i.clientLeft || 0,
              o = r === t ? t.scrollY : r.scrollTop,
              l = r === t ? t.scrollX : r.scrollLeft;
            return {
              top: n.top + o - s,
              left: n.left + l - a
            }
          }
          return null
        },
        css: function(t, e) {
          const r = d();
          let n;
          if (1 === arguments.length) {
            if ("string" != typeof t) {
              for (n = 0; n < this.length; n += 1)
                for (const e in t) this[n].style[e] = t[e];
              return this
            }
            if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(t)
          }
          if (2 === arguments.length && "string" == typeof t) {
            for (n = 0; n < this.length; n += 1) this[n].style[t] = e;
            return this
          }
          return this
        },
        each: function(t) {
          return t ? (this.forEach(((e, r) => {
            t.apply(e, [e, r])
          })), this) : this
        },
        html: function(t) {
          if (void 0 === t) return this[0] ? this[0].innerHTML : null;
          for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
          return this
        },
        text: function(t) {
          if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
          for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
          return this
        },
        is: function(t) {
          const e = d(),
            r = c(),
            n = this[0];
          let i, s;
          if (!n || void 0 === t) return !1;
          if ("string" == typeof t) {
            if (n.matches) return n.matches(t);
            if (n.webkitMatchesSelector) return n.webkitMatchesSelector(t);
            if (n.msMatchesSelector) return n.msMatchesSelector(t);
            for (i = y(t), s = 0; s < i.length; s += 1)
              if (i[s] === n) return !0;
            return !1
          }
          if (t === r) return n === r;
          if (t === e) return n === e;
          if (t.nodeType || t instanceof m) {
            for (i = t.nodeType ? [t] : t, s = 0; s < i.length; s += 1)
              if (i[s] === n) return !0;
            return !1
          }
          return !1
        },
        index: function() {
          let t, e = this[0];
          if (e) {
            for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
            return t
          }
        },
        eq: function(t) {
          if (void 0 === t) return this;
          const e = this.length;
          if (t > e - 1) return y([]);
          if (t < 0) {
            const r = e + t;
            return y(r < 0 ? [] : [this[r]])
          }
          return y([this[t]])
        },
        append: function() {
          let t;
          const e = c();
          for (let r = 0; r < arguments.length; r += 1) {
            t = r < 0 || arguments.length <= r ? void 0 : arguments[r];
            for (let r = 0; r < this.length; r += 1)
              if ("string" == typeof t) {
                const n = e.createElement("div");
                for (n.innerHTML = t; n.firstChild;) this[r].appendChild(n.firstChild)
              } else if (t instanceof m)
              for (let e = 0; e < t.length; e += 1) this[r].appendChild(t[e]);
            else this[r].appendChild(t)
          }
          return this
        },
        prepend: function(t) {
          const e = c();
          let r, n;
          for (r = 0; r < this.length; r += 1)
            if ("string" == typeof t) {
              const i = e.createElement("div");
              for (i.innerHTML = t, n = i.childNodes.length - 1; n >= 0; n -= 1) this[r].insertBefore(i.childNodes[n], this[r].childNodes[0])
            } else if (t instanceof m)
            for (n = 0; n < t.length; n += 1) this[r].insertBefore(t[n], this[r].childNodes[0]);
          else this[r].insertBefore(t, this[r].childNodes[0]);
          return this
        },
        next: function(t) {
          return this.length > 0 ? t ? this[0].nextElementSibling && y(this[0].nextElementSibling).is(t) ? y([this[0].nextElementSibling]) : y([]) : this[0].nextElementSibling ? y([this[0].nextElementSibling]) : y([]) : y([])
        },
        nextAll: function(t) {
          const e = [];
          let r = this[0];
          if (!r) return y([]);
          for (; r.nextElementSibling;) {
            const n = r.nextElementSibling;
            t ? y(n).is(t) && e.push(n) : e.push(n), r = n
          }
          return y(e)
        },
        prev: function(t) {
          if (this.length > 0) {
            const e = this[0];
            return t ? e.previousElementSibling && y(e.previousElementSibling).is(t) ? y([e.previousElementSibling]) : y([]) : e.previousElementSibling ? y([e.previousElementSibling]) : y([])
          }
          return y([])
        },
        prevAll: function(t) {
          const e = [];
          let r = this[0];
          if (!r) return y([]);
          for (; r.previousElementSibling;) {
            const n = r.previousElementSibling;
            t ? y(n).is(t) && e.push(n) : e.push(n), r = n
          }
          return y(e)
        },
        parent: function(t) {
          const e = [];
          for (let r = 0; r < this.length; r += 1) null !== this[r].parentNode && (t ? y(this[r].parentNode).is(t) && e.push(this[r].parentNode) : e.push(this[r].parentNode));
          return y(e)
        },
        parents: function(t) {
          const e = [];
          for (let r = 0; r < this.length; r += 1) {
            let n = this[r].parentNode;
            for (; n;) t ? y(n).is(t) && e.push(n) : e.push(n), n = n.parentNode
          }
          return y(e)
        },
        closest: function(t) {
          let e = this;
          return void 0 === t ? y([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
        },
        find: function(t) {
          const e = [];
          for (let r = 0; r < this.length; r += 1) {
            const n = this[r].querySelectorAll(t);
            for (let t = 0; t < n.length; t += 1) e.push(n[t])
          }
          return y(e)
        },
        children: function(t) {
          const e = [];
          for (let r = 0; r < this.length; r += 1) {
            const n = this[r].children;
            for (let r = 0; r < n.length; r += 1) t && !y(n[r]).is(t) || e.push(n[r])
          }
          return y(e)
        },
        filter: function(t) {
          return y(v(this, t))
        },
        remove: function() {
          for (let t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
          return this
        }
      };
      Object.keys(x).forEach((t => {
        Object.defineProperty(y.fn, t, {
          value: x[t],
          writable: !0
        })
      }));
      const E = y;

      function S(t) {
        return setTimeout(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }

      function P() {
        return Date.now()
      }

      function w(t) {
        return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1)
      }

      function C() {
        const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          e = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i && (r = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
            const r = Object.keys(Object(i)).filter((t => e.indexOf(t) < 0));
            for (let e = 0, n = r.length; e < n; e += 1) {
              const n = r[e],
                s = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== s && s.enumerable && (w(t[n]) && w(i[n]) ? i[n].__swiper__ ? t[n] = i[n] : C(t[n], i[n]) : !w(t[n]) && w(i[n]) ? (t[n] = {}, i[n].__swiper__ ? t[n] = i[n] : C(t[n], i[n])) : t[n] = i[n])
            }
          }
        }
        var r;
        return t
      }

      function T(t, e, r) {
        t.style.setProperty(e, r)
      }

      function A(t) {
        let {
          swiper: e,
          targetPosition: r,
          side: n
        } = t;
        const i = l(),
          s = -e.translate;
        let a, o = null;
        const h = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
        const p = r > s ? "next" : "prev",
          u = (t, e) => "next" === p && t >= e || "prev" === p && t <= e,
          c = () => {
            a = (new Date).getTime(), null === o && (o = a);
            const t = Math.max(Math.min((a - o) / h, 1), 0),
              l = .5 - Math.cos(t * Math.PI) / 2;
            let p = s + l * (r - s);
            if (u(p, r) && (p = r), e.wrapperEl.scrollTo({
                [n]: p
              }), u(p, r)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                [n]: p
              })
            })), void i.cancelAnimationFrame(e.cssModeFrameID);
            e.cssModeFrameID = i.requestAnimationFrame(c)
          };
        c()
      }
      let M, k, D;

      function I() {
        return M || (M = function() {
          const t = l(),
            e = a();
          return {
            smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
            touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
            passiveListener: function() {
              let e = !1;
              try {
                const r = Object.defineProperty({}, "passive", {
                  get() {
                    e = !0
                  }
                });
                t.addEventListener("testPassiveListener", null, r)
              } catch (t) {}
              return e
            }(),
            gestures: "ongesturestart" in t
          }
        }()), M
      }
      const F = {
          on(t, e, r) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            const i = r ? "unshift" : "push";
            return t.split(" ").forEach((t => {
              n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][i](e)
            })), n
          },
          once(t, e, r) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;

            function i() {
              n.off(t, i), i.__emitterProxy && delete i.__emitterProxy;
              for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
              e.apply(n, s)
            }
            return i.__emitterProxy = e, n.on(t, i, r)
          },
          onAny(t, e) {
            const r = this;
            if (!r.eventsListeners || r.destroyed) return r;
            if ("function" != typeof t) return r;
            const n = e ? "unshift" : "push";
            return r.eventsAnyListeners.indexOf(t) < 0 && r.eventsAnyListeners[n](t), r
          },
          offAny(t) {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsAnyListeners) return e;
            const r = e.eventsAnyListeners.indexOf(t);
            return r >= 0 && e.eventsAnyListeners.splice(r, 1), e
          },
          off(t, e) {
            const r = this;
            return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (t.split(" ").forEach((t => {
              void 0 === e ? r.eventsListeners[t] = [] : r.eventsListeners[t] && r.eventsListeners[t].forEach(((n, i) => {
                (n === e || n.__emitterProxy && n.__emitterProxy === e) && r.eventsListeners[t].splice(i, 1)
              }))
            })), r) : r
          },
          emit() {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsListeners) return t;
            let e, r, n;
            for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
            return "string" == typeof s[0] || Array.isArray(s[0]) ? (e = s[0], r = s.slice(1, s.length), n = t) : (e = s[0].events, r = s[0].data, n = s[0].context || t), r.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach((e => {
              t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                t.apply(n, [e, ...r])
              })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((t => {
                t.apply(n, r)
              }))
            })), t
          }
        },
        O = {
          updateSize: function() {
            const t = this;
            let e, r;
            const n = t.$el;
            e = void 0 !== t.params.width && null !== t.params.width ? t.params.width : n[0].clientWidth, r = void 0 !== t.params.height && null !== t.params.height ? t.params.height : n[0].clientHeight, 0 === e && t.isHorizontal() || 0 === r && t.isVertical() || (e = e - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10), r = r - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(r) && (r = 0), Object.assign(t, {
              width: e,
              height: r,
              size: t.isHorizontal() ? e : r
            }))
          },
          updateSlides: function() {
            const t = this;

            function e(e) {
              return t.isHorizontal() ? e : {
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

            function r(t, r) {
              return parseFloat(t.getPropertyValue(e(r)) || 0)
            }
            const n = t.params,
              {
                $wrapperEl: i,
                size: s,
                rtlTranslate: a,
                wrongRTL: o
              } = t,
              l = t.virtual && n.virtual.enabled,
              h = l ? t.virtual.slides.length : t.slides.length,
              p = i.children(`.${t.params.slideClass}`),
              u = l ? t.virtual.slides.length : p.length;
            let c = [];
            const f = [],
              d = [];
            let m = n.slidesOffsetBefore;
            "function" == typeof m && (m = n.slidesOffsetBefore.call(t));
            let g = n.slidesOffsetAfter;
            "function" == typeof g && (g = n.slidesOffsetAfter.call(t));
            const v = t.snapGrid.length,
              y = t.slidesGrid.length;
            let b = n.spaceBetween,
              _ = -m,
              x = 0,
              E = 0;
            if (void 0 === s) return;
            "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), t.virtualSize = -b, a ? p.css({
              marginLeft: "",
              marginBottom: "",
              marginTop: ""
            }) : p.css({
              marginRight: "",
              marginBottom: "",
              marginTop: ""
            }), n.centeredSlides && n.cssMode && (T(t.wrapperEl, "--swiper-centered-offset-before", ""), T(t.wrapperEl, "--swiper-centered-offset-after", ""));
            const S = n.grid && n.grid.rows > 1 && t.grid;
            let P;
            S && t.grid.initSlides(u);
            const w = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((t => void 0 !== n.breakpoints[t].slidesPerView)).length > 0;
            for (let i = 0; i < u; i += 1) {
              P = 0;
              const a = p.eq(i);
              if (S && t.grid.updateSlide(i, a, u, e), "none" !== a.css("display")) {
                if ("auto" === n.slidesPerView) {
                  w && (p[i].style[e("width")] = "");
                  const s = getComputedStyle(a[0]),
                    o = a[0].style.transform,
                    l = a[0].style.webkitTransform;
                  if (o && (a[0].style.transform = "none"), l && (a[0].style.webkitTransform = "none"), n.roundLengths) P = t.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                  else {
                    const t = r(s, "width"),
                      e = r(s, "padding-left"),
                      n = r(s, "padding-right"),
                      i = r(s, "margin-left"),
                      o = r(s, "margin-right"),
                      l = s.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) P = t + i + o;
                    else {
                      const {
                        clientWidth: r,
                        offsetWidth: s
                      } = a[0];
                      P = t + e + n + i + o + (s - r)
                    }
                  }
                  o && (a[0].style.transform = o), l && (a[0].style.webkitTransform = l), n.roundLengths && (P = Math.floor(P))
                } else P = (s - (n.slidesPerView - 1) * b) / n.slidesPerView, n.roundLengths && (P = Math.floor(P)), p[i] && (p[i].style[e("width")] = `${P}px`);
                p[i] && (p[i].swiperSlideSize = P), d.push(P), n.centeredSlides ? (_ = _ + P / 2 + x / 2 + b, 0 === x && 0 !== i && (_ = _ - s / 2 - b), 0 === i && (_ = _ - s / 2 - b), Math.abs(_) < .001 && (_ = 0), n.roundLengths && (_ = Math.floor(_)), E % n.slidesPerGroup == 0 && c.push(_), f.push(_)) : (n.roundLengths && (_ = Math.floor(_)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && c.push(_), f.push(_), _ = _ + P + b), t.virtualSize += P + b, x = P, E += 1
              }
            }
            if (t.virtualSize = Math.max(t.virtualSize, s) + g, a && o && ("slide" === n.effect || "coverflow" === n.effect) && i.css({
                width: `${t.virtualSize+n.spaceBetween}px`
              }), n.setWrapperSize && i.css({
                [e("width")]: `${t.virtualSize+n.spaceBetween}px`
              }), S && t.grid.updateWrapperSize(P, c, e), !n.centeredSlides) {
              const e = [];
              for (let r = 0; r < c.length; r += 1) {
                let i = c[r];
                n.roundLengths && (i = Math.floor(i)), c[r] <= t.virtualSize - s && e.push(i)
              }
              c = e, Math.floor(t.virtualSize - s) - Math.floor(c[c.length - 1]) > 1 && c.push(t.virtualSize - s)
            }
            if (0 === c.length && (c = [0]), 0 !== n.spaceBetween) {
              const r = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
              p.filter(((t, e) => !n.cssMode || e !== p.length - 1)).css({
                [r]: `${b}px`
              })
            }
            if (n.centeredSlides && n.centeredSlidesBounds) {
              let t = 0;
              d.forEach((e => {
                t += e + (n.spaceBetween ? n.spaceBetween : 0)
              })), t -= n.spaceBetween;
              const e = t - s;
              c = c.map((t => t < 0 ? -m : t > e ? e + g : t))
            }
            if (n.centerInsufficientSlides) {
              let t = 0;
              if (d.forEach((e => {
                  t += e + (n.spaceBetween ? n.spaceBetween : 0)
                })), t -= n.spaceBetween, t < s) {
                const e = (s - t) / 2;
                c.forEach(((t, r) => {
                  c[r] = t - e
                })), f.forEach(((t, r) => {
                  f[r] = t + e
                }))
              }
            }
            if (Object.assign(t, {
                slides: p,
                snapGrid: c,
                slidesGrid: f,
                slidesSizesGrid: d
              }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
              T(t.wrapperEl, "--swiper-centered-offset-before", -c[0] + "px"), T(t.wrapperEl, "--swiper-centered-offset-after", t.size / 2 - d[d.length - 1] / 2 + "px");
              const e = -t.snapGrid[0],
                r = -t.slidesGrid[0];
              t.snapGrid = t.snapGrid.map((t => t + e)), t.slidesGrid = t.slidesGrid.map((t => t + r))
            }
            if (u !== h && t.emit("slidesLengthChange"), c.length !== v && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), f.length !== y && t.emit("slidesGridLengthChange"), n.watchSlidesProgress && t.updateSlidesOffset(), !(l || n.cssMode || "slide" !== n.effect && "fade" !== n.effect)) {
              const e = `${n.containerModifierClass}backface-hidden`,
                r = t.$el.hasClass(e);
              u <= n.maxBackfaceHiddenSlides ? r || t.$el.addClass(e) : r && t.$el.removeClass(e)
            }
          },
          updateAutoHeight: function(t) {
            const e = this,
              r = [],
              n = e.virtual && e.params.virtual.enabled;
            let i, s = 0;
            "number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed);
            const a = t => n ? e.slides.filter((e => parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t))[0] : e.slides.eq(t)[0];
            if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
              if (e.params.centeredSlides)(e.visibleSlides || E([])).each((t => {
                r.push(t)
              }));
              else
                for (i = 0; i < Math.ceil(e.params.slidesPerView); i += 1) {
                  const t = e.activeIndex + i;
                  if (t > e.slides.length && !n) break;
                  r.push(a(t))
                } else r.push(a(e.activeIndex));
            for (i = 0; i < r.length; i += 1)
              if (void 0 !== r[i]) {
                const t = r[i].offsetHeight;
                s = t > s ? t : s
              }(s || 0 === s) && e.$wrapperEl.css("height", `${s}px`)
          },
          updateSlidesOffset: function() {
            const t = this,
              e = t.slides;
            for (let r = 0; r < e.length; r += 1) e[r].swiperSlideOffset = t.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop
          },
          updateSlidesProgress: function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0;
            const e = this,
              r = e.params,
              {
                slides: n,
                rtlTranslate: i,
                snapGrid: s
              } = e;
            if (0 === n.length) return;
            void 0 === n[0].swiperSlideOffset && e.updateSlidesOffset();
            let a = -t;
            i && (a = t), n.removeClass(r.slideVisibleClass), e.visibleSlidesIndexes = [], e.visibleSlides = [];
            for (let t = 0; t < n.length; t += 1) {
              const o = n[t];
              let l = o.swiperSlideOffset;
              r.cssMode && r.centeredSlides && (l -= n[0].swiperSlideOffset);
              const h = (a + (r.centeredSlides ? e.minTranslate() : 0) - l) / (o.swiperSlideSize + r.spaceBetween),
                p = (a - s[0] + (r.centeredSlides ? e.minTranslate() : 0) - l) / (o.swiperSlideSize + r.spaceBetween),
                u = -(a - l),
                c = u + e.slidesSizesGrid[t];
              (u >= 0 && u < e.size - 1 || c > 1 && c <= e.size || u <= 0 && c >= e.size) && (e.visibleSlides.push(o), e.visibleSlidesIndexes.push(t), n.eq(t).addClass(r.slideVisibleClass)), o.progress = i ? -h : h, o.originalProgress = i ? -p : p
            }
            e.visibleSlides = E(e.visibleSlides)
          },
          updateProgress: function(t) {
            const e = this;
            if (void 0 === t) {
              const r = e.rtlTranslate ? -1 : 1;
              t = e && e.translate && e.translate * r || 0
            }
            const r = e.params,
              n = e.maxTranslate() - e.minTranslate();
            let {
              progress: i,
              isBeginning: s,
              isEnd: a
            } = e;
            const o = s,
              l = a;
            0 === n ? (i = 0, s = !0, a = !0) : (i = (t - e.minTranslate()) / n, s = i <= 0, a = i >= 1), Object.assign(e, {
              progress: i,
              isBeginning: s,
              isEnd: a
            }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && e.updateSlidesProgress(t), s && !o && e.emit("reachBeginning toEdge"), a && !l && e.emit("reachEnd toEdge"), (o && !s || l && !a) && e.emit("fromEdge"), e.emit("progress", i)
          },
          updateSlidesClasses: function() {
            const t = this,
              {
                slides: e,
                params: r,
                $wrapperEl: n,
                activeIndex: i,
                realIndex: s
              } = t,
              a = t.virtual && r.virtual.enabled;
            let o;
            e.removeClass(`${r.slideActiveClass} ${r.slideNextClass} ${r.slidePrevClass} ${r.slideDuplicateActiveClass} ${r.slideDuplicateNextClass} ${r.slideDuplicatePrevClass}`), o = a ? t.$wrapperEl.find(`.${r.slideClass}[data-swiper-slide-index="${i}"]`) : e.eq(i), o.addClass(r.slideActiveClass), r.loop && (o.hasClass(r.slideDuplicateClass) ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(r.slideDuplicateActiveClass) : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(r.slideDuplicateActiveClass));
            let l = o.nextAll(`.${r.slideClass}`).eq(0).addClass(r.slideNextClass);
            r.loop && 0 === l.length && (l = e.eq(0), l.addClass(r.slideNextClass));
            let h = o.prevAll(`.${r.slideClass}`).eq(0).addClass(r.slidePrevClass);
            r.loop && 0 === h.length && (h = e.eq(-1), h.addClass(r.slidePrevClass)), r.loop && (l.hasClass(r.slideDuplicateClass) ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass) : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass), h.hasClass(r.slideDuplicateClass) ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass) : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass)), t.emitSlidesClasses()
          },
          updateActiveIndex: function(t) {
            const e = this,
              r = e.rtlTranslate ? e.translate : -e.translate,
              {
                slidesGrid: n,
                snapGrid: i,
                params: s,
                activeIndex: a,
                realIndex: o,
                snapIndex: l
              } = e;
            let h, p = t;
            if (void 0 === p) {
              for (let t = 0; t < n.length; t += 1) void 0 !== n[t + 1] ? r >= n[t] && r < n[t + 1] - (n[t + 1] - n[t]) / 2 ? p = t : r >= n[t] && r < n[t + 1] && (p = t + 1) : r >= n[t] && (p = t);
              s.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
            }
            if (i.indexOf(r) >= 0) h = i.indexOf(r);
            else {
              const t = Math.min(s.slidesPerGroupSkip, p);
              h = t + Math.floor((p - t) / s.slidesPerGroup)
            }
            if (h >= i.length && (h = i.length - 1), p === a) return void(h !== l && (e.snapIndex = h, e.emit("snapIndexChange")));
            const u = parseInt(e.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
            Object.assign(e, {
              snapIndex: h,
              realIndex: u,
              previousIndex: a,
              activeIndex: p
            }), e.emit("activeIndexChange"), e.emit("snapIndexChange"), o !== u && e.emit("realIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
          },
          updateClickedSlide: function(t) {
            const e = this,
              r = e.params,
              n = E(t).closest(`.${r.slideClass}`)[0];
            let i, s = !1;
            if (n)
              for (let t = 0; t < e.slides.length; t += 1)
                if (e.slides[t] === n) {
                  s = !0, i = t;
                  break
                } if (!n || !s) return e.clickedSlide = void 0, void(e.clickedIndex = void 0);
            e.clickedSlide = n, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(E(n).attr("data-swiper-slide-index"), 10) : e.clickedIndex = i, r.slideToClickedSlide && void 0 !== e.clickedIndex && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
          }
        };

      function R(t) {
        let {
          swiper: e,
          runCallbacks: r,
          direction: n,
          step: i
        } = t;
        const {
          activeIndex: s,
          previousIndex: a
        } = e;
        let o = n;
        if (o || (o = s > a ? "next" : s < a ? "prev" : "reset"), e.emit(`transition${i}`), r && s !== a) {
          if ("reset" === o) return void e.emit(`slideResetTransition${i}`);
          e.emit(`slideChangeTransition${i}`), "next" === o ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)
        }
      }
      const L = {
        slideTo: function() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0;
          if ("number" != typeof t && "string" != typeof t) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`);
          if ("string" == typeof t) {
            const e = parseInt(t, 10);
            if (!isFinite(e)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);
            t = e
          }
          const s = this;
          let a = t;
          a < 0 && (a = 0);
          const {
            params: o,
            snapGrid: l,
            slidesGrid: h,
            previousIndex: p,
            activeIndex: u,
            rtlTranslate: c,
            wrapperEl: f,
            enabled: d
          } = s;
          if (s.animating && o.preventInteractionOnTransition || !d && !n && !i) return !1;
          const m = Math.min(s.params.slidesPerGroupSkip, a);
          let g = m + Math.floor((a - m) / s.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1);
          const v = -l[g];
          if (o.normalizeSlideIndex)
            for (let t = 0; t < h.length; t += 1) {
              const e = -Math.floor(100 * v),
                r = Math.floor(100 * h[t]),
                n = Math.floor(100 * h[t + 1]);
              void 0 !== h[t + 1] ? e >= r && e < n - (n - r) / 2 ? a = t : e >= r && e < n && (a = t + 1) : e >= r && (a = t)
            }
          if (s.initialized && a !== u) {
            if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
            if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (u || 0) !== a) return !1
          }
          let y;
          if (a !== (p || 0) && r && s.emit("beforeSlideChangeStart"), s.updateProgress(v), y = a > u ? "next" : a < u ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate) return s.updateActiveIndex(a), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(v), "reset" !== y && (s.transitionStart(r, y), s.transitionEnd(r, y)), !1;
          if (o.cssMode) {
            const t = s.isHorizontal(),
              r = c ? v : -v;
            if (0 === e) {
              const e = s.virtual && s.params.virtual.enabled;
              e && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), f[t ? "scrollLeft" : "scrollTop"] = r, e && requestAnimationFrame((() => {
                s.wrapperEl.style.scrollSnapType = "", s._swiperImmediateVirtual = !1
              }))
            } else {
              if (!s.support.smoothScroll) return A({
                swiper: s,
                targetPosition: r,
                side: t ? "left" : "top"
              }), !0;
              f.scrollTo({
                [t ? "left" : "top"]: r,
                behavior: "smooth"
              })
            }
            return !0
          }
          return s.setTransition(e), s.setTranslate(v), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(r, y), 0 === e ? s.transitionEnd(r, y) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(t) {
            s && !s.destroyed && t.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(r, y))
          }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0;
          if ("string" == typeof t) {
            const e = parseInt(t, 10);
            if (!isFinite(e)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);
            t = e
          }
          const i = this;
          let s = t;
          return i.params.loop && (s += i.loopedSlides), i.slideTo(s, e, r, n)
        },
        slideNext: function() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
          const n = this,
            {
              animating: i,
              enabled: s,
              params: a
            } = n;
          if (!s) return n;
          let o = a.slidesPerGroup;
          "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
          const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
          if (a.loop) {
            if (i && a.loopPreventsSlide) return !1;
            n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
          }
          return a.rewind && n.isEnd ? n.slideTo(0, t, e, r) : n.slideTo(n.activeIndex + l, t, e, r)
        },
        slidePrev: function() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
          const n = this,
            {
              params: i,
              animating: s,
              snapGrid: a,
              slidesGrid: o,
              rtlTranslate: l,
              enabled: h
            } = n;
          if (!h) return n;
          if (i.loop) {
            if (s && i.loopPreventsSlide) return !1;
            n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
          }

          function p(t) {
            return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
          }
          const u = p(l ? n.translate : -n.translate),
            c = a.map((t => p(t)));
          let f = a[c.indexOf(u) - 1];
          if (void 0 === f && i.cssMode) {
            let t;
            a.forEach(((e, r) => {
              u >= e && (t = r)
            })), void 0 !== t && (f = a[t > 0 ? t - 1 : t])
          }
          let d = 0;
          if (void 0 !== f && (d = o.indexOf(f), d < 0 && (d = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (d = d - n.slidesPerViewDynamic("previous", !0) + 1, d = Math.max(d, 0))), i.rewind && n.isBeginning) {
            const i = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
            return n.slideTo(i, t, e, r)
          }
          return n.slideTo(d, t, e, r)
        },
        slideReset: function() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
          return this.slideTo(this.activeIndex, t, e, r)
        },
        slideToClosest: function() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
          const i = this;
          let s = i.activeIndex;
          const a = Math.min(i.params.slidesPerGroupSkip, s),
            o = a + Math.floor((s - a) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[o]) {
            const t = i.snapGrid[o];
            l - t > (i.snapGrid[o + 1] - t) * n && (s += i.params.slidesPerGroup)
          } else {
            const t = i.snapGrid[o - 1];
            l - t <= (i.snapGrid[o] - t) * n && (s -= i.params.slidesPerGroup)
          }
          return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, t, e, r)
        },
        slideToClickedSlide: function() {
          const t = this,
            {
              params: e,
              $wrapperEl: r
            } = t,
            n = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
          let i, s = t.clickedIndex;
          if (e.loop) {
            if (t.animating) return;
            i = parseInt(E(t.clickedSlide).attr("data-swiper-slide-index"), 10), e.centeredSlides ? s < t.loopedSlides - n / 2 || s > t.slides.length - t.loopedSlides + n / 2 ? (t.loopFix(), s = r.children(`.${e.slideClass}[data-swiper-slide-index="${i}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), S((() => {
              t.slideTo(s)
            }))) : t.slideTo(s) : s > t.slides.length - n ? (t.loopFix(), s = r.children(`.${e.slideClass}[data-swiper-slide-index="${i}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), S((() => {
              t.slideTo(s)
            }))) : t.slideTo(s)
          } else t.slideTo(s)
        }
      };

      function B(t) {
        const e = this,
          r = a(),
          n = l(),
          i = e.touchEventsData,
          {
            params: s,
            touches: o,
            enabled: h
          } = e;
        if (!h) return;
        if (e.animating && s.preventInteractionOnTransition) return;
        !e.animating && s.cssMode && s.loop && e.loopFix();
        let p = t;
        p.originalEvent && (p = p.originalEvent);
        let u = E(p.target);
        if ("wrapper" === s.touchEventsTarget && !u.closest(e.wrapperEl).length) return;
        if (i.isTouchEvent = "touchstart" === p.type, !i.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!i.isTouchEvent && "button" in p && p.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        const c = !!s.noSwipingClass && "" !== s.noSwipingClass,
          f = t.composedPath ? t.composedPath() : t.path;
        c && p.target && p.target.shadowRoot && f && (u = E(f[0]));
        const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
          m = !(!p.target || !p.target.shadowRoot);
        if (s.noSwiping && (m ? function(t) {
            return function e(r) {
              if (!r || r === a() || r === l()) return null;
              r.assignedSlot && (r = r.assignedSlot);
              const n = r.closest(t);
              return n || r.getRootNode ? n || e(r.getRootNode().host) : null
            }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this)
          }(d, u[0]) : u.closest(d)[0])) return void(e.allowClick = !0);
        if (s.swipeHandler && !u.closest(s.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const g = o.currentX,
          v = o.currentY,
          y = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          b = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (y && (g <= b || g >= n.innerWidth - b)) {
          if ("prevent" !== y) return;
          t.preventDefault()
        }
        if (Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), o.startX = g, o.startY = v, i.touchStartTime = P(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== p.type) {
          let t = !0;
          u.is(i.focusableElements) && (t = !1, "SELECT" === u[0].nodeName && (i.isTouched = !1)), r.activeElement && E(r.activeElement).is(i.focusableElements) && r.activeElement !== u[0] && r.activeElement.blur();
          const n = t && e.allowTouchMove && s.touchStartPreventDefault;
          !s.touchStartForcePreventDefault && !n || u[0].isContentEditable || p.preventDefault()
        }
        e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", p)
      }

      function V(t) {
        const e = a(),
          r = this,
          n = r.touchEventsData,
          {
            params: i,
            touches: s,
            rtlTranslate: o,
            enabled: l
          } = r;
        if (!l) return;
        let h = t;
        if (h.originalEvent && (h = h.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", h));
        if (n.isTouchEvent && "touchmove" !== h.type) return;
        const p = "touchmove" === h.type && h.targetTouches && (h.targetTouches[0] || h.changedTouches[0]),
          u = "touchmove" === h.type ? p.pageX : h.pageX,
          c = "touchmove" === h.type ? p.pageY : h.pageY;
        if (h.preventedByNestedSwiper) return s.startX = u, void(s.startY = c);
        if (!r.allowTouchMove) return E(h.target).is(n.focusableElements) || (r.allowClick = !1), void(n.isTouched && (Object.assign(s, {
          startX: u,
          startY: c,
          currentX: u,
          currentY: c
        }), n.touchStartTime = P()));
        if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
          if (r.isVertical()) {
            if (c < s.startY && r.translate <= r.maxTranslate() || c > s.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
          } else if (u < s.startX && r.translate <= r.maxTranslate() || u > s.startX && r.translate >= r.minTranslate()) return;
        if (n.isTouchEvent && e.activeElement && h.target === e.activeElement && E(h.target).is(n.focusableElements)) return n.isMoved = !0, void(r.allowClick = !1);
        if (n.allowTouchCallbacks && r.emit("touchMove", h), h.targetTouches && h.targetTouches.length > 1) return;
        s.currentX = u, s.currentY = c;
        const f = s.currentX - s.startX,
          d = s.currentY - s.startY;
        if (r.params.threshold && Math.sqrt(f ** 2 + d ** 2) < r.params.threshold) return;
        if (void 0 === n.isScrolling) {
          let t;
          r.isHorizontal() && s.currentY === s.startY || r.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : f * f + d * d >= 25 && (t = 180 * Math.atan2(Math.abs(d), Math.abs(f)) / Math.PI, n.isScrolling = r.isHorizontal() ? t > i.touchAngle : 90 - t > i.touchAngle)
        }
        if (n.isScrolling && r.emit("touchMoveOpposite", h), void 0 === n.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (n.startMoving = !0)), n.isScrolling) return void(n.isTouched = !1);
        if (!n.startMoving) return;
        r.allowClick = !1, !i.cssMode && h.cancelable && h.preventDefault(), i.touchMoveStopPropagation && !i.nested && h.stopPropagation(), n.isMoved || (i.loop && !i.cssMode && r.loopFix(), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating && r.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !i.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", h)), r.emit("sliderMove", h), n.isMoved = !0;
        let m = r.isHorizontal() ? f : d;
        s.diff = m, m *= i.touchRatio, o && (m = -m), r.swipeDirection = m > 0 ? "prev" : "next", n.currentTranslate = m + n.startTranslate;
        let g = !0,
          v = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (v = 0), m > 0 && n.currentTranslate > r.minTranslate() ? (g = !1, i.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + m) ** v)) : m < 0 && n.currentTranslate < r.maxTranslate() && (g = !1, i.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - m) ** v)), g && (h.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), i.threshold > 0) {
          if (!(Math.abs(m) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove) return n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, void(s.diff = r.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
        }
        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && r.freeMode || i.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), r.params.freeMode && i.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate))
      }

      function z(t) {
        const e = this,
          r = e.touchEventsData,
          {
            params: n,
            touches: i,
            rtlTranslate: s,
            slidesGrid: a,
            enabled: o
          } = e;
        if (!o) return;
        let l = t;
        if (l.originalEvent && (l = l.originalEvent), r.allowTouchCallbacks && e.emit("touchEnd", l), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && n.grabCursor && e.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        n.grabCursor && r.isMoved && r.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
        const h = P(),
          p = h - r.touchStartTime;
        if (e.allowClick) {
          const t = l.path || l.composedPath && l.composedPath();
          e.updateClickedSlide(t && t[0] || l.target), e.emit("tap click", l), p < 300 && h - r.lastClickTime < 300 && e.emit("doubleTap doubleClick", l)
        }
        if (r.lastClickTime = P(), S((() => {
            e.destroyed || (e.allowClick = !0)
          })), !r.isTouched || !r.isMoved || !e.swipeDirection || 0 === i.diff || r.currentTranslate === r.startTranslate) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let u;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, u = n.followFinger ? s ? e.translate : -e.translate : -r.currentTranslate, n.cssMode) return;
        if (e.params.freeMode && n.freeMode.enabled) return void e.freeMode.onTouchEnd({
          currentPos: u
        });
        let c = 0,
          f = e.slidesSizesGrid[0];
        for (let t = 0; t < a.length; t += t < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
          const e = t < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
          void 0 !== a[t + e] ? u >= a[t] && u < a[t + e] && (c = t, f = a[t + e] - a[t]) : u >= a[t] && (c = t, f = a[a.length - 1] - a[a.length - 2])
        }
        let d = null,
          m = null;
        n.rewind && (e.isBeginning ? m = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (d = 0));
        const g = (u - a[c]) / f,
          v = c < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (p > n.longSwipesMs) {
          if (!n.longSwipes) return void e.slideTo(e.activeIndex);
          "next" === e.swipeDirection && (g >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? d : c + v) : e.slideTo(c)), "prev" === e.swipeDirection && (g > 1 - n.longSwipesRatio ? e.slideTo(c + v) : null !== m && g < 0 && Math.abs(g) > n.longSwipesRatio ? e.slideTo(m) : e.slideTo(c))
        } else {
          if (!n.shortSwipes) return void e.slideTo(e.activeIndex);
          !e.navigation || l.target !== e.navigation.nextEl && l.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(null !== d ? d : c + v), "prev" === e.swipeDirection && e.slideTo(null !== m ? m : c)) : l.target === e.navigation.nextEl ? e.slideTo(c + v) : e.slideTo(c)
        }
      }

      function j() {
        const t = this,
          {
            params: e,
            el: r
          } = t;
        if (r && 0 === r.offsetWidth) return;
        e.breakpoints && t.setBreakpoint();
        const {
          allowSlideNext: n,
          allowSlidePrev: i,
          snapGrid: s
        } = t;
        t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(), t.allowSlidePrev = i, t.allowSlideNext = n, t.params.watchOverflow && s !== t.snapGrid && t.checkOverflow()
      }

      function N(t) {
        const e = this;
        e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
      }

      function G() {
        const t = this,
          {
            wrapperEl: e,
            rtlTranslate: r,
            enabled: n
          } = t;
        if (!n) return;
        let i;
        t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, 0 === t.translate && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
        const s = t.maxTranslate() - t.minTranslate();
        i = 0 === s ? 0 : (t.translate - t.minTranslate()) / s, i !== t.progress && t.updateProgress(r ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
      }
      let $ = !1;

      function H() {}
      const W = (t, e) => {
          const r = a(),
            {
              params: n,
              touchEvents: i,
              el: s,
              wrapperEl: o,
              device: l,
              support: h
            } = t,
            p = !!n.nested,
            u = "on" === e ? "addEventListener" : "removeEventListener",
            c = e;
          if (h.touch) {
            const e = !("touchstart" !== i.start || !h.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s[u](i.start, t.onTouchStart, e), s[u](i.move, t.onTouchMove, h.passiveListener ? {
              passive: !1,
              capture: p
            } : p), s[u](i.end, t.onTouchEnd, e), i.cancel && s[u](i.cancel, t.onTouchEnd, e)
          } else s[u](i.start, t.onTouchStart, !1), r[u](i.move, t.onTouchMove, p), r[u](i.end, t.onTouchEnd, !1);
          (n.preventClicks || n.preventClicksPropagation) && s[u]("click", t.onClick, !0), n.cssMode && o[u]("scroll", t.onScroll), n.updateOnWindowResize ? t[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j, !0) : t[c]("observerUpdate", j, !0)
        },
        q = {
          attachEvents: function() {
            const t = this,
              e = a(),
              {
                params: r,
                support: n
              } = t;
            t.onTouchStart = B.bind(t), t.onTouchMove = V.bind(t), t.onTouchEnd = z.bind(t), r.cssMode && (t.onScroll = G.bind(t)), t.onClick = N.bind(t), n.touch && !$ && (e.addEventListener("touchstart", H), $ = !0), W(t, "on")
          },
          detachEvents: function() {
            W(this, "off")
          }
        },
        Y = (t, e) => t.grid && e.grid && e.grid.rows > 1,
        X = {
          addClasses: function() {
            const t = this,
              {
                classNames: e,
                params: r,
                rtl: n,
                $el: i,
                device: s,
                support: a
              } = t,
              o = function(t, e) {
                const r = [];
                return t.forEach((t => {
                  "object" == typeof t ? Object.keys(t).forEach((n => {
                    t[n] && r.push(e + n)
                  })) : "string" == typeof t && r.push(e + t)
                })), r
              }(["initialized", r.direction, {
                "pointer-events": !a.touch
              }, {
                "free-mode": t.params.freeMode && r.freeMode.enabled
              }, {
                autoheight: r.autoHeight
              }, {
                rtl: n
              }, {
                grid: r.grid && r.grid.rows > 1
              }, {
                "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
              }, {
                android: s.android
              }, {
                ios: s.ios
              }, {
                "css-mode": r.cssMode
              }, {
                centered: r.cssMode && r.centeredSlides
              }, {
                "watch-progress": r.watchSlidesProgress
              }], r.containerModifierClass);
            e.push(...o), i.addClass([...e].join(" ")), t.emitContainerClasses()
          },
          removeClasses: function() {
            const {
              $el: t,
              classNames: e
            } = this;
            t.removeClass(e.join(" ")), this.emitContainerClasses()
          }
        },
        U = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
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
          threshold: 0,
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
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopedSlidesLimit: !0,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
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
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
          _emitClasses: !1
        };

      function Z(t, e) {
        return function() {
          let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const n = Object.keys(r)[0],
            i = r[n];
          "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === t[n] && (t[n] = {
            auto: !0
          }), n in t && "enabled" in i ? (!0 === t[n] && (t[n] = {
            enabled: !0
          }), "object" != typeof t[n] || "enabled" in t[n] || (t[n].enabled = !0), t[n] || (t[n] = {
            enabled: !1
          }), C(e, r)) : C(e, r)) : C(e, r)
        }
      }
      const K = {
          eventsEmitter: F,
          update: O,
          translate: {
            getTranslate: function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y";
              const {
                params: e,
                rtlTranslate: r,
                translate: n,
                $wrapperEl: i
              } = this;
              if (e.virtualTranslate) return r ? -n : n;
              if (e.cssMode) return n;
              let s = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x";
                const r = l();
                let n, i, s;
                const a = function(t) {
                  const e = l();
                  let r;
                  return e.getComputedStyle && (r = e.getComputedStyle(t, null)), !r && t.currentStyle && (r = t.currentStyle), r || (r = t.style), r
                }(t);
                return r.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((t => t.replace(",", "."))).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), "x" === e && (i = r.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === e && (i = r.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
              }(i[0], t);
              return r && (s = -s), s || 0
            },
            setTranslate: function(t, e) {
              const r = this,
                {
                  rtlTranslate: n,
                  params: i,
                  $wrapperEl: s,
                  wrapperEl: a,
                  progress: o
                } = r;
              let l, h = 0,
                p = 0;
              r.isHorizontal() ? h = n ? -t : t : p = t, i.roundLengths && (h = Math.floor(h), p = Math.floor(p)), i.cssMode ? a[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -h : -p : i.virtualTranslate || s.transform(`translate3d(${h}px, ${p}px, 0px)`), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? h : p;
              const u = r.maxTranslate() - r.minTranslate();
              l = 0 === u ? 0 : (t - r.minTranslate()) / u, l !== o && r.updateProgress(t), r.emit("setTranslate", r.translate, e)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function() {
              let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                i = arguments.length > 4 ? arguments[4] : void 0;
              const s = this,
                {
                  params: a,
                  wrapperEl: o
                } = s;
              if (s.animating && a.preventInteractionOnTransition) return !1;
              const l = s.minTranslate(),
                h = s.maxTranslate();
              let p;
              if (p = n && t > l ? l : n && t < h ? h : t, s.updateProgress(p), a.cssMode) {
                const t = s.isHorizontal();
                if (0 === e) o[t ? "scrollLeft" : "scrollTop"] = -p;
                else {
                  if (!s.support.smoothScroll) return A({
                    swiper: s,
                    targetPosition: -p,
                    side: t ? "left" : "top"
                  }), !0;
                  o.scrollTo({
                    [t ? "left" : "top"]: -p,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === e ? (s.setTransition(0), s.setTranslate(p), r && (s.emit("beforeTransitionStart", e, i), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(p), r && (s.emit("beforeTransitionStart", e, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(t) {
                s && !s.destroyed && t.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, r && s.emit("transitionEnd"))
              }), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(t, e) {
              const r = this;
              r.params.cssMode || r.$wrapperEl.transition(t), r.emit("setTransition", t, e)
            },
            transitionStart: function() {
              let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                e = arguments.length > 1 ? arguments[1] : void 0;
              const r = this,
                {
                  params: n
                } = r;
              n.cssMode || (n.autoHeight && r.updateAutoHeight(), R({
                swiper: r,
                runCallbacks: t,
                direction: e,
                step: "Start"
              }))
            },
            transitionEnd: function() {
              let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                e = arguments.length > 1 ? arguments[1] : void 0;
              const r = this,
                {
                  params: n
                } = r;
              r.animating = !1, n.cssMode || (r.setTransition(0), R({
                swiper: r,
                runCallbacks: t,
                direction: e,
                step: "End"
              }))
            }
          },
          slide: L,
          loop: {
            loopCreate: function() {
              const t = this,
                e = a(),
                {
                  params: r,
                  $wrapperEl: n
                } = t,
                i = n.children().length > 0 ? E(n.children()[0].parentNode) : n;
              i.children(`.${r.slideClass}.${r.slideDuplicateClass}`).remove();
              let s = i.children(`.${r.slideClass}`);
              if (r.loopFillGroupWithBlank) {
                const t = r.slidesPerGroup - s.length % r.slidesPerGroup;
                if (t !== r.slidesPerGroup) {
                  for (let n = 0; n < t; n += 1) {
                    const t = E(e.createElement("div")).addClass(`${r.slideClass} ${r.slideBlankClass}`);
                    i.append(t)
                  }
                  s = i.children(`.${r.slideClass}`)
                }
              }
              "auto" !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = s.length), t.loopedSlides = Math.ceil(parseFloat(r.loopedSlides || r.slidesPerView, 10)), t.loopedSlides += r.loopAdditionalSlides, t.loopedSlides > s.length && t.params.loopedSlidesLimit && (t.loopedSlides = s.length);
              const o = [],
                l = [];
              s.each(((t, e) => {
                E(t).attr("data-swiper-slide-index", e)
              }));
              for (let e = 0; e < t.loopedSlides; e += 1) {
                const t = e - Math.floor(e / s.length) * s.length;
                l.push(s.eq(t)[0]), o.unshift(s.eq(s.length - t - 1)[0])
              }
              for (let t = 0; t < l.length; t += 1) i.append(E(l[t].cloneNode(!0)).addClass(r.slideDuplicateClass));
              for (let t = o.length - 1; t >= 0; t -= 1) i.prepend(E(o[t].cloneNode(!0)).addClass(r.slideDuplicateClass))
            },
            loopFix: function() {
              const t = this;
              t.emit("beforeLoopFix");
              const {
                activeIndex: e,
                slides: r,
                loopedSlides: n,
                allowSlidePrev: i,
                allowSlideNext: s,
                snapGrid: a,
                rtlTranslate: o
              } = t;
              let l;
              t.allowSlidePrev = !0, t.allowSlideNext = !0;
              const h = -a[e] - t.getTranslate();
              e < n ? (l = r.length - 3 * n + e, l += n, t.slideTo(l, 0, !1, !0) && 0 !== h && t.setTranslate((o ? -t.translate : t.translate) - h)) : e >= r.length - n && (l = -r.length + e + n, l += n, t.slideTo(l, 0, !1, !0) && 0 !== h && t.setTranslate((o ? -t.translate : t.translate) - h)), t.allowSlidePrev = i, t.allowSlideNext = s, t.emit("loopFix")
            },
            loopDestroy: function() {
              const {
                $wrapperEl: t,
                params: e,
                slides: r
              } = this;
              t.children(`.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`).remove(), r.removeAttr("data-swiper-slide-index")
            }
          },
          grabCursor: {
            setGrabCursor: function(t) {
              const e = this;
              if (e.support.touch || !e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
              const r = "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
              r.style.cursor = "move", r.style.cursor = t ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
              const t = this;
              t.support.touch || t.params.watchOverflow && t.isLocked || t.params.cssMode || (t["container" === t.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
          },
          events: q,
          breakpoints: {
            setBreakpoint: function() {
              const t = this,
                {
                  activeIndex: e,
                  initialized: r,
                  loopedSlides: n = 0,
                  params: i,
                  $el: s
                } = t,
                a = i.breakpoints;
              if (!a || a && 0 === Object.keys(a).length) return;
              const o = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
              if (!o || t.currentBreakpoint === o) return;
              const l = (o in a ? a[o] : void 0) || t.originalParams,
                h = Y(t, i),
                p = Y(t, l),
                u = i.enabled;
              h && !p ? (s.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), t.emitContainerClasses()) : !h && p && (s.addClass(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && s.addClass(`${i.containerModifierClass}grid-column`), t.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((e => {
                const r = i[e] && i[e].enabled,
                  n = l[e] && l[e].enabled;
                r && !n && t[e].disable(), !r && n && t[e].enable()
              }));
              const c = l.direction && l.direction !== i.direction,
                f = i.loop && (l.slidesPerView !== i.slidesPerView || c);
              c && r && t.changeDirection(), C(t.params, l);
              const d = t.params.enabled;
              Object.assign(t, {
                allowTouchMove: t.params.allowTouchMove,
                allowSlideNext: t.params.allowSlideNext,
                allowSlidePrev: t.params.allowSlidePrev
              }), u && !d ? t.disable() : !u && d && t.enable(), t.currentBreakpoint = o, t.emit("_beforeBreakpoint", l), f && r && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(e - n + t.loopedSlides, 0, !1)), t.emit("breakpoint", l)
            },
            getBreakpoint: function(t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "window",
                r = arguments.length > 2 ? arguments[2] : void 0;
              if (!t || "container" === e && !r) return;
              let n = !1;
              const i = l(),
                s = "window" === e ? i.innerHeight : r.clientHeight,
                a = Object.keys(t).map((t => {
                  if ("string" == typeof t && 0 === t.indexOf("@")) {
                    const e = parseFloat(t.substr(1));
                    return {
                      value: s * e,
                      point: t
                    }
                  }
                  return {
                    value: t,
                    point: t
                  }
                }));
              a.sort(((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10)));
              for (let t = 0; t < a.length; t += 1) {
                const {
                  point: s,
                  value: o
                } = a[t];
                "window" === e ? i.matchMedia(`(min-width: ${o}px)`).matches && (n = s) : o <= r.clientWidth && (n = s)
              }
              return n || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const t = this,
                {
                  isLocked: e,
                  params: r
                } = t,
                {
                  slidesOffsetBefore: n
                } = r;
              if (n) {
                const e = t.slides.length - 1,
                  r = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * n;
                t.isLocked = t.size > r
              } else t.isLocked = 1 === t.snapGrid.length;
              !0 === r.allowSlideNext && (t.allowSlideNext = !t.isLocked), !0 === r.allowSlidePrev && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
            }
          },
          classes: X,
          images: {
            loadImage: function(t, e, r, n, i, s) {
              const a = l();
              let o;

              function h() {
                s && s()
              }
              E(t).parent("picture")[0] || t.complete && i ? h() : e ? (o = new a.Image, o.onload = h, o.onerror = h, n && (o.sizes = n), r && (o.srcset = r), e && (o.src = e)) : h()
            },
            preloadImages: function() {
              const t = this;

              function e() {
                null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
              }
              t.imagesToLoad = t.$el.find("img");
              for (let r = 0; r < t.imagesToLoad.length; r += 1) {
                const n = t.imagesToLoad[r];
                t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e)
              }
            }
          }
        },
        J = {};
      class Q {
        constructor() {
          let t, e;
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
          if (1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? e = n[0] : [t, e] = n, e || (e = {}), e = C({}, e), t && !e.el && (e.el = t), e.el && E(e.el).length > 1) {
            const t = [];
            return E(e.el).each((r => {
              const n = C({}, e, {
                el: r
              });
              t.push(new Q(n))
            })), t
          }
          const s = this;
          s.__swiper__ = !0, s.support = I(), s.device = function() {
            return k || (k = function() {
              let {
                userAgent: t
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              const e = I(),
                r = l(),
                n = r.navigator.platform,
                i = t || r.navigator.userAgent,
                s = {
                  ios: !1,
                  android: !1
                },
                a = r.screen.width,
                o = r.screen.height,
                h = i.match(/(Android);?[\s\/]+([\d.]+)?/);
              let p = i.match(/(iPad).*OS\s([\d_]+)/);
              const u = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                c = !p && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === n;
              let d = "MacIntel" === n;
              return !p && d && e.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${o}`) >= 0 && (p = i.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), d = !1), h && !f && (s.os = "android", s.android = !0), (p || c || u) && (s.os = "ios", s.ios = !0), s
            }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})), k
          }({
            userAgent: e.userAgent
          }), s.browser = (D || (D = function() {
            const t = l();
            return {
              isSafari: function() {
                const e = t.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
              }(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            }
          }()), D), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], e.modules && Array.isArray(e.modules) && s.modules.push(...e.modules);
          const a = {};
          s.modules.forEach((t => {
            t({
              swiper: s,
              extendParams: Z(e, a),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s)
            })
          }));
          const o = C({}, U, a);
          return s.params = C({}, o, J, e), s.originalParams = C({}, s.params), s.passedParams = C({}, e), s.params && s.params.on && Object.keys(s.params.on).forEach((t => {
            s.on(t, s.params.on[t])
          })), s.params && s.params.onAny && s.onAny(s.params.onAny), s.$ = E, Object.assign(s, {
            enabled: s.params.enabled,
            el: t,
            classNames: [],
            slides: E(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === s.params.direction,
            isVertical: () => "vertical" === s.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: s.params.allowSlideNext,
            allowSlidePrev: s.params.allowSlidePrev,
            touchEvents: function() {
              const t = ["touchstart", "touchmove", "touchend", "touchcancel"],
                e = ["pointerdown", "pointermove", "pointerup"];
              return s.touchEventsTouch = {
                start: t[0],
                move: t[1],
                end: t[2],
                cancel: t[3]
              }, s.touchEventsDesktop = {
                start: e[0],
                move: e[1],
                end: e[2]
              }, s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
            }(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: s.params.focusableElements,
              lastClickTime: P(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: s.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), s.emit("_swiper"), s.params.init && s.init(), s
        }
        enable() {
          const t = this;
          t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
        }
        disable() {
          const t = this;
          t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
        }
        setProgress(t, e) {
          const r = this;
          t = Math.min(Math.max(t, 0), 1);
          const n = r.minTranslate(),
            i = (r.maxTranslate() - n) * t + n;
          r.translateTo(i, void 0 === e ? 0 : e), r.updateActiveIndex(), r.updateSlidesClasses()
        }
        emitContainerClasses() {
          const t = this;
          if (!t.params._emitClasses || !t.el) return;
          const e = t.el.className.split(" ").filter((e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass)));
          t.emit("_containerClasses", e.join(" "))
        }
        getSlideClasses(t) {
          const e = this;
          return e.destroyed ? "" : t.className.split(" ").filter((t => 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const t = this;
          if (!t.params._emitClasses || !t.el) return;
          const e = [];
          t.slides.each((r => {
            const n = t.getSlideClasses(r);
            e.push({
              slideEl: r,
              classNames: n
            }), t.emit("_slideClass", r, n)
          })), t.emit("_slideClasses", e)
        }
        slidesPerViewDynamic() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "current",
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const {
            params: r,
            slides: n,
            slidesGrid: i,
            slidesSizesGrid: s,
            size: a,
            activeIndex: o
          } = this;
          let l = 1;
          if (r.centeredSlides) {
            let t, e = n[o].swiperSlideSize;
            for (let r = o + 1; r < n.length; r += 1) n[r] && !t && (e += n[r].swiperSlideSize, l += 1, e > a && (t = !0));
            for (let r = o - 1; r >= 0; r -= 1) n[r] && !t && (e += n[r].swiperSlideSize, l += 1, e > a && (t = !0))
          } else if ("current" === t)
            for (let t = o + 1; t < n.length; t += 1)(e ? i[t] + s[t] - i[o] < a : i[t] - i[o] < a) && (l += 1);
          else
            for (let t = o - 1; t >= 0; t -= 1) i[o] - i[t] < a && (l += 1);
          return l
        }
        update() {
          const t = this;
          if (!t || t.destroyed) return;
          const {
            snapGrid: e,
            params: r
          } = t;

          function n() {
            const e = t.rtlTranslate ? -1 * t.translate : t.translate,
              r = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
            t.setTranslate(r), t.updateActiveIndex(), t.updateSlidesClasses()
          }
          let i;
          r.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode && t.params.freeMode.enabled ? (n(), t.params.autoHeight && t.updateAutoHeight()) : (i = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), i || n()), r.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
        }
        changeDirection(t) {
          let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const r = this,
            n = r.params.direction;
          return t || (t = "horizontal" === n ? "vertical" : "horizontal"), t === n || "horizontal" !== t && "vertical" !== t || (r.$el.removeClass(`${r.params.containerModifierClass}${n}`).addClass(`${r.params.containerModifierClass}${t}`), r.emitContainerClasses(), r.params.direction = t, r.slides.each((e => {
            "vertical" === t ? e.style.width = "" : e.style.height = ""
          })), r.emit("changeDirection"), e && r.update()), r
        }
        changeLanguageDirection(t) {
          const e = this;
          e.rtl && "rtl" === t || !e.rtl && "ltr" === t || (e.rtl = "rtl" === t, e.rtlTranslate = "horizontal" === e.params.direction && e.rtl, e.rtl ? (e.$el.addClass(`${e.params.containerModifierClass}rtl`), e.el.dir = "rtl") : (e.$el.removeClass(`${e.params.containerModifierClass}rtl`), e.el.dir = "ltr"), e.update())
        }
        mount(t) {
          const e = this;
          if (e.mounted) return !0;
          const r = E(t || e.params.el);
          if (!(t = r[0])) return !1;
          t.swiper = e;
          const n = () => `.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = (() => {
            if (t && t.shadowRoot && t.shadowRoot.querySelector) {
              const e = E(t.shadowRoot.querySelector(n()));
              return e.children = t => r.children(t), e
            }
            return r.children ? r.children(n()) : E(r).children(n())
          })();
          if (0 === i.length && e.params.createElements) {
            const t = a().createElement("div");
            i = E(t), t.className = e.params.wrapperClass, r.append(t), r.children(`.${e.params.slideClass}`).each((t => {
              i.append(t)
            }))
          }
          return Object.assign(e, {
            $el: r,
            el: t,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction"),
            rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display")
          }), !0
        }
        init(t) {
          const e = this;
          return e.initialized || !1 === e.mount(t) || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.enabled && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit, !1, !0) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit, !1, !0), e.attachEvents(), e.initialized = !0, e.emit("init"), e.emit("afterInit")), e
        }
        destroy() {
          let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const r = this,
            {
              params: n,
              $el: i,
              $wrapperEl: s,
              slides: a
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), e && (r.removeClasses(), i.removeAttr("style"), s.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((t => {
            r.off(t)
          })), !1 !== t && (r.$el[0].swiper = null, function(t) {
            const e = t;
            Object.keys(e).forEach((t => {
              try {
                e[t] = null
              } catch (t) {}
              try {
                delete e[t]
              } catch (t) {}
            }))
          }(r)), r.destroyed = !0), null
        }
        static extendDefaults(t) {
          C(J, t)
        }
        static get extendedDefaults() {
          return J
        }
        static get defaults() {
          return U
        }
        static installModule(t) {
          Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
          const e = Q.prototype.__modules__;
          "function" == typeof t && e.indexOf(t) < 0 && e.push(t)
        }
        static use(t) {
          return Array.isArray(t) ? (t.forEach((t => Q.installModule(t))), Q) : (Q.installModule(t), Q)
        }
      }
      Object.keys(K).forEach((t => {
        Object.keys(K[t]).forEach((e => {
          Q.prototype[e] = K[t][e]
        }))
      })), Q.use([function(t) {
        let {
          swiper: e,
          on: r,
          emit: n
        } = t;
        const i = l();
        let s = null,
          a = null;
        const o = () => {
            e && !e.destroyed && e.initialized && (n("beforeResize"), n("resize"))
          },
          h = () => {
            e && !e.destroyed && e.initialized && n("orientationchange")
          };
        r("init", (() => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver ? e && !e.destroyed && e.initialized && (s = new ResizeObserver((t => {
            a = i.requestAnimationFrame((() => {
              const {
                width: r,
                height: n
              } = e;
              let i = r,
                s = n;
              t.forEach((t => {
                let {
                  contentBoxSize: r,
                  contentRect: n,
                  target: a
                } = t;
                a && a !== e.el || (i = n ? n.width : (r[0] || r).inlineSize, s = n ? n.height : (r[0] || r).blockSize)
              })), i === r && s === n || o()
            }))
          })), s.observe(e.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", h))
        })), r("destroy", (() => {
          a && i.cancelAnimationFrame(a), s && s.unobserve && e.el && (s.unobserve(e.el), s = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", h)
        }))
      }, function(t) {
        let {
          swiper: e,
          extendParams: r,
          on: n,
          emit: i
        } = t;
        const s = [],
          a = l(),
          o = function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const r = new(a.MutationObserver || a.WebkitMutationObserver)((t => {
              if (1 === t.length) return void i("observerUpdate", t[0]);
              const e = function() {
                i("observerUpdate", t[0])
              };
              a.requestAnimationFrame ? a.requestAnimationFrame(e) : a.setTimeout(e, 0)
            }));
            r.observe(t, {
              attributes: void 0 === e.attributes || e.attributes,
              childList: void 0 === e.childList || e.childList,
              characterData: void 0 === e.characterData || e.characterData
            }), s.push(r)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), n("init", (() => {
          if (e.params.observer) {
            if (e.params.observeParents) {
              const t = e.$el.parents();
              for (let e = 0; e < t.length; e += 1) o(t[e])
            }
            o(e.$el[0], {
              childList: e.params.observeSlideChildren
            }), o(e.$wrapperEl[0], {
              attributes: !1
            })
          }
        })), n("destroy", (() => {
          s.forEach((t => {
            t.disconnect()
          })), s.splice(0, s.length)
        }))
      }]);
      const tt = Q;

      function et(t, e, r, n) {
        const i = a();
        return t.params.createElements && Object.keys(n).forEach((s => {
          if (!r[s] && !0 === r.auto) {
            let a = t.$el.children(`.${n[s]}`)[0];
            a || (a = i.createElement("div"), a.className = n[s], t.$el.append(a)), r[s] = a, e[s] = a
          }
        })), r
      }

      function rt(t) {
        let {
          swiper: e,
          extendParams: r,
          on: n,
          emit: i
        } = t;

        function s(t) {
          let r;
          return t && (r = E(t), e.params.uniqueNavElements && "string" == typeof t && r.length > 1 && 1 === e.$el.find(t).length && (r = e.$el.find(t))), r
        }

        function a(t, r) {
          const n = e.params.navigation;
          t && t.length > 0 && (t[r ? "addClass" : "removeClass"](n.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = r), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](n.lockClass))
        }

        function o() {
          if (e.params.loop) return;
          const {
            $nextEl: t,
            $prevEl: r
          } = e.navigation;
          a(r, e.isBeginning && !e.params.rewind), a(t, e.isEnd && !e.params.rewind)
        }

        function l(t) {
          t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), i("navigationPrev"))
        }

        function h(t) {
          t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), i("navigationNext"))
        }

        function p() {
          const t = e.params.navigation;
          if (e.params.navigation = et(e, e.originalParams.navigation, e.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !t.nextEl && !t.prevEl) return;
          const r = s(t.nextEl),
            n = s(t.prevEl);
          r && r.length > 0 && r.on("click", h), n && n.length > 0 && n.on("click", l), Object.assign(e.navigation, {
            $nextEl: r,
            nextEl: r && r[0],
            $prevEl: n,
            prevEl: n && n[0]
          }), e.enabled || (r && r.addClass(t.lockClass), n && n.addClass(t.lockClass))
        }

        function u() {
          const {
            $nextEl: t,
            $prevEl: r
          } = e.navigation;
          t && t.length && (t.off("click", h), t.removeClass(e.params.navigation.disabledClass)), r && r.length && (r.off("click", l), r.removeClass(e.params.navigation.disabledClass))
        }
        r({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null
        }, n("init", (() => {
          !1 === e.params.navigation.enabled ? c() : (p(), o())
        })), n("toEdge fromEdge lock unlock", (() => {
          o()
        })), n("destroy", (() => {
          u()
        })), n("enable disable", (() => {
          const {
            $nextEl: t,
            $prevEl: r
          } = e.navigation;
          t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), r && r[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
        })), n("click", ((t, r) => {
          const {
            $nextEl: n,
            $prevEl: s
          } = e.navigation, a = r.target;
          if (e.params.navigation.hideOnClick && !E(a).is(s) && !E(a).is(n)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === a || e.pagination.el.contains(a))) return;
            let t;
            n ? t = n.hasClass(e.params.navigation.hiddenClass) : s && (t = s.hasClass(e.params.navigation.hiddenClass)), i(!0 === t ? "navigationShow" : "navigationHide"), n && n.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass)
          }
        }));
        const c = () => {
          e.$el.addClass(e.params.navigation.navigationDisabledClass), u()
        };
        Object.assign(e.navigation, {
          enable: () => {
            e.$el.removeClass(e.params.navigation.navigationDisabledClass), p(), o()
          },
          disable: c,
          update: o,
          init: p,
          destroy: u
        })
      }

      function nt() {
        return `.${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function it(t) {
        let {
          swiper: e,
          extendParams: r,
          on: n,
          emit: i
        } = t;
        const s = "swiper-pagination";
        let a;
        r({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: t => t,
            formatFractionTotal: t => t,
            bulletClass: `${s}-bullet`,
            bulletActiveClass: `${s}-bullet-active`,
            modifierClass: `${s}-`,
            currentClass: `${s}-current`,
            totalClass: `${s}-total`,
            hiddenClass: `${s}-hidden`,
            progressbarFillClass: `${s}-progressbar-fill`,
            progressbarOppositeClass: `${s}-progressbar-opposite`,
            clickableClass: `${s}-clickable`,
            lockClass: `${s}-lock`,
            horizontalClass: `${s}-horizontal`,
            verticalClass: `${s}-vertical`,
            paginationDisabledClass: `${s}-disabled`
          }
        }), e.pagination = {
          el: null,
          $el: null,
          bullets: []
        };
        let o = 0;

        function l() {
          return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
        }

        function h(t, r) {
          const {
            bulletActiveClass: n
          } = e.params.pagination;
          t[r]().addClass(`${n}-${r}`)[r]().addClass(`${n}-${r}-${r}`)
        }

        function p() {
          const t = e.rtl,
            r = e.params.pagination;
          if (l()) return;
          const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            s = e.pagination.$el;
          let p;
          const u = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
          if (e.params.loop ? (p = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), p > n - 1 - 2 * e.loopedSlides && (p -= n - 2 * e.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== e.params.paginationType && (p = u + p)) : p = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === r.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const n = e.pagination.bullets;
            let i, l, u;
            if (r.dynamicBullets && (a = n.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(e.isHorizontal() ? "width" : "height", a * (r.dynamicMainBullets + 4) + "px"), r.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (o += p - (e.previousIndex - e.loopedSlides || 0), o > r.dynamicMainBullets - 1 ? o = r.dynamicMainBullets - 1 : o < 0 && (o = 0)), i = Math.max(p - o, 0), l = i + (Math.min(n.length, r.dynamicMainBullets) - 1), u = (l + i) / 2), n.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((t => `${r.bulletActiveClass}${t}`)).join(" ")), s.length > 1) n.each((t => {
              const e = E(t),
                n = e.index();
              n === p && e.addClass(r.bulletActiveClass), r.dynamicBullets && (n >= i && n <= l && e.addClass(`${r.bulletActiveClass}-main`), n === i && h(e, "prev"), n === l && h(e, "next"))
            }));
            else {
              const t = n.eq(p),
                s = t.index();
              if (t.addClass(r.bulletActiveClass), r.dynamicBullets) {
                const t = n.eq(i),
                  a = n.eq(l);
                for (let t = i; t <= l; t += 1) n.eq(t).addClass(`${r.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (s >= n.length) {
                    for (let t = r.dynamicMainBullets; t >= 0; t -= 1) n.eq(n.length - t).addClass(`${r.bulletActiveClass}-main`);
                    n.eq(n.length - r.dynamicMainBullets - 1).addClass(`${r.bulletActiveClass}-prev`)
                  } else h(t, "prev"), h(a, "next");
                else h(t, "prev"), h(a, "next")
              }
            }
            if (r.dynamicBullets) {
              const i = Math.min(n.length, r.dynamicMainBullets + 4),
                s = (a * i - a) / 2 - u * a,
                o = t ? "right" : "left";
              n.css(e.isHorizontal() ? o : "top", `${s}px`)
            }
          }
          if ("fraction" === r.type && (s.find(nt(r.currentClass)).text(r.formatFractionCurrent(p + 1)), s.find(nt(r.totalClass)).text(r.formatFractionTotal(u))), "progressbar" === r.type) {
            let t;
            t = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
            const n = (p + 1) / u;
            let i = 1,
              a = 1;
            "horizontal" === t ? i = n : a = n, s.find(nt(r.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`).transition(e.params.speed)
          }
          "custom" === r.type && r.renderCustom ? (s.html(r.renderCustom(e, p + 1, u)), i("paginationRender", s[0])) : i("paginationUpdate", s[0]), e.params.watchOverflow && e.enabled && s[e.isLocked ? "addClass" : "removeClass"](r.lockClass)
        }

        function u() {
          const t = e.params.pagination;
          if (l()) return;
          const r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            n = e.pagination.$el;
          let s = "";
          if ("bullets" === t.type) {
            let i = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && i > r && (i = r);
            for (let r = 0; r < i; r += 1) t.renderBullet ? s += t.renderBullet.call(e, r, t.bulletClass) : s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
            n.html(s), e.pagination.bullets = n.find(nt(t.bulletClass))
          }
          "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, n.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, n.html(s)), "custom" !== t.type && i("paginationRender", e.pagination.$el[0])
        }

        function c() {
          e.params.pagination = et(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
          });
          const t = e.params.pagination;
          if (!t.el) return;
          let r = E(t.el);
          0 !== r.length && (e.params.uniqueNavElements && "string" == typeof t.el && r.length > 1 && (r = e.$el.find(t.el), r.length > 1 && (r = r.filter((t => E(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && r.addClass(t.clickableClass), r.addClass(t.modifierClass + t.type), r.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (r.addClass(`${t.modifierClass}${t.type}-dynamic`), o = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && r.addClass(t.progressbarOppositeClass), t.clickable && r.on("click", nt(t.bulletClass), (function(t) {
            t.preventDefault();
            let r = E(this).index() * e.params.slidesPerGroup;
            e.params.loop && (r += e.loopedSlides), e.slideTo(r)
          })), Object.assign(e.pagination, {
            $el: r,
            el: r[0]
          }), e.enabled || r.addClass(t.lockClass))
        }

        function f() {
          const t = e.params.pagination;
          if (l()) return;
          const r = e.pagination.$el;
          r.removeClass(t.hiddenClass), r.removeClass(t.modifierClass + t.type), r.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && r.off("click", nt(t.bulletClass))
        }
        n("init", (() => {
          !1 === e.params.pagination.enabled ? d() : (c(), u(), p())
        })), n("activeIndexChange", (() => {
          (e.params.loop || void 0 === e.snapIndex) && p()
        })), n("snapIndexChange", (() => {
          e.params.loop || p()
        })), n("slidesLengthChange", (() => {
          e.params.loop && (u(), p())
        })), n("snapGridLengthChange", (() => {
          e.params.loop || (u(), p())
        })), n("destroy", (() => {
          f()
        })), n("enable disable", (() => {
          const {
            $el: t
          } = e.pagination;
          t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
        })), n("lock unlock", (() => {
          p()
        })), n("click", ((t, r) => {
          const n = r.target,
            {
              $el: s
            } = e.pagination;
          if (e.params.pagination.el && e.params.pagination.hideOnClick && s && s.length > 0 && !E(n).hasClass(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && n === e.navigation.nextEl || e.navigation.prevEl && n === e.navigation.prevEl)) return;
            const t = s.hasClass(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"), s.toggleClass(e.params.pagination.hiddenClass)
          }
        }));
        const d = () => {
          e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), f()
        };
        Object.assign(e.pagination, {
          enable: () => {
            e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), c(), u(), p()
          },
          disable: d,
          render: u,
          update: p,
          init: c,
          destroy: f
        })
      }

      function st(t) {
        let {
          swiper: e,
          extendParams: r,
          on: n
        } = t;
        r({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
          }
        });
        let i = !1,
          s = !1;

        function a() {
          const t = e.thumbs.swiper;
          if (!t || t.destroyed) return;
          const r = t.clickedIndex,
            n = t.clickedSlide;
          if (n && E(n).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
          if (null == r) return;
          let i;
          if (i = t.params.loop ? parseInt(E(t.clickedSlide).attr("data-swiper-slide-index"), 10) : r, e.params.loop) {
            let t = e.activeIndex;
            e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
            const r = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
              n = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
            i = void 0 === r ? n : void 0 === n ? r : n - t < t - r ? n : r
          }
          e.slideTo(i)
        }

        function o() {
          const {
            thumbs: t
          } = e.params;
          if (i) return !1;
          i = !0;
          const r = e.constructor;
          if (t.swiper instanceof r) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          });
          else if (w(t.swiper)) {
            const n = Object.assign({}, t.swiper);
            Object.assign(n, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), e.thumbs.swiper = new r(n), s = !0
          }
          return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", a), !0
        }

        function l(t) {
          const r = e.thumbs.swiper;
          if (!r || r.destroyed) return;
          const n = "auto" === r.params.slidesPerView ? r.slidesPerViewDynamic() : r.params.slidesPerView;
          let i = 1;
          const s = e.params.thumbs.slideThumbActiveClass;
          if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (i = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), r.slides.removeClass(s), r.params.loop || r.params.virtual && r.params.virtual.enabled)
            for (let t = 0; t < i; t += 1) r.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(s);
          else
            for (let t = 0; t < i; t += 1) r.slides.eq(e.realIndex + t).addClass(s);
          const a = e.params.thumbs.autoScrollOffset,
            o = a && !r.params.loop;
          if (e.realIndex !== r.realIndex || o) {
            let i, s, l = r.activeIndex;
            if (r.params.loop) {
              r.slides.eq(l).hasClass(r.params.slideDuplicateClass) && (r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft, l = r.activeIndex);
              const t = r.slides.eq(l).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),
                n = r.slides.eq(l).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
              i = void 0 === t ? n : void 0 === n ? t : n - l == l - t ? r.params.slidesPerGroup > 1 ? n : l : n - l < l - t ? n : t, s = e.activeIndex > e.previousIndex ? "next" : "prev"
            } else i = e.realIndex, s = i > e.previousIndex ? "next" : "prev";
            o && (i += "next" === s ? a : -1 * a), r.visibleSlidesIndexes && r.visibleSlidesIndexes.indexOf(i) < 0 && (r.params.centeredSlides ? i = i > l ? i - Math.floor(n / 2) + 1 : i + Math.floor(n / 2) - 1 : i > l && r.params.slidesPerGroup, r.slideTo(i, t ? 0 : void 0))
          }
        }
        e.thumbs = {
          swiper: null
        }, n("beforeInit", (() => {
          const {
            thumbs: t
          } = e.params;
          t && t.swiper && (o(), l(!0))
        })), n("slideChange update resize observerUpdate", (() => {
          l()
        })), n("setTransition", ((t, r) => {
          const n = e.thumbs.swiper;
          n && !n.destroyed && n.setTransition(r)
        })), n("beforeDestroy", (() => {
          const t = e.thumbs.swiper;
          t && !t.destroyed && s && t.destroy()
        })), Object.assign(e.thumbs, {
          init: o,
          update: l
        })
      }

      function at(t) {
        let {
          swiper: e,
          extendParams: r,
          emit: n,
          once: i
        } = t;
        r({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
          }
        }), Object.assign(e, {
          freeMode: {
            onTouchStart: function() {
              const t = e.getTranslate();
              e.setTranslate(t), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
                currentPos: e.rtl ? e.translate : -e.translate
              })
            },
            onTouchMove: function() {
              const {
                touchEventsData: t,
                touches: r
              } = e;
              0 === t.velocities.length && t.velocities.push({
                position: r[e.isHorizontal() ? "startX" : "startY"],
                time: t.touchStartTime
              }), t.velocities.push({
                position: r[e.isHorizontal() ? "currentX" : "currentY"],
                time: P()
              })
            },
            onTouchEnd: function(t) {
              let {
                currentPos: r
              } = t;
              const {
                params: s,
                $wrapperEl: a,
                rtlTranslate: o,
                snapGrid: l,
                touchEventsData: h
              } = e, p = P() - h.touchStartTime;
              if (r < -e.minTranslate()) e.slideTo(e.activeIndex);
              else if (r > -e.maxTranslate()) e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);
              else {
                if (s.freeMode.momentum) {
                  if (h.velocities.length > 1) {
                    const t = h.velocities.pop(),
                      r = h.velocities.pop(),
                      n = t.position - r.position,
                      i = t.time - r.time;
                    e.velocity = n / i, e.velocity /= 2, Math.abs(e.velocity) < s.freeMode.minimumVelocity && (e.velocity = 0), (i > 150 || P() - t.time > 300) && (e.velocity = 0)
                  } else e.velocity = 0;
                  e.velocity *= s.freeMode.momentumVelocityRatio, h.velocities.length = 0;
                  let t = 1e3 * s.freeMode.momentumRatio;
                  const r = e.velocity * t;
                  let p = e.translate + r;
                  o && (p = -p);
                  let u, c = !1;
                  const f = 20 * Math.abs(e.velocity) * s.freeMode.momentumBounceRatio;
                  let d;
                  if (p < e.maxTranslate()) s.freeMode.momentumBounce ? (p + e.maxTranslate() < -f && (p = e.maxTranslate() - f), u = e.maxTranslate(), c = !0, h.allowMomentumBounce = !0) : p = e.maxTranslate(), s.loop && s.centeredSlides && (d = !0);
                  else if (p > e.minTranslate()) s.freeMode.momentumBounce ? (p - e.minTranslate() > f && (p = e.minTranslate() + f), u = e.minTranslate(), c = !0, h.allowMomentumBounce = !0) : p = e.minTranslate(), s.loop && s.centeredSlides && (d = !0);
                  else if (s.freeMode.sticky) {
                    let t;
                    for (let e = 0; e < l.length; e += 1)
                      if (l[e] > -p) {
                        t = e;
                        break
                      } p = Math.abs(l[t] - p) < Math.abs(l[t - 1] - p) || "next" === e.swipeDirection ? l[t] : l[t - 1], p = -p
                  }
                  if (d && i("transitionEnd", (() => {
                      e.loopFix()
                    })), 0 !== e.velocity) {
                    if (t = o ? Math.abs((-p - e.translate) / e.velocity) : Math.abs((p - e.translate) / e.velocity), s.freeMode.sticky) {
                      const r = Math.abs((o ? -p : p) - e.translate),
                        n = e.slidesSizesGrid[e.activeIndex];
                      t = r < n ? s.speed : r < 2 * n ? 1.5 * s.speed : 2.5 * s.speed
                    }
                  } else if (s.freeMode.sticky) return void e.slideToClosest();
                  s.freeMode.momentumBounce && c ? (e.updateProgress(u), e.setTransition(t), e.setTranslate(p), e.transitionStart(!0, e.swipeDirection), e.animating = !0, a.transitionEnd((() => {
                    e && !e.destroyed && h.allowMomentumBounce && (n("momentumBounce"), e.setTransition(s.speed), setTimeout((() => {
                      e.setTranslate(u), a.transitionEnd((() => {
                        e && !e.destroyed && e.transitionEnd()
                      }))
                    }), 0))
                  }))) : e.velocity ? (n("_freeModeNoMomentumRelease"), e.updateProgress(p), e.setTransition(t), e.setTranslate(p), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, a.transitionEnd((() => {
                    e && !e.destroyed && e.transitionEnd()
                  })))) : e.updateProgress(p), e.updateActiveIndex(), e.updateSlidesClasses()
                } else {
                  if (s.freeMode.sticky) return void e.slideToClosest();
                  s.freeMode && n("_freeModeNoMomentumRelease")
                }(!s.freeMode.momentum || p >= s.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
              }
            }
          }
        })
      }
    },
    8522: (t, e, r) => {
      "use strict";
      r.d(e, {
        X: () => a
      });
      var n = r(822),
        i = r(398),
        s = r(1879);

      function a({
        children: t,
        features: e,
        strict: r = !1
      }) {
        const [, a] = (0, n.useState)(!o(e)), l = (0, n.useRef)(void 0);
        if (!o(e)) {
          const {
            renderer: t,
            ...r
          } = e;
          l.current = t, (0, s.K)(r)
        }
        return (0, n.useEffect)((() => {
          o(e) && e().then((({
            renderer: t,
            ...e
          }) => {
            (0, s.K)(e), l.current = t, a(!0)
          }))
        }), []), n.createElement(i.u.Provider, {
          value: {
            renderer: l.current,
            strict: r
          }
        }, t)
      }

      function o(t) {
        return "function" == typeof t
      }
    },
    1673: (t, e, r) => {
      "use strict";
      r.d(e, {
        H: () => s
      });
      var n = r(1903),
        i = r(9743);
      const s = {
        renderer: r(5342).b,
        ...n.s,
        ...i.E
      }
    },
    2560: (t, e, r) => {
      "use strict";
      r.d(e, {
        m: () => s
      });
      var n = r(6264),
        i = r(7672);
      const s = (0, n.D)(i.w)
    },
    7650: (t, e, r) => {
      "use strict";
      r.d(e, {
        YD: () => p
      });
      var n = r(822);
      const i = new Map,
        s = new WeakMap;
      let a, o = 0;

      function l(t, e, r = {}, n = a) {
        if (void 0 === window.IntersectionObserver && void 0 !== n) {
          const i = t.getBoundingClientRect();
          return e(n, {
            isIntersecting: n,
            target: t,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: i,
            intersectionRect: i,
            rootBounds: i
          }), () => {}
        }
        const {
          id: l,
          observer: h,
          elements: p
        } = function(t) {
          let e = function(t) {
              return Object.keys(t).sort().filter((e => void 0 !== t[e])).map((e => {
                return `${e}_${"root"===e?(r=t.root,r?(s.has(r)||(o+=1,s.set(r,o.toString())),s.get(r)):"0"):t[e]}`;
                var r
              })).toString()
            }(t),
            r = i.get(e);
          if (!r) {
            const n = new Map;
            let s;
            const a = new IntersectionObserver((e => {
              e.forEach((e => {
                var r;
                const i = e.isIntersecting && s.some((t => e.intersectionRatio >= t));
                t.trackVisibility && void 0 === e.isVisible && (e.isVisible = i), null == (r = n.get(e.target)) || r.forEach((t => {
                  t(i, e)
                }))
              }))
            }), t);
            s = a.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), r = {
              id: e,
              observer: a,
              elements: n
            }, i.set(e, r)
          }
          return r
        }(r);
        let u = p.get(t) || [];
        return p.has(t) || p.set(t, u), u.push(e), h.observe(t),
          function() {
            u.splice(u.indexOf(e), 1), 0 === u.length && (p.delete(t), h.unobserve(t)), 0 === p.size && (h.disconnect(), i.delete(l))
          }
      }
      class h extends n.Component {
        constructor(t) {
          super(t), this.node = null, this._unobserveCb = null, this.handleNode = t => {
            this.node && (this.unobserve(), t || this.props.triggerOnce || this.props.skip || this.setState({
              inView: !!this.props.initialInView,
              entry: void 0
            })), this.node = t || null, this.observeNode()
          }, this.handleChange = (t, e) => {
            t && this.props.triggerOnce && this.unobserve(), isPlainChildren(this.props) || this.setState({
              inView: t,
              entry: e
            }), this.props.onChange && this.props.onChange(t, e)
          }, this.state = {
            inView: !!t.initialInView,
            entry: void 0
          }
        }
        componentDidUpdate(t) {
          t.rootMargin === this.props.rootMargin && t.root === this.props.root && t.threshold === this.props.threshold && t.skip === this.props.skip && t.trackVisibility === this.props.trackVisibility && t.delay === this.props.delay || (this.unobserve(), this.observeNode())
        }
        componentWillUnmount() {
          this.unobserve(), this.node = null
        }
        observeNode() {
          if (!this.node || this.props.skip) return;
          const {
            threshold: t,
            root: e,
            rootMargin: r,
            trackVisibility: n,
            delay: i,
            fallbackInView: s
          } = this.props;
          this._unobserveCb = l(this.node, this.handleChange, {
            threshold: t,
            root: e,
            rootMargin: r,
            trackVisibility: n,
            delay: i
          }, s)
        }
        unobserve() {
          this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
        }
        render() {
          if (!isPlainChildren(this.props)) {
            const {
              inView: t,
              entry: e
            } = this.state;
            return this.props.children({
              inView: t,
              entry: e,
              ref: this.handleNode
            })
          }
          const t = this.props,
            {
              children: e,
              as: r
            } = t,
            i = function(t, e) {
              if (null == t) return {};
              for (var r, n, i = {}, s = Object.keys(t); n < s.length; n++) s[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
              return i
            }(t, _excluded);
          return n.createElement(r || "div", _extends({
            ref: this.handleNode
          }, i), e)
        }
      }

      function p({
        threshold: t,
        delay: e,
        trackVisibility: r,
        rootMargin: i,
        root: s,
        triggerOnce: a,
        skip: o,
        initialInView: h,
        fallbackInView: p,
        onChange: u
      } = {}) {
        var c;
        const [f, d] = n.useState(null), m = n.useRef(), [g, v] = n.useState({
          inView: !!h,
          entry: void 0
        });
        m.current = u, n.useEffect((() => {
          if (o || !f) return;
          let n;
          return n = l(f, ((t, e) => {
            v({
              inView: t,
              entry: e
            }), m.current && m.current(t, e), e.isIntersecting && a && n && (n(), n = void 0)
          }), {
            root: s,
            rootMargin: i,
            threshold: t,
            trackVisibility: r,
            delay: e
          }, p), () => {
            n && n()
          }
        }), [Array.isArray(t) ? t.toString() : t, f, s, i, a, o, r, p, e]);
        const y = null == (c = g.entry) ? void 0 : c.target,
          b = n.useRef();
        f || !y || a || o || b.current === y || (b.current = y, v({
          inView: !!h,
          entry: void 0
        }));
        const _ = [d, g.inView, g.entry];
        return _.ref = _[0], _.inView = _[1], _.entry = _[2], _
      }
    }
  }
]);