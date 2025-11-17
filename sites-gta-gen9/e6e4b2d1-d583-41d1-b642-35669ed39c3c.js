try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e6e4b2d1-d583-41d1-b642-35669ed39c3c", e._sentryDebugIdIdentifier = "sentry-dbid-e6e4b2d1-d583-41d1-b642-35669ed39c3c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2649, 6540], {
    12100: (e, t, r) => {
      "use strict";

      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      r.d(t, {
        u: () => lr
      });
      var o, i, a, s, l, c, u, f, d, p, h, g, v, m = function() {
          return o || "undefined" != typeof window && (o = window.gsap) && o.registerPlugin && o
        },
        y = 1,
        b = [],
        x = [],
        w = [],
        _ = Date.now,
        T = function(e, t) {
          return t
        },
        k = function(e, t) {
          return ~w.indexOf(e) && w[w.indexOf(e) + 1][t]
        },
        E = function(e) {
          return !!~p.indexOf(e)
        },
        S = function(e, t, r, n, o) {
          return e.addEventListener(t, r, {
            passive: !1 !== n,
            capture: !!o
          })
        },
        C = function(e, t, r, n) {
          return e.removeEventListener(t, r, !!n)
        },
        M = "scrollLeft",
        P = "scrollTop",
        O = function() {
          return h && h.isPressed || x.cache++
        },
        A = function(e, t) {
          var r = function r(n) {
            if (n || 0 === n) {
              y && (a.history.scrollRestoration = "manual");
              var o = h && h.isPressed;
              n = r.v = Math.round(n) || (h && h.iOS ? 1 : 0), e(n), r.cacheID = x.cache, o && T("ss", n)
            } else(t || x.cache !== r.cacheID || T("ref")) && (r.cacheID = x.cache, r.v = e());
            return r.v + r.offset
          };
          return r.offset = 0, e && r
        },
        D = {
          s: M,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: A(function(e) {
            return arguments.length ? a.scrollTo(e, R.sc()) : a.pageXOffset || s[M] || l[M] || c[M] || 0
          })
        },
        R = {
          s: P,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: D,
          sc: A(function(e) {
            return arguments.length ? a.scrollTo(D.sc(), e) : a.pageYOffset || s[P] || l[P] || c[P] || 0
          })
        },
        Y = function(e, t) {
          return (t && t._ctx && t._ctx.selector || o.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== o.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
        },
        I = function(e, t) {
          var r = t.s,
            n = t.sc;
          E(e) && (e = s.scrollingElement || l);
          var i = x.indexOf(e),
            a = n === R.sc ? 1 : 2;
          !~i && (i = x.push(e) - 1), x[i + a] || S(e, "scroll", O);
          var c = x[i + a],
            u = c || (x[i + a] = A(k(e, r), !0) || (E(e) ? n : A(function(t) {
              return arguments.length ? e[r] = t : e[r]
            })));
          return u.target = e, c || (u.smooth = "smooth" === o.getProperty(e, "scrollBehavior")), u
        },
        X = function(e, t, r) {
          var n = e,
            o = e,
            i = _(),
            a = i,
            s = t || 50,
            l = Math.max(500, 3 * s),
            c = function(e, t) {
              var l = _();
              t || l - i > s ? (o = n, n = e, a = i, i = l) : r ? n += e : n = o + (e - o) / (l - a) * (i - a)
            };
          return {
            update: c,
            reset: function() {
              o = n = r ? 0 : n, a = i = 0
            },
            getVelocity: function(e) {
              var t = a,
                s = o,
                u = _();
              return (e || 0 === e) && e !== n && c(e), i === a || u - a > l ? 0 : (n + (r ? s : -s)) / ((r ? u : i) - t) * 1e3
            }
          }
        },
        N = function(e, t) {
          return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
        },
        z = function(e) {
          var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(r) ? t : r
        },
        B = function() {
          var e, t, r, n;
          (d = o.core.globals().ScrollTrigger) && d.core && (e = d.core, t = e.bridge || {}, r = e._scrollers, n = e._proxies, r.push.apply(r, x), n.push.apply(n, w), x = r, w = n, T = function(e, r) {
            return t[e](r)
          })
        },
        L = function(e) {
          return o = e || m(), !i && o && "undefined" != typeof document && document.body && (a = window, s = document, l = s.documentElement, c = s.body, p = [a, s, l, c], o.utils.clamp, v = o.core.context || function() {}, f = "onpointerenter" in c ? "pointer" : "mouse", u = F.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, g = F.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return y = 0
          }, 500), B(), i = 1), i
        };
      D.op = R, x.cache = 0;
      var F = function() {
        function e(e) {
          this.init(e)
        }
        var t, r;
        return e.prototype.init = function(e) {
          i || L(o) || console.warn("Please gsap.registerPlugin(Observer)"), d || B();
          var t = e.tolerance,
            r = e.dragMinimum,
            n = e.type,
            p = e.target,
            m = e.lineHeight,
            y = e.debounce,
            x = e.preventDefault,
            w = e.onStop,
            T = e.onStopDelay,
            k = e.ignore,
            M = e.wheelSpeed,
            P = e.event,
            A = e.onDragStart,
            F = e.onDragEnd,
            H = e.onDrag,
            W = e.onPress,
            q = e.onRelease,
            U = e.onRight,
            V = e.onLeft,
            G = e.onUp,
            j = e.onDown,
            K = e.onChangeX,
            Z = e.onChangeY,
            $ = e.onChange,
            J = e.onToggleX,
            Q = e.onToggleY,
            ee = e.onHover,
            te = e.onHoverEnd,
            re = e.onMove,
            ne = e.ignoreCheck,
            oe = e.isNormalizer,
            ie = e.onGestureStart,
            ae = e.onGestureEnd,
            se = e.onWheel,
            le = e.onEnable,
            ce = e.onDisable,
            ue = e.onClick,
            fe = e.scrollSpeed,
            de = e.capture,
            pe = e.allowClicks,
            he = e.lockAxis,
            ge = e.onLockAxis;
          this.target = p = Y(p) || l, this.vars = e, k && (k = o.utils.toArray(k)), t = t || 1e-9, r = r || 0, M = M || 1, fe = fe || 1, n = n || "wheel,touch,pointer", y = !1 !== y, m || (m = parseFloat(a.getComputedStyle(c).lineHeight) || 22);
          var ve, me, ye, be, xe, we, _e, Te = this,
            ke = 0,
            Ee = 0,
            Se = e.passive || !x,
            Ce = I(p, D),
            Me = I(p, R),
            Pe = Ce(),
            Oe = Me(),
            Ae = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === g[0],
            De = E(p),
            Re = p.ownerDocument || s,
            Ye = [0, 0, 0],
            Ie = [0, 0, 0],
            Xe = 0,
            Ne = function() {
              return Xe = _()
            },
            ze = function(e, t) {
              return (Te.event = e) && k && ~k.indexOf(e.target) || t && Ae && "touch" !== e.pointerType || ne && ne(e, t)
            },
            Be = function() {
              var e = Te.deltaX = z(Ye),
                r = Te.deltaY = z(Ie),
                n = Math.abs(e) >= t,
                o = Math.abs(r) >= t;
              $ && (n || o) && $(Te, e, r, Ye, Ie), n && (U && Te.deltaX > 0 && U(Te), V && Te.deltaX < 0 && V(Te), K && K(Te), J && Te.deltaX < 0 != ke < 0 && J(Te), ke = Te.deltaX, Ye[0] = Ye[1] = Ye[2] = 0), o && (j && Te.deltaY > 0 && j(Te), G && Te.deltaY < 0 && G(Te), Z && Z(Te), Q && Te.deltaY < 0 != Ee < 0 && Q(Te), Ee = Te.deltaY, Ie[0] = Ie[1] = Ie[2] = 0), (be || ye) && (re && re(Te), ye && (H(Te), ye = !1), be = !1), we && !(we = !1) && ge && ge(Te), xe && (se(Te), xe = !1), ve = 0
            },
            Le = function(e, t, r) {
              Ye[r] += e, Ie[r] += t, Te._vx.update(e), Te._vy.update(t), y ? ve || (ve = requestAnimationFrame(Be)) : Be()
            },
            Fe = function(e, t) {
              he && !_e && (Te.axis = _e = Math.abs(e) > Math.abs(t) ? "x" : "y", we = !0), "y" !== _e && (Ye[2] += e, Te._vx.update(e, !0)), "x" !== _e && (Ie[2] += t, Te._vy.update(t, !0)), y ? ve || (ve = requestAnimationFrame(Be)) : Be()
            },
            He = function(e) {
              if (!ze(e, 1)) {
                var t = (e = N(e, x)).clientX,
                  n = e.clientY,
                  o = t - Te.x,
                  i = n - Te.y,
                  a = Te.isDragging;
                Te.x = t, Te.y = n, (a || Math.abs(Te.startX - t) >= r || Math.abs(Te.startY - n) >= r) && (H && (ye = !0), a || (Te.isDragging = !0), Fe(o, i), a || A && A(Te))
              }
            },
            We = Te.onPress = function(e) {
              ze(e, 1) || e && e.button || (Te.axis = _e = null, me.pause(), Te.isPressed = !0, e = N(e), ke = Ee = 0, Te.startX = Te.x = e.clientX, Te.startY = Te.y = e.clientY, Te._vx.reset(), Te._vy.reset(), S(oe ? p : Re, g[1], He, Se, !0), Te.deltaX = Te.deltaY = 0, W && W(Te))
            },
            qe = Te.onRelease = function(e) {
              if (!ze(e, 1)) {
                C(oe ? p : Re, g[1], He, !0);
                var t = !isNaN(Te.y - Te.startY),
                  r = Te.isDragging,
                  n = r && (Math.abs(Te.x - Te.startX) > 3 || Math.abs(Te.y - Te.startY) > 3),
                  i = N(e);
                !n && t && (Te._vx.reset(), Te._vy.reset(), x && pe && o.delayedCall(.08, function() {
                  if (_() - Xe > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (Re.createEvent) {
                    var t = Re.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, a, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                  }
                })), Te.isDragging = Te.isGesturing = Te.isPressed = !1, w && r && !oe && me.restart(!0), F && r && F(Te), q && q(Te, n)
              }
            },
            Ue = function(e) {
              return e.touches && e.touches.length > 1 && (Te.isGesturing = !0) && ie(e, Te.isDragging)
            },
            Ve = function() {
              return (Te.isGesturing = !1) || ae(Te)
            },
            Ge = function(e) {
              if (!ze(e)) {
                var t = Ce(),
                  r = Me();
                Le((t - Pe) * fe, (r - Oe) * fe, 1), Pe = t, Oe = r, w && me.restart(!0)
              }
            },
            je = function(e) {
              if (!ze(e)) {
                e = N(e, x), se && (xe = !0);
                var t = (1 === e.deltaMode ? m : 2 === e.deltaMode ? a.innerHeight : 1) * M;
                Le(e.deltaX * t, e.deltaY * t, 0), w && !oe && me.restart(!0)
              }
            },
            Ke = function(e) {
              if (!ze(e)) {
                var t = e.clientX,
                  r = e.clientY,
                  n = t - Te.x,
                  o = r - Te.y;
                Te.x = t, Te.y = r, be = !0, w && me.restart(!0), (n || o) && Fe(n, o)
              }
            },
            Ze = function(e) {
              Te.event = e, ee(Te)
            },
            $e = function(e) {
              Te.event = e, te(Te)
            },
            Je = function(e) {
              return ze(e) || N(e, x) && ue(Te)
            };
          me = Te._dc = o.delayedCall(T || .25, function() {
            Te._vx.reset(), Te._vy.reset(), me.pause(), w && w(Te)
          }).pause(), Te.deltaX = Te.deltaY = 0, Te._vx = X(0, 50, !0), Te._vy = X(0, 50, !0), Te.scrollX = Ce, Te.scrollY = Me, Te.isDragging = Te.isGesturing = Te.isPressed = !1, v(this), Te.enable = function(e) {
            return Te.isEnabled || (S(De ? Re : p, "scroll", O), n.indexOf("scroll") >= 0 && S(De ? Re : p, "scroll", Ge, Se, de), n.indexOf("wheel") >= 0 && S(p, "wheel", je, Se, de), (n.indexOf("touch") >= 0 && u || n.indexOf("pointer") >= 0) && (S(p, g[0], We, Se, de), S(Re, g[2], qe), S(Re, g[3], qe), pe && S(p, "click", Ne, !0, !0), ue && S(p, "click", Je), ie && S(Re, "gesturestart", Ue), ae && S(Re, "gestureend", Ve), ee && S(p, f + "enter", Ze), te && S(p, f + "leave", $e), re && S(p, f + "move", Ke)), Te.isEnabled = !0, e && e.type && We(e), le && le(Te)), Te
          }, Te.disable = function() {
            Te.isEnabled && (b.filter(function(e) {
              return e !== Te && E(e.target)
            }).length || C(De ? Re : p, "scroll", O), Te.isPressed && (Te._vx.reset(), Te._vy.reset(), C(oe ? p : Re, g[1], He, !0)), C(De ? Re : p, "scroll", Ge, de), C(p, "wheel", je, de), C(p, g[0], We, de), C(Re, g[2], qe), C(Re, g[3], qe), C(p, "click", Ne, !0), C(p, "click", Je), C(Re, "gesturestart", Ue), C(Re, "gestureend", Ve), C(p, f + "enter", Ze), C(p, f + "leave", $e), C(p, f + "move", Ke), Te.isEnabled = Te.isPressed = Te.isDragging = !1, ce && ce(Te))
          }, Te.kill = Te.revert = function() {
            Te.disable();
            var e = b.indexOf(Te);
            e >= 0 && b.splice(e, 1), h === Te && (h = 0)
          }, b.push(Te), oe && E(p) && (h = Te), Te.enable(P)
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
      F.version = "3.12.5", F.create = function(e) {
        return new F(e)
      }, F.register = L, F.getAll = function() {
        return b.slice()
      }, F.getById = function(e) {
        return b.filter(function(t) {
          return t.vars.id === e
        })[0]
      }, m() && o.registerPlugin(F);
      var H, W, q, U, V, G, j, K, Z, $, J, Q, ee, te, re, ne, oe, ie, ae, se, le, ce, ue, fe, de, pe, he, ge, ve, me, ye, be, xe, we, _e, Te, ke, Ee, Se = 1,
        Ce = Date.now,
        Me = Ce(),
        Pe = 0,
        Oe = 0,
        Ae = function(e, t, r) {
          var n = Ue(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return r["_" + t + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
        },
        De = function(e, t) {
          return !t || Ue(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
        },
        Re = function e() {
          return Oe && requestAnimationFrame(e)
        },
        Ye = function() {
          return te = 1
        },
        Ie = function() {
          return te = 0
        },
        Xe = function(e) {
          return e
        },
        Ne = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        ze = function() {
          return "undefined" != typeof window
        },
        Be = function() {
          return H || ze() && (H = window.gsap) && H.registerPlugin && H
        },
        Le = function(e) {
          return !!~j.indexOf(e)
        },
        Fe = function(e) {
          return ("Height" === e ? ye : q["inner" + e]) || V["client" + e] || G["client" + e]
        },
        He = function(e) {
          return k(e, "getBoundingClientRect") || (Le(e) ? function() {
            return tr.width = q.innerWidth, tr.height = ye, tr
          } : function() {
            return ht(e)
          })
        },
        We = function(e, t) {
          var r = t.s,
            n = t.d2,
            o = t.d,
            i = t.a;
          return Math.max(0, (r = "scroll" + n) && (i = k(e, r)) ? i() - He(e)()[o] : Le(e) ? (V[r] || G[r]) - Fe(n) : e[r] - e["offset" + n])
        },
        qe = function(e, t) {
          for (var r = 0; r < ae.length; r += 3)(!t || ~t.indexOf(ae[r + 1])) && e(ae[r], ae[r + 1], ae[r + 2])
        },
        Ue = function(e) {
          return "string" == typeof e
        },
        Ve = function(e) {
          return "function" == typeof e
        },
        Ge = function(e) {
          return "number" == typeof e
        },
        je = function(e) {
          return "object" == typeof e
        },
        Ke = function(e, t, r) {
          return e && e.progress(t ? 0 : 1) && r && e.pause()
        },
        Ze = function(e, t) {
          if (e.enabled) {
            var r = e._ctx ? e._ctx.add(function() {
              return t(e)
            }) : t(e);
            r && r.totalTime && (e.callbackAnimation = r)
          }
        },
        $e = Math.abs,
        Je = "left",
        Qe = "right",
        et = "bottom",
        tt = "width",
        rt = "height",
        nt = "Right",
        ot = "Left",
        it = "Top",
        at = "Bottom",
        st = "padding",
        lt = "margin",
        ct = "Width",
        ut = "Height",
        ft = "px",
        dt = function(e) {
          return q.getComputedStyle(e)
        },
        pt = function(e, t) {
          for (var r in t) r in e || (e[r] = t[r]);
          return e
        },
        ht = function(e, t) {
          var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== dt(e)[re] && H.to(e, {
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
        gt = function(e, t) {
          var r = t.d2;
          return e["offset" + r] || e["client" + r] || 0
        },
        vt = function(e) {
          var t, r = [],
            n = e.labels,
            o = e.duration();
          for (t in n) r.push(n[t] / o);
          return r
        },
        mt = function(e) {
          var t = H.utils.snap(e),
            r = Array.isArray(e) && e.slice(0).sort(function(e, t) {
              return e - t
            });
          return r ? function(e, n, o) {
            var i;
            if (void 0 === o && (o = .001), !n) return t(e);
            if (n > 0) {
              for (e -= o, i = 0; i < r.length; i++)
                if (r[i] >= e) return r[i];
              return r[i - 1]
            }
            for (i = r.length, e += o; i--;)
              if (r[i] <= e) return r[i];
            return r[0]
          } : function(r, n, o) {
            void 0 === o && (o = .001);
            var i = t(r);
            return !n || Math.abs(i - r) < o || i - r < 0 == n < 0 ? i : t(n < 0 ? r - e : r + e)
          }
        },
        yt = function(e, t, r, n) {
          return r.split(",").forEach(function(r) {
            return e(t, r, n)
          })
        },
        bt = function(e, t, r, n, o) {
          return e.addEventListener(t, r, {
            passive: !n,
            capture: !!o
          })
        },
        xt = function(e, t, r, n) {
          return e.removeEventListener(t, r, !!n)
        },
        wt = function(e, t, r) {
          (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
        },
        _t = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        Tt = {
          toggleActions: "play",
          anticipatePin: 0
        },
        kt = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        Et = function(e, t) {
          if (Ue(e)) {
            var r = e.indexOf("="),
              n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in kt ? kt[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        St = function(e, t, r, n, o, i, a, s) {
          var l = o.startColor,
            c = o.endColor,
            u = o.fontSize,
            f = o.indent,
            d = o.fontWeight,
            p = U.createElement("div"),
            h = Le(r) || "fixed" === k(r, "pinType"),
            g = -1 !== e.indexOf("scroller"),
            v = h ? G : r,
            m = -1 !== e.indexOf("start"),
            y = m ? l : c,
            b = "border-color:" + y + ";font-size:" + u + ";color:" + y + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((g || s) && h ? "fixed;" : "absolute;"), (g || s || !h) && (b += (n === R ? Qe : et) + ":" + (i + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = m, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p), p._offset = p["offset" + n.op.d2], Ct(p, 0, n, m), p
        },
        Ct = function(e, t, r, n) {
          var o = {
              display: "block"
            },
            i = r[n ? "os2" : "p2"],
            a = r[n ? "p2" : "os2"];
          e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + ct] = 1, o["border" + a + ct] = 0, o[r.p] = t + "px", H.set(e, o)
        },
        Mt = [],
        Pt = {},
        Ot = function() {
          return Ce() - Pe > 34 && (_e || (_e = requestAnimationFrame(jt)))
        },
        At = function() {
          (!ue || !ue.isPressed || ue.startX > G.clientWidth) && (x.cache++, ue ? _e || (_e = requestAnimationFrame(jt)) : jt(), Pe || Nt("scrollStart"), Pe = Ce())
        },
        Dt = function() {
          pe = q.innerWidth, de = q.innerHeight
        },
        Rt = function() {
          x.cache++, !ee && !ce && !U.fullscreenElement && !U.webkitFullscreenElement && (!fe || pe !== q.innerWidth || Math.abs(q.innerHeight - de) > .25 * q.innerHeight) && K.restart(!0)
        },
        Yt = {},
        It = [],
        Xt = function e() {
          return xt(lr, "scrollEnd", e) || Ut(!0)
        },
        Nt = function(e) {
          return Yt[e] && Yt[e].map(function(e) {
            return e()
          }) || It
        },
        zt = [],
        Bt = function(e) {
          for (var t = 0; t < zt.length; t += 5)(!e || zt[t + 4] && zt[t + 4].query === e) && (zt[t].style.cssText = zt[t + 1], zt[t].getBBox && zt[t].setAttribute("transform", zt[t + 2] || ""), zt[t + 3].uncache = 1)
        },
        Lt = function(e, t) {
          var r;
          for (ne = 0; ne < Mt.length; ne++) !(r = Mt[ne]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
          be = !0, t && Bt(t), t || Nt("revert")
        },
        Ft = function(e, t) {
          x.cache++, (t || !Te) && x.forEach(function(e) {
            return Ve(e) && e.cacheID++ && (e.rec = 0)
          }), Ue(e) && (q.history.scrollRestoration = ve = e)
        },
        Ht = 0,
        Wt = function() {
          G.appendChild(me), ye = !ue && me.offsetHeight || q.innerHeight, G.removeChild(me)
        },
        qt = function(e) {
          return Z(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
          })
        },
        Ut = function(e, t) {
          if (!Pe || e || be) {
            Wt(), Te = lr.isRefreshing = !0, x.forEach(function(e) {
              return Ve(e) && ++e.cacheID && (e.rec = e())
            });
            var r = Nt("refreshInit");
            se && lr.sort(), t || Lt(), x.forEach(function(e) {
              Ve(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
            }), Mt.slice(0).forEach(function(e) {
              return e.refresh()
            }), be = !1, Mt.forEach(function(e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  r = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
              }
            }), xe = 1, qt(!0), Mt.forEach(function(e) {
              var t = We(e.scroller, e._dir),
                r = "max" === e.vars.end || e._endClamp && e.end > t,
                n = e._startClamp && e.start >= t;
              (r || n) && e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0)
            }), qt(!1), xe = 0, r.forEach(function(e) {
              return e && e.render && e.render(-1)
            }), x.forEach(function(e) {
              Ve(e) && (e.smooth && requestAnimationFrame(function() {
                return e.target.style.scrollBehavior = "smooth"
              }), e.rec && e(e.rec))
            }), Ft(ve, 1), K.pause(), Ht++, Te = 2, jt(2), Mt.forEach(function(e) {
              return Ve(e.vars.onRefresh) && e.vars.onRefresh(e)
            }), Te = lr.isRefreshing = !1, Nt("refresh")
          } else bt(lr, "scrollEnd", Xt)
        },
        Vt = 0,
        Gt = 1,
        jt = function(e) {
          if (2 === e || !Te && !be) {
            lr.isUpdating = !0, Ee && Ee.update(0);
            var t = Mt.length,
              r = Ce(),
              n = r - Me >= 50,
              o = t && Mt[0].scroll();
            if (Gt = Vt > o ? -1 : 1, Te || (Vt = o), n && (Pe && !te && r - Pe > 200 && (Pe = 0, Nt("scrollEnd")), J = Me, Me = r), Gt < 0) {
              for (ne = t; ne-- > 0;) Mt[ne] && Mt[ne].update(0, n);
              Gt = 1
            } else
              for (ne = 0; ne < t; ne++) Mt[ne] && Mt[ne].update(0, n);
            lr.isUpdating = !1
          }
          _e = 0
        },
        Kt = [Je, "top", et, Qe, lt + at, lt + nt, lt + it, lt + ot, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Zt = Kt.concat([tt, rt, "boxSizing", "max" + ct, "max" + ut, "position", lt, st, st + it, st + nt, st + at, st + ot]),
        $t = function(e, t, r, n) {
          if (!e._gsap.swappedIn) {
            for (var o, i = Kt.length, a = t.style, s = e.style; i--;) a[o = Kt[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[et] = s[Qe] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[tt] = gt(e, D) + ft, a[rt] = gt(e, R) + ft, a[st] = s[lt] = s.top = s[Je] = "0", Qt(n), s[tt] = s["max" + ct] = r[tt], s[rt] = s["max" + ut] = r[rt], s[st] = r[st], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Jt = /([A-Z])/g,
        Qt = function(e) {
          if (e) {
            var t, r, n = e.t.style,
              o = e.length,
              i = 0;
            for ((e.t._gsap || H.core.getCache(e.t)).uncache = 1; i < o; i += 2) r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Jt, "-$1").toLowerCase())
          }
        },
        er = function(e) {
          for (var t = Zt.length, r = e.style, n = [], o = 0; o < t; o++) n.push(Zt[o], r[Zt[o]]);
          return n.t = e, n
        },
        tr = {
          left: 0,
          top: 0
        },
        rr = function(e, t, r, n, o, i, a, s, l, c, u, f, d, p) {
          Ve(e) && (e = e(s)), Ue(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Et("0" + e.substr(3), r) : 0));
          var h, g, v, m = d ? d.time() : 0;
          if (d && d.seek(0), isNaN(e) || (e = +e), Ge(e)) d && (e = H.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && Ct(a, r, n, !0);
          else {
            Ve(t) && (t = t(s));
            var y, b, x, w, _ = (e || "0").split(" ");
            v = Y(t, s) || G, (y = ht(v) || {}) && (y.left || y.top) || "none" !== dt(v).display || (w = v.style.display, v.style.display = "block", y = ht(v), w ? v.style.display = w : v.style.removeProperty("display")), b = Et(_[0], y[n.d]), x = Et(_[1] || "0", r), e = y[n.p] - l[n.p] - c + b + o - x, a && Ct(a, x, n, r - x < 20 || a._isStart && x > 20), r -= r - x
          }
          if (p && (s[p] = e || -.001, e < 0 && (e = 0)), i) {
            var T = e + r,
              k = i._isStart;
            h = "scroll" + n.d2, Ct(i, T, n, k && T > 20 || !k && (u ? Math.max(G[h], V[h]) : i.parentNode[h]) <= T + 1), u && (l = ht(a), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + ft))
          }
          return d && v && (h = ht(v), d.seek(f), g = ht(v), d._caScrollDist = h[n.p] - g[n.p], e = e / d._caScrollDist * f), d && d.seek(m), d ? e : Math.round(e)
        },
        nr = /(webkit|moz|length|cssText|inset)/i,
        or = function(e, t, r, n) {
          if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === G) {
              for (o in e._stOrig = a.cssText, i = dt(e)) + o || nr.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
              a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            H.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        ir = function(e, t, r) {
          var n = t,
            o = n;
          return function(t) {
            var i = Math.round(e());
            return i !== n && i !== o && Math.abs(i - n) > 3 && Math.abs(i - o) > 3 && (t = i, r && r()), o = n, n = t, t
          }
        },
        ar = function(e, t, r) {
          var n = {};
          n[t.p] = "+=" + r, H.set(e, n)
        },
        sr = function(e, t) {
          var r = I(e, t),
            n = "_scroll" + t.p2,
            o = function t(o, i, a, s, l) {
              var c = t.tween,
                u = i.onComplete,
                f = {};
              a = a || r();
              var d = ir(r, a, function() {
                c.kill(), t.tween = 0
              });
              return l = s && l || 0, s = s || o - a, c && c.kill(), i[n] = o, i.inherit = !1, i.modifiers = f, f[n] = function() {
                return d(a + s * c.ratio + l * c.ratio * c.ratio)
              }, i.onUpdate = function() {
                x.cache++, t.tween && jt()
              }, i.onComplete = function() {
                t.tween = 0, u && u.call(c)
              }, c = t.tween = H.to(e, i)
            };
          return e[n] = r, r.wheelHandler = function() {
            return o.tween && o.tween.kill() && (o.tween = 0)
          }, bt(e, "wheel", r.wheelHandler), lr.isTouch && bt(e, "touchmove", r.wheelHandler), o
        },
        lr = function() {
          function e(t, r) {
            W || e.register(H) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ge(this), this.init(t, r)
          }
          return e.prototype.init = function(t, r) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Oe) {
              var n, o, i, a, s, l, c, u, f, d, p, h, g, v, m, y, b, _, T, E, S, C, M, P, O, A, X, N, z, B, L, F, W, j, K, Q, re, oe, ie, ae, ce, ue, fe = t = pt(Ue(t) || Ge(t) || t.nodeType ? {
                  trigger: t
                } : t, Tt),
                de = fe.onUpdate,
                pe = fe.toggleClass,
                he = fe.id,
                ge = fe.onToggle,
                ve = fe.onRefresh,
                me = fe.scrub,
                ye = fe.trigger,
                be = fe.pin,
                _e = fe.pinSpacing,
                Me = fe.invalidateOnRefresh,
                Re = fe.anticipatePin,
                Ye = fe.onScrubComplete,
                Ie = fe.onSnapComplete,
                ze = fe.once,
                Be = fe.snap,
                qe = fe.pinReparent,
                Je = fe.pinSpacer,
                Qe = fe.containerAnimation,
                et = fe.fastScrollEnd,
                yt = fe.preventOverlaps,
                wt = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? D : R,
                kt = !me && 0 !== me,
                Ct = Y(t.scroller || q),
                Ot = H.core.getCache(Ct),
                Dt = Le(Ct),
                Yt = "fixed" === ("pinType" in t ? t.pinType : k(Ct, "pinType") || Dt && "fixed"),
                It = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                Nt = kt && t.toggleActions.split(" "),
                zt = "markers" in t ? t.markers : Tt.markers,
                Bt = Dt ? 0 : parseFloat(dt(Ct)["border" + wt.p2 + ct]) || 0,
                Lt = this,
                Ft = t.onRefreshInit && function() {
                  return t.onRefreshInit(Lt)
                },
                Wt = function(e, t, r) {
                  var n = r.d,
                    o = r.d2,
                    i = r.a;
                  return (i = k(e, "getBoundingClientRect")) ? function() {
                    return i()[n]
                  } : function() {
                    return (t ? Fe(o) : e["client" + o]) || 0
                  }
                }(Ct, Dt, wt),
                qt = function(e, t) {
                  return !t || ~w.indexOf(e) ? He(e) : function() {
                    return tr
                  }
                }(Ct, Dt),
                Vt = 0,
                jt = 0,
                Kt = 0,
                Zt = I(Ct, wt);
              if (Lt._startClamp = Lt._endClamp = !1, Lt._dir = wt, Re *= 45, Lt.scroller = Ct, Lt.scroll = Qe ? Qe.time.bind(Qe) : Zt, a = Zt(), Lt.vars = t, r = r || t.animation, "refreshPriority" in t && (se = 1, -9999 === t.refreshPriority && (Ee = Lt)), Ot.tweenScroll = Ot.tweenScroll || {
                  top: sr(Ct, R),
                  left: sr(Ct, D)
                }, Lt.tweenTo = n = Ot.tweenScroll[wt.p], Lt.scrubDuration = function(e) {
                  (W = Ge(e) && e) ? F ? F.duration(e) : F = H.to(r, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: W,
                    paused: !0,
                    onComplete: function() {
                      return Ye && Ye(Lt)
                    }
                  }): (F && F.progress(1).kill(), F = 0)
                }, r && (r.vars.lazy = !1, r._initted && !Lt.isReverted || !1 !== r.vars.immediateRender && !1 !== t.immediateRender && r.duration() && r.render(0, !0, !0), Lt.animation = r.pause(), r.scrollTrigger = Lt, Lt.scrubDuration(me), B = 0, he || (he = r.vars.id)), Be && (je(Be) && !Be.push || (Be = {
                  snapTo: Be
                }), "scrollBehavior" in G.style && H.set(Dt ? [G, V] : Ct, {
                  scrollBehavior: "auto"
                }), x.forEach(function(e) {
                  return Ve(e) && e.target === (Dt ? U.scrollingElement || V : Ct) && (e.smooth = !1)
                }), i = Ve(Be.snapTo) ? Be.snapTo : "labels" === Be.snapTo ? function(e) {
                  return function(t) {
                    return H.utils.snap(vt(e), t)
                  }
                }(r) : "labelsDirectional" === Be.snapTo ? (ae = r, function(e, t) {
                  return mt(vt(ae))(e, t.direction)
                }) : !1 !== Be.directional ? function(e, t) {
                  return mt(Be.snapTo)(e, Ce() - jt < 500 ? 0 : t.direction)
                } : H.utils.snap(Be.snapTo), j = Be.duration || {
                  min: .1,
                  max: 2
                }, j = je(j) ? $(j.min, j.max) : $(j, j), K = H.delayedCall(Be.delay || W / 2 || .1, function() {
                  var e = Zt(),
                    t = Ce() - jt < 500,
                    o = n.tween;
                  if (!(t || Math.abs(Lt.getVelocity()) < 10) || o || te || Vt === e) Lt.isActive && Vt !== e && K.restart(!0);
                  else {
                    var a, s, u = (e - l) / v,
                      f = r && !kt ? r.totalProgress() : u,
                      d = t ? 0 : (f - L) / (Ce() - J) * 1e3 || 0,
                      p = H.utils.clamp(-u, 1 - u, $e(d / 2) * d / .185),
                      h = u + (!1 === Be.inertia ? 0 : p),
                      g = Be,
                      m = g.onStart,
                      y = g.onInterrupt,
                      b = g.onComplete;
                    if (a = i(h, Lt), Ge(a) || (a = h), s = Math.round(l + a * v), e <= c && e >= l && s !== e) {
                      if (o && !o._initted && o.data <= $e(s - e)) return;
                      !1 === Be.inertia && (p = a - u), n(s, {
                        duration: j($e(.185 * Math.max($e(h - f), $e(a - f)) / d / .05 || 0)),
                        ease: Be.ease || "power3",
                        data: $e(s - e),
                        onInterrupt: function() {
                          return K.restart(!0) && y && y(Lt)
                        },
                        onComplete: function() {
                          Lt.update(), Vt = Zt(), r && (F ? F.resetTo("totalProgress", a, r._tTime / r._tDur) : r.progress(a)), B = L = r && !kt ? r.totalProgress() : Lt.progress, Ie && Ie(Lt), b && b(Lt)
                        }
                      }, e, p * v, s - e - p * v), m && m(Lt, n.tween)
                    }
                  }
                }).pause()), he && (Pt[he] = Lt), (ie = (ye = Lt.trigger = Y(ye || !0 !== be && be)) && ye._gsap && ye._gsap.stRevert) && (ie = ie(Lt)), be = !0 === be ? ye : Y(be), Ue(pe) && (pe = {
                  targets: ye,
                  className: pe
                }), be && (!1 === _e || _e === lt || (_e = !(!_e && be.parentNode && be.parentNode.style && "flex" === dt(be.parentNode).display) && st), Lt.pin = be, (o = H.core.getCache(be)).spacer ? m = o.pinState : (Je && ((Je = Y(Je)) && !Je.nodeType && (Je = Je.current || Je.nativeElement), o.spacerIsNative = !!Je, Je && (o.spacerState = er(Je))), o.spacer = _ = Je || U.createElement("div"), _.classList.add("pin-spacer"), he && _.classList.add("pin-spacer-" + he), o.pinState = m = er(be)), !1 !== t.force3D && H.set(be, {
                  force3D: !0
                }), Lt.spacer = _ = o.spacer, z = dt(be), P = z[_e + wt.os2], E = H.getProperty(be), S = H.quickSetter(be, wt.a, ft), $t(be, _, z), b = er(be)), zt) {
                h = je(zt) ? pt(zt, _t) : _t, d = St("scroller-start", he, Ct, wt, h, 0), p = St("scroller-end", he, Ct, wt, h, 0, d), T = d["offset" + wt.op.d2];
                var Jt = Y(k(Ct, "content") || Ct);
                u = this.markerStart = St("start", he, Jt, wt, h, T, 0, Qe), f = this.markerEnd = St("end", he, Jt, wt, h, T, 0, Qe), Qe && (oe = H.quickSetter([u, f], wt.a, ft)), Yt || w.length && !0 === k(Ct, "fixedMarkers") || (ue = dt(ce = Dt ? G : Ct).position, ce.style.position = "absolute" === ue || "fixed" === ue ? ue : "relative", H.set([d, p], {
                  force3D: !0
                }), A = H.quickSetter(d, wt.a, ft), N = H.quickSetter(p, wt.a, ft))
              }
              if (Qe) {
                var nr = Qe.vars.onUpdate,
                  ir = Qe.vars.onUpdateParams;
                Qe.eventCallback("onUpdate", function() {
                  Lt.update(0, 0, 1), nr && nr.apply(Qe, ir || [])
                })
              }
              if (Lt.previous = function() {
                  return Mt[Mt.indexOf(Lt) - 1]
                }, Lt.next = function() {
                  return Mt[Mt.indexOf(Lt) + 1]
                }, Lt.revert = function(e, t) {
                  if (!t) return Lt.kill(!0);
                  var n = !1 !== e || !Lt.enabled,
                    o = ee;
                  n !== Lt.isReverted && (n && (Q = Math.max(Zt(), Lt.scroll.rec || 0), Kt = Lt.progress, re = r && r.progress()), u && [u, f, d, p].forEach(function(e) {
                    return e.style.display = n ? "none" : "block"
                  }), n && (ee = Lt, Lt.update(n)), !be || qe && Lt.isActive || (n ? function(e, t, r) {
                    Qt(r);
                    var n = e._gsap;
                    if (n.spacerIsNative) Qt(n.spacerState);
                    else if (e._gsap.swappedIn) {
                      var o = t.parentNode;
                      o && (o.insertBefore(e, t), o.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                  }(be, _, m) : $t(be, _, dt(be), O)), n || Lt.update(n), ee = o, Lt.isReverted = n)
                }, Lt.refresh = function(o, i, h, x) {
                  if (!ee && Lt.enabled || i)
                    if (be && o && Pe) bt(e, "scrollEnd", Xt);
                    else {
                      !Te && Ft && Ft(Lt), ee = Lt, n.tween && !h && (n.tween.kill(), n.tween = 0), F && F.pause(), Me && r && r.revert({
                        kill: !1
                      }).invalidate(), Lt.isReverted || Lt.revert(!0, !0), Lt._subPinOffset = !1;
                      var w, T, k, S, P, A, N, z, B, L, W, q, j, Z = Wt(),
                        $ = qt(),
                        J = Qe ? Qe.duration() : We(Ct, wt),
                        te = v <= .01,
                        ne = 0,
                        oe = x || 0,
                        ie = je(h) ? h.end : t.end,
                        ae = t.endTrigger || ye,
                        se = je(h) ? h.start : t.start || (0 !== t.start && ye ? be ? "0 0" : "0 100%" : 0),
                        ce = Lt.pinnedContainer = t.pinnedContainer && Y(t.pinnedContainer, Lt),
                        ue = ye && Math.max(0, Mt.indexOf(Lt)) || 0,
                        fe = ue;
                      for (zt && je(h) && (q = H.getProperty(d, wt.p), j = H.getProperty(p, wt.p)); fe--;)(A = Mt[fe]).end || A.refresh(0, 1) || (ee = Lt), !(N = A.pin) || N !== ye && N !== be && N !== ce || A.isReverted || (L || (L = []), L.unshift(A), A.revert(!0, !0)), A !== Mt[fe] && (ue--, fe--);
                      for (Ve(se) && (se = se(Lt)), se = Ae(se, "start", Lt), l = rr(se, ye, Z, wt, Zt(), u, d, Lt, $, Bt, Yt, J, Qe, Lt._startClamp && "_startClamp") || (be ? -.001 : 0), Ve(ie) && (ie = ie(Lt)), Ue(ie) && !ie.indexOf("+=") && (~ie.indexOf(" ") ? ie = (Ue(se) ? se.split(" ")[0] : "") + ie : (ne = Et(ie.substr(2), Z), ie = Ue(se) ? se : (Qe ? H.utils.mapRange(0, Qe.duration(), Qe.scrollTrigger.start, Qe.scrollTrigger.end, l) : l) + ne, ae = ye)), ie = Ae(ie, "end", Lt), c = Math.max(l, rr(ie || (ae ? "100% 0" : J), ae, Z, wt, Zt() + ne, f, p, Lt, $, Bt, Yt, J, Qe, Lt._endClamp && "_endClamp")) || -.001, ne = 0, fe = ue; fe--;)(N = (A = Mt[fe]).pin) && A.start - A._pinPush <= l && !Qe && A.end > 0 && (w = A.end - (Lt._startClamp ? Math.max(0, A.start) : A.start), (N === ye && A.start - A._pinPush < l || N === ce) && isNaN(se) && (ne += w * (1 - A.progress)), N === be && (oe += w));
                      if (l += ne, c += ne, Lt._startClamp && (Lt._startClamp += ne), Lt._endClamp && !Te && (Lt._endClamp = c || -.001, c = Math.min(c, We(Ct, wt))), v = c - l || (l -= .01) && .001, te && (Kt = H.utils.clamp(0, 1, H.utils.normalize(l, c, Q))), Lt._pinPush = oe, u && ne && ((w = {})[wt.a] = "+=" + ne, ce && (w[wt.p] = "-=" + Zt()), H.set([u, f], w)), !be || xe && Lt.end >= We(Ct, wt)) {
                        if (ye && Zt() && !Qe)
                          for (T = ye.parentNode; T && T !== G;) T._pinOffset && (l -= T._pinOffset, c -= T._pinOffset), T = T.parentNode
                      } else w = dt(be), S = wt === R, k = Zt(), C = parseFloat(E(wt.a)) + oe, !J && c > 1 && (W = {
                        style: W = (Dt ? U.scrollingElement || V : Ct).style,
                        value: W["overflow" + wt.a.toUpperCase()]
                      }, Dt && "scroll" !== dt(G)["overflow" + wt.a.toUpperCase()] && (W.style["overflow" + wt.a.toUpperCase()] = "scroll")), $t(be, _, w), b = er(be), T = ht(be, !0), z = Yt && I(Ct, S ? D : R)(), _e ? ((O = [_e + wt.os2, v + oe + ft]).t = _, (fe = _e === st ? gt(be, wt) + v + oe : 0) && (O.push(wt.d, fe + ft), "auto" !== _.style.flexBasis && (_.style.flexBasis = fe + ft)), Qt(O), ce && Mt.forEach(function(e) {
                        e.pin === ce && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                      }), Yt && Zt(Q)) : (fe = gt(be, wt)) && "auto" !== _.style.flexBasis && (_.style.flexBasis = fe + ft), Yt && ((P = {
                        top: T.top + (S ? k - l : z) + ft,
                        left: T.left + (S ? z : k - l) + ft,
                        boxSizing: "border-box",
                        position: "fixed"
                      })[tt] = P["max" + ct] = Math.ceil(T.width) + ft, P[rt] = P["max" + ut] = Math.ceil(T.height) + ft, P[lt] = P[lt + it] = P[lt + nt] = P[lt + at] = P[lt + ot] = "0", P[st] = w[st], P[st + it] = w[st + it], P[st + nt] = w[st + nt], P[st + at] = w[st + at], P[st + ot] = w[st + ot], y = function(e, t, r) {
                        for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                        return o.t = e.t, o
                      }(m, P, qe), Te && Zt(0)), r ? (B = r._initted, le(1), r.render(r.duration(), !0, !0), M = E(wt.a) - C + v + oe, X = Math.abs(v - M) > 1, Yt && X && y.splice(y.length - 2, 2), r.render(0, !0, !0), B || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), le(0)) : M = v, W && (W.value ? W.style["overflow" + wt.a.toUpperCase()] = W.value : W.style.removeProperty("overflow-" + wt.a));
                      L && L.forEach(function(e) {
                        return e.revert(!1, !0)
                      }), Lt.start = l, Lt.end = c, a = s = Te ? Q : Zt(), Qe || Te || (a < Q && Zt(Q), Lt.scroll.rec = 0), Lt.revert(!1, !0), jt = Ce(), K && (Vt = -1, K.restart(!0)), ee = 0, r && kt && (r._initted || re) && r.progress() !== re && r.progress(re || 0, !0).render(r.time(), !0, !0), (te || Kt !== Lt.progress || Qe || Me) && (r && !kt && r.totalProgress(Qe && l < -.001 && !Kt ? H.utils.normalize(l, c, 0) : Kt, !0), Lt.progress = te || (a - l) / v === Kt ? 0 : Kt), be && _e && (_._pinOffset = Math.round(Lt.progress * M)), F && F.invalidate(), isNaN(q) || (q -= H.getProperty(d, wt.p), j -= H.getProperty(p, wt.p), ar(d, wt, q), ar(u, wt, q - (x || 0)), ar(p, wt, j), ar(f, wt, j - (x || 0))), te && !Te && Lt.update(), !ve || Te || g || (g = !0, ve(Lt), g = !1)
                    }
                }, Lt.getVelocity = function() {
                  return (Zt() - s) / (Ce() - J) * 1e3 || 0
                }, Lt.endAnimation = function() {
                  Ke(Lt.callbackAnimation), r && (F ? F.progress(1) : r.paused() ? kt || Ke(r, Lt.direction < 0, 1) : Ke(r, r.reversed()))
                }, Lt.labelToScroll = function(e) {
                  return r && r.labels && (l || Lt.refresh() || l) + r.labels[e] / r.duration() * v || 0
                }, Lt.getTrailing = function(e) {
                  var t = Mt.indexOf(Lt),
                    r = Lt.direction > 0 ? Mt.slice(0, t).reverse() : Mt.slice(t + 1);
                  return (Ue(e) ? r.filter(function(t) {
                    return t.vars.preventOverlaps === e
                  }) : r).filter(function(e) {
                    return Lt.direction > 0 ? e.end <= l : e.start >= c
                  })
                }, Lt.update = function(e, t, o) {
                  if (!Qe || o || e) {
                    var i, u, f, p, h, g, m, x = !0 === Te ? Q : Lt.scroll(),
                      w = e ? 0 : (x - l) / v,
                      T = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                      k = Lt.progress;
                    if (t && (s = a, a = Qe ? Zt() : x, Be && (L = B, B = r && !kt ? r.totalProgress() : T)), Re && be && !ee && !Se && Pe && (!T && l < x + (x - s) / (Ce() - J) * Re ? T = 1e-4 : 1 === T && c > x + (x - s) / (Ce() - J) * Re && (T = .9999)), T !== k && Lt.enabled) {
                      if (p = (h = (i = Lt.isActive = !!T && T < 1) != (!!k && k < 1)) || !!T != !!k, Lt.direction = T > k ? 1 : -1, Lt.progress = T, p && !ee && (u = T && !k ? 0 : 1 === T ? 1 : 1 === k ? 2 : 3, kt && (f = !h && "none" !== Nt[u + 1] && Nt[u + 1] || Nt[u], m = r && ("complete" === f || "reset" === f || f in r))), yt && (h || m) && (m || me || !r) && (Ve(yt) ? yt(Lt) : Lt.getTrailing(yt).forEach(function(e) {
                          return e.endAnimation()
                        })), kt || (!F || ee || Se ? r && r.totalProgress(T, !(!ee || !jt && !e)) : (F._dp._time - F._start !== F._time && F.render(F._dp._time - F._start), F.resetTo ? F.resetTo("totalProgress", T, r._tTime / r._tDur) : (F.vars.totalProgress = T, F.invalidate().restart()))), be)
                        if (e && _e && (_.style[_e + wt.os2] = P), Yt) {
                          if (p) {
                            if (g = !e && T > k && c + 1 > x && x + 1 >= We(Ct, wt), qe)
                              if (e || !i && !g) or(be, _);
                              else {
                                var E = ht(be, !0),
                                  O = x - l;
                                or(be, G, E.top + (wt === R ? O : 0) + ft, E.left + (wt === R ? 0 : O) + ft)
                              } Qt(i || g ? y : b), X && T < 1 && i || S(C + (1 !== T || g ? 0 : M))
                          }
                        } else S(Ne(C + M * T));
                      Be && !n.tween && !ee && !Se && K.restart(!0), pe && (h || ze && T && (T < 1 || !we)) && Z(pe.targets).forEach(function(e) {
                        return e.classList[i || ze ? "add" : "remove"](pe.className)
                      }), de && !kt && !e && de(Lt), p && !ee ? (kt && (m && ("complete" === f ? r.pause().totalProgress(1) : "reset" === f ? r.restart(!0).pause() : "restart" === f ? r.restart(!0) : r[f]()), de && de(Lt)), !h && we || (ge && h && Ze(Lt, ge), It[u] && Ze(Lt, It[u]), ze && (1 === T ? Lt.kill(!1, 1) : It[u] = 0), h || It[u = 1 === T ? 1 : 3] && Ze(Lt, It[u])), et && !i && Math.abs(Lt.getVelocity()) > (Ge(et) ? et : 2500) && (Ke(Lt.callbackAnimation), F ? F.progress(1) : Ke(r, "reverse" === f ? 1 : !T, 1))) : kt && de && !ee && de(Lt)
                    }
                    if (N) {
                      var D = Qe ? x / Qe.duration() * (Qe._caScrollDist || 0) : x;
                      A(D + (d._isFlipped ? 1 : 0)), N(D)
                    }
                    oe && oe(-x / Qe.duration() * (Qe._caScrollDist || 0))
                  }
                }, Lt.enable = function(t, r) {
                  Lt.enabled || (Lt.enabled = !0, bt(Ct, "resize", Rt), Dt || bt(Ct, "scroll", At), Ft && bt(e, "refreshInit", Ft), !1 !== t && (Lt.progress = Kt = 0, a = s = Vt = Zt()), !1 !== r && Lt.refresh())
                }, Lt.getTween = function(e) {
                  return e && n ? n.tween : F
                }, Lt.setPositions = function(e, t, r, n) {
                  if (Qe) {
                    var o = Qe.scrollTrigger,
                      i = Qe.duration(),
                      a = o.end - o.start;
                    e = o.start + a * e / i, t = o.start + a * t / i
                  }
                  Lt.refresh(!1, !1, {
                    start: De(e, r && !!Lt._startClamp),
                    end: De(t, r && !!Lt._endClamp)
                  }, n), Lt.update()
                }, Lt.adjustPinSpacing = function(e) {
                  if (O && e) {
                    var t = O.indexOf(wt.d) + 1;
                    O[t] = parseFloat(O[t]) + e + ft, O[1] = parseFloat(O[1]) + e + ft, Qt(O)
                  }
                }, Lt.disable = function(t, r) {
                  if (Lt.enabled && (!1 !== t && Lt.revert(!0, !0), Lt.enabled = Lt.isActive = !1, r || F && F.pause(), Q = 0, o && (o.uncache = 1), Ft && xt(e, "refreshInit", Ft), K && (K.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !Dt)) {
                    for (var i = Mt.length; i--;)
                      if (Mt[i].scroller === Ct && Mt[i] !== Lt) return;
                    xt(Ct, "resize", Rt), Dt || xt(Ct, "scroll", At)
                  }
                }, Lt.kill = function(e, n) {
                  Lt.disable(e, n), F && !n && F.kill(), he && delete Pt[he];
                  var i = Mt.indexOf(Lt);
                  i >= 0 && Mt.splice(i, 1), i === ne && Gt > 0 && ne--, i = 0, Mt.forEach(function(e) {
                    return e.scroller === Lt.scroller && (i = 1)
                  }), i || Te || (Lt.scroll.rec = 0), r && (r.scrollTrigger = null, e && r.revert({
                    kill: !1
                  }), n || r.kill()), u && [u, f, d, p].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                  }), Ee === Lt && (Ee = 0), be && (o && (o.uncache = 1), i = 0, Mt.forEach(function(e) {
                    return e.pin === be && i++
                  }), i || (o.spacer = 0)), t.onKill && t.onKill(Lt)
                }, Mt.push(Lt), Lt.enable(!1, !1), ie && ie(Lt), r && r.add && !v) {
                var lr = Lt.update;
                Lt.update = function() {
                  Lt.update = lr, l || c || Lt.refresh()
                }, H.delayedCall(.01, Lt.update), v = .01, l = c = 0
              } else Lt.refresh();
              be && function() {
                if (ke !== Ht) {
                  var e = ke = Ht;
                  requestAnimationFrame(function() {
                    return e === Ht && Ut(!0)
                  })
                }
              }()
            } else this.update = this.refresh = this.kill = Xe
          }, e.register = function(t) {
            return W || (H = t || Be(), ze() && window.document && e.enable(), W = Oe), W
          }, e.defaults = function(e) {
            if (e)
              for (var t in e) Tt[t] = e[t];
            return Tt
          }, e.disable = function(e, t) {
            Oe = 0, Mt.forEach(function(r) {
              return r[t ? "kill" : "disable"](e)
            }), xt(q, "wheel", At), xt(U, "scroll", At), clearInterval(Q), xt(U, "touchcancel", Xe), xt(G, "touchstart", Xe), yt(xt, U, "pointerdown,touchstart,mousedown", Ye), yt(xt, U, "pointerup,touchend,mouseup", Ie), K.kill(), qe(xt);
            for (var r = 0; r < x.length; r += 3) wt(xt, x[r], x[r + 1]), wt(xt, x[r], x[r + 2])
          }, e.enable = function() {
            if (q = window, U = document, V = U.documentElement, G = U.body, H && (Z = H.utils.toArray, $ = H.utils.clamp, ge = H.core.context || Xe, le = H.core.suppressOverwrites || Xe, ve = q.history.scrollRestoration || "auto", Vt = q.pageYOffset, H.core.globals("ScrollTrigger", e), G)) {
              Oe = 1, (me = document.createElement("div")).style.height = "100vh", me.style.position = "absolute", Wt(), Re(), F.register(H), e.isTouch = F.isTouch, he = F.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), fe = 1 === F.isTouch, bt(q, "wheel", At), j = [q, U, V, G], H.matchMedia ? (e.matchMedia = function(e) {
                var t, r = H.matchMedia();
                for (t in e) r.add(t, e[t]);
                return r
              }, H.addEventListener("matchMediaInit", function() {
                return Lt()
              }), H.addEventListener("matchMediaRevert", function() {
                return Bt()
              }), H.addEventListener("matchMedia", function() {
                Ut(0, 1), Nt("matchMedia")
              }), H.matchMedia("(orientation: portrait)", function() {
                return Dt(), Dt
              })) : console.warn("Requires GSAP 3.11.0 or later"), Dt(), bt(U, "scroll", At);
              var t, r, n = G.style,
                o = n.borderTopStyle,
                i = H.core.Animation.prototype;
              for (i.revert || Object.defineProperty(i, "revert", {
                  value: function() {
                    return this.time(-.01, !0)
                  }
                }), n.borderTopStyle = "solid", t = ht(G), R.m = Math.round(t.top + R.sc()) || 0, D.m = Math.round(t.left + D.sc()) || 0, o ? n.borderTopStyle = o : n.removeProperty("border-top-style"), Q = setInterval(Ot, 250), H.delayedCall(.5, function() {
                  return Se = 0
                }), bt(U, "touchcancel", Xe), bt(G, "touchstart", Xe), yt(bt, U, "pointerdown,touchstart,mousedown", Ye), yt(bt, U, "pointerup,touchend,mouseup", Ie), re = H.utils.checkPrefix("transform"), Zt.push(re), W = Ce(), K = H.delayedCall(.2, Ut).pause(), ae = [U, "visibilitychange", function() {
                  var e = q.innerWidth,
                    t = q.innerHeight;
                  U.hidden ? (oe = e, ie = t) : oe === e && ie === t || Rt()
                }, U, "DOMContentLoaded", Ut, q, "load", Ut, q, "resize", Rt], qe(bt), Mt.forEach(function(e) {
                  return e.enable(0, 1)
                }), r = 0; r < x.length; r += 3) wt(xt, x[r], x[r + 1]), wt(xt, x[r], x[r + 2])
            }
          }, e.config = function(t) {
            "limitCallbacks" in t && (we = !!t.limitCallbacks);
            var r = t.syncInterval;
            r && clearInterval(Q) || (Q = r) && setInterval(Ot, r), "ignoreMobileResize" in t && (fe = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (qe(xt) || qe(bt, t.autoRefreshEvents || "none"), ce = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
          }, e.scrollerProxy = function(e, t) {
            var r = Y(e),
              n = x.indexOf(r),
              o = Le(r);
            ~n && x.splice(n, o ? 6 : 2), t && (o ? w.unshift(q, t, G, t, V, t) : w.unshift(r, t))
          }, e.clearMatchMedia = function(e) {
            Mt.forEach(function(t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
            })
          }, e.isInViewport = function(e, t, r) {
            var n = (Ue(e) ? Y(e) : e).getBoundingClientRect(),
              o = n[r ? tt : rt] * t || 0;
            return r ? n.right - o > 0 && n.left + o < q.innerWidth : n.bottom - o > 0 && n.top + o < q.innerHeight
          }, e.positionInViewport = function(e, t, r) {
            Ue(e) && (e = Y(e));
            var n = e.getBoundingClientRect(),
              o = n[r ? tt : rt],
              i = null == t ? o / 2 : t in kt ? kt[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
            return r ? (n.left + i) / q.innerWidth : (n.top + i) / q.innerHeight
          }, e.killAll = function(e) {
            if (Mt.slice(0).forEach(function(e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
              }), !0 !== e) {
              var t = Yt.killAll || [];
              Yt = {}, t.forEach(function(e) {
                return e()
              })
            }
          }, e
        }();
      lr.version = "3.12.5", lr.saveStyles = function(e) {
        return e ? Z(e).forEach(function(e) {
          if (e && e.style) {
            var t = zt.indexOf(e);
            t >= 0 && zt.splice(t, 5), zt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), H.core.getCache(e), ge())
          }
        }) : zt
      }, lr.revert = function(e, t) {
        return Lt(!e, t)
      }, lr.create = function(e, t) {
        return new lr(e, t)
      }, lr.refresh = function(e) {
        return e ? Rt() : (W || lr.register()) && Ut(!0)
      }, lr.update = function(e) {
        return ++x.cache && jt(!0 === e ? 2 : 0)
      }, lr.clearScrollMemory = Ft, lr.maxScroll = function(e, t) {
        return We(e, t ? D : R)
      }, lr.getScrollFunc = function(e, t) {
        return I(Y(e), t ? D : R)
      }, lr.getById = function(e) {
        return Pt[e]
      }, lr.getAll = function() {
        return Mt.filter(function(e) {
          return "ScrollSmoother" !== e.vars.id
        })
      }, lr.isScrolling = function() {
        return !!Pe
      }, lr.snapDirectional = mt, lr.addEventListener = function(e, t) {
        var r = Yt[e] || (Yt[e] = []);
        ~r.indexOf(t) || r.push(t)
      }, lr.removeEventListener = function(e, t) {
        var r = Yt[e],
          n = r && r.indexOf(t);
        n >= 0 && r.splice(n, 1)
      }, lr.batch = function(e, t) {
        var r, n = [],
          o = {},
          i = t.interval || .016,
          a = t.batchMax || 1e9,
          s = function(e, t) {
            var r = [],
              n = [],
              o = H.delayedCall(i, function() {
                t(r, n), r = [], n = []
              }).pause();
            return function(e) {
              r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1)
            }
          };
        for (r in t) o[r] = "on" === r.substr(0, 2) && Ve(t[r]) && "onRefreshInit" !== r ? s(0, t[r]) : t[r];
        return Ve(a) && (a = a(), bt(lr, "refresh", function() {
          return a = t.batchMax()
        })), Z(e).forEach(function(e) {
          var t = {};
          for (r in o) t[r] = o[r];
          t.trigger = e, n.push(lr.create(t))
        }), n
      };
      var cr, ur = function(e, t, r, n) {
          return t > n ? e(n) : t < 0 && e(0), r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
        },
        fr = function e(t, r) {
          !0 === r ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (F.isTouch ? " pinch-zoom" : "") : "none", t === V && e(G, r)
        },
        dr = {
          auto: 1,
          scroll: 1
        },
        pr = function(e) {
          var t, r = e.event,
            n = e.target,
            o = e.axis,
            i = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = i._gsap || H.core.getCache(i),
            s = Ce();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (; i && i !== G && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !dr[(t = dt(i)).overflowY] && !dr[t.overflowX]);) i = i.parentNode;
            a._isScroll = i && i !== n && !Le(i) && (dr[(t = dt(i)).overflowY] || dr[t.overflowX]), a._isScrollT = s, !i.hasAttribute("role") || "dialog" !== i.getAttribute("role") || i.parentElement !== document.body || "auto" !== t.overflowX && "scroll" !== t.overflowX && "auto" !== t.overflowY && "scroll" !== t.overflowY || (a._isScroll = 0)
          }(a._isScroll || "x" === o) && (r.stopPropagation(), r._gsapAllow = !0)
        },
        hr = function(e, t, r, n) {
          return F.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && pr,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function() {
              return r && bt(U, F.eventTypes[0], vr, !1, !0)
            },
            onDisable: function() {
              return xt(U, F.eventTypes[0], vr, !0)
            }
          })
        },
        gr = /(input|label|select|textarea)/i,
        vr = function(e) {
          var t = gr.test(e.target.tagName);
          (t || cr) && (e._gsapAllow = !0, cr = t)
        };
      lr.sort = function(e) {
        return Mt.sort(e || function(e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
      }, lr.observe = function(e) {
        return new F(e)
      }, lr.normalizeScroll = function(e) {
        if (void 0 === e) return ue;
        if (!0 === e && ue) return ue.enable();
        if (!1 === e) return ue && ue.kill(), void(ue = e);
        var t = e instanceof F ? e : function(e) {
          je(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          var t, r, n, o, i, a, s, l, c = e,
            u = c.normalizeScrollX,
            f = c.momentum,
            d = c.allowNestedScroll,
            p = c.onRelease,
            h = Y(e.target) || V,
            g = H.core.globals().ScrollSmoother,
            v = g && g.get(),
            m = he && (e.content && Y(e.content) || v && !1 !== e.content && !v.smooth() && v.content()),
            y = I(h, R),
            b = I(h, D),
            w = 1,
            _ = (F.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth,
            T = 0,
            k = Ve(f) ? function() {
              return f(t)
            } : function() {
              return f || 2.8
            },
            E = hr(h, e.type, !0, d),
            S = function() {
              return o = !1
            },
            C = Xe,
            M = Xe,
            P = function() {
              r = We(h, R), M = $(he ? 1 : 0, r), u && (C = $(0, We(h, D))), n = Ht
            },
            O = function() {
              m._gsap.y = Ne(parseFloat(m._gsap.y) + y.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
            },
            A = function() {
              P(), i.isActive() && i.vars.scrollY > r && (y() > r ? i.progress(1) && y(r) : i.resetTo("scrollY", r))
            };
          return m && H.set(m, {
            y: "+=0"
          }), e.ignoreCheck = function(e) {
            return he && "touchmove" === e.type && function() {
              if (o) {
                requestAnimationFrame(S);
                var e = Ne(t.deltaY / 2),
                  r = M(y.v - e);
                if (m && r !== y.v + y.offset) {
                  y.offset = r - y.v;
                  var n = Ne((parseFloat(m && m._gsap.y) || 0) - y.offset);
                  m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", y.cacheID = x.cache, jt()
                }
                return !0
              }
              y.offset && O(), o = !0
            }() || w > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
          }, e.onPress = function() {
            o = !1;
            var e = w;
            w = Ne((q.visualViewport && q.visualViewport.scale || 1) / _), i.pause(), e !== w && fr(h, w > 1.01 || !u && "x"), a = b(), s = y(), P(), n = Ht
          }, e.onRelease = e.onGestureStart = function(e, t) {
            if (y.offset && O(), t) {
              x.cache++;
              var n, o, a = k();
              u && (o = (n = b()) + .05 * a * -e.velocityX / .227, a *= ur(b, n, o, We(h, D)), i.vars.scrollX = C(o)), o = (n = y()) + .05 * a * -e.velocityY / .227, a *= ur(y, n, o, We(h, R)), i.vars.scrollY = M(o), i.invalidate().duration(a).play(.01), (he && i.vars.scrollY >= r || n >= r - 1) && H.to({}, {
                onUpdate: A,
                duration: a
              })
            } else l.restart(!0);
            p && p(e)
          }, e.onWheel = function() {
            i._ts && i.pause(), Ce() - T > 1e3 && (n = 0, T = Ce())
          }, e.onChange = function(e, t, r, o, i) {
            if (Ht !== n && P(), t && u && b(C(o[2] === t ? a + (e.startX - e.x) : b() + t - o[1])), r) {
              y.offset && O();
              var l = i[2] === r,
                c = l ? s + e.startY - e.y : y() + r - i[1],
                f = M(c);
              l && c !== f && (s += f - c), y(f)
            }(r || t) && jt()
          }, e.onEnable = function() {
            fr(h, !u && "x"), lr.addEventListener("refresh", A), bt(q, "resize", A), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = b.smooth = !1), E.enable()
          }, e.onDisable = function() {
            fr(h, !0), xt(q, "resize", A), lr.removeEventListener("refresh", A), E.kill()
          }, e.lockAxis = !1 !== e.lockAxis, (t = new F(e)).iOS = he, he && !y() && y(1), he && H.ticker.add(Xe), l = t._dc, i = H.to(t, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: u ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: ir(y, y(), function() {
                return i.pause()
              })
            },
            onUpdate: jt,
            onComplete: l.vars.onComplete
          }), t
        }(e);
        return ue && ue.target === t.target && ue.kill(), Le(t.target) && (ue = t), t
      }, lr.core = {
        _getVelocityProp: X,
        _inputObserver: hr,
        _scrollers: x,
        _proxies: w,
        bridge: {
          ss: function() {
            Pe || Nt("scrollStart"), Pe = Ce()
          },
          ref: function() {
            return ee
          }
        }
      }, Be() && H.registerPlugin(lr)
    },
    42649: e => {
      var t, r, n = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function a(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          r = i
        }
      }();
      var s, l = [],
        c = !1,
        u = -1;

      function f() {
        c && s && (c = !1, s.length ? l = s.concat(l) : u = -1, l.length && d())
      }

      function d() {
        if (!c) {
          var e = a(f);
          c = !0;
          for (var t = l.length; t;) {
            for (s = l, l = []; ++u < t;) s && s[u].run();
            u = -1, t = l.length
          }
          s = null, c = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function p(e, t) {
        this.fun = e, this.array = t
      }

      function h() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new p(e, t)), 1 !== l.length || c || a(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = h, n.addListener = h, n.once = h, n.off = h, n.removeListener = h, n.removeAllListeners = h, n.emit = h, n.prependListener = h, n.prependOnceListener = h, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    }
  }
]);