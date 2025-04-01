! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "83cc0e18-c7e1-46cc-8375-17cf347f6675", e._sentryDebugIdIdentifier = "sentry-dbid-83cc0e18-c7e1-46cc-8375-17cf347f6675")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7903], {
    39492: (e, a, t) => {
      "use strict";
      t.d(a, {
        u: () => it
      });
      let n, r, i, o, s, c, l, d, g, f, b, A, m, p, h = () => n || "undefined" != typeof window && (n = window.gsap) && n.registerPlugin && n,
        u = 1,
        v = [],
        C = [],
        k = [],
        y = Date.now,
        x = (e, a) => a,
        w = (e, a) => ~k.indexOf(e) && k[k.indexOf(e) + 1][a],
        _ = e => !!~b.indexOf(e),
        B = (e, a, t, n, r) => e.addEventListener(a, t, {
          passive: !n,
          capture: !!r
        }),
        I = (e, a, t, n) => e.removeEventListener(a, t, !!n),
        z = "scrollLeft",
        E = "scrollTop",
        S = () => A && A.isPressed || C.cache++,
        M = (e, a) => {
          let t = n => {
            if (n || 0 === n) {
              u && (o.history.scrollRestoration = "manual");
              let a = A && A.isPressed;
              n = t.v = Math.round(n) || (A && A.iOS ? 1 : 0), e(n), t.cacheID = C.cache, a && x("ss", n)
            } else(a || C.cache !== t.cacheID || x("ref")) && (t.cacheID = C.cache, t.v = e());
            return t.v + t.offset
          };
          return t.offset = 0, e && t
        },
        D = {
          s: z,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: M((function(e) {
            return arguments.length ? o.scrollTo(e, T.sc()) : o.pageXOffset || s[z] || c[z] || l[z] || 0
          }))
        },
        T = {
          s: E,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: D,
          sc: M((function(e) {
            return arguments.length ? o.scrollTo(D.sc(), e) : o.pageYOffset || s[E] || c[E] || l[E] || 0
          }))
        },
        R = (e, a) => (a && a._ctx && a._ctx.selector || n.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== n.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        P = (e, a) => {
          let {
            s: t,
            sc: r
          } = a;
          _(e) && (e = s.scrollingElement || c);
          let i = C.indexOf(e),
            o = r === T.sc ? 1 : 2;
          !~i && (i = C.push(e) - 1), C[i + o] || B(e, "scroll", S);
          let l = C[i + o],
            d = l || (C[i + o] = M(w(e, t), !0) || (_(e) ? r : M((function(a) {
              return arguments.length ? e[t] = a : e[t]
            }))));
          return d.target = e, l || (d.smooth = "smooth" === n.getProperty(e, "scrollBehavior")), d
        },
        F = (e, a, t) => {
          let n = e,
            r = e,
            i = y(),
            o = i,
            s = a || 50,
            c = Math.max(500, 3 * s),
            l = (e, a) => {
              let c = y();
              a || c - i > s ? (r = n, n = e, o = i, i = c) : t ? n += e : n = r + (e - r) / (c - o) * (i - o)
            };
          return {
            update: l,
            reset: () => {
              r = n = t ? 0 : n, o = i = 0
            },
            getVelocity: e => {
              let a = o,
                s = r,
                d = y();
              return (e || 0 === e) && e !== n && l(e), i === o || d - o > c ? 0 : (n + (t ? s : -s)) / ((t ? d : i) - a) * 1e3
            }
          }
        },
        N = (e, a) => (a && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        O = e => {
          let a = Math.max(...e),
            t = Math.min(...e);
          return Math.abs(a) >= Math.abs(t) ? a : t
        },
        G = () => {
          f = n.core.globals().ScrollTrigger, f && f.core && (() => {
            let e = f.core,
              a = e.bridge || {},
              t = e._scrollers,
              n = e._proxies;
            t.push(...C), n.push(...k), C = t, k = n, x = (e, t) => a[e](t)
          })()
        },
        U = e => (n = e || h(), n && "undefined" != typeof document && document.body && (o = window, s = document, c = s.documentElement, l = s.body, b = [o, s, c, l], i = n.utils.clamp, p = n.core.context || function() {}, g = "onpointerenter" in l ? "pointer" : "mouse", d = j.isTouch = o.matchMedia && o.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in o || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, m = j.eventTypes = ("ontouchstart" in c ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in c ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => u = 0), 500), G(), r = 1), r);
      D.op = T, C.cache = 0;
      class j {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          r || U(n) || console.warn("Please gsap.registerPlugin(Observer)"), f || G();
          let {
            tolerance: a,
            dragMinimum: t,
            type: i,
            target: b,
            lineHeight: h,
            debounce: u,
            preventDefault: C,
            onStop: k,
            onStopDelay: x,
            ignore: w,
            wheelSpeed: z,
            event: E,
            onDragStart: M,
            onDragEnd: j,
            onDrag: H,
            onPress: Q,
            onRelease: W,
            onRight: L,
            onLeft: Y,
            onUp: V,
            onDown: q,
            onChangeX: Z,
            onChangeY: J,
            onChange: X,
            onToggleX: K,
            onToggleY: $,
            onHover: ee,
            onHoverEnd: ae,
            onMove: te,
            ignoreCheck: ne,
            isNormalizer: re,
            onGestureStart: ie,
            onGestureEnd: oe,
            onWheel: se,
            onEnable: ce,
            onDisable: le,
            onClick: de,
            scrollSpeed: ge,
            capture: fe,
            allowClicks: be,
            lockAxis: Ae,
            onLockAxis: me
          } = e;
          this.target = b = R(b) || c, this.vars = e, w && (w = n.utils.toArray(w)), a = a || 1e-9, t = t || 0, z = z || 1, ge = ge || 1, i = i || "wheel,touch,pointer", u = !1 !== u, h || (h = parseFloat(o.getComputedStyle(l).lineHeight) || 22);
          let pe, he, ue, ve, Ce, ke, ye, xe = this,
            we = 0,
            _e = 0,
            Be = P(b, D),
            Ie = P(b, T),
            ze = Be(),
            Ee = Ie(),
            Se = ~i.indexOf("touch") && !~i.indexOf("pointer") && "pointerdown" === m[0],
            Me = _(b),
            De = b.ownerDocument || s,
            Te = [0, 0, 0],
            Re = [0, 0, 0],
            Pe = 0,
            Fe = () => Pe = y(),
            Ne = (e, a) => (xe.event = e) && w && ~w.indexOf(e.target) || a && Se && "touch" !== e.pointerType || ne && ne(e, a),
            Oe = () => {
              let e = xe.deltaX = O(Te),
                t = xe.deltaY = O(Re),
                n = Math.abs(e) >= a,
                r = Math.abs(t) >= a;
              X && (n || r) && X(xe, e, t, Te, Re), n && (L && xe.deltaX > 0 && L(xe), Y && xe.deltaX < 0 && Y(xe), Z && Z(xe), K && xe.deltaX < 0 != we < 0 && K(xe), we = xe.deltaX, Te[0] = Te[1] = Te[2] = 0), r && (q && xe.deltaY > 0 && q(xe), V && xe.deltaY < 0 && V(xe), J && J(xe), $ && xe.deltaY < 0 != _e < 0 && $(xe), _e = xe.deltaY, Re[0] = Re[1] = Re[2] = 0), (ve || ue) && (te && te(xe), ue && (H(xe), ue = !1), ve = !1), ke && !(ke = !1) && me && me(xe), Ce && (se(xe), Ce = !1), pe = 0
            },
            Ge = (e, a, t) => {
              Te[t] += e, Re[t] += a, xe._vx.update(e), xe._vy.update(a), u ? pe || (pe = requestAnimationFrame(Oe)) : Oe()
            },
            Ue = (e, a) => {
              Ae && !ye && (xe.axis = ye = Math.abs(e) > Math.abs(a) ? "x" : "y", ke = !0), "y" !== ye && (Te[2] += e, xe._vx.update(e, !0)), "x" !== ye && (Re[2] += a, xe._vy.update(a, !0)), u ? pe || (pe = requestAnimationFrame(Oe)) : Oe()
            },
            je = e => {
              if (Ne(e, 1)) return;
              let a = (e = N(e, C)).clientX,
                n = e.clientY,
                r = a - xe.x,
                i = n - xe.y,
                o = xe.isDragging;
              xe.x = a, xe.y = n, (o || Math.abs(xe.startX - a) >= t || Math.abs(xe.startY - n) >= t) && (H && (ue = !0), o || (xe.isDragging = !0), Ue(r, i), o || M && M(xe))
            },
            He = xe.onPress = e => {
              Ne(e, 1) || e && e.button || (xe.axis = ye = null, he.pause(), xe.isPressed = !0, e = N(e), we = _e = 0, xe.startX = xe.x = e.clientX, xe.startY = xe.y = e.clientY, xe._vx.reset(), xe._vy.reset(), B(re ? b : De, m[1], je, C, !0), xe.deltaX = xe.deltaY = 0, Q && Q(xe))
            },
            Qe = xe.onRelease = e => {
              if (Ne(e, 1)) return;
              I(re ? b : De, m[1], je, !0);
              let a = !isNaN(xe.y - xe.startY),
                t = xe.isDragging && (Math.abs(xe.x - xe.startX) > 3 || Math.abs(xe.y - xe.startY) > 3),
                r = N(e);
              !t && a && (xe._vx.reset(), xe._vy.reset(), C && be && n.delayedCall(.08, (() => {
                if (y() - Pe > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (De.createEvent) {
                  let a = De.createEvent("MouseEvents");
                  a.initMouseEvent("click", !0, !0, o, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(a)
                }
              }))), xe.isDragging = xe.isGesturing = xe.isPressed = !1, k && !re && he.restart(!0), j && t && j(xe), W && W(xe, t)
            },
            We = e => e.touches && e.touches.length > 1 && (xe.isGesturing = !0) && ie(e, xe.isDragging),
            Le = () => (xe.isGesturing = !1) || oe(xe),
            Ye = e => {
              if (Ne(e)) return;
              let a = Be(),
                t = Ie();
              Ge((a - ze) * ge, (t - Ee) * ge, 1), ze = a, Ee = t, k && he.restart(!0)
            },
            Ve = e => {
              if (Ne(e)) return;
              e = N(e, C), se && (Ce = !0);
              let a = (1 === e.deltaMode ? h : 2 === e.deltaMode ? o.innerHeight : 1) * z;
              Ge(e.deltaX * a, e.deltaY * a, 0), k && !re && he.restart(!0)
            },
            qe = e => {
              if (Ne(e)) return;
              let a = e.clientX,
                t = e.clientY,
                n = a - xe.x,
                r = t - xe.y;
              xe.x = a, xe.y = t, ve = !0, (n || r) && Ue(n, r)
            },
            Ze = e => {
              xe.event = e, ee(xe)
            },
            Je = e => {
              xe.event = e, ae(xe)
            },
            Xe = e => Ne(e) || N(e, C) && de(xe);
          he = xe._dc = n.delayedCall(x || .25, (() => {
            xe._vx.reset(), xe._vy.reset(), he.pause(), k && k(xe)
          })).pause(), xe.deltaX = xe.deltaY = 0, xe._vx = F(0, 50, !0), xe._vy = F(0, 50, !0), xe.scrollX = Be, xe.scrollY = Ie, xe.isDragging = xe.isGesturing = xe.isPressed = !1, p(this), xe.enable = e => (xe.isEnabled || (B(Me ? De : b, "scroll", S), i.indexOf("scroll") >= 0 && B(Me ? De : b, "scroll", Ye, C, fe), i.indexOf("wheel") >= 0 && B(b, "wheel", Ve, C, fe), (i.indexOf("touch") >= 0 && d || i.indexOf("pointer") >= 0) && (B(b, m[0], He, C, fe), B(De, m[2], Qe), B(De, m[3], Qe), be && B(b, "click", Fe, !1, !0), de && B(b, "click", Xe), ie && B(De, "gesturestart", We), oe && B(De, "gestureend", Le), ee && B(b, g + "enter", Ze), ae && B(b, g + "leave", Je), te && B(b, g + "move", qe)), xe.isEnabled = !0, e && e.type && He(e), ce && ce(xe)), xe), xe.disable = () => {
            xe.isEnabled && (v.filter((e => e !== xe && _(e.target))).length || I(Me ? De : b, "scroll", S), xe.isPressed && (xe._vx.reset(), xe._vy.reset(), I(re ? b : De, m[1], je, !0)), I(Me ? De : b, "scroll", Ye, fe), I(b, "wheel", Ve, fe), I(b, m[0], He, fe), I(De, m[2], Qe), I(De, m[3], Qe), I(b, "click", Fe, !0), I(b, "click", Xe), I(De, "gesturestart", We), I(De, "gestureend", Le), I(b, g + "enter", Ze), I(b, g + "leave", Je), I(b, g + "move", qe), xe.isEnabled = xe.isPressed = xe.isDragging = !1, le && le(xe))
          }, xe.kill = xe.revert = () => {
            xe.disable();
            let e = v.indexOf(xe);
            e >= 0 && v.splice(e, 1), A === xe && (A = 0)
          }, v.push(xe), re && _(b) && (A = xe), xe.enable(E)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      j.version = "3.12.2", j.create = e => new j(e), j.register = U, j.getAll = () => v.slice(), j.getById = e => v.filter((a => a.vars.id === e))[0], h() && n.registerPlugin(j);
      let H, Q, W, L, Y, V, q, Z, J, X, K, $, ee, ae, te, ne, re, ie, oe, se, ce, le, de, ge, fe, be, Ae, me, pe, he, ue, ve, Ce, ke, ye, xe, we = 1,
        _e = Date.now,
        Be = _e(),
        Ie = 0,
        ze = 0,
        Ee = (e, a, t) => {
          let n = Qe(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return t["_" + a + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e
        },
        Se = (e, a) => !a || Qe(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        Me = () => ze && requestAnimationFrame(Me),
        De = () => ae = 1,
        Te = () => ae = 0,
        Re = e => e,
        Pe = e => Math.round(1e5 * e) / 1e5 || 0,
        Fe = () => "undefined" != typeof window,
        Ne = () => H || Fe() && (H = window.gsap) && H.registerPlugin && H,
        Oe = e => !!~q.indexOf(e),
        Ge = e => ("Height" === e ? ue : W["inner" + e]) || Y["client" + e] || V["client" + e],
        Ue = e => w(e, "getBoundingClientRect") || (Oe(e) ? () => (Ka.width = W.innerWidth, Ka.height = ue, Ka) : () => fa(e)),
        je = (e, a) => {
          let {
            s: t,
            d2: n,
            d: r,
            a: i
          } = a;
          return Math.max(0, (t = "scroll" + n) && (i = w(e, t)) ? i() - Ue(e)()[r] : Oe(e) ? (Y[t] || V[t]) - Ge(n) : e[t] - e["offset" + n])
        },
        He = (e, a) => {
          for (let t = 0; t < oe.length; t += 3)(!a || ~a.indexOf(oe[t + 1])) && e(oe[t], oe[t + 1], oe[t + 2])
        },
        Qe = e => "string" == typeof e,
        We = e => "function" == typeof e,
        Le = e => "number" == typeof e,
        Ye = e => "object" == typeof e,
        Ve = (e, a, t) => e && e.progress(a ? 0 : 1) && t && e.pause(),
        qe = (e, a) => {
          if (e.enabled) {
            let t = a(e);
            t && t.totalTime && (e.callbackAnimation = t)
          }
        },
        Ze = Math.abs,
        Je = "left",
        Xe = "right",
        Ke = "bottom",
        $e = "width",
        ea = "height",
        aa = "Right",
        ta = "Left",
        na = "Top",
        ra = "Bottom",
        ia = "padding",
        oa = "margin",
        sa = "Width",
        ca = "Height",
        la = "px",
        da = e => W.getComputedStyle(e),
        ga = (e, a) => {
          for (let t in a) t in e || (e[t] = a[t]);
          return e
        },
        fa = (e, a) => {
          let t = a && "matrix(1, 0, 0, 1, 0, 0)" !== da(e)[te] && H.to(e, {
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
          return t && t.progress(0).kill(), n
        },
        ba = (e, a) => {
          let {
            d2: t
          } = a;
          return e["offset" + t] || e["client" + t] || 0
        },
        Aa = e => {
          let a, t = [],
            n = e.labels,
            r = e.duration();
          for (a in n) t.push(n[a] / r);
          return t
        },
        ma = e => {
          let a = H.utils.snap(e),
            t = Array.isArray(e) && e.slice(0).sort(((e, a) => e - a));
          return t ? function(e, n) {
            let r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001;
            if (!n) return a(e);
            if (n > 0) {
              for (e -= i, r = 0; r < t.length; r++)
                if (t[r] >= e) return t[r];
              return t[r - 1]
            }
            for (r = t.length, e += i; r--;)
              if (t[r] <= e) return t[r];
            return t[0]
          } : function(t, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001,
              i = a(t);
            return !n || Math.abs(i - t) < r || i - t < 0 == n < 0 ? i : a(n < 0 ? t - e : t + e)
          }
        },
        pa = (e, a, t, n) => t.split(",").forEach((t => e(a, t, n))),
        ha = (e, a, t, n, r) => e.addEventListener(a, t, {
          passive: !n,
          capture: !!r
        }),
        ua = (e, a, t, n) => e.removeEventListener(a, t, !!n),
        va = (e, a, t) => {
          (t = t && t.wheelHandler) && (e(a, "wheel", t), e(a, "touchmove", t))
        },
        Ca = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        ka = {
          toggleActions: "play",
          anticipatePin: 0
        },
        ya = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        xa = (e, a) => {
          if (Qe(e)) {
            let t = e.indexOf("="),
              n = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (n *= a / 100), e = e.substr(0, t - 1)), e = n + (e in ya ? ya[e] * a : ~e.indexOf("%") ? parseFloat(e) * a / 100 : parseFloat(e) || 0)
          }
          return e
        },
        wa = (e, a, t, n, r, i, o, s) => {
          let {
            startColor: c,
            endColor: l,
            fontSize: d,
            indent: g,
            fontWeight: f
          } = r, b = L.createElement("div"), A = Oe(t) || "fixed" === w(t, "pinType"), m = -1 !== e.indexOf("scroller"), p = A ? V : t, h = -1 !== e.indexOf("start"), u = h ? c : l, v = "border-color:" + u + ";font-size:" + d + ";color:" + u + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return v += "position:" + ((m || s) && A ? "fixed;" : "absolute;"), (m || s || !A) && (v += (n === T ? Xe : Ke) + ":" + (i + parseFloat(g)) + "px;"), o && (v += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), b._isStart = h, b.setAttribute("class", "gsap-marker-" + e + (a ? " marker-" + a : "")), b.style.cssText = v, b.innerText = a || 0 === a ? e + "-" + a : e, p.children[0] ? p.insertBefore(b, p.children[0]) : p.appendChild(b), b._offset = b["offset" + n.op.d2], _a(b, 0, n, h), b
        },
        _a = (e, a, t, n) => {
          let r = {
              display: "block"
            },
            i = t[n ? "os2" : "p2"],
            o = t[n ? "p2" : "os2"];
          e._isFlipped = n, r[t.a + "Percent"] = n ? -100 : 0, r[t.a] = n ? "1px" : 0, r["border" + i + sa] = 1, r["border" + o + sa] = 0, r[t.p] = a + "px", H.set(e, r)
        },
        Ba = [],
        Ia = {},
        za = () => _e() - Ie > 34 && (Ce || (Ce = requestAnimationFrame(La))),
        Ea = () => {
          (!de || !de.isPressed || de.startX > V.clientWidth) && (C.cache++, de ? Ce || (Ce = requestAnimationFrame(La)) : La(), Ie || Pa("scrollStart"), Ie = _e())
        },
        Sa = () => {
          be = W.innerWidth, fe = W.innerHeight
        },
        Ma = () => {
          C.cache++, !ee && !le && !L.fullscreenElement && !L.webkitFullscreenElement && (!ge || be !== W.innerWidth || Math.abs(W.innerHeight - fe) > .25 * W.innerHeight) && Z.restart(!0)
        },
        Da = {},
        Ta = [],
        Ra = () => ua(it, "scrollEnd", Ra) || Ha(!0),
        Pa = e => Da[e] && Da[e].map((e => e())) || Ta,
        Fa = [],
        Na = e => {
          for (let a = 0; a < Fa.length; a += 5)(!e || Fa[a + 4] && Fa[a + 4].query === e) && (Fa[a].style.cssText = Fa[a + 1], Fa[a].getBBox && Fa[a].setAttribute("transform", Fa[a + 2] || ""), Fa[a + 3].uncache = 1)
        },
        Oa = (e, a) => {
          let t;
          for (ne = 0; ne < Ba.length; ne++) t = Ba[ne], !t || a && t._ctx !== a || (e ? t.kill(1) : t.revert(!0, !0));
          a && Na(a), a || Pa("revert")
        },
        Ga = (e, a) => {
          C.cache++, (a || !ke) && C.forEach((e => We(e) && e.cacheID++ && (e.rec = 0))), Qe(e) && (W.history.scrollRestoration = pe = e)
        },
        Ua = 0,
        ja = () => {
          V.appendChild(he), ue = he.offsetHeight || W.innerHeight, V.removeChild(he)
        },
        Ha = (e, a) => {
          if (Ie && !e) return void ha(it, "scrollEnd", Ra);
          ja(), ke = it.isRefreshing = !0, C.forEach((e => We(e) && ++e.cacheID && (e.rec = e())));
          let t = Pa("refreshInit");
          se && it.sort(), a || Oa(), C.forEach((e => {
            We(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), Ba.slice(0).forEach((e => e.refresh())), Ba.forEach(((e, a) => {
            if (e._subPinOffset && e.pin) {
              let a = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                t = e.pin[a];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[a] - t), e.refresh()
            }
          })), Ba.forEach((e => {
            let a = je(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > a) && e.setPositions(e.start, Math.max(e.start + 1, a), !0)
          })), t.forEach((e => e && e.render && e.render(-1))), C.forEach((e => {
            We(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), Ga(pe, 1), Z.pause(), Ua++, ke = 2, La(2), Ba.forEach((e => We(e.vars.onRefresh) && e.vars.onRefresh(e))), ke = it.isRefreshing = !1, Pa("refresh")
        },
        Qa = 0,
        Wa = 1,
        La = e => {
          if (!ke || 2 === e) {
            it.isUpdating = !0, xe && xe.update(0);
            let e = Ba.length,
              a = _e(),
              t = a - Be >= 50,
              n = e && Ba[0].scroll();
            if (Wa = Qa > n ? -1 : 1, ke || (Qa = n), t && (Ie && !ae && a - Ie > 200 && (Ie = 0, Pa("scrollEnd")), K = Be, Be = a), Wa < 0) {
              for (ne = e; ne-- > 0;) Ba[ne] && Ba[ne].update(0, t);
              Wa = 1
            } else
              for (ne = 0; ne < e; ne++) Ba[ne] && Ba[ne].update(0, t);
            it.isUpdating = !1
          }
          Ce = 0
        },
        Ya = [Je, "top", Ke, Xe, oa + ra, oa + aa, oa + na, oa + ta, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Va = Ya.concat([$e, ea, "boxSizing", "max" + sa, "max" + ca, "position", oa, ia, ia + na, ia + aa, ia + ra, ia + ta]),
        qa = (e, a, t, n) => {
          if (!e._gsap.swappedIn) {
            let r, i = Ya.length,
              o = a.style,
              s = e.style;
            for (; i--;) r = Ya[i], o[r] = t[r];
            o.position = "absolute" === t.position ? "absolute" : "relative", "inline" === t.display && (o.display = "inline-block"), s[Ke] = s[Xe] = "auto", o.flexBasis = t.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[$e] = ba(e, D) + la, o[ea] = ba(e, T) + la, o[ia] = s[oa] = s.top = s[Je] = "0", Ja(n), s[$e] = s["max" + sa] = t[$e], s[ea] = s["max" + ca] = t[ea], s[ia] = t[ia], e.parentNode !== a && (e.parentNode.insertBefore(a, e), a.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Za = /([A-Z])/g,
        Ja = e => {
          if (e) {
            let a, t, n = e.t.style,
              r = e.length,
              i = 0;
            for ((e.t._gsap || H.core.getCache(e.t)).uncache = 1; i < r; i += 2) t = e[i + 1], a = e[i], t ? n[a] = t : n[a] && n.removeProperty(a.replace(Za, "-$1").toLowerCase())
          }
        },
        Xa = e => {
          let a = Va.length,
            t = e.style,
            n = [],
            r = 0;
          for (; r < a; r++) n.push(Va[r], t[Va[r]]);
          return n.t = e, n
        },
        Ka = {
          left: 0,
          top: 0
        },
        $a = (e, a, t, n, r, i, o, s, c, l, d, g, f, b) => {
          We(e) && (e = e(s)), Qe(e) && "max" === e.substr(0, 3) && (e = g + ("=" === e.charAt(4) ? xa("0" + e.substr(3), t) : 0));
          let A, m, p, h = f ? f.time() : 0;
          if (f && f.seek(0), isNaN(e) || (e = +e), Le(e)) f && (e = H.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, g, e)), o && _a(o, t, n, !0);
          else {
            We(a) && (a = a(s));
            let i, d, g, f, b = (e || "0").split(" ");
            p = R(a, s) || V, i = fa(p) || {}, i && (i.left || i.top) || "none" !== da(p).display || (f = p.style.display, p.style.display = "block", i = fa(p), f ? p.style.display = f : p.style.removeProperty("display")), d = xa(b[0], i[n.d]), g = xa(b[1] || "0", t), e = i[n.p] - c[n.p] - l + d + r - g, o && _a(o, g, n, t - g < 20 || o._isStart && g > 20), t -= t - g
          }
          if (b && (s[b] = e || -.001, e < 0 && (e = 0)), i) {
            let a = e + t,
              r = i._isStart;
            A = "scroll" + n.d2, _a(i, a, n, r && a > 20 || !r && (d ? Math.max(V[A], Y[A]) : i.parentNode[A]) <= a + 1), d && (c = fa(o), d && (i.style[n.op.p] = c[n.op.p] - n.op.m - i._offset + la))
          }
          return f && p && (A = fa(p), f.seek(g), m = fa(p), f._caScrollDist = A[n.p] - m[n.p], e = e / f._caScrollDist * g), f && f.seek(h), f ? e : Math.round(e)
        },
        et = /(webkit|moz|length|cssText|inset)/i,
        at = (e, a, t, n) => {
          if (e.parentNode !== a) {
            let r, i, o = e.style;
            if (a === V) {
              for (r in e._stOrig = o.cssText, i = da(e), i) + r || et.test(r) || !i[r] || "string" != typeof o[r] || "0" === r || (o[r] = i[r]);
              o.top = t, o.left = n
            } else o.cssText = e._stOrig;
            H.core.getCache(e).uncache = 1, a.appendChild(e)
          }
        },
        tt = (e, a, t) => {
          let n = a,
            r = n;
          return a => {
            let i = Math.round(e());
            return i !== n && i !== r && Math.abs(i - n) > 3 && Math.abs(i - r) > 3 && (a = i, t && t()), r = n, n = a, a
          }
        },
        nt = (e, a, t) => {
          let n = {};
          n[a.p] = "+=" + t, H.set(e, n)
        },
        rt = (e, a) => {
          let t = P(e, a),
            n = "_scroll" + a.p2,
            r = (a, i, o, s, c) => {
              let l = r.tween,
                d = i.onComplete,
                g = {};
              o = o || t();
              let f = tt(t, o, (() => {
                l.kill(), r.tween = 0
              }));
              return c = s && c || 0, s = s || a - o, l && l.kill(), i[n] = a, i.modifiers = g, g[n] = () => f(o + s * l.ratio + c * l.ratio * l.ratio), i.onUpdate = () => {
                C.cache++, La()
              }, i.onComplete = () => {
                r.tween = 0, d && d.call(l)
              }, l = r.tween = H.to(e, i), l
            };
          return e[n] = t, t.wheelHandler = () => r.tween && r.tween.kill() && (r.tween = 0), ha(e, "wheel", t.wheelHandler), it.isTouch && ha(e, "touchmove", t.wheelHandler), r
        };
      class it {
        constructor(e, a) {
          Q || it.register(H) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), me(this), this.init(e, a)
        }
        init(e, a) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ze) return void(this.update = this.refresh = this.kill = Re);
          e = ga(Qe(e) || Le(e) || e.nodeType ? {
            trigger: e
          } : e, ka);
          let t, n, r, i, o, s, c, l, d, g, f, b, A, m, p, h, u, v, y, x, _, B, I, z, E, S, M, F, N, O, G, U, j, Q, q, Z, $, te, re, {
              onUpdate: ie,
              toggleClass: oe,
              id: le,
              onToggle: de,
              onRefresh: ge,
              scrub: fe,
              trigger: be,
              pin: Ae,
              pinSpacing: me,
              invalidateOnRefresh: pe,
              anticipatePin: he,
              onScrubComplete: ue,
              onSnapComplete: Ce,
              once: Be,
              snap: Me,
              pinReparent: De,
              pinSpacer: Te,
              containerAnimation: Fe,
              fastScrollEnd: Ne,
              preventOverlaps: He
            } = e,
            Je = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? D : T,
            Xe = !fe && 0 !== fe,
            Ke = R(e.scroller || W),
            pa = H.core.getCache(Ke),
            va = Oe(Ke),
            ya = "fixed" === ("pinType" in e ? e.pinType : w(Ke, "pinType") || va && "fixed"),
            _a = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            za = Xe && e.toggleActions.split(" "),
            Sa = "markers" in e ? e.markers : ka.markers,
            Da = va ? 0 : parseFloat(da(Ke)["border" + Je.p2 + sa]) || 0,
            Ta = this,
            Pa = e.onRefreshInit && (() => e.onRefreshInit(Ta)),
            Fa = ((e, a, t) => {
              let {
                d: n,
                d2: r,
                a: i
              } = t;
              return (i = w(e, "getBoundingClientRect")) ? () => i()[n] : () => (a ? Ge(r) : e["client" + r]) || 0
            })(Ke, va, Je),
            Na = ((e, a) => !a || ~k.indexOf(e) ? Ue(e) : () => Ka)(Ke, va),
            Oa = 0,
            Ga = 0,
            ja = 0,
            Qa = P(Ke, Je);
          var La;
          if (Ta._startClamp = Ta._endClamp = !1, Ta._dir = Je, he *= 45, Ta.scroller = Ke, Ta.scroll = Fe ? Fe.time.bind(Fe) : Qa, i = Qa(), Ta.vars = e, a = a || e.animation, "refreshPriority" in e && (se = 1, -9999 === e.refreshPriority && (xe = Ta)), pa.tweenScroll = pa.tweenScroll || {
              top: rt(Ke, T),
              left: rt(Ke, D)
            }, Ta.tweenTo = t = pa.tweenScroll[Je.p], Ta.scrubDuration = e => {
              j = Le(e) && e, j ? U ? U.duration(e) : U = H.to(a, {
                ease: "expo",
                totalProgress: "+=0",
                duration: j,
                paused: !0,
                onComplete: () => ue && ue(Ta)
              }) : (U && U.progress(1).kill(), U = 0)
            }, a && (a.vars.lazy = !1, a._initted && !Ta.isReverted || !1 !== a.vars.immediateRender && !1 !== e.immediateRender && a.duration() && a.render(0, !0, !0), Ta.animation = a.pause(), a.scrollTrigger = Ta, Ta.scrubDuration(fe), O = 0, le || (le = a.vars.id)), Me && (Ye(Me) && !Me.push || (Me = {
              snapTo: Me
            }), "scrollBehavior" in V.style && H.set(va ? [V, Y] : Ke, {
              scrollBehavior: "auto"
            }), C.forEach((e => We(e) && e.target === (va ? L.scrollingElement || Y : Ke) && (e.smooth = !1))), r = We(Me.snapTo) ? Me.snapTo : "labels" === Me.snapTo ? (e => a => H.utils.snap(Aa(e), a))(a) : "labelsDirectional" === Me.snapTo ? (La = a, (e, a) => ma(Aa(La))(e, a.direction)) : !1 !== Me.directional ? (e, a) => ma(Me.snapTo)(e, _e() - Ga < 500 ? 0 : a.direction) : H.utils.snap(Me.snapTo), Q = Me.duration || {
              min: .1,
              max: 2
            }, Q = Ye(Q) ? X(Q.min, Q.max) : X(Q, Q), q = H.delayedCall(Me.delay || j / 2 || .1, (() => {
              let e = Qa(),
                n = _e() - Ga < 500,
                i = t.tween;
              if (!(n || Math.abs(Ta.getVelocity()) < 10) || i || ae || Oa === e) Ta.isActive && Oa !== e && q.restart(!0);
              else {
                let o = (e - s) / m,
                  l = a && !Xe ? a.totalProgress() : o,
                  d = n ? 0 : (l - G) / (_e() - K) * 1e3 || 0,
                  g = H.utils.clamp(-o, 1 - o, Ze(d / 2) * d / .185),
                  f = o + (!1 === Me.inertia ? 0 : g),
                  b = X(0, 1, r(f, Ta)),
                  A = Math.round(s + b * m),
                  {
                    onStart: p,
                    onInterrupt: h,
                    onComplete: u
                  } = Me;
                if (e <= c && e >= s && A !== e) {
                  if (i && !i._initted && i.data <= Ze(A - e)) return;
                  !1 === Me.inertia && (g = b - o), t(A, {
                    duration: Q(Ze(.185 * Math.max(Ze(f - l), Ze(b - l)) / d / .05 || 0)),
                    ease: Me.ease || "power3",
                    data: Ze(A - e),
                    onInterrupt: () => q.restart(!0) && h && h(Ta),
                    onComplete: () => {
                      Ta.update(), Oa = Qa(), O = G = a && !Xe ? a.totalProgress() : Ta.progress, Ce && Ce(Ta), u && u(Ta)
                    }
                  }, e, g * m, A - e - g * m), p && p(Ta, t.tween)
                }
              }
            })).pause()), le && (Ia[le] = Ta), be = Ta.trigger = R(be || !0 !== Ae && Ae), re = be && be._gsap && be._gsap.stRevert, re && (re = re(Ta)), Ae = !0 === Ae ? be : R(Ae), Qe(oe) && (oe = {
              targets: be,
              className: oe
            }), Ae && (!1 === me || me === oa || (me = !(!me && Ae.parentNode && Ae.parentNode.style && "flex" === da(Ae.parentNode).display) && ia), Ta.pin = Ae, n = H.core.getCache(Ae), n.spacer ? p = n.pinState : (Te && (Te = R(Te), Te && !Te.nodeType && (Te = Te.current || Te.nativeElement), n.spacerIsNative = !!Te, Te && (n.spacerState = Xa(Te))), n.spacer = v = Te || L.createElement("div"), v.classList.add("pin-spacer"), le && v.classList.add("pin-spacer-" + le), n.pinState = p = Xa(Ae)), !1 !== e.force3D && H.set(Ae, {
              force3D: !0
            }), Ta.spacer = v = n.spacer, N = da(Ae), z = N[me + Je.os2], x = H.getProperty(Ae), _ = H.quickSetter(Ae, Je.a, la), qa(Ae, v, N), u = Xa(Ae)), Sa) {
            b = Ye(Sa) ? ga(Sa, Ca) : Ca, g = wa("scroller-start", le, Ke, Je, b, 0), f = wa("scroller-end", le, Ke, Je, b, 0, g), y = g["offset" + Je.op.d2];
            let e = R(w(Ke, "content") || Ke);
            l = this.markerStart = wa("start", le, e, Je, b, y, 0, Fe), d = this.markerEnd = wa("end", le, e, Je, b, y, 0, Fe), Fe && (te = H.quickSetter([l, d], Je.a, la)), ya || k.length && !0 === w(Ke, "fixedMarkers") || ((e => {
              let a = da(e).position;
              e.style.position = "absolute" === a || "fixed" === a ? a : "relative"
            })(va ? V : Ke), H.set([g, f], {
              force3D: !0
            }), S = H.quickSetter(g, Je.a, la), F = H.quickSetter(f, Je.a, la))
          }
          if (Fe) {
            let e = Fe.vars.onUpdate,
              a = Fe.vars.onUpdateParams;
            Fe.eventCallback("onUpdate", (() => {
              Ta.update(0, 0, 1), e && e.apply(Fe, a || [])
            }))
          }
          if (Ta.previous = () => Ba[Ba.indexOf(Ta) - 1], Ta.next = () => Ba[Ba.indexOf(Ta) + 1], Ta.revert = (e, t) => {
              if (!t) return Ta.kill(!0);
              let n = !1 !== e || !Ta.enabled,
                r = ee;
              n !== Ta.isReverted && (n && (Z = Math.max(Qa(), Ta.scroll.rec || 0), ja = Ta.progress, $ = a && a.progress()), l && [l, d, g, f].forEach((e => e.style.display = n ? "none" : "block")), n && (ee = Ta, Ta.update(n)), !Ae || De && Ta.isActive || (n ? ((e, a, t) => {
                Ja(t);
                let n = e._gsap;
                if (n.spacerIsNative) Ja(n.spacerState);
                else if (e._gsap.swappedIn) {
                  let t = a.parentNode;
                  t && (t.insertBefore(e, a), t.removeChild(a))
                }
                e._gsap.swappedIn = !1
              })(Ae, v, p) : qa(Ae, v, da(Ae), E)), n || Ta.update(n), ee = r, Ta.isReverted = n)
            }, Ta.refresh = (n, r, b, C) => {
              if ((ee || !Ta.enabled) && !r) return;
              if (Ae && n && Ie) return void ha(it, "scrollEnd", Ra);
              !ke && Pa && Pa(Ta), ee = Ta, t.tween && !b && (t.tween.kill(), t.tween = 0), U && U.pause(), pe && a && a.revert({
                kill: !1
              }).invalidate(), Ta.isReverted || Ta.revert(!0, !0), Ta._subPinOffset = !1;
              let k, y, w, _, z, S, F, N, O, G, j, Q, W, J = Fa(),
                X = Na(),
                K = Fe ? Fe.duration() : je(Ke, Je),
                ae = m <= .01,
                te = 0,
                ne = C || 0,
                re = Ye(b) ? b.end : e.end,
                ie = e.endTrigger || be,
                oe = Ye(b) ? b.start : e.start || (0 !== e.start && be ? Ae ? "0 0" : "0 100%" : 0),
                se = Ta.pinnedContainer = e.pinnedContainer && R(e.pinnedContainer, Ta),
                le = be && Math.max(0, Ba.indexOf(Ta)) || 0,
                de = le;
              for (Sa && Ye(b) && (Q = H.getProperty(g, Je.p), W = H.getProperty(f, Je.p)); de--;) S = Ba[de], S.end || S.refresh(0, 1) || (ee = Ta), F = S.pin, !F || F !== be && F !== Ae && F !== se || S.isReverted || (G || (G = []), G.unshift(S), S.revert(!0, !0)), S !== Ba[de] && (le--, de--);
              for (We(oe) && (oe = oe(Ta)), oe = Ee(oe, "start", Ta), s = $a(oe, be, J, Je, Qa(), l, g, Ta, X, Da, ya, K, Fe, Ta._startClamp && "_startClamp") || (Ae ? -.001 : 0), We(re) && (re = re(Ta)), Qe(re) && !re.indexOf("+=") && (~re.indexOf(" ") ? re = (Qe(oe) ? oe.split(" ")[0] : "") + re : (te = xa(re.substr(2), J), re = Qe(oe) ? oe : (Fe ? H.utils.mapRange(0, Fe.duration(), Fe.scrollTrigger.start, Fe.scrollTrigger.end, s) : s) + te, ie = be)), re = Ee(re, "end", Ta), c = Math.max(s, $a(re || (ie ? "100% 0" : K), ie, J, Je, Qa() + te, d, f, Ta, X, Da, ya, K, Fe, Ta._endClamp && "_endClamp")) || -.001, te = 0, de = le; de--;) S = Ba[de], F = S.pin, F && S.start - S._pinPush <= s && !Fe && S.end > 0 && (k = S.end - (Ta._startClamp ? Math.max(0, S.start) : S.start), (F === be && S.start - S._pinPush < s || F === se) && isNaN(oe) && (te += k * (1 - S.progress)), F === Ae && (ne += k));
              if (s += te, c += te, Ta._startClamp && (Ta._startClamp += te), Ta._endClamp && !ke && (Ta._endClamp = c || -.001, c = Math.min(c, je(Ke, Je))), m = c - s || (s -= .01) && .001, ae && (ja = H.utils.clamp(0, 1, H.utils.normalize(s, c, Z))), Ta._pinPush = ne, l && te && (k = {}, k[Je.a] = "+=" + te, se && (k[Je.p] = "-=" + Qa()), H.set([l, d], k)), Ae) k = da(Ae), _ = Je === T, w = Qa(), B = parseFloat(x(Je.a)) + ne, !K && c > 1 && (j = (va ? L.scrollingElement || Y : Ke).style, j = {
                style: j,
                value: j["overflow" + Je.a.toUpperCase()]
              }, va && "scroll" !== da(V)["overflow" + Je.a.toUpperCase()] && (j.style["overflow" + Je.a.toUpperCase()] = "scroll")), qa(Ae, v, k), u = Xa(Ae), y = fa(Ae, !0), N = ya && P(Ke, _ ? D : T)(), me && (E = [me + Je.os2, m + ne + la], E.t = v, de = me === ia ? ba(Ae, Je) + m + ne : 0, de && E.push(Je.d, de + la), Ja(E), se && Ba.forEach((e => {
                e.pin === se && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), ya && Qa(Z)), ya && (z = {
                top: y.top + (_ ? w - s : N) + la,
                left: y.left + (_ ? N : w - s) + la,
                boxSizing: "border-box",
                position: "fixed"
              }, z[$e] = z["max" + sa] = Math.ceil(y.width) + la, z[ea] = z["max" + ca] = Math.ceil(y.height) + la, z[oa] = z[oa + na] = z[oa + aa] = z[oa + ra] = z[oa + ta] = "0", z[ia] = k[ia], z[ia + na] = k[ia + na], z[ia + aa] = k[ia + aa], z[ia + ra] = k[ia + ra], z[ia + ta] = k[ia + ta], h = ((e, a, t) => {
                let n, r = [],
                  i = e.length,
                  o = t ? 8 : 0;
                for (; o < i; o += 2) n = e[o], r.push(n, n in a ? a[n] : e[o + 1]);
                return r.t = e.t, r
              })(p, z, De), ke && Qa(0)), a ? (O = a._initted, ce(1), a.render(a.duration(), !0, !0), I = x(Je.a) - B + m + ne, M = Math.abs(m - I) > 1, ya && M && h.splice(h.length - 2, 2), a.render(0, !0, !0), O || a.invalidate(!0), a.parent || a.totalTime(a.totalTime()), ce(0)) : I = m, j && (j.value ? j.style["overflow" + Je.a.toUpperCase()] = j.value : j.style.removeProperty("overflow-" + Je.a));
              else if (be && Qa() && !Fe)
                for (y = be.parentNode; y && y !== V;) y._pinOffset && (s -= y._pinOffset, c -= y._pinOffset), y = y.parentNode;
              G && G.forEach((e => e.revert(!1, !0))), Ta.start = s, Ta.end = c, i = o = ke ? Z : Qa(), Fe || ke || (i < Z && Qa(Z), Ta.scroll.rec = 0), Ta.revert(!1, !0), Ga = _e(), q && (Oa = -1, q.restart(!0)), ee = 0, a && Xe && (a._initted || $) && a.progress() !== $ && a.progress($ || 0, !0).render(a.time(), !0, !0), (ae || ja !== Ta.progress || Fe) && (a && !Xe && a.totalProgress(Fe && s < -.001 && !ja ? H.utils.normalize(s, c, 0) : ja, !0), Ta.progress = ae || (i - s) / m === ja ? 0 : ja), Ae && me && (v._pinOffset = Math.round(Ta.progress * I)), U && U.invalidate(), isNaN(Q) || (Q -= H.getProperty(g, Je.p), W -= H.getProperty(f, Je.p), nt(g, Je, Q), nt(l, Je, Q - (C || 0)), nt(f, Je, W), nt(d, Je, W - (C || 0))), ae && !ke && Ta.update(), !ge || ke || A || (A = !0, ge(Ta), A = !1)
            }, Ta.getVelocity = () => (Qa() - o) / (_e() - K) * 1e3 || 0, Ta.endAnimation = () => {
              Ve(Ta.callbackAnimation), a && (U ? U.progress(1) : a.paused() ? Xe || Ve(a, Ta.direction < 0, 1) : Ve(a, a.reversed()))
            }, Ta.labelToScroll = e => a && a.labels && (s || Ta.refresh() || s) + a.labels[e] / a.duration() * m || 0, Ta.getTrailing = e => {
              let a = Ba.indexOf(Ta),
                t = Ta.direction > 0 ? Ba.slice(0, a).reverse() : Ba.slice(a + 1);
              return (Qe(e) ? t.filter((a => a.vars.preventOverlaps === e)) : t).filter((e => Ta.direction > 0 ? e.end <= s : e.start >= c))
            }, Ta.update = (e, n, r) => {
              if (Fe && !r && !e) return;
              let l, d, f, b, A, p, C, k, y = !0 === ke ? Z : Ta.scroll(),
                x = e ? 0 : (y - s) / m,
                w = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                E = Ta.progress;
              if (n && (o = i, i = Fe ? Qa() : y, Me && (G = O, O = a && !Xe ? a.totalProgress() : w)), he && !w && Ae && !ee && !we && Ie && s < y + (y - o) / (_e() - K) * he && (w = 1e-4), w !== E && Ta.enabled) {
                if (l = Ta.isActive = !!w && w < 1, d = !!E && E < 1, p = l !== d, A = p || !!w != !!E, Ta.direction = w > E ? 1 : -1, Ta.progress = w, A && !ee && (f = w && !E ? 0 : 1 === w ? 1 : 1 === E ? 2 : 3, Xe && (b = !p && "none" !== za[f + 1] && za[f + 1] || za[f], k = a && ("complete" === b || "reset" === b || b in a))), He && (p || k) && (k || fe || !a) && (We(He) ? He(Ta) : Ta.getTrailing(He).forEach((e => e.endAnimation()))), Xe || (!U || ee || we ? a && a.totalProgress(w, !(!ee || !Ga && !e)) : (U._dp._time - U._start !== U._time && U.render(U._dp._time - U._start), U.resetTo ? U.resetTo("totalProgress", w, a._tTime / a._tDur) : (U.vars.totalProgress = w, U.invalidate().restart()))), Ae)
                  if (e && me && (v.style[me + Je.os2] = z), ya) {
                    if (A) {
                      if (C = !e && w > E && c + 1 > y && y + 1 >= je(Ke, Je), De)
                        if (e || !l && !C) at(Ae, v);
                        else {
                          let e = fa(Ae, !0),
                            a = y - s;
                          at(Ae, V, e.top + (Je === T ? a : 0) + la, e.left + (Je === T ? 0 : a) + la)
                        } Ja(l || C ? h : u), M && w < 1 && l || _(B + (1 !== w || C ? 0 : I))
                    }
                  } else _(Pe(B + I * w));
                Me && !t.tween && !ee && !we && q.restart(!0), oe && (p || Be && w && (w < 1 || !ve)) && J(oe.targets).forEach((e => e.classList[l || Be ? "add" : "remove"](oe.className))), ie && !Xe && !e && ie(Ta), A && !ee ? (Xe && (k && ("complete" === b ? a.pause().totalProgress(1) : "reset" === b ? a.restart(!0).pause() : "restart" === b ? a.restart(!0) : a[b]()), ie && ie(Ta)), !p && ve || (de && p && qe(Ta, de), _a[f] && qe(Ta, _a[f]), Be && (1 === w ? Ta.kill(!1, 1) : _a[f] = 0), p || (f = 1 === w ? 1 : 3, _a[f] && qe(Ta, _a[f]))), Ne && !l && Math.abs(Ta.getVelocity()) > (Le(Ne) ? Ne : 2500) && (Ve(Ta.callbackAnimation), U ? U.progress(1) : Ve(a, "reverse" === b ? 1 : !w, 1))) : Xe && ie && !ee && ie(Ta)
              }
              if (F) {
                let e = Fe ? y / Fe.duration() * (Fe._caScrollDist || 0) : y;
                S(e + (g._isFlipped ? 1 : 0)), F(e)
              }
              te && te(-y / Fe.duration() * (Fe._caScrollDist || 0))
            }, Ta.enable = (e, a) => {
              Ta.enabled || (Ta.enabled = !0, ha(Ke, "resize", Ma), va || ha(Ke, "scroll", Ea), Pa && ha(it, "refreshInit", Pa), !1 !== e && (Ta.progress = ja = 0, i = o = Oa = Qa()), !1 !== a && Ta.refresh())
            }, Ta.getTween = e => e && t ? t.tween : U, Ta.setPositions = (e, a, t, n) => {
              if (Fe) {
                let t = Fe.scrollTrigger,
                  n = Fe.duration(),
                  r = t.end - t.start;
                e = t.start + r * e / n, a = t.start + r * a / n
              }
              Ta.refresh(!1, !1, {
                start: Se(e, t && !!Ta._startClamp),
                end: Se(a, t && !!Ta._endClamp)
              }, n), Ta.update()
            }, Ta.adjustPinSpacing = e => {
              if (E && e) {
                let a = E.indexOf(Je.d) + 1;
                E[a] = parseFloat(E[a]) + e + la, E[1] = parseFloat(E[1]) + e + la, Ja(E)
              }
            }, Ta.disable = (e, a) => {
              if (Ta.enabled && (!1 !== e && Ta.revert(!0, !0), Ta.enabled = Ta.isActive = !1, a || U && U.pause(), Z = 0, n && (n.uncache = 1), Pa && ua(it, "refreshInit", Pa), q && (q.pause(), t.tween && t.tween.kill() && (t.tween = 0)), !va)) {
                let e = Ba.length;
                for (; e--;)
                  if (Ba[e].scroller === Ke && Ba[e] !== Ta) return;
                ua(Ke, "resize", Ma), va || ua(Ke, "scroll", Ea)
              }
            }, Ta.kill = (t, r) => {
              Ta.disable(t, r), U && !r && U.kill(), le && delete Ia[le];
              let i = Ba.indexOf(Ta);
              i >= 0 && Ba.splice(i, 1), i === ne && Wa > 0 && ne--, i = 0, Ba.forEach((e => e.scroller === Ta.scroller && (i = 1))), i || ke || (Ta.scroll.rec = 0), a && (a.scrollTrigger = null, t && a.revert({
                kill: !1
              }), r || a.kill()), l && [l, d, g, f].forEach((e => e.parentNode && e.parentNode.removeChild(e))), xe === Ta && (xe = 0), Ae && (n && (n.uncache = 1), i = 0, Ba.forEach((e => e.pin === Ae && i++)), i || (n.spacer = 0)), e.onKill && e.onKill(Ta)
            }, Ba.push(Ta), Ta.enable(!1, !1), re && re(Ta), a && a.add && !m) {
            let e = Ta.update;
            Ta.update = () => {
              Ta.update = e, s || c || Ta.refresh()
            }, H.delayedCall(.01, Ta.update), m = .01, s = c = 0
          } else Ta.refresh();
          Ae && (() => {
            if (ye !== Ua) {
              let e = ye = Ua;
              requestAnimationFrame((() => e === Ua && Ha(!0)))
            }
          })()
        }
        static register(e) {
          return Q || (H = e || Ne(), Fe() && window.document && it.enable(), Q = ze), Q
        }
        static defaults(e) {
          if (e)
            for (let a in e) ka[a] = e[a];
          return ka
        }
        static disable(e, a) {
          ze = 0, Ba.forEach((t => t[a ? "kill" : "disable"](e))), ua(W, "wheel", Ea), ua(L, "scroll", Ea), clearInterval($), ua(L, "touchcancel", Re), ua(V, "touchstart", Re), pa(ua, L, "pointerdown,touchstart,mousedown", De), pa(ua, L, "pointerup,touchend,mouseup", Te), Z.kill(), He(ua);
          for (let e = 0; e < C.length; e += 3) va(ua, C[e], C[e + 1]), va(ua, C[e], C[e + 2])
        }
        static enable() {
          if (W = window, L = document, Y = L.documentElement, V = L.body, H && (J = H.utils.toArray, X = H.utils.clamp, me = H.core.context || Re, ce = H.core.suppressOverwrites || Re, pe = W.history.scrollRestoration || "auto", Qa = W.pageYOffset, H.core.globals("ScrollTrigger", it), V)) {
            ze = 1, he = document.createElement("div"), he.style.height = "100vh", he.style.position = "absolute", ja(), Me(), j.register(H), it.isTouch = j.isTouch, Ae = j.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ha(W, "wheel", Ea), q = [W, L, Y, V], H.matchMedia ? (it.matchMedia = e => {
              let a, t = H.matchMedia();
              for (a in e) t.add(a, e[a]);
              return t
            }, H.addEventListener("matchMediaInit", (() => Oa())), H.addEventListener("matchMediaRevert", (() => Na())), H.addEventListener("matchMedia", (() => {
              Ha(0, 1), Pa("matchMedia")
            })), H.matchMedia("(orientation: portrait)", (() => (Sa(), Sa)))) : console.warn("Requires GSAP 3.11.0 or later"), Sa(), ha(L, "scroll", Ea);
            let e, a, t = V.style,
              n = t.borderTopStyle,
              r = H.core.Animation.prototype;
            for (r.revert || Object.defineProperty(r, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), t.borderTopStyle = "solid", e = fa(V), T.m = Math.round(e.top + T.sc()) || 0, D.m = Math.round(e.left + D.sc()) || 0, n ? t.borderTopStyle = n : t.removeProperty("border-top-style"), $ = setInterval(za, 250), H.delayedCall(.5, (() => we = 0)), ha(L, "touchcancel", Re), ha(V, "touchstart", Re), pa(ha, L, "pointerdown,touchstart,mousedown", De), pa(ha, L, "pointerup,touchend,mouseup", Te), te = H.utils.checkPrefix("transform"), Va.push(te), Q = _e(), Z = H.delayedCall(.2, Ha).pause(), oe = [L, "visibilitychange", () => {
                let e = W.innerWidth,
                  a = W.innerHeight;
                L.hidden ? (re = e, ie = a) : re === e && ie === a || Ma()
              }, L, "DOMContentLoaded", Ha, W, "load", Ha, W, "resize", Ma], He(ha), Ba.forEach((e => e.enable(0, 1))), a = 0; a < C.length; a += 3) va(ua, C[a], C[a + 1]), va(ua, C[a], C[a + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (ve = !!e.limitCallbacks);
          let a = e.syncInterval;
          a && clearInterval($) || ($ = a) && setInterval(za, a), "ignoreMobileResize" in e && (ge = 1 === it.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (He(ua) || He(ha, e.autoRefreshEvents || "none"), le = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, a) {
          let t = R(e),
            n = C.indexOf(t),
            r = Oe(t);
          ~n && C.splice(n, r ? 6 : 2), a && (r ? k.unshift(W, a, V, a, Y, a) : k.unshift(t, a))
        }
        static clearMatchMedia(e) {
          Ba.forEach((a => a._ctx && a._ctx.query === e && a._ctx.kill(!0, !0)))
        }
        static isInViewport(e, a, t) {
          let n = (Qe(e) ? R(e) : e).getBoundingClientRect(),
            r = n[t ? $e : ea] * a || 0;
          return t ? n.right - r > 0 && n.left + r < W.innerWidth : n.bottom - r > 0 && n.top + r < W.innerHeight
        }
        static positionInViewport(e, a, t) {
          Qe(e) && (e = R(e));
          let n = e.getBoundingClientRect(),
            r = n[t ? $e : ea],
            i = null == a ? r / 2 : a in ya ? ya[a] * r : ~a.indexOf("%") ? parseFloat(a) * r / 100 : parseFloat(a) || 0;
          return t ? (n.left + i) / W.innerWidth : (n.top + i) / W.innerHeight
        }
        static killAll(e) {
          if (Ba.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = Da.killAll || [];
            Da = {}, e.forEach((e => e()))
          }
        }
      }
      it.version = "3.12.2", it.saveStyles = e => e ? J(e).forEach((e => {
        if (e && e.style) {
          let a = Fa.indexOf(e);
          a >= 0 && Fa.splice(a, 5), Fa.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), H.core.getCache(e), me())
        }
      })) : Fa, it.revert = (e, a) => Oa(!e, a), it.create = (e, a) => new it(e, a), it.refresh = e => e ? Ma() : (Q || it.register()) && Ha(!0), it.update = e => ++C.cache && La(!0 === e ? 2 : 0), it.clearScrollMemory = Ga, it.maxScroll = (e, a) => je(e, a ? D : T), it.getScrollFunc = (e, a) => P(R(e), a ? D : T), it.getById = e => Ia[e], it.getAll = () => Ba.filter((e => "ScrollSmoother" !== e.vars.id)), it.isScrolling = () => !!Ie, it.snapDirectional = ma, it.addEventListener = (e, a) => {
        let t = Da[e] || (Da[e] = []);
        ~t.indexOf(a) || t.push(a)
      }, it.removeEventListener = (e, a) => {
        let t = Da[e],
          n = t && t.indexOf(a);
        n >= 0 && t.splice(n, 1)
      }, it.batch = (e, a) => {
        let t, n = [],
          r = {},
          i = a.interval || .016,
          o = a.batchMax || 1e9,
          s = (e, a) => {
            let t = [],
              n = [],
              r = H.delayedCall(i, (() => {
                a(t, n), t = [], n = []
              })).pause();
            return e => {
              t.length || r.restart(!0), t.push(e.trigger), n.push(e), o <= t.length && r.progress(1)
            }
          };
        for (t in a) r[t] = "on" === t.substr(0, 2) && We(a[t]) && "onRefreshInit" !== t ? s(0, a[t]) : a[t];
        return We(o) && (o = o(), ha(it, "refresh", (() => o = a.batchMax()))), J(e).forEach((e => {
          let a = {};
          for (t in r) a[t] = r[t];
          a.trigger = e, n.push(it.create(a))
        })), n
      };
      let ot, st = (e, a, t, n) => (a > n ? e(n) : a < 0 && e(0), t > n ? (n - a) / (t - a) : t < 0 ? a / (a - t) : 1),
        ct = (e, a) => {
          !0 === a ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === a ? "auto" : a ? "pan-" + a + (j.isTouch ? " pinch-zoom" : "") : "none", e === Y && ct(V, a)
        },
        lt = {
          auto: 1,
          scroll: 1
        },
        dt = e => {
          let a, {
              event: t,
              target: n,
              axis: r
            } = e,
            i = (t.changedTouches ? t.changedTouches[0] : t).target,
            o = i._gsap || H.core.getCache(i),
            s = _e();
          if (!o._isScrollT || s - o._isScrollT > 2e3) {
            for (; i && i !== V && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !lt[(a = da(i)).overflowY] && !lt[a.overflowX]);) i = i.parentNode;
            o._isScroll = i && i !== n && !Oe(i) && (lt[(a = da(i)).overflowY] || lt[a.overflowX]), o._isScrollT = s
          }(o._isScroll || "x" === r) && (t.stopPropagation(), t._gsapAllow = !0)
        },
        gt = (e, a, t, n) => j.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: a,
          onWheel: n = n && dt,
          onPress: n,
          onDrag: n,
          onScroll: n,
          onEnable: () => t && ha(L, j.eventTypes[0], bt, !1, !0),
          onDisable: () => ua(L, j.eventTypes[0], bt, !0)
        }),
        ft = /(input|label|select|textarea)/i,
        bt = e => {
          let a = ft.test(e.target.tagName);
          (a || ot) && (e._gsapAllow = !0, ot = a)
        };
      it.sort = e => Ba.sort(e || ((e, a) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (a.start + -1e6 * (a.vars.refreshPriority || 0)))), it.observe = e => new j(e), it.normalizeScroll = e => {
        if (void 0 === e) return de;
        if (!0 === e && de) return de.enable();
        if (!1 === e) return de && de.kill();
        let a = e instanceof j ? e : (e => {
          Ye(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let a, t, n, r, i, o, s, c, {
              normalizeScrollX: l,
              momentum: d,
              allowNestedScroll: g,
              onRelease: f
            } = e,
            b = R(e.target) || Y,
            A = H.core.globals().ScrollSmoother,
            m = A && A.get(),
            p = Ae && (e.content && R(e.content) || m && !1 !== e.content && !m.smooth() && m.content()),
            h = P(b, T),
            u = P(b, D),
            v = 1,
            k = (j.isTouch && W.visualViewport ? W.visualViewport.scale * W.visualViewport.width : W.outerWidth) / W.innerWidth,
            y = 0,
            x = We(d) ? () => d(a) : () => d || 2.8,
            w = gt(b, e.type, !0, g),
            _ = () => r = !1,
            B = Re,
            I = Re,
            z = () => {
              t = je(b, T), I = X(Ae ? 1 : 0, t), l && (B = X(0, je(b, D))), n = Ua
            },
            E = () => {
              p._gsap.y = Pe(parseFloat(p._gsap.y) + h.offset) + "px", p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0
            },
            S = () => {
              z(), i.isActive() && i.vars.scrollY > t && (h() > t ? i.progress(1) && h(t) : i.resetTo("scrollY", t))
            };
          return p && H.set(p, {
            y: "+=0"
          }), e.ignoreCheck = e => Ae && "touchmove" === e.type && (() => {
            if (r) {
              requestAnimationFrame(_);
              let e = Pe(a.deltaY / 2),
                t = I(h.v - e);
              if (p && t !== h.v + h.offset) {
                h.offset = t - h.v;
                let e = Pe((parseFloat(p && p._gsap.y) || 0) - h.offset);
                p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", p._gsap.y = e + "px", h.cacheID = C.cache, La()
              }
              return !0
            }
            h.offset && E(), r = !0
          })() || v > 1.05 && "touchstart" !== e.type || a.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            r = !1;
            let e = v;
            v = Pe((W.visualViewport && W.visualViewport.scale || 1) / k), i.pause(), e !== v && ct(b, v > 1.01 || !l && "x"), o = u(), s = h(), z(), n = Ua
          }, e.onRelease = e.onGestureStart = (e, a) => {
            if (h.offset && E(), a) {
              C.cache++;
              let a, n, r = x();
              l && (a = u(), n = a + .05 * r * -e.velocityX / .227, r *= st(u, a, n, je(b, D)), i.vars.scrollX = B(n)), a = h(), n = a + .05 * r * -e.velocityY / .227, r *= st(h, a, n, je(b, T)), i.vars.scrollY = I(n), i.invalidate().duration(r).play(.01), (Ae && i.vars.scrollY >= t || a >= t - 1) && H.to({}, {
                onUpdate: S,
                duration: r
              })
            } else c.restart(!0);
            f && f(e)
          }, e.onWheel = () => {
            i._ts && i.pause(), _e() - y > 1e3 && (n = 0, y = _e())
          }, e.onChange = (e, a, t, r, i) => {
            if (Ua !== n && z(), a && l && u(B(r[2] === a ? o + (e.startX - e.x) : u() + a - r[1])), t) {
              h.offset && E();
              let a = i[2] === t,
                n = a ? s + e.startY - e.y : h() + t - i[1],
                r = I(n);
              a && n !== r && (s += r - n), h(r)
            }(t || a) && La()
          }, e.onEnable = () => {
            ct(b, !l && "x"), it.addEventListener("refresh", S), ha(W, "resize", S), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = u.smooth = !1), w.enable()
          }, e.onDisable = () => {
            ct(b, !0), ua(W, "resize", S), it.removeEventListener("refresh", S), w.kill()
          }, e.lockAxis = !1 !== e.lockAxis, a = new j(e), a.iOS = Ae, Ae && !h() && h(1), Ae && H.ticker.add(Re), c = a._dc, i = H.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: l ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: tt(h, h(), (() => i.pause()))
            },
            onUpdate: La,
            onComplete: c.vars.onComplete
          }), a
        })(e);
        return de && de.target === a.target && de.kill(), Oe(a.target) && (de = a), a
      }, it.core = {
        _getVelocityProp: F,
        _inputObserver: gt,
        _scrollers: C,
        _proxies: k,
        bridge: {
          ss: () => {
            Ie || Pa("scrollStart"), Ie = _e()
          },
          ref: () => ee
        }
      }, Ne() && H.registerPlugin(it)
    },
    649: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => I
      });
      var n = t(62229),
        r = t(9623),
        i = t(2918),
        o = t(95966),
        s = t(93977),
        c = t(53178),
        l = t.n(c),
        d = t(27835),
        g = t.n(d),
        f = t(17529),
        b = t.n(f),
        A = t(72162),
        m = t.n(A),
        p = t(82510),
        h = t.n(p),
        u = t(90675),
        v = t.n(u),
        C = t(21565),
        k = {};
      k.styleTagTransform = v(), k.setAttributes = m(), k.insert = b().bind(null, "head"), k.domAPI = g(), k.insertStyleElement = h(), l()(C.A, k);
      const y = C.A && C.A.locals ? C.A.locals : void 0;
      var x = t(24036),
        w = t.n(x),
        _ = t(73855);
      const B = e => {
          let {
            platform: a = "",
            altText: t
          } = e;
          const n = a ? (0, s.A)(a) : null,
            r = n ? (0, _.jsx)("img", {
              className: y.platformIcon,
              src: n,
              alt: t
            }) : null;
          return (0, _.jsx)("span", {
            className: [y.btnContent, y.platformButton].join(" "),
            children: r
          })
        },
        I = e => {
          let {
            children: a,
            href: t,
            style: c,
            content: l,
            variant: d = null,
            size: g = "medium",
            icon: f,
            iconPosition: b = "none",
            iconStyle: A,
            badge: m,
            badgeStyle: p,
            platformItem: h,
            platformStyle: u = "border",
            gtm: v = {},
            disabled: C,
            reloadDocument: k = !1,
            className: x,
            role: I = ""
          } = e;
          const {
            track: z
          } = (0, i.useGtmTrack)(), E = (0, o.useDataLayer)(), S = l ?? a, M = (0, o.findPlatform)(h)?.friendlyName, D = (0, n.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), T = (0, n.useCallback)((() => {
            C || z({
              event: "cta_other",
              text: S ?? void 0,
              ...E,
              ...v,
              link_url: t ?? void 0
            })
          }), [v, t, E]), R = () => f ? (0, _.jsx)("span", {
            className: [y.icon, `icon-${b}`].join(" "),
            style: A,
            children: (0, _.jsx)("img", {
              className: y.btnIcon,
              src: (0, s.A)(f) || "",
              alt: `${f} icon`
            })
          }) : null;
          return (0, _.jsx)(r.Link, {
            to: t,
            target: D ? "_self" : "_blank",
            className: w()(y.cta, "platform" === d && h ? y[h] : "", u && y[u], C ? y.disabled : "", x),
            style: c,
            "data-variant": d,
            "data-size": g,
            onClick: T,
            "aria-label": S,
            reloadDocument: k,
            role: I,
            children: "platform" === d && h ? (0, _.jsx)(B, {
              platform: h,
              altText: M || S
            }) : (0, _.jsxs)("div", {
              className: y.btnContent,
              children: ["left" === b && R(), (0, _.jsx)("span", {
                className: y.label,
                children: S
              }), "right" === b && R(), m ? (0, _.jsx)("span", {
                className: y.badge,
                style: p,
                children: m
              }) : null]
            })
          })
        }
    },
    65317: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => k
      });
      var n = t(62229),
        r = t(53178),
        i = t.n(r),
        o = t(27835),
        s = t.n(o),
        c = t(17529),
        l = t.n(c),
        d = t(72162),
        g = t.n(d),
        f = t(82510),
        b = t.n(f),
        A = t(90675),
        m = t.n(A),
        p = t(39460),
        h = {};
      h.styleTagTransform = m(), h.setAttributes = g(), h.insert = l().bind(null, "head"), h.domAPI = s(), h.insertStyleElement = b(), i()(p.A, h);
      const u = p.A && p.A.locals ? p.A.locals : void 0;
      var v = t(73855);
      class C extends n.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, v.jsxs)("div", {
            className: u.errorMsg,
            children: [(0, v.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, v.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const k = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return function(n) {
          return (0, v.jsx)(C, {
            header: a,
            hidden: t,
            children: (0, v.jsx)(e, {
              ...n
            })
          })
        }
      }
    },
    93977: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var n = t(80391),
        r = t(28985),
        i = t(47240),
        o = t(32903),
        s = t(81715),
        c = t(49429),
        l = t(11008);
      const d = {
          ps: n,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: r,
          ps5: i,
          switch: l,
          nintendoswitch: l,
          xbox: o,
          xboxone: c,
          xboxseriesxs: s,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: t(85719),
          pcalt: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        g = e => d[e] || null
    },
    41585: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var n = t(62229),
        r = t(2918),
        i = t(92440),
        o = t(95966),
        s = t(84213),
        c = t(20680);
      const l = function() {
        let {
          relativeTo: e = ".."
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
          selectedCharacterTuple: a
        } = (0, r.useRockstarUserState)(), t = (0, o.useRockstarTokenPing)(), l = (0, i.useGenerateCdnSource)(), [d, g] = (0, n.useState)(), [f, b] = (0, n.useState)(), [A, m] = (0, n.useState)([]), {
          data: p,
          loading: h
        } = (0, o.useQuery)(s.SecondaryNavContent, {
          variables: {
            branchTags: ["1"]
          }
        });
        return (0, n.useEffect)((() => {
          (async () => {
            m([]);
            const e = a?.[0],
              n = a?.[1];
            if ((0, o.getGen9Consoles)().includes(e)) try {
              const {
                result: a
              } = await (0, o.coreScApiFetch)("games/gtao/career/progress/summary", {
                pingBearer: t,
                query: {
                  platform: e,
                  slot: n
                }
              });
              a && m(a.sections)
            } catch (e) {
              console.error(e)
            }
          })()
        }), [String(a)]), (0, n.useEffect)((() => {
          if (!p) return;
          const a = "cphsubnav",
            t = "cphdiscover",
            n = n => {
              const r = p?.all?.find((e => e?.tina?.payloadRepresentedAsTree?.tree?.[0]?.idHash === n?.idHash)),
                i = p?.tinaModulesInfo?.find((e => e?.tina?.payloadRepresentedAsTree?.tree?.[0]?.idHash === n?.idHash)),
                o = r ?? i,
                s = o?.tina?.payload?.meta?.prod ?? !0,
                d = n.children.map((n => {
                  const r = e => {
                      let {
                        context: a
                      } = e;
                      const t = n.images?.find((e => e.context === a));
                      return t?.src ? l(t.src, {
                        prod: s
                      }) : null
                    },
                    i = c.b[n.rewardsKey],
                    {
                      tiers: o
                    } = A?.find((e => {
                      let {
                        id: a
                      } = e;
                      return a === i
                    })) ?? {
                      tiers: []
                    },
                    d = (n.images?.filter((e => e.context === t)) ?? [])?.length,
                    g = r({
                      context: a
                    }) ?? r({
                      context: ""
                    });
                  return {
                    title: n.title,
                    name: n.name,
                    tiers: o,
                    url: `${e}/${n.link}`,
                    images: {
                      tinyThumb: `${r({context:a})}?im=Resize,height=32,width=32`,
                      brand: r({
                        context: t
                      }),
                      desktop: g,
                      mobile: r({
                        context: "cphcover"
                      }) ?? g
                    },
                    createdAt: n.created,
                    discoverSafe: d
                  }
                }));
              return {
                title: n.title,
                name: n.name,
                subNavItems: d
              }
            },
            r = p?.tinaModulesInfo?.map((e => e?.tina?.payloadRepresentedAsTree?.tree?.[0] ?? null)).filter(Boolean).map(n),
            i = p?.all?.map((e => e?.tina?.payloadRepresentedAsTree?.tree?.[0] ?? null)).filter(Boolean).map(n);
          g(r), b(i)
        }), [p, A, e, l]), {
          loading: h,
          data: d,
          allData: f
        }
      }
    },
    20680: (e, a, t) => {
      "use strict";
      t.d(a, {
        b: () => n,
        D: () => r
      });
      const n = {
          GUNRUNNING: 1471810592,
          LSDRUGWARS: -1859518261,
          CONTRACT: -392727791,
          AFTERHOURS: -1815199872,
          SMUGGLERSRUN: 1164011531,
          IMPORTEXPORT: -647547292,
          BIKERS: 315075481,
          FAIFAF: -1374101462,
          CAYOPERICOHEIST: -995532639,
          DIAMONDCASINOHEIST: 98960286,
          DOOMSDAY: 1942893817,
          HEISTS: -2044559582,
          PROJECTOVERTHROW: 1445486638,
          PAPERTRAIL: -961870614,
          SUPERYACHTLIFE: -431626303,
          GERALDSLASTPLAY: -192008291,
          PREMIUMDELUXREPO: 75069984,
          MADRAZODISPATCH: -2012307449,
          LOWRIDERS: -501692796,
          LSTUNERS: 320230760,
          DIAMONDCASINO: 1009355195,
          RACING: -344405389,
          SURVIVALS: 350693912,
          ADVERSARYMODE: -789968707,
          DEATHMATCHES: -1232781894,
          VEHICLE: -584819812,
          WEAPONS: -2143405780,
          ARENAWAR: -57043721,
          CHOPSHOP: -4750723,
          CLUCKINBELL: -1470413487,
          BAILOFFICE: -1472755728,
          HACKERDEN: -1087198207,
          FIELDHANGAR: 1376198550
        },
        r = (0, t(81788).defineMessages)({
          cph_awards_title: {
            id: "cph_awards_title",
            defaultMessage: "Awards"
          },
          cph_awards_metal_completed: {
            defaultMessage: "{metal}: Completed.",
            id: "cph_awards_metal_completed"
          },
          cph_awards_metal_not_unlocked: {
            defaultMessage: "{metal}: Not unlocked.",
            id: "cph_awards_metal_not_unlocked"
          },
          cph_progress_bar_aria: {
            id: "cph_progress_bar_aria",
            defaultMessage: "Progress Bar"
          },
          cph_progress_tracker_title: {
            id: "cph_progress_tracker_title",
            defaultMessage: "Career Progress"
          },
          cph_progress_tracker_tier_label: {
            id: "cph_progress_tracker_tier_label",
            defaultMessage: "Tier {number}"
          },
          cph_progress_challenges_title: {
            id: "cph_progress_challenges_title",
            defaultMessage: "Challenges"
          },
          cph_progress_rewards_title: {
            id: "cph_progress_rewards_title",
            defaultMessage: "Rewards"
          },
          cph_progress_rewards_view_all: {
            id: "cph_progress_rewards_view_all",
            defaultMessage: "View All"
          },
          cph_progress_rewards_view_less: {
            id: "cph_progress_rewards_view_less",
            defaultMessage: "View Less"
          },
          cph_progress_close: {
            id: "cph_progress_close",
            defaultMessage: "Close"
          },
          cph_nav_open: {
            id: "cph_nav_open",
            defaultMessage: "Open Section Navigation"
          },
          cph_nav_close: {
            id: "cph_nav_close",
            defaultMessage: "Close Section Navigation"
          },
          cph_nav_scroll_left: {
            id: "cph_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          cph_nav_scroll_right: {
            id: "cph_nav_scroll_right",
            defaultMessage: "Scroll Right"
          },
          cph_intro_getting_started: {
            id: "cph_intro_getting_started",
            defaultMessage: "Getting Started"
          },
          cph_intro_guide_instruction: {
            id: "cph_intro_guide_instruction",
            defaultMessage: "Read the {title} Guide to learn more."
          },
          cph_intro_guide_learn_more: {
            id: "cph_intro_guide_learn_more",
            defaultMessage: "Learn more"
          },
          cph_progress_available_on: {
            id: "cph_progress_available_on",
            defaultMessage: "Only available on"
          },
          cph_progress_available_on_aria_ps5: {
            id: "cph_progress_available_on_aria_ps5",
            defaultMessage: "PlayStation5"
          },
          cph_progress_available_on_aria_xbox: {
            id: "cph_progress_available_on_aria_xbox",
            defaultMessage: "Xbox Series X|S"
          },
          cph_progress_available_on_aria_pc: {
            id: "cph_progress_available_on_aria_pc",
            defaultMessage: "PC"
          },
          cph_login_prompt_title: {
            id: "cph_login_prompt_title",
            defaultMessage: "Sign In to Track Your Progress"
          },
          cph_login_prompt_body: {
            id: "cph_login_prompt_body",
            defaultMessage: "Sign in to your account to see all the rewards you can earn, the awards you've won, and the possibilities still ahead of you."
          },
          cph_login_prompt_button: {
            id: "cph_login_prompt_button",
            defaultMessage: "Sign In"
          },
          cph_login_prompt_button_helper: {
            id: "cph_login_prompt_button_helper",
            defaultMessage: "Don't have an account?"
          },
          cph_login_prompt_button_helper_link: {
            id: "cph_login_prompt_button_helper_link",
            defaultMessage: "Create an Account"
          },
          cph_callout_feedback_title: {
            id: "cph_callout_feedback_title",
            defaultMessage: "Share Your Feedback"
          },
          cph_callout_feedback_body: {
            id: "cph_callout_feedback_body",
            defaultMessage: "How are you enjoying GTA Online? Tell us your thoughts and ideas to help us shape the future of the game."
          },
          cph_callout_feedback_button: {
            id: "cph_callout_feedback_button",
            defaultMessage: "Give feedback"
          },
          cph_loggedin_nochar_title: {
            id: "cph_loggedin_nochar_title",
            defaultMessage: "Link a GTA Online Character"
          },
          cph_loggedin_nochar_body: {
            id: "cph_loggedin_nochar_body",
            defaultMessage: "We couldn't find a GTA Online character linked to your account. Link one or switch to a different account."
          },
          cph_loggedin_nochar_button: {
            id: "cph_loggedin_nochar_button",
            defaultMessage: "Link a game account"
          },
          cph_reward_locked_alt: {
            id: "cph_reward_locked",
            defaultMessage: "Reward locked"
          },
          cph_reward_claimable: {
            id: "cph_reward_claimable",
            defaultMessage: "Ready to claim"
          },
          cph_reward_claimed: {
            id: "cph_reward_claimed",
            defaultMessage: "Claimed"
          },
          cph_tier_complete: {
            id: "cph_tier_complete",
            defaultMessage: "Tier Complete"
          },
          cph_reward_ready_to_claim: {
            id: "cph_reward_ready_to_claim",
            defaultMessage: "Rewards ready to be claimed"
          },
          cph_reward_how_to_claim: {
            id: "cph_reward_how_to_claim",
            defaultMessage: "Rewards ready to be claimed. Visit the Career Progress Menu in-game to claim."
          },
          cph_highlights_heading: {
            id: "cph_highlights_heading",
            defaultMessage: "Highlights"
          },
          cph_highlights_previous: {
            id: "cph_highlights_previous",
            defaultMessage: "Previous"
          },
          cph_highlights_next: {
            id: "cph_highlights_next",
            defaultMessage: "Next"
          },
          cph_highlights_group_aria: {
            id: "cph_highlights_group_aria",
            defaultMessage: "Highlight {index} of {total}"
          },
          cph_awards_bonuses_title: {
            id: "cph_awards_bonuses_title",
            defaultMessage: "Bonuses"
          },
          cph_awards_bronze: {
            id: "cph_awards_bronze",
            defaultMessage: "Bronze"
          },
          cph_awards_silver: {
            id: "cph_awards_silver",
            defaultMessage: "Silver"
          },
          cph_awards_gold: {
            id: "cph_awards_gold",
            defaultMessage: "Gold"
          },
          cph_awards_platinum: {
            id: "cph_awards_platinum",
            defaultMessage: "Platinum"
          },
          cph_awards_bonuses_tattoo: {
            id: "cph_awards_bonuses_tattoo",
            defaultMessage: "{tattooName} Tattoo"
          },
          cph_awards_rp_bonus_info: {
            id: "cph_awards_rp_bonus_info",
            defaultMessage: "Complete unique challenges to earn GTA$, bonus items, and more including RP bonuses for each Level:"
          }
        })
    },
    21565: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var n = t(42587),
        r = t.n(n),
        i = t(15081),
        o = t.n(i)()(r());
      o.push([e.id, '.rockstargames-sites-gta-gen9f39c827be0d560f2cc376d83e3988fbc{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gta-gen9f39c827be0d560f2cc376d83e3988fbc img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gta-gen9f39c827be0d560f2cc376d83e3988fbc:focus,.rockstargames-sites-gta-gen9f39c827be0d560f2cc376d83e3988fbc:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gta-gen9f39c827be0d560f2cc376d83e3988fbc.rockstargames-sites-gta-gen9a63fd127fc0aab231f6740340658d647{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gta-gen9f39c827be0d560f2cc376d83e3988fbc.rockstargames-sites-gta-gen9a63fd127fc0aab231f6740340658d647 img{filter:invert()}.rockstargames-sites-gta-gen9d4ec60c769b079ac712ea0264480d480{align-items:center;background:var(--black-65);border:1px solid var(--white-100);border-radius:4px;display:flex;font-size:var(--font-size-2);justify-content:center;max-width:304px;padding:.75rem var(--padding-lg);transition:all .3s ease-out}.rockstargames-sites-gta-gen9d4ec60c769b079ac712ea0264480d480 .rockstargames-sites-gta-gen9df956d5fc70d2129beb1406170402148{padding:.75rem var(--padding-sm)}.rockstargames-sites-gta-gen9d4ec60c769b079ac712ea0264480d480 .rockstargames-sites-gta-gen9fce12fc6343fbf09a5bb418bb8107f0b{max-width:none}.rockstargames-sites-gta-gen9d4ec60c769b079ac712ea0264480d480:hover:not(:disabled){background-color:var(--circoloco-red)!important;border:1px solid var(--circoloco-red);color:var(--color-h)!important}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480{--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--text-light:#e8e8e8;--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;align-items:center;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:var(--cta-background,#000);background:var(--black-65);border:1px solid var(--foundry-alias-color-text-header);border-radius:var(--border-radius-sm,4px);color:var(--cta-color,#fff);cursor:pointer;display:flex;flex:1 0 0;font-family:var(--cta-font-family,"HelveticaNeueLTW07");font-weight:var(--cta-font-weight,bold);gap:var(--grid-gap-xs,10px);height:auto;justify-content:center;padding:0 var(--rem-3-rem);position:var(--cta-position,static);right:var(--cta-right,0);text-transform:var(--cta-text-transform,uppercase);top:var(--cta-top,0);z-index:var(--cta-z-index)}@media (min-width:2560px){.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480{--max-width-md:1440px}}@media (max-width:767px){.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480{--spacing-lg:2rem;--spacing-xl:4rem}}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]{--cta-padding:var(--primary-button-padding,20px);--cta-background:var(--primary-button-background,#000);--cta-color:var(--primary-button-color,#fff);--cta-text-transform:var(--primary-button-text-transform,uppercase);--cta-font-family:var(--primary-button-font-family);--cta-font-weight:var(--primary-button-font-weight);--cta-position:var(--primary-button-position);--cta-top:var(--primary-button-top);--cta-right:var(--primary-button-right)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]{--cta-padding:var(--secondary-button-padding,20px);--cta-background:var(--secondary-button-background,#000);--cta-color:var(--secondary-button-color,#fff);--cta-text-transform:var(--secondary-button-text-transform,uppercase);--cta-font-family:var(--secondary-button-font-family);--cta-font-weight:var(--secondary-button-font-weight);--cta-position:var(--secondary-button-position);--cta-top:var(--secondary-button-top);--cta-right:var(--secondary-button-right)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform]{--cta-padding:var(--platform-button-padding,20px);--cta-background:var(--platform-button-background,#000);--cta-color:var(--platform-button-color,#fff);--cta-text-transform:var(--platform-button-text-transform,uppercase);--cta-font-family:var(--platform-button-font-family);--cta-font-weight:var(--platform-button-font-weight);--cta-position:var(--platform-button-position,"relative");--cta-top:var(--platform-button-top);--cta-right:var(--platform-button-right)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=callout]{--cta-padding:var(--callout-button-padding,20px);--cta-background:var(--callout-button-background,#000);--cta-color:var(--callout-button-color,#fff);--cta-text-transform:var(--callout-button-text-transform,uppercase);--cta-font-family:var(--callout-button-font-family);--cta-font-weight:var(--callout-button-font-weight);--cta-position:var(--callout-button-position,"relative");--cta-top:var(--callout-button-top);--cta-right:var(--callout-button-right)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]{--button-text-color-hover:var(--white-100);align-items:center;background:var(--button-background-color,var(--black-65,hsla(0,0%,7%,.65)));border:1px solid var(--white-100,#fff);border-radius:var(--border-radius-sm,4px);color:var(--button-text-color,var(--white-100));cursor:pointer;display:flex;flex-direction:row;gap:var(--grid-gap-xs,.5rem);height:var(--button-height-3,3rem);height:auto;justify-content:center;padding:0 var(--padding-sm);transition:all .3s ease-in-out;width:100%}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform][data-brand=reddeadredemption],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary][data-brand=reddeadredemption],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary][data-brand=reddeadredemption],[data-brand=reddeadredemption] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform],[data-brand=reddeadredemption] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary],[data-brand=reddeadredemption] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]{--accent-color:#c00;--font-family-h:RDRUltra}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform][data-brand=reddeadredemption] :lang(pl_pl),.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary][data-brand=reddeadredemption] :lang(pl_pl),.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary][data-brand=reddeadredemption] :lang(pl_pl),[data-brand=reddeadredemption] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform] :lang(pl_pl),[data-brand=reddeadredemption] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary] :lang(pl_pl),[data-brand=reddeadredemption] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary] :lang(pl_pl){--font-family-h:RDRUltra,NeueHelveticaPaneuropean}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform][data-brand=bully],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary][data-brand=bully],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary][data-brand=bully],[data-brand=bully] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform],[data-brand=bully] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary],[data-brand=bully] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]{--accent-color:#f8ad00;--font-family-h:HelveticaNowDisplayBold;--button-background-color:var(--white-100);--button-background-color-hover:var(--accent-color);--button-text-color:var(--black-100);--button-text-color-hover:var(--black-100);-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);padding:0 var(--padding-md,32px)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform] img,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary] img,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary] img{height:1rem;width:auto}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform] .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary] .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary] .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1{display:flex;flex-shrink:0;font-family:var(--font-family-h);font-size:var(--font-size-4);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-sm);text-transform:uppercase}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9a857266233e524e3bb96d327a2095642,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary].rockstargames-sites-gta-gen9a857266233e524e3bb96d327a2095642,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary].rockstargames-sites-gta-gen9a857266233e524e3bb96d327a2095642{background-color:var(--white-100);color:var(--black-100)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform]:hover,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:hover,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:hover{background-color:var(--accent-color,var(--btn-active-color));border-color:var(--accent-color,var(--btn-active-color));color:var(--button-text-color-hover,var(--btn-active-color))}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform]:hover.rockstargames-sites-gta-gen9a857266233e524e3bb96d327a2095642,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:hover.rockstargames-sites-gta-gen9a857266233e524e3bb96d327a2095642,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:hover.rockstargames-sites-gta-gen9a857266233e524e3bb96d327a2095642{color:var(--button-text-color-hover,var(--white-100))}@media (min-width:1280px){.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]{padding:0 var(--padding-md)}}@media (min-width:768px) and (max-width:1539px){.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]{height:2.5rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform] img,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary] img,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary] img{height:1rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform] .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary] .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary] .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1{font-family:var(--font-family-h);font-size:var(--font-size-4);font-size:var(--font-size-3);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-sm);text-transform:uppercase}}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform] .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary] .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary] .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1{font-size:inherit}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform] .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1:lang(ru_ru),.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary] .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1:lang(ru_ru),.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary] .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1:lang(ru_ru){--font-family-h:ChaletComprime}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform]:focus,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform]:hover,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:focus,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:hover,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:focus,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:hover{--btn-active-color:var(--white-100);color:var(--black-100)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform]:focus .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc span,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform]:hover .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc span,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:focus .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc span,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:hover .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc span,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:focus .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc span,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:hover .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc span{color:var(--black-100)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform]:focus .rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform]:hover .rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:focus .rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:hover .rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:focus .rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:hover .rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad{filter:invert(1)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]{transition:all .3s ease-in}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:focus,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:hover,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:focus,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:hover{--button-background-color:var(--white-100);background-color:var(--button-background-color);border-color:var(--button-background-color)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=callout]{align-self:center;color:var(--foundry-global-color-white-static-100);font-family:var(--font-family-h);font-size:var(--font-size-4);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-sm);padding:var(--foundry-global-spacing-gap-250) var(--foundry-global-spacing-gap-800) var(--foundry-global-spacing-gap-200);text-align:center;text-transform:uppercase;transition:all .3s ease-in;white-space:nowrap;width:100%}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=callout]:hover{background:var(--foundry-global-color-white-static-100);border-color:var(--foundry-global-color-white-static-100);color:var(--foundry-global-color-black-static-100)}@media (min-width:1024px){.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=callout]{width:unset}}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=callout]:lang(ru_ru){--font-family-h:ChaletComprime}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9]{--button-text-color-hover:var(--white-100);--cta-font-family:var(--font-family-h);--cta-font-weight:400;align-items:center;background:var(--button-background-color,var(--black-65,hsla(0,0%,7%,.65)));border:1px solid var(--white-100,#fff);border-radius:var(--border-radius-sm,4px);color:var(--button-text-color,var(--white-100));cursor:pointer;display:flex;flex-direction:row;gap:var(--grid-gap-xs,.5rem);height:var(--button-height-3,3rem);justify-content:center;padding:0 var(--padding-sm);transition:all .3s ease-in-out;width:100%}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9][data-brand=reddeadredemption],[data-brand=reddeadredemption] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9]{--accent-color:#c00;--font-family-h:RDRUltra}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9][data-brand=reddeadredemption] :lang(pl_pl),[data-brand=reddeadredemption] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9] :lang(pl_pl){--font-family-h:RDRUltra,NeueHelveticaPaneuropean}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9][data-brand=bully],[data-brand=bully] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9]{--accent-color:#f8ad00;--font-family-h:HelveticaNowDisplayBold;--button-background-color:var(--white-100);--button-background-color-hover:var(--accent-color);--button-text-color:var(--black-100);--button-text-color-hover:var(--black-100);-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);padding:0 var(--padding-md,32px)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9] img{height:1rem;width:auto}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9] .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1{display:flex;flex-shrink:0;font-family:var(--font-family-h);font-size:var(--font-size-4);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-sm);text-transform:uppercase}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9].rockstargames-sites-gta-gen9a857266233e524e3bb96d327a2095642{background-color:var(--white-100);color:var(--black-100)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9]:hover{background-color:var(--accent-color,var(--btn-active-color));border-color:var(--accent-color,var(--btn-active-color));color:var(--button-text-color-hover,var(--btn-active-color))}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9]:hover.rockstargames-sites-gta-gen9a857266233e524e3bb96d327a2095642{color:var(--button-text-color-hover,var(--white-100))}@media (min-width:1280px){.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9]{padding:0 var(--padding-md)}}@media (min-width:768px) and (max-width:1539px){.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9]{height:2.5rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9] img{height:1rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9] .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1{font-family:var(--font-family-h);font-size:var(--font-size-4);font-size:var(--font-size-3);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-sm);text-transform:uppercase}}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9] .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc span,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9] .rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad{transition:all .3s ease-in-out}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9] .rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1{padding-top:.2rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9]:hover{--btn-active-color:var(--white-100)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9]:hover .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc span{color:var(--black-100)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=gen9]:hover .rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad{filter:invert(1)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-size=small]{font-size:var(--font-size-4);font-size:var(--font-size-3);padding:var(--foundry-global-spacing-dimensions-200) var(--foundry-global-spacing-dimensions-300)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-size=medium],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-size=small]{font-family:var(--font-family-h);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-sm);text-transform:uppercase}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-size=medium]{font-size:var(--font-size-4);padding:var(--foundry-global-spacing-dimensions-150) var(--foundry-global-spacing-dimensions-300)}@media (min-width:768px){.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-size=medium]{padding:var(--foundry-global-spacing-dimensions-200) var(--foundry-global-spacing-dimensions-400)}}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-size=large]{font-size:var(--font-size-4);font-size:var(--font-size-5);padding:var(--foundry-global-spacing-dimensions-300) var(--foundry-global-spacing-dimensions-600)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-size=jumbo],.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-size=large]{font-family:var(--font-family-h);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-sm);text-transform:uppercase}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-size=jumbo]{font-size:var(--font-size-4);font-size:var(--font-size-7);padding:var(--foundry-global-spacing-dimensions-500) var(--foundry-global-spacing-dimensions-800)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620{align-items:center;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:var(--black-65);border:1px solid var(--white-65);border-radius:var(--border-radius-sm);display:flex;flex-direction:row;height:3rem;justify-content:center;width:100%}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9cf162a09fdf0c180f3f5091077493d98,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9e34e2c7fd3dd88f7e7d46f495c15a98d,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9f5b0bc5e5a291a3ecab7447d33a76e55{--btn-hover-bg-color:#387a26;border-color:#387a26;justify-content:center}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9d439373e74d36689bc159e9a585db184,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9e49e2b4d44ce7bab7966fbd9fdfb0760,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9baa2b83edce86fda2d9dffb2682092f7{--btn-hover-bg-color:#00439c;border-color:#00439c;justify-content:center}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9a1b9c83f518722f01ecb3ece3681c117{--btn-hover-bg-color:#fcaf17;border-color:#fcaf17;justify-content:center}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9a1b9c83f518722f01ecb3ece3681c117:hover img{filter:invert(1)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9e646f30d1a0c9990c5178e67be93f75e{--btn-hover-bg-color:#e60012;border-color:#e60012;justify-content:center}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9ad074b742a5ce23c053880b289c2bbe6{--btn-hover-bg-color:var(--white-100);background-color:var(--black-200,#000);border-color:#fff;justify-content:center}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9ad074b742a5ce23c053880b289c2bbe6:hover img{filter:invert(1) saturate(0)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9ad074b742a5ce23c053880b289c2bbe6 .rockstargames-sites-gta-gen9f25581474e97714bc974f3ab51136511{height:1.2rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9ad074b742a5ce23c053880b289c2bbe6 .rockstargames-sites-gta-gen9f25581474e97714bc974f3ab51136511 .rockstargames-sites-gta-gen9e974b6c740bfac2959d5170bd2d9f3ca{height:1.5rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9e97115f479fca9697b140bfbfa6534f2{--btn-hover-bg-color:#fff;background-color:var(--black-200,#000);border-color:#fff;justify-content:center}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9e97115f479fca9697b140bfbfa6534f2:hover img{filter:invert()}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9e97115f479fca9697b140bfbfa6534f2 .rockstargames-sites-gta-gen9f25581474e97714bc974f3ab51136511{height:1.2rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620.rockstargames-sites-gta-gen9e97115f479fca9697b140bfbfa6534f2 .rockstargames-sites-gta-gen9f25581474e97714bc974f3ab51136511 .rockstargames-sites-gta-gen9e974b6c740bfac2959d5170bd2d9f3ca{height:1.5rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620:hover{background:var(--btn-hover-bg-color,var(--white-100));border-color:var(--btn-hover-border-color,var(--btn-hover-bg-color));color:var(--btn-hover-font-color,var(--black-100))}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620:hover .rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad{filter:invert(1)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620 .rockstargames-sites-gta-gen9f25581474e97714bc974f3ab51136511{display:block;height:1rem;max-width:100%;object-fit:contain}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38{-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:hsla(0,0%,100%,.15)!important;border:none;border-radius:var(--border-radius-sm,4px);display:inline-flex;height:3.5rem;justify-content:center;max-width:20rem;min-width:10rem;padding:0 3rem;transition:background .3s ease-out}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38 img{align-self:center;height:1rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9cf162a09fdf0c180f3f5091077493d98,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9e34e2c7fd3dd88f7e7d46f495c15a98d,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9f5b0bc5e5a291a3ecab7447d33a76e55{--btn-hover-bg-color:#387a26}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9d439373e74d36689bc159e9a585db184,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9e49e2b4d44ce7bab7966fbd9fdfb0760,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9baa2b83edce86fda2d9dffb2682092f7{--btn-hover-bg-color:#00439c}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9a1b9c83f518722f01ecb3ece3681c117{--btn-hover-bg-color:#fcaf17}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9a1b9c83f518722f01ecb3ece3681c117:hover img{filter:invert(1)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9e646f30d1a0c9990c5178e67be93f75e{--btn-hover-bg-color:#e60012}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9ad074b742a5ce23c053880b289c2bbe6{--btn-hover-bg-color:var(--white-100);background-color:var(--black-200,#000);border-color:#fff;justify-content:center}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9ad074b742a5ce23c053880b289c2bbe6:hover img{filter:invert(1) saturate(0)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9ad074b742a5ce23c053880b289c2bbe6 .rockstargames-sites-gta-gen9f25581474e97714bc974f3ab51136511{height:1.5rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9e97115f479fca9697b140bfbfa6534f2{--btn-hover-bg-color:#fff;background-color:var(--black-200,#000);border-color:#fff;justify-content:center}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9e97115f479fca9697b140bfbfa6534f2:hover img{filter:invert()}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38.rockstargames-sites-gta-gen9e97115f479fca9697b140bfbfa6534f2 .rockstargames-sites-gta-gen9f25581474e97714bc974f3ab51136511{height:1.5rem}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38:hover{background:var(--btn-hover-bg-color)!important}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=platform].rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38:focus{background:hsla(0,0%,100%,.15)!important}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480 .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc{flex-direction:row;gap:var(--grid-gap-xs)}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480 .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480 .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc .rockstargames-sites-gta-gen9c394fea7e071f1213a5d44f5b569bd1a{align-items:center;display:flex;justify-content:center}.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480 .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc .rockstargames-sites-gta-gen9c73b838b4f69aff2241b814ad1547c48,.rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480 .rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc .rockstargames-sites-gta-gen9f0de4560b8a1190f63a65ad1e9fd4e03{height:var(--rem-125-rem,25px);width:var(--rem-125-rem,25px)}.rockstargames-sites-gta-gen9d7a212b6e993966a3773c335359586d5{cursor:default;opacity:.15;pointer-events:none}[data-context=clr-article] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480,[data-context=clr-card] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480{--font-family-body:Rubik;--cta-position:static;--primary-button-position:static;--secondary-button-position:static;--primary-button-font-family:var(--font-family-body);--primary-secondary-font-family:var(--font-family-body);--primary-button-background:var(--white-100);--primary-button-color:var(--text-dark);font-size:var(--font-size-2)}[data-context=clr-article] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary],[data-context=clr-article] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary],[data-context=clr-card] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary],[data-context=clr-card] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]{align-items:center;background:var(--black-65);border:1px solid var(--white-100);border-radius:4px;display:flex;font-size:var(--font-size-2);justify-content:center;max-width:304px;padding:.75rem var(--padding-lg);transition:all .3s ease-out}[data-context=clr-article] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary] .rockstargames-sites-gta-gen9df956d5fc70d2129beb1406170402148,[data-context=clr-article] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary] .rockstargames-sites-gta-gen9df956d5fc70d2129beb1406170402148,[data-context=clr-card] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary] .rockstargames-sites-gta-gen9df956d5fc70d2129beb1406170402148,[data-context=clr-card] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary] .rockstargames-sites-gta-gen9df956d5fc70d2129beb1406170402148{padding:.75rem var(--padding-sm)}[data-context=clr-article] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary] .rockstargames-sites-gta-gen9fce12fc6343fbf09a5bb418bb8107f0b,[data-context=clr-article] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary] .rockstargames-sites-gta-gen9fce12fc6343fbf09a5bb418bb8107f0b,[data-context=clr-card] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary] .rockstargames-sites-gta-gen9fce12fc6343fbf09a5bb418bb8107f0b,[data-context=clr-card] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary] .rockstargames-sites-gta-gen9fce12fc6343fbf09a5bb418bb8107f0b{max-width:none}[data-context=clr-article] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:hover:not(:disabled),[data-context=clr-article] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:hover:not(:disabled),[data-context=clr-card] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:hover:not(:disabled),[data-context=clr-card] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=secondary]:hover:not(:disabled){background-color:var(--circoloco-red)!important;border:1px solid var(--circoloco-red);color:var(--color-h)!important}[data-context=clr-article] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary],[data-context=clr-card] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]{--color-body:var(--primary-button-color);background:var(--primary-button-background)}[data-context=clr-article] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:hover,[data-context=clr-card] .rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480[data-variant=primary]:hover{--color-body:var(--white-100)}', "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./../../buildtime/components/src/Cta/index.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,8DAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,kEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,wIAEI,gCAAA,CACA,YC/OR,CDkPI,2HAEI,2BAAA,CADA,sBC/OR,CD8OI,+HAKQ,eChPZ,CA/DA,8DAKI,kBAAA,CAKA,0BAAA,CADA,iCAAA,CADA,iBAAA,CAPA,YAAA,CAMA,4BAAA,CAHA,sBAAA,CAFA,eAAA,CACA,gCAAA,CAGA,2BAqEJ,CA3EA,4HAaQ,gCAiER,CA9EA,4HAiBQ,cAgER,CA7DI,mFACI,+CAAA,CAGA,qCAAA,CACA,8BA6DR,CAxDA,8DCjCA,2BAAA,CACA,gCAAA,CAGA,yBAAA,CACA,sBAAA,CAGA,uBAAA,CACA,oBAAA,CAGA,kBAAA,CACA,oBAAA,CACA,oBAAA,CAGA,gBAAA,CACA,mBAAA,CACA,4BAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CAEA,gBAAA,CACA,8BAAA,CACA,6BAAA,CACA,8BAAA,CACA,oBAAA,CAEA,qBAAA,CACA,aAAA,CACA,uBAAA,CACA,uBAAA,CACA,0BAAA,CACA,yBAAA,CACA,mBAAA,CAEA,qBAAA,CAGA,0BAAA,CACA,8BAAA,CAEA,qBAAA,CACA,oBAAA,CAGA,4BAAA,CACA,gCAAA,CAGA,oBAAA,CACA,qBAAA,CACA,qBAAA,CACA,qBAAA,CAIA,qBAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CAIA,iCAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CAGA,gCAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CAGA,+BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CAGA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,uBAAA,CAGA,sGAAA,CAMA,2EAAA,CAOA,4BAAA,CDzEI,kBAAA,CAuBA,kCAAA,CAAA,0BAAA,CApBA,qCAAA,CAWA,0BAAA,CACA,uDAAA,CACA,yCAAA,CAZA,2BAAA,CAcA,cAAA,CApBA,YAAA,CAcA,UAAA,CANA,uDAAA,CACA,uCAAA,CAaA,2BAAA,CATA,WAAA,CAZA,sBAAA,CAcA,0BAAA,CALA,mCAAA,CAEA,wBAAA,CALA,kDAAA,CAIA,oBAAA,CAQA,0BAkIJ,CE7EI,0BAAA,8DDpDE,qBDqIJ,CACF,CErJI,yBAAA,8DDwBI,iBAAA,CAAoB,iBDkI1B,CACF,CArII,oFACI,gDAAA,CACA,sDAAA,CACA,4CAAA,CACA,mEAAA,CACA,mDAAA,CACA,mDAAA,CACA,6CAAA,CACA,mCAAA,CACA,uCAuIR,CApII,sFACI,kDAAA,CACA,wDAAA,CACA,8CAAA,CACA,qEAAA,CACA,qDAAA,CACA,qDAAA,CACA,+CAAA,CACA,qCAAA,CACA,yCAsIR,CAnII,qFACI,iDAAA,CACA,uDAAA,CACA,6CAAA,CACA,oEAAA,CACA,oDAAA,CACA,oDAAA,CACA,yDAAA,CACA,oCAAA,CACA,wCAqIR,CAlII,oFACI,gDAAA,CACA,sDAAA,CACA,4CAAA,CACA,mEAAA,CACA,mDAAA,CACA,mDAAA,CACA,wDAAA,CACA,mCAAA,CACA,uCAoIR,CAjII,+PE+1BA,0CAAA,CAIA,kBAAA,CAIA,2EAAA,CAIA,sCAAA,CACA,yCAAA,CACA,+CAAA,CACA,cAAA,CAbA,YAAA,CACA,kBAAA,CAGA,4BAAA,CAaA,kCAAA,CF72BI,WAAA,CE+1BJ,sBAAA,CAWA,2BAAA,CAKA,8BAAA,CAHA,UF5tBJ,CEiuBI,qrBAEI,mBAAA,CACA,wBF3tBR,CEwtBI,mwBAMQ,iDFttBZ,CE0tBI,6mBAEI,sBAAA,CACA,uCAAA,CACA,0CAAA,CACA,mDAAA,CACA,oCAAA,CACA,0CAAA,CAEA,kCAAA,CAAA,0BAAA,CACA,gCFrtBR,CArLI,2QE84BI,WAAA,CACA,UFptBR,CA3LI,ybEo5BI,YAAA,CACA,aAAA,CAvFJ,gCAAA,CADA,4BAAA,CAGA,sCAAA,CACA,sCAAA,CAFA,iCAAA,CAGA,wBF3nBJ,CEitBI,sbAEI,iCAAA,CADA,sBF5sBR,CEgtBI,iRAEI,4DAAA,CADA,wDAAA,CAEA,4DF5sBR,CE8sBQ,wcACI,qDF1sBZ,CE8sBI,0BAAA,+PACI,2BFzsBN,CACF,CE2sBI,gDAAA,+PACI,aFtsBN,CEqsBE,2QAIQ,WFpsBV,CEgsBE,ybA7GA,gCAAA,CADA,4BAAA,CAUA,4BAAA,CAPA,sCAAA,CACA,sCAAA,CAFA,iCAAA,CAGA,wBF5kBF,CACF,CAvPI,mnBASY,iBAmPhB,CAjPgB,upBACI,8BAqPpB,CAhPQ,kiBAEI,mCAAA,CACA,sBAsPZ,CAzPQ,o7BAMQ,sBA2PhB,CAjQQ,s5BAUQ,gBA+PhB,CA1PI,0KAEI,0BA4PR,CA1PQ,4WAEI,0CAAA,CAEA,+CAAA,CADA,2CA+PZ,CA1PI,oFAWI,iBAAA,CAJA,kDAAA,CE2wBJ,gCAAA,CADA,4BAAA,CAGA,sCAAA,CACA,sCAAA,CAFA,iCAAA,CFhxBI,yHAAA,CAGA,iBAAA,CEgxBJ,wBAAA,CF5wBI,0BAAA,CADA,kBAAA,CADA,UAiQR,CA5PQ,0FACI,uDAAA,CACA,yDAAA,CACA,kDA8PZ,CEjWI,0BAAA,oFFuGQ,WA8PV,CACF,CA5PQ,gGACI,8BA8PZ,CA1PI,iFEuxBA,0CAAA,CFpxBI,sCAAA,CACA,qBAAA,CEuxBJ,kBAAA,CAIA,2EAAA,CAIA,sCAAA,CACA,yCAAA,CACA,+CAAA,CACA,cAAA,CAbA,YAAA,CACA,kBAAA,CAGA,4BAAA,CAaA,kCAAA,CAdA,sBAAA,CAWA,2BAAA,CAKA,8BAAA,CAHA,UF5hBJ,CEiiBI,+NAEI,mBAAA,CACA,wBF/hBR,CE4hBI,yPAMQ,iDF9hBZ,CEkiBI,uMAEI,sBAAA,CACA,uCAAA,CACA,0CAAA,CACA,mDAAA,CACA,oCAAA,CACA,0CAAA,CAEA,kCAAA,CAAA,0BAAA,CACA,gCFjiBR,CAjSI,qFEs0BI,WAAA,CACA,UFliBR,CArSI,+IE40BI,YAAA,CACA,aAAA,CAvFJ,gCAAA,CADA,4BAAA,CAGA,sCAAA,CACA,sCAAA,CAFA,iCAAA,CAGA,wBF3cJ,CEiiBI,8IAEI,iCAAA,CADA,sBF9hBR,CEkiBI,uFAEI,4DAAA,CADA,wDAAA,CAEA,4DFhiBR,CEkiBQ,oJACI,qDFhiBZ,CEoiBI,0BAAA,iFACI,2BFjiBN,CACF,CEmiBI,gDAAA,iFACI,aFhiBN,CE+hBE,qFAIQ,WFhiBV,CE4hBE,+IA7GA,gCAAA,CADA,4BAAA,CAUA,4BAAA,CAPA,sCAAA,CACA,sCAAA,CAFA,iCAAA,CAGA,wBF1aF,CACF,CAjVI,mSAQQ,8BA6UZ,CArVI,+IAYQ,iBA4UZ,CAzUQ,uFACI,mCA2UZ,CA5UQ,0JAIQ,sBA2UhB,CA/UQ,qJAQQ,gBA0UhB,CArUI,+EEytBA,4BAAA,CAUA,4BAAA,CFjuBI,iGA6UR,CAzUI,+JEotBA,gCAAA,CAEA,sCAAA,CACA,sCAAA,CAFA,iCAAA,CAGA,wBFrYJ,CAnVI,gFEkuBA,4BAAA,CFhuBI,iGAiVR,CEtfI,yBAAA,gFFyKY,iGAiVd,CACF,CA7UI,+EEwsBA,4BAAA,CAqBA,4BAAA,CF3tBI,iGAsVR,CAlVI,8JEmsBA,gCAAA,CAEA,sCAAA,CACA,sCAAA,CAFA,iCAAA,CAGA,wBF1WJ,CA7VI,+EEksBA,4BAAA,CA2BA,4BAAA,CF3tBI,iGA2VR,CAjVI,kJAGI,kBAAA,CAOA,kCAAA,CAAA,0BAAA,CADA,0BAAA,CADA,gCAAA,CADA,qCAAA,CANA,YAAA,CACA,kBAAA,CAGA,WAAA,CADA,sBAAA,CAEA,UAuVR,CAjVQ,6mBAGI,4BAAA,CACA,oBAAA,CACA,sBAmVZ,CAhVQ,6mBAGI,4BAAA,CACA,oBAAA,CACA,sBAkVZ,CA/UQ,+MACI,4BAAA,CACA,oBAAA,CACA,sBAiVZ,CA/UY,yNACI,gBAiVhB,CA7UQ,+MACI,4BAAA,CACA,oBAAA,CACA,sBA+UZ,CA5UQ,+MAII,qCAAA,CAHA,sCAAA,CACA,iBAAA,CACA,sBA+UZ,CA5UY,yNACI,4BA8UhB,CArVQ,6QAWQ,aA6UhB,CAxVQ,2UAcY,aA6UpB,CAxUQ,+MAEI,yBAAA,CADA,sCAAA,CAEA,iBAAA,CACA,sBA0UZ,CAxUY,yNACI,eA0UhB,CAjVQ,6QAWQ,aAyUhB,CApVQ,2UAcY,aAyUpB,CApUQ,wJACI,qDAAA,CAEA,oEAAA,CADA,kDAuUZ,CAzUQ,sNASQ,gBAmUhB,CA9ZI,gNAgGQ,aAAA,CACA,WAAA,CACA,cAAA,CACA,kBAiUZ,CA1TI,kJAOI,kCAAA,CAAA,0BAAA,CADA,wCAAA,CAEA,WAAA,CACA,yCAAA,CALA,mBAAA,CAHA,aAAA,CAIA,sBAAA,CAFA,eAAA,CADA,eAAA,CAQA,cAAA,CACA,kCA4TR,CAvUI,sJAeQ,iBAAA,CADA,WA6TZ,CAzTQ,6mBAGI,4BA2TZ,CAxTQ,6mBAGI,4BA0TZ,CAvTQ,+MACI,4BAyTZ,CAxTY,yNACI,gBA0ThB,CAtTQ,+MACI,4BAwTZ,CArTQ,+MAII,qCAAA,CAHA,sCAAA,CACA,iBAAA,CACA,sBAwTZ,CArTY,yNACI,4BAuThB,CA9TQ,6QAWQ,aAsThB,CAlTQ,+MAEI,yBAAA,CADA,sCAAA,CAEA,iBAAA,CACA,sBAoTZ,CAlTY,yNACI,eAoThB,CA3TQ,6QAWQ,aAmThB,CA/SQ,wJACI,8CAiTZ,CA/SQ,wJACI,wCAiTZ,CA5rBA,4HAkZQ,kBAAA,CAGA,sBA8SR,CAnsBA,sTAmZQ,kBAAA,CAFA,YAAA,CAGA,sBAoTR,CAxsBA,oXAgaY,8BAAA,CADA,6BA8SZ,CAvSA,8DAGI,cAAA,CAFA,WAAA,CACA,mBA0SJ,CArSC,+KAMO,wBAAA,CACA,qBAAA,CACA,gCAAA,CACA,kCAAA,CACA,oDAAA,CACA,uDAAA,CACA,4CAAA,CACA,uCAAA,CACA,4BAmSR,CAjSQ,0bAtdJ,kBAAA,CAKA,0BAAA,CADA,iCAAA,CADA,iBAAA,CAPA,YAAA,CAMA,4BAAA,CAHA,sBAAA,CAFA,eAAA,CACA,gCAAA,CAGA,2BAqwBJ,CAhTQ,krBA9cA,gCAowBR,CAtTQ,krBA1cA,cAswBR,CAnwBI,8gBACI,+CAAA,CAGA,qCAAA,CACA,8BAswBR,CA/TQ,2NACI,wCAAA,CACA,2CAkUZ,CAhUY,uOACI,6BAmUhB",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n// clr-button styles\n.clr-button {\n    display: flex;\n    max-width: 304px;\n    padding: 0.75rem var(--padding-lg);\n    justify-content: center;\n    align-items: center;\n    transition: all 0.3s ease-out;\n    font-size: var(--font-size-2);\n    border-radius: 4px;\n    border: 1px solid var(--white-100);\n    background: var(--black-65);\n\n    .lgMax {\n        padding: 0.75rem var(--padding-sm);\n    }\n\n    .smMax {\n        max-width: none;\n    }\n\n    &:hover:not(:disabled) {\n        background-color: var(\n            --circoloco-red\n        ) !important; // needed to override inherit\n        border: 1px solid var(--circoloco-red);\n        color: var(--color-h) !important; // needed to override inherit\n    }\n}\n\n// cta styles\n.cta {\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n\n    // Shared styles\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    padding: var(--cta-padding, 20px);\n    background: var(--cta-background, black);\n    color: var(--cta-color, white);\n    text-transform: var(--cta-text-transform, uppercase);\n    font-family: var(--cta-font-family, 'HelveticaNeueLTW07');\n    font-weight: var(--cta-font-weight, bold);\n    position: var(--cta-position, static);\n    top: var(--cta-top, 0);\n    right: var(--cta-right, 0);\n    height: auto;\n    flex: 1 0 0;\n    padding: 0px var(--rem-3-rem);\n    background: var(--black-65);\n    border: 1px solid var(--foundry-alias-color-text-header);\n    border-radius: var(--border-radius-sm, 4px);\n    z-index: var(--cta-z-index);\n    cursor: pointer;\n\n    gap: var(--grid-gap-xs, 10px);\n\n    /* Background Blur */\n    backdrop-filter: blur(25px);\n\n    &[data-variant='primary'] {\n        --cta-padding: var(--primary-button-padding, 20px);\n        --cta-background: var(--primary-button-background, black);\n        --cta-color: var(--primary-button-color, white);\n        --cta-text-transform: var(--primary-button-text-transform, uppercase);\n        --cta-font-family: var(--primary-button-font-family);\n        --cta-font-weight: var(--primary-button-font-weight);\n        --cta-position: var(--primary-button-position);\n        --cta-top: var(--primary-button-top);\n        --cta-right: var(--primary-button-right);\n    }\n\n    &[data-variant='secondary'] {\n        --cta-padding: var(--secondary-button-padding, 20px);\n        --cta-background: var(--secondary-button-background, black);\n        --cta-color: var(--secondary-button-color, white);\n        --cta-text-transform: var(--secondary-button-text-transform, uppercase);\n        --cta-font-family: var(--secondary-button-font-family);\n        --cta-font-weight: var(--secondary-button-font-weight);\n        --cta-position: var(--secondary-button-position);\n        --cta-top: var(--secondary-button-top);\n        --cta-right: var(--secondary-button-right);\n    }\n\n    &[data-variant='platform'] {\n        --cta-padding: var(--platform-button-padding, 20px);\n        --cta-background: var(--platform-button-background, black);\n        --cta-color: var(--platform-button-color, white);\n        --cta-text-transform: var(--platform-button-text-transform, uppercase);\n        --cta-font-family: var(--platform-button-font-family);\n        --cta-font-weight: var(--platform-button-font-weight);\n        --cta-position: var(--platform-button-position, 'relative');\n        --cta-top: var(--platform-button-top);\n        --cta-right: var(--platform-button-right);\n    }\n\n    &[data-variant='callout'] {\n        --cta-padding: var(--callout-button-padding, 20px);\n        --cta-background: var(--callout-button-background, black);\n        --cta-color: var(--callout-button-color, white);\n        --cta-text-transform: var(--callout-button-text-transform, uppercase);\n        --cta-font-family: var(--callout-button-font-family);\n        --cta-font-weight: var(--callout-button-font-weight);\n        --cta-position: var(--callout-button-position, 'relative');\n        --cta-top: var(--callout-button-top);\n        --cta-right: var(--callout-button-right);\n    }\n\n    &[data-variant='primary'],\n    &[data-variant='secondary'],\n    &[data-variant='platform'] {\n        .cta-button();\n\n        height: auto;\n\n        .btnContent {\n            .label {\n                font-size: inherit;\n\n                &:lang(ru_ru) {\n                    --font-family-h: ChaletComprime;\n                }\n            }\n        }\n\n        &:hover,\n        &:focus {\n            --btn-active-color: var(--white-100);\n            color: var(--black-100);\n\n            .btnContent span {\n                color: var(--black-100);\n            }\n\n            .btnIcon {\n                filter: invert(1);\n            }\n        }\n    }\n\n    &[data-variant='primary'],\n    &[data-variant='secondary'] {\n        transition: all 0.3s ease-in;\n\n        &:hover,\n        &:focus {\n            --button-background-color: var(--white-100);\n            border-color: var(--button-background-color);\n            background-color: var(--button-background-color);\n        }\n    }\n\n    &[data-variant='callout'] {\n        .button-text;\n\n        padding: var(--foundry-global-spacing-gap-250)\n            var(--foundry-global-spacing-gap-800)\n            var(--foundry-global-spacing-gap-200);\n        text-align: center;\n        color: var(--foundry-global-color-white-static-100);\n        width: 100%;\n        white-space: nowrap;\n        transition: all 0.3s ease-in;\n        align-self: center;\n\n        &:hover {\n            background: var(--foundry-global-color-white-static-100);\n            border-color: var(--foundry-global-color-white-static-100);\n            color: var(--foundry-global-color-black-static-100);\n        }\n\n        .lg({\n            width: unset;\n        });\n\n        &:lang(ru_ru) {\n            --font-family-h: ChaletComprime;\n        }\n    }\n\n    &[data-variant='gen9'] {\n        .cta-button();\n\n        --cta-font-family: var(--font-family-h);\n        --cta-font-weight: 400;\n\n        .btnContent span,\n        .btnIcon {\n            transition: all 0.3s ease-in-out;\n        }\n\n        .label {\n            padding-top: 0.2rem;\n        }\n\n        &:hover {\n            --btn-active-color: var(--white-100);\n\n            .btnContent span {\n                color: var(--black-100);\n            }\n\n            .btnIcon {\n                filter: invert(1);\n            }\n        }\n    }\n\n    &[data-size='small'] {\n        .button-text-sm;\n        padding: var(--foundry-global-spacing-dimensions-200)\n            var(--foundry-global-spacing-dimensions-300);\n    }\n\n    &[data-size='medium'] {\n        .button-text-md;\n        padding: var(--foundry-global-spacing-dimensions-150)\n            var(--foundry-global-spacing-dimensions-300);\n\n        .mdMin({\n                padding: var(--foundry-global-spacing-dimensions-200)\n                    var(--foundry-global-spacing-dimensions-400);\n            });\n    }\n\n    &[data-size='large'] {\n        .button-text-lg;\n        padding: var(--foundry-global-spacing-dimensions-300)\n            var(--foundry-global-spacing-dimensions-600);\n    }\n\n    &[data-size='jumbo'] {\n        .button-text-xl;\n        padding: var(--foundry-global-spacing-dimensions-500)\n            var(--foundry-global-spacing-dimensions-800);\n    }\n\n    // ~~ PLATFORM BUTTON STYLES ~~\n    //\n    // Platform Buttons with Border Style\n    // Currently used in:\n    //      Expanding Platform Button\n    //      Benefits Expanded Cards\n    &[data-variant='platform'].border {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n        height: 3rem;\n        width: 100%;\n        border-radius: var(--border-radius-sm);\n        border: 1px solid var(--white-65);\n        background: var(--black-65);\n        backdrop-filter: blur(25px);\n\n        &.xboxseriesxs,\n        &.xboxone,\n        &.xbox {\n            --btn-hover-bg-color: #387a26;\n            border-color: #387a26;\n            justify-content: center;\n        }\n\n        &.ps5,\n        &.ps4,\n        &.ps {\n            --btn-hover-bg-color: #00439c;\n            border-color: #00439c;\n            justify-content: center;\n        }\n\n        &.pc {\n            --btn-hover-bg-color: #fcaf17;\n            border-color: #fcaf17;\n            justify-content: center;\n\n            &:hover img {\n                filter: invert(1);\n            }\n        }\n\n        &.nintendoswitch {\n            --btn-hover-bg-color: #e60012;\n            border-color: #e60012;\n            justify-content: center;\n        }\n\n        &.googleplay {\n            background-color: var(--black-200, #000);\n            border-color: #ffffff;\n            justify-content: center;\n            --btn-hover-bg-color: var(--white-100);\n\n            &:hover img {\n                filter: invert(1) saturate(0);\n            }\n\n            .platformIcon {\n                height: 1.2rem;\n\n                .lgMin {\n                    height: 1.5rem;\n                }\n            }\n        }\n\n        &.applestore {\n            background-color: var(--black-200, #000);\n            --btn-hover-bg-color: #ffffff;\n            border-color: #ffffff;\n            justify-content: center;\n\n            &:hover img {\n                filter: invert();\n            }\n\n            .platformIcon {\n                height: 1.2rem;\n\n                .lgMin {\n                    height: 1.5rem;\n                }\n            }\n        }\n\n        &:hover {\n            background: var(--btn-hover-bg-color, var(--white-100));\n            color: var(--btn-hover-font-color, var(--black-100));\n            border-color: var(\n                --btn-hover-border-color,\n                var(--btn-hover-bg-color)\n            );\n\n            .btnIcon {\n                filter: invert(1);\n            }\n        }\n\n        .platformIcon {\n            display: block;\n            height: 1rem;\n            max-width: 100%;\n            object-fit: contain;\n        }\n    }\n\n    // Platform Buttons with Borderless Style\n    // Currently used in:\n    //      Legacy Page Templates\n    &[data-variant='platform'].borderless {\n        height: 3.5rem;\n        min-width: 10rem;\n        max-width: 20rem;\n        display: inline-flex;\n        justify-content: center;\n        background: rgba(255, 255, 255, 0.15) !important;\n        backdrop-filter: blur(25px);\n        border: none;\n        border-radius: var(--border-radius-sm, 4px);\n        padding: 0 3rem;\n        transition: background 0.3s ease-out;\n\n        img {\n            height: 1rem;\n            align-self: center;\n        }\n\n        &.xboxseriesxs,\n        &.xboxone,\n        &.xbox {\n            --btn-hover-bg-color: #387a26;\n        }\n\n        &.ps,\n        &.ps5,\n        &.ps4 {\n            --btn-hover-bg-color: #00439c;\n        }\n\n        &.pc {\n            --btn-hover-bg-color: #fcaf17;\n            &:hover img {\n                filter: invert(1);\n            }\n        }\n\n        &.nintendoswitch {\n            --btn-hover-bg-color: #e60012;\n        }\n\n        &.googleplay {\n            background-color: var(--black-200, #000);\n            border-color: #ffffff;\n            justify-content: center;\n            --btn-hover-bg-color: var(--white-100);\n\n            &:hover img {\n                filter: invert(1) saturate(0);\n            }\n\n            .platformIcon {\n                height: 1.5rem;\n            }\n        }\n\n        &.applestore {\n            background-color: var(--black-200, #000);\n            --btn-hover-bg-color: #ffffff;\n            border-color: #ffffff;\n            justify-content: center;\n\n            &:hover img {\n                filter: invert();\n            }\n\n            .platformIcon {\n                height: 1.5rem;\n            }\n        }\n\n        &:hover {\n            background: var(--btn-hover-bg-color) !important;\n        }\n        &:focus {\n            background: rgba(255, 255, 255, 0.15) !important;\n        }\n    }\n\n    // Button content\n    .btnContent {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n        gap: var(--grid-gap-xs);\n\n        .icon {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .icon-left,\n        .icon-right {\n            width: var(--rem-125-rem, 25px);\n            height: var(--rem-125-rem, 25px);\n        }\n    }\n}\n\n// Disabled styles\n.disabled {\n    opacity: 0.15;\n    pointer-events: none;\n    cursor: default;\n}\n\n// Context-specific styles\n&[data-context='clr-article'],\n&[data-context='clr-card'] {\n    @import '@rsgweb/legacy-design-system/less/gen9-mixins';\n    @import '@rsgweb/legacy-design-system/less/gen9-vars';\n\n    .cta {\n        --font-family-body: Rubik;\n        --cta-position: static;\n        --primary-button-position: static;\n        --secondary-button-position: static;\n        --primary-button-font-family: var(--font-family-body);\n        --primary-secondary-font-family: var(--font-family-body);\n        --primary-button-background: var(--white-100);\n        --primary-button-color: var(--text-dark);\n        font-size: var(--font-size-2);\n\n        &[data-variant='secondary'],\n        &[data-variant='primary'] {\n            .clr-button;\n        }\n\n        &[data-variant='primary'] {\n            --color-body: var(--primary-button-color);\n            background: var(--primary-button-background);\n\n            &:hover {\n                --color-body: var(--white-100);\n            }\n        }\n    }\n}\n", "// Font Family\n--font-family-body: 'Chalet';\n--font-family-h: 'ChaletComprime';\n\n// Font Weight\n--font-weight-regular: 400;\n--font-weight-bold: 700;\n\n// Letter Spacing\n--letter-spacing-body: 0;\n--letter-spacing-h: 0;\n\n// Line Height\n--line-height-sm: 1;\n--line-height-md: 1.1;\n--line-height-lg: 1.6;\n\n// Colors\n--black-200: #000000;\n--black-100: #121212;\n--black-65: rgba(18, 18, 18, 0.65);\n--black-40: rgba(18, 18, 18, 0.4);\n--black-15: rgba(18, 18, 18, 0.15);\n--text-dark: #2d2d2d;\n--border-color: #2d2d2d;\n\n--white-100: #ffffff;\n--white-65: rgba(255, 255, 255, 0.65);\n--white-40: rgba(255, 255, 255, 0.4);\n--white-15: rgba(255, 255, 255, 0.15);\n--text-light: #e8e8e8;\n\n--focusring-blue: blue;\n--red: #e03232;\n--circoloco-red: #eb1818;\n--rockstar-gold: #fcaf17;\n--playstation-blue: #00439c;\n--microsoft-green: #387a26;\n--pc-legacy: #b2b2b2;\n/* #if PCALT */\n--pc-enhanced: #beb279;\n/* #endif */\n\n--color-h: var(--white-100);\n--color-body: var(--text-light);\n\n--green-light: #c1f7bd;\n--green-dark: #81da85;\n\n// Scrollbar Colors\n--scroll-thumb-color: #7d7d7d;\n--scroll-track-color: transparent;\n\n// Max-Widths\n--max-width-sm: 640px;\n--max-width-md: 1088px;\n--max-width-lg: 1920px;\n--max-width-xl: 2560px;\n.xxl({--max-width-md: 1440px;});\n\n// Spacing\n--spacing-xxs: 0.25rem;\n--spacing-xs: 0.5rem;\n--spacing-sm: 1rem;\n--spacing-md: 2rem;\n--spacing-lg: 4rem;\n--spacing-xl: 8rem;\n.smMax({--spacing-lg: 2rem; --spacing-xl: 4rem;});\n\n// Grid Gap\n--grid-gap-xxs: var(--spacing-xxs);\n--grid-gap-xs: var(--spacing-xs);\n--grid-gap-sm: var(--spacing-sm);\n--grid-gap-md: var(--spacing-md);\n--grid-gap-lg: var(--spacing-lg);\n--grid-gap-xl: var(--spacing-xl);\n\n// Padding\n--padding-xxs: var(--spacing-xxs);\n--padding-xs: var(--spacing-xs);\n--padding-sm: var(--spacing-sm);\n--padding-md: var(--spacing-md);\n--padding-lg: var(--spacing-lg);\n--padding-xl: var(--spacing-xl);\n\n// Margin\n--margin-xxs: var(--spacing-xxs);\n--margin-xs: var(--spacing-xs);\n--margin-sm: var(--spacing-sm);\n--margin-md: var(--spacing-md);\n--margin-lg: var(--spacing-lg);\n--margin-xl: var(--spacing-xl);\n\n// Border Radius\n--border-radius-xs: 2px;\n--border-radius-sm: 4px;\n--border-radius-md: 8px;\n--border-radius-lg: 16px;\n\n// Gradients\n--gradient-overlay-bottom: linear-gradient(\n    180.08deg,\n    rgba(0, 0, 0, 0) 25%,\n    rgba(0, 0, 0, 0.5) 65%,\n    rgba(0, 0, 0, 0.6) 100%\n);\n--gradient-overlay-right: linear-gradient(\n    270deg,\n    rgba(0, 0, 0, 0.9) 0%,\n    rgba(0, 0, 0, 0) 100%\n);\n\n// Z-indicies\n--promo-banner-z-index: 11500;\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        pillBtn: "rockstargames-sites-gta-gen9f39c827be0d560f2cc376d83e3988fbc",
        selected: "rockstargames-sites-gta-gen9a63fd127fc0aab231f6740340658d647",
        "clr-button": "rockstargames-sites-gta-gen9d4ec60c769b079ac712ea0264480d480",
        lgMax: "rockstargames-sites-gta-gen9df956d5fc70d2129beb1406170402148",
        smMax: "rockstargames-sites-gta-gen9fce12fc6343fbf09a5bb418bb8107f0b",
        cta: "rockstargames-sites-gta-gen9a8f295907e9b244767bb48cfc469b480",
        label: "rockstargames-sites-gta-gen9d75a0e2af2bf8502f8647015e04e10e1",
        primary: "rockstargames-sites-gta-gen9a857266233e524e3bb96d327a2095642",
        btnContent: "rockstargames-sites-gta-gen9d4df564f6143ae5909e2bbc95b4a7ebc",
        btnIcon: "rockstargames-sites-gta-gen9f7afeacf3abab7856caca9ea1fad81ad",
        border: "rockstargames-sites-gta-gen9aab360f8b5cf6965c56e5f86813b8620",
        xbox: "rockstargames-sites-gta-gen9cf162a09fdf0c180f3f5091077493d98",
        xboxone: "rockstargames-sites-gta-gen9e34e2c7fd3dd88f7e7d46f495c15a98d",
        xboxseriesxs: "rockstargames-sites-gta-gen9f5b0bc5e5a291a3ecab7447d33a76e55",
        ps: "rockstargames-sites-gta-gen9d439373e74d36689bc159e9a585db184",
        ps4: "rockstargames-sites-gta-gen9e49e2b4d44ce7bab7966fbd9fdfb0760",
        ps5: "rockstargames-sites-gta-gen9baa2b83edce86fda2d9dffb2682092f7",
        pc: "rockstargames-sites-gta-gen9a1b9c83f518722f01ecb3ece3681c117",
        nintendoswitch: "rockstargames-sites-gta-gen9e646f30d1a0c9990c5178e67be93f75e",
        googleplay: "rockstargames-sites-gta-gen9ad074b742a5ce23c053880b289c2bbe6",
        platformIcon: "rockstargames-sites-gta-gen9f25581474e97714bc974f3ab51136511",
        lgMin: "rockstargames-sites-gta-gen9e974b6c740bfac2959d5170bd2d9f3ca",
        applestore: "rockstargames-sites-gta-gen9e97115f479fca9697b140bfbfa6534f2",
        borderless: "rockstargames-sites-gta-gen9cad0684072c4a89cb09b9f79ddda6f38",
        icon: "rockstargames-sites-gta-gen9c394fea7e071f1213a5d44f5b569bd1a",
        "icon-left": "rockstargames-sites-gta-gen9c73b838b4f69aff2241b814ad1547c48",
        "icon-right": "rockstargames-sites-gta-gen9f0de4560b8a1190f63a65ad1e9fd4e03",
        disabled: "rockstargames-sites-gta-gen9d7a212b6e993966a3773c335359586d5"
      };
      const s = o
    },
    39460: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var n = t(42587),
        r = t.n(n),
        i = t(15081),
        o = t.n(i)()(r());
      o.push([e.id, ".rockstargames-sites-gta-gen9d5c408a8b618087ef4bb452f96526b2b{grid-gap:1rem;align-content:center;background:#000;display:grid;grid-auto-rows:max-content;height:100%;justify-items:center;padding:.5rem}.rockstargames-sites-gta-gen9d5c408a8b618087ef4bb452f96526b2b,.rockstargames-sites-gta-gen9d5c408a8b618087ef4bb452f96526b2b h1{color:#fff}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/error/ErrorBoundarySimple/index.less"],
        names: [],
        mappings: "AAAA,8DAQI,aAAA,CAFA,oBAAA,CAHA,eAAA,CAEA,YAAA,CAIA,0BAAA,CARA,WAAA,CAMA,oBAAA,CALA,aAQJ,CAVA,+HAII,UASJ",
        sourcesContent: [".errorMsg {\n    height: 100%;\n    padding: 0.5rem;\n    background: black;\n    color: white;\n    display: grid;\n    align-content: center;\n    justify-items: center;\n    grid-gap: 1rem;\n    grid-auto-rows: max-content;\n    h1 {\n        color: white;\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        errorMsg: "rockstargames-sites-gta-gen9d5c408a8b618087ef4bb452f96526b2b"
      };
      const s = o
    },
    84213: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "SecondaryNavContent"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "branchTags"
              }
            },
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "ListValue",
                  values: [{
                    kind: "StringValue",
                    value: "38a82",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "8k827",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "o49o8",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "k9a48",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "k9a38",
                    block: !1
                  }, {
                    kind: "StringValue",
                    value: "a1453",
                    block: !1
                  }]
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payloadRepresentedAsTree"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "all"
              },
              name: {
                kind: "Name",
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "ListValue",
                  values: [{
                    kind: "StringValue",
                    value: "2k384",
                    block: !1
                  }]
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payloadRepresentedAsTree"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 650
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query SecondaryNavContent($locale: String!, $branchTags: [String]) {\n    tinaModulesInfo(\n        locale: $locale\n        ids: [\n            "38a82" # Contact Missions\n            "8k827" # Businesses\n            "o49o8" # Heists\n            "k9a48" # Recreation\n            "k9a38" # Series Modes\n            "a1453" # Special Interests\n        ]\n    ) {\n        tina {\n            payload\n            payloadRepresentedAsTree\n        }\n    }\n\n    all: tinaModulesInfo(\n        locale: $locale\n        ids: [\n            "2k384" # All Packs\n        ]\n    ) {\n        tina {\n            payload\n            payloadRepresentedAsTree\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.SecondaryNavContent = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = n[a] || new Set,
          o = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var n = r(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "SecondaryNavContent")
    },
    85719: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    80391: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    28985: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    47240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    11008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    32903: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    49429: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    81715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    }
  }
]);