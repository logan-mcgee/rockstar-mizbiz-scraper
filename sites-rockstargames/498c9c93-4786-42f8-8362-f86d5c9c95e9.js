try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "498c9c93-4786-42f8-8362-f86d5c9c95e9", e._sentryDebugIdIdentifier = "sentry-dbid-498c9c93-4786-42f8-8362-f86d5c9c95e9")
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
  [7781], {
    57978(e, t, r) {
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
        k = function(e, t) {
          return t
        },
        T = function(e, t) {
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
        A = function(e, t, r, n) {
          return e.removeEventListener(t, r, !!n)
        },
        C = "scrollLeft",
        M = "scrollTop",
        P = function() {
          return h && h.isPressed || x.cache++
        },
        O = function(e, t) {
          var r = function r(n) {
            if (n || 0 === n) {
              y && (a.history.scrollRestoration = "manual");
              var o = h && h.isPressed;
              n = r.v = Math.round(n) || (h && h.iOS ? 1 : 0), e(n), r.cacheID = x.cache, o && k("ss", n)
            } else(t || x.cache !== r.cacheID || k("ref")) && (r.cacheID = x.cache, r.v = e());
            return r.v + r.offset
          };
          return r.offset = 0, e && r
        },
        D = {
          s: C,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: O(function(e) {
            return arguments.length ? a.scrollTo(e, R.sc()) : a.pageXOffset || s[C] || l[C] || c[C] || 0
          })
        },
        R = {
          s: M,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: D,
          sc: O(function(e) {
            return arguments.length ? a.scrollTo(D.sc(), e) : a.pageYOffset || s[M] || l[M] || c[M] || 0
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
          !~i && (i = x.push(e) - 1), x[i + a] || S(e, "scroll", P);
          var c = x[i + a],
            u = c || (x[i + a] = O(T(e, r), !0) || (E(e) ? n : O(function(t) {
              return arguments.length ? e[r] = t : e[r]
            })));
          return u.target = e, c || (u.smooth = "smooth" === o.getProperty(e, "scrollBehavior")), u
        },
        N = function(e, t, r) {
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
        X = function(e, t) {
          return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
        },
        z = function(e) {
          var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(r) ? t : r
        },
        B = function() {
          var e, t, r, n;
          (d = o.core.globals().ScrollTrigger) && d.core && (e = d.core, t = e.bridge || {}, r = e._scrollers, n = e._proxies, r.push.apply(r, x), n.push.apply(n, w), x = r, w = n, k = function(e, r) {
            return t[e](r)
          })
        },
        F = function(e) {
          return o = e || m(), !i && o && "undefined" != typeof document && document.body && (a = window, s = document, l = s.documentElement, c = s.body, p = [a, s, l, c], o.utils.clamp, v = o.core.context || function() {}, f = "onpointerenter" in c ? "pointer" : "mouse", u = L.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, g = L.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return y = 0
          }, 500), B(), i = 1), i
        };
      D.op = R, x.cache = 0;
      var L = function() {
        function e(e) {
          this.init(e)
        }
        var t, r;
        return e.prototype.init = function(e) {
          i || F(o) || console.warn("Please gsap.registerPlugin(Observer)"), d || B();
          var t = e.tolerance,
            r = e.dragMinimum,
            n = e.type,
            p = e.target,
            m = e.lineHeight,
            y = e.debounce,
            x = e.preventDefault,
            w = e.onStop,
            k = e.onStopDelay,
            T = e.ignore,
            C = e.wheelSpeed,
            M = e.event,
            O = e.onDragStart,
            L = e.onDragEnd,
            H = e.onDrag,
            W = e.onPress,
            q = e.onRelease,
            U = e.onRight,
            V = e.onLeft,
            G = e.onUp,
            j = e.onDown,
            $ = e.onChangeX,
            K = e.onChangeY,
            Z = e.onChange,
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
          this.target = p = Y(p) || l, this.vars = e, T && (T = o.utils.toArray(T)), t = t || 1e-9, r = r || 0, C = C || 1, fe = fe || 1, n = n || "wheel,touch,pointer", y = !1 !== y, m || (m = parseFloat(a.getComputedStyle(c).lineHeight) || 22);
          var ve, me, ye, be, xe, we, _e, ke = this,
            Te = 0,
            Ee = 0,
            Se = e.passive || !x,
            Ae = I(p, D),
            Ce = I(p, R),
            Me = Ae(),
            Pe = Ce(),
            Oe = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === g[0],
            De = E(p),
            Re = p.ownerDocument || s,
            Ye = [0, 0, 0],
            Ie = [0, 0, 0],
            Ne = 0,
            Xe = function() {
              return Ne = _()
            },
            ze = function(e, t) {
              return (ke.event = e) && T && ~T.indexOf(e.target) || t && Oe && "touch" !== e.pointerType || ne && ne(e, t)
            },
            Be = function() {
              var e = ke.deltaX = z(Ye),
                r = ke.deltaY = z(Ie),
                n = Math.abs(e) >= t,
                o = Math.abs(r) >= t;
              Z && (n || o) && Z(ke, e, r, Ye, Ie), n && (U && ke.deltaX > 0 && U(ke), V && ke.deltaX < 0 && V(ke), $ && $(ke), J && ke.deltaX < 0 != Te < 0 && J(ke), Te = ke.deltaX, Ye[0] = Ye[1] = Ye[2] = 0), o && (j && ke.deltaY > 0 && j(ke), G && ke.deltaY < 0 && G(ke), K && K(ke), Q && ke.deltaY < 0 != Ee < 0 && Q(ke), Ee = ke.deltaY, Ie[0] = Ie[1] = Ie[2] = 0), (be || ye) && (re && re(ke), ye && (H(ke), ye = !1), be = !1), we && !(we = !1) && ge && ge(ke), xe && (se(ke), xe = !1), ve = 0
            },
            Fe = function(e, t, r) {
              Ye[r] += e, Ie[r] += t, ke._vx.update(e), ke._vy.update(t), y ? ve || (ve = requestAnimationFrame(Be)) : Be()
            },
            Le = function(e, t) {
              he && !_e && (ke.axis = _e = Math.abs(e) > Math.abs(t) ? "x" : "y", we = !0), "y" !== _e && (Ye[2] += e, ke._vx.update(e, !0)), "x" !== _e && (Ie[2] += t, ke._vy.update(t, !0)), y ? ve || (ve = requestAnimationFrame(Be)) : Be()
            },
            He = function(e) {
              if (!ze(e, 1)) {
                var t = (e = X(e, x)).clientX,
                  n = e.clientY,
                  o = t - ke.x,
                  i = n - ke.y,
                  a = ke.isDragging;
                ke.x = t, ke.y = n, (a || Math.abs(ke.startX - t) >= r || Math.abs(ke.startY - n) >= r) && (H && (ye = !0), a || (ke.isDragging = !0), Le(o, i), a || O && O(ke))
              }
            },
            We = ke.onPress = function(e) {
              ze(e, 1) || e && e.button || (ke.axis = _e = null, me.pause(), ke.isPressed = !0, e = X(e), Te = Ee = 0, ke.startX = ke.x = e.clientX, ke.startY = ke.y = e.clientY, ke._vx.reset(), ke._vy.reset(), S(oe ? p : Re, g[1], He, Se, !0), ke.deltaX = ke.deltaY = 0, W && W(ke))
            },
            qe = ke.onRelease = function(e) {
              if (!ze(e, 1)) {
                A(oe ? p : Re, g[1], He, !0);
                var t = !isNaN(ke.y - ke.startY),
                  r = ke.isDragging,
                  n = r && (Math.abs(ke.x - ke.startX) > 3 || Math.abs(ke.y - ke.startY) > 3),
                  i = X(e);
                !n && t && (ke._vx.reset(), ke._vy.reset(), x && pe && o.delayedCall(.08, function() {
                  if (_() - Ne > 300 && !e.defaultPrevented)
                    if (e.target.click) e.target.click();
                    else if (Re.createEvent) {
                    var t = Re.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, a, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                  }
                })), ke.isDragging = ke.isGesturing = ke.isPressed = !1, w && r && !oe && me.restart(!0), L && r && L(ke), q && q(ke, n)
              }
            },
            Ue = function(e) {
              return e.touches && e.touches.length > 1 && (ke.isGesturing = !0) && ie(e, ke.isDragging)
            },
            Ve = function() {
              return (ke.isGesturing = !1) || ae(ke)
            },
            Ge = function(e) {
              if (!ze(e)) {
                var t = Ae(),
                  r = Ce();
                Fe((t - Me) * fe, (r - Pe) * fe, 1), Me = t, Pe = r, w && me.restart(!0)
              }
            },
            je = function(e) {
              if (!ze(e)) {
                e = X(e, x), se && (xe = !0);
                var t = (1 === e.deltaMode ? m : 2 === e.deltaMode ? a.innerHeight : 1) * C;
                Fe(e.deltaX * t, e.deltaY * t, 0), w && !oe && me.restart(!0)
              }
            },
            $e = function(e) {
              if (!ze(e)) {
                var t = e.clientX,
                  r = e.clientY,
                  n = t - ke.x,
                  o = r - ke.y;
                ke.x = t, ke.y = r, be = !0, w && me.restart(!0), (n || o) && Le(n, o)
              }
            },
            Ke = function(e) {
              ke.event = e, ee(ke)
            },
            Ze = function(e) {
              ke.event = e, te(ke)
            },
            Je = function(e) {
              return ze(e) || X(e, x) && ue(ke)
            };
          me = ke._dc = o.delayedCall(k || .25, function() {
            ke._vx.reset(), ke._vy.reset(), me.pause(), w && w(ke)
          }).pause(), ke.deltaX = ke.deltaY = 0, ke._vx = N(0, 50, !0), ke._vy = N(0, 50, !0), ke.scrollX = Ae, ke.scrollY = Ce, ke.isDragging = ke.isGesturing = ke.isPressed = !1, v(this), ke.enable = function(e) {
            return ke.isEnabled || (S(De ? Re : p, "scroll", P), n.indexOf("scroll") >= 0 && S(De ? Re : p, "scroll", Ge, Se, de), n.indexOf("wheel") >= 0 && S(p, "wheel", je, Se, de), (n.indexOf("touch") >= 0 && u || n.indexOf("pointer") >= 0) && (S(p, g[0], We, Se, de), S(Re, g[2], qe), S(Re, g[3], qe), pe && S(p, "click", Xe, !0, !0), ue && S(p, "click", Je), ie && S(Re, "gesturestart", Ue), ae && S(Re, "gestureend", Ve), ee && S(p, f + "enter", Ke), te && S(p, f + "leave", Ze), re && S(p, f + "move", $e)), ke.isEnabled = !0, e && e.type && We(e), le && le(ke)), ke
          }, ke.disable = function() {
            ke.isEnabled && (b.filter(function(e) {
              return e !== ke && E(e.target)
            }).length || A(De ? Re : p, "scroll", P), ke.isPressed && (ke._vx.reset(), ke._vy.reset(), A(oe ? p : Re, g[1], He, !0)), A(De ? Re : p, "scroll", Ge, de), A(p, "wheel", je, de), A(p, g[0], We, de), A(Re, g[2], qe), A(Re, g[3], qe), A(p, "click", Xe, !0), A(p, "click", Je), A(Re, "gesturestart", Ue), A(Re, "gestureend", Ve), A(p, f + "enter", Ke), A(p, f + "leave", Ze), A(p, f + "move", $e), ke.isEnabled = ke.isPressed = ke.isDragging = !1, ce && ce(ke))
          }, ke.kill = ke.revert = function() {
            ke.disable();
            var e = b.indexOf(ke);
            e >= 0 && b.splice(e, 1), h === ke && (h = 0)
          }, b.push(ke), oe && E(p) && (h = ke), ke.enable(M)
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
      L.version = "3.12.5", L.create = function(e) {
        return new L(e)
      }, L.register = F, L.getAll = function() {
        return b.slice()
      }, L.getById = function(e) {
        return b.filter(function(t) {
          return t.vars.id === e
        })[0]
      }, m() && o.registerPlugin(L);
      var H, W, q, U, V, G, j, $, K, Z, J, Q, ee, te, re, ne, oe, ie, ae, se, le, ce, ue, fe, de, pe, he, ge, ve, me, ye, be, xe, we, _e, ke, Te, Ee, Se = 1,
        Ae = Date.now,
        Ce = Ae(),
        Me = 0,
        Pe = 0,
        Oe = function(e, t, r) {
          var n = Ue(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return r["_" + t + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
        },
        De = function(e, t) {
          return !t || Ue(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
        },
        Re = function e() {
          return Pe && requestAnimationFrame(e)
        },
        Ye = function() {
          return te = 1
        },
        Ie = function() {
          return te = 0
        },
        Ne = function(e) {
          return e
        },
        Xe = function(e) {
          return Math.round(1e5 * e) / 1e5 || 0
        },
        ze = function() {
          return "undefined" != typeof window
        },
        Be = function() {
          return H || ze() && (H = window.gsap) && H.registerPlugin && H
        },
        Fe = function(e) {
          return !!~j.indexOf(e)
        },
        Le = function(e) {
          return ("Height" === e ? ye : q["inner" + e]) || V["client" + e] || G["client" + e]
        },
        He = function(e) {
          return T(e, "getBoundingClientRect") || (Fe(e) ? function() {
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
          return Math.max(0, (r = "scroll" + n) && (i = T(e, r)) ? i() - He(e)()[o] : Fe(e) ? (V[r] || G[r]) - Le(n) : e[r] - e["offset" + n])
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
        $e = function(e, t, r) {
          return e && e.progress(t ? 0 : 1) && r && e.pause()
        },
        Ke = function(e, t) {
          if (e.enabled) {
            var r = e._ctx ? e._ctx.add(function() {
              return t(e)
            }) : t(e);
            r && r.totalTime && (e.callbackAnimation = r)
          }
        },
        Ze = Math.abs,
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
        kt = {
          toggleActions: "play",
          anticipatePin: 0
        },
        Tt = {
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
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in Tt ? Tt[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
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
            h = Fe(r) || "fixed" === T(r, "pinType"),
            g = -1 !== e.indexOf("scroller"),
            v = h ? G : r,
            m = -1 !== e.indexOf("start"),
            y = m ? l : c,
            b = "border-color:" + y + ";font-size:" + u + ";color:" + y + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((g || s) && h ? "fixed;" : "absolute;"), (g || s || !h) && (b += (n === R ? Qe : et) + ":" + (i + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = m, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p), p._offset = p["offset" + n.op.d2], At(p, 0, n, m), p
        },
        At = function(e, t, r, n) {
          var o = {
              display: "block"
            },
            i = r[n ? "os2" : "p2"],
            a = r[n ? "p2" : "os2"];
          e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + ct] = 1, o["border" + a + ct] = 0, o[r.p] = t + "px", H.set(e, o)
        },
        Ct = [],
        Mt = {},
        Pt = function() {
          return Ae() - Me > 34 && (_e || (_e = requestAnimationFrame(jt)))
        },
        Ot = function() {
          (!ue || !ue.isPressed || ue.startX > G.clientWidth) && (x.cache++, ue ? _e || (_e = requestAnimationFrame(jt)) : jt(), Me || Xt("scrollStart"), Me = Ae())
        },
        Dt = function() {
          pe = q.innerWidth, de = q.innerHeight
        },
        Rt = function() {
          x.cache++, !ee && !ce && !U.fullscreenElement && !U.webkitFullscreenElement && (!fe || pe !== q.innerWidth || Math.abs(q.innerHeight - de) > .25 * q.innerHeight) && $.restart(!0)
        },
        Yt = {},
        It = [],
        Nt = function e() {
          return xt(lr, "scrollEnd", e) || Ut(!0)
        },
        Xt = function(e) {
          return Yt[e] && Yt[e].map(function(e) {
            return e()
          }) || It
        },
        zt = [],
        Bt = function(e) {
          for (var t = 0; t < zt.length; t += 5)(!e || zt[t + 4] && zt[t + 4].query === e) && (zt[t].style.cssText = zt[t + 1], zt[t].getBBox && zt[t].setAttribute("transform", zt[t + 2] || ""), zt[t + 3].uncache = 1)
        },
        Ft = function(e, t) {
          var r;
          for (ne = 0; ne < Ct.length; ne++) !(r = Ct[ne]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
          be = !0, t && Bt(t), t || Xt("revert")
        },
        Lt = function(e, t) {
          x.cache++, (t || !ke) && x.forEach(function(e) {
            return Ve(e) && e.cacheID++ && (e.rec = 0)
          }), Ue(e) && (q.history.scrollRestoration = ve = e)
        },
        Ht = 0,
        Wt = function() {
          G.appendChild(me), ye = !ue && me.offsetHeight || q.innerHeight, G.removeChild(me)
        },
        qt = function(e) {
          return K(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
          })
        },
        Ut = function(e, t) {
          if (!Me || e || be) {
            Wt(), ke = lr.isRefreshing = !0, x.forEach(function(e) {
              return Ve(e) && ++e.cacheID && (e.rec = e())
            });
            var r = Xt("refreshInit");
            se && lr.sort(), t || Ft(), x.forEach(function(e) {
              Ve(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
            }), Ct.slice(0).forEach(function(e) {
              return e.refresh()
            }), be = !1, Ct.forEach(function(e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  r = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
              }
            }), xe = 1, qt(!0), Ct.forEach(function(e) {
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
            }), Lt(ve, 1), $.pause(), Ht++, ke = 2, jt(2), Ct.forEach(function(e) {
              return Ve(e.vars.onRefresh) && e.vars.onRefresh(e)
            }), ke = lr.isRefreshing = !1, Xt("refresh")
          } else bt(lr, "scrollEnd", Nt)
        },
        Vt = 0,
        Gt = 1,
        jt = function(e) {
          if (2 === e || !ke && !be) {
            lr.isUpdating = !0, Ee && Ee.update(0);
            var t = Ct.length,
              r = Ae(),
              n = r - Ce >= 50,
              o = t && Ct[0].scroll();
            if (Gt = Vt > o ? -1 : 1, ke || (Vt = o), n && (Me && !te && r - Me > 200 && (Me = 0, Xt("scrollEnd")), J = Ce, Ce = r), Gt < 0) {
              for (ne = t; ne-- > 0;) Ct[ne] && Ct[ne].update(0, n);
              Gt = 1
            } else
              for (ne = 0; ne < t; ne++) Ct[ne] && Ct[ne].update(0, n);
            lr.isUpdating = !1
          }
          _e = 0
        },
        $t = [Je, "top", et, Qe, lt + at, lt + nt, lt + it, lt + ot, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Kt = $t.concat([tt, rt, "boxSizing", "max" + ct, "max" + ut, "position", lt, st, st + it, st + nt, st + at, st + ot]),
        Zt = function(e, t, r, n) {
          if (!e._gsap.swappedIn) {
            for (var o, i = $t.length, a = t.style, s = e.style; i--;) a[o = $t[i]] = r[o];
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
          for (var t = Kt.length, r = e.style, n = [], o = 0; o < t; o++) n.push(Kt[o], r[Kt[o]]);
          return n.t = e, n
        },
        tr = {
          left: 0,
          top: 0
        },
        rr = function(e, t, r, n, o, i, a, s, l, c, u, f, d, p) {
          Ve(e) && (e = e(s)), Ue(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Et("0" + e.substr(3), r) : 0));
          var h, g, v, m = d ? d.time() : 0;
          if (d && d.seek(0), isNaN(e) || (e = +e), Ge(e)) d && (e = H.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && At(a, r, n, !0);
          else {
            Ve(t) && (t = t(s));
            var y, b, x, w, _ = (e || "0").split(" ");
            v = Y(t, s) || G, (y = ht(v) || {}) && (y.left || y.top) || "none" !== dt(v).display || (w = v.style.display, v.style.display = "block", y = ht(v), w ? v.style.display = w : v.style.removeProperty("display")), b = Et(_[0], y[n.d]), x = Et(_[1] || "0", r), e = y[n.p] - l[n.p] - c + b + o - x, a && At(a, x, n, r - x < 20 || a._isStart && x > 20), r -= r - x
          }
          if (p && (s[p] = e || -.001, e < 0 && (e = 0)), i) {
            var k = e + r,
              T = i._isStart;
            h = "scroll" + n.d2, At(i, k, n, T && k > 20 || !T && (u ? Math.max(G[h], V[h]) : i.parentNode[h]) <= k + 1), u && (l = ht(a), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + ft))
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
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Pe) {
              var n, o, i, a, s, l, c, u, f, d, p, h, g, v, m, y, b, _, k, E, S, A, C, M, P, O, N, X, z, B, F, L, W, j, $, Q, re, oe, ie, ae, ce, ue, fe = t = pt(Ue(t) || Ge(t) || t.nodeType ? {
                  trigger: t
                } : t, kt),
                de = fe.onUpdate,
                pe = fe.toggleClass,
                he = fe.id,
                ge = fe.onToggle,
                ve = fe.onRefresh,
                me = fe.scrub,
                ye = fe.trigger,
                be = fe.pin,
                _e = fe.pinSpacing,
                Ce = fe.invalidateOnRefresh,
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
                Tt = !me && 0 !== me,
                At = Y(t.scroller || q),
                Pt = H.core.getCache(At),
                Dt = Fe(At),
                Yt = "fixed" === ("pinType" in t ? t.pinType : T(At, "pinType") || Dt && "fixed"),
                It = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                Xt = Tt && t.toggleActions.split(" "),
                zt = "markers" in t ? t.markers : kt.markers,
                Bt = Dt ? 0 : parseFloat(dt(At)["border" + wt.p2 + ct]) || 0,
                Ft = this,
                Lt = t.onRefreshInit && function() {
                  return t.onRefreshInit(Ft)
                },
                Wt = function(e, t, r) {
                  var n = r.d,
                    o = r.d2,
                    i = r.a;
                  return (i = T(e, "getBoundingClientRect")) ? function() {
                    return i()[n]
                  } : function() {
                    return (t ? Le(o) : e["client" + o]) || 0
                  }
                }(At, Dt, wt),
                qt = function(e, t) {
                  return !t || ~w.indexOf(e) ? He(e) : function() {
                    return tr
                  }
                }(At, Dt),
                Vt = 0,
                jt = 0,
                $t = 0,
                Kt = I(At, wt);
              if (Ft._startClamp = Ft._endClamp = !1, Ft._dir = wt, Re *= 45, Ft.scroller = At, Ft.scroll = Qe ? Qe.time.bind(Qe) : Kt, a = Kt(), Ft.vars = t, r = r || t.animation, "refreshPriority" in t && (se = 1, -9999 === t.refreshPriority && (Ee = Ft)), Pt.tweenScroll = Pt.tweenScroll || {
                  top: sr(At, R),
                  left: sr(At, D)
                }, Ft.tweenTo = n = Pt.tweenScroll[wt.p], Ft.scrubDuration = function(e) {
                  (W = Ge(e) && e) ? L ? L.duration(e) : L = H.to(r, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: W,
                    paused: !0,
                    onComplete: function() {
                      return Ye && Ye(Ft)
                    }
                  }): (L && L.progress(1).kill(), L = 0)
                }, r && (r.vars.lazy = !1, r._initted && !Ft.isReverted || !1 !== r.vars.immediateRender && !1 !== t.immediateRender && r.duration() && r.render(0, !0, !0), Ft.animation = r.pause(), r.scrollTrigger = Ft, Ft.scrubDuration(me), B = 0, he || (he = r.vars.id)), Be && (je(Be) && !Be.push || (Be = {
                  snapTo: Be
                }), "scrollBehavior" in G.style && H.set(Dt ? [G, V] : At, {
                  scrollBehavior: "auto"
                }), x.forEach(function(e) {
                  return Ve(e) && e.target === (Dt ? U.scrollingElement || V : At) && (e.smooth = !1)
                }), i = Ve(Be.snapTo) ? Be.snapTo : "labels" === Be.snapTo ? function(e) {
                  return function(t) {
                    return H.utils.snap(vt(e), t)
                  }
                }(r) : "labelsDirectional" === Be.snapTo ? (ae = r, function(e, t) {
                  return mt(vt(ae))(e, t.direction)
                }) : !1 !== Be.directional ? function(e, t) {
                  return mt(Be.snapTo)(e, Ae() - jt < 500 ? 0 : t.direction)
                } : H.utils.snap(Be.snapTo), j = Be.duration || {
                  min: .1,
                  max: 2
                }, j = je(j) ? Z(j.min, j.max) : Z(j, j), $ = H.delayedCall(Be.delay || W / 2 || .1, function() {
                  var e = Kt(),
                    t = Ae() - jt < 500,
                    o = n.tween;
                  if (!(t || Math.abs(Ft.getVelocity()) < 10) || o || te || Vt === e) Ft.isActive && Vt !== e && $.restart(!0);
                  else {
                    var a, s, u = (e - l) / v,
                      f = r && !Tt ? r.totalProgress() : u,
                      d = t ? 0 : (f - F) / (Ae() - J) * 1e3 || 0,
                      p = H.utils.clamp(-u, 1 - u, Ze(d / 2) * d / .185),
                      h = u + (!1 === Be.inertia ? 0 : p),
                      g = Be,
                      m = g.onStart,
                      y = g.onInterrupt,
                      b = g.onComplete;
                    if (a = i(h, Ft), Ge(a) || (a = h), s = Math.round(l + a * v), e <= c && e >= l && s !== e) {
                      if (o && !o._initted && o.data <= Ze(s - e)) return;
                      !1 === Be.inertia && (p = a - u), n(s, {
                        duration: j(Ze(.185 * Math.max(Ze(h - f), Ze(a - f)) / d / .05 || 0)),
                        ease: Be.ease || "power3",
                        data: Ze(s - e),
                        onInterrupt: function() {
                          return $.restart(!0) && y && y(Ft)
                        },
                        onComplete: function() {
                          Ft.update(), Vt = Kt(), r && (L ? L.resetTo("totalProgress", a, r._tTime / r._tDur) : r.progress(a)), B = F = r && !Tt ? r.totalProgress() : Ft.progress, Ie && Ie(Ft), b && b(Ft)
                        }
                      }, e, p * v, s - e - p * v), m && m(Ft, n.tween)
                    }
                  }
                }).pause()), he && (Mt[he] = Ft), (ie = (ye = Ft.trigger = Y(ye || !0 !== be && be)) && ye._gsap && ye._gsap.stRevert) && (ie = ie(Ft)), be = !0 === be ? ye : Y(be), Ue(pe) && (pe = {
                  targets: ye,
                  className: pe
                }), be && (!1 === _e || _e === lt || (_e = !(!_e && be.parentNode && be.parentNode.style && "flex" === dt(be.parentNode).display) && st), Ft.pin = be, (o = H.core.getCache(be)).spacer ? m = o.pinState : (Je && ((Je = Y(Je)) && !Je.nodeType && (Je = Je.current || Je.nativeElement), o.spacerIsNative = !!Je, Je && (o.spacerState = er(Je))), o.spacer = _ = Je || U.createElement("div"), _.classList.add("pin-spacer"), he && _.classList.add("pin-spacer-" + he), o.pinState = m = er(be)), !1 !== t.force3D && H.set(be, {
                  force3D: !0
                }), Ft.spacer = _ = o.spacer, z = dt(be), M = z[_e + wt.os2], E = H.getProperty(be), S = H.quickSetter(be, wt.a, ft), Zt(be, _, z), b = er(be)), zt) {
                h = je(zt) ? pt(zt, _t) : _t, d = St("scroller-start", he, At, wt, h, 0), p = St("scroller-end", he, At, wt, h, 0, d), k = d["offset" + wt.op.d2];
                var Jt = Y(T(At, "content") || At);
                u = this.markerStart = St("start", he, Jt, wt, h, k, 0, Qe), f = this.markerEnd = St("end", he, Jt, wt, h, k, 0, Qe), Qe && (oe = H.quickSetter([u, f], wt.a, ft)), Yt || w.length && !0 === T(At, "fixedMarkers") || (ue = dt(ce = Dt ? G : At).position, ce.style.position = "absolute" === ue || "fixed" === ue ? ue : "relative", H.set([d, p], {
                  force3D: !0
                }), O = H.quickSetter(d, wt.a, ft), X = H.quickSetter(p, wt.a, ft))
              }
              if (Qe) {
                var nr = Qe.vars.onUpdate,
                  ir = Qe.vars.onUpdateParams;
                Qe.eventCallback("onUpdate", function() {
                  Ft.update(0, 0, 1), nr && nr.apply(Qe, ir || [])
                })
              }
              if (Ft.previous = function() {
                  return Ct[Ct.indexOf(Ft) - 1]
                }, Ft.next = function() {
                  return Ct[Ct.indexOf(Ft) + 1]
                }, Ft.revert = function(e, t) {
                  if (!t) return Ft.kill(!0);
                  var n = !1 !== e || !Ft.enabled,
                    o = ee;
                  n !== Ft.isReverted && (n && (Q = Math.max(Kt(), Ft.scroll.rec || 0), $t = Ft.progress, re = r && r.progress()), u && [u, f, d, p].forEach(function(e) {
                    return e.style.display = n ? "none" : "block"
                  }), n && (ee = Ft, Ft.update(n)), !be || qe && Ft.isActive || (n ? function(e, t, r) {
                    Qt(r);
                    var n = e._gsap;
                    if (n.spacerIsNative) Qt(n.spacerState);
                    else if (e._gsap.swappedIn) {
                      var o = t.parentNode;
                      o && (o.insertBefore(e, t), o.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                  }(be, _, m) : Zt(be, _, dt(be), P)), n || Ft.update(n), ee = o, Ft.isReverted = n)
                }, Ft.refresh = function(o, i, h, x) {
                  if (!ee && Ft.enabled || i)
                    if (be && o && Me) bt(e, "scrollEnd", Nt);
                    else {
                      !ke && Lt && Lt(Ft), ee = Ft, n.tween && !h && (n.tween.kill(), n.tween = 0), L && L.pause(), Ce && r && r.revert({
                        kill: !1
                      }).invalidate(), Ft.isReverted || Ft.revert(!0, !0), Ft._subPinOffset = !1;
                      var w, k, T, S, M, O, X, z, B, F, W, q, j, K = Wt(),
                        Z = qt(),
                        J = Qe ? Qe.duration() : We(At, wt),
                        te = v <= .01,
                        ne = 0,
                        oe = x || 0,
                        ie = je(h) ? h.end : t.end,
                        ae = t.endTrigger || ye,
                        se = je(h) ? h.start : t.start || (0 !== t.start && ye ? be ? "0 0" : "0 100%" : 0),
                        ce = Ft.pinnedContainer = t.pinnedContainer && Y(t.pinnedContainer, Ft),
                        ue = ye && Math.max(0, Ct.indexOf(Ft)) || 0,
                        fe = ue;
                      for (zt && je(h) && (q = H.getProperty(d, wt.p), j = H.getProperty(p, wt.p)); fe--;)(O = Ct[fe]).end || O.refresh(0, 1) || (ee = Ft), !(X = O.pin) || X !== ye && X !== be && X !== ce || O.isReverted || (F || (F = []), F.unshift(O), O.revert(!0, !0)), O !== Ct[fe] && (ue--, fe--);
                      for (Ve(se) && (se = se(Ft)), se = Oe(se, "start", Ft), l = rr(se, ye, K, wt, Kt(), u, d, Ft, Z, Bt, Yt, J, Qe, Ft._startClamp && "_startClamp") || (be ? -.001 : 0), Ve(ie) && (ie = ie(Ft)), Ue(ie) && !ie.indexOf("+=") && (~ie.indexOf(" ") ? ie = (Ue(se) ? se.split(" ")[0] : "") + ie : (ne = Et(ie.substr(2), K), ie = Ue(se) ? se : (Qe ? H.utils.mapRange(0, Qe.duration(), Qe.scrollTrigger.start, Qe.scrollTrigger.end, l) : l) + ne, ae = ye)), ie = Oe(ie, "end", Ft), c = Math.max(l, rr(ie || (ae ? "100% 0" : J), ae, K, wt, Kt() + ne, f, p, Ft, Z, Bt, Yt, J, Qe, Ft._endClamp && "_endClamp")) || -.001, ne = 0, fe = ue; fe--;)(X = (O = Ct[fe]).pin) && O.start - O._pinPush <= l && !Qe && O.end > 0 && (w = O.end - (Ft._startClamp ? Math.max(0, O.start) : O.start), (X === ye && O.start - O._pinPush < l || X === ce) && isNaN(se) && (ne += w * (1 - O.progress)), X === be && (oe += w));
                      if (l += ne, c += ne, Ft._startClamp && (Ft._startClamp += ne), Ft._endClamp && !ke && (Ft._endClamp = c || -.001, c = Math.min(c, We(At, wt))), v = c - l || (l -= .01) && .001, te && ($t = H.utils.clamp(0, 1, H.utils.normalize(l, c, Q))), Ft._pinPush = oe, u && ne && ((w = {})[wt.a] = "+=" + ne, ce && (w[wt.p] = "-=" + Kt()), H.set([u, f], w)), !be || xe && Ft.end >= We(At, wt)) {
                        if (ye && Kt() && !Qe)
                          for (k = ye.parentNode; k && k !== G;) k._pinOffset && (l -= k._pinOffset, c -= k._pinOffset), k = k.parentNode
                      } else w = dt(be), S = wt === R, T = Kt(), A = parseFloat(E(wt.a)) + oe, !J && c > 1 && (W = {
                        style: W = (Dt ? U.scrollingElement || V : At).style,
                        value: W["overflow" + wt.a.toUpperCase()]
                      }, Dt && "scroll" !== dt(G)["overflow" + wt.a.toUpperCase()] && (W.style["overflow" + wt.a.toUpperCase()] = "scroll")), Zt(be, _, w), b = er(be), k = ht(be, !0), z = Yt && I(At, S ? D : R)(), _e ? ((P = [_e + wt.os2, v + oe + ft]).t = _, (fe = _e === st ? gt(be, wt) + v + oe : 0) && (P.push(wt.d, fe + ft), "auto" !== _.style.flexBasis && (_.style.flexBasis = fe + ft)), Qt(P), ce && Ct.forEach(function(e) {
                        e.pin === ce && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                      }), Yt && Kt(Q)) : (fe = gt(be, wt)) && "auto" !== _.style.flexBasis && (_.style.flexBasis = fe + ft), Yt && ((M = {
                        top: k.top + (S ? T - l : z) + ft,
                        left: k.left + (S ? z : T - l) + ft,
                        boxSizing: "border-box",
                        position: "fixed"
                      })[tt] = M["max" + ct] = Math.ceil(k.width) + ft, M[rt] = M["max" + ut] = Math.ceil(k.height) + ft, M[lt] = M[lt + it] = M[lt + nt] = M[lt + at] = M[lt + ot] = "0", M[st] = w[st], M[st + it] = w[st + it], M[st + nt] = w[st + nt], M[st + at] = w[st + at], M[st + ot] = w[st + ot], y = function(e, t, r) {
                        for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                        return o.t = e.t, o
                      }(m, M, qe), ke && Kt(0)), r ? (B = r._initted, le(1), r.render(r.duration(), !0, !0), C = E(wt.a) - A + v + oe, N = Math.abs(v - C) > 1, Yt && N && y.splice(y.length - 2, 2), r.render(0, !0, !0), B || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), le(0)) : C = v, W && (W.value ? W.style["overflow" + wt.a.toUpperCase()] = W.value : W.style.removeProperty("overflow-" + wt.a));
                      F && F.forEach(function(e) {
                        return e.revert(!1, !0)
                      }), Ft.start = l, Ft.end = c, a = s = ke ? Q : Kt(), Qe || ke || (a < Q && Kt(Q), Ft.scroll.rec = 0), Ft.revert(!1, !0), jt = Ae(), $ && (Vt = -1, $.restart(!0)), ee = 0, r && Tt && (r._initted || re) && r.progress() !== re && r.progress(re || 0, !0).render(r.time(), !0, !0), (te || $t !== Ft.progress || Qe || Ce) && (r && !Tt && r.totalProgress(Qe && l < -.001 && !$t ? H.utils.normalize(l, c, 0) : $t, !0), Ft.progress = te || (a - l) / v === $t ? 0 : $t), be && _e && (_._pinOffset = Math.round(Ft.progress * C)), L && L.invalidate(), isNaN(q) || (q -= H.getProperty(d, wt.p), j -= H.getProperty(p, wt.p), ar(d, wt, q), ar(u, wt, q - (x || 0)), ar(p, wt, j), ar(f, wt, j - (x || 0))), te && !ke && Ft.update(), !ve || ke || g || (g = !0, ve(Ft), g = !1)
                    }
                }, Ft.getVelocity = function() {
                  return (Kt() - s) / (Ae() - J) * 1e3 || 0
                }, Ft.endAnimation = function() {
                  $e(Ft.callbackAnimation), r && (L ? L.progress(1) : r.paused() ? Tt || $e(r, Ft.direction < 0, 1) : $e(r, r.reversed()))
                }, Ft.labelToScroll = function(e) {
                  return r && r.labels && (l || Ft.refresh() || l) + r.labels[e] / r.duration() * v || 0
                }, Ft.getTrailing = function(e) {
                  var t = Ct.indexOf(Ft),
                    r = Ft.direction > 0 ? Ct.slice(0, t).reverse() : Ct.slice(t + 1);
                  return (Ue(e) ? r.filter(function(t) {
                    return t.vars.preventOverlaps === e
                  }) : r).filter(function(e) {
                    return Ft.direction > 0 ? e.end <= l : e.start >= c
                  })
                }, Ft.update = function(e, t, o) {
                  if (!Qe || o || e) {
                    var i, u, f, p, h, g, m, x = !0 === ke ? Q : Ft.scroll(),
                      w = e ? 0 : (x - l) / v,
                      k = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                      T = Ft.progress;
                    if (t && (s = a, a = Qe ? Kt() : x, Be && (F = B, B = r && !Tt ? r.totalProgress() : k)), Re && be && !ee && !Se && Me && (!k && l < x + (x - s) / (Ae() - J) * Re ? k = 1e-4 : 1 === k && c > x + (x - s) / (Ae() - J) * Re && (k = .9999)), k !== T && Ft.enabled) {
                      if (p = (h = (i = Ft.isActive = !!k && k < 1) != (!!T && T < 1)) || !!k != !!T, Ft.direction = k > T ? 1 : -1, Ft.progress = k, p && !ee && (u = k && !T ? 0 : 1 === k ? 1 : 1 === T ? 2 : 3, Tt && (f = !h && "none" !== Xt[u + 1] && Xt[u + 1] || Xt[u], m = r && ("complete" === f || "reset" === f || f in r))), yt && (h || m) && (m || me || !r) && (Ve(yt) ? yt(Ft) : Ft.getTrailing(yt).forEach(function(e) {
                          return e.endAnimation()
                        })), Tt || (!L || ee || Se ? r && r.totalProgress(k, !(!ee || !jt && !e)) : (L._dp._time - L._start !== L._time && L.render(L._dp._time - L._start), L.resetTo ? L.resetTo("totalProgress", k, r._tTime / r._tDur) : (L.vars.totalProgress = k, L.invalidate().restart()))), be)
                        if (e && _e && (_.style[_e + wt.os2] = M), Yt) {
                          if (p) {
                            if (g = !e && k > T && c + 1 > x && x + 1 >= We(At, wt), qe)
                              if (e || !i && !g) or(be, _);
                              else {
                                var E = ht(be, !0),
                                  P = x - l;
                                or(be, G, E.top + (wt === R ? P : 0) + ft, E.left + (wt === R ? 0 : P) + ft)
                              } Qt(i || g ? y : b), N && k < 1 && i || S(A + (1 !== k || g ? 0 : C))
                          }
                        } else S(Xe(A + C * k));
                      Be && !n.tween && !ee && !Se && $.restart(!0), pe && (h || ze && k && (k < 1 || !we)) && K(pe.targets).forEach(function(e) {
                        return e.classList[i || ze ? "add" : "remove"](pe.className)
                      }), de && !Tt && !e && de(Ft), p && !ee ? (Tt && (m && ("complete" === f ? r.pause().totalProgress(1) : "reset" === f ? r.restart(!0).pause() : "restart" === f ? r.restart(!0) : r[f]()), de && de(Ft)), !h && we || (ge && h && Ke(Ft, ge), It[u] && Ke(Ft, It[u]), ze && (1 === k ? Ft.kill(!1, 1) : It[u] = 0), h || It[u = 1 === k ? 1 : 3] && Ke(Ft, It[u])), et && !i && Math.abs(Ft.getVelocity()) > (Ge(et) ? et : 2500) && ($e(Ft.callbackAnimation), L ? L.progress(1) : $e(r, "reverse" === f ? 1 : !k, 1))) : Tt && de && !ee && de(Ft)
                    }
                    if (X) {
                      var D = Qe ? x / Qe.duration() * (Qe._caScrollDist || 0) : x;
                      O(D + (d._isFlipped ? 1 : 0)), X(D)
                    }
                    oe && oe(-x / Qe.duration() * (Qe._caScrollDist || 0))
                  }
                }, Ft.enable = function(t, r) {
                  Ft.enabled || (Ft.enabled = !0, bt(At, "resize", Rt), Dt || bt(At, "scroll", Ot), Lt && bt(e, "refreshInit", Lt), !1 !== t && (Ft.progress = $t = 0, a = s = Vt = Kt()), !1 !== r && Ft.refresh())
                }, Ft.getTween = function(e) {
                  return e && n ? n.tween : L
                }, Ft.setPositions = function(e, t, r, n) {
                  if (Qe) {
                    var o = Qe.scrollTrigger,
                      i = Qe.duration(),
                      a = o.end - o.start;
                    e = o.start + a * e / i, t = o.start + a * t / i
                  }
                  Ft.refresh(!1, !1, {
                    start: De(e, r && !!Ft._startClamp),
                    end: De(t, r && !!Ft._endClamp)
                  }, n), Ft.update()
                }, Ft.adjustPinSpacing = function(e) {
                  if (P && e) {
                    var t = P.indexOf(wt.d) + 1;
                    P[t] = parseFloat(P[t]) + e + ft, P[1] = parseFloat(P[1]) + e + ft, Qt(P)
                  }
                }, Ft.disable = function(t, r) {
                  if (Ft.enabled && (!1 !== t && Ft.revert(!0, !0), Ft.enabled = Ft.isActive = !1, r || L && L.pause(), Q = 0, o && (o.uncache = 1), Lt && xt(e, "refreshInit", Lt), $ && ($.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !Dt)) {
                    for (var i = Ct.length; i--;)
                      if (Ct[i].scroller === At && Ct[i] !== Ft) return;
                    xt(At, "resize", Rt), Dt || xt(At, "scroll", Ot)
                  }
                }, Ft.kill = function(e, n) {
                  Ft.disable(e, n), L && !n && L.kill(), he && delete Mt[he];
                  var i = Ct.indexOf(Ft);
                  i >= 0 && Ct.splice(i, 1), i === ne && Gt > 0 && ne--, i = 0, Ct.forEach(function(e) {
                    return e.scroller === Ft.scroller && (i = 1)
                  }), i || ke || (Ft.scroll.rec = 0), r && (r.scrollTrigger = null, e && r.revert({
                    kill: !1
                  }), n || r.kill()), u && [u, f, d, p].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                  }), Ee === Ft && (Ee = 0), be && (o && (o.uncache = 1), i = 0, Ct.forEach(function(e) {
                    return e.pin === be && i++
                  }), i || (o.spacer = 0)), t.onKill && t.onKill(Ft)
                }, Ct.push(Ft), Ft.enable(!1, !1), ie && ie(Ft), r && r.add && !v) {
                var lr = Ft.update;
                Ft.update = function() {
                  Ft.update = lr, l || c || Ft.refresh()
                }, H.delayedCall(.01, Ft.update), v = .01, l = c = 0
              } else Ft.refresh();
              be && function() {
                if (Te !== Ht) {
                  var e = Te = Ht;
                  requestAnimationFrame(function() {
                    return e === Ht && Ut(!0)
                  })
                }
              }()
            } else this.update = this.refresh = this.kill = Ne
          }, e.register = function(t) {
            return W || (H = t || Be(), ze() && window.document && e.enable(), W = Pe), W
          }, e.defaults = function(e) {
            if (e)
              for (var t in e) kt[t] = e[t];
            return kt
          }, e.disable = function(e, t) {
            Pe = 0, Ct.forEach(function(r) {
              return r[t ? "kill" : "disable"](e)
            }), xt(q, "wheel", Ot), xt(U, "scroll", Ot), clearInterval(Q), xt(U, "touchcancel", Ne), xt(G, "touchstart", Ne), yt(xt, U, "pointerdown,touchstart,mousedown", Ye), yt(xt, U, "pointerup,touchend,mouseup", Ie), $.kill(), qe(xt);
            for (var r = 0; r < x.length; r += 3) wt(xt, x[r], x[r + 1]), wt(xt, x[r], x[r + 2])
          }, e.enable = function() {
            if (q = window, U = document, V = U.documentElement, G = U.body, H && (K = H.utils.toArray, Z = H.utils.clamp, ge = H.core.context || Ne, le = H.core.suppressOverwrites || Ne, ve = q.history.scrollRestoration || "auto", Vt = q.pageYOffset, H.core.globals("ScrollTrigger", e), G)) {
              Pe = 1, (me = document.createElement("div")).style.height = "100vh", me.style.position = "absolute", Wt(), Re(), L.register(H), e.isTouch = L.isTouch, he = L.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), fe = 1 === L.isTouch, bt(q, "wheel", Ot), j = [q, U, V, G], H.matchMedia ? (e.matchMedia = function(e) {
                var t, r = H.matchMedia();
                for (t in e) r.add(t, e[t]);
                return r
              }, H.addEventListener("matchMediaInit", function() {
                return Ft()
              }), H.addEventListener("matchMediaRevert", function() {
                return Bt()
              }), H.addEventListener("matchMedia", function() {
                Ut(0, 1), Xt("matchMedia")
              }), H.matchMedia("(orientation: portrait)", function() {
                return Dt(), Dt
              })) : console.warn("Requires GSAP 3.11.0 or later"), Dt(), bt(U, "scroll", Ot);
              var t, r, n = G.style,
                o = n.borderTopStyle,
                i = H.core.Animation.prototype;
              for (i.revert || Object.defineProperty(i, "revert", {
                  value: function() {
                    return this.time(-.01, !0)
                  }
                }), n.borderTopStyle = "solid", t = ht(G), R.m = Math.round(t.top + R.sc()) || 0, D.m = Math.round(t.left + D.sc()) || 0, o ? n.borderTopStyle = o : n.removeProperty("border-top-style"), Q = setInterval(Pt, 250), H.delayedCall(.5, function() {
                  return Se = 0
                }), bt(U, "touchcancel", Ne), bt(G, "touchstart", Ne), yt(bt, U, "pointerdown,touchstart,mousedown", Ye), yt(bt, U, "pointerup,touchend,mouseup", Ie), re = H.utils.checkPrefix("transform"), Kt.push(re), W = Ae(), $ = H.delayedCall(.2, Ut).pause(), ae = [U, "visibilitychange", function() {
                  var e = q.innerWidth,
                    t = q.innerHeight;
                  U.hidden ? (oe = e, ie = t) : oe === e && ie === t || Rt()
                }, U, "DOMContentLoaded", Ut, q, "load", Ut, q, "resize", Rt], qe(bt), Ct.forEach(function(e) {
                  return e.enable(0, 1)
                }), r = 0; r < x.length; r += 3) wt(xt, x[r], x[r + 1]), wt(xt, x[r], x[r + 2])
            }
          }, e.config = function(t) {
            "limitCallbacks" in t && (we = !!t.limitCallbacks);
            var r = t.syncInterval;
            r && clearInterval(Q) || (Q = r) && setInterval(Pt, r), "ignoreMobileResize" in t && (fe = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (qe(xt) || qe(bt, t.autoRefreshEvents || "none"), ce = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
          }, e.scrollerProxy = function(e, t) {
            var r = Y(e),
              n = x.indexOf(r),
              o = Fe(r);
            ~n && x.splice(n, o ? 6 : 2), t && (o ? w.unshift(q, t, G, t, V, t) : w.unshift(r, t))
          }, e.clearMatchMedia = function(e) {
            Ct.forEach(function(t) {
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
              i = null == t ? o / 2 : t in Tt ? Tt[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
            return r ? (n.left + i) / q.innerWidth : (n.top + i) / q.innerHeight
          }, e.killAll = function(e) {
            if (Ct.slice(0).forEach(function(e) {
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
        return e ? K(e).forEach(function(e) {
          if (e && e.style) {
            var t = zt.indexOf(e);
            t >= 0 && zt.splice(t, 5), zt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), H.core.getCache(e), ge())
          }
        }) : zt
      }, lr.revert = function(e, t) {
        return Ft(!e, t)
      }, lr.create = function(e, t) {
        return new lr(e, t)
      }, lr.refresh = function(e) {
        return e ? Rt() : (W || lr.register()) && Ut(!0)
      }, lr.update = function(e) {
        return ++x.cache && jt(!0 === e ? 2 : 0)
      }, lr.clearScrollMemory = Lt, lr.maxScroll = function(e, t) {
        return We(e, t ? D : R)
      }, lr.getScrollFunc = function(e, t) {
        return I(Y(e), t ? D : R)
      }, lr.getById = function(e) {
        return Mt[e]
      }, lr.getAll = function() {
        return Ct.filter(function(e) {
          return "ScrollSmoother" !== e.vars.id
        })
      }, lr.isScrolling = function() {
        return !!Me
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
        })), K(e).forEach(function(e) {
          var t = {};
          for (r in o) t[r] = o[r];
          t.trigger = e, n.push(lr.create(t))
        }), n
      };
      var cr, ur = function(e, t, r, n) {
          return t > n ? e(n) : t < 0 && e(0), r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
        },
        fr = function e(t, r) {
          !0 === r ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (L.isTouch ? " pinch-zoom" : "") : "none", t === V && e(G, r)
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
            s = Ae();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (; i && i !== G && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !dr[(t = dt(i)).overflowY] && !dr[t.overflowX]);) i = i.parentNode;
            a._isScroll = i && i !== n && !Fe(i) && (dr[(t = dt(i)).overflowY] || dr[t.overflowX]), a._isScrollT = s, !i.hasAttribute("role") || "dialog" !== i.getAttribute("role") || i.parentElement !== document.body || "auto" !== t.overflowX && "scroll" !== t.overflowX && "auto" !== t.overflowY && "scroll" !== t.overflowY || (a._isScroll = 0)
          }(a._isScroll || "x" === o) && (r.stopPropagation(), r._gsapAllow = !0)
        },
        hr = function(e, t, r, n) {
          return L.create({
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
              return r && bt(U, L.eventTypes[0], vr, !1, !0)
            },
            onDisable: function() {
              return xt(U, L.eventTypes[0], vr, !0)
            }
          })
        },
        gr = /(input|label|select|textarea)/i,
        vr = function(e) {
          var t = gr.test(e.target.tagName);
          (t || cr) && (e._gsapAllow = !0, cr = t)
        };
      lr.sort = function(e) {
        return Ct.sort(e || function(e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
      }, lr.observe = function(e) {
        return new L(e)
      }, lr.normalizeScroll = function(e) {
        if (void 0 === e) return ue;
        if (!0 === e && ue) return ue.enable();
        if (!1 === e) return ue && ue.kill(), void(ue = e);
        var t = e instanceof L ? e : function(e) {
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
            _ = (L.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth,
            k = 0,
            T = Ve(f) ? function() {
              return f(t)
            } : function() {
              return f || 2.8
            },
            E = hr(h, e.type, !0, d),
            S = function() {
              return o = !1
            },
            A = Ne,
            C = Ne,
            M = function() {
              r = We(h, R), C = Z(he ? 1 : 0, r), u && (A = Z(0, We(h, D))), n = Ht
            },
            P = function() {
              m._gsap.y = Xe(parseFloat(m._gsap.y) + y.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
            },
            O = function() {
              M(), i.isActive() && i.vars.scrollY > r && (y() > r ? i.progress(1) && y(r) : i.resetTo("scrollY", r))
            };
          return m && H.set(m, {
            y: "+=0"
          }), e.ignoreCheck = function(e) {
            return he && "touchmove" === e.type && function() {
              if (o) {
                requestAnimationFrame(S);
                var e = Xe(t.deltaY / 2),
                  r = C(y.v - e);
                if (m && r !== y.v + y.offset) {
                  y.offset = r - y.v;
                  var n = Xe((parseFloat(m && m._gsap.y) || 0) - y.offset);
                  m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", y.cacheID = x.cache, jt()
                }
                return !0
              }
              y.offset && P(), o = !0
            }() || w > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
          }, e.onPress = function() {
            o = !1;
            var e = w;
            w = Xe((q.visualViewport && q.visualViewport.scale || 1) / _), i.pause(), e !== w && fr(h, w > 1.01 || !u && "x"), a = b(), s = y(), M(), n = Ht
          }, e.onRelease = e.onGestureStart = function(e, t) {
            if (y.offset && P(), t) {
              x.cache++;
              var n, o, a = T();
              u && (o = (n = b()) + .05 * a * -e.velocityX / .227, a *= ur(b, n, o, We(h, D)), i.vars.scrollX = A(o)), o = (n = y()) + .05 * a * -e.velocityY / .227, a *= ur(y, n, o, We(h, R)), i.vars.scrollY = C(o), i.invalidate().duration(a).play(.01), (he && i.vars.scrollY >= r || n >= r - 1) && H.to({}, {
                onUpdate: O,
                duration: a
              })
            } else l.restart(!0);
            p && p(e)
          }, e.onWheel = function() {
            i._ts && i.pause(), Ae() - k > 1e3 && (n = 0, k = Ae())
          }, e.onChange = function(e, t, r, o, i) {
            if (Ht !== n && M(), t && u && b(A(o[2] === t ? a + (e.startX - e.x) : b() + t - o[1])), r) {
              y.offset && P();
              var l = i[2] === r,
                c = l ? s + e.startY - e.y : y() + r - i[1],
                f = C(c);
              l && c !== f && (s += f - c), y(f)
            }(r || t) && jt()
          }, e.onEnable = function() {
            fr(h, !u && "x"), lr.addEventListener("refresh", O), bt(q, "resize", O), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = b.smooth = !1), E.enable()
          }, e.onDisable = function() {
            fr(h, !0), xt(q, "resize", O), lr.removeEventListener("refresh", O), E.kill()
          }, e.lockAxis = !1 !== e.lockAxis, (t = new L(e)).iOS = he, he && !y() && y(1), he && H.ticker.add(Ne), l = t._dc, i = H.to(t, {
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
        return ue && ue.target === t.target && ue.kill(), Fe(t.target) && (ue = t), t
      }, lr.core = {
        _getVelocityProp: N,
        _inputObserver: hr,
        _scrollers: x,
        _proxies: w,
        bridge: {
          ss: function() {
            Me || Xt("scrollStart"), Me = Ae()
          },
          ref: function() {
            return ee
          }
        }
      }, Be() && H.registerPlugin(lr)
    },
    34708(e, t, r) {
      r.d(t, {
        A: () => c
      });
      var n = r(45862),
        o = r(34336);
      const i = function() {
        return o.A.Date.now()
      };
      var a = r(82486),
        s = Math.max,
        l = Math.min;
      const c = function(e, t, r) {
        var o, c, u, f, d, p, h = 0,
          g = !1,
          v = !1,
          m = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var r = o,
            n = c;
          return o = c = void 0, h = t, f = e.apply(n, r)
        }

        function b(e) {
          var r = e - p;
          return void 0 === p || r >= t || r < 0 || v && e - h >= u
        }

        function x() {
          var e = i();
          if (b(e)) return w(e);
          d = setTimeout(x, function(e) {
            var r = t - (e - p);
            return v ? l(r, u - (e - h)) : r
          }(e))
        }

        function w(e) {
          return d = void 0, m && o ? y(e) : (o = c = void 0, f)
        }

        function _() {
          var e = i(),
            r = b(e);
          if (o = arguments, c = this, p = e, r) {
            if (void 0 === d) return function(e) {
              return h = e, d = setTimeout(x, t), g ? y(e) : f
            }(p);
            if (v) return clearTimeout(d), d = setTimeout(x, t), y(p)
          }
          return void 0 === d && (d = setTimeout(x, t)), f
        }
        return t = (0, a.A)(t) || 0, (0, n.A)(r) && (g = !!r.leading, u = (v = "maxWait" in r) ? s((0, a.A)(r.maxWait) || 0, t) : u, m = "trailing" in r ? !!r.trailing : m), _.cancel = function() {
          void 0 !== d && clearTimeout(d), h = 0, o = p = c = d = void 0
        }, _.flush = function() {
          return void 0 === d ? f : w(i())
        }, _
      }
    },
    50573(e, t, r) {
      r.d(t, {
        A: () => E
      });
      var n = r(20829),
        o = r(70278),
        i = r(73443);
      var a = r(99793);
      const s = function(e, t) {
        return t.length < 2 ? e : (0, a.A)(e, function(e, t, r) {
          var n = -1,
            o = e.length;
          t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
          for (var i = Array(o); ++n < o;) i[n] = e[n + t];
          return i
        }(t, 0, -1))
      };
      var l = r(33018),
        c = Object.prototype.hasOwnProperty;
      const u = function(e, t) {
        var r = -1,
          n = (t = (0, i.A)(t, e)).length;
        if (!n) return !0;
        for (; ++r < n;) {
          var o = (0, l.A)(t[r]);
          if ("__proto__" === o && !c.call(e, "__proto__")) return !1;
          if (("constructor" === o || "prototype" === o) && r < n - 1) return !1
        }
        var a = s(e, t);
        return null == a || delete a[(0, l.A)(function(e) {
          var t = null == e ? 0 : e.length;
          return t ? e[t - 1] : void 0
        }(t))]
      };
      var f = r(57502),
        d = r(58634);
      const p = function(e) {
        return (0, d.A)(e) ? void 0 : e
      };
      var h = r(68071),
        g = r(94508),
        v = r(48348),
        m = r(6700),
        y = g.A ? g.A.isConcatSpreadable : void 0;
      const b = function(e) {
          return (0, m.A)(e) || (0, v.A)(e) || !!(y && e && e[y])
        },
        x = function e(t, r, n, o, i) {
          var a = -1,
            s = t.length;
          for (n || (n = b), i || (i = []); ++a < s;) {
            var l = t[a];
            r > 0 && n(l) ? r > 1 ? e(l, r - 1, n, o, i) : (0, h.A)(i, l) : o || (i[i.length] = l)
          }
          return i
        },
        w = function(e) {
          return null != e && e.length ? x(e, 1) : []
        };
      var _ = r(7352),
        k = r(91847);
      var T = r(47016);
      const E = (S = function(e, t) {
        var r = {};
        if (null == e) return r;
        var a = !1;
        t = (0, n.A)(t, function(t) {
          return t = (0, i.A)(t, e), a || (a = t.length > 1), t
        }), (0, f.A)(e, (0, T.A)(e), r), a && (r = (0, o.A)(r, 7, p));
        for (var s = t.length; s--;) u(r, t[s]);
        return r
      }, (0, k.A)((0, _.A)(S, void 0, w), S + ""));
      var S
    },
    82486(e, t, r) {
      r.d(t, {
        A: () => d
      });
      var n = /\s/;
      var o = /^\s+/;
      const i = function(e) {
        return e ? e.slice(0, function(e) {
          for (var t = e.length; t-- && n.test(e.charAt(t)););
          return t
        }(e) + 1).replace(o, "") : e
      };
      var a = r(45862),
        s = r(80617),
        l = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        f = parseInt;
      const d = function(e) {
        if ("number" == typeof e) return e;
        if ((0, s.A)(e)) return NaN;
        if ((0, a.A)(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = (0, a.A)(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = i(e);
        var r = c.test(e);
        return r || u.test(e) ? f(e.slice(2), r ? 2 : 8) : l.test(e) ? NaN : +e
      }
    }
  }
]);