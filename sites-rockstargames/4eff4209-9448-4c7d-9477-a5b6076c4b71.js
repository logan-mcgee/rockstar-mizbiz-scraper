try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4eff4209-9448-4c7d-9477-a5b6076c4b71", e._sentryDebugIdIdentifier = "sentry-dbid-4eff4209-9448-4c7d-9477-a5b6076c4b71")
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
  [1727], {
    444: (e, t, n) => {
      n.d(t, {
        A: () => P
      });
      var r = Math.ceil,
        o = Math.max;
      const i = "object" == typeof global && global && global.Object === Object && global;
      var a = "object" == typeof self && self && self.Object === Object && self;
      const s = (i || a || Function("return this")()).Symbol;
      var c = Object.prototype,
        l = c.hasOwnProperty,
        u = c.toString,
        f = s ? s.toStringTag : void 0;
      var d = Object.prototype.toString;
      var p = s ? s.toStringTag : void 0;
      const v = function(e) {
          return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : p && p in Object(e) ? function(e) {
            var t = l.call(e, f),
              n = e[f];
            try {
              e[f] = void 0;
              var r = !0
            } catch (e) {}
            var o = u.call(e);
            return r && (t ? e[f] = n : delete e[f]), o
          }(e) : function(e) {
            return d.call(e)
          }(e)
        },
        m = function(e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t)
        },
        g = function(e) {
          return null != e && function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
          }(e.length) && ! function(e) {
            if (!m(e)) return !1;
            var t = v(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
          }(e)
        };
      var h = /^(?:0|[1-9]\d*)$/;
      const y = function(e, t, n) {
        if (!m(n)) return !1;
        var r = typeof t;
        return !!("number" == r ? g(n) && function(e, t) {
          var n = typeof e;
          return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && h.test(e)) && e > -1 && e % 1 == 0 && e < t
        }(t, n.length) : "string" == r && t in n) && function(e, t) {
          return e === t || e != e && t != t
        }(n[t], e)
      };
      var b = /\s/;
      var w = /^\s+/;
      const x = function(e) {
        return e ? e.slice(0, function(e) {
          for (var t = e.length; t-- && b.test(e.charAt(t)););
          return t
        }(e) + 1).replace(w, "") : e
      };
      var E = /^[-+]0x[0-9a-f]+$/i,
        O = /^0b[01]+$/i,
        M = /^0o[0-7]+$/i,
        S = parseInt;
      const _ = function(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
              return null != e && "object" == typeof e
            }(e) && "[object Symbol]" == v(e)
          }(e)) return NaN;
        if (m(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = m(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = x(e);
        var n = O.test(e);
        return n || M.test(e) ? S(e.slice(2), n ? 2 : 8) : E.test(e) ? NaN : +e
      };
      var D = 1 / 0;
      const T = function(e) {
          return e ? (e = _(e)) === D || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        },
        P = function(e, t, n) {
          return n && "number" != typeof n && y(e, t, n) && (t = n = void 0), e = T(e), void 0 === t ? (t = e, e = 0) : t = T(t),
            function(e, t, n, i) {
              for (var a = -1, s = o(r((t - e) / (n || 1)), 0), c = Array(s); s--;) c[i ? s : ++a] = e, e += n;
              return c
            }(e, t, n = void 0 === n ? e < t ? 1 : -1 : T(n), void 0)
        }
    },
    12100: (e, t, n) => {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      n.d(t, {
        u: () => ln
      });
      var o, i, a, s, c, l, u, f, d, p, v, m, g, h = function() {
          return o || "undefined" != typeof window && (o = window.gsap) && o.registerPlugin && o
        },
        y = 1,
        b = [],
        w = [],
        x = [],
        E = Date.now,
        O = function(e, t) {
          return t
        },
        M = function(e, t) {
          return ~x.indexOf(e) && x[x.indexOf(e) + 1][t]
        },
        S = function(e) {
          return !!~p.indexOf(e)
        },
        _ = function(e, t, n, r, o) {
          return e.addEventListener(t, n, {
            passive: !1 !== r,
            capture: !!o
          })
        },
        D = function(e, t, n, r) {
          return e.removeEventListener(t, n, !!r)
        },
        T = "scrollLeft",
        P = "scrollTop",
        C = function() {
          return v && v.isPressed || w.cache++
        },
        k = function(e, t) {
          var n = function n(r) {
            if (r || 0 === r) {
              y && (a.history.scrollRestoration = "manual");
              var o = v && v.isPressed;
              r = n.v = Math.round(r) || (v && v.iOS ? 1 : 0), e(r), n.cacheID = w.cache, o && O("ss", r)
            } else(t || w.cache !== n.cacheID || O("ref")) && (n.cacheID = w.cache, n.v = e());
            return n.v + n.offset
          };
          return n.offset = 0, e && n
        },
        N = {
          s: T,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: k(function(e) {
            return arguments.length ? a.scrollTo(e, A.sc()) : a.pageXOffset || s[T] || c[T] || l[T] || 0
          })
        },
        A = {
          s: P,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: N,
          sc: k(function(e) {
            return arguments.length ? a.scrollTo(N.sc(), e) : a.pageYOffset || s[P] || c[P] || l[P] || 0
          })
        },
        R = function(e, t) {
          return (t && t._ctx && t._ctx.selector || o.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== o.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
        },
        I = function(e, t) {
          var n = t.s,
            r = t.sc;
          S(e) && (e = s.scrollingElement || c);
          var i = w.indexOf(e),
            a = r === A.sc ? 1 : 2;
          !~i && (i = w.push(e) - 1), w[i + a] || _(e, "scroll", C);
          var l = w[i + a],
            u = l || (w[i + a] = k(M(e, n), !0) || (S(e) ? r : k(function(t) {
              return arguments.length ? e[n] = t : e[n]
            })));
          return u.target = e, l || (u.smooth = "smooth" === o.getProperty(e, "scrollBehavior")), u
        },
        j = function(e, t, n) {
          var r = e,
            o = e,
            i = E(),
            a = i,
            s = t || 50,
            c = Math.max(500, 3 * s),
            l = function(e, t) {
              var c = E();
              t || c - i > s ? (o = r, r = e, a = i, i = c) : n ? r += e : r = o + (e - o) / (c - a) * (i - a)
            };
          return {
            update: l,
            reset: function() {
              o = r = n ? 0 : r, a = i = 0
            },
            getVelocity: function(e) {
              var t = a,
                s = o,
                u = E();
              return (e || 0 === e) && e !== r && l(e), i === a || u - a > c ? 0 : (r + (n ? s : -s)) / ((n ? u : i) - t) * 1e3
            }
          }
        },
        F = function(e, t) {
          return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
        },
        L = function(e) {
          var t = Math.max.apply(Math, e),
            n = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(n) ? t : n
        },
        W = function() {
          var e, t, n, r;
          (d = o.core.globals().ScrollTrigger) && d.core && (e = d.core, t = e.bridge || {}, n = e._scrollers, r = e._proxies, n.push.apply(n, w), r.push.apply(r, x), w = n, x = r, O = function(e, n) {
            return t[e](n)
          })
        },
        B = function(e) {
          return o = e || h(), !i && o && "undefined" != typeof document && document.body && (a = window, s = document, c = s.documentElement, l = s.body, p = [a, s, c, l], o.utils.clamp, g = o.core.context || function() {}, f = "onpointerenter" in l ? "pointer" : "mouse", u = X.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, m = X.eventTypes = ("ontouchstart" in c ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in c ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return y = 0
          }, 500), W(), i = 1), i
        };
      N.op = A, w.cache = 0;
      var X = function() {
        function e(e) {
          this.init(e)
        }
        var t, n;
        return e.prototype.init = function(e) {
          i || B(o) || console.warn("Please gsap.registerPlugin(Observer)"), d || W();
          var t = e.tolerance,
            n = e.dragMinimum,
            r = e.type,
            p = e.target,
            h = e.lineHeight,
            y = e.debounce,
            w = e.preventDefault,
            x = e.onStop,
            O = e.onStopDelay,
            M = e.ignore,
            T = e.wheelSpeed,
            P = e.event,
            k = e.onDragStart,
            X = e.onDragEnd,
            Y = e.onDrag,
            z = e.onPress,
            U = e.onRelease,
            V = e.onRight,
            H = e.onLeft,
            q = e.onUp,
            $ = e.onDown,
            K = e.onChangeX,
            G = e.onChangeY,
            Z = e.onChange,
            J = e.onToggleX,
            Q = e.onToggleY,
            ee = e.onHover,
            te = e.onHoverEnd,
            ne = e.onMove,
            re = e.ignoreCheck,
            oe = e.isNormalizer,
            ie = e.onGestureStart,
            ae = e.onGestureEnd,
            se = e.onWheel,
            ce = e.onEnable,
            le = e.onDisable,
            ue = e.onClick,
            fe = e.scrollSpeed,
            de = e.capture,
            pe = e.allowClicks,
            ve = e.lockAxis,
            me = e.onLockAxis;
          this.target = p = R(p) || c, this.vars = e, M && (M = o.utils.toArray(M)), t = t || 1e-9, n = n || 0, T = T || 1, fe = fe || 1, r = r || "wheel,touch,pointer", y = !1 !== y, h || (h = parseFloat(a.getComputedStyle(l).lineHeight) || 22);
          var ge, he, ye, be, we, xe, Ee, Oe = this,
            Me = 0,
            Se = 0,
            _e = e.passive || !w,
            De = I(p, N),
            Te = I(p, A),
            Pe = De(),
            Ce = Te(),
            ke = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === m[0],
            Ne = S(p),
            Ae = p.ownerDocument || s,
            Re = [0, 0, 0],
            Ie = [0, 0, 0],
            je = 0,
            Fe = function() {
              return je = E()
            },
            Le = function(e, t) {
              return (Oe.event = e) && M && ~M.indexOf(e.target) || t && ke && "touch" !== e.pointerType || re && re(e, t)
            },
            We = function() {
              var e = Oe.deltaX = L(Re),
                n = Oe.deltaY = L(Ie),
                r = Math.abs(e) >= t,
                o = Math.abs(n) >= t;
              Z && (r || o) && Z(Oe, e, n, Re, Ie), r && (V && Oe.deltaX > 0 && V(Oe), H && Oe.deltaX < 0 && H(Oe), K && K(Oe), J && Oe.deltaX < 0 != Me < 0 && J(Oe), Me = Oe.deltaX, Re[0] = Re[1] = Re[2] = 0), o && ($ && Oe.deltaY > 0 && $(Oe), q && Oe.deltaY < 0 && q(Oe), G && G(Oe), Q && Oe.deltaY < 0 != Se < 0 && Q(Oe), Se = Oe.deltaY, Ie[0] = Ie[1] = Ie[2] = 0), (be || ye) && (ne && ne(Oe), ye && (Y(Oe), ye = !1), be = !1), xe && !(xe = !1) && me && me(Oe), we && (se(Oe), we = !1), ge = 0
            },
            Be = function(e, t, n) {
              Re[n] += e, Ie[n] += t, Oe._vx.update(e), Oe._vy.update(t), y ? ge || (ge = requestAnimationFrame(We)) : We()
            },
            Xe = function(e, t) {
              ve && !Ee && (Oe.axis = Ee = Math.abs(e) > Math.abs(t) ? "x" : "y", xe = !0), "y" !== Ee && (Re[2] += e, Oe._vx.update(e, !0)), "x" !== Ee && (Ie[2] += t, Oe._vy.update(t, !0)), y ? ge || (ge = requestAnimationFrame(We)) : We()
            },
            Ye = function(e) {
              if (!Le(e, 1)) {
                var t = (e = F(e, w)).clientX,
                  r = e.clientY,
                  o = t - Oe.x,
                  i = r - Oe.y,
                  a = Oe.isDragging;
                Oe.x = t, Oe.y = r, (a || Math.abs(Oe.startX - t) >= n || Math.abs(Oe.startY - r) >= n) && (Y && (ye = !0), a || (Oe.isDragging = !0), Xe(o, i), a || k && k(Oe))
              }
            },
            ze = Oe.onPress = function(e) {
              Le(e, 1) || e && e.button || (Oe.axis = Ee = null, he.pause(), Oe.isPressed = !0, e = F(e), Me = Se = 0, Oe.startX = Oe.x = e.clientX, Oe.startY = Oe.y = e.clientY, Oe._vx.reset(), Oe._vy.reset(), _(oe ? p : Ae, m[1], Ye, _e, !0), Oe.deltaX = Oe.deltaY = 0, z && z(Oe))
            },
            Ue = Oe.onRelease = function(e) {
              if (!Le(e, 1)) {
                D(oe ? p : Ae, m[1], Ye, !0);
                var t = !isNaN(Oe.y - Oe.startY),
                  n = Oe.isDragging,
                  r = n && (Math.abs(Oe.x - Oe.startX) > 3 || Math.abs(Oe.y - Oe.startY) > 3),
                  i = F(e);
                !r && t && (Oe._vx.reset(), Oe._vy.reset(), w && pe && o.delayedCall(.08, function() {
                  if (E() - je > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (Ae.createEvent) {
                    var t = Ae.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, a, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                  }
                })), Oe.isDragging = Oe.isGesturing = Oe.isPressed = !1, x && n && !oe && he.restart(!0), X && n && X(Oe), U && U(Oe, r)
              }
            },
            Ve = function(e) {
              return e.touches && e.touches.length > 1 && (Oe.isGesturing = !0) && ie(e, Oe.isDragging)
            },
            He = function() {
              return (Oe.isGesturing = !1) || ae(Oe)
            },
            qe = function(e) {
              if (!Le(e)) {
                var t = De(),
                  n = Te();
                Be((t - Pe) * fe, (n - Ce) * fe, 1), Pe = t, Ce = n, x && he.restart(!0)
              }
            },
            $e = function(e) {
              if (!Le(e)) {
                e = F(e, w), se && (we = !0);
                var t = (1 === e.deltaMode ? h : 2 === e.deltaMode ? a.innerHeight : 1) * T;
                Be(e.deltaX * t, e.deltaY * t, 0), x && !oe && he.restart(!0)
              }
            },
            Ke = function(e) {
              if (!Le(e)) {
                var t = e.clientX,
                  n = e.clientY,
                  r = t - Oe.x,
                  o = n - Oe.y;
                Oe.x = t, Oe.y = n, be = !0, x && he.restart(!0), (r || o) && Xe(r, o)
              }
            },
            Ge = function(e) {
              Oe.event = e, ee(Oe)
            },
            Ze = function(e) {
              Oe.event = e, te(Oe)
            },
            Je = function(e) {
              return Le(e) || F(e, w) && ue(Oe)
            };
          he = Oe._dc = o.delayedCall(O || .25, function() {
            Oe._vx.reset(), Oe._vy.reset(), he.pause(), x && x(Oe)
          }).pause(), Oe.deltaX = Oe.deltaY = 0, Oe._vx = j(0, 50, !0), Oe._vy = j(0, 50, !0), Oe.scrollX = De, Oe.scrollY = Te, Oe.isDragging = Oe.isGesturing = Oe.isPressed = !1, g(this), Oe.enable = function(e) {
            return Oe.isEnabled || (_(Ne ? Ae : p, "scroll", C), r.indexOf("scroll") >= 0 && _(Ne ? Ae : p, "scroll", qe, _e, de), r.indexOf("wheel") >= 0 && _(p, "wheel", $e, _e, de), (r.indexOf("touch") >= 0 && u || r.indexOf("pointer") >= 0) && (_(p, m[0], ze, _e, de), _(Ae, m[2], Ue), _(Ae, m[3], Ue), pe && _(p, "click", Fe, !0, !0), ue && _(p, "click", Je), ie && _(Ae, "gesturestart", Ve), ae && _(Ae, "gestureend", He), ee && _(p, f + "enter", Ge), te && _(p, f + "leave", Ze), ne && _(p, f + "move", Ke)), Oe.isEnabled = !0, e && e.type && ze(e), ce && ce(Oe)), Oe
          }, Oe.disable = function() {
            Oe.isEnabled && (b.filter(function(e) {
              return e !== Oe && S(e.target)
            }).length || D(Ne ? Ae : p, "scroll", C), Oe.isPressed && (Oe._vx.reset(), Oe._vy.reset(), D(oe ? p : Ae, m[1], Ye, !0)), D(Ne ? Ae : p, "scroll", qe, de), D(p, "wheel", $e, de), D(p, m[0], ze, de), D(Ae, m[2], Ue), D(Ae, m[3], Ue), D(p, "click", Fe, !0), D(p, "click", Je), D(Ae, "gesturestart", Ve), D(Ae, "gestureend", He), D(p, f + "enter", Ge), D(p, f + "leave", Ze), D(p, f + "move", Ke), Oe.isEnabled = Oe.isPressed = Oe.isDragging = !1, le && le(Oe))
          }, Oe.kill = Oe.revert = function() {
            Oe.disable();
            var e = b.indexOf(Oe);
            e >= 0 && b.splice(e, 1), v === Oe && (v = 0)
          }, b.push(Oe), oe && S(p) && (v = Oe), Oe.enable(P)
        }, t = e, (n = [{
          key: "velocityX",
          get: function() {
            return this._vx.getVelocity()
          }
        }, {
          key: "velocityY",
          get: function() {
            return this._vy.getVelocity()
          }
        }]) && r(t.prototype, n), e
      }();
      X.version = "3.12.5", X.create = function(e) {
        return new X(e)
      }, X.register = B, X.getAll = function() {
        return b.slice()
      }, X.getById = function(e) {
        return b.filter(function(t) {
          return t.vars.id === e
        })[0]
      }, h() && o.registerPlugin(X);
      var Y, z, U, V, H, q, $, K, G, Z, J, Q, ee, te, ne, re, oe, ie, ae, se, ce, le, ue, fe, de, pe, ve, me, ge, he, ye, be, we, xe, Ee, Oe, Me, Se, _e = 1,
        De = Date.now,
        Te = De(),
        Pe = 0,
        Ce = 0,
        ke = function(e, t, n) {
          var r = Ve(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return n["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
        },
        Ne = function(e, t) {
          return !t || Ve(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
        },
        Ae = function e() {
          return Ce && requestAnimationFrame(e)
        },
        Re = function() {
          return te = 1
        },
        Ie = function() {
          return te = 0
        },
        je = function(e) {
          return e
        },
        Fe = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        Le = function() {
          return "undefined" != typeof window
        },
        We = function() {
          return Y || Le() && (Y = window.gsap) && Y.registerPlugin && Y
        },
        Be = function(e) {
          return !!~$.indexOf(e)
        },
        Xe = function(e) {
          return ("Height" === e ? ye : U["inner" + e]) || H["client" + e] || q["client" + e]
        },
        Ye = function(e) {
          return M(e, "getBoundingClientRect") || (Be(e) ? function() {
            return tn.width = U.innerWidth, tn.height = ye, tn
          } : function() {
            return vt(e)
          })
        },
        ze = function(e, t) {
          var n = t.s,
            r = t.d2,
            o = t.d,
            i = t.a;
          return Math.max(0, (n = "scroll" + r) && (i = M(e, n)) ? i() - Ye(e)()[o] : Be(e) ? (H[n] || q[n]) - Xe(r) : e[n] - e["offset" + r])
        },
        Ue = function(e, t) {
          for (var n = 0; n < ae.length; n += 3)(!t || ~t.indexOf(ae[n + 1])) && e(ae[n], ae[n + 1], ae[n + 2])
        },
        Ve = function(e) {
          return "string" == typeof e
        },
        He = function(e) {
          return "function" == typeof e
        },
        qe = function(e) {
          return "number" == typeof e
        },
        $e = function(e) {
          return "object" == typeof e
        },
        Ke = function(e, t, n) {
          return e && e.progress(t ? 0 : 1) && n && e.pause()
        },
        Ge = function(e, t) {
          if (e.enabled) {
            var n = e._ctx ? e._ctx.add(function() {
              return t(e)
            }) : t(e);
            n && n.totalTime && (e.callbackAnimation = n)
          }
        },
        Ze = Math.abs,
        Je = "left",
        Qe = "right",
        et = "bottom",
        tt = "width",
        nt = "height",
        rt = "Right",
        ot = "Left",
        it = "Top",
        at = "Bottom",
        st = "padding",
        ct = "margin",
        lt = "Width",
        ut = "Height",
        ft = "px",
        dt = function(e) {
          return U.getComputedStyle(e)
        },
        pt = function(e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e
        },
        vt = function(e, t) {
          var n = t && "matrix(1, 0, 0, 1, 0, 0)" !== dt(e)[ne] && Y.to(e, {
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
            r = e.getBoundingClientRect();
          return n && n.progress(0).kill(), r
        },
        mt = function(e, t) {
          var n = t.d2;
          return e["offset" + n] || e["client" + n] || 0
        },
        gt = function(e) {
          var t, n = [],
            r = e.labels,
            o = e.duration();
          for (t in r) n.push(r[t] / o);
          return n
        },
        ht = function(e) {
          var t = Y.utils.snap(e),
            n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
              return e - t
            });
          return n ? function(e, r, o) {
            var i;
            if (void 0 === o && (o = .001), !r) return t(e);
            if (r > 0) {
              for (e -= o, i = 0; i < n.length; i++)
                if (n[i] >= e) return n[i];
              return n[i - 1]
            }
            for (i = n.length, e += o; i--;)
              if (n[i] <= e) return n[i];
            return n[0]
          } : function(n, r, o) {
            void 0 === o && (o = .001);
            var i = t(n);
            return !r || Math.abs(i - n) < o || i - n < 0 == r < 0 ? i : t(r < 0 ? n - e : n + e)
          }
        },
        yt = function(e, t, n, r) {
          return n.split(",").forEach(function(n) {
            return e(t, n, r)
          })
        },
        bt = function(e, t, n, r, o) {
          return e.addEventListener(t, n, {
            passive: !r,
            capture: !!o
          })
        },
        wt = function(e, t, n, r) {
          return e.removeEventListener(t, n, !!r)
        },
        xt = function(e, t, n) {
          (n = n && n.wheelHandler) && (e(t, "wheel", n), e(t, "touchmove", n))
        },
        Et = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        Ot = {
          toggleActions: "play",
          anticipatePin: 0
        },
        Mt = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        St = function(e, t) {
          if (Ve(e)) {
            var n = e.indexOf("="),
              r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n && (e.indexOf("%") > n && (r *= t / 100), e = e.substr(0, n - 1)), e = r + (e in Mt ? Mt[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        _t = function(e, t, n, r, o, i, a, s) {
          var c = o.startColor,
            l = o.endColor,
            u = o.fontSize,
            f = o.indent,
            d = o.fontWeight,
            p = V.createElement("div"),
            v = Be(n) || "fixed" === M(n, "pinType"),
            m = -1 !== e.indexOf("scroller"),
            g = v ? q : n,
            h = -1 !== e.indexOf("start"),
            y = h ? c : l,
            b = "border-color:" + y + ";font-size:" + u + ";color:" + y + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((m || s) && v ? "fixed;" : "absolute;"), (m || s || !v) && (b += (r === A ? Qe : et) + ":" + (i + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = h, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], Dt(p, 0, r, h), p
        },
        Dt = function(e, t, n, r) {
          var o = {
              display: "block"
            },
            i = n[r ? "os2" : "p2"],
            a = n[r ? "p2" : "os2"];
          e._isFlipped = r, o[n.a + "Percent"] = r ? -100 : 0, o[n.a] = r ? "1px" : 0, o["border" + i + lt] = 1, o["border" + a + lt] = 0, o[n.p] = t + "px", Y.set(e, o)
        },
        Tt = [],
        Pt = {},
        Ct = function() {
          return De() - Pe > 34 && (Ee || (Ee = requestAnimationFrame($t)))
        },
        kt = function() {
          (!ue || !ue.isPressed || ue.startX > q.clientWidth) && (w.cache++, ue ? Ee || (Ee = requestAnimationFrame($t)) : $t(), Pe || Ft("scrollStart"), Pe = De())
        },
        Nt = function() {
          pe = U.innerWidth, de = U.innerHeight
        },
        At = function() {
          w.cache++, !ee && !le && !V.fullscreenElement && !V.webkitFullscreenElement && (!fe || pe !== U.innerWidth || Math.abs(U.innerHeight - de) > .25 * U.innerHeight) && K.restart(!0)
        },
        Rt = {},
        It = [],
        jt = function e() {
          return wt(ln, "scrollEnd", e) || Vt(!0)
        },
        Ft = function(e) {
          return Rt[e] && Rt[e].map(function(e) {
            return e()
          }) || It
        },
        Lt = [],
        Wt = function(e) {
          for (var t = 0; t < Lt.length; t += 5)(!e || Lt[t + 4] && Lt[t + 4].query === e) && (Lt[t].style.cssText = Lt[t + 1], Lt[t].getBBox && Lt[t].setAttribute("transform", Lt[t + 2] || ""), Lt[t + 3].uncache = 1)
        },
        Bt = function(e, t) {
          var n;
          for (re = 0; re < Tt.length; re++) !(n = Tt[re]) || t && n._ctx !== t || (e ? n.kill(1) : n.revert(!0, !0));
          be = !0, t && Wt(t), t || Ft("revert")
        },
        Xt = function(e, t) {
          w.cache++, (t || !Oe) && w.forEach(function(e) {
            return He(e) && e.cacheID++ && (e.rec = 0)
          }), Ve(e) && (U.history.scrollRestoration = ge = e)
        },
        Yt = 0,
        zt = function() {
          q.appendChild(he), ye = !ue && he.offsetHeight || U.innerHeight, q.removeChild(he)
        },
        Ut = function(e) {
          return G(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
          })
        },
        Vt = function(e, t) {
          if (!Pe || e || be) {
            zt(), Oe = ln.isRefreshing = !0, w.forEach(function(e) {
              return He(e) && ++e.cacheID && (e.rec = e())
            });
            var n = Ft("refreshInit");
            se && ln.sort(), t || Bt(), w.forEach(function(e) {
              He(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
            }), Tt.slice(0).forEach(function(e) {
              return e.refresh()
            }), be = !1, Tt.forEach(function(e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  n = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh()
              }
            }), we = 1, Ut(!0), Tt.forEach(function(e) {
              var t = ze(e.scroller, e._dir),
                n = "max" === e.vars.end || e._endClamp && e.end > t,
                r = e._startClamp && e.start >= t;
              (n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0)
            }), Ut(!1), we = 0, n.forEach(function(e) {
              return e && e.render && e.render(-1)
            }), w.forEach(function(e) {
              He(e) && (e.smooth && requestAnimationFrame(function() {
                return e.target.style.scrollBehavior = "smooth"
              }), e.rec && e(e.rec))
            }), Xt(ge, 1), K.pause(), Yt++, Oe = 2, $t(2), Tt.forEach(function(e) {
              return He(e.vars.onRefresh) && e.vars.onRefresh(e)
            }), Oe = ln.isRefreshing = !1, Ft("refresh")
          } else bt(ln, "scrollEnd", jt)
        },
        Ht = 0,
        qt = 1,
        $t = function(e) {
          if (2 === e || !Oe && !be) {
            ln.isUpdating = !0, Se && Se.update(0);
            var t = Tt.length,
              n = De(),
              r = n - Te >= 50,
              o = t && Tt[0].scroll();
            if (qt = Ht > o ? -1 : 1, Oe || (Ht = o), r && (Pe && !te && n - Pe > 200 && (Pe = 0, Ft("scrollEnd")), J = Te, Te = n), qt < 0) {
              for (re = t; re-- > 0;) Tt[re] && Tt[re].update(0, r);
              qt = 1
            } else
              for (re = 0; re < t; re++) Tt[re] && Tt[re].update(0, r);
            ln.isUpdating = !1
          }
          Ee = 0
        },
        Kt = [Je, "top", et, Qe, ct + at, ct + rt, ct + it, ct + ot, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Gt = Kt.concat([tt, nt, "boxSizing", "max" + lt, "max" + ut, "position", ct, st, st + it, st + rt, st + at, st + ot]),
        Zt = function(e, t, n, r) {
          if (!e._gsap.swappedIn) {
            for (var o, i = Kt.length, a = t.style, s = e.style; i--;) a[o = Kt[i]] = n[o];
            a.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (a.display = "inline-block"), s[et] = s[Qe] = "auto", a.flexBasis = n.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[tt] = mt(e, N) + ft, a[nt] = mt(e, A) + ft, a[st] = s[ct] = s.top = s[Je] = "0", Qt(r), s[tt] = s["max" + lt] = n[tt], s[nt] = s["max" + ut] = n[nt], s[st] = n[st], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Jt = /([A-Z])/g,
        Qt = function(e) {
          if (e) {
            var t, n, r = e.t.style,
              o = e.length,
              i = 0;
            for ((e.t._gsap || Y.core.getCache(e.t)).uncache = 1; i < o; i += 2) n = e[i + 1], t = e[i], n ? r[t] = n : r[t] && r.removeProperty(t.replace(Jt, "-$1").toLowerCase())
          }
        },
        en = function(e) {
          for (var t = Gt.length, n = e.style, r = [], o = 0; o < t; o++) r.push(Gt[o], n[Gt[o]]);
          return r.t = e, r
        },
        tn = {
          left: 0,
          top: 0
        },
        nn = function(e, t, n, r, o, i, a, s, c, l, u, f, d, p) {
          He(e) && (e = e(s)), Ve(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? St("0" + e.substr(3), n) : 0));
          var v, m, g, h = d ? d.time() : 0;
          if (d && d.seek(0), isNaN(e) || (e = +e), qe(e)) d && (e = Y.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && Dt(a, n, r, !0);
          else {
            He(t) && (t = t(s));
            var y, b, w, x, E = (e || "0").split(" ");
            g = R(t, s) || q, (y = vt(g) || {}) && (y.left || y.top) || "none" !== dt(g).display || (x = g.style.display, g.style.display = "block", y = vt(g), x ? g.style.display = x : g.style.removeProperty("display")), b = St(E[0], y[r.d]), w = St(E[1] || "0", n), e = y[r.p] - c[r.p] - l + b + o - w, a && Dt(a, w, r, n - w < 20 || a._isStart && w > 20), n -= n - w
          }
          if (p && (s[p] = e || -.001, e < 0 && (e = 0)), i) {
            var O = e + n,
              M = i._isStart;
            v = "scroll" + r.d2, Dt(i, O, r, M && O > 20 || !M && (u ? Math.max(q[v], H[v]) : i.parentNode[v]) <= O + 1), u && (c = vt(a), u && (i.style[r.op.p] = c[r.op.p] - r.op.m - i._offset + ft))
          }
          return d && g && (v = vt(g), d.seek(f), m = vt(g), d._caScrollDist = v[r.p] - m[r.p], e = e / d._caScrollDist * f), d && d.seek(h), d ? e : Math.round(e)
        },
        rn = /(webkit|moz|length|cssText|inset)/i,
        on = function(e, t, n, r) {
          if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === q) {
              for (o in e._stOrig = a.cssText, i = dt(e)) + o || rn.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
              a.top = n, a.left = r
            } else a.cssText = e._stOrig;
            Y.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        an = function(e, t, n) {
          var r = t,
            o = r;
          return function(t) {
            var i = Math.round(e());
            return i !== r && i !== o && Math.abs(i - r) > 3 && Math.abs(i - o) > 3 && (t = i, n && n()), o = r, r = t, t
          }
        },
        sn = function(e, t, n) {
          var r = {};
          r[t.p] = "+=" + n, Y.set(e, r)
        },
        cn = function(e, t) {
          var n = I(e, t),
            r = "_scroll" + t.p2,
            o = function t(o, i, a, s, c) {
              var l = t.tween,
                u = i.onComplete,
                f = {};
              a = a || n();
              var d = an(n, a, function() {
                l.kill(), t.tween = 0
              });
              return c = s && c || 0, s = s || o - a, l && l.kill(), i[r] = o, i.inherit = !1, i.modifiers = f, f[r] = function() {
                return d(a + s * l.ratio + c * l.ratio * l.ratio)
              }, i.onUpdate = function() {
                w.cache++, t.tween && $t()
              }, i.onComplete = function() {
                t.tween = 0, u && u.call(l)
              }, l = t.tween = Y.to(e, i)
            };
          return e[r] = n, n.wheelHandler = function() {
            return o.tween && o.tween.kill() && (o.tween = 0)
          }, bt(e, "wheel", n.wheelHandler), ln.isTouch && bt(e, "touchmove", n.wheelHandler), o
        },
        ln = function() {
          function e(t, n) {
            z || e.register(Y) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), me(this), this.init(t, n)
          }
          return e.prototype.init = function(t, n) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Ce) {
              var r, o, i, a, s, c, l, u, f, d, p, v, m, g, h, y, b, E, O, S, _, D, T, P, C, k, j, F, L, W, B, X, z, $, K, Q, ne, oe, ie, ae, le, ue, fe = t = pt(Ve(t) || qe(t) || t.nodeType ? {
                  trigger: t
                } : t, Ot),
                de = fe.onUpdate,
                pe = fe.toggleClass,
                ve = fe.id,
                me = fe.onToggle,
                ge = fe.onRefresh,
                he = fe.scrub,
                ye = fe.trigger,
                be = fe.pin,
                Ee = fe.pinSpacing,
                Te = fe.invalidateOnRefresh,
                Ae = fe.anticipatePin,
                Re = fe.onScrubComplete,
                Ie = fe.onSnapComplete,
                Le = fe.once,
                We = fe.snap,
                Ue = fe.pinReparent,
                Je = fe.pinSpacer,
                Qe = fe.containerAnimation,
                et = fe.fastScrollEnd,
                yt = fe.preventOverlaps,
                xt = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? N : A,
                Mt = !he && 0 !== he,
                Dt = R(t.scroller || U),
                Ct = Y.core.getCache(Dt),
                Nt = Be(Dt),
                Rt = "fixed" === ("pinType" in t ? t.pinType : M(Dt, "pinType") || Nt && "fixed"),
                It = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                Ft = Mt && t.toggleActions.split(" "),
                Lt = "markers" in t ? t.markers : Ot.markers,
                Wt = Nt ? 0 : parseFloat(dt(Dt)["border" + xt.p2 + lt]) || 0,
                Bt = this,
                Xt = t.onRefreshInit && function() {
                  return t.onRefreshInit(Bt)
                },
                zt = function(e, t, n) {
                  var r = n.d,
                    o = n.d2,
                    i = n.a;
                  return (i = M(e, "getBoundingClientRect")) ? function() {
                    return i()[r]
                  } : function() {
                    return (t ? Xe(o) : e["client" + o]) || 0
                  }
                }(Dt, Nt, xt),
                Ut = function(e, t) {
                  return !t || ~x.indexOf(e) ? Ye(e) : function() {
                    return tn
                  }
                }(Dt, Nt),
                Ht = 0,
                $t = 0,
                Kt = 0,
                Gt = I(Dt, xt);
              if (Bt._startClamp = Bt._endClamp = !1, Bt._dir = xt, Ae *= 45, Bt.scroller = Dt, Bt.scroll = Qe ? Qe.time.bind(Qe) : Gt, a = Gt(), Bt.vars = t, n = n || t.animation, "refreshPriority" in t && (se = 1, -9999 === t.refreshPriority && (Se = Bt)), Ct.tweenScroll = Ct.tweenScroll || {
                  top: cn(Dt, A),
                  left: cn(Dt, N)
                }, Bt.tweenTo = r = Ct.tweenScroll[xt.p], Bt.scrubDuration = function(e) {
                  (z = qe(e) && e) ? X ? X.duration(e) : X = Y.to(n, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: z,
                    paused: !0,
                    onComplete: function() {
                      return Re && Re(Bt)
                    }
                  }): (X && X.progress(1).kill(), X = 0)
                }, n && (n.vars.lazy = !1, n._initted && !Bt.isReverted || !1 !== n.vars.immediateRender && !1 !== t.immediateRender && n.duration() && n.render(0, !0, !0), Bt.animation = n.pause(), n.scrollTrigger = Bt, Bt.scrubDuration(he), W = 0, ve || (ve = n.vars.id)), We && ($e(We) && !We.push || (We = {
                  snapTo: We
                }), "scrollBehavior" in q.style && Y.set(Nt ? [q, H] : Dt, {
                  scrollBehavior: "auto"
                }), w.forEach(function(e) {
                  return He(e) && e.target === (Nt ? V.scrollingElement || H : Dt) && (e.smooth = !1)
                }), i = He(We.snapTo) ? We.snapTo : "labels" === We.snapTo ? function(e) {
                  return function(t) {
                    return Y.utils.snap(gt(e), t)
                  }
                }(n) : "labelsDirectional" === We.snapTo ? (ae = n, function(e, t) {
                  return ht(gt(ae))(e, t.direction)
                }) : !1 !== We.directional ? function(e, t) {
                  return ht(We.snapTo)(e, De() - $t < 500 ? 0 : t.direction)
                } : Y.utils.snap(We.snapTo), $ = We.duration || {
                  min: .1,
                  max: 2
                }, $ = $e($) ? Z($.min, $.max) : Z($, $), K = Y.delayedCall(We.delay || z / 2 || .1, function() {
                  var e = Gt(),
                    t = De() - $t < 500,
                    o = r.tween;
                  if (!(t || Math.abs(Bt.getVelocity()) < 10) || o || te || Ht === e) Bt.isActive && Ht !== e && K.restart(!0);
                  else {
                    var a, s, u = (e - c) / g,
                      f = n && !Mt ? n.totalProgress() : u,
                      d = t ? 0 : (f - B) / (De() - J) * 1e3 || 0,
                      p = Y.utils.clamp(-u, 1 - u, Ze(d / 2) * d / .185),
                      v = u + (!1 === We.inertia ? 0 : p),
                      m = We,
                      h = m.onStart,
                      y = m.onInterrupt,
                      b = m.onComplete;
                    if (a = i(v, Bt), qe(a) || (a = v), s = Math.round(c + a * g), e <= l && e >= c && s !== e) {
                      if (o && !o._initted && o.data <= Ze(s - e)) return;
                      !1 === We.inertia && (p = a - u), r(s, {
                        duration: $(Ze(.185 * Math.max(Ze(v - f), Ze(a - f)) / d / .05 || 0)),
                        ease: We.ease || "power3",
                        data: Ze(s - e),
                        onInterrupt: function() {
                          return K.restart(!0) && y && y(Bt)
                        },
                        onComplete: function() {
                          Bt.update(), Ht = Gt(), n && (X ? X.resetTo("totalProgress", a, n._tTime / n._tDur) : n.progress(a)), W = B = n && !Mt ? n.totalProgress() : Bt.progress, Ie && Ie(Bt), b && b(Bt)
                        }
                      }, e, p * g, s - e - p * g), h && h(Bt, r.tween)
                    }
                  }
                }).pause()), ve && (Pt[ve] = Bt), (ie = (ye = Bt.trigger = R(ye || !0 !== be && be)) && ye._gsap && ye._gsap.stRevert) && (ie = ie(Bt)), be = !0 === be ? ye : R(be), Ve(pe) && (pe = {
                  targets: ye,
                  className: pe
                }), be && (!1 === Ee || Ee === ct || (Ee = !(!Ee && be.parentNode && be.parentNode.style && "flex" === dt(be.parentNode).display) && st), Bt.pin = be, (o = Y.core.getCache(be)).spacer ? h = o.pinState : (Je && ((Je = R(Je)) && !Je.nodeType && (Je = Je.current || Je.nativeElement), o.spacerIsNative = !!Je, Je && (o.spacerState = en(Je))), o.spacer = E = Je || V.createElement("div"), E.classList.add("pin-spacer"), ve && E.classList.add("pin-spacer-" + ve), o.pinState = h = en(be)), !1 !== t.force3D && Y.set(be, {
                  force3D: !0
                }), Bt.spacer = E = o.spacer, L = dt(be), P = L[Ee + xt.os2], S = Y.getProperty(be), _ = Y.quickSetter(be, xt.a, ft), Zt(be, E, L), b = en(be)), Lt) {
                v = $e(Lt) ? pt(Lt, Et) : Et, d = _t("scroller-start", ve, Dt, xt, v, 0), p = _t("scroller-end", ve, Dt, xt, v, 0, d), O = d["offset" + xt.op.d2];
                var Jt = R(M(Dt, "content") || Dt);
                u = this.markerStart = _t("start", ve, Jt, xt, v, O, 0, Qe), f = this.markerEnd = _t("end", ve, Jt, xt, v, O, 0, Qe), Qe && (oe = Y.quickSetter([u, f], xt.a, ft)), Rt || x.length && !0 === M(Dt, "fixedMarkers") || (ue = dt(le = Nt ? q : Dt).position, le.style.position = "absolute" === ue || "fixed" === ue ? ue : "relative", Y.set([d, p], {
                  force3D: !0
                }), k = Y.quickSetter(d, xt.a, ft), F = Y.quickSetter(p, xt.a, ft))
              }
              if (Qe) {
                var rn = Qe.vars.onUpdate,
                  an = Qe.vars.onUpdateParams;
                Qe.eventCallback("onUpdate", function() {
                  Bt.update(0, 0, 1), rn && rn.apply(Qe, an || [])
                })
              }
              if (Bt.previous = function() {
                  return Tt[Tt.indexOf(Bt) - 1]
                }, Bt.next = function() {
                  return Tt[Tt.indexOf(Bt) + 1]
                }, Bt.revert = function(e, t) {
                  if (!t) return Bt.kill(!0);
                  var r = !1 !== e || !Bt.enabled,
                    o = ee;
                  r !== Bt.isReverted && (r && (Q = Math.max(Gt(), Bt.scroll.rec || 0), Kt = Bt.progress, ne = n && n.progress()), u && [u, f, d, p].forEach(function(e) {
                    return e.style.display = r ? "none" : "block"
                  }), r && (ee = Bt, Bt.update(r)), !be || Ue && Bt.isActive || (r ? function(e, t, n) {
                    Qt(n);
                    var r = e._gsap;
                    if (r.spacerIsNative) Qt(r.spacerState);
                    else if (e._gsap.swappedIn) {
                      var o = t.parentNode;
                      o && (o.insertBefore(e, t), o.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                  }(be, E, h) : Zt(be, E, dt(be), C)), r || Bt.update(r), ee = o, Bt.isReverted = r)
                }, Bt.refresh = function(o, i, v, w) {
                  if (!ee && Bt.enabled || i)
                    if (be && o && Pe) bt(e, "scrollEnd", jt);
                    else {
                      !Oe && Xt && Xt(Bt), ee = Bt, r.tween && !v && (r.tween.kill(), r.tween = 0), X && X.pause(), Te && n && n.revert({
                        kill: !1
                      }).invalidate(), Bt.isReverted || Bt.revert(!0, !0), Bt._subPinOffset = !1;
                      var x, O, M, _, P, k, F, L, W, B, z, U, $, G = zt(),
                        Z = Ut(),
                        J = Qe ? Qe.duration() : ze(Dt, xt),
                        te = g <= .01,
                        re = 0,
                        oe = w || 0,
                        ie = $e(v) ? v.end : t.end,
                        ae = t.endTrigger || ye,
                        se = $e(v) ? v.start : t.start || (0 !== t.start && ye ? be ? "0 0" : "0 100%" : 0),
                        le = Bt.pinnedContainer = t.pinnedContainer && R(t.pinnedContainer, Bt),
                        ue = ye && Math.max(0, Tt.indexOf(Bt)) || 0,
                        fe = ue;
                      for (Lt && $e(v) && (U = Y.getProperty(d, xt.p), $ = Y.getProperty(p, xt.p)); fe--;)(k = Tt[fe]).end || k.refresh(0, 1) || (ee = Bt), !(F = k.pin) || F !== ye && F !== be && F !== le || k.isReverted || (B || (B = []), B.unshift(k), k.revert(!0, !0)), k !== Tt[fe] && (ue--, fe--);
                      for (He(se) && (se = se(Bt)), se = ke(se, "start", Bt), c = nn(se, ye, G, xt, Gt(), u, d, Bt, Z, Wt, Rt, J, Qe, Bt._startClamp && "_startClamp") || (be ? -.001 : 0), He(ie) && (ie = ie(Bt)), Ve(ie) && !ie.indexOf("+=") && (~ie.indexOf(" ") ? ie = (Ve(se) ? se.split(" ")[0] : "") + ie : (re = St(ie.substr(2), G), ie = Ve(se) ? se : (Qe ? Y.utils.mapRange(0, Qe.duration(), Qe.scrollTrigger.start, Qe.scrollTrigger.end, c) : c) + re, ae = ye)), ie = ke(ie, "end", Bt), l = Math.max(c, nn(ie || (ae ? "100% 0" : J), ae, G, xt, Gt() + re, f, p, Bt, Z, Wt, Rt, J, Qe, Bt._endClamp && "_endClamp")) || -.001, re = 0, fe = ue; fe--;)(F = (k = Tt[fe]).pin) && k.start - k._pinPush <= c && !Qe && k.end > 0 && (x = k.end - (Bt._startClamp ? Math.max(0, k.start) : k.start), (F === ye && k.start - k._pinPush < c || F === le) && isNaN(se) && (re += x * (1 - k.progress)), F === be && (oe += x));
                      if (c += re, l += re, Bt._startClamp && (Bt._startClamp += re), Bt._endClamp && !Oe && (Bt._endClamp = l || -.001, l = Math.min(l, ze(Dt, xt))), g = l - c || (c -= .01) && .001, te && (Kt = Y.utils.clamp(0, 1, Y.utils.normalize(c, l, Q))), Bt._pinPush = oe, u && re && ((x = {})[xt.a] = "+=" + re, le && (x[xt.p] = "-=" + Gt()), Y.set([u, f], x)), !be || we && Bt.end >= ze(Dt, xt)) {
                        if (ye && Gt() && !Qe)
                          for (O = ye.parentNode; O && O !== q;) O._pinOffset && (c -= O._pinOffset, l -= O._pinOffset), O = O.parentNode
                      } else x = dt(be), _ = xt === A, M = Gt(), D = parseFloat(S(xt.a)) + oe, !J && l > 1 && (z = {
                        style: z = (Nt ? V.scrollingElement || H : Dt).style,
                        value: z["overflow" + xt.a.toUpperCase()]
                      }, Nt && "scroll" !== dt(q)["overflow" + xt.a.toUpperCase()] && (z.style["overflow" + xt.a.toUpperCase()] = "scroll")), Zt(be, E, x), b = en(be), O = vt(be, !0), L = Rt && I(Dt, _ ? N : A)(), Ee ? ((C = [Ee + xt.os2, g + oe + ft]).t = E, (fe = Ee === st ? mt(be, xt) + g + oe : 0) && (C.push(xt.d, fe + ft), "auto" !== E.style.flexBasis && (E.style.flexBasis = fe + ft)), Qt(C), le && Tt.forEach(function(e) {
                        e.pin === le && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                      }), Rt && Gt(Q)) : (fe = mt(be, xt)) && "auto" !== E.style.flexBasis && (E.style.flexBasis = fe + ft), Rt && ((P = {
                        top: O.top + (_ ? M - c : L) + ft,
                        left: O.left + (_ ? L : M - c) + ft,
                        boxSizing: "border-box",
                        position: "fixed"
                      })[tt] = P["max" + lt] = Math.ceil(O.width) + ft, P[nt] = P["max" + ut] = Math.ceil(O.height) + ft, P[ct] = P[ct + it] = P[ct + rt] = P[ct + at] = P[ct + ot] = "0", P[st] = x[st], P[st + it] = x[st + it], P[st + rt] = x[st + rt], P[st + at] = x[st + at], P[st + ot] = x[st + ot], y = function(e, t, n) {
                        for (var r, o = [], i = e.length, a = n ? 8 : 0; a < i; a += 2) r = e[a], o.push(r, r in t ? t[r] : e[a + 1]);
                        return o.t = e.t, o
                      }(h, P, Ue), Oe && Gt(0)), n ? (W = n._initted, ce(1), n.render(n.duration(), !0, !0), T = S(xt.a) - D + g + oe, j = Math.abs(g - T) > 1, Rt && j && y.splice(y.length - 2, 2), n.render(0, !0, !0), W || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), ce(0)) : T = g, z && (z.value ? z.style["overflow" + xt.a.toUpperCase()] = z.value : z.style.removeProperty("overflow-" + xt.a));
                      B && B.forEach(function(e) {
                        return e.revert(!1, !0)
                      }), Bt.start = c, Bt.end = l, a = s = Oe ? Q : Gt(), Qe || Oe || (a < Q && Gt(Q), Bt.scroll.rec = 0), Bt.revert(!1, !0), $t = De(), K && (Ht = -1, K.restart(!0)), ee = 0, n && Mt && (n._initted || ne) && n.progress() !== ne && n.progress(ne || 0, !0).render(n.time(), !0, !0), (te || Kt !== Bt.progress || Qe || Te) && (n && !Mt && n.totalProgress(Qe && c < -.001 && !Kt ? Y.utils.normalize(c, l, 0) : Kt, !0), Bt.progress = te || (a - c) / g === Kt ? 0 : Kt), be && Ee && (E._pinOffset = Math.round(Bt.progress * T)), X && X.invalidate(), isNaN(U) || (U -= Y.getProperty(d, xt.p), $ -= Y.getProperty(p, xt.p), sn(d, xt, U), sn(u, xt, U - (w || 0)), sn(p, xt, $), sn(f, xt, $ - (w || 0))), te && !Oe && Bt.update(), !ge || Oe || m || (m = !0, ge(Bt), m = !1)
                    }
                }, Bt.getVelocity = function() {
                  return (Gt() - s) / (De() - J) * 1e3 || 0
                }, Bt.endAnimation = function() {
                  Ke(Bt.callbackAnimation), n && (X ? X.progress(1) : n.paused() ? Mt || Ke(n, Bt.direction < 0, 1) : Ke(n, n.reversed()))
                }, Bt.labelToScroll = function(e) {
                  return n && n.labels && (c || Bt.refresh() || c) + n.labels[e] / n.duration() * g || 0
                }, Bt.getTrailing = function(e) {
                  var t = Tt.indexOf(Bt),
                    n = Bt.direction > 0 ? Tt.slice(0, t).reverse() : Tt.slice(t + 1);
                  return (Ve(e) ? n.filter(function(t) {
                    return t.vars.preventOverlaps === e
                  }) : n).filter(function(e) {
                    return Bt.direction > 0 ? e.end <= c : e.start >= l
                  })
                }, Bt.update = function(e, t, o) {
                  if (!Qe || o || e) {
                    var i, u, f, p, v, m, h, w = !0 === Oe ? Q : Bt.scroll(),
                      x = e ? 0 : (w - c) / g,
                      O = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                      M = Bt.progress;
                    if (t && (s = a, a = Qe ? Gt() : w, We && (B = W, W = n && !Mt ? n.totalProgress() : O)), Ae && be && !ee && !_e && Pe && (!O && c < w + (w - s) / (De() - J) * Ae ? O = 1e-4 : 1 === O && l > w + (w - s) / (De() - J) * Ae && (O = .9999)), O !== M && Bt.enabled) {
                      if (p = (v = (i = Bt.isActive = !!O && O < 1) != (!!M && M < 1)) || !!O != !!M, Bt.direction = O > M ? 1 : -1, Bt.progress = O, p && !ee && (u = O && !M ? 0 : 1 === O ? 1 : 1 === M ? 2 : 3, Mt && (f = !v && "none" !== Ft[u + 1] && Ft[u + 1] || Ft[u], h = n && ("complete" === f || "reset" === f || f in n))), yt && (v || h) && (h || he || !n) && (He(yt) ? yt(Bt) : Bt.getTrailing(yt).forEach(function(e) {
                          return e.endAnimation()
                        })), Mt || (!X || ee || _e ? n && n.totalProgress(O, !(!ee || !$t && !e)) : (X._dp._time - X._start !== X._time && X.render(X._dp._time - X._start), X.resetTo ? X.resetTo("totalProgress", O, n._tTime / n._tDur) : (X.vars.totalProgress = O, X.invalidate().restart()))), be)
                        if (e && Ee && (E.style[Ee + xt.os2] = P), Rt) {
                          if (p) {
                            if (m = !e && O > M && l + 1 > w && w + 1 >= ze(Dt, xt), Ue)
                              if (e || !i && !m) on(be, E);
                              else {
                                var S = vt(be, !0),
                                  C = w - c;
                                on(be, q, S.top + (xt === A ? C : 0) + ft, S.left + (xt === A ? 0 : C) + ft)
                              } Qt(i || m ? y : b), j && O < 1 && i || _(D + (1 !== O || m ? 0 : T))
                          }
                        } else _(Fe(D + T * O));
                      We && !r.tween && !ee && !_e && K.restart(!0), pe && (v || Le && O && (O < 1 || !xe)) && G(pe.targets).forEach(function(e) {
                        return e.classList[i || Le ? "add" : "remove"](pe.className)
                      }), de && !Mt && !e && de(Bt), p && !ee ? (Mt && (h && ("complete" === f ? n.pause().totalProgress(1) : "reset" === f ? n.restart(!0).pause() : "restart" === f ? n.restart(!0) : n[f]()), de && de(Bt)), !v && xe || (me && v && Ge(Bt, me), It[u] && Ge(Bt, It[u]), Le && (1 === O ? Bt.kill(!1, 1) : It[u] = 0), v || It[u = 1 === O ? 1 : 3] && Ge(Bt, It[u])), et && !i && Math.abs(Bt.getVelocity()) > (qe(et) ? et : 2500) && (Ke(Bt.callbackAnimation), X ? X.progress(1) : Ke(n, "reverse" === f ? 1 : !O, 1))) : Mt && de && !ee && de(Bt)
                    }
                    if (F) {
                      var N = Qe ? w / Qe.duration() * (Qe._caScrollDist || 0) : w;
                      k(N + (d._isFlipped ? 1 : 0)), F(N)
                    }
                    oe && oe(-w / Qe.duration() * (Qe._caScrollDist || 0))
                  }
                }, Bt.enable = function(t, n) {
                  Bt.enabled || (Bt.enabled = !0, bt(Dt, "resize", At), Nt || bt(Dt, "scroll", kt), Xt && bt(e, "refreshInit", Xt), !1 !== t && (Bt.progress = Kt = 0, a = s = Ht = Gt()), !1 !== n && Bt.refresh())
                }, Bt.getTween = function(e) {
                  return e && r ? r.tween : X
                }, Bt.setPositions = function(e, t, n, r) {
                  if (Qe) {
                    var o = Qe.scrollTrigger,
                      i = Qe.duration(),
                      a = o.end - o.start;
                    e = o.start + a * e / i, t = o.start + a * t / i
                  }
                  Bt.refresh(!1, !1, {
                    start: Ne(e, n && !!Bt._startClamp),
                    end: Ne(t, n && !!Bt._endClamp)
                  }, r), Bt.update()
                }, Bt.adjustPinSpacing = function(e) {
                  if (C && e) {
                    var t = C.indexOf(xt.d) + 1;
                    C[t] = parseFloat(C[t]) + e + ft, C[1] = parseFloat(C[1]) + e + ft, Qt(C)
                  }
                }, Bt.disable = function(t, n) {
                  if (Bt.enabled && (!1 !== t && Bt.revert(!0, !0), Bt.enabled = Bt.isActive = !1, n || X && X.pause(), Q = 0, o && (o.uncache = 1), Xt && wt(e, "refreshInit", Xt), K && (K.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !Nt)) {
                    for (var i = Tt.length; i--;)
                      if (Tt[i].scroller === Dt && Tt[i] !== Bt) return;
                    wt(Dt, "resize", At), Nt || wt(Dt, "scroll", kt)
                  }
                }, Bt.kill = function(e, r) {
                  Bt.disable(e, r), X && !r && X.kill(), ve && delete Pt[ve];
                  var i = Tt.indexOf(Bt);
                  i >= 0 && Tt.splice(i, 1), i === re && qt > 0 && re--, i = 0, Tt.forEach(function(e) {
                    return e.scroller === Bt.scroller && (i = 1)
                  }), i || Oe || (Bt.scroll.rec = 0), n && (n.scrollTrigger = null, e && n.revert({
                    kill: !1
                  }), r || n.kill()), u && [u, f, d, p].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                  }), Se === Bt && (Se = 0), be && (o && (o.uncache = 1), i = 0, Tt.forEach(function(e) {
                    return e.pin === be && i++
                  }), i || (o.spacer = 0)), t.onKill && t.onKill(Bt)
                }, Tt.push(Bt), Bt.enable(!1, !1), ie && ie(Bt), n && n.add && !g) {
                var ln = Bt.update;
                Bt.update = function() {
                  Bt.update = ln, c || l || Bt.refresh()
                }, Y.delayedCall(.01, Bt.update), g = .01, c = l = 0
              } else Bt.refresh();
              be && function() {
                if (Me !== Yt) {
                  var e = Me = Yt;
                  requestAnimationFrame(function() {
                    return e === Yt && Vt(!0)
                  })
                }
              }()
            } else this.update = this.refresh = this.kill = je
          }, e.register = function(t) {
            return z || (Y = t || We(), Le() && window.document && e.enable(), z = Ce), z
          }, e.defaults = function(e) {
            if (e)
              for (var t in e) Ot[t] = e[t];
            return Ot
          }, e.disable = function(e, t) {
            Ce = 0, Tt.forEach(function(n) {
              return n[t ? "kill" : "disable"](e)
            }), wt(U, "wheel", kt), wt(V, "scroll", kt), clearInterval(Q), wt(V, "touchcancel", je), wt(q, "touchstart", je), yt(wt, V, "pointerdown,touchstart,mousedown", Re), yt(wt, V, "pointerup,touchend,mouseup", Ie), K.kill(), Ue(wt);
            for (var n = 0; n < w.length; n += 3) xt(wt, w[n], w[n + 1]), xt(wt, w[n], w[n + 2])
          }, e.enable = function() {
            if (U = window, V = document, H = V.documentElement, q = V.body, Y && (G = Y.utils.toArray, Z = Y.utils.clamp, me = Y.core.context || je, ce = Y.core.suppressOverwrites || je, ge = U.history.scrollRestoration || "auto", Ht = U.pageYOffset, Y.core.globals("ScrollTrigger", e), q)) {
              Ce = 1, (he = document.createElement("div")).style.height = "100vh", he.style.position = "absolute", zt(), Ae(), X.register(Y), e.isTouch = X.isTouch, ve = X.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), fe = 1 === X.isTouch, bt(U, "wheel", kt), $ = [U, V, H, q], Y.matchMedia ? (e.matchMedia = function(e) {
                var t, n = Y.matchMedia();
                for (t in e) n.add(t, e[t]);
                return n
              }, Y.addEventListener("matchMediaInit", function() {
                return Bt()
              }), Y.addEventListener("matchMediaRevert", function() {
                return Wt()
              }), Y.addEventListener("matchMedia", function() {
                Vt(0, 1), Ft("matchMedia")
              }), Y.matchMedia("(orientation: portrait)", function() {
                return Nt(), Nt
              })) : console.warn("Requires GSAP 3.11.0 or later"), Nt(), bt(V, "scroll", kt);
              var t, n, r = q.style,
                o = r.borderTopStyle,
                i = Y.core.Animation.prototype;
              for (i.revert || Object.defineProperty(i, "revert", {
                  value: function() {
                    return this.time(-.01, !0)
                  }
                }), r.borderTopStyle = "solid", t = vt(q), A.m = Math.round(t.top + A.sc()) || 0, N.m = Math.round(t.left + N.sc()) || 0, o ? r.borderTopStyle = o : r.removeProperty("border-top-style"), Q = setInterval(Ct, 250), Y.delayedCall(.5, function() {
                  return _e = 0
                }), bt(V, "touchcancel", je), bt(q, "touchstart", je), yt(bt, V, "pointerdown,touchstart,mousedown", Re), yt(bt, V, "pointerup,touchend,mouseup", Ie), ne = Y.utils.checkPrefix("transform"), Gt.push(ne), z = De(), K = Y.delayedCall(.2, Vt).pause(), ae = [V, "visibilitychange", function() {
                  var e = U.innerWidth,
                    t = U.innerHeight;
                  V.hidden ? (oe = e, ie = t) : oe === e && ie === t || At()
                }, V, "DOMContentLoaded", Vt, U, "load", Vt, U, "resize", At], Ue(bt), Tt.forEach(function(e) {
                  return e.enable(0, 1)
                }), n = 0; n < w.length; n += 3) xt(wt, w[n], w[n + 1]), xt(wt, w[n], w[n + 2])
            }
          }, e.config = function(t) {
            "limitCallbacks" in t && (xe = !!t.limitCallbacks);
            var n = t.syncInterval;
            n && clearInterval(Q) || (Q = n) && setInterval(Ct, n), "ignoreMobileResize" in t && (fe = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (Ue(wt) || Ue(bt, t.autoRefreshEvents || "none"), le = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
          }, e.scrollerProxy = function(e, t) {
            var n = R(e),
              r = w.indexOf(n),
              o = Be(n);
            ~r && w.splice(r, o ? 6 : 2), t && (o ? x.unshift(U, t, q, t, H, t) : x.unshift(n, t))
          }, e.clearMatchMedia = function(e) {
            Tt.forEach(function(t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
            })
          }, e.isInViewport = function(e, t, n) {
            var r = (Ve(e) ? R(e) : e).getBoundingClientRect(),
              o = r[n ? tt : nt] * t || 0;
            return n ? r.right - o > 0 && r.left + o < U.innerWidth : r.bottom - o > 0 && r.top + o < U.innerHeight
          }, e.positionInViewport = function(e, t, n) {
            Ve(e) && (e = R(e));
            var r = e.getBoundingClientRect(),
              o = r[n ? tt : nt],
              i = null == t ? o / 2 : t in Mt ? Mt[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
            return n ? (r.left + i) / U.innerWidth : (r.top + i) / U.innerHeight
          }, e.killAll = function(e) {
            if (Tt.slice(0).forEach(function(e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
              }), !0 !== e) {
              var t = Rt.killAll || [];
              Rt = {}, t.forEach(function(e) {
                return e()
              })
            }
          }, e
        }();
      ln.version = "3.12.5", ln.saveStyles = function(e) {
        return e ? G(e).forEach(function(e) {
          if (e && e.style) {
            var t = Lt.indexOf(e);
            t >= 0 && Lt.splice(t, 5), Lt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Y.core.getCache(e), me())
          }
        }) : Lt
      }, ln.revert = function(e, t) {
        return Bt(!e, t)
      }, ln.create = function(e, t) {
        return new ln(e, t)
      }, ln.refresh = function(e) {
        return e ? At() : (z || ln.register()) && Vt(!0)
      }, ln.update = function(e) {
        return ++w.cache && $t(!0 === e ? 2 : 0)
      }, ln.clearScrollMemory = Xt, ln.maxScroll = function(e, t) {
        return ze(e, t ? N : A)
      }, ln.getScrollFunc = function(e, t) {
        return I(R(e), t ? N : A)
      }, ln.getById = function(e) {
        return Pt[e]
      }, ln.getAll = function() {
        return Tt.filter(function(e) {
          return "ScrollSmoother" !== e.vars.id
        })
      }, ln.isScrolling = function() {
        return !!Pe
      }, ln.snapDirectional = ht, ln.addEventListener = function(e, t) {
        var n = Rt[e] || (Rt[e] = []);
        ~n.indexOf(t) || n.push(t)
      }, ln.removeEventListener = function(e, t) {
        var n = Rt[e],
          r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1)
      }, ln.batch = function(e, t) {
        var n, r = [],
          o = {},
          i = t.interval || .016,
          a = t.batchMax || 1e9,
          s = function(e, t) {
            var n = [],
              r = [],
              o = Y.delayedCall(i, function() {
                t(n, r), n = [], r = []
              }).pause();
            return function(e) {
              n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1)
            }
          };
        for (n in t) o[n] = "on" === n.substr(0, 2) && He(t[n]) && "onRefreshInit" !== n ? s(0, t[n]) : t[n];
        return He(a) && (a = a(), bt(ln, "refresh", function() {
          return a = t.batchMax()
        })), G(e).forEach(function(e) {
          var t = {};
          for (n in o) t[n] = o[n];
          t.trigger = e, r.push(ln.create(t))
        }), r
      };
      var un, fn = function(e, t, n, r) {
          return t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
        },
        dn = function e(t, n) {
          !0 === n ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === n ? "auto" : n ? "pan-" + n + (X.isTouch ? " pinch-zoom" : "") : "none", t === H && e(q, n)
        },
        pn = {
          auto: 1,
          scroll: 1
        },
        vn = function(e) {
          var t, n = e.event,
            r = e.target,
            o = e.axis,
            i = (n.changedTouches ? n.changedTouches[0] : n).target,
            a = i._gsap || Y.core.getCache(i),
            s = De();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (; i && i !== q && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !pn[(t = dt(i)).overflowY] && !pn[t.overflowX]);) i = i.parentNode;
            a._isScroll = i && i !== r && !Be(i) && (pn[(t = dt(i)).overflowY] || pn[t.overflowX]), a._isScrollT = s, !i.hasAttribute("role") || "dialog" !== i.getAttribute("role") || i.parentElement !== document.body || "auto" !== t.overflowX && "scroll" !== t.overflowX && "auto" !== t.overflowY && "scroll" !== t.overflowY || (a._isScroll = 0)
          }(a._isScroll || "x" === o) && (n.stopPropagation(), n._gsapAllow = !0)
        },
        mn = function(e, t, n, r) {
          return X.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: r = r && vn,
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function() {
              return n && bt(V, X.eventTypes[0], hn, !1, !0)
            },
            onDisable: function() {
              return wt(V, X.eventTypes[0], hn, !0)
            }
          })
        },
        gn = /(input|label|select|textarea)/i,
        hn = function(e) {
          var t = gn.test(e.target.tagName);
          (t || un) && (e._gsapAllow = !0, un = t)
        };
      ln.sort = function(e) {
        return Tt.sort(e || function(e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
      }, ln.observe = function(e) {
        return new X(e)
      }, ln.normalizeScroll = function(e) {
        if (void 0 === e) return ue;
        if (!0 === e && ue) return ue.enable();
        if (!1 === e) return ue && ue.kill(), void(ue = e);
        var t = e instanceof X ? e : function(e) {
          $e(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          var t, n, r, o, i, a, s, c, l = e,
            u = l.normalizeScrollX,
            f = l.momentum,
            d = l.allowNestedScroll,
            p = l.onRelease,
            v = R(e.target) || H,
            m = Y.core.globals().ScrollSmoother,
            g = m && m.get(),
            h = ve && (e.content && R(e.content) || g && !1 !== e.content && !g.smooth() && g.content()),
            y = I(v, A),
            b = I(v, N),
            x = 1,
            E = (X.isTouch && U.visualViewport ? U.visualViewport.scale * U.visualViewport.width : U.outerWidth) / U.innerWidth,
            O = 0,
            M = He(f) ? function() {
              return f(t)
            } : function() {
              return f || 2.8
            },
            S = mn(v, e.type, !0, d),
            _ = function() {
              return o = !1
            },
            D = je,
            T = je,
            P = function() {
              n = ze(v, A), T = Z(ve ? 1 : 0, n), u && (D = Z(0, ze(v, N))), r = Yt
            },
            C = function() {
              h._gsap.y = Fe(parseFloat(h._gsap.y) + y.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
            },
            k = function() {
              P(), i.isActive() && i.vars.scrollY > n && (y() > n ? i.progress(1) && y(n) : i.resetTo("scrollY", n))
            };
          return h && Y.set(h, {
            y: "+=0"
          }), e.ignoreCheck = function(e) {
            return ve && "touchmove" === e.type && function() {
              if (o) {
                requestAnimationFrame(_);
                var e = Fe(t.deltaY / 2),
                  n = T(y.v - e);
                if (h && n !== y.v + y.offset) {
                  y.offset = n - y.v;
                  var r = Fe((parseFloat(h && h._gsap.y) || 0) - y.offset);
                  h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", h._gsap.y = r + "px", y.cacheID = w.cache, $t()
                }
                return !0
              }
              y.offset && C(), o = !0
            }() || x > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
          }, e.onPress = function() {
            o = !1;
            var e = x;
            x = Fe((U.visualViewport && U.visualViewport.scale || 1) / E), i.pause(), e !== x && dn(v, x > 1.01 || !u && "x"), a = b(), s = y(), P(), r = Yt
          }, e.onRelease = e.onGestureStart = function(e, t) {
            if (y.offset && C(), t) {
              w.cache++;
              var r, o, a = M();
              u && (o = (r = b()) + .05 * a * -e.velocityX / .227, a *= fn(b, r, o, ze(v, N)), i.vars.scrollX = D(o)), o = (r = y()) + .05 * a * -e.velocityY / .227, a *= fn(y, r, o, ze(v, A)), i.vars.scrollY = T(o), i.invalidate().duration(a).play(.01), (ve && i.vars.scrollY >= n || r >= n - 1) && Y.to({}, {
                onUpdate: k,
                duration: a
              })
            } else c.restart(!0);
            p && p(e)
          }, e.onWheel = function() {
            i._ts && i.pause(), De() - O > 1e3 && (r = 0, O = De())
          }, e.onChange = function(e, t, n, o, i) {
            if (Yt !== r && P(), t && u && b(D(o[2] === t ? a + (e.startX - e.x) : b() + t - o[1])), n) {
              y.offset && C();
              var c = i[2] === n,
                l = c ? s + e.startY - e.y : y() + n - i[1],
                f = T(l);
              c && l !== f && (s += f - l), y(f)
            }(n || t) && $t()
          }, e.onEnable = function() {
            dn(v, !u && "x"), ln.addEventListener("refresh", k), bt(U, "resize", k), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = b.smooth = !1), S.enable()
          }, e.onDisable = function() {
            dn(v, !0), wt(U, "resize", k), ln.removeEventListener("refresh", k), S.kill()
          }, e.lockAxis = !1 !== e.lockAxis, (t = new X(e)).iOS = ve, ve && !y() && y(1), ve && Y.ticker.add(je), c = t._dc, i = Y.to(t, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: u ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: an(y, y(), function() {
                return i.pause()
              })
            },
            onUpdate: $t,
            onComplete: c.vars.onComplete
          }), t
        }(e);
        return ue && ue.target === t.target && ue.kill(), Be(t.target) && (ue = t), t
      }, ln.core = {
        _getVelocityProp: j,
        _inputObserver: mn,
        _scrollers: w,
        _proxies: x,
        bridge: {
          ss: function() {
            Pe || Ft("scrollStart"), Pe = De()
          },
          ref: function() {
            return ee
          }
        }
      }, We() && Y.registerPlugin(ln)
    },
    12919: (e, t, n) => {
      n.d(t, {
        UP: () => a,
        Ub: () => i
      });
      var r = n(60211),
        o = n(62229);

      function i(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const i = e => r.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [a, s] = (0, o.useState)(() => n ? i(e) : t);

        function c() {
          s(i(e))
        }
        return (0, o.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return c(), t?.addListener ? t?.addListener(c) : t?.addEventListener("change", c), () => {
            t?.removeListener ? t?.removeListener(c) : t?.removeEventListener("change", c)
          }
        }, [e]), a
      }

      function a(...e) {
        const t = (0, o.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      n(51105)
    },
    17328: (e, t, n) => {
      n.d(t, {
        X3: () => o.X,
        v6: () => i.v
      });
      var r, o = n(60211),
        i = n(51105);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(r || (r = {})), Symbol.toStringTag
    },
    17982: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const r = {
        active: !0,
        breakpoints: {},
        delay: 4e3,
        jump: !1,
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
        rootNode: null
      };

      function o(e = {}) {
        let t, n, i, a, s = null,
          c = 0,
          l = !1,
          u = !1,
          f = !1,
          d = !1;

        function p() {
          i || (g() ? f = !0 : (l || n.emit("autoplay:play"), function() {
            const {
              ownerWindow: e
            } = n.internalEngine();
            e.clearTimeout(c), c = e.setTimeout(x, a[n.selectedScrollSnap()]), s = (new Date).getTime(), n.emit("autoplay:timerset")
          }(), l = !0))
        }

        function v() {
          i || (l && n.emit("autoplay:stop"), function() {
            const {
              ownerWindow: e
            } = n.internalEngine();
            e.clearTimeout(c), c = 0, s = null, n.emit("autoplay:timerstopped")
          }(), l = !1)
        }

        function m() {
          if (g()) return f = l, v();
          f && p()
        }

        function g() {
          const {
            ownerDocument: e
          } = n.internalEngine();
          return "hidden" === e.visibilityState
        }

        function h() {
          u || v()
        }

        function y() {
          u || p()
        }

        function b() {
          u = !0, v()
        }

        function w() {
          u = !1, p()
        }

        function x() {
          const {
            index: e
          } = n.internalEngine(), r = e.clone().add(1).get(), o = n.scrollSnapList().length - 1, i = t.stopOnLastSnap && r === o;
          if (n.canScrollNext() ? n.scrollNext(d) : n.scrollTo(0, d), n.emit("autoplay:select"), i) return v();
          p()
        }
        return {
          name: "autoplay",
          options: e,
          init: function(s, c) {
            n = s;
            const {
              mergeOptions: l,
              optionsAtMedia: u
            } = c, f = l(r, o.globalOptions), g = l(f, e);
            if (t = u(g), n.scrollSnapList().length <= 1) return;
            d = t.jump, i = !1, a = function(e, t) {
              const n = e.scrollSnapList();
              return "number" == typeof t ? n.map(() => t) : t(n, e)
            }(n, t.delay);
            const {
              eventStore: x,
              ownerDocument: E
            } = n.internalEngine(), O = !!n.internalEngine().options.watchDrag, M = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            x.add(E, "visibilitychange", m), O && n.on("pointerDown", h), O && !t.stopOnInteraction && n.on("pointerUp", y), t.stopOnMouseEnter && x.add(M, "mouseenter", b), t.stopOnMouseEnter && !t.stopOnInteraction && x.add(M, "mouseleave", w), t.stopOnFocusIn && n.on("slideFocusStart", v), t.stopOnFocusIn && !t.stopOnInteraction && x.add(n.containerNode(), "focusout", p), t.playOnInit && p()
          },
          destroy: function() {
            n.off("pointerDown", h).off("pointerUp", y).off("slideFocusStart", v), v(), i = !0, l = !1
          },
          play: function(e) {
            void 0 !== e && (d = e), p()
          },
          stop: function() {
            l && v()
          },
          reset: function() {
            l && p()
          },
          isPlaying: function() {
            return l
          },
          timeUntilNext: function() {
            return s ? a[n.selectedScrollSnap()] - ((new Date).getTime() - s) : null
          }
        }
      }
      o.globalOptions = void 0
    },
    20170: (e, t, n) => {
      n.d(t, {
        bm: () => _e,
        UC: () => Oe,
        VY: () => Se,
        hJ: () => Ee,
        ZL: () => xe,
        bL: () => we,
        hE: () => Me
      });
      var r = n(62229);

      function o(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var i = n(95362),
        a = n(85426),
        s = n(86126),
        c = n(53054),
        l = n(6523),
        u = n(42295);

      function f(e) {
        const t = d(e),
          n = r.forwardRef((e, n) => {
            const {
              children: o,
              ...i
            } = e, a = r.Children.toArray(o), s = a.find(v);
            if (s) {
              const e = s.props.children,
                o = a.map(t => t === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
              return (0, u.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, u.jsx)(t, {
              ...i,
              ref: n,
              children: o
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function d(e) {
        const t = r.forwardRef((e, t) => {
          const {
            children: n,
            ...o
          } = e, a = r.isValidElement(n) ? function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(n) : void 0, s = (0, i.s)(a, t);
          if (r.isValidElement(n)) {
            const e = function(e, t) {
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
            }(o, n.props);
            return n.type !== r.Fragment && (e.ref = s), r.cloneElement(n, e)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function v(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
      var m, g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = f(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {}),
        h = n(76286),
        y = n(94040),
        b = "dismissableLayer.update",
        w = r.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        x = r.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: c,
            onInteractOutside: l,
            onDismiss: f,
            ...d
          } = e, p = r.useContext(w), [v, x] = r.useState(null), M = v?.ownerDocument ?? globalThis?.document, [, S] = r.useState({}), _ = (0, i.s)(t, e => x(e)), D = Array.from(p.layers), [T] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), P = D.indexOf(T), C = v ? D.indexOf(v) : -1, k = p.layersWithOutsidePointerEventsDisabled.size > 0, N = C >= P, A = function(e, t = globalThis?.document) {
            const n = (0, h.c)(e),
              o = r.useRef(!1),
              i = r.useRef(() => {});
            return r.useEffect(() => {
              const e = e => {
                  if (e.target && !o.current) {
                    let r = function() {
                      O("dismissableLayer.pointerDownOutside", n, o, {
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
                  o.current = !1
                },
                r = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(r), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current)
              }
            }, [t, n]), {
              onPointerDownCapture: () => o.current = !0
            }
          }(e => {
            const t = e.target,
              n = [...p.branches].some(e => e.contains(t));
            N && !n && (s?.(e), l?.(e), e.defaultPrevented || f?.())
          }, M), R = function(e, t = globalThis?.document) {
            const n = (0, h.c)(e),
              o = r.useRef(!1);
            return r.useEffect(() => {
              const e = e => {
                e.target && !o.current && O("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, n]), {
              onFocusCapture: () => o.current = !0,
              onBlurCapture: () => o.current = !1
            }
          }(e => {
            const t = e.target;
            [...p.branches].some(e => e.contains(t)) || (c?.(e), l?.(e), e.defaultPrevented || f?.())
          }, M);
          return (0, y.U)(e => {
            C === p.layers.size - 1 && (a?.(e), !e.defaultPrevented && f && (e.preventDefault(), f()))
          }, M), r.useEffect(() => {
            if (v) return n && (0 === p.layersWithOutsidePointerEventsDisabled.size && (m = M.body.style.pointerEvents, M.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(v)), p.layers.add(v), E(), () => {
              n && 1 === p.layersWithOutsidePointerEventsDisabled.size && (M.body.style.pointerEvents = m)
            }
          }, [v, M, n, p]), r.useEffect(() => () => {
            v && (p.layers.delete(v), p.layersWithOutsidePointerEventsDisabled.delete(v), E())
          }, [v, p]), r.useEffect(() => {
            const e = () => S({});
            return document.addEventListener(b, e), () => document.removeEventListener(b, e)
          }, []), (0, u.jsx)(g.div, {
            ...d,
            ref: _,
            style: {
              pointerEvents: k ? N ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: o(e.onFocusCapture, R.onFocusCapture),
            onBlurCapture: o(e.onBlurCapture, R.onBlurCapture),
            onPointerDownCapture: o(e.onPointerDownCapture, A.onPointerDownCapture)
          })
        });

      function E() {
        const e = new CustomEvent(b);
        document.dispatchEvent(e)
      }

      function O(e, t, n, {
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
        }), r ? function(e, t) {
          e && l.flushSync(() => e.dispatchEvent(t))
        }(o, i) : o.dispatchEvent(i)
      }
      x.displayName = "DismissableLayer", r.forwardRef((e, t) => {
        const n = r.useContext(w),
          o = r.useRef(null),
          a = (0, i.s)(t, o);
        return r.useEffect(() => {
          const e = o.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, u.jsx)(g.div, {
          ...e,
          ref: a
        })
      }).displayName = "DismissableLayerBranch";
      var M = "focusScope.autoFocusOnMount",
        S = "focusScope.autoFocusOnUnmount",
        _ = {
          bubbles: !1,
          cancelable: !0
        },
        D = r.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: a,
            onUnmountAutoFocus: s,
            ...c
          } = e, [l, f] = r.useState(null), d = (0, h.c)(a), p = (0, h.c)(s), v = r.useRef(null), m = (0, i.s)(t, e => f(e)), y = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect(() => {
            if (o) {
              let e = function(e) {
                  if (y.paused || !l) return;
                  const t = e.target;
                  l.contains(t) ? v.current = t : k(v.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (y.paused || !l) return;
                  const t = e.relatedTarget;
                  null !== t && (l.contains(t) || k(v.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && k(l)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return l && r.observe(l, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }, [o, l, y.paused]), r.useEffect(() => {
            if (l) {
              N.add(y);
              const e = document.activeElement;
              if (!l.contains(e)) {
                const t = new CustomEvent(M, _);
                l.addEventListener(M, d), l.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (k(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(T(l).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && k(l))
              }
              return () => {
                l.removeEventListener(M, d), setTimeout(() => {
                  const t = new CustomEvent(S, _);
                  l.addEventListener(S, p), l.dispatchEvent(t), t.defaultPrevented || k(e ?? document.body, {
                    select: !0
                  }), l.removeEventListener(S, p), N.remove(y)
                }, 0)
              }
            }
          }, [l, d, p, y]);
          const b = r.useCallback(e => {
            if (!n && !o) return;
            if (y.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, i] = function(e) {
                  const t = T(e);
                  return [P(t, e), P(t.reverse(), e)]
                }(t);
              o && i ? e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && k(i, {
                select: !0
              })) : (e.preventDefault(), n && k(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }, [n, o, y.paused]);
          return (0, u.jsx)(g.div, {
            tabIndex: -1,
            ...c,
            ref: m,
            onKeyDown: b
          })
        });

      function T(e) {
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

      function P(e, t) {
        for (const n of e)
          if (!C(n, {
              upTo: t
            })) return n
      }

      function C(e, {
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

      function k(e, {
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
      D.displayName = "FocusScope";
      var N = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = A(e, t), e.unshift(t)
          },
          remove(t) {
            e = A(e, t), e[0]?.resume()
          }
        }
      }();

      function A(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var R = n(63155),
        I = r.forwardRef((e, t) => {
          const {
            container: n,
            ...o
          } = e, [i, a] = r.useState(!1);
          (0, R.N)(() => a(!0), []);
          const s = n || i && globalThis?.document?.body;
          return s ? l.createPortal((0, u.jsx)(g.div, {
            ...o,
            ref: t
          }), s) : null
        });
      I.displayName = "Portal";
      var j = e => {
        const {
          present: t,
          children: n
        } = e, o = function(e) {
          const [t, n] = r.useState(), o = r.useRef(null), i = r.useRef(e), a = r.useRef("none"), s = e ? "mounted" : "unmounted", [c, l] = function(e, t) {
            return r.useReducer((e, n) => t[e][n] ?? e, e)
          }(s, {
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
            const e = F(o.current);
            a.current = "mounted" === c ? e : "none"
          }, [c]), (0, R.N)(() => {
            const t = o.current,
              n = i.current;
            if (n !== e) {
              const r = a.current,
                o = F(t);
              l(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
            }
          }, [e, l]), (0, R.N)(() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                r = r => {
                  const a = F(o.current).includes(r.animationName);
                  if (r.target === t && a && (l("ANIMATION_END"), !i.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    })
                  }
                },
                s = e => {
                  e.target === t && (a.current = F(o.current))
                };
              return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
              }
            }
            l("ANIMATION_END")
          }, [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(c),
            ref: r.useCallback(e => {
              o.current = e ? getComputedStyle(e) : null, n(e)
            }, [])
          }
        }(t), a = "function" == typeof n ? n({
          present: o.isPresent
        }) : r.Children.only(n), s = (0, i.s)(o.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(a));
        return "function" == typeof n || o.isPresent ? r.cloneElement(a, {
          ref: s
        }) : null
      };

      function F(e) {
        return e?.animationName || "none"
      }
      j.displayName = "Presence";
      var L = 0;

      function W() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var B = n(97359),
        X = n(94926),
        Y = "Dialog",
        [z, U] = (0, a.A)(Y),
        [V, H] = z(Y),
        q = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: i,
            onOpenChange: a,
            modal: l = !0
          } = e, f = r.useRef(null), d = r.useRef(null), [p, v] = (0, c.i)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: a,
            caller: Y
          });
          return (0, u.jsx)(V, {
            scope: t,
            triggerRef: f,
            contentRef: d,
            contentId: (0, s.B)(),
            titleId: (0, s.B)(),
            descriptionId: (0, s.B)(),
            open: p,
            onOpenChange: v,
            onOpenToggle: r.useCallback(() => v(e => !e), [v]),
            modal: l,
            children: n
          })
        };
      q.displayName = Y;
      var $ = "DialogTrigger";
      r.forwardRef((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, a = H($, n), s = (0, i.s)(t, a.triggerRef);
        return (0, u.jsx)(g.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": a.open,
          "aria-controls": a.contentId,
          "data-state": ve(a.open),
          ...r,
          ref: s,
          onClick: o(e.onClick, a.onOpenToggle)
        })
      }).displayName = $;
      var K = "DialogPortal",
        [G, Z] = z(K, {
          forceMount: void 0
        }),
        J = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: i
          } = e, a = H(K, t);
          return (0, u.jsx)(G, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, e => (0, u.jsx)(j, {
              present: n || a.open,
              children: (0, u.jsx)(I, {
                asChild: !0,
                container: i,
                children: e
              })
            }))
          })
        };
      J.displayName = K;
      var Q = "DialogOverlay",
        ee = r.forwardRef((e, t) => {
          const n = Z(Q, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = H(Q, e.__scopeDialog);
          return i.modal ? (0, u.jsx)(j, {
            present: r || i.open,
            children: (0, u.jsx)(ne, {
              ...o,
              ref: t
            })
          }) : null
        });
      ee.displayName = Q;
      var te = f("DialogOverlay.RemoveScroll"),
        ne = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = H(Q, n);
          return (0, u.jsx)(B.A, {
            as: te,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, u.jsx)(g.div, {
              "data-state": ve(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        re = "DialogContent",
        oe = r.forwardRef((e, t) => {
          const n = Z(re, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = H(re, e.__scopeDialog);
          return (0, u.jsx)(j, {
            present: r || i.open,
            children: i.modal ? (0, u.jsx)(ie, {
              ...o,
              ref: t
            }) : (0, u.jsx)(ae, {
              ...o,
              ref: t
            })
          })
        });
      oe.displayName = re;
      var ie = r.forwardRef((e, t) => {
          const n = H(re, e.__scopeDialog),
            a = r.useRef(null),
            s = (0, i.s)(t, n.contentRef, a);
          return r.useEffect(() => {
            const e = a.current;
            if (e) return (0, X.Eq)(e)
          }, []), (0, u.jsx)(se, {
            ...e,
            ref: s,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: o(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: o(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: o(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        ae = r.forwardRef((e, t) => {
          const n = H(re, e.__scopeDialog),
            o = r.useRef(!1),
            i = r.useRef(!1);
          return (0, u.jsx)(se, {
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
                a = n.triggerRef.current?.contains(r);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
            }
          })
        }),
        se = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: a,
            onCloseAutoFocus: s,
            ...c
          } = e, l = H(re, n), f = r.useRef(null), d = (0, i.s)(t, f);
          return r.useEffect(() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? W()), document.body.insertAdjacentElement("beforeend", e[1] ?? W()), L++, () => {
              1 === L && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), L--
            }
          }, []), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(D, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: a,
              onUnmountAutoFocus: s,
              children: (0, u.jsx)(x, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": ve(l.open),
                ...c,
                ref: d,
                onDismiss: () => l.onOpenChange(!1)
              })
            }), (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(ye, {
                titleId: l.titleId
              }), (0, u.jsx)(be, {
                contentRef: f,
                descriptionId: l.descriptionId
              })]
            })]
          })
        }),
        ce = "DialogTitle",
        le = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = H(ce, n);
          return (0, u.jsx)(g.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      le.displayName = ce;
      var ue = "DialogDescription",
        fe = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = H(ue, n);
          return (0, u.jsx)(g.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      fe.displayName = ue;
      var de = "DialogClose",
        pe = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, i = H(de, n);
          return (0, u.jsx)(g.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: o(e.onClick, () => i.onOpenChange(!1))
          })
        });

      function ve(e) {
        return e ? "open" : "closed"
      }
      pe.displayName = de;
      var me = "DialogTitleWarning",
        [ge, he] = (0, a.q)(me, {
          contentName: re,
          titleName: ce,
          docsSlug: "dialog"
        }),
        ye = ({
          titleId: e
        }) => {
          const t = he(me),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return r.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        be = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${he("DialogDescriptionWarning").contentName}}.`;
          return r.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        we = q,
        xe = J,
        Ee = ee,
        Oe = oe,
        Me = le,
        Se = fe,
        _e = pe
    },
    30257: (e, t, n) => {
      function r() {
        return r = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, r.apply(this, arguments)
      }

      function o(e, t) {
        if (e.length !== t.length) throw new Error("vectors must be same length");
        return e.map(function(e, n) {
          return e + t[n]
        })
      }

      function i(e) {
        return Math.max.apply(Math, e.map(Math.abs))
      }

      function a(e) {
        return Object.freeze(e), Object.values(e).forEach(function(e) {
          null === e || "object" != typeof e || Object.isFrozen(e) || a(e)
        }), e
      }
      n.d(t, {
        J: () => p
      });
      var s = [1, 18, "undefined" != typeof window && window.innerHeight || 800],
        c = [-1, -1, -1],
        l = a({
          preventWheelAction: !0,
          reverseSign: [!0, !0, !1]
        });
      const u = function(e) {
        void 0 === e && (e = {});
        var t, n, u, f = function() {
            var e = {};

            function t(t, n) {
              e[t] = (e[t] || []).filter(function(e) {
                return e !== n
              })
            }
            return a({
              on: function(n, r) {
                return e[n] = (e[n] || []).concat(r),
                  function() {
                    return t(n, r)
                  }
              },
              off: t,
              dispatch: function(t, n) {
                t in e && e[t].forEach(function(e) {
                  return e(n)
                })
              }
            })
          }(),
          d = f.on,
          p = f.off,
          v = f.dispatch,
          m = l,
          g = {
            isStarted: !1,
            isStartPublished: !1,
            isMomentum: !1,
            startTime: 0,
            lastAbsDelta: 1 / 0,
            axisMovement: [0, 0, 0],
            axisVelocity: [0, 0, 0],
            accelerationFactors: [],
            scrollPoints: [],
            scrollPointsToMerge: [],
            willEndTimeout: 400
          },
          h = !1,
          y = function(e) {
            Array.isArray(e) ? e.forEach(function(e) {
              return x(e)
            }) : x(e)
          },
          b = function(e) {
            return void 0 === e && (e = {}), Object.values(e).some(function(e) {
              return null == e
            }) ? m : m = a(r({}, l, m, e))
          },
          w = function(e) {
            var i = r({
              event: t,
              isStart: !1,
              isEnding: !1,
              isMomentumCancel: !1,
              isMomentum: g.isMomentum,
              axisDelta: [0, 0, 0],
              axisVelocity: g.axisVelocity,
              axisMovement: g.axisMovement,
              get axisMovementProjection() {
                return o(i.axisMovement, i.axisVelocity.map(function(e) {
                  return void 0 === t && (t = .996), e * t / (1 - t);
                  var t
                }))
              }
            }, e);
            v("wheel", r({}, i, {
              previous: n
            })), n = i
          },
          x = function(e) {
            var n, a, l, u, f, d = (f = function(e, t) {
                if (!t) return e;
                var n = !0 === t ? c : t.map(function(e) {
                  return e ? -1 : 1
                });
                return r({}, e, {
                  axisDelta: e.axisDelta.map(function(e, t) {
                    return e * n[t]
                  })
                })
              }((a = (n = e).deltaX * s[n.deltaMode], l = n.deltaY * s[n.deltaMode], u = (n.deltaZ || 0) * s[n.deltaMode], {
                timeStamp: n.timeStamp,
                axisDelta: [a, l, u]
              }), m.reverseSign), r({}, f, {
                axisDelta: f.axisDelta.map(function(e) {
                  return t = e, Math.min(Math.max(-700, t), 700);
                  var t
                })
              })),
              p = d.axisDelta,
              v = d.timeStamp,
              y = i(p);
            e.preventDefault && function(e, t) {
              var n = m.preventWheelAction,
                r = t[0],
                o = t[1],
                i = t[2];
              if ("boolean" == typeof n) return n;
              switch (n) {
                case "x":
                  return Math.abs(r) >= e;
                case "y":
                  return Math.abs(o) >= e;
                case "z":
                  return Math.abs(i) >= e;
                default:
                  return !1
              }
            }(y, p) && e.preventDefault(), g.isStarted ? g.isMomentum && y > Math.max(2, 2 * g.lastAbsDelta) && (k(!0), P()) : P(), 0 === y && Object.is && Object.is(e.deltaX, -0) ? h = !0 : (t = e, g.axisMovement = o(g.axisMovement, p), g.lastAbsDelta = y, g.scrollPointsToMerge.push({
              axisDelta: p,
              timeStamp: v
            }), E(), w({
              axisDelta: p,
              isStart: !g.isStartPublished
            }), g.isStartPublished = !0, C())
          },
          E = function() {
            var e;
            2 === g.scrollPointsToMerge.length ? (g.scrollPoints.unshift({
              axisDeltaSum: g.scrollPointsToMerge.map(function(e) {
                return e.axisDelta
              }).reduce(o),
              timeStamp: (e = g.scrollPointsToMerge.map(function(e) {
                return e.timeStamp
              }), e.reduce(function(e, t) {
                return e + t
              }) / e.length)
            }), M(), g.scrollPointsToMerge.length = 0, g.scrollPoints.length = 1, g.isMomentum || D()) : g.isStartPublished || O()
          },
          O = function() {
            var e;
            g.axisVelocity = (e = g.scrollPointsToMerge, e[e.length - 1]).axisDelta.map(function(e) {
              return e / g.willEndTimeout
            })
          },
          M = function() {
            var e = g.scrollPoints,
              t = e[0],
              n = e[1];
            if (n && t) {
              var r = t.timeStamp - n.timeStamp;
              if (!(r <= 0)) {
                var o = t.axisDeltaSum.map(function(e) {
                    return e / r
                  }),
                  i = o.map(function(e, t) {
                    return e / (g.axisVelocity[t] || 1)
                  });
                g.axisVelocity = o, g.accelerationFactors.push(i), S(r)
              }
            }
          },
          S = function(e) {
            var t = 10 * Math.ceil(e / 10) * 1.2;
            g.isMomentum || (t = Math.max(100, 2 * t)), g.willEndTimeout = Math.min(1e3, Math.round(t))
          },
          _ = function(e) {
            return 0 === e || e <= .96 && e >= .6
          },
          D = function() {
            if (g.accelerationFactors.length >= 5) {
              if (h && (h = !1, i(g.axisVelocity) >= .2)) return void T();
              var e = g.accelerationFactors.slice(-5);
              e.every(function(e) {
                var t = !!e.reduce(function(e, t) {
                    return e && e < 1 && e === t ? 1 : 0
                  }),
                  n = e.filter(_).length === e.length;
                return t || n
              }) && T(), g.accelerationFactors = e
            }
          },
          T = function() {
            g.isMomentum = !0
          },
          P = function() {
            (g = {
              isStarted: !1,
              isStartPublished: !1,
              isMomentum: !1,
              startTime: 0,
              lastAbsDelta: 1 / 0,
              axisMovement: [0, 0, 0],
              axisVelocity: [0, 0, 0],
              accelerationFactors: [],
              scrollPoints: [],
              scrollPointsToMerge: [],
              willEndTimeout: 400
            }).isStarted = !0, g.startTime = Date.now(), n = void 0, h = !1
          },
          C = function() {
            clearTimeout(u), u = setTimeout(k, g.willEndTimeout)
          },
          k = function(e) {
            void 0 === e && (e = !1), g.isStarted && (g.isMomentum && e ? w({
              isEnding: !0,
              isMomentumCancel: !0
            }) : w({
              isEnding: !0
            }), g.isMomentum = !1, g.isStarted = !1)
          },
          N = function(e) {
            var t = [],
              n = function(n) {
                n.removeEventListener("wheel", e), t = t.filter(function(e) {
                  return e !== n
                })
              };
            return a({
              observe: function(r) {
                return r.addEventListener("wheel", e, {
                    passive: !1
                  }), t.push(r),
                  function() {
                    return n(r)
                  }
              },
              unobserve: n,
              disconnect: function() {
                t.forEach(n)
              }
            })
          }(y),
          A = N.observe,
          R = N.unobserve,
          I = N.disconnect;
        return b(e), a({
          on: d,
          off: p,
          observe: A,
          unobserve: R,
          disconnect: I,
          feedWheel: y,
          updateOptions: b
        })
      };
      var f = {
        active: !0,
        breakpoints: {},
        wheelDraggingClass: "is-wheel-dragging",
        forceWheelAxis: void 0,
        target: void 0
      };
      p.globalOptions = void 0;
      var d = !1;

      function p(e) {
        var t;
        void 0 === e && (e = {});
        var n = function() {};
        return {
          name: "wheelGestures",
          options: e,
          init: function(r, o) {
            var i, a, s = o.mergeOptions,
              c = o.optionsAtMedia,
              l = s(f, p.globalOptions),
              v = s(l, e);
            t = c(v);
            var m = r.internalEngine(),
              g = null != (i = t.target) ? i : r.containerNode().parentNode,
              h = null != (a = t.forceWheelAxis) ? a : m.options.axis,
              y = u({
                preventWheelAction: h,
                reverseSign: [!0, !0, !1]
              });

            function b() {
              S = ("x" === h ? m.containerRect.width : m.containerRect.height) / 2
            }
            var w, x = y.observe(g),
              E = y.on("wheel", function(e) {
                var r = e.axisDelta,
                  o = r[0],
                  i = r[1],
                  a = "x" === h ? o : i,
                  s = "x" === h ? i : o,
                  c = e.isMomentum && e.previous && !e.previous.isMomentum,
                  l = e.isEnding && !e.isMomentum || c;
                Math.abs(a) > Math.abs(s) && !O && !e.isMomentum && !_ && function(e) {
                  try {
                    k(w = new MouseEvent("mousedown", e.event))
                  } catch (e) {
                    return d && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n()
                  }
                  O = !0, M = 0, document.documentElement.addEventListener("mousemove", P, !0), document.documentElement.addEventListener("mouseup", P, !0), document.documentElement.addEventListener("mousedown", P, !0), t.wheelDraggingClass && g.classList.add(t.wheelDraggingClass)
                }(e), _ && e.isEnding && (_ = !1), O && (function(e) {
                  var t = N(e),
                    n = t.isAtBoundary,
                    r = t.primaryAxisDelta;
                  if (n && !e.isMomentum) {
                    if ((M += Math.abs(r)) > S) return _ = !0, D(e), !0
                  } else M = 0;
                  return !1
                }(e) || (l ? D(e) : k(C("mousemove", e))))
              }),
              O = !1,
              M = 0,
              S = 0,
              _ = !1;

            function D(e) {
              O = !1, k(C("mouseup", e)), T(), t.wheelDraggingClass && g.classList.remove(t.wheelDraggingClass)
            }

            function T() {
              document.documentElement.removeEventListener("mousemove", P, !0), document.documentElement.removeEventListener("mouseup", P, !0), document.documentElement.removeEventListener("mousedown", P, !0)
            }

            function P(e) {
              O && e.isTrusted && e.stopImmediatePropagation()
            }

            function C(e, t) {
              var n, r;
              if (h === m.options.axis) {
                var o = t.axisMovement;
                n = o[0], r = o[1]
              } else {
                var i = t.axisMovement;
                r = i[0], n = i[1]
              }
              if (N(t).isAtBoundary) {
                var a = Math.min(M / S, 1),
                  s = M * (n > 0 ? -1 : 1) * (.25 + .5 * a);
                n += s, r += s
              }
              if (!m.options.skipSnaps && !m.options.dragFree) {
                var c = m.containerRect.width,
                  l = m.containerRect.height;
                n = n < 0 ? Math.max(n, -c) : Math.min(n, c), r = r < 0 ? Math.max(r, -l) : Math.min(r, l)
              }
              return new MouseEvent(e, {
                clientX: w.clientX + n,
                clientY: w.clientY + r,
                screenX: w.screenX + n,
                screenY: w.screenY + r,
                movementX: n,
                movementY: r,
                button: 0,
                bubbles: !0,
                cancelable: !0,
                composed: !0
              })
            }

            function k(e) {
              r.containerNode().dispatchEvent(e)
            }

            function N(e) {
              var t = e.axisDelta,
                n = t[0],
                o = t[1],
                i = r.scrollProgress(),
                a = "x" === h ? n : o;
              return {
                isAtBoundary: a < 0 && !(i < 1) || a > 0 && !(i > 0),
                primaryAxisDelta: a
              }
            }
            b(), r.on("resize", b), n = function() {
              x(), E(), r.off("resize", b), T()
            }
          },
          destroy: function() {
            return n()
          }
        }
      }
    },
    32067: (e, t, n) => {
      n.d(t, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => s
      });
      var r = n(39447),
        o = n(42295),
        i = n(62229),
        a = n(69055);
      const s = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? a.s6 : i.Fragment;
        return (0, o.jsx)(n, {
          ...t
        })
      }
    },
    49292: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      const r = {
        direction: "forward",
        speed: 2,
        startDelay: 1e3,
        active: !0,
        breakpoints: {},
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        rootNode: null
      };

      function o(e = {}) {
        let t, n, i, a, s, c = 0,
          l = !1,
          u = !1;

        function f() {
          if (i) return;
          if (l) return;
          n.emit("autoScroll:play");
          const e = n.internalEngine(),
            {
              ownerWindow: r
            } = e;
          c = r.setTimeout(() => {
            e.scrollBody = function(e) {
              const {
                location: r,
                previousLocation: o,
                offsetLocation: i,
                target: a,
                scrollTarget: s,
                index: c,
                indexPrevious: l,
                limit: {
                  reachedMin: u,
                  reachedMax: f,
                  constrain: p
                },
                options: {
                  loop: v
                }
              } = e, m = "forward" === t.direction ? -1 : 1, g = () => E;
              let h = 0,
                y = 0,
                b = r.get(),
                w = 0,
                x = !1;
              const E = {
                direction: () => y,
                duration: () => -1,
                velocity: () => h,
                settled: () => x,
                seek: function() {
                  let e = 0;
                  o.set(r), h = m * t.speed, b += h, r.add(h), a.set(r), e = b - w, y = Math.sign(e), w = b;
                  const g = s.byDistance(0, !1).index;
                  c.get() !== g && (l.set(c.get()), c.set(g), n.emit("select"));
                  const O = "forward" === t.direction ? u(i.get()) : f(i.get());
                  if (!v && O) {
                    x = !0;
                    const e = p(r.get());
                    r.set(e), a.set(r), d()
                  }
                  return E
                },
                useBaseFriction: g,
                useBaseDuration: g,
                useFriction: g,
                useDuration: g
              };
              return E
            }(e), e.animation.start()
          }, a), l = !0
        }

        function d() {
          if (i) return;
          if (!l) return;
          n.emit("autoScroll:stop");
          const e = n.internalEngine(),
            {
              ownerWindow: t
            } = e;
          e.scrollBody = s, t.clearTimeout(c), c = 0, l = !1
        }

        function p() {
          u || d()
        }

        function v() {
          u || y()
        }

        function m() {
          u = !0, d()
        }

        function g() {
          u = !1, f()
        }

        function h() {
          n.off("settle", h), f()
        }

        function y() {
          n.on("settle", h)
        }
        return {
          name: "autoScroll",
          options: e,
          init: function(c, l) {
            n = c;
            const {
              mergeOptions: u,
              optionsAtMedia: h
            } = l, y = u(r, o.globalOptions), b = u(y, e);
            if (t = h(b), n.scrollSnapList().length <= 1) return;
            a = t.startDelay, i = !1, s = n.internalEngine().scrollBody;
            const {
              eventStore: w
            } = n.internalEngine(), x = !!n.internalEngine().options.watchDrag, E = function(e, t) {
              const n = e.rootNode();
              return t && t(n) || n
            }(n, t.rootNode);
            x && n.on("pointerDown", p), x && !t.stopOnInteraction && n.on("pointerUp", v), t.stopOnMouseEnter && w.add(E, "mouseenter", m), t.stopOnMouseEnter && !t.stopOnInteraction && w.add(E, "mouseleave", g), t.stopOnFocusIn && n.on("slideFocusStart", d), t.stopOnFocusIn && !t.stopOnInteraction && w.add(n.containerNode(), "focusout", f), t.playOnInit && f()
          },
          destroy: function() {
            n.off("pointerDown", p).off("pointerUp", v).off("slideFocusStart", d).off("settle", h), d(), i = !0, l = !1
          },
          play: function(e) {
            void 0 !== e && (a = e), f()
          },
          stop: function() {
            l && d()
          },
          reset: function() {
            l && (d(), y())
          },
          isPlaying: function() {
            return l
          }
        }
      }
      o.globalOptions = void 0
    },
    51105: (e, t, n) => {
      n.d(t, {
        v: () => s
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    },
    60211: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    77053: (e, t, n) => {
      n.d(t, {
        DI: () => r.DI
      });
      var r = n(8141);
      n(57461)
    },
    91633: (e, t, n) => {
      n.d(t, {
        m: () => r.m
      });
      var r = n(25778)
    },
    96369: (e, t, n) => {
      function r(e) {
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
        return "symbol" == typeof t ? t : String(t)
      }

      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function(t) {
            var o, i, a;
            o = e, i = t, a = n[t], (i = r(i)) in o ? Object.defineProperty(o, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[i] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function a(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n.d(t, {
        c: () => c
      });
      var s = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        c = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = i(i({}, e.defaultVariants), t);
            for (var o in r) {
              var a, c = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != c) {
                var l = c;
                "boolean" == typeof l && (l = !0 === l ? "true" : "false");
                var u = e.variantClassNames[o][l];
                u && (n += " " + u)
              }
            }
            for (var [f, d] of e.compoundVariants) s(f, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return a(e.variantClassNames, e => a(e, e => e.split(" ")[0]))
            }
          }, t
        }
    }
  }
]);