/*! For license information please see 05d6ae26b9f5f51d4dac3f586f1d9f20.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6c8c88d8-dbb3-427f-8bfd-9ced06cf05f2", e._sentryDebugIdIdentifier = "sentry-dbid-6c8c88d8-dbb3-427f-8bfd-9ced06cf05f2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-gtao-career-progress-hub",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [56], {
    1824: (e, t, r) => {
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      r.d(t, {
        W: () => sr
      });
      var i, s, a, o, l, d, c, u, p, f, h, v, m, g = function() {
          return i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i
        },
        w = 1,
        b = [],
        y = [],
        x = [],
        S = Date.now,
        T = function(e, t) {
          return t
        },
        E = function(e, t) {
          return ~x.indexOf(e) && x[x.indexOf(e) + 1][t]
        },
        C = function(e) {
          return !!~f.indexOf(e)
        },
        P = function(e, t, r, n, i) {
          return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
          })
        },
        _ = function(e, t, r, n) {
          return e.removeEventListener(t, r, !!n)
        },
        M = "scrollLeft",
        k = "scrollTop",
        O = function() {
          return h && h.isPressed || y.cache++
        },
        I = function(e, t) {
          var r = function r(n) {
            if (n || 0 === n) {
              w && (a.history.scrollRestoration = "manual");
              var i = h && h.isPressed;
              n = r.v = Math.round(n) || (h && h.iOS ? 1 : 0), e(n), r.cacheID = y.cache, i && T("ss", n)
            } else(t || y.cache !== r.cacheID || T("ref")) && (r.cacheID = y.cache, r.v = e());
            return r.v + r.offset
          };
          return r.offset = 0, e && r
        },
        L = {
          s: M,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: I((function(e) {
            return arguments.length ? a.scrollTo(e, A.sc()) : a.pageXOffset || o[M] || l[M] || d[M] || 0
          }))
        },
        A = {
          s: k,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: L,
          sc: I((function(e) {
            return arguments.length ? a.scrollTo(L.sc(), e) : a.pageYOffset || o[k] || l[k] || d[k] || 0
          }))
        },
        z = function(e, t) {
          return (t && t._ctx && t._ctx.selector || i.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== i.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
        },
        D = function(e, t) {
          var r = t.s,
            n = t.sc;
          C(e) && (e = o.scrollingElement || l);
          var s = y.indexOf(e),
            a = n === A.sc ? 1 : 2;
          !~s && (s = y.push(e) - 1), y[s + a] || P(e, "scroll", O);
          var d = y[s + a],
            c = d || (y[s + a] = I(E(e, r), !0) || (C(e) ? n : I((function(t) {
              return arguments.length ? e[r] = t : e[r]
            }))));
          return c.target = e, d || (c.smooth = "smooth" === i.getProperty(e, "scrollBehavior")), c
        },
        N = function(e, t, r) {
          var n = e,
            i = e,
            s = S(),
            a = s,
            o = t || 50,
            l = Math.max(500, 3 * o),
            d = function(e, t) {
              var l = S();
              t || l - s > o ? (i = n, n = e, a = s, s = l) : r ? n += e : n = i + (e - i) / (l - a) * (s - a)
            };
          return {
            update: d,
            reset: function() {
              i = n = r ? 0 : n, a = s = 0
            },
            getVelocity: function(e) {
              var t = a,
                o = i,
                c = S();
              return (e || 0 === e) && e !== n && d(e), s === a || c - a > l ? 0 : (n + (r ? o : -o)) / ((r ? c : s) - t) * 1e3
            }
          }
        },
        G = function(e, t) {
          return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
        },
        R = function(e) {
          var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(r) ? t : r
        },
        B = function() {
          var e, t, r, n;
          (p = i.core.globals().ScrollTrigger) && p.core && (e = p.core, t = e.bridge || {}, r = e._scrollers, n = e._proxies, r.push.apply(r, y), n.push.apply(n, x), y = r, x = n, T = function(e, r) {
            return t[e](r)
          })
        },
        F = function(e) {
          return (i = e || g()) && "undefined" != typeof document && document.body && (a = window, o = document, l = o.documentElement, d = o.body, f = [a, o, l, d], i.utils.clamp, m = i.core.context || function() {}, u = "onpointerenter" in d ? "pointer" : "mouse", c = V.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, v = V.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function() {
            return w = 0
          }), 500), B(), s = 1), s
        };
      L.op = A, y.cache = 0;
      var V = function() {
        function e(e) {
          this.init(e)
        }
        var t, r;
        return e.prototype.init = function(e) {
          s || F(i) || console.warn("Please gsap.registerPlugin(Observer)"), p || B();
          var t = e.tolerance,
            r = e.dragMinimum,
            n = e.type,
            f = e.target,
            g = e.lineHeight,
            w = e.debounce,
            y = e.preventDefault,
            x = e.onStop,
            T = e.onStopDelay,
            E = e.ignore,
            M = e.wheelSpeed,
            k = e.event,
            I = e.onDragStart,
            V = e.onDragEnd,
            j = e.onDrag,
            H = e.onPress,
            Y = e.onRelease,
            $ = e.onRight,
            W = e.onLeft,
            X = e.onUp,
            q = e.onDown,
            U = e.onChangeX,
            K = e.onChangeY,
            Z = e.onChange,
            J = e.onToggleX,
            Q = e.onToggleY,
            ee = e.onHover,
            te = e.onHoverEnd,
            re = e.onMove,
            ne = e.ignoreCheck,
            ie = e.isNormalizer,
            se = e.onGestureStart,
            ae = e.onGestureEnd,
            oe = e.onWheel,
            le = e.onEnable,
            de = e.onDisable,
            ce = e.onClick,
            ue = e.scrollSpeed,
            pe = e.capture,
            fe = e.allowClicks,
            he = e.lockAxis,
            ve = e.onLockAxis;
          this.target = f = z(f) || l, this.vars = e, E && (E = i.utils.toArray(E)), t = t || 1e-9, r = r || 0, M = M || 1, ue = ue || 1, n = n || "wheel,touch,pointer", w = !1 !== w, g || (g = parseFloat(a.getComputedStyle(d).lineHeight) || 22);
          var me, ge, we, be, ye, xe, Se, Te = this,
            Ee = 0,
            Ce = 0,
            Pe = D(f, L),
            _e = D(f, A),
            Me = Pe(),
            ke = _e(),
            Oe = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === v[0],
            Ie = C(f),
            Le = f.ownerDocument || o,
            Ae = [0, 0, 0],
            ze = [0, 0, 0],
            De = 0,
            Ne = function() {
              return De = S()
            },
            Ge = function(e, t) {
              return (Te.event = e) && E && ~E.indexOf(e.target) || t && Oe && "touch" !== e.pointerType || ne && ne(e, t)
            },
            Re = function() {
              var e = Te.deltaX = R(Ae),
                r = Te.deltaY = R(ze),
                n = Math.abs(e) >= t,
                i = Math.abs(r) >= t;
              Z && (n || i) && Z(Te, e, r, Ae, ze), n && ($ && Te.deltaX > 0 && $(Te), W && Te.deltaX < 0 && W(Te), U && U(Te), J && Te.deltaX < 0 != Ee < 0 && J(Te), Ee = Te.deltaX, Ae[0] = Ae[1] = Ae[2] = 0), i && (q && Te.deltaY > 0 && q(Te), X && Te.deltaY < 0 && X(Te), K && K(Te), Q && Te.deltaY < 0 != Ce < 0 && Q(Te), Ce = Te.deltaY, ze[0] = ze[1] = ze[2] = 0), (be || we) && (re && re(Te), we && (j(Te), we = !1), be = !1), xe && !(xe = !1) && ve && ve(Te), ye && (oe(Te), ye = !1), me = 0
            },
            Be = function(e, t, r) {
              Ae[r] += e, ze[r] += t, Te._vx.update(e), Te._vy.update(t), w ? me || (me = requestAnimationFrame(Re)) : Re()
            },
            Fe = function(e, t) {
              he && !Se && (Te.axis = Se = Math.abs(e) > Math.abs(t) ? "x" : "y", xe = !0), "y" !== Se && (Ae[2] += e, Te._vx.update(e, !0)), "x" !== Se && (ze[2] += t, Te._vy.update(t, !0)), w ? me || (me = requestAnimationFrame(Re)) : Re()
            },
            Ve = function(e) {
              if (!Ge(e, 1)) {
                var t = (e = G(e, y)).clientX,
                  n = e.clientY,
                  i = t - Te.x,
                  s = n - Te.y,
                  a = Te.isDragging;
                Te.x = t, Te.y = n, (a || Math.abs(Te.startX - t) >= r || Math.abs(Te.startY - n) >= r) && (j && (we = !0), a || (Te.isDragging = !0), Fe(i, s), a || I && I(Te))
              }
            },
            je = Te.onPress = function(e) {
              Ge(e, 1) || e && e.button || (Te.axis = Se = null, ge.pause(), Te.isPressed = !0, e = G(e), Ee = Ce = 0, Te.startX = Te.x = e.clientX, Te.startY = Te.y = e.clientY, Te._vx.reset(), Te._vy.reset(), P(ie ? f : Le, v[1], Ve, y, !0), Te.deltaX = Te.deltaY = 0, H && H(Te))
            },
            He = Te.onRelease = function(e) {
              if (!Ge(e, 1)) {
                _(ie ? f : Le, v[1], Ve, !0);
                var t = !isNaN(Te.y - Te.startY),
                  r = Te.isDragging && (Math.abs(Te.x - Te.startX) > 3 || Math.abs(Te.y - Te.startY) > 3),
                  n = G(e);
                !r && t && (Te._vx.reset(), Te._vy.reset(), y && fe && i.delayedCall(.08, (function() {
                  if (S() - De > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (Le.createEvent) {
                    var t = Le.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, a, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                  }
                }))), Te.isDragging = Te.isGesturing = Te.isPressed = !1, x && !ie && ge.restart(!0), V && r && V(Te), Y && Y(Te, r)
              }
            },
            Ye = function(e) {
              return e.touches && e.touches.length > 1 && (Te.isGesturing = !0) && se(e, Te.isDragging)
            },
            $e = function() {
              return (Te.isGesturing = !1) || ae(Te)
            },
            We = function(e) {
              if (!Ge(e)) {
                var t = Pe(),
                  r = _e();
                Be((t - Me) * ue, (r - ke) * ue, 1), Me = t, ke = r, x && ge.restart(!0)
              }
            },
            Xe = function(e) {
              if (!Ge(e)) {
                e = G(e, y), oe && (ye = !0);
                var t = (1 === e.deltaMode ? g : 2 === e.deltaMode ? a.innerHeight : 1) * M;
                Be(e.deltaX * t, e.deltaY * t, 0), x && !ie && ge.restart(!0)
              }
            },
            qe = function(e) {
              if (!Ge(e)) {
                var t = e.clientX,
                  r = e.clientY,
                  n = t - Te.x,
                  i = r - Te.y;
                Te.x = t, Te.y = r, be = !0, (n || i) && Fe(n, i)
              }
            },
            Ue = function(e) {
              Te.event = e, ee(Te)
            },
            Ke = function(e) {
              Te.event = e, te(Te)
            },
            Ze = function(e) {
              return Ge(e) || G(e, y) && ce(Te)
            };
          ge = Te._dc = i.delayedCall(T || .25, (function() {
            Te._vx.reset(), Te._vy.reset(), ge.pause(), x && x(Te)
          })).pause(), Te.deltaX = Te.deltaY = 0, Te._vx = N(0, 50, !0), Te._vy = N(0, 50, !0), Te.scrollX = Pe, Te.scrollY = _e, Te.isDragging = Te.isGesturing = Te.isPressed = !1, m(this), Te.enable = function(e) {
            return Te.isEnabled || (P(Ie ? Le : f, "scroll", O), n.indexOf("scroll") >= 0 && P(Ie ? Le : f, "scroll", We, y, pe), n.indexOf("wheel") >= 0 && P(f, "wheel", Xe, y, pe), (n.indexOf("touch") >= 0 && c || n.indexOf("pointer") >= 0) && (P(f, v[0], je, y, pe), P(Le, v[2], He), P(Le, v[3], He), fe && P(f, "click", Ne, !1, !0), ce && P(f, "click", Ze), se && P(Le, "gesturestart", Ye), ae && P(Le, "gestureend", $e), ee && P(f, u + "enter", Ue), te && P(f, u + "leave", Ke), re && P(f, u + "move", qe)), Te.isEnabled = !0, e && e.type && je(e), le && le(Te)), Te
          }, Te.disable = function() {
            Te.isEnabled && (b.filter((function(e) {
              return e !== Te && C(e.target)
            })).length || _(Ie ? Le : f, "scroll", O), Te.isPressed && (Te._vx.reset(), Te._vy.reset(), _(ie ? f : Le, v[1], Ve, !0)), _(Ie ? Le : f, "scroll", We, pe), _(f, "wheel", Xe, pe), _(f, v[0], je, pe), _(Le, v[2], He), _(Le, v[3], He), _(f, "click", Ne, !0), _(f, "click", Ze), _(Le, "gesturestart", Ye), _(Le, "gestureend", $e), _(f, u + "enter", Ue), _(f, u + "leave", Ke), _(f, u + "move", qe), Te.isEnabled = Te.isPressed = Te.isDragging = !1, de && de(Te))
          }, Te.kill = Te.revert = function() {
            Te.disable();
            var e = b.indexOf(Te);
            e >= 0 && b.splice(e, 1), h === Te && (h = 0)
          }, b.push(Te), ie && C(f) && (h = Te), Te.enable(k)
        }, t = e, (r = [{
          key: "velocityX",
          get: function() {
            return this._vx.getVelocity()
          }
        }, {
          key: "velocityY",
          get: function() {
            return this._vy.getVelocity()
          }
        }]) && n(t.prototype, r), e
      }();
      V.version = "3.12.2", V.create = function(e) {
        return new V(e)
      }, V.register = F, V.getAll = function() {
        return b.slice()
      }, V.getById = function(e) {
        return b.filter((function(t) {
          return t.vars.id === e
        }))[0]
      }, g() && i.registerPlugin(V);
      var j, H, Y, $, W, X, q, U, K, Z, J, Q, ee, te, re, ne, ie, se, ae, oe, le, de, ce, ue, pe, fe, he, ve, me, ge, we, be, ye, xe, Se, Te, Ee = 1,
        Ce = Date.now,
        Pe = Ce(),
        _e = 0,
        Me = 0,
        ke = function(e, t, r) {
          var n = He(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return r["_" + t + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
        },
        Oe = function(e, t) {
          return !t || He(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
        },
        Ie = function e() {
          return Me && requestAnimationFrame(e)
        },
        Le = function() {
          return te = 1
        },
        Ae = function() {
          return te = 0
        },
        ze = function(e) {
          return e
        },
        De = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        Ne = function() {
          return "undefined" != typeof window
        },
        Ge = function() {
          return j || Ne() && (j = window.gsap) && j.registerPlugin && j
        },
        Re = function(e) {
          return !!~q.indexOf(e)
        },
        Be = function(e) {
          return ("Height" === e ? we : Y["inner" + e]) || W["client" + e] || X["client" + e]
        },
        Fe = function(e) {
          return E(e, "getBoundingClientRect") || (Re(e) ? function() {
            return Jt.width = Y.innerWidth, Jt.height = we, Jt
          } : function() {
            return pt(e)
          })
        },
        Ve = function(e, t) {
          var r = t.s,
            n = t.d2,
            i = t.d,
            s = t.a;
          return Math.max(0, (r = "scroll" + n) && (s = E(e, r)) ? s() - Fe(e)()[i] : Re(e) ? (W[r] || X[r]) - Be(n) : e[r] - e["offset" + n])
        },
        je = function(e, t) {
          for (var r = 0; r < ae.length; r += 3)(!t || ~t.indexOf(ae[r + 1])) && e(ae[r], ae[r + 1], ae[r + 2])
        },
        He = function(e) {
          return "string" == typeof e
        },
        Ye = function(e) {
          return "function" == typeof e
        },
        $e = function(e) {
          return "number" == typeof e
        },
        We = function(e) {
          return "object" == typeof e
        },
        Xe = function(e, t, r) {
          return e && e.progress(t ? 0 : 1) && r && e.pause()
        },
        qe = function(e, t) {
          if (e.enabled) {
            var r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
          }
        },
        Ue = Math.abs,
        Ke = "left",
        Ze = "right",
        Je = "bottom",
        Qe = "width",
        et = "height",
        tt = "Right",
        rt = "Left",
        nt = "Top",
        it = "Bottom",
        st = "padding",
        at = "margin",
        ot = "Width",
        lt = "Height",
        dt = "px",
        ct = function(e) {
          return Y.getComputedStyle(e)
        },
        ut = function(e, t) {
          for (var r in t) r in e || (e[r] = t[r]);
          return e
        },
        pt = function(e, t) {
          var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== ct(e)[re] && j.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0
            }).progress(1),
            n = e.getBoundingClientRect();
          return r && r.progress(0).kill(), n
        },
        ft = function(e, t) {
          var r = t.d2;
          return e["offset" + r] || e["client" + r] || 0
        },
        ht = function(e) {
          var t, r = [],
            n = e.labels,
            i = e.duration();
          for (t in n) r.push(n[t] / i);
          return r
        },
        vt = function(e) {
          var t = j.utils.snap(e),
            r = Array.isArray(e) && e.slice(0).sort((function(e, t) {
              return e - t
            }));
          return r ? function(e, n, i) {
            var s;
            if (void 0 === i && (i = .001), !n) return t(e);
            if (n > 0) {
              for (e -= i, s = 0; s < r.length; s++)
                if (r[s] >= e) return r[s];
              return r[s - 1]
            }
            for (s = r.length, e += i; s--;)
              if (r[s] <= e) return r[s];
            return r[0]
          } : function(r, n, i) {
            void 0 === i && (i = .001);
            var s = t(r);
            return !n || Math.abs(s - r) < i || s - r < 0 == n < 0 ? s : t(n < 0 ? r - e : r + e)
          }
        },
        mt = function(e, t, r, n) {
          return r.split(",").forEach((function(r) {
            return e(t, r, n)
          }))
        },
        gt = function(e, t, r, n, i) {
          return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
          })
        },
        wt = function(e, t, r, n) {
          return e.removeEventListener(t, r, !!n)
        },
        bt = function(e, t, r) {
          (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
        },
        yt = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        xt = {
          toggleActions: "play",
          anticipatePin: 0
        },
        St = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        Tt = function(e, t) {
          if (He(e)) {
            var r = e.indexOf("="),
              n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in St ? St[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Et = function(e, t, r, n, i, s, a, o) {
          var l = i.startColor,
            d = i.endColor,
            c = i.fontSize,
            u = i.indent,
            p = i.fontWeight,
            f = $.createElement("div"),
            h = Re(r) || "fixed" === E(r, "pinType"),
            v = -1 !== e.indexOf("scroller"),
            m = h ? X : r,
            g = -1 !== e.indexOf("start"),
            w = g ? l : d,
            b = "border-color:" + w + ";font-size:" + c + ";color:" + w + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((v || o) && h ? "fixed;" : "absolute;"), (v || o || !h) && (b += (n === A ? Ze : Je) + ":" + (s + parseFloat(u)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), f._isStart = g, f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), f.style.cssText = b, f.innerText = t || 0 === t ? e + "-" + t : e, m.children[0] ? m.insertBefore(f, m.children[0]) : m.appendChild(f), f._offset = f["offset" + n.op.d2], Ct(f, 0, n, g), f
        },
        Ct = function(e, t, r, n) {
          var i = {
              display: "block"
            },
            s = r[n ? "os2" : "p2"],
            a = r[n ? "p2" : "os2"];
          e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + s + ot] = 1, i["border" + a + ot] = 0, i[r.p] = t + "px", j.set(e, i)
        },
        Pt = [],
        _t = {},
        Mt = function() {
          return Ce() - _e > 34 && (ye || (ye = requestAnimationFrame($t)))
        },
        kt = function() {
          (!ce || !ce.isPressed || ce.startX > X.clientWidth) && (y.cache++, ce ? ye || (ye = requestAnimationFrame($t)) : $t(), _e || Dt("scrollStart"), _e = Ce())
        },
        Ot = function() {
          fe = Y.innerWidth, pe = Y.innerHeight
        },
        It = function() {
          y.cache++, !ee && !de && !$.fullscreenElement && !$.webkitFullscreenElement && (!ue || fe !== Y.innerWidth || Math.abs(Y.innerHeight - pe) > .25 * Y.innerHeight) && U.restart(!0)
        },
        Lt = {},
        At = [],
        zt = function e() {
          return wt(sr, "scrollEnd", e) || jt(!0)
        },
        Dt = function(e) {
          return Lt[e] && Lt[e].map((function(e) {
            return e()
          })) || At
        },
        Nt = [],
        Gt = function(e) {
          for (var t = 0; t < Nt.length; t += 5)(!e || Nt[t + 4] && Nt[t + 4].query === e) && (Nt[t].style.cssText = Nt[t + 1], Nt[t].getBBox && Nt[t].setAttribute("transform", Nt[t + 2] || ""), Nt[t + 3].uncache = 1)
        },
        Rt = function(e, t) {
          var r;
          for (ne = 0; ne < Pt.length; ne++) !(r = Pt[ne]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
          t && Gt(t), t || Dt("revert")
        },
        Bt = function(e, t) {
          y.cache++, (t || !xe) && y.forEach((function(e) {
            return Ye(e) && e.cacheID++ && (e.rec = 0)
          })), He(e) && (Y.history.scrollRestoration = me = e)
        },
        Ft = 0,
        Vt = function() {
          X.appendChild(ge), we = ge.offsetHeight || Y.innerHeight, X.removeChild(ge)
        },
        jt = function(e, t) {
          if (!_e || e) {
            Vt(), xe = sr.isRefreshing = !0, y.forEach((function(e) {
              return Ye(e) && ++e.cacheID && (e.rec = e())
            }));
            var r = Dt("refreshInit");
            oe && sr.sort(), t || Rt(), y.forEach((function(e) {
              Ye(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
            })), Pt.slice(0).forEach((function(e) {
              return e.refresh()
            })), Pt.forEach((function(e, t) {
              if (e._subPinOffset && e.pin) {
                var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  n = e.pin[r];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - n), e.refresh()
              }
            })), Pt.forEach((function(e) {
              var t = Ve(e.scroller, e._dir);
              ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
            })), r.forEach((function(e) {
              return e && e.render && e.render(-1)
            })), y.forEach((function(e) {
              Ye(e) && (e.smooth && requestAnimationFrame((function() {
                return e.target.style.scrollBehavior = "smooth"
              })), e.rec && e(e.rec))
            })), Bt(me, 1), U.pause(), Ft++, xe = 2, $t(2), Pt.forEach((function(e) {
              return Ye(e.vars.onRefresh) && e.vars.onRefresh(e)
            })), xe = sr.isRefreshing = !1, Dt("refresh")
          } else gt(sr, "scrollEnd", zt)
        },
        Ht = 0,
        Yt = 1,
        $t = function(e) {
          if (!xe || 2 === e) {
            sr.isUpdating = !0, Te && Te.update(0);
            var t = Pt.length,
              r = Ce(),
              n = r - Pe >= 50,
              i = t && Pt[0].scroll();
            if (Yt = Ht > i ? -1 : 1, xe || (Ht = i), n && (_e && !te && r - _e > 200 && (_e = 0, Dt("scrollEnd")), J = Pe, Pe = r), Yt < 0) {
              for (ne = t; ne-- > 0;) Pt[ne] && Pt[ne].update(0, n);
              Yt = 1
            } else
              for (ne = 0; ne < t; ne++) Pt[ne] && Pt[ne].update(0, n);
            sr.isUpdating = !1
          }
          ye = 0
        },
        Wt = [Ke, "top", Je, Ze, at + it, at + tt, at + nt, at + rt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Xt = Wt.concat([Qe, et, "boxSizing", "max" + ot, "max" + lt, "position", at, st, st + nt, st + tt, st + it, st + rt]),
        qt = function(e, t, r, n) {
          if (!e._gsap.swappedIn) {
            for (var i, s = Wt.length, a = t.style, o = e.style; s--;) a[i = Wt[s]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), o[Je] = o[Ze] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Qe] = ft(e, L) + dt, a[et] = ft(e, A) + dt, a[st] = o[at] = o.top = o[Ke] = "0", Kt(n), o[Qe] = o["max" + ot] = r[Qe], o[et] = o["max" + lt] = r[et], o[st] = r[st], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Ut = /([A-Z])/g,
        Kt = function(e) {
          if (e) {
            var t, r, n = e.t.style,
              i = e.length,
              s = 0;
            for ((e.t._gsap || j.core.getCache(e.t)).uncache = 1; s < i; s += 2) r = e[s + 1], t = e[s], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Ut, "-$1").toLowerCase())
          }
        },
        Zt = function(e) {
          for (var t = Xt.length, r = e.style, n = [], i = 0; i < t; i++) n.push(Xt[i], r[Xt[i]]);
          return n.t = e, n
        },
        Jt = {
          left: 0,
          top: 0
        },
        Qt = function(e, t, r, n, i, s, a, o, l, d, c, u, p, f) {
          Ye(e) && (e = e(o)), He(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? Tt("0" + e.substr(3), r) : 0));
          var h, v, m, g = p ? p.time() : 0;
          if (p && p.seek(0), isNaN(e) || (e = +e), $e(e)) p && (e = j.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, u, e)), a && Ct(a, r, n, !0);
          else {
            Ye(t) && (t = t(o));
            var w, b, y, x, S = (e || "0").split(" ");
            m = z(t, o) || X, (w = pt(m) || {}) && (w.left || w.top) || "none" !== ct(m).display || (x = m.style.display, m.style.display = "block", w = pt(m), x ? m.style.display = x : m.style.removeProperty("display")), b = Tt(S[0], w[n.d]), y = Tt(S[1] || "0", r), e = w[n.p] - l[n.p] - d + b + i - y, a && Ct(a, y, n, r - y < 20 || a._isStart && y > 20), r -= r - y
          }
          if (f && (o[f] = e || -.001, e < 0 && (e = 0)), s) {
            var T = e + r,
              E = s._isStart;
            h = "scroll" + n.d2, Ct(s, T, n, E && T > 20 || !E && (c ? Math.max(X[h], W[h]) : s.parentNode[h]) <= T + 1), c && (l = pt(a), c && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + dt))
          }
          return p && m && (h = pt(m), p.seek(u), v = pt(m), p._caScrollDist = h[n.p] - v[n.p], e = e / p._caScrollDist * u), p && p.seek(g), p ? e : Math.round(e)
        },
        er = /(webkit|moz|length|cssText|inset)/i,
        tr = function(e, t, r, n) {
          if (e.parentNode !== t) {
            var i, s, a = e.style;
            if (t === X) {
              for (i in e._stOrig = a.cssText, s = ct(e)) + i || er.test(i) || !s[i] || "string" != typeof a[i] || "0" === i || (a[i] = s[i]);
              a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            j.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        rr = function(e, t, r) {
          var n = t,
            i = n;
          return function(t) {
            var s = Math.round(e());
            return s !== n && s !== i && Math.abs(s - n) > 3 && Math.abs(s - i) > 3 && (t = s, r && r()), i = n, n = t, t
          }
        },
        nr = function(e, t, r) {
          var n = {};
          n[t.p] = "+=" + r, j.set(e, n)
        },
        ir = function(e, t) {
          var r = D(e, t),
            n = "_scroll" + t.p2,
            i = function t(i, s, a, o, l) {
              var d = t.tween,
                c = s.onComplete,
                u = {};
              a = a || r();
              var p = rr(r, a, (function() {
                d.kill(), t.tween = 0
              }));
              return l = o && l || 0, o = o || i - a, d && d.kill(), s[n] = i, s.modifiers = u, u[n] = function() {
                return p(a + o * d.ratio + l * d.ratio * d.ratio)
              }, s.onUpdate = function() {
                y.cache++, $t()
              }, s.onComplete = function() {
                t.tween = 0, c && c.call(d)
              }, d = t.tween = j.to(e, s)
            };
          return e[n] = r, r.wheelHandler = function() {
            return i.tween && i.tween.kill() && (i.tween = 0)
          }, gt(e, "wheel", r.wheelHandler), sr.isTouch && gt(e, "touchmove", r.wheelHandler), i
        },
        sr = function() {
          function e(t, r) {
            H || e.register(j) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ve(this), this.init(t, r)
          }
          return e.prototype.init = function(t, r) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Me) {
              var n, i, s, a, o, l, d, c, u, p, f, h, v, m, g, w, b, S, T, C, P, _, M, k, O, I, N, G, R, B, F, V, H, q, U, Q, re, ie, se, ae, de, ce, ue = t = ut(He(t) || $e(t) || t.nodeType ? {
                  trigger: t
                } : t, xt),
                pe = ue.onUpdate,
                fe = ue.toggleClass,
                he = ue.id,
                ve = ue.onToggle,
                me = ue.onRefresh,
                ge = ue.scrub,
                we = ue.trigger,
                ye = ue.pin,
                Pe = ue.pinSpacing,
                Ie = ue.invalidateOnRefresh,
                Le = ue.anticipatePin,
                Ae = ue.onScrubComplete,
                Ne = ue.onSnapComplete,
                Ge = ue.once,
                je = ue.snap,
                Ke = ue.pinReparent,
                Ze = ue.pinSpacer,
                Je = ue.containerAnimation,
                mt = ue.fastScrollEnd,
                bt = ue.preventOverlaps,
                St = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? L : A,
                Ct = !ge && 0 !== ge,
                Mt = z(t.scroller || Y),
                Ot = j.core.getCache(Mt),
                Lt = Re(Mt),
                At = "fixed" === ("pinType" in t ? t.pinType : E(Mt, "pinType") || Lt && "fixed"),
                Dt = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                Nt = Ct && t.toggleActions.split(" "),
                Gt = "markers" in t ? t.markers : xt.markers,
                Rt = Lt ? 0 : parseFloat(ct(Mt)["border" + St.p2 + ot]) || 0,
                Bt = this,
                Vt = t.onRefreshInit && function() {
                  return t.onRefreshInit(Bt)
                },
                Ht = function(e, t, r) {
                  var n = r.d,
                    i = r.d2,
                    s = r.a;
                  return (s = E(e, "getBoundingClientRect")) ? function() {
                    return s()[n]
                  } : function() {
                    return (t ? Be(i) : e["client" + i]) || 0
                  }
                }(Mt, Lt, St),
                $t = function(e, t) {
                  return !t || ~x.indexOf(e) ? Fe(e) : function() {
                    return Jt
                  }
                }(Mt, Lt),
                Wt = 0,
                Xt = 0,
                Ut = 0,
                er = D(Mt, St);
              if (Bt._startClamp = Bt._endClamp = !1, Bt._dir = St, Le *= 45, Bt.scroller = Mt, Bt.scroll = Je ? Je.time.bind(Je) : er, a = er(), Bt.vars = t, r = r || t.animation, "refreshPriority" in t && (oe = 1, -9999 === t.refreshPriority && (Te = Bt)), Ot.tweenScroll = Ot.tweenScroll || {
                  top: ir(Mt, A),
                  left: ir(Mt, L)
                }, Bt.tweenTo = n = Ot.tweenScroll[St.p], Bt.scrubDuration = function(e) {
                  (H = $e(e) && e) ? V ? V.duration(e) : V = j.to(r, {
                    ease: "expo",
                    totalProgress: "+=0",
                    duration: H,
                    paused: !0,
                    onComplete: function() {
                      return Ae && Ae(Bt)
                    }
                  }): (V && V.progress(1).kill(), V = 0)
                }, r && (r.vars.lazy = !1, r._initted && !Bt.isReverted || !1 !== r.vars.immediateRender && !1 !== t.immediateRender && r.duration() && r.render(0, !0, !0), Bt.animation = r.pause(), r.scrollTrigger = Bt, Bt.scrubDuration(ge), B = 0, he || (he = r.vars.id)), je && (We(je) && !je.push || (je = {
                  snapTo: je
                }), "scrollBehavior" in X.style && j.set(Lt ? [X, W] : Mt, {
                  scrollBehavior: "auto"
                }), y.forEach((function(e) {
                  return Ye(e) && e.target === (Lt ? $.scrollingElement || W : Mt) && (e.smooth = !1)
                })), s = Ye(je.snapTo) ? je.snapTo : "labels" === je.snapTo ? function(e) {
                  return function(t) {
                    return j.utils.snap(ht(e), t)
                  }
                }(r) : "labelsDirectional" === je.snapTo ? (ae = r, function(e, t) {
                  return vt(ht(ae))(e, t.direction)
                }) : !1 !== je.directional ? function(e, t) {
                  return vt(je.snapTo)(e, Ce() - Xt < 500 ? 0 : t.direction)
                } : j.utils.snap(je.snapTo), q = je.duration || {
                  min: .1,
                  max: 2
                }, q = We(q) ? Z(q.min, q.max) : Z(q, q), U = j.delayedCall(je.delay || H / 2 || .1, (function() {
                  var e = er(),
                    t = Ce() - Xt < 500,
                    i = n.tween;
                  if (!(t || Math.abs(Bt.getVelocity()) < 10) || i || te || Wt === e) Bt.isActive && Wt !== e && U.restart(!0);
                  else {
                    var a = (e - l) / m,
                      o = r && !Ct ? r.totalProgress() : a,
                      c = t ? 0 : (o - F) / (Ce() - J) * 1e3 || 0,
                      u = j.utils.clamp(-a, 1 - a, Ue(c / 2) * c / .185),
                      p = a + (!1 === je.inertia ? 0 : u),
                      f = Z(0, 1, s(p, Bt)),
                      h = Math.round(l + f * m),
                      v = je,
                      g = v.onStart,
                      w = v.onInterrupt,
                      b = v.onComplete;
                    if (e <= d && e >= l && h !== e) {
                      if (i && !i._initted && i.data <= Ue(h - e)) return;
                      !1 === je.inertia && (u = f - a), n(h, {
                        duration: q(Ue(.185 * Math.max(Ue(p - o), Ue(f - o)) / c / .05 || 0)),
                        ease: je.ease || "power3",
                        data: Ue(h - e),
                        onInterrupt: function() {
                          return U.restart(!0) && w && w(Bt)
                        },
                        onComplete: function() {
                          Bt.update(), Wt = er(), B = F = r && !Ct ? r.totalProgress() : Bt.progress, Ne && Ne(Bt), b && b(Bt)
                        }
                      }, e, u * m, h - e - u * m), g && g(Bt, n.tween)
                    }
                  }
                })).pause()), he && (_t[he] = Bt), (se = (we = Bt.trigger = z(we || !0 !== ye && ye)) && we._gsap && we._gsap.stRevert) && (se = se(Bt)), ye = !0 === ye ? we : z(ye), He(fe) && (fe = {
                  targets: we,
                  className: fe
                }), ye && (!1 === Pe || Pe === at || (Pe = !(!Pe && ye.parentNode && ye.parentNode.style && "flex" === ct(ye.parentNode).display) && st), Bt.pin = ye, (i = j.core.getCache(ye)).spacer ? g = i.pinState : (Ze && ((Ze = z(Ze)) && !Ze.nodeType && (Ze = Ze.current || Ze.nativeElement), i.spacerIsNative = !!Ze, Ze && (i.spacerState = Zt(Ze))), i.spacer = S = Ze || $.createElement("div"), S.classList.add("pin-spacer"), he && S.classList.add("pin-spacer-" + he), i.pinState = g = Zt(ye)), !1 !== t.force3D && j.set(ye, {
                  force3D: !0
                }), Bt.spacer = S = i.spacer, R = ct(ye), k = R[Pe + St.os2], C = j.getProperty(ye), P = j.quickSetter(ye, St.a, dt), qt(ye, S, R), b = Zt(ye)), Gt) {
                h = We(Gt) ? ut(Gt, yt) : yt, p = Et("scroller-start", he, Mt, St, h, 0), f = Et("scroller-end", he, Mt, St, h, 0, p), T = p["offset" + St.op.d2];
                var rr = z(E(Mt, "content") || Mt);
                c = this.markerStart = Et("start", he, rr, St, h, T, 0, Je), u = this.markerEnd = Et("end", he, rr, St, h, T, 0, Je), Je && (ie = j.quickSetter([c, u], St.a, dt)), At || x.length && !0 === E(Mt, "fixedMarkers") || (ce = ct(de = Lt ? X : Mt).position, de.style.position = "absolute" === ce || "fixed" === ce ? ce : "relative", j.set([p, f], {
                  force3D: !0
                }), I = j.quickSetter(p, St.a, dt), G = j.quickSetter(f, St.a, dt))
              }
              if (Je) {
                var sr = Je.vars.onUpdate,
                  ar = Je.vars.onUpdateParams;
                Je.eventCallback("onUpdate", (function() {
                  Bt.update(0, 0, 1), sr && sr.apply(Je, ar || [])
                }))
              }
              if (Bt.previous = function() {
                  return Pt[Pt.indexOf(Bt) - 1]
                }, Bt.next = function() {
                  return Pt[Pt.indexOf(Bt) + 1]
                }, Bt.revert = function(e, t) {
                  if (!t) return Bt.kill(!0);
                  var n = !1 !== e || !Bt.enabled,
                    i = ee;
                  n !== Bt.isReverted && (n && (Q = Math.max(er(), Bt.scroll.rec || 0), Ut = Bt.progress, re = r && r.progress()), c && [c, u, p, f].forEach((function(e) {
                    return e.style.display = n ? "none" : "block"
                  })), n && (ee = Bt, Bt.update(n)), !ye || Ke && Bt.isActive || (n ? function(e, t, r) {
                    Kt(r);
                    var n = e._gsap;
                    if (n.spacerIsNative) Kt(n.spacerState);
                    else if (e._gsap.swappedIn) {
                      var i = t.parentNode;
                      i && (i.insertBefore(e, t), i.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                  }(ye, S, g) : qt(ye, S, ct(ye), O)), n || Bt.update(n), ee = i, Bt.isReverted = n)
                }, Bt.refresh = function(i, s, h, y) {
                  if (!ee && Bt.enabled || s)
                    if (ye && i && _e) gt(e, "scrollEnd", zt);
                    else {
                      !xe && Vt && Vt(Bt), ee = Bt, n.tween && !h && (n.tween.kill(), n.tween = 0), V && V.pause(), Ie && r && r.revert({
                        kill: !1
                      }).invalidate(), Bt.isReverted || Bt.revert(!0, !0), Bt._subPinOffset = !1;
                      var x, T, E, P, k, I, G, R, B, F, H, Y, q, K = Ht(),
                        Z = $t(),
                        J = Je ? Je.duration() : Ve(Mt, St),
                        te = m <= .01,
                        ne = 0,
                        ie = y || 0,
                        se = We(h) ? h.end : t.end,
                        ae = t.endTrigger || we,
                        oe = We(h) ? h.start : t.start || (0 !== t.start && we ? ye ? "0 0" : "0 100%" : 0),
                        de = Bt.pinnedContainer = t.pinnedContainer && z(t.pinnedContainer, Bt),
                        ce = we && Math.max(0, Pt.indexOf(Bt)) || 0,
                        ue = ce;
                      for (Gt && We(h) && (Y = j.getProperty(p, St.p), q = j.getProperty(f, St.p)); ue--;)(I = Pt[ue]).end || I.refresh(0, 1) || (ee = Bt), !(G = I.pin) || G !== we && G !== ye && G !== de || I.isReverted || (F || (F = []), F.unshift(I), I.revert(!0, !0)), I !== Pt[ue] && (ce--, ue--);
                      for (Ye(oe) && (oe = oe(Bt)), oe = ke(oe, "start", Bt), l = Qt(oe, we, K, St, er(), c, p, Bt, Z, Rt, At, J, Je, Bt._startClamp && "_startClamp") || (ye ? -.001 : 0), Ye(se) && (se = se(Bt)), He(se) && !se.indexOf("+=") && (~se.indexOf(" ") ? se = (He(oe) ? oe.split(" ")[0] : "") + se : (ne = Tt(se.substr(2), K), se = He(oe) ? oe : (Je ? j.utils.mapRange(0, Je.duration(), Je.scrollTrigger.start, Je.scrollTrigger.end, l) : l) + ne, ae = we)), se = ke(se, "end", Bt), d = Math.max(l, Qt(se || (ae ? "100% 0" : J), ae, K, St, er() + ne, u, f, Bt, Z, Rt, At, J, Je, Bt._endClamp && "_endClamp")) || -.001, ne = 0, ue = ce; ue--;)(G = (I = Pt[ue]).pin) && I.start - I._pinPush <= l && !Je && I.end > 0 && (x = I.end - (Bt._startClamp ? Math.max(0, I.start) : I.start), (G === we && I.start - I._pinPush < l || G === de) && isNaN(oe) && (ne += x * (1 - I.progress)), G === ye && (ie += x));
                      if (l += ne, d += ne, Bt._startClamp && (Bt._startClamp += ne), Bt._endClamp && !xe && (Bt._endClamp = d || -.001, d = Math.min(d, Ve(Mt, St))), m = d - l || (l -= .01) && .001, te && (Ut = j.utils.clamp(0, 1, j.utils.normalize(l, d, Q))), Bt._pinPush = ie, c && ne && ((x = {})[St.a] = "+=" + ne, de && (x[St.p] = "-=" + er()), j.set([c, u], x)), ye) x = ct(ye), P = St === A, E = er(), _ = parseFloat(C(St.a)) + ie, !J && d > 1 && (H = {
                        style: H = (Lt ? $.scrollingElement || W : Mt).style,
                        value: H["overflow" + St.a.toUpperCase()]
                      }, Lt && "scroll" !== ct(X)["overflow" + St.a.toUpperCase()] && (H.style["overflow" + St.a.toUpperCase()] = "scroll")), qt(ye, S, x), b = Zt(ye), T = pt(ye, !0), R = At && D(Mt, P ? L : A)(), Pe && ((O = [Pe + St.os2, m + ie + dt]).t = S, (ue = Pe === st ? ft(ye, St) + m + ie : 0) && O.push(St.d, ue + dt), Kt(O), de && Pt.forEach((function(e) {
                        e.pin === de && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                      })), At && er(Q)), At && ((k = {
                        top: T.top + (P ? E - l : R) + dt,
                        left: T.left + (P ? R : E - l) + dt,
                        boxSizing: "border-box",
                        position: "fixed"
                      })[Qe] = k["max" + ot] = Math.ceil(T.width) + dt, k[et] = k["max" + lt] = Math.ceil(T.height) + dt, k[at] = k[at + nt] = k[at + tt] = k[at + it] = k[at + rt] = "0", k[st] = x[st], k[st + nt] = x[st + nt], k[st + tt] = x[st + tt], k[st + it] = x[st + it], k[st + rt] = x[st + rt], w = function(e, t, r) {
                        for (var n, i = [], s = e.length, a = r ? 8 : 0; a < s; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                        return i.t = e.t, i
                      }(g, k, Ke), xe && er(0)), r ? (B = r._initted, le(1), r.render(r.duration(), !0, !0), M = C(St.a) - _ + m + ie, N = Math.abs(m - M) > 1, At && N && w.splice(w.length - 2, 2), r.render(0, !0, !0), B || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), le(0)) : M = m, H && (H.value ? H.style["overflow" + St.a.toUpperCase()] = H.value : H.style.removeProperty("overflow-" + St.a));
                      else if (we && er() && !Je)
                        for (T = we.parentNode; T && T !== X;) T._pinOffset && (l -= T._pinOffset, d -= T._pinOffset), T = T.parentNode;
                      F && F.forEach((function(e) {
                        return e.revert(!1, !0)
                      })), Bt.start = l, Bt.end = d, a = o = xe ? Q : er(), Je || xe || (a < Q && er(Q), Bt.scroll.rec = 0), Bt.revert(!1, !0), Xt = Ce(), U && (Wt = -1, U.restart(!0)), ee = 0, r && Ct && (r._initted || re) && r.progress() !== re && r.progress(re || 0, !0).render(r.time(), !0, !0), (te || Ut !== Bt.progress || Je) && (r && !Ct && r.totalProgress(Je && l < -.001 && !Ut ? j.utils.normalize(l, d, 0) : Ut, !0), Bt.progress = te || (a - l) / m === Ut ? 0 : Ut), ye && Pe && (S._pinOffset = Math.round(Bt.progress * M)), V && V.invalidate(), isNaN(Y) || (Y -= j.getProperty(p, St.p), q -= j.getProperty(f, St.p), nr(p, St, Y), nr(c, St, Y - (y || 0)), nr(f, St, q), nr(u, St, q - (y || 0))), te && !xe && Bt.update(), !me || xe || v || (v = !0, me(Bt), v = !1)
                    }
                }, Bt.getVelocity = function() {
                  return (er() - o) / (Ce() - J) * 1e3 || 0
                }, Bt.endAnimation = function() {
                  Xe(Bt.callbackAnimation), r && (V ? V.progress(1) : r.paused() ? Ct || Xe(r, Bt.direction < 0, 1) : Xe(r, r.reversed()))
                }, Bt.labelToScroll = function(e) {
                  return r && r.labels && (l || Bt.refresh() || l) + r.labels[e] / r.duration() * m || 0
                }, Bt.getTrailing = function(e) {
                  var t = Pt.indexOf(Bt),
                    r = Bt.direction > 0 ? Pt.slice(0, t).reverse() : Pt.slice(t + 1);
                  return (He(e) ? r.filter((function(t) {
                    return t.vars.preventOverlaps === e
                  })) : r).filter((function(e) {
                    return Bt.direction > 0 ? e.end <= l : e.start >= d
                  }))
                }, Bt.update = function(e, t, i) {
                  if (!Je || i || e) {
                    var s, c, u, f, h, v, g, y = !0 === xe ? Q : Bt.scroll(),
                      x = e ? 0 : (y - l) / m,
                      T = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                      E = Bt.progress;
                    if (t && (o = a, a = Je ? er() : y, je && (F = B, B = r && !Ct ? r.totalProgress() : T)), Le && !T && ye && !ee && !Ee && _e && l < y + (y - o) / (Ce() - J) * Le && (T = 1e-4), T !== E && Bt.enabled) {
                      if (f = (h = (s = Bt.isActive = !!T && T < 1) != (!!E && E < 1)) || !!T != !!E, Bt.direction = T > E ? 1 : -1, Bt.progress = T, f && !ee && (c = T && !E ? 0 : 1 === T ? 1 : 1 === E ? 2 : 3, Ct && (u = !h && "none" !== Nt[c + 1] && Nt[c + 1] || Nt[c], g = r && ("complete" === u || "reset" === u || u in r))), bt && (h || g) && (g || ge || !r) && (Ye(bt) ? bt(Bt) : Bt.getTrailing(bt).forEach((function(e) {
                          return e.endAnimation()
                        }))), Ct || (!V || ee || Ee ? r && r.totalProgress(T, !(!ee || !Xt && !e)) : (V._dp._time - V._start !== V._time && V.render(V._dp._time - V._start), V.resetTo ? V.resetTo("totalProgress", T, r._tTime / r._tDur) : (V.vars.totalProgress = T, V.invalidate().restart()))), ye)
                        if (e && Pe && (S.style[Pe + St.os2] = k), At) {
                          if (f) {
                            if (v = !e && T > E && d + 1 > y && y + 1 >= Ve(Mt, St), Ke)
                              if (e || !s && !v) tr(ye, S);
                              else {
                                var C = pt(ye, !0),
                                  O = y - l;
                                tr(ye, X, C.top + (St === A ? O : 0) + dt, C.left + (St === A ? 0 : O) + dt)
                              } Kt(s || v ? w : b), N && T < 1 && s || P(_ + (1 !== T || v ? 0 : M))
                          }
                        } else P(De(_ + M * T));
                      je && !n.tween && !ee && !Ee && U.restart(!0), fe && (h || Ge && T && (T < 1 || !be)) && K(fe.targets).forEach((function(e) {
                        return e.classList[s || Ge ? "add" : "remove"](fe.className)
                      })), pe && !Ct && !e && pe(Bt), f && !ee ? (Ct && (g && ("complete" === u ? r.pause().totalProgress(1) : "reset" === u ? r.restart(!0).pause() : "restart" === u ? r.restart(!0) : r[u]()), pe && pe(Bt)), !h && be || (ve && h && qe(Bt, ve), Dt[c] && qe(Bt, Dt[c]), Ge && (1 === T ? Bt.kill(!1, 1) : Dt[c] = 0), h || Dt[c = 1 === T ? 1 : 3] && qe(Bt, Dt[c])), mt && !s && Math.abs(Bt.getVelocity()) > ($e(mt) ? mt : 2500) && (Xe(Bt.callbackAnimation), V ? V.progress(1) : Xe(r, "reverse" === u ? 1 : !T, 1))) : Ct && pe && !ee && pe(Bt)
                    }
                    if (G) {
                      var L = Je ? y / Je.duration() * (Je._caScrollDist || 0) : y;
                      I(L + (p._isFlipped ? 1 : 0)), G(L)
                    }
                    ie && ie(-y / Je.duration() * (Je._caScrollDist || 0))
                  }
                }, Bt.enable = function(t, r) {
                  Bt.enabled || (Bt.enabled = !0, gt(Mt, "resize", It), Lt || gt(Mt, "scroll", kt), Vt && gt(e, "refreshInit", Vt), !1 !== t && (Bt.progress = Ut = 0, a = o = Wt = er()), !1 !== r && Bt.refresh())
                }, Bt.getTween = function(e) {
                  return e && n ? n.tween : V
                }, Bt.setPositions = function(e, t, r, n) {
                  if (Je) {
                    var i = Je.scrollTrigger,
                      s = Je.duration(),
                      a = i.end - i.start;
                    e = i.start + a * e / s, t = i.start + a * t / s
                  }
                  Bt.refresh(!1, !1, {
                    start: Oe(e, r && !!Bt._startClamp),
                    end: Oe(t, r && !!Bt._endClamp)
                  }, n), Bt.update()
                }, Bt.adjustPinSpacing = function(e) {
                  if (O && e) {
                    var t = O.indexOf(St.d) + 1;
                    O[t] = parseFloat(O[t]) + e + dt, O[1] = parseFloat(O[1]) + e + dt, Kt(O)
                  }
                }, Bt.disable = function(t, r) {
                  if (Bt.enabled && (!1 !== t && Bt.revert(!0, !0), Bt.enabled = Bt.isActive = !1, r || V && V.pause(), Q = 0, i && (i.uncache = 1), Vt && wt(e, "refreshInit", Vt), U && (U.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !Lt)) {
                    for (var s = Pt.length; s--;)
                      if (Pt[s].scroller === Mt && Pt[s] !== Bt) return;
                    wt(Mt, "resize", It), Lt || wt(Mt, "scroll", kt)
                  }
                }, Bt.kill = function(e, n) {
                  Bt.disable(e, n), V && !n && V.kill(), he && delete _t[he];
                  var s = Pt.indexOf(Bt);
                  s >= 0 && Pt.splice(s, 1), s === ne && Yt > 0 && ne--, s = 0, Pt.forEach((function(e) {
                    return e.scroller === Bt.scroller && (s = 1)
                  })), s || xe || (Bt.scroll.rec = 0), r && (r.scrollTrigger = null, e && r.revert({
                    kill: !1
                  }), n || r.kill()), c && [c, u, p, f].forEach((function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                  })), Te === Bt && (Te = 0), ye && (i && (i.uncache = 1), s = 0, Pt.forEach((function(e) {
                    return e.pin === ye && s++
                  })), s || (i.spacer = 0)), t.onKill && t.onKill(Bt)
                }, Pt.push(Bt), Bt.enable(!1, !1), se && se(Bt), r && r.add && !m) {
                var or = Bt.update;
                Bt.update = function() {
                  Bt.update = or, l || d || Bt.refresh()
                }, j.delayedCall(.01, Bt.update), m = .01, l = d = 0
              } else Bt.refresh();
              ye && function() {
                if (Se !== Ft) {
                  var e = Se = Ft;
                  requestAnimationFrame((function() {
                    return e === Ft && jt(!0)
                  }))
                }
              }()
            } else this.update = this.refresh = this.kill = ze
          }, e.register = function(t) {
            return H || (j = t || Ge(), Ne() && window.document && e.enable(), H = Me), H
          }, e.defaults = function(e) {
            if (e)
              for (var t in e) xt[t] = e[t];
            return xt
          }, e.disable = function(e, t) {
            Me = 0, Pt.forEach((function(r) {
              return r[t ? "kill" : "disable"](e)
            })), wt(Y, "wheel", kt), wt($, "scroll", kt), clearInterval(Q), wt($, "touchcancel", ze), wt(X, "touchstart", ze), mt(wt, $, "pointerdown,touchstart,mousedown", Le), mt(wt, $, "pointerup,touchend,mouseup", Ae), U.kill(), je(wt);
            for (var r = 0; r < y.length; r += 3) bt(wt, y[r], y[r + 1]), bt(wt, y[r], y[r + 2])
          }, e.enable = function() {
            if (Y = window, $ = document, W = $.documentElement, X = $.body, j && (K = j.utils.toArray, Z = j.utils.clamp, ve = j.core.context || ze, le = j.core.suppressOverwrites || ze, me = Y.history.scrollRestoration || "auto", Ht = Y.pageYOffset, j.core.globals("ScrollTrigger", e), X)) {
              Me = 1, (ge = document.createElement("div")).style.height = "100vh", ge.style.position = "absolute", Vt(), Ie(), V.register(j), e.isTouch = V.isTouch, he = V.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), gt(Y, "wheel", kt), q = [Y, $, W, X], j.matchMedia ? (e.matchMedia = function(e) {
                var t, r = j.matchMedia();
                for (t in e) r.add(t, e[t]);
                return r
              }, j.addEventListener("matchMediaInit", (function() {
                return Rt()
              })), j.addEventListener("matchMediaRevert", (function() {
                return Gt()
              })), j.addEventListener("matchMedia", (function() {
                jt(0, 1), Dt("matchMedia")
              })), j.matchMedia("(orientation: portrait)", (function() {
                return Ot(), Ot
              }))) : console.warn("Requires GSAP 3.11.0 or later"), Ot(), gt($, "scroll", kt);
              var t, r, n = X.style,
                i = n.borderTopStyle,
                s = j.core.Animation.prototype;
              for (s.revert || Object.defineProperty(s, "revert", {
                  value: function() {
                    return this.time(-.01, !0)
                  }
                }), n.borderTopStyle = "solid", t = pt(X), A.m = Math.round(t.top + A.sc()) || 0, L.m = Math.round(t.left + L.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), Q = setInterval(Mt, 250), j.delayedCall(.5, (function() {
                  return Ee = 0
                })), gt($, "touchcancel", ze), gt(X, "touchstart", ze), mt(gt, $, "pointerdown,touchstart,mousedown", Le), mt(gt, $, "pointerup,touchend,mouseup", Ae), re = j.utils.checkPrefix("transform"), Xt.push(re), H = Ce(), U = j.delayedCall(.2, jt).pause(), ae = [$, "visibilitychange", function() {
                  var e = Y.innerWidth,
                    t = Y.innerHeight;
                  $.hidden ? (ie = e, se = t) : ie === e && se === t || It()
                }, $, "DOMContentLoaded", jt, Y, "load", jt, Y, "resize", It], je(gt), Pt.forEach((function(e) {
                  return e.enable(0, 1)
                })), r = 0; r < y.length; r += 3) bt(wt, y[r], y[r + 1]), bt(wt, y[r], y[r + 2])
            }
          }, e.config = function(t) {
            "limitCallbacks" in t && (be = !!t.limitCallbacks);
            var r = t.syncInterval;
            r && clearInterval(Q) || (Q = r) && setInterval(Mt, r), "ignoreMobileResize" in t && (ue = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (je(wt) || je(gt, t.autoRefreshEvents || "none"), de = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
          }, e.scrollerProxy = function(e, t) {
            var r = z(e),
              n = y.indexOf(r),
              i = Re(r);
            ~n && y.splice(n, i ? 6 : 2), t && (i ? x.unshift(Y, t, X, t, W, t) : x.unshift(r, t))
          }, e.clearMatchMedia = function(e) {
            Pt.forEach((function(t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
            }))
          }, e.isInViewport = function(e, t, r) {
            var n = (He(e) ? z(e) : e).getBoundingClientRect(),
              i = n[r ? Qe : et] * t || 0;
            return r ? n.right - i > 0 && n.left + i < Y.innerWidth : n.bottom - i > 0 && n.top + i < Y.innerHeight
          }, e.positionInViewport = function(e, t, r) {
            He(e) && (e = z(e));
            var n = e.getBoundingClientRect(),
              i = n[r ? Qe : et],
              s = null == t ? i / 2 : t in St ? St[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
            return r ? (n.left + s) / Y.innerWidth : (n.top + s) / Y.innerHeight
          }, e.killAll = function(e) {
            if (Pt.slice(0).forEach((function(e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
              })), !0 !== e) {
              var t = Lt.killAll || [];
              Lt = {}, t.forEach((function(e) {
                return e()
              }))
            }
          }, e
        }();
      sr.version = "3.12.2", sr.saveStyles = function(e) {
        return e ? K(e).forEach((function(e) {
          if (e && e.style) {
            var t = Nt.indexOf(e);
            t >= 0 && Nt.splice(t, 5), Nt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), j.core.getCache(e), ve())
          }
        })) : Nt
      }, sr.revert = function(e, t) {
        return Rt(!e, t)
      }, sr.create = function(e, t) {
        return new sr(e, t)
      }, sr.refresh = function(e) {
        return e ? It() : (H || sr.register()) && jt(!0)
      }, sr.update = function(e) {
        return ++y.cache && $t(!0 === e ? 2 : 0)
      }, sr.clearScrollMemory = Bt, sr.maxScroll = function(e, t) {
        return Ve(e, t ? L : A)
      }, sr.getScrollFunc = function(e, t) {
        return D(z(e), t ? L : A)
      }, sr.getById = function(e) {
        return _t[e]
      }, sr.getAll = function() {
        return Pt.filter((function(e) {
          return "ScrollSmoother" !== e.vars.id
        }))
      }, sr.isScrolling = function() {
        return !!_e
      }, sr.snapDirectional = vt, sr.addEventListener = function(e, t) {
        var r = Lt[e] || (Lt[e] = []);
        ~r.indexOf(t) || r.push(t)
      }, sr.removeEventListener = function(e, t) {
        var r = Lt[e],
          n = r && r.indexOf(t);
        n >= 0 && r.splice(n, 1)
      }, sr.batch = function(e, t) {
        var r, n = [],
          i = {},
          s = t.interval || .016,
          a = t.batchMax || 1e9,
          o = function(e, t) {
            var r = [],
              n = [],
              i = j.delayedCall(s, (function() {
                t(r, n), r = [], n = []
              })).pause();
            return function(e) {
              r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1)
            }
          };
        for (r in t) i[r] = "on" === r.substr(0, 2) && Ye(t[r]) && "onRefreshInit" !== r ? o(0, t[r]) : t[r];
        return Ye(a) && (a = a(), gt(sr, "refresh", (function() {
          return a = t.batchMax()
        }))), K(e).forEach((function(e) {
          var t = {};
          for (r in i) t[r] = i[r];
          t.trigger = e, n.push(sr.create(t))
        })), n
      };
      var ar, or = function(e, t, r, n) {
          return t > n ? e(n) : t < 0 && e(0), r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
        },
        lr = function e(t, r) {
          !0 === r ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (V.isTouch ? " pinch-zoom" : "") : "none", t === W && e(X, r)
        },
        dr = {
          auto: 1,
          scroll: 1
        },
        cr = function(e) {
          var t, r = e.event,
            n = e.target,
            i = e.axis,
            s = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = s._gsap || j.core.getCache(s),
            o = Ce();
          if (!a._isScrollT || o - a._isScrollT > 2e3) {
            for (; s && s !== X && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !dr[(t = ct(s)).overflowY] && !dr[t.overflowX]);) s = s.parentNode;
            a._isScroll = s && s !== n && !Re(s) && (dr[(t = ct(s)).overflowY] || dr[t.overflowX]), a._isScrollT = o
          }(a._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
        },
        ur = function(e, t, r, n) {
          return V.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && cr,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function() {
              return r && gt($, V.eventTypes[0], fr, !1, !0)
            },
            onDisable: function() {
              return wt($, V.eventTypes[0], fr, !0)
            }
          })
        },
        pr = /(input|label|select|textarea)/i,
        fr = function(e) {
          var t = pr.test(e.target.tagName);
          (t || ar) && (e._gsapAllow = !0, ar = t)
        };
      sr.sort = function(e) {
        return Pt.sort(e || function(e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
      }, sr.observe = function(e) {
        return new V(e)
      }, sr.normalizeScroll = function(e) {
        if (void 0 === e) return ce;
        if (!0 === e && ce) return ce.enable();
        if (!1 === e) return ce && ce.kill();
        var t = e instanceof V ? e : function(e) {
          We(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          var t, r, n, i, s, a, o, l, d = e,
            c = d.normalizeScrollX,
            u = d.momentum,
            p = d.allowNestedScroll,
            f = d.onRelease,
            h = z(e.target) || W,
            v = j.core.globals().ScrollSmoother,
            m = v && v.get(),
            g = he && (e.content && z(e.content) || m && !1 !== e.content && !m.smooth() && m.content()),
            w = D(h, A),
            b = D(h, L),
            x = 1,
            S = (V.isTouch && Y.visualViewport ? Y.visualViewport.scale * Y.visualViewport.width : Y.outerWidth) / Y.innerWidth,
            T = 0,
            E = Ye(u) ? function() {
              return u(t)
            } : function() {
              return u || 2.8
            },
            C = ur(h, e.type, !0, p),
            P = function() {
              return i = !1
            },
            _ = ze,
            M = ze,
            k = function() {
              r = Ve(h, A), M = Z(he ? 1 : 0, r), c && (_ = Z(0, Ve(h, L))), n = Ft
            },
            O = function() {
              g._gsap.y = De(parseFloat(g._gsap.y) + w.offset) + "px", g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(g._gsap.y) + ", 0, 1)", w.offset = w.cacheID = 0
            },
            I = function() {
              k(), s.isActive() && s.vars.scrollY > r && (w() > r ? s.progress(1) && w(r) : s.resetTo("scrollY", r))
            };
          return g && j.set(g, {
            y: "+=0"
          }), e.ignoreCheck = function(e) {
            return he && "touchmove" === e.type && function() {
              if (i) {
                requestAnimationFrame(P);
                var e = De(t.deltaY / 2),
                  r = M(w.v - e);
                if (g && r !== w.v + w.offset) {
                  w.offset = r - w.v;
                  var n = De((parseFloat(g && g._gsap.y) || 0) - w.offset);
                  g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", g._gsap.y = n + "px", w.cacheID = y.cache, $t()
                }
                return !0
              }
              w.offset && O(), i = !0
            }() || x > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
          }, e.onPress = function() {
            i = !1;
            var e = x;
            x = De((Y.visualViewport && Y.visualViewport.scale || 1) / S), s.pause(), e !== x && lr(h, x > 1.01 || !c && "x"), a = b(), o = w(), k(), n = Ft
          }, e.onRelease = e.onGestureStart = function(e, t) {
            if (w.offset && O(), t) {
              y.cache++;
              var n, i, a = E();
              c && (i = (n = b()) + .05 * a * -e.velocityX / .227, a *= or(b, n, i, Ve(h, L)), s.vars.scrollX = _(i)), i = (n = w()) + .05 * a * -e.velocityY / .227, a *= or(w, n, i, Ve(h, A)), s.vars.scrollY = M(i), s.invalidate().duration(a).play(.01), (he && s.vars.scrollY >= r || n >= r - 1) && j.to({}, {
                onUpdate: I,
                duration: a
              })
            } else l.restart(!0);
            f && f(e)
          }, e.onWheel = function() {
            s._ts && s.pause(), Ce() - T > 1e3 && (n = 0, T = Ce())
          }, e.onChange = function(e, t, r, i, s) {
            if (Ft !== n && k(), t && c && b(_(i[2] === t ? a + (e.startX - e.x) : b() + t - i[1])), r) {
              w.offset && O();
              var l = s[2] === r,
                d = l ? o + e.startY - e.y : w() + r - s[1],
                u = M(d);
              l && d !== u && (o += u - d), w(u)
            }(r || t) && $t()
          }, e.onEnable = function() {
            lr(h, !c && "x"), sr.addEventListener("refresh", I), gt(Y, "resize", I), w.smooth && (w.target.style.scrollBehavior = "auto", w.smooth = b.smooth = !1), C.enable()
          }, e.onDisable = function() {
            lr(h, !0), wt(Y, "resize", I), sr.removeEventListener("refresh", I), C.kill()
          }, e.lockAxis = !1 !== e.lockAxis, (t = new V(e)).iOS = he, he && !w() && w(1), he && j.ticker.add(ze), l = t._dc, s = j.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: rr(w, w(), (function() {
                return s.pause()
              }))
            },
            onUpdate: $t,
            onComplete: l.vars.onComplete
          }), t
        }(e);
        return ce && ce.target === t.target && ce.kill(), Re(t.target) && (ce = t), t
      }, sr.core = {
        _getVelocityProp: N,
        _inputObserver: ur,
        _scrollers: y,
        _proxies: x,
        bridge: {
          ss: function() {
            _e || Dt("scrollStart"), _e = Ce()
          },
          ref: function() {
            return ee
          }
        }
      }, Ge() && j.registerPlugin(sr)
    },
    1996: (e, t, r) => {
      var n = r(8200),
        i = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, r) {
        var n, s = {},
          d = null,
          c = null;
        for (n in void 0 !== r && (d = "" + r), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, n) && !l.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: c,
          props: s,
          _owner: o.current
        }
      }
      t.Fragment = s, t.jsx = d, t.jsxs = d
    },
    3480: (e, t, r) => {
      e.exports = r(1996)
    },
    8548: (e, t, r) => {
      r.d(t, {
        Mc: () => s,
        _2: () => i
      }), r(1068);
      var n = r(5848);

      function i(e) {
        let {
          swiper: t,
          extendParams: r,
          on: i,
          emit: s
        } = e;

        function a(e) {
          let r;
          return e && "string" == typeof e && t.isElement && (r = t.el.querySelector(e), r) ? r : (e && ("string" == typeof e && (r = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && r.length > 1 && 1 === t.el.querySelectorAll(e).length && (r = t.el.querySelector(e))), e && !r ? e : r)
        }

        function o(e, r) {
          const i = t.params.navigation;
          (e = (0, n.m)(e)).forEach((e => {
            e && (e.classList[r ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = r), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass))
          }))
        }

        function l() {
          const {
            nextEl: e,
            prevEl: r
          } = t.navigation;
          if (t.params.loop) return o(r, !1), void o(e, !1);
          o(r, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
        }

        function d(e) {
          e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), s("navigationPrev"))
        }

        function c(e) {
          e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), s("navigationNext"))
        }

        function u() {
          const e = t.params.navigation;
          if (t.params.navigation = function(e, t, r, i) {
              return e.params.createElements && Object.keys(i).forEach((s => {
                if (!r[s] && !0 === r.auto) {
                  let a = (0, n.e)(e.el, `.${i[s]}`)[0];
                  a || (a = (0, n.c)("div", i[s]), a.className = i[s], e.el.append(a)), r[s] = a, t[s] = a
                }
              })), r
            }(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let r = a(e.nextEl),
            i = a(e.prevEl);
          Object.assign(t.navigation, {
            nextEl: r,
            prevEl: i
          }), r = (0, n.m)(r), i = (0, n.m)(i);
          const s = (r, n) => {
            r && r.addEventListener("click", "next" === n ? c : d), !t.enabled && r && r.classList.add(...e.lockClass.split(" "))
          };
          r.forEach((e => s(e, "next"))), i.forEach((e => s(e, "prev")))
        }

        function p() {
          let {
            nextEl: e,
            prevEl: r
          } = t.navigation;
          e = (0, n.m)(e), r = (0, n.m)(r);
          const i = (e, r) => {
            e.removeEventListener("click", "next" === r ? c : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
          };
          e.forEach((e => i(e, "next"))), r.forEach((e => i(e, "prev")))
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
        }), t.navigation = {
          nextEl: null,
          prevEl: null
        }, i("init", (() => {
          !1 === t.params.navigation.enabled ? f() : (u(), l())
        })), i("toEdge fromEdge lock unlock", (() => {
          l()
        })), i("destroy", (() => {
          p()
        })), i("enable disable", (() => {
          let {
            nextEl: e,
            prevEl: r
          } = t.navigation;
          e = (0, n.m)(e), r = (0, n.m)(r), t.enabled ? l() : [...e, ...r].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        })), i("click", ((e, r) => {
          let {
            nextEl: i,
            prevEl: a
          } = t.navigation;
          i = (0, n.m)(i), a = (0, n.m)(a);
          const o = r.target;
          if (t.params.navigation.hideOnClick && !a.includes(o) && !i.includes(o)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === o || t.pagination.el.contains(o))) return;
            let e;
            i.length ? e = i[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)), s(!0 === e ? "navigationShow" : "navigationHide"), [...i, ...a].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
          }
        }));
        const f = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), p()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), l()
          },
          disable: f,
          update: l,
          init: u,
          destroy: p
        })
      }

      function s(e) {
        let {
          swiper: t,
          extendParams: r,
          on: i
        } = e;

        function s(e, t) {
          const r = function() {
            let e, t, r;
            return (n, i) => {
              for (t = -1, e = n.length; e - t > 1;) r = e + t >> 1, n[r] <= i ? t = r : e = r;
              return e
            }
          }();
          let n, i;
          return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
            return e ? (i = r(this.x, e), n = i - 1, (e - this.x[n]) * (this.y[i] - this.y[n]) / (this.x[i] - this.x[n]) + this.y[n]) : 0
          }, this
        }

        function a() {
          t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }
        r({
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        }), t.controller = {
          control: void 0
        }, i("beforeInit", (() => {
          if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
            const e = document.querySelector(t.params.controller.control);
            if (e && e.swiper) t.controller.control = e.swiper;
            else if (e) {
              const r = n => {
                t.controller.control = n.detail[0], t.update(), e.removeEventListener("init", r)
              };
              e.addEventListener("init", r)
            }
          } else t.controller.control = t.params.controller.control
        })), i("update", (() => {
          a()
        })), i("resize", (() => {
          a()
        })), i("observerUpdate", (() => {
          a()
        })), i("setTranslate", ((e, r, n) => {
          t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(r, n)
        })), i("setTransition", ((e, r, n) => {
          t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(r, n)
        })), Object.assign(t.controller, {
          setTranslate: function(e, r) {
            const n = t.controller.control;
            let i, a;
            const o = t.constructor;

            function l(e) {
              if (e.destroyed) return;
              const r = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by && (function(e) {
                t.controller.spline = t.params.loop ? new s(t.slidesGrid, e.slidesGrid) : new s(t.snapGrid, e.snapGrid)
              }(e), a = -t.controller.spline.interpolate(-r)), a && "container" !== t.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(i) && Number.isFinite(i) || (i = 1), a = (r - t.minTranslate()) * i + e.minTranslate()), t.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, t), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            if (Array.isArray(n))
              for (let e = 0; e < n.length; e += 1) n[e] !== r && n[e] instanceof o && l(n[e]);
            else n instanceof o && r !== n && l(n)
          },
          setTransition: function(e, r) {
            const i = t.constructor,
              s = t.controller.control;
            let a;

            function o(r) {
              r.destroyed || (r.setTransition(e, t), 0 !== e && (r.transitionStart(), r.params.autoHeight && (0, n.n)((() => {
                r.updateAutoHeight()
              })), (0, n.j)(r.wrapperEl, (() => {
                s && r.transitionEnd()
              }))))
            }
            if (Array.isArray(s))
              for (a = 0; a < s.length; a += 1) s[a] !== r && s[a] instanceof i && o(s[a]);
            else s instanceof i && r !== s && o(s)
          }
        })
      }
    },
    1068: (e, t, r) => {
      function n(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function i(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : n(t[r]) && n(e[r]) && Object.keys(t[r]).length > 0 && i(e[r], t[r])
        }))
      }
      r.d(t, {
        a: () => l,
        g: () => a
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
        const e = "undefined" != typeof document ? document : {};
        return i(e, s), e
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
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function l() {
        const e = "undefined" != typeof window ? window : {};
        return i(e, o), e
      }
    },
    5848: (e, t, r) => {
      r.d(t, {
        a: () => b,
        c: () => h,
        d: () => a,
        e: () => p,
        f: () => x,
        g: () => w,
        i: () => o,
        j: () => y,
        m: () => S,
        n: () => s,
        o: () => g,
        p: () => m,
        q: () => v,
        r: () => u,
        s: () => c,
        t: () => f,
        u: () => d,
        v: () => i
      });
      var n = r(1068);

      function i(e) {
        const t = e;
        Object.keys(t).forEach((e => {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        }))
      }

      function s(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function a() {
        return Date.now()
      }

      function o(e, t) {
        void 0 === t && (t = "x");
        const r = (0, n.a)();
        let i, s, a;
        const o = function(e) {
          const t = (0, n.a)();
          let r;
          return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
        }(e);
        return r.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
      }

      function l(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function d() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i && (r = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
            const r = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, n = r.length; t < n; t += 1) {
              const n = r[t],
                s = Object.getOwnPropertyDescriptor(i, n);
              void 0 !== s && s.enumerable && (l(e[n]) && l(i[n]) ? i[n].__swiper__ ? e[n] = i[n] : d(e[n], i[n]) : !l(e[n]) && l(i[n]) ? (e[n] = {}, i[n].__swiper__ ? e[n] = i[n] : d(e[n], i[n])) : e[n] = i[n])
            }
          }
        }
        var r;
        return e
      }

      function c(e, t, r) {
        e.style.setProperty(t, r)
      }

      function u(e) {
        let {
          swiper: t,
          targetPosition: r,
          side: i
        } = e;
        const s = (0, n.a)(),
          a = -t.translate;
        let o, l = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > a ? "next" : "prev",
          u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          p = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / d, 1), 0),
              n = .5 - Math.cos(e * Math.PI) / 2;
            let c = a + n * (r - a);
            if (u(c, r) && (c = r), t.wrapperEl.scrollTo({
                [i]: c
              }), u(c, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [i]: c
              })
            })), void s.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = s.requestAnimationFrame(p)
          };
        p()
      }

      function p(e, t) {
        return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
      }

      function f(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function h(e, t) {
        void 0 === t && (t = []);
        const r = document.createElement(e);
        return r.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), r
      }

      function v(e, t) {
        const r = [];
        for (; e.previousElementSibling;) {
          const n = e.previousElementSibling;
          t ? n.matches(t) && r.push(n) : r.push(n), e = n
        }
        return r
      }

      function m(e, t) {
        const r = [];
        for (; e.nextElementSibling;) {
          const n = e.nextElementSibling;
          t ? n.matches(t) && r.push(n) : r.push(n), e = n
        }
        return r
      }

      function g(e, t) {
        return (0, n.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function w(e) {
        let t, r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
          return t
        }
      }

      function b(e, t) {
        const r = [];
        let n = e.parentElement;
        for (; n;) t ? n.matches(t) && r.push(n) : r.push(n), n = n.parentElement;
        return r
      }

      function y(e, t) {
        t && e.addEventListener("transitionend", (function r(n) {
          n.target === e && (t.call(e, n), e.removeEventListener("transitionend", r))
        }))
      }

      function x(e, t, r) {
        const i = (0, n.a)();
        return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }

      function S(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
      }
    },
    8111: (e, t, r) => {
      r.d(t, {
        wx: () => K,
        Ky: () => Z
      });
      var n = r(8200),
        i = r(1068),
        s = r(5848);
      let a, o, l;

      function d() {
        return a || (a = function() {
          const e = (0, i.a)(),
            t = (0, i.g)();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), a
      }

      function c(e) {
        return void 0 === e && (e = {}), o || (o = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const r = d(),
            n = (0, i.a)(),
            s = n.navigator.platform,
            a = t || n.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            l = n.screen.width,
            c = n.screen.height,
            u = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = a.match(/(iPad).*OS\s([\d_]+)/);
          const f = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            v = "Win32" === s;
          let m = "MacIntel" === s;
          return !p && m && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (p = a.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), u && !v && (o.os = "android", o.android = !0), (p || h || f) && (o.os = "ios", o.ios = !0), o
        }(e)), o
      }
      var u = {
        on(e, t, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;
          const i = r ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t)
          })), n
        },
        once(e, t, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;

          function i() {
            n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
            t.apply(n, s)
          }
          return i.__emitterProxy = t, n.on(e, i, r)
        },
        onAny(e, t) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof e) return r;
          const n = t ? "unshift" : "push";
          return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const r = t.eventsAnyListeners.indexOf(e);
          return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
        },
        off(e, t) {
          const r = this;
          return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((e => {
            void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((n, i) => {
              (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(i, 1)
            }))
          })), r) : r
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, r, n;
          for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
          return "string" == typeof s[0] || Array.isArray(s[0]) ? (t = s[0], r = s.slice(1, s.length), n = e) : (t = s[0].events, r = s[0].data, n = s[0].context || e), r.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(n, [t, ...r])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(n, r)
            }))
          })), e
        }
      };
      const p = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (r) {
            let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        f = (e, t) => {
          if (!e.slides[t]) return;
          const r = e.slides[t].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading")
        },
        h = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const r = e.slides.length;
          if (!r || !t || t < 0) return;
          t = Math.min(t, r);
          const n = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const r = i,
              s = [r - t];
            return s.push(...Array.from({
              length: t
            }).map(((e, t) => r + n + t))), void e.slides.forEach(((t, r) => {
              s.includes(t.column) && f(e, r)
            }))
          }
          const s = i + n - 1;
          if (e.params.rewind || e.params.loop)
            for (let n = i - t; n <= s + t; n += 1) {
              const t = (n % r + r) % r;
              (t < i || t > s) && f(e, t)
            } else
              for (let n = Math.max(i - t, 0); n <= Math.min(s + t, r - 1); n += 1) n !== i && (n > s || n < i) && f(e, n)
        };
      var v = {
        updateSize: function() {
          const e = this;
          let t, r;
          const n = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : n.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt((0, s.o)(n, "padding-left") || 0, 10) - parseInt((0, s.o)(n, "padding-right") || 0, 10), r = r - parseInt((0, s.o)(n, "padding-top") || 0, 10) - parseInt((0, s.o)(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
            width: t,
            height: r,
            size: e.isHorizontal() ? t : r
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, r) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0)
          }
          const r = e.params,
            {
              wrapperEl: n,
              slidesEl: i,
              size: a,
              rtlTranslate: o,
              wrongRTL: l
            } = e,
            d = e.virtual && r.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            u = (0, s.e)(i, `.${e.params.slideClass}, swiper-slide`),
            p = d ? e.virtual.slides.length : u.length;
          let f = [];
          const h = [],
            v = [];
          let m = r.slidesOffsetBefore;
          "function" == typeof m && (m = r.slidesOffsetBefore.call(e));
          let g = r.slidesOffsetAfter;
          "function" == typeof g && (g = r.slidesOffsetAfter.call(e));
          const w = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = r.spaceBetween,
            x = -m,
            S = 0,
            T = 0;
          if (void 0 === a) return;
          "string" == typeof y && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * a : "string" == typeof y && (y = parseFloat(y)), e.virtualSize = -y, u.forEach((e => {
            o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), r.centeredSlides && r.cssMode && ((0, s.s)(n, "--swiper-centered-offset-before", ""), (0, s.s)(n, "--swiper-centered-offset-after", ""));
          const E = r.grid && r.grid.rows > 1 && e.grid;
          let C;
          E ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
          const P = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
          for (let n = 0; n < p; n += 1) {
            let i;
            if (C = 0, u[n] && (i = u[n]), E && e.grid.updateSlide(n, i, u), !u[n] || "none" !== (0, s.o)(i, "display")) {
              if ("auto" === r.slidesPerView) {
                P && (u[n].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(i),
                  o = i.style.transform,
                  l = i.style.webkitTransform;
                if (o && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), r.roundLengths) C = e.isHorizontal() ? (0, s.f)(i, "width", !0) : (0, s.f)(i, "height", !0);
                else {
                  const e = t(a, "width"),
                    r = t(a, "padding-left"),
                    n = t(a, "padding-right"),
                    s = t(a, "margin-left"),
                    o = t(a, "margin-right"),
                    l = a.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + s + o;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: a
                    } = i;
                    C = e + r + n + s + o + (a - t)
                  }
                }
                o && (i.style.transform = o), l && (i.style.webkitTransform = l), r.roundLengths && (C = Math.floor(C))
              } else C = (a - (r.slidesPerView - 1) * y) / r.slidesPerView, r.roundLengths && (C = Math.floor(C)), u[n] && (u[n].style[e.getDirectionLabel("width")] = `${C}px`);
              u[n] && (u[n].swiperSlideSize = C), v.push(C), r.centeredSlides ? (x = x + C / 2 + S / 2 + y, 0 === S && 0 !== n && (x = x - a / 2 - y), 0 === n && (x = x - a / 2 - y), Math.abs(x) < .001 && (x = 0), r.roundLengths && (x = Math.floor(x)), T % r.slidesPerGroup == 0 && f.push(x), h.push(x)) : (r.roundLengths && (x = Math.floor(x)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && f.push(x), h.push(x), x = x + C + y), e.virtualSize += C + y, S = C, T += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, a) + g, o && l && ("slide" === r.effect || "coverflow" === r.effect) && (n.style.width = `${e.virtualSize+y}px`), r.setWrapperSize && (n.style[e.getDirectionLabel("width")] = `${e.virtualSize+y}px`), E && e.grid.updateWrapperSize(C, f), !r.centeredSlides) {
            const t = [];
            for (let n = 0; n < f.length; n += 1) {
              let i = f[n];
              r.roundLengths && (i = Math.floor(i)), f[n] <= e.virtualSize - a && t.push(i)
            }
            f = t, Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - a)
          }
          if (d && r.loop) {
            const t = v[0] + y;
            if (r.slidesPerGroup > 1) {
              const n = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
                i = t * r.slidesPerGroup;
              for (let e = 0; e < n; e += 1) f.push(f[f.length - 1] + i)
            }
            for (let n = 0; n < e.virtual.slidesBefore + e.virtual.slidesAfter; n += 1) 1 === r.slidesPerGroup && f.push(f[f.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
          }
          if (0 === f.length && (f = [0]), 0 !== y) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            u.filter(((e, t) => !(r.cssMode && !r.loop) || t !== u.length - 1)).forEach((e => {
              e.style[t] = `${y}px`
            }))
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            v.forEach((t => {
              e += t + (y || 0)
            })), e -= y;
            const t = e - a;
            f = f.map((e => e <= 0 ? -m : e > t ? t + g : e))
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            if (v.forEach((t => {
                e += t + (y || 0)
              })), e -= y, e < a) {
              const t = (a - e) / 2;
              f.forEach(((e, r) => {
                f[r] = e - t
              })), h.forEach(((e, r) => {
                h[r] = e + t
              }))
            }
          }
          if (Object.assign(e, {
              slides: u,
              snapGrid: f,
              slidesGrid: h,
              slidesSizesGrid: v
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            (0, s.s)(n, "--swiper-centered-offset-before", -f[0] + "px"), (0, s.s)(n, "--swiper-centered-offset-after", e.size / 2 - v[v.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + r))
          }
          if (p !== c && e.emit("slidesLengthChange"), f.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(d || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const t = `${r.containerModifierClass}backface-hidden`,
              n = e.el.classList.contains(t);
            p <= r.maxBackfaceHiddenSlides ? n || e.el.classList.add(t) : n && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            r = [],
            n = t.virtual && t.params.virtual.enabled;
          let i, s = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const a = e => n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              r.push(e)
            }));
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !n) break;
                r.push(a(e))
              } else r.push(a(t.activeIndex));
          for (i = 0; i < r.length; i += 1)
            if (void 0 !== r[i]) {
              const e = r[i].offsetHeight;
              s = e > s ? e : s
            }(s || 0 === s) && (t.wrapperEl.style.height = `${s}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - r - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            r = t.params,
            {
              slides: n,
              rtlTranslate: i,
              snapGrid: s
            } = t;
          if (0 === n.length) return;
          void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          i && (a = e), n.forEach((e => {
            e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass)
          })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let o = r.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < n.length; e += 1) {
            const l = n[e];
            let d = l.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (d -= n[0].swiperSlideOffset);
            const c = (a + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              u = (a - s[0] + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              p = -(a - d),
              f = p + t.slidesSizesGrid[e],
              h = p >= 0 && p <= t.size - t.slidesSizesGrid[e];
            (p >= 0 && p < t.size - 1 || f > 1 && f <= t.size || p <= 0 && f >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), n[e].classList.add(r.slideVisibleClass)), h && n[e].classList.add(r.slideFullyVisibleClass), l.progress = i ? -c : c, l.originalProgress = i ? -u : u
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * r || 0
          }
          const r = t.params,
            n = t.maxTranslate() - t.minTranslate();
          let {
            progress: i,
            isBeginning: s,
            isEnd: a,
            progressLoop: o
          } = t;
          const l = s,
            d = a;
          if (0 === n) i = 0, s = !0, a = !0;
          else {
            i = (e - t.minTranslate()) / n;
            const r = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            s = r || i <= 0, a = o || i >= 1, r && (i = 0), o && (i = 1)
          }
          if (r.loop) {
            const r = t.getSlideIndexByData(0),
              n = t.getSlideIndexByData(t.slides.length - 1),
              i = t.slidesGrid[r],
              s = t.slidesGrid[n],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            o = l >= i ? (l - i) / a : (l + a - s) / a, o > 1 && (o -= 1)
          }
          Object.assign(t, {
            progress: i,
            progressLoop: o,
            isBeginning: s,
            isEnd: a
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !s || d && !a) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: r,
              slidesEl: n,
              activeIndex: i
            } = e,
            a = e.virtual && r.virtual.enabled,
            o = e.grid && r.grid && r.grid.rows > 1,
            l = e => (0, s.e)(n, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
          let d, c, u;
          if (t.forEach((e => {
              e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
            })), a)
            if (r.loop) {
              let t = i - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), d = l(`[data-swiper-slide-index="${t}"]`)
            } else d = l(`[data-swiper-slide-index="${i}"]`);
          else o ? (d = t.filter((e => e.column === i))[0], u = t.filter((e => e.column === i + 1))[0], c = t.filter((e => e.column === i - 1))[0]) : d = t[i];
          d && (d.classList.add(r.slideActiveClass), o ? (u && u.classList.add(r.slideNextClass), c && c.classList.add(r.slidePrevClass)) : (u = (0, s.p)(d, `.${r.slideClass}, swiper-slide`)[0], r.loop && !u && (u = t[0]), u && u.classList.add(r.slideNextClass), c = (0, s.q)(d, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !c && (c = t[t.length - 1]), c && c.classList.add(r.slidePrevClass))), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: n,
              params: i,
              activeIndex: s,
              realIndex: a,
              snapIndex: o
            } = t;
          let l, d = e;
          const c = e => {
            let r = e - t.virtual.slidesBefore;
            return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
          };
          if (void 0 === d && (d = function(e) {
              const {
                slidesGrid: t,
                params: r
              } = e, n = e.rtlTranslate ? e.translate : -e.translate;
              let i;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? n >= t[e] && n < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : n >= t[e] && n < t[e + 1] && (i = e + 1) : n >= t[e] && (i = e);
              return r.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            }(t)), n.indexOf(r) >= 0) l = n.indexOf(r);
          else {
            const e = Math.min(i.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / i.slidesPerGroup)
          }
          if (l >= n.length && (l = n.length - 1), d === s && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (d === s && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const u = t.grid && i.grid && i.grid.rows > 1;
          let p;
          if (t.virtual && i.virtual.enabled && i.loop) p = c(d);
          else if (u) {
            const e = t.slides.filter((e => e.column === d))[0];
            let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)), p = Math.floor(r / i.grid.rows)
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            p = e ? parseInt(e, 10) : d
          } else p = d;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: a,
            realIndex: p,
            previousIndex: s,
            activeIndex: d
          }), t.initialized && h(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== p && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const r = this,
            n = r.params;
          let i = e.closest(`.${n.slideClass}, swiper-slide`);
          !i && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !i && e.matches && e.matches(`.${n.slideClass}, swiper-slide`) && (i = e)
          }));
          let s, a = !1;
          if (i)
            for (let e = 0; e < r.slides.length; e += 1)
              if (r.slides[e] === i) {
                a = !0, s = e;
                break
              } if (!i || !a) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
          r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = s, n.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
      };

      function m(e) {
        let {
          swiper: t,
          runCallbacks: r,
          direction: n,
          step: i
        } = e;
        const {
          activeIndex: s,
          previousIndex: a
        } = t;
        let o = n;
        if (o || (o = s > a ? "next" : s < a ? "prev" : "reset"), t.emit(`transition${i}`), r && s !== a) {
          if ("reset" === o) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`), "next" === o ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
      }
      var g = {
          slideTo: function(e, t, r, n, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const a = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: l,
              snapGrid: d,
              slidesGrid: c,
              previousIndex: u,
              activeIndex: p,
              rtlTranslate: f,
              wrapperEl: h,
              enabled: v
            } = a;
            if (a.animating && l.preventInteractionOnTransition || !v && !n && !i || a.destroyed) return !1;
            const m = Math.min(a.params.slidesPerGroupSkip, o);
            let g = m + Math.floor((o - m) / a.params.slidesPerGroup);
            g >= d.length && (g = d.length - 1);
            const w = -d[g];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * w),
                  r = Math.floor(100 * c[e]),
                  n = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1] ? t >= r && t < n - (n - r) / 2 ? o = e : t >= r && t < n && (o = e + 1) : t >= r && (o = e)
              }
            if (a.initialized && o !== p) {
              if (!a.allowSlideNext && (f ? w > a.translate && w > a.minTranslate() : w < a.translate && w < a.minTranslate())) return !1;
              if (!a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (p || 0) !== o) return !1
            }
            let b;
            if (o !== (u || 0) && r && a.emit("beforeSlideChangeStart"), a.updateProgress(w), b = o > p ? "next" : o < p ? "prev" : "reset", f && -w === a.translate || !f && w === a.translate) return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(w), "reset" !== b && (a.transitionStart(r, b), a.transitionEnd(r, b)), !1;
            if (l.cssMode) {
              const e = a.isHorizontal(),
                r = f ? w : -w;
              if (0 === t) {
                const t = a.virtual && a.params.virtual.enabled;
                t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), t && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                  h[e ? "scrollLeft" : "scrollTop"] = r
                }))) : h[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame((() => {
                  a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                }))
              } else {
                if (!a.support.smoothScroll) return (0, s.r)({
                  swiper: a,
                  targetPosition: r,
                  side: e ? "left" : "top"
                }), !0;
                h.scrollTo({
                  [e ? "left" : "top"]: r,
                  behavior: "smooth"
                })
              }
              return !0
            }
            return a.setTransition(t), a.setTranslate(w), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, n), a.transitionStart(r, b), 0 === t ? a.transitionEnd(r, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
              a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(r, b))
            }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, r, n) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const i = this;
            if (i.destroyed) return;
            const s = i.grid && i.params.grid && i.params.grid.rows > 1;
            let a = e;
            if (i.params.loop)
              if (i.virtual && i.params.virtual.enabled) a += i.virtual.slidesBefore;
              else {
                let e;
                if (s) {
                  const t = a * i.params.grid.rows;
                  e = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else e = i.getSlideIndexByData(a);
                const t = s ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                  {
                    centeredSlides: r
                  } = i.params;
                let n = i.params.slidesPerView;
                "auto" === n ? n = i.slidesPerViewDynamic() : (n = Math.ceil(parseFloat(i.params.slidesPerView, 10)), r && n % 2 == 0 && (n += 1));
                let o = t - e < n;
                if (r && (o = o || e < Math.ceil(n / 2)), o) {
                  const n = r ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                  i.loopFix({
                    direction: n,
                    slideTo: !0,
                    activeSlideIndex: "next" === n ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === n ? i.realIndex : void 0
                  })
                }
                if (s) {
                  const e = a * i.params.grid.rows;
                  a = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else a = i.getSlideIndexByData(a)
              } return requestAnimationFrame((() => {
              i.slideTo(a, t, r, n)
            })), i
          },
          slideNext: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const n = this,
              {
                enabled: i,
                params: s,
                animating: a
              } = n;
            if (!i || n.destroyed) return n;
            let o = s.slidesPerGroup;
            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
            const l = n.activeIndex < s.slidesPerGroupSkip ? 1 : o,
              d = n.virtual && s.virtual.enabled;
            if (s.loop) {
              if (a && !d && s.loopPreventsSliding) return !1;
              if (n.loopFix({
                  direction: "next"
                }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && s.cssMode) return requestAnimationFrame((() => {
                n.slideTo(n.activeIndex + l, e, t, r)
              })), !0
            }
            return s.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r)
          },
          slidePrev: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const n = this,
              {
                params: i,
                snapGrid: s,
                slidesGrid: a,
                rtlTranslate: o,
                enabled: l,
                animating: d
              } = n;
            if (!l || n.destroyed) return n;
            const c = n.virtual && i.virtual.enabled;
            if (i.loop) {
              if (d && !c && i.loopPreventsSliding) return !1;
              n.loopFix({
                direction: "prev"
              }), n._clientLeft = n.wrapperEl.clientLeft
            }

            function u(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = u(o ? n.translate : -n.translate),
              f = s.map((e => u(e)));
            let h = s[f.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
              let e;
              s.forEach(((t, r) => {
                p >= t && (e = r)
              })), void 0 !== e && (h = s[e > 0 ? e - 1 : e])
            }
            let v = 0;
            if (void 0 !== h && (v = a.indexOf(h), v < 0 && (v = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (v = v - n.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), i.rewind && n.isBeginning) {
              const i = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
              return n.slideTo(i, e, t, r)
            }
            return i.loop && 0 === n.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
              n.slideTo(v, e, t, r)
            })), !0) : n.slideTo(v, e, t, r)
          },
          slideReset: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const n = this;
            if (!n.destroyed) return n.slideTo(n.activeIndex, e, t, r)
          },
          slideToClosest: function(e, t, r, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = .5);
            const i = this;
            if (i.destroyed) return;
            let s = i.activeIndex;
            const a = Math.min(i.params.slidesPerGroupSkip, s),
              o = a + Math.floor((s - a) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[o]) {
              const e = i.snapGrid[o];
              l - e > (i.snapGrid[o + 1] - e) * n && (s += i.params.slidesPerGroup)
            } else {
              const e = i.snapGrid[o - 1];
              l - e <= (i.snapGrid[o] - e) * n && (s -= i.params.slidesPerGroup)
            }
            return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, e, t, r)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: r
            } = e, n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, a = e.clickedIndex;
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - n / 2 || a > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), a = e.getSlideIndex((0, s.e)(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), (0, s.n)((() => {
                e.slideTo(a)
              }))) : e.slideTo(a) : a > e.slides.length - n ? (e.loopFix(), a = e.getSlideIndex((0, s.e)(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), (0, s.n)((() => {
                e.slideTo(a)
              }))) : e.slideTo(a)
            } else e.slideTo(a)
          }
        },
        w = {
          loopCreate: function(e) {
            const t = this,
              {
                params: r,
                slidesEl: n
              } = t;
            if (!r.loop || t.virtual && t.params.virtual.enabled) return;
            const i = () => {
                (0, s.e)(n, `.${r.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              a = t.grid && r.grid && r.grid.rows > 1,
              o = r.slidesPerGroup * (a ? r.grid.rows : 1),
              l = t.slides.length % o != 0,
              d = a && t.slides.length % r.grid.rows != 0,
              c = e => {
                for (let n = 0; n < e; n += 1) {
                  const e = t.isElement ? (0, s.c)("swiper-slide", [r.slideBlankClass]) : (0, s.c)("div", [r.slideClass, r.slideBlankClass]);
                  t.slidesEl.append(e)
                }
              };
            l ? (r.loopAddBlankSlides ? (c(o - t.slides.length % o), t.recalcSlides(), t.updateSlides()) : (0, s.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : d ? (r.loopAddBlankSlides ? (c(r.grid.rows - t.slides.length % r.grid.rows), t.recalcSlides(), t.updateSlides()) : (0, s.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), i()) : i(), t.loopFix({
              slideRealIndex: e,
              direction: r.centeredSlides ? void 0 : "next"
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: r = !0,
              direction: n,
              setTranslate: i,
              activeSlideIndex: a,
              byController: o,
              byMousewheel: l
            } = void 0 === e ? {} : e;
            const d = this;
            if (!d.params.loop) return;
            d.emit("beforeLoopFix");
            const {
              slides: c,
              allowSlidePrev: u,
              allowSlideNext: p,
              slidesEl: f,
              params: h
            } = d, {
              centeredSlides: v
            } = h;
            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && h.virtual.enabled) return r && (h.centeredSlides || 0 !== d.snapIndex ? h.centeredSlides && d.snapIndex < h.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = u, d.allowSlideNext = p, void d.emit("loopFix");
            let m = h.slidesPerView;
            "auto" === m ? m = d.slidesPerViewDynamic() : (m = Math.ceil(parseFloat(h.slidesPerView, 10)), v && m % 2 == 0 && (m += 1));
            const g = h.slidesPerGroupAuto ? m : h.slidesPerGroup;
            let w = g;
            w % g != 0 && (w += g - w % g), w += h.loopAdditionalSlides, d.loopedSlides = w;
            const b = d.grid && h.grid && h.grid.rows > 1;
            c.length < m + w ? (0, s.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === h.grid.fill && (0, s.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const y = [],
              x = [];
            let S = d.activeIndex;
            void 0 === a ? a = d.getSlideIndex(c.filter((e => e.classList.contains(h.slideActiveClass)))[0]) : S = a;
            const T = "next" === n || !n,
              E = "prev" === n || !n;
            let C = 0,
              P = 0;
            const _ = b ? Math.ceil(c.length / h.grid.rows) : c.length,
              M = (b ? c[a].column : a) + (v && void 0 === i ? -m / 2 + .5 : 0);
            if (M < w) {
              C = Math.max(w - M, g);
              for (let e = 0; e < w - M; e += 1) {
                const t = e - Math.floor(e / _) * _;
                if (b) {
                  const e = _ - t - 1;
                  for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && y.push(t)
                } else y.push(_ - t - 1)
              }
            } else if (M + m > _ - w) {
              P = Math.max(M - (_ - 2 * w), g);
              for (let e = 0; e < P; e += 1) {
                const t = e - Math.floor(e / _) * _;
                b ? c.forEach(((e, r) => {
                  e.column === t && x.push(r)
                })) : x.push(t)
              }
            }
            if (d.__preventObserver__ = !0, requestAnimationFrame((() => {
                d.__preventObserver__ = !1
              })), E && y.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, f.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
              })), T && x.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, f.append(c[e]), c[e].swiperLoopMoveDOM = !1
              })), d.recalcSlides(), "auto" === h.slidesPerView ? d.updateSlides() : b && (y.length > 0 && E || x.length > 0 && T) && d.slides.forEach(((e, t) => {
                d.grid.updateSlide(t, e, d.slides)
              })), h.watchSlidesProgress && d.updateSlidesOffset(), r)
              if (y.length > 0 && E) {
                if (void 0 === t) {
                  const e = d.slidesGrid[S],
                    t = d.slidesGrid[S + C] - e;
                  l ? d.setTranslate(d.translate - t) : (d.slideTo(S + C, 0, !1, !0), i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                } else if (i) {
                  const e = b ? y.length / h.grid.rows : y.length;
                  d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                }
              } else if (x.length > 0 && T)
              if (void 0 === t) {
                const e = d.slidesGrid[S],
                  t = d.slidesGrid[S - P] - e;
                l ? d.setTranslate(d.translate - t) : (d.slideTo(S - P, 0, !1, !0), i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
              } else {
                const e = b ? x.length / h.grid.rows : x.length;
                d.slideTo(d.activeIndex - e, 0, !1, !0)
              } if (d.allowSlidePrev = u, d.allowSlideNext = p, d.controller && d.controller.control && !o) {
              const e = {
                slideRealIndex: t,
                direction: n,
                setTranslate: i,
                activeSlideIndex: a,
                byController: !0
              };
              Array.isArray(d.controller.control) ? d.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === h.slidesPerView && r
                })
              })) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
                ...e,
                slideTo: d.controller.control.params.slidesPerView === h.slidesPerView && r
              })
            }
            d.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: r
              } = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const n = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              n[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), n.forEach((e => {
              r.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function b(e, t, r) {
        const n = (0, i.a)(),
          {
            params: s
          } = e,
          a = s.edgeSwipeDetection,
          o = s.edgeSwipeThreshold;
        return !a || !(r <= o || r >= n.innerWidth - o) || "prevent" === a && (t.preventDefault(), !0)
      }

      function y(e) {
        const t = this,
          r = (0, i.g)();
        let n = e;
        n.originalEvent && (n = n.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === n.type) {
          if (null !== a.pointerId && a.pointerId !== n.pointerId) return;
          a.pointerId = n.pointerId
        } else "touchstart" === n.type && 1 === n.targetTouches.length && (a.touchId = n.targetTouches[0].identifier);
        if ("touchstart" === n.type) return void b(t, n, n.targetTouches[0].pageX);
        const {
          params: o,
          touches: l,
          enabled: d
        } = t;
        if (!d) return;
        if (!o.simulateTouch && "mouse" === n.pointerType) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let c = n.target;
        if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(c)) return;
        if ("which" in n && 3 === n.which) return;
        if ("button" in n && n.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const u = !!o.noSwipingClass && "" !== o.noSwipingClass,
          p = n.composedPath ? n.composedPath() : n.path;
        u && n.target && n.target.shadowRoot && p && (c = p[0]);
        const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          h = !(!n.target || !n.target.shadowRoot);
        if (o.noSwiping && (h ? function(e, t) {
            return void 0 === t && (t = this),
              function t(r) {
                if (!r || r === (0, i.g)() || r === (0, i.a)()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const n = r.closest(e);
                return n || r.getRootNode ? n || t(r.getRootNode().host) : null
              }(t)
          }(f, c) : c.closest(f))) return void(t.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
        l.currentX = n.pageX, l.currentY = n.pageY;
        const v = l.currentX,
          m = l.currentY;
        if (!b(t, n, v)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = v, l.startY = m, a.touchStartTime = (0, s.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1);
        let g = !0;
        c.matches(a.focusableElements) && (g = !1, "SELECT" === c.nodeName && (a.isTouched = !1)), r.activeElement && r.activeElement.matches(a.focusableElements) && r.activeElement !== c && r.activeElement.blur();
        const w = g && t.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !w || c.isContentEditable || n.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", n)
      }

      function x(e) {
        const t = (0, i.g)(),
          r = this,
          n = r.touchEventsData,
          {
            params: a,
            touches: o,
            rtlTranslate: l,
            enabled: d
          } = r;
        if (!d) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let c, u = e;
        if (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type) {
          if (null !== n.touchId) return;
          if (u.pointerId !== n.pointerId) return
        }
        if ("touchmove" === u.type) {
          if (c = [...u.changedTouches].filter((e => e.identifier === n.touchId))[0], !c || c.identifier !== n.touchId) return
        } else c = u;
        if (!n.isTouched) return void(n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", u));
        const p = c.pageX,
          f = c.pageY;
        if (u.preventedByNestedSwiper) return o.startX = p, void(o.startY = f);
        if (!r.allowTouchMove) return u.target.matches(n.focusableElements) || (r.allowClick = !1), void(n.isTouched && (Object.assign(o, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f
        }), n.touchStartTime = (0, s.d)()));
        if (a.touchReleaseOnEdges && !a.loop)
          if (r.isVertical()) {
            if (f < o.startY && r.translate <= r.maxTranslate() || f > o.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
          } else if (p < o.startX && r.translate <= r.maxTranslate() || p > o.startX && r.translate >= r.minTranslate()) return;
        if (t.activeElement && u.target === t.activeElement && u.target.matches(n.focusableElements)) return n.isMoved = !0, void(r.allowClick = !1);
        n.allowTouchCallbacks && r.emit("touchMove", u), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = p, o.currentY = f;
        const h = o.currentX - o.startX,
          v = o.currentY - o.startY;
        if (r.params.threshold && Math.sqrt(h ** 2 + v ** 2) < r.params.threshold) return;
        if (void 0 === n.isScrolling) {
          let e;
          r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? n.isScrolling = !1 : h * h + v * v >= 25 && (e = 180 * Math.atan2(Math.abs(v), Math.abs(h)) / Math.PI, n.isScrolling = r.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (n.isScrolling && r.emit("touchMoveOpposite", u), void 0 === n.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (n.startMoving = !0)), n.isScrolling) return void(n.isTouched = !1);
        if (!n.startMoving) return;
        r.allowClick = !1, !a.cssMode && u.cancelable && u.preventDefault(), a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
        let m = r.isHorizontal() ? h : v,
          g = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        a.oneWayMovement && (m = Math.abs(m) * (l ? 1 : -1), g = Math.abs(g) * (l ? 1 : -1)), o.diff = m, m *= a.touchRatio, l && (m = -m, g = -g);
        const w = r.touchesDirection;
        r.swipeDirection = m > 0 ? "prev" : "next", r.touchesDirection = g > 0 ? "prev" : "next";
        const b = r.params.loop && !a.cssMode,
          y = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
        if (!n.isMoved) {
          if (b && y && r.loopFix({
              direction: r.swipeDirection
            }), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            r.wrapperEl.dispatchEvent(e)
          }
          n.allowMomentumBounce = !1, !a.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", u)
        }
        if ((new Date).getTime(), n.isMoved && n.allowThresholdMove && w !== r.touchesDirection && b && y && Math.abs(m) >= 1) return Object.assign(o, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f,
          startTranslate: n.currentTranslate
        }), n.loopSwapReset = !0, void(n.startTranslate = n.currentTranslate);
        r.emit("sliderMove", u), n.isMoved = !0, n.currentTranslate = m + n.startTranslate;
        let x = !0,
          S = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (S = 0), m > 0 ? (b && y && n.allowThresholdMove && n.currentTranslate > (a.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), n.currentTranslate > r.minTranslate() && (x = !1, a.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + m) ** S))) : m < 0 && (b && y && n.allowThresholdMove && n.currentTranslate < (a.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === a.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
          }), n.currentTranslate < r.maxTranslate() && (x = !1, a.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - m) ** S))), x && (u.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), a.threshold > 0) {
          if (!(Math.abs(m) > a.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove) return n.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, n.currentTranslate = n.startTranslate, void(o.diff = r.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && r.freeMode || a.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate))
      }

      function S(e) {
        const t = this,
          r = t.touchEventsData;
        let n, i = e;
        if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
          if (n = [...i.changedTouches].filter((e => e.identifier === r.touchId))[0], !n || n.identifier !== r.touchId) return
        } else {
          if (null !== r.touchId) return;
          if (i.pointerId !== r.pointerId) return;
          n = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && (!["pointercancel", "contextmenu"].includes(i.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        r.pointerId = null, r.touchId = null;
        const {
          params: a,
          touches: o,
          rtlTranslate: l,
          slidesGrid: d,
          enabled: c
        } = t;
        if (!c) return;
        if (!a.simulateTouch && "mouse" === i.pointerType) return;
        if (r.allowTouchCallbacks && t.emit("touchEnd", i), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && a.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        a.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = (0, s.d)(),
          p = u - r.touchStartTime;
        if (t.allowClick) {
          const e = i.path || i.composedPath && i.composedPath();
          t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), p < 300 && u - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (r.lastClickTime = (0, s.d)(), (0, s.n)((() => {
            t.destroyed || (t.allowClick = !0)
          })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let f;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, f = a.followFinger ? l ? t.translate : -t.translate : -r.currentTranslate, a.cssMode) return;
        if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: f
        });
        const h = f >= -t.maxTranslate() && !t.params.loop;
        let v = 0,
          m = t.slidesSizesGrid[0];
        for (let e = 0; e < d.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
          const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== d[e + t] ? (h || f >= d[e] && f < d[e + t]) && (v = e, m = d[e + t] - d[e]) : (h || f >= d[e]) && (v = e, m = d[d.length - 1] - d[d.length - 2])
        }
        let g = null,
          w = null;
        a.rewind && (t.isBeginning ? w = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const b = (f - d[v]) / m,
          y = v < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (p > a.longSwipesMs) {
          if (!a.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (b >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : v + y) : t.slideTo(v)), "prev" === t.swipeDirection && (b > 1 - a.longSwipesRatio ? t.slideTo(v + y) : null !== w && b < 0 && Math.abs(b) > a.longSwipesRatio ? t.slideTo(w) : t.slideTo(v))
        } else {
          if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || i.target !== t.navigation.nextEl && i.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : v + y), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : v)) : i.target === t.navigation.nextEl ? t.slideTo(v + y) : t.slideTo(v)
        }
      }

      function T() {
        const e = this,
          {
            params: t,
            el: r
          } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: n,
          allowSlidePrev: i,
          snapGrid: s
        } = e, a = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
      }

      function E(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function C() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: r,
            enabled: n
          } = e;
        if (!n) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, i !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function P(e) {
        const t = this;
        p(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function _() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const M = (e, t) => {
          const r = (0, i.g)(),
            {
              params: n,
              el: s,
              wrapperEl: a,
              device: o
            } = e,
            l = !!n.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          r[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), s[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), s[d]("pointerdown", e.onTouchStart, {
            passive: !1
          }), r[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("touchend", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerup", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerout", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), r[d]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (n.preventClicks || n.preventClicksPropagation) && s[d]("click", e.onClick, !0), n.cssMode && a[d]("scroll", e.onScroll), n.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", T, !0) : e[c]("observerUpdate", T, !0), s[d]("load", e.onLoad, {
            capture: !0
          })
        },
        k = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var O = {
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

      function I(e, t) {
        return function(r) {
          void 0 === r && (r = {});
          const n = Object.keys(r)[0],
            i = r[n];
          "object" == typeof i && null !== i ? (!0 === e[n] && (e[n] = {
            enabled: !0
          }), "navigation" === n && e[n] && e[n].enabled && !e[n].prevEl && !e[n].nextEl && (e[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && e[n] && e[n].enabled && !e[n].el && (e[n].auto = !0), n in e && "enabled" in i ? ("object" != typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
            enabled: !1
          }), (0, s.u)(t, r)) : (0, s.u)(t, r)) : (0, s.u)(t, r)
        }
      }
      const L = {
          eventsEmitter: u,
          update: v,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: r,
                translate: n,
                wrapperEl: i
              } = this;
              if (t.virtualTranslate) return r ? -n : n;
              if (t.cssMode) return n;
              let a = (0, s.i)(i, e);
              return a += this.cssOverflowAdjustment(), r && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
              const r = this,
                {
                  rtlTranslate: n,
                  params: i,
                  wrapperEl: s,
                  progress: a
                } = r;
              let o, l = 0,
                d = 0;
              r.isHorizontal() ? l = n ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : d, i.cssMode ? s[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -d : i.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : d -= r.cssOverflowAdjustment(), s.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
              const c = r.maxTranslate() - r.minTranslate();
              o = 0 === c ? 0 : (e - r.minTranslate()) / c, o !== a && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, r, n, i) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === n && (n = !0);
              const a = this,
                {
                  params: o,
                  wrapperEl: l
                } = a;
              if (a.animating && o.preventInteractionOnTransition) return !1;
              const d = a.minTranslate(),
                c = a.maxTranslate();
              let u;
              if (u = n && e > d ? d : n && e < c ? c : e, a.updateProgress(u), o.cssMode) {
                const e = a.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -u;
                else {
                  if (!a.support.smoothScroll) return (0, s.r)({
                    swiper: a,
                    targetPosition: -u,
                    side: e ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [e ? "left" : "top"]: -u,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (a.setTransition(0), a.setTranslate(u), r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(u), r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, r && a.emit("transitionEnd"))
              }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const r = this;
              r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), r.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: n
                } = r;
              n.cssMode || (n.autoHeight && r.updateAutoHeight(), m({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: n
                } = r;
              r.animating = !1, n.cssMode || (r.setTransition(0), m({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: g,
          loop: w,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
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
              e.onTouchStart = y.bind(e), e.onTouchMove = x.bind(e), e.onTouchEnd = S.bind(e), e.onDocumentTouchStart = _.bind(e), t.cssMode && (e.onScroll = C.bind(e)), e.onClick = E.bind(e), e.onLoad = P.bind(e), M(e, "on")
            },
            detachEvents: function() {
              M(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: r,
                  params: n,
                  el: i
                } = e,
                a = n.breakpoints;
              if (!a || a && 0 === Object.keys(a).length) return;
              const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!o || e.currentBreakpoint === o) return;
              const l = (o in a ? a[o] : void 0) || e.originalParams,
                d = k(e, n),
                c = k(e, l),
                u = n.enabled;
              d && !c ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (i.classList.add(`${n.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === n.grid.fill) && i.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === l[t]) return;
                const r = n[t] && n[t].enabled,
                  i = l[t] && l[t].enabled;
                r && !i && e[t].disable(), !r && i && e[t].enable()
              }));
              const p = l.direction && l.direction !== n.direction,
                f = n.loop && (l.slidesPerView !== n.slidesPerView || p),
                h = n.loop;
              p && r && e.changeDirection(), (0, s.u)(e.params, l);
              const v = e.params.enabled,
                m = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), u && !v ? e.disable() : !u && v && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), r && (f ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !h && m ? (e.loopCreate(t), e.updateSlides()) : h && !m && e.loopDestroy()), e.emit("breakpoint", l)
            },
            getBreakpoint: function(e, t, r) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
              let n = !1;
              const s = (0, i.a)(),
                a = "window" === t ? s.innerHeight : r.clientHeight,
                o = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: a * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: i,
                  value: a
                } = o[e];
                "window" === t ? s.matchMedia(`(min-width: ${a}px)`).matches && (n = i) : a <= r.clientWidth && (n = i)
              }
              return n || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: r
                } = e,
                {
                  slidesOffsetBefore: n
                } = r;
              if (n) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                e.isLocked = e.size > r
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: r,
                  rtl: n,
                  el: i,
                  device: s
                } = e,
                a = function(e, t) {
                  const r = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((n => {
                      e[n] && r.push(t + n)
                    })) : "string" == typeof e && r.push(t + e)
                  })), r
                }(["initialized", r.direction, {
                  "free-mode": e.params.freeMode && r.freeMode.enabled
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
              t.push(...a), i.classList.add(...t), e.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: e,
                classNames: t
              } = this;
              e.classList.remove(...t), this.emitContainerClasses()
            }
          }
        },
        A = {};
      class z {
        constructor() {
          let e, t;
          for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
          1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = (0, s.u)({}, t), e && !t.el && (t.el = e);
          const o = (0, i.g)();
          if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
            const e = [];
            return o.querySelectorAll(t.el).forEach((r => {
              const n = (0, s.u)({}, t, {
                el: r
              });
              e.push(new z(n))
            })), e
          }
          const u = this;
          u.__swiper__ = !0, u.support = d(), u.device = c({
            userAgent: t.userAgent
          }), u.browser = (l || (l = function() {
            const e = (0, i.a)(),
              t = c();
            let r = !1;

            function n() {
              const t = e.navigator.userAgent.toLowerCase();
              return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (n()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, n] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                r = e < 16 || 16 === e && n < 2
              }
            }
            const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
              a = n();
            return {
              isSafari: r || a,
              needPerspectiveFix: r,
              need3dFix: a || s && t.ios,
              isWebView: s
            }
          }()), l), u.eventsListeners = {}, u.eventsAnyListeners = [], u.modules = [...u.__modules__], t.modules && Array.isArray(t.modules) && u.modules.push(...t.modules);
          const p = {};
          u.modules.forEach((e => {
            e({
              params: t,
              swiper: u,
              extendParams: I(t, p),
              on: u.on.bind(u),
              once: u.once.bind(u),
              off: u.off.bind(u),
              emit: u.emit.bind(u)
            })
          }));
          const f = (0, s.u)({}, O, p);
          return u.params = (0, s.u)({}, f, A, t), u.originalParams = (0, s.u)({}, u.params), u.passedParams = (0, s.u)({}, t), u.params && u.params.on && Object.keys(u.params.on).forEach((e => {
            u.on(e, u.params.on[e])
          })), u.params && u.params.onAny && u.onAny(u.params.onAny), Object.assign(u, {
            enabled: u.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === u.params.direction,
            isVertical: () => "vertical" === u.params.direction,
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
            allowSlideNext: u.params.allowSlideNext,
            allowSlidePrev: u.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: u.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: u.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), u.emit("_swiper"), u.params.init && u.init(), u
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
            params: r
          } = this, n = (0, s.e)(t, `.${r.slideClass}, swiper-slide`), i = (0, s.g)(n[0]);
          return (0, s.g)(e) - i
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = (0, s.e)(e, `.${t.slideClass}, swiper-slide`)
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
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const n = r.minTranslate(),
            i = (r.maxTranslate() - n) * e + n;
          r.translateTo(i, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
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
          e.slides.forEach((r => {
            const n = e.getSlideClasses(r);
            t.push({
              slideEl: r,
              classNames: n
            }), e.emit("_slideClass", r, n)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: n,
            slidesGrid: i,
            slidesSizesGrid: s,
            size: a,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let e, t = n[o] ? Math.ceil(n[o].swiperSlideSize) : 0;
            for (let r = o + 1; r < n.length; r += 1) n[r] && !e && (t += Math.ceil(n[r].swiperSlideSize), l += 1, t > a && (e = !0));
            for (let r = o - 1; r >= 0; r -= 1) n[r] && !e && (t += n[r].swiperSlideSize, l += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = o + 1; e < n.length; e += 1)(t ? i[e] + s[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
          else
            for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < a && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: r
          } = e;

          function n() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let i;
          if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && p(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) n(), r.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
              const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
              i = e.slideTo(t.length - 1, 0, !1, !0)
            } else i = e.slideTo(e.activeIndex, 0, !1, !0);
            i || n()
          }
          r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            n = r.params.direction;
          return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${n}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), r.emit("changeDirection"), t && r.update()), r
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let r = e || t.params.el;
          if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
          r.swiper = t, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(n()) : (0, s.e)(r, n())[0];
          return !i && t.params.createElements && (i = (0, s.c)("div", t.params.wrapperClass), r.append(i), (0, s.e)(r, `.${t.params.slideClass}`).forEach((e => {
            i.append(e)
          }))), Object.assign(t, {
            el: r,
            wrapperEl: i,
            slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : i,
            hostEl: t.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === (0, s.o)(r, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === (0, s.o)(r, "direction")),
            wrongRTL: "-webkit-box" === (0, s.o)(i, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
          const r = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((e => {
            e.complete ? p(t, e) : e.addEventListener("load", (e => {
              p(t, e.target)
            }))
          })), h(t), t.initialized = !0, h(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            {
              params: n,
              el: i,
              wrapperEl: a,
              slides: o
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), i.removeAttribute("style"), a.removeAttribute("style"), o && o.length && o.forEach((e => {
            e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
            r.off(e)
          })), !1 !== e && (r.el.swiper = null, (0, s.v)(r)), r.destroyed = !0), null
        }
        static extendDefaults(e) {
          (0, s.u)(A, e)
        }
        static get extendedDefaults() {
          return A
        }
        static get defaults() {
          return O
        }
        static installModule(e) {
          z.prototype.__modules__ || (z.prototype.__modules__ = []);
          const t = z.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => z.installModule(e))), z) : (z.installModule(e), z)
        }
      }
      Object.keys(L).forEach((e => {
        Object.keys(L[e]).forEach((t => {
          z.prototype[t] = L[e][t]
        }))
      })), z.use([function(e) {
        let {
          swiper: t,
          on: r,
          emit: n
        } = e;
        const s = (0, i.a)();
        let a = null,
          o = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
          },
          d = () => {
            t && !t.destroyed && t.initialized && n("orientationchange")
          };
        r("init", (() => {
          t.params.resizeObserver && void 0 !== s.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
            o = s.requestAnimationFrame((() => {
              const {
                width: r,
                height: n
              } = t;
              let i = r,
                s = n;
              e.forEach((e => {
                let {
                  contentBoxSize: r,
                  contentRect: n,
                  target: a
                } = e;
                a && a !== t.el || (i = n ? n.width : (r[0] || r).inlineSize, s = n ? n.height : (r[0] || r).blockSize)
              })), i === r && s === n || l()
            }))
          })), a.observe(t.el)) : (s.addEventListener("resize", l), s.addEventListener("orientationchange", d))
        })), r("destroy", (() => {
          o && s.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", d)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: r,
          on: n,
          emit: a
        } = e;
        const o = [],
          l = (0, i.a)(),
          d = function(e, r) {
            void 0 === r && (r = {});
            const n = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void a("observerUpdate", e[0]);
              const r = function() {
                a("observerUpdate", e[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(r) : l.setTimeout(r, 0)
            }));
            n.observe(e, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: void 0 === r.childList || r.childList,
              characterData: void 0 === r.characterData || r.characterData
            }), o.push(n)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), n("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = (0, s.a)(t.hostEl);
              for (let t = 0; t < e.length; t += 1) d(e[t])
            }
            d(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), d(t.wrapperEl, {
              attributes: !1
            })
          }
        })), n("destroy", (() => {
          o.forEach((e => {
            e.disconnect()
          })), o.splice(0, o.length)
        }))
      }]);
      const D = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function N(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function G(e, t) {
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : N(t[r]) && N(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : G(e[r], t[r]) : e[r] = t[r]
        }))
      }

      function R(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function B(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function F(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function V(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          r = [];
        return t.forEach((e => {
          r.indexOf(e) < 0 && r.push(e)
        })), r.join(" ")
      }

      function j(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function H() {
        return H = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, H.apply(this, arguments)
      }

      function Y(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function $(e) {
        const t = [];
        return n.Children.toArray(e).forEach((e => {
          Y(e) ? t.push(e) : e.props && e.props.children && $(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function W(e) {
        const t = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return n.Children.toArray(e).forEach((e => {
          if (Y(e)) t.push(e);
          else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const n = $(e.props.children);
            n.length > 0 ? n.forEach((e => t.push(e))) : r["container-end"].push(e)
          } else r["container-end"].push(e)
        })), {
          slides: t,
          slots: r
        }
      }

      function X(e, t) {
        return "undefined" == typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
      }
      const q = (0, n.createContext)(null),
        U = (0, n.createContext)(null),
        K = (0, n.forwardRef)((function(e, t) {
          let {
            className: r,
            tag: i = "div",
            wrapperTag: s = "div",
            children: a,
            onSwiper: o,
            ...l
          } = void 0 === e ? {} : e, d = !1;
          const [c, u] = (0, n.useState)("swiper"), [p, f] = (0, n.useState)(null), [h, v] = (0, n.useState)(!1), m = (0, n.useRef)(!1), g = (0, n.useRef)(null), w = (0, n.useRef)(null), b = (0, n.useRef)(null), y = (0, n.useRef)(null), x = (0, n.useRef)(null), S = (0, n.useRef)(null), T = (0, n.useRef)(null), E = (0, n.useRef)(null), {
            params: C,
            passedParams: P,
            rest: _,
            events: M
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const r = {
                on: {}
              },
              n = {},
              i = {};
            G(r, O), r._emitClasses = !0, r.init = !1;
            const s = {},
              a = D.map((e => e.replace(/_/, ""))),
              o = Object.assign({}, e);
            return Object.keys(o).forEach((o => {
              void 0 !== e[o] && (a.indexOf(o) >= 0 ? N(e[o]) ? (r[o] = {}, i[o] = {}, G(r[o], e[o]), G(i[o], e[o])) : (r[o] = e[o], i[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? n[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : s[o] = e[o])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
            })), {
              params: r,
              passedParams: i,
              rest: s,
              events: n
            }
          }(l), {
            slides: k,
            slots: I
          } = W(a), L = () => {
            v(!h)
          };
          Object.assign(C.on, {
            _containerClasses(e, t) {
              u(t)
            }
          });
          const A = () => {
            Object.assign(C.on, M), d = !0;
            const e = {
              ...C
            };
            if (delete e.wrapperClass, w.current = new z(e), w.current.virtual && w.current.params.virtual.enabled) {
              w.current.virtual.slides = k;
              const e = {
                cache: !1,
                slides: k,
                renderExternal: f,
                renderExternalUpdate: !1
              };
              G(w.current.params.virtual, e), G(w.current.originalParams.virtual, e)
            }
          };
          return g.current || A(), w.current && w.current.on("_beforeBreakpoint", L), (0, n.useEffect)((() => () => {
            w.current && w.current.off("_beforeBreakpoint", L)
          })), (0, n.useEffect)((() => {
            !m.current && w.current && (w.current.emitSlidesClasses(), m.current = !0)
          })), X((() => {
            if (t && (t.current = g.current), g.current) return w.current.destroyed && A(),
              function(e, t) {
                let {
                  el: r,
                  nextEl: n,
                  prevEl: i,
                  paginationEl: s,
                  scrollbarEl: a,
                  swiper: o
                } = e;
                R(t) && n && i && (o.params.navigation.nextEl = n, o.originalParams.navigation.nextEl = n, o.params.navigation.prevEl = i, o.originalParams.navigation.prevEl = i), B(t) && s && (o.params.pagination.el = s, o.originalParams.pagination.el = s), F(t) && a && (o.params.scrollbar.el = a, o.originalParams.scrollbar.el = a), o.init(r)
              }({
                el: g.current,
                nextEl: x.current,
                prevEl: S.current,
                paginationEl: T.current,
                scrollbarEl: E.current,
                swiper: w.current
              }, C), o && !w.current.destroyed && o(w.current), () => {
                w.current && !w.current.destroyed && w.current.destroy(!0, !1)
              }
          }), []), X((() => {
            !d && M && w.current && Object.keys(M).forEach((e => {
              w.current.on(e, M[e])
            }));
            const e = function(e, t, r, n, i) {
              const s = [];
              if (!t) return s;
              const a = e => {
                s.indexOf(e) < 0 && s.push(e)
              };
              if (r && n) {
                const e = n.map(i),
                  t = r.map(i);
                e.join("") !== t.join("") && a("children"), n.length !== r.length && a("children")
              }
              return D.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((r => {
                if (r in e && r in t)
                  if (N(e[r]) && N(t[r])) {
                    const n = Object.keys(e[r]),
                      i = Object.keys(t[r]);
                    n.length !== i.length ? a(r) : (n.forEach((n => {
                      e[r][n] !== t[r][n] && a(r)
                    })), i.forEach((n => {
                      e[r][n] !== t[r][n] && a(r)
                    })))
                  } else e[r] !== t[r] && a(r)
              })), s
            }(P, b.current, k, y.current, (e => e.key));
            return b.current = P, y.current = k, e.length && w.current && !w.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: r,
                passedParams: n,
                changedParams: i,
                nextEl: s,
                prevEl: a,
                scrollbarEl: o,
                paginationEl: l
              } = e;
              const d = i.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: u,
                  navigation: p,
                  scrollbar: f,
                  virtual: h,
                  thumbs: v
                } = t;
              let m, g, w, b, y, x, S, T;
              i.includes("thumbs") && n.thumbs && n.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (m = !0), i.includes("controller") && n.controller && n.controller.control && c.controller && !c.controller.control && (g = !0), i.includes("pagination") && n.pagination && (n.pagination.el || l) && (c.pagination || !1 === c.pagination) && u && !u.el && (w = !0), i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || o) && (c.scrollbar || !1 === c.scrollbar) && f && !f.el && (b = !0), i.includes("navigation") && n.navigation && (n.navigation.prevEl || a) && (n.navigation.nextEl || s) && (c.navigation || !1 === c.navigation) && p && !p.prevEl && !p.nextEl && (y = !0);
              const E = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              i.includes("loop") && t.isElement && (c.loop && !n.loop ? x = !0 : !c.loop && n.loop ? S = !0 : T = !0), d.forEach((e => {
                if (N(c[e]) && N(n[e])) Object.assign(c[e], n[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in n[e]) || n[e].enabled || E(e);
                else {
                  const t = n[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = n[e] : !1 === t && E(e)
                }
              })), d.includes("controller") && !g && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), i.includes("children") && r && h && c.virtual.enabled ? (h.slides = r, h.update(!0)) : i.includes("virtual") && h && c.virtual.enabled && (r && (h.slides = r), h.update(!0)), i.includes("children") && r && c.loop && (T = !0), m && v.init() && v.update(!0), g && (t.controller.control = c.controller.control), w && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (c.pagination.el = l), u.init(), u.render(), u.update()), b && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), t.el.appendChild(o)), o && (c.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()), y && (t.isElement && (s && "string" != typeof s || (s = document.createElement("div"), s.classList.add("swiper-button-next"), s.innerHTML = t.hostEl.constructor.nextButtonSvg, s.part.add("button-next"), t.el.appendChild(s)), a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-prev"), a.innerHTML = t.hostEl.constructor.prevButtonSvg, a.part.add("button-prev"), t.el.appendChild(a))), s && (c.navigation.nextEl = s), a && (c.navigation.prevEl = a), p.init(), p.update()), i.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev), i.includes("direction") && t.changeDirection(n.direction, !1), (x || T) && t.loopDestroy(), (S || T) && t.loopCreate(), t.update()
            }({
              swiper: w.current,
              slides: k,
              passedParams: P,
              changedParams: e,
              nextEl: x.current,
              prevEl: S.current,
              scrollbarEl: E.current,
              paginationEl: T.current
            }), () => {
              M && w.current && Object.keys(M).forEach((e => {
                w.current.off(e, M[e])
              }))
            }
          })), X((() => {
            var e;
            !(e = w.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [p]), n.createElement(i, H({
            ref: g,
            className: V(`${c}${r?` ${r}`:""}`)
          }, _), n.createElement(U.Provider, {
            value: w.current
          }, I["container-start"], n.createElement(s, {
            className: j(C.wrapperClass)
          }, I["wrapper-start"], C.virtual ? function(e, t, r) {
            if (!r) return null;
            const i = e => {
                let r = e;
                return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
              },
              s = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                top: `${r.offset}px`
              },
              {
                from: a,
                to: o
              } = r,
              l = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < d; e += 1) e >= a && e <= o && c.push(t[i(e)]);
            return c.map(((t, r) => n.cloneElement(t, {
              swiper: e,
              style: s,
              key: `slide-${r}`
            })))
          }(w.current, k, p) : k.map(((e, t) => n.cloneElement(e, {
            swiper: w.current,
            swiperSlideIndex: t
          }))), I["wrapper-end"]), R(C) && n.createElement(n.Fragment, null, n.createElement("div", {
            ref: S,
            className: "swiper-button-prev"
          }), n.createElement("div", {
            ref: x,
            className: "swiper-button-next"
          })), F(C) && n.createElement("div", {
            ref: E,
            className: "swiper-scrollbar"
          }), B(C) && n.createElement("div", {
            ref: T,
            className: "swiper-pagination"
          }), I["container-end"]))
        }));
      K.displayName = "Swiper";
      const Z = (0, n.forwardRef)((function(e, t) {
        let {
          tag: r = "div",
          children: i,
          className: s = "",
          swiper: a,
          zoom: o,
          lazy: l,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...u
        } = void 0 === e ? {} : e;
        const p = (0, n.useRef)(null),
          [f, h] = (0, n.useState)("swiper-slide"),
          [v, m] = (0, n.useState)(!1);

        function g(e, t, r) {
          t === p.current && h(r)
        }
        X((() => {
          if (void 0 !== c && (p.current.swiperSlideIndex = c), t && (t.current = p.current), p.current && a) {
            if (!a.destroyed) return a.on("_slideClass", g), () => {
              a && a.off("_slideClass", g)
            };
            "swiper-slide" !== f && h("swiper-slide")
          }
        })), X((() => {
          a && p.current && !a.destroyed && h(a.getSlideClasses(p.current))
        }), [a]);
        const w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof i ? i(w) : i;
        return n.createElement(r, H({
          ref: p,
          className: V(`${f}${s?` ${s}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            m(!0)
          }
        }, u), o && n.createElement(q.Provider, {
          value: w
        }, n.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, b(), l && !v && n.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && n.createElement(q.Provider, {
          value: w
        }, b(), l && !v && n.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      Z.displayName = "SwiperSlide"
    }
  }
]);
//# sourceMappingURL=05d6ae26b9f5f51d4dac3f586f1d9f20.js.map